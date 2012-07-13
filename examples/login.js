var Pipedrive = require(__dirname + '/../index');
var _ = require('underscore');
var stdin = process.openStdin()
    , tty = require('tty')

var authDetails = ['email','password'],
	currentAuthDetail = 0,
	setAuthDetails = {};

process.stdout.write("\nEnter your Pipedrive " + authDetails[currentAuthDetail] + ': ');
process.stdin.resume();
process.stdin.setEncoding('utf8');
tty.setRawMode(true);  
currentString = ''

process.stdin.on('data', function (char) {
	char = char + ""

	switch (char) {
		case "\n":
		case "\r":
		case "\u0004":
			setAuthDetails[authDetails[currentAuthDetail]] = currentString;
			
			currentString = '';

			if (currentAuthDetail != authDetails.length - 1) {
				currentAuthDetail++;
				process.stdout.write("\nEnter your Pipedrive " + authDetails[currentAuthDetail] + ': ');
			}
			else {
				tty.setRawMode(false);
				stdin.pause();
				
				Pipedrive.authenticate(setAuthDetails, function(error, authorizations, userData) {
					if (error) throw error;

					console.log("\n");
					console.log('Hello ' + userData.user.profile.name + '! You belong to the following Pipedrive accounts:');

					_.each(authorizations, function(authorization) {
						console.log('* ' + authorization.get('company').info.name + ' (API token: ' + authorization.get('api_token') + ')');
					});
				});

			}
		break
			case "\u0003":
			// Ctrl C
			console.log('Cancelled');
			process.exit();
			break
		default:
			process.stdout.write('*');
			currentString += char;
			break
	}
});
