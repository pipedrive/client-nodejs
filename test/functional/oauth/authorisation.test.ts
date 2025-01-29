import { OauthApiMock } from '../stubs';

import { OAuth2Configuration,TokenResponse } from '../../../dist/versions/v1';

const oauth2 = {
	host: 'http://localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
};

describe('OAuth2 Authorization', () => {
	let oauth2Mock: OauthApiMock;

	beforeAll(() => {
		oauth2Mock = new OauthApiMock();
	});

	afterEach(() => oauth2Mock.cleanAll());

	it('should authorize and save access and refresh tokens', async () => {
		const oauthClient = new OAuth2Configuration(oauth2);

		oauthClient.updateToken({
			refresh_token: 'fakeRefreshToken',
		} as TokenResponse);

		oauth2Mock.refresh({
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
		const accessToken = await oauthClient.getAccessToken();
		expect(accessToken).toEqual(auth.access_token);
	});

	it('should throw if clientId is not set', async () => {
		try {
			new OAuth2Configuration({
				host: 'localhost',
				clientSecret: 'fakeClientSecret',
				redirectUri: 'https://example.org',
				clientId: undefined,
			});
		} catch (error) {
			expect(error).toEqual(new Error('OAuth 2 property clientId is not set.'));
		}
	});

	it('should throw if clientSecret is not set', async () => {
		try {
			new OAuth2Configuration({
				...oauth2,
				clientSecret: undefined,
			});
		} catch (error) {
			expect(error).toEqual(new Error('OAuth 2 property clientSecret is not set.'));
		}
	});

	it('should throw if redirectUri is not set', async () => {
		try {
			new OAuth2Configuration({
				...oauth2,
				redirectUri: undefined,

			});
		} catch (error) {
			expect(error).toEqual(new Error('OAuth 2 property redirectUri is not set.'));
		}
	});

	it('should throw if wrong auth_code', async () => {
		const oauthClient = new OAuth2Configuration(oauth2);

		oauthClient.updateToken({
			refresh_token: 'fakeRefreshToken',
		} as TokenResponse);

		oauth2Mock.refresh({
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
