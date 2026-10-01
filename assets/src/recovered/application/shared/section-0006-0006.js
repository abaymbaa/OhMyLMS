// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Or = function (e) {
  var t,
    n = e.lesson,
    r = e.handleInputChange,
    a = e.handleEditorContentChange,
    o = e.handleUploadComplete,
    i = e.handleRemoveMedia,
    l = e.chapterId,
    c = e.onExternalUploadComplete;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-lesson-content-wrapper"
  }, React.createElement(Pr, {
    titleValue: null !== (t = null == n ? void 0 : n.title) && void 0 !== t ? t : null == n ? void 0 : n.name,
    imageSrc: null == n ? void 0 : n.image_src,
    videoSrc: null != n && n.video_id ? null == n ? void 0 : n.video_src : "video" === (null == n ? void 0 : n.type) ? null == n ? void 0 : n.external_url : "",
    audioSrc: null != n && n.audio_id ? null == n ? void 0 : n.audio_src : "audio" === (null == n ? void 0 : n.type) ? null == n ? void 0 : n.external_url : "",
    titlePlaceholder: (0, b.__)("Enter lesson title", "ohmylms"),
    titleName: "name",
    descriptionPlaceholder: (0, b.__)("Enter lesson description...", "ohmylms"),
    content: null == n ? void 0 : n.description,
    onInputChange: r,
    onContentChange: a,
    onUploadComplete: o,
    onRemoveMedia: i,
    align: "left",
    mediaType: "text" === (null == n ? void 0 : n.type) ? "image" : null == n ? void 0 : n.type,
    mediaId: "audio" === (null == n ? void 0 : n.type) ? null == n ? void 0 : n.audio_id : null == n ? void 0 : n.video_id,
    onExternalUploadComplete: c,
    chapterId: l,
    autofocus: !1,
    editorFor: "lesson"
  })));
};

const kr = (0, g.memo)(Or);

var jr = n(47406),
  Ar = function () {
    return React.createElement(React.Fragment, null, React.createElement(q.Icon, {
      className: "ohmylms-back-arrow-btn-icon",
      icon: jr.A,
      width: "24px",
      height: "24px"
    }));
  };

const Mr = (0, g.memo)(Ar);

var Tr = ["onClick", "variant", "label", "iconOnly"];

function Ir() {
  return Ir = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ir.apply(null, arguments);
}

var Fr = function (e) {
  var t = e.onClick,
    n = e.variant,
    r = void 0 === n ? "secondary" : n,
    a = e.label,
    o = void 0 === a ? (0, b.__)("Back", "ohmylms") : a,
    i = e.iconOnly,
    l = void 0 !== i && i,
    c = function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = function (e, t) {
          if (null == e) return {};
          var n = {};
          for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
          return n;
        }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      }
      return a;
    }(e, Tr),
    u = (0, f.Zp)();
  return React.createElement(React.Fragment, null, React.createElement(I.ButtonWP, Ir({
    variant: r,
    onClick: function () {
      t && "function" == typeof t ? t() : u(-1);
    },
    icon: React.createElement(Mr, null)
  }, c), !l && React.createElement("span", null, o)));
};

const Nr = (0, g.memo)(Fr);

var Dr = function (e) {
  var t = e.title,
    n = e.redirection,
    r = e.rightContent,
    a = (0, f.Zp)();
  return React.createElement(I.CardWP, {
    style: {
      borderRadius: 0
    }
  }, React.createElement(I.SpacerWP, {
    padding: 4
  }, React.createElement(I.FlexWP, {
    justify: "space-between",
    align: "center"
  }, React.createElement(I.FlexWP, {
    align: "center",
    gap: 2,
    justify: "flex-start"
  }, React.createElement(Nr, {
    onClick: function () {
      a(null != n ? n : "/");
    }
  }), React.createElement(I.HeadingWP, {
    level: 4,
    title: t
  }, t)), React.createElement(I.FlexWP, {
    align: "center",
    gap: 2,
    justify: "flex-end"
  }, r))));
};

