# Pipedrive client for NodeJS based apps
Pipedrive is a sales pipeline software that gets you organized.
It's a powerful sales CRM with effortless sales pipeline management.
See www.pipedrive.com for details.

This is the official Pipedrive API wrapper-client for NodeJS based apps, distributed by Pipedrive Inc freely under the MIT licence.
It provides convenient access to the Pipedrive API, allowing you to operate with objects such as Deals, Persons, Organizations, Products and much more.

## Installation
```
npm install pipedrive
```

## API Reference
The Pipedrive RESTful API Reference can be found at https://developers.pipedrive.com/docs/api/v1.
Pipedrive API’s core concepts for its usage can be found in our [Developer documentation](https://pipedrive.readme.io/docs/core-api-concepts-about-pipedrive-api).

## How to use it?

### With a pre-set API token
You can retrieve the api_token from your existing Pipedrive account’s settings page. A step-by-step guide is available [here](https://pipedrive.readme.io/docs/how-to-find-the-api-token).

```JavaScript
const express = require('express');
const app = express();
const pipedrive = require('pipedrive');

const PORT = 1800;

const defaultClient = pipedrive.ApiClient.instance;

// Configure API key authorization: apiToken
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = 'YOUR_API_TOKEN_HERE';

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
    const api = new pipedrive.DealsApi();
    const deals = await api.getDeals();

    res.send(deals);
});

```

### With OAuth 2
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

const apiClient = pipedrive.ApiClient.instance;

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

const lib = require('pipedrive');

const apiClient = lib.ApiClient.instance;

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
        const api = new lib.DealsApi();
        const deals = await api.getDeals();

        res.send(deals);
    } else {
        const authUrl = apiClient.buildAuthorizationUrl();;

        res.redirect(authUrl);
    }
});

app.get('/callback', (req, res) => {
    const authCode = req.query.code;
    const promise = apiClient.authorize(code);

    promise.then(() => {
        req.session.accessToken = apiClient.authentications.oauth2.accessToken;
        res.redirect('/');
    }, (exception) => {
        // error occurred, exception will be of type src/exceptions/OAuthProviderException
    });
});

