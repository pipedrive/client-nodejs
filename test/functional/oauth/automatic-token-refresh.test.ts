
import nock from 'nock';
import { OauthApiMock, UsersApiMock } from '../stubs';
import { OAuth2Configuration, Configuration, UsersApi, Parameters } from '../../../dist/versions/v1';

const oauthConfig : Parameters = {
	host: 'http://localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
};

describe('Automatic token refresh in api calls', () => {
	afterEach(() => nock.cleanAll());

	it('should refresh expired access token before making api call', async () => {
		const oauthClient = new OAuth2Configuration(oauthConfig);

		oauthClient.updateToken({
			refresh_token: 'freshAccessToken',
			expires_in: 100,
			token_type: 'bearer',
			scope: 'deals:full,users:full,1337',
			api_domain: 'localhost',
			access_token: 'freshAccessToken',
		});

		OauthApiMock.refresh({
			access_token: 'freshAccessToken',
			api_domain: 'localhost',
			expires_in: '3600',
			refresh_token: 'freshRefreshToken',
			scope: 'deals:full,users:full,1337',
			token_type: 'bearer',
		}, 200);

		expect(pdClient.authentications.oauth2.accessToken).toEqual('freshAccessToken');

		const apiConfig = new Configuration({
			accessToken: oauthClient.getAccessToken,
			basePath: oauthClient.basePath,
		});

		const users = await new UsersApi(apiConfig).getUsers();
		const accessToken = await oauthClient.getAccessToken();

		expect(accessToken).toEqual('freshAccessToken');

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
