/** @jsx createElement */
import {
	createElement,
	useCallback,
	useEffect,
	useState,
} from '@wordpress/element';
import {
	Button,
	CheckboxControl,
	Modal,
	Notice,
	SelectControl,
	Spinner,
	TextControl,
	TextareaControl,
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { __, sprintf } from '@wordpress/i18n';
import { CourseStructurePublish } from './CourseStructurePublish';
import { ActivityCreateForm } from './ActivityCreateForm';
import { LessonReadiness } from './LessonReadiness';
import {
	moveOutlineRow,
	orderedOutlineItems,
	removeOutlineLesson,
} from './outline.mjs';

const uuid = () => {
	const bytes = window.crypto.getRandomValues( new Uint8Array( 16 ) );
	bytes[ 6 ] = 64 + ( bytes[ 6 ] % 16 );
	bytes[ 8 ] = 128 + ( bytes[ 8 ] % 64 );
	const hex = Array.from( bytes, ( byte ) =>
		byte.toString( 16 ).padStart( 2, '0' )
	).join( '' );
	return [
		hex.slice( 0, 8 ),
		hex.slice( 8, 12 ),
		hex.slice( 12, 16 ),
		hex.slice( 16, 20 ),
		hex.slice( 20 ),
	].join( '-' );
};
const same = ( left, right ) => String( left || 0 ) === String( right || 0 );
const special = ( item ) =>
	[ 'unit-test', 'course-challenge' ].includes( item.style );
const key = ( value ) =>
	JSON.stringify( { units: value.units, program: value.program } );

/**
 * Unified course, unit, lesson and activity authoring with one saved revision.
 *
 * @param {Object}                     root0               Component properties.
 * @param {number}                     root0.courseId      Course ID.
 * @param {Object}                     root0.editor        Course metadata editor.
 * @param {(dirty: boolean) => void}   root0.onDirtyChange Track unsaved outline edits in navigation.
 * @param {(revision: string) => void} root0.onSaved       Refresh related course coverage after a save.
 */
export function CourseOutlineEditor( {
	courseId,
	editor,
	onDirtyChange,
	onSaved,
} ) {
	const [ draft, setDraft ] = useState( null );
	const [ baseline, setBaseline ] = useState( '' );
	const [ selected, setSelected ] = useState( null );
	const [ busy, setBusy ] = useState( false );
	const [ error, setError ] = useState( '' );
	const [ notice, setNotice ] = useState( '' );
	const [ picker, setPicker ] = useState( null );
	const [ pickerBusy, setPickerBusy ] = useState( false );
	const [ kind, setKind ] = useState( 'lesson' );
	const [ search, setSearch ] = useState( '' );
	const [ results, setResults ] = useState( [] );
	const [ retry, setRetry ] = useState( 0 );
	const [ resourcePage, setResourcePage ] = useState( 1 );
	const [ resourcePages, setResourcePages ] = useState( 1 );
	const [ discard, setDiscard ] = useState( false );
	const dirty = draft && key( draft ) !== baseline;
	const adopt = useCallback( ( data ) => {
		const next = {
			...data,
			units: data.units.filter( ( unit ) => unit.id > 0 ),
		};
		setDraft( next );
		setBaseline( key( next ) );
	}, [] );
	useEffect( () => {
		onDirtyChange( !! dirty );
	}, [ dirty, onDirtyChange ] );
	useEffect( () => () => onDirtyChange( false ), [ onDirtyChange ] );
	useEffect( () => {
		let active = true;
		setDraft( null );
		setError( '' );
		apiFetch( { path: `/ohmylms/v1/courses/${ courseId }/structure` } )
			.then( ( data ) => {
				if ( active ) {
					adopt( data );
				}
			} )
			.catch( ( cause ) => {
				if ( active ) {
					setError( cause.message );
				}
			} );
		return () => {
			active = false;
		};
	}, [ courseId, retry, adopt ] );
	useEffect( () => {
		if ( ! dirty ) {
			return undefined;
		}
		const warn = ( event ) => {
			event.preventDefault();
			event.returnValue = '';
		};
		window.addEventListener( 'beforeunload', warn );
		return () => window.removeEventListener( 'beforeunload', warn );
	}, [ dirty ] );
	useEffect( () => {
		if ( ! picker || picker.create ) {
			return undefined;
		}
		if ( kind === 'practice' ) {
			setResults(
				draft.program.outcomes
					.filter(
						( row ) =>
							( ! picker.groupId ||
								row.group_id === picker.groupId ) &&
							( draft.skill_names?.[ row.term_id ] || '' )
								.toLowerCase()
								.includes( search.toLowerCase() )
					)
					.map( ( row ) => ( {
						id: row.term_id,
						title:
							draft.skill_names?.[ row.term_id ] ||
							String( row.term_id ),
						type: 'practice',
						style: 'practice',
					} ) )
			);
			setResourcePages( 1 );
			return undefined;
		}
		let active = true;
		const timer = setTimeout( () => {
			apiFetch( {
				path: `/ohmylms/v1/courses/${ courseId }/structure/resources?type=${ kind }&search=${ encodeURIComponent( search ) }&page=${ resourcePage }`,
			} )
				.then( ( data ) => {
					if ( active ) {
						setResults( data.items );
						setResourcePages( data.pages || 1 );
					}
				} )
				.catch( ( cause ) => {
					if ( active ) {
						setError( cause.message );
					}
				} );
		}, 200 );
		return () => {
			active = false;
			clearTimeout( timer );
		};
	}, [
		picker,
		kind,
		search,
		resourcePage,
		courseId,
		draft?.program.outcomes,
		draft?.skill_names,
	] );
	function change( patch ) {
		setDraft( { ...draft, ...patch } );
		setNotice( '' );
	}
	function program( patch ) {
		change( { program: { ...draft.program, ...patch } } );
	}
	function select( type, id ) {
		setSelected( { type, id } );
		setError( '' );
	}
	async function save() {
		if ( busy || editor.saving ) {
			return false;
		}
		setBusy( true );
		setError( '' );
		setNotice( '' );
		try {
			if (
				editor.dirty &&
				! ( await editor.save( undefined, undefined, undefined, {
					silent: true,
				} ) )
			) {
				throw new Error(
					__(
						'Save the course information before saving the outline.',
						'ohmylms'
					)
				);
			}
			const result = await apiFetch( {
				path: `/ohmylms/v1/courses/${ courseId }/structure`,
				method: 'PUT',
				data: {
					revision: draft.revision,
					units: draft.units,
					program: {
						...draft.program,
						items: orderedOutlineItems(
							draft.program,
							draft.units
						),
					},
				},
			} );
			adopt( result );
			setSelected( null );
			await editor.refreshStructure();
			onSaved?.( result.revision );
			setNotice( __( 'Outline draft saved.', 'ohmylms' ) );
			return true;
		} catch ( cause ) {
			setError(
				cause.message || __( 'Could not save the outline.', 'ohmylms' )
			);
			return false;
		} finally {
			setBusy( false );
		}
	}
	function addUnit() {
		const id = uuid();
		change( {
			units: [
				...draft.units,
				{
					id,
					title: __( 'New unit', 'ohmylms' ),
					description: '',
					number: '',
				},
			],
		} );
		select( 'unit', id );
	}
	function addLesson( unitId ) {
		const id = uuid();
		program( {
			groups: [
				...( draft.program.groups || [] ),
				{
					id,
					chapter_id: unitId,
					title: __( 'New lesson', 'ohmylms' ),
				},
			],
		} );
		select( 'lesson', id );
	}
	function openPicker( unitId, groupId = '', initialKind = '' ) {
		setResults( [] );
		setSearch( '' );
		setResourcePage( 1 );
		setKind(
			[ 'quiz', 'practice' ].includes( initialKind )
				? initialKind
				: 'lesson'
		);
		setPicker( {
			unitId,
			groupId,
			initialKind,
			create: !! initialKind && initialKind !== 'practice',
			requestId: uuid(),
		} );
	}
	function addActivity( resource ) {
		const isChallenge = resource.style === 'course-challenge';
		const id = uuid();
		change( {
			revision: resource.revision || draft.revision,
			program: {
				...draft.program,
				items: [
					...draft.program.items,
					{
						id,
						content_id: resource.id,
						type: resource.type,
						style: resource.style,
						edit_url: resource.edit_url,
						name: resource.title,
						status: resource.status,
						chapter_id: isChallenge ? 0 : picker.unitId,
						...( picker.groupId && ! special( resource )
							? { group_id: picker.groupId }
							: {} ),
						required: resource.type !== 'practice',
						...( resource.type === 'quiz'
							? { pass_percent: 80 }
							: {} ),
					},
				],
			},
		} );
		setPicker( null );
		select( 'activity', id );
	}
	function linkSkill( resource ) {
		const existing = draft.program.outcomes.find(
			( row ) => row.term_id === resource.id
		);
		if ( ! existing && draft.program.outcomes.length >= 200 ) {
			setError(
				__( 'A course can select at most 200 skills.', 'ohmylms' )
			);
			return;
		}
		change( {
			skill_names: {
				...draft.skill_names,
				[ resource.id ]: resource.title,
			},
			program: {
				...draft.program,
				outcomes: [
					...draft.program.outcomes.filter(
						( row ) => row.term_id !== resource.id
					),
					{
						...( existing || {
							term_id: resource.id,
							required: false,
							target: 'proficient',
						} ),
						chapter_id: picker.unitId,
						group_id: picker.groupId,
					},
				],
			},
		} );
		setPicker( null );
	}
	async function removeUnit( unit ) {
		if ( typeof unit.id === 'string' ) {
			change( {
				units: draft.units.filter( ( row ) => row.id !== unit.id ),
			} );
			setSelected( null );
			return;
		}
		if ( dirty ) {
			setError(
				__(
					'Save the outline before removing an existing unit.',
					'ohmylms'
				)
			);
			return;
		}
		setBusy( true );
		setError( '' );
		try {
			await apiFetch( {
				path: `/ohmylms/v1/chapters/${ unit.id }`,
				method: 'DELETE',
				data: { revision: draft.revision },
			} );
			setSelected( null );
			setRetry( retry + 1 );
			await editor.refreshStructure();
		} catch ( cause ) {
			setError( cause.message );
		} finally {
			setBusy( false );
		}
	}
	if ( ! draft ) {
		return (
			<section className="ohmylms-outline-editor">
				{ error ? (
					<Notice status="error" isDismissible={ false }>
						{ error }
						<Button onClick={ () => setRetry( retry + 1 ) }>
							{ __( 'Reload outline', 'ohmylms' ) }
						</Button>
					</Notice>
				) : (
					<Spinner />
				) }
			</section>
		);
	}
	const groups = draft.program.groups || [];
	const unit =
		selected?.type === 'unit'
			? draft.units.find( ( row ) => row.id === selected.id )
			: null;
	const lesson =
		selected?.type === 'lesson'
			? groups.find( ( row ) => row.id === selected.id )
			: null;
	const activity =
		selected?.type === 'activity'
			? draft.program.items.find( ( row ) => row.id === selected.id )
			: null;
	const rowsIn = ( unitId, groupId = '' ) =>
		draft.program.items.filter(
			( item ) =>
				same( item.chapter_id, unitId ) &&
				( item.group_id || '' ) === groupId
		);
	const itemButton = ( item ) => (
		<li key={ item.id }>
			<Button
				variant={ selected?.id === item.id ? 'secondary' : 'tertiary' }
				onClick={ () => select( 'activity', item.id ) }
			>
				{ item.title || item.name }{ ' ' }
				{ {
					'unit-test': __( '(Unit test)', 'ohmylms' ),
					'course-challenge': __( '(Course challenge)', 'ohmylms' ),
				}[ item.style ] || '' }
			</Button>
		</li>
	);
	const moveButtons = ( rows, row, update ) => (
		<span className="ohmylms-outline-move">
			<Button
				disabled={ busy || rows[ 0 ]?.id === row.id }
				onClick={ () => update( moveOutlineRow( rows, row.id, -1 ) ) }
			>
				{ __( 'Move up', 'ohmylms' ) }
			</Button>
			<Button
				disabled={ busy || rows.at( -1 )?.id === row.id }
				onClick={ () => update( moveOutlineRow( rows, row.id, 1 ) ) }
			>
				{ __( 'Move down', 'ohmylms' ) }
			</Button>
		</span>
	);
	return (
		<section
			className="ohmylms-outline-editor"
			aria-label={ __( 'Course outline editor', 'ohmylms' ) }
			aria-busy={ busy }
		>
			{ discard && (
				<Modal
					title={ __( 'Discard outline changes?', 'ohmylms' ) }
					onRequestClose={ () => setDiscard( false ) }
				>
					<Button onClick={ () => setDiscard( false ) }>
						{ __( 'Keep editing', 'ohmylms' ) }
					</Button>
					<Button
						isDestructive
						onClick={ () => {
							setDiscard( false );
							setSelected( null );
							setRetry( retry + 1 );
						} }
					>
						{ __( 'Discard and reload', 'ohmylms' ) }
					</Button>
				</Modal>
			) }
			<header className="ohmylms-outline-heading">
				<div>
					<h1>{ __( 'Course outline', 'ohmylms' ) }</h1>
					<p>
						{ dirty
							? __(
									'You have unsaved outline changes.',
									'ohmylms'
								)
							: __(
									'Saved draft. Publish when ready for learners.',
									'ohmylms'
								) }
					</p>
				</div>
				<Button
					variant="primary"
					disabled={ busy || ! dirty || editor.saving }
					onClick={ save }
					isBusy={ busy }
				>
					{ __( 'Save outline draft', 'ohmylms' ) }
				</Button>
			</header>
			<Button
				variant="link"
				disabled={ busy }
				onClick={ () =>
					dirty ? setDiscard( true ) : setRetry( retry + 1 )
				}
			>
				{ __( 'Reload saved outline', 'ohmylms' ) }
			</Button>
			{ error && (
				<Notice status="error" isDismissible={ false }>
					{ error }
					<Button
						onClick={ () => {
							if ( ! dirty ) {
								setSelected( null );
								setRetry( retry + 1 );
							} else {
								setDiscard( true );
							}
						} }
					>
						{ __( 'Reload outline', 'ohmylms' ) }
					</Button>
				</Notice>
			) }
			{ notice && (
				<Notice status="success" onRemove={ () => setNotice( '' ) }>
					{ notice }
				</Notice>
			) }
			<CourseStructurePublish
				onPublished={ ( revision ) =>
					setDraft( ( current ) => ( { ...current, revision } ) )
				}
				courseId={ courseId }
				editor={ {
					...editor,
					dirty: dirty || editor.dirty,
					saving: busy || editor.saving,
					save,
				} }
			/>
			<LessonReadiness
				program={ draft.program }
				names={ draft.skill_names }
				onSelect={ ( id ) => select( 'lesson', id ) }
			/>
			<div className="ohmylms-outline-columns">
				<nav
					className="ohmylms-outline-tree"
					aria-label={ __(
						'Units, lessons and activities',
						'ohmylms'
					) }
				>
					<Button
						variant="secondary"
						disabled={ busy }
						onClick={ addUnit }
					>
						{ __( 'Add unit', 'ohmylms' ) }
					</Button>
					<ol>
						{ draft.units.map( ( node ) => (
							<li key={ node.id }>
								<Button
									variant={
										selected?.id === node.id
											? 'secondary'
											: 'tertiary'
									}
									onClick={ () => select( 'unit', node.id ) }
								>
									<strong>{ node.title }</strong>
								</Button>
								<ol>
									{ groups
										.filter( ( row ) =>
											same( row.chapter_id, node.id )
										)
										.map( ( group ) => (
											<li key={ group.id }>
												<Button
													onClick={ () =>
														select(
															'lesson',
															group.id
														)
													}
												>
													{ group.title }
												</Button>
												<ul>
													{ rowsIn(
														node.id,
														group.id
													).map( itemButton ) }
												</ul>
											</li>
										) ) }
								</ol>
								<ul>
									{ [
										...rowsIn( node.id ).filter(
											( item ) => ! special( item )
										),
										...rowsIn( node.id ).filter( special ),
									].map( itemButton ) }
								</ul>
							</li>
						) ) }
					</ol>
					{ rowsIn( 0 ).length > 0 && (
						<div>
							<h3>
								{ __( 'Course-level activities', 'ohmylms' ) }
							</h3>
							<ul>{ rowsIn( 0 ).map( itemButton ) }</ul>
						</div>
					) }
				</nav>
				<div className="ohmylms-outline-inspector">
					{ ! unit && ! lesson && ! activity && (
						<div>
							<h2>{ __( 'Build your course', 'ohmylms' ) }</h2>
							<p>
								{ __(
									'Add a unit, give it lessons, then add videos, readings, practice or quizzes. Select any item on the left to edit it.',
									'ohmylms'
								) }
							</p>
							{ draft.units.length === 0 && (
								<Button variant="primary" onClick={ addUnit }>
									{ __( 'Add your first unit', 'ohmylms' ) }
								</Button>
							) }
						</div>
					) }
					{ unit && (
						<div>
							<h2>{ __( 'Unit', 'ohmylms' ) }</h2>
							<TextControl
								label={ __( 'Unit title', 'ohmylms' ) }
								value={ unit.title }
								disabled={ busy }
								onChange={ ( title ) =>
									change( {
										units: draft.units.map( ( row ) =>
											row.id === unit.id
												? { ...row, title }
												: row
										),
									} )
								}
							/>
							<TextControl
								label={ __( 'Unit number', 'ohmylms' ) }
								value={ unit.number || '' }
								disabled={ busy }
								onChange={ ( number ) =>
									change( {
										units: draft.units.map( ( row ) =>
											row.id === unit.id
												? { ...row, number }
												: row
										),
									} )
								}
							/>
							<TextareaControl
								label={ __( 'Unit description', 'ohmylms' ) }
								value={ unit.description || '' }
								disabled={ busy }
								onChange={ ( description ) =>
									change( {
										units: draft.units.map( ( row ) =>
											row.id === unit.id
												? { ...row, description }
												: row
										),
									} )
								}
							/>
							{ moveButtons( draft.units, unit, ( units ) =>
								change( { units } )
							) }
							<Button
								variant="secondary"
								disabled={ busy }
								onClick={ () => addLesson( unit.id ) }
							>
								{ __( 'Add lesson', 'ohmylms' ) }
							</Button>
							<Button
								disabled={ busy }
								onClick={ () => openPicker( unit.id ) }
							>
								{ __( 'Add activity to unit', 'ohmylms' ) }
							</Button>
							<Button
								isDestructive
								disabled={
									busy ||
									draft.program.items.some( ( row ) =>
										same( row.chapter_id, unit.id )
									) ||
									groups.some( ( row ) =>
										same( row.chapter_id, unit.id )
									) ||
									draft.program.outcomes.some( ( row ) =>
										same( row.chapter_id, unit.id )
									)
								}
								onClick={ () => removeUnit( unit ) }
							>
								{ __( 'Remove empty unit', 'ohmylms' ) }
							</Button>
						</div>
					) }
					{ lesson && (
						<div>
							<h2>{ __( 'Lesson', 'ohmylms' ) }</h2>
							<Button
								disabled={ busy }
								onClick={ () => {
									openPicker( lesson.chapter_id, lesson.id );
									setKind( 'skill' );
									setPicker( {
										unitId: lesson.chapter_id,
										groupId: lesson.id,
										skills: true,
										create: false,
									} );
								} }
							>
								{ __( 'Link skills to lesson', 'ohmylms' ) }
							</Button>
							<div className="ohmylms-outline-activity-actions">
								{ [
									[ 'video', __( 'Add video', 'ohmylms' ) ],
									[
										'reading',
										__( 'Add reading', 'ohmylms' ),
									],
									[
										'practice',
										__( 'Add practice', 'ohmylms' ),
									],
									[ 'quiz', __( 'Add quiz', 'ohmylms' ) ],
								].map( ( [ value, label ] ) => (
									<Button
										key={ value }
										variant="secondary"
										disabled={ busy }
										onClick={ () =>
											openPicker(
												lesson.chapter_id,
												lesson.id,
												value
											)
										}
									>
										{ label }
									</Button>
								) ) }
							</div>
							{ draft.program.outcomes.some(
								( row ) => row.group_id === lesson.id
							) && (
								<>
									<h3>
										{ __( 'Linked skills', 'ohmylms' ) }
									</h3>
									<ul>
										{ draft.program.outcomes
											.filter(
												( row ) =>
													row.group_id === lesson.id
											)
											.map( ( row ) => (
												<li key={ row.term_id }>
													{ draft.skill_names?.[
														row.term_id
													] || row.term_id }
												</li>
											) ) }
									</ul>
								</>
							) }
							<TextControl
								label={ __( 'Lesson title', 'ohmylms' ) }
								value={ lesson.title }
								disabled={ busy }
								onChange={ ( title ) =>
									program( {
										groups: groups.map( ( row ) =>
											row.id === lesson.id
												? { ...row, title }
												: row
										),
									} )
								}
							/>
							<SelectControl
								label={ __( 'Unit for lesson', 'ohmylms' ) }
								value={ String( lesson.chapter_id ) }
								disabled={ busy }
								options={ draft.units.map( ( row ) => ( {
									label: row.title,
									value: String( row.id ),
								} ) ) }
								onChange={ ( value ) => {
									const target = draft.units.find( ( row ) =>
										same( row.id, value )
									);
									if ( target ) {
										program( {
											groups: groups.map( ( row ) =>
												row.id === lesson.id
													? {
															...row,
															chapter_id:
																target.id,
														}
													: row
											),
											items: draft.program.items.map(
												( row ) =>
													row.group_id === lesson.id
														? {
																...row,
																chapter_id:
																	target.id,
															}
														: row
											),
											outcomes:
												draft.program.outcomes.map(
													( row ) =>
														row.group_id ===
														lesson.id
															? {
																	...row,
																	chapter_id:
																		target.id,
																}
															: row
												),
										} );
									}
								} }
							/>
							{ moveButtons(
								groups.filter( ( row ) =>
									same( row.chapter_id, lesson.chapter_id )
								),
								lesson,
								( next ) =>
									program( {
										groups: [
											...groups.filter(
												( row ) =>
													! same(
														row.chapter_id,
														lesson.chapter_id
													)
											),
											...next,
										],
									} )
							) }
							<Button
								variant="secondary"
								disabled={ busy }
								onClick={ () =>
									openPicker( lesson.chapter_id, lesson.id )
								}
							>
								{ __( 'Add activity', 'ohmylms' ) }
							</Button>
							<Button
								isDestructive
								disabled={ busy }
								onClick={ () => {
									change( {
										program: removeOutlineLesson(
											draft.program,
											lesson.id
										),
									} );
									setSelected( null );
								} }
							>
								{ __(
									'Remove lesson and keep activities',
									'ohmylms'
								) }
							</Button>
						</div>
					) }
					{ activity && (
						<div>
							<h2>{ __( 'Activity', 'ohmylms' ) }</h2>
							{ activity.type !== 'practice' &&
								activity.status &&
								activity.status !== 'publish' && (
									<Notice
										status="warning"
										isDismissible={ false }
									>
										{ __(
											'This resource is a draft. Finish and publish it in its content editor before publishing the outline.',
											'ohmylms'
										) }
									</Notice>
								) }
							{ activity.type === 'practice' ? (
								<p>
									{ sprintf(
										/* translators: %s: practice skill name. */ __(
											'Practices skill: %s',
											'ohmylms'
										),
										draft.skill_names?.[
											activity.content_id
										] || activity.name
									) }
								</p>
							) : (
								<fieldset>
									<legend>
										{ [ 'quiz', 'assignment' ].includes(
											activity.type
										)
											? __(
													'Skills assessed by this activity',
													'ohmylms'
												)
											: __(
													'Skills taught by this activity',
													'ohmylms'
												) }
									</legend>
									{ draft.program.outcomes
										.filter(
											( row ) =>
												! activity.group_id ||
												row.group_id ===
													activity.group_id ||
												activity.skill_ids?.includes(
													row.term_id
												)
										)
										.map( ( row ) => (
											<CheckboxControl
												key={ row.term_id }
												label={
													draft.skill_names?.[
														row.term_id
													] || String( row.term_id )
												}
												help={
													activity.group_id &&
													row.group_id !==
														activity.group_id
														? __(
																'This skill is linked outside the selected lesson.',
																'ohmylms'
															)
														: undefined
												}
												disabled={ busy }
												checked={
													!! activity.skill_ids?.includes(
														row.term_id
													)
												}
												onChange={ ( checked ) =>
													program( {
														items: draft.program.items.map(
															( item ) =>
																item.id ===
																activity.id
																	? {
																			...item,
																			skill_ids:
																				checked
																					? [
																							...( item.skill_ids ||
																								[] ),
																							row.term_id,
																						]
																					: (
																							item.skill_ids ||
																							[]
																						).filter(
																							(
																								id
																							) =>
																								id !==
																								row.term_id
																						),
																		}
																	: item
														),
													} )
												}
											/>
										) ) }
									{ ! draft.program.outcomes.some(
										( row ) =>
											! activity.group_id ||
											row.group_id === activity.group_id
									) && (
										<p>
											{ __(
												'Link skills to this lesson to choose its teaching or assessment coverage.',
												'ohmylms'
											) }
										</p>
									) }
								</fieldset>
							) }
							<TextControl
								label={ __(
									'Activity name in this course',
									'ohmylms'
								) }
								value={ activity.title ?? activity.name }
								disabled={ busy }
								onChange={ ( title ) =>
									program( {
										items: draft.program.items.map(
											( row ) =>
												row.id === activity.id
													? { ...row, title }
													: row
										),
									} )
								}
							/>
							<SelectControl
								label={ __( 'Unit for activity', 'ohmylms' ) }
								value={ String( activity.chapter_id || 0 ) }
								disabled={
									busy ||
									activity.style === 'course-challenge'
								}
								options={ [
									{
										label: __( 'Course level', 'ohmylms' ),
										value: '0',
									},
									...draft.units.map( ( row ) => ( {
										label: row.title,
										value: String( row.id ),
									} ) ),
								] }
								onChange={ ( value ) => {
									const target = draft.units.find( ( row ) =>
										same( row.id, value )
									);
									program( {
										items: draft.program.items.map(
											( row ) =>
												row.id === activity.id
													? {
															...row,
															chapter_id: target
																? target.id
																: 0,
															group_id: '',
														}
													: row
										),
									} );
								} }
							/>
							<SelectControl
								label={ __( 'Lesson for activity', 'ohmylms' ) }
								value={ activity.group_id || '' }
								disabled={ busy || special( activity ) }
								options={ [
									{
										label: __(
											'Outside lessons',
											'ohmylms'
										),
										value: '',
									},
									...groups
										.filter( ( row ) =>
											same(
												row.chapter_id,
												activity.chapter_id
											)
										)
										.map( ( row ) => ( {
											label: row.title,
											value: row.id,
										} ) ),
								] }
								onChange={ ( groupId ) =>
									program( {
										items: draft.program.items.map(
											( row ) =>
												row.id === activity.id
													? {
															...row,
															group_id: groupId,
														}
													: row
										),
									} )
								}
							/>
							{ special( activity ) ? (
								<p>
									{ activity.style === 'unit-test'
										? __(
												'Unit tests appear at the end of a unit, outside lessons.',
												'ohmylms'
											)
										: __(
												'The course challenge appears after all units.',
												'ohmylms'
											) }
								</p>
							) : (
								moveButtons(
									rowsIn(
										activity.chapter_id,
										activity.group_id || ''
									).filter( ( row ) => ! special( row ) ),
									activity,
									( next ) =>
										program( {
											items: [
												...draft.program.items.filter(
													( row ) =>
														! next.some(
															( entry ) =>
																entry.id ===
																row.id
														)
												),
												...next,
											],
										} )
								)
							) }
							<CheckboxControl
								label={ __(
									'Required for completion',
									'ohmylms'
								) }
								checked={ !! activity.required }
								disabled={
									busy || activity.type === 'practice'
								}
								onChange={ ( required ) =>
									program( {
										items: draft.program.items.map(
											( row ) =>
												row.id === activity.id
													? { ...row, required }
													: row
										),
									} )
								}
							/>
							{ activity.edit_url && (
								<Button
									variant="secondary"
									href={ activity.edit_url }
									target="_blank"
									rel="noreferrer"
								>
									{ __( 'Edit resource content', 'ohmylms' ) }
								</Button>
							) }
							<Button
								isDestructive
								disabled={ busy }
								onClick={ () => {
									program( {
										items: draft.program.items.filter(
											( row ) => row.id !== activity.id
										),
									} );
									setSelected( null );
								} }
							>
								{ __( 'Remove activity placement', 'ohmylms' ) }
							</Button>
						</div>
					) }
				</div>
			</div>
			{ picker && (
				<Modal
					title={
						picker.skills
							? __( 'Link skills to lesson', 'ohmylms' )
							: __( 'Add activity', 'ohmylms' )
					}
					onRequestClose={
						pickerBusy ? () => {} : () => setPicker( null )
					}
				>
					{ ! picker.skills && (
						<div className="ohmylms-outline-activity-actions">
							<Button
								variant={
									picker.create ? 'secondary' : 'primary'
								}
								disabled={ pickerBusy }
								onClick={ () =>
									setPicker( { ...picker, create: false } )
								}
							>
								{ __( 'Use existing activity', 'ohmylms' ) }
							</Button>
							<Button
								variant={
									picker.create ? 'primary' : 'secondary'
								}
								disabled={ pickerBusy }
								onClick={ () =>
									setPicker( { ...picker, create: true } )
								}
							>
								{ __( 'Create new activity', 'ohmylms' ) }
							</Button>
						</div>
					) }
					{ picker.create ? (
						<ActivityCreateForm
							courseId={ courseId }
							revision={ draft.revision }
							requestId={ picker.requestId }
							initialKind={
								[ 'video', 'reading', 'quiz' ].includes(
									picker.initialKind
								)
									? picker.initialKind
									: 'reading'
							}
							onBusy={ setPickerBusy }
							onCreated={ addActivity }
						/>
					) : (
						<>
							{ ! picker.skills && (
								<SelectControl
									label={ __( 'Activity type', 'ohmylms' ) }
									value={ kind }
									options={ [
										{
											value: 'lesson',
											label: __(
												'Reading, video or audio',
												'ohmylms'
											),
										},
										{
											value: 'quiz',
											label: __(
												'Quiz, unit test or course challenge',
												'ohmylms'
											),
										},
										{
											value: 'assignment',
											label: __(
												'Assignment',
												'ohmylms'
											),
										},
										{
											value: 'practice',
											label: __(
												'Practice selected course skills',
												'ohmylms'
											),
										},
									] }
									onChange={ ( value ) => {
										setKind( value );
										setResourcePage( 1 );
										setResults( [] );
									} }
								/>
							) }
							{ picker.skills && (
								<p>
									{ __(
										'Choose an existing skill. Skills already linked to a lesson are excluded. New course skills begin optional for completion.',
										'ohmylms'
									) }
								</p>
							) }
							<TextControl
								label={
									picker.skills
										? __( 'Find a skill', 'ohmylms' )
										: __( 'Find an activity', 'ohmylms' )
								}
								value={ search }
								onChange={ ( value ) => {
									setSearch( value );
									setResourcePage( 1 );
								} }
							/>
							<ul className="ohmylms-outline-resources">
								{ kind === 'practice' &&
									! results.some(
										( row ) =>
											! picker.groupId ||
											draft.program.outcomes.some(
												( outcome ) =>
													outcome.term_id ===
														row.id &&
													outcome.group_id ===
														picker.groupId
											)
									) && (
										<li>
											{ __(
												'No linked lesson skills are available for practice. Link skills to the lesson first.',
												'ohmylms'
											) }
										</li>
									) }
								{ results
									.filter(
										( row ) =>
											! picker.skills ||
											! draft.program.outcomes.some(
												( outcome ) =>
													outcome.term_id ===
														row.id &&
													outcome.group_id
											)
									)
									.filter(
										( row ) =>
											kind !== 'practice' ||
											! picker.groupId ||
											draft.program.outcomes.some(
												( outcome ) =>
													outcome.term_id ===
														row.id &&
													outcome.group_id ===
														picker.groupId
											)
									)
									.filter(
										( resource ) =>
											! draft.program.items.some(
												( row ) =>
													row.type ===
														resource.type &&
													row.content_id ===
														resource.id
											)
									)
									.map( ( resource ) => (
										<li key={ resource.id }>
											<span>{ resource.title }</span>
											<Button
												variant="secondary"
												onClick={ () =>
													picker.skills
														? linkSkill( resource )
														: addActivity(
																resource
															)
												}
											>
												{ sprintf(
													/* translators: %s: resource title. */ __(
														'Add %s',
														'ohmylms'
													),
													resource.title
												) }
											</Button>
										</li>
									) ) }
							</ul>
							<Button
								disabled={ resourcePage <= 1 }
								onClick={ () =>
									setResourcePage( resourcePage - 1 )
								}
							>
								{ __( 'Previous', 'ohmylms' ) }
							</Button>
							<Button
								disabled={ resourcePage >= resourcePages }
								onClick={ () =>
									setResourcePage( resourcePage + 1 )
								}
							>
								{ __( 'Next', 'ohmylms' ) }
							</Button>
							{ draft.create_urls?.[ kind ] && (
								<Button
									href={ draft.create_urls[ kind ] }
									target="_blank"
									rel="noreferrer"
								>
									{ __(
										'Create a new resource in its editor',
										'ohmylms'
									) }
								</Button>
							) }
						</>
					) }
				</Modal>
			) }
		</section>
	);
}
