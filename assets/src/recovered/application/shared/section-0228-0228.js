// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Yre = n(6273),
  Qre = n(34671),
  Zre = function (e) {
    var t = e.direction,
      n = "left" === (void 0 === t ? "left" : t) ? "M9.4 11.4l-4-4 4-4" : "M6.6 2.6l4 4-4 4";
    return React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        display: "block"
      }
    }, React.createElement("path", {
      d: n,
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  };

const $re = function (e) {
  var t = e.totalItems,
    n = e.currentIndex,
    r = e.onNext,
    a = e.onPrevious,
    o = e.onDotClick;
  return t <= 2 ? null : (document.dir, React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-prompt-carousel-navigation",
    style: {
      marginTop: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "10px",
      direction: "ltr"
    }
  }, React.createElement("button", {
    onClick: a,
    "aria-label": (0, b.__)("Previous templates", "ohmylms"),
    className: "ohmylms-carousel-arrow-button"
  }, React.createElement(Zre, {
    direction: "left"
  })), React.createElement("div", {
    className: "ohmylms-carousel-dots",
    style: {
      display: "flex",
      margin: "0 10px"
    }
  }, Array.from({
    length: t
  }).map(function (e, t) {
    return React.createElement("button", {
      key: t,
      onClick: function () {
        return o(t);
      },
      "aria-label": "".concat((0, b.__)("Go to template set", "ohmylms"), " ").concat(t + 1),
      className: "ohmylms-carousel-dot ".concat(n === t ? "active" : "")
    });
  })), React.createElement("button", {
    onClick: r,
    "aria-label": (0, b.__)("Next templates", "ohmylms"),
    className: "ohmylms-carousel-arrow-button"
  }, React.createElement(Zre, {
    direction: "right"
  }))), React.createElement("style", {
    scoped: !0
  }, "\n                .ohmylms-carousel-arrow-button {\n                    background: transparent;\n                    border: none;\n                    cursor: pointer;\n                    padding: 8px;\n                    border-radius: 50%;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    color: #7A8B9A; /* Default arrow color */\n                    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n                }\n                .ohmylms-carousel-arrow-button:hover {\n                    background-color: #e0e0e0;\n                    color: var(--ohmylms-primary-hover-color, #5331A1); /* Use primary hover color */\n                }\n                .ohmylms-carousel-arrow-button:focus-visible {\n                    outline: 2px solid var(--ohmylms-primary-color, #6e42d3);\n                    outline-offset: 1px;\n                    color: var(--ohmylms-primary-color, #6e42d3);\n                }\n\n                .ohmylms-carousel-dots button.ohmylms-carousel-dot {\n                    height: 10px;\n                    width: 10px;\n                    background-color: #cccccc;\n                    border-radius: 50%;\n                    display: inline-block;\n                    margin: 0 4px;\n                    cursor: pointer;\n                    border: none;\n                    padding: 0;\n                    transition: background-color 0.2s ease-in-out;\n                }\n                .ohmylms-carousel-dots button.ohmylms-carousel-dot.active {\n                    background-color: var(--ohmylms-primary-color, #6e42d3); /* Use primary color */\n                }\n                .ohmylms-carousel-dots button.ohmylms-carousel-dot:focus-visible {\n                    outline: 2px solid var(--ohmylms-primary-color, #6e42d3);\n                    outline-offset: 1px;\n                }\n            ")));
};

