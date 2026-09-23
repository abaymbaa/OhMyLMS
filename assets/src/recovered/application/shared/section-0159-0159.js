// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var B3 = function (e) {
  var t = e.data,
    n = e.isOpen,
    r = e.onClose,
    a = e.fetchData,
    o = e.setItems,
    i = (e.levelList, e.setLevel, {
      name: "",
      description: "",
      color: "#6e42d3",
      textColor: "#ffffff",
      rules: [{
        dataLabel: "Points",
        dataValue: "points",
        dataFieldType: "select",
        compareSign: ">=",
        compareData: 0,
        compareDataFieldType: "input"
      }]
    }),
    c = D3((0, g.useState)(F3({}, i)), 2),
    u = c[0],
    s = c[1],
    d = D3((0, g.useState)(!1), 2),
    m = d[0],
    p = d[1],
    f = (0, z.A)(),
    v = f.openNotificationWithIcon,
    h = f.contextHolder,
    _ = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    w = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    E = function () {
      m || r(!1);
    },
    S = function (e, t) {
      s(function (n) {
        return F3(F3({}, n), {}, N3({}, e, t));
      });
    },
    R = function () {
      var e = T3(j3().m(function e() {
        var t;
        return j3().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, p(!0), e.n = 1, l()({
                path: "/creator-lms/v1/engagement/levels",
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(u)
              });
            case 1:
              e.v.success && (v("success", (0, b.__)("Level updated successfully!", "ohmylms")), o(function (e) {
                return e.map(function (e) {
                  return e.slug === u.slug ? F3(F3({}, e), u) : e;
                });
              })), e.n = 3;
              break;
            case 2:
              e.p = 2, t = e.v, console.error(t);
            case 3:
              return e.p = 3, p(!1), e.f(3);
            case 4:
              return e.a(2);
          }
        }, e, null, [[0, 2, 3, 4]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    x = function () {
      var e = T3(j3().m(function e() {
        return j3().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, p(!0), e.n = 1, l()({
                path: "/creator-lms/v1/engagement/levels",
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(u)
              });
            case 1:
              e.v.success && (v("success", (0, b.__)("Level created successfully!", "ohmylms")), o(function (e) {
                return [u].concat(k3(e));
              })), e.n = 3;
              break;
            case 2:
              e.p = 2, e.v, v("error", (0, b.__)("Something went wrong!", "ohmylms"));
            case 3:
              return e.p = 3, p(!1), r(!1), e.f(3);
            case 4:
              return e.a(2);
          }
        }, e, null, [[0, 2, 3, 4]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    C = function () {
      var e = T3(j3().m(function e() {
        var n, r, o, i;
        return j3().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (u.name && "" !== u.name.trim()) {
                e.n = 1;
                break;
              }
              return v("error", (0, b.__)("The fields cannot be empty.", "ohmylms")), e.a(2);
            case 1:
              n = O3(u.rules), e.p = 2, n.s();
            case 3:
              if ((r = n.n()).done) {
                e.n = 5;
                break;
              }
              if (!(null === (o = r.value).compareData || "" === o.compareData || o.compareData < 0)) {
                e.n = 4;
                break;
              }
              return v("error", (0, b.__)("The fields cannot be empty or negative.", "ohmylms")), e.a(2);
            case 4:
              e.n = 3;
              break;
            case 5:
              e.n = 7;
              break;
            case 6:
              e.p = 6, i = e.v, n.e(i);
            case 7:
              return e.p = 7, n.f(), e.f(7);
            case 8:
              if (null == t || !t.slug) {
                e.n = 10;
                break;
              }
              return e.n = 9, R();
            case 9:
              e.n = 11;
              break;
            case 10:
              return e.n = 11, x();
            case 11:
              a();
            case 12:
              return e.a(2);
          }
        }, e, null, [[2, 6, 7, 8]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  if ((0, g.useEffect)(function () {
    t && s(t);
  }, [t]), (0, g.useEffect)(function () {
    !m && _ && v(w, _);
  }, [_]), (0, g.useEffect)(function () {
    n && s(t || F3({}, i));
  }, [t, n]), !n) return null;
  var P = !u.name || "" === u.name.trim() || u.rules.some(function (e) {
    return null === e.compareData || "" === e.compareData || e.compareData < 0;
  });
  return React.createElement(React.Fragment, null, h, React.createElement(I.ModalWP, {
    title: null != t && t.slug ? (0, b.__)("Edit Learner Level", "ohmylms") : (0, b.__)("Add New Learner Level", "ohmylms"),
    onRequestClose: E,
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0,
    size: "large"
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 3
  }, React.createElement(Pf, {
    title: (0, b.__)("Level Name", "ohmylms"),
    description: (0, b.__)("Give this level a meaning name learners will recognize.", "ohmylms"),
    inputType: "text",
    value: null == u ? void 0 : u.name,
    onChange: function (e) {
      return S("name", e);
    },
    placeholder: (0, b.__)("Enter level name", "ohmylms"),
    required: !0
  }), React.createElement(Pf, {
    title: (0, b.__)("Level Description", "ohmylms"),
    description: (0, b.__)("Explain what this level represents or how it’s achieved.", "ohmylms"),
    inputType: "textarea",
    value: null == u ? void 0 : u.description,
    onChange: function (e) {
      return S("description", e);
    },
    placeholder: (0, b.__)("Enter level description", "ohmylms")
  }), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }, React.createElement(FK, {
    title: (0, b.__)("BackgroundColor", "ohmylms"),
    description: (0, b.__)("Choose a background color for the level.", "ohmylms"),
    initialColor: null == u ? void 0 : u.color,
    onChange: function (e) {
      return S("color", e);
    },
    variant: "secondary",
    isBorderless: !0,
    isShowResetBtn: !0,
    defaultColor: "#6e42d3"
  })), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }, React.createElement(FK, {
    title: (0, b.__)("Text Color", "ohmylms"),
    description: (0, b.__)("Choose a text color for the level.", "ohmylms"),
    initialColor: null == u ? void 0 : u.textColor,
    onChange: function (e) {
      return S("textColor", e);
    },
    variant: "secondary",
    isBorderless: !0,
    isShowResetBtn: !0,
    defaultColor: "#ffffff"
  })), React.createElement(C3, {
    rules: null == u ? void 0 : u.rules,
    setRules: function (e) {
      return S("rules", e);
    }
  }))), React.createElement(I.SpacerWP, {
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
    disabled: P,
    onClick: C,
    isBusy: m
  }, null != t && t.slug ? (0, b.__)("Update", "ohmylms") : (0, b.__)("Create", "ohmylms"))))));
};

