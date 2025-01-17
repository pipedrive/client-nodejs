import {
	Configuration,
	DealsApi,
	OAuth2Configuration,
} from '../../../dist/versions/v1';
import { DealsApiMock } from '../stubs';
import { oauth2Config } from '../constants';
import nock from 'nock';
import { GetAddedDealResponse, GetDealResponse, GetDealsResponse, UpdateDealRequest } from '../../../models';

describe('DealsApi', () => {
	let oauthClient: OAuth2Configuration;
	let dealsApi: DealsApi;

	beforeAll(async () => {
		nock.cleanAll();
	});

	afterAll(async () => {
		nock.restore();
	});

	beforeEach(async () => {
		nock.cleanAll();
		oauthClient = new OAuth2Configuration(oauth2Config);

		oauthClient.updateToken({
			refresh_token: 'freshAccessToken',
			expires_in: 100,
			token_type: 'bearer',
			scope: 'deals:full,users:full,1337',
			api_domain: null, // todo fox tjos
			access_token: 'freshAccessToken',
		});

		const apiConfig = new Configuration({
			accessToken: oauthClient.getAccessToken,
			basePath: oauthClient.basePath,
		});
		dealsApi = new DealsApi(apiConfig);
	});

	test('should get deals', async () => {
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

		const deals = await dealsApi.getDeals();

		expect(deals).toEqual(response);
	});

	test('should create a deal', async () => {
		const response: GetAddedDealResponse = {
			success: true,
			data: {
				id: 2,
				title: 'New Deal',
				value: 2000,
			},
		};

		DealsApiMock.createDeal<GetAddedDealResponse>(response, 201);

		const apiConfig = new Configuration({
			accessToken: oauthClient.getAccessToken,
			basePath: oauthClient.basePath,
		});
		const dealsApi = new DealsApi(apiConfig);

		const createdDeal = await dealsApi.addDeal({
			AddDealRequest: {
				title: 'New Deal',
				value: '2000',
			},
		});

		expect(createdDeal).toEqual(response);
	});

	test('should get a deal by id', async () => {
		const response: GetDealResponse = {
			success: true,
			data: {
				id: 2,
				title: 'New Deal',
				value: 2000,
			},
		};

		DealsApiMock.getDeal<GetDealResponse>(2, response, 200);

		const apiConfig = new Configuration({
			accessToken: oauthClient.getAccessToken,
			basePath: oauthClient.basePath,
		});
		const dealsApi = new DealsApi(apiConfig);

		const deal = await dealsApi.getDeal({
			id: 2,
		});

		expect(deal).toEqual(response);
	});

	test('should update a deal', async () => {
		const response: GetDealResponse = {
			success: true,
			data: {
				id: 2,
				title: 'Updated Deal',
				value: 3000,
			},
		};
		const payload : UpdateDealRequest = {
			title: 'Updated Deal',
			value: '3000',
		};

		DealsApiMock.updateDeal<GetDealResponse>(2, response, 200);

		const apiConfig = new Configuration({
			accessToken: oauthClient.getAccessToken,
			basePath: oauthClient.basePath,
		});
		const dealsApi = new DealsApi(apiConfig);

		const updatedDeal = await dealsApi.updateDeal({
			id: 2,
			UpdateDealRequest: payload,
		});

		expect(updatedDeal).toEqual(response);
	});

	test('should delete a deal', async () => {
		const response = { success: true };

		DealsApiMock.deleteDeal(2, response, 200);

		const deleteResponse = await dealsApi.deleteDeal({ id: 2 });

		expect(deleteResponse).toEqual(response);
	});
});