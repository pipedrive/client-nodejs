/*!
 * This basic example shows how to use custom userAgent
 *
 * Usage:
 * node list-deals.js APITOKEN
**/

if (!process.argv[2]) {
	process.stderr.write('Please provide API token!' + "\n");
	process.exit();
}

var Pipedrive = require(__dirname + '/../index');
var pipedrive = new Pipedrive.Client(process.argv[2], {
	'userAgent': 'Mozilla Chrome'
});

pipedrive.Deals.getAll({ start: 0, limit: 5 }, function(error, data, additionalData, req) {
	console.log(req.response.req)
});