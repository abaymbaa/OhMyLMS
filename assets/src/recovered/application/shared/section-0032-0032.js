// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var I_,
  F_ = {
    key: "wc_customer_winback",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-woocommerce",
    title: (0, b.__)("Customer Win Back", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Bring customers back to your store by promoting your new products or offers", "mrm"),
    subtitle: function (e) {},
    icon: T_,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        i = o.selectedStep,
        l = o.selectedStepIndex,
        c = o.selectedStepCondition,
        u = o.selectedLogicalStepIndex,
        s = (o.errors, function (e, t) {
          (0, y.dispatch)(Lf).updateStepArgs(l, c, u, "wc_customer_winback_settings", t, e);
        });
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings mintmrm_customer_win_back"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(T_, null), (0, b.__)("Customer Win Back", "mrm")), h().createElement("p", {
        className: "sort-description"
      }, (0, b.__)("This automation runs once per customer for a selected period based on their Last Ordered Date.", "mrm"))), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "mintmrm-order-period single-settings"
      }, h().createElement("h2", null, (0, b.__)("Customer Last Ordered Period", "mrm"), h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, (0, b.__)("Specify the time period during which the customer has not made a purchase.", "mrm")))), h().createElement("div", {
        className: "mintmrm-input-group"
      }, h().createElement("p", {
        className: "mint-input-label-text"
      }, (0, b.__)("Minimum days since purchase", "mrm")), h().createElement("div", {
        className: "mint-sub-group"
      }, h().createElement("input", {
        type: "number",
        name: "minimum-day",
        defaultValue: (null === (e = i.settings) || void 0 === e || null === (e = e.wc_customer_winback_settings) || void 0 === e ? void 0 : e.order_period_minimum_days) || 30,
        min: 1,
        onKeyDown: function (e) {
          return ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
        },
        onChange: function (e) {
          return s(e.target.value, "order_period_minimum_days");
        }
      }), h().createElement("span", null, (0, b.__)("days ago", "mrm"))), h().createElement("span", {
        className: "mint-and-sign"
      }, "And", h().createElement("hr", null)), h().createElement("p", {
        className: "mint-input-label-text"
      }, (0, b.__)("Maximum days since purchase", "mrm")), h().createElement("div", {
        className: "mint-sub-group"
      }, h().createElement("input", {
        type: "number",
        name: "maximum-day",
        defaultValue: (null === (t = i.settings) || void 0 === t || null === (t = t.wc_customer_winback_settings) || void 0 === t ? void 0 : t.order_period_maximum_days) || 45,
        min: 1,
        onKeyDown: function (e) {
          return ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
        },
        onChange: function (e) {
          return s(e.target.value, "order_period_maximum_days");
        }
      }), h().createElement("span", null, (0, b.__)("days ago", "mrm")))), h().createElement("div", {
        className: "mintmrm-automation-schedule"
      }, h().createElement("h2", null, (0, b.__)("Schedule Automation", "mrm"), h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, (0, b.__)("Specify a start time for initiating this automation.", "mrm")))), h().createElement("p", {
        className: "mint-input-label-text"
      }, (0, b.__)("Time of day", "mrm")), h().createElement("div", {
        className: "mint-automation-time-picker"
      }, h().createElement(q.DateTimePicker, {
        currentDate: null !== (n = i.settings) && void 0 !== n && null !== (n = n.wc_customer_winback_settings) && void 0 !== n && n.time_to_check ? null === (r = i.settings) || void 0 === r || null === (r = r.wc_customer_winback_settings) || void 0 === r ? void 0 : r.time_to_check : null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a ? void 0 : a.local_time,
        onChange: function (e) {
          return t = e, void (0, y.dispatch)(Lf).updateStepArgs(l, c, u, "wc_customer_winback_settings", "time_to_check", t);
          var t;
        },
        is12Hour: !0,
        __nextRemoveHelpButton: !0,
        __nextRemoveResetButton: !0
      })))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/woocommerce-automation/",
      showVideo: !1
    }
  };

