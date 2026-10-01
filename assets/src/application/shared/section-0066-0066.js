// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var kA,
  jA = {
    key: "webHookOutgoing",
    group: "actions",
    type: "action",
    package: "pro",
    category: "mailmint",
    title: (0, b._x)("Outgoing Webhook", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: (0, b.__)("Send Data to external server via GET or POST Method", "mrm"),
    subtitle: function (e) {
      var t, n;
      return "" === (null === (t = e.settings) || void 0 === t || null === (t = t.message_data) || void 0 === t ? void 0 : t.subject) ? null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet : "Send Data to external server via GET or POST Method";
    },
    icon: function () {
      return React.createElement("svg", {
        width: "22",
        height: "20",
        viewBox: "0 0 22 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        d: "M10.9983 0C7.96848 0 5.49739 2.41887 5.49739 5.38462C5.49739 6.99519 6.31085 8.36238 7.46198 9.35096L5.81663 12.3317C5.70919 12.3167 5.60789 12.3077 5.49739 12.3077C4.20505 12.3077 3.13987 13.3504 3.13987 14.6154C3.13987 15.8804 4.20505 16.9231 5.49739 16.9231C6.78972 16.9231 7.8549 15.8804 7.8549 14.6154C7.8549 14.0024 7.59705 13.4435 7.19185 13.0288L9.42658 8.96635L8.8372 8.58173C7.77816 7.89363 7.06906 6.72776 7.06906 5.38462C7.06906 3.2512 8.81878 1.53846 10.9983 1.53846C13.1777 1.53846 14.9275 3.2512 14.9275 5.38462C14.9275 5.83534 14.8507 6.25901 14.7064 6.65865L16.1799 7.1875C16.3856 6.6256 16.4991 6.01262 16.4991 5.38462C16.4991 2.41887 14.028 0 10.9983 0ZM10.9983 3.07692C9.70592 3.07692 8.64074 4.11959 8.64074 5.38462C8.64074 6.64964 9.70592 7.69231 10.9983 7.69231C11.1088 7.69231 11.2101 7.68329 11.3175 7.66827L13.4786 11.0337L13.8715 11.6587L14.5345 11.274C15.1116 10.9465 15.7808 10.7692 16.4991 10.7692C18.6786 10.7692 20.4283 12.482 20.4283 14.6154C20.4283 16.7488 18.6786 18.4615 16.4991 18.4615C15.3296 18.4615 14.2951 17.9748 13.5768 17.1875L12.398 18.1971C13.4049 19.2969 14.8753 20 16.4991 20C19.5289 20 22 17.5811 22 14.6154C22 11.6496 19.5289 9.23077 16.4991 9.23077C15.7747 9.23077 15.1454 9.51022 14.51 9.75962L12.7173 6.94712C13.1102 6.53546 13.3558 5.98558 13.3558 5.38462C13.3558 4.11959 12.2906 3.07692 10.9983 3.07692ZM10.9983 4.61538C11.4403 4.61538 11.7841 4.95192 11.7841 5.38462C11.7841 5.81731 11.4403 6.15385 10.9983 6.15385C10.5562 6.15385 10.2124 5.81731 10.2124 5.38462C10.2124 4.95192 10.5562 4.61538 10.9983 4.61538ZM4.58876 9.30288C3.95948 9.40805 3.33019 9.62139 2.74695 9.95192C0.125442 11.4333 -0.780114 14.7416 0.733239 17.3077C2.24659 19.8738 5.62324 20.7602 8.24782 19.2788C9.7489 18.4285 10.5593 16.9471 10.8018 15.3846H14.289C14.6174 16.274 15.4831 16.9231 16.4991 16.9231C17.7915 16.9231 18.8566 15.8804 18.8566 14.6154C18.8566 13.3504 17.7915 12.3077 16.4991 12.3077C15.4831 12.3077 14.6174 12.9567 14.289 13.8462H9.42658V14.6154C9.42658 15.9435 8.72669 17.2416 7.46198 17.9567C5.57413 19.0234 3.17364 18.3864 2.0839 16.5385C0.994162 14.6905 1.64493 12.3407 3.53279 11.274C3.95027 11.0367 4.38616 10.8924 4.83433 10.8173L4.58876 9.30288ZM5.49739 13.8462C5.93942 13.8462 6.28322 14.1827 6.28322 14.6154C6.28322 15.0481 5.93942 15.3846 5.49739 15.3846C5.05535 15.3846 4.71155 15.0481 4.71155 14.6154C4.71155 14.1827 5.05535 13.8462 5.49739 13.8462ZM16.4991 13.8462C16.9412 13.8462 17.285 14.1827 17.285 14.6154C17.285 15.0481 16.9412 15.3846 16.4991 15.3846C16.0571 15.3846 15.7133 15.0481 15.7133 14.6154C15.7133 14.1827 16.0571 13.8462 16.4991 13.8462Z",
        fill: "#2D3149"
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
        w,
        E,
        S,
        R,
        x,
        C,
        P,
        O,
        k,
        j,
        A,
        M,
        T = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            automationData: e(Lf).getAutomationData()
          };
        }, []),
        I = T.selectedStep,
        F = T.selectedStepIndex,
        N = T.selectedStepCondition,
        D = T.selectedLogicalStepIndex,
        W = T.automationData,
        z = function (e, t, n) {
          var r,
            a,
            o = null === (r = I.settings) || void 0 === r || null === (r = r.message_data) || void 0 === r ? void 0 : r.body_request_data[n];
          t.body_key = e, t.body_value = t.body_value;
          var i = null === (a = I.settings) || void 0 === a || null === (a = a.message_data) || void 0 === a ? void 0 : a.body_request_data.map(function (e, r) {
            return n === r && (e = xA(xA({}, o[n]), t)), e;
          });
          (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "message_data", "body_request_data", i);
        },
        B = function (e) {
          var t,
            n = null === (t = I.settings) || void 0 === t || null === (t = t.message_data) || void 0 === t ? void 0 : t.body_request_data;
          e > -1 && (n.splice(e, 1), (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "message_data", "body_request_data", n));
        },
        L = function (e) {
          var t,
            n = null === (t = I.settings) || void 0 === t || null === (t = t.message_data) || void 0 === t ? void 0 : t.header_request_data;
          e > -1 && (n.splice(e, 1), (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "message_data", "header_request_data", n));
        };
      return h().createElement(h().Fragment, null, h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings outgoing-webhook"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(fP, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.OutgoingWebhook), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.OutgoingWebhookDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings data-send-method"
      }, h().createElement("label", {
        htmlFor: "email-sender-email"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.DataSendMethod), h().createElement(q.SelectControl, {
        label: "",
        value: null !== (r = null === (a = I.settings) || void 0 === a || null === (a = a.message_data) || void 0 === a ? void 0 : a.method) && void 0 !== r ? r : "",
        options: [{
          label: "POST",
          value: "post"
        }, {
          label: "GET",
          value: "get"
        }],
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "message_data", "method", e);
        }
      })), h().createElement("div", {
        className: "form-group single-settings remote-url"
      }, h().createElement("label", {
        htmlFor: "email-sender-name"
      }, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.RemoteURL, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.RemoteURLTooltip))), h().createElement(q.TextControl, {
        id: "email-sender-name",
        type: "text",
        placeholder: null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.EnterRemoteURL,
        value: null !== (c = null === (u = I.settings) || void 0 === u || null === (u = u.message_data) || void 0 === u ? void 0 : u.remote_url) && void 0 !== c ? c : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "message_data", "remote_url", e);
        }
      })), h().createElement("div", {
        className: "form-group single-settings request-format"
      }, h().createElement("label", {
        htmlFor: "email-sender-email"
      }, null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s || null === (s = s.mint_trans) || void 0 === s ? void 0 : s.RequestFormat), h().createElement(q.SelectControl, {
        label: "",
        value: null !== (d = null === (m = I.settings) || void 0 === m || null === (m = m.message_data) || void 0 === m ? void 0 : m.data_format) && void 0 !== d ? d : "",
        options: [{
          label: "JSON Format",
          value: "json"
        }, {
          label: "Form Method",
          value: "form"
        }],
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "message_data", "data_format", e);
        }
      })), h().createElement("div", {
        className: "form-group single-settings request-body-data"
      }, h().createElement("label", {
        htmlFor: "email-sender-email"
      }, null === (p = window) || void 0 === p || null === (p = p.MRM_Vars) || void 0 === p || null === (p = p.mint_trans) || void 0 === p ? void 0 : p.RequestBodyData, "custom" == (null === (f = I.settings) || void 0 === f || null === (f = f.message_data) || void 0 === f ? void 0 : f.body_request) && h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v || null === (v = v.mint_trans) || void 0 === v ? void 0 : v.RequestBodyDataTooltip))), h().createElement("div", {
        className: "current-user-type"
      }, h().createElement(q.SelectControl, {
        label: "",
        value: null !== (g = null === (b = I.settings) || void 0 === b || null === (b = b.message_data) || void 0 === b ? void 0 : b.body_request) && void 0 !== g ? g : "",
        options: [{
          label: "Full Subscriber Data (Raw)\n",
          value: "raw"
        }, {
          label: "Custom Data",
          value: "custom"
        }],
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "message_data", "body_request", e);
        }
      })), "custom" == (null === (_ = I.settings) || void 0 === _ || null === (_ = _.message_data) || void 0 === _ ? void 0 : _.body_request) && h().createElement("div", {
        className: "current-user-repeater"
      }, (null === (w = I.settings) || void 0 === w || null === (w = w.message_data) || void 0 === w ? void 0 : w.body_request_data.length) > 0 && (null === (E = I.settings) || void 0 === E || null === (E = E.message_data) || void 0 === E ? void 0 : E.body_request_data.map(function (e, t) {
        return h().createElement(vA, {
          key: t,
          keyProp: t,
          valueProp: e,
          handleBodyKey: z,
          deleteBodyRequest: B,
          automationData: W
        });
      })), h().createElement("hr", null), h().createElement(q.Button, {
        className: "mintmrm-btn",
        title: "Add new item",
        variant: "secondary",
        onClick: function () {
          return t = null === (e = I.settings) || void 0 === e || null === (e = e.message_data) || void 0 === e ? void 0 : e.body_request_data, n = [].concat(PA(t), [{
            body_key: "",
            body_value: ""
          }]), void (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "message_data", "body_request_data", n);
          var e, t, n;
        }
      }, null === (S = window) || void 0 === S || null === (S = S.MRM_Vars) || void 0 === S || null === (S = S.mint_trans) || void 0 === S ? void 0 : S.AddNew))), h().createElement("div", {
        className: "form-group single-settings request-header"
      }, h().createElement("label", {
        htmlFor: "email-sender-email"
      }, null === (R = window) || void 0 === R || null === (R = R.MRM_Vars) || void 0 === R || null === (R = R.mint_trans) || void 0 === R ? void 0 : R.RequestHeader, "with_header" == (null === (x = I.settings) || void 0 === x || null === (x = x.message_data) || void 0 === x ? void 0 : x.header_request) && h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (C = window) || void 0 === C || null === (C = C.MRM_Vars) || void 0 === C || null === (C = C.mint_trans) || void 0 === C ? void 0 : C.RequestHeaderTooltip))), h().createElement("div", {
        className: "current-user-type"
      }, h().createElement(q.SelectControl, {
        label: "",
        value: null !== (P = null === (O = I.settings) || void 0 === O || null === (O = O.message_data) || void 0 === O ? void 0 : O.header_request) && void 0 !== P ? P : "",
        options: [{
          label: "No Header",
          value: "no_header"
        }, {
          label: "With Header",
          value: "with_header"
        }],
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "message_data", "header_request", e);
        }
      })), "with_header" == (null === (k = I.settings) || void 0 === k || null === (k = k.message_data) || void 0 === k ? void 0 : k.header_request) && h().createElement("div", {
        className: "current-user-repeater"
      }, (null === (j = I.settings) || void 0 === j || null === (j = j.message_data) || void 0 === j ? void 0 : j.header_request_data.length) > 0 && (null === (A = I.settings) || void 0 === A || null === (A = A.message_data) || void 0 === A ? void 0 : A.header_request_data.map(function (e, t) {
        return h().createElement(EA, {
          key: t,
          keyProp: t,
          valueProp: e,
          deleteHeaderRequest: L,
          automationData: W
        });
      })), h().createElement("hr", null), h().createElement(q.Button, {
        className: "mintmrm-btn",
        title: "Add new item",
        variant: "secondary",
        onClick: function () {
          return t = null === (e = I.settings) || void 0 === e || null === (e = e.message_data) || void 0 === e ? void 0 : e.header_request_data, n = [].concat(PA(t), [{
            header_key: "",
            header_value: ""
          }]), void (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "message_data", "header_request_data", n);
          var e, t, n;
        }
      }, null === (M = window) || void 0 === M || null === (M = M.MRM_Vars) || void 0 === M || null === (M = M.mint_trans) || void 0 === M ? void 0 : M.AddNew)))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function AA() {
  return React.createElement("svg", {
    width: "19",
    height: "21",
    fill: "none",
    viewBox: "0 0 20 21",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    fillRule: "evenodd",
    d: "M8.742.5h2.015c1.752 0 3.14 0 4.226.142 1.118.147 2.023.456 2.737 1.152.713.696 1.03 1.58 1.18 2.67.146 1.06.146 2.414.146 4.123v3.826c0 1.71 0 3.064-.146 4.123-.15 1.09-.467 1.974-1.18 2.67-.714.696-1.619 1.005-2.737 1.152-1.086.142-2.474.142-4.226.142H8.742c-1.752 0-3.14 0-4.226-.142-1.118-.147-2.023-.456-2.736-1.152-.714-.696-1.03-1.58-1.18-2.67-.147-1.06-.147-2.414-.147-4.123V8.587c0-1.71 0-3.064.146-4.123.15-1.09.467-1.974 1.18-2.67C2.494 1.098 3.399.79 4.517.642 5.602.5 6.99.5 8.742.5zM4.706 2.025c-.959.126-1.511.362-1.915.756-.404.394-.645.933-.774 1.869-.132.956-.134 2.216-.134 3.99v3.72c0 1.774.002 3.034.134 3.99.129.936.37 1.476.774 1.87.404.393.956.629 1.915.755.98.128 2.272.13 4.09.13h1.907c1.818 0 3.11-.002 4.09-.13.959-.126 1.512-.362 1.915-.756.404-.393.646-.933.775-1.869.131-.956.133-2.216.133-3.99V8.64c0-1.774-.002-3.034-.133-3.99-.13-.936-.371-1.475-.775-1.87-.403-.393-.956-.629-1.915-.755-.98-.128-2.272-.13-4.09-.13H8.796c-1.818 0-3.11.002-4.09.13z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#2D3149",
    fillRule: "evenodd",
    d: "M5.227 10.5c0-.385.32-.697.715-.697h7.628c.394 0 .715.312.715.697 0 .386-.32.698-.715.698H5.942a.707.707 0 01-.715-.698zm0-3.72c0-.386.32-.698.715-.698h7.628c.394 0 .715.312.715.698 0 .385-.32.697-.715.697H5.942a.707.707 0 01-.715-.697zm0 7.442c0-.385.32-.698.715-.698h4.767c.395 0 .715.313.715.698 0 .385-.32.698-.715.698H5.942a.707.707 0 01-.715-.698z",
    clipRule: "evenodd"
  }));
}

