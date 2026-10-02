// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var sc = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "18",
    height: "18",
    fill: "none",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#7A8B9A",
    fillRule: "evenodd",
    d: "M9 0a9 9 0 100 18A9 9 0 009 0zM2.027 7.2A7.213 7.213 0 001.8 9c0 .622.079 1.225.227 1.8h2.558a18.91 18.91 0 010-3.6H2.027zm.736-1.8h2.09c.192-.921.455-1.764.779-2.493a8.9 8.9 0 01.17-.36A7.232 7.232 0 002.762 5.4zm3.631 1.8A17.017 17.017 0 006.3 9c0 .624.033 1.226.094 1.8h5.212A17.03 17.03 0 0011.7 9c0-.624-.033-1.226-.094-1.8H6.394zm4.909-1.8H6.697c.157-.66.353-1.253.58-1.762.295-.664.623-1.146.942-1.45.314-.299.577-.388.781-.388.204 0 .467.09.78.388.32.304.648.786.943 1.45.227.51.423 1.103.58 1.762zm2.112 1.8a18.892 18.892 0 010 3.6h2.558a7.217 7.217 0 000-3.6h-2.558zm1.822-1.8h-2.09a12.337 12.337 0 00-.779-2.493 8.833 8.833 0 00-.17-.36 7.232 7.232 0 013.04 2.853zM5.8 15.452A7.232 7.232 0 012.763 12.6h2.09c.192.921.455 1.764.779 2.493.054.122.11.242.17.36zm1.476-1.09a10.112 10.112 0 01-.58-1.762h4.606c-.157.66-.353 1.253-.58 1.762-.295.664-.623 1.146-.942 1.45-.314.299-.577.388-.781.388-.204 0-.467-.09-.78-.388-.32-.304-.648-.786-.943-1.45zm5.091.731c.324-.73.587-1.572.778-2.493h2.09a7.232 7.232 0 01-3.037 2.852 9.13 9.13 0 00.169-.359z",
    clipRule: "evenodd"
  })));
};

const dc = (0, g.memo)(sc);

function mc(e) {
  return function (e) {
    if (Array.isArray(e)) return pc(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return pc(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pc(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function pc(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

const fc = function (e) {
  var t = (0, y.useSelect)(function (e) {
      return e(T.default).getQuizTypes();
    }, []),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getInteractiveQuizTypes();
    }, []),
    r = [].concat(mc(t), mc(n));
  if (!e) return dc;
  var a = r.find(function (t) {
    return t.type === e;
  });
  return a ? a.icon : dc;
};

var vc = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "9",
    height: "14",
    viewBox: "0 0 9 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#8F959E",
    stroke: "#fff",
    strokeWidth: ".2",
    d: "M3.5 12.25c0 .905-.763 1.65-1.7 1.65-.937 0-1.7-.745-1.7-1.65 0-.905.763-1.65 1.7-1.65.937 0 1.7.745 1.7 1.65zM.1 7c0-.905.763-1.65 1.7-1.65.937 0 1.7.745 1.7 1.65 0 .905-.763 1.65-1.7 1.65C.863 8.65.1 7.905.1 7zm0-5.25C.1.845.863.1 1.8.1c.937 0 1.7.745 1.7 1.65 0 .905-.763 1.65-1.7 1.65C.863 3.4.1 2.655.1 1.75zm8.8 0c0 .905-.763 1.65-1.7 1.65-.937 0-1.7-.745-1.7-1.65C5.5.845 6.263.1 7.2.1c.937 0 1.7.745 1.7 1.65zM5.5 7c0-.905.763-1.65 1.7-1.65.937 0 1.7.745 1.7 1.65 0 .905-.763 1.65-1.7 1.65-.937 0-1.7-.745-1.7-1.65zm0 5.25c0-.905.763-1.65 1.7-1.65.937 0 1.7.745 1.7 1.65 0 .905-.763 1.65-1.7 1.65-.937 0-1.7-.745-1.7-1.65z"
  })));
};

const gc = (0, g.memo)(vc);

