/**
 * Reactive player presentation state, independent of store registration.
 * @param getContext
 */
export function createPlayerState( getContext ) {
	return {
		get pageLabel() {
			const c = getContext();
			return `${ c.page } / ${ c.totalPages }`;
		},
		get pageWidth() {
			const c = getContext();
			return `${ Math.min( 100, Math.max( 0, ( c.page / Math.max( 1, c.totalPages ) ) * 100 ) ) }%`;
		},
		get isPage() {
			const c = getContext();
			return c.page === c.questionPage;
		},
		get isQuestion() {
			const c = getContext();
			return (
				c.layout !== 'one_question_per_page' ||
				c.page === c.questionNumber
			);
		},
		get previousDisabled() {
			const c = getContext();
			return c.page <= 1 || c.submitting;
		},
		get nextDisplay() {
			const c = getContext();
			return c.page < c.totalPages ? '' : 'none';
		},
		get submitDisplay() {
			const c = getContext();
			return c.page >= c.totalPages || c.error ? '' : 'none';
		},
		get requiredDisplay() {
			const c = getContext();
			return c.errors[ c.questionNumber ] ? 'block' : 'none';
		},
		get exitDisplay() {
			return getContext().exitOpen ? 'block' : 'none';
		},
		get errorDisplay() {
			return getContext().error ? 'block' : 'none';
		},
		get timerWidth() {
			const c = getContext();
			return `${ c.duration ? Math.max( 0, ( c.remaining / c.duration ) * 100 ) : 0 }%`;
		},
		get timeLabel() {
			const seconds = getContext().remaining;
			const pad = ( value ) => String( value ).padStart( 2, '0' );
			return `${ seconds >= 3600 ? `${ pad( Math.floor( seconds / 3600 ) ) }h ` : '' }${ pad( Math.floor( ( seconds % 3600 ) / 60 ) ) }m ${ pad( seconds % 60 ) }s`;
		},
	};
}
