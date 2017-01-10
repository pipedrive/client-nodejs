if (!process.argv[2]) {
	process.stderr.write('Please provide API token! (e.g. search.js [api_token])' + "\n");
	process.exit();
}
if (!process.argv[3]) {
	process.stderr.write('Please provide a search term (e.g. search.js [api_token] [term])' + "\n");
	process.exit();
}

var Pipedrive = require(__dirname + '/../index');
var pipedrive = new Pipedrive.Client(process.argv[2]);
var _ = require('lodash');

var reqParams = {
	term: process.argv[3],
	limit: 10
};

pipedrive.SearchResults.getAll(reqParams, function(searchErr, searchResults) {
	console.log(arguments);
	process.exit(0);
	if (searchErr) console.log(searchErr);
	console.log('Found ' + searchResults.length + ' results:');
	_.each(searchResults, function(result) {
		console.log(result.type + ' ' + result.title + ' (id: ' + result.id + ')');
	});
});
