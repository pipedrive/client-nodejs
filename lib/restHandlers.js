(function() {
	'use strict';

	var _ = require('lodash'),
		qs = require('qs'),
		apiUrl = require(__dirname + '/apiUrl'),
		log = require(__dirname + '/log'),
		rest = require(__dirname + '/rest');

	function RestHandlers(options) {
		var defaults = {
			apiToken: null
		};

		this.options = _.extend({}, defaults, options || {});

		this.resolveOptions = function (options) {
			options = options || {};
			if(this.options.oauth) {
				options.accessToken = this.options.apiToken;
			}
			return options;
		};

		return this;
	}

	RestHandlers.prototype.genericResponse = function(method, object, responseBody, callback, rawRequest, rawResponse) {
		log('Handling response of ' + method + ' ' + object + ': ' + rawRequest.url.href + (rawRequest.url.href.indexOf(rawRequest.url.query) === -1 ? '?' + rawRequest.url.query : ''));

		if (!_.isFunction(callback)) {
			return;
		}

		var statusCodeGroup = parseInt((rawResponse.statusCode || 0).toString().substr(0, 1), 10),
			responseError = null,
			responseData = {},
			responseRelatedObjects = {},
			responseAdditionalData = {};

		if (_.isString(responseBody)) {
			try {
				responseBody = JSON.parse(responseBody);
			}
			catch (err) {
				responseError = new Error('Malformed Pipedrive API response');
			}
		}

		if (!responseError && responseBody.success === true) {
			responseError = null;
			responseData = responseBody.data;
			responseRelatedObjects = responseBody.related_objects;
			responseAdditionalData = responseBody.additional_data;
		}
		else if (statusCodeGroup === 4 || statusCodeGroup === 5) {
			if (_.isObject(rawResponse._error)) {
				responseError = rawResponse._error;
			}
			else {
				responseError = new Error('Got HTTP response ' + rawResponse.statusCode + ' from Pipedrive API');

				if (responseBody.error) {
					responseError = new Error('Pipedrive API error:' + responseBody.error);
				}
				else {
					try {
						var errorBody = JSON.parse(rawResponse.rawEncoded.toString('utf8'));
						if (!_.isUndefined(errorBody.error)) {
							responseError = new Error('Pipedrive API error:' + errorBody.error);
						}
					}
					catch (err) {
						responseError = new Error('Malformed Pipedrive API response');
					}
				}
			}

			responseData = null;
			responseAdditionalData = null;
			responseRelatedObjects = null;
		}
		else if (responseBody.error) {
			responseError = new Error(responseBody.error);
		}

		callback(responseError, responseData, responseAdditionalData, rawRequest, rawResponse, responseRelatedObjects);
	};

	// GET /items
	RestHandlers.prototype.listItems = function(object, params, callback) {
		var self = this,
			paramsToSupply = _.extend({}, _.isObject(params) ? params : {}, this.options.apiToken && !this.options.oauth ? { api_token: this.options.apiToken } : {}),
			dataObject = object == 'authorizations' ? { multipart: false, data: paramsToSupply } : { query: qs.stringify(paramsToSupply) },
			req = rest[object == 'authorizations' ? 'post' : 'get'](apiUrl(object, this.options, false), this.resolveOptions(dataObject));

		req.on('complete', function(data, res) {
			self.genericResponse('GET', object, data, callback, req, res);
		});

		return req;
	};

	// GET /items/find
	RestHandlers.prototype.findItems = function(object, params, callback) {
		var self = this,
			paramsToSupply = _.extend({}, _.isObject(params) ? params : {}, this.options.apiToken && !this.options.oauth ? { api_token: this.options.apiToken } : {}),
			dataObject = { query: qs.stringify(paramsToSupply) },
			req = rest.get(apiUrl(object + '/find', this.options, false), this.resolveOptions(dataObject));

		req.on('complete', function(data, res) {
			self.genericResponse('GET', object, data, callback, req, res);
		});

		return req;
	};

	// GET /items/timeline
	RestHandlers.prototype.timelineItems = function(object, params, callback) {
		var self = this,
			paramsToSupply = _.extend({}, _.isObject(params) ? params : {}, this.options.apiToken && !this.options.oauth ? { api_token: this.options.apiToken } : {}),
			dataObject = { query: qs.stringify(paramsToSupply) },
			req = rest.get(apiUrl(object + '/timeline', this.options, false), this.resolveOptions(dataObject));

		req.on('complete', function(data, res) {
			self.genericResponse('GET', object, data, callback, req, res);
		});

		return req;
	};

	// GET /searchResults/field
	RestHandlers.prototype.searchFields = function(object, params, callback) {
		var self = this,
			paramsToSupply = _.extend({}, _.isObject(params) ? params : {}, this.options.apiToken && !this.options.oauth ? { api_token: this.options.apiToken } : {}),
			dataObject = { query: qs.stringify(paramsToSupply) },
			req = rest.get(apiUrl(object + '/field', this.options, false), this.resolveOptions(dataObject));

		req.on('complete', function(data, res) {
			self.genericResponse('GET', object, data, callback, req, res);
		});

		return req;
	};

	// GET /items/5
	RestHandlers.prototype.getItem = function(object, id, callback, params) {
		var self = this,
			paramsToSupply = _.extend({}, _.isObject(params) ? params : {}, this.options.apiToken && !this.options.oauth ? { api_token: this.options.apiToken } : {}),
			dataObject = { json: true, query: qs.stringify(paramsToSupply) },
			req = rest.get(apiUrl(object + '/' + id, this.options, false), this.resolveOptions(dataObject));

		req.on('complete', function(data, res) {
			self.genericResponse('GET', object, data, callback, req, res);
		});

		return req;
	};

	// POST /items
	RestHandlers.prototype.addItem = function(object, params, callback) {
		var self = this,
			multipart_objects = ['files'],
			multipart = (_.indexOf(multipart_objects, object) != -1),
			dataObject = { json: true, multipart: multipart, data: params },
			req = rest.post(apiUrl(object, this.options, true), this.resolveOptions(dataObject));

		req.on('complete', function(data, res) {
			self.genericResponse('POST', object, data, callback, req, res);
		});

		return req;
	};

	// PUT /items/5
	RestHandlers.prototype.editItem = function(itemId, object, params, callback) {
		var self = this,
			dataObject = { json: true, multipart: false, data: params },
			req = rest.put(apiUrl(object + '/' + itemId, this.options, true), this.resolveOptions(dataObject));

		req.on('complete', function(data, res) {
			self.genericResponse('PUT', object, data, callback, req, res);
		});

		return req;
	};

	// DELETE /items/5
	RestHandlers.prototype.removeItem = function(itemId, object, params, callback) {
		var self = this,
			dataObject = { json: true, multipart: false, data: (_.isObject(params) && !_.isFunction(params) ? params : { id: itemId }) },
			req = rest.del(apiUrl(itemId ? object + '/' + itemId : object, this.options, true), this.resolveOptions(dataObject));

		req.on('complete', function(data, res) {
			self.genericResponse('DELETE', object, data, (_.isFunction(params) ? params : callback), req, res);
		});

		return req;
	};

	// DELETE /items
	RestHandlers.prototype.removeManyItems = function(itemIds, object, params, callback) {
		var self = this,
			dataObject = { json: true, multipart: false, data: (_.isObject(params) && !_.isFunction(params) ? params : { ids: itemIds }) },
			req = rest.del(apiUrl(object, this.options, true), this.resolveOptions(dataObject));

		req.on('complete', function(data, res) {
			self.genericResponse('DELETE', object, data, (_.isFunction(params) ? params : callback), req, res);
		});

		return req;
	};

	// POST /items/5/merge
	RestHandlers.prototype.mergeItem = function(whichId, withId, object, callback) {
		if (!whichId || !withId) {
			callback(new Error('Illegal IDs given for merge.'), null, null);
			return false;
		}
		var self = this,
			dataObject = { json: true, multipart: false, data: { merge_with_id: withId } },
			req = rest.post(apiUrl(object + '/' + whichId + '/merge', this.options, true), this.resolveOptions(dataObject));

		req.on('complete', function(data, res) {
			self.genericResponse('POST', object, data, callback, req, res);
		});
	};

	// POST /items/5/duplicate
	RestHandlers.prototype.duplicateItem = function(whichId, object, callback) {
		if (!whichId) {
			callback(new Error('item ID not set.'), null, null);
			return false;
		}

		var self = this,
			dataObject = { json: true, multipart: false, data: {} },
			req = rest.post(apiUrl(object + '/' + whichId + '/duplicate', this.options, true), this.resolveOptions(dataObject));

		req.on('complete', function(data, res) {
			self.genericResponse('POST', object, data, callback, req, res);
		});

		return req;
	};

	module.exports = RestHandlers;

})();
