/** @jsx createElement */
import { createElement, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, TextControl } from '@wordpress/components';
import { writeComparison } from './comparison.mjs';

/**
 * Ordered roadmaps reference shared IDs and all their content without duplication.
 * @param {Object} props         Component props.
 * @param {Object} props.skill   Chosen shared skill.
 * @param {string} props.subject Initial profile subject or level.
 */
export function RoadmapBuilder( { skill, subject } ) {
	const [ name, setName ] = useState( __( 'Roadmap', 'ohmylms' ) );
	const [ grade, setGrade ] = useState( '' );
	const [ skills, setSkills ] = useState( [] );
	const [ result, setResult ] = useState( null );
	const [ busy, setBusy ] = useState( false );
	const [ error, setError ] = useState( '' );
	async function create() {
		setBusy( true );
		setError( '' );
		try {
			const response = await writeComparison( 'roadmaps', {
				name,
				subject,
				grade,
				skill_ids: skills.map( ( row ) => row.id ),
			} );
			setResult( response.syllabus.id );
			setSkills( [] );
		} catch ( cause ) {
			setError( cause.message );
		} finally {
			setBusy( false );
		}
	}
	return (
		<section>
			<h3>{ __( 'Save shared roadmap', 'ohmylms' ) }</h3>
			<p>
				{ __(
					'Add shared skills in learning order, then save them as a new top-level curriculum above the other curriculums. Their lessons, quizzes and saved syllabus mappings stay connected. The curriculum starts as a draft.',
					'ohmylms'
				) }
			</p>
			<TextControl
				label={ __( 'New curriculum name', 'ohmylms' ) }
				value={ name }
				onChange={ ( value ) => {
					setName( value );
					setResult( null );
				} }
			/>
			<TextControl
				label={ __( 'Grade or level (optional)', 'ohmylms' ) }
				value={ grade }
				onChange={ setGrade }
			/>
			<Button
				variant="secondary"
				disabled={
					busy ||
					! skill ||
					skills.some( ( row ) => row.id === skill.id )
				}
				onClick={ () => setSkills( [ ...skills, skill ] ) }
			>
				{ __( 'Add chosen skill to roadmap', 'ohmylms' ) }
			</Button>
			<ol>
				{ skills.map( ( row ) => (
					<li key={ row.id }>
						{ row.name }{ ' ' }
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
			{ error && <p role="alert">{ error }</p> }
			<Button
				variant="primary"
				isBusy={ busy }
				disabled={ busy || ! name.trim() || ! skills.length }
				onClick={ create }
			>
				{ __( 'Save as new curriculum', 'ohmylms' ) }
			</Button>
			{ result && (
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
		</section>
	);
}
