// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var sr = function (e) {
  var t = e.icon,
    n = (e.buttonLabel, e.onClick),
    r = void 0 === n ? function () {
      return console.error("No onClick function provided");
    } : n,
    a = e.supportedTypes,
    o = void 0 === a ? [] : a,
    i = e.type,
    l = void 0 === i ? "any" : i,
    c = (e.onChange, e.handleExternalMedia),
    u = void 0 === c ? function () {
      return console.error("No onExternalMedia function provided");
    } : c,
    s = e.showInput,
    d = e.setShowInput,
    m = e.value,
    p = void 0 === m ? "" : m,
    f = cr((0, g.useState)(null != p ? p : ""), 2),
    v = f[0],
    h = f[1],
    y = cr((0, g.useState)(!1), 2),
    _ = y[0],
    w = y[1],
    E = [{
      title: (0, b.__)("Add from local", "ohmylms"),
      key: "1",
      onClick: function () {
        return r(l);
      }
    }, {
      title: (0, b.__)("Add From external URL", "ohmylms"),
      key: "2",
      onClick: function () {
        d(!0);
      }
    }],
    S = function (e) {
      return !!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e);
    },
    R = function (e) {
      var t = e ? e.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/) : "";
      if (t) {
        var n = t[1];
        return "https://www.youtube.com/embed/".concat(n);
      }
      var r = e.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (r) {
        var a = r[1];
        return "https://drive.google.com/file/d/".concat(a, "/preview");
      }
      var o = e.match(/bilibili\.com\/video\/([a-zA-Z0-9]+)/);
      if (o) {
        var i = o[1];
        return "https://player.bilibili.com/player.html?bvid=".concat(i, "&page=1");
      }
      var l = e.match(/open\.spotify\.com\/(track|album|playlist|artist)\/([a-zA-Z0-9]+)/);
      if (l) {
        var c = l[1],
          u = l[2];
        return "https://open.spotify.com/embed/".concat(c, "/").concat(u);
      }
      return e;
    },
    x = function () {
      var e,
        t = (e = or().m(function e() {
          var t;
          return or().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                if (S(null != v ? v : "")) {
                  e.n = 2;
                  break;
                }
                return w(!0), e.n = 1, new Promise(function (e) {
                  return setTimeout(e, 2e3);
                });
              case 1:
                w(!1), u({
                  url: null
                }, l), e.n = 3;
                break;
              case 2:
                t = R(v), u({
                  url: t
                }, l);
              case 3:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              lr(o, r, a, i, l, "next", e);
            }
            function l(e) {
              lr(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    C = function () {
      return React.createElement(I.ButtonWP, {
        variant: "primary"
      }, "Select ", l);
    };
  return React.createElement(React.Fragment, null, _ && React.createElement(I.NoticeWP, {
    status: "error",
    isClosable: !0,
    onRemove: function () {
      return w(!1);
    }
  }, (0, b.__)("Please enter a valid URL", "ohmylms")), React.createElement(I.CardWP, null, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 4
  }, React.createElement(I.FlexWP, {
    direction: "column",
    justify: "center",
    align: "center",
    gap: 6,
    marginBottom: 0,
    padding: 4
  }, t && t, s ? React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: "center",
    gap: 4,
    align: "center",
    style: {
      width: "100%"
    }
  }, React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, React.createElement(I.InputWP, {
    type: "url",
    placeholder: (0, b.__)("Enter URL", "ohmylms"),
    onChange: function (e) {
      h(null == e ? void 0 : e.trim());
    },
    value: v
  })), React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    justify: "flex-start",
    gap: 4
  }, React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: x,
    className: "ohmylms-file-uploader-"
  }, (0, b.__)("Save URL", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: function () {
      return d(!1);
    },
    className: "ohmylms-file-uploader-cancel"
  }, (0, b.__)("Cancel", "ohmylms")))))) : React.createElement(I.DropdownMenuWP, {
    title: "Upload",
    controls: E,
    icon: React.createElement(C, null)
  }), React.createElement("p", null, (0, b.__)("Supported Files:", "ohmylms"), " ", o.join(", "))))));
};
const dr = (0, g.memo)(sr);
var mr = ["Icon", "buttonText", "onCancel", "onOK", "alertTitle", "alertDescription", "modalPosition", "iconOnly"];
function pr() {
  return pr = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pr.apply(null, arguments);
}
function fr(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var vr = function (e) {
  var t = e.Icon,
    n = void 0 === t ? We : t,
    r = e.buttonText,
    a = void 0 === r ? (0, b.__)("Delete", "ohmylms") : r,
    o = e.onCancel,
    i = void 0 === o ? function () {} : o,
    l = e.onOK,
    c = void 0 === l ? function () {
      return console.warn("onOK is not defined");
    } : l,
    u = e.alertTitle,
    s = e.alertDescription,
    d = e.modalPosition,
    m = void 0 === d ? "center" : d,
    p = e.iconOnly,
    f = void 0 !== p && p,
    v = function (e, t) {
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
    }(e, mr),
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
          if ("string" == typeof e) return fr(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fr(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    y = h[0],
    _ = h[1];
  return React.createElement(React.Fragment, null, React.createElement(I.ButtonWP, pr({
    variant: f ? "text" : "primary",
    icon: React.createElement(n, null),
    onClick: function () {
      return _(!0);
    }
  }, v), !f && a), y && React.createElement(Ie, {
    title: u,
    description: s,
    onClose: function () {
      _(!1), i();
    },
    onDelete: function () {
      _(!1), c();
    },
    isOpen: y,
    modalPosition: m,
    isDelete: !0
  }));
};
const gr = (0, g.memo)(vr);
var hr = ["mediaUrl", "sectionType", "setMediaURL", "handleExternalMedia", "setIsExternalMedia"];
function yr() {
  return yr = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yr.apply(null, arguments);
}
var br = function (e) {
  var t = e.mediaUrl,
    n = e.sectionType,
    r = e.setMediaURL,
    a = e.handleExternalMedia,
    o = e.setIsExternalMedia,
    i = function (e, t) {
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
    }(e, hr),
    l = (0, z.A)(),
    c = l.openNotificationWithIcon,
    u = l.contextHolder,
    s = function (e, t) {
      if ("youtube" === t) {
        var n = e.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/);
        return n ? n[1] : null;
      }
      if ("vimeo" === t) {
        var r = e.match(/vimeo\.com\/(\d+)/);
        return r ? r[1] : null;
      }
      if ("spotify" === t) {
        var a = e.match(/track\/([a-zA-Z0-9]+)/);
        return a ? a[1] : null;
      }
      return e;
    },
    d = "audio" === n,
    m = function (e) {
      for (var t = [{
          name: "youtube",
          regex: /(?:youtube\.com|youtu\.be)/,
          embedUrl: function (e, t) {
            return "audio" === t ? "https://www.youtube.com/embed/".concat(e, "?controls=0&showinfo=0&rel=0") : "https://www.youtube.com/embed/".concat(e);
          }
        }, {
          name: "vimeo",
          regex: /vimeo\.com/,
          embedUrl: function (e, t) {
            return "audio" === t ? "https://player.vimeo.com/video/".concat(e, "?background=1") : "https://player.vimeo.com/video/".concat(e);
          }
        }, {
          name: "spotify",
          regex: /spotify\.com|open\.spotify\.com/,
          embedUrl: function (e, t) {
            return "audio" === t ? "https://open.spotify.com/embed/track/".concat(e) : null;
          }
        }, {
          name: "soundcloud",
          regex: /soundcloud\.com/,
          embedUrl: function (e) {
            return "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(e), "&auto_play=false");
          }
        }, {
          name: "facebook",
          regex: /facebook\.com/,
          embedUrl: function (e) {
            return "https://www.facebook.com/plugins/video.php?href=".concat(encodeURIComponent(e), "&show_text=false");
          }
        }, {
          name: "generic",
          regex: /\.(mp4|webm|ogg|mp3|wav|m4a|aac)(\?.*)?$/,
          embedUrl: function (e) {
            return e;
          }
        }], r = 0, a = t; r < a.length; r++) {
        var o = a[r];
        if (o.regex.test(e)) {
          var i = s(e, o.name);
          return i ? o.embedUrl(i, n) : null;
        }
      }
      return null;
    }(t),
    p = /\.(mp4|webm|ogg|mp3|wav|m4a|aac)(\?.*)?$/i.test(t),
    f = /\.(mp3|wav|m4a|aac)(\?.*)?$/i.test(t);
  return m || setTimeout(function () {
    r(null), o(!1);
  }, 1500), (0, g.useEffect)(function () {
    m || (c("error", "Invalid or unsupported media URL. Please provide a valid link."), r(null), a({
      ulr: null
    }, n, !0), o(!1));
  }, [t]), h().createElement(h().Fragment, null, u, p ? f || d ? h().createElement("audio", {
    controls: !0,
    src: m,
    style: {
      width: "300px"
    }
  }) : h().createElement("video", {
    controls: !0,
    src: m,
    width: "100%",
    height: "100%"
  }) : h().createElement("iframe", yr({}, i, {
    src: m,
    width: d ? "300" : "560",
    height: d ? "80" : "315",
    style: {
      border: 0
    },
    allow: "autoplay; encrypted-media",
    allowFullScreen: !d,
    title: (0, b.__)("Embedded Media", "ohmylms")
  })));
};
const _r = (0, g.memo)(br);
var wr = n(98243);
function Sr(e, t) {
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
      if ("string" == typeof e) return Rr(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rr(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Rr(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var xr = function (e) {
  var t = true;
  M().noConflict();
  var n = e.limit,
    r = void 0 === n ? 1 : n,
    a = e.src,
    o = void 0 === a ? "" : a,
    i = e.videoSrc,
    l = void 0 === i ? "" : i,
    c = e.audioSrc,
    u = void 0 === c ? "" : c,
    s = e.type,
    d = void 0 === s ? "both" : s,
    m = e.supportedTypes,
    p = void 0 === m ? [".jpg", ".jpeg", ".png", ".mp4", ".mov", ".webp"] : m,
    f = e.onUploadComplete,
    v = e.onRemoveMedia,
    h = e.align,
    _ = void 0 === h ? "left" : h,
    w = e.fileType,
    E = void 0 === w ? "image_video" : w,
    S = e.addImgText,
    R = void 0 === S ? (0, b.__)("Add Cover Image", "ohmylms") : S,
    x = (void 0 === e.addVideoText && (0, b.__)("Add Cover Video", "ohmylms"), e.mediaId),
    C = e.onExternalUploadComplete,
    P = void 0 === C ? function () {} : C,
    O = (0, y.useDispatch)(T.default),
    k = Sr((0, g.useState)(null), 2),
    j = k[0],
    A = k[1],
    F = Sr((0, g.useState)(null), 2),
    N = F[0],
    D = F[1],
    W = Sr((0, g.useState)(null), 2),
    z = W[0],
    B = W[1],
    V = Sr((0, g.useState)(!1), 2),
    H = V[0],
    U = V[1],
    q = Sr((0, g.useState)(!1), 2),
    Y = q[0],
    Q = q[1],
    Z = Sr((0, g.useState)(!1), 2),
    $ = Z[0],
    K = Z[1],
    J = Sr((0, g.useState)(null), 2),
    X = J[0],
    ee = J[1],
    te = Sr((0, g.useState)(!1), 2),
    ne = te[0],
    re = te[1],
    ae = (0, g.useRef)(null),
    oe = Sr((0, g.useState)(!1), 2),
    ie = oe[0],
    le = oe[1],
    ce = Sr((0, g.useState)(!1), 2),
    ue = ce[0],
    se = ce[1],
    me = (0, y.useSelect)(function (e) {
      return e(T.default).getAllIntegrations();
    }, []);
  (0, g.useEffect)(function () {
    o && (A(o), x || U(!0));
  }, [o]), (0, g.useEffect)(function () {
    l && !$ && (D(l), K(!1), x || U(!0));
  }, [l]), (0, g.useEffect)(function () {
    u && !$ && (B(u), K(!1), x || U(!0));
  }, [u]);
  var fe = function (e) {
      var t = ["jpg", "jpeg", "png", "gif", "svg", "webp"],
        n = ["mp4", "mov", "avi", "mkv"],
        a = ["mp3", "wav", "aac", "flac", "m4a", "ogg", "mpeg"],
        o = ["image/jpeg", "image/png", "image/gif", "image/svg+xml", "image/webp"].join(","),
        i = ["video/mp4", "video/quicktime", "video/x-msvideo", "video/x-matroska"].join(","),
        l = ["audio/mp3", "audio/aac", "audio/flac", "audio/m4a", "audio/mpeg", "audio/wav", "audio/ogg"].join(","),
        c = wp.media({
          title: "Select or Upload Media",
          button: {
            text: "Use this media"
          },
          multiple: r > 1,
          library: {
            type: e
          }
        });
      c.on("open", function () {
        c.content.mode("upload"), c.on("uploader:ready", function () {
          document.querySelectorAll('.moxie-shim-html5 input[type="file"]').forEach(function (t) {
            t.setAttribute("tabIndex", "-1"), t.setAttribute("multiple", "false"), t.setAttribute("aria-hidden", "true"), "video" === e ? t.setAttribute("accept", i) : "audio" === e ? t.setAttribute("accept", l) : t.setAttribute("accept", o);
          });
        });
      }), c.on("select", function () {
        var r = c.state().get("selection").first(),
          o = r.get("filesizeInBytes"),
          i = r.toJSON(),
          l = t.some(function (e) {
            return i.url.toLowerCase().endsWith(e);
          });
        "video" === e && (l = n.some(function (e) {
          return i.url.toLowerCase().endsWith(e);
        })), "audio" === e && (l = a.some(function (e) {
          return i.url.toLowerCase().endsWith(e);
        }));
        var u = "image" === e && "image" === i.type || "video" === e && "video" === i.type || "audio" === e && "audio" === i.type || i.type === e;
        if ("image" === e && o > 5242880) alert((0, b.__)("Image exceeds the 5MB size limit. Please choose a smaller file.", "ohmylms"));else if (l && u) {
          var s;
          "image" === e ? A(null == i || null === (s = i.sizes) || void 0 === s || null === (s = s.large) || void 0 === s ? void 0 : s.url) : "video" === e ? (D(null == i ? void 0 : i.url), K(!1)) : "audio" === e && (B(null == i ? void 0 : i.url), K(!1)), f && f(i, e);
        } else alert("Invalid file type or media type.");
      }), c.open();
    },
    ge = function () {
      A(null), v && v("image");
    },
    he = function () {
      D(null), Q(!1), U(!1), K(!0), v && v("video");
    },
    ye = function () {
      B(null), U(!1), K(!0), v && v("audio");
    },
    be = function (e, t, n) {
      P(e, t), U(!n), Q(!1), "audio" === t ? (B(null == e ? void 0 : e.url), K(!1)) : (D(null == e ? void 0 : e.url), K(!1));
    },
    _e = function (e) {
      H ? Q(!0) : fe(e);
    },
    we = function (e) {
      f({
        id: null == e ? void 0 : e.id,
        url: null == e ? void 0 : e.source_url
      }, "image"), ee(null), le(!1);
    },
    Ee = function (e) {
      ee(e);
    };
  return (0, g.useEffect)(function () {
    var e = function (e) {
      !ie || !ae.current || ae.current.contains(e.target) || e.target.closest(".ohmylms-history-list") || e.target.closest(".ohmylms-tooltip-box") || e.target.closest(".ohmylms-ai-image-prompt") || (le(!1), Ee(null));
    };
    return document.addEventListener("mousedown", e), function () {
      document.removeEventListener("mousedown", e);
    };
  }, [ie]), React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-media-uploader ".concat(j || N || z ? "ohmylms-has-media" : "")
  }, React.createElement("div", {
    className: "ohmylms-media-contents ".concat(E),
    style: {
      position: "relative",
      maxHeight: "350px",
      overflow: "hidden",
      borderRadius: "8px"
    },
    onMouseEnter: function () {
      return re(!0);
    },
    onMouseLeave: function () {
      return re(!1);
    }
  }, Boolean(X || j) && !Boolean(N) && "image_video" === E && React.createElement(React.Fragment, null, React.createElement("img", {
    src: null != X ? X : j,
    alt: "Uploaded cover",
    style: {
      maxWidth: "100%"
    }
  })), Boolean(N) && "image_video" === E && React.createElement("video", {
    src: N,
    alt: "Uploaded cover",
    poster: j || "",
    controls: !0,
    style: {
      maxWidth: "100%"
    }
  }), "video" === E && React.createElement(React.Fragment, null, Boolean(N) && !Y ? H ? React.createElement(_r, {
    mediaUrl: N,
    sectionType: "video",
    className: "ohmylms-external-video",
    setMediaURL: D,
    handleExternalMedia: be,
    setIsExternalMedia: U
  }) : React.createElement("video", {
    src: N,
    alt: "Uploaded cover",
    poster: j || "",
    controls: !0,
    style: {
      maxWidth: "100%"
    }
  }) : React.createElement(React.Fragment, null, React.createElement(dr, {
    type: "video",
    onClick: fe,
    buttonLabel: (0, b.__)("Select a video", "ohmylms"),
    icon: React.createElement(pe, null),
    supportedTypes: [".mp4", ".mov", ".avi", ".mkv", ".flv", ".wmv", ".webm"],
    handleExternalMedia: be,
    setShowInput: Q,
    showInput: Y,
    value: N
  }))), "audio" === E && React.createElement(React.Fragment, null, Boolean(z) && !Y ? H ? React.createElement("div", {
    className: "ohmylms-media-audio-wrapper"
  }, React.createElement(_r, {
    mediaUrl: z,
    sectionType: "audio",
    setMediaURL: B,
    handleExternalMedia: be,
    setIsExternalMedia: U
  }), React.createElement(I.FlexWP, {
    gap: 4,
    align: "center",
    justify: "flex-end",
    className: "crlsm-media-controls-audio"
  }, React.createElement(I.ButtonWP, {
    variant: "primary",
    icon: React.createElement(Re, null),
    onClick: function () {
      return _e("audio");
    }
  }, (0, b.__)("Replace", "ohmylms")), React.createElement(gr, {
    onOK: ye,
    alertTitle: (0, b.__)("Remove the audio", "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to remove this audio?", "ohmylms"),
    modalPosition: "top"
  }))) : React.createElement("div", {
    className: "ohmylms-media-audio-wrapper"
  }, React.createElement("audio", {
    src: z,
    controls: !0
  }), React.createElement(I.FlexWP, {
    gap: 4,
    align: "center",
    justify: "flex-end"
  }, React.createElement(I.ButtonWP, {
    variant: "primary",
    icon: React.createElement(Re, null),
    onClick: function () {
      return _e("audio");
    }
  }, (0, b.__)("Replace", "ohmylms")), React.createElement(gr, {
    onOK: ye,
    alertTitle: (0, b.__)("Remove the audio", "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to remove this audio?", "ohmylms")
  }))) : React.createElement(React.Fragment, null, React.createElement(dr, {
    type: "audio",
    onClick: fe,
    buttonLabel: (0, b.__)("Select an audio", "ohmylms"),
    icon: React.createElement(ve, null),
    supportedTypes: p,
    handleExternalMedia: be,
    setShowInput: Q,
    showInput: Y,
    value: z
  }))), React.createElement(I.FlexWP, {
    align: "center",
    justify: "flex-end",
    gap: 4,
    className: "crlsm-media-controls",
    style: {
      position: "absolute",
      bottom: "50%",
      right: "30%",
      opacity: ne && !X ? "1" : "0",
      visibility: ne && !X ? "visible" : "hidden",
      transition: "opacity 0.3s ease-in-out",
      width: "auto"
    }
  }, Boolean(j) && !Boolean(N) && React.createElement(React.Fragment, null, React.createElement(I.ButtonWP, {
    variant: "primary",
    icon: React.createElement(Re, null),
    onClick: function () {
      return fe("image");
    }
  }, (0, b.__)("Replace", "ohmylms")), React.createElement(gr, {
    onOK: ge,
    alertTitle: (0, b.__)("Remove the image", "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to remove this image?", "ohmylms")
  })), Boolean(N) && Boolean(j) && React.createElement(React.Fragment, null, React.createElement(gr, {
    buttonText: (0, b.__)("Delete Video", "ohmylms"),
    onOK: he,
    alertTitle: (0, b.__)("Remove the video", "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to remove this video?", "ohmylms")
  }), React.createElement(gr, {
    buttonText: (0, b.__)("Delete Image", "ohmylms"),
    onOK: ge,
    alertTitle: (0, b.__)("Remove the image", "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to remove this image?", "ohmylms")
  })), !Boolean(j) && Boolean(N) && !Y && React.createElement(React.Fragment, null, React.createElement(I.ButtonWP, {
    variant: "primary",
    icon: React.createElement(Re, null),
    onClick: function () {
      return _e("video");
    }
  }, (0, b.__)("Replace", "ohmylms")), React.createElement(gr, {
    onOK: he,
    alertTitle: (0, b.__)("Remove the video", "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to remove this video?", "ohmylms")
  })))), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement(I.FlexWP, {
    align: "center",
    justify: "center" === _ ? "center" : "right" === _ ? "flex-end" : "flex-start",
    gap: 0,
    className: "ohmylms-media-uploader-buttons ".concat(j || N ? "ohmylms-has-media" : "")
  }, React.createElement(I.FlexWP, {
    gap: 2,
    justify: "flex-start",
    style: {
      position: "relative"
    }
  }, ("image" === d || "both" === d) && !Boolean(j) && "image_video" === E && React.createElement(React.Fragment, null, React.createElement(I.ButtonWP, {
    variant: "secondary",
    icon: React.createElement(ar, null),
    className: "ohmylms-media-uploader-button",
    onClick: function () {
      return fe("image");
    }
  }, R)), !["audio", "video"].includes(E) && null, ie && null), ("image" === d || "both" === d) && !Boolean(j) && "image_video" === E && null)), ue && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: ue,
    onClose: se
  })));
};
const Cr = (0, g.memo)(xr),
  Pr = function (e) {
    var t = e.titleName,
      n = e.titleValue,
      r = e.titlePlaceholder,
      a = e.content,
      o = e.descriptionPlaceholder,
      i = e.imageSrc,
      l = e.videoSrc,
      c = e.onInputChange,
      u = e.onContentChange,
      s = e.onUploadComplete,
      d = e.onRemoveMedia,
      m = e.align,
      p = void 0 === m ? "left" : m,
      f = e.mediaType,
      v = void 0 === f ? "image_video" : f,
      g = e.audioSrc,
      y = e.mediaId,
      b = e.onExternalUploadComplete,
      _ = void 0 === b ? function () {} : b,
      w = e.commandsConfig,
      E = void 0 === w ? {} : w,
      S = e.showAddButton,
      R = void 0 === S || S,
      x = (e.chapterId, e.showTextAlign),
      C = void 0 === x || x,
      P = e.autofocus,
      O = void 0 === P || P,
      k = e.editorFor;
    return h().createElement("div", {
      className: "common-entity-form ohmylms-".concat(p)
    }, ("image_video" === v || "image" === v) && h().createElement(h().Fragment, null, h().createElement(Cr, {
      src: i,
      videoSrc: l,
      limit: 2,
      type: "image_video" === v ? "both" : v,
      supportedTypes: [".jpg", ".jpeg", ".png", ".mp4", ".mov", ".webp"],
      onUploadComplete: s,
      onRemoveMedia: d,
      align: p,
      mediaId: y,
      onExternalUploadComplete: _
    })), "video" === v && h().createElement(Cr, {
      src: i,
      videoSrc: l,
      limit: 2,
      type: "both",
      supportedTypes: [".jpg", ".jpeg", ".png", ".webp"],
      onUploadComplete: s,
      onRemoveMedia: d,
      align: "left",
      fileType: "video",
      mediaId: y,
      onExternalUploadComplete: _
    }), "audio" === v && h().createElement(Cr, {
      audioSrc: g,
      limit: 2,
      type: "both",
      supportedTypes: [".mp3", ".wav", ".aac", ".flac", ".ogg", ".m4a"],
      onUploadComplete: s,
      onRemoveMedia: d,
      align: "left",
      fileType: "audio",
      mediaId: y,
      onExternalUploadComplete: _
    }), h().createElement(I.SpacerWP, {
      marginBottom: 4
    }), h().createElement("div", {
      className: "ohmylms-title-input-wrapper ohmylms-course-title"
    }, h().createElement(I.InputWP, {
      type: "text",
      value: Ge("Untitled" !== n ? n : ""),
      onChange: c,
      placeholder: r,
      name: t,
      autoFocus: !0,
      style: {
        fontSize: 26,
        fontWeight: "500",
        border: "none",
        background: "transparent",
        padding: 0,
        textAlign: "left",
        lineHeight: 1.2,
        boxShadow: "none"
      }
    }), ("assignment" !== k || !["video", "audio"].includes(v)) && null), h().createElement(ne, {
      onContentChange: function (e) {
        u(e);
      },
      placeholder: o,
      content: a,
      commandsConfig: E,
      showAddButton: R,
      showTextAlign: C,
      autofocus: O,
      editorFor: k
    }));
  };
