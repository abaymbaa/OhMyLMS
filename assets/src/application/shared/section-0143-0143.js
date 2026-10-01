// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function gK(e) {
  return gK = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, gK(e);
}

function hK() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return yK(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (yK(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, yK(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, yK(d, "constructor", u), yK(u, "constructor", c), c.displayName = "GeneratorFunction", yK(u, a, "GeneratorFunction"), yK(d), yK(d, a, "Generator"), yK(d, r, function () {
    return this;
  }), yK(d, "toString", function () {
    return "[object Generator]";
  }), (hK = function () {
    return {
      w: o,
      m
    };
  })();
}

function yK(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  yK = function (e, t, n, r) {
    function o(t, n) {
      yK(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, yK(e, t, n, r);
}

function bK(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

var _K = function (e) {
  var t = e.pages,
    n = void 0 === t ? [] : t,
    r = e.setPages,
    a = (0, y.useSelect)(function (e) {
      return e(T.default).getGeneralSettings();
    }, []),
    o = (0, y.useDispatch)(T.default),
    i = function (e, t) {
      o.updateGeneralSettings(function (e, t, n) {
        return (t = function (e) {
          var t = function (e) {
            if ("object" != gK(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != gK(n)) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          }(e);
          return "symbol" == gK(t) ? t : t + "";
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }({}, e, {
        value: null == t ? void 0 : t.value,
        meta_data: null == t ? void 0 : t.label
      }));
    },
    l = function () {
      var e,
        t = (e = hK().m(function e(t) {
          var r;
          return hK().w(function (e) {
            for (;;) if (0 === e.n) return r = n.filter(function (e) {
              return e.label.toLowerCase().includes(t.toLowerCase());
            }), e.a(2, r);
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              bK(o, r, a, i, l, "next", e);
            }
            function l(e) {
              bK(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function (e) {
        return t.apply(this, arguments);
      };
    }(),
    c = function (e) {
      var t = function (e) {
        var t = null == a ? void 0 : a[e];
        return t ? "object" === gK(t) && void 0 !== t.value ? t.value : t : null;
      }(e);
      if (!t || "-1" === t || -1 === t) return [];
      var r = n.find(function (e) {
        return e.value === t || e.value === String(t);
      });
      return r ? [r] : [];
    };
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-settings-general-card-wrapper"
  }, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    paddingY: 4,
    paddingX: 2,
    marginTop: 0,
    marginBottom: 4
  }, React.createElement(Nm, {
    title: (0, b.__)("Course Archive Page", "ohmylms"),
    description: (0, b.__)("Select the page where all your available courses will be displayed.", "ohmylms"),
    placeholder: (0, b.__)("Type to Select Option", "ohmylms"),
    data: n,
    setData: r,
    onChange: function (e) {
      return i("ohmylms_course_page_id", e);
    },
    staticSearch: !1,
    value: c("ohmylms_course_page_id"),
    defaultOptions: n,
    loadOptions: l,
    isClearable: !1,
    isSearchable: !0,
    isMulti: !1,
    showDivider: !0
  }), React.createElement(Nm, {
    title: (0, b.__)("Checkout Page", "ohmylms"),
    description: (0, b.__)("Choose the page students will use to complete their course purchases.", "ohmylms"),
    placeholder: (0, b.__)("Type to Select Option", "ohmylms"),
    data: n,
    setData: r,
    onChange: function (e) {
      return i("ohmylms_checkout_page_id", e);
    },
    staticSearch: !1,
    value: c("ohmylms_checkout_page_id"),
    defaultOptions: n,
    loadOptions: l,
    isClearable: !1,
    isSearchable: !0,
    isMulti: !1,
    showDivider: !0
  }), React.createElement(Nm, {
    title: (0, b.__)("Student Dashboard", "ohmylms"),
    description: (0, b.__)("Select the page where students can access their dashboard and overview.", "ohmylms"),
    placeholder: (0, b.__)("Type to Select Option", "ohmylms"),
    data: n,
    setData: r,
    onChange: function (e) {
      return i("ohmylms_student_dashboard_page_id", e);
    },
    value: c("ohmylms_student_dashboard_page_id"),
    defaultOptions: n,
    loadOptions: l,
    isClearable: !1,
    isSearchable: !0,
    isMulti: !1,
    showDivider: !0
  }), React.createElement(Nm, {
    title: (0, b.__)("Student Courses Page", "ohmylms"),
    description: (0, b.__)("Select the page where students can view and manage their enrolled courses.", "ohmylms"),
    placeholder: (0, b.__)("Type to Select Option", "ohmylms"),
    data: n,
    setData: r,
    onChange: function (e) {
      return i("ohmylms_student_courses_page_id", e);
    },
    value: c("ohmylms_student_courses_page_id"),
    defaultOptions: n,
    loadOptions: l,
    isClearable: !1,
    isSearchable: !0,
    isMulti: !1,
    showDivider: !0
  }), React.createElement(Nm, {
    title: (0, b.__)("Student Profile Page", "ohmylms"),
    description: (0, b.__)("Select the page where students can manage their profile information and settings.", "ohmylms"),
    placeholder: (0, b.__)("Type to Select Option", "ohmylms"),
    data: n,
    setData: r,
    onChange: function (e) {
      return i("ohmylms_student_profile_page_id", e);
    },
    value: c("ohmylms_student_profile_page_id"),
    defaultOptions: n,
    loadOptions: l,
    isClearable: !1,
    isSearchable: !0,
    isMulti: !1,
    showDivider: !0
  }), React.createElement(Nm, {
    title: (0, b.__)("Terms and Conditions Page", "ohmylms"),
    description: (0, b.__)("Assign the page that outlines your terms and conditions.", "ohmylms"),
    placeholder: (0, b.__)("Type to Select Option", "ohmylms"),
    data: n,
    setData: r,
    onChange: function (e) {
      return i("ohmylms_terms_page_id", e);
    },
    value: c("ohmylms_terms_page_id"),
    defaultOptions: n,
    loadOptions: l,
    isClearable: !1,
    isSearchable: !0,
    isMulti: !1
  })))));
};

const wK = (0, g.memo)(_K);

var EK = function (e) {
  var t = e.activeTab,
    n = e.handleSave,
    r = e.handleMigration,
    a = e.selectedCourses,
    o = e.isSaving;
  return React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    padding: 0,
    paddingBottom: 25,
    marginBottom: 0,
    marginTop: 2
  }, React.createElement(I.FlexWP, {
    justify: "flex-end"
  }, "migration" == t ? React.createElement(D.A, {
    type: "primary",
    onClick: r,
    disabled: 0 === a.length
  }, (0, b.__)("Start Migrate", "ohmylms")) : React.createElement(D.A, {
    key: "Save",
    variant: "primary",
    size: "md",
    onClick: n,
    isBusy: o
  }, (0, b.__)("Save Changes", "ohmylms")))));
};

const SK = (0, g.memo)(EK);

function RK() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return xK(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (xK(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, xK(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, xK(d, "constructor", u), xK(u, "constructor", c), c.displayName = "GeneratorFunction", xK(u, a, "GeneratorFunction"), xK(d), xK(d, a, "Generator"), xK(d, r, function () {
    return this;
  }), xK(d, "toString", function () {
    return "[object Generator]";
  }), (RK = function () {
    return {
      w: o,
      m
    };
  })();
}

function xK(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  xK = function (e, t, n, r) {
    function o(t, n) {
      xK(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, xK(e, t, n, r);
}

function CK(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function PK(e, t) {
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
      if ("string" == typeof e) return OK(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? OK(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function OK(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var kK = function (e) {
  var t = e.activeTab,
    n = e.handleSave,
    r = e.handleMigration,
    a = e.selectedCourses,
    o = e.isSaving,
    i = (0, y.useDispatch)(T.default),
    c = PK((0, g.useState)([{
      disabled: !0,
      label: "Select an page",
      value: ""
    }]), 2),
    u = c[0],
    s = c[1],
    d = function (e) {
      return e ? Object.entries(e).map(function (e) {
        var t = PK(e, 2),
          n = t[0];
        return {
          label: t[1],
          value: n
        };
      }) : [];
    };
  return (0, g.useEffect)(function () {
    var e = function () {
      var e,
        t = (e = RK().m(function e() {
          var t, n, r;
          return RK().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return i.setLoadingSetting(!0), e.n = 1, l()({
                  path: "ohmylms/v1/settings/general"
                });
              case 1:
                return t = e.v, i.setGeneralSettings(t), e.n = 2, l()({
                  path: "/ohmylms/v1/page/search?value=",
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json"
                  }
                });
              case 2:
                return n = e.v, e.n = 3, d(n);
              case 3:
                r = e.v, s(r), i.setLoadingSetting(!1);
              case 4:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              CK(o, r, a, i, l, "next", e);
            }
            function l(e) {
              CK(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    e();
  }, []), React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    className: "ohmylms-full-screen-height"
  }, React.createElement(I.SpacerWP, {
    padding: 4,
    marginTop: 0,
    marginBottom: 0
  }, React.createElement(wK, {
    pages: u,
    setPages: s
  }), React.createElement(SK, {
    activeTab: t,
    handleSave: n,
    handleMigration: r,
    selectedCourses: a,
    isSaving: o
  }))));
};

const jK = (0, g.memo)(kK);

var AK = ["title", "description", "tooltip", "className", "onChange", "showColorCode", "variant", "isBorderless", "padding", "descriptionWeight"];

function MK() {
  return MK = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, MK.apply(null, arguments);
}

function TK(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var IK = function (e) {
  var t = e.title,
    n = e.description,
    r = e.tooltip,
    a = e.className,
    o = void 0 === a ? "" : a,
    i = e.onChange,
    l = e.showColorCode,
    c = void 0 === l || l,
    u = e.variant,
    s = void 0 === u ? "primary" : u,
    d = e.isBorderless,
    m = void 0 !== d && d,
    p = e.padding,
    f = void 0 === p ? 4 : p,
    v = e.descriptionWeight,
    h = void 0 === v ? "100%" : v,
    y = function (e, t) {
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
    }(e, AK),
    b = function (e, t) {
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
          if ("string" == typeof e) return TK(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? TK(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    _ = b[0],
    w = b[1],
    E = (0, g.useRef)(null);
  return (0, g.useEffect)(function () {
    var e = function (e) {
      var t,
        n = document.querySelectorAll(".ant-color-picker");
      Array.from(n).some(function (t) {
        return t.contains(e.target);
      }) || null !== (t = E.current) && void 0 !== t && t.contains(e.target) || w(!1);
    };
    return document.addEventListener("mousedown", e), function () {
      document.removeEventListener("mousedown", e);
    };
  }, []), React.createElement(React.Fragment, null, React.createElement(I.FlexItemWP, {
    flex: 1,
    style: {
      minWidth: "fit-content",
      maxWidth: "100%"
    }
  }, React.createElement(I.CardWP, {
    isBorderless: m,
    variant: s
  }, React.createElement(q.__experimentalSpacer, {
    padding: f,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    gap: 2,
    justify: "space-between",
    className: "ohmylms-color-picker ".concat(o)
  }, React.createElement("div", {
    className: "ohmylms-color-picker-info"
  }, t && React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    gap: "small",
    align: "center"
  }, React.createElement(q.__experimentalHeading, {
    level: "4"
  }, t), r && React.createElement(V.A, {
    title: r,
    className: "ohmylms-tooltip"
  }, React.createElement(React.Fragment, null, React.createElement(Mt.A, null)))), React.createElement(I.SpacerWP, {
    marginBottom: 1
  })), n && React.createElement(Yt.A, {
    as: "p",
    style: {
      maxWidth: h
    }
  }, n)), React.createElement("div", {
    role: "button",
    tabIndex: 0,
    onKeyDown: function (e) {
      "Enter" !== e.key && " " !== e.key || (e.preventDefault(), w(!_));
    },
    "aria-pressed": _,
    style: {
      display: "inline-block"
    },
    className: "ohmylms-color-picker-focusable-wrapper"
  }, React.createElement(I.ColorPickerWP, MK({
    onChange: function (e) {
      i(null == e ? void 0 : e.hex);
    },
    showColorCode: c
  }, y))))))));
};

const FK = (0, g.memo)(IK);

var NK = ["title", "description", "className", "showDivider", "colorsConfig"];

function DK() {
  return DK = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, DK.apply(null, arguments);
}

var WK = function (e) {
  var t = e.title,
    n = e.description,
    r = e.className,
    a = void 0 === r ? "" : r,
    o = e.showDivider,
    i = void 0 === o || o,
    l = e.colorsConfig,
    c = void 0 === l ? [] : l,
    u = function (e, t) {
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
    }(e, NK),
    s = function (e) {
      for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, n = [], r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
      return n;
    }(c, 2);
  return React.createElement(React.Fragment, null, React.createElement("div", DK({
    className: "ohmylms-color-picker-card-wrapper ".concat(a)
  }, u), t && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-color-picker-card-info"
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, t), React.createElement(I.SpacerWP, {
    marginBottom: 1
  }), n && React.createElement(I.TextWP, null, n))), React.createElement(I.CardWP, {
    isBorderless: !0,
    className: "ohmylms-color-picker-card",
    variant: "secondary",
    style: {
      paddingInlineEnd: "7px"
    }
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingY: 2,
    paddingX: 0
  }, s.map(function (e, t) {
    return React.createElement(React.Fragment, {
      key: t
    }, React.createElement(I.FlexWP, {
      gap: 27.5
    }, e.map(function (e, t) {
      return React.createElement(I.FlexBlockWP, {
        key: t,
        style: {
          flex: 1,
          width: "50%"
        }
      }, React.createElement(FK, DK({
        key: t,
        format: "hex",
        variant: "secondary",
        isBorderless: !0,
        descriptionWeight: "200px"
      }, e)));
    })), t !== s.length - 1 && React.createElement(I.SpacerWP, {
      marginBottom: 0,
      paddingX: 4,
      paddingY: 4
    }, React.createElement(Tt.A, {
      color: "#C8D2E9"
    })));
  }))), i && React.createElement(Tt.A, null)));
};

const zK = (0, g.memo)(WK);

function BK() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return LK(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (LK(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, LK(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, LK(d, "constructor", u), LK(u, "constructor", c), c.displayName = "GeneratorFunction", LK(u, a, "GeneratorFunction"), LK(d), LK(d, a, "Generator"), LK(d, r, function () {
    return this;
  }), LK(d, "toString", function () {
    return "[object Generator]";
  }), (BK = function () {
    return {
      w: o,
      m
    };
  })();
}

function LK(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  LK = function (e, t, n, r) {
    function o(t, n) {
      LK(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, LK(e, t, n, r);
}

function VK(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function HK(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
