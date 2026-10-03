// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Dd = function () {
  var e,
    t,
    n = true,
    r = (0, y.useSelect)(function (e) {
      return e(T.default).selectSelectedQuestionId();
    }, []),
    a = (0, y.useSelect)(function (e) {
      return e(T.default).getQuestionContents();
    }, [r]) || [],
    o = (0, y.useSelect)(function (e) {
      return e(T.default).selectQuizzesError();
    }, []),
    i = (0, y.useDispatch)(T.default),
    l = i.addContentToQuestion,
    c = i.setIsProModalOpen;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-options-list ohmylms-options-list-statement"
  }, React.createElement(I.InputWP, {
    placeholder: (0, b.__)("Enter answer(s) here, separated by commas (e.g., Dhaka, teacher, football)", "ohmylms"),
    value: null === (e = a[0]) || void 0 === e ? void 0 : e.answer,
    onChange: function (e) {
      var t;
      return function (e, t) {
        e && l(r, a.map(function (n) {
          return (null == n ? void 0 : n.id) === e ? Fd(Fd({}, n), {}, {
            answer: t
          }) : n;
        }));
      }(null === (t = a[0]) || void 0 === t ? void 0 : t.id, e);
    }
  }), !o || null !== (t = a[0]) && void 0 !== t && null !== (t = t.answer) && void 0 !== t && t.trim() ? React.createElement(React.Fragment, null) : React.createElement("div", {
    className: "ohmylms-option-correct",
    style: {
      color: "red",
      marginTop: 4
    }
  }, (0, b.__)("Field cannot be empty", "ohmylms"))));
};
const Wd = (0, g.memo)(Dd),
  zd = {
    name: "Fill In The Blank",
    type: "fill-in-the-blank",
    subTitle: (0, b.__)("Ask participants to fill in the blank", "ohmylms"),
    icon: jd,
    thumbIcon: Md,
    edit: Wd,
    settings: {
      required: !0,
      score: !0,
      tooltip: (0, b.__)("For example: 'The capital of Bangladesh is ____.'", "ohmylms")
    },
    isPro: !0
  };
