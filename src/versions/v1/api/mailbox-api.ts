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
import { DeleteMailThreadResponse } from '../models';
// @ts-ignore
import { GetMailMessageResponse } from '../models';
// @ts-ignore
import { GetMailThreadMessagesResponse } from '../models';
// @ts-ignore
import { GetMailThreadResponse } from '../models';
// @ts-ignore
import { GetMailThreadResponse1 } from '../models';
// @ts-ignore
import { UpdateMailThreadResponse } from '../models';
/**
 * MailboxApi - axios parameter creator
 * @export
 */
export const MailboxApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Marks a mail thread as deleted.
         * @summary Delete mail thread
         * @param {number} id The ID of the mail thread

         * @throws {RequiredError}
         */
        deleteMailThread: async (id: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteMailThread', 'id', id)
            const localVarPath = `/mailbox/mailThreads/{id}`
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
            await setApiKeyToObject(localVarHeaderParameter, "x-api-token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["mail:full"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns data about a specific mail message.
         * @summary Get one mail message
         * @param {number} id The ID of the mail message to fetch
         * @param {0 | 1} [include_body] Whether to include the full message body or not. &#x60;0&#x60; &#x3D; Don\&#39;t include, &#x60;1&#x60; &#x3D; Include.

         * @throws {RequiredError}
         */
        getMailMessage: async (id: number, include_body?: 0 | 1, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getMailMessage', 'id', id)
            const localVarPath = `/mailbox/mailMessages/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            await setApiKeyToObject(localVarHeaderParameter, "x-api-token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["mail:read", "mail:full"], configuration)

            if (include_body !== undefined) {
                localVarQueryParameter['include_body'] = include_body;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a specific mail thread.
         * @summary Get one mail thread
         * @param {number} id The ID of the mail thread

         * @throws {RequiredError}
         */
        getMailThread: async (id: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getMailThread', 'id', id)
            const localVarPath = `/mailbox/mailThreads/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            await setApiKeyToObject(localVarHeaderParameter, "x-api-token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["mail:read", "mail:full"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all the mail messages inside a specified mail thread.
         * @summary Get all mail messages of mail thread
         * @param {number} id The ID of the mail thread

         * @throws {RequiredError}
         */
        getMailThreadMessages: async (id: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getMailThreadMessages', 'id', id)
            const localVarPath = `/mailbox/mailThreads/{id}/mailMessages`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            await setApiKeyToObject(localVarHeaderParameter, "x-api-token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["mail:read", "mail:full"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns mail threads in a specified folder ordered by the most recent message within.
         * @summary Get mail threads
         * @param {'inbox' | 'drafts' | 'sent' | 'archive'} folder The type of folder to fetch
         * @param {number} [start] Pagination start
         * @param {number} [limit] Items shown per page

         * @throws {RequiredError}
         */
        getMailThreads: async (folder: 'inbox' | 'drafts' | 'sent' | 'archive', start?: number, limit?: number, ): Promise<RequestArgs> => {
            // verify required parameter 'folder' is not null or undefined
            assertParamExists('getMailThreads', 'folder', folder)
            const localVarPath = `/mailbox/mailThreads`;
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
            await setApiKeyToObject(localVarHeaderParameter, "x-api-token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["mail:read", "mail:full"], configuration)

            if (folder !== undefined) {
                localVarQueryParameter['folder'] = folder;
            }

            if (start !== undefined) {
                localVarQueryParameter['start'] = start;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the properties of a mail thread.
         * @summary Update mail thread details
         * @param {number} id The ID of the mail thread
         * @param {number} [deal_id] The ID of the deal this thread is associated with
         * @param {string} [lead_id] The ID of the lead this thread is associated with
         * @param {number} [shared_flag] 
         * @param {number} [read_flag] 
         * @param {number} [archived_flag] 

         * @throws {RequiredError}
         */
        updateMailThreadDetails: async (id: number, deal_id?: number, lead_id?: string, shared_flag?: number, read_flag?: number, archived_flag?: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateMailThreadDetails', 'id', id)
            const localVarPath = `/mailbox/mailThreads/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["mail:full"], configuration)


            if (deal_id !== undefined) { 
                localVarFormParams.set('deal_id', deal_id as any);
            }
    
            if (lead_id !== undefined) { 
                localVarFormParams.set('lead_id', lead_id as any);
            }
    
            if (shared_flag !== undefined) { 
                localVarFormParams.set('shared_flag', shared_flag as any);
            }
    
            if (read_flag !== undefined) { 
                localVarFormParams.set('read_flag', read_flag as any);
            }
    
            if (archived_flag !== undefined) { 
                localVarFormParams.set('archived_flag', archived_flag as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};


/**
 * MailboxApi - functional programming interface
 * @export
 */
export const MailboxApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MailboxApiAxiosParamCreator(configuration)
    return {
        /**
         * Marks a mail thread as deleted.
         * @summary Delete mail thread
         * @param {number} id The ID of the mail thread

         * @throws {RequiredError}
         */
        async deleteMailThread(id: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<DeleteMailThreadResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMailThread(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns data about a specific mail message.
         * @summary Get one mail message
         * @param {number} id The ID of the mail message to fetch
         * @param {0 | 1} [include_body] Whether to include the full message body or not. &#x60;0&#x60; &#x3D; Don\&#39;t include, &#x60;1&#x60; &#x3D; Include.

         * @throws {RequiredError}
         */
        async getMailMessage(id: number, include_body?: 0 | 1, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetMailMessageResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMailMessage(id, include_body, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a specific mail thread.
         * @summary Get one mail thread
         * @param {number} id The ID of the mail thread

         * @throws {RequiredError}
         */
        async getMailThread(id: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetMailThreadResponse1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMailThread(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns all the mail messages inside a specified mail thread.
         * @summary Get all mail messages of mail thread
         * @param {number} id The ID of the mail thread

         * @throws {RequiredError}
         */
        async getMailThreadMessages(id: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetMailThreadMessagesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMailThreadMessages(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns mail threads in a specified folder ordered by the most recent message within.
         * @summary Get mail threads
         * @param {'inbox' | 'drafts' | 'sent' | 'archive'} folder The type of folder to fetch
         * @param {number} [start] Pagination start
         * @param {number} [limit] Items shown per page

         * @throws {RequiredError}
         */
        async getMailThreads(folder: 'inbox' | 'drafts' | 'sent' | 'archive', start?: number, limit?: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetMailThreadResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMailThreads(folder, start, limit, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the properties of a mail thread.
         * @summary Update mail thread details
         * @param {number} id The ID of the mail thread
         * @param {number} [deal_id] The ID of the deal this thread is associated with
         * @param {string} [lead_id] The ID of the lead this thread is associated with
         * @param {number} [shared_flag] 
         * @param {number} [read_flag] 
         * @param {number} [archived_flag] 

         * @throws {RequiredError}
         */
        async updateMailThreadDetails(id: number, deal_id?: number, lead_id?: string, shared_flag?: number, read_flag?: number, archived_flag?: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<UpdateMailThreadResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMailThreadDetails(id, deal_id, lead_id, shared_flag, read_flag, archived_flag, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MailboxApi - factory interface
 * @export
 */
export const MailboxApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MailboxApiFp(configuration)
    return {
        /**
         * Marks a mail thread as deleted.
         * @summary Delete mail thread
         * @param {MailboxApiDeleteMailThreadRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        deleteMailThread(requestParameters: MailboxApiDeleteMailThreadRequest, ): Promise<DeleteMailThreadResponse> {
            return localVarFp.deleteMailThread(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * Returns data about a specific mail message.
         * @summary Get one mail message
         * @param {MailboxApiGetMailMessageRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getMailMessage(requestParameters: MailboxApiGetMailMessageRequest, ): Promise<GetMailMessageResponse> {
            return localVarFp.getMailMessage(requestParameters.id, requestParameters.include_body, ).then((request) => request(axios, basePath));
        },
        /**
         * Returns a specific mail thread.
         * @summary Get one mail thread
         * @param {MailboxApiGetMailThreadRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getMailThread(requestParameters: MailboxApiGetMailThreadRequest, ): Promise<GetMailThreadResponse1> {
            return localVarFp.getMailThread(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * Returns all the mail messages inside a specified mail thread.
         * @summary Get all mail messages of mail thread
         * @param {MailboxApiGetMailThreadMessagesRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getMailThreadMessages(requestParameters: MailboxApiGetMailThreadMessagesRequest, ): Promise<GetMailThreadMessagesResponse> {
            return localVarFp.getMailThreadMessages(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * Returns mail threads in a specified folder ordered by the most recent message within.
         * @summary Get mail threads
         * @param {MailboxApiGetMailThreadsRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getMailThreads(requestParameters: MailboxApiGetMailThreadsRequest, ): Promise<GetMailThreadResponse> {
            return localVarFp.getMailThreads(requestParameters.folder, requestParameters.start, requestParameters.limit, ).then((request) => request(axios, basePath));
        },
        /**
         * Updates the properties of a mail thread.
         * @summary Update mail thread details
         * @param {MailboxApiUpdateMailThreadDetailsRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        updateMailThreadDetails(requestParameters: MailboxApiUpdateMailThreadDetailsRequest, ): Promise<UpdateMailThreadResponse> {
            return localVarFp.updateMailThreadDetails(requestParameters.id, requestParameters.deal_id, requestParameters.lead_id, requestParameters.shared_flag, requestParameters.read_flag, requestParameters.archived_flag, ).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteMailThread operation in MailboxApi.
 * @export
 * @interface MailboxApiDeleteMailThreadRequest
 */
export interface MailboxApiDeleteMailThreadRequest {
    /**
     * The ID of the mail thread
     * @type {number}
     * @memberof MailboxApiDeleteMailThread
     */
    readonly id: number
}

/**
 * Request parameters for getMailMessage operation in MailboxApi.
 * @export
 * @interface MailboxApiGetMailMessageRequest
 */
export interface MailboxApiGetMailMessageRequest {
    /**
     * The ID of the mail message to fetch
     * @type {number}
     * @memberof MailboxApiGetMailMessage
     */
    readonly id: number

    /**
     * Whether to include the full message body or not. &#x60;0&#x60; &#x3D; Don\&#39;t include, &#x60;1&#x60; &#x3D; Include.
     * @type {0 | 1}
     * @memberof MailboxApiGetMailMessage
     */
    readonly include_body?: 0 | 1
}

/**
 * Request parameters for getMailThread operation in MailboxApi.
 * @export
 * @interface MailboxApiGetMailThreadRequest
 */
export interface MailboxApiGetMailThreadRequest {
    /**
     * The ID of the mail thread
     * @type {number}
     * @memberof MailboxApiGetMailThread
     */
    readonly id: number
}

/**
 * Request parameters for getMailThreadMessages operation in MailboxApi.
 * @export
 * @interface MailboxApiGetMailThreadMessagesRequest
 */
export interface MailboxApiGetMailThreadMessagesRequest {
    /**
     * The ID of the mail thread
     * @type {number}
     * @memberof MailboxApiGetMailThreadMessages
     */
    readonly id: number
}

/**
 * Request parameters for getMailThreads operation in MailboxApi.
 * @export
 * @interface MailboxApiGetMailThreadsRequest
 */
export interface MailboxApiGetMailThreadsRequest {
    /**
     * The type of folder to fetch
     * @type {'inbox' | 'drafts' | 'sent' | 'archive'}
     * @memberof MailboxApiGetMailThreads
     */
    readonly folder: 'inbox' | 'drafts' | 'sent' | 'archive'

    /**
     * Pagination start
     * @type {number}
     * @memberof MailboxApiGetMailThreads
     */
    readonly start?: number

    /**
     * Items shown per page
     * @type {number}
     * @memberof MailboxApiGetMailThreads
     */
    readonly limit?: number
}

/**
 * Request parameters for updateMailThreadDetails operation in MailboxApi.
 * @export
 * @interface MailboxApiUpdateMailThreadDetailsRequest
 */
export interface MailboxApiUpdateMailThreadDetailsRequest {
    /**
     * The ID of the mail thread
     * @type {number}
     * @memberof MailboxApiUpdateMailThreadDetails
     */
    readonly id: number

    /**
     * The ID of the deal this thread is associated with
     * @type {number}
     * @memberof MailboxApiUpdateMailThreadDetails
     */
    readonly deal_id?: number

    /**
     * The ID of the lead this thread is associated with
     * @type {string}
     * @memberof MailboxApiUpdateMailThreadDetails
     */
    readonly lead_id?: string

    /**
     * 
     * @type {number}
     * @memberof MailboxApiUpdateMailThreadDetails
     */
    readonly shared_flag?: number

    /**
     * 
     * @type {number}
     * @memberof MailboxApiUpdateMailThreadDetails
     */
    readonly read_flag?: number

    /**
     * 
     * @type {number}
     * @memberof MailboxApiUpdateMailThreadDetails
     */
    readonly archived_flag?: number
}

/**
 * MailboxApi - object-oriented interface
 * @export
 * @class MailboxApi
 * @extends {BaseAPI}
 */
export class MailboxApi extends BaseAPI {
    /**
     * Marks a mail thread as deleted.
     * @summary Delete mail thread
     * @param {MailboxApiDeleteMailThreadRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof MailboxApi
     */
    public deleteMailThread(requestParameters: MailboxApiDeleteMailThreadRequest, ) {
        return MailboxApiFp(this.configuration).deleteMailThread(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns data about a specific mail message.
     * @summary Get one mail message
     * @param {MailboxApiGetMailMessageRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof MailboxApi
     */
    public getMailMessage(requestParameters: MailboxApiGetMailMessageRequest, ) {
        return MailboxApiFp(this.configuration).getMailMessage(requestParameters.id, requestParameters.include_body, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a specific mail thread.
     * @summary Get one mail thread
     * @param {MailboxApiGetMailThreadRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof MailboxApi
     */
    public getMailThread(requestParameters: MailboxApiGetMailThreadRequest, ) {
        return MailboxApiFp(this.configuration).getMailThread(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all the mail messages inside a specified mail thread.
     * @summary Get all mail messages of mail thread
     * @param {MailboxApiGetMailThreadMessagesRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof MailboxApi
     */
    public getMailThreadMessages(requestParameters: MailboxApiGetMailThreadMessagesRequest, ) {
        return MailboxApiFp(this.configuration).getMailThreadMessages(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns mail threads in a specified folder ordered by the most recent message within.
     * @summary Get mail threads
     * @param {MailboxApiGetMailThreadsRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof MailboxApi
     */
    public getMailThreads(requestParameters: MailboxApiGetMailThreadsRequest, ) {
        return MailboxApiFp(this.configuration).getMailThreads(requestParameters.folder, requestParameters.start, requestParameters.limit, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the properties of a mail thread.
     * @summary Update mail thread details
     * @param {MailboxApiUpdateMailThreadDetailsRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof MailboxApi
     */
    public updateMailThreadDetails(requestParameters: MailboxApiUpdateMailThreadDetailsRequest, ) {
        return MailboxApiFp(this.configuration).updateMailThreadDetails(requestParameters.id, requestParameters.deal_id, requestParameters.lead_id, requestParameters.shared_flag, requestParameters.read_flag, requestParameters.archived_flag, ).then((request) => request(this.axios, this.basePath));
    }
}
