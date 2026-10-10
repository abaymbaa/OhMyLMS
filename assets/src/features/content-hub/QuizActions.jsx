import { createElement, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, Modal, Notice, TextControl } from '@wordpress/components';
import { createContent, editPath, importQuiz } from './api.mjs';

const TEMPLATE = [
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
 * Import button with its dialog: a CSV file becomes a draft quiz with questions.
 */
export function QuizImportButton() {
	const [ open, setOpen ] = useState( false );
	const [ busy, setBusy ] = useState( false );
	const [ error, setError ] = useState( '' );
	const [ name, setName ] = useState( '' );
	const [ file, setFile ] = useState( null );

	const close = () => {
		setOpen( false );
		setName( '' );
		setFile( null );
		setError( '' );
	};

	const submit = async () => {
		setBusy( true );
		setError( '' );
		try {
			const csv = await file.text();
			const quiz = await importQuiz(
				name.trim() || file.name.replace( /\.[^.]+$/, '' ),
				csv
			);
			openEditor( quiz.id );
		} catch ( e ) {
			setError(
				e?.message || __( 'Something went wrong.', 'ohmylms' )
			);
			setBusy( false );
		}
	};

	const downloadTemplate = () => {
		const url = URL.createObjectURL(
			new Blob( [ TEMPLATE ], { type: 'text/csv' } )
		);
		const link = document.createElement( 'a' );
		link.href = url;
		link.download = 'quiz-template.csv';
		link.click();
		URL.revokeObjectURL( url );
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
					<p>
						{ __(
							'Choose a CSV file with one question per row. A draft quiz is created with those questions.',
							'ohmylms'
						) }
					</p>
					<p>
						{ __(
							'Columns: type, question, points, correct, option_1 … option_6. Types: single-choice, multiple-choice, true-false, short-text, long-text. "correct" is the option number (1|3 for several) or true / false.',
							'ohmylms'
						) }{ ' ' }
						<Button variant="link" onClick={ downloadTemplate }>
							{ __( 'Download a template', 'ohmylms' ) }
						</Button>
					</p>
					<input
						type="file"
						accept=".csv,text/csv"
						onChange={ ( event ) =>
							setFile( event.target.files?.[ 0 ] || null )
						}
					/>
					<TextControl
						label={ __( 'Quiz name', 'ohmylms' ) }
						help={ __(
							'Leave empty to use the file name.',
							'ohmylms'
						) }
						value={ name }
						onChange={ setName }
					/>
					{ error && (
						<Notice status="error" isDismissible={ false }>
							{ error }
						</Notice>
					) }
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
							disabled={ busy || ! file }
						>
							{ __( 'Import', 'ohmylms' ) }
						</Button>
					</div>
				</Modal>
			) }
		</>
	);
}
