/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAdvancedSettings(readRuntime) {
  return function AdvancedSettings(props) {
    const {
      Ea,
      I: Controls,
      React,
      SK: MemoSettingsActionBar,
      T: StoreModule,
      b: I18n,
      cJ,
      dJ,
      g: ReactHooks,
      l,
      mJ,
      y: WordPressData,
      z: Notifications,
    } = readRuntime();
    var t = props.activeTab,
      n = props.handleSave,
      r = props.handleMigration,
      a = props.selectedCourses,
      o = props.isSaving,
      i = (0, WordPressData.useDispatch)(StoreModule.default),
      c = (0, Notifications.A)(),
      u = c.openNotificationWithIcon,
      s = c.contextHolder,
      d = mJ((0, ReactHooks.useState)(!1), 2),
      m = d[0],
      p = d[1],
      f = mJ((0, ReactHooks.useState)(!1), 2),
      v = f[0],
      h = f[1];
    (0, ReactHooks.useEffect)(function () {
      var e = (function () {
        var e = dJ(
          cJ().m(function e() {
            var t, n;
            return cJ().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        i.setLoadingSetting(!0),
                        (e.p = 1),
                        (e.n = 2),
                        l()({
                          path: 'creator-lms/v1/settings/advanced',
                        })
                      );
                    case 2:
                      ((t = e.v), i.setAdvancedSettings(t), (e.n = 4));
                      break;
                    case 3:
                      ((e.p = 3), (n = e.v), console.error(n));
                    case 4:
                      return ((e.p = 4), i.setLoadingSetting(!1), e.f(4));
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
        return function () {
          return e.apply(this, arguments);
        };
      })();
      e();
    }, []);
    var _ = (0, ReactHooks.useCallback)(
        dJ(
          cJ().m(function e() {
            var t, n, r, a, o, i, l;
            return cJ().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        p(!0),
                        (e.p = 1),
                        (r = new URLSearchParams()).append(
                          'action',
                          'omlms_delete_transient_cache',
                        ),
                        r.append(
                          'nonce',
                          (null === (t = window.creator_lms_params) || void 0 === t
                            ? void 0
                            : t.delete_cache_nonce) || '',
                        ),
                        (e.n = 2),
                        fetch(
                          (null === (n = window.creator_lms_params) || void 0 === n
                            ? void 0
                            : n.ajax_url) || '/wp-admin/admin-ajax.php',
                          {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            credentials: 'same-origin',
                            body: r.toString(),
                          },
                        )
                      );
                    case 2:
                      return ((a = e.v), (e.n = 3), a.json());
                    case 3:
                      ((o = e.v).success
                        ? u('success', o.data.message)
                        : u(
                            'error',
                            (null === (i = o.data) || void 0 === i ? void 0 : i.message) ||
                              (0, I18n.__)('Failed to delete cache.', 'ohmylms'),
                          ),
                        (e.n = 5));
                      break;
                    case 4:
                      ((e.p = 4),
                        (l = e.v),
                        console.error(l),
                        u(
                          'error',
                          (0, I18n.__)('An error occurred. Please try again.', 'ohmylms'),
                        ));
                    case 5:
                      return ((e.p = 5), p(!1), e.f(5));
                    case 6:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 4, 5, 6]],
            );
          }),
        ),
        [u],
      ),
      w = (0, ReactHooks.useCallback)(
        dJ(
          cJ().m(function e() {
            var t, n;
            return cJ().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        h(!0),
                        (e.p = 1),
                        (e.n = 2),
                        l()({
                          path: '/creator-lms/v1/restore-default-pages',
                          method: 'POST',
                        })
                      );
                    case 2:
                      ((t = e.v), u('success', t.message), (e.n = 4));
                      break;
                    case 3:
                      ((e.p = 3),
                        (n = e.v),
                        console.error(n),
                        u(
                          'error',
                          (0, I18n.__)('Failed to restore pages. Please try again.', 'ohmylms'),
                        ));
                    case 4:
                      return ((e.p = 4), h(!1), e.f(4));
                    case 5:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 3, 4, 5]],
            );
          }),
        ),
        [u],
      );
    return (
      <React.Fragment>
        {s}
        <Ea isBorderless={!0} variant={'secondary'} className={'omlms-full-screen-height'}>
          <Controls.SpacerWP padding={4} marginTop={0} marginBottom={0}>
            <Controls.CardWP isBorderless={!0}>
              <Controls.SpacerWP padding={6} marginTop={0} marginBottom={4}>
                <div>
                  <h3
                    style={{
                      margin: '0px',
                      fontSize: '16px',
                      fontWeight: 600,
                    }}
                  >
                    {(0, I18n.__)('Remove OhMyLMS Transient cache', 'ohmylms')}
                  </h3>
                  <p
                    style={{
                      marginTop: '8px',
                      color: '#687784',
                      fontSize: '14px',
                    }}
                  >
                    {(0, I18n.__)(
                      'Click the button below to delete all OhMyLMS transient cache. This can help resolve certain issues with cached data.',
                      'ohmylms',
                    )}
                  </p>
                  <Controls.ButtonWP
                    variant={'primary'}
                    danger={!0}
                    onClick={_}
                    loading={m}
                    disabled={m}
                  >
                    {m
                      ? (0, I18n.__)('Deleting...', 'ohmylms')
                      : (0, I18n.__)('Delete Cache', 'ohmylms')}
                  </Controls.ButtonWP>
                </div>
                <div
                  style={{
                    marginTop: '32px',
                    paddingTop: '24px',
                    borderTop: '1px solid #e0e0e0',
                  }}
                >
                  <h3
                    style={{
                      margin: '0px',
                      fontSize: '16px',
                      fontWeight: 600,
                    }}
                  >
                    {(0, I18n.__)('Restore Default Pages', 'ohmylms')}
                  </h3>
                  <p
                    style={{
                      marginTop: '8px',
                      color: '#687784',
                      fontSize: '14px',
                    }}
                  >
                    {(0, I18n.__)(
                      'Recreates any missing default pages (Course Archive, Checkout, Student Dashboard). Existing pages are never overwritten or duplicated.',
                      'ohmylms',
                    )}
                  </p>
                  <Controls.ButtonWP variant={'secondary'} onClick={w} loading={v} disabled={v}>
                    {v
                      ? (0, I18n.__)('Restoring...', 'ohmylms')
                      : (0, I18n.__)('Restore Default Pages', 'ohmylms')}
                  </Controls.ButtonWP>
                </div>
              </Controls.SpacerWP>
            </Controls.CardWP>
            <MemoSettingsActionBar
              activeTab={t}
              handleSave={n}
              handleMigration={r}
              selectedCourses={a}
              isSaving={o}
            />
          </Controls.SpacerWP>
        </Ea>
      </React.Fragment>
    );
  };
}
