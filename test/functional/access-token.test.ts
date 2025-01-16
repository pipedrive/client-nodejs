import { OauthApiMock } from './stubs';
import nock from 'nock';
import { OAuth2Configuration } from '../../dist/versions/v1';
import { TokenResponse } from '../../configuration';

const oauth2 = {
	host: 'http://localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
};

describe('OAuth2 accessToken', () => {
	afterEach(() => nock.cleanAll());

	it('should refresh accessToken with valid refreshToken', async () => {
		const configuration = new OAuth2Configuration(oauth2);
		configuration.updateToken({ refresh_token: 'fakeRefreshToken' } as TokenResponse);

		OauthApiMock.refresh({
			access_token: 'freshAccessToken',
			api_domain: 'localhost',
			expires_in: '3600',
			refresh_token: 'freshRefreshToken',
			scope: 'deals:full,users:full,1337',
			token_type: 'bearer',
		}, 200);

		const auth = await configuration.tokenRefresh();

		expect(auth).toMatchObject({
			access_token: 'freshAccessToken',
			token_type: 'bearer',
			refresh_token: 'freshRefreshToken',
			scope: 'deals:full,users:full,1337',
			expires_in: '3600',
			api_domain: 'localhost',
		});

		const accessToken = await configuration.getAccessToken();
		expect(accessToken).toBe(auth.access_token);
	});

	it('should throw if refreshToken is not set', async () => {
		const configuration = new OAuth2Configuration(oauth2);

		OauthApiMock.refresh({
			success: false,
			message: 'Invalid grant: refresh token is invalid',
			error: 'invalid_grant',
		}, 400);

		try {
			expect(await configuration.tokenRefresh()).toThrow();
		} catch (error) {
			expect(error.message).toBe('Invalid grant: refresh token is invalid');
		}
	});

	it('should throw if wrong refresh token', async () => {
		const configuration = new OAuth2Configuration(oauth2);
		configuration.updateToken({ refresh_token: 'wrongRefreshToken' } as TokenResponse);

		OauthApiMock.refresh({
			success: false,
			message: 'Invalid grant: refresh token is invalid',
			error: 'invalid_grant',
		}, 400);

		try {
			expect(await configuration.tokenRefresh()).toThrow();
		} catch (error) {
			expect(error).toEqual(
				{ success: false, message: 'Invalid grant: refresh token is invalid', error: 'invalid_grant' },
			);
		}
	});
});