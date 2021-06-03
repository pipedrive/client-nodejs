# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
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
