// Reconstructed application fragment. Assembled in manifest order within factory 1841.
const QF = (0, p.memo)(function (e) {
  var t,
    n,
    r,
    a,
    o,
    i,
    l,
    c,
    u,
    s,
    d,
    m,
    g,
    h,
    _,
    w,
    E,
    S,
    R,
    x,
    C,
    P,
    O,
    k,
    j = e.extBeforeImportTemplate,
    A = e.extAfterImportTemplate,
    M = e.extHandleImportTemplate,
    T = e.extBeforeNavigateReport,
    I = e.extAfterNavigateReport,
    F = e.extHandleNavigateReport,
    N = e.extBeforeNavigation,
    D = e.extAfterNavigation,
    W = e.extHandleNavigation,
    z = e.extBeforeSaveStatus,
    B = e.extAfterSaveStatus,
    L = e.extSaveStatus,
    V = e.extBeforePause,
    H = e.extAfterPause,
    G = e.extHandlePause,
    U = e.extBeforeShowStat,
    q = e.extAfterShowStat,
    Y = e.extHandleShowStat,
    Q = e.extBeforeEditAutomationName,
    Z = e.extAfterEditAutomationName,
    $ = e.extHandleEditAutomationName,
    K = e.extBeforeChangeAutomationName,
    J = e.extAfterChangeAutomationName,
    X = e.extBeforeSaveAutomation,
    ee = e.extAfterSaveAutomation,
    te = e.extSaveAutomation,
    ne = (e.extId, e.showPreview),
    re = qF((0, p.useState)(!0), 2),
    ae = re[0],
    oe = re[1],
    ie = qF((0, p.useState)(!1), 2),
    le = ie[0],
    ce = ie[1],
    ue = qF((0, p.useState)(!1), 2),
    se = ue[0],
    de = ue[1],
    me = qF((0, p.useState)("success"), 2),
    pe = me[0],
    fe = me[1],
    ve = qF((0, p.useState)(""), 2),
    ge = ve[0],
    he = ve[1],
    ye = qF((0, p.useState)(!1), 2),
    be = ye[0],
    _e = ye[1],
    we = qF((0, p.useState)(!1), 2),
    Ee = we[0],
    Se = we[1],
    Re = qF((0, p.useState)(!1), 2),
    xe = Re[0],
    Ce = Re[1],
    Pe = qF((0, p.useState)(!1), 2),
    Oe = Pe[0],
    ke = Pe[1],
    je = qF((0, p.useState)(""), 2),
    Ae = je[0],
    Me = je[1],
    Te = qF((0, p.useState)(), 2),
    Ie = Te[0],
    Fe = Te[1],
    Ne = qF((0, p.useState)(!1), 2),
    De = Ne[0],
    We = Ne[1],
    ze = (0, y.useSelect)(function (e) {
      return {
        automationData: e(Lf).getAutomationData(),
        dataLoader: e(Lf).getDataLoader(),
        saveLoader: e(Lf).getSaveLoader(),
        is_save: e(Lf).getMaybeSave(),
        updateClicked: e(Lf).getUpdateClicked(),
        activateAutoSave: e(Lf).getActivateAutoSave(),
        automationName: e(Lf).getAutomationData().name,
        automationStatus: e(Lf).getAutomationData().status,
        atMostDate: e(Lf).getAtMostDate(),
        getAnalyticsStat: e(Lf).getAnalyticsStat()
      };
    }, []),
    Be = ze.automationData,
    Le = ze.dataLoader,
    Ve = ze.saveLoader,
    He = ze.is_save,
    Ge = ze.updateClicked,
    Ue = (ze.activateAutoSave, ze.automationName),
    qe = ze.automationStatus,
    Ye = (ze.atMostDate, ze.getAnalyticsStat),
    Qe = (0, y.useDispatch)(Lf),
    Ze = Qe.setAutomationName,
    $e = Qe.setAutomationStatus,
    Ke = Qe.setOnShowStat,
    Je = Qe.setMaybeSave,
    Xe = Qe.setUpdateClicked,
    et = Qe.closeSidebar,
    tt = Qe.setSaveLoader,
    nt = null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.is_mailmint_pro_license_active;
  (0, IF.default)(function (e) {
    He || (e.preventDefault(), e.returnValue = "");
  });
  var rt = (0, p.useRef)(null),
    at = (0, f.Zp)();
  (0, p.useEffect)(function () {
    rt.current && rt.current.focus();
  }, [ae]);
  var ot = function () {
    var e = UF(VF().m(function e(t) {
      var n, r, a;
      return VF().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            if (X && X(t), !te) {
              e.n = 1;
              break;
            }
            te(t, Be), e.n = 6;
            break;
          case 1:
            if ($e(t), Je(!0), Fe(Be.id), et(), "active" === t ? tt(!0) : We(!0), Be.status = t, !Be.id) {
              e.n = 3;
              break;
            }
            return e.n = 2, Ag(Be, Be.id);
          case 2:
            n = e.v, Fe(n.data.automation_id), fe("success"), de(!0), tt(!1), We(!1), Xe(!Ge), Ke(n.data.showAnalyticsStat), he("active" == t ? (null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.AutomationSavedMsg) || "Changes saved and will apply to new entrances." : n.message), e.n = 5;
            break;
          case 3:
            return e.n = 4, kg(Be);
          case 4:
            a = e.v, Fe(a.data.automation_id), fe("success"), de(!0), he(a.message), tt(!1), We(!1), Xe(!Ge), Ke(a.data.showAnalyticsStat);
          case 5:
            Qh(!1, de);
          case 6:
            ee && ee(t);
          case 7:
            return e.a(2);
        }
      }, e);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }();
  (0, p.useEffect)(function () {
    if (Ie && at("/id=".concat(Ie)), "#/preview" === window.location.hash) {
      _e(!0);
      var e = localStorage.getItem("mint-automation-preview");
      if (e) {
        var t = JSON.parse(e);
        Ce(t.isPro), Me(t.automationDescription);
      }
    } else if (ne) {
      _e(ne);
      var n = localStorage.getItem("mint-automation-preview");
      if (n) {
        var r = JSON.parse(n);
        Ce(null == r ? void 0 : r.isPro), Me(null == r ? void 0 : r.automationDescription);
      }
    } else _e(!1);
  }, [Ie]);
  var it = (0, p.useRef)(null);
  (0, wy.useOutsideAlerter)(it, ce);
  var lt = (0, p.useRef)(null);
  (0, wy.useAutomationTitleOutsideClick)(lt, oe);
  var ct = function () {
      var e = UF(VF().m(function e(t) {
        var n, r, a;
        return VF().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (z && z(t), !L) {
                e.n = 1;
                break;
              }
              L(t), e.n = 6;
              break;
            case 1:
              if ($e(t), Be.status = t, !Ie) {
                e.n = 3;
                break;
              }
              return e.n = 2, Ag(Be, Ie);
            case 2:
              e.v, fe("success"), de(!0), he(null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.AutomationStatusUpdateMsg), tt(!1), We(!1), e.n = 5;
              break;
            case 3:
              return e.n = 4, kg(Be);
            case 4:
              a = e.v, Fe(a.data.automation_id), fe("success"), de(!0), he((null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.AutomationStatusUpdateMsg) || "Automation status has been updated"), tt(!1), We(!1);
            case 5:
              Qh(!1, de);
            case 6:
              B && B(t);
            case 7:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    ut = location.href,
    st = function () {
      var e = UF(VF().m(function e() {
        return VF().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (j && j(null == Be ? void 0 : Be.id), !M) {
                e.n = 1;
                break;
              }
              M(Be), e.n = 3;
              break;
            case 1:
              if (nt || !xe) {
                e.n = 2;
                break;
              }
              return ke(!0), e.a(2);
            case 2:
              Se(!0), WF(Be.id).then(function (e) {
                var t;
                null != e && e.automation_id && (Be.id = null == e ? void 0 : e.automation_id, window.location.replace("".concat(null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.admin_url, "admin.php?page=mint-mail-automation-editor#/id=").concat(null == e ? void 0 : e.automation_id)), _e(!1), Se(!1));
              });
            case 3:
              A && A(null == Be ? void 0 : Be.id);
            case 4:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "automation-editor__header"
  }, Le ? React.createElement(tO, {
    type: "table-full"
  }) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "automation-editor__header-left"
  }, React.createElement("button", {
    onClick: function () {
      var e, t;
      N && N(), W ? W() : be ? window.location.replace("".concat(null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.admin_url, "admin.php?page=mrm-admin#/automations/recipe")) : window.location.replace("".concat(null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.admin_url, "admin.php?page=mrm-admin#/automations")), D && D();
    },
    type: "button",
    className: "backto-list"
  }, React.createElement(oO, null)), React.createElement("div", {
    ref: lt,
    className: "automaiton-name"
  }, React.createElement("div", {
    className: "tilte-area ".concat(be ? "mint-justify-content-start" : "")
  }, ae ? React.createElement("h4", {
    className: "title"
  }, Ue || (null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.Untitled) || "Untitled") : React.createElement("input", {
    ref: rt,
    type: "text",
    name: "automation-name",
    defaultValue: Ue || (0, b.__)("Untitled", "mrm"),
    onChange: function (e) {
      return function (e) {
        K && K(e), Ze(e.target.value), J && J(e);
      }(e);
    }
  }), !be && React.createElement("div", {
    className: "edit-btn-area"
  }, ae && React.createElement("button", {
    type: "button",
    className: "edit",
    title: "Edit",
    onClick: function () {
      Q && Q(), $ ? $() : oe(!1), Z && Z();
    }
  }, React.createElement(mP, null)))), ae && React.createElement("div", {
    className: "automation-status"
  }, be ? React.createElement(React.Fragment, null, React.createElement("span", {
    className: "automation-description"
  }, Ae)) : React.createElement(React.Fragment, null, React.createElement("span", null, qe))))), be ? React.createElement(React.Fragment, null, React.createElement("div", {
    className: "automation-editor__header-right"
  }, React.createElement("button", {
    className: "mintmrm-btn mintmrm-preview-btn",
    onClick: st,
    disabled: Ee
  }, Ee ? (null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.Importing) || "Importing" : (null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.ImportRecipe) || "Import Recipe", Ee && React.createElement("span", {
    className: "mintmrm-loader"
  }), xe && !(null !== (o = window) && void 0 !== o && null !== (o = o.MRM_Vars) && void 0 !== o && o.is_mailmint_pro_license_active) && React.createElement("span", {
    className: "pro-tag-with-icon"
  }, React.createElement(LF, null))))) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "automation-editor__header-right"
  }, 0 == (null == Be || null === (i = Be.steps) || void 0 === i ? void 0 : i.length) || (null == Be || null === (l = Be.steps) || void 0 === l ? void 0 : l.length) > 0 && "" !== (null == Be ? void 0 : Be.trigger_name) ? "" : React.createElement("p", {
    className: "data-status autmation-issues"
  }, (null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.AutomationStartingMsg) || "Please select a Starting Point to Start Workflow"), "draft" !== (null == Be ? void 0 : Be.status) && null != Be && Be.id && (null == Be || null === (u = Be.steps) || void 0 === u ? void 0 : u.length) > 0 && "" !== (null == Be ? void 0 : Be.trigger_name) ? React.createElement("div", {
    className: "mintmrm-btn automation-pause"
  }, React.createElement("span", {
    className: "mintmrm-switcher"
  }, React.createElement("input", {
    type: "checkbox",
    name: "pause",
    id: "automation-pause",
    onChange: function (e) {
      return function (e) {
        V && V(e), G ? G(e, Be) : e.target.checked ? ct("active") : ct("pause"), H && H(e);
      }(e);
    },
    checked: "active" === (null == Be ? void 0 : Be.status)
  }), React.createElement("label", {
    htmlFor: "automation-pause"
  }), "active" === (null == Be ? void 0 : Be.status) ? (null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s || null === (s = s.mint_trans) || void 0 === s ? void 0 : s.Active) || "Active" : (null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.Paused) || "Paused")) : "", React.createElement("div", {
    className: "mintmrm-btn view-analytics-stat"
  }, React.createElement("span", {
    className: "mintmrm-switcher"
  }, React.createElement("input", {
    type: "checkbox",
    name: "stat",
    id: "step-stat",
    checked: Ye,
    onChange: function (e) {
      return function (e) {
        U && U(e), Y ? Y(e) : Ke(e.target.checked), q && q(e);
      }(e);
    }
  }), React.createElement("label", {
    htmlFor: "step-stat"
  }), (null === (m = window) || void 0 === m || null === (m = m.MRM_Vars) || void 0 === m || null === (m = m.mint_trans) || void 0 === m ? void 0 : m.Stats) || "Stats")), "draft" != qe && void 0 !== Be.id && React.createElement(v.Link, {
    to: {
      pathname: "/automations/analytics/".concat(Be.id),
      state: {
        url: ut
      }
    },
    className: "mintmrm-btn view-analytics-btn",
    onClick: function () {
      T && T(), F ? F() : location.state = ut, I && I();
    }
  }, React.createElement(TF, null), (null === (g = window) || void 0 === g || null === (g = g.MRM_Vars) || void 0 === g || null === (g = g.mint_trans) || void 0 === g ? void 0 : g.Report) || "Report"), React.createElement("div", {
    className: "workflow-btn-wrapper ".concat((null == Be || null === (h = Be.steps) || void 0 === h ? void 0 : h.length) > 0 && "" !== (null == Be ? void 0 : Be.trigger_name) ? "has-dropdown" : "")
  }, (null == Be || null === (_ = Be.steps) || void 0 === _ ? void 0 : _.length) > 0 && "" !== (null == Be ? void 0 : Be.trigger_name) ? React.createElement("button", {
    type: "button",
    className: "mintmrm-btn start-workflow",
    onClick: function () {
      return ot("active");
    },
    disabled: !(!Ve && !De)
  }, !De && "active" !== qe && ((null === (w = window) || void 0 === w || null === (w = w.MRM_Vars) || void 0 === w || null === (w = w.mint_trans) || void 0 === w ? void 0 : w.StartWorkflow) || "Start Workflow"), !De && "active" === qe && "" != Ie && ((null === (E = window) || void 0 === E || null === (E = E.MRM_Vars) || void 0 === E || null === (E = E.mint_trans) || void 0 === E ? void 0 : E.UpdateWorkflow) || "Update Workflow"), De && "active" !== qe && ((null === (S = window) || void 0 === S || null === (S = S.MRM_Vars) || void 0 === S || null === (S = S.mint_trans) || void 0 === S ? void 0 : S.SavingAsDraft) || "Saving as draft"), Ve && React.createElement("span", {
    className: "mintmrm-loader"
  })) : React.createElement("button", {
    type: "button",
    className: "mintmrm-btn start-workflow",
    disabled: !0
  }, (null === (R = window) || void 0 === R || null === (R = R.MRM_Vars) || void 0 === R || null === (R = R.mint_trans) || void 0 === R ? void 0 : R.StartWorkflow) || "Start Workflow"), (null == Be || null === (x = Be.steps) || void 0 === x ? void 0 : x.length) > 0 && "" !== (null == Be ? void 0 : Be.trigger_name) && React.createElement("div", {
    className: "workflow-dropdown-btn",
    onClick: function () {
      return ce(!le);
    },
    ref: it
  }, React.createElement("span", {
    className: "icon"
  }, React.createElement("svg", {
    width: "10",
    height: "6",
    fill: "none",
    viewBox: "0 0 10 6",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 5L5 1 1 5"
  }))), React.createElement("ul", {
    className: "mintmrm-dropdown ".concat(le ? "show" : "")
  }, React.createElement("li", {
    onClick: function () {
      return ot("active");
    }
  }, React.createElement("span", null, !De && "active" !== qe && ((null === (C = window) || void 0 === C || null === (C = C.MRM_Vars) || void 0 === C || null === (C = C.mint_trans) || void 0 === C ? void 0 : C.StartWorkflow) || "Start Workflow"), !De && "active" === qe && "" != Ie && ((null === (P = window) || void 0 === P || null === (P = P.MRM_Vars) || void 0 === P || null === (P = P.mint_trans) || void 0 === P ? void 0 : P.UpdateWorkflow) || "Update Workflow"), De && "active" !== qe && ((null === (O = window) || void 0 === O || null === (O = O.MRM_Vars) || void 0 === O || null === (O = O.mint_trans) || void 0 === O ? void 0 : O.SavingAsDraft) || "Saving as draft"))), React.createElement("li", {
    onClick: function () {
      return ot("draft");
    }
  }, React.createElement("span", null, (null === (k = window) || void 0 === k || null === (k = k.MRM_Vars) || void 0 === k || null === (k = k.mint_trans) || void 0 === k ? void 0 : k.SaveAsDraft) || "Save as draft"))))), se && React.createElement(oy, {
    setShowNotification: de,
    message: ge,
    notificationType: pe,
    setNotificationType: fe
  }))))), Oe && React.createElement("div", {
    className: "mintmrm-container"
  }, React.createElement(RF.default, {
    setIsPro: ke,
    proLink: Ey.AutomationExportLink
  })));
});

