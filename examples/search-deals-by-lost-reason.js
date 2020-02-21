/**
 * This example shows how to search for deals by the lost reason.
 *
 * It will display a list of found matches with the title, lost reason and worth.
 *
 * Usage:
 * node search-deals-by-lost-reason.js YOUR_API_TOKEN SEARCH_TERM
 */

if (!process.argv[2]) {
	process.stderr.write('Please provide the API token! (e.g. search-deals-by-lost-reason.js [api_token])' + "\n");
	process.exit();
}

if (!process.argv[3]) {
	process.stderr.write('Please provide a search term (e.g. search-deals-by-lost-reason.js [api_token] [term])' + "\n");
	process.exit();
}

const pipedrive = require('../lib');

pipedrive.Configuration.apiToken = process.argv[2];

(async () => {
	try {
		const searchResults = await pipedrive.SearchResultsController.getPerformASearchUsingASpecificFieldValue({
			term: process.argv[3],
			exactMatch: 0,
			fieldType: 'dealField',
			fieldKey: 'lost_reason',
			returnItemIds: true,
			limit: 10
		});

		if (searchResults.data && searchResults.data.length > 0) {
			for (const result of searchResults.data) {
				const deal = await pipedrive.DealsController.getDetailsOfADeal(result.id);

				console.log(`* ${deal.data.title} (Lost reason: ${deal.data.lost_reason}) was worth ${deal.data.value} ${deal.data.currency}`);
			}
		} else {
			console.log('No results found');
		}
	} catch (error) {
		console.log(error);
	}
})();