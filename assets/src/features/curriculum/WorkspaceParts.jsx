import { createElement, useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, Dashicon, DropdownMenu } from '@wordpress/components';

/** The words behind a validation code, for fields that save as you leave them. */
export const MESSAGES = {
  required: () => __('Enter a name.', 'ohmylms'),
  'too-long': () => __('That is too long.', 'ohmylms'),
};

/**
 * A text field that saves when you leave it (or press Enter, for a single line). Escape puts the saved text
 * back. `onSave(text)` answers whether it worked; the text stays as typed when it did not, so nothing is lost.
 * While you are typing, a change coming from the server never overwrites your text.
 */
export function SaveField({
  id,
  label,
  value,
  onSave,
  validate,
  multiline = false,
  hideLabel = false,
  className = '',
  inputClassName = '',
  placeholder = '',
  help = '',
  disabled = false,
  suggestions = [],
}) {
  const [draft, setDraft] = useState(value ?? '');
  const [problem, setProblem] = useState('');
  const [state, setState] = useState('idle');
  const editing = useRef(false);
  const cancelled = useRef(false);
  useEffect(() => {
    if (!editing.current) setDraft(value ?? '');
  }, [value]);
  useEffect(() => {
    if (state !== 'saved') return undefined;
    const timer = setTimeout(() => setState('idle'), 2000);
    return () => clearTimeout(timer);
  }, [state]);

  async function commit() {
    editing.current = false;
    if (cancelled.current) {
      cancelled.current = false;
      setDraft(value ?? '');
      setProblem('');
      return;
    }
    if (draft === (value ?? '')) {
      setProblem('');
      return;
    }
    const found = validate ? validate(draft) : '';
    setProblem(found);
    if (found) return;
    setState('saving');
    const ok = await onSave(draft);
    setState(ok ? 'saved' : 'error');
  }
  const Field = multiline ? 'textarea' : 'input';
  const note = problem || (state === 'error' ? __('Not saved. Try again.', 'ohmylms') : '');
  return (
    <div className={`ohmylms-ws-field ${className}`.trim()}>
      <label htmlFor={id} className={hideLabel ? 'screen-reader-text' : 'ohmylms-ws-label'}>
        {label}
      </label>
      <Field
        id={id}
        className={inputClassName}
        value={draft}
        placeholder={placeholder}
        rows={multiline ? 3 : undefined}
        disabled={disabled}
        list={!multiline && suggestions.length ? `${id}-suggestions` : undefined}
        aria-invalid={Boolean(note)}
        aria-describedby={note || help ? `${id}-note` : undefined}
        onFocus={() => {
          editing.current = true;
        }}
        onChange={(event) => setDraft(event.target.value)}
        onBlur={commit}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !multiline) {
            event.preventDefault();
            event.currentTarget.blur();
          } else if (event.key === 'Escape') {
            cancelled.current = true;
            event.currentTarget.blur();
          }
        }}
      />
      {!multiline && suggestions.length > 0 && (
        <datalist id={`${id}-suggestions`}>
          {suggestions.map((text) => (
            <option key={text} value={text} />
          ))}
        </datalist>
      )}
      <span id={`${id}-note`} className={`ohmylms-ws-note${note ? ' is-error' : ''}`} role="status">
        {note ||
          (state === 'saving' && __('Saving…', 'ohmylms')) ||
          (state === 'saved' && __('Saved', 'ohmylms')) ||
          help}
      </span>
    </div>
  );
}

/**
 * Add one thing after another without leaving the keyboard: type the code, Tab, type the name, Enter. It
 * stays open after each add and returns to the first field, so a list of chapters or skills goes in quickly.
 */
