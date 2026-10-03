import { createElement, Fragment, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { buildMindmapTree } from './tree.mjs';

/** Controlled tree mindmap. Data, selection, inheritance and node details belong to the caller. */
export function Mindmap({ items, selected = [], onSelectionChange, includeDescendants = false, title, rootLabel, description, emptyMessage, nodeHint, renderNodeDetails }) {
  const [collapsed, setCollapsed] = useState(new Set());
  const selectedIds = new Set(selected.map(String));
  const roots = buildMindmapTree(items);
  const toggleBranch = (id) => setCollapsed((current) => {
    const next = new Set(current);
    if (next.has(String(id))) next.delete(String(id)); else next.add(String(id));
    return next;
  });
  const renderBranch = (node, inherited = false) => {
    const explicit = selectedIds.has(String(node.id));
    const included = explicit || inherited;
    const expanded = !collapsed.has(String(node.id));
    return (
      <li key={node.id}>
        <div className={`ohmylms-mindmap-node${included ? ' is-included' : ''}${node.children.length && expanded ? ' has-children' : ''}`}>
          <div className="ohmylms-mindmap-node-heading">
            <label>
              {onSelectionChange && <input type="checkbox" checked={included} disabled={inherited && !explicit}
                onChange={() => onSelectionChange(explicit ? selected.filter((id) => String(id) !== String(node.id)) : [...selected, node.id])} />}
              <span>{node.label}</span>
            </label>
            {node.children.length > 0 && (
              <button type="button" aria-expanded={expanded}
                aria-label={sprintf(expanded ? __('Collapse %s', 'ohmylms') : __('Expand %s', 'ohmylms'), node.label)}
                onClick={() => toggleBranch(node.id)}>{expanded ? '−' : '+'}</button>
            )}
          </div>
          {nodeHint && <small>{nodeHint(node, { explicit, inherited, included })}</small>}
          {renderNodeDetails?.(node, { explicit, inherited, included })}
        </div>
        {node.children.length > 0 && expanded && <ul className="ohmylms-mindmap-branches">{node.children.map((child) => renderBranch(child, includeDescendants && included))}</ul>}
      </li>
    );
  };
  return (
    <details className="ohmylms-mindmap" open>
      <summary>{title}</summary>
      {description && <p>{description}</p>}
      {roots.length ? (
        <Fragment>
          <div className="ohmylms-mindmap-actions">
            <button type="button" className="button" onClick={() => setCollapsed(new Set())}>{__('Expand all', 'ohmylms')}</button>
            <button type="button" className="button" onClick={() => setCollapsed(new Set(items.map((item) => String(item.id))))}>{__('Collapse all', 'ohmylms')}</button>
          </div>
          <div className="ohmylms-mindmap-scroll" tabIndex={0} role="region" aria-label={title}>
            <div className="ohmylms-mindmap-stage">
              <div className="ohmylms-mindmap-root">{rootLabel}</div>
              <ul className="ohmylms-mindmap-branches">{roots.map((node) => renderBranch(node))}</ul>
            </div>
          </div>
        </Fragment>
      ) : <p>{emptyMessage || __('No items yet.', 'ohmylms')}</p>}
    </details>
  );
}
