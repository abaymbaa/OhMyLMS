import { ComputeEngine } from '@cortex-js/compute-engine';

const engine = new ComputeEngine();

/**
 * Advisory syntax preview only; original LaTeX is never replaced or graded here.
 * @param {string} source Formula.
 * @return {Object} Preview.
 */
export function inspectFormula( source ) {
	if ( source.length > 2000 ) {
		return { valid: false, latex: '' };
	}
	const expression = engine.parse( source, { canonical: false } );
	return { valid: expression.isValid, latex: expression.latex };
}
