// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var at = function (e) {
  var t = e.chapter,
    n = e.contents,
    r = e.handleCreateLesson,
    a = e.handleLessonEdit,
    o = e.setIsDraggingContent,
    i = void 0 === o ? function () {} : o,
    l = e.handleAutomation,
    c = e.handleIntegration,
    u = Ze(),
    s = ((0, g.useRef)(null), (0, y.useDispatch)(T.default)),
    d = tt((0, g.useState)(null), 2),
    m = d[0],
    p = d[1],
    f = function (e) {
      var t = document.querySelectorAll(".ohmylms-draggable-single-chapter");
      t.length > 0 && t.forEach(function (t) {
        t.draggable = e;
      });
    },
    v = function (e, t) {
      e.stopPropagation(), f(!1), p(t), i(!0);
    },
    h = function (e) {
      e.stopPropagation(), i(!1), f(!0);
    },
    _ = function (e) {
      e.stopPropagation(), e.preventDefault();
    },
    w = function (e, r) {
      if (e.stopPropagation(), null !== m) {
        var a = function (e) {
            return function (e) {
              if (Array.isArray(e)) return rt(e);
            }(e) || function (e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || nt(e) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }(t.content.map(function (e) {
            return n.byId[e];
          }).filter(function (e) {
            return e;
          }).sort(function (e, t) {
            return Number(e.order_number) - Number(t.order_number);
          }).map(function (e) {
            return e.id;
          })),
          o = tt(a.splice(m, 1), 1)[0];
        a.splice(r, 0, o);
        var l = a.map(function (e, t) {
          var r = Xe(Xe({}, n.byId[e]), {}, {
            order_number: t + 1
          });
          return 1 === (null == r ? void 0 : r.order_number) && (r.prerequisites = {
            enable: !1,
            data: []
          }), r;
        });
        s.saveChapterContent(t.id, l), s.setContentsToChapter(t.id, l), p(null), i(!1);
      }
    };
  return React.createElement(I.SpacerWP, {
    marginY: 4
  }, React.createElement(I.FlexWP, {
    direction: "column",
    gap: 4,
    align: "start",
    justify: "start"
  }, u ? t.content.sort(function (e, t) {
    return Number(e.order_number) - Number(t.order_number);
  }).map(function (e, n) {
    return React.createElement("div", {
      key: e.id,
      onClick: function () {
        return a(e.id, null == e ? void 0 : e.type);
      },
      draggable: !0,
      onDragStart: function (e) {
        return v(e, n);
      },
      onDragEnd: function (e) {
        return h(e);
      },
      onDragOver: function (e) {
        return _(e);
      },
      onDrop: function (e) {
        return w(e, n);
      },
      style: {
        width: "100%"
      }
    }, React.createElement(Ye, {
      content: e,
      contentId: e.id,
      handleLessonEdit: a,
      chapterId: null == t ? void 0 : t.id,
      handleAutomation: l,
      handleIntegration: c
    }));
  }) : t.content.length > 0 ? t.content.map(function (e) {
    return n.byId[e];
  }).filter(function (e) {
    return e;
  }).sort(function (e, t) {
    return Number(e.order_number) - Number(t.order_number);
  }).map(function (e, n) {
    return React.createElement("div", {
      key: null == e ? void 0 : e.id,
      draggable: !0,
      onDragStart: function (e) {
        return v(e, n);
      },
      onDragEnd: function (e) {
        return h(e);
      },
      onDragOver: function (e) {
        return _(e);
      },
      onDrop: function (e) {
        return w(e, n);
      },
      style: {
        width: "100%"
      }
    }, React.createElement(Ye, {
      onClick: function () {
        return a(e.id, null == e ? void 0 : e.type, null == e ? void 0 : e.platform);
      },
      content: e,
      contentId: e.id,
      handleLessonEdit: a,
      chapterId: null == t ? void 0 : t.id,
      handleAutomation: l,
      handleIntegration: c
    }));
  }) : React.createElement(React.Fragment, null), React.createElement(D.A, {
    variant: "secondary",
    onClick: function () {
      r(t.id), s.setCourseInfoOpen(!1);
    }
  }, React.createElement(q.Icon, {
    icon: $e.A,
    width: "24px",
    height: "24px"
  }), React.createElement("span", null, (0, b.__)("Add Content", "ohmylms")))));
};
const ot = (0, g.memo)(at);
function it(e) {
  return it = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, it(e);
}
function lt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? lt(Object(n), !0).forEach(function (t) {
      ut(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function ut(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != it(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != it(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == it(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function st(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var dt = function (e) {
  var t = true,
    n = e.lessonType,
    r = void 0 === n ? "text" : n,
    a = e.icon,
    o = e.title,
    i = e.description,
    l = e.onClick,
    c = e.loader,
    u = (e.keyIdx, e.comingSoon),
    s = void 0 !== u && u,
    d = e.type,
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
          if ("string" == typeof e) return st(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? st(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(null), 2),
    p = m[0],
    f = m[1],
    v = function (e) {
      c || (l(), f(e));
    };
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0,
    cursor: c ? "default" : "pointer",
    tabIndex: 0,
    role: "button",
    width: "".concat("others" === d ? "calc(50% - 4px)" : "calc(33% - 4px)"),
    onClick: function () {
      return v(r);
    },
    onKeyDown: function (e) {
      s || "Enter" !== e.key && " " !== e.key || (e.preventDefault(), v(r));
    },
    style: ct({}, "assignment" !== r || t ? {} : {
      opacity: "0.3"
    })
  }, c && p === r && React.createElement(I.FlexWP, {
    align: "center",
    justify: "center",
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "color-mix(in srgb, var(--ohmylms-primary-color) 50%, transparent)",
      borderRadius: "4px"
    }
  }, React.createElement(I.SpinWP, {
    spinning: !0,
    delay: 0
  })), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 6
  }, React.createElement(I.FlexWP, {
    justify: "flex-start",
    gap: 3
  }, React.createElement(I.BadgeWP, {
    isRounded: !0,
    height: "42px",
    width: "42px",
    style: {
      justifyContent: "center",
      gap: "0"
    }
  }, a), React.createElement(I.HeadingWP, {
    level: 4,
    size: 16
  }, o)), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement(I.TextWP, {
    as: "p",
    size: 14
  }, i))));
};
const mt = (0, g.memo)(dt);
var pt = ["width", "height"];
function ft() {
  return ft = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ft.apply(null, arguments);
}
const vt = function (e) {
  var t = e.width,
    n = void 0 === t ? 24 : t,
    r = e.height,
    a = void 0 === r ? 24 : r,
    o = function (e, t) {
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
    }(e, pt);
  return React.createElement("svg", ft({
    width: n,
    height: a,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o), React.createElement("path", {
    d: "M20 8.5V15.5C20 16.3284 19.3284 17 18.5 17H5.5C4.67157 17 4 16.3284 4 15.5V8.5C4 7.67157 4.67157 7 5.5 7H18.5C19.3284 7 20 7.67157 20 8.5Z",
    fill: "#00832D"
  }), React.createElement("path", {
    d: "M20 10L23 8V16L20 14V10Z",
    fill: "#0066DA"
  }), React.createElement("path", {
    d: "M4 9H6V15H4V9Z",
    fill: "#E94235"
  }), React.createElement("path", {
    d: "M18 9H20V15H18V9Z",
    fill: "#2684FC"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3",
    fill: "white"
  }), React.createElement("path", {
    d: "M12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z",
    fill: "#00832D"
  }));
};
function gt(e) {
  return function (e) {
    if (Array.isArray(e)) return bt(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || yt(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function ht(e, t) {
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
  }(e, t) || yt(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function yt(e, t) {
  if (e) {
    if ("string" == typeof e) return bt(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bt(e, t) : void 0;
  }
}
function bt(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var _t = function (e) {
  var t,
    n,
    r = true,
    a = e.setOpenModal,
    o = e.handleCreateLesson,
    i = e.handleCreateQuiz,
    l = e.loader,
    c = e.lastFocusedElement,
    u = e.handleOpenZoom,
    s = e.handleOpenGoogleMeet,
    d = ((0, y.useDispatch)(T.default), (0, y.useSelect)(function (e) {
      return e(T.default).getAllIntegrations();
    }, [])),
    m = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    p = ht((0, g.useState)(!1), 2),
    f = p[0],
    v = (p[1], ht((0, g.useState)(!1), 2)),
    h = v[0],
    _ = v[1],
    w = ht((0, g.useState)(!1), 2),
    E = (w[0], w[1], ht((0, g.useState)({}), 2)),
    S = (E[0], E[1], (0, g.useCallback)(function () {
      o("assignment");
    }, [r, o])),
    R = true,
    x = true,
    C = [{
      key: 1,
      lessonType: "text",
      icon: React.createElement(ce, null),
      title: (0, b.__)("Text", "ohmylms"),
      type: "lesson",
      description: (0, b.__)("Create text-based content with links and images", "ohmylms"),
      onClick: function () {
        return o("text");
      }
    }, {
      key: 2,
      lessonType: "video",
      icon: React.createElement(pe, null),
      title: (0, b.__)("Video", "ohmylms"),
      type: "lesson",
      description: (0, b.__)("Deliver video content in a variety of formats", "ohmylms"),
      onClick: function () {
        return o("video");
      }
    }, {
      key: 3,
      lessonType: "audio",
      icon: React.createElement(ve, null),
      title: (0, b.__)("Audio", "ohmylms"),
      type: "lesson",
      description: (0, b.__)("Deliver audio content in a variety of formats", "ohmylms"),
      onClick: function () {
        return o("audio");
      }
    }, {
      key: 4,
      lessonType: "quiz",
      icon: React.createElement(se, null),
      title: (0, b.__)("Quiz", "ohmylms"),
      type: "others",
      description: (0, b.__)("Evaluate members with a variety of question types.", "ohmylms"),
      onClick: function () {
        return i();
      }
    }, {
      key: 5,
      lessonType: "assignment",
      icon: React.createElement(he, null),
      type: "others",
      title: (0, b.__)("Assignment", "ohmylms"),
      description: (0, b.__)("Prompt members to complete a project or assignment.", "ohmylms"),
      onClick: S
    }].concat(gt("cohort-based" === (null == m ? void 0 : m.type) && null != d && null !== (t = d.zoom) && void 0 !== t && t.is_enable && R ? [{
      key: 6,
      lessonType: "session",
      icon: React.createElement(we, null),
      title: (0, b.__)("Zoom", "ohmylms"),
      type: "lesson",
      description: (0, b.__)("Host live, interactive sessions with Zoom meetings directly from your course.", "ohmylms"),
      onClick: u
    }] : []), gt("cohort-based" === (null == m ? void 0 : m.type) && null != d && null !== (n = d.googlemeet) && void 0 !== n && n.is_enable && x ? [{
      key: 7,
      lessonType: "googlemeet",
      icon: React.createElement(vt, null),
      title: (0, b.__)("Google Meet", "ohmylms"),
      type: "lesson",
      description: (0, b.__)("Host live, interactive sessions with Google Meet directly from your course.", "ohmylms"),
      onClick: s
    }] : [])).reduce(function (e, t) {
      return e[t.type] || (e[t.type] = []), e[t.type].push(t), e;
    }, {});
  return React.createElement(React.Fragment, null, React.createElement(I.ModalWP, {
    title: (0, b.__)("Add Content", "ohmylms"),
    style: {
      maxWidth: "960px"
    },
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0,
    onRequestClose: function () {
      a(!1), null != c && c.current && c.current.focus();
    }
  }, f ? React.createElement("div", null, "Loading...") : Object.entries(C).map(function (e) {
    var t = ht(e, 2),
      n = t[0],
      r = t[1];
    return React.createElement(I.CardWP, {
      isBorderless: !0,
      key: n,
      variant: "secondary"
    }, React.createElement(I.SpacerWP, {
      padding: 4,
      marginBottom: 4
    }, React.createElement(I.TextWP, {
      as: "h4",
      variant: "muted",
      size: 12
    }, "lesson" === n ? (0, b.__)("Lessons", "ohmylms") : "session" === n ? (0, b.__)("Sessions", "ohmylms") : (0, b.__)("Others", "ohmylms")), React.createElement(I.SpacerWP, null), React.createElement(I.FlexWP, {
      wrap: "wrap",
      className: "lesson-type-items",
      justify: "flex-start",
      align: "stretch"
    }, r.map(function (e) {
      return React.createElement(mt, {
        key: e.key,
        keyIdx: e.key,
        lessonType: e.lessonType,
        icon: e.icon,
        title: e.title,
        description: e.description,
        onClick: e.onClick,
        loader: l,
        comingSoon: null == e ? void 0 : e.comingSoon,
        type: null == e ? void 0 : e.type
      });
    }))));
  }), h && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: h,
    onClose: _
  }))));
};
const wt = (0, g.memo)(_t);
function Et() {
  return Et = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Et.apply(null, arguments);
}
var St = function (e) {
  var t, n, r;
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    style: null !== (t = e.style) && void 0 !== t ? t : {},
    className: "settings-cog",
    fill: "none",
    width: "".concat(null !== (n = null == e ? void 0 : e.width) && void 0 !== n ? n : "20"),
    height: "".concat(null !== (r = null == e ? void 0 : e.height) && void 0 !== r ? r : "20"),
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", Et({
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.6",
    d: "M10 7c-1.714 0-3.104 1.343-3.104 3s1.39 3 3.104 3c1.714 0 3.104-1.343 3.104-3S11.714 7 10 7zm8.712.86l-.84.668a1.867 1.867 0 000 2.944l.84.669a.745.745 0 01.182.97l-1.66 2.778a.802.802 0 01-.96.333l-1.019-.37c-1.163-.42-2.434.29-2.638 1.473l-.18 1.038a.782.782 0 01-.777.637H8.34a.782.782 0 01-.778-.637l-.179-1.038c-.204-1.184-1.475-1.893-2.638-1.472l-1.02.369a.802.802 0 01-.96-.333l-1.66-2.778a.745.745 0 01.183-.97l.84-.669a1.867 1.867 0 000-2.944l-.84-.669a.745.745 0 01-.182-.97l1.66-2.778a.802.802 0 01.96-.333l1.019.37c1.163.42 2.434-.29 2.638-1.473l.18-1.038A.782.782 0 018.34 1h3.32c.385 0 .714.27.778.637l.179 1.038c.204 1.184 1.475 1.893 2.638 1.472l1.02-.369c.36-.13.767.01.96.333l1.66 2.778a.745.745 0 01-.183.97z"
  }, e))));
};
const Rt = (0, g.memo)(St);
var xt = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "12",
    height: "14",
    viewBox: "0 0 12 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    stroke: "#fff",
    strokeWidth: ".1",
    d: "M11.011 2.398h0L9.576.988l1.435 1.41zm0 0c.604.59.941 1.389.939 2.22v0m-.939-2.22l.939 2.22m0 0v6.174c-.002 1.742-1.455 3.156-3.25 3.158H3.3C1.505 13.948.052 12.534.05 10.792V3.208C.052 1.466 1.505.052 3.3.05h3.965m4.685 4.568L7.265.05m0 0c.868.002 1.699.34 2.31.937L7.266.05zm-.615 1.7V1.7H3.3c-.855 0-1.55.674-1.55 1.508v7.584c0 .834.695 1.508 1.55 1.508h5.4c.855 0 1.55-.674 1.55-1.508V5.2H7.8c-.636 0-1.15-.501-1.15-1.117V1.75z"
  })));
};
const Ct = (0, g.memo)(xt);
var Pt = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "21",
    height: "22",
    viewBox: "0 0 21 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M15.056 8.64a.875.875 0 01-1.237 1.237l-2.442-2.443v6.2a.875.875 0 11-1.75 0v-6.2L7.183 9.878a.875.875 0 11-1.238-1.237l3.938-3.938a.875.875 0 011.238 0l3.935 3.936z"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.5 12.76c.483 0 .875.392.875.875v1.75c0 .483.392.875.875.875h10.5a.875.875 0 00.875-.875v-1.75a.875.875 0 011.75 0v1.75a2.625 2.625 0 01-2.625 2.625H5.25a2.625 2.625 0 01-2.625-2.625v-1.75c0-.483.392-.875.875-.875z",
    clipRule: "evenodd"
  })));
};
const Ot = (0, g.memo)(Pt);
var kt = n(27268),
  jt = function (e) {
    var t = e.status,
      n = e.type;
    return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
      gap: 2,
      align: "center",
      justify: "flex-start",
      className: "".concat("draft" === n ? "draft" : "published")
    }, "draft" === n ? React.createElement(Ct, null) : React.createElement(Ot, null), t));
  };
