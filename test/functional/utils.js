export function getSrc() {
	if (process.env.AUTOMATION) {
		return require('../../dist');
	}

	return require('../../src');
}