// Reconstructed application fragment. Assembled in manifest order within factory 1841.
const vH = function (e) {
    var t = e.date,
      n = e.onChange,
      r = e.startDate,
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
            if ("string" == typeof e) return fH(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fH(e, t) : void 0;
          }
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((0, g.useState)(t), 2),
      o = a[0],
      i = a[1];
    return (0, g.useEffect)(function () {
      i(t);
    }, [t]), h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
      justify: "space-between",
      align: "flex-start"
    }, h().createElement(I.FlexBlockWP, null, h().createElement(I.HeadingWP, {
      level: 4
    }, (0, b.__)("Enrollment Deadline", "ohmylms")), h().createElement(I.SpacerWP, {
      marginBottom: 1
    }), h().createElement(I.TextWP, null, (0, b.__)("Set the enrollment deadline.", "ohmylms"))), h().createElement(I.FlexBlockWP, null, h().createElement(I.FlexWP, {
      justify: "flex-end"
    }, h().createElement(sH, {
      date: o,
      onChange: function (e) {
        i(e), n(e);
      },
      isInvalidDateCallback: function (e) {
        if (!r) return !1;
        var t = new Date(r || new Date());
        return t.setHours(0, 0, 0, 0), new Date(e) > t;
      },
      placeholder: (0, b.__)("Select Enrollment Deadline")
    })))));
  },
  gH = function (e) {
    var t = e.capacity,
      n = e.hasCapacity,
      r = e.onEnable,
      a = e.onChange;
    return h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
      justify: "space-between",
      align: "flex-start"
    }, h().createElement(I.FlexBlockWP, null, h().createElement(I.HeadingWP, {
      level: 4
    }, (0, b.__)("Maximum Students", "ohmylms")), h().createElement(I.SpacerWP, {
      marginBottom: 1
    }), h().createElement(I.TextWP, null, (0, b.__)("Define the maximum number of students allowed in this course.", "ohmylms"))), h().createElement(I.FlexBlockWP, null, h().createElement(I.FlexWP, {
      justify: "flex-end",
      direction: "column",
      gap: 5,
      align: "flex-end"
    }, h().createElement(I.FlexItemWP, null, h().createElement(I.SwitchWP, {
      checked: n,
      onChange: r
    })), n && h().createElement(I.FlexItemWP, null, h().createElement(I.InputNumberWP, {
      min: 1,
      value: t,
      onChange: a,
      placeholder: (0, b.__)("Enter max students", "ohmylms"),
      style: {
        marginTop: 8,
        width: 180
      }
    }))))));
  };
