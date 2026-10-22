import { matrixPath } from './skillMatrix.mjs';
const request = ( options ) => window.wp.apiFetch( options );
export const loadAssessmentSettings = ( quizId, fetch = request ) =>
	fetch( { path: `/ohmylms/v1/quiz/${ quizId }/assessment-settings` } );
export const saveAssessmentSettings = ( quizId, data, fetch = request ) =>
	fetch( {
		path: `/ohmylms/v1/quiz/${ quizId }/assessment-settings`,
		method: 'PUT',
		data,
	} );
export const loadQuizQuestions = ( quizId, fetch = request ) =>
	fetch( { path: `/ohmylms/v1/quiz/${ quizId }/content` } );
export const loadRevisions = ( quizId, fetch = request ) =>
	fetch( { path: `/ohmylms/v1/quiz/${ quizId }/revisions` } );
export const loadCourses = ( fetch = request ) =>
	fetch( { path: '/ohmylms/v1/courses?per_page=100' } );
export const loadSkillMatrix = ( courseId, fetch = request, chapterId = '' ) =>
	fetch( {
		path: `/ohmylms/v1/${ matrixPath( { courseId, chapterId } ) }`,
	} );
export const loadStudentSkills = (
	studentId,
	courseId,
	fetch = request,
	chapterId = ''
) =>
	fetch( {
		path: `/ohmylms/v1/reports/skills/students/${ studentId }?course_id=${ courseId }${ Number( chapterId ) ? `&chapter_id=${ Number( chapterId ) }` : '' }`,
	} );
export const rebuildStudent = ( studentId, fetch = request ) =>
	fetch( {
		path: `/ohmylms/v1/reports/skills/students/${ studentId }/rebuild`,
		method: 'POST',
	} );
/**
 * Ask for an AI-written note about a learner's skills. The AI only explains; levels never come from it.
 * @param studentId
 * @param audience
 * @param fetch
 */
export const askInsight = (
	studentId,
	audience = 'teacher',
	fetch = request
) =>
	fetch( {
		path: `/ohmylms/v1/reports/skills/students/${ studentId }/insight`,
		method: 'POST',
		data: { audience },
	} );
export const loadPools = ( quizId, fetch = request ) =>
	fetch( { path: `/ohmylms/v1/quiz/${ quizId }/pools` } );
export const savePools = ( quizId, pools, fetch = request ) =>
	fetch( {
		path: `/ohmylms/v1/quiz/${ quizId }/pools`,
		method: 'PUT',
		data: { pools },
	} );
