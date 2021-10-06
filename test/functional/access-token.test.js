const mockServer = require('mockserver-client');
const mockServerClient = mockServer.mockServerClient;

let lib;

describe('oauth2 accessToken', () => {
	let oauth2;
	let pdClient;
	let base64ClientIdAndSecret;


	beforeEach(async () => {
		jest.resetModules();

		lib = require('../../dist');

		await mockServerClient('localhost', 1080, null, false).clear('/oauth/token', 'ALL');

		pdClient = lib.ApiClient.instance;
		oauth2 = pdClient.authentications.oauth2;

		oauth2.host = 'http://localhost:1080';
		oauth2.clientId = 'fakeClientId';
		oauth2.clientSecret = 'fakeClientSecret';
		oauth2.redirectUri = 'https://example.org';
		base64ClientIdAndSecret = Buffer.from(`${oauth2.clientId}:${oauth2.clientSecret}`).toString('base64');
	});

	it('should refresh accessToken with valid refreshToken', async () => {
		oauth2.refreshToken = 'fakeRefreshToken';

		await mockServerClient("localhost", 1080, null, false).mockAnyResponse({
			httpRequest: {
				method: 'POST',
				path: '/oauth/token',
				body: 'refresh_token=fakeRefreshToken&grant_type=refresh_token',
				headers: {
					'Authorization': [`Basic ${base64ClientIdAndSecret}`],
				},
			},
			httpResponse: {
				statusCode: 200,
				headers: {
					"content-type": ['application/json; charset=utf-8'],
				},
				body: JSON.stringify({
					access_token: 'freshAccessToken',
					token_type: 'bearer',
					refresh_token: 'freshRefreshToken',
					scope: 'deals:full,users:full,1337',
					expires_in: '3600',
					api_domain: 'http://localhost:1080',
				})
			},
		});

		const auth = await pdClient.refreshToken();

		expect(auth).toMatchObject({
				access_token: 'freshAccessToken',
				token_type: 'bearer',
				refresh_token: 'freshRefreshToken',
				scope: 'deals:full,users:full,1337',
				expires_in: '3600',
				api_domain: 'http://localhost:1080'
			}
		);

		expect(oauth2.accessToken).toBe(auth.access_token);
		expect(oauth2.refreshToken).toBe(auth.refresh_token);
	});

	it('should throw refreshToken is not set', async () => {
		try {
			expect(
				await pdClient.refreshToken()
			).toThrow();
		} catch (error) {
			expect(error.message).toBe('OAuth 2 property refreshToken is not set.');
		}
	});

	it('should throw wrong refresh token', async () => {
		oauth2.refreshToken = 'wrongRefreshToken';

		await mockServerClient("localhost", 1080, null, false).mockAnyResponse({
			httpRequest: {
				method: 'POST',
				path: '/oauth/token',
				headers: {
					'Authorization': [`Basic ${base64ClientIdAndSecret}`],
				},
				body: 'refresh_token=wrongRefreshToken&grant_type=refresh_token',
			},
			httpResponse: {
				statusCode: 400,
				headers: {
					"content-type": ['application/json; charset=utf-8'],
				},
				body: JSON.stringify({
					success: 'false',
					message: 'Invalid grant: refresh token is invalid',
					error: 'invalid_grant',
				})
			},
		});

		try {
			expect(
				await pdClient.refreshToken()
			).toThrow();
		} catch (error) {
			expect(error.context.error.text).toBe('{"success":"false","message":"Invalid grant: refresh token is invalid","error":"invalid_grant"}');
		}
	});
});
