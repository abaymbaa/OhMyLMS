// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var uZ = function (e) {
  var t = e.record,
    n = (e.isHover, (0, f.Zp)()),
    r = (0, g.useCallback)(function () {
      n("/quiz-edit/".concat(null == t ? void 0 : t.id));
    }, [null == t ? void 0 : t.id, n]),
    a = (0, g.useCallback)(function () {
      n("/quiz-report/".concat(null == t ? void 0 : t.id));
    }, [null == t ? void 0 : t.id, n]);
  return React.createElement(React.Fragment, null, React.createElement(UG.A, {
    style: {
      minHeight: "65px"
    },
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    align: "start",
    justify: "start",
    gap: "4"
  }, React.createElement(v.Link, {
    to: "/quiz-edit/".concat(null == t ? void 0 : t.id)
  }, React.createElement("svg", {
    fill: "none",
    width: "33",
    height: "34",
    viewBox: "0 0 33 34",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "33",
    height: "33",
    y: ".5",
    fill: "#F4F5F7",
    rx: "8"
  }), React.createElement("path", {
    fill: "var(--omlms-primary-color)",
    d: "M16.6 24.75c0 .413-.352.75-.782.75h-4.69C9.398 25.5 8 24.157 8 22.5v-12c0-1.658 1.4-3 3.127-3h10.946c1.728 0 3.128 1.342 3.128 3v6c0 .413-.352.75-.782.75-.43 0-.782-.337-.782-.75v-6c0-.825-.704-1.5-1.564-1.5H11.127c-.86 0-1.563.675-1.563 1.5v12c0 .825.703 1.5 1.563 1.5h4.691c.43 0 .782.337.782.75zM21.268 12c0-.412-.352-.75-.782-.75h-7.795c-.43 0-.782.338-.782.75s.352.75.782.75h7.795c.43 0 .782-.338.782-.75zm-1.564 3.75c0-.412-.352-.75-.782-.75h-6.23c-.431 0-.783.338-.783.75 0 .413.352.75.782.75h6.231c.43 0 .782-.337.782-.75zm-7.013 3c-.43 0-.782.337-.782.75s.352.75.782.75h2.322c.43 0 .782-.337.782-.75s-.352-.75-.782-.75h-2.322zm13.065.968a.802.802 0 00-1.103 0l-4.136 3.967-1.79-1.717a.802.802 0 00-1.102 0 .726.726 0 000 1.057l2.345 2.25a.819.819 0 001.11 0l4.691-4.5a.726.726 0 000-1.057h-.015z"
  }))), React.createElement(I.FlexWP, {
    direction: "column",
    className: "omlms-td-thumbnail-title"
  }, React.createElement(v.Link, {
    to: "/quiz-edit/".concat(null == t ? void 0 : t.id),
    title: null == t ? void 0 : t.name,
    style: {
      textDecoration: "none"
    }
  }, React.createElement(I.TextWP, {
    as: "span",
    color: "#000d25",
    size: 16,
    numberOfLines: 2,
    truncate: !0
  }, Ge(null == t ? void 0 : t.name))), React.createElement(I.FlexWP, {
    align: "center",
    justify: "flex-start",
    gap: 2,
    className: "omlms-td-thumbnail-title-actions"
  }, React.createElement(I.ButtonWP, {
    onClick: r,
    variant: "text",
    label: (0, b.__)("Edit Quiz", "ohmylms"),
    style: {
      height: "26px"
    }
  }, React.createElement(pG.A, null)), React.createElement(I.ButtonWP, {
    icon: React.createElement(vG, null),
    onClick: a,
    variant: "text",
    label: (0, b.__)("Quiz Submissions Report", "ohmylms"),
    style: {
      height: "26px"
    }
  }))))));
};

const sZ = (0, g.memo)(uZ);

