import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { version } from '../../package.json';

export const getLib = async () => await import(process.env.AUTOMATION ? '../../dist' : '../../dist');

export const getMockServer = (oauth2) => {
	const base64ClientIdAndSecret = Buffer.from(`${oauth2.clientId}:${oauth2.clientSecret}`).toString('base64');

	return setupServer(
		http.post('*/oauth/token', async (req, res, ctx) => {
			const body = await req.request.text();
			const auth = req.request.headers.get('authorization');
			const ua = req.request.headers.get('User-Agent');
			const decodedAuth = Buffer.from(auth.replace('Basic', ''), 'base64').toString();
			const [clientId, secret] = decodedAuth.split(':');

			if (!clientId || clientId === 'undefined') {
				return HttpResponse.json({
					success: 'false',
					message: 'OAuth 2 property clientId is not set.',
					error: 'invalid_clientId',
				}, {
					status: 401,
				});
			}

			if (!secret || secret === 'undefined') {
				return HttpResponse.json({
					success: 'false',
					message: 'OAuth 2 property clientSecret is not set.',
					error: 'invalid_secret',
				}, {
					status: 401,
				});
			}

			if (auth !== `Basic ${base64ClientIdAndSecret}`) {
				return HttpResponse.json({
					success: 'false',
					message: 'Invalid header: Authorization header is invalid',
					error: 'invalid_header',
				}, {
					status: 401,
				});
			}

			if (ua !== `Pipedrive-SDK-Javascript-${version}`) {
				return HttpResponse.json({
					success: 'false',
					message: 'Invalid header: User-Agent header is invalid',
					error: 'invalid_header',
				}, {
					status: 400,
				});
			}

			if (
				body === 'refresh_token=fakeRefreshToken&grant_type=refresh_token' ||
				decodeURIComponent(body) === 'code=fakeAuthCode&redirect_uri=https://example.org&grant_type=authorization_code'
			) {
				return HttpResponse.json({
					access_token: 'freshAccessToken',
					token_type: 'bearer',
					refresh_token: 'freshRefreshToken',
					scope: 'deals:full,users:full,1337',
					expires_in: '3600',
					api_domain: 'localhost',
				}, {
					status: 200,
				});
			}

			return HttpResponse.json({
				success: 'false',
				message: 'Invalid grant: refresh token is invalid',
				error: 'invalid_grant',
			}, {
				status: 400,
			});
		}),

		http.get('*/v1/users', async (req, res, ctx) => {
			const auth = req.request.headers.get('authorization');
			const ua = req.request.headers.get('User-Agent');

			if (ua !== `Pipedrive-SDK-Javascript-${version}`) {
				return HttpResponse.json({
					success: 'false',
					message: 'Invalid header: User-Agent header is invalid',
					error: 'invalid_header',
				}, {
					status: 400,
				});
			}

			// for simulating retry
			if (auth === 'Bearer fakeAccessToken') {
				return HttpResponse.json(null, {
					status: 401,
				});
			}

			return HttpResponse.json({
				success: true,
				data: [
					{
						id: 1,
						name: 'John Doe',
					},
				],
			}, {
				status: 200,
			});
		}),
	);
};
