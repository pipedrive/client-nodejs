/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.UsersController;
const Users = testerlib.Users;
const User = testerlib.User;
const NumberBooleanEnum = testerlib.NumberBooleanEnum;
const UserMe = testerlib.UserMe;
const UserIDs = testerlib.UserIDs;

describe("UsersController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Returns data about all users within the company
     */
    it("should testTestGetAllUsers response", function testTestGetAllUsersTest(done) {
        controller.getAllUsers(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"success": true, "data": [{"id": 1, "name": "John Doe", "default_currency": "EUR", "locale": "et_EE", "lang": 1, "email": "john@pipedrive.com", "phone": "0000-0001", "activated": true, "last_login": "2019-11-21 08: 45: 56", "created": "2018-11-13 09: 16: 26", "modified": "2019-11-21 08: 45: 56", "signup_flow_variation": "google", "has_created_company": true, "is_admin": 1, "active_flag": true, "timezone_name": "Europe/Berlin", "timezone_offset": "+03: 00", "role_id": 1, "icon_url": "https: //upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png", "is_you": true}, {"id": 2, "name": "Jane Doe", "default_currency": "EUR", "locale": "et_EE", "lang": 1, "email": "jane@pipedrive.com", "phone": "0000-0002", "activated": true, "last_login": "2019-09-11 11: 43: 54", "created": "2019-01-22 10: 43: 47", "modified": "2019-11-21 09: 49: 50", "signup_flow_variation": null, "has_created_company": false, "is_admin": 0, "active_flag": true, "timezone_name": "Europe/Berlin", "timezone_offset": "+03: 00", "role_id": 1, "icon_url": null, "is_you": false}]}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * Returns data about an authorized user within the company with bound company data: company ID, company name, and domain. Note that the 'locale' property means 'Date and number format' in the Pipedrive settings, not the chosen language.
     */
    it("should testTestGetCurrentUserData response", function testTestGetCurrentUserDataTest(done) {
        controller.getCurrentUserData(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"success": true, "data": {"id": 1, "name": "Me", "default_currency": "EUR", "locale": "et_EE", "lang": 1, "email": "me@pipedrive.com", "phone": "0000-0000", "activated": true, "last_login": "2019-11-21 08: 45: 56", "created": "2018-11-13 09: 16: 26", "modified": "2019-11-21 08: 45: 56", "signup_flow_variation": "google", "has_created_company": true, "is_admin": 1, "active_flag": true, "timezone_name": "Europe/Berlin", "timezone_offset": "+03: 00", "role_id": 1, "icon_url": "https: //upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png", "is_you": true, "company_id": 54235233, "company_name": "Pipedrive", "company_domain": "pipedrive-12g53f", "language": {"language_code": "en", "country_code": "US"}}}, false, true, false));
            done();
        }).catch(() => undefined);
    });

});
