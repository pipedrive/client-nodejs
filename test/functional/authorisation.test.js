import { getLib, getMockServer } from './utils';

const oauth2 = {
	host: 'localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
};

const server = getMockServer(oauth2);

describe('oauth2 authorization', () => {
	let lib;
	beforeAll(async () => {
		lib = await getLib();
		server.listen();
		// server.events.on('request:start', ({ request }) => {
		// 	console.log('MSW intercepted:', request.method, request.url);
		// });
	});

	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it('should authorize and save access and refresh tokens', async () => {
		const oauthClient = new lib.OAuth2Configuration(oauth2);
		oauthClient.refreshToken = 'fakeRefreshToken';
		const auth = await oauthClient.authorize('fakeAuthCode');

		expect(auth.data).toMatchObject({
			access_token: 'freshAccessToken',
			token_type: 'bearer',
			refresh_token: 'freshRefreshToken',
			scope: 'deals:full,users:full,1337',
			expires_in: '3600',
			api_domain: 'localhost',
		});

		// expect(oauthClient.accessToken).toEqual(auth.access_token);
		// expect(oauthClient.refreshToken).toEqual(auth.refresh_token);
	});

	it.skip('should throw if clientId is not set', async () => {
		const oauthClient = new lib.OAuth2Configuration({
			host: 'localhost',
			clientSecret: 'fakeClientSecret',
			redirectUri: 'https://example.org',
		});
		oauthClient.refreshToken = 'fakeRefreshToken';

		try {
			expect(await oauthClient.authorize('fakeAuthCode')).toThrow();
		} catch (error) {
			expect(error.response.data.message).toBe('OAuth 2 property clientId is not set.');
		}
	});

	it.skip('should throw if clientSecret is not set', async () => {
		const oauthClient = new lib.OAuth2Configuration({
			...oauth2,
			clientSecret: undefined,

		});
		oauthClient.refreshToken = 'fakeRefreshToken';

		try {
			expect(await oauthClient.authorize('fakeAuthCode')).toThrow();
		} catch (error) {
			expect(error.response.data.message).toBe('OAuth 2 property clientSecret is not set.');
		}
	});

	it.skip('should throw if redirectUri is not set', async () => {
		const oauthClient = new lib.OAuth2Configuration({
			...oauth2,
			redirectUri: undefined,

		});

		oauthClient.refreshToken = 'fakeRefreshToken';

		try {
			expect(await oauthClient.authorize('fakeAuthCode')).toThrow();
		} catch (error) {
			expect(error.response.data.message).toBe('OAuth 2 property redirectUri is not set.');
		}
	});

	it('should throw if wrong auth_code', async () => {
		const oauthClient = new lib.OAuth2Configuration(oauth2);

		oauthClient.refreshToken = 'fakeRefreshToken';

		try {
			expect(await oauthClient.authorize('wrongAuthCode')).toThrow();
		} catch (error) {
			expect(error.response.data).toEqual(
				{ success: 'false', message: 'Invalid grant: refresh token is invalid', error: 'invalid_grant' },
			);
		}
	});
});
