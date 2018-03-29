/*!
 * This basic example shows how to update product variations
 *
 * It starts by fetching the first deal from the
 * account, it then fetches 10 updates of this deal.
 *
 * Usage:
 * node product-variations.js APITOKEN
**/

if (!process.argv[2]) {
	process.stderr.write('Please provide API token!' + "\n");
	process.exit();
}

var Pipedrive = require(__dirname + '/../index');
var pipedrive = new Pipedrive.Client(process.argv[2]);
var _ = require('lodash');

pipedrive.Products.getAll({start: 0, limit: 10}, function (error, data, additionalData, req, res, relatedObjects) {
	var product = _.first(data);
	product.updateVariation({
		id: product.product_variations[0].id,
		name: 'argentum',
		prices: [
			{
				price: 444,
				cost: 333,
				currency: 'USD'
			}
		]
	}, function (err, data) {
		console.log(err);
		console.log(data);
	});
});
