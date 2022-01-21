/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import superagent from "superagent";
import querystring from "querystring";
import snakecase from "lodash/snakecase";
import UnauthorizedException from "./exceptions/UnauthorizedException";
import OAuthProviderException from "./exceptions/OAuthProviderException";
import NotFoundException from "./exceptions/NotFoundException";
import FailResponseException from "./exceptions/FailResponseException";

/**
* @module ApiClient
* @version 1.0.0
*/

/**
* Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
* application to use this class directly - the *Api and model classes provide the public API for the service. The
* contents of this file should be regarded as internal but are documented for completeness.
* @alias module:ApiClient
* @class
*/
class ApiClient {
    constructor() {
        /**
         * The base URL against which to resolve every API call's (relative) path.
         * @type {String}
         * @default https://api.pipedrive.com/v1
         */
        this.basePath = 'https://api.pipedrive.com/v1'.replace(/\/+$/, '');

        /**
         * The authentication methods to be included for all API calls.
         * @type {Object}
         */
        this.authentications = {
            'api_key': {
                type: 'apiKey',
                in: 'query',
                name: 'api_token',
                apiKey: ''
            },
            'oauth2': {
                type: 'oauth2',
                host: 'https://oauth.pipedrive.com',
                accessToken: '',
                refreshToken: '',
                // The access token expiration value in seconds sent by the oauth server.
                expiresIn: 0,
                // The access token expiration time as number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
                expiresAt: 0,
                scope: '',
                clientId: '',
                clientSecret: '',
                redirectUri: '',
                tokenUpdateCallback: null
            }
        }

        /**
         * The default HTTP headers to be included for all API calls.
         * @type {Object}
         * @default {}
         */
        this.defaultHeaders = {
            'User-Agent': this.getUserAgent()
        };

        /**
         * The default HTTP timeout for all API calls.
         * @type {Number}
         * @default 60000
         */
        this.timeout = 60000;

        /**
         * If set to false an additional timestamp parameter is added to all API GET calls to
         * prevent browser caching
         * @type {Boolean}
         * @default true
         */
        this.cache = true;

        /**
         * If set to true, the client will save the cookies from each server
         * response, and return them in the next request.
         * @default false
         */
        this.enableCookies = false;

        /*
         * Used to save and return cookies in a node.js (non-browser) setting,
         * if this.enableCookies is set to true.
         */
        if (typeof window === 'undefined') {
            this.agent = new superagent.agent();
        }

        /*
         * Allow user to override superagent agent
         */
         this.requestAgent = null;

        /*
         * Allow user to add superagent plugins
         */
        this.plugins = null;

    }

    /**
    * Returns a string representation for an actual parameter.
    * @param param The actual parameter.
    * @returns {String} The string representation of <code>param</code>.
    */
    paramToString(param) {
        if (param == undefined || param == null) {
            return '';
        }
        if (param instanceof Date) {
            return param.toJSON();
        }
        if (ApiClient.canBeJsonified(param)) {
            return JSON.stringify(param);
        }

        return param.toString();
    }

    /**
    * Returns a boolean indicating if the parameter could be JSON.stringified
    * @param param The actual parameter
    * @returns {Boolean} Flag indicating if <code>param</code> can be JSON.stringified
    */
    static canBeJsonified(str) {
        if (typeof str !== 'string' && typeof str !== 'object') return false;
        try {
            const type = str.toString();
            return type === '[object Object]'
                || type === '[object Array]';
        } catch (err) {
            return false;
        }
    };

   /**
    * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
    * NOTE: query parameters are not handled here.
    * @param {String} path The path to append to the base URL.
    * @param {Object} pathParams The parameter values to append.
    * @param {String} apiBasePath Base path defined in the path, operation level to override the default one
    * @returns {String} The encoded path with parameter values substituted.
    */
    buildUrl(path, pathParams, apiBasePath) {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }

        var url = this.basePath + path;

        // use API (operation, path) base path if defined
        if (apiBasePath !== null && apiBasePath !== undefined) {
            url = apiBasePath + path;
        }

