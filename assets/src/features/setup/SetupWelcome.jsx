/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createSetupWelcome( readRuntime ) {
	return function SetupWelcome( props ) {
		const {
			I: Controls,
			React,
			T: StoreModule,
			Wte,
			Yte,
			b: I18n,
			g: ReactHooks,
			qte,
			y: WordPressData,
		} = readRuntime();
		var t = props.onTabChange,
			n =
				( props.onWizardSkip,
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
									return qte( e, t );
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
											? qte( e, t )
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
				} )( ( 0, ReactHooks.useState )( ! 1 ), 2 ) ),
			r = n[ 0 ],
			a = n[ 1 ],
			o = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			i = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getSetupWizardData();
			}, [] );
		return (
			<React.Fragment>
				<Controls.ContainerWP>
					<Controls.SpacerWP marginBottom={ 0 } paddingY={ 12 }>
						<Controls.FlexWP
							items={ 'center' }
							justify={ 'center' }
						>
							<Wte />
						</Controls.FlexWP>
						<Controls.SpacerWP marginBottom={ 0 } marginTop={ 19 }>
							<Controls.FlexWP
								direction={ 'column' }
								items={ 'center' }
								justify={ 'center' }
								gap={ 4 }
							>
								<Controls.HeadingWP
									as={ 'h1' }
									align={ 'center' }
									size={ '24' }
									weight={ '600' }
								>
									{ '👋   ' }
									{ ( 0, I18n.__ )(
										'Welcome to OhMyLMS!',
										'ohmylms'
									) }
								</Controls.HeadingWP>
								<Controls.TextWP
									as={ 'p' }
									align={ 'center' }
									size={ '18' }
									weight={ '400' }
									color={ '#687784' }
									style={ {
										maxWidth: '500px',
										margin: '0 auto',
									} }
								>
									{ ( 0, I18n.__ )(
										"Let's personalize your journey so we can set everything up perfectly for you. 🎯",
										'ohmylms'
									) }
								</Controls.TextWP>
							</Controls.FlexWP>
						</Controls.SpacerWP>
						<Controls.SpacerWP
							align={ 'center' }
							className={
								'ohmylms-setup-wizard-welcome-image-wrapper'
							}
						>
							<Controls.FlexWP
								items={ 'center' }
								justify={ 'center' }
								className={
									'ohmylms-setup-wizard-welcome-image-flex'
								}
							>
								<img
									src={ Yte + 'setup-wizard-img.webp' }
									alt={ ( 0, I18n.__ )(
										'Setup Wizard',
										'ohmylms'
									) }
									style={ {
										maxWidth: '460px',
										display: 'block',
									} }
								/>
							</Controls.FlexWP>
						</Controls.SpacerWP>
						<Controls.FlexWP
							items={ 'center' }
							justify={ 'center' }
							gap={ 3 }
						>
							<Controls.ButtonWP
								variant={ 'secondary' }
								onClick={ function () {
									a( ! 0 );
								} }
							>
								<svg
									xmlns={ 'http://www.w3.org/2000/svg' }
									width={ '16' }
									height={ '16' }
									viewBox={ '0 0 16 16' }
									fill={ 'none' }
								>
									<path
										d={
											'M4 2.66661V13.3333C3.99997 13.4519 4.03158 13.5684 4.09159 13.6707C4.15159 13.773 4.23781 13.8575 4.34135 13.9154C4.44489 13.9733 4.562 14.0025 4.68059 14C4.79918 13.9975 4.91497 13.9634 5.016 13.9013L13.6827 8.56794C13.7797 8.5083 13.8599 8.42477 13.9155 8.32534C13.9711 8.2259 14.0003 8.11387 14.0003 7.99994C14.0003 7.88602 13.9711 7.77399 13.9155 7.67455C13.8599 7.57512 13.7797 7.49159 13.6827 7.43194L5.016 2.09861C4.91497 2.03645 4.79918 2.00238 4.68059 1.9999C4.562 1.99742 4.44489 2.02663 4.34135 2.08452C4.23781 2.1424 4.15159 2.22686 4.09159 2.32919C4.03158 2.43151 3.99997 2.54799 4 2.66661Z'
										}
										fill={ '#444D5E' }
									/>
								</svg>
								<span
									style={ {
										marginLeft: '8px',
										color: '#444D5E',
									} }
								>
									{ ( 0, I18n.__ )(
										'Watch 60s overview',
										'ohmylms'
									) }
								</span>
							</Controls.ButtonWP>
							<Controls.ButtonWP
								variant={ 'primary' }
								onClick={ function () {
									t( 'wizard-level-selection' );
								} }
							>
								{ ( 0, I18n.__ )( "Let's Start", 'ohmylms' ) }
							</Controls.ButtonWP>
						</Controls.FlexWP>
						<Controls.SpacerWP marginBottom={ 0 } marginTop={ 10 }>
							<Controls.FlexWP
								align={ 'center' }
								justify={ 'center' }
								direction={ 'column' }
								gap={ 8 }
							>
								<Controls.CheckboxWP
									value={ i.isOptEnabled }
									onChange={ function ( e ) {
										o.setSetupWizardData( {
											isOptEnabled: e,
										} );
									} }
									label={ ( 0, I18n.__ )(
										'Send me tips to build my OhMyLMS faster',
										'ohmylms'
									) }
									checked={ i.isOptEnabled }
									className={
										'ohmylms-setup-wizard-optin-checkbox'
									}
								/>
								<Controls.TextWP
									as={ 'p' }
									align={ 'center' }
									size={ '12' }
									weight={ '400' }
									color={ '#687784' }
								>
									{ ( 0, I18n.__ )(
										"We'll only send helpful guidance. No promotions, no noise — unsubscribe anytime.",
										'ohmylms'
									) }
								</Controls.TextWP>
							</Controls.FlexWP>
						</Controls.SpacerWP>
					</Controls.SpacerWP>
				</Controls.ContainerWP>
				{ r && (
					<Controls.ModalWP
						isOpen={ r }
						onRequestClose={ function () {
							a( ! 1 );
						} }
						maxWidth={ '900px' }
						shouldCloseOnEsc={ ! 0 }
						shouldCloseOnClickOutside={ ! 0 }
						size={ 'fill' }
						style={ {
							maxWidth: '790px',
							background: '#FFFFFF',
						} }
					>
						<div
							style={ {
								width: '100%',
								aspectRatio: '16/9',
							} }
						>
							<iframe
								width={ '100%' }
								height={ '100%' }
								src={
									'https://www.youtube.com/embed/ENT4kK88gNs?autoplay=1'
								}
								title={ 'YouTube video player' }
								frameBorder={ '0' }
								allow={
									'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								}
								allowFullScreen={ ! 0 }
								style={ {
									borderRadius: '8px',
								} }
							/>
						</div>
					</Controls.ModalWP>
				) }
			</React.Fragment>
		);
	};
}
