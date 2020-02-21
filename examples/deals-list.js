/**
 * This basic example shows how to fetch some deals matching a specific filter from Pipedrive account.
 *
 * It starts by fetching the first deals filter from the account,
 * it then fetches 5 deals matching to this filter.
 *
 * It will then display a list of found deals along with the values
 * and with how many activities they are associated with.
 *
 * Usage:
 * node deals-list.js YOUR_API_TOKEN
 */

if (!process.argv[2]) {
	process.stderr.write('Please provide the API token!' + "\n");
	process.exit();
}

const pipedrive = require('../lib');

pipedrive.Configuration.apiToken = process.argv[2];

(async () => {
	try {
		const filters = await pipedrive.FiltersController.getAllFilters('deals');

		if (filters.data && filters.data.length > 0) {
			console.log(`Fetching deals that match filter "${filters.data[0].name}"...`);

			const deals = await pipedrive.DealsController.getAllDeals({
				filter_id: filters.data[0].id,
				start: 0,
				limit: 5
			});

			for (const deal of deals.data) {
				const activities = await pipedrive.DealsController.listActivitiesAssociatedWithADeal({ id: deal.id });

				if (activities.data === null) {
					activities.data = [];
				}
				console.log(`* ${deal.title} (worth ${deal.value} ${deal.currency}) has ${activities.data.length} activities`)
			}
		} else {
			console.log('No filters found on your account, cannot fetch deals list.');
		}
	} catch (error) {
		console.log(error);
	}
})();