const Wr = (0, g.memo)(Dr);

var zr = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "21",
    height: "22",
    viewBox: "0 0 21 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10.5 15.395c3.598 0 5.763-2.684 6.723-4.284a.176.176 0 00.028-.091.176.176 0 00-.028-.092c-.96-1.6-3.125-4.283-6.723-4.283s-5.763 2.683-6.723 4.283a.176.176 0 00-.027.092.18.18 0 00.027.091c.96 1.6 3.125 4.284 6.723 4.284zm8.224-3.383c-1.04 1.733-3.66 5.133-8.224 5.133-4.563 0-7.184-3.4-8.223-5.133a1.913 1.913 0 010-1.984c1.04-1.734 3.66-5.133 8.223-5.133 4.563 0 7.184 3.4 8.224 5.133a1.914 1.914 0 010 1.983z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10.5 11.895a.875.875 0 100-1.75.875.875 0 000 1.75zm0 1.75a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25z",
    clipRule: "evenodd"
  })));
};

const Br = (0, g.memo)(zr);

var Lr = n(46942),
  Vr = n.n(Lr);

function Hr(e) {
  return Hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Hr(e);
}

function Gr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function Ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Gr(Object(n), !0).forEach(function (t) {
      qr(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gr(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function qr(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Hr(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Hr(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Hr(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function Yr() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Qr(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Qr(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Qr(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Qr(d, "constructor", u), Qr(u, "constructor", c), c.displayName = "GeneratorFunction", Qr(u, a, "GeneratorFunction"), Qr(d), Qr(d, a, "Generator"), Qr(d, r, function () {
    return this;
  }), Qr(d, "toString", function () {
    return "[object Generator]";
  }), (Yr = function () {
    return {
      w: o,
      m
    };
  })();
}

function Qr(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Qr = function (e, t, n, r) {
    function o(t, n) {
      Qr(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Qr(e, t, n, r);
}

function Zr(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function $r(e, t) {
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
      if ("string" == typeof e) return Kr(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Kr(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Kr(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Jr = function (e) {
  var t = (0, z.A)(),
    n = t.openNotificationWithIcon,
    r = t.contextHolder,
    a = e.id,
    o = e.chapterId,
    i = e.setOpenModal,
    l = e.setLocalData,
    c = (e.handleAutomation, (0, y.useDispatch)(T.default)),
    u = (0, y.useSelect)(function (e) {
      return e(T.default).getLesson();
    }, []),
    s = (0, y.useSelect)(function (e) {
      return e(T.default).geSelectedLessonId();
    }, []),
    d = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    m = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    p = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseChaptersContent();
    }, [o]),
    f = (0, y.useDispatch)(T.default),
    v = f.getLesson,
    _ = f.resetLessonState,
    w = $r((0, g.useState)(!1), 2),
    E = w[0],
    S = w[1],
    R = $r((0, g.useState)({
      description: ""
    }), 2),
    x = R[0],
    C = R[1];
  (0, g.useEffect)(function () {
    !E && d && n(m, d);
  }, [d]), (0, g.useEffect)(function () {
    c.setSelectedLessonId(a);
  }, [a]), (0, g.useEffect)(function () {
    var e = function () {
      var e,
        t = (e = Yr().m(function e() {
          var t;
          return Yr().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if (e.p = 0, s) {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                return S(!0), e.n = 2, v(s);
              case 2:
                e.n = 4;
                break;
              case 3:
                e.p = 3, t = e.v, console.error("Error fetching course data:", t);
              case 4:
                return e.p = 4, S(!1), e.f(4);
              case 5:
                return e.a(2);
            }
          }, e, null, [[0, 3, 4, 5]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Zr(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Zr(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    return e(), function () {
      _();
    };
  }, [s]), (0, g.useEffect)(function () {
    u && C({
      description: (null == x ? void 0 : x.description) || u.description || ""
    });
  }, [u]), (0, g.useEffect)(function () {
    l && l(x);
  }, [x]);
  var P = function () {
    if (u.description = x.description, c.updateLesson(null == u ? void 0 : u.id, u), o) {
      var e = null == p ? void 0 : p.byId;
      e[null == u ? void 0 : u.id] = u;
      var t = Object.values(e).filter(function (e) {
        return void 0 !== (null == e ? void 0 : e.chapterId) ? (null == e ? void 0 : e.chapterId) === o : (null == e ? void 0 : e.id) === (null == u ? void 0 : u.id);
      });
      c.setContentsToChapter(o, t);
    }
  };
  return h().createElement(h().Fragment, null, !o && r, !E || null != u && u.id ? h().createElement(h().Fragment, null, !o && h().createElement(Wr, {
    title: (0, b.__)("Lesson Outline", "ohmylms"),
    redirection: "/lessons",
    className: "ohmylms-lesson-editor-page-header",
    rightContent: h().createElement(h().Fragment, null, h().createElement(I.ButtonWP, {
      onClick: function () {
        null != u && u.preview_url && window.open(null == u ? void 0 : u.preview_url, "_blank");
      },
      icon: h().createElement(Br, null),
      iconPosition: "right",
      className: "ohmylms-preview-btn"
    }, (0, b.__)("Preview", "ohmylms")), h().createElement(I.ButtonWP, {
      onClick: P,
      className: "ohmylms-lesson-save-btn"
    }, (0, b.__)("Save", "ohmylms")))
  }), h().createElement(I.FlexWP, {
    className: Vr()("ohmylms-lesson-editor-wrapper", !o && "ohmylms-lesson-editor-page"),
    justify: "space-between",
    gap: 5
  }, h().createElement(I.FlexItemWP, {
    flex: 3
  }, h().createElement(I.CardWP, {
    fullHeight: !0,
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    padding: 5,
    marginBottom: 0
  }, h().createElement(kr, {
    lesson: u,
    handleInputChange: function (e) {
      c.setLesson({
        name: e
      });
    },
    handleEditorContentChange: function (e) {
      C(function (t) {
        return Ur(Ur({}, t), {}, {
          description: e
        });
      });
    },
    handleUploadComplete: function (e, t) {
      var n = {};
      switch (t) {
        case "video":
          c.setLesson(Ur(Ur({}, u), {}, {
            video_id: e.id,
            video_src: e.url,
            external_url: ""
          })), n = {
            video_id: e.id,
            video_src: e.url,
            external_url: ""
          };
          break;
        case "audio":
          c.setLesson(Ur(Ur({}, u), {}, {
            audio_id: e.id,
            audio_src: e.url,
            external_url: ""
          })), n = {
            audio_id: e.id,
            audio_src: e.url,
            external_url: ""
          };
          break;
        default:
          c.setLesson(Ur(Ur({}, u), {}, {
            image_id: e.id,
            image_src: e.url
          })), n = {
            image_id: e.id,
            image_src: e.url
          };
      }
      c.updateLessonWithoutNotice(null == u ? void 0 : u.id, Ur(Ur({}, u), n));
    },
    handleRemoveMedia: function (e) {
      var t = Ur(Ur({}, u), {}, qr(qr(qr({}, "".concat(e, "_id"), null), "".concat(e, "_src"), null), "external_url", null));
      c.setLesson(t);
    },
    setOpenModal: i,
    saveLesson: P,
    chapterId: o,
    onExternalUploadComplete: function (e, t) {
      c.setLesson(Ur(Ur({}, u), {}, {
        external_url: e.url,
        video_id: null,
        video_src: "",
        audio_id: null,
        audio_src: ""
      })), c.updateLessonWithoutNotice(null == u ? void 0 : u.id, Ur(Ur({}, u), {}, {
        external_url: e.url,
        video_id: null,
        video_src: "",
        audio_id: null,
        audio_src: ""
      }));
    }
  })))), h().createElement(I.FlexItemWP, {
    flex: 2
  }, h().createElement(I.CardWP, {
    fullHeight: !0,
    isBorderless: !0
  }, h().createElement(nr, {
    setOpenModal: i,
    lesson: u,
    chapterId: o
  }))))) : h().createElement(I.SkeletonWP, {
    rows: 10
  }));
};

const Xr = (0, g.memo)(Jr);

var ea = ["label", "icon", "customClass", "onClick", "type", "variant"];

function ta() {
  return ta = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ta.apply(null, arguments);
}

var na = function (e) {
  var t = e.label,
    n = e.icon,
    r = e.customClass,
    a = e.onClick,
    o = void 0 === a ? function () {
      return console.error("No onClick function provided");
    } : a,
    i = e.type,
    l = void 0 === i ? "text" : i,
    c = e.variant,
    u = void 0 === c ? "tertiary" : c,
    s = function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = function (e, t) {
          if (null == e) return {};
          var n = {};
          for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
          return n;
        }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      }
      return a;
    }(e, ea);
  return React.createElement(React.Fragment, null, React.createElement(I.ButtonWP, ta({
    variant: u,
    type: l,
    icon: n || null,
    className: "ohmylms-preview-btn ohmylms-action-button ".concat(r),
    onClick: o
  }, s), t));
};

const ra = (0, g.memo)(na);

var aa = function (e) {
  var t = e.title,
    n = e.onPreview,
    r = void 0 === n ? function () {
      return console.error("No onPreview function provided");
    } : n,
    a = e.actionButton,
    o = void 0 === a ? null : a,
    i = e.customButtons,
    l = void 0 === i ? null : i;
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    align: "center",
    justify: "space-between",
    className: "ohmylms-lesson-create-modal-header",
    gap: 3
  }, React.createElement("p", {
    className: "ohmylms-lesson-create-title"
  }, t), l && l, !l && React.createElement(React.Fragment, null, o && o, React.createElement(ra, {
    label: (0, b.__)("Preview", "ohmylms"),
    icon: React.createElement(Br, null),
    customClass: "ohmylms-lesson-create-modal-header-preview-btn",
    onClick: r
  }))));
};

const oa = (0, g.memo)(aa);

var ia = ["openModal", "setOpenModal", "children", "customClass", "title", "handlePreview", "actionButton", "wrapClassName", "customButtons"];

function la() {
  return la = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, la.apply(null, arguments);
}

var ca = function (e) {
  var t = e.openModal,
    n = e.setOpenModal,
    r = e.children,
    a = (e.customClass, e.title),
    o = (e.handlePreview, e.actionButton, e.wrapClassName, e.customButtons, function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = function (e, t) {
          if (null == e) return {};
          var n = {};
          for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
          return n;
        }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      }
      return a;
    }(e, ia));
  return React.createElement(React.Fragment, null, t && React.createElement(I.ModalWP, la({
    title: a,
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0,
    onRequestClose: function () {
      n(!1);
    },
    size: "fill",
    style: {
      maxWidth: "1500px",
      background: "#F5F5F5"
    },
    className: "ohmylms-create-modal-wrapper"
  }, o), r));
};

const ua = (0, g.memo)(ca);

function sa() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return da(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (da(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, da(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, da(d, "constructor", u), da(u, "constructor", c), c.displayName = "GeneratorFunction", da(u, a, "GeneratorFunction"), da(d), da(d, a, "Generator"), da(d, r, function () {
    return this;
  }), da(d, "toString", function () {
    return "[object Generator]";
  }), (sa = function () {
    return {
      w: o,
      m
    };
  })();
}

function da(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  da = function (e, t, n, r) {
    function o(t, n) {
      da(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, da(e, t, n, r);
}

function ma(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function pa(e, t) {
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
      if ("string" == typeof e) return fa(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fa(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function fa(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var va = function (e) {
  e.openModal;
  var t = e.setOpenModal,
    n = e.chapterId,
    r = e.handleAutomation,
    a = (0, y.useDispatch)(T.default),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getLesson();
    }, []),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseChaptersContent();
    }, [n]),
    l = pa((0, g.useState)({
      description: ""
    }), 2),
    c = l[0],
    u = l[1],
    s = pa((0, g.useState)(!0), 2),
    d = s[0],
    m = s[1],
    p = pa((0, g.useState)(!1), 2),
    f = p[0],
    v = p[1],
    h = pa((0, g.useState)(!1), 2),
    _ = h[0],
    w = h[1],
    E = pa((0, g.useState)(!1), 2),
    S = E[0],
    R = E[1],
    x = function () {
      var e,
        t = (e = sa().m(function e() {
          var t, r, l, u;
          return sa().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if (!S) {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                return e.p = 1, R(!0), o.description = c.description, e.n = 2, a.updateLesson(null == o ? void 0 : o.id, o);
              case 2:
                if (!n) {
                  e.n = 4;
                  break;
                }
                return (t = null == i ? void 0 : i.byId)[null == o ? void 0 : o.id] = o, r = Object.values(t), l = r.filter(function (e) {
                  return void 0 !== (null == e ? void 0 : e.chapterId) ? (null == e ? void 0 : e.chapterId) === n : (null == e ? void 0 : e.id) === (null == o ? void 0 : o.id);
                }), e.n = 3, a.setContentsToChapter(n, l);
              case 3:
                m(!0), v(!1);
              case 4:
                e.n = 6;
                break;
              case 5:
                e.p = 5, u = e.v, console.error(u);
              case 6:
                return e.p = 6, R(!1), e.f(6);
              case 7:
                return e.a(2);
            }
          }, e, null, [[1, 5, 6, 7]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              ma(o, r, a, i, l, "next", e);
            }
            function l(e) {
              ma(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    C = (0, g.useCallback)(function () {
      d ? t(!1) : w(!0);
    }, [d]),
    P = (0, g.useCallback)(function () {
      r("lesson", null == o ? void 0 : o.id, null == o ? void 0 : o.name);
    }, [o]);
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && o && (f && m(!1), v(!0)), function () {
      e = !1;
    };
  }, [o]), React.createElement(React.Fragment, null, React.createElement(ua, {
    openModal: !0,
    setOpenModal: C,
    title: React.createElement("span", {
      style: {
        textTransform: "capitalize"
      }
    }, null == o ? void 0 : o.type),
    headerActions: React.createElement(I.FlexWP, {
      gap: 3,
      align: "center",
      justify: "flex-end"
    }, React.createElement(ra, {
      label: (0, b.__)("Preview", "ohmylms"),
      icon: React.createElement(Br, null),
      onClick: function () {
        null != o && o.preview_url && window.open(null == o ? void 0 : o.preview_url, "_blank");
      },
      variant: "default"
    }), React.createElement(ra, {
      label: (0, b.__)("Save", "ohmylms"),
      variant: "primary",
      onClick: x,
      isBusy: S,
      padding: "10px 24px"
    }))
  }, React.createElement(Xr, {
    lesson: o,
    chapterId: n,
    setOpenModal: t,
    setLocalData: u,
    handleAutomation: P
  }), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingBottom: 4
  })), _ && React.createElement(Ie, {
    title: (0, b.__)("Warning!", "ohmylms"),
    description: (0, b.__)("You have unsaved changes. Do you want to close without saving?", "ohmylms"),
    onClose: function () {
      return w(!1);
    },
    onDelete: function () {
      return t(!1);
    },
    isOpen: _,
    type: "warning",
    actionBtnText: (0, b.__)("Close", "ohmylms")
  }));
};

const ga = (0, g.memo)(va);
