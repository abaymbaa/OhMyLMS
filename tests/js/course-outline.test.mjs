import test from 'node:test';
import assert from 'node:assert/strict';
import {
	moveOutlineRow,
	orderedOutlineItems,
	removeOutlineLesson,
	outlineLessonReadiness,
} from '../../assets/src/features/courses/outline.mjs';

test( 'lesson checklist isolates teaching and assessment coverage by lesson and unit', () => {
	const program = {
		groups: [
			{ id: 'one', chapter_id: 1, title: 'One' },
			{ id: 'two', chapter_id: 2, title: 'Two' },
		],
		outcomes: [
			{ term_id: 10, chapter_id: 1, group_id: 'one' },
			{ term_id: 20, chapter_id: 2, group_id: 'two' },
		],
		items: [
			{
				type: 'lesson',
				chapter_id: 1,
				group_id: 'one',
				skill_ids: [ 10, 20 ],
				status: 'publish',
			},
			{
				type: 'quiz',
				chapter_id: 1,
				group_id: 'one',
				skill_ids: [ 10 ],
				status: 'publish',
			},
			{
				type: 'lesson',
				chapter_id: 2,
				group_id: 'one',
				skill_ids: [ 10 ],
				status: 'draft',
			},
			{
				type: 'quiz',
				chapter_id: 2,
				skill_ids: [ 20 ],
				status: 'publish',
			},
		],
	};
	const before = JSON.stringify( program );
	const [ one, two ] = outlineLessonReadiness( program );
	assert.equal( one.complete, true );
	assert.equal( one.items, 2 );
	assert.deepEqual( two.missingTeaching, [ 20 ] );
	assert.deepEqual( two.missingAssessment, [ 20 ] );
	assert.equal( two.items, 0 );
	assert.equal( JSON.stringify( program ), before );
} );

test( 'practice covers its own skill, while drafts and absent skill links remain visible', () => {
	const program = {
		groups: [
			{ id: 'one', chapter_id: 1 },
			{ id: 'empty', chapter_id: 1 },
		],
		outcomes: [ { term_id: 10, chapter_id: 1, group_id: 'one' } ],
		items: [
			{
				type: 'practice',
				content_id: 10,
				chapter_id: 1,
				group_id: 'one',
			},
			{
				type: 'lesson',
				skill_ids: [ 10 ],
				chapter_id: 1,
				group_id: 'one',
				status: 'draft',
			},
		],
	};
	const [ one, empty ] = outlineLessonReadiness( program );
	assert.deepEqual( one.missingAssessment, [] );
	assert.deepEqual( one.missingTeaching, [] );
	assert.equal( one.drafts, 1 );
	assert.equal( one.complete, false );
	assert.equal( empty.complete, false );
	assert.deepEqual( empty.skills, [] );
} );

test( 'unscoped resources and quizzes do not count as teaching', () => {
	const [ row ] = outlineLessonReadiness( {
		groups: [ { id: 'one', chapter_id: 1 } ],
		outcomes: [ { term_id: 10, chapter_id: 1, group_id: 'one' } ],
		items: [
			{
				type: 'lesson',
				chapter_id: 1,
				group_id: 'one',
				status: 'publish',
			},
			{
				type: 'quiz',
				skill_ids: [ 10 ],
				chapter_id: 1,
				group_id: 'one',
				status: 'publish',
			},
		],
	} );
	assert.deepEqual( row.missingTeaching, [ 10 ] );
	assert.deepEqual( row.missingAssessment, [] );
	assert.equal( row.complete, false );
} );

test( 'moving units or lessons preserves IDs, data and the original array', () => {
	const rows = [
		{ id: 'first', title: 'First' },
		{ id: 'second', custom: true },
	];
	assert.deepEqual( moveOutlineRow( rows, 'second', -1 ), [
		rows[ 1 ],
		rows[ 0 ],
	] );
	assert.equal( rows[ 0 ].id, 'first' );
	assert.deepEqual( moveOutlineRow( rows, 'first', -1 ), rows );
} );

test( 'display serialization follows units and lessons, with terminal unit tests and challenge', () => {
	const items = [
		{ id: 'challenge', chapter_id: 0, style: 'course-challenge' },
		{ id: 'test', chapter_id: 2, style: 'unit-test' },
		{ id: 'loose', chapter_id: 2 },
		{ id: 'b', chapter_id: 2, group_id: 'lesson-b' },
		{ id: 'a', chapter_id: 2, group_id: 'lesson-a' },
		{ id: 'first-unit', chapter_id: 'new-unit' },
	];
	const program = {
		items,
		groups: [
			{ id: 'lesson-a', chapter_id: 2 },
			{ id: 'lesson-b', chapter_id: 2 },
		],
	};
	assert.deepEqual(
		orderedOutlineItems( program, [ { id: 'new-unit' }, { id: 2 } ] ).map(
			( row ) => row.id
		),
		[ 'first-unit', 'a', 'b', 'loose', 'test', 'challenge' ]
	);
	assert.equal( items[ 0 ].id, 'challenge' );
} );

test( 'unknown legacy placements survive serialization for explicit repair rather than disappearing', () => {
	const orphan = { id: 'orphan', chapter_id: 999, custom: 'keep' };
	assert.deepEqual(
		orderedOutlineItems( { items: [ orphan ], groups: [] }, [] ),
		[ orphan ]
	);
} );

test( 'removing a lesson keeps its activities, skill outcomes and extension fields', () => {
	const source = {
		groups: [ { id: 'old' }, { id: 'keep' } ],
		items: [
			{ id: 'activity', group_id: 'old', chapter_id: 4, custom: 'kept' },
		],
		outcomes: [ { term_id: 7, group_id: 'old', required: true } ],
	};
	const next = removeOutlineLesson( source, 'old' );
	assert.deepEqual( next.groups, [ { id: 'keep' } ] );
	assert.deepEqual( next.items, [
		{ id: 'activity', chapter_id: 4, custom: 'kept' },
	] );
	assert.deepEqual( next.outcomes, [ { term_id: 7, required: true } ] );
	assert.equal( source.items[ 0 ].group_id, 'old' );
} );