var MA,
  TA = {
    key: "addNoteAndActivity",
    group: "actions",
    type: "action",
    package: "pro",
    category: "mailmint",
    title: (0, b._x)("Add Note & Activity", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: null === (kA = window) || void 0 === kA || null === (kA = kA.MRM_Vars) || void 0 === kA || null === (kA = kA.mint_trans) || void 0 === kA ? void 0 : kA.ActionDescription,
    subtitle: function (e) {
      var t, n, r, a;
      return "" === (null === (t = e.settings.note_and_activity_settings) || void 0 === t ? void 0 : t.note_type) || 0 == e.settings.length ? null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet : "Note Type: " + ((a = null == e || null === (r = e.settings) || void 0 === r || null === (r = r.note_and_activity_settings) || void 0 === r ? void 0 : r.note_type) ? a.split("_").map(function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }).join(" ") : "");
    },
    icon: AA,
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
        _,
        w,
        E,
        S,
        R,
        x,
        C,
        P,
        O,
        k = (0, g.useRef)(null),
        j = (0, g.useRef)(null),
        A = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            automationData: e(Lf).getAutomationData(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        M = A.selectedStep,
        T = A.selectedStepIndex,
        I = A.selectedStepCondition,
        F = A.selectedLogicalStepIndex,
        N = A.automationData;
      return A.errors, (0, g.useEffect)(function () {
        tinymce.remove("#new-note"), tinymce.init({
          selector: "#new-note",
          branding: !1,
          plugins: "colorpicker compat3x lists tabfocus textcolor wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wptextpattern wpview link",
          toolbar1: "bold italic underline strikethrough | bullist numlist | blockquote hr wp_more | alignleft aligncenter alignright | link unlink | wp_adv ",
          toolbar2: "formatselect alignjustify forecolor | fontsizeselect | fontselect |pastetext removeformat charmap | outdent indent | undo redo | wp_help ",
          wpautop: !0,
          quicktags: !0,
          mediaButtons: !0,
          height: "100px",
          setup: function (e) {
            j.current = e, e.on("init", function (t) {
              var n;
              e.setContent((null === (n = M.settings) || void 0 === n || null === (n = n.note_and_activity_settings) || void 0 === n ? void 0 : n.note_description) || "");
            }), e.on("change", function () {
              var t = e.getContent();
              (0, y.dispatch)(Lf).updateStepArgs(T, I, F, "note_and_activity_settings", "note_description", t);
            });
          }
        });
      }, []), h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings add-note-settings"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(AA, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.AddNoteAndActivity), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.CreateUserDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "",
        className: "inline-with-link"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NoteType), h().createElement(q.SelectControl, {
        options: [{
          value: "",
          label: null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectNoteType
        }, {
          value: "note",
          label: null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.Note
        }, {
          value: "call",
          label: null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.Call
        }, {
          value: "email",
          label: null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.Email
        }, {
          value: "meeting",
          label: null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.Meeting
        }, {
          value: "quote_sent",
          label: null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.QuoteSent
        }, {
          value: "quote_accepted",
          label: null === (u = window) || void 0 === u || null === (u = u.MRM_Vars) || void 0 === u || null === (u = u.mint_trans) || void 0 === u ? void 0 : u.QuoteAccepted
        }, {
          value: "quote_refused",
          label: null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s || null === (s = s.mint_trans) || void 0 === s ? void 0 : s.QuoteRefused
        }, {
          value: "invoice_sent",
          label: null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.InvoiceSent
        }, {
          value: "invoice_part_paid",
          label: null === (m = window) || void 0 === m || null === (m = m.MRM_Vars) || void 0 === m || null === (m = m.mint_trans) || void 0 === m ? void 0 : m.InvoicePartPaid
        }, {
          value: "invoice_paid",
          label: null === (p = window) || void 0 === p || null === (p = p.MRM_Vars) || void 0 === p || null === (p = p.mint_trans) || void 0 === p ? void 0 : p.InvoicePaid
        }, {
          value: "invoice_refunded",
          label: null === (f = window) || void 0 === f || null === (f = f.MRM_Vars) || void 0 === f || null === (f = f.mint_trans) || void 0 === f ? void 0 : f.InvoiceRefunded
        }, {
          value: "transaction",
          label: null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v || null === (v = v.mint_trans) || void 0 === v ? void 0 : v.Transaction
        }, {
          value: "feedback",
          label: null === (_ = window) || void 0 === _ || null === (_ = _.MRM_Vars) || void 0 === _ || null === (_ = _.mint_trans) || void 0 === _ ? void 0 : _.Feedback
        }],
        value: null !== (w = null === (E = M.settings) || void 0 === E || null === (E = E.note_and_activity_settings) || void 0 === E ? void 0 : E.note_type) && void 0 !== w ? w : "",
        onChange: function (e) {
          var t;
          t = e, (0, y.dispatch)(Lf).updateStepArgs(T, I, F, "note_and_activity_settings", "note_type", t);
        }
      })), h().createElement("div", {
        className: "form-group single-settings add-note-settings-wrapper"
      }, h().createElement("label", null, (0, b.__)("Note Title", "mrm")), h().createElement("input", {
        type: "text",
        className: "add-note-input",
        value: null !== (S = null === (R = M.settings) || void 0 === R || null === (R = R.note_and_activity_settings) || void 0 === R ? void 0 : R.note_title) && void 0 !== S ? S : "",
        onChange: function (e) {
          return t = e.target.value, void (0, y.dispatch)(Lf).updateStepArgs(T, I, F, "note_and_activity_settings", "note_title", t);
          var t;
        },
        placeholder: (0, b.__)("Enter a Note Title...", "mrm"),
        ref: k
      }), h().createElement("div", {
        className: "pos-relative"
      }, h().createElement(Ej, {
        inputRef: k,
        inputValue: null === (x = M.settings) || void 0 === x || null === (x = x.note_and_activity_settings) || void 0 === x ? void 0 : x.note_title,
        setInputValue: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(T, I, F, "note_and_activity_settings", "note_title", e);
        },
        tooltip: null === (C = window) || void 0 === C || null === (C = C.MRM_Vars) || void 0 === C || null === (C = C.mint_trans) || void 0 === C ? void 0 : C.personalizeTooltip,
        triggerName: null == N ? void 0 : N.trigger_name
      }))), h().createElement("div", {
        className: "form-group single-settings note-description-wrapper"
      }, h().createElement("label", null, (0, b.__)("Note Description", "mrm")), h().createElement("div", {
        className: "note-editor"
      }, h().createElement("textarea", {
        id: "new-note",
        rows: "3",
        name: "email_body",
        ref: j
      })), h().createElement("div", {
        className: "pos-relative"
      }, h().createElement(Ej, {
        inputRef: j,
        tagOnly: !0,
        inputValue: null === (P = M.settings) || void 0 === P || null === (P = P.note_and_activity_settings) || void 0 === P ? void 0 : P.note_description,
        setInputValue: function (e, t) {
          j.current.insertContent(t);
        },
        tooltip: null === (O = window) || void 0 === O || null === (O = O.MRM_Vars) || void 0 === O || null === (O = O.mint_trans) || void 0 === O ? void 0 : O.personalizeTooltip,
        triggerName: null == N ? void 0 : N.trigger_name
      }))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function IA() {
  return React.createElement("svg", {
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_10247_1782)"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.513 0 10 0zM1.01 10a8.96 8.96 0 01.778-3.66l4.288 11.751A8.993 8.993 0 011.01 10zM10 18.99c-.882 0-1.734-.13-2.54-.366l2.698-7.839 2.764 7.571a.75.75 0 00.064.124 8.978 8.978 0 01-2.986.51zm1.24-13.206a18.24 18.24 0 001.03-.085c.483-.058.427-.77-.058-.741 0 0-1.456.114-2.397.114-.883 0-2.368-.114-2.368-.114-.485-.028-.541.712-.057.74 0 0 .46.058.943.086l1.4 3.838-1.967 5.901-3.273-9.739A18.464 18.464 0 005.52 5.7c.484-.057.427-.77-.058-.74 0 0-1.456.114-2.396.114-.169 0-.368-.005-.579-.011A8.98 8.98 0 0110 1.009c2.341 0 4.472.895 6.072 2.36-.04-.002-.077-.007-.117-.007-.883 0-1.51.77-1.51 1.596 0 .74.427 1.368.883 2.108.342.6.741 1.369.741 2.48 0 .77-.295 1.662-.684 2.906l-.897 2.997-3.249-9.665zm3.281 11.987l2.746-7.94c.514-1.282.684-2.308.684-3.22 0-.33-.022-.638-.06-.925a8.988 8.988 0 01-3.37 12.085z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_10247_1782"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0z"
  }))));
}

function FA() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return NA(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (NA(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, NA(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, NA(d, "constructor", u), NA(u, "constructor", c), c.displayName = "GeneratorFunction", NA(u, a, "GeneratorFunction"), NA(d), NA(d, a, "Generator"), NA(d, r, function () {
    return this;
  }), NA(d, "toString", function () {
    return "[object Generator]";
  }), (FA = function () {
    return {
      w: o,
      m
    };
  })();
}
