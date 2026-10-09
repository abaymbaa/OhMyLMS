const escape = ( text ) =>
	String( text )
		.replace( /&/g, '&amp;' )
		.replace( /</g, '&lt;' )
		.replace( />/g, '&gt;' );
export const promptText = ( html ) =>
	String( html || '' )
		.replace( /<[^>]*>/g, '' )
		.replace( /&nbsp;/g, ' ' )
		.trim();

/**
 * Preserve both fields of older questions in the single prompt editor.
 * @param question
 */
export function questionPrompt( question ) {
	if ( question.settings?.question_code ) {
		return question.description || '';
	}
	const name =
		question.name && question.name !== 'Untitled'
			? `<p>${ escape( question.name ) }</p>`
			: '';
	return name + ( question.description || '' );
}

/**
 * The database keeps an automatic identifier; the authored prompt keeps its rich text.
 * @param question
 * @param description
 */
export function questionPromptPatch( question, description ) {
	const code =
		question.settings?.question_code || `Q-${ question.id || Date.now() }`;
	return {
		name:
			question.settings?.type === 'fill-in-the-blank'
				? promptText( description )
				: `Question ${ question.order_number || 1 }`,
		description,
		settings: {
			...question.settings,
			question_code: code,
			...( question.settings?.type === 'fill-in-the-blank'
				? { blank_mode: 'drag' }
				: {} ),
		},
	};
}
