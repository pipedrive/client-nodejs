import {
	Configuration,
	LeadsApi,
	OAuth2Configuration,
} from '../../../dist/versions/v1';
import { LeadsApiMock } from '../stubs';
import { DeepPartial, oauth2Config } from '../constants';
import nock from 'nock';
import {
	GetLeadResponse,
	GetLeadsResponse,
	UpdateLeadRequest,
} from '../../../models';

describe('LeadsApi', () => {
	let oauthClient: OAuth2Configuration;
	let leadsApi: LeadsApi;

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
			scope: 'leads:full,users:full,1337',
			api_domain: null,
			access_token: 'freshAccessToken',
		});

		const apiConfig = new Configuration({
			accessToken: oauthClient.getAccessToken,
			basePath: oauthClient.basePath,
		});
		leadsApi = new LeadsApi(apiConfig);
	});

	test('should get leads', async () => {
		const response: DeepPartial<GetLeadsResponse> = {
			success: true,
			data: [
				{
					id: '1',
					title: 'Lead 1',
				},
				{
					id: '2',
					title: 'Lead 2',
				},
			],
		};

		LeadsApiMock.getLeads(response, 200);

		const leads = await leadsApi.getLeads();

		expect(leads).toEqual(response);
	});

	test('should create a lead', async () => {
		const response: DeepPartial<GetLeadResponse> = {
			success: true,
			data: {
				id: '2',
				title: 'New Lead',

			},
		};

		LeadsApiMock.createLead<GetLeadResponse>(response, 201);

		const createdLead = await leadsApi.addLead({
			AddLeadRequest: {
				title: 'New Lead',
				value: {
					amount: 1000,
					currency: 'USD',
				},
			},
		});

		expect(createdLead).toEqual(response);
	});

	test('should get a lead by id', async () => {
		const response: DeepPartial<GetLeadResponse> = {
			success: true,
			data: {
				id: '2',
				title: 'New Lead',
				creator_id: 1,
				label_ids: ['1'],
				owner_id: 123,
				organization_id: 345,
			},
		};

		LeadsApiMock.getLead<GetLeadResponse>(2, response, 200);

		const lead = await leadsApi.getLead({
			id: '2',
		});

		expect(lead).toEqual(response);
	});

	test('should update a lead', async () => {
		const response: DeepPartial<GetLeadResponse> = {
			success: true,
			data: {
				id: '2',
				title: 'New Lead',
				creator_id: 1,
				label_ids: ['1'],
				owner_id: 123,
				organization_id: 345,
			},
		};
		const payload: UpdateLeadRequest = {
			title: 'Updated Lead',
		};

		LeadsApiMock.updateLead<GetLeadResponse>(2, response, 200);

		const updatedLead = await leadsApi.updateLead({
			id: '2',
			UpdateLeadRequest: payload,
		});

		expect(updatedLead).toEqual(response);
	});

	test('should delete a lead', async () => {
		const response = { success: true };

		LeadsApiMock.deleteLead(2, response, 200);

		const deleteResponse = await leadsApi.deleteLead({ id: '2' });

		expect(deleteResponse).toEqual(response);
	});
});