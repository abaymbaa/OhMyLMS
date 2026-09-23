// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var p3 = function () {
  var e = d3((0, g.useState)([]), 2),
    t = e[0],
    n = e[1],
    r = d3((0, g.useState)(!1), 2),
    a = r[0],
    o = r[1],
    i = d3((0, g.useState)(!1), 2),
    c = i[0],
    u = i[1],
    s = d3((0, g.useState)(null), 2),
    d = s[0],
    m = s[1],
    p = d3((0, g.useState)(null), 2),
    f = p[0],
    v = p[1],
    h = d3((0, g.useState)(!1), 2),
    _ = h[0],
    w = h[1],
    E = (0, z.A)(),
    S = E.openNotificationWithIcon,
    R = E.contextHolder,
    x = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    C = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    P = d3((0, g.useState)(null), 2),
    O = P[0],
    k = P[1],
    j = [{
      title: (0, b.__)("Badge Name", "ohmylms"),
      dataIndex: "name",
      key: "name",
      sorter: !0,
      width: "90%",
      render: function (e, t) {
        return React.createElement(I.FlexWP, {
          gap: 4,
          align: "start",
          justify: "start"
        }, React.createElement(I.AvatarWP, {
          shape: "square",
          src: t.image,
          size: 80
        }), React.createElement(I.FlexItemWP, null, React.createElement(I.TextWP, {
          as: "span",
          color: "#000d25",
          size: 16,
          numberOfLines: 2,
          truncate: !0,
          onClick: function () {
            return A(t);
          },
          style: {
            cursor: "pointer"
          }
        }, Ge(t.name)), O === (null == t ? void 0 : t.slug) && React.createElement(I.ButtonWP, {
          onClick: function () {
            return A(t);
          },
          label: (0, b.__)("Edit", "ohmylms"),
          variant: "text",
          style: {
            height: "26px"
          }
        }, React.createElement(pG.A, null))));
      }
    }, {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: null,
      render: function (e, t) {
        return React.createElement(I.DropdownMenuWP, {
          controls: [{
            title: (0, b.__)("Edit", "ohmylms"),
            onClick: function () {
              return A(t);
            },
            icon: React.createElement("span", null, React.createElement(pG.A, null))
          }, {
            title: (0, b.__)("Delete", "ohmylms"),
            onClick: function () {
              return M(null == t ? void 0 : t.slug);
            },
            icon: React.createElement(We, null)
          }],
          icon: React.createElement(q.Icon, {
            icon: Ne.A
          })
        });
      }
    }],
    A = function (e) {
      m(e), u(!0);
    },
    M = function (e) {
      w(!0), v(e);
    },
    F = function () {
      var e = s3(l3().m(function e() {
        var n, r, a;
        return l3().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, o(!0), n = t.filter(function (e) {
                return e.slug !== f;
              }), e.n = 1, l()({
                path: "/creator-lms/v1/engagement/badges",
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(n)
              });
            case 1:
              null != (r = e.v) && r.success && (N(), w(!1), S("success", (0, b.__)("Badge deleted successfully!", "ohmylms"))), e.n = 3;
              break;
            case 2:
              e.p = 2, a = e.v, console.error("Error deleting badge:", a);
            case 3:
              return e.p = 3, o(!1), e.f(3);
            case 4:
              return e.a(2);
          }
        }, e, null, [[0, 2, 3, 4]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    N = function () {
      var e = s3(l3().m(function e() {
        var t, r;
        return l3().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, o(!0), e.n = 1, l()({
                path: "creator-lms/v1/engagement/badges"
              });
            case 1:
              t = e.v, n(t), e.n = 3;
              break;
            case 2:
              e.p = 2, r = e.v, console.error(r);
            case 3:
              return e.p = 3, o(!1), e.f(3);
            case 4:
              return e.a(2);
          }
        }, e, null, [[0, 2, 3, 4]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && N(), function () {
      e = !1;
    };
  }, []), (0, g.useEffect)(function () {
    !a && x && S(C, x);
  }, [x]), (0, g.useEffect)(function () {
    c || (m(null), v(null));
  }, [c]), React.createElement(React.Fragment, null, R, React.createElement(I.CardWP, {
    isBorderless: !0,
    fullWidth: !0
  }, React.createElement(I.SpacerWP, {
    padding: 5
  }, React.createElement(I.SpacerWP, {
    marginBottom: 4
  }, React.createElement(I.FlexWP, {
    gap: 3,
    justify: "flex-end"
  }, React.createElement(lf, {
    label: (0, b.__)("Add Badge", "ohmylms"),
    onClick: function () {
      return u(!0);
    }
  }))), React.createElement(I.TableWP, {
    rowKey: "id",
    columns: j,
    dataSource: t || [],
    loading: a,
    scroll: {
      x: "max-content"
    },
    onMouseEnterOnRow: function (e) {
      return k(null == e ? void 0 : e.slug);
    },
    onMouseLeaveOnRow: function () {
      return k(null);
    },
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No badge yet!", "ohmylms"),
        description: (0, b.__)("Start building your first badge and it'll show up here as soon as you hit publish.", "ohmylms")
      })
    }
  }))), c && React.createElement(i3, {
    data: d,
    isOpen: c,
    onClose: u,
    badgeList: t,
    setItems: n,
    fetchData: N
  }), _ && React.createElement(Ie, {
    title: (0, b.__)("Delete Badge", "ohmylms"),
    description: (0, b.__)("Are you sure you want to delete this badge?", "ohmylms"),
    onClose: function () {
      w(!1);
    },
    onDelete: F,
    isOpen: _,
    isDelete: !0
  }));
};

