const v1 = require('../dist/versions/v1');
const v2 = require('../dist/versions/v2');

// Tests if api client can be initiated without runtime errors
new v1.Configuration({});
new v2.Configuration({});
