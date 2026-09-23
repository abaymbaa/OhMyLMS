// Reconstructed application fragment. Assembled in manifest order within factory 1841.
const Oee = (0, g.memo)(Pee);

function kee(e) {
  return kee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, kee(e);
}

function jee(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != kee(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != kee(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == kee(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function Aee(e) {
  return function (e) {
    if (Array.isArray(e)) return Tee(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || Mee(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Mee(e, t) {
  if (e) {
    if ("string" == typeof e) return Tee(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tee(e, t) : void 0;
  }
}

function Tee(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Iee = function (e) {
  var t = e.setAdditionalContent,
    n = e.setFooterContent,
    r = e.setCourseSuggestionText,
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
      }(e, t) || Mee(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(""), 2),
    o = (a[0], a[1]),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getEmail();
    }, []),
    l = (0, y.useDispatch)(T.default).updateEmail,
    c = function (e, t) {
      if ("recipient_email" === e) {
        var n = t.split(",").map(function (e) {
            return function (e) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
            }(e.trim()) ? e.trim() : null;
          }).filter(Boolean),
          r = (null == i ? void 0 : i.recipient_email) || [];
        l(jee({}, e, [].concat(Aee(r), Aee(n)))), o("");
      } else l(jee({}, e, t));
    };
  return React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 5,
    gap: 4
  }, React.createElement(I.FlexWP, {
    direction: "column",
    gap: 3
  }, React.createElement(I.HeadingWP, {
    level: "3"
  }, (0, b.__)("Settings", "ohmylms")), React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    justify: "start",
    align: "center",
    gap: "2"
  }, React.createElement(I.TextWP, {
    size: 16
  }, (0, b.__)("Subject", "ohmylms")), React.createElement(I.TooltipWP, {
    title: (0, b.__)("Set the subject of the email.", "ohmylms")
  }, React.createElement(Mt.A, null))), React.createElement(I.SpacerWP, null), React.createElement(W.A, {
    value: null == i ? void 0 : i.subject,
    onChange: function (e) {
      return c("subject", e);
    },
    autoFocus: !0
  })), React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    justify: "start",
    align: "center",
    gap: "2"
  }, React.createElement(I.TextWP, {
    size: 16
  }, (0, b.__)("Email heading", "ohmylms")), React.createElement(I.TooltipWP, {
    title: (0, b.__)("Set the heading of the email.", "ohmylms")
  }, React.createElement(Mt.A, null))), React.createElement(I.SpacerWP, null), React.createElement(I.InputWP, {
    value: null == i ? void 0 : i.heading,
    onChange: function (e) {
      return c("heading", e);
    }
  })), React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    justify: "start",
    align: "center",
    gap: "2"
  }, React.createElement(I.TextWP, {
    size: 16
  }, (0, b.__)("Additional content", "ohmylms")), React.createElement(I.TooltipWP, {
    title: (0, b.__)("Add additional content to the email.", "ohmylms")
  }, React.createElement(Mt.A, null))), React.createElement(I.SpacerWP, null), React.createElement(I.CardWP, null, React.createElement(I.SpacerWP, {
    paddingX: 2,
    marginBottom: 0,
    paddingY: 1
  }, React.createElement(ne, {
    onContentChange: function (e) {
      return t(e);
    },
    content: null == i ? void 0 : i.additional_content,
    commandsConfig: {
      image: !1,
      horizontalRule: !1,
      customHTML: !1
    },
    showAddButton: !1,
    placeholder: (0, b.__)("Add additional content to the email.", "ohmylms")
  })))), (null == i ? void 0 : i.footer_text) && React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    justify: "start",
    align: "center",
    gap: "2"
  }, React.createElement(I.TextWP, {
    size: 16
  }, (0, b.__)("Footer Text", "ohmylms")), React.createElement(I.TooltipWP, {
    title: (0, b.__)("Set the footer text of the email.", "ohmylms")
  }, React.createElement(Mt.A, null))), React.createElement(I.SpacerWP, null), React.createElement(I.CardWP, null, React.createElement(I.SpacerWP, {
    paddingX: 2,
    marginBottom: 0,
    paddingY: 1
  }, React.createElement(ne, {
    onContentChange: function (e) {
      return n(e);
    },
    content: null == i ? void 0 : i.footer_text,
    commandsConfig: {
      image: !1,
      horizontalRule: !1,
      customHTML: !1
    },
    showAddButton: !1,
    placeholder: (0, b.__)("Add footer text to the email.", "ohmylms")
  })))), (null == i ? void 0 : i.course_suggestion_text) && React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    size: 16,
    justify: "start",
    align: "center",
    gap: "2"
  }, React.createElement(I.TextWP, null, (0, b.__)("Course Suggestion Text", "ohmylms")), React.createElement(I.TooltipWP, {
    title: (0, b.__)("Set the course suggestion text.", "ohmylms")
  }, React.createElement(Mt.A, null))), React.createElement(I.SpacerWP, null), React.createElement(I.CardWP, null, React.createElement(I.SpacerWP, {
    paddingX: 2,
    marginBottom: 0,
    paddingY: 1
  }, React.createElement(ne, {
    onContentChange: function (e) {
      return r(e);
    },
    content: null == i ? void 0 : i.course_suggestion_text,
    commandsConfig: {
      image: !1,
      horizontalRule: !1,
      customHTML: !1
    },
    showAddButton: !1,
    placeholder: (0, b.__)("Add course suggestion text.", "ohmylms")
  })))), (null == i ? void 0 : i.hasOwnProperty("button_text")) && React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    justify: "start",
    align: "center",
    gap: "2"
  }, React.createElement(I.TextWP, {
    size: 16
  }, (0, b.__)("Email Button", "ohmylms")), React.createElement(I.TooltipWP, {
    title: (0, b.__)("Set the email button text.", "ohmylms")
  }, React.createElement(Mt.A, null))), React.createElement(I.SpacerWP, null), React.createElement(I.InputWP, {
    value: null == i ? void 0 : i.button_text,
    onChange: function (e) {
      return c("button_text", e);
    }
  })))));
};

