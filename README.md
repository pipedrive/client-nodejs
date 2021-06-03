# Pipedrive client for NodeJS based apps
Pipedrive is a sales pipeline software that gets you organized. It's a powerful sales CRM with effortless sales pipeline management. See www.pipedrive.com for details.

This is the official Pipedrive API wrapper-client for NodeJS based apps, distributed by Pipedrive Inc freely under the MIT licence. It provides convenient access to the Pipedrive API, allowing you to operate with objects such as Deals, Persons, Organizations, Products and much more.

## Installation
```
npm install pipedrive
```

> ⚠️ Version 10 is a complete rewrite of the library and introduces breaking changes in the client API. This release includes improved OAuth 2 support, async & await / promises and access to all Pipedrive API endpoints.
>
> If you have been using a previous version of the client and cannot upgrade immediately, [older versions](https://github.com/pipedrive/client-nodejs/releases) are still available.
>
> Please use the [issues page](https://github.com/pipedrive/client-nodejs/issues) for reporting bugs or leaving feedback. Note that most of the code is [automatically generated](https://github.com/pipedrive/client-nodejs/#contributing).

## API Reference
The Pipedrive RESTful API Reference can be found at https://developers.pipedrive.com/docs/api/v1

## License
This Pipedrive API client is distributed under the MIT license.

## How to use

### With a pre-set API token

```JavaScript
const express = require('express');
const app = express();
const lib = require('pipedrive');

const PORT = 1800;

lib.Configuration.apiToken = 'YOUR_API_TOKEN_HERE';

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
    const user = await lib.UsersController.getCurrentUserData();

    res.send(user);
});

```

### With OAuth 2
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthClientId | OAuth 2 Client ID |
| oAuthClientSecret | OAuth 2 Client Secret |
| oAuthRedirectUri | OAuth 2 Redirection endpoint or Callback Uri |



API client can be initialized as following:

```JavaScript
const lib = require('pipedrive');

// Configuration parameters and credentials
lib.Configuration.oAuthClientId = "oAuthClientId"; // OAuth 2 Client ID
lib.Configuration.oAuthClientSecret = "oAuthClientSecret"; // OAuth 2 Client Secret
lib.Configuration.oAuthRedirectUri = "oAuthRedirectUri"; // OAuth 2 Redirection endpoint or Callback Uri

```

You must now authorize the client.

### Authorizing your client


Your application must obtain user authorization before it can execute an endpoint call. The SDK uses OAuth 2.0 authorization to obtain a user's consent to perform an API request on user's behalf.

#### 1. Obtaining user consent

To obtain user's consent, you must redirect the user to the authorization page. The `buildAuthorizationUrl()` method creates the URL to the authorization page.
```JavaScript
const oAuthManager = lib.OAuthManager;
const authUrl = oAuthManager.buildAuthorizationUrl();
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

After the server receives the code, it can exchange this for an *access token*. The access token is an object containing information for authorizing the client and refreshing the token itself.

```JavaScript
const tokenPromise = oAuthManager.authorize(code);
```
The Node.js SDK supports both callbacks and promises. So, the authorize call returns a promise and also returns response back in the callback (if one is provided)



### Refreshing token

Access tokens may expire after sometime. To extend its lifetime, you must refresh the token.

```JavaScript
const refreshPromise = oAuthManager.refreshToken();
refreshPromise.then(() => {
    // token has been refreshed
} , (exception) => {
    // error occurred, exception will be of type lib/Exceptions/OAuthProviderException
});
```

If a token expires, the SDK will attempt to automatically refresh the token before the next endpoint call which requires authentication.


### Storing an access token for reuse

It is recommended that you store the access token for reuse.

This code snippet stores the access token in a session for an express application. It uses the [cookie-parser](https://www.npmjs.com/package/cookie-parser) and [cookie-session](https://www.npmjs.com/package/cookie-session) npm packages for storing the access token.
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
// store token in the session
req.session.token = lib.Configuration.oAuthToken;
```
However, since the the SDK will attempt to automatically refresh the token when it expires, it is recommended that you register a **token update callback** to detect any change to the access token.

```JavaScript
lib.Configuration.oAuthTokenUpdateCallback = function(token) {
    // getting the updated token
    req.session.token = token;
}
```

The token update callback will be fired upon authorization as well as token refresh.

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token in `Configuration` along with the other configuration parameters before making endpoint calls:
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
    lib.Configuration.oAuthToken = req.session.token; // the access token stored in the session
});
```
### Complete example

This example demonstrates an express application (which uses [cookie-parser](https://www.npmjs.com/package/cookie-parser) and [cookie-session](https://www.npmjs.com/package/cookie-session)) for handling session persistence.

In this example, there are 2 endpoints. The base endpoint `'/'` first checks if the token is stored in the session. If it is, API endpoints can be called using the corresponding SDK controllers.

However, if the token is not set in the session, then authorization URL is built and opened up. The response comes back at the `'/callback'` endpoint, which uses the code to authorize the client and store the token in the session. It then redirects back to the base endpoint for calling endpoints from the SDK.

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
const oAuthManager = lib.OAuthManager;

lib.Configuration.oAuthClientId = 'oAuthClientId'; // OAuth 2 Client ID
lib.Configuration.oAuthClientSecret = 'oAuthClientSecret'; // OAuth 2 Client Secret
lib.Configuration.oAuthRedirectUri = 'http://localhost:1800/callback'; // OAuth 2 Redirection endpoint or Callback Uri


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
    if (req.session.token !== null && req.session.token !== undefined) {
        // token is already set in the session
        // now make API calls as required
        // client will automatically refresh the token when it expires and call the token update callback
        const user = await lib.UsersController.getCurrentUserData();

        res.send(user);
    } else {
        const authUrl = oAuthManager.buildAuthorizationUrl();

        res.redirect(authUrl);
    }
});

app.get('/callback', (req, res) => {
    const authCode = req.query.code;
    const promise = oAuthManager.authorize(authCode);

    promise.then(() => {
        req.session.token = lib.Configuration.oAuthToken;
        res.redirect('/');
    }, (exception) => {
        // error occurred, exception will be of type lib/Exceptions/OAuthProviderException
    });
});

```

## Contributing
Please be aware that most of the code is auto-generated. You are welcome to suggest changes and report bugs. However, any updates will have to be implemented in the underlying generator.

## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Pipedrive API v1Controller`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [ActivitiesController](#activities_controller)
* [ActivityFieldsController](#activity_fields_controller)
* [ActivityTypesController](#activity_types_controller)
* [CurrenciesController](#currencies_controller)
* [DealFieldsController](#deal_fields_controller)
* [DealsController](#deals_controller)
* [FilesController](#files_controller)
* [FiltersController](#filters_controller)
* [GlobalMessagesController](#global_messages_controller)
* [GoalsController](#goals_controller)
* [ItemsController](#item_controller)
* [MailMessagesController](#mail_messages_controller)
* [MailThreadsController](#mail_threads_controller)
* [NoteFieldsController](#note_fields_controller)
* [NotesController](#notes_controller)
* [OrganizationFieldsController](#organization_fields_controller)
* [OrganizationRelationshipsController](#organization_relationships_controller)
* [OrganizationsController](#organizations_controller)
* [PermissionSetsController](#permission_sets_controller)
* [PersonFieldsController](#person_fields_controller)
* [PersonsController](#persons_controller)
* [PipelinesController](#pipelines_controller)
* [ProductFieldsController](#product_fields_controller)
* [ProductsController](#products_controller)
* [RecentsController](#recents_controller)
* [RolesController](#roles_controller)
* [StagesController](#stages_controller)
* [TeamsController](#teams_controller)
* [UserConnectionsController](#user_connections_controller)
* [UserSettingsController](#user_settings_controller)
* [UsersController](#users_controller)
* [WebhooksController](#webhooks_controller)

## <a name="activities_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ActivitiesController") ActivitiesController

### Get singleton instance

The singleton instance of the ``` ActivitiesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ActivitiesController;
```

### <a name="delete_multiple_activities_in_bulk"></a>![Method: ](https://apidocs.io/img/method.png ".ActivitiesController.deleteMultipleActivitiesInBulk") deleteMultipleActivitiesInBulk

> Marks multiple activities as deleted.


```javascript
function deleteMultipleActivitiesInBulk(ids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ids |  ``` Required ```  | Comma-separated IDs that will be deleted |



#### Example Usage

```javascript

    var ids = 'ids';

    controller.deleteMultipleActivitiesInBulk(ids, function(error, response, context) {

    
    });
```



### <a name="get_all_activities_assigned_to_a_particular_user"></a>![Method: ](https://apidocs.io/img/method.png ".ActivitiesController.getAllActivitiesAssignedToAParticularUser") getAllActivitiesAssignedToAParticularUser

> Returns all activities assigned to a particular user.


```javascript
function getAllActivitiesAssignedToAParticularUser(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Optional ```  | ID of the user whose activities will be fetched. If omitted, the user associated with the API token will be used. If 0, activities for all company users will be fetched based on the permission sets. |
| filterId |  ``` Optional ```  | ID of the filter to use (will narrow down results if used together with user_id parameter). |
| type |  ``` Optional ```  | Type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the key_string parameter of ActivityTypes. |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| startDate |  ``` Optional ```  | Date in format of YYYY-MM-DD from which activities to fetch from. |
| endDate |  ``` Optional ```  | Date in format of YYYY-MM-DD until which activities to fetch to. |
| done |  ``` Optional ```  | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities. |



#### Example Usage

```javascript

    var input = {};
        input['userId'] = 58;
        input['filterId'] = 58;
        input['type'] = 'type';
        input['start'] = 0;
        input['limit'] = 58;
        input['startDate'] = '2019-11-22';
        input['endDate'] = '2019-11-22';
        input['done'] = Object.keys(NumberBoolean)[0];

    controller.getAllActivitiesAssignedToAParticularUser(input, function(error, response, context) {

    
    });
```



### <a name="add_an_activity"></a>![Method: ](https://apidocs.io/img/method.png ".ActivitiesController.addAnActivity") addAnActivity

> Adds a new activity. Includes more_activities_scheduled_in_context property in response's additional_data which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data). For more information on how to add an activity, see <a href="https://pipedrive.readme.io/docs/adding-an-activity" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function addAnActivity(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subject |  ``` Required ```  | Subject of the activity |
| type |  ``` Required ```  | Type of the activity. This is in correlation with the key_string parameter of ActivityTypes. |
| done |  ``` Optional ```  | TODO: Add a parameter description |
| dueDate |  ``` Optional ```  | Due date of the activity. Format: YYYY-MM-DD |
| dueTime |  ``` Optional ```  | Due time of the activity in UTC. Format: HH:MM |
| duration |  ``` Optional ```  | Duration of the activity. Format: HH:MM |
| userId |  ``` Optional ```  | ID of the user whom the activity will be assigned to. If omitted, the activity will be assigned to the authorized user. |
| dealId |  ``` Optional ```  | ID of the deal this activity will be associated with |
| personId |  ``` Optional ```  | ID of the person this activity will be associated with |
| participants |  ``` Optional ```  | List of multiple persons (participants) this activity will be associated with. If omitted, single participant from person_id field is used. It requires a structure as follows: [{"person_id":1,"primary_flag":true}] |
| orgId |  ``` Optional ```  | ID of the organization this activity will be associated with |
| note |  ``` Optional ```  | Note of the activity (HTML format) |



#### Example Usage

```javascript

    var input = {};
        input['subject'] = 'subject';
        input['type'] = 'type';
        input['done'] = Object.keys(NumberBoolean)[0];
        input['dueDate'] = '2019-11-22';
        input['dueTime'] = due_time;
        input['duration'] = 'duration';
        input['userId'] = 58;
        input['dealId'] = 58;
        input['personId'] = 58;
        input['participants'] = 'participants';
        input['orgId'] = 58;
        input['note'] = 'note';

    controller.addAnActivity(input, function(error, response, context) {

    
    });
```



### <a name="delete_an_activity"></a>![Method: ](https://apidocs.io/img/method.png ".ActivitiesController.deleteAnActivity") deleteAnActivity

> Deletes an activity.


```javascript
function deleteAnActivity(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the activity |



#### Example Usage

```javascript

    var id = 58;

    controller.deleteAnActivity(id, function(error, response, context) {

    
    });
```



### <a name="get_details_of_an_activity"></a>![Method: ](https://apidocs.io/img/method.png ".ActivitiesController.getDetailsOfAnActivity") getDetailsOfAnActivity

> Returns details of a specific activity.


```javascript
function getDetailsOfAnActivity(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the activity |



#### Example Usage

```javascript

    var id = 58;

    controller.getDetailsOfAnActivity(id, function(error, response, context) {

    
    });
```



### <a name="update_edit_an_activity"></a>![Method: ](https://apidocs.io/img/method.png ".ActivitiesController.updateEditAnActivity") updateEditAnActivity

> Modifies an activity. Includes more_activities_scheduled_in_context property in response's additional_data which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data).


```javascript
function updateEditAnActivity(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the activity |
| subject |  ``` Required ```  | Subject of the activity |
| type |  ``` Required ```  | Type of the activity. This is in correlation with the key_string parameter of ActivityTypes. |
| done |  ``` Optional ```  | TODO: Add a parameter description |
| dueDate |  ``` Optional ```  | Due date of the activity. Format: YYYY-MM-DD |
| dueTime |  ``` Optional ```  | Due time of the activity in UTC. Format: HH:MM |
| duration |  ``` Optional ```  | Duration of the activity. Format: HH:MM |
| userId |  ``` Optional ```  | ID of the user whom the activity will be assigned to. If omitted, the activity will be assigned to the authorized user. |
| dealId |  ``` Optional ```  | ID of the deal this activity will be associated with |
| personId |  ``` Optional ```  | ID of the person this activity will be associated with |
| participants |  ``` Optional ```  | List of multiple persons (participants) this activity will be associated with. If omitted, single participant from person_id field is used. It requires a structure as follows: [{"person_id":1,"primary_flag":true}] |
| orgId |  ``` Optional ```  | ID of the organization this activity will be associated with |
| note |  ``` Optional ```  | Note of the activity (HTML format) |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['subject'] = 'subject';
        input['type'] = 'type';
        input['done'] = Object.keys(NumberBoolean)[0];
        input['dueDate'] = '2019-11-22';
        input['dueTime'] = due_time;
        input['duration'] = 'duration';
        input['userId'] = 58;
        input['dealId'] = 58;
        input['personId'] = 58;
        input['participants'] = 'participants';
        input['orgId'] = 58;
        input['note'] = 'note';

    controller.updateEditAnActivity(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="activity_fields_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ActivityFieldsController") ActivityFieldsController

### Get singleton instance

The singleton instance of the ``` ActivityFieldsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ActivityFieldsController;
```

### <a name="get_all_fields_for_an_activity"></a>![Method: ](https://apidocs.io/img/method.png ".ActivityFieldsController.getAllFieldsForAnActivity") getAllFieldsForAnActivity

> Return list of all fields for activity


```javascript
function getAllFieldsForAnActivity(callback)
```

#### Example Usage

```javascript


    controller.getAllFieldsForAnActivity(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="activity_types_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ActivityTypesController") ActivityTypesController

### Get singleton instance

The singleton instance of the ``` ActivityTypesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ActivityTypesController;
```

### <a name="delete_multiple_activity_types_in_bulk"></a>![Method: ](https://apidocs.io/img/method.png ".ActivityTypesController.deleteMultipleActivityTypesInBulk") deleteMultipleActivityTypesInBulk

> Marks multiple activity types as deleted.


```javascript
function deleteMultipleActivityTypesInBulk(ids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ids |  ``` Required ```  | Comma-separated activity type IDs to delete |



#### Example Usage

```javascript

    var ids = 'ids';

    controller.deleteMultipleActivityTypesInBulk(ids, function(error, response, context) {

    
    });
```



### <a name="get_all_activity_types"></a>![Method: ](https://apidocs.io/img/method.png ".ActivityTypesController.getAllActivityTypes") getAllActivityTypes

> Returns all activity types


```javascript
function getAllActivityTypes(callback)
```

#### Example Usage

```javascript


    controller.getAllActivityTypes(function(error, response, context) {

    
    });
```



### <a name="add_new_activity_type"></a>![Method: ](https://apidocs.io/img/method.png ".ActivityTypesController.addNewActivityType") addNewActivityType

> Adds a new activity type, returns the ID, the key_string and the order number of the newly added activity type upon success.


```javascript
function addNewActivityType(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Required ```  | Name of the activity type |
| iconKey |  ``` Required ```  | Icon graphic to use for representing this activity type. |
| color |  ``` Optional ```  | A designated color for the activity type in 6-character HEX format (e.g. FFFFFF for white, 000000 for black). |



#### Example Usage

```javascript

    var input = {};
        input['name'] = 'name';
        input['iconKey'] = Object.keys(IconKey)[0];
        input['color'] = 'color';

    controller.addNewActivityType(input, function(error, response, context) {

    
    });
```



### <a name="delete_an_activity_type"></a>![Method: ](https://apidocs.io/img/method.png ".ActivityTypesController.deleteAnActivityType") deleteAnActivityType

> Marks an activity type as deleted.


```javascript
function deleteAnActivityType(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the activity type |



#### Example Usage

```javascript

    var id = 58;

    controller.deleteAnActivityType(id, function(error, response, context) {

    
    });
```



### <a name="update_edit_activity_type"></a>![Method: ](https://apidocs.io/img/method.png ".ActivityTypesController.updateEditActivityType") updateEditActivityType

> Updates an activity type.


```javascript
function updateEditActivityType(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the activity type |
| name |  ``` Optional ```  | Name of the activity type |
| iconKey |  ``` Optional ```  | Icon graphic to use for representing this activity type. |
| color |  ``` Optional ```  | A designated color for the activity type in 6-character HEX format (e.g. FFFFFF for white, 000000 for black). |
| orderNr |  ``` Optional ```  | An order number for this activity type. Order numbers should be used to order the types in the activity type selections. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['name'] = 'name';
        input['iconKey'] = Object.keys(IconKey)[0];
        input['color'] = 'color';
        input['orderNr'] = 58;

    controller.updateEditActivityType(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="currencies_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CurrenciesController") CurrenciesController

### Get singleton instance

The singleton instance of the ``` CurrenciesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CurrenciesController;
```

### <a name="get_all_supported_currencies"></a>![Method: ](https://apidocs.io/img/method.png ".CurrenciesController.getAllSupportedCurrencies") getAllSupportedCurrencies

> Returns all supported currencies in given account which should be used when saving monetary values with other objects. The 'code' parameter of the returning objects is the currency code according to ISO 4217 for all non-custom currencies.


```javascript
function getAllSupportedCurrencies(term, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| term |  ``` Optional ```  | Optional search term that is searched for from currency's name and/or code. |



#### Example Usage

```javascript

    var term = 'term';

    controller.getAllSupportedCurrencies(term, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="deal_fields_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DealFieldsController") DealFieldsController

### Get singleton instance

The singleton instance of the ``` DealFieldsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.DealFieldsController;
```

### <a name="delete_multiple_deal_fields_in_bulk"></a>![Method: ](https://apidocs.io/img/method.png ".DealFieldsController.deleteMultipleDealFieldsInBulk") deleteMultipleDealFieldsInBulk

> Marks multiple fields as deleted.


```javascript
function deleteMultipleDealFieldsInBulk(ids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ids |  ``` Required ```  | Comma-separated field IDs to delete |



#### Example Usage

```javascript

    var ids = 'ids';

    controller.deleteMultipleDealFieldsInBulk(ids, function(error, response, context) {

    
    });
```



### <a name="get_all_deal_fields"></a>![Method: ](https://apidocs.io/img/method.png ".DealFieldsController.getAllDealFields") getAllDealFields

> Returns data about all fields deals can have


```javascript
function getAllDealFields(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['start'] = 0;
        input['limit'] = 58;

    controller.getAllDealFields(input, function(error, response, context) {

    
    });
```



### <a name="add_a_new_deal_field"></a>![Method: ](https://apidocs.io/img/method.png ".DealFieldsController.addANewDealField") addANewDealField

> Adds a new deal field. For more information on adding a new custom field, see <a href="https://pipedrive.readme.io/docs/adding-a-new-custom-field" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function addANewDealField(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.addANewDealField(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_deal_field"></a>![Method: ](https://apidocs.io/img/method.png ".DealFieldsController.deleteADealField") deleteADealField

> Marks a field as deleted. For more information on how to delete a custom field, see <a href="https://pipedrive.readme.io/docs/deleting-a-custom-field" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function deleteADealField(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the field |



#### Example Usage

```javascript

    var id = 58;

    controller.deleteADealField(id, function(error, response, context) {

    
    });
```



### <a name="get_one_deal_field"></a>![Method: ](https://apidocs.io/img/method.png ".DealFieldsController.getOneDealField") getOneDealField

> Returns data about a specific deal field.


```javascript
function getOneDealField(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the field |



#### Example Usage

```javascript

    var id = 58;

    controller.getOneDealField(id, function(error, response, context) {

    
    });
```



### <a name="update_a_deal_field"></a>![Method: ](https://apidocs.io/img/method.png ".DealFieldsController.updateADealField") updateADealField

> Updates a deal field. See an example of updating custom fields’ values in <a href=" https://pipedrive.readme.io/docs/updating-custom-field-value " target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function updateADealField(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the field |
| name |  ``` Required ```  | Name of the field |
| options |  ``` Optional ```  | When field_type is either set or enum, possible options must be supplied as a JSON-encoded sequential array, for example: ["red","blue","lilac"] |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['name'] = 'name';
        input['options'] = 'options';

    controller.updateADealField(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="deals_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DealsController") DealsController

### Get singleton instance

The singleton instance of the ``` DealsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.DealsController;
```

### <a name="delete_multiple_deals_in_bulk"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.deleteMultipleDealsInBulk") deleteMultipleDealsInBulk

> Marks multiple deals as deleted.


```javascript
function deleteMultipleDealsInBulk(ids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ids |  ``` Required ```  | Comma-separated IDs that will be deleted |



#### Example Usage

```javascript

    var ids = 'ids';

    controller.deleteMultipleDealsInBulk(ids, function(error, response, context) {

    
    });
```



### <a name="get_all_deals"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.getAllDeals") getAllDeals

> Returns all deals. For more information on how to get all deals, see <a href="https://pipedrive.readme.io/docs/getting-all-deals" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function getAllDeals(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Optional ```  | If supplied, only deals matching the given user will be returned. |
| filterId |  ``` Optional ```  | ID of the filter to use |
| stageId |  ``` Optional ```  | If supplied, only deals within the given stage will be returned. |
| status |  ``` Optional ```  ``` DefaultValue ```  | Only fetch deals with specific status. If omitted, all not deleted deals are fetched. |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| sort |  ``` Optional ```  | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). |
| ownedByYou |  ``` Optional ```  | When supplied, only deals owned by you are returned. However filter_id takes precedence over owned_by_you when both are supplied. |



#### Example Usage

```javascript

    var input = {};
        input['userId'] = 58;
        input['filterId'] = 58;
        input['stageId'] = 58;
        input['status'] = new Status2Enum(all_not_deleted);
        input['start'] = 0;
        input['limit'] = 58;
        input['sort'] = 'sort';
        input['ownedByYou'] = Object.keys(NumberBoolean)[0];

    controller.getAllDeals(input, function(error, response, context) {

    
    });
```



### <a name="add_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.addADeal") addADeal

> Adds a new deal. Note that you can supply additional custom fields along with the request that are not described here. These custom fields are different for each Pipedrive account and can be recognized by long hashes as keys. To determine which custom fields exists, fetch the dealFields and look for 'key' values. For more information on how to add a deal, see <a href="https://pipedrive.readme.io/docs/creating-a-deal" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function addADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.addADeal(input, function(error, response, context) {

    
    });
```



### <a name="search_deals"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.searchDeals") searchDeals

> Searches all Deals by title, notes and/or custom fields. This endpoint is a wrapper of /v1/itemSearch with a narrower OAuth scope. Found Deals can be filtered by Person ID and Organization ID.


```javascript
function searchDeals(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| term |  ``` Required ```  | Search term to look for |
| fields |  ``` Optional ```  | A comma-separated string array. The fields to perform the search from. Defaults to all of them. |
| exactMatch |  ``` Optional ```  | When enabled, only full exact matches against the given term are returned. It is not case sensitive. |
| personId |  ``` Optional ```  | Will filter Deals by the provided Person ID. The upper limit of found Deals associated with the Person is 2000. |
| organizationId |  ``` Optional ```  | Will filter Deals by the provided Organization ID. The upper limit of found Deals associated with the Organization is 2000. |
| status |  ``` Optional ```  | Will filter Deals by the provided specific status. open = Open, won = Won, lost = Lost. The upper limit of found Deals associated with the status is 2000. |
| includeFields |  ``` Optional ```  | Supports including optional fields in the results which are not provided by default. |
| start |  ``` Optional ```  | Pagination start. Note that the pagination is based on main results and does not include related items when using searchForRelatedItems parameter. |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['term'] = 'term';
        input['fields'] = ['custom_fields'];
        input['exactMatch'] = true;
        input['personId'] = 58;
        input['organizationId'] = 58;
        input['status'] = 'won';
        input['includeFields'] = 'deal.cc_email';
        input['start'] = 0;
        input['limit'] = 58;
        

    controller.searchDeals(input, function(error, response, context) {

    
    });
```


### <a name="get_deals_summary"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.getDealsSummary") getDealsSummary

> Returns summary of all the deals.


```javascript
function getDealsSummary(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| status |  ``` Optional ```  | Only fetch deals with specific status. open = Open, won = Won, lost = Lost |
| filterId |  ``` Optional ```  | user_id will not be considered. Only deals matching the given filter will be returned. |
| userId |  ``` Optional ```  | Only deals matching the given user will be returned. user_id will not be considered if you use filter_id. |
| stageId |  ``` Optional ```  | Only deals within the given stage will be returned. |



#### Example Usage

```javascript

    var input = {};
        input['status'] = Object.keys(status3)[0];
        input['filterId'] = 58;
        input['userId'] = 58;
        input['stageId'] = 58;

    controller.getDealsSummary(input, function(error, response, context) {

    
    });
```



### <a name="get_deals_timeline"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.getDealsTimeline") getDealsTimeline

> Returns open and won deals, grouped by defined interval of time set in a date-type dealField (field_key) — e.g. when month is the chosen interval, and 3 months are asked starting from  January 1st, 2012, deals are returned grouped into 3 groups — January, February and March — based on the value of the given field_key.


```javascript
function getDealsTimeline(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| startDate |  ``` Required ```  | Date where first interval starts. Format: YYYY-MM-DD |
| interval |  ``` Required ```  | Type of interval.<dl class="fields-list"><dt>day</dt><dd>Day</dd><dt>week</dt><dd>A full week (7 days) starting from start_date</dd><dt>month</dt><dd>A full month (depending on the number of days in given month) starting from start_date</dd><dt>quarter</dt><dd>A full quarter (3 months) starting from start_date</dd></dl> |
| amount |  ``` Required ```  | Number of given intervals, starting from start_date, to fetch. E.g. 3 (months). |
| fieldKey |  ``` Required ```  | The name of the date field by which to get deals by. |
| userId |  ``` Optional ```  | If supplied, only deals matching the given user will be returned. |
| pipelineId |  ``` Optional ```  | If supplied, only deals matching the given pipeline will be returned. |
| filterId |  ``` Optional ```  | If supplied, only deals matching the given filter will be returned. |
| excludeDeals |  ``` Optional ```  | Whether to exclude deals list (1) or not (0). Note that when deals are excluded, the timeline summary (counts and values) is still returned. |
| totalsConvertCurrency |  ``` Optional ```  | 3-letter currency code of any of the supported currencies. When supplied, totals_converted is returned per each interval which contains the currency-converted total amounts in the given currency. You may also set this parameter to 'default_currency' in which case users default currency is used. |



#### Example Usage

```javascript

    var input = {};
        input['startDate'] = '2019-11-22';
        input['interval'] = Object.keys(interval2)[0];
        input['amount'] = 58;
        input['fieldKey'] = field_key;
        input['userId'] = 58;
        input['pipelineId'] = 58;
        input['filterId'] = 58;
        input['excludeDeals'] = Object.keys(NumberBoolean)[0];
        input['totalsConvertCurrency'] = totals_convert_currency;

    controller.getDealsTimeline(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.deleteADeal") deleteADeal

> Marks a deal as deleted.


```javascript
function deleteADeal(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |



#### Example Usage

```javascript

    var id = 58;

    controller.deleteADeal(id, function(error, response, context) {

    
    });
```



### <a name="get_details_of_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.getDetailsOfADeal") getDetailsOfADeal

> Returns details of a specific deal. Note that this also returns some additional fields which are not present when asking for all deals – such as deal age and stay in pipeline stages. Also note that custom fields appear as long hashes in the resulting data. These hashes can be mapped against the 'key' value of dealFields. For more information on how to get all details of a deal, see <a href="https://pipedrive.readme.io/docs/getting-details-of-a-deal" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function getDetailsOfADeal(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |



#### Example Usage

```javascript

    var id = 58;

    controller.getDetailsOfADeal(id, function(error, response, context) {

    
    });
```



### <a name="update_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.updateADeal") updateADeal

> Updates the properties of a deal. For more information on how to update a deal, see <a href="https://pipedrive.readme.io/docs/updating-a-deal" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function updateADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| title |  ``` Optional ```  | Deal title |
| value |  ``` Optional ```  | Value of the deal. If omitted, value will be set to 0. |
| currency |  ``` Optional ```  | Currency of the deal. Accepts a 3-character currency code. If omitted, currency will be set to the default currency of the authorized user. |
| userId |  ``` Optional ```  | ID of the user who will be marked as the owner of this deal. If omitted, the authorized user ID will be used. |
| personId |  ``` Optional ```  | ID of the person this deal will be associated with |
| orgId |  ``` Optional ```  | ID of the organization this deal will be associated with |
| stageId |  ``` Optional ```  | ID of the stage this deal will be placed in a pipeline (note that you can't supply the ID of the pipeline as this will be assigned automatically based on stage_id). If omitted, the deal will be placed in the first stage of the default pipeline. |
| status |  ``` Optional ```  | open = Open, won = Won, lost = Lost, deleted = Deleted. If omitted, status will be set to open. |
| probability |  ``` Optional ```  | Deal success probability percentage. Used/shown only when deal_probability for the pipeline of the deal is enabled. |
| lostReason |  ``` Optional ```  | Optional message about why the deal was lost (to be used when status=lost) |
| visibleTo |  ``` Optional ```  | Visibility of the deal. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.<dl class="fields-list"><dt>1</dt><dd>Owner &amp; followers (private)</dd><dt>3</dt><dd>Entire company (shared)</dd></dl> |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['title'] = 'title';
        input['value'] = 'value';
        input['currency'] = 'currency';
        input['userId'] = 58;
        input['personId'] = 58;
        input['orgId'] = 58;
        input['stageId'] = 58;
        input['status'] = Object.keys(Status)[0];
        input['probability'] = 58.5644835925496;
        input['lostReason'] = lost_reason;
        input['visibleTo'] = Object.keys(VisibleTo)[0];

    controller.updateADeal(input, function(error, response, context) {

    
    });
```



### <a name="list_activities_associated_with_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.listActivitiesAssociatedWithADeal") listActivitiesAssociatedWithADeal

> Lists activities associated with a deal.


```javascript
function listActivitiesAssociatedWithADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| done |  ``` Optional ```  | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities. |
| exclude |  ``` Optional ```  | A comma-separated string of activity IDs to exclude from result |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['start'] = 58;
        input['limit'] = 58;
        input['done'] = Object.keys(NumberBoolean)[0];
        input['exclude'] = 'exclude';

    controller.listActivitiesAssociatedWithADeal(input, function(error, response, context) {

    
    });
```



### <a name="create_duplicate_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.createDuplicateDeal") createDuplicateDeal

> Duplicate a deal


```javascript
function createDuplicateDeal(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |



#### Example Usage

```javascript

    var id = 58;

    controller.createDuplicateDeal(id, function(error, response, context) {

    
    });
```



### <a name="list_files_attached_to_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.listFilesAttachedToADeal") listFilesAttachedToADeal

> Lists files associated with a deal.


```javascript
function listFilesAttachedToADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| includeDeletedFiles |  ``` Optional ```  | When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work. |
| sort |  ``` Optional ```  | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['start'] = 58;
        input['limit'] = 58;
        input['includeDeletedFiles'] = Object.keys(NumberBoolean)[0];
        input['sort'] = 'sort';

    controller.listFilesAttachedToADeal(input, function(error, response, context) {

    
    });
```



### <a name="list_updates_about_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.listUpdatesAboutADeal") listUpdatesAboutADeal

> Lists updates about a deal.


```javascript
function listUpdatesAboutADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['start'] = 58;
        input['limit'] = 58;

    controller.listUpdatesAboutADeal(input, function(error, response, context) {

    
    });
```



### <a name="list_followers_of_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.listFollowersOfADeal") listFollowersOfADeal

> Lists the followers of a deal.


```javascript
function listFollowersOfADeal(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |



#### Example Usage

```javascript

    var id = 58;

    controller.listFollowersOfADeal(id, function(error, response, context) {

    
    });
```



### <a name="add_a_follower_to_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.addAFollowerToADeal") addAFollowerToADeal

> Adds a follower to a deal.


```javascript
function addAFollowerToADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| userId |  ``` Required ```  | ID of the user |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['userId'] = 58;

    controller.addAFollowerToADeal(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_follower_from_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.deleteAFollowerFromADeal") deleteAFollowerFromADeal

> Deletes a follower from a deal.


```javascript
function deleteAFollowerFromADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| followerId |  ``` Required ```  | ID of the follower |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['followerId'] = 58;

    controller.deleteAFollowerFromADeal(input, function(error, response, context) {

    
    });
```



### <a name="list_mail_messages_associated_with_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.listMailMessagesAssociatedWithADeal") listMailMessagesAssociatedWithADeal

> Lists mail messages associated with a deal.


```javascript
function listMailMessagesAssociatedWithADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['start'] = 58;
        input['limit'] = 58;

    controller.listMailMessagesAssociatedWithADeal(input, function(error, response, context) {

    
    });
```



### <a name="update_merge_two_deals"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.updateMergeTwoDeals") updateMergeTwoDeals

> Merges a deal with another deal. For more information on how to merge two deals, see <a href="https://pipedrive.readme.io/docs/merging-two-deals" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function updateMergeTwoDeals(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| mergeWithId |  ``` Required ```  | ID of the deal that the deal will be merged with |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['mergeWithId'] = 58;

    controller.updateMergeTwoDeals(input, function(error, response, context) {

    
    });
```



### <a name="list_participants_of_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.listParticipantsOfADeal") listParticipantsOfADeal

> Lists participants associated with a deal.


```javascript
function listParticipantsOfADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['start'] = 58;
        input['limit'] = 58;

    controller.listParticipantsOfADeal(input, function(error, response, context) {

    
    });
```



### <a name="add_a_participant_to_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.addAParticipantToADeal") addAParticipantToADeal

> Adds a participant to a deal.


```javascript
function addAParticipantToADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| personId |  ``` Required ```  | ID of the person |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['personId'] = 58;

    controller.addAParticipantToADeal(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_participant_from_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.deleteAParticipantFromADeal") deleteAParticipantFromADeal

> Deletes a participant from a deal.


```javascript
function deleteAParticipantFromADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| dealParticipantId |  ``` Required ```  | ID of the deal participant |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['dealParticipantId'] = 58;

    controller.deleteAParticipantFromADeal(input, function(error, response, context) {

    
    });
```



### <a name="list_permitted_users"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.listPermittedUsers") listPermittedUsers

> List users permitted to access a deal


```javascript
function listPermittedUsers(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |



#### Example Usage

```javascript

    var id = 58;

    controller.listPermittedUsers(id, function(error, response, context) {

    
    });
```



### <a name="list_all_persons_associated_with_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.listAllPersonsAssociatedWithADeal") listAllPersonsAssociatedWithADeal

> Lists all persons associated with a deal, regardless of whether the person is the primary contact of the deal, or added as a participant.


```javascript
function listAllPersonsAssociatedWithADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['start'] = 58;
        input['limit'] = 58;

    controller.listAllPersonsAssociatedWithADeal(input, function(error, response, context) {

    
    });
```



### <a name="list_products_attached_to_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.listProductsAttachedToADeal") listProductsAttachedToADeal

> Lists products attached to a deal.


```javascript
function listProductsAttachedToADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| includeProductData |  ``` Optional ```  | Whether to fetch product data along with each attached product (1) or not (0, default). |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['start'] = 58;
        input['limit'] = 58;
        input['includeProductData'] = Object.keys(NumberBoolean)[0];

    controller.listProductsAttachedToADeal(input, function(error, response, context) {

    
    });
```



### <a name="add_a_product_to_the_deal_eventually_creating_a_new_item_called_a_deal_product"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.addAProductToTheDealEventuallyCreatingANewItemCalledADealProduct") addAProductToTheDealEventuallyCreatingANewItemCalledADealProduct

> Adds a product to the deal.


```javascript
function addAProductToTheDealEventuallyCreatingANewItemCalledADealProduct(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.addAProductToTheDealEventuallyCreatingANewItemCalledADealProduct(input, function(error, response, context) {

    
    });
```



### <a name="update_product_attachment_details_of_the_deal_product_a_product_already_attached_to_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.updateProductAttachmentDetailsOfTheDealProductAProductAlreadyAttachedToADeal") updateProductAttachmentDetailsOfTheDealProductAProductAlreadyAttachedToADeal

> Updates product attachment details.


```javascript
function updateProductAttachmentDetailsOfTheDealProductAProductAlreadyAttachedToADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| productAttachmentId |  ``` Required ```  | ID of the deal-product (the ID of the product attached to the deal) |
| itemPrice |  ``` Optional ```  | Price at which this product will be added to the deal |
| quantity |  ``` Optional ```  | Quantity – e.g. how many items of this product will be added to the deal |
| discountPercentage |  ``` Optional ```  | Discount %. If omitted, will be set to 0 |
| duration |  ``` Optional ```  | Duration of the product (when product durations are not enabled for the company or if omitted, defaults to 1) |
| productVariationId |  ``` Optional ```  | ID of the product variation to use. When omitted, no variation will be used. |
| comments |  ``` Optional ```  | Any textual comment associated with this product-deal attachment. Visible and editable in the application UI. |
| enabledFlag |  ``` Optional ```  | Whether the product is enabled on the deal or not. This makes it possible to add products to a deal with specific price and discount criteria - but keep them disabled, which refrains them from being included in deal price calculation. When omitted, the product will be marked as enabled by default. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['productAttachmentId'] = 58;
        input['itemPrice'] = 58.5644835925496;
        input['quantity'] = 58;
        input['discountPercentage'] = 58.5644835925496;
        input['duration'] = 58.5644835925496;
        input['productVariationId'] = 58;
        input['comments'] = 'comments';
        input['enabledFlag'] = Object.keys(NumberBoolean)[0];

    controller.updateProductAttachmentDetailsOfTheDealProductAProductAlreadyAttachedToADeal(input, function(error, response, context) {

    
    });
```



### <a name="delete_an_attached_product_from_a_deal"></a>![Method: ](https://apidocs.io/img/method.png ".DealsController.deleteAnAttachedProductFromADeal") deleteAnAttachedProductFromADeal

> Deletes a product attachment from a deal, using the product_attachment_id.


```javascript
function deleteAnAttachedProductFromADeal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the deal |
| productAttachmentId |  ``` Required ```  | Product attachment ID. This is returned as product_attachment_id after attaching a product to a deal or as id when listing the products attached to a deal. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['productAttachmentId'] = 58;

    controller.deleteAnAttachedProductFromADeal(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="files_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FilesController") FilesController

### Get singleton instance

The singleton instance of the ``` FilesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FilesController;
```

### <a name="get_all_files"></a>![Method: ](https://apidocs.io/img/method.png ".FilesController.getAllFiles") getAllFiles

> Returns data about all files.


```javascript
function getAllFiles(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| includeDeletedFiles |  ``` Optional ```  | When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work. |
| sort |  ``` Optional ```  | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment. |



#### Example Usage

```javascript

    var input = {};
        input['start'] = 0;
        input['limit'] = 58;
        input['includeDeletedFiles'] = Object.keys(NumberBoolean)[0];
        input['sort'] = 'sort';

    controller.getAllFiles(input, function(error, response, context) {

    
    });
```



### <a name="add_file"></a>![Method: ](https://apidocs.io/img/method.png ".FilesController.addFile") addFile

> Lets you upload a file and associate it with Deal, Person, Organization, Activity or Product. For more information on how to add a file, see <a href="https://pipedrive.readme.io/docs/adding-a-file" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function addFile(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| file |  ``` Required ```  | A single file, supplied in the multipart/form-data encoding and contained within the given boundaries. |
| dealId |  ``` Optional ```  | ID of the deal to associate file(s) with |
| personId |  ``` Optional ```  | ID of the person to associate file(s) with |
| orgId |  ``` Optional ```  | ID of the organization to associate file(s) with |
| productId |  ``` Optional ```  | ID of the product to associate file(s) with |
| activityId |  ``` Optional ```  | ID of the activity to associate file(s) with |
| noteId |  ``` Optional ```  | ID of the note to associate file(s) with |



#### Example Usage

```javascript

    TestHelper.getFilePath('url', function(data) {
        var input = {};
        input['file'] = data;
        input['dealId'] = 58;
        input['personId'] = 58;
        input['orgId'] = 58;
        input['productId'] = 58;
        input['activityId'] = 58;
        input['noteId'] = 58;

        controller.addFile(input, function(error, response, context) {

        });
    });
```



### <a name="create_a_remote_file_and_link_it_to_an_item"></a>![Method: ](https://apidocs.io/img/method.png ".FilesController.createARemoteFileAndLinkItToAnItem") createARemoteFileAndLinkItToAnItem

> Creates a new empty file in the remote location (googledrive) that will be linked to the item you supply. For more information on how to add a remote file, see <a href="https://pipedrive.readme.io/docs/adding-a-remote-file" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function createARemoteFileAndLinkItToAnItem(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fileType |  ``` Required ```  | The file type |
| title |  ``` Required ```  | The title of the file |
| itemType |  ``` Required ```  | The item type |
| itemId |  ``` Required ```  | ID of the item to associate the file with |
| remoteLocation |  ``` Required ```  | The location type to send the file to. Only googledrive is supported at the moment. |



#### Example Usage

```javascript

    var input = {};
        input['fileType'] = Object.keys(file_type)[0];
        input['title'] = 'title';
        input['itemType'] = Object.keys(item_type)[0];
        input['itemId'] = 58;
        input['remoteLocation'] = Object.keys(remote_location)[0];

    controller.createARemoteFileAndLinkItToAnItem(input, function(error, response, context) {

    
    });
```



### <a name="create_link_a_remote_file_to_an_item"></a>![Method: ](https://apidocs.io/img/method.png ".FilesController.createLinkARemoteFileToAnItem") createLinkARemoteFileToAnItem

> Links an existing remote file (googledrive) to the item you supply. For more information on how to link a remote file, see <a href="https://pipedrive.readme.io/docs/adding-a-remote-file" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function createLinkARemoteFileToAnItem(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| itemType |  ``` Required ```  | The item type |
| itemId |  ``` Required ```  | ID of the item to associate the file with |
| remoteId |  ``` Required ```  | The remote item id |
| remoteLocation |  ``` Required ```  | The location type to send the file to. Only googledrive is supported at the moment. |



#### Example Usage

```javascript

    var input = {};
        input['itemType'] = Object.keys(item_type)[0];
        input['itemId'] = 58;
        input['remoteId'] = remote_id;
        input['remoteLocation'] = Object.keys(remote_location)[0];

    controller.createLinkARemoteFileToAnItem(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_file"></a>![Method: ](https://apidocs.io/img/method.png ".FilesController.deleteAFile") deleteAFile

> Marks a file as deleted.


```javascript
function deleteAFile(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the file |



#### Example Usage

```javascript

    var id = 58;

    controller.deleteAFile(id, function(error, response, context) {

    
    });
```



### <a name="get_one_file"></a>![Method: ](https://apidocs.io/img/method.png ".FilesController.getOneFile") getOneFile

> Returns data about a specific file.


```javascript
function getOneFile(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the file |



#### Example Usage

```javascript

    var id = 58;

    controller.getOneFile(id, function(error, response, context) {

    
    });
```



### <a name="update_file_details"></a>![Method: ](https://apidocs.io/img/method.png ".FilesController.updateFileDetails") updateFileDetails

> Updates the properties of a file.


```javascript
function updateFileDetails(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the file |
| name |  ``` Optional ```  | Visible name of the file |
| description |  ``` Optional ```  | Description of the file |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['name'] = 'name';
        input['description'] = 'description';

    controller.updateFileDetails(input, function(error, response, context) {

    
    });
```



### <a name="get_download_one_file"></a>![Method: ](https://apidocs.io/img/method.png ".FilesController.getDownloadOneFile") getDownloadOneFile

> Initializes a file download.


```javascript
function getDownloadOneFile(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the file |



#### Example Usage

```javascript

    var id = 58;

    controller.getDownloadOneFile(id, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="filters_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FiltersController") FiltersController

### Get singleton instance

The singleton instance of the ``` FiltersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FiltersController;
```

### <a name="delete_multiple_filters_in_bulk"></a>![Method: ](https://apidocs.io/img/method.png ".FiltersController.deleteMultipleFiltersInBulk") deleteMultipleFiltersInBulk

> Marks multiple filters as deleted.


```javascript
function deleteMultipleFiltersInBulk(ids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ids |  ``` Required ```  | Comma-separated filter IDs to delete |



#### Example Usage

```javascript

    var ids = 'ids';

    controller.deleteMultipleFiltersInBulk(ids, function(error, response, context) {

    
    });
```



### <a name="get_all_filters"></a>![Method: ](https://apidocs.io/img/method.png ".FiltersController.getAllFilters") getAllFilters

> Returns data about all filters


```javascript
function getAllFilters(type, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| type |  ``` Optional ```  | Types of filters to fetch |



#### Example Usage

```javascript

    var type = Object.keys(FilterType)[0];

    controller.getAllFilters(type, function(error, response, context) {

    
    });
```



### <a name="add_a_new_filter"></a>![Method: ](https://apidocs.io/img/method.png ".FiltersController.addANewFilter") addANewFilter

> Adds a new filter, returns the ID upon success. Note that in the conditions json object only one first-level condition group is supported, and it must be glued with 'AND', and only two second level condition groups are supported of which one must be glued with 'AND' and the second with 'OR'. Other combinations do not work (yet) but the syntax supports introducing them in future. For more information on how to add a new filter, see <a href="https://pipedrive.readme.io/docs/adding-a-filter" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function addANewFilter(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Required ```  | Filter name |
| conditions |  ``` Required ```  | Filter conditions as a JSON object. It requires a minimum structure as follows: {"glue":"and","conditions":[{"glue":"and","conditions": [CONDITION_OBJECTS]},{"glue":"or","conditions":[CONDITION_OBJECTS]}]}. Replace CONDITION_OBJECTS with JSON objects of the following structure: {"object":"","field_id":"", "operator":"","value":"", "extra_value":""} or leave the array empty. Depending on the object type you should use another API endpoint to get field_id. There are five types of objects you can choose from: "person", "deal", "organization", "product", "activity" and you can use these types of operators depending on what type of a field you have: "IS NOT NULL", "IS NULL", "<=", ">=", "<", ">", "!=", "=", "LIKE '%$%'", "NOT LIKE '%$%'", "LIKE '$%'", "NOT LIKE '$%'", "LIKE '%$'", "NOT LIKE '%$'". To get a better understanding of how filters work try creating them directly from the Pipedrive application. |
| type |  ``` Required ```  | Type of filter to create. |



#### Example Usage

```javascript

    var input = {};
        input['name'] = 'name';
        input['conditions'] = 'conditions';
        input['type'] = Object.keys(FilterType)[0];

    controller.addANewFilter(input, function(error, response, context) {

    
    });
```



### <a name="get_all_filter_helpers"></a>![Method: ](https://apidocs.io/img/method.png ".FiltersController.getAllFilterHelpers") getAllFilterHelpers

> Returns all supported filter helpers. It helps to know what conditions and helpers are available when you want to <a href="/docs/api/v1/#!/Filters/post_filters">add</a> or <a href="/docs/api/v1/#!/Filters/put_filters_id">update</a> filters. For more information on how filter’s helpers can be used, see <a href="https://pipedrive.readme.io/docs/adding-a-filter" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function getAllFilterHelpers(callback)
```

#### Example Usage

```javascript


    controller.getAllFilterHelpers(function(error, response, context) {

    
    });
```



### <a name="delete_a_filter"></a>![Method: ](https://apidocs.io/img/method.png ".FiltersController.deleteAFilter") deleteAFilter

> Marks a filter as deleted.


```javascript
function deleteAFilter(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the filter |



#### Example Usage

```javascript

    var id = 58;

    controller.deleteAFilter(id, function(error, response, context) {

    
    });
```



### <a name="get_one_filter"></a>![Method: ](https://apidocs.io/img/method.png ".FiltersController.getOneFilter") getOneFilter

> Returns data about a specific filter. Note that this also returns the condition lines of the filter.


```javascript
function getOneFilter(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the filter |



#### Example Usage

```javascript

    var id = 58;

    controller.getOneFilter(id, function(error, response, context) {

    
    });
```



### <a name="update_filter"></a>![Method: ](https://apidocs.io/img/method.png ".FiltersController.updateFilter") updateFilter

> Updates existing filter.


```javascript
function updateFilter(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the filter |
| conditions |  ``` Required ```  | Filter conditions as a JSON object. It requires a minimum structure as follows: {"glue":"and","conditions":[{"glue":"and","conditions": [CONDITION_OBJECTS]},{"glue":"or","conditions":[CONDITION_OBJECTS]}]}. Replace CONDITION_OBJECTS with JSON objects of the following structure: {"object":"","field_id":"", "operator":"","value":"", "extra_value":""} or leave the array empty. Depending on the object type you should use another API endpoint to get field_id. There are five types of objects you can choose from: "person", "deal", "organization", "product", "activity" and you can use these types of operators depending on what type of a field you have: "IS NOT NULL", "IS NULL", "<=", ">=", "<", ">", "!=", "=", "LIKE '%$%'", "NOT LIKE '%$%'", "LIKE '$%'", "NOT LIKE '$%'", "LIKE '%$'", "NOT LIKE '%$'". To get a better understanding of how filters work try creating them directly from the Pipedrive application. |
| name |  ``` Optional ```  | Filter name |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['conditions'] = 'conditions';
        input['name'] = 'name';

    controller.updateFilter(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="global_messages_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GlobalMessagesController") GlobalMessagesController

### Get singleton instance

The singleton instance of the ``` GlobalMessagesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.GlobalMessagesController;
```

### <a name="get_global_messages"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalMessagesController.getGlobalMessages") getGlobalMessages

> Returns data about global messages to display for the authorized user.


```javascript
function getGlobalMessages(limit, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| limit |  ``` Optional ```  ``` DefaultValue ```  | Number of messages to get from 1 to 100. The message number 1 is returned by default. |



#### Example Usage

```javascript

    var limit = 58;

    controller.getGlobalMessages(limit, function(error, response, context) {

    
    });
```



### <a name="delete_dismiss_a_global_message"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalMessagesController.deleteDismissAGlobalMessage") deleteDismissAGlobalMessage

> Removes global message from being shown, if message is dismissible


```javascript
function deleteDismissAGlobalMessage(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of global message to be dismissed. |



#### Example Usage

```javascript

    var id = 58;

    controller.deleteDismissAGlobalMessage(id, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="goals_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GoalsController") GoalsController

### Get singleton instance

The singleton instance of the ``` GoalsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.GoalsController;
```

### <a name="add_a_new_goal"></a>![Method: ](https://apidocs.io/img/method.png ".GoalsController.addANewGoal") addANewGoal

> Adds a new goal.


```javascript
function addANewGoal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.addANewGoal(input, function(error, response, context) {

    
    });
```



### <a name="find_goals"></a>![Method: ](https://apidocs.io/img/method.png ".GoalsController.findGoals") findGoals

> Returns data about goals based on criteria. For searching, append `{searchField}={searchValue}` to the URL, where `searchField` can be any one of the lowest-level fields in dot-notation (e.g. `type.params.pipeline_id`; `title`). `searchValue` should be the value you are looking for on that field. Additionally, `is_active=<true|false>` can be provided to search for only active/inactive goals. When providing `period.start`, `period.end` must also be provided and vice versa.


```javascript
function findGoals(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| typeName |  ``` Optional ```  | Type of the goal. If provided, everyone's goals will be returned. |
| title |  ``` Optional ```  | Title of the goal. |
| isActive |  ``` Optional ```  ``` DefaultValue ```  | Whether goal is active or not. |
| assigneeId |  ``` Optional ```  | ID of the user who's goal to fetch. When omitted, only your goals will be returned. |
| assigneeType |  ``` Optional ```  | Type of the goal's assignee. If provided, everyone's goals will be returned. |
| expectedOutcomeTarget |  ``` Optional ```  | Numeric value of the outcome. If provided, everyone's goals will be returned. |
| expectedOutcomeTrackingMetric |  ``` Optional ```  | Tracking metric of the expected outcome of the goal. If provided, everyone's goals will be returned. |
| expectedOutcomeCurrencyId |  ``` Optional ```  | Numeric ID of the goal's currency. Only applicable to goals with `expected_outcome.tracking_metric` with value `sum`. If provided, everyone's goals will be returned. |
| typeParamsPipelineId |  ``` Optional ```  | ID of the pipeline or `null` for all pipelines. If provided, everyone's goals will be returned. |
| typeParamsStageId |  ``` Optional ```  | ID of the stage. Applicable to only `deals_progressed` type of goals. If provided, everyone's goals will be returned. |
| typeParamsActivityTypeId |  ``` Optional ```  | ID of the activity type. Applicable to only `activities_completed` or `activities_added` types of goals. If provided, everyone's goals will be returned. |
| periodStart |  ``` Optional ```  | Start date of the period for which to find goals. Date in format of YYYY-MM-DD. When `period.start` is provided, `period.end` must be provided too. |
| periodEnd |  ``` Optional ```  | End date of the period for which to find goals. Date in format of YYYY-MM-DD. |



#### Example Usage

```javascript

    var input = {};
        input['typeName'] = Object.keys(type.name)[0];
        input['title'] = 'title';
        input['isActive'] = True;
        input['assigneeId'] = 58;
        input['assigneeType'] = Object.keys(assignee.type)[0];
        input['expectedOutcomeTarget'] = 58.5644835925496;
        input['expectedOutcomeTrackingMetric'] = Object.keys(expected_outcome.tracking_metric)[0];
        input['expectedOutcomeCurrencyId'] = 58;
        input['typeParamsPipelineId'] = 58;
        input['typeParamsStageId'] = 58;
        input['typeParamsActivityTypeId'] = 58;
        input['periodStart'] = '2019-11-22';
        input['periodEnd'] = '2019-11-22';

    controller.findGoals(input, function(error, response, context) {

    
    });
```



### <a name="update_existing_goal"></a>![Method: ](https://apidocs.io/img/method.png ".GoalsController.updateExistingGoal") updateExistingGoal

> Updates existing goal.


```javascript
function updateExistingGoal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the goal to be updated. |
| title |  ``` Optional ```  | Title of the goal. |
| assignee |  ``` Optional ```  | Who is this goal assigned to. It requires the following JSON structure: { "id": "1", "type": "person" }. `type` can be either `person`, `company` or `team`. ID of the assignee person, company or team. |
| type |  ``` Optional ```  | Type of the goal. It requires the following JSON structure: { "name": "deals_started", "params": { "pipeline_id": 1 } }. Type can be one of: `deals_won`,`deals_progressed`,`activities_completed`,`activities_added` or `deals_started`. `params` can include `pipeline_id`, `stage_id` or `activity_type_id`. `stage_id` is related to only `deals_progressed` type of goals and `activity_type_id` to `activities_completed` or `activities_added` types of goals. To track goal in all pipelines set `pipeline_id` as `null`. |
| expectedOutcome |  ``` Optional ```  | Expected outcome of the goal. Expected outcome can be tracked either by `quantity` or by `sum`. It requires the following JSON structure: { "target": "50", "tracking_metric": "quantity" } or { "target": "50", "tracking_metric": "sum", "currency_id": 1 }. `currency_id` should only be added to `sum` type of goals. |
| duration |  ``` Optional ```  | Date when the goal starts and ends. It requires the following JSON structure: { "start": "2019-01-01", "end": "2022-12-31" }. Date in format of YYYY-MM-DD. |
| interval |  ``` Optional ```  | Date when the goal starts and ends. It requires the following JSON structure: { "start": "2019-01-01", "end": "2022-12-31" }. Date in format of YYYY-MM-DD. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 'id';
        input['title'] = 'title';
        input['assignee'] = {
        id : 21
    };
        input['type'] = {
        id : 21
    };
        input['expectedOutcome'] = {
        id : 21
    };
        input['duration'] = {
        id : 21
    };
        input['interval'] = Object.keys(Interval)[0];

    controller.updateExistingGoal(input, function(error, response, context) {

    
    });
```



### <a name="delete_existing_goal"></a>![Method: ](https://apidocs.io/img/method.png ".GoalsController.deleteExistingGoal") deleteExistingGoal

> Marks goal as deleted.


```javascript
function deleteExistingGoal(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the goal to be deleted. |



#### Example Usage

```javascript

    var id = 'id';

    controller.deleteExistingGoal(id, function(error, response, context) {

    
    });
```



### <a name="get_result_of_a_goal"></a>![Method: ](https://apidocs.io/img/method.png ".GoalsController.getResultOfAGoal") getResultOfAGoal

> Gets progress of a goal for specified period.


```javascript
function getResultOfAGoal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the goal that the results are looked for. |
| periodStart |  ``` Required ```  | Start date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD. |
| periodEnd |  ``` Required ```  | End date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 'id';
        input['periodStart'] = '2019-11-22';
        input['periodEnd'] = '2019-11-22';

    controller.getResultOfAGoal(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="items_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ItemsController") ItemsController

### Get singleton instance

The singleton instance of the ``` ItemsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ItemsController;
```

### <a name="search_item"></a>![Method: ](https://apidocs.io/img/method.png ".ItemsController.searchItem") searchItem

> Performs a search from your choice of item types and fields.


```javascript
function searchItem(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| term |  ``` Required ```  | The search term to look for. Minimum 2 characters (or 1 if using exactMatch). |
| itemTypes |  ``` Optional ```  | A comma-separated string array. The type of items to perform the search from. Defaults to all. |
| fields |  ``` Optional ```  | A comma-separated string array. The type of items to perform the search from. Defaults to all. |
| searchForRelatedItems |  ``` Optional ```  | When enabled, the response will include up to 100 newest related Leads and 100 newest related Deals for each found Person and Organization and up to 100 newest related Persons for each found Organization. |
| exactMatch |  ``` Optional ```  | When enabled, only full exact matches against the given term are returned. It is not case sensitive. |
| includeFields |  ``` Optional ```  | A comma-separated string array. Supports including optional fields in the results which are not provided by default. |
| start |  ``` Optional ```  | Pagination start. Note that the pagination is based on main results and does not include related items when using searchForRelatedItems parameter. |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['term'] = 'term';
        input['itemTypes'] = ['deal', 'person', 'organization'];
        input['fields'] = ['address', 'code', 'email'];
        input['searchForRelatedItems'] = true;
        input['exactMatch'] = true;
        input['includeFields'] = ['deal.cc_email', 'person.picture', 'product.price'];
        input['start'] = 0;
        input['limit'] = 58;
    
    controller.searchItem(input, function(error, response, context) {

    
    });
```


searchItemByField
### <a name="search_item_by_field"></a>![Method: ](https://apidocs.io/img/method.png ".ItemsController.searchItemByField") searchItemByField

> Performs a search from the values of a specific field. Results can either be the distinct values of the field (useful for searching autocomplete field values), or the IDs of actual items (Deals, Persons, Organizations or Products).
  


```javascript
function searchItemByField(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| term |  ``` Required ```  | The search term to look for. Minimum 2 characters (or 1 if using exactMatch). |
| fieldType |  ``` Required ```  | The type of the field to perform the search from. |
| exactMatch |  ``` Optional ```  | When enabled, only full exact matches against the given term are returned. It is not case sensitive. |
| fieldKey |  ``` Required ```  | The key of the field to search from. The field key can be obtained by fetching the list of the fields using any of the fields' API GET methods (dealFields, personFields, etc.). |
| returnItemIds |  ``` Optional ```  | Whether to return the IDs of the matching items or not. When not set or set to 0 or false, only distinct values of the searched field are returned. When set to 1 or true, the ID of each found item is returned. |
| start |  ``` Optional ```  | Pagination start. Note that the pagination is based on main results and does not include related items when using searchForRelatedItems parameter. |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['term'] = 'term';
        input['fieldType'] = 'dealField';
        input['exactMatch'] = false;
        input['fieldKey'] = 'title';
        input['returnItemIds'] = true;
        input['start'] = 0;
        input['limit'] = 58;
    
    controller.searchItemByField(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="mail_messages_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MailMessagesController") MailMessagesController

### Get singleton instance

The singleton instance of the ``` MailMessagesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MailMessagesController;
```

### <a name="get_one_mail_message"></a>![Method: ](https://apidocs.io/img/method.png ".MailMessagesController.getOneMailMessage") getOneMailMessage

> Returns data about specific mail message.


```javascript
function getOneMailMessage(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the mail message to fetch. |
| includeBody |  ``` Optional ```  | Whether to include full message body or not. 0 = Don't include, 1 = Include |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['includeBody'] = Object.keys(NumberBoolean)[0];

    controller.getOneMailMessage(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="mail_threads_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MailThreadsController") MailThreadsController

### Get singleton instance

The singleton instance of the ``` MailThreadsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MailThreadsController;
```

### <a name="get_mail_threads"></a>![Method: ](https://apidocs.io/img/method.png ".MailThreadsController.getMailThreads") getMailThreads

> Returns mail threads in specified folder ordered by most recent message within.


```javascript
function getMailThreads(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| folder |  ``` Required ```  ``` DefaultValue ```  | Type of folder to fetch. |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['folder'] = new FolderEnum(inbox);
        input['start'] = 0;
        input['limit'] = 58;

    controller.getMailThreads(input, function(error, response, context) {

    
    });
```



### <a name="delete_mail_thread"></a>![Method: ](https://apidocs.io/img/method.png ".MailThreadsController.deleteMailThread") deleteMailThread

> Marks mail thread as deleted.


```javascript
function deleteMailThread(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the mail thread |



#### Example Usage

```javascript

    var id = 58;

    controller.deleteMailThread(id, function(error, response, context) {

    
    });
```



### <a name="get_one_mail_thread"></a>![Method: ](https://apidocs.io/img/method.png ".MailThreadsController.getOneMailThread") getOneMailThread

> Returns specific mail thread.


```javascript
function getOneMailThread(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the mail thread |



#### Example Usage

```javascript

    var id = 58;

    controller.getOneMailThread(id, function(error, response, context) {

    
    });
```



### <a name="update_mail_thread_details"></a>![Method: ](https://apidocs.io/img/method.png ".MailThreadsController.updateMailThreadDetails") updateMailThreadDetails

> Updates the properties of a mail thread.


```javascript
function updateMailThreadDetails(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the mail thread |
| dealId |  ``` Optional ```  | ID of the deal this thread is associated with |
| sharedFlag |  ``` Optional ```  | TODO: Add a parameter description |
| readFlag |  ``` Optional ```  | TODO: Add a parameter description |
| archivedFlag |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['dealId'] = 58;
        input['sharedFlag'] = Object.keys(NumberBoolean)[0];
        input['readFlag'] = Object.keys(NumberBoolean)[0];
        input['archivedFlag'] = Object.keys(NumberBoolean)[0];

    controller.updateMailThreadDetails(input, function(error, response, context) {

    
    });
```



### <a name="get_all_mail_messages_of_mail_thread"></a>![Method: ](https://apidocs.io/img/method.png ".MailThreadsController.getAllMailMessagesOfMailThread") getAllMailMessagesOfMailThread

> Get mail messages inside specified mail thread.


```javascript
function getAllMailMessagesOfMailThread(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the mail thread |



#### Example Usage

```javascript

    var id = 58;

    controller.getAllMailMessagesOfMailThread(id, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="note_fields_controller"></a>![Class: ](https://apidocs.io/img/class.png ".NoteFieldsController") NoteFieldsController

### Get singleton instance

The singleton instance of the ``` NoteFieldsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.NoteFieldsController;
```

### <a name="get_all_fields_for_a_note"></a>![Method: ](https://apidocs.io/img/method.png ".NoteFieldsController.getAllFieldsForANote") getAllFieldsForANote

> Return list of all fields for note


```javascript
function getAllFieldsForANote(callback)
```

#### Example Usage

```javascript


    controller.getAllFieldsForANote(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="notes_controller"></a>![Class: ](https://apidocs.io/img/class.png ".NotesController") NotesController

### Get singleton instance

The singleton instance of the ``` NotesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.NotesController;
```

### <a name="get_all_notes"></a>![Method: ](https://apidocs.io/img/method.png ".NotesController.getAllNotes") getAllNotes

> Returns all notes.


```javascript
function getAllNotes(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Optional ```  | ID of the user whose notes to fetch. If omitted, notes by all users will be returned. |
| dealId |  ``` Optional ```  | ID of the deal which notes to fetch. If omitted, notes about all deals with be returned. |
| personId |  ``` Optional ```  | ID of the person whose notes to fetch. If omitted, notes about all persons with be returned. |
| orgId |  ``` Optional ```  | ID of the organization which notes to fetch. If omitted, notes about all organizations with be returned. |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| sort |  ``` Optional ```  | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, content, add_time, update_time. |
| startDate |  ``` Optional ```  | Date in format of YYYY-MM-DD from which notes to fetch from. |
| endDate |  ``` Optional ```  | Date in format of YYYY-MM-DD until which notes to fetch to. |
| pinnedToDealFlag |  ``` Optional ```  | If set, then results are filtered by note to deal pinning state. |
| pinnedToOrganizationFlag |  ``` Optional ```  | If set, then results are filtered by note to organization pinning state. |
| pinnedToPersonFlag |  ``` Optional ```  | If set, then results are filtered by note to person pinning state. |



#### Example Usage

```javascript

    var input = {};
        input['userId'] = 58;
        input['dealId'] = 58;
        input['personId'] = 58;
        input['orgId'] = 58;
        input['start'] = 0;
        input['limit'] = 58;
        input['sort'] = 'sort';
        input['startDate'] = '2019-11-22';
        input['endDate'] = '2019-11-22';
        input['pinnedToDealFlag'] = Object.keys(NumberBoolean)[0];
        input['pinnedToOrganizationFlag'] = Object.keys(NumberBoolean)[0];
        input['pinnedToPersonFlag'] = Object.keys(NumberBoolean)[0];

    controller.getAllNotes(input, function(error, response, context) {

    
    });
```



### <a name="add_a_note"></a>![Method: ](https://apidocs.io/img/method.png ".NotesController.addANote") addANote

> Adds a new note.


```javascript
function addANote(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| content |  ``` Required ```  | Content of the note in HTML format. Subject to sanitization on the back-end. |
| userId |  ``` Optional ```  | ID of the user who will be marked as the author of this note. Only an admin can change the author. |
| dealId |  ``` Optional ```  | ID of the deal the note will be attached to. |
| personId |  ``` Optional ```  | ID of the person this note will be attached to. |
| orgId |  ``` Optional ```  | ID of the organization this note will be attached to. |
| addTime |  ``` Optional ```  | Optional creation date & time of the Note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS |
| pinnedToDealFlag |  ``` Optional ```  | If set, then results are filtered by note to deal pinning state (deal_id is also required). |
| pinnedToOrganizationFlag |  ``` Optional ```  | If set, then results are filtered by note to organization pinning state (org_id is also required). |
| pinnedToPersonFlag |  ``` Optional ```  | If set, then results are filtered by note to person pinning state (person_id is also required). |



#### Example Usage

```javascript

    var input = {};
        input['content'] = 'content';
        input['userId'] = 58;
        input['dealId'] = 58;
        input['personId'] = 58;
        input['orgId'] = 58;
        input['addTime'] = add_time;
        input['pinnedToDealFlag'] = Object.keys(NumberBoolean)[0];
        input['pinnedToOrganizationFlag'] = Object.keys(NumberBoolean)[0];
        input['pinnedToPersonFlag'] = Object.keys(NumberBoolean)[0];

    controller.addANote(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_note"></a>![Method: ](https://apidocs.io/img/method.png ".NotesController.deleteANote") deleteANote

> Deletes a specific note.


```javascript
function deleteANote(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the note |



#### Example Usage

```javascript

    var id = 58;

    controller.deleteANote(id, function(error, response, context) {

    
    });
```



### <a name="get_one_note"></a>![Method: ](https://apidocs.io/img/method.png ".NotesController.getOneNote") getOneNote

> Returns details about a specific note.


```javascript
function getOneNote(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the note |



#### Example Usage

```javascript

    var id = 58;

    controller.getOneNote(id, function(error, response, context) {

    
    });
```



### <a name="update_a_note"></a>![Method: ](https://apidocs.io/img/method.png ".NotesController.updateANote") updateANote

> Updates a note.


```javascript
function updateANote(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the note |
| content |  ``` Required ```  | Content of the note in HTML format. Subject to sanitization on the back-end. |
| userId |  ``` Optional ```  | ID of the user who will be marked as the author of this note. Only an admin can change the author. |
| dealId |  ``` Optional ```  | ID of the deal the note will be attached to. |
| personId |  ``` Optional ```  | ID of the person this note will be attached to. |
| orgId |  ``` Optional ```  | ID of the organization this note will be attached to. |
| addTime |  ``` Optional ```  | Optional creation date & time of the Note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS |
| pinnedToDealFlag |  ``` Optional ```  | If set, then results are filtered by note to deal pinning state (deal_id is also required). |
| pinnedToOrganizationFlag |  ``` Optional ```  | If set, then results are filtered by note to organization pinning state (org_id is also required). |
| pinnedToPersonFlag |  ``` Optional ```  | If set, then results are filtered by note to person pinning state (person_id is also required). |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['content'] = 'content';
        input['userId'] = 58;
        input['dealId'] = 58;
        input['personId'] = 58;
        input['orgId'] = 58;
        input['addTime'] = add_time;
        input['pinnedToDealFlag'] = Object.keys(NumberBoolean)[0];
        input['pinnedToOrganizationFlag'] = Object.keys(NumberBoolean)[0];
        input['pinnedToPersonFlag'] = Object.keys(NumberBoolean)[0];

    controller.updateANote(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="organization_fields_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OrganizationFieldsController") OrganizationFieldsController

### Get singleton instance

The singleton instance of the ``` OrganizationFieldsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OrganizationFieldsController;
```

### <a name="delete_multiple_organization_fields_in_bulk"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationFieldsController.deleteMultipleOrganizationFieldsInBulk") deleteMultipleOrganizationFieldsInBulk

> Marks multiple fields as deleted.


```javascript
function deleteMultipleOrganizationFieldsInBulk(ids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ids |  ``` Required ```  | Comma-separated field IDs to delete |



#### Example Usage

```javascript

    var ids = 'ids';

    controller.deleteMultipleOrganizationFieldsInBulk(ids, function(error, response, context) {

    
    });
```



### <a name="get_all_organization_fields"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationFieldsController.getAllOrganizationFields") getAllOrganizationFields

> Returns data about all organization fields


```javascript
function getAllOrganizationFields(callback)
```

#### Example Usage

```javascript


    controller.getAllOrganizationFields(function(error, response, context) {

    
    });
```



### <a name="add_a_new_organization_field"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationFieldsController.addANewOrganizationField") addANewOrganizationField

> Adds a new organization field. For more information on adding a new custom field, see <a href="https://pipedrive.readme.io/docs/adding-a-new-custom-field" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function addANewOrganizationField(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.addANewOrganizationField(input, function(error, response, context) {

    
    });
```



### <a name="delete_an_organization_field"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationFieldsController.deleteAnOrganizationField") deleteAnOrganizationField

> Marks a field as deleted. For more information on how to delete a custom field, see <a href="https://pipedrive.readme.io/docs/deleting-a-custom-field" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function deleteAnOrganizationField(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the field |



#### Example Usage

```javascript

    var id = 58;

    controller.deleteAnOrganizationField(id, function(error, response, context) {

    
    });
```



### <a name="get_one_organization_field"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationFieldsController.getOneOrganizationField") getOneOrganizationField

> Returns data about a specific organization field.


```javascript
function getOneOrganizationField(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the field |



#### Example Usage

```javascript

    var id = 58;

    controller.getOneOrganizationField(id, function(error, response, context) {

    
    });
```



### <a name="update_an_organization_field"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationFieldsController.updateAnOrganizationField") updateAnOrganizationField

> Updates an organization field. See an example of updating custom fields’ values in <a href=" https://pipedrive.readme.io/docs/updating-custom-field-value " target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function updateAnOrganizationField(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the field |
| name |  ``` Required ```  | Name of the field |
| options |  ``` Optional ```  | When field_type is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: [{"id":123,"label":"Existing Item"},{"label":"New Item"}] |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['name'] = 'name';
        input['options'] = 'options';

    controller.updateAnOrganizationField(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="organization_relationships_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OrganizationRelationshipsController") OrganizationRelationshipsController

### Get singleton instance

The singleton instance of the ``` OrganizationRelationshipsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OrganizationRelationshipsController;
```

### <a name="get_all_relationships_for_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationRelationshipsController.getAllRelationshipsForOrganization") getAllRelationshipsForOrganization

> Gets all of the relationships for a supplied organization id.


```javascript
function getAllRelationshipsForOrganization(orgId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orgId |  ``` Required ```  | ID of the organization to get relationships for |



#### Example Usage

```javascript

    var orgId = 58;

    controller.getAllRelationshipsForOrganization(orgId, function(error, response, context) {

    
    });
```



### <a name="create_an_organization_relationship"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationRelationshipsController.createAnOrganizationRelationship") createAnOrganizationRelationship

> Creates and returns an organization relationship.


```javascript
function createAnOrganizationRelationship(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.createAnOrganizationRelationship(input, function(error, response, context) {

    
    });
```



### <a name="delete_an_organization_relationship"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationRelationshipsController.deleteAnOrganizationRelationship") deleteAnOrganizationRelationship

> Deletes an organization relationship and returns the deleted id.


```javascript
function deleteAnOrganizationRelationship(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization relationship |



#### Example Usage

```javascript

    var id = 58;

    controller.deleteAnOrganizationRelationship(id, function(error, response, context) {

    
    });
```



### <a name="get_one_organization_relationship"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationRelationshipsController.getOneOrganizationRelationship") getOneOrganizationRelationship

> Finds and returns an organization relationship from its ID.


```javascript
function getOneOrganizationRelationship(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization relationship |
| orgId |  ``` Optional ```  | ID of the base organization for the returned calculated values |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['orgId'] = 58;

    controller.getOneOrganizationRelationship(input, function(error, response, context) {

    
    });
```



### <a name="update_an_organization_relationship"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationRelationshipsController.updateAnOrganizationRelationship") updateAnOrganizationRelationship

> Updates and returns an organization relationship.


```javascript
function updateAnOrganizationRelationship(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization relationship |
| orgId |  ``` Optional ```  | ID of the base organization for the returned calculated values |
| type |  ``` Optional ```  | The type of organization relationship. |
| relOwnerOrgId |  ``` Optional ```  | The owner of this relationship. If type is 'parent', then the owner is the parent and the linked organization is the daughter. |
| relLinkedOrgId |  ``` Optional ```  | The linked organization in this relationship. If type is 'parent', then the linked organization is the daughter. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['orgId'] = 58;
        input['type'] = Object.keys(Type)[0];
        input['relOwnerOrgId'] = 58;
        input['relLinkedOrgId'] = 58;

    controller.updateAnOrganizationRelationship(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="organizations_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OrganizationsController") OrganizationsController

### Get singleton instance

The singleton instance of the ``` OrganizationsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OrganizationsController;
```

### <a name="delete_multiple_organizations_in_bulk"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.deleteMultipleOrganizationsInBulk") deleteMultipleOrganizationsInBulk

> Marks multiple organizations as deleted.


```javascript
function deleteMultipleOrganizationsInBulk(ids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ids |  ``` Required ```  | Comma-separated IDs that will be deleted |



#### Example Usage

```javascript

    var ids = 'ids';

    controller.deleteMultipleOrganizationsInBulk(ids, function(error, response, context) {

    
    });
```



### <a name="get_all_organizations"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getAllOrganizations") getAllOrganizations

> Returns all organizations


```javascript
function getAllOrganizations(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Optional ```  | If supplied, only organizations owned by the given user will be returned. |
| filterId |  ``` Optional ```  | ID of the filter to use |
| firstChar |  ``` Optional ```  | If supplied, only organizations whose name starts with the specified letter will be returned (case insensitive). |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| sort |  ``` Optional ```  | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). |



#### Example Usage

```javascript

    var input = {};
        input['userId'] = 58;
        input['filterId'] = 58;
        input['firstChar'] = first_char;
        input['start'] = 0;
        input['limit'] = 58;
        input['sort'] = 'sort';

    controller.getAllOrganizations(input, function(error, response, context) {

    
    });
```



### <a name="add_an_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.addAnOrganization") addAnOrganization

> Adds a new organization. Note that you can supply additional custom fields along with the request that are not described here. These custom fields are different for each Pipedrive account and can be recognized by long hashes as keys. To determine which custom fields exists, fetch the organizationFields and look for 'key' values. For more information on how to add an organization, see <a href="https://pipedrive.readme.io/docs/adding-an-organization" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function addAnOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.addAnOrganization(input, function(error, response, context) {

    
    });
```



### <a name="search_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.searchOrganization") searchOrganization

> Searches all Organizations by name, address, notes and/or custom fields. This endpoint is a wrapper of /v1/itemSearch with a narrower OAuth scope.


```javascript
function searchOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| term |  ``` Required ```  | Search term to look for |
| fields |  ``` Optional ```  | A comma-separated string array. The fields to perform the search from. Defaults to all of them. |
| exactMatch |  ``` Optional ```  | When enabled, only full exact matches against the given term are returned. It is not case sensitive. |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['term'] = 'term';
        input['fields'] = ['address', 'custom_fields', 'notes', 'name'];
        input['exactMatch'] = true;
        input['start'] = 58;
        input['limit'] = 58;

    controller.searchOrganization(input, function(error, response, context) {

    
    });
```


### <a name="delete_an_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.deleteAnOrganization") deleteAnOrganization

> Marks an organization as deleted.


```javascript
function deleteAnOrganization(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |



#### Example Usage

```javascript

    var id = 58;

    controller.deleteAnOrganization(id, function(error, response, context) {

    
    });
```



### <a name="get_details_of_an_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getDetailsOfAnOrganization") getDetailsOfAnOrganization

> Returns details of an organization. Note that this also returns some additional fields which are not present when asking for all organizations. Also note that custom fields appear as long hashes in the resulting data. These hashes can be mapped against the 'key' value of organizationFields.


```javascript
function getDetailsOfAnOrganization(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |



#### Example Usage

```javascript

    var id = 58;

    controller.getDetailsOfAnOrganization(id, function(error, response, context) {

    
    });
```



### <a name="update_an_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateAnOrganization") updateAnOrganization

> Updates the properties of an organization.


```javascript
function updateAnOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |
| name |  ``` Optional ```  | Organization name |
| ownerId |  ``` Optional ```  | ID of the user who will be marked as the owner of this organization. When omitted, the authorized user ID will be used. |
| visibleTo |  ``` Optional ```  | Visibility of the organization. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.<dl class=\"fields-list\"><dt>1</dt><dd>Owner &amp; followers (private)</dd><dt>3</dt><dd>Entire company (shared)</dd></dl> |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['name'] = 'name';
        input['ownerId'] = 58;
        input['visibleTo'] = Object.keys(VisibleTo)[0];

    controller.updateAnOrganization(input, function(error, response, context) {

    
    });
```



### <a name="list_activities_associated_with_an_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.listActivitiesAssociatedWithAnOrganization") listActivitiesAssociatedWithAnOrganization

> Lists activities associated with an organization.


```javascript
function listActivitiesAssociatedWithAnOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| done |  ``` Optional ```  | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities. |
| exclude |  ``` Optional ```  | A comma-separated string of activity IDs to exclude from result |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['start'] = 58;
        input['limit'] = 58;
        input['done'] = Object.keys(NumberBoolean)[0];
        input['exclude'] = 'exclude';

    controller.listActivitiesAssociatedWithAnOrganization(input, function(error, response, context) {

    
    });
```



### <a name="list_deals_associated_with_an_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.listDealsAssociatedWithAnOrganization") listDealsAssociatedWithAnOrganization

> Lists deals associated with an organization.


```javascript
function listDealsAssociatedWithAnOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| status |  ``` Optional ```  ``` DefaultValue ```  | Only fetch deals with specific status. If omitted, all not deleted deals are fetched. |
| sort |  ``` Optional ```  | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). |
| onlyPrimaryAssociation |  ``` Optional ```  | If set, only deals that are directly associated to the organization are fetched. If not set (default), all deals are fetched that are either directly or indirectly related to the organization. Indirect relations include relations through custom, organization-type fields and through persons of the given organization. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 58;
        input['start'] = 58;
        input['limit'] = 58;
        input['status'] = Object.keys(status2)[0];
        input['sort'] = 'sort';
        input['onlyPrimaryAssociation'] = Object.keys(NumberBoolean)[0];

    controller.listDealsAssociatedWithAnOrganization(input, function(error, response, context) {

    
    });
```



### <a name="list_files_attached_to_an_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.listFilesAttachedToAnOrganization") listFilesAttachedToAnOrganization

> Lists files associated with an organization.


```javascript
function listFilesAttachedToAnOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| includeDeletedFiles |  ``` Optional ```  | When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work. |
| sort |  ``` Optional ```  | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;
        input['includeDeletedFiles'] = Object.keys(NumberBoolean)[0];
        input['sort'] = 'sort';

    controller.listFilesAttachedToAnOrganization(input, function(error, response, context) {

    
    });
```



### <a name="list_updates_about_an_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.listUpdatesAboutAnOrganization") listUpdatesAboutAnOrganization

> Lists updates about an organization.


```javascript
function listUpdatesAboutAnOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;

    controller.listUpdatesAboutAnOrganization(input, function(error, response, context) {

    
    });
```



### <a name="list_followers_of_an_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.listFollowersOfAnOrganization") listFollowersOfAnOrganization

> Lists the followers of an organization.


```javascript
function listFollowersOfAnOrganization(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |



#### Example Usage

```javascript

    var id = 16;

    controller.listFollowersOfAnOrganization(id, function(error, response, context) {

    
    });
```



### <a name="add_a_follower_to_an_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.addAFollowerToAnOrganization") addAFollowerToAnOrganization

> Adds a follower to an organization.


```javascript
function addAFollowerToAnOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |
| userId |  ``` Required ```  | ID of the user |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['userId'] = 16;

    controller.addAFollowerToAnOrganization(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_follower_from_an_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.deleteAFollowerFromAnOrganization") deleteAFollowerFromAnOrganization

> Deletes a follower from an organization. You can retrieve the follower_id from the <a href="https://developers.pipedrive.com/docs/api/v1/#!/Organizations/get_organizations_id_followers">List followers of an organization</a> endpoint.


```javascript
function deleteAFollowerFromAnOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |
| followerId |  ``` Required ```  | ID of the follower |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['followerId'] = 16;

    controller.deleteAFollowerFromAnOrganization(input, function(error, response, context) {

    
    });
```



### <a name="list_mail_messages_associated_with_an_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.listMailMessagesAssociatedWithAnOrganization") listMailMessagesAssociatedWithAnOrganization

> Lists mail messages associated with an organization.


```javascript
function listMailMessagesAssociatedWithAnOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;

    controller.listMailMessagesAssociatedWithAnOrganization(input, function(error, response, context) {

    
    });
```



### <a name="update_merge_two_organizations"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateMergeTwoOrganizations") updateMergeTwoOrganizations

> Merges an organization with another organization. For more information on how to merge two organizations, see <a href="https://pipedrive.readme.io/docs/merging-two-organizations" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function updateMergeTwoOrganizations(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |
| mergeWithId |  ``` Required ```  | ID of the organization that the organization will be merged with |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['mergeWithId'] = 16;

    controller.updateMergeTwoOrganizations(input, function(error, response, context) {

    
    });
```



### <a name="list_permitted_users"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.listPermittedUsers") listPermittedUsers

> List users permitted to access an organization


```javascript
function listPermittedUsers(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |



#### Example Usage

```javascript

    var id = 16;

    controller.listPermittedUsers(id, function(error, response, context) {

    
    });
```



### <a name="list_persons_of_an_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.listPersonsOfAnOrganization") listPersonsOfAnOrganization

> Lists persons associated with an organization.


```javascript
function listPersonsOfAnOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the organization |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;

    controller.listPersonsOfAnOrganization(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="permission_sets_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PermissionSetsController") PermissionSetsController

### Get singleton instance

The singleton instance of the ``` PermissionSetsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PermissionSetsController;
```

### <a name="get_all_permission_sets"></a>![Method: ](https://apidocs.io/img/method.png ".PermissionSetsController.getAllPermissionSets") getAllPermissionSets

> Get all Permission Sets


```javascript
function getAllPermissionSets(callback)
```

#### Example Usage

```javascript


    controller.getAllPermissionSets(function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | If the User ID has no assignments, then it will return NotFound |




### <a name="get_one_permission_set"></a>![Method: ](https://apidocs.io/img/method.png ".PermissionSetsController.getOnePermissionSet") getOnePermissionSet

> Get one Permission Set


```javascript
function getOnePermissionSet(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the permission set |



#### Example Usage

```javascript

    var id = 16;

    controller.getOnePermissionSet(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | If the User ID has no assignments, then it will return NotFound |




### <a name="list_permission_set_assignments"></a>![Method: ](https://apidocs.io/img/method.png ".PermissionSetsController.listPermissionSetAssignments") listPermissionSetAssignments

> The list of assignments for a Permission Set


```javascript
function listPermissionSetAssignments(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the permission set |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;

    controller.listPermissionSetAssignments(input, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | If the User ID has no assignments, then it will return NotFound |




[Back to List of Controllers](#list_of_controllers)

## <a name="person_fields_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PersonFieldsController") PersonFieldsController

### Get singleton instance

The singleton instance of the ``` PersonFieldsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PersonFieldsController;
```

### <a name="delete_multiple_person_fields_in_bulk"></a>![Method: ](https://apidocs.io/img/method.png ".PersonFieldsController.deleteMultiplePersonFieldsInBulk") deleteMultiplePersonFieldsInBulk

> Marks multiple fields as deleted.


```javascript
function deleteMultiplePersonFieldsInBulk(ids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ids |  ``` Required ```  | Comma-separated field IDs to delete |



#### Example Usage

```javascript

    var ids = 'ids';

    controller.deleteMultiplePersonFieldsInBulk(ids, function(error, response, context) {

    
    });
```



### <a name="get_all_person_fields"></a>![Method: ](https://apidocs.io/img/method.png ".PersonFieldsController.getAllPersonFields") getAllPersonFields

> Returns data about all person fields


```javascript
function getAllPersonFields(callback)
```

#### Example Usage

```javascript


    controller.getAllPersonFields(function(error, response, context) {

    
    });
```



### <a name="add_a_new_person_field"></a>![Method: ](https://apidocs.io/img/method.png ".PersonFieldsController.addANewPersonField") addANewPersonField

> Adds a new person field. For more information on adding a new custom field, see <a href="https://pipedrive.readme.io/docs/adding-a-new-custom-field" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function addANewPersonField(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.addANewPersonField(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_person_field"></a>![Method: ](https://apidocs.io/img/method.png ".PersonFieldsController.deleteAPersonField") deleteAPersonField

> Marks a field as deleted. For more information on how to delete a custom field, see <a href="https://pipedrive.readme.io/docs/deleting-a-custom-field" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function deleteAPersonField(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the field |



#### Example Usage

```javascript

    var id = 16;

    controller.deleteAPersonField(id, function(error, response, context) {

    
    });
```



### <a name="get_one_person_field"></a>![Method: ](https://apidocs.io/img/method.png ".PersonFieldsController.getOnePersonField") getOnePersonField

> Returns data about a specific person field.


```javascript
function getOnePersonField(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the field |



#### Example Usage

```javascript

    var id = 16;

    controller.getOnePersonField(id, function(error, response, context) {

    
    });
```



### <a name="update_a_person_field"></a>![Method: ](https://apidocs.io/img/method.png ".PersonFieldsController.updateAPersonField") updateAPersonField

> Updates a person field. See an example of updating custom fields’ values in <a href="https://pipedrive.readme.io/docs/updating-custom-field-value" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function updateAPersonField(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the field |
| name |  ``` Required ```  | Name of the field |
| options |  ``` Optional ```  | When field_type is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: [{"id":123,"label":"Existing Item"},{"label":"New Item"}] |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['name'] = 'name';
        input['options'] = 'options';

    controller.updateAPersonField(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="persons_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PersonsController") PersonsController

### Get singleton instance

The singleton instance of the ``` PersonsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PersonsController;
```

### <a name="delete_multiple_persons_in_bulk"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.deleteMultiplePersonsInBulk") deleteMultiplePersonsInBulk

> Marks multiple persons as deleted.


```javascript
function deleteMultiplePersonsInBulk(ids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ids |  ``` Optional ```  | Comma-separated IDs that will be deleted |



#### Example Usage

```javascript

    var ids = 'ids';

    controller.deleteMultiplePersonsInBulk(ids, function(error, response, context) {

    
    });
```



### <a name="get_all_persons"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.getAllPersons") getAllPersons

> Returns all persons


```javascript
function getAllPersons(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Optional ```  | If supplied, only persons owned by the given user will be returned. |
| filterId |  ``` Optional ```  | ID of the filter to use. |
| firstChar |  ``` Optional ```  | If supplied, only persons whose name starts with the specified letter will be returned (case insensitive). |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| sort |  ``` Optional ```  | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). |



#### Example Usage

```javascript

    var input = {};
        input['userId'] = 16;
        input['filterId'] = 16;
        input['firstChar'] = first_char;
        input['start'] = 0;
        input['limit'] = 16;
        input['sort'] = 'sort';

    controller.getAllPersons(input, function(error, response, context) {

    
    });
```



### <a name="add_a_person"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.addAPerson") addAPerson

> Adds a new person. Note that you can supply additional custom fields along with the request that are not described here. These custom fields are different for each Pipedrive account and can be recognized by long hashes as keys. To determine which custom fields exists, fetch the personFields and look for 'key' values.


```javascript
function addAPerson(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.addAPerson(input, function(error, response, context) {

    
    });
```



### <a name="search_persons"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.searchPersons") searchPersons

> Searches all Persons by name, email, phone, notes and/or custom fields. This endpoint is a wrapper of /v1/itemSearch with a narrower OAuth scope. Found Persons can be filtered by Organization ID.


```javascript
function searchPersons(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| term |  ``` Required ```  | The search term to look for. Minimum 2 characters (or 1 if using exactMatch). |
| fields |  ``` Optional ```  | A comma-separated string array. The fields to perform the search from. Defaults to all of them. |
| exactMatch |  ``` Optional ```  | When enabled, only full exact matches against the given term are returned. It is not case sensitive. |
| organizationId |  ``` Optional ```  | Will filter Deals by the provided Organization ID. The upper limit of found Deals associated with the Organization is 2000. |
| includeFields |  ``` Optional ```  | Supports including optional fields in the results which are not provided by default. |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start. |
| limit |  ``` Optional ```  | Items shown per page. |



#### Example Usage

```javascript

    var input = {};
        input['term'] = 'term';
        input['fields'] = ['custom_fields', 'email', 'notes', 'phone', 'name'];
        input['exactMatch'] = true;
        input['organizationId'] = 58;
        input['includeFields'] = 'person.picture';
        input['start'] = 0;
        input['limit'] = 58;

    controller.searchPersons(input, function(error, response, context) {

    
    });
```


### <a name="delete_a_person"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.deleteAPerson") deleteAPerson

> Marks a person as deleted.


```javascript
function deleteAPerson(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |



#### Example Usage

```javascript

    var id = 16;

    controller.deleteAPerson(id, function(error, response, context) {

    
    });
```



### <a name="get_details_of_a_person"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.getDetailsOfAPerson") getDetailsOfAPerson

> Returns details of a person. Note that this also returns some additional fields which are not present when asking for all persons. Also note that custom fields appear as long hashes in the resulting data. These hashes can be mapped against the 'key' value of personFields.


```javascript
function getDetailsOfAPerson(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |



#### Example Usage

```javascript

    var id = 16;

    controller.getDetailsOfAPerson(id, function(error, response, context) {

    
    });
```



### <a name="update_a_person"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.updateAPerson") updateAPerson

> Updates the properties of a person. For more information on how to update a person, see <a href="https://pipedrive.readme.io/docs/updating-a-person" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function updateAPerson(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |
| name |  ``` Optional ```  | Person name |
| ownerId |  ``` Optional ```  | ID of the user who will be marked as the owner of this person. When omitted, the authorized user ID will be used. |
| orgId |  ``` Optional ```  | ID of the organization this person will belong to. |
| email |  ``` Optional ```  ``` Collection ```  | Email addresses (one or more) associated with the person, presented in the same manner as received by GET request of a person. |
| phone |  ``` Optional ```  ``` Collection ```  | Phone numbers (one or more) associated with the person, presented in the same manner as received by GET request of a person. |
| visibleTo |  ``` Optional ```  | Visibility of the person. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.<dl class="fields-list"><dt>1</dt><dd>Owner &amp; followers (private)</dd><dt>3</dt><dd>Entire company (shared)</dd></dl> |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['name'] = 'name';
        input['ownerId'] = 16;
        input['orgId'] = 16;
        input['email'] = ['email'];
        input['phone'] = ['phone'];
        input['visibleTo'] = Object.keys(VisibleTo)[0];

    controller.updateAPerson(input, function(error, response, context) {

    
    });
```



### <a name="list_activities_associated_with_a_person"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.listActivitiesAssociatedWithAPerson") listActivitiesAssociatedWithAPerson

> Lists activities associated with a person.


```javascript
function listActivitiesAssociatedWithAPerson(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| done |  ``` Optional ```  | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities. |
| exclude |  ``` Optional ```  | A comma-separated string of activity IDs to exclude from result |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;
        input['done'] = Object.keys(NumberBoolean)[0];
        input['exclude'] = 'exclude';

    controller.listActivitiesAssociatedWithAPerson(input, function(error, response, context) {

    
    });
```



### <a name="list_deals_associated_with_a_person"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.listDealsAssociatedWithAPerson") listDealsAssociatedWithAPerson

> Lists deals associated with a person.


```javascript
function listDealsAssociatedWithAPerson(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| status |  ``` Optional ```  ``` DefaultValue ```  | Only fetch deals with specific status. If omitted, all not deleted deals are fetched. |
| sort |  ``` Optional ```  | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;
        input['status'] = Object.keys(status2)[0];
        input['sort'] = 'sort';

    controller.listDealsAssociatedWithAPerson(input, function(error, response, context) {

    
    });
```



### <a name="list_files_attached_to_a_person"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.listFilesAttachedToAPerson") listFilesAttachedToAPerson

> Lists files associated with a person.


```javascript
function listFilesAttachedToAPerson(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| includeDeletedFiles |  ``` Optional ```  | When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work. |
| sort |  ``` Optional ```  | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;
        input['includeDeletedFiles'] = Object.keys(NumberBoolean)[0];
        input['sort'] = 'sort';

    controller.listFilesAttachedToAPerson(input, function(error, response, context) {

    
    });
```



### <a name="list_updates_about_a_person"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.listUpdatesAboutAPerson") listUpdatesAboutAPerson

> Lists updates about a person.


```javascript
function listUpdatesAboutAPerson(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;

    controller.listUpdatesAboutAPerson(input, function(error, response, context) {

    
    });
```



### <a name="list_followers_of_a_person"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.listFollowersOfAPerson") listFollowersOfAPerson

> Lists the followers of a person.


```javascript
function listFollowersOfAPerson(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |



#### Example Usage

```javascript

    var id = 16;

    controller.listFollowersOfAPerson(id, function(error, response, context) {

    
    });
```



### <a name="add_a_follower_to_a_person"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.addAFollowerToAPerson") addAFollowerToAPerson

> Adds a follower to a person.


```javascript
function addAFollowerToAPerson(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |
| userId |  ``` Required ```  | ID of the user |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['userId'] = 16;

    controller.addAFollowerToAPerson(input, function(error, response, context) {

    
    });
```



### <a name="deletes_a_follower_from_a_person"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.deletesAFollowerFromAPerson") deletesAFollowerFromAPerson

> Delete a follower from a person


```javascript
function deletesAFollowerFromAPerson(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |
| followerId |  ``` Required ```  | ID of the follower |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['followerId'] = 16;

    controller.deletesAFollowerFromAPerson(input, function(error, response, context) {

    
    });
```



### <a name="list_mail_messages_associated_with_a_person"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.listMailMessagesAssociatedWithAPerson") listMailMessagesAssociatedWithAPerson

> Lists mail messages associated with a person.


```javascript
function listMailMessagesAssociatedWithAPerson(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;

    controller.listMailMessagesAssociatedWithAPerson(input, function(error, response, context) {

    
    });
```



### <a name="update_merge_two_persons"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.updateMergeTwoPersons") updateMergeTwoPersons

> Merges a person with another person. For more information on how to merge two persons, see <a href="https://pipedrive.readme.io/docs/merging-two-persons" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function updateMergeTwoPersons(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |
| mergeWithId |  ``` Required ```  | ID of the person that the person will be merged with |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['mergeWithId'] = 16;

    controller.updateMergeTwoPersons(input, function(error, response, context) {

    
    });
```



### <a name="list_permitted_users"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.listPermittedUsers") listPermittedUsers

> List users permitted to access a person


```javascript
function listPermittedUsers(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |



#### Example Usage

```javascript

    var id = 16;

    controller.listPermittedUsers(id, function(error, response, context) {

    
    });
```



### <a name="delete_person_picture"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.deletePersonPicture") deletePersonPicture

> Delete person picture


```javascript
function deletePersonPicture(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |



#### Example Usage

```javascript

    var id = 16;

    controller.deletePersonPicture(id, function(error, response, context) {

    
    });
```



### <a name="add_person_picture"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.addPersonPicture") addPersonPicture

> Add a picture to a person. If a picture is already set, the old picture will be replaced. Added image (or the cropping parameters supplied with the request) should have an equal width and height and should be at least 128 pixels. GIF, JPG and PNG are accepted. All added images will be resized to 128 and 512 pixel wide squares.


```javascript
function addPersonPicture(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |
| file |  ``` Required ```  | One image supplied in the multipart/form-data encoding. |
| cropX |  ``` Optional ```  | X coordinate to where start cropping form (in pixels) |
| cropY |  ``` Optional ```  | Y coordinate to where start cropping form (in pixels) |
| cropWidth |  ``` Optional ```  | Width of cropping area (in pixels) |
| cropHeight |  ``` Optional ```  | Height of cropping area (in pixels) |



#### Example Usage

```javascript

    TestHelper.getFilePath('url', function(data) {
        var input = {};
        input['id'] = 16;
        input['file'] = data;
        input['cropX'] = 16;
        input['cropY'] = 16;
        input['cropWidth'] = 16;
        input['cropHeight'] = 16;

        controller.addPersonPicture(input, function(error, response, context) {

        });
    });
```



### <a name="list_products_associated_with_a_person"></a>![Method: ](https://apidocs.io/img/method.png ".PersonsController.listProductsAssociatedWithAPerson") listProductsAssociatedWithAPerson

> Lists products associated with a person.


```javascript
function listProductsAssociatedWithAPerson(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of a person |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;

    controller.listProductsAssociatedWithAPerson(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="pipelines_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PipelinesController") PipelinesController

### Get singleton instance

The singleton instance of the ``` PipelinesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PipelinesController;
```

### <a name="get_all_pipelines"></a>![Method: ](https://apidocs.io/img/method.png ".PipelinesController.getAllPipelines") getAllPipelines

> Returns data about all pipelines


```javascript
function getAllPipelines(callback)
```

#### Example Usage

```javascript


    controller.getAllPipelines(function(error, response, context) {

    
    });
```



### <a name="add_a_new_pipeline"></a>![Method: ](https://apidocs.io/img/method.png ".PipelinesController.addANewPipeline") addANewPipeline

> Adds a new pipeline


```javascript
function addANewPipeline(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Optional ```  | Name of the pipeline |
| dealProbability |  ``` Optional ```  | TODO: Add a parameter description |
| orderNr |  ``` Optional ```  | Defines pipelines order. First order(order_nr=0) is the default pipeline. |
| active |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['name'] = 'name';
        input['dealProbability'] = Object.keys(NumberBoolean)[0];
        input['orderNr'] = 16;
        input['active'] = Object.keys(NumberBoolean)[0];

    controller.addANewPipeline(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_pipeline"></a>![Method: ](https://apidocs.io/img/method.png ".PipelinesController.deleteAPipeline") deleteAPipeline

> Marks a pipeline as deleted.


```javascript
function deleteAPipeline(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the pipeline |



#### Example Usage

```javascript

    var id = 16;

    controller.deleteAPipeline(id, function(error, response, context) {

    
    });
```



### <a name="get_one_pipeline"></a>![Method: ](https://apidocs.io/img/method.png ".PipelinesController.getOnePipeline") getOnePipeline

> Returns data about a specific pipeline. Also returns the summary of the deals in this pipeline across its stages.


```javascript
function getOnePipeline(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the pipeline |
| totalsConvertCurrency |  ``` Optional ```  | 3-letter currency code of any of the supported currencies. When supplied, per_stages_converted is returned in deals_summary which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to 'default_currency' in which case users default currency is used. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['totalsConvertCurrency'] = totals_convert_currency;

    controller.getOnePipeline(input, function(error, response, context) {

    
    });
```



### <a name="update_edit_a_pipeline"></a>![Method: ](https://apidocs.io/img/method.png ".PipelinesController.updateEditAPipeline") updateEditAPipeline

> Updates pipeline properties


```javascript
function updateEditAPipeline(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the pipeline |
| name |  ``` Optional ```  | Name of the pipeline |
| dealProbability |  ``` Optional ```  | TODO: Add a parameter description |
| orderNr |  ``` Optional ```  | Defines pipelines order. First order(order_nr=0) is the default pipeline. |
| active |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['name'] = 'name';
        input['dealProbability'] = Object.keys(NumberBoolean)[0];
        input['orderNr'] = 16;
        input['active'] = Object.keys(NumberBoolean)[0];

    controller.updateEditAPipeline(input, function(error, response, context) {

    
    });
```


### <a name="get_deals_conversion_rates_in_pipeline"></a>![Method: ](https://apidocs.io/img/method.png ".PipelinesController.getDealsConversionRatesInPipeline") getDealsConversionRatesInPipeline

> Returns all stage-to-stage conversion and pipeline-to-close rates for given time period.


```javascript
function getDealsConversionRatesInPipeline(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the pipeline |
| startDate |  ``` Required ```  | Start of the period. Date in format of YYYY-MM-DD. |
| endDate |  ``` Required ```  | End of the period. Date in format of YYYY-MM-DD. |
| userId |  ``` Optional ```  | ID of the user who's pipeline metrics statistics to fetch. If omitted, the authorized user will be used. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['startDate'] = '2019-11-22';
        input['endDate'] = '2019-11-22';
        input['userId'] = 16;

    controller.getDealsConversionRatesInPipeline(input, function(error, response, context) {

    
    });
```



### <a name="get_deals_in_a_pipeline"></a>![Method: ](https://apidocs.io/img/method.png ".PipelinesController.getDealsInAPipeline") getDealsInAPipeline

> Lists deals in a specific pipeline across all its stages


```javascript
function getDealsInAPipeline(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the pipeline |
| filterId |  ``` Optional ```  | If supplied, only deals matching the given filter will be returned. |
| userId |  ``` Optional ```  | If supplied, filter_id will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned. |
| everyone |  ``` Optional ```  | If supplied, filter_id and user_id will not be considered – instead, deals owned by everyone will be returned. |
| stageId |  ``` Optional ```  | If supplied, only deals within the given stage will be returned. |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| getSummary |  ``` Optional ```  | Whether to include summary of the pipeline in the additional_data or not. |
| totalsConvertCurrency |  ``` Optional ```  | 3-letter currency code of any of the supported currencies. When supplied, per_stages_converted is returned inside deals_summary inside additional_data which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to 'default_currency' in which case users default currency is used. Only works when get_summary parameter flag is enabled. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['filterId'] = 16;
        input['userId'] = 16;
        input['everyone'] = Object.keys(NumberBoolean)[0];
        input['stageId'] = 16;
        input['start'] = 16;
        input['limit'] = 16;
        input['getSummary'] = Object.keys(NumberBoolean)[0];
        input['totalsConvertCurrency'] = totals_convert_currency;

    controller.getDealsInAPipeline(input, function(error, response, context) {

    
    });
```



### <a name="get_deals_movements_in_pipeline"></a>![Method: ](https://apidocs.io/img/method.png ".PipelinesController.getDealsMovementsInPipeline") getDealsMovementsInPipeline

> Returns statistics for deals movements for given time period.


```javascript
function getDealsMovementsInPipeline(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the pipeline |
| startDate |  ``` Required ```  | Start of the period. Date in format of YYYY-MM-DD. |
| endDate |  ``` Required ```  | End of the period. Date in format of YYYY-MM-DD. |
| userId |  ``` Optional ```  | ID of the user who's pipeline statistics to fetch. If omitted, the authorized user will be used. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['startDate'] = '2019-11-22';
        input['endDate'] = '2019-11-22';
        input['userId'] = 16;

    controller.getDealsMovementsInPipeline(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="product_fields_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ProductFieldsController") ProductFieldsController

### Get singleton instance

The singleton instance of the ``` ProductFieldsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ProductFieldsController;
```

### <a name="delete_multiple_product_fields_in_bulk"></a>![Method: ](https://apidocs.io/img/method.png ".ProductFieldsController.deleteMultipleProductFieldsInBulk") deleteMultipleProductFieldsInBulk

> Marks multiple fields as deleted.


```javascript
function deleteMultipleProductFieldsInBulk(ids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ids |  ``` Required ```  | Comma-separated field IDs to delete |



#### Example Usage

```javascript

    var ids = 'ids';

    controller.deleteMultipleProductFieldsInBulk(ids, function(error, response, context) {

    
    });
```



### <a name="get_all_product_fields"></a>![Method: ](https://apidocs.io/img/method.png ".ProductFieldsController.getAllProductFields") getAllProductFields

> Returns data about all product fields


```javascript
function getAllProductFields(callback)
```

#### Example Usage

```javascript


    controller.getAllProductFields(function(error, response, context) {

    
    });
```



### <a name="add_a_new_product_field"></a>![Method: ](https://apidocs.io/img/method.png ".ProductFieldsController.addANewProductField") addANewProductField

> Adds a new product field. For more information on adding a new custom field, see <a href="https://pipedrive.readme.io/docs/adding-a-new-custom-field" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function addANewProductField(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.addANewProductField(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_product_field"></a>![Method: ](https://apidocs.io/img/method.png ".ProductFieldsController.deleteAProductField") deleteAProductField

> Marks a field as deleted. For more information on how to delete a custom field, see <a href="https://pipedrive.readme.io/docs/deleting-a-custom-field" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function deleteAProductField(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the Product Field |



#### Example Usage

```javascript

    var id = 16;

    controller.deleteAProductField(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 410 | The Product Field with the specified ID does not exist or is inaccessible |




### <a name="get_one_product_field"></a>![Method: ](https://apidocs.io/img/method.png ".ProductFieldsController.getOneProductField") getOneProductField

> Returns data about a specific product field.


```javascript
function getOneProductField(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the Product Field |



#### Example Usage

```javascript

    var id = 16;

    controller.getOneProductField(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 410 | The Product Field with the specified ID does not exist or is inaccessible |




### <a name="update_a_product_field"></a>![Method: ](https://apidocs.io/img/method.png ".ProductFieldsController.updateAProductField") updateAProductField

> Updates a product field. See an example of updating custom fields’ values in <a href=" https://pipedrive.readme.io/docs/updating-custom-field-value " target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function updateAProductField(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the Product Field |
| name |  ``` Required ```  | Name of the field |
| options |  ``` Optional ```  | When field_type is either set or enum, possible options must be supplied as a JSON-encoded sequential array, for example: ["red","blue","lilac"] |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['name'] = 'name';
        input['options'] = 'options';

    controller.updateAProductField(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="products_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ProductsController") ProductsController

### Get singleton instance

The singleton instance of the ``` ProductsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ProductsController;
```

### <a name="get_all_products"></a>![Method: ](https://apidocs.io/img/method.png ".ProductsController.getAllProducts") getAllProducts

> Returns data about all products.


```javascript
function getAllProducts(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Optional ```  | If supplied, only products owned by the given user will be returned. |
| filterId |  ``` Optional ```  | ID of the filter to use |
| firstChar |  ``` Optional ```  | If supplied, only products whose name starts with the specified letter will be returned (case insensitive). |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['userId'] = 16;
        input['filterId'] = 16;
        input['firstChar'] = first_char;
        input['start'] = 0;
        input['limit'] = 16;

    controller.getAllProducts(input, function(error, response, context) {

    
    });
```



### <a name="add_a_product"></a>![Method: ](https://apidocs.io/img/method.png ".ProductsController.addAProduct") addAProduct

> Adds a new product to the products inventory. For more information on how to add a product, see <a href="https://pipedrive.readme.io/docs/adding-a-product" target="_blank" rel="noopener noreferrer">this tutorial</a>.


```javascript
function addAProduct(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.addAProduct(input, function(error, response, context) {

    
    });
```



### <a name="search_products"></a>![Method: ](https://apidocs.io/img/method.png ".ProductsController.searchProducts") searchProducts

> Searches all Products by name, code and/or custom fields. This endpoint is a wrapper of /v1/itemSearch with a narrower OAuth scope.


```javascript
function searchProducts(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| term |  ``` Required ```  | Search term to look for, minimum 3 characters. |
| fields |  ``` Optional ```  | A comma-separated string array. The fields to perform the search from. Defaults to all of them. |
| exactMatch |  ``` Optional ```  | When enabled, only full exact matches against the given term are returned. It is not case sensitive. |
| includeFields |  ``` Optional ```  | Supports including optional fields in the results which are not provided by default. |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start. |
| limit |  ``` Optional ```  | Items shown per page. |



#### Example Usage

```javascript

    var input = {};
        input['term'] = 'term';
        input['fields'] = ['code', 'custom_fields', 'name'];
        input['exactMatch'] = true;
        input['includeFields'] = 'product.price';
        input['start'] = 16;
        input['limit'] = 16;

    controller.searchProducts(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_product"></a>![Method: ](https://apidocs.io/img/method.png ".ProductsController.deleteAProduct") deleteAProduct

> Marks a product as deleted.


```javascript
function deleteAProduct(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the product |



#### Example Usage

```javascript

    var id = 16;

    controller.deleteAProduct(id, function(error, response, context) {

    
    });
```



### <a name="get_one_product"></a>![Method: ](https://apidocs.io/img/method.png ".ProductsController.getOneProduct") getOneProduct

> Returns data about a specific product.


```javascript
function getOneProduct(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the product |



#### Example Usage

```javascript

    var id = 16;

    controller.getOneProduct(id, function(error, response, context) {

    
    });
```



### <a name="update_a_product"></a>![Method: ](https://apidocs.io/img/method.png ".ProductsController.updateAProduct") updateAProduct

> Updates product data.


```javascript
function updateAProduct(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the product |
| name |  ``` Optional ```  | Name of the product. |
| code |  ``` Optional ```  | Product code. |
| unit |  ``` Optional ```  | Unit in which this product is sold |
| tax |  ``` Optional ```  | Tax percentage |
| activeFlag |  ``` Optional ```  | Whether this product will be made active or not. |
| visibleTo |  ``` Optional ```  | Visibility of the product. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.<dl class="fields-list"><dt>1</dt><dd>Owner &amp; followers (private)</dd><dt>3</dt><dd>Entire company (shared)</dd></dl> |
| ownerId |  ``` Optional ```  | ID of the user who will be marked as the owner of this product. When omitted, the authorized user ID will be used. |
| prices |  ``` Optional ```  | Array of objects, each containing: currency (string), price (number), cost (number, optional), overhead_cost (number, optional). Note that there can only be one price per product per currency. When 'prices' is omitted altogether, no prices will be set up for the product. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['name'] = 'name';
        input['code'] = 'code';
        input['unit'] = 'unit';
        input['tax'] = 16.841310365983;
        input['activeFlag'] = Object.keys(NumberBoolean)[0];
        input['visibleTo'] = Object.keys(VisibleTo)[0];
        input['ownerId'] = 16;
        input['prices'] = 'prices';

    controller.updateAProduct(input, function(error, response, context) {

    
    });
```



### <a name="get_deals_where_a_product_is_attached_to"></a>![Method: ](https://apidocs.io/img/method.png ".ProductsController.getDealsWhereAProductIsAttachedTo") getDealsWhereAProductIsAttachedTo

> Returns data about deals that have a product attached to.


```javascript
function getDealsWhereAProductIsAttachedTo(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the product |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| status |  ``` Optional ```  ``` DefaultValue ```  | Only fetch deals with specific status. If omitted, all not deleted deals are fetched. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;
        input['status'] = Object.keys(status2)[0];

    controller.getDealsWhereAProductIsAttachedTo(input, function(error, response, context) {

    
    });
```



### <a name="list_files_attached_to_a_product"></a>![Method: ](https://apidocs.io/img/method.png ".ProductsController.listFilesAttachedToAProduct") listFilesAttachedToAProduct

> Lists files associated with a product.


```javascript
function listFilesAttachedToAProduct(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the product |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |
| includeDeletedFiles |  ``` Optional ```  | When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work. |
| sort |  ``` Optional ```  | Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;
        input['includeDeletedFiles'] = Object.keys(NumberBoolean)[0];
        input['sort'] = 'sort';

    controller.listFilesAttachedToAProduct(input, function(error, response, context) {

    
    });
```



### <a name="list_followers_of_a_product"></a>![Method: ](https://apidocs.io/img/method.png ".ProductsController.listFollowersOfAProduct") listFollowersOfAProduct

> Lists the followers of a Product


```javascript
function listFollowersOfAProduct(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the product |



#### Example Usage

```javascript

    var id = 16;

    controller.listFollowersOfAProduct(id, function(error, response, context) {

    
    });
```



### <a name="add_a_follower_to_a_product"></a>![Method: ](https://apidocs.io/img/method.png ".ProductsController.addAFollowerToAProduct") addAFollowerToAProduct

> Adds a follower to a product.


```javascript
function addAFollowerToAProduct(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the product |
| userId |  ``` Required ```  | ID of the user |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['userId'] = 16;

    controller.addAFollowerToAProduct(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_follower_from_a_product"></a>![Method: ](https://apidocs.io/img/method.png ".ProductsController.deleteAFollowerFromAProduct") deleteAFollowerFromAProduct

> Deletes a follower from a product.


```javascript
function deleteAFollowerFromAProduct(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the product |
| followerId |  ``` Required ```  | ID of the follower |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['followerId'] = 16;

    controller.deleteAFollowerFromAProduct(input, function(error, response, context) {

    
    });
```



### <a name="list_permitted_users"></a>![Method: ](https://apidocs.io/img/method.png ".ProductsController.listPermittedUsers") listPermittedUsers

> Lists users permitted to access a product.


```javascript
function listPermittedUsers(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the product |



#### Example Usage

```javascript

    var id = 16;

    controller.listPermittedUsers(id, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="recents_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RecentsController") RecentsController

### Get singleton instance

The singleton instance of the ``` RecentsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RecentsController;
```

### <a name="get_recents"></a>![Method: ](https://apidocs.io/img/method.png ".RecentsController.getRecents") getRecents

> Returns data about all recent changes occured after given timestamp.


```javascript
function getRecents(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| sinceTimestamp |  ``` Required ```  | Timestamp in UTC. Format: YYYY-MM-DD HH:MM:SS |
| items |  ``` Optional ```  | Multiple selection of item types to include in query (optional) |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['sinceTimestamp'] = since_timestamp;
        input['items'] = Object.keys(items)[0];
        input['start'] = 16;
        input['limit'] = 16;

    controller.getRecents(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="roles_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RolesController") RolesController

### Get singleton instance

The singleton instance of the ``` RolesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RolesController;
```

### <a name="get_all_roles"></a>![Method: ](https://apidocs.io/img/method.png ".RolesController.getAllRoles") getAllRoles

> Get all roles


```javascript
function getAllRoles(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['start'] = 16;
        input['limit'] = 16;

    controller.getAllRoles(input, function(error, response, context) {

    
    });
```



### <a name="add_a_role"></a>![Method: ](https://apidocs.io/img/method.png ".RolesController.addARole") addARole

> Add a role


```javascript
function addARole(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.addARole(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_role"></a>![Method: ](https://apidocs.io/img/method.png ".RolesController.deleteARole") deleteARole

> Delete a role


```javascript
function deleteARole(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the role |



#### Example Usage

```javascript

    var id = 16;

    controller.deleteARole(id, function(error, response, context) {

    
    });
```



### <a name="get_one_role"></a>![Method: ](https://apidocs.io/img/method.png ".RolesController.getOneRole") getOneRole

> Get one role


```javascript
function getOneRole(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the role |



#### Example Usage

```javascript

    var id = 16;

    controller.getOneRole(id, function(error, response, context) {

    
    });
```



### <a name="update_role_details"></a>![Method: ](https://apidocs.io/img/method.png ".RolesController.updateRoleDetails") updateRoleDetails

> Update role details


```javascript
function updateRoleDetails(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the role |
| parentRoleId |  ``` Optional ```  | The ID of the parent Role |
| name |  ``` Optional ```  | The name of the Role |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['parentRoleId'] = 16;
        input['name'] = 'name';

    controller.updateRoleDetails(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_role_assignment"></a>![Method: ](https://apidocs.io/img/method.png ".RolesController.deleteARoleAssignment") deleteARoleAssignment

> Delete assignment from a role


```javascript
function deleteARoleAssignment(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the role |
| userId |  ``` Required ```  | ID of the user |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['userId'] = 16;

    controller.deleteARoleAssignment(input, function(error, response, context) {

    
    });
```



### <a name="list_role_assignments"></a>![Method: ](https://apidocs.io/img/method.png ".RolesController.listRoleAssignments") listRoleAssignments

> List assignments for a role


```javascript
function listRoleAssignments(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the role |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;

    controller.listRoleAssignments(input, function(error, response, context) {

    
    });
```



### <a name="add_role_assignment"></a>![Method: ](https://apidocs.io/img/method.png ".RolesController.addRoleAssignment") addRoleAssignment

> Add assignment for a role


```javascript
function addRoleAssignment(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the role |
| userId |  ``` Required ```  | ID of the user |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['userId'] = 16;

    controller.addRoleAssignment(input, function(error, response, context) {

    
    });
```



### <a name="list_role_sub_roles"></a>![Method: ](https://apidocs.io/img/method.png ".RolesController.listRoleSubRoles") listRoleSubRoles

> List role sub-roles


```javascript
function listRoleSubRoles(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the role |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;

    controller.listRoleSubRoles(input, function(error, response, context) {

    
    });
```



### <a name="list_role_settings"></a>![Method: ](https://apidocs.io/img/method.png ".RolesController.listRoleSettings") listRoleSettings

> List role settings


```javascript
function listRoleSettings(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the role |



#### Example Usage

```javascript

    var id = 16;

    controller.listRoleSettings(id, function(error, response, context) {

    
    });
```



### <a name="add_or_update_role_setting"></a>![Method: ](https://apidocs.io/img/method.png ".RolesController.addOrUpdateRoleSetting") addOrUpdateRoleSetting

> Add or update role setting


```javascript
function addOrUpdateRoleSetting(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the role |
| settingKey |  ``` Required ```  | TODO: Add a parameter description |
| value |  ``` Required ```  | Possible values for default_visibility settings: 0...1. |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['settingKey'] = Object.keys(setting_key)[0];
        input['value'] = Object.keys(NumberBoolean)[0];

    controller.addOrUpdateRoleSetting(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="stages_controller"></a>![Class: ](https://apidocs.io/img/class.png ".StagesController") StagesController

### Get singleton instance

The singleton instance of the ``` StagesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.StagesController;
```

### <a name="delete_multiple_stages_in_bulk"></a>![Method: ](https://apidocs.io/img/method.png ".StagesController.deleteMultipleStagesInBulk") deleteMultipleStagesInBulk

> Marks multiple stages as deleted.


```javascript
function deleteMultipleStagesInBulk(ids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ids |  ``` Required ```  | Comma-separated stage IDs to delete |



#### Example Usage

```javascript

    var ids = 'ids';

    controller.deleteMultipleStagesInBulk(ids, function(error, response, context) {

    
    });
```



### <a name="get_all_stages"></a>![Method: ](https://apidocs.io/img/method.png ".StagesController.getAllStages") getAllStages

> Returns data about all stages


```javascript
function getAllStages(pipelineId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| pipelineId |  ``` Optional ```  | ID of the pipeline to fetch stages for. If omitted, stages for all pipelines will be fetched. |



#### Example Usage

```javascript

    var pipelineId = 16;

    controller.getAllStages(pipelineId, function(error, response, context) {

    
    });
```



### <a name="add_a_new_stage"></a>![Method: ](https://apidocs.io/img/method.png ".StagesController.addANewStage") addANewStage

> Adds a new stage, returns the ID upon success.


```javascript
function addANewStage(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.addANewStage(input, function(error, response, context) {

    
    });
```



### <a name="delete_a_stage"></a>![Method: ](https://apidocs.io/img/method.png ".StagesController.deleteAStage") deleteAStage

> Marks a stage as deleted.


```javascript
function deleteAStage(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the stage |



#### Example Usage

```javascript

    var id = 16;

    controller.deleteAStage(id, function(error, response, context) {

    
    });
```



### <a name="get_one_stage"></a>![Method: ](https://apidocs.io/img/method.png ".StagesController.getOneStage") getOneStage

> Returns data about a specific stage


```javascript
function getOneStage(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the stage |



#### Example Usage

```javascript

    var id = 16;

    controller.getOneStage(id, function(error, response, context) {

    
    });
```



### <a name="update_stage_details"></a>![Method: ](https://apidocs.io/img/method.png ".StagesController.updateStageDetails") updateStageDetails

> Updates the properties of a stage.


```javascript
function updateStageDetails(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the stage |
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.updateStageDetails(input, function(error, response, context) {

    
    });
```



### <a name="get_deals_in_a_stage"></a>![Method: ](https://apidocs.io/img/method.png ".StagesController.getDealsInAStage") getDealsInAStage

> Lists deals in a specific stage


```javascript
function getDealsInAStage(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the stage |
| filterId |  ``` Optional ```  | If supplied, only deals matching the given filter will be returned. |
| userId |  ``` Optional ```  | If supplied, filter_id will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned. |
| everyone |  ``` Optional ```  | If supplied, filter_id and user_id will not be considered – instead, deals owned by everyone will be returned. |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['filterId'] = 16;
        input['userId'] = 16;
        input['everyone'] = Object.keys(NumberBoolean)[0];
        input['start'] = 16;
        input['limit'] = 16;

    controller.getDealsInAStage(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="teams_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TeamsController") TeamsController

### Get singleton instance

The singleton instance of the ``` TeamsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TeamsController;
```

### <a name="get_all_teams"></a>![Method: ](https://apidocs.io/img/method.png ".TeamsController.getAllTeams") getAllTeams

> Returns data about teams within the company


```javascript
function getAllTeams(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Field name to sort returned teams by |
| skipUsers |  ``` Optional ```  | When enabled, the teams will not include IDs of member users |



#### Example Usage

```javascript

    var input = {};
        input['orderBy'] = new OrderByEnum(id);
        input['skipUsers'] = Object.keys(NumberBoolean)[0];

    controller.getAllTeams(input, function(error, response, context) {

    
    });
```



### <a name="add_a_new_team"></a>![Method: ](https://apidocs.io/img/method.png ".TeamsController.addANewTeam") addANewTeam

> Adds a new team to the company and returns the created object


```javascript
function addANewTeam(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Required ```  | The Team name |
| managerId |  ``` Required ```  | The Team manager ID |
| description |  ``` Optional ```  | The Team description |
| users |  ``` Optional ```  ``` Collection ```  | IDs of the Users that belong to the Team |



#### Example Usage

```javascript

    var input = {};
        input['name'] = 'name';
        input['managerId'] = 16;
        input['description'] = 'description';
        input['users'] = [16];

    controller.addANewTeam(input, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 403 | Forbidden response |




### <a name="get_a_single_team"></a>![Method: ](https://apidocs.io/img/method.png ".TeamsController.getASingleTeam") getASingleTeam

> Returns data about a specific team


```javascript
function getASingleTeam(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the team |
| skipUsers |  ``` Optional ```  | When enabled, the teams will not include IDs of member users |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['skipUsers'] = Object.keys(NumberBoolean)[0];

    controller.getASingleTeam(input, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | Team with specified ID does not exist or is inaccessible |




### <a name="update_a_team"></a>![Method: ](https://apidocs.io/img/method.png ".TeamsController.updateATeam") updateATeam

> Updates an existing team and returns the updated object


```javascript
function updateATeam(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the team |
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['contentType'] = 'Content-Type';
        input['body'] = {
        id : 21
    };

    controller.updateATeam(input, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 403 | Forbidden response |
| 404 | Team with specified ID does not exist or is inaccessible |




### <a name="get_all_users_in_a_team"></a>![Method: ](https://apidocs.io/img/method.png ".TeamsController.getAllUsersInATeam") getAllUsersInATeam

> Returns list of all user IDs within a team


```javascript
function getAllUsersInATeam(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the team |



#### Example Usage

```javascript

    var id = 16;

    controller.getAllUsersInATeam(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | Team with specified ID does not exist or is inaccessible |




### <a name="add_users_to_a_team"></a>![Method: ](https://apidocs.io/img/method.png ".TeamsController.addUsersToATeam") addUsersToATeam

> Adds users to an existing team


```javascript
function addUsersToATeam(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the team |
| users |  ``` Required ```  ``` Collection ```  | List of User IDs |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['users'] = [16];

    controller.addUsersToATeam(input, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 403 | Forbidden response |
| 404 | Team with specified ID does not exist or is inaccessible |




### <a name="delete_users_from_a_team"></a>![Method: ](https://apidocs.io/img/method.png ".TeamsController.deleteUsersFromATeam") deleteUsersFromATeam

> Deletes users from an existing team


```javascript
function deleteUsersFromATeam(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the team |
| users |  ``` Required ```  ``` Collection ```  | List of User IDs |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['users'] = [16];

    controller.deleteUsersFromATeam(input, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 403 | Forbidden response |
| 404 | Team with specified ID does not exist or is inaccessible |




### <a name="get_all_teams_of_a_user"></a>![Method: ](https://apidocs.io/img/method.png ".TeamsController.getAllTeamsOfAUser") getAllTeamsOfAUser

> Returns data about all teams which have specified user as a member


```javascript
function getAllTeamsOfAUser(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Field name to sort returned teams by |
| skipUsers |  ``` Optional ```  | When enabled, the teams will not include IDs of member users |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['orderBy'] = Object.keys(order_by)[0];
        input['skipUsers'] = Object.keys(NumberBoolean)[0];

    controller.getAllTeamsOfAUser(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="user_connections_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UserConnectionsController") UserConnectionsController

### Get singleton instance

The singleton instance of the ``` UserConnectionsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.UserConnectionsController;
```

### <a name="get_all_user_connections"></a>![Method: ](https://apidocs.io/img/method.png ".UserConnectionsController.getAllUserConnections") getAllUserConnections

> Returns data about all connections for authorized user.


```javascript
function getAllUserConnections(callback)
```

#### Example Usage

```javascript


    controller.getAllUserConnections(function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized response |




[Back to List of Controllers](#list_of_controllers)

## <a name="user_settings_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UserSettingsController") UserSettingsController

### Get singleton instance

The singleton instance of the ``` UserSettingsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.UserSettingsController;
```

### <a name="list_settings_of_authorized_user"></a>![Method: ](https://apidocs.io/img/method.png ".UserSettingsController.listSettingsOfAuthorizedUser") listSettingsOfAuthorizedUser

> Lists settings of authorized user.


```javascript
function listSettingsOfAuthorizedUser(callback)
```

#### Example Usage

```javascript


    controller.listSettingsOfAuthorizedUser(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="users_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UsersController") UsersController

### Get singleton instance

The singleton instance of the ``` UsersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.UsersController;
```

### <a name="get_all_users"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getAllUsers") getAllUsers

> Returns data about all users within the company


```javascript
function getAllUsers(callback)
```

#### Example Usage

```javascript


    controller.getAllUsers(function(error, response, context) {

    
    });
```



### <a name="add_a_new_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.addANewUser") addANewUser

> Adds a new user to the company, returns the ID upon success.


```javascript
function addANewUser(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Required ```  | Name of the user |
| email |  ``` Required ```  | Email of the user |
| activeFlag |  ``` Required ```  | Whether the user is active or not. false = Not activated, true = Activated |



#### Example Usage

```javascript

    var input = {};
        input['name'] = 'name';
        input['email'] = 'email';
        input['activeFlag'] = false;

    controller.addANewUser(input, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 403 | Forbidden response |




### <a name="find_users_by_name"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.findUsersByName") findUsersByName

> Finds users by their name.


```javascript
function findUsersByName(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| term |  ``` Required ```  | Search term to look for |
| searchByEmail |  ``` Optional ```  | When enabled, term will only be matched against email addresses of users. Default: false |



#### Example Usage

```javascript

    var input = {};
        input['term'] = 'term';
        input['searchByEmail'] = Object.keys(NumberBoolean)[0];

    controller.findUsersByName(input, function(error, response, context) {

    
    });
```



### <a name="get_current_user_data"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getCurrentUserData") getCurrentUserData

> Returns data about an authorized user within the company with bound company data: company ID, company name, and domain. Note that the 'locale' property means 'Date and number format' in the Pipedrive settings, not the chosen language.


```javascript
function getCurrentUserData(callback)
```

#### Example Usage

```javascript


    controller.getCurrentUserData(function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized response |




### <a name="get_one_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getOneUser") getOneUser

> Returns data about a specific user within the company


```javascript
function getOneUser(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user |



#### Example Usage

```javascript

    var id = 16;

    controller.getOneUser(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | User with specified ID does not exist or is inaccessible |




### <a name="update_user_details"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.updateUserDetails") updateUserDetails

> Updates the properties of a user. Currently, only active_flag can be updated.


```javascript
function updateUserDetails(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user |
| activeFlag |  ``` Required ```  | Whether the user is active or not. false = Not activated, true = Activated |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['activeFlag'] = false;

    controller.updateUserDetails(input, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 403 | Forbidden response |
| 404 | User with specified ID does not exist or is inaccessible |




### <a name="list_blacklisted_email_addresses_of_a_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.listBlacklistedEmailAddressesOfAUser") listBlacklistedEmailAddressesOfAUser

> Lists blacklisted email addresses of a specific user. Blacklisted emails are such that will not get synced in to Pipedrive when using the built-in Mailbox.


```javascript
function listBlacklistedEmailAddressesOfAUser(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user |



#### Example Usage

```javascript

    var id = 16;

    controller.listBlacklistedEmailAddressesOfAUser(id, function(error, response, context) {

    
    });
```



### <a name="add_blacklisted_email_address_for_a_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.addBlacklistedEmailAddressForAUser") addBlacklistedEmailAddressForAUser

> Add blacklisted email address for a specific user.


```javascript
function addBlacklistedEmailAddressForAUser(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user |
| address |  ``` Required ```  | Email address to blacklist (can contain \\* for wildcards, e.g. \\*@example.com, or john\\*@ex\\*.com) |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['address'] = 'address';

    controller.addBlacklistedEmailAddressForAUser(input, function(error, response, context) {

    
    });
```



### <a name="list_followers_of_a_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.listFollowersOfAUser") listFollowersOfAUser

> Lists followers of a specific user.


```javascript
function listFollowersOfAUser(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user |



#### Example Usage

```javascript

    var id = 16;

    controller.listFollowersOfAUser(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 403 | Forbidden response |




### <a name="list_user_permissions"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.listUserPermissions") listUserPermissions

> List aggregated permissions over all assigned permission sets for a user


```javascript
function listUserPermissions(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user |



#### Example Usage

```javascript

    var id = 16;

    controller.listUserPermissions(id, function(error, response, context) {

    
    });
```



### <a name="delete_a_role_assignment"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.deleteARoleAssignment") deleteARoleAssignment

> Delete a role assignment for a user


```javascript
function deleteARoleAssignment(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user |
| roleId |  ``` Required ```  | ID of the role |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['roleId'] = 16;

    controller.deleteARoleAssignment(input, function(error, response, context) {

    
    });
```



### <a name="list_role_assignments"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.listRoleAssignments") listRoleAssignments

> List role assignments for a user


```javascript
function listRoleAssignments(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user |
| start |  ``` Optional ```  ``` DefaultValue ```  | Pagination start |
| limit |  ``` Optional ```  | Items shown per page |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['start'] = 16;
        input['limit'] = 16;

    controller.listRoleAssignments(input, function(error, response, context) {

    
    });
```



### <a name="add_role_assignment"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.addRoleAssignment") addRoleAssignment

> Add role assignment for a user


```javascript
function addRoleAssignment(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user |
| roleId |  ``` Required ```  | ID of the role |



#### Example Usage

```javascript

    var input = {};
        input['id'] = 16;
        input['roleId'] = 16;

    controller.addRoleAssignment(input, function(error, response, context) {

    
    });
```



### <a name="list_user_role_settings"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.listUserRoleSettings") listUserRoleSettings

> List settings of user's assigned role


```javascript
function listUserRoleSettings(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user |



#### Example Usage

```javascript

    var id = 16;

    controller.listUserRoleSettings(id, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="webhooks_controller"></a>![Class: ](https://apidocs.io/img/class.png ".WebhooksController") WebhooksController

### Get singleton instance

The singleton instance of the ``` WebhooksController ``` class can be accessed from the API Client.

```javascript
var controller = lib.WebhooksController;
```

### <a name="get_all_webhooks"></a>![Method: ](https://apidocs.io/img/method.png ".WebhooksController.getAllWebhooks") getAllWebhooks

> Returns data about all webhooks of a company.


```javascript
function getAllWebhooks(callback)
```

#### Example Usage

```javascript


    controller.getAllWebhooks(function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized response |




### <a name="create_a_new_webhook"></a>![Method: ](https://apidocs.io/img/method.png ".WebhooksController.createANewWebhook") createANewWebhook

> Creates a new webhook and returns its details. Note that specifying an event which triggers the webhook combines 2 parameters - 'event_action' and 'event_object'. E.g., use '\*.\*' for getting notifications about all events, 'added.deal' for any newly added deals, 'deleted.persons' for any deleted persons, etc. See <a href="https://pipedrive.readme.io/docs/guide-for-webhooks?utm_source=api_reference">https://pipedrive.readme.io/docs/guide-for-webhooks</a> for more details.


```javascript
function createANewWebhook(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subscriptionUrl |  ``` Required ```  | A full, valid, publicly accessible URL. Determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the subscription_url. |
| eventAction |  ``` Required ```  | Type of action to receive notifications about. Wildcard will match all supported actions. |
| eventObject |  ``` Required ```  | Type of object to receive notifications about. Wildcard will match all supported objects. |
| userId |  ``` Optional ```  | The ID of the user this webhook will be authorized with. If not set, current authorized user will be used. Note that this does not filter only certain user's events — rather, this specifies the user's permissions under which each event is checked. Events about objects the selected user is not entitled to access are not sent. If you want to receive notifications for all events, a top-level admin user should be used. |
| httpAuthUser |  ``` Optional ```  | HTTP basic auth username of the subscription URL endpoint (if required). |
| httpAuthPassword |  ``` Optional ```  | HTTP basic auth password of the subscription URL endpoint (if required). |



#### Example Usage

```javascript

    var input = {};
        input['subscriptionUrl'] = subscription_url;
        input['eventAction'] = Object.keys(event_action)[0];
        input['eventObject'] = Object.keys(event_object)[0];
        input['userId'] = 16;
        input['httpAuthUser'] = http_auth_user;
        input['httpAuthPassword'] = http_auth_password;

    controller.createANewWebhook(input, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | The bad response on webhook creation |
| 401 | Unauthorized response |




### <a name="delete_existing_webhook"></a>![Method: ](https://apidocs.io/img/method.png ".WebhooksController.deleteExistingWebhook") deleteExistingWebhook

> Deletes the specified webhook.


```javascript
function deleteExistingWebhook(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | The ID of the webhook to delete |



#### Example Usage

```javascript

    var id = 16;

    controller.deleteExistingWebhook(id, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized response |
| 403 | The webhook deletion forbidden response |
| 404 | The webhook deletion not found response |




[Back to List of Controllers](#list_of_controllers)
