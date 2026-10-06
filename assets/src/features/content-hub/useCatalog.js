import { useCallback, useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
  addChapter,
  deleteChapter,
  loadCatalog,
  publishCatalog,
  renameChapter,
  reorderChapters,
  saveCatalog,
} from './api.mjs';
import { createAutosave } from './autosave.mjs';
import { mergeSaved, toSavePayload } from './catalogModel.mjs';

const AUTOSAVE_MS = 700;

/**
 * Load a course's catalog and keep edits safe. Edits apply instantly and autosave to the program draft
 * (see `createAutosave`), so rapid changes never overwrite each other. Chapter changes and publishing
 * first wait for pending edits. Nothing reaches learners until `publish`.
 */
export function useCatalog(courseId) {
  const [catalog, setCatalog] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [publishErrors, setPublishErrors] = useState([]);
  const ref = useRef(null);
  const live = useRef(true);
  const current = useRef(courseId);
  const saver = useRef(null);

  const apply = (next) => {
    ref.current = next;
    setCatalog(next);
  };

  if (!saver.current) {
    saver.current = createAutosave({
      delay: AUTOSAVE_MS,
      onStatus: (next, cause) => {
        if (!live.current) return;
        setStatus(next);
        if (next === 'error')
          setError(cause?.message || __('Your changes could not be saved.', 'ohmylms'));
      },
      save: async () => {
        const id = current.current;
        const saved = await saveCatalog(id, toSavePayload(ref.current));
        if (live.current && current.current === id) apply(mergeSaved(ref.current, saved));
      },
    });
  }
  const flush = useCallback(() => saver.current.flush(), []);

  useEffect(() => {
    live.current = true;
    current.current = courseId;
    ref.current = null;
    saver.current.reset();
    setCatalog(null);
    setStatus('idle');
    setError('');
    setPublishErrors([]);
    loadCatalog(courseId)
      .then((data) => {
        if (live.current && current.current === courseId) apply(data);
      })
      .catch((cause) => {
        if (live.current) setError(cause?.message || __('Could not load this course.', 'ohmylms'));
      });
    return () => {
      // Leaving the page keeps pending edits: they are sent before the state is dropped.
      if (saver.current.isDirty()) saver.current.flush();
      live.current = false;
    };
  }, [courseId]);

  useEffect(() => {
    const warn = (event) => {
      if (saver.current.isDirty() || saver.current.isSaving()) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, []);

  /** Apply an edit: `edit(catalog)` returns the next catalog. */
  const change = useCallback((edit) => {
    if (!ref.current) return;
    apply(edit(ref.current));
    setError('');
    saver.current.markDirty();
  }, []);

  /** Run a server operation after pending edits are saved; its response replaces the catalog. */
  const structural = useCallback(async (work) => {
    setBusy(true);
    setError('');
    try {
      if (!(await saver.current.flush())) return false;
      const next = await work();
      if (live.current && next) apply(next);
      return true;
    } catch (cause) {
      if (live.current)
        setError(cause?.message || __('That did not work. Please try again.', 'ohmylms'));
      return false;
    } finally {
      if (live.current) setBusy(false);
    }
  }, []);

  const publish = useCallback(async (applyExisting) => {
    setPublishErrors([]);
    setBusy(true);
    setError('');
    try {
      if (!(await saver.current.flush())) return false;
      const next = await publishCatalog(current.current, {
        apply_existing: Boolean(applyExisting),
      });
      if (live.current) {
        apply(next);
        setStatus('saved');
      }
      return true;
    } catch (cause) {
      if (live.current) {
        setPublishErrors(cause?.data?.errors || []);
        setError(cause?.message || __('Could not publish.', 'ohmylms'));
      }
      return false;
    } finally {
      if (live.current) setBusy(false);
    }
  }, []);

  return {
    catalog,
    status,
    error,
    busy,
    publishErrors,
    setError,
    change,
    flush,
    publish,
    addChapter: (name) => structural(() => addChapter(current.current, name)),
    renameChapter: (id, name) => structural(() => renameChapter(current.current, id, name)),
    deleteChapter: (id) => structural(() => deleteChapter(current.current, id)),
    reorderChapters: (ids) => structural(() => reorderChapters(current.current, ids)),
  };
}
