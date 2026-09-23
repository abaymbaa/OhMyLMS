// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var n$ = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    d: "M8 0a8 8 0 108 8 8.01 8.01 0 00-8-8zm0 14.546A6.545 6.545 0 1114.546 8 6.554 6.554 0 018 14.546z"
  }), React.createElement("path", {
    fill: "#A1A1AA",
    d: "M8.733 7.722V3.659a.727.727 0 00-1.455 0v4.364c0 .193.077.378.213.514l2.182 2.182a.727.727 0 001.029-1.029l-1.97-1.968z"
  })));
};

const r$ = (0, g.memo)(n$);

var a$ = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "12",
    height: "9",
    viewBox: "0 0 12 9",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M3.875 8.663c-.341 0-.668-.136-.908-.377L.222 5.542a.757.757 0 011.07-1.07 3.653 3.653 0 005.166 0l4.25-4.25a.757.757 0 011.07 1.07L4.783 8.285a1.286 1.286 0 01-.908.377z"
  })));
};

const o$ = (0, g.memo)(a$);

var i$ = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.6",
    d: "M9 1L1 9m0-8l8 8"
  })));
};

const l$ = (0, g.memo)(i$);

function c$(e) {
  return c$ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, c$(e);
}

function u$(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function s$(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? u$(Object(n), !0).forEach(function (t) {
      d$(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u$(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function d$(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != c$(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != c$(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == c$(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

var m$ = function (e) {
  var t,
    n,
    r,
    a,
    o,
    i = e.data,
    l = e.index,
    c = e.type,
    u = void 0 === c ? "" : c,
    s = (e.fetchData, e.setData),
    d = e.isCorrect,
    m = (0, f.g)();
  m.id, m.quizId;
  var p = void 0 !== d ? d ? "correct" : "incorrect" : function (e) {
    var t = e.given_answer,
      n = e.questions;
    if (!t || !Array.isArray(t)) return "in-review";
    var r = n.filter(function (e) {
        return "1" === e.is_correct;
      }).map(function (e) {
        return e.id;
      }),
      a = t.every(function (e) {
        return r.includes(e);
      });
    return "single-choice" === e.settings.type ? a && 1 === t.length ? "correct" : "incorrect" : a && t.length === r.length ? "correct" : "incorrect";
  }(i);
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    gap: 3,
    justify: "space-between"
  }, React.createElement(I.FlexItemWP, null, React.createElement(I.BadgeWP, {
    variant: "secondary",
    isBorderLess: !0
  }, (0, b.__)("Question", "ohmylms"), " ", l + 1), React.createElement(I.BadgeWP, {
    variant: "warning",
    style: {
      textTransform: "capitalize",
      marginLeft: "8px"
    },
    isBorderLess: !0
  }, null !== (t = null == i || null === (n = i.settings) || void 0 === n ? void 0 : n.type.split("-").join(" ")) && void 0 !== t ? t : u)), React.createElement(I.FlexItemWP, null, "text-type" === u ? React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    gap: 2,
    justify: "flex-start",
    className: "omlms-question-status-wrapper"
  }, React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    gap: 2,
    justify: "flex-start",
    className: "omlms-set-marks"
  }, React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    justify: "start",
    gap: 2
  }, React.createElement(I.TextWP, {
    as: "span"
  }, (0, b.__)("Set Marks", "ohmylms")), React.createElement(V.A, {
    title: (0, b.__)("This Question Marks: ".concat(null == i || null === (r = i.settings) || void 0 === r || null === (r = r.score) || void 0 === r ? void 0 : r.value), "ohmylms"),
    className: "omlms-tooltip"
  }, React.createElement(Mt.A, null)))), React.createElement(I.FlexItemWP, null, React.createElement(wn.A, {
    type: "number",
    min: 0,
    max: Number(null == i || null === (a = i.settings) || void 0 === a || null === (a = a.score) || void 0 === a ? void 0 : a.value),
    value: Number(null == i ? void 0 : i.achive_mark) || 0,
    onChange: function (e) {
      return function (e) {
        s(function (t) {
          var n,
            r = s$({}, t),
            a = null == r || null === (n = r.report) || void 0 === n || null === (n = n.questions) || void 0 === n ? void 0 : n.map(function (t) {
              return t.id === (null == i ? void 0 : i.id) ? s$(s$({}, t), {}, {
                achive_mark: e
              }) : t;
            });
          return s$(s$({}, r), {}, {
            report: s$(s$({}, r.report), {}, {
              questions: a
            })
          });
        });
      }(e);
    },
    controls: !1
  })))), React.createElement(I.FlexItemWP, null, React.createElement(I.BadgeWP, {
    isBorderLess: !0,
    variant: "in-review" === (null == i ? void 0 : i.status) ? "warning" : "success"
  }, "in-review" === (null == i ? void 0 : i.status) ? (0, b.__)("In Review", "ohmylms") : (0, b.__)("Graded", "ohmylms"))))) : React.createElement(React.Fragment, null, React.createElement(I.BadgeWP, {
    variant: "correct" === p ? "success" : "danger",
    isBorderLess: !0,
    style: {
      textTransform: "capitalize"
    }
  }, "correct" === p ? React.createElement(o$, null) : React.createElement(l$, null), p)))), React.createElement(I.SpacerWP, {
    marginY: 4
  }, React.createElement(I.HeadingWP, {
    level: 3,
    className: "omlms-question-name"
  }, Ge(null == i ? void 0 : i.name), (null == i || null === (o = i.settings) || void 0 === o ? void 0 : o.required) && React.createElement("span", {
    className: "omlms-required"
  }, "*")), React.createElement(I.SpacerWP, {
    marginBottom: 3
  }), (null == i ? void 0 : i.image) && React.createElement("img", {
    src: null == i ? void 0 : i.image,
    alt: "",
    style: {
      maxWidth: "100%",
      marginBottom: "20px",
      display: "block"
    }
  }), (null == i ? void 0 : i.video) && React.createElement("video", {
    controls: !0,
    style: {
      maxWidth: "100%",
      marginBottom: "20px",
      display: "block"
    }
  }, React.createElement("source", {
    src: null == i ? void 0 : i.video,
    type: "video/mp4"
  }))));
};

