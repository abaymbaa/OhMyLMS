// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var C1 = function (e) {
  e.formatData;
  var t,
    n,
    r,
    a,
    o,
    i,
    c,
    u,
    s,
    d,
    m = (0, y.useSelect)(function (e) {
      return e(T.default).getCurrencySettings();
    }, []),
    p = (0, y.useDispatch)(T.default),
    f = (0, z.A)(),
    v = (f.openNotificationWithIcon, f.contextHolder);
  function h(e) {
    return e ? Object.entries(e).map(function (e) {
      var t = R1(e, 2),
        n = t[0],
        r = t[1];
      return {
        label: React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: r
          }
        }),
        value: n
      };
    }) : [];
  }
  var _ = function (e, t) {
      p.updateCurrencySettings(function (e, t, n) {
        return (t = function (e) {
          var t = function (e) {
            if ("object" != b1(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != b1(n)) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          }(e);
          return "symbol" == b1(t) ? t : t + "";
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }({}, e, {
        value: t
      }));
    },
    w = (0, g.useCallback)(S1(_1().m(function e() {
      var t, n, r;
      return _1().w(function (e) {
        for (;;) switch (e.p = e.n) {
          case 0:
            return e.p = 0, p.setLoadingSetting(!0), e.n = 1, l()({
              path: "creator-lms/v1/settings/currency"
            });
          case 1:
            t = e.v, p.setCurrencySettings(t), n = {}, null == t || t.forEach(function (e) {
              n[null == e ? void 0 : e.id] = null == e ? void 0 : e.value;
            }), p.setGlobalDataViaKey("currency_settings", n), p.setLoadingSetting(!1), e.n = 3;
            break;
          case 2:
            e.p = 2, r = e.v, console.error("Error fetching currency data:", r);
          case 3:
            return e.p = 3, p.setLoadingSetting(!1), e.f(3);
          case 4:
            return e.a(2);
        }
      }, e, null, [[0, 2, 3, 4]]);
    })), []),
    E = function () {
      var e = S1(_1().m(function e(t) {
        var n, r, a, o;
        return _1().w(function (e) {
          for (;;) if (0 === e.n) return r = Object.entries(null == m || null === (n = m.creator_lms_currency) || void 0 === n ? void 0 : n.options).map(function (e) {
            var t = R1(e, 2),
              n = t[0];
            return {
              label: t[1],
              value: n
            };
          }), a = r.filter(function (e) {
            return e.label.toLowerCase().includes(t.toLowerCase());
          }), o = a.map(function (e) {
            return {
              label: React.createElement("span", {
                dangerouslySetInnerHTML: {
                  __html: e.label
                }
              }),
              value: e.value
            };
          }), e.a(2, o);
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
  return (0, g.useEffect)(function () {
    w();
  }, []), React.createElement(React.Fragment, null, v, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 2,
    marginTop: 2.5,
    marginBottom: 0
  }, React.createElement(Nm, {
    customClass: "currency-single-settings",
    title: (0, b.__)("Currency", "ohmylms"),
    tooltip: (0, b.__)("Select your preferred currency. It's listed with associated countries for easy selection", "ohmylms"),
    placeholder: (0, b.__)("Type to Select Currency", "ohmylms"),
    data: h(null == m || null === (t = m.creator_lms_currency) || void 0 === t ? void 0 : t.options),
    notFoundMessage: (0, b.__)("Nothing Found", "ohmylms"),
    onChange: function (e) {
      return _("creator_lms_currency", e.value);
    },
    staticSearch: !1,
    value: [{
      label: React.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: null == m || null === (n = m.creator_lms_currency) || void 0 === n ? void 0 : n.options[null == m || null === (r = m.creator_lms_currency) || void 0 === r ? void 0 : r.value]
        }
      }),
      value: null == m || null === (a = m.creator_lms_currency) || void 0 === a ? void 0 : a.value
    }],
    defaultOptions: h(null == m || null === (o = m.creator_lms_currency) || void 0 === o ? void 0 : o.options),
    loadOptions: E,
    isClearable: !1,
    isSearchable: !0,
    isMulti: !1,
    headerFontSize: "16px"
  }), React.createElement(Nm, {
    className: "currency-single-settings",
    title: (0, b.__)("Currency Position", "ohmylms"),
    tooltip: (0, b.__)("Choose where the currency symbol appears relative to the price.", "ohmylms"),
    placeholder: (0, b.__)("Type to Select Position", "ohmylms"),
    data: h(null == m || null === (i = m.creator_lms_currency_pos) || void 0 === i ? void 0 : i.options),
    notFoundMessage: (0, b.__)("Nothing Found", "ohmylms"),
    isMultiple: !1,
    onChange: function (e) {
      return _("creator_lms_currency_pos", e);
    },
    value: null == m || null === (c = m.creator_lms_currency_pos) || void 0 === c ? void 0 : c.value,
    staticSearch: !0,
    showSearch: !1,
    headerFontSize: "16px"
  }), React.createElement(Pf, {
    title: (0, b.__)("Thousand Separator", "ohmylms"),
    tooltip: (0, b.__)("This sets the thousands separator of displayed prices.", "ohmylms"),
    inputType: "text",
    placeholder: (0, b.__)("Write Thousand Separator", "ohmylms"),
    value: (null == m || null === (u = m.creator_lms_price_thousand_sep) || void 0 === u ? void 0 : u.value) || "",
    className: "currency-single-settings omlms-separator-input-card",
    onChange: function (e) {
      return _("creator_lms_price_thousand_sep", e);
    },
    headerFontSize: "16px"
  }), React.createElement(Pf, {
    title: (0, b.__)("Decimal Separator", "ohmylms"),
    placeholder: (0, b.__)("Write Decimal Separator", "ohmylms"),
    tooltip: (0, b.__)("This sets the decimal separator of displayed prices.", "ohmylms"),
    inputType: "text",
    value: (null == m || null === (s = m.creator_lms_price_decimal_sep) || void 0 === s ? void 0 : s.value) || "",
    className: "currency-single-settings omlms-separator-input-card",
    onChange: function (e) {
      return _("creator_lms_price_decimal_sep", e);
    },
    headerFontSize: "16px"
  }), React.createElement(Pf, {
    title: (0, b.__)("Number of Decimals", "ohmylms"),
    tooltip: (0, b.__)("This sets the number of decimal points shown in the displayed prices.", "ohmylms"),
    className: "currency-single-settings",
    placeholder: "2",
    inputType: "number",
    showDivider: !1,
    value: (null == m || null === (d = m.creator_lms_price_num_decimals) || void 0 === d ? void 0 : d.value) || "",
    onChange: function (e) {
      return _("creator_lms_price_num_decimals", e);
    },
    spacerMarginBottom: 0,
    headerFontSize: "16px"
  }))));
};

const P1 = (0, g.memo)(C1);

function O1(e) {
  return O1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, O1(e);
}

function k1() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return j1(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (j1(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, j1(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, j1(d, "constructor", u), j1(u, "constructor", c), c.displayName = "GeneratorFunction", j1(u, a, "GeneratorFunction"), j1(d), j1(d, a, "Generator"), j1(d, r, function () {
    return this;
  }), j1(d, "toString", function () {
    return "[object Generator]";
  }), (k1 = function () {
    return {
      w: o,
      m
    };
  })();
}

function j1(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  j1 = function (e, t, n, r) {
    function o(t, n) {
      j1(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, j1(e, t, n, r);
}

function A1(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function M1(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        A1(o, r, a, i, l, "next", e);
      }
      function l(e) {
        A1(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function T1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function I1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? T1(Object(n), !0).forEach(function (t) {
      F1(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T1(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function F1(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != O1(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != O1(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == O1(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function N1(e, t) {
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
  }(e, t) || D1(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function D1(e, t) {
  if (e) {
    if ("string" == typeof e) return W1(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? W1(e, t) : void 0;
  }
}

function W1(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var z1 = function (e) {
  e.formatData;
  var t,
    n,
    r,
    a,
    o,
    i,
    c,
    u,
    s,
    d,
    m,
    p,
    f = (0, y.useSelect)(function (e) {
      return e(T.default).getTaxSettings();
    }, []),
    v = (0, y.useDispatch)(T.default),
    h = (0, z.A)(),
    _ = (h.openNotificationWithIcon, h.contextHolder),
    w = (null == f || null === (t = f.creator_lms_countries) || void 0 === t ? void 0 : t.value) || [],
    E = (null == f || null === (n = f.creator_lms_states) || void 0 === n ? void 0 : n.value) || {},
    S = N1((0, g.useState)({
      country: "",
      state: "",
      countryWide: !1,
      rate: ""
    }), 2),
    R = (S[0], S[1], N1((0, g.useState)([]), 2)),
    x = R[0],
    C = R[1],
    P = N1((0, g.useState)(!1), 2),
    O = (P[0], P[1], N1((0, g.useState)([]), 2)),
    k = O[0],
    j = O[1],
    A = function (e, t) {
      v.updateTaxSettings(F1({}, e, {
        value: t
      }));
    },
    M = function (e, t, n) {
      j(function (r) {
        var a = r.map(function (r) {
          if (r.id === e) {
            var a = I1(I1({}, r), {}, F1({}, t, n));
            return "country" === t && (a.state = "", a.countryWide = !0), "state" === t && (a.countryWide = !n || "" === n), "countryWide" === t && !0 === n && (a.state = ""), a;
          }
          return r;
        });
        return v.updateTaxSettings({
          creator_lms_new_tax_rates: {
            value: a
          }
        }), a;
      });
    },
    F = (0, g.useCallback)(M1(k1().m(function e() {
      var t, n, r, a;
      return k1().w(function (e) {
        for (;;) switch (e.p = e.n) {
          case 0:
            return e.p = 0, v.setLoadingSetting(!0), e.n = 1, l()({
              path: "creator-lms/v1/settings/tax"
            });
          case 1:
            t = e.v, v.setTaxSettings(t), n = t.find(function (e) {
              return "creator_lms_existing_tax_rates" === e.id;
            }), r = t.find(function (e) {
              return "creator_lms_new_tax_rates" === e.id;
            }), null != n && n.value && Array.isArray(n.value) && C(n.value), null != r && r.value && Array.isArray(r.value) && j(r.value), v.setLoadingSetting(!1), e.n = 3;
            break;
          case 2:
            e.p = 2, a = e.v, console.error("Error fetching tax data:", a);
          case 3:
            return e.p = 3, v.setLoadingSetting(!1), e.f(3);
          case 4:
            return e.a(2);
        }
      }, e, null, [[0, 2, 3, 4]]);
    })), [v]);
  return (0, g.useEffect)(function () {
    F();
  }, [F]), (0, g.useEffect)(function () {
    var e, t;
    null != f && null !== (e = f.creator_lms_existing_tax_rates) && void 0 !== e && e.value && Array.isArray(f.creator_lms_existing_tax_rates.value) && C(f.creator_lms_existing_tax_rates.value), null != f && null !== (t = f.creator_lms_new_tax_rates) && void 0 !== t && t.value && Array.isArray(f.creator_lms_new_tax_rates.value) && j(f.creator_lms_new_tax_rates.value);
  }, [null == f || null === (r = f.creator_lms_existing_tax_rates) || void 0 === r ? void 0 : r.value, null == f || null === (a = f.creator_lms_new_tax_rates) || void 0 === a ? void 0 : a.value]), React.createElement(React.Fragment, null, _, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    marginTop: 2.5,
    padding: 2
  }, React.createElement(I.FlexWP, {
    gap: 4,
    direction: "column"
  }, React.createElement(Kt, {
    title: (0, b.__)("Enable Tax Calculations", "ohmylms"),
    description: (0, b.__)("When taxes are enabled, rates are applied based on the customer’s address entered at checkout.", "ohmylms"),
    isChecked: "yes" === (null == f || null === (o = f.creator_lms_tax_enabled) || void 0 === o ? void 0 : o.value),
    onChange: function (e) {
      return A("creator_lms_tax_enabled", e ? "yes" : "no");
    },
    customClass: "omlms-tax-enable-switcher",
    isDefaultStyle: !0,
    align: "flex-start",
    conditionalChild: React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
      marginBottom: 4
    }), React.createElement(I.FlexWP, {
      direction: "column",
      gap: 4,
      justify: "flex-start",
      align: "flex-start"
    }, React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary",
      padding: "16px",
      fullWidth: !0
    }, React.createElement(Pf, {
      title: (0, b.__)("Tax Label", "ohmylms"),
      description: (0, b.__)('Label to display for tax (e.g., "VAT", "GST", "Sales Tax").', "ohmylms"),
      value: (null == f || null === (i = f.creator_lms_tax_label) || void 0 === i ? void 0 : i.value) || "Tax",
      onChange: function (e) {
        return A("creator_lms_tax_label", e);
      },
      placeholder: (0, b.__)("Tax", "ohmylms"),
      headerFontSize: "16px"
    }), React.createElement(Nm, {
      title: (0, b.__)("Prices Include Tax", "ohmylms"),
      description: (0, b.__)("This controls if entered prices include tax or not.", "ohmylms"),
      value: (null == f || null === (c = f.creator_lms_prices_include_tax) || void 0 === c ? void 0 : c.value) || "no",
      onChange: function (e) {
        return A("creator_lms_prices_include_tax", e);
      },
      staticSearch: !0,
      headerFontSize: "16px",
      options: [{
        label: (0, b.__)("Yes, I will enter prices inclusive of tax", "ohmylms"),
        value: "yes"
      }, {
        label: (0, b.__)("No, I will enter prices exclusive of tax", "ohmylms"),
        value: "no"
      }]
    })), React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary",
      padding: "16px",
      fullWidth: !0
    }, React.createElement(I.SpacerWP, {
      padding: 0,
      marginBottom: 0
    }, React.createElement(Kt, {
      title: (0, b.__)("Enable EU VAT", "ohmylms"),
      description: (0, b.__)("When this is checked, VAT taxes will be calculated for any customers who are located in the European Union. The plugin comes with the current standard VAT rate for each EU country. You can change these as required in the Tax Rates section below.", "ohmylms"),
      isChecked: "yes" === (null == f || null === (u = f.creator_lms_eu_vat_enabled) || void 0 === u ? void 0 : u.value),
      onChange: function (e) {
        return A("creator_lms_eu_vat_enabled", e ? "yes" : "no");
      },
      headerFontSize: "16px",
      isDefaultStyle: !0,
      align: "flex-start",
      variant: "secondary"
    }), "yes" === (null == f || null === (s = f.creator_lms_eu_vat_enabled) || void 0 === s ? void 0 : s.value) && React.createElement(React.Fragment, null, React.createElement(Kt, {
      title: (0, b.__)("Disable VAT Number Validation", "ohmylms"),
      description: (0, b.__)("When this option is checked, the VAT number will not be validated by VIES online service.", "ohmylms"),
      isChecked: "yes" === (null == f || null === (d = f.creator_lms_disable_vat_validation) || void 0 === d ? void 0 : d.value),
      onChange: function (e) {
        return A("creator_lms_disable_vat_validation", e ? "yes" : "no");
      },
      headerFontSize: "16px",
      isDefaultStyle: !0,
      align: "flex-start",
      variant: "secondary"
    }), React.createElement(Pf, {
      title: (0, b.__)("VAT Number Field Label", "ohmylms"),
      description: (0, b.__)("The label that appears at checkout for the VAT number field.", "ohmylms"),
      value: (null == f || null === (m = f.creator_lms_vat_number_label) || void 0 === m ? void 0 : m.value) || "",
      onChange: function (e) {
        return A("creator_lms_vat_number_label", e);
      },
      placeholder: (0, b.__)("VAT Number", "ohmylms"),
      headerFontSize: "16px"
    })))), React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary",
      padding: "16px",
      style: {
        width: "100%"
      }
    }, React.createElement(I.SpacerWP, {
      padding: 4,
      marginBottom: 0
    }, React.createElement(I.HeadingWP, {
      level: 4,
      className: "tax-section-title",
      size: "16px"
    }, (0, b.__)("Set up Tax Rates", "ohmylms")), React.createElement(I.TextWP, {
      className: "tax-description",
      color: "#687784"
    }, (0, b.__)("Configure tax rates for different countries and regions. You can add multiple tax rates for different locations.", "ohmylms")), React.createElement(I.SpacerWP, {
      marginBottom: 4
    }), React.createElement("div", {
      className: "omlms-table-wrapper omlms-tax-table",
      style: {
        position: "relative"
      }
    }, React.createElement("table", {
      className: "omlms-table"
    }, React.createElement("thead", {
      className: "omlms-table-thead"
    }, React.createElement("tr", {
      className: "omlms-table-header-row"
    }, React.createElement("th", {
      className: "omlms-th tax-country"
    }, (0, b.__)("Country", "ohmylms")), React.createElement("th", {
      className: "omlms-th tax-state-code"
    }, (0, b.__)("State Code", "ohmylms")), React.createElement("th", {
      className: "omlms-th tax-country-wide"
    }, (0, b.__)("Country Wide", "ohmylms")), React.createElement("th", {
      className: "omlms-th tax-rate"
    }, (0, b.__)("Rate", "ohmylms")), React.createElement("th", {
      className: "omlms-th tax-action"
    }, React.createElement("div", {
      className: "tax-action"
    })))), React.createElement("tbody", {
      className: "omlms-table-tbody"
    }, k.map(function (e) {
      return React.createElement("tr", {
        key: e.id,
        className: "omlms-tr tax-rate-form"
      }, React.createElement("td", {
        className: "omlms-td tax-country"
      }, React.createElement("select", {
        value: e.country,
        onChange: function (t) {
          return M(e.id, "country", t.target.value);
        },
        className: "tax-country"
      }, React.createElement("option", {
        value: ""
      }, (0, b.__)("Select Country", "ohmylms")), w.map(function (e) {
        return React.createElement("option", {
          key: e.value,
          value: e.value
        }, e.label);
      }))), React.createElement("td", {
        className: "omlms-td tax-state-code"
      }, React.createElement(I.TooltipWP, {
        text: null != e && e.countryWide ? (0, b.__)('To enable on specific state, deselect "Apply to whole country"', "ohmylms") : (0, b.__)("Select a state", "ohmylms"),
        className: "tax-state-code"
      }, React.createElement("select", {
        value: e.state,
        onChange: function (t) {
          return M(e.id, "state", t.target.value);
        },
        disabled: e.countryWide || !e.country,
        style: {
          width: "100%"
        }
      }, React.createElement("option", {
        value: ""
      }, (0, b.__)("——", "ohmylms")), e.country && E[e.country] && E[e.country].map(function (e) {
        return React.createElement("option", {
          key: e.value,
          value: e.value
        }, e.label);
      })))), React.createElement("td", {
        className: "omlms-td tax-country-wide"
      }, React.createElement("label", {
        className: "tax-rate-checkbox-label tax-country-wide"
      }, React.createElement("input", {
        type: "checkbox",
        checked: e.countryWide,
        onChange: function (t) {
          M(e.id, "countryWide", t.target.checked), t.target.checked && M(e.id, "state", "");
        },
        disabled: !e.country
      }), React.createElement("span", {
        className: e.country ? "" : "tax-rate-checkbox-disabled"
      }, (0, b.__)("Apply to whole country", "ohmylms")))), React.createElement("td", {
        className: "omlms-td tax-rate"
      }, React.createElement(I.InputNumberWP, {
        value: e.rate,
        onChange: function (t) {
          M(e.id, "rate", 0 > t ? 0 : 100 >= t ? t : 100);
        },
        onKeyDown: function (e) {
          "-" !== e.key && "+" !== e.key && "e" !== e.key && "E" !== e.key || e.preventDefault();
        },
        placeholder: "0.00",
        step: "0.01",
        min: "0",
        max: 100,
        suffix: "%",
        className: "tax-rate"
      })), React.createElement("td", {
        className: "omlms-td tax-action"
      }, React.createElement("div", {
        className: "tax-rate-remove-container tax-action"
      }, React.createElement(I.ButtonWP, {
        type: "link",
        size: "small",
        onClick: function () {
          return t = e.id, void j(function (e) {
            var n = e.filter(function (e) {
              return e.id !== t;
            });
            return v.updateTaxSettings({
              creator_lms_new_tax_rates: {
                value: n
              }
            }), n;
          });
          var t;
        },
        className: "tax-rate-remove-btn",
        title: (0, b.__)("Cancel", "ohmylms")
      }, React.createElement("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, React.createElement("path", {
        d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
      }))))));
    }))), 0 === x.length && 0 === k.length && React.createElement("div", {
      className: "tax-rates-no-data"
    }, (0, b.__)("No rates found.", "ohmylms"))), x.length > 0 && React.createElement("div", {
      className: "existing-tax-rates"
    }, React.createElement(I.TextWP, {
      className: "existing-tax-rates-title"
    }, (0, b.__)("Current Tax Rates:", "ohmylms"), " (", x.length, ")"), x.map(function (e) {
      return React.createElement("div", {
        key: e.id,
        className: "existing-tax-rate"
      }, React.createElement("div", {
        className: "existing-tax-rate-country"
      }, (t = e.country, (n = w.find(function (e) {
        return e.value === t;
      })) ? n.label : t)), React.createElement("div", null, function (e, t) {
        var n = E[e];
        if (!n || !t) return t || "——";
        var r = n.find(function (e) {
          return e.value === t;
        });
        return r ? r.label : t;
      }(e.country, e.state)), React.createElement("div", null, React.createElement("span", {
        className: "existing-tax-rate-badge ".concat(e.countryWide ? "existing-tax-rate-badge--yes" : "existing-tax-rate-badge--no")
      }, e.countryWide ? (0, b.__)("Yes", "ohmylms") : (0, b.__)("No", "ohmylms"))), React.createElement("div", {
        className: "existing-tax-rate-percentage"
      }, e.rate, "%"), React.createElement(I.ButtonWP, {
        type: "link",
        size: "small",
        onClick: function () {
          return t = e.id, void C(function (e) {
            var n = e.filter(function (e) {
              return e.id !== t;
            });
            return v.updateTaxSettings({
              creator_lms_existing_tax_rates: {
                value: n
              }
            }), n;
          });
          var t;
        },
        className: "tax-rate-remove-btn",
        title: (0, b.__)("Remove this tax rate", "ohmylms")
      }, React.createElement("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, React.createElement("path", {
        d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
      }))));
      var t, n;
    })), React.createElement("div", {
      className: "add-tax-rate-container"
    }, React.createElement(I.ButtonWP, {
      variant: "secondary",
      onClick: function () {
        var e = {
          id: Date.now() + Math.random(),
          country: "",
          state: "",
          countryWide: !1,
          rate: ""
        };
        j(function (t) {
          var n = [].concat(function (e) {
            return function (e) {
              if (Array.isArray(e)) return W1(e);
            }(e) || function (e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || D1(e) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }(t), [e]);
          return v.updateTaxSettings({
            creator_lms_new_tax_rates: {
              value: n
            }
          }), n;
        });
      },
      className: "add-tax-rate-btn"
    }, React.createElement(nf, null), (0, b.__)("Add Tax Rate", "ohmylms"))), React.createElement("div", {
      className: "fallback-tax-rate-section"
    }, React.createElement(Pf, {
      title: (0, b.__)("Fallback Tax Rate", "ohmylms"),
      description: (0, b.__)("Customers not in a specific rate will be charged this tax rate. Enter a percentage, such as 6.5 for 6.5%.", "ohmylms"),
      inputType: "number",
      value: (null == f || null === (p = f.creator_lms_fallback_tax_rate) || void 0 === p ? void 0 : p.value) || "",
      onChange: function (e) {
        return A("creator_lms_fallback_tax_rate", e);
      },
      placeholder: "0.00",
      min: "0",
      max: "100",
      step: "0.01",
      suffix: "%",
      headerFontSize: "16px"
    }))))))
  })))));
};

const B1 = (0, g.memo)(z1);

function L1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function V1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? L1(Object(n), !0).forEach(function (t) {
      H1(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L1(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
