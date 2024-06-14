# Pipedrive client for NodeJS based apps
Pipedrive is a sales pipeline software that gets you organized.
It's a powerful sales CRM with effortless sales pipeline management.
See www.pipedrive.com for details.

This is the official Pipedrive API wrapper-client for NodeJS based apps, distributed by Pipedrive Inc freely under the MIT licence.
It provides convenient access to the Pipedrive API, allowing you to operate with objects such as Deals, Persons, Organizations, Products and much more.

## Table of Contents 
- [Installation](#installation)

- [API Reference](#api-reference)

- [How to use it](#how-to-use-it)

  - [With a pre-set API token](#with-a-pre-set-api-token)

  - [With OAuth2](#with-oauth2)

  - [Authorizing your client](#authorizing-your-client)

  - [Storing an access token for reuse](#storing-an-access-token-for-reuse)

  - [Complete example](#complete-example)

- [Documentation for Authorization](#documentation-for-authorization)

- [Documentation for API Endpoints](#documentation-for-api-endpoints)

- [Documentation for Models](#documentation-for-models)

## Installation
```
npm install pipedrive
```

## API Reference
The Pipedrive RESTful API Reference can be found at https://developers.pipedrive.com/docs/api/v1.
Pipedrive API’s core concepts for its usage can be found in our [Developer documentation](https://pipedrive.readme.io/docs/core-api-concepts-about-pipedrive-api).

## How to use it

> **Warning**
>
> The `pipedrive.ApiClient.instance` has been deprecated.
>
> Please, initialise a `new pipedrive.ApiClient()` instance separately for each request instead.

### With a pre-set API token
You can retrieve the api_token from your existing Pipedrive account’s settings page. A step-by-step guide is available [here](https://pipedrive.readme.io/docs/how-to-find-the-api-token).

```JavaScript
const express = require('express');
const app = express();
const pipedrive = require('pipedrive');

const PORT = 1800;

const defaultClient = new pipedrive.ApiClient();

// Configure API key authorization: apiToken
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = 'YOUR_API_TOKEN_HERE';

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
    const api = new pipedrive.DealsApi(defaultClient);
    const deals = await api.getDeals();

    res.send(deals);
});

```

### With OAuth2
If you would like to use an OAuth access token for making API calls, then make sure the API key described in the previous section is not set or is set to an empty string. If both API token and OAuth access token are set, then the API token takes precedence.

To set up authentication in the API client, you need the following information. You can receive the necessary client tokens through a Sandbox account (get it [here](https://developers.pipedrive.com/start-here)) and generate the tokens (detailed steps [here](https://pipedrive.readme.io/docs/marketplace-manager#section-how-to-get-your-client-id-and-client-secret)).

| Parameter | Description |
|-----------|-------------|
| clientId | OAuth 2 Client ID |
| clientSecret | OAuth 2 Client Secret |
| redirectUri | OAuth 2 Redirection endpoint or Callback Uri |

Next, initialize the API client as follows:

```JavaScript
const pipedrive = require('pipedrive');

const apiClient = new pipedrive.ApiClient();

// Configuration parameters and credentials
let oauth2 = apiClient.authentications.oauth2;
oauth2.clientId = 'clientId'; // OAuth 2 Client ID
oauth2.clientSecret = 'clientSecret'; // OAuth 2 Client Secret
oauth2.redirectUri = 'redirectUri'; // OAuth 2 Redirection endpoint or Callback Uri
```

You must now authorize the client.

### Authorizing your client

Your application must obtain user authorization before it can execute an endpoint call. The SDK uses OAuth 2.0 authorization to obtain a user's consent to perform an API request on the user's behalf. Details about how the OAuth2.0 flow works in Pipedrive, how long tokens are valid, and more, can be found [here](https://pipedrive.readme.io/docs/marketplace-oauth-authorization).

#### 1. Obtaining user consent

To obtain user's consent, you must redirect the user to the authorization page. The `buildAuthorizationUrl()` method creates the URL to the authorization page.

```JavaScript
const authUrl = apiClient.buildAuthorizationUrl();
// open up the authUrl in the browser
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

After the server receives the code, it can exchange this for an *access token*.
The access token is an object containing information for authorizing the client and refreshing the token itself.
In the API client all the access token fields are held separately in the `authentications.oauth2` object.
Additionally access token expiration time as an `authentications.oauth2.expiresAt` field is calculated.
It is measured in the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

```JavaScript
const tokenPromise = apiClient.authorize(code);
```
The Node.js SDK supports only promises. So, the authorize call returns a promise.

### Refreshing token

Access tokens may expire after sometime. To extend its lifetime, you must refresh the token.

```JavaScript
const refreshPromise = apiClient.refreshToken();
refreshPromise.then(() => {
    // token has been refreshed
} , (exception) => {
    // error occurred, exception will be of type src/exceptions/OAuthProviderException
});
```

If the access token expires, the SDK will attempt to automatically refresh it before the next endpoint call which requires authentication.

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

This code snippet stores the access token in a session for an express application.
It uses the [cookie-parser](https://www.npmjs.com/package/cookie-parser) and [cookie-session](https://www.npmjs.com/package/cookie-session) npm packages for storing the access token.

```JavaScript
const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const app = express();
app.use(cookieParser());
app.use(cookieSession({
    name: 'session',
    keys: ['key1']
}));

const lib = require('pipedrive');
...
// store access token in the session
// note that this is only the access token field value not the whole token object
req.session.accessToken = apiClient.authentications.oauth2.accessToken;
```

However, since the SDK will attempt to automatically refresh the access token when it expires,
it is recommended that you register a **token update callback** to detect any change to the access token.

```JavaScript
apiClient.authentications.oauth2.tokenUpdateCallback = function(token) {
    // getting the updated token
    // here the token is an object, you can store the whole object or extract fields into separate values
    req.session.token = token;
}
```

The token update callback will be fired upon authorization as well as token refresh.

To authorize a client from a stored access token, just set the access token in api client oauth2 authentication object along with the other configuration parameters before making endpoint calls:
> NB! This code only supports one client and should not be used as production code. Please store a separate access token for each client.

```JavaScript
const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const app = express();
app.use(cookieParser());
app.use(cookieSession({
    name: 'session',
    keys: ['key1']
}));

const lib = require('pipedrive');

app.get('/', (req, res) => {
    apiClient.authentications.oauth2.accessToken = req.session.accessToken; // the access token stored in the session
});
```

### Complete example

This example demonstrates an express application (which uses [cookie-parser](https://www.npmjs.com/package/cookie-parser) and [cookie-session](https://www.npmjs.com/package/cookie-session)) for handling session persistence.

In this example, there are 2 endpoints. The base endpoint `'/'` first checks if the token is stored in the session.
If it is, API endpoints can be called using the corresponding SDK controllers.

However, if the token is not set in the session, then authorization URL is built and opened up.
The response comes back at the `'/callback'` endpoint, which uses the code to authorize the client and store the token in the session.
It then redirects back to the base endpoint for calling endpoints from the SDK.

```JavaScript
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

app.use(cookieParser());
app.use(cookieSession({
    name: 'session',
    keys: ['key1']
}));
const PORT = 1800;

const pipedrive = require('pipedrive');

const apiClient = new pipedrive.ApiClient();

let oauth2 = apiClient.authentications.oauth2;
oauth2.clientId = 'clientId'; // OAuth 2 Client ID
oauth2.clientSecret = 'clientSecret'; // OAuth 2 Client Secret
oauth2.redirectUri = 'http://localhost:1800/callback'; // OAuth 2 Redirection endpoint or Callback Uri

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
    if (req.session.accessToken !== null && req.session.accessToken !== undefined) {
        // token is already set in the session
        // now make API calls as required
        // client will automatically refresh the token when it expires and call the token update callback
        const api = new pipedrive.DealsApi(apiClient);
        const deals = await api.getDeals();

        res.send(deals);
    } else {
        const authUrl = apiClient.buildAuthorizationUrl();;

        res.redirect(authUrl);
    }
});

app.get('/callback', (req, res) => {
    const authCode = req.query.code;
    const promise = apiClient.authorize(authCode);

    promise.then(() => {
        req.session.accessToken = apiClient.authentications.oauth2.accessToken;
        res.redirect('/');
    }, (exception) => {
        // error occurred, exception will be of type src/exceptions/OAuthProviderException
    });
});

```

## Documentation for Authorization



### api_key


- **Type**: API key
- **API key parameter name**: api_token
- **Location**: URL query string



### basic_authentication

- **Type**: HTTP basic authentication



### oauth2


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://oauth.pipedrive.com/oauth/authorize
- **Scopes**: 
  - base: Read settings of the authorized user and currencies in an account
  - deals:read: Read most of the data about deals and related entities - deal fields, products, followers, participants; all notes, files, filters, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)
  - deals:full: Create, read, update and delete deals, its participants and followers; all files, notes, and filters. It also includes read access to deal fields, pipelines, stages, and statistics. Does not include access to activities (except the last and next activity related to a deal)
  - mail:read: Read mail threads and messages
  - mail:full: Read, update and delete mail threads. Also grants read access to mail messages
  - activities:read: Read activities, its fields and types; all files and filters
  - activities:full: Create, read, update and delete activities and all files and filters. Also includes read access to activity fields and types
  - contacts:read: Read the data about persons and organizations, their related fields and followers; also all notes, files, filters
  - contacts:full: Create, read, update and delete persons and organizations and their followers; all notes, files, filters. Also grants read access to contacts-related fields
  - products:read: Read products, its fields, files, followers and products connected to a deal
  - products:full: Create, read, update and delete products and its fields; add products to deals
  - projects:read: Read projects and its fields, tasks and project templates
  - projects:full: Create, read, update and delete projects and its fields; add projects templates and project related tasks
  - users:read: Read data about users (people with access to a Pipedrive account), their permissions, roles and followers
  - recents:read: Read all recent changes occurred in an account. Includes data about activities, activity types, deals, files, filters, notes, persons, organizations, pipelines, stages, products and users
  - search:read: Search across the account for deals, persons, organizations, files and products, and see details about the returned results
  - admin: Allows to do many things that an administrator can do in a Pipedrive company account - create, read, update and delete pipelines and its stages; deal, person and organization fields; activity types; users and permissions, etc. It also allows the app to create webhooks and fetch and delete webhooks that are created by the app
  - leads:read: Read data about leads and lead labels
  - leads:full: Create, read, update and delete leads and lead labels
  - phone-integration: Enables advanced call integration features like logging call duration and other metadata, and play call recordings inside Pipedrive
  - goals:read: Read data on all goals
  - goals:full: Create, read, update and delete goals
  - video-calls: Allows application to register as a video call integration provider and create conference links
  - messengers-integration: Allows application to register as a messengers integration provider and allows them to deliver incoming messages and their statuses



## Documentation for API Endpoints

All URIs are relative to *https://api.pipedrive.com/v1*

Code examples are available through the links in the list below or on the 
[Pipedrive Developers Tutorials](https://pipedrive.readme.io/docs/tutorials) page

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Pipedrive.ActivitiesApi* | [**addActivity**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivitiesApi.md#addActivity) | **POST** /activities | Add an activity
*Pipedrive.ActivitiesApi* | [**deleteActivities**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivitiesApi.md#deleteActivities) | **DELETE** /activities | Delete multiple activities in bulk
*Pipedrive.ActivitiesApi* | [**deleteActivity**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivitiesApi.md#deleteActivity) | **DELETE** /activities/{id} | Delete an activity
*Pipedrive.ActivitiesApi* | [**getActivities**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivitiesApi.md#getActivities) | **GET** /activities | Get all activities assigned to a particular user
*Pipedrive.ActivitiesApi* | [**getActivitiesCollection**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivitiesApi.md#getActivitiesCollection) | **GET** /activities/collection | Get all activities (BETA)
*Pipedrive.ActivitiesApi* | [**getActivity**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivitiesApi.md#getActivity) | **GET** /activities/{id} | Get details of an activity
*Pipedrive.ActivitiesApi* | [**updateActivity**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivitiesApi.md#updateActivity) | **PUT** /activities/{id} | Update an activity
*Pipedrive.ActivityFieldsApi* | [**getActivityFields**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityFieldsApi.md#getActivityFields) | **GET** /activityFields | Get all activity fields
*Pipedrive.ActivityTypesApi* | [**addActivityType**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypesApi.md#addActivityType) | **POST** /activityTypes | Add new activity type
*Pipedrive.ActivityTypesApi* | [**deleteActivityType**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypesApi.md#deleteActivityType) | **DELETE** /activityTypes/{id} | Delete an activity type
*Pipedrive.ActivityTypesApi* | [**deleteActivityTypes**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypesApi.md#deleteActivityTypes) | **DELETE** /activityTypes | Delete multiple activity types in bulk
*Pipedrive.ActivityTypesApi* | [**getActivityTypes**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypesApi.md#getActivityTypes) | **GET** /activityTypes | Get all activity types
*Pipedrive.ActivityTypesApi* | [**updateActivityType**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypesApi.md#updateActivityType) | **PUT** /activityTypes/{id} | Update an activity type
*Pipedrive.BillingApi* | [**getCompanyAddons**](https://github.com/pipedrive/client-nodejs/blob/master/docs/BillingApi.md#getCompanyAddons) | **GET** /billing/subscriptions/addons | Get all add-ons for a single company
*Pipedrive.CallLogsApi* | [**addCallLog**](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogsApi.md#addCallLog) | **POST** /callLogs | Add a call log
*Pipedrive.CallLogsApi* | [**addCallLogAudioFile**](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogsApi.md#addCallLogAudioFile) | **POST** /callLogs/{id}/recordings | Attach an audio file to the call log
*Pipedrive.CallLogsApi* | [**deleteCallLog**](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogsApi.md#deleteCallLog) | **DELETE** /callLogs/{id} | Delete a call log
*Pipedrive.CallLogsApi* | [**getCallLog**](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogsApi.md#getCallLog) | **GET** /callLogs/{id} | Get details of a call log
*Pipedrive.CallLogsApi* | [**getUserCallLogs**](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogsApi.md#getUserCallLogs) | **GET** /callLogs | Get all call logs assigned to a particular user
*Pipedrive.ChannelsApi* | [**addChannel**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ChannelsApi.md#addChannel) | **POST** /channels | Add a channel
*Pipedrive.ChannelsApi* | [**deleteChannel**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ChannelsApi.md#deleteChannel) | **DELETE** /channels/{id} | Delete a channel
*Pipedrive.ChannelsApi* | [**deleteConversation**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ChannelsApi.md#deleteConversation) | **DELETE** /channels/{channel-id}/conversations/{conversation-id} | Delete a conversation
*Pipedrive.ChannelsApi* | [**receiveMessage**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ChannelsApi.md#receiveMessage) | **POST** /channels/messages/receive | Receives an incoming message
*Pipedrive.CurrenciesApi* | [**getCurrencies**](https://github.com/pipedrive/client-nodejs/blob/master/docs/CurrenciesApi.md#getCurrencies) | **GET** /currencies | Get all supported currencies
*Pipedrive.DealFieldsApi* | [**addDealField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealFieldsApi.md#addDealField) | **POST** /dealFields | Add a new deal field
*Pipedrive.DealFieldsApi* | [**deleteDealField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealFieldsApi.md#deleteDealField) | **DELETE** /dealFields/{id} | Delete a deal field
*Pipedrive.DealFieldsApi* | [**deleteDealFields**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealFieldsApi.md#deleteDealFields) | **DELETE** /dealFields | Delete multiple deal fields in bulk
*Pipedrive.DealFieldsApi* | [**getDealField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealFieldsApi.md#getDealField) | **GET** /dealFields/{id} | Get one deal field
*Pipedrive.DealFieldsApi* | [**getDealFields**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealFieldsApi.md#getDealFields) | **GET** /dealFields | Get all deal fields
*Pipedrive.DealFieldsApi* | [**updateDealField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealFieldsApi.md#updateDealField) | **PUT** /dealFields/{id} | Update a deal field
*Pipedrive.DealsApi* | [**addDeal**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#addDeal) | **POST** /deals | Add a deal
*Pipedrive.DealsApi* | [**addDealFollower**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#addDealFollower) | **POST** /deals/{id}/followers | Add a follower to a deal
*Pipedrive.DealsApi* | [**addDealParticipant**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#addDealParticipant) | **POST** /deals/{id}/participants | Add a participant to a deal
*Pipedrive.DealsApi* | [**addDealProduct**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#addDealProduct) | **POST** /deals/{id}/products | Add a product to a deal
*Pipedrive.DealsApi* | [**deleteDeal**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#deleteDeal) | **DELETE** /deals/{id} | Delete a deal
*Pipedrive.DealsApi* | [**deleteDealFollower**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#deleteDealFollower) | **DELETE** /deals/{id}/followers/{follower_id} | Delete a follower from a deal
*Pipedrive.DealsApi* | [**deleteDealParticipant**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#deleteDealParticipant) | **DELETE** /deals/{id}/participants/{deal_participant_id} | Delete a participant from a deal
*Pipedrive.DealsApi* | [**deleteDealProduct**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#deleteDealProduct) | **DELETE** /deals/{id}/products/{product_attachment_id} | Delete an attached product from a deal
*Pipedrive.DealsApi* | [**deleteDeals**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#deleteDeals) | **DELETE** /deals | Delete multiple deals in bulk
*Pipedrive.DealsApi* | [**duplicateDeal**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#duplicateDeal) | **POST** /deals/{id}/duplicate | Duplicate deal
*Pipedrive.DealsApi* | [**getDeal**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDeal) | **GET** /deals/{id} | Get details of a deal
*Pipedrive.DealsApi* | [**getDealActivities**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealActivities) | **GET** /deals/{id}/activities | List activities associated with a deal
*Pipedrive.DealsApi* | [**getDealChangelog**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealChangelog) | **GET** /deals/{id}/changelog | List updates about deal field values
*Pipedrive.DealsApi* | [**getDealFiles**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealFiles) | **GET** /deals/{id}/files | List files attached to a deal
*Pipedrive.DealsApi* | [**getDealFollowers**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealFollowers) | **GET** /deals/{id}/followers | List followers of a deal
*Pipedrive.DealsApi* | [**getDealMailMessages**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealMailMessages) | **GET** /deals/{id}/mailMessages | List mail messages associated with a deal
*Pipedrive.DealsApi* | [**getDealParticipants**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealParticipants) | **GET** /deals/{id}/participants | List participants of a deal
*Pipedrive.DealsApi* | [**getDealParticipantsChangelog**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealParticipantsChangelog) | **GET** /deals/{id}/participantsChangelog | List updates about participants of a deal
*Pipedrive.DealsApi* | [**getDealPersons**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealPersons) | **GET** /deals/{id}/persons | List all persons associated with a deal
*Pipedrive.DealsApi* | [**getDealProducts**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealProducts) | **GET** /deals/{id}/products | List products attached to a deal
*Pipedrive.DealsApi* | [**getDealUpdates**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealUpdates) | **GET** /deals/{id}/flow | List updates about a deal
*Pipedrive.DealsApi* | [**getDealUsers**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealUsers) | **GET** /deals/{id}/permittedUsers | List permitted users
*Pipedrive.DealsApi* | [**getDeals**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDeals) | **GET** /deals | Get all deals
*Pipedrive.DealsApi* | [**getDealsCollection**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealsCollection) | **GET** /deals/collection | Get all deals (BETA)
*Pipedrive.DealsApi* | [**getDealsSummary**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealsSummary) | **GET** /deals/summary | Get deals summary
*Pipedrive.DealsApi* | [**getDealsTimeline**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#getDealsTimeline) | **GET** /deals/timeline | Get deals timeline
*Pipedrive.DealsApi* | [**mergeDeals**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#mergeDeals) | **PUT** /deals/{id}/merge | Merge two deals
*Pipedrive.DealsApi* | [**searchDeals**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#searchDeals) | **GET** /deals/search | Search deals
*Pipedrive.DealsApi* | [**updateDeal**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#updateDeal) | **PUT** /deals/{id} | Update a deal
*Pipedrive.DealsApi* | [**updateDealProduct**](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md#updateDealProduct) | **PUT** /deals/{id}/products/{product_attachment_id} | Update the product attached to a deal
*Pipedrive.FilesApi* | [**addFile**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FilesApi.md#addFile) | **POST** /files | Add file
*Pipedrive.FilesApi* | [**addFileAndLinkIt**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FilesApi.md#addFileAndLinkIt) | **POST** /files/remote | Create a remote file and link it to an item
*Pipedrive.FilesApi* | [**deleteFile**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FilesApi.md#deleteFile) | **DELETE** /files/{id} | Delete a file
*Pipedrive.FilesApi* | [**downloadFile**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FilesApi.md#downloadFile) | **GET** /files/{id}/download | Download one file
*Pipedrive.FilesApi* | [**getFile**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FilesApi.md#getFile) | **GET** /files/{id} | Get one file
*Pipedrive.FilesApi* | [**getFiles**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FilesApi.md#getFiles) | **GET** /files | Get all files
*Pipedrive.FilesApi* | [**linkFileToItem**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FilesApi.md#linkFileToItem) | **POST** /files/remoteLink | Link a remote file to an item
*Pipedrive.FilesApi* | [**updateFile**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FilesApi.md#updateFile) | **PUT** /files/{id} | Update file details
*Pipedrive.FiltersApi* | [**addFilter**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersApi.md#addFilter) | **POST** /filters | Add a new filter
*Pipedrive.FiltersApi* | [**deleteFilter**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersApi.md#deleteFilter) | **DELETE** /filters/{id} | Delete a filter
*Pipedrive.FiltersApi* | [**deleteFilters**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersApi.md#deleteFilters) | **DELETE** /filters | Delete multiple filters in bulk
*Pipedrive.FiltersApi* | [**getFilter**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersApi.md#getFilter) | **GET** /filters/{id} | Get one filter
*Pipedrive.FiltersApi* | [**getFilterHelpers**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersApi.md#getFilterHelpers) | **GET** /filters/helpers | Get all filter helpers
*Pipedrive.FiltersApi* | [**getFilters**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersApi.md#getFilters) | **GET** /filters | Get all filters
*Pipedrive.FiltersApi* | [**updateFilter**](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersApi.md#updateFilter) | **PUT** /filters/{id} | Update filter
*Pipedrive.GoalsApi* | [**addGoal**](https://github.com/pipedrive/client-nodejs/blob/master/docs/GoalsApi.md#addGoal) | **POST** /goals | Add a new goal
*Pipedrive.GoalsApi* | [**deleteGoal**](https://github.com/pipedrive/client-nodejs/blob/master/docs/GoalsApi.md#deleteGoal) | **DELETE** /goals/{id} | Delete existing goal
*Pipedrive.GoalsApi* | [**getGoalResult**](https://github.com/pipedrive/client-nodejs/blob/master/docs/GoalsApi.md#getGoalResult) | **GET** /goals/{id}/results | Get result of a goal
*Pipedrive.GoalsApi* | [**getGoals**](https://github.com/pipedrive/client-nodejs/blob/master/docs/GoalsApi.md#getGoals) | **GET** /goals/find | Find goals
*Pipedrive.GoalsApi* | [**updateGoal**](https://github.com/pipedrive/client-nodejs/blob/master/docs/GoalsApi.md#updateGoal) | **PUT** /goals/{id} | Update existing goal
*Pipedrive.ItemSearchApi* | [**searchItem**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ItemSearchApi.md#searchItem) | **GET** /itemSearch | Perform a search from multiple item types
*Pipedrive.ItemSearchApi* | [**searchItemByField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ItemSearchApi.md#searchItemByField) | **GET** /itemSearch/field | Perform a search using a specific field from an item type
*Pipedrive.LeadLabelsApi* | [**addLeadLabel**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadLabelsApi.md#addLeadLabel) | **POST** /leadLabels | Add a lead label
*Pipedrive.LeadLabelsApi* | [**deleteLeadLabel**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadLabelsApi.md#deleteLeadLabel) | **DELETE** /leadLabels/{id} | Delete a lead label
*Pipedrive.LeadLabelsApi* | [**getLeadLabels**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadLabelsApi.md#getLeadLabels) | **GET** /leadLabels | Get all lead labels
*Pipedrive.LeadLabelsApi* | [**updateLeadLabel**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadLabelsApi.md#updateLeadLabel) | **PATCH** /leadLabels/{id} | Update a lead label
*Pipedrive.LeadSourcesApi* | [**getLeadSources**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadSourcesApi.md#getLeadSources) | **GET** /leadSources | Get all lead sources
*Pipedrive.LeadsApi* | [**addLead**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadsApi.md#addLead) | **POST** /leads | Add a lead
*Pipedrive.LeadsApi* | [**deleteLead**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadsApi.md#deleteLead) | **DELETE** /leads/{id} | Delete a lead
*Pipedrive.LeadsApi* | [**getLead**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadsApi.md#getLead) | **GET** /leads/{id} | Get one lead
*Pipedrive.LeadsApi* | [**getLeadUsers**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadsApi.md#getLeadUsers) | **GET** /leads/{id}/permittedUsers | List permitted users
*Pipedrive.LeadsApi* | [**getLeads**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadsApi.md#getLeads) | **GET** /leads | Get all leads
*Pipedrive.LeadsApi* | [**searchLeads**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadsApi.md#searchLeads) | **GET** /leads/search | Search leads
*Pipedrive.LeadsApi* | [**updateLead**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadsApi.md#updateLead) | **PATCH** /leads/{id} | Update a lead
*Pipedrive.LegacyTeamsApi* | [**addTeam**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LegacyTeamsApi.md#addTeam) | **POST** /legacyTeams | Add a new team
*Pipedrive.LegacyTeamsApi* | [**addTeamUser**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LegacyTeamsApi.md#addTeamUser) | **POST** /legacyTeams/{id}/users | Add users to a team
*Pipedrive.LegacyTeamsApi* | [**deleteTeamUser**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LegacyTeamsApi.md#deleteTeamUser) | **DELETE** /legacyTeams/{id}/users | Delete users from a team
*Pipedrive.LegacyTeamsApi* | [**getTeam**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LegacyTeamsApi.md#getTeam) | **GET** /legacyTeams/{id} | Get a single team
*Pipedrive.LegacyTeamsApi* | [**getTeamUsers**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LegacyTeamsApi.md#getTeamUsers) | **GET** /legacyTeams/{id}/users | Get all users in a team
*Pipedrive.LegacyTeamsApi* | [**getTeams**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LegacyTeamsApi.md#getTeams) | **GET** /legacyTeams | Get all teams
*Pipedrive.LegacyTeamsApi* | [**getUserTeams**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LegacyTeamsApi.md#getUserTeams) | **GET** /legacyTeams/user/{id} | Get all teams of a user
*Pipedrive.LegacyTeamsApi* | [**updateTeam**](https://github.com/pipedrive/client-nodejs/blob/master/docs/LegacyTeamsApi.md#updateTeam) | **PUT** /legacyTeams/{id} | Update a team
*Pipedrive.MailboxApi* | [**deleteMailThread**](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailboxApi.md#deleteMailThread) | **DELETE** /mailbox/mailThreads/{id} | Delete mail thread
*Pipedrive.MailboxApi* | [**getMailMessage**](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailboxApi.md#getMailMessage) | **GET** /mailbox/mailMessages/{id} | Get one mail message
*Pipedrive.MailboxApi* | [**getMailThread**](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailboxApi.md#getMailThread) | **GET** /mailbox/mailThreads/{id} | Get one mail thread
*Pipedrive.MailboxApi* | [**getMailThreadMessages**](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailboxApi.md#getMailThreadMessages) | **GET** /mailbox/mailThreads/{id}/mailMessages | Get all mail messages of mail thread
*Pipedrive.MailboxApi* | [**getMailThreads**](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailboxApi.md#getMailThreads) | **GET** /mailbox/mailThreads | Get mail threads
*Pipedrive.MailboxApi* | [**updateMailThreadDetails**](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailboxApi.md#updateMailThreadDetails) | **PUT** /mailbox/mailThreads/{id} | Update mail thread details
*Pipedrive.MeetingsApi* | [**deleteUserProviderLink**](https://github.com/pipedrive/client-nodejs/blob/master/docs/MeetingsApi.md#deleteUserProviderLink) | **DELETE** /meetings/userProviderLinks/{id} | Delete the link between a user and the installed video call integration
*Pipedrive.MeetingsApi* | [**saveUserProviderLink**](https://github.com/pipedrive/client-nodejs/blob/master/docs/MeetingsApi.md#saveUserProviderLink) | **POST** /meetings/userProviderLinks | Link a user with the installed video call integration
*Pipedrive.NoteFieldsApi* | [**getNoteFields**](https://github.com/pipedrive/client-nodejs/blob/master/docs/NoteFieldsApi.md#getNoteFields) | **GET** /noteFields | Get all note fields
*Pipedrive.NotesApi* | [**addNote**](https://github.com/pipedrive/client-nodejs/blob/master/docs/NotesApi.md#addNote) | **POST** /notes | Add a note
*Pipedrive.NotesApi* | [**addNoteComment**](https://github.com/pipedrive/client-nodejs/blob/master/docs/NotesApi.md#addNoteComment) | **POST** /notes/{id}/comments | Add a comment to a note
*Pipedrive.NotesApi* | [**deleteComment**](https://github.com/pipedrive/client-nodejs/blob/master/docs/NotesApi.md#deleteComment) | **DELETE** /notes/{id}/comments/{commentId} | Delete a comment related to a note
*Pipedrive.NotesApi* | [**deleteNote**](https://github.com/pipedrive/client-nodejs/blob/master/docs/NotesApi.md#deleteNote) | **DELETE** /notes/{id} | Delete a note
*Pipedrive.NotesApi* | [**getComment**](https://github.com/pipedrive/client-nodejs/blob/master/docs/NotesApi.md#getComment) | **GET** /notes/{id}/comments/{commentId} | Get one comment
*Pipedrive.NotesApi* | [**getNote**](https://github.com/pipedrive/client-nodejs/blob/master/docs/NotesApi.md#getNote) | **GET** /notes/{id} | Get one note
*Pipedrive.NotesApi* | [**getNoteComments**](https://github.com/pipedrive/client-nodejs/blob/master/docs/NotesApi.md#getNoteComments) | **GET** /notes/{id}/comments | Get all comments for a note
*Pipedrive.NotesApi* | [**getNotes**](https://github.com/pipedrive/client-nodejs/blob/master/docs/NotesApi.md#getNotes) | **GET** /notes | Get all notes
*Pipedrive.NotesApi* | [**updateCommentForNote**](https://github.com/pipedrive/client-nodejs/blob/master/docs/NotesApi.md#updateCommentForNote) | **PUT** /notes/{id}/comments/{commentId} | Update a comment related to a note
*Pipedrive.NotesApi* | [**updateNote**](https://github.com/pipedrive/client-nodejs/blob/master/docs/NotesApi.md#updateNote) | **PUT** /notes/{id} | Update a note
*Pipedrive.OrganizationFieldsApi* | [**addOrganizationField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFieldsApi.md#addOrganizationField) | **POST** /organizationFields | Add a new organization field
*Pipedrive.OrganizationFieldsApi* | [**deleteOrganizationField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFieldsApi.md#deleteOrganizationField) | **DELETE** /organizationFields/{id} | Delete an organization field
*Pipedrive.OrganizationFieldsApi* | [**deleteOrganizationFields**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFieldsApi.md#deleteOrganizationFields) | **DELETE** /organizationFields | Delete multiple organization fields in bulk
*Pipedrive.OrganizationFieldsApi* | [**getOrganizationField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFieldsApi.md#getOrganizationField) | **GET** /organizationFields/{id} | Get one organization field
*Pipedrive.OrganizationFieldsApi* | [**getOrganizationFields**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFieldsApi.md#getOrganizationFields) | **GET** /organizationFields | Get all organization fields
*Pipedrive.OrganizationFieldsApi* | [**updateOrganizationField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFieldsApi.md#updateOrganizationField) | **PUT** /organizationFields/{id} | Update an organization field
*Pipedrive.OrganizationRelationshipsApi* | [**addOrganizationRelationship**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipsApi.md#addOrganizationRelationship) | **POST** /organizationRelationships | Create an organization relationship
*Pipedrive.OrganizationRelationshipsApi* | [**deleteOrganizationRelationship**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipsApi.md#deleteOrganizationRelationship) | **DELETE** /organizationRelationships/{id} | Delete an organization relationship
*Pipedrive.OrganizationRelationshipsApi* | [**getOrganizationRelationship**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipsApi.md#getOrganizationRelationship) | **GET** /organizationRelationships/{id} | Get one organization relationship
*Pipedrive.OrganizationRelationshipsApi* | [**getOrganizationRelationships**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipsApi.md#getOrganizationRelationships) | **GET** /organizationRelationships | Get all relationships for organization
*Pipedrive.OrganizationRelationshipsApi* | [**updateOrganizationRelationship**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipsApi.md#updateOrganizationRelationship) | **PUT** /organizationRelationships/{id} | Update an organization relationship
*Pipedrive.OrganizationsApi* | [**addOrganization**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#addOrganization) | **POST** /organizations | Add an organization
*Pipedrive.OrganizationsApi* | [**addOrganizationFollower**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#addOrganizationFollower) | **POST** /organizations/{id}/followers | Add a follower to an organization
*Pipedrive.OrganizationsApi* | [**deleteOrganization**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#deleteOrganization) | **DELETE** /organizations/{id} | Delete an organization
*Pipedrive.OrganizationsApi* | [**deleteOrganizationFollower**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#deleteOrganizationFollower) | **DELETE** /organizations/{id}/followers/{follower_id} | Delete a follower from an organization
*Pipedrive.OrganizationsApi* | [**deleteOrganizations**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#deleteOrganizations) | **DELETE** /organizations | Delete multiple organizations in bulk
*Pipedrive.OrganizationsApi* | [**getOrganization**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#getOrganization) | **GET** /organizations/{id} | Get details of an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationActivities**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#getOrganizationActivities) | **GET** /organizations/{id}/activities | List activities associated with an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationChangelog**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#getOrganizationChangelog) | **GET** /organizations/{id}/changelog | List updates about organization field values
*Pipedrive.OrganizationsApi* | [**getOrganizationDeals**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#getOrganizationDeals) | **GET** /organizations/{id}/deals | List deals associated with an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationFiles**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#getOrganizationFiles) | **GET** /organizations/{id}/files | List files attached to an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationFollowers**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#getOrganizationFollowers) | **GET** /organizations/{id}/followers | List followers of an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationMailMessages**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#getOrganizationMailMessages) | **GET** /organizations/{id}/mailMessages | List mail messages associated with an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationPersons**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#getOrganizationPersons) | **GET** /organizations/{id}/persons | List persons of an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationUpdates**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#getOrganizationUpdates) | **GET** /organizations/{id}/flow | List updates about an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationUsers**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#getOrganizationUsers) | **GET** /organizations/{id}/permittedUsers | List permitted users
*Pipedrive.OrganizationsApi* | [**getOrganizations**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#getOrganizations) | **GET** /organizations | Get all organizations
*Pipedrive.OrganizationsApi* | [**getOrganizationsCollection**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#getOrganizationsCollection) | **GET** /organizations/collection | Get all organizations (BETA)
*Pipedrive.OrganizationsApi* | [**mergeOrganizations**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#mergeOrganizations) | **PUT** /organizations/{id}/merge | Merge two organizations
*Pipedrive.OrganizationsApi* | [**searchOrganization**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#searchOrganization) | **GET** /organizations/search | Search organizations
*Pipedrive.OrganizationsApi* | [**updateOrganization**](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsApi.md#updateOrganization) | **PUT** /organizations/{id} | Update an organization
*Pipedrive.PermissionSetsApi* | [**getPermissionSet**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PermissionSetsApi.md#getPermissionSet) | **GET** /permissionSets/{id} | Get one permission set
*Pipedrive.PermissionSetsApi* | [**getPermissionSetAssignments**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PermissionSetsApi.md#getPermissionSetAssignments) | **GET** /permissionSets/{id}/assignments | List permission set assignments
*Pipedrive.PermissionSetsApi* | [**getPermissionSets**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PermissionSetsApi.md#getPermissionSets) | **GET** /permissionSets | Get all permission sets
*Pipedrive.PersonFieldsApi* | [**addPersonField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonFieldsApi.md#addPersonField) | **POST** /personFields | Add a new person field
*Pipedrive.PersonFieldsApi* | [**deletePersonField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonFieldsApi.md#deletePersonField) | **DELETE** /personFields/{id} | Delete a person field
*Pipedrive.PersonFieldsApi* | [**deletePersonFields**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonFieldsApi.md#deletePersonFields) | **DELETE** /personFields | Delete multiple person fields in bulk
*Pipedrive.PersonFieldsApi* | [**getPersonField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonFieldsApi.md#getPersonField) | **GET** /personFields/{id} | Get one person field
*Pipedrive.PersonFieldsApi* | [**getPersonFields**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonFieldsApi.md#getPersonFields) | **GET** /personFields | Get all person fields
*Pipedrive.PersonFieldsApi* | [**updatePersonField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonFieldsApi.md#updatePersonField) | **PUT** /personFields/{id} | Update a person field
*Pipedrive.PersonsApi* | [**addPerson**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#addPerson) | **POST** /persons | Add a person
*Pipedrive.PersonsApi* | [**addPersonFollower**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#addPersonFollower) | **POST** /persons/{id}/followers | Add a follower to a person
*Pipedrive.PersonsApi* | [**addPersonPicture**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#addPersonPicture) | **POST** /persons/{id}/picture | Add person picture
*Pipedrive.PersonsApi* | [**deletePerson**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#deletePerson) | **DELETE** /persons/{id} | Delete a person
*Pipedrive.PersonsApi* | [**deletePersonFollower**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#deletePersonFollower) | **DELETE** /persons/{id}/followers/{follower_id} | Delete a follower from a person
*Pipedrive.PersonsApi* | [**deletePersonPicture**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#deletePersonPicture) | **DELETE** /persons/{id}/picture | Delete person picture
*Pipedrive.PersonsApi* | [**deletePersons**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#deletePersons) | **DELETE** /persons | Delete multiple persons in bulk
*Pipedrive.PersonsApi* | [**getPerson**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#getPerson) | **GET** /persons/{id} | Get details of a person
*Pipedrive.PersonsApi* | [**getPersonActivities**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#getPersonActivities) | **GET** /persons/{id}/activities | List activities associated with a person
*Pipedrive.PersonsApi* | [**getPersonChangelog**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#getPersonChangelog) | **GET** /persons/{id}/changelog | List updates about person field values
*Pipedrive.PersonsApi* | [**getPersonDeals**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#getPersonDeals) | **GET** /persons/{id}/deals | List deals associated with a person
*Pipedrive.PersonsApi* | [**getPersonFiles**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#getPersonFiles) | **GET** /persons/{id}/files | List files attached to a person
*Pipedrive.PersonsApi* | [**getPersonFollowers**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#getPersonFollowers) | **GET** /persons/{id}/followers | List followers of a person
*Pipedrive.PersonsApi* | [**getPersonMailMessages**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#getPersonMailMessages) | **GET** /persons/{id}/mailMessages | List mail messages associated with a person
*Pipedrive.PersonsApi* | [**getPersonProducts**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#getPersonProducts) | **GET** /persons/{id}/products | List products associated with a person
*Pipedrive.PersonsApi* | [**getPersonUpdates**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#getPersonUpdates) | **GET** /persons/{id}/flow | List updates about a person
*Pipedrive.PersonsApi* | [**getPersonUsers**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#getPersonUsers) | **GET** /persons/{id}/permittedUsers | List permitted users
*Pipedrive.PersonsApi* | [**getPersons**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#getPersons) | **GET** /persons | Get all persons
*Pipedrive.PersonsApi* | [**getPersonsCollection**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#getPersonsCollection) | **GET** /persons/collection | Get all persons (BETA)
*Pipedrive.PersonsApi* | [**mergePersons**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#mergePersons) | **PUT** /persons/{id}/merge | Merge two persons
*Pipedrive.PersonsApi* | [**searchPersons**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#searchPersons) | **GET** /persons/search | Search persons
*Pipedrive.PersonsApi* | [**updatePerson**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsApi.md#updatePerson) | **PUT** /persons/{id} | Update a person
*Pipedrive.PipelinesApi* | [**addPipeline**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PipelinesApi.md#addPipeline) | **POST** /pipelines | Add a new pipeline
*Pipedrive.PipelinesApi* | [**deletePipeline**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PipelinesApi.md#deletePipeline) | **DELETE** /pipelines/{id} | Delete a pipeline
*Pipedrive.PipelinesApi* | [**getPipeline**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PipelinesApi.md#getPipeline) | **GET** /pipelines/{id} | Get one pipeline
*Pipedrive.PipelinesApi* | [**getPipelineConversionStatistics**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PipelinesApi.md#getPipelineConversionStatistics) | **GET** /pipelines/{id}/conversion_statistics | Get deals conversion rates in pipeline
*Pipedrive.PipelinesApi* | [**getPipelineDeals**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PipelinesApi.md#getPipelineDeals) | **GET** /pipelines/{id}/deals | Get deals in a pipeline
*Pipedrive.PipelinesApi* | [**getPipelineMovementStatistics**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PipelinesApi.md#getPipelineMovementStatistics) | **GET** /pipelines/{id}/movement_statistics | Get deals movements in pipeline
*Pipedrive.PipelinesApi* | [**getPipelines**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PipelinesApi.md#getPipelines) | **GET** /pipelines | Get all pipelines
*Pipedrive.PipelinesApi* | [**updatePipeline**](https://github.com/pipedrive/client-nodejs/blob/master/docs/PipelinesApi.md#updatePipeline) | **PUT** /pipelines/{id} | Update a pipeline
*Pipedrive.ProductFieldsApi* | [**addProductField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductFieldsApi.md#addProductField) | **POST** /productFields | Add a new product field
*Pipedrive.ProductFieldsApi* | [**deleteProductField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductFieldsApi.md#deleteProductField) | **DELETE** /productFields/{id} | Delete a product field
*Pipedrive.ProductFieldsApi* | [**deleteProductFields**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductFieldsApi.md#deleteProductFields) | **DELETE** /productFields | Delete multiple product fields in bulk
*Pipedrive.ProductFieldsApi* | [**getProductField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductFieldsApi.md#getProductField) | **GET** /productFields/{id} | Get one product field
*Pipedrive.ProductFieldsApi* | [**getProductFields**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductFieldsApi.md#getProductFields) | **GET** /productFields | Get all product fields
*Pipedrive.ProductFieldsApi* | [**updateProductField**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductFieldsApi.md#updateProductField) | **PUT** /productFields/{id} | Update a product field
*Pipedrive.ProductsApi* | [**addProduct**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductsApi.md#addProduct) | **POST** /products | Add a product
*Pipedrive.ProductsApi* | [**addProductFollower**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductsApi.md#addProductFollower) | **POST** /products/{id}/followers | Add a follower to a product
*Pipedrive.ProductsApi* | [**deleteProduct**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductsApi.md#deleteProduct) | **DELETE** /products/{id} | Delete a product
*Pipedrive.ProductsApi* | [**deleteProductFollower**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductsApi.md#deleteProductFollower) | **DELETE** /products/{id}/followers/{follower_id} | Delete a follower from a product
*Pipedrive.ProductsApi* | [**getProduct**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductsApi.md#getProduct) | **GET** /products/{id} | Get one product
*Pipedrive.ProductsApi* | [**getProductDeals**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductsApi.md#getProductDeals) | **GET** /products/{id}/deals | Get deals where a product is attached to
*Pipedrive.ProductsApi* | [**getProductFiles**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductsApi.md#getProductFiles) | **GET** /products/{id}/files | List files attached to a product
*Pipedrive.ProductsApi* | [**getProductFollowers**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductsApi.md#getProductFollowers) | **GET** /products/{id}/followers | List followers of a product
*Pipedrive.ProductsApi* | [**getProductUsers**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductsApi.md#getProductUsers) | **GET** /products/{id}/permittedUsers | List permitted users
*Pipedrive.ProductsApi* | [**getProducts**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductsApi.md#getProducts) | **GET** /products | Get all products
*Pipedrive.ProductsApi* | [**searchProducts**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductsApi.md#searchProducts) | **GET** /products/search | Search products
*Pipedrive.ProductsApi* | [**updateProduct**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductsApi.md#updateProduct) | **PUT** /products/{id} | Update a product
*Pipedrive.ProjectTemplatesApi* | [**getProjectTemplate**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectTemplatesApi.md#getProjectTemplate) | **GET** /projectTemplates/{id} | Get details of a template
*Pipedrive.ProjectTemplatesApi* | [**getProjectTemplates**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectTemplatesApi.md#getProjectTemplates) | **GET** /projectTemplates | Get all project templates
*Pipedrive.ProjectTemplatesApi* | [**getProjectsBoard**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectTemplatesApi.md#getProjectsBoard) | **GET** /projects/boards/{id} | Get details of a board
*Pipedrive.ProjectTemplatesApi* | [**getProjectsPhase**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectTemplatesApi.md#getProjectsPhase) | **GET** /projects/phases/{id} | Get details of a phase
*Pipedrive.ProjectsApi* | [**addProject**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#addProject) | **POST** /projects | Add a project
*Pipedrive.ProjectsApi* | [**archiveProject**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#archiveProject) | **POST** /projects/{id}/archive | Archive a project
*Pipedrive.ProjectsApi* | [**deleteProject**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#deleteProject) | **DELETE** /projects/{id} | Delete a project
*Pipedrive.ProjectsApi* | [**getProject**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#getProject) | **GET** /projects/{id} | Get details of a project
*Pipedrive.ProjectsApi* | [**getProjectActivities**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#getProjectActivities) | **GET** /projects/{id}/activities | Returns project activities
*Pipedrive.ProjectsApi* | [**getProjectGroups**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#getProjectGroups) | **GET** /projects/{id}/groups | Returns project groups
*Pipedrive.ProjectsApi* | [**getProjectPlan**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#getProjectPlan) | **GET** /projects/{id}/plan | Returns project plan
*Pipedrive.ProjectsApi* | [**getProjectTasks**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#getProjectTasks) | **GET** /projects/{id}/tasks | Returns project tasks
*Pipedrive.ProjectsApi* | [**getProjects**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#getProjects) | **GET** /projects | Get all projects
*Pipedrive.ProjectsApi* | [**getProjectsBoards**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#getProjectsBoards) | **GET** /projects/boards | Get all project boards
*Pipedrive.ProjectsApi* | [**getProjectsPhases**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#getProjectsPhases) | **GET** /projects/phases | Get project phases
*Pipedrive.ProjectsApi* | [**putProjectPlanActivity**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#putProjectPlanActivity) | **PUT** /projects/{id}/plan/activities/{activityId} | Update activity in project plan
*Pipedrive.ProjectsApi* | [**putProjectPlanTask**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#putProjectPlanTask) | **PUT** /projects/{id}/plan/tasks/{taskId} | Update task in project plan
*Pipedrive.ProjectsApi* | [**updateProject**](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectsApi.md#updateProject) | **PUT** /projects/{id} | Update a project
*Pipedrive.RecentsApi* | [**getRecents**](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentsApi.md#getRecents) | **GET** /recents | Get recents
*Pipedrive.RolesApi* | [**addOrUpdateRoleSetting**](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesApi.md#addOrUpdateRoleSetting) | **POST** /roles/{id}/settings | Add or update role setting
*Pipedrive.RolesApi* | [**addRole**](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesApi.md#addRole) | **POST** /roles | Add a role
*Pipedrive.RolesApi* | [**addRoleAssignment**](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesApi.md#addRoleAssignment) | **POST** /roles/{id}/assignments | Add role assignment
*Pipedrive.RolesApi* | [**deleteRole**](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesApi.md#deleteRole) | **DELETE** /roles/{id} | Delete a role
*Pipedrive.RolesApi* | [**deleteRoleAssignment**](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesApi.md#deleteRoleAssignment) | **DELETE** /roles/{id}/assignments | Delete a role assignment
*Pipedrive.RolesApi* | [**getRole**](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesApi.md#getRole) | **GET** /roles/{id} | Get one role
*Pipedrive.RolesApi* | [**getRoleAssignments**](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesApi.md#getRoleAssignments) | **GET** /roles/{id}/assignments | List role assignments
*Pipedrive.RolesApi* | [**getRolePipelines**](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesApi.md#getRolePipelines) | **GET** /roles/{id}/pipelines | List pipeline visibility for a role
*Pipedrive.RolesApi* | [**getRoleSettings**](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesApi.md#getRoleSettings) | **GET** /roles/{id}/settings | List role settings
*Pipedrive.RolesApi* | [**getRoles**](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesApi.md#getRoles) | **GET** /roles | Get all roles
*Pipedrive.RolesApi* | [**updateRole**](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesApi.md#updateRole) | **PUT** /roles/{id} | Update role details
*Pipedrive.RolesApi* | [**updateRolePipelines**](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesApi.md#updateRolePipelines) | **PUT** /roles/{id}/pipelines | Update pipeline visibility for a role
*Pipedrive.StagesApi* | [**addStage**](https://github.com/pipedrive/client-nodejs/blob/master/docs/StagesApi.md#addStage) | **POST** /stages | Add a new stage
*Pipedrive.StagesApi* | [**deleteStage**](https://github.com/pipedrive/client-nodejs/blob/master/docs/StagesApi.md#deleteStage) | **DELETE** /stages/{id} | Delete a stage
*Pipedrive.StagesApi* | [**deleteStages**](https://github.com/pipedrive/client-nodejs/blob/master/docs/StagesApi.md#deleteStages) | **DELETE** /stages | Delete multiple stages in bulk
*Pipedrive.StagesApi* | [**getStage**](https://github.com/pipedrive/client-nodejs/blob/master/docs/StagesApi.md#getStage) | **GET** /stages/{id} | Get one stage
*Pipedrive.StagesApi* | [**getStageDeals**](https://github.com/pipedrive/client-nodejs/blob/master/docs/StagesApi.md#getStageDeals) | **GET** /stages/{id}/deals | Get deals in a stage
*Pipedrive.StagesApi* | [**getStages**](https://github.com/pipedrive/client-nodejs/blob/master/docs/StagesApi.md#getStages) | **GET** /stages | Get all stages
*Pipedrive.StagesApi* | [**updateStage**](https://github.com/pipedrive/client-nodejs/blob/master/docs/StagesApi.md#updateStage) | **PUT** /stages/{id} | Update stage details
*Pipedrive.SubscriptionsApi* | [**addRecurringSubscription**](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionsApi.md#addRecurringSubscription) | **POST** /subscriptions/recurring | Add a recurring subscription
*Pipedrive.SubscriptionsApi* | [**addSubscriptionInstallment**](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionsApi.md#addSubscriptionInstallment) | **POST** /subscriptions/installment | Add an installment subscription
*Pipedrive.SubscriptionsApi* | [**cancelRecurringSubscription**](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionsApi.md#cancelRecurringSubscription) | **PUT** /subscriptions/recurring/{id}/cancel | Cancel a recurring subscription
*Pipedrive.SubscriptionsApi* | [**deleteSubscription**](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionsApi.md#deleteSubscription) | **DELETE** /subscriptions/{id} | Delete a subscription
*Pipedrive.SubscriptionsApi* | [**findSubscriptionByDeal**](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionsApi.md#findSubscriptionByDeal) | **GET** /subscriptions/find/{dealId} | Find subscription by deal
*Pipedrive.SubscriptionsApi* | [**getSubscription**](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionsApi.md#getSubscription) | **GET** /subscriptions/{id} | Get details of a subscription
*Pipedrive.SubscriptionsApi* | [**getSubscriptionPayments**](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionsApi.md#getSubscriptionPayments) | **GET** /subscriptions/{id}/payments | Get all payments of a subscription
*Pipedrive.SubscriptionsApi* | [**updateRecurringSubscription**](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionsApi.md#updateRecurringSubscription) | **PUT** /subscriptions/recurring/{id} | Update a recurring subscription
*Pipedrive.SubscriptionsApi* | [**updateSubscriptionInstallment**](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionsApi.md#updateSubscriptionInstallment) | **PUT** /subscriptions/installment/{id} | Update an installment subscription
*Pipedrive.TasksApi* | [**addTask**](https://github.com/pipedrive/client-nodejs/blob/master/docs/TasksApi.md#addTask) | **POST** /tasks | Add a task
*Pipedrive.TasksApi* | [**deleteTask**](https://github.com/pipedrive/client-nodejs/blob/master/docs/TasksApi.md#deleteTask) | **DELETE** /tasks/{id} | Delete a task
*Pipedrive.TasksApi* | [**getTask**](https://github.com/pipedrive/client-nodejs/blob/master/docs/TasksApi.md#getTask) | **GET** /tasks/{id} | Get details of a task
*Pipedrive.TasksApi* | [**getTasks**](https://github.com/pipedrive/client-nodejs/blob/master/docs/TasksApi.md#getTasks) | **GET** /tasks | Get all tasks
*Pipedrive.TasksApi* | [**updateTask**](https://github.com/pipedrive/client-nodejs/blob/master/docs/TasksApi.md#updateTask) | **PUT** /tasks/{id} | Update a task
*Pipedrive.UserConnectionsApi* | [**getUserConnections**](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserConnectionsApi.md#getUserConnections) | **GET** /userConnections | Get all user connections
*Pipedrive.UserSettingsApi* | [**getUserSettings**](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserSettingsApi.md#getUserSettings) | **GET** /userSettings | List settings of an authorized user
*Pipedrive.UsersApi* | [**addUser**](https://github.com/pipedrive/client-nodejs/blob/master/docs/UsersApi.md#addUser) | **POST** /users | Add a new user
*Pipedrive.UsersApi* | [**findUsersByName**](https://github.com/pipedrive/client-nodejs/blob/master/docs/UsersApi.md#findUsersByName) | **GET** /users/find | Find users by name
*Pipedrive.UsersApi* | [**getCurrentUser**](https://github.com/pipedrive/client-nodejs/blob/master/docs/UsersApi.md#getCurrentUser) | **GET** /users/me | Get current user data
*Pipedrive.UsersApi* | [**getUser**](https://github.com/pipedrive/client-nodejs/blob/master/docs/UsersApi.md#getUser) | **GET** /users/{id} | Get one user
*Pipedrive.UsersApi* | [**getUserFollowers**](https://github.com/pipedrive/client-nodejs/blob/master/docs/UsersApi.md#getUserFollowers) | **GET** /users/{id}/followers | List followers of a user
*Pipedrive.UsersApi* | [**getUserPermissions**](https://github.com/pipedrive/client-nodejs/blob/master/docs/UsersApi.md#getUserPermissions) | **GET** /users/{id}/permissions | List user permissions
*Pipedrive.UsersApi* | [**getUserRoleAssignments**](https://github.com/pipedrive/client-nodejs/blob/master/docs/UsersApi.md#getUserRoleAssignments) | **GET** /users/{id}/roleAssignments | List role assignments
*Pipedrive.UsersApi* | [**getUserRoleSettings**](https://github.com/pipedrive/client-nodejs/blob/master/docs/UsersApi.md#getUserRoleSettings) | **GET** /users/{id}/roleSettings | List user role settings
*Pipedrive.UsersApi* | [**getUsers**](https://github.com/pipedrive/client-nodejs/blob/master/docs/UsersApi.md#getUsers) | **GET** /users | Get all users
*Pipedrive.UsersApi* | [**updateUser**](https://github.com/pipedrive/client-nodejs/blob/master/docs/UsersApi.md#updateUser) | **PUT** /users/{id} | Update user details
*Pipedrive.WebhooksApi* | [**addWebhook**](https://github.com/pipedrive/client-nodejs/blob/master/docs/WebhooksApi.md#addWebhook) | **POST** /webhooks | Create a new Webhook
*Pipedrive.WebhooksApi* | [**deleteWebhook**](https://github.com/pipedrive/client-nodejs/blob/master/docs/WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{id} | Delete existing Webhook
*Pipedrive.WebhooksApi* | [**getWebhooks**](https://github.com/pipedrive/client-nodejs/blob/master/docs/WebhooksApi.md#getWebhooks) | **GET** /webhooks | Get all Webhooks


## Documentation for Models

 - [Pipedrive.ActivityCollectionResponseObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityCollectionResponseObject.md)
 - [Pipedrive.ActivityCollectionResponseObjectAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityCollectionResponseObjectAllOf.md)
 - [Pipedrive.ActivityDistributionData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityDistributionData.md)
 - [Pipedrive.ActivityDistributionDataActivityDistribution](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityDistributionDataActivityDistribution.md)
 - [Pipedrive.ActivityDistributionDataActivityDistributionASSIGNEDTOUSERID](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityDistributionDataActivityDistributionASSIGNEDTOUSERID.md)
 - [Pipedrive.ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities.md)
 - [Pipedrive.ActivityDistributionDataWithAdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityDistributionDataWithAdditionalData.md)
 - [Pipedrive.ActivityInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityInfo.md)
 - [Pipedrive.ActivityObjectFragment](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityObjectFragment.md)
 - [Pipedrive.ActivityPostObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityPostObject.md)
 - [Pipedrive.ActivityPostObjectAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityPostObjectAllOf.md)
 - [Pipedrive.ActivityPutObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityPutObject.md)
 - [Pipedrive.ActivityPutObjectAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityPutObjectAllOf.md)
 - [Pipedrive.ActivityRecordAdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityRecordAdditionalData.md)
 - [Pipedrive.ActivityResponseObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityResponseObject.md)
 - [Pipedrive.ActivityResponseObjectAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityResponseObjectAllOf.md)
 - [Pipedrive.ActivityTypeBulkDeleteResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypeBulkDeleteResponse.md)
 - [Pipedrive.ActivityTypeBulkDeleteResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypeBulkDeleteResponseAllOf.md)
 - [Pipedrive.ActivityTypeBulkDeleteResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypeBulkDeleteResponseAllOfData.md)
 - [Pipedrive.ActivityTypeCreateRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypeCreateRequest.md)
 - [Pipedrive.ActivityTypeCreateUpdateDeleteResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypeCreateUpdateDeleteResponse.md)
 - [Pipedrive.ActivityTypeCreateUpdateDeleteResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypeCreateUpdateDeleteResponseAllOf.md)
 - [Pipedrive.ActivityTypeListResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypeListResponse.md)
 - [Pipedrive.ActivityTypeListResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypeListResponseAllOf.md)
 - [Pipedrive.ActivityTypeObjectResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypeObjectResponse.md)
 - [Pipedrive.ActivityTypeUpdateRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/ActivityTypeUpdateRequest.md)
 - [Pipedrive.AddActivityResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddActivityResponse200.md)
 - [Pipedrive.AddActivityResponse200RelatedObjects](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddActivityResponse200RelatedObjects.md)
 - [Pipedrive.AddDealFollowerRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddDealFollowerRequest.md)
 - [Pipedrive.AddDealParticipantRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddDealParticipantRequest.md)
 - [Pipedrive.AddFile](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddFile.md)
 - [Pipedrive.AddFilterRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddFilterRequest.md)
 - [Pipedrive.AddFollowerToPersonResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddFollowerToPersonResponse.md)
 - [Pipedrive.AddFollowerToPersonResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddFollowerToPersonResponseAllOf.md)
 - [Pipedrive.AddFollowerToPersonResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddFollowerToPersonResponseAllOfData.md)
 - [Pipedrive.AddLeadLabelRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddLeadLabelRequest.md)
 - [Pipedrive.AddLeadRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddLeadRequest.md)
 - [Pipedrive.AddNewPipeline](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddNewPipeline.md)
 - [Pipedrive.AddNewPipelineAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddNewPipelineAllOf.md)
 - [Pipedrive.AddNoteRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddNoteRequest.md)
 - [Pipedrive.AddNoteRequestAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddNoteRequestAllOf.md)
 - [Pipedrive.AddOrUpdateGoalResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddOrUpdateGoalResponse200.md)
 - [Pipedrive.AddOrUpdateLeadLabelResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddOrUpdateLeadLabelResponse200.md)
 - [Pipedrive.AddOrUpdateRoleSettingRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddOrUpdateRoleSettingRequest.md)
 - [Pipedrive.AddOrganizationFollowerRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddOrganizationFollowerRequest.md)
 - [Pipedrive.AddOrganizationRelationshipRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddOrganizationRelationshipRequest.md)
 - [Pipedrive.AddPersonFollowerRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddPersonFollowerRequest.md)
 - [Pipedrive.AddPersonPictureResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddPersonPictureResponse.md)
 - [Pipedrive.AddPersonPictureResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddPersonPictureResponseAllOf.md)
 - [Pipedrive.AddPersonResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddPersonResponse.md)
 - [Pipedrive.AddPersonResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddPersonResponseAllOf.md)
 - [Pipedrive.AddProductAttachmentDetails](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddProductAttachmentDetails.md)
 - [Pipedrive.AddProductAttachmentDetailsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddProductAttachmentDetailsAllOf.md)
 - [Pipedrive.AddProductFollowerRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddProductFollowerRequest.md)
 - [Pipedrive.AddProductRequestBody](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddProductRequestBody.md)
 - [Pipedrive.AddProductRequestBodyAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddProductRequestBodyAllOf.md)
 - [Pipedrive.AddProjectResponse201](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddProjectResponse201.md)
 - [Pipedrive.AddRole](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddRole.md)
 - [Pipedrive.AddRoleAssignmentRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddRoleAssignmentRequest.md)
 - [Pipedrive.AddTaskResponse201](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddTaskResponse201.md)
 - [Pipedrive.AddTeamUserRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddTeamUserRequest.md)
 - [Pipedrive.AddUserRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddUserRequest.md)
 - [Pipedrive.AddWebhookRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddWebhookRequest.md)
 - [Pipedrive.AddedDealFollower](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddedDealFollower.md)
 - [Pipedrive.AddedDealFollowerData](https://github.com/pipedrive/client-nodejs/blob/master/docs/AddedDealFollowerData.md)
 - [Pipedrive.AdditionalBaseOrganizationItemInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/AdditionalBaseOrganizationItemInfo.md)
 - [Pipedrive.AdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/AdditionalData.md)
 - [Pipedrive.AdditionalDataWithCursorPagination](https://github.com/pipedrive/client-nodejs/blob/master/docs/AdditionalDataWithCursorPagination.md)
 - [Pipedrive.AdditionalDataWithOffsetPagination](https://github.com/pipedrive/client-nodejs/blob/master/docs/AdditionalDataWithOffsetPagination.md)
 - [Pipedrive.AdditionalDataWithPaginationDetails](https://github.com/pipedrive/client-nodejs/blob/master/docs/AdditionalDataWithPaginationDetails.md)
 - [Pipedrive.AdditionalMergePersonInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/AdditionalMergePersonInfo.md)
 - [Pipedrive.AdditionalPersonInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/AdditionalPersonInfo.md)
 - [Pipedrive.AllOrganizationRelationshipsGetResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/AllOrganizationRelationshipsGetResponse.md)
 - [Pipedrive.AllOrganizationRelationshipsGetResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/AllOrganizationRelationshipsGetResponseAllOf.md)
 - [Pipedrive.AllOrganizationRelationshipsGetResponseAllOfRelatedObjects](https://github.com/pipedrive/client-nodejs/blob/master/docs/AllOrganizationRelationshipsGetResponseAllOfRelatedObjects.md)
 - [Pipedrive.AllOrganizationsGetResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/AllOrganizationsGetResponse.md)
 - [Pipedrive.AllOrganizationsGetResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/AllOrganizationsGetResponseAllOf.md)
 - [Pipedrive.AllOrganizationsGetResponseAllOfRelatedObjects](https://github.com/pipedrive/client-nodejs/blob/master/docs/AllOrganizationsGetResponseAllOfRelatedObjects.md)
 - [Pipedrive.ArrayPrices](https://github.com/pipedrive/client-nodejs/blob/master/docs/ArrayPrices.md)
 - [Pipedrive.Assignee](https://github.com/pipedrive/client-nodejs/blob/master/docs/Assignee.md)
 - [Pipedrive.BaseComment](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseComment.md)
 - [Pipedrive.BaseCurrency](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseCurrency.md)
 - [Pipedrive.BaseDeal](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseDeal.md)
 - [Pipedrive.BaseFollowerItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseFollowerItem.md)
 - [Pipedrive.BaseMailThread](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseMailThread.md)
 - [Pipedrive.BaseMailThreadAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseMailThreadAllOf.md)
 - [Pipedrive.BaseMailThreadAllOfParties](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseMailThreadAllOfParties.md)
 - [Pipedrive.BaseMailThreadMessages](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseMailThreadMessages.md)
 - [Pipedrive.BaseMailThreadMessagesAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseMailThreadMessagesAllOf.md)
 - [Pipedrive.BaseNote](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseNote.md)
 - [Pipedrive.BaseNoteDealTitle](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseNoteDealTitle.md)
 - [Pipedrive.BaseNoteOrganization](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseNoteOrganization.md)
 - [Pipedrive.BaseNotePerson](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseNotePerson.md)
 - [Pipedrive.BaseOrganizationItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseOrganizationItem.md)
 - [Pipedrive.BaseOrganizationItemFields](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseOrganizationItemFields.md)
 - [Pipedrive.BaseOrganizationItemWithEditNameFlag](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseOrganizationItemWithEditNameFlag.md)
 - [Pipedrive.BaseOrganizationItemWithEditNameFlagAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseOrganizationItemWithEditNameFlagAllOf.md)
 - [Pipedrive.BaseOrganizationRelationshipItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseOrganizationRelationshipItem.md)
 - [Pipedrive.BasePersonItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/BasePersonItem.md)
 - [Pipedrive.BasePersonItemEmail](https://github.com/pipedrive/client-nodejs/blob/master/docs/BasePersonItemEmail.md)
 - [Pipedrive.BasePersonItemPhone](https://github.com/pipedrive/client-nodejs/blob/master/docs/BasePersonItemPhone.md)
 - [Pipedrive.BasePipeline](https://github.com/pipedrive/client-nodejs/blob/master/docs/BasePipeline.md)
 - [Pipedrive.BasePipelineWithSelectedFlag](https://github.com/pipedrive/client-nodejs/blob/master/docs/BasePipelineWithSelectedFlag.md)
 - [Pipedrive.BasePipelineWithSelectedFlagAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/BasePipelineWithSelectedFlagAllOf.md)
 - [Pipedrive.BaseProduct](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseProduct.md)
 - [Pipedrive.BaseResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseResponse.md)
 - [Pipedrive.BaseResponseWithStatus](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseResponseWithStatus.md)
 - [Pipedrive.BaseResponseWithStatusAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseResponseWithStatusAllOf.md)
 - [Pipedrive.BaseRole](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseRole.md)
 - [Pipedrive.BaseStage](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseStage.md)
 - [Pipedrive.BaseTeam](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseTeam.md)
 - [Pipedrive.BaseTeamAdditionalProperties](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseTeamAdditionalProperties.md)
 - [Pipedrive.BaseUser](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseUser.md)
 - [Pipedrive.BaseUserMe](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseUserMe.md)
 - [Pipedrive.BaseUserMeAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseUserMeAllOf.md)
 - [Pipedrive.BaseUserMeAllOfLanguage](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseUserMeAllOfLanguage.md)
 - [Pipedrive.BaseWebhook](https://github.com/pipedrive/client-nodejs/blob/master/docs/BaseWebhook.md)
 - [Pipedrive.BasicDeal](https://github.com/pipedrive/client-nodejs/blob/master/docs/BasicDeal.md)
 - [Pipedrive.BasicDealProduct](https://github.com/pipedrive/client-nodejs/blob/master/docs/BasicDealProduct.md)
 - [Pipedrive.BasicDealProductAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/BasicDealProductAllOf.md)
 - [Pipedrive.BasicGoal](https://github.com/pipedrive/client-nodejs/blob/master/docs/BasicGoal.md)
 - [Pipedrive.BasicOrganization](https://github.com/pipedrive/client-nodejs/blob/master/docs/BasicOrganization.md)
 - [Pipedrive.BasicPerson](https://github.com/pipedrive/client-nodejs/blob/master/docs/BasicPerson.md)
 - [Pipedrive.BasicPersonEmail](https://github.com/pipedrive/client-nodejs/blob/master/docs/BasicPersonEmail.md)
 - [Pipedrive.BillingFrequency](https://github.com/pipedrive/client-nodejs/blob/master/docs/BillingFrequency.md)
 - [Pipedrive.BillingFrequency1](https://github.com/pipedrive/client-nodejs/blob/master/docs/BillingFrequency1.md)
 - [Pipedrive.BulkDeleteResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/BulkDeleteResponse.md)
 - [Pipedrive.BulkDeleteResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/BulkDeleteResponseAllOf.md)
 - [Pipedrive.BulkDeleteResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/BulkDeleteResponseAllOfData.md)
 - [Pipedrive.CalculatedFields](https://github.com/pipedrive/client-nodejs/blob/master/docs/CalculatedFields.md)
 - [Pipedrive.CallLogObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogObject.md)
 - [Pipedrive.CallLogResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogResponse200.md)
 - [Pipedrive.CallLogResponse400](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogResponse400.md)
 - [Pipedrive.CallLogResponse403](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogResponse403.md)
 - [Pipedrive.CallLogResponse404](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogResponse404.md)
 - [Pipedrive.CallLogResponse409](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogResponse409.md)
 - [Pipedrive.CallLogResponse410](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogResponse410.md)
 - [Pipedrive.CallLogResponse500](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogResponse500.md)
 - [Pipedrive.CallLogsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogsResponse.md)
 - [Pipedrive.CallLogsResponseAdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/CallLogsResponseAdditionalData.md)
 - [Pipedrive.ChangelogResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ChangelogResponse.md)
 - [Pipedrive.ChangelogResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ChangelogResponseAllOf.md)
 - [Pipedrive.ChangelogResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ChangelogResponseAllOfData.md)
 - [Pipedrive.ChannelObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ChannelObject.md)
 - [Pipedrive.ChannelObjectResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ChannelObjectResponse.md)
 - [Pipedrive.ChannelObjectResponseData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ChannelObjectResponseData.md)
 - [Pipedrive.CommentPostPutObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/CommentPostPutObject.md)
 - [Pipedrive.CommonMailThread](https://github.com/pipedrive/client-nodejs/blob/master/docs/CommonMailThread.md)
 - [Pipedrive.CreateRemoteFileAndLinkItToItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/CreateRemoteFileAndLinkItToItem.md)
 - [Pipedrive.CreateTeam](https://github.com/pipedrive/client-nodejs/blob/master/docs/CreateTeam.md)
 - [Pipedrive.Currencies](https://github.com/pipedrive/client-nodejs/blob/master/docs/Currencies.md)
 - [Pipedrive.DealCollectionResponseObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealCollectionResponseObject.md)
 - [Pipedrive.DealCountAndActivityInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealCountAndActivityInfo.md)
 - [Pipedrive.DealFlowResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealFlowResponse.md)
 - [Pipedrive.DealFlowResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealFlowResponseAllOf.md)
 - [Pipedrive.DealFlowResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealFlowResponseAllOfData.md)
 - [Pipedrive.DealFlowResponseAllOfRelatedObjects](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealFlowResponseAllOfRelatedObjects.md)
 - [Pipedrive.DealListActivitiesResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealListActivitiesResponse.md)
 - [Pipedrive.DealListActivitiesResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealListActivitiesResponseAllOf.md)
 - [Pipedrive.DealListActivitiesResponseAllOfRelatedObjects](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealListActivitiesResponseAllOfRelatedObjects.md)
 - [Pipedrive.DealNonStrict](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealNonStrict.md)
 - [Pipedrive.DealNonStrictModeFields](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealNonStrictModeFields.md)
 - [Pipedrive.DealNonStrictModeFieldsCreatorUserId](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealNonStrictModeFieldsCreatorUserId.md)
 - [Pipedrive.DealNonStrictWithDetails](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealNonStrictWithDetails.md)
 - [Pipedrive.DealNonStrictWithDetailsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealNonStrictWithDetailsAllOf.md)
 - [Pipedrive.DealNonStrictWithDetailsAllOfAge](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealNonStrictWithDetailsAllOfAge.md)
 - [Pipedrive.DealNonStrictWithDetailsAllOfAverageTimeToWon](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealNonStrictWithDetailsAllOfAverageTimeToWon.md)
 - [Pipedrive.DealNonStrictWithDetailsAllOfStayInPipelineStages](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealNonStrictWithDetailsAllOfStayInPipelineStages.md)
 - [Pipedrive.DealOrganizationData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealOrganizationData.md)
 - [Pipedrive.DealOrganizationDataWithId](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealOrganizationDataWithId.md)
 - [Pipedrive.DealOrganizationDataWithIdAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealOrganizationDataWithIdAllOf.md)
 - [Pipedrive.DealParticipantCountInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealParticipantCountInfo.md)
 - [Pipedrive.DealParticipants](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealParticipants.md)
 - [Pipedrive.DealParticipantsChangelog](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealParticipantsChangelog.md)
 - [Pipedrive.DealPersonData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealPersonData.md)
 - [Pipedrive.DealPersonDataEmail](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealPersonDataEmail.md)
 - [Pipedrive.DealPersonDataPhone](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealPersonDataPhone.md)
 - [Pipedrive.DealPersonDataWithId](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealPersonDataWithId.md)
 - [Pipedrive.DealPersonDataWithIdAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealPersonDataWithIdAllOf.md)
 - [Pipedrive.DealProductRequestBody](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealProductRequestBody.md)
 - [Pipedrive.DealSearchItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSearchItem.md)
 - [Pipedrive.DealSearchItemItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSearchItemItem.md)
 - [Pipedrive.DealSearchItemItemOrganization](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSearchItemItemOrganization.md)
 - [Pipedrive.DealSearchItemItemOwner](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSearchItemItemOwner.md)
 - [Pipedrive.DealSearchItemItemPerson](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSearchItemItemPerson.md)
 - [Pipedrive.DealSearchItemItemStage](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSearchItemItemStage.md)
 - [Pipedrive.DealSearchResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSearchResponse.md)
 - [Pipedrive.DealSearchResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSearchResponseAllOf.md)
 - [Pipedrive.DealSearchResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSearchResponseAllOfData.md)
 - [Pipedrive.DealStrict](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealStrict.md)
 - [Pipedrive.DealStrictModeFields](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealStrictModeFields.md)
 - [Pipedrive.DealStrictWithMergeId](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealStrictWithMergeId.md)
 - [Pipedrive.DealStrictWithMergeIdAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealStrictWithMergeIdAllOf.md)
 - [Pipedrive.DealSummary](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSummary.md)
 - [Pipedrive.DealSummaryPerCurrency](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSummaryPerCurrency.md)
 - [Pipedrive.DealSummaryPerCurrencyFull](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSummaryPerCurrencyFull.md)
 - [Pipedrive.DealSummaryPerCurrencyFullCURRENCYID](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSummaryPerCurrencyFullCURRENCYID.md)
 - [Pipedrive.DealSummaryPerStages](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSummaryPerStages.md)
 - [Pipedrive.DealSummaryPerStagesSTAGEID](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSummaryPerStagesSTAGEID.md)
 - [Pipedrive.DealSummaryPerStagesSTAGEIDCURRENCYID](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealSummaryPerStagesSTAGEIDCURRENCYID.md)
 - [Pipedrive.DealTitleParameter](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealTitleParameter.md)
 - [Pipedrive.DealUserData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealUserData.md)
 - [Pipedrive.DealUserDataWithId](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealUserDataWithId.md)
 - [Pipedrive.DealUserDataWithIdAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealUserDataWithIdAllOf.md)
 - [Pipedrive.DealsCountAndActivityInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsCountAndActivityInfo.md)
 - [Pipedrive.DealsCountInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsCountInfo.md)
 - [Pipedrive.DealsMovementsInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsMovementsInfo.md)
 - [Pipedrive.DealsMovementsInfoFormattedValues](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsMovementsInfoFormattedValues.md)
 - [Pipedrive.DealsMovementsInfoValues](https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsMovementsInfoValues.md)
 - [Pipedrive.DeleteActivitiesResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteActivitiesResponse200.md)
 - [Pipedrive.DeleteActivitiesResponse200Data](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteActivitiesResponse200Data.md)
 - [Pipedrive.DeleteActivityResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteActivityResponse200.md)
 - [Pipedrive.DeleteActivityResponse200Data](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteActivityResponse200Data.md)
 - [Pipedrive.DeleteChannelSuccess](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteChannelSuccess.md)
 - [Pipedrive.DeleteComment](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteComment.md)
 - [Pipedrive.DeleteConversationSuccess](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteConversationSuccess.md)
 - [Pipedrive.DeleteDeal](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteDeal.md)
 - [Pipedrive.DeleteDealData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteDealData.md)
 - [Pipedrive.DeleteDealFollower](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteDealFollower.md)
 - [Pipedrive.DeleteDealFollowerData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteDealFollowerData.md)
 - [Pipedrive.DeleteDealParticipant](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteDealParticipant.md)
 - [Pipedrive.DeleteDealParticipantData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteDealParticipantData.md)
 - [Pipedrive.DeleteDealProduct](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteDealProduct.md)
 - [Pipedrive.DeleteDealProductData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteDealProductData.md)
 - [Pipedrive.DeleteFile](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteFile.md)
 - [Pipedrive.DeleteFileData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteFileData.md)
 - [Pipedrive.DeleteGoalResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteGoalResponse200.md)
 - [Pipedrive.DeleteMultipleDeals](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteMultipleDeals.md)
 - [Pipedrive.DeleteMultipleDealsData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteMultipleDealsData.md)
 - [Pipedrive.DeleteMultipleProductFieldsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteMultipleProductFieldsResponse.md)
 - [Pipedrive.DeleteMultipleProductFieldsResponseData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteMultipleProductFieldsResponseData.md)
 - [Pipedrive.DeleteNote](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteNote.md)
 - [Pipedrive.DeletePersonResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeletePersonResponse.md)
 - [Pipedrive.DeletePersonResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeletePersonResponseAllOf.md)
 - [Pipedrive.DeletePersonResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeletePersonResponseAllOfData.md)
 - [Pipedrive.DeletePersonsInBulkResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeletePersonsInBulkResponse.md)
 - [Pipedrive.DeletePersonsInBulkResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeletePersonsInBulkResponseAllOf.md)
 - [Pipedrive.DeletePersonsInBulkResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeletePersonsInBulkResponseAllOfData.md)
 - [Pipedrive.DeletePipelineResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeletePipelineResponse200.md)
 - [Pipedrive.DeletePipelineResponse200Data](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeletePipelineResponse200Data.md)
 - [Pipedrive.DeleteProductFieldResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteProductFieldResponse.md)
 - [Pipedrive.DeleteProductFieldResponseData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteProductFieldResponseData.md)
 - [Pipedrive.DeleteProductFollowerResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteProductFollowerResponse.md)
 - [Pipedrive.DeleteProductFollowerResponseData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteProductFollowerResponseData.md)
 - [Pipedrive.DeleteProductResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteProductResponse.md)
 - [Pipedrive.DeleteProductResponseData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteProductResponseData.md)
 - [Pipedrive.DeleteProject](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteProject.md)
 - [Pipedrive.DeleteProjectData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteProjectData.md)
 - [Pipedrive.DeleteProjectResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteProjectResponse200.md)
 - [Pipedrive.DeleteResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteResponse.md)
 - [Pipedrive.DeleteResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteResponseAllOf.md)
 - [Pipedrive.DeleteResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteResponseAllOfData.md)
 - [Pipedrive.DeleteRole](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteRole.md)
 - [Pipedrive.DeleteRoleAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteRoleAllOf.md)
 - [Pipedrive.DeleteRoleAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteRoleAllOfData.md)
 - [Pipedrive.DeleteRoleAssignment](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteRoleAssignment.md)
 - [Pipedrive.DeleteRoleAssignmentAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteRoleAssignmentAllOf.md)
 - [Pipedrive.DeleteRoleAssignmentAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteRoleAssignmentAllOfData.md)
 - [Pipedrive.DeleteRoleAssignmentRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteRoleAssignmentRequest.md)
 - [Pipedrive.DeleteStageResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteStageResponse200.md)
 - [Pipedrive.DeleteStageResponse200Data](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteStageResponse200Data.md)
 - [Pipedrive.DeleteStagesResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteStagesResponse200.md)
 - [Pipedrive.DeleteStagesResponse200Data](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteStagesResponse200Data.md)
 - [Pipedrive.DeleteTask](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteTask.md)
 - [Pipedrive.DeleteTaskData](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteTaskData.md)
 - [Pipedrive.DeleteTaskResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteTaskResponse200.md)
 - [Pipedrive.DeleteTeamUserRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/DeleteTeamUserRequest.md)
 - [Pipedrive.Duration](https://github.com/pipedrive/client-nodejs/blob/master/docs/Duration.md)
 - [Pipedrive.EditPipeline](https://github.com/pipedrive/client-nodejs/blob/master/docs/EditPipeline.md)
 - [Pipedrive.EditPipelineAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/EditPipelineAllOf.md)
 - [Pipedrive.EmailInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/EmailInfo.md)
 - [Pipedrive.ExpectedOutcome](https://github.com/pipedrive/client-nodejs/blob/master/docs/ExpectedOutcome.md)
 - [Pipedrive.FailResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/FailResponse.md)
 - [Pipedrive.Field](https://github.com/pipedrive/client-nodejs/blob/master/docs/Field.md)
 - [Pipedrive.FieldCreateRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/FieldCreateRequest.md)
 - [Pipedrive.FieldCreateRequestAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/FieldCreateRequestAllOf.md)
 - [Pipedrive.FieldResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/FieldResponse.md)
 - [Pipedrive.FieldResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/FieldResponseAllOf.md)
 - [Pipedrive.FieldType](https://github.com/pipedrive/client-nodejs/blob/master/docs/FieldType.md)
 - [Pipedrive.FieldTypeAsString](https://github.com/pipedrive/client-nodejs/blob/master/docs/FieldTypeAsString.md)
 - [Pipedrive.FieldUpdateRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/FieldUpdateRequest.md)
 - [Pipedrive.FieldsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/FieldsResponse.md)
 - [Pipedrive.FieldsResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/FieldsResponseAllOf.md)
 - [Pipedrive.FileData](https://github.com/pipedrive/client-nodejs/blob/master/docs/FileData.md)
 - [Pipedrive.FileItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/FileItem.md)
 - [Pipedrive.FilterGetItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/FilterGetItem.md)
 - [Pipedrive.FilterType](https://github.com/pipedrive/client-nodejs/blob/master/docs/FilterType.md)
 - [Pipedrive.FiltersBulkDeleteResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersBulkDeleteResponse.md)
 - [Pipedrive.FiltersBulkDeleteResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersBulkDeleteResponseAllOf.md)
 - [Pipedrive.FiltersBulkDeleteResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersBulkDeleteResponseAllOfData.md)
 - [Pipedrive.FiltersBulkGetResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersBulkGetResponse.md)
 - [Pipedrive.FiltersBulkGetResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersBulkGetResponseAllOf.md)
 - [Pipedrive.FiltersDeleteResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersDeleteResponse.md)
 - [Pipedrive.FiltersDeleteResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersDeleteResponseAllOf.md)
 - [Pipedrive.FiltersDeleteResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersDeleteResponseAllOfData.md)
 - [Pipedrive.FiltersGetResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersGetResponse.md)
 - [Pipedrive.FiltersGetResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersGetResponseAllOf.md)
 - [Pipedrive.FiltersPostResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersPostResponse.md)
 - [Pipedrive.FiltersPostResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersPostResponseAllOf.md)
 - [Pipedrive.FiltersPostResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/FiltersPostResponseAllOfData.md)
 - [Pipedrive.FindGoalResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/FindGoalResponse.md)
 - [Pipedrive.FollowerData](https://github.com/pipedrive/client-nodejs/blob/master/docs/FollowerData.md)
 - [Pipedrive.FollowerDataWithID](https://github.com/pipedrive/client-nodejs/blob/master/docs/FollowerDataWithID.md)
 - [Pipedrive.FollowerDataWithIDAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/FollowerDataWithIDAllOf.md)
 - [Pipedrive.FullProjectObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/FullProjectObject.md)
 - [Pipedrive.FullRole](https://github.com/pipedrive/client-nodejs/blob/master/docs/FullRole.md)
 - [Pipedrive.FullRoleAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/FullRoleAllOf.md)
 - [Pipedrive.FullTaskObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/FullTaskObject.md)
 - [Pipedrive.GetActivitiesCollectionResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetActivitiesCollectionResponse200.md)
 - [Pipedrive.GetActivitiesResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetActivitiesResponse200.md)
 - [Pipedrive.GetActivitiesResponse200RelatedObjects](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetActivitiesResponse200RelatedObjects.md)
 - [Pipedrive.GetActivityResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetActivityResponse200.md)
 - [Pipedrive.GetAddProductAttachementDetails](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetAddProductAttachementDetails.md)
 - [Pipedrive.GetAddUpdateStage](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetAddUpdateStage.md)
 - [Pipedrive.GetAddedDeal](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetAddedDeal.md)
 - [Pipedrive.GetAllFiles](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetAllFiles.md)
 - [Pipedrive.GetAllPersonsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetAllPersonsResponse.md)
 - [Pipedrive.GetAllPersonsResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetAllPersonsResponseAllOf.md)
 - [Pipedrive.GetAllPipelines](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetAllPipelines.md)
 - [Pipedrive.GetAllPipelinesAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetAllPipelinesAllOf.md)
 - [Pipedrive.GetAllProductFieldsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetAllProductFieldsResponse.md)
 - [Pipedrive.GetComments](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetComments.md)
 - [Pipedrive.GetDeal](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDeal.md)
 - [Pipedrive.GetDealAdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealAdditionalData.md)
 - [Pipedrive.GetDealRelatedObjects](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealRelatedObjects.md)
 - [Pipedrive.GetDeals](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDeals.md)
 - [Pipedrive.GetDealsCollection](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsCollection.md)
 - [Pipedrive.GetDealsConversionRatesInPipeline](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsConversionRatesInPipeline.md)
 - [Pipedrive.GetDealsConversionRatesInPipelineAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsConversionRatesInPipelineAllOf.md)
 - [Pipedrive.GetDealsConversionRatesInPipelineAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsConversionRatesInPipelineAllOfData.md)
 - [Pipedrive.GetDealsMovementsInPipeline](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsMovementsInPipeline.md)
 - [Pipedrive.GetDealsMovementsInPipelineAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsMovementsInPipelineAllOf.md)
 - [Pipedrive.GetDealsMovementsInPipelineAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsMovementsInPipelineAllOfData.md)
 - [Pipedrive.GetDealsMovementsInPipelineAllOfDataAverageAgeInDays](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsMovementsInPipelineAllOfDataAverageAgeInDays.md)
 - [Pipedrive.GetDealsMovementsInPipelineAllOfDataAverageAgeInDaysByStages](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsMovementsInPipelineAllOfDataAverageAgeInDaysByStages.md)
 - [Pipedrive.GetDealsMovementsInPipelineAllOfDataMovementsBetweenStages](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsMovementsInPipelineAllOfDataMovementsBetweenStages.md)
 - [Pipedrive.GetDealsRelatedObjects](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsRelatedObjects.md)
 - [Pipedrive.GetDealsSummary](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsSummary.md)
 - [Pipedrive.GetDealsSummaryData](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsSummaryData.md)
 - [Pipedrive.GetDealsSummaryDataValuesTotal](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsSummaryDataValuesTotal.md)
 - [Pipedrive.GetDealsSummaryDataWeightedValuesTotal](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsSummaryDataWeightedValuesTotal.md)
 - [Pipedrive.GetDealsTimeline](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsTimeline.md)
 - [Pipedrive.GetDealsTimelineData](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsTimelineData.md)
 - [Pipedrive.GetDealsTimelineDataTotals](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDealsTimelineDataTotals.md)
 - [Pipedrive.GetDuplicatedDeal](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetDuplicatedDeal.md)
 - [Pipedrive.GetGoalResultResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetGoalResultResponse200.md)
 - [Pipedrive.GetGoalsResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetGoalsResponse200.md)
 - [Pipedrive.GetLeadLabelsResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetLeadLabelsResponse200.md)
 - [Pipedrive.GetLeadSourcesResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetLeadSourcesResponse200.md)
 - [Pipedrive.GetLeadSourcesResponse200Data](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetLeadSourcesResponse200Data.md)
 - [Pipedrive.GetLeadsResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetLeadsResponse200.md)
 - [Pipedrive.GetMergedDeal](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetMergedDeal.md)
 - [Pipedrive.GetNotes](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetNotes.md)
 - [Pipedrive.GetOneFile](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetOneFile.md)
 - [Pipedrive.GetOnePipeline](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetOnePipeline.md)
 - [Pipedrive.GetOnePipelineAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetOnePipelineAllOf.md)
 - [Pipedrive.GetOneStage](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetOneStage.md)
 - [Pipedrive.GetPersonDetailsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetPersonDetailsResponse.md)
 - [Pipedrive.GetPersonDetailsResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetPersonDetailsResponseAllOf.md)
 - [Pipedrive.GetPersonDetailsResponseAllOfAdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetPersonDetailsResponseAllOfAdditionalData.md)
 - [Pipedrive.GetProductAttachementDetails](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetProductAttachementDetails.md)
 - [Pipedrive.GetProductFieldResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetProductFieldResponse.md)
 - [Pipedrive.GetProjectBoardResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetProjectBoardResponse200.md)
 - [Pipedrive.GetProjectBoardsResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetProjectBoardsResponse200.md)
 - [Pipedrive.GetProjectGroupsResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetProjectGroupsResponse200.md)
 - [Pipedrive.GetProjectPhaseResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetProjectPhaseResponse200.md)
 - [Pipedrive.GetProjectPhasesResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetProjectPhasesResponse200.md)
 - [Pipedrive.GetProjectPlanResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetProjectPlanResponse200.md)
 - [Pipedrive.GetProjectResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetProjectResponse200.md)
 - [Pipedrive.GetProjectTemplateResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetProjectTemplateResponse200.md)
 - [Pipedrive.GetProjectTemplatesResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetProjectTemplatesResponse200.md)
 - [Pipedrive.GetProjectsResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetProjectsResponse200.md)
 - [Pipedrive.GetRecents](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRecents.md)
 - [Pipedrive.GetRecentsAdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRecentsAdditionalData.md)
 - [Pipedrive.GetRole](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRole.md)
 - [Pipedrive.GetRoleAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRoleAllOf.md)
 - [Pipedrive.GetRoleAllOfAdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRoleAllOfAdditionalData.md)
 - [Pipedrive.GetRoleAssignments](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRoleAssignments.md)
 - [Pipedrive.GetRoleAssignmentsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRoleAssignmentsAllOf.md)
 - [Pipedrive.GetRolePipelines](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRolePipelines.md)
 - [Pipedrive.GetRolePipelinesAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRolePipelinesAllOf.md)
 - [Pipedrive.GetRolePipelinesAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRolePipelinesAllOfData.md)
 - [Pipedrive.GetRoleSettings](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRoleSettings.md)
 - [Pipedrive.GetRoleSettingsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRoleSettingsAllOf.md)
 - [Pipedrive.GetRoles](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRoles.md)
 - [Pipedrive.GetRolesAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetRolesAllOf.md)
 - [Pipedrive.GetStageDeals](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetStageDeals.md)
 - [Pipedrive.GetStages](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetStages.md)
 - [Pipedrive.GetTaskResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetTaskResponse200.md)
 - [Pipedrive.GetTasksResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/GetTasksResponse200.md)
 - [Pipedrive.GoalResults](https://github.com/pipedrive/client-nodejs/blob/master/docs/GoalResults.md)
 - [Pipedrive.GoalType](https://github.com/pipedrive/client-nodejs/blob/master/docs/GoalType.md)
 - [Pipedrive.GoalsResponseComponent](https://github.com/pipedrive/client-nodejs/blob/master/docs/GoalsResponseComponent.md)
 - [Pipedrive.IconKey](https://github.com/pipedrive/client-nodejs/blob/master/docs/IconKey.md)
 - [Pipedrive.InlineResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/InlineResponse200.md)
 - [Pipedrive.InlineResponse2001](https://github.com/pipedrive/client-nodejs/blob/master/docs/InlineResponse2001.md)
 - [Pipedrive.InlineResponse2002](https://github.com/pipedrive/client-nodejs/blob/master/docs/InlineResponse2002.md)
 - [Pipedrive.InlineResponse400](https://github.com/pipedrive/client-nodejs/blob/master/docs/InlineResponse400.md)
 - [Pipedrive.InlineResponse4001](https://github.com/pipedrive/client-nodejs/blob/master/docs/InlineResponse4001.md)
 - [Pipedrive.InlineResponse4001AdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/InlineResponse4001AdditionalData.md)
 - [Pipedrive.InlineResponse400AdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/InlineResponse400AdditionalData.md)
 - [Pipedrive.InlineResponse403](https://github.com/pipedrive/client-nodejs/blob/master/docs/InlineResponse403.md)
 - [Pipedrive.InlineResponse4031](https://github.com/pipedrive/client-nodejs/blob/master/docs/InlineResponse4031.md)
 - [Pipedrive.InlineResponse4031AdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/InlineResponse4031AdditionalData.md)
 - [Pipedrive.InlineResponse403AdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/InlineResponse403AdditionalData.md)
 - [Pipedrive.InlineResponse404](https://github.com/pipedrive/client-nodejs/blob/master/docs/InlineResponse404.md)
 - [Pipedrive.InlineResponse404AdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/InlineResponse404AdditionalData.md)
 - [Pipedrive.ItemSearchAdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ItemSearchAdditionalData.md)
 - [Pipedrive.ItemSearchAdditionalDataPagination](https://github.com/pipedrive/client-nodejs/blob/master/docs/ItemSearchAdditionalDataPagination.md)
 - [Pipedrive.ItemSearchFieldResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ItemSearchFieldResponse.md)
 - [Pipedrive.ItemSearchFieldResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ItemSearchFieldResponseAllOf.md)
 - [Pipedrive.ItemSearchFieldResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ItemSearchFieldResponseAllOfData.md)
 - [Pipedrive.ItemSearchItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/ItemSearchItem.md)
 - [Pipedrive.ItemSearchResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ItemSearchResponse.md)
 - [Pipedrive.ItemSearchResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ItemSearchResponseAllOf.md)
 - [Pipedrive.ItemSearchResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ItemSearchResponseAllOfData.md)
 - [Pipedrive.LeadIdResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadIdResponse200.md)
 - [Pipedrive.LeadIdResponse200Data](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadIdResponse200Data.md)
 - [Pipedrive.LeadLabelColor](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadLabelColor.md)
 - [Pipedrive.LeadLabelResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadLabelResponse.md)
 - [Pipedrive.LeadResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadResponse.md)
 - [Pipedrive.LeadResponse404](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadResponse404.md)
 - [Pipedrive.LeadSearchItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadSearchItem.md)
 - [Pipedrive.LeadSearchItemItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadSearchItemItem.md)
 - [Pipedrive.LeadSearchItemItemOrganization](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadSearchItemItemOrganization.md)
 - [Pipedrive.LeadSearchItemItemOwner](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadSearchItemItemOwner.md)
 - [Pipedrive.LeadSearchItemItemPerson](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadSearchItemItemPerson.md)
 - [Pipedrive.LeadSearchResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadSearchResponse.md)
 - [Pipedrive.LeadSearchResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadSearchResponseAllOf.md)
 - [Pipedrive.LeadSearchResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadSearchResponseAllOfData.md)
 - [Pipedrive.LeadValue](https://github.com/pipedrive/client-nodejs/blob/master/docs/LeadValue.md)
 - [Pipedrive.LinkRemoteFileToItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/LinkRemoteFileToItem.md)
 - [Pipedrive.ListActivitiesResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListActivitiesResponse.md)
 - [Pipedrive.ListActivitiesResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListActivitiesResponseAllOf.md)
 - [Pipedrive.ListDealsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListDealsResponse.md)
 - [Pipedrive.ListDealsResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListDealsResponseAllOf.md)
 - [Pipedrive.ListDealsResponseAllOfRelatedObjects](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListDealsResponseAllOfRelatedObjects.md)
 - [Pipedrive.ListFilesResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListFilesResponse.md)
 - [Pipedrive.ListFilesResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListFilesResponseAllOf.md)
 - [Pipedrive.ListFollowersResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListFollowersResponse.md)
 - [Pipedrive.ListFollowersResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListFollowersResponseAllOf.md)
 - [Pipedrive.ListFollowersResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListFollowersResponseAllOfData.md)
 - [Pipedrive.ListMailMessagesResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListMailMessagesResponse.md)
 - [Pipedrive.ListMailMessagesResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListMailMessagesResponseAllOf.md)
 - [Pipedrive.ListMailMessagesResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListMailMessagesResponseAllOfData.md)
 - [Pipedrive.ListPermittedUsersResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListPermittedUsersResponse.md)
 - [Pipedrive.ListPermittedUsersResponse1](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListPermittedUsersResponse1.md)
 - [Pipedrive.ListPermittedUsersResponse1AllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListPermittedUsersResponse1AllOf.md)
 - [Pipedrive.ListPersonProductsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListPersonProductsResponse.md)
 - [Pipedrive.ListPersonProductsResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListPersonProductsResponseAllOf.md)
 - [Pipedrive.ListPersonProductsResponseAllOfDEALID](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListPersonProductsResponseAllOfDEALID.md)
 - [Pipedrive.ListPersonProductsResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListPersonProductsResponseAllOfData.md)
 - [Pipedrive.ListPersonsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListPersonsResponse.md)
 - [Pipedrive.ListPersonsResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListPersonsResponseAllOf.md)
 - [Pipedrive.ListPersonsResponseAllOfRelatedObjects](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListPersonsResponseAllOfRelatedObjects.md)
 - [Pipedrive.ListProductAdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListProductAdditionalData.md)
 - [Pipedrive.ListProductAdditionalDataAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListProductAdditionalDataAllOf.md)
 - [Pipedrive.ListProductFilesResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListProductFilesResponse.md)
 - [Pipedrive.ListProductFilesResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListProductFilesResponseAllOf.md)
 - [Pipedrive.ListProductFollowersResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListProductFollowersResponse.md)
 - [Pipedrive.ListProductFollowersResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListProductFollowersResponseAllOf.md)
 - [Pipedrive.ListProductFollowersResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListProductFollowersResponseAllOfData.md)
 - [Pipedrive.ListProductsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListProductsResponse.md)
 - [Pipedrive.ListProductsResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListProductsResponseAllOf.md)
 - [Pipedrive.ListProductsResponseAllOfRelatedObjects](https://github.com/pipedrive/client-nodejs/blob/master/docs/ListProductsResponseAllOfRelatedObjects.md)
 - [Pipedrive.MailMessage](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailMessage.md)
 - [Pipedrive.MailMessageAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailMessageAllOf.md)
 - [Pipedrive.MailMessageData](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailMessageData.md)
 - [Pipedrive.MailMessageItemForList](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailMessageItemForList.md)
 - [Pipedrive.MailMessageItemForListAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailMessageItemForListAllOf.md)
 - [Pipedrive.MailParticipant](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailParticipant.md)
 - [Pipedrive.MailServiceBaseResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailServiceBaseResponse.md)
 - [Pipedrive.MailThread](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailThread.md)
 - [Pipedrive.MailThreadAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailThreadAllOf.md)
 - [Pipedrive.MailThreadDelete](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailThreadDelete.md)
 - [Pipedrive.MailThreadDeleteAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailThreadDeleteAllOf.md)
 - [Pipedrive.MailThreadDeleteAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailThreadDeleteAllOfData.md)
 - [Pipedrive.MailThreadMessages](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailThreadMessages.md)
 - [Pipedrive.MailThreadMessagesAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailThreadMessagesAllOf.md)
 - [Pipedrive.MailThreadOne](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailThreadOne.md)
 - [Pipedrive.MailThreadOneAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailThreadOneAllOf.md)
 - [Pipedrive.MailThreadParticipant](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailThreadParticipant.md)
 - [Pipedrive.MailThreadPut](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailThreadPut.md)
 - [Pipedrive.MailThreadPutAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/MailThreadPutAllOf.md)
 - [Pipedrive.MarketingStatus](https://github.com/pipedrive/client-nodejs/blob/master/docs/MarketingStatus.md)
 - [Pipedrive.MergeDealsRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/MergeDealsRequest.md)
 - [Pipedrive.MergeOrganizationsRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/MergeOrganizationsRequest.md)
 - [Pipedrive.MergePersonDealRelatedInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/MergePersonDealRelatedInfo.md)
 - [Pipedrive.MergePersonItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/MergePersonItem.md)
 - [Pipedrive.MergePersonsRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/MergePersonsRequest.md)
 - [Pipedrive.MergePersonsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/MergePersonsResponse.md)
 - [Pipedrive.MergePersonsResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/MergePersonsResponseAllOf.md)
 - [Pipedrive.MessageObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/MessageObject.md)
 - [Pipedrive.MessageObjectAttachments](https://github.com/pipedrive/client-nodejs/blob/master/docs/MessageObjectAttachments.md)
 - [Pipedrive.NameObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/NameObject.md)
 - [Pipedrive.NewDeal](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewDeal.md)
 - [Pipedrive.NewDealParameters](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewDealParameters.md)
 - [Pipedrive.NewDealProduct](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewDealProduct.md)
 - [Pipedrive.NewDealProductAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewDealProductAllOf.md)
 - [Pipedrive.NewDealProductAllOf1](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewDealProductAllOf1.md)
 - [Pipedrive.NewDealProductAllOf2](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewDealProductAllOf2.md)
 - [Pipedrive.NewFollowerResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewFollowerResponse.md)
 - [Pipedrive.NewFollowerResponseData](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewFollowerResponseData.md)
 - [Pipedrive.NewGoal](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewGoal.md)
 - [Pipedrive.NewOrganization](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewOrganization.md)
 - [Pipedrive.NewOrganizationAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewOrganizationAllOf.md)
 - [Pipedrive.NewPerson](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewPerson.md)
 - [Pipedrive.NewPersonAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewPersonAllOf.md)
 - [Pipedrive.NewProductField](https://github.com/pipedrive/client-nodejs/blob/master/docs/NewProductField.md)
 - [Pipedrive.Note](https://github.com/pipedrive/client-nodejs/blob/master/docs/Note.md)
 - [Pipedrive.NoteAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/NoteAllOf.md)
 - [Pipedrive.NoteConnectToParams](https://github.com/pipedrive/client-nodejs/blob/master/docs/NoteConnectToParams.md)
 - [Pipedrive.NoteCreatorUser](https://github.com/pipedrive/client-nodejs/blob/master/docs/NoteCreatorUser.md)
 - [Pipedrive.NoteField](https://github.com/pipedrive/client-nodejs/blob/master/docs/NoteField.md)
 - [Pipedrive.NoteFieldOptions](https://github.com/pipedrive/client-nodejs/blob/master/docs/NoteFieldOptions.md)
 - [Pipedrive.NoteFieldsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/NoteFieldsResponse.md)
 - [Pipedrive.NoteFieldsResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/NoteFieldsResponseAllOf.md)
 - [Pipedrive.NoteParams](https://github.com/pipedrive/client-nodejs/blob/master/docs/NoteParams.md)
 - [Pipedrive.NumberBoolean](https://github.com/pipedrive/client-nodejs/blob/master/docs/NumberBoolean.md)
 - [Pipedrive.NumberBooleanDefault0](https://github.com/pipedrive/client-nodejs/blob/master/docs/NumberBooleanDefault0.md)
 - [Pipedrive.NumberBooleanDefault1](https://github.com/pipedrive/client-nodejs/blob/master/docs/NumberBooleanDefault1.md)
 - [Pipedrive.OneLeadResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/OneLeadResponse200.md)
 - [Pipedrive.OrgAndOwnerId](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrgAndOwnerId.md)
 - [Pipedrive.OrganizationAddressInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationAddressInfo.md)
 - [Pipedrive.OrganizationCountAndAddressInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationCountAndAddressInfo.md)
 - [Pipedrive.OrganizationCountInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationCountInfo.md)
 - [Pipedrive.OrganizationData](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationData.md)
 - [Pipedrive.OrganizationDataWithId](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationDataWithId.md)
 - [Pipedrive.OrganizationDataWithIdAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationDataWithIdAllOf.md)
 - [Pipedrive.OrganizationDataWithIdAndActiveFlag](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationDataWithIdAndActiveFlag.md)
 - [Pipedrive.OrganizationDataWithIdAndActiveFlagAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationDataWithIdAndActiveFlagAllOf.md)
 - [Pipedrive.OrganizationDeleteResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationDeleteResponse.md)
 - [Pipedrive.OrganizationDeleteResponseData](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationDeleteResponseData.md)
 - [Pipedrive.OrganizationDetailsGetResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationDetailsGetResponse.md)
 - [Pipedrive.OrganizationDetailsGetResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationDetailsGetResponseAllOf.md)
 - [Pipedrive.OrganizationDetailsGetResponseAllOfAdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationDetailsGetResponseAllOfAdditionalData.md)
 - [Pipedrive.OrganizationFlowResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFlowResponse.md)
 - [Pipedrive.OrganizationFlowResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFlowResponseAllOf.md)
 - [Pipedrive.OrganizationFlowResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFlowResponseAllOfData.md)
 - [Pipedrive.OrganizationFlowResponseAllOfRelatedObjects](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFlowResponseAllOfRelatedObjects.md)
 - [Pipedrive.OrganizationFollowerDeleteResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFollowerDeleteResponse.md)
 - [Pipedrive.OrganizationFollowerDeleteResponseData](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFollowerDeleteResponseData.md)
 - [Pipedrive.OrganizationFollowerItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFollowerItem.md)
 - [Pipedrive.OrganizationFollowerItemAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFollowerItemAllOf.md)
 - [Pipedrive.OrganizationFollowerPostResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFollowerPostResponse.md)
 - [Pipedrive.OrganizationFollowersListResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationFollowersListResponse.md)
 - [Pipedrive.OrganizationItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationItem.md)
 - [Pipedrive.OrganizationItemAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationItemAllOf.md)
 - [Pipedrive.OrganizationPostResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationPostResponse.md)
 - [Pipedrive.OrganizationPostResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationPostResponseAllOf.md)
 - [Pipedrive.OrganizationRelationship](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationship.md)
 - [Pipedrive.OrganizationRelationshipDeleteResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipDeleteResponse.md)
 - [Pipedrive.OrganizationRelationshipDeleteResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipDeleteResponseAllOf.md)
 - [Pipedrive.OrganizationRelationshipDeleteResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipDeleteResponseAllOfData.md)
 - [Pipedrive.OrganizationRelationshipDetails](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipDetails.md)
 - [Pipedrive.OrganizationRelationshipGetResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipGetResponse.md)
 - [Pipedrive.OrganizationRelationshipGetResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipGetResponseAllOf.md)
 - [Pipedrive.OrganizationRelationshipPostResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipPostResponse.md)
 - [Pipedrive.OrganizationRelationshipPostResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipPostResponseAllOf.md)
 - [Pipedrive.OrganizationRelationshipUpdateResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipUpdateResponse.md)
 - [Pipedrive.OrganizationRelationshipWithCalculatedFields](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationRelationshipWithCalculatedFields.md)
 - [Pipedrive.OrganizationSearchItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationSearchItem.md)
 - [Pipedrive.OrganizationSearchItemItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationSearchItemItem.md)
 - [Pipedrive.OrganizationSearchResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationSearchResponse.md)
 - [Pipedrive.OrganizationSearchResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationSearchResponseAllOf.md)
 - [Pipedrive.OrganizationSearchResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationSearchResponseAllOfData.md)
 - [Pipedrive.OrganizationUpdateResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationUpdateResponse.md)
 - [Pipedrive.OrganizationUpdateResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationUpdateResponseAllOf.md)
 - [Pipedrive.OrganizationsCollectionResponseObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsCollectionResponseObject.md)
 - [Pipedrive.OrganizationsCollectionResponseObjectAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsCollectionResponseObjectAllOf.md)
 - [Pipedrive.OrganizationsDeleteResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsDeleteResponse.md)
 - [Pipedrive.OrganizationsDeleteResponseData](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsDeleteResponseData.md)
 - [Pipedrive.OrganizationsMergeResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsMergeResponse.md)
 - [Pipedrive.OrganizationsMergeResponseData](https://github.com/pipedrive/client-nodejs/blob/master/docs/OrganizationsMergeResponseData.md)
 - [Pipedrive.Owner](https://github.com/pipedrive/client-nodejs/blob/master/docs/Owner.md)
 - [Pipedrive.OwnerAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/OwnerAllOf.md)
 - [Pipedrive.PaginationDetails](https://github.com/pipedrive/client-nodejs/blob/master/docs/PaginationDetails.md)
 - [Pipedrive.PaginationDetailsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PaginationDetailsAllOf.md)
 - [Pipedrive.Params](https://github.com/pipedrive/client-nodejs/blob/master/docs/Params.md)
 - [Pipedrive.ParticipantsChangelog](https://github.com/pipedrive/client-nodejs/blob/master/docs/ParticipantsChangelog.md)
 - [Pipedrive.ParticipantsChangelogItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/ParticipantsChangelogItem.md)
 - [Pipedrive.PaymentItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/PaymentItem.md)
 - [Pipedrive.PaymentsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/PaymentsResponse.md)
 - [Pipedrive.PaymentsResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PaymentsResponseAllOf.md)
 - [Pipedrive.PermissionSets](https://github.com/pipedrive/client-nodejs/blob/master/docs/PermissionSets.md)
 - [Pipedrive.PermissionSetsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PermissionSetsAllOf.md)
 - [Pipedrive.PermissionSetsItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/PermissionSetsItem.md)
 - [Pipedrive.PersonCountAndEmailInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonCountAndEmailInfo.md)
 - [Pipedrive.PersonCountEmailDealAndActivityInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonCountEmailDealAndActivityInfo.md)
 - [Pipedrive.PersonCountInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonCountInfo.md)
 - [Pipedrive.PersonData](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonData.md)
 - [Pipedrive.PersonDataEmail](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonDataEmail.md)
 - [Pipedrive.PersonDataPhone](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonDataPhone.md)
 - [Pipedrive.PersonDataWithActiveFlag](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonDataWithActiveFlag.md)
 - [Pipedrive.PersonDataWithActiveFlagAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonDataWithActiveFlagAllOf.md)
 - [Pipedrive.PersonFlowResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonFlowResponse.md)
 - [Pipedrive.PersonFlowResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonFlowResponseAllOf.md)
 - [Pipedrive.PersonFlowResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonFlowResponseAllOfData.md)
 - [Pipedrive.PersonItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonItem.md)
 - [Pipedrive.PersonListProduct](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonListProduct.md)
 - [Pipedrive.PersonNameCountAndEmailInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonNameCountAndEmailInfo.md)
 - [Pipedrive.PersonNameCountAndEmailInfoWithIds](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonNameCountAndEmailInfoWithIds.md)
 - [Pipedrive.PersonNameCountAndEmailInfoWithIdsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonNameCountAndEmailInfoWithIdsAllOf.md)
 - [Pipedrive.PersonNameInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonNameInfo.md)
 - [Pipedrive.PersonNameInfoWithOrgAndOwnerId](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonNameInfoWithOrgAndOwnerId.md)
 - [Pipedrive.PersonSearchItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonSearchItem.md)
 - [Pipedrive.PersonSearchItemItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonSearchItemItem.md)
 - [Pipedrive.PersonSearchItemItemOrganization](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonSearchItemItemOrganization.md)
 - [Pipedrive.PersonSearchItemItemOwner](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonSearchItemItemOwner.md)
 - [Pipedrive.PersonSearchResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonSearchResponse.md)
 - [Pipedrive.PersonSearchResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonSearchResponseAllOf.md)
 - [Pipedrive.PersonSearchResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonSearchResponseAllOfData.md)
 - [Pipedrive.PersonsCollectionResponseObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/PersonsCollectionResponseObject.md)
 - [Pipedrive.PictureData](https://github.com/pipedrive/client-nodejs/blob/master/docs/PictureData.md)
 - [Pipedrive.PictureDataPictures](https://github.com/pipedrive/client-nodejs/blob/master/docs/PictureDataPictures.md)
 - [Pipedrive.PictureDataWithID](https://github.com/pipedrive/client-nodejs/blob/master/docs/PictureDataWithID.md)
 - [Pipedrive.PictureDataWithIDAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PictureDataWithIDAllOf.md)
 - [Pipedrive.PictureDataWithValue](https://github.com/pipedrive/client-nodejs/blob/master/docs/PictureDataWithValue.md)
 - [Pipedrive.PictureDataWithValueAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PictureDataWithValueAllOf.md)
 - [Pipedrive.Pipeline](https://github.com/pipedrive/client-nodejs/blob/master/docs/Pipeline.md)
 - [Pipedrive.PipelineDetails](https://github.com/pipedrive/client-nodejs/blob/master/docs/PipelineDetails.md)
 - [Pipedrive.PipelineDetailsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PipelineDetailsAllOf.md)
 - [Pipedrive.PostComment](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostComment.md)
 - [Pipedrive.PostDealParticipants](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostDealParticipants.md)
 - [Pipedrive.PostDealParticipantsRelatedObjects](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostDealParticipantsRelatedObjects.md)
 - [Pipedrive.PostGoalResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostGoalResponse.md)
 - [Pipedrive.PostNote](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostNote.md)
 - [Pipedrive.PostRoleAssignment](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostRoleAssignment.md)
 - [Pipedrive.PostRoleAssignmentAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostRoleAssignmentAllOf.md)
 - [Pipedrive.PostRoleAssignmentAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostRoleAssignmentAllOfData.md)
 - [Pipedrive.PostRoleSettings](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostRoleSettings.md)
 - [Pipedrive.PostRoleSettingsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostRoleSettingsAllOf.md)
 - [Pipedrive.PostRoleSettingsAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostRoleSettingsAllOfData.md)
 - [Pipedrive.PostRoles](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostRoles.md)
 - [Pipedrive.PostRolesAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostRolesAllOf.md)
 - [Pipedrive.PostRolesAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/PostRolesAllOfData.md)
 - [Pipedrive.ProductAttachementFields](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductAttachementFields.md)
 - [Pipedrive.ProductAttachmentDetails](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductAttachmentDetails.md)
 - [Pipedrive.ProductBaseDeal](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductBaseDeal.md)
 - [Pipedrive.ProductField](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductField.md)
 - [Pipedrive.ProductFieldAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductFieldAllOf.md)
 - [Pipedrive.ProductFileItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductFileItem.md)
 - [Pipedrive.ProductListItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductListItem.md)
 - [Pipedrive.ProductRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductRequest.md)
 - [Pipedrive.ProductResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductResponse.md)
 - [Pipedrive.ProductSearchItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductSearchItem.md)
 - [Pipedrive.ProductSearchItemItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductSearchItemItem.md)
 - [Pipedrive.ProductSearchItemItemOwner](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductSearchItemItemOwner.md)
 - [Pipedrive.ProductSearchResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductSearchResponse.md)
 - [Pipedrive.ProductSearchResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductSearchResponseAllOf.md)
 - [Pipedrive.ProductSearchResponseAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductSearchResponseAllOfData.md)
 - [Pipedrive.ProductWithArrayPrices](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductWithArrayPrices.md)
 - [Pipedrive.ProductsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProductsResponse.md)
 - [Pipedrive.ProjectBoardObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectBoardObject.md)
 - [Pipedrive.ProjectGroupsObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectGroupsObject.md)
 - [Pipedrive.ProjectId](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectId.md)
 - [Pipedrive.ProjectMandatoryObjectFragment](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectMandatoryObjectFragment.md)
 - [Pipedrive.ProjectNotChangeableObjectFragment](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectNotChangeableObjectFragment.md)
 - [Pipedrive.ProjectObjectFragment](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectObjectFragment.md)
 - [Pipedrive.ProjectPhaseObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectPhaseObject.md)
 - [Pipedrive.ProjectPlanItemObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectPlanItemObject.md)
 - [Pipedrive.ProjectPostObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectPostObject.md)
 - [Pipedrive.ProjectPostObjectAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectPostObjectAllOf.md)
 - [Pipedrive.ProjectPutObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectPutObject.md)
 - [Pipedrive.ProjectPutPlanItemBodyObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectPutPlanItemBodyObject.md)
 - [Pipedrive.ProjectResponseObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ProjectResponseObject.md)
 - [Pipedrive.PutRole](https://github.com/pipedrive/client-nodejs/blob/master/docs/PutRole.md)
 - [Pipedrive.PutRoleAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/PutRoleAllOf.md)
 - [Pipedrive.PutRoleAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/PutRoleAllOfData.md)
 - [Pipedrive.PutRolePipelinesBody](https://github.com/pipedrive/client-nodejs/blob/master/docs/PutRolePipelinesBody.md)
 - [Pipedrive.RecentDataProduct](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentDataProduct.md)
 - [Pipedrive.RecentsActivity](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentsActivity.md)
 - [Pipedrive.RecentsActivityType](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentsActivityType.md)
 - [Pipedrive.RecentsDeal](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentsDeal.md)
 - [Pipedrive.RecentsFile](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentsFile.md)
 - [Pipedrive.RecentsFilter](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentsFilter.md)
 - [Pipedrive.RecentsNote](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentsNote.md)
 - [Pipedrive.RecentsOrganization](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentsOrganization.md)
 - [Pipedrive.RecentsPerson](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentsPerson.md)
 - [Pipedrive.RecentsPipeline](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentsPipeline.md)
 - [Pipedrive.RecentsProduct](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentsProduct.md)
 - [Pipedrive.RecentsStage](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentsStage.md)
 - [Pipedrive.RecentsUser](https://github.com/pipedrive/client-nodejs/blob/master/docs/RecentsUser.md)
 - [Pipedrive.RelatedDealData](https://github.com/pipedrive/client-nodejs/blob/master/docs/RelatedDealData.md)
 - [Pipedrive.RelatedDealDataDEALID](https://github.com/pipedrive/client-nodejs/blob/master/docs/RelatedDealDataDEALID.md)
 - [Pipedrive.RelatedFollowerData](https://github.com/pipedrive/client-nodejs/blob/master/docs/RelatedFollowerData.md)
 - [Pipedrive.RelatedOrganizationData](https://github.com/pipedrive/client-nodejs/blob/master/docs/RelatedOrganizationData.md)
 - [Pipedrive.RelatedOrganizationDataWithActiveFlag](https://github.com/pipedrive/client-nodejs/blob/master/docs/RelatedOrganizationDataWithActiveFlag.md)
 - [Pipedrive.RelatedOrganizationName](https://github.com/pipedrive/client-nodejs/blob/master/docs/RelatedOrganizationName.md)
 - [Pipedrive.RelatedPersonData](https://github.com/pipedrive/client-nodejs/blob/master/docs/RelatedPersonData.md)
 - [Pipedrive.RelatedPersonDataWithActiveFlag](https://github.com/pipedrive/client-nodejs/blob/master/docs/RelatedPersonDataWithActiveFlag.md)
 - [Pipedrive.RelatedPictureData](https://github.com/pipedrive/client-nodejs/blob/master/docs/RelatedPictureData.md)
 - [Pipedrive.RelatedUserData](https://github.com/pipedrive/client-nodejs/blob/master/docs/RelatedUserData.md)
 - [Pipedrive.RelationshipOrganizationInfoItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/RelationshipOrganizationInfoItem.md)
 - [Pipedrive.RelationshipOrganizationInfoItemAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/RelationshipOrganizationInfoItemAllOf.md)
 - [Pipedrive.RelationshipOrganizationInfoItemWithActiveFlag](https://github.com/pipedrive/client-nodejs/blob/master/docs/RelationshipOrganizationInfoItemWithActiveFlag.md)
 - [Pipedrive.RequiredPostProjectParameters](https://github.com/pipedrive/client-nodejs/blob/master/docs/RequiredPostProjectParameters.md)
 - [Pipedrive.RequiredPostTaskParameters](https://github.com/pipedrive/client-nodejs/blob/master/docs/RequiredPostTaskParameters.md)
 - [Pipedrive.RequredTitleParameter](https://github.com/pipedrive/client-nodejs/blob/master/docs/RequredTitleParameter.md)
 - [Pipedrive.ResponseCallLogObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/ResponseCallLogObject.md)
 - [Pipedrive.ResponseCallLogObjectAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/ResponseCallLogObjectAllOf.md)
 - [Pipedrive.RoleAssignment](https://github.com/pipedrive/client-nodejs/blob/master/docs/RoleAssignment.md)
 - [Pipedrive.RoleAssignmentAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/RoleAssignmentAllOf.md)
 - [Pipedrive.RoleSettings](https://github.com/pipedrive/client-nodejs/blob/master/docs/RoleSettings.md)
 - [Pipedrive.RolesAdditionalData](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesAdditionalData.md)
 - [Pipedrive.RolesAdditionalDataPagination](https://github.com/pipedrive/client-nodejs/blob/master/docs/RolesAdditionalDataPagination.md)
 - [Pipedrive.SinglePermissionSetsItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/SinglePermissionSetsItem.md)
 - [Pipedrive.SinglePermissionSetsItemAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/SinglePermissionSetsItemAllOf.md)
 - [Pipedrive.Stage](https://github.com/pipedrive/client-nodejs/blob/master/docs/Stage.md)
 - [Pipedrive.StageConversions](https://github.com/pipedrive/client-nodejs/blob/master/docs/StageConversions.md)
 - [Pipedrive.StageDetails](https://github.com/pipedrive/client-nodejs/blob/master/docs/StageDetails.md)
 - [Pipedrive.StageWithPipelineInfo](https://github.com/pipedrive/client-nodejs/blob/master/docs/StageWithPipelineInfo.md)
 - [Pipedrive.StageWithPipelineInfoAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/StageWithPipelineInfoAllOf.md)
 - [Pipedrive.SubRole](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubRole.md)
 - [Pipedrive.SubRoleAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubRoleAllOf.md)
 - [Pipedrive.SubscriptionAddonsResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionAddonsResponse.md)
 - [Pipedrive.SubscriptionAddonsResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionAddonsResponseAllOf.md)
 - [Pipedrive.SubscriptionInstallmentCreateRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionInstallmentCreateRequest.md)
 - [Pipedrive.SubscriptionInstallmentUpdateRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionInstallmentUpdateRequest.md)
 - [Pipedrive.SubscriptionItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionItem.md)
 - [Pipedrive.SubscriptionRecurringCancelRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionRecurringCancelRequest.md)
 - [Pipedrive.SubscriptionRecurringCreateRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionRecurringCreateRequest.md)
 - [Pipedrive.SubscriptionRecurringUpdateRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionRecurringUpdateRequest.md)
 - [Pipedrive.SubscriptionsIdResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionsIdResponse.md)
 - [Pipedrive.SubscriptionsIdResponseAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/SubscriptionsIdResponseAllOf.md)
 - [Pipedrive.TaskId](https://github.com/pipedrive/client-nodejs/blob/master/docs/TaskId.md)
 - [Pipedrive.TaskMandatoryObjectFragment](https://github.com/pipedrive/client-nodejs/blob/master/docs/TaskMandatoryObjectFragment.md)
 - [Pipedrive.TaskNotChangeableObjectFragment](https://github.com/pipedrive/client-nodejs/blob/master/docs/TaskNotChangeableObjectFragment.md)
 - [Pipedrive.TaskObjectFragment](https://github.com/pipedrive/client-nodejs/blob/master/docs/TaskObjectFragment.md)
 - [Pipedrive.TaskPostObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/TaskPostObject.md)
 - [Pipedrive.TaskPutObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/TaskPutObject.md)
 - [Pipedrive.TaskResponseObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/TaskResponseObject.md)
 - [Pipedrive.Team](https://github.com/pipedrive/client-nodejs/blob/master/docs/Team.md)
 - [Pipedrive.TeamAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/TeamAllOf.md)
 - [Pipedrive.TeamId](https://github.com/pipedrive/client-nodejs/blob/master/docs/TeamId.md)
 - [Pipedrive.Teams](https://github.com/pipedrive/client-nodejs/blob/master/docs/Teams.md)
 - [Pipedrive.TeamsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/TeamsAllOf.md)
 - [Pipedrive.TemplateObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/TemplateObject.md)
 - [Pipedrive.TemplateResponseObject](https://github.com/pipedrive/client-nodejs/blob/master/docs/TemplateResponseObject.md)
 - [Pipedrive.Unauthorized](https://github.com/pipedrive/client-nodejs/blob/master/docs/Unauthorized.md)
 - [Pipedrive.UpdateActivityResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateActivityResponse200.md)
 - [Pipedrive.UpdateDealParameters](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateDealParameters.md)
 - [Pipedrive.UpdateDealProduct](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateDealProduct.md)
 - [Pipedrive.UpdateDealRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateDealRequest.md)
 - [Pipedrive.UpdateFile](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateFile.md)
 - [Pipedrive.UpdateFilterRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateFilterRequest.md)
 - [Pipedrive.UpdateLeadLabelRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateLeadLabelRequest.md)
 - [Pipedrive.UpdateLeadRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateLeadRequest.md)
 - [Pipedrive.UpdateOrganization](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateOrganization.md)
 - [Pipedrive.UpdateOrganizationAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateOrganizationAllOf.md)
 - [Pipedrive.UpdatePerson](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdatePerson.md)
 - [Pipedrive.UpdatePersonAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdatePersonAllOf.md)
 - [Pipedrive.UpdatePersonResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdatePersonResponse.md)
 - [Pipedrive.UpdateProductField](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateProductField.md)
 - [Pipedrive.UpdateProductRequestBody](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateProductRequestBody.md)
 - [Pipedrive.UpdateProductResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateProductResponse.md)
 - [Pipedrive.UpdateProjectResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateProjectResponse200.md)
 - [Pipedrive.UpdateStageRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateStageRequest.md)
 - [Pipedrive.UpdateStageRequestAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateStageRequestAllOf.md)
 - [Pipedrive.UpdateTaskResponse200](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateTaskResponse200.md)
 - [Pipedrive.UpdateTeam](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateTeam.md)
 - [Pipedrive.UpdateTeamAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateTeamAllOf.md)
 - [Pipedrive.UpdateTeamWithAdditionalProperties](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateTeamWithAdditionalProperties.md)
 - [Pipedrive.UpdateUserRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdateUserRequest.md)
 - [Pipedrive.UpdatedActivityPlanItem200](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdatedActivityPlanItem200.md)
 - [Pipedrive.UpdatedTaskPlanItem200](https://github.com/pipedrive/client-nodejs/blob/master/docs/UpdatedTaskPlanItem200.md)
 - [Pipedrive.User](https://github.com/pipedrive/client-nodejs/blob/master/docs/User.md)
 - [Pipedrive.UserAccess](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserAccess.md)
 - [Pipedrive.UserAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserAllOf.md)
 - [Pipedrive.UserAssignmentToPermissionSet](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserAssignmentToPermissionSet.md)
 - [Pipedrive.UserAssignmentsToPermissionSet](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserAssignmentsToPermissionSet.md)
 - [Pipedrive.UserAssignmentsToPermissionSetAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserAssignmentsToPermissionSetAllOf.md)
 - [Pipedrive.UserConnections](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserConnections.md)
 - [Pipedrive.UserConnectionsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserConnectionsAllOf.md)
 - [Pipedrive.UserConnectionsAllOfData](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserConnectionsAllOfData.md)
 - [Pipedrive.UserData](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserData.md)
 - [Pipedrive.UserDataWithId](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserDataWithId.md)
 - [Pipedrive.UserIDs](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserIDs.md)
 - [Pipedrive.UserIDsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserIDsAllOf.md)
 - [Pipedrive.UserMe](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserMe.md)
 - [Pipedrive.UserMeAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserMeAllOf.md)
 - [Pipedrive.UserPermissions](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserPermissions.md)
 - [Pipedrive.UserPermissionsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserPermissionsAllOf.md)
 - [Pipedrive.UserPermissionsItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserPermissionsItem.md)
 - [Pipedrive.UserProviderLinkCreateRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserProviderLinkCreateRequest.md)
 - [Pipedrive.UserProviderLinkErrorResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserProviderLinkErrorResponse.md)
 - [Pipedrive.UserProviderLinkSuccessResponse](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserProviderLinkSuccessResponse.md)
 - [Pipedrive.UserProviderLinkSuccessResponseData](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserProviderLinkSuccessResponseData.md)
 - [Pipedrive.UserSettings](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserSettings.md)
 - [Pipedrive.UserSettingsAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserSettingsAllOf.md)
 - [Pipedrive.UserSettingsItem](https://github.com/pipedrive/client-nodejs/blob/master/docs/UserSettingsItem.md)
 - [Pipedrive.Users](https://github.com/pipedrive/client-nodejs/blob/master/docs/Users.md)
 - [Pipedrive.UsersAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/UsersAllOf.md)
 - [Pipedrive.VisibleTo](https://github.com/pipedrive/client-nodejs/blob/master/docs/VisibleTo.md)
 - [Pipedrive.Webhook](https://github.com/pipedrive/client-nodejs/blob/master/docs/Webhook.md)
 - [Pipedrive.WebhookAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/WebhookAllOf.md)
 - [Pipedrive.WebhookBadRequest](https://github.com/pipedrive/client-nodejs/blob/master/docs/WebhookBadRequest.md)
 - [Pipedrive.WebhookBadRequestAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/WebhookBadRequestAllOf.md)
 - [Pipedrive.Webhooks](https://github.com/pipedrive/client-nodejs/blob/master/docs/Webhooks.md)
 - [Pipedrive.WebhooksAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/WebhooksAllOf.md)
 - [Pipedrive.WebhooksDeleteForbiddenSchema](https://github.com/pipedrive/client-nodejs/blob/master/docs/WebhooksDeleteForbiddenSchema.md)
 - [Pipedrive.WebhooksDeleteForbiddenSchemaAllOf](https://github.com/pipedrive/client-nodejs/blob/master/docs/WebhooksDeleteForbiddenSchemaAllOf.md)


