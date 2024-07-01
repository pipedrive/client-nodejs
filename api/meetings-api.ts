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
import { AddUserProviderLinkRequest } from '../models';
// @ts-ignore
import { UserProviderLinkErrorResponse } from '../models';
// @ts-ignore
import { UserProviderLinkSuccessResponse } from '../models';
/**
 * MeetingsApi - axios parameter creator
 * @export
 */
export const MeetingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * A video calling provider must call this endpoint to remove the link between a user and the installed video calling app.
         * @summary Delete the link between a user and the installed video call integration
         * @param {string} id Unique identifier linking a user to the installed integration

         * @throws {RequiredError}
         */
        deleteUserProviderLink: async (id: string, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteUserProviderLink', 'id', id)
            const localVarPath = `/meetings/userProviderLinks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "api_token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["video-calls"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * A video calling provider must call this endpoint after a user has installed the video calling app so that the new user\'s information is sent.
         * @summary Link a user with the installed video call integration
         * @param {AddUserProviderLinkRequest} [AddUserProviderLinkRequest] 

         * @throws {RequiredError}
         */
        saveUserProviderLink: async (AddUserProviderLinkRequest?: AddUserProviderLinkRequest, ): Promise<RequestArgs> => {
            const localVarPath = `/meetings/userProviderLinks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "api_token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["video-calls"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = serializeDataIfNeeded(AddUserProviderLinkRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};


/**
 * MeetingsApi - functional programming interface
 * @export
 */
export const MeetingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MeetingsApiAxiosParamCreator(configuration)
    return {
        /**
         * A video calling provider must call this endpoint to remove the link between a user and the installed video calling app.
         * @summary Delete the link between a user and the installed video call integration
         * @param {string} id Unique identifier linking a user to the installed integration

         * @throws {RequiredError}
         */
        async deleteUserProviderLink(id: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<UserProviderLinkSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUserProviderLink(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * A video calling provider must call this endpoint after a user has installed the video calling app so that the new user\'s information is sent.
         * @summary Link a user with the installed video call integration
         * @param {AddUserProviderLinkRequest} [AddUserProviderLinkRequest] 

         * @throws {RequiredError}
         */
        async saveUserProviderLink(AddUserProviderLinkRequest?: AddUserProviderLinkRequest, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<UserProviderLinkSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveUserProviderLink(AddUserProviderLinkRequest, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MeetingsApi - factory interface
 * @export
 */
export const MeetingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MeetingsApiFp(configuration)
    return {
        /**
         * A video calling provider must call this endpoint to remove the link between a user and the installed video calling app.
         * @summary Delete the link between a user and the installed video call integration
         * @param {MeetingsApiDeleteUserProviderLinkRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        deleteUserProviderLink(requestParameters: MeetingsApiDeleteUserProviderLinkRequest, ): Promise<UserProviderLinkSuccessResponse> {
            return localVarFp.deleteUserProviderLink(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * A video calling provider must call this endpoint after a user has installed the video calling app so that the new user\'s information is sent.
         * @summary Link a user with the installed video call integration
         * @param {MeetingsApiSaveUserProviderLinkRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        saveUserProviderLink(requestParameters: MeetingsApiSaveUserProviderLinkRequest = {}, ): Promise<UserProviderLinkSuccessResponse> {
            return localVarFp.saveUserProviderLink(requestParameters.AddUserProviderLinkRequest, ).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteUserProviderLink operation in MeetingsApi.
 * @export
 * @interface MeetingsApiDeleteUserProviderLinkRequest
 */
export interface MeetingsApiDeleteUserProviderLinkRequest {
    /**
     * Unique identifier linking a user to the installed integration
     * @type {string}
     * @memberof MeetingsApiDeleteUserProviderLink
     */
    readonly id: string
}

/**
 * Request parameters for saveUserProviderLink operation in MeetingsApi.
 * @export
 * @interface MeetingsApiSaveUserProviderLinkRequest
 */
export interface MeetingsApiSaveUserProviderLinkRequest {
    /**
     * 
     * @type {AddUserProviderLinkRequest}
     * @memberof MeetingsApiSaveUserProviderLink
     */
    readonly AddUserProviderLinkRequest?: AddUserProviderLinkRequest
}

/**
 * MeetingsApi - object-oriented interface
 * @export
 * @class MeetingsApi
 * @extends {BaseAPI}
 */
export class MeetingsApi extends BaseAPI {
    /**
     * A video calling provider must call this endpoint to remove the link between a user and the installed video calling app.
     * @summary Delete the link between a user and the installed video call integration
     * @param {MeetingsApiDeleteUserProviderLinkRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof MeetingsApi
     */
    public deleteUserProviderLink(requestParameters: MeetingsApiDeleteUserProviderLinkRequest, ) {
        return MeetingsApiFp(this.configuration).deleteUserProviderLink(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * A video calling provider must call this endpoint after a user has installed the video calling app so that the new user\'s information is sent.
     * @summary Link a user with the installed video call integration
     * @param {MeetingsApiSaveUserProviderLinkRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof MeetingsApi
     */
    public saveUserProviderLink(requestParameters: MeetingsApiSaveUserProviderLinkRequest = {}, ) {
        return MeetingsApiFp(this.configuration).saveUserProviderLink(requestParameters.AddUserProviderLinkRequest, ).then((request) => request(this.axios, this.basePath));
    }
}
