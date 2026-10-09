/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
import { MovableTabPanel } from '../navigation/MovableTabPanel';
export function createEmailTemplateList( readRuntime ) {
	return function EmailTemplateList() {
		const {
			Bt,
			D: Buttons,
			I: Controls,
			React,
			T: StoreModule,
			b: I18n,
			f: Router,
			g: ReactHooks,
			i4,
			y: WordPressData,
		} = readRuntime();
		var e = i4( ( 0, ReactHooks.useState )( 'creator' ), 2 ),
			t = e[ 0 ],
			n = e[ 1 ],
			r = i4( ( 0, ReactHooks.useState )( '' ), 2 ),
			a = r[ 0 ],
			o = ( r[ 1 ], ( 0, Router.Zp )() ),
			i = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getEmails();
			}, [] ),
			l = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getEmailLoading();
			}, [] ),
			c = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			u = c.setEmail,
			s = c.updateSingleEmail,
			d = c.updateEmails,
			m = c.searchEmails,
			p = function ( e ) {
				var n = i[ t ].find( function ( t ) {
					return t.basic.id === e;
				} );
				( u( n ), o( '/emails/'.concat( e ) ) );
			},
			v = function () {
				var e;
				return (
					<Controls.CardWP isBorderless={ ! 0 }>
						<Controls.SpacerWP
							marginBottom={ 0 }
							marginTop={ 2.5 }
							padding={ 6 }
						>
							{ ( null === ( e = i[ t ] ) || void 0 === e
								? void 0
								: e.length ) > 0 &&
								i[ t ].map( function ( e, n ) {
									var r, a, o, l, c;
									return (
										<React.Fragment
											key={
												null !==
													( r =
														null == e ||
														null ===
															( a = e.basic ) ||
														void 0 === a
															? void 0
															: a.id ) &&
												void 0 !== r
													? r
													: n
											}
										>
											{ 0 !== n && (
												<Controls.SpacerWP
													marginTop={ 8 }
													marginBottom={ 8 }
												>
													<Controls.DividerWP
														color={ '#EDF2FB' }
													/>
												</Controls.SpacerWP>
											) }
											<Controls.FlexWP
												gap={ 2 }
												align={ 'center' }
												justify={ 'space-between' }
												key={
													null == e ||
													null === ( o = e.basic ) ||
													void 0 === o
														? void 0
														: o.id
												}
												className={
													'ohmylms-email-listing-card'
												}
											>
												<Controls.FlexWP
													direction={ 'column' }
													gap={ 2 }
													style={ {
														width: '70%',
													} }
												>
													<Controls.HeadingWP
														level={ 4 }
														color={ '#000D25' }
														size={ '16px' }
														onClick={ function () {
															var t;
															return p(
																null == e ||
																	null ===
																		( t =
																			e.basic ) ||
																	void 0 === t
																	? void 0
																	: t.id
															);
														} }
														style={ {
															cursor: 'pointer',
														} }
													>
														{ null == e ||
														null ===
															( l = e.basic ) ||
														void 0 === l
															? void 0
															: l.title }
													</Controls.HeadingWP>
													<Controls.TextWP
														color={ '#687784' }
														size={ '14px' }
													>
														{ null == e ||
														null ===
															( c = e.basic ) ||
														void 0 === c
															? void 0
															: c.tooltip }
													</Controls.TextWP>
												</Controls.FlexWP>
												<Controls.FlexWP
													gap={ 4 }
													align={ 'center' }
													justify={ 'end' }
													className={
														'ohmylms-email-listing-card-actions'
													}
												>
													<Bt.A
														onChange={ function () {
															var n;
															return ( function (
																e
															) {
																var n,
																	r,
																	a = i[
																		t
																	].find(
																		function (
																			t
																		) {
																			return (
																				t
																					.basic
																					.id ===
																				e
																			);
																		}
																	);
																( ( a.enable =
																	! a.enable ),
																	s(
																		null ==
																			a ||
																			null ===
																				( n =
																					a.basic ) ||
																			void 0 ===
																				n
																			? void 0
																			: n.id,
																		a
																	),
																	d(
																		null ==
																			a ||
																			null ===
																				( r =
																					a.basic ) ||
																			void 0 ===
																				r
																			? void 0
																			: r.id,
																		{
																			enable: a.enable,
																		},
																		t
																	) );
															} )(
																null == e ||
																	null ===
																		( n =
																			e.basic ) ||
																	void 0 === n
																	? void 0
																	: n.id
															);
														} }
														checked={
															null == e
																? void 0
																: e.enable
														}
														isDefaultStyle={ ! 0 }
													/>
													<Buttons.A
														variant={ 'text' }
														onClick={ function () {
															var t;
															return p(
																null == e ||
																	null ===
																		( t =
																			e.basic ) ||
																	void 0 === t
																	? void 0
																	: t.id
															);
														} }
													>
														<Controls.FlexWP
															align={ 'center' }
															gap={ 2.25 }
														>
															<Controls.TextWP
																color={
																	'#444D5E'
																}
																size={ '14px' }
																fontWeight={
																	400
																}
															>
																{ ( 0,
																I18n.__ )(
																	'Edit Template',
																	'ohmylms'
																) }
															</Controls.TextWP>
															<svg
																xmlns={
																	'http://www.w3.org/2000/svg'
																}
																width={ '14' }
																height={ '16' }
																viewBox={
																	'0 0 14 16'
																}
																fill={ 'none' }
															>
																<path
																	d={
																		'M14 3L11 0L2.5 8.5L1.5 12.5L5.5 11.5L14 3ZM7 14.5H0V16H7V14.5Z'
																	}
																	fill={
																		'#444D5E'
																	}
																/>
															</svg>
														</Controls.FlexWP>
													</Buttons.A>
												</Controls.FlexWP>
											</Controls.FlexWP>
										</React.Fragment>
									);
								} ) }
						</Controls.SpacerWP>
					</Controls.CardWP>
				);
			},
			h = [
				{
					label: (
						<React.Fragment>
							{ ( 0, I18n.__ )( 'Admin Email', 'ohmylms' ) }
						</React.Fragment>
					),
					key: 'creator',
					children: v(),
				},
				{
					label: (
						<React.Fragment>
							{ ( 0, I18n.__ )( 'Student Email', 'ohmylms' ) }
						</React.Fragment>
					),
					key: 'student',
					children: v(),
				},
			];
		return (
			( 0, ReactHooks.useEffect )(
				function () {
					( a.length > 2 || 0 === a.length ) && m( a, i[ t ] );
				},
				[ a ]
			),
			l ? (
				<Controls.SkeletonWP
					active={ ! 0 }
					rows={ 10 }
					style={ {
						position: 'absolute',
						top: '17px',
						left: '15px',
						zIndex: 3,
						background: '#FFFFFF',
						height: 'calc(100% - 32px)',
						padding: '24px',
						width: 'calc(100% - 26px)',
						borderRadius: '8px',
					} }
				/>
			) : (
				<React.Fragment>
					<MovableTabPanel
						scope="emails"
						items={ h }
						className={ 'ohmylms-emails-tabs' }
						onChange={ function ( e ) {
							n( e );
						} }
						activekey={ t }
					/>
				</React.Fragment>
			)
		 );
	};
}
