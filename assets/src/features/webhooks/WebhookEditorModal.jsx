/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createWebhookEditorModal( readRuntime ) {
	return function WebhookEditorModal( props ) {
		const {
			B5: MemoWebhookDataMapping,
			G5,
			I: Controls,
			M5: MemoWebhookDetails,
			Q5,
			React,
			T: StoreModule,
			V5,
			b: I18n,
			g: ReactHooks,
			q5,
			y: WordPressData,
			z: Notifications,
		} = readRuntime();
		var t = props.webhook,
			n = props.isOpen,
			r = props.onClose,
			a = props.onSave,
			o = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			i = ( 0, Notifications.A )(),
			l = i.openNotificationWithIcon,
			c = i.contextHolder,
			u = Q5( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			s = u[ 0 ],
			d = u[ 1 ],
			m = Q5( ( 0, ReactHooks.useState )( '1' ), 2 ),
			p = m[ 0 ],
			f = m[ 1 ],
			v = Q5( ( 0, ReactHooks.useState )( {} ), 2 ),
			h = v[ 0 ],
			_ = v[ 1 ],
			w = Q5( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			E = w[ 0 ];
		( w[ 1 ],
			( 0, ReactHooks.useEffect )(
				function () {
					if ( n ) {
						if ( t ) {
							var e = [
								{
									key: '',
									value: '',
								},
							];
							if ( t.data_mapping ) {
								if ( 'string' === typeof t.data_mapping ) {
									try {
										e = JSON.parse( t.data_mapping );
									} catch ( t ) {
										( console.error(
											'Failed to parse data_mapping:',
											t
										),
											( e = [
												{
													key: '',
													value: '',
												},
											] ) );
									}
								} else {
									Array.isArray( t.data_mapping ) &&
										( e = t.data_mapping );
								}
							}
							o.setWebhookFormData(
								q5(
									q5( {}, t ),
									{},
									{
										data_mapping: e,
									}
								)
							);
						} else {
							o.setWebhookFormData( {
								name: '',
								webhook_url: '',
								trigger_event: 'course_purchase',
								http_method: 'POST',
								data_type: 'json',
								status: 'active',
								description: '',
								headers: '',
								retry_attempts: 3,
								timeout: 30,
								data_mapping: [
									{
										key: 'User ID',
										value: 'user_id',
									},
								],
							} );
						}
					}
				},
				[ n, t, o ]
			) );
		var S = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).selectWebhookFormData();
			}, [] ),
			R = function ( e ) {
				var t,
					n,
					r = {};
				return (
					( null != e &&
						null !== ( t = e.name ) &&
						void 0 !== t &&
						t.trim() ) ||
						( r.name = ( 0, I18n.__ )(
							'Name is required.',
							'ohmylms'
						) ),
					null != e &&
					null !== ( n = e.webhook_url ) &&
					void 0 !== n &&
					n.trim()
						? /^https?:\/\/.+/.test( e.webhook_url ) ||
							( r.webhook_url = ( 0, I18n.__ )(
								'Please enter a valid URL.',
								'ohmylms'
							) )
						: ( r.webhook_url = ( 0, I18n.__ )(
								'Webhook URL is required.',
								'ohmylms'
							) ),
					( null != e && e.trigger_event ) ||
						( r.trigger_event = ( 0, I18n.__ )(
							'Trigger event is required.',
							'ohmylms'
						) ),
					r
				 );
			},
			x = function ( e ) {
				var t = {};
				return (
					null != e &&
						e.data_mapping &&
						e.data_mapping.length > 0 &&
						( e.data_mapping.filter( function ( e ) {
							return e.key && e.value;
						} ),
						e.data_mapping.some( function ( e ) {
							return ! (
								( ! e.key && ! e.value ) ||
								( e.key && e.value )
							);
						} ) &&
							( t.data_mapping = ( 0, I18n.__ )(
								'Please fill in all field mapping keys and values',
								'ohmylms'
							) ) ),
					t
				 );
			},
			C = function ( e ) {
				var t = R( e ),
					n = x( e ),
					r = q5( q5( {}, t ), n );
				return ( _( r ), 0 === Object.keys( r ).length );
			},
			P = function () {
				( r && 'function' === typeof r && r(),
					f( '1' ),
					_( {} ),
					o.clearWebhookFormData() );
			},
			O = ( function () {
				var e,
					n =
						( ( e = V5().m( function e() {
							var n, r, i;
							return V5().w(
								function ( e ) {
									for (;;) {
										switch ( ( e.p = e.n ) ) {
											case 0:
												if ( '1' !== p ) {
													e.n = 1;
													break;
												}
												return (
													( n = R( S ) ),
													_( n ),
													0 ===
														Object.keys( n )
															.length && f( '2' ),
													e.a( 2 )
												 );
											case 1:
												if ( s ) {
													e.n = 10;
													break;
												}
												if ( C( S ) ) {
													e.n = 2;
													break;
												}
												return e.a( 2 );
											case 2:
												if (
													( d( ! 0 ),
													( e.p = 3 ),
													( r = q5(
														q5( {}, S ),
														{},
														{
															data_mapping:
																JSON.stringify(
																	S.data_mapping
																),
														}
													) ),
													! t || ! t.id )
												) {
													e.n = 5;
													break;
												}
												return (
													( e.n = 4 ),
													o.updateWebhookById(
														t.id,
														r
													)
												 );
											case 4:
												( l(
													'success',
													( 0, I18n.__ )(
														'Webhook updated successfully!',
														'ohmylms'
													)
												),
													( e.n = 7 ) );
												break;
											case 5:
												return (
													( e.n = 6 ),
													o.createWebhook( r )
												 );
											case 6:
												l(
													'success',
													( 0, I18n.__ )(
														'Webhook created successfully!',
														'ohmylms'
													)
												);
											case 7:
												( a &&
													'function' === typeof a &&
													a( r ),
													P(),
													( e.n = 9 ) );
												break;
											case 8:
												( ( e.p = 8 ),
													( i = e.v ),
													console.error(
														'Error saving webhook:',
														i
													),
													l(
														'error',
														( 0, I18n.__ )(
															'Failed to save webhook. Please try again.',
															'ohmylms'
														)
													) );
											case 9:
												return (
													( e.p = 9 ),
													d( ! 1 ),
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
						} ) ),
						function () {
							var t = this,
								n = arguments;
							return new Promise( function ( r, a ) {
								var o = e.apply( t, n );
								function i( e ) {
									G5( o, r, a, i, l, 'next', e );
								}
								function l( e ) {
									G5( o, r, a, i, l, 'throw', e );
								}
								i( void 0 );
							} );
						} );
				return function () {
					return n.apply( this, arguments );
				};
			} )();
		( ( 0, ReactHooks.useEffect )( function () {
			return function () {
				o.clearWebhookFormData();
			};
		}, [] ),
			( 0, ReactHooks.useEffect )(
				function () {
					var e = ! 0;
					if ( e && S ) {
						if ( '1' === p ) {
							var t = R( S );
							_( t );
						} else {
							var n = x( S );
							_( n );
						}
					}
					return function () {
						e = ! 1;
					};
				},
				[ S, p ]
			) );
		var k = [
				{
					label: (
						<Controls.TextWP
							as={ 'span' }
							size={ '16' }
							weight={ '500' }
						>
							{ ( 0, I18n.__ )( 'Details', 'ohmylms' ) }
						</Controls.TextWP>
					),
					key: '1',
					children: (
						<Controls.CardWP isBorderless={ ! 0 }>
							<Controls.SpacerWP
								marginBottom={ 0 }
								padding={ 3 }
								marginTop={ 4 }
							>
								<MemoWebhookDetails
									errors={ h }
									setErrors={ _ }
									validate={ C }
								/>
							</Controls.SpacerWP>
						</Controls.CardWP>
					),
				},
				{
					label: (
						<Controls.TextWP
							as={ 'span' }
							size={ '16' }
							weight={ '500' }
						>
							{ ( 0, I18n.__ )( 'Data Mapping', 'ohmylms' ) }
						</Controls.TextWP>
					),
					key: '2',
					children: (
						<Controls.CardWP isBorderless={ ! 0 }>
							<Controls.SpacerWP
								marginBottom={ 0 }
								padding={ 3 }
								marginTop={ 4 }
							>
								<MemoWebhookDataMapping errors={ h } />
							</Controls.SpacerWP>
						</Controls.CardWP>
					),
				},
			],
			j = ( 0, ReactHooks.useMemo )( function () {
				return {
					width: '830px',
					background: '#F5F5F5',
				};
			}, [] ),
			A = ( 0, ReactHooks.useMemo )(
				function () {
					return R( S );
				},
				[ S ]
			),
			M =
				'1' === p
					? Object.keys( A ).length > 0
					: Object.keys( h ).length > 0;
		return (
			<React.Fragment>
				{ c }
				{ n && (
					<Controls.ModalWP
						title={
							null != t && t.id
								? ( 0, I18n.__ )( 'Edit Webhook', 'ohmylms' )
								: ( 0, I18n.__ )( 'Add Webhook', 'ohmylms' )
						}
						style={ j }
						onRequestClose={ P }
						shouldCloseOnEsc={ ! 0 }
						shouldCloseOnClickOutside={ ! 0 }
						className={ 'ohmylms-full-height-modal' }
						size={ 'large' }
					>
						{ E ? (
							<Controls.SkeletonWP rows={ 10 } />
						) : (
							<React.Fragment>
								<Controls.TabsWP
									items={ k }
									activekey={ p }
									onChange={ function () {} }
									className={
										'ohmylms-tab-has-custom-navigation'
									}
								/>
								<Controls.DividerWP marginStart={ 4 } />
								<Controls.SpacerWP marginTop={ 4 }>
									<Controls.FlexWP
										justify={ 'space-between' }
										align={ 'center' }
										gap={ 2 }
									>
										<div>
											{ '2' === p && (
												<Controls.ButtonWP
													variant={ 'secondary' }
													onClick={ function () {
														return f( '1' );
													} }
												>
													{ ( 0, I18n.__ )(
														'Back',
														'ohmylms'
													) }
												</Controls.ButtonWP>
											) }
										</div>
										<Controls.FlexWP
											justify={ 'flex-end' }
											align={ 'center' }
											gap={ 2 }
										>
											<Controls.ButtonWP
												variant={ 'secondary' }
												onClick={ P }
											>
												{ ( 0, I18n.__ )(
													'Cancel',
													'ohmylms'
												) }
											</Controls.ButtonWP>
											<Controls.ButtonWP
												variant={ 'primary' }
												onClick={ O }
												disabled={ M }
												isBusy={ s }
											>
												{ '1' === p
													? ( 0, I18n.__ )(
															'Next',
															'ohmylms'
														)
													: ( 0, I18n.__ )(
															'Save',
															'ohmylms'
														) }
											</Controls.ButtonWP>
										</Controls.FlexWP>
									</Controls.FlexWP>
								</Controls.SpacerWP>
							</React.Fragment>
						) }
					</Controls.ModalWP>
				) }
			</React.Fragment>
		);
	};
}
