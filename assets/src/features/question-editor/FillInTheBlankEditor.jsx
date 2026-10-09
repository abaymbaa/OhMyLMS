/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createFillInTheBlankEditor( readRuntime ) {
	return function FillInTheBlankEditor() {
		const {
			Fd,
			I: Controls,
			L: Entitlements,
			React,
			T: StoreModule,
			b: I18n,
			y: WordPressData,
		} = readRuntime();
		var e,
			t,
			n = true,
			questionId = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).selectSelectedQuestionId();
			}, [] ),
			a =
				( 0, WordPressData.useSelect )(
					function ( e ) {
						return e( StoreModule.default ).getQuestionContents();
					},
					[ questionId ]
				) || [],
			hasValidationErrors = ( 0, WordPressData.useSelect )( function (
				e
			) {
				return e( StoreModule.default ).selectQuizzesError();
			}, [] ),
			i = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			addContentToQuestion = i.addContentToQuestion,
			setIsProModalOpen = i.setIsProModalOpen;
		const selected = WordPressData.useSelect(
			( select ) => select( StoreModule.default ).selectQuestion(),
			[]
		);
		const blanks = [
			...( selected?.name || '' ).matchAll( /\{([^{}<>]+)\}/gu ),
		].filter( ( match ) => match[ 1 ].trim() );
		const help = I18n.__(
			'Write answers in braces in the question above: The capital is {Paris}. Each brace pair becomes an inline blank, sized to its answer.',
			'ohmylms'
		);
		const caseSensitive = ! [ false, 0, '0' ].includes(
			selected?.settings?.case_sensitive
		);
		const caseSetting = (
			<label style={ { display: 'block', marginBottom: 16 } }>
				<input
					type="checkbox"
					checked={ caseSensitive }
					onChange={ ( event ) =>
						i.updateQuestionData( questionId, {
							settings: {
								...selected.settings,
								case_sensitive: event.target.checked,
							},
						} )
					}
				/>{ ' ' }
				{ I18n.__( 'Case-sensitive answers', 'ohmylms' ) }
				<small style={ { display: 'block', marginTop: 4 } }>
					{ I18n.__(
						'When off, Paris and paris are both accepted.',
						'ohmylms'
					) }
				</small>
			</label>
		);
		if ( blanks.length ) {
			return (
				<React.Fragment>
					<p>{ help }</p>
					{ caseSetting }
				</React.Fragment>
			);
		}
		return (
			<React.Fragment>
				<p>{ help }</p>
				{ caseSetting }
				<div
					className={
						'ohmylms-options-list ohmylms-options-list-statement'
					}
				>
					<Controls.InputWP
						placeholder={ ( 0, I18n.__ )(
							'Enter answer(s) here, separated by commas (e.g., Dhaka, teacher, football)',
							'ohmylms'
						) }
						value={
							null === ( e = a[ 0 ] ) || void 0 === e
								? void 0
								: e.answer
						}
						onChange={ function ( e ) {
							var t;
							return ( function ( e, t ) {
								e &&
									addContentToQuestion(
										questionId,
										a.map( function ( n ) {
											return ( null == n
												? void 0
												: n.id ) === e
												? Fd(
														Fd( {}, n ),
														{},
														{
															answer: t,
														}
													)
												: n;
										} )
									);
							} )(
								null === ( t = a[ 0 ] ) || void 0 === t
									? void 0
									: t.id,
								e
							);
						} }
					/>
					{ ! hasValidationErrors ||
					( null !== ( t = a[ 0 ] ) &&
						void 0 !== t &&
						null !== ( t = t.answer ) &&
						void 0 !== t &&
						t.trim() ) ? (
						<React.Fragment />
					) : (
						<div
							className={ 'ohmylms-option-correct' }
							style={ {
								color: 'red',
								marginTop: 4,
							} }
						>
							{ ( 0, I18n.__ )(
								'Field cannot be empty',
								'ohmylms'
							) }
						</div>
					) }
				</div>
			</React.Fragment>
		);
	};
}
