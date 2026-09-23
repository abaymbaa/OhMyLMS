// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function Qa(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Qa = function (e, t, n, r) {
    function o(t, n) {
      Qa(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Qa(e, t, n, r);
}

function Za(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function $a(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Ka = function (e) {
  var t = (0, z.A)(),
    n = t.openNotificationWithIcon,
    r = t.contextHolder,
    a = e.id,
    o = e.chapterId,
    i = e.setOpenModal,
    l = e.setLocalData,
    c = (0, y.useDispatch)(T.default),
    u = (0, y.useSelect)(function (e) {
      return e(T.default).isLoading();
    }, []),
    s = (0, y.useSelect)(function (e) {
      return e(T.default).getAssignment();
    }, []),
    d = (0, y.useSelect)(function (e) {
      return e(T.default).geSelectedAssignmentId();
    }, []),
    m = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    p = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    v = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseChaptersContent();
    }, [o]),
    h = (0, y.useDispatch)(T.default),
    _ = h.getAssignment,
    w = h.resetAssignmentState,
    E = function (e, t) {
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
          if ("string" == typeof e) return $a(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $a(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)({
      description: ""
    }), 2),
    S = E[0],
    R = E[1],
    x = (0, f.Zp)();
  (0, g.useEffect)(function () {
    !u && m && n(p, m);
  }, [m]), (0, g.useEffect)(function () {
    var e = function () {
      var e,
        t = (e = Ya().m(function e() {
          var t;
          return Ya().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if (e.p = 0, d) {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                return e.n = 2, _(d);
              case 2:
                e.n = 4;
                break;
              case 3:
                e.p = 3, t = e.v, console.error("Error fetching course data:", t);
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
              Za(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Za(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    return e(), function () {
      w();
    };
  }, [d]), (0, g.useEffect)(function () {
    s && R({
      description: (null == S ? void 0 : S.description) || s.description || ""
    });
  }, [s]), (0, g.useEffect)(function () {
    l && l(S);
  }, [S]);
  var C = function () {
    if (La(s) && (s.description = S.description, c.updateAssignment(null == s ? void 0 : s.id, s), o)) {
      var e = null == v ? void 0 : v.byId;
      e[null == s ? void 0 : s.id] = s;
      var t = Object.values(e).filter(function (e) {
        return void 0 !== (null == e ? void 0 : e.chapterId) ? (null == e ? void 0 : e.chapterId) === o : (null == e ? void 0 : e.id) === (null == s ? void 0 : s.id);
      });
      c.setContentsToChapter(o, t);
    }
  };
  return React.createElement(React.Fragment, null, !o && r, !u || null != s && s.id ? React.createElement(React.Fragment, null, !o && React.createElement(Wr, {
    title: (0, b.__)("Assignment Outline", "ohmylms"),
    redirection: "/assignments",
    rightContent: React.createElement(React.Fragment, null, React.createElement(I.ButtonWP, {
      variant: "secondary",
      onClick: function () {
        x("/assignment-report/".concat(a));
      },
      icon: React.createElement(za, null)
    }, (0, b.__)("Result", "ohmylms")), React.createElement(I.ButtonWP, {
      variant: "secondary",
      onClick: function () {
        null != s && s.preview_url && window.open(null == s ? void 0 : s.preview_url, "_blank");
      },
      icon: React.createElement(Br, null)
    }, (0, b.__)("Preview", "ohmylms")), React.createElement(I.ButtonWP, {
      variant: "primary",
      onClick: C,
      disabled: !La(s) || u
    }, (0, b.__)("Save", "ohmylms")))
  }), React.createElement(I.SpacerWP, {
    paddingX: o ? 0 : 4,
    paddingY: 2
  }, React.createElement(I.FlexWP, {
    align: "stretch",
    gap: 4
  }, React.createElement(I.FlexBlockWP, {
    style: {
      flex: 3
    }
  }, React.createElement(ya, {
    assignment: s,
    handleInputChange: function (e) {
      c.setAssignment({
        name: e
      });
    },
    handleEditorContentChange: function (e) {
      R(function (t) {
        return Ua(Ua({}, t), {}, {
          description: e
        });
      });
    },
    handleUploadComplete: function (e, t) {
      switch (t) {
        case "video":
          c.setAssignment(Ua(Ua({}, s), {}, {
            video_id: e.id,
            video_src: e.url
          }));
          break;
        case "audio":
          c.setAssignment(Ua(Ua({}, s), {}, {
            audio_id: e.id,
            audio_src: e.url
          }));
          break;
        default:
          c.setAssignment(Ua(Ua({}, s), {}, {
            image_id: e.id,
            image_src: e.url
          }));
      }
    },
    handleRemoveMedia: function (e) {
      c.setAssignment(Ua(Ua({}, s), {}, qa(qa({}, "".concat(e, "_id"), null), "".concat(e, "_src"), null)));
    },
    setOpenModal: i,
    saveLesson: C,
    chapterId: o,
    onExternalUploadComplete: function (e, t) {
      c.setAssignment(Ua(Ua({}, s), {}, {
        external_url: e.url
      }));
    }
  })), React.createElement(I.FlexBlockWP, {
    style: {
      flex: 2
    }
  }, React.createElement(Da, {
    setOpenModal: i,
    assignment: s,
    chapterId: o
  }))))) : React.createElement(Va.A, {
    spinning: u,
    delay: 0,
    style: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 9999
    }
  }));
};

const Ja = (0, g.memo)(Ka);

function Xa() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return eo(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (eo(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, eo(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, eo(d, "constructor", u), eo(u, "constructor", c), c.displayName = "GeneratorFunction", eo(u, a, "GeneratorFunction"), eo(d), eo(d, a, "Generator"), eo(d, r, function () {
    return this;
  }), eo(d, "toString", function () {
    return "[object Generator]";
  }), (Xa = function () {
    return {
      w: o,
      m
    };
  })();
}

function eo(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  eo = function (e, t, n, r) {
    function o(t, n) {
      eo(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, eo(e, t, n, r);
}

function to(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function no(e, t) {
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
      if ("string" == typeof e) return ro(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ro(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function ro(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var ao = function (e) {
  var t = e.openModal,
    n = e.setOpenModal,
    r = e.chapterId,
    a = e.handleAutomation,
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getAssignment();
    }, []),
    i = (0, y.useDispatch)(T.default),
    l = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseChaptersContent();
    }, [r]),
    c = (0, y.useSelect)(function (e) {
      return e(T.default).geSelectedAssignmentId();
    }, []),
    u = no((0, g.useState)({
      description: ""
    }), 2),
    s = u[0],
    d = u[1],
    m = no((0, g.useState)(!0), 2),
    p = m[0],
    f = m[1],
    v = no((0, g.useState)(!1), 2),
    h = v[0],
    _ = v[1],
    w = no((0, g.useState)(!1), 2),
    E = w[0],
    S = w[1],
    R = no((0, g.useState)(!1), 2),
    x = R[0],
    C = R[1],
    P = function () {
      var e,
        t = (e = Xa().m(function e() {
          var t, n, a, c, u;
          return Xa().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if (!x) {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                if (e.p = 1, C(!0), La(o)) {
                  e.n = 2;
                  break;
                }
                return e.a(2);
              case 2:
                return o.description = s.description, "assignment" !== o.type && (o.type = "assignment"), e.n = 3, i.updateAssignment(null == o ? void 0 : o.id, o);
              case 3:
                if (!r) {
                  e.n = 5;
                  break;
                }
                return t = null == l ? void 0 : l.byId, n = 1, t[null == o ? void 0 : o.id] && (n = t[null == o ? void 0 : o.id].order_number), o.order_number = n, t[null == o ? void 0 : o.id] = o, a = Object.values(t), c = a.filter(function (e) {
                  return void 0 !== (null == e ? void 0 : e.chapterId) ? (null == e ? void 0 : e.chapterId) === r : (null == e ? void 0 : e.id) === (null == o ? void 0 : o.id);
                }), e.n = 4, i.setContentsToChapter(r, c);
              case 4:
                f(!0), _(!1);
              case 5:
                e.n = 7;
                break;
              case 6:
                e.p = 6, u = e.v, console.error(u);
              case 7:
                return e.p = 7, C(!1), e.f(7);
              case 8:
                return e.a(2);
            }
          }, e, null, [[1, 6, 7, 8]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              to(o, r, a, i, l, "next", e);
            }
            function l(e) {
              to(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    O = (0, g.useCallback)(function () {
      p ? n(!1) : S(!0);
    }, [p]),
    k = (0, g.useCallback)(function () {
      a("lesson", null == o ? void 0 : o.id, null == o ? void 0 : o.name);
    }, [o]);
  return (0, g.useEffect)(function () {
    o && (h && f(!1), _(!0));
  }, [o]), React.createElement(React.Fragment, null, React.createElement(ua, {
    openModal: t,
    setOpenModal: O,
    title: (0, b.__)("Assignment", "creator-ms"),
    headerActions: React.createElement(I.FlexWP, {
      gap: 3,
      align: "center",
      justify: "flex-end"
    }, React.createElement(ra, {
      label: (0, b.__)("Report", "ohmylms"),
      icon: React.createElement(za, null),
      onClick: function () {
        var e = "".concat(window.location.origin, "/wp-admin/admin.php?page=creator-lms#").concat("/assignment-report", "/").concat(c);
        window.open(e, "_blank");
      },
      variant: "default"
    }), React.createElement(ra, {
      label: (0, b.__)("Preview", "ohmylms"),
      icon: React.createElement(Br, null),
      onClick: function () {
        null != o && o.preview_url && window.open(null == o ? void 0 : o.preview_url, "_blank");
      },
      variant: "default"
    }), React.createElement(ra, {
      label: (0, b.__)("Save", "ohmylms"),
      variant: "primary",
      onClick: P,
      disabled: !La(o),
      isBusy: x
    }))
  }, React.createElement(Ja, {
    assignment: o,
    chapterId: r,
    setOpenModal: n,
    setLocalData: d,
    handleAutomation: k
  }), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingBottom: 4
  })), E && React.createElement(Ie, {
    title: (0, b.__)("Warning!", "ohmylms"),
    description: (0, b.__)("You have unsaved changes. Do you want to close without saving?", "ohmylms"),
    onClose: function () {
      return S(!1);
    },
    onDelete: function () {
      return n(!1);
    },
    isOpen: E,
    type: "warning",
    actionBtnText: (0, b.__)("Close", "ohmylms")
  }));
};

const oo = (0, g.memo)(ao);

var io = n(88569),
  lo = n.n(io),
  co = [{
    label: "Midway Island, Samoa",
    value: "Pacific/Midway"
  }, {
    label: "Pago Pago",
    value: "Pacific/Pago_Pago"
  }, {
    label: "Hawaii",
    value: "Pacific/Honolulu"
  }, {
    label: "Alaska",
    value: "America/Anchorage"
  }, {
    label: "Vancouver",
    value: "America/Vancouver"
  }, {
    label: "Pacific Time (US and Canada)",
    value: "America/Los_Angeles"
  }, {
    label: "Tijuana",
    value: "America/Tijuana"
  }, {
    label: "Edmonton",
    value: "America/Edmonton"
  }, {
    label: "Mountain Time (US and Canada)",
    value: "America/Denver"
  }, {
    label: "Arizona",
    value: "America/Phoenix"
  }, {
    label: "Mazatlan",
    value: "America/Mazatlan"
  }, {
    label: "Winnipeg",
    value: "America/Winnipeg"
  }, {
    label: "Saskatchewan",
    value: "America/Regina"
  }, {
    label: "Central Time (US and Canada)",
    value: "America/Chicago"
  }, {
    label: "Mexico City",
    value: "America/Mexico_City"
  }, {
    label: "Guatemala",
    value: "America/Guatemala"
  }, {
    label: "El Salvador",
    value: "America/El_Salvador"
  }, {
    label: "Managua",
    value: "America/Managua"
  }, {
    label: "Costa Rica",
    value: "America/Costa_Rica"
  }, {
    label: "Montreal",
    value: "America/Montreal"
  }, {
    label: "Eastern Time (US and Canada)",
    value: "America/New_York"
  }, {
    label: "Indiana (East)",
    value: "America/Indianapolis"
  }, {
    label: "Panama",
    value: "America/Panama"
  }, {
    label: "Bogota",
    value: "America/Bogota"
  }, {
    label: "Lima",
    value: "America/Lima"
  }, {
    label: "Halifax",
    value: "America/Halifax"
  }, {
    label: "Puerto Rico",
    value: "America/Puerto_Rico"
  }, {
    label: "Caracas",
    value: "America/Caracas"
  }, {
    label: "Santiago",
    value: "America/Santiago"
  }, {
    label: "Newfoundland and Labrador",
    value: "America/St_Johns"
  }, {
    label: "Montevideo",
    value: "America/Montevideo"
  }, {
    label: "Brasilia",
    value: "America/Araguaina"
  }, {
    label: "Buenos Aires, Georgetown",
    value: "America/Argentina/Buenos_Aires"
  }, {
    label: "Greenland",
    value: "America/Godthab"
  }, {
    label: "Sao Paulo",
    value: "America/Sao_Paulo"
  }, {
    label: "Azores",
    value: "Atlantic/Azores"
  }, {
    label: "Atlantic Time (Canada)",
    value: "Canada/Atlantic"
  }, {
    label: "Cape Verde Islands",
    value: "Atlantic/Cape_Verde"
  }, {
    label: "Universal Time UTC",
    value: "UTC"
  }, {
    label: "Greenwich Mean Time",
    value: "Etc/Greenwich"
  }, {
    label: "Belgrade, Bratislava, Ljubljana",
    value: "Europe/Belgrade"
  }, {
    label: "Sarajevo, Skopje, Zagreb",
    value: "CET"
  }, {
    label: "Reykjavik",
    value: "Atlantic/Reykjavik"
  }, {
    label: "Dublin",
    value: "Europe/Dublin"
  }, {
    label: "London",
    value: "Europe/London"
  }, {
    label: "Lisbon",
    value: "Europe/Lisbon"
  }, {
    label: "Casablanca",
    value: "Africa/Casablanca"
  }, {
    label: "Nouakchott",
    value: "Africa/Nouakchott"
  }, {
    label: "Oslo",
    value: "Europe/Oslo"
  }, {
    label: "Copenhagen",
    value: "Europe/Copenhagen"
  }, {
    label: "Brussels",
    value: "Europe/Brussels"
  }, {
    label: "Amsterdam, Berlin, Rome, Stockholm, Vienna",
    value: "Europe/Berlin"
  }, {
    label: "Helsinki",
    value: "Europe/Helsinki"
  }, {
    label: "Amsterdam",
    value: "Europe/Amsterdam"
  }, {
    label: "Rome",
    value: "Europe/Rome"
  }, {
    label: "Stockholm",
    value: "Europe/Stockholm"
  }, {
    label: "Vienna",
    value: "Europe/Vienna"
  }, {
    label: "Luxembourg",
    value: "Europe/Luxembourg"
  }, {
    label: "Paris",
    value: "Europe/Paris"
  }, {
    label: "Zurich",
    value: "Europe/Zurich"
  }, {
    label: "Madrid",
    value: "Europe/Madrid"
  }, {
    label: "West Central Africa",
    value: "Africa/Bangui"
  }, {
    label: "Algiers",
    value: "Africa/Algiers"
  }, {
    label: "Tunis",
    value: "Africa/Tunis"
  }, {
    label: "Harare, Pretoria",
    value: "Africa/Harare"
  }, {
    label: "Nairobi",
    value: "Africa/Nairobi"
  }, {
    label: "Warsaw",
    value: "Europe/Warsaw"
  }, {
    label: "Prague Bratislava",
    value: "Europe/Prague"
  }, {
    label: "Budapest",
    value: "Europe/Budapest"
  }, {
    label: "Sofia",
    value: "Europe/Sofia"
  }, {
    label: "Istanbul",
    value: "Europe/Istanbul"
  }, {
    label: "Athens",
    value: "Europe/Athens"
  }, {
    label: "Bucharest",
    value: "Europe/Bucharest"
  }, {
    label: "Nicosia",
    value: "Asia/Nicosia"
  }, {
    label: "Beirut",
    value: "Asia/Beirut"
  }, {
    label: "Damascus",
    value: "Asia/Damascus"
  }, {
    label: "Jerusalem",
    value: "Asia/Jerusalem"
  }, {
    label: "Amman",
    value: "Asia/Amman"
  }, {
    label: "Tripoli",
    value: "Africa/Tripoli"
  }, {
    label: "Cairo",
    value: "Africa/Cairo"
  }, {
    label: "Johannesburg",
    value: "Africa/Johannesburg"
  }, {
    label: "Moscow",
    value: "Europe/Moscow"
  }, {
    label: "Baghdad",
    value: "Asia/Baghdad"
  }, {
    label: "Kuwait",
    value: "Asia/Kuwait"
  }, {
    label: "Riyadh",
    value: "Asia/Riyadh"
  }, {
    label: "Bahrain",
    value: "Asia/Bahrain"
  }, {
    label: "Qatar",
    value: "Asia/Qatar"
  }, {
    label: "Aden",
    value: "Asia/Aden"
  }, {
    label: "Tehran",
    value: "Asia/Tehran"
  }, {
    label: "Khartoum",
    value: "Africa/Khartoum"
  }, {
    label: "Djibouti",
    value: "Africa/Djibouti"
  }, {
    label: "Mogadishu",
    value: "Africa/Mogadishu"
  }, {
    label: "Dubai",
    value: "Asia/Dubai"
  }, {
    label: "Muscat",
    value: "Asia/Muscat"
  }, {
    label: "Baku, Tbilisi, Yerevan",
    value: "Asia/Baku"
  }, {
    label: "Kabul",
    value: "Asia/Kabul"
  }, {
    label: "Yekaterinburg",
    value: "Asia/Yekaterinburg"
  }, {
    label: "Islamabad, Karachi, Tashkent",
    value: "Asia/Tashkent"
  }, {
    label: "India",
    value: "Asia/Calcutta"
  }, {
    label: "Kathmandu",
    value: "Asia/Kathmandu"
  }, {
    label: "Novosibirsk",
    value: "Asia/Novosibirsk"
  }, {
    label: "Almaty",
    value: "Asia/Almaty"
  }, {
    label: "Dacca",
    value: "Asia/Dacca"
  }, {
    label: "Krasnoyarsk",
    value: "Asia/Krasnoyarsk"
  }, {
    label: "Astana, Dhaka",
    value: "Asia/Dhaka"
  }, {
    label: "Bangkok",
    value: "Asia/Bangkok"
  }, {
    label: "Vietnam",
    value: "Asia/Saigon"
  }, {
    label: "Jakarta",
    value: "Asia/Jakarta"
  }, {
    label: "Irkutsk, Ulaanbaatar",
    value: "Asia/Irkutsk"
  }, {
    label: "Beijing, Shanghai",
    value: "Asia/Shanghai"
  }, {
    label: "Hong Kong",
    value: "Asia/Hong_Kong"
  }, {
    label: "Taipei",
    value: "Asia/Taipei"
  }, {
    label: "Kuala Lumpur",
    value: "Asia/Kuala_Lumpur"
  }, {
    label: "Singapore",
    value: "Asia/Singapore"
  }, {
    label: "Perth",
    value: "Australia/Perth"
  }, {
    label: "Yakutsk",
    value: "Asia/Yakutsk"
  }, {
    label: "Seoul",
    value: "Asia/Seoul"
  }, {
    label: "Osaka, Sapporo, Tokyo",
    value: "Asia/Tokyo"
  }, {
    label: "Darwin",
    value: "Australia/Darwin"
  }, {
    label: "Adelaide",
    value: "Australia/Adelaide"
  }, {
    label: "Vladivostok",
    value: "Asia/Vladivostok"
  }, {
    label: "Guam, Port Moresby",
    value: "Pacific/Port_Moresby"
  }, {
    label: "Brisbane",
    value: "Australia/Brisbane"
  }, {
    label: "Canberra, Melbourne, Sydney",
    value: "Australia/Sydney"
  }, {
    label: "Hobart",
    value: "Australia/Hobart"
  }, {
    label: "Magadan",
    value: "Asia/Magadan"
  }, {
    label: "Solomon Islands",
    value: "SST"
  }, {
    label: "New Caledonia",
    value: "Pacific/Noumea"
  }, {
    label: "Kamchatka",
    value: "Asia/Kamchatka"
  }, {
    label: "Fiji Islands, Marshall Islands",
    value: "Pacific/Fiji"
  }, {
    label: "Auckland, Wellington",
    value: "Pacific/Auckland"
  }, {
    label: "Mumbai, Kolkata, New Delhi",
    value: "Asia/Kolkata"
  }, {
    label: "Kiev",
    value: "Europe/Kiev"
  }, {
    label: "Tegucigalpa",
    value: "America/Tegucigalpa"
  }, {
    label: "Independent State of Samoa",
    value: "Pacific/Apia"
  }],
  uo = {
    video: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "2",
      y: "6",
      width: "14",
      height: "12",
      rx: "2.5"
    }), React.createElement("path", {
      d: "M16 10l6-3v10l-6-3z"
    })),
    play: React.createElement("path", {
      d: "M8 5v14l11-7z"
    }),
    upload: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M12 16V4M7 9l5-5 5 5"
    }), React.createElement("path", {
      d: "M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
    })),
    link: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1"
    }), React.createElement("path", {
      d: "M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"
    })),
    check: React.createElement("path", {
      d: "M20 6L9 17l-5-5"
    }),
    "alert-triangle": React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M12 3l9.5 16.5H2.5z"
    }), React.createElement("path", {
      d: "M12 10v4M12 17v.5"
    })),
    "alert-circle": React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), React.createElement("path", {
      d: "M12 7v6M12 16.5v.5"
    })),
    info: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), React.createElement("path", {
      d: "M12 11v5",
      strokeLinecap: "round"
    }), React.createElement("path", {
      d: "M12 7.5v.4",
      strokeLinecap: "round"
    })),
    clock: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), React.createElement("path", {
      d: "M12 7v5l3 2"
    })),
    "chevron-down": React.createElement("path", {
      d: "M6 9l6 6 6-6"
    }),
    eye: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"
    }), React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    })),
    "eye-off": React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3 3l18 18"
    }), React.createElement("path", {
      d: "M10.6 10.6a3 3 0 004.2 4.2"
    }), React.createElement("path", {
      d: "M9.4 5.1A10.6 10.6 0 0112 5c7 0 11 7 11 7a17.8 17.8 0 01-3.3 4.1"
    }), React.createElement("path", {
      d: "M6.6 6.6A17.8 17.8 0 001 12s4 7 11 7a10.6 10.6 0 004.9-1.2"
    })),
    close: React.createElement("path", {
      d: "M6 6l12 12M18 6L6 18",
      strokeLinecap: "round"
    }),
    image: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "3"
    }), React.createElement("circle", {
      cx: "8.5",
      cy: "8.5",
      r: "1.6"
    }), React.createElement("path", {
      d: "M21 15l-5-5L5 21"
    })),
    sparkle: React.createElement("path", {
      d: "M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"
    }),
    "video-circle": React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), React.createElement("path", {
      d: "M10 9l5 3-5 3z"
    })),
    calendar: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }), React.createElement("path", {
      d: "M16 2v4M8 2v4M3 10h18"
    })),
    paperclip: React.createElement("path", {
      d: "M21 12l-8.5 8.5a5 5 0 01-7-7L13 6a3.3 3.3 0 014.7 4.7l-8.5 8.5a1.6 1.6 0 01-2.3-2.3L14 9"
    }),
    search: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), React.createElement("path", {
      d: "M21 21l-4.3-4.3"
    })),
    settings: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), React.createElement("path", {
      d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
    })),
    "arrow-left": React.createElement("path", {
      d: "M19 12H5M12 19l-7-7 7-7"
    })
  },
  so = ["play", "sparkle"],
  mo = function (e) {
    var t = e.name,
      n = e.size,
      r = void 0 === n ? 18 : n,
      a = e.strokeWidth,
      o = void 0 === a ? 2 : a,
      i = e.className,
      l = e.style,
      c = so.includes(t),
      u = uo[t];
    return u ? React.createElement("svg", {
      className: i,
      width: r,
      height: r,
      viewBox: "0 0 24 24",
      fill: c ? "currentColor" : "none",
      stroke: c ? "none" : "currentColor",
      strokeWidth: c ? 0 : o,
      style: l,
      "aria-hidden": "true"
    }, u) : null;
  };

const po = (0, g.memo)(mo);
