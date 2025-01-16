import {
	Configuration,
	DealsApi,
	OAuth2Configuration,
} from '../../dist/versions/v1';
import { DealsApiMock } from './stubs';
import { oauth2Config } from './constants';
import nock from 'nock';
import { GetDealsResponse } from '../../models';

describe('DealsApi', () => {
	beforeAll(async () => {
		nock.cleanAll();
	});

	afterAll(async () => {
		nock.restore();
	});

	test('should get deals', async () => {
		const oauthClient = new OAuth2Configuration(oauth2Config);

		oauthClient.updateToken({
			refresh_token: 'freshAccessToken',
			expires_in: 100,
			token_type: 'bearer',
			scope: 'deals:full,users:full,1337',
			api_domain: null,
			access_token: 'freshAccessToken',
		});

		const response: GetDealsResponse = {
			success: true,
			data: [
				{
					id: 1,
					title: 'Deal 1',
					value: 1000,
				},
			],
		};

		DealsApiMock.getDeals(response, 200);

		const apiConfig = new Configuration({
			accessToken: oauthClient.getAccessToken,
			basePath: oauthClient.basePath,
		});

		const deals = await new DealsApi(apiConfig).getDeals();

		expect(deals).toEqual(response);
	});
});