(function() {
	'use strict';

	var _ = require('lodash'),
		CollectionItem = require(__dirname + '/CollectionItem'),
		RestHandlers = require(__dirname + '/restHandlers'),
		blueprint = require(__dirname + '/blueprint'),
		inflection = require(__dirname + '/inflection');

	module.exports = Collection;

	function Collection(kind, options) {

		var wrapCollectionItems = require(__dirname + '/wrapCollectionItems'),
			restHandlers = new RestHandlers(options);

		this.getAll = function(params, getAllCallback) {
			return restHandlers.listItems(kind, params, function(error, data, additionalData, req, res) {
				var collectionItems = wrapCollectionItems(data, kind, options);
				(_.isFunction(params) ? params : getAllCallback)(error, collectionItems, additionalData, req, res);
			});
		};

		this.get = function(id, getCallback, params) {
			if (!id) {
				throw new Error('Cannot get ' + inflection.singularize(kind) + ' - ID must be given.');
			}

			return restHandlers.getItem(kind, id, function(error, data, additionalData, req, res) {
				if (data !== null && !_.isUndefined(data) && data.id) {
					getCallback(null, new CollectionItem(kind, data, data.id, options), additionalData, req, res);
				}
				else {
					getCallback(error, data, additionalData, req, res);
				}
			}, params);

		};

		this.add = function(params, callback) {
			return restHandlers.addItem(kind, params, callback);
		};

		this.remove = function(id, params, callback) {
			return restHandlers.removeItem(id, kind, params, callback);
		};

		this.removeMany = function(ids, params, callback) {
			return restHandlers.removeManyItems(ids, kind, params, callback);
		};

		this.update = function(id, params, callback) {
			return restHandlers.editItem(id, kind, params, callback);
		};

		if (_.indexOf(blueprint.mergeableObjects, kind) !== -1) {
			this.merge = function(whichId, withId, callback) {
				if (!whichId || !withId) {
					callback(new Error('The parameters whichId and withId must be provided.'));
					return false;
				}
				return restHandlers.mergeItem(whichId, withId, kind, callback);
			};
		}

		if (_.indexOf(blueprint.searchableObjects, kind) !== -1) {
			this.find = function(params, callback) {
				if (!params.term) {
					callback(new Error('The term parameter must be supplied for finding ' + kind + '.'));
					return false;
				}
				return restHandlers.findItems(kind, params, function(error, data, additionalData, req, res) {
					var collectionItems = wrapCollectionItems(data, kind, options);
					callback(error, collectionItems, additionalData, req, res);
				});
			};
		}

		if (_.indexOf(blueprint.timelineableObjects, kind) !== -1) {
			this.getTimeline = function(params, callback) {
				return restHandlers.timelineItems(kind, params, function(error, data, additionalData, req, res) {
					(_.isFunction(params) ? params : callback)(error, data, additionalData, req, res);
				});
			};
		}

		if (_.indexOf(blueprint.objectsSupportingFieldValueSearch, kind) !== -1) {
			this.field = function(params, callback) {
				if (!params.field_type || !params.field_key || !params.term) {
					callback(new Error('The field_type, field_key and term parameters must be supplied for field-value search.'));
					return false;
				}
				if (blueprint.supportedFieldTypes.indexOf(params.field_type) < 0) {
					callback(new Error('The field_type given for field-value search was invalid. Must be one of the following: ' + blueprint.supportedFieldTypes.join(', ')));
					return false;
				}
				params.exact_match = params.exact_match ? '1' : '0';
				return restHandlers.searchFields(kind, params, function(error, data, additionalData, req, res) {
					var collectionItems = wrapCollectionItems(data, inflection.pluralize(params.field_type.replace('Field','').toLowerCase()), options);
					callback(error, collectionItems, additionalData, req, res);
				});
			};
		}

		return this;
	}
})();