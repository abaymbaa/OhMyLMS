import test from 'node:test';
import assert from 'node:assert/strict';
import {
	choiceReadyToSave,
	reconcileChoiceSave,
} from '../../assets/src/features/learning/choiceAutosave.mjs';

test( 'automatic saving waits for a complete prompt, options and answer key', () => {
	const question = {
		name: 'Question',
		settings: { type: 'single-choice' },
		questions: [ { answer: '4', is_correct: true }, { answer: '5' } ],
	};
	assert.equal( choiceReadyToSave( question ), true );
	assert.equal( choiceReadyToSave( { ...question, name: '' } ), false );
	assert.equal(
		choiceReadyToSave( {
			...question,
			questions: [ { answer: '4', is_correct: true } ],
		} ),
		false
	);
	assert.equal(
		choiceReadyToSave( {
			...question,
			questions: [ { answer: '4' }, { answer: '5' } ],
		} ),
		false
	);
	assert.equal(
		choiceReadyToSave( {
			...question,
			questions: [ { answer: '4', is_correct: true }, { answer: '' } ],
		} ),
		false
	);
} );

test( 'a save response preserves typing, settings and option reordering during the request', () => {
	const submitted = {
		name: 'Before',
		settings: { type: 'multiple-choice', required: false },
		questions: [
			{ id: 101, temp: true, answer: 'A' },
			{ id: 102, temp: true, answer: 'B' },
		],
	};
	const current = {
		...submitted,
		name: 'Still typing',
		settings: { ...submitted.settings, required: true },
		questions: [
			{ ...submitted.questions[ 1 ], answer: 'Edited B' },
			submitted.questions[ 0 ],
			{ id: 103, temp: true, answer: 'New option' },
		],
	};
	const next = reconcileChoiceSave( submitted, current, {
		id: 9,
		options: [ { id: 201 }, { id: 202 } ],
	} );
	assert.equal( next.name, 'Still typing' );
	assert.equal( next.settings.required, true );
	assert.deepEqual(
		next.questions.map( ( option ) => option.answer ),
		[ 'Edited B', 'A', 'New option' ]
	);
	assert.deepEqual(
		next.questions.map( ( option ) => option.id ),
		[ 202, 201, 103 ]
	);
	assert.deepEqual(
		next.questions.slice( 0, 2 ).map( ( option ) => option.clientKey ),
		[ 102, 101 ]
	);
} );

test( 'short and long answer questions save without choice options or a correct-answer key', () => {
	for ( const type of [ 'short-text', 'long-text' ] ) {
		const question = {
			name: 'Explain your answer',
			settings: { type },
			questions: [ { answer: '', is_correct: false } ],
		};
		assert.equal( choiceReadyToSave( question ), true );
		assert.equal( choiceReadyToSave( { ...question, name: '' } ), false );
	}
} );

test( 'reorder questions use their item order rather than correctness flags', () => {
	const question = {
		name: 'Arrange the stages',
		settings: { type: 'reorder' },
		questions: [
			{ answer: 'First', is_correct: false, order_number: 1 },
			{ answer: 'Second', is_correct: false, order_number: 2 },
		],
	};
	assert.equal( choiceReadyToSave( question ), true );
	assert.equal(
		choiceReadyToSave( {
			...question,
			questions: [ { answer: 'First' } ],
		} ),
		false
	);
	assert.equal(
		choiceReadyToSave( {
			...question,
			questions: [ { answer: 'First' }, { answer: '' } ],
		} ),
		false
	);
} );
