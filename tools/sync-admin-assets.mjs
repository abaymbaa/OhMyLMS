import fs from 'node:fs';
import path from 'node:path';

// Ship the same admin app and SDK used during development, including add-on settings.
const root = path.resolve( import.meta.dirname, '..' );
for ( const [ source, target ] of [
	[
		'build/sdk/native-lesson-editor.js',
		'assets/dist/admin/native-lesson-editor.js',
	],
	[
		'build/sdk/native-lesson-editor.js.map',
		'assets/dist/admin/native-lesson-editor.js.map',
	],
	[
		'build/sdk/native-lesson-editor.asset.php',
		'assets/dist/admin/native-lesson-editor.asset.php',
	],
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
// Remove outdated hashed SDK chunks before syncing the current build.
const sourceChunks = path.join( root, 'build/sdk/chunks' );
const targetChunks = path.join( root, 'assets/dist/admin/chunks' );
const currentChunks = new Set( fs.readdirSync( sourceChunks ) );
for ( const entry of fs.readdirSync( targetChunks, { withFileTypes: true } ) ) {
	if (
		entry.isFile() &&
		/^[\w-]+\.[a-f0-9]{12}\.js(?:\.map)?$/.test( entry.name ) &&
		! currentChunks.has( entry.name )
	) {
		fs.unlinkSync( path.join( targetChunks, entry.name ) );
	}
}
// Async imports resolve relative to extensions.js in both shipped and opt-in builds.
fs.cpSync( sourceChunks, targetChunks, { recursive: true } );
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
