# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Fixed
- changed `user_id` parameter from query parameter to body parameter in the request that deletes an assignment from a role
### Added
- added required flag for pipeline name in `POST /pipelines` endpoint documentation
### Changed
* Updated `MailThreadPut` schema to represent `object` in response instead of an `array`
* Updated description for `MailThreadOne`
### Removed
* Deleted deprecated `note` field from all lead related documents.
* Fixed typo in lead example response (`crrency` to `currency`)
### Added
* `UpdateProductResponse` for `PUT /products/{id}` 
### Changed
* Split `Product` schema into `BaseProduct` and `ProductWithArrayPrices` or `ProductWithObjectPrices` to represent `prices` property with `array` type and `object` type respectively
* Use the new `ProductWithObjectPrices` in `UpdateProductResponse`
### Added
* `Team` (singular) schema for endpoints that deal with a signle team
### Changed
* `TeamSuccess` response schema to refer to `Team` (singular) instead of `Teams` (plural)
### Changed
* Extended `DELETE /calllogs/{id}` security with `api_key` property.
* Extended `POST /callLogs/{id}/recordings` security with `api_key` property.
##  [0.1.1] - 2021-06-02
### Changed
* Extended `GET /v1/roles/{id}/settings` response with `lead_default_visibility` property.
* Extended `POST /v1/roles/{id}/settings` request payload with  `lead_default_visibility` property.
### Changed
* Deleted `MailThreads` and `MailMessages` from API operation groups and combined them under `Mailbox` group.
* Extracted `LeadLabels` and `LeadSources` API operation groups from `Leads` group.
### Added
* Added support for custom fields for `Content-Type: application/x-www-form-urlencoded`
### Deleted
* Deleted unused files (copied latest auto-generated version)
### Changed
* Deleted `MailThreads` and `MailMessages` from API operation groups and combined them under `Mailbox` group.
* Extracted `LeadLabels` and `LeadSources` API operation groups from `Leads` group.
### Added
* Add note field to call logs.
### Added
* Add into documentation that also a Lead is one of the possible returned entities in related objects for the search endpoint.

[Unreleased]: https://github.com/pipedrive/api-docs/compare/v1.0.0...HEAD
