import traverseModule from '@babel/traverse';
import {parseExpression} from '@babel/parser';
const traverse=traverseModule.default||traverseModule;
/** The installed vendor bundle contains CJS and ESM copies of prosemirror-state.
 * Share the existing editor's CJS instance while retaining ESM export names.
 * This fixes duplicate PluginKey generators, not by suppressing errors.
 * The untouched recovered factories remain available to the parity build.
 */
export function adaptVendors(ast){
 let hits=0;
 traverse(ast,{ObjectProperty(p){
  if(String(p.node.key.value)!=='42845'||!['ArrowFunctionExpression','FunctionExpression'].includes(p.node.value.type))return;
  p.node.value=parseExpression(`(module,exports,require)=>{
   const state=require(37820);
   require.d(exports,{$t:()=>state.EditorState,LN:()=>state.Selection,U3:()=>state.TextSelection,
    hs:()=>state.PluginKey,i5:()=>state.AllSelection,k_:()=>state.Plugin,nh:()=>state.NodeSelection});
  }`);
  hits++;p.skip();
 }});
 if(hits!==1)throw new Error('ProseMirror state adapter expected one factory; found '+hits);
 return {proseMirrorState:hits};
}
