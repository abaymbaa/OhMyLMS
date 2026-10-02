// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function L9(e, t) {
  return function (e) {
    if (Array.isArray(e)) return e;
  }(e) || function (e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
      var r,
        a,
        o,
        i,
        l = [],
        c = !0,
        u = !1;
      try {
        if (o = (n = n.call(e)).next, 0 === t) {
          if (Object(n) !== n) return;
          c = !1;
        } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
      } catch (e) {
        u = !0, a = e;
      } finally {
        try {
          if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return;
        } finally {
          if (u) throw a;
        }
      }
      return l;
    }
  }(e, t) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return V9(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? V9(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function V9(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var H9 = function () {
  var e = (0, y.useDispatch)(T.default),
    t = L9((0, g.useState)([{
      label: (0, b.__)("Total members", "ohmylms"),
      value: "-",
      tooltip: "",
      progression_percent: "",
      progression_text: "",
      progression_delay: "",
      progression_state: "",
      card_class: "",
      iconColor: "var(--ohmylms-primary-color)"
    }, {
      label: (0, b.__)("Total posts", "ohmylms"),
      value: "-",
      tooltip: "",
      progression_percent: "",
      progression_text: "",
      progression_delay: "",
      progression_state: "",
      card_class: "",
      iconColor: "#ff4955"
    }, {
      label: (0, b.__)("Engagement rate", "ohmylms"),
      value: "-",
      tooltip: "",
      progression_percent: "",
      progression_text: "",
      progression_delay: "",
      progression_state: "",
      card_class: "",
      iconColor: ""
    }]), 2),
    n = t[0],
    r = t[1],
    a = L9((0, g.useState)(!0), 2),
    o = a[0],
    i = a[1],
    c = L9((0, g.useState)(!1), 2),
    u = c[0],
    s = c[1],
    d = L9((0, g.useState)(!1), 2),
    m = d[0],
    p = d[1],
    f = L9((0, g.useState)(!1), 2),
    v = f[0],
    w = f[1],
    E = (0, g.useCallback)(B9(D9().m(function t() {
      var n;
      return D9().w(function (t) {
        for (;;) switch (t.p = t.n) {
          case 0:
            return s(!0), t.p = 1, t.n = 2, e.fetchCommunities({});
          case 2:
            t.n = 4;
            break;
          case 3:
            t.p = 3, n = t.v, console.error("Error in fetchData:", n);
          case 4:
            return t.p = 4, s(!1), t.f(4);
          case 5:
            return t.a(2);
        }
      }, t, null, [[1, 3, 4, 5]]);
    })), [e]),
    S = (0, y.useSelect)(function (e) {
      try {
        var t, n;
        return (null === (t = (n = e(T.default)).getCommunities) || void 0 === t ? void 0 : t.call(n)) || [];
      } catch (e) {
        return [];
      }
    }, []),
    R = function () {
      var t = B9(D9().m(function t(n) {
        var r, a;
        return D9().w(function (t) {
          for (;;) switch (t.p = t.n) {
            case 0:
              if (!v && n) {
                t.n = 1;
                break;
              }
              return t.a(2);
            case 1:
              return t.p = 1, w(!0), t.n = 2, l()({
                path: "/ohmylms/v1/community/spaces/".concat(n),
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 2:
              r = t.v, e.setCommunity(r), t.n = 4;
              break;
            case 3:
              t.p = 3, a = t.v, console.error(a);
            case 4:
              return t.p = 4, w(!1), t.f(4);
            case 5:
              return t.a(2);
          }
        }, t, null, [[1, 3, 4, 5]]);
      }));
      return function (e) {
        return t.apply(this, arguments);
      };
    }(),
    x = function (e) {
      p(!0), R(null == e ? void 0 : e.id);
    },
    C = [{
      title: (0, b.__)("Space Name", "ohmylms"),
      dataIndex: "name",
      key: "name",
      render: function (e, t) {
        var n;
        return h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
          align: "start",
          justify: "start",
          gap: 4,
          onClick: function () {
            return x(t);
          },
          style: {
            cursor: "pointer"
          }
        }, null != t && t.image ? h().createElement(I.AvatarWP, {
          shape: "square",
          src: t.image,
          size: 100
        }) : h().createElement("span", null, h().createElement(SB, null)), h().createElement(I.TextWP, {
          as: "span",
          color: "#000d25",
          size: 16,
          numberOfLines: 2,
          truncate: !0
        }, Ge(null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : null == t ? void 0 : t.title))));
      }
    }, {
      title: (0, b.__)("Members", "ohmylms"),
      dataIndex: "members",
      key: "members",
      render: function (e) {
        return h().createElement(I.TextWP, null, null != e ? e : "-");
      }
    }, {
      title: (0, b.__)("Posts", "ohmylms"),
      dataIndex: "posts",
      key: "posts",
      render: function (e) {
        return h().createElement(I.TextWP, null, null != e ? e : "-");
      }
    }, {
      title: (0, b.__)("Engagement", "ohmylms"),
      dataIndex: "engagement",
      key: "engagement",
      render: function (e) {
        return h().createElement(I.TextWP, null, null != e ? e : "-");
      }
    }, {
      title: (0, b.__)("Last Activity", "ohmylms"),
      dataIndex: "last_activity",
      key: "last_activity",
      render: function (e) {
        return h().createElement(I.TextWP, null, null != e ? e : "-");
      }
    }, {
      title: (0, b.__)("Actions", "ohmylms"),
      key: "actions",
      render: function (e, t) {
        return h().createElement(I.DropdownMenuWP, {
          controls: [{
            title: (0, b.__)("View", "ohmylms"),
            onClick: function () {
              return e = null == t ? void 0 : t.url, void window.open(e, "_blank");
              var e;
            },
            icon: h().createElement(Br, null)
          }, {
            title: (0, b.__)("Settings", "ohmylms"),
            onClick: function () {
              return x(t);
            },
            icon: h().createElement(Rt, {
              width: "16"
            })
          }],
          icon: h().createElement(q.Icon, {
            icon: Ne.A
          })
        });
      }
    }];
  return (0, g.useEffect)(function () {
    l()({
      path: "/ohmylms/v1/communities/analytics",
      method: "GET"
    }).then(function (e) {
      var t, n, a, o, l, c;
      r([{
        label: (0, b.__)("Total members", "ohmylms"),
        tooltip: (0, b.__)("Total members in the community", "ohmylms"),
        value: null !== (t = null === (n = e.members) || void 0 === n ? void 0 : n.total) && void 0 !== t ? t : "-",
        progression_percent: "",
        progression_text: "",
        progression_delay: "",
        progression_state: "success",
        card_class: "card-earning",
        iconColor: "var(--ohmylms-primary-color)"
      }, {
        label: (0, b.__)("Total posts", "ohmylms"),
        tooltip: (0, b.__)("Total posts in the community", "ohmylms"),
        value: null !== (a = null === (o = e.posts) || void 0 === o ? void 0 : o.total) && void 0 !== a ? a : "-",
        progression_percent: "",
        progression_text: "",
        progression_delay: "",
        progression_state: "success",
        card_class: "card-refund",
        iconColor: "#ff4955"
      }, {
        label: (0, b.__)("Engagement rate", "ohmylms"),
        tooltip: (0, b.__)("Engagement rate in the community", "ohmylms"),
        value: null !== (l = null === (c = e.engagement) || void 0 === c ? void 0 : c.total) && void 0 !== l ? l : "-",
        progression_percent: "",
        progression_text: "",
        progression_delay: "",
        progression_state: "success",
        card_class: "card-net-income",
        iconColor: ""
      }]), i(!1);
    });
  }, []), (0, g.useEffect)(function () {
    var e = !0;
    return e && E(), function () {
      e = !1;
    };
  }, []), h().createElement(h().Fragment, null, h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    padding: 5
  }, h().createElement(I.CardWP, {
    variant: "secondary",
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingX: 7.5,
    paddingY: 6
  }, h().createElement(I.FlexWP, {
    gap: 4,
    align: "stretch",
    className: "ohmylms-overview-cards-wrapper"
  }, h().createElement(I.FlexItemWP, {
    style: {
      flex: "9"
    },
    className: "ohmylms-overview-left-cards"
  }, h().createElement(I.FlexWP, {
    direction: "column",
    align: "space-between",
    justify: "space-between"
  }, h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 6
  }, h().createElement(I.FlexWP, {
    wrap: !0,
    gap: 4
  }, n.map(function (e, t) {
    var n = (null == e ? void 0 : e.iconColor) || "#33A646";
    return h().createElement(I.FlexBlockWP, {
      key: e.label + t
    }, h().createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary",
      key: e.label
    }, h().createElement(I.SpacerWP, {
      paddingX: 4,
      paddingY: 5,
      marginBottom: 0
    }, o ? h().createElement(_.A, {
      rows: 3,
      active: !0
    }) : h().createElement(h().Fragment, null, h().createElement(I.BadgeWP, {
      isBorderLess: !0,
      isRounded: !0,
      padding: "7px"
    }, h().createElement("svg", {
      width: "13",
      height: "12",
      fill: "none",
      viewBox: "0 0 13 12",
      xmlns: "http://www.w3.org/2000/svg"
    }, h().createElement("path", {
      fill: n,
      fillRule: "evenodd",
      d: "M4.982 2.253c-.069-.285-.523-.285-.591 0L3.669 5.26c-.179.746-.917 1.28-1.772 1.28H1.06C.728 6.54.457 6.297.457 6c0-.298.27-.54.604-.54h.836c.285 0 .53-.177.59-.426l.722-3.007c.341-1.422 2.613-1.422 2.954 0l1.853 7.72c.068.284.522.284.59 0l.722-3.007c.18-.747.918-1.28 1.773-1.28h.835c.334 0 .604.242.604.54 0 .298-.27.54-.604.54h-.835c-.285 0-.532.177-.591.426l-.722 3.007c-.341 1.422-2.613 1.422-2.954 0l-1.852-7.72z",
      clipRule: "evenodd"
    }))), h().createElement(I.SpacerWP, {
      marginBottom: 5
    }), h().createElement(I.FlexWP, {
      direction: "column",
      gap: 2,
      className: "content-area"
    }, h().createElement(I.FlexWP, {
      align: "center",
      gap: 2,
      justify: "flex-start"
    }, h().createElement(I.TextWP, {
      as: "span",
      size: "14",
      variant: "muted"
    }, e.label), e.tooltip && h().createElement(V.A, {
      text: e.tooltip,
      className: "ohmylms-tooltip",
      placement: "top"
    }, h().createElement(h().Fragment, null, h().createElement(Mt.A, null)))), h().createElement("span", {
      style: {
        fontSize: "36px",
        fontWeight: "500",
        lineHeight: 1
      }
    }, e.value))))));
  }))))))))), h().createElement(I.SpacerWP, {
    marginTop: 6,
    marginBottom: 0
  }), h().createElement(I.CardWP, {
    variant: "secondary",
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingX: 7.5,
    paddingY: 6
  }, h().createElement(I.FlexWP, {
    direction: "column",
    gap: 4
  }, h().createElement(I.FlexItemWP, null, h().createElement(I.TextWP, {
    as: "h2",
    size: "20",
    weight: "700"
  }, (0, b.__)("Community Spaces", "ohmylms")), h().createElement(I.TextWP, {
    as: "div",
    size: "14",
    variant: "muted"
  }, (0, b.__)("Manage your course communities and track engagement", "ohmylms"))), h().createElement(I.CardWP, {
    isBorderless: !0,
    padding: "24px"
  }, h().createElement(sN.A, {
    columns: C,
    dataSource: S,
    loading: u,
    rowKey: "id",
    style: {
      marginTop: 0
    },
    locale: {
      emptyText: h().createElement(uf, {
        icon: h().createElement(df, null),
        title: (0, b.__)("No community spaces yet!", "ohmylms"),
        description: (0, b.__)("Navigate to your course editor and create a community space.", "ohmylms")
      })
    }
  }))))))), m && h().createElement(N9, {
    isOpen: m,
    setIsOpen: p,
    isLoading: v,
    onSuccess: E
  }));
};

const G9 = (0, g.memo)(H9);
