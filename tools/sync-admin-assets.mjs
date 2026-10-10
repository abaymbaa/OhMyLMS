import fs from 'node:fs';
import path from 'node:path';

// Ship the same admin app and SDK used during development, including add-on settings.
const root = path.resolve( import.meta.dirname, '..' );
for ( const [ source, target ] of [
	[ 'build/sdk/math-runtime.js', 'assets/dist/admin/math-runtime.js' ],
	[
		'build/sdk/math-runtime.js.map',
		'assets/dist/admin/math-runtime.js.map',
	],
	[ 'build/assets/dist/admin/ohmylms.js', 'assets/dist/admin/ohmylms.js' ],
	[
		'build/assets/dist/admin/ohmylms.js.map',
		'assets/dist/admin/ohmylms.js.map',
	],
	[ 'build/sdk/extensions.js', 'assets/dist/admin/extensions.js' ],
	[ 'build/sdk/extensions.js.map', 'assets/dist/admin/extensions.js.map' ],
	[
		'build/sdk/extensions.asset.php',
		'assets/dist/admin/extensions.asset.php',
	],
] ) {
	fs.copyFileSync( path.join( root, source ), path.join( root, target ) );
}
// Async imports resolve relative to extensions.js in both shipped and opt-in builds.
fs.cpSync(
	path.join( root, 'build/sdk/chunks' ),
	path.join( root, 'assets/dist/admin/chunks' ),
	{ recursive: true }
);
console.log( 'Updated shipped admin app and extension SDK.' );
fs.mkdirSync( path.join( root, 'assets/dist/mathlive' ), { recursive: true } );
fs.cpSync(
	path.join( root, 'node_modules/mathlive/fonts' ),
	path.join( root, 'assets/dist/mathlive/fonts' ),
	{ recursive: true }
);
fs.copyFileSync(
	path.join( root, 'node_modules/mathlive/LICENSE.txt' ),
	path.join( root, 'assets/dist/mathlive/LICENSE.txt' )
);
fs.copyFileSync(
	path.join( root, 'node_modules/@cortex-js/compute-engine/LICENSE' ),
	path.join( root, 'assets/dist/mathlive/COMPUTE-ENGINE-LICENSE.txt' )
);
