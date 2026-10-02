// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var gz = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#000D25",
    d: "M5.625 9.75a3.375 3.375 0 110-6.75 3.375 3.375 0 010 6.75zm0-5.25a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75zm5.625 12.75v-.375a5.625 5.625 0 10-11.25 0v.375a.75.75 0 101.5 0v-.375a4.125 4.125 0 018.25 0v.375a.75.75 0 101.5 0zM18 13.5a5.25 5.25 0 00-8.75-3.913.75.75 0 101 1.118A3.75 3.75 0 0116.5 13.5a.75.75 0 101.5 0zm-4.875-6.75a3.375 3.375 0 110-6.75 3.375 3.375 0 010 6.75zm0-5.25a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z"
  })));
};
const hz = (0, g.memo)(gz);
var yz = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fill: "#000D25",
    clipPath: "url(#clip0_1300_2610)"
  }, React.createElement("path", {
    d: "M14.25 6.318V5.25a5.25 5.25 0 10-10.5 0v1.068A3.75 3.75 0 001.5 9.75v4.5A3.754 3.754 0 005.25 18h7.5a3.754 3.754 0 003.75-3.75v-4.5a3.75 3.75 0 00-2.25-3.432zm-9-1.068a3.75 3.75 0 017.5 0V6h-7.5v-.75zm9.75 9a2.25 2.25 0 01-2.25 2.25h-7.5A2.25 2.25 0 013 14.25v-4.5A2.25 2.25 0 015.25 7.5h7.5A2.25 2.25 0 0115 9.75v4.5z"
  }), React.createElement("path", {
    d: "M9 10.5a.75.75 0 00-.75.75v1.5a.75.75 0 101.5 0v-1.5A.75.75 0 009 10.5z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_1300_2610"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h18v18H0z"
  })))));
};
const bz = (0, g.memo)(yz);
var _z = function (e) {
  var t = e.access,
    n = e.handleAccessChange,
    r = [{
      label: (0, b.__)("Public", "ohmylms"),
      value: "public",
      icon: hz
    }, {
      label: (0, b.__)("Password Protected", "ohmylms"),
      value: "password_protected",
      icon: bz
    }];
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: "space-between",
    align: "flex-start",
    className: "ohmylms-course-access-section"
  }, React.createElement(I.FlexItemWP, {
    style: {
      flex: "5"
    }
  }, React.createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Visibility Status", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 1
  }), React.createElement(I.TextWP, null, (0, b.__)("Choose who can view the course and enroll in this course.", "ohmylms"))), React.createElement(I.FlexItemWP, {
    style: {
      flex: "3"
    }
  }, React.createElement(I.FlexWP, {
    justify: "flex-end",
    align: "flex-end",
    direction: "column"
  }, React.createElement(ls, {
    isBlock: !0,
    options: r,
    defaultValue: t,
    onChange: n
  })))));
};
const wz = (0, g.memo)(_z);
function Ez(e) {
  return Ez = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ez(e);
}
function Sz(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Rz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Sz(Object(n), !0).forEach(function (t) {
      xz(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sz(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function xz(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Ez(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Ez(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Ez(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var Cz = function (e) {
  var t,
    n,
    r,
    a = (0, y.useDispatch)(T.default),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    i = function (e, t) {
      a.setCourse(Rz(Rz({}, o), {}, {
        duration: Rz(Rz({}, o.duration), {}, xz({}, t, e))
      }));
    };
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: "space-between",
    align: "flex-start"
  }, React.createElement(I.FlexItemWP, {
    style: {
      flex: "5"
    }
  }, React.createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Course Duration", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 1
  }), React.createElement(I.TextWP, null, (0, b.__)("Define the Journey - Set the duration of how long the course is.", "ohmylms"))), React.createElement(I.FlexItemWP, {
    style: {
      flex: "3"
    }
  }, React.createElement(I.FlexWP, {
    gap: 3
  }, React.createElement(I.FlexBlockWP, null, React.createElement(I.InputNumberWP, {
    suffix: "hour",
    min: 0,
    name: "hour",
    value: null === (t = o.duration) || void 0 === t ? void 0 : t.hour,
    onChange: function (e) {
      /^\d*\.?\d*$/.test(e) && i(e, "hour");
    },
    onKeyDown: function (e) {
      (["e", "E", "+", "-", "/", "\\", ".", ","].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
    },
    onBlur: function () {
      var e;
      (null === (e = o.duration) || void 0 === e ? void 0 : e.hour) < 0 && i(0, "hour");
    }
  })), React.createElement(I.FlexBlockWP, null, React.createElement(I.InputNumberWP, {
    suffix: "min",
    min: 0,
    name: "min",
    value: null === (n = o.duration) || void 0 === n ? void 0 : n.min,
    onChange: function (e) {
      /^\d*\.?\d*$/.test(e) && i(e, "min");
    },
    onKeyDown: function (e) {
      (["e", "E", "+", "-", "/", "\\", ".", ","].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
    },
    onBlur: function () {
      var e;
      (null === (e = o.duration) || void 0 === e ? void 0 : e.min) < 0 && i(0, "min");
    }
  })), React.createElement(I.FlexBlockWP, null, React.createElement(I.InputNumberWP, {
    suffix: "sec",
    min: 0,
    name: "sec",
    value: null === (r = o.duration) || void 0 === r ? void 0 : r.sec,
    onChange: function (e) {
      /^\d*\.?\d*$/.test(e) && i(e, "sec");
    },
    onKeyDown: function (e) {
      (["e", "E", "+", "-", "/", "\\", ".", ","].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
    },
    onBlur: function () {
      var e;
      (null === (e = o.duration) || void 0 === e ? void 0 : e.sec) < 0 && i(0, "sec");
    }
  }))))));
};
const Pz = (0, g.memo)(Cz);
var Oz = function (e) {
  var t = e.experienceLevel,
    n = e.handleExperienceLevelChange,
    r = [{
      value: "all",
      label: (0, b.__)("All levels", "ohmylms")
    }, {
      value: "beginner",
      label: (0, b.__)("Beginner", "ohmylms")
    }, {
      value: "experience",
      label: (0, b.__)("Experience", "ohmylms")
    }, {
      value: "expert",
      label: (0, b.__)(" Expert", "ohmylms")
    }];
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: "space-between",
    align: "flex-start"
  }, React.createElement(I.FlexItemWP, {
    style: {
      flex: "5"
    }
  }, React.createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Level", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 1
  }), React.createElement(I.TextWP, null, (0, b.__)("Select the required level of knowledge and skills expected of the student.", "ohmylms"))), React.createElement(I.FlexItemWP, {
    style: {
      flex: "3"
    }
  }, React.createElement(I.FlexWP, {
    justify: "flex-end"
  }, React.createElement(I.RadioGroupWP, {
    isBlock: !0,
    options: r,
    value: t,
    onChange: n,
    optionType: "button",
    buttonStyle: "solid"
  })))));
};
const kz = (0, g.memo)(Oz);
var jz = function (e) {
  var t = e.reviewEnabled,
    n = e.handleReviewEnabled;
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: "space-between",
    align: "flex-start"
  }, React.createElement(I.FlexItemWP, {
    style: {
      flex: "5"
    }
  }, React.createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Review", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 1
  }), React.createElement(I.TextWP, null, (0, b.__)("Enable reviews for courses to increase authority.", "ohmylms"))), React.createElement(I.FlexItemWP, {
    style: {
      flex: "3"
    }
  }, React.createElement(I.FlexWP, {
    justify: "flex-end"
  }, React.createElement(Bt.A, {
    checked: t,
    onChange: n
  })))));
};
const Az = (0, g.memo)(jz);
function Mz(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Tz = function (e) {
  var t = e.slug,
    n = e.handleSlugChange,
    r = function (e, t) {
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
          if ("string" == typeof e) return Mz(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Mz(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(""), 2),
    a = r[0],
    o = r[1];
  return h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
    justify: "space-between",
    align: "flex-start"
  }, h().createElement(I.FlexItemWP, {
    style: {
      flex: "5"
    }
  }, h().createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Slug", "ohmylms")), h().createElement(I.SpacerWP, {
    marginBottom: 1
  }), h().createElement(I.TextWP, null, (0, b.__)("The slug is all lowercase and contains only letters, numbers, and hyphens.", "ohmylms"))), h().createElement(I.FlexItemWP, {
    style: {
      flex: "3"
    }
  }, h().createElement(I.InputWP, {
    className: "ohmylms-course-settings-slug-input",
    defaultValue: t,
    onChange: function (e) {
      !function (e) {
        e.trim() ? o("") : o((0, b.__)("Course slug cannot be empty", "ohmylms")), n(e);
      }(e.replace(/[^a-zA-Z0-9-]/g, ""));
    },
    placeholder: (0, b.__)("Enter course slug", "ohmylms"),
    status: a ? "error" : "",
    maxLength: 200,
    onKeyDown: function (e) {
      " " === e.key && e.preventDefault();
    }
  }), a && h().createElement("div", {
    className: "ohmylms-input-error",
    style: {
      color: "red",
      fontSize: "12px",
      marginTop: "4px"
    }
  }, a))));
};
const Iz = (0, g.memo)(Tz);
function Fz(e) {
  return Fz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Fz(e);
}
function Nz(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Dz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Nz(Object(n), !0).forEach(function (t) {
      Wz(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nz(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Wz(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Fz(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Fz(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Fz(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function zz(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Bz = function () {
  var e = (0, y.useDispatch)(T.default),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    n = true,
    r = function (e, t) {
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
          if ("string" == typeof e) return zz(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zz(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    a = r[0],
    o = r[1],
    i = t.availability,
    l = t.available_date,
    c = t.access_type,
    u = t.has_capacity,
    s = t.capacity,
    d = t.level,
    m = t.enable_reviews,
    p = t.slug,
    f = t.is_cohort;
  return React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: a,
    onClose: o
  }), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingY: 6
  }, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(mz, null))), React.createElement(I.SpacerWP, {
    marginBottom: 6
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    className: "ohmylms-basic-tab ohmylms-course-settings"
  }, !f && React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(vz, {
    capacity: s,
    capacityEnabled: u,
    handleCapacityEnabled: function (n) {
      e.setCourse(Dz(Dz({}, t), {}, {
        has_capacity: n
      }));
    },
    handleCapacityChange: function (n) {
      isNaN(n) ? e.setCourse(Dz(Dz({}, t), {}, {
        capacity: 0
      })) : e.setCourse(Dz(Dz({}, t), {}, {
        capacity: n
      }));
    }
  })), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(wz, {
    access: c,
    handleAccessChange: function (n) {
      e.setCourse(Dz(Dz({}, t), {}, {
        access_type: n
      }));
    }
  })), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(Pz, {
    durationEnabled: i,
    handleDurationEnabled: function (n) {
      e.setCourse(Dz(Dz({}, t), {}, {
        availability: n
      }));
    },
    availableDate: l,
    handleDurationChange: function (n) {
      e.setCourse(Dz(Dz({}, t), {}, {
        available_date: n
      }));
    }
  })), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(kz, {
    experienceLevel: d,
    handleExperienceLevelChange: function (n) {
      e.setCourse(Dz(Dz({}, t), {}, {
        level: n
      }));
    }
  })), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(Iz, {
    slug: p,
    handleSlugChange: function (n) {
      "" === (null == n ? void 0 : n.trim()) ? e.setIsValidCourseSettings(!1) : e.setIsValidCourseSettings(!0), e.setCourse(Dz(Dz({}, t), {}, {
        slug: n
      }));
    }
  })), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(Az, {
    reviewEnabled: m,
    handleReviewEnabled: function (n) {
      e.setCourse(Dz(Dz({}, t), {}, {
        enable_reviews: n
      }));
    }
  })), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(Kt, {
    title: (0, b.__)("Sequential Lesson Access", "ohmylms"),
    isChecked: "yes" === (null == t ? void 0 : t.sequential_mode),
    onChange: function (r) {
      e.setCourse(Dz(Dz({}, t), {}, {
        sequential_mode: r ? "yes" : "no"
      }));
    },
    spacerPadding: 0,
    description: (0, b.__)("Students must complete each lesson in order before the next one unlocks.", "ohmylms")
  })))));
};
const Lz = (0, g.memo)(Bz);
function Vz(e, t) {
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
      if ("string" == typeof e) return Hz(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Hz(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Hz(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Gz() {
  var e;
  M().noConflict();
  var t = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    n = (0, y.useDispatch)(T.default),
    r = Vz((0, g.useState)(!1), 2),
    a = r[0],
    o = r[1],
    i = Vz((0, g.useState)(null), 2),
    l = i[0],
    c = i[1],
    u = Vz((0, g.useState)(!1), 2),
    s = u[0],
    d = u[1],
    m = (null == t || null === (e = t.download_resource) || void 0 === e ? void 0 : e.file) || [],
    p = true,
    f = (0, g.useCallback)(function () {
      var e;
      (e = wp.media({
        title: "Select or Upload Media",
        button: {
          text: "Use this media"
        },
        multiple: !0
      })).on("select", function () {
        var t = e.state().get("selection").toJSON().map(function (e) {
          return {
            id: e.id,
            url: e.url,
            name: e.filename,
            size: null == e ? void 0 : e.filesizeHumanReadable
          };
        });
        n.setCourseDownloadResource(t);
      }), e.open();
    }, [p, n]);
  return h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
    align: "flex-start",
    justify: "space-between",
    gap: 5
  }, h().createElement(I.FlexItemWP, {
    style: {
      flex: "5"
    }
  }, h().createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Download Resources", "ohmylms")), h().createElement(I.SpacerWP, {
    marginBottom: 1
  }), h().createElement(I.TextWP, null, (0, b.__)("Provide downloadable content for your students.", "ohmylms"))), h().createElement(I.FlexItemWP, {
    style: {
      flex: "3"
    }
  }, h().createElement(I.FlexWP, {
    gap: 4,
    align: "flex-end",
    justify: "flex-end",
    direction: "column",
    className: "ohmylms-download-resources-container"
  }, h().createElement(I.ButtonWP, {
    variant: "secondary",
    icon: h().createElement(Tn, null),
    onClick: f,
    className: "ohmylms-lesson-settings-resources-upload-button",
    "aria-disabled": "false",
    style: {
      cursor: "pointer"
    }
  }, (0, b.__)("Add files", "ohmylms")), m.length > 0 && h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    marginTop: 1
  }), m.map(function (e, t) {
    return h().createElement(I.CardWP, {
      key: e.id + "-" + t,
      style: {
        width: "100%"
      }
    }, h().createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 2
    }, h().createElement(I.FlexWP, {
      justify: "space-between",
      gap: 3
    }, h().createElement(I.FlexWP, {
      gap: 3,
      align: "center",
      justify: "flex-start",
      className: "ohmylms-single-resource-info"
    }, h().createElement(I.CardWP, {
      className: "resource-icon"
    }, h().createElement(I.FlexWP, {
      align: "center",
      justify: "center",
      style: {
        width: "40px",
        height: "40px"
      }
    }, h().createElement(kn, null))), h().createElement(I.FlexItemWP, {
      style: {
        width: "calc(100% - 52px)"
      }
    }, h().createElement(I.TextWP, {
      as: "span",
      size: 14,
      isBlock: !0,
      className: "resource-name",
      style: {
        wordWrap: "break-word"
      }
    }, e.name), h().createElement(I.TextWP, {
      as: "span",
      size: 12,
      variant: "muted",
      className: "resource-size"
    }, (null == e ? void 0 : e.size) && h().createElement(h().Fragment, null, (0, b.__)("Size:", "ohmylms"), " ", null == e ? void 0 : e.size)))), h().createElement(I.ButtonWP, {
      className: "resource-action",
      type: "text",
      icon: h().createElement(An, null),
      onClick: function () {
        return t = e.id, o(!0), void c(t);
        var t;
      }
    }))));
  }))))), a && h().createElement(Ie, {
    title: (0, b.__)("Delete resource item?", "ohmylms"),
    description: (0, b.__)("Are you sure you want to delete this resource item?", "ohmylms"),
    onClose: function () {
      o(!1), c(null);
    },
    onDelete: function () {
      var e;
      o(!1), e = l, n.removeCourseDownloadResource(e), c(null);
    },
    isOpen: a,
    isDelete: !0
  }), s && h().createElement(h().Fragment, null, h().createElement(He.default, {
    isOpen: s,
    onClose: d
  })));
}
