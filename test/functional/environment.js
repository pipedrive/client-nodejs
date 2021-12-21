const mockServer = require('mockserver-node');
const minimist = require('minimist');
const shell = require('shelljs');
const getPort = require('get-port');

function startEnvironment(serverPort) {
	mockServer.start_mockserver({
		serverPort,
		trace: true
	});
}

function stopEnvironment(serverPort) {
	mockServer.stop_mockserver({
		serverPort
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

	const { code, } = await shell.exec(`./node_modules/.bin/jest ${options.join(' ')}`);

	return code;
}

async function main() {
	const argv = minimist(process.argv);
	const port = await getPort();

	process.env.MOCK_PORT = port;
	process.env.MOCK_SERVER = `http://localhost:${port}`

	if (argv['start-environment']) {
		await startEnvironment(port);
		process.exit(0);
	}

	if (argv['stop-environment']) {
		return stopEnvironment(port);
	}

	try {
		const code = await runTests();

		process.exit(code || 0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

main();
