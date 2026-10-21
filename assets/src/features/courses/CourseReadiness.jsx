/** @jsx createElement */
import { createElement, useEffect, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, Spinner } from '@wordpress/components';
import { loadCatalog } from '../content-hub/api.mjs';
import { ImportButton } from '../content-hub/ImportButton';

/**
 * Whether the course can be published for learners, shown before anyone presses Publish: unpublished
 * resources, completion rules, and for each required skill how many approved questions and question
 * families it has against what it needs.
 *
 * @param {Object} root0          Component properties.
 * @param {number} root0.courseId The course being edited.
 */
export function CourseReadiness( { courseId } ) {
	const [ report, setReport ] = useState( null );
	const [ error, setError ] = useState( '' );
	const [ attempt, setAttempt ] = useState( 0 );

	useEffect( () => {
		let active = true;
		setError( '' );
		loadCatalog( courseId )
			.then( ( catalog ) => active && setReport( catalog.readiness ) )
			.catch(
				( cause ) =>
					active &&
					setError(
						cause.message ||
							__( 'Could not check readiness.', 'ohmylms' )
					)
			);
		return () => {
			active = false;
		};
	}, [ courseId, attempt ] );

	if ( error ) {
		return (
			<p role="alert" className="ohmylms-course-readiness-error">
				{ error }
			</p>
		);
	}
	if ( ! report ) {
		return <Spinner />;
	}
	const lacking = report.skills.filter( ( skill ) => ! skill.ready );
	const open =
		report.completion.length + report.resources.length + lacking.length;
	if ( ! report.skills.length && ! report.resources.length && ! open ) {
		return null;
	}
	return (
		<details
			className="ohmylms-course-readiness"
			open={ ! report.ready }
			data-ready={ report.ready ? 'true' : 'false' }
		>
			<summary>
				{ report.ready
					? __( 'Ready for learners', 'ohmylms' )
					: sprintf(
							/* translators: %d: number of things left to fix. */
							_n(
								'%d thing to fix before learners can use this course',
								'%d things to fix before learners can use this course',
								open,
								'ohmylms'
							),
							open
						) }
			</summary>
			{ report.completion.length > 0 && (
				<ul>
					{ report.completion.map( ( line ) => (
						<li key={ line }>{ line }</li>
					) ) }
				</ul>
			) }
			{ report.resources.length > 0 && (
				<div>
					<h4>{ __( 'Publish these first', 'ohmylms' ) }</h4>
					<ul>
						{ report.resources.map( ( item ) => (
							<li key={ item.content_id }>
								{ item.title }{ ' ' }
								<span className="description">
									({ item.status })
								</span>
							</li>
						) ) }
					</ul>
				</div>
			) }
			{ lacking.length > 0 && (
				<div>
					<h4>
						{ __( 'Skills that need more questions', 'ohmylms' ) }
					</h4>
					<table className="ohmylms-course-readiness-table">
						<thead>
							<tr>
								<th>{ __( 'Skill', 'ohmylms' ) }</th>
								<th>{ __( 'Questions', 'ohmylms' ) }</th>
								<th>{ __( 'Families', 'ohmylms' ) }</th>
								<th>
									<span className="screen-reader-text">
										{ __( 'Add questions', 'ohmylms' ) }
									</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{ lacking.map( ( skill ) => (
								<tr key={ skill.term_id }>
									<td>
										{ skill.code
											? `${ skill.code } · `
											: '' }
										{ skill.name }
									</td>
									<td>
										{ skill.questions } /{ ' ' }
										{ skill.questions_need }
									</td>
									<td>
										{ skill.families } /{ ' ' }
										{ skill.families_need }
									</td>
									<td>
										<ImportButton
											target="questions"
											targets={ [ 'questions' ] }
											withSkills
											initialSkills={ [
												{
													id: skill.term_id,
													name: skill.name,
													code: skill.code,
												},
											] }
										/>
									</td>
								</tr>
							) ) }
						</tbody>
					</table>
					<p className="description">
						{ __(
							'Each required skill needs enough approved questions from different question families to be reached honestly, so a learner never sees the same question twice.',
							'ohmylms'
						) }
					</p>
				</div>
			) }
			{ report.ready && (
				<p>
					{ sprintf(
						/* translators: %d: number of skills. */
						_n(
							'%d required skill has enough approved questions.',
							'%d required skills have enough approved questions.',
							report.skills.length,
							'ohmylms'
						),
						report.skills.length
					) }
				</p>
			) }
			<Button variant="link" onClick={ () => setAttempt( attempt + 1 ) }>
				{ __( 'Check again', 'ohmylms' ) }
			</Button>
		</details>
	);
}
