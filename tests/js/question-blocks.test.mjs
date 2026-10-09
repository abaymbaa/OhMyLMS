import test from 'node:test';
import assert from 'node:assert/strict';
import {
	QUESTION_BLOCK_TYPES,
	questionBlockName,
	publicQuestionBlocks,
	questionTypePatch,
	questionPreviewModel,
	questionPreviewIssues,
} from '../../assets/src/features/question-bank/questionBlocks.mjs';

test( 'each question type creates the existing assessment data schema', () => {
	for ( const [ type ] of QUESTION_BLOCK_TYPES ) {
		const patch = questionTypePatch( { settings: {} }, type, 100 );
		assert.equal( patch.settings.type, type );
		assert.equal(
			patch.settings.score.value,
			[ 'poll', 'word-cloud', 'slide' ].includes( type ) ? 0 : 1
		);
		assert.ok( Array.isArray( patch.questions ) );
		if ( type === 'true-false' )
			assert.deepEqual(
				patch.questions.map( ( x ) => x.answer ),
				[ 'True', 'False' ]
			);
		if ( type === 'structured' )
			assert.equal( patch.settings.parts[ 0 ].kind, 'written' );
	}
} );
test( 'private question blocks are excluded from public content, even when nested', () => {
	const privateBlock = {
		name: questionBlockName( 'numerical' ),
		attributes: { answer: 42 },
	};
	const clean = publicQuestionBlocks( [
		privateBlock,
		{
			name: 'core/group',
			innerBlocks: [ privateBlock, { name: 'core/paragraph' } ],
		},
	] );
	assert.equal( clean.length, 1 );
	assert.equal( clean[ 0 ].innerBlocks[ 0 ].name, 'core/paragraph' );
	assert.ok( ! JSON.stringify( clean ).includes( '42' ) );
} );
test( 'preview shows unsaved text and options without grading keys or teacher notes', () => {
	const view = questionPreviewModel( {
		name: 'Unsaved question',
		description: '<p>New prompt</p>',
		settings: {
			type: 'structured',
			answer: 999,
			rubric: 'secret',
			parts: [
				{
					id: 'p1',
					label: 'a',
					prompt: 'Explain',
					kind: 'written',
					marks: 2,
					answer: 123,
					accepted: [ 'private' ],
					rubric: 'secret',
				},
			],
		},
		questions: [ { id: 1, answer: 'Visible option', is_correct: true } ],
	} );
	assert.equal( view.body, '<p>New prompt</p>' );
	assert.equal( view.options[ 0 ].answer, 'Visible option' );
	for ( const key of [ 'is_correct', 'rubric', 'accepted', '999', '123' ] )
		assert.ok( ! JSON.stringify( view ).includes( key ) );
} );
test( 'inline blank solutions are hidden in preview', () => {
	const view = questionPreviewModel( {
		name: 'Two plus two is {four}.',
		settings: { type: 'fill-in-the-blank' },
	} );
	assert.ok( view.title.some( ( part ) => part.blank ) );
	assert.ok( ! JSON.stringify( view.title ).includes( 'four' ) );
} );
test( 'unfinished matching questions identify missing content instead of silently showing empty controls', () => {
	assert.deepEqual(
		questionPreviewIssues( {
			name: 'Untitled',
			settings: { type: 'matching' },
			questions: [
				{ answer: '', matching_data: { label: '' } },
				{ answer: '', matching_data: { label: '' } },
			],
		} ),
		[ 'title', 'answers', 'matches' ]
	);
	assert.deepEqual(
		questionPreviewIssues( {
			name: 'Match the numbers',
			settings: { type: 'matching' },
			questions: [
				{ answer: '1', matching_data: { label: 'One' } },
				{ answer: '2', matching_data: { label: 'Two' } },
			],
		} ),
		[]
	);
} );
test( 'written questions need no choice options, while missing structured parts are reported', () => {
	assert.deepEqual(
		questionPreviewIssues( {
			name: 'Explain',
			settings: { type: 'long-text' },
		} ),
		[]
	);
	assert.deepEqual(
		questionPreviewIssues( {
			name: 'Explain',
			settings: { type: 'structured' },
		} ),
		[ 'parts' ]
	);
} );
test( 'changing response type preserves form settings but resets type-specific answer keys', () => {
	const patch = questionTypePatch(
		{
			settings: {
				type: 'numerical',
				required: true,
				hint: 'Try this',
				answer: 42,
			},
		},
		'single-choice'
	);
	assert.equal( patch.settings.required, true );
	assert.equal( patch.settings.hint, 'Try this' );
	assert.equal( patch.settings.answer, undefined );
} );
