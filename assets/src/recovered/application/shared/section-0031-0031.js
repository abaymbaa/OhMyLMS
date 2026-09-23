// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function v_() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return g_(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (g_(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, g_(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, g_(d, "constructor", u), g_(u, "constructor", c), c.displayName = "GeneratorFunction", g_(u, a, "GeneratorFunction"), g_(d), g_(d, a, "Generator"), g_(d, r, function () {
    return this;
  }), g_(d, "toString", function () {
    return "[object Generator]";
  }), (v_ = function () {
    return {
      w: o,
      m
    };
  })();
}

function g_(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  g_ = function (e, t, n, r) {
    function o(t, n) {
      g_(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, g_(e, t, n, r);
}

function h_(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function y_(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        h_(o, r, a, i, l, "next", e);
      }
      function l(e) {
        h_(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function b_(e, t) {
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
      if ("string" == typeof e) return __(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? __(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function __(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var w_,
  E_,
  S_ = {
    key: "wc_abandoned_cart",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-woocommerce",
    title: null === (m_ = window) || void 0 === m_ || null === (m_ = m_.MRM_Vars) || void 0 === m_ || null === (m_ = m_.mint_trans) || void 0 === m_ ? void 0 : m_.AbandonedCart,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Starts the automation when a new user registered in WordPress.", "mrm"),
    subtitle: function (e) {
      var t, n, r, a, o, i;
      return null !== (t = e.settings) && void 0 !== t && null !== (t = t.product_settings) && void 0 !== t && t.option_type && "choose-product" !== (null === (n = e.settings) || void 0 === n || null === (n = n.product_settings) || void 0 === n ? void 0 : n.option_type) || 0 !== (null === (a = e.settings) || void 0 === a || null === (a = a.product_settings) || void 0 === a || null === (a = a.products) || void 0 === a ? void 0 : a.length) ? "choose-category" !== (null === (r = e.settings) || void 0 === r || null === (r = r.product_settings) || void 0 === r ? void 0 : r.option_type) || null !== (o = e.settings) && void 0 !== o && null !== (o = o.product_settings) && void 0 !== o && null !== (o = o.category) && void 0 !== o && o.length && 0 !== (null === (i = e.settings) || void 0 === i || null === (i = i.product_settings) || void 0 === i || null === (i = i.category) || void 0 === i ? void 0 : i.length) ? void 0 : (0, b.__)("Trigger run for all category.", "mrm") : (0, b.__)("Trigger run for all product.", "mrm");
    },
    icon: function () {
      return React.createElement("svg", {
        width: "21",
        height: "21",
        fill: "none",
        viewBox: "0 0 21 21"
      }, React.createElement("path", {
        fill: "#2D3149",
        fillRule: "evenodd",
        d: "M14.335 18.657a.54.54 0 100-1.081.54.54 0 000 1.081zm0 1.622a2.163 2.163 0 100-4.326 2.163 2.163 0 000 4.326zM7.843 18.657a.54.54 0 100-1.081.54.54 0 000 1.081zm0 1.622a2.163 2.163 0 100-4.326 2.163 2.163 0 000 4.326zM8.031 7.811A.81.81 0 018.84 7h5.385a.81.81 0 01.807.811.81.81 0 01-.807.811H8.839a.81.81 0 01-.808-.81z",
        clipRule: "evenodd"
      }), React.createElement("path", {
        fill: "#2D3149",
        fillRule: "evenodd",
        d: "M.136.361A.811.811 0 011.261.136l1.263.842c.404.27.689.683.796 1.156l2.226 9.793c.14.615.687 1.052 1.318 1.052h8.444c.631 0 1.178-.437 1.318-1.052l1.721-7.571a1.352 1.352 0 00-1.318-1.652H8.653a.811.811 0 010-1.622h8.376a2.974 2.974 0 012.9 3.633l-1.72 7.571a2.974 2.974 0 01-2.901 2.315H6.864a2.974 2.974 0 01-2.9-2.315L1.738 2.493a.27.27 0 00-.113-.165L.36 1.486A.811.811 0 01.136.361z",
        clipRule: "evenodd"
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
        _,
        w = b_((0, g.useState)([]), 2),
        E = w[0],
        S = w[1],
        R = b_((0, g.useState)([]), 2),
        x = R[0],
        C = R[1],
        P = b_((0, g.useState)("Please enter 3 or more characters"), 2),
        O = P[0],
        k = P[1],
        j = function () {
          var e = y_(v_().m(function e(t) {
            return v_().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!(t.length >= 3)) {
                    e.n = 1;
                    break;
                  }
                  return k((0, b.__)("loading...", "mrm")), e.n = 1, Tg(t, "wc").then(function (e) {
                    e.success && (0 === e.products.length ? k((0, b.__)("No product found", "mrm")) : (S(e.products), k((0, b.__)("Please enter 3 or more characters", "mrm"))));
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
        A = function () {
          var e = y_(v_().m(function e(t) {
            return v_().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!(t.length >= 3)) {
                    e.n = 1;
                    break;
                  }
                  return k((0, b.__)("loading...", "mrm")), e.n = 1, Fg(t, "wc").then(function (e) {
                    e.success && (0 === e.category.length ? k((0, b.__)("No category found", "mrm")) : (C(e.category), k((0, b.__)("Please enter 3 or more characters", "mrm"))));
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
        M = function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "product_settings", "option_type", e.target.value);
        },
        T = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        I = T.selectedStep,
        F = T.selectedStepIndex,
        N = T.selectedStepCondition,
        D = T.selectedLogicalStepIndex,
        W = (T.errors, null !== (e = I.settings) && void 0 !== e && null !== (e = e.product_settings) && void 0 !== e && e.option_type ? null === (t = I.settings) || void 0 === t || null === (t = t.product_settings) || void 0 === t ? void 0 : t.option_type : "choose-all");
      (null === (n = I.settings) || void 0 === n || null === (n = n.product_settings) || void 0 === n || !n.option_type) && (null === (r = I.settings) || void 0 === r || null === (r = r.product_settings) || void 0 === r ? void 0 : r.products.length) > 0 && (W = "choose-product");
      var z = function (e) {
        return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, O));
      };
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings order-created"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(f_, null), null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.AbandonedCart), h().createElement("div", {
        className: "radio-btn-wrapper"
      }, h().createElement("span", {
        className: "mintmrm-radiobtn"
      }, h().createElement("input", {
        id: "choose-all",
        type: "radio",
        name: "select-product-option",
        value: "choose-all",
        checked: "choose-all" === W,
        onChange: M
      }), h().createElement("label", {
        htmlFor: "choose-all"
      }, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.AllProducts)), h().createElement("span", {
        className: "mintmrm-radiobtn"
      }, h().createElement("input", {
        id: "choose-product",
        type: "radio",
        name: "select-product-option",
        value: "choose-product",
        checked: "choose-product" === W,
        onChange: M
      }), h().createElement("label", {
        htmlFor: "choose-product"
      }, null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.ChooseProducts)), h().createElement("span", {
        className: "mintmrm-radiobtn"
      }, h().createElement("input", {
        id: "choose-category",
        type: "radio",
        name: "select-product-option",
        value: "choose-category",
        checked: "choose-category" === W,
        onChange: M
      }), h().createElement("label", {
        htmlFor: "choose-category"
      }, null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.ChooseProductCategories))), "choose-all" === W && h().createElement("p", {
        className: "sort-description"
      }, null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.ChooseProductCategoriesDescription), "choose-product" === W && h().createElement("p", {
        className: "sort-description"
      }, (0, b.__)("This Automation will be Triggered when the user abandons a cart containing specific products.", "mrm")), "choose-category" === W && h().createElement("p", {
        className: "sort-description"
      }, (0, b.__)("This Automation will be Triggered when the user abandons a cart that contains products from specific categories.", "mrm"))), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, "choose-product" === W && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-list"
      }, null === (u = window) || void 0 === u || null === (u = u.MRM_Vars) || void 0 === u || null === (u = u.mint_trans) || void 0 === u ? void 0 : u.ChooseProduct), h().createElement("div", {
        className: "form-group react-select-control-group"
      }, h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: z
        },
        value: null !== (s = null === (d = I.settings) || void 0 === d || null === (d = d.product_settings) || void 0 === d ? void 0 : d.products) && void 0 !== s ? s : "",
        onChange: function (e) {
          !function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "product_settings", "products", e);
          }(e);
        },
        onInputChange: function (e) {
          j(e);
        },
        options: E,
        isMulti: "true",
        placeholder: (0, b.__)("Search Products...", "mrm"),
        isSearchable: !0
      })), h().createElement("p", {
        className: "placeholder-text"
      }, null === (m = window) || void 0 === m || null === (m = m.MRM_Vars) || void 0 === m || null === (m = m.mint_trans) || void 0 === m ? void 0 : m.ProductSelectHelpText)), "choose-category" === W && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-list"
      }, null === (p = window) || void 0 === p || null === (p = p.MRM_Vars) || void 0 === p || null === (p = p.mint_trans) || void 0 === p ? void 0 : p.ChooseCategoryS), h().createElement("div", {
        className: "form-group react-select-control-group"
      }, h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: z
        },
        value: null !== (f = null === (v = I.settings) || void 0 === v || null === (v = v.product_settings) || void 0 === v ? void 0 : v.category) && void 0 !== f ? f : "",
        onChange: function (e) {
          !function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "product_settings", "category", e);
          }(e);
        },
        onInputChange: function (e) {
          A(e);
        },
        options: x,
        isMulti: "true",
        placeholder: (0, b.__)("Search Category...", "mrm"),
        isSearchable: !0
      })), h().createElement("p", {
        className: "placeholder-text"
      }, null === (_ = window) || void 0 === _ || null === (_ = _.MRM_Vars) || void 0 === _ || null === (_ = _.mint_trans) || void 0 === _ ? void 0 : _.CategorySelectHelpText)))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/woocommerce-automation/",
      showVideo: !1
    }
  };

