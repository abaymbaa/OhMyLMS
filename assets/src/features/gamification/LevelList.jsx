/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createLevelList( readRuntime ) {
	return function LevelList( props ) {
		const {
			Ge,
			I: Controls,
			Ie,
			L3: LevelEditor,
			Ne,
			Q3,
			React,
			T: StoreModule,
			U3,
			V3,
			We,
			Y3,
			b: I18n,
			df,
			g: ReactHooks,
			l,
			lf,
			pG,
			q,
			q3,
			uf,
			y: WordPressData,
			z: Notifications,
		} = readRuntime();
		var setLevelList = props.setLevelList,
			n = q3( ( 0, ReactHooks.useState )( [] ), 2 ),
			r = n[ 0 ],
			a = n[ 1 ],
			o = q3( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			i = o[ 0 ],
			c = o[ 1 ],
			u = q3( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			s = u[ 0 ],
			d = u[ 1 ],
			m = q3( ( 0, ReactHooks.useState )( null ), 2 ),
			p = m[ 0 ],
			f = m[ 1 ],
			v = q3( ( 0, ReactHooks.useState )( null ), 2 ),
			h = v[ 0 ],
			_ = v[ 1 ],
			w = q3( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			E = w[ 0 ],
			S = w[ 1 ],
			R = ( 0, Notifications.A )(),
			openNotificationWithIcon = R.openNotificationWithIcon,
			contextHolder = R.contextHolder,
			P = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getNotificationMessage();
			}, [] ),
			O = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getNotificationStatus();
			}, [] ),
			k = ( 0, ReactHooks.useRef )( null ),
			j = ( 0, ReactHooks.useRef )( null ),
			A = function ( e ) {
				e.target.classList.remove( 'grabbing' );
			},
			M = function ( e ) {
				( e.preventDefault(),
					( k.current = null ),
					( j.current = null ) );
			},
			F = function ( e ) {
				e.preventDefault();
			},
			N = [
				{
					title: ( 0, I18n.__ )( 'Level Name', 'ohmylms' ),
					dataIndex: 'name',
					key: 'name',
					sorter: ! 0,
					width: '90%',
					render( e, t ) {
						return (
							<Controls.FlexWP
								gap={ 4 }
								align={ 'start' }
								justify={ 'start' }
								style={ {
									cursor: 'move',
								} }
							>
								<q.ColorIndicator colorValue={ t.color } />
								<Controls.TextWP
									as={ 'span' }
									color={ '#000d25' }
									size={ 16 }
									numberOfLines={ 2 }
									truncate={ ! 0 }
								>
									{ Ge( t.name ) }
								</Controls.TextWP>
							</Controls.FlexWP>
						);
					},
				},
				{
					title: 'Action',
					dataIndex: 'action',
					key: 'action',
					width: null,
					render( e, t ) {
						return (
							<Controls.DropdownMenuWP
								controls={ [
									{
										title: ( 0, I18n.__ )(
											'Edit',
											'ohmylms'
										),
										onClick() {
											return D( t );
										},
										icon: (
											<span>
												<pG.A />
											</span>
										),
									},
									{
										title: ( 0, I18n.__ )(
											'Delete',
											'ohmylms'
										),
										onClick() {
											return W(
												null == t ? void 0 : t.slug
											);
										},
										icon: <We />,
									},
								] }
								icon={ <q.Icon icon={ Ne.A } /> }
							/>
						);
					},
				},
			],
			D = function ( e ) {
				( f( e ), d( ! 0 ) );
			},
			W = function ( e ) {
				( S( ! 0 ), _( e ) );
			},
			B = ( function () {
				var e = U3(
					V3().m( function e() {
						var t, n, a;
						return V3().w(
							function ( e ) {
								for (;;) {
									switch ( ( e.p = e.n ) ) {
										case 0:
											return (
												( e.p = 0 ),
												c( ! 0 ),
												( t = r.filter( function ( e ) {
													return e.slug !== h;
												} ) ),
												( e.n = 1 ),
												l()( {
													path: '/ohmylms/v1/engagement/levels',
													method: 'DELETE',
													headers: {
														'Content-Type':
															'application/json',
													},
													body: JSON.stringify( t ),
												} )
											 );
										case 1:
											( null != ( n = e.v ) &&
												n.success &&
												( L(),
												S( ! 1 ),
												openNotificationWithIcon(
													'success',
													( 0, I18n.__ )(
														'Level deleted successfully!',
														'ohmylms'
													)
												) ),
												( e.n = 3 ) );
											break;
										case 2:
											( ( e.p = 2 ),
												( a = e.v ),
												console.error(
													'Error deleting level:',
													a
												) );
										case 3:
											return (
												( e.p = 3 ),
												c( ! 1 ),
												e.f( 3 )
											 );
										case 4:
											return e.a( 2 );
									}
								}
							},
							e,
							null,
							[ [ 0, 2, 3, 4 ] ]
						);
					} )
				);
				return function () {
					return e.apply( this, arguments );
				};
			} )(),
			L = ( function () {
				var e = U3(
					V3().m( function e() {
						var n, r;
						return V3().w(
							function ( e ) {
								for (;;) {
									switch ( ( e.p = e.n ) ) {
										case 0:
											return (
												( e.p = 0 ),
												c( ! 0 ),
												( e.n = 1 ),
												l()( {
													path: 'ohmylms/v1/engagement/levels',
												} )
											 );
										case 1:
											( ( n = e.v ),
												a( n ),
												setLevelList( n ),
												( e.n = 3 ) );
											break;
										case 2:
											( ( e.p = 2 ),
												( r = e.v ),
												console.error( r ) );
										case 3:
											return (
												( e.p = 3 ),
												c( ! 1 ),
												e.f( 3 )
											 );
										case 4:
											return e.a( 2 );
									}
								}
							},
							e,
							null,
							[ [ 0, 2, 3, 4 ] ]
						);
					} )
				);
				return function () {
					return e.apply( this, arguments );
				};
			} )();
		return (
			( 0, ReactHooks.useEffect )( function () {
				var e = ! 0;
				return (
					e && L(),
					function () {
						e = ! 1;
					}
				 );
			}, [] ),
			( 0, ReactHooks.useEffect )(
				function () {
					P && openNotificationWithIcon( O, P );
				},
				[ P ]
			),
			( 0, ReactHooks.useEffect )(
				function () {
					s || ( f( null ), _( null ) );
				},
				[ s ]
			),
			(
				<React.Fragment>
					{ contextHolder }
					<Controls.CardWP isBorderless={ ! 0 } fullWidth={ ! 0 }>
						<Controls.SpacerWP padding={ 5 }>
							<Controls.SpacerWP marginBottom={ 4 }>
								<Controls.FlexWP
									gap={ 3 }
									justify={ 'flex-end' }
								>
									{ React.createElement( lf, {
										label: ( 0, I18n.__ )(
											'Add Level',
											'ohmylms'
										),
										onClick() {
											return d( ! 0 );
										},
									} ) }
								</Controls.FlexWP>
							</Controls.SpacerWP>
							<Controls.TableWP
								rowKey={ 'id' }
								columns={ N }
								dataSource={ r || [] }
								loading={ i }
								scroll={ {
									x: 'max-content',
								} }
								onRow={ function ( e, n ) {
									return {
										draggable: ! 0,
										onDragStart( e ) {
											return ( function ( e, t ) {
												( ( k.current = t ),
													e.target.classList.add(
														'grabbing'
													) );
											} )( e, n );
										},
										onDragEnter( e ) {
											return ( function ( e, n ) {
												( e.preventDefault(),
													( j.current = n ) );
												var o = ( function ( e ) {
														return (
															( function ( e ) {
																if (
																	Array.isArray(
																		e
																	)
																) {
																	return Q3(
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
															Y3( e ) ||
															( function () {
																throw new TypeError(
																	'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
																);
															} )()
														);
													} )( r ),
													i = o[ k.current ];
												( o.splice( k.current, 1 ),
													o.splice( j.current, 0, i ),
													( k.current = j.current ),
													( j.current = null ),
													a( o ),
													setLevelList( o ) );
											} )( e, n );
										},
										onDragEnd: A,
										onDrop: M,
										onDragOver: F,
									};
								} }
								locale={ {
									emptyText: React.createElement( uf, {
										icon: React.createElement( df, null ),
										title: ( 0, I18n.__ )(
											'No level yet!',
											'ohmylms'
										),
										description: ( 0, I18n.__ )(
											"Start building your first level and it'll show up here as soon as you hit publish.",
											'ohmylms'
										),
									} ),
								} }
							/>
						</Controls.SpacerWP>
					</Controls.CardWP>
					{ s && (
						<LevelEditor
							data={ p }
							isOpen={ s }
							onClose={ d }
							badgeList={ r }
							setItems={ a }
							fetchData={ L }
						/>
					) }
					{ E && (
						<Ie
							title={ ( 0, I18n.__ )(
								'Delete Level',
								'ohmylms'
							) }
							description={ ( 0, I18n.__ )(
								'Are you sure you want to delete this level?',
								'ohmylms'
							) }
							onClose={ function () {
								S( ! 1 );
							} }
							onDelete={ B }
							isOpen={ E }
							isDelete={ ! 0 }
						/>
					) }
				</React.Fragment>
			 )
		 );
	};
}
