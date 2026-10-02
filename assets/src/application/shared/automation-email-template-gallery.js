// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var IO = function (e) {
  var t,
    n = e.children,
    r = e.conditions,
    a = e.setConditions,
    o = e.isPreview;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "modal-side-bar ".concat(o ? "disabled" : "")
  }, React.createElement("div", {
    className: "modal-side-bar-heading ".concat(0 === (null == r ? void 0 : r.length) ? "no-condition" : "")
  }, React.createElement("span", {
    className: "filter-text"
  }, React.createElement(AO, null), null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.Filter), React.createElement("span", {
    className: "clear-filter ".concat(0 === r.length ? "hide" : ""),
    onClick: function () {
      a([]);
    }
  }, "Clear All")), 0 < r.length && React.createElement("div", {
    className: "modal-side-bar-conditions"
  }, r.map(function (e) {
    return null == e ? void 0 : e.items.map(function (t, n) {
      return React.createElement(React.Fragment, null, React.createElement("span", {
        key: n,
        className: "mrm-custom-selected-items"
      }, t, React.createElement("div", {
        className: "cross-icon",
        onClick: function (n) {
          return function (e, t) {
            var n,
              o = r.find(function (e) {
                return (null == e ? void 0 : e.label) === t;
              }),
              i = r.filter(function (e) {
                return (null == e ? void 0 : e.label) !== t;
              }),
              l = null == o || null === (n = o.items) || void 0 === n ? void 0 : n.filter(function (t) {
                return t !== e;
              });
            l.length > 0 ? (o.items = l, a([].concat(MO(i), [o]))) : a(MO(i));
          }(t, null == e ? void 0 : e.label);
        }
      }, React.createElement(vy.A, null))));
    });
  })), n));
};

const FO = (0, g.memo)(IO);

var NO = n(89834);

