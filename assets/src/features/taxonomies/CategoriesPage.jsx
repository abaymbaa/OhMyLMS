/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCategoriesPage( readRuntime ) {
	return function CategoriesPage() {
		const {
			Ea,
			Ge,
			HG,
			I: Controls,
			IY,
			Ie,
			Ne,
			PY,
			React,
			T: StoreModule,
			TY,
			We,
			YG,
			aY,
			b: I18n,
			df,
			g: ReactHooks,
			hN,
			jY,
			l,
			pG,
			q,
			sN,
			uf,
			xY: TaxonomyModal,
			y: WordPressData,
			z: Notifications,
		} = readRuntime();
		HG( 'ohmylms', 'categories' );
		var e = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			t = ( 0, Notifications.A )(),
			n = t.openNotificationWithIcon,
			r = t.contextHolder,
			a = IY( ( 0, ReactHooks.useState )( [] ), 2 ),
			o = a[ 0 ],
			i = a[ 1 ],
			c = IY( ( 0, ReactHooks.useState )( ! 0 ), 2 ),
			u = c[ 0 ],
			s = c[ 1 ],
			d = IY( ( 0, ReactHooks.useState )( '' ), 2 ),
			m = d[ 0 ],
			p = d[ 1 ],
			f = IY( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			v = f[ 0 ],
			h = f[ 1 ],
			_ = IY( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			w = _[ 0 ],
			E = _[ 1 ],
			S = IY( ( 0, ReactHooks.useState )( null ), 2 ),
			R = S[ 0 ],
			x = S[ 1 ],
			C = IY( ( 0, ReactHooks.useState )( null ), 2 ),
			P = C[ 0 ],
			O = C[ 1 ],
			k = IY( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			j = k[ 0 ],
			A = k[ 1 ],
			M = IY( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			F = M[ 0 ],
			N = M[ 1 ],
			D = IY( ( 0, ReactHooks.useState )( [] ), 2 ),
			W = D[ 0 ],
			B = D[ 1 ],
			L = IY( ( 0, ReactHooks.useState )( null ), 2 ),
			V = ( L[ 0 ], L[ 1 ] ),
			H = ( 0, ReactHooks.useCallback )(
				TY(
					PY().m( function t() {
						var r, a;
						return PY().w(
							function ( t ) {
								for (;;) {
									switch ( ( t.p = t.n ) ) {
										case 0:
											return (
												s( ! 0 ),
												( t.p = 1 ),
												( t.n = 2 ),
												l()( {
													path: '/ohmylms/v1/categories',
												} )
											 );
										case 2:
											( ( r = t.v ),
												i( r || [] ),
												( a = ( r || [] ).map(
													function ( e ) {
														return jY(
															jY( {}, e ),
															{},
															{
																id: e.term_id,
															}
														);
													}
												) ),
												e.setGlobalDataViaKey(
													'categories',
													a
												),
												( t.n = 4 ) );
											break;
										case 3:
											( ( t.p = 3 ),
												t.v,
												n(
													'error',
													( 0, I18n.__ )(
														'Failed to load categories',
														'ohmylms'
													)
												) );
										case 4:
											return (
												( t.p = 4 ),
												s( ! 1 ),
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
				),
				[]
			);
		( 0, ReactHooks.useEffect )(
			function () {
				H();
			},
			[ H ]
		);
		var G = ( 0, ReactHooks.useCallback )( function ( e ) {
				p( e );
			}, [] ),
			U = ( 0, ReactHooks.useCallback )( function () {
				( x( null ), h( ! 0 ) );
			}, [] ),
			Y = ( 0, ReactHooks.useCallback )( function ( e ) {
				( x( e ), h( ! 0 ) );
			}, [] ),
			Q = ( 0, ReactHooks.useCallback )( function ( e ) {
				( O( e ), E( ! 0 ) );
			}, [] ),
			Z = ( function () {
				var e = TY(
					PY().m( function e( t ) {
						var r;
						return PY().w(
							function ( e ) {
								for (;;) {
									switch ( ( e.p = e.n ) ) {
										case 0:
											if (
												( A( ! 0 ), ( e.p = 1 ), ! R )
											) {
												e.n = 3;
												break;
											}
											return (
												( e.n = 2 ),
												l()( {
													path: '/ohmylms/v1/categories/'.concat(
														R.term_id
													),
													method: 'PUT',
													data: {
														name: t.name,
														parent: t.parent || 0,
													},
												} )
											 );
										case 2:
											( e.v,
												n(
													'success',
													( 0, I18n.__ )(
														'Category updated successfully',
														'ohmylms'
													)
												),
												( e.n = 5 ) );
											break;
										case 3:
											return (
												( e.n = 4 ),
												l()( {
													path: '/ohmylms/v1/categories',
													method: 'POST',
													data: {
														name: t.name,
														parent: t.parent || 0,
													},
												} )
											 );
										case 4:
											n(
												'success',
												( 0, I18n.__ )(
													'Category created successfully',
													'ohmylms'
												)
											);
										case 5:
											( h( ! 1 ),
												x( null ),
												H(),
												( e.n = 7 ) );
											break;
										case 6:
											( ( e.p = 6 ),
												( r = e.v ),
												n(
													'error',
													r.message ||
														( 0, I18n.__ )(
															'Failed to save category',
															'ohmylms'
														)
												) );
										case 7:
											return (
												( e.p = 7 ),
												A( ! 1 ),
												e.f( 7 )
											 );
										case 8:
											return e.a( 2 );
									}
								}
							},
							e,
							null,
							[ [ 1, 6, 7, 8 ] ]
						);
					} )
				);
				return function ( t ) {
					return e.apply( this, arguments );
				};
			} )(),
			$ = ( function () {
				var e = TY(
					PY().m( function e() {
						var t;
						return PY().w(
							function ( e ) {
								for (;;) {
									switch ( ( e.p = e.n ) ) {
										case 0:
											if ( P || 0 !== W.length ) {
												e.n = 1;
												break;
											}
											return e.a( 2 );
										case 1:
											if ( ! F ) {
												e.n = 2;
												break;
											}
											return e.a( 2 );
										case 2:
											if (
												( N( ! 0 ), ( e.p = 3 ), ! P )
											) {
												e.n = 5;
												break;
											}
											return (
												( e.n = 4 ),
												l()( {
													path: '/ohmylms/v1/categories/'.concat(
														P.term_id
													),
													method: 'DELETE',
												} )
											 );
										case 4:
											( n(
												'success',
												( 0, I18n.__ )(
													'Category deleted successfully',
													'ohmylms'
												)
											),
												( e.n = 7 ) );
											break;
										case 5:
											return (
												( e.n = 6 ),
												l()( {
													path: '/ohmylms/v1/categories/bulk',
													method: 'DELETE',
													data: {
														ids: W,
													},
													headers: {
														'Content-Type':
															'application/json',
													},
												} )
											 );
										case 6:
											( n(
												'success',
												( 0, I18n.__ )(
													'Categories deleted successfully',
													'ohmylms'
												)
											),
												B( [] ) );
										case 7:
											( E( ! 1 ),
												O( null ),
												H(),
												( e.n = 9 ) );
											break;
										case 8:
											( ( e.p = 8 ),
												( t = e.v ),
												n(
													'error',
													t.message ||
														( 0, I18n.__ )(
															'Failed to delete category',
															'ohmylms'
														)
												) );
										case 9:
											return (
												( e.p = 9 ),
												N( ! 1 ),
												e.f( 9 )
											 );
										case 10:
											return e.a( 2 );
									}
								}
							},
							e,
							null,
							[ [ 3, 8, 9, 10 ] ]
						);
					} )
				);
				return function () {
					return e.apply( this, arguments );
				};
			} )(),
			K = ( 0, ReactHooks.useMemo )(
				function () {
					return o.filter( function ( e ) {
						var t;
						return null == e ||
							null === ( t = e.name ) ||
							void 0 === t
							? void 0
							: t.toLowerCase().includes( m.toLowerCase() );
					} );
				},
				[ o, m ]
			),
			J = ( 0, ReactHooks.useMemo )(
				function () {
					return {
						selectedRowKeys: W,
						onChange: B,
					};
				},
				[ W ]
			),
			X = ( 0, ReactHooks.useMemo )(
				function () {
					return {
						label: ( 0, I18n.__ )( 'Add Category', 'ohmylms' ),
						onClick: U,
					};
				},
				[ U ]
			),
			ee = ( 0, ReactHooks.useMemo )( function () {
				return [
					{
						label: ( 0, I18n.__ )( 'Delete', 'ohmylms' ),
						value: 'delete',
						action() {
							E( ! 0 );
						},
					},
				];
			}, [] ),
			te = [
				{
					title: ( 0, I18n.__ )( 'ID', 'ohmylms' ),
					dataIndex: 'term_id',
					key: 'term_id',
					width: '80px',
					render( e ) {
						return (
							<Controls.BadgeWP
								variant={ 'secondary' }
								isBorderLess={ ! 0 }
							>
								{ e }
							</Controls.BadgeWP>
						);
					},
				},
				{
					title: ( 0, I18n.__ )( 'Name', 'ohmylms' ),
					dataIndex: 'name',
					key: 'name',
					render( e, t ) {
						var n;
						return (
							<div>
								<span
									style={ {
										fontWeight: 500,
									} }
								>
									{ e }
								</span>
								{ t.parent > 0 && (
									<div
										style={ {
											fontSize: '12px',
											color: '#666',
											marginTop: '4px',
										} }
									>
										{ ( 0, I18n.__ )(
											'Parent: ',
											'ohmylms'
										) }
										{ ( null ===
											( n = o.find( function ( e ) {
												return e.term_id === t.parent;
											} ) ) || void 0 === n
											? void 0
											: n.name ) || '—' }
									</div>
								) }
							</div>
						);
					},
				},
				{
					title: ( 0, I18n.__ )( 'No. of Courses', 'ohmylms' ),
					dataIndex: 'count',
					key: 'count',
					width: '150px',
					render( e, t ) {
						var n;
						return e && 0 !== e ? (
							<Controls.TooltipWP
								text={
									<div
										style={ {
											maxWidth: '300px',
										} }
									>
										<div
											style={ {
												fontWeight: 'bold',
												marginBottom: '8px',
											} }
										>
											{ ( 0, I18n.__ )(
												'Courses:',
												'ohmylms'
											) }
										</div>
										{ null === ( n = t.courses ) ||
										void 0 === n
											? void 0
											: n.map( function ( e ) {
													return (
														<div
															key={ e.id }
															style={ {
																padding:
																	'4px 0',
															} }
														>
															{ '• ' }
															{ Ge( e.title ) }
														</div>
													);
												} ) }
									</div>
								}
								position={ 'top' }
							>
								<Controls.BadgeWP
									variant={ 'secondary' }
									isBorderLess={ ! 0 }
								>
									{ e }
								</Controls.BadgeWP>
							</Controls.TooltipWP>
						) : (
							<Controls.BadgeWP
								variant={ 'secondary' }
								isBorderLess={ ! 0 }
							>
								{ '0' }
							</Controls.BadgeWP>
						);
					},
				},
				{
					title: ( 0, I18n.__ )( 'Actions', 'ohmylms' ),
					dataIndex: 'action',
					key: 'action',
					width: '100px',
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
											return Y( t );
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
											return Q( t );
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
			<React.Fragment>
				{ r }
				<Controls.ContainerWP>
					<YG
						title={ ( 0, I18n.__ )( 'Categories', 'ohmylms' ) }
						showAddButton={ ! 0 }
						addButtonConfig={ X }
					/>
					<Ea
						isBorderless={ ! 0 }
						minHeight={ 'calc(100vh - 200px)' }
					>
						<Controls.SpacerWP padding={ 5 }>
							{ W.length > 0
								? React.createElement( hN, {
										items: W,
										setItems: B,
										bulksActions: ee,
									} )
								: React.createElement( aY, {
										handleSearch: G,
										showFilterByDays: ! 1,
										showFilterByStatus: ! 1,
										showFilterByCategory: ! 1,
										showTotalItemsCount: ! 1,
										searchPlaceholder: ( 0, I18n.__ )(
											'Search categories...',
											'ohmylms'
										),
									} ) }
							<sN.A
								rowKey={ 'term_id' }
								columns={ te }
								dataSource={ K || [] }
								rowSelection={ J }
								pagination={ ! 1 }
								loading={ u }
								scroll={ {
									x: 'max-content',
								} }
								onRowMouseEnter={ function ( e ) {
									return V( null == e ? void 0 : e.term_id );
								} }
								onRowMouseLeave={ function () {
									return V( null );
								} }
								locale={ {
									emptyText: React.createElement( uf, {
										icon: React.createElement( df, null ),
										title: ( 0, I18n.__ )(
											'No categories yet!',
											'ohmylms'
										),
										description: ( 0, I18n.__ )(
											'Create your first category and it will show up here.',
											'ohmylms'
										),
										ctaText: ( 0, I18n.__ )(
											'Add Category',
											'ohmylms'
										),
										ctaHandler: U,
									} ),
								} }
							/>
						</Controls.SpacerWP>
					</Ea>
				</Controls.ContainerWP>
				{ v && (
					<TaxonomyModal
						isOpen={ v }
						onClose={ function () {
							( h( ! 1 ), x( null ) );
						} }
						onSubmit={ Z }
						title={
							R
								? ( 0, I18n.__ )( 'Edit Category', 'ohmylms' )
								: ( 0, I18n.__ )( 'Add Category', 'ohmylms' )
						}
						type={ 'category' }
						initialData={ R }
						categories={ o }
						isSubmitting={ j }
					/>
				) }
				{ w && (
					<Ie
						isOpen={ w }
						onClose={ function () {
							( E( ! 1 ), O( null ) );
						} }
						onDelete={ $ }
						title={ ( 0, I18n.__ )( 'Delete Category', 'ohmylms' ) }
						description={
							( null == P ? void 0 : P.count ) > 0
								? ( 0, I18n.__ )(
										'This category is assigned to courses. Deleting it will remove the category from those courses. Are you sure you want to continue?',
										'ohmylms'
									)
								: W.length > 0
									? ( 0, I18n.__ )(
											'Are you sure you want to delete the selected categories?',
											'ohmylms'
										)
									: ( 0, I18n.__ )(
											'Are you sure you want to delete this category?',
											'ohmylms'
										)
						}
						actionBtnText={ ( 0, I18n.__ )( 'Delete', 'ohmylms' ) }
						loading={ F }
						isDelete={ ! 0 }
					/>
				) }
			</React.Fragment>
		);
	};
}
