
import { ApiMock, Resolves } from '../constants';

export const ActivitiesApiMock = {
	getActivities<T>(resolves: Resolves<T>, status = 200) {
		return ApiMock.get('/v1/activities').reply(status, resolves);
	},
	getActivity<T>(id: number, resolves: Resolves<T>, status = 200) {
		return ApiMock.get(`/v1/activities/${id}`).reply(status, resolves);
	},
	deleteActivity<T>(id: number, resolves: Resolves<T>, status = 200) {
		return ApiMock.delete(`/v1/activities/${id}`).reply(status, resolves);
	},
	updateActivity<T>(id: number, resolves: Resolves<T>, status = 200) {
		return ApiMock.put(`/v1/activities/${id}`).reply(status, resolves);
	},
	createActivity<T>(resolves: Resolves<T>, status = 201) {
		return ApiMock.post('/v1/activities').reply(status, resolves);
	},
};