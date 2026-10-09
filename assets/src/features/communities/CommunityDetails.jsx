/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCommunityDetails( readRuntime ) {
	return function CommunityDetails( props ) {
		const {
			Ge,
			I: Controls,
			L2: ImageField,
			M,
			Pf: DetailField,
			React,
			T: StoreModule,
			b: I18n,
			f9,
			g: ReactHooks,
			p9,
			v9,
			y: WordPressData,
		} = readRuntime();
		var errors = props.errors,
			n = ( props.setErrors, props.validate );
		M().noConflict();
		var r = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).selectCommunity();
			}, [] ),
			setCommunity = ( 0, WordPressData.useDispatch )(
				StoreModule.default
			).setCommunity,
			o = function ( e ) {
				return e
					.toLowerCase()
					.trim()
					.replace( /[^\w\s-]/g, '' )
					.replace( /[\s_-]+/g, '-' )
					.replace( /^-+|-+$/g, '' );
			},
			i = function ( e, t, i ) {
				var l = p9( p9( {}, r ), {}, f9( {}, e, t ) );
				if ( ( 'name' === e || 'title' === e ) && t ) {
					var c = o( t ),
						u = r.slug || '';
					( ! u || u === o( r.title || r.name ) ) && ( l.slug = c );
				}
				( 'thumbnail' === e
					? ( l.space_photo = i )
					: 'cover_image_url' === e && ( l.cover_image = i ),
					setCommunity( l ),
					n( l ) );
			};
		return (
			( 0, ReactHooks.useEffect )( function () {
				( ! ( function ( e, t ) {
					var n = p9( {}, e ),
						r = ! 1;
					for ( var o in t ) {
						( e && e.hasOwnProperty( o ) && e[ o ] ) ||
							( ( n[ o ] = t[ o ] ), ( r = ! 0 ) );
					}
					r && setCommunity( n );
				} )( r, v9 ),
					n( r ) );
			}, [] ),
			(
				<React.Fragment>
					<DetailField
						title={ ( 0, I18n.__ )( 'Name', 'ohmylms' ) }
						description={ ( 0, I18n.__ )(
							'What would you like to call this community?',
							'ohmylms'
						) }
						value={ Ge( null == r ? void 0 : r.title ) }
						onChange={ function ( e ) {
							return i( 'title', e );
						} }
						error={ null == errors ? void 0 : errors.title }
					/>
					<Controls.DividerWP marginStart={ '2' } marginEnd={ '2' } />
					<DetailField
						title={ ( 0, I18n.__ )( 'Slug', 'ohmylms' ) }
						description={ ( 0, I18n.__ )(
							'The URL-friendly version of the name. This will be used in the community URL.',
							'ohmylms'
						) }
						value={ ( null == r ? void 0 : r.slug ) || '' }
						onChange={ function ( e ) {
							return i( 'slug', e );
						} }
						placeholder={ ( 0, I18n.__ )(
							'community-slug',
							'ohmylms'
						) }
						error={ null == errors ? void 0 : errors.slug }
					/>
					<Controls.DividerWP marginStart={ '2' } marginEnd={ '2' } />
					<DetailField
						title={ ( 0, I18n.__ )( 'Description', 'ohmylms' ) }
						description={ ( 0, I18n.__ )(
							'Describe your space to help members understand its purpose.',
							'ohmylms'
						) }
						value={ Ge( null == r ? void 0 : r.description ) }
						onChange={ function ( e ) {
							return i( 'description', e );
						} }
						inputType={ 'textarea' }
					/>
					<Controls.DividerWP marginStart={ '2' } marginEnd={ '2' } />
					<Controls.SpacerWP padding={ 4 } marginBottom={ 2 }>
						<ImageField
							title={ ( 0, I18n.__ )( 'Space Photo', 'ohmylms' ) }
							description={ ( 0, I18n.__ )(
								'Upload a photo that represents your community space.',
								'ohmylms'
							) }
							handleChange={ function ( e, t ) {
								return i( 'thumbnail', e, t );
							} }
							handleRemove={ function () {
								return i( 'thumbnail', null, null );
							} }
							brandingImg={ null == r ? void 0 : r.thumbnail }
							alertTitle={ ( 0, I18n.__ )(
								'Remove Space Photo',
								'ohmylms'
							) }
							alertDescription={ ( 0, I18n.__ )(
								'Are you sure you want to remove this space photo?',
								'ohmylms'
							) }
							showDivider={ ! 1 }
							maxWidth={ '345px' }
						/>
					</Controls.SpacerWP>
					<Controls.DividerWP marginStart={ '2' } marginEnd={ '2' } />
					<Controls.SpacerWP padding={ 4 } marginBottom={ 2 }>
						<ImageField
							title={ ( 0, I18n.__ )( 'Cover Image', 'ohmylms' ) }
							description={ ( 0, I18n.__ )(
								'Upload a photo that represents your community space.',
								'ohmylms'
							) }
							handleChange={ function ( e, t ) {
								return i( 'cover_image_url', e, t );
							} }
							handleRemove={ function () {
								return i( 'cover_image_url', null, null );
							} }
							brandingImg={
								null == r ? void 0 : r.cover_image_url
							}
							alertTitle={ ( 0, I18n.__ )(
								'Remove Cover Image',
								'ohmylms'
							) }
							alertDescription={ ( 0, I18n.__ )(
								'Are you sure you want to remove this cover image?',
								'ohmylms'
							) }
							showDivider={ ! 1 }
							maxWidth={ '345px' }
						/>
					</Controls.SpacerWP>
				</React.Fragment>
			 )
		 );
	};
}
