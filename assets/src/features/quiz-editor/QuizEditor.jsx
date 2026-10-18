import {
	createElement,
	Fragment,
	useEffect,
	useState,
} from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { Tooltip } from '@wordpress/components';
import { useQuizEditor } from './useQuizEditor';
import { loadQuiz } from './api.mjs';
import { BankPicker } from '../question-bank/BankPicker';
import { QuestionVersionBar } from '../question-bank/QuestionVersionBar';
import { PracticeFeedbackFields } from '../question-editor/MathEditors';
import { FormWorkspace } from '../question-editor/FormWorkspace';
import { QuizQuestionCards } from './QuizQuestionCards';
import { QuestionSkills, useSkillList } from './QuizSkills';
import { QuizSkillsTab } from './QuizSkillsTab';
import { ExportIcon, useExportQuiz } from '../content-hub/QuizActions';
import { BankIcon } from './QuizHeaderIcons';

/**
 * Named React editor; the bridge retains existing controls, routes and store.
 * @param readRuntime
 */
export function createQuizEditor( readRuntime ) {
	function registerTypes() {
		const r = readRuntime();
		[ r.Gs, r.Qs, r.nd, r.yd, r.Rd, r.Od, r.zd ].forEach( r.bm );
		[ r.rm, r.ym ].forEach( r._m );
		window.ohmylms.extensions.questionTypes( r.T.default ).forEach( r.bm );
	}
	return function QuizEditor( {
		chapterId,
		isSettingsOpen,
		setIsSettingsOpen,
	} ) {
		const runtime = readRuntime();
		const {
			D: { A: Button },
			Wr: PageHeader,
			Nu: QuestionCanvas,
			_s: QuestionSettings,
			np: QuizSettings,
			_: { A: Skeleton },
			Br: PreviewIcon,
			za: ResultIcon,
			Rt: SettingsIcon,
		} = runtime;
		const route = runtime.f.g();
		const navigate = runtime.f.Zp();
		const { contextHolder, openNotificationWithIcon } = runtime.z.A();
		const [ , setHovered ] = useState( false );
		const [ pickerOpen, setPickerOpen ] = useState( false );
		const [ view, setView ] = useState( 'questions' );
		const skills = useSkillList();
		const quizExport = useExportQuiz( openNotificationWithIcon );
		useEffect( () => {
			if ( isSettingsOpen ) {
				setView( 'quiz' );
				setIsSettingsOpen?.( false );
			}
		}, [ isSettingsOpen ] );
		const editor = useQuizEditor( {
			store: runtime.T.default,
			chapterId,
			validate: runtime.Ec.$,
			registerTypes,
		} );
		useEffect( () => {
			if ( ! editor.loading && editor.notice ) {
				openNotificationWithIcon( editor.noticeStatus, editor.notice );
			}
		}, [ editor.notice ] );
		function openSettings() {
			setView( 'quiz' );
		}
		/** The file holds the saved quiz, so save first (as Publish does) and export only if that worked. */
		async function handleExport() {
			if ( ! editor.quiz?.id || ! ( await editor.save() ) ) {
				return;
			}
			await quizExport.exportQuiz( editor.quiz.id );
		}
		async function handleDuplicated( copy, originalId ) {
			const fresh = await loadQuiz( editor.quiz.id );
			const entry = ( fresh.content || [] ).find(
				( question ) => Number( question.id ) === Number( copy.id )
			);
			if ( entry ) {
				editor.replaceQuestion( originalId, entry );
			}
		}
		const readonly = !! editor.question?.readonly;
		return (
			<Fragment>
				{ ! chapterId && contextHolder }
				{ ! chapterId && (
					<PageHeader
						title={ __( 'Quiz editor', 'ohmylms' ) }
						redirection="/content-hub/quizzes"
						className="ohmylms-quiz-header"
						rightContent={
							<Fragment>
								<Tooltip text={ __( 'Result', 'ohmylms' ) }>
									<Button
										variant="secondary"
										onClick={ () =>
											navigate(
												`/quiz-report/${ route.id }`
											)
										}
										icon={ <ResultIcon /> }
										aria-label={ __( 'Result', 'ohmylms' ) }
									/>
								</Tooltip>
								<Tooltip
									text={ __(
										'Preview saved quiz',
										'ohmylms'
									) }
								>
									<Button
										variant="secondary"
										onClick={ () =>
											window.open(
												editor.quiz.preview_url,
												'_blank'
											)
										}
										disabled={
											editor.loading ||
											! editor.quiz?.preview_url
										}
										icon={ <PreviewIcon /> }
										aria-label={ __(
											'Preview saved quiz',
											'ohmylms'
										) }
									/>
								</Tooltip>
								<Tooltip
									text={ __(
										'Export quiz (saves, then downloads a file)',
										'ohmylms'
									) }
								>
									<Button
										variant="secondary"
										onClick={ handleExport }
										isBusy={ quizExport.busyId > 0 }
										disabled={
											editor.loading ||
											editor.saving ||
											quizExport.busyId > 0 ||
											! editor.quiz?.id
										}
										icon={ <ExportIcon /> }
										aria-label={ __(
											'Export quiz',
											'ohmylms'
										) }
									/>
								</Tooltip>
								<Tooltip
									text={ __( 'Add from bank', 'ohmylms' ) }
								>
									<Button
										variant="secondary"
										onClick={ () => setPickerOpen( true ) }
										disabled={ ! editor.quiz?.id }
										icon={ <BankIcon /> }
										aria-label={ __(
											'Add from bank',
											'ohmylms'
										) }
									/>
								</Tooltip>
								<Button
									variant="primary"
									onClick={ editor.save }
									isBusy={ editor.saving }
								>
									{ __( 'Save', 'ohmylms' ) }
								</Button>
								<Button
									variant="secondary"
									onClick={ editor.publish }
									disabled={ editor.saving }
								>
									{ __( 'Publish', 'ohmylms' ) }
								</Button>
								<Button
									variant="tertiary"
									onClick={ openSettings }
									icon={ <SettingsIcon /> }
									className="ohmylms-quize-settings-btn"
									aria-label={ __(
										'Quiz settings',
										'ohmylms'
									) }
								/>
							</Fragment>
						}
					/>
				) }
				{ editor.error && <p role="alert">{ editor.error }</p> }
				<div
					className="ohmylms-assessment-editor-tabs"
					role="tablist"
					aria-label={ __( 'Quiz editor sections', 'ohmylms' ) }
				>
					<Button
						role="tab"
						aria-selected={ view === 'quiz' }
						onClick={ openSettings }
					>
						{ __( 'Quiz introduction', 'ohmylms' ) }
					</Button>
					<Button
						role="tab"
						aria-selected={ view === 'questions' }
						onClick={ () => setView( 'questions' ) }
					>
						{ __( 'Questions', 'ohmylms' ) }
					</Button>
					<Button
						disabled={ ! editor.quiz?.native_editor_url }
						onClick={ () =>
							window.location.assign(
								editor.quiz.native_editor_url
							)
						}
					>
						{ __( 'Open Gutenberg editor', 'ohmylms' ) }
					</Button>
					<Button
						role="tab"
						aria-selected={ view === 'skills' }
						onClick={ () => setView( 'skills' ) }
					>
						{ __( 'Skills', 'ohmylms' ) }
					</Button>
				</div>
				{ editor.loading ? (
					<Skeleton
						active
						paragraph={ {
							rows: 5,
						} }
					/>
				) : (
					( () => {
						if ( view === 'skills' ) {
							return (
								<QuizSkillsTab
									editor={ editor }
									skills={ skills }
								/>
							);
						}
						if ( view === 'quiz' ) {
							return (
								<FormWorkspace
									key={ 'quiz-' + editor.quiz?.id }
									document={ editor.quiz || {} }
									label={ __( 'Quiz', 'ohmylms' ) }
									titleLabel={ __( 'Quiz title', 'ohmylms' ) }
									titlePlaceholder={ __(
										'Enter Quiz Title',
										'ohmylms'
									) }
									workspaceLabel={ __(
										'Quiz form editor',
										'ohmylms'
									) }
									onTitleChange={ ( name ) =>
										editor.updateField( 'name', name )
									}
									onContentChange={ ( description ) =>
										editor.updateField(
											'description',
											description
										)
									}
									toolbarActions={
										<Button
											variant="primary"
											isBusy={ editor.saving }
											onClick={ editor.save }
										>
											{ __( 'Save', 'ohmylms' ) }
										</Button>
									}
									settings={
										<Fragment>
											<QuizSettings
												embedded
												setIsSettingsOpen={ () =>
													setView( 'questions' )
												}
												chapterId={ chapterId }
											/>
											{ window.ohmylms.extensions.renderSlot(
												'/quiz-edit/:id',
												{
													id: route.id,
													route: '/quiz-edit/:id',
													hash: window.location.hash,
												},
												'editor-panel'
											) }
										</Fragment>
									}
								/>
							);
						}
						return (
							<QuizQuestionCards
								editor={ editor }
								skills={ skills }
								onBank={ () => setPickerOpen( true ) }
							>
								{ ! chapterId && (
									<QuestionVersionBar
										question={ editor.question }
										quizId={ editor.quiz?.id }
										onDuplicated={ handleDuplicated }
										onPinned={ ( versionId ) =>
											editor.patchQuestion(
												editor.question.id,
												{
													pinned_version_id:
														versionId,
												}
											)
										}
									/>
								) }
								<QuestionCanvas
									chapterId={ chapterId }
									formCard
									extraSettings={
										! chapterId && (
											<QuestionSkills
												question={ editor.question }
												skills={ skills }
												onChange={
													editor.patchQuestion
												}
											/>
										)
									}
									setHovered={ setHovered }
									toolbarLeading={
										<span className="ohmylms-question-toolbar-label">
											{ sprintf(
												/* translators: %d: question number. */ __(
													'Question %d',
													'ohmylms'
												),
												editor.questions.findIndex(
													( question ) =>
														question.id ===
														editor.question?.id
												) + 1
											) }
										</span>
									}
									toolbarActions={
										<span
											className="ohmylms-question-autosave"
											role="status"
										>
											{ editor.autosaveStatus }
										</span>
									}
									settings={
										<fieldset
											disabled={ readonly }
											className="ohmylms-question-fieldset"
										>
											{ editor.question?.settings
												?.type ? (
												<QuestionSettings
													chapterId={ chapterId }
													setHovered={ setHovered }
												/>
											) : (
												<p>
													{ __(
														'Use Add block to choose a question type.',
														'ohmylms'
													) }
												</p>
											) }
											{ ! chapterId && (
												<PracticeFeedbackFields
													question={ editor.question }
													onChange={ ( fields ) =>
														! readonly &&
														editor.patchQuestion(
															editor.question.id,
															fields
														)
													}
												/>
											) }
										</fieldset>
									}
								/>
							</QuizQuestionCards>
						);
					} )()
				) }
				{ pickerOpen && (
					<BankPicker
						quizId={ editor.quiz.id }
						existingIds={ editor.questions.map(
							( question ) => question.id
						) }
						onAdded={ editor.appendQuestions }
						onClose={ () => setPickerOpen( false ) }
					/>
				) }
			</Fragment>
		);
	};
}
