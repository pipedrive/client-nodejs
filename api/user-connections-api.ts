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
import { GetUserConnectionsResponse } from '../models';
// @ts-ignore
import { UnathorizedResponse } from '../models';
/**
 * UserConnectionsApi - axios parameter creator
 * @export
 */
export const UserConnectionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns data about all connections for the authorized user.
         * @summary Get all user connections

         * @throws {RequiredError}
         */
        getUserConnections: async (): Promise<RequestArgs> => {
            const localVarPath = `/userConnections`;
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
 * UserConnectionsApi - functional programming interface
 * @export
 */
export const UserConnectionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserConnectionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns data about all connections for the authorized user.
         * @summary Get all user connections

         * @throws {RequiredError}
         */
        async getUserConnections(): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetUserConnectionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserConnections();
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserConnectionsApi - factory interface
 * @export
 */
export const UserConnectionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserConnectionsApiFp(configuration)
    return {
        /**
         * Returns data about all connections for the authorized user.
         * @summary Get all user connections

         * @throws {RequiredError}
         */
        getUserConnections(): Promise<GetUserConnectionsResponse> {
            return localVarFp.getUserConnections().then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserConnectionsApi - object-oriented interface
 * @export
 * @class UserConnectionsApi
 * @extends {BaseAPI}
 */
export class UserConnectionsApi extends BaseAPI {
    /**
     * Returns data about all connections for the authorized user.
     * @summary Get all user connections

     * @throws {RequiredError}
     * @memberof UserConnectionsApi
     */
    public getUserConnections() {
        return UserConnectionsApiFp(this.configuration).getUserConnections().then((request) => request(this.axios, this.basePath));
    }
}