// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Wn = function (e) {
  var t = e.height,
    n = void 0 === t ? "22" : t,
    r = e.width,
    a = void 0 === r ? "21" : r;
  return h().createElement(h().Fragment, null, h().createElement("svg", {
    fill: "none",
    width: a,
    height: n,
    viewBox: "0 0 21 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, h().createElement("path", {
    fill: "#f85656",
    fillRule: "evenodd",
    d: "M8.75 9.27c.483 0 .875.392.875.875v4.375a.875.875 0 01-1.75 0v-4.375c0-.483.392-.875.875-.875zm3.5 0c.483 0 .875.392.875.875v4.375a.875.875 0 01-1.75 0v-4.375c0-.483.392-.875.875-.875z",
    clipRule: "evenodd"
  }), h().createElement("path", {
    fill: "#f85656",
    fillRule: "evenodd",
    d: "M8.75 2.27a2.625 2.625 0 00-2.625 2.625h-3.5a.875.875 0 000 1.75H3.5v10.5a2.625 2.625 0 002.625 2.625h8.75a2.625 2.625 0 002.625-2.625v-10.5h.875a.875.875 0 000-1.75h-3.5A2.625 2.625 0 0012.25 2.27h-3.5zm4.375 2.625a.875.875 0 00-.875-.875h-3.5a.875.875 0 00-.875.875h5.25zm-7 1.75H5.25v10.5c0 .483.392.875.875.875h8.75a.875.875 0 00.875-.875v-10.5H6.125z",
    clipRule: "evenodd"
  })));
};

const zn = (0, g.memo)(Wn);

var Bn = ["label", "className", "onDelete", "onCancel", "onClick", "alertTitle", "alertDescription"];

function Ln() {
  return Ln = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ln.apply(null, arguments);
}

