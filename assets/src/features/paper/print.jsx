/** @jsx createElement */
import { createElement, createRoot, RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { loadMath, mathEnabled } from '../math/loader.mjs';
import { questionPrompt } from '../question-editor/questionPrompt.mjs';
import { PaperQuestion } from './PaperQuestion';
import { paperSettings, questionLabels } from './paperModel.mjs';

/**
 * The printed exam: core blocks and questions in document order, with the shared renderers.
 *
 * @param {Object} props      Properties.
 * @param {Object} props.data Print page data from OhMyLMS\Exams\PrintPaper.
 * @return {Element} Paper.
 */
function PrintedPaper( { data } ) {
	const settings = paperSettings( data.settings );
	const showAnswers = data.variant === 'key';
	const questions = data.items.filter( ( item ) => item.kind === 'question' );
	const labels = questionLabels(
		questions.map( ( item ) => item.question.settings?.type || '' ),
		settings
	);
	let position = 0;
	return (
		<>
			{ showAnswers && (
				<p className="ohmylms-print-key-banner">
					{ __( 'Answer key', 'ohmylms' ) }
				</p>
			) }
			{ ! data.items.length && (
				<p>{ __( 'This exam has no questions yet.', 'ohmylms' ) }</p>
			) }
			{ data.items.map( ( item, index ) => {
				if ( item.kind === 'html' ) {
					return (
						<div className="ohmylms-print-block" key={ index }>
							<RawHTML>{ item.html }</RawHTML>
						</div>
					);
				}
				const label = labels[ position++ ];
				return (
					<div className="ohmylms-print-block" key={ index }>
						<PaperQuestion
							question={ item.question }
							prompt={ questionPrompt( item.question ) }
							label={ label }
							settings={ settings }
							showAnswers={ showAnswers }
						/>
					</div>
				);
			} ) }
		</>
	);
}

/**
 * Resolve once math, fonts and images have settled, so the print matches the screen.
 *
 * @param {Element} root Paper root.
 * @return {Promise<void>} Settled.
 */
async function settled( root ) {
	if ( mathEnabled() ) {
		await loadMath().catch( () => {} );
	}
	await document.fonts?.ready;
	await Promise.all(
		[ ...root.querySelectorAll( 'img' ) ].map( ( image ) =>
			image.complete
				? null
				: new Promise( ( resolve ) => {
						image.addEventListener( 'load', resolve, {
							once: true,
						} );
						image.addEventListener( 'error', resolve, {
							once: true,
						} );
					} )
		)
	);
	// Let the math runtime typeset what the renderers mounted.
	await new Promise( ( resolve ) => window.setTimeout( resolve, 300 ) );
}

const source = document.getElementById( 'ohmylms-print-data' );
const root = document.getElementById( 'ohmylms-print-root' );
if ( source && root ) {
	const data = JSON.parse( source.textContent );
	createRoot( root ).render( <PrintedPaper data={ data } /> );
	const button = document.querySelector( '.ohmylms-print-button' );
	const status = document.querySelector( '.ohmylms-print-status' );
	button?.addEventListener( 'click', () => window.print() );
	settled( root ).then( () => {
		document.body.dataset.ready = '1';
		if ( status ) {
			status.textContent = __( 'Ready to print.', 'ohmylms' );
		}
		if ( button ) {
			button.disabled = false;
		}
		if ( data.autoPrint ) {
			window.print();
		}
	} );
}
