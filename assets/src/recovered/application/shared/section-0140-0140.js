// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var J$ = function (e) {
  var t,
    n,
    r,
    a = e.student,
    o = e.additionData,
    i = e.setNote,
    l = e.setScore,
    c = e.note,
    u = e.score;
  return React.createElement(I.CardWP, {
    isBorderless: !0,
    style: {
      width: "100%"
    }
  }, React.createElement(I.SpacerWP, {
    padding: 4
  }, React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "center",
    gap: 2
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
  }, null == a ? void 0 : a.display_name)), React.createElement(I.SpacerWP, null), React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "center",
    gap: 2
  }, React.createElement(I.TextWP, {
    size: "15",
    weight: "700",
    style: {
      width: "72px"
    }
  }, (0, b.__)("Course: ", "ohmylms")), React.createElement(I.TextWP, {
    size: "15",
    style: {
      width: "calc(100% - 80px)"
    }
  }, Ge(null == o ? void 0 : o.course_name))), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 2,
    marginY: 4
  }, React.createElement(I.TextWP, {
    size: "15"
  }, (0, b.__)("Score: "), " "), React.createElement(I.TextWP, {
    size: "15",
    variant: "muted"
  }, (0, b.__)("Grade out of "), null == o ? void 0 : o.total_marks), React.createElement(I.SpacerWP, {
    marginBottom: 1
  }), React.createElement(I.InputWP, {
    type: "number",
    value: u,
    onChange: function (e) {
      e > Number(null == o ? void 0 : o.total_marks) || 0 > e || l(e);
    },
    min: 0,
    max: null == o ? void 0 : o.total_marks,
    onBlur: function (e) {
      "" === e.target.value && l(0);
    }
  }))), React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "flex-start",
    direction: "column",
    gap: 2
  }, React.createElement(I.TextWP, {
    as: "p",
    size: "15"
  }, (0, b.__)("Did student pass or fail? (optional)", "ohmylms")), React.createElement(I.FlexWP, {
    gap: 2,
    justify: "flex-start",
    align: "center"
  }, "submitted" == (null == a || null === (t = a.submissions[0]) || void 0 === t ? void 0 : t.status) ? React.createElement(I.BadgeWP, {
    isBorderLess: !0,
    variant: "warning"
  }, (0, b.__)("Pending Review", "ohmylms")) : React.createElement(React.Fragment, null, React.createElement(I.BadgeWP, {
    isBorderLess: !0,
    variant: "passed" === (null == a || null === (n = a.submissions[0]) || void 0 === n ? void 0 : n.status) ? "success" : "secondary"
  }, (0, b.__)("Pass", "ohmylms"), null == a ? void 0 : a.status), React.createElement(I.BadgeWP, {
    isBorderLess: !0,
    variant: "passed" === (null == a || null === (r = a.submissions[0]) || void 0 === r ? void 0 : r.status) ? "secondary" : "danger"
  }, (0, b.__)("Fail", "ohmylms"))))), React.createElement(I.SpacerWP, {
    marginTop: 4
  }, React.createElement(I.TextWP, {
    size: "15"
  }, (0, b.__)("Additional comments", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 1
  }), React.createElement(W.A, {
    rows: 4,
    value: c,
    onChange: function (e) {
      return i(e);
    },
    style: {
      minHeight: "120px"
    }
  }))));
};

const X$ = (0, g.memo)(J$);

var eK = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "18",
    height: "18",
    fill: "none",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    d: "M14.06 15.251a.749.749 0 01-.061 1.06l-1.19 1.06a2.175 2.175 0 01-1.548.63 2.26 2.26 0 01-1.602-.662l-1.158-1.03a.75.75 0 01.998-1.12l1 .895V10.5a.75.75 0 111.5 0v5.583l1.002-.894a.75.75 0 011.058.061zm-.293-9.73a.816.816 0 01-.542-.55A6 6 0 001.61 5.6a5.743 5.743 0 00.6 3.886 4.086 4.086 0 00-2.166 4.239 4.382 4.382 0 004.22 3.525H6a.75.75 0 100-1.5H4.262a2.858 2.858 0 01-2.734-2.237 2.602 2.602 0 011.375-2.7A1.495 1.495 0 003.498 8.8a4.5 4.5 0 118.295-3.384 2.325 2.325 0 001.534 1.539 4.478 4.478 0 013.159 4.657 4.033 4.033 0 01-.834 2.182.75.75 0 101.19.914 5.6 5.6 0 001.14-2.979 5.97 5.97 0 00-4.215-6.208z"
  })));
};

const tK = (0, g.memo)(eK);

