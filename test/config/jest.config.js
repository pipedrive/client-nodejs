module.exports = {
	rootDir: '../',
	roots: ['<rootDir>/functional'],
	testMatch: ['<rootDir>/functional/**/*.test.ts'],
	setupFilesAfterEnv: ['<rootDir>/config/jest.setup.js'],
};
