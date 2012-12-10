# Pipedrive API client for NodeJS based apps

This is the official Pipedrive API wrapper/client for NodeJS apps, distributed by Pipedrive Inc free under the MIT licence. It provides you with basic functionality for operating with objects such as Deals, Persons, Organizations, Products and much more, without having to worry about the underlying networking stack and actual HTTPS requests.

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

### pipedrive.{Object}.remove (id, [fn callback])
Delete an object with a specifc ID. Returns ```error``` in case of an error to the callback.

### pipedrive.{Object}.removeMany ([Array ids], [fn callback])
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

# Operations with nested objects

## Adding a product to a deal

To add a product to a deal, simply invoke the ```addProduct``` method on a deal object.
```
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

## Remove a product from a deal
```
pipedrive.Deals.get(1, function(err, deal) {
	if (err) throw err;
	deal.getProducts(function(productsErr, attachedProducts) {
		if (productsErr) throw productsErr;
		_.each(attachedProducts, function(attachedProduct) {
			deal.removeProduct({ id: attachedProduct.id }, function(removeErr, removeSuccess) {
				if (!removeErr) console.log('Removed product ' + attachedProduct.product_id + ' from deal 1');
			});
		});
	});
})
```

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

