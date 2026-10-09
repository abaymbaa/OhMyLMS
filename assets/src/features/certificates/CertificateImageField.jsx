/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCertificateImageField( readRuntime ) {
	return function CertificateImageField( props ) {
		const {
			I: Controls,
			M,
			Mt,
			React,
			V,
			b: I18n,
			g: ReactHooks,
			hu,
			jL,
		} = readRuntime();
		M().noConflict();
		var t = props.thumbnail,
			n = void 0 === t ? null : t,
			r = props.onChange,
			a = props.onRemove,
			o = props.title,
			i = void 0 === o ? ( 0, I18n.__ )( 'Thumbnail', 'ohmylms' ) : o,
			l = props.tooltip,
			c =
				void 0 === l
					? ( 0, I18n.__ )( 'Information about thumbnail', 'ohmylms' )
					: l,
			u = props.alertTitle,
			s =
				void 0 === u
					? ( 0, I18n.__ )( 'Remove the thumbnail', 'ohmylms' )
					: u,
			d = props.alertDescription,
			m =
				void 0 === d
					? ( 0, I18n.__ )(
							'Are you sure you want to remove the thumbnail?',
							'ohmylms'
						)
					: d,
			p = props.imgMaxWidth,
			f = void 0 === p ? '100%' : p,
			v = [ '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg' ],
			h = ( function ( e, t ) {
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
										! ( c = ( r = o.call( n ) ).done ) &&
										( l.push( r.value ), l.length !== t );
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
								return jL( e, t );
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
										? jL( e, t )
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
			} )( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			y =
				( h[ 0 ],
				h[ 1 ],
				function ( e ) {
					var t = wp.media( {
						title: 'Select or Upload Media',
						button: {
							text: 'Use this media',
						},
						multiple: ! 1,
					} );
					( t.on( 'select', function () {
						var n = t.state().get( 'selection' ).first().toJSON(),
							a = v.some( function ( e ) {
								return n.url.toLowerCase().endsWith( e );
							} ),
							o =
								( 'image' === e && 'image' === n.type ) ||
								( 'video' === e && 'video' === n.type );
						a && o
							? 'image' === e && r( n )
							: alert( 'Invalid file type or media type.' );
					} ),
						t.open() );
				} ),
			_ = {
				maxWidth: f,
				objectFit: 'contain',
			};
		return (
			<Controls.CardWP isBorderless={ ! 0 } variant={ 'secondary' }>
				<Controls.SpacerWP padding={ 3 }>
					<Controls.FlexWP
						direction={ 'column' }
						align={ 'flex-start' }
						justify={ 'flex-start' }
						gap={ 4 }
					>
						<Controls.FlexWP gap={ 'small' } align={ 'center' }>
							<Controls.HeadingWP level={ 4 }>
								{ i }
							</Controls.HeadingWP>
							{ c && (
								<V.A title={ c }>
									<React.Fragment>
										<Mt.A />
									</React.Fragment>
								</V.A>
							) }
						</Controls.FlexWP>
						{ n ? (
							<Controls.FlexItemWP
								isBlock={ ! 0 }
								style={ {
									position: 'relative',
									width: '100%',
								} }
							>
								<Controls.FlexWP
									direction={ 'column' }
									align={ 'center' }
									justify={ 'center' }
									gap={ 2 }
								>
									<img
										style={ _ }
										src={ n }
										alt={ ( 0, I18n.__ )(
											'Thumbnail',
											'ohmylms'
										) }
									/>
									{ React.createElement( hu, {
										handleEdit() {
											return y( 'image' );
										},
										handleDelete() {
											a();
										},
										alertTitle: s,
										alertDescription: m,
									} ) }
								</Controls.FlexWP>
							</Controls.FlexItemWP>
						) : (
							<Controls.FlexWP
								direction={ 'column' }
								align={ 'center' }
								justify={ 'center' }
								gap={ 2 }
								style={ {
									width: '100%',
								} }
							>
								<Controls.ButtonWP
									variant={ 'secondary' }
									onClick={ function () {
										return y( 'image' );
									} }
								>
									{ ( 0, I18n.__ )(
										'Select a file',
										'ohmylms'
									) }
								</Controls.ButtonWP>
								<p>
									{ ( 0, I18n.__ )(
										'Supported files: .png, .jpg, jpeg, .gif',
										'ohmylms'
									) }
								</p>
							</Controls.FlexWP>
						) }
					</Controls.FlexWP>
				</Controls.SpacerWP>
			</Controls.CardWP>
		);
	};
}
