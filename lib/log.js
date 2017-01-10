(function() {
	'use strict';

	module.exports = function() {
		if (process.env.PIPEDRIVE_DEBUG) {
			console.log.apply(this, arguments);
		}
	};

})();
