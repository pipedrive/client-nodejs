import { getLib } from './utils';
import { OauthApiMock } from './stubs';
import nock from 'nock';

const oauth2 = {
	host: 'https://api.pipedrive.com',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
};

describe('oauth2 accessToken', () => {
	let ApiClient;

	beforeAll(async () => {
		const lib = await getLib();
		ApiClient = lib.ApiClient;
		server.listen();
		lib = await getLib();
	});

	afterEach(() => nock.cleanAll());

	it('should refresh accessToken with valid refreshToken', async () => {
		const pdClient = new ApiClient();
		pdClient.authentications.oauth2 = { ...oauth2, refreshToken: 'fakeRefreshToken' };
		const configuration = new lib.OAuth2Configuration(oauth2);
		configuration.refreshToken = 'fakeRefreshToken';
		OauthApiMock.refresh({
			access_token: 'freshAccessToken',
			api_domain: 'localhost',
			expires_in: '3600',
			refresh_token: 'freshRefreshToken',
			scope: 'deals:full,users:full,1337',
			token_type: 'bearer',
		}, 200);

		const auth = await pdClient.refreshToken();

		expect(auth).toMatchObject({
			access_token: 'freshAccessToken',
			token_type: 'bearer',
			refresh_token: 'freshRefreshToken',
			scope: 'deals:full,users:full,1337',
			expires_in: '3600',
			api_domain: 'localhost',
		});

		expect(pdClient.authentications.oauth2.accessToken).toBe(auth.access_token);
		expect(pdClient.authentications.oauth2.refreshToken).toBe(auth.refresh_token);
	});

	it('should throw if refreshToken is not set', async () => {
		const pdClient = new ApiClient();
		pdClient.authentications.oauth2 = { ...oauth2 };

		OauthApiMock.refresh({
			success: 'false',
			message: 'Invalid grant: refresh token is invalid',
			error: 'invalid_grant',
		}, 400);
		try {
			expect(await pdClient.refreshToken()).toThrow();
		} catch (error) {
			expect(error.message).toBe('OAuth 2 property refreshToken is not set.');
		}
	});

	it('should throw if wrong refresh token', async () => {
		const pdClient = new ApiClient();
		pdClient.authentications.oauth2 = { ...oauth2, refreshToken: 'wrongRefreshToken' };

		OauthApiMock.refresh({
			success: 'false',
			message: 'Invalid grant: refresh token is invalid',
			error: 'invalid_grant',
		}, 400);

		try {
			expect(await pdClient.refreshToken()).toThrow();
		} catch (error) {
			expect(error.context.error.text).toBe(
				'{"success":"false","message":"Invalid grant: refresh token is invalid","error":"invalid_grant"}',
			);
		}
	});
});