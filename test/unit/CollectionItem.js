var assert = require('chai').assert,
	path = require('path'),
	proxyquire = require('proxyquire'),
	sinon = require('sinon');

describe('CollectionItem', function () {

	var item;

	var restHandlersPath = path.normalize(__dirname + '/../../lib/restHandlers');

	var restHandlerMock = {
		editItem: sinon.spy(),
		listItems: sinon.spy()
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
		console.log(item);
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
});