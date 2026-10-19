/** @jsx createElement */
import { createElement, useEffect, useRef, useState } from '@wordpress/element';
import { getBlockType, registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	Dropdown,
	Modal,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { RichContentControl } from '../math/RichContentControl';
import { BankAnswerFields } from './BankAnswerFields';
import { MatchTableGridEditor } from './MatchTableGridEditor';
import { choiceModePatch } from './choiceModel.mjs';
import { questionTypePatch } from './questionBlocks.mjs';
import { QuestionOptionsBar } from './QuestionOptionsBar';
import { QuestionLivePreview } from './QuestionLivePreview';
import { TemplatePanel } from './TemplatePanel';
import { defaultTemplate } from './templateModel.mjs';
import { MathVariables } from '../math/MathInput';
import {
	questionAnswerPatch,
	questionPrompt,
	questionPromptPatch,
} from './questionPrompt.mjs';
import { loadMath, mathEnabled } from '../math/loader.mjs';

export const MULTIPLE_CHOICE_BLOCK = 'ohmylms/shared-multiple-choice';

/**
 * Shared authoring controls. Assessment data stays in the versioned question writer.
 * @param root0
 * @param root0.question
 * @param root0.onChange
 * @param root0.onApprove
 * @param root0.onDuplicate
 * @param root0.onRemove
 * @param root0.allowWritten
 * @param root0.readOnly
 */
export function MultipleChoiceFields( {
	question,
	onChange,
	readOnly = false,
	allowWritten = true,
	onApprove,
	onDuplicate,
	onRemove,
} ) {
	const root = useRef( null );
	const [ variablesOpen, setVariablesOpen ] = useState( false );
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
		<MathVariables.Provider
			value={ question.settings?.template?.variables || [] }
		>
			<fieldset
				className={ `ohmylms-compact-choice ohmylms-choice-card${ question.settings.type === 'match-table-grid' ? ' is-match-table-grid' : '' }` }
				ref={ root }
				disabled={ readOnly }
			>
				{ readOnly ? (
					<QuestionLivePreview question={ question } />
				) : (
					<>
						<div className="ohmylms-choice-card-header">
							<RichContentControl
								label={ __( 'Question statement', 'ohmylms' ) }
								placeholder={ __(
									'Untitled question',
									'ohmylms'
								) }
								compact
								value={ questionPrompt( question ) }
								onChange={ ( value ) =>
									onChange(
										questionPromptPatch( question, value )
									)
								}
							/>
							<SelectControl
								label={ __( 'Question type', 'ohmylms' ) }
								hideLabelFromVision
								value={ question.settings.type }
								options={ [
									{
										label: __(
											'Multiple choice',
											'ohmylms'
										),
										value: 'single-choice',
									},
									{
										label: __( 'Checkboxes', 'ohmylms' ),
										value: 'multiple-choice',
									},
									...( allowWritten
										? [
												{
													label: __(
														'Numerical',
														'ohmylms'
													),
													value: 'numerical',
												},
												{
													label: __(
														'Structured (multi-part)',
														'ohmylms'
													),
													value: 'structured',
												},
												{
													label: __(
														'Graphing',
														'ohmylms'
													),
													value: 'graphing',
												},
											]
										: [] ),
									...( allowWritten
										? [
												{
													label: __(
														'Number line',
														'ohmylms'
													),
													value: 'number-line',
												},
												{
													label: __(
														'Shade a model',
														'ohmylms'
													),
													value: 'shade-model',
												},
												{
													label: __(
														'Count with blocks',
														'ohmylms'
													),
													value: 'count-blocks',
												},
												{
													label: __(
														'Set the clock',
														'ohmylms'
													),
													value: 'set-clock',
												},
												{
													label: __(
														'Make an amount',
														'ohmylms'
													),
													value: 'make-amount',
												},
												{
													label: __(
														'Fill to a level',
														'ohmylms'
													),
													value: 'fill-level',
												},
												{
													label: __(
														'Build a chart',
														'ohmylms'
													),
													value: 'build-chart',
												},
												{
													label: __(
														'Build on a grid',
														'ohmylms'
													),
													value: 'grid-build',
												},
												{
													label: __(
														'Labeling',
														'ohmylms'
													),
													value: 'labeling',
												},
												{
													label: __(
														'Hotspot',
														'ohmylms'
													),
													value: 'hotspot',
												},
												{
													label: __(
														'Draw',
														'ohmylms'
													),
													value: 'draw',
												},
											]
										: [] ),
									...( allowWritten
										? [
												{
													label: __(
														'Fill in the blank',
														'ohmylms'
													),
													value: 'fill-in-the-blank',
												},
												{
													label: __(
														'Matching',
														'ohmylms'
													),
													value: 'matching',
												},
												{
													label: __(
														'Match table grid',
														'ohmylms'
													),
													value: 'match-table-grid',
												},
												{
													label: __(
														'Dropdown in a sentence',
														'ohmylms'
													),
													value: 'dropdown-blanks',
												},
												{
													label: __(
														'Multi-blank / table',
														'ohmylms'
													),
													value: 'multi-blank',
												},
												{
													label: __(
														'Build from tiles',
														'ohmylms'
													),
													value: 'build-expression',
												},
												{
													label: __(
														'Math expression',
														'ohmylms'
													),
													value: 'expression',
												},
											]
										: [] ),
									...( allowWritten
										? [
												{
													label: __(
														'Reorder',
														'ohmylms'
													),
													value: 'reorder',
												},
											]
										: [] ),
									...( allowWritten
										? [
												{
													label: __(
														'Short answer',
														'ohmylms'
													),
													value: 'short-text',
												},
												{
													label: __(
														'Long answer',
														'ohmylms'
													),
													value: 'long-text',
												},
											]
										: [] ),
								] }
								onChange={ ( type ) =>
									onChange(
										[
											'single-choice',
											'multiple-choice',
										].includes( question.settings.type ) &&
											[
												'single-choice',
												'multiple-choice',
											].includes( type )
											? choiceModePatch(
													question,
													type === 'multiple-choice'
												)
											: questionTypePatch(
													question,
													type
												)
									)
								}
								__nextHasNoMarginBottom
							/>
						</div>
						{ question.settings.type === 'reorder' && (
							<p className="ohmylms-reorder-guidance">
								{ __(
									'Arrange items in the correct order.',
									'ohmylms'
								) }
							</p>
						) }
						{ [ 'short-text', 'long-text' ].includes(
							question.settings.type
						) ? (
							<div className="ohmylms-written-answer-preview">
								{ question.settings.type === 'short-text' ? (
									<input
										type="text"
										disabled
										aria-label={ __(
											'Learner short answer',
											'ohmylms'
										) }
										placeholder={ __(
											'Short answer text',
											'ohmylms'
										) }
									/>
								) : (
									<textarea
										disabled
										rows={ 3 }
										aria-label={ __(
											'Learner long answer',
											'ohmylms'
										) }
										placeholder={ __(
											'Long answer text',
											'ohmylms'
										) }
									/>
								) }
								<span>
									{ __( 'Teacher graded', 'ohmylms' ) }
								</span>
							</div>
						) : (
							<>
								{ ' ' }
								{ question.settings.type ===
								'match-table-grid' ? (
									<MatchTableGridEditor
										value={ question.settings }
										onChange={ ( patch ) =>
											onChange( {
												settings: {
													...question.settings,
													...patch,
												},
											} )
										}
									/>
								) : (
									<BankAnswerFields
										mainStatement
										prompt={ questionPrompt( question ) }
										compactActions
										type={ question.settings.type }
										options={ question.questions || [] }
										settings={ question.settings }
										onChange={ ( patch ) =>
											onChange(
												questionAnswerPatch(
													question,
													patch
												)
											)
										}
									/>
								) }{ ' ' }
							</>
						) }
						<div className="ohmylms-choice-card-footer">
							{ onDuplicate && (
								<Button
									icon="admin-page"
									label={ __(
										'Duplicate question',
										'ohmylms'
									) }
									onClick={ onDuplicate }
								/>
							) }
							{ onRemove && (
								<Button
									icon="trash"
									label={ __(
										'Remove question block',
										'ohmylms'
									) }
									onClick={ onRemove }
								/>
							) }
							<ToggleControl
								label={
									question.settings.type ===
									'match-table-grid'
										? __(
												'Require a response in each row',
												'ohmylms'
											)
										: __( 'Required', 'ohmylms' )
								}
								checked={ !! question.settings.required }
								onChange={ ( required ) =>
									onChange( {
										settings: {
											...question.settings,
											required,
										},
									} )
								}
								__nextHasNoMarginBottom
							/>
							<ToggleControl
								label={ __(
									'Enable randomized variables',
									'ohmylms'
								) }
								checked={ !! question.settings.template }
								onChange={ ( enabled ) => {
									const { template, ...settings } =
										question.settings;
									onChange( {
										settings: enabled
											? {
													...settings,
													template:
														template ||
														defaultTemplate(),
												}
											: settings,
									} );
									setVariablesOpen( enabled );
								} }
								__nextHasNoMarginBottom
							/>
							{ question.settings.template && (
								<Button
									variant="tertiary"
									aria-haspopup="dialog"
									aria-expanded={ variablesOpen }
									onClick={ () => setVariablesOpen( true ) }
								>
									{ __( 'Edit variables', 'ohmylms' ) }
								</Button>
							) }
							{ variablesOpen && question.settings.template && (
								<Modal
									title={ __(
										'Edit randomized variables',
										'ohmylms'
									) }
									isFullScreen
									onRequestClose={ () =>
										setVariablesOpen( false )
									}
								>
									<TemplatePanel
										question={ question }
										onChange={ onChange }
										readOnly={ readOnly }
									/>
								</Modal>
							) }
							<Dropdown
								contentClassName="ohmylms-choice-settings-popover"
								renderToggle={ ( { isOpen, onToggle } ) => (
									<Button
										icon="ellipsis"
										label={ __(
											'Question settings',
											'ohmylms'
										) }
										aria-expanded={ isOpen }
										onClick={ onToggle }
									/>
								) }
								renderContent={ () => (
									<>
										<QuestionOptionsBar
											question={ question }
											onChange={ onChange }
											hideRequired
											hideRandomize={ [
												'short-text',
												'long-text',
											].includes(
												question.settings.type
											) }
										/>
										{ question.settings.type ===
											'multiple-choice' && (
											<ToggleControl
												label={ __(
													'Allow partial grading',
													'ohmylms'
												) }
												checked={
													!! question.settings
														.partial_credit
												}
												onChange={ ( partialCredit ) =>
													onChange( {
														settings: {
															...question.settings,
															partial_credit:
																partialCredit,
														},
													} )
												}
											/>
										) }
										{ onApprove && (
											<Button
												variant="secondary"
												onClick={ onApprove }
											>
												{ __(
													'Save and approve for learners',
													'ohmylms'
												) }
											</Button>
										) }
									</>
								) }
							/>
						</div>
					</>
				) }
			</fieldset>
		</MathVariables.Provider>
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
			className: `ohmylms-shared-choice-block${
				props.isSelected ? '' : ' is-collapsed'
			}`,
			contentEditable: false,
		} );
		const content = <LessonEdit { ...props } />;
		return <div { ...blockProps }>{ content }</div>;
	}
	registerBlockType( MULTIPLE_CHOICE_BLOCK, {
		apiVersion: 3,
		title: __( 'Ohmylms Question', 'ohmylms' ),
		category: 'text',
		icon: 'welcome-learn-more',
		attributes: {
			questionId: { type: 'integer', default: 0 },
			uuid: { type: 'string', default: '' },
			delivery: { type: 'string', default: 'inline' },
			authoringRevision: { type: 'integer', default: 0 },
		},
		usesContext: [ 'postId', 'postType' ],
		supports: { html: false, reusable: false },
		edit: Edit,
		save: () => null,
	} );
}
