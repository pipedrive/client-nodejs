import { getLib } from './utils';
import { OauthApiMock } from './stubs';
import nock from 'nock';

const oauth2 = {
	host: 'http://localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
};

describe('oauth2 authorization', () => {
	let lib;

	beforeAll(async () => {
		lib = await getLib();
	});

	afterEach(() => nock.cleanAll());

	it('should authorize and save access and refresh tokens', async () => {
		const oauthClient = new lib.OAuth2Configuration(oauth2);
		oauthClient.refreshToken = 'fakeRefreshToken';
		OauthApiMock.refresh({
			access_token: 'freshAccessToken',
			api_domain: 'localhost',
			expires_in: '3600',
			refresh_token: 'freshRefreshToken',
			scope: 'deals:full,users:full,1337',
			token_type: 'bearer',
		}, 200);

		const auth = await oauthClient.authorize('fakeAuthCode');

		expect(auth).toMatchObject({
			access_token: 'freshAccessToken',
			token_type: 'bearer',
			refresh_token: 'freshRefreshToken',
			scope: 'deals:full,users:full,1337',
			expires_in: '3600',
			api_domain: 'localhost',
		});

		expect(oauthClient.accessToken).toEqual(auth.access_token);
		expect(oauthClient.refreshToken).toEqual(auth.refresh_token);
	});

	it('should throw if clientId is not set', async () => {
		try {
			new lib.OAuth2Configuration({
				host: 'localhost',
				clientSecret: 'fakeClientSecret',
				redirectUri: 'https://example.org',
			});
		} catch (error) {
			expect(error).toEqual(new Error('OAuth 2 property clientId is not set.'));
		}
	});

	it('should throw if clientSecret is not set', async () => {
		try {
			new lib.OAuth2Configuration({
				...oauth2,
				clientSecret: undefined,
			});
		} catch (error) {
			expect(error).toEqual(new Error('OAuth 2 property clientSecret is not set.'));
		}
	});

	it('should throw if redirectUri is not set', async () => {
		try {
			new lib.OAuth2Configuration({
				...oauth2,
				redirectUri: undefined,

			});
		} catch (error) {
			expect(error).toEqual(new Error('OAuth 2 property redirectUri is not set.'));
		}
	});

	it('should throw if wrong auth_code', async () => {
		const oauthClient = new lib.OAuth2Configuration(oauth2);

		oauthClient.refreshToken = 'fakeRefreshToken';

		OauthApiMock.refresh({
			success: false, message: 'Invalid grant: refresh token is invalid', error: 'invalid_grant',
		}, 400);
		try {
			expect(await oauthClient.authorize('wrongAuthCode')).toThrow();
		} catch (error) {
			expect(error).toEqual(
				{ success: false, message: 'Invalid grant: refresh token is invalid', error: 'invalid_grant' },
			);
		}
	});
});
