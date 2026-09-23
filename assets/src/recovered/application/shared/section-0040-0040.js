// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var SE,
  RE = {
    key: "wcw_user_adds_product",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-woocommerce-wishlist",
    title: "User Adds Product To Wishlist",
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: null === (fE = window) || void 0 === fE || null === (fE = fE.MRM_Vars) || void 0 === fE || null === (fE = fE.mint_trans) || void 0 === fE ? void 0 : fE.SubscriptionCreatedDescription,
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
        stroke: "#2D3149",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.7",
        d: "M7.719 15.531H4.906a3.125 3.125 0 01-3.125-3.125v-7.5c0-1.726 1.4-3.125 3.125-3.125h7.5c1.726 0 3.125 1.4 3.125 3.125V7.72m0 6.249v3.125m-1.562-1.563h3.125m-1.563 4.688a4.688 4.688 0 100-9.375 4.688 4.688 0 000 9.375z"
      }), React.createElement("path", {
        stroke: "#2D3149",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.7",
        d: "M11 4.906V6.47c0 .863-.7 1.562-1.563 1.562H7.875c-.863 0-1.563-.7-1.563-1.562V4.906"
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
        p = wE((0, g.useState)([]), 2),
        f = p[0],
        v = p[1],
        _ = wE((0, g.useState)([]), 2),
        w = _[0],
        E = _[1],
        S = wE((0, g.useState)("Please enter 3 or more characters"), 2),
        R = S[0],
        x = S[1],
        C = function () {
          var e = _E(hE().m(function e(t) {
            return hE().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!(t.length >= 3)) {
                    e.n = 1;
                    break;
                  }
                  return x((0, b.__)("loading...", "mrm")), e.n = 1, Tg(t, "wc").then(function (e) {
                    e.success && (0 === e.products.length ? x((0, b.__)("No product found", "mrm")) : (v(e.products), x((0, b.__)("Please enter 3 or more characters", "mrm"))));
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
        P = function () {
          var e = _E(hE().m(function e(t) {
            return hE().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!(t.length >= 3)) {
                    e.n = 1;
                    break;
                  }
                  return x((0, b.__)("loading...", "mrm")), e.n = 1, Fg(t, "wc").then(function (e) {
                    e.success && (0 === e.category.length ? x((0, b.__)("No category found", "mrm")) : (E(e.category), x((0, b.__)("Please enter 3 or more characters", "mrm"))));
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
        O = function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(A, M, T, "product_settings", "option_type", e.target.value);
        },
        k = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        j = k.selectedStep,
        A = k.selectedStepIndex,
        M = k.selectedStepCondition,
        T = k.selectedLogicalStepIndex,
        I = (k.errors, null !== (e = j.settings) && void 0 !== e && null !== (e = e.product_settings) && void 0 !== e && e.option_type ? null === (t = j.settings) || void 0 === t || null === (t = t.product_settings) || void 0 === t ? void 0 : t.option_type : "choose-all");
      (null === (n = j.settings) || void 0 === n || null === (n = n.product_settings) || void 0 === n || !n.option_type) && (null === (r = j.settings) || void 0 === r || null === (r = r.product_settings) || void 0 === r ? void 0 : r.products.length) > 0 && (I = "choose-product");
      var F = function (e) {
        return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, R));
      };
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings subscription-created"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(z_, null), "User Adds Product To Wishlist"), h().createElement("p", {
        className: "sort-description"
      }, "This automation runs after a user adds product to wishlist.")), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, "Wishlist Contains", h().createElement("span", {
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
        checked: "choose-all" === I,
        onChange: O
      }), h().createElement("label", {
        htmlFor: "choose-all"
      }, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.AnyProduct)), h().createElement("span", {
        className: "mintmrm-radiobtn"
      }, h().createElement("input", {
        id: "choose-product",
        type: "radio",
        name: "select-product-option",
        value: "choose-product",
        checked: "choose-product" === I,
        onChange: O
      }), h().createElement("label", {
        htmlFor: "choose-product"
      }, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.SpecificProducts)), h().createElement("span", {
        className: "mintmrm-radiobtn"
      }, h().createElement("input", {
        id: "choose-category",
        type: "radio",
        name: "select-product-option",
        value: "choose-category",
        checked: "choose-category" === I,
        onChange: O
      }), h().createElement("label", {
        htmlFor: "choose-category"
      }, null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.SpecificCategories)))), "choose-product" === I && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-list"
      }, null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.ChooseProduct), h().createElement("div", {
        className: "form-group react-select-control-group"
      }, h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: F
        },
        value: null !== (c = null === (u = j.settings) || void 0 === u || null === (u = u.product_settings) || void 0 === u ? void 0 : u.products) && void 0 !== c ? c : "",
        onChange: function (e) {
          !function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(A, M, T, "product_settings", "products", e);
          }(e);
        },
        onInputChange: function (e) {
          C(e);
        },
        options: f,
        isMulti: "true",
        placeholder: (0, b.__)("Search products...", "mrm"),
        isSearchable: !0
      })), h().createElement("p", {
        className: "placeholder-text"
      }, "Leaving it blank will not trigger the automation.")), "choose-category" === I && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-list"
      }, null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s || null === (s = s.mint_trans) || void 0 === s ? void 0 : s.ChooseCategoryS), h().createElement("div", {
        className: "form-group react-select-control-group"
      }, h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: F
        },
        value: null !== (d = null === (m = j.settings) || void 0 === m || null === (m = m.product_settings) || void 0 === m ? void 0 : m.category) && void 0 !== d ? d : "",
        onChange: function (e) {
          !function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(A, M, T, "product_settings", "category", e);
          }(e);
        },
        onInputChange: function (e) {
          P(e);
        },
        options: w,
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

