/**
 * Reactive player presentation state, independent of store registration.
 * @param getContext
 */
export function createPlayerState( getContext ) {
	return {
		get pageLabel() {
			const c = getContext();
			if ( c.layout === 'one_question_per_page' && c.questionOfLabel ) {
				return c.questionOfLabel
					.replace( '%1$d', c.page )
					.replace( '%2$d', c.totalPages );
			}
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
		// An unanswered question offers Skip; once answered the same button reads Next.
		get isSkip() {
			const c = getContext();
			return (
				c.layout === 'one_question_per_page' && ! c.answered?.[ c.page ]
			);
		},
		get nextLabel() {
			const c = getContext();
			return c.layout === 'one_question_per_page' && ! c.answered?.[ c.page ]
				? c.skipText
				: c.nextText;
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