var Bd = function (e) {
  var t = e.isHover,
    n = void 0 !== t && t,
    r = e.color;
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_95_8011)"
  }, React.createElement("path", {
    fill: "".concat(n ? "var(--ohmylms-primary-color)" : r || "#2B2F36"),
    d: "M7.5 4.583c0-.691.558-1.25 1.25-1.25S10 3.892 10 4.583c0 .692-.558 1.25-1.25 1.25S7.5 5.275 7.5 4.583zM20 4.167v5c0 2.3-1.867 4.166-4.167 4.166h-7.5a4.168 4.168 0 01-4.166-4.166v-5C4.167 1.867 6.033 0 8.333 0h7.5C18.133 0 20 1.867 20 4.167zm-14.167 5c0 .641.242 1.225.642 1.675l4.367-4.367c.816-.817 2.241-.817 3.058 0l.867.867a.508.508 0 00.708 0l2.858-2.859v-.316c0-1.375-1.125-2.5-2.5-2.5h-7.5a2.507 2.507 0 00-2.5 2.5v5zm12.5 0V6.842L16.65 8.525c-.817.817-2.242.817-3.058 0l-.867-.867a.508.508 0 00-.708 0L8.025 11.65c.1.017.2.017.308.017h7.5c1.375 0 2.5-1.125 2.5-2.5zm-3.258 5.866a.836.836 0 00-1.025.584l-.242.883a2.455 2.455 0 01-1.175 1.508 2.486 2.486 0 01-1.9.242L3.5 16.267a2.5 2.5 0 01-1.75-3.075l.8-2.967A.843.843 0 001.967 9.2a.843.843 0 00-1.025.583L.15 12.742a4.175 4.175 0 002.917 5.125L10.3 19.85a4.12 4.12 0 003.167-.4 4.154 4.154 0 001.958-2.517l.242-.883a.836.836 0 00-.584-1.025l-.008.008z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_95_8011"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0z"
  })))));
};
const Ld = (0, g.memo)(Bd);
var Vd = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "82",
    height: "71",
    viewBox: "0 0 82 71",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#C2CFED",
    d: "M12.172 48.047h-9.77A2.401 2.401 0 010 45.645V2.401A2.401 2.401 0 012.402 0H60.22a2.401 2.401 0 012.402 2.402v9.61a2.401 2.401 0 01-2.402 2.402H24.184v12.012a2.401 2.401 0 01-2.403 2.402h-7.207v16.817a2.401 2.401 0 01-2.402 2.402z"
  }), React.createElement("path", {
    fill: "#DBE6FF",
    d: "M60.219 0H41v14.414h19.219a2.401 2.401 0 002.402-2.402v-9.61A2.401 2.401 0 0060.22 0z"
  }), React.createElement("mask", {
    id: "a",
    fill: "#fff"
  }, React.createElement("path", {
    d: "M67.426 55.254a2.4 2.4 0 002.402 2.402h9.77A2.4 2.4 0 0082 55.254V12.012a2.401 2.401 0 00-2.402-2.403H21.78a2.401 2.401 0 00-2.402 2.403v14.414a2.401 2.401 0 002.402 2.402h45.646v26.426z"
  })), React.createElement("path", {
    fill: "#fff",
    d: "M67.426 55.254a2.4 2.4 0 002.402 2.402h9.77A2.4 2.4 0 0082 55.254V12.012a2.401 2.401 0 00-2.402-2.403H21.78a2.401 2.401 0 00-2.402 2.403v14.414a2.401 2.401 0 002.402 2.402h45.646v26.426z"
  }), React.createElement("path", {
    fill: "#C2CFED",
    d: "M67.426 28.828h1v-1h-1v1zm2.402 27.828a1.4 1.4 0 01-1.402-1.402h-2a3.4 3.4 0 003.402 3.402v-2zm9.77 0h-9.77v2h9.77v-2zM81 55.254a1.4 1.4 0 01-1.402 1.402v2A3.4 3.4 0 0083 55.254h-2zm0-43.242v43.242h2V12.012h-2zm-1.402-1.403A1.4 1.4 0 0181 12.012h2a3.401 3.401 0 00-3.402-3.403v2zM42 10.61h37.598v-2H42v2zm-1 0h1v-2h-1v2zm-19.219 0H41v-2H21.781v2zm-1.402 1.403a1.4 1.4 0 011.402-1.403v-2a3.401 3.401 0 00-3.402 3.403h2zm0 14.414V12.012h-2v14.414h2zm1.402 1.402a1.4 1.4 0 01-1.402-1.402h-2a3.4 3.4 0 003.402 3.402v-2zm19.219 0H21.781v2H41v-2zm1 0h-1v2h1v-2zm24.426 0H42v2h24.426v-2zm1 0h-1v2h1v-2zm1 2v-1h-2v1h2zm0 25.426V29.828h-2v25.426h2z",
    mask: "url(#a)"
  }), React.createElement("path", {
    fill: "var(--ohmylms-primary-color)",
    d: "M70.059 22.035H12.402A2.379 2.379 0 0010 24.437V67.68c0 .672.288 1.249.673 1.73l16.143-6.535h19.22l25.752 6.534c.385-.48.673-1.057.673-1.73V24.438a2.379 2.379 0 00-2.402-2.402z"
  }), React.createElement("path", {
    fill: "#4D88FF",
    d: "M70.059 22.035H41.23v40.84h4.804l25.753 6.534c.385-.48.673-1.057.673-1.73V24.438a2.379 2.379 0 00-2.402-2.402z"
  }), React.createElement("path", {
    fill: "#6491FA",
    d: "M71.788 69.41c-.48.385-1.057.673-1.73.673H12.403c-.672 0-1.249-.288-1.73-.673l14.446-14.445a2.402 2.402 0 013.397 0l1.407 1.408c.939.938 2.46.938 3.398 0l11.017-11.017a2.402 2.402 0 013.397 0L71.788 69.41z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M26.816 46.059c-3.974 0-7.207-3.233-7.207-7.207a7.214 7.214 0 017.207-7.207 7.214 7.214 0 017.207 7.207c0 3.974-3.233 7.207-7.207 7.207z"
  }), React.createElement("path", {
    fill: "#B1C9FF",
    d: "M44.336 45.354l-3.105 3.106v21.62h28.828c.672 0 1.249-.288 1.73-.672L47.733 45.354a2.403 2.403 0 00-3.398 0z"
  })));
};
const Hd = (0, g.memo)(Vd);
var Gd = n(88053),
  Ud = function (e) {
    var t = e.id,
      n = e.showOrder,
      r = void 0 !== n && n,
      a = e.orderNumber,
      o = void 0 === a ? 1 : a,
      i = e.value,
      l = void 0 === i ? "" : i,
      c = e.imgSrc,
      u = void 0 === c ? "" : c,
      s = e.onChange,
      d = void 0 === s ? function () {} : s,
      m = e.onImageChange,
      p = void 0 === m ? function () {} : m,
      f = e.onFocus,
      v = void 0 === f ? function () {} : f,
      g = e.onBlur,
      h = void 0 === g ? function () {} : g,
      y = e.showError,
      _ = e.isBorderless,
      w = e.placeholder,
      E = e.isMatching;
    return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
      padding: "8px",
      isBorderless: _
    }, React.createElement(I.FlexWP, {
      justify: "flex-start"
    }, r && React.createElement(React.Fragment, null, React.createElement(I.BadgeWP, {
      variant: "secondary",
      isBorderLess: !0
    }, o)), React.createElement(I.FlexBlockWP, null, React.createElement(I.InputWP, {
      value: l,
      onChange: d,
      onFocus: v,
      onBlur: h,
      placeholder: w
    })), u ? React.createElement(React.Fragment, null, React.createElement("div", {
      style: {
        position: "relative",
        width: "40px"
      }
    }, React.createElement("img", {
      src: u,
      alt: l,
      style: {
        maxWidth: "100%",
        borderRadius: "2px",
        height: "40px",
        width: "40px",
        objectFit: "cover",
        position: "relative",
        top: "2px"
      }
    }), React.createElement(I.ButtonWP, {
      icon: React.createElement(q.Icon, {
        icon: Gd.A
      }),
      onClick: function () {
        return p(t, null);
      },
      style: {
        position: "absolute",
        top: "-15px",
        left: "35px",
        border: "1px solid #d9d9d9",
        padding: "0",
        width: "20px",
        height: "20px",
        minWidth: "auto",
        minHeight: "auto",
        borderRadius: "50%"
      }
    }))) : React.createElement(React.Fragment, null, React.createElement(I.BadgeWP, {
      variant: "secondary",
      isBorderLess: !0,
      type: "button",
      onClick: function () {
        var e = ["jpg", "jpeg", "png", "gif", "svg", "webp"],
          n = ["image/jpeg", "image/png", "image/gif", "image/svg+xml", "image/webp"].join(","),
          r = wp.media({
            title: "Select or Upload Media",
            button: {
              text: "Use this media"
            },
            multiple: !1,
            library: {
              type: "image"
            }
          });
        r.on("open", function () {
          r.content.mode("upload"), r.on("uploader:ready", function () {
            document.querySelectorAll('.moxie-shim-html5 input[type="file"]').forEach(function (e) {
              e.setAttribute("tabIndex", "-1"), e.setAttribute("multiple", "false"), e.setAttribute("aria-hidden", "true"), e.setAttribute("accept", n);
            });
          });
        }), r.on("select", function () {
          var n = r.state().get("selection").first(),
            a = n.get("filesizeInBytes"),
            o = n.toJSON(),
            i = e.some(function (e) {
              return o.url.toLowerCase().endsWith(e);
            }),
            l = "image" === o.type;
          a > 5242880 ? alert((0, b.__)("Image exceeds the 5MB size limit. Please choose a smaller file.", "ohmylms")) : i && l ? p && p(t, o, E) : alert("Invalid file type or media type.");
        }), r.open();
      },
      cursor: "pointer"
    }, React.createElement("svg", {
      fill: "none",
      width: "15",
      height: "16",
      viewBox: "0 0 15 16",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "currentColor",
      fillOpacity: ".74",
      d: "M7.5 13.625c0 .346-.28.625-.625.625h-3.75A3.129 3.129 0 010 11.125v-7.5A3.129 3.129 0 013.125.5h7.5a3.129 3.129 0 013.125 3.125v3.75a.625.625 0 11-1.25 0v-3.75a1.877 1.877 0 00-1.875-1.875h-7.5A1.877 1.877 0 001.25 3.625v4.35l1.755-1.756a2.458 2.458 0 013.474 0l3.338 3.338a.624.624 0 11-.884.884L5.595 7.103a1.21 1.21 0 00-1.706 0L1.25 9.742v1.383c0 1.034.841 1.875 1.875 1.875h3.75c.345 0 .625.28.625.625zM9.375 2.687c1.034 0 1.875.842 1.875 1.876a1.877 1.877 0 01-1.875 1.875A1.877 1.877 0 017.5 4.563c0-1.034.841-1.875 1.875-1.875zm0 1.25a.626.626 0 10.001 1.252.626.626 0 00-.001-1.252zm5 7.813H12.5V9.875a.625.625 0 10-1.25 0v1.875H9.375a.625.625 0 100 1.25h1.875v1.875a.625.625 0 101.25 0V13h1.875a.625.625 0 100-1.25z"
    }))))), y && !l.trim() && React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
      marginBottom: 1
    }), React.createElement(I.TextWP, {
      as: "p",
      color: "red"
    }, (0, b.__)("Field cannot be empty", "ohmylms")))));
  };
