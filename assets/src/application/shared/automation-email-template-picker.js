// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function nO() {
  return React.createElement("svg", {
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    stroke: "#A7A8B3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    clipPath: "url(#clip0_2099_7076)"
  }, React.createElement("path", {
    d: "M16.667 3.333H3.333a.833.833 0 00-.833.833V12.5c0 .46.373.833.833.833h13.334c.46 0 .833-.373.833-.833V4.166a.833.833 0 00-.833-.833zM5.836 16.666h8.333M7.5 13.333v3.333m5-3.333v3.333"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_2099_7076"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0z"
  }))));
}

const rO = (0, g.memo)(nO);

function aO() {
  return React.createElement("svg", {
    width: "13",
    height: "13",
    fill: "none",
    viewBox: "0 0 13 13",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "#A7A8B3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M5.8 1.35l-5 4.994 5 4.994m6-9.988l-5 4.994 5 4.994"
  }));
}

const oO = (0, g.memo)(aO);

function iO(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var lO = function (e) {
  var t,
    n,
    r,
    a,
    o,
    i,
    l,
    c,
    u = e.item,
    s = e.setIsPreview,
    d = e.saveTemplate,
    m = e.isImporting,
    p = (e.currentTab, function (e, t) {
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
          if ("string" == typeof e) return iO(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? iO(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!0), 2)),
    f = p[0],
    v = p[1],
    h = null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.is_mailmint_pro_license_active,
    y = "classic-editor" !== (null == u || null === (n = u.json_content) || void 0 === n ? void 0 : n.editor) ? DP()((0, FP.JsonToMjml)({
      data: null == u || null === (r = u.json_content) || void 0 === r ? void 0 : r.content,
      mode: "production",
      context: null == u || null === (a = u.json_content) || void 0 === a ? void 0 : a.content
    }), {
      beautify: !0,
      validationLevel: "soft"
    }).html : null == u || null === (o = u.json_content) || void 0 === o ? void 0 : o.content,
    b = (null == u ? void 0 : u.is_pro) && !h;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "preview-content-wrapper"
  }, React.createElement("div", {
    className: "preview-nav"
  }, React.createElement("div", {
    className: "preview-nav-left"
  }, React.createElement("span", {
    className: "exit-preview",
    onClick: function () {
      s(!1);
    }
  }, React.createElement(oO, null)), React.createElement("span", {
    className: "preview-nav-title"
  }, null == u ? void 0 : u.title)), React.createElement("div", {
    className: "preview-nav-middle"
  }, React.createElement("span", {
    className: f ? "active" : "",
    onClick: function () {
      return v(!0);
    }
  }, React.createElement(rO, null)), React.createElement("span", {
    className: f ? "" : "active",
    onClick: function () {
      return v(!1);
    }
  }, React.createElement(wP, null))), React.createElement("div", {
    className: "preview-nav-right"
  }, b ? React.createElement(React.Fragment, null, React.createElement("button", {
    className: "mintmrm-btn upgrade-to-pro-btn"
  }, React.createElement("a", {
    target: "_blank",
    href: Ey.CampaignOpenAILink
  }, null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.UpgradeToPRO))) : m ? React.createElement("button", {
    type: "button",
    className: "mintmrm-btn importing-now import-btn",
    disabled: !0
  }, null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.Applying, React.createElement("span", {
    className: "mintmrm-loader"
  })) : React.createElement("button", {
    type: "button",
    className: "select-this mintmrm-btn",
    disabled: u.is_pro && !h,
    onClick: function () {
      var e;
      return d("classic-editor" === (null == u || null === (e = u.json_content) || void 0 === e ? void 0 : e.editor) ? "classic-editor" : "advanced-builder", u);
    }
  }, null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.Apply))), React.createElement("div", {
    className: "preview-content"
  }, React.createElement("div", {
    className: "template-modal-overflow"
  }, React.createElement("div", {
    className: "".concat(f ? "mint-desktop-view" : "mobile-view")
  }, React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: y
    }
  }))))));
};

const cO = (0, g.memo)(lO);

