import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { transformSync } from '@babel/core';
import {
	questionPrompt,
	questionPromptPatch,
} from '../../assets/src/features/question-editor/questionPrompt.mjs';

const element = ( type, props, ...children ) => ( { type, props, children } );
function compile( file, scope, expression ) {
	const source = fs
		.readFileSync( file, 'utf8' )
		.replace( /^import [\s\S]*?;$/gm, '' )
		.replace( /export /g, '' );
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
	return new Function(
		...Object.keys( scope ),
		`${ code }; return ${ expression };`
	)( ...Object.values( scope ) );
}
const nodes = ( tree ) => [
	tree,
	...( tree?.children || [] )
		.flat( Infinity )
		.filter( ( child ) => child && typeof child === 'object' )
		.flatMap( nodes ),
];
const marker = '[[ohmylms-math:latex:inline]]x^2[[/ohmylms-math]]';

test( 'shared block keeps equations in the canonical statement and enables answer equation controls', () => {
	let definition;
	const scope = {
		createElement: element,
		Fragment: 'fragment',
		createContext: () => ( {} ),
		useState: ( value ) => [ value, () => {} ],
		useRef: () => ( {} ),
		useEffect: () => {},
		__: ( text ) => text,
		RichContentControl: 'rich',
		BankAnswerFields: 'answers',
		ChoiceControls: 'choices',
		QuestionOptionsBar: 'settings',
		Button: 'button',
		questionPrompt,
		questionPromptPatch,
		getBlockType: () => false,
		registerBlockType: ( name, settings ) => {
			definition = settings;
		},
	};
	const { MultipleChoiceFields, registerMultipleChoiceBlock } = compile(
		'assets/src/features/question-editor/MultipleChoiceBlock.jsx',
		scope,
		'({ MultipleChoiceFields, registerMultipleChoiceBlock })'
	);
	let patch;
	const question = {
		name: 'Legacy prompt',
		questions: [ { id: 9, answer: marker, is_correct: true } ],
		settings: { type: 'multiple-choice', partial_credit: true },
	};
	const tree = MultipleChoiceFields( {
		question,
		onChange: ( value ) => {
			patch = value;
		},
	} );
	const prompt = nodes( tree ).find( ( node ) => node.type === 'rich' );
	assert.equal( prompt.props.showToolbar, true );
	prompt.props.onChange( `<p>Solve ${ marker }</p>` );
	assert.equal( patch.description, `<p>Solve ${ marker }</p>` );
	assert.equal( patch.settings.partial_credit, true );
	const answers = nodes( tree ).find( ( node ) => node.type === 'answers' );
	assert.equal( answers.props.showAnswerToolbar, true );
	assert.equal( answers.props.options[ 0 ].answer, marker );
	registerMultipleChoiceBlock();
	assert.deepEqual( Object.keys( definition.attributes ), [
		'questionId',
		'uuid',
		'delivery',
	] );
	assert.equal( definition.save(), null );
} );

function lessonHarness( {
	failure = false,
	approvalFailure = false,
	refreshFailure = false,
} = {} ) {
	let cursor = 0;
	const state = [];
	const effects = [];
	const calls = [];
	const attributes = { questionId: 0, uuid: '' };
	const fresh = {
		id: 42,
		uuid: '12345678-1234-1234-1234-123456789abc',
		name: 'Question 1',
		settings: { type: 'single-choice' },
		options: [ { id: 21, answer: marker, is_correct: true } ],
		modified: 'revision-2',
		can_edit: true,
		can_approve: true,
		current_version_id: 7,
	};
	const scope = {
		createElement: element,
		Fragment: 'fragment',
		__: ( text ) => text,
		Button: 'button',
		Notice: 'notice',
		Spinner: 'spinner',
		MultipleChoiceFields: 'fields',
		registerMultipleChoiceBlock: () => {},
		getBlockType: () => true,
		apiFetch: () => {},
		useState: ( initial ) => {
			const index = cursor++;
			if ( ! ( index in state ) ) {
				state[ index ] = initial;
			}
			return [
				state[ index ],
				( value ) => {
					state[ index ] = value;
				},
			];
		},
		useEffect: ( effect ) => {
			effects.push( effect );
		},
		useRef: () => ( { current: 0 } ),
		useDispatch: () => ( {
			lockPostSaving: ( key ) => calls.push( [ 'lock', key ] ),
			unlockPostSaving: () => {},
		} ),
		createBankQuestion: async ( payload ) => {
			calls.push( [ 'create', payload ] );
			if ( failure ) {
				throw new Error( 'Save refused' );
			}
			return { id: 42 };
		},
		saveQuestionAttributes: async ( id, payload ) =>
			calls.push( [ 'update', id, payload ] ),
		loadBankQuestion: async () => {
			if ( refreshFailure ) {
				throw new Error( 'Refresh refused' );
			}
			return fresh;
		},
		approveQuestion: async ( id, version ) => {
			calls.push( [ 'approve', id, version ] );
			if ( approvalFailure ) {
				throw new Error( 'Approval refused' );
			}
		},
	};
	const Edit = compile(
		'assets/src/features/learning/LessonChoiceBlock.jsx',
		scope,
		'LessonChoiceEdit'
	);
	const render = () => {
		cursor = 0;
		return Edit( {
			attributes,
			clientId: 'placement-a',
			setAttributes: ( patch ) => Object.assign( attributes, patch ),
		} );
	};
	render();
	effects.splice( 0 ).forEach( ( effect ) => effect() );
	const fields = nodes( render() ).find( ( node ) => node.type === 'fields' );
	fields.props.onChange( {
		name: 'Question 1',
		description: `<p>${ marker }</p>`,
		questions: [
			{ answer: marker, is_correct: true },
			{ answer: 'Wrong', is_correct: false },
		],
	} );
	return { render, attributes, calls, state, effects };
}

