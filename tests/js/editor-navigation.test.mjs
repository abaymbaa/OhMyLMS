import test from 'node:test';
import assert from 'node:assert/strict';
import {
	editorBackPath,
	syllabusReturnPath,
	withEditorReturn,
} from '../../assets/src/features/content-hub/editorNavigation.mjs';

test( 'content editors return to the syllabus and preserve chapter or skill selection', () => {
	for ( const node of [ 'c:5', 'g:12', 's:12:34' ] ) {
		const target = syllabusReturnPath( 5, node );
		for ( const type of [ 'lesson', 'quiz', 'assignment' ] ) {
			const route = withEditorReturn( `/${ type }-edit/9`, target );
			assert.equal(
				editorBackPath( `#${ route }`, `/${ type }s` ),
				target
			);
			assert.equal(
				new URLSearchParams( target.split( '?' )[ 1 ] ).get( 'node' ),
				node
			);
		}
	}
} );

test( 'ordinary editors keep their fallback and reject unrelated return destinations', () => {
	assert.equal( withEditorReturn( '/lesson-edit/9' ), '/lesson-edit/9' );
	for ( const target of [
		'',
		'https://example.com',
		'//example.com',
		'/lesson-edit/9',
		'/content-hub/curriculum/syllabus/0',
		'/content-hub/curriculum/syllabus/5?node=invalid',
	] ) {
		assert.equal(
			editorBackPath(
				`#${ withEditorReturn( '/lesson-edit/9', target ) }`,
				'/lessons'
			),
			'/lessons'
		);
	}
} );
