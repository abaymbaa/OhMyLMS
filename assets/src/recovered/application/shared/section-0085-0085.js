// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function TD() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return ID(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (ID(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, ID(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, ID(d, "constructor", u), ID(u, "constructor", c), c.displayName = "GeneratorFunction", ID(u, a, "GeneratorFunction"), ID(d), ID(d, a, "Generator"), ID(d, r, function () {
    return this;
  }), ID(d, "toString", function () {
    return "[object Generator]";
  }), (TD = function () {
    return {
      w: o,
      m
    };
  })();
}

function ID(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  ID = function (e, t, n, r) {
    function o(t, n) {
      ID(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, ID(e, t, n, r);
}

function FD(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

var ND = function (e) {
  var t = e.handleCreate,
    n = e.setShowRecipes,
    r = e.automationFor,
    a = void 0 === r ? "lesson" : r,
    o = e.handleToggleEditor,
    i = e.setShowPreview,
    l = function () {
      var e,
        n = (e = TD().m(function e(n) {
          return TD().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return e.n = 1, t(n);
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
              FD(o, r, a, i, l, "next", e);
            }
            function l(e) {
              FD(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function (e) {
        return n.apply(this, arguments);
      };
    }();
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    align: "center",
    gap: 2,
    justify: "flex-start"
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: function () {
      n(!1);
    }
  }, React.createElement(I.FlexWP, {
    justify: "start",
    gap: 2
  }, React.createElement("svg", {
    className: "omlms-back-arrow-btn-icon",
    width: "19",
    height: "16",
    fill: "none",
    viewBox: "0 0 19 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M8.707 13.793a1 1 0 11-1.414 1.414L1.5 9.414a2 2 0 010-2.828L7.293.793a1 1 0 111.414 1.414L3.914 7H18a1 1 0 110 2H3.914l4.793 4.793z"
  })), React.createElement("span", null, (0, b.__)("Back", "ohmylms")))), React.createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Pre-build Automation Recipes", "ohmylms"))), React.createElement(I.CardWP, {
    padding: "24px",
    variant: "secondary",
    margin: "16px 0",
    isBorderless: !0
  }, React.createElement(I.FlexWP, {
    align: "stretch",
    justify: "start",
    gap: 4,
    wrap: "wrap"
  }, React.createElement(KN, {
    handleCreate: l
  }), RD[a].map(function (e, t) {
    return React.createElement(MD, {
      key: (null == e ? void 0 : e.id) + t,
      recipe: e,
      handleCreate: l,
      handleToggleEditor: o,
      setShowPreview: i
    });
  }))));
};

const DD = (0, g.memo)(ND);

function WD(e) {
  return WD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, WD(e);
}

function zD() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return BD(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (BD(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, BD(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, BD(d, "constructor", u), BD(u, "constructor", c), c.displayName = "GeneratorFunction", BD(u, a, "GeneratorFunction"), BD(d), BD(d, a, "Generator"), BD(d, r, function () {
    return this;
  }), BD(d, "toString", function () {
    return "[object Generator]";
  }), (zD = function () {
    return {
      w: o,
      m
    };
  })();
}

function BD(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  BD = function (e, t, n, r) {
    function o(t, n) {
      BD(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, BD(e, t, n, r);
}

function LD(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function VD(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        LD(o, r, a, i, l, "next", e);
      }
      function l(e) {
        LD(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function HD(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function GD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? HD(Object(n), !0).forEach(function (t) {
      UD(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : HD(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function UD(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != WD(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != WD(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == WD(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function qD(e, t) {
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
      if ("string" == typeof e) return YD(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? YD(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function YD(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var QD = function (e) {
  e.isOpen;
  var t = e.onClose,
    n = e.automationFor,
    r = e.contentId,
    a = e.contentName,
    o = qD((0, g.useState)(!1), 2),
    i = o[0],
    c = o[1],
    u = qD((0, g.useState)(!1), 2),
    s = u[0],
    d = u[1],
    m = qD((0, g.useState)(null), 2),
    p = m[0],
    f = m[1],
    v = qD((0, g.useState)(!1), 2),
    h = v[0],
    _ = v[1],
    w = qD((0, g.useState)(!1), 2),
    E = w[0],
    S = w[1],
    R = (0, y.useDispatch)(T.default),
    x = (0, y.useDispatch)(Lf),
    C = x.setSaveLoader,
    P = x.setAutomationFullData,
    O = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    k = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    j = (0, z.A)(),
    A = j.openNotificationWithIcon,
    M = j.contextHolder,
    F = function (e) {
      var t = {};
      e.steps.forEach(function (e) {
        t[e.step_id] = (0, de.A)();
      });
      var n = e.steps.map(function (e) {
        return GD(GD({}, e), {}, {
          step_id: t[e.step_id],
          next_step_id: t[e.next_step_id] || null
        });
      });
      return GD(GD({}, e), {}, {
        steps: n
      });
    },
    N = function () {
      if (f(null), i) return c(!1), _(!1), void S(!1);
      t();
    },
    D = function () {
      c(!i), _(!1);
    },
    W = function () {
      var e = VD(zD().m(function e(t) {
        var n, a, o;
        return zD().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (r) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, d(!0), n = {
                name: "Untitled",
                status: "active",
                steps: [],
                atMostDate: [],
                showAnalyticsStat: !1,
                author: "1",
                trigger_name: ""
              }, t && ((n = F(t)).isImport = !0, delete n.id), e.n = 2, l()({
                path: "creator-lms/v1/automation/content/".concat(r),
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(n)
              });
            case 2:
              "success" === (null == (a = e.v) ? void 0 : a.status) && null != a && a.automation_id && (f(null == a ? void 0 : a.automation_id), D(), S(!1), A("success", (0, b.__)("Automation Created successfully.", "ohmylms"))), e.n = 4;
              break;
            case 3:
              e.p = 3, o = e.v, console.error("Error creating automation:", o), A("error", (0, b.__)("Something went wrong.", "ohmylms"));
            case 4:
              return e.p = 4, d(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    B = function () {
      var e = VD(zD().m(function e(t, n, a) {
        var o, i, c, u;
        return zD().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (n && r) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, C(!0), n.status = t || "draft", null != n && n.showAnalyticsStat && delete n.showAnalyticsStat, e.n = 2, l()({
                path: "creator-lms/v1/automation/content/".concat(r),
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(n)
              });
            case 2:
              null != (o = e.v) && o.automation_id && null != o && o.data && (P(null == o ? void 0 : o.data), c = (0, b.__)("Automation updated successfully.", "ohmylms"), a && ("pause" === t && (c = (0, b.__)("Automation paused successfully.", "ohmylms")), "active" === t && (c = (0, b.__)("Automation activated successfully.", "ohmylms"))), "draft" === (null == o || null === (i = o.data) || void 0 === i ? void 0 : i.status) && (c = (0, b.__)("Automation saved as draft successfully.", "ohmylms")), A("success", c)), e.n = 4;
              break;
            case 3:
              e.p = 3, u = e.v, console.error("Error updating automation:", u), A("error", (0, b.__)("Something went wrong.", "ohmylms"));
            case 4:
              return e.p = 4, C(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function (t, n, r) {
        return e.apply(this, arguments);
      };
    }();
  return (0, g.useEffect)(function () {
    var e, t, o, i;
    t = n, GN.forEach(function (e) {
      lI(e);
    }), "course" === t && (iI(kN), iI(AN), iI(TN), iI(FN)), "lesson" === t && iI(DN), "assignment" === t && (iI(zN), iI(LN)), "quiz" === t && iI(HN), R.setAutomationFor({
      automationFor: n,
      contentId: r,
      contentName: a
    }), null !== (e = window) && void 0 !== e && e.MRM_Vars && null !== (o = window.MRM_Vars) && void 0 !== o && o.mint_trans && null !== (i = window.MRM_Vars) && void 0 !== i && null !== (i = i.mint_trans) && void 0 !== i && i.UnlockWithPremium && (window.MRM_Vars.mint_trans.UnlockWithPremium = (0, b.__)("Upgrade Mail Mint to Pro", "ohmylms"));
    var l = document.querySelector("#email-preview-btn");
    l && l.addEventListener("click", function () {
      var e = document.querySelector(".omlms-automation-editor-open"),
        t = e.querySelector(".mintmrm-template-modal");
      if (t && e) {
        for (var n = new Set(), r = t; r && r !== e;) n.add(r), r = r.parentElement;
        n.add(e), e.querySelectorAll("*").forEach(function (e) {
          n.has(e) || (e.style.display = "none");
        });
      }
    });
  }, [n]), (0, g.useEffect)(function () {
    O && A(k, O);
  }, [O]), React.createElement(React.Fragment, null, M, React.createElement(I.ModalWP, {
    isDismissible: !1,
    __experimentalHideHeader: !0,
    size: "fill",
    style: {
      maxWidth: "1500px"
    },
    overlayClassName: "omlms-modal-wrap omlms-automation-modal-wrap ".concat(i ? "omlms-automation-editor-open" : "omlms-automation-lists"),
    shouldCloseOnEsc: !i,
    shouldCloseOnClickOutside: !i,
    onRequestClose: N,
    className: "omlms-automation-modal-wrapper"
  }, i ? React.createElement(React.Fragment, null, React.createElement(nN, {
    headerProps: {
      extHandleNavigation: D,
      extSaveAutomation: B,
      extHandlePause: function (e, t) {
        var n = "pause";
        e.target.checked && (n = "active"), B(n, t, !0);
      },
      extHandleImportTemplate: W
    },
    automationId: E ? null : p,
    showPreview: E
  })) : h ? React.createElement(React.Fragment, null, React.createElement(DD, {
    handleCreate: W,
    setShowRecipes: _,
    automationFor: n,
    handleToggleEditor: D,
    setShowPreview: S
  })) : React.createElement(React.Fragment, null, React.createElement(PN, {
    isCreating: s,
    handleShowRecipes: function () {
      _(!0);
    },
    automationFor: n,
    handleToggleEditor: D,
    contentId: r,
    setAutomationId: f,
    handleClose: N
  }))));
};

const ZD = (0, g.memo)(QD);

function $D(e) {
  return $D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $D(e);
}

function KD(e) {
  if (null != e) {
    var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
      n = 0;
    if (t) return t.call(e);
    if ("function" == typeof e.next) return e;
    if (!isNaN(e.length)) return {
      next: function () {
        return e && n >= e.length && (e = void 0), {
          value: e && e[n++],
          done: !e
        };
      }
    };
  }
  throw new TypeError($D(e) + " is not iterable");
}

function JD() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return XD(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (XD(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, XD(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, XD(d, "constructor", u), XD(u, "constructor", c), c.displayName = "GeneratorFunction", XD(u, a, "GeneratorFunction"), XD(d), XD(d, a, "Generator"), XD(d, r, function () {
    return this;
  }), XD(d, "toString", function () {
    return "[object Generator]";
  }), (JD = function () {
    return {
      w: o,
      m
    };
  })();
}

function XD(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  XD = function (e, t, n, r) {
    function o(t, n) {
      XD(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, XD(e, t, n, r);
}

function eW(e) {
  return function (e) {
    if (Array.isArray(e)) return uW(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || cW(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function tW(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function nW(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? tW(Object(n), !0).forEach(function (t) {
      rW(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tW(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function rW(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != $D(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != $D(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == $D(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function aW(e, t) {
  var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = cW(e)) || t && e && "number" == typeof e.length) {
      n && (e = n);
      var r = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: a
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    i = !0,
    l = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return i = e.done, e;
    },
    e: function (e) {
      l = !0, o = e;
    },
    f: function () {
      try {
        i || null == n.return || n.return();
      } finally {
        if (l) throw o;
      }
    }
  };
}

function oW(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function iW(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        oW(o, r, a, i, l, "next", e);
      }
      function l(e) {
        oW(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function lW(e, t) {
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
  }(e, t) || cW(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function cW(e, t) {
  if (e) {
    if ("string" == typeof e) return uW(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? uW(e, t) : void 0;
  }
}

function uW(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
