import { createElement } from '@wordpress/element';
import { CatalogEditor } from './CatalogEditor';
import { CourseCards } from './CourseCards';
import { useCatalogCourseId } from './useHashRoute';

/** The hub's Catalog tab: the grades, exams and subjects, or one of them open for editing. */
export function CatalogPage() {
  const courseId = useCatalogCourseId();
  return courseId ? <CatalogEditor key={courseId} courseId={courseId} /> : <CourseCards />;
}
