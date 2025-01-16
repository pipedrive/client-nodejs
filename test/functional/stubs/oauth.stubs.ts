import nock from 'nock';
import { Resolves } from '../constants';

const api = nock('http://localhost');

export const OauthApiMock = {
	authorize<T>(resolves: Resolves<T>, status = 200) {
		return api.post('/oauth/authorize').reply(status, resolves);
	},

	refresh<T>(resolves: Resolves<T>, status = 200) {
		return api.post('/oauth/token').reply(status, resolves);
	},
};

export const UsersApiMock = {
	getUsers<T>(resolves: Resolves<T>, status = 200) {
		return api.get('/v1/users')
			.reply(status, resolves);
	},
};
