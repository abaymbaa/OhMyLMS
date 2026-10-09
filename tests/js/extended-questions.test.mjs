import test from 'node:test';
import assert from 'node:assert/strict';
import {
	extendedDefaults,
	extendedPublicView,
} from '../../assets/src/features/question-editor/extendedModel.mjs';
import { questionTypePatch } from '../../assets/src/features/question-editor/questionBlocks.mjs';
import { describeExpected } from '../../assets/src/features/quiz-reports/model.mjs';

test( 'learner configuration never contains extended grading keys or teacher notes', () => {
	for ( const type of [
		'graphing',
		'hot-text',
		'match-table-grid',
		'hotspot',
		'draw',
		'audio-response',
	] ) {
		const settings = {
			...extendedDefaults( type ),
			rubric: 'Teacher only',
			answer: 'Secret',
		};
		const view = extendedPublicView( type, settings );
		for ( const key of [
			'rubric',
			'answer',
			'points',
			'correct',
			'key',
			'zones',
		] ) {
			assert.equal( key in view, false, `${ type }: ${ key }` );
		}
	}
	const labels = extendedPublicView(
		'labeling',
		extendedDefaults( 'labeling' )
	);
	assert.deepEqual( labels.choices, [ 'A', 'B' ] );
	assert.ok( labels.targets.every( ( target ) => ! ( 'answer' in target ) ) );
	const video = extendedPublicView(
		'interactive-video',
		extendedDefaults( 'interactive-video' )
	);
	assert.ok(
		video.checkpoints.every(
			( checkpoint ) => ! ( 'answer' in checkpoint )
		)
	);
	const passage = extendedPublicView(
		'passage',
		extendedDefaults( 'passage' )
	);
	assert.ok(
		passage.parts.every(
			( part ) => ! ( 'answer' in part ) && ! ( 'rubric' in part )
		)
	);
} );

test( 'unscored formats reset marks and extended formats do not create legacy answer rows', () => {
	for ( const type of [ 'poll', 'word-cloud', 'slide' ] ) {
		const patch = questionTypePatch(
			{ settings: { score: { value: 5 } } },
			type
		);
		assert.equal( patch.settings.score.value, 0 );
		assert.deepEqual( patch.questions, [] );
	}
} );

test( 'teacher reports describe extended answers using frozen labels', () => {
	assert.equal(
		describeExpected( {
			settings: { type: 'hot-text', ...extendedDefaults( 'hot-text' ) },
		} ),
		'2, 4'
	);
	assert.equal(
		describeExpected( {
			settings: {
				type: 'match-table-grid',
				...extendedDefaults( 'match-table-grid' ),
			},
		} ),
		'2 + 2 → 4, 3 + 3 → 6'
	);
	assert.equal(
		describeExpected( {
			settings: { type: 'graphing', ...extendedDefaults( 'graphing' ) },
		} ),
		'(2, 3)'
	);
} );
