var Pipedrive = require(__dirname + '/../index');
var _ = require('lodash');
var stdin = process.openStdin()
    , tty = require('tty')

var authDetails = ['email','password'],
	currentAuthDetail = 0,
	setAuthDetails = {};

process.stdout.write("\nEnter your Pipedrive " + authDetails[currentAuthDetail] + ': ');
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.setRawMode();
currentString = '';

process.stdin.on('data', function (char) {
	setAuthDetails[authDetails[currentAuthDetail]] = char.substr(0, char.length - 1);
	
	if (currentAuthDetail != authDetails.length - 1) {
		currentAuthDetail++;
		process.stdout.write("\nEnter your Pipedrive " + authDetails[currentAuthDetail] + ': ');
	}
	else {
		process.stdin.setRawMode(false);
		stdin.pause();

		process.stdout.write("\nAuthenticating...\n");
		
		Pipedrive.authenticate(setAuthDetails, function(error, authorizations, userData) {
			if (error) {
				console.log(error);
				return;
			}

			process.stdout.write("\n");
			process.stdout.write('Hello ' + userData.user.profile.name + '! You belong to the following Pipedrive accounts:' + "\n");

			_.each(authorizations, function(authorization) {
				process.stdout.write("* " + authorization.get('company').info.name + ' (API token: ' + authorization.get('api_token') + ')' + "\n");
			});
		});

	}
});
