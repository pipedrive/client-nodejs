/* tslint:disable */
/* eslint-disable */
/**
 * Pipedrive API v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
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
import axios from 'axios';
import { join, dirname } from 'path';
import { existsSync } from 'fs';

export const BASE_PATH = "https://api.pipedrive.com/api/v2".replace(/\/+$/, "");

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

const searchForPackageJson = (startPath: string): string | null => {
    const filePath = join(startPath, 'package.json');

    if (existsSync(filePath)) {
        return filePath;
    }

    const parentDir = dirname(startPath);

    // Stop if we've reached the root directory
    if (parentDir.endsWith('/pipedrive') || parentDir === startPath) {
        return null;
    }

    return searchForPackageJson(parentDir);
};


export const versionInterceptor = async (config:InternalAxiosRequestConfig) => {
    let version:string;
    try {
        const path = searchForPackageJson(__dirname);
        
        version = path ? require(path).version : '22.x';
    } catch (error) {
        version = '22.x';
    }
    
    config.headers['User-Agent'] = `Pipedrive-SDK-Javascript-${version}`;
    return config;
}

export const responseInterceptor = (response: AxiosResponse) => {
    return response?.data ? response.data: response;
};

export const errorInterceptor = (error: AxiosError) => {
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
};

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined;
    protected basePath: string = BASE_PATH;
    protected axios = axios.create();
    constructor(configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }

        this.axios.interceptors.response.use(responseInterceptor, errorInterceptor);
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



