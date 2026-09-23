// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var YC,
  QC,
  ZC = {
    id: "",
    type: 0,
    key: "",
    args: "",
    next_steps: ""
  },
  $C = (HTMLElement, {
    key: "addTag",
    group: "actions",
    type: "action",
    package: "free",
    category: "mailmint",
    title: (0, b._x)("Assign Tag(s)", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: (null === (YC = window) || void 0 === YC || null === (YC = YC.MRM_Vars) || void 0 === YC || null === (YC = YC.mint_trans) || void 0 === YC ? void 0 : YC.ActionDescription) || "Wait some time before proceeding with the steps below",
    subtitle: function (e) {
      var t, n, r;
      return 0 === (null === (t = e.settings) || void 0 === t || null === (t = t.tag_settings) || void 0 === t ? void 0 : t.tags.length) ? (null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet) || "Not Set Up Yet" : "Assigned Tag:" + (null === (r = e.settings) || void 0 === r || null === (r = r.tag_settings) || void 0 === r ? void 0 : r.tags).map(function (e, t) {
        return [" " + e.title];
      }).toString();
    },
    icon: function () {
      return React.createElement("svg", {
        width: "22",
        height: "22",
        fill: "none",
        viewBox: "0 0 22 22",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".8",
        d: "M15.58 21a5.423 5.423 0 01-5.416-5.416 5.423 5.423 0 015.417-5.417 5.423 5.423 0 015.416 5.417A5.423 5.423 0 0115.581 21zm0-10a4.588 4.588 0 00-4.583 4.584 4.588 4.588 0 004.584 4.583 4.588 4.588 0 004.583-4.583A4.588 4.588 0 0015.581 11z"
      }), React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".8",
        d: "M15.58 18.5a.417.417 0 01-.416-.416v-5a.417.417 0 01.833 0v5c0 .23-.186.416-.416.416z"
      }), React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".8",
        d: "M18.08 16h-5a.417.417 0 010-.833h5a.417.417 0 010 .833z"
      }), React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".8",
        d: "M8.917 21a2.04 2.04 0 01-1.474-.617l-5.83-5.83a2.07 2.07 0 01-.037-2.9l9.39-9.742A2.892 2.892 0 0113.084 1h5.834C20.065 1 21 1.935 21 3.083v5.834c0 .36-.066.713-.2 1.078a.417.417 0 01-.782-.29c.1-.27.149-.527.149-.788V3.083c0-.689-.561-1.25-1.25-1.25h-5.834c-.576 0-1.115.232-1.514.654L2.175 12.23a1.231 1.231 0 00-.342.852c0 .335.13.647.366.877l5.837 5.837a1.244 1.244 0 001.524.184.416.416 0 11.446.704 2.02 2.02 0 01-1.09.315z"
      }), React.createElement("circle", {
        cx: "16",
        cy: "6",
        r: "1.4",
        stroke: "#2D3149",
        strokeWidth: "1.2"
      }));
    },
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o = UC((0, g.useState)(), 2),
        i = o[0],
        l = o[1],
        c = UC((0, g.useState)([]), 2),
        u = c[0],
        s = c[1],
        d = UC((0, g.useState)(!1), 2),
        m = d[0],
        p = d[1],
        f = UC((0, g.useState)([]), 2),
        v = f[0],
        b = f[1],
        _ = UC((0, g.useState)([]), 2),
        w = (_[0], _[1], UC((0, g.useState)(!1), 2)),
        E = (w[0], w[1], (0, g.useRef)(null)),
        S = UC((0, g.useState)("none"), 2),
        R = S[0],
        x = S[1];
      (0, wy.useOutsideAlerter)(E, p), (0, g.useEffect)(function () {
        Ny().then(function (e) {
          s(e.data);
        }), b(P.settings.tag_settings.tags);
      }, [i]), (0, g.useEffect)(function () {
        v.length >= 0 && (0, y.dispatch)(Lf).updateStepArgs(O, k, j, "tag_settings", "tags", v);
      }, [v]);
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
        b(P.settings.tag_settings.tags);
      }, [null == P ? void 0 : P.step_id]), (0, g.useEffect)(function () {
        if (document.querySelector(".successful-notification")) {
          var e = document.querySelector(".edit-site-sidebar__panel-tabs");
          "block" === R ? (e.style.position = "relative", e.style.zIndex = "0") : (e.style.position = "sticky", e.style.zIndex = "1");
        }
      }, [R]), h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings add-tag"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(GC, null), (null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.AssignTagS) || "Assign Tag(s)"), h().createElement("p", {
        className: "sort-description"
      }, (null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.ChooseTagToAddContact) || "Choose Tag(s) to assign to contacts.")), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-tag"
      }, " ", (null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.ChooseTagS) || "Choose Tag(s)", " "), h().createElement("div", {
        className: "form-group tag-lists-dropdown",
        ref: E
      }, h().createElement("button", {
        type: "button",
        className: m ? "drop-down-button show" : "drop-down-button",
        onClick: function () {
          p(!m), (0, y.dispatch)(Lf).updateStepArgs(O, k, j, "tag_settings", "tags", v);
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
            }) && (b(v.filter(function (e) {
              return e.id != n;
            })), (0, y.dispatch)(Lf).updateStepArgs(O, k, j, "tag_settings", "tags", v)));
            var n;
          }
        }, h().createElement(Xh.A, null)));
      }) : (null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectTags) || "Select Tag(s)"), h().createElement(fy, {
        isActive: m,
        setIsActive: p,
        selected: v,
        setSelected: b,
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
        setsuccessNotification: x,
        successNotification: R
      }))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  });

