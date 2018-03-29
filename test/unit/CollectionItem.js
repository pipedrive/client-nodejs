var assert = require('chai').assert,
	path = require('path'),
	proxyquire = require('proxyquire'),
	sinon = require('sinon');

describe('CollectionItem', function () {

	var item;

	var restHandlersPath = path.normalize(__dirname + '/../../lib/restHandlers');

	var restHandlerMock = {
		editItem: sinon.spy()
	};

	var initWithMocks = function () {
		var stubs = {};
		stubs[restHandlersPath] = function () {
			return restHandlerMock
		};

		var CollectionItem = proxyquire('./../../lib/CollectionItem', stubs);

		item = new CollectionItem('deals', {
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

		it('should call restHandler.editItem() when item.updateProduct() is called', function () {
			item.updateProduct({
				id: 2
			});

			sinon.assert.calledOnce(restHandlerMock.editItem);
			sinon.assert.calledWith(restHandlerMock.editItem, 2, 'deals/1/products', {id: 2});
		});
	});
});