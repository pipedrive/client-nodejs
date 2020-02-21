/**
 * This example shows how to perform a search.
 *
 * It will display a list of found matches with the type, name and id of the object(s).
 *
 * Usage:
 * node search.js YOUR_API_TOKEN SEARCH_TERM
 */

if (!process.argv[2]) {
	process.stderr.write('Please provide the API token! (e.g. search.js [api_token])' + "\n");
	process.exit();
}

if (!process.argv[3]) {
	process.stderr.write('Please provide a search term (e.g. search.js [api_token] [term])' + "\n");
	process.exit();
}

const pipedrive = require('../lib');

pipedrive.Configuration.apiToken = process.argv[2];

(async () => {
	try {
		const searchResults = await pipedrive.SearchResultsController.getPerformASearch({
			term: process.argv[3],
			limit: 10
		});

		if (searchResults.data && searchResults.data.length > 0) {
			for (const result of searchResults.data) {
				console.log(`${result.type} ${result.title} (id: ${result.id})`);
			}
		} else {
			console.log('No results found');
		}
	} catch (error) {
		console.log(error);
	}
})();