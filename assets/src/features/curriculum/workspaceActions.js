import { __, _n, sprintf } from '@wordpress/i18n';
import * as api from './api.mjs';
import { siblingMove } from './model.mjs';
import { contentKey, groupKey, skillKey, stepAmongSiblings } from './workspace.mjs';

/**
 * Every change the workspace can make, each saved on the server first (see `useSyllabusWorkspace.run`).
 * They answer whether the change was saved. Topics are curriculum items and go through the item API (which
 * answers with the item tree only, so the outline is read again); chapters and skills go through the
 * syllabus API, which answers with the fresh outline.
 */
export function createActions({ ws, syllabusId, tree, items, select }) {
  const { run } = ws;
  const done = (response) => Boolean(response);

  return {
    // ---- Topics: curriculum items beneath the syllabus ----
    async addTopic(parentId, { name, code }, { open = true } = {}) {
      const response = await run(
        () => api.createItem({ parent_id: parentId, name, code, item_type: 'topic' }),
        (result) => sprintf(__('Added topic “%s”.', 'ohmylms'), result.item.name),
        { refresh: true },
      );
      if (open && response?.item) select(contentKey(response.item.id));
      return done(response);
    },
    async saveTopic(item, patch) {
      return done(
        await run(
          () => api.updateItem(item.id, { ...patch, expected_updated_at: item.updated_at }),
          null,
          { refresh: true },
        ),
      );
    },
    async stepTopic(item, direction) {
      const target = siblingMove(items, item.id, direction);
      if (!target) return false;
      return done(
        await run(
          () => api.moveItem(item.id, target.parentId, target.position),
          direction < 0 ? __('Moved up.', 'ohmylms') : __('Moved down.', 'ohmylms'),
          { refresh: true },
        ),
      );
    },
    async moveTopic(item, parentId) {
      return done(
        await run(
          () => api.moveItem(item.id, parentId),
          sprintf(__('Moved “%s”.', 'ohmylms'), item.name),
          { refresh: true },
        ),
      );
    },
    async deleteTopic(item, options) {
      return done(
        await run(
          () => api.deleteItem(item.id, options),
          (result) =>
            sprintf(
              _n(
                'Deleted “%1$s” and %2$d topic under it.',
                'Deleted “%1$s” and %2$d topics under it.',
                Math.max(0, (result.deleted || []).length - 1),
                'ohmylms',
              ),
              item.name,
              Math.max(0, (result.deleted || []).length - 1),
            ),
          { refresh: true },
        ),
      );
    },

    // ---- Chapters: the skill groups, and the chapters of the course ----
    async addChapter(itemId, { name, code }, { open = true } = {}) {
      const response = await run(
        () => api.addGroup(syllabusId, { name, code, item_id: itemId }),
        __('Chapter added.', 'ohmylms'),
      );
      if (open && response?.group_id) select(groupKey(response.group_id));
      return done(response);
    },
    async saveChapter(group, patch) {
      return done(await run(() => api.updateGroup(syllabusId, group.id, patch)));
    },
    async moveChapter(group, itemId) {
      return done(
        await run(
          () => api.moveGroup(syllabusId, group.id, itemId),
          __('Chapter moved.', 'ohmylms'),
        ),
      );
    },
    async stepChapter(group, direction) {
      const position = stepAmongSiblings(tree, tree.index.get(groupKey(group.id)), direction);
      if (position === null) return false;
      return done(await run(() => api.moveGroup(syllabusId, group.id, group.item_id, position)));
    },
    async deleteChapter(group) {
      return done(
        await run(
          () => api.deleteGroup(syllabusId, group.id, group.skills.length > 0),
          __('Chapter deleted. Its skills stay in the skill library.', 'ohmylms'),
        ),
      );
    },

    // ---- Skills ----
    async addSkill(groupId, data) {
      return done(await run(() => api.addSkill(syllabusId, groupId, data)));
    },
    async placeSkill(groupId, termId) {
      return done(
        await run(
          () => api.addSkill(syllabusId, groupId, { term_id: termId }),
          __('Skill added.', 'ohmylms'),
        ),
      );
    },
    async saveSkill(skill, patch) {
      return done(await run(() => api.updateSkill(syllabusId, skill.term_id, patch)));
    },
    async stepSkill(groupId, termId, direction) {
      const node = tree.index.get(skillKey(groupId, termId));
      const position = node ? stepAmongSiblings(tree, node, direction) : null;
      if (position === null) return false;
      return done(await run(() => api.moveSkill(syllabusId, groupId, termId, groupId, position)));
    },
    async moveSkillTo(groupId, termId, toGroupId) {
      const response = await run(
        () => api.moveSkill(syllabusId, groupId, termId, toGroupId),
        __('Skill moved.', 'ohmylms'),
      );
      if (response) select(skillKey(toGroupId, termId));
      return done(response);
    },
    /** Which skills the course requires, and at what target; `patch` is `{required}` and/or `{target}`. */
    async setRequirements(termIds, patch, success) {
      return done(
        await run(
          () =>
            api.setCourseSkills(
              syllabusId,
              termIds.map((term_id) => ({ term_id, ...patch })),
            ),
          success,
        ),
      );
    },
    async removeSkill(groupId, termId) {
      return done(
        await run(
          () => api.removeSkill(syllabusId, groupId, termId),
          __('Skill taken out of the chapter. It stays in the skill library.', 'ohmylms'),
        ),
      );
    },
  };
}
