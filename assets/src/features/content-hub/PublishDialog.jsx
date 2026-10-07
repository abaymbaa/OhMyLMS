import { createElement, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { Button, CheckboxControl, Modal, Notice } from '@wordpress/components';

/**
 * Publishing makes the draft structure the version learners follow. Enrolled learners who have not
 * finished keep their version unless you move them, and everything after this stays a draft.
 */
export function PublishDialog({ catalog, errors, busy, onPublish, onClose }) {
  const [applyExisting, setApplyExisting] = useState(false);
  const draftCourse = catalog.course.status !== 'publish';
  return (
    <Modal
      title={__('Publish this course', 'ohmylms')}
      onRequestClose={onClose}
      className="ohmylms-content-hub-dialog"
    >
      <p>
        {sprintf(
          __(
            'This publishes version %d of “%s”. Later edits stay in the draft until you publish again.',
            'ohmylms',
          ),
          catalog.published_version + 1,
          catalog.course.title,
        )}
      </p>
      {draftCourse && (
        <Notice status="warning" isDismissible={false}>
          {__(
            'The course itself is not published yet. Learners only see these chapters and skills once the course is published too.',
            'ohmylms',
          )}
        </Notice>
      )}
      {errors.length > 0 && (
        <Notice status="error" isDismissible={false}>
          <p>{__('Fix these before publishing:', 'ohmylms')}</p>
          <ul>
            {errors.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        </Notice>
      )}
      <CheckboxControl
        label={__(
          'Also move learners who are enrolled and have not completed the course to this version',
          'ohmylms',
        )}
        checked={applyExisting}
        onChange={setApplyExisting}
        __nextHasNoMarginBottom
      />
      <div className="ohmylms-content-hub-dialog-actions">
        <Button variant="tertiary" onClick={onClose}>
          {__('Cancel', 'ohmylms')}
        </Button>
        <Button
          variant="primary"
          isBusy={busy}
          disabled={busy}
          onClick={() => onPublish(applyExisting)}
        >
          {__('Publish', 'ohmylms')}
        </Button>
      </div>
    </Modal>
  );
}
