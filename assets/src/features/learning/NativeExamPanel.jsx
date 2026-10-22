/** @jsx createElement */
import { createElement, useState } from '@wordpress/element';
import { select, useDispatch, useSelect } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { Button, Notice, TextareaControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
import { registerProfilePanel } from './ProfilePanel';

/**
 * Exam controls in the quiz editor: learner instructions and publication. The questions, sections,
 * time limit and marks are the quiz's own, so they are edited with the quiz tools beside this panel.
 *
 * @param {Object} root0      Component properties.
 * @param {Object} root0.data Exam id, status, player URL and instructions from the exam profile.
 * @return {Element|null} Panel, or nothing when this quiz has no exam record.
 */
export function NativeExamPanel( { data: exam } ) {
	const [ instructions, setInstructions ] = useState(
		exam?.instructions || ''
	);
	const [ status, setStatus ] = useState( exam?.status || 'draft' );
	const [ busy, setBusy ] = useState( false );
	const [ notice, setNotice ] = useState( '' );
	const [ error, setError ] = useState( '' );
	const { dirty, locked } = useSelect( ( getStore ) => {
		const editor = getStore( 'core/editor' );
		return {
			dirty: editor.isEditedPostDirty(),
			locked: editor.isPostSavingLocked(),
		};
	}, [] );
	const { savePost } = useDispatch( 'core/editor' );
	if ( ! exam?.id ) {
		return null;
	}
	const published = status === 'publish';
	const run = async ( action, done ) => {
		setBusy( true );
		setError( '' );
		setNotice( '' );
		try {
			await action();
			setNotice( done );
		} catch ( failure ) {
			setError(
				failure.message ||
					__(
						'The operation failed. Nothing was published.',
						'ohmylms'
					)
			);
		} finally {
			setBusy( false );
		}
	};
	const saveAll = async () => {
		if ( select( 'core/editor' ).isEditedPostDirty() ) {
			await savePost();
			if ( select( 'core/editor' ).didPostSaveRequestFail() ) {
				throw new Error(
					__(
						'The quiz could not be saved. Fix the highlighted question and try again.',
						'ohmylms'
					)
				);
			}
		}
		await apiFetch( {
			path: `/ohmylms/v1/exams/${ exam.id }/settings`,
			method: 'POST',
			data: { instructions },
		} );
	};
	return (
		<PluginDocumentSettingPanel
			name="ohmylms-native-exam"
			title={ __( 'Exam', 'ohmylms' ) }
			initialOpen
		>
			<p>
				{ published
					? __(
							'This exam is published. Its questions are frozen for learners.',
							'ohmylms'
						)
					: __(
							'Write the questions as OhMyLMS Question blocks. Set the time limit in Quiz settings and group questions into sections under Assessment and pools. Publish the exam with the button below, not the editor’s Publish button. Learners see the exam in a timed dashboard with a question palette.',
							'ohmylms'
						) }
			</p>
			<TextareaControl
				label={ __( 'Instructions for learners', 'ohmylms' ) }
				value={ instructions }
				rows={ 4 }
				disabled={ published || busy }
				onChange={ setInstructions }
			/>
			{ error && (
				<Notice status="error" onRemove={ () => setError( '' ) }>
					{ error }
				</Notice>
			) }
			{ notice && (
				<Notice status="success" onRemove={ () => setNotice( '' ) }>
					{ notice }
				</Notice>
			) }
			{ ! published && (
				<>
					<Button
						variant="secondary"
						disabled={ busy || locked }
						onClick={ () =>
							run( saveAll, __( 'Exam draft saved.', 'ohmylms' ) )
						}
					>
						{ dirty
							? __( 'Save exam draft', 'ohmylms' )
							: __( 'Save instructions', 'ohmylms' ) }
					</Button>{ ' ' }
					<Button
						variant="primary"
						disabled={ busy || locked }
						onClick={ () =>
							run(
								async () => {
									await saveAll();
									await apiFetch( {
										path: `/ohmylms/v1/exams/${ exam.id }/publish`,
										method: 'POST',
										data: {},
									} );
									setStatus( 'publish' );
								},
								__( 'Exam published.', 'ohmylms' )
							)
						}
					>
						{ __( 'Publish exam', 'ohmylms' ) }
					</Button>
				</>
			) }
			{ published && (
				<p>
					<Button variant="link" href={ exam.url } target="_blank">
						{ __( 'Open exam player', 'ohmylms' ) }
					</Button>
				</p>
			) }
		</PluginDocumentSettingPanel>
	);
}

registerProfilePanel( 'exam', NativeExamPanel );
