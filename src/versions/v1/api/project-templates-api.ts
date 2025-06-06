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
import { GetProjectBoardResponse } from '../models';
// @ts-ignore
import { GetProjectPhaseResponse } from '../models';
// @ts-ignore
import { GetProjectTemplateResponse } from '../models';
// @ts-ignore
import { GetProjectTemplatesResponse } from '../models';
/**
 * ProjectTemplatesApi - axios parameter creator
 * @export
 */
export const ProjectTemplatesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the details of a specific project template.
         * @summary Get details of a template
         * @param {number} id The ID of the project template

         * @throws {RequiredError}
         */
        getProjectTemplate: async (id: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProjectTemplate', 'id', id)
            const localVarPath = `/projectTemplates/{id}`
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["projects:read", "projects:full"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all not deleted project templates. This is a cursor-paginated endpoint. For more information, please refer to our documentation on <a href=\"https://pipedrive.readme.io/docs/core-api-concepts-pagination\" target=\"_blank\" rel=\"noopener noreferrer\">pagination</a>.
         * @summary Get all project templates
         * @param {string} [cursor] For pagination, the marker (an opaque string value) representing the first item on the next page
         * @param {number} [limit] For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned.

         * @throws {RequiredError}
         */
        getProjectTemplates: async (cursor?: string, limit?: number, ): Promise<RequestArgs> => {
            const localVarPath = `/projectTemplates`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["projects:read", "projects:full"], configuration)

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
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
         * Returns the details of a specific project board.
         * @summary Get details of a board
         * @param {number} id The ID of the project board

         * @throws {RequiredError}
         */
        getProjectsBoard: async (id: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProjectsBoard', 'id', id)
            const localVarPath = `/projects/boards/{id}`
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["projects:read", "projects:full"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the details of a specific project phase.
         * @summary Get details of a phase
         * @param {number} id The ID of the project phase

         * @throws {RequiredError}
         */
        getProjectsPhase: async (id: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProjectsPhase', 'id', id)
            const localVarPath = `/projects/phases/{id}`
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["projects:read"], configuration)


    
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
 * ProjectTemplatesApi - functional programming interface
 * @export
 */
export const ProjectTemplatesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProjectTemplatesApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the details of a specific project template.
         * @summary Get details of a template
         * @param {number} id The ID of the project template

         * @throws {RequiredError}
         */
        async getProjectTemplate(id: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetProjectTemplateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectTemplate(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns all not deleted project templates. This is a cursor-paginated endpoint. For more information, please refer to our documentation on <a href=\"https://pipedrive.readme.io/docs/core-api-concepts-pagination\" target=\"_blank\" rel=\"noopener noreferrer\">pagination</a>.
         * @summary Get all project templates
         * @param {string} [cursor] For pagination, the marker (an opaque string value) representing the first item on the next page
         * @param {number} [limit] For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned.

         * @throws {RequiredError}
         */
        async getProjectTemplates(cursor?: string, limit?: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetProjectTemplatesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectTemplates(cursor, limit, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the details of a specific project board.
         * @summary Get details of a board
         * @param {number} id The ID of the project board

         * @throws {RequiredError}
         */
        async getProjectsBoard(id: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetProjectBoardResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectsBoard(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the details of a specific project phase.
         * @summary Get details of a phase
         * @param {number} id The ID of the project phase

         * @throws {RequiredError}
         */
        async getProjectsPhase(id: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetProjectPhaseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectsPhase(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProjectTemplatesApi - factory interface
 * @export
 */
export const ProjectTemplatesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProjectTemplatesApiFp(configuration)
    return {
        /**
         * Returns the details of a specific project template.
         * @summary Get details of a template
         * @param {ProjectTemplatesApiGetProjectTemplateRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getProjectTemplate(requestParameters: ProjectTemplatesApiGetProjectTemplateRequest, ): Promise<GetProjectTemplateResponse> {
            return localVarFp.getProjectTemplate(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * Returns all not deleted project templates. This is a cursor-paginated endpoint. For more information, please refer to our documentation on <a href=\"https://pipedrive.readme.io/docs/core-api-concepts-pagination\" target=\"_blank\" rel=\"noopener noreferrer\">pagination</a>.
         * @summary Get all project templates
         * @param {ProjectTemplatesApiGetProjectTemplatesRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getProjectTemplates(requestParameters: ProjectTemplatesApiGetProjectTemplatesRequest = {}, ): Promise<GetProjectTemplatesResponse> {
            return localVarFp.getProjectTemplates(requestParameters.cursor, requestParameters.limit, ).then((request) => request(axios, basePath));
        },
        /**
         * Returns the details of a specific project board.
         * @summary Get details of a board
         * @param {ProjectTemplatesApiGetProjectsBoardRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getProjectsBoard(requestParameters: ProjectTemplatesApiGetProjectsBoardRequest, ): Promise<GetProjectBoardResponse> {
            return localVarFp.getProjectsBoard(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * Returns the details of a specific project phase.
         * @summary Get details of a phase
         * @param {ProjectTemplatesApiGetProjectsPhaseRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getProjectsPhase(requestParameters: ProjectTemplatesApiGetProjectsPhaseRequest, ): Promise<GetProjectPhaseResponse> {
            return localVarFp.getProjectsPhase(requestParameters.id, ).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getProjectTemplate operation in ProjectTemplatesApi.
 * @export
 * @interface ProjectTemplatesApiGetProjectTemplateRequest
 */
export interface ProjectTemplatesApiGetProjectTemplateRequest {
    /**
     * The ID of the project template
     * @type {number}
     * @memberof ProjectTemplatesApiGetProjectTemplate
     */
    readonly id: number
}

/**
 * Request parameters for getProjectTemplates operation in ProjectTemplatesApi.
 * @export
 * @interface ProjectTemplatesApiGetProjectTemplatesRequest
 */
export interface ProjectTemplatesApiGetProjectTemplatesRequest {
    /**
     * For pagination, the marker (an opaque string value) representing the first item on the next page
     * @type {string}
     * @memberof ProjectTemplatesApiGetProjectTemplates
     */
    readonly cursor?: string

    /**
     * For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned.
     * @type {number}
     * @memberof ProjectTemplatesApiGetProjectTemplates
     */
    readonly limit?: number
}

/**
 * Request parameters for getProjectsBoard operation in ProjectTemplatesApi.
 * @export
 * @interface ProjectTemplatesApiGetProjectsBoardRequest
 */
export interface ProjectTemplatesApiGetProjectsBoardRequest {
    /**
     * The ID of the project board
     * @type {number}
     * @memberof ProjectTemplatesApiGetProjectsBoard
     */
    readonly id: number
}

/**
 * Request parameters for getProjectsPhase operation in ProjectTemplatesApi.
 * @export
 * @interface ProjectTemplatesApiGetProjectsPhaseRequest
 */
export interface ProjectTemplatesApiGetProjectsPhaseRequest {
    /**
     * The ID of the project phase
     * @type {number}
     * @memberof ProjectTemplatesApiGetProjectsPhase
     */
    readonly id: number
}

/**
 * ProjectTemplatesApi - object-oriented interface
 * @export
 * @class ProjectTemplatesApi
 * @extends {BaseAPI}
 */
export class ProjectTemplatesApi extends BaseAPI {
    /**
     * Returns the details of a specific project template.
     * @summary Get details of a template
     * @param {ProjectTemplatesApiGetProjectTemplateRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ProjectTemplatesApi
     */
    public getProjectTemplate(requestParameters: ProjectTemplatesApiGetProjectTemplateRequest, ) {
        return ProjectTemplatesApiFp(this.configuration).getProjectTemplate(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all not deleted project templates. This is a cursor-paginated endpoint. For more information, please refer to our documentation on <a href=\"https://pipedrive.readme.io/docs/core-api-concepts-pagination\" target=\"_blank\" rel=\"noopener noreferrer\">pagination</a>.
     * @summary Get all project templates
     * @param {ProjectTemplatesApiGetProjectTemplatesRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ProjectTemplatesApi
     */
    public getProjectTemplates(requestParameters: ProjectTemplatesApiGetProjectTemplatesRequest = {}, ) {
        return ProjectTemplatesApiFp(this.configuration).getProjectTemplates(requestParameters.cursor, requestParameters.limit, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the details of a specific project board.
     * @summary Get details of a board
     * @param {ProjectTemplatesApiGetProjectsBoardRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ProjectTemplatesApi
     */
    public getProjectsBoard(requestParameters: ProjectTemplatesApiGetProjectsBoardRequest, ) {
        return ProjectTemplatesApiFp(this.configuration).getProjectsBoard(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the details of a specific project phase.
     * @summary Get details of a phase
     * @param {ProjectTemplatesApiGetProjectsPhaseRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ProjectTemplatesApi
     */
    public getProjectsPhase(requestParameters: ProjectTemplatesApiGetProjectsPhaseRequest, ) {
        return ProjectTemplatesApiFp(this.configuration).getProjectsPhase(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }
}
