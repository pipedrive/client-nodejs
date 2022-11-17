const minimist = require('minimist');
const shell = require('shelljs');

const runTests = () => {
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

	const { code } = shell.exec(`./node_modules/.bin/jest ${options.join(' ')}`);

	return code;
};

(async () => {
	const argv = minimist(process.argv);

	if (argv['start-environment']) {
		process.exit(0);
	}

	if (argv['stop-environment']) {
		process.exit(0);
	}

	try {
		const code = await runTests();
		process.exit(code || 0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
})();
