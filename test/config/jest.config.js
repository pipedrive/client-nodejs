module.exports = {
	rootDir: '../',
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/functional'],
	testMatch: ['<rootDir>/functional/**/*.test.ts'],
	setupFilesAfterEnv: ['<rootDir>/config/jest.setup.js'],
};
