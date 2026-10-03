// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function Cb(e, t) {
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
      if ("string" == typeof e) return Pb(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pb(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Pb(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Ob,
  kb = {
    key: "mint_tag_applied",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mailmint",
    title: (0, b.__)("Tag Assigned", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Starts the automation when a a list applied to a contact.", "mrm"),
    subtitle: function (e) {
      var t, n;
      if (0 === (null === (t = e.settings) || void 0 === t || null === (t = t.tag_applied) || void 0 === t || null === (t = t.group) || void 0 === t ? void 0 : t.length)) return null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet;
    },
    icon: function () {
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
    },
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o = Cb((0, g.useState)(), 2),
        i = o[0],
        l = o[1],
        c = Cb((0, g.useState)([]), 2),
        u = c[0],
        s = c[1],
        d = Cb((0, g.useState)(!1), 2),
        m = d[0],
        p = d[1],
        f = Cb((0, g.useState)([]), 2),
        v = f[0],
        _ = f[1],
        w = Cb((0, g.useState)([]), 2),
        E = (w[0], w[1], Cb((0, g.useState)(!1), 2)),
        S = (E[0], E[1], (0, g.useRef)(null)),
        R = Cb((0, g.useState)(!1), 2),
        x = (R[0], R[1], Cb((0, g.useState)("none"), 2)),
        C = x[0],
        P = x[1];
      (0, wy.useOutsideAlerter)(S, p), (0, g.useEffect)(function () {
        var e;
        Ny().then(function (e) {
          s(e.data);
        }), _(null == k || null === (e = k.settings) || void 0 === e || null === (e = e.tag_applied) || void 0 === e ? void 0 : e.group);
      }, [i]), (0, g.useEffect)(function () {
        v.length >= 0 && (0, y.dispatch)(Lf).updateStepArgs(j, A, M, "tag_applied", "group", v);
      }, [v]);
      var O = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        k = O.selectedStep,
        j = O.selectedStepIndex,
        A = O.selectedStepCondition,
        M = O.selectedLogicalStepIndex;
      return O.errors, (0, g.useEffect)(function () {
        if (document.querySelector(".successful-notification")) {
          var e = document.querySelector(".edit-site-sidebar__panel-tabs");
          "block" === C ? (e.style.position = "relative", e.style.zIndex = "0") : (e.style.position = "sticky", e.style.zIndex = "1");
        }
      }, [C]), h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings mint-tag-apply"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(xb, null), (0, b.__)("Tag Applied", "mrm")), h().createElement("p", {
        className: "sort-description"
      }, null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.TagAppliedDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, "selected" == (null === (t = k.settings) || void 0 === t || null === (t = t.tag_applied) || void 0 === t ? void 0 : t.type) && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-tag"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.ChooseTagS), h().createElement("div", {
        className: "form-group tag-lists-dropdown",
        ref: S
      }, h().createElement("button", {
        type: "button",
        className: m ? "drop-down-button show" : "drop-down-button",
        onClick: function () {
          p(!m), (0, y.dispatch)(Lf).updateStepArgs(j, A, M, "tag_applied", "tags", v);
        }
      }, 0 != (null == v ? void 0 : v.length) ? null == v ? void 0 : v.map(function (e) {
        return h().createElement("span", {
          className: "single-list mintmrm-tag-list",
          key: e.id
        }, e.title, h().createElement("span", {
          className: "close-list",
          title: "Delete",
          onClick: function (t) {
            return n = e.id, void (0 <= v.findIndex(function (e) {
              return e.id == n;
            }) && (_(v.filter(function (e) {
              return e.id != n;
            })), (0, y.dispatch)(Lf).updateStepArgs(j, A, M, "tag_applied", "group", v)));
            var n;
          }
        }, h().createElement(Xh.A, null)));
      }) : null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectTags), h().createElement(fy, {
        isActive: m,
        setIsActive: p,
        selected: v,
        setSelected: _,
        endpoint: "tags",
        items: u,
        allowMultiple: !0,
        allowNewCreate: !0,
        name: "tag",
        title: null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.CHOOSETAG,
        refresh: i,
        setRefresh: l,
        prefix: "create",
        comesFrom: "automation",
        setsuccessNotification: P,
        successNotification: C
      }))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function jb() {
  return React.createElement("svg", {
    className: "hover-stroke",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M15.5827 20.9998C12.596 20.9998 10.166 18.5698 10.166 15.5832C10.166 12.5965 12.596 10.1665 15.5827 10.1665C18.5694 10.1665 20.9994 12.5965 20.9994 15.5832C20.9994 18.5698 18.5694 20.9998 15.5827 20.9998ZM15.5827 10.9998C13.0552 10.9998 10.9993 13.0557 10.9993 15.5832C10.9993 18.1107 13.0552 20.1665 15.5827 20.1665C18.1102 20.1665 20.166 18.1107 20.166 15.5832C20.166 13.0557 18.1102 10.9998 15.5827 10.9998Z",
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: "0.8"
  }), React.createElement("path", {
    d: "M18.0807 16.0003H13.0807C12.8507 16.0003 12.6641 15.8137 12.6641 15.5837C12.6641 15.3537 12.8507 15.167 13.0807 15.167H18.0807C18.3107 15.167 18.4974 15.3537 18.4974 15.5837C18.4974 15.8137 18.3107 16.0003 18.0807 16.0003Z",
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: "0.8"
  }), React.createElement("path", {
    d: "M8.91667 21C8.355 21 7.83167 20.7808 7.44333 20.3825L1.61333 14.5525C1.21917 14.1683 1 13.645 1 13.0833C1 12.55 1.21 12.0283 1.57583 11.6517L10.9667 1.91083C11.5225 1.32417 12.2758 1 13.0833 1H18.9167C20.065 1 21 1.935 21 3.08333V8.91667C21 9.2775 20.9342 9.63 20.7992 9.995C20.7192 10.2108 20.4792 10.3225 20.2633 10.2408C20.0475 10.1608 19.9375 9.92083 20.0175 9.705C20.1175 9.435 20.1667 9.1775 20.1667 8.91667V3.08333C20.1667 2.39417 19.6058 1.83333 18.9167 1.83333H13.0833C12.5067 1.83333 11.9683 2.065 11.5692 2.48667L2.175 12.2308C1.9575 12.455 1.83333 12.765 1.83333 13.0833C1.83333 13.4183 1.96333 13.73 2.19917 13.96L8.03583 19.7967C8.43 20.2008 9.09083 20.28 9.56 19.9808C9.755 19.8575 10.0117 19.915 10.135 20.11C10.2583 20.3042 10.2008 20.5617 10.0058 20.685C9.68167 20.8917 9.305 21 8.91667 21Z",
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: "0.8"
  }), React.createElement("circle", {
    cx: "16",
    cy: "6",
    r: "1.4",
    stroke: "#2D3149",
    strokeWidth: "1.2"
  }));
}

function Ab(e, t) {
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
      if ("string" == typeof e) return Mb(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Mb(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Mb(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Tb = {
  key: "mint_tag_removed",
  group: "triggers",
  type: "trigger",
  package: "pro",
  category: "mailmint",
  title: null === (Ob = window) || void 0 === Ob || null === (Ob = Ob.MRM_Vars) || void 0 === Ob || null === (Ob = Ob.mint_trans) || void 0 === Ob ? void 0 : Ob.TagRemoved,
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("This automation will run when any of the selected tags have been removed from a contact.", "mrm"),
  subtitle: function (e) {
    var t, n;
    if (0 === (null === (t = e.settings) || void 0 === t || null === (t = t.tag_removed) || void 0 === t || null === (t = t.group) || void 0 === t ? void 0 : t.length)) return null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet;
  },
  icon: jb,
  edit: function () {
    var e,
      t,
      n,
      r,
      a,
      o,
      i = Ab((0, g.useState)(), 2),
      l = i[0],
      c = i[1],
      u = Ab((0, g.useState)([]), 2),
      s = u[0],
      d = u[1],
      m = Ab((0, g.useState)(!1), 2),
      p = m[0],
      f = m[1],
      v = Ab((0, g.useState)([]), 2),
      b = v[0],
      _ = v[1],
      w = (0, g.useRef)(null),
      E = Ab((0, g.useState)("none"), 2),
      S = E[0],
      R = E[1];
    (0, wy.useOutsideAlerter)(w, f), (0, g.useEffect)(function () {
      var e;
      Ny().then(function (e) {
        d(e.data);
      }), _(null == C || null === (e = C.settings) || void 0 === e || null === (e = e.tag_removed) || void 0 === e ? void 0 : e.group);
    }, [l]), (0, g.useEffect)(function () {
      b.length >= 0 && (0, y.dispatch)(Lf).updateStepArgs(P, O, k, "tag_removed", "group", b);
    }, [b]);
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
      className: "mintmrm-automation_step-settings mint-tag-apply"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(jb, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.TagRemoved), h().createElement("p", {
      className: "sort-description"
    }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.TagRemovedDescription)), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, "selected" == (null === (n = C.settings) || void 0 === n || null === (n = n.tag_removed) || void 0 === n ? void 0 : n.type) && h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: "add-tag"
    }, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.ChooseTagS), h().createElement("div", {
      className: "form-group tag-lists-dropdown",
      ref: w
    }, h().createElement("button", {
      type: "button",
      className: p ? "drop-down-button show" : "drop-down-button",
      onClick: function () {
        f(!p), (0, y.dispatch)(Lf).updateStepArgs(P, O, k, "tag_removed", "tags", b);
      }
    }, 0 != (null == b ? void 0 : b.length) ? null == b ? void 0 : b.map(function (e) {
      return h().createElement("span", {
        className: "single-list mintmrm-tag-list",
        key: e.id
      }, e.title, h().createElement("span", {
        className: "close-list",
        title: "Delete",
        onClick: function (t) {
          return n = e.id, void (0 <= b.findIndex(function (e) {
            return e.id == n;
          }) && (_(b.filter(function (e) {
            return e.id != n;
          })), (0, y.dispatch)(Lf).updateStepArgs(P, O, k, "tag_removed", "group", b)));
          var n;
        }
      }, h().createElement(Xh.A, null)));
    }) : null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.SelectTags), h().createElement(fy, {
      isActive: p,
      setIsActive: f,
      selected: b,
      setSelected: _,
      endpoint: "tags",
      items: s,
      allowMultiple: !0,
      allowNewCreate: !0,
      name: "tag",
      title: null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.CHOOSETAG,
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

function Ib() {
  return React.createElement("svg", {
    width: "22",
    height: "20",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#37474f",
    d: "M35 37c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
  }), React.createElement("path", {
    fill: "#37474f",
    d: "M35 43c-3 0-5.9-1.4-7.8-3.7l3.1-2.5c1.1 1.4 2.9 2.3 4.7 2.3 3.3 0 6-2.7 6-6s-2.7-6-6-6c-1 0-2 .3-2.9.7l-1.7 1L23.3 16l3.5-1.9 5.3 9.4c1-.3 2-.5 3-.5 5.5 0 10 4.5 10 10S40.5 43 35 43z"
  }), React.createElement("path", {
    fill: "#37474f",
    d: "M14 43C8.5 43 4 38.5 4 33c0-4.6 3.1-8.5 7.5-9.7l1 3.9C9.9 27.9 8 30.3 8 33c0 3.3 2.7 6 6 6s6-2.7 6-6v-2h15v4H23.8c-.9 4.6-5 8-9.8 8z"
  }), React.createElement("path", {
    fill: "#e91e63",
    d: "M14 37c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
  }), React.createElement("path", {
    fill: "#37474f",
    d: "M25 19c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
  }), React.createElement("path", {
    fill: "#e91e63",
    d: "M15.7 34l-3.4-2 5.9-9.7c-2-1.9-3.2-4.5-3.2-7.3 0-5.5 4.5-10 10-10s10 4.5 10 10c0 .9-.1 1.7-.3 2.5l-3.9-1c.1-.5.2-1 .2-1.5 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 2.1 1.1 4 2.9 5.1l1.7 1L15.7 34z"
  }));
}

var Fb = n(35874);

function Nb() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Db(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Db(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Db(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Db(d, "constructor", u), Db(u, "constructor", c), c.displayName = "GeneratorFunction", Db(u, a, "GeneratorFunction"), Db(d), Db(d, a, "Generator"), Db(d, r, function () {
    return this;
  }), Db(d, "toString", function () {
    return "[object Generator]";
  }), (Nb = function () {
    return {
      w: o,
      m
    };
  })();
}

function Db(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Db = function (e, t, n, r) {
    function o(t, n) {
      Db(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Db(e, t, n, r);
}

function Wb(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function zb(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Bb = {
  key: "mint_webhook_received",
  group: "triggers",
  type: "trigger",
  package: "pro",
  category: "mailmint",
  title: "Webhook Received",
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("Triggered when Mail Mint received a webhook.", "mail-mint"),
  subtitle: function (e) {
    var t, n, r;
    if ("" == (null === (t = e.settings) || void 0 === t || null === (t = t.bricks_form_settings) || void 0 === t ? void 0 : t.form_id) || 0 == (null === (n = e.settings) || void 0 === n || null === (n = n.bricks_form_settings) || void 0 === n ? void 0 : n.form_id) || Object.keys(e.settings) < 1) return null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.NotSetUpYet;
  },
  icon: Ib,
  edit: function () {
    var e,
      t,
      n = function (e, t) {
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
            if ("string" == typeof e) return zb(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zb(e, t) : void 0;
          }
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((0, g.useState)([]), 2),
      r = n[0],
      a = n[1],
      o = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex()
        };
      }, []),
      i = o.selectedStep,
      l = o.selectedStepIndex,
      c = o.selectedStepCondition,
      u = o.selectedLogicalStepIndex;
    (0, p.useEffect)(function () {
      s().then(function (e) {
        a(e);
      });
    }, []);
    var s = function () {
      var e,
        t = (e = Nb().m(function e(t) {
          var n;
          return Nb().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return e.n = 1, (0, Fb.getWebHooks)(1, 100, null == t ? "" : t);
              case 1:
                if (200 !== (n = e.v).code) {
                  e.n = 2;
                  break;
                }
                return e.a(2, n.data.data.map(function (e) {
                  return {
                    value: e.id,
                    label: e.name
                  };
                }));
              case 2:
                return e.a(2, []);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Wb(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Wb(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function (e) {
        return t.apply(this, arguments);
      };
    }();
    return h().createElement(q.PanelBody, {
      opened: !0
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings mint-after-email"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(Ib, null), "Webhook Received"), h().createElement("p", {
      className: "sort-description"
    }, "This automation will trigger when a specified webhook event is received.")), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: ""
    }, "Select Webhook", h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, "Please select a webhook to trigger the automation. If no webhook is selected, the automation will not trigger."))), h().createElement(Jt.A, {
      cacheOptions: !0,
      value: null !== (e = null === (t = i.settings) || void 0 === t || null === (t = t.webhook_settings) || void 0 === t ? void 0 : t.webhook) && void 0 !== e ? e : "",
      defaultOptions: r,
      loadOptions: function (e, t) {
        s(e).then(function (e) {
          t(e);
        });
      },
      onChange: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(l, c, u, "webhook_settings", "webhook", e);
      }
    })))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function Lb() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M8.594 9.625h4.812a1.72 1.72 0 001.719-1.719v-.343c0-1.355-.66-2.6-1.76-3.362a2.8 2.8 0 00.041-.42V2.75A2.069 2.069 0 0011.344.687h-.688A2.069 2.069 0 008.594 2.75v1.031c0 .145.02.282.041.42a4.078 4.078 0 00-1.76 3.362v.343c0 .949.77 1.719 1.719 1.719zM9.969 2.75a.69.69 0 01.687-.688h.688a.69.69 0 01.687.688v1.031c0 .57-.46 1.031-1.031 1.031a1.03 1.03 0 01-1.031-1.03V2.75zM8.25 7.563a2.72 2.72 0 011.024-2.118c.44.454 1.052.742 1.726.742.674 0 1.293-.288 1.726-.742a2.71 2.71 0 011.024 2.117v.344a.34.34 0 01-.344.344H8.594a.34.34 0 01-.344-.344v-.343zm-4.812 7.562a.69.69 0 00.687-.688v-.687a.69.69 0 01.688-.688h5.5v1.376c0 .378.309.687.687.687a.69.69 0 00.688-.688v-1.374h5.5a.69.69 0 01.687.687v.688c0 .378.31.687.688.687a.69.69 0 00.687-.688v-.687a2.069 2.069 0 00-2.063-2.063h-5.5V11a.69.69 0 00-.687-.688.69.69 0 00-.688.688v.688h-5.5A2.069 2.069 0 002.75 13.75v.688c0 .378.31.687.688.687zm8.25.688h-1.376a2.069 2.069 0 00-2.062 2.062v1.375a2.07 2.07 0 002.063 2.063h1.374a2.069 2.069 0 002.063-2.063v-1.375a2.069 2.069 0 00-2.063-2.063zm.687 3.437a.69.69 0 01-.688.688h-1.374a.69.69 0 01-.688-.688v-1.375a.69.69 0 01.688-.688h1.374a.69.69 0 01.688.688v1.375zm-7.329-2.44a1.795 1.795 0 00-1.609-.997c-.687 0-1.306.378-1.608.996L.88 18.707a1.82 1.82 0 00-.193.804c0 .99.805 1.802 1.802 1.802h1.897c.99 0 1.801-.805 1.801-1.802 0-.275-.068-.557-.192-.804l-.949-1.898zm-.66 3.128H2.49a.428.428 0 01-.426-.427c0-.069.013-.13.048-.192l.948-1.898a.428.428 0 01.378-.233.42.42 0 01.379.233l.948 1.898a.442.442 0 01.048.192.428.428 0 01-.426.427zm14.177-4.125a2.75 2.75 0 100 5.5 2.75 2.75 0 100-5.5zm0 4.124a1.379 1.379 0 01-1.375-1.375c0-.756.618-1.375 1.375-1.375.756 0 1.375.62 1.375 1.375a1.38 1.38 0 01-1.375 1.375z"
  }));
}
