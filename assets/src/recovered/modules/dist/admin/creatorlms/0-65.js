// Reconstructed Webpack factory 65; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => f
  });
  var r = n(41594),
    a = n.n(r),
    o = n(5556),
    i = n.n(o),
    l = n(38093);
  function c() {
    return c = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, c.apply(null, arguments);
  }
  function u(e) {
    return function (e) {
      if (Array.isArray(e)) return m(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || d(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function s(e, t) {
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
    }(e, t) || d(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function d(e, t) {
    if (e) {
      if ("string" == typeof e) return m(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, t) : void 0;
    }
  }
  function m(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  n(12470);
  var p = function (e) {
    var t = e.columns,
      n = e.dataSource,
      o = e.rowKey,
      i = e.rowSelection,
      d = e.loading,
      m = e.locale,
      p = e.className,
      f = void 0 === p ? "" : p,
      v = e.onMouseEnterOnRow,
      g = e.onMouseLeaveOnRow,
      h = (e.minHeight, e.onRow),
      y = s((0, r.useState)(null), 2),
      b = y[0],
      _ = y[1],
      w = s((0, r.useState)((null == i ? void 0 : i.selectedRowKeys) || []), 2),
      E = w[0],
      S = w[1],
      R = s((0, r.useState)(!1), 2),
      x = R[0],
      C = R[1],
      P = u(n);
    if (b) {
      var O = t.find(function (e) {
        return e.key === b.key && e.sorter;
      });
      O && "function" == typeof O.sorter && P.sort(function (e, t) {
        return "asc" === b.order ? O.sorter(e, t) : -O.sorter(e, t);
      });
    }
    (0, r.useEffect)(function () {
      null != i && i.selectedRowKeys && (S(i.selectedRowKeys), C(0 !== i.selectedRowKeys.length && i.selectedRowKeys.length === n.length));
    }, [i]);
    var k = (0, r.useMemo)(function () {
      return n.length;
    }, [n]);
    return a().createElement("div", {
      className: "omlms-table-wrapper ".concat(f),
      style: {
        position: "relative"
      }
    }, a().createElement("table", {
      className: "omlms-table"
    }, a().createElement("thead", {
      className: "omlms-table-thead"
    }, a().createElement("tr", {
      className: "omlms-table-header-row"
    }, i && a().createElement("th", {
      className: "omlms-th omlms-th-select"
    }, a().createElement(l.CheckboxWP, {
      checked: x,
      onChange: function (e) {
        e ? (S(n.map(function (e) {
          return e[o];
        })), i.onChange(n.map(function (e) {
          return e[o];
        }), n), C(!0)) : (S([]), C(!1), i.onChange([], []));
      },
      disabled: d || 0 === P.length
    })), t.map(function (e, t) {
      return a().createElement("th", {
        key: e.key + t,
        className: "omlms-th omlms-th-".concat(e.key),
        onClick: function () {
          return e.sorter && (t = e.key, void _(function (e) {
            return e && e.key === t ? "asc" === e.order ? {
              key: t,
              order: "desc"
            } : null : {
              key: t,
              order: "asc"
            };
          }));
          var t;
        }
      }, e.title);
    }))), a().createElement("tbody", {
      className: "omlms-table-tbody"
    }, d ? a().createElement("div", {
      style: {
        minHeight: "540px"
      }
    }, a().createElement(l.SkeletonWP, {
      active: !0,
      rows: 10,
      style: {
        position: "absolute",
        top: "50px"
      }
    })) : a().createElement(a().Fragment, null, P.length > 0 ? a().createElement(a().Fragment, null, P.map(function (e, r) {
      return a().createElement("tr", c({
        key: String(e[o]) + r,
        className: "omlms-tr omlms-tr-".concat(r, " ").concat(k === r + 1 ? "omlms-tr-last" : ""),
        onMouseEnter: function () {
          v && v(e, r);
        },
        onMouseLeave: function () {
          g && g(e, r);
        }
      }, "function" == typeof h ? h(e, r) : {}), i && a().createElement("td", {
        className: "omlms-td omlms-td-select"
      }, a().createElement(l.CheckboxWP, {
        checked: E.includes(e[o]),
        onChange: function () {
          return function (e) {
            var t = E.includes(e) ? E.filter(function (t) {
              return t !== e;
            }) : [].concat(u(E), [e]);
            if (S(t), C(t.length === n.length), i && "function" == typeof i.onChange) {
              var r = n.filter(function (e) {
                return t.includes(e[o]);
              });
              i.onChange(t, r);
            }
          }(e[o]);
        }
      })), t.map(function (t, n) {
        return a().createElement("td", {
          key: t.key + n,
          className: "omlms-td omlms-td-".concat(t.key),
          style: {
            width: t.width ? t.width : ""
          }
        }, t.render ? t.render(e[t.key], e) : e[t.key]);
      }));
    })) : a().createElement(a().Fragment, null, !d && a().createElement("tr", null, a().createElement("td", {
      colspan: t.length + 1,
      style: {
        minHeight: "230px"
      }
    }, null == m ? void 0 : m.emptyText)))))));
  };
  p.propTypes = {
    columns: i().arrayOf(i().shape({
      key: i().string.isRequired,
      title: i().any.isRequired,
      render: i().func,
      sorter: i().func
    })).isRequired,
    dataSource: i().array.isRequired,
    rowKey: i().string.isRequired,
    rowSelection: i().shape({
      onChange: i().func
    }),
    onRow: i().func
  };
  const f = p;
});