function KC() {
  return React.createElement("svg", {
    width: "19",
    height: "21",
    fill: "none",
    viewBox: "0 0 19 21",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".6",
    d: "M17.406 14.996h-2.289v-2.33a.672.672 0 00-.191-.47.648.648 0 00-.925 0 .672.672 0 00-.191.47v2.33h-2.29c-.173 0-.34.07-.462.195a.672.672 0 000 .941.648.648 0 00.462.195h2.288v2.33c0 .176.07.345.192.47a.648.648 0 00.925 0 .672.672 0 00.191-.47v-2.33h2.289c.173 0 .34-.07.462-.195a.672.672 0 000-.941.648.648 0 00-.462-.195z"
  }), React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".6",
    d: "M9.563 19.322H3.024a.648.648 0 01-.462-.195.672.672 0 01-.192-.47 7.397 7.397 0 012.11-5.175 7.138 7.138 0 015.082-2.146 5.193 5.193 0 003.444-1.297 5.368 5.368 0 001.765-3.277 5.418 5.418 0 00-.777-3.653A5.257 5.257 0 0011.056.87a5.162 5.162 0 00-3.662.27A5.295 5.295 0 004.8 3.785a5.43 5.43 0 00-.253 3.729 5.332 5.332 0 002.21 2.984 8.525 8.525 0 00-4.123 3.157 8.767 8.767 0 00-1.572 5.002c0 .53.206 1.037.574 1.412.368.374.867.584 1.387.584h6.539c.173 0 .34-.07.462-.195a.671.671 0 000-.94.648.648 0 00-.463-.196zM5.639 6.011c0-.79.23-1.562.662-2.219a3.939 3.939 0 011.76-1.47 3.86 3.86 0 012.267-.228c.76.155 1.46.535 2.008 1.093.55.559.923 1.27 1.074 2.045a4.06 4.06 0 01-.223 2.307 3.98 3.98 0 01-1.445 1.792 3.874 3.874 0 01-2.18.673 3.893 3.893 0 01-2.772-1.17A4.034 4.034 0 015.64 6.01z"
  }));
}

