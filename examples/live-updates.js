/*!
 * This basic example shows how to use live,
 * EventEmitter-like listener functions bound to
 * actual events happening on your Pipedrive account.
 *
 * It starts by attaching a function to all
 * 'deal.added' events happening on Pipedrive.
 * The syntax for event names is the following:
 * '{objectName}.{eventName}' where eventName can
 * be any of the following: added, deleted, updated.
 *
 * It then further sets a handler function to a
 * special 'connect' event which is triggered when
 * the live event handlers functionality has 
 * established a websocket connection. When that is
 * done, the script adds a new deal, with the title
 * "Live deal". Once the deal is added, the original
 * callback for the 'deal.added' event gets invoked.
 *
 * Note that the same callback would get called in
 * each case a new deal gets created on your Pipedrive
 * account for as long as your app is running.
 * You may remove live listeners similarly to how
 * EventEmitter API states, using the .removeListener()
 * method.
 *
 * This example shows you how to build real-time
 * integrations using EventEmitter style in Node.js
 * apps along with your Pipedrive account data.
 *
 * Important notice: in order for live listeners to
 * work, you need to set { strictMode: true } when
 * invoking the new Pipedrive.Client(). See below.
 *
 * Usage:
 * node live-updates.js APITOKEN
 */

if (!process.argv[2]) {
	process.stderr.write('Please provide API token!' + "\n");
	process.exit();
}

var Pipedrive = require(__dirname + '/../index');
var pipedrive = new Pipedrive.Client(process.argv[2], { strictMode: true });
var _ = require('lodash');

var start = Date.now();

pipedrive.on('deal.added', function(event, data) {
	console.log('Deal ' + event.meta.id + ' was added (' + data.current.title + ', worth ' + data.current.value + ' ' + data.current.currency + ')');
	pipedrive.removeAllListeners();
	process.exit();
});

pipedrive.on('connect', function() {
	pipedrive.Deals.add({ title: 'Live deal', value: 10000, currency: 'EUR' });
});
