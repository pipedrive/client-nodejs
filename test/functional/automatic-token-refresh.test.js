import { getLib, getMockServer } from './utils';

const oauth2 = {
	type: 'oauth2',
	host: 'localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
	basePath: 'http://localhost/v1',
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
});