const At = (0, g.memo)(jt);
var Mt = n(79476),
  Tt = n(50127),
  It = ["title", "onChange", "defaultValue", "options", "customClass", "showDivider", "horizontal", "tooltip", "row"];
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ft.apply(null, arguments);
}
var Nt = function (e) {
  var t = e.title,
    n = e.onChange,
    r = void 0 === n ? function () {
      return console.error("No onChange function provided");
    } : n,
    a = e.defaultValue,
    o = void 0 === a ? "draft" : a,
    i = e.options,
    l = void 0 === i ? [] : i,
    c = e.customClass,
    u = void 0 === c ? "" : c,
    s = e.showDivider,
    d = void 0 !== s && s,
    m = (e.horizontal, e.tooltip),
    p = void 0 === m ? "" : m,
    f = e.row,
    v = void 0 === f || f,
    g = function (e, t) {
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
    }(e, It);
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: "space-between",
    className: "ohmylms-radio-button-wrapper ".concat(u),
    gap: 4,
    wrap: "wrap",
    direction: v ? "row" : "column"
  }, t && React.createElement(I.FlexItemWP, {
    style: {
      flex: "1"
    }
  }, React.createElement(I.FlexWP, {
    gap: 3,
    align: "center",
    justify: "flex-start"
  }, React.createElement(I.HeadingWP, {
    level: "4",
    className: "ohmylms-radio-button-title"
  }, t), p && React.createElement(V.A, {
    title: p,
    className: "ohmylms-tooltip"
  }, React.createElement(React.Fragment, null, React.createElement(Mt.A, null))))), React.createElement(I.FlexItemWP, {
    style: {
      flex: "1"
    }
  }, React.createElement(I.RadioGroupWP, Ft({
    isBlock: !0,
    value: o,
    onChange: r
  }, g, {
    options: l
  })))), d && React.createElement(Tt.A, {
    className: "ohmylms-radio-divider"
  }));
};
const Dt = (0, g.memo)(Nt);
var Wt = function (e) {
  var t = e.visibility,
    n = e.onVisibilityChange,
    r = [{
      value: "draft",
      label: React.createElement(At, {
        status: (0, b.__)("Draft", "ohmylms"),
        type: "draft"
      })
    }, {
      value: "publish",
      label: React.createElement(At, {
        status: (0, b.__)("Publish", "ohmylms"),
        type: "publish"
      })
    }];
  return React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 4
  }, React.createElement(Dt, {
    title: (0, b.__)("Visibility", "ohmylms"),
    tooltip: (0, b.__)("Choose whether to make this lesson visible to students or keep it hidden.", "ohmylms"),
    value: t,
    options: r,
    onChange: n
  }));
};
const zt = (0, g.memo)(Wt);
var Bt = n(25946),
  Lt = ["isVisible", "animationDuration", "children"];
