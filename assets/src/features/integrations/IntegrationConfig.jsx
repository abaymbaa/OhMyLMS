/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
import { MCPSettings } from '../settings/MCPSettings';
export function createIntegrationConfig( readRuntime ) {
	return function IntegrationConfig( props ) {
		const {
			I: Controls,
			Nr,
			O7,
			P7,
			React,
			b: I18n,
			g: ReactHooks,
			j7: IntegrationSettings,
			k7,
		} = readRuntime();
		var t = props.integration,
			n = props.onSave,
			r = props.onCancel,
			a = ( function ( e, t ) {
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
								return k7( e, t );
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
										? k7( e, t )
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
			} )( ( 0, ReactHooks.useState )( t.settings || {} ), 2 ),
			o = a[ 0 ],
			i = a[ 1 ],
			l = IntegrationSettings[ t.key ];
		return (
			<React.Fragment>
				<Nr onClick={ r } />
				<Controls.SpacerWP marginBottom={ 5 } />
				<Controls.FlexWP gap={ 3 } justify={ 'flex-start' }>
					{ t.icon && (
						<img
							src={ t.icon }
							alt={ t.label }
							style={ {
								width: 50,
								height: 50,
								borderRadius: '4px',
								background: '#fff',
								border: '1px solid #eee',
								objectFit: 'contain',
								padding: '4px',
							} }
						/>
					) }
					<Controls.HeadingWP
						level={ 3 }
						size={ 20 }
						weight={ 500 }
						color={ '#000D25' }
					>
						{ ( 0, I18n.__ )( t.label, 'ohmylms' ) }
					</Controls.HeadingWP>
				</Controls.FlexWP>
				<Controls.SpacerWP marginBottom={ 2 } />
				<Controls.TextWP size={ 14 } variant={ 'muted' }>
					{ t.description }
				</Controls.TextWP>
				{ t.key === 'mcp' ? (
					<MCPSettings />
				) : l ? (
					React.createElement( l, {
						settings: o,
						onChange( e, t ) {
							i( P7( P7( {}, o ), {}, O7( {}, e, t ) ) );
						},
						onSave: n,
						onCancel: r,
					} )
				) : (
					<Controls.TextWP>
						{ ( 0, I18n.__ )(
							'No settings available for this integration.',
							'ohmylms'
						) }
					</Controls.TextWP>
				) }
			</React.Fragment>
		);
	};
}
