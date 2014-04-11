if (!process.argv[2]) {
	process.stderr.write('Please provide API token!' + "\n");
	process.exit();
}

var Pipedrive = require(__dirname + '/../index');
var pipedrive = new Pipedrive.Client(process.argv[2]);
var _ = require('lodash');

pipedrive.Filters.getAll({ type: 'deals' }, function(filtersListErr, filtersList) {
	if (filtersList.length > 0) {
		console.log('Fetching deals that match filter "' + filtersList[0].get('name') + '"...');

		pipedrive.Deals.getAll({ filter_id: filtersList[0].get('id'), start: 0, limit: 5 }, function(dealsListErr, dealsList) {
			if (dealsListErr) console.log(dealsListErr);
			_.each(dealsList, function(deal) {
				deal.getActivities(function(err, activities) {
					if (err) console.log(err);
					if(activities == null) activities = new Array();
					console.log('* ' + deal.get('title') + ' (worth ' + deal.get('value') + ' ' + deal.get('currency') + ', has ' + activities.length + ' activit' + (activities.length != 1 ? 'ies' : 'y') + ')');	
				});
			});
		});
	}
	else {
		console.log('No filters found on your account, cannot fetch deals list.');
	}
});