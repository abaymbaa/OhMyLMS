import test from 'node:test';
import assert from 'node:assert/strict';
import {
	filterObjectives,
	objectiveKey,
	objectiveReferences,
} from '../../assets/src/features/courses/objectives.mjs';

test( 'objective search matches full official wording, code and topic', () => {
	const rows = [
		{
			syllabus_id: 1,
			term_id: 4,
			code: 'ALG-02',
			name: 'Equations',
			objective: 'Solve equations with one variable',
			topic: 'Algebra',
		},
		{
			syllabus_id: 2,
			term_id: 4,
			code: 'NUM-01',
			name: 'Numbers',
			objective: 'Compare integers',
			topic: 'Numbers',
		},
	];
	assert.deepEqual( filterObjectives( rows, 'one variable' ), [ rows[ 0 ] ] );
	assert.deepEqual( filterObjectives( rows, 'alg-02' ), [ rows[ 0 ] ] );
	assert.deepEqual( filterObjectives( rows, '', 'Numbers' ), [ rows[ 1 ] ] );
	assert.deepEqual( filterObjectives( rows, 'integers', 'Algebra' ), [] );
	assert.notEqual( objectiveKey( rows[ 0 ] ), objectiveKey( rows[ 1 ] ) );
	assert.deepEqual( objectiveReferences( rows ), [
		{ syllabus_id: 1, term_id: 4 },
		{ syllabus_id: 2, term_id: 4 },
	] );
} );
