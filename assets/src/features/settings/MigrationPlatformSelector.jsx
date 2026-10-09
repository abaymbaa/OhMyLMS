/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createMigrationPlatformSelector( readRuntime ) {
	return function MigrationPlatformSelector() {
		const {
			$4,
			B4,
			G4,
			H4,
			I: Controls,
			K4,
			React,
			T: StoreModule,
			U4,
			V4,
			W4: MemoMigrationProgressModal,
			_6,
			b: I18n,
			g: ReactHooks,
			l,
			y: WordPressData,
		} = readRuntime();
		var e = H4(
				( 0, ReactHooks.useState )( function () {
					var e, t;
					return null !==
						( e =
							null === ( t = _6[ 0 ] ) || void 0 === t
								? void 0
								: t.value ) && void 0 !== e
						? e
						: null;
				} ),
				2
			),
			t = e[ 0 ],
			n = e[ 1 ],
			r = H4( ( 0, ReactHooks.useState )( [] ), 2 ),
			a = r[ 0 ],
			o = r[ 1 ],
			i = H4( ( 0, ReactHooks.useState )( [] ), 2 ),
			c = i[ 0 ],
			u = i[ 1 ],
			s = H4( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			d = s[ 0 ],
			m = s[ 1 ],
			p = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			f = _6.find( function ( e ) {
				return e.value === t;
			} );
		return (
			( 0, ReactHooks.useEffect )(
				function () {
					if ( ! t ) {
						return ( o( [] ), void u( [] ) );
					}
					var e = ( function () {
						var e,
							n =
								( ( e = B4().m( function e() {
									var n, r;
									return B4().w(
										function ( e ) {
											for (;;) {
												switch ( ( e.p = e.n ) ) {
													case 0:
														return (
															m( ! 0 ),
															( e.p = 1 ),
															( e.n = 2 ),
															l()( {
																path: '/ohmylms/v1/migrations/'.concat(
																	t,
																	'/courses'
																),
															} )
														 );
													case 2:
														( null != ( n = e.v ) &&
															n.courses &&
															( o( n.courses ),
															u(
																n.courses.map(
																	function (
																		e
																	) {
																		return e.id;
																	}
																)
															) ),
															( e.n = 4 ) );
														break;
													case 3:
														( ( e.p = 3 ),
															( r = e.v ),
															console.error(
																'Failed to fetch migration courses',
																r
															) );
													case 4:
														return (
															( e.p = 4 ),
															m( ! 1 ),
															e.f( 4 )
														 );
													case 5:
														return e.a( 2 );
												}
											}
										},
										e,
										null,
										[ [ 1, 3, 4, 5 ] ]
									);
								} ) ),
								function () {
									var t = this,
										n = arguments;
									return new Promise( function ( r, a ) {
										var o = e.apply( t, n );
										function i( e ) {
											V4( o, r, a, i, l, 'next', e );
										}
										function l( e ) {
											V4( o, r, a, i, l, 'throw', e );
										}
										i( void 0 );
									} );
								} );
						return function () {
							return n.apply( this, arguments );
						};
					} )();
					e();
				},
				[ t ]
			),
			(
				<React.Fragment>
					<Controls.CardWP isBorderless={ ! 0 } padding={ '24px' }>
						<Controls.HeadingWP
							as={ 'h4' }
							size={ '18px' }
							color={ '#000D25' }
							weight={ '600' }
						>
							{ ( 0, I18n.__ )(
								'Which platform do you want to migrate from?',
								'ohmylms'
							) }
						</Controls.HeadingWP>
						<Controls.CardWP
							variant={ 'secondary' }
							isBorderless={ ! 0 }
							padding={ '16px' }
							margin={ '24px 0 0' }
						>
							<Controls.FlexWP
								wrap={ 'wrap' }
								gap={ 4 }
								justify={ 'flex-start' }
								align={ 'stretch' }
							>
								{ _6.map( function ( e ) {
									return (
										<$4
											key={ e.value }
											lms={ e }
											isSelected={ t === e.value }
											onSelect={ n }
										/>
									);
								} ) }
							</Controls.FlexWP>
						</Controls.CardWP>
						{ f && (
							<K4
								lms={ f }
								courses={ a }
								selectedIds={ c }
								onToggle={ function ( e ) {
									u( function ( t ) {
										return t.includes( e )
											? t.filter( function ( t ) {
													return t !== e;
												} )
											: [].concat(
													( function ( e ) {
														return (
															( function ( e ) {
																if (
																	Array.isArray(
																		e
																	)
																) {
																	return U4(
																		e
																	);
																}
															} )( e ) ||
															( function ( e ) {
																if (
																	( 'undefined' !==
																		typeof Symbol &&
																		null !=
																			e[
																				Symbol
																					.iterator
																			] ) ||
																	null !=
																		e[
																			'@@iterator'
																		]
																) {
																	return Array.from(
																		e
																	);
																}
															} )( e ) ||
															G4( e ) ||
															( function () {
																throw new TypeError(
																	'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
																);
															} )()
														);
													} )( t ),
													[ e ]
												);
									} );
								} }
								onToggleAll={ function () {
									u(
										c.length === a.length
											? []
											: a.map( function ( e ) {
													return e.id;
												} )
									);
								} }
								isLoading={ d }
							/>
						) }
					</Controls.CardWP>
					<Controls.SpacerWP
						padding={ 0 }
						marginBottom={ 0 }
						marginTop={ 4 }
					>
						<Controls.FlexWP justify={ 'flex-end' }>
							<Controls.ButtonWP
								variant={ 'primary' }
								size={ 'md' }
								onClick={ function () {
									if ( t && 0 !== c.length ) {
										var e = a.filter( function ( e ) {
											return c.includes( e.id );
										} );
										( p.setMigrationTool( t ),
											p.setMigrationToolCourses(
												e.map( function ( e ) {
													return {
														value: e.id,
														label:
															e.title || e.label,
													};
												} )
											),
											p.setMigrationCourses( c ),
											p.setMigrationStatus( 'migrating' ),
											p.setMigrationModalOpen( ! 0 ) );
									}
								} }
								disabled={ ! t || 0 === c.length }
							>
								{ ( 0, I18n.__ )(
									'Migrate courses',
									'ohmylms'
								) }
							</Controls.ButtonWP>
						</Controls.FlexWP>
					</Controls.SpacerWP>
					{ f && <MemoMigrationProgressModal lms={ f.label } /> }
				</React.Fragment>
			 )
		 );
	};
}
