import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useWorkspace } from './context';
import { Tag } from './WorkspaceParts';
import { workspacePath } from './workspace.mjs';

export function SyllabusOverview() {
  const w = useWorkspace();
  const profile = w.outline.settings;
  return (
    <section className="ohmylms-syllabus-settings-card">
      <h3>{__('Skill collection', 'ohmylms')}</h3>
      <Tag tone={w.course?.status === 'publish' ? 'ok' : 'warn'}>
        {w.course?.status === 'publish'
          ? __('Syllabus published', 'ohmylms')
          : __('Syllabus draft', 'ohmylms')}
      </Tag>
      <p>
        {[profile.grade, profile.subject, profile.language].filter(Boolean).join(' · ') ||
          __('Set the grade or level, subject, and language for this skill collection.', 'ohmylms')}
      </p>
      <Button variant="secondary" href={`#${workspacePath(w.syllabusId)}?view=settings`}>
        {__('Syllabus Settings', 'ohmylms')}
      </Button>
    </section>
  );
}
