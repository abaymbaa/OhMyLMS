import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { parse } from '@babel/parser';
import generatorModule from '@babel/generator';
import { adaptConnectionStatus, adaptVendors } from '../../tools/vendor-adapters.mjs';
const generate = generatorModule.default || generatorModule;
const factory = (folder, id) => fs.readFileSync(new URL(`../../assets/src/recovered/modules/dist/${folder}/0-${id}.js`, import.meta.url), 'utf8').trim().replace(/;$/, '');

test('connection labels preserve behavior without importing collaboration or Yjs', () => {
  const ast = parse(`({45644:${factory('admin/creatorlms',45644)}})`);
  adaptConnectionStatus(ast);
  const modules = vm.runInNewContext(generate(ast).code);
  const exports = {};
  modules[45644]({}, exports, () => { throw new Error('Unexpected provider import'); });
  for (const [value, label] of [['connected','Connected'],['connecting','Connecting...'],['disconnected','Disconnected'],['unknown','Connecting...']]) {
    assert.equal(exports.getConnectionText(value), label);
  }
});

test('shortcuts share the native WordPress store and hooks', () => {
  const ast = parse(`({${[42845,55578,87240].map(id=>`${id}:${factory('vendors/vendors',id)}`).join(',')}})`);
  adaptVendors(ast);
  const shortcuts = {store:{name:'core/keyboard-shortcuts'},ShortcutProvider(){},useShortcut(){}};
  const modules = vm.runInNewContext(generate(ast).code,{window:{wp:{keyboardShortcuts:shortcuts}}});
  const exports = {};
  modules[55578]({}, exports, {d(target, getters){for(const [name,get] of Object.entries(getters))Object.defineProperty(target,name,{get});}});
  assert.equal(exports.M_, shortcuts.store);
  assert.equal(exports.Ee, shortcuts.ShortcutProvider);
  assert.equal(exports.wk, shortcuts.useShortcut);
  const preferencesCode = generate(ast.program.body[0].expression.properties.find(p=>p.key.value===87240).value).code;
  assert.match(preferencesCode,/window\.wp\.preferences\.store/);
  assert.doesNotMatch(preferencesCode,/register\)\(x\)/);
});
