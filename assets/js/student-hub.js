/* global MutationObserver */
( () => {
	const hub = document.querySelector( '.ohmylms-student-hub' );
	if ( hub ) {
		const themes = [ 'system', 'light', 'dark' ];
		const storeKey = 'ohmylms-hub-theme';
		const buttons = hub.querySelectorAll( '[data-hub-theme-set]' );
		const applyTheme = ( theme ) => {
			hub.dataset.theme = theme;
			buttons.forEach( ( button ) =>
				button.setAttribute(
					'aria-pressed',
					button.dataset.hubThemeSet === theme ? 'true' : 'false'
				)
			);
		};
		let saved = 'light';
		try {
			const stored = window.localStorage.getItem( storeKey );
			saved = themes.includes( stored ) ? stored : saved;
		} catch {
			// Storage can be unavailable; the preference then lasts for this visit.
		}
		applyTheme( saved );
		buttons.forEach( ( button ) =>
			button.addEventListener( 'click', () => {
				applyTheme( button.dataset.hubThemeSet );
				try {
					window.localStorage.setItem(
						storeKey,
						button.dataset.hubThemeSet
					);
				} catch {
					// Not persisted when storage is blocked.
				}
			} )
		);
		const opener = hub.querySelector( '[data-hub-rail-open]' );
		const setRail = ( open ) => {
			hub.classList.toggle( 'is-rail-open', open );
			opener?.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
		};
		opener?.addEventListener( 'click', () => setRail( true ) );
		hub.querySelector( '[data-hub-rail-close]' )?.addEventListener(
			'click',
			() => {
				setRail( false );
				opener?.focus();
			}
		);
		document.addEventListener( 'keydown', ( event ) => {
			if (
				event.key === 'Escape' &&
				hub.classList.contains( 'is-rail-open' )
			) {
				setRail( false );
				opener?.focus();
			}
		} );
	}
	document.querySelectorAll( '[data-hub-sortable]' ).forEach( ( list ) => {
		let dragged;
		const announce = () => {
			const status = document.querySelector( '[data-hub-sort-status]' );
			if ( status ) {
				status.textContent = status.dataset.message;
			}
		};
		list.addEventListener( 'click', ( event ) => {
			const button = event.target.closest( '[data-move]' );
			if ( ! button ) {
				return;
			}
			const row = button.closest( '[data-sort-row]' );
			const target =
				button.dataset.move === 'up'
					? row.previousElementSibling
					: row.nextElementSibling;
			if ( target ) {
				if ( button.dataset.move === 'up' ) {
					target.before( row );
				} else {
					target.after( row );
				}
				button.focus();
				announce();
			}
		} );
		list.addEventListener( 'dragstart', ( event ) => {
			dragged = event.target.closest( '[data-sort-row]' );
			if ( dragged ) {
				event.dataTransfer.effectAllowed = 'move';
				event.dataTransfer.setData( 'text/plain', 'reorder' );
				dragged.classList.add( 'is-dragging' );
			}
		} );
		list.addEventListener( 'dragover', ( event ) => {
			const row = event.target.closest( '[data-sort-row]' );
			if ( ! dragged || ! row || row === dragged ) {
				return;
			}
			event.preventDefault();
			const bounds = row.getBoundingClientRect();
			if ( event.clientY < bounds.top + bounds.height / 2 ) {
				row.before( dragged );
			} else {
				row.after( dragged );
			}
		} );
		list.addEventListener( 'drop', ( event ) => {
			if ( dragged ) {
				event.preventDefault();
				announce();
			}
		} );
		list.addEventListener( 'dragend', () => {
			dragged?.classList.remove( 'is-dragging' );
			dragged = null;
		} );
	} );
	const themePicker = document.querySelector(
		'.oml-hub-personalize [data-dashboard-theme]'
	);
	const cards = document.querySelector( '[data-hub-theme]' );
	if ( themePicker && cards ) {
		new MutationObserver( () => {
			cards.dataset.hubTheme = themePicker.dataset.dashboardTheme;
		} ).observe( themePicker, {
			attributes: true,
			attributeFilter: [ 'data-dashboard-theme' ],
		} );
	}
	document
		.querySelectorAll( '[data-hub-expand-all]' )
		.forEach( ( button ) => {
			button.addEventListener( 'click', () => {
				const units = document.querySelectorAll( '.oml-hub-unit' );
				const open = button.dataset.open !== 'true';
				units.forEach( ( unit ) => {
					unit.open = open;
				} );
				button.dataset.open = open ? 'true' : 'false';
				button.textContent = open
					? button.dataset.collapse
					: button.dataset.expand;
			} );
		} );
	document.querySelectorAll( '[data-preview-size]' ).forEach( ( button ) => {
		button.addEventListener( 'click', () => {
			const preview = document.querySelector( '[data-hub-preview]' );
			if ( preview ) {
				preview.style.width =
					button.dataset.previewSize === 'mobile' ? '390px' : '100%';
			}
		} );
	} );
	document.querySelectorAll( '[data-hub-dirty]' ).forEach( ( form ) => {
		const save = form.querySelector( '[data-hub-save]' );
		const snapshot = () =>
			JSON.stringify(
				Array.from( form.elements )
					.filter(
						( field ) => field.name && field.type !== 'hidden'
					)
					.map( ( field ) =>
						field.type === 'checkbox' || field.type === 'radio'
							? field.checked
							: field.value
					)
			);
		const initial = snapshot();
		const update = () => {
			if ( save ) {
				save.disabled = snapshot() === initial;
			}
		};
		form.addEventListener( 'input', update );
		form.addEventListener( 'change', update );
		window.addEventListener( 'pageshow', update );
	} );
	document.querySelectorAll( '[data-hub-invitation]' ).forEach( ( form ) => {
		form.addEventListener( 'submit', async ( event ) => {
			event.preventDefault();
			const input = form.querySelector( '[name="invitation"]' );
			const button = form.querySelector( '[type="submit"]' );
			const status = form.querySelector( '[data-invitation-status]' );
			let token = input.value.trim();
			try {
				token =
					new URL( token ).searchParams.get( 'ohmylms_invite' ) || '';
			} catch {
				// A bare invitation code is accepted by the same existing service.
			}
			button.disabled = true;
			status.textContent = '';
			try {
				const response = await fetch( form.dataset.endpoint, {
					method: 'POST',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json',
						'X-WP-Nonce': form.dataset.nonce,
					},
					body: JSON.stringify( { token } ),
				} );
				const result = await response.json();
				if ( ! response.ok ) {
					throw new Error( result.message || form.dataset.error );
				}
				status.textContent = form.dataset.success;
				input.value = '';
			} catch ( error ) {
				status.textContent = error.message || form.dataset.error;
			} finally {
				button.disabled = false;
			}
		} );
	} );
} )();
