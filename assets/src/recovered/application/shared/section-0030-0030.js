// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function Vb() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Hb(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Hb(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Hb(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Hb(d, "constructor", u), Hb(u, "constructor", c), c.displayName = "GeneratorFunction", Hb(u, a, "GeneratorFunction"), Hb(d), Hb(d, a, "Generator"), Hb(d, r, function () {
    return this;
  }), Hb(d, "toString", function () {
    return "[object Generator]";
  }), (Vb = function () {
    return {
      w: o,
      m
    };
  })();
}

function Hb(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Hb = function (e, t, n, r) {
    function o(t, n) {
      Hb(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Hb(e, t, n, r);
}

function Gb(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Ub(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var qb = {
  key: "mint_add_to_segment",
  group: "triggers",
  type: "trigger",
  package: "pro",
  category: "mailmint",
  title: (0, b.__)("Added To Segment", "mrm"),
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("Automation will trigger when a contact is added to a specific segment.", "mrm"),
  subtitle: function (e) {
    var t;
    if (Object.keys(e.settings) < 1) return null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.NotSetUpYet;
  },
  icon: Lb,
  edit: function () {
    var e,
      t,
      n = function (e, t) {
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
            if ("string" == typeof e) return Ub(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ub(e, t) : void 0;
          }
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((0, g.useState)([]), 2),
      r = n[0],
      a = n[1],
      o = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex()
        };
      }, []),
      i = o.selectedStep,
      l = o.selectedStepIndex,
      c = o.selectedStepCondition,
      u = o.selectedLogicalStepIndex;
    (0, p.useEffect)(function () {
      s().then(function (e) {
        a(e);
      });
    }, []);
    var s = function () {
      var e,
        t = (e = Vb().m(function e() {
          var t;
          return Vb().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return e.n = 1, Ay();
              case 1:
                if (200 !== (t = e.v).code) {
                  e.n = 2;
                  break;
                }
                return e.a(2, t.data.data.map(function (e) {
                  return {
                    value: e.id,
                    label: e.title
                  };
                }));
              case 2:
                return e.a(2, []);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Gb(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Gb(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    return h().createElement(q.PanelBody, {
      opened: !0
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings mint-after-email"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(Lb, null), (0, b.__)("Added To Segment", "mrm")), h().createElement("p", {
      className: "sort-description"
    }, (0, b.__)("Automation will trigger when a contact is added to a specific segment.", "mrm"))), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: ""
    }, (0, b.__)("Select Segment", "mrm"), h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, (0, b.__)("Please select a segment to trigger the automation. If no segment is selected, the automation will not trigger.", "mrm")))), h().createElement(Jt.A, {
      cacheOptions: !0,
      value: null !== (e = null === (t = i.settings) || void 0 === t || null === (t = t.segment_settings) || void 0 === t ? void 0 : t.segment) && void 0 !== e ? e : "",
      defaultOptions: r,
      loadOptions: function (e, t) {
        s(e).then(function (e) {
          t(e);
        });
      },
      onChange: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(l, c, u, "segment_settings", "segment", e);
      }
    })))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function Yb() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#1E6BF0",
    d: "M8.291 4.756L5.935 2.399a2.499 2.499 0 10-3.536 3.535l4.714 4.714a2.5 2.5 0 003.535 0 .833.833 0 011.178 1.178 4.166 4.166 0 01-5.891 0L1.22 7.112A4.166 4.166 0 117.113 1.22L9.47 3.578a.833.833 0 11-1.18 1.178z"
  }), React.createElement("path", {
    fill: "#1E6BF0",
    d: "M18.782 18.78a4.167 4.167 0 01-5.893 0l-2.827-2.828a.833.833 0 111.178-1.178l2.828 2.827a2.5 2.5 0 003.535-3.535l-5.185-5.185a2.5 2.5 0 00-3.534 0 .833.833 0 11-1.179-1.178 4.166 4.166 0 015.892 0l5.185 5.185a4.166 4.166 0 010 5.892z"
  }));
}

function Qb(e) {
  return Qb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Qb(e);
}