function dZ(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var mZ = function (e) {
  var t = e.items,
    n = void 0 === t ? [] : t,
    r = e.maxVisible,
    a = void 0 === r ? 3 : r,
    o = e.showAllOnHover,
    i = void 0 !== o && o,
    l = e.containerClassName,
    c = void 0 === l ? "" : l,
    u = e.itemClassName,
    s = void 0 === u ? "" : u,
    d = e.moreClassName,
    m = void 0 === d ? "" : d;
  if (0 === n.length || !Array.isArray(n) || !n) return "--";
  if (1 === n.length && !n[0]) return "--";
  var p = function (e, t) {
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
          if ("string" == typeof e) return dZ(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? dZ(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    f = p[0],
    v = p[1],
    h = n.slice(0, a),
    y = n.slice(a),
    b = n.length > a;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "omlms-options-container ".concat(c)
  }, h.map(function (e, t) {
    return React.createElement("div", {
      key: t,
      className: "omlms-option-item ".concat(s),
      title: Ge(e)
    }, Ge(e));
  }), b && React.createElement("div", {
    className: "omlms-more-options-indicator omlms-option-item ".concat(m),
    onMouseEnter: function () {
      return v(!0);
    },
    onMouseLeave: function (e) {
      v(!1);
    }
  }, React.createElement("span", null, "+", y.length), React.createElement(qt, {
    isVisible: f && b
  }, React.createElement("div", {
    className: "omlms-options-popup"
  }, i ? n.map(function (e, t) {
    return React.createElement("div", {
      key: t,
      className: "omlms-popup-option-item ".concat(s)
    }, Ge(e));
  }) : y.map(function (e, t) {
    return React.createElement("div", {
      key: t,
      className: "omlms-popup-option-item ".concat(s)
    }, Ge(e));
  }))))));
};

const pZ = (0, g.memo)(mZ);

function fZ() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return vZ(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (vZ(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, vZ(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, vZ(d, "constructor", u), vZ(u, "constructor", c), c.displayName = "GeneratorFunction", vZ(u, a, "GeneratorFunction"), vZ(d), vZ(d, a, "Generator"), vZ(d, r, function () {
    return this;
  }), vZ(d, "toString", function () {
    return "[object Generator]";
  }), (fZ = function () {
    return {
      w: o,
      m
    };
  })();
}

function vZ(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  vZ = function (e, t, n, r) {
    function o(t, n) {
      vZ(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, vZ(e, t, n, r);
}

function gZ(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function hZ(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        gZ(o, r, a, i, l, "next", e);
      }
      function l(e) {
        gZ(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function yZ(e, t) {
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
  }(e, t) || bZ(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function bZ(e, t) {
  if (e) {
    if ("string" == typeof e) return _Z(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _Z(e, t) : void 0;
  }
}

function _Z(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var wZ = function () {
  var e = (0, y.useDispatch)(T.default),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).getQuizzesPagination();
    }, []),
    a = (r.totalQuizzes, r.totalPages, r.filteredQuizzes),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getQuizzes();
    }, []),
    i = yZ((0, g.useState)(!0), 2),
    c = i[0],
    u = i[1],
    s = yZ((0, g.useState)([]), 2),
    d = s[0],
    m = s[1],
    p = yZ((0, g.useState)(!1), 2),
    h = p[0],
    _ = p[1],
    w = yZ((0, g.useState)(1), 2),
    E = w[0],
    S = w[1],
    R = yZ((0, g.useState)(5), 2),
    x = R[0],
    C = (R[1], yZ((0, g.useState)(""), 2)),
    P = C[0],
    O = C[1],
    k = yZ((0, g.useState)(""), 2),
    j = k[0],
    A = k[1],
    M = yZ((0, g.useState)("All"), 2),
    F = M[0],
    N = M[1],
    D = yZ((0, g.useState)(null), 2),
    W = D[0],
    B = D[1],
    L = yZ((0, g.useState)(null), 2),
    V = L[0],
    H = L[1],
    G = yZ((0, g.useState)([]), 2),
    U = G[0],
    Y = G[1],
    Q = (0, z.A)(),
    Z = Q.openNotificationWithIcon,
    $ = Q.contextHolder,
    K = (0, f.Zp)(),
    J = (0, g.useCallback)(function (e) {
      O(e), S(1);
    }, []),
    X = (0, g.useCallback)(function (e) {
      A(e), S(1);
    }, []),
    ee = (0, g.useCallback)(function (e) {
      N(e), S(1);
    }, []),
    te = (0, g.useCallback)(function (e) {
      S(e), m([]);
    }, []),
    ne = (0, g.useCallback)(hZ(fZ().m(function t() {
      var n,
        r,
        a,
        o = arguments;
      return fZ().w(function (t) {
        for (;;) switch (t.n) {
          case 0:
            n = o.length > 0 && void 0 !== o[0] ? o[0] : "date", r = o.length > 1 && void 0 !== o[1] ? o[1] : "DESC", u(!0), a = {
              offset: 5 * (E - 1),
              order: r,
              page: E,
              per_page: x,
              search: P,
              post_status: F,
              orderby: n,
              course_id: j
            }, e.fetchQuizzes(a).finally(function () {
              u(!1);
            });
          case 1:
            return t.a(2);
        }
      }, t);
    })), [E, x, P, F, j]),
    re = (0, g.useCallback)(function (e) {
      _(!0), B(e);
    }, []),
    ae = (0, g.useCallback)(function () {
      _(!1);
    }, []),
    oe = (0, g.useCallback)(hZ(fZ().m(function t() {
      return fZ().w(function (t) {
        for (;;) switch (t.n) {
          case 0:
            return t.n = 1, e.handleBulkDelete("quiz", {
              quiz_ids: W ? [W] : d
            });
          case 1:
            t.v, ne(), m([]), S(1), B(null), _(!1);
          case 2:
            return t.a(2);
        }
      }, t);
    })), [d, W, ne]),
    ie = (0, g.useCallback)(function (e, t, n) {
      var r = {
          number_of_submissions: "number_of_submissions",
          quiz_name: "title"
        }[n.field] || n.field,
        a = {
          ascend: "ASC",
          descend: "DESC"
        }[n.order] || n.order;
      S(1), ne(r, a);
    }, [ne, S]),
    le = (0, g.useCallback)(hZ(fZ().m(function e() {
      var t;
      return fZ().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            return e.n = 1, l()({
              path: "/creator-lms/v1/courses"
            });
          case 1:
            t = e.v, Y(t);
          case 2:
            return e.a(2);
        }
      }, e);
    })), []),
    ce = (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("All Courses", "ohmylms"),
        value: ""
      }].concat(function (e) {
        return function (e) {
          if (Array.isArray(e)) return _Z(e);
        }(e) || function (e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || bZ(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }(U.map(function (e) {
        return {
          label: Ge(null == e ? void 0 : e.name),
          value: null == e ? void 0 : e.id
        };
      })));
    }, [U]),
    ue = (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("Delete", "ohmylms"),
        value: "delete",
        action: function () {
          _(!0);
        }
      }];
    }, [d]),
    se = (0, g.useMemo)(function () {
      return [{
        value: "all",
        label: (0, b.__)("All Status", "ohmylms")
      }, {
        value: "publish",
        label: (0, b.__)("Published", "ohmylms")
      }, {
        value: "draft",
        label: (0, b.__)("Draft", "ohmylms")
      }];
    }, []),
    de = (0, g.useMemo)(function () {
      return {
        selectedRowKeys: d,
        onChange: m
      };
    }, [d]),
    me = [{
      title: (0, b.__)("Quiz name", "ohmylms"),
      dataIndex: "quiz_name",
      key: "quiz_name",
      sorter: !0,
      width: "340px",
      render: function (e, t) {
        var n = V === t.id;
        return React.createElement(sZ, {
          record: t,
          isHover: n
        });
      }
    }, {
      title: (0, b.__)("Course name", "ohmylms"),
      dataIndex: "courses",
      key: "courses",
      render: function (e, t) {
        return React.createElement(pZ, {
          items: [null == e ? void 0 : e.course_name],
          showAllOnHover: !0,
          maxVisible: 3
        });
      }
    }, {
      title: (0, b.__)("No. of Submissions", "ohmylms"),
      dataIndex: "number_of_submissions",
      key: "number_of_submissions",
      sorter: !0,
      render: function (e, t) {
        return React.createElement(I.BadgeWP, {
          variant: "secondary",
          isBorderLess: !0
        }, React.createElement(v.Link, {
          to: "/quiz-report/".concat(null == t ? void 0 : t.id)
        }, e, " "));
      }
    }, {
      title: (0, b.__)("Status", "ohmylms"),
      dataIndex: "status",
      key: "status",
      render: function (e, t) {
        return React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "publish" === e ? "success" : "secondary",
          style: {
            textTransform: "capitalize"
          }
        }, "publish" === e ? (0, b.__)("Published", "ohmylms") : "future" === e ? (0, b.__)("Scheduled", "ohmylms") : (0, b.__)("Draft", "ohmylms"));
      }
    }, {
      title: (0, b.__)("Action", "ohmylms"),
      dataIndex: "action",
      key: "action",
      render: function (e, t) {
        return React.createElement(I.DropdownMenuWP, {
          controls: [{
            title: (0, b.__)("Edit", "ohmylms"),
            key: "edit",
            onClick: function () {
              return K("/quiz-edit/".concat(null == t ? void 0 : t.id));
            },
            icon: React.createElement("span", null, React.createElement(pG.A, null))
          }, {
            title: (0, b.__)("Delete", "ohmylms"),
            key: "delete",
            onClick: function () {
              return re(null == t ? void 0 : t.id);
            },
            icon: React.createElement(We, null)
          }],
          icon: React.createElement(q.Icon, {
            icon: Ne.A
          })
        });
      }
    }];
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && ne(), function () {
      e = !1;
    };
  }, [E, x, P, e, F, j]), (0, g.useEffect)(function () {
    var e = !0;
    return e && le(), function () {
      e = !1;
    };
  }, []), (0, g.useEffect)(function () {
    !c && t && Z(n, t);
  }, [t]), React.createElement(React.Fragment, null, $, React.createElement(I.ContainerWP, null, React.createElement(YG, {
    title: (0, b.__)("All Quizzes", "ohmylms")
  }), React.createElement(Ea, {
    isBorderless: !0,
    minHeight: "calc(100vh - 200px)"
  }, React.createElement(I.SpacerWP, {
    padding: 5
  }, d.length > 0 ? React.createElement(React.Fragment, null, React.createElement(hN, {
    items: d,
    setItems: m,
    bulksActions: ue
  })) : React.createElement(React.Fragment, null, React.createElement(aY, {
    handleSearch: J,
    searchPlaceholder: (0, b.__)("Search Quiz", "ohmylms"),
    showFilterByDays: !1,
    showFilterByPriceType: !1,
    handleFilterByCategory: X,
    filterByCategory: j,
    categories: ce,
    categoryPrefix: (0, b.__)("Course", "ohmylms"),
    currentPage: E,
    totalItems: a,
    handleFilterByStatus: ee,
    filterByStatus: F,
    filterByStatusOptions: se,
    formateCategory: !1,
    className: "omlms-quiz-listing-filter-card"
  })), React.createElement(sN.A, {
    rowKey: "id",
    columns: me,
    dataSource: o || [],
    rowSelection: de,
    pagination: !1,
    loading: c,
    onChange: ie,
    onRowMouseEnter: function (e) {
      return H(null == e ? void 0 : e.id);
    },
    onRowMouseLeave: function () {
      return H(null);
    },
    className: "quiz-listing-table",
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No Quizzes yet!", "ohmylms"),
        description: (0, b.__)("Start building your first quiz and it’ll show up here as soon as you hit publish.", "ohmylms")
      })
    }
  }), !c && Number(a) > 5 && React.createElement(fN, {
    total: a,
    currentPage: E,
    onPageChange: te,
    perPage: x
  })))), h && React.createElement(React.Fragment, null, React.createElement(Ie, {
    title: d.length > 1 ? (0, b.__)("Delete Quizzes", "ohmylms") : (0, b.__)("Delete Quiz", "ohmylms"),
    description: d.length > 1 ? (0, b.__)("Are you sure you want to delete these Quizzes?", "ohmylms") : (0, b.__)("Are you sure you want to delete quiz?", "ohmylms"),
    onClose: ae,
    onDelete: oe,
    isOpen: h,
    isDelete: !0
  })));
};

