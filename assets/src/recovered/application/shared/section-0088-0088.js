// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var GW = function (e) {
  var t,
    n,
    r = e.isOpen,
    a = e.onClose,
    o = e.onSave;
  sn().extend(NW()), sn().extend(lo());
  var i = (0, y.useDispatch)(T.default),
    l = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    c = null === (t = window.creator_lms_params) || void 0 === t || null === (t = t.timezone) || void 0 === t ? void 0 : t.timezone_string,
    u = null === (n = window.creator_lms_params) || void 0 === n || null === (n = n.timezone) || void 0 === n ? void 0 : n.timezone_type,
    s = "future" === (null == l ? void 0 : l.status) ? sn()(l.post_date.date).tz(l.post_date.timezone).local().format("YYYY-MM-DDTHH:mm:ss") : sn()().tz(c).format("YYYY-MM-DDTHH:mm:ss"),
    d = VW((0, g.useState)(s), 2),
    m = d[0],
    p = d[1],
    f = VW((0, g.useState)(!1), 2),
    v = (f[0], f[1], VW((0, g.useState)(""), 2)),
    h = (v[0], v[1]),
    _ = (0, g.useRef)(null),
    w = VW((0, g.useState)(""), 2),
    E = w[0],
    S = w[1];
  return React.createElement(React.Fragment, null, r && React.createElement(I.ModalWP, {
    onRequestClose: a,
    title: (0, b.__)("Schedule", "ohmylms"),
    className: "omlms-schedule-modal",
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0
  }, React.createElement("div", {
    className: "omlms-calendar",
    ref: _
  }, React.createElement(q.DateTimePicker, {
    currentDate: m,
    onChange: function (e) {
      return function (e) {
        DW(e, c) ? S("") : S((0, b.__)("Please select a future date", "ohmylms")), p(e), h(e);
      }(e);
    },
    is12Hour: !0,
    timezone: c
  }), E && React.createElement(I.TextWP, {
    color: "#F85656"
  }, E), React.createElement(I.SpacerWP, {
    marginBottom: 5
  }), React.createElement(I.FlexWP, {
    justify: "flex-end",
    gap: 3,
    className: "calendar-button-area"
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: a,
    className: "omlms-calendar-button outlined"
  }, (0, b.__)("Cancel", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "primary",
    disabled: E || !m,
    onClick: function () {
      if (DW(m, c)) {
        S(""), p(m);
        var e = sn()(m).tz(c).utc().toISOString();
        i.setCourse(BW(BW({}, l), {}, {
          post_date: {
            date: e,
            timezone_type: u,
            timezone: c
          }
        })), o("future", {
          date: m,
          timezone_type: u,
          timezone: c
        }), a();
      } else S((0, b.__)("Please select a future date", "ohmylms"));
    },
    className: "omlms-calendar-button"
  }, (0, b.__)("Save", "ohmylms"))))), React.createElement("style", null, "\n.omlms-schedule-modal .components-datetime__date {\n    display: none;\n}\n    \n.omlms-schedule-modal .components-datetime__timezone {\n    display: none;\n}\n\n"));
};

const UW = (0, g.memo)(GW);

var qW = n(57677),
  YW = n(39214),
  QW = n(22642);

