// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var lN = n(24011),
  cN = n(48894),
  uN = n(14707),
  sN = n(65),
  dN = n(5556),
  mN = n.n(dN),
  pN = function (e) {
    var t = e.total,
      n = e.currentPage,
      r = e.onPageChange,
      a = e.perPage,
      o = void 0 === a ? 10 : a;
    return h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
      marginTop: 4,
      paddingTop: 4,
      style: {
        borderTop: "1px solid #f0f0f0"
      },
      className: "omlms-pagination-wrapper"
    }, h().createElement(I.FlexWP, {
      align: "center",
      justify: "end"
    }, h().createElement(I.FlexWP, {
      align: "center",
      justify: "end",
      gap: "10px"
    }, h().createElement(I.TextWP, {
      size: "15px"
    }, (0, b.__)("Page", "ohmylms")), h().createElement(I.SelectWP, {
      value: n,
      onChange: function (e) {
        return r(Number(e));
      },
      options: Array.from({
        length: Math.ceil(t / o)
      }, function (e, t) {
        return {
          label: "".concat(t + 1),
          value: t + 1
        };
      }),
      style: {
        width: "50px"
      }
    }), h().createElement(I.TextWP, {
      className: "omlms-pagination-info",
      size: "15px",
      html: !0
    }, "<span>".concat((0, b.__)("of", "ohmylms"), "</span> <span>").concat(Math.ceil(t / o), "</span>")), h().createElement(I.FlexItemWP, {
      className: "omlms-pagination-buttons"
    }, h().createElement(I.ButtonWP, {
      icon: h().createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        "aria-hidden": "true",
        focusable: "false"
      }, h().createElement("path", {
        d: "M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z"
      })),
      onClick: function () {
        return r(Math.max(1, n - 1));
      },
      disabled: n <= 1
    }), h().createElement(I.ButtonWP, {
      icon: h().createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        "aria-hidden": "true",
        focusable: "false"
      }, h().createElement("path", {
        d: "M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"
      })),
      onClick: function () {
        return r(Math.min(Math.ceil(t / o), n + 1));
      },
      disabled: n >= Math.ceil(t / o)
    }))))));
  };

pN.propTypes = {
  total: mN().number.isRequired,
  currentPage: mN().number.isRequired,
  onPageChange: mN().func.isRequired,
  showSizeChanger: mN().bool,
  defaultPageSize: mN().number
};

const fN = pN;

