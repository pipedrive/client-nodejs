(function() {
	'use strict';

	var protocol = 'https',
		host = options.apiHost || process.env.PIPEDRIVE_API_HOST || 'api.pipedrive.com',
		version = options.apiVersion || process.env.PIPEDRIVE_API_VERSION || 'v1',
		baseUri = protocol + '://' + host + '/' + version;

	module.exports = function apiUrl(path, apiToken, tokenNeeded) {
		var queryObj = {};
		if (!!tokenNeeded) {
			queryObj.api_token = apiToken;
		}
		if (options.strictMode === true) {
			queryObj.strict_mode = '1';
		}

		return baseUri + '/' + path + (_.keys(queryObj).length > 0 ? '?' + qs.stringify(queryObj) : '');
	};
})();