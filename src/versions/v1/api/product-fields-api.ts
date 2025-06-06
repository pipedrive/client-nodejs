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
import { DeleteProductFieldResponse } from '../models';
// @ts-ignore
import { DeleteProductFieldsResponse } from '../models';
// @ts-ignore
import { FailResponse } from '../models';
// @ts-ignore
import { GetProductFieldResponse } from '../models';
// @ts-ignore
import { GetProductFieldsResponse } from '../models';
// @ts-ignore
import { ProductFieldAllOf } from '../models';
// @ts-ignore
import { UpdateProductFieldResponse } from '../models';
/**
 * ProductFieldsApi - axios parameter creator
 * @export
 */
export const ProductFieldsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds a new product field. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">adding a new custom field</a>.
         * @summary Add a new product field
         * @param {ProductFieldAllOf} [ProductFieldAllOf] 

         * @throws {RequiredError}
         */
        addProductField: async (ProductFieldAllOf?: ProductFieldAllOf, ): Promise<RequestArgs> => {
            const localVarPath = `/productFields`;
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
            await setApiKeyToObject(localVarHeaderParameter, "x-api-token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["products:full"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = serializeDataIfNeeded(ProductFieldAllOf, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Marks a product field as deleted. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">deleting a custom field</a>.
         * @summary Delete a product field
         * @param {number} id The ID of the product field

         * @throws {RequiredError}
         */
        deleteProductField: async (id: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteProductField', 'id', id)
            const localVarPath = `/productFields/{id}`
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["products:full"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Marks multiple fields as deleted.
         * @summary Delete multiple product fields in bulk
         * @param {string} ids The comma-separated field IDs to delete

         * @throws {RequiredError}
         */
        deleteProductFields: async (ids: string, ): Promise<RequestArgs> => {
            // verify required parameter 'ids' is not null or undefined
            assertParamExists('deleteProductFields', 'ids', ids)
            const localVarPath = `/productFields`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["products:full"], configuration)

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
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
         * Returns data about a specific product field.
         * @summary Get one product field
         * @param {number} id The ID of the product field

         * @throws {RequiredError}
         */
        getProductField: async (id: number, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProductField', 'id', id)
            const localVarPath = `/productFields/{id}`
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["products:read", "products:full"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns data about all product fields.
         * @summary Get all product fields
         * @param {number} [start] Pagination start
         * @param {number} [limit] Items shown per page

         * @throws {RequiredError}
         */
        getProductFields: async (start?: number, limit?: number, ): Promise<RequestArgs> => {
            const localVarPath = `/productFields`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["products:read", "products:full"], configuration)

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
         * Updates a product field. For more information, see the tutorial for <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields\' values</a>.
         * @summary Update a product field
         * @param {number} id The ID of the product field
         * @param {UpdateProductFieldResponse} [UpdateProductFieldResponse] 

         * @throws {RequiredError}
         */
        updateProductField: async (id: number, UpdateProductFieldResponse?: UpdateProductFieldResponse, ): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateProductField', 'id', id)
            const localVarPath = `/productFields/{id}`
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

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-token", configuration)

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["products:full"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, };
            localVarRequestOptions.data = serializeDataIfNeeded(UpdateProductFieldResponse, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};


/**
 * ProductFieldsApi - functional programming interface
 * @export
 */
export const ProductFieldsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductFieldsApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds a new product field. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">adding a new custom field</a>.
         * @summary Add a new product field
         * @param {ProductFieldAllOf} [ProductFieldAllOf] 

         * @throws {RequiredError}
         */
        async addProductField(ProductFieldAllOf?: ProductFieldAllOf, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetProductFieldResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addProductField(ProductFieldAllOf, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Marks a product field as deleted. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">deleting a custom field</a>.
         * @summary Delete a product field
         * @param {number} id The ID of the product field

         * @throws {RequiredError}
         */
        async deleteProductField(id: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<DeleteProductFieldResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProductField(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Marks multiple fields as deleted.
         * @summary Delete multiple product fields in bulk
         * @param {string} ids The comma-separated field IDs to delete

         * @throws {RequiredError}
         */
        async deleteProductFields(ids: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<DeleteProductFieldsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProductFields(ids, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns data about a specific product field.
         * @summary Get one product field
         * @param {number} id The ID of the product field

         * @throws {RequiredError}
         */
        async getProductField(id: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetProductFieldResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProductField(id, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns data about all product fields.
         * @summary Get all product fields
         * @param {number} [start] Pagination start
         * @param {number} [limit] Items shown per page

         * @throws {RequiredError}
         */
        async getProductFields(start?: number, limit?: number, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetProductFieldsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProductFields(start, limit, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a product field. For more information, see the tutorial for <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields\' values</a>.
         * @summary Update a product field
         * @param {number} id The ID of the product field
         * @param {UpdateProductFieldResponse} [UpdateProductFieldResponse] 

         * @throws {RequiredError}
         */
        async updateProductField(id: number, UpdateProductFieldResponse?: UpdateProductFieldResponse, ): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<GetProductFieldResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProductField(id, UpdateProductFieldResponse, );
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProductFieldsApi - factory interface
 * @export
 */
export const ProductFieldsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductFieldsApiFp(configuration)
    return {
        /**
         * Adds a new product field. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">adding a new custom field</a>.
         * @summary Add a new product field
         * @param {ProductFieldsApiAddProductFieldRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        addProductField(requestParameters: ProductFieldsApiAddProductFieldRequest = {}, ): Promise<GetProductFieldResponse> {
            return localVarFp.addProductField(requestParameters.ProductFieldAllOf, ).then((request) => request(axios, basePath));
        },
        /**
         * Marks a product field as deleted. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">deleting a custom field</a>.
         * @summary Delete a product field
         * @param {ProductFieldsApiDeleteProductFieldRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        deleteProductField(requestParameters: ProductFieldsApiDeleteProductFieldRequest, ): Promise<DeleteProductFieldResponse> {
            return localVarFp.deleteProductField(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * Marks multiple fields as deleted.
         * @summary Delete multiple product fields in bulk
         * @param {ProductFieldsApiDeleteProductFieldsRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        deleteProductFields(requestParameters: ProductFieldsApiDeleteProductFieldsRequest, ): Promise<DeleteProductFieldsResponse> {
            return localVarFp.deleteProductFields(requestParameters.ids, ).then((request) => request(axios, basePath));
        },
        /**
         * Returns data about a specific product field.
         * @summary Get one product field
         * @param {ProductFieldsApiGetProductFieldRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getProductField(requestParameters: ProductFieldsApiGetProductFieldRequest, ): Promise<GetProductFieldResponse> {
            return localVarFp.getProductField(requestParameters.id, ).then((request) => request(axios, basePath));
        },
        /**
         * Returns data about all product fields.
         * @summary Get all product fields
         * @param {ProductFieldsApiGetProductFieldsRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        getProductFields(requestParameters: ProductFieldsApiGetProductFieldsRequest = {}, ): Promise<GetProductFieldsResponse> {
            return localVarFp.getProductFields(requestParameters.start, requestParameters.limit, ).then((request) => request(axios, basePath));
        },
        /**
         * Updates a product field. For more information, see the tutorial for <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields\' values</a>.
         * @summary Update a product field
         * @param {ProductFieldsApiUpdateProductFieldRequest} requestParameters Request parameters.

         * @throws {RequiredError}
         */
        updateProductField(requestParameters: ProductFieldsApiUpdateProductFieldRequest, ): Promise<GetProductFieldResponse> {
            return localVarFp.updateProductField(requestParameters.id, requestParameters.UpdateProductFieldResponse, ).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addProductField operation in ProductFieldsApi.
 * @export
 * @interface ProductFieldsApiAddProductFieldRequest
 */
export interface ProductFieldsApiAddProductFieldRequest {
    /**
     * 
     * @type {ProductFieldAllOf}
     * @memberof ProductFieldsApiAddProductField
     */
    readonly ProductFieldAllOf?: ProductFieldAllOf
}

/**
 * Request parameters for deleteProductField operation in ProductFieldsApi.
 * @export
 * @interface ProductFieldsApiDeleteProductFieldRequest
 */
export interface ProductFieldsApiDeleteProductFieldRequest {
    /**
     * The ID of the product field
     * @type {number}
     * @memberof ProductFieldsApiDeleteProductField
     */
    readonly id: number
}

/**
 * Request parameters for deleteProductFields operation in ProductFieldsApi.
 * @export
 * @interface ProductFieldsApiDeleteProductFieldsRequest
 */
export interface ProductFieldsApiDeleteProductFieldsRequest {
    /**
     * The comma-separated field IDs to delete
     * @type {string}
     * @memberof ProductFieldsApiDeleteProductFields
     */
    readonly ids: string
}

/**
 * Request parameters for getProductField operation in ProductFieldsApi.
 * @export
 * @interface ProductFieldsApiGetProductFieldRequest
 */
export interface ProductFieldsApiGetProductFieldRequest {
    /**
     * The ID of the product field
     * @type {number}
     * @memberof ProductFieldsApiGetProductField
     */
    readonly id: number
}

/**
 * Request parameters for getProductFields operation in ProductFieldsApi.
 * @export
 * @interface ProductFieldsApiGetProductFieldsRequest
 */
export interface ProductFieldsApiGetProductFieldsRequest {
    /**
     * Pagination start
     * @type {number}
     * @memberof ProductFieldsApiGetProductFields
     */
    readonly start?: number

    /**
     * Items shown per page
     * @type {number}
     * @memberof ProductFieldsApiGetProductFields
     */
    readonly limit?: number
}

/**
 * Request parameters for updateProductField operation in ProductFieldsApi.
 * @export
 * @interface ProductFieldsApiUpdateProductFieldRequest
 */
export interface ProductFieldsApiUpdateProductFieldRequest {
    /**
     * The ID of the product field
     * @type {number}
     * @memberof ProductFieldsApiUpdateProductField
     */
    readonly id: number

    /**
     * 
     * @type {UpdateProductFieldResponse}
     * @memberof ProductFieldsApiUpdateProductField
     */
    readonly UpdateProductFieldResponse?: UpdateProductFieldResponse
}

/**
 * ProductFieldsApi - object-oriented interface
 * @export
 * @class ProductFieldsApi
 * @extends {BaseAPI}
 */
export class ProductFieldsApi extends BaseAPI {
    /**
     * Adds a new product field. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">adding a new custom field</a>.
     * @summary Add a new product field
     * @param {ProductFieldsApiAddProductFieldRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ProductFieldsApi
     */
    public addProductField(requestParameters: ProductFieldsApiAddProductFieldRequest = {}, ) {
        return ProductFieldsApiFp(this.configuration).addProductField(requestParameters.ProductFieldAllOf, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks a product field as deleted. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">deleting a custom field</a>.
     * @summary Delete a product field
     * @param {ProductFieldsApiDeleteProductFieldRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ProductFieldsApi
     */
    public deleteProductField(requestParameters: ProductFieldsApiDeleteProductFieldRequest, ) {
        return ProductFieldsApiFp(this.configuration).deleteProductField(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks multiple fields as deleted.
     * @summary Delete multiple product fields in bulk
     * @param {ProductFieldsApiDeleteProductFieldsRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ProductFieldsApi
     */
    public deleteProductFields(requestParameters: ProductFieldsApiDeleteProductFieldsRequest, ) {
        return ProductFieldsApiFp(this.configuration).deleteProductFields(requestParameters.ids, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns data about a specific product field.
     * @summary Get one product field
     * @param {ProductFieldsApiGetProductFieldRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ProductFieldsApi
     */
    public getProductField(requestParameters: ProductFieldsApiGetProductFieldRequest, ) {
        return ProductFieldsApiFp(this.configuration).getProductField(requestParameters.id, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns data about all product fields.
     * @summary Get all product fields
     * @param {ProductFieldsApiGetProductFieldsRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ProductFieldsApi
     */
    public getProductFields(requestParameters: ProductFieldsApiGetProductFieldsRequest = {}, ) {
        return ProductFieldsApiFp(this.configuration).getProductFields(requestParameters.start, requestParameters.limit, ).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a product field. For more information, see the tutorial for <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields\' values</a>.
     * @summary Update a product field
     * @param {ProductFieldsApiUpdateProductFieldRequest} requestParameters Request parameters.

     * @throws {RequiredError}
     * @memberof ProductFieldsApi
     */
    public updateProductField(requestParameters: ProductFieldsApiUpdateProductFieldRequest, ) {
        return ProductFieldsApiFp(this.configuration).updateProductField(requestParameters.id, requestParameters.UpdateProductFieldResponse, ).then((request) => request(this.axios, this.basePath));
    }
}
