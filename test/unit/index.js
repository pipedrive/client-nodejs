var should = require('should');

describe('main module', function() {

	it('should be requireable without errors', function() {
		var Pipedrive = require('./../..');
	});

	it('should expose top-level functionality', function() {
		var Pipedrive = require('./../..');

		should(Pipedrive.Client).be.a.Function();
		should(Pipedrive.authenticate).be.a.Function();
	});

});