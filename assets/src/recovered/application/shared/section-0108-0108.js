// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function Eq(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Sq = function (e) {
  (0, L.useIsPro)();
  var t = e.handleTypeFilters,
    n = e.handleOrderTypeFilters,
    r = e.orderTypeOptions,
    a = e.transactionLoading,
    o = e.transactionData,
    i = e.skeletonColumns,
    l = e.columns,
    c = e.dataLoading,
    u = (e.currencyData, function (e, t) {
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
          if ("string" == typeof e) return Eq(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Eq(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!0), 2)),
    s = (u[0], u[1], o.reduce(function (e, t) {
      return e + t.order_total;
    }, 0), (0, g.useCallback)(function () {
      window.open(L.pricingPageLink, "_blank");
    }, []), (0, g.useCallback)(function (e) {
      "custom_range" !== e && t(e);
    }, []));
  return h().createElement(h().Fragment, null, h().createElement(I.HeadingWP, {
    level: 3,
    size: 16
  }, (0, b.__)("Transaction history", "ohmylms")), h().createElement(I.SpacerWP, {
    marginBottom: 4
  }), h().createElement(I.FlexWP, {
    gap: 2,
    align: "center",
    justify: "flex-start"
  }, h().createElement(I.FlexItemWP, null, h().createElement(ZU, {
    placeholder: (0, b.__)("Filter By Days", "ohmylms"),
    onChange: s,
    onRangeChange: t
  })), h().createElement(I.FlexItemWP, null, h().createElement(vn.A, {
    placeholder: "Order Type",
    onChange: n,
    options: r,
    defaultValue: "all"
  }))), h().createElement(I.SpacerWP, {
    marginBottom: 4
  }), h().createElement(sN.A, {
    rowKey: "order_id",
    columns: a || c ? i : l,
    dataSource: o,
    locale: {
      emptyText: h().createElement(uf, {
        icon: h().createElement(df, null),
        title: (0, b.__)("Your transaction history is waiting to be filled!", "ohmylms"),
        description: (0, b.__)("Your course sales and payment records will appear here once transactions occur.", "ohmylms")
      })
    }
  }));
};

const Rq = (0, g.memo)(Sq);

function xq(e) {
  return Array.isArray(e) && 2 === e.length && sn()(e[0]).isValid() && sn()(e[1]).isValid();
}

function Cq(e) {
  return Cq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Cq(e);
}

