/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
import { MCPSettings } from './MCPSettings';
export function createSettingsPage(readRuntime) {
  return function SettingsPage() {
    const {
      C5,
      E6: MemoMigrationSettings,
      HG,
      I: Controls,
      J1: MemoPaymentSettings,
      JK: MemoAccountPrivacySettings,
      L: Entitlements,
      O6,
      P4,
      P6,
      R6,
      React,
      S6,
      T: StoreModule,
      V0: MemoDesignSettings,
      YG,
      b: I18n,
      ep,
      f: Router,
      g: ReactHooks,
      jK: MemoGeneralSettings,
      l,
      lJ: MemoPermalinkSettings,
      o4,
      qK: MemoBrandingSettings,
      vJ: MemoAdvancedSettings,
      y: WordPressData,
      z: Notifications,
    } = readRuntime();
    var e = true;
    HG('ohmylms', 'settings');
    var t = (0, WordPressData.useDispatch)(StoreModule.default),
      n = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).isSettingsLoading();
      }, []),
      r = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getGeneralSettings();
      }, []),
      a = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getPaymentSettings();
      }, []),
      o = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getDesignSettings();
      }, []),
      i = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getAccountPrivacySettings();
      }, []),
      c = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getAdvancedSettings();
      }, []),
      u = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getPermalinkSettings();
      }, []),
      s = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getMigrationCourses();
      }, []),
      d = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getMigrationTool();
      }, []),
      m = (0, Notifications.A)(),
      p = m.openNotificationWithIcon,
      v = m.contextHolder,
      h = (0, Router.Zp)(),
      _ = (0, Router.g)(),
      w = _.tab,
      E = _.subTab,
      S = _.subPanel,
      R = O6((0, ReactHooks.useState)(w || 'general-settings'), 2),
      x = R[0],
      C = R[1],
      P = O6((0, ReactHooks.useState)(!1), 2),
      O = P[0],
      k = P[1],
      j = function (e) {
        return Object.keys(e).reduce(function (t, n) {
          return ((t[n] = e[n].value), t);
        }, {});
      },
      A = (function () {
        var e = P6(
          R6().m(function e(n, r) {
            var a, o;
            return R6().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        t.setLoadingSetting(!0),
                        (e.p = 1),
                        (e.n = 2),
                        l()({
                          path: '/ohmylms/v1/settings/'.concat(n),
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(r),
                        })
                      );
                    case 2:
                      return ((a = e.v), e.a(2, a));
                    case 3:
                      throw ((e.p = 3), (o = e.v), console.error(o), o);
                    case 4:
                      return ((e.p = 4), t.setLoadingSetting(!1), e.f(4));
                    case 5:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 3, 4, 5]],
            );
          }),
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      M = function () {
        t.updateDesignSettings({
          ohmylms_archive_page_layout_style: {
            value: 'grid-style1',
          },
          ohmylms_archive_page_row: {
            value: [],
          },
          ohmylms_archive_page_category_is_enabled: {
            value: 'no',
          },
        });
      },
      F = function () {
        t.updateDesignSettings({
          ohmylms_single_course_page_layout: {
            value: 'layout_2',
          },
        });
      },
      N = (function () {
        var n = P6(
          R6().m(function n() {
            var l, s, d, m, f, v, g, h, y;
            return R6().w(
              function (n) {
                for (;;)
                  switch ((n.p = n.n)) {
                    case 0:
                      return (
                        (l = j(i)),
                        (s = j(r)),
                        (d = j(a)),
                        (m = j(o)),
                        (f = j(c)),
                        (v = j(u)),
                        (g = !0),
                        (h =
                          'layout_2' !==
                            (null == m ? void 0 : m.ohmylms_single_course_page_layout) ||
                          'grid-style1' !==
                            (null == m ? void 0 : m.ohmylms_archive_page_layout_style)),
                        false,
                        (n.p = 1),
                        k(!0),
                        (n.n = 2),
                        A('account-and-privacy', l)
                      );
                    case 2:
                      return ((n.n = 3), A('general', s));
                    case 3:
                      return ((n.n = 4), A('payment-gateway', d));
                    case 4:
                      return ((n.n = 5), A('design', m));
                    case 5:
                      return ((n.n = 6), A('advanced', f));
                    case 6:
                      return ((n.n = 7), A('permalink', v));
                    case 7:
                      (g && p('success', 'Saved successfully'), (n.n = 9));
                      break;
                    case 8:
                      ((n.p = 8),
                        (y = n.v),
                        console.error(y),
                        p(
                          'error',
                          (0, I18n.__)('Failed to save settings. Please try again.', 'ohmylms'),
                        ));
                    case 9:
                      return ((n.p = 9), k(!1), n.f(9));
                    case 10:
                      return n.a(2);
                  }
              },
              n,
              null,
              [[1, 8, 9, 10]],
            );
          }),
        );
        return function () {
          return n.apply(this, arguments);
        };
      })(),
      D = (function () {
        var e = P6(
          R6().m(function e() {
            var n, r, a;
            return R6().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      (t.setMigrationModalOpen(!0),
                        t.setMigrationStatus('migrating'),
                        (e.p = 1),
                        (n = 0));
                    case 2:
                      if (!(n < s.length)) {
                        e.n = 5;
                        break;
                      }
                      return ((e.n = 3), t.migrateSingleCourse(d, s[n]));
                    case 3:
                      if (((r = e.v), s[n] === r)) {
                        e.n = 4;
                        break;
                      }
                      return (
                        p(
                          'error',
                          (0, I18n.__)('Failed to migrate course. Please try again.', 'ohmylms'),
                        ),
                        t.setMigrationStatus(null),
                        t.setMigrationModalOpen(!1),
                        e.a(3, 5)
                      );
                    case 4:
                      (n++, (e.n = 2));
                      break;
                    case 5:
                      e.n = 7;
                      break;
                    case 6:
                      ((e.p = 6),
                        (a = e.v),
                        console.error(a),
                        p(
                          'error',
                          (0, I18n.__)('Failed to migrate course. Please try again.', 'ohmylms'),
                        ));
                    case 7:
                      return (
                        (e.p = 7),
                        setTimeout(function () {
                          t.setMigrationStatus(null);
                        }, 200),
                        e.f(7)
                      );
                    case 8:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 6, 7, 8]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      W = [
        {
          label: <React.Fragment>{(0, I18n.__)('MCP connections', 'ohmylms')}</React.Fragment>,
          key: 'mcp-settings',
          children: <MCPSettings />,
        },
        {
          label: <React.Fragment>{(0, I18n.__)('General', 'ohmylms')}</React.Fragment>,
          key: 'general-settings',
          children: (
            <MemoGeneralSettings
              activeTab={x}
              handleSave={N}
              handleMigration={D}
              selectedCourses={s}
              isSaving={O}
            />
          ),
        },
        {
          label: <React.Fragment>{(0, I18n.__)('Design', 'ohmylms')}</React.Fragment>,
          key: 'design-settings',
          children: (
            <MemoDesignSettings
              activeTab={x}
              handleSave={N}
              handleMigration={D}
              selectedCourses={s}
              isSaving={O}
            />
          ),
        },
        {
          label: <React.Fragment>{(0, I18n.__)('Branding', 'ohmylms')}</React.Fragment>,
          key: 'branding-settings',
          children: (
            <MemoBrandingSettings
              activeTab={x}
              handleSave={N}
              handleMigration={D}
              selectedCourses={s}
              isSaving={O}
            />
          ),
        },
        {
          label: <React.Fragment>{(0, I18n.__)('Account & Privacy', 'ohmylms')}</React.Fragment>,
          key: 'account-privacy-settings',
          children: (
            <MemoAccountPrivacySettings
              activeTab={x}
              handleSave={N}
              handleMigration={D}
              selectedCourses={s}
              isSaving={O}
            />
          ),
        },
        {
          label: <React.Fragment>{(0, I18n.__)('Permalink', 'ohmylms')}</React.Fragment>,
          key: 'parmalink-settings',
          children: (
            <MemoPermalinkSettings
              activeTab={x}
              handleSave={N}
              handleMigration={D}
              selectedCourses={s}
              isSaving={O}
            />
          ),
        },
        {
          label: <React.Fragment>{(0, I18n.__)('Payments', 'ohmylms')}</React.Fragment>,
          key: 'payments-settings',
          children: (
            <MemoPaymentSettings
              activeTab={x}
              handleSave={N}
              handleMigration={D}
              selectedCourses={s}
              isSaving={O}
            />
          ),
        },
        {
          label: <React.Fragment>{(0, I18n.__)('Emails', 'ohmylms')}</React.Fragment>,
          key: 'emails-settings',
          children: <P4 />,
        },
        {
          label: <React.Fragment>{(0, I18n.__)('Migration', 'ohmylms')}</React.Fragment>,
          key: 'migration-settings',
          children: <MemoMigrationSettings />,
        },
      ].concat(
        S6(
          window.ohmylms_params.is_gamification_enabled
            ? [
                {
                  label: <React.Fragment>{(0, I18n.__)('Gamification', 'ohmylms')}</React.Fragment>,
                  key: 'gamification-settings',
                  children: <C5 />,
                },
              ]
            : [],
        ),
        S6(
          window.ohmylms_params.is_webhook_enabled
            ? [
                {
                  label: <React.Fragment>{(0, I18n.__)('Webhooks', 'ohmylms')}</React.Fragment>,
                  key: 'webhooks-settings',
                  children: React.createElement(o4, null),
                },
              ]
            : [],
        ),
        [
          {
            label: <React.Fragment>{(0, I18n.__)('Advanced', 'ohmylms')}</React.Fragment>,
            key: 'advanced-settings',
            children: (
              <MemoAdvancedSettings
                activeTab={x}
                handleSave={N}
                handleMigration={D}
                selectedCourses={s}
                isSaving={O}
              />
            ),
          },
        ],
        S6([]),
      );
    return (
      <React.Fragment>
        {v}
        <Controls.ContainerWP>
          <YG title={(0, I18n.__)('Settings', 'ohmylms')} showAddButton={!1} />
          <Controls.CardWP
            isBorderless={!0}
            className={'ohmylms-full-screen-height ohmylms-settings-page'}
          >
            <Controls.SpacerWP marginBottom={0} padding={7.5}>
              {n && !O && x !== 'mcp-settings' && (
                <React.Fragment>
                  <Controls.SkeletonWP
                    active={!0}
                    rows={10}
                    style={{
                      position: 'absolute',
                      top: '60px',
                      right: '44px',
                      zIndex: 3,
                      background: '#FFFFFF',
                      height: 'calc(100% - 105px)',
                      padding: '24px',
                      width: 'calc(100% - 272px)',
                      borderRadius: '8px',
                    }}
                  />
                </React.Fragment>
              )}
              <ep.A
                items={W}
                onChange={function (e) {
                  return (function (e) {
                    C(e);
                    var t = '/settings/'.concat(e);
                    h(
                      'payments-settings' === e
                        ? ''.concat(t, '/payments')
                        : 'design-settings' === e
                          ? 'course-details' === E
                            ? ''
                                .concat(t, '/')
                                .concat(E, '/')
                                .concat(null != S ? S : 'unenroll-view')
                            : ''
                                .concat(t, '/')
                                .concat(
                                  ['course-list', 'course-details', 'checkout-page'].includes(E)
                                    ? E
                                    : 'course-list',
                                )
                          : t,
                    );
                  })(e);
                }}
                activekey={x}
                variant={'vertical'}
              />
            </Controls.SpacerWP>
          </Controls.CardWP>
        </Controls.ContainerWP>
      </React.Fragment>
    );
  };
}
