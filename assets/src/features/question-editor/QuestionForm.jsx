import { createElement, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { ComboboxControl } from '@wordpress/components';
import { FormWorkspace } from './FormWorkspace';
import { BankAnswerFields } from './BankAnswerFields';
import { QuestionOptionsBar } from './QuestionOptionsBar';
import { TemplatePanel } from './TemplatePanel';
import { questionPrompt, questionPromptPatch } from './questionPrompt.mjs';

/**
 * The question form shared by quiz authoring and standalone skill/bank authoring.
 * @param root0
 * @param root0.question
 * @param root0.onChange
 * @param root0.answers
 * @param root0.settings
 * @param root0.extraSettings
 * @param root0.types
 * @param root0.onTypeChange
 */
export function QuestionForm( {
	question,
	onChange,
	answers,
	settings,
	extraSettings,
	types,
	onTypeChange,
	...props
} ) {
	const [ typeSearch, setTypeSearch ] = useState( '' );
	const sharedAnswers = (
		<BankAnswerFields
			type={ question.settings?.type }
			options={ question.questions || [] }
			settings={ question.settings || {} }
			prompt={ question.name }
			onChange={ onChange }
		/>
	);
	return (
		<FormWorkspace
			document={ {
				...question,
				description: questionPrompt( question ),
			} }
			titleLabel={ __( 'Question title', 'ohmylms' ) }
			titlePlaceholder={ __( 'Type your question here …', 'ohmylms' ) }
			workspaceLabel={ __( 'Question form editor', 'ohmylms' ) }
			onTitleChange={ ( name ) => onChange( { name } ) }
			onContentChange={ ( description ) =>
				onChange( questionPromptPatch( question, description ) )
			}
			previewQuestion={ question }
			questionBlockContent={
				<>
					<h3>{ __( 'Answers', 'ohmylms' ) }</h3>
					{ answers || sharedAnswers }
					<TemplatePanel
						question={ question }
						onChange={ onChange }
						readOnly={ props.readOnly }
					/>
				</>
			}
			{ ...props }
			hideTitle
			contentLabel={ __( 'Question', 'ohmylms' ) }
			toolbarEnd={
				<>
					{ types && (
						<div className="ohmylms-question-type-picker">
							<ComboboxControl
								label={ __( 'Question type', 'ohmylms' ) }
								hideLabelFromVision
								value={ question.settings?.type }
								options={ types.filter( ( { label } ) =>
									label
										.toLowerCase()
										.includes( typeSearch.toLowerCase() )
								) }
								onFilterValueChange={ setTypeSearch }
								allowReset={ false }
								disabled={ props.readOnly }
								onChange={ ( type ) => {
									setTypeSearch( '' );
									if ( type ) {
										onTypeChange( type );
									}
								} }
							/>
						</div>
					) }
				</>
			}
			flatSettings
			settings={
				<>
					<QuestionOptionsBar
						question={ question }
						onChange={ onChange }
						types={ types }
						onTypeChange={ onTypeChange }
					/>
					{ extraSettings }
				</>
			}
		/>
	);
}
