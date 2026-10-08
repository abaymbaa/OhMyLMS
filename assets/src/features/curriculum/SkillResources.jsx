import { createElement, useEffect, useRef, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, Modal, Notice, Spinner, TextControl } from '@wordpress/components';
import { withEditorReturn } from '../content-hub/editorNavigation.mjs';
import { skillLessonCreator } from './skillLessonCreation.mjs';
import * as api from './api.mjs';
import { editPath } from './workspace.mjs';
import { KindIcon, Tag } from './WorkspaceParts';

/** The name of the extension slot a future module (practice games, for one) fills to add its own section. */
export const RESOURCE_SLOT = 'syllabus.skill.resources';

const STATUS = {
  approved: () => __('Approved', 'ohmylms'),
  draft: () => __('Draft', 'ohmylms'),
  archived: () => __('Archived', 'ohmylms'),
};

/** Find lessons to tag to the skill, or write a new one (a draft) and tag it at once. */
function LessonPicker({ skill, tagged, onChoose, onCreated, onClose }) {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(null);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const creator = useRef(null);
  const latest = useRef(0);

  useEffect(() => {
    const id = ++latest.current;
    const timer = setTimeout(
      () => {
        api
          .lessonTargets({ search })
          .then((rows) => id === latest.current && setResults(rows || []))
          .catch((cause) => {
            if (id !== latest.current) return;
            setResults([]);
            setError(cause?.message || __('Could not search.', 'ohmylms'));
          });
      },
      search ? 250 : 0,
    );
    return () => clearTimeout(timer);
  }, [search]);

  async function create(event) {
    event.preventDefault();
    if (!title.trim() || busy) return;
    setBusy(true);
    setError('');
    try {
      if (!creator.current) creator.current = skillLessonCreator(skill.term_id);
      const made = await creator.current(title);
      onClose();
      onCreated(made);
    } catch (cause) {
      setError(cause?.message || __('Could not create the lesson.', 'ohmylms'));
      setRetrying(true);
      setBusy(false);
    }
  }
  async function choose(row) {
    if (busy) return;
    setBusy(true);
    setError('');
    try {
      if (!(await onChoose(row))) {
        setError(__('The lesson could not be linked to this skill. Try again.', 'ohmylms'));
      }
    } catch (cause) {
      setError(cause?.message || __('The lesson could not be linked to this skill.', 'ohmylms'));
    } finally {
      setBusy(false);
    }
  }
  const available = (results || []).filter((row) => !tagged.has(row.id));
  return (
    <Modal
      title={sprintf(__('Add a lesson to “%s”', 'ohmylms'), skill.name)}
      onRequestClose={() => !busy && onClose()}
      className="ohmylms-content-hub-dialog"
    >
      {error && (
        <Notice status="error" onRemove={() => setError('')}>
          {error}
        </Notice>
      )}
      <TextControl
        label={__('Search lessons', 'ohmylms')}
        type="search"
        value={search}
        onChange={setSearch}
        __nextHasNoMarginBottom
      />
      <div className="ohmylms-skill-picker-list" role="group" aria-label={__('Lessons', 'ohmylms')}>
        {results === null && <Spinner />}
        {results !== null && !available.length && (
          <p className="ohmylms-ext-muted">
            {__('No more lessons match. Write a new one below.', 'ohmylms')}
          </p>
        )}
        {available.map((row) => (
          <div key={row.id} className="ohmylms-ws-pick">
            <span>{row.title}</span>
            <Button
              variant="secondary"
              size="small"
              disabled={busy}
              aria-label={sprintf(__('Add %s to this skill', 'ohmylms'), row.title)}
              onClick={() => choose(row)}
            >
              {__('Add', 'ohmylms')}
            </Button>
          </div>
        ))}
      </div>
      <form className="ohmylms-ws-pick-new" onSubmit={create}>
        <TextControl
          label={__('New lesson title', 'ohmylms')}
          placeholder={__('Enter a title to create a lesson', 'ohmylms')}
          help={__('Creates a draft linked to this skill and opens the lesson editor.', 'ohmylms')}
          value={title}
          onChange={setTitle}
          disabled={busy || retrying}
          __nextHasNoMarginBottom
        />
        <Button variant="primary" type="submit" isBusy={busy} disabled={!title.trim() || busy}>
          {retrying ? __('Retry create and add', 'ohmylms') : __('Create and add', 'ohmylms')}
        </Button>
      </form>
      <div className="ohmylms-content-hub-dialog-actions">
        <Button variant="tertiary" disabled={busy} onClick={onClose}>
          {__('Done', 'ohmylms')}
        </Button>
      </div>
    </Modal>
  );
}

/**
 * What a skill owns. Lessons are tagged to the skill and questions are mapped to it in the question bank, so
 * both follow the skill into every syllabus and course that uses it. Games (soon) will add a section here
 * through the `syllabus.skill.resources` slot.
 */
