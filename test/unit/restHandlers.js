var should = require('should');

describe('lib/restHandlers', function () {

	var defaultRequest = {
		url: {
			href: '',
			query: ''
		}
	};

	var defaultResponse = {
		statusCode: null
	};

	var RestHandlers = require('./../../lib/restHandlers');
	var restHandlers = new RestHandlers({});

	describe('genericResponse()', function () {
		it('should pass data in callback on success', function () {
			var responseBody = '{"success":true, "data":[{"id":1}], "additional_data":[]}';

			var called = false;
			var callback = function (responseError, responseData) {
				called = true;
				should(responseData.length).be.equal(1);
				should(responseData[0].id).be.equal(1);
			};

			restHandlers.genericResponse(
				'GET', {}, responseBody, callback, defaultRequest, defaultResponse
			);
			should(called).be.equal(true);
		});

		it('should pass error in callback on response containing error', function () {
			var responseBody = '{"success":false, "error":"Backend error"}';

			var called = false;
			var callback = function (responseError) {
				called = true;
				should(responseError.message).be.equal('Backend error');
			};

			restHandlers.genericResponse(
				'GET', {}, responseBody, callback, defaultRequest, defaultResponse
			);
			should(called).be.equal(true);
		});

		describe('error cases', function () {
			it('should return undefined if callback is not present', function () {
				var result = restHandlers.genericResponse(
					'GET', {}, {}, null, defaultRequest
				);

				should(result).be.equal(undefined);
			});

			it('should throw basic error if response body is not json (plain text)', function () {
				var responseBody = 'Oops something went wrong';

				var called = false;
				var callback = function (responseError) {
					called = true;
					should(responseError.message).be.equal('Malformed Pipedrive API response');
				};

				restHandlers.genericResponse(
					'GET', {}, responseBody, callback, defaultRequest, defaultResponse
				);
				should(called).be.equal(true);
			});


			describe('handle 4xx/5xx http statuses', function () {
				it('should throw error, if has .error in response', function () {
					var responseBody = '{"error": "Backend error"}';

					var called = false;
					var callback = function (responseError) {
						called = true;
						should(responseError.message).be.equal('Pipedrive API error:Backend error');
					};

					restHandlers.genericResponse(
						'GET', {}, responseBody, callback, defaultRequest, {
							statusCode: 500
						}
					);
					should(called).be.equal(true);
				});

				it('should throw "Malformed" error, if response is not json', function () {
					var responseBody = "Not valid json response";

					var called = false;
					var callback = function (responseError) {
						called = true;
						should(responseError.message).be.equal('Malformed Pipedrive API response');
					};

					restHandlers.genericResponse(
						'GET', {}, responseBody, callback, defaultRequest, {
							statusCode: 404,
							rawEncoded: responseBody
						}
					);
					should(called).be.equal(true);
				});

				describe('raw response handling', function () {

					it('should throw custom error object, if has internal raw ._error passed from rest.js', function () {
						var responseBody = 'Not found';

						var called = false;
						var callback = function (responseError) {
							called = true;
							should(responseError.message).be.equal('Custom error');
						};

						restHandlers.genericResponse(
							'GET', {}, responseBody, callback, defaultRequest, {
								statusCode: 404,
								_error: {
									message: "Custom error"
								}
							}
						);
						should(called).be.equal(true);
					});

					it('should throw custom error object, if body.error is missing, but rawEncoded.error is passed from rest.js', function () {
						var responseBody = 'Not found';

						var called = false;
						var callback = function (responseError) {
							called = true;
							should(responseError.message).be.equal('Pipedrive API error:Custom backend error');
						};

						restHandlers.genericResponse(
							'GET', {}, responseBody, callback, defaultRequest, {
								statusCode: 404,
								rawEncoded: '{"error":"Custom backend error"}'
							}
						);
						should(called).be.equal(true);
					});
				});
			});
		});
	});
});