function Vn(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Hn = function (e) {
  var t = e.label,
    n = void 0 === t ? (0, b.__)("Delete", "ohmylms") : t,
    r = e.className,
    a = void 0 === r ? "" : r,
    o = e.onDelete,
    i = e.onCancel,
    l = e.onClick,
    c = e.alertTitle,
    u = void 0 === c ? (0, b.__)("Delete", "ohmylms") : c,
    s = e.alertDescription,
    d = void 0 === s ? (0, b.__)("Are you sure you want to delete this?", "ohmylms") : s,
    m = function (e, t) {
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
    }(e, Bn),
    p = function (e, t) {
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
          if ("string" == typeof e) return Vn(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vn(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    f = p[0],
    v = p[1],
    y = (0, g.useCallback)(function () {
      v(!0), l && l();
    }, [l]),
    _ = (0, g.useCallback)(function () {
      v(!1), o && o();
    }, [o]),
    w = (0, g.useCallback)(function () {
      v(!1), i && i();
    }, [i]);
  return h().createElement(h().Fragment, null, h().createElement(I.ButtonWP, Ln({
    variant: "text",
    title: n,
    className: "omlms-outline-delete-button ".concat(a),
    icon: h().createElement(zn, null),
    onClick: y
  }, m), n), f && h().createElement(Ie, {
    title: u,
    description: d,
    onClose: w,
    onDelete: _,
    isOpen: f,
    className: "omlms-outline-delete-alert",
    isDelete: !0
  }));
};

const Gn = (0, g.memo)(Hn);

function Un(e) {
  return Un = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Un(e);
}

function qn(e) {
  return function (e) {
    if (Array.isArray(e)) return er(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || Xn(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Yn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function Qn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Yn(Object(n), !0).forEach(function (t) {
      Zn(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yn(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function Zn(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Un(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Un(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Un(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function $n() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Kn(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Kn(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Kn(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Kn(d, "constructor", u), Kn(u, "constructor", c), c.displayName = "GeneratorFunction", Kn(u, a, "GeneratorFunction"), Kn(d), Kn(d, a, "Generator"), Kn(d, r, function () {
    return this;
  }), Kn(d, "toString", function () {
    return "[object Generator]";
  }), ($n = function () {
    return {
      w: o,
      m
    };
  })();
}

function Kn(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Kn = function (e, t, n, r) {
    function o(t, n) {
      Kn(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Kn(e, t, n, r);
}

function Jn(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Xn(e, t) {
  if (e) {
    if ("string" == typeof e) return er(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? er(e, t) : void 0;
  }
}

function er(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var tr = function (e) {
  var t,
    n,
    r,
    a,
    o,
    i,
    c,
    u,
    s = (0, L.useIsPro)(),
    d = e.lesson,
    m = e.chapterId,
    p = e.setOpenModal,
    f = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseChapters();
    }, []).byId,
    v = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseChaptersContent();
    }, []),
    h = f && f[m],
    _ = function (e, t) {
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
      }(e, t) || Xn(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    w = _[0],
    E = _[1],
    S = (0, y.useDispatch)(T.default),
    R = "cohort-based" === (0, y.useSelect)(function (e) {
      return e(T.default).getCourseType();
    }, []),
    x = function () {
      var e,
        t = (e = $n().m(function e() {
          var t,
            n,
            r,
            a,
            o,
            i,
            c = arguments;
          return $n().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return t = c.length > 0 && void 0 !== c[0] ? c[0] : "", e.n = 1, l()({
                  path: "/creator-lms/v1/chapters/".concat(m, "/search-contents?term=").concat(t),
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json"
                  }
                });
              case 1:
                return n = e.v, r = null == h ? void 0 : h.content.map(String), a = r.indexOf(String(d.id)), o = n.data.filter(function (e) {
                  return (null == e ? void 0 : e.value) != d.id && r.indexOf(String(null == e ? void 0 : e.value)) < a;
                }), i = o.filter(function (e) {
                  var t, n, r, a, o;
                  return !((null !== (t = null == v ? void 0 : v.byId) && void 0 !== t ? t : null == v ? void 0 : v.byId[e.value]) && null != v && null !== (n = v.byId[e.value]) && void 0 !== n && n.prerequisites && null != v && null !== (r = v.byId[e.value]) && void 0 !== r && null !== (r = r.prerequisites) && void 0 !== r && r.enable && (null == v || null === (a = v.byId[e.value]) || void 0 === a || null === (a = a.prerequisites) || void 0 === a || null === (a = a.data) || void 0 === a ? void 0 : a.length) > 0 && (null == v || null === (o = v.byId[e.value]) || void 0 === o || null === (o = o.prerequisites) || void 0 === o ? void 0 : o.data).some(function (e) {
                    return e.value == d.id;
                  }));
                }), e.a(2, {
                  data: i
                });
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Jn(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Jn(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    C = (0, g.useCallback)(function () {
      null != d && d.id && (S.deleteLessonFromChapter(null == d ? void 0 : d.id, m), p(!1));
    }, [m, d, S]),
    P = (0, g.useCallback)(function (e) {
      Number(e) < 1 || S.setLesson(Qn(Qn({}, d), {}, {
        drip_settings: Qn(Qn({}, d.drip_settings), {}, {
          days: e
        })
      }));
    }, [S, d]);
  return React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    paddingX: 5,
    paddingTop: 5,
    paddingBottom: 0
  }, React.createElement(I.FlexWP, {
    align: "center",
    gap: 3,
    justify: "flex-start"
  }, React.createElement(Rt, null), (0, b.__)("Settings", "ohmylms"))), React.createElement(zt, {
    visibility: null == d ? void 0 : d.status,
    onVisibilityChange: function (e) {
      S.setLesson(Qn(Qn({}, d), {}, {
        status: e
      }));
    }
  }), React.createElement(Kt, {
    title: (0, b.__)("Allow Lesson Preview", "ohmylms"),
    tooltip: (0, b.__)("Allow students to preview the lesson without enrolling in the course.", "ohmylms"),
    onChange: function () {
      S.setLesson(Qn(Qn({}, d), {}, {
        preview_enable: !(null != d && d.preview_enable)
      }));
    },
    isChecked: null == d ? void 0 : d.preview_enable
  }), m && React.createElement(cn, {
    title: (0, b.__)("Prerequisites", "ohmylms"),
    tooltip: (0, b.__)("Set content that students must complete before accessing this one.", "ohmylms"),
    onChange: function () {
      var e;
      S.setLesson(Qn(Qn({}, d), {}, {
        prerequisites: Qn(Qn({}, d.prerequisites), {}, {
          enable: !(null != d && null !== (e = d.prerequisites) && void 0 !== e && e.enable)
        })
      }));
    },
    isChecked: null == d || null === (t = d.prerequisites) || void 0 === t ? void 0 : t.enable,
    childTitle: (0, b.__)("Members can access this content if they have completed all of the following content:", "ohmylms"),
    childPlaceholder: (0, b.__)("Type to search course modules", "ohmylms"),
    childNotFoundMessage: (0, b.__)("No Lessons Found", "ohmylms"),
    isMultiple: !0,
    onSearch: x,
    onChildChange: function (e) {
      var t = e.map(function (e) {
        return {
          label: e.label,
          value: e.value
        };
      });
      S.setLesson(Qn(Qn({}, d), {}, {
        prerequisites: Qn(Qn({}, d.prerequisites), {}, {
          data: qn(t)
        })
      }));
    },
    defaultValue: null == d || null === (n = d.prerequisites) || void 0 === n ? void 0 : n.data
  }), React.createElement(Pn, {
    onChange: function () {
      if (s) {
        var e = !d.drip_settings.enable;
        S.setLesson(Qn(Qn({}, d), {}, {
          drip_settings: Qn(Qn({}, null == d ? void 0 : d.drip_settings), {}, {
            enable: e
          }, e && {
            type: R ? "cohort-start" : "enrollment-from-x-days"
          })
        }));
      } else E(!0);
    },
    onDripFeedTypeChange: function (e) {
      if (s) {
        var t,
          n,
          r = Qn(Qn({}, d.drip_settings), {}, {
            type: e
          });
        if ("specific-date" === e) delete r.days, r.date = (null == d || null === (t = d.drip_settings) || void 0 === t ? void 0 : t.date) || sn()(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSSD"), r.time = (null == d || null === (n = d.drip_settings) || void 0 === n ? void 0 : n.time) || sn()(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSSD");else if ("cohort-from-x-days" === e || "enrollment-from-x-days" === e) {
          var a;
          delete r.date, delete r.time, r.days = (null == d || null === (a = d.drip_settings) || void 0 === a ? void 0 : a.days) || 1;
        } else "cohort-start" === e && (delete r.days, delete r.date, delete r.time);
        S.setLesson(Qn(Qn({}, d), {}, {
          drip_settings: r
        }));
      } else S.setIsProModalOpen(!0);
    },
    handleDripDatePickerChange: function (e, t) {
      S.setLesson(Qn(Qn({}, d), {}, {
        drip_settings: Qn(Qn({}, d.drip_settings), {}, {
          date: e ? sn()(e).format("YYYY-MM-DDTHH:mm:ss.SSS") : null
        })
      }));
    },
    handleDripTimePickerChange: function (e) {
      S.setLesson(Qn(Qn({}, d), {}, {
        drip_settings: Qn(Qn({}, d.drip_settings), {}, {
          time: e ? sn()(e).format("YYYY-MM-DDTHH:mm:ss.SSS") : null
        })
      }));
    },
    handleDayChange: P,
    isChecked: null == d || null === (r = d.drip_settings) || void 0 === r ? void 0 : r.enable,
    dripFeedType: null == d || null === (a = d.drip_settings) || void 0 === a ? void 0 : a.type,
    dripDate: (null == d || null === (o = d.drip_settings) || void 0 === o ? void 0 : o.date) || sn()().startOf("day").format("YYYY-MM-DD"),
    dripTime: (null == d || null === (i = d.drip_settings) || void 0 === i ? void 0 : i.time) || new Date(),
    enrollmentFromXDays: null == d || null === (c = d.drip_settings) || void 0 === c ? void 0 : c.days,
    isCohortBased: R
  }), React.createElement(Dn, {
    resources: (null == d || null === (u = d.download_resource) || void 0 === u ? void 0 : u.file) || [],
    handleResources: function (e) {
      var t;
      S.setLesson(Qn(Qn({}, d), {}, {
        download_resource: Qn(Qn({}, null == d ? void 0 : d.download_resource), {}, {
          file: [].concat(qn((null == d || null === (t = d.download_resource) || void 0 === t ? void 0 : t.file) || []), qn(e))
        })
      }));
    },
    handleDeleteResource: function (e) {
      var t,
        n = null == d || null === (t = d.download_resource) || void 0 === t || null === (t = t.file) || void 0 === t ? void 0 : t.filter(function (t) {
          return t.id !== e;
        });
      S.setLesson(Qn(Qn({}, d), {}, {
        download_resource: Qn(Qn({}, d.download_resource), {}, {
          file: n
        })
      }));
    },
    tooltipText: (0, b.__)("Upload downloadable files or materials for students to access with this lesson.", "ohmylms")
  }), m && React.createElement(I.SpacerWP, {
    padding: 5,
    marginBottom: 0
  }, React.createElement(Gn, {
    label: (0, b.__)("Delete Lesson", "ohmylms"),
    onDelete: C,
    alertTitle: (0, b.__)("Delete Lesson", "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to delete this lesson?", "ohmylms"),
    className: "omlms-lesson-settings-delete-button"
  })), w && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: w,
    onClose: E
  })));
};

const nr = (0, g.memo)(tr);

var rr = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M9 15.75a.75.75 0 01-.75.75h-4.5A3.754 3.754 0 010 12.75v-9A3.754 3.754 0 013.75 0h9a3.754 3.754 0 013.75 3.75v4.5a.75.75 0 11-1.5 0v-4.5c0-1.24-1.01-2.25-2.25-2.25h-9C2.51 1.5 1.5 2.51 1.5 3.75v5.22l2.106-2.107a2.95 2.95 0 014.168 0l4.006 4.006a.75.75 0 11-1.06 1.06L6.714 7.925a1.451 1.451 0 00-2.048 0L1.5 11.09v1.66C1.5 13.99 2.51 15 3.75 15h4.5a.75.75 0 01.75.75zm2.25-13.125c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9 6.115 9 4.875s1.01-2.25 2.25-2.25zm0 1.5a.75.75 0 10.002 1.502.75.75 0 00-.002-1.502zm6 9.375H15v-2.25a.75.75 0 10-1.5 0v2.25h-2.25a.75.75 0 100 1.5h2.25v2.25a.75.75 0 101.5 0V15h2.25a.75.75 0 100-1.5z"
  })));
};

const ar = (0, g.memo)(rr);

function or() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return ir(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (ir(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, ir(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, ir(d, "constructor", u), ir(u, "constructor", c), c.displayName = "GeneratorFunction", ir(u, a, "GeneratorFunction"), ir(d), ir(d, a, "Generator"), ir(d, r, function () {
    return this;
  }), ir(d, "toString", function () {
    return "[object Generator]";
  }), (or = function () {
    return {
      w: o,
      m
    };
  })();
}

function ir(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  ir = function (e, t, n, r) {
    function o(t, n) {
      ir(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, ir(e, t, n, r);
}

function lr(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function cr(e, t) {
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
      if ("string" == typeof e) return ur(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ur(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function ur(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
