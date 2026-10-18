import {
	Children,
	cloneElement,
	createElement,
	isValidElement,
	useEffect,
	useId,
	useState,
} from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { Button, Notice, Spinner } from '@wordpress/components';
import { approveQuestion } from '../question-bank/api.mjs';

/**
 * Associate each repeated question/part control with its own accessible label.
 * @param {Object} root0          Component properties.
 * @param {Array}  root0.children Label and native input.
 */
function ExamField( { children } ) {
	const id = useId();
	return (
		<label htmlFor={ id }>
			{ Children.map( children, ( child ) =>
				isValidElement( child ) &&
				[ 'input', 'textarea', 'select' ].includes( child.type )
					? cloneElement( child, { id } )
					: child
			) }
		</label>
	);
}

const api = ( path, data ) =>
	window.wp.apiFetch( {
		path: `/ohmylms/v1/${ path }`,
		...( data ? { method: 'POST', data } : {} ),
	} );
const states = () => ( {
	queued: __( 'Checking PDF', 'ohmylms' ),
	failed: __( 'PDF check failed', 'ohmylms' ),
	ready_for_extraction: __( 'Ready to extract', 'ohmylms' ),
	extracting: __( 'Reading questions', 'ohmylms' ),
	extraction_failed: __( 'Extraction needs attention', 'ohmylms' ),
	ready_for_review: __( 'Ready for your review', 'ohmylms' ),
	committed: __( 'Question drafts saved', 'ohmylms' ),
} );

/**
 * Find existing catalogue skills without navigating away from review edits.
 * @param {Object}                  root0        Component properties.
 * @param {(token: string) => void} root0.onPick Skill selection callback.
 */
function SkillSearch( { onPick } ) {
	const [ query, setQuery ] = useState( '' );
	const [ matches, setMatches ] = useState( [] );
	const [ error, setError ] = useState( '' );
	useEffect( () => {
		let active = true;
		if ( query.trim().length < 2 ) {
			setMatches( [] );
			return undefined;
		}
		const timer = setTimeout( () => {
			api( `exam-import-skills?search=${ encodeURIComponent( query ) }` )
				.then( ( data ) => {
					if ( active ) {
						setMatches( data.items );
						setError( '' );
					}
				} )
				.catch( ( failure ) => {
					if ( active ) {
						setError( failure.message );
					}
				} );
		}, 300 );
		return () => {
			active = false;
			clearTimeout( timer );
		};
	}, [ query ] );
	return (
		<div>
			<ExamField>
				{ __( 'Find an existing skill', 'ohmylms' ) }
				<input
					value={ query }
					onChange={ ( event ) => setQuery( event.target.value ) }
				/>
			</ExamField>
			{ error && <p role="alert">{ error }</p> }
			{ matches.length > 0 && (
				<ExamField>
					{ __( 'Add a suggested skill', 'ohmylms' ) }
					<select
						value=""
						onChange={ ( event ) =>
							onPick( `#${ event.target.value }` )
						}
					>
						<option value="">
							{ __( 'Choose a skill', 'ohmylms' ) }
						</option>
						{ matches.map( ( skill ) => (
							<option key={ skill.id } value={ skill.id }>
								{ skill.code ? `${ skill.code } · ` : '' }
								{ skill.name }
							</option>
						) ) }
					</select>
				</ExamField>
			) }
		</div>
	);
}

