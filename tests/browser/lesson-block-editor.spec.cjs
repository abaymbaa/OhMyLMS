const { test, expect } = require('@playwright/test');
const fs = require('node:fs');

test('lesson block content and integrated settings persist together', async ({ page }) => {
  const { username, password } = JSON.parse(
    fs.readFileSync(process.env.OHMYLMS_TEST_CREDENTIALS, 'utf8'),
  );
  await page.goto('/wp-login.php');
  await page.locator('#user_login').fill(username);
  await page.locator('#user_pass').fill(password);
  await page.locator('#wp-submit').click();
  await page.waitForURL((url) => !url.pathname.endsWith('wp-login.php'));
  await page.goto('/wp-admin/admin.php?page=ohmylms#/content-hub/lessons');
  await page.waitForFunction(() => window.wp?.apiFetch);
  const lesson = await page.evaluate(() =>
    wp.apiFetch({
      path: '/ohmylms/v1/lessons',
      method: 'POST',
      data: {
        name: 'Block workspace test',
        type: 'text',
        status: 'draft',
        description: '<!-- wp:paragraph --><p>Original paragraph.</p><!-- /wp:paragraph -->',
      },
    }),
  );
  try {
    await page.goto(`/wp-admin/admin.php?page=ohmylms#/lesson-edit/${lesson.id}`);
    const workspace = page.getByRole('region', { name: 'Lesson block editor', exact: true });
    await expect(workspace).toBeVisible();
    const paragraph = workspace.getByRole('document', { name: 'Block: Paragraph', exact: true });
    await paragraph.fill('Saved block paragraph.');
    await workspace.getByRole('tab', { name: 'Block', exact: true }).click();
    await expect(
      workspace
        .getByRole('tabpanel', { name: 'Block' })
        .getByRole('heading', { name: 'Paragraph', exact: true }),
    ).toBeVisible();
    await workspace.getByRole('tab', { name: 'Lesson', exact: true }).click();
    const lessonPanel = workspace.getByRole('tabpanel', { name: 'Lesson' });
    await expect(
      lessonPanel.getByRole('heading', { name: 'Visibility', exact: true }),
    ).toBeVisible();
    await expect(
      lessonPanel.getByRole('heading', { name: 'Inline question checks', exact: true }),
    ).toBeVisible();
    await lessonPanel.getByRole('checkbox').first().check();
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await expect
      .poll(async () =>
        page.evaluate((id) => wp.apiFetch({ path: `/ohmylms/v1/lessons/${id}` }), lesson.id),
      )
      .toMatchObject({
        description: expect.stringContaining('<!-- wp:paragraph -->'),
        preview_enable: true,
      });
    await page.reload();
    await expect(paragraph).toHaveText('Saved block paragraph.');
    await expect(lessonPanel.getByRole('checkbox').first()).toBeChecked();
    await workspace.getByRole('button', { name: /Settings$/, exact: false }).click();
    await expect(workspace.getByRole('complementary', { name: 'Editor settings' })).toHaveCount(0);
    await expect(paragraph).toBeVisible();
    await page.setViewportSize({ width: 640, height: 900 });
    await page.reload();
    await expect(paragraph).toBeVisible();
    await expect(workspace.getByRole('complementary', { name: 'Editor settings' })).toHaveCount(0);
    const canvas = workspace.locator('.ohmylms-lesson-block-canvas');
    const originalWidth = (await canvas.boundingBox()).width;
    await workspace.getByRole('button', { name: /Settings$/ }).click();
    await expect(workspace.getByRole('complementary', { name: 'Editor settings' })).toBeVisible();
    expect((await canvas.boundingBox()).width).toBe(originalWidth);
  } finally {
    await page.evaluate(
      (id) =>
        wp.apiFetch({
          path: '/ohmylms/v1/content-hub/lessons/trash',
          method: 'POST',
          data: { ids: [id] },
        }),
      lesson.id,
    );
  }
});