function R_() {
  return React.createElement("svg", {
    width: "21",
    height: "21",
    fill: "none",
    viewBox: "0 0 21 21"
  }, React.createElement("path", {
    fill: "#2D3149",
    fillRule: "evenodd",
    d: "M14.335 18.657a.54.54 0 100-1.081.54.54 0 000 1.081zm0 1.622a2.163 2.163 0 100-4.326 2.163 2.163 0 000 4.326zM7.845 18.657a.54.54 0 100-1.081.54.54 0 000 1.081zm0 1.622a2.163 2.163 0 100-4.326 2.163 2.163 0 000 4.326zM.14.361A.811.811 0 011.265.136l1.263.842c.404.27.689.683.796 1.156l2.226 9.793c.14.615.687 1.052 1.318 1.052h8.444c.631 0 1.178-.437 1.318-1.052l1.721-7.571a1.352 1.352 0 00-1.318-1.652H8.656a.811.811 0 010-1.622h8.377a2.974 2.974 0 012.9 3.633l-1.72 7.571a2.974 2.974 0 01-2.901 2.315H6.868a2.974 2.974 0 01-2.9-2.315L1.742 2.493a.27.27 0 00-.114-.165L.365 1.486A.811.811 0 01.14.361z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    stroke: "#2D3149",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.7",
    d: "M13.8 5.2l-5.5 5.5M8.3 5.2l5.5 5.5"
  }));
}

