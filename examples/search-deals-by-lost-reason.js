if (!process.argv[2]) {
	process.stderr.write('Please provide API token! (e.g. search-deals-by-lost-reason.js [api_token])' + "\n");
	process.exit();
}
if (!process.argv[3]) {
	process.stderr.write('Please provide a search term (e.g. search-deals-by-lost-reason.js [api_token] [term])' + "\n");
	process.exit();
}

var Pipedrive = require(__dirname + '/../index');
var pipedrive = new Pipedrive.Client(process.argv[2]);
var _ = require('lodash');

var reqParams = {
	term: process.argv[3],
	exact_match: false,
	field_type: 'dealField',
	field_key: 'lost_reason',
	return_item_ids: true,
	limit: 10
};

pipedrive.SearchResults.field(reqParams, function(dealsListErr, dealsList) {
	if (dealsListErr) console.log(dealsListErr);
	_.each(dealsList, function(deal) {
		pipedrive.Deals.get(deal.id, function(err, fullDealData) {
			if (err) console.log(err);
			deal.getActivities(function(err, activities) {
				if (err) console.log(err);
				if(activities == null) activities = new Array();
				console.log('* ' + fullDealData.get('title') + ' (Lost reason: ' + fullDealData.lost_reason + ') was worth ' + fullDealData.get('value') + ' ' + fullDealData.get('currency') + ', had ' + activities.length + ' activit' + (activities.length != 1 ? 'ies' : 'y'));
			});
		});
	});
});
