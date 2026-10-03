// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var gl = function (e) {
  var t = e.onClose,
    n = e.onSelect,
    r = (0, F.z)(),
    a = (0, y.useSelect)(function (e) {
      return e(T.default).getAISettings();
    }, []),
    o = fl((0, g.useState)(""), 2),
    i = o[0],
    l = o[1],
    c = fl((0, g.useState)(!1), 2),
    u = c[0],
    s = c[1],
    d = fl((0, g.useState)(!1), 2),
    m = d[0],
    p = d[1],
    f = fl((0, g.useState)(""), 2),
    v = f[0],
    h = f[1],
    _ = fl((0, g.useState)([]), 2),
    w = _[0],
    E = _[1],
    S = !(null == a || !a.self),
    R = function () {
      var e = pl(sl().m(function e() {
        var t, n, a;
        return sl().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (i.trim()) {
                e.n = 1;
                break;
              }
              return h((0, b.__)("Enter a prompt to generate an image.", "ohmylms")), e.a(2);
            case 1:
              return h(""), E([]), s(!0), e.p = 2, e.n = 3, r({
                prompt: i.trim(),
                type: "image"
              });
            case 3:
              if (null == (t = e.v) || !t.error) {
                e.n = 4;
                break;
              }
              throw new Error(t.message);
            case 4:
              n = (null == t ? void 0 : t.result) || [], E(n), n.length || h((0, b.__)("No image was returned. Try another prompt.", "ohmylms")), e.n = 6;
              break;
            case 5:
              e.p = 5, a = e.v, h((null == a ? void 0 : a.message) || (0, b.__)("Could not generate the image.", "ohmylms"));
            case 6:
              return e.p = 6, s(!1), e.f(6);
            case 7:
              return e.a(2);
          }
        }, e, null, [[2, 5, 6, 7]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    x = function () {
      var e = pl(sl().m(function e(r) {
        var a, o;
        return sl().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (!m) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              if (p(!0), h(""), e.p = 2, !S) {
                e.n = 4;
                break;
              }
              return e.n = 3, (0, N.w)(r);
            case 3:
              o = e.v, e.n = 6;
              break;
            case 4:
              return e.n = 5, (0, N.r)(r);
            case 5:
              o = e.v;
            case 6:
              n({
                id: null == (a = o) ? void 0 : a.id,
                url: (null == a ? void 0 : a.source_url) || (null == a ? void 0 : a.url)
              }), t(), e.n = 8;
              break;
            case 7:
              e.p = 7, e.v, h((0, b.__)("Could not save the image to your media library.", "ohmylms")), p(!1);
            case 8:
              return e.a(2);
          }
        }, e, null, [[2, 7]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
  return React.createElement("div", {
    className: "ohmylms-lcm-aimodal",
    onMouseDown: function (e) {
      e.target === e.currentTarget && t();
    }
  }, React.createElement("div", {
    className: "ohmylms-lcm-aimodal__card",
    role: "dialog",
    "aria-modal": "true"
  }, React.createElement("div", {
    className: "ohmylms-lcm-aimodal__head"
  }, React.createElement("span", null, (0, b.__)("Generate AI Photo", "ohmylms")), React.createElement("button", {
    type: "button",
    onClick: t,
    "aria-label": (0, b.__)("Close", "ohmylms")
  }, React.createElement(po, {
    name: "close",
    size: 18
  }))), React.createElement("div", {
    className: "ohmylms-lcm-aimodal__body"
  }, React.createElement("div", {
    className: "ohmylms-lcm-aimodal__promptrow"
  }, React.createElement("input", {
    value: i,
    onChange: function (e) {
      return l(e.target.value);
    },
    placeholder: (0, b.__)("Describe the image you want…", "ohmylms"),
    onKeyDown: function (e) {
      "Enter" === e.key && R();
    }
  }), React.createElement(mi, {
    variant: "primary",
    onClick: R,
    disabled: u
  }, u ? (0, b.__)("Generating…", "ohmylms") : (0, b.__)("Generate", "ohmylms"))), v && React.createElement("div", {
    className: "ohmylms-lcm-aimodal__error"
  }, v), u && React.createElement("div", {
    className: "ohmylms-lcm-aimodal__loading"
  }, React.createElement(ho, {
    size: 34
  })), !!w.length && React.createElement("div", {
    className: "ohmylms-lcm-aimodal__grid"
  }, w.map(function (e, t) {
    return React.createElement("button", {
      key: t,
      type: "button",
      className: "ohmylms-lcm-aimodal__thumb",
      onClick: function () {
        return x(e);
      },
      disabled: m
    }, React.createElement("img", {
      src: S ? "data:image/png;base64,".concat(e) : e,
      alt: ""
    }));
  })), m && React.createElement("div", {
    className: "ohmylms-lcm-aimodal__applying"
  }, (0, b.__)("Saving to media library…", "ohmylms")))));
};
const hl = (0, g.memo)(gl);
function yl(e) {
  return yl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, yl(e);
}
function bl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? bl(Object(n), !0).forEach(function (t) {
      wl(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bl(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function wl(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != yl(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != yl(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == yl(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function El() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Sl(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Sl(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Sl(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Sl(d, "constructor", u), Sl(u, "constructor", c), c.displayName = "GeneratorFunction", Sl(u, a, "GeneratorFunction"), Sl(d), Sl(d, a, "Generator"), Sl(d, r, function () {
    return this;
  }), Sl(d, "toString", function () {
    return "[object Generator]";
  }), (El = function () {
    return {
      w: o,
      m
    };
  })();
}
function Sl(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Sl = function (e, t, n, r) {
    function o(t, n) {
      Sl(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Sl(e, t, n, r);
}
function Rl(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function xl(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Rl(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Rl(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
function Cl(e) {
  return function (e) {
    if (Array.isArray(e)) return kl(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || Ol(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Pl(e, t) {
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
  }(e, t) || Ol(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Ol(e, t) {
  if (e) {
    if ("string" == typeof e) return kl(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? kl(e, t) : void 0;
  }
}
function kl(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
sn().extend(lo());
var jl = function (e) {
  var t,
    n = e.isOpen,
    r = e.onClose,
    a = e.chapterId,
    o = e.courseId;
  M().noConflict();
  var i,
    l,
    c = (0, y.useDispatch)(T.default),
    u = (0, y.useSelect)(function (e) {
      return e(T.default).getLesson();
    }, []),
    s = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseChaptersContent();
    }, [a]),
    d = (0, y.useSelect)(function (e) {
      return e(T.default).geSelectedLessonId();
    }, []),
    m = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    p = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    f = Pl((0, g.useState)(d), 2),
    v = f[0],
    h = f[1],
    _ = Pl((0, g.useState)(!1), 2),
    w = _[0],
    E = _[1],
    S = Pl((0, g.useState)(!1), 2),
    R = S[0],
    x = S[1],
    C = Pl((0, g.useState)(!1), 2),
    P = C[0],
    O = C[1],
    k = Pl((0, g.useState)((null == u ? void 0 : u.timezone) || sn().tz.guess() || "UTC"), 2),
    j = k[0],
    A = k[1],
    I = (0, z.A)(),
    F = I.openNotificationWithIcon,
    N = I.contextHolder,
    D = true,
    W = Qi(),
    B = (null == u ? void 0 : u.zoom_plan) || jo,
    V = function (e) {
      var t,
        n = null === (t = Object.values(e)) || void 0 === t ? void 0 : t.map(function (e) {
          var t;
          return parseInt(null !== (t = null == e ? void 0 : e.order_number) && void 0 !== t ? t : 0, 10);
        });
      return n.length ? Math.max.apply(Math, Cl(n)) : 0;
    },
    H = function () {
      var e = xl(El().m(function e() {
        var t, n, r, i, l, d, m, p, f, v, g, y, b;
        return El().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, E(!0), v = V(s.byId), g = v + 1, e.n = 2, c.addZoomClass({
                topic: null == u ? void 0 : u.topic,
                agenda: null == u ? void 0 : u.agenda,
                date: (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date),
                duration: null == u ? void 0 : u.duration,
                duration_unit: "min",
                password: null == u ? void 0 : u.password,
                timezone: j,
                order: g,
                type: 2,
                content_type: "session",
                platform: "zoom",
                host_video: null !== (t = null == u ? void 0 : u.host_video) && void 0 !== t && t,
                participant_video: null !== (n = null == u ? void 0 : u.participant_video) && void 0 !== n && n,
                join_before_host: null !== (r = null == u ? void 0 : u.join_before_host) && void 0 !== r && r,
                mute_upon_entry: null !== (i = null == u ? void 0 : u.mute_upon_entry) && void 0 !== i && i,
                auto_record: null !== (l = null == u ? void 0 : u.auto_record) && void 0 !== l && l,
                zoom_plan: null !== (d = null == u ? void 0 : u.zoom_plan) && void 0 !== d ? d : jo,
                cover_image_id: null !== (m = null == u ? void 0 : u.cover_image_id) && void 0 !== m ? m : null,
                cover_video_id: null !== (p = null == u ? void 0 : u.cover_video_id) && void 0 !== p ? p : null,
                attachments: null !== (f = null == u ? void 0 : u.attachments) && void 0 !== f ? f : [],
                course_id: o
              }, a);
            case 2:
              y = e.v, h(y), e.n = 4;
              break;
            case 3:
              e.p = 3, b = e.v, console.error(b);
            case 4:
              return e.p = 4, E(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    G = function () {
      var e = xl(El().m(function e() {
        var t, n, r, o, i, l, s;
        return El().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, E(!0), e.n = 2, c.updateZoomClass(v, _l(_l({}, u), {}, {
                duration_unit: "min",
                type: 2,
                content_type: "session",
                platform: "zoom",
                date: (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date),
                timezone: j,
                host_video: null !== (t = null == u ? void 0 : u.host_video) && void 0 !== t && t,
                participant_video: null !== (n = null == u ? void 0 : u.participant_video) && void 0 !== n && n,
                join_before_host: null !== (r = null == u ? void 0 : u.join_before_host) && void 0 !== r && r,
                mute_upon_entry: null !== (o = null == u ? void 0 : u.mute_upon_entry) && void 0 !== o && o,
                auto_record: null !== (i = null == u ? void 0 : u.auto_record) && void 0 !== i && i,
                zoom_plan: null !== (l = null == u ? void 0 : u.zoom_plan) && void 0 !== l ? l : jo
              }), a);
            case 2:
              e.n = 4;
              break;
            case 3:
              e.p = 3, s = e.v, console.error(s);
            case 4:
              return e.p = 4, E(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    U = (0, g.useCallback)(function (e, t) {
      "timezone" === e ? (A(t), c.setLesson(_l(_l({}, u), {}, {
        timezone: t
      }))) : "date" === e ? c.setLesson(_l(_l({}, u), {}, {
        date: t,
        rawDate: t
      })) : c.setLesson(_l(_l({}, u), {}, wl({}, e, t)));
    }, [u]),
    q = (0, g.useCallback)(function (e) {
      c.setLesson(_l(_l({}, u), e));
    }, [u]),
    Y = si({
      plan: B,
      title: null == u ? void 0 : u.topic,
      initialAutoRecord: null !== (t = null == u ? void 0 : u.auto_record) && void 0 !== t && t,
      initialState: (null == u ? void 0 : u.recording_state) || "empty",
      initialSource: (null == u ? void 0 : u.recording_source) || void 0,
      duration: null == u ? void 0 : u.recording_duration,
      onAttach: function (e) {
        var t = e.source,
          n = e.url;
        return q({
          recording_source: t,
          recording_url: n || "",
          recording_state: "attached"
        });
      },
      onDetach: function () {
        return q({
          recording_source: "",
          recording_url: "",
          recording_state: "empty"
        });
      },
      pickMedia: function () {
        return new Promise(function (e) {
          W({
            type: "video",
            title: (0, b.__)("Select or Upload Recording", "ohmylms"),
            onSelect: function (t) {
              return e({
                id: null == t ? void 0 : t.id,
                url: null == t ? void 0 : t.url,
                fileName: (null == t ? void 0 : t.filename) || (null == t ? void 0 : t.title) || (null == t ? void 0 : t.name)
              });
            },
            onClose: function () {
              return e(null);
            }
          });
        });
      }
    }),
    Q = function () {
      var e = xl(El().m(function e() {
        var t;
        return El().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (e.p = 0, d) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return x(!0), e.n = 2, c.getZoomClass(d);
            case 2:
              e.n = 4;
              break;
            case 3:
              e.p = 3, t = e.v, console.error("Error fetching course data:", t);
            case 4:
              return e.p = 4, x(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[0, 3, 4, 5]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && Q(), function () {
      e = !1, c.resetLessonState();
    };
  }, [d]), (0, g.useEffect)(function () {
    !R && m && F(p, m);
  }, [m]), n ? React.createElement(React.Fragment, null, !a && N, React.createElement(il, {
    isOpen: n,
    loading: R,
    saving: w,
    onClose: function () {
      w || R || r();
    },
    onSave: function () {
      v ? G() : H();
    },
    onPreview: function () {
      null != u && u.preview_url && window.open(u.preview_url, "_blank");
    },
    title: (0, b.__)("Live Session (Zoom)", "ohmylms"),
    saveLabel: v ? (0, b.__)("Update Meeting", "ohmylms") : (0, b.__)("Create Meeting", "ohmylms"),
    saveDisabled: !(null != u && null !== (i = u.topic) && void 0 !== i && i.trim() && null != u && null !== (l = u.agenda) && void 0 !== l && l.trim() && j && null != u && u.date && null != u && u.duration) || w || !D,
    editor: {
      topic: null == u ? void 0 : u.topic,
      agenda: null == u ? void 0 : u.agenda,
      onChange: U,
      disabled: !D,
      cover: {
        imageSrc: null == u ? void 0 : u.cover_image_src,
        videoSrc: null == u ? void 0 : u.cover_video_src,
        onChangeMany: q,
        onAiPhoto: function () {
          return O(!0);
        }
      }
    },
    settings: {
      timezone: j,
      timezoneOptions: co,
      date: (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date),
      duration: null == u ? void 0 : u.duration,
      password: null == u ? void 0 : u.password,
      toggles: {
        mute_upon_entry: null == u ? void 0 : u.mute_upon_entry,
        join_before_host: null == u ? void 0 : u.join_before_host,
        host_video: null == u ? void 0 : u.host_video,
        participant_video: null == u ? void 0 : u.participant_video
      },
      autoRecord: null == u ? void 0 : u.auto_record,
      plan: B,
      recordingBlockProps: Y.blockProps,
      showRecordingBlock: !!v,
      onChange: U,
      attachments: (null == u ? void 0 : u.attachments) || [],
      onAddFiles: function (e) {
        return q({
          attachments: [].concat(Cl((null == u ? void 0 : u.attachments) || []), Cl(e))
        });
      },
      onRemoveFile: function (e) {
        return q({
          attachments: ((null == u ? void 0 : u.attachments) || []).filter(function (t) {
            return t.id !== e;
          })
        });
      },
      disabled: !D
    }
  }), P && React.createElement(hl, {
    onClose: function () {
      return O(!1);
    },
    onSelect: function (e) {
      return q({
        cover_image_id: null == e ? void 0 : e.id,
        cover_image_src: null == e ? void 0 : e.url
      });
    }
  })) : null;
};
const Al = (0, g.memo)(jl);
function Ml(e) {
  return Ml = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ml(e);
}
function Tl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Il(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Tl(Object(n), !0).forEach(function (t) {
      Fl(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tl(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Fl(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Ml(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Ml(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Ml(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Nl() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Dl(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Dl(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Dl(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Dl(d, "constructor", u), Dl(u, "constructor", c), c.displayName = "GeneratorFunction", Dl(u, a, "GeneratorFunction"), Dl(d), Dl(d, a, "Generator"), Dl(d, r, function () {
    return this;
  }), Dl(d, "toString", function () {
    return "[object Generator]";
  }), (Nl = function () {
    return {
      w: o,
      m
    };
  })();
}
function Dl(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Dl = function (e, t, n, r) {
    function o(t, n) {
      Dl(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Dl(e, t, n, r);
}
function Wl(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function zl(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Wl(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Wl(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
function Bl(e) {
  return function (e) {
    if (Array.isArray(e)) return Hl(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || Vl(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Ll(e, t) {
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
  }(e, t) || Vl(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Vl(e, t) {
  if (e) {
    if ("string" == typeof e) return Hl(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Hl(e, t) : void 0;
  }
}
function Hl(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
sn().extend(lo());
