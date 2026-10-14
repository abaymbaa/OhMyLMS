/** @jsx createElement */
import { createElement, useEffect, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	Button,
	CheckboxControl,
	SelectControl,
	Spinner,
	TextControl,
} from '@wordpress/components';
import { readComparison } from './comparison.mjs';
import { RelationshipBadge } from './RelationshipBadge';

/**
 * Independently paged source requirements; alignment never implies equivalence.
 * @param {Object}  props                  Column props.
 * @param {number}  props.id               Selected syllabus.
 * @param {Array}   props.selected         Pending objectives.
 * @param           props.onSelect         Selection callback.
 * @param           props.onEdit           Existing mapping callback.
 * @param {number}  props.revision         Reload counter.
 * @param {boolean} props.busy             Disable mutation while saving.
 * @param {number}  props.linkedSkillId    Shared skill selected in the adjacent column.
 * @param           props.onClearLinked    Clear the selected shared-skill focus.
 * @param {number}  props.proposalSharedId Shared target of the pending proposal.
 * @param {string}  props.proposalRelation Pending relationship.
 */
export function ComparisonColumn( {
	id,
	selected,
	onSelect,
	onEdit,
	revision,
	busy,
	linkedSkillId = 0,
	onClearLinked,
	proposalSharedId = 0,
	proposalRelation = 'equivalent',
} ) {
	const [ filters, setFilters ] = useState( {
		search: '',
		topic: '',
		category: '',
		status: '',
		shared_id: '',
		group: '',
		page: 1,
	} );
	const [ data, setData ] = useState( null );
	const [ error, setError ] = useState( '' );
	const [ loading, setLoading ] = useState( false );
	const [ showFilters, setShowFilters ] = useState( false );
	useEffect( () => {
		let current = true;
		setLoading( true );
		setError( '' );
		const timer = setTimeout( () => {
			readComparison( `objectives/${ id }`, {
				...filters,
				shared_id: filters.shared_id,
			} )
				.then( ( response ) => {
					if ( current ) {
						setData( response );
					}
				} )
				.catch( ( cause ) => current && setError( cause.message ) )
				.finally( () => current && setLoading( false ) );
		}, 200 );
		return () => {
			current = false;
			clearTimeout( timer );
		};
	}, [ id, filters, revision, linkedSkillId ] );
	useEffect( () => {
		setFilters( ( previous ) => ( {
			...previous,
			shared_id: '',
			page: 1,
		} ) );
	}, [ linkedSkillId ] );
	const filter = ( key, value ) =>
		setFilters( ( previous ) => ( {
			...previous,
			[ key ]: value,
			page: 1,
		} ) );
	const activeFilters = [
		{ key: 'topic', label: data?.topics?.[ filters.topic ] },
		{ key: 'category', label: filters.category },
		{ key: 'group', label: data?.groups?.[ filters.group ] },
		{
			key: 'status',
			label: {
				equivalent: __( 'Equivalent', 'ohmylms' ),
				related_only: __( 'Reference only', 'ohmylms' ),
				unmapped: __( 'Unmapped', 'ohmylms' ),
			}[ filters.status ],
		},
		{
			key: 'shared_id',
			label: filters.shared_id ? `#${ filters.shared_id }` : '',
		},
	].filter( ( entry ) => filters[ entry.key ] );
	return (
		<section className="ohmylms-comparison-column" aria-busy={ loading }>
			<header className="ohmylms-comparison-column-header">
				<h2>
					{ data?.syllabus.name ||
						__( 'Source objectives', 'ohmylms' ) }
				</h2>
				{ data && (
					<nav
						className="ohmylms-comparison-breadcrumb"
						aria-label={ __( 'Syllabus breadcrumb', 'ohmylms' ) }
					>
						<ol>
							{ [
								...data.path,
								data.syllabus.version ||
									__( 'Version not recorded', 'ohmylms' ),
								data.settings.grade,
							]
								.filter( Boolean )
								.map( ( label, index ) => (
									<li key={ index }>{ label }</li>
								) ) }
						</ol>
					</nav>
				) }
				{ data && (
					<p className="ohmylms-comparison-coverage">
						{ sprintf(
							/* translators: 1: first count, 2: second count or skill name, 3: third count or relation. */
							__(
								'Coverage: %1$d equivalent · %2$d reference only · %3$d unmapped',
								'ohmylms'
							),
							data.coverage.equivalent,
							data.coverage.related_only,
							data.coverage.unmapped
						) }
					</p>
				) }
				<div className="ohmylms-comparison-searchbar">
					<TextControl
						label={ __( 'Search objectives', 'ohmylms' ) }
						hideLabel
						type="search"
						placeholder={ __( 'Search skills…', 'ohmylms' ) }
						value={ filters.search }
						onChange={ ( value ) => filter( 'search', value ) }
					/>
					<Button
						variant={ showFilters ? 'primary' : 'secondary' }
						aria-expanded={ showFilters }
						aria-controls={ `ohmylms-column-filters-${ id }` }
						onClick={ () => setShowFilters( ! showFilters ) }
					>
						{ __( 'Filters', 'ohmylms' ) }
						{ activeFilters.length
							? ` (${ activeFilters.length })`
							: '' }
					</Button>
				</div>
				{ activeFilters.length > 0 && (
					<div className="ohmylms-comparison-filter-chips">
						{ activeFilters.map( ( entry ) => (
							<Button
								key={ entry.key }
								variant="secondary"
								size="small"
								aria-label={ sprintf(
									/* translators: %s: active filter label. */
									__( 'Clear filter: %s', 'ohmylms' ),
									entry.label || filters[ entry.key ]
								) }
								onClick={ () => {
									if (
										entry.key === 'shared_id' &&
										linkedSkillId
									) {
										onClearLinked?.();
									}
									filter( entry.key, '' );
								} }
							>
								{ entry.label || filters[ entry.key ] }{ ' ' }
								<span aria-hidden="true">×</span>
							</Button>
						) ) }
						<Button
							variant="link"
							size="small"
							onClick={ () => {
								if ( linkedSkillId ) {
									onClearLinked?.();
								}
								setFilters( ( previous ) => ( {
									...previous,
									topic: '',
									category: '',
									status: '',
									group: '',
									shared_id: '',
									page: 1,
								} ) );
							} }
						>
							{ __( 'Clear filters', 'ohmylms' ) }
						</Button>
					</div>
				) }
				<div
					id={ `ohmylms-column-filters-${ id }` }
					className="ohmylms-comparison-filter-panel"
					hidden={ ! showFilters }
				>
					<SelectControl
						label={ __( 'Folder', 'ohmylms' ) }
						value={ filters.topic }
						onChange={ ( value ) => filter( 'topic', value ) }
						options={ [
							{
								value: '',
								label: __( 'All folders', 'ohmylms' ),
							},
							...Object.entries( data?.topics || {} ).map(
								( [ value, label ] ) => ( { value, label } )
							),
						] }
					/>
					<SelectControl
						label={ __( 'Category / tier', 'ohmylms' ) }
						value={ filters.category }
						onChange={ ( value ) => filter( 'category', value ) }
						options={ [
							{
								value: '',
								label: __( 'All categories', 'ohmylms' ),
							},
							...( data?.settings.categories || [] ).map(
								( value ) => ( {
									value,
									label: value,
								} )
							),
						] }
					/>
					{ data?.syllabus.item_type === 'roadmap' && (
						<SelectControl
							label={ __( 'Shared skill folder', 'ohmylms' ) }
							value={ filters.group }
							onChange={ ( value ) => filter( 'group', value ) }
							options={ [
								{
									value: '',
									label: __(
										'All shared skill folders',
										'ohmylms'
									),
								},
								...Object.entries( data.groups || {} ).map(
									( [ value, label ] ) => ( { value, label } )
								),
							] }
						/>
					) }
					<SelectControl
						label={ __( 'Mapping status', 'ohmylms' ) }
						value={ filters.status }
						onChange={ ( value ) => filter( 'status', value ) }
						options={ [
							{
								value: '',
								label: __( 'All objectives', 'ohmylms' ),
							},
							{
								value: 'equivalent',
								label: __( 'Equivalent', 'ohmylms' ),
							},
							{
								value: 'related_only',
								label: __( 'Reference only', 'ohmylms' ),
							},
							{
								value: 'unmapped',
								label: __( 'Unmapped', 'ohmylms' ),
							},
						] }
					/>
					<TextControl
						label={ __( 'Shared skill ID filter', 'ohmylms' ) }
						type="number"
						min="1"
						value={ filters.shared_id }
						onChange={ ( value ) => filter( 'shared_id', value ) }
					/>
				</div>
			</header>
			<div
				className="ohmylms-comparison-skills-list"
				role="region"
				aria-label={ __( 'Scrollable skills list', 'ohmylms' ) }
				tabIndex={ 0 }
			>
				{ loading && <Spinner /> }
				{ error && <p role="alert">{ error }</p> }
				{ ! loading && ! error && ! data?.items.length && (
					<p>
						{ __(
							'No objectives match these filters.',
							'ohmylms'
						) }
					</p>
				) }
				{ ! loading &&
					! error &&
					data?.items.map( ( row ) => {
						const pending =
							proposalSharedId &&
							selected.some(
								( entry ) => entry.term_id === row.term_id
							);
						const saved = row.maps_to.find(
							( mapping ) => mapping.shared_id === linkedSkillId
						);
						const connection = pending
							? {
									shared_id: proposalSharedId,
									relation: proposalRelation,
									group_uuid:
										proposalRelation === 'combined'
											? 'proposal'
											: '',
								}
							: saved;
						const highlightClass = connection
							? ` is-connected is-${ connection.relation }`
							: '';
						const dimClass =
							! connection && linkedSkillId
								? ' is-unrelated'
								: '';
						return (
							<article
								key={ row.term_id }
								className={ `ohmylms-comparison-objective${ highlightClass }${ dimClass }` }
								data-syllabus-id={ id }
								data-objective-id={ row.term_id }
								data-connection-shared={
									connection?.shared_id || undefined
								}
								data-connection-relation={
									connection?.relation
								}
								data-connection-group={ connection?.group_uuid }
								data-connection-pending={
									pending ? 'true' : 'false'
								}
							>
								<CheckboxControl
									label={ `${ row.code } ${ row.name }` }
									checked={ selected.some(
										( entry ) =>
											entry.term_id === row.term_id
									) }
									disabled={ busy || row.is_shared }
									onChange={ ( checked ) =>
										onSelect( row, checked )
									}
								/>
								{ pending && (
									<RelationshipBadge
										relation={ proposalRelation }
										pending
									/>
								) }
								<p>{ row.objective }</p>
								{ row.is_shared && (
									<p>
										{ __(
											'Reusable roadmap skill: uses its own content and mastery directly.',
											'ohmylms'
										) }
									</p>
								) }
								<p>
									{ [
										row.category,
										...row.memberships.map(
											( membership ) =>
												`${ membership.topic } › ${ membership.code } ${ membership.group }`
										),
									]
										.filter( Boolean )
										.join( ' · ' ) }
								</p>
								{ row.description !== row.objective && (
									<details>
										<summary>
											{ __( 'Notes', 'ohmylms' ) }
										</summary>
										<p>{ row.description }</p>
									</details>
								) }
								{ row.maps_to.map( ( mapping ) => (
									<p key={ mapping.id }>
										<Button
											variant="link"
											disabled={ busy }
											onClick={ () =>
												onEdit( row, mapping )
											}
										>
											{ mapping.shared?.name } ·{ ' ' }
											<RelationshipBadge
												relation={ mapping.relation }
											/>
										</Button>
										{ mapping.note &&
											` · ${ mapping.note }` }
									</p>
								) ) }
							</article>
						);
					} ) }
			</div>
			<div className="ohmylms-comparison-pagination">
				<Button
					variant="secondary"
					disabled={ loading || filters.page <= 1 }
					onClick={ () =>
						setFilters( { ...filters, page: filters.page - 1 } )
					}
				>
					{ __( 'Previous', 'ohmylms' ) }
				</Button>
				<span>
					{ sprintf(
						/* translators: 1: page, 2: objective count. */
						__( 'Page %1$d · %2$d objectives', 'ohmylms' ),
						filters.page,
						data?.total || 0
					) }
				</span>
				<Button
					variant="secondary"
					disabled={
						loading || filters.page * 30 >= ( data?.total || 0 )
					}
					onClick={ () =>
						setFilters( { ...filters, page: filters.page + 1 } )
					}
				>
					{ __( 'Next', 'ohmylms' ) }
				</Button>
			</div>
		</section>
	);
}
