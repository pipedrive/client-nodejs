/*!
 * This basic example shows how to fetch updates to
 * a deal
 *
 * It starts by fetching the first deal from the
 * account, it then fetches 10 updates of this deal.
 *
 * Usage:
 * node deal-updates.js APITOKEN
**/

if (!process.argv[2]) {
	process.stderr.write('Please provide API token!' + "\n");
	process.exit();
}

var Pipedrive = require(__dirname + '/../index');
var pipedrive = new Pipedrive.Client(process.argv[2]);
var _ = require('lodash');

pipedrive.Deals.getAll({ start: 0, limit: 1 }, function(dealsListErr, dealsList) {
	if (dealsListErr) console.log(dealsListErr);
	var deal = _.first(dealsList);

	deal.getUpdates(function(err, activities) {
		if (err) console.log(err);
		console.log(JSON.stringify(activities, null, 2));
	});
});
