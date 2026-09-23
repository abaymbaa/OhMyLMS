// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var xte = function (e) {
  var t = e.record,
    n = (e.isHover, (0, f.Zp)()),
    r = (0, g.useCallback)(function () {
      n("/assignment-edit/".concat(null == t ? void 0 : t.id));
    }, [null == t ? void 0 : t.id, n]),
    a = (0, g.useCallback)(function () {
      n("/assignment-report/".concat(null == t ? void 0 : t.id));
    }, [null == t ? void 0 : t.id, n]);
  return React.createElement(React.Fragment, null, React.createElement(UG.A, {
    style: {
      minHeight: "65px"
    }
  }, React.createElement(I.FlexWP, {
    align: "start",
    justify: "start",
    gap: "4"
  }, React.createElement(v.Link, {
    to: "/assignment-edit/".concat(null == t ? void 0 : t.id)
  }, React.createElement("svg", {
    width: "33",
    height: "34",
    fill: "none",
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
    d: "M17.225 24.663h-6.206c.255-.427.4-.96.4-1.463V11.253c0-1.056.831-1.916 1.852-1.916h8.36c1.021 0 1.852.86 1.852 1.915v4.396c0 .37.29.669.646.669.357 0 .646-.3.646-.668v-4.396c0-1.794-1.41-3.253-3.143-3.253H13.27c-1.734 0-3.143 1.46-3.143 3.252v6.695h-.984C7.41 17.947 6 19.407 6 21.2v1.997c0 1.534 1.2 2.783 2.684 2.797.008 0 .015.005.023.005h8.518c.356 0 .646-.3.646-.668 0-.37-.29-.67-.646-.67zm-9.933-1.465V21.2c0-1.058.83-1.917 1.852-1.917h.984v3.9l-.002.012c0 .809-.636 1.466-1.42 1.466-.78-.002-1.414-.657-1.414-1.464z"
  }), React.createElement("path", {
    fill: "var(--omlms-primary-color)",
    d: "M20.959 13.343h-7.008c-.357 0-.646.3-.646.669 0 .369.29.668.646.668h7.008c.357 0 .646-.3.646-.668 0-.37-.29-.669-.646-.669zm0 2.988h-7.008c-.357 0-.646.3-.646.669 0 .369.29.668.646.668h7.008c.357 0 .646-.3.646-.668 0-.37-.29-.669-.646-.669zm-3.504 2.989H13.95c-.357 0-.646.3-.646.668 0 .37.29.669.646.669h3.504c.357 0 .646-.3.646-.669a.657.657 0 00-.646-.668zm9.348-1.385a1.911 1.911 0 00-2.764 0l-4.421 4.574c-.164.17-.27.385-.309.62l-.242 1.484c-.06.367.056.743.31 1.006a1.093 1.093 0 00.972.321l1.433-.25c.23-.04.438-.152.602-.322l4.42-4.573a2.074 2.074 0 000-2.86zm-5.291 6.446l-1.13.197.192-1.167 3.023-3.128.938.97-3.023 3.128zm4.378-4.53l-.443.458-.938-.971.443-.458a.647.647 0 01.938 0 .705.705 0 010 .97z"
  }))), React.createElement(I.FlexWP, {
    direction: "column",
    className: "omlms-td-thumbnail-title"
  }, React.createElement(v.Link, {
    to: "/assignment-edit/".concat(null == t ? void 0 : t.id),
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
    label: "Edit Assignment",
    style: {
      height: "26px"
    }
  }, React.createElement(pG.A, null)), React.createElement(I.ButtonWP, {
    icon: React.createElement(vG, null),
    onClick: a,
    variant: "text",
    label: "Assignment Submissions Report",
    style: {
      height: "26px"
    }
  }))))));
};

const Cte = (0, g.memo)(xte);

