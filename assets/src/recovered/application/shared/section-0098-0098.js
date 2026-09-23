// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var KH = function (e) {
  var t,
    n = e.completedSteps,
    r = (e.onSave, (0, f.g)().id),
    a = ((0, y.useDispatch)(T.default), (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, [r])),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseChapters();
    }, [r]),
    i = (0, y.useSelect)(function (e) {
      return e("creator-lms/store").getCourseChaptersContent();
    }, [r]),
    l = function (e) {
      return (0, g.useMemo)(function () {
        var t = ["text", "video", "audio"],
          n = 0,
          r = 0,
          a = 0,
          o = 0;
        return Object.values(e).forEach(function (e) {
          t.includes(null == e ? void 0 : e.type) ? n++ : "quiz" === (null == e ? void 0 : e.type) ? r++ : "assignment" === (null == e ? void 0 : e.type) ? a++ : "session" === e.type && o++;
        }), {
          lessons: n,
          quizzes: r,
          assignments: a,
          sessions: o
        };
      }, [e]);
    }(null == i ? void 0 : i.byId),
    c = l.lessons,
    u = l.quizzes,
    s = l.assignments,
    d = l.sessions,
    m = QH((0, g.useState)(!1), 2),
    p = (m[0], m[1], QH((0, g.useState)(!1), 2)),
    v = (p[0], p[1], QH((0, g.useState)(!1), 2));
  function h(e) {
    if (!e || !e.hour && !e.min && !e.sec) return (0, b.__)("Not Set", "ohmylms");
    var t = [];
    if (e.hour) {
      var n = (0, b.sprintf)((0, b._n)("%d hour", "%d hours", parseInt(e.hour)), parseInt(e.hour));
      t.push(n);
    }
    if (e.min) {
      var r = (0, b.sprintf)((0, b._n)("%d minute", "%d minutes", parseInt(e.min)), parseInt(e.min));
      t.push(r);
    }
    if (e.sec) {
      var a = (0, b.sprintf)((0, b._n)("%d second", "%d seconds", parseInt(e.sec)), parseInt(e.sec));
      t.push(a);
    }
    return t.join(", ");
  }
  v[0], v[1];
  var _ = (0, g.useMemo)(function () {
      var e, t;
      return [{
        id: 0,
        label: (0, b.__)("Course Title", "ohmylms"),
        value: Ge(null !== (e = null == a ? void 0 : a.name) && void 0 !== e ? e : (0, b.__)("Not set", "ohmylms"))
      }, {
        id: 1,
        label: (0, b.__)("Categories", "ohmylms"),
        value: 0 === (null == a ? void 0 : a.categories.length) ? (0, b.__)("Not set", "ohmylms") : null == a ? void 0 : a.categories.map(function (e, t) {
          return Ge(e.name);
        }).join(", ")
      }, {
        id: 2,
        label: (0, b.__)("Chapters", "ohmylms"),
        value: null === (t = Object.values(null == o ? void 0 : o.byId)) || void 0 === t ? void 0 : t.length
      }, {
        id: 3,
        label: (0, b.__)("Lessons", "ohmylms"),
        value: c
      }].concat(function (e) {
        return function (e) {
          if (Array.isArray(e)) return $H(e);
        }(e) || function (e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || ZH(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }(null != a && a.is_cohort ? [{
        id: 10,
        label: (0, b.__)("Sessions", "cretorlms"),
        value: d
      }] : []), [{
        id: 4,
        label: (0, b.__)("Quizzes", "ohmylms"),
        value: u
      }, {
        id: 5,
        label: (0, b.__)("Assignments", "ohmylms"),
        value: s
      }, {
        id: 6,
        label: (0, b.__)("Pricing", "ohmylms"),
        value: "free" === (null == a ? void 0 : a.price_type) ? (0, b.__)("Free", "ohmylms") : null != a && a.sale_price ? React.createElement(React.Fragment, null, React.createElement(YH, {
          currency: (null == a ? void 0 : a.currency) || "$",
          currency_pos: (null == a ? void 0 : a.currency_pos) || "left",
          price: Number(null == a ? void 0 : a.sale_price)
        }), " ", React.createElement("del", null, React.createElement(YH, {
          currency: (null == a ? void 0 : a.currency) || "$",
          currency_pos: (null == a ? void 0 : a.currency_pos) || "left",
          price: Number(null == a ? void 0 : a.regular_price),
          del: !0
        }))) : React.createElement(YH, {
          currency: (null == a ? void 0 : a.currency) || "$",
          currency_pos: (null == a ? void 0 : a.currency_pos) || "left",
          price: Number(null == a ? void 0 : a.regular_price)
        })
      }, {
        id: 7,
        label: (0, b.__)("Course Duration", "ohmylms"),
        value: h(null == a ? void 0 : a.duration)
      }, {
        id: 8,
        label: (0, b.__)("Level", "ohmylms"),
        value: React.createElement("span", {
          style: {
            textTransform: "all" === (null == a ? void 0 : a.level) ? "inherit" : "capitalize"
          }
        }, "all" === (null == a ? void 0 : a.level) ? (0, b.__)("All levels", "ohmylms") : null == a ? void 0 : a.level)
      }, {
        id: 9,
        label: (0, b.__)("Slug", "ohmylms"),
        value: null == a ? void 0 : a.slug
      }]);
    }, [a, o, c, u, s, d]),
    w = [{
      id: 0,
      label: (0, b.__)("Course title", "ohmylms"),
      completed: Boolean(null == a ? void 0 : a.name)
    }, {
      id: 1,
      label: (0, b.__)("Course description", "ohmylms"),
      completed: Boolean(null == a ? void 0 : a.description)
    }, {
      id: 2,
      label: (0, b.__)("Course Thumbnail", "ohmylms"),
      completed: Boolean(null == a ? void 0 : a.video_src) || Boolean(null == a ? void 0 : a.image_src)
    }, {
      id: 3,
      label: (0, b.__)("Course Content", "ohmylms"),
      completed: 0 !== c || 0 !== s || 0 !== u
    }, {
      id: 4,
      label: (0, b.__)("Pricing", "ohmylms"),
      completed: null == n ? void 0 : n.includes(1)
    }];
  return React.createElement(React.Fragment, null, React.createElement(I.ContainerWP, null, React.createElement(I.SpacerWP, {
    paddingY: 6,
    marginBottom: 0,
    className: "omlms-course-preview"
  }, React.createElement(I.CardWP, {
    variant: "secondary",
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 10,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    gap: 5,
    align: "flex-start",
    className: "omlms-course-preview-wrapper"
  }, React.createElement(I.CardWP, {
    style: {
      flex: "5"
    },
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 5,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    gap: 4,
    align: "center",
    justify: "space-between"
  }, React.createElement(I.HeadingWP, {
    level: "3"
  }, (0, b.__)("Review Course Summary", "ohmylms")), React.createElement(I.ButtonWP, {
    href: null == a ? void 0 : a.course_url,
    target: "_blank",
    variant: "link",
    style: {
      gap: "5px",
      textDecoration: "none"
    }
  }, React.createElement(Br, null), (0, b.__)("Preview", "ohmylms"))), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement(I.FlexWP, {
    gap: 0,
    direction: "column",
    className: "omlms-review-summery-list"
  }, _.map(function (e, t) {
    return React.createElement("div", {
      key: null == e ? void 0 : e.id
    }, React.createElement(I.DividerWP, {
      marginStart: 0,
      marginEnd: 0
    }), React.createElement(I.SpacerWP, {
      paddingY: 3,
      marginBottom: 0
    }, React.createElement(I.FlexWP, {
      gap: 2,
      align: "center",
      justify: "space-between"
    }, React.createElement(I.TextWP, {
      as: "span",
      size: 14
    }, Ge(e.label)), React.createElement(I.TextWP, {
      as: "span",
      size: 14,
      style: {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        maxWidth: "70%"
      }
    }, e.value))));
  })))), React.createElement(I.CardWP, {
    style: {
      flex: "2"
    },
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 5,
    marginBottom: 0
  }, React.createElement(I.HeadingWP, {
    level: "3"
  }, (0, b.__)("Publish Checklist", "ohmylms")), w.filter(function (e) {
    return e.completed;
  }).length < w.length && React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 4
  }, React.createElement(I.FlexWP, {
    align: "flex-start",
    gap: 2,
    justify: "flex-start"
  }, React.createElement(I.FlexItemWP, {
    style: {
      width: "18px",
      position: "relative",
      top: "1px"
    }
  }, React.createElement("svg", {
    fill: "none",
    width: "18",
    height: "18",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#7A8B9A",
    fillRule: "evenodd",
    d: "M11 6A5 5 0 111 6a5 5 0 0110 0zm-5-.5a.5.5 0 01.5.5v2.5a.5.5 0 11-1 0V6a.5.5 0 01.5-.5zm0-1a.5.5 0 100-1 .5.5 0 000 1z",
    clipRule: "evenodd"
  }))), React.createElement(I.FlexItemWP, {
    style: {
      width: "calc(100% - 20px)"
    }
  }, w.filter(function (e) {
    return e.completed;
  }).length < w.length && React.createElement(I.TextWP, {
    as: "p",
    size: 14
  }, (0, b.__)("Your course needs attention. Please finish the following checklist before publishing:", "ohmylms"))))))), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 4
  }, React.createElement(I.FlexWP, {
    gap: 3,
    direction: "column"
  }, w.map(function (e, t) {
    return React.createElement(I.FlexWP, {
      gap: 2,
      align: "center",
      justify: "flex-start",
      key: e.id,
      className: " ".concat(e.completed ? "completed" : "")
    }, React.createElement("svg", {
      width: "19",
      height: "19",
      fill: "none",
      viewBox: "0 0 19 19",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("rect", {
      width: "18",
      height: "18",
      x: ".5",
      y: ".5",
      fill: e.completed ? "green" : "#7A8B9A",
      rx: "9"
    }), React.createElement("path", {
      fill: "#fff",
      fillRule: "evenodd",
      d: "M15.502 5.63a.731.731 0 010 1.033l-6.279 6.28a2.194 2.194 0 01-3.103 0L3.498 10.32a.731.731 0 111.034-1.034l2.622 2.622a.731.731 0 001.035 0l6.279-6.279a.731.731 0 011.034 0z",
      clipRule: "evenodd"
    })), React.createElement("span", {
      style: {
        color: e.completed ? "green" : "#7A8B9A"
      }
    }, e.label));
  })))), "future" === (null == a ? void 0 : a.status) && React.createElement("div", {
    className: "omlms-course-publish-status"
  }, React.createElement("p", null, (0, b.__)("Your course is scheduled for publishing on ", "ohmylms"), React.createElement("strong", null, sn()(null == a || null === (t = a.post_date) || void 0 === t ? void 0 : t.date).format("MMMM D, YYYY [at] h:mm A"))))))))))));
};

const JH = (0, g.memo)(KH);

function XH(e) {
  return XH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, XH(e);
}

function eG(e) {
  return function (e) {
    if (Array.isArray(e)) return sG(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || uG(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function tG(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function nG(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? tG(Object(n), !0).forEach(function (t) {
      rG(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tG(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function rG(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != XH(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != XH(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == XH(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function aG() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return oG(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (oG(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, oG(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, oG(d, "constructor", u), oG(u, "constructor", c), c.displayName = "GeneratorFunction", oG(u, a, "GeneratorFunction"), oG(d), oG(d, a, "Generator"), oG(d, r, function () {
    return this;
  }), oG(d, "toString", function () {
    return "[object Generator]";
  }), (aG = function () {
    return {
      w: o,
      m
    };
  })();
}

function oG(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  oG = function (e, t, n, r) {
    function o(t, n) {
      oG(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, oG(e, t, n, r);
}

function iG(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function lG(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        iG(o, r, a, i, l, "next", e);
      }
      function l(e) {
        iG(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function cG(e, t) {
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
  }(e, t) || uG(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function uG(e, t) {
  if (e) {
    if ("string" == typeof e) return sG(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? sG(e, t) : void 0;
  }
}

function sG(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
