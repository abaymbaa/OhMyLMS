// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var ha = function (e) {
  var t = e.assignment,
    n = e.handleInputChange,
    r = e.handleEditorContentChange,
    a = e.handleUploadComplete,
    o = e.handleRemoveMedia,
    i = e.chapterId,
    l = e.onExternalUploadComplete;
  return React.createElement(I.CardWP, {
    fullHeight: !0,
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 4
  }, React.createElement(Pr, {
    titleValue: null == t ? void 0 : t.name,
    imageSrc: null == t ? void 0 : t.image_src,
    videoSrc: null != t && t.video_id ? null == t ? void 0 : t.video_src : "video" == (null == t ? void 0 : t.type) ? null == t ? void 0 : t.external_url : "",
    audioSrc: null != t && t.audio_id ? null == t ? void 0 : t.audio_src : "audio" == (null == t ? void 0 : t.type) ? null == t ? void 0 : t.external_url : "",
    titlePlaceholder: (0, b.__)("Enter assignment title", "ohmylms"),
    titleName: "name",
    descriptionPlaceholder: (0, b.__)("Enter assignment description...", "ohmylms"),
    content: null == t ? void 0 : t.description,
    onInputChange: n,
    onContentChange: r,
    onUploadComplete: a,
    onRemoveMedia: o,
    align: "left",
    mediaType: "text" == (null == t ? void 0 : t.type) ? "image_video" : null == t ? void 0 : t.type,
    mediaId: "audio" == (null == t ? void 0 : t.type) ? null == t ? void 0 : t.audio_id : null == t ? void 0 : t.video_id,
    onExternalUploadComplete: l,
    chapterId: i,
    autofocus: !1,
    editorFor: "assignment"
  })));
};
const ya = (0, g.memo)(ha);
var ba = ["children", "className"];
function _a() {
  return _a = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _a.apply(null, arguments);
}
var wa = function (e) {
  var t = e.children,
    n = e.className,
    r = void 0 === n ? "" : n,
    a = function (e, t) {
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
    }(e, ba);
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, _a({
    className: "ohmylms-card-wrapper ".concat(r)
  }, a), t));
};
const Ea = (0, g.memo)(wa);
var Sa = ["value", "handleChange", "title", "type", "error", "errorMessage", "variant"];
function Ra() {
  return Ra = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ra.apply(null, arguments);
}
var xa = function (e) {
  var t = e.value,
    n = e.handleChange,
    r = e.title,
    a = e.type,
    o = void 0 === a ? "number" : a,
    i = e.error,
    l = void 0 !== i && i,
    c = e.errorMessage,
    u = void 0 === c ? (0, b.__)("This field is required", "ohmylms") : c,
    s = e.variant,
    d = void 0 === s ? "primary" : s,
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
    }(e, Sa);
  return React.createElement(React.Fragment, null, React.createElement(Ea, {
    className: "ohmylms-assignment-input-card",
    isBorderless: !0,
    variant: d
  }, React.createElement(I.TextWP, {
    className: "ohmylms-input-card-title"
  }, r), React.createElement(I.SpacerWP, null), React.createElement(I.InputWP, Ra({
    value: t,
    onChange: n,
    type: o
  }, m)), React.createElement(qt, {
    isVisible: l
  }, React.createElement("p", {
    className: "ohmylms-input-card-error ohmylms-error-msg"
  }, u))));
};
const Ca = (0, g.memo)(xa);
function Pa(e) {
  return Pa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pa(e);
}
function Oa(e) {
  return function (e) {
    if (Array.isArray(e)) return ka(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return ka(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ka(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function ka(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ja(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Aa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ja(Object(n), !0).forEach(function (t) {
      Ma(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ja(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Ma(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Pa(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Pa(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Pa(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ta() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Ia(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Ia(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Ia(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Ia(d, "constructor", u), Ia(u, "constructor", c), c.displayName = "GeneratorFunction", Ia(u, a, "GeneratorFunction"), Ia(d), Ia(d, a, "Generator"), Ia(d, r, function () {
    return this;
  }), Ia(d, "toString", function () {
    return "[object Generator]";
  }), (Ta = function () {
    return {
      w: o,
      m
    };
  })();
}
function Ia(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Ia = function (e, t, n, r) {
    function o(t, n) {
      Ia(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Ia(e, t, n, r);
}
function Fa(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
var Na = function (e) {
  var t,
    n,
    r,
    a,
    o,
    i,
    c,
    u,
    s,
    d,
    m,
    p,
    f,
    v = true,
    h = e.assignment,
    _ = e.chapterId,
    w = e.setOpenModal,
    E = "cohort-based" === (0, y.useSelect)(function (e) {
      return e(T.default).getCourseType();
    }, []),
    S = (0, y.useDispatch)(T.default),
    R = (0, y.useSelect)(function (e) {
      var t,
        n = e(T.default).getCourseChapters();
      return null === (t = e(T.default).getCourse()) || void 0 === t || t.settings, {
        byId: n.byId
      };
    }, []).byId,
    x = R && R[_],
    C = function () {
      var e,
        t = (e = Ta().m(function e(t) {
          var n, r, a, o;
          return Ta().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return e.n = 1, l()({
                  path: "/ohmylms/v1/chapters/".concat(_, "/search-contents?term=").concat(t),
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json"
                  }
                });
              case 1:
                return n = e.v, r = null == x ? void 0 : x.content.map(String), a = r.indexOf(String(h.id)), o = n.data.filter(function (e) {
                  return (null == e ? void 0 : e.value) != h.id && r.indexOf(String(null == e ? void 0 : e.value)) < a;
                }), e.a(2, {
                  data: o
                });
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Fa(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Fa(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function (e) {
        return t.apply(this, arguments);
      };
    }(),
    P = function (e, t, n) {
      S.setAssignment(Aa(Aa({}, h), {}, Ma({}, e, n ? Aa(Aa({}, h[e]), {}, Ma({}, n, t)) : t)));
    },
    O = [{
      value: "day",
      label: (0, b.__)("Day", "ohmylms")
    }, {
      value: "week",
      label: (0, b.__)("Week", "ohmylms")
    }, {
      value: "Month",
      label: (0, b.__)("Month", "ohmylms")
    }],
    k = (0, g.useCallback)(function (e) {
      Number(e) < 1 || S.setAssignment(Aa(Aa({}, h), {}, {
        drip_settings: Aa(Aa({}, null == h ? void 0 : h.drip_settings), {}, {
          days: e
        })
      }));
    }, [S, h]),
    j = (0, g.useCallback)(function () {
      null != h && h.id && (S.deleteLessonFromChapter(null == h ? void 0 : h.id, _), w(!1));
    }, [_, h, S]);
  return React.createElement(I.CardWP, {
    fullHeight: !0,
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    paddingX: 5,
    paddingTop: 5,
    paddingBottom: 0
  }, React.createElement(I.FlexWP, {
    align: "center",
    gap: 3,
    justify: "flex-start"
  }, React.createElement(Rt, null), (0, b.__)("Settings", "ohmylms"))), _ && React.createElement(cn, {
    title: (0, b.__)("Prerequisites", "ohmylms"),
    tooltip: (0, b.__)("Information about prerequisites", "ohmylms"),
    onChange: function () {
      var e;
      S.setAssignment(Aa(Aa({}, h), {}, {
        prerequisites: Aa(Aa({}, null == h ? void 0 : h.prerequisites), {}, {
          enable: !(null != h && null !== (e = h.prerequisites) && void 0 !== e && e.enable)
        })
      }));
    },
    isChecked: null !== (t = null == h || null === (n = h.prerequisites) || void 0 === n ? void 0 : n.enable) && void 0 !== t && t,
    childTitle: (0, b.__)("Members can access this content if they have completed all of the following content:", "ohmylms"),
    childPlaceholder: (0, b.__)("Type to search course modules", "ohmylms"),
    childNotFoundMessage: (0, b.__)("No Lessons Found", "ohmylms"),
    isMultiple: !0,
    onSearch: C,
    onChildChange: function (e) {
      var t = e.map(function (e) {
        return {
          label: e.label,
          value: e.value
        };
      });
      S.setAssignment(Aa(Aa({}, h), {}, {
        prerequisites: Aa(Aa({}, null == h ? void 0 : h.prerequisites), {}, {
          data: Oa(t)
        })
      }));
    },
    defaultValue: null == h || null === (r = h.prerequisites) || void 0 === r ? void 0 : r.data,
    showDivider: !1
  }), React.createElement(Pn, {
    onChange: function () {
      var e;
      {
        var t = !(null != h && null !== (e = h.drip_settings) && void 0 !== e && e.enable);
        S.setAssignment(Aa(Aa({}, h), {}, {
          drip_settings: Aa(Aa({}, null == h ? void 0 : h.drip_settings), {}, {
            enable: t
          }, t && {
            type: E ? "cohort-start" : "enrollment-from-x-days"
          })
        }));
      }
    },
    isChecked: null !== (a = null == h || null === (o = h.drip_settings) || void 0 === o ? void 0 : o.enable) && void 0 !== a && a,
    onDripFeedTypeChange: function (e) {
      {
        var t,
          n,
          r = Aa(Aa({}, null == h ? void 0 : h.drip_settings), {}, {
            type: e
          });
        if ("specific-date" === e) delete r.days, r.date = (null == h || null === (t = h.drip_settings) || void 0 === t ? void 0 : t.date) || sn()(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSSD"), r.time = (null == h || null === (n = h.drip_settings) || void 0 === n ? void 0 : n.time) || sn()(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSSD");else if ("cohort-from-x-days" === e || "enrollment-from-x-days" === e) {
          var a;
          delete r.date, delete r.time, r.days = (null == h || null === (a = h.drip_settings) || void 0 === a ? void 0 : a.days) || 1;
        } else "cohort-start" === e && (delete r.days, delete r.date, delete r.time);
        S.setAssignment(Aa(Aa({}, h), {}, {
          drip_settings: r
        }));
      }
    },
    handleDripDatePickerChange: function (e, t) {
      S.setAssignment(Aa(Aa({}, h), {}, {
        drip_settings: Aa(Aa({}, null == h ? void 0 : h.drip_settings), {}, {
          date: e ? sn()(e).format("YYYY-MM-DDTHH:mm:ss.SSS") : null
        })
      }));
    },
    handleDripTimePickerChange: function (e) {
      S.setAssignment(Aa(Aa({}, h), {}, {
        drip_settings: Aa(Aa({}, null == h ? void 0 : h.drip_settings), {}, {
          time: e ? sn()(e).format("YYYY-MM-DDTHH:mm:ss.SSS") : null
        })
      }));
    },
    handleDayChange: k,
    dripFeedType: null == h || null === (i = h.drip_settings) || void 0 === i ? void 0 : i.type,
    dripDate: (null == h || null === (c = h.drip_settings) || void 0 === c ? void 0 : c.date) || sn()().startOf("day").format("YYYY-MM-DD"),
    dripTime: (null == h || null === (u = h.drip_settings) || void 0 === u ? void 0 : u.time) || new Date(),
    enrollmentFromXDays: null == h || null === (s = h.drip_settings) || void 0 === s ? void 0 : s.days,
    isCohortBased: E
  }), React.createElement(Kt, {
    title: (0, b.__)("Time Limit", "ohmylms"),
    tooltip: (0, b.__)("Set a deadline for submitting this assignment.", "ohmylms"),
    onChange: function (e) {
      return P("enable_time_limit", e);
    },
    isChecked: null !== (d = null == h ? void 0 : h.enable_time_limit) && void 0 !== d && d,
    showDivider: !1,
    customClass: "ohmylms-assignment-settings-time-limit-button",
    conditionalChild: React.createElement(Ea, {
      isBorderless: !0,
      variant: "secondary",
      padding: "16px",
      margin: "12px 0 0"
    }, React.createElement(I.InputWP, {
      value: (null == h ? void 0 : h.time_limit) || "",
      type: "number",
      min: 1,
      placeholder: (0, b.__)("Enter time limit", "ohmylms"),
      className: "ohmylms-assignment-settings-time-limit-input",
      onChange: function (e) {
        /^\d*\.?\d*$/.test(e) && P("time_limit", e);
      },
      onKeyDown: function (e) {
        (["e", "E", "+", "-", "/", "\\", ".", ",", "*", " "].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
      },
      onBlur: function () {
        (null == h ? void 0 : h.time_limit) < 1 && P("time_limit", 1);
      }
    }), React.createElement(I.SpacerWP, null), React.createElement(_n, {
      placeholder: (0, b.__)("Select option", "ohmylms"),
      customClass: "ohmylms-assignment-settings-time-limit-type-select",
      options: O,
      value: null == h ? void 0 : h.time_limit_type,
      onChange: function (e) {
        return P("time_limit_type", e);
      }
    }))
  }), React.createElement(I.SpacerWP, {
    padding: 4,
    marginBottom: 0
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Maximum Passing Points", "ohmylms")), React.createElement(Ca, {
    value: (null == h ? void 0 : h.total_points) || "",
    title: (0, b.__)("Set the maximum points a student can score", "ohmylms"),
    error: Number(null == h ? void 0 : h.total_points) < 1,
    errorMessage: (0, b.__)("Total points should be greater than 0", "ohmylms"),
    className: "ohmylms-assignment-settings-total-points-input",
    handleChange: function (e) {
      var t = e;
      /^\d*\.?\d*$/.test(t) && P("total_points", t);
    },
    onKeyDown: function (e) {
      (["e", "E", "+", "-", "/", "\\", ",", "*", " "].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
    },
    onBlur: function () {
      (null == h ? void 0 : h.total_points) < 1 && P("total_points", 1);
    },
    variant: "secondary"
  })), React.createElement(I.SpacerWP, {
    padding: 4,
    marginBottom: 0
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Minimum Pass Points", "ohmylms")), React.createElement(Ca, {
    value: (null == h ? void 0 : h.maximum_pass_points) || "",
    title: (0, b.__)("Set the minimum points required for the student to pass this assignment.", "ohmylms"),
    error: Number(null == h ? void 0 : h.maximum_pass_points) < 0 || Number(null == h ? void 0 : h.maximum_pass_points) > Number(null == h ? void 0 : h.total_points),
    errorMessage: (0, b.__)("Minimum pass points should be greater than 0 and less than or equal to total points", "ohmylms"),
    className: "ohmylms-assignment-settings-pass-points-input",
    handleChange: function (e) {
      var t = e;
      /^\d*\.?\d*$/.test(t) && P("maximum_pass_points", t);
    },
    onKeyDown: function (e) {
      (["e", "E", "+", "-", "/", "\\", ",", "*", " "].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
    },
    onBlur: function () {
      (null == h ? void 0 : h.maximum_pass_points) < 1 && P("maximum_pass_points", 1);
    },
    variant: "secondary"
  })), React.createElement(Kt, {
    title: (0, b.__)("Assignment Submission Attempts", "ohmylms"),
    onChange: function (e) {
      return P("allow_upload_files", e);
    },
    isChecked: null !== (m = null == h ? void 0 : h.allow_upload_files) && void 0 !== m && m,
    customClass: "ohmylms-assignment-settings-submission-attempts-button",
    showDivider: !1,
    conditionalChild: React.createElement(Ca, {
      value: (null == h ? void 0 : h.number_of_files) || "",
      title: (0, b.__)("Define the number of attempts that a student is allowed in this assignment.", "ohmylms"),
      error: Number(null == h ? void 0 : h.number_of_files) < 1,
      errorMessage: (0, b.__)("Number of files should be greater than 0", "ohmylms"),
      className: "ohmylms-assignment-settings-number-of-files-input",
      handleChange: function (e) {
        var t = e;
        /^\d*\.?\d*$/.test(t) && P("number_of_files", t);
      },
      onKeyDown: function (e) {
        (["e", "E", "+", "-", "/", "\\", ".", ",", "*", " "].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
      },
      onBlur: function () {
        (null == h ? void 0 : h.number_of_files) < 1 && P("number_of_files", 1);
      },
      variant: "secondary"
    })
  }), React.createElement(Kt, {
    title: (0, b.__)("Submission File Size Limit", "ohmylms"),
    onChange: function (e) {
      return P("enable_file_size_limit", e);
    },
    isChecked: null !== (p = null == h ? void 0 : h.enable_file_size_limit) && void 0 !== p && p,
    showDivider: !1,
    customClass: "ohmylms-assignment-settings-file-size-limit-button",
    conditionalChild: React.createElement(Ca, {
      value: (null == h ? void 0 : h.max_file_size_limit) || "",
      title: (0, b.__)("Define the maximum file size attachment that a student can upload in MB", "ohmylms"),
      error: Number(null == h ? void 0 : h.max_file_size_limit) < 1,
      errorMessage: (0, b.__)("File size limit should be greater than 0", "ohmylms"),
      className: "ohmylms-assignment-settings-file-size-limit-input",
      handleChange: function (e) {
        var t = e;
        /^\d*\.?\d*$/.test(t) && P("max_file_size_limit", t);
      },
      onKeyDown: function (e) {
        (["e", "E", "+", "-", "/", "\\", ",", "*", " "].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
      },
      onBlur: function () {
        (null == h ? void 0 : h.max_file_size_limit) < 1 && P("max_file_size_limit", 1);
      },
      variant: "secondary"
    })
  }), React.createElement(Dn, {
    resources: (null == h || null === (f = h.download_resource) || void 0 === f ? void 0 : f.file) || [],
    handleResources: function (e) {
      var t;
      S.setAssignment(Aa(Aa({}, h), {}, {
        download_resource: Aa(Aa({}, null == h ? void 0 : h.download_resource), {}, {
          file: [].concat(Oa((null == h || null === (t = h.download_resource) || void 0 === t ? void 0 : t.file) || []), Oa(e))
        })
      }));
    },
    handleDeleteResource: function (e) {
      var t,
        n = null == h || null === (t = h.download_resource) || void 0 === t || null === (t = t.file) || void 0 === t ? void 0 : t.filter(function (t) {
          return (null == t ? void 0 : t.id) !== e;
        });
      S.setAssignment(Aa(Aa({}, h), {}, {
        download_resource: Aa(Aa({}, null == h ? void 0 : h.download_resource), {}, {
          file: n
        })
      }));
    },
    showDivider: !1,
    tooltipText: (0, b.__)("Upload downloadable files or materials for students to access with this assignment.", "ohmylms")
  }), _ && React.createElement(I.SpacerWP, {
    paddingX: 5,
    paddingTop: 5,
    paddingBottom: 0
  }, React.createElement(Gn, {
    label: (0, b.__)("Delete Assignment", "ohmylms"),
    onDelete: j,
    alertTitle: (0, b.__)("Delete Assignment", "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to delete this assignment?", "ohmylms")
  })));
};
const Da = (0, g.memo)(Na);
var Wa = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fill: "currentColor",
    stroke: "#fff",
    strokeWidth: ".2",
    clipPath: "url(#clip0_18_813)"
  }, React.createElement("path", {
    d: "M2.417 13.583c.332.33.781.517 1.25.517H15a.9.9 0 110 1.8H3.667A3.567 3.567 0 01.1 12.333V1a.9.9 0 111.8 0v11.333c0 .469.186.918.517 1.25z"
  }), React.createElement("path", {
    d: "M13.636 11.636A.9.9 0 0112.1 11V7a.9.9 0 111.8 0v4a.9.9 0 01-.264.636zm-8 0A.9.9 0 014.1 11V7a.9.9 0 011.8 0v4a.9.9 0 01-.264.636zm4 0a.9.9 0 01-1.536-.637V3.666a.9.9 0 111.8 0v7.333a.9.9 0 01-.264.637z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_18_813"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h16v16H0z"
  })))));
};
const za = (0, g.memo)(Wa);
function Ba(e) {
  return Ba = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ba(e);
}
var La = function (e) {
    if (!e || "object" !== Ba(e)) return !1;
    for (var t = 0, n = ["time_limit", "total_points", "maximum_pass_points", "number_of_files", "max_file_size_limit"]; t < n.length; t++) {
      var r = Number(e[n[t]]);
      if (isNaN(r) || r < 0) return !1;
    }
    return !(Number(e.maximum_pass_points) > Number(e.total_points));
  },
  Va = n(69986);
function Ha(e) {
  return Ha = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ha(e);
}
function Ga(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ua(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Ga(Object(n), !0).forEach(function (t) {
      qa(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ga(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function qa(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Ha(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Ha(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Ha(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ya() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Qa(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Qa(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Qa(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Qa(d, "constructor", u), Qa(u, "constructor", c), c.displayName = "GeneratorFunction", Qa(u, a, "GeneratorFunction"), Qa(d), Qa(d, a, "Generator"), Qa(d, r, function () {
    return this;
  }), Qa(d, "toString", function () {
    return "[object Generator]";
  }), (Ya = function () {
    return {
      w: o,
      m
    };
  })();
}