const Fee = (0, g.memo)(Iee);

function Nee(e) {
  return Nee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Nee(e);
}

function Dee() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Wee(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Wee(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Wee(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Wee(d, "constructor", u), Wee(u, "constructor", c), c.displayName = "GeneratorFunction", Wee(u, a, "GeneratorFunction"), Wee(d), Wee(d, a, "Generator"), Wee(d, r, function () {
    return this;
  }), Wee(d, "toString", function () {
    return "[object Generator]";
  }), (Dee = function () {
    return {
      w: o,
      m
    };
  })();
}

function Wee(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Wee = function (e, t, n, r) {
    function o(t, n) {
      Wee(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Wee(e, t, n, r);
}

function zee(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function Bee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? zee(Object(n), !0).forEach(function (t) {
      Lee(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zee(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function Lee(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Nee(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Nee(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Nee(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function Vee(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Hee(e, t) {
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
      if ("string" == typeof e) return Gee(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gee(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Gee(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Uee = function () {
  var e,
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getEmail();
    }, []),
    n = (0, y.useDispatch)(T.default),
    r = n.updateSingleEmail,
    a = n.updateEmail,
    o = Hee((0, g.useState)("desktop"), 2),
    i = o[0],
    l = o[1],
    c = (0, z.A)(),
    u = c.openNotificationWithIcon,
    s = c.contextHolder,
    d = Hee((0, g.useState)((null == t ? void 0 : t.additional_content) || ""), 2),
    m = d[0],
    p = d[1],
    f = Hee((0, g.useState)((null == t ? void 0 : t.footer_text) || ""), 2),
    v = f[0],
    h = f[1],
    _ = Hee((0, g.useState)((null == t ? void 0 : t.course_suggestion_text) || ""), 2),
    w = _[0],
    E = _[1],
    S = function () {
      var e,
        n = (e = Dee().m(function e() {
          var n, o, i;
          return Dee().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return e.p = 0, e.n = 1, a({
                  additional_content: m,
                  footer_text: v,
                  course_suggestion_text: w
                });
              case 1:
                return o = Bee(Bee({}, t), {}, {
                  additional_content: m,
                  footer_text: v,
                  course_suggestion_text: w
                }), e.n = 2, r(null == t || null === (n = t.basic) || void 0 === n ? void 0 : n.id, o);
              case 2:
                u("success", "Saved successfully"), e.n = 4;
                break;
              case 3:
                e.p = 3, i = e.v, console.error(i), u("error", "Failed to save! Please try again.");
              case 4:
                return e.a(2);
            }
          }, e, null, [[0, 3]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Vee(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Vee(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return n.apply(this, arguments);
      };
    }();
  return React.createElement(React.Fragment, null, s, React.createElement(Ree, {
    title: (null == t || null === (e = t.basic) || void 0 === e ? void 0 : e.title) || (0, b.__)("Email Editor", "ohmylms"),
    handlePreview: function (e) {
      l(e);
    },
    handleTestEmail: function () {
      console.warn("Test Email");
    },
    handleSave: S,
    device: i
  }), React.createElement(Ea, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 5,
    gap: 3
  }, React.createElement(I.FlexWP, {
    align: "stretch",
    justify: "between",
    gap: "3"
  }, React.createElement(I.FlexItemWP, {
    style: {
      flex: 3
    }
  }, React.createElement(Oee, {
    selected: i,
    content: m,
    footerText: v,
    courseSuggestionText: w
  })), React.createElement(I.FlexItemWP, {
    style: {
      flex: 1
    }
  }, React.createElement(Fee, {
    setAdditionalContent: p,
    setFooterContent: h,
    setCourseSuggestionText: E
  }))))));
};

const qee = (0, g.memo)(Uee);