var JC = {
  key: "createUser",
  group: "actions",
  type: "action",
  package: "pro",
  category: "mailmint",
  title: (0, b._x)("Create Contact", "noun", "mrm"),
  foreground: "#7F54B3",
  background: "#f7edf7",
  description: (null === (QC = window) || void 0 === QC || null === (QC = QC.MRM_Vars) || void 0 === QC || null === (QC = QC.mint_trans) || void 0 === QC ? void 0 : QC.ActionDescription) || "Wait some time before proceeding with the steps below",
  subtitle: function (e) {
    var t, n;
    if ("" === (null === (t = e.settings.contact_status_settings) || void 0 === t ? void 0 : t.status) || 0 == e.settings.length) return (null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet) || "Not Set Up Yet";
    var r,
      a = null === (r = e.settings.contact_status_settings) || void 0 === r ? void 0 : r.status;
    return "Selected status:  " + (a ? a.charAt(0).toUpperCase() + a.slice(1) : "");
  },
  icon: function () {
    return React.createElement("svg", {
      width: "19",
      height: "21",
      fill: "none",
      viewBox: "0 0 19 21",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "#2D3149",
      stroke: "#2D3149",
      strokeWidth: ".6",
      d: "M17.406 14.996h-2.289v-2.33a.672.672 0 00-.191-.47.648.648 0 00-.925 0 .672.672 0 00-.191.47v2.33h-2.29c-.173 0-.34.07-.462.195a.672.672 0 000 .941.648.648 0 00.462.195h2.288v2.33c0 .176.07.345.192.47a.648.648 0 00.925 0 .672.672 0 00.191-.47v-2.33h2.289c.173 0 .34-.07.462-.195a.672.672 0 000-.941.648.648 0 00-.462-.195z"
    }), React.createElement("path", {
      fill: "#2D3149",
      stroke: "#2D3149",
      strokeWidth: ".6",
      d: "M9.563 19.322H3.024a.648.648 0 01-.462-.195.672.672 0 01-.192-.47 7.397 7.397 0 012.11-5.175 7.138 7.138 0 015.082-2.146 5.193 5.193 0 003.444-1.297 5.368 5.368 0 001.765-3.277 5.418 5.418 0 00-.777-3.653A5.257 5.257 0 0011.056.87a5.162 5.162 0 00-3.662.27A5.295 5.295 0 004.8 3.785a5.43 5.43 0 00-.253 3.729 5.332 5.332 0 002.21 2.984 8.525 8.525 0 00-4.123 3.157 8.767 8.767 0 00-1.572 5.002c0 .53.206 1.037.574 1.412.368.374.867.584 1.387.584h6.539c.173 0 .34-.07.462-.195a.671.671 0 000-.94.648.648 0 00-.463-.196zM5.639 6.011c0-.79.23-1.562.662-2.219a3.939 3.939 0 011.76-1.47 3.86 3.86 0 012.267-.228c.76.155 1.46.535 2.008 1.093.55.559.923 1.27 1.074 2.045a4.06 4.06 0 01-.223 2.307 3.98 3.98 0 01-1.445 1.792 3.874 3.874 0 01-2.18.673 3.893 3.893 0 01-2.772-1.17A4.034 4.034 0 015.64 6.01z"
    }));
  },
  edit: function () {
    var e,
      t,
      n,
      r,
      a,
      o,
      i,
      l,
      c,
      u,
      s,
      d = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
        };
      }, []),
      m = d.selectedStep,
      p = d.selectedStepIndex,
      f = d.selectedStepCondition,
      v = d.selectedLogicalStepIndex;
    return d.errors, h().createElement(q.PanelBody, {
      opened: !0
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings create-user"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(KC, null), (null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.CreateUser) || "Create User"), h().createElement("p", {
      className: "sort-description"
    }, (null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.CreateUserDescription) || "If the contact is not on the contacts list already, a new contact will be created.")), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: "",
      className: "inline-with-link"
    }, (null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.ContactStatus) || "Contact Status"), h().createElement(q.SelectControl, {
      options: [{
        value: "",
        label: (null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectStatus) || "Select Status"
      }, {
        value: "pending",
        label: (null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.Pending) || "Pending"
      }, {
        value: "subscribed",
        label: (null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.Subscribed) || "Subscribed"
      }, {
        value: "unsubscribed",
        label: (null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.Unsubscribed) || "Unsubscribed"
      }, {
        value: "bounced",
        label: (null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.Bounced) || "Bounced"
      }, {
        value: "complained",
        label: (null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.Complained) || "Complained"
      }],
      value: null !== (u = null === (s = m.settings) || void 0 === s || null === (s = s.contact_status_settings) || void 0 === s ? void 0 : s.status) && void 0 !== u ? u : "",
      onChange: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(p, f, v, "contact_status_settings", "status", e);
      }
    })))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function XC() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".2",
    d: "M13.92 12.206l-2.655-1.992V6.157a.737.737 0 10-1.476 0v4.426c0 .232.11.451.295.59l2.951 2.213a.732.732 0 001.033-.148.736.736 0 00-.148-1.032z"
  }), React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".2",
    d: "M11 1C5.486 1 1 5.486 1 11s4.486 10 10 10 10-4.486 10-10S16.514 1 11 1zm0 18.45c-4.66 0-8.45-3.79-8.45-8.45 0-4.66 3.79-8.45 8.45-8.45 4.66 0 8.45 3.79 8.45 8.45 0 4.66-3.79 8.45-8.45 8.45z"
  }));
}

