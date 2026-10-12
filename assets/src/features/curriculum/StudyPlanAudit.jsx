/** @jsx createElement */
import { createElement, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, TextControl } from '@wordpress/components';
import { readComparison } from './comparison.mjs';

/** Administrator audit; students use the current-account profile endpoint. */
export function StudyPlanAudit() {
	const [ student, setStudent ] = useState( '' );
	const [ data, setData ] = useState( null );
	const [ error, setError ] = useState( '' );
	const [ busy, setBusy ] = useState( false );
	async function audit() {
		setBusy( true );
		setError( '' );
		setData( null );
		try {
			setData( await readComparison( `audit/${ Number( student ) }` ) );
		} catch ( cause ) {
			setError( cause.message );
		} finally {
			setBusy( false );
		}
	}
	return (
		<details>
			<summary>{ __( 'Audit a student study plan', 'ohmylms' ) }</summary>
			<TextControl
				label={ __( 'Student account ID', 'ohmylms' ) }
				type="number"
				min="1"
				value={ student }
				onChange={ setStudent }
			/>
			<Button
				variant="secondary"
				disabled={
					busy ||
					! Number.isInteger( Number( student ) ) ||
					Number( student ) <= 0
				}
				isBusy={ busy }
				onClick={ audit }
			>
				{ __( 'Run study plan audit', 'ohmylms' ) }
			</Button>
			{ error && <p role="alert">{ error }</p> }
			{ data && Object.keys( data ).length === 0 && (
				<p>
					{ __(
						'No subject or level plans are configured yet.',
						'ohmylms'
					) }
				</p>
			) }
			{ data &&
				Object.entries( data ).map( ( [ subject, plan ] ) => (
					<section key={ subject }>
						<h3>{ subject }</h3>
						<p>
							{ __(
								'Only published sources appear. Unassessed skills lack evidence; unmapped objectives lack relationships. Shared mastery does not grant transferred completion credit.',
								'ohmylms'
							) }
						</p>
						<table>
							<thead>
								<tr>
									<th>
										{ __(
											'Syllabus / roadmap',
											'ohmylms'
										) }
									</th>
									<th>{ __( 'Equivalent', 'ohmylms' ) }</th>
									<th>{ __( 'Related only', 'ohmylms' ) }</th>
									<th>{ __( 'Unmapped', 'ohmylms' ) }</th>
									<th>{ __( 'Unassessed', 'ohmylms' ) }</th>
									<th>{ __( 'Developing', 'ohmylms' ) }</th>
								</tr>
							</thead>
							<tbody>
								{ plan.syllabuses.map( ( source ) => (
									<tr key={ source.syllabus.id }>
										<th>
											{ source.syllabus.name }{ ' ' }
											{ source.syllabus.version }
										</th>
										<td>{ source.coverage.equivalent }</td>
										<td>
											{ source.coverage.related_only }
										</td>
										<td>{ source.coverage.unmapped }</td>
										<td>
											{ source.audit.unassessed.length }
										</td>
										<td>
											{ source.audit.developing.length }
										</td>
									</tr>
								) ) }
							</tbody>
						</table>
						<h4>{ __( 'Shared mastery', 'ohmylms' ) }</h4>
						<ul>
							{ plan.shared.map( ( skill ) => (
								<li key={ skill.shared.term_id }>
									{ skill.shared.name } ·{ ' ' }
									{ skill.level_label } ·{ ' ' }
									{ skill.evidence_count }
								</li>
							) ) }
						</ul>
					</section>
				) ) }
		</details>
	);
}
