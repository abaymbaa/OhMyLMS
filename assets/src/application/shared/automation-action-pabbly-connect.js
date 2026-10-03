// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function eI() {
  return React.createElement("svg", {
    width: "23",
    height: "22",
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_9989_2784)"
  }, React.createElement("path", {
    fill: "#20B276",
    d: "M20 10c0 5.52-4.477 9.997-10 9.997A9.994 9.994 0 010 10C0 4.479 4.477.003 10 .003S20 4.479 20 10z"
  }), React.createElement("path", {
    fill: "#147F52",
    d: "M13.99 12.845c-1.059 1.09-2.343 1.635-3.854 1.635-.921 0-1.778-.156-2.58-.609l-.01 5.804-.076-.02-.047-.012-.056-.03-.026-.048-.024-.053.027-.034-2.649-3.156.001-7.46c0-1.554.53-2.874 1.588-3.96 1.058-1.087 2.342-1.63 3.852-1.63 1.51 0 2.795.545 3.853 1.636 1.058 1.09 1.588 2.413 1.588 3.968 0 1.556-.53 2.879-1.588 3.969zm-2.02-5.858a2.457 2.457 0 00-1.834-.777c-.72 0-1.33.259-1.832.777-.503.518-.754 1.147-.754 1.89 0 .741.251 1.37.754 1.889a2.457 2.457 0 001.832.777c.72 0 1.33-.26 1.833-.777.503-.518.754-1.148.754-1.89s-.251-1.371-.754-1.89z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M13.778 12.638c-1.058 1.09-2.343 1.636-3.853 1.636a5.178 5.178 0 01-2.587-.68v6.05s-.196-.055-.45-.137a7.38 7.38 0 01-.192-.065c-.032-.011-.047-.018-.08-.027-.083-.024-.189-.07-.27-.102a10.312 10.312 0 01-.5-.21c-.005-.003-.786-.375-.875-.43-.078-.05-.149-.088-.209-.132l-.052-.036a23.802 23.802 0 01-.223-.155l-.003-9.695c0-1.555.53-2.875 1.588-3.962 1.058-1.086 2.343-1.63 3.853-1.63 1.51 0 2.795.546 3.853 1.636 1.058 1.09 1.588 2.414 1.588 3.97s-.53 2.879-1.588 3.97zm-2.02-5.86a2.457 2.457 0 00-1.833-.776c-.72 0-1.33.259-1.833.777-.503.518-.754 1.148-.754 1.89s.251 1.372.754 1.89a2.456 2.456 0 001.833.777c.72 0 1.33-.259 1.833-.777.502-.518.754-1.148.754-1.89s-.252-1.372-.754-1.89z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_9989_2784"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0z"
  }))));
}