var x_,
  C_,
  P_ = {
    key: "wc_abandoned_cart_lost",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-woocommerce",
    title: null === (w_ = window) || void 0 === w_ || null === (w_ = w_.MRM_Vars) || void 0 === w_ || null === (w_ = w_.mint_trans) || void 0 === w_ ? void 0 : w_.CartLost,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: null === (E_ = window) || void 0 === E_ || null === (E_ = E_.MRM_Vars) || void 0 === E_ || null === (E_ = E_.mint_trans) || void 0 === E_ ? void 0 : E_.CartLostDescription,
    subtitle: function (e) {
      var t;
      return null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.TriggerRunWhenCartIsLost;
    },
    icon: function () {
      return React.createElement("svg", {
        width: "21",
        height: "21",
        fill: "none",
        viewBox: "0 0 21 21"
      }, React.createElement("path", {
        fill: "#2D3149",
        fillRule: "evenodd",
        d: "M14.335 18.657a.54.54 0 100-1.081.54.54 0 000 1.081zm0 1.622a2.163 2.163 0 100-4.326 2.163 2.163 0 000 4.326zM7.845 18.657a.54.54 0 100-1.081.54.54 0 000 1.081zm0 1.622a2.163 2.163 0 100-4.326 2.163 2.163 0 000 4.326zM.14.361A.811.811 0 011.265.136l1.263.842c.404.27.689.683.796 1.156l2.226 9.793c.14.615.687 1.052 1.318 1.052h8.444c.631 0 1.178-.437 1.318-1.052l1.721-7.571a1.352 1.352 0 00-1.318-1.652H8.656a.811.811 0 010-1.622h8.377a2.974 2.974 0 012.9 3.633l-1.72 7.571a2.974 2.974 0 01-2.901 2.315H6.868a2.974 2.974 0 01-2.9-2.315L1.742 2.493a.27.27 0 00-.114-.165L.365 1.486A.811.811 0 01.14.361z",
        clipRule: "evenodd"
      }), React.createElement("path", {
        stroke: "#2D3149",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.7",
        d: "M13.8 5.2l-5.5 5.5M8.3 5.2l5.5 5.5"
      }));
    },
    edit: function () {
      var e, t;
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings abandoned-cart-lost"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(R_, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.AbandonedCartLost), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.CartLostDescription))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/woocommerce-automation/",
      showVideo: !1
    }
  };

