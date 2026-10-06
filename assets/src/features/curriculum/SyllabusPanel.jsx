import { createElement, useEffect, useRef, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, Spinner } from '@wordpress/components';
import { useCurriculum } from './context';
import * as api from './api.mjs';
import { ImportDialog } from './ImportDialog';
import { ContentForm, DeleteGroup, GroupForm, SkillForm } from './SyllabusForms';
import { outlineCsv, templateCsv } from './csv.mjs';
import { download } from './download.mjs';
import { allGroups, fileName, groupLabel, stepPosition, totalsParts } from './syllabus.mjs';

/** Open every skill group by default unless the syllabus is large enough that a long page would be hard to scan. */
const OPEN_ALL_LIMIT = 60;

/** Which skill groups start open: all of them for a small syllabus, none for a large one. */
const openByDefault = (outline) =>
  new Set(
    outline.totals.skills <= OPEN_ALL_LIMIT
      ? outline.contents.flatMap((content) => content.groups.map((group) => group.id))
      : [],
  );

const pick = (response) => ({
  syllabus: response.syllabus,
  contents: response.contents,
  totals: response.totals,
  root_skill: response.root_skill,
});

function counts(totals) {
  const { contents, groups, skills } = totalsParts(totals);
  return [
    sprintf(_n('%d content item', '%d content items', contents, 'ohmylms'), contents),
    sprintf(_n('%d skill group', '%d skill groups', groups, 'ohmylms'), groups),
    sprintf(_n('%d skill', '%d skills', skills, 'ohmylms'), skills),
  ].join(' · ');
}

/**
 * The syllabus itself: its contents (topics and chapters, which are ordinary items beneath it), the
 * skill groups under each, and the skills in each group. Skills are library skills, so removing one
 * from a group or deleting a group never deletes the skill.
 */
