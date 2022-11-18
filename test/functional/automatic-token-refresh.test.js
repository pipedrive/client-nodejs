import { getLib, getMockServer } from './utils';

const oauth2 = {
	type: 'oauth2',
	host: 'localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
	accessToken: 'fakeAccessToken',
	refreshToken: 'fakeRefreshToken',
};

const server = getMockServer(oauth2);

describe('automatic token refresh in api calls', () => {
	let lib;
	let ApiClient;
	let UsersApi;

	beforeAll(async () => {
		lib = await getLib();
		ApiClient = lib.ApiClient;
		UsersApi = lib.UsersApi;
		server.listen();
	});

	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it('should refresh expired access token before making api call', async () => {
		const pdClient = new ApiClient();
		pdClient.basePath = 'localhost/v1';
		pdClient.authentications.oauth2 = { ...oauth2, expiresAt: 100 };

		const users = await new UsersApi(pdClient).getUsers();

		expect(pdClient.authentications.oauth2.accessToken).toEqual('freshAccessToken');

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
		const pdClient = new ApiClient();
		pdClient.basePath = 'localhost/v1';
		pdClient.authentications.oauth2 = { ...oauth2 };
		pdClient.defaultHeaders = {
			'User-Agent': 'Wrong-User-Agent',
		};

		try {
			expect(await new UsersApi(pdClient).getUsers()).toThrow();
		} catch (error) {
			expect(error.errorCode).toEqual(400);
		}
	});

	it('should refresh token and retry api call if status code is 401', async () => {
		const pdClient = new ApiClient();
		pdClient.basePath = 'localhost/v1';
		pdClient.authentications.oauth2 = { ...oauth2 };

		const users = await new UsersApi(pdClient).getUsers();

		expect(pdClient.authentications.oauth2.accessToken).toEqual('freshAccessToken');

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