function O_() {
  return React.createElement("svg", {
    width: "21",
    height: "21",
    fill: "none",
    viewBox: "0 0 21 21"
  }, React.createElement("path", {
    fill: "#2D3149",
    fillRule: "evenodd",
    d: "M14.331 18.657a.54.54 0 100-1.081.54.54 0 000 1.081zm0 1.622a2.163 2.163 0 100-4.326 2.163 2.163 0 000 4.326zM7.84 18.657a.54.54 0 100-1.082.54.54 0 000 1.082zm0 1.622a2.163 2.163 0 100-4.326 2.163 2.163 0 000 4.326zM.136.361A.811.811 0 011.261.136l1.263.842c.404.27.689.683.796 1.156l2.226 9.793c.14.615.687 1.052 1.318 1.052h8.444c.631 0 1.178-.437 1.318-1.052l1.721-7.571a1.352 1.352 0 00-1.318-1.652H8.653a.811.811 0 010-1.622h8.376a2.974 2.974 0 012.9 3.633l-1.72 7.571a2.974 2.974 0 01-2.901 2.315H6.864a2.974 2.974 0 01-2.9-2.315L1.738 2.493a.27.27 0 00-.113-.165L.36 1.486A.811.811 0 01.136.361z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    stroke: "#2D3149",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.7",
    d: "M15.277 5.016l-5 5-2.273-2.273"
  }));
}

var k_,
  j_ = {
    key: "wc_abandoned_cart_recovered",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-woocommerce",
    title: (null === (x_ = window) || void 0 === x_ || null === (x_ = x_.MRM_Vars) || void 0 === x_ || null === (x_ = x_.mint_trans) || void 0 === x_ ? void 0 : x_.CartRecovered) || "Cart Recovered",
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: null === (C_ = window) || void 0 === C_ || null === (C_ = C_.MRM_Vars) || void 0 === C_ || null === (C_ = C_.mint_trans) || void 0 === C_ ? void 0 : C_.AbandonedCartRecoveredDescription,
    subtitle: function (e) {
      return (0, b.__)("", "mrm");
    },
    icon: function () {
      return React.createElement("svg", {
        width: "21",
        height: "21",
        fill: "none",
        viewBox: "0 0 21 21"
      }, React.createElement("path", {
        fill: "#2D3149",
        fillRule: "evenodd",
        d: "M14.331 18.657a.54.54 0 100-1.081.54.54 0 000 1.081zm0 1.622a2.163 2.163 0 100-4.326 2.163 2.163 0 000 4.326zM7.84 18.657a.54.54 0 100-1.082.54.54 0 000 1.082zm0 1.622a2.163 2.163 0 100-4.326 2.163 2.163 0 000 4.326zM.136.361A.811.811 0 011.261.136l1.263.842c.404.27.689.683.796 1.156l2.226 9.793c.14.615.687 1.052 1.318 1.052h8.444c.631 0 1.178-.437 1.318-1.052l1.721-7.571a1.352 1.352 0 00-1.318-1.652H8.653a.811.811 0 010-1.622h8.376a2.974 2.974 0 012.9 3.633l-1.72 7.571a2.974 2.974 0 01-2.901 2.315H6.864a2.974 2.974 0 01-2.9-2.315L1.738 2.493a.27.27 0 00-.113-.165L.36 1.486A.811.811 0 01.136.361z",
        clipRule: "evenodd"
      }), React.createElement("path", {
        stroke: "#2D3149",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.7",
        d: "M15.277 5.016l-5 5-2.273-2.273"
      }));
    },
    edit: function () {
      var e, t;
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings abandoned-cart-recovered"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(O_, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.AbandonedCartRecovered), h().createElement("p", {
        className: "sort-description"
      }, " ", null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.AbandonedCartRecoveredDescription))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/woocommerce-automation/",
      showVideo: !1
    }
  };

