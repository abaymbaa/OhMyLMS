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
      if (name === 'Cambridge') {
        for (let index = 0; index < 12; index++) {
          const extra = await api(page, 'POST', `curriculum/items/${id}/syllabus/groups/${group.group_id}/skills`, { name: 'Extra objective ' + tag + ' ' + index, code: 'X' + index }); terms.push(extra.term_id);
        }
      }
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
    const compactColumn = workspace.locator('.ohmylms-comparison-column').first();
    await expect(compactColumn.getByRole('button', { name: 'Filters', exact: true })).toHaveAttribute('aria-expanded', 'false');
    await expect(compactColumn.getByLabel('Category / tier', { exact: true })).toBeHidden();
    await compactColumn.getByRole('button', { name: 'Filters', exact: true }).click();
    await compactColumn.getByLabel('Mapping status', { exact: true }).selectOption('unmapped');
    await expect(compactColumn.getByRole('button', { name: 'Filters (1)', exact: true })).toBeVisible();
    await compactColumn.getByRole('button', { name: 'Filters (1)', exact: true }).click();
    await expect(compactColumn.getByRole('button', { name: 'Clear filter: Unmapped', exact: true })).toBeVisible();
    await compactColumn.getByRole('button', { name: 'Clear filters', exact: true }).click();
    await expect(compactColumn.getByRole('button', { name: 'Filters', exact: true })).toBeVisible();
    await expect(compactColumn.locator('.ohmylms-comparison-objective')).toHaveCount(13);
    const fixedHeader = await compactColumn.locator('header').boundingBox();
    const scrolled = await compactColumn.getByRole('region', { name: 'Scrollable skills list', exact: true }).evaluate(list => { list.scrollTop = list.scrollHeight; return list.scrollTop; });
    expect(scrolled).toBeGreaterThan(0);
    expect((await compactColumn.locator('header').boundingBox()).y).toBe(fixedHeader.y);
    await compactColumn.getByRole('region', { name: 'Scrollable skills list', exact: true }).evaluate(list => { list.scrollTop = 0; });
    await compactColumn.screenshot({ path: 'test-results/compact-syllabus-column.png' });
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
    await expect(workspace.getByLabel('New curriculum name', { exact: true })).toHaveValue('Roadmap');
    await workspace.getByLabel('New curriculum name', { exact: true }).fill('Roadmap ' + tag);
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
    await expect(page.locator('.ohmylms-cur-tree > li').first()).toContainText('Roadmap ' + tag);
    await page.getByRole('button', { name: 'Create Roadmap', exact: true }).click();
    await page.getByRole('checkbox', { name: 'Include Cambridge ' + tag + ' in Roadmap', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Include Mongolia ' + tag + ' in Roadmap', exact: true }).check();
    await page.getByLabel('New Roadmap name', { exact: true }).fill('Selected syllabus roadmap ' + tag);
    await page.getByRole('button', { name: 'Save Roadmap', exact: true }).click();
    await expect(workspace.getByRole('heading', { name: 'Selected syllabus roadmap ' + tag, exact: true })).toBeVisible();
    const sourceRoadmapId = Number(new URLSearchParams((new URL(page.url())).hash.split('?')[1]).get('roadmap')); items.push(sourceRoadmapId);
    await expect(workspace.locator('.ohmylms-comparison-column')).toHaveCount(2);
    await expect(workspace.locator('.ohmylms-roadmap-steps > li')).toHaveCount(1);
    await workspace.getByRole('button', { name: 'Roadmap settings', exact: true }).click();
    await workspace.getByLabel('Roadmap name', { exact: true }).fill('Edited roadmap ' + tag);
    await workspace.getByRole('button', { name: 'Remove source column', exact: true }).last().click();
    await workspace.getByRole('button', { name: 'Save Roadmap', exact: true }).click();
    await expect(workspace.getByText('Roadmap saved.', { exact: true })).toBeVisible();
    const outline = await api(page, 'GET', `curriculum/items/${sourceRoadmapId}/syllabus`);
    expect(outline.roadmap_sources.map(source => source.id)).toEqual([items[0]]);
    await page.goto('/wp-admin/admin.php?page=ohmylms#/content-hub/curriculum');
    await page.getByRole('button', { name: 'Edit Edited roadmap ' + tag, exact: true }).click();
    await workspace.getByRole('button', { name: 'Roadmap settings', exact: true }).click();
    await expect(workspace.getByLabel('Roadmap name', { exact: true })).toHaveValue('Edited roadmap ' + tag);
    await expect(workspace.locator('.ohmylms-comparison-column')).toHaveCount(2);
    await workspace.getByRole('button', { name: 'Add syllabus or roadmap', exact: true }).click();
    await workspace.getByLabel('Source 2 / version', { exact: true }).selectOption(String(items[2]));
    await workspace.getByRole('button', { name: 'Save Roadmap', exact: true }).click();
    await expect(workspace.getByText('Roadmap saved.', { exact: true })).toBeVisible();
    expect(problems).toEqual([]);
  } finally {
    for (const id of items) { const current = await api(page, 'GET', `curriculum/items/${id}`).catch(() => null); await api(page, 'DELETE', `curriculum/items/${id}`, { children: 'delete', confirm: true }).catch(() => null); if(current?.item?.course_id) await api(page, 'DELETE', `courses/${current.item.course_id}`).catch(() => null); }
    for (const id of terms) if(id) await api(page, 'DELETE', `skills/${id}`).catch(() => null);
    for (const id of posts) await api(page, 'DELETE', `lessons/${id}`).catch(() => null);
  }
});

