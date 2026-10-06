import { createElement, Fragment } from '@wordpress/element';
import { gamificationExtraTabs } from './extraTabs.mjs';
import { activeGamificationTab, gamificationTabs, isStandaloneGamification } from './model.mjs';
import { StreakSettings } from './StreakSettings';

export function createGamificationSettings(readRuntime) {
  return function GamificationSettings() {
    const runtime = readRuntime();
    const { I: Controls, b: I18n, f: Router, z: Notifications } = runtime;
    const { contextHolder } = Notifications.A();
    const params = Router.g();
    const navigate = Router.Zp();
    // Settings → Gamification has the six settings tabs; the standalone screen adds the tabs that
    // other screens moved here (Certificates).
    const extraTabs = isStandaloneGamification(params) ? gamificationExtraTabs() : [];
    const activeTab = activeGamificationTab(
      params,
      extraTabs.map((tab) => tab.key),
    );
    const items = [
      ...gamificationTabs.map(([key, label, binding]) => ({
        key,
        label: I18n.__(label, 'ohmylms'),
        children:
          key === 'streak-settings'
            ? createElement(StreakSettings, { BadgeEditor: runtime.o3 })
            : createElement(runtime[binding]),
      })),
      ...extraTabs.map(({ key, label, Component }) => ({
        key,
        label: I18n.__(label, 'ohmylms'),
        children: createElement(Component),
      })),
    ];
    return (
      <Fragment>
        {contextHolder}
        <Controls.CardWP
          isBorderless
          variant="secondary"
          className="ohmylms-full-screen-height ohmylms-gamification-settings"
        >
          <Controls.SpacerWP padding={4} paddingTop={1} marginTop={4} marginBottom={0}>
            <Controls.TabsWP
              key={activeTab}
              items={items}
              activekey={activeTab}
              onChange={(key) => {
                const base =
                  params.tab === 'gamification-settings'
                    ? '/settings/gamification-settings/'
                    : '/gamification/';
                navigate(base + key);
              }}
            />
          </Controls.SpacerWP>
        </Controls.CardWP>
      </Fragment>
    );
  };
}
