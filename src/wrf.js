const pipedrive = require('../dist');
const pdClient = pipedrive.ApiClient.instance;

pdClient.authentications.api_key.apiKey = 'c9b1187544c64885b6d54db674778a4bba435b8a';
const api = new pipedrive.DealsApi();

(async () => {
	try {
		const response = await api.getDeal(34);

		console.log(response);
	} catch (e) {
		console.error(e);
	}
})();

(async () => {
	try {
		const response = await api.addDeal(
			{
				title: '2649 deal title',
				value: 150000,
				currency: 'EUR',
				user_id: null,
				person_id: null,
				org_id: 1,
				stage_id: 2,
				status: 'open',
				expected_close_date: '2022-03-11',
				lost_reason: null,
				visible_to: 1,
				bb4f8f48c2b0a7d872558f1eb4bd75b50b68301f: 'Excelsior',
			},
		);
		console.log(response);
	} catch (err) {
		const errorToLog = err.context?.body || err;

		console.log('Deal update failed', errorToLog);
	}
})();

(async () => {
	try {
		const response = await api.updateDeal(34,
			{
				title: '2649-2 deal title',
				bb4f8f48c2b0a7d872558f1eb4bd75b50b68301f: '0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144',
			},
		);
		console.log(response);
	} catch (err) {
		const errorToLog = err.context?.body || err;

		console.log('Deal update failed', errorToLog);
	}
})();