function xE() {
  return React.createElement("svg", {
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M8.225 18.74c.001.248-.074.49-.214.697a1.27 1.27 0 01-.575.462 1.316 1.316 0 01-1.4-.266 1.223 1.223 0 01-.285-1.363c.096-.23.26-.425.47-.564.21-.139.458-.213.712-.215h.01c.34 0 .667.132.907.366.24.235.375.552.375.884zm6.923-1.249h-.01a1.304 1.304 0 00-.908.37 1.24 1.24 0 00-.374.887c0 .332.137.65.378.886a1.31 1.31 0 001.819 0 1.235 1.235 0 00.003-1.773 1.304 1.304 0 00-.908-.37zM19.953 6.24l-1.04 6.163a3.23 3.23 0 01-.353 1.294c-.207.403-.498.76-.852 1.05-.355.29-.767.505-1.21.634a3.47 3.47 0 01-1.37.112H6.65a2.876 2.876 0 01-1.844-.675 2.742 2.742 0 01-.947-1.685L2.308 2.572a1.247 1.247 0 00-.43-.765 1.308 1.308 0 00-.836-.308H.769a.78.78 0 01-.544-.22.74.74 0 010-1.06A.78.78 0 01.77 0h.273a2.876 2.876 0 011.845.675c.512.433.847 1.031.946 1.685l.094.639H17.18c.413 0 .821.088 1.196.258.374.171.705.42.97.729s.456.671.562 1.06c.105.39.12.797.046 1.193zm-1.79-1.291a1.275 1.275 0 00-.44-.332 1.308 1.308 0 00-.544-.118H4.147l1.23 8.422c.045.298.199.57.432.767.234.197.532.306.841.306h8.478c1.64 0 2.037-.6 2.27-1.846l1.04-6.164a1.221 1.221 0 00-.275-1.035zm-5.655 2.434l-2.19 2.135-.82-.8a.78.78 0 00-1.079.01.74.74 0 00-.01 1.05l1.367 1.333a.772.772 0 00.544.22.787.787 0 00.544-.22l2.733-2.664a.74.74 0 000-1.06.78.78 0 00-1.088 0v-.004z"
  }));
}

