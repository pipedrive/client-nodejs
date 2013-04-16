/*
(MIT License)

Copyright (C) 2012 by Pipedrive, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
var _ = require('underscore');
var qs = require('qs');
var rest = require('./restler');
var inflection = require(__dirname + '/inflection');

var debug = !!process.env.PIPEDRIVE_DEBUG;

var log = function() {
	if (debug) console.log.apply(this, arguments);
}

var apiUrl = function(path, apiToken, supplyToken) {
	return baseUri + '/' + path + (supplyToken === true ? '?api_token=' + encodeURIComponent(apiToken) : '');
};

var protocol = 'https';
var host = 'api.pipedrive.com';
var version = 'v1';
var baseUri = protocol + '://' + host + '/' + version;

var apiObjects = [
	'activities',
	'activityTypes',
	'authorizations',
	'currencies',
	'deals',
	'dealFields',
	'files',
	'filters',
	'notes',
	'organizationFields',
	'organizations',
	'persons',
	'personFields',
	'pipelines',
	'products',
	'productFields',
	'searchResults',
	'stages',
	'users'
];

var apiRelatedObjects = {
	'deals': [
		'activities',
		'products',
		'files',
		'updates',
		'followers',
		'notes'
	],
	'persons': [
		'activities',
		'products',
		'files',
		'updates',
		'deals',
		'followers',
		'notes'
	],
	'organizations': [
		'activities',
		'products',
		'files',
		'updates',
		'deals',
		'persons',
		'followers',
		'notes'
	],
	'pipelines': [
		'deals'
	],
	'stages': [
		'deals'
	],
	'products': [
		'deals'
	],
	'users': [
		'activities',
		'followers',
		'updates'
	]
};

var selfManagedRelatedObjects = ['followers'];
var searchableObjects = ['organizations', 'deals', 'persons','products'];
var timelineableObjects = ['deals'];
var editableSubItems = {
	'deals': ['products']
};
var mergeableObjects = ['persons', 'organizations', 'users'];

var genericResponseHandler = function(target, method, object, params, responseBody, callback, rawRequest, rawResponse) {
	if (_.isString(responseBody)) {
		try {
			responseBody = JSON.parse(responseBody);
		}
		catch (err) {}
	}
	log('Handling response of ' + method + ' ' + object + ': ' + rawRequest.url.href + (rawRequest.url.href.indexOf(rawRequest.url.query) === -1 ? '?' + rawRequest.url.query : ''));

	if (responseBody.success === true) {
		if (_.isFunction(callback)) callback(null, responseBody.data, responseBody.additional_data, rawRequest, rawResponse);
	}
	else {
		var errorMessage = 'Got HTTP response ' + rawResponse.statusCode + ' from Pipedrive API';

		if (responseBody.error) {
			errorMessage = responseBody.error;
		}
		else {
			try {
				var errorBody = JSON.parse(rawResponse.rawEncoded);
				if (!_.isUndefined(errorBody.error)) {
					errorMessage = new Error('Pipedrive API error:' + errorBody.error);
				}
			}
			catch (err) {}
		}

		if (_.isFunction(callback)) callback(errorMessage, null, null, rawRequest, rawResponse);
	}

};

// GET /items
var listItemsHandler = function(object, params, callback, apiToken) {
	log('listItemsHandler');
	var paramsToSupply = _.extend({}, (_.isObject(params) ? params : {}), (apiToken ? { api_token: apiToken } : {}));
	var dataObject = (object == 'authorizations' ? { multipart: false, data: paramsToSupply } : { query: qs.stringify(paramsToSupply) });
	var req = rest[(object == 'authorizations' ? 'post' : 'get')](apiUrl(object, apiToken, false), dataObject);

	req.on('complete', function(data, res) {
		genericResponseHandler('index', 'GET', object, params, data, callback, req, res);
	});

	return req;
};

// GET /items/find
var findItemsHandler = function(object, params, callback, apiToken) {
	log('findItemsHandler');
	var paramsToSupply = _.extend({}, (_.isObject(params) ? params : {}), (apiToken ? { api_token: apiToken } : {}));
	var dataObject = { query: qs.stringify(paramsToSupply) };
	var req = rest.get(apiUrl(object, apiToken, false) + '/find', dataObject);

	req.on('complete', function(data, res) {
		genericResponseHandler('index', 'GET', object, params, data, callback, req, res);
	});

	return req;
};

// GET /items/timeline
var timelineItemsHandler = function(object, params, callback, apiToken) {
	log('timelineItemsHandler');
	var paramsToSupply = _.extend({}, (_.isObject(params) ? params : {}), (apiToken ? { api_token: apiToken } : {}));
	var dataObject = { query: qs.stringify(paramsToSupply) };
	var req = rest.get(apiUrl(object, apiToken, false) + '/timeline', dataObject);

	req.on('complete', function(data, res) {
		genericResponseHandler('index', 'GET', object, params, data, callback, req, res);
	});

	return req;
};

// GET /items/5
var getItemHandler = function(object, id, callback, params, apiToken) {
	log('getItemHandler');
	var paramsToSupply = _.extend({}, (_.isObject(params) ? params : {}), (apiToken ? { api_token: apiToken } : {}));
	var req = rest.get(apiUrl(object, apiToken, false) + '/' + id, { json: true, query: qs.stringify(paramsToSupply) });

	req.on('complete', function(data, res) {
		genericResponseHandler('item', 'GET', object, params, data, callback, req, res);
	});

	return req;
};

// POST /items
var addItemHandler = function(object, params, callback, apiToken) {
	log('addItemHandler');
	var req = rest.post(apiUrl(object, apiToken, true), { json: true, multipart: false, data: params });

	req.on('complete', function(data, res) {
		genericResponseHandler('index', 'PUT', object, params, data, callback, req, res);
	});

	return req;
};

// PUT /items/5
var editItemHandler = function(itemId, object, params, callback, apiToken) {
	log('editItemHandler');
	var req = rest.put(apiUrl(object + '/' + itemId, apiToken, true), { json: true, multipart: false, data: params });

	req.on('complete', function(data, res) {
		genericResponseHandler('item', 'PUT', object, params, data, callback, req, res);
	});

	return req;
};

// DELETE /items/5
var removeItemHandler = function(itemId, object, params, callback, apiToken) {
	log('removeItemHandler');
	var req = rest.del(apiUrl(itemId ? object + '/' + itemId : object, apiToken, true), { json: true, multipart: false, data: (_.isObject(params) && !_.isFunction(params) ? params : { id: itemId }) });

	req.on('complete', function(data, res) {
		genericResponseHandler('item', 'DELETE', object, (_.isObject(params) && !_.isFunction(params) ? params : {}), data, (_.isFunction(params) ? params : callback), req, res);
	});

	return req;
};

// DELETE /items
var removeManyItemsHandler = function(itemIds, object, params, callback, apiToken) {
	log('removeManyItemsHandler');
	var req = rest.del(apiUrl(object, apiToken, true), { json: true, multipart: false, data: (_.isObject(params) && !_.isFunction(params) ? params : { ids: itemIds }) });

	req.on('complete', function(data, res) {
		genericResponseHandler('index', 'DELETE', object, (_.isObject(params) ? params : {}), data, (_.isFunction(params) ? params : callback), req, res);
	});

	return req;
};

// POST /items/merge/5
var mergeItemHandler = function(whichId, withId, object, callback, apiToken) {
	log('mergeItemHandler');
	if (!whichId || !withId) {
		callback(new Error('Illegal IDs given for merge.'), null, null);
		return false;
	}
	var req = rest.post(apiUrl(object + '/' + whichId + '/merge', apiToken, true), { json: true, multipart: false, data: { merge_with_id: withId } });

	req.on('complete', function(data, res) {
		genericResponseHandler('item', 'POST', object, {}, data, callback, req, res);
	});
}

var wrapCollectionItems = function(data, kind, apiToken) {

	var collectionItems = [];

	var doWrap = function(item) {
		collectionItems.push(new CollectionItem(kind, item, item.id || item.api_token, apiToken)); /* authorization objects do not have ID, they use api_token as key. */
	}

	if (_.isArray(data)) {
		_.each(data, function(item) {
			doWrap(item);
		});
	}
	else if (_.isObject(data)) {
		doWrap(data);
	}

	return collectionItems;
};

