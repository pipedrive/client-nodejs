# Install

```
npm install pipedrive
```

# Usage

With a pre-set API token:
```
var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('YOUR_API_TOKEN_HERE');
```

# A simple "Hello world" that lists some deals

Here's a quick example that will list some deals from your Pipedrive account:

```
var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('YOUR_API_TOKEN_HERE');

pipedrive.Deals.getAll({}, function(err, deals) {
	if (err) throw err;
	for (var i = 0; i < deals.length; i++) {
		console.log(deals[i].title + ' (worth ' + deals[i].value + ' ' + deals[i].currency + ')');
	}
});
```

# Supported objects

 * Activities
 * ActivityTypes
 * Authorizations
 * Currencies
 * Deals
 * DealFields
 * Filters
 * OrganizationFields
 * Organizations
 * Persons
 * PersonFields
 * Pipelines
 * Products
 * ProductFields
 * SearchResults
 * Stages
 * Users

# Authorization against email and password

### pipedrive.authenticate({ email: 'john@doe.com', password: 'example' }, [fn callback]);
Fetches the Authorizations objects for the given user against email and password, ```error, data``` to the callback.

# Supported operations for object collections

### pipedrive.{Object}.add (data, [fn callback])
Add an object. Returns ```error, data``` to the callback where data contains the ```id``` property of the newly created item.

### pipedrive.{Object}.get (id, [fn callback])
Get specific object. Returns ```error, object```

### pipedrive.{Object}.update (id, data, [fn callback])
Update an object. Returns ```error``` in case of an error to the callback.

### pipedrive.{Object}.getAll (params, [fn callback])
Get all objects, optionally passing additional parameters (such as ```filter_id``` in case of deals, persons and organizations). Returns ```error, objects``` to the callback function where objects is a collection (array) of objects.

### pipedrive.{Object}.delete (id, [fn callback])
Delete an object with a specifc ID. Returns ```error``` in case of an error to the callback.

### pipedrive.{Object}.deleteMany ([Array ids], [fn callback])
Delete multiple objects using an array of IDs. Returns ```error``` in case of an error to the callback.

### pipedrive.{Object}.merge (whichId, withId, [fn callback])
Merge two objects of the same kind. Returns ```error``` in case of an error to the callback. Merge is only supported for the following objects:
 * Persons
 * Organizations
 * Users

# Supported operations for each object

### {object}.get(fieldName)
Returns the value of [fieldName] of the object.

### {object}.set(fieldName, newValue)
Sets a new value of [fieldName] of the object. Returns {object}.

### {object}.save([fn callback])
Updates the state of the {object} in Pipedrive via the API. Returns {object}.

### {object}.remove([fn callback])
Deletes the {object} in Pipedrive via the API. Returns ```error``` in case of an error to the callback.

### {object}.merge(withId, [fn callback])
Merges the {object} with another object of the same kind with the ID given as ```withId```. Returns ```error``` in case of error to the callback. Merge is only supported for the following objects:
 * Persons
 * Organizations
 * Users

# Examples

## Get 15 first deals using the first deals filter

```
var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('PUT_YOUR_API_TOKEN_HERE');
var _ = require('underscore');

pipedrive.Filters.getAll({ type: 'deals' }, function(filtersListErr, filtersList) {

	if (filtersList.length > 0) {
		pipedrive.Deals.getAll({ filter_id: filtersList[0].get('id'), start: 0, limit: 15 }, function(dealsListErr, dealsList) {

			_.each(dealsList, function(deal) {
				console.log(deal.get('title') + ' (worth ' + deal.get('value') + ' ' + deal.get('currency') + ')');
			});

		})
	}

});
```

# Actions not supported

 * Attaching products to deals
 * Adding followers to deals/organizations/persons/users

# API Documentation

The Pipedrive REST API documentation can be found at https://developers.pipedrive.com/v1

# Licence

This Pipedrive API client is distributed under the MIT licence.

