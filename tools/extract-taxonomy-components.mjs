/** One-time, scope-aware extraction. Never part of the production build. */
import fs from 'node:fs';
import path from 'node:path';
import {parse} from '@babel/parser';
import traverseModule from '@babel/traverse';
import generatorModule from '@babel/generator';
import * as t from '@babel/types';

const traverse=traverseModule.default||traverseModule;
const generate=generatorModule.default||generatorModule;
const root=path.resolve(import.meta.dirname,'..');
const source=path.join(root,'assets/src');
const manifest=JSON.parse(fs.readFileSync(path.join(source,'manifest.json')));
const factory=manifest.assets.find(asset=>asset.output==='assets/dist/admin/ohmylms.js').factories.find(item=>item.id==='1841');
const ast=parse(factory.fragments.map(file=>fs.readFileSync(path.join(source,file),'utf8')).join('\n'));
const declarations=new Map();
for(const statement of ast.program.body){
 if(t.isVariableDeclaration(statement))for(const declaration of statement.declarations)if(t.isIdentifier(declaration.id))declarations.set(declaration.id.name,declaration.init);
 if(t.isFunctionDeclaration(statement))declarations.set(statement.id.name,statement);
}
const unwrap=value=>{
 for(let index=0;index<6;index++){
  if(t.isFunctionExpression(value)||t.isArrowFunctionExpression(value)||t.isFunctionDeclaration(value))return value;
  if(t.isIdentifier(value))value=declarations.get(value.name);
  else if(t.isCallExpression(value))value=value.arguments[0];
  else break;
 }
 throw Error('Cannot resolve component');
};
const routeComponent=route=>{
 const routes=declarations.get('ioe');
 const entry=routes.elements.find(item=>t.isObjectExpression(item)&&item.properties.some(property=>t.isObjectProperty(property)&&property.key.name==='path'&&property.value.value===route));
 return entry.properties.find(property=>t.isObjectProperty(property)&&property.key.name==='element').value;
};
const components=[
 {binding:'xY',name:'TaxonomyModal',value:declarations.get('xY')},
 {binding:'route:/categories',name:'CategoriesPage',value:routeComponent('/categories')},
 {binding:'route:/tags',name:'TagsPage',value:routeComponent('/tags')},
];
const output=path.join(root,'assets/src/features/taxonomies');
if(fs.existsSync(path.join(output,'components.json'))&&!process.argv.includes('--replace-generated'))throw Error('Already extracted; edit the feature source directly.');
fs.mkdirSync(output,{recursive:true});
const dependencyNames={g:'ReactHooks',y:'WordPressData',b:'I18n',I:'Controls',T:'StoreModule',z:'Notifications',xY:'TaxonomyModal'};
const rows=[];
for(const component of components){
 const original=unwrap(component.value);
 const fn=t.functionExpression(null,original.params.map(param=>t.cloneNode(param,true)),t.cloneNode(original.body,true));
 const componentAst=t.file(t.program([t.expressionStatement(fn)]));
 traverse(componentAst,{CallExpression(call){if(t.isIdentifier(call.node.callee,{name:'h'})&&!call.scope.hasBinding('h'))call.replaceWith(t.identifier('React'));}});
 const dependencies=new Set();
 traverse(componentAst,{ReferencedIdentifier(identifier){if(!identifier.scope.hasBinding(identifier.node.name)&&(declarations.has(identifier.node.name)||identifier.node.name==='n'))dependencies.add(identifier.node.name);}});
 dependencies.add('React');
 const dependencyList=[...dependencies].sort();
 const dependencyDeclaration=t.variableDeclaration('const',[t.variableDeclarator(t.objectPattern(dependencyList.map(id=>t.objectProperty(t.identifier(id),t.identifier(id),false,true))),t.callExpression(t.identifier('readRuntime'),[]))]);
 const wrapper=t.functionDeclaration(t.identifier('create'+component.name),[t.identifier('readRuntime')],t.blockStatement([t.returnStatement(t.functionExpression(t.identifier(component.name),fn.params,t.blockStatement([dependencyDeclaration,...fn.body.body])))]));
 const result=t.file(t.program([t.exportNamedDeclaration(wrapper)]));
 traverse(result,{FunctionExpression(componentPath){
  if(componentPath.node.id?.name!==component.name)return;
  for(const [id,alias]of Object.entries(dependencyNames))if(dependencyList.includes(id)&&componentPath.scope.hasOwnBinding(id))componentPath.scope.rename(id,alias);
  if(componentPath.node.params.length===1&&t.isIdentifier(componentPath.node.params[0]))componentPath.scope.rename(componentPath.node.params[0].name,'props');
 }});
 const jsxName=node=>t.isStringLiteral(node)&&/^[a-z][\w-]*$/.test(node.value)?t.jsxIdentifier(node.value):t.isIdentifier(node)&&!/^[a-z]/.test(node.name)?t.jsxIdentifier(node.name):t.isMemberExpression(node)&&!node.computed&&t.isIdentifier(node.object)&&t.isIdentifier(node.property)?t.jsxMemberExpression(t.jsxIdentifier(node.object.name),t.jsxIdentifier(node.property.name)):null;
 traverse(result,{CallExpression:{exit(call){
  const node=call.node;if(!t.isMemberExpression(node.callee)||node.callee.property.name!=='createElement'||!t.isIdentifier(node.callee.object,{name:'React'}))return;
  const tag=jsxName(node.arguments[0]);if(!tag)return;const attributes=[];const props=node.arguments[1];
  if(t.isObjectExpression(props)){for(const property of props.properties){if(t.isSpreadElement(property)){attributes.push(t.jsxSpreadAttribute(property.argument));continue;}if(!t.isObjectProperty(property)||property.computed||!['Identifier','StringLiteral'].includes(property.key.type))return;attributes.push(t.jsxAttribute(t.jsxIdentifier(property.key.name??property.key.value),t.jsxExpressionContainer(property.value)));}}
  else if(props&&!t.isNullLiteral(props))attributes.push(t.jsxSpreadAttribute(props));
  const children=node.arguments.slice(2).map(child=>t.isJSXElement(child)?child:t.jsxExpressionContainer(child));
  call.replaceWith(t.jsxElement(t.jsxOpeningElement(tag,attributes,children.length===0),children.length?t.jsxClosingElement(t.cloneNode(tag)):null,children));
 }}});
 const file=component.name+'.jsx';
 fs.writeFileSync(path.join(output,file),'/** Reconstructed React source. Runtime dependencies are explicit in components.json. */\nimport {createElement} from "@wordpress/element";\n'+generate(result,{comments:true}).code+'\n');
 rows.push({binding:component.binding,name:component.name,file,dependencies:dependencyList});
}
fs.writeFileSync(path.join(output,'components.json'),JSON.stringify(rows,null,2)+'\n');
fs.writeFileSync(path.join(output,'index.js'),rows.map(row=>`import {create${row.name}} from './${row.name}';`).join('\n')+'\nexport const taxonomyComponents={'+rows.map(row=>`${row.name}:create${row.name}`).join(',')+'};\n');
console.log(`Extracted ${rows.length} named taxonomy React modules.`);