        url = url.replace(/\{([\w-]+)\}/g, (fullMatch, key) => {
            var value;
            if (pathParams.hasOwnProperty(key)) {
                value = this.paramToString(pathParams[key]);
            } else {
                value = fullMatch;
            }

            return encodeURIComponent(value);
        });

        return url;
    }

    /**
    * Checks whether the given content type represents JSON.<br>
    * JSON content type examples:<br>
    * <ul>
    * <li>application/json</li>
    * <li>application/json; charset=UTF8</li>
    * <li>APPLICATION/JSON</li>
    * </ul>
    * @param {String} contentType The MIME content type to check.
    * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
    */
    isJsonMime(contentType) {
        return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
    }

    /**
    * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
    * @param {Array.<String>} contentTypes
    * @returns {String} The chosen content type, preferring JSON.
    */
    jsonPreferredMime(contentTypes) {
        for (var i = 0; i < contentTypes.length; i++) {
            if (this.isJsonMime(contentTypes[i])) {
                return contentTypes[i];
            }
        }

        return contentTypes[0];
    }

    /**
    * Checks whether the given parameter value represents file-like content.
    * @param param The parameter to check.
    * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
    */
    isFileParam(param) {
        // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
        if (typeof require === 'function') {
            let fs;
            try {
                fs = require('fs');
            } catch (err) {}
            if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
                return true;
            }
        }

        // Buffer in Node.js
        if (typeof Buffer === 'function' && param instanceof Buffer) {
            return true;
        }

        // Blob in browser
        if (typeof Blob === 'function' && param instanceof Blob) {
            return true;
        }

        // File in browser (it seems File object is also instance of Blob, but keep this for safe)
        if (typeof File === 'function' && param instanceof File) {
            return true;
        }

        return false;
    }

    /**
    * Normalizes parameter values:
    * <ul>
    * <li>remove nils</li>
    * <li>keep files and arrays</li>
    * <li>format to string with `paramToString` for other cases</li>
    * </ul>
    * @param {Object.<String, Object>} params The parameters as object properties.
    * @returns {Object.<String, Object>} normalized parameters.
    */
    normalizeParams(params) {
        var newParams = {};
        for (var key in params) {
            if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
                var value = params[key];
                if (this.isFileParam(value) || Array.isArray(value)) {
                    newParams[key] = value;
                } else {
                    newParams[key] = this.paramToString(value);
                }
            }
        }

        return newParams;
    }

    /**
    * Builds a string representation of an array-type actual parameter, according to the given collection format.
    * @param {Array} param An array parameter.
    * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
    * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
    * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
    */
    buildCollectionParam(param, collectionFormat) {
        if (param == null) {
            return null;
        }
        switch (collectionFormat) {
            case 'csv':
                return param.map(this.paramToString).join(',');
            case 'ssv':
                return param.map(this.paramToString).join(' ');
            case 'tsv':
                return param.map(this.paramToString).join('\t');
            case 'pipes':
                return param.map(this.paramToString).join('|');
            case 'multi':
                //return the array directly as SuperAgent will handle it as expected
                return param.map(this.paramToString);
            default:
                throw new Error('Unknown collection format: ' + collectionFormat);
        }
    }

    /**
    * Applies authentication headers to the request.
    * @param {Object} request The request object created by a <code>superagent()</code> call.
    * @param {Array.<String>} authNames An array of authentication method names.
    */
    applyAuthToRequest(request, authNames) {
        authNames.forEach((authName) => {
            var auth = this.authentications[authName];
            switch (auth.type) {
                case 'basic':
                    if (auth.username || auth.password) {
                        request.auth(auth.username || '', auth.password || '');
                    }

                    break;
                case 'bearer':
                    if (auth.accessToken) {
                        request.set({'Authorization': 'Bearer ' + auth.accessToken});
                    }

                    break;
                case 'apiKey':
                    if (auth.apiKey) {
                        var data = {};
                        if (auth.apiKeyPrefix) {
                            data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
                        } else {
                            data[auth.name] = auth.apiKey;
                        }

                        if (auth['in'] === 'header') {
                            request.set(data);
                        } else {
                            request.query(data);
                        }
                    }

                    break;
                case 'oauth2':
                    if (auth.accessToken) {
                        request.set({'Authorization': 'Bearer ' + auth.accessToken});
                    }

                    break;
                default:
                    throw new Error('Unknown authentication type: ' + auth.type);
            }
        });
    }

   /**
    * Deserializes an HTTP response body into a value of the specified type.
    * @param {Object} response A SuperAgent response object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns A value of the specified type.
    */
    deserialize(response, returnType) {
        if (response == null || returnType == null || response.status == 204) {
            return null;
        }

        // Rely on SuperAgent for parsing response body.
        // See http://visionmedia.github.io/superagent/#parsing-response-bodies
        var data = response.body;
        if (data == null || (typeof data === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length)) {
            // SuperAgent does not always produce a body; use the unparsed response as a fallback
            data = response.text;
        }

        return ApiClient.convertToType(data, returnType);
    }

   /**
    * Invokes the REST service using the supplied settings and parameters.
    * @param {String} path The base URL to invoke.
    * @param {String} httpMethod The HTTP method to use.
    * @param {Object.<String, String>} pathParams A map of path parameters and their values.
    * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
    * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
    * @param {Object.<String, Object>} formParams A map of form parameters and their values.
    * @param {Object} bodyParam The value to pass as the request body.
    * @param {Array.<String>} authNames An array of authentication type names.
    * @param {Array.<String>} contentTypes An array of request MIME types.
    * @param {Array.<String>} accepts An array of acceptable response MIME types.
    * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
    * constructor for a complex type.
    * @param {String} apiBasePath base path defined in the operation/path level to override the default one
    * @param {Boolean} secondRequest Indicates whether this api call is done for the first or second time (this can happen after automatic access token refresh).
    * @returns {Promise} A {@link https://www.promisejs.org/|Promise} object.
    */
    async callApi(path, httpMethod, pathParams,
        queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
        returnType, apiBasePath, secondRequest = false) {

        var url = this.buildUrl(path, pathParams, apiBasePath);
        var request = superagent(httpMethod, url);

        if (this.plugins !== null) {
            for (var index in this.plugins) {
                if (this.plugins.hasOwnProperty(index)) {
                    request.use(this.plugins[index])
                }
            }
        }

        // apply authentications
        this.applyAuthToRequest(request, authNames);

        // set query parameters
        if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
            queryParams['_'] = new Date().getTime();
        }

        request.query(this.normalizeParams(queryParams));

        // set header parameters
        request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

        // set requestAgent if it is set by user
        if (this.requestAgent) {
            request.agent(this.requestAgent);
        }

        // set request timeout
        request.timeout(this.timeout);

        var contentType = this.jsonPreferredMime(contentTypes);
        if (contentType) {
            // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
            if (contentType !== 'multipart/form-data') {
                request.type(contentType);
            }
        }

        if (contentType === 'application/x-www-form-urlencoded') {
            request.send(querystring.stringify(this.normalizeParams(formParams)));
        } else if (contentType === 'multipart/form-data') {
            var _formParams = this.normalizeParams(formParams);
            for (var key in _formParams) {
                if (_formParams.hasOwnProperty(key)) {
                    if (key === 'file' || this.isFileParam(_formParams[key])) {
                        // file field
                        request.attach(key, _formParams[key]);
                    } else {
                        request.field(key, _formParams[key]);
                    }
                }
            }
        } else if (bodyParam !== null && bodyParam !== undefined) {
            if (!request.header['Content-Type']) {
                request.type('application/json');
            }

            const normalizeBodyParams = this.replaceCamelCaseObj(bodyParam)

            request.send(normalizeBodyParams);
        }

        var accept = this.jsonPreferredMime(accepts);
        if (accept) {
            request.accept(accept);
        }

        if (returnType === 'Blob') {
            request.responseType('blob');
        } else if (returnType === 'String') {
            request.responseType('string');
        }

        // Attach previously saved cookies, if enabled
        if (this.enableCookies){
            if (typeof window === 'undefined') {
                this.agent._attachCookies(request);
            } else {
                request.withCredentials();
            }
        }

        if (this.shouldRefreshToken()) {
            await this.refreshToken();
        }

        let response;

        try {
            response = await request;
        } catch (error) {
            const shouldRefreshTokenAndRetry = !!(
                !this.isApiTokenSet() &&
                !secondRequest &&
                error.status === 401 &&
                this.isOauth2Supported()
            );

            if (shouldRefreshTokenAndRetry) {
                await this.refreshToken();

                return await this.callApi(path, httpMethod, pathParams,
                    queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
                    returnType, apiBasePath, true);
            }

            if (error.status === 401) {
                let exception = new UnauthorizedException();

                if (error.response.body.error_info) {
                    exception.errorInfo = error.response.body.error_info;
                }

                exception.context = error.response;

                throw exception;
            }

            if (error.status === 404) {
                let exception = new NotFoundException();

                if (error.response.body.error_info) {
                    exception.errorInfo = error.response.body.error_info;
                }

                exception.context = error.response;

                throw exception;
            }

            let exception = new FailResponseException();            
            let exceptionMessage = (error.response && error.response.res.statusMessage) || error.message;

            exception.message = exceptionMessage;
            exception.errorCode = error.status;

            if (error.response && error.response.body.error_info) {
                exception.errorInfo = error.response.body.error_info;
            }

            exception.context = error.response;

            throw exception;
        }

        const data = this.deserialize(response, returnType);
        if (this.enableCookies && typeof window === 'undefined'){
            this.agent._saveCookies(response);
        }

        return data;
    }
    /**
    * Converts CamelCase attributes of an object to snake_case and returns it
    */
    replaceCamelCaseObj(obj) {
        const snakeCased = {};

        for (const key in obj) {
            let keyValue = obj[key];
            const isArray = Array.isArray(keyValue);
            const isObject = typeof keyValue === 'object' && !isArray;
            if (isArray) keyValue = keyValue.map(kv => typeof kv === 'object' ? replaceCamelCaseObj(kv) : kv);
            snakeCased[snakecase(key)] = isObject ? replaceCamelCaseObj(keyValue) : keyValue;
        }

        return snakeCased
    }

    /**
    * Checks whether the API supports oauth2 type authorization.
    * @returns {Boolean} Whether oauth2 type authorization is supported by the API.
    */
    isOauth2Supported() {
        return !!(this.authentications && this.authentications.oauth2);
    }

    /**
    * Checks whether the API token is set for the API calls.
    * @returns {Boolean} Whether API token is set for authorization.
    */
    isApiTokenSet() {
        return !!(
            this.authentications &&
            this.authentications.api_key &&
            this.authentications.api_key.apiKey
        );
    }

    /**
    * Checks whether the oauth2 type authorizations is set for the API calls and if the access token is expired.
    * @returns {Boolean} Whether the OAuth access token is expired.
    */
    shouldRefreshToken() {
        return (
            !this.isApiTokenSet() &&
            this.isOauth2Supported() &&
            !!this.authentications.oauth2.expiresAt &&
            Date.now() > this.authentications.oauth2.expiresAt
        );
    }

    /**
    * Checks if the given property is set in the this.authentications.oauth2 object.
    * Error is thrown if the property is not set.
    * @param {String} property The OAuth 2 property to receive.
    * @returns The value of the given property.
    */
    getOAuth2Property(property) {
        const value = this.authentications.oauth2[property];

        if (!value) {
            throw new Error(`OAuth 2 property ${property} is not set.`);
        }

        return value;
    }

    /**
    * Creates the url for authorizing the client.
    * @returns {String} The authorization url.
    */
    buildAuthorizationUrl() {
        if (!this.isOauth2Supported()) {
            throw new Error('Could not create authorization url. OAuth 2 is not supported.');
        }

        const host = this.getOAuth2Property('host');
        const clientId = this.getOAuth2Property('clientId');
        const redirectUri = this.getOAuth2Property('redirectUri');

        return `${host}/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    }

    /**
    * Authorizes the authorization code sent by the server and returns OAuth 2 token.
    * @param {String} code The authorization code sent by the oauth server.
    * @returns {Object} The OAuth 2 token.
    */
    async authorize(code) {
        if (!this.isOauth2Supported()) {
            throw new Error('Could not authorize the client. OAuth 2 is not supported.');
        }

        if (!code) {
            throw new Error('Authorization failed. Authorization code is not set.');
        }

        const clientId = this.getOAuth2Property('clientId');
        const clientSecret = this.getOAuth2Property('clientSecret');
        const redirectUri = this.getOAuth2Property('redirectUri');
        const host = this.getOAuth2Property('host');
        const authorizationUrl = `${host}/oauth/token`;
        const clientIdAndSecretInBase64 = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

        try {
            const response = await superagent
                .post(authorizationUrl)
                .set('User-Agent', this.getUserAgent())
                .set('Authorization', `Basic ${clientIdAndSecretInBase64}`)
                .send(`code=${code}`)
                .send(`redirect_uri=${redirectUri}`)
                .send('grant_type=authorization_code')

            this.updateToken(response.body);

            return response.body;
        } catch (error) {
            let exception = new OAuthProviderException();

            exception.message = error.response.res.statusMessage;
            exception.errorCode = error.status;
            exception.context = error.response;

            throw exception;
        }
    }

    /**
    * Refreshes the OAuth 2 access token.
    * @returns {Object} The OAuth 2 token.
    */
    async refreshToken() {
        if (!this.isOauth2Supported()) {
            throw new Error('Could not refresh the token. OAuth 2 is not supported.');
        }

        const refreshToken = this.getOAuth2Property('refreshToken');
        const clientId = this.getOAuth2Property('clientId');
        const clientSecret = this.getOAuth2Property('clientSecret');
        const host = this.getOAuth2Property('host');
        const refreshUrl = `${host}/oauth/token`;
        const clientIdAndSecretInBase64 = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

        try {
            const response = await superagent
                .post(refreshUrl)
                .set('User-Agent', this.getUserAgent())
                .set('Authorization', `Basic ${clientIdAndSecretInBase64}`)
                .send(`refresh_token=${refreshToken}`)
                .send('grant_type=refresh_token');

            this.updateToken(response.body);

            return response.body;
        } catch (error) {
            let exception = new OAuthProviderException();

            exception.message = error.response.res.statusMessage;
            exception.errorCode = error.status;
            exception.context = error.response;

            throw exception;
        }
    }

    /**
    * Updates the ApiClient oauth2 authentication properties and invokes the token update callback if it is set.
    * Besides extracting all the values from the provided OAuth 2 token,
    * the expiration time of access token is calculated and set as expiresAt property.
    * @param {Object} token The OAuth 2 token got from the oauth server.
    */
    updateToken(token) {
        if (!this.isOauth2Supported()) {
            throw new Error('Could not update the token. OAuth 2 is not supported.');
        }

        let oauth2 = this.authentications.oauth2;

        if (!!token.access_token) {
            oauth2.accessToken = token.access_token;
        }

        if (!!token.refresh_token) {
            oauth2.refreshToken = token.refresh_token;
        }

        if (!!token.expires_in) {
            oauth2.expiresIn = token.expires_in;
            oauth2.expiresAt = Date.now() + token.expires_in * 1000;
        }

        if (!!token.scope) {
            oauth2.scope = token.scope;
        }

        if (!!token.api_domain) {
            this.basePath = `${token.api_domain}/api/v1`;
        }

        if (typeof (oauth2.tokenUpdateCallback) === 'function') {
            oauth2.tokenUpdateCallback(token);
        }
    }

    /**
    * Parses an ISO-8601 string representation or epoch representation of a date value.
    * @param {String} str The date value as a string.
    * @returns {Date} The parsed date object.
    */
    static parseDate(str) {
        if (isNaN(str)) {
            return new Date(str);
        }
        return new Date(+str);
    }

    /**
    * Converts a value to the specified type.
    * @param {(String|Object)} data The data to convert, as a string or object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns An instance of the specified type or null or undefined if data is null or undefined.
    */
    static convertToType(data, type) {
        if (data === null || data === undefined)
            return data

        switch (type) {
            case 'Boolean':
                return Boolean(data);
            case 'Integer':
                return parseInt(data, 10);
            case 'Number':
                return parseFloat(data);
            case 'String':
                return String(data);
            case 'Date':
                return ApiClient.parseDate(String(data));
            case 'Blob':
                return data;
            default:
                if (type === Object) {
                    // generic object, return directly
                    return data;
                } else if (typeof type.constructFromObject === 'function') {
                    // for model type like User and enum class
                    return type.constructFromObject(data);
                } else if (Array.isArray(type)) {
                    // for array type like: ['String']
                    var itemType = type[0];

                    return data.map((item) => {
                        return ApiClient.convertToType(item, itemType);
                    });
                } else if (typeof type === 'object') {
                    // for plain object type like: {'String': 'Integer'}
                    var keyType, valueType;
                    for (var k in type) {
                        if (type.hasOwnProperty(k)) {
                            keyType = k;
                            valueType = type[k];
                            break;
                        }
                    }

                    var result = {};
                    for (var k in data) {
                        if (data.hasOwnProperty(k)) {
                            var key = ApiClient.convertToType(k, keyType);
                            var value = ApiClient.convertToType(data[k], valueType);
                            result[key] = value;
                        }
                    }

                    return result;
                } else {
                    // for unknown type, return the data directly
                    return data;
                }
        }
    }

    /**
    * Gets the string to be used for User-Agent request header
    * @returns User-Agent request header value
    */
    getUserAgent() {
        const version = require('../package.json').version;

        return `Pipedrive-SDK-Javascript-${version}`;
    }

    /**
    * Gets an array of host settings
    * @returns An array of host settings
    */
    hostSettings() {
        return [
            {
              'url': "https://api.pipedrive.com/v1",
              'description': "No description provided",
            }
      ];
    }

    getBasePathFromSettings(index, variables={}) {
        var servers = this.hostSettings();

        // check array index out of bound
        if (index < 0 || index >= servers.length) {
            throw new Error("Invalid index " + index + " when selecting the host settings. Must be less than " + servers.length);
        }

        var server = servers[index];
        var url = server['url'];

        // go through variable and assign a value
        for (var variable_name in server['variables']) {
            if (variable_name in variables) {
                let variable = server['variables'][variable_name];
                if ( !('enum_values' in variable) || variable['enum_values'].includes(variables[variable_name]) ) {
                    url = url.replace("{" + variable_name + "}", variables[variable_name]);
                } else {
                    throw new Error("The variable `" + variable_name + "` in the host URL has invalid value " + variables[variable_name] + ". Must be " + server['variables'][variable_name]['enum_values'] + ".");
                }
            } else {
                // use default value
                url = url.replace("{" + variable_name + "}", server['variables'][variable_name]['default_value'])
            }
        }
        return url;
    }

    /**
    * Constructs a new map or array model from REST data.
    * @param data {Object|Array} The REST data.
    * @param obj {Object|Array} The target object or array.
    */
    static constructFromObject(data, obj, itemType) {
        if (Array.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                if (data.hasOwnProperty(i))
                    obj[i] = ApiClient.convertToType(data[i], itemType);
            }
        } else {
            for (var k in data) {
                if (data.hasOwnProperty(k))
                    obj[k] = ApiClient.convertToType(data[k], itemType);
            }
        }
    };
}

/**
 * Enumeration of collection format separator strategies.
 * @enum {String}
 * @readonly
 */
ApiClient.CollectionFormatEnum = {
    /**
     * Comma-separated values. Value: <code>csv</code>
     * @const
     */
    CSV: ',',

    /**
     * Space-separated values. Value: <code>ssv</code>
     * @const
     */
    SSV: ' ',

    /**
     * Tab-separated values. Value: <code>tsv</code>
     * @const
     */
    TSV: '\t',

    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     * @const
     */
    PIPES: '|',

    /**
     * Native array. Value: <code>multi</code>
     * @const
     */
    MULTI: 'multi'
};

/**
* The default API client implementation.
* @type {module:ApiClient}
*/
ApiClient.instance = new ApiClient();
export default ApiClient;
