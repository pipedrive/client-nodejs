import nock from 'nock';
import { Resolves } from '../constants';

const api = nock('http://localhost');

export const LeadsApiMock = {
	getLeads<T>(resolves: Resolves<T>, status = 200) {
		return api.get('/v1/leads').reply(status, resolves);
	},
	getLead<T>(id: number, resolves: Resolves<T>, status = 200) {
		return api.get(`/v1/leads/${id}`).reply(status, resolves);
	},
	deleteLead<T>(id: number, resolves: Resolves<T>, status = 200) {
		return api.delete(`/v1/leads/${id}`).reply(status, resolves);
	},
	updateLead<T>(id: number, resolves: Resolves<T>, status = 200) {
		return api.patch(`/v1/leads/${id}`).reply(status, resolves);
	},
	createLead<T>(resolves: Resolves<T>, status = 201) {
		return api.post('/v1/leads').reply(status, resolves);
	},
};