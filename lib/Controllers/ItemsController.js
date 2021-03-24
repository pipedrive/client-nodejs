'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');
const _oAuthManager = require('../OAuthManager');

class ItemsController {
    /**
     * Performs a search from your choice of item types and fields.
     *
     * @param  {array} input Array with all options for search.
     * @param {string} input['term'] Search term to look for.
     * @param {string} input['itemTypes'] (optional) A comma-separated string array.
     * @param {string} input['fields'] (optional) A comma-separated string array.
     * @param {boolean} input['searchForRelatedItems'] (optional)
     * @param {boolean} input['exactMatch'] (optional) Only full exact matches.
     * @param {string} input['includeFields'] (optional) A comma-separated string array.
     * @param {int} input['start'] (optional) Pagination start.
     * @param {int} input['limit'] (optional) Items shown per page.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static searchItem(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/itemSearch';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            term: input.term,
            item_types: input.itemTypes,
            fields: input.fields,
            search_for_related_items: input.searchForRelatedItems,
            exact_match: input.exactMatch,
            include_fields: input.includeFields,
            start: (input.start !== null) ? input.start : 0,
            limit: input.limit,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return ItemsController.searchItemAction(_queryUrl, _callback, input);
        }
        return _oAuthManager.authorize().then(
            () => ItemsController.searchItemAction(_queryUrl, _callback, input),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static searchItemAction(_queryUrl, _callback, input) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': _configuration.getUserAgent(),
        };

        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });
        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return oauthTokenPromise
            .then(() =>
                new Promise((_fulfill, _reject) => {
                    _request(_options, (_error, _response, _context) => {
                        let errorResponse;
                        if (_error) {
                            errorResponse = _baseController.validateResponse(_context);
                            _callback(errorResponse.error,
                                errorResponse.response,
                                errorResponse.context);
                            _reject(errorResponse.error);
                        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                            let parsed = JSON.parse(_response.body);
                            // same model fits for searchItem
                            parsed = _baseController.getObjectMapper().mapObject(parsed, 'SearchDeals');
                            _callback(null, parsed, _context);
                            _fulfill(parsed);
                        } else {
                            errorResponse = _baseController.validateResponse(_context);
                            _callback(errorResponse.error,
                                errorResponse.response,
                                errorResponse.context);
                            _reject(errorResponse.error);
                        }
                    });
                }))
            .catch((err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    /**
     * Performs a search from the values of a specific field.
     * Results can either be the distinct values of the field
     * (useful for searching autocomplete field values),
     * or the IDs of actual items (Deals, Persons, Organizations or Products).
     *
     * @param  {array} input Array with all options for search.
     * @param {string} input['term'] (required) Search term to look for.
     * @param {string} input['fieldType'] (required) The type of the field.
     * @param {string} input['fieldKey'] (required) The key of the field to search from.
     * @param {boolean} input['exactMatch'] (optional) Only full exact matches.
     * @param {boolean} input['returnItemIds'] (optional) The IDs of the matching items or not.
     * @param {int} input['start'] (optional) Pagination start.
     * @param {int} input['limit'] (optional) Items shown per page.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static searchItemByField(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/itemSearch/field';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            term: input.term,
            field_type: input.fieldType,
            exact_match: input.exactMatch,
            field_key: input.fieldKey,
            return_item_ids: input.returnItemIds,
            start: (input.start !== null) ? input.start : 0,
            limit: input.limit,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return ItemsController.searchItemByFieldAction(_queryUrl, _callback, input);
        }
        return _oAuthManager.authorize().then(
            () => ItemsController.searchItemByFieldAction(_queryUrl, _callback, input),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static searchItemByFieldAction(_queryUrl, _callback, input) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': _configuration.getUserAgent(),
        };

        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });
        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return oauthTokenPromise
            .then(() =>
                new Promise((_fulfill, _reject) => {
                    _request(_options, (_error, _response, _context) => {
                        let errorResponse;
                        if (_error) {
                            errorResponse = _baseController.validateResponse(_context);
                            _callback(errorResponse.error,
                                errorResponse.response,
                                errorResponse.context);
                            _reject(errorResponse.error);
                        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                            let parsed = JSON.parse(_response.body);
                            parsed = _baseController.getObjectMapper().mapObject(parsed, 'ItemSearchByField');
                            _callback(null, parsed, _context);
                            _fulfill(parsed);
                        } else {
                            errorResponse = _baseController.validateResponse(_context);
                            _callback(errorResponse.error,
                                errorResponse.response,
                                errorResponse.context);
                            _reject(errorResponse.error);
                        }
                    });
                }))
            .catch((err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
}

module.exports = ItemsController;
