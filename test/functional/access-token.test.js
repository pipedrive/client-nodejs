import { getLib, getMockServer } from './utils';

const oauth2 = {
	host: 'localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
};

const server = getMockServer(oauth2);

describe('oauth2 accessToken', () => {
	let lib;

	beforeAll(async () => {
		lib = await getLib();
		server.listen();
	});

	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it('should refresh accessToken with valid refreshToken', async () => {
		const configuration = new lib.OAuth2Configuration(oauth2);
		configuration.refreshToken = 'fakeRefreshToken';

		const auth = await configuration.tokenRefresh();

		expect(auth.data).toMatchObject({
			access_token: 'freshAccessToken',
			token_type: 'bearer',
			refresh_token: 'freshRefreshToken',
			scope: 'deals:full,users:full,1337',
			expires_in: '3600',
			api_domain: 'localhost',
		});

		// expect(configuration.accessToken).toBe(auth.access_token);
		// expect(configuration.refreshToken).toBe(auth.refresh_token);
	});

	it('should throw if refreshToken is not set', async () => {
		const configuration = new lib.OAuth2Configuration(oauth2);

		try {
			expect(await configuration.tokenRefresh()).toThrow();
		} catch (error) {
			expect(error.response.data.message).toBe('Invalid grant: refresh token is invalid');
		}
	});

	it('should throw if wrong refresh token', async () => {
		const configuration = new lib.OAuth2Configuration(oauth2);
		configuration.refreshToken = 'wrongRefreshToken';

		try {
			expect(await configuration.tokenRefresh()).toThrow();
		} catch (error) {
			expect(error.response.data).toEqual(
				{ success: 'false', message: 'Invalid grant: refresh token is invalid', error: 'invalid_grant' },
			);
		}
	});
});