export function SyllabusPanel({ item, reveal = false }) {
  const c = useCurriculum();
  const section = useRef(null);
  const [outline, setOutline] = useState(null);
  const [loadError, setLoadError] = useState('');
  const [form, setForm] = useState(null);
  const [importing, setImporting] = useState(false);
  const [open, setOpen] = useState(() => new Set());

  useEffect(() => {
    let current = true;
    setOutline(null);
    setLoadError('');
    api
      .loadSyllabus(item.id)
      .then((response) => {
        if (!current) return;
        setOutline(pick(response));
        setOpen(openByDefault(response));
      })
      .catch(
        (error) =>
          current && setLoadError(error?.message || __('Could not load the syllabus.', 'ohmylms')),
      );
    return () => {
      current = false;
    };
  }, [item.id]);

  // Switching an item into a syllabus adds this panel below the details form: bring it into view once.
  const ready = Boolean(outline);
  useEffect(() => {
    if (reveal && ready) section.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [reveal, ready]);

  /** Run a guarded server change and adopt the outline it answers with. */
  async function change(work, success) {
    const response = await c.actions.run(work, success);
    if (response?.contents) setOutline(pick(response));
    return response;
  }
  const show = (id) => setOpen((previous) => new Set(previous).add(id));
  const toggle = (id) =>
    setOpen((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  if (loadError) return <p role="alert">{loadError}</p>;
  if (!outline) return <Spinner />;
  const empty = outline.totals.groups === 0;
  const groups = allGroups(outline);

  /** A topic or chapter is an ordinary curriculum item under the syllabus; reload the outline to list it. */
  async function saveContent(data) {
    const ok = await c.actions.create(item.id, {
      name: data.name,
      code: data.code,
      item_type: 'topic',
    });
    if (!ok) return;
    setForm(null);
    api
      .loadSyllabus(item.id)
      .then((response) => setOutline(pick(response)))
      .catch(() => setLoadError(__('Could not load the syllabus.', 'ohmylms')));
  }

  async function saveGroup(initial, itemId, data) {
    const ok = initial
      ? await change(
          async () => {
            const updated = await api.updateGroup(item.id, initial.id, {
              name: data.name,
              code: data.code,
              description: data.description,
            });
            return data.item_id !== initial.item_id
              ? api.moveGroup(item.id, initial.id, data.item_id)
              : updated;
          },
          __('Skill group saved.', 'ohmylms'),
        )
      : await change(
          () => api.addGroup(item.id, { ...data, item_id: data.item_id || itemId }),
          __('Skill group added.', 'ohmylms'),
        );
    if (ok) {
      if (ok.group_id) show(ok.group_id);
      setForm(null);
    }
  }

  async function saveSkill(groupId, initial, data) {
    const ok = initial
      ? await change(
          async () => {
            const updated = await api.updateSkill(item.id, initial.term_id, {
              name: data.name,
              code: data.code,
              description: data.description,
            });
            return data.group_id !== groupId
              ? api.moveSkill(item.id, groupId, initial.term_id, data.group_id)
              : updated;
          },
          __('Skill saved.', 'ohmylms'),
        )
      : await change(
          () =>
            api.addSkill(item.id, groupId, {
              name: data.name,
              code: data.code,
              description: data.description,
            }),
          __('Skill added.', 'ohmylms'),
        );
    if (ok) setForm(null);
  }

  return (
    <section ref={section} className="ohmylms-syl" aria-label={__('Syllabus content', 'ohmylms')}>
      <div className="ohmylms-syl-head">
        <div>
          <h3>{__('Syllabus content', 'ohmylms')}</h3>
          <p className="ohmylms-ext-muted">{counts(outline.totals)}</p>
        </div>
        <div className="ohmylms-syl-tools">
          <Button variant="primary" onClick={() => setImporting(true)} disabled={c.pending}>
            {__('Import CSV', 'ohmylms')}
          </Button>
          <Button
            variant="secondary"
            disabled={empty}
            onClick={() => download(outlineCsv(outline), fileName(item.name, 'export'))}
          >
            {__('Export CSV', 'ohmylms')}
          </Button>
          <Button
            variant="secondary"
            onClick={() => download(templateCsv(), fileName(item.name, 'template'))}
          >
            {__('Download template', 'ohmylms')}
          </Button>
          <Button
            variant="secondary"
            disabled={c.pending}
            onClick={() => setForm({ kind: 'content-add' })}
          >
            {__('Add content', 'ohmylms')}
          </Button>
          <Button
            variant="secondary"
            disabled={c.pending}
            onClick={() => setForm({ kind: 'group-add', itemId: outline.syllabus.id })}
          >
            {__('Add skill group', 'ohmylms')}
          </Button>
        </div>
      </div>

      {empty && (
        <p className="ohmylms-ext-muted">
          {outline.totals.contents === 0
            ? __(
                'Nothing is in this syllabus yet. Add the topics or chapters with Add content, then add skill groups and skills to each, or import them all from a CSV file with one skill per row.',
                'ohmylms',
              )
            : __(
                'No skill groups yet. Add a skill group to a topic or chapter, then add its skills, or import them from a CSV file with one skill per row.',
                'ohmylms',
              )}
        </p>
      )}

      {form?.kind === 'content-add' && (
        <ContentForm pending={c.pending} onSave={saveContent} onCancel={() => setForm(null)} />
      )}

      {groups.length > 1 && (
        <p className="ohmylms-syl-expand">
          <Button
            variant="link"
            onClick={() => setOpen(new Set(groups.map(({ group }) => group.id)))}
          >
            {__('Open all groups', 'ohmylms')}
          </Button>
          {' · '}
          <Button variant="link" onClick={() => setOpen(new Set())}>
            {__('Close all groups', 'ohmylms')}
          </Button>
        </p>
      )}

      {form?.kind === 'group-add' && form.itemId === outline.syllabus.id && (
        <GroupForm
          outline={outline}
          itemId={form.itemId}
          pending={c.pending}
          onSave={(data) => saveGroup(null, form.itemId, data)}
          onCancel={() => setForm(null)}
        />
      )}

      {outline.contents.map((content) => {
        const root = content.depth === 0;
        if (root && !content.groups.length) return null;
        return (
          <div
            key={content.id}
            className="ohmylms-syl-content"
            style={{ '--ohmylms-syl-depth': Math.max(0, content.depth - 1) }}
          >
            {!root && (
              <div className="ohmylms-syl-content-head">
                <h4>
                  {content.code ? <span className="ohmylms-syl-code">{content.code}</span> : null}
                  {content.name}
                </h4>
                <Button
                  variant="secondary"
                  size="small"
                  disabled={c.pending}
                  aria-label={sprintf(__('Add skill group to %s', 'ohmylms'), content.name)}
                  onClick={() => setForm({ kind: 'group-add', itemId: content.id })}
                >
                  {__('Add skill group', 'ohmylms')}
                </Button>
              </div>
            )}
            {form?.kind === 'group-add' && form.itemId === content.id && !root && (
              <GroupForm
                outline={outline}
                itemId={form.itemId}
                pending={c.pending}
                onSave={(data) => saveGroup(null, form.itemId, data)}
                onCancel={() => setForm(null)}
              />
            )}
            {content.groups.length > 0 && (
              <ul className="ohmylms-syl-groups">
                {content.groups.map((group) => (
                  <li key={group.id} className="ohmylms-syl-group">
                    <GroupHead
                      group={group}
                      open={open.has(group.id)}
                      pending={c.pending}
                      editing={form?.kind === 'group-edit' && form.id === group.id}
                      onToggle={() => toggle(group.id)}
                      onEdit={() => setForm({ kind: 'group-edit', id: group.id })}
                      onAddSkill={() => {
                        show(group.id);
                        setForm({ kind: 'skill-add', groupId: group.id });
                      }}
                    />
                    {form?.kind === 'group-edit' && form.id === group.id && (
                      <GroupForm
                        outline={outline}
                        initial={group}
                        itemId={group.item_id}
                        pending={c.pending}
                        onSave={(data) => saveGroup(group, group.item_id, data)}
                        onCancel={() => setForm(null)}
                        position={{
                          index: content.groups.findIndex((entry) => entry.id === group.id),
                          count: content.groups.length,
                        }}
                        onStep={(direction) => {
                          const target = stepPosition(
                            content.groups.map((entry) => entry.id),
                            group.id,
                            direction,
                          );
                          if (target !== null)
                            change(() => api.moveGroup(item.id, group.id, group.item_id, target));
                        }}
                        onDelete={async (confirm) => {
                          const ok = await change(
                            () => api.deleteGroup(item.id, group.id, confirm),
                            __(
                              'Skill group deleted. Its skills stay in the skill library.',
                              'ohmylms',
                            ),
                          );
                          if (ok) setForm(null);
                        }}
                      />
                    )}
                    {open.has(group.id) && (
                      <>
                        {group.skills.length > 0 ? (
                          <ol className="ohmylms-syl-skills">
                            {group.skills.map((skill, index) => (
                              <li key={skill.term_id}>
                                {form?.kind === 'skill-edit' &&
                                form.groupId === group.id &&
                                form.term === skill.term_id ? (
                                  <SkillForm
                                    outline={outline}
                                    groupId={group.id}
                                    initial={skill}
                                    pending={c.pending}
                                    onSave={(data) => saveSkill(group.id, skill, data)}
                                    onCancel={() => setForm(null)}
                                    position={{ index, count: group.skills.length }}
                                    onStep={(direction) => {
                                      const target = stepPosition(
                                        group.skills.map((entry) => entry.term_id),
                                        skill.term_id,
                                        direction,
                                      );
                                      if (target !== null)
                                        change(() =>
                                          api.moveSkill(
                                            item.id,
                                            group.id,
                                            skill.term_id,
                                            group.id,
                                            target,
                                          ),
                                        );
                                    }}
                                    onRemove={async () => {
                                      const ok = await change(
                                        () => api.removeSkill(item.id, group.id, skill.term_id),
                                        __(
                                          'Skill removed from the group. It stays in the skill library.',
                                          'ohmylms',
                                        ),
                                      );
                                      if (ok) setForm(null);
                                    }}
                                  />
                                ) : (
                                  <SkillRow
                                    skill={skill}
                                    pending={c.pending}
                                    onEdit={() =>
                                      setForm({
                                        kind: 'skill-edit',
                                        groupId: group.id,
                                        term: skill.term_id,
                                      })
                                    }
                                  />
                                )}
                              </li>
                            ))}
                          </ol>
                        ) : (
                          <p className="ohmylms-ext-muted ohmylms-syl-none">
                            {__('No skills in this group yet.', 'ohmylms')}
                          </p>
                        )}
                        {form?.kind === 'skill-add' && form.groupId === group.id && (
                          <SkillForm
                            outline={outline}
                            groupId={group.id}
                            pending={c.pending}
                            onSave={(data) => saveSkill(group.id, null, data)}
                            onPlace={async (termId) => {
                              const ok = await change(
                                () => api.addSkill(item.id, group.id, { term_id: termId }),
                                __('Skill added.', 'ohmylms'),
                              );
                              if (ok) setForm(null);
                            }}
                            onCancel={() => setForm(null)}
                          />
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}

      {importing && (
        <ImportDialog
          syllabus={outline.syllabus}
          onClose={() => setImporting(false)}
          onImported={(response) => {
            if (response.contents) {
              setOutline(pick(response));
              setOpen(openByDefault(response));
            }
            if (response.items) c.actions.applyItems(response.items);
            c.actions.say('success', __('Syllabus imported.', 'ohmylms'));
          }}
        />
      )}
    </section>
  );
}

function GroupHead({ group, open, pending, editing, onToggle, onEdit, onAddSkill }) {
  const label = groupLabel(group);
  const skills = group.skills.length;
  return (
    <div className={`ohmylms-syl-group-head${editing ? ' is-editing' : ''}`}>
      <button
        type="button"
        className="ohmylms-cur-toggle"
        aria-expanded={open}
        aria-label={sprintf(
          open ? __('Collapse %s', 'ohmylms') : __('Expand %s', 'ohmylms'),
          label,
        )}
        onClick={onToggle}
      >
        <span aria-hidden="true">{open ? '▾' : '▸'}</span>
      </button>
      <span className="ohmylms-syl-group-name">{label}</span>
      <span className="ohmylms-cur-counts">
        {sprintf(_n('%d skill', '%d skills', skills, 'ohmylms'), skills)}
      </span>
      <span className="ohmylms-cur-actions">
        <Button
          variant="secondary"
          size="small"
          disabled={pending}
          aria-label={sprintf(__('Edit skill group %s', 'ohmylms'), label)}
          onClick={onEdit}
        >
          {__('Edit', 'ohmylms')}
        </Button>
        <Button
          variant="secondary"
          size="small"
          disabled={pending}
          aria-label={sprintf(__('Add skill to %s', 'ohmylms'), label)}
          onClick={onAddSkill}
        >
          {__('Add skill', 'ohmylms')}
        </Button>
      </span>
    </div>
  );
}

/** One skill. Reordering and removing live in its edit form, which keeps a long list quiet to scan. */
function SkillRow({ skill, pending, onEdit }) {
  const label = skill.code ? `${skill.code} ${skill.name}` : skill.name;
  return (
    <div className="ohmylms-syl-skill">
      {skill.code ? (
        <span className="ohmylms-syl-code">{skill.code}</span>
      ) : (
        <span className="ohmylms-syl-code is-empty" aria-hidden="true">
          –
        </span>
      )}
      <span className="ohmylms-syl-skill-text">
        <span className="ohmylms-syl-skill-name">{skill.name}</span>
        {skill.description && (
          <span className="ohmylms-ext-muted ohmylms-syl-skill-notes">{skill.description}</span>
        )}
      </span>
      <span className="ohmylms-cur-actions">
        <Button
          variant="secondary"
          size="small"
          disabled={pending}
          aria-label={sprintf(__('Edit skill %s', 'ohmylms'), label)}
          onClick={onEdit}
        >
          {__('Edit', 'ohmylms')}
        </Button>
      </span>
    </div>
  );
}
