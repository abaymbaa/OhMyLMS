/** @jsx createElement */
import { createElement, useEffect, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { Button, Spinner, TextControl } from '@wordpress/components';
import { readComparison } from './comparison.mjs';

/**
 * Search shared skills in a column, then focus linked syllabus objectives.
 * @param {Object}  props            Component props.
 * @param {number}  props.roadmapId  Roadmap scope.
 * @param {Object}  props.skill      Selected skill.
 * @param {number}  props.focusId    Skill whose linked objectives are shown.
 * @param {number}  props.revision   Reload counter.
 * @param {boolean} props.disabled   Disable selection during a save.
 * @param           props.onChoose   Selection callback.
 * @param           props.onCreate   Open creation form.
 * @param           props.onSettings Open Roadmap settings.
 */
export function SharedSkillList( {
	roadmapId,
	skill,
	focusId,
	revision,
	disabled,
	onChoose,
	onCreate,
	onSettings,
} ) {
	const [ search, setSearch ] = useState( '' );
	const [ page, setPage ] = useState( 1 );
	const [ data, setData ] = useState( null );
	const [ loading, setLoading ] = useState( false );
	const [ error, setError ] = useState( '' );
	useEffect( () => {
		let active = true;
		setLoading( true );
		const timer = setTimeout( () => {
			readComparison( 'shared-skills', {
				roadmap_id: roadmapId,
				search,
				page,
			} )
				.then( ( response ) => {
					if ( active ) {
						setData( response );
						setError( '' );
					}
				} )
				.catch( ( cause ) => active && setError( cause.message ) )
				.finally( () => active && setLoading( false ) );
		}, 200 );
		return () => {
			active = false;
			clearTimeout( timer );
		};
	}, [ roadmapId, search, page, revision ] );
	const rows = [ ...( data?.items || [] ) ];
	if (
		skill &&
		! search &&
		page === 1 &&
		! rows.some( ( row ) => row.id === skill.id )
	) {
		rows.unshift( skill );
	}
	return (
		<div className="ohmylms-shared-skill-browser">
			<header className="ohmylms-comparison-column-header">
				<h2>{ __( 'Shared skills', 'ohmylms' ) }</h2>
				<div className="ohmylms-comparison-searchbar">
					<TextControl
						label={ __( 'Search shared skills', 'ohmylms' ) }
						type="search"
						value={ search }
						placeholder={ __( 'Search shared skills…', 'ohmylms' ) }
						onChange={ ( value ) => {
							setSearch( value );
							setPage( 1 );
						} }
					/>
					<Button
						variant="secondary"
						disabled={ disabled }
						onClick={ onCreate }
					>
						{ __( 'Add shared skill', 'ohmylms' ) }
					</Button>
				</div>
				<div className="ohmylms-shared-skill-actions">
					<Button
						variant="link"
						disabled={ disabled }
						onClick={ onSettings }
					>
						{ __( 'Roadmap settings', 'ohmylms' ) }
					</Button>
					{ focusId > 0 && (
						<Button
							variant="link"
							disabled={ disabled }
							onClick={ () => onChoose( null ) }
						>
							{ __( 'Show all syllabus objectives', 'ohmylms' ) }
						</Button>
					) }
				</div>
				{ skill && (
					<p
						className="ohmylms-shared-focus"
						data-shared-anchor={ skill.id }
					>
						{ skill.name }
					</p>
				) }
			</header>
			<div
				className="ohmylms-comparison-skills-list"
				role="region"
				aria-label={ __( 'Shared skills list', 'ohmylms' ) }
				tabIndex={ 0 }
				aria-busy={ loading }
			>
				{ loading && <Spinner /> }
				{ error && <p role="alert">{ error }</p> }
				{ ! loading && ! error && ! rows.length && (
					<p>
						{ __(
							'No shared skills found. Use Add shared skill to create one.',
							'ohmylms'
						) }
					</p>
				) }
				{ rows.map( ( row ) => (
					<article
						key={ row.id }
						className="ohmylms-comparison-objective"
					>
						<Button
							className="ohmylms-shared-skill-row"
							variant="link"
							aria-pressed={ focusId === row.id }
							disabled={ disabled }
							onClick={ () => onChoose( row ) }
						>
							{ row.name }
						</Button>
						{ row.topic && (
							<p className="ohmylms-comparison-coverage">
								{ row.topic }
							</p>
						) }
						<p className="ohmylms-comparison-coverage">
							{ sprintf(
								/* translators: %d: saved objective link count. */
								__( '%d linked objectives', 'ohmylms' ),
								row.mappings?.mapped_from.length || 0
							) }
						</p>
					</article>
				) ) }
			</div>
			<div className="ohmylms-comparison-pagination">
				<Button
					variant="secondary"
					disabled={ loading || page === 1 }
					onClick={ () => setPage( page - 1 ) }
				>
					{ __( 'Previous', 'ohmylms' ) }
				</Button>
				<span>
					{ sprintf(
						/* translators: 1: page number, 2: shared skill count. */
						__( 'Page %1$d · %2$d skills', 'ohmylms' ),
						page,
						data?.total || 0
					) }
				</span>
				<Button
					variant="secondary"
					disabled={ loading || page * 30 >= ( data?.total || 0 ) }
					onClick={ () => setPage( page + 1 ) }
				>
					{ __( 'Next', 'ohmylms' ) }
				</Button>
			</div>
		</div>
	);
}
