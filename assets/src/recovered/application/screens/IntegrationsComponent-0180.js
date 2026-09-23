// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var H7 = {
    "course-enhancements": {
      label: (0, b.__)("Course Enhancements", "ohmylms")
    },
    "live-classes": {
      label: (0, b.__)("Live Classes", "ohmylms")
    },
    sales: {
      label: (0, b.__)("Sales", "ohmylms")
    },
    "course-engagement": {
      label: (0, b.__)("Engagement", "ohmylms")
    },
    "ai-model": {
      label: (0, b.__)("AI Agent", "ohmylms")
    },
    automation: {
      label: (0, b.__)("Automation", "ohmylms")
    },
    crm: {
      label: (0, b.__)("CRM", "ohmylms")
    }
  },
  G7 = creator_lms_params.integrations,
  U7 = function () {
    HG("creator-lms", "integrations");
    var e = (0, y.useDispatch)(T.default),
      t = (0, y.useSelect)(function (e) {
        return e(T.default).getIntegrations();
      }, []),
      n = (0, y.useSelect)(function (e) {
        return e(T.default).getNotificationMessage();
      }, []),
      r = (0, y.useSelect)(function (e) {
        return e(T.default).getNotificationStatus();
      }, []),
      a = L7((0, g.useState)(!1), 2),
      o = a[0],
      i = a[1],
      l = (0, z.A)(),
      c = l.openNotificationWithIcon,
      u = l.contextHolder,
      s = L7((0, g.useState)(!1), 2),
      d = s[0],
      m = s[1],
      p = L7((0, g.useState)("all"), 2),
      f = p[0],
      v = p[1],
      h = L7((0, g.useState)(""), 2),
      _ = h[0],
      w = h[1],
      E = L7((0, g.useState)(null), 2),
      S = E[0],
      R = E[1],
      x = function () {
        var t = B7(D7().m(function t() {
          var n;
          return D7().w(function (t) {
            for (;;) switch (t.p = t.n) {
              case 0:
                return t.p = 0, i(!0), t.n = 1, e.getIntegrations();
              case 1:
                t.n = 3;
                break;
              case 2:
                t.p = 2, n = t.v, console.error("Error fetching integrations:", n);
              case 3:
                return t.p = 3, i(!1), t.f(3);
              case 4:
                return t.a(2);
            }
          }, t, null, [[0, 2, 3, 4]]);
        }));
        return function () {
          return t.apply(this, arguments);
        };
      }();
    (0, g.useEffect)(function () {
      var e = !0;
      return e && x(), function () {
        e = !1;
      };
    }, []);
    var C = Object.entries(G7).map(function (e) {
        var n = L7(e, 2),
          r = n[0];
        return F7(F7({
          key: r
        }, n[1]), t && t[r] || {});
      }),
      P = Array.from(new Set(Object.values(G7).flatMap(function (e) {
        return e.categories || [];
      }))),
      O = ["all"].concat(P),
      k = function () {
        var n = B7(D7().m(function n(r) {
          var a, o, i;
          return D7().w(function (n) {
            for (;;) switch (n.p = n.n) {
              case 0:
                if (null != r && r.is_valid) {
                  n.n = 1;
                  break;
                }
                return m(!0), e.updateProModalTitle((0, b.__)("Upgrade Your Plan!", "ohmylms")), e.updateProModalContent((0, b.__)("This feature is on ".concat(null == r ? void 0 : r.required_plan, " plan. Please upgrade your plan for access to this feature!"), "ohmylms")), n.a(2);
              case 1:
                if ("wpfusion" !== r.key || null !== (a = window) && void 0 !== a && null !== (a = a.creator_lms_params) && void 0 !== a && a.is_wpfusion_active) {
                  n.n = 2;
                  break;
                }
                return m(!0), e.updateProModalTitle((0, b.__)("WP Fusion Required", "ohmylms")), e.updateProModalContent((0, b.__)("To enable the WP Fusion integration, please ensure that the WP Fusion Lite plugin is installed and activated on your site.", "ohmylms")), e.updateProModalButtonText(null), n.a(2);
              case 2:
                return n.p = 2, (o = t && Object.keys(t).length ? F7({}, t) : Object.fromEntries(Object.entries(G7).map(function (e) {
                  var t = L7(e, 2);
                  return [t[0], {
                    is_enable: 0,
                    class: t[1].class
                  }];
                })))[r.key] = F7(F7({}, o[r.key]), {}, {
                  is_enable: r.is_enable ? 0 : 1
                }), n.n = 3, e.updateIntegrations(o);
              case 3:
                n.n = 5;
                break;
              case 4:
                n.p = 4, i = n.v, console.error("Error toggling integration:", i);
              case 5:
                return n.a(2);
            }
          }, n, null, [[2, 4]]);
        }));
        return function (e) {
          return n.apply(this, arguments);
        };
      }(),
      j = function (t) {
        if (null == t || !t.is_valid) return m(!0), e.updateProModalTitle((0, b.__)("Upgrade Your Plan!", "ohmylms")), void e.updateProModalContent((0, b.__)("This feature is on ".concat(null == t ? void 0 : t.required_plan, ". Please upgrade your plan!"), "ohmylms"));
        R(t);
      },
      A = C.filter(function (e) {
        return "all" === f || e.categories && e.categories.includes(f);
      }).filter(function (e) {
        return e.label.toLowerCase().includes(_.toLowerCase());
      });
    return (0, g.useEffect)(function () {
      n && c(r, n);
    }, [n]), React.createElement(React.Fragment, null, u, React.createElement(I.ContainerWP, null, React.createElement(YG, {
      title: (0, b.__)("Addons", "ohmylms"),
      description: (0, b.__)("Enable and manage addons for your LMS to enhance your course experience.", "ohmylms"),
      showAddButton: !1
    }), React.createElement(I.CardWP, {
      isBorderless: !0,
      className: "integrations-card"
    }, React.createElement(I.SpacerWP, {
      padding: 5,
      marginBottom: 0
    }, o && React.createElement(I.SkeletonWP, {
      active: !0,
      rows: 10,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: 3,
        background: "#FFFFFF",
        height: "100%",
        padding: "40px",
        borderRadius: "8px"
      }
    }), S ? React.createElement(M7, {
      integration: S,
      onSave: function (e, t) {
        c(e, t);
      },
      onCancel: function () {
        return R(null);
      },
      className: "omlms-integrations-config"
    }) : React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
      gap: 4,
      justifyContent: "space-between"
    }, React.createElement("div", {
      className: "integrations-filter-buttons"
    }, O.map(function (e) {
      var t;
      return React.createElement(I.ButtonWP, {
        key: e,
        isPrimary: f === e,
        onClick: function () {
          return v(e);
        }
      }, "all" === e ? (0, b.__)("All", "ohmylms") : (null === (t = H7[e]) || void 0 === t ? void 0 : t.label) || e);
    })), React.createElement("div", {
      className: "integrations-search-control"
    }, React.createElement(I.SearchControlWP, {
      value: _,
      onChange: w,
      placeholder: (0, b.__)("Search integrations…", "ohmylms")
    }))), React.createElement(I.SpacerWP, {
      marginBottom: 5
    }), 0 < A.length ? React.createElement(I.GridWP, {
      columns: 3,
      gap: 4
    }, A.map(function (e) {
      return React.createElement(W6, {
        key: e.key,
        integration: e,
        onToggle: k,
        onManage: j
      });
    })) : React.createElement(React.Fragment, null, React.createElement(uf, {
      icon: React.createElement(df, null),
      title: (0, b.__)("No integrations found", "ohmylms")
    })))))), d && React.createElement(React.Fragment, null, React.createElement(He.default, {
      isOpen: d,
      onClose: m
    })));
  };
