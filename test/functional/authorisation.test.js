import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getLib } from './utils';

const oauth2 = {
	host: 'localhost',
	clientId: 'fakeClientId',
	clientSecret: 'fakeClientSecret',
	redirectUri: 'https://example.org',
};

const server = setupServer(
	rest.post('/oauth/token', async (req, res, ctx) => {
		const body = await req.text();

		if (body === 'code=fakeAuthCode&redirect_uri=https://example.org&grant_type=authorization_code') {
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
				message: 'Invalid grant: authorization code is invalid',
				error: 'invalid_grant',
			}),
		);
	}),
);

describe('oauth2 authorization', () => {
	let ApiClient;

	beforeAll(async () => {
		const lib = await getLib();
		ApiClient = lib.ApiClient;
		server.listen();
	});

	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it('should authorize and save access and refresh tokens', async () => {
		const pdClient = new ApiClient();
		pdClient.authentications.oauth2 = { ...oauth2 };
		const auth = await pdClient.authorize('fakeAuthCode');

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

	it('should throw if clientId is not set', async () => {
		const pdClient = new ApiClient();
		pdClient.authentications.oauth2 = { ...oauth2, clientId: null };

		try {
			expect(await pdClient.authorize('fakeAuthCode')).toThrow();
		} catch (error) {
			expect(error.message).toBe('OAuth 2 property clientId is not set.');
		}
	});

	it('should throw if clientSecret is not set', async () => {
		const pdClient = new ApiClient();
		pdClient.authentications.oauth2 = { ...oauth2, clientSecret: null };

		try {
			expect(await pdClient.authorize('fakeAuthCode')).toThrow();
		} catch (error) {
			expect(error.message).toBe('OAuth 2 property clientSecret is not set.');
		}
	});

	it('should throw if redirectUri is not set', async () => {
		const pdClient = new ApiClient();
		pdClient.authentications.oauth2 = { ...oauth2, redirectUri: null };

		try {
			expect(await pdClient.authorize('fakeAuthCode')).toThrow();
		} catch (error) {
			expect(error.message).toBe('OAuth 2 property redirectUri is not set.');
		}
	});

	it('should throw if wrong auth_code', async () => {
		const pdClient = new ApiClient();
		pdClient.authentications.oauth2 = { ...oauth2 };

		try {
			expect(await pdClient.authorize('wrongAuthCode')).toThrow();
		} catch (error) {
			expect(error.context.error.text).toBe(
				'{"success":"false","message":"Invalid grant: authorization code is invalid","error":"invalid_grant"}',
			);
		}
	});
});
