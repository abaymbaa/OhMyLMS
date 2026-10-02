// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var is = function (e) {
  var t = e.options,
    n = void 0 === t ? [] : t,
    r = e.defaultValue,
    a = e.onChange,
    o = e.className,
    i = void 0 === o ? "" : o,
    l = e.radioType,
    c = void 0 === l ? "advanced" : l,
    u = function (e, t) {
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
    }(e, ts),
    s = (0, y.useDispatch)("ohmylms/store"),
    d = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []);
  return React.createElement(React.Fragment, null, React.createElement(I.RadioGroupWP, ns({
    value: r,
    onChange: a,
    className: "ohmylms-grouped-radio ".concat("advanced" === c ? "ohmylms-advanced-radio" : "", " ").concat(i)
  }, u, {
    options: n
  })), "password_protected" === r && React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    marginBottom: 2
  }), React.createElement(I.InputWP, {
    type: "password",
    placeholder: (0, b.__)("Type Password", "ohmylms"),
    onChange: function (e) {
      s.setCourse(as(as({}, d), {}, {
        password_protected: e
      }));
    },
    value: null == d ? void 0 : d.password_protected
  })));
};
const ls = (0, g.memo)(is);
var cs = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "143",
    height: "30",
    viewBox: "0 0 143 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "30",
    height: "30",
    fill: "#CFD2D8",
    rx: "6"
  }), React.createElement("rect", {
    width: "30",
    height: "30",
    x: "37",
    fill: "#CFD2D8",
    rx: "6"
  }), React.createElement("rect", {
    width: "30",
    height: "30",
    x: "75",
    fill: "#CFD2D8",
    rx: "6"
  }), React.createElement("rect", {
    width: "30",
    height: "30",
    x: "113",
    fill: "#CFD2D8",
    rx: "6"
  }), React.createElement("path", {
    fill: "#1F2328",
    d: "M14.544 20.168c-.98 0-1.839-.215-2.576-.644a4.637 4.637 0 01-1.722-1.778c-.41-.765-.616-1.647-.616-2.646 0-.999.205-1.876.616-2.632a4.611 4.611 0 011.722-1.792c.737-.43 1.596-.644 2.576-.644.97 0 1.825.215 2.562.644a4.484 4.484 0 011.722 1.792c.41.756.616 1.633.616 2.632 0 .933-.182 1.769-.546 2.506a4.413 4.413 0 01-1.512 1.736l2.268 2.436h-2.226l-1.54-1.764c-.43.103-.877.154-1.344.154zm0-1.61c.933 0 1.675-.308 2.226-.924.56-.616.84-1.46.84-2.534 0-1.073-.28-1.918-.84-2.534-.55-.616-1.293-.924-2.226-.924s-1.68.308-2.24.924c-.56.616-.84 1.46-.84 2.534 0 1.073.28 1.918.84 2.534.56.616 1.307.924 2.24.924zm37.188 1.61c-.719 0-1.367-.14-1.946-.42a3.32 3.32 0 01-1.386-1.302c-.336-.579-.504-1.311-.504-2.198V10.2h1.792v6.062c0 .765.182 1.335.546 1.708.373.373.887.56 1.54.56.644 0 1.153-.187 1.526-.56.373-.373.56-.943.56-1.708V10.2h1.792v6.048c0 .887-.177 1.62-.532 2.198a3.37 3.37 0 01-1.428 1.302 4.5 4.5 0 01-1.96.42zM88.952 20v-9.8h1.792V20h-1.792zm35.706 0v-1.372l4.508-6.93H124.7V10.2h6.538v1.372l-4.536 6.93h4.564V20h-6.608zM134 7h1v17h-1z"
  })));
};
const us = (0, g.memo)(cs);
var ss = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "101",
    height: "30",
    viewBox: "0 0 101 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "101",
    height: "30",
    fill: "#CFD2D8",
    rx: "6"
  }), React.createElement("path", {
    fill: "#1F2328",
    d: "M17.544 20.168c-.98 0-1.839-.215-2.576-.644a4.637 4.637 0 01-1.722-1.778c-.41-.765-.616-1.647-.616-2.646 0-.999.205-1.876.616-2.632a4.611 4.611 0 011.722-1.792c.737-.43 1.596-.644 2.576-.644.97 0 1.825.215 2.562.644a4.484 4.484 0 011.722 1.792c.41.756.616 1.633.616 2.632 0 .933-.182 1.769-.546 2.506a4.413 4.413 0 01-1.512 1.736l2.268 2.436h-2.226l-1.54-1.764c-.43.103-.877.154-1.344.154zm0-1.61c.933 0 1.675-.308 2.226-.924.56-.616.84-1.46.84-2.534 0-1.073-.28-1.918-.84-2.534-.55-.616-1.293-.924-2.226-.924s-1.68.308-2.24.924c-.56.616-.84 1.46-.84 2.534 0 1.073.28 1.918.84 2.534.56.616 1.307.924 2.24.924zm9.154 1.61c-.868 0-1.54-.27-2.016-.812-.467-.541-.7-1.335-.7-2.38v-3.92h1.778v3.752c0 .597.12 1.055.364 1.372.242.317.625.476 1.148.476.494 0 .9-.177 1.218-.532.326-.355.49-.85.49-1.484v-3.584h1.792V20H29.19l-.14-1.176a2.44 2.44 0 01-.938.98c-.402.243-.873.364-1.414.364zm6.88-8.19c-.328 0-.598-.098-.813-.294a.982.982 0 01-.308-.742.94.94 0 01.308-.728c.215-.196.486-.294.812-.294.327 0 .593.098.798.294a.92.92 0 01.322.728.962.962 0 01-.322.742c-.205.196-.471.294-.798.294zM32.68 20v-6.944h1.792V20H32.68zm3.215 0v-1.442l3.542-4.018h-3.5v-1.484h5.544v1.442l-3.598 4.018h3.668V20h-5.656zM47 7h1v17h-1z"
  })));
};
const ds = (0, g.memo)(ss);
function ms(e) {
  return ms = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ms(e);
}
function ps(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function fs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ps(Object(n), !0).forEach(function (t) {
      vs(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ps(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function vs(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != ms(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != ms(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == ms(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function gs(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var hs = function () {
  var e,
    t,
    n,
    r,
    a,
    o,
    i = true,
    l = function () {
      var e,
        t = (0, y.useSelect)(function (e) {
          return e(T.default).getQuizTypes();
        }, []),
        n = (0, y.useSelect)(function (e) {
          return e(T.default).getInteractiveQuizTypes();
        }, []),
        r = [].concat(Ju(t), Ju(n)),
        a = (0, y.useSelect)(function (e) {
          return e(T.default).selectQuestion();
        }, []);
      if (!a) return null;
      var o = null == a || null === (e = a.settings) || void 0 === e ? void 0 : e.type;
      if (!o) return null;
      var i = r.find(function (e) {
        return e.type === o;
      });
      return i ? i.settings : null;
    }(),
    c = (0, y.useSelect)(function (e) {
      return e(T.default).selectSelectedQuestionId();
    }, []),
    u = (0, y.useSelect)(function (e) {
      return e(T.default).selectQuestion();
    }, [c]),
    s = (0, y.useDispatch)(T.default),
    d = function (e, t) {
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
          if ("string" == typeof e) return gs(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gs(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    m = d[0],
    p = d[1],
    f = ["statement", "fill-in-the-blank"],
    v = function (e, t, n) {
      var r, a;
      n ? s.updateQuestionData(c, {
        settings: fs(fs({}, null == u ? void 0 : u.settings), {}, vs({}, e, fs(fs({}, null == u || null === (a = u.settings) || void 0 === a ? void 0 : a[e]), {}, vs({}, n, t))))
      }) : s.updateQuestionData(c, {
        settings: fs(fs({}, null == u ? void 0 : u.settings), {}, vs({}, e, t))
      });
    },
    h = [{
      label: (0, b.__)("Separate Boxes", "ohmylms"),
      value: "separate_boxes",
      icon: us
    }, {
      label: (0, b.__)("One Box", "ohmylms"),
      value: "one_box",
      icon: ds
    }];
  return l ? React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    padding: 0,
    marginBottom: 0
  }, React.createElement("div", null, React.createElement(I.SpacerWP, {
    paddingX: 5,
    paddingTop: 5,
    paddingBottom: 0
  }, React.createElement(I.FlexWP, {
    align: "center",
    gap: 3,
    justify: "flex-start"
  }, React.createElement(Rt, null), (0, b.__)("Settings", "ohmylms"))), (null == l ? void 0 : l.required) && React.createElement(Kt, {
    title: (0, b.__)("Required", "ohmylms"),
    onChange: function (e) {
      return v("required", e);
    },
    isChecked: null == u || null === (e = u.settings) || void 0 === e ? void 0 : e.required,
    showDivider: !1,
    isItProFeature: !0
  }), (null == l ? void 0 : l.randomize) && React.createElement(Kt, {
    title: (0, b.__)("Randomize", "ohmylms"),
    onChange: function (e) {
      return v("randomize", e);
    },
    isChecked: null == u || null === (t = u.settings) || void 0 === t ? void 0 : t.randomize,
    showDivider: !1,
    isItProFeature: !0
  }), (null == l ? void 0 : l.otherOption) && React.createElement(Kt, {
    title: (0, b.__)('"Other" option', "ohmylms"),
    onChange: function (e) {
      return v("otherOption", e);
    },
    isChecked: null == u || null === (n = u.settings) || void 0 === n ? void 0 : n.otherOption,
    showDivider: !1
  }), (null == l ? void 0 : l.score) && React.createElement(I.SpacerWP, {
    padding: 4,
    marginBottom: 0
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Score", "ohmylms")), React.createElement(I.SpacerWP, null), React.createElement(I.InputWP, {
    value: null == u || null === (r = u.settings) || void 0 === r || null === (r = r.score) || void 0 === r ? void 0 : r.value,
    placeholder: "0.00",
    step: .01,
    precision: 2,
    min: 0,
    onChange: function (e) {
      /^\d*\.?\d*$/.test(e) && v("score", e, "value");
    },
    onKeyDown: function (e) {
      (["e", "E", "+", "-", "/", "\\", ",", "*", " "].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
    },
    onBlur: function () {
      var e;
      (null == u || null === (e = u.settings) || void 0 === e || null === (e = e.score) || void 0 === e ? void 0 : e.value) < 0 && v("score", 0, "value");
    },
    className: "ohmylms-question-score-input"
  })), (null == l ? void 0 : l.participateView) && React.createElement(Kt, {
    title: (0, b.__)("Participant View", "ohmylms"),
    onChange: function (e) {
      return v("participantView", e, "enabled");
    },
    isChecked: null == u || null === (a = u.settings) || void 0 === a || null === (a = a.participantView) || void 0 === a ? void 0 : a.enabled,
    showDivider: !1,
    conditionalChild: React.createElement(ls, {
      options: h,
      value: null == u || null === (o = u.settings) || void 0 === o || null === (o = o.participantView) || void 0 === o ? void 0 : o.value,
      onChange: function (e) {
        var t;
        return v("participantView", null == e || null === (t = e.target) || void 0 === t ? void 0 : t.value, "value");
      }
    })
  }))), m && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: m,
    onClose: p
  }))) : null;
};
const ys = (0, g.memo)(hs);
var bs = function (e) {
  var t,
    n = e.setHovered,
    r = (0, y.useSelect)(function (e) {
      return e(T.default).selectQuestion();
    }, []);
  return React.createElement(React.Fragment, null, null != r && null !== (t = r.settings) && void 0 !== t && t.type ? React.createElement(React.Fragment, null, React.createElement(ys, null)) : React.createElement(React.Fragment, null, React.createElement(Ku, {
    setHovered: n
  })));
};
const _s = (0, g.memo)(bs);
var ws = function (e) {
  var t = e.isHover,
    n = void 0 !== t && t,
    r = e.color;
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "14",
    viewBox: "0 0 16 14",
    fill: "none"
  }, React.createElement("path", {
    d: "M15.7074 5.12841L7.31589 13.1606C6.74792 13.7028 5.9953 14 5.19402 14H5.18802C4.38407 13.9981 3.63012 13.6971 3.06349 13.153L0.296998 10.542C-0.0956433 10.1716 -0.0996431 9.56707 0.288999 9.19225C0.677641 8.81679 1.31027 8.81361 1.70358 9.18461L4.47673 11.8014C4.67205 11.9891 4.92337 12.0896 5.19202 12.0903H5.19402C5.46067 12.0903 5.71199 11.991 5.90131 11.8109L14.2921 3.77995C14.6814 3.40577 15.3154 3.40577 15.706 3.77804C16.0973 4.15032 16.098 4.75487 15.708 5.12778L15.7074 5.12841ZM3.34947 6.85169C3.87344 7.35633 4.57206 7.63442 5.31601 7.63633H5.32201C6.06397 7.63633 6.76125 7.36015 7.28989 6.85615L12.7102 1.62585C13.0989 1.25103 13.0955 0.646484 12.7029 0.275482C12.3102 -0.0948834 11.6776 -0.0910652 11.2883 0.282482L5.87131 5.50896C5.72465 5.6496 5.52933 5.7266 5.32135 5.7266H5.32001C5.11136 5.7266 4.91604 5.64832 4.77805 5.51532L2.38553 3.15377C2.00156 2.77449 1.36893 2.76495 0.971622 3.1315C0.574981 3.49804 0.564315 4.10195 0.94829 4.48123L3.35014 6.85106L3.34947 6.85169Z",
    fill: "".concat(n ? "var(--ohmylms-primary-color)" : r || "#2B2F36")
  })));
};
const Es = (0, g.memo)(ws);
var Ss = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "133",
    height: "52",
    viewBox: "0 0 133 52",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "133",
    height: "8",
    fill: "#C9D0D8",
    rx: "4"
  }), React.createElement("rect", {
    width: "75",
    height: "8",
    fill: "var(--ohmylms-primary-color)",
    rx: "4"
  }), React.createElement("rect", {
    width: "133",
    height: "8",
    y: "22",
    fill: "#C9D0D8",
    rx: "4"
  }), React.createElement("rect", {
    width: "110",
    height: "8",
    y: "22",
    fill: "var(--ohmylms-primary-color)",
    rx: "4"
  }), React.createElement("rect", {
    width: "133",
    height: "8",
    y: "44",
    fill: "#C9D0D8",
    rx: "4"
  }), React.createElement("rect", {
    width: "93",
    height: "8",
    y: "44",
    fill: "var(--ohmylms-primary-color)",
    rx: "4"
  })));
};
const Rs = (0, g.memo)(Ss);
var xs = n(16118),
  Cs = function () {
    return React.createElement(React.Fragment, null, React.createElement("svg", {
      fill: "none",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "#A1A1AA",
      d: "M9 0C4.038 0 0 4.037 0 9s4.038 9 9 9c4.963 0 9-4.037 9-9s-4.038-9-9-9zm0 16.606c-4.194 0-7.606-3.412-7.606-7.606S4.806 1.394 9 1.394 16.606 4.806 16.606 9 13.194 16.606 9 16.606z"
    }), React.createElement("path", {
      fill: "#A1A1AA",
      d: "M12.668 8h-6.97a.697.697 0 000 1.394h6.97a.697.697 0 000-1.394z"
    })));
  };
