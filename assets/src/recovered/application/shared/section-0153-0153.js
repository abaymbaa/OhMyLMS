// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function H1(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Q1(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Q1(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Q1(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function G1() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return U1(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (U1(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, U1(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, U1(d, "constructor", u), U1(u, "constructor", c), c.displayName = "GeneratorFunction", U1(u, a, "GeneratorFunction"), U1(d), U1(d, a, "Generator"), U1(d, r, function () {
    return this;
  }), U1(d, "toString", function () {
    return "[object Generator]";
  }), (G1 = function () {
    return {
      w: o,
      m
    };
  })();
}

function U1(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  U1 = function (e, t, n, r) {
    function o(t, n) {
      U1(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, U1(e, t, n, r);
}

function q1(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Y1(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        q1(o, r, a, i, l, "next", e);
      }
      function l(e) {
        q1(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function Q1(e) {
  return Q1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Q1(e);
}

function Z1(e, t) {
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
      if ("string" == typeof e) return $1(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $1(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function $1(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var K1 = function () {
  var e = (0, y.useDispatch)(T.default),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).isSettingsLoading();
    }, []),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getPaymentSettings();
    }, []),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).getCurrencySettings();
    }, []),
    a = (0, y.useSelect)(function (e) {
      return e(T.default).getTaxSettings();
    }, []),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    c = (0, z.A)(),
    u = c.openNotificationWithIcon,
    s = c.contextHolder,
    d = (0, f.Zp)(),
    m = (0, f.g)(),
    p = m.tab,
    v = (m.subTab, Z1((0, g.useState)(!1), 2)),
    h = v[0],
    _ = v[1],
    w = Z1((0, g.useState)("payments"), 2),
    E = w[0],
    S = w[1];
  function R(e) {
    var t = {};
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t;
  }
  function x(e) {
    var t = {};
    function n(e) {
      for (; "object" === Q1(e) && null !== e && "value" in e;) e = e.value;
      return e;
    }
    for (var r in e) e.hasOwnProperty(r) && (t[r] = n(e[r].value));
    return t;
  }
  var C = function () {
      var e = Y1(G1().m(function e(t) {
        var r, a, o;
        return G1().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, _(!0), r = R(n), null != t && t.key && null != t && t.value && (r[null == t ? void 0 : t.key] = null == t ? void 0 : t.value), e.n = 1, l()({
                path: "/ohmylms/v1/settings/payment-gateway",
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(r)
              });
            case 1:
              return null != (a = e.v) && a.success && u("success", "Payment Settings Saved Successfully."), e.a(2, a);
            case 2:
              e.p = 2, o = e.v, console.error(o), u("error", "Failed to update settings. Please try again.");
            case 3:
              return e.p = 3, _(!1), e.f(3);
            case 4:
              return e.a(2);
          }
        }, e, null, [[0, 2, 3, 4]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    P = (0, g.useCallback)(Y1(G1().m(function t() {
      var n, a, o;
      return G1().w(function (t) {
        for (;;) switch (t.p = t.n) {
          case 0:
            return t.p = 0, _(!0), n = x(r), t.n = 1, l()({
              path: "/ohmylms/v1/settings/currency",
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(n)
            });
          case 1:
            null != (a = t.v) && a.success && (e.setGlobalDataViaKey("currency_settings", n), u("success", "Currency settings updated successfully.")), t.n = 3;
            break;
          case 2:
            t.p = 2, o = t.v, console.error(o), u("error", "Failed to update settings. Please try again.");
          case 3:
            return t.p = 3, _(!1), t.f(3);
          case 4:
            return t.a(2);
        }
      }, t, null, [[0, 2, 3, 4]]);
    })), [r]),
    O = (0, g.useCallback)(Y1(G1().m(function t() {
      var n, r, o, i, c, s, d, m, p;
      return G1().w(function (t) {
        for (;;) switch (t.p = t.n) {
          case 0:
            return t.p = 0, _(!0), o = x(a), i = (null == a || null === (n = a.ohmylms_existing_tax_rates) || void 0 === n ? void 0 : n.value) || [], c = (null == a || null === (r = a.ohmylms_new_tax_rates) || void 0 === r ? void 0 : r.value) || [], s = [], i.forEach(function (e) {
              e.country && void 0 !== e.rate && "" !== e.rate && s.push({
                id: e.id || Date.now() + Math.random(),
                country: e.country,
                state: e.state || "",
                countryWide: e.countryWide || !1,
                rate: parseFloat(e.rate) || 0
              });
            }), c.forEach(function (e) {
              e.country && e.rate && parseFloat(e.rate) >= 0 && parseFloat(e.rate) <= 100 && s.push({
                id: e.id || Date.now() + Math.random(),
                country: e.country,
                state: e.state || "",
                countryWide: e.countryWide || !1,
                rate: parseFloat(e.rate)
              });
            }), d = V1(V1({
              ohmylms_tax_enabled: o.ohmylms_tax_enabled || "no",
              ohmylms_tax_label: o.ohmylms_tax_label || "Tax",
              ohmylms_prices_include_tax: o.ohmylms_prices_include_tax || "no",
              ohmylms_eu_vat_enabled: o.ohmylms_eu_vat_enabled || "no",
              ohmylms_disable_vat_validation: o.ohmylms_disable_vat_validation || "no",
              ohmylms_vat_number_label: o.ohmylms_vat_number_label || "VAT Number",
              ohmylms_fallback_tax_rate: o.ohmylms_fallback_tax_rate || "0.00"
            }, o), {}, {
              ohmylms_tax_rates: s
            }), t.n = 1, l()({
              path: "/ohmylms/v1/settings/tax",
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(d)
            });
          case 1:
            return null != (m = t.v) && m.success && (u("success", "Tax settings updated successfully."), e.updateTaxSettings({
              new_tax_rates: {
                value: []
              }
            })), t.a(2, m);
          case 2:
            t.p = 2, p = t.v, console.error(p), u("error", "Failed to update settings. Please try again.");
          case 3:
            return t.p = 3, _(!1), t.f(3);
          case 4:
            return t.a(2);
        }
      }, t, null, [[0, 2, 3, 4]]);
    })), [a]),
    k = [{
      label: React.createElement(React.Fragment, null, (0, b.__)("Payments", "ohmylms")),
      key: "payments",
      children: React.createElement(y1, {
        isLoading: h,
        setIsLoading: _,
        handleSave: C
      })
    }, {
      label: React.createElement(React.Fragment, null, (0, b.__)("Currency Settings", "ohmylms")),
      key: "currency",
      children: React.createElement(P1, {
        formatData: x
      })
    }, {
      label: React.createElement(React.Fragment, null, (0, b.__)("Taxes", "ohmylms")),
      key: "tax",
      children: React.createElement(B1, {
        formatData: x
      })
    }];
  return (0, g.useEffect)(function () {
    !t && o && u(i, o);
  }, [o]), React.createElement(React.Fragment, null, s, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    className: "ohmylms-full-screen-height"
  }, React.createElement(I.SpacerWP, {
    padding: 4,
    paddingTop: 1,
    marginTop: 4,
    marginBottom: 0
  }, React.createElement(ep.A, {
    items: k,
    className: "ohmylms-monetization-tabs",
    onChange: function (e) {
      S(e), d("/settings/".concat(p, "/").concat(e));
    },
    activekey: E
  }), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    marginTop: 4
  }, React.createElement(SK, {
    activeTab: E,
    handleSave: "currency" === E ? P : "tax" === E ? O : C,
    isSaving: h
  })))));
};

const J1 = (0, g.memo)(K1);












