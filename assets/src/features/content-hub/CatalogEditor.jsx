import { createElement, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, Modal, Notice, SelectControl, Spinner, TextControl } from '@wordpress/components';
import { AdminPage } from '../../extensions/AdminPage';
import { AttachDialog } from './AttachDialog';
import {
  addAttachments,
  addSkills,
  attachmentsFor,
  moveSkill,
  placeSkill,
  removeAttachment,
  removeSkill,
  skillsIn,
  stats,
  updateAttachment,
  updateSkill,
} from './catalogModel.mjs';
import { ChapterBlock } from './ChapterBlock';
import { HUB_PATH } from './hubRoutes.mjs';
import { PublishDialog } from './PublishDialog';
import { SkillPicker } from './SkillPicker';
import { useCatalog } from './useCatalog';

const modeOptions = () => [
  { label: __('Skill-based', 'ohmylms'), value: 'skill-based' },
  { label: __('Blended', 'ohmylms'), value: 'blended' },
  { label: __('Traditional', 'ohmylms'), value: 'traditional' },
];

const statusText = (status) =>
  ({
    dirty: __('Unsaved changes…', 'ohmylms'),
    saving: __('Saving draft…', 'ohmylms'),
    saved: __('All changes saved to the draft', 'ohmylms'),
    error: __('Not saved', 'ohmylms'),
  })[status] || '';

/**
 * One grade, exam or subject laid out like a skill catalog: chapters as blocks, each listing its skills
 * with their codes, and the lessons, quizzes and assessments attached to the chapter or to those skills.
 */
