import { ApiMock, Resolves } from '../constants';

export const DealsApiMock = {
	getDeals<T>(resolves: Resolves<T>, status = 200) {
		return ApiMock.get('/v1/deals').reply(status, resolves);
	},
	getDeal<T>(id:number, resolves: Resolves<T>, status = 200) {
		return ApiMock.get(`/v1/deals/${id}`).reply(status, resolves);
	},
	deleteDeal<T>(id:number, resolves: Resolves<T>, status = 200) {
		return ApiMock.delete(`/v1/deals/${id}`).reply(status, resolves);
	},
	updateDeal<T>(id:number, resolves: Resolves<T>, status = 200) {
		return ApiMock.put(`/v1/deals/${id}`).reply(status, resolves);
	},
	createDeal<T>(resolves: Resolves<T>, status = 201) {
		return ApiMock.post('/v1/deals').reply(status, resolves);
	},
};