const Ps = (0, g.memo)(Cs);
var Os = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fill: "#A1A1AA",
    clipPath: "url(#clip0_62_21182)"
  }, React.createElement("path", {
    d: "M9 0C4.038 0 0 4.037 0 9s4.038 9 9 9c4.963 0 9-4.037 9-9s-4.038-9-9-9zm0 16.606c-4.194 0-7.606-3.412-7.606-7.606S4.806 1.394 9 1.394 16.606 4.806 16.606 9 13.194 16.606 9 16.606z"
  }), React.createElement("path", {
    d: "M12.486 8.24H5.515a.697.697 0 000 1.395h6.97a.697.697 0 000-1.395z"
  }), React.createElement("path", {
    d: "M9.697 12.423V5.452a.697.697 0 00-1.394 0v6.971a.697.697 0 001.394 0z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_62_21182"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h18v18H0z"
  })))));
};
const ks = (0, g.memo)(Os);
function js(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
const As = function (e) {
  var t,
    n,
    r,
    a = e.option,
    o = e.index,
    i = e.type,
    l = e.showError,
    c = e.onDragStart,
    u = e.onDragOver,
    s = e.onDrop,
    d = e.onDragEnd,
    m = e.onTextChange,
    p = e.onCheckboxChange,
    f = e.onRemoveOption,
    v = e.onAddOption,
    y = e.className,
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
      }(e, t) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return js(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? js(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    w = _[0],
    E = _[1];
  return h().createElement(qt, {
    isVisible: !0
  }, h().createElement("div", {
    className: "ohmylms-option-item-wrapper ".concat(y || "")
  }, h().createElement(I.CardWP, {
    isBorderless: !0,
    draggable: !w,
    onDragStart: function (e) {
      return c(e, o);
    },
    onDragOver: u,
    onDrop: function (e) {
      return s(e, o);
    },
    onDragEnd: d
  }, h().createElement(I.SpacerWP, {
    padding: 2,
    marginBottom: 0
  }, h().createElement(I.FlexWP, {
    justify: "flex-start",
    gap: 2
  }, h().createElement(V.A, {
    title: (0, b.__)("Mark as correct answer", "ohmylms")
  }, "multiple" === i ? h().createElement(I.CheckboxWP, {
    checked: 1 == (null == a ? void 0 : a.is_correct),
    onChange: function () {
      return p(a.id);
    }
  }) : h().createElement(I.RadioWP, {
    selected: 1 == (null == a ? void 0 : a.is_correct) ? null == a ? void 0 : a.answer : null,
    onChange: function () {
      return p(a.id);
    },
    options: [{
      level: "",
      value: null == a ? void 0 : a.answer
    }]
  })), h().createElement(I.FlexItemWP, {
    isBlock: !0
  }, h().createElement(I.InputWP, {
    placeholder: (0, b.__)("Option", "ohmylms") + " ".concat(o + 1),
    value: null == a ? void 0 : a.answer,
    onChange: function (e) {
      return m(a.id, e);
    },
    status: null != a && null !== (t = a.answer) && void 0 !== t && t.trim() ? "" : "error",
    onFocus: function () {
      return E(!0);
    },
    onBlur: function () {
      return E(!1);
    },
    autoComplete: "off",
    style: {
      width: "100%"
    }
  })), h().createElement(I.FlexItemWP, null, h().createElement(I.FlexWP, {
    justify: "flex-end"
  }, h().createElement(I.ButtonWP, {
    icon: h().createElement(Ps, null),
    onClick: function () {
      return f(a.id);
    },
    className: "ohmylms-remove-option-btn",
    style: {
      minWidth: "26px",
      padding: "2px"
    }
  }), h().createElement(I.ButtonWP, {
    icon: h().createElement(ks, null),
    onClick: v,
    className: "ohmylms-add-option-btn",
    style: {
      minWidth: "26px",
      padding: "2px"
    }
  }), h().createElement(I.ButtonWP, {
    className: "ohmylms-drag-icon",
    icon: h().createElement(gc, null),
    style: {
      cursor: "all-scroll",
      border: "none",
      boxShadow: "none",
      minWidth: "26px",
      padding: "2px"
    }
  })))))), l && !(null != a && null !== (n = a.answer) && void 0 !== n && n.trim()) && h().createElement("div", {
    className: "ohmylms-option-correct",
    style: {
      color: "red",
      marginTop: 4
    }
  }, (0, b.__)("Field cannot be empty", "ohmylms")), 1 == a.is_correct && Boolean(null == a || null === (r = a.answer) || void 0 === r ? void 0 : r.trim()) && h().createElement("span", {
    className: "ohmylms-option-correct"
  }, (0, b.__)("This answer is correct", "ohmylms"))));
};
function Ms(e) {
  return Ms = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ms(e);
}
function Ts(e) {
  return function (e) {
    if (Array.isArray(e)) return zs(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || Ws(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Is(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Fs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Is(Object(n), !0).forEach(function (t) {
      Ns(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Is(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Ns(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Ms(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Ms(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Ms(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ds(e, t) {
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
  }(e, t) || Ws(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Ws(e, t) {
  if (e) {
    if ("string" == typeof e) return zs(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zs(e, t) : void 0;
  }
}
function zs(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Bs = function (e) {
  var t = e.type,
    n = void 0 === t ? "multiple" : t,
    r = (0, y.useSelect)(function (e) {
      return e(T.default).selectSelectedQuestionId();
    }, []),
    a = (0, y.useSelect)(function (e) {
      return e(T.default).getQuestionContents();
    }, [r]),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).selectQuestion();
    }, []),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).selectQuizzesError();
    }, []),
    l = (0, y.useDispatch)(T.default),
    c = l.addContentToQuestion,
    u = l.updateQuestionData,
    s = Ds((0, g.useState)(null), 2),
    d = s[0],
    m = s[1],
    p = Ds((0, g.useState)(!1), 2),
    f = p[0],
    v = p[1],
    h = function () {
      var e = Fs({}, o),
        t = {
          id: Date.now(),
          answer: "",
          is_correct: !1,
          order_number: a.length + 1,
          temp: !0
        };
      e.questions = [].concat(Ts(e.questions), [Fs({}, t)]), u(r, e), c(r, [].concat(Ts(a), [Fs({}, t)]));
    },
    _ = function (e) {
      if (3 > a.length) return m((0, b.__)("You must have at least 2 options", "ohmylms")), void setTimeout(function () {
        m(null);
      }, 3e3);
      var t = a.filter(function (t) {
          return t.id !== e;
        }),
        n = Fs({}, o);
      n.questions = t, u(r, n);
    },
    w = function (e, t) {
      c(r, a.map(function (n) {
        return n.id === e ? Fs(Fs({}, n), {}, {
          answer: t
        }) : n;
      }));
    },
    E = function (e) {
      c(r, "single" === n ? a.map(function (t) {
        return Fs(Fs({}, t), {}, {
          is_correct: t.id === e
        });
      }) : a.map(function (t) {
        return t.id === e ? Fs(Fs({}, t), {}, {
          is_correct: !t.is_correct
        }) : t;
      }));
    },
    S = Ds((0, g.useState)(null), 2),
    R = (S[0], S[1]),
    x = function (e, t) {
      R(t), localStorage.setItem("draggedItemIndex", t), e.currentTarget.classList.add("dragging");
    },
    C = function (e) {
      e.preventDefault();
    },
    P = function (e, t) {
      e.preventDefault();
      var n = localStorage.getItem("draggedItemIndex");
      if (null !== n && n != t) {
        var o = Ts(a),
          i = Ds(o.splice(n, 1), 1)[0];
        o.splice(t, 0, i), o.forEach(function (e, t) {
          e.order_number = t + 1;
        }), c(r, o), R(null), localStorage.removeItem("draggedItemIndex");
      }
    },
    O = function (e) {
      e.currentTarget.classList.remove("dragging");
    },
    k = function () {
      v(!0);
    },
    j = function () {
      v(!1);
    };
  return React.createElement("div", {
    className: "ohmylms-options-list ohmylms-".concat(n, "-choice")
  }, (0, xs.I)(a).map(function (e, t) {
    return React.createElement(As, {
      className: "ohmylms-quiz-option-item ohmylms-quiz-option-item-".concat(t),
      key: e.id,
      option: e,
      index: t,
      type: n,
      isInputFocused: f,
      showError: i,
      onDragStart: x,
      onDragOver: C,
      onDrop: P,
      onDragEnd: O,
      onTextChange: w,
      onCheckboxChange: E,
      onRemoveOption: _,
      onAddOption: h,
      onInputFocus: k,
      onInputBlur: j
    });
  }), d && React.createElement("p", {
    className: "ohmylms-option-error-msg"
  }, d), i && !a.some(function (e) {
    return 1 == e.is_correct;
  }) && React.createElement("p", {
    className: "ohmylms-option-error-msg"
  }, (0, b.__)("Please select at least one correct answer", "ohmylms")));
};
const Ls = (0, g.memo)(Bs);
var Vs = function () {
  return React.createElement(React.Fragment, null, React.createElement(Ls, {
    type: "multiple"
  }));
};
const Hs = (0, g.memo)(Vs),
  Gs = {
    name: (0, b.__)("Multiple Choice", "ohmylms"),
    type: "multiple-choice",
    subTitle: "Ask participants to choose from a list of answer",
    icon: Es,
    thumbIcon: Rs,
    edit: Hs,
    settings: {
      required: !0,
      randomize: !0,
      score: !0
    },
    isPro: !1
  };
