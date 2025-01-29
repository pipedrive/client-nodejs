module.exports = {
	rootDir: '../',
	roots: ['<rootDir>/functional'],
	testMatch: ['<rootDir>/functional/**/*.test.ts'],
	setupFilesAfterEnv: ['<rootDir>/functional/jest.setup.js'],
};