function N_() {
  return React.createElement("svg", {
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fill: "#2D3149",
    clipPath: "url(#clip0_3753_2057)"
  }, React.createElement("path", {
    d: "M19.374 9.867c-.668-.551-1.725-.599-2.419.146l-1.722 1.848a1.76 1.76 0 00-1.679-1.236h-3.073c-.233 0-.312-.09-.717-.401a4.11 4.11 0 00-5.404.013l-1.13.994a1.75 1.75 0 00-1.61-.02l-1.296.647a.586.586 0 00-.262.787l3.515 7.03c.145.29.497.407.787.263l1.295-.648c.639-.32.994-.971.971-1.634h6.924a4.12 4.12 0 003.281-1.64l2.813-3.751c.546-.727.46-1.793-.274-2.398zM5.135 18.242l-.771.386-2.992-5.983.772-.386a.586.586 0 01.786.262l2.467 4.935a.586.586 0 01-.262.786zm13.575-6.68l-2.812 3.75a2.943 2.943 0 01-2.344 1.172H6.221l-2.195-4.392 1.109-.976a2.937 2.937 0 013.87 0c.65.572 1.055.68 1.476.68h3.073a.587.587 0 010 1.173h-2.992a.586.586 0 000 1.171h3.385c.486 0 .955-.204 1.286-.56l2.58-2.768a.586.586 0 01.897.75zm-6.39-7.563c.401-.421.648-.99.648-1.616 0-1.29-1.042-2.383-2.343-2.383-1.292 0-2.383 1.091-2.383 2.383a2.3 2.3 0 00.67 1.62C7.841 4.604 7.07 5.757 7.07 7.11v.586c0 .324.263.586.586.586h5.898a.586.586 0 00.586-.586V7.11A3.57 3.57 0 0012.32 4zm-1.695-2.827c.635 0 1.172.555 1.172 1.211 0 .646-.526 1.172-1.172 1.172-.656 0-1.211-.537-1.211-1.172 0-.645.566-1.21 1.21-1.21zM8.242 7.11c0-1.291 1.091-2.382 2.383-2.382s2.343 1.068 2.343 2.382H8.242z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_3753_2057"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0z"
  }))));
}

var D_,
  W_ = {
    key: "wc_first_order",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-woocommerce",
    title: null === (I_ = window) || void 0 === I_ || null === (I_ = I_.MRM_Vars) || void 0 === I_ || null === (I_ = I_.mint_trans) || void 0 === I_ ? void 0 : I_.FirstOrderInStore,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Give a special welcome to your first-time customers through this email automation.", "mrm"),
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
      }, React.createElement("g", {
        fill: "#2D3149",
        clipPath: "url(#clip0_3753_2057)"
      }, React.createElement("path", {
        d: "M19.374 9.867c-.668-.551-1.725-.599-2.419.146l-1.722 1.848a1.76 1.76 0 00-1.679-1.236h-3.073c-.233 0-.312-.09-.717-.401a4.11 4.11 0 00-5.404.013l-1.13.994a1.75 1.75 0 00-1.61-.02l-1.296.647a.586.586 0 00-.262.787l3.515 7.03c.145.29.497.407.787.263l1.295-.648c.639-.32.994-.971.971-1.634h6.924a4.12 4.12 0 003.281-1.64l2.813-3.751c.546-.727.46-1.793-.274-2.398zM5.135 18.242l-.771.386-2.992-5.983.772-.386a.586.586 0 01.786.262l2.467 4.935a.586.586 0 01-.262.786zm13.575-6.68l-2.812 3.75a2.943 2.943 0 01-2.344 1.172H6.221l-2.195-4.392 1.109-.976a2.937 2.937 0 013.87 0c.65.572 1.055.68 1.476.68h3.073a.587.587 0 010 1.173h-2.992a.586.586 0 000 1.171h3.385c.486 0 .955-.204 1.286-.56l2.58-2.768a.586.586 0 01.897.75zm-6.39-7.563c.401-.421.648-.99.648-1.616 0-1.29-1.042-2.383-2.343-2.383-1.292 0-2.383 1.091-2.383 2.383a2.3 2.3 0 00.67 1.62C7.841 4.604 7.07 5.757 7.07 7.11v.586c0 .324.263.586.586.586h5.898a.586.586 0 00.586-.586V7.11A3.57 3.57 0 0012.32 4zm-1.695-2.827c.635 0 1.172.555 1.172 1.211 0 .646-.526 1.172-1.172 1.172-.656 0-1.211-.537-1.211-1.172 0-.645.566-1.21 1.21-1.21zM8.242 7.11c0-1.291 1.091-2.382 2.383-2.382s2.343 1.068 2.343 2.382H8.242z"
      })), React.createElement("defs", null, React.createElement("clipPath", {
        id: "clip0_3753_2057"
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
      }, h().createElement("h4", null, h().createElement(N_, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.FirstOrderInStore), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.FirstOrderInStoreDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      })));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/woocommerce-automation/",
      showVideo: !0,
      videoLink: "https://www.youtube.com/embed/zujj4gQRL2k"
    }
  };

