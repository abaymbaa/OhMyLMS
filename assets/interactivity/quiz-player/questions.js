import {
	store,
	getContext,
	getElement,
	withSyncEvent,
} from '@wordpress/interactivity';
import {
	emit,
	registerAnswerValidator,
	registerQuestionMount,
} from 'ohmylms/interactivity';

import { createQuestionControls } from './questionControls.js';

const controllers = new WeakMap();
store( 'ohmylms/questions', {
	actions: Object.fromEntries(
		[
			'select',
			'dragstart',
			'dragend',
			'dragover',
			'drop',
			'place',
			'key',
		].map( ( name ) => [
			name,
			withSyncEvent( ( event ) => {
				event.stopPropagation();
				const root = getElement().ref.closest(
					'[data-wp-interactive="ohmylms/questions"]'
				);
				if ( ! controllers.has( root ) ) {
					controllers.set(
						root,
						createQuestionControls( root, getContext() )
					);
				}
				controllers.get( root )[ name ]( event );
			} ),
		] )
	),
} );

/**
 * Fetched HTML is inside data-wp-ignore; initialize only this isolated renderer region.
 * @param container
 */
function mountDynamic( container ) {
	const root = container.querySelector(
		'.quiz-reorder-options,.quiz-matching-options'
	);
	if ( ! root ) {
		return () => {};
	}
	const controller = createQuestionControls( root, { selectedId: '' } );
	const listeners = {
		dragstart: 'dragstart',
		dragend: 'dragend',
		dragover: 'dragover',
		drop: 'drop',
		keydown: 'key',
		click: 'select',
	};
	const registered = [];
	for ( const [ event, action ] of Object.entries( listeners ) ) {
		const listener = ( eventObject ) => {
			if (
				event === 'click' &&
				eventObject.target.closest( '.option-drop-box' )
			) {
				controller.place( eventObject );
			} else {
				controller[ action ]( eventObject );
			}
		};
		root.addEventListener( event, listener );
		registered.push( [ event, listener ] );
	}
	return () =>
		registered.forEach( ( [ event, listener ] ) =>
			root.removeEventListener( event, listener )
		);
}
registerQuestionMount( 'matching', mountDynamic );
registerQuestionMount( 'reorder', mountDynamic );

// Visual widgets mark themselves touched on the first change (see interactive-visual.js).
[
	'number-line',
	'shade-model',
	'count-blocks',
	'set-clock',
	'make-amount',
	'fill-level',
	'build-chart',
	'grid-build',
].forEach( ( type ) =>
	registerAnswerValidator( type, ( root ) =>
		Boolean( root.querySelector( '[data-touched]' ) )
	)
);

// Tile answers are hidden inputs added by interactive-controls.js.
registerAnswerValidator( 'build-expression', ( root ) =>
	Boolean( root.querySelector( 'input[data-tile-answer]' ) )
);

// Extended widgets write bounded scalar fields through the same answer collection contract.
[
	'passage',
	'graphing',
	'hot-text',
	'match-table-grid',
	'labeling',
	'hotspot',
	'draw',
	'audio-response',
	'video-response',
	'poll',
	'word-cloud',
	'discussion-board',
	'slide',
	'interactive-video',
].forEach( ( type ) =>
	registerAnswerValidator( type, ( root ) =>
		Array.from( root.querySelectorAll( 'input[data-answer-key]' ) ).some(
			( input ) => input.value.trim() !== ''
		)
	)
);
