// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Aw,
  Mw = {
    key: "wcs_subscription_before_renewal",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-woocommerce-subscription",
    title: "Subscription Before Renewal",
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: null === (Sw = window) || void 0 === Sw || null === (Sw = Sw.MRM_Vars) || void 0 === Sw || null === (Sw = Sw.mint_trans) || void 0 === Sw ? void 0 : Sw.SubscriptionCreatedDescription,
    subtitle: function (e) {
      var t, n, r, a, o, i, l, c;
      return null !== (t = e.settings) && void 0 !== t && null !== (t = t.product_settings) && void 0 !== t && t.option_type && "choose-product" !== (null === (n = e.settings) || void 0 === n || null === (n = n.product_settings) || void 0 === n ? void 0 : n.option_type) || 0 !== (null === (a = e.settings) || void 0 === a || null === (a = a.product_settings) || void 0 === a || null === (a = a.products) || void 0 === a ? void 0 : a.length) ? "choose-category" !== (null === (r = e.settings) || void 0 === r || null === (r = r.product_settings) || void 0 === r ? void 0 : r.option_type) || null !== (i = e.settings) && void 0 !== i && null !== (i = i.product_settings) && void 0 !== i && null !== (i = i.category) && void 0 !== i && i.length && 0 !== (null === (l = e.settings) || void 0 === l || null === (l = l.product_settings) || void 0 === l || null === (l = l.category) || void 0 === l ? void 0 : l.length) || null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.NotSetUpYet : null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.NotSetUpYet;
    },
    icon: function () {
      return React.createElement("svg", {
        width: "21",
        height: "21",
        fill: "none",
        viewBox: "0 0 22 22",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".3",
        d: "M20.773 12.903a9.923 9.923 0 01-2.744 5.175A9.91 9.91 0 0110.975 21a9.91 9.91 0 01-7.053-2.922A9.91 9.91 0 011 11.025 9.91 9.91 0 013.922 3.97a9.91 9.91 0 017.053-2.921c2.093 0 4.087.64 5.759 1.827l-.298-1.087a.625.625 0 011.206-.33l.845 3.086a.625.625 0 01-.652.788l-3.19-.252a.625.625 0 11.1-1.246l1.326.105a8.66 8.66 0 00-5.096-1.64c-2.33 0-4.521.907-6.17 2.555a8.668 8.668 0 00-2.555 6.17 8.67 8.67 0 002.556 6.17c3.402 3.402 8.937 3.402 12.339 0a8.706 8.706 0 001.898-9.498.625.625 0 011.156-.476c.741 1.8.94 3.764.574 5.682zm-7.048.286c0-1.39-1.234-2.522-2.75-2.522-.827 0-1.5-.571-1.5-1.273 0-.701.673-1.272 1.5-1.272.418 0 1.195.34 1.363.595a.625.625 0 001.044-.686c-.35-.535-1.132-.915-1.792-1.075l-.015-.643a.625.625 0 00-1.25.03l.014.597c-1.21.264-2.114 1.264-2.114 2.454 0 1.391 1.234 2.523 2.75 2.523.827 0 1.5.57 1.5 1.272 0 .702-.673 1.272-1.5 1.272-.564 0-.844-.169-1.349-.645a.625.625 0 10-.857.91c.435.41.89.788 1.593.928l.014.547c.008.34.286.61.624.61h.015a.625.625 0 00.61-.64l-.013-.528c1.21-.264 2.113-1.264 2.113-2.454z"
      }));
    },
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i,
        l,
        c,
        u,
        s,
        d,
        m,
        p,
        f,
        v,
        _ = kw((0, g.useState)([]), 2),
        w = _[0],
        E = _[1],
        S = kw((0, g.useState)([]), 2),
        R = S[0],
        x = S[1],
        C = kw((0, g.useState)("Please enter 3 or more characters"), 2),
        P = C[0],
        O = C[1],
        k = function () {
          var e = Ow(xw().m(function e(t) {
            return xw().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!(t.length >= 3)) {
                    e.n = 1;
                    break;
                  }
                  return O((0, b.__)("loading...", "mrm")), e.n = 1, Tg(t, "wc").then(function (e) {
                    e.success && (0 === e.products.length ? O((0, b.__)("No product found", "mrm")) : (E(e.products), O((0, b.__)("Please enter 3 or more characters", "mrm"))));
                  });
                case 1:
                  return e.a(2);
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
        j = function () {
          var e = Ow(xw().m(function e(t) {
            return xw().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!(t.length >= 3)) {
                    e.n = 1;
                    break;
                  }
                  return O((0, b.__)("loading...", "mrm")), e.n = 1, Fg(t, "wc").then(function (e) {
                    e.success && (0 === e.category.length ? O((0, b.__)("No category found", "mrm")) : (x(e.category), O((0, b.__)("Please enter 3 or more characters", "mrm"))));
                  });
                case 1:
                  return e.a(2);
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
        A = function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(I, F, N, "product_settings", "option_type", e.target.value);
        },
        M = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        T = M.selectedStep,
        I = M.selectedStepIndex,
        F = M.selectedStepCondition,
        N = M.selectedLogicalStepIndex,
        D = (M.errors, null !== (e = T.settings) && void 0 !== e && null !== (e = e.product_settings) && void 0 !== e && e.option_type ? null === (t = T.settings) || void 0 === t || null === (t = t.product_settings) || void 0 === t ? void 0 : t.option_type : "choose-all");
      (null === (n = T.settings) || void 0 === n || null === (n = n.product_settings) || void 0 === n || !n.option_type) && (null === (r = T.settings) || void 0 === r || null === (r = r.product_settings) || void 0 === r ? void 0 : r.products.length) > 0 && (D = "choose-product");
      var W = function (e) {
        return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, P));
      };
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings subscription-before-renewal"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(z_, null), "Subscription Before Renewal"), h().createElement("p", {
        className: "sort-description"
      }, "This trigger runs once per day for any subscriptions that are due for renewal on the automation's target date. For example, if set to run 7 days before renewal, it would look for subscriptions that are due for renewal on the date exactly 7 days from now.")), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, "Days before renewal", h().createElement("span", {
        className: "required-mark"
      }, "*"), h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Leaving it blank will not trigger the automation."))), h().createElement("div", {
        className: "mintmrm-input-group"
      }, h().createElement("input", {
        type: "number",
        name: "minimum-day",
        defaultValue: null === (a = T.settings) || void 0 === a || null === (a = a.product_settings) || void 0 === a ? void 0 : a.days_before,
        min: 1,
        onKeyDown: function (e) {
          return ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
        },
        onChange: function (e) {
          return function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(I, F, N, "product_settings", "days_before", e);
          }(e.target.value);
        }
      }))), h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, "Time of day", h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Set the time in your site's timezone that the automation will be triggered. If you set a time that has already passed for today the automation will not run until tomorrow. The automation will never be run twice in the same day. It's not possible to set a time after 23:00 which gives the background processor at least 1 hour to run any tasks."))), h().createElement("div", {
        className: "mint-automation-time-picker"
      }, h().createElement(q.DateTimePicker, {
        currentDate: null === (o = T.settings) || void 0 === o || null === (o = o.product_settings) || void 0 === o ? void 0 : o.time_to_check,
        onChange: function (e) {
          return t = e, void (0, y.dispatch)(Lf).updateStepArgs(I, F, N, "product_settings", "time_to_check", t);
          var t;
        },
        is12Hour: !0,
        __nextRemoveHelpButton: !0,
        __nextRemoveResetButton: !0
      }))), h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.SubscriptionContains, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Select the products or categories that trigger this automation. Choose 'Any product' for any subscription, or specify products or categories."))), h().createElement("div", {
        className: "radio-btn-wrapper"
      }, h().createElement("span", {
        className: "mintmrm-radiobtn"
      }, h().createElement("input", {
        id: "choose-all",
        type: "radio",
        name: "select-product-option",
        value: "choose-all",
        checked: "choose-all" === D,
        onChange: A
      }), h().createElement("label", {
        htmlFor: "choose-all"
      }, null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.AnyProduct)), h().createElement("span", {
        className: "mintmrm-radiobtn"
      }, h().createElement("input", {
        id: "choose-product",
        type: "radio",
        name: "select-product-option",
        value: "choose-product",
        checked: "choose-product" === D,
        onChange: A
      }), h().createElement("label", {
        htmlFor: "choose-product"
      }, null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.SpecificProducts)), h().createElement("span", {
        className: "mintmrm-radiobtn"
      }, h().createElement("input", {
        id: "choose-category",
        type: "radio",
        name: "select-product-option",
        value: "choose-category",
        checked: "choose-category" === D,
        onChange: A
      }), h().createElement("label", {
        htmlFor: "choose-category"
      }, null === (u = window) || void 0 === u || null === (u = u.MRM_Vars) || void 0 === u || null === (u = u.mint_trans) || void 0 === u ? void 0 : u.SpecificCategories)))), "choose-product" === D && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-list"
      }, null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s || null === (s = s.mint_trans) || void 0 === s ? void 0 : s.ChooseProduct), h().createElement("div", {
        className: "form-group react-select-control-group"
      }, h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: W
        },
        value: null !== (d = null === (m = T.settings) || void 0 === m || null === (m = m.product_settings) || void 0 === m ? void 0 : m.products) && void 0 !== d ? d : "",
        onChange: function (e) {
          !function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(I, F, N, "product_settings", "products", e);
          }(e);
        },
        onInputChange: function (e) {
          k(e);
        },
        options: w,
        isMulti: "true",
        placeholder: (0, b.__)("Search products...", "mrm"),
        isSearchable: !0
      })), h().createElement("p", {
        className: "placeholder-text"
      }, "Leaving it blank will not trigger the automation.")), "choose-category" === D && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-list"
      }, null === (p = window) || void 0 === p || null === (p = p.MRM_Vars) || void 0 === p || null === (p = p.mint_trans) || void 0 === p ? void 0 : p.ChooseCategoryS), h().createElement("div", {
        className: "form-group react-select-control-group"
      }, h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: W
        },
        value: null !== (f = null === (v = T.settings) || void 0 === v || null === (v = v.product_settings) || void 0 === v ? void 0 : v.category) && void 0 !== f ? f : "",
        onChange: function (e) {
          !function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(I, F, N, "product_settings", "category", e);
          }(e);
        },
        onInputChange: function (e) {
          j(e);
        },
        options: R,
        isMulti: "true",
        placeholder: (0, b.__)("Search category...", "mrm"),
        isSearchable: !0
      })), h().createElement("p", {
        className: "placeholder-text"
      }, "Leaving it blank will not trigger the automation.")))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/woocommerce-automation/",
      showVideo: !1
    }
  };

function Tw() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Iw(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Iw(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Iw(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Iw(d, "constructor", u), Iw(u, "constructor", c), c.displayName = "GeneratorFunction", Iw(u, a, "GeneratorFunction"), Iw(d), Iw(d, a, "Generator"), Iw(d, r, function () {
    return this;
  }), Iw(d, "toString", function () {
    return "[object Generator]";
  }), (Tw = function () {
    return {
      w: o,
      m
    };
  })();
}

function Iw(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Iw = function (e, t, n, r) {
    function o(t, n) {
      Iw(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Iw(e, t, n, r);
}

function Fw(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Nw(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Fw(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Fw(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function Dw(e, t) {
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
      if ("string" == typeof e) return Ww(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ww(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Ww(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
