const wordpress = require( '@wordpress/eslint-plugin' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

// Recovered runtime aliases retain function hoisting. New authored modules do not use this exception.
function hoistedRuntimeFiles( directory ) {
	return fs
		.readdirSync( directory, { withFileTypes: true } )
		.flatMap( ( entry ) => {
			const file = path.join( directory, entry.name );
			if ( entry.isDirectory() ) {
				return hoistedRuntimeFiles( file );
			}
			return /\.jsx?$/.test( file ) &&
				fs
					.readFileSync( file, 'utf8' )
					.includes( 'Reconstructed React source' )
				? [ file.replaceAll( '\\', '/' ) ]
				: [];
		} );
}

module.exports = [
	{
		ignores: [
			'node_modules/**',
			'vendor/**',
			'build/**',
			'.wp-dev/**',
			'tools/coding-standards/vendor/**',
			'assets/dist/**',
			'assets/src/runtimes/**',
			'assets/src/application/**',
			'assets/src/modules/**',
			'assets/src/static/**',
			'assets/src/features/commerce-reference/**',
		],
	},
	...wordpress.configs[ 'recommended' ].map( ( config ) => ( {
		...config,
		files: [
			'assets/src/features/**/*.{js,jsx,mjs}',
			'assets/src/extensions/**/*.{js,jsx,mjs}',
			'assets/interactivity/**/*.js',
		],
	} ) ),
	{
		files: [
			'assets/src/features/**/*.{js,jsx,mjs}',
			'assets/src/extensions/**/*.{js,jsx,mjs}',
			'assets/interactivity/**/*.js',
		],
		settings: {
			// These modules are supplied by WordPress/dependency extraction, not bundled from node_modules.
			'import/core-modules': [
				'@wordpress/api-fetch',
				'@wordpress/block-editor',
				'@wordpress/block-library',
				'@wordpress/blocks',
				'@wordpress/components',
				'@wordpress/data',
				'@wordpress/element',
				'@wordpress/html-entities',
				'@wordpress/i18n',
				'@wordpress/media-utils',
				'ohmylms/interactivity',
			],
		},
	},
	{
		files: hoistedRuntimeFiles( 'assets/src/features' ),
		rules: { 'no-var': 'off', 'prefer-const': 'off' },
	},
];
