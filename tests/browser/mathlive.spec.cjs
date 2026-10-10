const { test, expect } = require('@playwright/test');
test.beforeEach(async ({page})=>{page.on('pageerror',error=>console.log('PAGE ERROR:',error.stack));page.on('console',message=>{if(message.type()==='error')console.log('CONSOLE ERROR:',message.text());});});

test('real expression template synchronizes native POST, renders markers and grades on PHP', async ({page}) => {
 const requests=[]; page.on('request',request=>requests.push(request.url()));
 await page.goto('/fixture');
 await expect(page.locator('math-field.ohmylms-math-input')).toHaveCount(5);
 await expect(page.locator('#prose')).toContainText('Costs $5.');
 await expect(page.locator('#prose math-field')).toHaveCount(1);
 const answers=[String.raw`\frac{\sqrt{x^{2}+1}}{\frac{1}{2}}`,'2x+6','(x+1)(x-1)',String.raw`\frac{1}{2}`,'x=3'];
 // Use the pinned public value API, then emit the same input event as typing/paste.
 await page.evaluate(answers=>document.querySelectorAll('math-field.ohmylms-math-input').forEach((field,index)=>{field.value=answers[index];field.dispatchEvent(new Event('input',{bubbles:true}));}),answers);
 await expect(page.locator('input[name]').nth(0)).toHaveValue(answers[0]);
 await page.getByRole('button',{name:'Submit',exact:true}).click();
 const result=JSON.parse(await page.locator('body').innerText());
 expect(Object.values(result).every(grade=>grade.correct)).toBe(true);
 expect(requests.some(url=>url.includes('fonts/')&&url.endsWith('.woff2'))).toBe(true);
 expect(requests.every(url=>new URL(url).hostname==='127.0.0.1')).toBe(true);
});

test('restoration, locked random tokens, dynamic questions and cleanup', async ({page}) => {
 await page.goto('/fixture');
 await page.evaluate(()=>{
  const input=document.querySelector('input[name]');input.value='x^{12}';input.form.dispatchEvent(new CustomEvent('ohmylms:answer-restored',{detail:{questionId:1}}));
  const dynamic=document.querySelector('#dynamic');
  dynamic.innerHTML='<input class="ohmylms-expression-input" aria-label="Randomized equation" value="{{a}}x+{{b:+}}={{c}}">';
 });
 await expect(page.locator('math-field.ohmylms-math-input').first()).toHaveJSProperty('value','x^{12}');
 await expect(page.locator('#dynamic math-field')).toHaveCount(1);
 const source=await page.evaluate(()=>{
  const field=document.querySelector('#dynamic math-field');
  field.insert('+1');field.dispatchEvent(new Event('input',{bubbles:true}));
  return document.querySelector('#dynamic input').value;
 });
 expect(source).toContain('{{a}}');expect(source).toContain('{{b:+}}');expect(source).toContain('{{c}}');expect(source).not.toContain('placeholder');
 await page.evaluate(()=>{
  const input=document.querySelector('#dynamic input');
  const cleanup=window.OhMyLMSMath.mountInput(input);cleanup();
  window.OhMyLMSMath.mountInput(input);
 });
 await expect(page.locator('#dynamic math-field')).toHaveCount(1);
 await page.evaluate(()=>document.querySelector('#dynamic').replaceChildren());
 await expect(page.locator('#dynamic math-field')).toHaveCount(0);
});

test('unsupported expressions and wrong answer forms are rejected, plain fallback submits', async ({page})=>{
 await page.goto('/fixture?fallback=1');
 await expect(page.locator('math-field')).toHaveCount(0);
 const answers=[String.raw`\unknown{x}`,'2(x+3)','x^2-1','2/4','x=4'];
 for(let index=0;index<answers.length;index++) await page.locator('input[name]').nth(index).fill(answers[index]);
 await page.getByRole('button',{name:'Submit',exact:true}).click();
 const result=JSON.parse(await page.locator('body').innerText());
 expect(result['1'].reason).toBe('parse');
 expect(result['2'].reason).toBe('form');expect(result['3'].reason).toBe('form');expect(result['4'].reason).toBe('form');
 expect(Object.values(result).every(grade=>!grade.correct)).toBe(true);
});

test('keyboard input and mobile virtual keyboard remain accessible',async({browser})=>{
 const context=await browser.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true});
 const page=await context.newPage();await page.goto('http://127.0.0.1:8110/fixture');
 const field=page.locator('math-field.ohmylms-math-input').first();await field.click();await field.press('x');await field.press('+');await field.press('2');
 await expect(page.locator('input[name]').first()).toHaveValue('x+2');
 await expect.poll(()=>page.evaluate(()=>window.mathVirtualKeyboard.visible)).toBe(true);
 await expect(field).toHaveAttribute('aria-label','Your answer');
 await field.press('Tab');
 await context.close();
});

test('author content shows editable equations and serializes original markers on edits and reopen', async ({ page }) => {
 await page.goto('/fixture');
 const original = 'Solve [[ohmylms-math:latex:display]]{{b}}x={{a*b}}[[/ohmylms-math]] costs $5.';
 await page.evaluate(source => {
  const editor = document.createElement('div'); editor.id = 'author'; editor.contentEditable = 'true'; editor.setAttribute('aria-label', 'Question prompt'); editor.textContent = source;
  document.body.append(editor); window.OhMyLMSMath.hydrateAuthor(editor);
 }, original);
 await expect(page.locator('#author math-field')).toHaveCount(1);
 await expect(page.locator('#author')).not.toContainText('[[ohmylms-math:');
 expect(await page.evaluate(() => window.OhMyLMSMath.authorContent(document.querySelector('#author')))).toBe(original);
 const saved = await page.evaluate(() => {
  const editor = document.querySelector('#author'); const field = editor.querySelector('math-field');
  field.insert('+1'); field.dispatchEvent(new Event('input', { bubbles: true }));
  return window.OhMyLMSMath.authorContent(editor);
 });
 expect(saved).toContain('{{b}}'); expect(saved).toContain('{{a*b}}'); expect(saved).not.toContain('math-field'); expect(saved).not.toContain('placeholder');
 await page.evaluate(source => { const editor = document.querySelector('#author'); editor.innerHTML = source; window.OhMyLMSMath.hydrateAuthor(editor); }, saved);
 await expect(page.locator('#author math-field')).toHaveCount(1);
 expect(await page.evaluate(() => window.OhMyLMSMath.authorContent(document.querySelector('#author')))).toBe(saved);
});

test('template runtime and dynamic loader load MathLive only once', async ({ page }) => {
 const errors = []; const requests = [];
 page.on('pageerror', error => errors.push(error.message));
 page.on('request', request => { if (request.resourceType() === 'script' && request.url().endsWith('/math-runtime.js')) requests.push(request.url()); });
 await page.goto('/fixture?loader=1');
 await expect(page.locator('math-field.ohmylms-math-input')).toHaveCount(5);
 await page.locator('math-field.ohmylms-math-input').first().click();
 await page.locator('math-field.ohmylms-math-input').first().press('3');
 await expect(page.locator('input[name]').first()).toHaveValue('3');
 expect(requests).toHaveLength(1); expect(errors).toEqual([]);
});