export function SkillResources({ skill, syllabus, returnTo }) {
  const [lessons, setLessons] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [error, setError] = useState('');
  const [picking, setPicking] = useState(false);
  const [busy, setBusy] = useState(false);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let current = true;
    setLessons(null);
    setQuestions(null);
    setError('');
    api
      .loadSkill(skill.term_id)
      .then(async (data) => {
        const ids = data.lessons || [];
        const rows = ids.length ? await api.lessonTargets({ include: ids }) : [];
        if (current) setLessons({ ids, rows });
      })
      .catch(
        (cause) =>
          current && setError(cause?.message || __('Could not load the lessons.', 'ohmylms')),
      );
    api
      .skillQuestions(skill.term_id)
      .then((data) => current && setQuestions(data))
      .catch(
        (cause) =>
          current && setError(cause?.message || __('Could not load the questions.', 'ohmylms')),
      );
    return () => {
      current = false;
    };
  }, [skill.term_id, version]);

  /** Replace the lessons tagged to the skill, then read them again so the list is what is stored. */
  async function setTagged(ids) {
    setBusy(true);
    setError('');
    try {
      await api.setSkillLessons(skill.term_id, ids);
      setVersion((value) => value + 1);
      return true;
    } catch (cause) {
      setError(cause?.message || __('The lessons could not be saved.', 'ohmylms'));
      return false;
    } finally {
      setBusy(false);
    }
  }
  const tagged = new Set(lessons?.ids || []);
  const total = questions?.total ?? 0;
  const approved = (questions?.items || []).filter((item) => item.status === 'approved').length;
  const slot = window.ohmylms?.extensions?.renderSlot;

  return (
    <section className="ohmylms-ws-owns" aria-label={__('What this skill owns', 'ohmylms')}>
      <h3>{__('What this skill owns', 'ohmylms')}</h3>
      <p className="ohmylms-ext-muted">
        {__(
          'Lessons and questions belong to the skill, so they go wherever the skill goes: into this syllabus’s course and into any other that uses it.',
          'ohmylms',
        )}
      </p>
      {error && (
        <Notice status="error" onRemove={() => setError('')}>
          {error}
        </Notice>
      )}

      <div className="ohmylms-ws-owns-block">
        <div className="ohmylms-ws-owns-head">
          <h4>
            {__('Lessons', 'ohmylms')} <Tag>{lessons ? lessons.ids.length : '…'}</Tag>
          </h4>
          <Button
            variant="secondary"
            size="small"
            disabled={busy || !lessons}
            onClick={() => setPicking(true)}
          >
            {__('Add lesson', 'ohmylms')}
          </Button>
        </div>
        {!lessons && !error && <Spinner />}
        {lessons && !lessons.rows.length && (
          <p className="ohmylms-ext-muted">{__('No lessons teach this skill yet.', 'ohmylms')}</p>
        )}
        {lessons && lessons.rows.length > 0 && (
          <ul className="ohmylms-ws-owned">
            {lessons.rows.map((row) => (
              <li key={row.id}>
                <KindIcon kind="lesson" />
                <a href={`#${withEditorReturn(editPath('lesson', row.id), returnTo)}`}>
                  {row.title}
                </a>
                <Button
                  variant="link"
                  isDestructive
                  disabled={busy}
                  aria-label={sprintf(__('Take %s off this skill', 'ohmylms'), row.title)}
                  onClick={() => setTagged(lessons.ids.filter((id) => id !== row.id))}
                >
                  {__('Remove', 'ohmylms')}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="ohmylms-ws-owns-block">
        <div className="ohmylms-ws-owns-head">
          <h4>
            {__('Questions', 'ohmylms')} <Tag>{questions ? total : '…'}</Tag>
          </h4>
          <Button variant="secondary" size="small" href="#/content-hub/question-bank">
            {__('Open the question bank', 'ohmylms')}
          </Button>
        </div>
        {!questions && !error && <Spinner />}
        {questions && !total && (
          <p className="ohmylms-ext-muted">
            {__(
              'No questions are mapped to this skill yet. Write them in the question bank and map them to the skill.',
              'ohmylms',
            )}
          </p>
        )}
        {questions && total > 0 && (
          <>
            <ul className="ohmylms-ws-owned">
              {questions.items.map((item) => (
                <li key={item.id}>
                  <KindIcon kind="quiz" />
                  <span className="ohmylms-ws-owned-title">
                    {item.name || sprintf(__('Question %d', 'ohmylms'), item.id)}
                  </span>
                  <Tag tone={item.status === 'approved' ? 'ok' : ''}>
                    {(STATUS[item.status] || (() => item.status))()}
                  </Tag>
                </li>
              ))}
            </ul>
            <p className="ohmylms-ext-muted">
              {sprintf(
                _n(
                  '%1$d question is mapped to this skill (%2$d of those shown approved).',
                  '%1$d questions are mapped to this skill (%2$d of those shown approved).',
                  total,
                  'ohmylms',
                ),
                total,
                approved,
              )}
            </p>
          </>
        )}
      </div>

      <div className="ohmylms-ws-owns-extra">
        {slot ? slot(RESOURCE_SLOT, { skill, syllabus }) : null}
      </div>

      {picking && (
        <LessonPicker
          skill={skill}
          tagged={tagged}
          onClose={() => setPicking(false)}
          onCreated={(lesson) => {
            setVersion((value) => value + 1);
            window.location.hash = withEditorReturn(editPath('lesson', lesson.id), returnTo);
          }}
          onChoose={(row) => setTagged([...new Set([...(lessons?.ids || []), row.id])])}
        />
      )}
    </section>
  );
}
