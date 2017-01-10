(function() {
	'use strict';

	var instanceHash = require('crypto').createHash('sha1').update(__dirname || '').digest('hex'),
		os = require('os'),
		bundle = require(__dirname + '/../package.json');

	module.exports = 'pipedrive-client-nodejs/' + bundle.version + ' (' + os.type() + ', ' + os.platform() + '/' + os.release() + ' , /' + instanceHash + ')';

})();
