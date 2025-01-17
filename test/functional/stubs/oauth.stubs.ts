
import { ApiMock, Resolves } from '../constants';

export const OauthApiMock = {
	authorize<T>(resolves: Resolves<T>, status = 200) {
		return ApiMock.post('/oauth/authorize').reply(status, resolves);
	},

	refresh<T>(resolves: Resolves<T>, status = 200) {
		return ApiMock.post('/oauth/token').reply(status, resolves);
	},
};

