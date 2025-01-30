import {
	Configuration,
	LeadsApi,
	OAuth2Configuration,
	GetLeadSearchResponse,
} from '../../../dist/versions/v2';
import { DeepPartial, oauth2Config } from '../constants';
import nock from 'nock';
import { ApiMock } from '../stubs';

describe('v2/leads', () => {
	let oauthClient: OAuth2Configuration;
	let leadsApi: LeadsApi;
	let mock: ApiMock;

	beforeAll(async () => {
		mock = new ApiMock({
			basePath: '/v2/leads',
			host: 'http://localhost/api',
		});
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

	test('should search leads', async () => {
		const response: DeepPartial<GetLeadSearchResponse> = {
			success: true,
			data: {
				items: [
					{
						item: {
							id: '2',
							title: 'Lead 1',
						},
					},

				],
			},
		};

		mock.get({
			url: '/search',
			response,
			status: 200,
			query: {
				term: 'test',
				exact_match: true,
			},
		});

		const leads = await leadsApi.searchLeads({
			term: 'test',
			exact_match: true,
		});

		expect(leads).toEqual(response);
	});
});