import { createElement, useEffect, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, SelectControl, TextControl, TextareaControl } from '@wordpress/components';
import * as api from './api.mjs';
import {
  allGroups,
  containerOptions,
  groupLabel,
  validateContent,
  validateGroup,
  validateSkill,
} from './syllabus.mjs';

const MESSAGES = {
  required: () => __('Enter a name.', 'ohmylms'),
  'too-long': () => __('That is too long.', 'ohmylms'),
};

/** Add a content item (a topic or chapter) directly under the syllabus. */
export function ContentForm({ pending, onSave, onCancel }) {
  const [draft, setDraft] = useState({ name: '', code: '' });
  const [touched, setTouched] = useState(false);
  const errors = validateContent(draft);
  const set = (key) => (value) => setDraft((previous) => ({ ...previous, [key]: value }));
  useEffect(() => {
    document.getElementById('ohmylms-syl-content-name')?.focus();
  }, []);

  function submit(event) {
    event.preventDefault();
    setTouched(true);
    if (Object.keys(errors).length || pending) return;
    onSave({ name: draft.name.trim(), code: draft.code.trim() });
  }
  return (
    <form
      className="ohmylms-syl-form"
      onSubmit={submit}
      noValidate
      aria-label={__('Add content', 'ohmylms')}
    >
      <TextControl
        id="ohmylms-syl-content-name"
        label={__('Topic or chapter', 'ohmylms')}
        value={draft.name}
        onChange={set('name')}
        help={
          touched && errors.name
            ? MESSAGES[errors.name]()
            : __('For example “Number” or “Quadratic equations”.', 'ohmylms')
        }
        __nextHasNoMarginBottom
      />
      <TextControl
        label={__('Code (optional)', 'ohmylms')}
        value={draft.code}
        onChange={set('code')}
        help={
          touched && errors.code
            ? MESSAGES[errors.code]()
            : __('For example 1 or 11.1. A repeated import matches contents by code.', 'ohmylms')
        }
        __nextHasNoMarginBottom
      />
      <div className="ohmylms-syl-form-actions">
        <Button variant="primary" type="submit" isBusy={pending} disabled={pending}>
          {__('Add content', 'ohmylms')}
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          {__('Cancel', 'ohmylms')}
        </Button>
      </div>
    </form>
  );
}

/** Add or edit a skill group: name, code, notes and, when editing, which content item it sits under. */
export function GroupForm({
  outline,
  initial,
  itemId,
  pending,
  onSave,
  onCancel,
  position,
  onStep,
  onDelete,
}) {
  const editing = Boolean(initial);
  const [draft, setDraft] = useState({
    name: initial?.name ?? '',
    code: initial?.code ?? '',
    description: initial?.description ?? '',
    item_id: String(initial?.item_id ?? itemId),
  });
  const [touched, setTouched] = useState(false);
  const errors = validateGroup(draft);
  const set = (key) => (value) => setDraft((previous) => ({ ...previous, [key]: value }));
  const containers = containerOptions(outline);
  const nameId = `ohmylms-syl-group-name-${initial?.id ?? `new-${itemId}`}`;
  useEffect(() => {
    document.getElementById(nameId)?.focus();
  }, [nameId]);

  function submit(event) {
    event.preventDefault();
    setTouched(true);
    if (Object.keys(errors).length || pending) return;
    onSave({
      name: draft.name.trim(),
      code: draft.code.trim(),
      description: draft.description,
      item_id: Number(draft.item_id),
    });
  }
  return (
    <form
      className="ohmylms-syl-form"
      onSubmit={submit}
      noValidate
      aria-label={editing ? __('Edit skill group', 'ohmylms') : __('Add skill group', 'ohmylms')}
    >
      <TextControl
        id={nameId}
        label={__('Skill group name', 'ohmylms')}
        value={draft.name}
        onChange={set('name')}
        help={
          touched && errors.name
            ? MESSAGES[errors.name]()
            : __(
                'For example “Types of number”. Leave it empty to use the code as the name.',
                'ohmylms',
              )
        }
        __nextHasNoMarginBottom
      />
      <TextControl
        label={__('Code (optional)', 'ohmylms')}
        value={draft.code}
        onChange={set('code')}
        help={
          touched && errors.code
            ? MESSAGES[errors.code]()
            : __('For example C1.1. A repeated import matches groups by code.', 'ohmylms')
        }
        __nextHasNoMarginBottom
      />
      <TextareaControl
        label={__('Notes (optional)', 'ohmylms')}
        value={draft.description}
        onChange={set('description')}
        __nextHasNoMarginBottom
      />
      <SelectControl
        label={__('Sits under', 'ohmylms')}
        value={draft.item_id}
        onChange={set('item_id')}
        options={containers.map((option) => ({
          value: String(option.id),
          label: `${'— '.repeat(option.depth)}${option.name}${option.isRoot ? ` ${__('(the syllabus itself)', 'ohmylms')}` : ''}`,
        }))}
        __nextHasNoMarginBottom
      />
      <div className="ohmylms-syl-form-actions">
        <Button variant="primary" type="submit" isBusy={pending} disabled={pending}>
          {editing ? __('Save group', 'ohmylms') : __('Add group', 'ohmylms')}
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          {__('Cancel', 'ohmylms')}
        </Button>
      </div>
      {editing && (
        <div className="ohmylms-syl-form-extra">
          <Button
            variant="secondary"
            size="small"
            disabled={pending || position.index <= 0}
            onClick={() => onStep(-1)}
          >
            <span aria-hidden="true">↑ </span>
            {__('Move up', 'ohmylms')}
          </Button>
          <Button
            variant="secondary"
            size="small"
            disabled={pending || position.index >= position.count - 1}
            onClick={() => onStep(1)}
          >
            <span aria-hidden="true">↓ </span>
            {__('Move down', 'ohmylms')}
          </Button>
          <DeleteGroup group={initial} pending={pending} onDelete={onDelete} />
        </div>
      )}
    </form>
  );
}

