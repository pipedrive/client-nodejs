module.exports = {
	rootDir: '../',
	roots: ['<rootDir>/functional'],
	testMatch: ['<rootDir>/functional/**/*.test.js'],
	setupFilesAfterEnv: ['<rootDir>/functional/jest.setup.js'],
	testEnvironment: '<rootDir>/functional/jest.environment.js',
};
