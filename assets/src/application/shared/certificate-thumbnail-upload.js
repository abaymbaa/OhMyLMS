// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var OL = function (e) {
  var t = true,
    n = e.label,
    r = e.value,
    a = e.color,
    o = e.onValueChange,
    i = e.onColorChange,
    l = e.placeholder,
    c = (e.presets, e.isItProFeature),
    u = function (e, t) {
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
    }(e, EL),
    s = function (e, t) {
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
          if ("string" == typeof e) return PL(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? PL(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2);
  return s[0], s[1], React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    direction: "column",
    gap: "2"
  }, React.createElement(I.HeadingWP, {
    level: 4
  }, React.createElement(I.FlexWP, {
    gap: 1,
    justify: "start"
  }, n, c && !t && React.createElement(React.Fragment, null, React.createElement(I.TooltipWP, {
    title: (0, b.__)("Enable PRO plugin for access this feature.", "ohmylms")
  }, React.createElement(Mt.A, null))))), React.createElement(I.FlexWP, {
    justify: "flex-start",
    gap: "2"
  }, React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, React.createElement(I.InputWP, SL({
    value: r,
    onChange: function (e) {
      return o(e);
    },
    type: "text",
    placeholder: l,
    style: xL(xL({}, null == u ? void 0 : u.style), {}, {
      width: "100%"
    }),
    disabled: c && !t
  }, u))), React.createElement(I.FlexItemWP, null, React.createElement(I.ColorPickerWP, {
    initialColor: a,
    onChange: function (e) {
      i(null == e ? void 0 : e.hex);
    },
    disabled: c && !t
  })))));
};
const kL = (0, g.memo)(OL);
function jL(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var AL = function (e) {
  M().noConflict();
  var t = e.thumbnail,
    n = void 0 === t ? null : t,
    r = e.onChange,
    a = e.onRemove,
    o = e.title,
    i = void 0 === o ? (0, b.__)("Thumbnail", "ohmylms") : o,
    l = e.tooltip,
    c = void 0 === l ? (0, b.__)("Information about thumbnail", "ohmylms") : l,
    u = e.alertTitle,
    s = void 0 === u ? (0, b.__)("Remove the thumbnail", "ohmylms") : u,
    d = e.alertDescription,
    m = void 0 === d ? (0, b.__)("Are you sure you want to remove the thumbnail?", "ohmylms") : d,
    p = e.imgMaxWidth,
    f = void 0 === p ? "100%" : p,
    v = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"],
    h = function (e, t) {
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
          if ("string" == typeof e) return jL(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jL(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    y = (h[0], h[1], function (e) {
      var t = wp.media({
        title: "Select or Upload Media",
        button: {
          text: "Use this media"
        },
        multiple: !1
      });
      t.on("select", function () {
        var n = t.state().get("selection").first().toJSON(),
          a = v.some(function (e) {
            return n.url.toLowerCase().endsWith(e);
          }),
          o = "image" === e && "image" === n.type || "video" === e && "video" === n.type;
        a && o ? "image" === e && r(n) : alert("Invalid file type or media type.");
      }), t.open();
    }),
    _ = {
      maxWidth: f,
      objectFit: "contain"
    };
  return React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 3
  }, React.createElement(I.FlexWP, {
    direction: "column",
    align: "flex-start",
    justify: "flex-start",
    gap: 4
  }, React.createElement(I.FlexWP, {
    gap: "small",
    align: "center"
  }, React.createElement(I.HeadingWP, {
    level: 4
  }, i), c && React.createElement(V.A, {
    title: c
  }, React.createElement(React.Fragment, null, React.createElement(Mt.A, null)))), n ? React.createElement(I.FlexItemWP, {
    isBlock: !0,
    style: {
      position: "relative",
      width: "100%"
    }
  }, React.createElement(I.FlexWP, {
    direction: "column",
    align: "center",
    justify: "center",
    gap: 2
  }, React.createElement("img", {
    style: _,
    src: n,
    alt: (0, b.__)("Thumbnail", "ohmylms")
  }), React.createElement(hu, {
    handleEdit: function () {
      return y("image");
    },
    handleDelete: function () {
      a();
    },
    alertTitle: s,
    alertDescription: m
  }))) : React.createElement(I.FlexWP, {
    direction: "column",
    align: "center",
    justify: "center",
    gap: 2,
    style: {
      width: "100%"
    }
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: function () {
      return y("image");
    }
  }, (0, b.__)("Select a file", "ohmylms")), React.createElement("p", null, (0, b.__)("Supported files: .png, .jpg, jpeg, .gif", "ohmylms"))))));
};
const ML = (0, g.memo)(AL);
function TL(e, t) {
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
  }(e, t) || IL(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function IL(e, t) {
  if (e) {
    if ("string" == typeof e) return FL(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? FL(e, t) : void 0;
  }
}
function FL(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var NL = function () {
  var e = true,
    t = TL((0, g.useState)(D("instructor_signature_img", "src")), 2),
    n = t[0],
    r = t[1],
    a = TL((0, g.useState)(D("director_signature_img", "src")), 2),
    o = a[0],
    i = a[1],
    l = (0, y.useSelect)(function (e) {
      return e(T.default).selectCertificate();
    }, []),
    c = (0, y.useDispatch)(T.default),
    u = TL((0, g.useState)(D("title_text", "content")), 2),
    s = u[0],
    d = u[1],
    m = TL((0, g.useState)(D("subtitle_text", "content")), 2),
    p = m[0],
    f = m[1],
    v = TL((0, g.useState)(D("description_text", "content")), 2),
    h = v[0],
    _ = v[1],
    w = TL((0, g.useState)(D("surname_text", "content")), 2),
    E = w[0],
    S = (w[1], TL((0, g.useState)(D("recognition_text", "content")), 2)),
    R = S[0],
    x = S[1],
    C = TL((0, g.useState)(D("director_signature_text", "content")), 2),
    P = C[0],
    O = C[1],
    k = TL((0, g.useState)(D("instructor_signature_text", "content")), 2),
    j = k[0],
    A = k[1],
    M = TL((0, g.useState)(!1), 2),
    F = M[0],
    N = M[1];
  function D(e, t) {
    var n,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      a = function (n) {
        if (n) {
          var o,
            i = function (e) {
              var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (!t) {
                if (Array.isArray(e) || (t = IL(e))) {
                  t && (e = t);
                  var n = 0,
                    r = function () {};
                  return {
                    s: r,
                    n: function () {
                      return n >= e.length ? {
                        done: !0
                      } : {
                        done: !1,
                        value: e[n++]
                      };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: r
                  };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var a,
                o = !0,
                i = !1;
              return {
                s: function () {
                  t = t.call(e);
                },
                n: function () {
                  var e = t.next();
                  return o = e.done, e;
                },
                e: function (e) {
                  i = !0, a = e;
                },
                f: function () {
                  try {
                    o || null == t.return || t.return();
                  } finally {
                    if (i) throw a;
                  }
                }
              };
            }(n);
          try {
            for (i.s(); !(o = i.n()).done;) {
              var l = o.value;
              if (l.selector === e) {
                var c;
                if (r && "style" === t && l[t]) return null === (c = l[t][r]) || void 0 === c ? void 0 : c.replace("!important", "").trim();
                if (t in l) return "string" == typeof l[t] ? l[t].replace("!important", "").trim() : l[t];
              }
              if (l.children) {
                var u = a(l.children);
                if (u) return u;
              }
            }
          } catch (e) {
            i.e(e);
          } finally {
            i.f();
          }
          return null;
        }
      };
    return a(null == l || null === (n = l.contents) || void 0 === n ? void 0 : n.elements);
  }
  var W = [{
      label: (0, b.__)("Document Color", "ohmylms"),
      colors: ["#FFFFFF", "var(--ohmylms-primary-color)", "#F6F6F6", "#ED9702", "#000D21"]
    }, {
      label: (0, b.__)("Default Color", "ohmylms"),
      colors: ["#FFFFFF", "#EBEBEB", "#D6D6D6", "#999999", "#707070", "#474747", "#068EA8", "#08C0DF", "#5BE1E6", "#37B6FE", "#5171FF", "#0049AC", "#04B55F", "#7DD856", "#C0FF72", "#FEDE58", "#FFBC59", "#FF914D", "#5E16EA", "#8C51FF", "#CB6BE5", "#FF57BF", "#FF5756", "#FE3130"]
    }],
    z = function (t, n, r) {
      var a = {
        selector: t,
        key: n,
        value: r
      };
      c.updateClassicData(a);
    };
  return (0, g.useEffect)(function () {
    r(D("instructor_signature_img", "src")), i(D("director_signature_img", "src"));
  }, []), React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    style: {
      borderRadius: 0
    },
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    paddingX: 4,
    paddingY: 3
  }, React.createElement(I.FlexWP, {
    align: "start",
    justify: "start",
    direction: "column",
    gap: 4
  }, React.createElement(I.FlexItemWP, {
    isBlock: !0,
    style: {
      width: "100%"
    }
  }, "string" == typeof s && React.createElement(kL, {
    label: (0, b.__)("Title Text", "ohmylms"),
    color: D("title_text", "style", "color"),
    value: s,
    onValueChange: function (t) {
      d(t), z("title_text", "content", t);
    },
    onColorChange: function (e) {
      return z("title_text", "style", {
        color: "".concat(e, " !important")
      });
    },
    presets: W,
    isItProFeature: !0
  })), React.createElement(I.FlexItemWP, {
    isBlock: !0,
    style: {
      width: "100%"
    }
  }, "string" == typeof p && React.createElement(kL, {
    label: (0, b.__)("Subtitle Text", "ohmylms"),
    color: D("subtitle_text", "style", "color"),
    value: p,
    onValueChange: function (t) {
      f(t), z("subtitle_text", "content", t);
    },
    onColorChange: function (e) {
      return z("subtitle_text", "style", {
        color: "".concat(e, " !important")
      });
    },
    presets: W,
    isItProFeature: !0
  })), React.createElement(I.FlexItemWP, {
    isBlock: !0,
    style: {
      width: "100%"
    }
  }, "string" == typeof h && React.createElement(kL, {
    label: (0, b.__)("Description Text", "ohmylms"),
    color: D("description_text", "style", "color"),
    value: h,
    onValueChange: function (t) {
      _(t), z("description_text", "content", t);
    },
    onColorChange: function (e) {
      return z("description_text", "style", {
        color: "".concat(e, " !important")
      });
    },
    presets: W,
    isItProFeature: !0
  })), React.createElement(I.FlexItemWP, {
    isBlock: !0,
    style: {
      width: "100%"
    }
  }, "string" == typeof E && React.createElement(kL, {
    label: (0, b.__)("Surname Text", "ohmylms"),
    color: D("surname_text", "style", "color"),
    value: E,
    onColorChange: function (e) {
      return z("surname_text", "style", {
        color: "".concat(e, " !important")
      });
    },
    presets: W,
    disabled: !0,
    isItProFeature: !0
  })), React.createElement(I.FlexItemWP, {
    isBlock: !0,
    style: {
      width: "100%"
    }
  }, "string" == typeof R && React.createElement(kL, {
    label: (0, b.__)("Recognition Text", "ohmylms"),
    color: D("recognition_text", "style", "color"),
    value: R,
    onValueChange: function (t) {
      x(t), z("recognition_text", "content", t);
    },
    onColorChange: function (e) {
      return z("recognition_text", "style", {
        color: "".concat(e, " !important")
      });
    },
    presets: W,
    isItProFeature: !0
  })), React.createElement(I.FlexItemWP, {
    isBlock: !0,
    style: {
      width: "100%"
    }
  }, "string" == typeof j && React.createElement(kL, {
    label: (0, b.__)("Instructor Signature Label", "ohmylms"),
    color: D("instructor_signature_text", "style", "color"),
    value: j,
    onValueChange: function (t) {
      A(t), z("instructor_signature_text", "content", t);
    },
    onColorChange: function (e) {
      return z("instructor_signature_text", "style", {
        color: "".concat(e, " !important")
      });
    },
    presets: W,
    isItProFeature: !0
  })), React.createElement(I.FlexItemWP, {
    isBlock: !0,
    style: {
      width: "100%"
    }
  }, "string" == typeof P && React.createElement(kL, {
    label: (0, b.__)("Director Signature Label", "ohmylms"),
    color: D("director_signature_text", "style", "color"),
    value: P,
    onValueChange: function (t) {
      O(t), z("director_signature_text", "content", t);
    },
    onColorChange: function (e) {
      return z("director_signature_text", "style", {
        color: "".concat(e, " !important")
      });
    },
    presets: W,
    isItProFeature: !0
  })), React.createElement(I.FlexItemWP, {
    isBlock: !0,
    style: {
      width: "100%"
    }
  }, "string" == typeof j && React.createElement(ML, {
    title: (0, b.__)("Instructor Signature", "ohmylms"),
    tooltip: null,
    thumbnail: n,
    alertTitle: (0, b.__)("Remove the signature", "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to remove the signature?", "ohmylms"),
    onRemove: function () {
      r(null), z("instructor_signature_img", "src", "");
    },
    onChange: function (e) {
      r(null == e ? void 0 : e.url), z("instructor_signature_img", "src", null == e ? void 0 : e.url);
    }
  })), React.createElement(I.FlexItemWP, {
    isBlock: !0,
    style: {
      width: "100%"
    }
  }, "string" == typeof P && React.createElement(ML, {
    title: (0, b.__)("Director Signature", "ohmylms"),
    tooltip: null,
    thumbnail: o,
    alertTitle: (0, b.__)("Remove the signature", "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to remove the signature?", "ohmylms"),
    onRemove: function () {
      i(null), z("director_signature_img", "src", "");
    },
    onChange: function (e) {
      i(null == e ? void 0 : e.url), z("director_signature_img", "src", null == e ? void 0 : e.url);
    }
  }))))), F && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: F,
    onClose: N
  })));
};
const DL = (0, g.memo)(NL);
function WL(e) {
  return WL = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, WL(e);
}
var zL = ["element_type", "class_name", "style", "src", "alt", "content", "children", "component_name"];
function BL(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function LL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? BL(Object(n), !0).forEach(function (t) {
      VL(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : BL(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function VL(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != WL(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != WL(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == WL(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var HL = function (e) {
    return e.replace(/-([a-z])/g, function (e, t) {
      return t.toUpperCase();
    });
  },
  GL = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if (!e) return null;
    var n = e.element_type,
      r = e.class_name,
      a = e.style,
      o = e.src,
      i = e.alt,
      l = e.content,
      c = e.children,
      u = e.component_name,
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
      }(e, zL),
      d = a ? Object.keys(a).reduce(function (e, t) {
        return "color" === t && a[t].includes("!important") ? e[t] = a[t] : e[HL(t)] = a[t], e;
      }, {}) : {};
    if ("custom_component" === n) return h().createElement(u, LL({}, s));
    var m = (0, g.useRef)(null);
    return (0, g.useEffect)(function () {
      m.current && a && Object.keys(a).forEach(function (e) {
        a[e].includes("!important") ? m.current.style.setProperty(HL(e), a[e].replace(" !important", ""), "important") : m.current.style[HL(e)] = a[e];
      });
    }, [a]), "img" !== n || o && "" !== o.trim() ? h().createElement(n, LL(LL(LL({
      key: t,
      className: r,
      style: d,
      ref: m
    }, s), o ? {
      src: o
    } : {}), i ? {
      alt: i
    } : {}), l || c && c.map(function (e, n) {
      return GL(e, "".concat(t, "-").concat(n));
    })) : null;
  };
function UL(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var qL = function (e) {
  var t,
    n = e.certificateRef,
    r = (0, y.useSelect)(function (e) {
      return e(T.default).selectCertificate();
    }, []),
    a = function (e, t) {
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
          if ("string" == typeof e) return UL(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? UL(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(1), 2),
    o = a[0],
    i = a[1];
  return (0, g.useEffect)(function () {
    var e = function () {
      var e = null == n ? void 0 : n.current,
        t = null == e ? void 0 : e.parentElement;
      if (e && t) {
        var r = t.clientWidth / e.scrollWidth - .07;
        i(Math.min(1, r));
      }
    };
    return e(), window.addEventListener("resize", e), function () {
      window.removeEventListener("resize", e);
    };
  }, [n]), React.createElement(I.SpacerWP, {
    padding: 4
  }, React.createElement(I.FlexWP, {
    align: "center",
    justify: "center"
  }, React.createElement("div", {
    ref: n,
    style: {
      transform: "scale(".concat(o, ")"),
      transformOrigin: "top"
    }
  }, (null == r || null === (t = r.contents) || void 0 === t ? void 0 : t.elements).map(function (e, t) {
    return h().createElement(h().Fragment, {
      key: t
    }, GL(e, t.toString()));
  }))));
};
const YL = (0, g.memo)(qL);
function QL(e) {
  return QL = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, QL(e);
}
function ZL() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return $L(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : ($L(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, $L(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, $L(d, "constructor", u), $L(u, "constructor", c), c.displayName = "GeneratorFunction", $L(u, a, "GeneratorFunction"), $L(d), $L(d, a, "Generator"), $L(d, r, function () {
    return this;
  }), $L(d, "toString", function () {
    return "[object Generator]";
  }), (ZL = function () {
    return {
      w: o,
      m
    };
  })();
}
function $L(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  $L = function (e, t, n, r) {
    function o(t, n) {
      $L(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, $L(e, t, n, r);
}
function KL(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function JL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? KL(Object(n), !0).forEach(function (t) {
      XL(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : KL(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function XL(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != QL(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != QL(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == QL(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function eV(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function tV(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        eV(o, r, a, i, l, "next", e);
      }
      function l(e) {
        eV(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