function A_() {
  return React.createElement("svg", {
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20"
  }, React.createElement("g", {
    clipPath: "url(#clip0_6121_2220)"
  }, React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".6",
    d: "M18.197 12.722c-.583-.34-1.29-.308-1.94.087l-2.414 1.466a1.502 1.502 0 00-.425-.83c-.638-.625-1.77-.598-2.68-.576-.18.005-.35.009-.5.007l-3.3-1.429c-.373-.161-1.113-.165-1.97-.153l-.227.003a1.275 1.275 0 00-1.112-.654H2.141a1.276 1.276 0 00-1.274 1.275v6.023a1.276 1.276 0 001.274 1.275H3.63a1.272 1.272 0 001.02-.51c.172-.003.346-.009.517-.014.729-.021 1.483-.044 2.152.097l4.249.892a.312.312 0 00.222-.037l6.306-3.714c.639-.326 1.016-.883 1.035-1.531a1.9 1.9 0 00-.933-1.677zM3.63 18.59H2.141a.65.65 0 01-.649-.65v-6.023a.65.65 0 01.65-.65h1.487a.65.65 0 01.65.65v6.023a.65.65 0 01-.65.65zm14.176-3.215a.39.39 0 00-.018.01l-6.21 3.658-4.13-.867c-.742-.155-1.534-.132-2.3-.11l-.25.008c.004-.045.006-.09.006-.134v-6.02l.075-.002c.5-.007 1.431-.02 1.711.102l3.357 1.454a.311.311 0 00.118.025c.18.004.379 0 .589-.006.792-.019 1.778-.043 2.228.398.183.18.271.432.27.775 0 .182-.061.262-.107.307-.096.093-.319.201-.843.188h-2.027a.313.313 0 100 .625h2.115c.548 0 .938-.12 1.191-.365a.944.944 0 00.246-.405l2.755-1.674c.455-.277.917-.305 1.302-.081a1.285 1.285 0 01.623 1.118c-.013.42-.262.775-.701.996zm-9.776-5.06h6.992a1.16 1.16 0 001.16-1.16V1.473a1.16 1.16 0 00-1.16-1.16H8.029a1.16 1.16 0 00-1.16 1.16v7.685a1.16 1.16 0 001.16 1.16zm6.992-.625H8.029a.535.535 0 01-.535-.534v-5.74H9.98V4.76a.312.312 0 00.5.25l1.045-.78 1.044.78a.313.313 0 00.5-.25V3.417h2.486v5.74a.535.535 0 01-.534.534zM10.605.937h1.84v3.2l-.733-.547a.313.313 0 00-.374 0l-.733.547v-3.2zm4.95.535v1.32H13.07V.938h1.952a.535.535 0 01.534.534zM8.03.938H9.98v1.854H7.494v-1.32A.535.535 0 018.03.938z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_6121_2220"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0z"
  }))));
}

