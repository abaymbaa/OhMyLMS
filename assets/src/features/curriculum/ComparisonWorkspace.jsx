/** @jsx createElement */
import { createElement, useEffect, useRef, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import {
	Button,
	Notice,
	SelectControl,
	TextareaControl,
	TextControl,
} from '@wordpress/components';
import { ComparisonColumn } from './ComparisonColumn';
import { SharedSkillEditor, SharedSkillPicker } from './SharedSkillEditor';
import { SharedSkillDetails } from './SharedSkillDetails';
import { SharedSkillList } from './SharedSkillList';
import { MappingConnections } from './MappingConnections';
import { RelationshipBadge } from './RelationshipBadge';
import { combinedGroups, relationshipLabels } from './relationships.mjs';
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
	const roadmapId =
		Number(
			new URLSearchParams(
				window.location.hash.split( '?' )[ 1 ] || ''
			).get( 'roadmap' )
		) || 0;
	return <ComparisonEditor key={ roadmapId } roadmapId={ roadmapId } />;
}

function ComparisonEditor( { roadmapId } ) {
	const gridRef = useRef( null );
	const [ roadmap, setRoadmap ] = useState( null );
	const [ roadmapDirty, setRoadmapDirty ] = useState( false );
	const [ visibility, setVisibility ] = useState( 'shared' );
	const [ editingShared, setEditingShared ] = useState( false );
	const [ linkedFocus, setLinkedFocus ] = useState( 0 );
	const [ syllabuses, setSyllabuses ] = useState( [] );
	const draftKey = roadmapId ? `roadmap-${ roadmapId }` : 'workspace';
	const draft = useRef( readLocalDraft( draftKey ) ).current;
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
	const [ leaving, setLeaving ] = useState( false );
	const cancelLeaveRef = useRef( null );
	const saving = useRef( false );
	useEffect(
		() =>
			saveLocalDraft( draftKey, {
				subject,
				sources,
				selected,
				shared,
				relation,
				note,
			} ),
		[ draftKey, subject, sources, selected, shared, relation, note ]
	);
	useEffect( () => {
		readComparison( 'syllabuses' )
			.then( async ( response ) => {
				setSyllabuses( response.items );
				if ( roadmapId ) {
					const saved = await readComparison(
						`roadmaps/${ roadmapId }`
					);
					setRoadmap( saved );
					setSources( saved.syllabus_ids );
					return;
				}
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
	}, [ draft, roadmapId ] );
	useEffect( () => {
		if (
			! dirty &&
			! selected.length &&
			! removing &&
			! roadmapDirty &&
			( ! roadmap ||
				JSON.stringify( sources ) ===
					JSON.stringify( roadmap.syllabus_ids ) )
		) {
			return;
		}
		const warn = ( event ) => {
			event.preventDefault();
			event.returnValue = '';
		};
		window.addEventListener( 'beforeunload', warn );
		return () => window.removeEventListener( 'beforeunload', warn );
	}, [ dirty, selected, removing, roadmapDirty, roadmap, sources ] );
	const options = [
		{ value: 0, label: __( 'Choose a syllabus', 'ohmylms' ) },
		...syllabuses
			.filter( ( item ) => item.id !== roadmapId )
			.map( ( item ) => ( {
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
				setVisibility( 'shared' );
				const target = await readComparison(
					`shared-skills/${ mapping.shared_id }`
				);
				setShared( target );
				if ( mapping.group_uuid ) {
					const group = await readComparison(
						`mapping-groups/${ mapping.group_uuid }`
					);
					setSelected(
						group.items.map( ( item ) => ( {
							...item,
							syllabus_id: group.source_id,
							syllabus_name: syllabuses.find(
								( source ) => source.id === group.source_id
							)?.name,
						} ) )
					);
				} else {
					setSelected( [
						{
							...row,
							syllabus_id: id,
							syllabus_name: syllabuses.find(
								( item ) => item.id === id
							)?.name,
						},
					] );
				}
				setRelation( mapping.relation );
				setNote( mapping.note );
				setRemoving( mapping );
			},
			__( 'Mapping opened for review.', 'ohmylms' )
		);
	}
	const preview = mappingPreview( selected, shared, relation, note );
	const combined = combinedGroups( selected, preview );
	const invalidCombined =
		relation === 'combined' &&
		( ! combined.length ||
			combined.some( ( group ) => group.pairs.length < 2 ) );
	// What going back would throw away. The Back button explains it instead of staying disabled.
	const unsavedReasons = [];
	if ( selected.length > 0 ) {
		unsavedReasons.push(
			sprintf(
				/* translators: %d: number of objectives selected for an unsaved mapping proposal. */
				_n(
					'%d objective is selected in a mapping proposal that has not been saved.',
					'%d objectives are selected in a mapping proposal that has not been saved.',
					selected.length,
					'ohmylms'
				),
				selected.length
			)
		);
	}
	if ( dirty ) {
		unsavedReasons.push(
			__( 'You have unsaved edits to a shared skill.', 'ohmylms' )
		);
	}
	const hasUnsavedWork = unsavedReasons.length > 0;
	useEffect( () => {
		if ( ! hasUnsavedWork ) {
			setLeaving( false );
		}
	}, [ hasUnsavedWork ] );
	useEffect( () => {
		if ( leaving ) {
			cancelLeaveRef.current?.focus();
		}
	}, [ leaving ] );
	function discardAndLeave() {
		// Forget this page's drafts so they are not restored on the next visit. Only the
		// skill editor that is open (and therefore reported as unsaved) is cleared.
		saveLocalDraft( draftKey, { subject, sources } );
		if ( dirty ) {
			saveLocalDraft(
				`skill-${ roadmapId && visibility === 'create' ? 0 : shared?.id || 0 }`,
				{}
			);
		}
		window.location.hash = '#/content-hub/curriculum';
	}
	return (
		<div className="ohmylms-comparison">
			<header>
				<Button
					variant="link"
					href="#/content-hub/curriculum"
					onClick={ ( event ) => {
						if ( hasUnsavedWork ) {
							event.preventDefault();
							setLeaving( true );
						}
					} }
				>
					{ __( 'Back to curriculum', 'ohmylms' ) }
				</Button>
				{ leaving && hasUnsavedWork && (
					<Notice
						status="warning"
						isDismissible={ false }
						politeness="assertive"
						className="ohmylms-comparison-leave"
					>
						<strong>
							{ __( 'Leave without saving?', 'ohmylms' ) }
						</strong>
						<ul>
							{ unsavedReasons.map( ( reason ) => (
								<li key={ reason }>{ reason }</li>
							) ) }
						</ul>
						<p>
							{ __(
								'Going back discards these changes.',
								'ohmylms'
							) }
						</p>
						<div className="ohmylms-comparison-leave-actions">
							<Button
								variant="primary"
								isDestructive
								onClick={ discardAndLeave }
							>
								{ __(
									'Discard changes and go back',
									'ohmylms'
								) }
							</Button>
							<Button
								variant="secondary"
								ref={ cancelLeaveRef }
								onClick={ () => setLeaving( false ) }
							>
								{ __( 'Cancel', 'ohmylms' ) }
							</Button>
						</div>
					</Notice>
				) }
				<h1>
					{ roadmapId
						? roadmap?.name || __( 'Roadmap', 'ohmylms' )
						: __( 'Shared skills', 'ohmylms' ) }
				</h1>
				{ roadmapId > 0 && (
					<h2>
						{ __(
							'Compare syllabuses and map shared skills',
							'ohmylms'
						) }
					</h2>
				) }
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
			{ roadmapId > 0 && (
				<div
					className="ohmylms-comparison-views"
					role="tablist"
					aria-label={ __( 'Roadmap views', 'ohmylms' ) }
				>
					{ [
						{
							id: 'create',
							label: __( 'Create shared skill', 'ohmylms' ),
						},
						{
							id: 'shared',
							label: __(
								'Shared skills and linked objectives',
								'ohmylms'
							),
						},
						{
							id: 'roadmap',
							label: __( 'Roadmap as syllabus', 'ohmylms' ),
						},
					].map( ( view ) => (
						<Button
							key={ view.id }
							id={ `ohmylms-view-${ view.id }` }
							role="tab"
							aria-selected={ visibility === view.id }
							aria-controls="ohmylms-roadmap-view"
							variant={
								visibility === view.id ? 'primary' : 'secondary'
							}
							disabled={ busy || dirty }
							onClick={ () => {
								setVisibility( view.id );
								setLinkedFocus( 0 );
								setEditingShared( false );
								if ( view.id === 'create' ) {
									setShared( null );
									setRemoving( null );
								}
							} }
						>
							{ view.label }
						</Button>
					) ) }
				</div>
			) }
			<div
				className="ohmylms-comparison-grid"
				ref={ gridRef }
				style={ {
					gridTemplateColumns: `minmax(300px, 360px) repeat(${ new Set( sources.filter( Boolean ) ).size + ( roadmapId && visibility === 'roadmap' ? 1 : 0 ) }, minmax(320px, 1fr))`,
				} }
			>
				<section
					className={ `ohmylms-comparison-center${ roadmapId && visibility === 'shared' ? ' is-shared-list' : '' }` }
					id="ohmylms-roadmap-view"
					role={ roadmapId ? 'tabpanel' : undefined }
					aria-labelledby={
						roadmapId ? `ohmylms-view-${ visibility }` : undefined
					}
				>
					{ ! roadmapId && <StudyPlanAudit /> }
					{ ! roadmapId && (
						<h2>
							{ __( 'Shared skill and proposal', 'ohmylms' ) }
						</h2>
					) }
					<div
						className="ohmylms-shared-view"
						hidden={ roadmapId > 0 && visibility !== 'shared' }
					>
						{ roadmapId > 0 ? (
							<SharedSkillList
								roadmapId={ roadmapId }
								skill={ shared }
								focusId={ linkedFocus }
								revision={ revision }
								disabled={ dirty || busy }
								onChoose={ ( skill ) => {
									setShared( skill );
									setLinkedFocus( skill?.id || 0 );
									setRemoving( null );
								} }
								onCreate={ () => {
									setVisibility( 'create' );
									setShared( null );
									setLinkedFocus( 0 );
									setRemoving( null );
								} }
								onSettings={ () => {
									setVisibility( 'roadmap' );
									setLinkedFocus( 0 );
								} }
							/>
						) : (
							<SharedSkillPicker
								roadmapId={ roadmapId }
								subject=""
								skill={ shared }
								revision={ revision }
								disabled={ dirty || busy }
								onChoose={ ( skill ) => {
									setShared( skill );
									setRemoving( null );
								} }
							/>
						) }
						{ roadmapId > 0 && shared && (
							<details className="ohmylms-shared-skill-details">
								<summary>
									{ __(
										'Selected skill details',
										'ohmylms'
									) }
								</summary>
								<SharedSkillDetails skill={ shared } />
								{ shared && (
									<Button
										variant="secondary"
										disabled={ busy || dirty }
										onClick={ () =>
											setEditingShared( ! editingShared )
										}
									>
										{ editingShared
											? __(
													'Close shared skill editor',
													'ohmylms'
												)
											: __(
													'Edit shared skill',
													'ohmylms'
												) }
									</Button>
								) }
							</details>
						) }
					</div>
					<div
						hidden={
							roadmapId > 0 &&
							visibility !== 'create' &&
							! editingShared
						}
					>
						{ ( ! roadmapId ||
							visibility === 'create' ||
							editingShared ) && (
							<SharedSkillEditor
								roadmapId={ roadmapId }
								subject={
									visibility === 'create' && roadmapId
										? subject
										: ( shared?.subject ?? subject )
								}
								key={
									roadmapId && visibility === 'create'
										? 'create'
										: `${ shared?.id || 0 }:${ shared?.revision || '' }`
								}
								skill={
									roadmapId && visibility === 'create'
										? null
										: shared
								}
								onDirty={ setDirty }
								onSaved={ ( skill ) => {
									setShared( skill );
									setVisibility( 'shared' );
									setEditingShared( false );
									setRevision( ( previous ) => previous + 1 );
								} }
							/>
						) }
					</div>
					<div hidden={ roadmapId > 0 && visibility !== 'roadmap' }>
						{ ! roadmapId ? (
							<RoadmapBuilder
								skill={ shared }
								subject={ subject }
							/>
						) : (
							roadmap && (
								<RoadmapBuilder
									key={ roadmap.id }
									roadmap={ roadmap }
									onDirty={ setRoadmapDirty }
									onBusyChange={ setBusy }
									initialSkills={ roadmap.skills }
									syllabusIds={ sources }
									skill={ shared }
									disabled={
										busy || dirty || selected.length > 0
									}
									onSaved={ ( saved ) => {
										setRoadmap( saved );
										setRevision(
											( current ) => current + 1
										);
									} }
								/>
							)
						) }
					</div>
					<div
						hidden={
							roadmapId > 0 &&
							visibility !== 'create' &&
							! selected.length &&
							! removing
						}
					>
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
											select(
												row,
												false,
												row.syllabus_id
											)
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
									value: 'broader',
									label: __(
										'Source is broader: no pooled evidence',
										'ohmylms'
									),
								},
								{
									value: 'narrower',
									label: __(
										'Source is narrower: no pooled evidence',
										'ohmylms'
									),
								},
								{
									value: 'combined',
									label: __(
										'Required together: descriptive coverage only',
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
						{ invalidCombined && (
							<p role="alert">
								{ __(
									'Select at least two objectives from each source being grouped. Save an individually equivalent objective separately.',
									'ohmylms'
								) }
							</p>
						) }
						{ relation === 'combined' && (
							<p>
								{ __(
									'All objectives within each source group are required together. Combined coverage does not calculate or pool mastery.',
									'ohmylms'
								) }
							</p>
						) }
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
							disabled={
								busy ||
								dirty ||
								! preview.length ||
								invalidCombined
							}
							isBusy={ busy }
							onClick={ () =>
								run(
									async () => {
										if (
											relation === 'combined' ||
											removing?.group_uuid
										) {
											await writeComparison(
												'mapping-groups',
												{
													shared_id: shared.id,
													groups: combined,
													relation,
													note,
												}
											);
											setSelected( [] );
										} else {
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
											if ( removing.group_uuid ) {
												await writeComparison(
													'mapping-groups/remove',
													{
														uuid: removing.group_uuid,
														pairs: preview.map(
															( pair ) => ( {
																specific_id:
																	pair.specific_id,
																expected_revision:
																	pair.expected_revision,
															} )
														),
													}
												);
											} else {
												await writeComparison(
													'mapping/remove',
													{
														specific_id:
															removing.specific_id,
														shared_id:
															removing.shared_id,
														expected_revision:
															removing.revision,
													}
												);
											}
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
								{ removing.group_uuid
									? __( 'Remove combined group', 'ohmylms' )
									: __( 'Remove this mapping', 'ohmylms' ) }
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
												const current =
													response.items.find(
														( item ) =>
															item.term_id ===
															row.term_id
													);
												if ( ! current ) {
													throw new Error(
														__(
															'A selected objective is unavailable. Clear and select it again.',
															'ohmylms'
														)
													);
												}
												rows.push( {
													...row,
													...current,
												} );
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
					</div>
				</section>
				<MappingConnections
					gridRef={ gridRef }
					sharedId={ shared?.id || 0 }
					revision={ `${ revision }:${ visibility }:${ relation }:${ selected.map( ( row ) => row.term_id ).join( ',' ) }` }
				/>
				{ roadmapId > 0 && visibility === 'roadmap' && (
					<ComparisonColumn
						key={ `roadmap-${ roadmapId }` }
						id={ roadmapId }
						selected={ [] }
						onSelect={ () => {} }
						onEdit={ () => {} }
						revision={ revision }
						busy
					/>
				) }
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
						linkedSkillId={ roadmapId ? linkedFocus : 0 }
						onClearLinked={ () => {
							setLinkedFocus( 0 );
							setShared( null );
						} }
						proposalSharedId={ shared?.id || 0 }
						proposalRelation={ relation }
					/>
				) ) }
			</div>
			<div
				className="ohmylms-relationship-legend"
				aria-label={ __( 'Relationship legend', 'ohmylms' ) }
			>
				{ Object.keys( relationshipLabels() ).map( ( code ) => (
					<RelationshipBadge key={ code } relation={ code } />
				) ) }
				<span>
					{ __(
						'Lines connect visible objectives. Unsaved lines are dashed. Only Equivalent pools evidence.',
						'ohmylms'
					) }
				</span>
			</div>
		</div>
	);
}
