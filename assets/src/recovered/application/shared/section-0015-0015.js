// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function Pu() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Ou(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Ou(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Ou(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Ou(d, "constructor", u), Ou(u, "constructor", c), c.displayName = "GeneratorFunction", Ou(u, a, "GeneratorFunction"), Ou(d), Ou(d, a, "Generator"), Ou(d, r, function () {
    return this;
  }), Ou(d, "toString", function () {
    return "[object Generator]";
  }), (Pu = function () {
    return {
      w: o,
      m
    };
  })();
}
function Ou(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Ou = function (e, t, n, r) {
    function o(t, n) {
      Ou(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Ou(e, t, n, r);
}
function ku(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ju(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ku(Object(n), !0).forEach(function (t) {
      Au(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ku(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Au(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Cu(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Cu(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Cu(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Mu(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function Tu(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Mu(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Mu(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
function Iu(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Fu = function (e) {
  var t,
    n,
    r,
    a,
    o = e.chapterId,
    i = true,
    l = function () {
      var e = (0, y.useSelect)(function (e) {
          return e(T.default).getQuizTypes();
        }, []),
        t = (0, y.useSelect)(function (e) {
          return e(T.default).getInteractiveQuizTypes();
        }, []),
        n = [].concat(nu(e), nu(t)),
        r = (0, y.useSelect)(function (e) {
          return e(T.default).selectQuestion();
        }, []);
      if (!r) return {
        edit: tu,
        showDefault: !0
      };
      var a = r.settings;
      if (null == a || !a.type) return {
        edit: tu,
        showDefault: !0
      };
      var o = n.find(function (e) {
        return (null == e ? void 0 : e.type) === (null == a ? void 0 : a.type);
      });
      return o ? {
        edit: o.edit,
        showDefault: !1
      } : {
        edit: tu,
        showDefault: !0
      };
    }(),
    c = l.edit,
    u = l.showDefault,
    s = (0, y.useDispatch)(T.default),
    d = (0, y.useSelect)(function (e) {
      return e(T.default).getSelectedQuizId();
    }, []),
    m = ((0, y.useSelect)(function (e) {
      return e(T.default).getQuiz();
    }, []), (0, y.useSelect)(function (e) {
      return e(T.default).selectSelectedQuestionId();
    }, []), (0, y.useSelect)(function (e) {
      return e(T.default).selectQuestion();
    }, [])),
    p = ((0, y.useSelect)(function (e) {
      return e(T.default).getCourseChaptersContent();
    }, [o]), (0, y.useSelect)(function (e) {
      return e(T.default).getAllQuestions();
    }, [])),
    f = (0, y.useSelect)(function (e) {
      return e(T.default).getQuestionErrors();
    }, []),
    v = function (e, t) {
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
          if ("string" == typeof e) return Iu(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Iu(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    h = v[0],
    _ = v[1],
    w = (Lc().isValidQuestion, (0, y.useSelect)(function (e) {
      var t, n, r, a, o, i, l, c;
      return {
        question: null === (t = e(T.default).selectQuestion()) || void 0 === t ? void 0 : t.name,
        videoSrc: null === (n = e(T.default).selectQuestion()) || void 0 === n ? void 0 : n.video_src,
        imgSrc: null === (r = e(T.default).selectQuestion()) || void 0 === r ? void 0 : r.image_src,
        options: null === (a = e(T.default).selectQuestion()) || void 0 === a ? void 0 : a.options,
        correctAnswerId: null === (o = e(T.default).selectQuestion()) || void 0 === o ? void 0 : o.correctAnswerId,
        id: null === (i = e(T.default).selectQuestion()) || void 0 === i ? void 0 : i.id,
        quizType: null === (l = e(T.default).selectQuestion()) || void 0 === l || null === (l = l.settings) || void 0 === l ? void 0 : l.type,
        description: null === (c = e(T.default).selectQuestion()) || void 0 === c ? void 0 : c.description
      };
    }, [])),
    E = w.question,
    S = w.videoSrc,
    R = w.imgSrc,
    x = (w.options, w.correctAnswerId, w.id),
    C = w.quizType,
    P = w.description,
    O = fc(C),
    k = (t = C, n = (0, y.useSelect)(function (e) {
      return e(T.default).getQuizTypes();
    }, []), r = (0, y.useSelect)(function (e) {
      return e(T.default).getInteractiveQuizTypes();
    }, []), a = [].concat(Eu(n), Eu(r)), t ? a.find(function (e) {
      return e.type === t;
    }) : null),
    j = function (e) {
      var t = (0, y.useSelect)(function (e) {
          return e(T.default).getQuizTypes();
        }, []),
        n = (0, y.useSelect)(function (e) {
          return e(T.default).getInteractiveQuizTypes();
        }, []),
        r = [].concat(Ru(t), Ru(n));
      if (!e) return null;
      var a = r.find(function (t) {
        return t.type === e;
      });
      return (null == a ? void 0 : a.otherContent) || null;
    }(C),
    A = ["statement", "fill-in-the-blank"],
    M = function () {
      var e = Tu(Pu().m(function e() {
        var t;
        return Pu().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (d) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              {
                e.n = 2;
                break;
              }
            case 2:
              (t = ju({}, m)).order_number = p.length + 1, t.id = new Date().getTime(), t.temp = !0, s.setQuestion(t), s.setQuestions(t), s.setSelectedQuestionId(t.id);
            case 3:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    F = function () {
      var e = Tu(Pu().m(function e() {
        return Pu().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (null == m || !m.temp) {
                e.n = 1;
                break;
              }
              s.deleteTempQuestion(null == m ? void 0 : m.id), e.n = 2;
              break;
            case 1:
              return e.n = 2, s.deleteQuestion(null == m ? void 0 : m.id);
            case 2:
              _(!1);
            case 3:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-quiz-editor-wrapper"
  }, React.createElement("div", {
    className: "ohmylms-quiz-editor-body"
  }, c && (u ? React.createElement(c, null) : React.createElement(React.Fragment, null, React.createElement(ou, null, React.createElement(I.FlexWP, {
    align: "center",
    justify: "space-between"
  }, React.createElement(I.FlexBlockWP, null, React.createElement(lu, {
    icon: O,
    label: null == k ? void 0 : k.name,
    iconColor: "var(--ohmylms-primary-color)"
  })), React.createElement(I.FlexBlockWP, null, React.createElement(du, {
    handleCopy: M,
    handleDelete: function () {
      return _(!0);
    }
  }))), React.createElement(wu, {
    placeholder: (0, b.__)("Type your question here ...", "ohmylms"),
    question: "Untitled" === E ? "" : E,
    description: P,
    onChange: function (e, t) {
      s.updateQuestionData(x, Au({}, e, t));
    },
    onImgUpload: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      s.updateQuestionData(x, {
        image_src: e,
        thumbnail_id: t
      });
    },
    onVideoUpload: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      s.updateQuestionData(x, {
        video_src: e,
        video_id: t
      });
    },
    videoSrc: S,
    imgSrc: R,
    quizType: C,
    proQuestionTypes: A,
    error: null == f ? void 0 : f.name
  }), React.createElement(c, null)), j && React.createElement(j, null))))), h && React.createElement(Ie, {
    title: (0, b.__)("Delete Question", "ohmylms"),
    description: (0, b.__)("Are you sure you want to delete this question?", "ohmylms"),
    onClose: function () {
      _(!1);
    },
    onDelete: F,
    isOpen: h,
    wrapClassName: "ohmylms-delete-question-modal",
    isDelete: !0
  }));
};
const Nu = (0, g.memo)(Fu);
var Du = function (e) {
  var t = true,
    n = e.handleHover,
    r = e.setHovered,
    a = e.handleDragStart,
    o = e.handleClick,
    i = e.quiz,
    l = e.icon;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-quiz-block",
    onMouseEnter: function () {
      n(i), r(!0);
    },
    onMouseLeave: function () {
      n(null), r(!1);
    },
    draggable: "true",
    onDragStart: function (e) {
      return a(e, i);
    },
    tabIndex: 0,
    onFocus: function () {
      n(i), r(!0);
    },
    onBlur: function () {
      n(null), r(!1);
    },
    onKeyDown: function (e) {
      if ("Enter" === e.key || " " === e.key) o(i);else if ("ArrowUp" === e.key || "ArrowLeft" === e.key) {
        var t = e.currentTarget.previousElementSibling;
        t && t.focus();
      } else if ("ArrowDown" === e.key || "ArrowRight" === e.key) {
        var n = e.currentTarget.nextElementSibling;
        n && n.focus();
      }
    },
    role: "button",
    "aria-label": "Quiz: ".concat(i.name),
    "aria-disabled": false
  }, React.createElement("div", {
    className: "ohmylms-quiz-block-icon"
  }, l), React.createElement("p", {
    className: "ohmylms-quiz-block-title"
  }, i.name)));
};
const Wu = (0, g.memo)(Du);
var zu = function (e) {
  var t = e.hoveredItem;
  return true, React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-quiz-blocks-hovered"
  }, React.createElement("div", {
    className: "ohmylms-quiz-block-icon"
  }, React.createElement(t.thumbIcon, null)), React.createElement("div", {
    className: "ohmylms-quiz-block-info"
  }, React.createElement("div", {
    className: "ohmylms-quiz-block-hover-icon"
  }, React.createElement(t.icon, {
    isHover: !0
  })), React.createElement("div", {
    className: "ohmylms-quiz-block-title-des"
  }, React.createElement("p", {
    className: "ohmylms-quiz-block-title"
  }, t.name), React.createElement("p", {
    className: "ohmylms-quiz-block-description"
  }, t.subTitle)))));
};
const Bu = (0, g.memo)(zu);
var Lu = function (e) {
  var t = e.handleHover,
    n = e.setHovered,
    r = e.handleDragStart,
    a = e.handleClick,
    o = e.hoveredItem,
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getQuizTypes();
    }, []);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-quiz-blocks-wrapper ohmylms-quiz-blocks-wrapper-classic"
  }, i && i.map(function (e, o) {
    var i = e.icon;
    return React.createElement(Wu, {
      key: o,
      handleHover: t,
      setHovered: n,
      handleDragStart: r,
      handleClick: a,
      quiz: e,
      icon: React.createElement(i, null)
    });
  }), o && React.createElement(Bu, {
    hoveredItem: o
  })));
};
const Vu = (0, g.memo)(Lu);
var Hu = function (e) {
  var t = e.handleHover,
    n = e.setHovered,
    r = e.handleDragStart,
    a = e.handleClick,
    o = e.hoveredItem,
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getInteractiveQuizTypes();
    }, []);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-quiz-blocks-wrapper ohmylms-quiz-blocks-wrapper-interactive"
  }, i && i.map(function (e, o) {
    var i = e.icon;
    return React.createElement(Wu, {
      key: o,
      handleHover: t,
      setHovered: n,
      handleDragStart: r,
      handleClick: a,
      quiz: e,
      icon: React.createElement(i, null)
    });
  }), o && React.createElement(Bu, {
    hoveredItem: o
  })));
};
const Gu = (0, g.memo)(Hu);
function Uu() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return qu(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (qu(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, qu(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, qu(d, "constructor", u), qu(u, "constructor", c), c.displayName = "GeneratorFunction", qu(u, a, "GeneratorFunction"), qu(d), qu(d, a, "Generator"), qu(d, r, function () {
    return this;
  }), qu(d, "toString", function () {
    return "[object Generator]";
  }), (Uu = function () {
    return {
      w: o,
      m
    };
  })();
}
function qu(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  qu = function (e, t, n, r) {
    function o(t, n) {
      qu(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, qu(e, t, n, r);
}
function Yu(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function Qu(e, t) {
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
      if ("string" == typeof e) return Zu(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Zu(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Zu(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var $u = function (e) {
  var t = e.setHovered,
    n = true,
    r = (0, y.useDispatch)(T.default),
    a = (0, y.useSelect)(function (e) {
      return e(T.default).selectQuestion();
    }, []),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getQuiz();
    }, []),
    i = Qu((0, g.useState)(null), 2),
    l = i[0],
    c = i[1],
    u = Qu((0, g.useState)("classic"), 2),
    s = u[0],
    d = u[1],
    m = (0, g.useMemo)(function () {
      return {
        borderColor: "#EBEBEF",
        background: "#F0F4FF",
        padding: "18px 10px 12px",
        boxShadow: "0px 2px 5px 0px rgba(215, 220, 231, 0.44)",
        textAlign: "center",
        minHeight: "106px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        borderRadius: "10px"
      };
    }, []);
  wc(".ohmylms-quiz-block", m);
  var p = function (e) {
      c(e);
    },
    f = function (e, n) {
      t(!1), e.dataTransfer.setData("text/plain", JSON.stringify(n));
    },
    v = function () {
      var e,
        t = (e = Uu().m(function e(t) {
          var i, l, c;
          return Uu().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                {
                  e.n = 1;
                  break;
                }
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
                  type: null == t ? void 0 : t.type,
                  score: {
                    enabled: !0,
                    value: 1
                  }
                }, "true-false" === (null == t ? void 0 : t.type) ? i = [{
                  id: Date.now(),
                  answer: "True",
                  is_correct: !1,
                  order_number: 0,
                  temp: !0
                }, {
                  id: 1 + Date.now(),
                  answer: "False",
                  is_correct: !1,
                  order_number: 1,
                  temp: !0
                }] : "short-text" === (null == t ? void 0 : t.type) || "long-text" === (null == t ? void 0 : t.type) ? i = [{
                  id: Date.now(),
                  answer: "",
                  is_correct: !1,
                  order_number: 1,
                  temp: !0
                }] : "statement" === (null == t ? void 0 : t.type) || "fill-in-the-blank" === (null == t ? void 0 : t.type) ? i = [{
                  id: Date.now(),
                  answer: "",
                  is_correct: !0,
                  order_number: 1,
                  temp: !0
                }] : "reorder" !== (null == t ? void 0 : t.type) && "matching" !== t.type || (i = [{
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
                  id: null == a ? void 0 : a.id,
                  name: "",
                  description: "",
                  order_number: null == a ? void 0 : a.order_number,
                  settings: l,
                  questions: i,
                  temp: !0,
                  quiz_id: null == o ? void 0 : o.id,
                  thumbnail_id: "",
                  image_url: "",
                  matching_data: {
                    label: "",
                    image_id: "",
                    image_url: ""
                  }
                }, r.updateQuestionData(c.id, c);
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
              Yu(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Yu(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function (e) {
        return t.apply(this, arguments);
      };
    }(),
    h = [{
      label: React.createElement(React.Fragment, null, (0, b.__)("Classic", "ohmylms")),
      key: "classic",
      children: React.createElement(Vu, {
        handleHover: p,
        setHovered: t,
        handleDragStart: f,
        handleClick: v,
        hoveredItem: l
      })
    }, {
      label: React.createElement(React.Fragment, null, (0, b.__)("Interactive", "ohmylms")),
      key: "interactive",
      children: React.createElement(Gu, {
        handleHover: p,
        setHovered: t,
        handleDragStart: f,
        handleClick: v,
        hoveredItem: l
      })
    }];
  return React.createElement(React.Fragment, null, React.createElement(I.TabsWP, {
    items: h,
    centered: !0,
    onChange: function (e) {
      return function (e) {
        d(e);
      }(e);
    },
    activekey: s
  }));
};
const Ku = (0, g.memo)($u);
function Ju(e) {
  return function (e) {
    if (Array.isArray(e)) return Xu(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return Xu(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xu(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Xu(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function es(e) {
  return es = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, es(e);
}
var ts = ["options", "defaultValue", "onChange", "className", "radioType"];
function ns() {
  return ns = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ns.apply(null, arguments);
}
function rs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function as(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? rs(Object(n), !0).forEach(function (t) {
      os(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rs(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function os(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != es(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != es(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == es(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