function DO(e) {
  return function (e) {
    if (Array.isArray(e)) return WO(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return WO(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? WO(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function WO(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var zO = function (e) {
  var t = e.items,
    n = e.conditions,
    r = e.setConditions,
    a = e.itemFor;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "modal-single-selection"
  }, t.map(function (e) {
    var t = function (e, t) {
      var r,
        a = n.find(function (e) {
          return (null == e ? void 0 : e.label) === t;
        });
      return !!a && (null == a || null === (r = a.items) || void 0 === r ? void 0 : r.includes(e));
    }(null == e ? void 0 : e.label, a);
    return React.createElement("p", {
      key: null == e ? void 0 : e.id,
      className: "single-selected-wrapper ".concat(t ? "selected" : ""),
      "data-value": null == e ? void 0 : e.id
    }, React.createElement("span", {
      onClick: function () {
        return function (e, t) {
          var a = n.find(function (e) {
            return (null == e ? void 0 : e.label) === t;
          });
          if (a) {
            var o = a.items.indexOf(e),
              i = n.filter(function (e) {
                return (null == e ? void 0 : e.label) !== t;
              });
            if (o < 0) a.items[0] = e, r([].concat(DO(i), [a]));else {
              var l,
                c = null == a || null === (l = a.items) || void 0 === l ? void 0 : l.filter(function (t) {
                  return t !== e;
                });
              c.length > 0 ? (a.items = c, r([].concat(DO(i), [a]))) : r(DO(i));
            }
          } else r([].concat(DO(n), [{
            label: t,
            items: [e]
          }]));
        }(null == e ? void 0 : e.label, a);
      },
      className: "single-selected-label"
    }, null == e ? void 0 : e.label), React.createElement("span", {
      className: "single-selection-tic"
    }, React.createElement(NO.default, null)));
  })));
};

const BO = (0, g.memo)(zO),
  LO = [{
    id: 0,
    label: "Abandoned Cart Recovery",
    value: "abandonedcartrecovery"
  }, {
    id: 1,
    label: "Selling Services",
    value: "sellingservices"
  }, {
    id: 2,
    label: "Selling Products",
    value: "sellingproducts"
  }, {
    id: 3,
    label: "Welcome",
    value: "welcome"
  }, {
    id: 4,
    label: "Follow Up",
    value: "followup"
  }, {
    id: 6,
    label: "Deals & Offers",
    value: "deals&offers"
  }, {
    id: 8,
    label: "Announcement",
    value: "announcement"
  }, {
    id: 9,
    label: "Events",
    value: "events"
  }, {
    id: 10,
    label: "Educate & Inform",
    value: "educate&Inform"
  }, {
    id: 11,
    label: "Re-Engagement",
    value: "re_engagement"
  }, {
    id: 12,
    label: "Review & Feedback",
    value: "review_feedback"
  }, {
    id: 13,
    label: "Download Emails",
    value: "download_emails"
  }],
  VO = [{
    id: 0,
    label: "Business & Finance",
    value: "business&finance"
  }, {
    id: 1,
    label: "E-commerce & Retail",
    value: "e-commerce&Retail"
  }, {
    id: 2,
    label: "Fashion & Jewelry",
    value: "fashion&jewelry"
  }, {
    id: 3,
    label: "Food & Travel",
    value: "food&travel"
  }, {
    id: 4,
    label: "Health & Wellness",
    value: "health&wellness"
  }, {
    id: 5,
    label: "Education & Non Profit",
    value: "eduction&nonprofit"
  }, {
    id: 6,
    label: "Others",
    value: "others"
  }],
  HO = [{
    id: 0,
    label: "Free",
    value: "free"
  }, {
    id: 1,
    label: "Paid",
    value: "paid"
  }];

function GO() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return UO(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (UO(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, UO(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, UO(d, "constructor", u), UO(u, "constructor", c), c.displayName = "GeneratorFunction", UO(u, a, "GeneratorFunction"), UO(d), UO(d, a, "Generator"), UO(d, r, function () {
    return this;
  }), UO(d, "toString", function () {
    return "[object Generator]";
  }), (GO = function () {
    return {
      w: o,
      m
    };
  })();
}

function UO(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  UO = function (e, t, n, r) {
    function o(t, n) {
      UO(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, UO(e, t, n, r);
}

function qO(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function YO(e, t) {
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
      if ("string" == typeof e) return QO(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? QO(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function QO(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var ZO = function (e) {
  var t,
    n,
    r,
    a,
    o,
    i = e.isOpen,
    l = e.setIsOpen,
    c = e.setIsEmailBuilderOpen,
    u = e.setIsTemplateBuilder,
    s = e.setIsCloseBuilder,
    d = e.setIsTemplate,
    m = e.setBuilderChanged,
    p = e.emailIndex,
    v = e.setEmailBody,
    h = e.automationData,
    y = e.emailData,
    b = e.isTemplate,
    _ = e.setIsClose,
    w = e.isClose,
    E = e.isEmailBuilderOpen,
    S = e.pageFrom,
    R = void 0 === S ? "" : S,
    x = e.openTemplate,
    C = e.setStartFromScratch,
    P = YO((0, g.useState)("brand"), 2),
    O = P[0],
    k = P[1],
    j = YO((0, g.useState)([]), 2),
    A = j[0],
    M = j[1],
    T = YO((0, g.useState)(!1), 2),
    I = T[0],
    F = T[1],
    N = YO((0, g.useState)(!1), 2),
    D = N[0],
    W = N[1],
    z = YO((0, g.useState)(!1), 2),
    B = z[0],
    L = z[1],
    V = YO((0, g.useState)(null), 2),
    H = V[0],
    G = V[1],
    U = (0, f.g)().id,
    q = (0, g.useCallback)(function () {
      "emailTemplates" === R ? (x("", [], !1), W(!0)) : (l(!1), c(!0), u(!0), s(!1), d(!1));
    }, []);
  return React.createElement(React.Fragment, null, React.createElement(WP.default, {
    isOpen: i,
    setIsOpen: l,
    isTemplate: b,
    setIsClose: _,
    isClose: w
  }, React.createElement(OO, {
    heading: null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.DesignYourEmail,
    description: null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.CampaignModalDescription
  }), React.createElement(jO, {
    currentTab: O,
    setCurrentTab: k,
    setIsPreview: F
  }), React.createElement(YP, null, "brand" === O && React.createElement(React.Fragment, null, React.createElement(FO, {
    conditions: A,
    setConditions: M,
    isPreview: I
  }, React.createElement(LP, {
    label: null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.EmailCategories,
    defaultOpen: !0
  }, React.createElement(BO, {
    items: LO,
    itemFor: "emailCategories",
    conditions: A,
    setConditions: M
  })), React.createElement(LP, {
    label: null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.Industry
  }, React.createElement(UP, {
    items: VO,
    itemFor: "industry",
    conditions: A,
    setConditions: M
  })), React.createElement(LP, {
    label: null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.Plan
  }, React.createElement(BO, {
    items: HO,
    itemFor: "plan",
    conditions: A,
    setConditions: M
  })))), React.createElement(CO, {
    currentTab: O,
    isPreview: I,
    setIsPreview: F,
    isImporting: D,
    openTemplateBuilder: q,
    saveTemplate: function (e, t) {
      var n,
        r,
        a = "advanced-builder" === e ? DP()((0, FP.JsonToMjml)({
          data: null == t || null === (n = t.json_content) || void 0 === n ? void 0 : n.content,
          mode: "production",
          context: null == t || null === (r = t.json_content) || void 0 === r ? void 0 : r.content
        }), {
          beautify: !0,
          validationLevel: "soft"
        }).html : null == t ? void 0 : t.json_content;
      if (event.target.parentNode.parentNode.parentNode.parentNode.classList.add("importing"), W(!0), G(null == t ? void 0 : t.id), "emailTemplates" === R) x(e, t, !1), setTimeout(function () {
        W(!1), l(!1);
      }, 500);else if (void 0 === h) {
        var o = void 0 !== (null == y ? void 0 : y.id) ? null == y ? void 0 : y.id : "";
        (0, EP.saveBuilderData)(U, p, null == t ? void 0 : t.json_content, a, o, e).then(function (e) {
          setTimeout(function () {
            q(), m(function (e) {
              return !e;
            }), W(!1);
          }, 500);
        });
      } else {
        var i = function () {
          var e,
            n = (e = GO().m(function e() {
              return GO().w(function (e) {
                for (;;) switch (e.n) {
                  case 0:
                    m(function (e) {
                      return !e;
                    }), v({
                      email_body: a,
                      json_data: null == t ? void 0 : t.json_content
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
                  qO(o, r, a, i, l, "next", e);
                }
                function l(e) {
                  qO(o, r, a, i, l, "throw", e);
                }
                i(void 0);
              });
            });
          return function () {
            return n.apply(this, arguments);
          };
        }();
        i().then(function () {
          setTimeout(function () {
            m(function (e) {
              return !e;
            }), q(), W(!1);
          }, 500);
        });
      }
    },
    deleteTemplate: function (e) {
      (0, EP.deleteEmailTemplate)(e).then(function (e) {
        200 === e.code && L(function (e) {
          return !e;
        });
      });
    },
    refreshTemplate: B,
    conditions: A,
    automationData: h,
    emailData: y,
    importItemId: H,
    isEmailBuilderOpen: E,
    setStartFromScratch: C
  }))));
};

const $O = (0, g.memo)(ZO);

function KO() {
  return React.createElement("svg", {
    width: "19",
    height: "20",
    fill: "none",
    viewBox: "0 0 21 21",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#6F7075",
    stroke: "#6F7075",
    strokeWidth: ".2",
    d: "M15.844 1H5.156A4.156 4.156 0 001 5.156v10.688A4.156 4.156 0 005.156 20h10.688A4.156 4.156 0 0020 15.844V5.156A4.156 4.156 0 0015.844 1zm2.969 14.844a2.97 2.97 0 01-2.97 2.969H5.157a2.969 2.969 0 01-2.968-2.97V5.157a2.968 2.968 0 012.968-2.968h10.688a2.968 2.968 0 012.969 2.968v10.688z"
  }), React.createElement("path", {
    fill: "#6F7075",
    stroke: "#6F7075",
    strokeWidth: ".2",
    d: "M6.938 5.156H5.75a.594.594 0 00-.594.594v1.188c0 .327.266.593.594.593h1.188a.594.594 0 00.593-.593V5.75a.594.594 0 00-.593-.594zm0 4.157H5.75a.594.594 0 00-.594.593v1.188c0 .328.266.594.594.594h1.188a.594.594 0 00.593-.594V9.906a.594.594 0 00-.593-.594zm0 4.156H5.75a.594.594 0 00-.594.594v1.187c0 .328.266.594.594.594h1.188a.594.594 0 00.593-.594v-1.188a.594.594 0 00-.593-.593zm8.906-7.719H8.719v1.188h7.125V5.75zm0 4.156H8.719v1.188h7.125V9.906zm0 4.157H8.719v1.187h7.125v-1.188z"
  }));
}

const JO = (0, g.memo)(KO);

var XO = function (e) {
  var t = e.onClick,
    n = e.tooltip;
  return h().createElement("span", {
    className: "merge-tag-icon",
    onClick: t
  }, h().createElement(JO, null), h().createElement("p", {
    className: "personalized-tooltip"
  }, n));
};

const ek = (0, g.memo)(XO);

var tk = function (e) {
  var t = e.isOpen,
    n = e.children;
  return h().createElement("ul", {
    className: "personalization mintmrm-dropdown ".concat(t ? "show" : "")
  }, n);
};

const nk = (0, g.memo)(tk);

var rk = function (e) {
  var t = e.keyValue,
    n = e.isSubDropdownOpen,
    r = e.handleSubDropdown,
    a = e.label,
    o = e.openSubDropdown,
    i = e.children;
  return React.createElement(React.Fragment, null, React.createElement("li", {
    className: "has-sub-dropdown ".concat(n === t && o ? "show" : null, " "),
    onClick: function () {
      r(t);
    }
  }, a), n === t && o && i);
};

const ak = (0, g.memo)(rk);

var ok = function (e) {
  var t = e.handlePlaceholder,
    n = e.label,
    r = e.placeholder;
  return React.createElement(React.Fragment, null, React.createElement("li", {
    className: "group-item",
    onClick: function () {
      return t(r);
    }
  }, n));
};

const ik = (0, g.memo)(ok);
