import test from 'node:test';
import assert from 'node:assert/strict';
import {
	addOption,
	addQuestion,
	addSection,
	changeType,
	clampSelection,
	duplicateQuestion,
	moveQuestion,
	newDocument,
	numberOf,
	questionProblems,
	removeItem,
	removeOption,
	setOptionText,
	summarize,
	toggleCorrect,
	updateQuestion,
	withKeys,
} from '../../assets/src/features/content-hub/examBuilderModel.mjs';

const at = { s: 0, q: 0 };
const withQuestion = ( type ) => addQuestion( newDocument(), 0, type );

test( 'a new document has one empty section and no questions', () => {
	const doc = newDocument();
	assert.equal( doc.sections.length, 1 );
	assert.equal( summarize( doc ).questions, 0 );
} );

test( 'a blank choice question lists every problem until it is complete', () => {
	let doc = withQuestion( 'single-choice' );
	assert.deepEqual( questionProblems( doc.sections[ 0 ].questions[ 0 ] ), [
		'text',
		'options',
		'correct',
	] );
	doc = updateQuestion( doc, at, { text: 'Solve 3x + 2 = 8' } );
	doc = setOptionText( doc, at, 0, '2' );
	doc = setOptionText( doc, at, 1, '3' );
	doc = toggleCorrect( doc, at, 0 );
	assert.deepEqual(
		questionProblems( doc.sections[ 0 ].questions[ 0 ] ),
		[]
	);
} );

test( 'single choice keeps exactly one correct option; multiple select toggles', () => {
	let doc = withQuestion( 'single-choice' );
	doc = toggleCorrect( doc, at, 0 );
	doc = toggleCorrect( doc, at, 2 );
	assert.deepEqual(
		doc.sections[ 0 ].questions[ 0 ].options.map( ( o ) => o.correct ),
		[ false, false, true, false ]
	);
	doc = changeType( doc, at, 'multiple-choice' );
	doc = toggleCorrect( doc, at, 0 );
	assert.equal(
		doc.sections[ 0 ].questions[ 0 ].options.filter( ( o ) => o.correct )
			.length,
		2
	);
	doc = changeType( doc, at, 'single-choice' );
	assert.equal(
		doc.sections[ 0 ].questions[ 0 ].options.filter( ( o ) => o.correct )
			.length,
		1
	);
} );

test( 'options are bounded between two and eight', () => {
	let doc = withQuestion( 'single-choice' );
	for ( let i = 0; i < 10; i++ ) {
		doc = addOption( doc, at );
	}
	assert.equal( doc.sections[ 0 ].questions[ 0 ].options.length, 8 );
	for ( let i = 0; i < 10; i++ ) {
		doc = removeOption( doc, at, 0 );
	}
	assert.equal( doc.sections[ 0 ].questions[ 0 ].options.length, 2 );
} );

test( 'numerical needs a finite number; written answers need only text', () => {
	let doc = withQuestion( 'numerical' );
	doc = updateQuestion( doc, at, { text: 'Divide 6 by 8', answer: 'abc' } );
	assert.deepEqual( questionProblems( doc.sections[ 0 ].questions[ 0 ] ), [
		'answer',
	] );
	doc = updateQuestion( doc, at, { answer: '0.75' } );
	assert.deepEqual(
		questionProblems( doc.sections[ 0 ].questions[ 0 ] ),
		[]
	);
	const written = updateQuestion( withQuestion( 'short-text' ), at, {
		text: 'Explain slope.',
	} );
	assert.deepEqual(
		questionProblems( written.sections[ 0 ].questions[ 0 ] ),
		[]
	);
} );

test( 'duplicates are new to the server and moves stay inside the section', () => {
	let doc = addQuestion( withQuestion( 'single-choice' ), 0, 'numerical' );
	doc = updateQuestion( doc, at, { id: 41, text: 'first' } );
	doc = duplicateQuestion( doc, at );
	const questions = doc.sections[ 0 ].questions;
	assert.equal( questions.length, 3 );
	assert.equal( questions[ 1 ].id, 0 );
	assert.notEqual( questions[ 1 ].key, questions[ 0 ].key );
	const moved = moveQuestion( doc, { s: 0, q: 2 }, 1 );
	assert.deepEqual(
		moved.sections[ 0 ].questions.map( ( q ) => q.key ),
		questions.map( ( q ) => q.key )
	);
	const up = moveQuestion( doc, { s: 0, q: 2 }, -1 );
	assert.equal( up.sections[ 0 ].questions[ 1 ].type, 'numerical' );
} );

test( 'numbers continue across sections and totals add up', () => {
	let doc = addSection( withQuestion( 'single-choice' ) );
	doc = addQuestion( doc, 1, 'numerical' );
	doc = addQuestion( doc, 1, 'short-text' );
	doc = updateQuestion( doc, { s: 1, q: 1 }, { points: 4 } );
	assert.equal( numberOf( doc, { s: 1, q: 1 } ), 3 );
	assert.deepEqual(
		{ ...summarize( doc ) },
		{ sections: 2, questions: 3, points: 6, incomplete: 3 }
	);
} );

test( 'removing the last section leaves an empty one, and selection stays valid', () => {
	let doc = withQuestion( 'single-choice' );
	doc = removeItem( doc, 0, 0 );
	assert.deepEqual( clampSelection( doc, at ), { s: 0, q: -1 } );
	doc = removeItem( doc, 0 );
	assert.equal( doc.sections.length, 1 );
	doc = addQuestion( addSection( doc ), 1 );
	assert.deepEqual( clampSelection( doc, { s: 0, q: 3 } ), { s: 1, q: 0 } );
} );

test( 'documents from the server get stable keys', () => {
	const doc = withKeys( {
		title: 'x',
		sections: [
			{ title: 'A', questions: [ { id: 1, type: 'short-text' } ] },
		],
	} );
	assert.ok( doc.sections[ 0 ].key );
	assert.ok( doc.sections[ 0 ].questions[ 0 ].key );
} );
