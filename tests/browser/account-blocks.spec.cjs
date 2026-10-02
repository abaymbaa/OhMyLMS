const { test, expect } = require('@playwright/test');
const fs = require('node:fs');

test('account blocks have selectable form previews in the page editor', async ({ page }) => {
  const credentials = JSON.parse(fs.readFileSync(process.env.OHMYLMS_TEST_CREDENTIALS, 'utf8'));
  await page.goto('/wp-login.php');
  await page.locator('#user_login').fill(credentials.username);
  await page.locator('#user_pass').fill(credentials.password);
  await page.locator('#wp-submit').click();
  await page.waitForURL(/wp-admin/);
  let draft;
  try {
    await page.goto('/wp-admin/post-new.php?post_type=page');
    await page.waitForFunction(() => window.wp?.blocks?.getBlockType('ohmylms/sign-in'));
    draft = await page.evaluate(() => wp.data.select('core/editor').getCurrentPostId());
    await page.evaluate(() => {
      wp.data.dispatch('core/block-editor').insertBlocks(
        ['student-registration', 'teacher-registration', 'parent-registration', 'sign-in']
          .map((kind) => wp.blocks.createBlock('ohmylms/' + kind)),
      );
    });
    const canvas = page.frameLocator('iframe[name="editor-canvas"]');
    for (const name of ['Student Registration', 'Teacher Registration', 'Parent Registration', 'Sign In']) {
      const title = canvas.getByText('OhMyLMS ' + name, { exact: true });
      await title.scrollIntoViewIfNeeded();
      await expect(title).toBeVisible();
    }
    await expect(canvas.locator('.ohmylms-school-preview')).toHaveCount(4);
  } finally {
    if (draft) {
      await page.evaluate(async (id) => {
        await wp.apiFetch({ path: '/wp/v2/pages/' + id + '?force=true', method: 'DELETE' });
      }, draft);
    }
  }
});
