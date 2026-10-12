const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const config = () => JSON.parse(fs.readFileSync(process.env.OHMYLMS_TEST_CREDENTIALS, 'utf8'));
const api = (page, method, path, data) => page.evaluate(async ({ method, path, data }) => wp.apiFetch({ method, path: '/ohmylms/v1/' + path, data }), { method, path, data });

test('compare three sources, map reusable skill, rename, connect content and create roadmap', async ({ page }) => {
  const { username, password } = config();
  await page.goto('/wp-login.php'); await page.locator('#user_login').fill(username); await page.locator('#user_pass').fill(password); await page.locator('#wp-submit').click();
  await page.waitForURL(url => !url.pathname.endsWith('wp-login.php'));
  await page.goto('/wp-admin/admin.php?page=ohmylms');
  await page.waitForFunction(() => window.wp?.apiFetch);
  const items = []; const terms = []; const posts = []; const tag = Date.now().toString(36);
  const problems = []; page.on('pageerror', error => problems.push(error.message));
  try {
    for (const name of ['Cambridge', 'Mongolia', 'Exam']) {
      const response = await api(page, 'POST', 'curriculum/items', { name: name + ' ' + tag, is_syllabus: true, version: '2028–2030' }); const id = response.item.id; items.push(id);
      const group = await api(page, 'POST', `curriculum/items/${id}/syllabus/groups`, { name: 'Algebra' });
      const skill = await api(page, 'POST', `curriculum/items/${id}/syllabus/groups/${group.group_id}/skills`, { name: name + ' equation ' + tag, code: 'L1', description: 'Solve one variable linear equations.' });
      terms.push(skill.term_id);
    }
    await page.goto('/wp-admin/admin.php?page=ohmylms#/content-hub/curriculum/compare');
    const workspace = page.locator('.ohmylms-comparison'); await expect(workspace.getByRole('heading', { name: 'Shared skills', exact: true })).toBeVisible();
    const badNonce = await page.evaluate(async () => (await fetch('/?rest_route=/ohmylms/v1/syllabus-comparison/syllabuses', { credentials: 'same-origin', headers: { 'X-WP-Nonce': 'invalid' } })).status);
    expect(badNonce).toBe(403);
    await workspace.getByLabel('Source 1 / version', { exact: true }).selectOption(String(items[0]));
    await workspace.getByLabel('Source 2 / version', { exact: true }).selectOption(String(items[1]));
    await workspace.getByRole('button', { name: 'Add syllabus or roadmap', exact: true }).click();
    await workspace.getByLabel('Source 3 / version', { exact: true }).selectOption(String(items[2]));
    await expect(workspace.locator('.ohmylms-comparison-column')).toHaveCount(3);
    await expect(workspace.locator('.ohmylms-comparison-column').nth(2).getByRole('heading', { name: 'Exam ' + tag })).toBeVisible();
    await workspace.getByLabel('Assessable ability', { exact: true }).fill('Solve equations ' + tag);
    await workspace.getByLabel('Scope and limits', { exact: true }).fill('Solve one variable linear equations with rational coefficients.');
    await workspace.getByLabel('Subject topic', { exact: true }).fill('Algebra');
    await workspace.getByRole('button', { name: 'Save shared skill', exact: true }).click();
    await expect(workspace.getByText(/Stable skill ID:/)).toBeVisible();
    const shared = await api(page, 'GET', `syllabus-comparison/shared-skills?search=${tag}`); terms.push(shared.items[0].id);
    for (let i = 0; i < 3; i++) { await workspace.locator('.ohmylms-comparison-column').nth(i).getByRole('checkbox').first().check(); }
    await expect(workspace.getByText('3 selected objectives', { exact: true })).toBeVisible();
    await workspace.getByRole('button', { name: 'Save proposed mappings', exact: true }).click();
    await expect(workspace.getByText(/Mappings saved./).first()).toBeVisible();
    await workspace.getByLabel('Assessable ability', { exact: true }).fill('Renamed equations ' + tag);
    await workspace.getByRole('button', { name: 'Save shared skill', exact: true }).click();
    await expect(workspace.getByLabel('Shared skill', { exact: true })).toHaveValue(String(shared.items[0].id));
    const lesson = await api(page, 'POST', 'lessons', { name: 'Reusable equations lesson ' + tag, status: 'publish', type: 'text' }); posts.push(lesson.id);
    await workspace.getByRole('button', { name: 'Find content to connect', exact: true }).click();
    await workspace.getByLabel('Search content', { exact: true }).fill(tag);
    await expect(workspace.getByRole('link', { name: 'Reusable equations lesson ' + tag })).toBeVisible();
    await workspace.getByRole('button', { name: 'Connect', exact: true }).click();
    await expect(workspace.getByRole('button', { name: 'Disconnect', exact: true })).toBeVisible();
    await workspace.getByRole('button', { name: 'Add chosen skill to roadmap', exact: true }).click();
    await expect(workspace.getByLabel('New curriculum name', { exact: true })).toHaveValue('Shared Roadmaps');
    await workspace.getByLabel('New curriculum name', { exact: true }).fill('Shared Roadmaps ' + tag);
    await workspace.getByLabel('Grade or level (optional)', { exact: true }).fill('10');
    await workspace.getByRole('button', { name: 'Save as new curriculum', exact: true }).click();
    const roadmap = workspace.getByRole('link', { name: 'Open roadmap to arrange skills, add resources and publish' }); await expect(roadmap).toBeVisible();
    items.push(Number((await roadmap.getAttribute('href')).split('/').pop()));
    await expect(workspace.getByRole('link', { name: 'View curriculum list', exact: true })).toHaveAttribute('href', '#/content-hub/curriculum');
    await page.reload();
    await expect(workspace.getByLabel('Assessable ability', { exact: true })).toHaveValue('Renamed equations ' + tag);
    await expect(workspace.locator('.ohmylms-comparison-column')).toHaveCount(3);
    await page.screenshot({ path: 'test-results/shared-skills-workspace.png', fullPage: true });
    await page.goto('/wp-admin/admin.php?page=ohmylms#/content-hub/curriculum');
    await expect(page.locator('.ohmylms-cur-tree > li').first()).toContainText('Shared Roadmaps ' + tag);
    expect(problems).toEqual([]);
  } finally {
    for (const id of items) { const current = await api(page, 'GET', `curriculum/items/${id}`).catch(() => null); await api(page, 'DELETE', `curriculum/items/${id}`, { children: 'delete', confirm: true }).catch(() => null); if(current?.item?.course_id) await api(page, 'DELETE', `courses/${current.item.course_id}`).catch(() => null); }
    for (const id of terms) if(id) await api(page, 'DELETE', `skills/${id}`).catch(() => null);
    for (const id of posts) await api(page, 'DELETE', `lessons/${id}`).catch(() => null);
  }
});