test('create a roadmap before mapping and then save shared steps in its comparison editor', async ({ page }) => {
  const { username, password } = config();
  await page.goto('/wp-login.php'); await page.locator('#user_login').fill(username); await page.locator('#user_pass').fill(password); await page.locator('#wp-submit').click();
  await page.waitForURL(url => !url.pathname.endsWith('wp-login.php'));
  await page.goto('/wp-admin/admin.php?page=ohmylms'); await page.waitForFunction(() => window.wp?.apiFetch);
  const items = []; const terms = []; const tag = Date.now().toString(36);
  try {
    const source = await api(page, 'POST', 'curriculum/items', { name: 'Unmapped source ' + tag, is_syllabus: true }); items.push(source.item.id);
    const group = await api(page, 'POST', `curriculum/items/${source.item.id}/syllabus/groups`, { name: 'Algebra' });
    const objective = await api(page, 'POST', `curriculum/items/${source.item.id}/syllabus/groups/${group.group_id}/skills`, { name: 'Unmapped equation ' + tag, code: 'U1' }); terms.push(objective.term_id);
    const extra = await api(page, 'POST', `curriculum/items/${source.item.id}/syllabus/groups/${group.group_id}/skills`, { name: 'Other objective ' + tag, code: 'U2' }); terms.push(extra.term_id);
    await page.goto('/wp-admin/admin.php?page=ohmylms#/content-hub/curriculum');
    await page.getByRole('button', { name: 'Create Roadmap', exact: true }).click();
    await page.getByRole('checkbox', { name: 'Include Unmapped source ' + tag + ' in Roadmap', exact: true }).check();
    await page.getByLabel('New Roadmap name', { exact: true }).fill('Map later ' + tag);
    await page.getByRole('button', { name: 'Save Roadmap', exact: true }).click();
    const workspace = page.locator('.ohmylms-comparison');
    await expect(workspace.getByRole('heading', { name: 'Map later ' + tag, exact: true })).toBeVisible();
    const id = Number(new URLSearchParams((new URL(page.url())).hash.split('?')[1]).get('roadmap')); items.push(id);
    await expect(workspace.getByText('No shared skills found. Use Add shared skill to create one.', { exact: true })).toBeVisible();
    await expect(workspace.getByLabel('Roadmap name', { exact: true })).toBeHidden();
    await workspace.getByRole('button', { name: 'Add shared skill', exact: true }).click();
    await workspace.getByLabel('Assessable ability', { exact: true }).fill('New shared equation ' + tag);
    await workspace.getByRole('button', { name: 'Save shared skill', exact: true }).click();
    await expect(workspace.getByRole('button', { name: 'New shared equation ' + tag, exact: true })).toBeVisible();
    const created = await api(page, 'GET', `syllabus-comparison/shared-skills?search=${tag}`);
    const sharedId = created.items[0].id; terms.push(sharedId);
    await workspace.locator('.ohmylms-comparison-column').getByRole('checkbox').first().check();
    await workspace.getByRole('button', { name: 'Save proposed mappings', exact: true }).click();
    await expect(workspace.getByText(/Mappings saved./).first()).toBeVisible();
    await workspace.getByRole('button', { name: 'Roadmap settings', exact: true }).click();
    await workspace.getByRole('button', { name: 'Add chosen skill to roadmap', exact: true }).click();
    await workspace.getByLabel('New shared skill folder', { exact: true }).fill('Algebra ' + tag);
    await workspace.getByRole('button', { name: 'Add shared skill folder', exact: true }).click();
    const assignment = workspace.getByLabel('Folder for New shared equation ' + tag, { exact: true });
    await assignment.selectOption({ label: 'Algebra ' + tag });
    await workspace.getByRole('button', { name: 'Save Roadmap', exact: true }).click();
    await expect(workspace.getByText('Roadmap saved.', { exact: true })).toBeVisible();
    await page.evaluate(id => window.sessionStorage.setItem(`ohmylms-comparison-skill-${id}`, JSON.stringify({ name: 'Unsaved hidden editor draft' })), sharedId);
    await page.reload();
    await expect(workspace.getByRole('button', { name: 'New shared equation ' + tag, exact: true })).toBeVisible();
    await workspace.getByRole('button', { name: 'Roadmap settings', exact: true }).click();
    await expect(workspace.locator('.ohmylms-roadmap-steps > li')).toHaveCount(1);
    await expect(workspace.getByLabel('Roadmap name', { exact: true })).toHaveValue('Map later ' + tag);
    await expect(workspace.getByLabel('Folder for New shared equation ' + tag, { exact: true }).locator('option:checked')).toHaveText('Algebra ' + tag);
    await workspace.getByRole('tab', { name: 'Shared skills and linked objectives', exact: true }).click();
    await workspace.getByRole('button', { name: 'New shared equation ' + tag, exact: true }).click();
    await expect(workspace.locator('.ohmylms-comparison-column .ohmylms-comparison-objective')).toHaveCount(2);
    await expect(workspace.locator('.ohmylms-comparison-column .is-connected')).toHaveCount(1);
    await expect(workspace.locator('.ohmylms-comparison-column .is-unrelated')).toHaveCount(1);
    await expect(workspace.locator('.ohmylms-mapping-connections path.is-equivalent')).toHaveCount(1);
    await workspace.getByRole('button', { name: 'Show all syllabus objectives', exact: true }).click();
    await expect(workspace.locator('.ohmylms-comparison-column .ohmylms-comparison-objective')).toHaveCount(2);
    await workspace.getByRole('button', { name: 'New shared equation ' + tag, exact: true }).click();
    await workspace.getByText('Selected skill details', { exact: true }).click();
    await expect(workspace.getByRole('heading', { name: 'Linked syllabus objectives', exact: true })).toBeVisible();
    await expect(workspace.getByText('Unmapped equation ' + tag, { exact: false }).first()).toBeVisible();
    const sourceColumn = workspace.locator('.ohmylms-comparison-column').first();
    await sourceColumn.getByRole('checkbox').nth(0).check(); await sourceColumn.getByRole('checkbox').nth(1).check();
    await workspace.getByLabel('Relationship', { exact: true }).selectOption('combined');
    await expect(workspace.locator('.ohmylms-mapping-connections path.is-combined.is-pending')).toHaveCount(1);
    await workspace.getByRole('button', { name: 'Save proposed mappings', exact: true }).click();
    await expect(sourceColumn.locator('.is-connected.is-combined')).toHaveCount(2);
    await expect(workspace.locator('.ohmylms-mapping-connections path.is-combined:not(.is-pending)')).toHaveCount(1);
    await sourceColumn.getByRole('button', { name: new RegExp('New shared equation ' + tag + '.*Required together') }).first().click();
    await expect(workspace.getByText('2 selected objectives', { exact: true })).toBeVisible();
    await workspace.getByRole('button', { name: 'Remove combined group', exact: true }).click();
    await expect(sourceColumn.locator('.is-connected')).toHaveCount(0);
    await workspace.getByRole('tab', { name: 'Roadmap as syllabus', exact: true }).click();
    await expect(workspace.locator('.ohmylms-comparison-column')).toHaveCount(2);
    const roadmapColumn = workspace.locator('.ohmylms-comparison-column').first();
    await expect(roadmapColumn.getByRole('heading', { name: 'Map later ' + tag, exact: true })).toBeVisible();
    await roadmapColumn.getByRole('button', { name: 'Filters', exact: true }).click();
    await roadmapColumn.getByLabel('Shared skill folder', { exact: true }).selectOption({ label: 'Algebra ' + tag });
    await expect(roadmapColumn.getByText('Reusable roadmap skill: uses its own content and mastery directly.')).toBeVisible();
    await expect(workspace.getByLabel('Assessable ability', { exact: true })).toBeHidden();
    await workspace.getByRole('tab', { name: 'Create shared skill', exact: true }).click();
    await expect(workspace.getByLabel('Assessable ability', { exact: true })).toHaveValue('');
    await expect(workspace.getByLabel('Roadmap name', { exact: true })).toBeHidden();
  } finally {
    for (const id of items) { const current = await api(page, 'GET', `curriculum/items/${id}`).catch(() => null); await api(page, 'DELETE', `curriculum/items/${id}`, { children: 'delete', confirm: true }).catch(() => null); if(current?.item?.course_id) await api(page, 'DELETE', `courses/${current.item.course_id}`).catch(() => null); }
    for (const id of terms) if(id) await api(page, 'DELETE', `skills/${id}`).catch(() => null);
  }
});