var uO = function (e) {
  var t = e.width,
    n = void 0 === t ? "22" : t,
    r = e.height,
    a = void 0 === r ? "22" : r;
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: n,
    height: a,
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "11",
    fill: "#2FCF5C"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M15.209 9.236l-1.587.396-1.983-2.471a.926.926 0 00-1.445 0L8.21 9.63l-1.618-.395a.933.933 0 00-1.124 1.124l1.093 3.842a.618.618 0 00.617.451h7.412a.618.618 0 00.618-.45l1.1-3.843a.932.932 0 00-1.1-1.124zM5.172 8.57a.772.772 0 100-1.545.772.772 0 000 1.544zm11.427 0a.772.772 0 100-1.545.772.772 0 000 1.544zm-5.714-2.626a.772.772 0 100-1.544.772.772 0 000 1.544zm3.706 10.964H7.18a.618.618 0 010-1.236h7.411a.618.618 0 110 1.236z"
  })));
};

const sO = (0, g.memo)(uO);

var dO = function (e) {
  var t,
    n,
    r,
    a,
    o,
    i,
    l,
    c = e.isPro,
    u = e.id,
    s = e.title,
    d = e.thumbnailImage,
    m = e.setPreviewId,
    p = e.setIsPreview,
    f = e.template,
    v = e.saveTemplate,
    g = (e.deleteTemplate, e.isImporting),
    h = e.currentTab,
    y = e.importItemId,
    b = null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.is_mailmint_pro_license_active,
    _ = c && !(null !== (n = window) && void 0 !== n && null !== (n = n.MRM_Vars) && void 0 !== n && n.is_mailmint_pro_license_active);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "single-modal-content"
  }, React.createElement("div", {
    className: "hoverlay"
  }, _ ? React.createElement(React.Fragment, null, React.createElement("a", {
    target: "_blank",
    href: Ey.CampaignOpenAILink
  }, React.createElement("button", {
    className: "mintmrm-btn"
  }, React.createElement(sO, null), null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.UpgradeToPRO))) : g && u === y ? React.createElement("button", {
    type: "button",
    className: "mintmrm-btn importing-now import-btn",
    disabled: !0
  }, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.Applying, React.createElement("span", {
    className: "mintmrm-loader"
  })) : React.createElement("button", {
    type: "button",
    className: "select-this mintmrm-btn",
    disabled: c && !b || g,
    onClick: function () {
      var e, t;
      return t = "classic-editor" === (null == f || null === (e = f.json_content) || void 0 === e ? void 0 : e.editor) ? "classic-editor" : "advanced-builder", void v(t, f);
    }
  }, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.Apply), !_ && React.createElement("button", {
    type: "button",
    className: "mintmrm-btn ".concat(_ && "my-templates" !== h ? "preview-btn" : "", " ").concat(g && u === y ? "import-btn" : ""),
    onClick: function () {
      m(u), p(!0);
    },
    disabled: g
  }, null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.Preview)), React.createElement("div", null, React.createElement("div", {
    className: "modal-content-thumbnail-wrapper"
  }, React.createElement("img", {
    className: "modal-content-thumbnail",
    src: "my-templates" === h ? (null == f || null === (l = f.thumbnail) || void 0 === l ? void 0 : l.url) || "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDk2IDYyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48c3R5bGU+LnN0MSwuc3Qye2ZpbGw6I2UwZTBlMH08L3N0eWxlPjxwYXRoIGQ9Ik0zMiA0OGg0MzJ2ODBIMzJ6IiBjbGFzcz0ic3QxIi8+PHBhdGggZD0iTTAgMHY2MjBoNDk2VjBIMHptMTYgNjA0VjMyaDQ2NHY1NzJIMTZ6IiBjbGFzcz0ic3QyIi8+PHBhdGggZD0iTTMyIDE2MGgyMDh2MTIwSDMyem0yMjQgMGgyMDh2MTIwSDI1NnoiIGNsYXNzPSJzdDIiLz48cGF0aCBkPSJNMzIgMzA4aDIwOHY4SDMyem0wIDIwaDIwOHY4SDMyem0yMjQtMjBoMjA4djhIMjU2em0wIDIwaDIwOHY4SDI1NnpNMzIgMzQ4aDIwOHY4SDMyem0wIDIwaDIwOHY4SDMyem0yMjQtMjBoMjA4djhIMjU2em0wIDIwaDIwOHY4SDI1NnpNMzIgMzg4aDIwOHY4SDMyem0wIDIwaDIwOHY4SDMyem0yMjQtMjBoMjA4djhIMjU2em0wIDIwaDIwOHY4SDI1NnpNMzIgNDI4aDIwOHY4SDMyem0wIDIwaDIwOHY4SDMyem0yMjQtMjBoMjA4djhIMjU2em0wIDIwaDIwOHY4SDI1NnpNMzIgNDY4aDIwOHY4SDMyem0wIDIwaDIwOHY4SDMyem0yMjQtMjBoMjA4djhIMjU2em0wIDIwaDIwOHY4SDI1NnpNMzIgNTA4aDIwOHY4SDMyem0wIDIwaDIwOHY4SDMyem0yMjQtMjBoMjA4djhIMjU2em0wIDIwaDIwOHY4SDI1NnoiIGNsYXNzPSJzdDEiLz48L3N2Zz4=" : d,
    alt: "Thumbnail Image"
  })), React.createElement("p", {
    className: "modal-content-title"
  }, s))));
};

