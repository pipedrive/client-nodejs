/* tslint:disable */
/* eslint-disable */
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
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GetCurrenciesResponse200 } from '../models';
/**
 * CurrenciesApi - axios parameter creator
 * @export
 */
export const CurrenciesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns all supported currencies in given account which should be used when saving monetary values with other objects. The `code` parameter of the returning objects is the currency code according to ISO 4217 for all non-custom currencies.
         * @summary Get all supported currencies
         * @param {string} [term] Optional search term that is searched for from currency\&#39;s name and/or code

         * @throws {RequiredError}
         */
        getCurrencies: async (term?: string, ): Promise<RequestArgs> => {
            const localVarPath = `/currencies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "api_token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["base"], configuration)

            if (term !== undefined) {
                localVarQueryParameter['term'] = term;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};


/**
 * CurrenciesApi - functional programming interface
 * @export
 */
export const CurrenciesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CurrenciesApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns all supported currencies in given account which should be used when saving monetary values with other objects. The `code` parameter of the returning objects is the currency code according to ISO 4217 for all non-custom currencies.
         * @summary Get all supported currencies
         * @param {string} [term] Optional search term that is searched for from currency\&#39;s name and/or code

         * @throws {RequiredError}
         */
        async getCurrencies(term?: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetCurrenciesResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrencies(term, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CurrenciesApi - factory interface
 * @export
 */
export const CurrenciesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CurrenciesApiFp(configuration)
    return {
        /**
         * Returns all supported currencies in given account which should be used when saving monetary values with other objects. The `code` parameter of the returning objects is the currency code according to ISO 4217 for all non-custom currencies.
         * @summary Get all supported currencies
         * @param {CurrenciesApiGetCurrenciesRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getCurrencies(requestParameters: CurrenciesApiGetCurrenciesRequest = {}, ): Promise<GetCurrenciesResponse200> {
            return localVarFp.getCurrencies(requestParameters.term, ).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCurrencies operation in CurrenciesApi.
 * @export
 * @interface CurrenciesApiGetCurrenciesRequest
 */
export interface CurrenciesApiGetCurrenciesRequest {
    /**
     * Optional search term that is searched for from currency\&#39;s name and/or code
     * @type {string}
     * @memberof CurrenciesApiGetCurrencies
     */
    readonly term?: string
}

/**
 * CurrenciesApi - object-oriented interface
 * @export
 * @class CurrenciesApi
 * @extends {BaseAPI}
 */
export class CurrenciesApi extends BaseAPI {
    /**
     * Returns all supported currencies in given account which should be used when saving monetary values with other objects. The `code` parameter of the returning objects is the currency code according to ISO 4217 for all non-custom currencies.
     * @summary Get all supported currencies
     * @param {CurrenciesApiGetCurrenciesRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof CurrenciesApi
     */
    public getCurrencies(requestParameters: CurrenciesApiGetCurrenciesRequest = {}, ) {
        return CurrenciesApiFp(this.configuration).getCurrencies(requestParameters.term, ).then((request) => request(this.axios, this.basePath));
    }
}