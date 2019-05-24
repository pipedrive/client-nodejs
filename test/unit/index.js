var assert = require('chai').assert;

describe('main module', function() {

	it('should be requireable without errors', function() {
		var Pipedrive = require('./../..');
	});

	it('should expose top-level functionality', function() {
		var Pipedrive = require('./../..');

		assert.isFunction(Pipedrive.Client);
	});

});