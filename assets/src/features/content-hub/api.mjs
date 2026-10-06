const request = (options) => window.wp.apiFetch(options);
const base = '/ohmylms/v1';
const query = (params) => {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params || {})) {
    if (value !== undefined && value !== null && value !== '') search.set(key, String(value));
  }
  const text = search.toString();
  return text ? `?${text}` : '';
};

/**
 * A new grade, exam or subject is an ordinary course, so enrollment, pricing, memberships and
 * certificates keep working. It starts as a draft in skill-based mode with no forced chapter order.
 */
export async function createGradeOrExam(title, fetch = request) {
  const course = await fetch({
    path: `${base}/courses`,
    method: 'POST',
    data: {
      title,
      status: 'draft',
      course_type: 'self-paced',
      creation_method: '',
      isCommunityEnable: 'no',
    },
  });
  try {
    await fetch({
      path: `${base}/content-hub/catalog/${course.id}`,
      method: 'PUT',
      data: { mode: 'skill-based' },
    });
  } catch (cause) {
    const error = new Error(
      'The course was created, but could not be switched to skill-based mode. Open it from the Courses tab.',
    );
    error.cause = cause;
    error.course = course;
    throw error;
  }
  return course;
}

/** A standalone, reusable lesson: it belongs to no course until it is placed in one. */
export const createLesson = (data, fetch = request) =>
  fetch({
    path: `${base}/lessons`,
    method: 'POST',
    data: { status: 'draft', type: 'text', ...data },
  });

export const listLessons = (params, fetch = request) =>
  fetch({ path: `${base}/content-hub/lessons${query(params)}` });

export const listCourses = (params, fetch = request) =>
  fetch({ path: `${base}/content-hub/courses${query(params)}` });
export const loadCatalog = (courseId, fetch = request) =>
  fetch({ path: `${base}/content-hub/catalog/${courseId}` });
/** Replace the catalog's skills, attachments and/or mode in the draft. Returns the fresh catalog. */
export const saveCatalog = (courseId, data, fetch = request) =>
  fetch({ path: `${base}/content-hub/catalog/${courseId}`, method: 'PUT', data });
export const publishCatalog = (courseId, data = {}, fetch = request) =>
  fetch({ path: `${base}/content-hub/catalog/${courseId}/publish`, method: 'POST', data });
export const addChapter = (courseId, name, fetch = request) =>
  fetch({
    path: `${base}/content-hub/catalog/${courseId}/chapters`,
    method: 'POST',
    data: { name },
  });
export const renameChapter = (courseId, chapterId, name, fetch = request) =>
  fetch({
    path: `${base}/content-hub/catalog/${courseId}/chapters/${chapterId}`,
    method: 'PUT',
    data: { name },
  });
export const deleteChapter = (courseId, chapterId, fetch = request) =>
  fetch({
    path: `${base}/content-hub/catalog/${courseId}/chapters/${chapterId}`,
    method: 'DELETE',
  });
export const reorderChapters = (courseId, ids, fetch = request) =>
  fetch({
    path: `${base}/content-hub/catalog/${courseId}/chapters/order`,
    method: 'PUT',
    data: { ids },
  });
/** Search lessons, quizzes, assignments or skills to attach, leaving out what the course already has. */
export const searchTargets = (params, fetch = request) =>
  fetch({ path: `${base}/content-hub/targets${query(params)}` });
export const setLessonSkills = (lessonId, skillIds, fetch = request) =>
  fetch({
    path: `${base}/content-hub/lessons/${lessonId}/skills`,
    method: 'PUT',
    data: { skill_ids: skillIds },
  });
export const duplicateLesson = (lessonId, fetch = request) =>
  fetch({ path: `${base}/content-hub/lessons/${lessonId}/duplicate`, method: 'POST' });
export const trashLessons = (ids, fetch = request) =>
  fetch({ path: `${base}/content-hub/lessons/trash`, method: 'POST', data: { ids } });
const contentBase = { lesson: 'lessons', quiz: 'quiz', assignment: 'assignment' };
/** A new draft lesson, quiz or assignment, created where it is needed and attached straight away. */
export const createContent = (type, name, fetch = request) =>
  fetch({ path: `${base}/${contentBase[type]}`, method: 'POST', data: { name, status: 'draft' } });
export const editPath = (type, id) =>
  `/${{ lesson: 'lesson-edit', quiz: 'quiz-edit', assignment: 'assignment-edit' }[type]}/${id}`;
