import { createElement, useEffect, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import { useWorkspace } from './context';
import { SkillResources } from './SkillResources';
import { SkillCategoryChoices } from './SkillCategoryChoices';
import { syllabusReturnPath } from '../content-hub/editorNavigation.mjs';
import { validateSkill } from './syllabus.mjs';
import { Breadcrumb, MESSAGES, RowMenu, SaveField } from './WorkspaceParts';
import { pathTo, stepAmongSiblings, topicLabel } from './workspace.mjs';
import { categoryAppearance } from './categoryAppearance.mjs';

/** A shared skill, its parent topic, category and learning resources. */
export function SkillPane({ node }) {
  const w = useWorkspace();
  const skill = node.skill;
  const groupId = node.groupId;
  const parent = w.tree.index.get(node.parentKey);
  const appearance = categoryAppearance(skill, w.outline.settings, parent?.group);
  const first = stepAmongSiblings(w.tree, node, -1) === null;
  const last = stepAmongSiblings(w.tree, node, 1) === null;
  const check = (text, key) => {
    const code = validateSkill({ name: key === 'name' ? text : skill.name, [key]: text })[key];
    return code ? MESSAGES[code]() : '';
  };
  const catalog = w.courseCatalog.catalog;
  const inCourse = catalog?.skills.find((entry) => entry.term_id === skill.term_id);
  // A change shows at once and is dropped when the course answers with it (or when the server refuses it).
  const [override, setOverride] = useState({});
  useEffect(() => {
    if (!inCourse) return;
    setOverride((current) => {
      const next = { ...current };
      for (const key of ['required', 'target'])
        if (key in next && next[key] === inCourse[key]) delete next[key];
      return Object.keys(next).length === Object.keys(current).length ? current : next;
    });
  }, [inCourse?.required, inCourse?.target]);
  const shown = inCourse ? { ...inCourse, ...override } : null;
  const setInCourse = async (patch) => {
    setOverride((current) => ({ ...current, ...patch }));
    if (!(await w.actions.setRequirements([skill.term_id], patch)))
      setOverride((current) => {
        const next = { ...current };
        for (const key of Object.keys(patch)) delete next[key];
        return next;
      });
  };
  return (
    <div className="ohmylms-ws-pane">
      <Breadcrumb
        nodes={pathTo(w.tree.index, node.key).filter((entry) => entry.kind !== 'group')}
        labelOf={(entry) =>
          entry.kind === 'skill'
            ? skill.name
            : entry.depth === 0
              ? entry.content.name
              : topicLabel(entry.content)
        }
        onSelect={w.select}
      />
      <header className="ohmylms-ws-pane-head">
        <div className="ohmylms-ws-pane-title">
          <SaveField
            id={`ohmylms-ws-skill-name-${skill.term_id}`}
            label={__('Skill', 'ohmylms')}
            hideLabel
            value={skill.name}
            placeholder={__('Enter the learning objective', 'ohmylms')}
            inputClassName="ohmylms-ws-title"
            validate={(text) => check(text, 'name')}
            onSave={(text) => w.actions.saveSkill(skill, { name: text.trim() })}
          />
          <RowMenu
            label={__('Skill actions', 'ohmylms')}
            disabled={w.pending}
            controls={[
              {
                title: __('Move up', 'ohmylms'),
                isDisabled: first,
                onClick: () => w.actions.stepSkill(groupId, skill.term_id, -1),
              },
              {
                title: __('Move down', 'ohmylms'),
                isDisabled: last,
                onClick: () => w.actions.stepSkill(groupId, skill.term_id, 1),
              },
              {
                title: __('Take out of this topic', 'ohmylms'),
                onClick: async () => {
                  const fallback = node.parentKey;
                  if (await w.actions.removeSkill(groupId, skill.term_id)) w.select(fallback);
                },
              },
            ]}
          />
        </div>
        <div className="ohmylms-ws-meta">
          <SaveField
            id={`ohmylms-ws-skill-code-${skill.term_id}`}
            label={__('Code', 'ohmylms')}
            help={__('For example C1.1.1. Codes are unique within the syllabus.', 'ohmylms')}
            value={skill.code}
            validate={(text) => check(text, 'code')}
            onSave={(text) => w.actions.saveSkill(skill, { code: text.trim() })}
          />
          <SelectControl
            label={__('Topic', 'ohmylms')}
            value={parent.parentKey}
            options={[
              ...[...w.tree.index.values()]
                .filter((entry) => entry.kind === 'content' && entry.depth > 0)
                .map((entry) => ({
                  value: entry.key,
                  label: topicLabel(entry.content),
                })),
            ]}
            disabled={w.pending}
            onChange={(value) =>
              w.actions.moveSkillToTopic(groupId, skill.term_id, Number(value.slice(2)))
            }
            __nextHasNoMarginBottom
          />
        </div>
        <SaveField
          id={`ohmylms-ws-skill-notes-${skill.term_id}`}
          label={__('Notes or examples', 'ohmylms')}
          hideLabel
          multiline
          value={skill.description}
          placeholder={__('Add notes or examples …', 'ohmylms')}
          inputClassName="ohmylms-ws-description"
          validate={(text) => check(text, 'description')}
          onSave={(text) => w.actions.saveSkill(skill, { description: text })}
        />
        <SkillCategoryChoices
          settings={w.outline.settings}
          selected={appearance.category}
          disabled={w.pending}
          onSelect={(category) => w.actions.saveSkill(skill, { category })}
        />
        <p className="ohmylms-ext-muted">
          {sprintf(
            __(
              'Skills are shared. Taking “%s” out of this topic keeps it in the skill library.',
              'ohmylms',
            ),
            skill.name,
          )}
        </p>
      </header>

      <section className="ohmylms-ws-incourse" aria-label={__('Skill practice target', 'ohmylms')}>
        <h3>{__('Practice target', 'ohmylms')}</h3>
        {!catalog && (
          <p className="ohmylms-ext-muted">{__('Loading skill practice settings…', 'ohmylms')}</p>
        )}
        {catalog && !inCourse && (
          <p className="ohmylms-ext-muted">
            {__(
              'Refresh the skill collection from the syllabus actions to enable practice settings.',
              'ohmylms',
            )}
          </p>
        )}
        {shown && (
          <div className="ohmylms-ws-meta">
            <SelectControl
              label={__('Target', 'ohmylms')}
              value={shown.target}
              options={[
                { label: __('Proficient', 'ohmylms'), value: 'proficient' },
                { label: __('Mastered', 'ohmylms'), value: 'mastered' },
              ]}
              onChange={(target) => setInCourse({ target })}
              __nextHasNoMarginBottom
            />
          </div>
        )}
      </section>

      <SkillResources
        key={skill.term_id}
        skill={skill}
        syllabus={w.outline.syllabus}
        returnTo={syllabusReturnPath(w.syllabusId, node.key)}
      />
    </div>
  );
}
