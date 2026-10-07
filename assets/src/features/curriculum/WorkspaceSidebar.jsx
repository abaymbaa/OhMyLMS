import { createElement, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, Dashicon } from '@wordpress/components';
import { QuickAdd, KindIcon } from './WorkspaceParts';
import { containerOf, nodeCounts, topicLabel } from './workspace.mjs';
import { groupLabel, skillLabel } from './syllabus.mjs';

function label(node) {
  if (node.kind === 'content') return topicLabel(node.content);
  if (node.kind === 'group') return groupLabel(node.group);
  return skillLabel(node.skill);
}

/** One node of the outline: a button that selects it, and a toggle when something is nested inside. */
function Branch({ node, selected, open, onSelect, onToggle }) {
  const isOpen = open.has(node.key);
  const nested = node.children.length > 0;
  const kind = node.kind === 'content' ? 'topic' : node.kind === 'group' ? 'chapter' : 'skill';
  const total = node.kind === 'group' ? node.children.length : 0;
  return (
    <li className={`ohmylms-ws-node is-${kind}`}>
      <div className={`ohmylms-ws-node-line${selected === node.key ? ' is-selected' : ''}`}>
        {nested ? (
          <button
            type="button"
            className="ohmylms-ws-toggle"
            aria-expanded={isOpen}
            aria-label={sprintf(
              isOpen ? __('Collapse %s', 'ohmylms') : __('Expand %s', 'ohmylms'),
              label(node),
            )}
            onClick={() => onToggle(node.key)}
          >
            <Dashicon icon={isOpen ? 'arrow-down-alt2' : 'arrow-right-alt2'} />
          </button>
        ) : (
          <span className="ohmylms-ws-toggle-spacer" aria-hidden="true" />
        )}
        <button
          type="button"
          className="ohmylms-ws-node-main"
          aria-current={selected === node.key ? 'true' : undefined}
          onClick={() => onSelect(node.key)}
        >
          <KindIcon kind={kind} />
          <span className="ohmylms-ws-node-label">{label(node)}</span>
          {node.kind === 'group' && (
            <span
              className="ohmylms-ws-node-count"
              aria-label={sprintf(_n('%d skill', '%d skills', total, 'ohmylms'), total)}
            >
              {total}
            </span>
          )}
        </button>
      </div>
      {nested && isOpen && (
        <ul className="ohmylms-ws-children">
          {node.children.map((child) => (
            <Branch
              key={child.key}
              node={child}
              selected={selected}
              open={open}
              onSelect={onSelect}
              onToggle={onToggle}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

/**
 * The left panel: the whole syllabus as a nested outline (topics, the chapters in them, the skills in each
 * chapter), with Add Chapter on top like the course builder. A chapter is a skill group; it goes into the
 * topic the selection is in, or into the syllabus itself.
 */
export function WorkspaceSidebar({
  tree,
  selected,
  open,
  onSelect,
  onToggle,
  onOpenAll,
  onCloseAll,
  onAddChapter,
  collapsed,
  onCollapse,
  pending,
}) {
  const [adding, setAdding] = useState(false);
  if (!tree.root) return null;
  const container = containerOf(tree, selected);
  const counts = nodeCounts(tree.root);
  const into =
    container.depth === 0 ? __('the syllabus', 'ohmylms') : topicLabel(container.content);
  return (
    <aside
      className={`ohmylms-ws-side${collapsed ? ' is-collapsed' : ''}`}
      aria-label={__('Syllabus outline', 'ohmylms')}
    >
      <div className="ohmylms-ws-side-head">
        <Button
          variant="primary"
          className="ohmylms-ws-add-chapter"
          disabled={pending}
          onClick={() => setAdding(true)}
        >
          <Dashicon icon="plus-alt2" />
          {__('Add Chapter', 'ohmylms')}
        </Button>
        <span className="ohmylms-ws-side-count">
          <Dashicon icon="screenoptions" />
          {sprintf(_n('%d Chapter', '%d Chapters', counts.chapters, 'ohmylms'), counts.chapters)}
        </span>
        <button
          type="button"
          className="ohmylms-ws-collapse"
          aria-expanded={!collapsed}
          aria-label={
            collapsed ? __('Show the outline', 'ohmylms') : __('Hide the outline', 'ohmylms')
          }
          onClick={onCollapse}
        >
          <Dashicon icon={collapsed ? 'arrow-right-alt2' : 'arrow-left-alt2'} />
        </button>
      </div>
      {!collapsed && (
        <div className="ohmylms-ws-side-body">
          {adding && (
            <QuickAdd
              nameLabel={__('Chapter name', 'ohmylms')}
              codeLabel={__('Code', 'ohmylms')}
              submitLabel={__('Add chapter', 'ohmylms')}
              codeOnly
              pending={pending}
              help={sprintf(__('Goes into %s.', 'ohmylms'), into)}
              onAdd={(data) => onAddChapter(container.id, data)}
              onCancel={() => setAdding(false)}
            />
          )}
          <div className="ohmylms-ws-side-tools">
            <button type="button" onClick={onOpenAll}>
              {__('Open all', 'ohmylms')}
            </button>
            <button type="button" onClick={onCloseAll}>
              {__('Close all', 'ohmylms')}
            </button>
          </div>
          <ul className="ohmylms-ws-tree" aria-label={__('Topics, chapters and skills', 'ohmylms')}>
            <li className="ohmylms-ws-node is-syllabus">
              <div
                className={`ohmylms-ws-node-line${selected === tree.root.key ? ' is-selected' : ''}`}
              >
                <span className="ohmylms-ws-toggle-spacer" aria-hidden="true" />
                <button
                  type="button"
                  className="ohmylms-ws-node-main"
                  aria-current={selected === tree.root.key ? 'true' : undefined}
                  onClick={() => onSelect(tree.root.key)}
                >
                  <KindIcon kind="syllabus" />
                  <span className="ohmylms-ws-node-label">{tree.root.content.name}</span>
                  <span className="ohmylms-ws-node-hint">{__('Syllabus', 'ohmylms')}</span>
                </button>
              </div>
            </li>
            {tree.root.children.map((node) => (
              <Branch
                key={node.key}
                node={node}
                selected={selected}
                open={open}
                onSelect={onSelect}
                onToggle={onToggle}
              />
            ))}
          </ul>
          {!tree.root.children.length && (
            <p className="ohmylms-ext-muted ohmylms-ws-side-empty">
              {__('No chapters yet. Add the first one, or import a CSV file.', 'ohmylms')}
            </p>
          )}
        </div>
      )}
    </aside>
  );
}
