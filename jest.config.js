// @ts-check
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	testEnvironment: 'node',
	transform: {
		'.+\\.ts$': [
			'ts-jest',
			{
				tsconfig: './tsconfig.jest.json'
			}
		]
	}
};