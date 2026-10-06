import { createElement, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import {
  Button,
  CheckboxControl,
  DropdownMenu,
  SelectControl,
  TextControl,
} from '@wordpress/components';
import { attachmentsFor } from './catalogModel.mjs';
import { catalogPath } from './hubRoutes.mjs';
import { editPath } from './api.mjs';

const typeLabel = (type) =>
  ({
    lesson: __('Lesson', 'ohmylms'),
    quiz: __('Quiz', 'ohmylms'),
    assignment: __('Assignment', 'ohmylms'),
  })[type] || type;

const targetOptions = () => [
  { label: __('Proficient', 'ohmylms'), value: 'proficient' },
  { label: __('Mastered', 'ohmylms'), value: 'mastered' },
];

/** One attached lesson, quiz or assignment: where it is edited, whether it counts, and where else it is used. */
export function AttachmentItem({ item, skills, actions }) {
  const covered = item.skill_ids
    .map((id) => skills.find((skill) => skill.term_id === id)?.name)
    .filter(Boolean);
  return (
    <li className="ohmylms-catalog-item">
      <span className={`ohmylms-catalog-type is-${item.type}`}>{typeLabel(item.type)}</span>
      <a className="ohmylms-catalog-item-title" href={`#${editPath(item.type, item.content_id)}`}>
        {item.title}
      </a>
      {item.status !== 'publish' && (
        <span className="ohmylms-catalog-flag is-warning">
          {item.status === 'missing'
            ? __('Unavailable', 'ohmylms')
            : __('Not published', 'ohmylms')}
        </span>
      )}
      {covered.length > 1 && (
        <span className="ohmylms-ext-muted">
          {sprintf(__('Covers %d skills', 'ohmylms'), covered.length)}
        </span>
      )}
      {item.also_in.length > 0 && (
        <span className="ohmylms-ext-muted">
          {__('Also in', 'ohmylms')}{' '}
          {item.also_in.map((course, index) => (
            <span key={course.id}>
              {index > 0 && ', '}
              <a href={`#${catalogPath(course.id)}`}>{course.title}</a>
            </span>
          ))}
        </span>
      )}
      <span className="ohmylms-catalog-item-controls">
        <CheckboxControl
          label={__('Required', 'ohmylms')}
          checked={item.required}
          onChange={(required) => actions.updateAttachment(item.id, { required })}
          __nextHasNoMarginBottom
        />
        {item.type === 'quiz' && (
          <TextControl
            label={__('Pass %', 'ohmylms')}
            type="number"
            min={0}
            max={100}
            value={item.pass_percent ?? 80}
            onChange={(value) =>
              actions.updateAttachment(item.id, {
                pass_percent: Math.max(0, Math.min(100, Number(value) || 0)),
              })
            }
            __nextHasNoMarginBottom
          />
        )}
        <Button
          variant="link"
          isDestructive
          onClick={() => actions.removeAttachment(item.id)}
          aria-label={sprintf(__('Remove %s from this course', 'ohmylms'), item.title)}
        >
          {__('Remove', 'ohmylms')}
        </Button>
      </span>
    </li>
  );
}

/** A skill row in the style of a skill catalog: its code, its name, what it takes, and its attached content. */
export function SkillRow({ skill, chapters, skills, attachments, actions, busy }) {
  const scoped = attachmentsFor(attachments, { skillId: skill.term_id });
  const others = chapters.filter((chapter) => chapter.id !== skill.chapter_id);
  const controls = [
    { title: __('Move up', 'ohmylms'), onClick: () => actions.moveSkill(skill.term_id, -1) },
    { title: __('Move down', 'ohmylms'), onClick: () => actions.moveSkill(skill.term_id, 1) },
    {
      title: __('Attach lesson, quiz or assignment', 'ohmylms'),
      onClick: () => actions.attach({ chapterId: skill.chapter_id, skillIds: [skill.term_id] }),
    },
    ...others.map((chapter) => ({
      title: sprintf(__('Move to “%s”', 'ohmylms'), chapter.name),
      onClick: () => actions.placeSkill(skill.term_id, chapter.id),
    })),
    ...(skill.chapter_id
      ? [
          {
            title: __('Take out of its chapter', 'ohmylms'),
            onClick: () => actions.placeSkill(skill.term_id, 0),
          },
        ]
      : []),
    {
      title: __('Remove from this course', 'ohmylms'),
      onClick: () => actions.removeSkill(skill.term_id),
    },
  ];
  return (
    <li className={`ohmylms-catalog-skill${skill.missing ? ' is-missing' : ''}`}>
      <div className="ohmylms-catalog-skill-row">
        <span className="ohmylms-catalog-code">{skill.code || '—'}</span>
        <span className="ohmylms-catalog-skill-name">{skill.name}</span>
        <span className="ohmylms-catalog-skill-meta">
          {sprintf(_n('%d question', '%d questions', skill.questions, 'ohmylms'), skill.questions)}
        </span>
        <SelectControl
          label={sprintf(__('Target for %s', 'ohmylms'), skill.name)}
          hideLabelFromVision
          value={skill.target}
          options={targetOptions()}
          onChange={(target) => actions.updateSkill(skill.term_id, { target })}
          __nextHasNoMarginBottom
        />
        <CheckboxControl
          label={__('Required', 'ohmylms')}
          checked={skill.required}
          onChange={(required) => actions.updateSkill(skill.term_id, { required })}
          __nextHasNoMarginBottom
        />
        <DropdownMenu
          icon="ellipsis"
          label={sprintf(__('Actions for %s', 'ohmylms'), skill.name)}
          controls={controls}
          disabled={busy}
        />
      </div>
      {scoped.length > 0 && (
        <ul className="ohmylms-catalog-items">
          {scoped.map((item) => (
            <AttachmentItem key={item.id} item={item} skills={skills} actions={actions} />
          ))}
        </ul>
      )}
    </li>
  );
}

function ChapterTitle({ chapter, onRename }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(chapter.name);
  if (!editing) return <h3 id={`catalog-chapter-${chapter.id}`}>{chapter.name}</h3>;
  const save = () => {
    const next = name.trim();
    setEditing(false);
    if (next && next !== chapter.name) onRename(chapter.id, next);
  };
  return (
    <form
      className="ohmylms-catalog-rename"
      onSubmit={(event) => {
        event.preventDefault();
        save();
      }}
    >
      <TextControl
        label={__('Chapter name', 'ohmylms')}
        hideLabelFromVision
        value={name}
        onChange={setName}
        __nextHasNoMarginBottom
      />
      <Button variant="primary" type="submit">
        {__('Save', 'ohmylms')}
      </Button>
      <Button variant="tertiary" onClick={() => setEditing(false)}>
        {__('Cancel', 'ohmylms')}
      </Button>
    </form>
  );
}

/**
 * A chapter of the catalog (or, with no chapter, the skills and content not placed in one yet): content
 * attached to the whole chapter, then the skills in order, each with the content scoped to it.
 */
export function ChapterBlock({
  chapter,
  index,
  total,
  skills,
  allSkills,
  attachments,
  chapters,
  actions,
  busy,
}) {
  const chapterId = chapter ? chapter.id : 0;
  const here = attachmentsFor(attachments, { chapterId });
  const rename = (id, name) => actions.renameChapter(id, name);
  const controls = chapter
    ? [
        {
          title: __('Move chapter up', 'ohmylms'),
          onClick: () => actions.moveChapter(chapter.id, -1),
          isDisabled: index === 0,
        },
        {
          title: __('Move chapter down', 'ohmylms'),
          onClick: () => actions.moveChapter(chapter.id, 1),
          isDisabled: index === total - 1,
        },
        {
          title: __('Delete chapter', 'ohmylms'),
          onClick: () => actions.deleteChapter(chapter.id),
        },
      ]
    : [];
  return (
    <section
      className="ohmylms-catalog-chapter"
      aria-labelledby={chapter ? `catalog-chapter-${chapter.id}` : 'catalog-unplaced'}
    >
      <header className="ohmylms-catalog-chapter-head">
        {chapter ? (
          <ChapterTitle chapter={chapter} onRename={rename} />
        ) : (
          <h3 id="catalog-unplaced">{__('Not in a chapter yet', 'ohmylms')}</h3>
        )}
        <span className="ohmylms-ext-muted">
          {sprintf(_n('%d skill', '%d skills', skills.length, 'ohmylms'), skills.length)}
        </span>
        {chapter && (
          <DropdownMenu
            icon="ellipsis"
            label={sprintf(__('Actions for chapter %s', 'ohmylms'), chapter.name)}
            controls={controls}
            disabled={busy}
          />
        )}
      </header>
      {here.length > 0 && (
        <ul className="ohmylms-catalog-items is-chapter">
          {here.map((item) => (
            <AttachmentItem key={item.id} item={item} skills={allSkills} actions={actions} />
          ))}
        </ul>
      )}
      {skills.length > 0 ? (
        <ol className="ohmylms-catalog-skills">
          {skills.map((skill) => (
            <SkillRow
              key={skill.term_id}
              skill={skill}
              chapters={chapters}
              skills={allSkills}
              attachments={attachments}
              actions={actions}
              busy={busy}
            />
          ))}
        </ol>
      ) : (
        <p className="ohmylms-ext-muted ohmylms-catalog-empty">
          {__('No skills here yet.', 'ohmylms')}
        </p>
      )}
      <footer className="ohmylms-catalog-chapter-foot">
        <Button variant="secondary" onClick={() => actions.addSkills(chapterId)}>
          {__('Add skills', 'ohmylms')}
        </Button>
        <Button variant="secondary" onClick={() => actions.attach({ chapterId, skillIds: [] })}>
          {chapter ? __('Attach to chapter', 'ohmylms') : __('Attach to course', 'ohmylms')}
        </Button>
      </footer>
    </section>
  );
}
