// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Sw,
  Rw = {
    key: "wc_review_received",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-woocommerce",
    title: null === (fw = window) || void 0 === fw || null === (fw = fw.MRM_Vars) || void 0 === fw || null === (fw = fw.mint_trans) || void 0 === fw ? void 0 : fw.ReviewReceived,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Starts the automation when a review is added to any product.", "mrm"),
    subtitle: function (e) {
      var t, n, r, a, o, i, l, c;
      return null != e && null !== (t = e.settings) && void 0 !== t && null !== (t = t.product_settings) && void 0 !== t && t.option_type && "choose-product" !== (null == e || null === (n = e.settings) || void 0 === n || null === (n = n.product_settings) || void 0 === n ? void 0 : n.option_type) || 0 !== (null == e || null === (a = e.settings) || void 0 === a || null === (a = a.product_settings) || void 0 === a || null === (a = a.products) || void 0 === a ? void 0 : a.length) ? "choose-category" !== (null === (r = e.settings) || void 0 === r || null === (r = r.product_settings) || void 0 === r ? void 0 : r.option_type) || null !== (i = e.settings) && void 0 !== i && null !== (i = i.product_settings) && void 0 !== i && null !== (i = i.category) && void 0 !== i && i.length && 0 !== (null === (l = e.settings) || void 0 === l || null === (l = l.product_settings) || void 0 === l || null === (l = l.category) || void 0 === l ? void 0 : l.length) || null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.NotSetUpYet : null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.NotSetUpYet;
    },
    icon: function () {
      return React.createElement("svg", {
        className: "hover-stroke-fill",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("g", {
        clipPath: "url(#clip0_8756_1636)"
      }, React.createElement("path", {
        d: "M17.845 0H2.15496C0.966719 0 0 0.96668 0 2.15492V15.3346C0 16.5229 0.966719 17.4896 2.15496 17.4896H7.24688L9.58562 19.8284C9.69551 19.9382 9.84453 20 9.99996 20C10.1554 20 10.3044 19.9383 10.4143 19.8284L12.7531 17.4896H17.845C19.0333 17.4896 20 16.5229 20 15.3346V2.15492C20 0.96668 19.0333 0 17.845 0ZM18.8281 15.3346C18.8281 15.8767 18.3871 16.3177 17.845 16.3177H12.5104C12.355 16.3177 12.2059 16.3794 12.0961 16.4893L9.99996 18.5854L7.90391 16.4893C7.79402 16.3795 7.645 16.3177 7.48957 16.3177H2.15496C1.61289 16.3177 1.17188 15.8767 1.17188 15.3346V2.15492C1.17188 1.61285 1.61289 1.17188 2.15496 1.17188H17.845C18.3871 1.17188 18.8281 1.61285 18.8281 2.15492V15.3346Z",
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: "0.2"
      }), React.createElement("path", {
        d: "M15.0297 6.74009L11.915 6.28736L10.5217 3.46462C10.4229 3.26466 10.2193 3.13806 9.99622 3.13806C9.77321 3.13806 9.56954 3.26466 9.47083 3.46466L8.07759 6.28736L4.96263 6.74009C4.74192 6.77216 4.55856 6.92673 4.48962 7.13888C4.42071 7.35099 4.47821 7.58384 4.6379 7.73951L6.89204 9.93666L6.36001 13.039C6.32231 13.2588 6.41267 13.481 6.5931 13.6121C6.77357 13.7432 7.01278 13.7605 7.21017 13.6567L9.99622 12.192L12.7825 13.6567C12.8683 13.7018 12.9619 13.724 13.0551 13.724H13.0575C13.3804 13.7232 13.6419 13.4612 13.6419 13.1381C13.6419 13.0931 13.6368 13.0493 13.6273 13.0072L13.1004 9.93666L15.3545 7.73955C15.5142 7.58388 15.5717 7.35103 15.5027 7.13892C15.4338 6.92673 15.2505 6.77216 15.0297 6.74009ZM12.0618 9.31248C11.9236 9.44709 11.8606 9.64107 11.8933 9.83115L12.2769 12.0669L10.2689 11.0114C10.0982 10.9217 9.89427 10.9217 9.72357 11.0114L7.71571 12.067L8.09915 9.83111C8.13173 9.64103 8.06872 9.44709 7.93064 9.31252L6.3061 7.72904L8.55099 7.40275C8.74181 7.37502 8.90677 7.25517 8.99212 7.08224L9.99626 5.04783L11.0005 7.08228C11.0859 7.25517 11.2508 7.37502 11.4417 7.40275L13.6863 7.72904L12.0618 9.31248Z",
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: "0.2"
      })), React.createElement("defs", null, React.createElement("clipPath", {
        id: "clip0_8756_1636"
      }, React.createElement("rect", {
        width: "20",
        height: "20",
        fill: "white"
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
        w,
        E,
        S = ww((0, g.useState)([]), 2),
        R = S[0],
        x = S[1],
        C = ww((0, g.useState)([]), 2),
        P = C[0],
        O = C[1],
        k = ww((0, g.useState)((0, b.__)("Please enter 3 or more characters", "mrm")), 2),
        j = k[0],
        A = k[1],
        M = function () {
          var e = _w(hw().m(function e(t) {
            return hw().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!(t.length >= 3)) {
                    e.n = 1;
                    break;
                  }
                  return A((0, b.__)("loading...", "mrm")), e.n = 1, Tg(t, "wc").then(function (e) {
                    e.success && (0 === e.products.length ? A((0, b.__)("No product found", "mrm")) : (x(e.products), A((0, b.__)("Please enter 3 or more characters", "mrm"))));
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
        T = function () {
          var e = _w(hw().m(function e(t) {
            return hw().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!(t.length >= 3)) {
                    e.n = 1;
                    break;
                  }
                  return A("loading..."), e.n = 1, Fg(t, "wc").then(function (e) {
                    e.success && (0 === e.category.length ? A((0, b.__)("No category found", "mrm")) : (O(e.category), A((0, b.__)("Please enter 3 or more characters", "mrm"))));
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
        I = function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(D, W, z, "product_settings", "option_type", e.target.value);
        },
        F = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        N = F.selectedStep,
        D = F.selectedStepIndex,
        W = F.selectedStepCondition,
        z = F.selectedLogicalStepIndex,
        B = (F.errors, null !== (e = N.settings) && void 0 !== e && null !== (e = e.product_settings) && void 0 !== e && e.option_type ? null === (t = N.settings) || void 0 === t || null === (t = t.product_settings) || void 0 === t ? void 0 : t.option_type : "choose-all");
      (null === (n = N.settings) || void 0 === n || null === (n = n.product_settings) || void 0 === n || !n.option_type) && (null === (r = N.settings) || void 0 === r || null === (r = r.product_settings) || void 0 === r ? void 0 : r.products.length) > 0 && (B = "choose-product");
      var L = function (e) {
        return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, j));
      };
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings order-created"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(gw, null), null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.ReviewReceived), h().createElement("div", {
        className: "radio-btn-wrapper"
      }, h().createElement("span", {
        className: "mintmrm-radiobtn"
      }, h().createElement("input", {
        id: "choose-all",
        type: "radio",
        name: "select-product-option",
        value: "choose-all",
        checked: "choose-all" === B,
        onChange: I
      }), h().createElement("label", {
        htmlFor: "choose-all"
      }, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.AllProducts)), h().createElement("span", {
        className: "mintmrm-radiobtn"
      }, h().createElement("input", {
        id: "choose-product",
        type: "radio",
        name: "select-product-option",
        value: "choose-product",
        checked: "choose-product" === B,
        onChange: I
      }), h().createElement("label", {
        htmlFor: "choose-product"
      }, null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.ChooseProducts)), h().createElement("span", {
        className: "mintmrm-radiobtn"
      }, h().createElement("input", {
        id: "choose-category",
        type: "radio",
        name: "select-product-option",
        value: "choose-category",
        checked: "choose-category" === B,
        onChange: I
      }), h().createElement("label", {
        htmlFor: "choose-category"
      }, null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.ChooseProductCategories))), "choose-all" === B && h().createElement("p", {
        className: "sort-description"
      }, null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.ReviewReceivedDescription), "choose-product" === B && h().createElement("p", {
        className: "sort-description"
      }, null === (u = window) || void 0 === u || null === (u = u.MRM_Vars) || void 0 === u || null === (u = u.mint_trans) || void 0 === u ? void 0 : u.ReviewReceivedDescForProduct), "choose-category" === B && h().createElement("p", {
        className: "sort-description"
      }, null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s || null === (s = s.mint_trans) || void 0 === s ? void 0 : s.ReviewedReceivedDescForCategory)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, "choose-product" === B && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-list"
      }, null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.ChooseProduct), h().createElement("div", {
        className: "form-group react-select-control-group"
      }, h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          noOptionsMessage: L
        },
        value: null !== (m = null === (p = N.settings) || void 0 === p || null === (p = p.product_settings) || void 0 === p ? void 0 : p.products) && void 0 !== m ? m : "",
        onChange: function (e) {
          !function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(D, W, z, "product_settings", "products", e);
          }(e);
        },
        onInputChange: function (e) {
          M(e);
        },
        options: R,
        isMulti: "true",
        placeholder: (0, b.__)("Search Products...", "mrm"),
        isSearchable: !0
      })), h().createElement("p", {
        className: "placeholder-text"
      }, null === (f = window) || void 0 === f || null === (f = f.MRM_Vars) || void 0 === f || null === (f = f.mint_trans) || void 0 === f ? void 0 : f.ProductSelectHelpText)), "choose-category" === B && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-list"
      }, null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v || null === (v = v.mint_trans) || void 0 === v ? void 0 : v.ChooseCategoryS), h().createElement("div", {
        className: "form-group react-select-control-group"
      }, h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          noOptionsMessage: L
        },
        value: null !== (_ = null === (w = N.settings) || void 0 === w || null === (w = w.product_settings) || void 0 === w ? void 0 : w.category) && void 0 !== _ ? _ : "",
        onChange: function (e) {
          !function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(D, W, z, "product_settings", "category", e);
          }(e);
        },
        onInputChange: function (e) {
          T(e);
        },
        options: P,
        isMulti: "true",
        placeholder: (0, b.__)("Search Category...", "mrm"),
        isSearchable: !0
      })), h().createElement("p", {
        className: "placeholder-text"
      }, null === (E = window) || void 0 === E || null === (E = E.MRM_Vars) || void 0 === E || null === (E = E.mint_trans) || void 0 === E ? void 0 : E.CategorySelectHelpText)))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/woocommerce-automation/",
      showVideo: !1
    }
  };

function xw() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Cw(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Cw(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Cw(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Cw(d, "constructor", u), Cw(u, "constructor", c), c.displayName = "GeneratorFunction", Cw(u, a, "GeneratorFunction"), Cw(d), Cw(d, a, "Generator"), Cw(d, r, function () {
    return this;
  }), Cw(d, "toString", function () {
    return "[object Generator]";
  }), (xw = function () {
    return {
      w: o,
      m
    };
  })();
}

function Cw(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Cw = function (e, t, n, r) {
    function o(t, n) {
      Cw(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Cw(e, t, n, r);
}

function Pw(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Ow(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Pw(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Pw(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function kw(e, t) {
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
      if ("string" == typeof e) return jw(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jw(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function jw(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
