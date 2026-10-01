// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var $ne = function (e) {
  var t = e.onBack,
    n = e.onContinue,
    r = e.isLoading,
    a = ((0, y.useDispatch)(T.default), (0, y.useSelect)(function (e) {
      return e(T.default).getSetupWizardData();
    }, [])),
    o = Qne((0, g.useState)(null), 2),
    i = o[0],
    l = o[1],
    c = Qne((0, g.useState)(null), 2),
    u = c[0],
    s = c[1];
  return React.createElement(React.Fragment, null, React.createElement(Gte, {
    level: null == a ? void 0 : a.level,
    currentStep: "experienced" == (null == a ? void 0 : a.level) || "intermediate" == (null == a ? void 0 : a.level) ? 2 : 0,
    isShowIndicator: !0
  }), React.createElement(I.ContainerWP, null, React.createElement("div", {
    className: "ohmylms-setup-wizard-level-selection-wrapper ohmylms-setup-wizard-card-wrapper"
  }, React.createElement("div", {
    className: "ohmylms-setup-wizard__container"
  }, React.createElement("div", {
    className: "ohmylms-setup-wizard__header"
  }, React.createElement(I.HeadingWP, {
    as: "h2",
    color: "#000d25",
    size: "24",
    align: "center",
    weight: "600"
  }, (0, b.__)("🤝 Your Migration Assistant", "ohmylms")), React.createElement(I.TextWP, {
    as: "p",
    size: "18",
    color: "#687784",
    align: "center",
    weight: "400",
    style: {
      maxWidth: "400px",
      margin: "auto"
    }
  }, (0, b.__)("Your data is safe. We migrate with care.", "ohmylms"))), React.createElement(I.FlexWP, {
    direction: "column",
    gap: 6
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    style: {
      width: "768px",
      backgroundColor: "transparent"
    }
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    gap: 4,
    direction: "column",
    items: "start"
  }, React.createElement(I.HeadingWP, {
    as: "h3",
    size: "18",
    color: "#000D25",
    weight: "600"
  }, (0, b.__)("Upload your SCORM file", "ohmylms")), React.createElement("div", {
    style: {
      backgroundColor: "#FFFFFF",
      borderRadius: "8px",
      width: "100%",
      height: "240px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: u ? "1px solid red" : "1px solid #EBEBEB"
    }
  }, React.createElement(I.FormFileUploadWP, {
    accept: ".zip",
    onChange: function (e) {
      var t = e.target.files[0];
      if (!t) return l(null), void s(null);
      ["application/zip", "application/x-zip-compressed", "multipart/x-zip"].includes(t.type) || t.name.toLowerCase().endsWith(".zip") ? (l(t), s(null)) : (l(null), s((0, b.__)("Invalid file format. Please upload a valid ZIP file containing a SCORM package.", "ohmylms")));
    },
    render: function (e) {
      var t = e.openFileDialog;
      return React.createElement(I.ButtonWP, {
        variant: "white",
        onClick: t,
        style: {
          border: "1px solid #E0E0E0",
          boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
        }
      }, React.createElement(I.FlexWP, {
        gap: 2,
        items: "center"
      }, React.createElement("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        d: "M6.16669 3.5V10.5C6.16669 11.4665 6.9502 12.25 7.91669 12.25C8.88319 12.25 9.66669 11.4665 9.66669 10.5V3.20833C9.66669 2.564 9.14436 2.04167 8.50002 2.04167C7.85569 2.04167 7.33335 2.564 7.33335 3.20833V9.33333C7.33335 9.65567 7.59469 9.91667 7.91669 9.91667C8.23869 9.91667 8.50002 9.65567 8.50002 9.33333V3.5H9.66669V9.33333C9.66669 10.3 8.88335 11.0833 7.91669 11.0833C6.95002 11.0833 6.16669 10.3 6.16669 9.33333V3.20833C6.16669 1.91917 7.21085 0.875 8.50002 0.875C9.78919 0.875 10.8334 1.91917 10.8334 3.20833V10.5C10.8334 12.1108 9.52752 13.4167 7.91669 13.4167C6.30585 13.4167 5.00002 12.1108 5.00002 10.5V3.5H6.16669Z",
        fill: "#687784"
      })), i ? i.name : (0, b.__)("Add files", "ohmylms")));
    }
  })), u ? React.createElement(I.TextWP, {
    as: "p",
    size: "14",
    color: "red",
    style: {
      marginTop: "-8px"
    }
  }, u) : React.createElement(I.TextWP, {
    as: "p",
    size: "14",
    color: "#687784",
    style: {
      marginTop: "-8px"
    }
  }, (0, b.__)("Upload your SCORM package (.zip) to import your course. Your content will remain private until you confirm the migration.", "ohmylms")))))))), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    marginTop: 6
  }, React.createElement(I.FlexWP, {
    items: "center",
    justify: "between",
    gap: 4,
    style: {
      maxWidth: "846px",
      justifyContent: "space-between",
      margin: "0 auto"
    }
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: t
  }, (0, b.__)("Back", "ohmylms")), React.createElement(I.FlexWP, {
    items: "center",
    justify: "end",
    gap: 6
  }, React.createElement(I.TextWP, {
    as: "span",
    size: "14",
    color: "#687784",
    style: {
      textDecoration: "underline",
      cursor: "pointer"
    },
    onClick: function () {
      return n(null);
    }
  }, (0, b.__)("Skip this step", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: function () {
      return n(i);
    },
    disabled: !i || r,
    isBusy: r
  }, (0, b.__)("Continue", "ohmylms")))))));
};

