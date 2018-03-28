var assert = require('chai').assert;

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
				assert.equal(responseData.length, 1);
				assert.equal(responseData[0].id, 1);
			};

			restHandlers.genericResponse(
				'GET', {}, responseBody, callback, defaultRequest, defaultResponse
			);
			assert.isTrue(called);
		});

		it('should pass error in callback on response containing error', function () {
			var responseBody = '{"success":false, "error":"Backend error"}';

			var called = false;
			var callback = function (responseError) {
				called = true;
				assert.equal(responseError.message, 'Backend error');
			};

			restHandlers.genericResponse(
				'GET', {}, responseBody, callback, defaultRequest, defaultResponse
			);
			assert.isTrue(called);
		});

		describe('error cases', function () {
			it('should return undefined if callback is not present', function () {
				var result = restHandlers.genericResponse(
					'GET', {}, {}, null, defaultRequest
				);

				assert.isUndefined(result);
			});

			it('should throw basic error if response body is not json (plain text)', function () {
				var responseBody = 'Oops something went wrong';

				var called = false;
				var callback = function (responseError) {
					called = true;
					assert.equal(responseError.message, 'Malformed Pipedrive API response');
				};

				restHandlers.genericResponse(
					'GET', {}, responseBody, callback, defaultRequest, defaultResponse
				);
				assert.isTrue(called);
			});


			describe('handle 4xx/5xx http statuses', function () {
				it('should throw error, if has .error in response', function () {
					var responseBody = '{"error": "Backend error"}';

					var called = false;
					var callback = function (responseError) {
						called = true;
						assert.equal(responseError.message, 'Pipedrive API error:Backend error');
					};

					restHandlers.genericResponse(
						'GET', {}, responseBody, callback, defaultRequest, {
							statusCode: 500
						}
					);
					assert.isTrue(called);
				});

				it('should throw "Malformed" error, if response is not json', function () {
					var responseBody = "Not valid json response";

					var called = false;
					var callback = function (responseError) {
						called = true;
						assert.equal(responseError.message, 'Malformed Pipedrive API response');
					};

					restHandlers.genericResponse(
						'GET', {}, responseBody, callback, defaultRequest, {
							statusCode: 404,
							rawEncoded: responseBody
						}
					);
					assert.isTrue(called);
				});

				describe('raw response handling', function () {

					it('should throw custom error object, if has internal raw ._error passed from rest.js', function () {
						var responseBody = 'Not found';

						var called = false;
						var callback = function (responseError) {
							called = true;
							assert.equal(responseError.message, 'Custom error');
						};

						restHandlers.genericResponse(
							'GET', {}, responseBody, callback, defaultRequest, {
								statusCode: 404,
								_error: {
									message: "Custom error"
								}
							}
						);
						assert.isTrue(called);
					});

					it('should throw custom error object, if body.error is missing, but rawEncoded.error is passed from rest.js', function () {
						var responseBody = 'Not found';

						var called = false;
						var callback = function (responseError) {
							called = true;
							assert.equal(responseError.message, 'Pipedrive API error:Custom backend error');
						};

						restHandlers.genericResponse(
							'GET', {}, responseBody, callback, defaultRequest, {
								statusCode: 404,
								rawEncoded: '{"error":"Custom backend error"}'
							}
						);
						assert.isTrue(called);
					});
				});
			});
		});
	});
});