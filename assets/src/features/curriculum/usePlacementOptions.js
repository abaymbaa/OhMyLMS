import { useEffect, useState } from '@wordpress/element';
import { readComparison } from './comparison.mjs';

let cached = null;

/**
 * The domains and grades a shared skill can be placed in, read once per page.
 * @return {Object|null} domains, grades and ai_available, or null while loading.
 */
export function usePlacementOptions() {
	const [ options, setOptions ] = useState( cached );
	useEffect( () => {
		if ( cached ) {
			return;
		}
		readComparison( 'skill-placement' )
			.then( ( value ) => {
				cached = value;
				setOptions( value );
			} )
			.catch( () => setOptions( null ) );
	}, [] );
	return options;
}
