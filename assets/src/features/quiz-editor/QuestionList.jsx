/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createQuestionList( readRuntime ) {
	return function QuestionList() {
		const {
			Bc,
			Ec: QuestionValidation,
			Gc,
			I: Controls,
			Lc,
			React,
			T: StoreModule,
			Uc,
			Vc,
			b: I18n,
			g: ReactHooks,
			uc,
			y: WordPressData,
		} = readRuntime();
		var e,
			t = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			quiz = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getQuiz();
			}, [] ),
			r =
				( 0, WordPressData.useSelect )(
					function ( e ) {
						return e( StoreModule.default ).getAllQuestions();
					},
					[ null == quiz ? void 0 : quiz.id ]
				) || [],
			a = ( function ( e, t ) {
				return (
					( function ( e ) {
						if ( Array.isArray( e ) ) {
							return e;
						}
					} )( e ) ||
					( function ( e, t ) {
						var n =
							null == e
								? null
								: ( 'undefined' !== typeof Symbol &&
										e[ Symbol.iterator ] ) ||
									e[ '@@iterator' ];
						if ( null != n ) {
							var r,
								a,
								o,
								i,
								l = [],
								c = ! 0,
								u = ! 1;
							try {
								if (
									( ( o = ( n = n.call( e ) ).next ),
									0 === t )
								) {
									if ( Object( n ) !== n ) {
										return;
									}
									c = ! 1;
								} else {
									for (
										;
										! ( c = ( r = o.call( n ) ).done ) &&
										( l.push( r.value ), l.length !== t );
										c = ! 0
									) {}
								}
							} catch ( e ) {
								( ( u = ! 0 ), ( a = e ) );
							} finally {
								try {
									if (
										! c &&
										null != n.return &&
										( ( i = n.return() ),
										Object( i ) !== i )
									) {
										return;
									}
								} finally {
									if ( u ) {
										throw a;
									}
								}
							}
							return l;
						}
					} )( e, t ) ||
					( function ( e, t ) {
						if ( e ) {
							if ( 'string' === typeof e ) {
								return Uc( e, t );
							}
							var n = {}.toString.call( e ).slice( 8, -1 );
							return (
								'Object' === n &&
									e.constructor &&
									( n = e.constructor.name ),
								'Map' === n || 'Set' === n
									? Array.from( e )
									: 'Arguments' === n ||
										  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
												n
										  )
										? Uc( e, t )
										: void 0
							 );
						}
					} )( e, t ) ||
					( function () {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						);
					} )()
				);
			} )( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			o = ( a[ 0 ], a[ 1 ] ),
			i =
				( ( 0, WordPressData.useSelect )( function ( e ) {
					return e( StoreModule.default ).getQuestionErrors();
				}, [] ),
				( 0, WordPressData.useSelect )( function ( e ) {
					return e( StoreModule.default ).selectQuestion();
				}, [] ) ),
			l =
				( ( 0, WordPressData.useSelect )( function ( e ) {
					return e( StoreModule.default ).selectQuizzesError();
				}, [] ),
				Lc().isValidQuestion,
				( 0, QuestionValidation.$ )( i ).isValid,
				( function () {
					var e,
						n =
							( ( e = Vc().m( function e() {
								var n;
								return Vc().w( function ( e ) {
									for (;;) {
										switch ( e.n ) {
											case 0:
												if (
													( 0, QuestionValidation.$ )(
														i
													).isValid ||
													! ( 0 < r.length )
												) {
													e.n = 1;
													break;
												}
												return (
													t.setQuizError( ! 0 ),
													e.a( 2 )
												 );
											case 1:
												t.setQuizError( ! 1 );
											case 2:
												( o( ! 0 ),
													( n =
														new Date().getTime() ),
													t.setQuestions( {
														name: 'Untitled',
														description: '',
														order_number:
															r.length + 1,
														id: n,
														temp: ! 0,
													} ),
													o( ! 1 ),
													t.setSelectedQuestionId(
														n
													) );
											case 3:
												return e.a( 2 );
										}
									}
								}, e );
							} ) ),
							function () {
								var t = this,
									n = arguments;
								return new Promise( function ( r, a ) {
									var o = e.apply( t, n );
									function i( e ) {
										Gc( o, r, a, i, l, 'next', e );
									}
									function l( e ) {
										Gc( o, r, a, i, l, 'throw', e );
									}
									i( void 0 );
								} );
							} );
					return function () {
						return n.apply( this, arguments );
					};
				} )() );
		return (
			( 0, ReactHooks.useEffect )(
				function () {
					0 === r.length && l();
				},
				[ r ]
			),
			(
				<React.Fragment>
					<div className={ 'ohmylms-editor-left-sidebar' }>
						<div className={ 'ohmylms-add-question-wrapper' }>
							<Controls.ButtonWP
								variant={ 'secondary' }
								icon={ React.createElement( uc, null ) }
								onClick={ l }
								disabled={
									1 === r.length &&
									! (
										null != i &&
										null !== ( e = i.settings ) &&
										void 0 !== e &&
										e.type
									)
								}
							>
								{ ( 0, I18n.__ )( 'Add Question', 'ohmylms' ) }
							</Controls.ButtonWP>
						</div>
						<Bc />
					</div>
				</React.Fragment>
			 )
		 );
	};
}
