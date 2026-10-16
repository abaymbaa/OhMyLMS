/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCourseCurriculum( readRuntime ) {
	return function CourseCurriculum( props ) {
		const {
			$p,
			Cp,
			D: Buttons,
			I: Controls,
			Ip,
			Jp,
			React,
			T: StoreModule,
			Xl,
			_,
			_f,
			b: I18n,
			bf,
			df,
			ef,
			f: Router,
			ff,
			g: ReactHooks,
			gf,
			hf,
			lc,
			uf,
			y: WordPressData,
		} = readRuntime();
		var t,
			n,
			courseId = props.courseId,
			a = void 0 === courseId ? null : courseId,
			handleAutomation = props.handleAutomation,
			handleIntegration = props.handleIntegration,
			setIsSaved = props.setIsSaved,
			setAutoSave = props.setAutoSave,
			u =
				( props.setActiveStep,
				props.activeStep,
				props.onSave,
				props.courseDescription,
				props.handleInputChange ),
			onContentChange = props.onContentChange,
			handleRemoveMedia = props.handleRemoveMedia,
			handleUploadComplete = props.handleUploadComplete,
			p = ( props.hasMedia, ( 0, Router.g )().id ),
			v = false,
			w = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			E = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getCourse();
			}, [] ),
			S =
				( ( 0, WordPressData.useSelect )( function ( e ) {
					return e( StoreModule.default ).getCourse();
				}, [] ),
				_f( ( 0, ReactHooks.useState )( ! 1 ), 2 ) ),
			R = ( S[ 0 ], S[ 1 ], _f( ( 0, ReactHooks.useState )( [] ), 2 ) ),
			x = R[ 0 ],
			C = R[ 1 ],
			P = _f( ( 0, ReactHooks.useState )( [] ), 2 ),
			O = ( P[ 0 ], P[ 1 ] ),
			k = _f( ( 0, ReactHooks.useState )( [] ), 2 ),
			j = ( k[ 0 ], k[ 1 ] ),
			A = _f( ( 0, ReactHooks.useState )( null ), 2 ),
			M = A[ 0 ],
			F = A[ 1 ],
			N = _f( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			W = N[ 0 ],
			z = N[ 1 ],
			B = _f( ( 0, ReactHooks.useState )( null ), 2 ),
			L = B[ 0 ],
			V = B[ 1 ],
			H = _f( ( 0, ReactHooks.useState )( ! 0 ), 2 ),
			G = H[ 0 ],
			U = H[ 1 ],
			q = _f( ( 0, ReactHooks.useState )( ! 0 ), 2 ),
			Y = q[ 0 ],
			Q = q[ 1 ],
			Z = _f( ( 0, ReactHooks.useState )( 0 ), 2 ),
			$ = Z[ 0 ],
			K = Z[ 1 ],
			J = _f( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			X = ( J[ 0 ], J[ 1 ] ),
			ee = _f( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			te = ee[ 0 ],
			ne = ee[ 1 ],
			re = ( 0, ReactHooks.useRef )( null ),
			ae = ( 0, ReactHooks.useRef )( null ),
			oe = _f( ( 0, ReactHooks.useState )( null ), 2 ),
			ie = ( oe[ 0 ], oe[ 1 ] ),
			le = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getCourseChapterSidebarOpen();
			} ),
			ce = ( 0, WordPressData.useSelect )(
				function ( e ) {
					return a
						? e( StoreModule.default ).getCourseChapters( a )
						: {};
				},
				[ a ]
			),
			ue = ( () => {
				if ( v ) {
					if ( null === ( t = E[ p - 1 ] ) || void 0 === t ) {
						return void 0;
					}
					return t.chapters;
				}
				return ce;
			} )(),
			se = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).selectCoursesLoading();
			}, [] ),
			de = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getIsOpenQuizBuilder();
			}, [] ),
			me = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getCourseInfoOpen();
			} ),
			pe = ( function () {
				var e,
					_tLocal =
						( ( e = hf().m( function _eLocal() {
							var _tLocal2;
							return hf().w( function ( _eLocal2 ) {
								for (;;) {
									switch ( _eLocal2.n ) {
										case 0:
											return (
												X( ! 0 ),
												Object.values( ce.byId ).reduce(
													function (
														_eLocal3,
														_tLocal3
													) {
														return Math.max(
															_eLocal3,
															_tLocal3.order_number
														);
													},
													0
												),
												( _eLocal2.n = 1 ),
												w.addChapter(
													{
														name: '',
														description: '',
														status: 'publish',
														order_number:
															Object.values(
																ue.byId
															).length,
													},
													a
												)
											 );
										case 1:
											_tLocal2 = _eLocal2.v;
											ge( _tLocal2 );
											K( _tLocal2 );
											X( ! 1 ); // Falls through to the shared async state cleanup.
										// Falls through to the shared async state cleanup.
										case 2:
											return _eLocal2.a( 2 );
									}
								}
							}, _eLocal );
						} ) ),
						function ( ..._args ) {
							var _tLocal4 = this,
								_nLocal = _args;
							return new Promise( function ( r, _aLocal ) {
								var o = e.apply( _tLocal4, _nLocal );
								function i( _eLocal4 ) {
									bf( o, r, _aLocal, i, l, 'next', _eLocal4 );
								}
								function l( _eLocal5 ) {
									bf(
										o,
										r,
										_aLocal,
										i,
										l,
										'throw',
										_eLocal5
									);
								}
								i( void 0 );
							} );
						} );
				return function ( ..._args2 ) {
					return _tLocal.apply( this, _args2 );
				};
			} )();
		( 0, ReactHooks.useEffect )(
			function () {
				if ( ue !== null && ue !== void 0 && ue.byId ) {
					var e,
						_tLocal5 = Object.values( ue.byId ).sort(
							function ( _eLocal6, _tLocal6 ) {
								return (
									Number(
										_eLocal6 === null || _eLocal6 === void 0
											? void 0
											: _eLocal6.order_number
									) -
									Number(
										_tLocal6 === null || _tLocal6 === void 0
											? void 0
											: _tLocal6.order_number
									)
								);
							}
						);
					C( _tLocal5 );
					_tLocal5.forEach( function ( _eLocal7, _tLocal7 ) {
						setTimeout( function () {
							O( function ( _tLocal8 ) {
								return [].concat( gf( _tLocal8 ), [
									_eLocal7.id,
								] );
							} );
						}, 50 * _tLocal7 );
					} );
					if ( ! $ ) {
						K(
							null === ( e = _tLocal5[ 0 ] ) || void 0 === e
								? void 0
								: e.id
						);
					}
				} else if (
					v &&
					( E === null || E === void 0 ? void 0 : E.length ) > 0
				) {
					var _nLocal2;
					C( E[ p - 1 ].chapters );
					O(
						E[ p - 1 ].chapters.map( function ( _eLocal8 ) {
							return _eLocal8.id;
						} )
					);
					K(
						null === ( _nLocal2 = E[ p - 1 ].chapters[ 0 ] ) ||
							void 0 === _nLocal2
							? void 0
							: _nLocal2.id
					);
				}
			},
			[ ue ]
		);
		( 0, ReactHooks.useEffect )(
			function () {
				var e;
				if ( x.length > 0 && ! L && ! M && G ) {
					V(
						null === ( e = x[ 0 ] ) || void 0 === e ? void 0 : e.id
					);
					U( ! 1 );
				} else if ( 1 === x.length ) {
					var _tLocal9;
					V(
						null === ( _tLocal9 = x[ 0 ] ) || void 0 === _tLocal9
							? void 0
							: _tLocal9.id
					);
					U( ! 1 );
				} else if ( 0 < x.length && ! L ) {
					var _nLocal3;
					V(
						null === ( _nLocal3 = x[ 0 ] ) || void 0 === _nLocal3
							? void 0
							: _nLocal3.id
					);
					U( ! 1 );
				}
				return function () {
					U( ! 1 );
				};
			},
			[ x ]
		);
		( 0, ReactHooks.useEffect )( function () {
			var e = re.current,
				_tLocal0 = ae.current;
			if ( e && _tLocal0 ) {
				var _nLocal4 = function () {
						var _nLocal5 = e.offsetHeight,
							r = _tLocal0.offsetHeight;
						ie(
							( () => {
								if ( _nLocal5 > r ) {
									return 'left';
								}
								if ( r > _nLocal5 ) {
									return 'right';
								}
								return null;
							} )()
						);
					},
					r = new ResizeObserver( _nLocal4 );
				return (
					r.observe( e ),
					r.observe( _tLocal0 ),
					_nLocal4(),
					function () {
						r.disconnect();
					}
				 );
			}
		}, [] );
		var fe = function ( e ) {
				for (
					var _tLocal1 = function ( _eLocal9 ) {
							return (
								_eLocal9.classList.contains(
									'ohmylms-draggable-single-chapter'
								) &&
								_eLocal9.hasAttribute( 'draggable' ) &&
								'true' === _eLocal9.getAttribute( 'draggable' )
							);
						},
						_nLocal6 = e;
					_nLocal6;
				) {
					if ( _tLocal1( _nLocal6 ) ) {
						return ! 0;
					}
					_nLocal6 = _nLocal6.parentElement;
				}
				return ! 1;
			},
			ve = function ( e ) {
				w.setCourseLoading( ! 0 );
				j( function ( _tLocal10 ) {
					return [].concat( gf( _tLocal10 ), [ e ] );
				} );
				setTimeout( function () {
					var _tLocal11 = x.filter( function ( _tLocal12 ) {
						return _tLocal12.id !== e;
					} );
					C( _tLocal11 );
					O( function ( _tLocal13 ) {
						return _tLocal13.filter( function ( _tLocal14 ) {
							return _tLocal14 !== e;
						} );
					} );
					j( function ( _tLocal15 ) {
						return _tLocal15.filter( function ( _tLocal16 ) {
							return _tLocal16 !== e;
						} );
					} );
					if ( e == $ ) {
						K( _tLocal11.length > 0 ? _tLocal11[ 0 ].id : null );
					}
					w.setCourseLoading( ! 1 );
				}, 500 );
			};
		if ( ! a ) {
			return null;
		}
		var ge = function ( e ) {
				V( e );
			},
			he = function ( e, _tLocal17 ) {
				w.updateChapterFields( e, {
					name: _tLocal17,
				} );
				ne( ! 1 );
			};
		return (
			<React.Fragment>
				<Controls.FlexWP
					align={ 'start' }
					justify={ 'start' }
					gap={ 0 }
				>
					<Controls.FlexItemWP
						className={ 'ohmylms-chapter-sidebar '.concat(
							le ? 'ohmylms-chapter-sidebar-open' : ''
						) }
					>
						{ React.createElement( lc, {
							courseId: a,
							setActiveIndex: K,
							onExpand: ge,
							activeChapters: x,
						} ) }
						{ se ? (
							<React.Fragment>
								<_.A active={ ! 0 } />
							</React.Fragment>
						) : (
							<React.Fragment>
								<div
									className={ 'ohmylms-chapter-nav-wrapper' }
								>
									{ x.length > 0 &&
										x.map( function ( e, _tLocal18 ) {
											return (
												<div
													key={
														e === null ||
														e === void 0
															? void 0
															: e.id
													}
													draggable={
														! W && ! v && Y
													}
													onDragStart={ function (
														_tLocal19
													) {
														return ( function (
															_eLocal0,
															_tLocal20
														) {
															_eLocal0.stopPropagation();
															if (
																fe(
																	_eLocal0.target
																) &&
																! W
															) {
																{
																	_eLocal0.dataTransfer.dropEffect =
																		'copyMove';
																	F(
																		_tLocal20
																	);
																}
															}
														} )( _tLocal19, e.id );
													} }
													onDragOver={ function (
														_tLocal21
													) {
														return ( function (
															_eLocal1,
															_tLocal22
														) {
															if (
																( _eLocal1.preventDefault(),
																M !==
																	_tLocal22 &&
																	! W &&
																	fe(
																		_eLocal1.target
																	) )
															) {
																var _nLocal7 =
																		x.findIndex(
																			function (
																				_eLocal10
																			) {
																				return (
																					_eLocal10.id ===
																					M
																				);
																			}
																		),
																	r =
																		x.findIndex(
																			function (
																				_eLocal11
																			) {
																				return (
																					_eLocal11.id ===
																					_tLocal22
																				);
																			}
																		),
																	_aLocal2 =
																		gf( x ),
																	o = _f(
																		_aLocal2.splice(
																			_nLocal7,
																			1
																		),
																		1
																	)[ 0 ];
																_aLocal2.splice(
																	r,
																	0,
																	o
																);
																var i = [],
																	l =
																		_aLocal2.filter(
																			function (
																				_eLocal12
																			) {
																				var _tLocal23 =
																					i.includes(
																						_eLocal12.id
																					);
																				return (
																					_tLocal23 ||
																						i.push(
																							_eLocal12.id
																						),
																					! _tLocal23
																				 );
																			}
																		);
																C( l );
															}
														} )( _tLocal21, e.id );
													} }
													onDrop={ function (
														_eLocal13
													) {
														return ( function (
															_eLocal14
														) {
															if (
																fe(
																	_eLocal14.target
																) &&
																! W
															) {
																var _tLocal24 =
																	x.map(
																		function (
																			_eLocal15,
																			_tLocal25
																		) {
																			return ff(
																				ff(
																					{},
																					_eLocal15
																				),
																				{},
																				{
																					order_number:
																						_tLocal25 +
																						1,
																				}
																			);
																		}
																	);
																C( _tLocal24 );
																F( null );
																w.updateChapterOrdersAPI(
																	a,
																	_tLocal24
																);
															}
														} )( _eLocal13 );
													} }
													className={
														'ohmylms-draggable-single-chapter'
													}
												>
													<Ip
														chapter={ e }
														chapterId={ e.id }
														courseId={ a }
														onDelete={ ve }
														chapterIndex={ e.id }
														isActive={ $ === e.id }
														onExpand={ ge }
														setIsDraggingContent={
															z
														}
														handleAutomation={
															handleAutomation
														}
														handleIntegration={
															handleIntegration
														}
														setIsDraggableItem={ Q }
														setIsSaved={
															setIsSaved
														}
														activeIndex={ $ }
														setActiveIndex={ K }
														index={ _tLocal18 }
														showEdit={ te }
														setShowEdit={ ne }
														handleSaveName={ he }
													/>
												</div>
											);
										} ) }
								</div>
							</React.Fragment>
						) }
					</Controls.FlexItemWP>
					<Controls.FlexItemWP
						className={ 'ohmylms-chapter-preview '
							.concat(
								le ? 'ohmylms-chapter-sidebar-open' : '',
								' '
							)
							.concat( me ? '' : 'ohmylms-course-info-closed' ) }
					>
						<div
							className={ 'ohmylms-course-info-wrapper '.concat(
								me ? '' : 'ohmylms-course-info-closed'
							) }
						>
							<$p
								handleInputChange={ u }
								onContentChange={ onContentChange }
								handleRemoveMedia={ handleRemoveMedia }
								handleUploadComplete={ handleUploadComplete }
							/>
							<Buttons.A
								variant={ 'tertiary' }
								onClick={ function () {
									w.setCourseInfoOpen( ! me );
								} }
								className={ 'ohmylms-course-info-toggle' }
								icon={
									me ? (
										<Jp />
									) : (
										React.createElement( ef, null )
									)
								}
							/>
						</div>
						{ props.objectivesPanel }
						<Controls.SpacerWP
							marginTop={ 2 }
							paddingX={ 4 }
							className={ 'ohmylms-chapter-content-wrapper' }
						>
							<Controls.FlexWP
								align={ 'start' }
								justify={ 'space-between' }
								gap={ 2 }
								direction={ 'column' }
								className={ 'ohmylms-chapter-contents-wrapper' }
							>
								<div className={ 'ohmylms-chapter-contents' }>
									{ x.length > 0 ? (
										x.map( function ( e ) {
											return (
												<React.Suspense
													fallback={
														<_.A active={ ! 0 } />
													}
													key={
														e === null ||
														e === void 0
															? void 0
															: e.id
													}
												>
													<Xl
														chapter={ e }
														chapterId={ e.id }
														courseId={ a }
														setAutoSave={
															setAutoSave
														}
														onDelete={ ve }
														chapterIndex={ e.id }
														isActive={ L === e.id }
														onExpand={ ge }
														setIsDraggingContent={
															z
														}
														handleAutomation={
															handleAutomation
														}
														handleIntegration={
															handleIntegration
														}
														setIsDraggableItem={ Q }
														setIsSaved={
															setIsSaved
														}
														activeIndex={ $ }
														showEdit={ te }
														setShowEdit={ ne }
														handleSaveName={ he }
													/>
												</React.Suspense>
											);
										} )
									) : (
										<React.Fragment>
											<Controls.FlexWP
												align={ 'center' }
												justify={ 'center' }
											>
												{ React.createElement( uf, {
													icon: React.createElement(
														df,
														null
													),
													title: ( 0, I18n.__ )(
														'No chapter found!',
														'ohmylms'
													),
													description: ( 0, I18n.__ )(
														'Add your first chapter to get started.',
														'ohmylms'
													),
													ctaText: ( 0, I18n.__ )(
														'Add Chapter',
														'ohmylms'
													),
													ctaHandler: pe,
												} ) }
											</Controls.FlexWP>
										</React.Fragment>
									) }
								</div>
							</Controls.FlexWP>
						</Controls.SpacerWP>
					</Controls.FlexItemWP>
				</Controls.FlexWP>
				{ de && (
					<Cp
						chapterId={
							null === ( n = x[ 0 ] ) || void 0 === n
								? void 0
								: n.id
						}
					/>
				) }
			</React.Fragment>
		);
	};
}
