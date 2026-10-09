/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCertificateCourseSelector( readRuntime ) {
	return function CertificateCourseSelector( props ) {
		const {
			Ge,
			I: Controls,
			JL,
			React,
			T: StoreModule,
			ZL,
			b: I18n,
			g: ReactHooks,
			l,
			nV,
			tV,
			tn,
			y: WordPressData,
		} = readRuntime();
		props.isOpen;
		var t = props.onClose,
			n = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			r = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).selectCertificate();
			}, [] ),
			a = nV( ( 0, ReactHooks.useState )( [] ), 2 ),
			o = a[ 0 ],
			i = a[ 1 ],
			c = nV(
				( 0, ReactHooks.useState )(
					( 0, I18n.__ )(
						'Please enter 3 or more characters...',
						'ohmylms'
					)
				),
				2
			),
			u = c[ 0 ],
			s = c[ 1 ],
			d = ( function () {
				var e = tV(
					ZL().m( function e() {
						var a;
						return ZL().w( function ( e ) {
							for (;;) {
								switch ( e.n ) {
									case 0:
										return (
											( a = JL(
												JL( {}, r ),
												{},
												{
													courses: o.map(
														function ( e ) {
															return {
																id:
																	null == e
																		? void 0
																		: e.value,
															};
														}
													),
													course_count: o.length,
												}
											) ),
											( e.n = 1 ),
											n.updateCertificate(
												null == r ? void 0 : r.id,
												a
											)
										 );
									case 1:
										t();
									case 2:
										return e.a( 2 );
								}
							}
						}, e );
					} )
				);
				return function () {
					return e.apply( this, arguments );
				};
			} )(),
			m = ( function () {
				var e = tV(
					ZL().m( function e( t ) {
						var n, r, a;
						return ZL().w(
							function ( e ) {
								for (;;) {
									switch ( ( e.p = e.n ) ) {
										case 0:
											return (
												( e.p = 0 ),
												( e.n = 1 ),
												l()( {
													path: '/ohmylms/v1/courses?search='.concat(
														t
													),
													method: 'GET',
													headers: {
														'Content-Type':
															'application/json',
													},
												} )
											 );
										case 1:
											return (
												( n = e.v ),
												( r = n.map( function ( e ) {
													return {
														value:
															null == e
																? void 0
																: e.id,
														label:
															null == e
																? void 0
																: e.name,
													};
												} ) ),
												e.a( 2, r )
											 );
										case 2:
											( ( e.p = 2 ),
												( a = e.v ),
												console.error( a ) );
										case 3:
											return e.a( 2 );
									}
								}
							},
							e,
							null,
							[ [ 0, 2 ] ]
						);
					} )
				);
				return function ( t ) {
					return e.apply( this, arguments );
				};
			} )(),
			p = ( function () {
				var e = tV(
					ZL().m( function e( t ) {
						var n, r;
						return ZL().w( function ( e ) {
							for (;;) {
								switch ( e.n ) {
									case 0:
										if ( ! ( t.length >= 3 ) ) {
											e.n = 4;
											break;
										}
										return ( ( e.n = 1 ), m( t ) );
									case 1:
										if ( 0 !== ( n = e.v ).length ) {
											e.n = 2;
											break;
										}
										return (
											s(
												( 0, I18n.__ )(
													'No Course Found! Try to search another one',
													'ohmylms'
												)
											),
											e.a( 2, [] )
										 );
									case 2:
										return (
											s(
												( 0, I18n.__ )(
													'Please enter 3 or more characters...',
													'ohmylms'
												)
											),
											( r =
												null == n
													? void 0
													: n.map( function ( e ) {
															return {
																label: Ge(
																	null == e
																		? void 0
																		: e.label
																),
																value:
																	null == e
																		? void 0
																		: e.value,
															};
														} ) ),
											e.a( 2, r )
										 );
									case 3:
										e.n = 5;
										break;
									case 4:
										return e.a( 2, [] );
									case 5:
										return e.a( 2 );
								}
							}
						}, e );
					} )
				);
				return function ( t ) {
					return e.apply( this, arguments );
				};
			} )();
		return (
			( 0, ReactHooks.useEffect )(
				function () {
					var e;
					if (
						null != r &&
						null !== ( e = r.courses ) &&
						void 0 !== e &&
						e.length
					) {
						var t = r.courses
							.filter( function ( e ) {
								return e && e.id && e.name;
							} )
							.map( function ( e ) {
								return {
									label: Ge( e.name ).trim(),
									value: e.id,
								};
							} )
							.filter( function ( e ) {
								return e.label && e.value;
							} );
						i( t );
					}
				},
				[ r ]
			),
			(
				<React.Fragment>
					<Controls.ModalWP
						title={ ( 0, I18n.__ )( 'Select Course', 'ohmylms' ) }
						shouldCloseOnEsc={ ! 0 }
						shouldCloseOnClickOutside={ ! 0 }
						onRequestClose={ t }
					>
						{ React.createElement( tn, {
							description: ( 0, I18n.__ )(
								'Select courses for which the certificate will be applicable.',
								'ohmylms'
							),
							spacerMarginBottom: 0,
							value: o,
							onChange( e ) {
								return (
									( t = e.filter( Boolean ) ),
									n.updateContent( {
										courses: t.map( function ( e ) {
											return {
												id:
													null == e
														? void 0
														: e.value,
												name:
													null == e
														? void 0
														: e.label,
											};
										} ),
										course_count: t.length,
									} ),
									void i( t )
								 );
								var t;
							},
							loadOptions: p,
							noOptionsMessage() {
								return u;
							},
							padding: 0,
							direction: 'column',
							gap: 1,
							flexItemWidth: '100%',
						} ) }
						<Controls.FlexWP
							justify={ 'flex-end' }
							gap={ 4 }
							style={ {
								marginTop: '16px',
							} }
						>
							<Controls.ButtonWP
								key={ 'cancel' }
								onClick={ t }
								variant={ 'secondary' }
							>
								{ ( 0, I18n.__ )( 'Cancel', 'ohmylms' ) }
							</Controls.ButtonWP>
							<Controls.ButtonWP
								key={ 'Save' }
								variant={ 'primary' }
								onClick={ d }
								className={
									'ohmylms-course-settings-modal-save-btn'
								}
							>
								{ ( 0, I18n.__ )( 'Save', 'ohmylms' ) }
							</Controls.ButtonWP>
						</Controls.FlexWP>
					</Controls.ModalWP>
				</React.Fragment>
			 )
		 );
	};
}
