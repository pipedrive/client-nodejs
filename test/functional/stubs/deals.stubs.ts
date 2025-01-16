import nock from 'nock';
import { Resolves } from '../constants';

const api = nock('http://localhost');

export const DealsApiMock = {
	getDeals<T>(resolves: Resolves<T>, status = 200) {
		return api.get('/v1/deals').reply(status, resolves);
	},
	createDeal<T>(resolves: Resolves<T>, status = 201) {
		return api.post('/v1/deals').reply(status, resolves);
	},
};
