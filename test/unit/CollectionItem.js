var assert = require('chai').assert,
	path = require('path'),
	proxyquire = require('proxyquire'),
	sinon = require('sinon');

describe('CollectionItem', function () {

	var item;

	var restHandlersPath = path.normalize(__dirname + '/../../lib/restHandlers');

	var restHandlerMock = {
		editItem: sinon.stub(),
		listItems: sinon.spy()
	};

	var initWithMocks = function () {
		var stubs = {};
		stubs[restHandlersPath] = function () {
			return restHandlerMock
		};

		var CollectionItem = proxyquire('./../../lib/CollectionItem', stubs);

		item = new CollectionItem('deals', {
			id: 1,
			title: 'Deal title'
		}, 1);

		return item;
	};

	beforeEach(function () {
		item = initWithMocks(restHandlerMock);
	});

	it('should return object', function () {
		assert.isObject(item);
		assert.isFunction(item.getUpdates);
	});

	describe('subMethods', function () {
		it('should be generated for deal products', function () {
			assert.isFunction(item.addProduct);
			assert.isFunction(item.updateProduct);
			assert.isFunction(item.deleteProduct);
		});

		it('.getUpdates() should call restHandler.editItem()', function () {
			item.getUpdates({
				id: 3
			});

			sinon.assert.calledOnce(restHandlerMock.listItems);
			sinon.assert.calledWith(restHandlerMock.listItems, 'deals/1/flow', {id: 3});
		});

		it('.updateProduct() should call restHandler.editItem()', function () {
			item.updateProduct({
				id: 2
			});

			sinon.assert.calledOnce(restHandlerMock.editItem);
			sinon.assert.calledWith(restHandlerMock.editItem, 2, 'deals/1/products', {id: 2});
		});
	});

	describe('item.save()', function() {
		it('should call restHandler.editItem()', function () {
			// In the normal case, we can set a field value and call save().  Internally, the restHandler.editItem()
			// method will be called with our update.
			item.set('title', 'Other deal title');
			item.save();

			sinon.assert.calledWith(restHandlerMock.editItem, 1, 'deals', {title: 'Other deal title'});
		});

		it('should handle error with null data from REST call', function () {
			// Set a field to a field ID that doesn't exist (maybe the custom field key is bad).
			item.set('badFieldId', 'Ignored value');

			// When we save the item in this state, the real RestHandler.editItem() is given bad input, so it receives
			// back an error response, such as a 400 with body:
			//    {
			//      "success":false,
			//      "error":"Bad request",
			//      "error_info":"Please check developers.pipedrive.com for more information about Pipedrive API.",
			//      "data":null,
			//      "additional_data":null
			//    }
			//
			// We want to emulate this behavior to make sure our CollectionItem callback handles it properly.  When a
			// item.save(callbackFn) call is made, the callbackFn should have the opportunity to handle this error.
			var restError = new Error('Pipedrive API error:Bad request');
			restHandlerMock.editItem.callsFake(function(id, kind, changedData, callbackFn) {
				callbackFn(restError, null, null);
			});

			// For purposes of this test, we don't need to do anything in our callback, but we MUST ensure that we get
			// called back.  Without getting the error object passed to it, we can't respond to the rejected input.
			var saveCallback = sinon.spy();
			item.save(saveCallback);

			sinon.assert.calledWith(restHandlerMock.editItem, 1, 'deals', {'badFieldId': 'Ignored value'});
			sinon.assert.calledOnce(saveCallback);
			sinon.assert.calledWith(saveCallback, restError);

			restHandlerMock.editItem.resetBehavior();
		});
	});
});