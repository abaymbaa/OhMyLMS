import { createElement, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
  Button,
  Dropdown,
  MenuGroup,
  MenuItem,
  Modal,
  Notice,
  SelectControl,
  TextControl,
} from '@wordpress/components';
import { createGradeOrExam, createLesson } from './api.mjs';
import { catalogPath, HUB_PATH } from './hubRoutes.mjs';

const go = (path) => {
  window.location.hash = `#${path}`;
};

const lessonTypes = () => {
  const extra = Object.keys(window.ohmylmsExtensionManifest?.lesson || {});
  return [
    { label: __('Text', 'ohmylms'), value: 'text' },
    { label: __('Video', 'ohmylms'), value: 'video' },
    { label: __('Audio', 'ohmylms'), value: 'audio' },
    ...extra.map((id) => ({ label: id, value: id })),
  ];
};

function NameDialog({ title, label, help, submitLabel, extra, onSubmit, onClose }) {
  const [name, setName] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  async function submit(event) {
    event.preventDefault();
    if (!name.trim() || busy) return;
    setBusy(true);
    setError('');
    try {
      await onSubmit(name.trim());
      onClose();
    } catch (cause) {
      setError(cause?.message || __('Could not save. Please try again.', 'ohmylms'));
      setBusy(false);
    }
  }
  return (
    <Modal title={title} onRequestClose={onClose} className="ohmylms-content-hub-dialog">
      <form onSubmit={submit}>
        {error && (
          <Notice status="error" isDismissible={false}>
            {error}
          </Notice>
        )}
        <TextControl
          label={label}
          help={help}
          value={name}
          onChange={setName}
          autoFocus
          __nextHasNoMarginBottom
        />
        {extra}
        <div className="ohmylms-content-hub-dialog-actions">
          <Button variant="tertiary" onClick={onClose} disabled={busy}>
            {__('Cancel', 'ohmylms')}
          </Button>
          <Button variant="primary" type="submit" isBusy={busy} disabled={!name.trim() || busy}>
            {submitLabel}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

/** The hub's single Add control: a course (grade, exam or subject), a lesson or a skill. */
export function AddMenu() {
  const [dialog, setDialog] = useState('');
  const [lessonType, setLessonType] = useState('text');
  return (
    <>
      <Dropdown
        popoverProps={{ placement: 'bottom-end' }}
        renderToggle={({ isOpen, onToggle }) => (
          <Button variant="primary" onClick={onToggle} aria-expanded={isOpen} aria-haspopup="menu">
            {__('Add', 'ohmylms')}
          </Button>
        )}
        renderContent={({ onClose }) => (
          <MenuGroup label={__('Add to the Content Hub', 'ohmylms')}>
            <MenuItem
              info={__('A grade, exam or subject such as Grade 2 Math or Digital SAT', 'ohmylms')}
              onClick={() => {
                onClose();
                setDialog('course');
              }}
            >
              {__('Course', 'ohmylms')}
            </MenuItem>
            <MenuItem
              info={__('Reusable: attach it to chapters or skills in any course', 'ohmylms')}
              onClick={() => {
                onClose();
                setDialog('lesson');
              }}
            >
              {__('Lesson', 'ohmylms')}
            </MenuItem>
            <MenuItem
              info={__('Add to the shared skill library', 'ohmylms')}
              onClick={() => {
                onClose();
                go(`${HUB_PATH}/skills?add=${Date.now()}`);
              }}
            >
              {__('Skill', 'ohmylms')}
            </MenuItem>
          </MenuGroup>
        )}
      />
      {dialog === 'course' && (
        <NameDialog
          title={__('Add a course', 'ohmylms')}
          label={__('Name', 'ohmylms')}
          help={__(
            'For example Grade 2 Math, MATH0580 or Digital SAT. It starts as a draft in skill-based mode.',
            'ohmylms',
          )}
          submitLabel={__('Create and open catalog', 'ohmylms')}
          onSubmit={async (title) => {
            const course = await createGradeOrExam(title);
            go(catalogPath(course.id));
          }}
          onClose={() => setDialog('')}
        />
      )}
      {dialog === 'lesson' && (
        <NameDialog
          title={__('Add a lesson', 'ohmylms')}
          label={__('Title', 'ohmylms')}
          submitLabel={__('Create and edit lesson', 'ohmylms')}
          extra={
            <SelectControl
              label={__('Type', 'ohmylms')}
              value={lessonType}
              options={lessonTypes()}
              onChange={setLessonType}
              __nextHasNoMarginBottom
            />
          }
          onSubmit={async (name) => {
            const lesson = await createLesson({ name, type: lessonType });
            go(`/lesson-edit/${lesson.id}`);
          }}
          onClose={() => setDialog('')}
        />
      )}
    </>
  );
}
