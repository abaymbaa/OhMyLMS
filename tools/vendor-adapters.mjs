import traverseModule from '@babel/traverse';
import { parseExpression } from '@babel/parser';
const traverse = traverseModule.default || traverseModule;
/** The installed vendor bundle contains CJS and ESM copies of prosemirror-state.
 * Share the existing editor's CJS instance while retaining ESM export names.
 * This fixes duplicate PluginKey generators, not by suppressing errors.
 * The untouched recovered factories remain available to the parity build.
 */
export function adaptVendors( ast ) {
	let hits = 0;
	let shortcuts = 0,
		preferences = 0,
		registrations = 0;
	traverse( ast, {
		ObjectProperty( p ) {
			if ( String( p.node.key.value ) === '55578' ) {
				p.node.value = parseExpression( `(module,exports,require)=>{
          const shortcuts=window.wp.keyboardShortcuts;
          require.d(exports,{Ee:()=>shortcuts.ShortcutProvider,M_:()=>shortcuts.store,wk:()=>shortcuts.useShortcut});
        }` );
				shortcuts++;
				p.skip();
				return;
			}
			if ( String( p.node.key.value ) === '87240' ) {
				p.traverse( {
					VariableDeclarator( q ) {
						if (
							q.node.id.name === 'x' &&
							q.node.init?.type === 'CallExpression' &&
							q.node.init.arguments[ 0 ]?.value ===
								'core/preferences'
						) {
							q.node.init = parseExpression(
								'window.wp.preferences.store'
							);
							preferences++;
						}
					},
					ExpressionStatement( q ) {
						const call = q.node.expression;
						if (
							call.type === 'CallExpression' &&
							call.arguments.length === 1 &&
							call.arguments[ 0 ].name === 'x' &&
							call.callee.type === 'SequenceExpression' &&
							call.callee.expressions.at( -1 )?.property?.name ===
								'register'
						) {
							q.remove();
							registrations++;
						}
					},
				} );
			}
			if (
				String( p.node.key.value ) !== '42845' ||
				! [ 'ArrowFunctionExpression', 'FunctionExpression' ].includes(
					p.node.value.type
				)
			)
				return;
			p.node.value = parseExpression( `(module,exports,require)=>{
   const state=require(37820);
   require.d(exports,{$t:()=>state.EditorState,LN:()=>state.Selection,U3:()=>state.TextSelection,
    hs:()=>state.PluginKey,i5:()=>state.AllSelection,k_:()=>state.Plugin,nh:()=>state.NodeSelection});
  }` );
			hits++;
			p.skip();
		},
	} );
	if ( hits !== 1 )
		throw new Error(
			'ProseMirror state adapter expected one factory; found ' + hits
		);
	if ( shortcuts !== 1 || preferences !== 1 || registrations !== 1 )
		throw new Error(
			'WordPress store adapters did not match expected factories'
		);
	return { proseMirrorState: hits, shortcuts, preferences };
}

// This utility only needs status strings, not the collaboration provider and Yjs.
export function adaptConnectionStatus( ast ) {
	let hits = 0;
	traverse( ast, {
		ObjectProperty( p ) {
			if ( String( p.node.key.value ) !== '45644' ) return;
			p.traverse( {
				CallExpression( q ) {
					if (
						q.node.callee.name === 'n' &&
						q.node.arguments[ 0 ]?.value === 74802
					) {
						q.replaceWith(
							parseExpression(
								'({WebSocketStatus:{Connected:"connected",Connecting:"connecting",Disconnected:"disconnected"}})'
							)
						);
						hits++;
					}
				},
			} );
		},
	} );
	if ( hits !== 1 )
		throw new Error(
			'Connection status adapter expected one provider import; found ' +
				hits
		);
	return { connectionStatus: hits };
}
