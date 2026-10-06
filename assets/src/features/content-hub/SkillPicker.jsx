import { createElement, useEffect, useRef, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import {
  Button,
  CheckboxControl,
  Modal,
  Notice,
  Spinner,
  TextControl,
} from '@wordpress/components';
import { createSkill } from '../question-bank/api.mjs';
import { searchTargets } from './api.mjs';

const label = (skill) => `${skill.code ? `${skill.code} · ` : ''}${skill.name}`;

/**
 * Choose skills from the shared library, or create one on the spot. Skills are shared, so choosing is a
 * reference: nothing is copied, and the same skill can sit in many courses and lessons.
 *
 * `initial` skills start checked. With `courseId`, skills the course already has are left out.
 */
export function SkillPicker({
  title,
  confirmLabel,
  initial = [],
  courseId = 0,
  onConfirm,
  onClose,
}) {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(null);
  const [selected, setSelected] = useState(
    () => new Map(initial.map((skill) => [skill.id, skill])),
  );
  const [draft, setDraft] = useState({ name: '', code: '' });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const latest = useRef(0);

  useEffect(() => {
    const id = ++latest.current;
    const timer = setTimeout(() => {
      searchTargets({ type: 'skill', search, course: courseId })
        .then((data) => {
          if (id === latest.current)
            setResults(
              (data.items || []).map((row) => ({
                id: row.id,
                name: row.title,
                code: row.code,
                questions: row.questions,
              })),
            );
        })
        .catch((cause) => {
          if (id === latest.current) {
            setResults([]);
            setError(cause.message || __('Could not load skills.', 'ohmylms'));
          }
        });
    }, 250);
    return () => clearTimeout(timer);
  }, [search, courseId]);

  const toggle = (skill, checked) =>
    setSelected((current) => {
      const next = new Map(current);
      if (checked) next.set(skill.id, skill);
      else next.delete(skill.id);
      return next;
    });

  async function create() {
    if (!draft.name.trim() || busy) return;
    setBusy(true);
    setError('');
    try {
      const skill = await createSkill({ name: draft.name.trim(), code: draft.code.trim() });
      const entry = { id: skill.id, name: skill.name, code: skill.code || '', questions: 0 };
      setResults((rows) => [entry, ...(rows || [])]);
      toggle(entry, true);
      setDraft({ name: '', code: '' });
    } catch (cause) {
      setError(cause.message || __('Could not create the skill.', 'ohmylms'));
    } finally {
      setBusy(false);
    }
  }

  // Selected skills that the current search does not show stay visible, so nothing is picked blind.
  const shown = new Set((results || []).map((row) => row.id));
  const hidden = [...selected.values()].filter((skill) => !shown.has(skill.id));
  return (
    <Modal
      title={title}
      onRequestClose={onClose}
      className="ohmylms-content-hub-dialog ohmylms-skill-picker"
    >
      {error && (
        <Notice status="error" onRemove={() => setError('')}>
          {error}
        </Notice>
      )}
      <TextControl
        label={__('Search skills', 'ohmylms')}
        type="search"
        value={search}
        onChange={setSearch}
        __nextHasNoMarginBottom
      />
      <div className="ohmylms-skill-picker-list" role="group" aria-label={__('Skills', 'ohmylms')}>
        {results === null && <Spinner />}
        {results !== null && !results.length && !hidden.length && (
          <p className="ohmylms-ext-muted">
            {__('No matching skills. Create one below.', 'ohmylms')}
          </p>
        )}
        {[...hidden, ...(results || [])].map((skill) => (
          <CheckboxControl
            key={skill.id}
            label={label(skill)}
            checked={selected.has(skill.id)}
            onChange={(checked) => toggle(skill, checked)}
            __nextHasNoMarginBottom
          />
        ))}
      </div>
      <details className="ohmylms-skill-picker-create">
        <summary>{__('Create a new skill', 'ohmylms')}</summary>
        <TextControl
          label={__('Name', 'ohmylms')}
          value={draft.name}
          onChange={(name) => setDraft({ ...draft, name })}
          __nextHasNoMarginBottom
        />
        <TextControl
          label={__('Code (optional)', 'ohmylms')}
          help={__('Shown beside the name, like A.1 in a skill catalog.', 'ohmylms')}
          value={draft.code}
          onChange={(code) => setDraft({ ...draft, code })}
          __nextHasNoMarginBottom
        />
        <Button
          variant="secondary"
          isBusy={busy}
          disabled={!draft.name.trim() || busy}
          onClick={create}
        >
          {__('Create skill', 'ohmylms')}
        </Button>
      </details>
      <div className="ohmylms-content-hub-dialog-actions">
        <span className="ohmylms-ext-muted" aria-live="polite">
          {sprintf(
            _n('%d skill selected', '%d skills selected', selected.size, 'ohmylms'),
            selected.size,
          )}
        </span>
        <Button variant="tertiary" onClick={onClose}>
          {__('Cancel', 'ohmylms')}
        </Button>
        <Button variant="primary" onClick={() => onConfirm([...selected.values()])}>
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
}