function hH(e) {
  return hH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, hH(e);
}
function yH(e) {
  return function (e) {
    if (Array.isArray(e)) return bH(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return bH(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bH(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function bH(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wH(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? _H(Object(n), !0).forEach(function (t) {
      EH(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _H(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function EH(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != hH(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != hH(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == hH(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
const SH = function () {
  var e = (0, y.useDispatch)(T.default),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    n = Array.isArray(null == t ? void 0 : t.cohort) && t.cohort.length > 0 ? t.cohort : [{
      start_date: "",
      end_date: "",
      enrollment_deadline: "",
      has_capacity: !1,
      capacity: ""
    }],
    r = n[0],
    a = (null == r ? void 0 : r.start_date) || "",
    o = (null == r ? void 0 : r.end_date) || "",
    i = (null == r ? void 0 : r.enrollment_deadline) || "",
    l = (null == r ? void 0 : r.has_capacity) || !1,
    c = (null == r ? void 0 : r.capacity) || "";
  return h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingY: 6
  }, h().createElement(pH, {
    onChange: function (a, o) {
      var i = wH(wH({}, r), {}, {
        end_date: o,
        start_date: a
      });
      e.setCourse(wH(wH({}, t), {}, {
        cohort: [i].concat(yH(n.slice(1)))
      }));
    },
    startDate: a,
    endDate: o
  }), h().createElement(I.SpacerWP, {
    marginBottom: 6
  }), h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, h().createElement(vH, {
    date: i,
    onChange: function (a) {
      var o = wH(wH({}, r), {}, {
        enrollment_deadline: a
      });
      e.setCourse(wH(wH({}, t), {}, {
        cohort: [o].concat(yH(n.slice(1)))
      }));
    },
    startDate: a
  }))), h().createElement(I.SpacerWP, {
    marginBottom: 6
  }), h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, h().createElement(gH, {
    onEnable: function (a) {
      var o = wH(wH({}, r), {}, {
        has_capacity: a
      });
      e.setCourse(wH(wH({}, t), {}, {
        cohort: [o].concat(yH(n.slice(1)))
      }));
    },
    onChange: function (a) {
      var o = wH(wH({}, r), {}, {
        capacity: isNaN(a) ? 0 : a
      });
      e.setCourse(wH(wH({}, t), {}, {
        cohort: [o].concat(yH(n.slice(1)))
      }));
    },
    capacity: c,
    hasCapacity: l
  })))));
};
function RH(e) {
  return RH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, RH(e);
}
function xH(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function CH(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? xH(Object(n), !0).forEach(function (t) {
      PH(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xH(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function PH(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != RH(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != RH(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == RH(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function OH() {
  var e = (0, y.useDispatch)(T.default),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    n = function (n) {
      return function (r) {
        e.setCourse(CH(CH({}, t), {}, PH({}, n, r ? "yes" : "no")));
      };
    };
  return h().createElement(h().Fragment, null, h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    padding: 0,
    marginTop: 6,
    marginBottom: 6
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, h().createElement(I.FlexWP, {
    align: "flex-start",
    justify: "space-between",
    gap: 5,
    direction: "column"
  }, h().createElement(I.FlexItemWP, {
    fullWidth: !0
  }, h().createElement(Kt, {
    title: (0, b.__)("Disable leaderboard", "ohmylms"),
    isChecked: "yes" === (null == t ? void 0 : t.leaderboard_disabled),
    onChange: n("leaderboard_disabled"),
    spacerPadding: 0,
    description: (0, b.__)("Disable leaderboard for this course. This will hide the leaderboard from students.", "ohmylms")
  })))))), h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    padding: 0,
    marginTop: 6,
    marginBottom: 6
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, h().createElement(I.FlexWP, {
    align: "flex-start",
    justify: "space-between",
    gap: 5,
    direction: "column"
  }, h().createElement(I.FlexItemWP, {
    fullWidth: !0
  }, h().createElement(Kt, {
    title: (0, b.__)("Disable Bonus Point", "ohmylms"),
    isChecked: "yes" === (null == t ? void 0 : t.point_disabled),
    onChange: n("point_disabled"),
    spacerPadding: 0,
    description: (0, b.__)("Bonus points motivate students by rewarding them for course activities. Disable this if you don’t want to use bonus points in this course.", "ohmylms")
  })))))), h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    padding: 0,
    marginTop: 6,
    marginBottom: 6
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, h().createElement(I.FlexWP, {
    align: "flex-start",
    justify: "space-between",
    gap: 5,
    direction: "column"
  }, h().createElement(I.FlexItemWP, {
    fullWidth: !0
  }, h().createElement(Kt, {
    title: (0, b.__)("Disable Reward Point", "ohmylms"),
    isChecked: "yes" === (null == t ? void 0 : t.reward_disabled),
    onChange: n("reward_disabled"),
    spacerPadding: 0,
    description: (0, b.__)("Reward points motivate students by rewarding them for course activities. Disable this if you don’t want to use reward points in this course.", "ohmylms")
  })))))));
}
function kH(e, t) {
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
  }(e, t) || jH(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function jH(e, t) {
  if (e) {
    if ("string" == typeof e) return AH(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? AH(e, t) : void 0;
  }
}
function AH(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
const MH = function (e) {
  true, e.onSave, e.setActiveStep, e.activeStep;
  var t = (0, f.g)(),
    n = t.id,
    r = t.step,
    a = t.subStep,
    o = (Ze(), (0, f.Zp)()),
    i = kH((0, g.useState)(null != a ? a : "basics"), 2),
    l = i[0],
    c = i[1],
    u = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    s = kH((0, g.useState)(!1), 2),
    d = s[0];
  if (s[1], (0, g.useEffect)(function () {
    a && a !== l ? c(a) : a || "basics" === l || c("basics");
  }, [a, l]), d) return null;
  var m = [{
    label: h().createElement(h().Fragment, null, (0, b.__)("Basics", "ohmylms")),
    key: "basics",
    children: h().createElement(Lz, null)
  }].concat(function (e) {
    return function (e) {
      if (Array.isArray(e)) return AH(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || jH(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }("cohort-based" === (null == u ? void 0 : u.type) ? [{
    label: h().createElement(h().Fragment, null, (0, b.__)("Cohort Settings", "ohmylms")),
    key: "cohort",
    children: h().createElement(SH, null)
  }] : []), [{
    label: h().createElement(h().Fragment, null, (0, b.__)("Resources", "ohmylms")),
    key: "resources",
    children: h().createElement(wV, null)
  }, {
    label: h().createElement(h().Fragment, null, (0, b.__)("Organize", "ohmylms")),
    key: "organize",
    children: h().createElement(iH, null)
  }, {
    label: h().createElement(h().Fragment, null, (0, b.__)("Engagement", "ohmylms")),
    key: "engagement",
    children: h().createElement(OH, null)
  }]);
  return h().createElement(I.ContainerWP, null, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingY: 10
  }, h().createElement(I.CardWP, {
    variant: "secondary",
    isBorderless: !0,
    minHeight: "calc(100vh - 200px)"
  }, h().createElement(I.SpacerWP, {
    padding: 10,
    marginBottom: 0
  }, h().createElement(I.TabsWP, {
    items: m,
    onChange: function (e) {
      return function (e) {
        c(e), o("/course-edit/".concat(n, "/").concat(r, "/").concat(e));
      }(e);
    },
    activekey: l
  })))));
};
function TH(e) {
  return TH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, TH(e);
}
function IH(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function FH(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? IH(Object(n), !0).forEach(function (t) {
      NH(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : IH(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function NH(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != TH(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != TH(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == TH(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function DH() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return WH(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (WH(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, WH(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, WH(d, "constructor", u), WH(u, "constructor", c), c.displayName = "GeneratorFunction", WH(u, a, "GeneratorFunction"), WH(d), WH(d, a, "Generator"), WH(d, r, function () {
    return this;
  }), WH(d, "toString", function () {
    return "[object Generator]";
  }), (DH = function () {
    return {
      w: o,
      m
    };
  })();
}
function WH(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  WH = function (e, t, n, r) {
    function o(t, n) {
      WH(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, WH(e, t, n, r);
}
function zH(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function BH(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        zH(o, r, a, i, l, "next", e);
      }
      function l(e) {
        zH(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
function LH(e, t) {
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
  }(e, t) || VH(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function VH(e, t) {
  if (e) {
    if ("string" == typeof e) return HH(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? HH(e, t) : void 0;
  }
}
function HH(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