function ZF() {
  var e = (0, y.useSelect)(function (e) {
      return {
        isSidebarOpened: e(Lf).isSidebarOpened,
        selectedStep: e(Lf).getSelectedStep
      };
    }),
    t = e.isSidebarOpened,
    n = e.selectedStep,
    r = (0, y.useDispatch)(Lf),
    a = r.openSidebar,
    o = r.closeSidebar,
    i = r.toggleFeature,
    l = (0, y.useDispatch)(fI.M_).registerShortcut;
  return (0, p.useEffect)(function () {
    l({
      name: "mintmail/automation-editor/toggle-fullscreen",
      category: "global",
      description: (0, b.__)("Toggle fullscreen mode.", "mrm"),
      keyCombination: {
        modifier: "secondary",
        character: "f"
      }
    }), l({
      name: "mintmail/automation-editor/toggle-sidebar",
      category: "global",
      description: (0, b.__)("Show or hide the settings sidebar.", "mrm"),
      keyCombination: {
        modifier: "primaryShift",
        character: ","
      }
    });
  }, [l]), (0, fI.wk)("mintmail/automation-editor/toggle-fullscreen", function () {
    i("fullscreenMode");
  }), (0, fI.wk)("mintmail/automation-editor/toggle-sidebar", function (e) {
    if (e.preventDefault(), t()) o();else {
      var r = n() ? Hf : Vf;
      a(r);
    }
  }), null;
}

