/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createQuizList( readRuntime ) {
	return function QuizList() {
		const {
			Ea,
			Ge,
			I: Controls,
			Ie,
			Ne,
			React,
			T: StoreModule,
			We,
			YG,
			_Z,
			aY,
			b: I18n,
			bZ,
			df,
			f: Router,
			fN,
			fZ,
			g: ReactHooks,
			hN,
			hZ,
			l,
			pG,
			pZ,
			q,
			sN,
			sZ: QuizNameCell,
			uf,
			v,
			y: WordPressData,
			yZ,
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
				return e( StoreModule.default ).getQuizzesPagination();
			}, [] ),
			a = ( r.totalQuizzes, r.totalPages, r.filteredQuizzes ),
			o = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getQuizzes();
			}, [] ),
			i = yZ( ( 0, ReactHooks.useState )( ! 0 ), 2 ),
			c = i[ 0 ],
			u = i[ 1 ],
			s = yZ( ( 0, ReactHooks.useState )( [] ), 2 ),
			d = s[ 0 ],
			m = s[ 1 ],
			p = yZ( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			h = p[ 0 ],
			_ = p[ 1 ],
			w = yZ( ( 0, ReactHooks.useState )( 1 ), 2 ),
			E = w[ 0 ],
			S = w[ 1 ],
			R = yZ( ( 0, ReactHooks.useState )( 5 ), 2 ),
			x = R[ 0 ],
			C = ( R[ 1 ], yZ( ( 0, ReactHooks.useState )( '' ), 2 ) ),
			P = C[ 0 ],
			O = C[ 1 ],
			k = yZ( ( 0, ReactHooks.useState )( '' ), 2 ),
			j = k[ 0 ],
			A = k[ 1 ],
			M = yZ( ( 0, ReactHooks.useState )( 'All' ), 2 ),
			F = M[ 0 ],
			N = M[ 1 ],
			D = yZ( ( 0, ReactHooks.useState )( null ), 2 ),
			W = D[ 0 ],
			B = D[ 1 ],
			L = yZ( ( 0, ReactHooks.useState )( null ), 2 ),
			V = L[ 0 ],
			H = L[ 1 ],
			G = yZ( ( 0, ReactHooks.useState )( [] ), 2 ),
			U = G[ 0 ],
			Y = G[ 1 ],
			Q = ( 0, Notifications.A )(),
			openNotificationWithIcon = Q.openNotificationWithIcon,
			contextHolder = Q.contextHolder,
			K = ( 0, Router.Zp )(),
			J = ( 0, ReactHooks.useCallback )( function ( e ) {
				( O( e ), S( 1 ) );
			}, [] ),
			X = ( 0, ReactHooks.useCallback )( function ( e ) {
				( A( e ), S( 1 ) );
			}, [] ),
			ee = ( 0, ReactHooks.useCallback )( function ( e ) {
				( N( e ), S( 1 ) );
			}, [] ),
			te = ( 0, ReactHooks.useCallback )( function ( e ) {
				( S( e ), m( [] ) );
			}, [] ),
			ne = ( 0, ReactHooks.useCallback )(
				hZ(
					fZ().m( function t() {
						var n,
							r,
							a,
							o = arguments;
						return fZ().w( function ( t ) {
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
												offset: 5 * ( E - 1 ),
												order: r,
												page: E,
												per_page: x,
												search: P,
												post_status: F,
												orderby: n,
												course_id: j,
											} ),
											e
												.fetchQuizzes( a )
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
				[ E, x, P, F, j ]
			),
			re = ( 0, ReactHooks.useCallback )( function ( e ) {
				( _( ! 0 ), B( e ) );
			}, [] ),
			ae = ( 0, ReactHooks.useCallback )( function () {
				_( ! 1 );
			}, [] ),
			oe = ( 0, ReactHooks.useCallback )(
				hZ(
					fZ().m( function t() {
						return fZ().w( function ( t ) {
							for (;;) {
								switch ( t.n ) {
									case 0:
										return (
											( t.n = 1 ),
											e.handleBulkDelete( 'quiz', {
												quiz_ids: W ? [ W ] : d,
											} )
										 );
									case 1:
										( t.v,
											ne(),
											m( [] ),
											S( 1 ),
											B( null ),
											_( ! 1 ) );
									case 2:
										return t.a( 2 );
								}
							}
						}, t );
					} )
				),
				[ d, W, ne ]
			),
			ie = ( 0, ReactHooks.useCallback )(
				function ( e, t, n ) {
					var r =
							{
								number_of_submissions: 'number_of_submissions',
								quiz_name: 'title',
							}[ n.field ] || n.field,
						a =
							{
								ascend: 'ASC',
								descend: 'DESC',
							}[ n.order ] || n.order;
					( S( 1 ), ne( r, a ) );
				},
				[ ne, S ]
			),
			le = ( 0, ReactHooks.useCallback )(
				hZ(
					fZ().m( function e() {
						var t;
						return fZ().w( function ( e ) {
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
										( ( t = e.v ), Y( t ) );
									case 2:
										return e.a( 2 );
								}
							}
						}, e );
					} )
				),
				[]
			),
			ce = ( 0, ReactHooks.useMemo )(
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
										return _Z( e );
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
								bZ( e ) ||
								( function () {
									throw new TypeError(
										'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
									);
								} )()
							);
						} )(
							U.map( function ( e ) {
								return {
									label: Ge( null == e ? void 0 : e.name ),
									value: null == e ? void 0 : e.id,
								};
							} )
						)
					);
				},
				[ U ]
			),
			ue = ( 0, ReactHooks.useMemo )(
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
				[ d ]
			),
			se = ( 0, ReactHooks.useMemo )( function () {
				return [
					{
						value: 'all',
						label: ( 0, I18n.__ )( 'All Status', 'ohmylms' ),
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
			de = ( 0, ReactHooks.useMemo )(
				function () {
					return {
						selectedRowKeys: d,
						onChange: m,
					};
				},
				[ d ]
			),
			me = [
				{
					title: ( 0, I18n.__ )( 'Quiz name', 'ohmylms' ),
					dataIndex: 'quiz_name',
					key: 'quiz_name',
					sorter: ! 0,
					width: '340px',
					render( e, t ) {
						var n = V === t.id;
						return <QuizNameCell record={ t } isHover={ n } />;
					},
				},
				{
					title: ( 0, I18n.__ )( 'Course name', 'ohmylms' ),
					dataIndex: 'courses',
					key: 'courses',
					render( e, t ) {
						return React.createElement( pZ, {
							items: [ null == e ? void 0 : e.course_name ],
							showAllOnHover: ! 0,
							maxVisible: 3,
						} );
					},
				},
				{
					title: ( 0, I18n.__ )( 'No. of Submissions', 'ohmylms' ),
					dataIndex: 'number_of_submissions',
					key: 'number_of_submissions',
					sorter: ! 0,
					render( e, t ) {
						return (
							<Controls.BadgeWP
								variant={ 'secondary' }
								isBorderLess={ ! 0 }
							>
								<v.Link
									to={ '/quiz-report/'.concat(
										null == t ? void 0 : t.id
									) }
								>
									{ e }{ ' ' }
								</v.Link>
							</Controls.BadgeWP>
						);
					},
				},
				{
					title: ( 0, I18n.__ )( 'Status', 'ohmylms' ),
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
					title: ( 0, I18n.__ )( 'Action', 'ohmylms' ),
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
											return K(
												'/quiz-edit/'.concat(
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
											return re(
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
						e && ne(),
						function () {
							e = ! 1;
						}
					 );
				},
				[ E, x, P, e, F, j ]
			),
			( 0, ReactHooks.useEffect )( function () {
				var e = ! 0;
				return (
					e && le(),
					function () {
						e = ! 1;
					}
				 );
			}, [] ),
			( 0, ReactHooks.useEffect )(
				function () {
					! c && t && openNotificationWithIcon( n, t );
				},
				[ t ]
			),
			(
				<React.Fragment>
					{ contextHolder }
					<Controls.ContainerWP>
						<YG
							title={ ( 0, I18n.__ )( 'All Quizzes', 'ohmylms' ) }
						/>
						<Ea
							isBorderless={ ! 0 }
							minHeight={ 'calc(100vh - 200px)' }
						>
							<Controls.SpacerWP padding={ 5 }>
								{ d.length > 0 ? (
									<React.Fragment>
										{ React.createElement( hN, {
											items: d,
											setItems: m,
											bulksActions: ue,
										} ) }
									</React.Fragment>
								) : (
									<React.Fragment>
										{ React.createElement( aY, {
											handleSearch: J,
											searchPlaceholder: ( 0, I18n.__ )(
												'Search Quiz',
												'ohmylms'
											),
											showFilterByDays: ! 1,
											showFilterByPriceType: ! 1,
											handleFilterByCategory: X,
											filterByCategory: j,
											categories: ce,
											categoryPrefix: ( 0, I18n.__ )(
												'Course',
												'ohmylms'
											),
											currentPage: E,
											totalItems: a,
											handleFilterByStatus: ee,
											filterByStatus: F,
											filterByStatusOptions: se,
											formateCategory: ! 1,
											className:
												'ohmylms-quiz-listing-filter-card',
										} ) }
									</React.Fragment>
								) }
								<sN.A
									rowKey={ 'id' }
									columns={ me }
									dataSource={ o || [] }
									rowSelection={ de }
									pagination={ ! 1 }
									loading={ c }
									onChange={ ie }
									onRowMouseEnter={ function ( e ) {
										return H( null == e ? void 0 : e.id );
									} }
									onRowMouseLeave={ function () {
										return H( null );
									} }
									className={ 'quiz-listing-table' }
									locale={ {
										emptyText: React.createElement( uf, {
											icon: React.createElement(
												df,
												null
											),
											title: ( 0, I18n.__ )(
												'No Quizzes yet!',
												'ohmylms'
											),
											description: ( 0, I18n.__ )(
												'Start building your first quiz and it’ll show up here as soon as you hit publish.',
												'ohmylms'
											),
										} ),
									} }
								/>
								{ ! c &&
									Number( a ) > 5 &&
									React.createElement( fN, {
										total: a,
										currentPage: E,
										onPageChange: te,
										perPage: x,
									} ) }
							</Controls.SpacerWP>
						</Ea>
					</Controls.ContainerWP>
					{ h && (
						<React.Fragment>
							<Ie
								title={
									d.length > 1
										? ( 0, I18n.__ )(
												'Delete Quizzes',
												'ohmylms'
											)
										: ( 0, I18n.__ )(
												'Delete Quiz',
												'ohmylms'
											)
								}
								description={
									d.length > 1
										? ( 0, I18n.__ )(
												'Are you sure you want to delete these Quizzes?',
												'ohmylms'
											)
										: ( 0, I18n.__ )(
												'Are you sure you want to delete quiz?',
												'ohmylms'
											)
								}
								onClose={ ae }
								onDelete={ oe }
								isOpen={ h }
								isDelete={ ! 0 }
							/>
						</React.Fragment>
					) }
				</React.Fragment>
			 )
		 );
	};
}
