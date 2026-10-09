/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCurrencySettings( readRuntime ) {
	return function CurrencySettings( props ) {
		const {
			I: Controls,
			Nm,
			Pf,
			R1,
			React,
			S1,
			T: StoreModule,
			_1,
			b: I18n,
			b1,
			g: ReactHooks,
			l,
			y: WordPressData,
			z: Notifications,
		} = readRuntime();
		props.formatData;
		var t,
			n,
			r,
			a,
			o,
			i,
			c,
			u,
			s,
			d,
			m = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getCurrencySettings();
			}, [] ),
			p = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			f = ( 0, Notifications.A )(),
			v = ( f.openNotificationWithIcon, f.contextHolder );
		function h( e ) {
			return e
				? Object.entries( e ).map( function ( e ) {
						var t = R1( e, 2 ),
							n = t[ 0 ],
							r = t[ 1 ];
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
					} )
				: [];
		}
		var _ = function ( e, t ) {
				p.updateCurrencySettings(
					( function ( e, t, n ) {
						return (
							( t = ( function ( e ) {
								var t = ( function ( e ) {
									if ( 'object' != b1( e ) || ! e ) {
										return e;
									}
									var t = e[ Symbol.toPrimitive ];
									if ( void 0 !== t ) {
										var n = t.call( e, 'string' );
										if ( 'object' != b1( n ) ) {
											return n;
										}
										throw new TypeError(
											'@@toPrimitive must return a primitive value.'
										);
									}
									return String( e );
								} )( e );
								return 'symbol' == b1( t ) ? t : t + '';
							} )( t ) ) in e
								? Object.defineProperty( e, t, {
										value: n,
										enumerable: ! 0,
										configurable: ! 0,
										writable: ! 0,
									} )
								: ( e[ t ] = n ),
							e
						 );
					} )( {}, e, {
						value: t,
					} )
				);
			},
			w = ( 0, ReactHooks.useCallback )(
				S1(
					_1().m( function e() {
						var t, n, r;
						return _1().w(
							function ( e ) {
								for (;;) {
									switch ( ( e.p = e.n ) ) {
										case 0:
											return (
												( e.p = 0 ),
												p.setLoadingSetting( ! 0 ),
												( e.n = 1 ),
												l()( {
													path: 'ohmylms/v1/settings/currency',
												} )
											 );
										case 1:
											( ( t = e.v ),
												p.setCurrencySettings( t ),
												( n = {} ),
												null == t ||
													t.forEach( function ( e ) {
														n[
															null == e
																? void 0
																: e.id
														] =
															null == e
																? void 0
																: e.value;
													} ),
												p.setGlobalDataViaKey(
													'currency_settings',
													n
												),
												p.setLoadingSetting( ! 1 ),
												( e.n = 3 ) );
											break;
										case 2:
											( ( e.p = 2 ),
												( r = e.v ),
												console.error(
													'Error fetching currency data:',
													r
												) );
										case 3:
											return (
												( e.p = 3 ),
												p.setLoadingSetting( ! 1 ),
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
				),
				[]
			),
			E = ( function () {
				var e = S1(
					_1().m( function e( t ) {
						var n, r, a, o;
						return _1().w( function ( e ) {
							for (;;) {
								if ( 0 === e.n ) {
									return (
										( r = Object.entries(
											null == m ||
												null ===
													( n =
														m.ohmylms_currency ) ||
												void 0 === n
												? void 0
												: n.options
										).map( function ( e ) {
											var t = R1( e, 2 ),
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
				w();
			}, [] ),
			(
				<React.Fragment>
					{ v }
					<Controls.CardWP isBorderless={ ! 0 }>
						<Controls.SpacerWP
							padding={ 2 }
							marginTop={ 2.5 }
							marginBottom={ 0 }
						>
							<Nm
								customClass={ 'currency-single-settings' }
								title={ ( 0, I18n.__ )(
									'Currency',
									'ohmylms'
								) }
								tooltip={ ( 0, I18n.__ )(
									"Select your preferred currency. It's listed with associated countries for easy selection",
									'ohmylms'
								) }
								placeholder={ ( 0, I18n.__ )(
									'Type to Select Currency',
									'ohmylms'
								) }
								data={ h(
									null == m ||
										null === ( t = m.ohmylms_currency ) ||
										void 0 === t
										? void 0
										: t.options
								) }
								notFoundMessage={ ( 0, I18n.__ )(
									'Nothing Found',
									'ohmylms'
								) }
								onChange={ function ( e ) {
									return _( 'ohmylms_currency', e.value );
								} }
								staticSearch={ ! 1 }
								value={ [
									{
										label: (
											<span
												dangerouslySetInnerHTML={ {
													__html:
														null == m ||
														null ===
															( n =
																m.ohmylms_currency ) ||
														void 0 === n
															? void 0
															: n.options[
																	null == m ||
																	null ===
																		( r =
																			m.ohmylms_currency ) ||
																	void 0 === r
																		? void 0
																		: r.value
																],
												} }
											/>
										),
										value:
											null == m ||
											null ===
												( a = m.ohmylms_currency ) ||
											void 0 === a
												? void 0
												: a.value,
									},
								] }
								defaultOptions={ h(
									null == m ||
										null === ( o = m.ohmylms_currency ) ||
										void 0 === o
										? void 0
										: o.options
								) }
								loadOptions={ E }
								isClearable={ ! 1 }
								isSearchable={ ! 0 }
								isMulti={ ! 1 }
								headerFontSize={ '16px' }
							/>
							<Nm
								className={ 'currency-single-settings' }
								title={ ( 0, I18n.__ )(
									'Currency Position',
									'ohmylms'
								) }
								tooltip={ ( 0, I18n.__ )(
									'Choose where the currency symbol appears relative to the price.',
									'ohmylms'
								) }
								placeholder={ ( 0, I18n.__ )(
									'Type to Select Position',
									'ohmylms'
								) }
								data={ h(
									null == m ||
										null ===
											( i = m.ohmylms_currency_pos ) ||
										void 0 === i
										? void 0
										: i.options
								) }
								notFoundMessage={ ( 0, I18n.__ )(
									'Nothing Found',
									'ohmylms'
								) }
								isMultiple={ ! 1 }
								onChange={ function ( e ) {
									return _( 'ohmylms_currency_pos', e );
								} }
								value={
									null == m ||
									null === ( c = m.ohmylms_currency_pos ) ||
									void 0 === c
										? void 0
										: c.value
								}
								staticSearch={ ! 0 }
								showSearch={ ! 1 }
								headerFontSize={ '16px' }
							/>
							<Pf
								title={ ( 0, I18n.__ )(
									'Thousand Separator',
									'ohmylms'
								) }
								tooltip={ ( 0, I18n.__ )(
									'This sets the thousands separator of displayed prices.',
									'ohmylms'
								) }
								inputType={ 'text' }
								placeholder={ ( 0, I18n.__ )(
									'Write Thousand Separator',
									'ohmylms'
								) }
								value={
									( null == m ||
									null ===
										( u = m.ohmylms_price_thousand_sep ) ||
									void 0 === u
										? void 0
										: u.value ) || ''
								}
								className={
									'currency-single-settings ohmylms-separator-input-card'
								}
								onChange={ function ( e ) {
									return _( 'ohmylms_price_thousand_sep', e );
								} }
								headerFontSize={ '16px' }
							/>
							<Pf
								title={ ( 0, I18n.__ )(
									'Decimal Separator',
									'ohmylms'
								) }
								placeholder={ ( 0, I18n.__ )(
									'Write Decimal Separator',
									'ohmylms'
								) }
								tooltip={ ( 0, I18n.__ )(
									'This sets the decimal separator of displayed prices.',
									'ohmylms'
								) }
								inputType={ 'text' }
								value={
									( null == m ||
									null ===
										( s = m.ohmylms_price_decimal_sep ) ||
									void 0 === s
										? void 0
										: s.value ) || ''
								}
								className={
									'currency-single-settings ohmylms-separator-input-card'
								}
								onChange={ function ( e ) {
									return _( 'ohmylms_price_decimal_sep', e );
								} }
								headerFontSize={ '16px' }
							/>
							<Pf
								title={ ( 0, I18n.__ )(
									'Number of Decimals',
									'ohmylms'
								) }
								tooltip={ ( 0, I18n.__ )(
									'This sets the number of decimal points shown in the displayed prices.',
									'ohmylms'
								) }
								className={ 'currency-single-settings' }
								placeholder={ '2' }
								inputType={ 'number' }
								showDivider={ ! 1 }
								value={
									( null == m ||
									null ===
										( d = m.ohmylms_price_num_decimals ) ||
									void 0 === d
										? void 0
										: d.value ) || ''
								}
								onChange={ function ( e ) {
									return _( 'ohmylms_price_num_decimals', e );
								} }
								spacerMarginBottom={ 0 }
								headerFontSize={ '16px' }
							/>
						</Controls.SpacerWP>
					</Controls.CardWP>
				</React.Fragment>
			 )
		 );
	};
}
