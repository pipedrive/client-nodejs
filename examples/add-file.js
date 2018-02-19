/*!
 * This basic example shows how to fetch some deals
 * matching a specific filter from Pipedrive account.
 *
 * It starts by fetching the first deals filter from the
 * account, it then fetches 5 deals matching to this
 * filter.
 *
 * It will then display a list of found deals along
 * with the values and with how many activities they are
 * associated with.
 *
 * Usage:
 * node list-deals.js APITOKEN
**/

if (!process.argv[2]) {
	process.stderr.write('Please provide API token!' + "\n");
	process.exit();
}

var Pipedrive = require(__dirname + '/../index');
var pipedrive = new Pipedrive.Client(process.argv[2]);
var _ = require('lodash');

pipedrive.Files.add({ name: 'test.js' }, { data: __dirname + '/add-file.js' }, function(addFileErr, addFileData) {
	if (addFileErr) throw addFileErr;
	console.log(addFileData);
});