// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var r = {};

n.r(r), n.d(r, {
  addLogicalStep: () => ev,
  addStep: () => Xf,
  closeActivationPanel: () => Zf,
  closeSidebar: () => Kf,
  deleteConditionalStep: () => av,
  deleteStep: () => rv,
  openSidebar: () => $f,
  registerStepType: () => uv,
  selectStep: () => tv,
  setActivateAutoSave: () => xv,
  setAtMostDate: () => Cv,
  setAutomationAuthorID: () => iv,
  setAutomationFullData: () => nv,
  setAutomationName: () => ov,
  setAutomationStatus: () => lv,
  setAutomationTriggerName: () => cv,
  setContactCondition: () => Sv,
  setCtaProModal: () => Ev,
  setDataLoader: () => vv,
  setEmailCondition: () => wv,
  setErrors: () => fv,
  setInserterPopover: () => Jf,
  setMaybeSave: () => yv,
  setOnShowStat: () => hv,
  setOpenAIModal: () => _v,
  setSaveLoader: () => gv,
  setUpdateClicked: () => bv,
  setsegmentCondition: () => Rv,
  unregisterStepType: () => sv,
  unregisterStepTypeExcept: () => dv,
  unregisterTriggerExcept: () => mv,
  updateStepArgs: () => pv,
  zoomIn: () => Pv,
  zoomOut: () => Ov
});

var a = {};

n.r(a), n.d(a, {
  getActivateAutoSave: () => ig,
  getAnalyticsStat: () => zv,
  getAtMostDate: () => gg,
  getAutomationData: () => Bv,
  getAutomationSaved: () => Lv,
  getContactConditions: () => cg,
  getContext: () => Tv,
  getContextStep: () => Iv,
  getCtaProModalDisplay: () => sg,
  getCtaProModalFeature: () => vg,
  getCtaProModalIcon: () => dg,
  getCtaProModalLink: () => fg,
  getCtaProModalText: () => pg,
  getCtaProModalTitle: () => mg,
  getDataLoader: () => Kv,
  getEmailConditions: () => lg,
  getErrors: () => Zv,
  getInserterActionSteps: () => Nv,
  getInserterLogicalSteps: () => Dv,
  getInserterPopover: () => Wv,
  getMaybeSave: () => Xv,
  getOpenAIModal: () => tg,
  getOpenAIModalField: () => ng,
  getOpenAIModalHeadingText: () => rg,
  getOpenAIModalPromptType: () => ag,
  getSaveLoader: () => Jv,
  getSegmentConditions: () => ug,
  getSelectedLogicalStepIndex: () => qv,
  getSelectedStep: () => Vv,
  getSelectedStepCondition: () => Uv,
  getSelectedStepIndex: () => Gv,
  getSelectedStepType: () => Qv,
  getStepById: () => Hv,
  getStepError: () => $v,
  getStepType: () => Yv,
  getSteps: () => Fv,
  getUpdateClicked: () => eg,
  getZoomLevel: () => og,
  isActivationPanelOpened: () => Mv,
  isFeatureActive: () => jv,
  isInserterSidebarOpened: () => Av,
  isSidebarOpened: () => kv
});

var o = n(5338),
  i = n(12842),
  l = n.n(i);

