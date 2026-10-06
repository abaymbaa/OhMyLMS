/**
 * Syllabuses in the Curriculum tab, in a real browser: any item can be turned into one, skill groups and
 * skills are managed inline, and a CSV file is mapped, checked and imported. Names are made up to
 * illustrate the shapes of real syllabuses; they are not syllabus definitions.
 * Needs the disposable site: OHMYLMS_TEST_CREDENTIALS (JSON), OHMYLMS_CHROMIUM_PATH (browser). Run with --workers=1.
 */
const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const admin = () => JSON.parse(fs.readFileSync(process.env.OHMYLMS_TEST_CREDENTIALS, 'utf8'));
async function login(page) {
  const { username, password } = admin();
  await page.goto('/wp-login.php');
  await page.locator('#user_login').fill(username);
  await page.locator('#user_pass').fill(password);
  await page.locator('#wp-submit').click();
  await page.waitForURL((url) => !url.pathname.endsWith('wp-login.php'));
}
const watch = (page) => {
  const problems = [];
  page.on('pageerror', (error) => problems.push(`pageerror: ${error.message}`));
  // The shipped admin vendor bundle logs these store messages on first load of any OhMyLMS admin page.
  const known =
    /favicon|Failed to load resource|Store "core\/(preferences|keyboard-shortcuts)" is already registered/;
  page.on('console', (message) => {
    if (message.type() === 'error' && !known.test(message.text()))
      problems.push(`console: ${message.text()}`);
  });
  return problems;
};
const api = (page, options) => page.evaluate((o) => wp.apiFetch(o), options);
// The page's own message area (WordPress also repeats each message in a hidden screen-reader region).
const notice = (page, text) =>
  page.locator('.ohmylms-cur-status .components-notice', { hasText: text }).first();
const created = { items: [], syllabuses: [] };
const tag = Math.random().toString(36).slice(2, 7);

async function makeItem(page, data) {
  const item = (await api(page, { path: '/ohmylms/v1/curriculum/items', method: 'POST', data }))
    .item;
  created.items.push(item.id);
  return item;
}
/**
 * Remove what a test made. Library skills are found in the library rather than in a syllabus outline, because a
 * test may have switched its syllabus off or deleted its groups: each syllabus's root skill is named after it
 * (and carries this run's tag), and the skills created for it are the root's children.
 */
async function cleanup(page) {
  const { skills } = await api(page, { path: '/ohmylms/v1/skills' }).catch(() => ({ skills: [] }));
  const roots = skills.filter((skill) => skill.parent === 0 && skill.name.includes(tag));
  const doomed = [
    ...skills.filter((skill) => roots.some((root) => root.id === skill.parent)),
    ...roots,
  ];
  for (const skill of doomed)
    await api(page, {
      path: `/ohmylms/v1/skills/${skill.id}`,
      method: 'DELETE',
      data: { force: true },
    }).catch(() => null);
  for (const id of [...created.items].reverse())
    await api(page, {
      path: `/ohmylms/v1/curriculum/items/${id}`,
      method: 'DELETE',
      data: { children: 'delete', confirm: true },
    }).catch(() => null);
  created.items.length = 0;
  created.syllabuses.length = 0;
}
async function openEditor(page, framework, subject) {
  await page.goto('/wp-admin/admin.php?page=ohmylms#/content-hub/curriculum');
  await page.reload();
  await expect(page.getByRole('button', { name: `Expand ${framework}` })).toBeVisible({
    timeout: 30000,
  });
  await page.getByRole('button', { name: `Expand ${framework}` }).click();
  await page.getByRole('button', { name: `Edit ${subject}`, exact: true }).click();
}

test.describe.configure({ mode: 'serial' });

