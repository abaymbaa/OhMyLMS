import { createElement } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { Mindmap } from '../../extensions/mindmap/Mindmap';

/** Membership-specific adapter: selecting a category includes its descendants. */
export function CategoryMindmap({ categories, selected, onChange, emptyMessage }) {
  return (
    <Mindmap
      items={categories.map((category) => ({ ...category, id: Number(category.value) }))}
      selected={selected}
      onSelectionChange={onChange}
      includeDescendants
      title={__('Category mindmap', 'ohmylms')}
      rootLabel={__('Course categories', 'ohmylms')}
      description={__('Select a category to include its whole branch. Included child categories are highlighted. The course preview below applies your exclusions.', 'ohmylms')}
      emptyMessage={emptyMessage ?? __('No course categories yet. Add categories from the Categories menu to see them here.', 'ohmylms')}
      nodeHint={(node, { explicit, inherited }) => inherited ? __('Included through parent', 'ohmylms') : explicit ? __('Selected category', 'ohmylms') : __('Select this branch', 'ohmylms')}
      renderNodeDetails={(node) => !!node.courses?.length && (
        <details className="ohmylms-mindmap-node-details">
          <summary>{sprintf(__('%d courses in this category', 'ohmylms'), node.courses.length)}</summary>
          <ul>{node.courses.map((course) => <li key={course.id}>{course.title}</li>)}</ul>
        </details>
      )}
    />
  );
}
