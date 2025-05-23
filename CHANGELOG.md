# Changelog
All notable changes to this project will be documented in this file.

The Changelog file gives an overview of all of the notable changes affecting the project.
The file format of it is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/), and the project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

For public Changelog covering all changes done to Pipedrive’s API, webhooks and app extensions platforms, see [public Changelog](https://pipedrive.readme.io/docs/changelog) with discussion area in [Developers Community](https://devcommunity.pipedrive.com/c/documentation/changelog/19).

## [Unreleased]
### Fixed
- Fixed the OAuth scopes of Deal to Lead conversion and Lead to Deal conversion endpoints

## [27.1.0] - 2025-05-23
### Added
- Added `smart_bcc_email` to optional `include_fields` in Deals API v2

## [27.0.1] - 2025-05-23
### Added
- Added `is_archived` to request bodies of POST `deals` endpoints and PUT/PATCH `/deals/:id` endpoints
- Added `archive_time` to request bodies of POST `deals` endpoints

## [27.0.0] - 2025-05-09
### Changed
- Send token in the `x-api-token` header instead of `api_token` query parameter

## [26.0.0] - 2025-05-07
### Fixed
- Fixed the OAuth scope of "Add a follower to a product" endpoint in API v2
### Added
- Added `creator_user_id` to responses of Activities v2 endpoints
- Added `marketing_status` documentation to Persons v2 endpoints
- Added archived deals/leads endpoints:
  - `GET /v1/deals/archived`
  - `GET /v2/deals/archived`
  - `GET /v1/deals/timeline/archived`
  - `GET /v1/deals/summary/archived`
  - `GET /v1/leads/archived`
- Added `is_archived` and `archive_time` properties to deals endpoints response
- Added option to use `sort_by=due_date` sorting for `GET /api/v2/activities`
- Added option to use `done=true/false` quick filter for `GET /api/v2/activities`
- Added `project_id` and `pinned_to_project_flag` query parameter to the GET `/notes` endpoint
- Added `project_id` and `pinned_to_project_flag` request bodies to the POST/PUT `/notes` endpoint
- Added `project_id` and `pinned_to_project_flag` to success responses of GET/POST/PUT
### Changed
- Deprecated `GET /v1/activities` in favor of `GET /api/v2/activities`
- Deprecated `GET /v1/activities/collection` in favor of `GET /api/v2/activities`
- Deprecated `GET /v1/activities/{id}` in favor of `GET /api/v2/activities/{id}`
- Deprecated `POST /v1/activities` in favor of `POST /api/v2/activities`
- Deprecated `PUT /v1/activities/{id}` in favor of `PATCH /api/v2/activities/{id}`
- Deprecated `DELETE /v1/activities/{id}` in favor of `DELETE /api/v2/activities/{id}`
- Deprecated `DELETE /v1/activities` in favor of `DELETE /api/v2/activities/{id}`
- Deprecated `GET /v1/deals` in favor of `GET /api/v2/deals`
- Deprecated `GET /v1/deals/collection` in favor of `GET /api/v2/deals`
- Deprecated `GET /v1/deals/{id}` in favor of `GET /api/v2/deals/{id}`
- Deprecated `GET /v1/deals/search` in favor of `GET /api/v2/deals/search`
- Deprecated `POST /v1/deals` in favor of `POST /api/v2/deals`
- Deprecated `PUT /v1/deals/{id}` in favor of `PATCH /api/v2/deals`
- Deprecated `DELETE /v1/deals/{id}` in favor of `DELETE /api/v2/deals/{id}`
- Deprecated `DELETE /v1/deals` in favor of `DELETE /api/v2/deals/{id}`
- Deprecated `GET /v1/deals/{id}/activities` in favor of `GET /api/v2/activities?deal_id={id}`
- Deprecated `GET /v1/deals/{id}/persons` in favor of `GET /api/v2/persons?deal_id={id}`
- Deprecated `GET /v1/persons` in favor of `GET /api/v2/persons`
- Deprecated `GET /v1/persons/collection` in favor of `GET /api/v2/persons`
- Deprecated `GET /v1/persons/{id}` in favor of `GET /api/v2/persons/{id}`
- Deprecated `GET /v1/persons/search` in favor of `GET /api/v2/persons/search`
- Deprecated `POST /v1/persons` in favor of `POST /api/v2/persons`
- Deprecated `PUT /v1/persons/{id}` in favor of `PATCH /api/v2/persons/{id}`
- Deprecated `DELETE /v1/persons/{id}` in favor of `DELETE /api/v2/persons/{id}`
- Deprecated `DELETE /v1/persons` in favor of `DELETE /api/v2/persons/{id}`
- Deprecated `GET /v1/persons/{id}/deals` in favor of `GET /api/v2/deals?person_id={id}`
- Deprecated `GET /v1/persons/{id}/activities` in favor of `GET /api/v2/activities?person_id={id}`
- Deprecated `GET /v1/organizations` in favor of `GET /api/v2/organizations`
- Deprecated `GET /v1/organizations/collection` in favor of `GET /api/v2/organizations`
- Deprecated `GET /v1/organizations/{id}` in favor of `GET /api/v2/organizations/{id}`
- Deprecated `GET /v1/organizations/search` in favor of `GET /api/v2/organizations/search`
- Deprecated `POST /v1/organizations` in favor of `POST /api/v2/organizations`
- Deprecated `PUT /v1/organizations/{id}` in favor of `PATCH /api/v2/organizations/{id}`
- Deprecated `DELETE /v1/organizations/{id}` in favor of `DELETE /api/v2/organizations/{id}`
- Deprecated `DELETE /v1/organizations` in favor of `DELETE /api/v2/organizations/{id}`
- Deprecated `GET /v1/organizations/{id}/deals` in favor of `GET /api/v2/deals?org_id={id}`
- Deprecated `GET /v1/organizations/{id}/activities` in favor of `GET /api/v2/activities?org_id={id}`
- Deprecated `GET /v1/organizations/{id}/persons` in favor of `GET /api/v2/persons?org_id={id}`
- Deprecated `GET /v1/products` in favor of `GET /api/v2/products`
- Deprecated `GET /v1/products/{id}` in favor of `GET /api/v2/products/{id}`
- Deprecated `GET /v1/products/search` in favor of `GET /api/v2/products/search`
- Deprecated `POST /v1/products` in favor of `POST /api/v2/products`
- Deprecated `PUT /v1/products/{id}` in favor of `PATCH /api/v2/products/{id}`
- Deprecated `DELETE /v1/products/{id}` in favor of `DELETE /api/v2/products/{id}`
- Deprecated `GET /v1/pipelines` in favor of `GET /api/v2/pipelines`
- Deprecated `GET /v1/pipelines/{id}` in favor of `GET /api/v2/pipelines/{id}`
- Deprecated `POST /v1/pipelines` in favor of `POST /api/v2/pipelines`
- Deprecated `PUT /v1/pipelines/{id}` in favor of `PATCH /api/v2/pipelines/{id}`
- Deprecated `DELETE /v1/pipelines/{id}` in favor of `DELETE /api/v2/pipelines/{id}`
- Deprecated `GET /v1/stages` in favor of `GET /api/v2/stages`
- Deprecated `GET /v1/stages/{id}` in favor of `GET /api/v2/stages/{id}`
- Deprecated `POST /v1/stages` in favor of `POST /api/v2/stages`
- Deprecated `PUT /v1/stages/{id}` in favor of `PATCH /api/v2/stages/{id}`
- Deprecated `DELETE /v1/stages/{id}` in favor of `DELETE /api/v2/stages/{id}`
- Deprecated `DELETE /v1/stages` in favor of `DELETE /api/v2/stages/{id}`
- Deprecated `GET /v1/itemSearch` in favor of `GET /api/v2/itemSearch`
- Deprecated `GET /v1/itemSearch/field` in favor of `GET /api/v2/itemSearch/field`
- Updated non archived deals/leads endpoint description to specify that following endpoints do not return archived items:
  - `GET /v1/deals`
  - `GET /v2/deals`
  - `GET /v1/deals/timeline`
  - `GET /v1/deals/summary`
  - `GET /v1/leads`
- Removed deprecated `archived_status` query parameter from leads endpoints

## [25.0.0] - 2025-03-31
### Changed
- Updated `item_price` field data type in products from integer -> number for products and deal products
### Fixed
- Added missing `partnership` value for user access apps list

### Added
- Notice informing the users of the upcoming Subscriptions API deprecation:
  - `GET /v1/subscriptions/{id}`
  - `GET /v1/subscriptions/find/{dealId}`
  - `GET /v1/subscriptions/{id}/payments`
  - `POST /v1/subscriptions/recurring`
  - `POST /v1/subscriptions/installment`
  - `PUT /v1/subscriptions/recurring/{id}`
  - `PUT /v1/subscriptions/installment/{id}`
  - `PUT /v1/subscriptions/recurring/{id}/cancel`
  - `DELETE /v1/subscriptions/{id}`

### Changed
- Updated Webhooks endpoints to v2, including available event_action and event_object properties

## [24.2.0] - 2025-03-12
### Added
- Added `GET /v2/deals/installments` endpoint to fetch all installments added to a list of deals with cursor pagination
- Added `POST /v2/deals/{id}/installments` endpoint to add an installment to a deal
- Added `PATCH /v2/deals/{id}/installments/{installment_id}` endpoint to edit an installment
- Added `DELETE /v2/deals/{id}/installments/{installment_id}` endpoint to delete an installment
- Added AdditionalData to v2 modals

## [24.1.1] - 2025-02-11
### Fixed
- Updated supported enum values for webhook types in the `GET /webhooks` endpoint

## [24.1.0] - 2025-02-06
### Added

- Added “pipeline_id” query parameter to GET /api/v1/deals/summary endpoint

### Changed

- Updated list of lead label colors to include 'brown', 'dark-gray', 'orange', 'pink'

## [24.0.0] - 2025-01-30
### Added

- Introduced a new client-nodejs library with full TypeScript support
- Added compatibility for both API v1 and v2 endpoints. See migration guide for more details
- Add documentation for installments functionality:
  - `POST` `/v1/deals/{id}/products` endpoint
  - `PUT` `/v1/deals/{id}/products/{product_attachment_id}` endpoint
  - `DELETE` `/v1/deals/{id}/products/{product_attachment_id}` endpoint
  - `POST` `/v2/deals/{id}/products` endpoint
  - `PATCH` `/v2/deals/{id}/products/{product_attachment_id}` endpoint
  - `DELETE` `/v2/deals/{id}/products/{product_attachment_id}` endpoint
- Added the field “notes” to product prices in the body and response for v1 and v2
- Added the field “overhead_cost” to the product variation prices in the response for v1
- Added the field “direct_cost” to the product variation prices in the response and body for v2
- Add “custom_fields” query paremeter to GET /api/v2/products

### Changed

- Reduce maximum `limit` query param to 100 for the following endpoints
  - GET v1/files
  - GET v1/deals/{id}/files
  - GET v1/organizations/{id}/files
  - GET v1/persons/{id}/files
  - GET /v1/products/{id}/files

## [23.4.3] - 2024-11-22
### Added
- Add "additionalProperties" to entities with custom fields
### Changed
- Updated the code examples in the README for the JavaScript SDK
### Added
- Add "custom_fields" query paremeter to GET /api/v2/products

## [23.4.2] - 2024-10-31
### Changed
- Updated the code examples in the README for the JavaScript SDK
### Added
- Add "custom_fields" query paremeter to GET /api/v2/products

## [23.4.1] - 2024-10-09

### Changed
- Migrate publish flow from Jenkins to GitHub Actions
- Add devops-tooling as owner for .github/workflows/cicd_*

## [23.4.0] - 2024-09-24
### Changed
- Added the field "notes" to product prices in the body and response for v1 and v2
- Added the field "overhead_cost" to the product variation prices in the response for v1
- Added the field "direct_cost" to the product variation prices in the response and body for v2

## [23.3.0] - 2024-09-23
### Added
- Add documentation for installments functionality:
  - `POST` `/v1/deals/{id}/products` endpoint
  - `PUT` `/v1/deals/{id}/products/{product_attachment_id}` endpoint
  - `DELETE` `/v1/deals/{id}/products/{product_attachment_id}` endpoint
  - `POST` `/v2/deals/{id}/products` endpoint
  - `PATCH` `/v2/deals/{id}/products/{product_attachment_id}` endpoint
  - `DELETE` `/v2/deals/{id}/products/{product_attachment_id}` endpoint

## [23.2.6] - 2024-09-06
### Fixed
- Deleted unused file with long name

## [23.2.5] - 2024-08-27
### Fixed
- Updated default values for "billing_frequency_cycles", "billing_start_date" fields

## [23.2.4] - 2024-08-13
### Fixed
- Added "filter_id" to GET /api/v2/deals documentation

## [23.2.3] - 2024-08-12
### Fixed
- Fix "label_ids" field formatting.

## [23.2.2] - 2024-08-07
### Fixed
- Added the missing "label_ids" field to the contacts endpoints.

## [23.2.1] - 2024-08-01
### Fixed
- Added missing "description" parameter to "Add a product" and "Update a product" endpoints

## [23.2.0] - 2024-07-25
### Added
- Notice informing the users of the upcoming Activity Invites feature deprecation:
  - `POST` and `PUT` `/v1/activities` endpoints

## [23.1.0] - 2024-07-03
### Added
- Added `notes` field to Prices in:
  - `GET` and `POST` `/v2/products/{productId}/variations` endpoints
  - `PATCH` `/api/v2/products/{productId}/variations/{productVariationId}` endpoint

## [23.0.0] - 2024-06-14
### Removed
- Removed request and response fields `duration` and `duration_unit` for all endpoints of deals and products using them

## [22.10.1] - 2024-06-07
### Removed
- Cleanup unused company settings

## [22.10.0] - 2024-06-07
### Added
Added `acv`, `mrr`, `arr`, `acv_currency`, `mrr_currency`, and `arr_currency` to the BaseDeal entity and the following endpoints' response:
- `GET`, `POST` `/v1/deals`
- `GET`, `PUT` `/v1/deals/{id}`
- `GET` `/v1/deals/timeline`
- `PUT` `/v1/deals/{id}/merge`
- `POST` `/v1/deals/{id}/duplicate`

## [22.9.0] - 2024-05-30
### Fixed
- Documentation for response models: changed property names to snake_case instead of camelCase

## [22.8.2] - 2024-05-29
### Fixed
- Fixed documentation: property `value` of Lead is nullable.

## [22.8.1] - 2024-05-29
### Removed
- Removed mention of address autocompletion by Google in Add Activites endpoint and other entities(organization, person, deal) fields.

## [22.8.0] - 2024-05-21
### Added
- Added `origin`, `origin_id`, `channel` and `channel_id` parameters representing the Source for Lead and Deal entity.

## [22.7.0] - 2024-05-14
### Added
- Added `billing_frequency`, `billing_frequency_cycles` and `billing_start_date` fields to
  - `GET`, `POST` and `PUT` `/v1/deals/{id}/products` endpoints
  - `GET`, `POST` and `PATCH` `/v2/deals/{id}/products` endpoints
  - `GET` `/v2/deals/products` endpoint
- Added `billing_frequency`, `billing_frequency_cycles` fields to
  - `GET`, `POST` and `PUT` `/v1/products` endpoints
  - `GET` `/v1/products/{id}` endpoint
  - `GET`, `POST` and `PATCH` `/v2/products` endpoints
  - `GET` `/v2/products/{id}` endpoints

## [22.6.1] - 2024-04-18
### Added
- Added `is_deleted` parameter for `/v1/users/*` responses.

## [22.6.0] - 2024-04-05
### Added
- Added documentation for new endpoints `/deals/{id}/changelog`, `/persons/{id}/changelog` and `/organizations/{id}/changelog`.

## [22.5.0] - 2024-02-02
### Added
- Added documentation for new endpoint `/deals/{id}/participantsChangelog`.

## [22.4.0] - 2024-01-05
### Added
- Added documentation for `/meetings/userProviderLinks` endpoints

## [22.3.0] - 2023-10-17
- Add `Projects`, `ProjectTemplates` and `Tasks` public routes.

## [22.2.0] - 2023-10-11
### Changed
- Changed node version in .nvmrc and fixed vulnerable dependencies

## [22.1.0] - 2023-10-11
### Fixed
- Incorrect type of `options`  for the `POST and PUT /dealFields, /personFields and /organizationFields` endpoints

### Added
- Documented `label` parameter for the deal, person, org entities.

## [22.0.2] - 2023-09-12
### Fixed
- Fixed incorrect response schema for the `GET /deals/{id}/products` endpoint

## [22.0.1] - 2023-09-12
### Changed
- Added further details on behavior of `end_date` for `PUT /v1/subscriptions/recurring/{id}/cancel`

## [22.0.0] - 2023-08-30
### Removed
- Removed request and response fields `sum_no_discount` for `GET /deals/{id}/products`, `POST /deals/{id}/products` and `PUT /deals/{id}/products/{product_attachment_id}`

## [21.2.0] - 2023-08-22
### Fixed
- Fixed incorrect parameter descriptions for the `PUT /deals/{id}` endpoint

## [21.1.0] - 2023-07-28
### Added
- Added `GET /organizations/collection` endpoint to fetch all organizations with cursor pagination
- Added `GET /persons/collection` endpoint to fetch all persons with cursor pagination

## [21.0.0] - 2023-07-27
### Fixed
- Variable name in the "Complete example" paragraph in the README

## [20.5.2] - 2023-07-19
### Fixed
- Variable name in the "Complete example" paragraph in the README

## [20.5.1] - 2023-07-18
### Changed
- Added list of searchable custom field types to persons, organizations, products and deals search endpoints descriptions.

## [20.5.0] - 2023-07-17
### Added
- `deprecated_operators` field to `GET /filters/helpers` endpoint response

## [20.4.0] - 2023-07-13
### Changed
- Changed `product_id` body parameter to be optional for Update Deal Product endpoint

## [20.3.0] - 2023-06-13
### Changed
- Schemas for `call-logs` as they only included `base-response` without additional properties in the response schema

## [20.2.0] - 2023-06-13
### Changed
- Schemas for `call-logs` as they only included `base-response` without additional properties in the response schema

## [20.1.1] - 2023-06-05
### Removed
- `enum` keyword from boolean schema attributes as its possible values are not the string type

## [20.1.0] - 2023-06-05
### Changed
- Update the paths to DealStrict and DealNonStrict schemas

## [20.0.2] - 2023-05-23

## [20.0.1] - 2023-05-23
### Changed
- Updated README.md file: fixed documentation links, added content table

## [20.0.0] - 2023-05-22
### Removed

Based on this [Changelog post](https://developers.pipedrive.com/changelog/post/removal-of-codevariations_enabledcode-response-field-from-codeget-dealsidproductscode):

- Removed `variations_enabled` response field from `GET /deals/{id}/products`

## [19.1.0] - 2023-04-27
### Added
- Added `revokeToken` function to the sdk. With this function you can revoke an access token or refresh token (mark an app as uninstalled).

## [19.0.1] - 2023-04-27
### Changed
- Updated `label` field data type in response examples from number -> string for Deals related endpoints
  Changed `active_flag`, `enabled_flag`, and `selectable` body parameters and response examples data type from number -> boolean for all Products related endpoints

## [19.0.0] - 2023-04-04
### Removed
Based on this [Changelog post](https://developers.pipedrive.com/changelog/post/breaking-changes-in-4-products-related-endpoints):
- Removed non product-related fields from the response of `GET /products/{id}/files`
- Removed `product_attachment_id` response field from `POST /deals/{id}/products` and `DELETE /deals/{id}/products/{product_attachment_id}`
- Removed mistakenly documented pagination fields from `GET /products/{id}/permittedUsers`
- Removed `item_price` and `quantity` as required request fields from `PUT /deals/{id}/products/{product_attachment_id}`
### Changed
Based on this [Changelog post](https://developers.pipedrive.com/changelog/post/breaking-changes-in-4-products-related-endpoints):
- Updated the `sort` query parameter for `GET /products/{id}/files` to only support `id` and `update_time` field keys
- For `PUT /deals/{id}/products/{product_attachment_id}`: parameters `item_price` and `quantity` are not required
- Changed `active_flag`, `enabled_flag`, and `selectable` body parameters and response examples data type from number -> boolean for all Products related endpoints
### Added
- Added an optional `duration_unit` body parameter for `PUT /deals/{id}/products/{product_attachment_id}` and `POST /deals/{id}/products`
- Added `GET /leads/:id/permittedUsers` endpoint to retrieve the users that have access to a certain lead
- Added the `version` body parameter to `POST /webhooks` endpoint
- Added pagination parameters documentation for `GET /stages` endpoint
- Added `GET /roles/:id/pipelines` endpoint to get pipelines visibility for a role
- Added `PUT /roles/:id/pipelines` endpoint to update pipelines visibility for a role
- Added `GET /activities/collection` endpoint to fetch all activities with cursor pagination
- Added `GET /deals/collection` endpoint to fetch all deals with cursor pagination

## [18.1.4] - 2023-02-13
### Removed
- Removed `name` body parameter from `POST /v1/users` based on this [post](https://developers.pipedrive.com/changelog/post/removal-of-fields-from-users-api).

## [18.1.3] - 2023-02-08
### Fixed
- Updated `limit` description for `GET /v1/callLogs`
- Updated `activity_id` description for `POST /v1/callLogs`
- Added `next_start` field in the `GET /v1/callLogs` response example

## [18.1.2] - 2023-02-02
### Fixed
- Added missing OAuth scopes for PermissionSets, Roles, and Users API endpoints

## [18.1.1] - 2023-01-25
### Fixed
- Updated `user_id` description for `POST /webhooks/`
### Fixed
- Adds support for snake_case query params reported in pipedrive/client-nodejs#410

## [18.1.0] - 2023-01-20
### Changed
- Removed `location_lat` and `location_long` fields from the following endpoints activity details response:
  - GET /v1/activities
  - GET /v1/activities/{id}
  - POST /v1/activities
  - PUT /v1/activities/{id}

### Fixed
- Fixed a typo in `GET /itemSearch/field`
- Fixed mistakenly documented response field for `GET /v1/deals/{id}/followers` from `person_id` to `deal_id`.

### Added
- Optional `lead_id` parameter to `POST /v1/files`
- `lead_id` and `lead_name` to the `/v1/files` endpoints

### Removed
- Removed deprecated endpoints that will be deleted:
  - `GET /roles/{id}/roles`
- Removed `followers_count` from Product-related entities and endpoints based on this [post](https://developers.pipedrive.com/changelog/post/removal-of-codefollowers_countcode-response-field-from-products-endpoints-and-webhook). Changing the following endpoints:
  - GET /deals/{id}/products
  - GET /products
  - GET /products/{id}
  - POST /products
  - PUT /products/{id}

## [18.0.3] - 2023-01-11
### Updated dependencies
- Updated `json5` from 2.2.1 to 2.2.3
- Updated `qs` from 6.9.3 to 6.11.0
- Updated `formidable` from 2.0.1 to 2.1.1
- Updated `decode-uri-component` from 0.2.0 to 0.2.2
- Updated `minimatch` from 3.0.4 to 3.1.2
- Updated `mocha` from 8.4.0 to 10.1.0

## [18.0.2] - 2022-12-22
### Fixed
- Fixed a typo in `GET /itemSearch/field`

## [18.0.1] - 2022-12-15
### Fixed
- Move @babel/runtime from devDependencies to dependencies to fix a runtime error

## 18.0.0
### Security
- Removed `.instance` static property from sdk client to prevent race conditions when using it as a singleton
  See the updated examples in the readme to get an overview of the necessary code changes.

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

[Unreleased]: https://github.com/pipedrive/api-docs/compare/v27.1.0...HEAD
[27.1.0]: https://github.com/pipedrive/api-docs/compare/v27.0.1...v27.1.0
[27.0.1]: https://github.com/pipedrive/api-docs/compare/v27.0.0...v27.0.1
[27.0.0]: https://github.com/pipedrive/api-docs/compare/v26.0.0...v27.0.0
[26.0.0]: https://github.com/pipedrive/api-docs/compare/v25.0.0...v26.0.0
[25.0.0]: https://github.com/pipedrive/api-docs/compare/v24.2.0...v25.0.0
[24.2.0]: https://github.com/pipedrive/api-docs/compare/v24.1.1...v24.2.0
[24.1.1]: https://github.com/pipedrive/api-docs/compare/v24.1.0...v24.1.1
[24.1.0]: https://github.com/pipedrive/api-docs/compare/v24.0.0...v24.1.0
[24.0.0]: https://github.com/pipedrive/api-docs/compare/v23.4.3...v24.0.0
[23.4.3]: https://github.com/pipedrive/api-docs/compare/v23.4.2...v23.4.3
[23.4.2]: https://github.com/pipedrive/api-docs/compare/v23.4.1...v23.4.2
[23.4.1]: https://github.com/pipedrive/api-docs/compare/v23.4.0...v23.4.1
[23.4.0]: https://github.com/pipedrive/api-docs/compare/v23.3.0...v23.4.0
[23.3.0]: https://github.com/pipedrive/api-docs/compare/v23.2.5...v23.3.0
[23.2.5]: https://github.com/pipedrive/api-docs/compare/v23.2.4...v23.2.5
[23.2.4]: https://github.com/pipedrive/api-docs/compare/v23.2.3...v23.2.4
[23.2.3]: https://github.com/pipedrive/api-docs/compare/v23.2.2...v23.2.3
[23.2.2]: https://github.com/pipedrive/api-docs/compare/v23.2.1...v23.2.2
[23.2.1]: https://github.com/pipedrive/api-docs/compare/v23.2.0...v23.2.1
[23.2.0]: https://github.com/pipedrive/api-docs/compare/v23.1.0...v23.2.0
[23.1.0]: https://github.com/pipedrive/api-docs/compare/v23.0.0...v23.1.0
[23.0.0]: https://github.com/pipedrive/api-docs/compare/v22.10.1...v23.0.0
[22.10.1]: https://github.com/pipedrive/api-docs/compare/v22.10.0...v22.10.1
[22.10.0]: https://github.com/pipedrive/api-docs/compare/v22.9.0...v22.10.0
[22.9.0]: https://github.com/pipedrive/api-docs/compare/v22.8.2...v22.9.0
[22.8.2]: https://github.com/pipedrive/api-docs/compare/v22.8.1...v22.8.2
[22.8.1]: https://github.com/pipedrive/api-docs/compare/v22.8.0...v22.8.1
[22.8.0]: https://github.com/pipedrive/api-docs/compare/v22.7.0...v22.8.0
[22.7.0]: https://github.com/pipedrive/api-docs/compare/v22.6.1...v22.7.0
[22.6.1]: https://github.com/pipedrive/api-docs/compare/v22.6.0...v22.6.1
[22.6.0]: https://github.com/pipedrive/api-docs/compare/v22.5.0...v22.6.0
[22.5.0]: https://github.com/pipedrive/api-docs/compare/v22.4.0...v22.5.0
[22.4.0]: https://github.com/pipedrive/api-docs/compare/v22.3.0...v22.4.0
[22.3.0]: https://github.com/pipedrive/api-docs/compare/v22.2.0...v22.3.0
[22.2.0]: https://github.com/pipedrive/api-docs/compare/v22.1.0...v22.2.0
[22.1.0]: https://github.com/pipedrive/api-docs/compare/v22.0.2...v22.1.0
[22.0.2]: https://github.com/pipedrive/api-docs/compare/v22.0.1...v22.0.2
[22.0.1]: https://github.com/pipedrive/api-docs/compare/v22.0.0...v22.0.1
[22.0.0]: https://github.com/pipedrive/api-docs/compare/v21.2.0...v22.0.0
[21.2.0]: https://github.com/pipedrive/api-docs/compare/v21.1.0...v21.2.0
[21.1.0]: https://github.com/pipedrive/api-docs/compare/v21.0.0...v21.1.0
[21.0.0]: https://github.com/pipedrive/api-docs/compare/v20.5.2...v21.0.0
[20.5.2]: https://github.com/pipedrive/api-docs/compare/v20.5.1...v20.5.2
[20.5.1]: https://github.com/pipedrive/api-docs/compare/v20.5.0...v20.5.1
[20.5.0]: https://github.com/pipedrive/api-docs/compare/v20.4.0...v20.5.0
[20.4.0]: https://github.com/pipedrive/api-docs/compare/v20.3.0...v20.4.0
[20.3.0]: https://github.com/pipedrive/api-docs/compare/v20.2.0...v20.3.0
[20.2.0]: https://github.com/pipedrive/api-docs/compare/v20.1.1...v20.2.0
[20.1.1]: https://github.com/pipedrive/api-docs/compare/v20.1.0...v20.1.1
[20.1.0]: https://github.com/pipedrive/api-docs/compare/v20.0.2...v20.1.0
[20.0.2]: https://github.com/pipedrive/api-docs/compare/v20.0.1...v20.0.2
[20.0.1]: https://github.com/pipedrive/api-docs/compare/v20.0.0...v20.0.1
[20.0.0]: https://github.com/pipedrive/api-docs/compare/v19.1.0...v20.0.0
[19.1.0]: https://github.com/pipedrive/api-docs/compare/v19.0.1...v19.1.0
[19.0.1]: https://github.com/pipedrive/api-docs/compare/v19.0.0...v19.0.1
[19.0.0]: https://github.com/pipedrive/api-docs/compare/v18.1.4...v19.0.0
[18.1.4]: https://github.com/pipedrive/api-docs/compare/v18.1.3...v18.1.4
[18.1.3]: https://github.com/pipedrive/api-docs/compare/v18.1.2...v18.1.3
[18.1.2]: https://github.com/pipedrive/api-docs/compare/v18.1.1...v18.1.2
[18.1.1]: https://github.com/pipedrive/api-docs/compare/v18.1.0...v18.1.1
[18.1.0]: https://github.com/pipedrive/api-docs/compare/v18.0.3...v18.1.0
[18.0.3]: https://github.com/pipedrive/api-docs/compare/v18.0.2...v18.0.3
[18.0.2]: https://github.com/pipedrive/api-docs/compare/v18.0.1...v18.0.2
[18.0.1]: https://github.com/pipedrive/api-docs/compare/v1.0.0...v18.0.1