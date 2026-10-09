const request = ( options ) => window.wp.apiFetch( options );
export const loadQuiz = ( id, fetch = request ) =>
	fetch( { path: `/ohmylms/v1/quiz/${ id }` } );
export const saveQuiz = ( id, data, fetch = request ) =>
	fetch( { path: `/ohmylms/v1/quiz/${ id }`, method: 'POST', data } );
/**
 * Remove a question from one quiz. The question itself stays in the question bank.
 * @param quizId
 * @param questionId
 * @param fetch
 */
export const removeQuestionFromQuiz = ( quizId, questionId, fetch = request ) =>
	fetch( {
		path: `/ohmylms/v1/quiz/${ quizId }/questions/${ questionId }`,
		method: 'DELETE',
	} );
