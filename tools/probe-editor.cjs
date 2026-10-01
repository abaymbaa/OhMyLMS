const {chromium}=require('@playwright/test');
const fs=require('node:fs');
const path=require('node:path');
(async()=>{
 const config=JSON.parse(fs.readFileSync(process.env.OHMYLMS_TEST_CREDENTIALS,'utf8'));
 const marker=path.join(config.site,'.source-assets');
 if(!fs.existsSync(marker))throw Error('Requires opted-in disposable site');
 const browser=await chromium.launch({channel:'msedge'});
 const page=await browser.newPage();let errors=[];
 page.on('pageerror',e=>errors.push(e.stack));
 try{
  await page.goto('http://127.0.0.1:8099/wp-login.php');await page.locator('#user_login').fill(config.username);await page.locator('#user_pass').fill(config.password);await page.locator('#wp-submit').click();await page.waitForURL(/wp-admin/);
  await page.goto('http://127.0.0.1:8099/wp-admin/admin.php?page=ohmylms');
  const lesson=await page.evaluate(()=>wp.apiFetch({path:'/ohmylms/v1/lessons',method:'POST',data:{name:'Editor baseline probe',type:'text',status:'draft'}}));
  try{
   for(const source of [false,true]){
    if(source)fs.renameSync(marker+'.probe',marker);else fs.renameSync(marker,marker+'.probe');
    errors=[];
    await page.goto(`http://127.0.0.1:8099/wp-admin/admin.php?page=ohmylms&probe=${source}-${Date.now()}#/lesson-edit/${lesson.id}`);await page.waitForLoadState('networkidle');
    const loaded=await page.locator('script[src*="dist/admin/ohmylms.js"]').getAttribute('src');
    console.log(JSON.stringify({source,loaded,errors},null,2));
   }
  }finally{await page.evaluate(id=>wp.apiFetch({path:`/ohmylms/v1/lessons/${id}`,method:'DELETE'}),lesson.id);}
 }finally{if(fs.existsSync(marker+'.probe'))fs.renameSync(marker+'.probe',marker);await browser.close();}
})();