function Kre(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Jre = function (e) {
  var t = e.template,
    n = void 0 === t ? {} : t,
    r = e.onEdit,
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
          if ("string" == typeof e) return Kre(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Kre(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    o = a[0],
    i = a[1];
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    fullHeight: !0,
    isBorderless: !0,
    variant: "secondary",
    padding: "12px 16px",
    className: "ohmylms-single-prompt-template",
    onMouseEnter: function () {
      i(!0);
    },
    onMouseLeave: function () {
      i(!1);
    }
  }, (null == n ? void 0 : n.title) && React.createElement(I.HeadingWP, {
    level: 4,
    size: 16,
    weight: 500
  }, null == n ? void 0 : n.title), (null == n ? void 0 : n.description) && React.createElement(I.TextWP, {
    size: 12,
    color: "#7A8B9A",
    lineHeight: "1.5em"
  }, null == n ? void 0 : n.description), o && React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    align: "center",
    justify: "center",
    className: "ohmylms-prompt-template-edit-btn-wrapper"
  }, React.createElement(I.ButtonWP, {
    icon: React.createElement(pG.A, {
      width: "14",
      height: "14"
    }),
    onClick: function () {
      r(n);
    },
    size: "small"
  }, (0, b.__)("Edit Prompt", "ohmylms"))))), React.createElement("style", {
    scoped: !0
  }, '\n                    .ohmylms-single-prompt-template {\n                        position: relative;\n                        animation: fadeIn 0.3s ease-in-out;\n                    }\n\n                    .ohmylms-prompt-template-edit-btn-wrapper {\n                        position: absolute;\n                        width: 100%;\n                        bottom: 0;\n                        height: 60%;\n                        left: 0;\n                    }\n                    .ohmylms-prompt-template-edit-btn-wrapper .components-button {\n                        background: #000D25;\n                        color: #FFFFFF;\n                        padding: 4px 6px;\n                    }\n                    .ohmylms-prompt-template-edit-btn-wrapper .components-button:hover {\n                        color: #FFFFFF;\n                    }\n                    .ohmylms-prompt-template-edit-btn-wrapper:before {\n                        content: "";\n                        height: 100%;\n                        width: 100%;\n                        position: absolute;\n                        background: linear-gradient(0deg, rgba(255, 255, 255, 0.60) 0%, rgba(244, 245, 247, 0.00) 204.29%);\n                        backdrop-filter: blur(2px);\n                        border-radius: 0 0 4px 4px;\n                    }\n\n                    @keyframes fadeIn {\n                        0% {\n                            opacity: 0;\n                        }\n                        100% {\n                            opacity: 1;\n                        }\n                    }\n                '));
};

const Xre = (0, g.memo)(Jre),
  eae = function (e) {
    var t = e.templates,
      n = e.currentIndex,
      r = e.onEdit,
      a = e.maxItemsToShow,
      o = void 0 === a ? 2 : a;
    if (!t || 0 === t.length) return React.createElement("p", {
      style: {
        textAlign: "center",
        width: "100%"
      }
    }, (0, b.__)("No templates available.", "ohmylms"));
    var i = t.length,
      l = [];
    if (i <= o) l = t;else for (var c = 0; c < o; c++) l.push(t[(n + c) % i]);
    var u = "rtl" === document.dir,
      s = u ? 326 * n : 326 * -n;
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: "ohmylms-templates-view-container",
      style: {
        width: "100%",
        maxWidth: "".concat(310 * o + 16 * (o - 1), "px"),
        margin: "0 auto",
        overflow: "hidden",
        direction: u ? "rtl" : "ltr"
      }
    }, React.createElement("div", {
      className: "ohmylms-templates-slider",
      style: {
        display: "flex",
        transform: "translateX(".concat(s, "px)"),
        transition: "transform 0.5s ease-in-out",
        width: "".concat(326 * i - 16, "px")
      }
    }, t.map(function (e, t) {
      return React.createElement("div", {
        key: e.id || t,
        className: "ohmylms-template-item-wrapper",
        style: {
          minWidth: "".concat(310, "px"),
          width: "".concat(310, "px"),
          marginRight: "".concat(t === i - 1 ? 0 : 16, "px")
        }
      }, React.createElement(Xre, {
        template: e,
        onEdit: r
      }));
    }))));
  };

function tae(e) {
  return tae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, tae(e);
}

