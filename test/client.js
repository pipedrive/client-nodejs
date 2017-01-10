var should = require('should');

describe('client module', function() {

	it('should expose some of the main object types', function() {
		var Pipedrive = require('./..'),
			pipedrive = new Pipedrive.Client('apitoken');

		should(pipedrive.Deals).be.an.Object();
		should(pipedrive.Persons).be.an.Object();
		should(pipedrive.Organizations).be.an.Object();
		should(pipedrive.Activities).be.an.Object();
		should(pipedrive.Products).be.an.Object();
		should(pipedrive.Files).be.an.Object();
		should(pipedrive.Users).be.an.Object();
	});

});