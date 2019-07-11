var assert = require('chai').assert,
	Pipedrive = require('./../..'),
	blueprint = require('./../../lib/blueprint');

describe('client module', function () {

	beforeEach(function () {
		client = new Pipedrive.Client('apitoken');
		strictClient = new Pipedrive.Client('apitoken', {strictMode: true});
	});

	it('should expose main API objects', function () {
		assert.isObject(client.Activities);
		assert.isObject(client.Deals);

		// iterate through all
		blueprint.apiObjects.forEach(function (obj) {
			assert.isObject(client[obj.substr(0, 1).toUpperCase() + obj.substr(1)]);
		});
	});

	it('client.getAll() should throw error if non-existant resource is requested', function (done) {
		client.getAll('bananas', function (error) {
			assert.equal(error.message, 'bananas is not supported object type for getAll()');
			return done();
		});
	});
});