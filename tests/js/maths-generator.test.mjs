import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { mathsPreset } from '../../assets/src/features/question-editor/mathsGenerator.mjs';

test( 'maths generator rejects invalid ranges and unsupported topics', () => {
	for ( const [ min, max ] of [
		[ 0, 9 ],
		[ 9, 2 ],
		[ 1, 1001 ],
		[ 1.5, 9 ],
		[ NaN, 9 ],
		[ 1, Infinity ],
	] )
		assert.equal( mathsPreset( 'addition', min, max ), null );
	assert.equal( mathsPreset( 'unknown', 1, 10 ), null );
} );

test( 'maths presets use the shared private variable and answer contract', () => {
	const fixtures = JSON.parse(
		fs.readFileSync( 'tests/fixtures/maths-generator.json', 'utf8' )
	);
	for ( const [ kind, fixture ] of Object.entries( fixtures ) ) {
		const preset = mathsPreset( kind, 2, 9 );
		assert.deepEqual( JSON.parse( JSON.stringify( preset ) ), fixture );
		assert.equal( preset.settings.type, 'numerical' );
		assert.equal( preset.settings.template.set[ 0 ].path, 'answer' );
		assert.equal( preset.settings.answers, undefined );
		assert.ok(
			preset.settings.template.variables.every(
				( variable ) =>
					variable.type === 'expr' ||
					variable.min > 0 ||
					kind === 'quadratic'
			)
		);
	}
} );

test( 'new activity modes have both server compatibility and Gutenberg controls', () => {
	const php = fs.readFileSync(
		'includes/Practice/ActivityModes.php',
		'utf8'
	);
	const jsx = fs.readFileSync(
		'assets/src/blocks/question-player/index.jsx',
		'utf8'
	);
	const runtime = fs.readFileSync(
		'assets/interactivity/game-player.mjs',
		'utf8'
	);
	const modes = [
		...php.matchAll(
			/'([a-z-]+)'\s*=>\s*'(?:deck|match|choice|sort|magnets)'/g
		),
	].map( ( match ) => match[ 1 ] );
	assert.equal( modes.length, 16 );
	for ( const mode of modes ) {
		assert.ok( jsx.includes( `'${ mode }'` ) );
		assert.ok( runtime.includes( mode ) );
	}
} );

test( 'pythagorean and quadratic presets build the answer from the construction', () => {
	const triple = mathsPreset( 'pythagorean', 2, 9 ).settings.template;
	assert.deepEqual( triple.constraints, [ 'm>n', 'gcd(m,n)=1', 'mod(m-n,2)=1' ] );
	assert.equal( mathsPreset( 'pythagorean', 5, 5 ), null );
	const quadratic = mathsPreset( 'quadratic', 2, 9 ).settings.template;
	assert.ok( quadratic.constraints.includes( 'p!=q' ) );
	assert.ok( quadratic.constraints.includes( 'abs(p)>=2' ) );
	assert.equal( quadratic.set[ 0 ].expr, 'max(p,q)' );
} );
