/** @jsx createElement */
import {
	createElement,
	useCallback,
	useEffect,
	useRef,
	useState,
} from '@wordpress/element';
import { useDispatch, select } from '@wordpress/data';
import { Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import {
	registerBlockType,
	getBlockType,
	createBlock,
} from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { choiceReadyToSave, reconcileChoiceSave } from './choiceAutosave.mjs';
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
	const revision = useRef( 0 );
	const latestQuestion = useRef( question );
	latestQuestion.current = question;
	const { insertBlock, removeBlock } = useDispatch( 'core/block-editor' );
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
					{
						id: Date.now(),
						temp: true,
						answer: '',
						is_correct: true,
						order_number: 1,
					},
					{
						id: Date.now() + 1,
						temp: true,
						answer: '',
						is_correct: false,
						order_number: 2,
					},
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
	const save = useCallback(
		async ( approve = false ) => {
			const submittedRevision = revision.current;
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
					questions: question.questions.map(
						( { clientKey, ...option } ) => option
					),
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
				const current = latestQuestion.current || question;
				const unchanged = revision.current === submittedRevision;
				const reconciled = reconcileChoiceSave(
					question,
					current,
					fresh
				);
				const next = unchanged
					? { ...reconciled, settings: fresh.settings }
					: reconciled;
				latestQuestion.current = next;
				setQuestion( next );
				setAttributes( {
					questionId: id,
					uuid: fresh.uuid,
					authoringRevision:
						( Number( attributes.authoringRevision ) || 0 ) + 1,
				} );
				setDirty( ! unchanged );
				if ( approve ) {
					await approveQuestion(
						id,
						fresh.current_version_id,
						apiFetch
					);
					setDetail( await loadBankQuestion( id, apiFetch ) );
				}
			} catch ( failure ) {
				setError( failure.message );
			} finally {
				setBusy( false );
			}
		},
		[
			attributes.questionId,
			attributes.authoringRevision,
			question,
			detail,
			setAttributes,
		]
	);
	useEffect( () => {
		if (
			! dirty ||
			busy ||
			error ||
			detail?.can_edit === false ||
			! choiceReadyToSave( question )
		) {
			return undefined;
		}
		const timer = window.setTimeout( () => save(), 650 );
		return () => window.clearTimeout( timer );
	}, [ dirty, busy, error, question, detail?.can_edit, save ] );
	async function duplicate() {
		try {
			const created = await createBankQuestion(
				{
					name: question.name,
					description: question.description,
					settings: question.settings,
					questions: question.questions.map(
						( { id, temp, clientKey, ...option } ) => option
					),
				},
				apiFetch
			);
			const fresh = await loadBankQuestion( created.id, apiFetch );
			const editor = select( 'core/block-editor' );
			insertBlock(
				createBlock( 'ohmylms/shared-multiple-choice', {
					questionId: fresh.id,
					uuid: fresh.uuid,
					delivery: quiz ? 'quiz' : 'inline',
				} ),
				editor.getBlockIndex( clientId ) + 1,
				editor.getBlockRootClientId( clientId )
			);
		} catch ( failure ) {
			setError( failure.message );
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
	const supported = (
		quiz
			? [
					'single-choice',
					'multiple-choice',
					'short-text',
					'long-text',
					'reorder',
					'fill-in-the-blank',
					'matching',
					'match-table-grid',
					'dropdown-blanks',
					'multi-blank',
					'build-expression',
					'expression',
				]
			: [ 'single-choice', 'multiple-choice' ]
	).includes( question.settings?.type );
	let incompleteMessage = __(
		'Complete the question and options, and select a correct answer.',
		'ohmylms'
	);
	if ( [ 'short-text', 'long-text' ].includes( question.settings.type ) ) {
		incompleteMessage = __( 'Enter a question to save.', 'ohmylms' );
	} else if ( question.settings.type === 'reorder' ) {
		incompleteMessage = __( 'Add at least two items to save.', 'ohmylms' );
	} else if ( question.settings.type === 'match-table-grid' ) {
		incompleteMessage = __(
			'Add row and column labels, and choose a correct column for every row.',
			'ohmylms'
		);
	} else if ( question.settings.type === 'matching' ) {
		incompleteMessage = __(
			'Complete at least two matching pairs to save.',
			'ohmylms'
		);
	} else if ( question.settings.type === 'fill-in-the-blank' ) {
		incompleteMessage = __(
			'Write {answer} in the question, or add an accepted answer below.',
			'ohmylms'
		);
	} else if ( question.settings.type === 'expression' ) {
		incompleteMessage = __(
			'Enter a correct math expression to save.',
			'ohmylms'
		);
	} else if ( question.settings.type === 'build-expression' ) {
		incompleteMessage = __(
			'Enter at least two tiles in the correct order to save.',
			'ohmylms'
		);
	} else if ( question.settings.type === 'multi-blank' ) {
		incompleteMessage = __(
			'Add {a}, {b} or other blank markers, and set an answer for each blank.',
			'ohmylms'
		);
	} else if ( question.settings.type === 'dropdown-blanks' ) {
		incompleteMessage = __(
			'Write {1} in the question, add dropdown choices, and select a correct choice.',
			'ohmylms'
		);
	}

	return (
		<>
			{ error && (
				<Notice
					status="error"
					isDismissible={ false }
					actions={ [
						{
							label: __( 'Retry', 'ohmylms' ),
							onClick: () => save(),
						},
					] }
				>
					{ error }
				</Notice>
			) }
			{ dirty &&
				! busy &&
				supported &&
				! choiceReadyToSave( question ) && (
					<p className="ohmylms-choice-validation" role="status">
						{ incompleteMessage }
					</p>
				) }
			{ supported ? (
				<MultipleChoiceFields
					question={ question }
					allowWritten={ quiz }
					readOnly={ detail?.can_edit === false }
					onRemove={ () => removeBlock( clientId ) }
					onDuplicate={
						! busy && choiceReadyToSave( question )
							? duplicate
							: undefined
					}
					onApprove={
						! quiz && detail?.can_approve && ! busy
							? () => save( true )
							: undefined
					}
					onChange={ ( patch ) => {
						revision.current++;
						const next = { ...question, ...patch };
						latestQuestion.current = next;
						setQuestion( next );
						setDirty( true );
						setError( '' );
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
