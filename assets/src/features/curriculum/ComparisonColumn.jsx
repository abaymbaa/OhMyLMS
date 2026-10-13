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

/**
 * Independently paged source requirements; alignment never implies equivalence.
 * @param {Object}  props          Column props.
 * @param {number}  props.id       Selected syllabus.
 * @param {Array}   props.selected Pending objectives.
 * @param           props.onSelect Selection callback.
 * @param           props.onEdit   Existing mapping callback.
 * @param {number}  props.revision Reload counter.
 * @param {boolean} props.busy     Disable mutation while saving.
 */
export function ComparisonColumn( {
	id,
	selected,
	onSelect,
	onEdit,
	revision,
	busy,
} ) {
	const [ filters, setFilters ] = useState( {
		search: '',
		topic: '',
		category: '',
		status: '',
		shared_id: '',
		page: 1,
	} );
	const [ data, setData ] = useState( null );
	const [ error, setError ] = useState( '' );
	const [ loading, setLoading ] = useState( false );
	useEffect( () => {
		let current = true;
		setLoading( true );
		setError( '' );
		const timer = setTimeout( () => {
			readComparison( `objectives/${ id }`, filters )
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
	}, [ id, filters, revision ] );
	const filter = ( key, value ) =>
		setFilters( ( previous ) => ( {
			...previous,
			[ key ]: value,
			page: 1,
		} ) );
	return (
		<section className="ohmylms-comparison-column" aria-busy={ loading }>
			<h2>
				{ data?.syllabus.name || __( 'Source objectives', 'ohmylms' ) }
			</h2>
			{ data && (
				<p>
					{ [
						...data.path,
						data.syllabus.version ||
							__( 'Version not recorded', 'ohmylms' ),
						data.settings.grade,
					]
						.filter( Boolean )
						.join( ' · ' ) }
				</p>
			) }
			{ data && (
				<p>
					{ sprintf(
						/* translators: 1: first count, 2: second count or skill name, 3: third count or relation. */
						__(
							'Coverage: %1$d equivalent · %2$d related only · %3$d unmapped',
							'ohmylms'
						),
						data.coverage.equivalent,
						data.coverage.related_only,
						data.coverage.unmapped
					) }
				</p>
			) }
			<TextControl
				label={ __( 'Search objectives', 'ohmylms' ) }
				value={ filters.search }
				onChange={ ( value ) => filter( 'search', value ) }
			/>
			<SelectControl
				label={ __( 'Folder', 'ohmylms' ) }
				value={ filters.topic }
				onChange={ ( value ) => filter( 'topic', value ) }
				options={ [
					{ value: '', label: __( 'All folders', 'ohmylms' ) },
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
					{ value: '', label: __( 'All categories', 'ohmylms' ) },
					...( data?.settings.categories || [] ).map( ( value ) => ( {
						value,
						label: value,
					} ) ),
				] }
			/>
			<SelectControl
				label={ __( 'Mapping status', 'ohmylms' ) }
				value={ filters.status }
				onChange={ ( value ) => filter( 'status', value ) }
				options={ [
					{ value: '', label: __( 'All objectives', 'ohmylms' ) },
					{
						value: 'equivalent',
						label: __( 'Equivalent', 'ohmylms' ),
					},
					{
						value: 'related_only',
						label: __( 'Related only', 'ohmylms' ),
					},
					{ value: 'unmapped', label: __( 'Unmapped', 'ohmylms' ) },
				] }
			/>
			<TextControl
				label={ __( 'Shared skill ID filter', 'ohmylms' ) }
				type="number"
				min="1"
				value={ filters.shared_id }
				onChange={ ( value ) => filter( 'shared_id', value ) }
			/>
			{ loading && <Spinner /> }
			{ error && <p role="alert">{ error }</p> }
			{ ! loading && ! error && ! data?.items.length && (
				<p>{ __( 'No objectives match these filters.', 'ohmylms' ) }</p>
			) }
			{ ! loading &&
				! error &&
				data?.items.map( ( row ) => (
					<article
						key={ row.term_id }
						className="ohmylms-comparison-objective"
					>
						<CheckboxControl
							label={ `${ row.code } ${ row.name }` }
							checked={ selected.some(
								( entry ) => entry.term_id === row.term_id
							) }
							disabled={ busy || row.is_shared }
							onChange={ ( checked ) => onSelect( row, checked ) }
						/>
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
								<summary>{ __( 'Notes', 'ohmylms' ) }</summary>
								<p>{ row.description }</p>
							</details>
						) }
						{ row.maps_to.map( ( mapping ) => (
							<p key={ mapping.id }>
								<Button
									variant="link"
									disabled={ busy }
									onClick={ () => onEdit( row, mapping ) }
								>
									{ mapping.shared?.name } ·{ ' ' }
									{ mapping.relation }
								</Button>
								{ mapping.note && ` · ${ mapping.note }` }
							</p>
						) ) }
					</article>
				) ) }
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