function tI(e) {
  return function (e) {
    if (Array.isArray(e)) return aI(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || rI(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function nI(e, t) {
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
  }(e, t) || rI(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function rI(e, t) {
  if (e) {
    if ("string" == typeof e) return aI(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? aI(e, t) : void 0;
  }
}

function aI(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var oI = {
    key: "pabblyConnectSendData",
    group: "actions",
    type: "action",
    package: "pro",
    category: "mint-send-data",
    title: (0, b._x)("Pabbly Connect", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: "Automatically integrate with Pabbly Connect to streamline workflows.",
    subtitle: function (e) {
      return "Automatically integrate with Pabbly Connect to streamline workflows.";
    },
    icon: eI,
    edit: function () {
      var e,
        t = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        n = t.selectedStep,
        r = t.selectedStepIndex,
        a = t.selectedStepCondition,
        o = t.selectedLogicalStepIndex,
        i = (t.errors, nI((0, g.useState)(!1), 2)),
        l = i[0],
        c = i[1],
        u = nI((0, g.useState)(""), 2),
        s = u[0],
        d = u[1],
        m = nI((0, g.useState)(!1), 2),
        p = m[0],
        f = m[1],
        v = nI((0, g.useState)(0), 2),
        b = v[0],
        _ = v[1],
        w = nI((0, g.useState)(""), 2),
        E = w[0],
        S = w[1],
        R = nI((0, g.useState)([{
          id: 0,
          key: "",
          value: ""
        }]), 2),
        x = R[0],
        C = R[1],
        P = (0, g.useRef)(null),
        O = function (e, t, n) {
          var i = tI(x);
          i.find(function (t) {
            return t.id == e;
          })[t] = n;
          var l = tI(i);
          C(l), (0, y.dispatch)(Lf).updateStepArgs(r, a, o, "pabbly_data", "data", l);
        },
        k = function (e) {
          d(e), f(!p);
        },
        j = function (e, t) {
          var r,
            a = (null === (r = n.settings) || void 0 === r || null === (r = r.pabbly_data) || void 0 === r || null === (r = r.data[t]) || void 0 === r ? void 0 : r.value) || "",
            o = a.substring(0, b) + e + a.substring(b, a.length);
          _(b + e.length), O(t, "value", o), c(!1);
        };
      return (0, g.useEffect)(function () {
        var e,
          t,
          r = null !== (e = n.settings) && void 0 !== e && null !== (e = e.pabbly_data) && void 0 !== e && e.data ? null === (t = n.settings) || void 0 === t || null === (t = t.pabbly_data) || void 0 === t ? void 0 : t.data : [{
            id: 0,
            key: "",
            value: ""
          }];
        C(r);
      }, []), h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings send-data-to-pabbly"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(eI, null), "Send Data to Pabbly Connect")), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group"
      }, h().createElement("label", {
        htmlFor: "link"
      }, "Enter URL", h().createElement("span", {
        className: "required-mark"
      }, "*"), h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Enter a URL where data will be sent."))), h().createElement("input", {
        type: "url",
        id: "link",
        name: "link",
        value: null === (e = n.settings) || void 0 === e || null === (e = e.pabbly_data) || void 0 === e ? void 0 : e.link,
        placeholder: "Weebhook URL",
        onChange: function (e) {
          return function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(r, a, o, "pabbly_data", "link", e);
          }(e.target.value);
        }
      })), h().createElement("div", {
        className: "form-group"
      }, h().createElement("label", {
        htmlFor: "link"
      }, "Data Parameters Mapping", h().createElement("span", {
        className: "required-mark"
      }, "*"), h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Map your data fields and values to send to Pabbly Connect. Use placeholders as needed."))), x.map(function (e) {
        var t, n, i, u, d, m, f, v, g, b, w, R, A;
        return h().createElement("div", {
          className: "mint-single-data-field",
          key: e.id
        }, h().createElement(q.TextControl, {
          id: "key",
          placeholder: "Key",
          value: null == e ? void 0 : e.key,
          onChange: function (t) {
            return O(e.id, "key", t);
          }
        }), h().createElement("div", {
          className: "pos-relative"
        }, h().createElement(q.TextControl, {
          id: "value",
          placeholder: "Value",
          value: (null == e ? void 0 : e.value) || "",
          onClick: function (e) {
            return function (e) {
              _(e.target.selectionStart);
            }(e);
          },
          onChange: function (t) {
            return O(e.id, "value", t);
          }
        }), h().createElement("div", {
          ref: P
        }, h().createElement("span", {
          className: "merge-tag-icon",
          onClick: function () {
            return t = e.id, c(!l), void S(t);
            var t;
          }
        }, h().createElement(nA.default, null), h().createElement("p", {
          className: "personalized-tooltip"
        }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.personalizeTooltip)), h().createElement("ul", {
          className: "personalization mintmrm-dropdown ".concat(l && E == e.id ? "show" : "")
        }, h().createElement("div", {
          className: "title"
        }, "Personalization"), h().createElement("li", {
          className: "has-sub-dropdown ".concat("contact" === s && p ? "show" : null, " "),
          onClick: function () {
            return k("contact");
          }
        }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.Contact), "contact" === s && p && h().createElement(h().Fragment, null, h().createElement("li", {
          className: "group-item",
          onClick: function () {
            return j("{{contact.first_name}}", e.id);
          }
        }, null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i ? void 0 : i.contact_general_fields.first_name), h().createElement("li", {
          className: "group-item",
          onClick: function () {
            return j("{{contact.last_name}}", e.id);
          }
        }, null === (u = window) || void 0 === u || null === (u = u.MRM_Vars) || void 0 === u ? void 0 : u.contact_general_fields.last_name), h().createElement("li", {
          className: "group-item",
          onClick: function () {
            return j("{{contact.email}}", e.id);
          }
        }, null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d ? void 0 : d.contact_general_fields.email), h().createElement("li", {
          className: "group-item",
          onClick: function () {
            return j("{{contact.company}}", e.id);
          }
        }, null === (m = window) || void 0 === m || null === (m = m.MRM_Vars) || void 0 === m ? void 0 : m.contact_general_fields.company)), h().createElement("li", {
          className: "has-sub-dropdown ".concat("address" === s && p ? "show" : null, " "),
          onClick: function () {
            return k("address");
          }
        }, null === (f = window) || void 0 === f || null === (f = f.MRM_Vars) || void 0 === f || null === (f = f.mint_trans) || void 0 === f ? void 0 : f.Address), "address" === s && p && h().createElement(h().Fragment, null, h().createElement("li", {
          className: "group-item",
          onClick: function () {
            return j("{{address.city}}", e.id);
          }
        }, null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v ? void 0 : v.contact_general_fields.city), h().createElement("li", {
          className: "group-item",
          onClick: function () {
            return j("{{address.state}}", e.id);
          }
        }, null === (g = window) || void 0 === g || null === (g = g.MRM_Vars) || void 0 === g ? void 0 : g.contact_general_fields.state), h().createElement("li", {
          className: "group-item",
          onClick: function () {
            return j("{{address.country}}", e.id);
          }
        }, null === (b = window) || void 0 === b || null === (b = b.MRM_Vars) || void 0 === b ? void 0 : b.contact_general_fields.country)), 0 !== (null === (w = window) || void 0 === w || null === (w = w.MRM_Vars) || void 0 === w ? void 0 : w.contact_custom_fields.length) && h().createElement("li", {
          className: "has-sub-dropdown ".concat("custom" === s && p ? "show" : null, " "),
          onClick: function () {
            return k("custom");
          }
        }, null === (R = window) || void 0 === R || null === (R = R.MRM_Vars) || void 0 === R || null === (R = R.mint_trans) || void 0 === R ? void 0 : R.Custom), "custom" === s && p && h().createElement(h().Fragment, null, Object.keys(null === (A = window) || void 0 === A || null === (A = A.MRM_Vars) || void 0 === A ? void 0 : A.contact_custom_fields).map(function (t) {
          var n;
          return h().createElement("li", {
            className: "group-item",
            key: t,
            onClick: function () {
              return j("{{custom.".concat(t, "}}"), e.id);
            }
          }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n ? void 0 : n.contact_custom_fields[t]);
        }))))), x.length > 1 && h().createElement("button", {
          className: "mint-remove-field",
          onClick: function () {
            return t = e.id, n = x.filter(function (e) {
              return e.id !== t;
            }), C(n), void (0, y.dispatch)(Lf).updateStepArgs(r, a, o, "pabbly_data", "data", n);
            var t, n;
          }
        }, h().createElement(XT, null)));
      }), h().createElement("div", {
        className: "mint-button-wrapper"
      }, h().createElement("button", {
        className: "mint-button",
        onClick: function () {
          var e = {
              id: x.length,
              key: "",
              value: ""
            },
            t = tI(x);
          t.push(e), C(t), (0, y.dispatch)(Lf).updateStepArgs(r, a, o, "pabbly_data", "data", t);
        }
      }, "Add New"))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  },
  iI = function (e) {
    (0, y.dispatch)(Lf).registerStepType(e);
  },
  lI = function (e) {
    (0, y.dispatch)(Lf).unregisterStepType(e);
  };

function cI(e) {
  return cI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, cI(e);
}

function uI(e, t) {
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
      if ("string" == typeof e) return sI(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? sI(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function sI(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function dI(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function mI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? dI(Object(n), !0).forEach(function (t) {
      pI(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dI(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function pI(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != cI(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != cI(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == cI(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

var fI = n(55578);

function vI() {
  return React.createElement("svg", {
    width: "24",
    height: "26",
    fill: "none",
    viewBox: "0 0 24 26",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#02C4FB",
    stroke: "#02C4FB",
    strokeWidth: ".3",
    d: "M22.103 16.373l-9.125-7.377a2.757 2.757 0 00-2.931-.33c-.47.229-.86.586-1.127 1.027-.265.442-.395.95-.372 1.462l.573 11.54c.02.498.2.976.512 1.37.311.392.74.68 1.228.823a2.496 2.496 0 001.845-.144c.34-.168.637-.41.865-.71l1.975-2.56a2.156 2.156 0 011.7-.825h3.278a2.505 2.505 0 001.423-.437c.417-.285.733-.69.906-1.159.173-.469.194-.978.06-1.459a2.412 2.412 0 00-.81-1.226v.005zm-1.022 2.054a.559.559 0 01-.214.28.577.577 0 01-.343.1h-3.278a4.107 4.107 0 00-1.788.413c-.556.27-1.04.663-1.417 1.147l-1.975 2.559a.584.584 0 01-.65.203.563.563 0 01-.293-.192.544.544 0 01-.12-.326l-.571-11.54a.77.77 0 01.109-.441.793.793 0 01.34-.308.83.83 0 01.896.099l9.125 7.382a.535.535 0 01.179.624zM8.545 4.385V1.923c0-.245.1-.48.276-.653a.953.953 0 011.333 0 .914.914 0 01.277.653v2.462c0 .245-.1.48-.277.653a.953.953 0 01-1.333 0 .914.914 0 01-.276-.653zm-2.32 2.492a.93.93 0 01-.346.346.944.944 0 01-.936.003L2.428 5.852a.939.939 0 01-.463-.553.905.905 0 01.081-.712.929.929 0 01.575-.44.962.962 0 01.725.093L5.86 5.616a.938.938 0 01.45.556.905.905 0 01-.085.705zm-.923 3.25c.112.22.13.473.051.705a.93.93 0 01-.473.534l-2.515 1.23a.956.956 0 01-1.007-.102.906.906 0 01-.27-1.116.933.933 0 01.434-.433l2.514-1.231a.959.959 0 011.04.128c.094.08.17.177.226.286zm8.371-4.099a.906.906 0 01-.05-.704.93.93 0 01.473-.534l2.514-1.23a.961.961 0 01.717-.046c.235.078.43.244.541.462.111.218.13.47.052.701a.929.929 0 01-.468.534l-2.514 1.231a.96.96 0 01-.917-.041.934.934 0 01-.348-.373z"
  }));
}

function gI() {
  return gI = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gI.apply(null, arguments);
}

const hI = (0, p.memo)(function (e) {
  var t,
    n = e.step,
    r = (0, p.createContext)(q.__unstableUseCompositeState),
    a = (0, g.useContext)(r),
    o = (0, y.useDispatch)(Lf).setInserterPopover;
  return React.createElement(q.__unstableCompositeItem, gI({}, a(), {
    role: "treeitem",
    className: "mrm-automation-add-trigger",
    "data-previous-step-id": n.id,
    focusable: !0,
    onClick: function (e) {
      e.stopPropagation(), o({
        anchor: e.target.closest("button"),
        type: "trigger"
      });
    }
  }), React.createElement(vI, null), null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.SelectAStartingPoint);
});

var yI = n(65685);

function bI() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "12",
    viewBox: "0 0 8 12",
    fill: "none"
  }, React.createElement("path", {
    d: "M0.827527 6.59406L5.98735 11.7537C6.31557 12.0821 6.84774 12.0821 7.1758 11.7537C7.5039 11.4256 7.5039 10.8935 7.1758 10.5654L2.61016 5.99991L7.17567 1.43457C7.50377 1.10635 7.50377 0.574263 7.17567 0.24617C6.84758 -0.0820565 6.31544 -0.0820565 5.98721 0.24617L0.827394 5.4059C0.663347 5.57002 0.581416 5.7849 0.581416 5.99989C0.581416 6.21498 0.663507 6.43002 0.827527 6.59406Z",
    fill: "#2D3149"
  }));
}

const _I = (0, g.memo)(bI);

function wI() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, React.createElement("g", {
    clipPath: "url(#clip0_6439_3276)"
  }, React.createElement("path", {
    d: "M9.17247 6.59406L4.01265 11.7537C3.68443 12.0821 3.15226 12.0821 2.8242 11.7537C2.4961 11.4256 2.4961 10.8935 2.8242 10.5654L7.38984 5.99991L2.82433 1.43457C2.49623 1.10635 2.49623 0.574263 2.82433 0.24617C3.15242 -0.0820566 3.68456 -0.0820566 4.01279 0.24617L9.17261 5.4059C9.33665 5.57002 9.41858 5.7849 9.41858 5.99989C9.41858 6.21498 9.33649 6.43002 9.17247 6.59406Z",
    fill: "#2D3149"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_6439_3276"
  }, React.createElement("rect", {
    width: "12",
    height: "12",
    fill: "white"
  }))));
}

const EI = (0, g.memo)(wI),
  SI = function (e) {
    var t = e.children,
      n = (0, p.createContext)(q.__unstableUseCompositeState),
      r = (0, q.__unstableUseCompositeState)({
        shift: !0,
        wrap: "horizontal"
      });
    return React.createElement(n.Provider, {
      value: r
    }, t);
  };

g.Component;

var RI = n(40542),
  xI = ["isFirst", "children"];

function CI() {
  return CI = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, CI.apply(null, arguments);
}

var PI = (0, p.forwardRef)(function (e, t) {
  e.isFirst;
  var n = e.children,
    r = function (e, t) {
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
    }(e, xI),
    a = (0, p.createContext)(q.Composite.State),
    o = (0, p.useContext)(a);
  return React.createElement(q.Composite.Item, CI({
    ref: t,
    role: "option"
  }, r, o, {
    className: "components-button block-editor-block-types-list__item editor-block-list-item-sendMail"
  }), n);
});

function OI(e) {
  var t = e.icon;
  return React.createElement("span", {
    className: "block-editor-block-icon"
  }, React.createElement(q.Icon, {
    icon: t
  }));
}

var kI = ["className", "isFirst", "item", "onSelect", "onHover", "isDraggable", "activeCategory", "type"];

function jI() {
  return jI = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, jI.apply(null, arguments);
}

var AI = function () {
    var e = window.navigator.platform;
    return -1 !== e.indexOf("Mac") || ["iPad", "iPhone"].includes(e);
  },
  MI = (0, p.memo)(function (e) {
    var t,
      n = e.className,
      r = e.isFirst,
      a = e.item,
      o = e.onSelect,
      i = e.onHover,
      l = (e.isDraggable, e.activeCategory),
      c = (e.type, function (e, t) {
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
      }(e, kI)),
      u = (0, p.useRef)(!0);
    return function () {
      var e;
      "pro" !== a.package || null !== (e = window) && void 0 !== e && null !== (e = e.MRM_Vars) && void 0 !== e && e.is_mailmint_pro_license_active;
    }(), React.createElement(React.Fragment, null, (null == a ? void 0 : a.category) == l && React.createElement("div", {
      className: "block-editor-block-types-list__list-item ".concat("triggers" === (null == a ? void 0 : a.group) ? "trigger-items" : "")
    }, React.createElement(PI, jI({
      isFirst: r,
      className: Vr()("block-editor-block-types-list__item ", n),
      onClick: function (e) {
        e.preventDefault(), o(a, AI() ? e.metaKey : e.ctrlKey), i(null);
      },
      onKeyDown: function (e) {
        e.keyCode === RI.Fm && (e.preventDefault(), o(a, AI() ? e.metaKey : e.ctrlKey), i(null));
      },
      onFocus: function () {
        u.current || i(a);
      },
      onMouseEnter: function () {
        u.current || i(a);
      },
      onMouseLeave: function () {
        return i(null);
      },
      onBlur: function () {
        return i(null);
      }
    }, c), "pro" === a.package && !(null !== (t = window) && void 0 !== t && null !== (t = t.MRM_Vars) && void 0 !== t && t.is_mailmint_pro_license_active) && React.createElement("span", {
      className: "pro-tag-with-icon"
    }, React.createElement(sO, null)), React.createElement("span", {
      className: "block-editor-block-types-list__item-icon"
    }, React.createElement(OI, {
      icon: a.icon
    })), React.createElement("span", {
      className: "block-editor-block-types-list__item-title"
    }, a.title))));
  });

const TI = wp.a11y;

function II() {
  return II = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, II.apply(null, arguments);
}

function FI(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var NI = (0, p.forwardRef)(function (e, t) {
  var n = function (e, t) {
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
          if ("string" == typeof e) return FI(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? FI(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, p.useState)(!1), 2),
    r = n[0],
    a = n[1];
  return (0, p.useEffect)(function () {
    if (r) {
      var e,
        t = null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.MoveStepDirectionMsg;
      t && (0, TI.speak)(t);
    }
  }, [r]), React.createElement("div", II({
    ref: t,
    role: "listbox",
    "aria-orientation": "horizontal",
    onFocus: function () {
      a(!0);
    },
    onBlur: function (e) {
      !e.currentTarget.contains(e.relatedTarget) && a(!1);
    }
  }, e));
});

function DI() {
  return DI = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, DI.apply(null, arguments);
}

var WI = (0, p.forwardRef)(function (e, t) {
  var n = (0, p.createContext)({}),
    r = (0, p.useContext)(n);
  return React.createElement(q.Composite.Group, DI({
    role: "presentation",
    ref: t
  }, e, r));
});

const zI = (0, p.memo)(function (e) {
  var t = e.items,
    n = void 0 === t ? [] : t,
    r = e.onSelect,
    a = e.onHover,
    o = void 0 === a ? function () {} : a,
    i = e.children,
    l = e.label,
    c = e.isDraggable,
    u = void 0 === c || c,
    s = e.activeCategory,
    d = e.type;
  return React.createElement(NI, {
    className: "block-editor-block-types-list",
    "aria-label": l
  }, function (e) {
    for (var t = [], n = 0, r = e.length; n < r; n += 20) t.push(e.slice(n, n + 20));
    return t;
  }(n).map(function (e, t) {
    return React.createElement(WI, {
      key: t
    }, e.map(function (e, n) {
      return React.createElement(MI, {
        key: e.key,
        item: e,
        className: (a = e.key, "editor-block-list-item-".concat(a.replace(/\//, "-"))),
        onSelect: r,
        onHover: o,
        isDraggable: u,
        isFirst: 0 === t && 0 === n,
        activeCategory: s,
        type: d
      });
      var a;
    }));
  }), i);
});

function BI(e) {
  return BI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, BI(e);
}

function LI(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
