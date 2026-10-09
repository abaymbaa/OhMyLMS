export default {
	extends: [ '@wordpress/stylelint-config' ],
	overrides: [
		{
			files: [ '**/*.scss' ],
			extends: [ '@wordpress/stylelint-config/scss' ],
			customSyntax: 'postcss-scss',
		},
	],
	ignoreFiles: [
		'node_modules/**',
		'vendor/**',
		'build/**',
		'assets/dist/**',
		'assets/src/static/**',
		'assets/src/runtimes/**',
	],
};