const qd = (0, g.memo)(Ud);
function Yd(e) {
  return Yd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Yd(e);
}
function Qd(e) {
  return function (e) {
    if (Array.isArray(e)) return em(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || Xd(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Zd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Zd(Object(n), !0).forEach(function (t) {
      Kd(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zd(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Kd(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Yd(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Yd(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Yd(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Jd(e, t) {
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
  }(e, t) || Xd(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Xd(e, t) {
  if (e) {
    if ("string" == typeof e) return em(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? em(e, t) : void 0;
  }
}
function em(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var tm = function () {
  var e = (0, y.useSelect)(function (e) {
      return e(T.default).selectSelectedQuestionId();
    }, []),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getQuestionContents();
    }, [e]),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).selectQuestion();
    }, []),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).selectQuizzesError();
    }, []),
    a = (0, y.useDispatch)(T.default),
    o = a.addContentToQuestion,
    i = a.updateQuestionData,
    l = Jd((0, g.useState)(null), 2),
    c = l[0],
    u = l[1],
    s = Jd((0, g.useState)(!1), 2),
    d = s[0],
    m = s[1],
    p = function (n, r, a) {
      o(e, r ? t.map(function (e) {
        return e.id === n ? $d($d({}, e), {}, {
          thumbnail_id: r.id,
          image_url: r.url
        }) : e;
      }) : t.map(function (e) {
        return e.id === n ? $d($d({}, e), {}, {
          thumbnail_id: "",
          image_url: ""
        }) : e;
      }));
    },
    f = Jd((0, g.useState)(null), 2),
    v = (f[0], f[1]),
    h = function (e) {
      e.preventDefault();
    },
    _ = function (e) {
      e.currentTarget.classList.remove("dragging");
    };
  return React.createElement(React.Fragment, null, (0, xs.I)(t).map(function (a, l) {
    return React.createElement(I.CardWP, {
      key: null == a ? void 0 : a.id,
      isBorderless: !0,
      draggable: d !== a.id,
      onDragStart: function (e) {
        return function (e, t) {
          v(t), localStorage.setItem("draggedItemIndex", t), e.currentTarget.classList.add("dragging");
        }(e, l);
      },
      onDragOver: h,
      onDrop: function (n) {
        return function (n, r) {
          n.preventDefault();
          var a = localStorage.getItem("draggedItemIndex");
          if (null !== a && a != r) {
            var i = Qd(t),
              l = Jd(i.splice(a, 1), 1)[0];
            i.splice(r, 0, l), i.forEach(function (e, t) {
              e.order_number = t + 1;
            }), o(e, i), v(null), localStorage.removeItem("draggedItemIndex");
          }
        }(n, l);
      },
      onDragEnd: _,
      padding: "4px",
      margin: "0 0 16px"
    }, React.createElement(I.FlexWP, {
      justify: "flex-start",
      gap: 4
    }, React.createElement(gc, {
      className: "ohmylms-drag-icon"
    }), React.createElement(I.FlexBlockWP, null, React.createElement(qd, {
      id: null == a ? void 0 : a.id,
      showOrder: !0,
      orderNumber: l + 1,
      value: null == a ? void 0 : a.answer,
      imgSrc: null == a ? void 0 : a.image_url,
      onChange: function (n) {
        return function (n, r) {
          o(e, t.map(function (e) {
            return e.id === n ? $d($d({}, e), {}, {
              answer: r
            }) : e;
          }));
        }(a.id, n);
      },
      onImageChange: p,
      onFocus: function () {
        return e = a.id, void m(e);
        var e;
      },
      onBlur: function () {
        return a.id, void m(null);
      },
      showError: r,
      placeholder: (0, b.__)("Reorder Option", "ohmylms"),
      isMatching: !1
    })), React.createElement(I.ButtonWP, {
      icon: React.createElement(We, null),
      onClick: function () {
        return function (r) {
          if (3 > t.length) return u((0, b.__)("You must have at least 2 options", "ohmylms")), void setTimeout(function () {
            u(null);
          }, 3e3);
          var a = t.filter(function (e) {
              return e.id !== r;
            }),
            o = $d({}, n);
          o.questions = a, i(e, o);
        }(a.id);
      }
    })));
  }), React.createElement(I.SpacerWP, {
    marginY: 4
  }, c && React.createElement(I.TextWP, {
    as: "p",
    color: "red"
  }, c)), React.createElement(I.ButtonWP, {
    icon: React.createElement(q.Icon, {
      icon: $e.A,
      width: "18px",
      height: "18px"
    }),
    onClick: function () {
      var r = $d({}, n),
        a = {
          id: Date.now(),
          answer: "",
          is_correct: !1,
          order_number: t.length + 1,
          temp: !0,
          thumbnail_id: "",
          image_url: "",
          matching_data: {
            label: "",
            image_id: "",
            image_url: ""
          }
        };
      r.questions = [].concat(Qd(r.questions), [$d({}, a)]), i(e, r), o(e, [].concat(Qd(t), [$d({}, a)]));
    },
    variant: "secondary",
    size: "small"
  }, (0, b.__)("Add Option", "ohmylms")));
};
const nm = (0, g.memo)(tm),
  rm = {
    name: "Reorder",
    type: "reorder",
    subTitle: (0, b.__)("Ask participants to reorder the options", "ohmylms"),
    icon: Ld,
    thumbIcon: Hd,
    edit: nm,
    settings: {
      required: !0,
      score: !0
    },
    isPro: !0
  };
var am = function (e) {
  var t = e.isHover,
    n = void 0 !== t && t,
    r = e.color;
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "16",
    height: "18",
    viewBox: "0 0 16 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "".concat(n ? "var(--ohmylms-primary-color)" : r || "#2B2F36"),
    stroke: "#6E42D3",
    strokeWidth: ".2",
    d: "M8.332 15.4a1.602 1.602 0 001.6 1.6h4.266a1.602 1.602 0 001.6-1.6v-4.267a1.602 1.602 0 00-1.6-1.6H9.932a1.602 1.602 0 00-1.6 1.6V15.4zm1.067-4.267a.534.534 0 01.533-.533h4.266a.533.533 0 01.534.533V15.4a.533.533 0 01-.534.533H9.932a.533.533 0 01-.533-.533v-4.267zm.533-2.667h4.266a1.602 1.602 0 001.6-1.6V2.6a1.602 1.602 0 00-1.6-1.6H9.932a1.602 1.602 0 00-1.6 1.6v4.266a1.602 1.602 0 001.6 1.6zM9.399 2.6a.533.533 0 01.533-.533h4.266a.533.533 0 01.534.533v4.266a.533.533 0 01-.534.534H9.932a.533.533 0 01-.533-.534V2.6zM3.534 5.266h3.2a.533.533 0 100-1.067h-3.2A2.67 2.67 0 00.867 6.866v4.266A2.67 2.67 0 003.534 13.8h1.912l-1.223 1.223a.533.533 0 10.754.754l2.133-2.133a.535.535 0 000-.755l-2.133-2.133a.533.533 0 00-.754.754l1.223 1.223H3.534a1.602 1.602 0 01-1.6-1.6V6.866a1.602 1.602 0 011.6-1.6z"
  })));
};
const om = (0, g.memo)(am);
var im = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "82",
    height: "71",
    viewBox: "0 0 82 71",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#C2CFED",
    d: "M12.172 48.047h-9.77A2.401 2.401 0 010 45.645V2.401A2.401 2.401 0 012.402 0H60.22a2.401 2.401 0 012.402 2.402v9.61a2.401 2.401 0 01-2.402 2.402H24.184v12.012a2.401 2.401 0 01-2.403 2.402h-7.207v16.817a2.401 2.401 0 01-2.402 2.402z"
  }), React.createElement("path", {
    fill: "#DBE6FF",
    d: "M60.219 0H41v14.414h19.219a2.401 2.401 0 002.402-2.402v-9.61A2.401 2.401 0 0060.22 0z"
  }), React.createElement("mask", {
    id: "a",
    fill: "#fff"
  }, React.createElement("path", {
    d: "M67.426 55.254a2.4 2.4 0 002.402 2.402h9.77A2.4 2.4 0 0082 55.254V12.012a2.401 2.401 0 00-2.402-2.403H21.78a2.401 2.401 0 00-2.402 2.403v14.414a2.401 2.401 0 002.402 2.402h45.646v26.426z"
  })), React.createElement("path", {
    fill: "#fff",
    d: "M67.426 55.254a2.4 2.4 0 002.402 2.402h9.77A2.4 2.4 0 0082 55.254V12.012a2.401 2.401 0 00-2.402-2.403H21.78a2.401 2.401 0 00-2.402 2.403v14.414a2.401 2.401 0 002.402 2.402h45.646v26.426z"
  }), React.createElement("path", {
    fill: "#C2CFED",
    d: "M67.426 28.828h1v-1h-1v1zm2.402 27.828a1.4 1.4 0 01-1.402-1.402h-2a3.4 3.4 0 003.402 3.402v-2zm9.77 0h-9.77v2h9.77v-2zM81 55.254a1.4 1.4 0 01-1.402 1.402v2A3.4 3.4 0 0083 55.254h-2zm0-43.242v43.242h2V12.012h-2zm-1.402-1.403A1.4 1.4 0 0181 12.012h2a3.401 3.401 0 00-3.402-3.403v2zM42 10.61h37.598v-2H42v2zm-1 0h1v-2h-1v2zm-19.219 0H41v-2H21.781v2zm-1.402 1.403a1.4 1.4 0 011.402-1.403v-2a3.401 3.401 0 00-3.402 3.403h2zm0 14.414V12.012h-2v14.414h2zm1.402 1.402a1.4 1.4 0 01-1.402-1.402h-2a3.4 3.4 0 003.402 3.402v-2zm19.219 0H21.781v2H41v-2zm1 0h-1v2h1v-2zm24.426 0H42v2h24.426v-2zm1 0h-1v2h1v-2zm1 2v-1h-2v1h2zm0 25.426V29.828h-2v25.426h2z",
    mask: "url(#a)"
  }), React.createElement("path", {
    fill: "var(--ohmylms-primary-color)",
    d: "M70.059 22.035H12.402A2.379 2.379 0 0010 24.437V67.68c0 .672.288 1.249.673 1.73l16.143-6.535h19.22l25.752 6.534c.385-.48.673-1.057.673-1.73V24.438a2.379 2.379 0 00-2.402-2.402z"
  }), React.createElement("path", {
    fill: "#4D88FF",
    d: "M70.059 22.035H41.23v40.84h4.804l25.753 6.534c.385-.48.673-1.057.673-1.73V24.438a2.379 2.379 0 00-2.402-2.402z"
  }), React.createElement("path", {
    fill: "#6491FA",
    d: "M71.788 69.41c-.48.385-1.057.673-1.73.673H12.403c-.672 0-1.249-.288-1.73-.673l14.446-14.445a2.402 2.402 0 013.397 0l1.407 1.408c.939.938 2.46.938 3.398 0l11.017-11.017a2.402 2.402 0 013.397 0L71.788 69.41z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M26.816 46.059c-3.974 0-7.207-3.233-7.207-7.207a7.214 7.214 0 017.207-7.207 7.214 7.214 0 017.207 7.207c0 3.974-3.233 7.207-7.207 7.207z"
  }), React.createElement("path", {
    fill: "#B1C9FF",
    d: "M44.336 45.354l-3.105 3.106v21.62h28.828c.672 0 1.249-.288 1.73-.672L47.733 45.354a2.403 2.403 0 00-3.398 0z"
  })));
};
const lm = (0, g.memo)(im);
function cm(e) {
  return cm = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, cm(e);
}
function um(e) {
  return function (e) {
    if (Array.isArray(e)) return vm(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || fm(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function sm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function dm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? sm(Object(n), !0).forEach(function (t) {
      mm(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sm(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function mm(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != cm(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != cm(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == cm(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function pm(e, t) {
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
  }(e, t) || fm(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function fm(e, t) {
  if (e) {
    if ("string" == typeof e) return vm(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vm(e, t) : void 0;
  }
}
function vm(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
