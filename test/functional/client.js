var should = require('should');
var apiToken = process.env.PIPEDRIVE_API_TOKEN || '';

//fixture — need deal with id 1
describe('client integration tests', function() {

	it('getting non-existant deal should return error', function(done) {
		var Pipedrive = require('./../..'),
			pipedrive = new Pipedrive.Client(apiToken, { strictMode: true });

		pipedrive.Deals.get(99999, function(err, deal) {
			should.notEqual(err, null);
			should.equal(err.message, 'Pipedrive API error:Deal not found');

			done();
		});

		should(pipedrive.on).be.a.Function();
	});

	it('adding non-existant product to existing deal (with id 1) should return error string in callback', function(done) {
		var Pipedrive = require('./../..'),
			pipedrive = new Pipedrive.Client(apiToken, { strictMode: true });

		pipedrive.Deals.get(1, function(err, deal) {
			should.equal(err, null);

			deal.addProduct({
				product_id: 999999,
				quantity: 1,
				item_price: 0
			}, function (addErr, addData) {

				should.notEqual(addErr, null);
				should.equal(addErr.message, 'Pipedrive API error:Product(s) 1 not found.');
				done();
			});
		});

		should(pipedrive.on).be.a.Function();
	});

});