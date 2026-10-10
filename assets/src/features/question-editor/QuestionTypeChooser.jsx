import { createElement, useState } from '@wordpress/element';
import { Button, Modal, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { QUESTION_BLOCK_TYPES } from './questionBlocks.mjs';

/**
 * Choose a response format before inserting an independent question draft.
 * @param root0
 * @param root0.onSelect
 * @param root0.onClose
 */
export function QuestionTypeChooser( { onSelect, onClose } ) {
	const [ search, setSearch ] = useState( '' );
	const formats = ( ids ) =>
		QUESTION_BLOCK_TYPES.filter(
			( [ id ] ) => ids.includes( id ) && id !== 'multiple-choice'
		);
	const groups = [
		[
			__( 'Basic', 'ohmylms' ),
			formats( [
				'single-choice',
				'multiple-choice',
				'true-false',
				'short-text',
				'long-text',
				'fill-in-the-blank',
				'statement',
				'poll',
				'word-cloud',
			] ),
		],
		[
			__( 'Interactive and responses', 'ohmylms' ),
			formats( [
				'reorder',
				'matching',
				'dropdown-blanks',
				'categorize',
				'multi-blank',
				'hot-text',
				'match-table-grid',
				'audio-response',
				'video-response',
				'discussion-board',
			] ),
		],
		[
			__( 'Mathematics', 'ohmylms' ),
			formats( [
				'numerical',
				'structured',
				'build-expression',
				'expression',
				'graphing',
			] ),
		],
		[
			__( 'Visual learning', 'ohmylms' ),
			formats( [
				'number-line',
				'shade-model',
				'count-blocks',
				'set-clock',
				'make-amount',
				'fill-level',
				'build-chart',
				'grid-build',
				'labeling',
				'hotspot',
				'draw',
			] ),
		],
		[
			__( 'Content and multimedia', 'ohmylms' ),
			formats( [ 'passage', 'interactive-video' ] ),
		],
	];
	const matches = ( [ , label ] ) =>
		label.toLowerCase().includes( search.toLowerCase().trim() );
	return createElement(
		Modal,
		{
			title: __( 'Choose a question type', 'ohmylms' ),
			onRequestClose: onClose,
			size: 'large',
			className: 'ohmylms-question-type-modal',
		},
		<>
			<p>
				{ __(
					'Choose how learners will respond. Then write the question and configure its answers.',
					'ohmylms'
				) }
			</p>
			<TextControl
				label={ __( 'Search question types', 'ohmylms' ) }
				value={ search }
				onChange={ setSearch }
			/>
			{ groups.map(
				( [ heading, types ] ) =>
					types.some( matches ) && (
						<section key={ heading } aria-label={ heading }>
							<h2>{ heading }</h2>
							<div className="ohmylms-question-type-grid">
								{ types
									.filter( matches )
									.map( ( [ type, label ] ) => (
										<Button
											key={ type }
											variant="secondary"
											onClick={ () => onSelect( type ) }
										>
											{ label }
										</Button>
									) ) }
							</div>
						</section>
					)
			) }
			{ ! QUESTION_BLOCK_TYPES.some( matches ) && (
				<p role="status">
					{ __( 'No question types match your search.', 'ohmylms' ) }
				</p>
			) }
		</>
	);
}