/** Add or edit a skill; when adding, an existing library skill can be picked instead. */
export function SkillForm({
  outline,
  groupId,
  initial,
  pending,
  onSave,
  onPlace,
  onCancel,
  position,
  onStep,
  onRemove,
}) {
  const editing = Boolean(initial);
  const [draft, setDraft] = useState({
    name: initial?.name ?? '',
    code: initial?.code ?? '',
    description: initial?.description ?? '',
    group_id: String(groupId),
  });
  const [touched, setTouched] = useState(false);
  const errors = validateSkill(draft);
  const set = (key) => (value) => setDraft((previous) => ({ ...previous, [key]: value }));
  const nameId = `ohmylms-syl-skill-name-${initial?.term_id ?? `new-${groupId}`}`;
  useEffect(() => {
    document.getElementById(nameId)?.focus();
  }, [nameId]);

  function submit(event) {
    event.preventDefault();
    setTouched(true);
    if (Object.keys(errors).length || pending) return;
    onSave({
      name: draft.name.trim(),
      code: draft.code.trim(),
      description: draft.description,
      group_id: Number(draft.group_id),
    });
  }
  return (
    <div className="ohmylms-syl-form-wrap">
      <form
        className="ohmylms-syl-form"
        onSubmit={submit}
        noValidate
        aria-label={editing ? __('Edit skill', 'ohmylms') : __('Add skill', 'ohmylms')}
      >
        <TextControl
          id={nameId}
          label={__('Skill', 'ohmylms')}
          value={draft.name}
          onChange={set('name')}
          help={
            touched && errors.name
              ? MESSAGES[errors.name]()
              : __('The learning objective, for example “Identify prime numbers”.', 'ohmylms')
          }
          __nextHasNoMarginBottom
        />
        <TextControl
          label={__('Code (optional)', 'ohmylms')}
          value={draft.code}
          onChange={set('code')}
          help={
            touched && errors.code
              ? MESSAGES[errors.code]()
              : __('For example C1.1.1. Codes are unique within the syllabus.', 'ohmylms')
          }
          __nextHasNoMarginBottom
        />
        <TextareaControl
          label={__('Notes or examples (optional)', 'ohmylms')}
          value={draft.description}
          onChange={set('description')}
          help={touched && errors.description ? MESSAGES[errors.description]() : undefined}
          __nextHasNoMarginBottom
        />
        {editing && (
          <SelectControl
            label={__('Skill group', 'ohmylms')}
            value={draft.group_id}
            onChange={set('group_id')}
            options={allGroups(outline).map(({ group }) => ({
              value: String(group.id),
              label: groupLabel(group),
            }))}
            __nextHasNoMarginBottom
          />
        )}
        <div className="ohmylms-syl-form-actions">
          <Button variant="primary" type="submit" isBusy={pending} disabled={pending}>
            {editing ? __('Save skill', 'ohmylms') : __('Add skill', 'ohmylms')}
          </Button>
          <Button variant="secondary" onClick={onCancel}>
            {__('Cancel', 'ohmylms')}
          </Button>
        </div>
        {editing && (
          <div className="ohmylms-syl-form-extra">
            <Button
              variant="secondary"
              size="small"
              disabled={pending || position.index <= 0}
              onClick={() => onStep(-1)}
            >
              <span aria-hidden="true">↑ </span>
              {__('Move up', 'ohmylms')}
            </Button>
            <Button
              variant="secondary"
              size="small"
              disabled={pending || position.index >= position.count - 1}
              onClick={() => onStep(1)}
            >
              <span aria-hidden="true">↓ </span>
              {__('Move down', 'ohmylms')}
            </Button>
            <Button
              variant="secondary"
              size="small"
              isDestructive
              disabled={pending}
              onClick={onRemove}
            >
              {__('Remove from this group', 'ohmylms')}
            </Button>
          </div>
        )}
      </form>
      {!editing && <ExistingSkill outline={outline} pending={pending} onPlace={onPlace} />}
    </div>
  );
}