function vN(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var gN = function (e) {
  var t = e.items,
    n = void 0 === t ? [] : t,
    r = e.setItems,
    a = e.bulksActions,
    o = void 0 === a ? [] : a,
    i = e.spacerMarginBottom,
    l = void 0 === i ? 4 : i,
    c = function (e, t) {
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
          if ("string" == typeof e) return vN(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vN(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(o ? o[0] : null), 2),
    u = c[0],
    s = c[1],
    d = (0, g.useCallback)(function () {
      r([]);
    }, []),
    m = (0, g.useCallback)(function (e) {
      var t = o.find(function (t) {
        return t.value === e;
      });
      s(t);
    }, [o]),
    p = (0, g.useCallback)(function () {
      u && "function" == typeof (null == u ? void 0 : u.action) && (null == u || u.action());
    }, [u]);
  return React.createElement(I.SpacerWP, {
    marginBottom: l
  }, React.createElement(I.FlexWP, {
    align: "center",
    justify: "start",
    gap: "2"
  }, React.createElement("p", null, n.length, " ", (0, b.__)("".concat(1 === n.length ? "item" : "items", " selected"), "ohmylms")), React.createElement(I.ButtonWP, {
    onClick: d,
    variant: "secondary"
  }, (0, b.__)("Deselect", "ohmylms")), React.createElement(vn.A, {
    placeholder: (0, b.__)("Bulk Action", "ohmylms"),
    onChange: m,
    options: o.map(function (e) {
      return {
        label: e.label,
        value: e.value,
        disabled: null == e ? void 0 : e.disabled
      };
    }),
    size: "large",
    style: {
      width: "150px",
      height: "36px",
      minHeight: "36px"
    }
  }), React.createElement(I.ButtonWP, {
    onClick: p,
    variant: "primary"
  }, (0, b.__)("Apply", "ohmylms"))));
};

const hN = (0, g.memo)(gN);

function yN(e) {
  return function (e) {
    if (Array.isArray(e)) return xN(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || RN(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function bN() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return _N(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (_N(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, _N(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, _N(d, "constructor", u), _N(u, "constructor", c), c.displayName = "GeneratorFunction", _N(u, a, "GeneratorFunction"), _N(d), _N(d, a, "Generator"), _N(d, r, function () {
    return this;
  }), _N(d, "toString", function () {
    return "[object Generator]";
  }), (bN = function () {
    return {
      w: o,
      m
    };
  })();
}

function _N(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  _N = function (e, t, n, r) {
    function o(t, n) {
      _N(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _N(e, t, n, r);
}

function wN(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function EN(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        wN(o, r, a, i, l, "next", e);
      }
      function l(e) {
        wN(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function SN(e, t) {
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
  }(e, t) || RN(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function RN(e, t) {
  if (e) {
    if ("string" == typeof e) return xN(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xN(e, t) : void 0;
  }
}

function xN(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var CN = function (e) {
  e.automationFor;
  var t = e.handleToggleEditor,
    n = e.contentId,
    r = e.setAutomationId,
    a = e.isCreating,
    o = e.handleShowRecipes,
    i = e.handleClose,
    c = SN((0, g.useState)("date_created_desc"), 2),
    u = c[0],
    s = c[1],
    d = SN((0, g.useState)([]), 2),
    m = d[0],
    p = d[1],
    f = SN((0, g.useState)(1), 2),
    v = f[0],
    h = f[1],
    _ = SN((0, g.useState)(5), 2),
    w = _[0],
    E = (_[1], SN((0, g.useState)([]), 2)),
    S = E[0],
    R = E[1],
    x = SN((0, g.useState)(0), 2),
    C = x[0],
    P = x[1],
    O = SN((0, g.useState)(!1), 2),
    k = O[0],
    j = O[1],
    A = SN((0, g.useState)(""), 2),
    M = A[0],
    F = A[1],
    N = SN((0, g.useState)(!1), 2),
    D = N[0],
    W = N[1],
    B = SN((0, g.useState)(null), 2),
    L = B[0],
    V = B[1],
    H = (0, z.A)(),
    G = H.openNotificationWithIcon,
    U = (H.contextHolder, (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, [])),
    Y = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    Q = (0, y.useDispatch)(T.default),
    Z = (0, g.useMemo)(function () {
      return [{
        value: "date_created_asc",
        label: (0, b.__)("Date created asc", "ohmylms")
      }, {
        value: "date_created_desc",
        label: (0, b.__)("Date created desc", "ohmylms")
      }, {
        value: "name_asc",
        label: (0, b.__)("Name (A-Z)", "ohmylms")
      }, {
        value: "name_desc",
        label: (0, b.__)("Name (Z-A)", "ohmylms")
      }];
    }, []),
    $ = (0, g.useCallback)(EN(bN().m(function e() {
      var t, r, a, o;
      return bN().w(function (e) {
        for (;;) switch (e.p = e.n) {
          case 0:
            if (n) {
              e.n = 1;
              break;
            }
            return e.a(2);
          case 1:
            return e.p = 1, j(!0), t = {
              page: v,
              per_page: 5,
              search: M,
              offset: 5 * (v - 1),
              orderby: u
            }, e.n = 2, l()({
              path: (0, lN.addQueryArgs)("creator-lms/v1/automation/content/".concat(n), t),
              parse: !1
            });
          case 2:
            return r = e.v, e.n = 3, r.json();
          case 3:
            a = e.v, R((null == a ? void 0 : a.data) || []), P((null == a ? void 0 : a.count) || 0), e.n = 5;
            break;
          case 4:
            e.p = 4, o = e.v, console.error("Error fetching automations:", o);
          case 5:
            return e.p = 5, j(!1), e.f(5);
          case 6:
            return e.a(2);
        }
      }, e, null, [[1, 4, 5, 6]]);
    })), [n, M, v, w, u]),
    K = (0, cN.useDebounce)(function (e) {
      F(e);
    }, 500),
    J = function (e) {
      r(e), t();
    },
    X = function () {
      var e = EN(bN().m(function e(t) {
        return bN().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (t) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              V([t]), W(!0);
            case 2:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    ee = function () {
      W(!1);
    },
    te = function () {
      var e = EN(bN().m(function e(t) {
        var r, a;
        return bN().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (m.length || L && n && 0 !== (null == L ? void 0 : L.length)) {
                e.n = 1;
                break;
              }
              return W(!1), e.a(2);
            case 1:
              return e.p = 2, r = {
                ids: yN(L || m)
              }, Array.isArray(t) && 0 !== (null == t ? void 0 : t.length) && (r.ids = t), e.n = 3, l()({
                path: "creator-lms/v1/automation/content/".concat(n),
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(r)
              });
            case 3:
              e.v, Q.showNotification((0, b.__)("Automation deleted successfully.", "ohmylms"), "success"), p([]), V(null), ee(), e.n = 5;
              break;
            case 4:
              e.p = 4, a = e.v, console.error("Error deleting automations:", a), Q.showNotification((0, b.__)("Something went wrong", "ohmylms"), "error");
            case 5:
              return e.p = 5, h(1), $(), e.f(5);
            case 6:
              return e.a(2);
          }
        }, e, null, [[2, 4, 5, 6]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    ne = function () {
      var e = EN(bN().m(function e(t) {
        var r, a;
        return bN().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (t) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, j(!0), e.n = 2, l()({
                path: "creator-lms/v1/automation/".concat(t, "/content/").concat(n),
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 2:
              "success" === (null == (r = e.v) ? void 0 : r.status) && null != r && r.automation_id ? (Q.showNotification((0, b.__)("Automation duplicated successfully.", "ohmylms"), "success"), J(null == r ? void 0 : r.automation_id)) : Q.showNotification((0, b.__)("Something went wrong", "ohmylms"), "error"), e.n = 4;
              break;
            case 3:
              e.p = 3, a = e.v, console.error("Error duplicating automation:", a);
            case 4:
              return e.p = 4, j(!1), $(), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    re = {
      selectedRowKeys: m,
      onChange: p
    },
    ae = function () {
      var e = EN(bN().m(function e(t, n) {
        var r, a;
        return bN().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (t) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, j(!0), r = {
                status: "pause"
              }, n && (r.status = "active"), e.n = 2, l()({
                path: "creator-lms/v1/automation/".concat(t),
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(r)
              });
            case 2:
              e.v ? Q.showNotification((0, b.__)("Automation ".concat(n ? "activated" : "paused", " successfully."), "ohmylms"), "success") : Q.showNotification((0, b.__)("Something went wrong", "ohmylms"), "error"), e.n = 4;
              break;
            case 3:
              e.p = 3, a = e.v, console.error("Error updating automation:", a);
            case 4:
              return e.p = 4, j(!1), $(), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function (t, n) {
        return e.apply(this, arguments);
      };
    }(),
    oe = [{
      title: (0, b.__)("Automation Name", "ohmylms"),
      dataIndex: "name",
      key: "name",
      className: "omlms-automation-name-wrapper",
      render: function (e, t) {
        return React.createElement(React.Fragment, null, React.createElement(I.TextWP, {
          as: "p",
          color: "#000d25",
          size: 16,
          numberOfLines: 2,
          truncate: !0,
          onClick: function () {
            return J(null == t ? void 0 : t.id);
          },
          style: {
            cursor: "pointer"
          }
        }, e || "-"), React.createElement(I.TextWP, {
          variant: "muted"
        }, aN()(null == t ? void 0 : t.created_at).format("MMM D, YYYY h:mm A") || "-"));
      }
    }, {
      title: (0, b.__)("Entered", "ohmylms"),
      dataIndex: "enterance",
      key: "enterance",
      className: "omlms-automation-entered-wrapper",
      width: 100,
      render: function (e, t) {
        return React.createElement("span", {
          className: "omlms-automation-entered"
        }, e);
      }
    }, {
      title: (0, b.__)("Processing", "ohmylms"),
      dataIndex: "processing",
      key: "processing",
      className: "omlms-automation-processing-wrapper",
      width: 100,
      render: function (e, t) {
        return React.createElement("span", {
          className: "omlms-automation-processing"
        }, e);
      }
    }, {
      title: (0, b.__)("Completed", "ohmylms"),
      dataIndex: "completed",
      key: "completed",
      width: 100,
      className: "omlms-automation-completed-wrapper",
      render: function (e, t) {
        return React.createElement("span", {
          className: "omlms-automation-completed"
        }, e);
      }
    }, {
      title: (0, b.__)("Status", "ohmylms"),
      dataIndex: "status",
      key: "status",
      width: 100,
      className: "omlms-automation-status-wrapper",
      render: function (e, t) {
        return React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "draft" === e ? "secondary" : "pause" === e ? "warning" : "success",
          textTransform: "capitalize"
        }, e || "draft");
      }
    }, {
      title: (0, b.__)("Pause/Run", "ohmylms"),
      dataIndex: "pause_run",
      key: "pause_run",
      width: 100,
      className: "omlms-automation-pause-run-wrapper",
      render: function (e, t) {
        return React.createElement(Bt.A, {
          checked: "active" === (null == t ? void 0 : t.status),
          onChange: function (e) {
            return ae(null == t ? void 0 : t.id, e);
          },
          disabled: "draft" === (null == t ? void 0 : t.status)
        });
      }
    }, {
      title: "",
      dataIndex: "action",
      key: "action",
      width: 80,
      className: "omlms-automation-action-wrapper",
      render: function (e, t) {
        return React.createElement(I.DropdownMenuWP, {
          controls: [{
            title: (0, b.__)("Edit", "ohmylms"),
            key: "1",
            onClick: function () {
              return J(null == t ? void 0 : t.id);
            },
            icon: React.createElement("span", null, React.createElement(Re, null))
          }, {
            title: (0, b.__)("Duplicate", "ohmylms"),
            key: "2",
            onClick: function () {
              return ne(null == t ? void 0 : t.id);
            },
            icon: React.createElement(yc, null)
          }, {
            title: (0, b.__)("Delete", "ohmylms"),
            key: "3",
            onClick: function () {
              return X(null == t ? void 0 : t.id);
            },
            icon: React.createElement(We, null)
          }],
          icon: React.createElement(q.Icon, {
            icon: Ne.A
          })
        });
      }
    }],
    ie = (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("Delete", "ohmylms"),
        value: "delete",
        action: function () {
          W(!0);
        }
      }];
    }, []);
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && $(), function () {
      return e = !1;
    };
  }, [n, v, w, u, M]), (0, g.useEffect)(function () {
    !k && U && G(Y, U);
  }, [U]), React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    gap: 4
  }, React.createElement(I.HeadingWP, {
    level: 2
  }, (0, b.__)("Automation", "ohmylms")), React.createElement(I.ButtonWP, {
    icon: React.createElement(nf, null),
    variant: "primary",
    onClick: o,
    isBusy: a,
    style: {
      marginLeft: "auto"
    },
    className: "omlms-add-automation-button"
  }, (0, b.__)("Add Automation", "ohmylms")), React.createElement(I.ButtonWP, {
    icon: React.createElement(q.Icon, {
      icon: uN.A,
      width: "24px",
      height: "24px"
    }),
    variant: "tertiary",
    onClick: i
  })), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement(I.CardWP, {
    variant: "secondary",
    isBorderless: !0,
    padding: "24px"
  }, React.createElement(I.FlexWP, null, m.length > 0 ? React.createElement(React.Fragment, null, React.createElement(hN, {
    items: m,
    setItems: p,
    bulksActions: ie
  })) : React.createElement(React.Fragment, null, React.createElement(vn.A, {
    className: "omlms-automation-list-select-sort",
    suffixIcon: React.createElement(fn, null),
    options: Z,
    value: u,
    onChange: function (e) {
      s(e);
    },
    classNames: {
      popup: {
        root: "omlms-ant-select-dropdown"
      }
    }
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    padding: "8px"
  }, React.createElement(I.SearchControlWP, {
    className: "omlms-search-input",
    placeholder: (0, b.__)("Search Automation", "ohmylms"),
    onChange: K
  })))), React.createElement(I.CardWP, {
    isBorderless: !0,
    padding: "20px",
    margin: "16px 0 0"
  }, React.createElement(sN.A, {
    className: "omlms-automation-list-table",
    columns: oe,
    dataSource: k ? [] : S,
    rowKey: "id",
    pagination: !1,
    rowSelection: re,
    loading: k,
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No Automation Found.", "ohmylms")
      })
    }
  }), C > 5 && React.createElement(fN, {
    total: C,
    currentPage: v,
    perPage: w,
    onPageChange: function (e) {
      h(e), setSelectedRowKeys([]);
    }
  }))), D && React.createElement(Ie, {
    title: (0, b.__)("Delete Automation", "ohmylms"),
    description: (0, b.__)("Are you sure you want to delete the automation?", "ohmylms"),
    onClose: ee,
    onDelete: te,
    isOpen: D,
    isDelete: !0
  }));
};

const PN = (0, g.memo)(CN);

function ON() {
  return React.createElement("svg", {
    className: "omlms-course-enrollment-automation-icon",
    width: "24",
    height: "25",
    fill: "none",
    viewBox: "0 0 24 25",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#7A8B9A",
    fillRule: "evenodd",
    d: "M1.792 5.261a1.379 1.379 0 000 2.495l1.973.932v5.41c0 1.023.333 2.166 1.303 2.87 1.223.883 3.45 1.96 6.983 1.96 3.533 0 5.754-1.084 6.983-1.96.97-.701 1.302-1.835 1.302-2.87v-5.41l1.38-.653v6.058a.69.69 0 001.38 0v-7.59a1.38 1.38 0 00-.79-1.247L14.414 1.53a5.52 5.52 0 00-4.72 0L1.8 5.256l-.008.005zm3.353 8.832v-4.76l4.54 2.152a5.52 5.52 0 004.72 0l4.54-2.153v4.761c0 .768-.248 1.394-.731 1.74-1 .72-2.94 1.71-6.169 1.71-3.229 0-5.175-.982-6.168-1.71-.482-.349-.732-.98-.732-1.74zM10.28 2.777a4.126 4.126 0 013.533 0l7.893 3.726-7.893 3.726a4.127 4.127 0 01-3.533 0L2.385 6.503l7.894-3.726z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#7A8B9A",
    d: "M1.792 5.261l.042.09a.1.1 0 00.013-.006l-.055-.084zM1 6.51h.1H1zm.792 1.247l.043-.09-.043.09zm1.973.932h.1a.1.1 0 00-.057-.09l-.043.09zm1.303 8.28l-.059.08v.001l.059-.081zm13.966 0l.058.081-.058-.081zm1.302-8.28l-.042-.09a.1.1 0 00-.058.09h.1zm1.38-.653h.1a.1.1 0 00-.142-.09l.042.09zm1.38-1.532h-.1.1zm-.79-1.247l.044-.09-.043.09zM14.414 1.53l-.042.09.042-.09zm-4.72 0l.043.09-.042-.09zM1.8 5.256l-.043-.09a.1.1 0 00-.012.007l.055.083zm3.345 4.076l.043-.09a.1.1 0 00-.143.09h.1zm4.54 2.153l-.042.09.042-.09zm2.36.53v.1-.1zm2.36-.53l.043.09-.043-.09zm4.54-2.153h.1a.1.1 0 00-.143-.09l.043.09zm-.731 6.5l-.058-.081.058.081zm-12.337 0l.059-.08-.06.08zm4.402-13.055l.043.09-.043-.09zm3.533 0l-.043.09.043-.09zm7.893 3.726l.043.09a.1.1 0 000-.18l-.043.09zm-7.893 3.726l-.043-.09.043.09zm-3.533 0l.043-.09-.043.09zM2.385 6.503l-.042-.09a.1.1 0 000 .18l.042-.09zM1.75 5.171a1.49 1.49 0 00-.619.545l.17.108c.13-.205.315-.369.534-.472L1.75 5.17zm-.619.545c-.15.237-.23.512-.23.793h.2c0-.243.07-.48.2-.685l-.17-.108zM.9 6.51c0 .28.08.555.23.792l.17-.107c-.13-.205-.2-.442-.2-.685H.9zm.23.792c.15.237.365.426.62.546l.084-.181a1.279 1.279 0 01-.535-.472l-.169.107zm.62.546l1.973.931.085-.18-1.973-.932-.086.18zm1.915.84v5.41h.2v-5.41h-.2zm0 5.41c0 1.043.339 2.222 1.344 2.952l.118-.162c-.935-.678-1.262-1.784-1.262-2.79h-.2zM5.01 17.05c1.24.895 3.487 1.979 7.042 1.979v-.2c-3.511 0-5.718-1.07-6.924-1.941l-.118.162zm7.042 1.979c3.555 0 5.797-1.091 7.04-1.979l-.116-.162c-1.212.864-3.414 1.94-6.924 1.94v.2zm7.041-1.979c1.006-.727 1.344-1.898 1.344-2.951h-.2c0 1.016-.326 2.113-1.261 2.789l.117.162zm1.344-2.951v-5.41h-.2v5.41h.2zm-.057-5.32l1.38-.652-.085-.181-1.38.653.085.18zm1.237-.743v6.058h.2V8.035h-.2zm0 6.058c0 .21.084.41.232.559l.141-.141a.59.59 0 01-.173-.418h-.2zm.232.559a.79.79 0 00.558.231v-.2a.59.59 0 01-.417-.172l-.141.141zm.558.231a.79.79 0 00.559-.231l-.142-.141a.59.59 0 01-.417.172v.2zm.559-.231a.79.79 0 00.231-.559h-.2a.59.59 0 01-.172.418l.14.141zm.231-.559v-7.59h-.2v7.59h.2zm0-7.59c0-.28-.08-.554-.229-.791l-.169.107c.13.204.198.442.198.684h.2zm-.229-.791a1.48 1.48 0 00-.617-.547l-.086.181c.22.104.404.268.534.473l.169-.107zm-.617-.547L14.456 1.44l-.085.181 7.893 3.726.086-.18zM14.456 1.44A5.62 5.62 0 0012.054.9v.2a5.42 5.42 0 012.317.52l.085-.18zM12.054.9a5.62 5.62 0 00-2.403.54l.085.18a5.42 5.42 0 012.317-.52V.9zm-2.403.54L1.757 5.164l.086.181L9.736 1.62l-.085-.18zM1.745 5.172l-.009.005.111.167.009-.006-.111-.166zm3.5 8.92v-4.76h-.2v4.76h.2zm-.143-4.67l4.54 2.152.086-.18-4.54-2.153-.086.18zm4.54 2.153a5.62 5.62 0 002.403.539v-.2a5.42 5.42 0 01-2.317-.52l-.085.18zm2.403.539a5.62 5.62 0 002.403-.54l-.086-.18a5.42 5.42 0 01-2.317.52v.2zm2.403-.54l4.54-2.152-.086-.181-4.54 2.153.086.18zm4.397-2.243v4.761h.2v-4.76h-.2zm0 4.761c0 .749-.242 1.338-.69 1.658l.117.163c.519-.37.773-1.034.773-1.82h-.2zm-.69 1.658c-.983.71-2.903 1.692-6.11 1.692v.2c3.252 0 5.212-.996 6.227-1.73l-.117-.162zm-6.11 1.692c-3.207 0-5.132-.975-6.11-1.692l-.117.162c1.01.74 2.976 1.73 6.227 1.73v-.2zm-6.11-1.692c-.446-.322-.69-.916-.69-1.658h-.2c0 .78.257 1.447.773 1.82l.117-.162zm4.387-12.883a4.026 4.026 0 011.723-.388v-.2a4.24 4.24 0 00-1.809.407l.086.18zm1.723-.388c.596 0 1.185.133 1.724.388l.085-.181a4.226 4.226 0 00-1.809-.407v.2zm1.724.388l7.894 3.726.085-.181-7.894-3.726-.085.18zm7.894 3.545l-7.894 3.726.085.18 7.894-3.725-.085-.181zm-7.894 3.726a4.026 4.026 0 01-1.724.388v.2c.626 0 1.244-.14 1.81-.407l-.086-.181zm-1.724.388a4.026 4.026 0 01-1.723-.388l-.086.18a4.227 4.227 0 001.81.408v-.2zm-1.723-.388L2.428 6.413l-.085.18 7.893 3.727.085-.181zM2.428 6.594l7.894-3.726-.086-.181-7.893 3.726.085.18z"
  }), React.createElement("path", {
    fill: "#fff",
    stroke: "#7A8B9A",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M15.72 24a5.52 5.52 0 100-11.04 5.52 5.52 0 000 11.04z"
  }), React.createElement("path", {
    stroke: "#7A8B9A",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M15.72 16.272v4.416m-2.208-2.208h4.416"
  }));
}
