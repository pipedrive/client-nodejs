(function() {
	'use strict';

	var _ = require('lodash'),
		RestHandlers = require(__dirname + '/restHandlers'),
		blueprint = require(__dirname + '/blueprint'),
		inflection = require(__dirname + '/inflection');

	function CollectionItem(kind, data, itemId, options, undefinedProperty) {

		var wrapCollectionItems = require(__dirname + '/wrapCollectionItems'),
			restHandlers = new RestHandlers(options);

		this.id = itemId;

		var currentItem = this;

		_.each(data, function(value, key) {
			currentItem[key] = value;
		});

		var changedData = {};

		this.save = function(saveCallback) {
			restHandlers.editItem(data.id, kind, changedData, function (error, data, additionalData, req, res) {
				var collectionItems = wrapCollectionItems([data], kind, options);
				saveCallback(error, collectionItems[0], additionalData, req, res);
			});

			changedData = {};
			return currentItem;
		};

		this.remove = function(successCallback) {
			return restHandlers.removeItem(data.id, kind, {}, successCallback);
		};

		this.get = function(key) {
			return (!_.isUndefined(data[key]) ? data[key] : undefinedProperty);
		};

		this.merge = function (withId, callback) {
			return restHandlers.mergeItem(data.id, withId, kind, function (error, data, additionalData, req, res) {
				var collectionItems = wrapCollectionItems([data], kind, options);
				callback(error, collectionItems[0], additionalData, req, res);
			});
		};

		this.duplicate = function (callback) {
			return restHandlers.duplicateItem(data.id, kind, function (error, data, additionalData, req, res) {
				var collectionItems = wrapCollectionItems([data], kind, options);
				callback(error, collectionItems[0], additionalData, req, res);
			});
		};

		this.toObject = function() {
			var obj = {};
			_.each(_.keys(this), (function(key) {
				if (typeof this[key] !== 'function') {
					obj[key] = _.clone(this[key]);
				}
			}).bind(this));
			return obj;
		};

		this.set = function(key, value) {
			if (key === 'id') {
				throw new Error(inflection.capitalize(kind) + ' ID cannot be changed.');
			}
			var changeValue = function(keyToChange, valueToChange) {
				var isObject = (typeof data[keyToChange] == 'object' && data[keyToChange]),
					isSameType = (typeof data[keyToChange] === typeof valueToChange),
					isUndefinedOrNull = (_.isNull(data[keyToChange]) || typeof data[keyToChange] == 'undefined');

				if (isObject || isSameType || (!isSameType && isUndefinedOrNull)) {
					data[keyToChange] = valueToChange;
					currentItem[keyToChange] = valueToChange;
					changedData[keyToChange] = valueToChange;
				}
				else {
					throw new Error('Can not change ' + keyToChange + ' - ' + typeof data[keyToChange] + ' must be given.');
				}
			};

			if (typeof key === 'object' && typeof value === 'undefined') {
				_.each(key, function(cValue, cKey) {
					changeValue(cKey, cValue);
				});
			}
			else {
				changeValue(key, value);
			}

			return currentItem;
		};

		// generator of sub-items management (like deal getProducts, addProduct, updateProduct, deleteProduct):
		var generateSubMethod = function(methodType, kind, relatedObject) {
			var methodSuffix = relatedObject.substr(0,1).toUpperCase() + relatedObject.substr(1);

			if (methodType !== 'get') {
				methodSuffix = inflection.singularize(methodSuffix);
			}

			var objectKey = kind + '/' + currentItem.id + '/' + relatedObject;

			currentItem[methodType + methodSuffix] = function(params, callback) {

				callback = (_.isFunction(params) && _.isUndefined(callback) ? params : callback);
				params = (_.isFunction(params) && _.isUndefined(callback) ? {} : params);
				if (!_.isFunction(callback)) {
					callback = function() {};
				}

				var relatedObjectPath = relatedObject;

				if (blueprint.selfManagedRelatedObjects.indexOf(relatedObject) !== -1) {
					relatedObjectPath = objectKey;
				}

				switch (methodType) {
					case 'get':
						return restHandlers.listItems(objectKey, params, function(error, data, additionalData, req, res){
							var collectionItems = wrapCollectionItems(data, relatedObjectPath, options);
							callback(error, collectionItems, additionalData, req, res);
						});
					case 'add':
						return restHandlers.addItem(objectKey, params, function(error, data, additionalData, req, res){
							var collectionItems = wrapCollectionItems(data, relatedObjectPath, options);
							callback(error, collectionItems, additionalData, req, res);
						});
					case 'update':
						return restHandlers.editItem(params.id, objectKey, params, function(error, data, additionalData, req, res){
							var collectionItems = wrapCollectionItems(data, relatedObjectPath, options);
							callback(error, collectionItems, additionalData, req, res);
						});
					case 'delete':
						return restHandlers.removeItem(false, objectKey, params, function(error, data, additionalData, req, res){
							var collectionItems = wrapCollectionItems(data, relatedObjectPath, options);
							callback(error, collectionItems, additionalData, req, res);
						});
					default:
						break;
				}
			};
		};

		// attaches get-methods for sub-objects (like deal products, organization persons, etc):
		if (_.isObject(blueprint.apiRelatedObjects[kind])) {
			_.each(blueprint.apiRelatedObjects[kind], function(relatedObject) {
				generateSubMethod('get', kind, relatedObject);
			});
		}

		// attaches editing capabilities for sub-objects that should have them:
		if (_.isArray(blueprint.editableSubItems[kind])) {
			_.each(blueprint.editableSubItems[kind], function(relatedObject) {

				generateSubMethod('add', kind, relatedObject);
				generateSubMethod('update', kind, relatedObject);
				generateSubMethod('delete', kind, relatedObject);

			});
		}

		return currentItem;
	}

	module.exports = CollectionItem;

})();
