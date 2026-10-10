import { MathfieldElement } from 'mathlive';
import {
	equationPattern,
	templateLatex,
	restoreTemplateTokens,
	safeMathSource,
} from './content.mjs';

MathfieldElement.fontsDirectory = window.ohmylmsMath.fonts;
MathfieldElement.soundsDirectory = null;
MathfieldElement.computeEngine = null;
const mounted = new Map();

/**
 * Upgrade an existing field while keeping its name, value and validation contract.
 * @param {HTMLInputElement} input Original answer field.
 * @return {() => void} Cleanup.
 */
function mountInput( input ) {
	if ( mounted.has( input ) ) {
		return mounted.get( input );
	}
	if ( ! safeMathSource( input.value ) ) {
		return () => {};
	}
	const field = new MathfieldElement();
	field.className = 'ohmylms-math-input';
	field.setAttribute(
		'aria-label',
		input.getAttribute( 'aria-label' ) ||
			input.labels?.[ 0 ]?.textContent ||
			'Math answer'
	);
	field.mathVirtualKeyboardPolicy = 'auto';
	field.smartMode = false;
	field.readOnly = input.readOnly || input.disabled;
	let template = templateLatex( input.value );
	field.value = template.latex;
	// Until a real edit, keep legacy ASCII and the author's original spelling untouched.
	const write = ( event ) => {
		event.stopPropagation();
		input.value = restoreTemplateTokens(
			field.getValue( 'latex' ),
			template.tokens
		);
		input.dispatchEvent( new Event( 'input', { bubbles: true } ) );
		input.dispatchEvent( new Event( 'change', { bubbles: true } ) );
	};
	const restore = () => {
		if (
			restoreTemplateTokens(
				field.getValue( 'latex' ),
				template.tokens
			) !== input.value
		) {
			template = templateLatex( input.value );
			field.setValue( template.latex, {
				format: /[\\{}]/.test( template.latex )
					? 'latex'
					: 'ascii-math',
				silenceNotifications: true,
			} );
			field
				.getPrompts()
				.forEach( ( id ) =>
					field.setPromptState( id, 'undefined', true )
				);
		}
	};
	const focus = () => field.focus();
	const invalid = ( event ) => {
		event.preventDefault();
		field.focus();
	};
	const keyboard = () => {
		window.mathVirtualKeyboard.layouts = [
			{
				label: 'Math',
				rows: [
					[ '7', '8', '9', '+', '-', 'x', 'y' ],
					[ '4', '5', '6', '\\times', '\\frac{#0}{#?}', '(', ')' ],
					[
						'1',
						'2',
						'3',
						'\\sqrt{#0}',
						'#0^{#?}',
						'\\sin',
						'\\cos',
					],
					[
						'0',
						'.',
						'=',
						'\\pi',
						'\\ln',
						'[backspace]',
						'[hide-keyboard]',
					],
				],
			},
		];
		window.mathVirtualKeyboard.editToolbar = 'none';
	};
	field.addEventListener( 'focusin', keyboard );
	field.addEventListener( 'input', write );
	input.addEventListener( 'input', restore );
	input.addEventListener( 'change', restore );
	input.addEventListener( 'focus', focus );
	input.addEventListener( 'invalid', invalid );
	const form = input.form;
	form?.addEventListener( 'ohmylms:answer-restored', restore );
	input.before( field );
	field.menuItems = [];
	field.inlineShortcuts = {
		sqrt: '\\sqrt{#0}',
		sin: '\\sin',
		cos: '\\cos',
		tan: '\\tan',
		ln: '\\ln',
		pi: '\\pi',
	};
	field.removeExtraneousParentheses = false;
	field.setValue( template.latex, {
		format: /[\\{}]/.test( template.latex ) ? 'latex' : 'ascii-math',
		silenceNotifications: true,
	} );
	field
		.getPrompts()
		.forEach( ( id ) => field.setPromptState( id, 'undefined', true ) );
	const oldTabIndex = input.getAttribute( 'tabindex' );
	input.tabIndex = -1;
	input.classList.add( 'ohmylms-math-fallback' );
	const keys = input.parentElement.querySelector(
		'.ohmylms-expression-keys'
	);
	if ( keys ) {
		keys.hidden = true;
	}
	const cleanup = () => {
		field.removeEventListener( 'input', write );
		field.removeEventListener( 'focusin', keyboard );
		input.removeEventListener( 'input', restore );
		input.removeEventListener( 'change', restore );
		input.removeEventListener( 'focus', focus );
		input.removeEventListener( 'invalid', invalid );
		form?.removeEventListener( 'ohmylms:answer-restored', restore );
		field.remove();
		input.classList.remove( 'ohmylms-math-fallback' );
		if ( oldTabIndex === null ) {
			input.removeAttribute( 'tabindex' );
		} else {
			input.setAttribute( 'tabindex', oldTabIndex );
		}
		if ( keys ) {
			keys.hidden = false;
		}
		mounted.delete( input );
	};
	mounted.set( input, cleanup );
	return cleanup;
}

/**
 * Render explicit equation text only. No HTML or dollar-delimiter interpretation.
 * @param {Element} root Content region.
 */
