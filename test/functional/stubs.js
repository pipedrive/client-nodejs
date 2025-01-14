const nock = require('nock');

const api = nock('http://localhost');

const DealsApiMock = {
	getDeals(resolves, status = 200) {
		return api.get('/v1/deals').reply(status, resolves);
	},
	createDeal(resolves, status = 201) {
		return api.post('/v1/deals').reply(status, resolves);
	},
};

const LeadsApiMock = {
	getLeads(resolves, status = 200) {
		return api.get('/v1/leads').reply(status, resolves);
	},
	createLead(resolves, status = 201) {
		return api.post('/v1/leads').reply(status, resolves);
	},
};

const OauthApiMock = {
	authorize(resolves, status = 200) {
		return api.post('/oauth/authorize').reply(status, resolves);
	},

	refresh(resolves, status = 200) {
		return api.post('/oauth/token').reply(status, resolves);
	},
};

const UsersApiMock = {
	getUsers(resolves, status) {
		return api.get('/v1/users')
			.reply(status, resolves);
	},
};

module.exports = {
	DealsApiMock,
	LeadsApiMock,
	OauthApiMock,
	UsersApiMock,
};