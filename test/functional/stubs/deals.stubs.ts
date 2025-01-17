import nock from 'nock';
import { Resolves } from '../constants';

const api = nock('http://localhost');

export const DealsApiMock = {
	getDeals<T>(resolves: Resolves<T>, status = 200) {
		return api.get('/v1/deals').reply(status, resolves);
	},
	getDeal<T>(id:number, resolves: Resolves<T>, status = 200) {
		return api.get(`/v1/deals/${id}`).reply(status, resolves);
	},
	deleteDeal<T>(id:number, resolves: Resolves<T>, status = 200) {
		return api.delete(`/v1/deals/${id}`).reply(status, resolves);
	},
	updateDeal<T>(id:number, resolves: Resolves<T>, status = 200) {
		return api.put(`/v1/deals/${id}`).reply(status, resolves);
	},
	createDeal<T>(resolves: Resolves<T>, status = 201) {
		return api.post('/v1/deals').reply(status, resolves);
	},
};
