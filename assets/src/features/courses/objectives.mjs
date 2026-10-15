import { restUrl } from '../restUrl.mjs';

/**
 * Show the source identity consistently in the picker and selected targets.
 * @param {Object} row Syllabus record.
 * @return {string} Source label.
 */
export const syllabusLabel = ( row ) =>
	[ row.code, row.name, row.version, row.grade, row.subject ]
		.filter( Boolean )
		.join( ' · ' );

/**
 * Stable identity includes the syllabus because a skill can occur in several.
 * @param row
 */
export const objectiveKey = ( row ) => `${ row.syllabus_id }:${ row.term_id }`;
export const objectiveReferences = ( rows ) =>
	rows.map( ( row ) => ( {
		syllabus_id: row.syllabus_id,
		term_id: row.term_id,
	} ) );

/**
 * Filter the full official wording as well as codes, titles and topics.
 * @param rows
 * @param search
 * @param topic
 */
export function filterObjectives( rows, search = '', topic = '' ) {
	const words = search
		.trim()
		.toLocaleLowerCase()
		.split( /\s+/ )
		.filter( Boolean );
	return rows.filter( ( row ) => {
		const text =
			`${ row.code } ${ row.name } ${ row.objective } ${ row.topic }`.toLocaleLowerCase();
		return (
			( ! topic || row.topic === topic ) &&
			words.every( ( word ) => text.includes( word ) )
		);
	} );
}

/**
 * Use the localized REST root on subdirectory and plain-permalink sites.
 * @param courseId
 * @param options
 */
export function objectiveRequest( courseId, options = {} ) {
	const { syllabusId, ...settings } = options;
	const path = `/ohmylms/v1/courses/${ courseId }/syllabus-objectives${ syllabusId ? `?syllabus_id=${ Number( syllabusId ) }` : '' }`;
	const root = window.ohmylms_params?.api_url;
	return window.wp.apiFetch( {
		...settings,
		...( root ? { url: restUrl( root, path ) } : { path } ),
	} );
}
