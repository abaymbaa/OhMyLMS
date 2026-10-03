// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Yp = function (e) {
  var t = true;
  M().noConflict();
  var n = e.videoSrc,
    r = e.imageSrc,
    a = e.handleRemoveMedia,
    o = e.handleUploadComplete,
    i = (0, y.useDispatch)(T.default),
    l = Up((0, g.useState)(r), 2),
    c = l[0],
    u = l[1],
    s = Up((0, g.useState)(n), 2),
    d = s[0],
    m = s[1],
    p = Up((0, g.useState)(null), 2),
    f = p[0],
    v = p[1],
    h = Up((0, g.useState)(!1), 2),
    _ = h[0],
    w = h[1],
    E = Up((0, g.useState)(!1), 2),
    S = E[0],
    R = E[1],
    x = Up((0, g.useState)(null), 2),
    C = x[0],
    P = x[1],
    O = (0, g.useRef)(null),
    k = (0, g.useRef)(null),
    j = Up((0, g.useState)(!1), 2),
    A = j[0],
    F = j[1],
    N = Up((0, g.useState)(!1), 2),
    D = N[0],
    W = N[1],
    z = (0, y.useSelect)(function (e) {
      return e(T.default).getAISettings();
    }, []),
    B = (0, y.useSelect)(function (e) {
      return e(T.default).getAllIntegrations();
    }, []),
    V = function () {
      var e;
      w(!1), null === (e = O.current) || void 0 === e || e.pause(), O.current.currentTime = 0;
    },
    H = function (e) {
      var t = ["jpg", "jpeg", "png", "gif", "svg", "webp"],
        n = ["mp4", "mov", "avi", "mkv"],
        r = ["image/jpeg", "image/png", "image/gif", "image/svg+xml", "image/webp"].join(","),
        a = ["video/mp4", "video/quicktime", "video/x-msvideo", "video/x-matroska"].join(","),
        i = wp.media({
          title: "Select or Upload Media",
          button: {
            text: "Use this media"
          },
          multiple: !1,
          library: {
            type: e
          }
        });
      i.on("open", function () {
        i.content.mode("upload"), i.on("uploader:ready", function () {
          document.querySelectorAll('.moxie-shim-html5 input[type="file"]').forEach(function (t) {
            t.setAttribute("tabIndex", "-1"), t.setAttribute("multiple", "false"), t.setAttribute("aria-hidden", "true"), "video" === e ? t.setAttribute("accept", a) : t.setAttribute("accept", r);
          });
        });
      }), i.on("select", function () {
        var r = i.state().get("selection").first(),
          a = r.get("filesizeInBytes"),
          l = r.toJSON(),
          c = t.some(function (e) {
            return l.url.toLowerCase().endsWith(e);
          });
        "video" === e && (c = n.some(function (e) {
          return l.url.toLowerCase().endsWith(e);
        }));
        var s = "image" === e && "image" === l.type || "video" === e && "video" === l.type || l.type === e;
        "image" === e && a > 5242880 ? alert((0, b.__)("Image exceeds the 5MB size limit. Please choose a smaller file.", "ohmylms")) : c && s ? ("image" === e ? u(l.url) : "video" === e && m(l.url), o && o(l, e)) : alert("Invalid file type or media type.");
      }), i.open();
    },
    G = function (e) {
      v(e);
    },
    U = function (e) {
      a && a(e), u(null), m(null), v(null);
    };
  (0, g.useEffect)(function () {
    r && u(r), n && m(n);
  }, [r, n]), (0, g.useEffect)(function () {
    var e = function (e) {
      !A || !k.current || k.current.contains(e.target) || e.target.closest(".ohmylms-history-list") || e.target.closest(".ohmylms-tooltip-box") || e.target.closest(".ohmylms-ai-image-prompt") || (F(!1), G(null));
    };
    return document.addEventListener("mousedown", e), function () {
      document.removeEventListener("mousedown", e);
    };
  }, [A, k]);
  var q = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px"
  };
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-course-thumb-wrapper"
  }, React.createElement("div", {
    className: "ohmylms-course-thumb-media"
  }, d ? React.createElement(React.Fragment, null, React.createElement("video", {
    ref: O,
    src: d,
    controls: _,
    controlsList: "nodownload noplaybackrate",
    poster: c || "",
    disablePictureInPicture: !0,
    onPause: V,
    onEnded: V
  })) : f ? React.createElement(React.Fragment, null, React.createElement("img", {
    style: q,
    src: f,
    alt: "Course Thumb"
  })) : c ? React.createElement(React.Fragment, null, React.createElement("img", {
    style: q,
    src: c,
    alt: "Course Thumb"
  })) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-course-thumb-placeholder"
  }, React.createElement("svg", {
    fill: "none",
    width: "88",
    height: "88",
    viewBox: "0 0 88 88",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_3016_26872)"
  }, React.createElement("path", {
    fill: "#DEE0E4",
    d: "M38.5 13.75a13.75 13.75 0 11-27.5 0 13.75 13.75 0 0127.5 0zm23.237 22.291a2.75 2.75 0 00-3.173.512L38.159 62.458l-14.63-15.246a2.75 2.75 0 00-3.465.341L.01 71.5v11a5.5 5.5 0 005.5 5.5h77a5.5 5.5 0 005.5-5.5V57.75L61.737 36.041z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_3016_26872"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h88v88H0z"
  })))))), !_ && React.createElement("div", {
    className: "ohmylms-course-thumb-controls"
  }, (c || d) && React.createElement("div", {
    className: "clrms-course-thumb-controls-btns"
  }, c && d ? React.createElement(I.TooltipWP, {
    text: (0, b.__)("Delete Thumb Image/Video", "ohmylms")
  }, React.createElement(I.DropdownMenuWP, {
    controls: [{
      title: (0, b.__)("Delete Image", "ohmylms"),
      key: "delete-image",
      onClick: function () {
        P({
          type: "image",
          title: (0, b.__)("Remove Image", "ohmylms"),
          description: (0, b.__)("Are you sure you want to remove this image?", "ohmylms")
        }), R(!0);
      }
    }, {
      title: (0, b.__)("Delete Video", "ohmylms"),
      key: "delete-video",
      onClick: function () {
        P({
          type: "video",
          title: (0, b.__)("Remove Video", "ohmylms"),
          description: (0, b.__)("Are you sure you want to remove this video?", "ohmylms")
        }), R(!0);
      }
    }],
    icon: React.createElement(Vp, null)
  })) : React.createElement(React.Fragment, null, React.createElement(I.TooltipWP, {
    text: (0, b.__)("Delete Thumb ".concat(d ? "Video" : "Image"), "ohmylms")
  }, React.createElement(gr, {
    onOK: function () {
      return U(d ? "video" : "image");
    },
    alertTitle: (0, b.__)("Remove the ".concat(d ? "video" : "image"), "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to remove this ".concat(d ? "video" : "image", "?"), "ohmylms"),
    iconOnly: !0,
    Icon: Vp
  })))), d && React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "center",
    gap: 2,
    className: "ohmylms-thumb-video-player"
  }, React.createElement(I.TooltipWP, {
    text: (0, b.__)("Play Thumb Video", "ohmylms")
  }, React.createElement(I.ButtonWP, {
    variant: "text",
    icon: React.createElement(Gp, null),
    onClick: function () {
      var e;
      w(!0), null === (e = O.current) || void 0 === e || e.play();
    },
    padding: "0px"
  })), React.createElement("span", {
    className: "ohmylms-thumb-video-player-line"
  }))))), React.createElement(I.SpacerWP, {
    marginBottom: 1.5
  }), React.createElement(I.FlexWP, {
    justify: "flex-start",
    gap: 1,
    className: "ohmylms-course-thumb-actions"
  }, d && c && React.createElement(React.Fragment, null, React.createElement(I.TooltipWP, {
    text: (0, b.__)("Replace Thumbnail Image/Video", "ohmylms")
  }, React.createElement(I.DropdownMenuWP, {
    controls: [{
      title: (0, b.__)("Replace Image", "ohmylms"),
      key: "replace-image",
      onClick: function () {
        return H("image");
      }
    }, {
      title: (0, b.__)("Replace Video", "ohmylms"),
      key: "replace-video",
      onClick: function () {
        return H("video");
      }
    }],
    icon: React.createElement(Bp, null)
  }))), (c || d) && !(c && d) && React.createElement(I.TooltipWP, {
    text: (0, b.__)("Replace Thumbnail ".concat(d ? "Video" : "image"), "ohmylms")
  }, React.createElement(I.ButtonWP, {
    variant: "text",
    icon: React.createElement(Bp, null),
    onClick: function () {
      return H(d ? "video" : "image");
    },
    padding: "0px"
  })), !c && React.createElement(React.Fragment, null, React.createElement(I.TooltipWP, {
    text: (0, b.__)("Upload Thumbnail Image", "ohmylms")
  }, React.createElement(I.ButtonWP, {
    variant: "text",
    icon: React.createElement(Np, null),
    onClick: function () {
      return H("image");
    },
    padding: "0px"
  }))), !d && React.createElement(React.Fragment, null, React.createElement(I.TooltipWP, {
    text: (0, b.__)("Upload Thumbnail Video", "ohmylms")
  }, React.createElement(I.ButtonWP, {
    variant: "text",
    icon: React.createElement(Wp, null),
    onClick: function () {
      return H("video");
    },
    padding: "0px"
  }))), React.createElement(I.TooltipWP, {
    text: (0, b.__)("Generate Image with AI", "ohmylms")
  }, React.createElement(I.ButtonWP, {
    variant: "text",
    icon: React.createElement(wr.A, null),
    onClick: function () {
      return function () {
        var e;
        return null != B && null !== (e = B.ai_model) && void 0 !== e && e.is_enable ? null != z && z.self || "anthropic" !== (null == z ? void 0 : z.platform) ? null != z && z.self || null != z && z.api_key ? void F(!0) : (i.updateProModalTitle((0, b.__)("Please configure AI Model API Key", "ohmylms")), i.updateProModalContent((0, b.__)("Go to addons page and configure the AI Model API Key to use this feature.", "ohmylms")), i.updateProModalButtonText(null), void W(!0)) : (i.updateProModalTitle((0, b.__)("Anthropic does not support image generation", "ohmylms")), i.updateProModalContent((0, b.__)("Image generation is not available with Anthropic. Please use a different model (Self hosted or Open AI).", "ohmylms")), i.updateProModalButtonText(null), void W(!0)) : (W(!0), i.updateProModalTitle((0, b.__)("Please enable AI Suite", "ohmylms")), i.updateProModalContent((0, b.__)("Go to addons page and enable the AI Suite to use this feature. You can use self hosted AI model, Open AI, Anthropic or Gemini.", "ohmylms")), void i.updateProModalButtonText(null));
      }();
    },
    padding: "0px"
  })), A && React.createElement(Er.default, {
    promptBoxRef: k,
    onPreview: G,
    onInsert: function (e) {
      o({
        id: null == e ? void 0 : e.id,
        url: null == e ? void 0 : e.source_url
      }, "image"), v(null), F(!1);
    },
    onClose: function () {
      return F(!1);
    }
  }))), D && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: D,
    onClose: W
  })), S && React.createElement(Ie, {
    title: null == C ? void 0 : C.title,
    description: null == C ? void 0 : C.description,
    onClose: function () {
      P(null), R(!1);
    },
    onDelete: function () {
      U(null == C ? void 0 : C.type), R(!1), P(null);
    },
    isOpen: S,
    isDelete: !0
  }));
};
const Qp = (0, g.memo)(Yp);
var Zp = function (e) {
  var t = e.handleInputChange,
    n = e.onContentChange,
    r = e.handleRemoveMedia,
    a = e.handleUploadComplete,
    o = Ze(),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getAISuggestedCourses();
    }, []),
    l = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    c = (0, g.useMemo)(function () {
      return o ? null == i ? void 0 : i.name : null == l ? void 0 : l.name;
    }, [o, i, l]),
    u = (0, g.useMemo)(function () {
      return o ? null == i ? void 0 : i.description : null == l ? void 0 : l.description;
    }, [o, i, l]),
    s = (0, g.useMemo)(function () {
      return o ? null == i ? void 0 : i.video_src : null == l ? void 0 : l.video_src;
    }, [o, i, l]),
    d = (0, g.useMemo)(function () {
      return o ? null == i ? void 0 : i.image_src : null == l ? void 0 : l.image_src;
    }, [o, i, l]);
  return h().createElement(h().Fragment, null, h().createElement("div", {
    className: "ohmylms-course-info-header ".concat(s || d ? "ohmylms-has-media" : "", " ").concat(s ? "ohmylms-thumb-video-wrapper" : "", " ").concat(d ? "ohmylms-thumb-img-wrapper" : "")
  }, h().createElement(Qp, {
    videoSrc: s,
    imageSrc: d,
    handleRemoveMedia: r,
    handleUploadComplete: a
  }), h().createElement("div", {
    className: "ohmylms-course-content-info"
  }, h().createElement("div", {
    className: "ohmylms-title-input-wrapper ohmylms-course-title"
  }, h().createElement(re.A, {
    value: "Untitled" !== c ? Ge(c) : "",
    onChange: t,
    placeholder: (0, b.__)("Enter Course Title", "ohmylms"),
    name: "name",
    className: "ohmylms-course-title",
    style: {
      fontSize: 30,
      fontWeight: "bold",
      border: "none",
      background: "transparent",
      padding: 0,
      textAlign: "left",
      lineHeight: 1.2,
      boxShadow: "none"
    },
    size: "large",
    autoComplete: "off",
    autoFocus: !o,
    variant: "borderless"
  })), h().createElement(ne, {
    onContentChange: n,
    placeholder: (0, b.__)("Add course description ...", "ohmylms"),
    content: u,
    showAddButton: !0,
    showTextAlign: !0,
    autofocus: !1,
    editorFor: "course"
  }))));
};
const $p = (0, g.memo)(Zp);
var Kp = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    viewBox: "0 0 56 37",
    width: "56",
    height: "37",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#F4F5F7",
    d: "M0 0h55.719v33a4 4 0 01-4 4H4a4 4 0 01-4-4V0z"
  }), React.createElement("path", {
    fill: "#000D25",
    d: "M33.86 23.9l-1 1.2-5-4.5-5 4.5-1-1.1 6-5.5 6 5.4zm0-6l-1 1.1-5-4.5-5 4.5-1-1.1 6-5.5 6 5.5z"
  })));
};
const Jp = (0, g.memo)(Kp);
var Xp = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "56",
    height: "37",
    viewBox: "0 0 56 37",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#F4F5F7",
    d: "M0 0h55.719v33a4 4 0 01-4 4H4a4 4 0 01-4-4V0z"
  }), React.createElement("path", {
    fill: "#000D25",
    d: "M33.86 13.1l-1-1.2-5 4.5-5-4.5-1 1.1 6 5.5 6-5.4zm0 6l-1-1.1-5 4.5-5-4.5-1 1.1 6 5.5 6-5.5z"
  })));
};
const ef = (0, g.memo)(Xp);
n(13174);
var tf = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    d: "M1.6 6.4h4.8V1.6a.6.6 0 011.2 0v4.8h4.8a.6.6 0 010 1.2H7.6v4.8a.6.6 0 01-1.2 0V7.6H1.6a.6.6 0 010-1.2z"
  })));
};
const nf = (0, g.memo)(tf);
var rf = ["label", "className", "onClick"];
function af() {
  return af = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, af.apply(null, arguments);
}
var of = (0, g.forwardRef)(function (e, t) {
  var n = e.label,
    r = void 0 === n ? (0, b.__)("Add New", "ohmylms") : n,
    a = (e.className, e.onClick),
    o = void 0 === a ? function () {} : a,
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
    }(e, rf);
  return React.createElement(React.Fragment, null, React.createElement(D.A, af({
    ref: t,
    onClick: o,
    icon: React.createElement(nf, null),
    variant: "primary"
  }, i), r));
});
of.displayName = "AddButton";
const lf = (0, g.memo)(of);
var cf = function (e) {
  var t = e.icon,
    n = void 0 === t ? null : t,
    r = e.title,
    a = void 0 === r ? "" : r,
    o = e.description,
    i = void 0 === o ? "" : o,
    l = e.ctaText,
    c = void 0 === l ? "" : l,
    u = e.ctaHandler,
    s = void 0 === u ? function () {} : u;
  return React.createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingY: 5,
    paddingX: 3
  }, React.createElement(I.FlexWP, {
    direction: "column",
    align: "center",
    justify: "center",
    gap: "3",
    style: {
      minHeight: "230px"
    }
  }, n && React.isValidElement(n) ? React.cloneElement(n, {
    key: "no-data-icon"
  }) : n, a && React.createElement(I.HeadingWP, {
    level: "4"
  }, a), i && React.createElement(I.TextWP, {
    variant: "muted",
    align: "center"
  }, i), c && React.createElement(lf, {
    label: c,
    onClick: s
  })));
};
const uf = (0, g.memo)(cf);
var sf = function () {
  return React.createElement("svg", {
    width: "109",
    height: "108",
    fill: "none",
    viewBox: "0 0 109 108",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#7A8B9A",
    fillOpacity: ".09",
    d: "M86.91 72.302c4.358-3.37 6.787-18.542-2.722-33.757-9.508-15.216-20.302-21.28-30.61-20.166-10.307 1.114-13.663 7.443-18.257 8.646-4.594 1.202-11.96-.54-14.174 7.445-2.215 7.984 5.478 14.175 4.036 17.98-1.443 3.803-3.01.549-6.136 5.968-3.128 5.419-1.451 19.19 14.592 26.12s34.916 5.734 39.318-.453c4.401-6.186-1.526-8.782 1.78-10.203 3.306-1.422 7.814 1.789 12.172-1.58z"
  }), React.createElement("path", {
    stroke: "#000D25",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M69.408 34.11c2.946-.79 4.42-1.184 5.58-.514 1.16.67 1.555 2.143 2.344 5.09l5.825 21.737c.79 2.946 1.184 4.42.514 5.58-.67 1.16-2.143 1.555-5.089 2.344L39.9 78.712c-2.946.79-4.42 1.184-5.58.514-1.16-.67-1.555-2.143-2.344-5.089L26.15 52.4c-.79-2.946-1.184-4.419-.514-5.58.67-1.16 2.143-1.555 5.09-2.344L69.407 34.11z"
  }), React.createElement("path", {
    stroke: "#000D25",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M35.604 54.288l11.148-3.093c.541-.15 1.017-.282 1.438-.397m-7.438 7.49L51.9 55.195c.54-.15 1.016-.282 1.438-.397"
  }));
};
const df = (0, g.memo)(sf);
function mf(e) {
  return mf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, mf(e);
}
function pf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ff(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? pf(Object(n), !0).forEach(function (t) {
      vf(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pf(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function vf(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != mf(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != mf(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == mf(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function gf(e) {
  return function (e) {
    if (Array.isArray(e)) return Ef(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || wf(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function hf() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return yf(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (yf(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, yf(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, yf(d, "constructor", u), yf(u, "constructor", c), c.displayName = "GeneratorFunction", yf(u, a, "GeneratorFunction"), yf(d), yf(d, a, "Generator"), yf(d, r, function () {
    return this;
  }), yf(d, "toString", function () {
    return "[object Generator]";
  }), (hf = function () {
    return {
      w: o,
      m
    };
  })();
}
function yf(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  yf = function (e, t, n, r) {
    function o(t, n) {
      yf(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, yf(e, t, n, r);
}
function bf(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function _f(e, t) {
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
  }(e, t) || wf(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function wf(e, t) {
  if (e) {
    if ("string" == typeof e) return Ef(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ef(e, t) : void 0;
  }
}
function Ef(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
