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
import { AddLeadLabelRequest } from '../models';
// @ts-ignore
import { DeleteLeadIdResponse } from '../models';
// @ts-ignore
import { GetLeadLabelsResponse } from '../models';
// @ts-ignore
import { LeadNotFoundResponse } from '../models';
// @ts-ignore
import { UpdateLeadLabelRequest } from '../models';
// @ts-ignore
import { UpsertLeadLabelResponse } from '../models';
/**
 * LeadLabelsApi - axios parameter creator
 * @export
 */
export const LeadLabelsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a lead label.
         * @summary Add a lead label
         * @param {AddLeadLabelRequest} [AddLeadLabelRequest] 

         * @throws {RequiredError}
         */
        addLeadLabel: async (AddLeadLabelRequest?: AddLeadLabelRequest, ): Promise<RequestArgs> => {
            const localVarPath = `/leadLabels`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["leads:full"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = serializeDataIfNeeded(AddLeadLabelRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a specific lead label.
         * @summary Delete a lead label
         * @param {string} id The ID of the lead label

         * @throws {RequiredError}
         */
        deleteLeadLabel: async (id: string, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteLeadLabel', 'id', id)
            const localVarPath = `/leadLabels/{id}`
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["leads:full"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns details of all lead labels. This endpoint does not support pagination and all labels are always returned.
         * @summary Get all lead labels

         * @throws {RequiredError}
         */
        getLeadLabels: async (): Promise<RequestArgs> => {
            const localVarPath = `/leadLabels`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["leads:read", "leads:full"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates one or more properties of a lead label. Only properties included in the request will be updated. 
         * @summary Update a lead label
         * @param {string} id The ID of the lead label
         * @param {UpdateLeadLabelRequest} [UpdateLeadLabelRequest] 

         * @throws {RequiredError}
         */
        updateLeadLabel: async (id: string, UpdateLeadLabelRequest?: UpdateLeadLabelRequest, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateLeadLabel', 'id', id)
            const localVarPath = `/leadLabels/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "api_token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["leads:full"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = serializeDataIfNeeded(UpdateLeadLabelRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};


/**
 * LeadLabelsApi - functional programming interface
 * @export
 */
export const LeadLabelsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LeadLabelsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a lead label.
         * @summary Add a lead label
         * @param {AddLeadLabelRequest} [AddLeadLabelRequest] 

         * @throws {RequiredError}
         */
        async addLeadLabel(AddLeadLabelRequest?: AddLeadLabelRequest, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<UpsertLeadLabelResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addLeadLabel(AddLeadLabelRequest, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a specific lead label.
         * @summary Delete a lead label
         * @param {string} id The ID of the lead label

         * @throws {RequiredError}
         */
        async deleteLeadLabel(id: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<DeleteLeadIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteLeadLabel(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns details of all lead labels. This endpoint does not support pagination and all labels are always returned.
         * @summary Get all lead labels

         * @throws {RequiredError}
         */
        async getLeadLabels(): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetLeadLabelsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLeadLabels();
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates one or more properties of a lead label. Only properties included in the request will be updated. 
         * @summary Update a lead label
         * @param {string} id The ID of the lead label
         * @param {UpdateLeadLabelRequest} [UpdateLeadLabelRequest] 

         * @throws {RequiredError}
         */
        async updateLeadLabel(id: string, UpdateLeadLabelRequest?: UpdateLeadLabelRequest, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<UpsertLeadLabelResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateLeadLabel(id, UpdateLeadLabelRequest, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LeadLabelsApi - factory interface
 * @export
 */
export const LeadLabelsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LeadLabelsApiFp(configuration)
    return {
        /**
         * Creates a lead label.
         * @summary Add a lead label
         * @param {LeadLabelsApiAddLeadLabelRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        addLeadLabel(requestParameters: LeadLabelsApiAddLeadLabelRequest = {}, ): Promise<UpsertLeadLabelResponse> {
            return localVarFp.addLeadLabel(requestParameters.AddLeadLabelRequest, ).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a specific lead label.
         * @summary Delete a lead label
         * @param {LeadLabelsApiDeleteLeadLabelRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        deleteLeadLabel(requestParameters: LeadLabelsApiDeleteLeadLabelRequest, ): Promise<DeleteLeadIdResponse> {
            return localVarFp.deleteLeadLabel(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * Returns details of all lead labels. This endpoint does not support pagination and all labels are always returned.
         * @summary Get all lead labels

         * @throws {RequiredError}
         */
        getLeadLabels(): Promise<GetLeadLabelsResponse> {
            return localVarFp.getLeadLabels().then((request) => request(axios, basePath));
        },
        /**
         * Updates one or more properties of a lead label. Only properties included in the request will be updated. 
         * @summary Update a lead label
         * @param {LeadLabelsApiUpdateLeadLabelRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        updateLeadLabel(requestParameters: LeadLabelsApiUpdateLeadLabelRequest, ): Promise<UpsertLeadLabelResponse> {
            return localVarFp.updateLeadLabel(requestParameters.id, requestParameters.UpdateLeadLabelRequest, ).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addLeadLabel operation in LeadLabelsApi.
 * @export
 * @interface LeadLabelsApiAddLeadLabelRequest
 */
export interface LeadLabelsApiAddLeadLabelRequest {
    /**
     * 
     * @type {AddLeadLabelRequest}
     * @memberof LeadLabelsApiAddLeadLabel
     */
    readonly AddLeadLabelRequest?: AddLeadLabelRequest
}

/**
 * Request parameters for deleteLeadLabel operation in LeadLabelsApi.
 * @export
 * @interface LeadLabelsApiDeleteLeadLabelRequest
 */
export interface LeadLabelsApiDeleteLeadLabelRequest {
    /**
     * The ID of the lead label
     * @type {string}
     * @memberof LeadLabelsApiDeleteLeadLabel
     */
    readonly id: string
}

/**
 * Request parameters for updateLeadLabel operation in LeadLabelsApi.
 * @export
 * @interface LeadLabelsApiUpdateLeadLabelRequest
 */
export interface LeadLabelsApiUpdateLeadLabelRequest {
    /**
     * The ID of the lead label
     * @type {string}
     * @memberof LeadLabelsApiUpdateLeadLabel
     */
    readonly id: string

    /**
     * 
     * @type {UpdateLeadLabelRequest}
     * @memberof LeadLabelsApiUpdateLeadLabel
     */
    readonly UpdateLeadLabelRequest?: UpdateLeadLabelRequest
}

/**
 * LeadLabelsApi - object-oriented interface
 * @export
 * @class LeadLabelsApi
 * @extends {BaseAPI}
 */
export class LeadLabelsApi extends BaseAPI {
    /**
     * Creates a lead label.
     * @summary Add a lead label
     * @param {LeadLabelsApiAddLeadLabelRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof LeadLabelsApi
     */
    public addLeadLabel(requestParameters: LeadLabelsApiAddLeadLabelRequest = {}, ) {
        return LeadLabelsApiFp(this.configuration).addLeadLabel(requestParameters.AddLeadLabelRequest, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a specific lead label.
     * @summary Delete a lead label
     * @param {LeadLabelsApiDeleteLeadLabelRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof LeadLabelsApi
     */
    public deleteLeadLabel(requestParameters: LeadLabelsApiDeleteLeadLabelRequest, ) {
        return LeadLabelsApiFp(this.configuration).deleteLeadLabel(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns details of all lead labels. This endpoint does not support pagination and all labels are always returned.
     * @summary Get all lead labels

     * @throws {RequiredError}
     * @memberof LeadLabelsApi
     */
    public getLeadLabels() {
        return LeadLabelsApiFp(this.configuration).getLeadLabels().then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates one or more properties of a lead label. Only properties included in the request will be updated. 
     * @summary Update a lead label
     * @param {LeadLabelsApiUpdateLeadLabelRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof LeadLabelsApi
     */
    public updateLeadLabel(requestParameters: LeadLabelsApiUpdateLeadLabelRequest, ) {
        return LeadLabelsApiFp(this.configuration).updateLeadLabel(requestParameters.id, requestParameters.UpdateLeadLabelRequest, ).then((request) => request(this.axios, this.basePath));
    }
}