function nae(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function rae(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != tae(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != tae(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == tae(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function aae(e, t) {
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
      if ("string" == typeof e) return oae(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? oae(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function oae(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var iae = function (e) {
    var t = e.rotate,
      n = void 0 === t ? "0" : t;
    return React.createElement("svg", {
      className: "ohmylms-back-arrow-btn-icon",
      style: {
        transform: "rotate(".concat(n, "deg)")
      },
      fill: "none",
      width: "16",
      height: "14",
      viewBox: "0 0 16 14",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "currentColor",
      d: "M11.99 8.111L8.002 4.693 4.014 8.111l.976 1.14 3.012-2.582 3.012 2.581.976-1.139z"
    }));
  },
  lae = function (e) {
    var t = e.templates,
      n = e.onEdit,
      r = e.style,
      a = void 0 === r ? {} : r,
      o = e.siblingRef,
      i = aae((0, g.useState)(!1), 2),
      l = i[0],
      c = i[1],
      u = aae((0, g.useState)(0), 2),
      s = u[0],
      d = u[1],
      m = t ? t.length : 0,
      p = (0, g.useRef)(null);
    p.current || (p.current = document.createElement("div"));
    var f = function (e) {
        n && "function" == typeof n && n(e), v();
      },
      v = function () {
        c(!l);
      },
      h = function () {
        m > 0 && d(function (e) {
          return (e + 1) % m;
        });
      },
      y = function () {
        m > 0 && d(function (e) {
          return (e - 1 + m) % m;
        });
      },
      _ = function (e) {
        d(e);
      };
    (0, g.useEffect)(function () {
      l && 0 !== m || d(0), l && m > 0 && s >= m && d(m - 1);
    }, [l, m, s]), (0, g.useEffect)(function () {
      var e = p.current;
      if (l && null != o && o.current) {
        var t = o.current;
        t.parentNode && t.parentNode.insertBefore(e, t.nextSibling);
      } else e.parentNode && e.parentNode.removeChild(e);
      return function () {
        e.parentNode && e.parentNode.removeChild(e);
      };
    }, [l, o]);
    var w = function () {
        var e = React.createElement(qt, {
          isVisible: l
        }, React.createElement(I.CardWP, {
          padding: "".concat(2 < t.length ? "16px 16px 0" : "16px"),
          className: "ohmylms-templates-card-container"
        }, React.createElement(eae, {
          templates: t,
          currentIndex: s,
          onEdit: f,
          maxItemsToShow: 2
        }), React.createElement($re, {
          totalItems: m,
          currentIndex: s,
          onNext: h,
          onPrevious: y,
          onDotClick: _
        })));
        return null != o && o.current ? (0, wm.createPortal)(e, p.current) : e;
      },
      E = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nae(Object(n), !0).forEach(function (t) {
            rae(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nae(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
        return e;
      }({
        position: "relative",
        width: "100%"
      }, a);
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: "ohmylms-prompt-template-wrapper",
      style: E
    }, React.createElement(I.FlexWP, {
      justify: "flex-end"
    }, React.createElement(I.ButtonWP, {
      icon: React.createElement(iae, {
        rotate: l ? "0" : "180"
      }),
      onClick: v,
      iconPosition: "right",
      variant: "default",
      style: {
        background: "#FCFCFC",
        padding: "2px 4px",
        color: "#7A8B9A"
      }
    }, (0, b.__)("Use templates", "ohmylms"))), !(null != o && o.current) && w()), (null == o ? void 0 : o.current) && w(), React.createElement("style", {
      jsx: "true",
      scoped: !0
    }, "\n                .ohmylms-templates-card-container {\n                    animation: ohmylms-templates-card-container-animation 0.5s ease-in-out;\n                }\n                @keyframes ohmylms-templates-card-container-animation {\n                    0% {\n                        height: 0;\n                        opacity: 0;\n                    }\n                    100% {\n                        height: 100%;\n                        opacity: 1;\n                    }\n                }\n            "));
  };

const cae = (0, g.memo)(lae);

var uae = n(13567),
  sae = [{
    id: "1",
    title: "Graphic Design for Beginners",
    description: "A beginner-friendly course on graphic design that teaches layout, color theory, and typography. Target audience: high school students or young adults. Goal: Learn the basics of graphic design."
  }, {
    id: "2",
    title: "Mindfulness and Stress Relief",
    description: "A wellness course focused on reducing stress through mindfulness, breathing exercises, and daily routines. Goal: Help working professionals build healthy habits."
  }, {
    id: "3",
    title: "Intro to Web Development",
    description: "An introductory course covering HTML, CSS, and JavaScript fundamentals. Target audience: college students or beginners with no coding experience. Goal: Build and deploy a personal website."
  }, {
    id: "4",
    title: "Financial Literacy for Young Adults",
    description: "A course designed to teach budgeting, saving, investing, and credit basics. Target audience: recent high school graduates and college students. Goal: Build financial independence and smart money habits."
  }, {
    id: "5",
    title: "Public Speaking with Confidence",
    description: "A communication skills course that improves public speaking, body language, and persuasive storytelling. Target audience: professionals and students. Goal: Gain confidence and effectiveness in public speaking."
  }, {
    id: "6",
    title: "Introduction to Digital Marketing",
    description: "A practical course on SEO, social media marketing, and email campaigns. Target audience: small business owners and aspiring marketers. Goal: Promote products and grow an online presence."
  }, {
    id: "7",
    title: "Creative Writing for Beginners",
    description: "An engaging course that explores story structure, character development, and writing techniques. Target audience: aspiring writers and literature students. Goal: Write compelling short stories or novels."
  }];

function dae(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var mae = function (e) {
  var t = e.onClose,
    n = e.onPaginationChange,
    r = e.showPagination,
    a = e.totalItems,
    o = e.isLoading,
    i = function (e, t) {
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
          if ("string" == typeof e) return dae(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? dae(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(a - 1), 2),
    l = i[0],
    c = i[1];
  return React.createElement(I.FlexWP, {
    justify: "space-between",
    align: "center",
    className: "ohmylms-ai-course-preview-modal-header"
  }, React.createElement(Nr, {
    onClick: function () {
      t && "function" == typeof t && t();
    },
    iconOnly: !0,
    style: {
      background: "transparent",
      padding: "12px",
      color: "#7A8B9A"
    },
    disabled: o
  }), r && React.createElement(I.FlexWP, {
    align: "center",
    gap: 3,
    justify: "center"
  }, Array.from({
    length: a
  }).map(function (e, t) {
    return React.createElement(I.ButtonWP, {
      className: "ohmylms-ai-course-pagination-btn ".concat(l === t ? "active" : ""),
      onClick: function () {
        return function (e) {
          c(e), n && "function" == typeof n && n(e);
        }(t);
      },
      disabled: o
    }, t + 1);
  })), !r && React.createElement("div", {
    style: {
      flexGrow: 1
    }
  }));
};

const pae = (0, g.memo)(mae);

var fae = function (e) {
  var t = e.title,
    n = e.description;
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    align: "center",
    justify: "center",
    gap: 3,
    direction: "column",
    style: {
      maxHeight: "100px",
      overflow: "auto"
    }
  }, React.createElement(I.HeadingWP, {
    as: "h2",
    size: 20,
    lineHeight: 1.33,
    align: "center"
  }, t && (0, b.__)("Course title: ", "ohmylms"), " ", t), React.createElement(I.TextWP, {
    as: "p",
    color: "#7A8B9A",
    size: 14,
    lineHeight: 1.57,
    align: "center",
    style: {
      maxWidth: "600px",
      margin: "0 auto",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, n)));
};

const vae = (0, g.memo)(fae);

var gae = function (e) {
  var t = e.title,
    n = e.type,
    r = Ee(n);
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    padding: "10px 18px",
    isBorderless: !0,
    style: {
      border: "1px solid #C8D2E980"
    },
    borderRadius: "2px",
    fullWidth: !0
  }, React.createElement(I.FlexWP, {
    justify: "flex-start",
    gap: 2.5,
    align: "flex-start"
  }, React.createElement(I.TextWP, {
    color: "#7A8B9A",
    style: {
      width: "17px",
      position: "relative",
      top: "4px"
    }
  }, r ? React.createElement(r, null) : React.createElement(ce, null)), React.createElement(I.HeadingWP, {
    level: 5,
    style: {
      width: "100%"
    }
  }, t, n && React.createElement(I.BadgeWP, {
    isBorderLess: !0,
    variant: "secondary",
    color: "var(--ohmylms-primary-color)",
    style: {
      marginInlineStart: "10px"
    }
  }, function (e) {
    switch (e) {
      case "quiz":
        return (0, b.__)("Quiz", "ohmylms");
      case "assignment":
        return (0, b.__)("Assignment", "ohmylms");
      default:
        return (0, b.__)("Lesson", "ohmylms");
    }
  }(n))))));
};

const hae = (0, g.memo)(gae);

var yae = function (e) {
  var t = e.data,
    n = void 0 === t ? [] : t;
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    fullHeight: !0,
    isBorderless: !0,
    padding: "8px",
    borderRadius: "0",
    style: {
      overflow: "auto",
      maxHeight: "calc(100vh - 500px)",
      background: "transparent"
    }
  }, React.createElement(I.FlexWP, {
    align: "flex-start",
    justify: "flex-start",
    direction: "column",
    gap: 2
  }, React.createElement(I.TextWP, {
    as: "p",
    size: 11,
    color: "#7A8B9A",
    wight: 500,
    style: {
      textTransform: "uppercase",
      padding: "8px 0"
    }
  }, (0, b.__)("Lesson names", "ohmylms")), null == n ? void 0 : n.map(function (e, t) {
    return React.createElement(hae, {
      key: t,
      title: null == e ? void 0 : e.title,
      type: null == e ? void 0 : e.type
    });
  }))));
};

const bae = (0, g.memo)(yae);

var _ae = function (e) {
  var t = e.data,
    n = e.index,
    r = e.isActive,
    a = e.onClick,
    o = {
      border: "1px solid ".concat(r ? "#6E42D3" : "transparent"),
      borderRadius: "2px",
      padding: "8px",
      width: "100%",
      cursor: "pointer"
    };
  return React.createElement(React.Fragment, null, React.createElement(I.TextWP, {
    as: "p",
    size: 12,
    color: r ? "#6E42D3" : "#000D25",
    wight: 500,
    style: o,
    onClick: function () {
      a(t, n);
    }
  }, null == t ? void 0 : t.title));
};

const wae = (0, g.memo)(_ae);

function Eae(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Sae = function (e) {
  var t = e.data,
    n = void 0 === t ? [] : t,
    r = e.onChapterActive,
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
          if ("string" == typeof e) return Eae(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Eae(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(0), 2),
    o = a[0],
    i = a[1],
    l = function (e, t) {
      r(e), i(t);
    };
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    fullHeight: !0,
    isBorderless: !0,
    variant: "secondary",
    padding: "8px",
    className: "ohmylms-ai-chapters-wrapper",
    borderRadius: "0",
    style: {
      overflow: "auto",
      maxHeight: "calc(100vh - 500px)"
    }
  }, React.createElement(I.FlexWP, {
    align: "flex-start",
    justify: "flex-start",
    direction: "column",
    gap: 2
  }, React.createElement(I.TextWP, {
    as: "p",
    size: 11,
    color: "#7A8B9A",
    wight: 500,
    style: {
      textTransform: "uppercase",
      padding: "8px"
    }
  }, (0, b.__)("Chapter names", "ohmylms")), null == n ? void 0 : n.map(function (e, t) {
    return React.createElement(wae, {
      key: t,
      index: t,
      data: e,
      onClick: l,
      isActive: o === t
    });
  }))));
};

const Rae = (0, g.memo)(Sae);

function xae(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Cae = function (e) {
  var t = e.data,
    n = function (e, t) {
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
          if ("string" == typeof e) return xae(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xae(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)([]), 2),
    r = n[0],
    a = n[1];
  return (0, g.useEffect)(function () {
    var e;
    null != t && t.length && a(null == t || null === (e = t[0]) || void 0 === e ? void 0 : e.content);
  }, [t]), React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    align: "stretch",
    className: "ohmylms-ai-course-content-wrapper"
  }, React.createElement(I.FlexItemWP, {
    flex: 3
  }, React.createElement(Rae, {
    data: t,
    onChapterActive: function (e) {
      a(null == e ? void 0 : e.content);
    }
  })), React.createElement(I.FlexItemWP, {
    flex: 5
  }, React.createElement(bae, {
    data: r
  }))));
};

const Pae = (0, g.memo)(Cae);

var Oae = n(30967),
  kae = function () {
    return React.createElement("svg", {
      fill: "none",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "currentColor",
      d: "M13.718 3.995l-8.005 7.448L2.877 8.26 1.736 9.31l3.87 4.333 9.145-8.499-1.033-1.148z"
    }));
  },
  jae = function (e) {
    var t = e.onEdit,
      n = e.onAccept,
      r = e.onRegenerate,
      a = e.isLoading;
    return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
      align: "center",
      justify: "center",
      gap: 1
    }, React.createElement(I.ButtonWP, {
      onClick: t,
      icon: React.createElement(pG.A, {
        width: "12",
        height: "12"
      }),
      variant: "outline",
      disabled: a
    }, (0, b.__)("Edit Prompt", "ohmylms")), React.createElement(I.ButtonWP, {
      onClick: r,
      icon: React.createElement(Oae.A, null),
      variant: "outline",
      style: {
        marginLeft: "auto"
      },
      disabled: a
    }, (0, b.__)("Regenerate Outline", "ohmylms")), React.createElement(I.ButtonWP, {
      onClick: n,
      icon: React.createElement(kae, null),
      variant: "primary",
      isBusy: a
    }, (0, b.__)("Accept Outline", "ohmylms"))));
  };

const Aae = (0, g.memo)(jae);