function z_() {
  return React.createElement("svg", {
    width: "18",
    height: "22",
    fill: "none",
    viewBox: "0 0 18 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".4",
    d: "M16.848 17.493l-.893-11.255a1.407 1.407 0 00-1.396-1.293h-1.764v-.079A3.87 3.87 0 008.929 1a3.87 3.87 0 00-3.866 3.866v.08H3.299c-.727 0-1.34.567-1.396 1.29l-.894 11.258c-.069.902.244 1.8.858 2.462A3.266 3.266 0 004.257 21H13.6c.904 0 1.775-.38 2.39-1.044.614-.663.927-1.56.857-2.463zM6.234 4.866A2.698 2.698 0 018.93 2.171a2.698 2.698 0 012.694 2.695v.08h-5.39v-.08zm8.897 14.294c-.4.431-.942.668-1.53.668H4.256c-.587 0-1.13-.237-1.53-.668a2.068 2.068 0 01-.549-1.575l.894-11.257a.23.23 0 01.228-.211h1.764V7.56a.586.586 0 001.171 0V6.117h5.39V7.56a.586.586 0 001.17 0V6.117h1.765a.23.23 0 01.228.212l.893 11.255a2.064 2.064 0 01-.549 1.576z"
  }), React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".4",
    d: "M11.567 10.933a.586.586 0 00-.829 0l-2.615 2.616-1.006-1.006a.586.586 0 00-.828.828l1.42 1.42a.584.584 0 00.828 0l3.03-3.03a.586.586 0 000-.828z"
  }));
}

