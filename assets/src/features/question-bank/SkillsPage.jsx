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
  linkSkillPosts,
  linkTargetTitles,
  searchLinkTargets,
} from './api.mjs';
import { createsCycle, flattenTree, skillTree } from './model.mjs';
import { AdminCard, AdminPage } from '../../extensions/AdminPage';

const EMPTY = {
  id: 0,
  name: '',
  code: '',
  description: '',
  parent: 0,
  prerequisites: [],
  lessons: [],
  courses: [],
};

/** Skill catalogue: hierarchy, prerequisites (acyclic) and linked lessons and courses. */
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
    <AdminPage
      className="ohmylms-skills"
      title={__('Skills', 'ohmylms')}
      description={__(
        'Skills are linked to questions (per part), lessons and courses. They power skill practice, performance reports and recommendations.',
        'ohmylms',
      )}
      actions={
        <Button variant="primary" onClick={() => setEditing({ ...EMPTY })}>
          {__('Add skill', 'ohmylms')}
        </Button>
      }
    >
      {error && (
        <Notice status="error" onRemove={() => setError('')}>
          {error}
        </Notice>
      )}
      {!skills ? (
        <Spinner />
      ) : (
        <AdminCard>
          <div className="ohmylms-ext-table-scroll">
            <table className="widefat striped">
              <thead>
                <tr>
                  <th>{__('Skill', 'ohmylms')}</th>
                  <th>{__('Code', 'ohmylms')}</th>
                  <th>{__('Prerequisites', 'ohmylms')}</th>
                  <th>{__('Questions', 'ohmylms')}</th>
                  <th>{__('Lessons', 'ohmylms')}</th>
                  <th>{__('Courses', 'ohmylms')}</th>
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
                    <td>{(skill.courses || []).length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminCard>
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
    </AdminPage>
  );
}

function SkillForm({ skill, skills, onCancel, onSaved, onError }) {
  const [draft, setDraft] = useState({ ...skill, courses: skill.courses || [] });
  const [saving, setSaving] = useState(false);
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
      await linkSkillPosts(saved.id, 'lessons', draft.lessons);
      await linkSkillPosts(saved.id, 'courses', draft.courses);
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
    <div className="ohmylms-skill-form ohmylms-ext-card">
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
      <LinkedPosts
        type="lesson"
        legend={__('Linked lessons', 'ohmylms')}
        searchLabel={__('Find lessons', 'ohmylms')}
        value={draft.lessons}
        onChange={set('lessons')}
      />
      <LinkedPosts
        type="course"
        legend={__('Linked courses', 'ohmylms')}
        searchLabel={__('Find courses', 'ohmylms')}
        value={draft.courses}
        onChange={set('courses')}
      />
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

/** Linked lessons or courses: current links by title (removable) and a search to add more. */
function LinkedPosts({ type, legend, searchLabel, value, onChange }) {
  const [titles, setTitles] = useState({});
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const remember = (rows) =>
    setTitles((known) => ({
      ...known,
      ...Object.fromEntries((rows || []).map((row) => [row.id, row.title])),
    }));
  useEffect(() => {
    const missing = value.filter((id) => !(id in titles));
    if (missing.length)
      linkTargetTitles(type, missing)
        .then(remember)
        .catch(() => {});
  }, [type, value.join(',')]);
  useEffect(() => {
    if (!search.trim()) return setResults([]);
    const timer = setTimeout(() => {
      searchLinkTargets(type, search)
        .then((rows) => {
          remember(rows);
          setResults(rows || []);
        })
        .catch(() => setResults([]));
    }, 300);
    return () => clearTimeout(timer);
  }, [type, search]);
  const toggle = (id, checked) =>
    onChange(checked ? [...value, id] : value.filter((other) => other !== id));
  return (
    <fieldset className={`ohmylms-skill-links ohmylms-skill-links-${type}`}>
      <legend>{legend}</legend>
      {value.length ? (
        <ul>
          {value.map((id) => (
            <li key={id}>
              {titles[id] || `#${id}`}{' '}
              <Button
                variant="link"
                isDestructive
                label={sprintf(__('Unlink %s', 'ohmylms'), titles[id] || `#${id}`)}
                onClick={() => toggle(id, false)}
              >
                {__('Unlink', 'ohmylms')}
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>{__('None yet.', 'ohmylms')}</p>
      )}
      <TextControl label={searchLabel} value={search} onChange={setSearch} />
      {results.map((row) => (
        <CheckboxControl
          key={row.id}
          label={row.title}
          checked={value.includes(row.id)}
          onChange={(checked) => toggle(row.id, checked)}
        />
      ))}
    </fieldset>
  );
}