/** Find a skill already in the library and place it in this group. */
function ExistingSkill({ outline, pending, onPlace }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const placed = new Set(
    allGroups(outline).flatMap(({ group }) => group.skills.map((skill) => skill.term_id)),
  );
  useEffect(() => {
    if (!open) return undefined;
    let current = true;
    const timer = setTimeout(
      () => {
        api
          .searchTargets('skill', search)
          .then((rows) => current && (setResults(rows || []), setError('')))
          .catch(
            (cause) =>
              current &&
              (setResults([]), setError(cause?.message || __('Could not search.', 'ohmylms'))),
          );
      },
      search ? 300 : 0,
    );
    return () => {
      current = false;
      clearTimeout(timer);
    };
  }, [open, search]);
  const available = results.filter((row) => !placed.has(row.id));
  return (
    <details
      className="ohmylms-syl-existing"
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary>{__('Or add a skill that is already in the skill library', 'ohmylms')}</summary>
      <TextControl
        label={__('Find a skill', 'ohmylms')}
        type="search"
        value={search}
        onChange={setSearch}
        __nextHasNoMarginBottom
      />
      {error && <p role="alert">{error}</p>}
      {open && !error && !available.length && (
        <p className="ohmylms-ext-muted">{__('No more matches.', 'ohmylms')}</p>
      )}
      <ul className="ohmylms-cur-link-list ohmylms-cur-link-results">
        {available.map((row) => (
          <li key={row.id}>
            <span>
              {row.title}
              {row.code ? ` (${row.code})` : ''}
            </span>
            <Button
              variant="secondary"
              size="small"
              disabled={pending}
              aria-label={sprintf(__('Add %s to this skill group', 'ohmylms'), row.title)}
              onClick={() => onPlace(row.id)}
            >
              {__('Add', 'ohmylms')}
            </Button>
          </li>
        ))}
      </ul>
    </details>
  );
}

/** Two-step group deletion. The skills in it stay in the skill library. */
export function DeleteGroup({ group, pending, onDelete }) {
  const [confirming, setConfirming] = useState(false);
  const skills = group.skills.length;
  if (!confirming) {
    return (
      <Button
        variant="secondary"
        isDestructive
        size="small"
        disabled={pending}
        aria-label={sprintf(__('Delete skill group %s…', 'ohmylms'), groupLabel(group))}
        onClick={() => setConfirming(true)}
      >
        {__('Delete…', 'ohmylms')}
      </Button>
    );
  }
  return (
    <div
      className="ohmylms-syl-delete"
      role="group"
      aria-label={sprintf(__('Confirm deleting %s', 'ohmylms'), groupLabel(group))}
    >
      <p>
        {skills
          ? sprintf(
              _n(
                'Delete this group? Its %d skill stays in the skill library but leaves the syllabus outline.',
                'Delete this group? Its %d skills stay in the skill library but leave the syllabus outline.',
                skills,
                'ohmylms',
              ),
              skills,
            )
          : __('Delete this empty group?', 'ohmylms')}
      </p>
      <Button
        variant="primary"
        isDestructive
        size="small"
        isBusy={pending}
        disabled={pending}
        onClick={() => onDelete(skills > 0)}
      >
        {__('Delete group', 'ohmylms')}
      </Button>
      <Button variant="secondary" size="small" onClick={() => setConfirming(false)}>
        {__('Cancel', 'ohmylms')}
      </Button>
    </div>
  );
}
