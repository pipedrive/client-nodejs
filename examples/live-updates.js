if (!process.argv[2]) {
	process.stderr.write('Please provide API token!' + "\n");
	process.exit();
}

var Pipedrive = require(__dirname + '/../index');
var pipedrive = new Pipedrive.Client(process.argv[2], { strictMode: true });
var _ = require('lodash');

var start = Date.now();

pipedrive.on('deal.added', function(event, data) {
	console.log('Deal ' + event.meta.id + ' was added ('+data.current.title+', worth '+data.current.value+' '+data.current.currency+')');
	pipedrive.removeAllListeners();
	process.exit();
});

pipedrive.on('connect', function() {
	pipedrive.Deals.add({ title: 'Live deal', value: 10000, currency: 'EUR' });
});
