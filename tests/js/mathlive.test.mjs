import test from 'node:test';
import assert from 'node:assert/strict';
import { equationMarker, equationPattern, templateLatex, restoreTemplateTokens, normalizeTemplateTokens } from '../../assets/src/features/math/content.mjs';
import { inspectFormula } from '../../assets/src/features/math/teacherCompute.mjs';

test( 'explicit markers preserve LaTeX, layout and dollar prose', () => {
	const latex = String.raw`\frac{\sqrt{x^{12}+1}}{\frac{1}{2}}`;
	const content = `Costs $5. ${ equationMarker( latex, 'display' ) }`;
	const matches = [ ...content.matchAll( equationPattern() ) ];
	assert.equal( matches.length, 1 );
	assert.equal( matches[ 0 ][ 1 ], 'display' );
	assert.equal( matches[ 0 ][ 2 ], latex );
	assert.equal( JSON.parse( JSON.stringify( { content } ) ).content, content );
	assert.throws( () => equationMarker( 'x'.repeat( 2001 ) ) );
} );

test( 'randomized equation tokens round trip without evaluation', () => {
	const original = String.raw`\frac{{{a}}x+{{b:+}}}{\sqrt{{{a*b}}}}`;
	const { latex, tokens } = templateLatex( original );
	assert.equal( tokens.length, 3 );
	assert.equal( restoreTemplateTokens( latex, tokens ), original );
	assert.equal( restoreTemplateTokens( latex.replaceAll( ']{', '][locked]{' ), tokens ), original );
} );

test( 'pinned Compute Engine provides advisory syntax without replacing source', () => {
	const source = String.raw`\frac{1}{2}+\sqrt{x^2+1}`;
	assert.equal( inspectFormula( source ).valid, true );
	assert.equal( source, String.raw`\frac{1}{2}+\sqrt{x^2+1}` );
	assert.equal( inspectFormula( 'x'.repeat( 2001 ) ).valid, false );
} );

test( 'typed MathLive double braces become tokens without altering other mathematics', () => {
	const source = String.raw`\frac{\left\lbrace\left\lbrace a\right\rbrace\right\rbrace}{\sqrt{x^{2}+1}}`;
	const canonical = String.raw`\frac{{{a}}}{\sqrt{x^{2}+1}}`;
	assert.equal( normalizeTemplateTokens( source ), canonical );
	assert.equal( restoreTemplateTokens( source, [] ), canonical );
	const { latex, tokens } = templateLatex( source );
	assert.deepEqual( tokens, [ '{{a}}' ] );
	assert.equal( restoreTemplateTokens( latex, tokens ), canonical );
	assert.equal( normalizeTemplateTokens( String.raw`\{\{a*b:+\}\}` ), '{{a*b:+}}' );
	assert.equal( normalizeTemplateTokens( String.raw`\left\lbrace a\right\rbrace` ), String.raw`\left\lbrace a\right\rbrace` );
} );
