/** Preserve extension fields and relationships without mutating store state. */
export function prepareCoursePayload(course, { status, date } = {}) {
  return {
    ...course,
    ...(status ? { status } : {}),
    ...(status === 'future' && date ? { post_date: date } : {}),
  };
}
export function orderedChapters(chapters) {
  return (chapters?.allIds || []).map((id) => ({
    ...chapters.byId[id],
    content: [...(chapters.byId[id]?.content || [])],
  }));
}
export function completedCourseSteps(course, chapters, validSettings) {
  const result = [];
  const hasContent = orderedChapters(chapters).some((chapter) => chapter.content.length > 0);
  if (
    course?.name?.trim() &&
    course.name !== 'Untitled' &&
    course.description?.trim() &&
    (course.image_src || course.video_src) &&
    hasContent
  )
    result.push(0);
  if (validSettings) result.push(1);
  if (course?.status && course.status !== 'draft') result.push(2);
  return result;
}
/** Server normalization must not replace edits made while a save was pending. */
export function mergeSavedCourse(saved, submitted, current) {
  const result = { ...saved };
  for (const key of Object.keys(current || {})) {
    if (JSON.stringify(current[key]) !== JSON.stringify(submitted[key])) result[key] = current[key];
  }
  return result;
}
