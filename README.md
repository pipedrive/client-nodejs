# Pipedrive client for NodeJS based apps

Pipedrive is a sales pipeline software that gets you organized. It's a powerful sales CRM with effortless sales pipeline management. See www.pipedrive.com for details.

This is the official Pipedrive API wrapper-client for NodeJS based apps, distributed by Pipedrive Inc freely under the MIT license. It provides convenient access to the Pipedrive API, allowing you to operate with objects such as Deals, Persons, Organizations, Products and much more.

## Installation

```
npm install pipedrive --save
```

## API Reference

The Pipedrive RESTful API Reference can be found at https://developers.pipedrive.com/docs/api/v1.
Pipedrive API’s core concepts for its usage can be found in our [Developer documentation](https://pipedrive.readme.io/docs/core-api-concepts-about-pipedrive-api)

## API versions

This SDK supports two API versions, each with its own namespace:

- **[API v1 endpoints](docs/v1.md)**: List of endpoints for API version 1.
- **[API v2 endpoints](docs/v2.md)**: List of endpoints for API version 2.

**Note:** Each API version requires separate configuration specific to that version. Ensure you are using the correct namespace and setup for the version you intend to use.

## How to use it?

### With a pre-set API token

You can retrieve the api_token from your existing Pipedrive account’s settings page. A step-by-step guide is available [here](https://pipedrive.readme.io/docs/how-to-find-the-api-token).

```typescript
import express from "express";
import { Configuration, DealsApi } from "pipedrive/v1";

const app = express();

const PORT = 3000;

// Configure Client with API key authorization
const apiConfig = new Configuration({
  apiKey: "YOUR_API_TOKEN_HERE",
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", async (req, res) => {
  const dealsApi = new DealsApi(apiConfig);
  const response = await dealsApi.getDeals();
  const { data: deals } = response;

  res.send(deals);
});
```

### With OAuth 2

If you would like to use an OAuth access token for making API calls, then make sure the API key described in the previous section is not set or is set to an empty string. If both API token and OAuth access token are set, then the API token takes precedence.

To set up authentication in the API client, you need the following information. You can receive the necessary client tokens through a Sandbox account (get it [here](https://developers.pipedrive.com/start-here)) and generate the tokens (detailed steps [here](https://pipedrive.readme.io/docs/marketplace-manager#section-how-to-get-your-client-id-and-client-secret)).

| Parameter    | Description                                  |
| ------------ | -------------------------------------------- |
| clientId     | OAuth 2 Client ID                            |
| clientSecret | OAuth 2 Client Secret                        |
| redirectUri  | OAuth 2 Redirection endpoint or Callback Uri |

Next, initialize the API client as follows:

```typescript
import { OAuth2Configuration, Configuration } from 'pipedrive/v1';

// Configuration parameters and credentials
const oauth2 = new OAuth2Configuration({
  clientId: "clientId", // OAuth 2 Client ID
  clientSecret: "clientSecret",  // OAuth 2 Client Secret
  redirectUri: 'redirectUri' // OAuth 2 Redirection endpoint or Callback Uri
});

const apiConfig = new Configuration({
    accessToken: oauth2.getAccessToken,
    basePath: oauth2.basePath,
});

```

You must now authorize the client.

### Authorizing your client

Your application must obtain user authorization before it can execute an endpoint call. The SDK uses OAuth 2.0 authorization to obtain a user's consent to perform an API request on the user's behalf. Details about how the OAuth2.0 flow works in Pipedrive, how long tokens are valid, and more, can be found [here](https://pipedrive.readme.io/docs/marketplace-oauth-authorization).

#### 1. Obtaining user consent

To obtain user's consent, you must redirect the user to the authorization page. The `authorizationUrl` returns the URL to the authorization page.

```typescript
// open up the authUrl in the browser
const authUrl = oauth2.authorizationUrl;
```

#### 2. Handle the OAuth server response

Once the user responds to the consent request, the OAuth 2.0 server responds to your application's access request by using the URL specified in the request.

If the user approves the request, the authorization code will be sent as the `code` query string:

```
https://example.com/oauth/callback?code=XXXXXXXXXXXXXXXXXXXXXXXXX
```

If the user does not approve the request, the response contains an `error` query string:

```
https://example.com/oauth/callback?error=access_denied
```

#### 3. Authorize the client using the code

After the server receives the code, it can exchange this for an _access token_. The access token is an object containing information for authorizing the client and refreshing the token itself. In the API client all the access token fields are held separately in the `OAuth2Configuration` class. Additionally access token expiration time as an `OAuth2Configuration.expiresAt` field is calculated. It is measured in the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

```typescript
const token = await oauth2.authorize(code);
```

The Node.js SDK supports only promises. So, the authorize call returns a promise.

### Refreshing token

Access tokens may expire after sometime, if it necessary you can do it manually.

```typescript
const newToken = await oauth2.tokenRefresh();
```

If the access token expires, the SDK will attempt to automatically refresh it before the next endpoint call which requires authentication.

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

This code snippet stores the access token in a session for an express application. It uses the [cookie-parser](https://www.npmjs.com/package/cookie-parser) and [cookie-session](https://www.npmjs.com/package/cookie-session) npm packages for storing the access token.

```typescript
import express from "express";
import cookieParse from "cookie-parser";
import cookeSession from "cookie-session";
import { Configuration, DealsApi, OAuth2Configuration } from "pipedrive/v1";

const app = express();

app.use(cookieParser());
app.use(cookieSession({
    name: "session",
    keys: ["key1"]
}));

...

// store access token in the session
// note that this is only the access token field value not the whole token object
req.session.accessToken = await oauth.getAccessToken();
```

However, since the SDK will attempt to automatically refresh the access token when it expires,
it is recommended that you register a **token update callback** to detect any change to the access token.

```typescript
oauth2.onTokenUpdate = function (token) {
  // getting the updated token
  // here the token is an object, you can store the whole object or extract fields into separate values
  req.session.token = token;
};
```

The token update callback will be fired upon authorization as well as token refresh.

### Complete example

This example demonstrates an express application (which uses [cookie-parser](https://www.npmjs.com/package/cookie-parser) and [cookie-session](https://www.npmjs.com/package/cookie-session)) for handling session persistence.

In this example, there are 2 endpoints. The base endpoint `'/'` first checks if the token is stored in the session.
If it is, API endpoints can be called using the corresponding SDK controllers.

However, if the token is not set in the session, then authorization URL is built and opened up.
The response comes back at the `'/callback'` endpoint, which uses the code to authorize the client and store the token in the session.
It then redirects back to the base endpoint for calling endpoints from the SDK.

```typescript

import express from "express";
import { Configuration, DealsApi, OAuth2Configuration } from "pipedrive/v1";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(cookieParser());
app.use(cookieSession({
    name: "session",
    keys: ["key1"]
}));

const PORT = 3000;


const oauth2 = new OAuth2Configuration({
    clientId: "clientId", // OAuth 2 Client ID
    clientSecret: "clientSecret",  // OAuth 2 Client Secret
    redirectUri: 'redirectUri' // OAuth 2 Redirection endpoint or Callback Uri
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
  try {
    // method will handle return null if token is not available in the session
    const token = oauth2.updateToken(req.session?.accessToken);

     if (!token) {
        const authUrl = oauth2.authorizationUrl;
        return res.redirect(authUrl);
    }


    const apiConfig = new Configuration({
        accessToken: oauth2.getAccessToken,
        basePath: oauth2.basePath,
    });

    // token is already set in the session
    // now make API calls as required
    // client will automatically refresh the token when it expires and call the token update callback
    const dealsApi = new DealsApi(apiConfig)

    const response = await dealsApi.getDeals();
    const { data: deals } = response;

    return res.send(deals);
  } catch (error){
      console.error(error)
      return res.status(500).send(error)
  }
});

app.get('/callback', async (req, res) => {
    try {
        const authCode = req.query.code as string;
        const newAccessToken = await oauth2.authorize(authCode);

        req.session.accessToken = newAccessToken;
        return res.redirect("/");
    }catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
});

```