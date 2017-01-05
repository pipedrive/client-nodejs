/**
 * This file contains the blueprints for the API client library
 * which are loaded and from which the client bootstraps itself
 * dynamically.
 */

// Main REST objects with which the client can interact with.
// Scoped in API under /v1/{objectName} standard namespaces.
exports.apiObjects = [
	'activities',
	'activityTypes',
	'authorizations',
	'companyFeatures',
	'companySettings',
	'currencies',
	'deals',
	'dealFields',
	'emailThreads',
	'files',
	'filters',
	'goals',
	'notes',
	'organizations',
	'organizationFields',
	'permissionSets',
	'persons',
	'personFields',
	'pipelines',
	'products',
	'productFields',
	'pushNotifications',
	'roles',
	'searchResults',
	'stages',
	'users'
];

// Main sub-objects grouped by main REST objects.
// Scoped in API under /v1/{mainObject}/{id}/{subObjects}
exports.apiRelatedObjects = {
	'deals': [
		'activities',
		'products',
		'participants',
		'files',
		'updates',
		'followers',
		'notes'
	],
	'persons': [
		'activities',
		'products',
		'files',
		'updates',
		'deals',
		'followers',
		'notes'
	],
	'organizations': [
		'activities',
		'products',
		'files',
		'updates',
		'deals',
		'persons',
		'followers',
		'notes'
	],
	'pipelines': [
		'deals'
	],
	'stages': [
		'deals'
	],
	'products': [
		'deals'
	],
	'users': [
		'activities',
		'followers',
		'updates'
	],
	'emailThreads': [
		'messages'
	],
	"permissionSets": [
		'assignments'
	],
	'goals': [
		'results'
	]
};

// Custom field types
exports.supportedFieldTypes = ['dealField', 'personField', 'organizationField', 'productField'];

// Sub-objects which are not exposed as main objects
exports.selfManagedRelatedObjects = ['followers'];

// Object types which are searchable
exports.searchableObjects = ['organizations', 'deals', 'persons', 'products', 'users'];

// Object types which support timeline APIs
exports.timelineableObjects = ['deals'];

// Sub-object types which are editable and have their own properties
exports.editableSubItems = {
	'deals': ['products', 'followers', 'participants'],
	'organizations': ['followers'],
	'persons': ['followers']
};

// Main object types that support merging action via the API.
exports.mergeableObjects = ['persons', 'organizations', 'deals'];

// Special object types which unique values can be searched using the searchResults/field APIs.
// This is used for, among other things, custom deal lost reasons, also autocomplete textfield
// type custom fields.
exports.objectsSupportingFieldValueSearch = ['searchResults'];
