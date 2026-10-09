/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createReorderEditor( readRuntime ) {
	return function ReorderEditor() {
		const {
			$d,
			$e,
			I: Controls,
			Jd,
			Qd,
			React,
			T: StoreModule,
			We,
			b: I18n,
			g: ReactHooks,
			gc,
			q,
			qd,
			xs,
			y: WordPressData,
		} = readRuntime();
		var questionId = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).selectSelectedQuestionId();
			}, [] ),
			options = ( 0, WordPressData.useSelect )(
				function ( e ) {
					return e( StoreModule.default ).getQuestionContents();
				},
				[ questionId ]
			),
			question = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).selectQuestion();
			}, [] ),
			hasValidationErrors = ( 0, WordPressData.useSelect )( function (
				e
			) {
				return e( StoreModule.default ).selectQuizzesError();
			}, [] ),
			a = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			addContentToQuestion = a.addContentToQuestion,
			updateQuestionData = a.updateQuestionData,
			l = Jd( ( 0, ReactHooks.useState )( null ), 2 ),
			c = l[ 0 ],
			u = l[ 1 ],
			s = Jd( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			d = s[ 0 ],
			m = s[ 1 ],
			p = function ( n, r, a ) {
				addContentToQuestion(
					questionId,
					r
						? options.map( function ( e ) {
								return e.id === n
									? $d(
											$d( {}, e ),
											{},
											{
												thumbnail_id: r.id,
												image_url: r.url,
											}
										)
									: e;
							} )
						: options.map( function ( e ) {
								return e.id === n
									? $d(
											$d( {}, e ),
											{},
											{
												thumbnail_id: '',
												image_url: '',
											}
										)
									: e;
							} )
				);
			},
			Router = Jd( ( 0, ReactHooks.useState )( null ), 2 ),
			v = ( Router[ 0 ], Router[ 1 ] ),
			h = function ( e ) {
				e.preventDefault();
			},
			_ = function ( e ) {
				e.currentTarget.classList.remove( 'dragging' );
			};
		return (
			<React.Fragment>
				{ ( 0, xs.I )( options ).map( function ( a, l ) {
					return (
						<Controls.CardWP
							key={ null == a ? void 0 : a.id }
							isBorderless={ ! 0 }
							draggable={ d !== a.id }
							onDragStart={ function ( e ) {
								return ( function ( e, t ) {
									( v( t ),
										localStorage.setItem(
											'draggedItemIndex',
											t
										),
										e.currentTarget.classList.add(
											'dragging'
										) );
								} )( e, l );
							} }
							onDragOver={ h }
							onDrop={ function ( n ) {
								return ( function ( n, r ) {
									n.preventDefault();
									var a =
										localStorage.getItem(
											'draggedItemIndex'
										);
									if ( null !== a && a != r ) {
										var i = Qd( options ),
											l = Jd( i.splice( a, 1 ), 1 )[ 0 ];
										( i.splice( r, 0, l ),
											i.forEach( function ( e, t ) {
												e.order_number = t + 1;
											} ),
											addContentToQuestion(
												questionId,
												i
											),
											v( null ),
											localStorage.removeItem(
												'draggedItemIndex'
											) );
									}
								} )( n, l );
							} }
							onDragEnd={ _ }
							padding={ '4px' }
							margin={ '0 0 16px' }
						>
							<Controls.FlexWP justify={ 'flex-start' } gap={ 4 }>
								{ React.createElement( gc, {
									className: 'ohmylms-drag-icon',
								} ) }
								<Controls.FlexBlockWP>
									{ React.createElement( qd, {
										id: null == a ? void 0 : a.id,
										showOrder: ! 0,
										orderNumber: l + 1,
										value: null == a ? void 0 : a.answer,
										imgSrc:
											null == a ? void 0 : a.image_url,
										onChange( n ) {
											return ( function ( n, r ) {
												addContentToQuestion(
													questionId,
													options.map(
														function ( e ) {
															return e.id === n
																? $d(
																		$d(
																			{},
																			e
																		),
																		{},
																		{
																			answer: r,
																		}
																	)
																: e;
														}
													)
												);
											} )( a.id, n );
										},
										onImageChange: p,
										onFocus() {
											return (
												( e = a.id ),
												void m( e )
											 );
											var e;
										},
										onBlur() {
											return ( a.id, void m( null ) );
										},
										showError: hasValidationErrors,
										placeholder: ( 0, I18n.__ )(
											'Reorder Option',
											'ohmylms'
										),
										isMatching: ! 1,
									} ) }
								</Controls.FlexBlockWP>
								<Controls.ButtonWP
									icon={ <We /> }
									onClick={ function () {
										return ( function ( r ) {
											if ( 3 > options.length ) {
												return (
													u(
														( 0, I18n.__ )(
															'You must have at least 2 options',
															'ohmylms'
														)
													),
													void setTimeout(
														function () {
															u( null );
														},
														3e3
													)
												 );
											}
											var a = options.filter(
													function ( e ) {
														return e.id !== r;
													}
												),
												o = $d( {}, question );
											( ( o.questions = a ),
												updateQuestionData(
													questionId,
													o
												) );
										} )( a.id );
									} }
								/>
							</Controls.FlexWP>
						</Controls.CardWP>
					);
				} ) }
				<Controls.SpacerWP marginY={ 4 }>
					{ c && (
						<Controls.TextWP as={ 'p' } color={ 'red' }>
							{ c }
						</Controls.TextWP>
					) }
				</Controls.SpacerWP>
				<Controls.ButtonWP
					icon={
						<q.Icon
							icon={ $e.A }
							width={ '18px' }
							height={ '18px' }
						/>
					}
					onClick={ function () {
						var r = $d( {}, question ),
							a = {
								id: Date.now(),
								answer: '',
								is_correct: ! 1,
								order_number: options.length + 1,
								temp: ! 0,
								thumbnail_id: '',
								image_url: '',
								matching_data: {
									label: '',
									image_id: '',
									image_url: '',
								},
							};
						( ( r.questions = [].concat( Qd( r.questions ), [
							$d( {}, a ),
						] ) ),
							updateQuestionData( questionId, r ),
							addContentToQuestion(
								questionId,
								[].concat( Qd( options ), [ $d( {}, a ) ] )
							) );
					} }
					variant={ 'secondary' }
					size={ 'small' }
				>
					{ ( 0, I18n.__ )( 'Add Option', 'ohmylms' ) }
				</Controls.ButtonWP>
			</React.Fragment>
		);
	};
}
