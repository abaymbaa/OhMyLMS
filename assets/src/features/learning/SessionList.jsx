/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createSessionList( readRuntime ) {
	return function SessionList() {
		const {
			Al: ZoomEditor,
			Ea,
			Gp,
			I: Controls,
			Ne,
			RZ,
			React,
			T: StoreModule,
			Ul: GoogleMeetEditor,
			YG,
			b: I18n,
			df,
			fN,
			g: ReactHooks,
			pG,
			q,
			uf,
			xZ,
			y: WordPressData,
		} = readRuntime();
		var e,
			t,
			n = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			r = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).selectSessions();
			}, [] ),
			a = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).selectSessionsPagination();
			}, [] ),
			o = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getLoading();
			}, [] ),
			i = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getError();
			}, [] ),
			l = xZ( ( 0, ReactHooks.useState )( 1 ), 2 ),
			c = l[ 0 ],
			u = l[ 1 ],
			s = xZ( ( 0, ReactHooks.useState )( 10 ), 2 ),
			d = s[ 0 ],
			m = ( s[ 1 ], xZ( ( 0, ReactHooks.useState )( '' ), 2 ) ),
			p = m[ 0 ],
			f = m[ 1 ],
			v = xZ( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			h = v[ 0 ],
			_ = v[ 1 ],
			w = xZ( ( 0, ReactHooks.useState )( null ), 2 ),
			E = w[ 0 ],
			S = w[ 1 ],
			R = ( 0, ReactHooks.useCallback )(
				function () {
					var e = {
						page: c,
						per_page: d,
						search: p,
					};
					n.fetchSessions( e );
				},
				[ n, c, d, p ]
			),
			x =
				( ( 0, ReactHooks.useCallback )( function ( e ) {
					( f( e ), u( 1 ) );
				}, [] ),
				( 0, ReactHooks.useCallback )( function ( e ) {
					u( e );
				}, [] ) ),
			C = ( 0, ReactHooks.useCallback )(
				function ( e ) {
					( n.setSelectedLessonId( e.id ), S( e ), _( ! 0 ) );
				},
				[ n ]
			),
			P = ( 0, ReactHooks.useCallback )( function ( e, t ) {
				e[ t ] && window.open( e[ t ], '_blank' );
			}, [] ),
			O = ( 0, ReactHooks.useCallback )(
				function () {
					( _( ! 1 ), S( null ), n.setSelectedLessonId( null ), R() );
				},
				[ n, R ]
			),
			k = ( 0, ReactHooks.useCallback )( function ( e ) {
				var t = {
					upcoming: {
						variant: 'primary',
						label: ( 0, I18n.__ )( 'Upcoming', 'ohmylms' ),
					},
					running: {
						variant: 'warning',
						label: ( 0, I18n.__ )( 'Running', 'ohmylms' ),
					},
					expired: {
						variant: 'secondary',
						label: ( 0, I18n.__ )( 'Expired', 'ohmylms' ),
					},
				}[ null == e ? void 0 : e.toLowerCase() ] || {
					variant: 'secondary',
					label: e,
				};
				return (
					<Controls.BadgeWP
						variant={ t.variant }
						isBorderLess={ ! 0 }
					>
						{ t.label }
					</Controls.BadgeWP>
				);
			}, [] ),
			j = ( 0, ReactHooks.useMemo )(
				function () {
					return [
						{
							title: ( 0, I18n.__ )( 'Meeting Name', 'ohmylms' ),
							dataIndex: 'topic',
							key: 'topic',
							width: '250px',
							render( e, t ) {
								return (
									<div>
										<div
											style={ {
												fontWeight: '500',
												marginBottom: '4px',
											} }
										>
											{ e }
										</div>
										<div
											style={ {
												fontSize: '12px',
												color: '#666',
											} }
										>
											{ t.course_title
												? 'Course: '.concat(
														t.course_title
													)
												: '-' }
										</div>
									</div>
								);
							},
						},
						{
							title: ( 0, I18n.__ )( 'Platform', 'ohmylms' ),
							dataIndex: 'platform',
							key: 'platform',
							width: '120px',
							render( e ) {
								var t =
									{
										zoom: 'Zoom',
										googlemeet: 'Google Meet',
									}[ null == e ? void 0 : e.toLowerCase() ] ||
									e;
								return (
									<Controls.BadgeWP
										variant={ 'secondary' }
										isBorderLess={ ! 0 }
									>
										{ t }
									</Controls.BadgeWP>
								);
							},
						},
						{
							title: ( 0, I18n.__ )( 'Password', 'ohmylms' ),
							dataIndex: 'password',
							key: 'password',
							width: '120px',
							render( e ) {
								return <span>{ e || '-' }</span>;
							},
						},
						{
							title: ( 0, I18n.__ )(
								'Start Time & Duration',
								'ohmylms'
							),
							key: 'start_time_duration',
							width: '200px',
							render( e, t ) {
								var n = '-';
								if ( t.duration ) {
									var r = parseInt( t.duration, 10 ),
										a = Math.floor( r / 60 ),
										o = r % 60;
									n =
										a > 0 && o > 0
											? ''
													.concat( a, 'h ' )
													.concat( o, 'm' )
											: a > 0
												? ''.concat( a, 'h' )
												: ''.concat( o, 'm' );
								}
								return (
									<div>
										<div
											style={ {
												fontWeight: '500',
												marginBottom: '4px',
											} }
										>
											{ t.date }
										</div>
										<div
											style={ {
												fontSize: '12px',
												color: '#666',
											} }
										>
											{ n }
										</div>
									</div>
								);
							},
						},
						{
							title: ( 0, I18n.__ )( 'Status', 'ohmylms' ),
							dataIndex: 'status',
							key: 'status',
							width: '120px',
							render( e ) {
								return k( e );
							},
						},
						{
							title: ( 0, I18n.__ )( 'Actions', 'ohmylms' ),
							key: 'actions',
							width: '150px',
							render( e, t ) {
								var n,
									r,
									a =
										null === ( n = t.status ) ||
										void 0 === n
											? void 0
											: n.toLowerCase(),
									o =
										( null === ( r = t.platform ) ||
											void 0 === r ||
											r.toLowerCase(),
										[] );
								return (
									'upcoming' === a && t.start_url
										? o.push( {
												title: ( 0, I18n.__ )(
													'Start Meeting',
													'ohmylms'
												),
												onClick() {
													return P( t, 'start_url' );
												},
												icon: <Gp />,
											} )
										: 'running' === a &&
											t.start_url &&
											o.push( {
												title: ( 0, I18n.__ )(
													'Join Meeting',
													'ohmylms'
												),
												onClick() {
													return P( t, 'start_url' );
												},
												icon: <Gp />,
											} ),
									o.push( {
										title: ( 0, I18n.__ )(
											'Edit Meeting',
											'ohmylms'
										),
										onClick() {
											return C( t );
										},
										icon: <pG.A />,
									} ),
									'expired' === a &&
										o.push( {
											title: ( 0, I18n.__ )(
												'Start Meeting',
												'ohmylms'
											),
											icon: <RZ />,
											disabled: ! 0,
										} ),
									(
										<Controls.DropdownMenuWP
											controls={ o }
											icon={ <q.Icon icon={ Ne.A } /> }
										/>
									 )
								 );
							},
						},
					];
				},
				[ k, P, C ]
			);
		return (
			( 0, ReactHooks.useEffect )(
				function () {
					R();
				},
				[ R ]
			),
			(
				<React.Fragment>
					<Controls.ContainerWP>
						<YG title={ ( 0, I18n.__ )( 'Sessions', 'ohmylms' ) } />
						{ i && (
							<Controls.NoticeWP
								status={ 'error' }
								isDismissible={ ! 1 }
							>
								{ i }
							</Controls.NoticeWP>
						) }
						<Ea
							isBorderLess={ ! 0 }
							minHeight={ 'calc(100vh - 200px)' }
						>
							<Controls.SpacerWP padding={ 5 }>
								<Controls.TableWP
									rowKey={ 'id' }
									columns={ j }
									dataSource={ r }
									loading={ o }
									pagination={ ! 1 }
									scroll={ {
										x: 'max-content',
									} }
									locale={ {
										emptyText: React.createElement( uf, {
											icon: React.createElement(
												df,
												null
											),
											title: ( 0, I18n.__ )(
												'No sessions yet!',
												'ohmylms'
											),
											description: ( 0, I18n.__ )(
												"Create your first session and it'll show up here.",
												'ohmylms'
											),
										} ),
									} }
								/>
								{ ( null == a ? void 0 : a.totalSessions ) >
									d &&
									React.createElement( fN, {
										total: a.totalSessions,
										currentPage: c,
										onPageChange: x,
										perPage: d,
									} ) }
							</Controls.SpacerWP>
						</Ea>
					</Controls.ContainerWP>
					{ h &&
						E &&
						'googlemeet' ===
							( null === ( e = E.platform ) || void 0 === e
								? void 0
								: e.toLowerCase() ) && (
							<GoogleMeetEditor
								isOpen={ h }
								onClose={ O }
								chapterId={ E.chapter_id }
								courseId={ E.course_id }
							/>
						) }
					{ h &&
						E &&
						'googlemeet' !==
							( null === ( t = E.platform ) || void 0 === t
								? void 0
								: t.toLowerCase() ) && (
							<ZoomEditor
								isOpen={ h }
								onClose={ O }
								chapterId={ E.chapter_id }
								courseId={ E.course_id }
							/>
						) }
				</React.Fragment>
			 )
		 );
	};
}
