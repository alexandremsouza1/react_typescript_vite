module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],

	// parser: '@babel/eslint-parser',
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'prettier',
	],

	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
		// suppress errors for missing 'import React' in files

		'no-useless-escape': 0,
		'@typescript-eslint/no-unused-vars': [0],
		'prettier/prettier': [2, { useTabs: true }],
	},
};
