// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var A$ = function (e) {
  var t,
    n,
    r,
    a = e.data,
    o = e.index,
    i = (e.type, (0, g.useMemo)(function () {
      return j$(null == a ? void 0 : a.given_answer);
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
    var n, r, a, o;
    return React.createElement(I.CardWP, {
      key: e.id,
      isBorderless: !0,
      padding: "12px 16px",
      margin: 0 == t ? "0" : "16px 0 0"
    }, React.createElement(I.FlexWP, {
      gap: 6
    }, React.createElement(I.CardWP, {
      width: "100%",
      isBorderless: !0,
      variant: "secondary",
      padding: "8px"
    }, React.createElement(I.FlexWP, null, React.createElement(I.TextWP, null, null == e ? void 0 : e.answer), (null == e ? void 0 : e.image_url) && React.createElement(React.Fragment, null, React.createElement("img", {
      src: null == e ? void 0 : e.image_url,
      alt: null == e ? void 0 : e.answer,
      style: {
        width: "53px",
        height: "30px",
        objectFit: "fill"
      }
    })))), React.createElement(I.CardWP, {
      width: "100%",
      isBorderless: !0,
      variant: "secondary",
      padding: "8px"
    }, React.createElement(I.FlexWP, null, React.createElement(I.TextWP, null, null == e || null === (n = e.matching_data) || void 0 === n ? void 0 : n.label), (null == e || null === (r = e.matching_data) || void 0 === r ? void 0 : r.image_url) && React.createElement(React.Fragment, null, React.createElement("img", {
      src: null == e || null === (a = e.matching_data) || void 0 === a ? void 0 : a.image_url,
      alt: null == e || null === (o = e.matching_data) || void 0 === o ? void 0 : o.label,
      style: {
        width: "53px",
        height: "30px",
        objectFit: "fill"
      }
    }))))));
  }))) : React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    padding: "16px"
  }, null == a || null === (t = a.questions) || void 0 === t || null === (t = t.slice()) || void 0 === t || null === (t = t.sort(function (e, t) {
    return Number(e.order_number) - Number(t.order_number);
  })) || void 0 === t ? void 0 : t.map(function (e, t) {
    var n,
      r,
      o,
      i,
      l,
      c,
      u = null == a || null === (n = a.given_answer) || void 0 === n ? void 0 : n[null == e ? void 0 : e.id],
      s = (null == e ? void 0 : e.id) === u ? e : null == a || null === (r = a.questions) || void 0 === r ? void 0 : r.find(function (e) {
        return e.id == u;
      });
    return React.createElement(I.CardWP, {
      key: e.id,
      isBorderless: !0,
      padding: "12px 16px",
      margin: 0 == t ? "0" : "16px 0 0",
      style: {
        background: (null == e ? void 0 : e.id) === u ? "#E6F7E9" : "#FFEDEE"
      }
    }, React.createElement(I.FlexWP, {
      gap: 6
    }, React.createElement(I.CardWP, {
      width: "100%",
      isBorderless: !0,
      padding: "8px"
    }, React.createElement(I.FlexWP, null, React.createElement(I.TextWP, {
      color: (null == e ? void 0 : e.id) === u ? "primary" : "#FF4955"
    }, null == e ? void 0 : e.answer), (null == e ? void 0 : e.image_url) && React.createElement(React.Fragment, null, React.createElement("img", {
      src: null == e ? void 0 : e.image_url,
      alt: null == e ? void 0 : e.answer,
      style: {
        width: "30px",
        height: "30px",
        objectFit: "cover"
      }
    })))), React.createElement(I.CardWP, {
      width: "100%",
      isBorderless: !0,
      padding: "8px"
    }, React.createElement(I.FlexWP, null, React.createElement(I.TextWP, {
      color: (null == e ? void 0 : e.id) === u ? "primary" : "#FF4955"
    }, null == s || null === (o = s.matching_data) || void 0 === o ? void 0 : o.label), (null == s || null === (i = s.matching_data) || void 0 === i ? void 0 : i.image_url) && React.createElement(React.Fragment, null, React.createElement("img", {
      src: null == s || null === (l = s.matching_data) || void 0 === l ? void 0 : l.image_url,
      alt: null == s || null === (c = s.matching_data) || void 0 === c ? void 0 : c.label,
      style: {
        width: "30px",
        height: "30px",
        objectFit: "cover"
      }
    }))))));
  })), React.createElement(I.SpacerWP, {
    marginTop: 4
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
    var n, r, a, o;
    return React.createElement(I.CardWP, {
      key: e.id,
      isBorderless: !0,
      padding: "12px 16px",
      margin: 0 == t ? "0" : "16px 0 0"
    }, React.createElement(I.FlexWP, {
      gap: 6
    }, React.createElement(I.CardWP, {
      width: "100%",
      isBorderless: !0,
      variant: "secondary",
      padding: "8px"
    }, React.createElement(I.FlexWP, null, React.createElement(I.TextWP, null, null == e ? void 0 : e.answer), (null == e ? void 0 : e.image_url) && React.createElement(React.Fragment, null, React.createElement("img", {
      src: null == e ? void 0 : e.image_url,
      alt: null == e ? void 0 : e.answer,
      style: {
        width: "30px",
        height: "30px",
        objectFit: "cover"
      }
    })))), React.createElement(I.CardWP, {
      width: "100%",
      isBorderless: !0,
      variant: "secondary",
      padding: "8px"
    }, React.createElement(I.FlexWP, null, React.createElement(I.TextWP, null, null == e || null === (n = e.matching_data) || void 0 === n ? void 0 : n.label), (null == e || null === (r = e.matching_data) || void 0 === r ? void 0 : r.image_url) && React.createElement(React.Fragment, null, React.createElement("img", {
      src: null == e || null === (a = e.matching_data) || void 0 === a ? void 0 : a.image_url,
      alt: null == e || null === (o = e.matching_data) || void 0 === o ? void 0 : o.label,
      style: {
        width: "30px",
        height: "30px",
        objectFit: "cover"
      }
    }))))));
  }))));
};

