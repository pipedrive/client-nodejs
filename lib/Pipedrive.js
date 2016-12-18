/*!
 * Pipedrive REST API v1 client for Node.js based apps.
 * Published under 'pipedrive' in npm.
 *
 * Copyright (C) 2013-2016 by Pipedrive, Inc.
 * (MIT License)
*/

(function() {
	'use strict';

	var _ = require('lodash'),
		blueprint = require(__dirname + '/blueprint'),
		inflection = require(__dirname + '/inflection'),
		Channel = require(__dirname + '/channel'),
		log = require(__dirname + '/log'),
		RestHandlers = require(__dirname + '/restHandlers'),
		Collection = require(__dirname + '/Collection'),
		CollectionItem = require(__dirname + '/CollectionItem'),
		wrapCollectionItems = require(__dirname + '/wrapCollectionItems');

	exports.authenticate = function(auth, callback) {
		var client = new exports.Client('unauthorized-client-nodejs'),
			restHandlers = new RestHandlers();

		return restHandlers.listItems('authorizations', auth, function(error, data, additionalData) {
			var collectionItems = wrapCollectionItems(data, 'authorizations', {});
			callback(error, collectionItems, additionalData);
		}, false);
	};

	exports.Client = Client;

	function Client(apiToken, options) {
		if (!apiToken) {
			throw new Error('Could not instantiate Pipedrive API Client - apiToken not given.');
		}

		var defaults = {
			strictMode: false,
			apiHost: null,
			apiVersion: null
		};

		options = _.extend({}, defaults, options);
		options.strictMode = !!options.strictMode;

		var that = this,
			listener = new Channel(apiToken);

		if (options.strictMode) {
			// in strict mode, we'll expose the EventEmitter-like real-time integration methods
			this.on = listener.on;
			this.removeListener = listener.removeListener;
			this.removeAllListeners = listener.removeAllListeners;
		}

		_.each(blueprint.apiObjects, function(item) {
			that[item.substr(0,1).toUpperCase() + item.substr(1)] = new Collection(item, _.extend({}, options, {apiToken: apiToken}));
		});

		return this;
	}

	Client.prototype.getAll = function(resource, params, callback) {
		// params was added later so ensure backwards compatibility
		if (_.isFunction(params) && _.isUndefined(callback)) {
			callback = params;
			params = {};
		}

		var collection = [],
			self = this,
			page = 0,
			perPage = 50;

		function fetch(page) {
			var start = page * perPage;
			if (!self[resource]) {
				throw new Error(resource+' is not supported object type for getAll()');
			}
			var pageParams = _.extend({}, params, {
				start: start,
				limit: perPage
			});
			if (!self[resource]) {
				throw new Error(resource+' is not supported object type for getAll()');
			}
			self[resource].getAll(params, function(err, models) {
				if (err) {
					callback(err);
				} else {
					collection = collection.concat(models);
					if (models.length < perPage) {
						// when out of resources, callback with them
						return callback(null, collection);
					}
				}
				fetch.call(self, ++page);
			});
		}

		fetch.call(this, page);
	};
})();