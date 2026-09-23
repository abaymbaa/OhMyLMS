// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var A6 = function () {
  var e = (0, L.useIsPro)();
  HG("creator-lms", "settings");
  var t = (0, y.useDispatch)(T.default),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).isSettingsLoading();
    }, []),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).getGeneralSettings();
    }, []),
    a = (0, y.useSelect)(function (e) {
      return e(T.default).getPaymentSettings();
    }, []),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getDesignSettings();
    }, []),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getAccountPrivacySettings();
    }, []),
    c = (0, y.useSelect)(function (e) {
      return e(T.default).getAdvancedSettings();
    }, []),
    u = (0, y.useSelect)(function (e) {
      return e(T.default).getPermalinkSettings();
    }, []),
    s = (0, y.useSelect)(function (e) {
      return e(T.default).getMigrationCourses();
    }, []),
    d = (0, y.useSelect)(function (e) {
      return e(T.default).getMigrationTool();
    }, []),
    m = (0, z.A)(),
    p = m.openNotificationWithIcon,
    v = m.contextHolder,
    h = (0, f.Zp)(),
    _ = (0, f.g)(),
    w = _.tab,
    E = _.subTab,
    S = _.subPanel,
    R = O6((0, g.useState)(w || "general-settings"), 2),
    x = R[0],
    C = R[1],
    P = O6((0, g.useState)(!1), 2),
    O = P[0],
    k = P[1],
    j = function (e) {
      return Object.keys(e).reduce(function (t, n) {
        return t[n] = e[n].value, t;
      }, {});
    },
    A = function () {
      var e = P6(R6().m(function e(n, r) {
        var a, o;
        return R6().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return t.setLoadingSetting(!0), e.p = 1, e.n = 2, l()({
                path: "/creator-lms/v1/settings/".concat(n),
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(r)
              });
            case 2:
              return a = e.v, e.a(2, a);
            case 3:
              throw e.p = 3, o = e.v, console.error(o), o;
            case 4:
              return e.p = 4, t.setLoadingSetting(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function (t, n) {
        return e.apply(this, arguments);
      };
    }(),
    M = function () {
      t.updateDesignSettings({
        creator_lms_archive_page_layout_style: {
          value: "grid-style1"
        },
        creator_lms_archive_page_row: {
          value: []
        },
        creator_lms_archive_page_category_is_enabled: {
          value: "no"
        }
      });
    },
    F = function () {
      t.updateDesignSettings({
        creator_lms_single_course_page_layout: {
          value: "layout_2"
        }
      });
    },
    N = function () {
      var n = P6(R6().m(function n() {
        var l, s, d, m, f, v, g, h, y;
        return R6().w(function (n) {
          for (;;) switch (n.p = n.n) {
            case 0:
              return l = j(i), s = j(r), d = j(a), m = j(o), f = j(c), v = j(u), g = !0, h = "layout_2" !== (null == m ? void 0 : m.creator_lms_single_course_page_layout) || "grid-style1" !== (null == m ? void 0 : m.creator_lms_archive_page_layout_style), !e && h && "design-settings" === x && (t.setIsProModalOpen(!0), g = !1, "layout_2" !== (null == m ? void 0 : m.creator_lms_single_course_page_layout) && "grid-style1" !== (null == m ? void 0 : m.creator_lms_archive_page_layout_style) ? (t.updateProModalContent((0, b.__)("This feature requires OhMyLMS. Please activate the Pro version with a valid license to unlock this feature.", "ohmylms")), m.creator_lms_archive_page_layout_style = "grid-style1", m.creator_lms_archive_page_row = [], m.creator_lms_archive_page_category_is_enabled = "no", M(), m.creator_lms_single_course_page_layout = "layout_2", F()) : "layout_2" !== (null == m ? void 0 : m.creator_lms_single_course_page_layout) ? (t.updateProModalContent((0, b.__)("This feature requires OhMyLMS. Please activate the Pro version with a valid license to unlock this feature.", "ohmylms")), m.creator_lms_single_course_page_layout = "layout_2", F()) : (t.updateProModalContent((0, b.__)("This feature requires OhMyLMS. Please activate the Pro version with a valid license to unlock this feature.", "ohmylms")), m.creator_lms_archive_page_layout_style = "grid-style1", m.creator_lms_archive_page_row = [], m.creator_lms_archive_page_category_is_enabled = "no", M())), n.p = 1, k(!0), n.n = 2, A("account-and-privacy", l);
            case 2:
              return n.n = 3, A("general", s);
            case 3:
              return n.n = 4, A("payment-gateway", d);
            case 4:
              return n.n = 5, A("design", m);
            case 5:
              return n.n = 6, A("advanced", f);
            case 6:
              return n.n = 7, A("permalink", v);
            case 7:
              g && p("success", "Saved successfully"), n.n = 9;
              break;
            case 8:
              n.p = 8, y = n.v, console.error(y), p("error", (0, b.__)("Failed to save settings. Please try again.", "ohmylms"));
            case 9:
              return n.p = 9, k(!1), n.f(9);
            case 10:
              return n.a(2);
          }
        }, n, null, [[1, 8, 9, 10]]);
      }));
      return function () {
        return n.apply(this, arguments);
      };
    }(),
    D = function () {
      var e = P6(R6().m(function e() {
        var n, r, a;
        return R6().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              t.setMigrationModalOpen(!0), t.setMigrationStatus("migrating"), e.p = 1, n = 0;
            case 2:
              if (!(n < s.length)) {
                e.n = 5;
                break;
              }
              return e.n = 3, t.migrateSingleCourse(d, s[n]);
            case 3:
              if (r = e.v, s[n] === r) {
                e.n = 4;
                break;
              }
              return p("error", (0, b.__)("Failed to migrate course. Please try again.", "ohmylms")), t.setMigrationStatus(null), t.setMigrationModalOpen(!1), e.a(3, 5);
            case 4:
              n++, e.n = 2;
              break;
            case 5:
              e.n = 7;
              break;
            case 6:
              e.p = 6, a = e.v, console.error(a), p("error", (0, b.__)("Failed to migrate course. Please try again.", "ohmylms"));
            case 7:
              return e.p = 7, setTimeout(function () {
                t.setMigrationStatus(null);
              }, 200), e.f(7);
            case 8:
              return e.a(2);
          }
        }, e, null, [[1, 6, 7, 8]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    W = [{
      label: React.createElement(React.Fragment, null, (0, b.__)("General", "ohmylms")),
      key: "general-settings",
      children: React.createElement(jK, {
        activeTab: x,
        handleSave: N,
        handleMigration: D,
        selectedCourses: s,
        isSaving: O
      })
    }, {
      label: React.createElement(React.Fragment, null, (0, b.__)("Design", "ohmylms")),
      key: "design-settings",
      children: React.createElement(V0, {
        activeTab: x,
        handleSave: N,
        handleMigration: D,
        selectedCourses: s,
        isSaving: O
      })
    }, {
      label: React.createElement(React.Fragment, null, (0, b.__)("Branding", "ohmylms")),
      key: "branding-settings",
      children: React.createElement(qK, {
        activeTab: x,
        handleSave: N,
        handleMigration: D,
        selectedCourses: s,
        isSaving: O
      })
    }, {
      label: React.createElement(React.Fragment, null, (0, b.__)("Account & Privacy", "ohmylms")),
      key: "account-privacy-settings",
      children: React.createElement(JK, {
        activeTab: x,
        handleSave: N,
        handleMigration: D,
        selectedCourses: s,
        isSaving: O
      })
    }, {
      label: React.createElement(React.Fragment, null, (0, b.__)("Permalink", "ohmylms")),
      key: "parmalink-settings",
      children: React.createElement(lJ, {
        activeTab: x,
        handleSave: N,
        handleMigration: D,
        selectedCourses: s,
        isSaving: O
      })
    }, {
      label: React.createElement(React.Fragment, null, (0, b.__)("Payments", "ohmylms")),
      key: "payments-settings",
      children: React.createElement(J1, {
        activeTab: x,
        handleSave: N,
        handleMigration: D,
        selectedCourses: s,
        isSaving: O
      })
    }, {
      label: React.createElement(React.Fragment, null, (0, b.__)("Emails", "ohmylms")),
      key: "emails-settings",
      children: React.createElement(P4, null)
    }, {
      label: React.createElement(React.Fragment, null, (0, b.__)("Migration", "ohmylms")),
      key: "migration-settings",
      children: React.createElement(E6, null)
    }].concat(S6(window.creator_lms_params.is_gamification_enabled ? [{
      label: React.createElement(React.Fragment, null, (0, b.__)("Gamification", "ohmylms")),
      key: "gamification-settings",
      children: React.createElement(C5, null)
    }] : []), S6(window.creator_lms_params.is_webhook_enabled ? [{
      label: React.createElement(React.Fragment, null, (0, b.__)("Webhooks", "ohmylms")),
      key: "webhooks-settings",
      children: React.createElement(o4, null)
    }] : []), [{
      label: React.createElement(React.Fragment, null, (0, b.__)("Advanced", "ohmylms")),
      key: "advanced-settings",
      children: React.createElement(vJ, {
        activeTab: x,
        handleSave: N,
        handleMigration: D,
        selectedCourses: s,
        isSaving: O
      })
    }], S6([]));
  return React.createElement(React.Fragment, null, v, React.createElement(I.ContainerWP, null, React.createElement(YG, {
    title: (0, b.__)("Settings", "ohmylms"),
    showAddButton: !1
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    className: "omlms-full-screen-height omlms-settings-page"
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 7.5
  }, n && !O && React.createElement(React.Fragment, null, React.createElement(I.SkeletonWP, {
    active: !0,
    rows: 10,
    style: {
      position: "absolute",
      top: "60px",
      right: "44px",
      zIndex: 3,
      background: "#FFFFFF",
      height: "calc(100% - 105px)",
      padding: "24px",
      width: "calc(100% - 272px)",
      borderRadius: "8px"
    }
  })), React.createElement(ep.A, {
    items: W,
    onChange: function (e) {
      return function (e) {
        C(e);
        var t = "/settings/".concat(e);
        h("payments-settings" === e ? "".concat(t, "/payments") : "design-settings" === e ? "course-details" === E ? "".concat(t, "/").concat(E, "/").concat(null != S ? S : "unenroll-view") : "".concat(t, "/").concat(["course-list", "course-details", "checkout-page"].includes(E) ? E : "course-list") : t);
      }(e);
    },
    activekey: x,
    variant: "vertical"
  })))));
};