var hc = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "17",
    height: "18",
    viewBox: "0 0 17 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M11.06 17.167H3.638a2.97 2.97 0 01-2.97-2.97V6.773a2.97 2.97 0 012.97-2.97h7.424a2.97 2.97 0 012.97 2.97v7.424a2.97 2.97 0 01-2.97 2.97zM3.638 5.29a1.485 1.485 0 00-1.485 1.484v7.424a1.485 1.485 0 001.485 1.485h7.424a1.485 1.485 0 001.485-1.485V6.773A1.485 1.485 0 0011.06 5.29H3.637z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M14.03 14.197v-1.484a1.484 1.484 0 001.485-1.485V3.804a1.485 1.485 0 00-1.485-1.485H6.606a1.485 1.485 0 00-1.484 1.485H3.637a2.97 2.97 0 012.97-2.97h7.423A2.97 2.97 0 0117 3.804v7.424a2.97 2.97 0 01-2.97 2.97z"
  })));
};

const yc = (0, g.memo)(hc);

function bc(e) {
  return function (e) {
    if (Array.isArray(e)) return _c(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return _c(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _c(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function _c(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

const wc = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '[draggable="true"]',
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    n = (0, g.useMemo)(function () {
      return {
        background: "#EBECED",
        boxShadow: "0px 2px 5px 0px rgba(215, 220, 231, 0.44)",
        borderColor: "rgba(215, 220, 231, 0.44)",
        borderRadius: "12px"
      };
    }, []);
  (0, g.useEffect)(function () {
    var r = function (e) {
        var r = e.target.cloneNode(!0);
        Object.assign(r.style, t || n), r.style.maxWidth = "".concat(e.target.clientWidth || 10, "px"), r.style.width = "100%", r.style.position = "absolute", r.style.top = "-9999px", r.style.left = "-9999px", document.body.appendChild(r);
        var a = e.target.getBoundingClientRect(),
          o = e.clientX - a.left,
          i = e.clientY - a.top;
        e.dataTransfer.setDragImage(r, o, i);
        var l = setTimeout(function () {
          var e;
          null !== (e = document) && void 0 !== e && null !== (e = e.body) && void 0 !== e && e.contains(r) && document.body.removeChild(r);
        }, 0);
        clearTimeout(l);
      },
      a = [];
    if ("string" == typeof e) {
      var o = document.querySelectorAll('[draggable="true"]'),
        i = '[draggable="true"]' !== e ? document.querySelectorAll(e) : [],
        l = new Set(i);
      a = bc(o).filter(function (e) {
        return !l.has(e);
      }).concat(bc(l));
    } else null != e && e.current && (a = [e.current]);
    return a.forEach(function (e) {
      return e.addEventListener("dragstart", r);
    }), function () {
      return a.forEach(function (e) {
        return e.removeEventListener("dragstart", r);
      });
    };
  }, [e, t]);
};

var Ec = n(5836),
  Sc = n(38169);

function Rc(e) {
  return Rc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Rc(e);
}

function xc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function Cc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? xc(Object(n), !0).forEach(function (t) {
      Pc(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xc(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function Pc(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Rc(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Rc(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Rc(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function Oc() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return kc(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (kc(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, kc(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, kc(d, "constructor", u), kc(u, "constructor", c), c.displayName = "GeneratorFunction", kc(u, a, "GeneratorFunction"), kc(d), kc(d, a, "Generator"), kc(d, r, function () {
    return this;
  }), kc(d, "toString", function () {
    return "[object Generator]";
  }), (Oc = function () {
    return {
      w: o,
      m
    };
  })();
}

function kc(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  kc = function (e, t, n, r) {
    function o(t, n) {
      kc(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, kc(e, t, n, r);
}

function jc(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Ac(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        jc(o, r, a, i, l, "next", e);
      }
      function l(e) {
        jc(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function Mc(e, t) {
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
  }(e, t) || Tc(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Tc(e, t) {
  if (e) {
    if ("string" == typeof e) return Ic(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ic(e, t) : void 0;
  }
}

function Ic(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Fc = function (e) {
  var t,
    n = e.question,
    r = e.index,
    a = e.hideOptions,
    o = (0, y.useDispatch)(T.default),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).selectQuestion();
    }, []),
    l = (0, y.useSelect)(function (e) {
      return e(T.default).getAllQuestions();
    }, []),
    c = (0, y.useSelect)(function (e) {
      return e(T.default).getSelectedQuizId();
    }, []),
    u = fc(null == n || null === (t = n.settings) || void 0 === t ? void 0 : t.type),
    s = Mc((0, g.useState)(!1), 2),
    d = s[0],
    m = s[1],
    p = (0, z.A)(),
    f = (p.openNotificationWithIcon, p.contextHolder, (0, g.useRef)(null)),
    v = (0, g.useMemo)(function () {
      return {
        borderColor: "#EBEBEF",
        background: "#F0F4FF",
        paddingRight: "30px",
        boxShadow: "0px 2px 5px 0px rgba(215, 220, 231, 0.44)"
      };
    }, []);
  wc(f, v);
  var h = Mc((0, g.useState)(null), 2),
    _ = (h[0], h[1]),
    w = Mc((0, g.useState)(!1), 2),
    E = w[0],
    S = (w[1], Mc((0, g.useState)(!1), 2)),
    R = S[0],
    x = (S[1], function () {
      var e = Ac(Oc().m(function e() {
        return Oc().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (null == n || !n.temp) {
                e.n = 1;
                break;
              }
              o.deleteTempQuestion(null == n ? void 0 : n.id), e.n = 3;
              break;
            case 1:
              return e.n = 2, o.deleteQuestion(null == n ? void 0 : n.id);
            case 2:
              e.v;
            case 3:
              m(!1);
            case 4:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }()),
    C = function () {
      var e = Ac(Oc().m(function e() {
        var t;
        return Oc().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (c) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              (t = Cc({}, n)).order_number = l.length + 1, t.id = new Date().getTime(), t.temp = !0, o.setQuestion(t), o.setQuestions(t), o.setSelectedQuestionId(t.id);
            case 2:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    P = [{
      title: (0, b.__)("Duplicate", "ohmylms"),
      key: "1",
      onClick: function () {
        C();
      },
      icon: React.createElement(yc, null)
    }, {
      title: (0, b.__)("Delete", "ohmylms"),
      key: "2",
      onClick: function () {
        m(!0);
      },
      icon: React.createElement(We, null)
    }],
    O = {
      borderRadius: "2px",
      width: "100%",
      boxShadow: (null == n ? void 0 : n.id) === (null == i ? void 0 : i.id) ? "0 0 0 1px var(--ohmylms-primary-color)" : "0 0 0 1px rgba(0, 0, 0, 0.1)"
    };
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    style: O,
    variant: (null == n ? void 0 : n.id) === (null == i ? void 0 : i.id) ? "primary" : "secondary",
    cursor: "pointer"
  }, React.createElement(I.SpacerWP, {
    padding: 2,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    onClick: function (e) {
      (0, Ec.$)(i).isValid ? o.setSelectedQuestionId(null == n ? void 0 : n.id) : o.setQuizError(!0);
    },
    draggable: (0, Ec.$)(i).isValid ? "true" : "false",
    onDragStart: function (e) {
      return function (e, t) {
        (0, Ec.$)(i).isValid ? (_(t), localStorage.setItem("draggedItemIndex", t)) : o.setQuizError(!0);
      }(0, r);
    },
    onDragOver: function (e) {
      e.preventDefault();
    },
    onDrop: function (e) {
      return function (e, t) {
        e.preventDefault();
        var n = localStorage.getItem("draggedItemIndex");
        if (null !== n && n != t) {
          var r = function (e) {
              return function (e) {
                if (Array.isArray(e)) return Ic(e);
              }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
              }(e) || Tc(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }(l),
            a = Mc(r.splice(n, 1), 1)[0];
          r.splice(t, 0, a), r.forEach(function (e, t) {
            e.order_number = t + 1;
          }), o.setAllQuestions(r), _(null), localStorage.removeItem("draggedItemIndex");
        }
      }(e, r);
    }
  }, React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    gap: 2,
    align: "center",
    justify: "flex-start"
  }, React.createElement(gc, null), React.createElement(V.A, {
    title: null == n ? void 0 : n.name
  }, React.createElement(I.FlexWP, {
    gap: 2,
    align: "center",
    justify: "flex-start"
  }, React.createElement("p", {
    className: "ohmylms-quiz-question-title"
  }, r + 1 < 10 ? "0" + (r + 1) : r + 1), React.createElement(u, null))))), React.createElement(I.DropdownMenuWP, {
    controls: P,
    icon: React.createElement(q.Icon, {
      icon: Sc.A
    }),
    style: {
      display: a ? "none" : E || R ? "inline-flex" : "none"
    }
  })))), d && React.createElement(Ie, {
    title: (0, b.__)("Delete Question", "ohmylms"),
    description: (0, b.__)("Are you sure you want to delete this question?", "ohmylms"),
    onClose: function () {
      m(!1);
    },
    onDelete: x,
    isOpen: d,
    wrapClassName: "ohmylms-delete-question-modal",
    isDelete: !0
  }));
};

const Nc = (0, g.memo)(Fc);

function Dc(e, t) {
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
      if ("string" == typeof e) return Wc(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Wc(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Wc(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var zc = function () {
  var e = (0, y.useDispatch)(T.default),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getAllQuestions();
    }, []) || [],
    n = (0, y.useSelect)(function (e) {
      return e(T.default).selectSelectedQuestionId();
    }, []),
    r = Dc((0, g.useState)(t.length), 2),
    a = r[0],
    o = r[1],
    i = Dc((0, g.useState)(!0), 2),
    l = i[0],
    c = i[1];
  (0, g.useEffect)(function () {
    var r;
    n || e.setSelectedQuestionId(null === (r = t[0]) || void 0 === r ? void 0 : r.id);
  }, [n]), (0, g.useEffect)(function () {
    var e;
    return !l && t.length > a && (e = document.getElementById("ohmylms-question-list")) && (e.scrollTop = e.scrollHeight), o(t.length), c(!1), function () {
      var e = document.getElementById("ohmylms-question-list");
      e && (e.scrollTop = 0);
    };
  }, [t]);
  var u = (0, g.useMemo)(function () {
    return t.length;
  }, [t]);
  return React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 4
  }, React.createElement(I.FlexWP, {
    direction: "column",
    justify: "flex-start",
    align: "flex-start",
    gap: 4,
    id: "ohmylms-question-list"
  }, t && t.map(function (e, n) {
    var r;
    return React.createElement(Nc, {
      key: e.id,
      question: e,
      index: n,
      hideOptions: 1 === u && !(null !== (r = t[0]) && void 0 !== r && null !== (r = r.settings) && void 0 !== r && r.type)
    });
  })));
};

const Bc = (0, g.memo)(zc);

var Lc = function () {
  var e = (0, y.useDispatch)(T.default);
  return {
    isValidQuestion: function (t) {
      var n = (0, Ec.$)(t),
        r = n.isValid,
        a = n.errors;
      return r || e.setQuestionErrors(a), r;
    }
  };
};

function Vc() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Hc(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Hc(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Hc(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Hc(d, "constructor", u), Hc(u, "constructor", c), c.displayName = "GeneratorFunction", Hc(u, a, "GeneratorFunction"), Hc(d), Hc(d, a, "Generator"), Hc(d, r, function () {
    return this;
  }), Hc(d, "toString", function () {
    return "[object Generator]";
  }), (Vc = function () {
    return {
      w: o,
      m
    };
  })();
}

function Hc(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Hc = function (e, t, n, r) {
    function o(t, n) {
      Hc(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Hc(e, t, n, r);
}

function Gc(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Uc(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var qc = function () {
  var e,
    t = (0, y.useDispatch)(T.default),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getQuiz();
    }, []),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).getAllQuestions();
    }, [null == n ? void 0 : n.id]) || [],
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
          if ("string" == typeof e) return Uc(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Uc(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    o = (a[0], a[1]),
    i = ((0, y.useSelect)(function (e) {
      return e(T.default).getQuestionErrors();
    }, []), (0, y.useSelect)(function (e) {
      return e(T.default).selectQuestion();
    }, [])),
    l = ((0, y.useSelect)(function (e) {
      return e(T.default).selectQuizzesError();
    }, []), Lc().isValidQuestion, (0, Ec.$)(i).isValid, function () {
      var e,
        n = (e = Vc().m(function e() {
          var n;
          return Vc().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                if ((0, Ec.$)(i).isValid || !(0 < r.length)) {
                  e.n = 1;
                  break;
                }
                return t.setQuizError(!0), e.a(2);
              case 1:
                t.setQuizError(!1);
              case 2:
                o(!0), n = new Date().getTime(), t.setQuestions({
                  name: "Untitled",
                  description: "",
                  order_number: r.length + 1,
                  id: n,
                  temp: !0
                }), o(!1), t.setSelectedQuestionId(n);
              case 3:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Gc(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Gc(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return n.apply(this, arguments);
      };
    }());
  return (0, g.useEffect)(function () {
    0 === r.length && l();
  }, [r]), React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-editor-left-sidebar"
  }, React.createElement("div", {
    className: "ohmylms-add-question-wrapper"
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    icon: React.createElement(uc, null),
    onClick: l,
    disabled: 1 === r.length && !(null != i && null !== (e = i.settings) && void 0 !== e && e.type)
  }, (0, b.__)("Add Question", "ohmylms"))), React.createElement(Bc, null)));
};

const Yc = (0, g.memo)(qc);
