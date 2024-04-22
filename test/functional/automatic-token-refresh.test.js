import { getLib, getMockServer } from './utils';

const oauthConfig = {
	type: 'oauth2',
	host: 'localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
	accessToken: 'fakeAccessToken',
	refreshToken: 'fakeRefreshToken',
};

const server = getMockServer(oauthConfig);

describe.skip('automatic token refresh in api calls', () => {
	let lib;

	beforeAll(async () => {
		lib = await getLib();

		server.listen();
	});

	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it('should refresh expired access token before making api call', async () => {
		const oauthClient = new lib.OAuth2Configuration({ ...oauthConfig, expiresAt: 100 });

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

	it('should throw if incorrect User-Agent request header in api call', async () => {
		const oauthClient = new lib.OAuth2Configuration(oauthConfig);

		const apiConfig = new lib.Configuration({
			accessToken: oauthClient.getAccessToken,
			basePath: oauthClient.basePath,
		});

		try {
			expect(await new lib.UsersApi(apiConfig).getUsers()).toThrow();
		} catch (error) {
			expect(error.message).toEqual('Invalid header: User-Agent header is invalid');
			expect(error.error).toEqual('invalid_header');
		}
	});

	it('should refresh token and retry api call if status code is 401', async () => {
		const oauthClient = new lib.OAuth2Configuration({ ...oauthConfig, accessToken: null });

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
