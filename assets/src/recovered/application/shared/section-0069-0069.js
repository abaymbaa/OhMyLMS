// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var bM,
  _M,
  wM,
  EM,
  SM,
  RM,
  xM,
  CM,
  PM,
  OM,
  kM,
  jM,
  AM,
  MM,
  TM,
  IM,
  FM,
  NM,
  DM,
  WM,
  zM,
  BM,
  LM,
  VM,
  HM,
  GM,
  UM,
  qM = {
    key: "updateContactFields",
    group: "actions",
    type: "action",
    package: "pro",
    category: "mailmint",
    title: (0, b._x)("Update Contact Fields", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: null === (dM = window) || void 0 === dM || null === (dM = dM.MRM_Vars) || void 0 === dM || null === (dM = dM.mint_trans) || void 0 === dM ? void 0 : dM.ActionDescription,
    subtitle: function (e) {
      var t, n;
      return 0 === (null == e || null === (t = e.settings) || void 0 === t || null === (t = t.update_contact_fields) || void 0 === t ? void 0 : t.field_properties.length) ? null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet : "Update your contact fields";
    },
    icon: function () {
      return React.createElement("svg", {
        width: "22",
        height: "22",
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        d: "M13.9391 21.1455H8.35774C3.30658 21.1455 1.14844 18.9874 1.14844 13.9362V8.35481C1.14844 3.30365 3.30658 1.14551 8.35774 1.14551H13.9391C18.9903 1.14551 21.1484 3.30365 21.1484 8.35481V13.9362C21.1484 18.9874 18.9903 21.1455 13.9391 21.1455ZM8.35774 2.54086C4.06937 2.54086 2.54379 4.06644 2.54379 8.35481V13.9362C2.54379 18.2246 4.06937 19.7502 8.35774 19.7502H13.9391C18.2275 19.7502 19.7531 18.2246 19.7531 13.9362V8.35481C19.7531 4.06644 18.2275 2.54086 13.9391 2.54086H8.35774Z",
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: "0.4"
      }), React.createElement("path", {
        d: "M6.8029 14.1591C6.65406 14.1591 6.50523 14.1126 6.375 14.0103C6.06802 13.7778 6.0122 13.3405 6.24476 13.0336L8.45872 10.1591C8.72848 9.81496 9.10988 9.59171 9.54709 9.53589C9.97499 9.48008 10.4122 9.60101 10.7564 9.87078L12.4587 11.2103C12.5238 11.2661 12.5889 11.2661 12.6355 11.2568C12.6727 11.2568 12.7378 11.2382 12.7936 11.1638L14.9424 8.39171C15.175 8.08473 15.6215 8.02892 15.9192 8.27078C16.2262 8.50334 16.282 8.94055 16.0401 9.24752L13.8913 12.0196C13.6215 12.3638 13.2401 12.5871 12.8029 12.6336C12.3657 12.6894 11.9378 12.5685 11.5936 12.2987L9.89127 10.9592C9.82616 10.9033 9.75174 10.9033 9.71453 10.9126C9.67732 10.9126 9.6122 10.9312 9.55639 11.0057L7.34244 13.8801C7.22151 14.0661 7.01686 14.1591 6.8029 14.1591Z",
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: "0.4"
      }));
    },
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i = (0, g.useRef)(),
        l = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            automationData: e(Lf).getAutomationData()
          };
        }, []),
        c = l.selectedStep,
        u = l.selectedStepIndex,
        s = l.selectedStepCondition,
        d = l.selectedLogicalStepIndex,
        m = l.automationData;
      (0, g.useEffect)(function () {
        var e;
        0 === ((null === (e = c.settings) || void 0 === e || null === (e = e.update_contact_fields) || void 0 === e ? void 0 : e.field_properties) || []).length && (0, y.dispatch)(Lf).updateStepArgs(u, s, d, "update_contact_fields", "field_properties", [{
          key: "",
          value: ""
        }]);
      }, [c, u, s, d]);
      var p = function (e, t, n) {
          var r,
            a = (null == c || null === (r = c.settings) || void 0 === r || null === (r = r.update_contact_fields) || void 0 === r ? void 0 : r.field_properties) || [],
            o = null == a ? void 0 : a.map(function (r, a) {
              return a === e ? hM(hM({}, r), {}, yM({}, t, n)) : r;
            });
          (0, y.dispatch)(Lf).updateStepArgs(u, s, d, "update_contact_fields", "field_properties", o);
        },
        f = (null === (e = c.settings) || void 0 === e || null === (e = e.update_contact_fields) || void 0 === e ? void 0 : e.field_properties) || [],
        v = [{
          label: "Select Field",
          value: ""
        }].concat(fM(null !== (t = window) && void 0 !== t && null !== (t = t.MRM_Vars) && void 0 !== t && t.text_fields ? null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.text_fields) || void 0 === n ? void 0 : n.map(function (e) {
          return {
            label: e.name,
            value: e.slug
          };
        }) : []));
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings update-contact-fields-settings"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(fP, null), null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.UpdateContactFields), h().createElement("p", {
        className: "sort-description"
      }, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.UpdateContactFieldDes)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", null, h().createElement("label", {
        htmlFor: "",
        className: "settings-label"
      }, (0, b.__)("Select fields that you want to update", "mrm")), null == f ? void 0 : f.map(function (e, t) {
        var n;
        return h().createElement("div", {
          key: t,
          className: "form-group single-settings update-contact-fields-single-settings"
        }, h().createElement("div", {
          className: "contact-fields-settings-input-wrapper"
        }, h().createElement(q.SelectControl, {
          value: e.key || "",
          options: v,
          onChange: function (e) {
            return p(t, "key", e);
          },
          style: {
            border: "none !important"
          }
        }), h().createElement("div", {
          className: "field-value-wrapper"
        }, h().createElement(q.TextControl, {
          type: "text",
          placeholder: (0, b.__)("Field Value", "mrm"),
          value: e.value || "",
          onChange: function (e) {
            return p(t, "value", e);
          },
          style: {
            width: "100%"
          }
        }), h().createElement("div", {
          className: "pos-relative"
        }, h().createElement(Ej, {
          inputRef: i,
          inputValue: e.value,
          setInputValue: function (e) {
            return p(t, "value", e);
          },
          tooltip: null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.personalizeTooltip,
          triggerName: null == m ? void 0 : m.trigger_name
        })))), h().createElement("button", {
          onClick: function () {
            return function (e) {
              var t,
                n = ((null === (t = c.settings) || void 0 === t || null === (t = t.update_contact_fields) || void 0 === t ? void 0 : t.field_properties) || []).filter(function (t, n) {
                  return n !== e;
                });
              0 === n.length && n.push({
                key: "",
                value: ""
              }), (0, y.dispatch)(Lf).updateStepArgs(u, s, d, "update_contact_fields", "field_properties", n);
            }(t);
          },
          className: "delete-row"
        }, h().createElement(cA, null)));
      }), h().createElement("button", {
        className: "add-more-btn",
        onClick: function () {
          var e,
            t = (null === (e = c.settings) || void 0 === e || null === (e = e.update_contact_fields) || void 0 === e ? void 0 : e.field_properties) || [];
          (0, y.dispatch)(Lf).updateStepArgs(u, s, d, "update_contact_fields", "field_properties", [].concat(fM(t), [{
            key: "",
            value: ""
          }]));
        }
      }, "+ ", (0, b.__)("Add New", "mrm"))), h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "",
        className: "inline-with-link"
      }, "Advanced"), h().createElement("div", {
        className: "update-contact-fields-checkbox"
      }, h().createElement("input", {
        type: "checkbox",
        id: "blank_input",
        checked: null === (o = c.settings) || void 0 === o || null === (o = o.update_contact_fields) || void 0 === o ? void 0 : o.is_blank,
        onChange: function (e) {
          return (0, y.dispatch)(Lf).updateStepArgs(u, s, d, "update_contact_fields", "is_blank", e.target.checked);
        }
      }), h().createElement("label", {
        htmlFor: "blank_input",
        className: "inline-with-link"
      }, (0, b.__)("Do not update custom field(s) when passed value is blank", "mrm")))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function YM() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return QM(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (QM(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, QM(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, QM(d, "constructor", u), QM(u, "constructor", c), c.displayName = "GeneratorFunction", QM(u, a, "GeneratorFunction"), QM(d), QM(d, a, "Generator"), QM(d, r, function () {
    return this;
  }), QM(d, "toString", function () {
    return "[object Generator]";
  }), (YM = function () {
    return {
      w: o,
      m
    };
  })();
}

function QM(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  QM = function (e, t, n, r) {
    function o(t, n) {
      QM(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, QM(e, t, n, r);
}

function ZM(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function $M(e) {
  return function (e) {
    if (Array.isArray(e)) return XM(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || JM(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function KM(e, t) {
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
  }(e, t) || JM(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function JM(e, t) {
  if (e) {
    if ("string" == typeof e) return XM(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? XM(e, t) : void 0;
  }
}

function XM(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function eT(e) {
  var t = e.selected,
    n = e.setSelected,
    r = e.endpoint,
    a = e.items,
    o = e.allowMultiple,
    i = e.allowNewCreate,
    l = e.name,
    c = e.title,
    u = e.refresh,
    s = e.setRefresh,
    d = e.prefix,
    m = e.comesFrom,
    p = e.valueKey,
    f = e.valueIndex,
    v = KM((0, g.useState)(""), 2),
    h = v[0],
    b = v[1],
    _ = KM((0, g.useState)(""), 2),
    w = _[0],
    E = _[1],
    S = KM((0, g.useState)(!1), 2),
    R = S[0],
    x = S[1],
    C = KM((0, g.useState)("success"), 2),
    P = C[0],
    O = C[1],
    k = KM((0, g.useState)(!1), 2),
    j = k[0],
    A = k[1],
    M = (0, g.useRef)(null),
    T = KM((0, g.useState)(!1), 2),
    I = T[0],
    F = T[1],
    N = (0, y.useSelect)(function (e) {
      return {
        selectedStep: e(Lf).getSelectedStep(),
        selectedStepIndex: e(Lf).getSelectedStepIndex(),
        selectedStepCondition: e(Lf).getSelectedStepCondition(),
        selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
        errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
      };
    }, []),
    D = N.selectedStep,
    W = N.selectedStepIndex,
    z = N.selectedStepCondition,
    B = N.selectedLogicalStepIndex;
  N.errors, (0, g.useEffect)(function () {
    b("");
  }, [e.isActive]), (0, g.useEffect)(function () {
    M.current && M.current.focus();
  }, [e.isActive]);
  var L = (0, g.useMemo)(function () {
    return h ? a.filter(function (e) {
      return e.title.toLowerCase().includes(h.toLocaleLowerCase());
    }) : a;
  }, [h, a]);
  (0, g.useEffect)(function () {
    var e,
      n = null === (e = D.settings) || void 0 === e ? void 0 : e.rules.condition.map(function (e, t) {
        return e;
      });
    n[p][f].segmentValue = t, (0, y.dispatch)(Lf).updateStepArgs(W, z, B, "rules", "condition", n);
  }, [t]);
  var V = function (e) {
      var r;
      e.stopPropagation();
      var a = e.target.value ? e.target.value : e.target.dataset.customValue,
        i = e.target.dataset.customId,
        l = null == t ? void 0 : t.findIndex(function (e) {
          return e.id == i;
        }),
        c = null === (r = D.settings) || void 0 === r ? void 0 : r.rules.condition.map(function (e, t) {
          return e;
        });
      o ? l >= 0 ? (n(t.filter(function (e) {
        return e.id != i;
      })), F(!1), c[p][f].segmentValue.splice(l, 1), (0, y.dispatch)(Lf).updateStepArgs(W, z, B, "rules", "condition", c)) : (n([].concat($M(t), [{
        id: i,
        title: a
      }])), F(!1), c[p][f].segmentValue = [].concat($M(t), [{
        id: i,
        title: a
      }]), (0, y.dispatch)(Lf).updateStepArgs(W, z, B, "rules", "condition", c)) : n(l >= 0 ? [] : [{
        id: i,
        title: a
      }]);
    },
    H = function () {
      var e,
        a = (e = YM().m(function e() {
          var a, o, i;
          return YM().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                o = {
                  title: h
                }, i = null === (a = D.settings) || void 0 === a ? void 0 : a.rules.condition.map(function (e, t) {
                  return e;
                }), qh(r, o).then(function (e) {
                  "success" === e.status ? (b(""), n([].concat($M(t), [{
                    id: null == e ? void 0 : e.data,
                    title: o.title
                  }])), i[p][f].segmentValue = [].concat($M(t), [{
                    id: null == e ? void 0 : e.data,
                    title: o.title
                  }]), (0, y.dispatch)(Lf).updateStepArgs(W, z, B, "rules", "condition", i), O("success"), x(!0), E(null == e ? void 0 : e.message), s(!u)) : (O("warning"), x(!0), E(null == e ? void 0 : e.message)), Qh(!1, x);
                }), A(!1);
              case 1:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              ZM(o, r, a, i, l, "next", e);
            }
            function l(e) {
              ZM(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return a.apply(this, arguments);
      };
    }();
  return React.createElement(React.Fragment, null, React.createElement("ul", {
    className: e.isActive ? "segment-contact mintmrm-dropdown show" : "segment-contact mintmrm-dropdown"
  }, React.createElement("li", {
    className: "searchbar"
  }, React.createElement("span", {
    className: "pos-relative"
  }, React.createElement(Jh, null), React.createElement("input", {
    ref: M,
    type: "search",
    name: "column-search",
    placeholder: "Search or create",
    value: h,
    onChange: function (e) {
      return function (e) {
        b(e), h.length && A(!1);
      }(e.target.value);
    }
  }))), 0 == a.length || 0 == (null == L ? void 0 : L.length) ? React.createElement("li", {
    className: "list-title not-found"
  }, "No ", l, " Found") : React.createElement("li", {
    className: "list-title"
  }, c), React.createElement("div", {
    className: "option-section"
  }, "automation" == m && (null == L ? void 0 : L.length) > 1 && React.createElement(React.Fragment, null, React.createElement("li", {
    className: "single-column"
  }, React.createElement("div", {
    className: "mintmrm-checkbox"
  }, React.createElement("input", {
    type: "checkbox",
    name: "all-items",
    id: "all-items",
    checked: I
  }), React.createElement("label", {
    htmlFor: "all-items",
    className: "mrm-custom-select-label"
  }, "Select All Items")))), (null == L ? void 0 : L.length) > 0 && L.map(function (e, n) {
    var r,
      a = (r = e.id, (null == t ? void 0 : t.findIndex(function (e) {
        return e.id == r;
      })) >= 0);
    return React.createElement("li", {
      key: n,
      className: a ? "single-column mrm-custom-select-single-column-selected" : "single-column"
    }, React.createElement("div", {
      className: "mintmrm-checkbox"
    }, React.createElement("input", {
      type: "checkbox",
      name: e.id,
      id: d + e.id,
      value: e.title,
      "data-custom-id": e.id,
      onChange: V,
      checked: a
    }), React.createElement("label", {
      htmlFor: d + e.id,
      className: "mrm-custom-select-label"
    }, e.title)));
  })), 0 == a.length || h && i ? React.createElement(React.Fragment, null, React.createElement("button", {
    className: j ? "mrm-custom-select-add-btn" : "mrm-custom-select-add-btn show",
    onClick: function () {
      A(!0);
    }
  }, React.createElement($h, null), " Add ", l), React.createElement("div", {
    className: j ? "add-item-input-wrapper show" : "add-item-input-wrapper"
  }, React.createElement("input", {
    type: "text",
    placeholder: "Enter " + l + " Name",
    value: h,
    onChange: function (e) {
      return b(e.target.value);
    }
  }), React.createElement("button", {
    className: "mintmrm-btn",
    onClick: H
  }, "Save"))) : null), R && React.createElement(oy, {
    setShowNotification: x,
    message: w,
    notificationType: P,
    setNotificationType: O
  }));
}

function tT(e) {
  return tT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, tT(e);
}

function nT(e, t) {
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
  }(e, t) || rT(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function rT(e, t) {
  if (e) {
    if ("string" == typeof e) return aT(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? aT(e, t) : void 0;
  }
}

function aT(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function oT(e) {
  var t,
    n,
    r,
    a,
    o = (0, g.useRef)(null),
    i = e.valueKey,
    l = e.index,
    c = e.value,
    u = nT((0, g.useState)(!1), 2),
    s = u[0],
    d = u[1],
    m = nT((0, g.useState)(new Date()), 2),
    p = m[0],
    f = m[1],
    v = null === (t = window.MRM_Vars) || void 0 === t ? void 0 : t.start_of_week,
    h = null === (n = window.MRM_Vars) || void 0 === n ? void 0 : n.time_format;
  function b() {
    return "H:i" !== h;
  }
  null === (r = window.MRM_Vars) || void 0 === r || r.gmt_offset;
  var _ = (0, y.useSelect)(function (e) {
      return {
        selectedStep: e(Lf).getSelectedStep(),
        selectedStepIndex: e(Lf).getSelectedStepIndex(),
        selectedStepCondition: e(Lf).getSelectedStepCondition(),
        selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
        errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
      };
    }, []),
    w = _.selectedStep,
    E = _.selectedStepIndex,
    S = _.selectedStepCondition,
    R = _.selectedLogicalStepIndex,
    x = (_.errors, (0, y.useDispatch)(Lf).setAtMostDate);
  var C = function (e) {
      var t,
        n = new Date(e);
      f(n);
      var r = null === (t = w.settings) || void 0 === t ? void 0 : t.rules.condition.map(function (e, t) {
        return e;
      });
      r[i][l].value = e, (0, y.dispatch)(Lf).updateStepArgs(E, S, R, "rules", "condition", r);
      var a,
        o,
        u,
        s = function (e) {
          e = JSON.stringify(e);
          var t,
            n = [],
            r = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/,
            a = function (e) {
              var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (!t) {
                if (Array.isArray(e) || (t = rT(e))) {
                  t && (e = t);
                  var n = 0,
                    r = function () {};
                  return {
                    s: r,
                    n: function () {
                      return n >= e.length ? {
                        done: !0
                      } : {
                        done: !1,
                        value: e[n++]
                      };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: r
                  };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var a,
                o = !0,
                i = !1;
              return {
                s: function () {
                  t = t.call(e);
                },
                n: function () {
                  var e = t.next();
                  return o = e.done, e;
                },
                e: function (e) {
                  i = !0, a = e;
                },
                f: function () {
                  try {
                    o || null == t.return || t.return();
                  } finally {
                    if (i) throw a;
                  }
                }
              };
            }(JSON.parse(e)[0]);
          try {
            for (a.s(); !(t = a.n()).done;) {
              var o = t.value;
              if (r.test(o.value)) {
                var i = new Date(o.value),
                  l = {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: b()
                  },
                  c = i.toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                  }),
                  u = i.toLocaleTimeString("en-US", l),
                  s = "".concat(c, " - ").concat(u);
                n.push(s);
              }
            }
          } catch (e) {
            a.e(e);
          } finally {
            a.f();
          }
          return n;
        }(r),
        d = (a = s, o = new Date(Math.max.apply(null, a.map(function (e) {
          return new Date(e.replace(/-/g, "/")).getTime();
        }))), o.toLocaleString("en-US", {
          hour12: b()
        })),
        m = function (e, t, n) {
          return (t = function (e) {
            var t = function (e) {
              if ("object" != tT(e) || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var n = t.call(e, "string");
                if ("object" != tT(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            }(e);
            return "symbol" == tT(t) ? t : t + "";
          }(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }({}, (u = {
          atmostDate: d,
          step_id: w.step_id,
          key: w.key
        }).step_id, u.atmostDate);
      c.some(function (e) {
        return ["email_clicked", "email_opened"].includes(e.param);
      }) && x(m, w.step_id);
    },
    P = null === (a = w.settings) || void 0 === a ? void 0 : a.rules.condition.map(function (e, t) {
      return e;
    }),
    O = new Date(P[i][l].value),
    k = {
      hour: "numeric",
      minute: "numeric",
      hour12: b()
    },
    j = O.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }),
    A = O.toLocaleTimeString("en-US", k),
    M = "".concat(j, " - ").concat(A);
  return (0, wy.useOutsideAlerter)(o, d), React.createElement("div", {
    ref: o
  }, React.createElement("button", {
    className: "drop-down-button calender-button ".concat(s ? "show" : "", " ").concat(P[i][l].value ? "focus" : ""),
    onClick: function () {
      d(!s);
    },
    title: P[i][l].value ? M : "Select Date"
  }, P[i][l].value ? M : "Select Date"), React.createElement("div", {
    className: "custom-date"
  }, React.createElement("div", {
    className: s ? "datepicker-dropdown show" : "datepicker-dropdown"
  }, React.createElement(q.DateTimePicker, {
    currentDate: P[i][l].value ? P[i][l].value : p,
    onChange: function (e) {
      return C(e);
    },
    is12Hour: b(),
    startOfWeek: v,
    __nextRemoveHelpButton: !0,
    __nextRemoveResetButton: !0
  }))));
}

function iT(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
