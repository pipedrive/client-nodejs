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


import axios from "axios";
import { stringify } from "qs";
import { errorInterceptor, responseInterceptor, versionInterceptor } from './base';

export type TokenResponse = {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  api_domain: string;
};

export interface Parameters {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  host?:string;
};

export type ParamKey = keyof Parameters;

export class OAuth2Configuration {
  private axios = axios.create();
  private host: string;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private scope: string | null = null;
  private expiresIn = 0; // expiration value in seconds sent by the OAuth server.
  private expiresAt = 0; // expiration time as number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

  public onTokenUpdate?: (token: TokenResponse) => void;
  private clientId: string;
  private clientSecret: string;
  private redirectUri: string;
  public basePath = "";

  constructor(params: Parameters) {
    this.clientId = this.validateParam(params, 'clientId');
    this.clientSecret = this.validateParam(params, 'clientSecret');
    this.redirectUri = this.validateParam(params, 'redirectUri');
    this.host = params.host || "https://oauth.pipedrive.com";

    this.axios.interceptors.response.use(responseInterceptor, errorInterceptor);
    this.axios.interceptors.request.use(versionInterceptor);
  }

  public get authorizationUrl() {
    return `${this.host}/oauth/authorize?client_id=${
      this.clientId
    }&redirect_uri=${encodeURIComponent(this.redirectUri)}`;
  }

  public getAccessToken = async (): Promise<string> => {
    if (Date.now() > this.expiresAt) {
      const newToken = await this.tokenRefresh();
      this.updateToken(newToken);

      return newToken.access_token;
    }

    return this.accessToken!;
  };

  /**
   * Authorizes the authorization code sent by the server and returns OAuth 2 token.
   * @param {String} code The authorization code sent by the OAuth server.
   * @returns {Object} The OAuth 2 token.
   */
  public authorize = async (code: string): Promise<TokenResponse> => {
    if (!code) {
      throw new Error("Authorization failed. Authorization code is not set.");
    }

    const authorizationUrl = `${this.host}/oauth/token`;

    const clientIdAndSecretInBase64 = Buffer.from(
      `${this.clientId}:${this.clientSecret}`
    ).toString("base64");

    const response = await this.axios.post(
            authorizationUrl,
            stringify({
                code,
                redirect_uri: this.redirectUri,
                grant_type: "authorization_code",
            }),
            {
            headers: {
                "User-Agent": this.getUserAgent(),
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${clientIdAndSecretInBase64}`,
            },
        }
        ) as TokenResponse;

        this.updateToken(response);

        return response;
  };

  public tokenRefresh = async (): Promise<TokenResponse> => {
    const refreshUrl = `${this.host}/oauth/token`;
    const clientIdAndSecretInBase64 = Buffer.from(
      `${this.clientId}:${this.clientSecret}`
    ).toString("base64");

    const response = await this.axios.post(
            refreshUrl,
            stringify({
                refresh_token: this.refreshToken,
                grant_type: "refresh_token",
            }),
            {
                headers: {
                    "User-Agent": this.getUserAgent(),
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Basic ${clientIdAndSecretInBase64}`,
                },
            }
    ) as TokenResponse;

    this.updateToken(response);

    return response;
  };


  /*
   * Updates the ApiClient OAuth 2 authentication properties and invokes the token update callback if it is set.
   * Besides extracting all the values from the provided OAuth 2 token,
   * the expiration time of access token is calculated and set as expiresAt property.
   * @param {Object} token The OAuth 2 token got from the OAuth server.
   */
  public updateToken = (token: TokenResponse | null) => {
    if (!token) {
      return null;
    }

    if (token.access_token) {
      this.accessToken = token.access_token;
    }

    if (token.refresh_token) {
      this.refreshToken = token.refresh_token;
    }

    if (token.expires_in) {
      this.expiresIn = token.expires_in;
      this.expiresAt = Date.now() + token.expires_in * 1000;
    }

    if (token.scope) {
      this.scope = token.scope;
    }

    if (token.api_domain) {
      this.basePath = `${token.api_domain}/api/v1`;
    }

    this.onTokenUpdate?.(token);

    return token;
  };

/**
    * Revoke Refresh Token aka marking an app uninstalled or revoke the Access Token.
    * @param {String} tokenTypeHint values can be: 'access_token' or 'refresh_token'.
*/
  public async revokeToken(tokenTypeHint?: 'access_token' | 'refresh_token') {

    const token = tokenTypeHint === 'refresh_token'
        ? this.refreshToken : encodeURIComponent(this.accessToken);

    const clientId = this.clientId;
    const clientSecret = this.clientSecret;
    const revokeUrl = `${this.host}/oauth/revoke?`;
    const clientIdAndSecretInBase64 = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const response = await this.axios.post(
      revokeUrl,
      stringify({
        token,
        token_type_hint: tokenTypeHint
      }),{
        headers: {
          'User-Agent': this.getUserAgent(),
          "Content-Type": "application/x-www-form-urlencoded",
          'Authorization': `Basic ${clientIdAndSecretInBase64}`,

        }
      }
    );

    return response;
  }

  private getUserAgent = () => {
    let version;

    try {
        version = require('../package.json').version;
    } catch (error) {
        version = '22.x';
    }

    return `Pipedrive-SDK-Javascript-${version}`;
  };

  private validateParam = (params: Parameters, key: ParamKey): string => {
    if (!params[key]) {
      throw new Error(`OAuth 2 property ${key} is not set.`);
    }
    return params[key];
  }
}


export interface ConfigurationParameters {
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    formDataCtor?: new () => any;
    basePath?: string;
}

export class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string;
    /**
     * base options for axios calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any;
    /**
     * The FormData constructor that will be used to create multipart form data
     * requests. You can inject this here so that execution environments that
     * do not support the FormData class can still run the generated client.
     *
     * @type {new () => FormData}
     */
    formDataCtor?: new () => any;

    constructor(param: ConfigurationParameters) {
        this.apiKey = param.apiKey;
        this.accessToken = param.accessToken;
        this.formDataCtor = param.formDataCtor;
        this.basePath = param.basePath;

        /** Values either not supported or set by the packaged already **/
        this.username = undefined;
        this.password = undefined;
        this.baseOptions = undefined;

    }

    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    public isJsonMime(mime: string): boolean {
        const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}


