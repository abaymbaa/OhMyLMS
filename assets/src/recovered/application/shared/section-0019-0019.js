// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var gm = function () {
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
    l = pm((0, g.useState)(null), 2),
    c = l[0],
    u = l[1],
    s = pm((0, g.useState)(!1), 2),
    d = s[0],
    m = s[1],
    p = function (n, r, a) {
      o(e, a ? t.map(function (e) {
        return e.id === n ? dm(dm({}, e), {}, {
          matching_data: dm(dm({}, e.matching_data), {}, {
            label: r
          })
        }) : e;
      }) : t.map(function (e) {
        return e.id === n ? dm(dm({}, e), {}, {
          answer: r
        }) : e;
      }));
    },
    f = function (n, r, a) {
      o(e, t.map(function (e) {
        return e.id !== n ? e : dm(dm({}, e), {}, a ? {
          matching_data: dm(dm({}, e.matching_data), {}, {
            image_id: r ? r.id : "",
            image_url: r ? r.url : ""
          })
        } : {
          thumbnail_id: r ? r.id : "",
          image_url: r ? r.url : ""
        });
      }));
    },
    v = pm((0, g.useState)(null), 2),
    h = (v[0], v[1]),
    _ = function (e) {
      e.preventDefault();
    },
    w = function (e) {
      e.currentTarget.classList.remove("dragging");
    },
    E = function (e) {
      m(e);
    },
    S = function () {
      m(null);
    };
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    style: {
      padding: "10px 60px 10px 30px"
    }
  }, React.createElement(I.FlexBlockWP, null, React.createElement(I.TextWP, {
    as: "p",
    width: "500",
    size: "16px"
  }, (0, b.__)("Match Item", "ohmylms"))), React.createElement(I.FlexBlockWP, null, React.createElement(I.TextWP, {
    as: "p",
    width: "500",
    size: "16px"
  }, (0, b.__)("Matching definition", "ohmylms")))), (0, xs.I)(t).map(function (a, l) {
    var c, s;
    return React.createElement(I.CardWP, {
      key: a.id,
      isBorderless: !0,
      draggable: d !== a.id,
      onDragStart: function (e) {
        return function (e, t) {
          h(t), localStorage.setItem("draggedItemIndex", t), e.currentTarget.classList.add("dragging");
        }(e, l);
      },
      onDragOver: _,
      onDrop: function (n) {
        return function (n, r) {
          n.preventDefault();
          var a = localStorage.getItem("draggedItemIndex");
          if (null !== a && a != r) {
            var i = um(t),
              l = pm(i.splice(a, 1), 1)[0];
            i.splice(r, 0, l), i.forEach(function (e, t) {
              e.order_number = t + 1;
            }), o(e, i), h(null), localStorage.removeItem("draggedItemIndex");
          }
        }(n, l);
      },
      onDragEnd: w,
      padding: "4px",
      margin: "0 0 16px"
    }, React.createElement(I.FlexWP, {
      justify: "flex-start",
      gap: 4
    }, React.createElement(gc, {
      className: "ohmylms-drag-icon"
    }), React.createElement(I.FlexBlockWP, null, React.createElement(I.CardWP, null, React.createElement(I.FlexWP, null, React.createElement(I.FlexBlockWP, null, React.createElement(qd, {
      id: null == a ? void 0 : a.id,
      value: null == a ? void 0 : a.answer,
      imgSrc: null == a ? void 0 : a.image_url,
      onChange: function (e) {
        return p(a.id, e, !1);
      },
      onImageChange: f,
      onFocus: function () {
        return E(a.id);
      },
      onBlur: function () {
        return S(a.id);
      },
      showError: r,
      isBorderless: !0,
      placeholder: (0, b.__)("Match Item", "ohmylms"),
      isMatching: !1
    })), React.createElement(I.DividerWP, {
      orientation: "vertical",
      style: {
        width: "1px",
        height: "56px",
        borderColor: "#e8e8e8"
      }
    }), React.createElement(I.FlexBlockWP, null, React.createElement(qd, {
      id: null == a ? void 0 : a.id,
      value: null == a || null === (c = a.matching_data) || void 0 === c ? void 0 : c.label,
      imgSrc: null == a || null === (s = a.matching_data) || void 0 === s ? void 0 : s.image_url,
      onChange: function (e) {
        return p(a.id, e, !0);
      },
      onImageChange: function (e, t) {
        return f(e, t, !0);
      },
      onFocus: function () {
        return E(a.id);
      },
      onBlur: function () {
        return S(a.id);
      },
      showError: r,
      isBorderless: !0,
      placeholder: (0, b.__)("Matching definition", "ohmylms"),
      isMatching: !0
    }))))), React.createElement(I.ButtonWP, {
      icon: React.createElement(We, null),
      onClick: function () {
        return function (r) {
          if (3 > t.length) return u((0, b.__)("You must have at least 2 options", "ohmylms")), void setTimeout(function () {
            u(null);
          }, 3e3);
          var a = t.filter(function (e) {
              return e.id !== r;
            }),
            o = dm({}, n);
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
      var r = dm({}, n),
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
      r.questions = [].concat(um(r.questions), [dm({}, a)]), i(e, r), o(e, [].concat(um(t), [dm({}, a)]));
    },
    variant: "secondary",
    size: "small"
  }, (0, b.__)("Add Option", "ohmylms")));
};
const hm = (0, g.memo)(gm),
  ym = {
    name: "Matching",
    type: "matching",
    subTitle: (0, b.__)("Ask participants to match the options", "ohmylms"),
    icon: om,
    thumbIcon: lm,
    edit: hm,
    settings: {
      required: !0,
      score: !0
    },
    isPro: !0
  };
var bm = function (e) {
    (0, y.dispatch)(T.default).registerQuiz(e);
  },
  _m = function (e) {
    (0, y.dispatch)(T.default).registerInteractiveQuiz(e);
  },
  wm = n(75206),
  Em = ["placeholder", "onChange", "searchDelay"];
function Sm() {
  return Sm = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Sm.apply(null, arguments);
}
function Rm(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var xm = function (e) {
  var t = e.placeholder,
    n = void 0 === t ? (0, b.__)("Search Course", "lms") : t,
    r = e.onChange,
    a = (e.searchDelay, function (e, t) {
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
    }(e, Em)),
    o = function (e, t) {
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
          if ("string" == typeof e) return Rm(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rm(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(""), 2),
    i = o[0],
    l = o[1];
  return React.createElement(I.SearchControlWP, Sm({
    placeholder: n,
    value: i,
    onChange: function (e) {
      l(e), r(e || "");
    }
  }, a));
};
const Cm = (0, g.memo)(xm);
var Pm = ["buttonText", "placeholder", "onSearch", "onChange", "options", "selectedOptions", "isMultiple", "allowAll", "allLevel", "onCheckAllChange", "notFoundMessage"];
function Om(e, t) {
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
      if ("string" == typeof e) return km(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? km(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function km(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var jm = function (e) {
  var t = e.buttonText,
    n = void 0 === t ? (0, b.__)("Select", "ohmylms") : t,
    r = e.placeholder,
    a = void 0 === r ? (0, b.__)("Type to search", "ohmylms") : r,
    o = e.onSearch,
    i = e.onChange,
    l = void 0 === i ? function () {
      return console.error("No onChange function provided");
    } : i,
    c = e.options,
    u = void 0 === c ? [] : c,
    s = e.selectedOptions,
    d = void 0 === s ? [] : s,
    m = (e.isMultiple, e.allowAll),
    p = void 0 === m || m,
    f = e.allLevel,
    v = void 0 === f ? (0, b.__)("All", "ohmylms") : f,
    h = e.onCheckAllChange,
    y = void 0 === h ? function () {} : h,
    _ = e.notFoundMessage,
    w = void 0 === _ ? (0, b.__)("Nothing Found", "ohmylms") : _,
    E = (function (e, t) {
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
    }(e, Pm), Om((0, g.useState)(!1), 2)),
    S = E[0],
    R = E[1],
    x = Om((0, g.useState)({
      top: 0,
      left: 0,
      width: 0
    }), 2),
    C = x[0],
    P = x[1],
    O = Om((0, g.useState)(u), 2),
    k = O[0],
    j = O[1],
    A = (0, g.useCallback)(function (e) {
      o ? o(e) : j(u.filter(function (t) {
        return t.label.toLowerCase().includes(e.toLowerCase());
      }));
    }, [o, u]),
    M = (0, g.useRef)(null),
    T = (0, g.useRef)(null),
    F = (0, g.useCallback)(function () {
      var e = M.current.getBoundingClientRect(),
        t = e.top,
        n = e.left,
        r = e.width;
      P({
        top: t + 50,
        left: n,
        width: r
      }), R(!S);
    }, [S, M]),
    N = (0, g.useCallback)(function (e) {
      e.target.checked ? (l(k.map(function (e) {
        return e.value;
      })), y(k)) : (l([]), y([]));
    }, [k, l, y]);
  return (0, g.useEffect)(function () {
    function e(e) {
      M.current && !M.current.contains(e.target) && T.current && !T.current.contains(e.target) && R(!1);
    }
    return document.addEventListener("mousedown", e), function () {
      document.removeEventListener("mousedown", e);
    };
  }, [M, T]), (0, g.useEffect)(function () {
    j(u);
  }, [u]), React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-advanced-search-select-wrapper",
    ref: M
  }, React.createElement(I.ButtonWP, {
    onClick: F,
    icon: React.createElement(fn, {
      rotate: S ? 180 : 0
    }),
    iconPosition: "right",
    variant: "secondary",
    size: "lg"
  }, n), S && (0, wm.createPortal)(React.createElement("div", {
    ref: T,
    className: "ohmylms-advanced-search-select ".concat(0 === k.length ? "ohmylms-no-search-items" : ""),
    style: {
      position: "absolute",
      top: C.top,
      left: C.left,
      width: C.width,
      zIndex: 99999
    }
  }, React.createElement(Cm, {
    placeholder: a,
    onChange: A,
    searchDelay: 0
  }), React.createElement("div", {
    className: "ohmylms-advanced-search-select-items"
  }, p && k.length > 0 && k.length === u.length && React.createElement(I.CheckboxWP, {
    indeterminate: d.length < k.length && d.length > 0,
    onChange: N,
    checked: d.length === k.length
  }, v), 0 === k.length && React.createElement("p", {
    className: "ohmylms-nothing-found"
  }, w))), document.body)));
};
const Am = (0, g.memo)(jm);
var Mm = ["title", "description", "isItProFeature", "placeholder", "data", "setData", "notFoundMessage", "onChange", "allowClear", "headerFontSize", "staticSearch", "value", "tooltip", "showSearch", "padding", "advancedSelect", "showDivider", "align", "selectorWeight"];
function Tm() {
  return Tm = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tm.apply(null, arguments);
}
function Im(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Fm = function (e) {
  var t = true,
    n = e.title,
    r = e.description,
    a = e.isItProFeature,
    o = void 0 !== a && a,
    i = e.placeholder,
    l = void 0 === i ? (0, b.__)("Type to search", "ohmylms") : i,
    c = e.data,
    u = void 0 === c ? [] : c,
    s = e.setData,
    d = void 0 === s ? function () {
      return console.error("No setData function provided");
    } : s,
    m = e.notFoundMessage,
    p = void 0 === m ? (0, b.__)("Nothing Found", "ohmylms") : m,
    f = e.onChange,
    v = void 0 === f ? function () {
      return console.error("No onChange function provided");
    } : f,
    h = (e.allowClear, e.headerFontSize),
    y = void 0 === h ? "18px" : h,
    _ = e.staticSearch,
    w = void 0 !== _ && _,
    E = e.value,
    S = void 0 === E ? "" : E,
    R = e.tooltip,
    x = e.showSearch,
    C = void 0 === x || x,
    P = e.padding,
    O = void 0 === P ? 4 : P,
    k = e.advancedSelect,
    j = void 0 !== k && k,
    A = e.showDivider,
    M = void 0 !== A && A,
    T = e.align,
    F = void 0 === T ? "flex-start" : T,
    N = e.selectorWeight,
    D = void 0 === N ? "100%" : N,
    W = function (e, t) {
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
    }(e, Mm),
    z = function (e, t) {
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
          if ("string" == typeof e) return Im(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Im(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    B = (z[0], z[1]);
  return React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    padding: O,
    marginBottom: M ? 0 : 2
  }, React.createElement(I.FlexWP, {
    gap: 8,
    align: F,
    justify: "space-between"
  }, React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, n && React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    align: "center",
    gap: "1",
    justify: "flex-start"
  }, React.createElement(I.HeadingWP, {
    level: "4",
    color: "#000D25",
    size: y
  }, n, o && !t && React.createElement("span", null, (0, b.__)("Pro", "ohmylms"))), R && React.createElement(V.A, {
    title: R,
    placement: "top"
  }, React.createElement("span", null, React.createElement(Mt.A, null)))), React.createElement(I.SpacerWP, {
    marginBottom: 2
  })), r && React.createElement(Yt.A, {
    color: "#687784",
    size: "14px"
  }, r)), React.createElement(I.FlexItemWP, {
    isBlock: !0,
    style: {
      maxWidth: D
    }
  }, w && !j ? React.createElement(vn.A, Tm({
    showSearch: C,
    placeholder: l,
    options: u,
    filterOption: function (e, t) {
      var n, r;
      return ((null == t || null === (n = t.label) || void 0 === n || null === (n = n.props) || void 0 === n || null === (n = n.dangerouslySetInnerHTML) || void 0 === n ? void 0 : n.__html) || (null !== (r = null == t ? void 0 : t.label) && void 0 !== r ? r : "")).toLowerCase().includes(e.toLowerCase());
    },
    value: S,
    onChange: function (e) {
      B(!!e), v(e);
    },
    notFoundContent: p
  }, W)) : j ? React.createElement(Am, Tm({
    placeholder: l,
    selectedOptions: S,
    onChange: v,
    notFoundMessage: p
  }, W)) : React.createElement(I.SearchSelectWP, Tm({
    placeholder: l,
    data: u,
    setData: d,
    notFoundMessage: p,
    onChange: v,
    value: S
  }, W)))), M && React.createElement(I.SpacerWP, {
    marginBottom: 0,
    marginTop: 8
  }, React.createElement(I.DividerWP, {
    color: "#EDF2FB"
  }))));
};
const Nm = (0, g.memo)(Fm);
var Dm = ["className", "title", "description", "tooltip", "showDivider", "isItProFeature", "marginStart", "children", "variant", "align"],
  Wm = function (e) {
    true;
    var t = e.className,
      n = void 0 === t ? "" : t,
      r = e.title,
      a = e.description,
      o = e.tooltip,
      i = e.showDivider,
      l = void 0 === i || i,
      c = (e.isItProFeature, e.marginStart, e.children),
      u = e.variant,
      s = void 0 === u ? "v1" : u,
      d = e.align,
      m = void 0 === d ? "center" : d;
    return function (e, t) {
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
    }(e, Dm), React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
      className: n,
      align: m
    }, React.createElement("div", null, r && React.createElement(I.FlexWP, {
      gap: "small",
      align: "center"
    }, React.createElement(I.HeadingWP, {
      level: "4",
      color: "#000D25",
      size: "18px"
    }, r), o && React.createElement(I.TooltipWP, {
      title: o
    }, React.createElement(React.Fragment, null, React.createElement(Mt.A, null)))), a && React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
      marginBottom: 2
    }), React.createElement(I.TextWP, {
      as: "p",
      style: "v2" === s ? {
        maxWidth: "450px"
      } : {},
      color: "#687784",
      size: "14px"
    }, a))), c), l && React.createElement(Tt.A, {
      marginStart: "v2" === s ? 8 : 4,
      marginEnd: "v2" === s ? 0 : 4,
      color: "#EDF2FB"
    }));
  };