function Vt() {
  return Vt = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Vt.apply(null, arguments);
}
function Ht(e, t) {
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
      if ("string" == typeof e) return Gt(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gt(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Gt(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Ut = function (e) {
  var t = e.isVisible,
    n = e.animationDuration,
    r = void 0 === n ? 300 : n,
    a = e.children,
    o = function (e, t) {
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
    }(e, Lt),
    i = Ht((0, g.useState)(t), 2),
    l = i[0],
    c = i[1],
    u = Ht((0, g.useState)(!1), 2),
    s = u[0],
    d = u[1];
  return (0, g.useEffect)(function () {
    if (!t) {
      d(!0);
      var e = setTimeout(function () {
        return c(!1);
      }, r);
      return function () {
        return clearTimeout(e);
      };
    }
    c(!0), d(!1);
  }, [t, r]), l ? React.createElement("div", Vt({
    style: {
      width: "100%",
      transition: "opacity ".concat(r, "ms ease, transform ").concat(r, "ms ease"),
      opacity: s ? 0 : 1,
      transform: s ? "translateY(-10px)" : "translateY(0)",
      animation: s ? "none" : "fadeIn ".concat(r, "ms")
    }
  }, o), a) : null;
};
const qt = (0, g.memo)(Ut);
var Yt = n(71847),
  Qt = ["title", "onChange", "isChecked", "isItProFeature", "customClass", "tooltip", "conditionalChild", "description", "spacerPadding", "paddingBottom", "align", "headerFontSize"];
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Zt.apply(null, arguments);
}
var $t = function (e) {
  var t = true,
    n = e.title,
    r = e.onChange,
    a = void 0 === r ? function () {
      return console.error("No onChange function provided");
    } : r,
    o = e.isChecked,
    i = void 0 !== o && o,
    l = e.isItProFeature,
    c = void 0 !== l && l,
    u = e.customClass,
    s = void 0 === u ? "" : u,
    d = e.tooltip,
    m = void 0 === d ? "" : d,
    p = e.conditionalChild,
    f = e.description,
    v = e.spacerPadding,
    g = void 0 === v ? 4 : v,
    h = e.paddingBottom,
    y = e.align,
    b = void 0 === y ? "center" : y,
    _ = e.headerFontSize,
    w = void 0 === _ ? "18px" : _,
    E = function (e, t) {
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
    }(e, Qt);
  return React.createElement(I.SpacerWP, {
    padding: g,
    marginBottom: 0,
    paddingBottom: null != h ? h : g
  }, React.createElement("div", {
    className: " ".concat(s, " ").concat(i ? "ohmylms-checked" : "")
  }, React.createElement(I.FlexWP, {
    className: "",
    align: b
  }, React.createElement(I.FlexItemWP, {
    className: ""
  }, n && React.createElement(React.Fragment, null, React.createElement(I.FlexWP, null, React.createElement(I.FlexItemWP, null, React.createElement(q.__experimentalHeading, {
    level: "4",
    color: "#000D25",
    size: w
  }, n)), React.createElement(I.FlexItemWP, null, m && React.createElement(I.TooltipWP, {
    text: m
  }, React.createElement(Mt.A, null))))), f && React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    marginTop: 2
  }), React.createElement(Yt.A, {
    as: "p",
    color: "#687784",
    size: "14px",
    style: {
      maxWidth: "450px"
    }
  }, f))), React.createElement(I.FlexItemWP, null, React.createElement("div", {
    style: {
      display: "inline-block",
      opacity: c && !t ? .3 : 1,
      cursor: "pointer"
    }
  }, React.createElement(Bt.A, Zt({
    checked: i,
    onChange: a,
    className: c && !t ? "ohmylms-disabled-switcher" : ""
  }, E))))), p && React.createElement(qt, {
    isVisible: i
  }, p)));
};
const Kt = (0, g.memo)($t);