const EZ = (0, g.memo)(wZ);

var SZ = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "21",
    height: "22",
    fill: "none",
    viewBox: "0 0 21 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.25 11a8.75 8.75 0 11-17.5 0 8.75 8.75 0 0117.5 0zm-4.458 5.53A7 7 0 014.97 6.708l9.822 9.822zm1.238-1.238L6.208 5.47a7 7 0 019.822 9.822z",
    clipRule: "evenodd"
  })));
};

const RZ = (0, g.memo)(SZ);

function xZ(e, t) {
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
      if ("string" == typeof e) return CZ(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? CZ(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function CZ(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var PZ = function () {
  var e,
    t,
    n = (0, y.useDispatch)(T.default),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).selectSessions();
    }, []),
    a = (0, y.useSelect)(function (e) {
      return e(T.default).selectSessionsPagination();
    }, []),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getLoading();
    }, []),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getError();
    }, []),
    l = xZ((0, g.useState)(1), 2),
    c = l[0],
    u = l[1],
    s = xZ((0, g.useState)(10), 2),
    d = s[0],
    m = (s[1], xZ((0, g.useState)(""), 2)),
    p = m[0],
    f = m[1],
    v = xZ((0, g.useState)(!1), 2),
    h = v[0],
    _ = v[1],
    w = xZ((0, g.useState)(null), 2),
    E = w[0],
    S = w[1],
    R = (0, g.useCallback)(function () {
      var e = {
        page: c,
        per_page: d,
        search: p
      };
      n.fetchSessions(e);
    }, [n, c, d, p]),
    x = ((0, g.useCallback)(function (e) {
      f(e), u(1);
    }, []), (0, g.useCallback)(function (e) {
      u(e);
    }, [])),
    C = (0, g.useCallback)(function (e) {
      n.setSelectedLessonId(e.id), S(e), _(!0);
    }, [n]),
    P = (0, g.useCallback)(function (e, t) {
      e[t] && window.open(e[t], "_blank");
    }, []),
    O = (0, g.useCallback)(function () {
      _(!1), S(null), n.setSelectedLessonId(null), R();
    }, [n, R]),
    k = (0, g.useCallback)(function (e) {
      var t = {
        upcoming: {
          variant: "primary",
          label: (0, b.__)("Upcoming", "ohmylms")
        },
        running: {
          variant: "warning",
          label: (0, b.__)("Running", "ohmylms")
        },
        expired: {
          variant: "secondary",
          label: (0, b.__)("Expired", "ohmylms")
        }
      }[null == e ? void 0 : e.toLowerCase()] || {
        variant: "secondary",
        label: e
      };
      return React.createElement(I.BadgeWP, {
        variant: t.variant,
        isBorderLess: !0
      }, t.label);
    }, []),
    j = (0, g.useMemo)(function () {
      return [{
        title: (0, b.__)("Meeting Name", "ohmylms"),
        dataIndex: "topic",
        key: "topic",
        width: "250px",
        render: function (e, t) {
          return React.createElement("div", null, React.createElement("div", {
            style: {
              fontWeight: "500",
              marginBottom: "4px"
            }
          }, e), React.createElement("div", {
            style: {
              fontSize: "12px",
              color: "#666"
            }
          }, t.course_title ? "Course: ".concat(t.course_title) : "-"));
        }
      }, {
        title: (0, b.__)("Platform", "ohmylms"),
        dataIndex: "platform",
        key: "platform",
        width: "120px",
        render: function (e) {
          var t = {
            zoom: "Zoom",
            googlemeet: "Google Meet"
          }[null == e ? void 0 : e.toLowerCase()] || e;
          return React.createElement(I.BadgeWP, {
            variant: "secondary",
            isBorderLess: !0
          }, t);
        }
      }, {
        title: (0, b.__)("Password", "ohmylms"),
        dataIndex: "password",
        key: "password",
        width: "120px",
        render: function (e) {
          return React.createElement("span", null, e || "-");
        }
      }, {
        title: (0, b.__)("Start Time & Duration", "ohmylms"),
        key: "start_time_duration",
        width: "200px",
        render: function (e, t) {
          var n = "-";
          if (t.duration) {
            var r = parseInt(t.duration, 10),
              a = Math.floor(r / 60),
              o = r % 60;
            n = a > 0 && o > 0 ? "".concat(a, "h ").concat(o, "m") : a > 0 ? "".concat(a, "h") : "".concat(o, "m");
          }
          return React.createElement("div", null, React.createElement("div", {
            style: {
              fontWeight: "500",
              marginBottom: "4px"
            }
          }, t.date), React.createElement("div", {
            style: {
              fontSize: "12px",
              color: "#666"
            }
          }, n));
        }
      }, {
        title: (0, b.__)("Status", "ohmylms"),
        dataIndex: "status",
        key: "status",
        width: "120px",
        render: function (e) {
          return k(e);
        }
      }, {
        title: (0, b.__)("Actions", "ohmylms"),
        key: "actions",
        width: "150px",
        render: function (e, t) {
          var n,
            r,
            a = null === (n = t.status) || void 0 === n ? void 0 : n.toLowerCase(),
            o = (null === (r = t.platform) || void 0 === r || r.toLowerCase(), []);
          return "upcoming" === a && t.start_url ? o.push({
            title: (0, b.__)("Start Meeting", "ohmylms"),
            onClick: function () {
              return P(t, "start_url");
            },
            icon: React.createElement(Gp, null)
          }) : "running" === a && t.start_url && o.push({
            title: (0, b.__)("Join Meeting", "ohmylms"),
            onClick: function () {
              return P(t, "start_url");
            },
            icon: React.createElement(Gp, null)
          }), o.push({
            title: (0, b.__)("Edit Meeting", "ohmylms"),
            onClick: function () {
              return C(t);
            },
            icon: React.createElement(pG.A, null)
          }), "expired" === a && o.push({
            title: (0, b.__)("Start Meeting", "ohmylms"),
            icon: React.createElement(RZ, null),
            disabled: !0
          }), React.createElement(I.DropdownMenuWP, {
            controls: o,
            icon: React.createElement(q.Icon, {
              icon: Ne.A
            })
          });
        }
      }];
    }, [k, P, C]);
  return (0, g.useEffect)(function () {
    R();
  }, [R]), React.createElement(React.Fragment, null, React.createElement(I.ContainerWP, null, React.createElement(YG, {
    title: (0, b.__)("Sessions", "ohmylms")
  }), i && React.createElement(I.NoticeWP, {
    status: "error",
    isDismissible: !1
  }, i), React.createElement(Ea, {
    isBorderLess: !0,
    minHeight: "calc(100vh - 200px)"
  }, React.createElement(I.SpacerWP, {
    padding: 5
  }, React.createElement(I.TableWP, {
    rowKey: "id",
    columns: j,
    dataSource: r,
    loading: o,
    pagination: !1,
    scroll: {
      x: "max-content"
    },
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No sessions yet!", "ohmylms"),
        description: (0, b.__)("Create your first session and it'll show up here.", "ohmylms")
      })
    }
  }), (null == a ? void 0 : a.totalSessions) > d && React.createElement(fN, {
    total: a.totalSessions,
    currentPage: c,
    onPageChange: x,
    perPage: d
  })))), h && E && "googlemeet" === (null === (e = E.platform) || void 0 === e ? void 0 : e.toLowerCase()) && React.createElement(Ul, {
    isOpen: h,
    onClose: O,
    chapterId: E.chapter_id,
    courseId: E.course_id
  }), h && E && "googlemeet" !== (null === (t = E.platform) || void 0 === t ? void 0 : t.toLowerCase()) && React.createElement(Al, {
    isOpen: h,
    onClose: O,
    chapterId: E.chapter_id,
    courseId: E.course_id
  }));
};

const OZ = (0, g.memo)(PZ);

function kZ(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
