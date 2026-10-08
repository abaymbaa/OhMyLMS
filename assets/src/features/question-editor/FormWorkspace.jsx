import { createElement, useRef, useLayoutEffect, useState, RawHTML } from '@wordpress/element';
import { Button, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { QuestionLivePreview } from './QuestionLivePreview';

/** Small rich-text field that preserves existing HTML without a block editor. */
function FormDescription({ value, onChange, readOnly }) {
  const field = useRef(null);
  useLayoutEffect(() => {
    if (field.current && field.current.innerHTML !== (value || ''))
      field.current.innerHTML = value || '';
  }, [value]);
  if (readOnly) return <RawHTML>{value || ''}</RawHTML>;
  const format = (command) => {
    field.current.focus();
    document.execCommand(command, false);
    onChange(field.current.innerHTML);
  };
  return (
    <div className="ohmylms-form-description">
      <label>{__('Description / instructions', 'ohmylms')}</label>
      <div role="toolbar" aria-label={__('Text formatting', 'ohmylms')}>
        {[
          ['bold', 'Bold', 'editor-bold'],
          ['italic', 'Italic', 'editor-italic'],
          ['underline', 'Underline', 'editor-underline'],
          ['insertUnorderedList', 'Bullet list', 'editor-ul'],
        ].map(([command, label, icon]) => (
          <Button
            key={command}
            icon={icon}
            label={label}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => format(command)}
          />
        ))}
      </div>
      <div
        ref={field}
        role="textbox"
        aria-label={__('Description / instructions', 'ohmylms')}
        aria-multiline="true"
        contentEditable
        suppressContentEditableWarning
        onInput={(event) => onChange(event.currentTarget.innerHTML)}
      />
    </div>
  );
}

/** Form authoring used by quizzes and the bank; lessons retain their Gutenberg workspace. */
export function FormWorkspace({
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
  previewQuestion,
  readOnly = false,
  compact = false,
  workspaceLabel = __('Form editor', 'ohmylms'),
}) {
  const [preview, setPreview] = useState(false);
  return (
    <section className="ohmylms-form-workspace" aria-label={workspaceLabel}>
      <div className="ohmylms-form-workspace-actions">
        {toolbarActions}
        {previewQuestion && (
          <Button
            variant="secondary"
            icon={preview ? 'edit' : 'visibility'}
            onClick={() => setPreview(!preview)}
          >
            {preview ? __('Edit question', 'ohmylms') : __('Preview question', 'ohmylms')}
          </Button>
        )}
      </div>
      {preview ? (
        <QuestionLivePreview
          question={{ ...previewQuestion, name: document.name, description: document.description }}
        />
      ) : (
        <>
          <TextControl
            label={titleLabel || __('Title', 'ohmylms')}
            placeholder={titlePlaceholder}
            value={decodeEntities(document.title ?? document.name ?? '')}
            disabled={readOnly}
            onChange={onTitleChange}
          />
          {beforeContent}
          <FormDescription
            value={document.description}
            onChange={onContentChange}
            readOnly={readOnly}
          />
          <fieldset disabled={readOnly} className="ohmylms-form-response-fields">
            {readOnly ? readOnlyContent || questionBlockContent : questionBlockContent}
          </fieldset>
        </>
      )}
      {(settings || questionBlockSettings) && (
        <details className="ohmylms-form-settings" open={!compact}>
          <summary>{__('Settings', 'ohmylms')}</summary>
          <fieldset disabled={readOnly}>
            {questionBlockSettings}
            {settings}
          </fieldset>
        </details>
      )}
    </section>
  );
}
