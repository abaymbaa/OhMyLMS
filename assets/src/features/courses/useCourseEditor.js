import { useEffect, useRef, useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { loadCourse, saveCourseWithChapters, updateCourse } from './api.mjs';
import {
  prepareCoursePayload,
  orderedChapters,
  completedCourseSteps,
  mergeSavedCourse,
} from './model.mjs';

export function useCourseEditor({ store, courseId, enableSpin, isAi }) {
  const state = useSelect(
    (select) => {
      const data = select(store);
      return {
        course: isAi ? data.getAISuggestedCourses()?.[Number(courseId) - 1] : data.getCourse(),
        chapters: data.getCourseChapters(),
        validSettings: data.isValidCourseSettings(),
        integrations: data.getAllIntegrations(),
        notice: data.getNotificationMessage(),
        noticeStatus: data.getNotificationStatus(),
      };
    },
    [store, courseId, isAi],
  );
  const actions = useDispatch(store);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [autoSave, setAutoSave] = useState(false);
  const inFlight = useRef(false);
  const generation = useRef(0);
  const latestCourse = useRef(state.course);
  latestCourse.current = state.course;
  useEffect(() => {
    const current = ++generation.current;
    let active = true;
    setError(null);
    setSaving(false);
    inFlight.current = false;
    if (isAi) {
      const cached = localStorage.getItem('aiCourseOutline');
      if (cached) {
        try {
          actions.setAiCourseOutline(JSON.parse(cached));
        } catch {
          setError(__('Could not read the saved AI outline.', 'ohmylms'));
        }
      }
      setLoading(false);
    } else if (courseId && !enableSpin) {
      setLoading(true);
      actions.resetCourseState();
      actions.setCourseLoading(true);
      loadCourse(courseId)
        .then((course) => {
          if (!active || generation.current !== current) return;
          actions.setCourse(course);
          for (const chapter of course.chapters || []) {
            actions.addChapterToCourse(courseId, chapter);
            actions.setContentsToChapter(chapter.id, chapter.contents || []);
          }
          actions.getTags('');
          actions.getCategories('');
        })
        .catch((cause) => {
          if (active) setError(cause.message || __('Could not load course.', 'ohmylms'));
        })
        .finally(() => {
          if (active) {
            setLoading(false);
            actions.setCourseLoading(false);
          }
        });
    }
    return () => {
      active = false;
      generation.current++;
      if (!isAi) actions.resetCourseState();
    };
  }, [store, courseId, enableSpin, isAi]);
  async function save(status, date, section, { silent = false } = {}) {
    if (inFlight.current || loading || !state.course || isAi) return false;
    const current = generation.current;
    inFlight.current = true;
    setSaving(true);
    setError(null);
    try {
      const saved = await saveCourseWithChapters(
        courseId,
        prepareCoursePayload(state.course, { status, date }),
        orderedChapters(state.chapters),
      );
      if (current !== generation.current) return false;
      actions.setCourse(mergeSavedCourse(saved, state.course, latestCourse.current));
      if (!silent) {
        const message =
          section === 'settings'
            ? __('Course settings have been saved successfully', 'ohmylms')
            : status === 'publish'
              ? state.course.status === 'publish'
                ? __('Course has been updated successfully', 'ohmylms')
                : __('Course has been published successfully', 'ohmylms')
              : status === 'draft'
                ? __('Course has been saved as draft successfully', 'ohmylms')
                : status === 'future'
                  ? __('Course has been scheduled successfully', 'ohmylms')
                  : __('Course has been saved successfully', 'ohmylms');
        actions.showNotification(message, 'success');
      }
      return true;
    } catch (cause) {
      if (current === generation.current)
        setError(cause.message || __('Could not save course.', 'ohmylms'));
      return false;
    } finally {
      if (current === generation.current) {
        inFlight.current = false;
        setSaving(false);
        setAutoSave(false);
      }
    }
  }
  useEffect(() => {
    if (autoSave && !loading) save(undefined, undefined, undefined, { silent: true });
  }, [autoSave, state.course, state.chapters]);
  async function toggleCommunity(enabled) {
    try {
      await updateCourse(courseId, {
        has_community: enabled ? 'yes' : 'no',
        name: state.course.name || 'Untitled',
      });
      actions.setCourse({ has_community: enabled ? 'yes' : 'no' });
    } catch (cause) {
      setError(cause.message || __('Could not update community.', 'ohmylms'));
    }
  }
  return {
    ...state,
    actions,
    loading,
    saving,
    error,
    save,
    setAutoSave,
    toggleCommunity,
    completedSteps: completedCourseSteps(state.course, state.chapters, state.validSettings),
    updateTitle: (name) => {
      if (name.length <= 150) actions.setCourse({ name });
    },
    updateDescription: (description) => actions.setCourse({ description }),
  };
}
