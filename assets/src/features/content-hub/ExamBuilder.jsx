import { createElement, useEffect, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	Button,
	Modal,
	Notice,
	SelectControl,
	Spinner,
	TextControl,
	TextareaControl,
} from '@wordpress/components';
import {
	MAX_OPTIONS,
	QUESTION_TYPES,
	addOption,
	addQuestion,
	addSection,
	changeType,
	clampSelection,
	duplicateQuestion,
	moveQuestion,
	newDocument,
	numberOf,
	questionProblems,
	removeItem,
	removeOption,
	setOptionText,
	setSectionTitle,
	summarize,
	toggleCorrect,
	updateQuestion,
	withKeys,
} from './examBuilderModel.mjs';

const request = ( path, method, data ) =>
	window.wp.apiFetch( {
		path: `/ohmylms/v1/${ path }`,
		method,
		...( data ? { data } : {} ),
	} );

const typeLabels = () => ( {
	'single-choice': __( 'Multiple choice', 'ohmylms' ),
	'multiple-choice': __( 'Multiple select', 'ohmylms' ),
	numerical: __( 'Numerical answer', 'ohmylms' ),
	'short-text': __( 'Written answer (teacher marked)', 'ohmylms' ),
} );

const problemText = () => ( {
	text: __( 'Add the question text.', 'ohmylms' ),
	options: __( 'Add at least two answer options.', 'ohmylms' ),
	correct: __( 'Mark the correct answer.', 'ohmylms' ),
	answer: __( 'Enter the correct number.', 'ohmylms' ),
} );

const letters = 'abcdefgh';

/**
 * Author an exam directly: sections, questions, answers and timing, saved as a draft on the exam engine.
 * @param {Object}                   root0         Component properties.
 * @param {number}                   root0.examId  Saved exam to edit, or 0 for a new one.
 * @param {(saved: boolean) => void} root0.onClose Called when the builder closes, with whether anything was saved.
 */
