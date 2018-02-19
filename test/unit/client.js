var should = require('should/as-function'),
	Pipedrive = require('./../..'),
	blueprint = require('./../../lib/blueprint');

describe('client module', function() {

	beforeEach(function() {
		client = new Pipedrive.Client('apitoken');
		strictClient = new Pipedrive.Client('apitoken', { strictMode: true });
	});

	it('should expose some of the main object types', function() {
		// iterate through all top level objects which should be exposed, e.g. client.Deals, ...
		blueprint.apiObjects.forEach(function(obj) {
			should(client[obj.substr(0,1).toUpperCase() + obj.substr(1)]).be.an.Object();
		});
	});

	it('should expose .on() listener in strict mode', function() {
		should(strictClient.on).be.a.Function();
	});

	it('pipedrive.getAll should error if it is passed a bad resource', function(done) {
		client.getAll('bananas', function(err) {
			should(err).be.an.instanceOf(Error, 'Did not error on bad resource');
			return done();
		});
	});
});