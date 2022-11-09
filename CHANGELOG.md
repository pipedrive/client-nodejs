# Changelog
All notable changes to this project will be documented in this file.

The Changelog file gives an overview of all of the notable changes affecting the project.
The file format of it is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/), and the project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

For public Changelog covering all changes done to Pipedrive’s API, webhooks and app extensions platforms, see [public Changelog](https://pipedrive.readme.io/docs/changelog) with discussion area in [Developers Community](https://devcommunity.pipedrive.com/c/documentation/changelog/19).

## [Unreleased]
### Changed
- Updated `status` parameter description to explain that deals deleted more than 30 days ago will be deleted permanently
## 17.5.2
### Changed
- Updated endpoint descriptions to warn about permanently removing deleted entities:
  - `DELETE /activities`
  - `DELETE /activities/{id}`
  - `DELETE /deals`
  - `DELETE /deals/{id}`
  - `DELETE /files/{id}`
  - `DELETE /organizations`
  - `DELETE /organizations/{id}`
  - `DELETE /persons`
  - `DELETE /persons/{id}`
  - `DELETE /products/{id}`
- Updated `conditions` parameter description for `POST /filters` and `PUT /filters/{id}`

## 17.5.1
### Fixed
- Fixed custom field value (it should return null if the value is null)

## 17.5.0
### Changed
- Updated `type.params.pipeline_id` and `type.params.activity_type_id` description, type and response example for goals queries

## 17.4.0
### Changed
- Added `pipeline` and `stage` objects to the `related_objects` section in the following endpoints:
  - `GET /v1/deals`
  - `GET /v1/deals/{id}`
  - `GET /v1/organizations/{id}/deals`
  - `GET /v1/persons/{id}/deals`
  - `GET /v1/products/{id}/deals`
  - `POST /v1/deals`
  - `PUT /v1/deals/{id}`

## 17.3.1
### Changed
- Changed the content type to `application/json` in the following endpoints:
  - `POST /activityTypes`
  - `PUT /activityTypes/{id}`

## 17.3.0
### Changed
- Removed query `include_deleted_files` parameter for these endpoints based on this [post](https://developers.pipedrive.com/changelog/post/permanent-deletion-logic-for-6-core-entities)
  - `GET /files`
  - `GET /deals/{id}/files`
  - `GET /organizations/{id}/files`
  - `GET /persons/{id}/files`
  - `GET /products/{id}/files`

## 17.2.0
### Removed
- Removed deprecated endpoints that will be deleted:
  - `POST /users/{id}/roleAssignments`
  - `DELETE /users/{id}/roleAssignments`

## 17.1.5
### Changed
- Added and updated the descriptions of roles endpoints

## 17.1.4
### Changed
- Changed the content type to `application/json` in the following endpoints:
  - `DELETE /roles/{id}/assignments`
  - `POST /roles/{id}/settings`
  - `PUT /roles/{id}`
  - `POST /roles`
  - `POST /roles/{id}/assignments`
  - `PUT /users/{id}`

## 17.1.3
### Changed
- Updated `PUT /users/{:id}`: required parameter `active_flag` has no default value

## 17.1.2
### Changed
- Changed `PUT /goals/{id}` content type to `application/json`

## 17.1.1
### Changed
- Description for product requests

## 17.1.0
### Removed
- Removed deprecated endpoints that were deleted:
  - `GET /globalMessages`
  - `DELETE /globalMessages/{id}`

## 17.0.0
### Changed
- Updated `PUT /organizations/{id}`: parameter `name` is not required
- Updated `PUT /notes/{id}`: parameter `content` is not required
- Changed models related to the endpoints to reflect the changes

## 16.2.0
### Changed
- Removed `matches_filters` field from the POST `/deals` and PUT `/deals/{id}` endpoints response
- Description for `GET/v1/filters/helpers` endpoint
- Changed `POST /v1/users` request body type from `application/x-www-form-urlencoded` to `application/json`
- Added `access` field to responses from `GET /v1/users`, `GET /v1/users/{id}`, etc.
- Added optional `access` parameter and made `name` optional in `POST /v1/users`
- Added `app`, `type` and `description` fields to responses from `GET /v1/permissionSets` and `GET v1/permissionSets/{id}`
- Added optional `app` parameter to `GET /v1/permissionSets`
- Deprecated `is_admin` and `signup_flow_variation` fields in responses from `GET /v1/users`, `GET /v1/users/{id}`, etc.

## 16.1.0
### Added
- Added `person_id` and `organization_id` query parameters to GET `/v1/leads`

## 16.0.4
### Changed
- Description for api/v1/channels endpoints

## 16.0.3
### Fixed
- Fixed issue with custom monetary field currency

## 16.0.1
### Added
- Added restriction of maximum 16 conditions per filter.
### Changed
- Removed support for `NOT LIKE '%$%': does not contain, LIKE '%$': ends with, NOT LIKE '%$': does not end with` varchar and title filter conditions.

## 16.0.0
### Changed
- Changed `id` parameter data type to `string` for GET `/permissionSets/{id}` and GET `/permissionSets/{id}/assignments` endpoints
- Changed `id` field data type to `string` for response from GET `/permissionSets` and GET `/permissionSets/{id}` endpoints
- Changed `permission_set_id` field data type to `string` for response GET `/permissionSets/{id}/assignments` endpoints
- Removed `id` field from response for GET `/permissionSets/{id}/assignments` endpoints

## 15.0.3
### Changed
- Added deprecated flags to `GET /globalMessages` and `DELETE /globalMessages/{id}`

## 15.0.2
### Added
- Added `primary_email` field to response of `GET /v1/persons`, `GET /v1/persons/{id}` endpoints

## 15.0.1
### Changed
- Update the following dependencies:
  - `superagent`

## 15.0.0
### Fixed
- Renamed file with long name and it's class.

Old name:
  AnyOfRecentsActivityRecentsActivityTypeRecentsDealRecentsFileRecentsFilterRecentsNoteRecentsPersonRecentsOrganizationRecentsPipelineRecentsProductRecentsStageRecentsUser
New name:
  AnyOfRecents

## 14.0.1
### Fixed
- Updated `PUT /persons/{id}`: parameter `name` is not required

## 14.0.0
### Changed
- Moved `v1/teams*` endpoints to `v1/legacyTeams*` as they're being deprecated because we are preparing for an upgraded version of the Teams API, which requires migrating the current functionality to a new path URL `v1/legacyTeams*`.
  The functionality and [OAuth scopes](https://pipedrive.readme.io/docs/marketplace-scopes-and-permissions-explanations) of all the Teams API endpoints will remain the same.

## 13.3.4
### Changed
- Updated `PUT /productFields/{id}`: parameter `name` is not

## 13.3.3
### Changed
- Added babel/runtime to dependencies

## 13.3.2
### Changed
- Moved the following dependencies to devDependencies:
  - `@babel/cli`
  - `@babel/runtime`
  - `jest-environment-node`

## 13.3.1
### Fixed
- Date formatting in responses in the following entities and their respective fields:
  - **activities**: `due_date`
  - **deals**: `expected_close_date`
  - **leads**: `expected_close_date`
  - **subscriptions**: `due_at`, `start_date`, `end_date`

Those fields will be formatted as "2020-07-13" instead of "2020-07-13T00:00:00.000Z" in the request response.

## 13.3.0
### Added
- Added `GET /billing/subscriptions/addons` endpoint

## 13.2.9
### Changed
- Added missing oauth scopes to /products/{id}/permittedUsers endpoint

## 13.2.8
### Fixed
- Changed rotten_flag type to boolean in `StagesApi`

## 13.2.7
### Changed
- Added `everyone` parameter to `GET /v1/stages/{id}` endpoint
- Updated `/v1/deals` endpoint `stage_id` and added `pipeline_id` descriptions

## 13.2.6
### Changed
- Updated `POST /products`: parameter `name` is required
- Updated `PUT /deals/:dealId/products`: parameter `quantity` and `item_price` are required
- Updated `POST /deals/:dealId/products`: parameter `quantity` and `item_price` are required
-

## 13.2.5
### Changed
- Updated `POST /notes`: parameter `content` is required
- Updated `POST /organizations`: parameter `name` is required
- Updated `POST /persons`: parameter `name` is required
- Updated `DELETE /persons`: parameter `ids` is required
- Updated `visible_to` parameter for `POST /deals` and `PUT /deals/{id}` to include type `number`
- Updated `visible_to` parameter for `POST /persons` and `PUT /persons/{id}` to include type `number`
- Updated `visible_to` parameter for `POST /organizations` and `PUT /organizations/{id}` to include type `number`

## 13.2.4
### Fixed
- Added quotation marks to fix formatting for Organizations endpoint `visible_to` parameter
- Updated `prices` parameter description in Products endpoint

## 13.2.3
### Changed
- Update `visible_to` parameter for `POST /deals` and `PUT /deals/{id}`. Differentiate options by plans
- Update `visible_to` parameter for `POST /persons` and `PUT /persons/{id}`. Differentiate options by plans
- Update `visible_to` parameter for `POST /organizations` and `PUT /organizations/{id}`. Differentiate options by plans

## 13.2.1
### Fixed
- Fixed wrong field name normalization for custom fields keys

## 13.2.0
### Changed
- Deprecate /v1/mailbox/mailMessages/{id} & /v1/mailbox/mailThreads/{id} response data property write_flag

## 13.1.3
### Fixed
- Fix replaceCamelCaseObj is not defined reference issue in ApiClient

## 13.1.2
### Fixed
- Styling fixes: capitalization, tutorial links' texts, code-highlighting in descriptions

## 13.1.1
### Changed
- Changed person-related endpoints to include `marketing_status` body parameter: `POST /v1/persons`, `PUT /v1/persons/{id}`

## 13.1.0
### Fixed
- Fixed runtime error for `FilesApi.addFile`
- Fixed missing required parameters check
- Fixed camelCase support for application/json endpoints

## 13.0.12
### Fixed
- Fixed capitalization, punctuation, grammar, articles in all endpoint descriptions

## 13.0.11
### Added
- Added leadField to field_type options for `GET /v1/itemSearch/field`

## 13.0.10
### Fixed
- Fix `POST /organizationRelationships` 'required' labels not showing

## 13.0.9
### Added
- Added `tax` parameter on add product to the deal.
* POST /v1/deals/{id}/products
* PUT /v1/deals/{id}/products/{product_attachment_id}
- Improved `follower_id` description
* DELETE /v1/products/{id}/followers/{follower_id}

## 13.0.8
### Changed
- Improve Products `price` description

## 13.0.7
### Changed
- Changed/improve Products `visible_to` type, and differentiate options by plans
* POST /products
* PUT /products/{id}

## 13.0.6
### Fixed
- Fixed `POST /roles/{id}/settings` `value` parameter description
### Added
- Added type to `POST /roles/{id}/settings` `value` parameter
- Added description to `POST /roles/{id}/settings`

## 13.0.5
### Changed
- Changed Organization `custom_fields` type to a string array

## 13.0.4
### Fixed
- Fixed typo in `ids` query parameter description in GET /products

## 13.0.3
### Changed
- Changed/improved `subscription_url` body parameter description
* POST /webhooks

## 13.0.2
### Fixed
- Fixed items type for `email` and `phone` body parameters
* POST /persons

## 13.0.1
### Added
- Added `filter_id` to `GET /products` query parameters that was wrongfully removed in 0.1.18

## 13.0.0
### Removed
- Removed `int` type from `POST /v1/organizationFields` field_type values
- Removed `int` type from `POST /v1/personFields` field_type values
- Removed `int` type from `POST /v1/dealFields` field_type values

## 12.2.0
### Changed
- Changed notes and comments endpoints additional_data to match the correct pagination response
structure
* GET /notes
* GET /notes/:id/comments

## 12.1.0
### Removed
* Removed deprecated endpoints that were deleted:
  * GET /deals/find
  * GET /persons/find
  * GET /organizations/find
  * GET /products/find
  * GET /searchResults
  * GET /searchResults/field

## 12.0.3
### Changed
- Changed addDeal POST endpoint to include required person_id or org_id

## 12.0.2
### Fixed
* Use /api/v1 path when accessing the API using company domain

## 12.0.1
### Fixed
* Fixed UNKNOWN_BASE_TYPE error related to updateStage

## 12.0.0
### Added
* Support for endpoints added and updated endpoints changed after March 31, 2021
* Support for multiple instances [issue #176](https://github.com/pipedrive/client-nodejs/issues/176)
* Convenience functions regarding OAuth 2.0 lifecycle including `buildAuthorizationUrl`, `authorize` and `refreshToken`
* Support for changing the host URL [issue #228](https://github.com/pipedrive/client-nodejs/issues/228)
* Support for both snake_case and camelCase in request parameters
* `UpdateProductResponse` for `PUT /products/{id}`
* `Team` (singular) schema for endpoints that deal with a single team
* Support for custom fields for `Content-Type: application/x-www-form-urlencoded` type requests
* Added note field to call logs.
* Added pagination parameters documentation for endpoints:
  * api/v1/DealFields#getDealFields
  * api/v1/OrganizationFields#getOrganizationFields
  * api/v1/PersonFields#getPersonFields
  * api/v1/ProductFields#getProductFields
### Changed
* Changed POST/PUT for a lot of endpoints to accept `application/json` instead of `application/x-www-form-urlencoded`
* Added required fields to the OrganizationRelationship and Notes POST endpoints
* Updated `MailThreadPut` schema to represent `object` in response instead of an `array`
* Updated description for `MailThreadOne`
* Split `Product` schema into `BaseProduct` and `ProductWithArrayPrices` or `ProductWithObjectPrices` to represent `prices` property with `array` type and `object` type respectively
* Use the new `ProductWithObjectPrices` in `UpdateProductResponse`
* `TeamSuccess` response schema to refer to `Team` (singular) instead of `Teams` (plural)
* Extended `DELETE /calllogs/{id}` security with `api_key` property.
* Extended `POST /callLogs/{id}/recordings` security with `api_key` property.
* Extended `GET /v1/roles/{id}/settings` response with `lead_default_visibility` property.
* Extended `POST /v1/roles/{id}/settings` request payload with  `lead_default_visibility` property.
* Deleted `MailThreads` and `MailMessages` from API operation groups and combined them under `Mailbox` group.
* Extracted `LeadLabels` and `LeadSources` API operation groups from `Leads` group.
* Deleted `MailThreads` and `MailMessages` from API operation groups and combined them under `Mailbox` group.
* Extracted `LeadLabels` and `LeadSources` API operation groups from `Leads` group.
* Updated documentation for search endpoint: include Lead as one of the possible returned entities in related objects
* Changed POST /v1/webhooks to accept `application/json` instead of `application/x-www-form-urlencoded` to reflect the reality
### Removed
* Deleted deprecated `note` field from all lead related documents.
* Deleted unused files (copied latest auto-generated version)
### Fixed
* Fixed GET /goals/:id/results `period.start` parameter description with specified possible dates
* Fixed GET /goals/:id/results `period.end` parameter description with specified possible dates
* Fixed `GET /goal/:id/results` error handling in cases when period.start or period.end dates are out of possible range
* Fixed `GET /goal/:id/results` error handling in case when there are no existing stages connected to specified goal
* Fixed typo in lead example response (`crrency` to `currency`)

[Unreleased]: https://github.com/pipedrive/api-docs/compare/v1.0.0...HEAD
