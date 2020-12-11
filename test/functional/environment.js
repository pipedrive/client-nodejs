const mockServer = require('mockserver-node');
const minimist = require('minimist');
const shell = require('shelljs');

function startEnvironment() {
	mockServer.start_mockserver({
		serverPort: 1080,
		trace: true
	});
}
function stopEnvironment() {
	mockServer.stop_mockserver({
		serverPort: 1080
	});
}

async function runTests() {
	const options = [
		`-c ${__dirname}/jest.config.js`,
		'--verbose',
		'--runInBand',
		'--detectOpenHandles',
		'--forceExit',
		'--color',
		...process.argv.slice(2),
	];

	console.log(`./node_modules/.bin/jest ${options.join(' ')}`);

	await shell.exec(`./node_modules/.bin/jest ${options.join(' ')}`);
}

async function main() {
	const argv = minimist(process.argv);

	if (argv['start-environment']) {
		await startEnvironment();
		process.exit(0);
	}

	if (argv['stop-environment']) {
		return stopEnvironment();
	}

	try {
		await runTests();

		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

main();