function $F(e, t) {
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
      if ("string" == typeof e) return KF(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? KF(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function KF(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function JF() {
  var e,
    t = $F((0, g.useState)(!0), 2),
    n = (t[0], t[1], $F((0, g.useState)(!0), 2));
  return n[0], n[1], (0, y.useSelect)(function (e) {
    return {
      automationData: e(Lf).getAutomationData()
    };
  }, []).automationData, React.createElement(q.PanelBody, null, React.createElement("div", {
    className: "no-step-selected"
  }, (null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.NoStepSelected) || "No step selected"));
}

function XF() {
  var e,
    t,
    n = (0, y.useSelect)(function (e) {
      return {
        selectedStep: e(Lf).getSelectedStep(),
        selectedStepType: e(Lf).getSelectedStepType()
      };
    }, []),
    r = n.selectedStep,
    a = n.selectedStepType;
  if (!r) return React.createElement(q.PanelBody, null, React.createElement("div", {
    className: "no-step-selected"
  }, (null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.NoStepSelected) || "No step selected"));
  if (!a) return React.createElement(q.PanelBody, null, React.createElement("div", {
    className: "no-step-selected"
  }, (null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.UnknownStepType) || "Unknown step type"));
  var o = a.edit;
  return React.createElement("div", {
    className: "block-editor-block-inspector"
  }, React.createElement(o, {
    key: r.id
  }), null != a && a.help ? React.createElement(SF.default, {
    showVideo: a.help.showVideo,
    videoLink: a.help.videoLink,
    docLink: a.help.docLink
  }) : null);
}

var eN = ["isOpen", "className"];

function tN(e) {
  var t = e.isOpen;
  if (e.className, function (e, t) {
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
  }(e, eN), !t) return null;
  var n = (0, y.useDispatch)(Lf),
    r = (0, y.useSelect)(function (e) {
      var t;
      return {
        keyboardShortcut: e(fI.M_).getShortcutRepresentation("mintmail/automation-editor/toggle-sidebar"),
        sidebarKey: null !== (t = e(Gf.M_).getActiveComplementaryArea(Lf)) && void 0 !== t ? t : Vf,
        selectedStep: e(Lf).getSelectedStep()
      };
    }, []),
    a = (r.keyboardShortcut, r.sidebarKey),
    o = (r.showIconLabels, r.automationName, r.selectedStep),
    i = function () {
      n.closeSidebar();
    };
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "interface-navigable-region__stacker"
  }, React.createElement("div", {
    className: "interface-complementary-area edit-site-sidebar mintmrm-automation-sidebar\n                        ".concat("condition" === (null == o ? void 0 : o.key) || "pabblyConnectSendData" === (null == o ? void 0 : o.key) ? "conditional-step-sidebar" : "", " \n                        ").concat("mint_anniversary_reminder" === (null == o ? void 0 : o.key) ? "anniversary-step-sidebar" : "", " \n                        ").concat("bricks_form_submit" === (null == o ? void 0 : o.key) || "fluentform_submission_inserted" === (null == o ? void 0 : o.key) || "jetform_after_submit" === (null == o ? void 0 : o.key) || "jetform_before_submit" === (null == o ? void 0 : o.key) || "wpcf7_submit" === (null == o ? void 0 : o.key) || "updateWPUserMeta" === (null == o ? void 0 : o.key) || "updateContactFields" === (null == o ? void 0 : o.key) || "gform_after_submission" === (null == o ? void 0 : o.key) || "gform_send_email_failed" === (null == o ? void 0 : o.key) || "gform_after_email" === (null == o ? void 0 : o.key) || "addNoteAndActivity" === (null == o ? void 0 : o.key) || "wpforms_submission_inserted" === (null == o ? void 0 : o.key) ? "bricks-step-sidebar" : "", "\n                        ").concat("webHookOutgoing" === (null == o ? void 0 : o.key) ? "webhook-step-sidebar" : "")
  }, React.createElement("div", {
    className: "components-panel__header interface-complementary-area-header__small"
  }, React.createElement("button", {
    type: "button",
    className: "components-button has-icon",
    "aria-label": " ",
    onClick: i
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    focusable: "false"
  }, React.createElement("path", {
    d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
  })))), React.createElement("div", {
    className: "components-panel__header interface-complementary-area-header edit-site-sidebar__panel-tabs",
    tabIndex: "-1",
    style: {
      position: "sticky",
      zIndex: 1
    }
  }, React.createElement("strong", null, "Settings"), React.createElement("button", {
    type: "button",
    "aria-pressed": "true",
    "aria-expanded": "true",
    className: "components-button interface-complementary-area__pin-unpin-item is-pressed has-icon",
    "aria-label": "Unpin from toolbar"
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    focusable: "false"
  }, React.createElement("path", {
    d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
  }))), React.createElement("button", {
    type: "button",
    className: "components-button has-icon",
    "aria-label": " ",
    onClick: i
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    focusable: "false"
  }, React.createElement("path", {
    d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
  })))), React.createElement("div", {
    className: "components-panel"
  }, React.createElement("div", {
    className: "components-panel__body is-opened"
  }, a === Vf && React.createElement(JF, null), a === Hf && React.createElement(XF, null))))));
}

