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
import { GetUserSettingsResponse } from '../models';
// @ts-ignore
import { UnathorizedResponse } from '../models';
/**
 * UserSettingsApi - axios parameter creator
 * @export
 */
export const UserSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Lists the settings of an authorized user. Example response contains a shortened list of settings.
         * @summary List settings of an authorized user

         * @throws {RequiredError}
         */
        getUserSettings: async (): Promise<RequestArgs> => {
            const localVarPath = `/userSettings`;
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
 * UserSettingsApi - functional programming interface
 * @export
 */
export const UserSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Lists the settings of an authorized user. Example response contains a shortened list of settings.
         * @summary List settings of an authorized user

         * @throws {RequiredError}
         */
        async getUserSettings(): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetUserSettingsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserSettings();
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserSettingsApi - factory interface
 * @export
 */
export const UserSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserSettingsApiFp(configuration)
    return {
        /**
         * Lists the settings of an authorized user. Example response contains a shortened list of settings.
         * @summary List settings of an authorized user

         * @throws {RequiredError}
         */
        getUserSettings(): Promise<GetUserSettingsResponse> {
            return localVarFp.getUserSettings().then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserSettingsApi - object-oriented interface
 * @export
 * @class UserSettingsApi
 * @extends {BaseAPI}
 */
export class UserSettingsApi extends BaseAPI {
    /**
     * Lists the settings of an authorized user. Example response contains a shortened list of settings.
     * @summary List settings of an authorized user

     * @throws {RequiredError}
     * @memberof UserSettingsApi
     */
    public getUserSettings() {
        return UserSettingsApiFp(this.configuration).getUserSettings().then((request) => request(this.axios, this.basePath));
    }
}
