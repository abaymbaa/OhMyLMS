/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCourseImportDialog( readRuntime ) {
	return function CourseImportDialog( props ) {
		const {
			DG,
			I: Controls,
			React,
			WG,
			b: I18n,
			g: ReactHooks,
			zG,
		} = readRuntime();
		var t = props.isOpen,
			n = props.onClose,
			r = props.onAction,
			a = ( props.modalPosition, props.cancelBtnText ),
			o = void 0 === a ? ( 0, I18n.__ )( 'Cancel', 'ohmylms' ) : a,
			i = props.actionBtnText,
			l = void 0 === i ? ( 0, I18n.__ )( 'Import', 'ohmylms' ) : i,
			c = props.loading,
			u = void 0 !== c && c,
			s = props.supportScorm,
			d = void 0 !== s && s,
			m = props.jsonImportEnabled,
			p = void 0 === m || m,
			f = ( function ( e, t ) {
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
				return a;
			} )( props, DG ),
			v = zG( ( 0, ReactHooks.useState )( null ), 2 ),
			y = v[ 0 ],
			_ = v[ 1 ],
			w = zG( ( 0, ReactHooks.useState )( '' ), 2 ),
			E = w[ 0 ],
			S = w[ 1 ],
			R = zG( ( 0, ReactHooks.useState )( ! 0 ), 2 ),
			x = R[ 0 ],
			C = R[ 1 ],
			P = zG( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			O = P[ 0 ],
			k = P[ 1 ],
			j = zG( ( 0, ReactHooks.useState )( ! 1 ), 2 ),
			A = j[ 0 ],
			M = j[ 1 ],
			T = zG( ( 0, ReactHooks.useState )( p ? 'json' : 'scorm' ), 2 ),
			F = T[ 0 ],
			N = T[ 1 ];
		if ( ! t ) {
			return null;
		}
		var D = function ( e ) {
				var t = e.target.files[ 0 ];
				if ( ! t ) {
					return ( C( ! 1 ), k( ! 1 ), S( '' ), void _( null ) );
				}
				var n = ! 1;
				( 'json' === F
					? ( n = 'application/json' === t.type )
					: 'scorm' === F &&
						( n =
							[
								'application/zip',
								'application/x-zip-compressed',
								'multipart/x-zip',
							].includes( t.type ) ||
							t.name.toLowerCase().endsWith( '.zip' ) ),
					n
						? ( S( t.name ), C( ! 0 ), k( ! 0 ), _( t ) )
						: ( C( ! 1 ), k( ! 1 ), S( '' ), _( null ) ) );
			},
			W = function ( e ) {
				( 'json' !== e || p ) &&
					( N( e ), _( null ), S( '' ), C( ! 0 ), k( ! 1 ) );
			};
		return (
			<React.Fragment>
				{ t && (
					<Controls.ModalWP
						{ ...WG(
							{
								title: ( 0, I18n.__ )(
									'Course Import',
									'ohmylms'
								),
								onRequestClose: n,
								size: 'medium',
							},
							f
						) }
					>
						{ d && (
							<Controls.CardWP
								isBorderless={ ! 0 }
								style={ {
									margin: '0 0 20px',
								} }
							>
								<Controls.TextWP
									weight={ '500' }
									style={ {
										marginBottom: '12px',
									} }
								>
									{ ( 0, I18n.__ )(
										'Select Import Type',
										'ohmylms'
									) }
								</Controls.TextWP>
								<div
									style={ {
										display: 'flex',
										flexDirection: 'column',
										gap: '8px',
									} }
								>
									<label
										style={ {
											display: 'flex',
											alignItems: 'center',
											gap: '8px',
											opacity: p ? 1 : 0.45,
											cursor: p
												? 'pointer'
												: 'not-allowed',
										} }
									>
										<input
											type={ 'radio' }
											value={ 'json' }
											checked={ 'json' === F }
											disabled={ ! p }
											onChange={ function () {
												return W( 'json' );
											} }
											style={ {
												cursor: p
													? 'pointer'
													: 'not-allowed',
											} }
										/>
										<span>
											{ ( 0, I18n.__ )(
												'Import from JSON (OhMyLMS Format)',
												'ohmylms'
											) }
											{ ! p && (
												<span
													style={ {
														marginLeft: '6px',
														fontSize: '11px',
														background: '#6e42d3',
														color: '#fff',
														borderRadius: '3px',
														padding: '1px 6px',
														fontWeight: '600',
													} }
												>
													{ ( 0, I18n.__ )(
														'Pro',
														'ohmylms'
													) }
												</span>
											) }
										</span>
									</label>
									<label
										style={ {
											display: 'flex',
											alignItems: 'center',
											gap: '8px',
											cursor: 'pointer',
										} }
									>
										<input
											type={ 'radio' }
											value={ 'scorm' }
											checked={ 'scorm' === F }
											onChange={ function () {
												return W( 'scorm' );
											} }
											style={ {
												cursor: 'pointer',
											} }
										/>
										<span>
											{ ( 0, I18n.__ )(
												'Import from SCORM Package',
												'ohmylms'
											) }
										</span>
									</label>
								</div>
							</Controls.CardWP>
						) }
						<Controls.CardWP
							isBorderless={ ! 0 }
							style={ {
								margin: '0 0 20px',
							} }
						>
							<Controls.FlexWP
								align={ 'center' }
								justify={ 'center' }
								direction={ 'column' }
								gap={ '4' }
								onDrop={ function ( e ) {
									( e.preventDefault(), M( ! 1 ) );
									var t = e.dataTransfer.files;
									if ( t.length > 0 ) {
										var n = t[ 0 ];
										D( {
											target: {
												files: [ n ],
											},
										} );
									}
								} }
								onDragOver={ function ( e ) {
									( e.preventDefault(), M( ! 0 ) );
								} }
								onDragLeave={ function () {
									M( ! 1 );
								} }
								style={ {
									border: A
										? '2px dashed #6E42D3'
										: '2px dashed #e1e1e1',
									padding: '20px',
									borderRadius: '8px',
									backgroundColor: A
										? '#f9f5ff'
										: '#f0f0f173',
									transition: 'all 0.2s ease-in-out',
									minHeight: '120px',
								} }
							>
								<Controls.FormFileUploadWP
									label={
										'json' === F
											? ( 0, I18n.__ )(
													'Upload JSON file',
													'ohmylms'
												)
											: ( 0, I18n.__ )(
													'Upload SCORM ZIP file',
													'ohmylms'
												)
									}
									onChange={ D }
									accept={
										'json' === F
											? 'application/json'
											: '.zip'
									}
									style={ {
										border: '1px solid transparent',
										backgroundColor: '#6e42d32b',
									} }
								/>
								{ E && (
									<Controls.TextWP
										align={ 'center' }
										style={ {
											color: '#333',
										} }
									>
										{ ( 0, I18n.__ )(
											'Uploaded:',
											'ohmylms'
										) }{ ' ' }
										<strong>{ E }</strong>
									</Controls.TextWP>
								) }
								{ ! x && O && (
									<Controls.TextWP
										align={ 'center' }
										style={ {
											color: 'red',
										} }
									>
										{ '❌ ' }
										{ 'json' === F
											? ( 0, I18n.__ )(
													'Invalid file format. Please upload a valid JSON file.',
													'ohmylms'
												)
											: ( 0, I18n.__ )(
													'Invalid file format. Please upload a valid ZIP file containing a SCORM package.',
													'ohmylms'
												) }
									</Controls.TextWP>
								) }
								{ ! O && (
									<Controls.TextWP
										align={ 'center' }
										style={ {
											fontSize: '14px',
											color: '#666',
										} }
									>
										{ 'json' === F ? (
											<React.Fragment>
												{ ( 0, I18n.__ )(
													'Drag & drop a JSON file here or',
													'ohmylms'
												) }
												<br />
												{ ( 0, I18n.__ )(
													'use the upload button.',
													'ohmylms'
												) }
											</React.Fragment>
										) : (
											<React.Fragment>
												{ ( 0, I18n.__ )(
													'Drag & drop a SCORM ZIP package here or',
													'ohmylms'
												) }
												<br />
												{ ( 0, I18n.__ )(
													'use the upload button.',
													'ohmylms'
												) }
												<br />
												<span
													style={ {
														fontSize: '12px',
														color: '#999',
													} }
												>
													{ ( 0, I18n.__ )(
														'(SCORM 1.2 and SCORM 2004 supported)',
														'ohmylms'
													) }
												</span>
											</React.Fragment>
										) }
									</Controls.TextWP>
								) }
							</Controls.FlexWP>
						</Controls.CardWP>
						<Controls.FlexWP
							align={ 'center' }
							justify={ 'end' }
							gap={ '2' }
						>
							<Controls.ButtonWP
								onClick={ n }
								variant={ 'secondary' }
								disabled={ u }
							>
								{ o }
							</Controls.ButtonWP>
							<Controls.ButtonWP
								onClick={ function () {
									return r( y, F );
								} }
								disabled={ ! O || u }
								isBusy={ u }
								variant={ 'primary' }
							>
								{ l }
							</Controls.ButtonWP>
						</Controls.FlexWP>
					</Controls.ModalWP>
				) }
			</React.Fragment>
		);
	};
}
