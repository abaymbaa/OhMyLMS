export const gamificationTabs = [
  ['point-settings', 'Bonus Point', 'N2'],
  ['badge-settings', 'Achievement Badges', 'E3'],
  ['level-settings', 'Learner Levels', 'c5'],
  ['reward-settings', 'Reward', 'w5'],
  ['leaderboard-settings', 'Leaderboard', 'S2'],
  ['streak-settings', 'Streaks', null],
];
export function activeGamificationTab(params) {
  const candidate = params.subTab || params.tab;
  return gamificationTabs.some(([key]) => key === candidate) ? candidate : 'point-settings';
}
export function updateAchievementRule(rules, index, field, value) {
  return rules.map((rule, position) => (position === index ? { ...rule, [field]: value } : rule));
}
export function removeAchievementRule(rules, index) {
  return rules.length > 1 ? rules.filter((_, position) => position !== index) : rules;
}
export function newAchievementRule() {
  return {
    dataLabel: 'Points',
    dataValue: 'points',
    dataFieldType: 'select',
    compareSign: '>=',
    compareData: 0,
    compareDataFieldType: 'input',
  };
}
