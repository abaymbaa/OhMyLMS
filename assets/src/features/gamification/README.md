# Gamification React source

Edit the JSX files in this directory, then run `npm run build` from the plugin directory.
`npm run dev` watches JSX and rebuilds the extension bundle automatically.

- GamificationPage / GamificationSettings: entry point and the five settings tabs.
- BonusPointSettings, BadgeSettings, LevelSettings, RewardSettings, LeaderboardSettings: settings panels.
- BadgeList / BadgeEditor and LevelList / LevelEditor: lists and create/edit dialogs.
- BadgeImageField / AchievementRules: image upload and earning conditions.
- model.mjs: tab configuration and immutable condition updates.

The components retain the existing WordPress data store, API requests, controls, styles,
notifications and Pro availability rules. PHP still handles persistence and awarding points.
Some extracted components retain transpiled async helpers supplied by the existing runtime;
they are editable JSX, not a standalone React application.

components.json maps named components to the recovered runtime. The build adapter replaces
all 13 original component bodies and fails if a mapping is missing. The extension SDK loads
before the admin application. Source builds are served when OMLMS_SOURCE_ASSETS is enabled.
Original recovered files remain the parity baseline; edit these feature files instead.
Do not rerun the one-time extraction script over authored changes.

Validation: `npm run lint`, `npm test`, and `npm run build`.
