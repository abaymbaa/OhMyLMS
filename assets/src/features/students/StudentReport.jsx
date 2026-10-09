/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createStudentReport( readRuntime ) {
	return function StudentReport() {
		const {
			BZ,
			DZ,
			FZ,
			GZ,
			HG,
			HZ,
			I: Controls,
			Nr,
			React,
			T: StoreModule,
			TZ,
			_U,
			b: I18n,
			f: Router,
			g: ReactHooks,
			gU,
			sn,
			y: WordPressData,
			zZ,
		} = readRuntime();
		var e = ( 0, Router.g )().id,
			t = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			n = ( function ( e, t ) {
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
								return GZ( e, t );
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
										? GZ( e, t )
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
			} )( ( 0, ReactHooks.useState )( ! 0 ), 2 ),
			r = n[ 0 ],
			a = n[ 1 ],
			o = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getStudent();
			}, [] );
		HG( 'ohmylms', 'students' );
		var i = ( 0, ReactHooks.useCallback )(
			HZ(
				BZ().m( function n() {
					var r;
					return BZ().w(
						function ( n ) {
							for (;;) {
								switch ( ( n.p = n.n ) ) {
									case 0:
										return (
											a( ! 0 ),
											( n.p = 1 ),
											( n.n = 2 ),
											t.fetchSingleStudent( e )
										 );
									case 2:
										n.n = 4;
										break;
									case 3:
										( ( n.p = 3 ),
											( r = n.v ),
											console.error(
												'Error fetching student data:',
												r
											) );
									case 4:
										return (
											( n.p = 4 ),
											a( ! 1 ),
											n.f( 4 )
										 );
									case 5:
										return n.a( 2 );
								}
							}
						},
						n,
						null,
						[ [ 1, 3, 4, 5 ] ]
					);
				} )
			),
			[ e ]
		);
		return (
			( 0, ReactHooks.useEffect )(
				function () {
					e && i();
				},
				[ e ]
			),
			e ? (
				( ( 0, Router.Zp )(),
				(
					<Controls.SurfaceWP>
						<Controls.ContainerWP>
							<Controls.SpacerWP paddingY={ 5 }>
								<Controls.FlexWP
									justify={ 'start' }
									align={ 'center' }
									gap={ 3 }
								>
									<Nr />
									<Controls.HeadingWP level={ 2 } size={ 20 }>
										{ ( 0, I18n.__ )(
											'Student Analytics',
											'ohmylms'
										) }
									</Controls.HeadingWP>
								</Controls.FlexWP>
								<Controls.CardWP
									isBorderless={ ! 0 }
									variant={ 'secondary' }
								>
									<Controls.SpacerWP
										padding={ 5 }
										marginTop={ 3 }
									>
										<Controls.FlexWP
											direction={ 'column' }
											gap={ 4 }
										>
											<Controls.FlexWP
												justify={ 'space-between' }
												align={ 'center' }
												gap={ 3 }
											>
												<Controls.FlexItemWP flex={ 1 }>
													<Controls.HeadingWP
														level={ 3 }
														size={ 16 }
													>
														{ ( 0, I18n.__ )(
															'Journey Mapping',
															'ohmylms'
														) }
													</Controls.HeadingWP>
												</Controls.FlexItemWP>
												<Controls.FlexItemWP>
													<Controls.FlexWP
														gap={ 2 }
														justify={ 'end' }
														align={ 'center' }
													>
														<Controls.BadgeWP
															isBorderLess={ ! 0 }
														>
															<Controls.TextWP
																variant={
																	'muted'
																}
															>
																{ ( 0,
																I18n.__ )(
																	'Email:',
																	'ohmylms'
																) }
															</Controls.TextWP>
															<Controls.TextWP>
																{ null == o
																	? void 0
																	: o.student_email }
															</Controls.TextWP>
														</Controls.BadgeWP>
														{ ( null == o
															? void 0
															: o.student_phone ) && (
															<Controls.BadgeWP
																isBorderLess={
																	! 0
																}
															>
																<Controls.TextWP
																	variant={
																		'muted'
																	}
																>
																	{ ( 0,
																	I18n.__ )(
																		'Phone:',
																		'ohmylms'
																	) }
																</Controls.TextWP>
																<Controls.TextWP>
																	{
																		o.student_phone
																	}
																</Controls.TextWP>
															</Controls.BadgeWP>
														) }
														{ ( null == o
															? void 0
															: o.student_whatsapp ) && (
															<Controls.BadgeWP
																isBorderLess={
																	! 0
																}
															>
																<Controls.TextWP
																	variant={
																		'muted'
																	}
																>
																	{ ( 0,
																	I18n.__ )(
																		'WhatsApp:',
																		'ohmylms'
																	) }
																</Controls.TextWP>
																<Controls.TextWP>
																	{
																		o.student_whatsapp
																	}
																</Controls.TextWP>
															</Controls.BadgeWP>
														) }
														{ ( null == o
															? void 0
															: o.student_timezone ) && (
															<Controls.BadgeWP
																isBorderLess={
																	! 0
																}
															>
																<Controls.TextWP
																	variant={
																		'muted'
																	}
																>
																	{ ( 0,
																	I18n.__ )(
																		'Timezone:',
																		'ohmylms'
																	) }
																</Controls.TextWP>
																<Controls.TextWP>
																	{
																		o.student_timezone
																	}
																</Controls.TextWP>
															</Controls.BadgeWP>
														) }
														<Controls.BadgeWP
															isBorderLess={ ! 0 }
														>
															<Controls.TextWP
																variant={
																	'muted'
																}
															>
																{ ( 0,
																I18n.__ )(
																	'Reg. Date:',
																	'ohmylms'
																) }
															</Controls.TextWP>
															<Controls.TextWP>
																{ sn()(
																	null == o
																		? void 0
																		: o.enrollment_date
																).format(
																	'YYYY-MM-DD'
																) || '-' }
															</Controls.TextWP>
														</Controls.BadgeWP>
													</Controls.FlexWP>
												</Controls.FlexItemWP>
											</Controls.FlexWP>
											<Controls.CardWP
												isBorderless={ ! 0 }
											>
												<Controls.SpacerWP
													marginBottom={ 0 }
													padding={ 6 }
												>
													<Controls.CardWP
														isBorderless={ ! 0 }
														variant={ 'secondary' }
													>
														<Controls.SpacerWP
															marginBottom={ 0 }
															padding={ 4 }
														>
															<Controls.FlexWP
																align={
																	'start'
																}
																gap={ 4 }
																justify={
																	'start'
																}
															>
																<Controls.FlexItemWP
																	isBlock={
																		! 0
																	}
																>
																	{ React.createElement(
																		gU,
																		{
																			title: ( 0,
																			I18n.__ )(
																				'Enrolled Courses',
																				'ohmylms'
																			),
																			cardNumber:
																				( null ==
																				o
																					? void 0
																					: o.enrolled_courses ) ||
																				'0',
																			icon: React.createElement(
																				zZ,
																				null
																			),
																		}
																	) }
																</Controls.FlexItemWP>
																<Controls.FlexItemWP
																	isBlock={
																		! 0
																	}
																>
																	{ React.createElement(
																		gU,
																		{
																			title: ( 0,
																			I18n.__ )(
																				'In Progress Courses',
																				'ohmylms'
																			),
																			cardNumber:
																				( null ==
																				o
																					? void 0
																					: o.in_progress_courses ) ||
																				'0',
																			icon: (
																				<DZ />
																			),
																		}
																	) }
																</Controls.FlexItemWP>
																<Controls.FlexItemWP
																	isBlock={
																		! 0
																	}
																>
																	{ React.createElement(
																		gU,
																		{
																			title: ( 0,
																			I18n.__ )(
																				'Complete Courses',
																				'ohmylms'
																			),
																			cardNumber:
																				( null ==
																				o
																					? void 0
																					: o.completed_courses ) ||
																				'0',
																			icon: (
																				<_U />
																			),
																		}
																	) }
																</Controls.FlexItemWP>
																<Controls.FlexItemWP
																	isBlock={
																		! 0
																	}
																>
																	{ React.createElement(
																		gU,
																		{
																			title: ( 0,
																			I18n.__ )(
																				'Total Memberships',
																				'ohmylms'
																			),
																			cardNumber:
																				( null ==
																				o
																					? void 0
																					: o.total_membership ) ||
																				'0',
																			icon: (
																				<FZ />
																			),
																		}
																	) }
																</Controls.FlexItemWP>
															</Controls.FlexWP>
														</Controls.SpacerWP>
													</Controls.CardWP>
												</Controls.SpacerWP>
											</Controls.CardWP>
											<TZ
												studentData={ o }
												loading={ r }
											/>
										</Controls.FlexWP>
									</Controls.SpacerWP>
								</Controls.CardWP>
							</Controls.SpacerWP>
						</Controls.ContainerWP>
						<Controls.SpacerWP
							marginBottom={ 0 }
							paddingBottom={ 5 }
						/>
					</Controls.SurfaceWP>
				 ) )
			) : (
				<Router.C5 to={ '/accounthub' } />
			)
		 );
	};
}
