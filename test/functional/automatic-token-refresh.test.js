import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getLib } from './utils';
import { version } from '../../package.json';

const oauth2 = {
	type: 'oauth2',
	host: 'localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
	accessToken: 'fakeAccessToken',
	refreshToken: 'fakeRefreshToken',
};

const base64ClientIdAndSecret = Buffer.from(`${oauth2.clientId}:${oauth2.clientSecret}`).toString('base64');

const server = setupServer(
	rest.post('/oauth/token', async (req, res, ctx) => {
		const body = await req.text();
		const auth = req.headers.get('authorization');
		const ua = req.headers.get('User-Agent');

		if (auth !== `Basic ${base64ClientIdAndSecret}`) {
			return res(
				ctx.status(401),
				ctx.json({
					success: 'false',
					message: 'Invalid header: Authorization header is invalid',
					error: 'invalid_header',
				}),
			);
		}

		if (ua !== `Pipedrive-SDK-Javascript-${version}`) {
			return res(
				ctx.status(400),
				ctx.json({
					success: 'false',
					message: 'Invalid header: User-Agent header is invalid',
					error: 'invalid_header',
				}),
			);
		}

		if (
			body === 'refresh_token=fakeRefreshToken&grant_type=refresh_token' ||
			body === 'refresh_token=freshRefreshToken&grant_type=refresh_token'
		) {
			return res(
				ctx.status(200),
				ctx.json({
					access_token: 'freshAccessToken',
					token_type: 'bearer',
					refresh_token: 'freshRefreshToken',
					scope: 'deals:full,users:full,1337',
					expires_in: '3600',
					api_domain: 'localhost',
				}),
			);
		}

		return res(
			ctx.status(400),
			ctx.json({
				success: 'false',
				message: 'Invalid grant: authorization code is invalid',
				error: 'invalid_grant',
			}),
		);
	}),
	rest.get('/v1/users', async (req, res, ctx) => {
		const auth = req.headers.get('authorization');
		const ua = req.headers.get('User-Agent');

		if (ua !== `Pipedrive-SDK-Javascript-${version}`) {
			return res(
				ctx.status(400),
				ctx.json({
					success: 'false',
					message: 'Invalid header: User-Agent header is invalid',
					error: 'invalid_header',
				}),
			);
		}

		if (auth === 'Bearer fakeAccessToken') {
			return res(ctx.status(401));
		}

		return res(
			ctx.status(200),
			ctx.json({
				success: true,
				data: [
					{
						id: 1,
						name: 'John Doe',
					},
				],
			}),
		);
	}),
	rest.get('/api/v1/users', async (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				success: true,
				data: [
					{
						id: 1,
						name: 'John Doe',
					},
				],
			}),
		);
	}),
);

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
