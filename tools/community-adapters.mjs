import fs from 'node:fs';
import path from 'node:path';
import traverseModule from '@babel/traverse';
import {parseExpression} from '@babel/parser';
import * as t from '@babel/types';
const traverse=traverseModule.default||traverseModule;
const modules=JSON.parse(fs.readFileSync(path.resolve(import.meta.dirname,'../assets/src/features/communities/components.json')));
export function adaptCommunities(ast){
 const found=new Set();
 function replacement(module){found.add(module.name);return parseExpression(`window.ohmylms.extensions.communityComponents.${module.name}(()=>({${module.dependencies.join(',')}}))`);}
 traverse(ast,{
  VariableDeclarator(p){
   const owner=p.findParent(parent=>parent.isFunction());
   if(!owner?.parentPath.isObjectProperty()||String(owner.parentPath.node.key.value)!=='1841')return;
   const module=modules.find(m=>m.binding===p.node.id.name);
   if(!module||!['FunctionExpression','ArrowFunctionExpression'].includes(p.node.init?.type))return;
   p.node.init=replacement(module);p.skip();
  },
  FunctionDeclaration(p){
   const owner=p.findParent(parent=>parent.isFunction());
   if(!owner?.parentPath.isObjectProperty()||String(owner.parentPath.node.key.value)!=='1841')return;
   const module=modules.find(m=>m.binding===p.node.id.name);if(!module)return;
   p.replaceWith(t.variableDeclaration('var',[t.variableDeclarator(t.identifier(module.binding),replacement(module))]));p.skip();
  }
 });
 if(found.size!==modules.length)throw Error('Missing community adapters: '+modules.filter(m=>!found.has(m.name)).map(m=>m.name));
 return {components:found.size};
}


