( () => {
	const player = document.querySelector( '.oml-player' );
	if ( ! player ) {
		return;
	}
	try {
		const theme = window.localStorage.getItem( 'ohmylms-hub-theme' );
		if ( [ 'light', 'dark', 'system' ].includes( theme ) ) {
			player.dataset.theme = theme;
		}
	} catch {
		// Keep the default light appearance when storage is unavailable.
	}
} )();