const L3 = (0, g.memo)(B3);

function V3() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return H3(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (H3(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, H3(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, H3(d, "constructor", u), H3(u, "constructor", c), c.displayName = "GeneratorFunction", H3(u, a, "GeneratorFunction"), H3(d), H3(d, a, "Generator"), H3(d, r, function () {
    return this;
  }), H3(d, "toString", function () {
    return "[object Generator]";
  }), (V3 = function () {
    return {
      w: o,
      m
    };
  })();
}

function H3(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  H3 = function (e, t, n, r) {
    function o(t, n) {
      H3(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, H3(e, t, n, r);
}

function G3(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function U3(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        G3(o, r, a, i, l, "next", e);
      }
      function l(e) {
        G3(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function q3(e, t) {
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
  }(e, t) || Y3(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Y3(e, t) {
  if (e) {
    if ("string" == typeof e) return Q3(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Q3(e, t) : void 0;
  }
}

function Q3(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Z3 = function (e) {
  var t = e.setLevelList,
    n = q3((0, g.useState)([]), 2),
    r = n[0],
    a = n[1],
    o = q3((0, g.useState)(!1), 2),
    i = o[0],
    c = o[1],
    u = q3((0, g.useState)(!1), 2),
    s = u[0],
    d = u[1],
    m = q3((0, g.useState)(null), 2),
    p = m[0],
    f = m[1],
    v = q3((0, g.useState)(null), 2),
    h = v[0],
    _ = v[1],
    w = q3((0, g.useState)(!1), 2),
    E = w[0],
    S = w[1],
    R = (0, z.A)(),
    x = R.openNotificationWithIcon,
    C = R.contextHolder,
    P = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    O = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    k = (0, g.useRef)(null),
    j = (0, g.useRef)(null),
    A = function (e) {
      e.target.classList.remove("grabbing");
    },
    M = function (e) {
      e.preventDefault(), k.current = null, j.current = null;
    },
    F = function (e) {
      e.preventDefault();
    },
    N = [{
      title: (0, b.__)("Level Name", "ohmylms"),
      dataIndex: "name",
      key: "name",
      sorter: !0,
      width: "90%",
      render: function (e, t) {
        return React.createElement(I.FlexWP, {
          gap: 4,
          align: "start",
          justify: "start",
          style: {
            cursor: "move"
          }
        }, React.createElement(q.ColorIndicator, {
          colorValue: t.color
        }), React.createElement(I.TextWP, {
          as: "span",
          color: "#000d25",
          size: 16,
          numberOfLines: 2,
          truncate: !0
        }, Ge(t.name)));
      }
    }, {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: null,
      render: function (e, t) {
        return React.createElement(I.DropdownMenuWP, {
          controls: [{
            title: (0, b.__)("Edit", "ohmylms"),
            onClick: function () {
              return D(t);
            },
            icon: React.createElement("span", null, React.createElement(pG.A, null))
          }, {
            title: (0, b.__)("Delete", "ohmylms"),
            onClick: function () {
              return W(null == t ? void 0 : t.slug);
            },
            icon: React.createElement(We, null)
          }],
          icon: React.createElement(q.Icon, {
            icon: Ne.A
          })
        });
      }
    }],
    D = function (e) {
      f(e), d(!0);
    },
    W = function (e) {
      S(!0), _(e);
    },
    B = function () {
      var e = U3(V3().m(function e() {
        var t, n, a;
        return V3().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, c(!0), t = r.filter(function (e) {
                return e.slug !== h;
              }), e.n = 1, l()({
                path: "/creator-lms/v1/engagement/levels",
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(t)
              });
            case 1:
              null != (n = e.v) && n.success && (L(), S(!1), x("success", (0, b.__)("Level deleted successfully!", "ohmylms"))), e.n = 3;
              break;
            case 2:
              e.p = 2, a = e.v, console.error("Error deleting level:", a);
            case 3:
              return e.p = 3, c(!1), e.f(3);
            case 4:
              return e.a(2);
          }
        }, e, null, [[0, 2, 3, 4]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    L = function () {
      var e = U3(V3().m(function e() {
        var n, r;
        return V3().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, c(!0), e.n = 1, l()({
                path: "creator-lms/v1/engagement/levels"
              });
            case 1:
              n = e.v, a(n), t(n), e.n = 3;
              break;
            case 2:
              e.p = 2, r = e.v, console.error(r);
            case 3:
              return e.p = 3, c(!1), e.f(3);
            case 4:
              return e.a(2);
          }
        }, e, null, [[0, 2, 3, 4]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && L(), function () {
      e = !1;
    };
  }, []), (0, g.useEffect)(function () {
    P && x(O, P);
  }, [P]), (0, g.useEffect)(function () {
    s || (f(null), _(null));
  }, [s]), React.createElement(React.Fragment, null, C, React.createElement(I.CardWP, {
    isBorderless: !0,
    fullWidth: !0
  }, React.createElement(I.SpacerWP, {
    padding: 5
  }, React.createElement(I.SpacerWP, {
    marginBottom: 4
  }, React.createElement(I.FlexWP, {
    gap: 3,
    justify: "flex-end"
  }, React.createElement(lf, {
    label: (0, b.__)("Add Level", "ohmylms"),
    onClick: function () {
      return d(!0);
    }
  }))), React.createElement(I.TableWP, {
    rowKey: "id",
    columns: N,
    dataSource: r || [],
    loading: i,
    scroll: {
      x: "max-content"
    },
    onRow: function (e, n) {
      return {
        draggable: !0,
        onDragStart: function (e) {
          return function (e, t) {
            k.current = t, e.target.classList.add("grabbing");
          }(e, n);
        },
        onDragEnter: function (e) {
          return function (e, n) {
            e.preventDefault(), j.current = n;
            var o = function (e) {
                return function (e) {
                  if (Array.isArray(e)) return Q3(e);
                }(e) || function (e) {
                  if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                }(e) || Y3(e) || function () {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
              }(r),
              i = o[k.current];
            o.splice(k.current, 1), o.splice(j.current, 0, i), k.current = j.current, j.current = null, a(o), t(o);
          }(e, n);
        },
        onDragEnd: A,
        onDrop: M,
        onDragOver: F
      };
    },
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No level yet!", "ohmylms"),
        description: (0, b.__)("Start building your first level and it'll show up here as soon as you hit publish.", "ohmylms")
      })
    }
  }))), s && React.createElement(L3, {
    data: p,
    isOpen: s,
    onClose: d,
    badgeList: r,
    setItems: a,
    fetchData: L
  }), E && React.createElement(Ie, {
    title: (0, b.__)("Delete Level", "ohmylms"),
    description: (0, b.__)("Are you sure you want to delete this level?", "ohmylms"),
    onClose: function () {
      S(!1);
    },
    onDelete: B,
    isOpen: E,
    isDelete: !0
  }));
};

const $3 = (0, g.memo)(Z3);

function K3(e) {
  return K3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, K3(e);
}

function J3(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function X3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? J3(Object(n), !0).forEach(function (t) {
      e5(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J3(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function e5(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != K3(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != K3(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == K3(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function t5() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return n5(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (n5(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, n5(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, n5(d, "constructor", u), n5(u, "constructor", c), c.displayName = "GeneratorFunction", n5(u, a, "GeneratorFunction"), n5(d), n5(d, a, "Generator"), n5(d, r, function () {
    return this;
  }), n5(d, "toString", function () {
    return "[object Generator]";
  }), (t5 = function () {
    return {
      w: o,
      m
    };
  })();
}

function n5(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  n5 = function (e, t, n, r) {
    function o(t, n) {
      n5(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, n5(e, t, n, r);
}

function r5(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function a5(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        r5(o, r, a, i, l, "next", e);
      }
      function l(e) {
        r5(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function o5(e, t) {
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
      if ("string" == typeof e) return i5(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i5(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function i5(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var l5 = function () {
  var e = (0, L.useIsPro)(),
    t = (0, y.useDispatch)(T.default),
    n = o5((0, g.useState)({
      enable: !1,
      rules: [{
        levelId: 0,
        settings: [{
          dataLabel: "Points",
          dataValue: "points",
          dataFieldType: "select",
          compareSign: ">=",
          compareData: 100,
          compareDataFieldType: "input"
        }]
      }]
    }), 2),
    r = n[0],
    a = n[1],
    o = o5((0, g.useState)([]), 2),
    i = o[0],
    c = o[1],
    u = (0, z.A)(),
    s = u.openNotificationWithIcon,
    d = u.contextHolder,
    m = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    p = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    f = o5((0, g.useState)(!1), 2),
    v = f[0],
    h = f[1],
    _ = o5((0, g.useState)(!1), 2),
    w = _[0],
    E = _[1],
    S = o5((0, g.useState)(!1), 2),
    R = S[0],
    x = S[1];
  (0, g.useEffect)(function () {
    var t = function () {
      var e = a5(t5().m(function e() {
        var t;
        return t5().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              return h(!0), e.n = 1, l()({
                path: "creator-lms/v1/engagement/settings/level"
              });
            case 1:
              t = e.v, a(t || r), h(!1);
            case 2:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
    e && t();
  }, []), (0, g.useEffect)(function () {
    !v && m && s(p, m);
  }, [m]);
  var C = function () {
    var n = a5(t5().m(function n() {
      var a;
      return t5().w(function (n) {
        for (;;) switch (n.p = n.n) {
          case 0:
            if (e) {
              n.n = 1;
              break;
            }
            return n.a(2);
          case 1:
            return t.setLoadingSetting(!0), E(!0), n.p = 2, a = X3({}, r), 0 < i.length && (a.levels = i), n.n = 3, l()({
              path: "/creator-lms/v1/engagement/settings/level",
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(a)
            });
          case 3:
            s("success", (0, b.__)("Settings saved successfully.", "ohmylms")), n.n = 5;
            break;
          case 4:
            n.p = 4, n.v, s("error", (0, b.__)("Something went wrong.", "ohmylms"));
          case 5:
            return n.p = 5, t.setLoadingSetting(!1), E(!1), n.f(5);
          case 6:
            return n.a(2);
        }
      }, n, null, [[2, 4, 5, 6]]);
    }));
    return function () {
      return n.apply(this, arguments);
    };
  }();
  return (0, g.useEffect)(function () {
    !v && m && s(p, m);
  }, [m]), v ? React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    marginTop: 2.5,
    padding: 6
  }, React.createElement(I.SkeletonWP, {
    active: !0,
    rows: 15
  }))) : React.createElement(React.Fragment, null, d, React.createElement(I.ProOverlayWP, {
    title: (0, b.__)("Level is available in the OhMyLMS version. Upgrade to Pro today to unlock this and more powerful features.", "ohmylms")
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 0,
    marginTop: 2.5,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "flex-start",
    direction: "column",
    gap: 3
  }, React.createElement($3, {
    setLevelList: c
  })))), React.createElement(I.SpacerWP, {
    paddingTop: 6,
    paddingBottom: 25
  }, React.createElement(I.FlexWP, {
    justify: "flex-end"
  }, React.createElement(I.ButtonWP, {
    variant: "primary",
    size: "md",
    onClick: C,
    isBusy: w
  }, (0, b.__)("Save", "ohmylms")))), R && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: R,
    onClose: x
  })));
};

const c5 = (0, g.memo)(l5);

function u5(e) {
  return u5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, u5(e);
}