```

## Documentation for API Endpoints

All URIs are relative to *https://api.pipedrive.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Pipedrive.ActivitiesApi* | [**addActivity**](docs/ActivitiesApi.md#addActivity) | **POST** /activities | Add an activity
*Pipedrive.ActivitiesApi* | [**deleteActivities**](docs/ActivitiesApi.md#deleteActivities) | **DELETE** /activities | Delete multiple activities in bulk
*Pipedrive.ActivitiesApi* | [**deleteActivity**](docs/ActivitiesApi.md#deleteActivity) | **DELETE** /activities/{id} | Delete an activity
*Pipedrive.ActivitiesApi* | [**getActivities**](docs/ActivitiesApi.md#getActivities) | **GET** /activities | Get all activities assigned to a particular user
*Pipedrive.ActivitiesApi* | [**getActivity**](docs/ActivitiesApi.md#getActivity) | **GET** /activities/{id} | Get details of an activity
*Pipedrive.ActivitiesApi* | [**updateActivity**](docs/ActivitiesApi.md#updateActivity) | **PUT** /activities/{id} | Update an activity
*Pipedrive.ActivityFieldsApi* | [**getActivityFields**](docs/ActivityFieldsApi.md#getActivityFields) | **GET** /activityFields | Get all activity fields
*Pipedrive.ActivityTypesApi* | [**addActivityType**](docs/ActivityTypesApi.md#addActivityType) | **POST** /activityTypes | Add new activity type
*Pipedrive.ActivityTypesApi* | [**deleteActivityType**](docs/ActivityTypesApi.md#deleteActivityType) | **DELETE** /activityTypes/{id} | Delete an activity type
*Pipedrive.ActivityTypesApi* | [**deleteActivityTypes**](docs/ActivityTypesApi.md#deleteActivityTypes) | **DELETE** /activityTypes | Delete multiple activity types in bulk
*Pipedrive.ActivityTypesApi* | [**getActivityTypes**](docs/ActivityTypesApi.md#getActivityTypes) | **GET** /activityTypes | Get all activity types
*Pipedrive.ActivityTypesApi* | [**updateActivityType**](docs/ActivityTypesApi.md#updateActivityType) | **PUT** /activityTypes/{id} | Update an activity type
*Pipedrive.BillingApi* | [**getCompanyAddons**](docs/BillingApi.md#getCompanyAddons) | **GET** /billing/subscriptions/addons | Get all add-ons for a single company
*Pipedrive.CallLogsApi* | [**addCallLog**](docs/CallLogsApi.md#addCallLog) | **POST** /callLogs | Add a call log
*Pipedrive.CallLogsApi* | [**addCallLogAudioFile**](docs/CallLogsApi.md#addCallLogAudioFile) | **POST** /callLogs/{id}/recordings | Attach an audio file to the call log
*Pipedrive.CallLogsApi* | [**deleteCallLog**](docs/CallLogsApi.md#deleteCallLog) | **DELETE** /callLogs/{id} | Delete a call log
*Pipedrive.CallLogsApi* | [**getCallLog**](docs/CallLogsApi.md#getCallLog) | **GET** /callLogs/{id} | Get details of a call log
*Pipedrive.CallLogsApi* | [**getUserCallLogs**](docs/CallLogsApi.md#getUserCallLogs) | **GET** /callLogs | Get all call logs assigned to a particular user
*Pipedrive.ChannelsApi* | [**addChannel**](docs/ChannelsApi.md#addChannel) | **POST** /channels | Add a channel
*Pipedrive.ChannelsApi* | [**deleteChannel**](docs/ChannelsApi.md#deleteChannel) | **DELETE** /channels/{id} | Delete a channel
*Pipedrive.ChannelsApi* | [**deleteConversation**](docs/ChannelsApi.md#deleteConversation) | **DELETE** /channels/{channel-id}/conversations/{conversation-id} | Delete a conversation
*Pipedrive.ChannelsApi* | [**receiveMessage**](docs/ChannelsApi.md#receiveMessage) | **POST** /channels/messages/receive | Receives an incoming message
*Pipedrive.CurrenciesApi* | [**getCurrencies**](docs/CurrenciesApi.md#getCurrencies) | **GET** /currencies | Get all supported currencies
*Pipedrive.DealFieldsApi* | [**addDealField**](docs/DealFieldsApi.md#addDealField) | **POST** /dealFields | Add a new deal field
*Pipedrive.DealFieldsApi* | [**deleteDealField**](docs/DealFieldsApi.md#deleteDealField) | **DELETE** /dealFields/{id} | Delete a deal field
*Pipedrive.DealFieldsApi* | [**deleteDealFields**](docs/DealFieldsApi.md#deleteDealFields) | **DELETE** /dealFields | Delete multiple deal fields in bulk
*Pipedrive.DealFieldsApi* | [**getDealField**](docs/DealFieldsApi.md#getDealField) | **GET** /dealFields/{id} | Get one deal field
*Pipedrive.DealFieldsApi* | [**getDealFields**](docs/DealFieldsApi.md#getDealFields) | **GET** /dealFields | Get all deal fields
*Pipedrive.DealFieldsApi* | [**updateDealField**](docs/DealFieldsApi.md#updateDealField) | **PUT** /dealFields/{id} | Update a deal field
*Pipedrive.DealsApi* | [**addDeal**](docs/DealsApi.md#addDeal) | **POST** /deals | Add a deal
*Pipedrive.DealsApi* | [**addDealFollower**](docs/DealsApi.md#addDealFollower) | **POST** /deals/{id}/followers | Add a follower to a deal
*Pipedrive.DealsApi* | [**addDealParticipant**](docs/DealsApi.md#addDealParticipant) | **POST** /deals/{id}/participants | Add a participant to a deal
*Pipedrive.DealsApi* | [**addDealProduct**](docs/DealsApi.md#addDealProduct) | **POST** /deals/{id}/products | Add a product to the deal, eventually creating a new item called a deal-product
*Pipedrive.DealsApi* | [**deleteDeal**](docs/DealsApi.md#deleteDeal) | **DELETE** /deals/{id} | Delete a deal
*Pipedrive.DealsApi* | [**deleteDealFollower**](docs/DealsApi.md#deleteDealFollower) | **DELETE** /deals/{id}/followers/{follower_id} | Delete a follower from a deal
*Pipedrive.DealsApi* | [**deleteDealParticipant**](docs/DealsApi.md#deleteDealParticipant) | **DELETE** /deals/{id}/participants/{deal_participant_id} | Delete a participant from a deal
*Pipedrive.DealsApi* | [**deleteDealProduct**](docs/DealsApi.md#deleteDealProduct) | **DELETE** /deals/{id}/products/{product_attachment_id} | Delete an attached product from a deal
*Pipedrive.DealsApi* | [**deleteDeals**](docs/DealsApi.md#deleteDeals) | **DELETE** /deals | Delete multiple deals in bulk
*Pipedrive.DealsApi* | [**duplicateDeal**](docs/DealsApi.md#duplicateDeal) | **POST** /deals/{id}/duplicate | Duplicate deal
*Pipedrive.DealsApi* | [**getDeal**](docs/DealsApi.md#getDeal) | **GET** /deals/{id} | Get details of a deal
*Pipedrive.DealsApi* | [**getDealActivities**](docs/DealsApi.md#getDealActivities) | **GET** /deals/{id}/activities | List activities associated with a deal
*Pipedrive.DealsApi* | [**getDealFiles**](docs/DealsApi.md#getDealFiles) | **GET** /deals/{id}/files | List files attached to a deal
*Pipedrive.DealsApi* | [**getDealFollowers**](docs/DealsApi.md#getDealFollowers) | **GET** /deals/{id}/followers | List followers of a deal
*Pipedrive.DealsApi* | [**getDealMailMessages**](docs/DealsApi.md#getDealMailMessages) | **GET** /deals/{id}/mailMessages | List mail messages associated with a deal
*Pipedrive.DealsApi* | [**getDealParticipants**](docs/DealsApi.md#getDealParticipants) | **GET** /deals/{id}/participants | List participants of a deal
*Pipedrive.DealsApi* | [**getDealPersons**](docs/DealsApi.md#getDealPersons) | **GET** /deals/{id}/persons | List all persons associated with a deal
*Pipedrive.DealsApi* | [**getDealProducts**](docs/DealsApi.md#getDealProducts) | **GET** /deals/{id}/products | List products attached to a deal
*Pipedrive.DealsApi* | [**getDealUpdates**](docs/DealsApi.md#getDealUpdates) | **GET** /deals/{id}/flow | List updates about a deal
*Pipedrive.DealsApi* | [**getDealUsers**](docs/DealsApi.md#getDealUsers) | **GET** /deals/{id}/permittedUsers | List permitted users
*Pipedrive.DealsApi* | [**getDeals**](docs/DealsApi.md#getDeals) | **GET** /deals | Get all deals
*Pipedrive.DealsApi* | [**getDealsSummary**](docs/DealsApi.md#getDealsSummary) | **GET** /deals/summary | Get deals summary
*Pipedrive.DealsApi* | [**getDealsTimeline**](docs/DealsApi.md#getDealsTimeline) | **GET** /deals/timeline | Get deals timeline
*Pipedrive.DealsApi* | [**mergeDeals**](docs/DealsApi.md#mergeDeals) | **PUT** /deals/{id}/merge | Merge two deals
*Pipedrive.DealsApi* | [**searchDeals**](docs/DealsApi.md#searchDeals) | **GET** /deals/search | Search deals
*Pipedrive.DealsApi* | [**updateDeal**](docs/DealsApi.md#updateDeal) | **PUT** /deals/{id} | Update a deal
*Pipedrive.DealsApi* | [**updateDealProduct**](docs/DealsApi.md#updateDealProduct) | **PUT** /deals/{id}/products/{product_attachment_id} | Update product attachment details of the deal-product (a product already attached to a deal)
*Pipedrive.FilesApi* | [**addFile**](docs/FilesApi.md#addFile) | **POST** /files | Add file
*Pipedrive.FilesApi* | [**addFileAndLinkIt**](docs/FilesApi.md#addFileAndLinkIt) | **POST** /files/remote | Create a remote file and link it to an item
*Pipedrive.FilesApi* | [**deleteFile**](docs/FilesApi.md#deleteFile) | **DELETE** /files/{id} | Delete a file
*Pipedrive.FilesApi* | [**downloadFile**](docs/FilesApi.md#downloadFile) | **GET** /files/{id}/download | Download one file
*Pipedrive.FilesApi* | [**getFile**](docs/FilesApi.md#getFile) | **GET** /files/{id} | Get one file
*Pipedrive.FilesApi* | [**getFiles**](docs/FilesApi.md#getFiles) | **GET** /files | Get all files
*Pipedrive.FilesApi* | [**linkFileToItem**](docs/FilesApi.md#linkFileToItem) | **POST** /files/remoteLink | Link a remote file to an item
*Pipedrive.FilesApi* | [**updateFile**](docs/FilesApi.md#updateFile) | **PUT** /files/{id} | Update file details
*Pipedrive.FiltersApi* | [**addFilter**](docs/FiltersApi.md#addFilter) | **POST** /filters | Add a new filter
*Pipedrive.FiltersApi* | [**deleteFilter**](docs/FiltersApi.md#deleteFilter) | **DELETE** /filters/{id} | Delete a filter
*Pipedrive.FiltersApi* | [**deleteFilters**](docs/FiltersApi.md#deleteFilters) | **DELETE** /filters | Delete multiple filters in bulk
*Pipedrive.FiltersApi* | [**getFilter**](docs/FiltersApi.md#getFilter) | **GET** /filters/{id} | Get one filter
*Pipedrive.FiltersApi* | [**getFilterHelpers**](docs/FiltersApi.md#getFilterHelpers) | **GET** /filters/helpers | Get all filter helpers
*Pipedrive.FiltersApi* | [**getFilters**](docs/FiltersApi.md#getFilters) | **GET** /filters | Get all filters
*Pipedrive.FiltersApi* | [**updateFilter**](docs/FiltersApi.md#updateFilter) | **PUT** /filters/{id} | Update filter
*Pipedrive.GlobalMessagesApi* | [**deleteGlobalMessage**](docs/GlobalMessagesApi.md#deleteGlobalMessage) | **DELETE** /globalMessages/{id} | Dismiss a global message
*Pipedrive.GlobalMessagesApi* | [**getGlobalMessages**](docs/GlobalMessagesApi.md#getGlobalMessages) | **GET** /globalMessages | Get global messages
*Pipedrive.GoalsApi* | [**addGoal**](docs/GoalsApi.md#addGoal) | **POST** /goals | Add a new goal
*Pipedrive.GoalsApi* | [**deleteGoal**](docs/GoalsApi.md#deleteGoal) | **DELETE** /goals/{id} | Delete existing goal
*Pipedrive.GoalsApi* | [**getGoalResult**](docs/GoalsApi.md#getGoalResult) | **GET** /goals/{id}/results | Get result of a goal
*Pipedrive.GoalsApi* | [**getGoals**](docs/GoalsApi.md#getGoals) | **GET** /goals/find | Find goals
*Pipedrive.GoalsApi* | [**updateGoal**](docs/GoalsApi.md#updateGoal) | **PUT** /goals/{id} | Update existing goal
*Pipedrive.ItemSearchApi* | [**searchItem**](docs/ItemSearchApi.md#searchItem) | **GET** /itemSearch | Perform a search from multiple item types
*Pipedrive.ItemSearchApi* | [**searchItemByField**](docs/ItemSearchApi.md#searchItemByField) | **GET** /itemSearch/field | Perform a search using a specific field from an item type
*Pipedrive.LeadLabelsApi* | [**addLeadLabel**](docs/LeadLabelsApi.md#addLeadLabel) | **POST** /leadLabels | Add a lead label
*Pipedrive.LeadLabelsApi* | [**deleteLeadLabel**](docs/LeadLabelsApi.md#deleteLeadLabel) | **DELETE** /leadLabels/{id} | Delete a lead label
*Pipedrive.LeadLabelsApi* | [**getLeadLabels**](docs/LeadLabelsApi.md#getLeadLabels) | **GET** /leadLabels | Get all lead labels
*Pipedrive.LeadLabelsApi* | [**updateLeadLabel**](docs/LeadLabelsApi.md#updateLeadLabel) | **PATCH** /leadLabels/{id} | Update a lead label
*Pipedrive.LeadSourcesApi* | [**getLeadSources**](docs/LeadSourcesApi.md#getLeadSources) | **GET** /leadSources | Get all lead sources
*Pipedrive.LeadsApi* | [**addLead**](docs/LeadsApi.md#addLead) | **POST** /leads | Add a lead
*Pipedrive.LeadsApi* | [**deleteLead**](docs/LeadsApi.md#deleteLead) | **DELETE** /leads/{id} | Delete a lead
*Pipedrive.LeadsApi* | [**getLead**](docs/LeadsApi.md#getLead) | **GET** /leads/{id} | Get one lead
*Pipedrive.LeadsApi* | [**getLeads**](docs/LeadsApi.md#getLeads) | **GET** /leads | Get all leads
*Pipedrive.LeadsApi* | [**searchLeads**](docs/LeadsApi.md#searchLeads) | **GET** /leads/search | Search leads
*Pipedrive.LeadsApi* | [**updateLead**](docs/LeadsApi.md#updateLead) | **PATCH** /leads/{id} | Update a lead
*Pipedrive.LegacyTeamsApi* | [**addTeam**](docs/LegacyTeamsApi.md#addTeam) | **POST** /legacyTeams | Add a new team
*Pipedrive.LegacyTeamsApi* | [**addTeamUser**](docs/LegacyTeamsApi.md#addTeamUser) | **POST** /legacyTeams/{id}/users | Add users to a team
*Pipedrive.LegacyTeamsApi* | [**deleteTeamUser**](docs/LegacyTeamsApi.md#deleteTeamUser) | **DELETE** /legacyTeams/{id}/users | Delete users from a team
*Pipedrive.LegacyTeamsApi* | [**getTeam**](docs/LegacyTeamsApi.md#getTeam) | **GET** /legacyTeams/{id} | Get a single team
*Pipedrive.LegacyTeamsApi* | [**getTeamUsers**](docs/LegacyTeamsApi.md#getTeamUsers) | **GET** /legacyTeams/{id}/users | Get all users in a team
*Pipedrive.LegacyTeamsApi* | [**getTeams**](docs/LegacyTeamsApi.md#getTeams) | **GET** /legacyTeams | Get all teams
*Pipedrive.LegacyTeamsApi* | [**getUserTeams**](docs/LegacyTeamsApi.md#getUserTeams) | **GET** /legacyTeams/user/{id} | Get all teams of a user
*Pipedrive.LegacyTeamsApi* | [**updateTeam**](docs/LegacyTeamsApi.md#updateTeam) | **PUT** /legacyTeams/{id} | Update a team
*Pipedrive.MailboxApi* | [**deleteMailThread**](docs/MailboxApi.md#deleteMailThread) | **DELETE** /mailbox/mailThreads/{id} | Delete mail thread
*Pipedrive.MailboxApi* | [**getMailMessage**](docs/MailboxApi.md#getMailMessage) | **GET** /mailbox/mailMessages/{id} | Get one mail message
*Pipedrive.MailboxApi* | [**getMailThread**](docs/MailboxApi.md#getMailThread) | **GET** /mailbox/mailThreads/{id} | Get one mail thread
*Pipedrive.MailboxApi* | [**getMailThreadMessages**](docs/MailboxApi.md#getMailThreadMessages) | **GET** /mailbox/mailThreads/{id}/mailMessages | Get all mail messages of mail thread
*Pipedrive.MailboxApi* | [**getMailThreads**](docs/MailboxApi.md#getMailThreads) | **GET** /mailbox/mailThreads | Get mail threads
*Pipedrive.MailboxApi* | [**updateMailThreadDetails**](docs/MailboxApi.md#updateMailThreadDetails) | **PUT** /mailbox/mailThreads/{id} | Update mail thread details
*Pipedrive.NoteFieldsApi* | [**getNoteFields**](docs/NoteFieldsApi.md#getNoteFields) | **GET** /noteFields | Get all note fields
*Pipedrive.NotesApi* | [**addNote**](docs/NotesApi.md#addNote) | **POST** /notes | Add a note
*Pipedrive.NotesApi* | [**addNoteComment**](docs/NotesApi.md#addNoteComment) | **POST** /notes/{id}/comments | Add a comment to a note
*Pipedrive.NotesApi* | [**deleteComment**](docs/NotesApi.md#deleteComment) | **DELETE** /notes/{id}/comments/{commentId} | Delete a comment related to a note
*Pipedrive.NotesApi* | [**deleteNote**](docs/NotesApi.md#deleteNote) | **DELETE** /notes/{id} | Delete a note
*Pipedrive.NotesApi* | [**getComment**](docs/NotesApi.md#getComment) | **GET** /notes/{id}/comments/{commentId} | Get one comment
*Pipedrive.NotesApi* | [**getNote**](docs/NotesApi.md#getNote) | **GET** /notes/{id} | Get one note
*Pipedrive.NotesApi* | [**getNoteComments**](docs/NotesApi.md#getNoteComments) | **GET** /notes/{id}/comments | Get all comments for a note
*Pipedrive.NotesApi* | [**getNotes**](docs/NotesApi.md#getNotes) | **GET** /notes | Get all notes
*Pipedrive.NotesApi* | [**updateCommentForNote**](docs/NotesApi.md#updateCommentForNote) | **PUT** /notes/{id}/comments/{commentId} | Update a comment related to a note
*Pipedrive.NotesApi* | [**updateNote**](docs/NotesApi.md#updateNote) | **PUT** /notes/{id} | Update a note
*Pipedrive.OrganizationFieldsApi* | [**addOrganizationField**](docs/OrganizationFieldsApi.md#addOrganizationField) | **POST** /organizationFields | Add a new organization field
*Pipedrive.OrganizationFieldsApi* | [**deleteOrganizationField**](docs/OrganizationFieldsApi.md#deleteOrganizationField) | **DELETE** /organizationFields/{id} | Delete an organization field
*Pipedrive.OrganizationFieldsApi* | [**deleteOrganizationFields**](docs/OrganizationFieldsApi.md#deleteOrganizationFields) | **DELETE** /organizationFields | Delete multiple organization fields in bulk
*Pipedrive.OrganizationFieldsApi* | [**getOrganizationField**](docs/OrganizationFieldsApi.md#getOrganizationField) | **GET** /organizationFields/{id} | Get one organization field
*Pipedrive.OrganizationFieldsApi* | [**getOrganizationFields**](docs/OrganizationFieldsApi.md#getOrganizationFields) | **GET** /organizationFields | Get all organization fields
*Pipedrive.OrganizationFieldsApi* | [**updateOrganizationField**](docs/OrganizationFieldsApi.md#updateOrganizationField) | **PUT** /organizationFields/{id} | Update an organization field
*Pipedrive.OrganizationRelationshipsApi* | [**addOrganizationRelationship**](docs/OrganizationRelationshipsApi.md#addOrganizationRelationship) | **POST** /organizationRelationships | Create an organization relationship
*Pipedrive.OrganizationRelationshipsApi* | [**deleteOrganizationRelationship**](docs/OrganizationRelationshipsApi.md#deleteOrganizationRelationship) | **DELETE** /organizationRelationships/{id} | Delete an organization relationship
*Pipedrive.OrganizationRelationshipsApi* | [**getOrganizationRelationship**](docs/OrganizationRelationshipsApi.md#getOrganizationRelationship) | **GET** /organizationRelationships/{id} | Get one organization relationship
*Pipedrive.OrganizationRelationshipsApi* | [**getOrganizationRelationships**](docs/OrganizationRelationshipsApi.md#getOrganizationRelationships) | **GET** /organizationRelationships | Get all relationships for organization
*Pipedrive.OrganizationRelationshipsApi* | [**updateOrganizationRelationship**](docs/OrganizationRelationshipsApi.md#updateOrganizationRelationship) | **PUT** /organizationRelationships/{id} | Update an organization relationship
*Pipedrive.OrganizationsApi* | [**addOrganization**](docs/OrganizationsApi.md#addOrganization) | **POST** /organizations | Add an organization
*Pipedrive.OrganizationsApi* | [**addOrganizationFollower**](docs/OrganizationsApi.md#addOrganizationFollower) | **POST** /organizations/{id}/followers | Add a follower to an organization
*Pipedrive.OrganizationsApi* | [**deleteOrganization**](docs/OrganizationsApi.md#deleteOrganization) | **DELETE** /organizations/{id} | Delete an organization
*Pipedrive.OrganizationsApi* | [**deleteOrganizationFollower**](docs/OrganizationsApi.md#deleteOrganizationFollower) | **DELETE** /organizations/{id}/followers/{follower_id} | Delete a follower from an organization
*Pipedrive.OrganizationsApi* | [**deleteOrganizations**](docs/OrganizationsApi.md#deleteOrganizations) | **DELETE** /organizations | Delete multiple organizations in bulk
*Pipedrive.OrganizationsApi* | [**getOrganization**](docs/OrganizationsApi.md#getOrganization) | **GET** /organizations/{id} | Get details of an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationActivities**](docs/OrganizationsApi.md#getOrganizationActivities) | **GET** /organizations/{id}/activities | List activities associated with an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationDeals**](docs/OrganizationsApi.md#getOrganizationDeals) | **GET** /organizations/{id}/deals | List deals associated with an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationFiles**](docs/OrganizationsApi.md#getOrganizationFiles) | **GET** /organizations/{id}/files | List files attached to an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationFollowers**](docs/OrganizationsApi.md#getOrganizationFollowers) | **GET** /organizations/{id}/followers | List followers of an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationMailMessages**](docs/OrganizationsApi.md#getOrganizationMailMessages) | **GET** /organizations/{id}/mailMessages | List mail messages associated with an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationPersons**](docs/OrganizationsApi.md#getOrganizationPersons) | **GET** /organizations/{id}/persons | List persons of an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationUpdates**](docs/OrganizationsApi.md#getOrganizationUpdates) | **GET** /organizations/{id}/flow | List updates about an organization
*Pipedrive.OrganizationsApi* | [**getOrganizationUsers**](docs/OrganizationsApi.md#getOrganizationUsers) | **GET** /organizations/{id}/permittedUsers | List permitted users
*Pipedrive.OrganizationsApi* | [**getOrganizations**](docs/OrganizationsApi.md#getOrganizations) | **GET** /organizations | Get all organizations
*Pipedrive.OrganizationsApi* | [**mergeOrganizations**](docs/OrganizationsApi.md#mergeOrganizations) | **PUT** /organizations/{id}/merge | Merge two organizations
*Pipedrive.OrganizationsApi* | [**searchOrganization**](docs/OrganizationsApi.md#searchOrganization) | **GET** /organizations/search | Search organizations
*Pipedrive.OrganizationsApi* | [**updateOrganization**](docs/OrganizationsApi.md#updateOrganization) | **PUT** /organizations/{id} | Update an organization
*Pipedrive.PermissionSetsApi* | [**getPermissionSet**](docs/PermissionSetsApi.md#getPermissionSet) | **GET** /permissionSets/{id} | Get one permission set
*Pipedrive.PermissionSetsApi* | [**getPermissionSetAssignments**](docs/PermissionSetsApi.md#getPermissionSetAssignments) | **GET** /permissionSets/{id}/assignments | List permission set assignments
*Pipedrive.PermissionSetsApi* | [**getPermissionSets**](docs/PermissionSetsApi.md#getPermissionSets) | **GET** /permissionSets | Get all permission sets
*Pipedrive.PersonFieldsApi* | [**addPersonField**](docs/PersonFieldsApi.md#addPersonField) | **POST** /personFields | Add a new person field
*Pipedrive.PersonFieldsApi* | [**deletePersonField**](docs/PersonFieldsApi.md#deletePersonField) | **DELETE** /personFields/{id} | Delete a person field
*Pipedrive.PersonFieldsApi* | [**deletePersonFields**](docs/PersonFieldsApi.md#deletePersonFields) | **DELETE** /personFields | Delete multiple person fields in bulk
*Pipedrive.PersonFieldsApi* | [**getPersonField**](docs/PersonFieldsApi.md#getPersonField) | **GET** /personFields/{id} | Get one person field
*Pipedrive.PersonFieldsApi* | [**getPersonFields**](docs/PersonFieldsApi.md#getPersonFields) | **GET** /personFields | Get all person fields
*Pipedrive.PersonFieldsApi* | [**updatePersonField**](docs/PersonFieldsApi.md#updatePersonField) | **PUT** /personFields/{id} | Update a person field
*Pipedrive.PersonsApi* | [**addPerson**](docs/PersonsApi.md#addPerson) | **POST** /persons | Add a person
*Pipedrive.PersonsApi* | [**addPersonFollower**](docs/PersonsApi.md#addPersonFollower) | **POST** /persons/{id}/followers | Add a follower to a person
*Pipedrive.PersonsApi* | [**addPersonPicture**](docs/PersonsApi.md#addPersonPicture) | **POST** /persons/{id}/picture | Add person picture
*Pipedrive.PersonsApi* | [**deletePerson**](docs/PersonsApi.md#deletePerson) | **DELETE** /persons/{id} | Delete a person
*Pipedrive.PersonsApi* | [**deletePersonFollower**](docs/PersonsApi.md#deletePersonFollower) | **DELETE** /persons/{id}/followers/{follower_id} | Delete a follower from a person
*Pipedrive.PersonsApi* | [**deletePersonPicture**](docs/PersonsApi.md#deletePersonPicture) | **DELETE** /persons/{id}/picture | Delete person picture
*Pipedrive.PersonsApi* | [**deletePersons**](docs/PersonsApi.md#deletePersons) | **DELETE** /persons | Delete multiple persons in bulk
*Pipedrive.PersonsApi* | [**getPerson**](docs/PersonsApi.md#getPerson) | **GET** /persons/{id} | Get details of a person
*Pipedrive.PersonsApi* | [**getPersonActivities**](docs/PersonsApi.md#getPersonActivities) | **GET** /persons/{id}/activities | List activities associated with a person
*Pipedrive.PersonsApi* | [**getPersonDeals**](docs/PersonsApi.md#getPersonDeals) | **GET** /persons/{id}/deals | List deals associated with a person
*Pipedrive.PersonsApi* | [**getPersonFiles**](docs/PersonsApi.md#getPersonFiles) | **GET** /persons/{id}/files | List files attached to a person
*Pipedrive.PersonsApi* | [**getPersonFollowers**](docs/PersonsApi.md#getPersonFollowers) | **GET** /persons/{id}/followers | List followers of a person
*Pipedrive.PersonsApi* | [**getPersonMailMessages**](docs/PersonsApi.md#getPersonMailMessages) | **GET** /persons/{id}/mailMessages | List mail messages associated with a person
*Pipedrive.PersonsApi* | [**getPersonProducts**](docs/PersonsApi.md#getPersonProducts) | **GET** /persons/{id}/products | List products associated with a person
*Pipedrive.PersonsApi* | [**getPersonUpdates**](docs/PersonsApi.md#getPersonUpdates) | **GET** /persons/{id}/flow | List updates about a person
*Pipedrive.PersonsApi* | [**getPersonUsers**](docs/PersonsApi.md#getPersonUsers) | **GET** /persons/{id}/permittedUsers | List permitted users
*Pipedrive.PersonsApi* | [**getPersons**](docs/PersonsApi.md#getPersons) | **GET** /persons | Get all persons
*Pipedrive.PersonsApi* | [**mergePersons**](docs/PersonsApi.md#mergePersons) | **PUT** /persons/{id}/merge | Merge two persons
*Pipedrive.PersonsApi* | [**searchPersons**](docs/PersonsApi.md#searchPersons) | **GET** /persons/search | Search persons
*Pipedrive.PersonsApi* | [**updatePerson**](docs/PersonsApi.md#updatePerson) | **PUT** /persons/{id} | Update a person
*Pipedrive.PipelinesApi* | [**addPipeline**](docs/PipelinesApi.md#addPipeline) | **POST** /pipelines | Add a new pipeline
*Pipedrive.PipelinesApi* | [**deletePipeline**](docs/PipelinesApi.md#deletePipeline) | **DELETE** /pipelines/{id} | Delete a pipeline
*Pipedrive.PipelinesApi* | [**getPipeline**](docs/PipelinesApi.md#getPipeline) | **GET** /pipelines/{id} | Get one pipeline
*Pipedrive.PipelinesApi* | [**getPipelineConversionStatistics**](docs/PipelinesApi.md#getPipelineConversionStatistics) | **GET** /pipelines/{id}/conversion_statistics | Get deals conversion rates in pipeline
*Pipedrive.PipelinesApi* | [**getPipelineDeals**](docs/PipelinesApi.md#getPipelineDeals) | **GET** /pipelines/{id}/deals | Get deals in a pipeline
*Pipedrive.PipelinesApi* | [**getPipelineMovementStatistics**](docs/PipelinesApi.md#getPipelineMovementStatistics) | **GET** /pipelines/{id}/movement_statistics | Get deals movements in pipeline
*Pipedrive.PipelinesApi* | [**getPipelines**](docs/PipelinesApi.md#getPipelines) | **GET** /pipelines | Get all pipelines
*Pipedrive.PipelinesApi* | [**updatePipeline**](docs/PipelinesApi.md#updatePipeline) | **PUT** /pipelines/{id} | Update a pipeline
*Pipedrive.ProductFieldsApi* | [**addProductField**](docs/ProductFieldsApi.md#addProductField) | **POST** /productFields | Add a new product field
*Pipedrive.ProductFieldsApi* | [**deleteProductField**](docs/ProductFieldsApi.md#deleteProductField) | **DELETE** /productFields/{id} | Delete a product field
*Pipedrive.ProductFieldsApi* | [**deleteProductFields**](docs/ProductFieldsApi.md#deleteProductFields) | **DELETE** /productFields | Delete multiple product fields in bulk
*Pipedrive.ProductFieldsApi* | [**getProductField**](docs/ProductFieldsApi.md#getProductField) | **GET** /productFields/{id} | Get one product field
*Pipedrive.ProductFieldsApi* | [**getProductFields**](docs/ProductFieldsApi.md#getProductFields) | **GET** /productFields | Get all product fields
*Pipedrive.ProductFieldsApi* | [**updateProductField**](docs/ProductFieldsApi.md#updateProductField) | **PUT** /productFields/{id} | Update a product field
*Pipedrive.ProductsApi* | [**addProduct**](docs/ProductsApi.md#addProduct) | **POST** /products | Add a product
*Pipedrive.ProductsApi* | [**addProductFollower**](docs/ProductsApi.md#addProductFollower) | **POST** /products/{id}/followers | Add a follower to a product
*Pipedrive.ProductsApi* | [**deleteProduct**](docs/ProductsApi.md#deleteProduct) | **DELETE** /products/{id} | Delete a product
*Pipedrive.ProductsApi* | [**deleteProductFollower**](docs/ProductsApi.md#deleteProductFollower) | **DELETE** /products/{id}/followers/{follower_id} | Delete a follower from a product
*Pipedrive.ProductsApi* | [**getProduct**](docs/ProductsApi.md#getProduct) | **GET** /products/{id} | Get one product
*Pipedrive.ProductsApi* | [**getProductDeals**](docs/ProductsApi.md#getProductDeals) | **GET** /products/{id}/deals | Get deals where a product is attached to
*Pipedrive.ProductsApi* | [**getProductFiles**](docs/ProductsApi.md#getProductFiles) | **GET** /products/{id}/files | List files attached to a product
*Pipedrive.ProductsApi* | [**getProductFollowers**](docs/ProductsApi.md#getProductFollowers) | **GET** /products/{id}/followers | List followers of a product
*Pipedrive.ProductsApi* | [**getProductUsers**](docs/ProductsApi.md#getProductUsers) | **GET** /products/{id}/permittedUsers | List permitted users
*Pipedrive.ProductsApi* | [**getProducts**](docs/ProductsApi.md#getProducts) | **GET** /products | Get all products
*Pipedrive.ProductsApi* | [**searchProducts**](docs/ProductsApi.md#searchProducts) | **GET** /products/search | Search products
*Pipedrive.ProductsApi* | [**updateProduct**](docs/ProductsApi.md#updateProduct) | **PUT** /products/{id} | Update a product
*Pipedrive.RecentsApi* | [**getRecents**](docs/RecentsApi.md#getRecents) | **GET** /recents | Get recents
*Pipedrive.RolesApi* | [**addOrUpdateRoleSetting**](docs/RolesApi.md#addOrUpdateRoleSetting) | **POST** /roles/{id}/settings | Add or update role setting
*Pipedrive.RolesApi* | [**addRole**](docs/RolesApi.md#addRole) | **POST** /roles | Add a role
*Pipedrive.RolesApi* | [**addRoleAssignment**](docs/RolesApi.md#addRoleAssignment) | **POST** /roles/{id}/assignments | Add role assignment
*Pipedrive.RolesApi* | [**deleteRole**](docs/RolesApi.md#deleteRole) | **DELETE** /roles/{id} | Delete a role
*Pipedrive.RolesApi* | [**deleteRoleAssignment**](docs/RolesApi.md#deleteRoleAssignment) | **DELETE** /roles/{id}/assignments | Delete a role assignment
*Pipedrive.RolesApi* | [**getRole**](docs/RolesApi.md#getRole) | **GET** /roles/{id} | Get one role
*Pipedrive.RolesApi* | [**getRoleAssignments**](docs/RolesApi.md#getRoleAssignments) | **GET** /roles/{id}/assignments | List role assignments
*Pipedrive.RolesApi* | [**getRoleSettings**](docs/RolesApi.md#getRoleSettings) | **GET** /roles/{id}/settings | List role settings
*Pipedrive.RolesApi* | [**getRoleSubRoles**](docs/RolesApi.md#getRoleSubRoles) | **GET** /roles/{id}/roles | List role sub-roles
*Pipedrive.RolesApi* | [**getRoles**](docs/RolesApi.md#getRoles) | **GET** /roles | Get all roles
*Pipedrive.RolesApi* | [**updateRole**](docs/RolesApi.md#updateRole) | **PUT** /roles/{id} | Update role details
*Pipedrive.StagesApi* | [**addStage**](docs/StagesApi.md#addStage) | **POST** /stages | Add a new stage
*Pipedrive.StagesApi* | [**deleteStage**](docs/StagesApi.md#deleteStage) | **DELETE** /stages/{id} | Delete a stage
*Pipedrive.StagesApi* | [**deleteStages**](docs/StagesApi.md#deleteStages) | **DELETE** /stages | Delete multiple stages in bulk
*Pipedrive.StagesApi* | [**getStage**](docs/StagesApi.md#getStage) | **GET** /stages/{id} | Get one stage
*Pipedrive.StagesApi* | [**getStageDeals**](docs/StagesApi.md#getStageDeals) | **GET** /stages/{id}/deals | Get deals in a stage
*Pipedrive.StagesApi* | [**getStages**](docs/StagesApi.md#getStages) | **GET** /stages | Get all stages
*Pipedrive.StagesApi* | [**updateStage**](docs/StagesApi.md#updateStage) | **PUT** /stages/{id} | Update stage details
*Pipedrive.SubscriptionsApi* | [**addRecurringSubscription**](docs/SubscriptionsApi.md#addRecurringSubscription) | **POST** /subscriptions/recurring | Add a recurring subscription
*Pipedrive.SubscriptionsApi* | [**addSubscriptionInstallment**](docs/SubscriptionsApi.md#addSubscriptionInstallment) | **POST** /subscriptions/installment | Add an installment subscription
*Pipedrive.SubscriptionsApi* | [**cancelRecurringSubscription**](docs/SubscriptionsApi.md#cancelRecurringSubscription) | **PUT** /subscriptions/recurring/{id}/cancel | Cancel a recurring subscription
*Pipedrive.SubscriptionsApi* | [**deleteSubscription**](docs/SubscriptionsApi.md#deleteSubscription) | **DELETE** /subscriptions/{id} | Delete a subscription
*Pipedrive.SubscriptionsApi* | [**findSubscriptionByDeal**](docs/SubscriptionsApi.md#findSubscriptionByDeal) | **GET** /subscriptions/find/{dealId} | Find subscription by deal
*Pipedrive.SubscriptionsApi* | [**getSubscription**](docs/SubscriptionsApi.md#getSubscription) | **GET** /subscriptions/{id} | Get details of a subscription
*Pipedrive.SubscriptionsApi* | [**getSubscriptionPayments**](docs/SubscriptionsApi.md#getSubscriptionPayments) | **GET** /subscriptions/{id}/payments | Get all payments of a subscription
*Pipedrive.SubscriptionsApi* | [**updateRecurringSubscription**](docs/SubscriptionsApi.md#updateRecurringSubscription) | **PUT** /subscriptions/recurring/{id} | Update a recurring subscription
*Pipedrive.SubscriptionsApi* | [**updateSubscriptionInstallment**](docs/SubscriptionsApi.md#updateSubscriptionInstallment) | **PUT** /subscriptions/installment/{id} | Update an installment subscription
*Pipedrive.UserConnectionsApi* | [**getUserConnections**](docs/UserConnectionsApi.md#getUserConnections) | **GET** /userConnections | Get all user connections
*Pipedrive.UserSettingsApi* | [**getUserSettings**](docs/UserSettingsApi.md#getUserSettings) | **GET** /userSettings | List settings of an authorized user
*Pipedrive.UsersApi* | [**addUser**](docs/UsersApi.md#addUser) | **POST** /users | Add a new user
*Pipedrive.UsersApi* | [**addUserRoleAssignment**](docs/UsersApi.md#addUserRoleAssignment) | **POST** /users/{id}/roleAssignments | Add role assignment
*Pipedrive.UsersApi* | [**deleteUserRoleAssignment**](docs/UsersApi.md#deleteUserRoleAssignment) | **DELETE** /users/{id}/roleAssignments | Delete a role assignment
*Pipedrive.UsersApi* | [**findUsersByName**](docs/UsersApi.md#findUsersByName) | **GET** /users/find | Find users by name
*Pipedrive.UsersApi* | [**getCurrentUser**](docs/UsersApi.md#getCurrentUser) | **GET** /users/me | Get current user data
*Pipedrive.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{id} | Get one user
*Pipedrive.UsersApi* | [**getUserFollowers**](docs/UsersApi.md#getUserFollowers) | **GET** /users/{id}/followers | List followers of a user
*Pipedrive.UsersApi* | [**getUserPermissions**](docs/UsersApi.md#getUserPermissions) | **GET** /users/{id}/permissions | List user permissions
*Pipedrive.UsersApi* | [**getUserRoleAssignments**](docs/UsersApi.md#getUserRoleAssignments) | **GET** /users/{id}/roleAssignments | List role assignments
*Pipedrive.UsersApi* | [**getUserRoleSettings**](docs/UsersApi.md#getUserRoleSettings) | **GET** /users/{id}/roleSettings | List user role settings
*Pipedrive.UsersApi* | [**getUsers**](docs/UsersApi.md#getUsers) | **GET** /users | Get all users
*Pipedrive.UsersApi* | [**updateUser**](docs/UsersApi.md#updateUser) | **PUT** /users/{id} | Update user details
*Pipedrive.WebhooksApi* | [**addWebhook**](docs/WebhooksApi.md#addWebhook) | **POST** /webhooks | Create a new Webhook
*Pipedrive.WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{id} | Delete existing Webhook
*Pipedrive.WebhooksApi* | [**getWebhooks**](docs/WebhooksApi.md#getWebhooks) | **GET** /webhooks | Get all Webhooks


## Documentation for Models

 - [Pipedrive.ActivityDistributionData](docs/ActivityDistributionData.md)
 - [Pipedrive.ActivityDistributionDataActivityDistribution](docs/ActivityDistributionDataActivityDistribution.md)
 - [Pipedrive.ActivityDistributionDataActivityDistributionASSIGNEDTOUSERID](docs/ActivityDistributionDataActivityDistributionASSIGNEDTOUSERID.md)
 - [Pipedrive.ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities](docs/ActivityDistributionDataActivityDistributionASSIGNEDTOUSERIDActivities.md)
 - [Pipedrive.ActivityDistributionDataWithAdditionalData](docs/ActivityDistributionDataWithAdditionalData.md)
 - [Pipedrive.ActivityInfo](docs/ActivityInfo.md)
 - [Pipedrive.ActivityObjectFragment](docs/ActivityObjectFragment.md)
 - [Pipedrive.ActivityPostObject](docs/ActivityPostObject.md)
 - [Pipedrive.ActivityPostObjectAllOf](docs/ActivityPostObjectAllOf.md)
 - [Pipedrive.ActivityPutObject](docs/ActivityPutObject.md)
 - [Pipedrive.ActivityPutObjectAllOf](docs/ActivityPutObjectAllOf.md)
 - [Pipedrive.ActivityRecordAdditionalData](docs/ActivityRecordAdditionalData.md)
 - [Pipedrive.ActivityResponseObject](docs/ActivityResponseObject.md)
 - [Pipedrive.ActivityResponseObjectAllOf](docs/ActivityResponseObjectAllOf.md)
 - [Pipedrive.ActivityTypeBulkDeleteResponse](docs/ActivityTypeBulkDeleteResponse.md)
 - [Pipedrive.ActivityTypeBulkDeleteResponseAllOf](docs/ActivityTypeBulkDeleteResponseAllOf.md)
 - [Pipedrive.ActivityTypeBulkDeleteResponseAllOfData](docs/ActivityTypeBulkDeleteResponseAllOfData.md)
 - [Pipedrive.ActivityTypeCreateUpdateDeleteResponse](docs/ActivityTypeCreateUpdateDeleteResponse.md)
 - [Pipedrive.ActivityTypeCreateUpdateDeleteResponseAllOf](docs/ActivityTypeCreateUpdateDeleteResponseAllOf.md)
 - [Pipedrive.ActivityTypeListResponse](docs/ActivityTypeListResponse.md)
 - [Pipedrive.ActivityTypeListResponseAllOf](docs/ActivityTypeListResponseAllOf.md)
 - [Pipedrive.ActivityTypeObjectResponse](docs/ActivityTypeObjectResponse.md)
 - [Pipedrive.AddActivityResponse200](docs/AddActivityResponse200.md)
 - [Pipedrive.AddActivityResponse200RelatedObjects](docs/AddActivityResponse200RelatedObjects.md)
 - [Pipedrive.AddDealFollowerRequest](docs/AddDealFollowerRequest.md)
 - [Pipedrive.AddDealParticipantRequest](docs/AddDealParticipantRequest.md)
 - [Pipedrive.AddFile](docs/AddFile.md)
 - [Pipedrive.AddFilterRequest](docs/AddFilterRequest.md)
 - [Pipedrive.AddFollowerToPersonResponse](docs/AddFollowerToPersonResponse.md)
 - [Pipedrive.AddFollowerToPersonResponseAllOf](docs/AddFollowerToPersonResponseAllOf.md)
 - [Pipedrive.AddFollowerToPersonResponseAllOfData](docs/AddFollowerToPersonResponseAllOfData.md)
 - [Pipedrive.AddLeadLabelRequest](docs/AddLeadLabelRequest.md)
 - [Pipedrive.AddLeadRequest](docs/AddLeadRequest.md)
 - [Pipedrive.AddNewPipeline](docs/AddNewPipeline.md)
 - [Pipedrive.AddNewPipelineAllOf](docs/AddNewPipelineAllOf.md)
 - [Pipedrive.AddNoteRequest](docs/AddNoteRequest.md)
 - [Pipedrive.AddNoteRequestAllOf](docs/AddNoteRequestAllOf.md)
 - [Pipedrive.AddOrUpdateGoalResponse200](docs/AddOrUpdateGoalResponse200.md)
 - [Pipedrive.AddOrUpdateLeadLabelResponse200](docs/AddOrUpdateLeadLabelResponse200.md)
 - [Pipedrive.AddOrganizationFollowerRequest](docs/AddOrganizationFollowerRequest.md)
 - [Pipedrive.AddOrganizationRelationshipRequest](docs/AddOrganizationRelationshipRequest.md)
 - [Pipedrive.AddPersonFollowerRequest](docs/AddPersonFollowerRequest.md)
 - [Pipedrive.AddPersonPictureResponse](docs/AddPersonPictureResponse.md)
 - [Pipedrive.AddPersonPictureResponseAllOf](docs/AddPersonPictureResponseAllOf.md)
 - [Pipedrive.AddPersonResponse](docs/AddPersonResponse.md)
 - [Pipedrive.AddPersonResponseAllOf](docs/AddPersonResponseAllOf.md)
 - [Pipedrive.AddProductAttachmentDetails](docs/AddProductAttachmentDetails.md)
 - [Pipedrive.AddProductAttachmentDetailsAllOf](docs/AddProductAttachmentDetailsAllOf.md)
 - [Pipedrive.AddProductFollowerRequest](docs/AddProductFollowerRequest.md)
 - [Pipedrive.AddProductRequestBody](docs/AddProductRequestBody.md)
 - [Pipedrive.AddTeamUserRequest](docs/AddTeamUserRequest.md)
 - [Pipedrive.AddWebhookRequest](docs/AddWebhookRequest.md)
 - [Pipedrive.AddedDealFollower](docs/AddedDealFollower.md)
 - [Pipedrive.AddedDealFollowerData](docs/AddedDealFollowerData.md)
 - [Pipedrive.AdditionalBaseOrganizationItemInfo](docs/AdditionalBaseOrganizationItemInfo.md)
 - [Pipedrive.AdditionalData](docs/AdditionalData.md)
 - [Pipedrive.AdditionalDataWithPagination](docs/AdditionalDataWithPagination.md)
 - [Pipedrive.AdditionalDataWithPaginationDetails](docs/AdditionalDataWithPaginationDetails.md)
 - [Pipedrive.AdditionalMergePersonInfo](docs/AdditionalMergePersonInfo.md)
 - [Pipedrive.AdditionalPersonInfo](docs/AdditionalPersonInfo.md)
 - [Pipedrive.AllOrganizationRelationshipsGetResponse](docs/AllOrganizationRelationshipsGetResponse.md)
 - [Pipedrive.AllOrganizationRelationshipsGetResponseAllOf](docs/AllOrganizationRelationshipsGetResponseAllOf.md)
 - [Pipedrive.AllOrganizationRelationshipsGetResponseAllOfRelatedObjects](docs/AllOrganizationRelationshipsGetResponseAllOfRelatedObjects.md)
 - [Pipedrive.AllOrganizationsGetResponse](docs/AllOrganizationsGetResponse.md)
 - [Pipedrive.AllOrganizationsGetResponseAllOf](docs/AllOrganizationsGetResponseAllOf.md)
 - [Pipedrive.AllOrganizationsGetResponseAllOfRelatedObjects](docs/AllOrganizationsGetResponseAllOfRelatedObjects.md)
 - [Pipedrive.ArrayPrices](docs/ArrayPrices.md)
 - [Pipedrive.Assignee](docs/Assignee.md)
 - [Pipedrive.BaseComment](docs/BaseComment.md)
 - [Pipedrive.BaseCurrency](docs/BaseCurrency.md)
 - [Pipedrive.BaseDeal](docs/BaseDeal.md)
 - [Pipedrive.BaseFollowerItem](docs/BaseFollowerItem.md)
 - [Pipedrive.BaseMailThread](docs/BaseMailThread.md)
 - [Pipedrive.BaseMailThreadAllOf](docs/BaseMailThreadAllOf.md)
 - [Pipedrive.BaseMailThreadAllOfParties](docs/BaseMailThreadAllOfParties.md)
 - [Pipedrive.BaseMailThreadMessages](docs/BaseMailThreadMessages.md)
 - [Pipedrive.BaseMailThreadMessagesAllOf](docs/BaseMailThreadMessagesAllOf.md)
 - [Pipedrive.BaseNote](docs/BaseNote.md)
 - [Pipedrive.BaseNoteDealTitle](docs/BaseNoteDealTitle.md)
 - [Pipedrive.BaseNoteOrganization](docs/BaseNoteOrganization.md)
 - [Pipedrive.BaseNotePerson](docs/BaseNotePerson.md)
 - [Pipedrive.BaseOrganizationItem](docs/BaseOrganizationItem.md)
 - [Pipedrive.BaseOrganizationItemFields](docs/BaseOrganizationItemFields.md)
 - [Pipedrive.BaseOrganizationItemWithEditNameFlag](docs/BaseOrganizationItemWithEditNameFlag.md)
 - [Pipedrive.BaseOrganizationItemWithEditNameFlagAllOf](docs/BaseOrganizationItemWithEditNameFlagAllOf.md)
 - [Pipedrive.BaseOrganizationRelationshipItem](docs/BaseOrganizationRelationshipItem.md)
 - [Pipedrive.BasePersonItem](docs/BasePersonItem.md)
 - [Pipedrive.BasePersonItemEmail](docs/BasePersonItemEmail.md)
 - [Pipedrive.BasePersonItemPhone](docs/BasePersonItemPhone.md)
 - [Pipedrive.BasePipeline](docs/BasePipeline.md)
 - [Pipedrive.BasePipelineWithSelectedFlag](docs/BasePipelineWithSelectedFlag.md)
 - [Pipedrive.BasePipelineWithSelectedFlagAllOf](docs/BasePipelineWithSelectedFlagAllOf.md)
 - [Pipedrive.BaseProduct](docs/BaseProduct.md)
 - [Pipedrive.BaseResponse](docs/BaseResponse.md)
 - [Pipedrive.BaseResponseWithStatus](docs/BaseResponseWithStatus.md)
 - [Pipedrive.BaseResponseWithStatusAllOf](docs/BaseResponseWithStatusAllOf.md)
 - [Pipedrive.BaseRole](docs/BaseRole.md)
 - [Pipedrive.BaseStage](docs/BaseStage.md)
 - [Pipedrive.BaseTeam](docs/BaseTeam.md)
 - [Pipedrive.BaseTeamAdditionalProperties](docs/BaseTeamAdditionalProperties.md)
 - [Pipedrive.BaseUser](docs/BaseUser.md)
 - [Pipedrive.BaseUserMe](docs/BaseUserMe.md)
 - [Pipedrive.BaseUserMeAllOf](docs/BaseUserMeAllOf.md)
 - [Pipedrive.BaseUserMeAllOfLanguage](docs/BaseUserMeAllOfLanguage.md)
 - [Pipedrive.BaseWebhook](docs/BaseWebhook.md)
 - [Pipedrive.BasicDeal](docs/BasicDeal.md)
 - [Pipedrive.BasicDealProduct](docs/BasicDealProduct.md)
 - [Pipedrive.BasicGoal](docs/BasicGoal.md)
 - [Pipedrive.BasicOrganization](docs/BasicOrganization.md)
 - [Pipedrive.BasicPerson](docs/BasicPerson.md)
 - [Pipedrive.BasicPersonEmail](docs/BasicPersonEmail.md)
 - [Pipedrive.BulkDeleteResponse](docs/BulkDeleteResponse.md)
 - [Pipedrive.BulkDeleteResponseAllOf](docs/BulkDeleteResponseAllOf.md)
 - [Pipedrive.BulkDeleteResponseAllOfData](docs/BulkDeleteResponseAllOfData.md)
 - [Pipedrive.CalculatedFields](docs/CalculatedFields.md)
 - [Pipedrive.CallLogObject](docs/CallLogObject.md)
 - [Pipedrive.CallLogResponse400](docs/CallLogResponse400.md)
 - [Pipedrive.CallLogResponse403](docs/CallLogResponse403.md)
 - [Pipedrive.CallLogResponse404](docs/CallLogResponse404.md)
 - [Pipedrive.CallLogResponse409](docs/CallLogResponse409.md)
 - [Pipedrive.CallLogResponse410](docs/CallLogResponse410.md)
 - [Pipedrive.CallLogResponse500](docs/CallLogResponse500.md)
 - [Pipedrive.ChannelObject](docs/ChannelObject.md)
 - [Pipedrive.ChannelObjectResponse](docs/ChannelObjectResponse.md)
 - [Pipedrive.ChannelObjectResponseData](docs/ChannelObjectResponseData.md)
 - [Pipedrive.CommentPostPutObject](docs/CommentPostPutObject.md)
 - [Pipedrive.CommonMailThread](docs/CommonMailThread.md)
 - [Pipedrive.CreateRemoteFileAndLinkItToItem](docs/CreateRemoteFileAndLinkItToItem.md)
 - [Pipedrive.CreateTeam](docs/CreateTeam.md)
 - [Pipedrive.Currencies](docs/Currencies.md)
 - [Pipedrive.DealCountAndActivityInfo](docs/DealCountAndActivityInfo.md)
 - [Pipedrive.DealFlowResponse](docs/DealFlowResponse.md)
 - [Pipedrive.DealFlowResponseAllOf](docs/DealFlowResponseAllOf.md)
 - [Pipedrive.DealFlowResponseAllOfData](docs/DealFlowResponseAllOfData.md)
 - [Pipedrive.DealFlowResponseAllOfRelatedObjects](docs/DealFlowResponseAllOfRelatedObjects.md)
 - [Pipedrive.DealListActivitiesResponse](docs/DealListActivitiesResponse.md)
 - [Pipedrive.DealListActivitiesResponseAllOf](docs/DealListActivitiesResponseAllOf.md)
 - [Pipedrive.DealListActivitiesResponseAllOfRelatedObjects](docs/DealListActivitiesResponseAllOfRelatedObjects.md)
 - [Pipedrive.DealNonStrict](docs/DealNonStrict.md)
 - [Pipedrive.DealNonStrictModeFields](docs/DealNonStrictModeFields.md)
 - [Pipedrive.DealNonStrictModeFieldsCreatorUserId](docs/DealNonStrictModeFieldsCreatorUserId.md)
 - [Pipedrive.DealNonStrictWithDetails](docs/DealNonStrictWithDetails.md)
 - [Pipedrive.DealNonStrictWithDetailsAllOf](docs/DealNonStrictWithDetailsAllOf.md)
 - [Pipedrive.DealNonStrictWithDetailsAllOfAge](docs/DealNonStrictWithDetailsAllOfAge.md)
 - [Pipedrive.DealNonStrictWithDetailsAllOfAverageTimeToWon](docs/DealNonStrictWithDetailsAllOfAverageTimeToWon.md)
 - [Pipedrive.DealNonStrictWithDetailsAllOfStayInPipelineStages](docs/DealNonStrictWithDetailsAllOfStayInPipelineStages.md)
 - [Pipedrive.DealOrganizationData](docs/DealOrganizationData.md)
 - [Pipedrive.DealOrganizationDataWithId](docs/DealOrganizationDataWithId.md)
 - [Pipedrive.DealOrganizationDataWithIdAllOf](docs/DealOrganizationDataWithIdAllOf.md)
 - [Pipedrive.DealParticipantCountInfo](docs/DealParticipantCountInfo.md)
 - [Pipedrive.DealParticipants](docs/DealParticipants.md)
 - [Pipedrive.DealPersonData](docs/DealPersonData.md)
 - [Pipedrive.DealPersonDataEmail](docs/DealPersonDataEmail.md)
 - [Pipedrive.DealPersonDataPhone](docs/DealPersonDataPhone.md)
 - [Pipedrive.DealPersonDataWithId](docs/DealPersonDataWithId.md)
 - [Pipedrive.DealPersonDataWithIdAllOf](docs/DealPersonDataWithIdAllOf.md)
 - [Pipedrive.DealSearchItem](docs/DealSearchItem.md)
 - [Pipedrive.DealSearchItemItem](docs/DealSearchItemItem.md)
 - [Pipedrive.DealSearchItemItemOrganization](docs/DealSearchItemItemOrganization.md)
 - [Pipedrive.DealSearchItemItemOwner](docs/DealSearchItemItemOwner.md)
 - [Pipedrive.DealSearchItemItemPerson](docs/DealSearchItemItemPerson.md)
 - [Pipedrive.DealSearchItemItemStage](docs/DealSearchItemItemStage.md)
 - [Pipedrive.DealSearchResponse](docs/DealSearchResponse.md)
 - [Pipedrive.DealSearchResponseAllOf](docs/DealSearchResponseAllOf.md)
 - [Pipedrive.DealSearchResponseAllOfData](docs/DealSearchResponseAllOfData.md)
 - [Pipedrive.DealStrict](docs/DealStrict.md)
 - [Pipedrive.DealStrictModeFields](docs/DealStrictModeFields.md)
 - [Pipedrive.DealStrictWithMergeId](docs/DealStrictWithMergeId.md)
 - [Pipedrive.DealStrictWithMergeIdAllOf](docs/DealStrictWithMergeIdAllOf.md)
 - [Pipedrive.DealSummary](docs/DealSummary.md)
 - [Pipedrive.DealSummaryPerCurrency](docs/DealSummaryPerCurrency.md)
 - [Pipedrive.DealSummaryPerCurrencyFull](docs/DealSummaryPerCurrencyFull.md)
 - [Pipedrive.DealSummaryPerCurrencyFullCURRENCYID](docs/DealSummaryPerCurrencyFullCURRENCYID.md)
 - [Pipedrive.DealSummaryPerStages](docs/DealSummaryPerStages.md)
 - [Pipedrive.DealSummaryPerStagesSTAGEID](docs/DealSummaryPerStagesSTAGEID.md)
 - [Pipedrive.DealSummaryPerStagesSTAGEIDCURRENCYID](docs/DealSummaryPerStagesSTAGEIDCURRENCYID.md)
 - [Pipedrive.DealTitleParameter](docs/DealTitleParameter.md)
 - [Pipedrive.DealUserData](docs/DealUserData.md)
 - [Pipedrive.DealUserDataWithId](docs/DealUserDataWithId.md)
 - [Pipedrive.DealUserDataWithIdAllOf](docs/DealUserDataWithIdAllOf.md)
 - [Pipedrive.DealsCountAndActivityInfo](docs/DealsCountAndActivityInfo.md)
 - [Pipedrive.DealsCountInfo](docs/DealsCountInfo.md)
 - [Pipedrive.DealsMovementsInfo](docs/DealsMovementsInfo.md)
 - [Pipedrive.DealsMovementsInfoFormattedValues](docs/DealsMovementsInfoFormattedValues.md)
 - [Pipedrive.DealsMovementsInfoValues](docs/DealsMovementsInfoValues.md)
 - [Pipedrive.DeleteActivitiesResponse200](docs/DeleteActivitiesResponse200.md)
 - [Pipedrive.DeleteActivitiesResponse200Data](docs/DeleteActivitiesResponse200Data.md)
 - [Pipedrive.DeleteActivityResponse200](docs/DeleteActivityResponse200.md)
 - [Pipedrive.DeleteActivityResponse200Data](docs/DeleteActivityResponse200Data.md)
 - [Pipedrive.DeleteChannelSuccess](docs/DeleteChannelSuccess.md)
 - [Pipedrive.DeleteComment](docs/DeleteComment.md)
 - [Pipedrive.DeleteConversationSuccess](docs/DeleteConversationSuccess.md)
 - [Pipedrive.DeleteDeal](docs/DeleteDeal.md)
 - [Pipedrive.DeleteDealData](docs/DeleteDealData.md)
 - [Pipedrive.DeleteDealFollower](docs/DeleteDealFollower.md)
 - [Pipedrive.DeleteDealFollowerData](docs/DeleteDealFollowerData.md)
 - [Pipedrive.DeleteDealParticipant](docs/DeleteDealParticipant.md)
 - [Pipedrive.DeleteDealParticipantData](docs/DeleteDealParticipantData.md)
 - [Pipedrive.DeleteDealProduct](docs/DeleteDealProduct.md)
 - [Pipedrive.DeleteDealProductData](docs/DeleteDealProductData.md)
 - [Pipedrive.DeleteFile](docs/DeleteFile.md)
 - [Pipedrive.DeleteFileData](docs/DeleteFileData.md)
 - [Pipedrive.DeleteGoalResponse200](docs/DeleteGoalResponse200.md)
 - [Pipedrive.DeleteMultipleDeals](docs/DeleteMultipleDeals.md)
 - [Pipedrive.DeleteMultipleDealsData](docs/DeleteMultipleDealsData.md)
 - [Pipedrive.DeleteMultipleProductFieldsResponse](docs/DeleteMultipleProductFieldsResponse.md)
 - [Pipedrive.DeleteMultipleProductFieldsResponseData](docs/DeleteMultipleProductFieldsResponseData.md)
 - [Pipedrive.DeleteNote](docs/DeleteNote.md)
 - [Pipedrive.DeletePersonResponse](docs/DeletePersonResponse.md)
 - [Pipedrive.DeletePersonResponseAllOf](docs/DeletePersonResponseAllOf.md)
 - [Pipedrive.DeletePersonResponseAllOfData](docs/DeletePersonResponseAllOfData.md)
 - [Pipedrive.DeletePersonsInBulkResponse](docs/DeletePersonsInBulkResponse.md)
 - [Pipedrive.DeletePersonsInBulkResponseAllOf](docs/DeletePersonsInBulkResponseAllOf.md)
 - [Pipedrive.DeletePersonsInBulkResponseAllOfData](docs/DeletePersonsInBulkResponseAllOfData.md)
 - [Pipedrive.DeletePipelineResponse200](docs/DeletePipelineResponse200.md)
 - [Pipedrive.DeletePipelineResponse200Data](docs/DeletePipelineResponse200Data.md)
 - [Pipedrive.DeleteProductFieldResponse](docs/DeleteProductFieldResponse.md)
 - [Pipedrive.DeleteProductFieldResponseData](docs/DeleteProductFieldResponseData.md)
 - [Pipedrive.DeleteProductFollowerResponse](docs/DeleteProductFollowerResponse.md)
 - [Pipedrive.DeleteProductFollowerResponseData](docs/DeleteProductFollowerResponseData.md)
 - [Pipedrive.DeleteProductResponse](docs/DeleteProductResponse.md)
 - [Pipedrive.DeleteProductResponseData](docs/DeleteProductResponseData.md)
 - [Pipedrive.DeleteResponse](docs/DeleteResponse.md)
 - [Pipedrive.DeleteResponseAllOf](docs/DeleteResponseAllOf.md)
 - [Pipedrive.DeleteResponseAllOfData](docs/DeleteResponseAllOfData.md)
 - [Pipedrive.DeleteRole](docs/DeleteRole.md)
 - [Pipedrive.DeleteRoleAllOf](docs/DeleteRoleAllOf.md)
 - [Pipedrive.DeleteRoleAllOfData](docs/DeleteRoleAllOfData.md)
 - [Pipedrive.DeleteRoleAssignment](docs/DeleteRoleAssignment.md)
 - [Pipedrive.DeleteRoleAssignmentAllOf](docs/DeleteRoleAssignmentAllOf.md)
 - [Pipedrive.DeleteRoleAssignmentAllOfData](docs/DeleteRoleAssignmentAllOfData.md)
 - [Pipedrive.DeleteStageResponse200](docs/DeleteStageResponse200.md)
 - [Pipedrive.DeleteStageResponse200Data](docs/DeleteStageResponse200Data.md)
 - [Pipedrive.DeleteStagesResponse200](docs/DeleteStagesResponse200.md)
 - [Pipedrive.DeleteStagesResponse200Data](docs/DeleteStagesResponse200Data.md)
 - [Pipedrive.DeleteTeamUserRequest](docs/DeleteTeamUserRequest.md)
 - [Pipedrive.Duration](docs/Duration.md)
 - [Pipedrive.EditPipeline](docs/EditPipeline.md)
 - [Pipedrive.EditPipelineAllOf](docs/EditPipelineAllOf.md)
 - [Pipedrive.EmailInfo](docs/EmailInfo.md)
 - [Pipedrive.ExpectedOutcome](docs/ExpectedOutcome.md)
 - [Pipedrive.FailResponse](docs/FailResponse.md)
 - [Pipedrive.Field](docs/Field.md)
 - [Pipedrive.FieldCreateRequest](docs/FieldCreateRequest.md)
 - [Pipedrive.FieldCreateRequestAllOf](docs/FieldCreateRequestAllOf.md)
 - [Pipedrive.FieldResponse](docs/FieldResponse.md)
 - [Pipedrive.FieldResponseAllOf](docs/FieldResponseAllOf.md)
 - [Pipedrive.FieldType](docs/FieldType.md)
 - [Pipedrive.FieldTypeAsString](docs/FieldTypeAsString.md)
 - [Pipedrive.FieldUpdateRequest](docs/FieldUpdateRequest.md)
 - [Pipedrive.FieldsResponse](docs/FieldsResponse.md)
 - [Pipedrive.FieldsResponseAllOf](docs/FieldsResponseAllOf.md)
 - [Pipedrive.FileData](docs/FileData.md)
 - [Pipedrive.FileItem](docs/FileItem.md)
 - [Pipedrive.FilterGetItem](docs/FilterGetItem.md)
 - [Pipedrive.FilterType](docs/FilterType.md)
 - [Pipedrive.FiltersBulkDeleteResponse](docs/FiltersBulkDeleteResponse.md)
 - [Pipedrive.FiltersBulkDeleteResponseAllOf](docs/FiltersBulkDeleteResponseAllOf.md)
 - [Pipedrive.FiltersBulkDeleteResponseAllOfData](docs/FiltersBulkDeleteResponseAllOfData.md)
 - [Pipedrive.FiltersBulkGetResponse](docs/FiltersBulkGetResponse.md)
 - [Pipedrive.FiltersBulkGetResponseAllOf](docs/FiltersBulkGetResponseAllOf.md)
 - [Pipedrive.FiltersDeleteResponse](docs/FiltersDeleteResponse.md)
 - [Pipedrive.FiltersDeleteResponseAllOf](docs/FiltersDeleteResponseAllOf.md)
 - [Pipedrive.FiltersDeleteResponseAllOfData](docs/FiltersDeleteResponseAllOfData.md)
 - [Pipedrive.FiltersGetResponse](docs/FiltersGetResponse.md)
 - [Pipedrive.FiltersGetResponseAllOf](docs/FiltersGetResponseAllOf.md)
 - [Pipedrive.FiltersPostResponse](docs/FiltersPostResponse.md)
 - [Pipedrive.FiltersPostResponseAllOf](docs/FiltersPostResponseAllOf.md)
 - [Pipedrive.FiltersPostResponseAllOfData](docs/FiltersPostResponseAllOfData.md)
 - [Pipedrive.FindGoalResponse](docs/FindGoalResponse.md)
 - [Pipedrive.FollowerData](docs/FollowerData.md)
 - [Pipedrive.FollowerDataWithID](docs/FollowerDataWithID.md)
 - [Pipedrive.FollowerDataWithIDAllOf](docs/FollowerDataWithIDAllOf.md)
 - [Pipedrive.FullRole](docs/FullRole.md)
 - [Pipedrive.FullRoleAllOf](docs/FullRoleAllOf.md)
 - [Pipedrive.GetActivitiesResponse200](docs/GetActivitiesResponse200.md)
 - [Pipedrive.GetActivitiesResponse200RelatedObjects](docs/GetActivitiesResponse200RelatedObjects.md)
 - [Pipedrive.GetActivityResponse200](docs/GetActivityResponse200.md)
 - [Pipedrive.GetAddProductAttachementDetails](docs/GetAddProductAttachementDetails.md)
 - [Pipedrive.GetAddUpdateStage](docs/GetAddUpdateStage.md)
 - [Pipedrive.GetAddedDeal](docs/GetAddedDeal.md)
 - [Pipedrive.GetAddedDealAdditionalData](docs/GetAddedDealAdditionalData.md)
 - [Pipedrive.GetAllFiles](docs/GetAllFiles.md)
 - [Pipedrive.GetAllPersonsResponse](docs/GetAllPersonsResponse.md)
 - [Pipedrive.GetAllPersonsResponseAllOf](docs/GetAllPersonsResponseAllOf.md)
 - [Pipedrive.GetAllPipelines](docs/GetAllPipelines.md)
 - [Pipedrive.GetAllPipelinesAllOf](docs/GetAllPipelinesAllOf.md)
 - [Pipedrive.GetAllProductFieldsResponse](docs/GetAllProductFieldsResponse.md)
 - [Pipedrive.GetComments](docs/GetComments.md)
 - [Pipedrive.GetDeal](docs/GetDeal.md)
 - [Pipedrive.GetDealAdditionalData](docs/GetDealAdditionalData.md)
 - [Pipedrive.GetDeals](docs/GetDeals.md)
 - [Pipedrive.GetDealsConversionRatesInPipeline](docs/GetDealsConversionRatesInPipeline.md)
 - [Pipedrive.GetDealsConversionRatesInPipelineAllOf](docs/GetDealsConversionRatesInPipelineAllOf.md)
 - [Pipedrive.GetDealsConversionRatesInPipelineAllOfData](docs/GetDealsConversionRatesInPipelineAllOfData.md)
 - [Pipedrive.GetDealsMovementsInPipeline](docs/GetDealsMovementsInPipeline.md)
 - [Pipedrive.GetDealsMovementsInPipelineAllOf](docs/GetDealsMovementsInPipelineAllOf.md)
 - [Pipedrive.GetDealsMovementsInPipelineAllOfData](docs/GetDealsMovementsInPipelineAllOfData.md)
 - [Pipedrive.GetDealsMovementsInPipelineAllOfDataAverageAgeInDays](docs/GetDealsMovementsInPipelineAllOfDataAverageAgeInDays.md)
 - [Pipedrive.GetDealsMovementsInPipelineAllOfDataAverageAgeInDaysByStages](docs/GetDealsMovementsInPipelineAllOfDataAverageAgeInDaysByStages.md)
 - [Pipedrive.GetDealsMovementsInPipelineAllOfDataMovementsBetweenStages](docs/GetDealsMovementsInPipelineAllOfDataMovementsBetweenStages.md)
 - [Pipedrive.GetDealsRelatedObjects](docs/GetDealsRelatedObjects.md)
 - [Pipedrive.GetDealsSummary](docs/GetDealsSummary.md)
 - [Pipedrive.GetDealsSummaryData](docs/GetDealsSummaryData.md)
 - [Pipedrive.GetDealsSummaryDataValuesTotal](docs/GetDealsSummaryDataValuesTotal.md)
 - [Pipedrive.GetDealsSummaryDataWeightedValuesTotal](docs/GetDealsSummaryDataWeightedValuesTotal.md)
 - [Pipedrive.GetDealsTimeline](docs/GetDealsTimeline.md)
 - [Pipedrive.GetDealsTimelineData](docs/GetDealsTimelineData.md)
 - [Pipedrive.GetDealsTimelineDataTotals](docs/GetDealsTimelineDataTotals.md)
 - [Pipedrive.GetDuplicatedDeal](docs/GetDuplicatedDeal.md)
 - [Pipedrive.GetGoalResultResponse200](docs/GetGoalResultResponse200.md)
 - [Pipedrive.GetGoalsResponse200](docs/GetGoalsResponse200.md)
 - [Pipedrive.GetLeadLabelsResponse200](docs/GetLeadLabelsResponse200.md)
 - [Pipedrive.GetLeadSourcesResponse200](docs/GetLeadSourcesResponse200.md)
 - [Pipedrive.GetLeadSourcesResponse200Data](docs/GetLeadSourcesResponse200Data.md)
 - [Pipedrive.GetLeadsResponse200](docs/GetLeadsResponse200.md)
 - [Pipedrive.GetMergedDeal](docs/GetMergedDeal.md)
 - [Pipedrive.GetNotes](docs/GetNotes.md)
 - [Pipedrive.GetOneFile](docs/GetOneFile.md)
 - [Pipedrive.GetOnePipeline](docs/GetOnePipeline.md)
 - [Pipedrive.GetOnePipelineAllOf](docs/GetOnePipelineAllOf.md)
 - [Pipedrive.GetOneStage](docs/GetOneStage.md)
 - [Pipedrive.GetPersonDetailsResponse](docs/GetPersonDetailsResponse.md)
 - [Pipedrive.GetPersonDetailsResponseAllOf](docs/GetPersonDetailsResponseAllOf.md)
 - [Pipedrive.GetPersonDetailsResponseAllOfAdditionalData](docs/GetPersonDetailsResponseAllOfAdditionalData.md)
 - [Pipedrive.GetProductAttachementDetails](docs/GetProductAttachementDetails.md)
 - [Pipedrive.GetProductFieldResponse](docs/GetProductFieldResponse.md)
 - [Pipedrive.GetRecents](docs/GetRecents.md)
 - [Pipedrive.GetRecentsAdditionalData](docs/GetRecentsAdditionalData.md)
 - [Pipedrive.GetRole](docs/GetRole.md)
 - [Pipedrive.GetRoleAllOf](docs/GetRoleAllOf.md)
 - [Pipedrive.GetRoleAllOfAdditionalData](docs/GetRoleAllOfAdditionalData.md)
 - [Pipedrive.GetRoleAssignments](docs/GetRoleAssignments.md)
 - [Pipedrive.GetRoleAssignmentsAllOf](docs/GetRoleAssignmentsAllOf.md)
 - [Pipedrive.GetRoleSettings](docs/GetRoleSettings.md)
 - [Pipedrive.GetRoleSettingsAllOf](docs/GetRoleSettingsAllOf.md)
 - [Pipedrive.GetRoleSubroles](docs/GetRoleSubroles.md)
 - [Pipedrive.GetRoleSubrolesAllOf](docs/GetRoleSubrolesAllOf.md)
 - [Pipedrive.GetRoles](docs/GetRoles.md)
 - [Pipedrive.GetRolesAllOf](docs/GetRolesAllOf.md)
 - [Pipedrive.GetStageDeals](docs/GetStageDeals.md)
 - [Pipedrive.GetStages](docs/GetStages.md)
 - [Pipedrive.GlobalMessageBaseResponse](docs/GlobalMessageBaseResponse.md)
 - [Pipedrive.GlobalMessageData](docs/GlobalMessageData.md)
 - [Pipedrive.GlobalMessageDelete](docs/GlobalMessageDelete.md)
 - [Pipedrive.GlobalMessageDeleteAllOf](docs/GlobalMessageDeleteAllOf.md)
 - [Pipedrive.GlobalMessageGet](docs/GlobalMessageGet.md)
 - [Pipedrive.GlobalMessageGetAllOf](docs/GlobalMessageGetAllOf.md)
 - [Pipedrive.GlobalMessageUserData](docs/GlobalMessageUserData.md)
 - [Pipedrive.GoalResults](docs/GoalResults.md)
 - [Pipedrive.GoalType](docs/GoalType.md)
 - [Pipedrive.GoalsResponseComponent](docs/GoalsResponseComponent.md)
 - [Pipedrive.IconKey](docs/IconKey.md)
 - [Pipedrive.InlineResponse400](docs/InlineResponse400.md)
 - [Pipedrive.InlineResponse4001](docs/InlineResponse4001.md)
 - [Pipedrive.InlineResponse4001AdditionalData](docs/InlineResponse4001AdditionalData.md)
 - [Pipedrive.InlineResponse400AdditionalData](docs/InlineResponse400AdditionalData.md)
 - [Pipedrive.InlineResponse403](docs/InlineResponse403.md)
 - [Pipedrive.InlineResponse4031](docs/InlineResponse4031.md)
 - [Pipedrive.InlineResponse4031AdditionalData](docs/InlineResponse4031AdditionalData.md)
 - [Pipedrive.InlineResponse403AdditionalData](docs/InlineResponse403AdditionalData.md)
 - [Pipedrive.InlineResponse404](docs/InlineResponse404.md)
 - [Pipedrive.InlineResponse404AdditionalData](docs/InlineResponse404AdditionalData.md)
 - [Pipedrive.ItemSearchAdditionalData](docs/ItemSearchAdditionalData.md)
 - [Pipedrive.ItemSearchAdditionalDataPagination](docs/ItemSearchAdditionalDataPagination.md)
 - [Pipedrive.ItemSearchFieldResponse](docs/ItemSearchFieldResponse.md)
 - [Pipedrive.ItemSearchFieldResponseAllOf](docs/ItemSearchFieldResponseAllOf.md)
 - [Pipedrive.ItemSearchFieldResponseAllOfData](docs/ItemSearchFieldResponseAllOfData.md)
 - [Pipedrive.ItemSearchItem](docs/ItemSearchItem.md)
 - [Pipedrive.ItemSearchResponse](docs/ItemSearchResponse.md)
 - [Pipedrive.ItemSearchResponseAllOf](docs/ItemSearchResponseAllOf.md)
 - [Pipedrive.ItemSearchResponseAllOfData](docs/ItemSearchResponseAllOfData.md)
 - [Pipedrive.LeadIdResponse200](docs/LeadIdResponse200.md)
 - [Pipedrive.LeadIdResponse200Data](docs/LeadIdResponse200Data.md)
 - [Pipedrive.LeadLabelColor](docs/LeadLabelColor.md)
 - [Pipedrive.LeadLabelResponse](docs/LeadLabelResponse.md)
 - [Pipedrive.LeadResponse](docs/LeadResponse.md)
 - [Pipedrive.LeadResponse404](docs/LeadResponse404.md)
 - [Pipedrive.LeadSearchItem](docs/LeadSearchItem.md)
 - [Pipedrive.LeadSearchItemItem](docs/LeadSearchItemItem.md)
 - [Pipedrive.LeadSearchItemItemOrganization](docs/LeadSearchItemItemOrganization.md)
 - [Pipedrive.LeadSearchItemItemOwner](docs/LeadSearchItemItemOwner.md)
 - [Pipedrive.LeadSearchItemItemPerson](docs/LeadSearchItemItemPerson.md)
 - [Pipedrive.LeadSearchResponse](docs/LeadSearchResponse.md)
 - [Pipedrive.LeadSearchResponseAllOf](docs/LeadSearchResponseAllOf.md)
 - [Pipedrive.LeadSearchResponseAllOfData](docs/LeadSearchResponseAllOfData.md)
 - [Pipedrive.LeadValue](docs/LeadValue.md)
 - [Pipedrive.LinkRemoteFileToItem](docs/LinkRemoteFileToItem.md)
 - [Pipedrive.ListActivitiesResponse](docs/ListActivitiesResponse.md)
 - [Pipedrive.ListActivitiesResponseAllOf](docs/ListActivitiesResponseAllOf.md)
 - [Pipedrive.ListDealsResponse](docs/ListDealsResponse.md)
 - [Pipedrive.ListDealsResponseAllOf](docs/ListDealsResponseAllOf.md)
 - [Pipedrive.ListDealsResponseAllOfRelatedObjects](docs/ListDealsResponseAllOfRelatedObjects.md)
 - [Pipedrive.ListFilesResponse](docs/ListFilesResponse.md)
 - [Pipedrive.ListFilesResponseAllOf](docs/ListFilesResponseAllOf.md)
 - [Pipedrive.ListFollowersResponse](docs/ListFollowersResponse.md)
 - [Pipedrive.ListFollowersResponseAllOf](docs/ListFollowersResponseAllOf.md)
 - [Pipedrive.ListFollowersResponseAllOfData](docs/ListFollowersResponseAllOfData.md)
 - [Pipedrive.ListMailMessagesResponse](docs/ListMailMessagesResponse.md)
 - [Pipedrive.ListMailMessagesResponseAllOf](docs/ListMailMessagesResponseAllOf.md)
 - [Pipedrive.ListMailMessagesResponseAllOfData](docs/ListMailMessagesResponseAllOfData.md)
 - [Pipedrive.ListPermittedUsersResponse](docs/ListPermittedUsersResponse.md)
 - [Pipedrive.ListPermittedUsersResponse1](docs/ListPermittedUsersResponse1.md)
 - [Pipedrive.ListPermittedUsersResponse1AllOf](docs/ListPermittedUsersResponse1AllOf.md)
 - [Pipedrive.ListPermittedUsersResponseAllOf](docs/ListPermittedUsersResponseAllOf.md)
 - [Pipedrive.ListPermittedUsersResponseAllOfData](docs/ListPermittedUsersResponseAllOfData.md)
 - [Pipedrive.ListPersonProductsResponse](docs/ListPersonProductsResponse.md)
 - [Pipedrive.ListPersonProductsResponseAllOf](docs/ListPersonProductsResponseAllOf.md)
 - [Pipedrive.ListPersonProductsResponseAllOfDEALID](docs/ListPersonProductsResponseAllOfDEALID.md)
 - [Pipedrive.ListPersonProductsResponseAllOfData](docs/ListPersonProductsResponseAllOfData.md)
 - [Pipedrive.ListPersonsResponse](docs/ListPersonsResponse.md)
 - [Pipedrive.ListPersonsResponseAllOf](docs/ListPersonsResponseAllOf.md)
 - [Pipedrive.ListPersonsResponseAllOfRelatedObjects](docs/ListPersonsResponseAllOfRelatedObjects.md)
 - [Pipedrive.ListProductAdditionalData](docs/ListProductAdditionalData.md)
 - [Pipedrive.ListProductAdditionalDataAllOf](docs/ListProductAdditionalDataAllOf.md)
 - [Pipedrive.ListProductFollowersResponse](docs/ListProductFollowersResponse.md)
 - [Pipedrive.ListProductFollowersResponseAllOf](docs/ListProductFollowersResponseAllOf.md)
 - [Pipedrive.ListProductFollowersResponseAllOfData](docs/ListProductFollowersResponseAllOfData.md)
 - [Pipedrive.ListProductsResponse](docs/ListProductsResponse.md)
 - [Pipedrive.ListProductsResponseAllOf](docs/ListProductsResponseAllOf.md)
 - [Pipedrive.ListProductsResponseAllOfData](docs/ListProductsResponseAllOfData.md)
 - [Pipedrive.ListProductsResponseAllOfRelatedObjects](docs/ListProductsResponseAllOfRelatedObjects.md)
 - [Pipedrive.MailMessage](docs/MailMessage.md)
 - [Pipedrive.MailMessageAllOf](docs/MailMessageAllOf.md)
 - [Pipedrive.MailMessageData](docs/MailMessageData.md)
 - [Pipedrive.MailMessageItemForList](docs/MailMessageItemForList.md)
 - [Pipedrive.MailMessageItemForListAllOf](docs/MailMessageItemForListAllOf.md)
 - [Pipedrive.MailParticipant](docs/MailParticipant.md)
 - [Pipedrive.MailServiceBaseResponse](docs/MailServiceBaseResponse.md)
 - [Pipedrive.MailThread](docs/MailThread.md)
 - [Pipedrive.MailThreadAllOf](docs/MailThreadAllOf.md)
 - [Pipedrive.MailThreadDelete](docs/MailThreadDelete.md)
 - [Pipedrive.MailThreadDeleteAllOf](docs/MailThreadDeleteAllOf.md)
 - [Pipedrive.MailThreadMessages](docs/MailThreadMessages.md)
 - [Pipedrive.MailThreadMessagesAllOf](docs/MailThreadMessagesAllOf.md)
 - [Pipedrive.MailThreadOne](docs/MailThreadOne.md)
 - [Pipedrive.MailThreadOneAllOf](docs/MailThreadOneAllOf.md)
 - [Pipedrive.MailThreadParticipant](docs/MailThreadParticipant.md)
 - [Pipedrive.MailThreadPut](docs/MailThreadPut.md)
 - [Pipedrive.MailThreadPutAllOf](docs/MailThreadPutAllOf.md)
 - [Pipedrive.MarketingStatus](docs/MarketingStatus.md)
 - [Pipedrive.MergeDealsRequest](docs/MergeDealsRequest.md)
 - [Pipedrive.MergeOrganizationsRequest](docs/MergeOrganizationsRequest.md)
 - [Pipedrive.MergePersonDealRelatedInfo](docs/MergePersonDealRelatedInfo.md)
 - [Pipedrive.MergePersonItem](docs/MergePersonItem.md)
 - [Pipedrive.MergePersonsRequest](docs/MergePersonsRequest.md)
 - [Pipedrive.MergePersonsResponse](docs/MergePersonsResponse.md)
 - [Pipedrive.MergePersonsResponseAllOf](docs/MergePersonsResponseAllOf.md)
 - [Pipedrive.MessageObject](docs/MessageObject.md)
 - [Pipedrive.MessageObjectAttachments](docs/MessageObjectAttachments.md)
 - [Pipedrive.NewDeal](docs/NewDeal.md)
 - [Pipedrive.NewDealAllOf](docs/NewDealAllOf.md)
 - [Pipedrive.NewDealProduct](docs/NewDealProduct.md)
 - [Pipedrive.NewFollowerResponse](docs/NewFollowerResponse.md)
 - [Pipedrive.NewFollowerResponseData](docs/NewFollowerResponseData.md)
 - [Pipedrive.NewGoal](docs/NewGoal.md)
 - [Pipedrive.NewOrganization](docs/NewOrganization.md)
 - [Pipedrive.NewOrganizationAllOf](docs/NewOrganizationAllOf.md)
 - [Pipedrive.NewPerson](docs/NewPerson.md)
 - [Pipedrive.NewPersonAllOf](docs/NewPersonAllOf.md)
 - [Pipedrive.NewProductField](docs/NewProductField.md)
 - [Pipedrive.Note](docs/Note.md)
 - [Pipedrive.NoteConnectToParams](docs/NoteConnectToParams.md)
 - [Pipedrive.NoteCreatorUser](docs/NoteCreatorUser.md)
 - [Pipedrive.NoteField](docs/NoteField.md)
 - [Pipedrive.NoteFieldsResponse](docs/NoteFieldsResponse.md)
 - [Pipedrive.NoteFieldsResponseAllOf](docs/NoteFieldsResponseAllOf.md)
 - [Pipedrive.NoteParams](docs/NoteParams.md)
 - [Pipedrive.NumberBoolean](docs/NumberBoolean.md)
 - [Pipedrive.NumberBooleanDefault0](docs/NumberBooleanDefault0.md)
 - [Pipedrive.NumberBooleanDefault1](docs/NumberBooleanDefault1.md)
 - [Pipedrive.ObjectPrices](docs/ObjectPrices.md)
 - [Pipedrive.OneLeadResponse200](docs/OneLeadResponse200.md)
 - [Pipedrive.OptionalNameObject](docs/OptionalNameObject.md)
 - [Pipedrive.OrgAndOwnerId](docs/OrgAndOwnerId.md)
 - [Pipedrive.OrganizationAddressInfo](docs/OrganizationAddressInfo.md)
 - [Pipedrive.OrganizationCountAndAddressInfo](docs/OrganizationCountAndAddressInfo.md)
 - [Pipedrive.OrganizationCountInfo](docs/OrganizationCountInfo.md)
 - [Pipedrive.OrganizationData](docs/OrganizationData.md)
 - [Pipedrive.OrganizationDataWithId](docs/OrganizationDataWithId.md)
 - [Pipedrive.OrganizationDataWithIdAllOf](docs/OrganizationDataWithIdAllOf.md)
 - [Pipedrive.OrganizationDataWithIdAndActiveFlag](docs/OrganizationDataWithIdAndActiveFlag.md)
 - [Pipedrive.OrganizationDataWithIdAndActiveFlagAllOf](docs/OrganizationDataWithIdAndActiveFlagAllOf.md)
 - [Pipedrive.OrganizationDeleteResponse](docs/OrganizationDeleteResponse.md)
 - [Pipedrive.OrganizationDeleteResponseData](docs/OrganizationDeleteResponseData.md)
 - [Pipedrive.OrganizationDetailsGetResponse](docs/OrganizationDetailsGetResponse.md)
 - [Pipedrive.OrganizationDetailsGetResponseAllOf](docs/OrganizationDetailsGetResponseAllOf.md)
 - [Pipedrive.OrganizationDetailsGetResponseAllOfAdditionalData](docs/OrganizationDetailsGetResponseAllOfAdditionalData.md)
 - [Pipedrive.OrganizationFlowResponse](docs/OrganizationFlowResponse.md)
 - [Pipedrive.OrganizationFlowResponseAllOf](docs/OrganizationFlowResponseAllOf.md)
 - [Pipedrive.OrganizationFlowResponseAllOfData](docs/OrganizationFlowResponseAllOfData.md)
 - [Pipedrive.OrganizationFlowResponseAllOfRelatedObjects](docs/OrganizationFlowResponseAllOfRelatedObjects.md)
 - [Pipedrive.OrganizationFollowerDeleteResponse](docs/OrganizationFollowerDeleteResponse.md)
 - [Pipedrive.OrganizationFollowerDeleteResponseData](docs/OrganizationFollowerDeleteResponseData.md)
 - [Pipedrive.OrganizationFollowerItem](docs/OrganizationFollowerItem.md)
 - [Pipedrive.OrganizationFollowerItemAllOf](docs/OrganizationFollowerItemAllOf.md)
 - [Pipedrive.OrganizationFollowerPostResponse](docs/OrganizationFollowerPostResponse.md)
 - [Pipedrive.OrganizationFollowersListResponse](docs/OrganizationFollowersListResponse.md)
 - [Pipedrive.OrganizationItem](docs/OrganizationItem.md)
 - [Pipedrive.OrganizationItemAllOf](docs/OrganizationItemAllOf.md)
 - [Pipedrive.OrganizationPostResponse](docs/OrganizationPostResponse.md)
 - [Pipedrive.OrganizationPostResponseAllOf](docs/OrganizationPostResponseAllOf.md)
 - [Pipedrive.OrganizationRelationship](docs/OrganizationRelationship.md)
 - [Pipedrive.OrganizationRelationshipDeleteResponse](docs/OrganizationRelationshipDeleteResponse.md)
 - [Pipedrive.OrganizationRelationshipDeleteResponseAllOf](docs/OrganizationRelationshipDeleteResponseAllOf.md)
 - [Pipedrive.OrganizationRelationshipDeleteResponseAllOfData](docs/OrganizationRelationshipDeleteResponseAllOfData.md)
 - [Pipedrive.OrganizationRelationshipDetails](docs/OrganizationRelationshipDetails.md)
 - [Pipedrive.OrganizationRelationshipGetResponse](docs/OrganizationRelationshipGetResponse.md)
 - [Pipedrive.OrganizationRelationshipGetResponseAllOf](docs/OrganizationRelationshipGetResponseAllOf.md)
 - [Pipedrive.OrganizationRelationshipPostResponse](docs/OrganizationRelationshipPostResponse.md)
 - [Pipedrive.OrganizationRelationshipPostResponseAllOf](docs/OrganizationRelationshipPostResponseAllOf.md)
 - [Pipedrive.OrganizationRelationshipUpdateResponse](docs/OrganizationRelationshipUpdateResponse.md)
 - [Pipedrive.OrganizationRelationshipWithCalculatedFields](docs/OrganizationRelationshipWithCalculatedFields.md)
 - [Pipedrive.OrganizationSearchItem](docs/OrganizationSearchItem.md)
 - [Pipedrive.OrganizationSearchItemItem](docs/OrganizationSearchItemItem.md)
 - [Pipedrive.OrganizationSearchResponse](docs/OrganizationSearchResponse.md)
 - [Pipedrive.OrganizationSearchResponseAllOf](docs/OrganizationSearchResponseAllOf.md)
 - [Pipedrive.OrganizationSearchResponseAllOfData](docs/OrganizationSearchResponseAllOfData.md)
 - [Pipedrive.OrganizationUpdateResponse](docs/OrganizationUpdateResponse.md)
 - [Pipedrive.OrganizationUpdateResponseAllOf](docs/OrganizationUpdateResponseAllOf.md)
 - [Pipedrive.OrganizationsDeleteResponse](docs/OrganizationsDeleteResponse.md)
 - [Pipedrive.OrganizationsDeleteResponseData](docs/OrganizationsDeleteResponseData.md)
 - [Pipedrive.OrganizationsMergeResponse](docs/OrganizationsMergeResponse.md)
 - [Pipedrive.OrganizationsMergeResponseData](docs/OrganizationsMergeResponseData.md)
 - [Pipedrive.Owner](docs/Owner.md)
 - [Pipedrive.OwnerAllOf](docs/OwnerAllOf.md)
 - [Pipedrive.PaginationDetails](docs/PaginationDetails.md)
 - [Pipedrive.PaginationDetailsAllOf](docs/PaginationDetailsAllOf.md)
 - [Pipedrive.Params](docs/Params.md)
 - [Pipedrive.PaymentItem](docs/PaymentItem.md)
 - [Pipedrive.PaymentsResponse](docs/PaymentsResponse.md)
 - [Pipedrive.PaymentsResponseAllOf](docs/PaymentsResponseAllOf.md)
 - [Pipedrive.PaymentsResponseAllOfData](docs/PaymentsResponseAllOfData.md)
 - [Pipedrive.PermissionSets](docs/PermissionSets.md)
 - [Pipedrive.PermissionSetsAllOf](docs/PermissionSetsAllOf.md)
 - [Pipedrive.PermissionSetsItem](docs/PermissionSetsItem.md)
 - [Pipedrive.PersonCountAndEmailInfo](docs/PersonCountAndEmailInfo.md)
 - [Pipedrive.PersonCountEmailDealAndActivityInfo](docs/PersonCountEmailDealAndActivityInfo.md)
 - [Pipedrive.PersonCountInfo](docs/PersonCountInfo.md)
 - [Pipedrive.PersonData](docs/PersonData.md)
 - [Pipedrive.PersonDataEmail](docs/PersonDataEmail.md)
 - [Pipedrive.PersonDataPhone](docs/PersonDataPhone.md)
 - [Pipedrive.PersonDataWithActiveFlag](docs/PersonDataWithActiveFlag.md)
 - [Pipedrive.PersonDataWithActiveFlagAllOf](docs/PersonDataWithActiveFlagAllOf.md)
 - [Pipedrive.PersonFlowResponse](docs/PersonFlowResponse.md)
 - [Pipedrive.PersonFlowResponseAllOf](docs/PersonFlowResponseAllOf.md)
 - [Pipedrive.PersonFlowResponseAllOfData](docs/PersonFlowResponseAllOfData.md)
 - [Pipedrive.PersonItem](docs/PersonItem.md)
 - [Pipedrive.PersonListProduct](docs/PersonListProduct.md)
 - [Pipedrive.PersonNameCountAndEmailInfo](docs/PersonNameCountAndEmailInfo.md)
 - [Pipedrive.PersonNameCountAndEmailInfoWithIds](docs/PersonNameCountAndEmailInfoWithIds.md)
 - [Pipedrive.PersonNameCountAndEmailInfoWithIdsAllOf](docs/PersonNameCountAndEmailInfoWithIdsAllOf.md)
 - [Pipedrive.PersonNameInfo](docs/PersonNameInfo.md)
 - [Pipedrive.PersonNameInfoWithOrgAndOwnerId](docs/PersonNameInfoWithOrgAndOwnerId.md)
 - [Pipedrive.PersonSearchItem](docs/PersonSearchItem.md)
 - [Pipedrive.PersonSearchItemItem](docs/PersonSearchItemItem.md)
 - [Pipedrive.PersonSearchItemItemOrganization](docs/PersonSearchItemItemOrganization.md)
 - [Pipedrive.PersonSearchItemItemOwner](docs/PersonSearchItemItemOwner.md)
 - [Pipedrive.PersonSearchResponse](docs/PersonSearchResponse.md)
 - [Pipedrive.PersonSearchResponseAllOf](docs/PersonSearchResponseAllOf.md)
 - [Pipedrive.PersonSearchResponseAllOfData](docs/PersonSearchResponseAllOfData.md)
 - [Pipedrive.PictureData](docs/PictureData.md)
 - [Pipedrive.PictureDataPictures](docs/PictureDataPictures.md)
 - [Pipedrive.PictureDataWithID](docs/PictureDataWithID.md)
 - [Pipedrive.PictureDataWithIDAllOf](docs/PictureDataWithIDAllOf.md)
 - [Pipedrive.PictureDataWithValue](docs/PictureDataWithValue.md)
 - [Pipedrive.PictureDataWithValueAllOf](docs/PictureDataWithValueAllOf.md)
 - [Pipedrive.Pipeline](docs/Pipeline.md)
 - [Pipedrive.PipelineDetails](docs/PipelineDetails.md)
 - [Pipedrive.PipelineDetailsAllOf](docs/PipelineDetailsAllOf.md)
 - [Pipedrive.PostComment](docs/PostComment.md)
 - [Pipedrive.PostDealParticipants](docs/PostDealParticipants.md)
 - [Pipedrive.PostGoalResponse](docs/PostGoalResponse.md)
 - [Pipedrive.PostNote](docs/PostNote.md)
 - [Pipedrive.PostRoleAssignment](docs/PostRoleAssignment.md)
 - [Pipedrive.PostRoleAssignmentAllOf](docs/PostRoleAssignmentAllOf.md)
 - [Pipedrive.PostRoleAssignmentAllOfData](docs/PostRoleAssignmentAllOfData.md)
 - [Pipedrive.PostRoleSettings](docs/PostRoleSettings.md)
 - [Pipedrive.PostRoleSettingsAllOf](docs/PostRoleSettingsAllOf.md)
 - [Pipedrive.PostRoleSettingsAllOfData](docs/PostRoleSettingsAllOfData.md)
 - [Pipedrive.PostRoles](docs/PostRoles.md)
 - [Pipedrive.PostRolesAllOf](docs/PostRolesAllOf.md)
 - [Pipedrive.PostRolesAllOfData](docs/PostRolesAllOfData.md)
 - [Pipedrive.ProductAttachementFields](docs/ProductAttachementFields.md)
 - [Pipedrive.ProductAttachmentDetails](docs/ProductAttachmentDetails.md)
 - [Pipedrive.ProductBaseDeal](docs/ProductBaseDeal.md)
 - [Pipedrive.ProductField](docs/ProductField.md)
 - [Pipedrive.ProductFieldAllOf](docs/ProductFieldAllOf.md)
 - [Pipedrive.ProductListItem](docs/ProductListItem.md)
 - [Pipedrive.ProductRequest](docs/ProductRequest.md)
 - [Pipedrive.ProductResponse](docs/ProductResponse.md)
 - [Pipedrive.ProductSearchItem](docs/ProductSearchItem.md)
 - [Pipedrive.ProductSearchItemItem](docs/ProductSearchItemItem.md)
 - [Pipedrive.ProductSearchItemItemOwner](docs/ProductSearchItemItemOwner.md)
 - [Pipedrive.ProductSearchResponse](docs/ProductSearchResponse.md)
 - [Pipedrive.ProductSearchResponseAllOf](docs/ProductSearchResponseAllOf.md)
 - [Pipedrive.ProductSearchResponseAllOfData](docs/ProductSearchResponseAllOfData.md)
 - [Pipedrive.ProductWithArrayPrices](docs/ProductWithArrayPrices.md)
 - [Pipedrive.ProductWithObjectPrices](docs/ProductWithObjectPrices.md)
 - [Pipedrive.ProductsResponse](docs/ProductsResponse.md)
 - [Pipedrive.PutRole](docs/PutRole.md)
 - [Pipedrive.PutRoleAllOf](docs/PutRoleAllOf.md)
 - [Pipedrive.PutRoleAllOfData](docs/PutRoleAllOfData.md)
 - [Pipedrive.RecentDataProduct](docs/RecentDataProduct.md)
 - [Pipedrive.RecentsActivity](docs/RecentsActivity.md)
 - [Pipedrive.RecentsActivityType](docs/RecentsActivityType.md)
 - [Pipedrive.RecentsDeal](docs/RecentsDeal.md)
 - [Pipedrive.RecentsFile](docs/RecentsFile.md)
 - [Pipedrive.RecentsFilter](docs/RecentsFilter.md)
 - [Pipedrive.RecentsNote](docs/RecentsNote.md)
 - [Pipedrive.RecentsOrganization](docs/RecentsOrganization.md)
 - [Pipedrive.RecentsPerson](docs/RecentsPerson.md)
 - [Pipedrive.RecentsPipeline](docs/RecentsPipeline.md)
 - [Pipedrive.RecentsProduct](docs/RecentsProduct.md)
 - [Pipedrive.RecentsStage](docs/RecentsStage.md)
 - [Pipedrive.RecentsUser](docs/RecentsUser.md)
 - [Pipedrive.RelatedDealData](docs/RelatedDealData.md)
 - [Pipedrive.RelatedDealDataDEALID](docs/RelatedDealDataDEALID.md)
 - [Pipedrive.RelatedFollowerData](docs/RelatedFollowerData.md)
 - [Pipedrive.RelatedOrganizationData](docs/RelatedOrganizationData.md)
 - [Pipedrive.RelatedOrganizationDataWithActiveFlag](docs/RelatedOrganizationDataWithActiveFlag.md)
 - [Pipedrive.RelatedOrganizationName](docs/RelatedOrganizationName.md)
 - [Pipedrive.RelatedPersonData](docs/RelatedPersonData.md)
 - [Pipedrive.RelatedPersonDataWithActiveFlag](docs/RelatedPersonDataWithActiveFlag.md)
 - [Pipedrive.RelatedPictureData](docs/RelatedPictureData.md)
 - [Pipedrive.RelatedUserData](docs/RelatedUserData.md)
 - [Pipedrive.RelationshipOrganizationInfoItem](docs/RelationshipOrganizationInfoItem.md)
 - [Pipedrive.RelationshipOrganizationInfoItemAllOf](docs/RelationshipOrganizationInfoItemAllOf.md)
 - [Pipedrive.RelationshipOrganizationInfoItemWithActiveFlag](docs/RelationshipOrganizationInfoItemWithActiveFlag.md)
 - [Pipedrive.RequiredNameObject](docs/RequiredNameObject.md)
 - [Pipedrive.RequredTitleParameter](docs/RequredTitleParameter.md)
 - [Pipedrive.ResponseCallLogObject](docs/ResponseCallLogObject.md)
 - [Pipedrive.ResponseCallLogObjectAllOf](docs/ResponseCallLogObjectAllOf.md)
 - [Pipedrive.RoleAssignment](docs/RoleAssignment.md)
 - [Pipedrive.RoleAssignmentAllOf](docs/RoleAssignmentAllOf.md)
 - [Pipedrive.RoleSettings](docs/RoleSettings.md)
 - [Pipedrive.RolesAdditionalData](docs/RolesAdditionalData.md)
 - [Pipedrive.RolesAdditionalDataPagination](docs/RolesAdditionalDataPagination.md)
 - [Pipedrive.SinglePermissionSetsItem](docs/SinglePermissionSetsItem.md)
 - [Pipedrive.SinglePermissionSetsItemAllOf](docs/SinglePermissionSetsItemAllOf.md)
 - [Pipedrive.Stage](docs/Stage.md)
 - [Pipedrive.StageConversions](docs/StageConversions.md)
 - [Pipedrive.StageDetails](docs/StageDetails.md)
 - [Pipedrive.StageWithPipelineInfo](docs/StageWithPipelineInfo.md)
 - [Pipedrive.StageWithPipelineInfoAllOf](docs/StageWithPipelineInfoAllOf.md)
 - [Pipedrive.SubRole](docs/SubRole.md)
 - [Pipedrive.SubRoleAllOf](docs/SubRoleAllOf.md)
 - [Pipedrive.SubscriptionAddonsResponse](docs/SubscriptionAddonsResponse.md)
 - [Pipedrive.SubscriptionAddonsResponseAllOf](docs/SubscriptionAddonsResponseAllOf.md)
 - [Pipedrive.SubscriptionInstallmentCreateRequest](docs/SubscriptionInstallmentCreateRequest.md)
 - [Pipedrive.SubscriptionInstallmentUpdateRequest](docs/SubscriptionInstallmentUpdateRequest.md)
 - [Pipedrive.SubscriptionItem](docs/SubscriptionItem.md)
 - [Pipedrive.SubscriptionRecurringCancelRequest](docs/SubscriptionRecurringCancelRequest.md)
 - [Pipedrive.SubscriptionRecurringCreateRequest](docs/SubscriptionRecurringCreateRequest.md)
 - [Pipedrive.SubscriptionRecurringUpdateRequest](docs/SubscriptionRecurringUpdateRequest.md)
 - [Pipedrive.SubscriptionsIdResponse](docs/SubscriptionsIdResponse.md)
 - [Pipedrive.SubscriptionsIdResponseAllOf](docs/SubscriptionsIdResponseAllOf.md)
 - [Pipedrive.Team](docs/Team.md)
 - [Pipedrive.TeamAllOf](docs/TeamAllOf.md)
 - [Pipedrive.TeamId](docs/TeamId.md)
 - [Pipedrive.Teams](docs/Teams.md)
 - [Pipedrive.TeamsAllOf](docs/TeamsAllOf.md)
 - [Pipedrive.Unauthorized](docs/Unauthorized.md)
 - [Pipedrive.UpdateActivityResponse200](docs/UpdateActivityResponse200.md)
 - [Pipedrive.UpdateDealRequest](docs/UpdateDealRequest.md)
 - [Pipedrive.UpdateFile](docs/UpdateFile.md)
 - [Pipedrive.UpdateFilterRequest](docs/UpdateFilterRequest.md)
 - [Pipedrive.UpdateLeadLabelRequest](docs/UpdateLeadLabelRequest.md)
 - [Pipedrive.UpdateLeadRequest](docs/UpdateLeadRequest.md)
 - [Pipedrive.UpdatePerson](docs/UpdatePerson.md)
 - [Pipedrive.UpdatePersonAllOf](docs/UpdatePersonAllOf.md)
 - [Pipedrive.UpdatePersonResponse](docs/UpdatePersonResponse.md)
 - [Pipedrive.UpdateProductField](docs/UpdateProductField.md)
 - [Pipedrive.UpdateProductRequestBody](docs/UpdateProductRequestBody.md)
 - [Pipedrive.UpdateProductResponse](docs/UpdateProductResponse.md)
 - [Pipedrive.UpdateStageRequest](docs/UpdateStageRequest.md)
 - [Pipedrive.UpdateStageRequestAllOf](docs/UpdateStageRequestAllOf.md)
 - [Pipedrive.UpdateTeam](docs/UpdateTeam.md)
 - [Pipedrive.UpdateTeamAllOf](docs/UpdateTeamAllOf.md)
 - [Pipedrive.UpdateTeamWithAdditionalProperties](docs/UpdateTeamWithAdditionalProperties.md)
 - [Pipedrive.User](docs/User.md)
 - [Pipedrive.UserAllOf](docs/UserAllOf.md)
 - [Pipedrive.UserAssignmentToPermissionSet](docs/UserAssignmentToPermissionSet.md)
 - [Pipedrive.UserAssignmentsToPermissionSet](docs/UserAssignmentsToPermissionSet.md)
 - [Pipedrive.UserAssignmentsToPermissionSetAllOf](docs/UserAssignmentsToPermissionSetAllOf.md)
 - [Pipedrive.UserConnections](docs/UserConnections.md)
 - [Pipedrive.UserConnectionsAllOf](docs/UserConnectionsAllOf.md)
 - [Pipedrive.UserConnectionsAllOfData](docs/UserConnectionsAllOfData.md)
 - [Pipedrive.UserData](docs/UserData.md)
 - [Pipedrive.UserDataWithId](docs/UserDataWithId.md)
 - [Pipedrive.UserIDs](docs/UserIDs.md)
 - [Pipedrive.UserIDsAllOf](docs/UserIDsAllOf.md)
 - [Pipedrive.UserMe](docs/UserMe.md)
 - [Pipedrive.UserMeAllOf](docs/UserMeAllOf.md)
 - [Pipedrive.UserPermissions](docs/UserPermissions.md)
 - [Pipedrive.UserPermissionsAllOf](docs/UserPermissionsAllOf.md)
 - [Pipedrive.UserPermissionsItem](docs/UserPermissionsItem.md)
 - [Pipedrive.UserSettings](docs/UserSettings.md)
 - [Pipedrive.UserSettingsAllOf](docs/UserSettingsAllOf.md)
 - [Pipedrive.UserSettingsItem](docs/UserSettingsItem.md)
 - [Pipedrive.Users](docs/Users.md)
 - [Pipedrive.UsersAllOf](docs/UsersAllOf.md)
 - [Pipedrive.VisibleTo](docs/VisibleTo.md)
 - [Pipedrive.Webhook](docs/Webhook.md)
 - [Pipedrive.WebhookAllOf](docs/WebhookAllOf.md)
 - [Pipedrive.WebhookBadRequest](docs/WebhookBadRequest.md)
 - [Pipedrive.WebhookBadRequestAllOf](docs/WebhookBadRequestAllOf.md)
 - [Pipedrive.Webhooks](docs/Webhooks.md)
 - [Pipedrive.WebhooksAllOf](docs/WebhooksAllOf.md)
 - [Pipedrive.WebhooksDeleteForbiddenSchema](docs/WebhooksDeleteForbiddenSchema.md)
 - [Pipedrive.WebhooksDeleteForbiddenSchemaAllOf](docs/WebhooksDeleteForbiddenSchemaAllOf.md)


## Documentation for Authorization



### api_key


- **Type**: API key
- **API key parameter name**: api_token
- **Location**: URL query string



### oauth2


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://oauth.pipedrive.com/oauth/authorize
- **Scopes**: 
  - deals:read: Read most data about deals and related entities.
  - deals:full: Create, read, update and delete deals, its participants and followers.
  - goals:read: Read data on all goals.
  - goals:full: Create, read, update and delete goals.
  - leads:read: Read leads and leads labels.
  - leads:full: Create, read, update and delete leads and leads labels
  - activities:read: Read activities, its fields and types; all files and filters.
  - activities:full: Create, read, update and delete activities and all files and filters.
  - contacts:read: Read data about persons and organizations, their related fields and followers.
  - contacts:full: Create, read, update and delete persons and organizations and their followers.
  - admin: Allows to do many things that an administrator can do in a Pipedrive company account.
  - recents:read: Read all recent changes occured in an account.
  - search:read: Search across the account for deals, persons, organizations, files and products and see details about the returned results.
  - mail:read: Read mail threads and messages.
  - mail:full: Read, update and delete mail threads. Also grants read access to mail messages.
  - products:read: Read products, its fields, files, followers and products connected to a deal.
  - products:full: Create, read, update and delete products and its fields; add products to deals
  - users:read: Read data about users (people with access to a Pipedrive account), their permissions, roles and followers, as well as about legacy teams.
  - base: Read settings of the authorized user and currencies in an account.
  - phone-integration: Create, read and delete call logs and its audio recordings.

