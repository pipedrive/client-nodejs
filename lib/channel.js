(function() {
	'use strict';

	var SockJS = require('sockjs-client'),
		fetch = require('fetch'),
		_ = require('lodash');

	module.exports = Channel;

	function Channel(apiToken) {

		var handlers = {},
			self = this,
			client = null,
			clientStarted = false,
			clientClosed = false;
		
		this.startClient = function() {
			if (clientStarted) {
				return;
			}
			clientStarted = true;
			clientClosed = false;

			client = new SockJS((process.env.PIPEDRIVE_API_PROTOCOL || 'https')+'://'+(process.env.PIPEDRIVE_CHANNEL_HOST || 'channel.pipedrive.com')+'/sockjs');

			client.onopen = function () {
				var options = {
					rejectUnauthorized: false
				};
				fetch.fetchUrl((process.env.PIPEDRIVE_API_PROTOCOL || 'https')+'://'+(process.env.PIPEDRIVE_API_HOST || 'api.pipedrive.com')+'/v1/authorizations/nonce?api_token=' + encodeURIComponent(apiToken), options, function(error, meta, body) {
					var data = {};
					try {
						data = JSON.parse(body);
						if (data.data) {
							data = data.data;
						}
					}
					catch (e) {
						throw new Error('Could not parse API response');
					}

					if (data && data.nonce) {
						client.send(JSON.stringify({
								company_id: data.company_id,
								user_id: data.user_id,
								user_name: 'client-nodejs-user',
								host: 'app.pipedrive.com',
								timestamp: Math.round(new Date().getTime() / 1000),
								nonce: data.nonce
						}));
					}
					else {
						throw new Error('Authorization failed');
					}
				});
			};
			client.onmessage = function (msg) {
				if (msg && msg.type === 'message') {
					var data = {},
						eventPatterns = [];

					try {
						data = JSON.parse(msg.data);
					}
					catch (e) {
						throw new Error('Malformed JSON received from socket');
					}

					if (data && data.meta && data.meta.v === 1) {

						eventPatterns = [
							data.meta.object + '.' + data.meta.action,
							'*.' + data.meta.action,
							data.meta.object + '.*',
							'*.*'
						];

						_.each(eventPatterns, function(pattern) {
							if (handlers[pattern]) {
								_.each(handlers[pattern], function(handler) {
									handler(data, data.data);
								});
							}
						});
					}

					if (data.switch_to_channel && data.switch_to_channel.toString().match(/^\d+$/)) {
						process.env.PIPEDRIVE_CHANNEL_HOST = 'channel' + data.switch_to_channel + '.pipedrive.com';
						self.restartClient();
						return;
					}

					if (data.rabbitStateChange === 'open') {
						if (handlers.connect) {
							_.each(handlers.connect, function(handler) {
								handler();
							});
						}
					}
				}
			};
			client.onclose = function (e) {
				clientStarted = false;

				if (!clientClosed) {
					// not closed by user - we have some connection error.
					self.startClient();
					return;
				}

				if (handlers.close) {
					_.each(handlers.close, function(handler) {
						handler(e);
					});
				}
			};
		};

		this.restartClient = function() {
			client.onopen = null;
			client.onmessage = null;
			clientStarted = false;
			clientClosed = false;
			client.close();
		};

		this.on = function(method, handler) {
			if (!clientStarted) {
				self.startClient();
			}
			handlers[method] = handlers[method] || [];
			handlers[method].push(handler);
		};

		this.removeListener = function(method, handler) {
			var index = handlers[method].indexOf(handler);
			if (index > -1) {
				handlers[method].splice(index, 1);
			}
			if (!_.keys(handlers).length) {
				this.removeAllListeners();
			}
		};

		this.removeAllListeners = function() {
			handlers = {};
			clientClosed = true;

			if (client && client.close) {
				client.close();
			}
		};
	}
})();