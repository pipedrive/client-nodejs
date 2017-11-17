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
			var method = restHandlers.listItems;
			if (!_.isFunction(params) && !_.isFunction(getAllCallback)) {
				return new Promise(function(resolve, reject) {
					asPromise(method, [kind, params, null]).then(function (data) {
						resolve(wrapCollectionItems(data, kind, options));
					}, function (err) {
						reject(err);
					});
				});
			}

			return method.apply(restHandlers, [kind, params, function(error, data, additionalData, req, res) {
				var collectionItems = wrapCollectionItems(data, kind, options);
				(_.isFunction(params) ? params : getAllCallback)(error, collectionItems, additionalData, req, res);
			}]);
		};

		this.get = function(id, callback) {
			if (!id) {
				throw new Error('Cannot get ' + inflection.singularize(kind) + ' - ID must be given.');
			}

			var method = restHandlers.getItem;
			return (!_.isFunction(callback)) ? asPromise(method, [kind, id, null]) : method.apply(restHandlers, [kind, id, callback]);
		};

		this.add = function(params, callback) {
			var method = restHandlers.addItem;
			return (!_.isFunction(callback)) ? asPromise(method, [kind, params, null]) : method.apply(restHandlers, [kind, params, callback]);
		};

		this.remove = function(id, params, callback) {
			var method = restHandlers.removeItem;
			return (!_.isFunction(callback)) ? asPromise(method, [id, kind, params, null]) : method.apply(restHandlers, [id, kind, params, callback]);
		};

		this.removeMany = function(ids, params, callback) {
			var method = restHandlers.removeManyItems;
			return (!_.isFunction(callback)) ? asPromise(method, [ids, kind, params, null]) : method.apply(restHandlers, [ids, kind, params, callback]);
		};

		this.update = function(id, params, callback) {
			var method = restHandlers.editItem;
			return (!_.isFunction(callback)) ? asPromise(method, [id, kind, params, null]) : method.apply(restHandlers, [id, kind, params, callback]);
		};

		if (_.indexOf(blueprint.mergeableObjects, kind) !== -1) {
			this.merge = function(whichId, withId, callback) {
				if (!whichId || !withId) {
					callback(new Error('The parameters whichId and withId must be provided.'));
					return false;
				}
				var method = restHandlers.mergeItem;
				return (!_.isFunction(callback)) ? asPromise(method, [whichId, withId, kind, null]) : method.apply(restHandlers, [whichId, withId, kind, callback]);
			};
		}

		if (_.indexOf(blueprint.searchableObjects, kind) !== -1) {
			this.find = function(params, callback) {
				if (!params.term) {
					callback(new Error('The term parameter must be supplied for finding ' + kind + '.'));
					return false;
				}

				var method = restHandlers.findItems;
				if (!_.isFunction(callback)) {
					return new Promise(function(resolve, reject) {
						asPromise(method, [kind, params, null]).then(function (data) {
							var collectionItems = wrapCollectionItems(data, kind, options);
							resolve(collectionItems);
						}).catch(function(err) {
							reject(err);
						});
					});
				}
				return method.apply(restHandlers, [kind, params, function (error, data, additionalData, req, res) {
					var collectionItems = wrapCollectionItems(data, kind, options);
					callback(error, collectionItems, additionalData, req, res);
				}]);
			};
		}

		if (_.indexOf(blueprint.timelineableObjects, kind) !== -1) {
			this.getTimeline = function(params, callback) {
				var method = restHandlers.timelineItems;
				return (!_.isFunction(callback)) ? asPromise(method, [kind, params, null]) : method.apply(restHandlers, [kind, params, callback]);
			};
		}

		if (_.indexOf(blueprint.objectsSupportingFieldValueSearch, kind) !== -1) {
			this.field = function(params, callback) {
				var method = restHandlers.searchFields;
				var wrap = function(_data, _params, _options) { return wrapCollectionItems(_data, inflection.pluralize(_params.field_type.replace('Field','').toLowerCase()), _options); };

				if (!params.field_type || !params.field_key || !params.term) {
					callback(new Error('The field_type, field_key and term parameters must be supplied for field-value search.'));
					return false;
				}
				if (blueprint.supportedFieldTypes.indexOf(params.field_type) < 0) {
					callback(new Error('The field_type given for field-value search was invalid. Must be one of the following: ' + blueprint.supportedFieldTypes.join(', ')));
					return false;
				}
				params.exact_match = params.exact_match ? '1' : '0';
				if (!_.isFunction(callback)) {
					return new Promise(function(resolve, reject) {
						asPromise(method, [kind, params, null]).then(function (data) {
							resolve(wrap(data));
						}).catch(function (err) {
							reject(err);
						});
					});
				}

				return method.apply(restHandlers, [kind, params, function(error, data, additionalData, req, res) {
					var collectionItems = wrapCollectionItems(data, inflection.pluralize(params.field_type.replace('Field','').toLowerCase()), options);
					callback(error, collectionItems, additionalData, req, res);
				}]);
			};
		}

		function asPromise(method, args) {
			return new Promise(function (resolve, reject) {
				args[args.length - 1] = function (err, data) {
					if (!err && data !== null) {
						resolve(data);
					} else {
						reject(err);
					}
				};
				method.apply(restHandlers, args);
			});
		}

		return this;
	}
})();