const mockServer = require('mockserver-node');
const minimist = require('minimist');
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const getPort = require('get-port');

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

function startEnvironment(port) {
	return mockServer.start_mockserver({
		serverPort: port,
		trace: true
	});
}
function stopEnvironment() {
	return mockServer.stop_mockserver({
		serverPort: port
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
	const port = await getMockedServerPort();
	const argv = minimist(process.argv);

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
