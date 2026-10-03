// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Qc = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "76",
    height: "76",
    viewBox: "0 0 76 76",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("circle", {
    cx: "38",
    cy: "38",
    r: "38",
    fill: "var(--ohmylms-primary-color)"
  }), React.createElement("g", {
    filter: "url(#filter0_d_3470_54)"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M53 38l-5.13 5.13a.76.76 0 01-1.299-.538v-2.985h-6.964v6.964h2.985a.76.76 0 01.538 1.299L38 53l-5.13-5.13a.76.76 0 01.538-1.299h2.985v-6.964h-6.964v2.985a.76.76 0 01-1.299.538L23 38l5.13-5.13a.76.76 0 011.299.538v2.985h6.964v-6.964h-2.985a.76.76 0 01-.538-1.299L38 23l5.13 5.13a.76.76 0 01-.538 1.299h-2.985v6.964h6.964v-2.985a.76.76 0 011.299-.538L53 38z"
  })), React.createElement("defs", null, React.createElement("filter", {
    id: "filter0_d_3470_54",
    width: "34",
    height: "34",
    x: "21",
    y: "23",
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, React.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), React.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), React.createElement("feOffset", {
    dy: "2"
  }), React.createElement("feGaussianBlur", {
    stdDeviation: "1"
  }), React.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  }), React.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_3470_54"
  }), React.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_3470_54",
    result: "shape"
  })))));
};
const Zc = (0, g.memo)(Qc);
function $c() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Kc(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Kc(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Kc(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Kc(d, "constructor", u), Kc(u, "constructor", c), c.displayName = "GeneratorFunction", Kc(u, a, "GeneratorFunction"), Kc(d), Kc(d, a, "Generator"), Kc(d, r, function () {
    return this;
  }), Kc(d, "toString", function () {
    return "[object Generator]";
  }), ($c = function () {
    return {
      w: o,
      m
    };
  })();
}
function Kc(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Kc = function (e, t, n, r) {
    function o(t, n) {
      Kc(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Kc(e, t, n, r);
}
function Jc(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function Xc(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var eu = function () {
  var e = true,
    t = (0, y.useDispatch)(T.default),
    n = ((0, y.useSelect)(function (e) {
      return e(T.default).getQuizContents();
    }, [null == n ? void 0 : n.id]), (0, y.useSelect)(function (e) {
      return e(T.default).getQuiz();
    }, [])),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).selectQuestion();
    }, []),
    a = Lc().isValidQuestion,
    o = function (e, t) {
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
          if ("string" == typeof e) return Xc(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xc(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    i = o[0],
    l = o[1],
    c = function () {
      var e,
        o = (e = $c().m(function e(o) {
          var i, l, c;
          return $c().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                if (null !== o) {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                i = [{
                  id: Date.now(),
                  answer: "",
                  is_correct: !1,
                  order_number: 1,
                  temp: !0
                }, {
                  id: 1 + Date.now(),
                  answer: "",
                  is_correct: !1,
                  order_number: 1,
                  temp: !0
                }], l = {
                  type: null == o ? void 0 : o.type,
                  score: {
                    enabled: !0,
                    value: 1
                  }
                }, "true-false" === (null == o ? void 0 : o.type) ? i = [{
                  id: Date.now(),
                  answer: "True",
                  is_correct: !1,
                  order_number: 1,
                  temp: !0
                }, {
                  id: 1 + Date.now(),
                  answer: "False",
                  is_correct: !1,
                  order_number: 1,
                  temp: !0
                }] : "short-text" === (null == o ? void 0 : o.type) || "long-text" === (null == o ? void 0 : o.type) ? i = [{
                  id: Date.now(),
                  answer: "",
                  is_correct: !1,
                  order_number: 1,
                  temp: !0
                }] : "statement" === (null == o ? void 0 : o.type) || "fill-in-the-blank" === (null == o ? void 0 : o.type) ? i = [{
                  id: Date.now(),
                  answer: "",
                  is_correct: !0,
                  order_number: 1,
                  temp: !0
                }] : "reorder" !== (null == o ? void 0 : o.type) && "matching" !== o.type || (i = [{
                  id: Date.now(),
                  answer: "",
                  is_correct: !1,
                  order_number: 0,
                  temp: !0,
                  thumbnail_id: "",
                  image_url: "",
                  matching_data: {
                    label: "",
                    image_id: "",
                    image_url: ""
                  }
                }, {
                  id: 1 + Date.now(),
                  answer: "",
                  is_correct: !1,
                  order_number: 1,
                  temp: !0,
                  thumbnail_id: "",
                  image_url: "",
                  matching_data: {
                    label: "",
                    image_id: "",
                    image_url: ""
                  }
                }]), c = {
                  id: null == r ? void 0 : r.id,
                  name: "",
                  description: "",
                  order_number: null == r ? void 0 : r.order_number,
                  settings: l,
                  questions: i,
                  temp: !0,
                  quiz_id: null == n ? void 0 : n.id,
                  thumbnail_id: "",
                  image_url: "",
                  matching_data: {
                    label: "",
                    image_id: "",
                    image_url: ""
                  }
                }, t.updateQuestionData(c.id, c), a(c);
              case 2:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Jc(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Jc(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function (e) {
        return o.apply(this, arguments);
      };
    }();
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-default-quiz-editor",
    onDrop: function (t) {
      t.preventDefault();
      var n = JSON.parse(t.dataTransfer.getData("text/plain"));
      c(n);
    },
    onDragOver: function (e) {
      e.preventDefault();
    }
  }, React.createElement(Zc, null), React.createElement("p", {
    className: "ohmylms-default-quiz-editor-title"
  }, (0, b.__)("Drag & Drop", "ohmylms")), React.createElement("p", {
    className: "ohmylms-default-quiz-editor-description"
  }, (0, b.__)("Drag and drop a question here from right sidebar", "ohmylms"))), i && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: i,
    onClose: l
  })));
};
const tu = (0, g.memo)(eu);
function nu(e) {
  return function (e) {
    if (Array.isArray(e)) return ru(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return ru(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ru(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function ru(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var au = function (e) {
  var t = e.children;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-box-wrapper"
  }, t));
};
const ou = (0, g.memo)(au);
var iu = function (e) {
  var t = e.icon,
    n = e.label,
    r = e.iconColor;
  return React.createElement(I.BadgeWP, {
    isBorderLess: !0,
    variant: "secondary"
  }, React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "center",
    gap: 4
  }, t && React.createElement(t, {
    color: r
  }), n && React.createElement(I.TextWP, null, n)));
};
const lu = (0, g.memo)(iu);
var cu = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "15",
    height: "16",
    viewBox: "0 0 15 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M12.686 4.362a.748.748 0 00-.524.213.72.72 0 00-.217.515v8.139c-.021.368-.19.712-.469.959a1.439 1.439 0 01-1.02.356H4.544a1.439 1.439 0 01-1.02-.356 1.387 1.387 0 01-.469-.96V5.09a.72.72 0 00-.217-.515.748.748 0 00-1.047 0 .72.72 0 00-.217.515v8.139a2.82 2.82 0 00.902 1.987c.557.52 1.3.8 2.068.783h5.912a2.933 2.933 0 002.068-.783 2.829 2.829 0 00.903-1.987v-8.14a.72.72 0 00-.217-.514.748.748 0 00-.524-.213zm.741-2.182h-2.964V.727a.72.72 0 00-.217-.514A.748.748 0 009.723 0H5.278a.748.748 0 00-.524.213.72.72 0 00-.217.514v1.455H1.574a.748.748 0 00-.524.213.72.72 0 000 1.028.748.748 0 00.524.213h11.853a.748.748 0 00.523-.213.72.72 0 000-1.028.748.748 0 00-.523-.213zm-7.408 0v-.726h2.963v.727H6.019z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M6.76 11.636V6.545a.72.72 0 00-.218-.515.748.748 0 00-1.047 0 .72.72 0 00-.217.515v5.09a.72.72 0 00.217.515.748.748 0 001.047 0 .72.72 0 00.217-.514zm2.962 0V6.545a.72.72 0 00-.217-.515.748.748 0 00-1.047 0 .72.72 0 00-.217.515v5.09a.72.72 0 00.217.515.748.748 0 001.047 0 .72.72 0 00.217-.514z"
  })));
};
const uu = (0, g.memo)(cu);
var su = function (e) {
  var t = e.handleCopy,
    n = e.handleDelete,
    r = e.customClass;
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    align: "center",
    justify: "flex-end",
    gap: 1,
    className: "ohmylms-copy-and-delete ".concat(r)
  }, React.createElement(I.ButtonWP, {
    icon: React.createElement(yc, null),
    onClick: t,
    className: "ohmylms-copy-btn"
  }), React.createElement(I.ButtonWP, {
    icon: React.createElement(uu, null),
    className: "ohmylms-delete-btn",
    onClick: n
  })));
};
const du = (0, g.memo)(su);
var mu = ["Icon", "onClick"];
function pu() {
  return pu = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pu.apply(null, arguments);
}
var fu = function (e) {
  var t = e.Icon,
    n = void 0 === t ? Re : t,
    r = e.onClick,
    a = function (e, t) {
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
    }(e, mu);
  return React.createElement(React.Fragment, null, React.createElement(I.ButtonWP, pu({
    variant: "secondary",
    icon: React.createElement(n, null),
    onClick: r
  }, a), (0, b.__)("Replace", "ohmylms")));
};
const vu = (0, g.memo)(fu);
var gu = function (e) {
  var t = e.handleEdit,
    n = e.handleDelete,
    r = e.alertTitle,
    a = void 0 === r ? (0, b.__)("Delete Media", "ohmylms") : r,
    o = e.alertDescription,
    i = void 0 === o ? (0, b.__)("Are you sure you want to delete this media?", "ohmylms") : o,
    l = e.onCancel,
    c = void 0 === l ? function () {} : l,
    u = e.justify,
    s = void 0 === u ? "center" : u;
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: s,
    align: "center",
    gap: "2"
  }, React.createElement(vu, {
    onClick: t
  }), React.createElement(gr, {
    onCancel: c,
    onOK: n,
    alertTitle: a,
    alertDescription: i
  })));
};
const hu = (0, g.memo)(gu);
function yu(e, t) {
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
      if ("string" == typeof e) return bu(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bu(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function bu(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var _u = function (e) {
  var t = true;
  M().noConflict();
  var n = e.placeholder,
    r = e.question,
    a = e.onChange,
    o = e.customClass,
    i = void 0 === o ? "" : o,
    l = e.onImgUpload,
    c = e.onVideoUpload,
    u = e.videoSrc,
    s = e.imgSrc,
    d = e.onUploadComplete,
    m = e.quizType,
    p = e.description,
    f = (e.tooltip, e.proQuestionTypes),
    v = (e.error, (0, y.useDispatch)(T.default)),
    h = yu((0, g.useState)(p), 2),
    _ = (h[0], h[1], (0, y.useSelect)(function (e) {
      return e(T.default).selectQuizzesError();
    }, [])),
    w = (0, g.useRef)(null),
    E = yu((0, g.useState)(!1), 2),
    S = E[0],
    R = E[1],
    x = yu((0, g.useState)(null), 2),
    C = x[0],
    P = x[1],
    O = yu((0, g.useState)(!1), 2),
    k = O[0],
    j = O[1],
    F = (0, y.useSelect)(function (e) {
      return e(T.default).getAllIntegrations();
    }, []),
    N = function (e) {
      (function (e) {
        var t = [];
        "image" === e ? t = ["jpg", "jpeg", "png", "gif", "webp", "avif"] : "video" === e && (t = ["mp4", "mov", "avi", "mkv", "flv", "wmv", "webm"]);
        var n = ["image/jpeg", "image/png", "image/gif", "image/svg+xml", "image/webp"].join(","),
          r = ["video/mp4", "video/quicktime", "video/x-msvideo", "video/x-matroska"].join(","),
          a = wp.media({
            title: (0, b.__)("Select or Upload Media", "ohmylms"),
            button: {
              text: (0, b.__)("Use this media", "ohmylms")
            },
            multiple: !1,
            library: {
              type: e
            }
          });
        a.on("open", function () {
          a.content.mode("upload"), a.on("uploader:ready", function () {
            document.querySelectorAll('.moxie-shim-html5 input[type="file"]').forEach(function (t) {
              t.setAttribute("tabIndex", "-1"), t.setAttribute("multiple", "false"), t.setAttribute("aria-hidden", "true"), "video" === e ? t.setAttribute("accept", r) : t.setAttribute("accept", n);
            });
          });
        }), a.on("select", function () {
          var n = a.state().get("selection").first().toJSON(),
            r = t.some(function (e) {
              return n.url.toLowerCase().endsWith(e);
            }),
            o = "image" === e && "image" === n.type || "video" === e && "video" === n.type || n.type === e;
          r && o ? ("image" === e ? l(null == n ? void 0 : n.url, null == n ? void 0 : n.id) : "video" === e && c(null == n ? void 0 : n.url, null == n ? void 0 : n.id), d && d(n, e)) : alert((0, b.__)("Invalid file type or media type.", "ohmylms"));
        }), a.open();
      })(e);
    },
    D = function (e) {
      P(e);
    };
  (0, g.useEffect)(function () {
    var e = function (e) {
      !S || !w.current || w.current.contains(e.target) || e.target.closest(".ohmylms-history-list") || e.target.closest(".ohmylms-tooltip-box") || e.target.closest(".ohmylms-ai-image-prompt") || (R(!1), D(null));
    };
    return document.addEventListener("mousedown", e), function () {
      document.removeEventListener("mousedown", e);
    };
  }, [S]);
  var z = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px"
  };
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-quiz-question-box-wrapper ".concat(i, " ohmylms-quiz-type-").concat(m)
  }, React.createElement("div", {
    className: "ohmylms-quiz-question-box"
  }, React.createElement(W.A, {
    variant: "borderless",
    value: Ge(r),
    onChange: function (e) {
      return a("name", e);
    },
    placeholder: n,
    className: "ohmylms-quiz-question-box-text",
    style: {
      border: "none",
      background: "transparent",
      fontSize: 16,
      textAlign: "left",
      color: "#000D25",
      fontWeight: "500",
      resize: "none"
    },
    name: "questionName",
    autoComplete: "off"
  }), _ && !(null != r && r.trim()) && React.createElement("div", {
    className: "ohmylms-error-msg",
    style: {
      color: "red",
      marginTop: 4,
      textAlign: "left"
    }
  }, (0, b.__)("Field cannot be empty", "ohmylms")), (Boolean(s) || Boolean(u) || Boolean(C)) && React.createElement("div", {
    className: "ohmylms-quiz-question-box-media"
  }, C ? React.createElement(React.Fragment, null, React.createElement("img", {
    style: z,
    src: C,
    alt: "Course Thumb",
    className: "ohmylms-quiz-question-box-img"
  })) : React.createElement(React.Fragment, null, Boolean(s) && React.createElement("img", {
    className: "ohmylms-quiz-question-box-img",
    src: s,
    alt: "questions image",
    style: z
  })), Boolean(u) && React.createElement("video", {
    className: "ohmylms-quiz-question-box-video",
    src: u,
    controls: !0
  }), !C && React.createElement("div", {
    className: "ohmylms-quiz-question-box-media-controls"
  }, React.createElement(hu, {
    handleEdit: function () {
      return N(Boolean(s) ? "image" : "video");
    },
    handleDelete: function () {
      Boolean(s) ? l("") : c("");
    },
    alertTitle: (0, b.__)("Remove the ".concat(Boolean(s) ? "image" : "video", " "), "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to remove this ".concat(Boolean(s) ? "image" : "video", "?"), "ohmylms")
  })), React.createElement("div", {
    className: "ohmylms-quiz-question-box-media-controls"
  }, React.createElement(hu, {
    handleEdit: function () {
      return N(Boolean(s) ? "image" : "video");
    },
    handleDelete: function () {
      Boolean(s) ? l("") : c("");
    },
    alertTitle: (0, b.__)("Remove the ".concat(Boolean(s) ? "image" : "video", " "), "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to remove this ".concat(Boolean(s) ? "image" : "video", "?"), "ohmylms")
  })))), React.createElement(I.FlexWP, {
    wrap: !0,
    className: "ohmylms-quiz-question-box-media-btns",
    align: "center",
    justify: "center"
  }, !Boolean(s) && !Boolean(u) && React.createElement(React.Fragment, null, React.createElement(I.ButtonWP, {
    icon: React.createElement(ar, null),
    className: "ohmylms-media-uploader-button",
    onClick: function () {
      return N("image");
    }
  }, (0, b.__)("Add Image", "ohmylms")), React.createElement(I.ButtonWP, {
    icon: React.createElement(pe, null),
    className: "ohmylms-media-uploader-button",
    onClick: function () {
      return N("video");
    }
  }, (0, b.__)("Add Video", "ohmylms"))), null, S && null)), k && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: k,
    onClose: j
  })));
};
const wu = (0, g.memo)(_u);
function Eu(e) {
  return function (e) {
    if (Array.isArray(e)) return Su(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return Su(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Su(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Su(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ru(e) {
  return function (e) {
    if (Array.isArray(e)) return xu(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return xu(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xu(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function xu(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Cu(e) {
  return Cu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Cu(e);
}
