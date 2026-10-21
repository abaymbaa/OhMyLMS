import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { transformSync } from '@babel/core';
import {
	addSelection,
	moveSelection,
} from '../../assets/src/blocks/question-player/model.mjs';

test( 'question selection rejects duplicates and invalid IDs and bounds the set', () => {
	assert.deepEqual( addSelection( [ 3 ], '5' ), [ 3, 5 ] );
	for ( const value of [ 3, 0, -1, 1.5, 'not-an-id', null ] ) {
		assert.deepEqual( addSelection( [ 3 ], value ), [ 3 ] );
	}
	const full = Array.from( { length: 30 }, ( _, index ) => index + 1 );
	assert.deepEqual( addSelection( full, 100 ), full );
} );

test( 'moving selected questions keeps their stable identities and order', () => {
	assert.deepEqual( moveSelection( [ 3, 5, 7 ], 1, -1 ), [ 5, 3, 7 ] );
	assert.deepEqual( moveSelection( [ 3, 5, 7 ], 1, 1 ), [ 3, 7, 5 ] );
	assert.deepEqual( moveSelection( [ 3, 5, 7 ], 0, -1 ), [ 3, 5, 7 ] );
} );

test( 'the saved block contains references and outcome switches without assessment keys', () => {
	const block = JSON.parse(
		fs.readFileSync(
			'assets/src/blocks/question-player/block.json',
			'utf8'
		)
	);
	assert.deepEqual( Object.keys( block.attributes ), [
		'source',
		'questionIds',
		'skillIds',
		'count',
		'graded',
		'affectsSkills',
		'activityMode',
		'rememberCount',
		'studySeconds',
		'revealSeconds',
		'roundSeconds',
	] );
	assert.equal( block.attributes.graded.default, true );
	assert.equal( block.attributes.affectsSkills.default, false );
} );

test( 'authoring switches cannot leave skill effects enabled when grading is turned off', () => {
	const source = fs
		.readFileSync( 'assets/src/blocks/question-player/index.jsx', 'utf8' )
		.replace( /^import [\s\S]*?;$/gm, '' )
		.replace( /export /g, '' )
		.replace( /registerBlockType\( metadata,[\s\S]*$/, '' );
	const { code } = transformSync( source, {
		configFile: false,
		babelrc: false,
		presets: [
			[
				'@babel/preset-react',
				{ pragma: 'createElement', pragmaFrag: 'Fragment' },
			],
		],
	} );
	const scope = {
		window: { ohmylmsNativeLesson: true },
		createElement: ( type, props, ...children ) => ( {
			type,
			props,
			children,
		} ),
		useEffect: () => {},
		useState: ( value ) => [ value, () => {} ],
		useBlockProps: () => ( {} ),
		__: ( value ) => value,
		sprintf: ( value ) => value,
		Button: 'button',
		ComboboxControl: 'combo',
		Notice: 'notice',
		Placeholder: 'placeholder',
		RangeControl: 'range',
		SelectControl: 'select',
		Spinner: 'spinner',
		ToggleControl: 'toggle',
		Fragment: 'fragment',
	};
	const Edit = new Function(
		...Object.keys( scope ),
		code + '; return QuestionPlayerEdit;'
	)( ...Object.values( scope ) );
	let saved;
	const tree = Edit( {
		attributes: {
			source: 'random',
			questionIds: [ 3 ],
			skillIds: [ 8 ],
			count: 5,
			graded: true,
			affectsSkills: true,
		},
		setAttributes: ( patch ) => {
			saved = patch;
		},
	} );
	const nodes = ( node ) => [
		node,
		...( node?.children || [] )
			.flat( Infinity )
			.filter( ( child ) => child && typeof child === 'object' )
			.flatMap( nodes ),
	];
	const toggle = nodes( tree ).find(
		( node ) =>
			node.type === 'toggle' && node.props.label === 'Grade responses'
	);
	toggle.props.onChange( false );
	assert.deepEqual( saved, { graded: false, affectsSkills: false } );
	assert.ok(
		nodes( tree ).some(
			( node ) => node.type === 'range' && node.props.max === 30
		)
	);
} );
