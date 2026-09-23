// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function xF() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return CF(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (CF(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, CF(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, CF(d, "constructor", u), CF(u, "constructor", c), c.displayName = "GeneratorFunction", CF(u, a, "GeneratorFunction"), CF(d), CF(d, a, "Generator"), CF(d, r, function () {
    return this;
  }), CF(d, "toString", function () {
    return "[object Generator]";
  }), (xF = function () {
    return {
      w: o,
      m
    };
  })();
}

function CF(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  CF = function (e, t, n, r) {
    function o(t, n) {
      CF(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, CF(e, t, n, r);
}

function PF(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function OF(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        PF(o, r, a, i, l, "next", e);
      }
      function l(e) {
        PF(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function kF(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var jF = (0, p.createContext)(q.__unstableUseCompositeState);

const AF = (0, p.memo)(function (e) {
  var t,
    n,
    r,
    a = e.extId,
    o = void 0 === a ? null : a,
    i = e.showPreview,
    l = (0, y.useSelect)(function (e) {
      return {
        automationData: e(Lf).getAutomationData(),
        selectedStep: e(Lf).getSelectedStep(),
        dataLoader: e(Lf).getDataLoader(),
        updateClicked: e(Lf).getUpdateClicked(),
        zoomLevel: e(Lf).getZoomLevel(),
        activeAutoSave: e(Lf).getActivateAutoSave(),
        ctaProModalDisplay: e(Lf).getCtaProModalDisplay(),
        ctaProModalIcon: e(Lf).getCtaProModalIcon(),
        ctaProModalTitle: e(Lf).getCtaProModalTitle(),
        ctaProModalText: e(Lf).getCtaProModalText(),
        ctaProModalLink: e(Lf).getCtaProModalLink(),
        ctaProModalFeature: e(Lf).getCtaProModalFeature()
      };
    }, []),
    c = l.automationData,
    u = l.selectedStep,
    s = l.dataLoader,
    d = l.updateClicked,
    m = l.zoomLevel,
    f = l.activeAutoSave,
    v = l.ctaProModalDisplay,
    h = l.ctaProModalIcon,
    b = l.ctaProModalTitle,
    _ = l.ctaProModalText,
    w = l.ctaProModalLink,
    E = l.ctaProModalFeature;
  (0, p.useEffect)(function () {
    document.querySelector(".popover-slot").style.zIndex = "block" === v ? "-1" : "0";
  }, [v]);
  var S = (0, y.useDispatch)(),
    R = (0, g.useRef)(null),
    x = function (e, t) {
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
          if ("string" == typeof e) return kF(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? kF(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, p.useState)(), 2),
    C = x[0],
    P = x[1],
    O = (0, y.useDispatch)(Lf),
    k = O.setAutomationAuthorID,
    j = O.setAutomationFullData,
    A = O.setDataLoader,
    M = O.setSaveLoader,
    T = O.setActivateAutoSave,
    I = O.setCtaProModal,
    F = O.setOnShowStat;
  (0, p.useEffect)(function () {
    var e,
      t = !0;
    k(null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.current_userID);
    var n = "",
      r = window.location.hash;
    if (o ? n = o : r.includes("id=") && (n = r.split("id=")[1]), P(n), n) {
      var a = function () {
        var e = OF(xF().m(function e() {
          var r, a;
          return xF().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return f || A(!0), f && M(!0), e.n = 1, Pg(n);
              case 1:
                r = e.v, t && 200 === r.code && (a = r.data.data[0], j(a), A(!1), T(!1), M(!1), F(a.showAnalyticsStat));
              case 2:
                return e.a(2);
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();
      a();
    } else if ("#/preview" === r) {
      var l = localStorage.getItem("mint-automation-preview");
      if (l) {
        var c = JSON.parse(l);
        j(JSON.parse(c.automationData));
      }
      A(!1);
    } else if (i) {
      var u = localStorage.getItem("mint-automation-preview");
      if (u) {
        var s = JSON.parse(u);
        j(s.automationData);
      }
      A(!1);
    } else A(!1);
    return function () {
      t = !1;
    };
  }, [C, d, o]), (0, p.useEffect)(function () {
    var e;
    localStorage.getItem("mint-automation-preview") || "#/preview" !== window.location.hash || window.location.replace("".concat(null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.admin_url, "admin.php?page=mrm-admin#/automations/recipe"));
    var t = function () {
      localStorage.removeItem("mint-automation-preview");
    };
    return window.addEventListener("beforeunload", t), function () {
      window.removeEventListener("beforeunload", t), t();
    };
  }, []);
  var N = (0, q.__unstableUseCompositeState)({
      orientation: "vertical",
      wrap: "horizontal",
      shift: !0
    }),
    D = null !== (t = null == c ? void 0 : c.steps) && void 0 !== t ? t : [];
  return yI.A, (0, p.useCallback)(function () {
    var e = OF(xF().m(function e(t) {
      return xF().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            I(t, "");
          case 1:
            return e.a(2);
        }
      }, e);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), [v]), React.createElement(React.Fragment, null, s ? React.createElement(tO, {
    type: "table-full-ten"
  }) : React.createElement(jF.Provider, {
    value: N
  }, React.createElement(q.__unstableComposite, {
    state: N,
    role: "tree",
    "aria-label": null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.Automation,
    "aria-orientation": "vertical",
    className: "mintmrm-automation-step"
  }, React.createElement("div", {
    className: "mintmrm-automation-step__wrapper",
    ref: R,
    onWheel: function (e) {
      return function (e) {
        !e.ctrlKey && !e.metaKey || e.shiftKey || (e.cancelable && e.preventDefault(), (e.deltaY < 0 ? 1.25 : .8) < 1 ? m > .5 && S(Lf).zoomOut() : m < 2 && S(Lf).zoomIn());
      }(e);
    },
    style: {
      transform: "scale(".concat(m.toFixed(1), ")"),
      transformOrigin: "top center"
    }
  }, React.createElement(React.Fragment, null, D.length > 0 && "trigger" !== D[0].type && React.createElement(g.Fragment, null, React.createElement(hI, {
    step: ZC
  }), React.createElement(JI, {
    previousStepId: ""
  })), 0 === D.length ? React.createElement(g.Fragment, null, React.createElement(hI, {
    step: ZC
  })) : null == D ? void 0 : D.map(function (e, t) {
    return "trigger" === e.type && React.createElement(g.Fragment, {
      key: e.step_id
    }, React.createElement(nF, {
      step: e,
      stepIndex: t,
      isSelected: u && e.step_id === u.step_id
    }), React.createElement(JI, {
      previousStepId: t
    }));
  })), 0 === D.length ? React.createElement(g.Fragment, null) : D.map(function (e, t) {
    return "action" === e.type ? React.createElement(g.Fragment, {
      key: e.step_id
    }, React.createElement(nF, {
      step: e,
      stepIndex: t,
      isSelected: u && e.step_id === u.step_id
    }), "stopAutomation" === e.key ? React.createElement(aF, null) : React.createElement(JI, {
      previousStepId: t
    })) : "logical" === e.type && React.createElement(g.Fragment, {
      key: e.step_id
    }, React.createElement(nF, {
      step: e,
      stepIndex: t,
      isSelected: u && e.step_id === u.step_id
    }), React.createElement(oF, {
      stepIndex: t,
      step: e
    }), React.createElement(JI, {
      previousStepId: t
    }));
  }), React.createElement("div", {
    className: "mintmrm-automation-step__end"
  }, React.createElement("span", {
    className: ""
  }, React.createElement(_F, null), null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.Exit))), React.createElement(yF, null), v && React.createElement("div", {
    className: "mintmrm-container"
  }, React.createElement(RF.default, {
    icon: h,
    title: b,
    text: _,
    proLink: w,
    feature: E,
    setIsPro: I
  })), React.createElement(ZI, null))), !s && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "zooming-wrapper"
  }, React.createElement("button", {
    className: "zoom-btn plus-btn",
    onClick: function () {
      m < 2 && S(Lf).zoomIn();
    }
  }, React.createElement(EF, null)), React.createElement("button", {
    className: "zoom-btn minus-btn",
    onClick: function () {
      m > .5 && S(Lf).zoomOut();
    }
  }, React.createElement(wF, null)))), React.createElement(SF.default, {
    showVideo: "true",
    videoLink: "https://www.youtube.com/embed/3uCibk4eg_k",
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    automationEditor: !0,
    playLists: bF
  }));
});

function MF() {
  return React.createElement("svg", {
    width: "18",
    height: "18",
    fill: "none",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_2082_9858)"
  }, React.createElement("path", {
    fill: "#A7A8B3",
    d: "M15.398 15.182a2.604 2.604 0 01-2.601-2.602V6.463c.143-3.452 5.061-3.45 5.203 0v6.117a2.604 2.604 0 01-2.602 2.602zm0-9.914c-.659 0-1.195.536-1.195 1.195v6.117c.066 1.586 2.326 1.585 2.39 0V6.463c0-.66-.535-1.195-1.195-1.195zM2.602 15.182A2.604 2.604 0 010 12.58v-1.898c.143-3.452 5.061-3.45 5.203 0v1.898a2.604 2.604 0 01-2.601 2.602zm0-5.696c-.66 0-1.196.537-1.196 1.196v1.898c.066 1.586 2.326 1.585 2.39 0v-1.898c0-.66-.535-1.196-1.194-1.196zM9 15.182a2.604 2.604 0 01-2.602-2.602V2.596c.144-3.452 5.062-3.45 5.204 0v9.984A2.604 2.604 0 019 15.182zM9 1.4c-.66 0-1.195.537-1.195 1.196v9.984c.066 1.586 2.325 1.585 2.39 0V2.596C10.195 1.936 9.66 1.4 9 1.4zm9 15.891a.703.703 0 00-.703-.703H.703c-.933.037-.932 1.37 0 1.406h16.594a.703.703 0 00.703-.703z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_2082_9858"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h18v18H0z"
  }))));
}

const TF = (0, g.memo)(MF);

var IF = n(64761);

function FF() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return NF(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (NF(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, NF(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, NF(d, "constructor", u), NF(u, "constructor", c), c.displayName = "GeneratorFunction", NF(u, a, "GeneratorFunction"), NF(d), NF(d, a, "Generator"), NF(d, r, function () {
    return this;
  }), NF(d, "toString", function () {
    return "[object Generator]";
  }), (FF = function () {
    return {
      w: o,
      m
    };
  })();
}

function NF(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  NF = function (e, t, n, r) {
    function o(t, n) {
      NF(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, NF(e, t, n, r);
}

function DF(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function WF(e) {
  return zF.apply(this, arguments);
}

function zF() {
  return (e = FF().m(function e(t) {
    var n;
    return FF().w(function (e) {
      for (;;) if (0 === e.n) return n = "mrm/v1/automation/get-single-automation-recipe/".concat(t), e.a(2, l()({
        path: n
      }).then(function (e) {
        return e;
      }).then(function (e) {
        if (200 == e.code) return e.data;
      }));
    }, e);
  }), zF = function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        DF(o, r, a, i, l, "next", e);
      }
      function l(e) {
        DF(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  }).apply(this, arguments);
  var e;
}

var BF = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "22",
    height: "22",
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

const LF = (0, g.memo)(BF);

function VF() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return HF(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (HF(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, HF(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, HF(d, "constructor", u), HF(u, "constructor", c), c.displayName = "GeneratorFunction", HF(u, a, "GeneratorFunction"), HF(d), HF(d, a, "Generator"), HF(d, r, function () {
    return this;
  }), HF(d, "toString", function () {
    return "[object Generator]";
  }), (VF = function () {
    return {
      w: o,
      m
    };
  })();
}

function HF(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  HF = function (e, t, n, r) {
    function o(t, n) {
      HF(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, HF(e, t, n, r);
}

function GF(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function UF(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        GF(o, r, a, i, l, "next", e);
      }
      function l(e) {
        GF(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function qF(e, t) {
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
      if ("string" == typeof e) return YF(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? YF(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function YF(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
