import { ApiMock, Resolves } from '../constants';

export * from './activities.stubs';
export * from './oauth.stubs';
export * from './deals.stubs';
export * from './leads.stubs';

export const UsersApiMock = {
	getUsers<T>(resolves: Resolves<T>, status = 200) {
		return ApiMock.get('/v1/users')
			.reply(status, resolves);
	},
};
