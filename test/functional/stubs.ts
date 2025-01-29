import nock from 'nock';

const api = nock('http://localhost');

type Resolves = Record<string, unknown>;
export const DealsApiMock = {
	getDeals(resolves: Resolves, status = 200) {
		return api.get('/v1/deals').reply(status, resolves);
	},
	createDeal(resolves: Resolves, status = 201) {
		return api.post('/v1/deals').reply(status, resolves);
	},
};

export const LeadsApiMock = {
	getLeads(resolves: Resolves, status = 200) {
		return api.get('/v1/leads').reply(status, resolves);
	},
	createLead(resolves: Resolves, status = 201) {
		return api.post('/v1/leads').reply(status, resolves);
	},
};

export const OauthApiMock = {
	authorize(resolves: Resolves, status = 200) {
		return api.post('/oauth/authorize').reply(status, resolves);
	},

	refresh(resolves: Resolves, status = 200) {
		return api.post('/oauth/token').reply(status, resolves);
	},
};

export const UsersApiMock = {
	getUsers(resolves: Resolves, status = 200) {
		return api.get('/v1/users')
			.reply(status, resolves);
	},
};
