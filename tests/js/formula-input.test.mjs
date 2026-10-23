import test from 'node:test';
import assert from 'node:assert/strict';
import {
	insertVariable,
	listToNumbersOrFormulas,
	numberOrFormula,
	toleranceOrFormula,
} from '../../assets/src/features/question-editor/formulaInput.mjs';

const record = ( make ) => {
	const seen = [];
	const props = make( ( value ) => seen.push( value ) );
	return { props, seen };
};

test( 'a number field keeps numbers as numbers and formulas as text', () => {
	const { props, seen } = record( ( on ) => numberOrFormula( 4, on ) );
	assert.equal( props.value, 4 );
	props.onChange( '12' );
	props.onChange( '{{a*b}}' );
	props.onChange( '3.' );
	props.onChange( '' );
	props.onChange( 'abc' );
	assert.deepEqual( seen, [ 12, '{{a*b}}', '3.', undefined ] );
} );

test( 'a tolerance is never negative and may be a formula', () => {
	const { props, seen } = record( ( on ) => toleranceOrFormula( undefined, on ) );
	assert.equal( props.value, 0 );
	props.onChange( '-2' );
	props.onChange( '0.5' );
	props.onChange( '{{c}}' );
	props.onChange( '' );
	assert.deepEqual( seen, [ 0, 0.5, '{{c}}', 0 ] );
} );

test( 'accepted answers keep numbers and complete formulas, including commas inside a formula', () => {
	assert.deepEqual( listToNumbersOrFormulas( '4, {{a*b}}, x, 2.5' ), [ 4, '{{a*b}}', 2.5 ] );
	assert.deepEqual( listToNumbersOrFormulas( '{{max(a,b)}}, 7' ), [ '{{max(a,b)}}', 7 ] );
	assert.equal( listToNumbersOrFormulas( '{{a' ), undefined );
	assert.equal( listToNumbersOrFormulas( '' ), undefined );
} );

test( 'inserting a variable replaces an empty field or a number and extends a formula', () => {
	assert.equal( insertVariable( undefined, 'a' ), '{{a}}' );
	assert.equal( insertVariable( 5, 'a' ), '{{a}}' );
	assert.equal( insertVariable( '{{a}}', 'b' ), '{{a}}{{b}}' );
} );
