/** @jsx createElement */
import {
	createElement,
	createPortal,
	useEffect,
	useState,
} from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, SelectControl, TextControl } from '@wordpress/components';
import { writeComparison } from './comparison.mjs';

/**
 * Ordered roadmaps reference shared IDs and all their content without duplication.
 * @param {Object}   props               Component props.
 * @param {Object}   props.skill         Chosen shared skill.
 * @param {string}   props.subject       Initial profile subject or level.
 * @param {Array}    props.initialSkills Shared skills loaded from selected sources.
 * @param {Array}    props.syllabusIds   Source syllabus IDs.
 * @param {Function} props.onSaved       Refresh the curriculum after saving.
 * @param {Object}   props.roadmap       Existing roadmap state.
 * @param {boolean}  props.disabled      Disable saving while other changes are pending.
 * @param {Function} props.onDirty       Report unsaved roadmap changes.
 * @param {Element}  props.saveTarget    Header container for the save controls.
 * @param {Function} props.onBusyChange  Report an active save.
 */
export function RoadmapBuilder( {
	skill,
	subject = '',
	initialSkills = [],
	syllabusIds = [],
	onSaved,
	roadmap,
	disabled = false,
	onDirty,
	onBusyChange,
	saveTarget,
} ) {
	const [ name, setName ] = useState(
		roadmap?.name || __( 'Roadmap', 'ohmylms' )
	);
	const [ grade, setGrade ] = useState( '' );
	const [ skills, setSkills ] = useState( initialSkills );
	const [ folders, setFolders ] = useState( roadmap?.folders || [] );
	const [ folderName, setFolderName ] = useState( '' );
	const [ targetFolder, setTargetFolder ] = useState(
		roadmap?.folders?.[ 0 ]?.id || 0
	);
	const [ result, setResult ] = useState( null );
	const [ busy, setBusy ] = useState( false );
	const [ error, setError ] = useState( '' );
	useEffect( () => {
		if ( roadmap && onDirty ) {
			onDirty(
				name !== roadmap.name ||
					JSON.stringify(
						skills.map( ( row ) => [ row.id, row.folder_id ] )
					) !==
						JSON.stringify(
							roadmap.skills.map( ( row ) => [
								row.id,
								row.folder_id,
							] )
						) ||
					JSON.stringify(
						folders.map( ( folder ) => [ folder.id, folder.name ] )
					) !==
						JSON.stringify(
							roadmap.folders.map( ( folder ) => [
								folder.id,
								folder.name,
							] )
						)
			);
		}
	}, [ name, skills, folders, roadmap, onDirty ] );
	async function create() {
		setBusy( true );
		onBusyChange?.( true );
		setError( '' );
		try {
			const response = await writeComparison(
				roadmap ? `roadmaps/${ roadmap.id }` : 'roadmaps',
				{
					name,
					subject,
					grade,
					skill_ids: skills.map( ( row ) => row.id ),
					...( syllabusIds.length
						? { syllabus_ids: syllabusIds }
						: {} ),
					...( roadmap
						? {
								syllabus_ids: syllabusIds,
								expected_revision: roadmap.revision,
								folders: folders.map( ( folder ) => ( {
									id: folder.id > 0 ? folder.id : 0,
									name: folder.name,
									skill_ids: skills
										.filter(
											( row ) =>
												row.folder_id === folder.id
										)
										.map( ( row ) => row.id ),
								} ) ),
							}
						: {} ),
				},
				roadmap ? 'PUT' : 'POST'
			);
			setResult( roadmap ? response.id : response.syllabus.id );
			if ( ! roadmap ) {
				setSkills( [] );
			} else {
				setSkills( response.skills );
				setFolders( response.folders );
				setTargetFolder( response.folders[ 0 ]?.id || 0 );
			}
			if ( onSaved ) {
				onSaved( response );
			}
		} catch ( cause ) {
			setError( cause.message );
		} finally {
			setBusy( false );
			onBusyChange?.( false );
		}
	}
	const saveControls = (
		<>
			{ error && <p role="alert">{ error }</p> }
			<Button
				variant="primary"
				isBusy={ busy }
				disabled={
					busy ||
					disabled ||
					! name.trim() ||
					( ! roadmap && ! skills.length ) ||
					( roadmap &&
						( ! syllabusIds.length ||
							syllabusIds.some( ( id ) => ! id ) ||
							new Set( syllabusIds ).size !==
								syllabusIds.length ) ) ||
					skills.length > 200
				}
				onClick={ create }
			>
				{ roadmap
					? __( 'Save Roadmap', 'ohmylms' )
					: __( 'Save as new curriculum', 'ohmylms' ) }
			</Button>
		</>
	);
	return (
		<section>
			<h3>
				{ roadmap
					? __( 'Roadmap details and skills', 'ohmylms' )
					: __( 'Save shared roadmap', 'ohmylms' ) }
			</h3>
			<p>
				{ roadmap
					? __(
							'Arrange shared skills in learning order and save this Roadmap. Save proposed mappings separately before saving the Roadmap.',
							'ohmylms'
						)
					: __(
							'Add shared skills in learning order, then save them as a new top-level curriculum above the other curriculums. Their lessons, quizzes and saved syllabus mappings stay connected. The curriculum starts as a draft.',
							'ohmylms'
						) }
			</p>
			<TextControl
				label={
					roadmap
						? __( 'Roadmap name', 'ohmylms' )
						: __( 'New curriculum name', 'ohmylms' )
				}
				value={ name }
				disabled={ busy }
				onChange={ ( value ) => {
					setName( value );
					setResult( null );
				} }
			/>
			{ ! roadmap && (
				<TextControl
					label={ __( 'Grade or level (optional)', 'ohmylms' ) }
					value={ grade }
					onChange={ setGrade }
				/>
			) }
			{ roadmap && (
				<div className="ohmylms-roadmap-folders">
					<h4>{ __( 'Shared skill folders', 'ohmylms' ) }</h4>
					<ul>
						{ folders.map( ( folder ) => (
							<li key={ folder.id }>{ folder.name }</li>
						) ) }
					</ul>
					<TextControl
						label={ __( 'New shared skill folder', 'ohmylms' ) }
						value={ folderName }
						onChange={ setFolderName }
						disabled={ busy }
						maxLength={ 190 }
					/>
					<Button
						variant="secondary"
						disabled={
							busy || ! folderName.trim() || folders.length >= 200
						}
						onClick={ () => {
							const folder = {
								id: -( folders.length + 1 ),
								name: folderName.trim(),
							};
							setFolders( [ ...folders, folder ] );
							setTargetFolder( folder.id );
							setFolderName( '' );
							setResult( null );
						} }
					>
						{ __( 'Add shared skill folder', 'ohmylms' ) }
					</Button>
					<SelectControl
						label={ __(
							'Folder for added shared skills',
							'ohmylms'
						) }
						value={ targetFolder }
						options={ folders.map( ( folder ) => ( {
							value: folder.id,
							label: folder.name,
						} ) ) }
						disabled={ busy }
						onChange={ ( value ) =>
							setTargetFolder( Number( value ) )
						}
					/>
				</div>
			) }
			{ skill && (
				<Button
					variant="secondary"
					disabled={
						busy ||
						! skill ||
						skills.some( ( row ) => row.id === skill.id )
					}
					onClick={ () => {
						setSkills( [
							...skills,
							{
								...skill,
								...( roadmap
									? { folder_id: targetFolder }
									: {} ),
							},
						] );
						setResult( null );
					} }
				>
					{ __( 'Add chosen skill to roadmap', 'ohmylms' ) }
				</Button>
			) }
			<ol className="ohmylms-roadmap-steps">
				{ skills.map( ( row, index ) => (
					<li key={ row.id }>
						{ row.name }{ ' ' }
						{ roadmap && (
							<SelectControl
								label={ `${ __( 'Folder for', 'ohmylms' ) } ${ row.name }` }
								value={ row.folder_id }
								options={ folders.map( ( folder ) => ( {
									value: folder.id,
									label: folder.name,
								} ) ) }
								disabled={ busy }
								onChange={ ( value ) => {
									setSkills(
										skills.map( ( entry ) =>
											entry.id === row.id
												? {
														...entry,
														folder_id:
															Number( value ),
													}
												: entry
										)
									);
									setResult( null );
								} }
							/>
						) }
						<Button
							variant="link"
							disabled={ busy || index === 0 }
							onClick={ () => {
								const ordered = [ ...skills ];
								[ ordered[ index - 1 ], ordered[ index ] ] = [
									ordered[ index ],
									ordered[ index - 1 ],
								];
								setSkills( ordered );
							} }
						>
							{ __( 'Move up', 'ohmylms' ) }
						</Button>{ ' ' }
						<Button
							variant="link"
							disabled={ busy }
							onClick={ () =>
								setSkills(
									skills.filter(
										( item ) => item.id !== row.id
									)
								)
							}
						>
							{ __( 'Remove from proposal', 'ohmylms' ) }
						</Button>
					</li>
				) ) }
			</ol>
			{ saveTarget
				? createPortal( saveControls, saveTarget )
				: saveControls }
			{ result && ! roadmap && (
				<p role="status">
					{ __(
						'Saved at the top of the curriculum list.',
						'ohmylms'
					) }{ ' ' }
					<a href="#/content-hub/curriculum">
						{ __( 'View curriculum list', 'ohmylms' ) }
					</a>{ ' ' }
					<a href={ `#/content-hub/curriculum/syllabus/${ result }` }>
						{ __(
							'Open roadmap to arrange skills, add resources and publish',
							'ohmylms'
						) }
					</a>
				</p>
			) }
			{ result && roadmap && (
				<p role="status">{ __( 'Roadmap saved.', 'ohmylms' ) }</p>
			) }
		</section>
	);
}
