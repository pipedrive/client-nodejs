var fetchUrl = require('fetch').fetchUrl,
	qs = require('qs'),
	util = require('util'),
	EventEmitter= require('events').EventEmitter,
	urllib = require('url'),
	_ = require('lodash'),
	mime = require('mime'),
	fs = require('fs'),
	async = require('async');

module.exports = {
	get: request.bind(this, 'GET'),
	post: request.bind(this, 'POST'),
	put: request.bind(this, 'PUT'),
	del: request.bind(this, 'DELETE')
};

var q = async.queue(function(task, callback) {
	fetchUrl(task.url, task.requestOptions, callback);
}, 5);

var debug = !!process.env.PIPEDRIVE_DEBUG;

var log = function() {
	if (debug) {
		console.log.apply(this, arguments);
	}
};

function request(method, url, options){
	return new Request(method, url, options);
}

function Request(method, url, options){
	EventEmitter.call(this);

	var query,
		payload,
		headers = {},
		requestOptions;

	this.options = options || {};
	this.options.method = this.options.method || method || 'GET';

	if(this.options.query){
		query = typeof this.options.query == 'string' ? this.options.query : qs.stringify(this.options.query);
		url += (url.match(/\?/) ? '&' : '?') + query;
	}

	// 'url' object is needed to mock original restler, not used
	this.url = urllib.parse(url);
	var boundary = 'JWBBV0Q07j8njeiL';

	if(this.options.multipart){
		headers['content-type'] = 'multipart/form-data; boundary='+boundary;
		payload = '';

		_.each(this.options.data, function(value, inputName){
			payload += '--'+boundary+'\r\n'+
			'Content-Disposition: form-data;';
			if(inputName == 'file_path' && fs.existsSync(value)) {
				var parts = value.split(/\/|\\/);
				var fileName = parts[parts.length - 1];

				payload += 'name="file"; filename="'+fileName.replace(/"/g, '\"')+'"\r\n';
				payload += 'Content-Type: '+mime.lookup(value);

				value = fs.readFileSync(value);
			} else {
				payload += ' name="'+inputName.replace(/"/g, '\"')+'"';
			}

			payload += '\r\n\r\n'+value+'\r\n';
		});
		payload += '--'+boundary+'--';

	} else {
		if(this.options.data){
			if(typeof this.options.data == 'string'){
				payload = new Buffer(this.options.data, this.options.encoding || 'utf-8');
			}else if(this.options.json){
				payload = JSON.stringify(this.options.data);
			}else{
				payload = qs.stringify(this.options.data);
			}
			headers['content-type'] = this.options.json ? 'application/json' : 'application/x-www-form-urlencoded';
		}
	}

	requestOptions = {
		method: method,
		maxResponseLength: 10 * 1024 * 1024,
		payload: payload,
		headers: headers,
		disableDecoding: true,
		userAgent: 'Pipedrive API (+https://www.pipedrive.com/)',
		agent: false,
		asyncDnsLoookup: process.env.PIPEDRIVE_API_DNS_LOOKUP == '1' ? true : false,
		timeout: 10 * 1000,
		rejectUnauthorized: process.env.PIPEDRIVE_API_HOST == 'api.pipedrive.com' ? true : false
	};

	log('Performing API request: ' + JSON.stringify(_.extend(requestOptions, { url: url }), null, 4));

	q.push({ url: url, requestOptions: requestOptions }, (function(err, meta, body) {
		// 'response' object and response.req are needed to mock original restler
		this.response = {
			statusCode: meta && meta.status || 500,
			rawEncoded: body,
			req: this.options,
			_error: err
		};

		log('Handling API response: ' + JSON.stringify(_.extend(_.omit(this.response, ['rawEncoded']), { req: { url: url, method: method }, body: body && body.toString() || '' }), null, 4));

		return this.emit('complete', body && body.toString() || '', this.response);
	}).bind(this));
}

util.inherits(Request, EventEmitter);

