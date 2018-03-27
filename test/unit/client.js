var should = require('should/as-function'),
	Pipedrive = require('./../..'),
	blueprint = require('./../../lib/blueprint');

describe('client module', function () {

	beforeEach(function () {
		client = new Pipedrive.Client('apitoken');
		strictClient = new Pipedrive.Client('apitoken', {strictMode: true});
	});

	it('should expose main API objects', function () {
		should(client.Activities).be.an.Object();
		should(client.Deals).be.an.Object();

		// iterate through all
		blueprint.apiObjects.forEach(function (obj) {
			should(client[obj.substr(0, 1).toUpperCase() + obj.substr(1)]).be.an.Object();
		});
	});

	describe('client.on()', function () {
		it('should be defined in strict mode', function () {
			should(strictClient.on).be.a.Function();
		});

		it('should not be defined in regular mode', function () {
			should(client.on).be.a.Undefined();
		});
	});

	it('client.getAll() should throw error if non-existant resource is requested', function (done) {
		client.getAll('bananas', function (error) {
			should(error.message).equal('bananas is not supported object type for getAll()');
			return done();
		});
	});
});