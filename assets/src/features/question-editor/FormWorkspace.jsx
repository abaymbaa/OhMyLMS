import {
	createElement,
	useRef,
	useLayoutEffect,
	useState,
	RawHTML,
} from '@wordpress/element';
import { Button, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { QuestionLivePreview } from './QuestionLivePreview';

/**
 * Small rich-text field that preserves existing HTML without a block editor.
 * @param root0
 * @param root0.value
 * @param root0.onChange
 * @param root0.readOnly
 * @param root0.label
 */
function FormDescription( {
	value,
	onChange,
	readOnly,
	label = __( 'Description / instructions', 'ohmylms' ),
} ) {
	const field = useRef( null );
	useLayoutEffect( () => {
		if ( field.current && field.current.innerHTML !== ( value || '' ) ) {
			field.current.innerHTML = value || '';
		}
	}, [ value ] );
	if ( readOnly ) {
		return <RawHTML>{ value || '' }</RawHTML>;
	}
	const format = ( command ) => {
		field.current.focus();
		document.execCommand( command, false );
		onChange( field.current.innerHTML );
	};
	return (
		<div className="ohmylms-form-description">
			<label>{ label }</label>
			<div
				role="toolbar"
				aria-label={ __( 'Text formatting', 'ohmylms' ) }
			>
				{ [
					[ 'bold', 'Bold', 'editor-bold' ],
					[ 'italic', 'Italic', 'editor-italic' ],
					[ 'underline', 'Underline', 'editor-underline' ],
					[ 'insertUnorderedList', 'Bullet list', 'editor-ul' ],
				].map( ( [ command, label, icon ] ) => (
					<Button
						key={ command }
						icon={ icon }
						label={ label }
						onMouseDown={ ( event ) => event.preventDefault() }
						onClick={ () => format( command ) }
					/>
				) ) }
			</div>
			<div
				ref={ field }
				role="textbox"
				aria-label={ label }
				aria-multiline="true"
				contentEditable
				suppressContentEditableWarning
				onInput={ ( event ) =>
					onChange( event.currentTarget.innerHTML )
				}
			/>
		</div>
	);
}
/**
 * Form authoring used by quizzes and the bank; lessons retain their Gutenberg workspace.
 * @param root0
 * @param root0.document
 * @param root0.onTitleChange
 * @param root0.onContentChange
 * @param root0.titleLabel
 * @param root0.titlePlaceholder
 * @param root0.settings
 * @param root0.beforeContent
 * @param root0.questionBlockContent
 * @param root0.questionBlockSettings
 * @param root0.readOnlyContent
 * @param root0.toolbarActions
 * @param root0.toolbarLeading
 * @param root0.toolbarEnd
 * @param root0.hideTitle
 * @param root0.contentLabel
 * @param root0.previewQuestion
 * @param root0.readOnly
 * @param root0.compact
 * @param root0.flatSettings
 * @param root0.workspaceLabel
 */
export function FormWorkspace( {
	document,
	onTitleChange,
	onContentChange,
	titleLabel,
	titlePlaceholder,
	settings,
	beforeContent,
	questionBlockContent,
	questionBlockSettings,
	readOnlyContent,
	toolbarActions,
	toolbarLeading,
	toolbarEnd,
	hideTitle = false,
	contentLabel,

	previewQuestion,
	readOnly = false,
	compact = false,
	flatSettings = false,
	workspaceLabel = __( 'Form editor', 'ohmylms' ),
} ) {
	const [ preview, setPreview ] = useState( false );
	return (
		<section
			className="ohmylms-form-workspace"
			aria-label={ workspaceLabel }
		>
			<div className="ohmylms-form-workspace-actions">
				{ toolbarLeading }
				{ toolbarActions }
				{ previewQuestion && (
					<Button
						variant="secondary"
						icon={ preview ? 'edit' : 'visibility' }
						onClick={ () => setPreview( ! preview ) }
					>
						{ preview
							? __( 'Edit', 'ohmylms' )
							: __( 'Preview', 'ohmylms' ) }
					</Button>
				) }
				{ toolbarEnd }
			</div>
			{ preview ? (
				<QuestionLivePreview
					question={ {
						...previewQuestion,
						name: document.name,
						description: document.description,
					} }
				/>
			) : (
				<>
					{ ! hideTitle && (
						<TextControl
							label={ titleLabel || __( 'Title', 'ohmylms' ) }
							placeholder={ titlePlaceholder }
							value={ decodeEntities(
								document.title ?? document.name ?? ''
							) }
							disabled={ readOnly }
							onChange={ onTitleChange }
						/>
					) }
					{ beforeContent }
					<FormDescription
						value={ document.description }
						onChange={ onContentChange }
						readOnly={ readOnly }
						label={ contentLabel }
					/>
					<fieldset
						disabled={ readOnly }
						className="ohmylms-form-response-fields"
					>
						{ readOnly
							? readOnlyContent || questionBlockContent
							: questionBlockContent }
					</fieldset>
				</>
			) }
			{ ( settings || questionBlockSettings ) &&
				( flatSettings ? (
					<fieldset
						disabled={ readOnly }
						className="ohmylms-form-settings-bar"
					>
						{ questionBlockSettings }
						{ settings }
					</fieldset>
				) : (
					<details
						className="ohmylms-form-settings"
						open={ ! compact }
					>
						<summary>{ __( 'Settings', 'ohmylms' ) }</summary>
						<fieldset disabled={ readOnly }>
							{ questionBlockSettings }
							{ settings }
						</fieldset>
					</details>
				) ) }
		</section>
	);
}
