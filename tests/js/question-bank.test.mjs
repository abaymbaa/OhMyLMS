import test from 'node:test';
import assert from 'node:assert/strict';
import {cleanFilters,versionLabel,skillTree,flattenTree,createsCycle,normalizeSkillMap,setPrimarySkill,toggleSupportingSkill,selectableResults,appendLinkedQuestions} from '../../assets/src/features/question-bank/model.mjs';
import {searchBank,addQuestionsToQuiz,pinQuestion,approveQuestion} from '../../assets/src/features/question-bank/api.mjs';
test('filters drop empty values and API paths carry them',async()=>{
 assert.deepEqual(cleanFilters({search:'x',type:'',skill:0,bank:'0',secure:false}),{search:'x',skill:0,bank:'0'});
 let call;await searchBank({search:'frac',page:2},(args)=>{call=args;return Promise.resolve({});});
 assert.equal(call.path,'/ohmylms/v1/question-bank?search=frac&page=2');
 await addQuestionsToQuiz(4,[7,8],true,(args)=>{call=args;return Promise.resolve({});});
 assert.deepEqual(call,{path:'/ohmylms/v1/quiz/4/questions',method:'POST',data:{question_ids:[7,8],pin:true}});
 await pinQuestion(4,7,null,(args)=>{call=args;return Promise.resolve({});});
 assert.deepEqual(call.data,{version_id:0});
 await approveQuestion(7,undefined,(args)=>{call=args;return Promise.resolve({});});
 assert.deepEqual(call.data,{});
});
test('version labels distinguish draft, approved and newer drafts',()=>{
 assert.equal(versionLabel({version:2,approved_version_id:0}),'v2 · draft');
 assert.equal(versionLabel({version:2,approved_version_id:5,approved_is_current:true}),'v2 · approved');
 assert.equal(versionLabel({version:3,approved_version_id:5,approved_is_current:false}),'v3 · newer than approved');
});
test('skill tree nests children, flattens with depth and detects prerequisite cycles',()=>{
 const skills=[{id:1,name:'Number',parent:0,prerequisites:[]},{id:2,name:'Fractions',parent:1,prerequisites:[]},{id:3,name:'Equations',parent:0,prerequisites:[2]}];
 const flat=flattenTree(skillTree(skills));
 assert.deepEqual(flat.map(s=>[s.id,s.depth]),[[3,0],[1,0],[2,1]]);
 assert.equal(createsCycle(skills,2,3),true);
 assert.equal(createsCycle(skills,3,1),false);
 assert.equal(createsCycle(skills,2,2),true);
});
test('skill maps keep one primary per part and never duplicate it as supporting',()=>{
 let map=setPrimarySkill({},'p1',5);
 map=toggleSupportingSkill(map,'p1',6);map=toggleSupportingSkill(map,'p1',5);
 assert.deepEqual(map,{p1:{primary:5,supporting:[6]}});
 assert.deepEqual(toggleSupportingSkill(map,'p1',6),{p1:{primary:5,supporting:[]}});
 assert.deepEqual(normalizeSkillMap({p1:{primary:0,supporting:[]},p2:{primary:'4',supporting:['4','7','7']}}),{p2:{primary:4,supporting:[7]}});
});
test('picker marks existing questions and appends without overwriting local edits',()=>{
 assert.deepEqual(selectableResults([{id:1},{id:2}],[2]).map(i=>i.alreadyInQuiz),[false,true]);
 const local=[{id:1,name:'Edited locally'}];
 const merged=appendLinkedQuestions(local,[{id:1,name:'Server'},{id:9,name:'From bank'}],[9,1]);
 assert.deepEqual(merged.map(q=>q.name),['Edited locally','From bank']);
});
