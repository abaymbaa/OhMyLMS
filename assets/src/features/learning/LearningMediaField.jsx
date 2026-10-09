/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createLearningMediaField( readRuntime ) {
	return function LearningMediaField( props ) {
		const {
			He,
			I: Controls,
			L: Entitlements,
			M,
			Re,
			React,
			Sr,
			T: StoreModule,
			_r,
			ar,
			b: I18n,
			dr,
			g: ReactHooks,
			gr,
			pe,
			ve,
			wr,
			y: WordPressData,
		} = readRuntime();
		var t = true;
		M().noConflict();
		var limit = props.limit,
			r = void 0 === limit ? 1 : limit,
			a = props.src,
			o = void 0 === a ? '' : a,
			videoSrc = props.videoSrc,
			l = void 0 === videoSrc ? '' : videoSrc,
			audioSrc = props.audioSrc,
			u = void 0 === audioSrc ? '' : audioSrc,
			type = props.type,
			d = void 0 === type ? 'both' : type,
			supportedTypes = props.supportedTypes,
			p =
				void 0 === supportedTypes
					? [ '.jpg', '.jpeg', '.png', '.mp4', '.mov', '.webp' ]
					: supportedTypes,
			onUploadComplete = props.onUploadComplete,
			onRemoveMedia = props.onRemoveMedia,
			align = props.align,
			_ = void 0 === align ? 'left' : align,
			fileType = props.fileType,
			E = void 0 === fileType ? 'image_video' : fileType,
			addImgText = props.addImgText,
			R =
				void 0 === addImgText
					? ( 0, I18n.__ )( 'Add Cover Image', 'ohmylms' )
					: addImgText,
			x =
				( void 0 === props.addVideoText &&
					( 0, I18n.__ )( 'Add Cover Video', 'ohmylms' ),
				props.mediaId ),
			onExternalUploadComplete = props.onExternalUploadComplete,
			P =
				void 0 === onExternalUploadComplete
					? function () {}
					: onExternalUploadComplete,
			O = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			k = Sr( ( 0, ReactHooks.useState )( null ), 2 ),
			j = k[ 0 ],
			A = k[ 1 ],
			F = Sr( ( 0, ReactHooks.useState )( null ), 2 ),
			N = F[ 0 ],
			D = F[ 1 ],
			W = Sr( ( 0, ReactHooks.useState )( null ), 2 ),
			z = W[ 0 ],
			B = W[ 1 ],
			V = Sr( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			H = V[ 0 ],
			U = V[ 1 ],
			q = Sr( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			Y = q[ 0 ],
			Q = q[ 1 ],
			Z = Sr( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			$ = Z[ 0 ],
			K = Z[ 1 ],
			J = Sr( ( 0, ReactHooks.useState )( null ), 2 ),
			X = J[ 0 ],
			ee = J[ 1 ],
			te = Sr( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			ne = te[ 0 ],
			re = te[ 1 ],
			ae = ( 0, ReactHooks.useRef )( null ),
			oe = Sr( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			ie = oe[ 0 ],
			le = oe[ 1 ],
			ce = Sr( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			ue = ce[ 0 ],
			se = ce[ 1 ],
			me = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getAllIntegrations();
			}, [] );
		( ( 0, ReactHooks.useEffect )(
			function () {
				o && ( A( o ), x || U( ! 0 ) );
			},
			[ o ]
		),
			( 0, ReactHooks.useEffect )(
				function () {
					l && ! $ && ( D( l ), K( ! 1 ), x || U( ! 0 ) );
				},
				[ l ]
			),
			( 0, ReactHooks.useEffect )(
				function () {
					u && ! $ && ( B( u ), K( ! 1 ), x || U( ! 0 ) );
				},
				[ u ]
			) );
		var fe = function ( e ) {
				var t = [ 'jpg', 'jpeg', 'png', 'gif', 'svg', 'webp' ],
					n = [ 'mp4', 'mov', 'avi', 'mkv' ],
					a = [ 'mp3', 'wav', 'aac', 'flac', 'm4a', 'ogg', 'mpeg' ],
					o = [
						'image/jpeg',
						'image/png',
						'image/gif',
						'image/svg+xml',
						'image/webp',
					].join( ',' ),
					i = [
						'video/mp4',
						'video/quicktime',
						'video/x-msvideo',
						'video/x-matroska',
					].join( ',' ),
					l = [
						'audio/mp3',
						'audio/aac',
						'audio/flac',
						'audio/m4a',
						'audio/mpeg',
						'audio/wav',
						'audio/ogg',
					].join( ',' ),
					c = wp.media( {
						title: 'Select or Upload Media',
						button: {
							text: 'Use this media',
						},
						multiple: r > 1,
						library: {
							type: e,
						},
					} );
				( c.on( 'open', function () {
					( c.content.mode( 'upload' ),
						c.on( 'uploader:ready', function () {
							document
								.querySelectorAll(
									'.moxie-shim-html5 input[type="file"]'
								)
								.forEach( function ( t ) {
									( t.setAttribute( 'tabIndex', '-1' ),
										t.setAttribute( 'multiple', 'false' ),
										t.setAttribute( 'aria-hidden', 'true' ),
										'video' === e
											? t.setAttribute( 'accept', i )
											: 'audio' === e
												? t.setAttribute( 'accept', l )
												: t.setAttribute(
														'accept',
														o
													) );
								} );
						} ) );
				} ),
					c.on( 'select', function () {
						var r = c.state().get( 'selection' ).first(),
							o = r.get( 'filesizeInBytes' ),
							i = r.toJSON(),
							l = t.some( function ( e ) {
								return i.url.toLowerCase().endsWith( e );
							} );
						( 'video' === e &&
							( l = n.some( function ( e ) {
								return i.url.toLowerCase().endsWith( e );
							} ) ),
							'audio' === e &&
								( l = a.some( function ( e ) {
									return i.url.toLowerCase().endsWith( e );
								} ) ) );
						var u =
							( 'image' === e && 'image' === i.type ) ||
							( 'video' === e && 'video' === i.type ) ||
							( 'audio' === e && 'audio' === i.type ) ||
							i.type === e;
						if ( 'image' === e && o > 5242880 ) {
							alert(
								( 0, I18n.__ )(
									'Image exceeds the 5MB size limit. Please choose a smaller file.',
									'ohmylms'
								)
							);
						} else if ( l && u ) {
							var s;
							( 'image' === e
								? A(
										null == i ||
											null === ( s = i.sizes ) ||
											void 0 === s ||
											null === ( s = s.large ) ||
											void 0 === s
											? void 0
											: s.url
									)
								: 'video' === e
									? ( D( null == i ? void 0 : i.url ),
										K( ! 1 ) )
									: 'audio' === e &&
										( B( null == i ? void 0 : i.url ),
										K( ! 1 ) ),
								onUploadComplete && onUploadComplete( i, e ) );
						} else {
							alert( 'Invalid file type or media type.' );
						}
					} ),
					c.open() );
			},
			ge = function () {
				( A( null ), onRemoveMedia && onRemoveMedia( 'image' ) );
			},
			he = function () {
				( D( null ),
					Q( ! 1 ),
					U( ! 1 ),
					K( ! 0 ),
					onRemoveMedia && onRemoveMedia( 'video' ) );
			},
			ye = function () {
				( B( null ),
					U( ! 1 ),
					K( ! 0 ),
					onRemoveMedia && onRemoveMedia( 'audio' ) );
			},
			be = function ( e, t, n ) {
				( P( e, t ),
					U( ! n ),
					Q( ! 1 ),
					'audio' === t
						? ( B( null == e ? void 0 : e.url ), K( ! 1 ) )
						: ( D( null == e ? void 0 : e.url ), K( ! 1 ) ) );
			},
			_e = function ( e ) {
				H ? Q( ! 0 ) : fe( e );
			},
			we = function ( e ) {
				( onUploadComplete(
					{
						id: null == e ? void 0 : e.id,
						url: null == e ? void 0 : e.source_url,
					},
					'image'
				),
					ee( null ),
					le( ! 1 ) );
			},
			Ee = function ( e ) {
				ee( e );
			};
		return (
			( 0, ReactHooks.useEffect )(
				function () {
					var e = function ( e ) {
						! ie ||
							! ae.current ||
							ae.current.contains( e.target ) ||
							e.target.closest( '.ohmylms-history-list' ) ||
							e.target.closest( '.ohmylms-tooltip-box' ) ||
							e.target.closest( '.ohmylms-ai-image-prompt' ) ||
							( le( ! 1 ), Ee( null ) );
					};
					return (
						document.addEventListener( 'mousedown', e ),
						function () {
							document.removeEventListener( 'mousedown', e );
						}
					 );
				},
				[ ie ]
			),
			(
				<React.Fragment>
					<div
						className={ 'ohmylms-media-uploader '.concat(
							j || N || z ? 'ohmylms-has-media' : ''
						) }
					>
						<div
							className={ 'ohmylms-media-contents '.concat( E ) }
							style={ {
								position: 'relative',
								maxHeight: '350px',
								overflow: 'hidden',
								borderRadius: '8px',
							} }
							onMouseEnter={ function () {
								return re( ! 0 );
							} }
							onMouseLeave={ function () {
								return re( ! 1 );
							} }
						>
							{ Boolean( X || j ) &&
								! Boolean( N ) &&
								'image_video' === E && (
									<React.Fragment>
										<img
											src={ null != X ? X : j }
											alt={ 'Uploaded cover' }
											style={ {
												maxWidth: '100%',
											} }
										/>
									</React.Fragment>
								) }
							{ Boolean( N ) && 'image_video' === E && (
								<video
									src={ N }
									alt={ 'Uploaded cover' }
									poster={ j || '' }
									controls={ ! 0 }
									style={ {
										maxWidth: '100%',
									} }
								/>
							) }
							{ 'video' === E && (
								<React.Fragment>
									{ Boolean( N ) && ! Y ? (
										H ? (
											<_r
												mediaUrl={ N }
												sectionType={ 'video' }
												className={
													'ohmylms-external-video'
												}
												setMediaURL={ D }
												handleExternalMedia={ be }
												setIsExternalMedia={ U }
											/>
										) : (
											<video
												src={ N }
												alt={ 'Uploaded cover' }
												poster={ j || '' }
												controls={ ! 0 }
												style={ {
													maxWidth: '100%',
												} }
											/>
										)
									) : (
										<React.Fragment>
											{ React.createElement( dr, {
												type: 'video',
												onClick: fe,
												buttonLabel: ( 0, I18n.__ )(
													'Select a video',
													'ohmylms'
												),
												icon: React.createElement(
													pe,
													null
												),
												supportedTypes: [
													'.mp4',
													'.mov',
													'.avi',
													'.mkv',
													'.flv',
													'.wmv',
													'.webm',
												],
												handleExternalMedia: be,
												setShowInput: Q,
												showInput: Y,
												value: N,
											} ) }
										</React.Fragment>
									) }
								</React.Fragment>
							) }
							{ 'audio' === E && (
								<React.Fragment>
									{ Boolean( z ) && ! Y ? (
										H ? (
											<div
												className={
													'ohmylms-media-audio-wrapper'
												}
											>
												<_r
													mediaUrl={ z }
													sectionType={ 'audio' }
													setMediaURL={ B }
													handleExternalMedia={ be }
													setIsExternalMedia={ U }
												/>
												<Controls.FlexWP
													gap={ 4 }
													align={ 'center' }
													justify={ 'flex-end' }
													className={
														'crlsm-media-controls-audio'
													}
												>
													<Controls.ButtonWP
														variant={ 'primary' }
														icon={ <Re /> }
														onClick={ function () {
															return _e(
																'audio'
															);
														} }
													>
														{ ( 0, I18n.__ )(
															'Replace',
															'ohmylms'
														) }
													</Controls.ButtonWP>
													{ React.createElement( gr, {
														onOK: ye,
														alertTitle: ( 0,
														I18n.__ )(
															'Remove the audio',
															'ohmylms'
														),
														alertDescription: ( 0,
														I18n.__ )(
															'Are you sure you want to remove this audio?',
															'ohmylms'
														),
														modalPosition: 'top',
													} ) }
												</Controls.FlexWP>
											</div>
										) : (
											<div
												className={
													'ohmylms-media-audio-wrapper'
												}
											>
												<audio
													src={ z }
													controls={ ! 0 }
												/>
												<Controls.FlexWP
													gap={ 4 }
													align={ 'center' }
													justify={ 'flex-end' }
												>
													<Controls.ButtonWP
														variant={ 'primary' }
														icon={ <Re /> }
														onClick={ function () {
															return _e(
																'audio'
															);
														} }
													>
														{ ( 0, I18n.__ )(
															'Replace',
															'ohmylms'
														) }
													</Controls.ButtonWP>
													{ React.createElement( gr, {
														onOK: ye,
														alertTitle: ( 0,
														I18n.__ )(
															'Remove the audio',
															'ohmylms'
														),
														alertDescription: ( 0,
														I18n.__ )(
															'Are you sure you want to remove this audio?',
															'ohmylms'
														),
													} ) }
												</Controls.FlexWP>
											</div>
										)
									) : (
										<React.Fragment>
											{ React.createElement( dr, {
												type: 'audio',
												onClick: fe,
												buttonLabel: ( 0, I18n.__ )(
													'Select an audio',
													'ohmylms'
												),
												icon: React.createElement(
													ve,
													null
												),
												supportedTypes: p,
												handleExternalMedia: be,
												setShowInput: Q,
												showInput: Y,
												value: z,
											} ) }
										</React.Fragment>
									) }
								</React.Fragment>
							) }
							<Controls.FlexWP
								align={ 'center' }
								justify={ 'flex-end' }
								gap={ 4 }
								className={ 'crlsm-media-controls' }
								style={ {
									position: 'absolute',
									bottom: '50%',
									right: '30%',
									opacity: ne && ! X ? '1' : '0',
									visibility:
										ne && ! X ? 'visible' : 'hidden',
									transition: 'opacity 0.3s ease-in-out',
									width: 'auto',
								} }
							>
								{ Boolean( j ) && ! Boolean( N ) && (
									<React.Fragment>
										<Controls.ButtonWP
											variant={ 'primary' }
											icon={ <Re /> }
											onClick={ function () {
												return fe( 'image' );
											} }
										>
											{ ( 0, I18n.__ )(
												'Replace',
												'ohmylms'
											) }
										</Controls.ButtonWP>
										{ React.createElement( gr, {
											onOK: ge,
											alertTitle: ( 0, I18n.__ )(
												'Remove the image',
												'ohmylms'
											),
											alertDescription: ( 0, I18n.__ )(
												'Are you sure you want to remove this image?',
												'ohmylms'
											),
										} ) }
									</React.Fragment>
								) }
								{ Boolean( N ) && Boolean( j ) && (
									<React.Fragment>
										{ React.createElement( gr, {
											buttonText: ( 0, I18n.__ )(
												'Delete Video',
												'ohmylms'
											),
											onOK: he,
											alertTitle: ( 0, I18n.__ )(
												'Remove the video',
												'ohmylms'
											),
											alertDescription: ( 0, I18n.__ )(
												'Are you sure you want to remove this video?',
												'ohmylms'
											),
										} ) }
										{ React.createElement( gr, {
											buttonText: ( 0, I18n.__ )(
												'Delete Image',
												'ohmylms'
											),
											onOK: ge,
											alertTitle: ( 0, I18n.__ )(
												'Remove the image',
												'ohmylms'
											),
											alertDescription: ( 0, I18n.__ )(
												'Are you sure you want to remove this image?',
												'ohmylms'
											),
										} ) }
									</React.Fragment>
								) }
								{ ! Boolean( j ) && Boolean( N ) && ! Y && (
									<React.Fragment>
										<Controls.ButtonWP
											variant={ 'primary' }
											icon={ <Re /> }
											onClick={ function () {
												return _e( 'video' );
											} }
										>
											{ ( 0, I18n.__ )(
												'Replace',
												'ohmylms'
											) }
										</Controls.ButtonWP>
										{ React.createElement( gr, {
											onOK: he,
											alertTitle: ( 0, I18n.__ )(
												'Remove the video',
												'ohmylms'
											),
											alertDescription: ( 0, I18n.__ )(
												'Are you sure you want to remove this video?',
												'ohmylms'
											),
										} ) }
									</React.Fragment>
								) }
							</Controls.FlexWP>
						</div>
						<Controls.SpacerWP marginBottom={ 4 } />
						<Controls.FlexWP
							align={ 'center' }
							justify={
								'center' === _
									? 'center'
									: 'right' === _
										? 'flex-end'
										: 'flex-start'
							}
							gap={ 0 }
							className={ 'ohmylms-media-uploader-buttons '.concat(
								j || N ? 'ohmylms-has-media' : ''
							) }
						>
							<Controls.FlexWP
								gap={ 2 }
								justify={ 'flex-start' }
								style={ {
									position: 'relative',
								} }
							>
								{ ( 'image' === d || 'both' === d ) &&
									! Boolean( j ) &&
									'image_video' === E && (
										<React.Fragment>
											<Controls.ButtonWP
												variant={ 'secondary' }
												icon={ React.createElement(
													ar,
													null
												) }
												className={
													'ohmylms-media-uploader-button'
												}
												onClick={ function () {
													return fe( 'image' );
												} }
											>
												{ R }
											</Controls.ButtonWP>
										</React.Fragment>
									) }
							</Controls.FlexWP>
						</Controls.FlexWP>
					</div>
					{ ue && (
						<React.Fragment>
							<He.default isOpen={ ue } onClose={ se } />
						</React.Fragment>
					) }
				</React.Fragment>
			 )
		 );
	};
}