function Zb() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return $b(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : ($b(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, $b(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, $b(d, "constructor", u), $b(u, "constructor", c), c.displayName = "GeneratorFunction", $b(u, a, "GeneratorFunction"), $b(d), $b(d, a, "Generator"), $b(d, r, function () {
    return this;
  }), $b(d, "toString", function () {
    return "[object Generator]";
  }), (Zb = function () {
    return {
      w: o,
      m
    };
  })();
}

function $b(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  $b = function (e, t, n, r) {
    function o(t, n) {
      $b(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, $b(e, t, n, r);
}

function Kb(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function Jb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Kb(Object(n), !0).forEach(function (t) {
      Xb(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kb(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function Xb(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Qb(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Qb(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Qb(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function e_(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function t_(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        e_(o, r, a, i, l, "next", e);
      }
      function l(e) {
        e_(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function n_() {
  return r_.apply(this, arguments);
}

function r_() {
  return r_ = t_(Zb().m(function e() {
    var t,
      n,
      r = arguments;
    return Zb().w(function (e) {
      for (;;) switch (e.n) {
        case 0:
          return t = "mrm/v1/campaigns/search?term=".concat(r.length > 0 && void 0 !== r[0] ? r[0] : ""), n = {
            method: "GET",
            headers: {
              "Content-type": "application/json"
            }
          }, e.n = 1, l()(Jb({
            path: t
          }, n));
        case 1:
          return e.a(2, e.v);
      }
    }, e);
  })), r_.apply(this, arguments);
}

function a_(e) {
  return o_.apply(this, arguments);
}

function o_() {
  return (o_ = t_(Zb().m(function e(t) {
    var n, r;
    return Zb().w(function (e) {
      for (;;) switch (e.n) {
        case 0:
          return n = "mrm/v1/campaigns/".concat(t, "/urls"), r = {
            method: "GET",
            headers: {
              "Content-type": "application/json"
            }
          }, e.n = 1, l()(Jb({
            path: n
          }, r));
        case 1:
          return e.a(2, e.v);
      }
    }, e);
  }))).apply(this, arguments);
}

function i_() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return l_(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (l_(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, l_(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, l_(d, "constructor", u), l_(u, "constructor", c), c.displayName = "GeneratorFunction", l_(u, a, "GeneratorFunction"), l_(d), l_(d, a, "Generator"), l_(d, r, function () {
    return this;
  }), l_(d, "toString", function () {
    return "[object Generator]";
  }), (i_ = function () {
    return {
      w: o,
      m
    };
  })();
}

function l_(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  l_ = function (e, t, n, r) {
    function o(t, n) {
      l_(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, l_(e, t, n, r);
}

function c_(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function u_(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        c_(o, r, a, i, l, "next", e);
      }
      function l(e) {
        c_(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function s_(e, t) {
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
      if ("string" == typeof e) return d_(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d_(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function d_(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var m_,
  p_ = {
    key: "mint_clicks_a_link",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mailmint",
    title: (0, b.__)("Contact Clicks a Link in Email", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Automation will trigger when a contact clicks on a link in a specific campaign", "mrm"),
    subtitle: function (e) {
      var t, n, r;
      return (0, A.isEmpty)(null == e || null === (t = e.settings) || void 0 === t || null === (t = t.link_click_settings) || void 0 === t ? void 0 : t.campaign) ? null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet : "Selected campaign: " + (null == e || null === (r = e.settings) || void 0 === r || null === (r = r.link_click_settings) || void 0 === r || null === (r = r.campaign) || void 0 === r ? void 0 : r.label);
    },
    icon: Yb,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i,
        l,
        c = s_((0, g.useState)([]), 2),
        u = c[0],
        s = c[1],
        d = s_((0, g.useState)("Please enter 3 or more characters"), 2),
        m = d[0],
        p = d[1],
        f = s_((0, g.useState)([]), 2),
        v = f[0],
        _ = f[1],
        w = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedStepIndex()
          };
        }, []),
        E = w.selectedStep,
        S = w.selectedStepIndex,
        R = w.selectedStepCondition,
        x = w.selectedLogicalStepIndex,
        C = function () {
          var e = u_(i_().m(function e() {
            var t,
              n,
              r = arguments;
            return i_().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                    e.n = 2;
                    break;
                  }
                  return p((0, b.__)("loading...", "mrm")), e.n = 1, n_(t);
                case 1:
                  null != (n = e.v) && n.success && s(null == n ? void 0 : n.campaigns);
                case 2:
                  return e.a(2, []);
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
        P = function () {
          var e = u_(i_().m(function e(t) {
            var n;
            return i_().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  return (0, y.dispatch)(Lf).updateStepArgs(S, R, x, "link_click_settings", "campaign", t), e.n = 1, a_(null == t ? void 0 : t.value);
                case 1:
                  null != (n = e.v) && n.success && _(null == n ? void 0 : n.urls);
                case 2:
                  return e.a(2);
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
        O = function (e) {
          return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, m));
        };
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings mint-after-email"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(Yb, null), (0, b.__)("Contact Clicks a Link in Email", "mrm")), h().createElement("p", {
        className: "sort-description"
      }, (0, b.__)("Automation will trigger when a contact clicks on a link in a specific campaign.", "mrm"))), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "campaign-select"
      }, (0, b.__)("Select campaign", "mrm"), h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, (0, b.__)("Please select a campaign to trigger the automation. If no campaign is selected, the automation will not trigger.", "mrm")))), h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: O
        },
        value: null !== (e = null === (t = E.settings) || void 0 === t || null === (t = t.link_click_settings) || void 0 === t ? void 0 : t.campaign) && void 0 !== e ? e : "",
        onChange: function (e) {
          P(e);
        },
        onInputChange: function (e) {
          C(e);
        },
        options: u,
        isMulti: !1,
        placeholder: (0, b.__)("Search Campaign...", "mrm"),
        isSearchable: !0
      })), (0, A.isEmpty)(null === (n = E.settings) || void 0 === n || null === (n = n.link_click_settings) || void 0 === n ? void 0 : n.campaign) ? null : (null === (r = E.settings) || void 0 === r || null === (r = r.link_click_settings) || void 0 === r ? void 0 : r.urls.length) > 0 ? h().createElement(h().Fragment, null, h().createElement("div", {
        className: "form-group single-settings sender-email"
      }, h().createElement("label", {
        htmlFor: "campaign-url"
      }, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.CampaignUrl), h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: O
        },
        value: null !== (o = null === (i = E.settings) || void 0 === i || null === (i = i.link_click_settings) || void 0 === i ? void 0 : i.urls) && void 0 !== o ? o : "",
        onChange: function (e) {
          var t;
          t = e, (0, y.dispatch)(Lf).updateStepArgs(S, R, x, "link_click_settings", "urls", t);
        },
        options: v,
        isMulti: !0,
        placeholder: (0, b.__)("Select URLs", "mrm"),
        isSearchable: !0
      })), h().createElement("div", {
        className: "form-group single-settings subject transactional-email"
      }, h().createElement("label", {
        htmlFor: "reactivate-workflow"
      }, h().createElement("input", {
        type: "checkbox",
        id: "reactivate-workflow",
        checked: (null === (l = E.settings) || void 0 === l || null === (l = l.link_click_settings) || void 0 === l ? void 0 : l.reactivate) || !1,
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(S, R, x, "link_click_settings", "reactivate", e.target.checked);
        }
      }), (0, b.__)("Reactivate the full workflow", "mrm"), h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, (0, b.__)("Check this to reactivate the full workflow for the selected campaign.", "mrm")))))) : h().createElement("p", null, (0, b.__)("This campaign has no links", "mrm")))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function f_() {
  return React.createElement("svg", {
    width: "21",
    height: "22",
    fill: "none",
    viewBox: "0 0 21 22"
  }, React.createElement("path", {
    fill: "#2D3149",
    fillRule: "evenodd",
    d: "M15.327 19.641a.54.54 0 100-1.081.54.54 0 000 1.081zm0 1.623a2.163 2.163 0 100-4.327 2.163 2.163 0 000 4.327zM8.837 19.641a.54.54 0 100-1.081.54.54 0 000 1.081zm0 1.623a2.163 2.163 0 100-4.327 2.163 2.163 0 000 4.327zM8.026 7.204c0-.448.364-.811.812-.811h3.244a.811.811 0 010 1.622H8.838a.811.811 0 01-.812-.811zM8.026 10.448c0-.448.364-.811.812-.811h5.407a.811.811 0 010 1.622H8.838a.811.811 0 01-.812-.811z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#2D3149",
    fillRule: "evenodd",
    d: "M1.132 1.346a.811.811 0 011.125-.225l1.264.842c.403.269.688.682.795 1.155l2.226 9.793c.14.615.687 1.052 1.318 1.052h8.444c.631 0 1.179-.437 1.319-1.052l1.72-7.571a1.352 1.352 0 00-1.318-1.652H9.649a.811.811 0 110-1.622h8.376a2.974 2.974 0 012.9 3.633l-1.72 7.571a2.974 2.974 0 01-2.9 2.316H7.86a2.974 2.974 0 01-2.9-2.316L2.734 3.478a.27.27 0 00-.113-.165L1.357 2.47a.811.811 0 01-.225-1.125z",
    clipRule: "evenodd"
  }));
}
