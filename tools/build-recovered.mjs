import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {parse} from '@babel/parser';
import traverseModule from '@babel/traverse';
import generatorModule from '@babel/generator';
import {adaptApplication} from './application-adapters.mjs';
import {adaptVendors} from './vendor-adapters.mjs';
const traverse=traverseModule.default||traverseModule;
const generate=generatorModule.default||generatorModule;
const root=path.resolve(import.meta.dirname,'..');
const sourceRoot=path.join(root,'assets/src/recovered');
const manifest=JSON.parse(fs.readFileSync(path.join(sourceRoot,'manifest.json'),'utf8'));
const outputRoot=path.resolve(process.env.OMLMS_BUILD_DIR || path.join(root,process.argv.includes('--parity')?'build/parity':'build'));
const hashes={};
for(const asset of manifest.assets){
  const destination=path.join(outputRoot,asset.output);
  fs.mkdirSync(path.dirname(destination),{recursive:true});
  if(!asset.output.endsWith('.js')){
    fs.copyFileSync(path.join(sourceRoot,asset.source),destination);
  } else {
    const sources={};
    const load=name=>{const label='ohmylms-source:///'+name;const code=fs.readFileSync(path.join(sourceRoot,name),'utf8');sources[label]=code;return parse(code,{sourceType:'unambiguous',sourceFilename:label,allowReturnOutsideFunction:true});};
    const ast=load(asset.source);
    const replacements=new Map((asset.factories||[]).map(f=>{
      const factory=load(f.source).program.body.find(n=>n.type==='ExpressionStatement').expression;
      if(f.fragments)factory.body.body=f.fragments.flatMap(name=>load(name).program.body);
      return [f.marker,factory];
    }));
    traverse(ast,{Identifier(p){if(replacements.has(p.node.name)){p.replaceWith(replacements.get(p.node.name));p.skip();}}});
    if(process.argv.includes('--extensions')&&asset.output==='assets/dist/admin/creatorlms.js')console.log('Application adapters:',adaptApplication(ast));
    if(process.argv.includes('--extensions')&&asset.output==='assets/dist/vendors/vendors.js')console.log('Vendor adapters:',adaptVendors(ast));
    const result=generate(ast,{sourceMaps:true,comments:true,compact:false},sources);
    fs.writeFileSync(destination,result.code+'\n//# sourceMappingURL='+path.basename(destination)+'.map\n');
    fs.writeFileSync(destination+'.map',JSON.stringify(result.map));
  }
  hashes[asset.output]=crypto.createHash('sha256').update(fs.readFileSync(destination)).digest('hex');
}
fs.writeFileSync(path.join(outputRoot,'recovered-assets.json'),JSON.stringify(hashes,null,2)+'\n');
console.log(`Built ${Object.keys(hashes).length} assets solely from checked-in recovered source.`);