test('back to curriculum explains unsaved work and offers discard or cancel', async ({ page }) => {
  const { username, password } = config();
  await page.goto('/wp-login.php'); await page.locator('#user_login').fill(username); await page.locator('#user_pass').fill(password); await page.locator('#wp-submit').click();
  await page.waitForURL(url => !url.pathname.endsWith('wp-login.php'));
  await page.goto('/wp-admin/admin.php?page=ohmylms'); await page.waitForFunction(() => window.wp?.apiFetch);
  const items = []; const terms = []; const tag = Date.now().toString(36);
  try {
    const source = await api(page, 'POST', 'curriculum/items', { name: 'Leave source ' + tag, is_syllabus: true }); items.push(source.item.id);
    const group = await api(page, 'POST', `curriculum/items/${source.item.id}/syllabus/groups`, { name: 'Algebra' });
    const objective = await api(page, 'POST', `curriculum/items/${source.item.id}/syllabus/groups/${group.group_id}/skills`, { name: 'Leave equation ' + tag, code: 'B1' }); terms.push(objective.skill.term_id);
    await page.goto('/wp-admin/admin.php?page=ohmylms#/content-hub/curriculum');
    await page.getByRole('button', { name: 'Create Roadmap', exact: true }).click();
    await page.getByRole('checkbox', { name: 'Include Leave source ' + tag + ' in Roadmap', exact: true }).check();
    await page.getByLabel('New Roadmap name', { exact: true }).fill('Leave roadmap ' + tag);
    await page.getByRole('button', { name: 'Save Roadmap', exact: true }).click();
    const workspace = page.locator('.ohmylms-comparison');
    await expect(workspace.getByRole('heading', { name: 'Leave roadmap ' + tag, exact: true })).toBeVisible();
    const roadmapId = Number(new URLSearchParams((new URL(page.url())).hash.split('?')[1]).get('roadmap')); items.push(roadmapId);
    const compare = `/wp-admin/admin.php?page=ohmylms#/content-hub/curriculum/compare?roadmap=${roadmapId}`;
    const back = workspace.getByRole('link', { name: 'Back to curriculum', exact: true });
    const leave = workspace.locator('.ohmylms-comparison-leave');
    const leaveHere = async () => { await back.click(); };
    const returnToComparison = async () => { await page.goto(compare); await expect(workspace.getByRole('heading', { name: 'Leave roadmap ' + tag, exact: true })).toBeVisible(); };

    // Nothing unsaved: a plain link that just goes back.
    await leaveHere();
    await expect(page).toHaveURL(/#\/content-hub\/curriculum$/);
    await returnToComparison();

    // An unsaved mapping proposal: the link stays usable, says why, and Cancel keeps the work.
    await workspace.locator('.ohmylms-comparison-column').getByRole('checkbox').first().check();
    await expect(workspace.getByText('1 selected objectives', { exact: true })).toBeVisible();
    await leaveHere();
    await expect(leave).toContainText('Leave without saving?');
    await expect(leave).toContainText('1 objective is selected in a mapping proposal that has not been saved.');
    await expect(page).toHaveURL(/compare\?roadmap=/);
    await expect(leave.getByRole('button', { name: 'Cancel', exact: true })).toBeFocused();
    await leave.getByRole('button', { name: 'Cancel', exact: true }).click();
    await expect(leave).toBeHidden();
    await expect(workspace.getByText('1 selected objectives', { exact: true })).toBeVisible();

    // Discard drops the proposal and its saved draft, then goes back.
    await leaveHere();
    await leave.getByRole('button', { name: 'Discard changes and go back', exact: true }).click();
    await expect(page).toHaveURL(/#\/content-hub\/curriculum$/);
    await returnToComparison();
    expect(await page.evaluate(id => JSON.parse(window.sessionStorage.getItem(`ohmylms-comparison-roadmap-${id}`) || '{}').selected, roadmapId)).toEqual([]);

    // Unsaved shared skill edits are named too, and Discard clears that draft.
    await workspace.getByRole('button', { name: 'Add shared skill', exact: true }).click();
    await workspace.getByLabel('Assessable ability', { exact: true }).fill('Unsaved skill ' + tag);
    await leaveHere();
    await expect(leave).toContainText('You have unsaved edits to a shared skill.');
    await leave.getByRole('button', { name: 'Discard changes and go back', exact: true }).click();
    await expect(page).toHaveURL(/#\/content-hub\/curriculum$/);
    await returnToComparison();
    await workspace.getByRole('button', { name: 'Add shared skill', exact: true }).click();
    await expect(workspace.getByLabel('Assessable ability', { exact: true })).toHaveValue('');
  } finally {
    for (const id of items) { const current = await api(page, 'GET', `curriculum/items/${id}`).catch(() => null); await api(page, 'DELETE', `curriculum/items/${id}`, { children: 'delete', confirm: true }).catch(() => null); if(current?.item?.course_id) await api(page, 'DELETE', `courses/${current.item.course_id}`).catch(() => null); }
    for (const id of terms) if(id) await api(page, 'DELETE', `skills/${id}`).catch(() => null);
  }
});
