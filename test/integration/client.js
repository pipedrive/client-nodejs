var Pipedrive = require('./../..');
var assert = require('chai').assert;
var _ = require('lodash');

var API_TOKEN = process.env.API_TOKEN;
if (!API_TOKEN) {
	process.stderr.write('Please provide API_TOKEN in env variables for tests to run' + "\n");
	process.exit();
}

describe('client', function () {

	var client, strictClient;

	beforeEach(function () {
		client = new Pipedrive.Client(API_TOKEN);
		strictClient = new Pipedrive.Client(API_TOKEN, {strictMode: true});
	});


	describe('client.on()', function () {
		it('should allow event binding to connect and deal adding', function (done) {
			this.timeout(10000);

			var deal = {title: 'Client-nodejs - .on() test', value: 10000, currency: 'EUR'};

			strictClient.on('connect', function () {
				strictClient.Deals.add(deal, function (error, result) {
					deal.id = result.id;
				});
			});

			strictClient.on('deal.added', function (event, data) {
				assert.equal(data.current.title, deal.title);
				assert.equal(data.current.value, deal.value);
				assert.equal(data.current.currency, deal.currency);

				strictClient.removeAllListeners();

				//cleanup
				strictClient.Deals.remove(deal.id, function () {
					done();
				});
			});
		});
	});

	describe('collection.getAll()', function () {
		it('should list filters and deals', function (done) {
			client.Filters.getAll({type: 'deals'}, function (filtersListErr, filtersList) {

				assert.isTrue(filtersList.length > 0);
				assert.equal(filtersList[0].get('name'), 'All open deals');

				client.Deals.getAll(
					{filter_id: filtersList[0].get('id'), start: 0, limit: 5},
					function (dealsListErr, dealsList, additionalData, rawReq, rawRes, relatedObjects) {
						assert.isTrue(dealsList.length > 0);

						assert.isDefined(relatedObjects.user);
						assert.isDefined(relatedObjects.organization);

						done();
					});
			});
		});
	});

	describe('collection.add() & collection.getItem()', function () {
		it('should create and get deal', function (done) {

			var payloadDeal = {
				title: 'Client-nodejs - .add() test',
				value: Math.ceil(Math.random() * 1000),
				currency: 'EUR'
			};

			//create
			client.Deals.add(payloadDeal, function (dealAddError, createdDeal) {
				assert.isDefined(createdDeal.id);

				//get
				client.Deals.get(createdDeal.id, function (dealsListErr, fetchedDeal, additionalData, rawReq, rawRes, relatedObjects) {
					assert.equal(fetchedDeal.value, payloadDeal.value);
					assert.equal(fetchedDeal.title, payloadDeal.title);

					assert.isDefined(relatedObjects.user);

					//cleanup
					client.Deals.remove(createdDeal.id, function () {
						done();
					});
				});
			});
		});
	});

	describe('сollection.find()', function () {
		it('should find first person by name', function (done) {
			client.Persons.getAll(function (err, listedPersons) {
				assert.isTrue(listedPersons.length > 0);

				client.Persons.find({term: listedPersons[0].name}, function (error, foundPersons, additionalData, req, res, relatedObjects) {
					assert.equal(foundPersons.length, 1);
					assert.equal(foundPersons[0].id, listedPersons[0].id);

					//search does not include related objects yet
					assert.isUndefined(relatedObjects);
					done();
				});
			});
		})
	});

	describe('item.getUpdates()', function () {
		it('should get changes deal had', function (done) {
			client.Deals.getAll({start: 0, limit: 1}, function (dealsListErr, dealsList) {
				if (dealsListErr) console.log(dealsListErr);
				var deal = _.first(dealsList);

				deal.getUpdates(function (err, updates) {
					assert.isTrue(updates.length > 0);
					assert.equal(updates[0].object, 'dealChange');

					done();
				});
			});
		});
	})
});