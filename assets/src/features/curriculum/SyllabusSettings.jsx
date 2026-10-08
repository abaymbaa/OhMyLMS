import { createElement, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, Modal, Notice } from '@wordpress/components';
import { useWorkspace } from './context';
import { SaveField, Tag } from './WorkspaceParts';
import { SkillCategories } from './SkillCategories';

/** Settings for a grade/subject skill collection, rather than an enrolled commercial course. */
export function SyllabusSettings() {
  const w = useWorkspace();
  const [confirmPublish, setConfirmPublish] = useState(false);
  const profile = w.outline.settings;
  const item = w.items.find((entry) => entry.id === w.syllabusId) || w.outline.syllabus;
  const live = w.course?.status === 'publish';
  const save = (key) => (text) => w.saveSettings({ [key]: text.trim() });
  return (
    <div className="ohmylms-ws-pane ohmylms-syllabus-settings">
      <header className="ohmylms-ws-pane-head">
        <h2>{__('Syllabus Settings', 'ohmylms')}</h2>
        <p className="ohmylms-ext-muted">
          {__(
            'A collection of skills for a grade, level, or curriculum. Learners explore topics and practise individual skills at their own pace.',
            'ohmylms',
          )}
        </p>
      </header>
      <section className="ohmylms-syllabus-settings-card">
        <h3>{__('Syllabus profile', 'ohmylms')}</h3>
        <SaveField
          id="syllabus-settings-name"
          label={__('Syllabus name', 'ohmylms')}
          value={item.name}
          disabled={w.pending}
          validate={(text) =>
            !text.trim()
              ? __('Enter a name.', 'ohmylms')
              : text.length > 190
                ? __('That is too long.', 'ohmylms')
                : ''
          }
          onSave={(text) => w.actions.saveTopic(item, { name: text.trim() })}
        />
        <div className="ohmylms-ws-meta">
          <SaveField
            id="syllabus-settings-grade"
            label={__('Grade or level', 'ohmylms')}
            value={profile.grade}
            suggestions={[
              'Grade 1',
              'Grade 2',
              'Grade 3',
              'Grade 4',
              'Grade 5',
              'Grade 6',
              'Grade 7',
              'Grade 8',
              'Grade 9',
              'Grade 10',
              'Grade 11',
              'Grade 12',
              'IGCSE',
            ]}
            placeholder={__('For example Grade 9 or IGCSE', 'ohmylms')}
            disabled={w.pending}
            onSave={save('grade')}
          />
          <SaveField
            id="syllabus-settings-subject"
            label={__('Subject', 'ohmylms')}
            value={profile.subject}
            suggestions={['Mathematics', 'Science', 'English']}
            placeholder={__('For example Mathematics', 'ohmylms')}
            disabled={w.pending}
            onSave={save('subject')}
          />
          <SaveField
            id="syllabus-settings-language"
            label={__('Language', 'ohmylms')}
            value={profile.language}
            suggestions={['Монгол', 'English']}
            placeholder={__('For example Монгол', 'ohmylms')}
            disabled={w.pending}
            onSave={save('language')}
          />
          <SaveField
            id="syllabus-settings-code"
            label={__('Syllabus code', 'ohmylms')}
            value={item.code}
            disabled={w.pending}
            onSave={(text) => w.actions.saveTopic(item, { code: text.trim() })}
          />
          <SaveField
            id="syllabus-settings-version"
            label={__('Curriculum version', 'ohmylms')}
            value={item.version}
            help={__('For example 2025–2027.', 'ohmylms')}
            disabled={w.pending}
            onSave={(text) => w.actions.saveTopic(item, { version: text.trim() })}
          />
        </div>
        <SaveField
          id="syllabus-settings-description"
          label={__('Syllabus description', 'ohmylms')}
          multiline
          value={item.description}
          disabled={w.pending}
          onSave={(text) => w.actions.saveTopic(item, { description: text })}
        />
      </section>
      <section className="ohmylms-syllabus-settings-card">
        <h3>{__('Skill categories', 'ohmylms')}</h3>
        <SkillCategories />
      </section>
      <section className="ohmylms-syllabus-settings-card">
        <h3>{__('Publishing', 'ohmylms')}</h3>
        <div className="ohmylms-ws-course-actions">
          <Button variant="secondary" href={w.course?.preview} target="_blank" rel="noopener noreferrer">
            {__('Preview skill directory', 'ohmylms')}
          </Button>
          {live && w.course?.directory_ready && <Button variant="link" href={w.course?.directory} target="_blank" rel="noopener noreferrer">
            {__('View published syllabus', 'ohmylms')}
          </Button>}
        </div>
        <Tag tone={live ? 'ok' : 'warn'}>
          {live ? __('Syllabus published', 'ohmylms') : __('Syllabus draft', 'ohmylms')}
        </Tag>
        <p>
          {__(
            'Publish the skill collection when its structure is ready. A syllabus does not need a course completion requirement. Attached learning resources must be published first.',
            'ohmylms',
          )}
        </p>
        <Button
          variant="primary"
          disabled={w.pending || !w.course || w.outline.totals.skills === 0}
          onClick={() => setConfirmPublish(true)}
        >
          {live ? __('Publish syllabus changes', 'ohmylms') : __('Publish syllabus', 'ohmylms')}
        </Button>
      </section>
      {confirmPublish && (
        <Modal
          title={__('Publish syllabus', 'ohmylms')}
          onRequestClose={() => setConfirmPublish(false)}
        >
          {w.notice?.kind === 'error' && (
            <Notice status="error" isDismissible={false}>
              {w.notice.text}
            </Notice>
          )}
          <p>
            {__('Publish this syllabus and its latest skill structure for learners?', 'ohmylms')}
          </p>
          <div className="ohmylms-ws-course-actions">
            <Button variant="secondary" onClick={() => setConfirmPublish(false)}>
              {__('Cancel', 'ohmylms')}
            </Button>
            <Button
              variant="primary"
              disabled={w.pending}
              onClick={async () => {
                if (await w.publishSyllabus()) setConfirmPublish(false);
              }}
            >
              {__('Publish syllabus', 'ohmylms')}
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