const p$ = (0, g.memo)(m$);

var f$ = function (e) {
  var t,
    n,
    r = e.data,
    a = e.index,
    o = function (e) {
      var t = e.given_answer,
        n = e.questions;
      if (!t || !Array.isArray(t)) return "in-review";
      var r = n.filter(function (e) {
          return "1" === e.is_correct;
        }).map(function (e) {
          return e.id;
        }),
        a = t.every(function (e) {
          return r.includes(e);
        });
      return "single-choice" === e.settings.type ? a && 1 === t.length ? "correct" : "incorrect" : a && t.length === r.length ? "correct" : "incorrect";
    }(r),
    i = null == r || null === (t = r.questions) || void 0 === t ? void 0 : t.map(function (e) {
      return {
        label: e.answer,
        value: String(e.id)
      };
    });
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "omlms-question-types omlms-single-choice-question omlms-".concat(o)
  }, React.createElement(p$, {
    data: r,
    index: a
  }), React.createElement("div", {
    className: "omlms-question-options-wrapper"
  }, React.createElement(I.TextWP, {
    as: "p",
    size: 14,
    variant: "muted"
  }, (0, b.__)("Select single", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 2
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    style: {
      padding: "16px"
    }
  }, React.createElement(I.FlexWP, {
    direction: "column",
    gap: 3
  }, React.createElement(I.RadioWP, {
    key: a,
    selected: null != r && r.given_answer ? null == r ? void 0 : r.given_answer[0] : null,
    disabled: !0,
    options: i
  }))), React.createElement(I.SpacerWP, null), React.createElement(I.CardWP, {
    style: {
      padding: "16px"
    }
  }, React.createElement(I.HeadingWP, {
    level: 4,
    size: "14",
    weight: "400"
  }, (0, b.__)("Answer of this question:"), React.createElement("br", null), React.createElement("strong", null, (null == r || null === (n = r.questions) || void 0 === n || null === (n = n.find(function (e) {
    return "1" === (null == e ? void 0 : e.is_correct);
  })) || void 0 === n ? void 0 : n.answer) || (0, b.__)("No correct answer")))))));
};

