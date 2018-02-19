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

			var options = {
				rejectUnauthorized: false
			};

			clientStarted = true;
			clientClosed = false;

			// Fetch information about currently authenticated user
			fetch.fetchUrl('https://'+(process.env.PIPEDRIVE_API_HOST || 'api.pipedrive.com')+'/v1/users/self?api_token=' + encodeURIComponent(apiToken), options, function(error, meta, body) {
				if (error) throw error;

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

				if (!data || !data.companies || !data.company_id || !data.companies[data.company_id] || !data.companies[data.company_id].domain) {
					throw new Error('Could not determine current authenticated company');
				}

				// Determine company-specific websocket connection info URL
				var websocketDataUrl = 'https://' + data.companies[data.company_id].domain + '.pipedrive.com/ws-connection-info?api_token=' + encodeURIComponent(apiToken);

				// Fetch websocket connection info
				fetch.fetchUrl(websocketDataUrl, options, function(wsError, wsMeta, wsBody) {
					if (wsError) throw wsError;

					var wsData = {};
					try {
						wsData = JSON.parse(wsBody);
					}
					catch (e) {
						throw new Error('Could not parse WebSocket connection info response');
					}

					// Construct websocket endpoint URL and generate the SockJS connection
					var socketUrl = 'https://' + [
						wsData.subdomain + wsData.channel,
						(wsData.isLocal ? 'local' : wsData.region),
						wsData.domain
					].join('.') + '/sockjs';

					client = new SockJS(socketUrl);

					client.onopen = function () {
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
				});
			});
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