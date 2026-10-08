import { createElement, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { useWorkspace } from './context';

/** Categories are created at syllabus level and selected, rather than typed, on each skill. */
export function SkillCategories() {
  const w = useWorkspace();
  const categories = w.outline.settings.categories || [];
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const add = async () => {
    const category = text.trim().replace(/\s+/g, ' ');
    if (!category) return;
    if (category.length > 60 || categories.length >= 50) {
      setError(__('Use up to 50 categories, each with at most 60 characters.', 'ohmylms'));
      return;
    }
    if (categories.includes(category)) { setText(''); setError(''); return; }
    if (await w.saveSettings({ categories: [...categories, category] })) { setText(''); setError(''); }
  };
  return (
    <div className="ohmylms-ws-field ohmylms-skill-categories">
      <label className="ohmylms-ws-label" htmlFor={`syllabus-categories-${w.syllabusId}`}>
        {__('Skill categories', 'ohmylms')}
      </label>
      <div className="ohmylms-category-tags">
        {categories.map((category) => (
          <span className="ohmylms-category-token" key={category}>
            {category}
            <button type="button" disabled={w.pending}
              aria-label={sprintf(__('Remove %s category', 'ohmylms'), category)}
              onClick={() => w.saveSettings({ categories: categories.filter((value) => value !== category) })}>
              <span aria-hidden="true">×</span>
            </button>
          </span>
        ))}
        <input id={`syllabus-categories-${w.syllabusId}`} value={text} disabled={w.pending}
          placeholder={__('Type a category…', 'ohmylms')}
          aria-describedby={`syllabus-categories-help-${w.syllabusId}`}
          aria-invalid={Boolean(error)}
          onChange={(event) => { setText(event.target.value); setError(''); }}
          onKeyDown={(event) => { if (event.key === 'Enter' && !event.nativeEvent.isComposing) { event.preventDefault(); add(); } }} />
        <button className="ohmylms-category-add" type="button" disabled={w.pending || !text.trim()} onClick={add}>
          {__('Add', 'ohmylms')}
        </button>
      </div>
      <span className={`ohmylms-ws-note${error ? ' is-error' : ''}`} id={`syllabus-categories-help-${w.syllabusId}`} role="status">
        {error || __('Press Enter to create a category. Skills can only choose from these categories. Remove unused categories with ×.', 'ohmylms')}
      </span>
    </div>
  );
}
