( () => {
	let draggedRoot = null;
	const rootOf = ( target ) => target.closest( '.ohmylms-drag-blanks' );
	const tokenOf = ( root, id ) =>
		[ ...root.querySelectorAll( '[data-blank-token]' ) ].find(
			( token ) => token.dataset.blankToken === id
		);
	const place = ( root, input, id ) => {
		const token = tokenOf( root, id );
		if ( ! token ) return;
		const previous = input.dataset.blankToken;
		root.querySelectorAll( 'input' ).forEach( ( field ) => {
			if ( field.dataset.blankToken === id ) {
				field.value = '';
				delete field.dataset.blankToken;
			}
		} );
		if ( previous !== undefined ) {
			const old = tokenOf( root, previous );
			if ( old ) old.hidden = false;
		}
		input.value = token.dataset.blankAnswer;
		input.dataset.blankToken = id;
		token.hidden = true;
		delete root.dataset.selectedToken;
		root.querySelectorAll( 'button' ).forEach( ( button ) =>
			button.setAttribute( 'aria-pressed', 'false' )
		);
		input.dispatchEvent( new Event( 'input', { bubbles: true } ) );
		input.dispatchEvent( new Event( 'change', { bubbles: true } ) );
	};
	document.addEventListener( 'dragstart', ( event ) => {
		const token = event.target.closest( '.ohmylms-blank-token' );
		if ( token ) {
			draggedRoot = rootOf( token );
			draggedRoot.dataset.selectedToken = token.dataset.blankToken;
			event.dataTransfer.setData(
				'text/plain',
				token.dataset.blankToken
			);
		}
	} );
	document.addEventListener( 'dragend', () => {
		draggedRoot = null;
	} );
	document.addEventListener( 'dragover', ( event ) => {
		if ( event.target.matches( '.ohmylms-drag-blanks input' ) )
			event.preventDefault();
	} );
	document.addEventListener( 'drop', ( event ) => {
		const root = rootOf( event.target );
		if ( ! root || ! event.target.matches( 'input' ) ) return;
		event.preventDefault();
		if ( root === draggedRoot && root.dataset.selectedToken !== undefined )
			place( root, event.target, root.dataset.selectedToken );
	} );
	document.addEventListener( 'click', ( event ) => {
		const root = rootOf( event.target );
		if ( ! root ) return;
		const token = event.target.closest( '.ohmylms-blank-token' );
		if ( token ) {
			root.dataset.selectedToken = token.dataset.blankToken;
			root.querySelectorAll( 'button' ).forEach( ( button ) =>
				button.setAttribute(
					'aria-pressed',
					String( button === token )
				)
			);
		} else if ( event.target.matches( 'input' ) ) {
			if ( root.dataset.selectedToken !== undefined )
				place( root, event.target, root.dataset.selectedToken );
			else if ( event.target.dataset.blankToken !== undefined ) {
				const previous = tokenOf(
					root,
					event.target.dataset.blankToken
				);
				if ( previous ) previous.hidden = false;
				event.target.value = '';
				delete event.target.dataset.blankToken;
				event.target.dispatchEvent(
					new Event( 'change', { bubbles: true } )
				);
			}
		}
	} );
	document.addEventListener( 'keydown', ( event ) => {
		if (
			event.target.matches( '.ohmylms-drag-blanks input' ) &&
			[ 'Enter', ' ' ].includes( event.key )
		) {
			event.preventDefault();
			event.target.click();
		}
	} );
} )();