const f3 = (0, g.memo)(p3);

function v3() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return g3(u, "_invoke", function (n, r, a) {
      var o,
        l,
        c,
        u = 0,
        s = a || [],
        d = !1,
        m = {
          p: 0,
          n: 0,
          v: e,
          a: p,
          f: p.bind(e, 4),
          d: function (t, n) {
            return o = t, l = 0, c = e, m.n = n, i;
          }
        };
      function p(n, r) {
        for (l = n, c = r, t = 0; !d && u && !a && t < s.length; t++) {
          var a,
            o = s[t],
            p = m.p,
            f = o[2];
          n > 3 ? (a = f === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, l = 0));
        }
        if (a || n > 1) return i;
        throw d = !0, r;
      }
      return function (a, s, f) {
        if (u > 1) throw TypeError("Generator is already running");
        for (d && 1 === s && p(s, f), l = s, c = f; (t = l < 2 ? e : c) || !d;) {
          o || (l ? l < 3 ? (l > 1 && (m.n = -1), p(l, c)) : m.n = c : m.v = c);
          try {
            if (u = 2, o) {
              if (l || (a = "next"), t = o[a]) {
                if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                c = t.value, l < 2 && (l = 0);
              } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
              o = e;
            } else if ((t = (d = m.n < 0) ? c : n.call(r, m)) !== i) break;
          } catch (t) {
            o = e, l = 1, c = t;
          } finally {
            u = 1;
          }
        }
        return {
          value: t,
          done: d
        };
      };
    }(n, a, o), !0), u;
  }
  var i = {};
  function l() {}
  function c() {}
  function u() {}
  t = Object.getPrototypeOf;
  var s = [][r] ? t(t([][r]())) : (g3(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, g3(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, g3(d, "constructor", u), g3(u, "constructor", c), c.displayName = "GeneratorFunction", g3(u, a, "GeneratorFunction"), g3(d), g3(d, a, "Generator"), g3(d, r, function () {
    return this;
  }), g3(d, "toString", function () {
    return "[object Generator]";
  }), (v3 = function () {
    return {
      w: o,
      m
    };
  })();
}

function g3(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  g3 = function (e, t, n, r) {
    function o(t, n) {
      g3(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, g3(e, t, n, r);
}

function h3(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function y3(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        h3(o, r, a, i, l, "next", e);
      }
      function l(e) {
        h3(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function b3(e, t) {
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
      if ("string" == typeof e) return _3(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _3(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function _3(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var w3 = function () {
  var e = (0, L.useIsPro)(),
    t = (0, y.useDispatch)(T.default),
    n = b3((0, g.useState)({
      enable: !1,
      rules: [{
        badgeId: 0,
        settings: [{
          dataLabel: "Points",
          dataValue: "points",
          dataFieldType: "select",
          compareSign: ">=",
          compareData: 100,
          compareDataFieldType: "input"
        }]
      }]
    }), 2),
    r = n[0],
    a = n[1],
    o = b3((0, g.useState)([]), 2),
    i = (o[0], o[1], b3((0, g.useState)(!1), 2)),
    c = (i[0], i[1], b3((0, g.useState)({
      name: "",
      slug: "",
      description: "",
      image: null
    }), 2)),
    u = (c[0], c[1], (0, z.A)()),
    s = u.openNotificationWithIcon,
    d = u.contextHolder,
    m = b3((0, g.useState)(!1), 2),
    p = (m[0], m[1], (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, [])),
    f = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    v = b3((0, g.useState)(!1), 2),
    h = v[0],
    _ = v[1],
    w = b3((0, g.useState)(!1), 2),
    E = w[0],
    S = w[1],
    R = b3((0, g.useState)(!1), 2),
    x = R[0],
    C = R[1],
    P = b3((0, g.useState)(null), 2);
  P[0], P[1], (0, g.useEffect)(function () {
    var t = function () {
      var e = y3(v3().m(function e() {
        var t;
        return v3().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              return _(!0), e.n = 1, l()({
                path: "creator-lms/v1/engagement/settings/badge"
              });
            case 1:
              t = e.v, a(t || r), _(!1);
            case 2:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
    e && t();
  }, []), (0, g.useEffect)(function () {
    !h && p && s(f, p);
  }, [p]);
  var O = function () {
    var n = y3(v3().m(function n() {
      return v3().w(function (n) {
        for (;;) switch (n.p = n.n) {
          case 0:
            if (e) {
              n.n = 1;
              break;
            }
            return n.a(2);
          case 1:
            return t.setLoadingSetting(!0), S(!0), n.p = 2, n.n = 3, l()({
              path: "/creator-lms/v1/engagement/settings/badge",
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(r)
            });
          case 3:
            s("success", (0, b.__)("Settings saved successfully.", "ohmylms")), n.n = 5;
            break;
          case 4:
            n.p = 4, n.v, s("error", (0, b.__)("Something went wrong.", "ohmylms"));
          case 5:
            return n.p = 5, t.setLoadingSetting(!1), S(!1), n.f(5);
          case 6:
            return n.a(2);
        }
      }, n, null, [[2, 4, 5, 6]]);
    }));
    return function () {
      return n.apply(this, arguments);
    };
  }();
  return (0, g.useEffect)(function () {
    !h && p && s(f, p);
  }, [p]), h ? React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    marginTop: 2.5,
    padding: 6
  }, React.createElement(I.SkeletonWP, {
    active: !0,
    rows: 15
  }))) : React.createElement(React.Fragment, null, d, React.createElement(I.ProOverlayWP, {
    title: (0, b.__)("Badges are available in the OhMyLMS version. Upgrade to Pro today to unlock this and more powerful features.", "ohmylms")
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 0,
    marginTop: 2.5,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "flex-start",
    direction: "column",
    gap: 3
  }, React.createElement(f3, null)))), React.createElement(I.SpacerWP, {
    paddingTop: 6,
    paddingBottom: 25
  }, React.createElement(I.FlexWP, {
    justify: "flex-end"
  }, React.createElement(I.ButtonWP, {
    variant: "primary",
    size: "md",
    onClick: O,
    isBusy: E
  }, (0, b.__)("Save", "ohmylms")))), x && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: x,
    onClose: C
  })));
};

const E3 = (0, g.memo)(w3);

function S3(e) {
  return function (e) {
    if (Array.isArray(e)) return R3(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return R3(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? R3(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function R3(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var x3 = function (e) {
  var t = e.rules,
    n = e.setRules,
    r = [{
      label: "Points",
      value: "points"
    }],
    a = [{
      label: "Greater than",
      value: ">"
    }, {
      label: "Greater than or equal",
      value: ">="
    }, {
      label: "Equal",
      value: "=="
    }, {
      label: "Less than",
      value: "<"
    }, {
      label: "Less than or equal",
      value: "<="
    }],
    o = function (e, r, a) {
      var o = S3(t);
      o[e][r] = a, n(o);
    };
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0,
    padding: "20px",
    fullWidth: !0
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Set Level Conditions", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 2
  }), null == t ? void 0 : t.map(function (e, i) {
    return React.createElement(I.FlexWP, {
      key: i,
      align: "flex-start",
      style: {
        marginBottom: "8px"
      }
    }, React.createElement(I.FlexItemWP, null, React.createElement(I.SelectWP, {
      options: r,
      value: null == e ? void 0 : e.dataValue,
      onChange: function (e) {
        return o(i, "dataValue", e);
      },
      style: {
        minWidth: "180px"
      }
    })), React.createElement(I.FlexItemWP, null, React.createElement(I.SelectWP, {
      options: a,
      value: null == e ? void 0 : e.compareSign,
      onChange: function (e) {
        return o(i, "compareSign", e);
      },
      style: {
        minWidth: "80px"
      }
    })), React.createElement(I.FlexItemWP, null, React.createElement(I.InputNumberWP, {
      value: null == e ? void 0 : e.compareData,
      onChange: function (e) {
        return o(i, "compareData", e);
      },
      style: {
        width: "100px"
      },
      min: 0
    })), React.createElement(I.FlexItemWP, null, React.createElement(I.ButtonWP, {
      onClick: function () {
        return function (e) {
          var r = t;
          r.splice(e, 1), n(r);
        }(i);
      },
      icon: React.createElement(We, null),
      disabled: 1 === (null == t ? void 0 : t.length)
    })));
  }), React.createElement(I.FlexWP, {
    justify: "end",
    align: "center",
    style: {
      marginTop: "12px"
    }
  }, React.createElement(lf, {
    label: (0, b.__)("Add Condition", "ohmylms"),
    onClick: function () {
      n([].concat(S3(t), [{
        dataLabel: "Points",
        dataValue: "points",
        dataFieldType: "select",
        compareSign: ">=",
        compareData: 0,
        compareDataFieldType: "input"
      }]));
    }
  }))));
};

const C3 = (0, g.memo)(x3);

function P3(e) {
  return P3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, P3(e);
}

function O3(e, t) {
  var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = W3(e)) || t && e && "number" == typeof e.length) {
      n && (e = n);
      var r = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: a
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    i = !0,
    l = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return i = e.done, e;
    },
    e: function (e) {
      l = !0, o = e;
    },
    f: function () {
      try {
        i || null == n.return || n.return();
      } finally {
        if (l) throw o;
      }
    }
  };
}

function k3(e) {
  return function (e) {
    if (Array.isArray(e)) return z3(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || W3(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function j3() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return A3(u, "_invoke", function (n, r, a) {
      var o,
        l,
        c,
        u = 0,
        s = a || [],
        d = !1,
        m = {
          p: 0,
          n: 0,
          v: e,
          a: p,
          f: p.bind(e, 4),
          d: function (t, n) {
            return o = t, l = 0, c = e, m.n = n, i;
          }
        };
      function p(n, r) {
        for (l = n, c = r, t = 0; !d && u && !a && t < s.length; t++) {
          var a,
            o = s[t],
            p = m.p,
            f = o[2];
          n > 3 ? (a = f === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, l = 0));
        }
        if (a || n > 1) return i;
        throw d = !0, r;
      }
      return function (a, s, f) {
        if (u > 1) throw TypeError("Generator is already running");
        for (d && 1 === s && p(s, f), l = s, c = f; (t = l < 2 ? e : c) || !d;) {
          o || (l ? l < 3 ? (l > 1 && (m.n = -1), p(l, c)) : m.n = c : m.v = c);
          try {
            if (u = 2, o) {
              if (l || (a = "next"), t = o[a]) {
                if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                c = t.value, l < 2 && (l = 0);
              } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
              o = e;
            } else if ((t = (d = m.n < 0) ? c : n.call(r, m)) !== i) break;
          } catch (t) {
            o = e, l = 1, c = t;
          } finally {
            u = 1;
          }
        }
        return {
          value: t,
          done: d
        };
      };
    }(n, a, o), !0), u;
  }
  var i = {};
  function l() {}
  function c() {}
  function u() {}
  t = Object.getPrototypeOf;
  var s = [][r] ? t(t([][r]())) : (A3(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, A3(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, A3(d, "constructor", u), A3(u, "constructor", c), c.displayName = "GeneratorFunction", A3(u, a, "GeneratorFunction"), A3(d), A3(d, a, "Generator"), A3(d, r, function () {
    return this;
  }), A3(d, "toString", function () {
    return "[object Generator]";
  }), (j3 = function () {
    return {
      w: o,
      m
    };
  })();
}

function A3(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  A3 = function (e, t, n, r) {
    function o(t, n) {
      A3(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, A3(e, t, n, r);
}

function M3(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function T3(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        M3(o, r, a, i, l, "next", e);
      }
      function l(e) {
        M3(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function I3(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function F3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? I3(Object(n), !0).forEach(function (t) {
      N3(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I3(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function N3(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != P3(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != P3(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == P3(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function D3(e, t) {
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
  }(e, t) || W3(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function W3(e, t) {
  if (e) {
    if ("string" == typeof e) return z3(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? z3(e, t) : void 0;
  }
}

function z3(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