var M_ = {
  key: "wc_all_order_created",
  group: "triggers",
  type: "trigger",
  package: "pro",
  category: "mint-woocommerce",
  title: null === (k_ = window) || void 0 === k_ || null === (k_ = k_.MRM_Vars) || void 0 === k_ || null === (k_ = k_.mint_trans) || void 0 === k_ ? void 0 : k_.NewOrderPlaced,
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("Give a special welcome to your first-time customers through this email automation.", "mrm"),
  subtitle: function (e) {
    return (0, b.__)("", "mrm");
  },
  icon: function () {
    return React.createElement("svg", {
      className: "hover-stroke-fill",
      width: "20",
      height: "20",
      fill: "none",
      viewBox: "0 0 20 20"
    }, React.createElement("g", {
      clipPath: "url(#clip0_6121_2220)"
    }, React.createElement("path", {
      fill: "#2D3149",
      stroke: "#2D3149",
      strokeWidth: ".6",
      d: "M18.197 12.722c-.583-.34-1.29-.308-1.94.087l-2.414 1.466a1.502 1.502 0 00-.425-.83c-.638-.625-1.77-.598-2.68-.576-.18.005-.35.009-.5.007l-3.3-1.429c-.373-.161-1.113-.165-1.97-.153l-.227.003a1.275 1.275 0 00-1.112-.654H2.141a1.276 1.276 0 00-1.274 1.275v6.023a1.276 1.276 0 001.274 1.275H3.63a1.272 1.272 0 001.02-.51c.172-.003.346-.009.517-.014.729-.021 1.483-.044 2.152.097l4.249.892a.312.312 0 00.222-.037l6.306-3.714c.639-.326 1.016-.883 1.035-1.531a1.9 1.9 0 00-.933-1.677zM3.63 18.59H2.141a.65.65 0 01-.649-.65v-6.023a.65.65 0 01.65-.65h1.487a.65.65 0 01.65.65v6.023a.65.65 0 01-.65.65zm14.176-3.215a.39.39 0 00-.018.01l-6.21 3.658-4.13-.867c-.742-.155-1.534-.132-2.3-.11l-.25.008c.004-.045.006-.09.006-.134v-6.02l.075-.002c.5-.007 1.431-.02 1.711.102l3.357 1.454a.311.311 0 00.118.025c.18.004.379 0 .589-.006.792-.019 1.778-.043 2.228.398.183.18.271.432.27.775 0 .182-.061.262-.107.307-.096.093-.319.201-.843.188h-2.027a.313.313 0 100 .625h2.115c.548 0 .938-.12 1.191-.365a.944.944 0 00.246-.405l2.755-1.674c.455-.277.917-.305 1.302-.081a1.285 1.285 0 01.623 1.118c-.013.42-.262.775-.701.996zm-9.776-5.06h6.992a1.16 1.16 0 001.16-1.16V1.473a1.16 1.16 0 00-1.16-1.16H8.029a1.16 1.16 0 00-1.16 1.16v7.685a1.16 1.16 0 001.16 1.16zm6.992-.625H8.029a.535.535 0 01-.535-.534v-5.74H9.98V4.76a.312.312 0 00.5.25l1.045-.78 1.044.78a.313.313 0 00.5-.25V3.417h2.486v5.74a.535.535 0 01-.534.534zM10.605.937h1.84v3.2l-.733-.547a.313.313 0 00-.374 0l-.733.547v-3.2zm4.95.535v1.32H13.07V.938h1.952a.535.535 0 01.534.534zM8.03.938H9.98v1.854H7.494v-1.32A.535.535 0 018.03.938z"
    })), React.createElement("defs", null, React.createElement("clipPath", {
      id: "clip0_6121_2220"
    }, React.createElement("path", {
      fill: "#fff",
      d: "M0 0h20v20H0z"
    }))));
  },
  edit: function () {
    var e, t;
    return h().createElement(q.PanelBody, {
      opened: !0
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings wc-new-customer"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(A_, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.NewOrderPlaced), h().createElement("p", {
      className: "sort-description"
    }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.NewOrderPlacedDescription)), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    })));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/woocommerce-automation/",
    showVideo: !1
  }
};

function T_() {
  return React.createElement("svg", {
    className: "hover-stroke",
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    stroke: "#2D3149",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.3",
    mask: "url(#a)"
  }, React.createElement("path", {
    d: "M17.031 7.656a7.031 7.031 0 11-14.062 0c0-3.883 3.148-7.07 7.031-7.07 3.883 0 7.031 3.187 7.031 7.07z"
  }), React.createElement("path", {
    d: "M15.366 12.2l2.342 5.31-3.02-1.025-1.263 2.93-2.136-4.845m-2.581 0l-2.135 4.844-1.263-2.93-3.02 1.026 2.342-5.31M10 4.141l1.033 2.094 2.31.335-1.671 1.63.394 2.301L10 9.415 7.933 10.5l.395-2.3-1.672-1.63 2.31-.335L10 4.14z"
  })));
}
