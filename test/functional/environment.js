const mockServer = require('mockserver-node');
const minimist = require('minimist');
const shell = require('shelljs');
const getPort = require('get-port');
const path = require('path');
const fs = require('fs');
const JestNodeEnvironment = require('jest-environment-node');

function startEnvironment(serverPort) {
	return mockServer.start_mockserver({
		serverPort,
		trace: true,
		verbose: true,
	});
}

function stopEnvironment(serverPort) {
	return mockServer.stop_mockserver({
		serverPort
	});
}

async function getMockedServerPort() {
	const portPath = path.resolve(__dirname, '.func.test.port');

	if (fs.existsSync(portPath)) {
		return fs.readFileSync(
			portPath,
			'utf-8'
		);
	} else {
		const port = await getPort();

		fs.writeFileSync(
			portPath,
			JSON.stringify(port)
		);

		return port;
	}
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
	const port = await getMockedServerPort();


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
class JestEnvironment extends JestNodeEnvironment {
	async setup() {
		await super.setup();
		const port = await getMockedServerPort();
		this.global.MOCK_PORT = port;
		this.global.MOCK_SERVER = `http://localhost:${port}`;
	}
}


if (require.main === module) {
	main();
} else {
	module.exports = {
		JestEnvironment,
	};
}