/** PDF papers become reviewed bank questions and an exam on the shared quiz engine. */
export function ExamsPage() {
	const [ jobs, setJobs ] = useState( [] );
	const [ exams, setExams ] = useState( [] );
	const [ job, setJob ] = useState( null );
	const [ questions, setQuestions ] = useState( [] );
	const [ selected, setSelected ] = useState( 0 );
	const [ paper, setPaper ] = useState( null );
	const [ scheme, setScheme ] = useState( null );
	const [ busy, setBusy ] = useState( false );
	const [ dirty, setDirty ] = useState( false );
	const [ message, setMessage ] = useState( '' );
	const [ error, setError ] = useState( '' );
	const [ header, setHeader ] = useState( {
		title: '',
		duration_minutes: 60,
		board: '',
		qualification: '',
		subject_code: '',
		paper: '',
		variant: '',
		session: '',
		calculator: '',
		instructions: '',
	} );
	const refresh = async () => {
		const [ imports, library ] = await Promise.all( [
			api( 'exam-imports' ),
			api( 'exams' ),
		] );
		setJobs( imports.items );
		setExams( library.items );
	};
	const load = async ( id ) => {
		const next = await api( `exam-imports/${ id }` );
		setJob( next );
		setQuestions( next.draft || [] );
		setSelected( 0 );
		setDirty( false );
		const inventory = next.draft_inventory || next.inventory;
		if ( inventory ) {
			setHeader( ( previous ) => ( {
				...previous,
				title: inventory.title,
				duration_minutes: inventory.duration_minutes || 60,
			} ) );
		}
	};
	const run = async ( action ) => {
		setBusy( true );
		setError( '' );
		setMessage( '' );
		try {
			await action();
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
	useEffect( () => {
		refresh().catch( ( failure ) => setError( failure.message ) );
	}, [] );
	useEffect( () => {
		if ( ! job || ! [ 'queued', 'extracting' ].includes( job.state ) ) {
			return undefined;
		}
		let active = true;
		const timer = setInterval( async () => {
			try {
				const next = await api( `exam-imports/${ job.id }` );
				if ( active ) {
					setJob( next );
					if ( next.state === 'ready_for_review' ) {
						setQuestions( next.draft || [] );
						setHeader( ( previous ) => ( {
							...previous,
							title: next.inventory.title,
							duration_minutes:
								next.inventory.duration_minutes || 60,
						} ) );
					}
				}
			} catch ( failure ) {
				if ( active ) {
					setError( failure.message );
				}
			}
		}, 3000 );
		return () => {
			active = false;
			clearInterval( timer );
		};
	}, [ job ] );
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
	const change = ( field, value ) => {
		setQuestions( ( previous ) =>
			previous.map( ( question, index ) =>
				index === selected
					? {
							...question,
							[ field ]: value,
							...( field !== 'reviewed'
								? { reviewed: false }
								: {} ),
						}
					: question
			)
		);
		setDirty( true );
	};
	const changePart = ( index, field, value ) =>
		change(
			'parts',
			questions[ selected ].parts.map( ( part, at ) =>
				at === index ? { ...part, [ field ]: value } : part
			)
		);
	const extract = () =>
		run( async () => {
			const next = await api( `exam-imports/${ job.id }/extract`, {} );
			setJob( next );
		} );
	const field = ( label, name ) => (
		<ExamField>
			{ label }
			<input
				value={ header[ name ] }
				onChange={ ( event ) =>
					setHeader( { ...header, [ name ]: event.target.value } )
				}
			/>
		</ExamField>
	);
	const current = questions[ selected ];
	const source =
		current && job
			? `${ window.location.origin }/?ohmylms_import_source=${ job.id }#page=${ current.page }`
			: '';
	return (
		<section className="ohmylms-exams">
			<h2>{ __( 'Exams', 'ohmylms' ) }</h2>
			<p>
				{ __(
					'Upload an exam paper, review every extracted question, then create an exam using the quiz player.',
					'ohmylms'
				) }
			</p>
			{ error && (
				<Notice status="error" onRemove={ () => setError( '' ) }>
					{ error }
				</Notice>
			) }
			{ message && (
				<Notice status="success" onRemove={ () => setMessage( '' ) }>
					{ message }
				</Notice>
			) }
			{ busy && <Spinner /> }
			<form
				onSubmit={ ( event ) => {
					event.preventDefault();
					run( async () => {
						const body = new FormData();
						body.append( 'file', paper );
						if ( scheme ) {
							body.append( 'mark_scheme', scheme );
						}
						const next = await window.wp.apiFetch( {
							path: '/ohmylms/v1/exam-imports',
							method: 'POST',
							body,
						} );
						await load( next.id );
						await refresh();
					} );
				} }
			>
				<ExamField>
					{ __( 'Question paper PDF', 'ohmylms' ) }
					<input
						type="file"
						accept="application/pdf,.pdf"
						required
						onChange={ ( event ) =>
							setPaper( event.target.files[ 0 ] || null )
						}
					/>
				</ExamField>
				<ExamField>
					{ __( 'Mark scheme PDF (optional)', 'ohmylms' ) }
					<input
						type="file"
						accept="application/pdf,.pdf"
						onChange={ ( event ) =>
							setScheme( event.target.files[ 0 ] || null )
						}
					/>
				</ExamField>
				<Button
					variant="primary"
					type="submit"
					disabled={ busy || dirty || ! paper }
				>
					{ __( 'Upload PDFs', 'ohmylms' ) }
				</Button>
			</form>
			<h3>{ __( 'Your PDF imports', 'ohmylms' ) }</h3>
			<Button
				variant="secondary"
				disabled={ busy }
				onClick={ () => run( refresh ) }
			>
				{ __( 'Refresh imports', 'ohmylms' ) }
			</Button>
			<ul>
				{ jobs.map( ( entry ) => (
					<li key={ entry.id }>
						<Button
							variant="link"
							disabled={ busy || dirty }
							onClick={ () => run( () => load( entry.id ) ) }
						>
							{ entry.source.name }
						</Button>{ ' ' }
						— { states()[ entry.state ] || entry.state }
					</li>
				) ) }
			</ul>
			{ job && (
				<section aria-label={ __( 'Selected PDF import', 'ohmylms' ) }>
					<h3>{ job.source.name }</h3>
					<p role="status">
						{ states()[ job.state ] || job.state }
						{ job.inventory &&
							` · ${ Math.max( 0, job.cursor || 0 ) } / ${ job.inventory.question_numbers.length }` }
					</p>
					{ job.error && (
						<p role="alert">
							{ __(
								'This stage stopped safely. Check the AI connection and source PDFs, then retry.',
								'ohmylms'
							) }{ ' ' }
							({ job.error })
						</p>
					) }
					{ [
						'ready_for_extraction',
						'extraction_failed',
						'extracting',
					].includes( job.state ) && (
						<>
							<p>
								{ __(
									'Extracting sends the uploaded PDFs to your configured AI provider. AI answers, diagrams and skills require your review.',
									'ohmylms'
								) }
							</p>
							<Button
								variant="primary"
								disabled={ busy }
								onClick={ extract }
							>
								{ job.state === 'ready_for_extraction'
									? __( 'Extract all questions', 'ohmylms' )
									: __( 'Resume extraction', 'ohmylms' ) }
							</Button>
						</>
					) }
					{ [ 'queued', 'failed' ].includes( job.state ) && (
						<Button
							variant="secondary"
							disabled={ busy }
							onClick={ () =>
								run( async () => {
									await api( `exam-imports/${ job.id }`, {} );
									await load( job.id );
								} )
							}
						>
							{ __( 'Retry PDF check', 'ohmylms' ) }
						</Button>
					) }
					{ job.usage && (
						<p>
							{ sprintf(
								/* translators: 1: request count, 2: input tokens, 3: output tokens. */
								__(
									'AI requests: %1$d · Input tokens: %2$d · Output tokens: %3$d',
									'ohmylms'
								),
								job.usage.requests || 0,
								job.usage.input_tokens || 0,
								job.usage.output_tokens || 0
							) }
						</p>
					) }
					{ job.state === 'ready_for_review' && current && (
						<>
							{ ! job.has_mark_scheme && (
								<Notice
									status="warning"
									isDismissible={ false }
								>
									{ __(
										'No mark scheme was supplied. Proposed solutions are unverified AI drafts. Check every answer before approval.',
										'ohmylms'
									) }
								</Notice>
							) }
							<div className="ohmylms-exam-review">
								<div>
									<iframe
										title={ __(
											'Original question paper',
											'ohmylms'
										) }
										src={ source }
									/>
									<a
										href={ source }
										target="_blank"
										rel="noreferrer"
									>
										{ __( 'Open source PDF', 'ohmylms' ) }
									</a>
									{ job.has_mark_scheme && (
										<a
											href={ `${ window.location.origin }/?ohmylms_import_source=${ job.id }&mark_scheme=1` }
											target="_blank"
											rel="noreferrer"
										>
											{ __(
												'Open mark scheme',
												'ohmylms'
											) }
										</a>
									) }
								</div>
								<fieldset
									disabled={ busy }
									aria-label={ __(
										'Question review',
										'ohmylms'
									) }
								>
									<ExamField>
										{ __( 'Question', 'ohmylms' ) }
										<select
											value={ selected }
											onChange={ ( event ) =>
												setSelected(
													Number( event.target.value )
												)
											}
										>
											{ questions.map(
												( question, index ) => (
													<option
														key={ question.number }
														value={ index }
													>
														{ question.number }
														{ question.reviewed
															? ' ✓'
															: '' }
													</option>
												)
											) }
										</select>
									</ExamField>
									<ExamField>
										{ __( 'Question stem', 'ohmylms' ) }
										<textarea
											value={ current.question }
											onChange={ ( event ) =>
												change(
													'question',
													event.target.value
												)
											}
										/>
									</ExamField>
									<ExamField>
										{ __(
											'Default skill codes (separate with semicolons)',
											'ohmylms'
										) }
										<input
											value={ current.skills }
											onChange={ ( event ) =>
												change(
													'skills',
													event.target.value
												)
											}
										/>
									</ExamField>
									<p>
										{ __(
											'Each part inherits these skills unless it specifies its own.',
											'ohmylms'
										) }
									</p>
									<SkillSearch
										key={ current.number }
										onPick={ ( token ) =>
											change(
												'skills',
												[ current.skills, token ]
													.filter( Boolean )
													.join( ';' )
											)
										}
									/>
									{ current.requires_source && (
										<p>
											{ __(
												'This question needs its original figure or table. Verify the source page; students can open the private paper during the exam.',
												'ohmylms'
											) }
										</p>
									) }
									{ current.notes && (
										<p>{ current.notes }</p>
									) }
									<ExamField>
										{ __( 'Source PDF page', 'ohmylms' ) }
										<input
											type="number"
											min="1"
											max={
												(
													job.draft_inventory ||
													job.inventory
												).page_count
											}
											value={ current.page }
											onChange={ ( event ) =>
												change(
													'page',
													Number( event.target.value )
												)
											}
										/>
									</ExamField>
									{ current.parts.map( ( part, index ) => (
										<fieldset key={ part.id }>
											<legend>
												{ part.label || part.id }
											</legend>
											<ExamField>
												{ __(
													'Printed part label',
													'ohmylms'
												) }
												<input
													value={ part.label || '' }
													onChange={ ( event ) =>
														changePart(
															index,
															'label',
															event.target.value
														)
													}
												/>
											</ExamField>
											<ExamField>
												{ __(
													'Part prompt',
													'ohmylms'
												) }
												<textarea
													value={ part.prompt || '' }
													onChange={ ( event ) =>
														changePart(
															index,
															'prompt',
															event.target.value
														)
													}
												/>
											</ExamField>
											<ExamField>
												{ __(
													'Answer type',
													'ohmylms'
												) }
												<select
													value={ part.kind }
													onChange={ ( event ) =>
														changePart(
															index,
															'kind',
															event.target.value
														)
													}
												>
													<option value="written">
														{ __(
															'Written / teacher marked',
															'ohmylms'
														) }
													</option>
													<option value="numerical">
														{ __(
															'Number',
															'ohmylms'
														) }
													</option>
													<option value="text">
														{ __(
															'Exact text',
															'ohmylms'
														) }
													</option>
												</select>
											</ExamField>
											<ExamField>
												{ __( 'Marks', 'ohmylms' ) }
												<input
													type="number"
													min="0"
													max="1000"
													step="0.25"
													value={ part.marks }
													onChange={ ( event ) =>
														changePart(
															index,
															'marks',
															Number(
																event.target
																	.value
															)
														)
													}
												/>
											</ExamField>
											{ part.kind === 'numerical' && (
												<>
													<ExamField>
														{ __(
															'Expected number',
															'ohmylms'
														) }
														<input
															type="number"
															step="any"
															value={
																part.answer ??
																''
															}
															onChange={ (
																event
															) =>
																changePart(
																	index,
																	'answer',
																	event.target
																		.value ===
																		''
																		? ''
																		: Number(
																				event
																					.target
																					.value
																			)
																)
															}
														/>
													</ExamField>
													<ExamField>
														{ __(
															'Tolerance',
															'ohmylms'
														) }
														<input
															type="number"
															min="0"
															step="any"
															value={
																part.tolerance ||
																0
															}
															onChange={ (
																event
															) =>
																changePart(
																	index,
																	'tolerance',
																	Number(
																		event
																			.target
																			.value
																	)
																)
															}
														/>
													</ExamField>
												</>
											) }
											{ part.kind === 'text' && (
												<ExamField>
													{ __(
														'Accepted answers (one per line)',
														'ohmylms'
													) }
													<textarea
														value={ (
															part.accepted || []
														).join( '\n' ) }
														onChange={ ( event ) =>
															changePart(
																index,
																'accepted',
																event.target.value.split(
																	'\n'
																)
															)
														}
													/>
												</ExamField>
											) }
											<ExamField>
												{ __(
													'Part skill codes (optional override)',
													'ohmylms'
												) }
												<input
													value={ part.skills || '' }
													onChange={ ( event ) =>
														changePart(
															index,
															'skills',
															event.target.value
														)
													}
												/>
											</ExamField>
											<ExamField>
												{ __(
													'Teacher marking notes',
													'ohmylms'
												) }
												<textarea
													value={ part.rubric || '' }
													onChange={ ( event ) =>
														changePart(
															index,
															'rubric',
															event.target.value
														)
													}
												/>
											</ExamField>
											<Button
												variant="secondary"
												disabled={
													current.parts.length <= 1
												}
												onClick={ () =>
													change(
														'parts',
														current.parts.filter(
															( value, at ) =>
																at !== index
														)
													)
												}
											>
												{ __(
													'Remove part',
													'ohmylms'
												) }
											</Button>
										</fieldset>
									) ) }
									<Button
										variant="secondary"
										disabled={ current.parts.length >= 50 }
										onClick={ () => {
											let partNumber = 1;
											while (
												current.parts.some(
													( part ) =>
														part.id ===
														`p${ partNumber }`
												)
											) {
												partNumber++;
											}
											change( 'parts', [
												...current.parts,
												{
													id: `p${ partNumber }`,
													label: '',
													kind: 'written',
													prompt: '',
													marks: 1,
													rubric: '',
													skills: '',
												},
											] );
										} }
									>
										{ __( 'Add missing part', 'ohmylms' ) }
									</Button>
									<ExamField>
										<input
											type="checkbox"
											checked={ current.reviewed }
											onChange={ ( event ) =>
												change(
													'reviewed',
													event.target.checked
												)
											}
										/>
										{ __(
											'I checked this question, its parts, marks, answers, skills and source figures.',
											'ohmylms'
										) }
									</ExamField>
								</fieldset>
							</div>
							<p>
								{ sprintf(
									/* translators: 1: reviewed part mark total, 2: total printed in the PDF inventory. */ __(
										'Part marks: %1$s · Paper total: %2$s',
										'ohmylms'
									),
									questions.reduce(
										( sum, question ) =>
											sum +
											question.parts.reduce(
												( marks, part ) =>
													marks +
													Number( part.marks || 0 ),
												0
											),
										0
									),
									( job.draft_inventory || job.inventory )
										.total_marks
								) }
							</p>
							<p>
								{ sprintf(
									/* translators: 1: reviewed question count, 2: total questions. */
									__(
										'%1$d of %2$d questions reviewed',
										'ohmylms'
									),
									questions.filter(
										( question ) => question.reviewed
									).length,
									questions.length
								) }
							</p>
							<Button
								variant="secondary"
								disabled={ busy }
								onClick={ () =>
									run( async () => {
										const next = await api(
											`exam-imports/${ job.id }/review`,
											{
												questions,
												revision: job.draft_revision,
											}
										);
										setJob( next );
										setQuestions( next.draft );
										setDirty( false );
										setMessage(
											__( 'Review saved.', 'ohmylms' )
										);
									} )
								}
							>
								{ __( 'Save review', 'ohmylms' ) }
							</Button>
							<Button
								variant="primary"
								disabled={
									busy ||
									dirty ||
									questions.some(
										( question ) => ! question.reviewed
									)
								}
								onClick={ () =>
									run( async () => {
										await api(
											`exam-imports/${ job.id }/commit`,
											{ revision: job.draft_revision }
										);
										await load( job.id );
										await refresh();
									} )
								}
							>
								{ __( 'Commit question drafts', 'ohmylms' ) }
							</Button>
						</>
					) }
					{ job.state === 'committed' && (
						<>
							<p>
								{ __(
									'Questions are saved as bank drafts. Approval and exam publication are separate actions.',
									'ohmylms'
								) }
							</p>
							<Button
								variant="secondary"
								disabled={ busy }
								onClick={ () =>
									run( async () => {
										for ( const id of job.question_ids ) {
											await approveQuestion(
												id,
												job.version_ids?.[ id ]
											);
										}
										setMessage(
											__(
												'Question versions approved.',
												'ohmylms'
											)
										);
									} )
								}
							>
								{ __( 'Approve question versions', 'ohmylms' ) }
							</Button>
							{ ! job.exam_id && (
								<form
									onSubmit={ ( event ) => {
										event.preventDefault();
										run( async () => {
											await api( 'exams', {
												job_id: job.id,
												...header,
											} );
											await load( job.id );
											await refresh();
										} );
									} }
								>
									<h3>{ __( 'Exam details', 'ohmylms' ) }</h3>
									{ field(
										__( 'Exam title', 'ohmylms' ),
										'title'
									) }
									<ExamField>
										{ __(
											'Duration (minutes)',
											'ohmylms'
										) }
										<input
											type="number"
											min="1"
											max="1440"
											required
											value={ header.duration_minutes }
											onChange={ ( event ) =>
												setHeader( {
													...header,
													duration_minutes: Number(
														event.target.value
													),
												} )
											}
										/>
									</ExamField>
									{ field(
										__( 'Board', 'ohmylms' ),
										'board'
									) }
									{ field(
										__( 'Qualification', 'ohmylms' ),
										'qualification'
									) }
									{ field(
										__( 'Subject code', 'ohmylms' ),
										'subject_code'
									) }
									{ field(
										__( 'Paper', 'ohmylms' ),
										'paper'
									) }
									{ field(
										__( 'Variant', 'ohmylms' ),
										'variant'
									) }
									{ field(
										__( 'Session', 'ohmylms' ),
										'session'
									) }
									{ field(
										__( 'Calculator rule', 'ohmylms' ),
										'calculator'
									) }
									{ field(
										__( 'Instructions', 'ohmylms' ),
										'instructions'
									) }
									<Button
										variant="primary"
										type="submit"
										disabled={ busy }
									>
										{ __( 'Create draft exam', 'ohmylms' ) }
									</Button>
								</form>
							) }
						</>
					) }
				</section>
			) }
			<h3>{ __( 'Your exams', 'ohmylms' ) }</h3>
			<ul>
				{ exams.map( ( exam ) => (
					<li key={ exam.id }>
						<strong>{ exam.title }</strong> —{ ' ' }
						{ exam.status === 'publish'
							? __( 'Published', 'ohmylms' )
							: __( 'Draft', 'ohmylms' ) }{ ' ' }
						· { exam.question_ids.length }{ ' ' }
						{ __( 'questions', 'ohmylms' ) } · { exam.total_marks }{ ' ' }
						{ __( 'marks', 'ohmylms' ) }
						{ exam.preview_url && (
							<a
								href={ exam.preview_url }
								target="_blank"
								rel="noreferrer"
							>
								{ __( 'Preview exam', 'ohmylms' ) }
							</a>
						) }
						{ exam.status === 'draft' ? (
							<Button
								variant="primary"
								disabled={ busy }
								onClick={ () =>
									run( async () => {
										await api(
											`exams/${ exam.id }/publish`,
											{}
										);
										await refresh();
									} )
								}
							>
								{ __( 'Publish exam', 'ohmylms' ) }
							</Button>
						) : (
							<>
								<a
									href={ exam.url }
									target="_blank"
									rel="noreferrer"
								>
									{ __( 'Open exam player', 'ohmylms' ) }
								</a>
								<Button
									variant="secondary"
									disabled={ busy || exam.released }
									onClick={ () =>
										run( async () => {
											await api(
												`exams/${ exam.id }/release`,
												{}
											);
											await refresh();
										} )
									}
								>
									{ exam.released
										? __( 'Results released', 'ohmylms' )
										: __(
												'Release results and mark scheme',
												'ohmylms'
											) }
								</Button>
							</>
						) }
						<a href={ `#/quiz-report/${ exam.quiz_id }` }>
							{ __( 'Teacher marking and reports', 'ohmylms' ) }
						</a>
						<p>
							{ __(
								'Embed in a lesson or WordPress page:',
								'ohmylms'
							) }{ ' ' }
							<code>{ `[ohmylms_exam exam="${ exam.id }"]` }</code>
						</p>
					</li>
				) ) }
			</ul>
		</section>
	);
}