test('any item becomes a syllabus; skill groups and skills are managed inline', async ({
  page,
}) => {
  const problems = watch(page);
  await login(page);
  await page.goto('/wp-admin/admin.php?page=ohmylms#/content-hub/curriculum');
  await expect(page.getByRole('heading', { name: 'Curriculum', exact: true })).toBeVisible({
    timeout: 30000,
  });
  try {
    const framework = await makeItem(page, {
      name: `Syl framework ${tag}`,
      item_type: 'framework',
    });
    const subject = await makeItem(page, {
      name: `Syl subject ${tag}`,
      item_type: 'subject',
      parent_id: framework.id,
    });
    created.syllabuses.push(subject.id);
    await openEditor(page, framework.name, subject.name);

    // Any item (here a "subject") becomes a syllabus with one click, and keeps its own type.
    const toggle = page.getByLabel('This item is a syllabus');
    const addChild = (name) => page.getByRole('button', { name: `Add child to ${name}` });
    await expect(toggle).not.toBeChecked();
    await expect(page.getByRole('region', { name: 'Syllabus content' })).toHaveCount(0);
    // An ordinary item can have children; once it is a syllabus the row no longer offers it (its topics are added in the syllabus).
    await expect(addChild(subject.name)).toBeVisible();
    await toggle.check();
    const panel = page.getByRole('region', { name: 'Syllabus content' });
    await expect(panel).toBeVisible({ timeout: 15000 });
    const row = page.locator('.ohmylms-cur-row', { hasText: subject.name }).first();
    await expect(row.locator('.ohmylms-cur-syllabus-badge')).toHaveText('Syllabus');
    await expect(row.locator('.ohmylms-cur-type')).toHaveText('Subject');
    await expect(panel.getByText('Nothing is in this syllabus yet.')).toBeVisible();
    await expect(addChild(subject.name)).toHaveCount(0);
    await expect(addChild(framework.name)).toBeVisible();

    // A topic is added from the syllabus itself; it is an ordinary item beneath it, so its row has Add child.
    await panel.getByRole('button', { name: 'Add content', exact: true }).click();
    const contentForm = panel.getByRole('form', { name: 'Add content' });
    await contentForm.getByRole('button', { name: 'Add content' }).click();
    await expect(contentForm.getByText('Enter a name.')).toBeVisible();
    await contentForm.getByLabel('Topic or chapter').fill('Number');
    await contentForm.getByLabel('Code (optional)').fill('1');
    await contentForm.getByRole('button', { name: 'Add content' }).click();
    await expect(
      panel.locator('.ohmylms-syl-content-head h4', { hasText: 'Number' }),
    ).toBeVisible();
    await expect(panel.getByText('No skill groups yet.')).toBeVisible();
    // Adding a topic opens its parent row, so the new topic is already listed in the tree.
    await expect(addChild('Number')).toBeVisible();
    await expect(addChild(subject.name)).toHaveCount(0);

    // A skill group, then two skills in it.
    await panel.getByRole('button', { name: 'Add skill group', exact: true }).click();
    const groupForm = panel.getByRole('form', { name: 'Add skill group' });
    await groupForm.getByLabel('Skill group name').fill('Types of number');
    await groupForm.getByLabel('Code (optional)').fill('C1.1');
    await groupForm.getByRole('button', { name: 'Add group' }).click();
    const head = panel.locator('.ohmylms-syl-group-head', { hasText: 'C1.1 · Types of number' });
    await expect(head).toBeVisible();
    await expect(head).toContainText('0 skills');
    const addSkill = async (name, code, notes = '') => {
      await head.getByRole('button', { name: /^Add skill to/ }).click();
      const form = panel.getByRole('form', { name: 'Add skill' });
      await form.getByLabel('Skill', { exact: true }).fill(name);
      await form.getByLabel('Code (optional)').fill(code);
      if (notes) await form.getByLabel('Notes or examples (optional)').fill(notes);
      await form.getByRole('button', { name: 'Add skill', exact: true }).click();
      await expect(panel.locator('.ohmylms-syl-skill-name', { hasText: name })).toBeVisible();
    };
    await addSkill('Identify natural numbers', 'C1.1.1', 'e.g. six billion');
    await addSkill('Identify prime numbers', 'C1.1.2');
    const names = () => panel.locator('.ohmylms-syl-skill-name').allInnerTexts();
    expect(await names()).toEqual(['Identify natural numbers', 'Identify prime numbers']);
    await expect(head).toContainText('2 skills');
    await expect(panel.getByText('e.g. six billion')).toBeVisible();
    await expect(row).toContainText('1 skill group · 2 skills in groups');

    // A code is unique in the syllabus: the server's refusal is shown and nothing is added.
    await head.getByRole('button', { name: /^Add skill to/ }).click();
    const dup = panel.getByRole('form', { name: 'Add skill' });
    await dup.getByLabel('Skill', { exact: true }).fill('Another');
    await dup.getByLabel('Code (optional)').fill('c1.1.1');
    await dup.getByRole('button', { name: 'Add skill', exact: true }).click();
    await expect(notice(page, /already uses the code/)).toBeVisible();
    await dup.getByRole('button', { name: 'Cancel' }).click();
    expect(await names()).toHaveLength(2);

    // Reorder from the skill's own form, then rename it.
    await panel.getByRole('button', { name: /^Edit skill C1\.1\.2/ }).click();
    const edit = panel.getByRole('form', { name: 'Edit skill' });
    await edit.getByRole('button', { name: /Move up/ }).click();
    await expect(edit).toBeVisible();
    await expect
      .poll(
        async () =>
          await panel
            .locator('.ohmylms-syl-skills > li')
            .evaluateAll((items) => items.findIndex((li) => li.querySelector('.ohmylms-syl-form'))),
      )
      .toBe(0);
    await edit.getByLabel('Skill', { exact: true }).fill('Identify primes');
    await edit.getByRole('button', { name: 'Save skill' }).click();
    await expect(panel.locator('.ohmylms-syl-skill-name').first()).toHaveText('Identify primes');
    expect(await names()).toEqual(['Identify primes', 'Identify natural numbers']);

    // Taking a skill out of a group keeps it in the library.
    await panel.getByRole('button', { name: /^Edit skill C1\.1\.2/ }).click();
    await panel
      .getByRole('form', { name: 'Edit skill' })
      .getByRole('button', { name: 'Remove from this group' })
      .click();
    await expect(head).toContainText('1 skill');
    const outline = await api(page, {
      path: `/ohmylms/v1/curriculum/items/${subject.id}/syllabus`,
    });
    const libraryTerms = await api(page, { path: `/ohmylms/v1/skills` });
    expect(libraryTerms.skills.some((skill) => skill.name === 'Identify primes')).toBe(true);
    expect(outline.totals).toEqual({ contents: 1, groups: 1, skills: 1 });

    // A syllabus that still has a skill group cannot be switched back.
    await toggle.click();
    await expect(notice(page, /still has skill groups/)).toBeVisible();
    await expect(toggle).toBeChecked();

    // Deleting the group asks first and leaves its skill in the library.
    await head.getByRole('button', { name: /^Edit skill group/ }).click();
    await panel
      .getByRole('form', { name: 'Edit skill group' })
      .getByRole('button', { name: /^Delete skill group/ })
      .click();
    await expect(
      panel.getByText(/stays in the skill library but leaves the syllabus outline/),
    ).toBeVisible();
    await panel.getByRole('button', { name: 'Delete group' }).click();
    await expect(panel.locator('.ohmylms-syl-group')).toHaveCount(0);
    await expect(
      page.locator('.ohmylms-cur-row', { hasText: subject.name }).first(),
    ).not.toContainText('skill group');
    await toggle.uncheck();
    await expect(page.getByRole('region', { name: 'Syllabus content' })).toHaveCount(0);
    await expect(addChild(subject.name)).toBeVisible();
    expect(problems).toEqual([]);
  } finally {
    await cleanup(page);
  }
});