function Pte() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Ote(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Ote(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Ote(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Ote(d, "constructor", u), Ote(u, "constructor", c), c.displayName = "GeneratorFunction", Ote(u, a, "GeneratorFunction"), Ote(d), Ote(d, a, "Generator"), Ote(d, r, function () {
    return this;
  }), Ote(d, "toString", function () {
    return "[object Generator]";
  }), (Pte = function () {
    return {
      w: o,
      m
    };
  })();
}

function Ote(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Ote = function (e, t, n, r) {
    function o(t, n) {
      Ote(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Ote(e, t, n, r);
}

function kte(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function jte(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        kte(o, r, a, i, l, "next", e);
      }
      function l(e) {
        kte(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function Ate(e, t) {
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
  }(e, t) || Mte(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Mte(e, t) {
  if (e) {
    if ("string" == typeof e) return Tte(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tte(e, t) : void 0;
  }
}

function Tte(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Ite = function () {
  var e = (0, y.useDispatch)(T.default),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).selectAssignmentsPagination();
    }, []),
    a = (r.totalAssignments, r.totalPages, r.filteredAssignments),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).selectAssignments();
    }, []),
    i = Ate((0, g.useState)(!0), 2),
    c = i[0],
    u = i[1],
    s = Ate((0, g.useState)([]), 2),
    d = s[0],
    m = s[1],
    p = Ate((0, g.useState)(!1), 2),
    h = p[0],
    _ = p[1],
    w = Ate((0, g.useState)(1), 2),
    E = w[0],
    S = w[1],
    R = Ate((0, g.useState)(5), 2),
    x = R[0],
    C = (R[1], Ate((0, g.useState)(""), 2)),
    P = C[0],
    O = C[1],
    k = Ate((0, g.useState)(""), 2),
    j = k[0],
    A = k[1],
    M = Ate((0, g.useState)("All"), 2),
    F = M[0],
    N = M[1],
    D = Ate((0, g.useState)(null), 2),
    W = D[0],
    B = D[1],
    L = Ate((0, g.useState)(null), 2),
    V = L[0],
    H = L[1],
    G = Ate((0, g.useState)([]), 2),
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
    ne = (0, g.useCallback)(jte(Pte().m(function t() {
      var n,
        r,
        a,
        o = arguments;
      return Pte().w(function (t) {
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
            }, e.fetchAssignments(a).finally(function () {
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
    oe = (0, g.useCallback)(jte(Pte().m(function t() {
      return Pte().w(function (t) {
        for (;;) switch (t.n) {
          case 0:
            return t.n = 1, e.handleBulkDelete("assignment", {
              assignment_ids: W ? [W] : d
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
          name: "title"
        }[n.field] || n.field,
        a = {
          ascend: "ASC",
          descend: "DESC"
        }[n.order] || n.order;
      S(1), ne(r, a);
    }, [ne, S]),
    le = (0, g.useCallback)(jte(Pte().m(function e() {
      var t;
      return Pte().w(function (e) {
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
          if (Array.isArray(e)) return Tte(e);
        }(e) || function (e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || Mte(e) || function () {
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
        label: (0, b.__)("All", "ohmylms")
      }, {
        value: "publish",
        label: (0, b.__)("Publish", "ohmylms")
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
      title: (0, b.__)("Assignment name", "ohmylms"),
      dataIndex: "name",
      key: "name",
      sorter: !0,
      width: "340px",
      render: function (e, t) {
        var n = V === t.id;
        return React.createElement(Cte, {
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
          to: "/assignment-report/".concat(null == t ? void 0 : t.id)
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
              return K("/assignment-edit/".concat(null == t ? void 0 : t.id));
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
    title: (0, b.__)("All Assignments", "ohmylms")
  }), React.createElement(Ea, {
    isBorderless: !0,
    minHeight: "calc(100vh - 200px)"
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, d.length > 0 ? React.createElement(React.Fragment, null, React.createElement(hN, {
    items: d,
    setItems: m,
    bulksActions: ue
  })) : React.createElement(React.Fragment, null, React.createElement(aY, {
    handleSearch: J,
    searchPlaceholder: (0, b.__)("Search Assignment", "ohmylms"),
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
    showFilterByStatus: !1,
    className: "omlms-assignment-listing-filter-card"
  })), React.createElement(sN.A, {
    rowKey: "id",
    columns: me,
    dataSource: o || [],
    rowSelection: de,
    pagination: !1,
    loading: c,
    onChange: ie,
    className: "assignment-listing-table",
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No Assignment yet!", "ohmylms"),
        description: (0, b.__)("Start building your first assignment and it’ll show up here as soon as you hit publish.", "ohmylms")
      })
    },
    onRowMouseEnter: function (e) {
      return H(null == e ? void 0 : e.id);
    },
    onRowMouseLeave: function () {
      return H(null);
    }
  }), !c && Number(a) > 5 && React.createElement(fN, {
    total: a,
    currentPage: E,
    onPageChange: te,
    perPage: x
  })))), h && React.createElement(React.Fragment, null, React.createElement(Ie, {
    title: d.length > 1 ? (0, b.__)("Delete Assignments", "ohmylms") : (0, b.__)("Delete Assignment", "ohmylms"),
    description: d.length > 1 ? (0, b.__)("Are you sure you want to delete these assignments?", "ohmylms") : (0, b.__)("Are you sure you want to delete assignment?", "ohmylms"),
    onClose: ae,
    onDelete: oe,
    isOpen: h,
    isDelete: !0
  })));
};

const Fte = (0, g.memo)(Ite);

n(59670);

var Nte = n(49215),
  Dte = function () {
    return React.createElement(React.Fragment, null, React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "40",
      height: "36",
      viewBox: "0 0 40 36",
      fill: "none"
    }, React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.15151 24.6611C7.5924 27.4613 11.5663 29.1662 15.9589 29.1662C20.2325 29.1662 24.109 27.5693 26.5372 24.9175L31.5773 29.5327C27.6542 33.817 21.8312 36.0001 15.9589 36.0001C9.89814 36.0001 3.92766 33.6575 0 29.1516L5.15151 24.6611Z",
      fill: "#6E42D3"
    }), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.132 23.6029C13.1915 24.3672 15.3953 24.5786 17.7435 24.2369C20.0183 23.9059 21.9954 23.0953 23.7266 21.8093C23.9895 21.614 24.2457 21.4139 24.494 21.2082L24.5017 21.2114L24.6121 21.1094C24.9584 20.8171 25.2886 20.5135 25.5996 20.1964L39.5933 7.25883L28.6306 7.52975L21.5179 14.0465L21.497 14.0361C21.4914 14.0515 21.4855 14.0668 21.4791 14.082L19.6798 15.7306C19.483 15.8664 19.2996 15.996 19.1475 16.1196C18.4484 16.6709 17.6366 17.0138 16.712 17.1484C15.2884 17.3555 14.0387 17.0578 12.9627 16.2552C11.8868 15.4526 11.2452 14.3396 11.0381 12.916C10.8309 11.4924 11.1287 10.2427 11.9312 9.16671C12.7317 8.07609 13.8437 7.42721 15.2673 7.22006C16.1919 7.08552 17.0688 7.1902 17.8982 7.53411C18.7254 7.86334 19.4 8.37963 19.922 9.08299L25.4355 3.99801C24.1079 2.39278 22.7159 1.50527 20.69 0.765977C18.6641 0.0266849 16.5138 -0.177455 14.239 0.153559C11.8908 0.49525 9.8397 1.33324 8.08558 2.66754C6.344 3.98503 5.07101 5.63897 4.2666 7.62937C3.4622 9.61976 3.22444 11.745 3.55332 14.0051C3.88219 16.2652 4.71578 18.2346 6.05408 19.9132C7.39237 21.5918 9.085 22.8217 11.132 23.6029Z",
      fill: "#6E42D3"
    })));
  };

const Wte = (0, g.memo)(Dte);

var zte;

function Bte(e) {
  return function (e) {
    if (Array.isArray(e)) return Vte(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || Lte(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Lte(e, t) {
  if (e) {
    if ("string" == typeof e) return Vte(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vte(e, t) : void 0;
  }
}

function Vte(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

null === (zte = window.creator_lms_params) || void 0 === zte || zte.plugin_assets;

var Hte = function (e) {
  var t,
    n,
    r,
    a,
    o = e.level,
    i = void 0 === o ? "beginner" : o,
    l = e.currentStep,
    c = void 0 === l ? 0 : l,
    u = e.isShowIndicator,
    s = void 0 === u || u,
    d = e.onSkip,
    m = (0, f.Zp)(),
    p = [].concat(Bte(null !== (t = window) && void 0 !== t && null !== (t = t.creator_lms_params) && void 0 !== t && t.is_tutor_lms_active ? [{
      label: (0, b.__)("Tutor LMS", "ohmylms"),
      value: "tutorLMS"
    }] : []), Bte(null !== (n = window) && void 0 !== n && null !== (n = n.creator_lms_params) && void 0 !== n && n.is_learndash_lms_active ? [{
      label: (0, b.__)("LearnDash", "ohmylms"),
      value: "learnDash"
    }] : []), Bte(null !== (r = window) && void 0 !== r && null !== (r = r.creator_lms_params) && void 0 !== r && r.is_learnpress_active ? [{
      label: (0, b.__)("LearnPress", "ohmylms"),
      value: "learnPress"
    }] : []), Bte(null !== (a = window) && void 0 !== a && null !== (a = a.creator_lms_params) && void 0 !== a && a.is_masterstudy_active ? [{
      label: (0, b.__)("MasterStudy LMS", "ohmylms"),
      value: "masterStudy"
    }] : [])).length > 0,
    v = (0, g.useState)(function (e) {
      return "experienced" === e ? p ? [{
        label: (0, b.__)("Preferences", "ohmylms")
      }, {
        label: (0, b.__)("Niche", "ohmylms")
      }, {
        label: (0, b.__)("Import", "ohmylms")
      }] : [{
        label: (0, b.__)("Preferences", "ohmylms")
      }, {
        label: (0, b.__)("Niche", "ohmylms")
      }] : "intermediate" === e ? [{
        label: (0, b.__)("Preferences", "ohmylms")
      }, {
        label: (0, b.__)("Niche", "ohmylms")
      }] : [{
        label: (0, b.__)("Niche", "ohmylms")
      }, {
        label: (0, b.__)("Preferences", "ohmylms")
      }];
    }(i)),
    h = function (e, t) {
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
      }(e, t) || Lte(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }(v, 2),
    y = h[0];
  return h[1], React.createElement(React.Fragment, null, React.createElement(I.ContainerWP, null, React.createElement(I.FlexWP, {
    items: "center",
    justify: "space-between",
    style: {
      position: "relative",
      paddingTop: "40px",
      marginBottom: "100px"
    },
    className: "omlms-setup-wizard-step-indicator"
  }, React.createElement(Wte, null), s && React.createElement(I.FlexWP, {
    items: "center",
    justify: "center",
    gap: 6,
    style: {
      flexGrow: 1,
      maxWidth: "600px"
    },
    className: "steps-wrapper"
  }, y.map(function (e, t) {
    var n = t === c,
      r = t < c;
    return React.createElement(I.FlexWP, {
      key: t,
      items: "center",
      gap: 0,
      className: "step-item ".concat(n ? "active" : r ? "completed" : "")
    }, React.createElement(I.FlexWP, {
      items: "center",
      justify: "center",
      gap: 2,
      direction: "row",
      style: {
        width: "auto"
      }
    }, function (e) {
      var t = e === c;
      return e < c ? React.createElement("div", {
        className: "step-icon completed"
      }, React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "10",
        height: "9",
        viewBox: "0 0 10 9",
        fill: "none"
      }, React.createElement("path", {
        d: "M8.75 0L3.5 7.08333L0.75 5L0 6L3.75 8.83333L9.75 0.75L8.75 0Z",
        fill: "white"
      }))) : t ? React.createElement("div", {
        className: "step-icon active"
      }, e + 1) : React.createElement("div", {
        className: "step-icon inactive"
      }, e + 1);
    }(t), React.createElement(I.TextWP, {
      className: "step-label",
      size: "14",
      weight: n ? "600" : "400",
      style: {
        color: r || n ? "#6E42D3" : "#687784"
      }
    }, e.label), function (e) {
      return e === y.length - 1 ? null : React.createElement("div", {
        className: "step-connector"
      });
    }(t)));
  })), React.createElement(I.FlexWP, {
    items: "center",
    justify: "flex-end",
    style: {
      width: "auto"
    }
  }, React.createElement(I.ButtonWP, {
    onClick: function () {
      d ? d() : m("/dashboard");
    },
    className: "omlms-setup-wizard-skip"
  }, (0, b.__)("Exit Setup", "ohmylms"))))));
};

const Gte = (0, g.memo)(Hte);

var Ute;

function qte(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