function CE() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return PE(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (PE(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, PE(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, PE(d, "constructor", u), PE(u, "constructor", c), c.displayName = "GeneratorFunction", PE(u, a, "GeneratorFunction"), PE(d), PE(d, a, "Generator"), PE(d, r, function () {
    return this;
  }), PE(d, "toString", function () {
    return "[object Generator]";
  }), (CE = function () {
    return {
      w: o,
      m
    };
  })();
}

function PE(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  PE = function (e, t, n, r) {
    function o(t, n) {
      PE(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, PE(e, t, n, r);
}

function OE(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function kE(e, t) {
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
      if ("string" == typeof e) return jE(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jE(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function jE(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var AE,
  ME = {
    key: "edd_complete_purchase",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "edd",
    title: null === (SE = window) || void 0 === SE || null === (SE = SE.MRM_Vars) || void 0 === SE || null === (SE = SE.mint_trans) || void 0 === SE ? void 0 : SE.CompletePurchase,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("", "mrm"),
    subtitle: function (e) {
      var t, n;
      if (0 === (null === (t = e.settings) || void 0 === t || null === (t = t.product_settings) || void 0 === t || null === (t = t.products) || void 0 === t ? void 0 : t.length)) return null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet;
    },
    icon: function () {
      return React.createElement("svg", {
        width: "20",
        height: "20",
        fill: "none",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        d: "M8.225 18.74c.001.248-.074.49-.214.697a1.27 1.27 0 01-.575.462 1.316 1.316 0 01-1.4-.266 1.223 1.223 0 01-.285-1.363c.096-.23.26-.425.47-.564.21-.139.458-.213.712-.215h.01c.34 0 .667.132.907.366.24.235.375.552.375.884zm6.923-1.249h-.01a1.304 1.304 0 00-.908.37 1.24 1.24 0 00-.374.887c0 .332.137.65.378.886a1.31 1.31 0 001.819 0 1.235 1.235 0 00.003-1.773 1.304 1.304 0 00-.908-.37zM19.953 6.24l-1.04 6.163a3.23 3.23 0 01-.353 1.294c-.207.403-.498.76-.852 1.05-.355.29-.767.505-1.21.634a3.47 3.47 0 01-1.37.112H6.65a2.876 2.876 0 01-1.844-.675 2.742 2.742 0 01-.947-1.685L2.308 2.572a1.247 1.247 0 00-.43-.765 1.308 1.308 0 00-.836-.308H.769a.78.78 0 01-.544-.22.74.74 0 010-1.06A.78.78 0 01.77 0h.273a2.876 2.876 0 011.845.675c.512.433.847 1.031.946 1.685l.094.639H17.18c.413 0 .821.088 1.196.258.374.171.705.42.97.729s.456.671.562 1.06c.105.39.12.797.046 1.193zm-1.79-1.291a1.275 1.275 0 00-.44-.332 1.308 1.308 0 00-.544-.118H4.147l1.23 8.422c.045.298.199.57.432.767.234.197.532.306.841.306h8.478c1.64 0 2.037-.6 2.27-1.846l1.04-6.164a1.221 1.221 0 00-.275-1.035zm-5.655 2.434l-2.19 2.135-.82-.8a.78.78 0 00-1.079.01.74.74 0 00-.01 1.05l1.367 1.333a.772.772 0 00.544.22.787.787 0 00.544-.22l2.733-2.664a.74.74 0 000-1.06.78.78 0 00-1.088 0v-.004z"
      }));
    },
    edit: function () {
      var e,
        t,
        n,
        r,
        a = kE((0, g.useState)([]), 2),
        o = a[0],
        i = a[1],
        l = kE((0, g.useState)("Please enter 3 or more characters"), 2),
        c = l[0],
        u = l[1],
        s = function () {
          var e,
            t = (e = CE().m(function e(t) {
              return CE().w(function (e) {
                for (;;) switch (e.n) {
                  case 0:
                    if (!(t.length >= 3)) {
                      e.n = 1;
                      break;
                    }
                    return u("loading..."), e.n = 1, Tg(t, "edd").then(function (e) {
                      e.success && (0 === e.products.length ? u("No product found") : (i(e.products), u("Please enter 3 or more characters")));
                    });
                  case 1:
                    return e.a(2);
                }
              }, e);
            }), function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                  OE(o, r, a, i, l, "next", e);
                }
                function l(e) {
                  OE(o, r, a, i, l, "throw", e);
                }
                i(void 0);
              });
            });
          return function (e) {
            return t.apply(this, arguments);
          };
        }(),
        d = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        m = d.selectedStep,
        p = d.selectedStepIndex,
        f = d.selectedStepCondition,
        v = d.selectedLogicalStepIndex;
      return d.errors, h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings mint-form-submit"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(xE, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.EDDCompletePurchase)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-list"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.ChooseProduct), h().createElement("div", {
        className: "form-group react-select-control-group"
      }, h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: function (e) {
            return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, c));
          }
        },
        value: null !== (n = null === (r = m.settings) || void 0 === r || null === (r = r.product_settings) || void 0 === r ? void 0 : r.products) && void 0 !== n ? n : "",
        onChange: function (e) {
          !function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(p, f, v, "product_settings", "products", e);
          }(e);
        },
        onInputChange: function (e) {
          s(e);
        },
        options: o,
        isMulti: "true",
        placeholder: (0, b.__)("Search Products...", "mrm")
      }))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function TE() {
  return React.createElement("svg", {
    width: "24",
    height: "20",
    fill: "none",
    viewBox: "0 0 24 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M22.714 12.857a.715.715 0 00-.715.714v5H2V10h7.857a.715.715 0 000-1.429H2V5.714h7.857a.715.715 0 000-1.429H2A1.43 1.43 0 00.57 5.714v12.857C.57 19.36 1.21 20 2 20h20a1.43 1.43 0 001.429-1.429v-5a.715.715 0 00-.714-.714z"
  }), React.createElement("path", {
    fill: "#2D3149",
    d: "M6.993 12.857H4.136a.715.715 0 000 1.429h2.857a.715.715 0 000-1.429zM22.996 2.2l-5-2.143a.73.73 0 00-.564 0l-5 2.143a.716.716 0 00-.432.657v2.857c0 3.93 1.453 6.227 5.359 8.477a.716.716 0 00.711 0c3.906-2.244 5.359-4.541 5.359-8.477V2.857a.715.715 0 00-.433-.657zM22 5.714c0 3.299-1.091 5.114-4.286 7.029-3.194-1.919-4.285-3.735-4.285-7.029V3.328l4.285-1.837L22 3.328v2.386z"
  }), React.createElement("path", {
    fill: "#2D3149",
    d: "M20.298 4.441a.719.719 0 00-1.004.112L17.048 7.36l-.888-1.328a.716.716 0 00-.99-.199.715.715 0 00-.199.99L16.4 8.967a.72.72 0 00.564.319h.03a.714.714 0 00.558-.269l2.858-3.572a.715.715 0 00-.112-1.004z"
  }));
}

