import { createElement, useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { Button, Notice, Spinner } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

const PATH = '/ohmylms/v1/hub-icons';

/**
 * Open the media library and resolve with the chosen image, or null when it is dismissed.
 *
 * @param {string} title Dialog title.
 * @return {Promise<Object|null>} Attachment data.
 */
function pickImage( title ) {
	return new Promise( ( resolve ) => {
		if ( ! window.wp || ! window.wp.media ) {
			resolve( null );
			return;
		}
		const frame = window.wp.media( {
			title,
			button: { text: __( 'Use this icon', 'ohmylms' ) },
			library: { type: 'image' },
			multiple: false,
		} );
		let chosen = null;
		frame.on( 'select', () => {
			const attachment = frame.state().get( 'selection' ).first();
			chosen = attachment ? attachment.toJSON() : null;
		} );
		frame.on( 'close', () => resolve( chosen ) );
		frame.open();
	} );
}

/**
 * Choose or upload the icon shown for each kind of activity in the learner hub.
 *
 * @return {Element} Settings section.
 */
export function HubIconSettings() {
	const [ kinds, setKinds ] = useState( null );
	const [ busy, setBusy ] = useState( false );
	const [ error, setError ] = useState( '' );
	const [ notice, setNotice ] = useState( '' );

	useEffect( () => {
		let active = true;
		apiFetch( { path: PATH } )
			.then( ( data ) => active && setKinds( data.kinds ) )
			.catch(
				( failure ) =>
					active &&
					setError(
						failure.message ||
							__( 'Could not load the icons.', 'ohmylms' )
					)
			);
		return () => {
			active = false;
		};
	}, [] );

	/**
	 * Save the full set of choices with one kind changed.
	 *
	 * @param {string} key Kind to change.
	 * @param {number} id  Attachment ID, or 0 for the built-in icon.
	 */
	async function change( key, id ) {
		const icons = {};
		kinds.forEach( ( kind ) => {
			icons[ kind.key ] = kind.key === key ? id : kind.id;
		} );
		setBusy( key );
		setError( '' );
		setNotice( '' );
		try {
			const data = await apiFetch( {
				path: PATH,
				method: 'POST',
				data: { icons },
			} );
			setKinds( data.kinds );
			setNotice( __( 'Icon saved.', 'ohmylms' ) );
		} catch ( failure ) {
			setError(
				failure.message || __( 'Could not save the icon.', 'ohmylms' )
			);
		} finally {
			setBusy( false );
		}
	}

	async function choose( kind ) {
		const image = await pickImage(
			/* translators: %s: activity kind such as Lesson. */
			sprintf( __( 'Choose the %s icon', 'ohmylms' ), kind.label )
		);
		if ( image && image.id ) {
			change( kind.key, image.id );
		}
	}

	return (
		<section className="ohmylms-hub-icons">
			<h3>{ __( 'Learner hub icons', 'ohmylms' ) }</h3>
			<p>
				{ __(
					'Choose or upload an image for each kind of activity. Square images work best. Without one, the built-in icon is used.',
					'ohmylms'
				) }
			</p>
			{ error && (
				<Notice status="error" isDismissible={ false }>
					{ error }
				</Notice>
			) }
			{ notice && (
				<Notice status="success" onRemove={ () => setNotice( '' ) }>
					{ notice }
				</Notice>
			) }
			{ ! kinds && ! error && <Spinner /> }
			{ kinds && (
				<ul className="ohmylms-hub-icons-list">
					{ kinds.map( ( kind ) => (
						<li key={ kind.key } className="ohmylms-hub-icons-row">
							<span className="ohmylms-hub-icons-preview">
								{ kind.url ? (
									<img src={ kind.url } alt="" />
								) : (
									<span>{ __( 'Default', 'ohmylms' ) }</span>
								) }
							</span>
							<strong>{ kind.label }</strong>
							<Button
								variant="secondary"
								isBusy={ busy === kind.key }
								disabled={ !! busy }
								onClick={ () => choose( kind ) }
							>
								{ kind.url
									? __( 'Change icon', 'ohmylms' )
									: __( 'Choose or upload', 'ohmylms' ) }
							</Button>
							{ kind.url && (
								<Button
									variant="tertiary"
									isDestructive
									disabled={ !! busy }
									onClick={ () => change( kind.key, 0 ) }
								>
									{ __( 'Use default', 'ohmylms' ) }
								</Button>
							) }
						</li>
					) ) }
				</ul>
			) }
		</section>
	);
}