const zm = (0, g.memo)(Wm);
function Bm(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Lm = function (e) {
  var t = e.handleChange,
    n = e.isChecked,
    r = e.value,
    a = e.maxScore,
    o = void 0 === a ? 100 : a,
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
          if ("string" == typeof e) return Bm(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Bm(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(""), 2),
    l = i[0],
    c = i[1];
  return React.createElement(React.Fragment, null, React.createElement(zm, {
    title: (0, b.__)("Set Passing Grade", "ohmylms"),
    description: (0, b.__)("Define the minimum percentage a student must score to pass the quiz.", "ohmylms"),
    className: "ohmylms-quiz-passing-grade-settings-card"
  }, React.createElement(I.FlexWP, {
    direction: "column",
    gap: 2,
    justify: "flex-end",
    align: "flex-end",
    className: "ohmylms-quiz-passing-grade-settings"
  }, React.createElement(Bt.A, {
    checked: n,
    onChange: function (e) {
      return t("passing_grade", e, "enabled");
    },
    className: "ohmylms-passing-grade-switch"
  }), n && React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, null), React.createElement(I.InputNumberWP, {
    type: "number",
    min: 1,
    max: o,
    value: r,
    onBlur: function () {
      l && (c(""), t("passing_grade", r, "value"));
    },
    controls: !1,
    style: {
      width: 100
    },
    className: "ohmylms-passing-grade-input",
    onChange: function (e) {
      var n;
      /^\d*\.?\d*$/.test(e) && (o < (n = e) ? c((0, b.__)("Passing grade cannot be greater than the maximum score", "ohmylms")) : n < 1 && "" !== n ? c((0, b.__)("Passing grade cannot be less than 1", "ohmylms")) : (c(""), t("passing_grade", n, "value")));
    },
    onKeyDown: function (e) {
      (["e", "E", "+", "-", "/", "\\", ",", "*", " "].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
    }
  }), l && React.createElement(I.TextWP, {
    style: {
      color: "red"
    }
  }, l)))));
};
const Vm = (0, g.memo)(Lm);
function Hm(e) {
  return Hm = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Hm(e);
}
function Gm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Um(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Gm(Object(n), !0).forEach(function (t) {
      qm(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gm(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function qm(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Hm(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Hm(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Hm(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ym(e, t) {
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
      if ("string" == typeof e) return Qm(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qm(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Qm(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