export function QuickAdd({
  nameLabel,
  codeLabel,
  submitLabel,
  codeOnly = false,
  pending,
  onAdd,
  onCancel,
  help,
}) {
  const [draft, setDraft] = useState({ name: '', code: '' });
  const [problem, setProblem] = useState('');
  const first = useRef(null);
  useEffect(() => {
    first.current?.focus();
  }, []);

  async function submit(event) {
    event.preventDefault();
    const name = draft.name.trim();
    const code = draft.code.trim();
    if (!name && !(codeOnly && code)) {
      setProblem(
        codeOnly ? __('Enter a name or a code.', 'ohmylms') : __('Enter a name.', 'ohmylms'),
      );
      return;
    }
    setProblem('');
    if (pending) return;
    const ok = await onAdd({ name, code });
    if (ok) {
      setDraft({ name: '', code: '' });
      first.current?.focus();
    }
  }
  return (
    <form className="ohmylms-ws-quickadd" onSubmit={submit} noValidate>
      <div className="ohmylms-ws-quickadd-fields">
        <label className="ohmylms-ws-quickadd-code">
          <span className="ohmylms-ws-label">{codeLabel}</span>
          <input
            ref={first}
            value={draft.code}
            onChange={(event) => setDraft({ ...draft, code: event.target.value })}
          />
        </label>
        <label className="ohmylms-ws-quickadd-name">
          <span className="ohmylms-ws-label">{nameLabel}</span>
          <input
            value={draft.name}
            aria-invalid={Boolean(problem)}
            onChange={(event) => setDraft({ ...draft, name: event.target.value })}
          />
        </label>
        <div className="ohmylms-ws-quickadd-actions">
          <Button variant="primary" type="submit" isBusy={pending} disabled={pending}>
            {submitLabel}
          </Button>
          <Button variant="secondary" onClick={onCancel}>
            {__('Done', 'ohmylms')}
          </Button>
        </div>
      </div>
      <p className={`ohmylms-ws-note${problem ? ' is-error' : ''}`} role="status">
        {problem || help}
      </p>
    </form>
  );
}

const ICONS = {
  topic: 'category',
  chapter: 'book-alt',
  skill: 'awards',
  lesson: 'media-document',
  quiz: 'editor-help',
  assignment: 'clipboard',
  syllabus: 'welcome-learn-more',
};

export function KindIcon({ kind }) {
  return <Dashicon icon={ICONS[kind] || 'marker'} className={`ohmylms-ws-kind is-${kind}`} />;
}

/** The small label that says what a row is: Chapter, Skill, Lesson… */
export function Tag({ children, tone = '' }) {
  return <span className={`ohmylms-ws-tag${tone ? ` is-${tone}` : ''}`}>{children}</span>;
}

/** The "⋯" menu of a row or a pane. `controls` are `{title, onClick, isDisabled}`. */
export function RowMenu({ label, controls, disabled, icon = 'ellipsis' }) {
  return (
    <DropdownMenu
      className="ohmylms-ws-menu"
      icon={icon}
      label={label}
      controls={controls}
      disabled={disabled}
      popoverProps={{ placement: 'bottom-end' }}
    />
  );
}

/**
 * One line of a list in the right pane: an icon, a title, what it is, a little detail and a menu. The
 * title opens it (a button, or a link when it goes to another screen).
 */
export function Row({
  kind,
  title,
  tag,
  tagTone,
  meta,
  onOpen,
  href,
  menu,
  notes,
  status,
  children,
}) {
  const body = (
    <>
      <KindIcon kind={kind} />
      <span className="ohmylms-ws-row-title">
        {title}
        {notes && <span className="ohmylms-ws-row-notes">{notes}</span>}
      </span>
      {tag && <Tag tone={tagTone}>{tag}</Tag>}
      {status}
      {meta && <span className="ohmylms-ws-row-meta">{meta}</span>}
    </>
  );
  return (
    <li className="ohmylms-ws-row">
      <div className="ohmylms-ws-row-line">
        {href ? (
          <a className="ohmylms-ws-row-main" href={href}>
            {body}
          </a>
        ) : (
          <button type="button" className="ohmylms-ws-row-main" onClick={onOpen}>
            {body}
          </button>
        )}
        {menu}
      </div>
      {children}
    </li>
  );
}

/** Where the selection sits in the syllabus, each step a button that selects it. */
export function Breadcrumb({ nodes, labelOf, onSelect }) {
  return (
    <nav className="ohmylms-ws-crumbs" aria-label={__('Where you are in the syllabus', 'ohmylms')}>
      <ol>
        {nodes.map((node, index) => (
          <li key={node.key}>
            {index === nodes.length - 1 ? (
              <span aria-current="page">{labelOf(node)}</span>
            ) : (
              <button type="button" onClick={() => onSelect(node.key)}>
                {labelOf(node)}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
