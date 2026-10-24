/** @jsx createElement */
import { createElement, createRoot, RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { loadMath, mathEnabled } from '../math/loader.mjs';
import { questionPrompt } from '../question-editor/questionPrompt.mjs';
import { PaperQuestion } from './PaperQuestion';
import {
	PaperAnswerSpaceView,
	PaperFormulaSheetView,
	PaperHeaderView,
	PaperInstructionsView,
	PaperPageBreakView,
	PaperSectionView,
	columnsProps,
	paperTextDefaults,
} from './PaperBlockViews';
import {
	limitMinutes,
	paperSettings,
	questionLabels,
	questionMarks,
	sectionTotals,
} from './paperModel.mjs';

/**
 * Numbers, section marks and the total, worked out in document order across nested blocks.
 *
 * @param {Array}  items    Print items.
 * @param {Object} settings Normalized paper settings.
 * @return {{labels: Map, sections: Map, total: number}} Derived values by item.
 */
function annotate( items, settings ) {
	const questions = [];
	const sections = [];
	const entries = [];
	const visit = ( list ) => {
		for ( const item of list ) {
			if ( item.kind === 'question' ) {
				questions.push( item );
				entries.push( {
					kind: 'question',
					marks: questionMarks( item.question ),
				} );
			} else if ( item.kind === 'paper' ) {
				if ( item.name === 'ohmylms/paper-section' ) {
					entries.push( {
						kind: 'section',
						key: String( sections.push( item ) - 1 ),
					} );
				}
				visit( item.items || [] );
			}
		}
	};
	visit( items );
	const labels = questionLabels(
		questions.map( ( item ) => item.question.settings?.type || '' ),
		settings
	);
	const totals = sectionTotals( entries );
	return {
		labels: new Map(
			questions.map( ( item, index ) => [ item, labels[ index ] ] )
		),
		sections: new Map(
			sections.map( ( item, index ) => [ item, totals[ index ] || 0 ] )
		),
		total: entries.reduce(
			( sum, entry ) => sum + ( entry.marks || 0 ),
			0
		),
	};
}

/**
 * Saved text of a paper block, with the block's defaults. The server keeps only bold, italic and
 * line breaks in these values.
 *
 * @param {string} name  Block name.
 * @param {Object} attrs Saved attributes.
 * @return {import('./PaperBlockViews').TextField} Text renderer.
 */
function savedText( name, attrs ) {
	const values = { ...( paperTextDefaults()[ name ] || {} ), ...attrs };
	return ( key, Tag, className ) =>
		values[ key ] ? (
			<Tag
				className={ className }
				dangerouslySetInnerHTML={ { __html: values[ key ] } }
			/>
		) : null;
}

/**
 * Printed items, each in a block wrapper that keeps it on one page and may span columns.
 *
 * @param {Object} props         Properties.
 * @param {Array}  props.items   Print items.
 * @param {Object} props.context Paper data, settings and derived values.
 * @return {Element[]} Printed blocks.
 */
function Items( { items, context } ) {
	return items.map( ( item, index ) => (
		<div
			className={ `ohmylms-print-block${
				item.span ? ' is-ohmylms-paper-span' : ''
			}` }
			key={ index }
		>
			<Item item={ item } context={ context } />
		</div>
	) );
}

/**
 * One printed item: core block HTML, a question or a paper block.
 *
 * @param {Object} props         Properties.
 * @param {Object} props.item    Print item.
 * @param {Object} props.context Paper data, settings and derived values.
 * @return {Element|null} Printed item.
 */
function Item( { item, context } ) {
	if ( item.kind === 'html' ) {
		return <RawHTML>{ item.html }</RawHTML>;
	}
	if ( item.kind === 'question' ) {
		return (
			<PaperQuestion
				question={ item.question }
				prompt={ questionPrompt( item.question ) }
				label={ context.derived.labels.get( item ) }
				settings={ context.settings }
				showAnswers={ context.showAnswers }
			/>
		);
	}
	const attrs = item.attrs || {};
	const text = savedText( item.name, attrs );
	const children = <Items items={ item.items || [] } context={ context } />;
	switch ( item.name ) {
		case 'ohmylms/paper-header':
			return (
				<PaperHeaderView
					attributes={ attrs }
					title={ context.data.title }
					minutes={ limitMinutes( context.data.timeLimit ) }
					total={ context.derived.total }
					text={ text }
				/>
			);
		case 'ohmylms/paper-instructions':
			return (
				<PaperInstructionsView text={ text }>
					{ children }
				</PaperInstructionsView>
			);
		case 'ohmylms/paper-section':
			return (
				<PaperSectionView
					attributes={ attrs }
					total={ context.derived.sections.get( item ) }
					text={ text }
				/>
			);
		case 'ohmylms/paper-columns': {
			const wrapper = columnsProps( attrs );
			return (
				<div className={ wrapper.className } style={ wrapper.style }>
					<div className="ohmylms-paper-columns-body">
						{ children }
					</div>
				</div>
			);
		}
		case 'ohmylms/paper-page-break':
			return <PaperPageBreakView />;
		case 'ohmylms/paper-answer-space':
			return <PaperAnswerSpaceView attributes={ attrs } />;
		case 'ohmylms/paper-formula-sheet':
			return (
				<PaperFormulaSheetView attributes={ attrs } text={ text }>
					{ children }
				</PaperFormulaSheetView>
			);
		default:
			return null;
	}
}

/**
 * The printed exam: core blocks, paper blocks and questions in document order, with the
 * renderers the editor's paper view uses.
 *
 * @param {Object} props      Properties.
 * @param {Object} props.data Print page data from OhMyLMS\Exams\PrintPaper.
 * @return {Element} Paper.
 */
function PrintedPaper( { data } ) {
	const settings = paperSettings( data.settings );
	const context = {
		data,
		settings,
		showAnswers: data.variant === 'key',
		derived: annotate( data.items, settings ),
	};
	return (
		<>
			{ context.showAnswers && (
				<p className="ohmylms-print-key-banner">
					{ __( 'Answer key', 'ohmylms' ) }
				</p>
			) }
			{ ! data.items.length && (
				<p>{ __( 'This exam has no questions yet.', 'ohmylms' ) }</p>
			) }
			<Items items={ data.items } context={ context } />
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
