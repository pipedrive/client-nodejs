/*!
 * Pipedrive REST API v1 client for Node.js based apps.
 * Published under 'pipedrive' in npm.
 *
 * Copyright (C) 2013-2016 by Pipedrive, Inc.
 * (MIT License)
*/

(function () {
	'use strict';

	var _ = require('lodash'),
		blueprint = require(__dirname + '/blueprint'),
		Collection = require(__dirname + '/Collection');

	exports.Client = Client;

	function Client(apiToken, options) {
		if (!apiToken) {
			throw new Error('Could not instantiate Pipedrive API Client - apiToken not given.');
		}

		var defaults = {
			strictMode: false,
			oauth: false,
		};

		options = _.extend({}, defaults, options);
		options.strictMode = !!options.strictMode;

		var that = this;

		_.each(blueprint.apiObjects, function (item) {
			that[item.substr(0, 1).toUpperCase() + item.substr(1)] = new Collection(item, _.extend({}, options, {apiToken: apiToken}));
		});

		return this;
	}

	Client.prototype.getAll = function (resource, params, callback) {
		// params was added later so ensure backwards compatibility
		if (_.isFunction(params) && _.isUndefined(callback)) {
			callback = params;
			params = {};
		}

		if (!this[resource]) {
			return callback(new Error(resource + ' is not supported object type for getAll()'));
		}

		var collection = [],
			self = this,
			page = 0,
			perPage = 50;

		function fetch(page) {
			var start = page * perPage,
				pageParams = _.extend({}, params, {
					start: start,
					limit: perPage
				});

			self[resource].getAll(pageParams, function (err, models) {
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
