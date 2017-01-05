(function() {
	'use strict';

	var _ = require('lodash'),
		qs = require('qs'),
		protocol = 'https',
		host = process.env.PIPEDRIVE_API_HOST || 'api.pipedrive.com',
		version = process.env.PIPEDRIVE_API_VERSION || 'v1',
		baseUri = protocol + '://' + host + '/' + version;

	module.exports = function apiUrl(path, options, tokenNeeded) {
		var queryObj = {};
		if (tokenNeeded) {
			queryObj.api_token = options.apiToken;
		}
		if (options.strictMode === true) {
			queryObj.strict_mode = '1';
		}

		return baseUri + '/' + path + (_.keys(queryObj).length > 0 ? '?' + qs.stringify(queryObj) : '');
	};
})();