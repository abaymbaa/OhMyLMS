import { createElement, useEffect, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, Modal, Notice, RadioControl, Spinner } from '@wordpress/components';
import * as api from './api.mjs';
import { groupLabel } from './syllabus.mjs';

/**
 * Deleting a topic. Linked courses, skills, question banks and exams are never deleted, only their place in
 * the structure, and the skills in deleted chapters stay in the skill library. A topic with sub-topics needs
 * a choice for them.
 */
export function DeleteTopicDialog({ item, pending, onConfirm, onClose }) {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState('');
  const [strategy, setStrategy] = useState('promote');
  useEffect(() => {
    let current = true;
    api
      .loadItem(item.id)
      .then((response) => current && setInfo(response.dependents))
      .catch(
        (cause) =>
          current &&
          setError(cause?.message || __('Could not check what this affects.', 'ohmylms')),
      );
    return () => {
      current = false;
    };
  }, [item.id]);

  const branch = info && info.children > 0 && strategy === 'delete';
  const chapters = info ? (branch ? info.groups : info.own_groups) || 0 : 0;
  const tracks = info ? (branch ? info.tracks : info.own_tracks) || 0 : 0;
  return (
    <Modal
      title={sprintf(__('Delete “%s”?', 'ohmylms'), item.name)}
      onRequestClose={onClose}
      className="ohmylms-content-hub-dialog"
    >
      {error && (
        <Notice status="error" isDismissible={false}>
          {error}
        </Notice>
      )}
      {!info && !error && <Spinner />}
      {info && (
        <>
          {info.children > 0 && (
            <RadioControl
              label={sprintf(
                _n(
                  'This topic has %d sub-topic.',
                  'This topic has %d sub-topics.',
                  info.children,
                  'ohmylms',
                ),
                info.children,
              )}
              selected={strategy}
              options={[
                {
                  value: 'promote',
                  label: __(
                    'Move its sub-topics up one level and delete only this topic',
                    'ohmylms',
                  ),
                },
                {
                  value: 'delete',
                  label: sprintf(
                    _n(
                      'Delete this topic and everything under it (%d topic in total)',
                      'Delete this topic and everything under it (%d topics in total)',
                      info.descendants + 1,
                      'ohmylms',
                    ),
                    info.descendants + 1,
                  ),
                },
              ]}
              onChange={setStrategy}
            />
          )}
          <ul className="ohmylms-cur-delete-effects">
            <li>
              {chapters > 0
                ? sprintf(
                    _n(
                      '%d chapter will be deleted. Its skills stay in the skill library.',
                      '%d chapters will be deleted. Their skills stay in the skill library.',
                      chapters,
                      'ohmylms',
                    ),
                    chapters,
                  )
                : __('No chapters are deleted.', 'ohmylms')}
            </li>
            {tracks > 0 && (
              <li>
                {sprintf(
                  _n(
                    'It will be removed from %d learning track.',
                    'It will be removed from %d learning tracks.',
                    tracks,
                    'ohmylms',
                  ),
                  tracks,
                )}
              </li>
            )}
          </ul>
        </>
      )}
      <div className="ohmylms-content-hub-dialog-actions">
        <Button variant="tertiary" onClick={onClose}>
          {__('Cancel', 'ohmylms')}
        </Button>
        <Button
          variant="primary"
          isDestructive
          isBusy={pending}
          disabled={!info || pending}
          onClick={() => onConfirm({ children: info.children ? strategy : '', confirm: true })}
        >
          {__('Delete topic', 'ohmylms')}
        </Button>
      </div>
    </Modal>
  );
}

/** Deleting a chapter (a skill group). Its skills stay in the skill library; the course loses the chapter. */
export function DeleteChapterDialog({ group, pending, onConfirm, onClose }) {
  const skills = group.skills.length;
  return (
    <Modal
      title={sprintf(__('Delete “%s”?', 'ohmylms'), groupLabel(group))}
      onRequestClose={onClose}
      className="ohmylms-content-hub-dialog"
    >
      <p>
        {skills
          ? sprintf(
              _n(
                'This chapter holds %d skill. The skill stays in the skill library, with its lessons and questions, but leaves this syllabus and its course.',
                'This chapter holds %d skills. The skills stay in the skill library, with their lessons and questions, but leave this syllabus and its course.',
                skills,
                'ohmylms',
              ),
              skills,
            )
          : __('This chapter is empty.', 'ohmylms')}
      </p>
      <div className="ohmylms-content-hub-dialog-actions">
        <Button variant="tertiary" onClick={onClose}>
          {__('Cancel', 'ohmylms')}
        </Button>
        <Button
          variant="primary"
          isDestructive
          isBusy={pending}
          disabled={pending}
          onClick={onConfirm}
        >
          {__('Delete chapter', 'ohmylms')}
        </Button>
      </div>
    </Modal>
  );
}
