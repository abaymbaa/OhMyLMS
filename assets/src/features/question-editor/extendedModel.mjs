export const EXTENDED_TYPES = [
	[ 'passage', 'Passage' ],
	[ 'graphing', 'Graphing' ],
	[ 'hot-text', 'Hot text' ],
	[ 'match-table-grid', 'Match table grid' ],
	[ 'labeling', 'Labeling' ],
	[ 'hotspot', 'Hotspot' ],
	[ 'draw', 'Draw' ],
	[ 'audio-response', 'Audio response' ],
	[ 'video-response', 'Video response' ],
	[ 'poll', 'Poll' ],
	[ 'word-cloud', 'Word cloud' ],
	[ 'discussion-board', 'Discussion board' ],
	[ 'interactive-video', 'Interactive video' ],
];
export const isExtendedType = ( type ) =>
	EXTENDED_TYPES.some( ( [ id ] ) => id === type );
export const isUngradedType = ( type ) =>
	[ 'poll', 'word-cloud' ].includes( type );
/**
 * Initial examples use the same settings shapes as the frozen server writer.
 * @param type
 */
export function extendedDefaults( type ) {
	switch ( type ) {
		case 'passage':
			return {
				passage:
					'A rectangle has a length of 4 cm and a width of 3 cm.',
				parts: [
					{
						id: 'a',
						label: '(a)',
						kind: 'numerical',
						marks: 1,
						prompt: 'Find the area.',
						answer: 12,
					},
				],
			};
		case 'graphing':
			return {
				mode: 'points',
				min: -5,
				max: 5,
				points: [ { x: 2, y: 3 } ],
				tolerance: 0.25,
			};
		case 'hot-text':
			return {
				tokens: [
					{ id: 't1', text: '2' },
					{ id: 't2', text: '3' },
					{ id: 't3', text: '4' },
				],
				correct: [ 't1', 't3' ],
			};
		case 'match-table-grid':
			return {
				rows: [
					{ id: 'r1', label: '2 + 2' },
					{ id: 'r2', label: '3 + 3' },
				],
				columns: [
					{ id: 'c1', label: '4' },
					{ id: 'c2', label: '6' },
				],
				key: { r1: 'c1', r2: 'c2' },
			};
		case 'labeling':
			return {
				image_url: '',
				targets: [
					{ id: 'a', x: 25, y: 50, answer: 'A' },
					{ id: 'b', x: 75, y: 50, answer: 'B' },
				],
				distractors: [],
			};
		case 'hotspot':
			return { image_url: '', zones: [ { x: 50, y: 50, radius: 12 } ] };
		case 'poll':
			return {
				choices: [
					{ id: 'c1', text: 'Yes' },
					{ id: 'c2', text: 'No' },
				],
			};
		case 'interactive-video':
			return {
				video_url: '',
				checkpoints: [
					{ id: 'a', at: 5, prompt: 'What is 2 + 2?', answer: '4' },
				],
			};
		case 'audio-response':
		case 'video-response':
			return { max_seconds: 60 };
		default:
			return {};
	}
}
/**
 * Only public configuration reaches learner widgets, including in editor preview.
 * @param type
 * @param settings
 */
export function extendedPublicView( type, settings ) {
	const keys =
		{
			passage: [ 'passage' ],
			graphing: [ 'mode', 'min', 'max' ],
			'hot-text': [ 'tokens' ],
			'match-table-grid': [ 'rows', 'columns' ],
			labeling: [ 'image_url' ],
			hotspot: [ 'image_url' ],
			'audio-response': [ 'max_seconds' ],
			'video-response': [ 'max_seconds' ],
			poll: [ 'choices' ],
			'interactive-video': [ 'video_url' ],
		}[ type ] || [];
	const view = structuredClone(
		Object.fromEntries(
			keys
				.filter( ( key ) => settings[ key ] !== undefined )
				.map( ( key ) => [ key, settings[ key ] ] )
		)
	);
	if ( type === 'labeling' ) {
		view.choices = [
			...( settings.targets || [] ).map( ( target ) => target.answer ),
			...( settings.distractors || [] ),
		].sort();
		view.targets = ( settings.targets || [] ).map( ( { id, x, y } ) => ( {
			id,
			x,
			y,
		} ) );
		delete view.distractors;
	}
	if ( type === 'interactive-video' ) {
		view.checkpoints = ( settings.checkpoints || [] ).map(
			( { id, at, prompt } ) => ( { id, at, prompt } )
		);
	}
	if ( type === 'passage' ) {
		view.parts = ( settings.parts || [] ).map(
			( { id, label, kind, marks, prompt } ) => ( {
				id,
				label,
				kind,
				marks,
				prompt,
			} )
		);
	}
	return view;
}
/**
 * Blocking authoring problems for new extended questions.
 * @param type
 * @param settings
 */
export function extendedIssues( type, settings = {} ) {
	if (
		[ 'labeling', 'hotspot' ].includes( type ) &&
		! /^https?:\/\//.test( settings.image_url || '' )
	) {
		return [ 'image' ];
	}
	if (
		type === 'interactive-video' &&
		! /^https?:\/\//.test( settings.video_url || '' )
	) {
		return [ 'video' ];
	}
	if (
		type === 'hot-text' &&
		( ! ( settings.tokens || [] ).length ||
			! ( settings.correct || [] ).length )
	) {
		return [ 'tokens' ];
	}
	if (
		type === 'graphing' &&
		( ! ( settings.points || [] ).length ||
			! ( Number( settings.max ) > Number( settings.min ) ) )
	) {
		return [ 'graph' ];
	}
	if (
		type === 'match-table-grid' &&
		( ! ( settings.rows || [] ).length ||
			! ( settings.columns || [] ).length ||
			settings.rows.some( ( row ) => ! settings.key?.[ row.id ] ) )
	) {
		return [ 'table' ];
	}
	return [];
}
