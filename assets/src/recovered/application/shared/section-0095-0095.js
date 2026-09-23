// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function VV(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function HV(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return e.flatMap(function (e) {
    var n,
      r = {
        label: "".concat("— ".repeat(t)).concat(Ge(e.name)),
        value: null !== (n = null == e ? void 0 : e.term_id) && void 0 !== n ? n : null == e ? void 0 : e.id
      },
      a = e.children && e.children.length > 0 ? HV(e.children, t + 1) : [];
    return [r].concat(function (e) {
      return function (e) {
        if (Array.isArray(e)) return VV(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || LV(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }(a));
  });
}

var GV = function (e) {
  var t = e.handleAdd,
    n = e.categories,
    r = e.termFor,
    a = e.showParent,
    o = e.setShowForm,
    i = e.showForm,
    l = BV((0, g.useState)(""), 2),
    c = l[0],
    u = l[1],
    s = BV((0, g.useState)(null), 2),
    d = s[0],
    m = s[1];
  function p(e) {
    var t = {},
      n = [];
    return e.forEach(function (e) {
      e.children = [], t[e.term_id] = e;
    }), e.forEach(function (e) {
      e.parent && t[e.parent] ? t[e.parent].children.push(e) : n.push(e);
    }), n;
  }
  var f = function () {
    var e,
      t = (e = FV().m(function e(t) {
        var r, a;
        return FV().w(function (e) {
          for (;;) if (0 === e.n) return r = HV(p(n)), a = r.filter(function (e) {
            return e.label.toLowerCase().includes(t.toLowerCase());
          }), e.a(2, a);
        }, e);
      }), function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, a) {
          var o = e.apply(t, n);
          function i(e) {
            DV(o, r, a, i, l, "next", e);
          }
          function l(e) {
            DV(o, r, a, i, l, "throw", e);
          }
          i(void 0);
        });
      });
    return function (e) {
      return t.apply(this, arguments);
    };
  }();
  return h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    className: "omlms-category-add-form",
    marginTop: 4,
    marginBottom: 0,
    padding: 4
  }, h().createElement(I.InputWP, {
    placeholder: (0, b.__)("Enter ".concat(r, " name"), "ohmylms"),
    onChange: function (e) {
      u(e);
    },
    style: {
      width: "100%"
    }
  }), a && h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, null), h().createElement("div", {
    name: "parentCategory"
  }, h().createElement(I.SearchSelectWP, {
    label: "Select Category",
    placeholder: (0, b.__)("Select parent"),
    onChange: function (e) {
      return m(e.value);
    },
    defaultOptions: HV(p(n)),
    loadOptions: f,
    isClearable: !1,
    isSearchable: !0,
    isMulti: !1
  }))), h().createElement(I.SpacerWP, null), h().createElement(I.FlexWP, {
    gap: 2,
    align: "center",
    justify: "flex-start",
    className: "omlms-category-add-form-submit"
  }, h().createElement(I.ButtonWP, {
    variant: "primary",
    onClick: function () {
      t(function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? WV(Object(n), !0).forEach(function (t) {
            zV(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : WV(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
        return e;
      }({
        name: c
      }, a && d ? {
        parent: d
      } : {}));
    }
  }, (0, b.__)("Save", "ohmylms")), h().createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: function () {
      return o(!i);
    }
  }, (0, b.__)("Cancel", "ohmylms")))));
};

const UV = (0, g.memo)(GV);

