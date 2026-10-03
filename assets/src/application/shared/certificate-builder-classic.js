// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function nV(e, t) {
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
      if ("string" == typeof e) return rV(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? rV(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function rV(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var aV = function (e) {
  e.isOpen;
  var t = e.onClose,
    n = (0, y.useDispatch)(T.default),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).selectCertificate();
    }, []),
    a = nV((0, g.useState)([]), 2),
    o = a[0],
    i = a[1],
    c = nV((0, g.useState)((0, b.__)("Please enter 3 or more characters...", "ohmylms")), 2),
    u = c[0],
    s = c[1],
    d = function () {
      var e = tV(ZL().m(function e() {
        var a;
        return ZL().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              return a = JL(JL({}, r), {}, {
                courses: o.map(function (e) {
                  return {
                    id: null == e ? void 0 : e.value
                  };
                }),
                course_count: o.length
              }), e.n = 1, n.updateCertificate(null == r ? void 0 : r.id, a);
            case 1:
              t();
            case 2:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    m = function () {
      var e = tV(ZL().m(function e(t) {
        var n, r, a;
        return ZL().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, e.n = 1, l()({
                path: "/ohmylms/v1/courses?search=".concat(t),
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 1:
              return n = e.v, r = n.map(function (e) {
                return {
                  value: null == e ? void 0 : e.id,
                  label: null == e ? void 0 : e.name
                };
              }), e.a(2, r);
            case 2:
              e.p = 2, a = e.v, console.error(a);
            case 3:
              return e.a(2);
          }
        }, e, null, [[0, 2]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    p = function () {
      var e = tV(ZL().m(function e(t) {
        var n, r;
        return ZL().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 4;
                break;
              }
              return e.n = 1, m(t);
            case 1:
              if (0 !== (n = e.v).length) {
                e.n = 2;
                break;
              }
              return s((0, b.__)("No Course Found! Try to search another one", "ohmylms")), e.a(2, []);
            case 2:
              return s((0, b.__)("Please enter 3 or more characters...", "ohmylms")), r = null == n ? void 0 : n.map(function (e) {
                return {
                  label: Ge(null == e ? void 0 : e.label),
                  value: null == e ? void 0 : e.value
                };
              }), e.a(2, r);
            case 3:
              e.n = 5;
              break;
            case 4:
              return e.a(2, []);
            case 5:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
  return (0, g.useEffect)(function () {
    var e;
    if (null != r && null !== (e = r.courses) && void 0 !== e && e.length) {
      var t = r.courses.filter(function (e) {
        return e && e.id && e.name;
      }).map(function (e) {
        return {
          label: Ge(e.name).trim(),
          value: e.id
        };
      }).filter(function (e) {
        return e.label && e.value;
      });
      i(t);
    }
  }, [r]), React.createElement(React.Fragment, null, React.createElement(I.ModalWP, {
    title: (0, b.__)("Select Course", "ohmylms"),
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0,
    onRequestClose: t
  }, React.createElement(tn, {
    description: (0, b.__)("Select courses for which the certificate will be applicable.", "ohmylms"),
    spacerMarginBottom: 0,
    value: o,
    onChange: function (e) {
      return t = e.filter(Boolean), n.updateContent({
        courses: t.map(function (e) {
          return {
            id: null == e ? void 0 : e.value,
            name: null == e ? void 0 : e.label
          };
        }),
        course_count: t.length
      }), void i(t);
      var t;
    },
    loadOptions: p,
    noOptionsMessage: function () {
      return u;
    },
    padding: 0,
    direction: "column",
    gap: 1,
    flexItemWidth: "100%"
  }), React.createElement(I.FlexWP, {
    justify: "flex-end",
    gap: 4,
    style: {
      marginTop: "16px"
    }
  }, React.createElement(I.ButtonWP, {
    key: "cancel",
    onClick: t,
    variant: "secondary"
  }, (0, b.__)("Cancel", "ohmylms")), React.createElement(I.ButtonWP, {
    key: "Save",
    variant: "primary",
    onClick: d,
    className: "ohmylms-course-settings-modal-save-btn"
  }, (0, b.__)("Save", "ohmylms")))));
};

const oV = (0, g.memo)(aV);

function iV(e, t) {
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
      if ("string" == typeof e) return lV(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? lV(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function lV(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var cV = function (e) {
  var t = e.onClose,
    n = e.componentFrom,
    r = void 0 === n ? "" : n,
    a = (0, g.useRef)(),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).selectCertificate();
    }, []),
    i = iV((0, g.useState)(!1), 2),
    l = i[0],
    c = i[1],
    u = (0, z.A)(),
    s = u.openNotificationWithIcon,
    d = u.contextHolder,
    m = iV((0, g.useState)(!1), 2),
    p = m[0],
    f = m[1];
  return React.createElement(React.Fragment, null, d, React.createElement(I.FlexWP, {
    align: "start",
    justify: "start",
    direction: "column",
    gap: 0,
    className: "ohmylms-classic-certificate-builder"
  }, React.createElement(_L, {
    saveAsPDF: function () {
      try {
        c(!0);
        var e = a.current;
        oL().then(function (t) {
          t().from(e).set({
            margin: 10,
            filename: "".concat((null == o ? void 0 : o.name) || "Untitled Template", ".pdf"),
            image: {
              type: "jpeg",
              quality: .98
            },
            html2canvas: {
              scale: 2,
              useCORS: !0
            },
            jsPDF: {
              unit: "mm",
              format: "a4",
              orientation: "landscape"
            }
          }).save();
        }).catch(function (e) {
          console.error("Failed to load html2pdf:", e);
        }), s("success", (0, b.__)("Saved Successfully", "ohmylms"));
      } catch (e) {
        console.error(e), s("error", (0, b.__)("Saved failed", "ohmylms"));
      } finally {
        c(!1);
      }
    },
    isLoading: l,
    elementRef: a,
    onClose: t,
    setShowCoursesModal: f,
    componentFrom: r
  }), React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "start"
  }, React.createElement(I.FlexItemWP, {
    style: {
      flex: "1"
    }
  }, React.createElement(DL, null)), React.createElement(I.FlexItemWP, {
    style: {
      flex: "4",
      position: "relative"
    }
  }, React.createElement(YL, {
    certificateRef: a
  })))), p && React.createElement(oV, {
    onClose: function () {
      return f(!1);
    },
    isOpen: p
  }));
};

const uV = (0, g.memo)(cV);

var sV = function (e) {
  var t = e.isOpen,
    n = e.onClose;
  return React.createElement(React.Fragment, null, React.createElement(I.ModalWP, {
    open: t,
    footer: null,
    className: "ohmylms-classic-editor-modal",
    overlayClassName: "ohmylms-classic-editor-modal-wrap",
    top: 0,
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0,
    isDismissible: !1,
    isFullScreen: !0
  }, React.createElement(uV, {
    onClose: n,
    componentFrom: "course-editor"
  })));
};

const dV = (0, g.memo)(sV);

function mV(e) {
  return mV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, mV(e);
}

function pV(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function fV(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? pV(Object(n), !0).forEach(function (t) {
      vV(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pV(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function vV(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != mV(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != mV(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == mV(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function gV(e, t) {
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
      if ("string" == typeof e) return hV(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hV(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function hV(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

n(47909);

var yV = function () {
  var e,
    t,
    n = (0, y.useDispatch)(T.default),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    a = gV((0, g.useState)(null != r && null !== (e = r.certificate) && void 0 !== e && e.id || null != r && r.certificate_id ? "custom" : "templates"), 2),
    o = a[0],
    i = a[1],
    l = gV((0, g.useState)(!1), 2),
    c = l[0],
    u = l[1],
    s = gV((0, g.useState)(!!(null != r && null !== (t = r.certificate) && void 0 !== t && t.id || null != r && r.certificate_id)), 2),
    d = s[0],
    m = s[1],
    p = [{
      value: "templates",
      label: (0, b.__)("Templates", "ohmylms")
    }, {
      value: "custom",
      label: (0, b.__)("Custom Certificates", "ohmylms")
    }];
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-course-certificate-settings"
  }, React.createElement(I.FlexWP, {
    justify: "space-between",
    align: "flex-start"
  }, React.createElement(I.FlexItemWP, {
    style: {
      flex: "5"
    }
  }, React.createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Certificate", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 1
  }), React.createElement(I.TextWP, null, (0, b.__)("Select a certificate to award your learners.", "ohmylms"))), React.createElement(I.FlexItemWP, {
    style: {
      flex: "3"
    }
  }, React.createElement(I.FlexWP, {
    justify: "flex-end"
  }, React.createElement(Bt.A, {
    checked: d,
    onChange: function (e) {
      var t;
      e ? (m(!0), n.setCourse(fV(fV({}, r), {}, {
        certificate_id: null === (t = window.ohmylms_params) || void 0 === t ? void 0 : t.setup_wizard_certificate_id,
        certificate: {}
      })), i("custom")) : (m(!1), n.setCourse(fV(fV({}, r), {}, {
        certificate_id: 0,
        certificate: {}
      })));
    }
  })))), React.createElement(qt, {
    isVisible: d
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    marginTop: 5
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(I.FlexWP, {
    className: "ohmylms-certificates-container-header"
  }, React.createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("".concat("custom" === o ? "Previously created certificate" : "Pre-build certificate templates"), "ohmylms")), React.createElement(I.RadioGroupWP, {
    isBlock: !0,
    options: p,
    value: o,
    onChange: function (e) {
      i(e);
    },
    optionType: "button",
    buttonStyle: "solid"
  })), React.createElement(I.SpacerWP, {
    marginBottom: 5
  }), React.createElement(nL, {
    selected: o,
    setShowEditor: u,
    setSelected: i,
    showCertificateEditor: c
  }))))), c && React.createElement(dV, {
    isOpen: c,
    onClose: function () {
      i("custom"), u(!1);
    }
  }));
};

const bV = (0, g.memo)(yV);

var _V = function () {
  return React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 0,
    marginTop: 6,
    marginBottom: 6
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(Gz, null)), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(bV, null))));
};

const wV = (0, g.memo)(_V);

function EV(e) {
  return EV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, EV(e);
}

function SV(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function RV(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? SV(Object(n), !0).forEach(function (t) {
      xV(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : SV(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function xV(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != EV(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != EV(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == EV(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function CV(e, t) {
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
      if ("string" == typeof e) return PV(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? PV(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function PV(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

const OV = function (e) {
  var t,
    n = e.item,
    r = e.onToggle,
    a = e.terms,
    o = e.handleDeleteConfirmation,
    i = e.deleteTitle,
    l = e.deleteDescription,
    c = CV((0, g.useState)(!1), 2),
    u = c[0],
    s = c[1],
    d = CV((0, g.useState)(!1), 2),
    m = d[0],
    p = d[1],
    f = null !== (t = n.term_id) && void 0 !== t ? t : n.id,
    v = null == a ? void 0 : a.some(function (e) {
      var t;
      return (null !== (t = e.id) && void 0 !== t ? t : e.term_id) === f;
    });
  return h().createElement(I.FlexWP, {
    justify: "space-between",
    align: "center",
    onMouseEnter: function () {
      return s(!0);
    },
    onMouseLeave: function () {
      m || s(!1);
    }
  }, h().createElement(I.CheckboxWP, {
    id: "term-".concat(f),
    checked: v,
    onChange: function (e) {
      return r(RV(RV({}, n), {}, {
        id: f
      }), e);
    },
    label: Ge(n.name)
  }), u && h().createElement("span", {
    className: "ohmylms-category-delete-icon",
    onClick: function () {
      p(!0), s(!0);
    }
  }, h().createElement(zn, {
    width: "16",
    height: "16"
  })), m && h().createElement(Ie, {
    title: i,
    description: l,
    onClose: function () {
      s(!1), p(!1);
    },
    onDelete: function () {
      return e = n, s(!1), p(!1), void o(e);
      var e;
    },
    isOpen: m,
    isDelete: !0
  }));
};

function kV(e, t) {
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
  }(e, t) || jV(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function jV(e, t) {
  if (e) {
    if ("string" == typeof e) return AV(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? AV(e, t) : void 0;
  }
}

function AV(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var MV = function (e) {
  var t = e.items,
    n = e.availableTerms,
    r = e.handleToggle,
    a = e.handleDelete,
    o = e.deleteTitle,
    i = e.deleteDescription,
    l = kV((0, g.useState)([]), 2),
    c = l[0],
    u = l[1],
    s = kV((0, g.useState)([]), 2),
    d = (s[0], s[1]),
    m = function (e) {
      var t = [];
      return e.forEach(function (e) {
        t.push(e.key), e.children && e.children.length > 0 && (t = t.concat(m(e.children)));
      }), t;
    },
    p = function (e) {
      var t = function (e, t) {
          var n = function (e) {
              return !!t.some(function (t) {
                return t.term_id === e.term_id || t.id === e.id;
              }) || void 0 !== e.children && e.children.map(n).filter(function (e) {
                return e;
              }).length > 0;
            },
            r = function (e) {
              return function (e) {
                if (Array.isArray(e)) return AV(e);
              }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
              }(e) || jV(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }(e);
          return r.sort(function (e, t) {
            var r = n(e),
              a = n(t);
            return r === a ? 0 : r && !a ? -1 : !r && a ? 1 : 0;
          }), r;
        }(function (e) {
          var t = {},
            n = [];
          return e.forEach(function (e) {
            e.children = [], t[e.id] = e;
          }), e.forEach(function (e) {
            e.parent && t[e.parent] ? t[e.parent].children.push(e) : n.push(e);
          }), n;
        }(e), n),
        l = function (e) {
          return e.map(function (e) {
            var t, c;
            return {
              title: h().createElement(OV, {
                item: e,
                onToggle: r,
                terms: n,
                handleDeleteConfirmation: a,
                deleteTitle: o,
                deleteDescription: i
              }),
              key: null !== (t = null == e ? void 0 : e.term_id) && void 0 !== t ? t : null == e ? void 0 : e.id,
              children: (null === (c = e.children) || void 0 === c ? void 0 : c.length) > 0 ? l(e.children) : []
            };
          });
        },
        c = l(t),
        s = m(c);
      d(s), u(c);
    };
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && p(t), function () {
      return e = !1;
    };
  }, [t, n]), h().createElement(I.TreeWP, {
    treeData: c,
    defaultExpandAll: !0,
    autoExpandParent: !0,
    switcherIcon: null,
    className: "ohmylms-course-settings-categories-tree ".concat((null == c ? void 0 : c.length) > 0 ? "has-category" : ""),
    selectable: !1
  });
};

const TV = (0, g.memo)(MV);

function IV(e) {
  return IV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, IV(e);
}

function FV() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return NV(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (NV(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, NV(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, NV(d, "constructor", u), NV(u, "constructor", c), c.displayName = "GeneratorFunction", NV(u, a, "GeneratorFunction"), NV(d), NV(d, a, "Generator"), NV(d, r, function () {
    return this;
  }), NV(d, "toString", function () {
    return "[object Generator]";
  }), (FV = function () {
    return {
      w: o,
      m
    };
  })();
}

function NV(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  NV = function (e, t, n, r) {
    function o(t, n) {
      NV(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, NV(e, t, n, r);
}

function DV(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function WV(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function zV(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != IV(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != IV(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == IV(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function BV(e, t) {
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
  }(e, t) || LV(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function LV(e, t) {
  if (e) {
    if ("string" == typeof e) return VV(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? VV(e, t) : void 0;
  }
}
