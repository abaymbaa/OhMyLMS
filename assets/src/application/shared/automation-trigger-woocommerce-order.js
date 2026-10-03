// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function Q_() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Z_(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Z_(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Z_(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Z_(d, "constructor", u), Z_(u, "constructor", c), c.displayName = "GeneratorFunction", Z_(u, a, "GeneratorFunction"), Z_(d), Z_(d, a, "Generator"), Z_(d, r, function () {
    return this;
  }), Z_(d, "toString", function () {
    return "[object Generator]";
  }), (Q_ = function () {
    return {
      w: o,
      m
    };
  })();
}

function Z_(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Z_ = function (e, t, n, r) {
    function o(t, n) {
      Z_(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Z_(e, t, n, r);
}

function $_(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function K_(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        $_(o, r, a, i, l, "next", e);
      }
      function l(e) {
        $_(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function J_(e, t) {
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
      if ("string" == typeof e) return X_(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? X_(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function X_(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var ew,
  tw = {
    key: "wc_order_created",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-woocommerce",
    title: null === (q_ = window) || void 0 === q_ || null === (q_ = q_.MRM_Vars) || void 0 === q_ || null === (q_ = q_.mint_trans) || void 0 === q_ ? void 0 : q_.ProductOrdered,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Starts the automation when a new user registered in WordPress.", "mrm"),
    subtitle: function (e) {
      var t, n, r, a, o, i, l, c;
      return null !== (t = e.settings) && void 0 !== t && null !== (t = t.product_settings) && void 0 !== t && t.option_type && "choose-product" !== (null === (n = e.settings) || void 0 === n || null === (n = n.product_settings) || void 0 === n ? void 0 : n.option_type) || 0 !== (null === (a = e.settings) || void 0 === a || null === (a = a.product_settings) || void 0 === a || null === (a = a.products) || void 0 === a ? void 0 : a.length) ? "choose-category" !== (null === (r = e.settings) || void 0 === r || null === (r = r.product_settings) || void 0 === r ? void 0 : r.option_type) || null !== (i = e.settings) && void 0 !== i && null !== (i = i.product_settings) && void 0 !== i && null !== (i = i.category) && void 0 !== i && i.length && 0 !== (null === (l = e.settings) || void 0 === l || null === (l = l.product_settings) || void 0 === l || null === (l = l.category) || void 0 === l ? void 0 : l.length) || null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.NotSetUpYet : null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.NotSetUpYet;
    },
    icon: function () {
      return React.createElement("svg", {
        width: "21",
        height: "21",
        fill: "none",
        viewBox: "0 0 21 21",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("g", {
        fill: "#2D3149",
        clipPath: "url(#clip0_5349_2134)"
      }, React.createElement("path", {
        d: "M9.763 13.396a.665.665 0 001.324-.136l-.307-2.969a.665.665 0 10-1.323.137l.306 2.968zm4.162.594a.665.665 0 00.73-.593l.307-2.969a.665.665 0 10-1.324-.137l-.306 2.969a.665.665 0 00.593.73zM8.77 16.881c-1.135 0-2.06.924-2.06 2.06 0 1.135.925 2.059 2.06 2.059s2.06-.924 2.06-2.06a2.063 2.063 0 00-2.06-2.059zm0 2.788a.73.73 0 010-1.457.73.73 0 010 1.457zm6.875-2.788c-1.135 0-2.06.924-2.06 2.06 0 1.135.925 2.059 2.06 2.059 1.136 0 2.06-.924 2.06-2.06a2.062 2.062 0 00-2.06-2.059zm0 2.788a.73.73 0 010-1.457.73.73 0 010 1.457z"
      }), React.createElement("path", {
        d: "M19.62 7.479a.665.665 0 00-.526-.258H5.834l-.556-2.142a.665.665 0 00-.644-.497H1.907a.665.665 0 000 1.33H4.12l.551 2.122a.656.656 0 00.01.04l2.054 7.895c.076.293.34.498.644.498h9.656a.665.665 0 00.644-.498l2.059-7.916a.665.665 0 00-.118-.574zm-3.099 7.658H7.893L6.18 8.55h12.054l-1.713 6.586zM9.454 3.483h3.896L12.333 4.5a.665.665 0 10.94.941l2.153-2.152a.665.665 0 000-.94L13.272.194a.665.665 0 00-.94.94l1.017 1.018H9.454a.665.665 0 000 1.33z"
      })), React.createElement("defs", null, React.createElement("clipPath", {
        id: "clip0_5349_2134"
      }, React.createElement("path", {
        fill: "#fff",
        d: "M0 0h21v21H0z"
      }))));
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
        w = J_((0, g.useState)([]), 2),
        E = w[0],
        S = w[1],
        R = J_((0, g.useState)([]), 2),
        x = R[0],
        C = R[1],
        P = J_((0, g.useState)("Please enter 3 or more characters"), 2),
        O = P[0],
        k = P[1],
        j = function () {
          var e = K_(Q_().m(function e(t) {
            return Q_().w(function (e) {
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
          var e = K_(Q_().m(function e(t) {
            return Q_().w(function (e) {
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
      }, h().createElement("h4", null, h().createElement(z_, null), null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.ProductOrdered), h().createElement("div", {
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
      }, null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.ProductOrderedDescription), "choose-product" === W && h().createElement("p", {
        className: "sort-description"
      }, (0, b.__)("This Automation will be Triggered when the customer orders specific products.", "mrm")), "choose-category" === W && h().createElement("p", {
        className: "sort-description"
      }, (0, b.__)("This Automation will be Triggered when the customer orders from specific product categories.", "mrm"))), h().createElement("div", {
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

function nw() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    stroke: "#fff",
    strokeWidth: ".2",
    d: "M18.45 17.832c1.406 0 2.55-1.122 2.55-2.5V3.5C21 2.121 19.856 1 18.45 1H3.55C2.144 1 1 2.121 1 3.5v11.832c0 1.378 1.144 2.5 2.55 2.5h4.083v1.501H6.72c-.47 0-.85.373-.85.834 0 .46.38.833.85.833h8.56c.47 0 .85-.373.85-.833 0-.46-.38-.834-.85-.834h-.912v-1.501h4.082zM2.7 3.5c0-.46.381-.833.85-.833h14.9c.469 0 .85.374.85.833v9.088H2.7V3.5zm0 11.832v-1.077h16.6v1.077c0 .46-.381.833-.85.833H3.55a.843.843 0 01-.85-.833zm9.968 4.001H9.333v-1.501h3.335v1.501z"
  }), React.createElement("path", {
    fill: "#2D3149",
    stroke: "#fff",
    strokeWidth: ".2",
    d: "M7.514 7.273c-.47 0-.85.373-.85.834v1.982c0 .46.38.833.85.833s.85-.373.85-.833V8.107c0-.46-.38-.834-.85-.834zm3.484-1.406c-.47 0-.85.373-.85.833v3.389c0 .46.38.833.85.833s.85-.373.85-.833V6.7c0-.46-.38-.833-.85-.833zm3.485-1.533c-.47 0-.85.373-.85.833v4.922c0 .46.38.833.85.833s.85-.373.85-.833V5.167c0-.46-.38-.833-.85-.833z"
  }));
}

var rw,
  aw,
  ow = {
    key: "wc_order_failed",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-woocommerce",
    title: null === (ew = window) || void 0 === ew || null === (ew = ew.MRM_Vars) || void 0 === ew || null === (ew = ew.mint_trans) || void 0 === ew ? void 0 : ew.OrderFailed,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Starts the automation when a new user registered in WordPress.", "mrm"),
    subtitle: function (e) {
      return (0, b.__)("", "mrm");
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
        d: "M8.225 18.74c.001.248-.074.49-.214.697a1.27 1.27 0 01-.575.462 1.316 1.316 0 01-1.4-.266 1.223 1.223 0 01-.285-1.363c.096-.23.26-.425.47-.564.21-.139.458-.213.712-.215h.01c.34 0 .667.132.907.366.24.235.375.552.375.884zm6.923-1.249h-.01a1.304 1.304 0 00-.908.37 1.24 1.24 0 00-.374.887c0 .332.137.65.378.886a1.31 1.31 0 001.819 0 1.235 1.235 0 00.003-1.773 1.304 1.304 0 00-.908-.37zM19.953 6.24l-1.04 6.163a3.23 3.23 0 01-.353 1.294c-.207.403-.498.76-.852 1.05-.355.29-.767.505-1.21.634a3.47 3.47 0 01-1.37.112H6.65a2.876 2.876 0 01-1.844-.675 2.742 2.742 0 01-.947-1.685L2.308 2.572a1.247 1.247 0 00-.43-.765 1.308 1.308 0 00-.836-.308H.769a.78.78 0 01-.544-.22.74.74 0 010-1.06A.78.78 0 01.77 0h.273a2.876 2.876 0 011.845.675c.512.433.847 1.031.946 1.685l.094.639H17.18c.413 0 .821.088 1.196.258.374.171.705.42.97.729s.456.671.562 1.06c.105.39.121.797.047 1.193zm-1.79-1.291a1.275 1.275 0 00-.44-.332 1.308 1.308 0 00-.544-.118H4.147l1.23 8.422c.045.298.199.57.432.767.234.197.532.306.841.306h8.478c1.64 0 2.037-.6 2.27-1.846l1.04-6.164a1.221 1.221 0 00-.275-1.035zm-4.574 3.548H9.487a.78.78 0 00-.544.22.74.74 0 000 1.06c.144.14.34.219.544.219h4.102a.78.78 0 00.544-.22.74.74 0 000-1.06.78.78 0 00-.543-.22z"
      }));
    },
    edit: function () {
      var e, t;
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings order-failed"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(nw, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.OrderFailed), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.OrderFailedDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      })));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/woocommerce-automation/",
      showVideo: !1
    }
  },
  iw = {
    key: "wc_order_status_changed",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-woocommerce",
    title: null === (rw = window) || void 0 === rw || null === (rw = rw.MRM_Vars) || void 0 === rw || null === (rw = rw.mint_trans) || void 0 === rw ? void 0 : rw.TargetOrderStatus,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Starts the automation when a new user registered in WordPress.", "mrm"),
    subtitle: function (e) {
      var t, n;
      if ("" === (null === (t = e.settings) || void 0 === t || null === (t = t.status_settings) || void 0 === t ? void 0 : t.status)) return null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet;
    },
    icon: function () {
      return React.createElement("svg", {
        width: "22",
        height: "22",
        fill: "none",
        viewBox: "0 0 22 22",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        stroke: "#fff",
        strokeWidth: ".2",
        d: "M18.45 17.832c1.406 0 2.55-1.122 2.55-2.5V3.5C21 2.121 19.856 1 18.45 1H3.55C2.144 1 1 2.121 1 3.5v11.832c0 1.378 1.144 2.5 2.55 2.5h4.083v1.501H6.72c-.47 0-.85.373-.85.834 0 .46.38.833.85.833h8.56c.47 0 .85-.373.85-.833 0-.46-.38-.834-.85-.834h-.912v-1.501h4.082zM2.7 3.5c0-.46.381-.833.85-.833h14.9c.469 0 .85.374.85.833v9.088H2.7V3.5zm0 11.832v-1.077h16.6v1.077c0 .46-.381.833-.85.833H3.55a.843.843 0 01-.85-.833zm9.968 4.001H9.333v-1.501h3.335v1.501z"
      }), React.createElement("path", {
        fill: "#2D3149",
        stroke: "#fff",
        strokeWidth: ".2",
        d: "M7.514 7.273c-.47 0-.85.373-.85.834v1.982c0 .46.38.833.85.833s.85-.373.85-.833V8.107c0-.46-.38-.834-.85-.834zm3.484-1.406c-.47 0-.85.373-.85.833v3.389c0 .46.38.833.85.833s.85-.373.85-.833V6.7c0-.46-.38-.833-.85-.833zm3.485-1.533c-.47 0-.85.373-.85.833v4.922c0 .46.38.833.85.833s.85-.373.85-.833V5.167c0-.46-.38-.833-.85-.833z"
      }));
    },
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        l = i.selectedStep,
        c = i.selectedStepIndex,
        u = i.selectedStepCondition,
        s = i.selectedLogicalStepIndex;
      return i.errors, h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings order-status-changed"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(nw, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.TargetOrderStatus), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.TargetOrderStatusDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "",
        className: "inline-with-link"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.ChooseOrderStatus), h().createElement(q.SelectControl, {
        options: null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r ? void 0 : r.wc_order_statuses,
        value: null !== (a = null === (o = l.settings) || void 0 === o || null === (o = o.status_settings) || void 0 === o ? void 0 : o.status) && void 0 !== a ? a : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(c, u, s, "status_settings", "status", e);
        }
      })))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/woocommerce-automation/",
      showVideo: !0,
      videoLink: "https://www.youtube.com/embed/DyQ-SchB6Wc"
    }
  };

function lw() {
  return React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 18 21",
    fill: "#A7A8B3",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M17.9486 12.7687C17.8348 12.5072 17.5519 12.3349 17.2364 12.3349H14.7593V0.678608C14.7593 0.303848 14.4174 0 13.9957 0H4.00137C3.57969 0 3.2378 0.303848 3.2378 0.678608V12.3349H0.760653C0.0860996 12.3142 -0.270771 13.1257 0.246549 13.5152L8.4844 20.1814C8.77596 20.4173 9.22113 20.4173 9.5127 20.1814L17.7506 13.5152C17.9836 13.3267 18.0623 13.0301 17.9486 12.7687ZM8.99854 18.7618L2.73335 13.6921H4.00137C4.42305 13.6921 4.76494 13.3883 4.76494 13.0135V1.35722H13.2321V13.0135C13.2321 13.3883 13.574 13.6921 13.9957 13.6921H15.2637L8.99854 18.7618Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    d: "M9.23189 7.70332H8.77702C7.32293 7.67067 7.39327 5.78413 8.77708 5.78048C9.24479 5.75368 9.7211 5.86054 10.0518 6.16685C10.7606 6.7919 11.835 5.83594 11.1315 5.20655C10.7493 4.86739 10.278 4.64091 9.76803 4.52188C9.82897 4.03837 9.64221 3.52677 9.00442 3.51636C8.40635 3.52366 8.17594 4.00344 8.24092 4.47347C6.2779 4.77623 5.45835 7.15382 6.93789 8.38494C7.43666 8.82064 8.08988 9.06054 8.77702 9.06054C9.52107 8.98102 10.3052 9.25761 10.3139 10.0222C10.3195 10.6423 9.67689 11.0567 9.01041 10.9833C8.62117 10.9834 8.23976 10.8426 7.96349 10.5974C7.25542 9.97151 6.18028 10.9279 6.88378 11.557C7.25863 11.8901 7.73326 12.1176 8.24088 12.2387C8.18013 12.7231 8.36413 13.2373 9.00449 13.2478C9.60279 13.2405 9.83297 12.7605 9.76799 12.2904C12.7927 11.6912 12.3503 7.7409 9.23189 7.70332Z",
    fill: "#2D3149"
  }));
}

function cw() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return uw(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (uw(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, uw(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, uw(d, "constructor", u), uw(u, "constructor", c), c.displayName = "GeneratorFunction", uw(u, a, "GeneratorFunction"), uw(d), uw(d, a, "Generator"), uw(d, r, function () {
    return this;
  }), uw(d, "toString", function () {
    return "[object Generator]";
  }), (cw = function () {
    return {
      w: o,
      m
    };
  })();
}

function uw(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  uw = function (e, t, n, r) {
    function o(t, n) {
      uw(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, uw(e, t, n, r);
}
