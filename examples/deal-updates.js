/**
 * This basic example shows how to fetch updates to a deal.
 *
 * It starts by fetching the first deal from the account and then fetches 10 latest updates of this deal.
 *
 * Usage:
 * node deals-updates.js YOUR_API_TOKEN
 */

if (!process.argv[2]) {
	process.stderr.write('Please provide the API token!' + "\n");
	process.exit();
}

const pipedrive = require('../lib');

pipedrive.Configuration.apiToken = process.argv[2];

(async () => {
	try {
		const deals = await pipedrive.DealsController.getAllDeals({ start: 0, limit: 1 });

		if (deals.data && deals.data.length > 0) {
			const deal = deals.data[0];

			console.log(`Deal ${deal.title} (${deal.value} ${deal.currency})`);

			const updates = await pipedrive.DealsController.listUpdatesAboutADeal({
				id: deal.id,
				start: 0,
				limit: 10
			});

			for (const update of updates.data) {
				console.log(`${update.object} from ${update.timestamp.split(' ')[0]}:`);
				console.log(JSON.stringify(update.data, null, 2));
			}
		} else {
			console.log('No deals found on your account.');
		}
	} catch (error) {
		console.log(error);
	}
})();