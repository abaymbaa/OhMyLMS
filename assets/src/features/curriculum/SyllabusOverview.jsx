import { createElement, Fragment, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, Modal, Notice } from '@wordpress/components';
import { useWorkspace } from './context';
import { SaveField, Tag } from './WorkspaceParts';

/** Profile and publishing controls edited directly on the syllabus home. */
export function SyllabusOverview() {
	const w = useWorkspace();
	const [ confirmPublish, setConfirmPublish ] = useState( false );
	const profile = w.outline.settings || {};
	const live = w.course?.status === 'publish';
	const fields = [
		{
			key: 'grade',
			label: __( 'Grade or level', 'ohmylms' ),
			placeholder: __( 'For example Grade 9 or IGCSE', 'ohmylms' ),
			suggestions: [
				...Array.from(
					{ length: 12 },
					( _, index ) => 'Grade ' + ( index + 1 )
				),
				'IGCSE',
			],
		},
		{
			key: 'subject',
			label: __( 'Subject', 'ohmylms' ),
			placeholder: __( 'For example Mathematics', 'ohmylms' ),
			suggestions: [ 'Mathematics', 'Science', 'English' ],
		},
		{
			key: 'language',
			label: __( 'Language', 'ohmylms' ),
			placeholder: __( 'For example Монгол', 'ohmylms' ),
			suggestions: [ 'Монгол', 'English' ],
		},
	];
	return (
		<Fragment>
			<section className="ohmylms-syllabus-settings-card">
				<h3>{ __( 'Syllabus profile', 'ohmylms' ) }</h3>
				<div className="ohmylms-ws-meta">
					{ fields.map( ( { key, ...field } ) => (
						<SaveField
							key={ key }
							id={ 'syllabus-home-' + key }
							{ ...field }
							value={ profile[ key ] }
							disabled={ w.pending }
							onSave={ ( text ) =>
								w.saveSettings( { [ key ]: text.trim() } )
							}
						/>
					) ) }
				</div>
			</section>
			<section className="ohmylms-syllabus-settings-card">
				<h3>{ __( 'Publishing', 'ohmylms' ) }</h3>
				<div className="ohmylms-ws-course-actions">
					<Button
						variant="secondary"
						href={ w.course?.preview }
						target="_blank"
						rel="noopener noreferrer"
					>
						{ __( 'Preview skill directory', 'ohmylms' ) }
					</Button>
					{ live && w.course?.directory_ready && (
						<Button
							variant="link"
							href={ w.course?.directory }
							target="_blank"
							rel="noopener noreferrer"
						>
							{ __( 'View published syllabus', 'ohmylms' ) }
						</Button>
					) }
				</div>
				<Tag tone={ live ? 'ok' : 'warn' }>
					{ live
						? __( 'Syllabus published', 'ohmylms' )
						: __( 'Syllabus draft', 'ohmylms' ) }
				</Tag>
				<p>
					{ __(
						'Publish the skill collection when its structure is ready. A syllabus does not need a course completion requirement. Attached learning resources must be published first.',
						'ohmylms'
					) }
				</p>
				<Button
					variant="primary"
					disabled={
						w.pending || ! w.course || w.outline.totals.skills === 0
					}
					onClick={ () => setConfirmPublish( true ) }
				>
					{ live
						? __( 'Publish syllabus changes', 'ohmylms' )
						: __( 'Publish syllabus', 'ohmylms' ) }
				</Button>
			</section>
			{ confirmPublish && (
				<Modal
					title={ __( 'Publish syllabus', 'ohmylms' ) }
					onRequestClose={ () => setConfirmPublish( false ) }
				>
					{ w.notice?.kind === 'error' && (
						<Notice status="error" isDismissible={ false }>
							{ w.notice.text }
						</Notice>
					) }
					<p>
						{ __(
							'Publish this syllabus and its latest skill structure for learners?',
							'ohmylms'
						) }
					</p>
					<div className="ohmylms-ws-course-actions">
						<Button
							variant="secondary"
							onClick={ () => setConfirmPublish( false ) }
						>
							{ __( 'Cancel', 'ohmylms' ) }
						</Button>
						<Button
							variant="primary"
							disabled={ w.pending }
							onClick={ async () => {
								if ( await w.publishSyllabus() ) {
									setConfirmPublish( false );
								}
							} }
						>
							{ __( 'Publish syllabus', 'ohmylms' ) }
						</Button>
					</div>
				</Modal>
			) }
		</Fragment>
	);
}
