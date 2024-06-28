# Pipedrive client for NodeJS based apps

Pipedrive is a sales pipeline software that gets you organized. It's a powerful sales CRM with effortless sales pipeline management. See www.pipedrive.com for details.

This is the official Pipedrive API wrapper-client for NodeJS based apps, distributed by Pipedrive Inc freely under the MIT license. It provides convenient access to the Pipedrive API, allowing you to operate with objects such as Deals, Persons, Organizations, Products and much more.

## Installation

```
npm install pipedrive@1.0.0 --save
```

## API Reference

The Pipedrive RESTful API Reference can be found at https://developers.pipedrive.com/docs/api/v1.
Pipedrive API’s core concepts for its usage can be found in our [Developer documentation](https://pipedrive.readme.io/docs/core-api-concepts-about-pipedrive-api).

## How to use it?

### With a pre-set API token

You can retrieve the api_token from your existing Pipedrive account’s settings page. A step-by-step guide is available [here](https://pipedrive.readme.io/docs/how-to-find-the-api-token).

```typescript
import express from "express";
import { Configuration, DealsApi } from "pipedrive";

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
import { OAuth2Configuration, Configuration } from 'pipedrive';

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
import { Configuration, DealsApi, OAuth2Configuration } from "pipedrive";

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
import { Configuration, DealsApi, OAuth2Configuration } from "pipedrive";
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

## List of API Endpoints

All URIs are relative to _https://api.pipedrive.com/v1_

Class        | Method        | HTTP request  | Description   |
------------ | ------------- | ------------- | ------------- |
ActivitiesApi | addActivity | **POST** /activities | Add an activity
ActivitiesApi | deleteActivities | **DELETE** /activities | Delete multiple activities in bulk
ActivitiesApi | deleteActivity | **DELETE** /activities/{id} | Delete an activity
ActivitiesApi | getActivities | **GET** /activities | Get all activities assigned to a particular user
ActivitiesApi | getActivitiesCollection | **GET** /activities/collection | Get all activities (BETA)
ActivitiesApi | getActivity | **GET** /activities/{id} | Get details of an activity
ActivitiesApi | updateActivity | **PUT** /activities/{id} | Update an activity
ActivityFieldsApi | getActivityFields | **GET** /activityFields | Get all activity fields
ActivityTypesApi | addActivityType | **POST** /activityTypes | Add new activity type
ActivityTypesApi | deleteActivityType | **DELETE** /activityTypes/{id} | Delete an activity type
ActivityTypesApi | deleteActivityTypes | **DELETE** /activityTypes | Delete multiple activity types in bulk
ActivityTypesApi | getActivityTypes | **GET** /activityTypes | Get all activity types
ActivityTypesApi | updateActivityType | **PUT** /activityTypes/{id} | Update an activity type
BillingApi | getCompanyAddons | **GET** /billing/subscriptions/addons | Get all add-ons for a single company
CallLogsApi | addCallLog | **POST** /callLogs | Add a call log
CallLogsApi | addCallLogAudioFile | **POST** /callLogs/{id}/recordings | Attach an audio file to the call log
CallLogsApi | deleteCallLog | **DELETE** /callLogs/{id} | Delete a call log
CallLogsApi | getCallLog | **GET** /callLogs/{id} | Get details of a call log
CallLogsApi | getUserCallLogs | **GET** /callLogs | Get all call logs assigned to a particular user
ChannelsApi | addChannel | **POST** /channels | Add a channel
ChannelsApi | deleteChannel | **DELETE** /channels/{id} | Delete a channel
ChannelsApi | deleteConversation | **DELETE** /channels/{channel-id}/conversations/{conversation-id} | Delete a conversation
ChannelsApi | receiveMessage | **POST** /channels/messages/receive | Receives an incoming message
CurrenciesApi | getCurrencies | **GET** /currencies | Get all supported currencies
DealFieldsApi | addDealField | **POST** /dealFields | Add a new deal field
DealFieldsApi | deleteDealField | **DELETE** /dealFields/{id} | Delete a deal field
DealFieldsApi | deleteDealFields | **DELETE** /dealFields | Delete multiple deal fields in bulk
DealFieldsApi | getDealField | **GET** /dealFields/{id} | Get one deal field
DealFieldsApi | getDealFields | **GET** /dealFields | Get all deal fields
DealFieldsApi | updateDealField | **PUT** /dealFields/{id} | Update a deal field
DealsApi | addDeal | **POST** /deals | Add a deal
DealsApi | addDealFollower | **POST** /deals/{id}/followers | Add a follower to a deal
DealsApi | addDealParticipant | **POST** /deals/{id}/participants | Add a participant to a deal
DealsApi | addDealProduct | **POST** /deals/{id}/products | Add a product to a deal
DealsApi | deleteDeal | **DELETE** /deals/{id} | Delete a deal
DealsApi | deleteDealFollower | **DELETE** /deals/{id}/followers/{follower_id} | Delete a follower from a deal
DealsApi | deleteDealParticipant | **DELETE** /deals/{id}/participants/{deal_participant_id} | Delete a participant from a deal
DealsApi | deleteDealProduct | **DELETE** /deals/{id}/products/{product_attachment_id} | Delete an attached product from a deal
DealsApi | deleteDeals | **DELETE** /deals | Delete multiple deals in bulk
DealsApi | duplicateDeal | **POST** /deals/{id}/duplicate | Duplicate deal
DealsApi | getDeal | **GET** /deals/{id} | Get details of a deal
DealsApi | getDealActivities | **GET** /deals/{id}/activities | List activities associated with a deal
DealsApi | getDealChangelog | **GET** /deals/{id}/changelog | List updates about deal field values
DealsApi | getDealFiles | **GET** /deals/{id}/files | List files attached to a deal
DealsApi | getDealFollowers | **GET** /deals/{id}/followers | List followers of a deal
DealsApi | getDealMailMessages | **GET** /deals/{id}/mailMessages | List mail messages associated with a deal
DealsApi | getDealParticipants | **GET** /deals/{id}/participants | List participants of a deal
DealsApi | getDealParticipantsChangelog | **GET** /deals/{id}/participantsChangelog | List updates about participants of a deal
DealsApi | getDealPersons | **GET** /deals/{id}/persons | List all persons associated with a deal
DealsApi | getDealProducts | **GET** /deals/{id}/products | List products attached to a deal
DealsApi | getDealUpdates | **GET** /deals/{id}/flow | List updates about a deal
DealsApi | getDealUsers | **GET** /deals/{id}/permittedUsers | List permitted users
DealsApi | getDeals | **GET** /deals | Get all deals
DealsApi | getDealsCollection | **GET** /deals/collection | Get all deals (BETA)
DealsApi | getDealsSummary | **GET** /deals/summary | Get deals summary
DealsApi | getDealsTimeline | **GET** /deals/timeline | Get deals timeline
DealsApi | mergeDeals | **PUT** /deals/{id}/merge | Merge two deals
DealsApi | searchDeals | **GET** /deals/search | Search deals
DealsApi | updateDeal | **PUT** /deals/{id} | Update a deal
DealsApi | updateDealProduct | **PUT** /deals/{id}/products/{product_attachment_id} | Update the product attached to a deal
FilesApi | addFile | **POST** /files | Add file
FilesApi | addFileAndLinkIt | **POST** /files/remote | Create a remote file and link it to an item
FilesApi | deleteFile | **DELETE** /files/{id} | Delete a file
FilesApi | downloadFile | **GET** /files/{id}/download | Download one file
FilesApi | getFile | **GET** /files/{id} | Get one file
FilesApi | getFiles | **GET** /files | Get all files
FilesApi | linkFileToItem | **POST** /files/remoteLink | Link a remote file to an item
FilesApi | updateFile | **PUT** /files/{id} | Update file details
FiltersApi | addFilter | **POST** /filters | Add a new filter
FiltersApi | deleteFilter | **DELETE** /filters/{id} | Delete a filter
FiltersApi | deleteFilters | **DELETE** /filters | Delete multiple filters in bulk
FiltersApi | getFilter | **GET** /filters/{id} | Get one filter
FiltersApi | getFilterHelpers | **GET** /filters/helpers | Get all filter helpers
FiltersApi | getFilters | **GET** /filters | Get all filters
FiltersApi | updateFilter | **PUT** /filters/{id} | Update filter
GoalsApi | addGoal | **POST** /goals | Add a new goal
GoalsApi | deleteGoal | **DELETE** /goals/{id} | Delete existing goal
GoalsApi | getGoalResult | **GET** /goals/{id}/results | Get result of a goal
GoalsApi | getGoals | **GET** /goals/find | Find goals
GoalsApi | updateGoal | **PUT** /goals/{id} | Update existing goal
ItemSearchApi | searchItem | **GET** /itemSearch | Perform a search from multiple item types
ItemSearchApi | searchItemByField | **GET** /itemSearch/field | Perform a search using a specific field from an item type
LeadLabelsApi | addLeadLabel | **POST** /leadLabels | Add a lead label
LeadLabelsApi | deleteLeadLabel | **DELETE** /leadLabels/{id} | Delete a lead label
LeadLabelsApi | getLeadLabels | **GET** /leadLabels | Get all lead labels
LeadLabelsApi | updateLeadLabel | **PATCH** /leadLabels/{id} | Update a lead label
LeadSourcesApi | getLeadSources | **GET** /leadSources | Get all lead sources
LeadsApi | addLead | **POST** /leads | Add a lead
LeadsApi | deleteLead | **DELETE** /leads/{id} | Delete a lead
LeadsApi | getLead | **GET** /leads/{id} | Get one lead
LeadsApi | getLeadUsers | **GET** /leads/{id}/permittedUsers | List permitted users
LeadsApi | getLeads | **GET** /leads | Get all leads
LeadsApi | searchLeads | **GET** /leads/search | Search leads
LeadsApi | updateLead | **PATCH** /leads/{id} | Update a lead
LegacyTeamsApi | addTeam | **POST** /legacyTeams | Add a new team
LegacyTeamsApi | addTeamUser | **POST** /legacyTeams/{id}/users | Add users to a team
LegacyTeamsApi | deleteTeamUser | **DELETE** /legacyTeams/{id}/users | Delete users from a team
LegacyTeamsApi | getTeam | **GET** /legacyTeams/{id} | Get a single team
LegacyTeamsApi | getTeamUsers | **GET** /legacyTeams/{id}/users | Get all users in a team
LegacyTeamsApi | getTeams | **GET** /legacyTeams | Get all teams
LegacyTeamsApi | getUserTeams | **GET** /legacyTeams/user/{id} | Get all teams of a user
LegacyTeamsApi | updateTeam | **PUT** /legacyTeams/{id} | Update a team
MailboxApi | deleteMailThread | **DELETE** /mailbox/mailThreads/{id} | Delete mail thread
MailboxApi | getMailMessage | **GET** /mailbox/mailMessages/{id} | Get one mail message
MailboxApi | getMailThread | **GET** /mailbox/mailThreads/{id} | Get one mail thread
MailboxApi | getMailThreadMessages | **GET** /mailbox/mailThreads/{id}/mailMessages | Get all mail messages of mail thread
MailboxApi | getMailThreads | **GET** /mailbox/mailThreads | Get mail threads
MailboxApi | updateMailThreadDetails | **PUT** /mailbox/mailThreads/{id} | Update mail thread details
MeetingsApi | deleteUserProviderLink | **DELETE** /meetings/userProviderLinks/{id} | Delete the link between a user and the installed video call integration
MeetingsApi | saveUserProviderLink | **POST** /meetings/userProviderLinks | Link a user with the installed video call integration
NoteFieldsApi | getNoteFields | **GET** /noteFields | Get all note fields
NotesApi | addNote | **POST** /notes | Add a note
NotesApi | addNoteComment | **POST** /notes/{id}/comments | Add a comment to a note
NotesApi | deleteComment | **DELETE** /notes/{id}/comments/{commentId} | Delete a comment related to a note
NotesApi | deleteNote | **DELETE** /notes/{id} | Delete a note
NotesApi | getComment | **GET** /notes/{id}/comments/{commentId} | Get one comment
NotesApi | getNote | **GET** /notes/{id} | Get one note
NotesApi | getNoteComments | **GET** /notes/{id}/comments | Get all comments for a note
NotesApi | getNotes | **GET** /notes | Get all notes
NotesApi | updateCommentForNote | **PUT** /notes/{id}/comments/{commentId} | Update a comment related to a note
NotesApi | updateNote | **PUT** /notes/{id} | Update a note
OrganizationFieldsApi | addOrganizationField | **POST** /organizationFields | Add a new organization field
OrganizationFieldsApi | deleteOrganizationField | **DELETE** /organizationFields/{id} | Delete an organization field
OrganizationFieldsApi | deleteOrganizationFields | **DELETE** /organizationFields | Delete multiple organization fields in bulk
OrganizationFieldsApi | getOrganizationField | **GET** /organizationFields/{id} | Get one organization field
OrganizationFieldsApi | getOrganizationFields | **GET** /organizationFields | Get all organization fields
OrganizationFieldsApi | updateOrganizationField | **PUT** /organizationFields/{id} | Update an organization field
OrganizationRelationshipsApi | addOrganizationRelationship | **POST** /organizationRelationships | Create an organization relationship
OrganizationRelationshipsApi | deleteOrganizationRelationship | **DELETE** /organizationRelationships/{id} | Delete an organization relationship
OrganizationRelationshipsApi | getOrganizationRelationship | **GET** /organizationRelationships/{id} | Get one organization relationship
OrganizationRelationshipsApi | getOrganizationRelationships | **GET** /organizationRelationships | Get all relationships for organization
OrganizationRelationshipsApi | updateOrganizationRelationship | **PUT** /organizationRelationships/{id} | Update an organization relationship
OrganizationsApi | addOrganization | **POST** /organizations | Add an organization
OrganizationsApi | addOrganizationFollower | **POST** /organizations/{id}/followers | Add a follower to an organization
OrganizationsApi | deleteOrganization | **DELETE** /organizations/{id} | Delete an organization
OrganizationsApi | deleteOrganizationFollower | **DELETE** /organizations/{id}/followers/{follower_id} | Delete a follower from an organization
OrganizationsApi | deleteOrganizations | **DELETE** /organizations | Delete multiple organizations in bulk
OrganizationsApi | getOrganization | **GET** /organizations/{id} | Get details of an organization
OrganizationsApi | getOrganizationActivities | **GET** /organizations/{id}/activities | List activities associated with an organization
OrganizationsApi | getOrganizationChangelog | **GET** /organizations/{id}/changelog | List updates about organization field values
OrganizationsApi | getOrganizationDeals | **GET** /organizations/{id}/deals | List deals associated with an organization
OrganizationsApi | getOrganizationFiles | **GET** /organizations/{id}/files | List files attached to an organization
OrganizationsApi | getOrganizationFollowers | **GET** /organizations/{id}/followers | List followers of an organization
OrganizationsApi | getOrganizationMailMessages | **GET** /organizations/{id}/mailMessages | List mail messages associated with an organization
OrganizationsApi | getOrganizationPersons | **GET** /organizations/{id}/persons | List persons of an organization
OrganizationsApi | getOrganizationUpdates | **GET** /organizations/{id}/flow | List updates about an organization
OrganizationsApi | getOrganizationUsers | **GET** /organizations/{id}/permittedUsers | List permitted users
OrganizationsApi | getOrganizations | **GET** /organizations | Get all organizations
OrganizationsApi | getOrganizationsCollection | **GET** /organizations/collection | Get all organizations (BETA)
OrganizationsApi | mergeOrganizations | **PUT** /organizations/{id}/merge | Merge two organizations
OrganizationsApi | searchOrganization | **GET** /organizations/search | Search organizations
OrganizationsApi | updateOrganization | **PUT** /organizations/{id} | Update an organization
PermissionSetsApi | getPermissionSet | **GET** /permissionSets/{id} | Get one permission set
PermissionSetsApi | getPermissionSetAssignments | **GET** /permissionSets/{id}/assignments | List permission set assignments
PermissionSetsApi | getPermissionSets | **GET** /permissionSets | Get all permission sets
PersonFieldsApi | addPersonField | **POST** /personFields | Add a new person field
PersonFieldsApi | deletePersonField | **DELETE** /personFields/{id} | Delete a person field
PersonFieldsApi | deletePersonFields | **DELETE** /personFields | Delete multiple person fields in bulk
PersonFieldsApi | getPersonField | **GET** /personFields/{id} | Get one person field
PersonFieldsApi | getPersonFields | **GET** /personFields | Get all person fields
PersonFieldsApi | updatePersonField | **PUT** /personFields/{id} | Update a person field
PersonsApi | addPerson | **POST** /persons | Add a person
PersonsApi | addPersonFollower | **POST** /persons/{id}/followers | Add a follower to a person
PersonsApi | addPersonPicture | **POST** /persons/{id}/picture | Add person picture
PersonsApi | deletePerson | **DELETE** /persons/{id} | Delete a person
PersonsApi | deletePersonFollower | **DELETE** /persons/{id}/followers/{follower_id} | Delete a follower from a person
PersonsApi | deletePersonPicture | **DELETE** /persons/{id}/picture | Delete person picture
PersonsApi | deletePersons | **DELETE** /persons | Delete multiple persons in bulk
PersonsApi | getPerson | **GET** /persons/{id} | Get details of a person
PersonsApi | getPersonActivities | **GET** /persons/{id}/activities | List activities associated with a person
PersonsApi | getPersonChangelog | **GET** /persons/{id}/changelog | List updates about person field values
PersonsApi | getPersonDeals | **GET** /persons/{id}/deals | List deals associated with a person
PersonsApi | getPersonFiles | **GET** /persons/{id}/files | List files attached to a person
PersonsApi | getPersonFollowers | **GET** /persons/{id}/followers | List followers of a person
PersonsApi | getPersonMailMessages | **GET** /persons/{id}/mailMessages | List mail messages associated with a person
PersonsApi | getPersonProducts | **GET** /persons/{id}/products | List products associated with a person
PersonsApi | getPersonUpdates | **GET** /persons/{id}/flow | List updates about a person
PersonsApi | getPersonUsers | **GET** /persons/{id}/permittedUsers | List permitted users
PersonsApi | getPersons | **GET** /persons | Get all persons
PersonsApi | getPersonsCollection | **GET** /persons/collection | Get all persons (BETA)
PersonsApi | mergePersons | **PUT** /persons/{id}/merge | Merge two persons
PersonsApi | searchPersons | **GET** /persons/search | Search persons
PersonsApi | updatePerson | **PUT** /persons/{id} | Update a person
PipelinesApi | addPipeline | **POST** /pipelines | Add a new pipeline
PipelinesApi | deletePipeline | **DELETE** /pipelines/{id} | Delete a pipeline
PipelinesApi | getPipeline | **GET** /pipelines/{id} | Get one pipeline
PipelinesApi | getPipelineConversionStatistics | **GET** /pipelines/{id}/conversion_statistics | Get deals conversion rates in pipeline
PipelinesApi | getPipelineDeals | **GET** /pipelines/{id}/deals | Get deals in a pipeline
PipelinesApi | getPipelineMovementStatistics | **GET** /pipelines/{id}/movement_statistics | Get deals movements in pipeline
PipelinesApi | getPipelines | **GET** /pipelines | Get all pipelines
PipelinesApi | updatePipeline | **PUT** /pipelines/{id} | Update a pipeline
ProductFieldsApi | addProductField | **POST** /productFields | Add a new product field
ProductFieldsApi | deleteProductField | **DELETE** /productFields/{id} | Delete a product field
ProductFieldsApi | deleteProductFields | **DELETE** /productFields | Delete multiple product fields in bulk
ProductFieldsApi | getProductField | **GET** /productFields/{id} | Get one product field
ProductFieldsApi | getProductFields | **GET** /productFields | Get all product fields
ProductFieldsApi | updateProductField | **PUT** /productFields/{id} | Update a product field
ProductsApi | addProduct | **POST** /products | Add a product
ProductsApi | addProductFollower | **POST** /products/{id}/followers | Add a follower to a product
ProductsApi | deleteProduct | **DELETE** /products/{id} | Delete a product
ProductsApi | deleteProductFollower | **DELETE** /products/{id}/followers/{follower_id} | Delete a follower from a product
ProductsApi | getProduct | **GET** /products/{id} | Get one product
ProductsApi | getProductDeals | **GET** /products/{id}/deals | Get deals where a product is attached to
ProductsApi | getProductFiles | **GET** /products/{id}/files | List files attached to a product
ProductsApi | getProductFollowers | **GET** /products/{id}/followers | List followers of a product
ProductsApi | getProductUsers | **GET** /products/{id}/permittedUsers | List permitted users
ProductsApi | getProducts | **GET** /products | Get all products
ProductsApi | searchProducts | **GET** /products/search | Search products
ProductsApi | updateProduct | **PUT** /products/{id} | Update a product
ProjectTemplatesApi | getProjectTemplate | **GET** /projectTemplates/{id} | Get details of a template
ProjectTemplatesApi | getProjectTemplates | **GET** /projectTemplates | Get all project templates
ProjectTemplatesApi | getProjectsBoard | **GET** /projects/boards/{id} | Get details of a board
ProjectTemplatesApi | getProjectsPhase | **GET** /projects/phases/{id} | Get details of a phase
ProjectsApi | addProject | **POST** /projects | Add a project
ProjectsApi | archiveProject | **POST** /projects/{id}/archive | Archive a project
ProjectsApi | deleteProject | **DELETE** /projects/{id} | Delete a project
ProjectsApi | getProject | **GET** /projects/{id} | Get details of a project
ProjectsApi | getProjectActivities | **GET** /projects/{id}/activities | Returns project activities
ProjectsApi | getProjectGroups | **GET** /projects/{id}/groups | Returns project groups
ProjectsApi | getProjectPlan | **GET** /projects/{id}/plan | Returns project plan
ProjectsApi | getProjectTasks | **GET** /projects/{id}/tasks | Returns project tasks
ProjectsApi | getProjects | **GET** /projects | Get all projects
ProjectsApi | getProjectsBoards | **GET** /projects/boards | Get all project boards
ProjectsApi | getProjectsPhases | **GET** /projects/phases | Get project phases
ProjectsApi | putProjectPlanActivity | **PUT** /projects/{id}/plan/activities/{activityId} | Update activity in project plan
ProjectsApi | putProjectPlanTask | **PUT** /projects/{id}/plan/tasks/{taskId} | Update task in project plan
ProjectsApi | updateProject | **PUT** /projects/{id} | Update a project
RecentsApi | getRecents | **GET** /recents | Get recents
RolesApi | addOrUpdateRoleSetting | **POST** /roles/{id}/settings | Add or update role setting
RolesApi | addRole | **POST** /roles | Add a role
RolesApi | addRoleAssignment | **POST** /roles/{id}/assignments | Add role assignment
RolesApi | deleteRole | **DELETE** /roles/{id} | Delete a role
RolesApi | deleteRoleAssignment | **DELETE** /roles/{id}/assignments | Delete a role assignment
RolesApi | getRole | **GET** /roles/{id} | Get one role
RolesApi | getRoleAssignments | **GET** /roles/{id}/assignments | List role assignments
RolesApi | getRolePipelines | **GET** /roles/{id}/pipelines | List pipeline visibility for a role
RolesApi | getRoleSettings | **GET** /roles/{id}/settings | List role settings
RolesApi | getRoles | **GET** /roles | Get all roles
RolesApi | updateRole | **PUT** /roles/{id} | Update role details
RolesApi | updateRolePipelines | **PUT** /roles/{id}/pipelines | Update pipeline visibility for a role
StagesApi | addStage | **POST** /stages | Add a new stage
StagesApi | deleteStage | **DELETE** /stages/{id} | Delete a stage
StagesApi | deleteStages | **DELETE** /stages | Delete multiple stages in bulk
StagesApi | getStage | **GET** /stages/{id} | Get one stage
StagesApi | getStageDeals | **GET** /stages/{id}/deals | Get deals in a stage
StagesApi | getStages | **GET** /stages | Get all stages
StagesApi | updateStage | **PUT** /stages/{id} | Update stage details
SubscriptionsApi | addRecurringSubscription | **POST** /subscriptions/recurring | Add a recurring subscription
SubscriptionsApi | addSubscriptionInstallment | **POST** /subscriptions/installment | Add an installment subscription
SubscriptionsApi | cancelRecurringSubscription | **PUT** /subscriptions/recurring/{id}/cancel | Cancel a recurring subscription
SubscriptionsApi | deleteSubscription | **DELETE** /subscriptions/{id} | Delete a subscription
SubscriptionsApi | findSubscriptionByDeal | **GET** /subscriptions/find/{dealId} | Find subscription by deal
SubscriptionsApi | getSubscription | **GET** /subscriptions/{id} | Get details of a subscription
SubscriptionsApi | getSubscriptionPayments | **GET** /subscriptions/{id}/payments | Get all payments of a subscription
SubscriptionsApi | updateRecurringSubscription | **PUT** /subscriptions/recurring/{id} | Update a recurring subscription
SubscriptionsApi | updateSubscriptionInstallment | **PUT** /subscriptions/installment/{id} | Update an installment subscription
TasksApi | addTask | **POST** /tasks | Add a task
TasksApi | deleteTask | **DELETE** /tasks/{id} | Delete a task
TasksApi | getTask | **GET** /tasks/{id} | Get details of a task
TasksApi | getTasks | **GET** /tasks | Get all tasks
TasksApi | updateTask | **PUT** /tasks/{id} | Update a task
UserConnectionsApi | getUserConnections | **GET** /userConnections | Get all user connections
UserSettingsApi | getUserSettings | **GET** /userSettings | List settings of an authorized user
UsersApi | addUser | **POST** /users | Add a new user
UsersApi | findUsersByName | **GET** /users/find | Find users by name
UsersApi | getCurrentUser | **GET** /users/me | Get current user data
UsersApi | getUser | **GET** /users/{id} | Get one user
UsersApi | getUserFollowers | **GET** /users/{id}/followers | List followers of a user
UsersApi | getUserPermissions | **GET** /users/{id}/permissions | List user permissions
UsersApi | getUserRoleAssignments | **GET** /users/{id}/roleAssignments | List role assignments
UsersApi | getUserRoleSettings | **GET** /users/{id}/roleSettings | List user role settings
UsersApi | getUsers | **GET** /users | Get all users
UsersApi | updateUser | **PUT** /users/{id} | Update user details
WebhooksApi | addWebhook | **POST** /webhooks | Create a new Webhook
WebhooksApi | deleteWebhook | **DELETE** /webhooks/{id} | Delete existing Webhook
WebhooksApi | getWebhooks | **GET** /webhooks | Get all Webhooks

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