var nK = function (e) {
  var t,
    n,
    r,
    a = e.submission,
    o = e.additionData;
  return React.createElement(I.CardWP, {
    isBorderless: !0,
    fullWidth: !0,
    style: {
      minHeight: "414px"
    }
  }, React.createElement(I.SpacerWP, {
    padding: 4,
    marginBottom: 0
  }, React.createElement(I.HeadingWP, {
    level: 2
  }, Ge(null == o ? void 0 : o.assignment_name)), React.createElement(I.DividerWP, {
    marginStart: 4,
    marginEnd: 4
  }), React.createElement(I.TextWP, null, (null == a ? void 0 : a.content) || (0, b.__)("No content added", "ohmylms")), React.createElement(I.DividerWP, {
    marginStart: 4,
    marginEnd: 4
  }), (null == a ? void 0 : a.files) && React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    style: {
      borderRadius: "4px"
    }
  }, React.createElement(I.SpacerWP, {
    padding: 4,
    marginBottom: 0
  }, React.createElement(I.FlexWP, null, React.createElement(I.FlexWP, {
    justify: "flex-start",
    gap: 2,
    align: "center"
  }, React.createElement(kn, null), React.createElement(I.FlexWP, {
    justify: "flex-start",
    gap: 2,
    align: "center"
  }, React.createElement(I.TextWP, {
    as: "span"
  }, (null == a || null === (t = a.files) || void 0 === t ? void 0 : t.file_name) || (0, b.__)("No file name", "ohmylms")), React.createElement(I.TextWP, {
    as: "span",
    variant: "muted"
  }, (null == a || null === (n = a.files) || void 0 === n ? void 0 : n.file_size) || "67 KB"))), React.createElement("a", {
    href: null == a || null === (r = a.files) || void 0 === r ? void 0 : r.url,
    download: !0
  }, React.createElement(tK, null)))))));
};

const rK = (0, g.memo)(nK);

var aK = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "#A1A1AA",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M13.51 4.678a2.968 2.968 0 011.156 2.365v4.99A2.966 2.966 0 0111.7 15H3.632a2.966 2.966 0 01-2.966-2.966V7.043c0-.925.432-1.798 1.167-2.359l4.034-3.076a2.966 2.966 0 013.598 0L11.7 3.31V1.356"
  }), React.createElement("path", {
    fill: "#A1A1AA",
    d: "M6.48 7.26a.742.742 0 100 1.482.742.742 0 000-1.483zm2.373 0a.742.742 0 100 1.482.742.742 0 000-1.483zM6.48 9.63a.742.742 0 100 1.483.742.742 0 000-1.483zm2.373 0a.742.742 0 100 1.483.742.742 0 000-1.483z"
  })));
};

const oK = (0, g.memo)(aK);

var iK = function (e) {
  var t,
    n,
    r,
    a,
    o,
    i = e.data,
    l = e.submissions,
    c = e.handleUpgradeGrade,
    u = (0, f.g)().id;
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, null, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.FlexWP, {
    justify: "center",
    align: "center",
    gap: 2
  }, React.createElement(I.SpacerWP, {
    padding: 2,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    justify: "center",
    align: "center",
    gap: 2
  }, React.createElement(v.Link, {
    to: "/assignments"
  }, React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "center",
    gap: 1
  }, React.createElement(oK, null), React.createElement(I.TextWP, {
    size: 15
  }, (0, b.__)("Assignments /", "ohmylms")))), React.createElement(v.Link, {
    to: "/assignment-report/".concat(u)
  }, React.createElement(I.TextWP, {
    size: 15
  }, (0, b.__)("Results /", "ohmylms"))), React.createElement(I.TextWP, {
    size: 15
  }, Ge((null == i ? void 0 : i.display_name) || (0, b.__)("Assignment Result", "ohmylms"))))))), React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    gap: 4,
    justify: "flex-start"
  }, React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    gap: 2,
    justify: "center"
  }, React.createElement(r$, null), React.createElement("time", {
    style: {
      fontSize: "15px"
    }
  }, sn()(null === (t = l[0]) || void 0 === t ? void 0 : t.submitted_date).format("MMM D, YYYY h:mm A")))), React.createElement(I.FlexItemWP, null, React.createElement(I.BadgeWP, {
    style: {
      textTransform: "capitalize"
    },
    isBorderLess: !0,
    variant: "submitted" === (null === (n = l[0]) || void 0 === n ? void 0 : n.status) ? "warning" : "passed" === (null === (r = l[0]) || void 0 === r ? void 0 : r.status) ? "success" : "danger"
  }, "submitted" === (null === (a = l[0]) || void 0 === a ? void 0 : a.status) ? "Pending" : null === (o = l[0]) || void 0 === o ? void 0 : o.status)))), React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: c
  }, (0, b.__)("Upgrade Grade", "ohmylms"))));
};

const lK = (0, g.memo)(iK);

function cK() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return uK(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (uK(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, uK(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, uK(d, "constructor", u), uK(u, "constructor", c), c.displayName = "GeneratorFunction", uK(u, a, "GeneratorFunction"), uK(d), uK(d, a, "Generator"), uK(d, r, function () {
    return this;
  }), uK(d, "toString", function () {
    return "[object Generator]";
  }), (cK = function () {
    return {
      w: o,
      m
    };
  })();
}

function uK(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  uK = function (e, t, n, r) {
    function o(t, n) {
      uK(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, uK(e, t, n, r);
}

function sK(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function dK(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        sK(o, r, a, i, l, "next", e);
      }
      function l(e) {
        sK(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function mK(e, t) {
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
      if ("string" == typeof e) return pK(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pK(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function pK(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
