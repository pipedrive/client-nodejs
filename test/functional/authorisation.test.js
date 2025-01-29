
import { OauthApiMock } from './stubs';
import nock from 'nock';
import { OAuth2Configuration } from '../../dist/versions/v1';
const oauth2 = {
	host: 'localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
};

const server = getMockServer(oauth2);

describe('oauth2 authorization', () => {
	afterEach(() => nock.cleanAll());

	it('should authorize and save access and refresh tokens', async () => {
		const oauthClient = new OAuth2Configuration(oauth2);
		oauthClient.refreshToken = 'fakeRefreshToken';
		OauthApiMock.refresh({
			access_token: 'freshAccessToken',
			api_domain: 'localhost',
			expires_in: '3600',
			refresh_token: 'freshRefreshToken',
			scope: 'deals:full,users:full,1337',
			token_type: 'bearer',
		}, 200);

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

	it('should throw if clientId is not set', async () => {
		const pdClient = new ApiClient();
		pdClient.authentications.oauth2 = { ...oauth2, clientId: null };

		try {
			new OAuth2Configuration({
				host: 'localhost',
				clientSecret: 'fakeClientSecret',
				redirectUri: 'https://example.org',
			});
		} catch (error) {
			expect(error.message).toBe('OAuth 2 property clientId is not set.');
		}
	});

	it('should throw if clientSecret is not set', async () => {
		const pdClient = new ApiClient();
		pdClient.authentications.oauth2 = { ...oauth2, clientSecret: null };

		try {
			new OAuth2Configuration({
				...oauth2,
				clientSecret: undefined,
			});
		} catch (error) {
			expect(error.message).toBe('OAuth 2 property clientSecret is not set.');
		}
	});

	it('should throw if redirectUri is not set', async () => {
		try {
			new OAuth2Configuration({
				...oauth2,
				redirectUri: undefined,

		try {
			expect(await pdClient.authorize('fakeAuthCode')).toThrow();
		} catch (error) {
			expect(error.message).toBe('OAuth 2 property redirectUri is not set.');
		}
	});

	it('should throw if wrong auth_code', async () => {
		const oauthClient = new OAuth2Configuration(oauth2);

		try {
			expect(await pdClient.authorize('wrongAuthCode')).toThrow();
		} catch (error) {
			expect(error.context.error.text).toBe(
				'{"success":"false","message":"Invalid grant: refresh token is invalid","error":"invalid_grant"}',
			);
		}
	});
});