test( 'lesson save writes equations privately and persists only the question reference in content', async () => {
	const harness = lessonHarness();
	await nodes( harness.render() )
		.find( ( node ) => node.type === 'button' )
		.props.onClick();
	assert.deepEqual( harness.attributes, {
		questionId: 42,
		uuid: '12345678-1234-1234-1234-123456789abc',
	} );
	assert.equal(
		harness.calls.find( ( call ) => call[ 0 ] === 'create' )[ 1 ]
			.questions[ 0 ].answer,
		marker
	);
	assert.equal( harness.state[ 2 ], false );
	await nodes( harness.render() )
		.filter( ( node ) => node.type === 'button' )[ 1 ]
		.props.onClick();
	assert.deepEqual(
		harness.calls.find( ( call ) => call[ 0 ] === 'approve' ),
		[ 'approve', 42, 7 ]
	);
	assert.equal(
		harness.calls.find( ( call ) => call[ 0 ] === 'update' )[ 2 ]
			.base_modified,
		'revision-2'
	);
} );

test( 'failed lesson saves retain the unsaved draft and do not attach an empty question', async () => {
	const harness = lessonHarness( { failure: true } );
	await nodes( harness.render() )
		.find( ( node ) => node.type === 'button' )
		.props.onClick();
	assert.equal( harness.attributes.questionId, 0 );
	assert.equal( harness.state[ 2 ], true );
	assert.equal( harness.state[ 0 ].questions[ 0 ].answer, marker );
	assert.equal( harness.state[ 4 ], 'Save refused' );
	assert.ok( harness.calls.some( ( call ) => call[ 0 ] === 'lock' ) );
} );

test( 'approval failure preserves the saved reference and retries update rather than creating a duplicate', async () => {
	const harness = lessonHarness( { approvalFailure: true } );
	await nodes( harness.render() )
		.find( ( node ) => node.type === 'button' )
		.props.onClick();
	await nodes( harness.render() )
		.filter( ( node ) => node.type === 'button' )[ 1 ]
		.props.onClick();
	assert.equal( harness.attributes.questionId, 42 );
	assert.equal( harness.state[ 4 ], 'Approval refused' );
	assert.equal(
		harness.calls.filter( ( call ) => call[ 0 ] === 'create' ).length,
		1
	);
} );

test( 'refresh failure after creation keeps the identity for retry without creating another question', async () => {
	const harness = lessonHarness( { refreshFailure: true } );
	await nodes( harness.render() )
		.find( ( node ) => node.type === 'button' )
		.props.onClick();
	assert.equal( harness.attributes.questionId, 42 );
	assert.equal( harness.state[ 2 ], true );
	await nodes( harness.render() )
		.find( ( node ) => node.type === 'button' )
		.props.onClick();
	assert.equal(
		harness.calls.filter( ( call ) => call[ 0 ] === 'create' ).length,
		1
	);
	assert.equal(
		harness.calls.filter( ( call ) => call[ 0 ] === 'update' ).length,
		0
	);
} );