const Kne = (0, g.memo)($ne);

var Jne;

function Xne(e) {
  return function (e) {
    if (Array.isArray(e)) return ore(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || are(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function ere() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return tre(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (tre(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, tre(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, tre(d, "constructor", u), tre(u, "constructor", c), c.displayName = "GeneratorFunction", tre(u, a, "GeneratorFunction"), tre(d), tre(d, a, "Generator"), tre(d, r, function () {
    return this;
  }), tre(d, "toString", function () {
    return "[object Generator]";
  }), (ere = function () {
    return {
      w: o,
      m
    };
  })();
}

function tre(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  tre = function (e, t, n, r) {
    function o(t, n) {
      tre(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, tre(e, t, n, r);
}

function nre(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function rre(e, t) {
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
  }(e, t) || are(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function are(e, t) {
  if (e) {
    if ("string" == typeof e) return ore(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ore(e, t) : void 0;
  }
}

function ore(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var ire = (null === (Jne = window.ohmylms_params) || void 0 === Jne ? void 0 : Jne.plugin_assets) + "images/",
  lre = function (e) {
    var t,
      n,
      r,
      a,
      o = e.onTabChange,
      i = e.onWizardSkip,
      l = (0, y.useDispatch)(T.default),
      c = (0, y.useSelect)(function (e) {
        return e(T.default).getSetupWizardData();
      }, []),
      u = rre((0, g.useState)(!(null == c || !c.skipPlatformSelection || null == c || !c.selectedPlatform)), 2),
      s = u[0],
      d = u[1],
      m = rre((0, g.useState)(!1), 2),
      p = m[0],
      f = m[1],
      v = function () {
        null != c && c.skipPlatformSelection ? (l.setSetupWizardData({
          skipPlatformSelection: !1,
          selectedPlatform: null
        }), o("wizard-niche")) : d(!1);
      },
      h = function () {
        var e,
          t = (e = ere().m(function e(t) {
            var n, r;
            return ere().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if (t) {
                    e.n = 1;
                    break;
                  }
                  return o("wizard-completion"), e.a(2);
                case 1:
                  return f(!0), e.p = 2, e.n = 3, l.importScormCourse(t);
                case 3:
                  null != (n = e.v) && n.success && o("wizard-completion"), e.n = 5;
                  break;
                case 4:
                  e.p = 4, r = e.v, console.error(r);
                case 5:
                  return e.p = 5, f(!1), e.f(5);
                case 6:
                  return e.a(2);
              }
            }, e, null, [[2, 4, 5, 6]]);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                nre(o, r, a, i, l, "next", e);
              }
              function l(e) {
                nre(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function (e) {
          return t.apply(this, arguments);
        };
      }(),
      _ = [].concat(Xne(null !== (t = window) && void 0 !== t && null !== (t = t.ohmylms_params) && void 0 !== t && t.is_tutor_lms_active ? [{
        label: (0, b.__)("Tutor LMS", "ohmylms"),
        value: "tutorLMS",
        icon: ire + "tutor_icon.svg"
      }] : []), Xne(null !== (n = window) && void 0 !== n && null !== (n = n.ohmylms_params) && void 0 !== n && n.is_learndash_lms_active ? [{
        label: (0, b.__)("LearnDash", "ohmylms"),
        value: "learnDash",
        icon: ire + "learndash_icon.svg"
      }] : []), Xne(null !== (r = window) && void 0 !== r && null !== (r = r.ohmylms_params) && void 0 !== r && r.is_learnpress_active ? [{
        label: (0, b.__)("LearnPress", "ohmylms"),
        value: "learnPress",
        icon: ire + "learnpress_icon.svg"
      }] : []), Xne(null !== (a = window) && void 0 !== a && null !== (a = a.ohmylms_params) && void 0 !== a && a.is_masterstudy_active ? [{
        label: (0, b.__)("MasterStudy LMS", "ohmylms"),
        value: "masterStudy",
        icon: ire + "masterstudy_icon.svg"
      }] : []));
    return s ? "scorm" === (null == c ? void 0 : c.selectedPlatform) ? React.createElement(Kne, {
      onBack: v,
      onContinue: h,
      isLoading: p
    }) : React.createElement(Yne, {
      onTabChange: o,
      handleBack: v
    }) : React.createElement(React.Fragment, null, React.createElement(Gte, {
      level: null == c ? void 0 : c.level,
      currentStep: "experienced" == (null == c ? void 0 : c.level) || "intermediate" == (null == c ? void 0 : c.level) ? 2 : 0,
      isShowIndicator: !0,
      onSkip: function () {
        return null == i ? void 0 : i("course-creation");
      }
    }), React.createElement(I.ContainerWP, null, React.createElement("div", {
      className: "ohmylms-setup-wizard-level-selection-wrapper ohmylms-setup-wizard-card-wrapper"
    }, React.createElement("div", {
      className: "ohmylms-setup-wizard__container"
    }, React.createElement("div", {
      className: "ohmylms-setup-wizard__header"
    }, React.createElement(I.HeadingWP, {
      as: "h2",
      color: "#000d25",
      size: "24",
      align: "center",
      weight: "600"
    }, (0, b.__)("🤝 Your Migration Assistant", "ohmylms")), React.createElement(I.TextWP, {
      as: "p",
      size: "18",
      color: "#687784",
      align: "center",
      weight: "400",
      style: {
        maxWidth: "400px",
        margin: "auto"
      }
    }, (0, b.__)("Your data is safe. We migrate with care. ", "ohmylms"))), React.createElement(I.FlexWP, {
      direction: "column",
      gap: 6
    }, React.createElement(I.CardWP, {
      isBorderless: !0,
      style: {
        width: "768px"
      }
    }, React.createElement(I.SpacerWP, {
      padding: 6,
      marginBottom: 0
    }, React.createElement(I.FlexWP, {
      gap: 3,
      direction: "column"
    }, React.createElement(X0.A, {
      as: "h3",
      size: "18",
      color: "#000D25",
      weight: "600"
    }, (0, b.__)("Which platform do you want to migrate from?", "ohmylms")), React.createElement(I.FlexWP, {
      flexWrap: "wrap",
      gap: 3,
      align: "start",
      justify: "start"
    }, _.map(function (e, t) {
      return React.createElement(I.CardWP, {
        key: t,
        isBorderless: !0,
        style: {
          cursor: "pointer",
          border: "1px solid ".concat(c.selectedPlatform === e.value ? "#6E42D3" : "transparent"),
          boxShadow: "0 2px 3px 0 rgba(147, 130, 171, 0.05), 0 4px 5px 0 rgba(85, 85, 85, 0.04), 0 4px 5px 0 rgba(85, 85, 85, 0.03), 0 16px 16px 0 rgba(85, 85, 85, 0.02)",
          position: "relative",
          width: "256px"
        },
        onClick: function () {
          return l.setSetupWizardData({
            selectedPlatform: e.value
          });
        }
      }, React.createElement(I.SpacerWP, {
        padding: 4,
        marginBottom: 0
      }, c.selectedPlatform === e.value && React.createElement("div", {
        className: "ohmylms-setup-wizard__check",
        style: {
          position: "absolute",
          height: "16px",
          width: "16px",
          right: "10px",
          top: "10px"
        }
      }, React.createElement("svg", {
        style: {
          display: "block",
          width: "100%",
          height: "100%"
        },
        fill: "none",
        preserveAspectRatio: "none",
        viewBox: "0 0 16 16"
      }, React.createElement("rect", {
        fill: "#6E42D3",
        height: "14",
        rx: "7",
        stroke: "#6E42D3",
        strokeWidth: "2",
        width: "14",
        x: "1",
        y: "1"
      }), React.createElement("path", {
        d: "M10.7113 5.06584L6.44327 9.33378L4.48718 7.37764C4.19258 7.08304 3.71485 7.08299 3.4202 7.37759C3.12556 7.67223 3.12556 8.14991 3.4202 8.44456L5.90976 10.9342C6.05124 11.0757 6.24313 11.1552 6.44322 11.1552H6.44327C6.64335 11.1552 6.83524 11.0757 6.97673 10.9343L11.7782 6.13286C12.0729 5.83821 12.0729 5.36053 11.7782 5.06589C11.4836 4.77124 11.0059 4.77119 10.7113 5.06584Z",
        fill: "white"
      }))), React.createElement(I.FlexWP, {
        direction: "column",
        items: "center",
        justify: "center",
        gap: 5
      }, React.createElement("img", {
        src: e.icon,
        alt: e.label,
        style: {
          width: "29px",
          height: "29px"
        }
      }), React.createElement(I.TextWP, {
        as: "p",
        size: "16",
        weight: "500",
        color: "#000D25"
      }, e.label))));
    })))))))), React.createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 6
    }, React.createElement(I.FlexWP, {
      items: "center",
      justify: "between",
      gap: 4,
      style: {
        maxWidth: "846px",
        justifyContent: "space-between",
        margin: "0 auto"
      }
    }, React.createElement(I.ButtonWP, {
      variant: "secondary",
      onClick: function () {
        o("wizard-niche");
      }
    }, (0, b.__)("Back", "ohmylms")), React.createElement(I.FlexWP, {
      items: "center",
      justify: "end",
      gap: 3
    }, React.createElement(I.ButtonWP, {
      variant: "primary",
      onClick: function () {
        d(!0);
      },
      disabled: !c.selectedPlatform
    }, (0, b.__)("Continue", "ohmylms")))))));
  };

const cre = (0, g.memo)(lre);

function ure() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return sre(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (sre(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, sre(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, sre(d, "constructor", u), sre(u, "constructor", c), c.displayName = "GeneratorFunction", sre(u, a, "GeneratorFunction"), sre(d), sre(d, a, "Generator"), sre(d, r, function () {
    return this;
  }), sre(d, "toString", function () {
    return "[object Generator]";
  }), (ure = function () {
    return {
      w: o,
      m
    };
  })();
}

function sre(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  sre = function (e, t, n, r) {
    function o(t, n) {
      sre(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, sre(e, t, n, r);
}

function dre(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function mre(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        dre(o, r, a, i, l, "next", e);
      }
      function l(e) {
        dre(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function pre(e, t) {
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
      if ("string" == typeof e) return fre(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fre(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function fre(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