const v$ = (0, g.memo)(f$);

var g$ = function (e) {
  var t,
    n,
    r = e.data,
    a = e.index,
    o = function (e) {
      var t,
        n = e.given_answer,
        r = e.questions;
      if (!n || !Array.isArray(n)) return "in-review";
      var a = r.filter(function (e) {
          return 1 == (null == e ? void 0 : e.is_correct);
        }).map(function (e) {
          return null == e ? void 0 : e.id;
        }),
        o = null == n ? void 0 : n.every(function (e) {
          return null == a ? void 0 : a.includes(e);
        });
      return "single-choice" === (null == e || null === (t = e.settings) || void 0 === t ? void 0 : t.type) ? o && 1 == (null == n ? void 0 : n.length) && null != a && a.includes(n[0]) ? "correct" : "incorrect" : "multiple-choice" === e.settings.type ? o && (null == n ? void 0 : n.length) === (null == a ? void 0 : a.length) ? "correct" : "incorrect" : "in-review";
    }(r);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "omlms-question-types omlms-multiple-choice-question omlms-".concat(o)
  }, React.createElement(p$, {
    data: r,
    index: a
  }), React.createElement("div", null, React.createElement(I.TextWP, {
    as: "p",
    size: 14,
    variant: "muted"
  }, (0, b.__)("Select multiple", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 2
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    style: {
      padding: "16px"
    }
  }, React.createElement(I.FlexWP, {
    direction: "column",
    gap: 3
  }, null == r || null === (t = r.questions) || void 0 === t ? void 0 : t.map(function (e, t) {
    var n, a, o, i;
    return React.createElement(I.CheckboxWP, {
      key: t,
      value: null == e ? void 0 : e.id,
      disabled: !0,
      checked: (null == r || null === (n = r.given_answer) || void 0 === n ? void 0 : n.includes(Number(null == e ? void 0 : e.id))) || (null == r || null === (a = r.given_answer) || void 0 === a ? void 0 : a.includes(null == e ? void 0 : e.id)),
      className: "\n                                                ".concat(null != r && null !== (o = r.given_answer) && void 0 !== o && o.includes(Number(null == e ? void 0 : e.id)) || null != r && null !== (i = r.given_answer) && void 0 !== i && i.includes(null == e ? void 0 : e.id) ? "omlms-selected" : "", "\n                                                    ").concat(1 == (null == e ? void 0 : e.is_correct) ? "omlms-correct" : "", "\n                                            "),
      label: null == e ? void 0 : e.answer
    });
  }))), React.createElement(I.SpacerWP, null), React.createElement(I.CardWP, {
    style: {
      padding: "16px"
    }
  }, React.createElement(I.HeadingWP, {
    level: 4,
    size: "14",
    weight: "400"
  }, (0, b.__)("Answer of this question:"), React.createElement("br", null), React.createElement("strong", null, (null == r || null === (n = r.questions) || void 0 === n || null === (n = n.filter(function (e) {
    return "1" === (null == e ? void 0 : e.is_correct);
  })) || void 0 === n || null === (n = n.map(function (e) {
    return e.answer;
  })) || void 0 === n ? void 0 : n.join(", ")) || (0, b.__)("No correct answer")))))));
};

const h$ = (0, g.memo)(g$);

var y$ = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_3765_5660)"
  }, React.createElement("path", {
    fill: "#000D25",
    d: "M6 9.5a.75.75 0 01-.75-.75c0-.968.676-1.854 1.954-2.558.953-.525 1.446-1.566 1.255-2.65a2.503 2.503 0 00-4-1.514 2.501 2.501 0 00-.961 1.78.75.75 0 01-1.496-.114A4.002 4.002 0 013.54.844a3.994 3.994 0 013.18-.78C8.33.347 9.653 1.67 9.936 3.282a4.023 4.023 0 01-2.009 4.224c-.738.406-1.178.872-1.178 1.245A.75.75 0 016 9.5zm-.75 1.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_3765_5660"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h12v12H0z"
  })))));
};

