/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createMembershipList( readRuntime ) {
	return function MembershipList() {
		const {
			D: Buttons,
			Ea,
			Ge,
			H8,
			He,
			I: Controls,
			Ie,
			L: Entitlements,
			L8: MembershipEditor,
			Ne,
			React,
			T: StoreModule,
			V8,
			We,
			Y8,
			YG,
			YH,
			aY,
			b: I18n,
			df,
			f: Router,
			fN,
			g: ReactHooks,
			hN,
			l,
			pG,
			q,
			q8,
			sN,
			sn,
			uf,
			wq,
			xq,
			y: WordPressData,
			z: Notifications,
		} = readRuntime();
		var e = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			t = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getNotificationMessage();
			}, [] ),
			n = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getNotificationStatus();
			}, [] ),
			r = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getMembershipPagination();
			}, [] ),
			totalPlans = r.totalPlans,
			o =
				( r.totalPages,
				( 0, WordPressData.useSelect )( function ( e ) {
					return e( StoreModule.default ).getMemberships();
				}, [] ) ),
			i = true,
			c = Y8( ( 0, ReactHooks.useState )( ! 0 ), 2 ),
			u = c[ 0 ],
			s = c[ 1 ],
			d = Y8( ( 0, ReactHooks.useState )( [] ), 2 ),
			m = d[ 0 ],
			p = d[ 1 ],
			v = Y8( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			h = v[ 0 ],
			_ = v[ 1 ],
			w = Y8( ( 0, ReactHooks.useState )( 1 ), 2 ),
			E = w[ 0 ],
			S = w[ 1 ],
			R = Y8( ( 0, ReactHooks.useState )( 10 ), 2 ),
			x = R[ 0 ],
			C = ( R[ 1 ], Y8( ( 0, ReactHooks.useState )( '' ), 2 ) ),
			P = C[ 0 ],
			O = C[ 1 ],
			k = Y8( ( 0, ReactHooks.useState )( 'All' ), 2 ),
			j = k[ 0 ],
			A = k[ 1 ],
			M = Y8( ( 0, ReactHooks.useState )( null ), 2 ),
			F = M[ 0 ],
			N = M[ 1 ],
			W = Y8( ( 0, ReactHooks.useState )( null ), 2 ),
			B = ( W[ 0 ], W[ 1 ] ),
			V = Y8( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			H = V[ 0 ],
			G = V[ 1 ],
			U = Y8( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			Y = U[ 0 ],
			Q = U[ 1 ],
			Z = Y8( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			$ = Z[ 0 ],
			K = Z[ 1 ],
			J = Y8( ( 0, ReactHooks.useState )( 'all' ), 2 ),
			X = J[ 0 ],
			ee = J[ 1 ],
			te = Y8( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			ne = te[ 0 ],
			re = te[ 1 ],
			ae = ( 0, Notifications.A )(),
			openNotificationWithIcon = ae.openNotificationWithIcon,
			contextHolder = ae.contextHolder,
			le =
				( ( 0, Router.Zp )(),
				( 0, ReactHooks.useCallback )( function ( e ) {
					( O( e ), S( 1 ) );
				}, [] ) ),
			ce = ( 0, ReactHooks.useCallback )( function ( e ) {
				( A( e ), S( 1 ) );
			}, [] ),
			ue = ( 0, ReactHooks.useCallback )( function ( e ) {
				( ee( e ), S( 1 ) );
			}, [] ),
			se = ( 0, ReactHooks.useCallback )( function ( e ) {
				( S( e ), p( [] ) );
			}, [] ),
			de = ( 0, ReactHooks.useCallback )(
				( function () {
					var t = q8(
						H8().m( function t( n ) {
							var r, a;
							return H8().w(
								function ( t ) {
									for (;;) {
										switch ( ( t.p = t.n ) ) {
											case 0:
												{
													t.n = 1;
													break;
												}
												return ( re( ! 0 ), t.a( 2 ) );
											case 1:
												return (
													( t.p = 1 ),
													G( ! 0 ),
													Q( ! 0 ),
													( t.n = 2 ),
													l()( {
														path: '/ohmylms/v1/membership/'.concat(
															n
														),
														method: 'GET',
														headers: {
															'Content-Type':
																'application/json',
														},
													} )
												 );
											case 2:
												( ( r = t.v ),
													e.addFullMembershipPlan(
														r
													),
													( t.n = 4 ) );
												break;
											case 3:
												( ( t.p = 3 ),
													( a = t.v ),
													console.error( a ) );
											case 4:
												return (
													( t.p = 4 ),
													Q( ! 1 ),
													t.f( 4 )
												 );
											case 5:
												return t.a( 2 );
										}
									}
								},
								t,
								null,
								[ [ 1, 3, 4, 5 ] ]
							);
						} )
					);
					return function ( e ) {
						return t.apply( this, arguments );
					};
				} )(),
				[]
			),
			me = ( 0, ReactHooks.useCallback )(
				q8(
					H8().m( function t() {
						var n,
							r,
							a,
							o = arguments;
						return H8().w( function ( t ) {
							for (;;) {
								switch ( t.n ) {
									case 0:
										{
											n =
												o.length > 0 &&
												void 0 !== o[ 0 ]
													? o[ 0 ]
													: 'date';
											r =
												o.length > 1 &&
												void 0 !== o[ 1 ]
													? o[ 1 ]
													: 'DESC';
											{
												t.n = 1;
												break;
											}
										}
										return ( s( ! 1 ), t.a( 2 ) );
									case 1:
										( s( ! 0 ),
											( a = {
												offset: ( E - 1 ) * x,
												order: r,
												page: E,
												per_page: x,
												search: P,
												post_status: j,
												orderby: n,
												date_filter: X,
											} ),
											xq( X ) &&
												( ( a.date_filter = 'custom' ),
												( a.start_date = sn()(
													X[ 0 ]
												).format( 'YYYY-MM-DD' ) ),
												( a.end_date = sn()(
													X[ 1 ]
												).format( 'YYYY-MM-DD' ) ) ),
											e
												.fetchMembershipPlans( a )
												.finally( function () {
													s( ! 1 );
												} ) );
									case 2:
										return t.a( 2 );
								}
							}
						}, t );
					} )
				),
				[ E, x, P, j, X ]
			),
			pe = ( 0, ReactHooks.useCallback )( function ( e ) {
				( _( ! 0 ), N( e ) );
			}, [] ),
			fe = ( 0, ReactHooks.useCallback )( function () {
				_( ! 1 );
			}, [] ),
			ve = ( 0, ReactHooks.useCallback )(
				q8(
					H8().m( function t() {
						return H8().w( function ( t ) {
							for (;;) {
								switch ( t.n ) {
									case 0:
										return (
											( t.n = 1 ),
											e.handleBulkDelete( 'membership', {
												membership_ids: F ? [ F ] : m,
											} )
										 );
									case 1:
										( me(),
											p( [] ),
											S( 1 ),
											N( null ),
											_( ! 1 ),
											K( ! 0 ) );
									case 2:
										return t.a( 2 );
								}
							}
						}, t );
					} )
				),
				[ m, F, me ]
			),
			ge = ( 0, ReactHooks.useCallback )(
				function ( e, t, n ) {
					var r =
							{
								number_of_submissions: 'number_of_submissions',
								name: 'title',
							}[ n.field ] || n.field,
						a =
							{
								ascend: 'ASC',
								descend: 'DESC',
							}[ n.order ] || n.order;
					( S( 1 ), me( r, a ) );
				},
				[ me, S ]
			),
			he = ( 0, ReactHooks.useMemo )(
				function () {
					return [
						{
							label: ( 0, I18n.__ )( 'Delete', 'ohmylms' ),
							value: 'delete',
							action() {
								_( ! 0 );
							},
						},
					];
				},
				[ m ]
			),
			ye = ( 0, ReactHooks.useMemo )( function () {
				return [
					{
						value: 'all',
						label: ( 0, I18n.__ )( 'All', 'ohmylms' ),
					},
					{
						value: 'publish',
						label: ( 0, I18n.__ )( 'Published', 'ohmylms' ),
					},
					{
						value: 'draft',
						label: ( 0, I18n.__ )( 'Draft', 'ohmylms' ),
					},
				];
			}, [] ),
			be = ( 0, ReactHooks.useMemo )( function () {
				return [
					{
						value: 'last_30_days',
						label: ( 0, I18n.__ )( 'Last 30 days', 'ohmylms' ),
					},
					{
						value: 'current_month',
						label: ( 0, I18n.__ )( 'Current month', 'ohmylms' ),
					},
					{
						value: 'previous_month',
						label: ( 0, I18n.__ )( 'Previous month', 'ohmylms' ),
					},
					{
						value: 'current_year',
						label: ( 0, I18n.__ )( 'Current year', 'ohmylms' ),
					},
					{
						value: 'last_12_months',
						label: ( 0, I18n.__ )( 'Last 12 months', 'ohmylms' ),
					},
				];
			}, [] ),
			_e = ( 0, ReactHooks.useMemo )(
				function () {
					return {
						selectedRowKeys: m,
						onChange: p,
					};
				},
				[ m ]
			),
			we = ( 0, ReactHooks.useMemo )( function () {
				return {
					label: ( 0, I18n.__ )( 'Add Membership', 'ohmylms' ),
					onClick() {
						return G( ! 0 );
					},
				};
			}, [] ),
			Ee = [
				{
					title: ( 0, I18n.__ )( 'ID', 'ohmylms' ),
					dataIndex: 'id',
					key: 'id',
					sorter: ! 0,
					render( e ) {
						return (
							<Buttons.A
								variant={ 'link' }
								onClick={ function () {
									return de( e );
								} }
							>
								{ '#' }
								{ e || '#' }
							</Buttons.A>
						);
					},
				},
				{
					title: ( 0, I18n.__ )( 'Membership Plan', 'ohmylms' ),
					dataIndex: 'name',
					key: 'name',
					sorter: ! 0,
					render( e ) {
						return <span>{ Ge( e ) || 'Untitled' }</span>;
					},
				},
				{
					title: ( 0, I18n.__ )( 'Price', 'ohmylms' ),
					dataIndex: 'price',
					key: 'price',
					sorter: ! 0,
					render( e, t ) {
						return (
							<Controls.BadgeWP
								variant={ 'secondary' }
								isBorderLess={ ! 0 }
							>
								{ null != t && t.sale_price ? (
									<React.Fragment>
										<span>
											<YH
												currency={
													( null == t
														? void 0
														: t.currency ) || '$'
												}
												currency_pos={
													( null == t
														? void 0
														: t.currency_pos ) ||
													'left'
												}
												price={ Number(
													( null == t
														? void 0
														: t.sale_price ) || '0'
												) }
											/>
											{ ' ' }
											<del>
												<YH
													currency={
														( null == t
															? void 0
															: t.currency ) ||
														'$'
													}
													currency_pos={
														( null == t
															? void 0
															: t.currency_pos ) ||
														'left'
													}
													price={ Number(
														( null == t
															? void 0
															: t.regular_price ) ||
															'0'
													) }
													del={ ! 0 }
												/>
											</del>
										</span>
									</React.Fragment>
								) : (
									<YH
										currency={
											( null == t
												? void 0
												: t.currency ) || '$'
										}
										currency_pos={
											( null == t
												? void 0
												: t.currency_pos ) || 'left'
										}
										price={ Number(
											( null == t ? void 0 : t.price ) ||
												'0'
										) }
									/>
								) }
							</Controls.BadgeWP>
						);
					},
				},
				{
					title: ( 0, I18n.__ )( 'Billing Cycle', 'ohmylms' ),
					dataIndex: 'subscription_period',
					key: 'subscription_period',
					sorter: ! 0,
					render( e ) {
						var t = {
							day: ( 0, I18n.__ )( 'Daily', 'ohmylms' ),
							week: ( 0, I18n.__ )( 'Weekly', 'ohmylms' ),
							month: ( 0, I18n.__ )( 'Monthly', 'ohmylms' ),
							year: ( 0, I18n.__ )( 'Yearly', 'ohmylms' ),
							one_time: ( 0, I18n.__ )( 'One Time', 'ohmylms' ),
						};
						return (
							<Controls.BadgeWP
								isBorderLess={ ! 0 }
								variant={ 'secondary' }
							>
								{ t[ e ] || e }
							</Controls.BadgeWP>
						);
					},
				},
				{
					title: ( 0, I18n.__ )( 'Subscribers', 'ohmylms' ),
					dataIndex: 'members',
					key: 'members',
					sorter: ! 0,
					render( e ) {
						return (
							<Controls.BadgeWP
								isBorderLess={ ! 0 }
								variant={ 'secondary' }
							>
								{ e || 0 }
							</Controls.BadgeWP>
						);
					},
				},
				{
					title: ( 0, I18n.__ )( 'Courses', 'ohmylms' ),
					dataIndex: 'courses',
					key: 'courses',
					sorter: ! 0,
					render( e ) {
						return (
							<Controls.BadgeWP
								isBorderLess={ ! 0 }
								variant={ 'secondary' }
							>
								{ e || 0 }
							</Controls.BadgeWP>
						);
					},
				},
				{
					title: ( 0, I18n.__ )( 'Status', 'ohmylms' ),
					dataIndex: 'status',
					key: 'status',
					render( e ) {
						return (
							<Controls.BadgeWP
								isBorderLess={ ! 0 }
								variant={
									'publish' === e ? 'success' : 'secondary'
								}
								style={ {
									textTransform: 'capitalize',
								} }
							>
								{ 'publish' === e
									? ( 0, I18n.__ )( 'Published', 'ohmylms' )
									: 'future' === e
										? ( 0, I18n.__ )(
												'Scheduled',
												'ohmylms'
											)
										: ( 0, I18n.__ )( 'Draft', 'ohmylms' ) }
							</Controls.BadgeWP>
						);
					},
				},
				{
					title: ( 0, I18n.__ )( 'Last Updated', 'ohmylms' ),
					dataIndex: 'date_modified',
					key: 'date_modified',
					render( e ) {
						var t,
							n = '',
							r =
								( null === ( t = window.ohmylms_params ) ||
								void 0 === t
									? void 0
									: t.date_format ) || 'F j, Y',
							a = ''.concat( r );
						return (
							e && 'object' === V8( e ) && e.date
								? ( n = ( 0, wq.dateI18n )( a, e.date ) )
								: 'string' === typeof e &&
									( n = ( 0, wq.dateI18n )( a, e ) ),
							(
								<Controls.BadgeWP
									isBorderLess={ ! 0 }
									variant={ 'secondary' }
								>
									{ n || '-' }
								</Controls.BadgeWP>
							 )
						 );
					},
				},
				{
					title: 'Action',
					dataIndex: 'action',
					key: 'action',
					render( e, t ) {
						return (
							<Controls.DropdownMenuWP
								controls={ [
									{
										title: ( 0, I18n.__ )(
											'Edit',
											'ohmylms'
										),
										key: 'edit',
										onClick() {
											return de(
												null == t ? void 0 : t.id
											);
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
										key: 'delete',
										onClick() {
											return pe(
												null == t ? void 0 : t.id
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
			];
		return (
			( 0, ReactHooks.useEffect )(
				function () {
					var e = ! 0;
					return (
						e && me(),
						function () {
							e = ! 1;
						}
					 );
				},
				[ E, x, P, e, j, X, $ ]
			),
			( 0, ReactHooks.useEffect )(
				function () {
					! u && t && openNotificationWithIcon( n, t );
				},
				[ t ]
			),
			(
				<React.Fragment>
					{ contextHolder }
					<Controls.ContainerWP>
						<YG
							title={ ( 0, I18n.__ )(
								'All Memberships',
								'ohmylms'
							) }
							showAddButton={ ! 0 }
							addButtonConfig={ we }
						/>
						<Ea
							isBorderless={ ! 0 }
							minHeight={ 'calc(100vh - 200px)' }
						>
							<Controls.SpacerWP padding={ 5 }>
								{ m.length > 0
									? React.createElement( hN, {
											items: m,
											setItems: p,
											bulksActions: he,
										} )
									: React.createElement( aY, {
											handleSearch: le,
											searchPlaceholder: ( 0, I18n.__ )(
												'Search Membership',
												'ohmylms'
											),
											handleFilterByDays: ue,
											filterByDaysOptions: be,
											filterByDays: X,
											handleFilterByStatus: ce,
											filterByStatusOptions: ye,
											filterByStatus: j,
											currentPage: E,
											totalItems: totalPlans,
											perPage: x,
											showFilterByCategory: ! 1,
											showFilterByPriceType: ! 1,
											showFilterByStatus: ! 1,
										} ) }
								<sN.A
									rowKey={ 'id' }
									columns={ Ee }
									dataSource={ o || [] }
									rowSelection={ _e }
									pagination={ ! 1 }
									loading={ u }
									onChange={ ge }
									onRowMouseEnter={ function ( e ) {
										return B( null == e ? void 0 : e.id );
									} }
									onRowMouseLeave={ function () {
										return B( null );
									} }
									locale={ {
										emptyText: React.createElement( uf, {
											icon: React.createElement(
												df,
												null
											),
											title: ( 0, I18n.__ )(
												'No Memberships yet!',
												'ohmylms'
											),
											description: ( 0, I18n.__ )(
												'Start building your first membership and it’ll show up here as soon as you hit publish.',
												'ohmylms'
											),
											ctaText: ( 0, I18n.__ )(
												'Add Membership',
												'ohmylms'
											),
											ctaHandler() {
												return G( ! 0 );
											},
										} ),
									} }
								/>
								{ u &&
									Number( totalPlans ) > x &&
									React.createElement( fN, {
										total: totalPlans,
										currentPage: E,
										onPageChange: se,
										perPage: x,
									} ) }
							</Controls.SpacerWP>
						</Ea>
					</Controls.ContainerWP>
					{ h && (
						<Ie
							title={
								m.length > 1
									? ( 0, I18n.__ )(
											'Delete Memberships',
											'ohmylms'
										)
									: ( 0, I18n.__ )(
											'Delete Membership',
											'ohmylms'
										)
							}
							description={
								m.length > 1
									? ( 0, I18n.__ )(
											'Are you sure you want to delete these memberships?',
											'ohmylms'
										)
									: ( 0, I18n.__ )(
											'Are you sure you want to delete membership?',
											'ohmylms'
										)
							}
							onClose={ fe }
							onDelete={ ve }
							isOpen={ h }
							isDelete={ ! 0 }
						/>
					) }
					{ H && (
						<MembershipEditor
							isOpen={ H }
							setIsOpen={ G }
							isFetch={ $ }
							setIsFetch={ K }
							isLoading={ Y }
						/>
					) }
					{ ne && (
						<React.Fragment>
							<He.default isOpen={ ne } onClose={ re } />
						</React.Fragment>
					) }
				</React.Fragment>
			 )
		 );
	};
}