function renderContent( root ) {
	const walker = document.createTreeWalker( root, NodeFilter.SHOW_TEXT );
	const nodes = [];
	while ( walker.nextNode() ) {
		const node = walker.currentNode;
		if (
			! node.parentElement.closest(
				'script,style,textarea,input,math-field,[contenteditable="true"],option,[data-ohmylms-react-math]'
			) &&
			node.textContent.includes( '[[ohmylms-math:' )
		) {
			nodes.push( node );
		}
	}
	for ( const node of nodes ) {
		const fragment = document.createDocumentFragment();
		let end = 0;
		for ( const match of node.textContent.matchAll( equationPattern() ) ) {
			fragment.append(
				document.createTextNode(
					node.textContent.slice( end, match.index )
				)
			);
			if ( ! safeMathSource( match[ 2 ] ) ) {
				fragment.append( document.createTextNode( match[ 2 ] ) );
				end = match.index + match[ 0 ].length;
				continue;
			}
			const field = new MathfieldElement();
			field.readOnly = true;
			field.tabIndex = -1;
			field.mathVirtualKeyboardPolicy = 'manual';
			field.className = `ohmylms-math-display is-${ match[ 1 ] }`;
			field.setAttribute( 'aria-label', match[ 2 ] );
			field.value = templateLatex( match[ 2 ] ).latex;
			fragment.append( field );
			end = match.index + match[ 0 ].length;
		}
		if ( end ) {
			fragment.append(
				document.createTextNode( node.textContent.slice( end ) )
			);
			node.replaceWith( fragment );
		}
	}
}

/**
 * Serialize author equation widgets back to source markers, never custom-element HTML.
 * @param {Element} root Content editor.
 * @return {string} Existing content model.
 */
function authorContent( root ) {
	const clone = root.cloneNode( true );
	clone.querySelectorAll( '[data-ohmylms-equation]' ).forEach( ( node ) => {
		const source =
			node.querySelector( 'input' )?.value ?? node.dataset.source ?? '';
		const mode = node.dataset.mode === 'display' ? 'display' : 'inline';
		node.replaceWith(
			document.createTextNode(
				`[[ohmylms-math:latex:${ mode }]]${ source }[[/ohmylms-math]]`
			)
		);
	} );
	return clone.innerHTML;
}

/**
 * Editable MathLive nodes in the prompt editor; original markers remain the save contract.
 * @param {Element} root Content editor.
 */
function hydrateAuthor( root ) {
	const walker = document.createTreeWalker( root, NodeFilter.SHOW_TEXT );
	const nodes = [];
	while ( walker.nextNode() ) {
		const node = walker.currentNode;
		if (
			! node.parentElement.closest(
				'math-field,[data-ohmylms-equation]'
			) &&
			node.textContent.includes( '[[ohmylms-math:' )
		) {
			nodes.push( node );
		}
	}
	for ( const node of nodes ) {
		const fragment = document.createDocumentFragment();
		let end = 0;
		for ( const match of node.textContent.matchAll( equationPattern() ) ) {
			fragment.append(
				document.createTextNode(
					node.textContent.slice( end, match.index )
				)
			);
			const widget = document.createElement( 'span' );
			widget.contentEditable = 'false';
			widget.dataset.ohmylmsEquation = 'latex';
			widget.dataset.source = match[ 2 ];
			widget.dataset.mode = match[ 1 ];
			widget.className = `ohmylms-author-equation is-${ match[ 1 ] }`;
			const input = document.createElement( 'input' );
			input.type = 'text';
			input.value = match[ 2 ];
			input.setAttribute(
				'aria-label',
				root.getAttribute( 'aria-label' ) || 'Equation'
			);
			widget.append( input );
			fragment.append( widget );
			end = match.index + match[ 0 ].length;
		}
		if ( end ) {
			fragment.append(
				document.createTextNode( node.textContent.slice( end ) )
			);
			node.replaceWith( fragment );
		}
	}
	root.querySelectorAll( '[data-ohmylms-equation] input' ).forEach(
		mountInput
	);
}

/**
 * Mount a region and release every upgraded field when its owner unmounts.
 * @param {Element} root Question or preview.
 * @return {() => void} Cleanup.
 */
function mount( root ) {
	const scan = () => {
		root.querySelectorAll(
			'input.ohmylms-expression-input,input[data-ohmylms-math-input]'
		).forEach( mountInput );
		renderContent( root );
		for ( const [ input, cleanup ] of mounted ) {
			if ( ! input.isConnected ) {
				cleanup();
			}
		}
	};
	scan();
	const observer = new MutationObserver( scan );
	observer.observe( root, {
		childList: true,
		subtree: true,
		characterData: true,
	} );
	return () => {
		observer.disconnect();
		for ( const [ input, cleanup ] of mounted ) {
			if ( root.contains( input ) ) {
				cleanup();
			}
		}
	};
}

/**
 * Display a known expression in a React-owned container without changing its source.
 * @param {Element} container Host.
 * @param {string}  source    Original source.
 * @return {() => void} Cleanup.
 */
function display( container, source ) {
	if ( ! safeMathSource( source ) ) {
		return () => {};
	}
	const field = new MathfieldElement();
	field.readOnly = true;
	field.tabIndex = -1;
	field.mathVirtualKeyboardPolicy = 'manual';
	field.className = 'ohmylms-math-display';
	field.setAttribute( 'aria-label', source );
	container.append( field );
	const latex = templateLatex( source ).latex;
	field.setValue( latex, {
		format: /[\\{}]/.test( latex ) ? 'latex' : 'ascii-math',
		silenceNotifications: true,
	} );
	const fallback = container.querySelector( '[data-math-source]' );
	if ( fallback ) {
		fallback.hidden = true;
	}
	return () => {
		field.remove();
		if ( fallback ) {
			fallback.hidden = false;
		}
	};
}

window.OhMyLMSMath = {
	mountInput,
	renderContent,
	mount,
	display,
	authorContent,
	hydrateAuthor,
};
// Server-rendered quizzes, practice regions and reviews share the same marker renderer.
if ( window.ohmylmsMath.enabled ) {
	const cleanup = mount( document.body );
	window.addEventListener( 'pagehide', cleanup, { once: true } );
}