const b$ = (0, g.memo)(y$);

function _$(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var w$ = function (e) {
  var t,
    n,
    r = e.index,
    a = e.data,
    o = (e.type, e.fetchData),
    i = e.setData,
    l = function (e) {
      var t,
        n,
        r = e.given_answer,
        a = e.questions;
      if (!r || !Array.isArray(r)) return "in-review";
      var o = a.filter(function (e) {
          return 1 == (null == e ? void 0 : e.is_correct);
        }).map(function (e) {
          return null == e ? void 0 : e.id;
        }),
        i = r.every(function (e) {
          return null == o ? void 0 : o.includes(e);
        });
      return "single-choice" === (null == e || null === (t = e.settings) || void 0 === t ? void 0 : t.type) ? i && 1 === (null == r ? void 0 : r.length) && null != o && o.includes(r[0]) ? "correct" : "incorrect" : "multiple-choice" === (null == e || null === (n = e.settings) || void 0 === n ? void 0 : n.type) ? i && (null == r ? void 0 : r.length) === (null == o ? void 0 : o.length) ? "correct" : "incorrect" : "in-review";
    }(a),
    c = function (e, t) {
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
          if ("string" == typeof e) return _$(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _$(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(0), 2);
  return c[0], c[1], React.createElement(React.Fragment, null, React.createElement("div", {
    className: "omlms-question-types omlms-text-type-question omlms-".concat(l, " ").concat(null != a && a.explanation ? "omlms-has-explanation" : "")
  }, React.createElement(p$, {
    setData: i,
    data: a,
    index: r,
    type: "text-type",
    fetchData: o
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    style: {
      padding: "16px"
    }
  }, React.createElement(I.TextWP, {
    as: "p",
    size: 14,
    variant: "muted"
  }, (0, b.__)("Student's response:", "ohmylms")), React.createElement("div", {
    className: "omlms-question-options omlms-text-type"
  }, null != a && a.given_answer && (null == a ? void 0 : a.given_answer[0]) || (0, b.__)("No answer given", "ohmylms")), (null == a ? void 0 : a.explanation) && React.createElement(V.A, {
    title: (null == a ? void 0 : a.explanation) || (0, b.__)("No explanation provided", "ohmylms")
  }, React.createElement("span", {
    className: "omlms-explanation-icon"
  }, React.createElement(b$, null)))), "fill-in-the-blank" === (null == a || null === (t = a.settings) || void 0 === t ? void 0 : t.type) && React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, null), React.createElement(I.CardWP, {
    style: {
      padding: "16px"
    }
  }, React.createElement(I.HeadingWP, {
    level: 4,
    size: "14",
    weight: "400"
  }, (0, b.__)("Answer of this question:"), React.createElement("br", null), React.createElement("strong", null, (null == a || null === (n = a.questions) || void 0 === n || null === (n = n.filter(function (e) {
    return "1" === (null == e ? void 0 : e.is_correct);
  })) || void 0 === n || null === (n = n.map(function (e) {
    return e.answer;
  })) || void 0 === n ? void 0 : n.join(", ")) || (0, b.__)("No correct answer")))))));
};

const E$ = (0, g.memo)(w$);

function S$(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var R$ = function (e, t) {
    if (!Array.isArray(e) || !Array.isArray(t)) return !1;
    var n = function (e) {
      return function (e) {
        if (Array.isArray(e)) return S$(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return S$(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? S$(e, t) : void 0;
        }
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }(t).sort(function (e, t) {
      return Number(e.order_number) - Number(t.order_number);
    }).map(function (e) {
      return e.id;
    });
    if (e.length !== n.length) return !1;
    for (var r = 0; r < e.length; r++) if (e[r] !== n[r]) return !1;
    return !0;
  },
  x$ = function (e) {
    var t,
      n,
      r,
      a = e.data,
      o = e.index,
      i = (e.type, (0, g.useMemo)(function () {
        return R$(null == a ? void 0 : a.given_answer, null == a ? void 0 : a.questions);
      }, [a]));
    return React.createElement(React.Fragment, null, React.createElement(p$, {
      data: a,
      index: o,
      isCorrect: i
    }), React.createElement(I.SpacerWP, {
      marginBottom: 2
    }), React.createElement(I.TextWP, {
      as: "p",
      size: 14,
      variant: "muted"
    }, i ? (0, b.__)("Answer", "ohmylms") : (0, b.__)("Student's Answer", "ohmylms")), React.createElement(I.SpacerWP, {
      marginBottom: 2
    }), i ? React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary",
      padding: "16px",
      style: {
        background: "#E6F7E9"
      }
    }, null == a || null === (r = a.questions) || void 0 === r || null === (r = r.slice()) || void 0 === r || null === (r = r.sort(function (e, t) {
      return Number(e.order_number) - Number(t.order_number);
    })) || void 0 === r ? void 0 : r.map(function (e, t) {
      return React.createElement(I.CardWP, {
        key: e.id,
        isBorderless: !0,
        padding: "12px 16px",
        margin: 0 == t ? "0" : "16px 0 0"
      }, React.createElement(I.FlexWP, null, React.createElement(I.TextWP, null, null == e ? void 0 : e.answer), (null == e ? void 0 : e.image_url) && React.createElement(React.Fragment, null, React.createElement("img", {
        src: null == e ? void 0 : e.image_url,
        alt: null == e ? void 0 : e.answer,
        style: {
          width: "30px",
          height: "30px",
          objectFit: "cover"
        }
      }))));
    }))) : React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary",
      padding: "16px",
      style: {
        background: "#FFEDEE"
      }
    }, null == a || null === (t = a.given_answer) || void 0 === t ? void 0 : t.map(function (e, t) {
      var n,
        r = null == a || null === (n = a.questions) || void 0 === n ? void 0 : n.find(function (t) {
          return t.id == e;
        });
      return React.createElement(I.CardWP, {
        key: e,
        isBorderless: !0,
        padding: "24px",
        margin: 0 == t ? "0" : "20px 0 0"
      }, React.createElement(I.FlexWP, null, React.createElement(I.TextWP, null, null == r ? void 0 : r.answer), (null == r ? void 0 : r.image_url) && React.createElement(React.Fragment, null, React.createElement("img", {
        src: null == r ? void 0 : r.image_url,
        alt: null == r ? void 0 : r.answer,
        style: {
          width: "53px",
          height: "30px",
          objectFit: "fill"
        }
      }))));
    })), React.createElement(I.SpacerWP, {
      margin: 2
    }, React.createElement(I.TextWP, {
      as: "p",
      size: 14,
      variant: "muted"
    }, (0, b.__)("Correct Answer", "ohmylms"))), React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary",
      padding: "16px",
      style: {
        background: "#E6F7E9"
      }
    }, null == a || null === (n = a.questions) || void 0 === n || null === (n = n.slice()) || void 0 === n || null === (n = n.sort(function (e, t) {
      return Number(e.order_number) - Number(t.order_number);
    })) || void 0 === n ? void 0 : n.map(function (e, t) {
      return React.createElement(I.CardWP, {
        key: e.id,
        isBorderless: !0,
        padding: "12px 16px",
        margin: 0 == t ? "0" : "16px 0 0"
      }, React.createElement(I.FlexWP, null, React.createElement(I.TextWP, null, null == e ? void 0 : e.answer), (null == e ? void 0 : e.image_url) && React.createElement(React.Fragment, null, React.createElement("img", {
        src: null == e ? void 0 : e.image_url,
        alt: null == e ? void 0 : e.answer,
        style: {
          width: "30px",
          height: "30px",
          objectFit: "cover"
        }
      }))));
    }))));
  };

const C$ = (0, g.memo)(x$);

function P$(e, t) {
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
      if ("string" == typeof e) return O$(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? O$(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function O$(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function k$(e) {
  return k$ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, k$(e);
}

function j$(e) {
  if ("object" !== k$(e) || null === e) return !1;
  for (var t = 0, n = Object.entries(e); t < n.length; t++) {
    var r = P$(n[t], 2);
    if (r[0] !== r[1]) return !1;
  }
  return !0;
}
