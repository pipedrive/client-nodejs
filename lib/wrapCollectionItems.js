(function() {
	'use strict';

	var CollectionItem = require(__dirname + '/CollectionItem'),
		_ = require('lodash');

	module.exports = function wrapCollectionItems(data, kind, options) {

		var collectionItems = [];

		var doWrap = function(item) {
			var itemId = item.id || false;

			if (kind.indexOf('/') > -1) {
				// We must look at the kind of a nested object by looking at the type of subitem only, thus:
				var subitemKind = kind.split('/').pop() || '';

				// We handle follower objects which are represented in the API by mere user IDs without much wrapping.
				// However wrapping is required from a collectionItem standpoint, thus we should wrap it locally
				// until it is not handled by the API yet.
				if (subitemKind === 'followers' && !itemId) {
					itemId = item;
					item = { user_id: item };
				}
			}

			// We handle authorization objects which do not have IDs - so we'll use api_tokens instead.
			if (kind === 'authorizations') {
				itemId = item.api_token;
			}

			collectionItems.push(new CollectionItem(kind, item, itemId, options)); /* authorization objects do not have ID, they use api_token as key. */
		};

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
})();
