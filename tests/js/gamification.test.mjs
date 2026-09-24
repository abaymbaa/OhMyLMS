import test from 'node:test';
import assert from 'node:assert/strict';
import {activeGamificationTab, gamificationTabs, newAchievementRule, updateAchievementRule, removeAchievementRule} from '../../assets/src/features/gamification/model.mjs';

test('all gamification tabs resolve through both supported route families', () => {
  for (const [key] of gamificationTabs) {
    assert.equal(activeGamificationTab({tab: key}), key);
    assert.equal(activeGamificationTab({tab: 'gamification-settings', subTab: key}), key);
  }
  assert.equal(activeGamificationTab({tab: 'unknown'}), 'point-settings');
});

test('rule edits and deletion preserve previous React state and retain one condition', () => {
  const first = Object.freeze(newAchievementRule());
  const second = Object.freeze({...newAchievementRule(), compareData: 50});
  const rules = Object.freeze([first, second]);
  const changed = updateAchievementRule(rules, 0, 'compareData', 25);
  assert.equal(changed[0].compareData, 25);
  assert.equal(first.compareData, 0);
  assert.equal(changed[1], second);
  const remaining = removeAchievementRule(rules, 0);
  assert.deepEqual(remaining, [second]);
  assert.equal(rules.length, 2);
  assert.deepEqual(removeAchievementRule(remaining, 0), [second]);
  assert.notEqual(newAchievementRule(), newAchievementRule());
});
