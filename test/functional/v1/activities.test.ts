import {
	Configuration,
	ActivitiesApi,
	GetActivityResponse,
	GetActivitiesResponse,
	UpdateActivityRequest,
	OAuth2Configuration,
} from '../../../dist/versions/v1';
import { ActivitiesApiMock } from '../stubs';
import { DeepPartial, oauth2Config } from '../constants';
import nock from 'nock';

describe('ActivitiesApi', () => {
	let oauthClient: OAuth2Configuration;
	let activitiesApi: ActivitiesApi;

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
			scope: 'activities:full,users:full,1337',
			api_domain: null,
			access_token: 'freshAccessToken',
		});

		const apiConfig = new Configuration({
			accessToken: oauthClient.getAccessToken,
			basePath: oauthClient.basePath,
		});
		activitiesApi = new ActivitiesApi(apiConfig);
	});

	test('should get activities', async () => {
		const response: DeepPartial<GetActivitiesResponse> = {
			success: true,
			data: [
				{
					id: 1,
					deal_id: 1,
					note: 'Activity 1',
				},
				{
					id: 2,
					note: 'Activity 1',
				},
			],
		};

		ActivitiesApiMock.getActivities(response, 200);

		const activities = await activitiesApi.getActivities();

		expect(activities).toEqual(response);
	});

	test('should create an activity', async () => {
		const response: DeepPartial<GetActivityResponse> = {
			success: true,
			data: {
				id: 2,
				note: 'New Activity',
			},
		};

		ActivitiesApiMock.createActivity<GetActivityResponse>(response, 201);

		const createdActivity = await activitiesApi.addActivity({
			AddActivityRequest: {
				note: 'New Activity',
				deal_id: 1,
			},
		});

		expect(createdActivity).toEqual(response);
	});

	test('should get an activity by id', async () => {
		const response: DeepPartial<GetActivityResponse> = {
			success: true,
			data: {
				id: 2,
				note: 'New Activity',
				person_id: 1,
			},
		};

		ActivitiesApiMock.getActivity<GetActivityResponse>(2, response, 200);

		const activity = await activitiesApi.getActivity({
			id: 2,
		});

		expect(activity).toEqual(response);
	});

	test('should update an activity', async () => {
		const response: DeepPartial<GetActivityResponse> = {
			success: true,
			data: {
				id: 2,
				note: 'Updated Activity',
			},
		};
		const payload: UpdateActivityRequest = {
			note: 'Updated Activity',
		};

		ActivitiesApiMock.updateActivity<GetActivityResponse>(2, response, 200);

		const updatedActivity = await activitiesApi.updateActivity({
			id: 2,
			UpdateActivityRequest: payload,
		});

		expect(updatedActivity).toEqual(response);
	});

	test('should delete an activity', async () => {
		const response = { success: true };

		ActivitiesApiMock.deleteActivity(2, response, 200);

		const deleteResponse = await activitiesApi.deleteActivity({ id: 2 });

		expect(deleteResponse).toEqual(response);
	});
});