export function CatalogEditor({ courseId }) {
  const hub = useCatalog(courseId);
  const { catalog, status, error, busy, publishErrors, change } = hub;
  const [attach, setAttach] = useState(null);
  const [pickChapter, setPickChapter] = useState(null);
  const [publishing, setPublishing] = useState(false);
  const [chapterName, setChapterName] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(null);

  if (!catalog) {
    return error ? (
      <Notice status="error" isDismissible={false}>
        {error}
      </Notice>
    ) : (
      <Spinner />
    );
  }

  const edit = (patch) => change((current) => ({ ...current, ...patch(current) }));
  const actions = {
    addSkills: (chapterId) => setPickChapter(chapterId),
    attach: (scope) => setAttach(scope),
    updateSkill: (termId, patch) => edit((c) => ({ skills: updateSkill(c.skills, termId, patch) })),
    moveSkill: (termId, delta) => edit((c) => ({ skills: moveSkill(c.skills, termId, delta) })),
    placeSkill: (termId, chapterId) =>
      edit((c) => ({ skills: placeSkill(c.skills, termId, chapterId) })),
    removeSkill: (termId) => edit((c) => removeSkill(c.skills, c.attachments, termId)),
    updateAttachment: (id, patch) =>
      edit((c) => ({ attachments: updateAttachment(c.attachments, id, patch) })),
    removeAttachment: (id) => edit((c) => ({ attachments: removeAttachment(c.attachments, id) })),
    renameChapter: hub.renameChapter,
    moveChapter: (id, delta) => {
      const ids = catalog.chapters.map((chapter) => chapter.id);
      const from = ids.indexOf(id);
      const to = from + delta;
      if (from < 0 || to < 0 || to >= ids.length) return;
      [ids[from], ids[to]] = [ids[to], ids[from]];
      hub.reorderChapters(ids);
    },
    deleteChapter: (id) => setConfirmDelete(catalog.chapters.find((chapter) => chapter.id === id)),
  };
  const totals = stats(catalog);
  const unplaced = skillsIn(catalog.skills, 0);
  const unplacedContent = attachmentsFor(catalog.attachments, { chapterId: 0 });
  const published = catalog.published_version > 0;
  const { course } = catalog;

  return (
    <AdminPage
      className="ohmylms-catalog"
      headingLevel={2}
      title={
        <>
          <a href={`#${HUB_PATH}`}>{__('All courses', 'ohmylms')}</a>
          <span aria-hidden="true"> / </span>
          {course.title}
        </>
      }
      description={sprintf(
        __('%1$s · %2$s · %3$s, %4$s, %5$s', 'ohmylms'),
        course.status === 'publish'
          ? __('Course published', 'ohmylms')
          : __('Course draft', 'ohmylms'),
        published
          ? catalog.unpublished_changes
            ? sprintf(
                __('Version %d published, with unpublished changes', 'ohmylms'),
                catalog.published_version,
              )
            : sprintf(__('Version %d published', 'ohmylms'), catalog.published_version)
          : __('Catalog not published yet', 'ohmylms'),
        sprintf(_n('%d chapter', '%d chapters', totals.chapters, 'ohmylms'), totals.chapters),
        sprintf(_n('%d skill', '%d skills', totals.skills, 'ohmylms'), totals.skills),
        sprintf(
          _n('%d attachment', '%d attachments', totals.attachments, 'ohmylms'),
          totals.attachments,
        ),
      )}
      actions={
        <>
          <span className={`ohmylms-catalog-status is-${status}`} role="status" aria-live="polite">
            {statusText(status)}
            {status === 'error' && (
              <>
                {' '}
                <Button variant="link" onClick={hub.flush}>
                  {__('Retry', 'ohmylms')}
                </Button>
              </>
            )}
          </span>
          <Button variant="secondary" href={`#/course-edit/${courseId}/settings`}>
            {__('Course settings', 'ohmylms')}
          </Button>
          {course.url && (
            <Button variant="secondary" href={course.url} target="_blank" rel="noopener noreferrer">
              {__('Learner view', 'ohmylms')}
            </Button>
          )}
          <Button
            variant="primary"
            disabled={
              busy ||
              status === 'saving' ||
              (published && !catalog.unpublished_changes && status !== 'dirty')
            }
            onClick={() => hub.flush().then((ok) => ok && setPublishing(true))}
          >
            {published ? __('Publish changes', 'ohmylms') : __('Publish', 'ohmylms')}
          </Button>
        </>
      }
    >
      {error && (
        <Notice status="error" onRemove={() => hub.setError('')}>
          {error}
        </Notice>
      )}
      <div className="ohmylms-catalog-bar">
        <SelectControl
          label={__('Learning mode', 'ohmylms')}
          help={__(
            'Skill-based courses finish when required skills reach their targets; there is no fixed lesson order.',
            'ohmylms',
          )}
          value={catalog.mode}
          options={modeOptions()}
          onChange={(mode) => edit(() => ({ mode }))}
          __nextHasNoMarginBottom
        />
        <form
          className="ohmylms-catalog-add-chapter"
          onSubmit={(event) => {
            event.preventDefault();
            const name = chapterName.trim();
            if (name && !busy) hub.addChapter(name).then((ok) => ok && setChapterName(''));
          }}
        >
          <TextControl
            label={__('New chapter', 'ohmylms')}
            placeholder={__('e.g. Counting and number patterns', 'ohmylms')}
            value={chapterName}
            onChange={setChapterName}
            __nextHasNoMarginBottom
          />
          <Button variant="secondary" type="submit" disabled={!chapterName.trim() || busy}>
            {__('Add chapter', 'ohmylms')}
          </Button>
        </form>
      </div>
      {!catalog.chapters.length && !unplaced.length && !unplacedContent.length && (
        <p className="ohmylms-ext-muted">
          {__('Start by adding a chapter, then add the skills it teaches.', 'ohmylms')}
        </p>
      )}
      <div className="ohmylms-catalog-grid">
        {catalog.chapters.map((chapter, index) => (
          <ChapterBlock
            key={chapter.id}
            chapter={chapter}
            index={index}
            total={catalog.chapters.length}
            skills={skillsIn(catalog.skills, chapter.id)}
            allSkills={catalog.skills}
            attachments={catalog.attachments}
            chapters={catalog.chapters}
            actions={actions}
            busy={busy}
          />
        ))}
        {(unplaced.length > 0 || unplacedContent.length > 0) && (
          <ChapterBlock
            chapter={null}
            index={0}
            total={0}
            skills={unplaced}
            allSkills={catalog.skills}
            attachments={catalog.attachments}
            chapters={catalog.chapters}
            actions={actions}
            busy={busy}
          />
        )}
      </div>
      {pickChapter !== null && (
        <SkillPicker
          title={__('Add skills', 'ohmylms')}
          confirmLabel={__('Add to course', 'ohmylms')}
          courseId={courseId}
          onClose={() => setPickChapter(null)}
          onConfirm={(picked) => {
            const chapterId = pickChapter;
            setPickChapter(null);
            edit((c) => ({ skills: addSkills(c.skills, picked, chapterId, c.mode) }));
          }}
        />
      )}
      {attach && (
        <AttachDialog
          courseId={courseId}
          chapters={catalog.chapters}
          skills={catalog.skills}
          scope={attach}
          onClose={() => setAttach(null)}
          onConfirm={({ picks, scope, options }) => {
            setAttach(null);
            edit((c) => ({ attachments: addAttachments(c.attachments, picks, scope, options) }));
          }}
        />
      )}
      {publishing && (
        <PublishDialog
          catalog={catalog}
          errors={publishErrors}
          busy={busy}
          onClose={() => setPublishing(false)}
          onPublish={(applyExisting) =>
            hub.publish(applyExisting).then((ok) => ok && setPublishing(false))
          }
        />
      )}
      {confirmDelete && (
        <Modal
          title={__('Delete chapter?', 'ohmylms')}
          onRequestClose={() => setConfirmDelete(null)}
          className="ohmylms-content-hub-dialog"
        >
          <p>
            {sprintf(
              __(
                '“%s” will be deleted. Its skills and attached content stay in the course, not in any chapter.',
                'ohmylms',
              ),
              confirmDelete.name,
            )}
          </p>
          <div className="ohmylms-content-hub-dialog-actions">
            <Button variant="tertiary" onClick={() => setConfirmDelete(null)}>
              {__('Cancel', 'ohmylms')}
            </Button>
            <Button
              variant="primary"
              isDestructive
              onClick={() => {
                const id = confirmDelete.id;
                setConfirmDelete(null);
                hub.deleteChapter(id);
              }}
            >
              {__('Delete chapter', 'ohmylms')}
            </Button>
          </div>
        </Modal>
      )}
    </AdminPage>
  );
}