export function ExamBuilder( { examId = 0, onClose } ) {
	const [ id, setId ] = useState( examId );
	const [ exam, setExam ] = useState( null );
	const [ doc, setDoc ] = useState( () =>
		addQuestion( newDocument(), 0, 'single-choice' )
	);
	const [ at, setAt ] = useState( { s: 0, q: 0 } );
	const [ loading, setLoading ] = useState( !! examId );
	const [ busy, setBusy ] = useState( false );
	const [ dirty, setDirty ] = useState( false );
	const [ saved, setSaved ] = useState( false );
	const [ error, setError ] = useState( '' );
	const [ notice, setNotice ] = useState( '' );
	const [ discard, setDiscard ] = useState( false );
	const locked = exam?.status === 'publish';
	const labels = typeLabels();

	useEffect( () => {
		if ( ! examId ) {
			return;
		}
		request( `exams/${ examId }/compose`, 'GET' )
			.then( ( loaded ) => {
				const next = withKeys( loaded.document );
				setDoc( next );
				setExam( loaded.exam );
				setAt( clampSelection( next, { s: 0, q: 0 } ) );
			} )
			.catch( ( failure ) => setError( failure.message ) )
			.finally( () => setLoading( false ) );
	}, [ examId ] );

	useEffect( () => {
		if ( ! dirty ) {
			return undefined;
		}
		const protect = ( event ) => {
			event.preventDefault();
			event.returnValue = '';
		};
		window.addEventListener( 'beforeunload', protect );
		return () => window.removeEventListener( 'beforeunload', protect );
	}, [ dirty ] );

	const edit = ( change, nextAt ) => {
		const next = change( doc );
		setDoc( next );
		setAt( clampSelection( next, nextAt || at ) );
		setDirty( true );
		setNotice( '' );
	};

	const save = async () => {
		const data = {
			title: doc.title,
			duration_minutes: Number( doc.duration_minutes ),
			instructions: doc.instructions,
			sections: doc.sections,
		};
		const result = id
			? await request( `exams/${ id }/compose`, 'PUT', data )
			: await request( 'exams/compose', 'POST', data );
		const next = withKeys( result.document );
		setId( result.exam.id );
		setExam( result.exam );
		setDoc( next );
		setAt( clampSelection( next, at ) );
		setDirty( false );
		setSaved( true );
		return result.exam.id;
	};

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
						'The operation failed. Your edits remain on this page.',
						'ohmylms'
					)
			);
		} finally {
			setBusy( false );
		}
	};

	const publish = () =>
		run(
			async () => {
				const savedId = await save();
				const published = await request(
					`exams/${ savedId }/publish`,
					'POST',
					{}
				);
				setExam( published );
			},
			__( 'Exam published.', 'ohmylms' )
		);

	const close = () => {
		if ( dirty && ! discard ) {
			setDiscard( true );
			return;
		}
		onClose?.( saved );
	};

	const summary = summarize( doc );
	const question =
		at.q >= 0 ? doc.sections[ at.s ]?.questions[ at.q ] : undefined;
	const problems = question ? questionProblems( question ) : [];
	const choice =
		question &&
		( question.type === 'single-choice' ||
			question.type === 'multiple-choice' );
	const number = question ? numberOf( doc, at ) : 0;
	let counter = 0;

	return (
		<Modal
			title={ __( 'Exam builder', 'ohmylms' ) }
			size="fill"
			className="ohmylms-exam-builder"
			shouldCloseOnClickOutside={ false }
			onRequestClose={ close }
		>
			{ loading && <Spinner /> }
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
			{ discard && (
				<Notice status="warning" isDismissible={ false }>
					{ __( 'You have unsaved changes.', 'ohmylms' ) }{ ' ' }
					<Button variant="link" onClick={ () => onClose?.( saved ) }>
						{ __( 'Discard and close', 'ohmylms' ) }
					</Button>{ ' ' }
					<Button
						variant="link"
						onClick={ () => setDiscard( false ) }
					>
						{ __( 'Keep editing', 'ohmylms' ) }
					</Button>
				</Notice>
			) }
			{ locked && (
				<Notice status="info" isDismissible={ false }>
					{ __(
						'This exam is published, so it can no longer be edited.',
						'ohmylms'
					) }
				</Notice>
			) }
			<div className="ohmylms-exam-builder-bar">
				<TextControl
					label={ __( 'Exam title', 'ohmylms' ) }
					value={ doc.title }
					disabled={ locked }
					onChange={ ( title ) =>
						edit( ( d ) => ( { ...d, title } ) )
					}
				/>
				<span className="ohmylms-exam-builder-status">
					{ locked
						? __( 'Published', 'ohmylms' )
						: sprintf(
								/* translators: %d: number of incomplete questions. */
								__(
									'Draft · %d to fix before publishing',
									'ohmylms'
								),
								summary.incomplete
							) }
				</span>
				{ exam?.preview_url && (
					<Button
						variant="secondary"
						href={ exam.preview_url }
						target="_blank"
						rel="noreferrer"
					>
						{ __( 'Preview as learner', 'ohmylms' ) }
					</Button>
				) }
				<Button
					variant="secondary"
					disabled={ busy || locked || ! dirty }
					onClick={ () =>
						run( save, __( 'Draft saved.', 'ohmylms' ) )
					}
				>
					{ __( 'Save draft', 'ohmylms' ) }
				</Button>
				<Button
					variant="primary"
					disabled={
						busy ||
						locked ||
						! doc.title.trim() ||
						! summary.questions ||
						summary.incomplete > 0
					}
					onClick={ publish }
				>
					{ __( 'Publish exam', 'ohmylms' ) }
				</Button>
			</div>

			<div className="ohmylms-exam-builder-grid">
				<nav
					className="ohmylms-exam-builder-outline"
					aria-label={ __( 'Exam outline', 'ohmylms' ) }
				>
					{ doc.sections.map( ( section, s ) => (
						<div key={ section.key } className="outline-section">
							<TextControl
								label={ sprintf(
									/* translators: %d: section number. */
									__( 'Section %d title', 'ohmylms' ),
									s + 1
								) }
								value={ section.title }
								placeholder={ sprintf(
									/* translators: %d: section number. */
									__( 'Section %d', 'ohmylms' ),
									s + 1
								) }
								disabled={ locked }
								onChange={ ( title ) =>
									edit( ( d ) =>
										setSectionTitle( d, s, title )
									)
								}
							/>
							{ section.questions.map( ( item, q ) => {
								counter += 1;
								const current = at.s === s && at.q === q;
								return (
									<button
										type="button"
										key={ item.key }
										aria-current={
											current ? 'true' : undefined
										}
										className={ `outline-question${
											current ? ' is-current' : ''
										}` }
										onClick={ () => setAt( { s, q } ) }
									>
										<span className="outline-number">
											{ counter }
										</span>
										<span className="outline-text">
											{ item.text ||
												__(
													'Untitled question',
													'ohmylms'
												) }
										</span>
										{ questionProblems( item ).length >
											0 && (
											<span className="outline-fix">
												{ __( 'Fix', 'ohmylms' ) }
											</span>
										) }
									</button>
								);
							} ) }
							{ ! locked && (
								<div className="outline-actions">
									<Button
										variant="secondary"
										onClick={ () =>
											edit(
												( d ) =>
													addQuestion(
														d,
														s,
														'single-choice'
													),
												{
													s,
													q: section.questions.length,
												}
											)
										}
									>
										{ __( 'Add question', 'ohmylms' ) }
									</Button>
									{ doc.sections.length > 1 && (
										<Button
											variant="tertiary"
											isDestructive
											onClick={ () =>
												edit( ( d ) =>
													removeItem( d, s )
												)
											}
										>
											{ __(
												'Remove section',
												'ohmylms'
											) }
										</Button>
									) }
								</div>
							) }
						</div>
					) ) }
					{ ! locked && (
						<Button
							variant="secondary"
							onClick={ () =>
								edit( ( d ) => addSection( d ), {
									s: doc.sections.length,
									q: 0,
								} )
							}
						>
							{ __( 'Add section', 'ohmylms' ) }
						</Button>
					) }
				</nav>

				<section
					className="ohmylms-exam-builder-editor"
					aria-label={ __( 'Question editor', 'ohmylms' ) }
				>
					{ ! question && (
						<p>
							{ __(
								'This exam has no questions yet. Use Add question in the outline.',
								'ohmylms'
							) }
						</p>
					) }
					{ question && (
						<>
							<div className="editor-head">
								<h3>
									{ sprintf(
										/* translators: %d: question number. */
										__( 'Question %d', 'ohmylms' ),
										number
									) }
								</h3>
								<TextControl
									label={ __( 'Points', 'ohmylms' ) }
									type="number"
									min="0"
									value={ question.points }
									disabled={ locked }
									onChange={ ( points ) =>
										edit( ( d ) =>
											updateQuestion( d, at, { points } )
										)
									}
								/>
							</div>
							<SelectControl
								label={ __( 'Question type', 'ohmylms' ) }
								value={ question.type }
								disabled={ locked }
								options={ QUESTION_TYPES.map( ( type ) => ( {
									value: type.value,
									label: labels[ type.value ],
								} ) ) }
								onChange={ ( type ) =>
									edit( ( d ) => changeType( d, at, type ) )
								}
							/>
							<TextareaControl
								label={ __( 'Question text', 'ohmylms' ) }
								value={ question.text }
								rows={ 4 }
								disabled={ locked }
								onChange={ ( text ) =>
									edit( ( d ) =>
										updateQuestion( d, at, { text } )
									)
								}
							/>
							{ choice && (
								<fieldset className="editor-options">
									<legend>
										{ question.type === 'single-choice'
											? __(
													'Answer options · select the one correct answer',
													'ohmylms'
												)
											: __(
													'Answer options · select all correct answers',
													'ohmylms'
												) }
									</legend>
									{ question.options.map(
										( option, index ) => (
											<div
												className="editor-option"
												key={ `${ question.key }-${ index }` }
											>
												<button
													type="button"
													className={ `editor-correct${
														option.correct
															? ' is-correct'
															: ''
													}${
														question.type ===
														'multiple-choice'
															? ' is-square'
															: ''
													}` }
													aria-pressed={
														option.correct
													}
													aria-label={ sprintf(
														/* translators: %s: option letter. */
														__(
															'Option %s is correct',
															'ohmylms'
														),
														letters[ index ]
													) }
													disabled={ locked }
													onClick={ () =>
														edit( ( d ) =>
															toggleCorrect(
																d,
																at,
																index
															)
														)
													}
												>
													{ option.correct
														? '✓'
														: '' }
												</button>
												<span className="editor-letter">
													{ letters[ index ] })
												</span>
												<TextControl
													label={ sprintf(
														/* translators: %s: option letter. */
														__(
															'Option %s text',
															'ohmylms'
														),
														letters[ index ]
													) }
													hideLabelFromVision
													value={ option.text }
													disabled={ locked }
													onChange={ ( text ) =>
														edit( ( d ) =>
															setOptionText(
																d,
																at,
																index,
																text
															)
														)
													}
												/>
												<Button
													icon="no-alt"
													label={ sprintf(
														/* translators: %s: option letter. */
														__(
															'Remove option %s',
															'ohmylms'
														),
														letters[ index ]
													) }
													disabled={
														locked ||
														question.options
															.length <= 2
													}
													onClick={ () =>
														edit( ( d ) =>
															removeOption(
																d,
																at,
																index
															)
														)
													}
												/>
											</div>
										)
									) }
									<Button
										variant="link"
										disabled={
											locked ||
											question.options.length >=
												MAX_OPTIONS
										}
										onClick={ () =>
											edit( ( d ) => addOption( d, at ) )
										}
									>
										{ __( 'Add option', 'ohmylms' ) }
									</Button>
								</fieldset>
							) }
							{ question.type === 'numerical' && (
								<TextControl
									label={ __( 'Correct number', 'ohmylms' ) }
									help={ __(
										'Learners must enter exactly this number.',
										'ohmylms'
									) }
									value={ question.answer }
									disabled={ locked }
									onChange={ ( answer ) =>
										edit( ( d ) =>
											updateQuestion( d, at, { answer } )
										)
									}
								/>
							) }
							{ question.type === 'short-text' && (
								<p className="editor-note">
									{ __(
										'A teacher marks written answers after the exam is submitted.',
										'ohmylms'
									) }
								</p>
							) }
							{ problems.length > 0 && (
								<ul className="editor-problems">
									{ problems.map( ( problem ) => (
										<li key={ problem }>
											{ problemText()[ problem ] }
										</li>
									) ) }
								</ul>
							) }
							{ ! locked && (
								<div className="editor-actions">
									<Button
										variant="tertiary"
										isDestructive
										onClick={ () =>
											edit( ( d ) =>
												removeItem( d, at.s, at.q )
											)
										}
									>
										{ __( 'Delete question', 'ohmylms' ) }
									</Button>
									<Button
										variant="secondary"
										onClick={ () =>
											edit(
												( d ) =>
													duplicateQuestion( d, at ),
												{ s: at.s, q: at.q + 1 }
											)
										}
									>
										{ __( 'Duplicate', 'ohmylms' ) }
									</Button>
									<Button
										variant="secondary"
										onClick={ () =>
											edit(
												( d ) =>
													moveQuestion( d, at, -1 ),
												{ s: at.s, q: at.q - 1 }
											)
										}
									>
										{ __( 'Move up', 'ohmylms' ) }
									</Button>
									<Button
										variant="secondary"
										onClick={ () =>
											edit(
												( d ) =>
													moveQuestion( d, at, 1 ),
												{ s: at.s, q: at.q + 1 }
											)
										}
									>
										{ __( 'Move down', 'ohmylms' ) }
									</Button>
								</div>
							) }
						</>
					) }
				</section>

				<aside className="ohmylms-exam-builder-side">
					{ question && (
						<div className="side-card">
							<h3>{ __( 'Learner preview', 'ohmylms' ) }</h3>
							<div className="preview">
								<span className="preview-number">
									{ sprintf(
										/* translators: %d: question number. */
										__( 'Q: %d', 'ohmylms' ),
										number
									) }
								</span>
								<p className="preview-text">
									{ question.text ||
										__(
											'Question text appears here.',
											'ohmylms'
										) }
								</p>
								{ choice &&
									question.options.map( ( option, index ) => (
										<p
											className="preview-option"
											key={ `${ question.key }-p${ index }` }
										>
											<span>{ letters[ index ] })</span>{ ' ' }
											{ option.text }
										</p>
									) ) }
								{ question.type === 'numerical' && (
									<p className="preview-input">
										{ __( 'Enter a number', 'ohmylms' ) }
									</p>
								) }
								{ question.type === 'short-text' && (
									<p className="preview-input">
										{ __( 'Type your answer…', 'ohmylms' ) }
									</p>
								) }
							</div>
						</div>
					) }
					<div className="side-card">
						<h3>{ __( 'Exam settings', 'ohmylms' ) }</h3>
						<TextControl
							label={ __( 'Duration (minutes)', 'ohmylms' ) }
							type="number"
							min="1"
							max="1440"
							value={ doc.duration_minutes }
							disabled={ locked }
							onChange={ ( minutes ) =>
								edit( ( d ) => ( {
									...d,
									duration_minutes: minutes,
								} ) )
							}
						/>
						<TextareaControl
							label={ __(
								'Instructions for learners',
								'ohmylms'
							) }
							value={ doc.instructions }
							rows={ 4 }
							disabled={ locked }
							onChange={ ( instructions ) =>
								edit( ( d ) => ( { ...d, instructions } ) )
							}
						/>
					</div>
					<div className="side-card">
						<h3>{ __( 'Summary', 'ohmylms' ) }</h3>
						<dl className="summary">
							<dt>{ __( 'Sections', 'ohmylms' ) }</dt>
							<dd>{ summary.sections }</dd>
							<dt>{ __( 'Questions', 'ohmylms' ) }</dt>
							<dd>{ summary.questions }</dd>
							<dt>{ __( 'Total points', 'ohmylms' ) }</dt>
							<dd>{ summary.points }</dd>
							<dt>{ __( 'Need attention', 'ohmylms' ) }</dt>
							<dd
								className={ summary.incomplete ? 'is-bad' : '' }
							>
								{ summary.incomplete }
							</dd>
						</dl>
					</div>
				</aside>
			</div>
		</Modal>
	);
}
