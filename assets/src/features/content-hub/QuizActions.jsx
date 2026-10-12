import { createElement, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import {
	Button,
	Modal,
	Notice,
	Spinner,
	TextControl,
} from '@wordpress/components';
import { createContent, editPath, exportQuiz, importQuiz } from './api.mjs';
import {
	IMPORT_ACCEPT,
	downloadText,
	exampleFile,
	problemLines,
	typeCounts,
} from './quizExchange.mjs';

const CSV_TEMPLATE = [
	'type,question,points,correct,option_1,option_2,option_3,option_4',
	'single-choice,What is 2 + 2?,1,2,3,4,5,6',
	'multiple-choice,Which numbers are even?,2,1|3,2,3,4,5',
	'true-false,The sum of two odd numbers is even.,1,true,,,,',
	'short-text,Name a prime number.,1,,,,,',
].join( '\n' );

const openEditor = ( id ) => {
	window.location.hash = `#${ editPath( 'quiz', id ) }`;
};

// Same tray icon the Courses tab uses on its Import button.
const ImportIcon = () => (
	<svg
		fill="none"
		width="22"
		height="22"
		viewBox="0 0 22 22"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill="currentColor"
			d="M11.918 4.583a.917.917 0 00-1.833 0v7.413l-2.56-2.56a.917.917 0 00-1.297 1.296l3.477 3.477a1.833 1.833 0 002.593 0l3.475-3.476a.917.917 0 10-1.296-1.296l-2.559 2.559V4.582z"
		/>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M3.667 12.834c.506 0 .916.41.916.916v1.834c0 .506.41.916.917.916h11c.506 0 .917-.41.917-.916V13.75a.917.917 0 111.833 0v1.834a2.75 2.75 0 01-2.75 2.75h-11a2.75 2.75 0 01-2.75-2.75V13.75c0-.506.41-.916.917-.916z"
			clipRule="evenodd"
		/>
	</svg>
);

// The import tray with its arrow turned around.
export const ExportIcon = () => (
	<svg
		fill="none"
		width="22"
		height="22"
		viewBox="0 0 22 22"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill="currentColor"
			transform="matrix(1 0 0 -1 0 18.4)"
			d="M11.918 4.583a.917.917 0 00-1.833 0v7.413l-2.56-2.56a.917.917 0 00-1.297 1.296l3.477 3.477a1.833 1.833 0 002.593 0l3.475-3.476a.917.917 0 10-1.296-1.296l-2.559 2.559V4.582z"
		/>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M3.667 12.834c.506 0 .916.41.916.916v1.834c0 .506.41.916.917.916h11c.506 0 .917-.41.917-.916V13.75a.917.917 0 111.833 0v1.834a2.75 2.75 0 01-2.75 2.75h-11a2.75 2.75 0 01-2.75-2.75V13.75c0-.506.41-.916.917-.916z"
			clipRule="evenodd"
		/>
	</svg>
);

/**
 * Create an empty draft quiz and open its editor. For the title row's add-button config.
 */
export function useAddQuiz() {
	const [ loading, setLoading ] = useState( false );
	const onClick = async () => {
		setLoading( true );
		try {
			const quiz = await createContent(
				'quiz',
				__( 'Untitled quiz', 'ohmylms' )
			);
			openEditor( quiz.id );
		} catch ( e ) {
			setLoading( false );
			// eslint-disable-next-line no-alert
			window.alert(
				e?.message || __( 'The quiz could not be created.', 'ohmylms' )
			);
		}
	};
	return { label: __( 'Add Quiz', 'ohmylms' ), onClick, loading };
}

/**
 * Download a quiz and all of its questions as an OhMyLMS quiz file.
 *
 * @param {(status: string, message: string) => void} notify The list's notification helper.
 * @return {{busyId: number, exportQuiz: (id: number) => Promise<void>}} The quiz being exported, and the action.
 */
export function useExportQuiz( notify ) {
	const [ busyId, setBusyId ] = useState( 0 );
	return {
		busyId,
		exportQuiz: async ( id ) => {
			setBusyId( id );
			try {
				const file = await exportQuiz( id );
				downloadText( file.filename, file.mime, file.content );
				const unfinished = new Set(
					( file.warnings || [] ).map(
						( warning ) => warning.question
					)
				).size;
				const count = file.summary?.questions || 0;
				notify(
					unfinished ? 'warning' : 'success',
					unfinished
						? sprintf(
								/* translators: %d: number of questions */
								_n(
									'Exported, but %d question is unfinished. The file will be refused on import until it is finished.',
									'Exported, but %d questions are unfinished. The file will be refused on import until they are finished.',
									unfinished,
									'ohmylms'
								),
								unfinished
							)
						: sprintf(
								/* translators: %d: number of questions */
								_n(
									'Exported %d question.',
									'Exported %d questions.',
									count,
									'ohmylms'
								),
								count
							)
				);
			} catch ( e ) {
				notify(
					'error',
					e?.message ||
						__( 'The quiz could not be exported.', 'ohmylms' )
				);
			}
			setBusyId( 0 );
		},
	};
}

/**
 * What a checked file holds: counts, the question types, and anything worth a second look.
 *
 * @param {Object} props
 * @param {Object} props.preview Dry-run response.
 */
function ImportPreview( { preview } ) {
	const { summary, warnings } = preview;
	const types = typeCounts( summary );
	return (
		<div className="ohmylms-import-preview">
			<p className="ohmylms-import-preview__headline">
				{ sprintf(
					/* translators: 1: number of questions, 2: total points */
					_n(
						'%1$d question, %2$s points',
						'%1$d questions, %2$s points',
						summary.questions,
						'ohmylms'
					),
					summary.questions,
					String( summary.points )
				) }
				{ summary.randomized > 0 &&
					sprintf(
						/* translators: %d: number of randomized questions */
						__( ', %d with randomized numbers', 'ohmylms' ),
						summary.randomized
					) }
			</p>
			<div className="ohmylms-quiz-skills">
				{ types.map( ( row ) => (
					<span className="ohmylms-quiz-skill-chip" key={ row.type }>
						{ row.label } × { row.count }
					</span>
				) ) }
			</div>
			{ preview.renamed && (
				<p>
					{ sprintf(
						/* translators: %s: new quiz name */
						__(
							'A quiz with this name exists, so the copy will be called "%s".',
							'ohmylms'
						),
						preview.name
					) }
				</p>
			) }
			{ warnings?.length > 0 && (
				<Notice status="warning" isDismissible={ false }>
					<ul className="ohmylms-import-list">
						{ warnings.map( ( warning ) => (
							<li key={ warning }>{ warning }</li>
						) ) }
					</ul>
				</Notice>
			) }
		</div>
	);
}

/**
 * Import button with its dialog.
 *
 * Choosing a file checks it straight away (a dry run) and shows what it holds, or every problem
 * with its question number. Nothing is created until the file is clean and Import is pressed, and
 * the result is always a new draft quiz.
 */
export function QuizImportButton() {
	const [ open, setOpen ] = useState( false );
	const [ checking, setChecking ] = useState( false );
	const [ busy, setBusy ] = useState( false );
	const [ problems, setProblems ] = useState( [] );
	const [ name, setName ] = useState( '' );
	const [ text, setText ] = useState( '' );
	const [ fileName, setFileName ] = useState( '' );
	const [ preview, setPreview ] = useState( null );
	const [ result, setResult ] = useState( null );

	const close = () => {
		setOpen( false );
		setName( '' );
		setText( '' );
		setFileName( '' );
		setPreview( null );
		setProblems( [] );
		setResult( null );
	};

	const choose = async ( file ) => {
		setPreview( null );
		setProblems( [] );
		setText( '' );
		setFileName( file ? file.name : '' );
		if ( ! file ) {
			return;
		}
		setChecking( true );
		try {
			const content = await file.text();
			setText( content );
			setPreview(
				await importQuiz( '', content, undefined, { dryRun: true } )
			);
		} catch ( e ) {
			setProblems(
				problemLines( e ).length
					? problemLines( e )
					: [ __( 'Something went wrong.', 'ohmylms' ) ]
			);
		}
		setChecking( false );
	};

	const submit = async () => {
		setBusy( true );
		setProblems( [] );
		try {
			const quiz = await importQuiz( name.trim(), text );
			if ( quiz.warnings?.length ) {
				setResult( quiz );
			} else {
				openEditor( quiz.id );
			}
		} catch ( e ) {
			setProblems( problemLines( e ) );
		}
		setBusy( false );
	};

	return (
		<>
			<Button
				variant="secondary"
				className="is-secondary"
				icon={ <ImportIcon /> }
				onClick={ () => setOpen( true ) }
				style={ { cursor: 'pointer' } }
			>
				{ __( 'Import', 'ohmylms' ) }
			</Button>
			{ open && (
				<Modal
					title={ __( 'Import quiz', 'ohmylms' ) }
					onRequestClose={ busy ? () => {} : close }
				>
					{ result ? (
						<>
							<p>
								{ sprintf(
									/* translators: 1: quiz name, 2: number of questions */
									_n(
										'"%1$s" was imported as a draft with %2$d question.',
										'"%1$s" was imported as a draft with %2$d questions.',
										result.summary.questions,
										'ohmylms'
									),
									result.name,
									result.summary.questions
								) }
							</p>
							<Notice status="warning" isDismissible={ false }>
								<ul className="ohmylms-import-list">
									{ result.warnings.map( ( warning ) => (
										<li key={ warning }>{ warning }</li>
									) ) }
								</ul>
							</Notice>
							<div className="ohmylms-content-hub-actions">
								<Button
									variant="primary"
									onClick={ () => openEditor( result.id ) }
								>
									{ __( 'Open quiz', 'ohmylms' ) }
								</Button>
							</div>
						</>
					) : (
						<>
							<p>
								{ __(
									'Choose an OhMyLMS quiz file (.json), made with Export on a quiz. A new draft quiz is created with all of its questions, answers, settings, randomized numbers, skills and images. Nothing existing is changed.',
									'ohmylms'
								) }
							</p>
							<p>
								<Button
									variant="link"
									onClick={ () =>
										downloadText(
											'example.ohmylms.json',
											'application/json',
											exampleFile()
										)
									}
								>
									{ __(
										'Download an example file',
										'ohmylms'
									) }
								</Button>
								{ ' · ' }
								<Button
									variant="link"
									onClick={ () =>
										downloadText(
											'quiz-template.csv',
											'text/csv',
											CSV_TEMPLATE
										)
									}
								>
									{ __(
										'Simple CSV template (choice, true/false and text questions only)',
										'ohmylms'
									) }
								</Button>
							</p>
							<input
								type="file"
								accept={ IMPORT_ACCEPT }
								onChange={ ( event ) =>
									choose( event.target.files?.[ 0 ] || null )
								}
							/>
							{ checking && (
								<p>
									<Spinner />{ ' ' }
									{ __( 'Checking the file…', 'ohmylms' ) }
								</p>
							) }
							{ problems.length > 0 && (
								<Notice status="error" isDismissible={ false }>
									<strong>
										{ __(
											'Nothing was imported. Fix the file and choose it again:',
											'ohmylms'
										) }
									</strong>
									<ul className="ohmylms-import-list">
										{ problems.map( ( problem ) => (
											<li key={ problem }>{ problem }</li>
										) ) }
									</ul>
								</Notice>
							) }
							{ preview && <ImportPreview preview={ preview } /> }
							<TextControl
								label={ __( 'Quiz name', 'ohmylms' ) }
								help={ __(
									'Leave empty to use the name in the file.',
									'ohmylms'
								) }
								placeholder={
									preview?.name ||
									fileName.replace( /\.[^.]+$/, '' )
								}
								value={ name }
								onChange={ setName }
							/>
							<div className="ohmylms-content-hub-actions">
								<Button
									variant="tertiary"
									onClick={ close }
									disabled={ busy }
								>
									{ __( 'Cancel', 'ohmylms' ) }
								</Button>
								<Button
									variant="primary"
									onClick={ submit }
									isBusy={ busy }
									disabled={ busy || checking || ! preview }
								>
									{ __( 'Import', 'ohmylms' ) }
								</Button>
							</div>
						</>
					) }
				</Modal>
			) }
		</>
	);
}