p.Platform.select({
  web: !1,
  native: !1
});

const nN = function (e) {
  var t = e.automationId,
    n = void 0 === t ? null : t,
    r = e.headerProps,
    a = (e.children, e.showPreview),
    o = (0, y.useSelect)(function (e) {
      return {
        isSidebarOpened: e(Lf).isSidebarOpened(),
        dataLoader: e(Lf).getDataLoader()
      };
    }, []),
    i = o.isSidebarOpened,
    l = (o.dataLoader, (0, y.useDispatch)(Lf)),
    c = Vr()("interface-interface-skeleton mintmrm-automation-editor mintmrm-page", {
      "is-sidebar-opened": i,
      "show-icon-labels": !0
    });
  return (0, g.useEffect)(function () {
    return function () {
      l.closeSidebar();
    };
  }, []), React.createElement("div", {
    className: "mrm-app-wrapper",
    style: {
      display: "block"
    }
  }, React.createElement("div", {
    id: "mrm-app-editor",
    className: "mintmrm"
  }, React.createElement("div", {
    className: "mintmrm"
  }, React.createElement(fI.Ee, null, React.createElement(q.SlotFillProvider, null, React.createElement(Gf.fA, {
    isActive: !1
  }), React.createElement(ZF, null), React.createElement(Gf.Du, {
    className: c,
    header: React.createElement(QF, {
      extBeforeImportTemplate: null == r ? void 0 : r.extBeforeImportTemplate,
      extAfterImportTemplate: null == r ? void 0 : r.extAfterImportTemplate,
      extHandleImportTemplate: null == r ? void 0 : r.extHandleImportTemplate,
      extBeforeNavigateReport: null == r ? void 0 : r.extBeforeNavigateReport,
      extAfterNavigateReport: null == r ? void 0 : r.extAfterNavigateReport,
      extHandleNavigateReport: null == r ? void 0 : r.extHandleNavigateReport,
      extBeforeNavigation: null == r ? void 0 : r.extBeforeNavigation,
      extAfterNavigation: null == r ? void 0 : r.extAfterNavigation,
      extHandleNavigation: null == r ? void 0 : r.extHandleNavigation,
      extBeforeSaveStatus: null == r ? void 0 : r.extBeforeSaveStatus,
      extAfterSaveStatus: null == r ? void 0 : r.extAfterSaveStatus,
      extSaveStatus: null == r ? void 0 : r.extSaveStatus,
      extBeforePause: null == r ? void 0 : r.extBeforePause,
      extAfterPause: null == r ? void 0 : r.extAfterPause,
      extHandlePause: null == r ? void 0 : r.extHandlePause,
      extBeforeShowStat: null == r ? void 0 : r.extBeforeShowStat,
      extAfterShowStat: null == r ? void 0 : r.extAfterShowStat,
      extHandleShowStat: null == r ? void 0 : r.extHandleShowStat,
      extBeforeEditAutomationName: null == r ? void 0 : r.extBeforeEditAutomationName,
      extAfterEditAutomationName: null == r ? void 0 : r.extAfterEditAutomationName,
      extHandleEditAutomationName: null == r ? void 0 : r.extHandleEditAutomationName,
      extBeforeChangeAutomationName: null == r ? void 0 : r.extBeforeChangeAutomationName,
      extAfterChangeAutomationName: null == r ? void 0 : r.extAfterChangeAutomationName,
      extBeforeSaveAutomation: null == r ? void 0 : r.extBeforeSaveAutomation,
      extAfterSaveAutomation: null == r ? void 0 : r.extAfterSaveAutomation,
      extSaveAutomation: null == r ? void 0 : r.extSaveAutomation,
      extId: n,
      showPreview: a
    }),
    content: React.createElement(React.Fragment, null, React.createElement(AF, {
      extId: n,
      showPreview: a
    })),
    sidebar: React.createElement(tN, {
      isOpen: i
    })
  }), React.createElement(q.Popover.Slot, null))))));
};

var rN = n(95093),
  aN = n.n(rN),
  oN = function () {
    return React.createElement(React.Fragment, null, React.createElement("svg", {
      fill: "none",
      width: "21",
      height: "22",
      viewBox: "0 0 21 22",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M6.125 10.145c0-.483.392-.875.875-.875h7a.875.875 0 010 1.75H7a.875.875 0 01-.875-.875zm0 3.5c0-.483.392-.875.875-.875h3.5a.875.875 0 110 1.75H7a.875.875 0 01-.875-.875z",
      clipRule: "evenodd"
    }), React.createElement("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.375 17.145a2.625 2.625 0 01-2.625 2.625H5.25a2.625 2.625 0 01-2.625-2.625V4.895A2.625 2.625 0 015.25 2.27H14l.01.01a2.62 2.62 0 011.634.759L17.606 5c.44.44.707 1.02.76 1.634l.009.01v10.5zm-2.625.875H5.25a.875.875 0 01-.875-.875V4.895c0-.483.392-.875.875-.875h7.875v1.75c0 .966.784 1.75 1.75 1.75h1.75v9.625a.875.875 0 01-.875.875z",
      clipRule: "evenodd"
    })));
  };

const iN = (0, g.memo)(oN);
