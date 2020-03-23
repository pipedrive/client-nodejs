/**
 * This basic example shows how to update an organization.
 *
 * Usage:
 * node update-organization.js YOUR_API_TOKEN
 */

if (!process.argv[2]) {
	process.stderr.write('Please provide the API token!' + "\n");
	process.exit();
}

const pipedrive = require('../lib');

pipedrive.Configuration.apiToken = process.argv[2];

(async () => {
	const input = {
		id: 1,
		name: 'SkyNet',
		address: 'Cyberdyne Systems for SAC-NORAD',
	};
	try {
		const resp = await pipedrive.OrganizationsController.updateAnOrganization(input);

		if (resp.data) {
			const org = resp.data;

			console.log(`Org name: ${org.name}, address: ${org.address}`);
		}
	} catch (error) {
		console.log(error);
	}
})();
