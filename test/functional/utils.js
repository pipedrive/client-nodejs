import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { version } from '../../package.json';

export const getLib = async () => await import(process.env.AUTOMATION ? '../../dist' : '../../src');

export const getMockServer = (oauth2) => {
	const base64ClientIdAndSecret = Buffer.from(`${oauth2.clientId}:${oauth2.clientSecret}`).toString('base64');

	return setupServer(
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
				body === 'refresh_token=freshRefreshToken&grant_type=refresh_token' ||
				body === 'code=fakeAuthCode&redirect_uri=https://example.org&grant_type=authorization_code'
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
					message: 'Invalid grant: refresh token is invalid',
					error: 'invalid_grant',
				}),
			);
		}),
		rest.get('*/v1/users', async (req, res, ctx) => {
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

			// for simulating retry
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
	);
};
