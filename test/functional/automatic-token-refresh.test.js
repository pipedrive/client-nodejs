
import nock from 'nock';
import { OauthApiMock, UsersApiMock } from './stubs';
import { OAuth2Configuration, Configuration, UsersApi } from '../../dist/versions/v1';

const oauth2 = {
	type: 'oauth2',
	host: 'localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
	basePath: 'http://localhost',
};

const server = getMockServer(oauth2);

describe('automatic token refresh in api calls', () => {

	afterEach(() => nock.cleanAll());

	it('should refresh expired access token before making api call', async () => {
		const oauthClient = new OAuth2Configuration({ ...oauthConfig, expiresAt: 100 });
		oauthClient.refreshToken = 'freshAccessToken';

		const users = await new UsersApi(pdClient).getUsers();

		expect(pdClient.authentications.oauth2.accessToken).toEqual('freshAccessToken');

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
