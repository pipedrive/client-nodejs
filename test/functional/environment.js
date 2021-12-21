const mockServer = require('mockserver-node');
const minimist = require('minimist');
const shell = require('shelljs');
const getPort = require('get-port');

function startEnvironment(serverPort) {
	return mockServer.start_mockserver({
		serverPort,
		trace: true
	});
}

function stopEnvironment(serverPort) {
	return mockServer.stop_mockserver({
		serverPort
	});
}

async function runTests() {
	const ignoreArgs = ['--start-environment','--stop-environment']
	const extraOptions = process.argv.slice(2).filter(arg=> !ignoreArgs.includes(arg));
	const options = [
		`-c ${__dirname}/jest.config.js`,
		'--verbose',
		'--runInBand',
		'--detectOpenHandles',
		'--forceExit',
		'--color',
		...extraOptions,
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

	try {
		await startEnvironment(port);
		const code = await runTests();
		stopEnvironment(port);

		process.exit(code || 0);
	} catch (error) {
		console.log(error);
		stopEnvironment(port);
		process.exit(1);
	}
}

main();
