
import { ApiMock, Resolves } from '../constants';

export const LeadsApiMock = {
	getLeads<T>(resolves: Resolves<T>, status = 200) {
		return ApiMock.get('/v1/leads').reply(status, resolves);
	},
	getLead<T>(id: number, resolves: Resolves<T>, status = 200) {
		return ApiMock.get(`/v1/leads/${id}`).reply(status, resolves);
	},
	deleteLead<T>(id: number, resolves: Resolves<T>, status = 200) {
		return ApiMock.delete(`/v1/leads/${id}`).reply(status, resolves);
	},
	updateLead<T>(id: number, resolves: Resolves<T>, status = 200) {
		return ApiMock.patch(`/v1/leads/${id}`).reply(status, resolves);
	},
	createLead<T>(resolves: Resolves<T>, status = 201) {
		return ApiMock.post('/v1/leads').reply(status, resolves);
	},
};