test('a CSV file is mapped, checked and imported, and importing it again changes nothing', async ({
  page,
}, testInfo) => {
  const problems = watch(page);
  await login(page);
  await page.goto('/wp-admin/admin.php?page=ohmylms#/content-hub/curriculum');
  await expect(page.getByRole('heading', { name: 'Curriculum', exact: true })).toBeVisible({
    timeout: 30000,
  });
  // Semicolons, a quoted cell with a comma, Cyrillic text, maths symbols and merged-cell blanks.
  const csv = [
    'Chapter code;Chapter;Skill ID;Ref;Objective',
    '11.1;Квадрат тэгшитгэл;М11.1А1;М11.1А;"Графикийг зөв зурах, дараа нь шалгах"',
    ';;М11.1А2;М11.1А;Үргэлж эерэг байх нөхцөлийг (a > 0, D < 0) хэрэглэх.',
    ';;М11.1Б1;М11.1Б;Тэнцэтгэл бишийг шилжүүлэх',
    '11.2;Тэгшитгэлийн систем;М11.2А1;М11.2А;Шулууныг зурах',
  ].join('\r\n');
  const file = path.join(os.tmpdir(), `ohmylms-syllabus-${tag}.csv`);
  fs.writeFileSync(file, '﻿' + csv, 'utf8');
  const bad = path.join(os.tmpdir(), `ohmylms-syllabus-bad-${tag}.csv`);
  fs.writeFileSync(bad, 'Skill ID,Objective\r\nX9,\r\nМ11.1А1,Fine\r\n', 'utf8');
  try {
    const framework = await makeItem(page, {
      name: `Syl import framework ${tag}`,
      item_type: 'framework',
    });
    const subject = await makeItem(page, {
      name: `Syl import subject ${tag}`,
      item_type: 'subject',
      parent_id: framework.id,
      is_syllabus: true,
    });
    created.syllabuses.push(subject.id);
    await openEditor(page, framework.name, subject.name);
    const panel = page.getByRole('region', { name: 'Syllabus content' });
    await expect(panel).toBeVisible({ timeout: 15000 });

    // The template and the (empty) export: the template downloads, the export waits for something to export.
    await expect(panel.getByRole('button', { name: 'Export CSV' })).toBeDisabled();
    const [template] = await Promise.all([
      page.waitForEvent('download'),
      panel.getByRole('button', { name: 'Download template' }).click(),
    ]);
    expect(template.suggestedFilename()).toMatch(/-template\.csv$/);
    expect(fs.readFileSync(await template.path(), 'utf8')).toContain(
      'content_code,content,group_code,group,skill_code,skill,description',
    );

    // Choose the file: the delimiter and the columns are worked out, and the first rows are shown.
    await panel.getByRole('button', { name: 'Import CSV' }).click();
    const dialog = page.getByRole('dialog');
    await dialog.locator('input[type=file]').setInputFiles(file);
    await expect(dialog.getByText('Tell us what each column holds')).toBeVisible();
    const roles = await dialog
      .locator('.ohmylms-syl-map select')
      .evaluateAll((selects) => selects.map((select) => select.options[select.selectedIndex].text));
    expect(roles).toEqual([
      'Content code',
      'Content (topic or chapter)',
      'Skill code',
      'Skill group code',
      'Skill',
    ]);
    await expect(dialog.getByLabel('The first row holds column titles')).toBeChecked();
    await expect(dialog.locator('.ohmylms-syl-map tbody tr')).toHaveCount(4);
    await expect(dialog.getByText('Графикийг зөв зурах, дараа нь шалгах')).toBeVisible();

    // Without a skill column nothing can be checked.
    const skillSelect = dialog.locator('.ohmylms-syl-map select').nth(4);
    await skillSelect.selectOption('');
    await expect(dialog.getByRole('button', { name: 'Check the file' })).toBeDisabled();
    await expect(dialog.getByText('Choose which column holds the skill')).toBeVisible();
    await skillSelect.selectOption('skill');

    // The review shows what would change before anything is saved.
    await dialog.getByRole('button', { name: 'Check the file' }).click();
    await expect(dialog.getByText('Ready to import 4 rows')).toBeVisible({ timeout: 30000 });
    const report = (label) =>
      dialog
        .locator('.ohmylms-syl-report tbody tr', {
          has: page.getByRole('rowheader', { name: label, exact: true }),
        })
        .locator('td')
        .allInnerTexts();
    expect(await report('Contents')).toEqual(['2', '0', '–', '0']);
    expect(await report('Skill groups')).toEqual(['3', '0', '–', '0']);
    expect(await report('Skills')).toEqual(['4', '0', '0', '0']);
    expect(
      (await api(page, { path: `/ohmylms/v1/curriculum/items/${subject.id}/syllabus` })).totals
        .skills,
    ).toBe(0);
    await testInfo.attach('import-review', {
      body: await page.screenshot(),
      contentType: 'image/png',
    });

    await dialog.getByRole('button', { name: 'Import', exact: true }).click();
    await expect(dialog.getByText('Imported.')).toBeVisible({ timeout: 60000 });
    await dialog.getByRole('button', { name: 'Done' }).click();
    await expect(panel.locator('.ohmylms-syl-head .ohmylms-ext-muted')).toHaveText(
      '2 content items · 3 skill groups · 4 skills',
    );
    await expect(page.locator('.ohmylms-cur-row', { hasText: subject.name }).first()).toContainText(
      '3 skill groups · 4 skills in groups',
    );

    // Everything landed as the file said, including the quoted comma, the maths text and the filled-down cells.
    const outline = await api(page, {
      path: `/ohmylms/v1/curriculum/items/${subject.id}/syllabus`,
    });
    const first = outline.contents.find((content) => content.code === '11.1');
    expect(first.name).toBe('Квадрат тэгшитгэл');
    expect(first.groups.map((group) => group.name)).toEqual(['М11.1А', 'М11.1Б']);
    expect(first.groups[0].skills.map((skill) => skill.name)).toEqual([
      'Графикийг зөв зурах, дараа нь шалгах',
      'Үргэлж эерэг байх нөхцөлийг (a > 0, D < 0) хэрэглэх.',
    ]);
    expect(
      outline.contents.find((content) => content.code === '11.2').groups[0].skills[0].code,
    ).toBe('М11.2А1');
    await panel.getByRole('button', { name: 'Open all groups' }).click();
    await expect(
      panel.getByText('Үргэлж эерэг байх нөхцөлийг (a > 0, D < 0) хэрэглэх.'),
    ).toBeVisible();

    // The same file again has nothing to do.
    await panel.getByRole('button', { name: 'Import CSV' }).click();
    await page.getByRole('dialog').locator('input[type=file]').setInputFiles(file);
    await page.getByRole('dialog').getByRole('button', { name: 'Check the file' }).click();
    await expect(page.getByRole('dialog').getByText(/there is nothing to import/)).toBeVisible({
      timeout: 30000,
    });
    await expect(
      page.getByRole('dialog').getByRole('button', { name: 'Import', exact: true }),
    ).toBeDisabled();
    await page.getByRole('dialog').getByRole('button', { name: 'Back' }).click();

    // A file with a problem is refused with the row number, and nothing is imported.
    await page.getByRole('dialog').getByRole('button', { name: 'Choose another file' }).click();
    await page.getByRole('dialog').locator('input[type=file]').setInputFiles(bad);
    await page.getByRole('dialog').getByRole('button', { name: 'Check the file' }).click();
    await expect(
      page.getByRole('dialog').getByText(/Row 2: Skill code “X9” has no skill name/),
    ).toBeVisible({ timeout: 30000 });
    await expect(page.getByRole('dialog').getByText(/Nothing was imported/)).toBeVisible();
    await expect(
      page.getByRole('dialog').getByRole('button', { name: 'Import', exact: true }),
    ).toBeDisabled();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toHaveCount(0);

    // The export reads back as the same syllabus: file name, byte order mark for Excel, codes and text.
    const [exported] = await Promise.all([
      page.waitForEvent('download'),
      panel.getByRole('button', { name: 'Export CSV' }).click(),
    ]);
    expect(exported.suggestedFilename()).toMatch(/-export\.csv$/);
    const text = fs.readFileSync(await exported.path(), 'utf8');
    expect(text.charCodeAt(0)).toBe(0xfeff);
    expect(text).toContain('М11.1А2');
    expect(text).toContain('"Графикийг зөв зурах, дараа нь шалгах"');
    expect(problems).toEqual([]);
  } finally {
    fs.rmSync(file, { force: true });
    fs.rmSync(bad, { force: true });
    await cleanup(page);
  }
});
