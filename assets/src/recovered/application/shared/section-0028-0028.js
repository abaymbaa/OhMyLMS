// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function cb() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return ub(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (ub(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, ub(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, ub(d, "constructor", u), ub(u, "constructor", c), c.displayName = "GeneratorFunction", ub(u, a, "GeneratorFunction"), ub(d), ub(d, a, "Generator"), ub(d, r, function () {
    return this;
  }), ub(d, "toString", function () {
    return "[object Generator]";
  }), (cb = function () {
    return {
      w: o,
      m
    };
  })();
}

function ub(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  ub = function (e, t, n, r) {
    function o(t, n) {
      ub(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, ub(e, t, n, r);
}

function sb(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function db(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        sb(o, r, a, i, l, "next", e);
      }
      function l(e) {
        sb(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function mb(e, t) {
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
      if ("string" == typeof e) return pb(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pb(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function pb(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var fb,
  vb = {
    key: "mint_form_submission",
    group: "triggers",
    type: "trigger",
    package: "free",
    category: "mailmint",
    title: (null === (ob = window) || void 0 === ob || null === (ob = ob.MRM_Vars) || void 0 === ob || null === (ob = ob.mint_trans) || void 0 === ob ? void 0 : ob.FormSubmitted) || "Form Submitted",
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("", "mrm"),
    subtitle: function (e) {
      var t, n;
      if ("" === (null === (t = e.settings) || void 0 === t || null === (t = t.mailmint_form_settings) || void 0 === t ? void 0 : t.form_id) || Object.keys(e.settings) < 1) return (null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet) || "Not Set Up Yet";
    },
    icon: function () {
      return React.createElement("svg", {
        className: "hover-stroke",
        viewBox: "0 0 20 22",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        stroke: "#2D3149",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5"
      }, React.createElement("path", {
        d: "M6.028 20.21H4.232a2.343 2.343 0 01-2.343-2.343V4.123a2.343 2.343 0 012.343-2.342h9.6a2.343 2.343 0 012.343 2.342V8.77M5.008 5.838h8.043M5.008 8.962h4.924m-4.924 3.123h3.245"
      }), React.createElement("path", {
        d: "M11.338 13.22a2.265 2.265 0 114.529 0 2.265 2.265 0 01-4.53 0z"
      }), React.createElement("path", {
        d: "M13.602 15.507a4.694 4.694 0 014.59 3.74v-.011a.806.806 0 01-.777.973H9.79a.798.798 0 01-.778-.963 4.694 4.694 0 014.59-3.739"
      })));
    },
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o = mb((0, g.useState)([]), 2),
        i = o[0],
        l = o[1],
        c = mb((0, g.useState)("Please enter 3 or more characters"), 2),
        u = c[0],
        s = c[1],
        d = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex()
          };
        }, []),
        m = d.selectedStep,
        p = d.selectedStepIndex,
        f = d.selectedStepCondition,
        v = d.selectedLogicalStepIndex,
        _ = function () {
          var e = db(cb().m(function e(t) {
            return cb().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  (0, y.dispatch)(Lf).updateStepArgs(p, f, v, "mailmint_form_settings", "form_id", t);
                case 1:
                  return e.a(2);
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
        w = function () {
          var e = db(cb().m(function e() {
            var t,
              n,
              r = arguments;
            return cb().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                    e.n = 2;
                    break;
                  }
                  return s((0, b.__)("loading...", "mrm")), e.n = 1, vh(t);
                case 1:
                  null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.forms) ? s((0, b.__)("No forms found", "mrm")) : l(null == n ? void 0 : n.forms));
                case 2:
                  return e.a(2, []);
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings mint-form-submit"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(lb, null), (null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.FormSubmitted) || "Form Submitted"), h().createElement("p", {
        className: "sort-description"
      }, (null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.FormSubmittedDescription) || "This automation will trigger when someone submits form selected from below.")), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, (null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.SelectAForm) || "Select a Form"), h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: function (e) {
            return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, u));
          }
        },
        value: null !== (r = null === (a = m.settings) || void 0 === a || null === (a = a.mailmint_form_settings) || void 0 === a ? void 0 : a.form_id) && void 0 !== r ? r : "",
        onChange: function (e) {
          _(e);
        },
        onInputChange: function (e) {
          w(e);
        },
        options: i,
        isMulti: !1,
        placeholder: (0, b.__)("Search...", "mrm"),
        isSearchable: !0
      })))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function gb() {
  return React.createElement("svg", {
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fill: "#2D3149",
    clipPath: "url(#clip0_3654_2097)"
  }, React.createElement("path", {
    d: "M15 1.667A3.337 3.337 0 0118.333 5v10A3.337 3.337 0 0115 18.333H5A3.337 3.337 0 011.667 15V5A3.337 3.337 0 015 1.667h10zM15 0H5a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V5a5 5 0 00-5-5z"
  }), React.createElement("path", {
    d: "M14.167 10.833H5.833a.834.834 0 010-1.666h8.334a.833.833 0 110 1.666zm0-4.166H5.833a.834.834 0 010-1.667h8.334a.833.833 0 110 1.667zm0 8.333H5.833a.833.833 0 110-1.667h8.334a.833.833 0 110 1.667z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_3654_2097"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0z"
  }))));
}

