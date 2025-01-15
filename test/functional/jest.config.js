module.exports = {
	preset: 'ts-jest',
	transform: {
		'^.+\\.(ts)?$': 'ts-jest',
		'^.+\\.(js)$': 'babel-jest',
	},
	rootDir: '../',
	roots: ['<rootDir>/functional'],
	testMatch: ['<rootDir>/functional/**/*.test.ts'],
	setupFilesAfterEnv: ['<rootDir>/functional/jest.setup.js'],
};
