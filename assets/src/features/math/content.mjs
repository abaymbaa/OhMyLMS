/** Explicit, versioned markers survive the existing HTML and plain-text content models. */
export const equationPattern = () =>
	/\[\[ohmylms-math:latex:(inline|display)\]\]([\s\S]{1,2000}?)\[\[\/ohmylms-math\]\]/g;

/**
 * Check presentation source without weakening WordPress HTML sanitization.
 * @param {string} source Source.
 * @return {boolean} Safe presentation source.
 */
export const safeMathSource = ( source ) =>
	source.length <= 2000 &&
	! /\\(?:href|htmlData|class|style|cssId|htmlId|htmlStyle|url|includegraphics|def|newcommand)\b/.test(
		source
	);

/**
 * Preserve the author's source, without evaluating or canonicalizing it.
 * @param {string} latex Source.
 * @param {string} mode  Layout.
 * @return {string} Content marker.
 */
export function equationMarker( latex, mode = 'inline' ) {
	if ( ! latex || latex.length > 2000 || latex.includes( '[[/' ) ) {
		throw new Error( 'Invalid equation source.' );
	}
	return `[[ohmylms-math:latex:${ mode === 'display' ? 'display' : 'inline' }]]${ latex }[[/ohmylms-math]]`;
}

/**
 * Show stored randomization tokens as locked MathLive prompts.
 * @param {string} source Original template source.
 * @return {Object} LaTeX and a reversible token map.
 */
export function templateLatex( source ) {
	const tokens = [];
	const latex = String( source ).replace(
		/\{\{([^{}]{1,240})\}\}/g,
		( token, body ) => {
			const id = tokens.length;
			tokens.push( token );
			return `\\placeholder[omlvar${ id }]{${ body.replace( /[^a-z0-9+*/().:-]/gi, '' ) }}`;
		}
	);
	return { latex, tokens };
}

/**
 * Restore the randomization tokens, never the current preview value.
 * @param {string} latex  MathLive source.
 * @param {Array}  tokens Original tokens.
 * @return {string} Stored source.
 */
export function restoreTemplateTokens( latex, tokens ) {
	return latex.replace(
		/\\placeholder\[omlvar(\d+)\](?:\[locked\])?\{[^{}]*\}/g,
		( match, id ) => tokens[ Number( id ) ] || match
	);
}