var Collection = function(kind, apiToken) {

	this.getAll = function(params, getAllCallback) {
		return listItemsHandler(kind, params, function(error, data, additionalData, req, res) {
			var collectionItems = wrapCollectionItems(data, kind, apiToken);
			(_.isFunction(params) ? params : getAllCallback)(error, collectionItems, additionalData, req, res);
		}, apiToken);
	};

	this.get = function(id, getCallback, params) {
		if (!id) throw new Error('Cannot get ' + inflection.singularize(kind) + ' - ID must be given.');

		return getItemHandler(kind, id, function(error, data, additionalData, req, res) {
			if (data !== null && !_.isUndefined(data) && data.id) {
				getCallback(null, new CollectionItem(kind, data, data.id, apiToken), additionalData, req, res);
			}
			else {
				getCallback(error, data, additionalData, req, res);
			}
		}, params, apiToken);

	};

	this.add = function(params, callback) {
		return addItemHandler(kind, params, callback, apiToken);
	};

	this.remove = function(id, params, callback) {
		return removeItemHandler(id, kind, params, callback, apiToken);
	};

	this.removeMany = function(ids, params, callback) {
		return removeManyItemsHandler(ids, kind, params, callback, apiToken);
	}

	this.update = function(id, params, callback) {
		return editItemHandler(id, kind, params, callback, apiToken);
	};

	if (_.indexOf(mergeableObjects, kind) !== -1) {
		this.merge = function(whichId, withId, callback) {
			return mergeItemHandler(whichId, withId, kind, callback, apiToken);
		}
	}

	if (_.indexOf(searchableObjects, kind) !== -1) {
		this.find = function(params, getAllCallback) {
			return findItemsHandler(kind, params, function(error, data, additionalData, req, res) {
				var collectionItems = wrapCollectionItems(data, kind, apiToken);
				(_.isFunction(params) ? params : getAllCallback)(error, collectionItems, additionalData, req, res);
			}, apiToken);
		};
	}

	if (_.indexOf(timelineableObjects, kind) !== -1) {
		this.getTimeline = function(params, getAllCallback) {
			return timelineItemsHandler(kind, params, function(error, data, additionalData, req, res) {
				(_.isFunction(params) ? params : getAllCallback)(error, data, additionalData, req, res);
			}, apiToken);
		};
	}

	return this;
};

