import {
	questionPrompt,
	promptText,
} from '../question-editor/questionPrompt.mjs';
import { parseInlineBlankPrompt } from '../question-editor/inlineBlanks.mjs';
import { interactiveIssues } from '../question-editor/interactiveModel.mjs';

/**
 * Avoid creating incomplete bank questions while their author is still typing.
 *
 * @param {Object|null} question Private question draft.
 * @return {boolean} Whether the draft can be saved.
 */
export function choiceReadyToSave( question ) {
	if ( ! question ) {
		return false;
	}
	const prompt = questionPrompt( question );
	const type = question.settings?.type;
	const hasPrompt = Boolean(
		promptText( prompt ) || /<img\s/i.test( prompt )
	);
	if ( type === 'match-table-grid' ) {
		const { rows = [], columns = [], key = {} } = question.settings;
		const validLabels = ( items ) =>
			items.length > 0 &&
			items.every( ( item ) => item.id && promptText( item.label ) ) &&
			new Set( items.map( ( item ) => item.id ) ).size === items.length;
		return (
			hasPrompt &&
			validLabels( rows ) &&
			validLabels( columns ) &&
			Object.keys( key ).length === rows.length &&
			rows.every( ( row ) => {
				const answer = question.settings.multiple
					? key[ row.id ]
					: [ key[ row.id ] ];
				return (
					Array.isArray( answer ) &&
					answer.length > 0 &&
					new Set( answer ).size === answer.length &&
					answer.every( ( id ) =>
						columns.some( ( column ) => column.id === id )
					)
				);
			} )
		);
	}
	if (
		[
			'dropdown-blanks',
			'multi-blank',
			'build-expression',
			'expression',
		].includes( type )
	) {
		return (
			hasPrompt && ! interactiveIssues( type, question.settings ).length
		);
	}
	if ( type === 'fill-in-the-blank' ) {
		return (
			hasPrompt &&
			( parseInlineBlankPrompt( promptText( prompt ) ).answers.length >
				0 ||
				Boolean(
					question.questions?.length &&
					question.questions.every( ( option ) =>
						promptText( option.answer )
					)
				) )
		);
	}
	if ( type === 'matching' ) {
		return (
			hasPrompt &&
			question.questions?.length >= 2 &&
			question.questions.every(
				( option ) =>
					( promptText( option.answer ) ||
						option.image_url ||
						option.thumbnail_id ) &&
					( promptText( option.matching_data?.label ) ||
						option.matching_data?.image_url ||
						option.matching_data?.image_id )
			)
		);
	}
	if ( [ 'short-text', 'long-text' ].includes( question.settings?.type ) ) {
		return Boolean( promptText( prompt ) || /<img\s/i.test( prompt ) );
	}
	return (
		Boolean( promptText( prompt ) || /<img\s/i.test( prompt ) ) &&
		question.questions?.length >= 2 &&
		question.questions.every(
			( option ) =>
				promptText( option.answer ) ||
				option.image_url ||
				option.thumbnail_id
		) &&
		( question.settings?.type === 'reorder' ||
			question.questions.some( ( option ) =>
				Boolean( Number( option.is_correct ) )
			) )
	);
}

/**
 * Attach assigned option IDs without replacing edits made during a save.
 *
 * @param {Object} submitted Draft sent to the server.
 * @param {Object} current   Latest local draft.
 * @param {Object} fresh     Refreshed bank record.
 * @return {Object} Current content with canonical identities.
 */
export function reconcileChoiceSave( submitted, current, fresh ) {
	const identities = new Map(
		( submitted.questions || [] ).map( ( option, index ) => [
			option.id ?? index,
			fresh.options?.[ index ]?.id,
		] )
	);
	return {
		...current,
		id: fresh.id,
		questions: ( current.questions || [] ).map( ( option, index ) => {
			const id = identities.get( option.id ?? index );
			return id
				? {
						...option,
						clientKey: option.clientKey ?? option.id ?? index,
						id,
						temp: false,
					}
				: option;
		} ),
	};
}
