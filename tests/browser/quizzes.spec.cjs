const {test,expect}=require('@playwright/test');
const fs=require('node:fs');
test.beforeEach(async({page})=>{
 const config=JSON.parse(fs.readFileSync(process.env.OHMYLMS_TEST_CREDENTIALS,'utf8'));
 await page.goto('/wp-login.php');await page.locator('#user_login').fill(config.username);await page.locator('#user_pass').fill(config.password);await page.locator('#wp-submit').click();await page.waitForURL(/wp-admin/);
 await page.goto('/wp-admin/admin.php?page=ohmylms');
});
test('source quiz editor saves and reopens every built-in question type',async({page},testInfo)=>{
 test.setTimeout(180000);
 const errors=[];page.on('pageerror',error=>errors.push(error.message));
 const fixture=await page.evaluate(async()=>{
  const quiz=await wp.apiFetch({path:'/ohmylms/v1/quiz',method:'POST',data:{name:'Source quiz fixture',status:'draft'}});
  const questions=[];
  for(const type of ['multiple-choice','single-choice','true-false','short-text','long-text','statement','fill-in-the-blank','reorder','matching','example-number']){
   const options=['short-text','long-text'].includes(type)?[]:[{answer:type==='true-false'?'True':'Answer A',is_correct:1,order_number:0,matching_data:{label:'Match A'}},{answer:type==='true-false'?'False':'Answer B',is_correct:0,order_number:1,matching_data:{label:'Match B'}}];
   questions.push(await wp.apiFetch({path:'/ohmylms/v1/question',method:'POST',data:{quiz_id:quiz.id,name:`Fixture ${type}`,order_number:questions.length,settings:{type,expected:1,required:false,score:{enabled:true,value:1}},questions:options}}));
  }
  const loaded=await wp.apiFetch({path:`/ohmylms/v1/quiz/${quiz.id}`});
  return {quiz,questions:loaded.content};
 });
 try{
  await page.goto(`/wp-admin/admin.php?page=ohmylms#/quiz-edit/${fixture.quiz.id}`);
  await expect(page.getByPlaceholder('Enter Quiz Title')).toHaveValue('Source quiz fixture',{timeout:15000});
  expect(await page.evaluate(()=>Object.keys(window.ohmylms.extensions.quizComponents).length)).toBe(17);
  for(const question of fixture.questions){
   await page.evaluate(question=>{const actions=wp.data.dispatch('ohmylms/store');actions.setSelectedQuestionId(question.id);actions.setQuestion(question);},question);
   await expect(page.locator('.ohmylms-quiz-editor-page')).toBeVisible();
   expect(errors,question.settings.type).toEqual([]);
   if(question.settings.type==='example-number')await page.getByLabel('Expected number').fill('42');
  }
  // Return to a valid choice question before exercising the complete Save action.
  await page.evaluate(question=>{const actions=wp.data.dispatch('ohmylms/store');actions.setSelectedQuestionId(question.id);actions.setQuestion(question);},fixture.questions[0]);
  await page.locator('.ohmylms-quiz-option-item').first().locator('input[type="text"], textarea, [contenteditable="true"]').first().fill('Edited choice from React');
  await page.locator('.ohmylms-remove-option-btn').first().click();
  await expect(page.getByText('You must have at least 2 options')).toBeVisible();
  await page.locator('.ohmylms-add-option-btn').first().click();
  await expect(page.locator('.ohmylms-quiz-option-item')).toHaveCount(3);
  await page.getByPlaceholder('Option 3',{exact:true}).fill('Temporary third answer');
  await page.locator('.ohmylms-remove-option-btn').last().click();
  await expect(page.locator('.ohmylms-quiz-option-item')).toHaveCount(2);
  await page.getByPlaceholder('Enter Quiz Title').fill('Saved source quiz');
  const response=page.waitForResponse(r=>r.url().includes(`/quiz/${fixture.quiz.id}`)&&r.request().method()==='POST',{timeout:15000});
  await page.getByRole('button',{name:'Save',exact:true}).click();expect((await response).ok()).toBe(true);
  await page.reload();await expect(page.getByPlaceholder('Enter Quiz Title')).toHaveValue('Saved source quiz');
  const saved=await page.evaluate(id=>wp.apiFetch({path:`/ohmylms/v1/quiz/${id}`}),fixture.quiz.id);
  expect(saved.content).toHaveLength(10);
  expect(saved.content.map(question=>question.settings.type)).toEqual(fixture.questions.map(question=>question.settings.type));
  expect(saved.content[0].questions[0].answer).toBe('Edited choice from React');
  expect(Number(saved.content.find(question=>question.settings.type==='example-number').settings.expected)).toBe(42);
  await page.screenshot({path:testInfo.outputPath('quiz-source.png'),fullPage:true});expect(errors).toEqual([]);
 }finally{
  await testInfo.attach('quiz-errors',{body:JSON.stringify(errors),contentType:'application/json'});
  await page.evaluate(async fixture=>{for(const question of fixture.questions)await wp.apiFetch({path:`/ohmylms/v1/question/${question.id}`,method:'DELETE'});await wp.apiFetch({path:`/ohmylms/v1/quiz/${fixture.quiz.id}`,method:'DELETE'});},fixture);
 }
});