const M$ = (0, g.memo)(A$);

var T$ = function (e) {
  var t = e.data,
    n = e.fetchData,
    r = e.setData;
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    direction: "column",
    gap: 5,
    className: "omlms-report-content"
  }, t.map(function (e, t) {
    var a,
      o = null == e || null === (a = e.settings) || void 0 === a ? void 0 : a.type;
    return "single-choice" === o || "true-false" === o ? React.createElement(I.CardWP, {
      key: t,
      isBorderless: !0
    }, React.createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 5
    }, React.createElement(v$, {
      index: t,
      data: e
    }))) : "multiple-choice" === o ? React.createElement(I.CardWP, {
      key: t,
      isBorderless: !0
    }, React.createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 5
    }, React.createElement(h$, {
      index: t,
      data: e
    }))) : "short-text" === o || "long-text" === o || "statement" === o || "fill-in-the-blank" === o ? React.createElement(I.CardWP, {
      key: t,
      isBorderless: !0
    }, React.createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 5
    }, React.createElement(E$, {
      setData: r,
      index: t,
      data: e,
      type: o,
      fetchData: n
    }))) : "reorder" === o ? React.createElement(I.CardWP, {
      key: t,
      isBorderless: !0
    }, React.createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 5
    }, React.createElement(C$, {
      index: t,
      data: e,
      type: o
    }))) : "matching" === o ? React.createElement(I.CardWP, {
      key: t,
      isBorderless: !0
    }, React.createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 5
    }, React.createElement(M$, {
      index: t,
      data: e,
      type: o
    }))) : null;
  })));
};

const I$ = (0, g.memo)(T$);

var F$ = function (e) {
  var t = e.data;
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    gap: 2,
    justify: "flex-start"
  }, React.createElement(I.TextWP, {
    size: "15",
    weight: "700",
    style: {
      width: "72px"
    }
  }, (0, b.__)("Name: ", "ohmylms")), React.createElement(I.TextWP, {
    size: "15",
    style: {
      width: "calc(100% - 80px)"
    }
  }, null == t ? void 0 : t.student_name)), React.createElement(I.SpacerWP, null), React.createElement(I.FlexWP, {
    gap: 2,
    justify: "flex-start",
    align: "flex-start"
  }, React.createElement(I.TextWP, {
    size: "15",
    weight: "700",
    style: {
      width: "72px"
    }
  }, (0, b.__)("Course: ", "ohmylms")), React.createElement(I.TextWP, {
    size: "15",
    style: {
      width: "calc(100% - 80px)",
      wordWrap: "break-word"
    }
  }, null == t ? void 0 : t.course_name)), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 4,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    gap: 3,
    justify: "space-between"
  }, React.createElement(I.HeadingWP, {
    level: 4,
    weight: "400"
  }, React.createElement("strong", null, (0, b.__)("Score: ", "ohmylms")), React.createElement("span", null, null == t ? void 0 : t.score)), React.createElement(I.DividerWP, {
    orientation: "vertical",
    style: {
      color: "#FFFFFF",
      height: "20px"
    }
  }), React.createElement(I.HeadingWP, {
    level: 4,
    weight: "400"
  }, React.createElement("strong", null, (0, b.__)("Correct: ", "ohmylms")), React.createElement("span", null, null == t ? void 0 : t.correct))))), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement("div", {
    className: "omlms-report-final-result"
  }, React.createElement(I.TextWP, {
    as: "p",
    size: 15
  }, (0, b.__)("Did student pass or fail? (optional)", "ohmylms")), React.createElement(I.SpacerWP, null), React.createElement(I.FlexWP, {
    gap: 4
  }, "in-review" === (null == t ? void 0 : t.status) ? React.createElement(I.BadgeWP, {
    isBorderLess: !0,
    variant: "warning"
  }, (0, b.__)("Pending", "ohmylms")) : null != t && t.isPass ? React.createElement(I.BadgeWP, {
    isBorderLess: !0,
    variant: "success"
  }, (0, b.__)("Pass", "ohmylms")) : React.createElement(I.BadgeWP, {
    isBorderLess: !0,
    variant: "danger"
  }, (0, b.__)("Fail", "ohmylms")))))));
};

const N$ = (0, g.memo)(F$);

function D$() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return W$(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (W$(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, W$(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, W$(d, "constructor", u), W$(u, "constructor", c), c.displayName = "GeneratorFunction", W$(u, a, "GeneratorFunction"), W$(d), W$(d, a, "Generator"), W$(d, r, function () {
    return this;
  }), W$(d, "toString", function () {
    return "[object Generator]";
  }), (D$ = function () {
    return {
      w: o,
      m
    };
  })();
}

function W$(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  W$ = function (e, t, n, r) {
    function o(t, n) {
      W$(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, W$(e, t, n, r);
}

function z$(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function B$(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        z$(o, r, a, i, l, "next", e);
      }
      function l(e) {
        z$(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function L$(e, t) {
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
      if ("string" == typeof e) return V$(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? V$(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function V$(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