function hb(e, t) {
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
      if ("string" == typeof e) return yb(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yb(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function yb(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var bb,
  _b = {
    key: "mint_list_applied",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mailmint",
    title: (null === (fb = window) || void 0 === fb || null === (fb = fb.MRM_Vars) || void 0 === fb || null === (fb = fb.mint_trans) || void 0 === fb ? void 0 : fb.AddedToList) || "Added to List",
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Starts the automation when a a list applied to a contact.", "mrm"),
    subtitle: function (e) {
      var t, n;
      if (0 === (null === (t = e.settings) || void 0 === t || null === (t = t.list_applied) || void 0 === t || null === (t = t.group) || void 0 === t ? void 0 : t.length)) return (null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet) || "Not Set Up Yet";
    },
    icon: function () {
      return React.createElement("svg", {
        width: "20",
        height: "20",
        fill: "none",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("g", {
        fill: "#2D3149",
        clipPath: "url(#clip0_3654_2097)"
      }, React.createElement("path", {
        d: "M15 1.667A3.337 3.337 0 0118.333 5v10A3.337 3.337 0 0115 18.333H5A3.337 3.337 0 011.667 15V5A3.337 3.337 0 015 1.667h10zM15 0H5a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V5a5 5 0 00-5-5z"
      }), React.createElement("path", {
        d: "M14.167 10.833H5.833a.834.834 0 010-1.666h8.334a.833.833 0 110 1.666zm0-4.166H5.833a.834.834 0 010-1.667h8.334a.833.833 0 110 1.667zm0 8.333H5.833a.833.833 0 110-1.667h8.334a.833.833 0 110 1.667z"
      })), React.createElement("defs", null, React.createElement("clipPath", {
        id: "clip0_3654_2097"
      }, React.createElement("path", {
        fill: "#fff",
        d: "M0 0h20v20H0z"
      }))));
    },
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i = hb((0, g.useState)(), 2),
        l = i[0],
        c = i[1],
        u = hb((0, g.useState)([]), 2),
        s = u[0],
        d = u[1],
        m = hb((0, g.useState)([]), 2),
        p = m[0],
        f = m[1],
        v = hb((0, g.useState)(!1), 2),
        b = v[0],
        _ = v[1],
        w = (0, g.useRef)(null),
        E = hb((0, g.useState)(!1), 2),
        S = (E[0], E[1], hb((0, g.useState)("none"), 2)),
        R = S[0],
        x = S[1];
      (0, wy.useOutsideAlerter)(w, _), (0, g.useEffect)(function () {
        var e;
        Cy().then(function (e) {
          e.data.map(function () {
            d(e.data);
          });
        }), f(null == P || null === (e = P.settings) || void 0 === e || null === (e = e.list_applied) || void 0 === e ? void 0 : e.group);
      }, [l]), (0, g.useEffect)(function () {
        p.length >= 0 && (0, y.dispatch)(Lf).updateStepArgs(O, k, j, "list_applied", "group", p);
      }, [p]);
      var C = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        P = C.selectedStep,
        O = C.selectedStepIndex,
        k = C.selectedStepCondition,
        j = C.selectedLogicalStepIndex;
      return C.errors, (0, g.useEffect)(function () {
        if (document.querySelector(".successful-notification")) {
          var e = document.querySelector(".edit-site-sidebar__panel-tabs");
          "block" === R ? (e.style.position = "relative", e.style.zIndex = "0") : (e.style.position = "sticky", e.style.zIndex = "1");
        }
      }, [R]), h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings mint-list-apply"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(gb, null), (null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.AddedToList) || "Added to List"), h().createElement("p", {
        className: "sort-description"
      }, (null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.AddedToListDescription) || "Define list(s). Whenever a contact is added to the list(s) you defined, this automation will be triggered.")), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, "selected" == (null === (n = P.settings) || void 0 === n || null === (n = n.list_applied) || void 0 === n ? void 0 : n.type) && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-list"
      }, (null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.ChooseListS) || "Choose List(s)"), h().createElement("div", {
        className: "form-group tag-lists-dropdown",
        ref: w
      }, h().createElement("button", {
        type: "button",
        className: b ? "drop-down-button show" : "drop-down-button",
        onClick: function () {
          _(!b), (0, y.dispatch)(Lf).updateStepArgs(O, k, j, "list_applied", "group", p);
        }
      }, 0 != (null == p ? void 0 : p.length) ? null == p ? void 0 : p.map(function (e) {
        return h().createElement("span", {
          className: "single-list mintmrm-tag-list",
          key: e.id
        }, e.title, h().createElement("span", {
          className: "close-list",
          title: "Delete",
          onClick: function (t) {
            return n = e.id, void (0 <= p.findIndex(function (e) {
              return e.id == n;
            }) && (f(p.filter(function (e) {
              return e.id != n;
            })), (0, y.dispatch)(Lf).updateStepArgs(O, k, j, "list_applied", "group", p)));
            var n;
          }
        }, h().createElement(Xh.A, null)));
      }) : (null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.SelectLists) || "Select List(s)"), h().createElement(fy, {
        isActive: b,
        setIsActive: _,
        selected: p,
        setSelected: f,
        endpoint: "lists",
        items: s,
        allowMultiple: !0,
        allowNewCreate: !0,
        name: "list",
        title: (null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.CHOOSELIST) || "Choose List",
        refresh: l,
        setRefresh: c,
        prefix: "create",
        comesFrom: "automation",
        setsuccessNotification: x,
        successNotification: R
      }))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function wb() {
  return React.createElement("svg", {
    className: "hover-stroke-fill",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M15.5807 21.0003C12.5941 21.0003 10.1641 18.5703 10.1641 15.5837C10.1641 12.597 12.5941 10.167 15.5807 10.167C18.5674 10.167 20.9974 12.597 20.9974 15.5837C20.9974 18.5703 18.5674 21.0003 15.5807 21.0003ZM15.5807 11.417C13.2832 11.417 11.4141 13.2862 11.4141 15.5837C11.4141 17.8812 13.2832 19.7503 15.5807 19.7503C17.8782 19.7503 19.7474 17.8812 19.7474 15.5837C19.7474 13.2862 17.8782 11.417 15.5807 11.417Z",
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: "0.4"
  }), React.createElement("path", {
    d: "M17.8724 16.208H13.2891C12.9441 16.208 12.6641 15.928 12.6641 15.583C12.6641 15.238 12.9441 14.958 13.2891 14.958H17.8724C18.2174 14.958 18.4974 15.238 18.4974 15.583C18.4974 15.928 18.2174 16.208 17.8724 16.208Z",
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: "0.4"
  }), React.createElement("path", {
    d: "M8.65833 18.5H3.29167C2.0275 18.5 1 17.4725 1 16.2083V3.29167C1 2.0275 2.0275 1 3.29167 1H12.875C14.1392 1 15.1667 2.0275 15.1667 3.29167V8.36667C15.1667 8.71167 14.8867 8.99167 14.5417 8.99167C14.1967 8.99167 13.9167 8.71167 13.9167 8.36667V3.29167C13.9167 2.7175 13.4492 2.25 12.875 2.25H3.29167C2.7175 2.25 2.25 2.7175 2.25 3.29167V16.2083C2.25 16.7825 2.7175 17.25 3.29167 17.25H8.65833C9.00333 17.25 9.28333 17.53 9.28333 17.875C9.28333 18.22 9.00333 18.5 8.65833 18.5V18.5Z",
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: "0.4"
  }), React.createElement("path", {
    d: "M12.0417 8.91699H4.125C3.78 8.91699 3.5 8.63699 3.5 8.29199C3.5 7.94699 3.78 7.66699 4.125 7.66699H12.0417C12.3867 7.66699 12.6667 7.94699 12.6667 8.29199C12.6667 8.63699 12.3867 8.91699 12.0417 8.91699Z",
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: "0.4"
  }), React.createElement("path", {
    d: "M8.70833 12.25H4.125C3.78 12.25 3.5 11.97 3.5 11.625C3.5 11.28 3.78 11 4.125 11H8.70833C9.05333 11 9.33333 11.28 9.33333 11.625C9.33333 11.97 9.05333 12.25 8.70833 12.25Z",
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: "0.4"
  }), React.createElement("path", {
    d: "M7.875 5.58301H4.125C3.78 5.58301 3.5 5.30301 3.5 4.95801C3.5 4.61301 3.78 4.33301 4.125 4.33301H7.875C8.22 4.33301 8.5 4.61301 8.5 4.95801C8.5 5.30301 8.22 5.58301 7.875 5.58301Z",
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: "0.4"
  }));
}

