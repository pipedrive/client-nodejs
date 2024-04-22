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


import type { Configuration } from './configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import type { AxiosError, AxiosResponse, AxiosRequestConfig , InternalAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';

export const BASE_PATH = "https://api.pipedrive.com/v1".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: AxiosRequestConfig;
}


/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined;
    protected basePath: string = BASE_PATH;
    protected axios = globalAxios.create();
    constructor(configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }


        const versionInterceptor = (config:InternalAxiosRequestConfig) => {
                let version:string;
                try {
                    version = require('../package.json').version;
                    } catch (error) {
                    version = '22.x';
                }
                config.headers['User-Agent'] = `Pipedrive-SDK-Javascript-${version}`;
                return config;
        }

        const interceptor = (response: AxiosResponse) => {
            return response?.data ? response.data: response;
        };

        const errorInterceptor = (error: AxiosError) => {
            if (error.response && error.response.data) {
                return Promise.reject(error.response.data);
            }
            return Promise.reject(error);
        };

        this.axios.interceptors.response.use(interceptor, errorInterceptor);
        this.axios.interceptors.request.use(versionInterceptor);
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
        this.name = "RequiredError"
    }
}



