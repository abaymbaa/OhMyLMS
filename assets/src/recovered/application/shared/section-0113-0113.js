// Reconstructed application fragment. Assembled in manifest order within factory 1841.
const xY = function (e) {
  var t = e.isOpen,
    n = e.onClose,
    r = e.onSubmit,
    a = e.title,
    o = e.type,
    i = void 0 === o ? "category" : o,
    l = e.initialData,
    c = void 0 === l ? null : l,
    u = e.categories,
    s = void 0 === u ? [] : u,
    d = e.isSubmitting,
    m = void 0 !== d && d,
    p = EY((0, g.useState)({
      name: "",
      parent: 0
    }), 2),
    f = p[0],
    v = p[1],
    h = EY((0, g.useState)({}), 2),
    y = h[0],
    _ = h[1];
  (0, g.useEffect)(function () {
    v(c ? {
      name: c.name || "",
      parent: c.parent || 0
    } : {
      name: "",
      parent: 0
    }), _({});
  }, [c, t]);
  var w = function (e, t) {
      v(function (n) {
        return _Y(_Y({}, n), {}, wY({}, e, t));
      }), y[e] && _(function (t) {
        return _Y(_Y({}, t), {}, wY({}, e, ""));
      });
    },
    E = function () {
      m || n();
    },
    S = [{
      label: (0, b.__)("None", "ohmylms"),
      value: 0
    }].concat(function (e) {
      return function (e) {
        if (Array.isArray(e)) return RY(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || SY(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }(s.filter(function (e) {
      return !c || e.term_id !== c.term_id;
    }).map(function (e) {
      return {
        label: e.name,
        value: e.term_id
      };
    })));
  if (!t) return null;
  var R = !f.name.trim();
  return React.createElement(I.ModalWP, {
    title: a,
    onRequestClose: E,
    shouldCloseOnEsc: !m,
    shouldCloseOnClickOutside: !m,
    size: "medium"
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 3
  }, React.createElement(Pf, {
    title: (0, b.__)("Name", "ohmylms"),
    description: "category" === i ? (0, b.__)("Give this category a meaningful name.", "ohmylms") : (0, b.__)("Give this tag a meaningful name.", "ohmylms"),
    inputType: "text",
    value: f.name,
    onChange: function (e) {
      return w("name", e);
    },
    placeholder: "category" === i ? (0, b.__)("Enter category name", "ohmylms") : (0, b.__)("Enter tag name", "ohmylms"),
    required: !0,
    error: y.name
  }), "category" === i && React.createElement(I.SpacerWP, {
    padding: 4,
    marginBottom: 2
  }, React.createElement(I.FlexWP, {
    gap: 8,
    align: "flex-start",
    justify: "space-between"
  }, React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Parent Category", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 1
  }), React.createElement(I.TextWP, null, (0, b.__)("Categories can have a parent for hierarchical organization.", "ohmylms"))), React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, React.createElement(I.SelectWP, {
    value: f.parent,
    onChange: function (e) {
      return w("parent", parseInt(e));
    },
    options: S
  }), y.parent && React.createElement(I.TextWP, {
    as: "p",
    size: "13px",
    color: "#FF4955",
    align: "right",
    style: {
      marginTop: "4px"
    }
  }, y.parent)))))), React.createElement(I.SpacerWP, {
    paddingTop: 4
  }, React.createElement(I.FlexWP, {
    justify: "flex-end",
    gap: 2
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: E,
    disabled: m
  }, (0, b.__)("Cancel", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "primary",
    disabled: R,
    onClick: function () {
      var e;
      m || (e = {}, f.name.trim() || (e.name = (0, b.__)("Name is required", "ohmylms")), "category" === i && c && f.parent === c.term_id && (e.parent = (0, b.__)("A category cannot be its own parent", "ohmylms")), _(e), 0 === Object.keys(e).length && r(f));
    },
    isBusy: m
  }, c ? (0, b.__)("Update", "ohmylms") : (0, b.__)("Create", "ohmylms")))));
};

function CY(e) {
  return CY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, CY(e);
}

function PY() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return OY(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (OY(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, OY(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, OY(d, "constructor", u), OY(u, "constructor", c), c.displayName = "GeneratorFunction", OY(u, a, "GeneratorFunction"), OY(d), OY(d, a, "Generator"), OY(d, r, function () {
    return this;
  }), OY(d, "toString", function () {
    return "[object Generator]";
  }), (PY = function () {
    return {
      w: o,
      m
    };
  })();
}

function OY(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  OY = function (e, t, n, r) {
    function o(t, n) {
      OY(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, OY(e, t, n, r);
}

function kY(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function jY(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? kY(Object(n), !0).forEach(function (t) {
      AY(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kY(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function AY(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != CY(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != CY(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == CY(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function MY(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function TY(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        MY(o, r, a, i, l, "next", e);
      }
      function l(e) {
        MY(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function IY(e, t) {
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
      if ("string" == typeof e) return FY(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? FY(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function FY(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function NY() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return DY(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (DY(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, DY(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, DY(d, "constructor", u), DY(u, "constructor", c), c.displayName = "GeneratorFunction", DY(u, a, "GeneratorFunction"), DY(d), DY(d, a, "Generator"), DY(d, r, function () {
    return this;
  }), DY(d, "toString", function () {
    return "[object Generator]";
  }), (NY = function () {
    return {
      w: o,
      m
    };
  })();
}

function DY(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  DY = function (e, t, n, r) {
    function o(t, n) {
      DY(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, DY(e, t, n, r);
}

function WY(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function zY(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        WY(o, r, a, i, l, "next", e);
      }
      function l(e) {
        WY(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function BY(e, t) {
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
      if ("string" == typeof e) return LY(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? LY(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function LY(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function VY(e) {
  if (!e) return "-";
  var t,
    n = (t = e) ? t.includes("T") ? t : t.replace(" ", "T") : t,
    r = function () {
      var e,
        t = new Date(),
        n = (null === (e = window) || void 0 === e || null === (e = e.creator_lms_params) || void 0 === e ? void 0 : e.gtm_offset) || 0,
        r = -t.getTimezoneOffset() / 60;
      if (n == r) return t;
      var a = 60 * (n - r) * 60 * 1e3;
      return new Date(t.getTime() + a);
    }(),
    a = new Date(n);
  if (!a) return "-";
  var o = r.getTime() - a.getTime(),
    i = o > 0 && o <= 864e5 ? "".concat((0, wq.humanTimeDiff)(a, r)) : aN()(n).format("MMM D, YYYY"),
    l = aN()(n).format("MMM D, YYYY");
  return React.createElement("time", {
    dateTime: new Date(n).toISOString(),
    title: l
  }, i);
}

function HY() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return GY(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (GY(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, GY(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, GY(d, "constructor", u), GY(u, "constructor", c), c.displayName = "GeneratorFunction", GY(u, a, "GeneratorFunction"), GY(d), GY(d, a, "Generator"), GY(d, r, function () {
    return this;
  }), GY(d, "toString", function () {
    return "[object Generator]";
  }), (HY = function () {
    return {
      w: o,
      m
    };
  })();
}

function GY(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  GY = function (e, t, n, r) {
    function o(t, n) {
      GY(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, GY(e, t, n, r);
}

function UY(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function qY(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        UY(o, r, a, i, l, "next", e);
      }
      function l(e) {
        UY(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function YY(e, t) {
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
      if ("string" == typeof e) return QY(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? QY(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function QY(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
