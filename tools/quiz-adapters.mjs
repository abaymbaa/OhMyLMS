import fs from 'node:fs';
import path from 'node:path';
import traverseModule from '@babel/traverse';
import {parseExpression} from '@babel/parser';
const traverse=traverseModule.default||traverseModule;
const modules=JSON.parse(fs.readFileSync(path.resolve(import.meta.dirname,'../assets/src/features/quizzes/components.json')));
export function adaptQuizzes(ast){
 const found=new Set();
 traverse(ast,{VariableDeclarator(p){
  const owner=p.findParent(parent=>parent.isFunction());
  if(!owner?.parentPath.isObjectProperty()||String(owner.parentPath.node.key.value)!=='1841')return;
  const module=modules.find(m=>m.binding===p.node.id.name);
  if(!module||!['FunctionExpression','ArrowFunctionExpression'].includes(p.node.init?.type))return;
  // Lazy dependency reads preserve the original shared-scope initialization order.
  p.node.init=parseExpression(`window.ohmylms.extensions.quizComponents.${module.name}(()=>({${module.dependencies.join(',')}}))`);
  found.add(module.name);p.skip();
 }});
 if(found.size!==modules.length)throw Error('Missing quiz adapters: '+modules.filter(m=>!found.has(m.name)).map(m=>m.name));
 return {components:found.size};
}
