const mockServer = require('mockserver-client');
const mockServerClient = mockServer.mockServerClient;

let lib;

describe('oauth2 accessToken', () => {
	beforeEach(async () => {
		jest.resetModules();

		lib = require('../../dist');

		await mockServerClient("localhost", 1080, null, false).clear('/oauth/token', 'ALL');
	});

	it('should refresh accessToken with valid refreshToken', async () => {
		await mockServerClient("localhost", 1080, null, false).mockAnyResponse({
			httpRequest: {
				method: 'POST',
				path: '/oauth/token',
				body: 'refresh_token=fakeRefreshToken&client_id=fakeClientId&client_secret=fakeClientSecret&grant_type=refresh_token',
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

		const pdClient = lib.ApiClient.instance;
		const oauth2 = pdClient.authentications.oauth2;

		oauth2.host = 'http://localhost:1080';
		oauth2.clientId = 'fakeClientId';
		oauth2.clientSecret = 'fakeClientSecret';
		oauth2.redirectUri = 'https://example.org';
		oauth2.refreshToken = 'fakeRefreshToken';

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
		const pdClient = lib.ApiClient.instance;
		const oauth2 = pdClient.authentications.oauth2;

		oauth2.host = 'http://localhost:1080';
		oauth2.clientId = 'fakeClientId';
		oauth2.clientSecret = 'fakeClientSecret';
		oauth2.redirectUri = 'https://example.org';

		try {
			expect(
				await pdClient.refreshToken()
			).toThrow();
		} catch (error) {
			expect(error.message).toBe('OAuth 2 property refreshToken is not set.');
		}
	});

	it('should throw wrong refresh token', async () => {
		await mockServerClient("localhost", 1080, null, false).mockAnyResponse({
			httpRequest: {
				method: 'POST',
				path: '/oauth/token',
				body: 'refresh_token=wrongRefreshToken&client_id=fakeClientId&client_secret=fakeClientSecret&grant_type=refresh_token',
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

		const pdClient = lib.ApiClient.instance;
		const oauth2 = pdClient.authentications.oauth2;

		oauth2.host = 'http://localhost:1080';
		oauth2.clientId = 'fakeClientId';
		oauth2.clientSecret = 'fakeClientSecret';
		oauth2.redirectUri = 'https://example.org';
		oauth2.refreshToken = 'wrongRefreshToken';

		try {
			expect(
				await pdClient.refreshToken()
			).toThrow();
		} catch (error) {
			expect(error.response.text).toBe('{"success":"false","message":"Invalid grant: refresh token is invalid","error":"invalid_grant"}');
		}
	});
});
