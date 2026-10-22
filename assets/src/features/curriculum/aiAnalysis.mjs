/**
 * Pure helpers for the AI analysis review screen. The server decides everything; these only
 * describe a run and a suggestion for display.
 */

/** Statuses in which a run still has work to do. */
export const ACTIVE_STATUSES = [ 'queued', 'running' ];

/**
 * Whether a run should keep being advanced.
 * @param {Object|null} run Run.
 * @return {boolean} Still working.
 */
export const isActive = ( run ) =>
	Boolean( run && ACTIVE_STATUSES.includes( run.status ) );

/**
 * Share of a run done, 0 to 100.
 * @param {Object|null} run Run.
 * @return {number} Percent.
 */
export function progress( run ) {
	if ( ! run || ! run.total ) {
		return 0;
	}
	return Math.min( 100, Math.round( ( run.processed / run.total ) * 100 ) );
}

/**
 * A grade band as text: "Grade 7", "Grades 7–8", "Beyond grade 12" or "".
 * @param {number} from First grade.
 * @param {number} to   Last grade.
 * @return {string} Label.
 */
export function gradeBand( from, to ) {
	const first = Number( from ) || 0;
	if ( ! first ) {
		return '';
	}
	const last = Math.max( first, Number( to ) || 0 );
	const name = ( grade ) =>
		grade >= 13 ? 'beyond grade 12' : String( grade );
	if ( first === last ) {
		return first >= 13 ? 'Beyond grade 12' : `Grade ${ first }`;
	}
	return `Grades ${ name( first ) }–${ name( last ) }`;
}

/**
 * Confidence as a whole percentage.
 * @param {number} value 0 to 1.
 * @return {number} Percent.
 */
export const percent = ( value ) =>
	Math.round( Math.max( 0, Math.min( 1, Number( value ) || 0 ) ) * 100 );

/**
 * What a suggestion proposes, in a few words.
 * @param {Object} suggestion Suggestion from the server.
 * @return {string} Summary.
 */
export function proposes( suggestion ) {
	if ( suggestion.kind === 'new_skill' ) {
		return suggestion.proposal?.name || '';
	}
	if ( suggestion.kind === 'placement' ) {
		return [
			suggestion.placement?.domain || '',
			gradeBand(
				suggestion.placement?.grade_from,
				suggestion.placement?.grade_to
			),
		]
			.filter( Boolean )
			.join( ' · ' );
	}
	return suggestion.shared?.name || suggestion.proposal?.name || '';
}

/**
 * Whether a mapping suggestion has to wait for the new skill it points to.
 * @param {Object} suggestion Suggestion from the server.
 * @return {boolean} Waiting.
 */
export const waitsForProposal = ( suggestion ) =>
	suggestion.kind === 'mapping' &&
	! suggestion.shared &&
	suggestion.proposal?.status === 'pending';

/**
 * The overrides a reviewer's edits add to an accept request, keyed by suggestion id.
 * @param {Object} edits Suggestion id => edited fields.
 * @param {Array}  ids   Suggestions being accepted.
 * @return {Object} Overrides to send.
 */
export function overridesFor( edits, ids ) {
	const result = {};
	for ( const id of ids ) {
		if ( edits[ id ] && Object.keys( edits[ id ] ).length ) {
			result[ id ] = edits[ id ];
		}
	}
	return result;
}
