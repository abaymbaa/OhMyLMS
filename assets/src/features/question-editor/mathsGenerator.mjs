/**
 * Create a bounded preset over the existing seeded template engine.
 *
 * @param {string} kind Preset name.
 * @param {number} min  Lower integer bound.
 * @param {number} max  Upper integer bound.
 * @return {Object|null} Generated authoring definition.
 */
export function mathsPreset( kind, min, max ) {
	if (
		! Number.isInteger( min ) ||
		! Number.isInteger( max ) ||
		min < 1 ||
		max > 1000 ||
		min > max
	) {
		return null;
	}
	const variable = ( name ) => ( { name, type: 'int', min, max, step: 1 } );
	let variables = [ variable( 'a' ), variable( 'b' ) ];
	let constraints = [];
	let prompt;
	let expr;
	switch ( kind ) {
		case 'addition':
			prompt = '{{a}} + {{b}} = ?';
			expr = 'a+b';
			break;
		case 'subtraction':
			prompt = '{{a}} − {{b}} = ?';
			expr = 'a-b';
			constraints = [ 'a>=b' ];
			break;
		case 'multiplication':
			prompt = '{{a}} × {{b}} = ?';
			expr = 'a*b';
			break;
		case 'division':
			variables.push( {
				name: 'c',
				type: 'expr',
				expr: 'a*b',
				places: 0,
			} );
			prompt = '{{c}} ÷ {{b}} = ?';
			expr = 'a';
			break;
		case 'percentage':
			prompt = '{{a}}% of {{b}} = ?';
			expr = 'a*b/100';
			break;
		case 'fractions':
			variables.push( {
				name: 'd',
				type: 'int',
				min: 2,
				max: 12,
				step: 1,
			} );
			prompt = '{{a}}/{{d}} + {{b}}/{{d}} = ? (decimal answer)';
			expr = '(a+b)/d';
			break;
		case 'algebra':
			variables = [
				{ name: 'a', type: 'int', min: 1, max: 9, step: 1 },
				{ name: 'b', type: 'int', min: 1, max: 9, step: 1 },
				variable( 'c' ),
			];
			prompt = '{{a}}x + {{b}} = {{a*c+b}}. Find x.';
			expr = 'c';
			break;
		case 'pythagorean':
			// Primitive triples from m > n, coprime, of opposite parity: a = m²-n², b = 2mn, c = m²+n².
			if ( min === max ) {
				return null;
			}
			variables = [
				{ name: 'm', type: 'int', min: min + 1, max, step: 1 },
				{ name: 'n', type: 'int', min, max: max - 1, step: 1 },
				{ name: 'a', type: 'expr', expr: 'm*m-n*n', places: 0 },
				{ name: 'b', type: 'expr', expr: '2*m*n', places: 0 },
				{ name: 'c', type: 'expr', expr: 'm*m+n*n', places: 0 },
			];
			constraints = [ 'm>n', 'gcd(m,n)=1', 'mod(m-n,2)=1' ];
			prompt =
				'A right-angled triangle has shorter sides {{a}} and {{b}}. Find the hypotenuse.';
			expr = 'c';
			break;
		case 'quadratic':
			// Build from the two solutions, so they are whole numbers and distinct by construction.
			variables = [
				{ name: 'p', type: 'int', min: -max, max, step: 1 },
				{ name: 'q', type: 'int', min: -max, max, step: 1 },
				{ name: 'b', type: 'expr', expr: '-(p+q)', places: 0 },
				{ name: 'c', type: 'expr', expr: 'p*q', places: 0 },
			];
			constraints = [
				'p!=q',
				`abs(p)>=${ min }`,
				`abs(q)>=${ min }`,
				'b!=0',
			];
			prompt = 'Solve x² {{b:+}}x {{c:+}} = 0. Give the larger solution.';
			expr = 'max(p,q)';
			break;
		default:
			return null;
	}
	return {
		prompt,
		settings: {
			type: 'numerical',
			answer: 0,
			answers: undefined,
			tolerance: 0.0001,
			tolerance_type: 'absolute',
			unit: '',
			maths_generator: { kind, min, max },
			template: {
				variables,
				constraints,
				set: [ { path: 'answer', expr } ],
			},
		},
	};
}
