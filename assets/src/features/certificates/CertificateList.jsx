/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCertificateList( readRuntime ) {
	return function CertificateList() {
		const {
			$ee: MemoCertificateNameCell,
			Ea,
			Ge,
			I: Controls,
			Ie,
			Ne,
			React,
			T: StoreModule,
			We,
			YG,
			aY,
			b: I18n,
			cte,
			df,
			dte,
			f: Router,
			fN,
			fte,
			g: ReactHooks,
			hN,
			l,
			lte: MemoCertificateTemplateDialog,
			mte,
			pG,
			pZ,
			pte,
			q,
			sN,
			sn,
			uf,
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
				return e( StoreModule.default ).selectCertificatePagination();
			}, [] ),
			a = r.totalItems,
			o =
				( r.totalPages,
				( 0, WordPressData.useSelect )( function ( e ) {
					return e( StoreModule.default ).selectCertificates();
				}, [] ) ),
			i = mte( ( 0, ReactHooks.useState )( ! 0 ), 2 ),
			c = i[ 0 ],
			u = i[ 1 ],
			s = mte( ( 0, ReactHooks.useState )( [] ), 2 ),
			d = s[ 0 ],
			m = s[ 1 ],
			p = mte( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			v = p[ 0 ],
			h = p[ 1 ],
			_ = mte( ( 0, ReactHooks.useState )( 1 ), 2 ),
			w = _[ 0 ],
			E = _[ 1 ],
			S = mte( ( 0, ReactHooks.useState )( 5 ), 2 ),
			R = S[ 0 ],
			x = ( S[ 1 ], mte( ( 0, ReactHooks.useState )( '' ), 2 ) ),
			C = x[ 0 ],
			P = x[ 1 ],
			O = mte( ( 0, ReactHooks.useState )( '' ), 2 ),
			k = O[ 0 ],
			j = O[ 1 ],
			A = mte( ( 0, ReactHooks.useState )( 'all' ), 2 ),
			M = A[ 0 ],
			F = A[ 1 ],
			N = mte( ( 0, ReactHooks.useState )( null ), 2 ),
			D = N[ 0 ],
			W = N[ 1 ],
			B = mte( ( 0, ReactHooks.useState )( null ), 2 ),
			L = B[ 0 ],
			V = B[ 1 ],
			H = mte( ( 0, ReactHooks.useState )( [] ), 2 ),
			G = H[ 0 ],
			U = H[ 1 ],
			Y = mte( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			Q = Y[ 0 ],
			Z = Y[ 1 ],
			$ = ( 0, Notifications.A )(),
			K = $.openNotificationWithIcon,
			J = $.contextHolder,
			X = ( 0, Router.Zp )(),
			ee = ( 0, ReactHooks.useCallback )( function ( e ) {
				( P( e ), E( 1 ) );
			}, [] ),
			te = ( 0, ReactHooks.useCallback )( function ( e ) {
				( j( e ), E( 1 ) );
			}, [] ),
			ne = ( 0, ReactHooks.useCallback )( function ( e ) {
				( F( e ), E( 1 ) );
			}, [] ),
			re = ( 0, ReactHooks.useCallback )( function ( e ) {
				( E( e ), m( [] ) );
			}, [] ),
			ae = ( 0, ReactHooks.useCallback )(
				dte(
					cte().m( function t() {
						var n,
							r,
							a,
							o = arguments;
						return cte().w( function ( t ) {
							for (;;) {
								switch ( t.n ) {
									case 0:
										( ( n =
											o.length > 0 && void 0 !== o[ 0 ]
												? o[ 0 ]
												: 'date' ),
											( r =
												o.length > 1 &&
												void 0 !== o[ 1 ]
													? o[ 1 ]
													: 'DESC' ),
											u( ! 0 ),
											( a = {
												offset: ( w - 1 ) * R,
												order: r,
												page: w,
												per_page: R,
												search: C,
												post_status: M,
												orderby: n,
												course_id: k,
											} ),
											e
												.fetchCertificates( a )
												.finally( function () {
													u( ! 1 );
												} ) );
									case 1:
										return t.a( 2 );
								}
							}
						}, t );
					} )
				),
				[ w, R, C, M, k ]
			),
			oe = ( 0, ReactHooks.useCallback )( function ( e ) {
				( h( ! 0 ), W( e ) );
			}, [] ),
			ie = ( 0, ReactHooks.useCallback )( function () {
				h( ! 1 );
			}, [] ),
			le = ( 0, ReactHooks.useCallback )(
				dte(
					cte().m( function t() {
						return cte().w( function ( t ) {
							for (;;) {
								switch ( t.n ) {
									case 0:
										return (
											( t.n = 1 ),
											e.handleBulkDelete(
												'certificates',
												{
													certificate_ids: D
														? [ D ]
														: d,
												}
											)
										 );
									case 1:
										( ae(),
											m( [] ),
											E( 1 ),
											W( null ),
											h( ! 1 ) );
									case 2:
										return t.a( 2 );
								}
							}
						}, t );
					} )
				),
				[ d, D, ae ]
			),
			ce = ( 0, ReactHooks.useCallback )(
				function ( e, t, n ) {
					var r =
							{
								date_created: 'date',
								name: 'title',
							}[ n.field ] || n.field,
						a =
							{
								ascend: 'ASC',
								descend: 'DESC',
							}[ n.order ] || n.order;
					( E( 1 ), ae( r, a ) );
				},
				[ ae, E ]
			),
			ue = ( 0, ReactHooks.useCallback )(
				dte(
					cte().m( function e() {
						var t;
						return cte().w( function ( e ) {
							for (;;) {
								switch ( e.n ) {
									case 0:
										return (
											( e.n = 1 ),
											l()( {
												path: '/ohmylms/v1/courses',
											} )
										 );
									case 1:
										( ( t = e.v ), U( t ) );
									case 2:
										return e.a( 2 );
								}
							}
						}, e );
					} )
				),
				[]
			),
			se = ( 0, ReactHooks.useMemo )(
				function () {
					return [
						{
							label: ( 0, I18n.__ )( 'All Courses', 'ohmylms' ),
							value: '',
						},
					].concat(
						( function ( e ) {
							return (
								( function ( e ) {
									if ( Array.isArray( e ) ) {
										return fte( e );
									}
								} )( e ) ||
								( function ( e ) {
									if (
										( 'undefined' !== typeof Symbol &&
											null != e[ Symbol.iterator ] ) ||
										null != e[ '@@iterator' ]
									) {
										return Array.from( e );
									}
								} )( e ) ||
								pte( e ) ||
								( function () {
									throw new TypeError(
										'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
									);
								} )()
							);
						} )(
							G.map( function ( e ) {
								return {
									label: Ge( null == e ? void 0 : e.name ),
									value: null == e ? void 0 : e.id,
								};
							} )
						)
					);
				},
				[ G ]
			),
			de = ( 0, ReactHooks.useMemo )(
				function () {
					return [
						{
							label: ( 0, I18n.__ )( 'Delete', 'ohmylms' ),
							value: 'delete',
							action() {
								h( ! 0 );
							},
						},
					];
				},
				[ d ]
			),
			me = ( 0, ReactHooks.useMemo )( function () {
				return [
					{
						value: 'all',
						label: ( 0, I18n.__ )( 'All Status', 'ohmylms' ),
					},
					{
						value: 'publish',
						label: ( 0, I18n.__ )( 'Publish', 'ohmylms' ),
					},
					{
						value: 'draft',
						label: ( 0, I18n.__ )( 'Draft', 'ohmylms' ),
					},
				];
			}, [] ),
			pe = ( 0, ReactHooks.useMemo )(
				function () {
					return {
						selectedRowKeys: d,
						onChange: m,
					};
				},
				[ d ]
			),
			fe = ( 0, ReactHooks.useMemo )( function () {
				return {
					label: ( 0, I18n.__ )( 'Add Certificate', 'ohmylms' ),
					onClick() {
						return Z( ! 0 );
					},
				};
			}, [] ),
			ve = [
				{
					title: 'Certificate',
					dataIndex: 'name',
					key: 'name',
					sorter: ! 0,
					width: '340px',
					render( e, t ) {
						var n = L === t.id;
						return (
							<MemoCertificateNameCell
								record={ t }
								isHover={ n }
							/>
						);
					},
				},
				{
					title: 'Date',
					dataIndex: 'date_created',
					key: 'date_created',
					sorter: ! 0,
					render( e ) {
						return (
							<Controls.BadgeWP
								isBorderLess={ ! 0 }
								variant={ 'secondary' }
							>
								{ sn()( null == e ? void 0 : e.date ).format(
									'MMMM DD, YYYY'
								) || '-' }
							</Controls.BadgeWP>
						);
					},
				},
				{
					title: 'Course name',
					dataIndex: 'courses',
					key: 'courses',
					render( e, t ) {
						var n =
							( null == e
								? void 0
								: e.map( function ( e ) {
										return null == e ? void 0 : e.name;
									} ) ) || [];
						return React.createElement( pZ, {
							items: n,
							showAllOnHover: ! 0,
							maxVisible: 3,
						} );
					},
				},
				{
					title: 'Status',
					dataIndex: 'status',
					key: 'status',
					render( e, t ) {
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
											return X(
												'/certificate-edit/'.concat(
													null == t ? void 0 : t.id
												)
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
											return oe(
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
						e && ae(),
						function () {
							e = ! 1;
						}
					 );
				},
				[ w, R, C, e, M, k ]
			),
			( 0, ReactHooks.useEffect )( function () {
				var e = ! 0;
				return (
					e && ue(),
					function () {
						e = ! 1;
					}
				 );
			}, [] ),
			( 0, ReactHooks.useEffect )(
				function () {
					! c && t && K( n, t );
				},
				[ t ]
			),
			(
				<React.Fragment>
					{ J }
					<Controls.ContainerWP>
						<YG
							title={ ( 0, I18n.__ )(
								'All Certificates',
								'ohmylms'
							) }
							showAddButton={ ! 0 }
							addButtonConfig={ fe }
						/>
						<Ea
							isBorderless={ ! 0 }
							minHeight={ 'calc(100vh - 200px)' }
						>
							<Controls.SpacerWP padding={ 5 }>
								{ d.length > 0
									? React.createElement( hN, {
											items: d,
											setItems: m,
											bulksActions: de,
										} )
									: React.createElement( aY, {
											handleSearch: ee,
											searchPlaceholder: ( 0, I18n.__ )(
												'Search certificate',
												'ohmylms'
											),
											showFilterByDays: ! 1,
											showFilterByPriceType: ! 1,
											handleFilterByCategory: te,
											filterByCategory: k,
											categories: se,
											categoryPrefix: ( 0, I18n.__ )(
												'Course',
												'ohmylms'
											),
											currentPage: w,
											totalItems: a,
											handleFilterByStatus: ne,
											filterByStatus: M,
											filterByStatusOptions: me,
											formateCategory: ! 1,
											showFilterByStatus: ! 1,
											className:
												'ohmylms-certificate-listing-filter-card',
										} ) }
								<sN.A
									rowKey={ 'id' }
									columns={ ve }
									dataSource={ o || [] }
									rowSelection={ pe }
									pagination={ ! 1 }
									loading={ c }
									onChange={ ce }
									onRowMouseEnter={ function ( e ) {
										return V( null == e ? void 0 : e.id );
									} }
									onRowMouseLeave={ function () {
										return V( null );
									} }
									className={ 'certificate-listing-table' }
									locale={ {
										emptyText: React.createElement( uf, {
											icon: React.createElement(
												df,
												null
											),
											title: ( 0, I18n.__ )(
												'No Certificates yet!',
												'ohmylms'
											),
											description: ( 0, I18n.__ )(
												'Start building your first certificate and it’ll show up here as soon as you hit publish.',
												'ohmylms'
											),
										} ),
									} }
								/>
								{ ! c &&
									Number( a ) > 5 &&
									React.createElement( fN, {
										total: a,
										currentPage: w,
										onPageChange: re,
										perPage: R,
									} ) }
							</Controls.SpacerWP>
						</Ea>
					</Controls.ContainerWP>
					{ v && (
						<Ie
							title={
								d.length > 1
									? ( 0, I18n.__ )(
											'Delete Certificates',
											'ohmylms'
										)
									: ( 0, I18n.__ )(
											'Delete Certificate',
											'ohmylms'
										)
							}
							description={
								d.length > 1
									? ( 0, I18n.__ )(
											'Are you sure you want to delete these certificates?',
											'ohmylms'
										)
									: ( 0, I18n.__ )(
											'Are you sure you want to delete certificate?',
											'ohmylms'
										)
							}
							onClose={ ie }
							onDelete={ le }
							isOpen={ v }
							isDelete={ ! 0 }
						/>
					) }
					{ Q && (
						<MemoCertificateTemplateDialog
							openModal={ Q }
							setOpenModal={ Z }
						/>
					) }
				</React.Fragment>
			 )
		 );
	};
}
