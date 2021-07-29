const mockServer = require('mockserver-client');
const mockServerClient = mockServer.mockServerClient;

let lib;

describe('oauth2 authorization', () => {
	beforeEach(async () => {
		jest.resetModules();

		lib = require('../../dist');

		await mockServerClient("localhost", 1080, null, false).clear('/oauth/token', 'ALL');
	});

	it('should authorize and save access and refresh tokens', async () => {
		const pdClient = lib.ApiClient.instance;
		const oauth2 = pdClient.authentications.oauth2;

		oauth2.host = 'http://localhost:1080';

		oauth2.clientId = 'fakeClientId';
		oauth2.clientSecret = 'fakeClientSecret';
		oauth2.redirectUri = 'https://example.org';

		const base64ClientIdAndSecret = Buffer.from(`${oauth2.clientId}:${oauth2.clientSecret}`).toString('base64');

		await mockServerClient("localhost", 1080, null, false).mockAnyResponse({
			httpRequest: {
				method: 'POST',
				path: '/oauth/token',
				body: 'code=fakeAuthCode&redirect_uri=https://example.org&grant_type=authorization_code',
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

		const auth = await pdClient.authorize('fakeAuthCode');

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

	it('should throw clientId is not set', async () => {
		const pdClient = lib.ApiClient.instance;
		const oauth2 = pdClient.authentications.oauth2;

		oauth2.host = 'http://localhost:1080';

		try {
			expect(
				await pdClient.authorize('fakeAuthCode')
			).toThrow();
		} catch (error) {
			expect(error.message).toBe('OAuth 2 property clientId is not set.');
		}
	});

	it('should throw clientSecret is not set', async () => {
		const pdClient = lib.ApiClient.instance;
		const oauth2 = pdClient.authentications.oauth2;

		oauth2.host = 'http://localhost:1080';
		oauth2.clientId = 'fakeClientId';

		try {
			expect(
				await pdClient.authorize('fakeAuthCode')
			).toThrow();
		} catch (error) {
			expect(error.message).toBe('OAuth 2 property clientSecret is not set.');
		}
	});

	it('should throw redirectUri is not set', async () => {
		const pdClient = lib.ApiClient.instance;
		const oauth2 = pdClient.authentications.oauth2;

		oauth2.host = 'http://localhost:1080';
		oauth2.clientId = 'fakeClientId';
		oauth2.clientSecret = 'fakeClientSecret';

		try {
			expect(
				await pdClient.authorize('fakeAuthCode')
			).toThrow();
		} catch (error) {
			expect(error.message).toBe('OAuth 2 property redirectUri is not set.');
		}
	});

	it('should throw wrong auth_code', async () => {
		const pdClient = lib.ApiClient.instance;
		const oauth2 = pdClient.authentications.oauth2;

		oauth2.host = 'http://localhost:1080';
		oauth2.clientId = 'fakeClientId';
		oauth2.clientSecret = 'fakeClientSecret';
		oauth2.redirectUri = 'https://example.org';

		const base64ClientIdAndSecret = Buffer.from(`${oauth2.clientId}:${oauth2.clientSecret}`).toString('base64');

		await mockServerClient("localhost", 1080, null, false).mockAnyResponse({
			httpRequest: {
				method: 'POST',
				path: '/oauth/token',
				body: 'code=wrongAuthCode&redirect_uri=https://example.org&grant_type=authorization_code',
				headers: {
					'Authorization': [`Basic ${base64ClientIdAndSecret}`],
				},
			},
			httpResponse: {
				statusCode: 400,
				headers: {
					"content-type": ['application/json; charset=utf-8'],
				},
				body: JSON.stringify({
					success: 'false',
					message: 'Invalid grant: authorization code is invalid',
					error: 'invalid_grant',
				})
			},
		});

		try {
			expect(
				await pdClient.authorize('wrongAuthCode')
			).toThrow();
		} catch (error) {
			expect(error.context.error.text).toBe('{"success":"false","message":"Invalid grant: authorization code is invalid","error":"invalid_grant"}');
		}
	});
});