var CollectionItem = function(kind, data, itemId, apiToken, undefinedProperty) {

	this.id = itemId;

	var currentItem = this;

	_.each(data, function(value, key) {
		currentItem[key] = value;
	});

	var changedData = {};

	this.save = function(saveCallback) {
		editItemHandler(data.id, kind, changedData, saveCallback, apiToken);
		changedData = {};
		return currentItem;
	};

	this.remove = function(successCallback) {
		return removeItemHandler(data.id, kind, {}, successCallback, apiToken);
	}

	this.get = function(key) {
		return (!_.isUndefined(data[key]) ? data[key] : undefinedProperty);
	};

	this.merge = function(withId, callback) {
		return mergeItemHandler(data.id, withId, kind, callback, apiToken);
	}

	this.set = function(key, value) {
		if (key === 'id') throw new Error(inflection.capitalize(kind) + ' ID cannot be changed.');
		var changeValue = function(keyToChange, valueToChange) {
			if (typeof data[keyToChange] === typeof valueToChange || (typeof data[keyToChange] !== typeof valueToChange && (_.isNull(data[keyToChange]) || typeof data[keyToChange].value !== 'undefined'))) {
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
	}

	if (_.isObject(apiRelatedObjects[kind])) {
		_.each(apiRelatedObjects[kind], function(relatedObject) {
			currentItem['get' + relatedObject.substr(0,1).toUpperCase() + relatedObject.substr(1)] = function(params, callback) {
				params = (_.isFunction(params) && _.isUndefined(callback) ? {} : params);
				callback = (_.isFunction(params) && _.isUndefined(callback) ? params : callback);
				if (!_.isFunction(callback)) callback = function() {};

				return listItemsHandler(kind + '/' + currentItem.id + '/' + relatedObject, params, function(error, data, additionalData, req, res) {
					var relatedObjectPath = relatedObject;

					if (selfManagedRelatedObjects.indexOf(relatedObject) !== -1) {
						relatedObjectPath = kind + '/' + currentItem.id + '/' + relatedObject;
					}

					var collectionItems = wrapCollectionItems(data, relatedObjectPath, apiToken);
					callback(error, collectionItems, additionalData, req, res);
				}, apiToken);
			};

			if (_.isArray(editableSubItems[kind])) {
				_.each(editableSubItems[kind], function(relatedObject) {
					currentItem['add' + inflection.singularize(relatedObject.substr(0,1).toUpperCase() + relatedObject.substr(1))] = function(params, callback) {
						params = (_.isFunction(params) && _.isUndefined(callback) ? {} : params);
						callback = (_.isFunction(params) && _.isUndefined(callback) ? params : callback);
						if (!_.isFunction(callback)) callback = function() {};

						return addItemHandler(kind + '/' + currentItem.id + '/' + relatedObject, params, function(error, data, additionalData, req, res) {
							var relatedObjectPath = relatedObject;

							if (selfManagedRelatedObjects.indexOf(relatedObject) !== -1) {
								relatedObjectPath = kind + '/' + currentItem.id + '/' + relatedObject;
							}

							var collectionItems = wrapCollectionItems(data, relatedObjectPath, apiToken);
							callback(error, collectionItems, additionalData, req, res);
						}, apiToken);
					};

					currentItem['delete' + inflection.singularize(relatedObject.substr(0,1).toUpperCase() + relatedObject.substr(1))] = function(params, callback) {
						params = (_.isFunction(params) && _.isUndefined(callback) ? {} : params);
						callback = (_.isFunction(params) && _.isUndefined(callback) ? params : callback);
						if (!_.isFunction(callback)) callback = function() {};

						return removeItemHandler(false, kind + '/' + currentItem.id + '/' + relatedObject, params, function(error, data, additionalData, req, res) {
							var relatedObjectPath = relatedObject;

							if (selfManagedRelatedObjects.indexOf(relatedObject) !== -1) {
								relatedObjectPath = kind + '/' + currentItem.id + '/' + relatedObject;
							}

							var collectionItems = wrapCollectionItems(data, relatedObjectPath, apiToken);
							callback(error, collectionItems, additionalData, req, res);
						}, apiToken);
					};
				});
			}
		});
	};

	return currentItem;
};

exports.authenticate = function(auth, callback) {
	return listItemsHandler('authorizations', auth, function(error, data, additionalData) {
		var collectionItems = wrapCollectionItems(data, 'authorizations', false);
		callback(error, collectionItems, additionalData);
	}, false);
};

exports.Client = function(apiToken) {
	if (!apiToken) throw new Error('Could not instantiate Pipedrive API Client - apiToken not given.');

	var that = this;

	_.each(apiObjects, function(item) {
		that[item.substr(0,1).toUpperCase() + item.substr(1)] = new Collection(item, apiToken);
	});

	this.switchToken = function(newToken) {
		var returnVal = false;

		if (_.isString(newToken) && newToken.length > 0) {
			apiToken = newToken;
			returnVal = true;
		}

		return returnVal;
	};

	return this;
}
