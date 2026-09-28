import fs from 'node:fs';
import path from 'node:path';
import traverseModule from '@babel/traverse';
import {parseExpression} from '@babel/parser';
import * as t from '@babel/types';

const traverse=traverseModule.default||traverseModule;
const modules=JSON.parse(fs.readFileSync(path.resolve(import.meta.dirname,'../assets/src/features/emails/components.json')));

export function adaptEmails(ast){
 const found=new Set();
 function replacement(module){
  found.add(module.name);
  return parseExpression(`window.ohmylms.extensions.emailComponents.${module.name}(()=>({${module.dependencies.join(',')}}))`);
 }
 traverse(ast,{
  VariableDeclarator(path){
   const owner=path.findParent(parent=>parent.isFunction());
   if(!owner?.parentPath.isObjectProperty()||String(owner.parentPath.node.key.value)!=='1841')return;
   const module=modules.find(item=>item.binding===path.node.id.name);
   if(!module||!['FunctionExpression','ArrowFunctionExpression'].includes(path.node.init?.type))return;
   path.node.init=replacement(module);
   path.skip();
  },
  FunctionDeclaration(path){
   const owner=path.findParent(parent=>parent.isFunction());
   if(!owner?.parentPath.isObjectProperty()||String(owner.parentPath.node.key.value)!=='1841')return;
   const module=modules.find(item=>item.binding===path.node.id.name);
   if(!module)return;
   path.replaceWith(t.variableDeclaration('var',[t.variableDeclarator(t.identifier(module.binding),replacement(module))]));
   path.skip();
  }
 });
 if(found.size!==modules.length)throw Error('Missing email adapters: '+modules.filter(module=>!found.has(module.name)).map(module=>module.name));
 return {components:found.size};
}
