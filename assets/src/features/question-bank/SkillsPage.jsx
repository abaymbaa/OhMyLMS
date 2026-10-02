import { createElement, Fragment, useEffect, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
  Button,
  CheckboxControl,
  Notice,
  SelectControl,
  Spinner,
  TextControl,
  TextareaControl,
} from '@wordpress/components';
import {
  listSkills,
  createSkill,
  updateSkill,
  deleteSkill,
  linkSkillLessons,
  searchLessons,
} from './api.mjs';
import { createsCycle, flattenTree, skillTree } from './model.mjs';

const EMPTY = {
  id: 0,
  name: '',
  code: '',
  description: '',
  parent: 0,
  prerequisites: [],
  lessons: [],
};

/** Skill catalogue: hierarchy, prerequisites (acyclic) and linked lessons. */
export function SkillsPage() {
  const [skills, setSkills] = useState(null);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState('');
  const load = () =>
    listSkills()
      .then((data) => setSkills(data.skills || []))
      .catch((cause) => setError(cause.message || __('Could not load skills.', 'ohmylms')));
  useEffect(() => {
    load();
  }, []);
  const tree = flattenTree(skillTree(skills || []));
  return (
    <section className="ohmylms-skills">
      <h1>{__('Skills', 'ohmylms')}</h1>
      <p>
        {__(
          'Skills are linked to questions (per part) and lessons. They power skill practice, performance reports and recommendations.',
          'ohmylms',
        )}
      </p>
      {error && (
        <Notice status="error" onRemove={() => setError('')}>
          {error}
        </Notice>
      )}
      <Button variant="primary" onClick={() => setEditing({ ...EMPTY })}>
        {__('Add skill', 'ohmylms')}
      </Button>
      {!skills ? (
        <Spinner />
      ) : (
        <table className="widefat striped" style={{ marginTop: 12 }}>
          <thead>
            <tr>
              <th>{__('Skill', 'ohmylms')}</th>
              <th>{__('Code', 'ohmylms')}</th>
              <th>{__('Prerequisites', 'ohmylms')}</th>
              <th>{__('Questions', 'ohmylms')}</th>
              <th>{__('Lessons', 'ohmylms')}</th>
            </tr>
          </thead>
          <tbody>
            {tree.map((skill) => (
              <tr key={skill.id}>
                <td style={{ paddingLeft: 8 + skill.depth * 20 }}>
                  <Button variant="link" onClick={() => setEditing(skill)}>
                    {skill.name}
                  </Button>
                </td>
                <td>{skill.code}</td>
                <td>
                  {skill.prerequisites
                    .map((id) => skills.find((other) => other.id === id)?.name)
                    .filter(Boolean)
                    .join(', ')}
                </td>
                <td>{skill.questions}</td>
                <td>{skill.lessons.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {editing && (
        <SkillForm
          skill={editing}
          skills={skills || []}
          onCancel={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            load();
          }}
          onError={setError}
        />
      )}
    </section>
  );
}

function SkillForm({ skill, skills, onCancel, onSaved, onError }) {
  const [draft, setDraft] = useState(skill);
  const [saving, setSaving] = useState(false);
  const [lessonSearch, setLessonSearch] = useState('');
  const [lessonResults, setLessonResults] = useState([]);
  useEffect(() => {
    if (!lessonSearch.trim()) return setLessonResults([]);
    const timer = setTimeout(() => {
      searchLessons(lessonSearch)
        .then((data) => setLessonResults(Array.isArray(data) ? data : data?.data || []))
        .catch(() => setLessonResults([]));
    }, 300);
    return () => clearTimeout(timer);
  }, [lessonSearch]);
  const set = (key) => (value) => setDraft({ ...draft, [key]: value });
  async function save() {
    setSaving(true);
    try {
      const body = {
        name: draft.name,
        code: draft.code,
        description: draft.description,
        parent: Number(draft.parent) || 0,
        prerequisites: draft.prerequisites,
      };
      const saved = draft.id ? await updateSkill(draft.id, body) : await createSkill(body);
      await linkSkillLessons(saved.id, draft.lessons);
      onSaved();
    } catch (cause) {
      onError(cause.message || __('Could not save the skill.', 'ohmylms'));
    } finally {
      setSaving(false);
    }
  }
  async function remove() {
    try {
      await deleteSkill(draft.id);
      onSaved();
    } catch (cause) {
      onError(cause.message);
    }
  }
  const others = flattenTree(skillTree(skills)).filter((other) => other.id !== draft.id);
  return (
    <div
      className="ohmylms-skill-form"
      style={{ border: '1px solid #ddd', padding: 16, marginTop: 16, background: '#fff' }}
    >
      <h2>
        {draft.id ? sprintf(__('Edit %s', 'ohmylms'), skill.name) : __('New skill', 'ohmylms')}
      </h2>
      <TextControl label={__('Name', 'ohmylms')} value={draft.name} onChange={set('name')} />
      <TextControl
        label={__('Code (optional)', 'ohmylms')}
        value={draft.code}
        onChange={set('code')}
      />
      <TextareaControl
        label={__('Description', 'ohmylms')}
        value={draft.description}
        onChange={set('description')}
      />
      <SelectControl
        label={__('Parent (strand or domain)', 'ohmylms')}
        value={String(draft.parent || 0)}
        options={[
          { value: '0', label: __('— top level —', 'ohmylms') },
          ...others.map((other) => ({
            value: String(other.id),
            label: `${'— '.repeat(other.depth)}${other.name}`,
          })),
        ]}
        onChange={set('parent')}
      />
      <fieldset>
        <legend>{__('Prerequisites', 'ohmylms')}</legend>
        {others.map((other) => {
          const blocked = draft.id && createsCycle(skills, draft.id, other.id);
          return (
            <CheckboxControl
              key={other.id}
              label={other.name + (blocked ? ` (${__('would create a cycle', 'ohmylms')})` : '')}
              disabled={blocked && !draft.prerequisites.includes(other.id)}
              checked={draft.prerequisites.includes(other.id)}
              onChange={(checked) =>
                set('prerequisites')(
                  checked
                    ? [...draft.prerequisites, other.id]
                    : draft.prerequisites.filter((id) => id !== other.id),
                )
              }
            />
          );
        })}
      </fieldset>
      <fieldset>
        <legend>{__('Linked lessons', 'ohmylms')}</legend>
        <p>
          {draft.lessons.length
            ? draft.lessons.map((id) => `#${id}`).join(', ')
            : __('None yet.', 'ohmylms')}
        </p>
        <TextControl
          label={__('Find lessons', 'ohmylms')}
          value={lessonSearch}
          onChange={setLessonSearch}
        />
        {lessonResults.map((lesson) => (
          <CheckboxControl
            key={lesson.id}
            label={lesson.name || lesson.title?.rendered || `#${lesson.id}`}
            checked={draft.lessons.includes(lesson.id)}
            onChange={(checked) =>
              set('lessons')(
                checked
                  ? [...draft.lessons, lesson.id]
                  : draft.lessons.filter((id) => id !== lesson.id),
              )
            }
          />
        ))}
      </fieldset>
      <Button variant="primary" isBusy={saving} disabled={!draft.name.trim()} onClick={save}>
        {__('Save skill', 'ohmylms')}
      </Button>{' '}
      <Button variant="tertiary" onClick={onCancel}>
        {__('Cancel', 'ohmylms')}
      </Button>{' '}
      {draft.id > 0 && (
        <Button variant="tertiary" isDestructive onClick={remove}>
          {__('Delete', 'ohmylms')}
        </Button>
      )}
    </div>
  );
}
