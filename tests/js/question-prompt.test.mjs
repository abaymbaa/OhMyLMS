import test from 'node:test';
import assert from 'node:assert/strict';
import {
	questionPrompt,
	questionPromptPatch,
} from '../../assets/src/features/question-editor/questionPrompt.mjs';
import { questionTypePatch } from '../../assets/src/features/question-editor/questionBlocks.mjs';
import {
	changeDraftType,
	validateDraft,
	emptyDraft,
} from '../../assets/src/features/question-bank/model.mjs';

test( 'one question field preserves legacy title and rich description', () => {
	assert.equal(
		questionPrompt( { name: 'A < B', description: '<p>Explain why.</p>' } ),
		'<p>A &lt; B</p><p>Explain why.</p>'
	);
} );
test( 'authoring generates a database code and hides the automatic name from the prompt', () => {
	const original = {
		id: 12,
		order_number: 3,
		settings: { type: 'single-choice' },
	};
	const patch = questionPromptPatch( original, '<p>What is 2 + 2?</p>' );
	assert.equal( patch.name, 'Question 3' );
	assert.equal( patch.settings.question_code, 'Q-12' );
	assert.equal( questionPrompt( patch ), '<p>What is 2 + 2?</p>' );
} );
test( 'fill blanks retain the prompt expected by the existing grader when changing type', () => {
	const question = {
		order_number: 3,
		name: 'Question 3',
		description: '<p>Two plus two is {four}.</p>',
		settings: { type: 'single-choice', question_code: 'Q-12' },
	};
	const patch = questionTypePatch( question, 'fill-in-the-blank' );
	assert.equal( patch.name, 'Two plus two is {four}.' );
	assert.equal( patch.settings.question_code, 'Q-12' );
} );
test( 'bank type changes preserve the code and require authored question content', () => {
	const draft = {
		...emptyDraft(),
		name: 'Question 1',
		description: '<p>Question?</p>',
		settings: { question_code: 'Q-12' },
	};
	const changed = changeDraftType( draft, 'short-text' );
	assert.equal( changed.settings.question_code, 'Q-12' );
	assert.equal( validateDraft( changed ).includes( 'name' ), false );
	assert.equal(
		validateDraft( { ...changed, description: '<p><br></p>' } ).includes(
			'name'
		),
		true
	);
} );
