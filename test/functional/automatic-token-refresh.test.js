const mockServer = require('mockserver-client');

const mockServerClient = mockServer.mockServerClient;

let lib;

function setUpPdClientWithOAuth(isTokenExpired = false) {
	const pdClient = lib.ApiClient.instance;

	pdClient.basePath = 'http://localhost:1080/v1';

	const oauth2 = pdClient.authentications.oauth2;

	oauth2.host = 'http://localhost:1080';
	oauth2.clientId = 'fakeClientId';
	oauth2.clientSecret = 'fakeClientSecret';
	oauth2.redirectUri = 'https://example.org';
	oauth2.accessToken = 'fakeAccessToken';
	oauth2.refreshToken = 'fakeRefreshToken';

	if (isTokenExpired) {
		oauth2.expiresAt = 100; // some random timestamp before Date.now()
	}

	return pdClient;
}

async function mockTokenRefresh() {
	return await mockServerClient('localhost', 1080, null, false).mockAnyResponse({
		httpRequest: {
			method: 'POST',
			path: '/oauth/token',
			body: 'refresh_token=fakeRefreshToken&client_id=fakeClientId&client_secret=fakeClientSecret&grant_type=refresh_token',
		},
		httpResponse: {
			statusCode: 200,
			headers: {
				'content-type': ['application/json; charset=utf-8'],
			},
			body: JSON.stringify({
				access_token: 'freshAccessToken',
				token_type: 'bearer',
				refresh_token: 'freshRefreshToken',
				scope: 'deals:full,users:full,1337',
				expires_in: '3600',
				api_domain: 'http://localhost:1080',
			}),
		},
	});
}

async function mockGetUsers() {
	return await mockServerClient('localhost', 1080, null, false).mockAnyResponse({
		httpRequest: {
			method: 'GET',
			path: '/v1/users',
			headers: {
				'User-Agent': [`Pipedrive-SDK-Javascript-${require('../../package.json').version}`],
			},
		},
		httpResponse: {
			statusCode: 200,
			headers: {
				'Content-Type': ['application/json; charset=utf-8'],
			},
			body: JSON.stringify({
				success: true,
				data: [
					{
						id: 1,
						name: 'John Doe',
					},
				],
			}),
		},
	});
}

describe('automatic token refresh in api calls', () => {
	beforeEach(async () => {
		jest.resetModules();

		lib = require('../../dist');

		await mockServerClient('localhost', 1080, null, false).clear('/oauth/token', 'ALL');
		await mockServerClient('localhost', 1080, null, false).clear('/v1/users', 'ALL');
	});

	it('should refresh expired access token before making api call', async () => {
		const pdClient = setUpPdClientWithOAuth(true);

		await mockTokenRefresh();

		await mockGetUsers();

		const users = await new lib.UsersApi().getUsers();

		expect(pdClient.authentications.oauth2.accessToken).toEqual('freshAccessToken');

		expect(users).toEqual({
			success: true,
			data: [
				{
					id: 1,
					name: 'John Doe',
				},
			],
			extra: {}
		});
	});

	it('should have correct User-Agent request header in api call', async () => {
		setUpPdClientWithOAuth();

		await mockGetUsers();

		const users = await new lib.UsersApi().getUsers();

		expect(users).toEqual({
			success: true,
			data: [
				{
					id: 1,
					name: 'John Doe',
				},
			],
			extra: {}
		});
	});

	it('should throw in case of incorrect User-Agent request header in api call', async () => {
		const pdClient = lib.ApiClient.instance;

		pdClient.basePath = 'http://localhost:1080/v1';
		pdClient.defaultHeaders = {
			'User-Agent': 'Wrong-User-Agent',
		}

		await mockGetUsers();

		try {
			expect(
				await new lib.UsersApi().getUsers()
			).toThrow();
		} catch (error) {
			expect(error.response.statusCode).toEqual(404);
		}
	});

	it('should refresh token and retry api call in case of status code 401', async () => {
		const pdClient = setUpPdClientWithOAuth();

		await mockTokenRefresh();

		await mockServerClient('localhost', 1080, null, false).mockAnyResponse({
			httpRequest: {
				method: 'GET',
				path: '/v1/users',
				headers: {
					Authorization: ['Bearer fakeAccessToken'],
				},
			},
			httpResponse: {
				statusCode: 401,
			},
		});

		const expectedUsers = [
			{
				id: 1,
				name: 'John Doe',
			},
		];

		await mockServerClient('localhost', 1080, null, false).mockAnyResponse({
			httpRequest: {
				method: 'GET',
				path: '/v1/users',
				headers: {
					Authorization: ['Bearer freshAccessToken'],
				},
			},
			httpResponse: {
				statusCode: 200,
				headers: {
					'Content-Type': ['application/json; charset=utf-8'],
				},
				body: JSON.stringify({
					success: true,
					data: expectedUsers,
				}),
			},
		});

		const users = await new lib.UsersApi().getUsers();

		expect(pdClient.authentications.oauth2.accessToken).toEqual('freshAccessToken');

		expect(users).toEqual({
			success: true,
			data: [
				{
					id: 1,
					name: 'John Doe',
				},
			],
			extra: {}
		});
	});
});