function c(e) {
  return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, c(e);
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? u(Object(n), !0).forEach(function (t) {
      d(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function d(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != c(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != c(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == c(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

l().use(l().createNonceMiddleware(creator_lms_params.nonce)), l().use(l().createRootURLMiddleware("".concat(creator_lms_params.api_url))), l().use(function (e, t) {
  return e.headers = s(s({}, e.headers), {}, {
    "X-WP-Nonce": creator_lms_params.nonce
  }), t(e);
});

const m = l();

var p = n(91386),
  f = n(47767),
  v = n(84976),
  g = n(41594),
  h = n.n(g),
  y = n(37562),
  b = n(12470),
  _ = n(68119),
  w = n(38221),
  E = n.n(w),
  S = n(13971),
  R = n(89709),
  x = n(4353),
  C = n.n(x),
  P = n(71075),
  O = n(91813),
  k = n.n(O),
  j = n(604),
  A = n(2543),
  M = n.n(A),
  T = n(86169),
  I = n(38093),
  F = n(20378),
  N = n(63386),
  D = n(94490),
  W = n(15468),
  z = n(71046),
  B = n(88935),
  L = n(77558);

n(22563);

var V = n(6425),
  H = function (e) {
    return e.showImageGenerator, e.showTextGenerator, e.imageIconLabel, e.textIconLabel, e.aiFor, e.aiContent, e.handleAcceptResponse, e.handlePreview, e.imgIcon, null;
  };

const G = (0, g.memo)(H);

var U = n(88660),
  q = n(2214);

function Y(e) {
  return Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Y(e);
}

function Q() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Z(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Z(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Z(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Z(d, "constructor", u), Z(u, "constructor", c), c.displayName = "GeneratorFunction", Z(u, a, "GeneratorFunction"), Z(d), Z(d, a, "Generator"), Z(d, r, function () {
    return this;
  }), Z(d, "toString", function () {
    return "[object Generator]";
  }), (Q = function () {
    return {
      w: o,
      m
    };
  })();
}

function Z(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Z = function (e, t, n, r) {
    function o(t, n) {
      Z(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Z(e, t, n, r);
}

function $(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? K(Object(n), !0).forEach(function (t) {
      X(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function X(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Y(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Y(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Y(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function ee(e, t) {
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
      if ("string" == typeof e) return te(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? te(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function te(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

const ne = function (e) {
  var t = e.content,
    n = void 0 === t ? "" : t,
    r = e.onContentChange,
    a = e.placeholder,
    o = void 0 === a ? (0, b.__)('Type "/" to see available commands', "ohmylms") : a,
    i = e.commandsConfig,
    l = void 0 === i ? {} : i,
    c = e.showAddButton,
    u = void 0 === c || c,
    s = e.showTextAlign,
    d = void 0 === s || s,
    m = e.autofocus,
    p = void 0 === m || m,
    f = e.editorFor,
    v = e.setIsDraggableItem,
    y = ee((0, g.useState)(n), 2),
    _ = y[0],
    w = y[1],
    E = ee((0, g.useState)(!0), 2),
    x = E[0],
    O = E[1],
    A = (0, g.useRef)(null),
    M = (0, U.V)(),
    T = (0, S.hG)({
      immediatelyRender: !0,
      shouldRerenderOnTransaction: !1,
      autofocus: p,
      content: n,
      extensions: [P.A, j.TextStyle, j.FontSize, j.FontFamily, j.Color, k().configure({
        openOnClick: !1
      }), j.Highlight.configure({
        multicolor: !0
      }), j.Underline, j.ImageUpload, j.ImageBlock, j.TextAlign.extend({
        addKeyboardShortcuts: function () {
          return {};
        }
      }).configure({
        types: ["heading", "paragraph"]
      }), j.SlashCommand.configure({
        commandsConfig: J({}, l)
      }), j.Superscript, j.Subscript, j.TaskItem, j.TaskList, j.AiTextNode, j.AiImageNode, j.CustomHTMLNode],
      onUpdate: function (e) {
        var t,
          n = e.editor;
        r && (w("<p></p>" === n.getHTML() ? "" : n.getHTML()), r(n.getHTML()));
        var a,
          o = n.state.doc.content.lastChild;
        "imageBlock" === (null == o || null === (t = o.type) || void 0 === t ? void 0 : t.name) && (a = setTimeout(function () {
          n.commands.insertContentAt(n.state.doc.content.size, "<p></p>"), clearTimeout(a);
        }, 1e3));
      },
      onSelectionUpdate: function (e) {
        e.editor.isActive("aiText"), O(!0);
      },
      editorProps: {
        attributes: {
          autocomplete: "off",
          autocorrect: "off",
          autocapitalize: "off",
          class: "min-h-full"
        }
      },
      onFocus: function () {
        v && v(!1);
      },
      onBlur: function () {
        v && v(!0);
      }
    });
  (0, g.useEffect)(function () {
    T && n && setTimeout(function () {
      w("<p></p>" === n ? "" : n), T.commands.setContent(n);
    }, 0);
  }, [T, n]), (0, g.useEffect)(function () {
    var e;
    return T && (e = setTimeout(function () {
      T.isActive("imageBlock") && !p && (T.commands.focus("start"), T.commands.blur(), T.commands.clearNodes());
    }, 0)), function () {
      clearTimeout(e);
    };
  }, [T, n]);
  var F = (0, g.useRef)(null),
    N = function () {
      var e = window.getSelection();
      if (!e.rangeCount) return !1;
      var t = e.getRangeAt(0).getBoundingClientRect(),
        n = document.querySelector(".omlms-editor-content");
      if (!n) return !1;
      var r = n.getBoundingClientRect(),
        a = t.bottom;
      return T.isActive("imageBlock") && (a = t.bottom - t.height), t.top >= r.top && t.left >= r.left && a <= r.bottom && t.right <= r.right;
    },
    W = function () {
      x && !N() ? O(!1) : !x && N() && O(!0);
    };
  (0, g.useEffect)(function () {
    var e = function (e) {
      var t = document.querySelector("html"),
        n = document.querySelector("[data-tippy-root]"),
        r = document.querySelector("#omlms-editor-content");
      if (n) {
        var a;
        if (n.contains(e.target) || null != r && r.contains(e.target)) return;
        if (e.target.contains(t)) return;
        null == n || null === (a = n._tippy) || void 0 === a || a.hide();
      }
    };
    return window.addEventListener("mousedown", e), function () {
      window.removeEventListener("mousedown", e);
    };
  }, [T]);
  var z = function () {
    var e,
      t = (e = Q().m(function e(t, n) {
        var a, o;
        return Q().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              "image" === n ? (null !== A.current && (T.commands.deleteRange({
                from: A.current,
                to: A.current + 1
              }), A.current = null), T.commands.insertContentAt(T.state.doc.content.size, {
                type: "imageBlock",
                attrs: {
                  src: null == t ? void 0 : t.source_url,
                  alt: "AI Image"
                }
              }), T.commands.focus()) : (a = M(t), o = new DOMParser().parseFromString(a, "text/html"), T.commands.insertContentAt(T.state.doc.content.size, o.body.innerHTML), T.commands.focus()), w(T.getHTML()), r && r(T.getHTML());
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
            $(o, r, a, i, l, "next", e);
          }
          function l(e) {
            $(o, r, a, i, l, "throw", e);
          }
          i(void 0);
        });
      });
    return function (e, n) {
      return t.apply(this, arguments);
    };
  }();
  return h().createElement("div", {
    className: "omlms-editor-content-wrapper",
    ref: F
  }, 0 === _.length && h().createElement("div", {
    className: "omlms-editor-placeholder",
    onClick: function () {
      var e;
      null == T || null === (e = T.commands) || void 0 === e || e.focus();
    }
  }, o), h().createElement(S.$Z, {
    editor: T,
    onSelect: W,
    onScroll: W,
    id: "omlms-editor-content",
    className: "omlms-editor-content"
  }), h().createElement(R.LinkMenu, {
    isShow: x,
    editor: T,
    appendTo: F
  }), h().createElement(R.TextMenu, {
    isShow: x,
    editor: T,
    showTextAlign: d
  }), h().createElement(C(), {
    isShow: x,
    editor: T,
    appendTo: F
  }), u && h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
    marginBottom: 3.5
  }), h().createElement(D.A, {
    icon: h().createElement("svg", {
      fill: "none",
      width: "21",
      height: "21",
      viewBox: "0 0 21 21",
      xmlns: "http://www.w3.org/2000/svg"
    }, h().createElement("rect", {
      width: "21",
      height: "21",
      fill: "#F4F5F7",
      rx: "2"
    }), h().createElement("path", {
      stroke: "#7A8B9A",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M10.503 7v7m-3.502-3.5h7"
    })),
    onClick: function () {
      T.commands.focus(), T.commands.insertContentAt(T.state.doc.content.size, '<p data-placeholder="Placeholder"></p>');
      var e = T.state.doc.content.size - 1,
        t = T.view.state.doc.nodeAt(e);
      t && "paragraph" === t.type.name && T.view.dispatch(T.state.tr.setNodeMarkup(e, null, J(J({}, t.attrs), {}, {
        "data-placeholder": null
      })));
      var n = T.state.selection.from;
      T.commands.insertContentAt(n, "/");
    },
    variant: "tertiary",
    size: "small",
    className: "omlms-editor-add-button"
  })), "assignment" !== f && h().createElement(G, {
    showImageGenerator: !0,
    showTextGenerator: !0,
    aiFor: f,
    aiContent: "description",
    handleAcceptResponse: z,
    handlePreview: function (e) {
      if (e) {
        var t = A.current;
        if (null !== t) T.chain().focus().insertContentAt({
          from: t,
          to: t + 1
        }, {
          type: "imageBlock",
          attrs: {
            src: e,
            alt: "AI Preview Image"
          }
        }).run();else {
          var n = T.state.doc.content.size;
          T.chain().focus().insertContentAt(n, {
            type: "imageBlock",
            attrs: {
              src: e,
              alt: "AI Preview Image"
            }
          }).run(), A.current = n;
        }
      } else null !== A.current && (T.commands.deleteRange({
        from: A.current,
        to: A.current + 1
      }), A.current = null);
    }
  }));
};

var re = n(43052);

function ae(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var oe = function (e) {
  var t = e.name,
    n = e.description,
    r = e.setName,
    a = e.setDescription,
    o = e.chapterId,
    i = (e.courseId, e.onDelete, e.activeKey, e.tabKey, e.isActive),
    l = e.setAutoSave,
    c = (e.handleOpenChapter, e.setIsDraggableItem),
    u = e.setIsSaved,
    s = e.handleSaveName,
    d = (0, y.useDispatch)("creator-lms/store"),
    m = function (e, t) {
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
          if ("string" == typeof e) return ae(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ae(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(n), 2),
    p = m[0],
    f = m[1],
    v = (0, g.useRef)(null);
  return (0, g.useEffect)(function () {
    var e = function () {
      if (v.current) {
        var e = v.current.closest(".omlms-draggable-single-chapter");
        if (e) {
          var t = v.current.querySelector("[data-tippy-root]");
          e.style.zIndex = t ? "9999" : "998";
        }
      }
    };
    e();
    var t = new MutationObserver(e);
    return t.observe(v.current, {
      childList: !0,
      subtree: !0
    }), function () {
      return t.disconnect();
    };
  }, []), (0, g.useEffect)(function () {
    f(n);
  }, [i]), React.createElement(React.Fragment, null, React.createElement("div", {
    ref: v,
    actions: []
  }, React.createElement("div", {
    style: {
      width: "calc(100% - 55px)"
    }
  }, React.createElement(re.A, {
    defaultValue: "Untitled" !== t ? t : "",
    onChange: function (e) {
      r(e), u(!1);
    },
    placeholder: (0, b.__)("Enter chapter name", "ohmylms"),
    name: "chapterName",
    onFocus: function () {
      c(!1);
      var e = document.getElementById("omlms-chapter-name-".concat(o));
      if (e) {
        var t = e.value;
        s(o, t);
      }
    },
    onBlur: function () {
      return c(!0);
    },
    size: "large",
    maxLength: 100,
    id: "omlms-chapter-name-".concat(o),
    onClick: function () {
      d.setCourseInfoOpen(!1);
    },
    style: {
      fontSize: 26,
      fontWeight: "bold",
      border: "none",
      background: "transparent",
      padding: 0,
      textAlign: "left",
      lineHeight: 1.2,
      boxShadow: "none"
    },
    variant: "borderless"
  })), React.createElement("div", {
    onClick: function () {
      d.setCourseInfoOpen(!1);
    }
  }, React.createElement(ne, {
    onContentChange: function (e) {
      a(e), u(!1), l(!0);
    },
    content: p,
    placeholder: (0, b.__)("Add chapter description ...", "ohmylms"),
    autofocus: !1,
    showAddButton: !1,
    editorFor: "chapter",
    setIsDraggableItem: c
  }))));
};

const ie = (0, g.memo)(oe);

var le = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "17",
    height: "15",
    viewBox: "0 0 17 15",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    className: "fill",
    fill: "currentColor",
    d: "M16.957 11.478l-1.397-8.38C15.261 1.303 13.794 0 12.072 0H4.93C2.479 0 1.625 1.991 1.44 3.098l-1.397 8.38c-.146.875.08 1.768.62 2.45A2.767 2.767 0 002.833 15h.709c.39 0 .708-.335.708-.75s-.317-.75-.708-.75h-.708c-.42 0-.816-.196-1.085-.536a1.56 1.56 0 01-.31-1.225l1.396-8.38a2.33 2.33 0 01.252-.734l1.657 9.319C5.059 13.714 6.522 15 8.224 15h5.942c.84 0 1.632-.39 2.17-1.072.54-.681.767-1.575.621-2.45zm-1.705 1.485c-.27.34-.665.536-1.085.536H8.225c-1.02 0-1.899-.77-2.088-1.833L4.344 1.586c.186-.056.383-.085.584-.085h7.144c1.033 0 1.914.781 2.093 1.859l1.397 8.38a1.56 1.56 0 01-.31 1.225v-.002zM7.084 5.25c-.391 0-.709-.336-.709-.75s.317-.75.709-.75h4.958c.391 0 .709.336.709.75s-.318.75-.709.75H7.084zm.517 3c-.39 0-.708-.336-.708-.75s.317-.75.708-.75h4.96c.39 0 .708.336.708.75s-.318.75-.709.75H7.601zm6.212 2.25c0 .414-.317.75-.708.75H8.146c-.39 0-.708-.336-.708-.75 0-.415.317-.75.708-.75h4.959c.391 0 .708.335.708.75z"
  })));
};

const ce = (0, g.memo)(le);

var ue = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    className: "fill",
    fill: "currentColor",
    d: "M8.6 17.25c0 .413-.352.75-.782.75h-4.69C1.398 18 0 16.657 0 15V3c0-1.657 1.4-3 3.127-3h10.946c1.728 0 3.128 1.343 3.128 3v6c0 .412-.352.75-.782.75-.43 0-.782-.338-.782-.75V3c0-.825-.704-1.5-1.564-1.5H3.127c-.86 0-1.563.675-1.563 1.5v12c0 .825.703 1.5 1.563 1.5h4.691c.43 0 .782.337.782.75zM13.268 4.5c0-.412-.352-.75-.782-.75H4.691c-.43 0-.782.338-.782.75s.352.75.782.75h7.795c.43 0 .782-.338.782-.75zm-1.564 3.75c0-.412-.352-.75-.782-.75h-6.23c-.431 0-.783.338-.783.75s.352.75.782.75h6.231c.43 0 .782-.338.782-.75zm-7.013 3c-.43 0-.782.338-.782.75s.352.75.782.75h2.322c.43 0 .782-.338.782-.75s-.352-.75-.782-.75H4.691zm13.065.967a.802.802 0 00-1.103 0l-4.136 3.968-1.79-1.717a.802.802 0 00-1.103 0 .726.726 0 000 1.057l2.346 2.25a.819.819 0 001.11 0l4.691-4.5a.726.726 0 000-1.058h-.015z"
  })));
};

const se = (0, g.memo)(ue);

var de = n(33829),
  me = function () {
    var e = (0, g.useMemo)(function () {
      return (0, de.A)();
    }, []);
    return React.createElement(React.Fragment, null, React.createElement("svg", {
      fill: "none",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("g", {
      clipPath: "url(#clip_".concat(e, ")")
    }, React.createElement("path", {
      className: "fill",
      fill: "currentColor",
      d: "M14.25 18H3.75A3.755 3.755 0 010 14.25V3.75A3.755 3.755 0 013.75 0h10.5A3.754 3.754 0 0118 3.75v10.5A3.754 3.754 0 0114.25 18zM3.75 1.5A2.25 2.25 0 001.5 3.75v10.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V3.75a2.25 2.25 0 00-2.25-2.25H3.75zm3.256 11.254a1.776 1.776 0 01-.889-.242 1.735 1.735 0 01-.873-1.516V7.004a1.753 1.753 0 012.625-1.521l3.959 1.976a1.752 1.752 0 01.036 3.063l-4.032 2.015a1.65 1.65 0 01-.825.217zm-.018-6a.245.245 0 00-.244.25v3.992a.253.253 0 00.375.22L11.151 9.2a.236.236 0 00.09-.2.245.245 0 00-.127-.219L7.16 6.805a.346.346 0 00-.171-.051z"
    })), React.createElement("defs", null, React.createElement("clipPath", {
      id: "clip_".concat(e)
    }, React.createElement("path", {
      fill: "#fff",
      d: "M0 0h18v18H0z"
    })))));
  };

const pe = (0, g.memo)(me);

var fe = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  }, React.createElement("g", {
    className: "fill",
    fill: "currentColor",
    clipPath: "url(#clip0_1300_17208)"
  }, React.createElement("path", {
    d: "M15.605 3.218a.75.75 0 00-1.061 1.061 6.685 6.685 0 010 9.443.75.75 0 101.061 1.06 8.187 8.187 0 000-11.564z"
  }), React.createElement("path", {
    d: "M13.576 5.467a.75.75 0 10-1.065 1.061 3.496 3.496 0 010 4.942.753.753 0 001.065 1.06 5 5 0 000-7.063zM10.365.15a9.04 9.04 0 00-5.666 3.6H3.75A3.756 3.756 0 000 7.5v3a3.756 3.756 0 003.75 3.75h.95a9.044 9.044 0 005.665 3.6.75.75 0 00.886-.737V.888a.752.752 0 00-.886-.74zm-.615 16a7.563 7.563 0 01-4.028-3.06.75.75 0 00-.628-.34H3.75A2.25 2.25 0 011.5 10.5v-3a2.25 2.25 0 012.25-2.25H5.1a.75.75 0 00.628-.34A7.56 7.56 0 019.75 1.847V16.15z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_1300_17208"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h18v18H0z"
  })))));
};

const ve = (0, g.memo)(fe);

var ge = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "23",
    height: "20",
    viewBox: "0 0 23 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    className: "fill stroke",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: ".2",
    d: "M12.225 17.663H6.019c.255-.427.4-.96.4-1.463V4.252c0-1.055.831-1.915 1.853-1.915h8.36c1.02 0 1.851.86 1.851 1.915V8.65c0 .369.29.668.646.668.357 0 .646-.3.646-.668V4.252C19.775 2.46 18.365 1 16.632 1H8.27C6.537 1 5.128 2.46 5.128 4.252v6.695h-.984C2.41 10.947 1 12.407 1 14.2v1.997c0 1.534 1.2 2.783 2.684 2.797.008 0 .015.005.023.005h8.518c.357 0 .646-.3.646-.668 0-.37-.29-.67-.646-.67zm-9.933-1.465V14.2c0-1.058.83-1.917 1.852-1.917h.984v3.9l-.002.012c0 .809-.636 1.466-1.42 1.466-.78-.002-1.414-.657-1.414-1.464z"
  }), React.createElement("path", {
    className: "fill stroke",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: ".2",
    d: "M15.96 6.344H8.95a.657.657 0 00-.646.668c0 .37.29.668.646.668h7.008a.657.657 0 00.646-.668.658.658 0 00-.646-.668zm0 2.988H8.95c-.357 0-.646.3-.646.668 0 .37.29.669.646.669h7.008c.357 0 .646-.3.646-.669a.657.657 0 00-.646-.668zm-3.505 2.988H8.951c-.357 0-.646.3-.646.669 0 .369.29.668.646.668h3.504c.357 0 .646-.3.646-.668a.657.657 0 00-.646-.669z"
  }), React.createElement("path", {
    className: "fill",
    fill: "currentColor",
    d: "M21.804 10.935a1.911 1.911 0 00-2.765 0l-4.42 4.574a1.17 1.17 0 00-.31.62l-.242 1.484c-.06.367.057.743.31 1.006a1.093 1.093 0 00.973.321l1.432-.25c.23-.04.438-.152.602-.322l4.42-4.573a2.074 2.074 0 000-2.86zm-5.292 6.446l-1.129.197.191-1.167 3.023-3.128.938.97-3.023 3.128zm4.378-4.53l-.443.458-.938-.971.443-.458a.647.647 0 01.938 0 .704.704 0 010 .97z"
  }), React.createElement("path", {
    className: "stroke",
    stroke: "currentColor",
    strokeWidth: ".2",
    d: "M21.804 10.935s0 0 0 0zm0 0a1.911 1.911 0 00-2.765 0l-4.42 4.574a1.17 1.17 0 00-.31.62l-.242 1.484c-.06.367.057.743.31 1.006a1.093 1.093 0 00.973.321l1.432-.25c.23-.04.438-.152.602-.322l4.42-4.573a2.074 2.074 0 000-2.86zm-5.292 6.446l-1.129.197.191-1.167 3.023-3.128.938.97-3.023 3.128zm4.378-4.53l-.443.458-.938-.971.443-.458a.647.647 0 01.938 0 .704.704 0 010 .97z"
  })));
};

const he = (0, g.memo)(ge);
