/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createBadgeImageField( readRuntime ) {
	return function BadgeImageField( props ) {
		const {
			D2,
			FK,
			I: Controls,
			M,
			React,
			Tt,
			W2,
			b: I18n,
			g: ReactHooks,
			hu,
			z2,
		} = readRuntime();
		M().noConflict();
		var title = props.title,
			description = props.description,
			brandingImg = props.brandingImg,
			colorsConfig = props.colorsConfig,
			handleChange = props.handleChange,
			handleRemove = props.handleRemove,
			showDivider = props.showDivider,
			c = void 0 === showDivider || showDivider,
			alertTitle = props.alertTitle,
			s =
				void 0 === alertTitle
					? ( 0, I18n.__ )( 'Remove the branding logo', 'ohmylms' )
					: alertTitle,
			alertDescription = props.alertDescription,
			m =
				void 0 === alertDescription
					? ( 0, I18n.__ )(
							'Are you sure you want to remove the branding logo?',
							'ohmylms'
						)
					: alertDescription,
			maxWidth = props.maxWidth,
			f = void 0 === maxWidth ? 'unset' : maxWidth,
			v =
				( ( function ( e, t ) {
					if ( null == e ) {
						return {};
					}
					var n,
						r,
						a = ( function ( e, t ) {
							if ( null == e ) {
								return {};
							}
							var n = {};
							for ( var r in e ) {
								if ( {}.hasOwnProperty.call( e, r ) ) {
									if ( -1 !== t.indexOf( r ) ) {
										continue;
									}
									n[ r ] = e[ r ];
								}
							}
							return n;
						} )( e, t );
					if ( Object.getOwnPropertySymbols ) {
						var o = Object.getOwnPropertySymbols( e );
						for ( r = 0; r < o.length; r++ ) {
							( ( n = o[ r ] ),
								-1 === t.indexOf( n ) &&
									{}.propertyIsEnumerable.call( e, n ) &&
									( a[ n ] = e[ n ] ) );
						}
					}
				} )( props, D2 ),
				( function ( e, t ) {
					return (
						( function ( e ) {
							if ( Array.isArray( e ) ) {
								return e;
							}
						} )( e ) ||
						( function ( e, t ) {
							var n =
								null == e
									? null
									: ( 'undefined' !== typeof Symbol &&
											e[ Symbol.iterator ] ) ||
										e[ '@@iterator' ];
							if ( null != n ) {
								var r,
									a,
									o,
									i,
									l = [],
									c = ! 0,
									u = ! 1;
								try {
									if (
										( ( o = ( n = n.call( e ) ).next ),
										0 === t )
									) {
										if ( Object( n ) !== n ) {
											return;
										}
										c = ! 1;
									} else {
										for (
											;
											! ( c = ( r = o.call( n ) )
												.done ) &&
											( l.push( r.value ),
											l.length !== t );
											c = ! 0
										) {}
									}
								} catch ( e ) {
									( ( u = ! 0 ), ( a = e ) );
								} finally {
									try {
										if (
											! c &&
											null != n.return &&
											( ( i = n.return() ),
											Object( i ) !== i )
										) {
											return;
										}
									} finally {
										if ( u ) {
											throw a;
										}
									}
								}
								return l;
							}
						} )( e, t ) ||
						( function ( e, t ) {
							if ( e ) {
								if ( 'string' === typeof e ) {
									return z2( e, t );
								}
								var n = {}.toString.call( e ).slice( 8, -1 );
								return (
									'Object' === n &&
										e.constructor &&
										( n = e.constructor.name ),
									'Map' === n || 'Set' === n
										? Array.from( e )
										: 'Arguments' === n ||
											  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
													n
											  )
											? z2( e, t )
											: void 0
								 );
							}
						} )( e, t ) ||
						( function () {
							throw new TypeError(
								'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
							);
						} )()
					);
				} )( ( 0, ReactHooks.useState )( null ), 2 ) ),
			h = ( v[ 0 ], v[ 1 ] ),
			y = [ '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg' ],
			_ = function ( e ) {
				var t = wp.media( {
					title: 'Select or Upload Media',
					button: {
						text: 'Use this media',
					},
					multiple: ! 1,
				} );
				( t.on( 'select', function () {
					var n = t.state().get( 'selection' ).first().toJSON(),
						r = y.some( function ( e ) {
							return n.url.toLowerCase().endsWith( e );
						} ),
						a =
							( 'image' === e && 'image' === n.type ) ||
							( 'video' === e && 'video' === n.type );
					r && a
						? 'image' === e &&
							( handleChange( n.url, null == n ? void 0 : n.id ),
							h( n.url ) )
						: alert( 'Invalid file type or media type.' );
				} ),
					t.open() );
			};
		return (
			<React.Fragment>
				<Controls.FlexWP
					justify={ 'space-between' }
					align={ 'start' }
					gap={ '4' }
				>
					{ ( title || description ) && (
						<Controls.FlexItemWP
							style={ {
								maxWidth: '300px',
							} }
						>
							<Controls.SpacerWP marginY={ 5 }>
								{ title && (
									<Controls.HeadingWP level={ '4' }>
										{ title }
									</Controls.HeadingWP>
								) }
								{ description && (
									<Controls.TextWP>
										{ description }
									</Controls.TextWP>
								) }
							</Controls.SpacerWP>
						</Controls.FlexItemWP>
					) }
					<Controls.FlexItemWP
						style={ {
							maxWidth: f,
						} }
						isBlock={ ! 0 }
					>
						<Controls.FlexWP direction={ 'column' } gap={ '4' }>
							<Controls.CardWP>
								<Controls.SpacerWP padding={ '4' }>
									{ Boolean( brandingImg ) ? (
										<Controls.FlexWP
											direction={ 'column' }
											gap={ '2' }
											align={ 'center' }
										>
											<Controls.AvatarWP
												shape={ 'square' }
												src={ brandingImg }
												alt={ 'logo' }
												style={ {
													height: 'auto',
												} }
											/>
											{ React.createElement( hu, {
												handleEdit() {
													return _( 'image' );
												},
												handleDelete: handleRemove,
												alertTitle: s,
												alertDescription: m,
											} ) }
										</Controls.FlexWP>
									) : (
										<Controls.FlexWP
											direction={ 'column' }
											gap={ '2' }
											align={ 'center' }
											justify={ 'center' }
										>
											<Controls.ButtonWP
												variant={ 'secondary' }
												onClick={ function () {
													return _( 'image' );
												} }
											>
												{ ( 0, I18n.__ )(
													'Select a file',
													'ohmylms'
												) }
											</Controls.ButtonWP>
											<Controls.TextWP
												variant={ 'muted' }
												size={ 'small' }
											>
												{ ( 0, I18n.__ )(
													'Size: 100x36 pixels, Max height: 50px',
													'ohmylms'
												) }
											</Controls.TextWP>
										</Controls.FlexWP>
									) }
								</Controls.SpacerWP>
							</Controls.CardWP>
							{ colorsConfig &&
								colorsConfig.map( function ( e, t ) {
									return (
										<FK
											{ ...W2(
												{
													key: t,
													format: 'hex',
												},
												e
											) }
										/>
									);
								} ) }
						</Controls.FlexWP>
					</Controls.FlexItemWP>
				</Controls.FlexWP>
				{ c && <Tt.A /> }
			</React.Fragment>
		);
	};
}
