import { OauthApiMock, ApiMock } from '../stubs';
import { OAuth2Configuration, Configuration, UsersApi, Parameters } from '../../../dist/versions/v1';

const oauthConfig : Parameters = {
	host: 'http://localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
};

describe('Automatic token refresh in api calls', () => {
	let oauth2Mock: OauthApiMock;
	let usersMock: ApiMock;
	beforeAll(() => {
		oauth2Mock = new OauthApiMock();
		usersMock = new ApiMock({
			basePath: '/api/v1/users',
		});
	});

	afterEach(() => oauth2Mock.cleanAll());

	it('should refresh expired access token before making api call', async () => {
		const oauthClient = new OAuth2Configuration(oauthConfig);

		oauthClient.updateToken({
			refresh_token: 'freshAccessToken',
			expires_in: 100,
			token_type: 'bearer',
			scope: 'deals:full,users:full,1337',
			api_domain: 'http://localhost',
			access_token: 'freshAccessToken',
		});

		oauth2Mock.refresh({
			access_token: 'freshAccessToken',
			api_domain: 'http://localhost',
			expires_in: '3600',
			refresh_token: 'freshRefreshToken',
			scope: 'deals:full,users:full,1337',
			token_type: 'bearer',
		}, 200);

		usersMock.get({
			url: '',
			response: {
				success: true,
				data: [
					{
						id: 1,
						name: 'John Doe',
					},
				],
			},
			status: 200,
		});

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
