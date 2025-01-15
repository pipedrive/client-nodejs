import { getLib } from './utils';
import nock from 'nock';
import { OauthApiMock, UsersApiMock } from './stubs';

const oauthConfig = {
	host: 'http://localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
	basePath: 'http://localhost/v1',
};

describe('automatic token refresh in api calls', () => {
	let lib;

	beforeAll(async () => {
		lib = await getLib();
	});

	afterEach(() => nock.cleanAll());

	it('should refresh expired access token before making api call', async () => {
		const oauthClient = new lib.OAuth2Configuration({ ...oauthConfig, expiresAt: 100 });
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

		const apiConfig = new lib.Configuration({
			accessToken: oauthClient.getAccessToken,
			basePath: oauthClient.basePath,
		});

		const users = await new lib.UsersApi(apiConfig).getUsers();

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
