const {test,expect}=require('@playwright/test');
const fs=require('node:fs');
const path=require('node:path');
test('gamification React panels mount and track direct routes',async({page})=>{
 const errors=[];page.on('pageerror',error=>errors.push(error.message));
 const credentials=JSON.parse(fs.readFileSync(process.env.OHMYLMS_TEST_CREDENTIALS,'utf8'));
 await page.goto('/wp-login.php');
 await page.locator('#user_login').fill(credentials.username);
 await page.locator('#user_pass').fill(credentials.password);
 await page.locator('#wp-submit').click();await page.waitForURL(/wp-admin/);
 // Exercise the current workspace builds even when the isolated PHP fixture uses a copied plugin.
 await page.route('**/build/sdk/extensions.js*',route=>route.fulfill({path:path.resolve('build/sdk/extensions.js'),contentType:'application/javascript'}));
 await page.route('**/build/assets/dist/admin/ohmylms.js*',route=>route.fulfill({path:path.resolve('build/assets/dist/admin/ohmylms.js'),contentType:'application/javascript'}));
 await page.goto('/wp-admin/admin.php?page=ohmylms#/gamification/point-settings');
 await expect.poll(()=>page.evaluate(()=>Object.keys(window.ohmylms?.extensions?.gamificationComponents||{}).length)).toBe(13);
 for(const [key,label] of [['point-settings','Bonus Point'],['badge-settings','Achievement Badges'],['level-settings','Learner Levels'],['reward-settings','Reward'],['leaderboard-settings','Leaderboard']]){
   await page.goto('/wp-admin/admin.php?page=ohmylms#/gamification/'+key);
   await expect(page.getByRole('tab',{name:label,exact:true})).toHaveAttribute('aria-selected','true');
 }
 await page.getByRole('tab',{name:'Bonus Point',exact:true}).click();
 await expect(page).toHaveURL(/gamification\/point-settings/);
 expect(errors).toEqual([]);
});