function Eb(e, t) {
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
      if ("string" == typeof e) return Sb(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Sb(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Sb(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Rb = {
  key: "mint_list_removed",
  group: "triggers",
  type: "trigger",
  package: "pro",
  category: "mailmint",
  title: null === (bb = window) || void 0 === bb || null === (bb = bb.MRM_Vars) || void 0 === bb || null === (bb = bb.mint_trans) || void 0 === bb ? void 0 : bb.RemovedFromList,
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("This automation will run when any of the selected lists have been removed from a contact.", "mrm"),
  subtitle: function (e) {
    var t, n;
    if (0 === (null === (t = e.settings) || void 0 === t || null === (t = t.list_removed) || void 0 === t || null === (t = t.group) || void 0 === t ? void 0 : t.length)) return null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet;
  },
  icon: wb,
  edit: function () {
    var e,
      t,
      n,
      r,
      a,
      o,
      i = Eb((0, g.useState)(), 2),
      l = i[0],
      c = i[1],
      u = Eb((0, g.useState)([]), 2),
      s = u[0],
      d = u[1],
      m = Eb((0, g.useState)([]), 2),
      p = m[0],
      f = m[1],
      v = Eb((0, g.useState)(!1), 2),
      b = v[0],
      _ = v[1],
      w = (0, g.useRef)(null),
      E = Eb((0, g.useState)("none"), 2),
      S = E[0],
      R = E[1];
    (0, wy.useOutsideAlerter)(w, _), (0, g.useEffect)(function () {
      var e;
      Cy().then(function (e) {
        e.data.map(function () {
          d(e.data);
        });
      }), f(null == C || null === (e = C.settings) || void 0 === e || null === (e = e.list_removed) || void 0 === e ? void 0 : e.group);
    }, [l]), (0, g.useEffect)(function () {
      p.length >= 0 && (0, y.dispatch)(Lf).updateStepArgs(P, O, k, "list_removed", "group", p);
    }, [p]);
    var x = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
        };
      }, []),
      C = x.selectedStep,
      P = x.selectedStepIndex,
      O = x.selectedStepCondition,
      k = x.selectedLogicalStepIndex;
    return x.errors, (0, g.useEffect)(function () {
      if (document.querySelector(".successful-notification")) {
        var e = document.querySelector(".edit-site-sidebar__panel-tabs");
        "block" === S ? (e.style.position = "relative", e.style.zIndex = "0") : (e.style.position = "sticky", e.style.zIndex = "1");
      }
    }, [S]), h().createElement(q.PanelBody, {
      opened: !0
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings mint-list-apply"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(wb, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.RemovedFromList), h().createElement("p", {
      className: "sort-description"
    }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.RemovedFromListDescription)), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, "selected" == (null === (n = C.settings) || void 0 === n || null === (n = n.list_removed) || void 0 === n ? void 0 : n.type) && h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: "add-list"
    }, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.ChooseListS), h().createElement("div", {
      className: "form-group tag-lists-dropdown",
      ref: w
    }, h().createElement("button", {
      type: "button",
      className: b ? "drop-down-button show" : "drop-down-button",
      onClick: function () {
        _(!b), (0, y.dispatch)(Lf).updateStepArgs(P, O, k, "list_removed", "group", p);
      }
    }, 0 != (null == p ? void 0 : p.length) ? null == p ? void 0 : p.map(function (e) {
      return h().createElement("span", {
        className: "single-list mintmrm-tag-list",
        key: e.id
      }, e.title, h().createElement("span", {
        className: "close-list",
        title: "Delete",
        onClick: function (t) {
          return n = e.id, void (0 <= p.findIndex(function (e) {
            return e.id == n;
          }) && (f(p.filter(function (e) {
            return e.id != n;
          })), (0, y.dispatch)(Lf).updateStepArgs(P, O, k, "list_removed", "group", p)));
          var n;
        }
      }, h().createElement(Xh.A, null)));
    }) : null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.SelectLists), h().createElement(fy, {
      isActive: b,
      setIsActive: _,
      selected: p,
      setSelected: f,
      endpoint: "lists",
      items: s,
      allowMultiple: !0,
      allowNewCreate: !0,
      name: "list",
      title: null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.CHOOSELIST,
      refresh: l,
      setRefresh: c,
      prefix: "create",
      comesFrom: "automation",
      setsuccessNotification: R,
      successNotification: S
    }))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function xb() {
  return React.createElement("svg", {
    width: "21",
    height: "21",
    fill: "none",
    viewBox: "0 0 21 21",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_3654_2080)"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M9.103 20.334h-.002a2.292 2.292 0 01-1.63-.677l-6.134-6.143a2.31 2.31 0 010-3.26L9.605 1.97A4.48 4.48 0 0112.797.646h5.246a2.31 2.31 0 012.307 2.307v5.23a4.48 4.48 0 01-1.323 3.19l-8.294 8.286a2.292 2.292 0 01-1.63.675zm3.694-18.15c-.795 0-1.542.31-2.103.873L2.425 11.34a.77.77 0 000 1.086L8.56 18.57a.764.764 0 001.087 0l8.294-8.284a2.952 2.952 0 00.872-2.103v-5.23a.77.77 0 00-.769-.769h-5.246zm1.977 6.268a2.31 2.31 0 01-2.307-2.307 2.31 2.31 0 012.307-2.307 2.31 2.31 0 012.308 2.307 2.31 2.31 0 01-2.308 2.307zm0-3.076a.77.77 0 10.002 1.54.77.77 0 00-.002-1.54z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_3654_2080"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h21v21H0z"
  }))));
}
