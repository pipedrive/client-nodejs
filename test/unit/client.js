var should = require('should');

describe('client module', function() {

	it('should expose some of the main object types', function() {
		var Pipedrive = require('./../..'),
			pipedrive = new Pipedrive.Client('apitoken'),
			blueprint = require('./../../lib/blueprint');

		// iterate through all top level objects which should be exposed, e.g. pipedrive.Deals, ...
		blueprint.apiObjects.forEach(function(obj) {
			should(pipedrive[obj.substr(0,1).toUpperCase() + obj.substr(1)]).be.an.Object();
		});
	});

	it('should expose .on() listener in strict mode', function() {
		var Pipedrive = require('./../..'),
			pipedrive = new Pipedrive.Client('apitoken', { strictMode: true });

		should(pipedrive.on).be.a.Function();
	});
});