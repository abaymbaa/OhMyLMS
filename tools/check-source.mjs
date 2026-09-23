import fs from 'node:fs';
import path from 'node:path';
import {parse} from '@babel/parser';
const root=path.resolve(import.meta.dirname,'..');
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const files=walk(path.join(root,'assets/src')).filter(p=>/\.(m?js|jsx)$/.test(p));
for(const file of files) parse(fs.readFileSync(file,'utf8'),{sourceType:'unambiguous',plugins:['jsx'],allowReturnOutsideFunction:true});
console.log(`${files.length} JavaScript/JSX source files parse successfully.`);
