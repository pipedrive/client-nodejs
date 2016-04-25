/*!
 * This basic example shows how to fetch all products
 * attached to a deal in Pipedrive.
 *
 * It starts by fetching the first deal from the account,
 * it then starts to fetch all products attached to this
 * deal, using pagination of 3 dealProducts per page,
 * until all dealProducts are fetched.
 *
 * It will then display a list of attached products along
 * with prices and quantities on the console.
 *
 * Usage:
 * node list-all-deal-products.js APITOKEN
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
	console.log('Products attached to ' + deal.title);

	var allDealProducts = [];
	var fetchAllDealProducts = function(start, callback) {
		var pageStart = 0;
		if (typeof start === 'function') {
			callback = start;
		} else {
			pageStart = start;
		}
		deal.getProducts({ start: pageStart, limit: 3 }, function(err, products, additionalData) {
			if (err) throw err;
			allDealProducts = allDealProducts.concat(products);
			if (additionalData && additionalData.pagination && additionalData.pagination.more_items_in_collection) {
				fetchAllDealProducts(pageStart + 3, callback);
			} else {
				callback();
			}
		});
	};

	fetchAllDealProducts(function() {
		_.each(allDealProducts, function(dealProduct) {
			console.log('===================');
			console.log(dealProduct.sum_formatted + ' [' + dealProduct.quantity + '] ' + dealProduct.name);
			console.log('===================');
		});
		console.log(allDealProducts.length + ' dealProducts fetched');
	});
});