function qV() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return YV(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (YV(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, YV(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, YV(d, "constructor", u), YV(u, "constructor", c), c.displayName = "GeneratorFunction", YV(u, a, "GeneratorFunction"), YV(d), YV(d, a, "Generator"), YV(d, r, function () {
    return this;
  }), YV(d, "toString", function () {
    return "[object Generator]";
  }), (qV = function () {
    return {
      w: o,
      m
    };
  })();
}

function YV(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  YV = function (e, t, n, r) {
    function o(t, n) {
      YV(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, YV(e, t, n, r);
}

function QV(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function ZV(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

const $V = function (e) {
  var t = e.termFor,
    n = e.items,
    r = e.availableTerms,
    a = e.handleToggle,
    o = e.handleAdd,
    i = e.handleDelete,
    l = e.title,
    c = e.description,
    u = e.deleteTitle,
    s = e.deleteDescription,
    d = e.showParent,
    m = function (e, t) {
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
          if ("string" == typeof e) return ZV(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ZV(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    p = m[0],
    f = m[1],
    v = (0, g.useRef)(null),
    y = (0, g.useRef)(null),
    _ = function () {
      var e,
        t = (e = qV().m(function e(t) {
          return qV().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return e.n = 1, o(t);
              case 1:
                f(!1);
              case 2:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              QV(o, r, a, i, l, "next", e);
            }
            function l(e) {
              QV(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function (e) {
        return t.apply(this, arguments);
      };
    }();
  return h().createElement(h().Fragment, null, l && h().createElement(h().Fragment, null, h().createElement(I.HeadingWP, {
    level: 4
  }, l), h().createElement(I.SpacerWP, {
    marginBottom: 1
  })), c && h().createElement(h().Fragment, null, h().createElement(I.TextWP, null, c)), h().createElement(I.SpacerWP, {
    marginBottom: 3
  }), h().createElement(I.SpacerWP, {
    marginBottom: 0,
    className: "".concat(0 === n.length ? "omlms-empty-category" : "")
  }, h().createElement("div", {
    style: {
      position: "relative"
    }
  }, h().createElement(I.ButtonWP, {
    variant: "primary",
    onClick: function () {
      return f(!p);
    },
    ref: y,
    icon: h().createElement(nf, null)
  }, (0, b.sprintf)((0, b.__)("Add %s", "ohmylms"), l)), p && h().createElement("div", {
    ref: v
  }, h().createElement(UV, {
    termFor: t,
    handleAdd: _,
    categories: n,
    showParent: d,
    setShowForm: f,
    showForm: p
  }))), 0 < n.length && h().createElement(h().Fragment, null, h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 4,
    marginTop: 5
  }, h().createElement(TV, {
    items: n,
    availableTerms: r,
    handleToggle: a,
    handleDelete: i,
    deleteTitle: u,
    deleteDescription: s
  }))))));
};

function KV(e) {
  return KV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, KV(e);
}

function JV(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function XV(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? JV(Object(n), !0).forEach(function (t) {
      eH(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : JV(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function eH(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != KV(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != KV(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == KV(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function tH() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return nH(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (nH(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, nH(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, nH(d, "constructor", u), nH(u, "constructor", c), c.displayName = "GeneratorFunction", nH(u, a, "GeneratorFunction"), nH(d), nH(d, a, "Generator"), nH(d, r, function () {
    return this;
  }), nH(d, "toString", function () {
    return "[object Generator]";
  }), (tH = function () {
    return {
      w: o,
      m
    };
  })();
}

function nH(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  nH = function (e, t, n, r) {
    function o(t, n) {
      nH(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, nH(e, t, n, r);
}

function rH(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function aH(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        rH(o, r, a, i, l, "next", e);
      }
      function l(e) {
        rH(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

var oH = function () {
  var e = (0, y.useDispatch)(T.default),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getAllCategories();
    }, []),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getTags();
    }, []),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseCategories();
    }, []),
    a = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseTags();
    }, []),
    o = (0, g.useCallback)(function (t, n) {
      e.setCourseCategories(t, n);
    }, [e]),
    i = function () {
      var t = aH(tH().m(function t(n) {
        var r;
        return tH().w(function (t) {
          for (;;) switch (t.n) {
            case 0:
              return r = {
                name: null == n ? void 0 : n.name,
                parent: null == n ? void 0 : n.parent
              }, t.n = 1, e.saveCourseCategory(r);
            case 1:
              return t.v, t.a(2, !0);
          }
        }, t);
      }));
      return function (e) {
        return t.apply(this, arguments);
      };
    }(),
    l = function () {
      var t = aH(tH().m(function t(n) {
        var r, a;
        return tH().w(function (t) {
          for (;;) switch (t.n) {
            case 0:
              a = XV(XV({}, n), {}, {
                id: null !== (r = n.id) && void 0 !== r ? r : n.term_id
              }), e.setCourseCategories(a, !1), e.deleteCourseCategory(a);
            case 1:
              return t.a(2);
          }
        }, t);
      }));
      return function (e) {
        return t.apply(this, arguments);
      };
    }(),
    c = (0, g.useCallback)(function (t, n) {
      n ? e.setCourseTags(t) : e.removeCourseTag(t);
    }, [e]),
    u = function () {
      var t = aH(tH().m(function t(n) {
        var r, a;
        return tH().w(function (t) {
          for (;;) switch (t.n) {
            case 0:
              return r = {
                name: null == n ? void 0 : n.name
              }, t.n = 1, e.saveCourseTag(r);
            case 1:
              a = t.v, c({
                id: null == a ? void 0 : a.term_id,
                name: null == a ? void 0 : a.name,
                children: []
              }, !0);
            case 2:
              return t.a(2);
          }
        }, t);
      }));
      return function (e) {
        return t.apply(this, arguments);
      };
    }(),
    s = function () {
      var t = aH(tH().m(function t(n) {
        var r, a;
        return tH().w(function (t) {
          for (;;) switch (t.n) {
            case 0:
              a = XV(XV({}, n), {}, {
                id: null !== (r = n.id) && void 0 !== r ? r : n.term_id
              }), e.removeCourseTag(a), e.deleteCourseTag(a);
            case 1:
              return t.a(2);
          }
        }, t);
      }));
      return function (e) {
        return t.apply(this, arguments);
      };
    }();
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    marginTop: 6,
    marginBottom: 6
  }, React.createElement(I.FlexWP, {
    gap: 6,
    align: "stretch"
  }, React.createElement(I.FlexItemWP, {
    flex: 1
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    fullHeight: !0
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement($V, {
    termFor: "category",
    items: t,
    availableTerms: r,
    handleToggle: o,
    handleAdd: i,
    handleDelete: l,
    title: (0, b.__)("Categories", "ohmylms"),
    description: (0, b.__)("Organize your courses in categories. Type the name of the category and press enter.", "ohmylms"),
    deleteTitle: (0, b.__)("Delete Category", "ohmylms"),
    deleteDescription: (0, b.__)("Are you sure you want to delete this category?", "ohmylms"),
    showParent: !0
  })))), React.createElement(I.FlexItemWP, {
    flex: 1
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    fullHeight: !0
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement($V, {
    termFor: "tag",
    items: n,
    availableTerms: a,
    handleToggle: c,
    handleAdd: u,
    handleDelete: s,
    title: (0, b.__)("Tags", "ohmylms"),
    description: (0, b.__)("Use a unique tag to identify your courses easily.", "ohmylms"),
    deleteTitle: (0, b.__)("Delete Tag", "ohmylms"),
    deleteDescription: (0, b.__)("Are you sure you want to delete this tag?", "ohmylms")
  }))))))));
};

const iH = (0, g.memo)(oH);

function lH(e, t) {
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
      if ("string" == typeof e) return cH(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? cH(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function cH(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var uH = function (e) {
  var t = e.date,
    n = e.onChange,
    r = e.placeholder,
    a = e.isInvalidDateCallback,
    o = e.disabled,
    i = lH((0, g.useState)(!1), 2),
    l = i[0],
    c = i[1],
    u = lH((0, g.useState)(t), 2),
    s = u[0],
    d = u[1];
  return (0, g.useEffect)(function () {
    t && d(t);
  }, [t]), React.createElement(React.Fragment, null, React.createElement(D.A, {
    variant: "secondary",
    onClick: function () {
      return c(!l);
    },
    disabled: o
  }, s ? aN()(s).format("Do MMMM, YYYY h:mm a") : (0, b.__)(null != r ? r : "Select Date", "ohmylms")), l && React.createElement(I.PopoverWP, {
    position: "bottom",
    onClose: function () {
      return c(!1);
    }
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    padding: "16px"
  }, React.createElement(q.DateTimePicker, {
    currentDate: s,
    onChange: function (e) {
      d(e), n(e);
    },
    isInvalidDate: a,
    is12Hour: !0
  }), React.createElement("div", {
    style: {
      marginTop: "10px",
      textAlign: "right"
    }
  }, React.createElement(D.A, {
    variant: "tertiary",
    onClick: function () {
      d(null), n(null), c(!1);
    }
  }, (0, b.__)("Clear", "ohmylms"))))));
};

const sH = (0, g.memo)(uH);

function dH(e, t) {
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
      if ("string" == typeof e) return mH(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? mH(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function mH(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

const pH = function (e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.onChange,
    a = dH((0, g.useState)(t), 2),
    o = a[0],
    i = a[1],
    l = dH((0, g.useState)(n), 2),
    c = l[0],
    u = l[1];
  return (0, g.useEffect)(function () {
    i(t);
  }, [t]), (0, g.useEffect)(function () {
    u(n);
  }, [n]), h().createElement(h().Fragment, null, h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, h().createElement(I.FlexWP, {
    justify: "space-between",
    align: "flex-start"
  }, h().createElement(I.FlexBlockWP, null, h().createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Course Schedule Start Date", "ohmylms")), h().createElement(I.SpacerWP, {
    marginBottom: 1
  }), h().createElement(I.TextWP, null, (0, b.__)("Set the start date for this cohort.", "ohmylms"))), h().createElement(I.FlexBlockWP, {
    className: "coupon-datetime-picker"
  }, h().createElement(I.FlexWP, {
    justify: "flex-end"
  }, h().createElement(sH, {
    date: o,
    onChange: function (e) {
      i(e), function (e) {
        var t = e,
          n = function (e) {
            if (!e) return e;
            if ("string" == typeof e) {
              var t = e.match(/^(\d{4})-(\d{2})-(\d{2})(T[\d:]+)?/);
              if (t) {
                var n = Number(t[1]),
                  r = Number(t[2]) - 1,
                  a = Number(t[3]),
                  o = t[4] || "",
                  i = new Date(n, r, a);
                i.setDate(i.getDate() + 1);
                var l = i.getFullYear(),
                  c = String(i.getMonth() + 1).padStart(2, "0"),
                  u = String(i.getDate()).padStart(2, "0");
                return "".concat(l, "-").concat(c, "-").concat(u).concat(o);
              }
              var s = new Date(e);
              return s.setDate(s.getDate() + 1), s;
            }
            if (e instanceof Date) {
              var d = new Date(e);
              return d.setDate(d.getDate() + 1), d;
            }
            return e;
          }(e);
        i(t), u(n), r(t, n);
      }(e);
    },
    isInvalidDateCallback: function (e) {
      var t = new Date();
      return t.setHours(0, 0, 0, 0), new Date(e) < t;
    },
    placeholder: (0, b.__)("Select Schedule Start")
  })))), h().createElement(I.SpacerWP, {
    marginBottom: 6
  }), h().createElement(I.FlexWP, {
    justify: "space-between",
    align: "flex-start"
  }, h().createElement(I.FlexBlockWP, null, h().createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Course Schedule End Date", "ohmylms")), h().createElement(I.SpacerWP, {
    marginBottom: 1
  }), h().createElement(I.TextWP, null, (0, b.__)("Set the end date for this cohort.", "ohmylms"))), h().createElement(I.FlexBlockWP, {
    className: "coupon-datetime-picker"
  }, h().createElement(I.FlexWP, {
    justify: "flex-end"
  }, h().createElement(sH, {
    date: c,
    onChange: function (e) {
      u(e), r(o, e);
    },
    isInvalidDateCallback: function (e) {
      var n = new Date(t || new Date());
      return n.setHours(0, 0, 0, 0), new Date(e) < n;
    },
    placeholder: (0, b.__)("Select Schedule End")
  })))))));
};

function fH(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
