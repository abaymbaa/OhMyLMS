import { createPlayerState } from './state.js';
import { validate } from './validation.js';
/**
 * Construct the player against a runtime; registration belongs to index.js.
 * @param root0
 * @param root0.getContext
 * @param root0.getElement
 * @param root0.withSyncEvent
 * @param root0.withScope
 * @param root0.isAnswered
 * @param root0.emit
 * @param root0.expire
 */
export function createQuizPlayer( {
	getContext,
	getElement,
	withSyncEvent,
	withScope,
	isAnswered,
	emit,
	expire,
} ) {
	const roots = new WeakMap();
	const rootOf = () =>
		getElement().ref.closest( '[data-wp-interactive="ohmylms/quiz"]' );
	return {
		state: createPlayerState( getContext ),
		actions: {
			next: withSyncEvent( ( event ) => {
				event.preventDefault();
				event.stopPropagation();
				const c = getContext(),
					root = rootOf();
				if (
					c.submitting ||
					c.page >= c.totalPages ||
					! validate( root, c, true, isAnswered )
				) {
					return;
				}
				if (
					! emit(
						root,
						'quiz-before-navigate',
						{ quizId: c.quizId, page: c.page + 1 },
						true
					)
				) {
					return;
				}
				c.page++;
				emit( root, 'quiz-navigated', {
					quizId: c.quizId,
					page: c.page,
				} );
			} ),
			previous: withSyncEvent( ( event ) => {
				event.preventDefault();
				event.stopPropagation();
				const c = getContext(),
					root = rootOf();
				if (
					c.submitting ||
					c.page <= 1 ||
					! emit(
						root,
						'quiz-before-navigate',
						{ quizId: c.quizId, page: c.page - 1 },
						true
					)
				) {
					return;
				}
				c.page--;
				emit( root, 'quiz-navigated', {
					quizId: c.quizId,
					page: c.page,
				} );
			} ),
			submitClick: withSyncEvent( ( event ) => {
				event.stopPropagation();
			} ),
			submit: withSyncEvent( ( event ) => {
				event.stopPropagation();
				const c = getContext(),
					root = rootOf();
				const exit = [
					'ohmylms-quiz-exit-submission',
					'ohmylms-quiz-preview-exit',
				].includes(
					event.target.querySelector( '[name=action]' )?.value
				);
				if (
					c.submitting ||
					( ! exit && ! validate( root, c, false, isAnswered ) ) ||
					! emit(
						root,
						'quiz-before-submit',
						{ quizId: c.quizId, exit },
						true
					)
				) {
					event.preventDefault();
					return;
				}
				// Native form POST retains the existing nonce, enrollment, grading and redirect checks.
				c.submitting = true;
			} ),
			answerChanged: withSyncEvent( ( event ) => {
				event.stopPropagation();
				const c = getContext(),
					input = event.target;
				const limit = Number( input.getAttribute( 'data-limit' ) );
				if ( limit > 0 && input.value.length > limit ) {
					input.value = input.value.slice( 0, limit );
				}
				const hint = input.parentElement.querySelector(
					'.ohmylms-character-limit-hints'
				);
				if ( hint && limit > 0 ) {
					hint.textContent = `${ input.value.length }/${ limit }`;
				}
				if ( input.matches( '.textarea-auto-resize' ) ) {
					input.style.height = 'auto';
					input.style.height = `${ input.scrollHeight }px`;
				}
				if ( c.questionNumber ) {
					c.errors = { ...c.errors, [ c.questionNumber ]: false };
				}
				emit( rootOf(), 'quiz-answer-changed', {
					quizId: c.quizId,
					questionNumber: c.questionNumber,
				} );
			} ),
			openExit: withSyncEvent( ( event ) => {
				event.preventDefault();
				event.stopPropagation();
				getContext().exitOpen = true;
			} ),
			closeExit: withSyncEvent( ( event ) => {
				event.preventDefault();
				event.stopPropagation();
				getContext().exitOpen = false;
			} ),
			escape( event ) {
				if ( event.key === 'Escape' ) {
					getContext().exitOpen = false;
				}
			},
			outside( event ) {
				if (
					! event.target.closest(
						'.quiz-alert-wrapper,.quiz-page-close'
					)
				) {
					getContext().exitOpen = false;
				}
			},
			*expire() {
				const c = getContext(),
					root = rootOf();
				if ( c.submitting ) {
					return;
				}
				c.submitting = true;
				const form = root
					.querySelector( '.ohmylms-quiz-form' )
					.closest( 'form' );
				if ( c.preview ) {
					HTMLFormElement.prototype.submit.call( form );
					return;
				}
				const body = new URLSearchParams( new FormData( form ) );
				body.set( 'action', 'ohmylms_quiz_exit_submission' );
				body.set( 'content_id', c.quizId );
				body.set( 'attempt_id', c.attemptId );
				body.set( 'nonce', c.expiryNonce );
				try {
					const response = yield fetch( c.ajaxUrl, {
						method: 'POST',
						credentials: 'same-origin',
						body,
					} );
					const result = yield response.json();
					if (
						! response.ok ||
						! result.success ||
						! result.data?.url
					) {
						throw new Error( c.submissionError );
					}
					emit( root, 'quiz-expired', { quizId: c.quizId } );
					window.location.assign( result.data.url );
				} catch {
					c.error = c.submissionError;
					c.submitting = false;
					emit( root, 'quiz-error', {
						quizId: c.quizId,
						operation: 'expiry',
					} );
				}
			},
		},
		callbacks: {
			mount() {
				const root = getElement().ref,
					c = getContext();
				if ( roots.has( root ) ) {
					return;
				}
				const deadline = Date.now() + c.remaining * 1000;
				let timer;
				const scopedExpire = withScope( () => expire() );
				if ( c.timed ) {
					timer = setInterval( () => {
						c.remaining = Math.max(
							0,
							Math.ceil( ( deadline - Date.now() ) / 1000 )
						);
						if ( ! c.remaining ) {
							clearInterval( timer );
							scopedExpire();
						}
					}, 250 );
				}
				roots.set( root, true );
				emit( root, 'quiz-mounted', { quizId: c.quizId } );
				return () => {
					clearInterval( timer );
					roots.delete( root );
					emit( root, 'quiz-unmounted', { quizId: c.quizId } );
				};
			},
		},
	};
}