var eP,
  tP = {
    key: "delay",
    group: "actions",
    type: "action",
    package: "free",
    category: "mailmint",
    title: (0, b._x)("Time Delay", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: (0, b.__)("Wait some time before proceeding with the steps below", "mrm"),
    subtitle: function (e) {
      var t, n, r, a, o;
      return "" === (null === (t = e.settings.delay_settings) || void 0 === t ? void 0 : t.delay) && "" === (null === (n = e.settings.delay_settings) || void 0 === n ? void 0 : n.unit) ? null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.NotSetUpYet : "Wait for " + (null === (a = e.settings.delay_settings) || void 0 === a ? void 0 : a.delay) + " " + (null === (o = e.settings.delay_settings) || void 0 === o ? void 0 : o.unit);
    },
    icon: function () {
      return React.createElement("svg", {
        width: "22",
        height: "22",
        fill: "none",
        viewBox: "0 0 22 22",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".2",
        d: "M14.564 12.766l-2.788-2.091v-4.26a.774.774 0 10-1.55 0v4.647c0 .244.115.474.31.62l3.099 2.324a.77.77 0 001.084-.156.773.773 0 00-.155-1.084z"
      }), React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".2",
        d: "M11 1C5.486 1 1 5.486 1 11s4.486 10 10 10 10-4.486 10-10S16.514 1 11 1zm0 18.45c-4.66 0-8.45-3.79-8.45-8.45 0-4.66 3.79-8.45 8.45-8.45 4.66 0 8.45 3.79 8.45 8.45 0 4.66-3.79 8.45-8.45 8.45z"
      }));
    },
    edit: function () {
      var e,
        t,
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
        p,
        f,
        v,
        g,
        b,
        _,
        w = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        E = w.selectedStep,
        S = w.selectedStepIndex,
        R = w.selectedStepCondition,
        x = w.selectedLogicalStepIndex,
        C = w.errors,
        P = null !== (e = null == C ? void 0 : C.fields) && void 0 !== e ? e : {},
        O = null !== (t = null == P ? void 0 : P.delay) && void 0 !== t ? t : "",
        k = null !== (n = null == P ? void 0 : P.delay_type) && void 0 !== n ? n : "",
        j = "delay-number-".concat(E.id);
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings delay"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(XC, null), null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.TimeDelay), h().createElement("p", {
        className: "sort-description"
      }, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.TimeDelayDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings waiting-time ".concat(P ? "mintmrm-has-error" : "")
      }, h().createElement("label", {
        htmlFor: "waiting-time-".concat(j)
      }, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.SetWaitingTime, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.TimeDelayTooltip))), h().createElement("div", {
        className: "inline-input"
      }, h().createElement(q.TextControl, {
        id: "waiting-time-".concat(j),
        type: "number",
        placeholder: null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.Number,
        value: null !== (c = null === (u = E.settings) || void 0 === u || null === (u = u.delay_settings) || void 0 === u ? void 0 : u.delay) && void 0 !== c ? c : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(S, R, x, "delay_settings", "delay", e);
        },
        min: "0",
        onKeyDown: function (e) {
          return ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
        }
      }), h().createElement(q.SelectControl, {
        options: [{
          value: "seconds",
          label: null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s || null === (s = s.mint_trans) || void 0 === s ? void 0 : s.Seconds
        }, {
          value: "minutes",
          label: null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.Minutes
        }, {
          value: "hours",
          label: null === (m = window) || void 0 === m || null === (m = m.MRM_Vars) || void 0 === m || null === (m = m.mint_trans) || void 0 === m ? void 0 : m.Hours
        }, {
          value: "days",
          label: null === (p = window) || void 0 === p || null === (p = p.MRM_Vars) || void 0 === p || null === (p = p.mint_trans) || void 0 === p ? void 0 : p.Days
        }, {
          value: "weeks",
          label: null === (f = window) || void 0 === f || null === (f = f.MRM_Vars) || void 0 === f || null === (f = f.mint_trans) || void 0 === f ? void 0 : f.Weeks
        }, {
          value: "month",
          label: null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v || null === (v = v.mint_trans) || void 0 === v ? void 0 : v.Months
        }, {
          value: "year",
          label: null === (g = window) || void 0 === g || null === (g = g.MRM_Vars) || void 0 === g || null === (g = g.mint_trans) || void 0 === g ? void 0 : g.Years
        }],
        value: null !== (b = null === (_ = E.settings) || void 0 === _ || null === (_ = _.delay_settings) || void 0 === _ ? void 0 : _.unit) && void 0 !== b ? b : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(S, R, x, "delay_settings", "unit", e);
        }
      })), h().createElement("span", {
        className: "hints"
      }, O || "", k || "")))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function nP(e, t) {
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
      if ("string" == typeof e) return rP(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? rP(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function rP(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
