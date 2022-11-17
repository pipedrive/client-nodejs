import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getLib } from './utils';

const oauth2 = {
	host: 'localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
};

const base64ClientIdAndSecret = Buffer.from(`${oauth2.clientId}:${oauth2.clientSecret}`).toString('base64');

const server = setupServer(
	rest.post('/oauth/token', async (req, res, ctx) => {
		const body = await req.text();
		const auth = req.headers.get('authorization');

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

		if (body.includes('refresh_token=fakeRefreshToken')) {
			return res(
				ctx.status(200),
				ctx.json({
					access_token: 'freshAccessToken',
					token_type: 'bearer',
					refresh_token: 'freshRefreshToken',
					scope: 'deals:full,users:full,1337',
					expires_in: '3600',
					api_domain: 'mock-server',
				}),
			);
		}

		return res(
			ctx.status(400),
			ctx.json({
				success: 'false',
				message: 'Invalid grant: refresh token is invalid',
				error: 'invalid_grant',
			}),
		);
	}),
);

describe('oauth2 accessToken', () => {
	let ApiClient;

	beforeAll(async () => {
		const lib = await getLib();
		ApiClient = lib.ApiClient;
		server.listen();
	});

	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it('should refresh accessToken with valid refreshToken', async () => {
		const pdClient = new ApiClient();
		pdClient.authentications.oauth2 = { ...oauth2, refreshToken: 'fakeRefreshToken' };

		const auth = await pdClient.refreshToken();

		expect(auth).toMatchObject({
			access_token: 'freshAccessToken',
			token_type: 'bearer',
			refresh_token: 'freshRefreshToken',
			scope: 'deals:full,users:full,1337',
			expires_in: '3600',
			api_domain: 'mock-server',
		});

		expect(pdClient.authentications.oauth2.accessToken).toBe(auth.access_token);
		expect(pdClient.authentications.oauth2.refreshToken).toBe(auth.refresh_token);
	});

	it('should throw if refreshToken is not set', async () => {
		const pdClient = new ApiClient();
		pdClient.authentications.oauth2 = { ...oauth2 };

		try {
			expect(await pdClient.refreshToken()).toThrow();
		} catch (error) {
			expect(error.message).toBe('OAuth 2 property refreshToken is not set.');
		}
	});

	it('should throw if wrong refresh token', async () => {
		const pdClient = new ApiClient();
		pdClient.authentications.oauth2 = { ...oauth2, refreshToken: 'wrongRefreshToken' };

		try {
			expect(await pdClient.refreshToken()).toThrow();
		} catch (error) {
			expect(error.context.error.text).toBe(
				'{"success":"false","message":"Invalid grant: refresh token is invalid","error":"invalid_grant"}',
			);
		}
	});
});
