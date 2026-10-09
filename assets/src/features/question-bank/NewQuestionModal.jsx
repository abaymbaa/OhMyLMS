import { createElement, Fragment, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, Modal, Notice } from '@wordpress/components';
import { questionCreator } from './questionCreation.mjs';
import {
	changeDraftType,
	draftToPayload,
	emptyDraft,
	validateDraft,
} from './model.mjs';
import { QuestionTypeChooser } from '../question-editor/QuestionTypeChooser';
import { QuestionForm } from '../question-editor/QuestionForm';
import { QUESTION_BLOCK_TYPES } from '../question-editor/questionBlocks.mjs';

const PROBLEMS = () => ( {
	name: __( 'Enter the question.', 'ohmylms' ),
	marks: __( 'Marks must be zero or more.', 'ohmylms' ),
	'options-count': __( 'Add at least two answer options.', 'ohmylms' ),
	'options-empty': __( 'Fill in every answer option.', 'ohmylms' ),
	'options-correct': __( 'Mark the correct answer.', 'ohmylms' ),
	'numerical-answer': __( 'Enter the expected number.', 'ohmylms' ),
	parts: __( 'Add at least one part.', 'ohmylms' ),
	extended: __(
		'Complete the diagram, video, response controls, and correct answer setup.',
		'ohmylms'
	),
	interactive: __(
		'Complete the question: every choice, group, blank or tile needs its content and answer.',
		'ohmylms'
	),
} );

/**
 * Write a new question straight into the bank. It is saved without a quiz; afterwards
 * the bank's detail view sets its bank, skills and difficulty and approves it.
 * @param root0
 * @param root0.onClose
 * @param root0.onCreated
 * @param root0.skillId
 */
export function NewQuestionModal( { onClose, onCreated, skillId } ) {
	const creator = useRef( null );
	const [ draft, setDraft ] = useState( () => emptyDraft() );
	const [ choosingType, setChoosingType ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ error, setError ] = useState( '' );
	const [ tried, setTried ] = useState( false );
	const problems = validateDraft( draft );
	const set = ( fields ) => setDraft( { ...draft, ...fields } );

	async function save() {
		setTried( true );
		if ( problems.length ) {
			return;
		}
		setSaving( true );
		setError( '' );
		try {
			if ( ! creator.current ) {
				creator.current = questionCreator( skillId );
			}
			const created = await creator.current( draftToPayload( draft ) );
			onCreated( created.id );
		} catch ( cause ) {
			setError(
				cause.message || __( 'Could not save the question.', 'ohmylms' )
			);
			setSaving( false );
		}
	}

	if ( choosingType ) {
		return (
			<QuestionTypeChooser
				onClose={ onClose }
				onSelect={ ( type ) => {
					setDraft( emptyDraft( type ) );
					setChoosingType( false );
				} }
			/>
		);
	}
	return (
		<Modal
			title={ __( 'New question', 'ohmylms' ) }
			onRequestClose={ onClose }
			size="large"
			className="ohmylms-question-block-modal"
		>
			<div className="ohmylms-new-question">
				{ error && (
					<Notice status="error" onRemove={ () => setError( '' ) }>
						{ error }
					</Notice>
				) }
				<QuestionForm
					key={ draft.type }
					question={ {
						...draftToPayload( draft ),
						name: draft.name,
						questions: draft.options.map( ( option, index ) => ( {
							...option,
							id: index + 1,
							is_correct: option.correct,
							order_number: index + 1,
						} ) ),
					} }
					onChange={ ( patch ) =>
						set( {
							...( 'name' in patch ? { name: patch.name } : {} ),
							...( 'description' in patch
								? { description: patch.description }
								: {} ),
							...( patch.questions
								? {
										options: patch.questions.map(
											( option ) => ( {
												...option,
												correct: !! option.is_correct,
											} )
										),
									}
								: {} ),
							...( patch.settings
								? {
										settings: patch.settings,
										marks:
											patch.settings.score?.value ??
											draft.marks,
									}
								: {} ),
						} )
					}
					toolbarActions={
						<Button
							variant="primary"
							isBusy={ saving }
							disabled={ saving }
							onClick={ save }
						>
							{ __( 'Save question', 'ohmylms' ) }
						</Button>
					}
					types={ QUESTION_BLOCK_TYPES.map(
						( [ value, label ] ) => ( {
							value,
							label,
						} )
					) }
					onTypeChange={ ( type ) =>
						setDraft( ( value ) => changeDraftType( value, type ) )
					}
				/>
				{ tried && problems.length > 0 && (
					<Notice status="warning" isDismissible={ false }>
						<ul style={ { margin: 0 } }>
							{ problems.map( ( problem ) => (
								<li key={ problem }>
									{ PROBLEMS()[ problem ] }
								</li>
							) ) }
						</ul>
					</Notice>
				) }
				<p>
					{ __(
						skillId
							? 'The question is saved to the bank and linked to this skill.'
							: 'The question is saved to the bank without a quiz. Next you can set its bank, skills and difficulty, and approve it.',
						'ohmylms'
					) }
				</p>
				<Button
					variant="primary"
					isBusy={ saving }
					disabled={ saving }
					onClick={ save }
				>
					{ __( 'Save question', 'ohmylms' ) }
				</Button>{ ' ' }
				<Button variant="tertiary" onClick={ onClose }>
					{ __( 'Cancel', 'ohmylms' ) }
				</Button>
			</div>
		</Modal>
	);
}