function B_() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return L_(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (L_(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, L_(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, L_(d, "constructor", u), L_(u, "constructor", c), c.displayName = "GeneratorFunction", L_(u, a, "GeneratorFunction"), L_(d), L_(d, a, "Generator"), L_(d, r, function () {
    return this;
  }), L_(d, "toString", function () {
    return "[object Generator]";
  }), (B_ = function () {
    return {
      w: o,
      m
    };
  })();
}

function L_(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  L_ = function (e, t, n, r) {
    function o(t, n) {
      L_(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, L_(e, t, n, r);
}

function V_(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function H_(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        V_(o, r, a, i, l, "next", e);
      }
      function l(e) {
        V_(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function G_(e, t) {
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
      if ("string" == typeof e) return U_(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? U_(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function U_(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var q_,
  Y_ = {
    key: "wc_order_completed",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-woocommerce",
    title: null === (D_ = window) || void 0 === D_ || null === (D_ = D_.MRM_Vars) || void 0 === D_ || null === (D_ = D_.mint_trans) || void 0 === D_ ? void 0 : D_.OrderCompleted,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Starts the automation when Order Completed", "mrm"),
    subtitle: function (e) {
      var t, n, r, a, o, i, l, c;
      return null !== (t = e.settings) && void 0 !== t && null !== (t = t.product_settings) && void 0 !== t && t.option_type && "choose-product" !== (null === (n = e.settings) || void 0 === n || null === (n = n.product_settings) || void 0 === n ? void 0 : n.option_type) || 0 !== (null === (a = e.settings) || void 0 === a || null === (a = a.product_settings) || void 0 === a || null === (a = a.products) || void 0 === a ? void 0 : a.length) ? "choose-category" !== (null === (r = e.settings) || void 0 === r || null === (r = r.product_settings) || void 0 === r ? void 0 : r.option_type) || null !== (i = e.settings) && void 0 !== i && null !== (i = i.product_settings) && void 0 !== i && null !== (i = i.category) && void 0 !== i && i.length && 0 !== (null === (l = e.settings) || void 0 === l || null === (l = l.product_settings) || void 0 === l || null === (l = l.category) || void 0 === l ? void 0 : l.length) || null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.NotSetUpYet : null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.NotSetUpYet;
    },
    icon: function () {
      return React.createElement("svg", {
        className: "hover-stroke-fill",
        width: "18",
        height: "22",
        fill: "none",
        viewBox: "0 0 18 22",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".4",
        d: "M16.848 17.493l-.893-11.255a1.407 1.407 0 00-1.396-1.293h-1.764v-.079A3.87 3.87 0 008.929 1a3.87 3.87 0 00-3.866 3.866v.08H3.299c-.727 0-1.34.567-1.396 1.29l-.894 11.258c-.069.902.244 1.8.858 2.462A3.266 3.266 0 004.257 21H13.6c.904 0 1.775-.38 2.39-1.044.614-.663.927-1.56.857-2.463zM6.234 4.866A2.698 2.698 0 018.93 2.171a2.698 2.698 0 012.694 2.695v.08h-5.39v-.08zm8.897 14.294c-.4.431-.942.668-1.53.668H4.256c-.587 0-1.13-.237-1.53-.668a2.068 2.068 0 01-.549-1.575l.894-11.257a.23.23 0 01.228-.211h1.764V7.56a.586.586 0 001.171 0V6.117h5.39V7.56a.586.586 0 001.17 0V6.117h1.765a.23.23 0 01.228.212l.893 11.255a2.064 2.064 0 01-.549 1.576z"
      }), React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".4",
        d: "M11.567 10.933a.586.586 0 00-.829 0l-2.615 2.616-1.006-1.006a.586.586 0 00-.828.828l1.42 1.42a.584.584 0 00.828 0l3.03-3.03a.586.586 0 000-.828z"
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
        w = G_((0, g.useState)([]), 2),
        E = w[0],
        S = w[1],
        R = G_((0, g.useState)([]), 2),
        x = R[0],
        C = R[1],
        P = G_((0, g.useState)((0, b.__)("Please enter 3 or more characters", "mrm")), 2),
        O = P[0],
        k = P[1],
        j = function () {
          var e = H_(B_().m(function e(t) {
            return B_().w(function (e) {
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
          var e = H_(B_().m(function e(t) {
            return B_().w(function (e) {
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
      }, h().createElement("h4", null, h().createElement(z_, null), null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.OrderCompleted), h().createElement("div", {
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
      }, null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.OrderCompletedDescription), "choose-product" === W && h().createElement("p", {
        className: "sort-description"
      }, (0, b.__)("This Automation will be Triggered when an order has been completed for specific products.", "mrm")), "choose-category" === W && h().createElement("p", {
        className: "sort-description"
      }, (0, b.__)("This Automation will be triggered when an order has been completed for specific product categories.", "mrm"))), h().createElement("div", {
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
      showVideo: !0,
      videoLink: "https://www.youtube.com/embed/3aOtQ9_lQh8"
    }
  };
