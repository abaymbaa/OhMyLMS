import test from 'node:test';
import assert from 'node:assert/strict';
import {prepareQuizPayload,canLeaveQuestion,moveOption} from '../../assets/src/features/quizzes/model.mjs';
test('quiz save preserves persisted IDs and extension data without mutating editor state',()=>{
 const quiz={id:4,settings:{allow_attempts:3}};
 const questions=[{id:8,name:'Saved',settings:{type:'example-number',expected:42},questions:[{id:9,answer:'A'},{id:123,temp:true,answer:'B'}]},{id:124,temp:true,name:'New',questions:[]}];
 const before=JSON.stringify(questions);const payload=prepareQuizPayload(quiz,questions);
 assert.equal(payload.content[0].id,8);assert.equal(payload.content[0].questions[0].id,9);
 assert.equal(payload.content[0].questions[1].id,undefined);assert.equal(payload.content[1].id,undefined);
 assert.equal(payload.content[0].settings.expected,42);assert.equal(JSON.stringify(questions),before);
});
test('invalid current questions block navigation while an empty editor remains navigable',()=>{
 assert.equal(canLeaveQuestion(null,()=>({isValid:false})),true);
 assert.equal(canLeaveQuestion({settings:{type:'single-choice'}},()=>({isValid:false})),false);
});
test('option drag reorders and renumbers without mutating saved answer objects',()=>{
 const options=[Object.freeze({id:1,order_number:1}),Object.freeze({id:2,order_number:2})];
 assert.deepEqual(moveOption(options,0,1),[{id:2,order_number:1},{id:1,order_number:2}]);
 assert.equal(options[0].order_number,1);
 assert.equal(moveOption(options,null,1),options);
});
