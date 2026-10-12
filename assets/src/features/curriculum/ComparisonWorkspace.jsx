/** @jsx createElement */
import { createElement, useEffect, useRef, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	Button,
	Notice,
	SelectControl,
	TextareaControl,
	TextControl,
} from '@wordpress/components';
import { ComparisonColumn } from './ComparisonColumn';
import { SharedSkillEditor, SharedSkillPicker } from './SharedSkillEditor';
import { RoadmapBuilder } from './RoadmapBuilder';
import { StudyPlanAudit } from './StudyPlanAudit';
import {
	mappingPreview,
	readComparison,
	writeComparison,
	readLocalDraft,
	saveLocalDraft,
} from './comparison.mjs';

/** Manual comparison workspace. Source objectives never match merely by name. */
export function ComparisonWorkspace() {
	const [ syllabuses, setSyllabuses ] = useState( [] );
	const draft = useRef( readLocalDraft( 'workspace' ) ).current;
	const [ subject, setSubject ] = useState( draft.subject || 'Mathematics' );
	const [ sources, setSources ] = useState( draft.sources || [ 0, 0 ] );
	const [ selected, setSelected ] = useState( draft.selected || [] );
	const [ shared, setShared ] = useState( draft.shared || null );
	const [ relation, setRelation ] = useState(
		draft.relation || 'equivalent'
	);
	const [ note, setNote ] = useState( draft.note || '' );
	const [ dirty, setDirty ] = useState( false );
	const [ busy, setBusy ] = useState( false );
	const [ revision, setRevision ] = useState( 0 );
	const [ notice, setNotice ] = useState( null );
	const [ removing, setRemoving ] = useState( null );
	const saving = useRef( false );
	useEffect(
		() =>
			saveLocalDraft( 'workspace', {
				subject,
				sources,
				selected,
				shared,
				relation,
				note,
			} ),
		[ subject, sources, selected, shared, relation, note ]
	);
	useEffect( () => {
		readComparison( 'syllabuses' )
			.then( ( response ) => {
				setSyllabuses( response.items );
				const savedSources =
					draft.sources ||
					response.selected[ draft.subject || 'Mathematics' ];
				setSources(
					savedSources?.length
						? savedSources
						: response.items
								.slice( 0, 2 )
								.map( ( item ) => item.id )
				);
			} )
			.catch( ( cause ) =>
				setNotice( { status: 'error', message: cause.message } )
			);
	}, [ draft ] );
	useEffect( () => {
		if ( ! dirty && ! selected.length && ! removing ) {
			return;
		}
		const warn = ( event ) => {
			event.preventDefault();
			event.returnValue = '';
		};
		window.addEventListener( 'beforeunload', warn );
		return () => window.removeEventListener( 'beforeunload', warn );
	}, [ dirty, selected, removing ] );
	const options = [
		{ value: 0, label: __( 'Choose a syllabus', 'ohmylms' ) },
		...syllabuses.map( ( item ) => ( {
			value: item.id,
			label: `${ item.name } · ${ item.version || __( 'Version not recorded', 'ohmylms' ) }`,
		} ) ),
	];
	function select( row, checked, id ) {
		setRemoving( null );
		setSelected( ( previous ) =>
			checked
				? [
						...previous.filter(
							( entry ) => entry.term_id !== row.term_id
						),
						{
							...row,
							syllabus_id: id,
							syllabus_name: syllabuses.find(
								( item ) => item.id === id
							)?.name,
						},
					]
				: previous.filter( ( entry ) => entry.term_id !== row.term_id )
		);
	}
	async function run( action, message ) {
		if ( saving.current ) {
			return;
		}
		saving.current = true;
		setBusy( true );
		setNotice( null );
		try {
			await action();
			setRevision( ( previous ) => previous + 1 );
			setNotice( { status: 'success', message } );
		} catch ( cause ) {
			setRevision( ( previous ) => previous + 1 );
			setNotice( { status: 'error', message: cause.message } );
		} finally {
			saving.current = false;
			setBusy( false );
		}
	}
	async function edit( row, mapping, id ) {
		if ( dirty || selected.length ) {
			setNotice( {
				status: 'warning',
				message: __(
					'Save or clear the current proposal before opening another mapping.',
					'ohmylms'
				),
			} );
			return;
		}
		await run(
			async () => {
				const target = await readComparison(
					`shared-skills/${ mapping.shared_id }`
				);
				setShared( target );
				setSelected( [
					{
						...row,
						syllabus_id: id,
						syllabus_name: syllabuses.find(
							( item ) => item.id === id
						)?.name,
					},
				] );
				setRelation( mapping.relation );
				setNote( mapping.note );
				setRemoving( mapping );
			},
			__( 'Mapping opened for review.', 'ohmylms' )
		);
	}
	const preview = mappingPreview( selected, shared, relation, note );
	return (
		<div className="ohmylms-comparison">
			<header>
				<Button
					variant="link"
					href="#/content-hub/curriculum"
					disabled={ dirty || selected.length > 0 }
				>
					{ __( 'Back to curriculum', 'ohmylms' ) }
				</Button>
				<h1>{ __( 'Shared skills', 'ohmylms' ) }</h1>
				<p>
					{ __(
						'Compare requirements, define assessable shared abilities, and save each relationship explicitly. Equivalent evidence contributes to shared mastery; related links are reference only. Row positions do not imply equivalence.',
						'ohmylms'
					) }
				</p>
			</header>
			{ notice && (
				<Notice
					status={ notice.status }
					onRemove={ () => setNotice( null ) }
				>
					{ notice.message }
				</Notice>
			) }
			<div className="ohmylms-comparison-selectors">
				<TextControl
					label={ __( 'Subject', 'ohmylms' ) }
					value={ subject }
					disabled={ busy || dirty || selected.length > 0 }
					onChange={ ( value ) => {
						setSubject( value );
						setShared( null );
					} }
				/>
				{ sources.map( ( id, index ) => (
					<div key={ index }>
						<SelectControl
							label={ sprintf(
								/* translators: %d: count or skill ID. */
								__( 'Source %d / version', 'ohmylms' ),
								index + 1
							) }
							value={ id }
							options={ options }
							disabled={ busy }
							onChange={ ( value ) =>
								setSources(
									sources.map( ( current, position ) =>
										position === index
											? Number( value )
											: current
									)
								)
							}
						/>
						<Button
							variant="link"
							disabled={ busy || sources.length <= 1 }
							onClick={ () =>
								setSources(
									sources.filter(
										( current, position ) =>
											position !== index
									)
								)
							}
						>
							{ __( 'Remove source column', 'ohmylms' ) }
						</Button>
					</div>
				) ) }
				<Button
					variant="secondary"
					disabled={ busy || sources.length >= 10 }
					onClick={ () => setSources( [ ...sources, 0 ] ) }
				>
					{ __( 'Add syllabus or roadmap', 'ohmylms' ) }
				</Button>
				<Button
					variant="secondary"
					disabled={
						busy ||
						! subject.trim() ||
						! sources.length ||
						sources.some( ( id ) => ! id ) ||
						new Set( sources ).size !== sources.length
					}
					onClick={ () =>
						run(
							() =>
								writeComparison(
									'configuration',
									{ subject, syllabus_ids: sources },
									'PUT'
								),
							__(
								'These syllabuses are selected for subject profiles. Only published syllabuses appear to learners.',
								'ohmylms'
							)
						)
					}
				>
					{ __(
						'Use these syllabuses in subject profiles',
						'ohmylms'
					) }
				</Button>
			</div>
			<div
				className="ohmylms-comparison-grid"
				style={ {
					gridTemplateColumns: `minmax(300px, 360px) repeat(${ new Set( sources.filter( Boolean ) ).size }, minmax(320px, 1fr))`,
				} }
			>
				<section className="ohmylms-comparison-center">
					<StudyPlanAudit />
					<h2>{ __( 'Shared skill and proposal', 'ohmylms' ) }</h2>
					<SharedSkillPicker
						subject=""
						skill={ shared }
						revision={ revision }
						disabled={ dirty || busy }
						onChoose={ ( skill ) => {
							setShared( skill );
							setRemoving( null );
						} }
					/>
					<SharedSkillEditor
						subject={ shared?.subject ?? subject }
						key={ `${ shared?.id || 0 }:${ shared?.revision || '' }` }
						skill={ shared }
						onDirty={ setDirty }
						onSaved={ ( skill ) => {
							setShared( skill );
							setRevision( ( previous ) => previous + 1 );
						} }
					/>
					<RoadmapBuilder skill={ shared } subject={ subject } />
					<h3>{ __( 'Mapping preview', 'ohmylms' ) }</h3>
					<p>
						{ sprintf(
							/* translators: %d: count or skill ID. */
							__( '%d selected objectives', 'ohmylms' ),
							selected.length
						) }
					</p>
					<ul>
						{ selected.map( ( row ) => (
							<li key={ row.term_id }>
								{ row.syllabus_name } · { row.code } ·{ ' ' }
								{ row.name }
								<Button
									variant="link"
									disabled={ busy }
									onClick={ () =>
										select( row, false, row.syllabus_id )
									}
								>
									{ __( 'Deselect', 'ohmylms' ) }
								</Button>
							</li>
						) ) }
					</ul>
					<SelectControl
						label={ __( 'Relationship', 'ohmylms' ) }
						value={ relation }
						onChange={ setRelation }
						disabled={ busy }
						options={ [
							{
								value: 'equivalent',
								label: __(
									'Equivalent: pools evidence',
									'ohmylms'
								),
							},
							{
								value: 'related',
								label: __(
									'Related: no pooled evidence',
									'ohmylms'
								),
							},
						] }
					/>
					<TextareaControl
						label={ __(
							'Scope, difficulty and version differences',
							'ohmylms'
						) }
						value={ note }
						maxLength={ 1000 }
						onChange={ setNote }
						disabled={ busy }
					/>
					{ preview.length > 0 && (
						<p>
							{ sprintf(
								/* translators: 1: first count, 2: second count or skill name, 3: third count or relation. */
								__(
									'Save %1$d links to “%2$s” as %3$s.',
									'ohmylms'
								),
								preview.length,
								shared.name,
								relation
							) }
						</p>
					) }
					<Button
						variant="primary"
						disabled={ busy || dirty || ! preview.length }
						isBusy={ busy }
						onClick={ () =>
							run(
								async () => {
									for ( const payload of preview ) {
										await writeComparison(
											'mapping',
											payload,
											'PUT'
										);
										setSelected( ( previous ) =>
											previous.filter(
												( row ) =>
													row.term_id !==
													payload.specific_id
											)
										);
									}
									setShared(
										await readComparison(
											`shared-skills/${ shared.id }`
										)
									);
									setNote( '' );
									setRemoving( null );
								},
								__(
									'Mappings saved. Shared mastery now uses the equivalent links.',
									'ohmylms'
								)
							)
						}
					>
						{ __( 'Save proposed mappings', 'ohmylms' ) }
					</Button>
					{ removing && (
						<Button
							variant="secondary"
							isDestructive
							disabled={ busy || dirty }
							onClick={ () =>
								run(
									async () => {
										await writeComparison(
											'mapping/remove',
											{
												specific_id:
													removing.specific_id,
												shared_id: removing.shared_id,
												expected_revision:
													removing.revision,
											}
										);
										setSelected( [] );
										setRemoving( null );
										setShared(
											await readComparison(
												`shared-skills/${ shared.id }`
											)
										);
									},
									__( 'Mapping removed.', 'ohmylms' )
								)
							}
						>
							{ __( 'Remove this mapping', 'ohmylms' ) }
						</Button>
					) }
					<Button
						variant="link"
						disabled={ busy }
						onClick={ () => {
							setSelected( [] );
							setRemoving( null );
							setNote( '' );
						} }
					>
						{ __( 'Clear mapping proposal', 'ohmylms' ) }
					</Button>
					{ selected.length > 0 && (
						<Button
							variant="link"
							disabled={ busy }
							onClick={ () =>
								run(
									async () => {
										const rows = [];
										for ( const row of selected ) {
											const response =
												await readComparison(
													`objectives/${ row.syllabus_id }`,
													{
														search: row.code,
														page: 1,
													}
												);
											const current = response.items.find(
												( item ) =>
													item.term_id === row.term_id
											);
											if ( ! current ) {
												throw new Error(
													__(
														'A selected objective is unavailable. Clear and select it again.',
														'ohmylms'
													)
												);
											}
											rows.push( { ...row, ...current } );
										}
										setSelected( rows );
										if ( shared ) {
											setShared(
												await readComparison(
													`shared-skills/${ shared.id }`
												)
											);
										}
									},
									__(
										'Current mapping revisions loaded. Review the proposal before saving.',
										'ohmylms'
									)
								)
							}
						>
							{ __( 'Reload proposal revisions', 'ohmylms' ) }
						</Button>
					) }
				</section>
				{ [ ...new Set( sources.filter( Boolean ) ) ].map( ( id ) => (
					<ComparisonColumn
						key={ id }
						id={ id }
						selected={ selected }
						onSelect={ ( row, checked ) =>
							select( row, checked, id )
						}
						onEdit={ ( row, mapping ) => edit( row, mapping, id ) }
						revision={ revision }
						busy={ busy }
					/>
				) ) }
			</div>
		</div>
	);
}
