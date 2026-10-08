import { createElement, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { AddContentMenu } from './AddContentMenu';
import { SyllabusOverview } from './SyllabusOverview';
import { SkillCategories } from './SkillCategories';
import { IconPicker } from './IconPicker';
import { useWorkspace } from './context';
import { siblingInfo } from './model.mjs';
import { groupLabel } from './syllabus.mjs';
import { DeleteChapterDialog, DeleteTopicDialog } from './WorkspaceDialogs';
import { Breadcrumb, MESSAGES, QuickAdd, Row, RowMenu, SaveField } from './WorkspaceParts';
import {
  chaptersOf,
  nodeCounts,
  pathTo,
  topicLabel,
  topicsOf,
  validateTopic,
} from './workspace.mjs';

const countsLine = (counts) =>
  [
    sprintf(_n('%d topic', '%d topics', counts.topics, 'ohmylms'), counts.topics),
    sprintf(_n('%d chapter', '%d chapters', counts.chapters, 'ohmylms'), counts.chapters),
    sprintf(_n('%d skill', '%d skills', counts.skills, 'ohmylms'), counts.skills),
  ].join(' · ');

/**
 * The syllabus itself or one of its topics: its name and notes, then the chapters and sub-topics in it.
 * Chapters are skill groups; open one to add skills, lessons and quizzes. The syllabus also shows its course.
 */
export function TopicPane({ node }) {
  const w = useWorkspace();
  const root = node.depth === 0;
  const item = w.items.find((entry) => entry.id === node.id) || node.content;
  const [adding, setAdding] = useState('');
  const [confirm, setConfirm] = useState(null);
  const chapters = chaptersOf(node);
  const topics = topicsOf(node);
  const own = siblingInfo(w.items, node.id);
  const check = (key) => (text) => {
    const code = validateTopic({ name: 'x', [key]: text })[key];
    return code ? MESSAGES[code]() : '';
  };
  const save =
    (key, trim = true) =>
    (text) =>
      w.actions.saveTopic(item, { [key]: trim ? text.trim() : text });
  const noun = root ? __('syllabus', 'ohmylms') : __('topic', 'ohmylms');

  const topicControls = (child) => {
    const info = siblingInfo(w.items, child.id);
    const entry = w.items.find((row) => row.id === child.id) || child.content;
    return [
      { title: __('Open', 'ohmylms'), onClick: () => w.select(child.key) },
      {
        title: __('Move up', 'ohmylms'),
        isDisabled: info.index <= 0,
        onClick: () => w.actions.stepTopic(entry, -1),
      },
      {
        title: __('Move down', 'ohmylms'),
        isDisabled: info.index < 0 || info.index >= info.count - 1,
        onClick: () => w.actions.stepTopic(entry, 1),
      },
      {
        title: __('Delete topic…', 'ohmylms'),
        onClick: () => setConfirm({ kind: 'topic', item: entry, key: child.key }),
      },
    ];
  };
  const chapterControls = (child, at) => [
    { title: __('Open', 'ohmylms'), onClick: () => w.select(child.key) },
    {
      title: __('Move up', 'ohmylms'),
      isDisabled: at <= 0,
      onClick: () => w.actions.stepChapter(child.group, -1),
    },
    {
      title: __('Move down', 'ohmylms'),
      isDisabled: at >= chapters.length - 1,
      onClick: () => w.actions.stepChapter(child.group, 1),
    },
    {
      title: __('Delete chapter…', 'ohmylms'),
      onClick: () => setConfirm({ kind: 'chapter', group: child.group }),
    },
  ];

  const headerMenu = root
    ? null
    : [
        {
          title: __('Move up', 'ohmylms'),
          isDisabled: own.index <= 0,
          onClick: () => w.actions.stepTopic(item, -1),
        },
        {
          title: __('Move down', 'ohmylms'),
          isDisabled: own.index < 0 || own.index >= own.count - 1,
          onClick: () => w.actions.stepTopic(item, 1),
        },
        {
          title: __('Delete topic…', 'ohmylms'),
          onClick: () => setConfirm({ kind: 'topic', item, key: node.key, own: true }),
        },
      ];

  return (
    <div className="ohmylms-ws-pane">
      <Breadcrumb
        nodes={pathTo(w.tree.index, node.key)}
        labelOf={(entry) => (entry.depth === 0 ? entry.content.name : topicLabel(entry.content))}
        onSelect={w.select}
      />
      <header className="ohmylms-ws-pane-head">
        <div className="ohmylms-ws-pane-title">
          {!root && (
            <IconPicker
              kind="topic"
              value={item.icon}
              disabled={w.pending}
              onChange={(icon) => w.actions.saveTopic(item, { icon })}
            />
          )}
          <SaveField
            id={`ohmylms-ws-name-${node.id}`}
            label={root ? __('Syllabus name', 'ohmylms') : __('Topic name', 'ohmylms')}
            hideLabel
            value={item.name}
            placeholder={
              root ? __('Enter syllabus name', 'ohmylms') : __('Enter topic name', 'ohmylms')
            }
            inputClassName="ohmylms-ws-title"
            validate={check('name')}
            onSave={save('name')}
          />
          {headerMenu && (
            <RowMenu
              label={__('Topic actions', 'ohmylms')}
              controls={headerMenu}
              disabled={w.pending}
            />
          )}
        </div>
        <p className="ohmylms-ws-counts">{countsLine(nodeCounts(node))}</p>
        <div className="ohmylms-ws-meta">
          <SaveField
            id={`ohmylms-ws-code-${node.id}`}
            label={__('Code', 'ohmylms')}
            value={item.code}
            validate={check('code')}
            onSave={save('code')}
          />
          {root && (
            <SaveField
              id={`ohmylms-ws-version-${node.id}`}
              label={__('Version', 'ohmylms')}
              help={__('For example the years a syllabus applies.', 'ohmylms')}
              value={item.version}
              validate={check('version')}
              onSave={save('version')}
            />
          )}
        </div>
        {root && <SkillCategories />}
        <SaveField
          id={`ohmylms-ws-description-${node.id}`}
          label={__('Description', 'ohmylms')}
          hideLabel
          multiline
          value={item.description}
          placeholder={sprintf(__('Add %s description …', 'ohmylms'), noun)}
          inputClassName="ohmylms-ws-description"
          validate={check('description')}
          onSave={save('description', false)}
        />
      </header>

      {root && w.course && <SyllabusOverview />}

      <section className="ohmylms-ws-content" aria-label={__('Content', 'ohmylms')}>
        <div className="ohmylms-ws-content-head">
          <h3>{__('Content', 'ohmylms')}</h3>
          <AddContentMenu
            label={sprintf(__('Add to this %s', 'ohmylms'), noun)}
            disabled={w.pending}
            items={[
              {
                key: 'chapter',
                title: __('Chapter', 'ohmylms'),
                info: __('A group of skills, and a chapter of the course', 'ohmylms'),
                onClick: () => setAdding('chapter'),
              },
              {
                key: 'topic',
                title: __('Topic', 'ohmylms'),
                info: __('A section that holds chapters, such as a unit or a strand', 'ohmylms'),
                onClick: () => setAdding('topic'),
              },
            ]}
          />
        </div>
        {adding === 'chapter' && (
          <QuickAdd
            nameLabel={__('Chapter name', 'ohmylms')}
            codeLabel={__('Code', 'ohmylms')}
            submitLabel={__('Add chapter', 'ohmylms')}
            codeOnly
            pending={w.pending}
            help={__('Press Enter to add it and start the next one.', 'ohmylms')}
            onAdd={(data) => w.actions.addChapter(node.id, data, { open: false })}
            onCancel={() => setAdding('')}
          />
        )}
        {adding === 'topic' && (
          <QuickAdd
            nameLabel={__('Topic name', 'ohmylms')}
            codeLabel={__('Code', 'ohmylms')}
            submitLabel={__('Add topic', 'ohmylms')}
            pending={w.pending}
            help={__('Press Enter to add it and start the next one.', 'ohmylms')}
            onAdd={(data) => w.actions.addTopic(node.id, data, { open: false })}
            onCancel={() => setAdding('')}
          />
        )}
        {chapters.length + topics.length > 0 ? (
          <ul className="ohmylms-ws-rows">
            {chapters.map((child, at) => (
              <Row
                key={child.key}
                kind="chapter"
                icon={child.group.icon}
                title={groupLabel(child.group)}
                tag={__('Chapter', 'ohmylms')}
                meta={sprintf(
                  _n('%d skill', '%d skills', child.children.length, 'ohmylms'),
                  child.children.length,
                )}
                onOpen={() => w.select(child.key)}
                menu={
                  <RowMenu
                    label={sprintf(__('Actions for %s', 'ohmylms'), groupLabel(child.group))}
                    controls={chapterControls(child, at)}
                    disabled={w.pending}
                  />
                }
              />
            ))}
            {topics.map((child) => {
              const counts = nodeCounts(child);
              return (
                <Row
                  key={child.key}
                  kind="topic"
                  icon={child.content.icon}
                  title={topicLabel(child.content)}
                  tag={__('Topic', 'ohmylms')}
                  meta={sprintf(
                    _n('%d chapter', '%d chapters', counts.chapters, 'ohmylms'),
                    counts.chapters,
                  )}
                  onOpen={() => w.select(child.key)}
                  menu={
                    <RowMenu
                      label={sprintf(__('Actions for %s', 'ohmylms'), topicLabel(child.content))}
                      controls={topicControls(child)}
                      disabled={w.pending}
                    />
                  }
                />
              );
            })}
          </ul>
        ) : (
          adding === '' && (
            <p className="ohmylms-ext-muted ohmylms-ws-empty">
              {root
                ? __(
                    'Nothing is in this syllabus yet. Add a chapter, or a topic to hold chapters, or import a CSV file with one skill per row.',
                    'ohmylms',
                  )
                : __('Nothing is in this topic yet. Add a chapter to it.', 'ohmylms')}
            </p>
          )
        )}
      </section>

      {confirm?.kind === 'chapter' && (
        <DeleteChapterDialog
          group={confirm.group}
          pending={w.pending}
          onClose={() => setConfirm(null)}
          onConfirm={async () => {
            if (await w.actions.deleteChapter(confirm.group)) setConfirm(null);
          }}
        />
      )}
      {confirm?.kind === 'topic' && (
        <DeleteTopicDialog
          item={confirm.item}
          pending={w.pending}
          onClose={() => setConfirm(null)}
          onConfirm={async (options) => {
            const fallback = confirm.own ? node.parentKey : '';
            if (await w.actions.deleteTopic(confirm.item, options)) {
              setConfirm(null);
              if (fallback) w.select(fallback);
            }
          }}
        />
      )}
    </div>
  );
}
