'use strict';

var SockJS = require('sockjs-client-node'),
	fetch = require('fetch'),
	_ = require('lodash');

module.exports = Listener;

function Listener(apiToken) {

	var handlers = {},
		self = this,
		clientStarted = false;
	
	this.startClient = function() {
		if (clientStarted) {
			return;
		}
		clientStarted = true;

		var client = new SockJS("https://channel.pipedrive.com/sockjs");

		client.onopen = function () {
			var options = {
				rejectUnauthorized: false
			};
			fetch.fetchUrl('https://api.pipedrive.com/v1/authorizations/nonce?api_token=' + encodeURIComponent(apiToken), options, function(error, meta, body) {
				var data = {}
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
				var data = {};
				try {
					data = JSON.parse(msg.data);
				}
				catch (e) {
					throw new Error('Malformed JSON received from socket');
				}

				if (data && data.meta && data.meta.v === 1) {
					if (handlers[data.meta.action + '.' + data.meta.object]) {
						_.each(handlers[data.meta.action + '.' + data.meta.object], function(handler) {
							handler(data, data.data);
						});
					}

					if (handlers['*.' + data.meta.object]) {
						_.each(handlers['*.' + data.meta.object], function(handler) {
							handler(data, data.data);
						});
					}

					if (handlers[data.meta.action + '.*']) {
						_.each(handlers[data.meta.action + '.*'], function(handler) {
							handler(data, data.data);
						});
					}
				}

				if (data.rabbitStateChange === 'open') {
					if (handlers['listening']) {
						_.each(handlers['listening'], function(handler) {
							handler();
						});
					}
				}
			}
		};
		client.onclose = function (e) {
			handlers = {};
		};
	}

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
	}

	this.removeAllListeners = function() {
		handlers = {};
	}

}
