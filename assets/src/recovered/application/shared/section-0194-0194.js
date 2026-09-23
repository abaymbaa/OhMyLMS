// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function d9(e) {
  return d9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, d9(e);
}

function m9(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function p9(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? m9(Object(n), !0).forEach(function (t) {
      f9(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m9(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function f9(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != d9(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != d9(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == d9(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

var v9 = {
    title: "",
    slug: "",
    description: "",
    visibility: "public",
    group_chat_enabled: !1
  },
  g9 = function (e) {
    var t = e.errors,
      n = (e.setErrors, e.validate);
    M().noConflict();
    var r = (0, y.useSelect)(function (e) {
        return e(T.default).selectCommunity();
      }, []),
      a = (0, y.useDispatch)(T.default).setCommunity,
      o = function (e) {
        return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
      },
      i = function (e, t, i) {
        var l = p9(p9({}, r), {}, f9({}, e, t));
        if (("name" === e || "title" === e) && t) {
          var c = o(t),
            u = r.slug || "";
          (!u || u === o(r.title || r.name)) && (l.slug = c);
        }
        "thumbnail" === e ? l.space_photo = i : "cover_image_url" === e && (l.cover_image = i), a(l), n(l);
      };
    return (0, g.useEffect)(function () {
      !function (e, t) {
        var n = p9({}, e),
          r = !1;
        for (var o in t) e && e.hasOwnProperty(o) && e[o] || (n[o] = t[o], r = !0);
        r && a(n);
      }(r, v9), n(r);
    }, []), React.createElement(React.Fragment, null, React.createElement(Pf, {
      title: (0, b.__)("Name", "ohmylms"),
      description: (0, b.__)("What would you like to call this community?", "ohmylms"),
      value: Ge(null == r ? void 0 : r.title),
      onChange: function (e) {
        return i("title", e);
      },
      error: null == t ? void 0 : t.title
    }), React.createElement(I.DividerWP, {
      marginStart: "2",
      marginEnd: "2"
    }), React.createElement(Pf, {
      title: (0, b.__)("Slug", "ohmylms"),
      description: (0, b.__)("The URL-friendly version of the name. This will be used in the community URL.", "ohmylms"),
      value: (null == r ? void 0 : r.slug) || "",
      onChange: function (e) {
        return i("slug", e);
      },
      placeholder: (0, b.__)("community-slug", "ohmylms"),
      error: null == t ? void 0 : t.slug
    }), React.createElement(I.DividerWP, {
      marginStart: "2",
      marginEnd: "2"
    }), React.createElement(Pf, {
      title: (0, b.__)("Description", "ohmylms"),
      description: (0, b.__)("Describe your space to help members understand its purpose.", "ohmylms"),
      value: Ge(null == r ? void 0 : r.description),
      onChange: function (e) {
        return i("description", e);
      },
      inputType: "textarea"
    }), React.createElement(I.DividerWP, {
      marginStart: "2",
      marginEnd: "2"
    }), React.createElement(I.SpacerWP, {
      padding: 4,
      marginBottom: 2
    }, React.createElement(L2, {
      title: (0, b.__)("Space Photo", "ohmylms"),
      description: (0, b.__)("Upload a photo that represents your community space.", "ohmylms"),
      handleChange: function (e, t) {
        return i("thumbnail", e, t);
      },
      handleRemove: function () {
        return i("thumbnail", null, null);
      },
      brandingImg: null == r ? void 0 : r.thumbnail,
      alertTitle: (0, b.__)("Remove Space Photo", "ohmylms"),
      alertDescription: (0, b.__)("Are you sure you want to remove this space photo?", "ohmylms"),
      showDivider: !1,
      maxWidth: "345px"
    })), React.createElement(I.DividerWP, {
      marginStart: "2",
      marginEnd: "2"
    }), React.createElement(I.SpacerWP, {
      padding: 4,
      marginBottom: 2
    }, React.createElement(L2, {
      title: (0, b.__)("Cover Image", "ohmylms"),
      description: (0, b.__)("Upload a photo that represents your community space.", "ohmylms"),
      handleChange: function (e, t) {
        return i("cover_image_url", e, t);
      },
      handleRemove: function () {
        return i("cover_image_url", null, null);
      },
      brandingImg: null == r ? void 0 : r.cover_image_url,
      alertTitle: (0, b.__)("Remove Cover Image", "ohmylms"),
      alertDescription: (0, b.__)("Are you sure you want to remove this cover image?", "ohmylms"),
      showDivider: !1,
      maxWidth: "345px"
    })));
  };

const h9 = (0, g.memo)(g9);

function y9(e) {
  return y9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, y9(e);
}

function b9() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return _9(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (_9(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, _9(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, _9(d, "constructor", u), _9(u, "constructor", c), c.displayName = "GeneratorFunction", _9(u, a, "GeneratorFunction"), _9(d), _9(d, a, "Generator"), _9(d, r, function () {
    return this;
  }), _9(d, "toString", function () {
    return "[object Generator]";
  }), (b9 = function () {
    return {
      w: o,
      m
    };
  })();
}

function _9(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  _9 = function (e, t, n, r) {
    function o(t, n) {
      _9(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _9(e, t, n, r);
}

function w9(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function E9(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        w9(o, r, a, i, l, "next", e);
      }
      function l(e) {
        w9(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function S9(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function R9(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? S9(Object(n), !0).forEach(function (t) {
      x9(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S9(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function x9(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != y9(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != y9(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == y9(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function C9(e, t) {
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
      if ("string" == typeof e) return P9(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P9(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function P9(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var O9 = function () {
  var e = (0, y.useSelect)(function (e) {
      return e(T.default).selectCommunity();
    }, []),
    t = (0, y.useDispatch)(T.default).setCommunity,
    n = C9((0, g.useState)([]), 2),
    r = n[0],
    a = n[1],
    o = C9((0, g.useState)(null), 2),
    i = o[0],
    c = o[1],
    u = C9((0, g.useState)(!1), 2),
    s = u[0],
    d = u[1],
    m = function (n, r, a) {
      var o = R9({}, e);
      o[n] = a ? R9(R9({}, o[n]), {}, x9({}, a, r)) : r, t(o);
    },
    p = function (e) {
      return e && Array.isArray(e) ? e.filter(function (e) {
        return "yes" !== (null == e ? void 0 : e.has_community);
      }).map(function (e) {
        return {
          id: null == e ? void 0 : e.id,
          name: null == e ? void 0 : e.name,
          image_src: (null == e ? void 0 : e.image_src) || null,
          date_created: (null == e ? void 0 : e.date_created) || {}
        };
      }) : [];
    },
    f = function () {
      var e = E9(b9().m(function e(t) {
        var n, r, o;
        return b9().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, d(!0), e.n = 1, l()({
                path: "/creator-lms/v1/courses?search=".concat(t, "&post_status=publish"),
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 1:
              if (r = e.v) {
                e.n = 2;
                break;
              }
              r = [];
            case 2:
              n = p(r), a(n.map(function (e) {
                return {
                  label: e.name,
                  value: e.id
                };
              })), e.n = 4;
              break;
            case 3:
              e.p = 3, o = e.v, console.error(o);
            case 4:
              return e.p = 4, d(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[0, 3, 4, 5]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    v = function () {
      var e = E9(b9().m(function e(t) {
        var n, r, a;
        return b9().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, e.n = 1, l()({
                path: "/creator-lms/v1/courses/".concat(t),
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 1:
              (n = e.v) && (r = {
                id: n.id,
                name: n.name
              }, c(r)), e.n = 3;
              break;
            case 2:
              e.p = 2, a = e.v, console.error("Error fetching course by ID:", a);
            case 3:
              return e.a(2);
          }
        }, e, null, [[0, 2]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    h = (0, g.useCallback)(function (e) {
      if (e) {
        var t = {
          id: e.value,
          name: e.label
        };
        c(t), m("parent_id", e.value);
      } else c(null), m("parent_id", null);
    }, [e]),
    _ = (0, g.useCallback)(function (e) {
      f(e);
    }, []);
  return (0, g.useEffect)(function () {
    f("");
  }, []), (0, g.useEffect)(function () {
    null != e && e.parent_id && !i && v(e.parent_id);
  }, [null == e ? void 0 : e.parent_id, i]), React.createElement(I.SpacerWP, {
    marginTop: 4
  }, React.createElement(Ea, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    margin: 0
  }, React.createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Course", "ohmylms")), React.createElement(I.SpacerWP, null), React.createElement(I.AdvancedSelectWP, {
    isClearable: !0,
    closeMenuOnSelect: !0,
    value: i ? {
      label: i.name,
      value: i.id
    } : null,
    options: r,
    onChange: h,
    isDisabled: s,
    onSearch: _,
    placeholder: (0, b.__)("Select a course...", "ohmylms")
  }))));
};

const k9 = (0, g.memo)(O9);

function j9() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return A9(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (A9(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, A9(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, A9(d, "constructor", u), A9(u, "constructor", c), c.displayName = "GeneratorFunction", A9(u, a, "GeneratorFunction"), A9(d), A9(d, a, "Generator"), A9(d, r, function () {
    return this;
  }), A9(d, "toString", function () {
    return "[object Generator]";
  }), (j9 = function () {
    return {
      w: o,
      m
    };
  })();
}

function A9(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  A9 = function (e, t, n, r) {
    function o(t, n) {
      A9(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, A9(e, t, n, r);
}

function M9(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function T9(e, t) {
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
      if ("string" == typeof e) return I9(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? I9(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function I9(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var F9 = function (e) {
  var t = e.isOpen,
    n = e.setIsOpen,
    r = (e.isFetch, e.setIsFetch, e.isLoading),
    a = (0, y.useDispatch)(T.default),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).selectCommunity();
    }, []),
    i = (0, y.useDispatch)(T.default).setCommunity,
    l = T9((0, g.useState)(!1), 2),
    c = l[0],
    u = l[1],
    s = T9((0, g.useState)("1"), 2),
    d = s[0],
    m = s[1],
    p = T9((0, g.useState)({}), 2),
    f = p[0],
    v = p[1],
    h = T9((0, g.useState)(!1), 2),
    _ = h[0],
    w = h[1],
    E = function (e) {
      var t,
        n,
        r = {};
      return null != e && null !== (t = e.title) && void 0 !== t && t.trim() || (r.title = (0, b.__)("Name is required.", "ohmylms")), null != e && null !== (n = e.slug) && void 0 !== n && n.trim() ? /^[a-z0-9-]+$/.test(e.slug) ? e.slug.length < 3 && (r.slug = (0, b.__)("Slug must be at least 3 characters long.", "ohmylms")) : r.slug = (0, b.__)("Slug can only contain lowercase letters, numbers, and hyphens.", "ohmylms") : r.slug = (0, b.__)("Slug is required.", "ohmylms"), v(r), 0 === Object.keys(r).length;
    },
    S = function () {
      n(!1), v({});
    },
    R = function () {
      var t,
        r = (t = j9().m(function t() {
          var r, i;
          return j9().w(function (t) {
            for (;;) switch (t.p = t.n) {
              case 0:
                if ("1" !== d) {
                  t.n = 1;
                  break;
                }
                return E(o) && m("2"), t.a(2);
              case 1:
                if (c) {
                  t.n = 7;
                  break;
                }
                if (L.isProActive) {
                  t.n = 2;
                  break;
                }
                return w(!0), t.a(2);
              case 2:
                return u(!0), t.p = 3, t.n = 4, a.createCommunity(o);
              case 4:
                "success" === (null == (r = t.v) ? void 0 : r.status) && (n(!1), e.onSuccess && e.onSuccess(), v({})), t.n = 6;
                break;
              case 5:
                t.p = 5, i = t.v, console.error("Error creating community:", i);
              case 6:
                return t.p = 6, u(!1), t.f(6);
              case 7:
                return t.a(2);
            }
          }, t, null, [[3, 5, 6, 7]]);
        }), function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = t.apply(e, n);
            function i(e) {
              M9(o, r, a, i, l, "next", e);
            }
            function l(e) {
              M9(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return r.apply(this, arguments);
      };
    }();
  (0, g.useEffect)(function () {
    return function () {
      i({});
    };
  }, []), (0, g.useEffect)(function () {
    var e = !0;
    return e && E(o), function () {
      e = !1;
    };
  }, [o]);
  var x = [{
      label: React.createElement(I.TextWP, {
        as: "span",
        size: "16",
        weight: "500"
      }, (0, b.__)("Details", "ohmylms"), " "),
      key: "1",
      children: React.createElement(I.CardWP, {
        isBorderless: !0
      }, React.createElement(I.SpacerWP, {
        marginBottom: 0,
        padding: 3,
        marginTop: 4
      }, React.createElement(h9, {
        errors: f,
        setErrors: v,
        validate: E
      })))
    }, {
      label: React.createElement(I.TextWP, {
        as: "span",
        size: "16",
        weight: "500"
      }, (0, b.__)("Courses", "ohmylms"), " "),
      key: "2",
      children: React.createElement(I.CardWP, {
        isBorderless: !0
      }, React.createElement(I.SpacerWP, {
        marginBottom: 0,
        padding: 3,
        marginTop: 4
      }, React.createElement(k9, null)))
    }],
    C = (0, g.useMemo)(function () {
      return {
        width: "830px",
        background: "#F5F5F5"
      };
    }, []),
    P = Object.keys(f).length > 0;
  return React.createElement(React.Fragment, null, t && React.createElement(I.ModalWP, {
    title: (0, b.__)("Add Community", "ohmylms"),
    style: C,
    onRequestClose: S,
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0,
    className: "omlms-full-height-modal",
    size: "fill"
  }, r ? React.createElement(I.SkeletonWP, {
    rows: 10
  }) : React.createElement(React.Fragment, null, React.createElement(I.TabsWP, {
    items: x,
    activekey: d,
    onChange: function (e) {
      return m(e);
    },
    className: "omlms-tab-has-custom-navigation"
  }), React.createElement(I.DividerWP, {
    marginStart: 4
  }), React.createElement(I.SpacerWP, {
    marginTop: 4
  }, React.createElement(I.FlexWP, {
    justify: "flex-end",
    align: "center",
    gap: 2
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: S
  }, (0, b.__)("Cancel", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: R,
    disabled: P || c,
    loading: c
  }, "1" === d ? (0, b.__)("Next", "ohmylms") : c ? (0, b.__)("Creating...", "ohmylms") : (0, b.__)("Save", "ohmylms"))))), _ && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: _,
    onClose: w
  }))));
};

const N9 = (0, g.memo)(F9);

function D9() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return W9(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (W9(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, W9(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, W9(d, "constructor", u), W9(u, "constructor", c), c.displayName = "GeneratorFunction", W9(u, a, "GeneratorFunction"), W9(d), W9(d, a, "Generator"), W9(d, r, function () {
    return this;
  }), W9(d, "toString", function () {
    return "[object Generator]";
  }), (D9 = function () {
    return {
      w: o,
      m
    };
  })();
}

function W9(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  W9 = function (e, t, n, r) {
    function o(t, n) {
      W9(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, W9(e, t, n, r);
}

function z9(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function B9(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        z9(o, r, a, i, l, "next", e);
      }
      function l(e) {
        z9(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
