/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createSetupPreferences( readRuntime ) {
	return function SetupPreferences( props ) {
		const {
			Gte,
			I: Controls,
			React,
			T: StoreModule,
			b: I18n,
			cne,
			fne,
			g: ReactHooks,
			hB,
			ine,
			m,
			pne,
			sne,
			une,
			y: WordPressData,
		} = readRuntime();
		var t,
			n,
			r,
			a,
			o,
			i,
			l,
			c,
			u,
			s,
			d,
			p,
			f = props.onTabChange,
			v = props.onWizardSkip,
			h = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			_ = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getSetupWizardData();
			}, [] ),
			w = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getCurrencySettings();
			}, [] ),
			E = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getDesignSettings();
			}, [] ),
			S = fne( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			R = S[ 0 ],
			x = S[ 1 ],
			C = ( function () {
				var e = pne(
					sne().m( function e() {
						var t, n, r;
						return sne().w(
							function ( e ) {
								for (;;) {
									switch ( ( e.p = e.n ) ) {
										case 0:
											if ( _.certificate ) {
												e.n = 1;
												break;
											}
											return e.a( 2, null );
										case 1:
											if (
												( ( e.p = 1 ),
												( t = hB.find( function ( e ) {
													return (
														e.id === _.certificate
													);
												} ) ) )
											) {
												e.n = 2;
												break;
											}
											return e.a( 2, null );
										case 2:
											return (
												( e.n = 3 ),
												m( {
													path: '/ohmylms/v1/certificates/',
													method: 'POST',
													data: {
														name: 'Certificate Template '.concat(
															_.certificate
														),
														status: 'publish',
														contents: t.contents,
														template_thumbnail:
															t.image_src,
													},
												} )
											 );
										case 3:
											return (
												( n = e.v ),
												e.a(
													2,
													( null == n
														? void 0
														: n.id ) || null
												)
											 );
										case 4:
											return (
												( e.p = 4 ),
												( r = e.v ),
												console.error(
													'Error creating certificate:',
													r
												),
												e.a( 2, null )
											 );
									}
								}
							},
							e,
							null,
							[ [ 1, 4 ] ]
						);
					} )
				);
				return function () {
					return e.apply( this, arguments );
				};
			} )(),
			P = ( function () {
				var e = pne(
					sne().m( function e( t ) {
						var n, r, a, o;
						return sne().w(
							function ( e ) {
								for (;;) {
									switch ( ( e.p = e.n ) ) {
										case 0:
											if (
												t &&
												'others' !== t &&
												une[ t ]
											) {
												e.n = 1;
												break;
											}
											return e.a( 2 );
										case 1:
											return (
												( e.p = 1 ),
												( r = une[ t ].data ),
												( e.n = 2 ),
												m( {
													path: '/ohmylms/v1/setup-wizard/import-course',
													method: 'POST',
													data: r,
													headers: {
														nonce: window
															.ohmylms_params
															.setup_wizard_nonce,
													},
												} )
											 );
										case 2:
											( null != ( a = e.v ) &&
												null !== ( n = a.course_ids ) &&
												void 0 !== n &&
												n.length &&
												h.setSetupWizardData( {
													imported_course_ids:
														a.course_ids,
												} ),
												( e.n = 4 ) );
											break;
										case 3:
											( ( e.p = 3 ),
												( o = e.v ),
												console.error(
													'Error importing sample course:',
													o
												) );
										case 4:
											return e.a( 2 );
									}
								}
							},
							e,
							null,
							[ [ 1, 3 ] ]
						);
					} )
				);
				return function ( t ) {
					return e.apply( this, arguments );
				};
			} )(),
			O = ( function () {
				var e = pne(
					sne().m( function e() {
						var t, n, r, a, o, i, l, c, u, s, d, m;
						return sne().w(
							function ( e ) {
								for (;;) {
									switch ( ( e.p = e.n ) ) {
										case 0:
											return (
												( e.p = 0 ),
												( e.n = 1 ),
												C()
											 );
										case 1:
											return (
												( s = e.v ),
												( d = {
													optin: {
														ohmylms_allow_tracking:
															null != _ &&
															_.isOptEnabled
																? 'yes'
																: 'no',
													},
													language:
														null !==
															( t =
																_.language ) &&
														void 0 !== t
															? t
															: 'en_US',
													certificate: _.certificate,
													certificate_id: s,
													niche: _.niche
														? [ _.niche ]
														: [],
													level: _.level,
													currency: {
														ohmylms_currency:
															null !==
																( n =
																	_.currency ) &&
															void 0 !== n
																? n
																: null == w ||
																	  null ===
																			( r =
																				w.ohmylms_currency ) ||
																	  void 0 ===
																			r
																	? void 0
																	: r.value,
														ohmylms_currency_pos:
															( null == w ||
															null ===
																( a =
																	w.ohmylms_currency_pos ) ||
															void 0 === a
																? void 0
																: a.value ) ||
															'left',
														ohmylms_price_thousand_sep:
															( null == w ||
															null ===
																( o =
																	w.ohmylms_price_thousand_sep ) ||
															void 0 === o
																? void 0
																: o.value ) ||
															',',
														ohmylms_price_decimal_sep:
															( null == w ||
															null ===
																( i =
																	w.ohmylms_price_decimal_sep ) ||
															void 0 === i
																? void 0
																: i.value ) ||
															'.',
														ohmylms_price_num_decimals:
															( null == w ||
															null ===
																( l =
																	w.ohmylms_price_num_decimals ) ||
															void 0 === l
																? void 0
																: l.value ) ||
															'2',
													},
													contact: {
														email:
															null != _ &&
															_.isOptEnabled
																? null ===
																		( c =
																			window.ohmylms_params ) ||
																	void 0 === c
																	? void 0
																	: c.admin_email
																: '',
														name:
															null != _ &&
															_.isOptEnabled
																? null ===
																		( u =
																			window.ohmylms_params ) ||
																	void 0 === u
																	? void 0
																	: u.admin_name
																: '',
													},
													wizard_data: _,
												} ),
												( e.n = 2 ),
												h.saveSetup( d )
											 );
										case 2:
											return (
												( e.n = 3 ),
												P(
													null == _ ? void 0 : _.niche
												)
											 );
										case 3:
											( s &&
												h.setSetupWizardData( {
													certificate_id: s,
												} ),
												( e.n = 5 ) );
											break;
										case 4:
											( ( e.p = 4 ),
												( m = e.v ),
												console.error(
													'Error saving setup wizard data:',
													m
												) );
										case 5:
											return e.a( 2 );
									}
								}
							},
							e,
							null,
							[ [ 0, 4 ] ]
						);
					} )
				);
				return function () {
					return e.apply( this, arguments );
				};
			} )(),
			k = ( function () {
				var e = pne(
					sne().m( function e() {
						var t, n, r, a;
						return sne().w(
							function ( e ) {
								for (;;) {
									switch ( ( e.p = e.n ) ) {
										case 0:
											return (
												( e.p = 0 ),
												( r = {
													optin: {
														ohmylms_allow_tracking:
															null != _ &&
															_.isOptEnabled
																? 'yes'
																: 'no',
													},
													niche: _.niche
														? [ _.niche ]
														: [],
													level: _.level,
													contact: {
														email:
															null != _ &&
															_.isOptEnabled
																? null ===
																		( t =
																			window.ohmylms_params ) ||
																	void 0 === t
																	? void 0
																	: t.admin_email
																: '',
														name:
															null != _ &&
															_.isOptEnabled
																? null ===
																		( n =
																			window.ohmylms_params ) ||
																	void 0 === n
																	? void 0
																	: n.admin_name
																: '',
													},
													wizard_data: _,
												} ),
												( e.n = 1 ),
												h.saveSetup( r )
											 );
										case 1:
											return (
												( e.n = 2 ),
												P(
													null == _ ? void 0 : _.niche
												)
											 );
										case 2:
											e.n = 4;
											break;
										case 3:
											( ( e.p = 3 ),
												( a = e.v ),
												console.error(
													'Error saving setup wizard data:',
													a
												) );
										case 4:
											return e.a( 2 );
									}
								}
							},
							e,
							null,
							[ [ 0, 3 ] ]
						);
					} )
				);
				return function () {
					return e.apply( this, arguments );
				};
			} )(),
			j = ( function () {
				var e = pne(
					sne().m( function e() {
						return sne().w( function ( e ) {
							for (;;) {
								switch ( e.n ) {
									case 0:
										if ( ! R ) {
											e.n = 1;
											break;
										}
										return e.a( 2 );
									case 1:
										if ( 'beginner' !== _.level ) {
											e.n = 3;
											break;
										}
										return ( x( ! 0 ), ( e.n = 2 ), O() );
									case 2:
										x( ! 1 );
									case 3:
										F();
									case 4:
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
			A = ( function () {
				var e = pne(
					sne().m( function e() {
						return sne().w( function ( e ) {
							for (;;) {
								switch ( e.n ) {
									case 0:
										return (
											( e.n = 1 ),
											h.setSetupWizardData( {
												currency: void 0,
												language: void 0,
												archive_page_layout: void 0,
												courses_per_row: void 0,
												courses_per_page: void 0,
												certificate_enabled: void 0,
												certificate: void 0,
											} )
										 );
									case 1:
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
			M = ( function () {
				var e = pne(
					sne().m( function e() {
						return sne().w( function ( e ) {
							for (;;) {
								switch ( e.n ) {
									case 0:
										return ( ( e.n = 1 ), A() );
									case 1:
										( 'beginner' === _.level && k(), F() );
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
			F = function () {
				'beginner' === ( null == _ ? void 0 : _.level )
					? f( 'wizard-completion' )
					: f( 'wizard-niche' );
			},
			N = [
				{
					label: ( 0, I18n.__ )(
						'English (United States)',
						'ohmylms'
					),
					value: 'en_US',
				},
				{
					label: ( 0, I18n.__ )( 'Spanish (Spain)', 'ohmylms' ),
					value: 'es_ES',
				},
				{
					label: ( 0, I18n.__ )( 'French (France)', 'ohmylms' ),
					value: 'fr_FR',
				},
				{
					label: ( 0, I18n.__ )( 'German (Germany)', 'ohmylms' ),
					value: 'de_DE',
				},
				{
					label: ( 0, I18n.__ )( 'Italian (Italy)', 'ohmylms' ),
					value: 'it_IT',
				},
				{
					label: ( 0, I18n.__ )( 'Portuguese (Brazil)', 'ohmylms' ),
					value: 'pt_BR',
				},
				{
					label: ( 0, I18n.__ )( 'Dutch (Netherlands)', 'ohmylms' ),
					value: 'nl_NL',
				},
				{
					label: ( 0, I18n.__ )( 'Russian (Russia)', 'ohmylms' ),
					value: 'ru_RU',
				},
				{
					label: ( 0, I18n.__ )( 'Chinese (Simplified)', 'ohmylms' ),
					value: 'zh_CN',
				},
				{
					label: ( 0, I18n.__ )( 'Japanese (Japan)', 'ohmylms' ),
					value: 'ja',
				},
				{
					label: ( 0, I18n.__ )( 'Korean (Korea)', 'ohmylms' ),
					value: 'ko_KR',
				},
				{
					label: ( 0, I18n.__ )( 'Arabic (Saudi Arabia)', 'ohmylms' ),
					value: 'ar',
				},
				{
					label: ( 0, I18n.__ )( 'Hindi (India)', 'ohmylms' ),
					value: 'hi_IN',
				},
				{
					label: ( 0, I18n.__ )( 'Bengali (Bangladesh)', 'ohmylms' ),
					value: 'bn_BD',
				},
				{
					label: ( 0, I18n.__ )( 'Turkish (Turkey)', 'ohmylms' ),
					value: 'tr_TR',
				},
			],
			D = ( function () {
				var e = pne(
					sne().m( function e( t ) {
						var n, r, a, o;
						return sne().w( function ( e ) {
							for (;;) {
								if ( 0 === e.n ) {
									return (
										( r = Object.entries(
											null == w ||
												null ===
													( n =
														w.ohmylms_currency ) ||
												void 0 === n
												? void 0
												: n.options
										).map( function ( e ) {
											var t = fne( e, 2 ),
												n = t[ 0 ];
											return {
												label: t[ 1 ],
												value: n,
											};
										} ) ),
										( a = r.filter( function ( e ) {
											return e.label
												.toLowerCase()
												.includes( t.toLowerCase() );
										} ) ),
										( o = a.map( function ( e ) {
											return {
												label: (
													<span
														dangerouslySetInnerHTML={ {
															__html: e.label,
														} }
													/>
												),
												value: e.value,
											};
										} ) ),
										e.a( 2, o )
									 );
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
			( 0, ReactHooks.useEffect )( function () {
				var e;
				( null != _ && _.archive_page_layout ) ||
					h.setSetupWizardData( {
						archive_page_layout:
							( null === ( e = E.ohmylms_archive_page_layout ) ||
							void 0 === e
								? void 0
								: e.value ) || 'grid',
					} );
			}, [] ),
			(
				<React.Fragment>
					<Gte
						level={ null == _ ? void 0 : _.level }
						currentStep={
							'experienced' == ( null == _ ? void 0 : _.level ) ||
							'intermediate' == ( null == _ ? void 0 : _.level )
								? 0
								: 1
						}
						isShowIndicator={ ! 0 }
						onSkip={ function () {
							return null == v ? void 0 : v( 'preferences' );
						} }
					/>
					<Controls.ContainerWP>
						<div
							className={
								'ohmylms-setup-wizard-level-selection-wrapper ohmylms-setup-wizard-card-wrapper ohmylms-preference-screen-wrapper'
							}
						>
							<div
								className={ 'ohmylms-setup-wizard__container' }
								style={ {
									gap: '0',
								} }
							>
								<div
									className={ 'ohmylms-setup-wizard__header' }
								>
									<Controls.HeadingWP
										as={ 'h2' }
										color={ '#000d25' }
										size={ '24' }
										align={ 'center' }
										weight={ '600' }
									>
										{ ( 0, I18n.__ )(
											"Let's set your preferences",
											'ohmylms'
										) }
									</Controls.HeadingWP>
									<Controls.TextWP
										as={ 'p' }
										size={ '18' }
										color={ '#687784' }
										align={ 'center' }
										weight={ '400' }
										style={ {
											maxWidth: '400px',
											margin: 'auto',
										} }
									>
										{ ( 0, I18n.__ )(
											"Choose what works best for your region. We'll take care of the rest.",
											'ohmylms'
										) }
									</Controls.TextWP>
								</div>
								<Controls.CardWP
									isBorderless={ ! 0 }
									style={ {
										width: '788px',
										margin: '56px auto 0 auto',
									} }
								>
									<Controls.SpacerWP
										padding={ 6 }
										marginBottom={ 0 }
									>
										<Controls.FlexWP
											direction={ 'column' }
											gap={ 6 }
										>
											<Controls.FlexWP
												gap={ 8 }
												align={ 'center' }
												justify={ 'space-between' }
											>
												<Controls.FlexItemWP
													isBlock={ ! 0 }
												>
													<Controls.FlexWP
														align={ 'center' }
														gap={ '1' }
														justify={ 'flex-start' }
													>
														<Controls.HeadingWP
															level={ '4' }
														>
															{ ( 0, I18n.__ )(
																'Language',
																'ohmylms'
															) }
														</Controls.HeadingWP>
													</Controls.FlexWP>
													<Controls.SpacerWP
														marginBottom={ 1 }
													/>
												</Controls.FlexItemWP>
												<Controls.FlexItemWP
													isBlock={ ! 0 }
												>
													<Controls.SearchSelectWP
														placeholder={ ( 0,
														I18n.__ )(
															'Select Language',
															'ohmylms'
														) }
														onChange={ function (
															e
														) {
															h.setSetupWizardData(
																{
																	language:
																		e.value,
																}
															);
														} }
														value={ [
															N.find(
																function ( e ) {
																	return (
																		e.value ===
																		( ( null ==
																		_
																			? void 0
																			: _.language ) ||
																			'en_US' )
																	);
																}
															) || N[ 0 ],
														] }
														defaultOptions={ N }
														isClearable={ ! 1 }
														isSearchable={ ! 0 }
														isMulti={ ! 1 }
													/>
												</Controls.FlexItemWP>
											</Controls.FlexWP>
											<Controls.FlexWP
												gap={ 8 }
												align={ 'center' }
												justify={ 'space-between' }
											>
												<Controls.FlexItemWP
													isBlock={ ! 0 }
												>
													<Controls.FlexWP
														align={ 'center' }
														gap={ '1' }
														justify={ 'flex-start' }
													>
														<Controls.HeadingWP
															level={ '4' }
														>
															{ ( 0, I18n.__ )(
																'Currency Symbol',
																'ohmylms'
															) }
														</Controls.HeadingWP>
													</Controls.FlexWP>
													<Controls.SpacerWP
														marginBottom={ 1 }
													/>
												</Controls.FlexItemWP>
												<Controls.FlexItemWP
													isBlock={ ! 0 }
												>
													<Controls.SearchSelectWP
														placeholder={ ( 0,
														I18n.__ )(
															'Type to Select Currency',
															'ohmylms'
														) }
														onChange={ function (
															e
														) {
															h.setSetupWizardData(
																{
																	currency:
																		e.value,
																}
															);
														} }
														value={ [
															{
																label: (
																	<span
																		dangerouslySetInnerHTML={ {
																			__html:
																				null !==
																					( t =
																						null ==
																							w ||
																						null ===
																							( n =
																								w.ohmylms_currency ) ||
																						void 0 ===
																							n
																							? void 0
																							: n
																									.options[
																									null ==
																									_
																										? void 0
																										: _.currency
																								] ) &&
																				void 0 !==
																					t
																					? t
																					: null ==
																								w ||
																						  null ===
																								( r =
																									w.ohmylms_currency ) ||
																						  void 0 ===
																								r
																						? void 0
																						: r
																								.options[
																								null ==
																									w ||
																								null ===
																									( a =
																										w.ohmylms_currency ) ||
																								void 0 ===
																									a
																									? void 0
																									: a.value
																							],
																		} }
																	/>
																),
																value:
																	null !==
																		( o =
																			null ==
																			_
																				? void 0
																				: _.currency ) &&
																	void 0 !== o
																		? o
																		: null ==
																					w ||
																			  null ===
																					( i =
																						w.ohmylms_currency ) ||
																			  void 0 ===
																					i
																			? void 0
																			: i.value,
															},
														] }
														defaultOptions={
															( ( p =
																null == w ||
																null ===
																	( l =
																		w.ohmylms_currency ) ||
																void 0 === l
																	? void 0
																	: l.options ),
															p
																? Object.entries(
																		p
																	).map(
																		function (
																			e
																		) {
																			var t =
																					fne(
																						e,
																						2
																					),
																				n =
																					t[ 0 ],
																				r =
																					t[ 1 ];
																			return {
																				label: (
																					<span
																						dangerouslySetInnerHTML={ {
																							__html: r,
																						} }
																					/>
																				),
																				value: n,
																			};
																		}
																	)
																: [] )
														}
														loadOptions={ D }
														isClearable={ ! 1 }
														isSearchable={ ! 0 }
														isMulti={ ! 1 }
													/>
												</Controls.FlexItemWP>
											</Controls.FlexWP>
										</Controls.FlexWP>
									</Controls.SpacerWP>
								</Controls.CardWP>
								{ 'beginner' !== _.level && (
									<Controls.CardWP
										isBorderless={ ! 0 }
										style={ {
											width: '788px',
											margin: '24px auto 0 auto',
										} }
									>
										<Controls.SpacerWP
											padding={ 6 }
											marginBottom={ 0 }
										>
											<Controls.FlexWP
												direction={ 'column' }
												gap={ 6 }
											>
												<Controls.FlexWP
													gap={ 8 }
													align={ 'center' }
													justify={ 'space-between' }
												>
													<Controls.FlexItemWP
														isBlock={ ! 0 }
													>
														<Controls.FlexWP
															align={ 'center' }
															gap={ '1' }
															justify={
																'flex-start'
															}
														>
															<Controls.HeadingWP
																level={ '4' }
															>
																{ ( 0,
																I18n.__ )(
																	'Archive Page Layout',
																	'ohmylms'
																) }
															</Controls.HeadingWP>
														</Controls.FlexWP>
														<Controls.SpacerWP
															marginBottom={ 1 }
														/>
													</Controls.FlexItemWP>
													<Controls.FlexItemWP
														isBlock={ ! 0 }
													>
														<Controls.FlexWP
															align={ 'flex-end' }
															justify={
																'flex-end'
															}
														>
															<Controls.RadioGroupWP
																onChange={ function (
																	e
																) {
																	h.setSetupWizardData(
																		{
																			archive_page_layout:
																				e,
																		}
																	);
																} }
																value={
																	null !==
																		( c =
																			null ==
																			_
																				? void 0
																				: _.archive_page_layout ) &&
																	void 0 !== c
																		? c
																		: null ===
																					( u =
																						E.ohmylms_archive_page_layout ) ||
																			  void 0 ===
																					u
																			? void 0
																			: u.value
																}
																options={ [
																	{
																		value: 'grid',
																		label: ( 0,
																		I18n.__ )(
																			'Grid View',
																			'ohmylms'
																		),
																	},
																	{
																		value: 'list',
																		label: ( 0,
																		I18n.__ )(
																			'List View',
																			'ohmylms'
																		),
																	},
																] }
																isBlock={ ! 1 }
															/>
														</Controls.FlexWP>
													</Controls.FlexItemWP>
												</Controls.FlexWP>
												{ 'list' !==
													( null == _
														? void 0
														: _.archive_page_layout ) && (
													<React.Fragment>
														{ React.createElement(
															cne,
															{
																onChange( e ) {
																	h.setSetupWizardData(
																		{
																			courses_per_row:
																				e,
																		}
																	);
																},
																defaultValue:
																	null !==
																		( s =
																			null ==
																			_
																				? void 0
																				: _.courses_per_row ) &&
																	void 0 !== s
																		? s
																		: null ===
																					( d =
																						E.ohmylms_columns_per_row ) ||
																			  void 0 ===
																					d
																			? void 0
																			: d.value,
															}
														) }
													</React.Fragment>
												) }
											</Controls.FlexWP>
										</Controls.SpacerWP>
									</Controls.CardWP>
								) }
								<Controls.CardWP
									isBorderless={ ! 0 }
									style={ {
										width: '788px',
										margin: '24px auto 0 auto',
									} }
								>
									<Controls.SpacerWP
										padding={ 6 }
										marginBottom={ 0 }
									>
										<Controls.FlexWP
											direction={ 'column' }
											gap={ 6 }
										>
											<Controls.FlexWP
												gap={ 8 }
												align={ 'center' }
												justify={ 'space-between' }
											>
												<Controls.FlexItemWP
													isBlock={ ! 0 }
												>
													<Controls.FlexWP
														align={ 'center' }
														gap={ '1' }
														justify={ 'flex-start' }
													>
														<Controls.HeadingWP
															level={ '4' }
														>
															{ ( 0, I18n.__ )(
																'Enable certificate',
																'ohmylms'
															) }
														</Controls.HeadingWP>
													</Controls.FlexWP>
													<Controls.SpacerWP
														marginBottom={ 1 }
													/>
												</Controls.FlexItemWP>
												<Controls.FlexItemWP
													isBlock={ ! 0 }
												>
													<Controls.FlexWP
														align={ 'flex-end' }
														justify={ 'flex-end' }
													>
														<Controls.SwitchWP
															checked={
																'yes' ===
																( null == _
																	? void 0
																	: _.certificate_enabled )
															}
															onChange={ function (
																e
															) {
																var t = {
																	certificate_enabled:
																		e
																			? 'yes'
																			: 'no',
																};
																( e &&
																	! _.certificate &&
																	( t.certificate =
																		hB[ 0 ].id ),
																	h.setSetupWizardData(
																		t
																	) );
															} }
														/>
													</Controls.FlexWP>
												</Controls.FlexItemWP>
											</Controls.FlexWP>
											{ 'yes' ===
												( null == _
													? void 0
													: _.certificate_enabled ) &&
												React.createElement(
													ine,
													null
												) }
										</Controls.FlexWP>
									</Controls.SpacerWP>
								</Controls.CardWP>
							</div>
						</div>
						<Controls.SpacerWP
							marginBottom={ 4 }
							marginTop={ 6 }
							paddingY={ 4 }
						>
							<Controls.FlexWP
								items={ 'center' }
								justify={ 'between' }
								gap={ 4 }
								style={ {
									maxWidth: '846px',
									justifyContent: 'space-between',
									margin: '0 auto',
								} }
							>
								<Controls.ButtonWP
									variant={ 'secondary' }
									onClick={ function () {
										'beginner' ===
										( null == _ ? void 0 : _.level )
											? f( 'wizard-niche' )
											: f( 'wizard-level-selection' );
									} }
									disabled={ R }
								>
									{ ( 0, I18n.__ )( 'Back', 'ohmylms' ) }
								</Controls.ButtonWP>
								<Controls.FlexWP
									items={ 'center' }
									justify={ 'end' }
									gap={ 6 }
								>
									<Controls.ButtonWP
										variant={ 'tertiary' }
										onClick={ M }
										disabled={ R }
									>
										{ ( 0, I18n.__ )(
											'Skip this step',
											'ohmylms'
										) }
									</Controls.ButtonWP>
									<Controls.ButtonWP
										variant={ 'primary' }
										onClick={ j }
										isBusy={ R }
									>
										{ ( 0, I18n.__ )(
											'Continue',
											'ohmylms'
										) }
									</Controls.ButtonWP>
								</Controls.FlexWP>
							</Controls.FlexWP>
						</Controls.SpacerWP>
					</Controls.ContainerWP>
				</React.Fragment>
			 )
		 );
	};
}
