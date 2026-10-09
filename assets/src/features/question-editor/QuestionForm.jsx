import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
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
					<div className="ohmylms-response-heading">
						<h3>
							{ types?.find(
								( option ) =>
									option.value === question.settings?.type
							)?.label || __( 'Answers', 'ohmylms' ) }
						</h3>
						<span>{ __( 'Answer setup', 'ohmylms' ) }</span>
					</div>
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
							<SelectControl
								label={ __( 'Question type', 'ohmylms' ) }
								help={ __(
									'Changing type resets the answer setup.',
									'ohmylms'
								) }
								value={ question.settings?.type }
								options={ types }
								disabled={ props.readOnly }
								onChange={ ( type ) => {
									if ( type ) {
										onTypeChange( type );
									}
								} }
							/>
						</div>
					) }
				</>
			}
			flatSettings={ false }
			compact
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
