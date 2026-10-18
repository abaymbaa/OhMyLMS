/** @jsx createElement */
import { createElement, useEffect, useRef, useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { Button, Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { registerBlockType, getBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import {
	loadBankQuestion,
	createBankQuestion,
	saveQuestionAttributes,
	approveQuestion,
} from '../question-bank/api.mjs';
import {
	MultipleChoiceFields,
	registerMultipleChoiceBlock,
} from '../question-editor/MultipleChoiceBlock';

/**
 * A lesson placement stores references only; private authoring data uses the bank API.
 * @param root0
 * @param root0.attributes
 * @param root0.setAttributes
 * @param root0.clientId
 * @param root0.context
 */
function LessonChoiceEdit( {
	attributes,
	setAttributes,
	clientId,
	context = {},
} ) {
	const quiz = context.postType === 'ohmylms-quiz';
	const [ question, setQuestion ] = useState( null );
	const [ detail, setDetail ] = useState( null );
	const [ dirty, setDirty ] = useState(
		! attributes.questionId || ! attributes.uuid
	);
	const [ busy, setBusy ] = useState( false );
	const [ error, setError ] = useState( '' );
	const loadedId = useRef( 0 );
	const { lockPostSaving, unlockPostSaving } = useDispatch( 'core/editor' );
	useEffect( () => {
		if ( context.postType ) {
			const delivery = quiz ? 'quiz' : 'inline';
			if ( attributes.delivery !== delivery ) {
				setAttributes( { delivery } );
			}
		}
	}, [ context.postType, attributes.delivery, quiz, setAttributes ] );
	useEffect( () => {
		const lock = `ohmylms-question-${ clientId }`;
		if ( dirty || busy ) {
			lockPostSaving( lock );
		} else {
			unlockPostSaving( lock );
		}
		return () => unlockPostSaving( lock );
	}, [ dirty, busy, clientId, lockPostSaving, unlockPostSaving ] );
	useEffect( () => {
		let active = true;
		if (
			attributes.questionId &&
			loadedId.current === attributes.questionId
		) {
			return undefined;
		}
		if ( ! attributes.questionId ) {
			loadedId.current = 0;
			setQuestion( {
				name: '',
				description: '',
				settings: {
					type: 'single-choice',
					score: { enabled: true, value: 1 },
				},
				questions: [
					{ answer: '', is_correct: true, order_number: 1 },
					{ answer: '', is_correct: false, order_number: 2 },
				],
			} );
			return undefined;
		}
		setQuestion( null );
		loadBankQuestion( attributes.questionId, apiFetch )
			.then( ( data ) => {
				if ( active ) {
					loadedId.current = attributes.questionId;
					setDetail( data );
					if ( attributes.uuid !== data.uuid ) {
						setAttributes( { uuid: data.uuid } );
					}
					setDirty( false );
					setQuestion( {
						id: data.id,
						name: data.name,
						description: data.description,
						settings: data.settings,
						questions: data.options || [],
					} );
				}
			} )
			.catch( ( failure ) => active && setError( failure.message ) );
		return () => {
			active = false;
		};
	}, [ attributes.questionId, attributes.uuid, setAttributes ] );
	async function save( approve = false ) {
		setBusy( true );
		setError( '' );
		try {
			const base = attributes.questionId
				? detail ||
					( await loadBankQuestion(
						attributes.questionId,
						apiFetch
					) )
				: null;
			const payload = {
				name: question.name,
				description: question.description,
				settings: question.settings,
				questions: question.questions,
				...( base ? { base_modified: base.modified } : {} ),
			};
			const saved = attributes.questionId
				? await saveQuestionAttributes(
						attributes.questionId,
						payload,
						apiFetch
					)
				: await createBankQuestion( payload, apiFetch );
			const id = attributes.questionId || saved.id;
			// Keep the created identity even if refreshing its private details fails.
			loadedId.current = id;
			setAttributes( { questionId: id } );
			const fresh = await loadBankQuestion( id, apiFetch );
			setDetail( fresh );
			setQuestion( {
				...question,
				id,
				questions: fresh.options || [],
				settings: fresh.settings,
			} );
			setAttributes( { questionId: id, uuid: fresh.uuid } );
			setDirty( false );
			if ( approve ) {
				await approveQuestion( id, fresh.current_version_id, apiFetch );
				setDetail( await loadBankQuestion( id, apiFetch ) );
			}
		} catch ( failure ) {
			setError( failure.message );
		} finally {
			setBusy( false );
		}
	}
	if ( ! question ) {
		return error ? (
			<Notice status="error" isDismissible={ false }>
				{ error }
			</Notice>
		) : (
			<Spinner />
		);
	}
	const supported = [ 'single-choice', 'multiple-choice' ].includes(
		question.settings?.type
	);
	let status = __(
		'Question saved. Approve this version before learners can use it.',
		'ohmylms'
	);
	if ( quiz ) {
		status = __(
			'Question saved. Save the quiz to keep this block placement.',
			'ohmylms'
		);
	}
	if ( dirty ) {
		status = __( 'Question changes are not saved.', 'ohmylms' );
	} else if ( ! quiz && detail?.approved_is_current ) {
		status = __(
			'Approved question saved. Save the lesson to keep this placement.',
			'ohmylms'
		);
	}
	return (
		<>
			{ error && (
				<Notice status="error" isDismissible={ false }>
					{ error }
				</Notice>
			) }
			{ supported ? (
				<MultipleChoiceFields
					question={ question }
					readOnly={ busy || detail?.can_edit === false }
					onChange={ ( patch ) => {
						setQuestion( { ...question, ...patch } );
						setDirty( true );
					} }
				/>
			) : (
				<p>
					{ __(
						'This question now uses another format. Edit it in the question bank.',
						'ohmylms'
					) }
				</p>
			) }
			<div className="ohmylms-choice-save-row">
				<Button
					variant="primary"
					disabled={
						busy || ! supported || detail?.can_edit === false
					}
					onClick={ () => save() }
				>
					{ __( 'Save question', 'ohmylms' ) }
				</Button>
				{ ! quiz && detail?.can_approve && (
					<Button
						variant="secondary"
						disabled={
							busy || ! supported || detail?.can_edit === false
						}
						onClick={ () => save( true ) }
					>
						{ __( 'Save and approve for learners', 'ohmylms' ) }
					</Button>
				) }
				<span role="status">
					{ dirty
						? __( 'Unsaved changes', 'ohmylms' )
						: __( 'Question saved', 'ohmylms' ) }
				</span>
				<details className="ohmylms-choice-save-help">
					<summary>{ __( 'Help', 'ohmylms' ) }</summary>
					<p>{ status }</p>
					<p>
						{ quiz
							? __(
									'Save the question, then save the quiz.',
									'ohmylms'
								)
							: __(
									'Save the question and approve it before learners can use it. Save the lesson to keep its placement.',
									'ohmylms'
								) }
					</p>
				</details>
			</div>
		</>
	);
}

registerMultipleChoiceBlock( LessonChoiceEdit );

/**
 * Keep established question formats movable in native quiz documents.
 * @param {Object} props Block properties.
 * @return {Element} Existing question reference.
 */
function QuizQuestionReferenceEdit( props ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<LessonChoiceEdit { ...props } />
		</div>
	);
}

if ( ! getBlockType( 'ohmylms/quiz-question-reference' ) ) {
	registerBlockType( 'ohmylms/quiz-question-reference', {
		apiVersion: 3,
		title: __( 'Existing quiz question', 'ohmylms' ),
		category: 'text',
		icon: 'welcome-learn-more',
		attributes: {
			questionId: { type: 'integer', default: 0 },
			uuid: { type: 'string', default: '' },
		},
		usesContext: [ 'postId', 'postType' ],
		supports: { html: false, inserter: false, reusable: false },
		edit: QuizQuestionReferenceEdit,
		save: () => null,
	} );
}
