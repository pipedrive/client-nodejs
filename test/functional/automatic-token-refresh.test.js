
import nock from 'nock';
import { OauthApiMock, UsersApiMock } from './stubs';
import { OAuth2Configuration, Configuration, UsersApi } from '../../dist/versions/v1';

const oauthConfig = {
	host: 'http://localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
	basePath: 'http://localhost',
};

describe('automatic token refresh in api calls', () => {

	afterEach(() => nock.cleanAll());

	it('should refresh expired access token before making api call', async () => {
		const oauthClient = new OAuth2Configuration({ ...oauthConfig, expiresAt: 100 });
		oauthClient.refreshToken = 'freshAccessToken';

		OauthApiMock.refresh({
			access_token: 'freshAccessToken',
			api_domain: 'localhost',
			expires_in: '3600',
			refresh_token: 'freshRefreshToken',
			scope: 'deals:full,users:full,1337',
			token_type: 'bearer',
		}, 200);

		UsersApiMock.getUsers({
			success: true,
			data: [
				{
					id: 1,
					name: 'John Doe',
				},
			],
		}, 200);

		const apiConfig = new Configuration({
			accessToken: oauthClient.getAccessToken,
			basePath: oauthClient.basePath,
		});

		const users = await new UsersApi(apiConfig).getUsers();

		expect(oauthClient.accessToken).toEqual('freshAccessToken');

		expect(users).toEqual({
			success: true,
			data: [
				{
					id: 1,
					name: 'John Doe',
				},
			],
		});
	});
});