const mO = (0, g.memo)(dO);

function pO(e) {
  return pO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, pO(e);
}

function fO() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return vO(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (vO(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, vO(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, vO(d, "constructor", u), vO(u, "constructor", c), c.displayName = "GeneratorFunction", vO(u, a, "GeneratorFunction"), vO(d), vO(d, a, "Generator"), vO(d, r, function () {
    return this;
  }), vO(d, "toString", function () {
    return "[object Generator]";
  }), (fO = function () {
    return {
      w: o,
      m
    };
  })();
}

function vO(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  vO = function (e, t, n, r) {
    function o(t, n) {
      vO(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, vO(e, t, n, r);
}

function gO(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function hO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? gO(Object(n), !0).forEach(function (t) {
      yO(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gO(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function yO(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != pO(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != pO(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == pO(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function bO(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function _O() {
  return (e = fO().m(function e(t, n, r, a, o) {
    var i, c;
    return fO().w(function (e) {
      for (;;) switch (e.n) {
        case 0:
          return i = "mrm/v1/email/templates?order-by=".concat(r, "&order-type=").concat(a, "&page=").concat(n, "&per-page=").concat(t).concat(o), c = {
            method: "GET"
          }, e.n = 1, l()(hO({
            path: i
          }, c));
        case 1:
          return e.a(2, e.v);
      }
    }, e);
  }), _O = function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        bO(o, r, a, i, l, "next", e);
      }
      function l(e) {
        bO(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  }).apply(this, arguments);
  var e;
}

function wO(e) {
  return function (e) {
    if (Array.isArray(e)) return RO(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || SO(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function EO(e, t) {
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
  }(e, t) || SO(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function SO(e, t) {
  if (e) {
    if ("string" == typeof e) return RO(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? RO(e, t) : void 0;
  }
}

function RO(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var xO = function (e) {
  var t,
    n,
    r = e.currentTab,
    a = e.isPreview,
    o = e.setIsPreview,
    i = (e.openTemplateBuilder, e.isImporting),
    l = e.saveTemplate,
    c = e.deleteTemplate,
    u = e.setTemplate,
    s = (e.refreshTemplate, e.conditions),
    d = (e.automationData, e.emailData, e.importItemId),
    m = (e.isEmailBuilderOpen, e.setStartFromScratch),
    p = EO((0, g.useState)([]), 2),
    f = p[0],
    v = p[1],
    h = EO((0, g.useState)([]), 2),
    y = h[0],
    _ = h[1],
    w = EO((0, g.useState)(!1), 2),
    E = w[0],
    S = w[1],
    R = EO((0, g.useState)(null), 2),
    x = R[0],
    C = R[1],
    P = EO((0, g.useState)(!1), 2),
    O = (P[0], P[1]),
    k = EO((0, g.useState)(1), 2),
    j = k[0],
    A = k[1],
    M = EO((0, g.useState)(!1), 2),
    T = M[0],
    I = M[1],
    F = EO((0, g.useState)("created_at"), 2),
    N = F[0],
    D = (F[1], EO((0, g.useState)("desc"), 2)),
    W = D[0],
    z = (D[1], EO((0, g.useState)(""), 2)),
    B = z[0],
    L = (z[1], (0, g.useCallback)(function () {
      1 === j && S(!0), O(!0), function (e, t, n, r, a) {
        return _O.apply(this, arguments);
      }(10, j, N, W, B).then(function (e) {
        var t,
          n,
          r = null != e && null !== (t = e.results) && void 0 !== t && t.templates ? null == e || null === (n = e.results) || void 0 === n ? void 0 : n.templates : [];
        0 === (null == r ? void 0 : r.length) ? (I(!0), O(!1), S(!1)) : (v([].concat(wO(f), wO(r))), _([].concat(wO(y), wO(r))), S(!1), A(function (e) {
          return e + 1;
        }));
      }).catch(function (e) {
        return console.log(e);
      }), O(!1);
    }, [j])),
    V = (0, g.useCallback)(function () {
      0 === j && (v([]), S(!0), S(!0)), O(!0), (0, EP.fetchDefaultEmailTemplate)(10, j).then(function (e) {
        var t = null != e && e.data ? null == e ? void 0 : e.data : [];
        0 === s.length && _([].concat(wO(y), wO(t))), 0 === (null == t ? void 0 : t.length) ? (I(!0), O(!1), S(!1), A(function (e) {
          return e + 10;
        })) : (v([].concat(wO(f), wO(t))), O(!1), S(!1), A(function (e) {
          return e + 10;
        }));
      }).catch(function (e) {
        return console.log(e);
      });
    }, [j]);
  (0, g.useEffect)(function () {
    S(!0), "my-templates" === r ? (v([]), _([]), S(!1), I(!1), A(1)) : (S(!1), v([]), _([]), A(0), I(!1));
  }, [r]);
  var H = f.find(function (e) {
    return (null == e ? void 0 : e.id) === x;
  }) || {};
  return (0, g.useEffect)(function () {
    if (s.length > 0 && "brand" === r) {
      var e = s.find(function (e) {
          return "plan" === e.label;
        }),
        t = s.find(function (e) {
          return "industry" === e.label;
        }),
        n = s.find(function (e) {
          return "emailCategories" === e.label;
        }),
        a = function (e, t) {
          return e.items.includes("Free") && !e.items.includes("Paid") ? null == t ? void 0 : t.filter(function (e) {
            return !(null != e && e.is_pro);
          }) : !e.items.includes("Free") && e.items.includes("Paid") ? null == t ? void 0 : t.filter(function (e) {
            return null == e ? void 0 : e.is_pro;
          }) : t;
        };
      if (!e || t || n) {
        if (e && t && !n) {
          var o = null == f ? void 0 : f.filter(function (e) {
            var n;
            return null == t || null === (n = t.items) || void 0 === n ? void 0 : n.includes(null == e ? void 0 : e.industry[0]);
          });
          _(a(e, o));
        } else if (e && !t && n) {
          var i = null == f ? void 0 : f.filter(function (e) {
            var t;
            return null == n || null === (t = n.items) || void 0 === t ? void 0 : t.includes(null == e ? void 0 : e.emailCategories[0]);
          });
          _(a(e, i));
        } else if (e && t && n) {
          var l = null == f ? void 0 : f.filter(function (e) {
              var t;
              return null == n || null === (t = n.items) || void 0 === t ? void 0 : t.includes(null == e ? void 0 : e.emailCategories[0]);
            }),
            c = null == l ? void 0 : l.filter(function (e) {
              var n;
              return null == t || null === (n = t.items) || void 0 === n ? void 0 : n.includes(null == e ? void 0 : e.industry[0]);
            });
          _(a(e, c));
        } else if (!e && t && n) {
          var u = null == f ? void 0 : f.filter(function (e) {
              var t;
              return null == n || null === (t = n.items) || void 0 === t ? void 0 : t.includes(null == e ? void 0 : e.emailCategories[0]);
            }),
            d = null == u ? void 0 : u.filter(function (e) {
              var n;
              return null == t || null === (n = t.items) || void 0 === n ? void 0 : n.includes(null == e ? void 0 : e.industry[0]);
            });
          _(d);
        } else if (e || !t || n) {
          if (!e && !t && n) {
            var m = null == f ? void 0 : f.filter(function (e) {
              var t;
              return null == n || null === (t = n.items) || void 0 === t ? void 0 : t.includes(null == e ? void 0 : e.emailCategories[0]);
            });
            _(m);
          }
        } else {
          var p = null == f ? void 0 : f.filter(function (e) {
            var n;
            return null == t || null === (n = t.items) || void 0 === n ? void 0 : n.includes(null == e ? void 0 : e.industry[0]);
          });
          _(p);
        }
      } else _(a(e, f));
    } else S(!1), _(f);
  }, [s, f]), React.createElement(React.Fragment, null, React.createElement("div", {
    className: "modal-content-".concat(r)
  }, E ? React.createElement(tO, {
    type: "table"
  }) : React.createElement(React.Fragment, null, a ? React.createElement(React.Fragment, null, React.createElement(cO, {
    item: H,
    setIsPreview: o,
    isImporting: i,
    saveTemplate: l,
    currentTab: r
  })) : React.createElement(React.Fragment, null, 0 !== f.length && React.createElement("p", {
    className: "modal-content-text"
  }, (0, b.__)("Showing ".concat(y.length, " templates"))), React.createElement("div", {
    className: "modal-content-wrapper"
  }, React.createElement("div", {
    className: "start-from-scratch"
  }, React.createElement($P, null), React.createElement("button", {
    type: "button",
    className: "mintmrm-btn modal-btn",
    onClick: function () {
      l("advanced-builder", QP.defaultEmailTemplate), m && m(function (e) {
        return !e;
      });
    },
    disabled: i
  }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.StartFromScratch, i && React.createElement("span", {
    className: "mintmrm-loader"
  }))), y.map(function (e) {
    return React.createElement(mO, {
      key: "".concat(e.id).concat(e.title),
      template: e,
      isPro: null == e ? void 0 : e.is_pro,
      thumbnailImage: null == e ? void 0 : e.thumbnail_image,
      id: null == e ? void 0 : e.id,
      title: null == e ? void 0 : e.title,
      setPreviewId: C,
      setIsPreview: o,
      isImporting: i,
      saveTemplate: l,
      deleteTemplate: c,
      setTemplate: u,
      currentTab: r,
      importItemId: d
    });
  }), "my-templates" === r && !T && React.createElement(XP, {
    loadMore: L
  }), "brand" === r && !T && React.createElement(XP, {
    loadMore: V
  }), 0 === (null == y ? void 0 : y.length) && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "no-item-found"
  }, React.createElement("span", null, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NoTemplatesFound)))), !T && React.createElement("span", {
    className: "mintmrm-infinite-scroll-loader"
  })))));
};

const CO = (0, g.memo)(xO);

var PO = function (e) {
  var t = e.heading,
    n = e.description;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "modal-header"
  }, React.createElement("h4", {
    className: "modal-heading"
  }, t), React.createElement("p", {
    className: "modal-description"
  }, n)));
};

const OO = (0, g.memo)(PO);

var kO = function (e) {
  var t,
    n,
    r = e.currentTab,
    a = e.setCurrentTab,
    o = e.setIsPreview,
    i = function (e) {
      a(e), o(!1);
    };
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "modal-nav"
  }, React.createElement("ul", {
    className: "template-filter"
  }, React.createElement("li", {
    className: "brand" === r ? "active" : "",
    onClick: function () {
      return i("brand");
    }
  }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.BrandedTemplates), React.createElement("li", {
    className: "my-templates" === r ? "active" : "",
    onClick: function () {
      return i("my-templates");
    }
  }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.MyTemplates))));
};

const jO = (0, g.memo)(kO);

function AO() {
  return React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V3.75H15.75C16.1642 3.75 16.5 4.08579 16.5 4.5C16.5 4.91422 16.1642 5.25 15.75 5.25H12.75V6C12.75 6.41421 12.4142 6.75 12 6.75C11.5858 6.75 11.25 6.41421 11.25 6V3C11.25 2.58579 11.5858 2.25 12 2.25ZM1.5 4.5C1.5 4.08579 1.83579 3.75 2.25 3.75H9C9.41423 3.75 9.75 4.08579 9.75 4.5C9.75 4.91422 9.41423 5.25 9 5.25H2.25C1.83579 5.25 1.5 4.91421 1.5 4.5ZM6 6.75C6.41421 6.75 6.75 7.08579 6.75 7.5V10.5C6.75 10.9142 6.41421 11.25 6 11.25C5.58579 11.25 5.25 10.9142 5.25 10.5V9.75H2.25C1.83579 9.75 1.5 9.41423 1.5 9C1.5 8.58577 1.83579 8.25 2.25 8.25H5.25V7.5C5.25 7.08579 5.58579 6.75 6 6.75ZM8.25 9C8.25 8.58577 8.58577 8.25 9 8.25H15.75C16.1642 8.25 16.5 8.58577 16.5 9C16.5 9.41423 16.1642 9.75 15.75 9.75H9C8.58577 9.75 8.25 9.41423 8.25 9ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V12.75H15.75C16.1642 12.75 16.5 13.0858 16.5 13.5C16.5 13.9142 16.1642 14.25 15.75 14.25H12.75V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12C11.25 11.5858 11.5858 11.25 12 11.25ZM1.5 13.5C1.5 13.0858 1.83579 12.75 2.25 12.75H9C9.41423 12.75 9.75 13.0858 9.75 13.5C9.75 13.9142 9.41423 14.25 9 14.25H2.25C1.83579 14.25 1.5 13.9142 1.5 13.5Z",
    fill: "#2D3149"
  }));
}

function MO(e) {
  return function (e) {
    if (Array.isArray(e)) return TO(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return TO(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? TO(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function TO(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