var IE = {
  key: "edd_update_payment_status",
  group: "triggers",
  type: "trigger",
  package: "pro",
  category: "edd",
  title: null === (AE = window) || void 0 === AE || null === (AE = AE.MRM_Vars) || void 0 === AE || null === (AE = AE.mint_trans) || void 0 === AE ? void 0 : AE.UpdatePaymentStatus,
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("Starts the automation when a new user registered in WordPress.", "mrm"),
  subtitle: function (e) {
    var t, n;
    if ("" === (null === (t = e.settings) || void 0 === t || null === (t = t.status_settings) || void 0 === t ? void 0 : t.status)) return null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet;
  },
  icon: function () {
    return React.createElement("svg", {
      width: "24",
      height: "20",
      fill: "none",
      viewBox: "0 0 24 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "#2D3149",
      d: "M22.714 12.857a.715.715 0 00-.715.714v5H2V10h7.857a.715.715 0 000-1.429H2V5.714h7.857a.715.715 0 000-1.429H2A1.43 1.43 0 00.57 5.714v12.857C.57 19.36 1.21 20 2 20h20a1.43 1.43 0 001.429-1.429v-5a.715.715 0 00-.714-.714z"
    }), React.createElement("path", {
      fill: "#2D3149",
      d: "M6.993 12.857H4.136a.715.715 0 000 1.429h2.857a.715.715 0 000-1.429zM22.996 2.2l-5-2.143a.73.73 0 00-.564 0l-5 2.143a.716.716 0 00-.432.657v2.857c0 3.93 1.453 6.227 5.359 8.477a.716.716 0 00.711 0c3.906-2.244 5.359-4.541 5.359-8.477V2.857a.715.715 0 00-.433-.657zM22 5.714c0 3.299-1.091 5.114-4.286 7.029-3.194-1.919-4.285-3.735-4.285-7.029V3.328l4.285-1.837L22 3.328v2.386z"
    }), React.createElement("path", {
      fill: "#2D3149",
      d: "M20.298 4.441a.719.719 0 00-1.004.112L17.048 7.36l-.888-1.328a.716.716 0 00-.99-.199.715.715 0 00-.199.99L16.4 8.967a.72.72 0 00.564.319h.03a.714.714 0 00.558-.269l2.858-3.572a.715.715 0 00-.112-1.004z"
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
      l = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
        };
      }, []),
      c = l.selectedStep,
      u = l.selectedStepIndex,
      s = l.selectedStepCondition,
      d = l.selectedLogicalStepIndex;
    return l.errors, h().createElement(q.PanelBody, {
      opened: !0
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings order-status-changed"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(TE, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.EDDStatusChanged), h().createElement("p", {
      className: "sort-description"
    }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.EddStatusChangedDescription)), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: "",
      className: "inline-with-link"
    }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.UpdatePaymentStatus), h().createElement(q.SelectControl, {
      options: [{
        value: "",
        label: null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectStatus
      }, {
        value: "failed",
        label: (0, b.__)("Failed", "mrm")
      }, {
        value: "processing",
        label: (0, b.__)("Processing", "mrm")
      }, {
        value: "pending",
        label: null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.Pending
      }, {
        value: "refunded",
        label: (0, b.__)("Refunded", "mrm")
      }, {
        value: "complete",
        label: (0, b.__)("Completed", "mrm")
      }, {
        value: "abandoned",
        label: (0, b.__)("Abandoned", "mrm")
      }, {
        value: "revoked",
        label: (0, b.__)("Revoked", "mrm")
      }, {
        value: "partially_refunded",
        label: (0, b.__)("Partially Refunded", "mrm")
      }, {
        value: "on_hold",
        label: (0, b.__)("On Hold", "mrm")
      }],
      value: null !== (o = null === (i = c.settings) || void 0 === i || null === (i = i.status_settings) || void 0 === i ? void 0 : i.status) && void 0 !== o ? o : "",
      onChange: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(u, s, d, "status_settings", "status", e);
      }
    })))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};