function ZW(e) {
  return function (e) {
    if (Array.isArray(e)) return $W(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return $W(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $W(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function $W(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var KW = function () {
  return React.createElement("svg", {
    width: "16",
    height: "18",
    fill: "none",
    viewBox: "0 0 16 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#7A8B9A",
    fillRule: "evenodd",
    d: "M0 5A4.5 4.5 0 014.5.5h10A1.5 1.5 0 0116 2v15a1 1 0 01-1 1H3.5a3.5 3.5 0 01-3.465-3H0V5zm14.5 7.5h-11a2 2 0 100 4h11v-4zM4.25 5A.75.75 0 015 4.25h7a.75.75 0 110 1.5H5A.75.75 0 014.25 5zM5 7.25a.75.75 0 000 1.5h5a.75.75 0 100-1.5H5z",
    clipRule: "evenodd"
  }));
};

function JW() {
  var e = (0, L.useIsPro)(),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getAllIntegrations();
    }, []),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    r = (0, L.useFeatureAccess)("funnel"),
    a = (0, g.useMemo)(function () {
      var a, o, i;
      return [{
        id: "content",
        title: (0, b.__)("Content", "ohmylms"),
        icon: React.createElement(KW, null),
        completed: !0
      }, {
        id: "settings",
        title: (0, b.__)("Settings", "ohmylms"),
        icon: React.createElement(qW.A, {
          icon: YW.A
        }),
        completed: !1
      }].concat(ZW(e && (null != t && null !== (a = t.funnel) && void 0 !== a && a.is_enable && r || !r && (null == n || null === (o = n.funnel_steps) || void 0 === o ? void 0 : o.length) > 0) ? [{
        id: "funnel",
        title: (0, b.__)("One-Click Offer", "ohmylms"),
        icon: React.createElement(qW.A, {
          icon: QW.A
        }),
        completed: !1
      }] : []), ZW(null != t && null !== (i = t.community) && void 0 !== i && i.is_enable ? [{
        id: "community",
        title: (0, b.__)("Community", "ohmylms"),
        icon: React.createElement(qW.A, {
          icon: Sc.A
        })
      }] : []), [{
        id: "preview",
        title: (0, b.__)("Preview", "ohmylms"),
        icon: React.createElement(qW.A, {
          icon: QW.A
        }),
        completed: !1
      }]);
    }, [e, t, r, n]);
  return {
    steps: a,
    totalSteps: a.length
  };
}

function XW(e) {
  return XW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, XW(e);
}

function ez(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function tz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ez(Object(n), !0).forEach(function (t) {
      nz(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ez(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function nz(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != XW(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != XW(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == XW(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function rz(e, t) {
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
      if ("string" == typeof e) return az(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? az(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function az(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

const oz = function (e) {
  var t = (0, L.useIsPro)(),
    n = e.activeStep,
    r = (e.setActiveStep, e.courseDescription),
    a = e.setLocalCourse,
    o = e.loading,
    i = e.handleAutomation,
    l = e.handleIntegration,
    c = e.courseId,
    u = e.courseName,
    s = e.onSave,
    d = (0, f.Zp)(),
    m = (0, f.g)().subStep,
    p = (0, y.useDispatch)(T.default),
    v = Ze(),
    _ = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    w = rz((0, g.useState)(!1), 2),
    E = w[0],
    S = w[1],
    R = rz((0, g.useState)(!1), 2),
    x = R[0],
    C = R[1],
    P = rz((0, g.useState)(!1), 2),
    O = P[0],
    k = P[1],
    j = JW(),
    A = j.steps,
    M = j.totalSteps,
    F = function (e) {
      var t = "/course-edit/".concat(c, "/").concat(e);
      if ("settings" === e) {
        var r = "settings" === n && m ? m : "basics";
        d("".concat(t, "/").concat(r));
      } else d("funnel" === e ? "".concat(t) : t);
    },
    N = function () {
      var e = A.findIndex(function (e) {
          return n === e.id;
        }),
        t = A[e + 1],
        r = null == t ? void 0 : t.id;
      F(r);
    },
    D = function () {
      var e = A.findIndex(function (e) {
          return n === e.id;
        }),
        t = A[e - 1],
        r = null == t ? void 0 : t.id;
      F(r);
    },
    W = [{
      title: "future" === (null == _ ? void 0 : _.status) ? (0, b.__)("Scheduled", "ohmylms") : (0, b.__)("Schedule", "ohmylms"),
      key: "1",
      onClick: function () {
        C(!0);
      }
    }],
    z = function (e, t) {
      s(e, t), "preview" === n && k(!0);
    };
  return h().createElement(h().Fragment, null, h().createElement(I.CardWP, {
    padding: "10px 10px 10px 20px",
    className: "omlms-top-navigation ".concat(v ? " ai-course" : "", " creatorlms-active-step-").concat(n)
  }, h().createElement(I.FlexWP, {
    align: "center",
    justify: "space-between",
    className: "omlms-top-navigation-inner omlms-steps-".concat(M)
  }, h().createElement(I.FlexItemWP, {
    flex: 1,
    className: "omlms-back-button-wrapper"
  }, h().createElement(I.TooltipWP, {
    title: (0, b.__)("Exit the builder", "ohmylms")
  }, h().createElement(Nr, {
    onClick: function () {
      d("/courses");
    }
  }))), h().createElement(I.FlexItemWP, {
    flex: 2,
    className: "omlms-course-single-steps-item"
  }, h().createElement(I.FlexWP, {
    align: "center",
    justify: "center",
    gap: 10,
    className: "omlms-course-single-steps-container"
  }, A.map(function (e, t) {
    return h().createElement("div", {
      key: e.id,
      className: "omlms-course-single-steps-wrapper ".concat(n === e.id ? "active" : "", " ").concat(A.findIndex(function (e) {
        return e.id === n;
      }) > t ? "completed" : "", " ").concat(O ? "completed" : "")
    }, h().createElement(I.ButtonWP, {
      variant: "default",
      onClick: function () {
        return t = e.id, void (v || ((null == _ ? void 0 : _.description) !== r && (p.setCourse(tz(tz({}, _), {}, {
          description: r
        })), a(r)), F(t)));
        var t;
      },
      disabled: v || o,
      className: "omlms-course-single-steps ".concat(n === e.id ? "active" : "", " ").concat(A.findIndex(function (e) {
        return e.id === n;
      }) > t ? "completed" : "", " ").concat(O ? "completed" : "")
    }, h().createElement("div", {
      className: "omlms-course-single-steps-indicator"
    }, A.findIndex(function (e) {
      return e.id === n;
    }) > t || O ? h().createElement(q.Icon, {
      icon: IW.A
    }) : t + 1), e.title));
  }))), h().createElement(I.FlexItemWP, {
    flex: 1,
    className: "omlms-course-actions-wrapper"
  }, h().createElement(I.FlexWP, {
    align: "center",
    justify: "flex-end",
    gap: 1
  }, "content" === n && h().createElement(h().Fragment, null, h().createElement(I.ButtonWP, {
    variant: "primary",
    onClick: N
  }, (0, b.__)("Next", "ohmylms"))), "settings" === n && h().createElement(I.FlexWP, {
    justify: "flex-end",
    align: "stretch",
    gap: 5
  }, h().createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: D
  }, (0, b.__)("Previous", "ohmylms")), h().createElement(I.ButtonWP, {
    variant: "primary",
    onClick: N
  }, (0, b.__)("Next", "ohmylms"))), "community" === n && h().createElement(I.FlexWP, {
    justify: "flex-end",
    align: "stretch",
    gap: 5
  }, h().createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: D
  }, (0, b.__)("Previous", "ohmylms")), h().createElement(I.ButtonWP, {
    variant: "primary",
    onClick: N
  }, (0, b.__)("Next", "ohmylms"))), "funnel" === n && h().createElement(I.FlexWP, {
    justify: "flex-end",
    align: "stretch",
    gap: 5
  }, h().createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: D
  }, (0, b.__)("Previous", "ohmylms")), h().createElement(I.ButtonWP, {
    variant: "primary",
    onClick: N
  }, (0, b.__)("Next", "ohmylms"))), "preview" === n && h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
    justify: "flex-end",
    align: "stretch",
    gap: 5
  }, h().createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: D
  }, (0, b.__)("Previous", "ohmylms")), h().createElement(I.DropdownButtonWP, {
    menuItems: W,
    buttonLabel: (0, b.__)("".concat("draft" === (null == _ ? void 0 : _.status) || "future" === (null == _ ? void 0 : _.status) ? "Publish" : "Update"), "ohmylms"),
    onClick: function () {
      return z("publish");
    },
    loading: o
  }))), h().createElement(I.DropdownMenuWP, {
    className: "omlms-more-options-dropdown",
    contentClassName: "omlms-more-options-dropdown-content",
    icon: h().createElement(q.Icon, {
      icon: Sc.A
    }),
    controls: [{
      title: (0, b.__)("Integrations", "ohmylms"),
      onClick: function () {
        v || (t ? l && l("course", c, u) : S(!0));
      }
    }, {
      title: (0, b.__)("Course Automation", "ohmylms"),
      onClick: function () {
        var e;
        if (!v) {
          if (t) return null !== (e = window) && void 0 !== e && null !== (e = e.creator_lms_params) && void 0 !== e && e.is_mailmint_active ? void i("course", c, u) : (S(!0), p.updateProModalTitle((0, b.__)("Missing Mail Mint Plugin!", "ohmylms")), p.updateProModalContent((0, b.__)("Mail Mint is required to enable automation. Please install and activate the plugin.", "ohmylms")), p.updateProModalButtonText((0, b.__)("Install and Activate", "ohmylms")), void p.updateProModalButtonAction("activate-mail-mint"));
          S(!0);
        }
      }
    }, {
      title: (0, b.__)("Save as Draft", "ohmylms"),
      onClick: function () {
        z("draft");
      }
    }]
  }))))), E && h().createElement(h().Fragment, null, h().createElement(He.default, {
    isOpen: E,
    onClose: S
  })), x && h().createElement(h().Fragment, null, h().createElement(UW, {
    isOpen: x,
    onClose: function () {
      return C(!1);
    },
    onSave: z
  })));
};

function iz(e) {
  return iz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, iz(e);
}

function lz(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function cz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? lz(Object(n), !0).forEach(function (t) {
      uz(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lz(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function uz(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != iz(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != iz(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == iz(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function sz(e, t) {
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
      if ("string" == typeof e) return dz(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? dz(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function dz(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function mz() {
  var e,
    t,
    n,
    r,
    a,
    o = (0, y.useSelect)(function (e) {
      return e(T.default).isGamificationEnable();
    }, []),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getGamificationSettings();
    }, []);
  sn().extend(NW()), sn().extend(lo());
  var l = (0, y.useDispatch)("creator-lms/store"),
    c = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    u = sz((0, g.useState)((null == c || null === (e = c.sale_price_dates_from) || void 0 === e ? void 0 : e.date) && (null == c || null === (t = c.sale_price_dates_to) || void 0 === t ? void 0 : t.date)), 2),
    s = u[0],
    d = u[1],
    m = sz((0, g.useState)(""), 2),
    p = m[0],
    f = m[1],
    v = sz((0, g.useState)({}), 2),
    _ = v[0],
    w = v[1],
    E = function (e) {
      return e ? sn()(e).format("YYYY-MM-DDTHH:mm:ss") : "";
    },
    S = c.price_type,
    R = c.regular_price,
    x = c.sale_price,
    C = c.purchase_point,
    P = function (e, t) {
      p && (l.setCourse(cz(cz({}, c), {}, uz({}, t, _[t]))), 0 == R && "paid" === S ? (l.setIsValidCourseSettings(!1), f((0, b.__)("Regular price should be greater than 0", "ohmylms"))) : (f(""), l.setIsValidCourseSettings(!0))), w({});
    },
    O = function (e, t) {
      var n = e.target.value;
      0 == n && l.setCourse(cz(cz({}, c), {}, uz({}, t, ""))), "sale_price" !== t && w(cz(cz({}, _), {}, uz({}, t, n)));
    };
  return h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
    justify: "space-between",
    align: "flex-start",
    className: "omlms-single-settings settings-price omlms-".concat(S)
  }, h().createElement(I.FlexItemWP, {
    style: {
      flex: "5"
    }
  }, h().createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Pricing", "ohmylms")), h().createElement(I.SpacerWP, {
    marginBottom: 1
  }), h().createElement(I.TextWP, null, (0, b.__)("Select if learners will pay or access for free.", "ohmylms"))), h().createElement(I.FlexItemWP, {
    style: {
      flex: "3"
    }
  }, h().createElement(I.FlexWP, {
    align: "center",
    justify: "flex-end"
  }, h().createElement(I.RadioGroupWP, {
    onChange: function (e) {
      "free" === e && (l.setIsValidCourseSettings(!0), f(""), w({})), l.setCourse(cz(cz({}, c), {}, {
        price_type: e,
        sale_price: "free" === e ? "" : c.sale_price,
        regular_price: "free" === e ? 0 : c.regular_price
      })), 0 == c.regular_price && "free" !== e && (l.setIsValidCourseSettings(!1), f((0, b.__)("Regular price should be greater than 0", "ohmylms")));
    },
    value: "" === S ? "free" : S,
    options: [{
      value: "free",
      label: (0, b.__)("Free", "ohmylms")
    }, {
      value: "paid",
      label: (0, b.__)("Paid", "ohmylms")
    }],
    isBlock: !1
  })), "paid" === S && h().createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, h().createElement(I.SpacerWP, {
    padding: 4,
    marginBottom: 0,
    marginTop: 4
  }, h().createElement(I.FlexWP, {
    direction: "column",
    justify: "flex-end",
    align: "flex-end",
    className: "omlms-settings-right"
  }, h().createElement("div", {
    className: "omlms-price-range",
    style: {
      width: "100%"
    }
  }, h().createElement(I.FlexWP, {
    gap: 4
  }, h().createElement(I.FlexBlockWP, {
    className: "omlms-single-price"
  }, h().createElement(I.TextWP, {
    as: "span",
    variant: "muted"
  }, (0, b.__)("Regular Price", "ohmylms")), h().createElement(I.SpacerWP, {
    marginBottom: 1
  }), h().createElement(I.InputNumberWP, {
    value: R ? parseFloat(R).toFixed(2) : "",
    onFocus: function (e) {
      return O(e, "regular_price");
    },
    onBlur: function (e) {
      return P(0, "regular_price");
    },
    placeholder: (0, b.__)("0.00", "ohmylms"),
    className: "omlms-course-settings-pricing-input-regular omlms-price-input",
    onChange: function (e) {
      /^\d*\.?\d*$/.test(e) && function (e) {
        Number(x) > Number(e) && "paid" === S ? (l.setIsValidCourseSettings(!1), f((0, b.__)("Discount price should be less than regular price", "ohmylms"))) : 0 == e ? (l.setIsValidCourseSettings(!1), f((0, b.__)("Regular price should be greater than 0", "ohmylms"))) : "" !== e && e ? (l.setIsValidCourseSettings(!0), f("")) : (l.setIsValidCourseSettings(!1), f((0, b.__)("Regular price can not be empty", "ohmylms"))), l.setCourse(cz(cz({}, c), {}, {
          regular_price: e
        }));
      }(e);
    },
    onKeyDown: function (e) {
      (["e", "E", "+", "-", "/", "\\"].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter", "."].includes(e.key)) && e.preventDefault();
    }
  })), h().createElement(I.FlexBlockWP, {
    className: "omlms-single-price"
  }, h().createElement(I.TextWP, {
    as: "span",
    variant: "muted"
  }, (0, b.__)("Sale Price", "ohmylms")), h().createElement(I.SpacerWP, {
    marginBottom: 1
  }), h().createElement(I.InputNumberWP, {
    onFocus: function (e) {
      return O(e, "sale_price");
    },
    value: x ? parseFloat(x).toFixed(2) : "",
    onBlur: function (e) {
      return P(0, "sale_price");
    },
    placeholder: (0, b.__)("0.00", "ohmylms"),
    className: "omlms-course-settings-pricing-input-discount omlms-price-input",
    onChange: function (e) {
      (/^\d*\.?\d*$/.test(e) || "" === e || null === e) && function (e) {
        var t, n, r, a;
        Number(e) >= Number(R) && "paid" === S ? (l.setIsValidCourseSettings(!1), f((0, b.__)("Discount price should be less than regular price", "ohmylms"))) : 0 == R && "paid" === S ? (l.setIsValidCourseSettings(!1), f((0, b.__)("Regular price should be greater than 0", "ohmylms"))) : (l.setIsValidCourseSettings(!0), f("")), null === e ? l.setCourse(cz(cz({}, c), {}, {
          sale_price: null != e ? e : "",
          sale_price_dates_from: {
            date: "",
            timezone_type: null == c || null === (t = c.sale_price_dates_from) || void 0 === t ? void 0 : t.timezone_type,
            timezone: null == c || null === (n = c.sale_price_dates_from) || void 0 === n ? void 0 : n.timezone
          },
          sale_price_dates_to: {
            date: "",
            timezone_type: null == c || null === (r = c.sale_price_dates_to) || void 0 === r ? void 0 : r.timezone_type,
            timezone: null == c || null === (a = c.sale_price_dates_to) || void 0 === a ? void 0 : a.timezone
          }
        })) : l.setCourse(cz(cz({}, c), {}, {
          sale_price: null != e ? e : ""
        }));
      }(e);
    },
    onKeyDown: function (e) {
      (["e", "E", "+", "-", "/", "\\"].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
    }
  }))), h().createElement(I.SpacerWP, {
    marginBottom: 1
  }), p && h().createElement(I.TextWP, {
    color: "#FF4955"
  }, p), h().createElement(I.SpacerWP, {
    marginBottom: 3
  }), "" !== x && h().createElement(h().Fragment, null, h().createElement(I.CardWP, null, h().createElement(Kt, {
    title: (0, b.__)("Sale Schedule", "ohmylms"),
    customClass: "schedule-price-handler",
    onChange: function () {
      var e, t, n, r;
      d(!s), s && l.setCourse(cz(cz({}, c), {}, {
        sale_price_dates_from: {
          date: "",
          timezone_type: null == c || null === (e = c.post_date) || void 0 === e ? void 0 : e.timezone_type,
          timezone: null == c || null === (t = c.post_date) || void 0 === t ? void 0 : t.timezone
        },
        sale_price_dates_to: {
          date: "",
          timezone_type: null == c || null === (n = c.post_date) || void 0 === n ? void 0 : n.timezone_type,
          timezone: null == c || null === (r = c.post_date) || void 0 === r ? void 0 : r.timezone
        }
      }));
    },
    isChecked: s,
    showDivider: !1,
    conditionalChild: h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
      marginBottom: 3
    }), h().createElement("div", {
      style: {
        border: "1px solid #c8d2e9",
        height: "40px",
        display: "inline-block"
      }
    }, h().createElement(I.DateRangePickerWP, {
      initialStartDate: Boolean(null == c ? void 0 : c.sale_price_dates_from) ? null == c || null === (n = c.sale_price_dates_from) || void 0 === n ? void 0 : n.date : null,
      initialEndDate: null != c && c.sale_price_dates_to ? null == c || null === (r = c.sale_price_dates_to) || void 0 === r ? void 0 : r.date : null,
      onChange: function (e) {
        var t, n, r, a;
        l.setCourse(cz(cz({}, c), {}, {
          sale_price_dates_from: {
            date: E(e[0]),
            timezone_type: null == c || null === (t = c.post_date) || void 0 === t ? void 0 : t.timezone_type,
            timezone: null == c || null === (n = c.post_date) || void 0 === n ? void 0 : n.timezone
          },
          sale_price_dates_to: {
            date: E(e[1]),
            timezone_type: null == c || null === (r = c.post_date) || void 0 === r ? void 0 : r.timezone_type,
            timezone: null == c || null === (a = c.post_date) || void 0 === a ? void 0 : a.timezone
          }
        }));
      },
      disablePastDates: !0
    })))
  }))), (!0 === o || 1 === o) && (null == i || null === (a = i.reward_settings) || void 0 === a || null === (a = a.rules) || void 0 === a ? void 0 : a.find(function (e) {
    return "purchase_course" === e.slug;
  }).value) && h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
    gap: 4
  }, h().createElement(I.FlexBlockWP, {
    className: "omlms-single-price"
  }, h().createElement(I.SpacerWP, {
    marginBottom: 1
  }), h().createElement(I.TextWP, {
    as: "span",
    variant: "muted"
  }, (0, b.__)("Purchase with Points", "ohmylms")), h().createElement(I.SpacerWP, {
    marginBottom: 1
  }), h().createElement(I.InputNumberWP, {
    onFocus: function (e) {
      return O(e, "purchase_point");
    },
    value: C || "",
    onBlur: function (e) {
      return P(0, "purchase_point");
    },
    placeholder: (0, b.__)("0", "ohmylms"),
    className: "omlms-course-settings-pricing-input-discount omlms-price-input",
    onChange: function (e) {
      (/^\d*\.?\d*$/.test(e) || "" === e || null === e) && function (e) {
        o ? l.setCourse(cz(cz({}, c), {}, {
          purchase_point: e
        })) : l.setCourse(cz(cz({}, c), {}, {
          purchase_point: ""
        }));
      }(e);
    },
    onKeyDown: function (e) {
      (["e", "E", "+", "-", "/", "\\"].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
    }
  }), h().createElement(I.TextWP, {
    variant: "muted",
    style: {
      marginTop: "10px"
    }
  }, (0, b.__)("Learners can purchase this course using either money or points, based on the selected method.", "ohmylms"))))))))))));
}

var pz = n(82140),
  fz = function (e) {
    var t = e.capacity,
      n = e.handleCapacityChange,
      r = e.capacityEnabled,
      a = e.handleCapacityEnabled;
    return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
      justify: "space-between",
      align: "flex-start"
    }, React.createElement(I.FlexItemWP, {
      style: {
        flex: "5"
      }
    }, React.createElement(I.HeadingWP, {
      level: 4
    }, (0, b.__)("Capacity", "ohmylms")), React.createElement(I.SpacerWP, {
      marginBottom: 1
    }), React.createElement(I.TextWP, null, (0, b.__)("Set up a limit of students who can enroll in this course.", "ohmylms"))), React.createElement(I.FlexItemWP, {
      style: {
        flex: "3"
      }
    }, React.createElement(I.FlexWP, {
      justify: "flex-end",
      direction: "column",
      gap: 5,
      align: "flex-end"
    }, React.createElement(I.FlexItemWP, null, React.createElement(Bt.A, {
      checked: r,
      onChange: a
    })), r && React.createElement(I.FlexItemWP, null, React.createElement(I.InputNumberWP, {
      value: t,
      min: 1,
      max: 1e4,
      onChange: function (e) {
        /^\d*$/.test(e) && n(Number(e));
      },
      onKeyDown: function (e) {
        (["e", "E", "+", "-", "/", "\\", ".", ","].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
      },
      onBlur: function () {
        t < 1 && n(1);
      }
    }))), r && 0 == t && React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
      marginBottom: 3
    }), React.createElement(I.TextWP, {
      as: "p",
      align: (0, pz.V)() ? "left" : "right",
      color: "#ffcc00"
    }, (0, b.__)("Capacity is set to 0. No students can enroll in this course.", "ohmylms"))))));
  };

const vz = (0, g.memo)(fz);
