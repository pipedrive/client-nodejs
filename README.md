# Pipedrive client for NodeJS based apps

[![NPM version](https://badge.fury.io/js/pipedrive.svg)](http://badge.fury.io/js/pipedrive) [![Build Status](https://travis-ci.org/pipedrive/client-nodejs.svg)](https://travis-ci.org/pipedrive/client-nodejs)

Pipedrive is a sales pipeline software that gets you organized. It's a powerful sales CRM with effortless sales pipeline management. See www.pipedrive.com for details.

This is the official Pipedrive API wrapper-client for NodeJS based apps, distributed by Pipedrive Inc freely under the MIT licence. It provides you with basic functionality for operating with objects such as Deals, Persons, Organizations, Products and much more, without having to worry about the underlying networking stack and actual HTTPS requests.

# Install

```
npm install pipedrive
```

# Usage

With a pre-set API token:
```js
var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('YOUR_API_TOKEN_HERE', { strictMode: true });
```

# A simple "Hello world" that lists some deals

Here's a quick example that will list some deals from your Pipedrive account:

```js
var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('YOUR_API_TOKEN_HERE', { strictMode: true });

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
 * Files
 * Filters
 * Notes
 * Organizations
 * OrganizationFields
 * Persons
 * PersonFields
 * Pipelines
 * Products
 * ProductFields
 * SearchResults
 * Stages
 * Users

# Authorization against email and password

### Pipedrive.authenticate({ email: 'john@doe.com', password: 'example' }, [fn callback]);
Fetches the possible API tokens for the given user against email and password, passing ```error, data, additionalData``` to the callback function. You can use the API tokens returned by this method to instantiate the API client by issuing ```var pipedrive = new Pipedrive.Client('API_TOKEN_HERE', { strictMode: true })```.

# Supported operations for object collections

### pipedrive.{Object}.add (data, [fn callback])
Add an object. Returns ```error, data``` to the callback where data contains the ```id``` property of the newly created item.

### pipedrive.{Object}.get (id, [fn callback])
Get specific object. Returns ```error, object```

### pipedrive.{Object}.update (id, data, [fn callback])
Update an object. Returns ```error``` in case of an error to the callback.

### pipedrive.{Object}.getAll (params, [fn callback])
Get all objects, optionally passing additional parameters (such as ```filter_id``` in case of deals, persons and organizations). Returns ```error, objects``` to the callback function where objects is a collection (array) of objects.

### pipedrive.{Object}.remove (id, [fn callback])
Delete an object with a specifc ID. Returns ```error``` in case of an error to the callback.

### pipedrive.{Object}.removeMany ([Array ids], [fn callback])
Delete multiple objects using an array of IDs. Returns ```error``` in case of an error to the callback.

### pipedrive.{Object}.merge (whichId, withId, [fn callback])
Merge two objects of the same kind. Returns ```error``` in case of an error to the callback. Merge is only supported for the following objects:
 * Persons
 * Organizations

### pipedrive.{Object}.find (params, [fn callback])
Find objects of certain kind by their name/title, using `term` property supplied inside params object. Supported for:
 * Deals
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

# Operations with nested objects

## Adding a product to a deal

To add a product to a deal, simply invoke the ```addProduct``` method on a deal object.
```js
pipedrive.Deals.get(1, function(err, deal) {
	if (err) throw err;
	deal.addProduct({ product_id: 1, quantity: 5, discount: 20 }, function(addErr, addData) {
		if (addErr) throw addErr;
		console.log('Product 1 was added to deal 1', addData);
	});
})
```
## You can add multiple products with a single request, too.

To add multiple products with a single request, make the first argument of deal's ```addProduct``` method (as shown above) an array, e.g. ```[{ product_id: 1, quantity: 5, discount: 0 }, { product_id: 1, quantity: 2, discount: 20 }]```. This will add two product rows to a deal — one with a quantity of 5 and with no discount, the latter will add a separate row for the same product but with a quantity of 2 and no discount.

## Updating a deal product
```js
pipedrive.Deals.get(deal_id, function(err, deal) {
	if (err) throw err;
	deal.getProducts(function(productsErr, attachedProducts) {
		if (productsErr) throw productsErr;
		attachedProducts.forEach(function(attachedProduct) {
			deal.updateProduct({ id: attachedProduct.id, quantity: 5, discount: 20  }, function(updateErr, updateData) {
				if (updateErr) throw updateErr;
                console.log('Product was updated', updateData);
			});
		});
	});
})
```

Updating multiple deal products in one request is not supported yet.


## Delete a product from a deal
```js
pipedrive.Deals.get(deal_id, function(err, deal) {
	if (err) throw err;
	deal.getProducts(function(productsErr, attachedProducts) {
		if (productsErr) throw productsErr;
		attachedProducts.forEach(function(attachedProduct) {
			deal.deleteProduct({ id: attachedProduct.id }, function(removeErr, removeSuccess) {
				if (!removeErr) console.log('Removed product ' + attachedProduct.product_id + ' from deal 1');
			});
		});
	});
})
```

## Search for field value matches

There is an additional method to perform the `SearchResults/field` search. This can be used for field-value searches.

The following example searches for deals that match the condition where `org_id=123`

```js
pipedrive.SearchResults.field({
	term: "123",
	exact_match: true,
	field_key: "org_id",
	field_type: "dealField",
	return_item_ids: true
}), callback);
```

 * **term** — the string you are searching for from field values
 * **exact_match** (optional, default false) — whether the term you supply is the entire and exact match you are looking for (if set to false, partial results are also considered a match)
 * **field_key** — name of the field you are searching from
 * **field_type** — type of the field you are searching from (supported types: dealField, personField, organizationField, productField)
 * **return_item_ids** (optional, default false) — if set to true, individual items that have the matching term in the given field are given; if set to false, the different distinct values that match your search term across all different values in the gievn field are given. Usually you would want this to be set to true. However, for searching across autocomplete_text type fields (such as lost_reason of dealFields), you might want to show different values that pre-exist already.
 * **start** (optional, default 0) – results pagination start
 * **limit** (optional, default 100) — results pagination limit

## Retrieve all records for a given object type:

You can request all entries for an valid object using `getAll(object, callback)`

```js
pipedrive.getAll('Organizatons', function (err, collection) {
	// collection contains all Organizations
});

pipedrive.getAll('Persons', function (err, collection) {
	// collection contains all Persons
});
```

# Examples

## Get 15 first deals using the first deals filter

```js
var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('PUT_YOUR_API_TOKEN_HERE', { strictMode: true });

pipedrive.Filters.getAll({ type: 'deals' }, function(filtersListErr, filtersList) {

	if (filtersList.length > 0) {
		pipedrive.Deals.getAll({ filter_id: filtersList[0].get('id'), start: 0, limit: 15 }, function(dealsListErr, dealsList) {

			dealsList.forEach(function(deal) {
				console.log(deal.get('title') + ' (worth ' + deal.get('value') + ' ' + deal.get('currency') + ')');
			});

		})
	}

});
```

# Ad hoc data change event listeneres (beta)

The API client lets you create event listeners to specific data changes in your Pipedrive account. This is very similar to Webhooks, except the listeners are bound on an ad hoc basis and will only be executed during the lifecycle of your application. For example (see below) you may want to execute a callback every time a new deal is added to Pipedrive. Note that this callback will execute not only when you create the deal through this API client but regardless of where the deal was added from — a mobile app, the web app or through the Pipedrive API by some other integration.

```js
var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('PUT_YOUR_API_TOKEN_HERE', { strictMode: true });

pipedrive.on('deal.added', function(event, data) {
	console.log('A deal was added! ' + data.current.title + ' (' + data.current.value + ' ' + data.current.currency + ')');
});
```

Supported event names consist of object type (deal, person, organization, ...) and type of change (`added`, `deleted`, `updated` or `merged`), joined by a dot. The list of supported object types are listed in the [Pipedrive Webhooks documentation](https://app.pipedrive.com/webhooks).

To read more about ad hoc data change event listeners, check out [examples/live-updates.js](examples/live-updates.js).

# API Documentation

The Pipedrive REST API documentation can be found at https://developers.pipedrive.com/v1

#Testing
To run unit tests, execute `npm run tests`

# Licence

This Pipedrive API client is distributed under the MIT licence.