function Pq() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Oq(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Oq(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Oq(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Oq(d, "constructor", u), Oq(u, "constructor", c), c.displayName = "GeneratorFunction", Oq(u, a, "GeneratorFunction"), Oq(d), Oq(d, a, "Generator"), Oq(d, r, function () {
    return this;
  }), Oq(d, "toString", function () {
    return "[object Generator]";
  }), (Pq = function () {
    return {
      w: o,
      m
    };
  })();
}

function Oq(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Oq = function (e, t, n, r) {
    function o(t, n) {
      Oq(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Oq(e, t, n, r);
}

function kq(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function jq(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function Aq(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? jq(Object(n), !0).forEach(function (t) {
      Mq(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jq(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function Mq(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Cq(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Cq(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Cq(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function Tq(e, t) {
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
      if ("string" == typeof e) return Iq(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Iq(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Iq(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Fq = function (e) {
    var t = e.currency,
      n = e.currency_pos,
      r = e.price;
    return UH(t, n, r);
  },
  Nq = function () {
    var e,
      t,
      n,
      r,
      a,
      o,
      i = Tq((0, g.useState)(!0), 2),
      c = i[0],
      u = i[1],
      s = Tq((0, g.useState)(!1), 2),
      d = s[0],
      m = s[1],
      p = Tq((0, g.useState)(!1), 2),
      v = p[0],
      y = p[1],
      w = Tq((0, g.useState)("last_30_days"), 2),
      E = w[0],
      S = w[1],
      R = Tq((0, g.useState)({}), 2),
      x = R[0],
      C = R[1],
      P = Tq((0, g.useState)({}), 2),
      O = P[0],
      k = P[1],
      j = Tq((0, g.useState)([]), 2),
      A = j[0],
      M = j[1],
      T = Tq((0, g.useState)(0), 2),
      F = T[0],
      N = T[1],
      D = Tq((0, g.useState)("all"), 2),
      W = D[0],
      z = D[1],
      B = Tq((0, g.useState)({}), 2),
      V = B[0],
      H = B[1],
      G = Tq((0, g.useState)("30 days"), 2),
      U = G[0],
      q = G[1],
      Y = (0, f.Zp)(),
      Q = (0, L.useIsPro)(),
      Z = [{
        label: (0, b.__)("Income", "ohmylms"),
        tooltip: (0, b.__)("Total income ".concat(U ? "within " + U : "of all time"), "ohmylms"),
        value: h().createElement(Fq, {
          currency: V.currency || "$",
          currency_pos: V.currency_pos || "left",
          price: Number((null == x ? void 0 : x.total_revenue) || "0")
        }),
        progression_percent: Math.abs((null == x || null === (e = x.growth) || void 0 === e ? void 0 : e.total_revenue) || 0) + "%",
        progression_text: "within last",
        progression_delay: "30day",
        progression_state: Number(null == x || null === (t = x.growth) || void 0 === t ? void 0 : t.total_revenue) > -1 ? "success" : "danger",
        card_class: "card-earning",
        iconColor: "#6e42d3"
      }, {
        label: (0, b.__)("Refund", "ohmylms"),
        tooltip: (0, b.__)("Total refund ".concat(U ? "within " + U : "of all time", "."), "ohmylms"),
        value: h().createElement(Fq, {
          currency: V.currency || "$",
          currency_pos: V.currency_pos || "left",
          price: Number((null == x ? void 0 : x.total_refund) || "0")
        }),
        progression_percent: Math.abs((null == x || null === (n = x.growth) || void 0 === n ? void 0 : n.total_refund) || 0) + "%",
        progression_text: "within last",
        progression_delay: "30day",
        progression_state: Number(null == x || null === (r = x.growth) || void 0 === r ? void 0 : r.total_refund) > 0 ? "danger" : "success",
        card_class: "card-refund",
        iconColor: "#ff4955"
      }, {
        label: (0, b.__)("Net Income", "ohmylms"),
        tooltip: (0, b.__)("Total net income ".concat(U ? "within " + U : "of all time", "."), "ohmylms"),
        value: h().createElement(Fq, {
          currency: V.currency || "$",
          currency_pos: V.currency_pos || "left",
          price: Number((null == x ? void 0 : x.net_amount) || "0")
        }),
        progression_percent: Math.abs((null == x || null === (a = x.growth) || void 0 === a ? void 0 : a.net_amount) || 0) + "%",
        progression_text: "within last",
        progression_delay: "10day",
        progression_state: Number(null == x || null === (o = x.growth) || void 0 === o ? void 0 : o.net_amount) > -1 ? "success" : "danger",
        card_class: "card-net-income"
      }],
      $ = [{
        title: "Date",
        dataIndex: "date",
        key: "date",
        render: function (e) {
          if (!e) return "N/A";
          try {
            return (0, wq.format)("M d, Y", new Date(e));
          } catch (e) {
            return "Invalid Date";
          }
        },
        sorter: function (e, t) {
          var n, r;
          return sn()(null === (n = e["date_created-date"]) || void 0 === n ? void 0 : n.date).valueOf() - sn()(null === (r = t["date_created-date"]) || void 0 === r ? void 0 : r.date).valueOf();
        },
        showSorterTooltip: {
          target: "sorter-icon"
        }
      }, {
        title: "Order",
        dataIndex: "order_id",
        key: "order_id",
        render: function (e, t) {
          return h().createElement("span", null, "#", null == t ? void 0 : t.order_id);
        },
        sorter: function (e, t) {
          return e.order_id - t.order_id;
        },
        showSorterTooltip: {
          target: "sorter-icon"
        }
      }, {
        title: "Type",
        dataIndex: "type",
        key: "type",
        className: "omlms-transaction-history-type",
        render: function (e, t) {
          return h().createElement(h().Fragment, null, e || "N/A");
        }
      }, {
        title: "Details",
        dataIndex: "order_items",
        key: "order_items",
        className: "omlms-transaction-history-details",
        render: function (e, t) {
          var n;
          return (null === (n = t.order_items) || void 0 === n ? void 0 : n.length) > 0 ? h().createElement(h().Fragment, null, t.order_items.map(function (e, t) {
            return h().createElement("span", {
              key: t
            }, Ge(null == e ? void 0 : e.course_name) || "Untitled");
          })) : "-";
        }
      }, {
        title: "Earnings",
        dataIndex: "order_total",
        key: "order_total",
        render: function (e, t) {
          return h().createElement(Fq, {
            currency: null == V ? void 0 : V.currency,
            currency_pos: null == V ? void 0 : V.currency_pos,
            price: Number(e)
          });
        },
        sorter: function (e, t) {
          return e.order_total - t.order_total;
        },
        showSorterTooltip: {
          target: "sorter-icon"
        }
      }],
      K = $.map(function (e) {
        return Aq(Aq({}, e), {}, {
          render: function () {
            return h().createElement(_.A, {
              active: !0,
              paragraph: !1
            });
          }
        });
      }),
      J = ((0, b.__)("CSV", "ohmylms"), (0, b.__)("PDF", "ohmylms"), (0, g.useCallback)(function () {
        var e,
          t = (e = Pq().m(function e(t) {
            var n,
              r,
              a,
              o,
              i,
              c,
              u,
              s,
              d = arguments;
            return Pq().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if (n = d.length > 1 && void 0 !== d[1] ? d[1] : "last_30_days", r = d.length > 2 && void 0 !== d[2] ? d[2] : "", a = d.length > 3 && void 0 !== d[3] ? d[3] : "all", o = d.length > 4 && void 0 !== d[4] ? d[4] : "date", i = d.length > 5 && void 0 !== d[5] ? d[5] : "DESC", Q) {
                    e.n = 1;
                    break;
                  }
                  return C(null === $U.$C || void 0 === $U.$C ? void 0 : $U.$C.earning_graph), k(null === $U.$C || void 0 === $U.$C ? void 0 : $U.$C.order_by_country), M(null === $U.$C || void 0 === $U.$C ? void 0 : $U.$C.transactions), N(null === $U.$C || void 0 === $U.$C ? void 0 : $U.$C.count_unchecked_orders), H({
                    currency: null === $U.$C || void 0 === $U.$C ? void 0 : $U.$C.currency,
                    currency_pos: null === $U.$C || void 0 === $U.$C ? void 0 : $U.$C.currency_pos
                  }), t(!1), e.a(2);
                case 1:
                  return t(!0), e.p = 2, c = {
                    filter: n,
                    data_type: a,
                    type: r,
                    order: o,
                    sort_by: i
                  }, xq(n) && (c.filter = "custom", c.start_date = sn()(n[0]).format("YYYY-MM-DD"), c.end_date = sn()(n[1]).format("YYYY-MM-DD")), e.n = 3, l()({
                    path: (0, lN.addQueryArgs)("/creator-lms/v1/analytics/earnings", c),
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json"
                    }
                  });
                case 3:
                  u = e.v, "all" === a ? (C(null == u ? void 0 : u.earning_graph), k(null == u ? void 0 : u.order_by_country), M(null == u ? void 0 : u.transactions), N(null == u ? void 0 : u.count_unchecked_orders), H({
                    currency: null == u ? void 0 : u.currency,
                    currency_pos: null == u ? void 0 : u.currency_pos
                  })) : "earning" === a ? C(null == u ? void 0 : u.earning_graph) : "order" === a && M(null == u ? void 0 : u.transactions), e.n = 5;
                  break;
                case 4:
                  e.p = 4, s = e.v, console.error("Error fetching data:", s);
                case 5:
                  return e.p = 5, t(!1), e.f(5);
                case 6:
                  return e.a(2);
              }
            }, e, null, [[2, 4, 5, 6]]);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                kq(o, r, a, i, l, "next", e);
              }
              function l(e) {
                kq(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function (e) {
          return t.apply(this, arguments);
        };
      }(), [])),
      X = ((0, g.useMemo)(function () {
        return [{
          value: "all",
          label: (0, b.__)("All Times", "ohmylms")
        }, {
          value: "last_30_days",
          label: (0, b.__)("Last 30 days", "ohmylms")
        }, {
          value: "current_month",
          label: (0, b.__)("Current month", "ohmylms")
        }, {
          value: "previous_month",
          label: (0, b.__)("Previous month", "ohmylms")
        }, {
          value: "current_year",
          label: (0, b.__)("Current year", "ohmylms")
        }, {
          value: "last_12_months",
          label: (0, b.__)("Last 12 months", "ohmylms")
        }];
      }, []), (0, g.useMemo)(function () {
        return [{
          label: h().createElement("span", null, (0, b.__)("All", "ohmylms")),
          value: "all"
        }, {
          label: h().createElement("span", null, (0, b.__)("Course", "ohmylms")),
          value: "course"
        }, {
          label: h().createElement("span", null, (0, b.__)("Membership", "ohmylms")),
          value: "membership"
        }];
      }, []));
    (0, g.useEffect)(function () {
      var e = !0;
      return e && J(u), function () {
        e = !1;
      };
    }, []);
    var ee = {
      background: "#6e42d3",
      borderRadius: "2px",
      width: "10px",
      height: "10px",
      display: "inline-block",
      marginInlineEnd: "15px"
    };
    return h().createElement(h().Fragment, null, h().createElement(I.SurfaceWP, null, h().createElement(I.ContainerWP, null, h().createElement(I.SpacerWP, {
      paddingY: 5
    }, h().createElement(I.FlexWP, {
      gap: 2,
      align: "center",
      justify: "flex-start"
    }, h().createElement(Nr, {
      onClick: function () {
        Y("/dashboard");
      }
    }), h().createElement(I.HeadingWP, {
      level: "2",
      size: 20
    }, (0, b.__)("Earnings Report", "ohmylms")))), h().createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary"
    }, h().createElement(I.SpacerWP, {
      padding: 7.5,
      marginBottom: 0
    }, h().createElement(I.ProOverlayWP, {
      title: (0, b.__)("Course analytics is a pro feature. Please upgrade to the Pro version to access it.", "ohmylms"),
      top: "0px",
      height: "100%"
    }), h().createElement(I.FlexWP, {
      gap: 4,
      align: "stretch",
      className: "omlms-earning-report-cards-wrapper"
    }, h().createElement(I.FlexItemWP, {
      style: {
        width: "calc(67% - 8px)"
      },
      className: "omlms-earning-report-left-card"
    }, h().createElement(I.CardWP, {
      isBorderless: !0
    }, h().createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 6
    }, h().createElement(I.FlexWP, {
      gap: 2,
      align: "center",
      justify: "space-between"
    }, h().createElement(I.HeadingWP, {
      level: 3
    }, (0, b.__)("Earnings", "ohmylms")), h().createElement("div", {
      className: "omlms-dashboard-filter"
    }, h().createElement(ZU, {
      placeholder: (0, b.__)("Filter By Days", "ohmylms"),
      onChange: function (e) {
        "custom_range" !== e && J(m, e, "", "earning"), q("all" === e ? null : "last_30_days" === e ? "last 30 days" : "current_month" === e ? "current month" : "previous_month" === e ? "previous month" : "current_year" === e ? "current year" : "last_12_months" === e ? "last 12 months" : "custom range");
      },
      direction: "start",
      onRangeChange: function (e) {
        J(m, e, "", "earning");
      }
    }))), h().createElement(I.SpacerWP, {
      marginBottom: 4
    }), h().createElement(I.FlexWP, {
      gap: 4,
      align: "stretch"
    }, h().createElement(mG, {
      dashboardCardData: Z,
      dataLoading: d || c,
      withIn: U
    }))), h().createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 6
    }, c ? h().createElement(_.A, {
      paragraph: {
        rows: 3
      },
      active: !0
    }) : h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
      marginBottom: 4,
      style: {
        height: "330px"
      }
    }, h().createElement(LU, {
      currency: null == V ? void 0 : V.currency,
      currency_pos: null == V ? void 0 : V.currency_pos,
      graphData: (null == x ? void 0 : x.graph_data) || {},
      filterTypeParam: {
        type: "custom"
      }
    })), h().createElement(I.FlexWP, {
      gap: 5,
      align: "center",
      justify: "center"
    }, h().createElement(I.FlexItemWP, {
      style: Mq({}, "--base-color", "#6e42d3")
    }, h().createElement("span", {
      style: ee
    }), (0, b.__)("Income", "ohmylms")), h().createElement(I.FlexItemWP, {
      style: Mq({}, "--base-color", "#FF4955")
    }, h().createElement("span", {
      style: Aq(Aq({}, ee), {}, {
        background: "#FF4955"
      })
    }), (0, b.__)("Refund", "ohmylms")), h().createElement(I.FlexItemWP, {
      style: Mq({}, "--base-color", "#33A646")
    }, h().createElement("span", {
      style: Aq(Aq({}, ee), {}, {
        background: "#33A646"
      })
    }), (0, b.__)("Net Income", "ohmylms"))))))), h().createElement(I.FlexItemWP, {
      style: {
        width: "calc(33% - 8px)"
      },
      className: "omlms-earning-report-right-card"
    }, h().createElement(I.FlexWP, {
      align: "start",
      justify: "start",
      direction: "column",
      gap: 4
    }, h().createElement(I.FlexItemWP, {
      fullWidth: !0
    }, h().createElement(I.CardWP, {
      isBorderless: !0,
      fullWidth: !0,
      fullHeight: !0
    }, h().createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 6
    }, h().createElement(I.HeadingWP, {
      level: 3,
      size: 16
    }, (0, b.__)("Order report", "ohmylms")), h().createElement(I.SpacerWP, {
      marginBottom: 5,
      marginTop: 8
    }, c ? h().createElement(_.A, {
      paragraph: {
        rows: 3
      },
      active: !0
    }) : h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
      gap: 2,
      align: "center",
      justify: "flex-start"
    }, h().createElement(I.BadgeWP, {
      variant: "secondary",
      isBorderLess: !0,
      isRounded: !0
    }, h().createElement("svg", {
      width: "24",
      height: "24",
      fill: "none",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, h().createElement("path", {
      fill: "#83BF6E",
      fillRule: "evenodd",
      d: "M5.586 7l4.293-4.293a3 3 0 014.242 0L18.414 7h2.433a1 1 0 01.99 1.141l-1.469 10.283A3 3 0 0117.398 21H6.602a3 3 0 01-2.97-2.576L2.163 8.141A1 1 0 013.153 7h2.433zm5.707-2.879a1 1 0 011.414 0L15.586 7H8.414l2.879-2.879zM4.306 9l1.306 9.141a1 1 0 00.99.859h10.796a1 1 0 00.99-.859L19.694 9H4.306z",
      clipRule: "evenodd"
    }), h().createElement("path", {
      fill: "#83BF6E",
      fillRule: "evenodd",
      d: "M8 11a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm4 0a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm4 0a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z",
      clipRule: "evenodd"
    }))), F > 0 ? h().createElement("p", null, (0, b.__)("You have", "ohmylms"), " ", h().createElement("strong", null, " ", F, " ", (0, b.__)("unchecked orders", "ohmylms"), " "), " 👀") : h().createElement("p", null, (0, b.__)("You have no new order", "ohmylms"))))), h().createElement(I.ButtonWP, {
      variant: "secondary",
      onClick: function () {
        Y("/orders");
      }
    }, (0, b.__)("Review Orders", "ohmylms"))))), h().createElement(I.FlexItemWP, {
      flex: "1",
      fullWidth: !0
    }, h().createElement(I.CardWP, {
      isBorderless: !0,
      fullWidth: !0,
      fullHeight: !0
    }, h().createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 6
    }, h().createElement(I.HeadingWP, {
      level: 3,
      size: 16
    }, (0, b.__)("Earning from top countries", "ohmylms")), c ? h().createElement(_.A, {
      paragraph: {
        rows: 3
      },
      active: !0
    }) : h().createElement(h().Fragment, null, Object.keys(O).length > 0 ? h().createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 6
    }, Object.entries(O).map(function (e) {
      var t = Tq(e, 2),
        n = t[0],
        r = t[1];
      return h().createElement(I.SpacerWP, {
        key: n,
        marginBottom: 4
      }, h().createElement(I.FlexWP, {
        gap: 2,
        align: "center",
        justify: "space-between"
      }, h().createElement(I.FlexBlockWP, null, h().createElement(I.FlexWP, {
        gap: 2,
        align: "center",
        justify: "flex-start"
      }, h().createElement("span", {
        className: "flag"
      }, h().createElement(dc, {
        style: {
          diplay: "block"
        }
      })), n)), h().createElement(I.FlexBlockWP, {
        style: {
          textAlign: "right"
        }
      }, h().createElement(Fq, {
        currency: null == V ? void 0 : V.currency,
        currency_pos: null == V ? void 0 : V.currency_pos,
        price: Number(r)
      }))));
    })) : h().createElement(h().Fragment, null, h().createElement(uf, {
      icon: h().createElement(df, null),
      title: (0, b.__)("No global earnings to show yet!", "ohmylms"),
      description: (0, b.__)("As learners from around the world purchase your courses, their countries will show up here.", "ohmylms")
    }))))))))), h().createElement(I.SpacerWP, {
      marginBottom: 4
    }), h().createElement(I.CardWP, {
      isBorderless: !0
    }, h().createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 6
    }, h().createElement(Rq, {
      handleTypeFilters: function (e) {
        S(e), J(y, e, W, "order");
      },
      handleOrderTypeFilters: function (e) {
        z(e), J(y, E, e, "order");
      },
      orderTypeOptions: X,
      transactionLoading: v,
      transactionData: A,
      skeletonColumns: K,
      columns: $,
      dataLoading: c,
      currencyData: V
    })))))), h().createElement(I.SpacerWP, {
      marginBottom: 0,
      paddingBottom: 5
    })));
  };

const Dq = (0, g.memo)(Nq);
