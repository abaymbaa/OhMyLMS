/** @jsx createElement */
import { createElement, useEffect, useRef, useState } from '@wordpress/element';
import { getBlockType, registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { RichContentControl } from '../math/RichContentControl';
import { BankAnswerFields } from './BankAnswerFields';
import { ChoiceControls } from './ChoiceControls';
import { QuestionOptionsBar } from './QuestionOptionsBar';
import { QuestionLivePreview } from './QuestionLivePreview';
import { questionPrompt, questionPromptPatch } from './questionPrompt.mjs';
import { loadMath, mathEnabled } from '../math/loader.mjs';

export const MULTIPLE_CHOICE_BLOCK = 'ohmylms/shared-multiple-choice';

/**
 * Shared authoring controls. Assessment data stays in the versioned question writer.
 * @param root0
 * @param root0.question
 * @param root0.onChange
 * @param root0.readOnly
 */
export function MultipleChoiceFields( {
	question,
	onChange,
	readOnly = false,
} ) {
	const [ preview, setPreview ] = useState( false );
	const root = useRef( null );
	useEffect( () => {
		let disposed = false;
		let cleanup;
		if ( mathEnabled() ) {
			loadMath()
				.then( ( runtime ) => {
					if ( ! disposed && root.current ) {
						cleanup = runtime.mount( root.current );
					}
				} )
				.catch( () => {} );
		}
		return () => {
			disposed = true;
			cleanup?.();
		};
	}, [] );
	return (
		<fieldset
			className="ohmylms-compact-choice"
			ref={ root }
			disabled={ readOnly }
		>
			<Button
				variant="tertiary"
				size="small"
				onClick={ () => setPreview( ! preview ) }
			>
				{ preview
					? __( 'Edit question', 'ohmylms' )
					: __( 'Preview question', 'ohmylms' ) }
			</Button>
			{ preview || readOnly ? (
				<QuestionLivePreview question={ question } />
			) : (
				<>
					<RichContentControl
						label={ __( 'Question statement', 'ohmylms' ) }
						compact
						collapseToolbar
						showToolbar
						value={ questionPrompt( question ) }
						onChange={ ( value ) =>
							onChange( questionPromptPatch( question, value ) )
						}
					/>
					<BankAnswerFields
						collapseAnswerToolbar
						showAnswerToolbar
						type={ question.settings.type }
						options={ question.questions || [] }
						settings={ question.settings }
						onChange={ onChange }
					/>
					<details className="ohmylms-choice-settings">
						<summary>
							{ __( 'Settings & feedback', 'ohmylms' ) }
						</summary>
						<ChoiceControls
							question={ question }
							onChange={ onChange }
							readOnly={ readOnly }
						/>
						<QuestionOptionsBar
							question={ question }
							onChange={ onChange }
						/>
					</details>
				</>
			) }
		</fieldset>
	);
}

/**
 * Register the question block in the native lesson and quiz editors.
 * @param LessonEdit
 */
export function registerMultipleChoiceBlock( LessonEdit ) {
	if ( getBlockType( MULTIPLE_CHOICE_BLOCK ) ) {
		return;
	}
	function Edit( props ) {
		const blockProps = useBlockProps( {
			className: 'ohmylms-shared-choice-block',
			contentEditable: false,
		} );
		const content = <LessonEdit { ...props } />;
		return <div { ...blockProps }>{ content }</div>;
	}
	registerBlockType( MULTIPLE_CHOICE_BLOCK, {
		apiVersion: 3,
		title: __( 'OhMyLMS Multiple Choice', 'ohmylms' ),
		category: 'text',
		icon: 'welcome-learn-more',
		attributes: {
			questionId: { type: 'integer', default: 0 },
			uuid: { type: 'string', default: '' },
			delivery: { type: 'string', default: 'inline' },
		},
		usesContext: [ 'postId', 'postType' ],
		supports: { html: false, reusable: false },
		edit: Edit,
		save: () => null,
	} );
}
