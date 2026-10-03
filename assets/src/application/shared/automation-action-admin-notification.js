// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function zj(e, t) {
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
  }(e, t) || Bj(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Bj(e, t) {
  if (e) {
    if ("string" == typeof e) return Lj(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Lj(e, t) : void 0;
  }
}

function Lj(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Vj,
  Hj,
  Gj,
  Uj = {
    key: "sendMailNotification",
    group: "actions",
    type: "action",
    package: "pro",
    category: "mailmint",
    title: (0, b._x)("Send Notification Email", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: (null === (Mj = window) || void 0 === Mj || null === (Mj = Mj.MRM_Vars) || void 0 === Mj || null === (Mj = Mj.mint_trans) || void 0 === Mj ? void 0 : Mj.ActionDescription) || "Wait some time before proceeding with the steps below",
    subtitle: function (e) {
      var t, n, r;
      return "" === (null === (t = e.settings) || void 0 === t || null === (t = t.notification_email) || void 0 === t ? void 0 : t.subject) ? (null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet) || "Not Set Up Yet" : null === (r = e.settings) || void 0 === r || null === (r = r.notification_email) || void 0 === r ? void 0 : r.subject;
    },
    icon: Ij,
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
        k,
        j,
        M,
        T,
        I,
        F,
        N,
        D,
        W,
        z,
        B,
        L,
        V,
        H,
        G = zj((0, g.useState)(!0), 2),
        U = G[0],
        Y = G[1],
        Q = zj((0, g.useState)(!0), 2),
        Z = Q[0],
        $ = Q[1],
        K = zj((0, g.useState)({}), 2),
        J = K[0],
        X = K[1],
        ee = zj((0, g.useState)(!0), 2),
        te = ee[0],
        ne = ee[1],
        re = zj((0, g.useState)(), 2),
        ae = re[0],
        oe = (re[1], zj((0, g.useState)(!1), 2)),
        ie = oe[0],
        le = oe[1],
        ce = zj((0, g.useState)(!1), 2),
        ue = ce[0],
        se = ce[1],
        de = zj((0, g.useState)("none"), 2),
        me = de[0],
        pe = de[1],
        fe = zj((0, g.useState)(!0), 2),
        ve = fe[0],
        ge = fe[1],
        he = zj((0, g.useState)(!1), 2),
        ye = he[0],
        be = he[1],
        _e = zj((0, g.useState)(!0), 2),
        we = _e[0],
        Ee = _e[1],
        Se = zj((0, g.useState)(""), 2),
        Re = (Se[0], Se[1]),
        xe = zj((0, g.useState)(!1), 2),
        Ce = (xe[0], xe[1]),
        Pe = zj((0, g.useState)(!0), 2),
        Oe = Pe[0],
        ke = Pe[1],
        je = zj((0, g.useState)(!0), 2),
        Ae = je[0],
        Me = je[1],
        Te = zj((0, g.useState)((0, b.__)("Please enter 3 or more characters", "mrm")), 2),
        Ie = Te[0],
        Fe = Te[1],
        Ne = zj((0, g.useState)([]), 2),
        De = Ne[0],
        We = Ne[1],
        ze = (0, g.useRef)(null),
        Be = (0, g.useRef)(null),
        Le = zj((0, g.useState)(!1), 2),
        Ve = Le[0],
        He = Le[1],
        Ge = zj((0, g.useState)([]), 2),
        Ue = Ge[0],
        qe = Ge[1],
        Ye = zj((0, g.useState)(!1), 2),
        Qe = Ye[0],
        Ze = Ye[1],
        $e = -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome"),
        Ke = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            automationData: e(Lf).getAutomationData(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        Je = Ke.selectedStep,
        Xe = Ke.selectedStepIndex,
        et = Ke.selectedStepCondition,
        tt = Ke.selectedLogicalStepIndex,
        nt = (Ke.errors, Ke.automationData);
      Ke.ctaProModal, (0, g.useEffect)(function () {
        var e,
          t = null === (e = function (e) {
            return function (e) {
              if (Array.isArray(e)) return Lj(e);
            }(e) || function (e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || Bj(e) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }(null == nt ? void 0 : nt.steps)) || void 0 === e ? void 0 : e.filter(function (e) {
            return "createCoupon" === (null == e ? void 0 : e.key);
          });
        if (!(0, A.isEmpty)(t)) {
          var n = {};
          t.forEach(function (e) {
            var t;
            n["mint_wc_dynamic_coupon id=".concat(null == e ? void 0 : e.step_id)] = (null == e || null === (t = e.settings) || void 0 === t || null === (t = t.wc_create_coupon_settings) || void 0 === t || null === (t = t.general_settings) || void 0 === t ? void 0 : t.title) || (null == e ? void 0 : e.step_id);
          }), n.label = "WC Coupons", qe(n);
        }
      }, []);
      var rt = (0, y.useDispatch)(Lf),
        at = rt.setMaybeSave,
        ot = rt.setUpdateClicked,
        it = rt.setActivateAutoSave,
        lt = rt.closeSidebar,
        ct = rt.setCtaProModal,
        ut = (0, f.Zp)(),
        st = null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.is_mailmint_pro_license_active,
        dt = (0, y.useSelect)(function (e) {
          return {
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            isShowAiModal: e(Lf).getOpenAIModal(),
            selectedStep: e(Lf).getSelectedStep(),
            updateClicked: e(Lf).getUpdateClicked()
          };
        }, []),
        mt = (dt.isShowAiModal, dt.updateClicked),
        pt = function () {
          var e = Wj(Fj().m(function e() {
            return Fj().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  Y(!0), $(!1), He(!0), $e && (0, Rj.addClassToHtml)(["mrm-active-modal"]);
                case 1:
                  return e.a(2);
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
        ft = function () {
          var e = Wj(Fj().m(function e() {
            return Fj().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  $(!1), le(!0), ge(!0), pe(!me), Y(!1), $e && (0, Rj.addClassToHtml)(["mrm-active-modal"]);
                case 1:
                  return e.a(2);
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
      (0, g.useEffect)(function () {
        var e = document.querySelector(".edit-site-sidebar__panel-tabs");
        Ve || ie || !Oe ? (e.style.position = "relative", e.style.zIndex = "0", $e && (0, Rj.addClassToHtml)(["mrm-active-modal"])) : (e.style.position = "sticky", e.style.zIndex = "1", $e && (0, Rj.removeClassFromHtml)(["mrm-active-modal"]));
      }, [Ve, ie, Oe]);
      var vt = function () {
        var e = Wj(Fj().m(function e() {
          return Fj().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                (0, y.dispatch)(Lf).updateStepArgs(Xe, et, tt, "notification_email", "body", J.email_body), (0, y.dispatch)(Lf).updateStepArgs(Xe, et, tt, "notification_email", "json_body", J.json_data);
              case 1:
                return e.a(2);
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();
      (0, g.useEffect)(function () {
        ae && ut("/id=".concat(ae));
      }, [ae]), (0, g.useEffect)(function () {
        vt().then();
      }, [J]);
      var gt = h().createElement(pP.default, null),
        ht = function (e, t, n, r) {
          var a, o;
          st ? ((0, y.dispatch)(Lf).setOpenAIModal(!0, t, n, r), Re(n)) : (lt(), ct(!0, gt, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.UnlockWithPremium, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.GetProVersionMsg, Ey.CampaignOpenAILink, "openai"));
        },
        yt = function () {
          var e = Wj(Fj().m(function e(t) {
            return Fj().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!(t.length >= 3)) {
                    e.n = 1;
                    break;
                  }
                  return Fe((0, b.__)("loading...", "mrm")), e.n = 1, Kg(t).then(function (e) {
                    null != e && e.success && (0 === (null == e ? void 0 : e.admins.length) ? Fe((0, b.__)("No admin found", "mrm")) : (We(null == e ? void 0 : e.admins), Fe((0, b.__)("Please enter 3 or more characters", "mrm"))));
                  });
                case 1:
                  return e.a(2);
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }();
      return h().createElement(h().Fragment, null, h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings send-email"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(Ij, null), null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.SendAnEmailNotification), h().createElement("p", {
        className: "sort-description"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.SendEmailNotificationDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings sender-email"
      }, h().createElement("label", {
        htmlFor: "email-sender-email"
      }, " ", null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.FromName, " "), h().createElement(q.TextControl, {
        id: "email-sender-email",
        type: "email",
        placeholder: null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.FromName,
        value: null !== (o = null === (i = Je.settings) || void 0 === i || null === (i = i.notification_email) || void 0 === i ? void 0 : i.from_name) && void 0 !== o ? o : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(Xe, et, tt, "notification_email", "from_name", e);
        }
      })), h().createElement("div", {
        className: "form-group single-settings sender-name"
      }, h().createElement("label", {
        htmlFor: "email-sender-name"
      }, " ", null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.FromEmail, " "), h().createElement(q.TextControl, {
        id: "email-sender-name",
        type: "text",
        placeholder: null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.FromEmail,
        value: null !== (u = null === (s = Je.settings) || void 0 === s || null === (s = s.notification_email) || void 0 === s ? void 0 : s.from_email) && void 0 !== u ? u : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(Xe, et, tt, "notification_email", "from_email", e);
        }
      })), h().createElement("div", {
        className: "form-group single-settings sender-email"
      }, h().createElement("label", {
        htmlFor: "email-sender-email"
      }, " ", null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.Recipients, " "), h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: function (e) {
            return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, Ie));
          }
        },
        value: null !== (m = null === (p = Je.settings) || void 0 === p || null === (p = p.notification_email) || void 0 === p ? void 0 : p.recipients) && void 0 !== m ? m : "",
        onChange: function (e) {
          !function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(Xe, et, tt, "notification_email", "recipients", e);
          }(e);
        },
        onInputChange: function (e) {
          yt(e);
        },
        options: De,
        isMulti: !0,
        placeholder: (0, b.__)("Search admin emails...", "mrm"),
        isSearchable: !0
      })), h().createElement("div", {
        className: "form-group single-settings subject"
      }, h().createElement("label", {
        htmlFor: "email-subject"
      }, null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v || null === (v = v.mint_trans) || void 0 === v ? void 0 : v.EmailSubjectLine, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (_ = window) || void 0 === _ || null === (_ = _.MRM_Vars) || void 0 === _ || null === (_ = _.mint_trans) || void 0 === _ ? void 0 : _.SubjectLineTooltip))), h().createElement("div", {
        className: "pos-relative"
      }, h().createElement(q.TextareaControl, {
        id: "email-subject",
        maxLength: 201,
        placeholder: "Be Specific and concise to spark interest",
        value: null !== (w = null === (E = Je.settings) || void 0 === E || null === (E = E.notification_email) || void 0 === E ? void 0 : E.subject) && void 0 !== w ? w : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(Xe, et, tt, "notification_email", "subject", e);
        },
        ref: ze
      }), h().createElement("div", {
        className: "pos-relative"
      }, h().createElement(Ej, {
        inputRef: ze,
        inputValue: null === (S = Je.settings) || void 0 === S || null === (S = S.notification_email) || void 0 === S ? void 0 : S.subject,
        setInputValue: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(Xe, et, tt, "notification_email", "subject", e);
        },
        tooltip: null === (R = window) || void 0 === R || null === (R = R.MRM_Vars) || void 0 === R || null === (R = R.mint_trans) || void 0 === R ? void 0 : R.personalizeTooltip,
        triggerName: null == nt ? void 0 : nt.trigger_name,
        contentType: "subject"
      })), h().createElement("span", {
        className: "open-ai-icon",
        onClick: function (e) {
          var t;
          return ht(0, "subject", null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.mint_trans.GenerateEmailSubjectLinesUsingAI, "subject");
        }
      }, h().createElement(pP.default, null), h().createElement("p", {
        className: "personalized-tooltip"
      }, (0, b.__)("OpenAI", "mrm")))), (null === (x = Je.settings) || void 0 === x || null === (x = x.notification_email) || void 0 === x ? void 0 : x.subject.length) > 190 && h().createElement("span", {
        className: "hints"
      }, null === (C = window) || void 0 === C || null === (C = C.MRM_Vars) || void 0 === C || null === (C = C.mint_trans) || void 0 === C ? void 0 : C.EmailSubStringLimit)), h().createElement("div", {
        className: "form-group single-settings subject"
      }, h().createElement("label", {
        htmlFor: "email-body"
      }, null === (P = window) || void 0 === P || null === (P = P.MRM_Vars) || void 0 === P || null === (P = P.mint_trans) || void 0 === P ? void 0 : P.EmailPreviewText, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (O = window) || void 0 === O || null === (O = O.MRM_Vars) || void 0 === O || null === (O = O.mint_trans) || void 0 === O ? void 0 : O.EmailPreviewTooltip))), h().createElement("div", {
        className: "pos-relative"
      }, h().createElement(q.TextareaControl, {
        id: "email_preview_text",
        maxLength: 201,
        placeholder: null === (k = window) || void 0 === k || null === (k = k.MRM_Vars) || void 0 === k || null === (k = k.mint_trans) || void 0 === k ? void 0 : k.EmailPreviewTextDemo,
        value: null !== (j = null === (M = Je.settings) || void 0 === M || null === (M = M.notification_email) || void 0 === M ? void 0 : M.preview_text) && void 0 !== j ? j : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(Xe, et, tt, "notification_email", "preview_text", e);
        },
        ref: Be
      }), h().createElement("div", {
        className: "pos-relative"
      }, h().createElement(Ej, {
        inputRef: Be,
        inputValue: null === (T = Je.settings) || void 0 === T || null === (T = T.notification_email) || void 0 === T ? void 0 : T.preview_text,
        setInputValue: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(Xe, et, tt, "notification_email", "email_preview_text", e);
        },
        tooltip: null === (I = window) || void 0 === I || null === (I = I.MRM_Vars) || void 0 === I || null === (I = I.mint_trans) || void 0 === I ? void 0 : I.personalizeTooltip,
        triggerName: null == nt ? void 0 : nt.trigger_name,
        contentType: "preview"
      })), h().createElement("span", {
        className: "open-ai-icon",
        onClick: function (e) {
          var t;
          return ht(0, "preview", null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.mint_trans.GenerateEmailPreviewTextUsingAI, "preview");
        }
      }, h().createElement(pP.default, null), h().createElement("p", {
        className: "personalized-tooltip"
      }, (0, b.__)("OpenAI", "mrm")))), (null === (F = Je.settings) || void 0 === F || null === (F = F.notification_email) || void 0 === F || null === (F = F.preview_text) || void 0 === F ? void 0 : F.length) > 190 && h().createElement("span", {
        className: "hints"
      }, null === (N = window) || void 0 === N || null === (N = N.MRM_Vars) || void 0 === N || null === (N = N.mint_trans) || void 0 === N ? void 0 : N.EmailPreviewStringLimit)), h().createElement("div", {
        className: "form-group single-settings preview-design"
      }, h().createElement("div", {
        className: "add-template-section"
      }, null !== (D = Je.settings) && void 0 !== D && null !== (D = D.notification_email) && void 0 !== D && D.json_body ? h().createElement("div", {
        className: "add-template"
      }, h().createElement("div", {
        className: "thumbnail-image-wrapper"
      }, h().createElement("div", {
        className: "thumbnail-image-bg"
      }, h().createElement("div", {
        className: "hoverlay"
      }, h().createElement("button", {
        type: "button",
        id: "email-preview-btn",
        className: "select-this mintmrm-btn ",
        onClick: function () {
          Me(!0), ke(!Oe);
        }
      }, null === (W = window) || void 0 === W || null === (W = W.MRM_Vars) || void 0 === W || null === (W = W.mint_trans) || void 0 === W ? void 0 : W.PreviewTest)), h().createElement("div", {
        className: "image-wrapper",
        style: {
          backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMTU2IDE2OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWFzayBpZD0iYSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgd2lkdGg9IjE1NiIgaGVpZ2h0PSIxNjkiIHg9IjAiIHk9IjAiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSIxNTQuNTQ1IiBoZWlnaHQ9IjE2Ny42MSIgeD0iLjc3MyIgeT0iLjUwNCIgZmlsbD0iIzJEMzE0OSIgcng9IjYiLz48L21hc2s+PGcgbWFzaz0idXJsKCNhKSI+PHJlY3Qgd2lkdGg9IjE1NCIgaGVpZ2h0PSIxNjYiIHg9IjEuMDg2IiB5PSIxLjUiIGZpbGw9IiNFOEU5RUIiIHN0cm9rZT0iI0U0RTZFQiIgcng9IjUuNSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNCAxMmgxMjh2MTQ0SDE0eiIvPjxyZWN0IHdpZHRoPSIxMDUiIGhlaWdodD0iNCIgeD0iMjYiIHk9IjY4IiBmaWxsPSIjRThFOUVCIiByeD0iMiIvPjxyZWN0IHdpZHRoPSIxMDUiIGhlaWdodD0iNCIgeD0iMjYiIHk9IjgwIiBmaWxsPSIjRThFOUVCIiByeD0iMiIvPjxyZWN0IHdpZHRoPSI3MyIgaGVpZ2h0PSI0IiB4PSIyNiIgeT0iOTIiIGZpbGw9IiNFOEU5RUIiIHJ4PSIyIi8+PHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjMxIiB4PSI0MyIgeT0iMjQiIGZpbGw9IiMwMkM0RkIiIHJ4PSI0Ii8+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjM2IiB4PSIyNiIgeT0iMTA4IiBmaWxsPSIjRThFOUVCIiByeD0iNCIvPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0IiB4PSI4MiIgeT0iMTA4IiBmaWxsPSIjNTczQkZGIiByeD0iMiIvPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0IiB4PSI4MiIgeT0iMTE5IiBmaWxsPSIjRThFOUVCIiByeD0iMiIvPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0IiB4PSI4MiIgeT0iMTMwIiBmaWxsPSIjRThFOUVCIiByeD0iMiIvPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0IiB4PSI4MiIgeT0iMTQxIiBmaWxsPSIjRThFOUVCIiByeD0iMiIvPjwvZz48bWFzayBpZD0iYiIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgd2lkdGg9IjcwIiBoZWlnaHQ9IjMxIiB4PSI0MyIgeT0iMjQiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSI3MCIgaGVpZ2h0PSIzMSIgeD0iNDMiIHk9IjI0IiBmaWxsPSIjMDJDNEZCIiByeD0iNCIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2IpIj48Y2lyY2xlIGN4PSI1OC41IiBjeT0iNDYuNSIgcj0iMTcuNSIgZmlsbD0iIzMwRDFGRiIvPjxjaXJjbGUgY3g9Ijg0LjUiIGN5PSI0OS41IiByPSIxMy41IiBmaWxsPSIjMDBCQkYwIi8+PC9nPjwvc3ZnPg==")'
        }
      }))), h().createElement("span", {
        className: "edit-mode",
        onClick: ft
      }, h().createElement(mP, null), null === (z = window) || void 0 === z || null === (z = z.MRM_Vars) || void 0 === z || null === (z = z.mint_trans) || void 0 === z ? void 0 : z.EditTemplate)) : h().createElement("div", {
        className: "add-template",
        onClick: pt
      }, h().createElement(gP, null), h().createElement("span", {
        className: "design-mode"
      }, null === (B = window) || void 0 === B || null === (B = B.MRM_Vars) || void 0 === B || null === (B = B.mint_trans) || void 0 === B ? void 0 : B.DesignYourEmail, h().createElement(sP, null)))))), h().createElement(AP, {
        isOpenPreview: Ae,
        isClosePreview: Oe,
        setIsClosePreview: ke,
        campaignStatus: "draft",
        isCloseBuilder: me,
        setIsCloseBuilder: pe,
        emailType: "automation",
        automationData: null == Je || null === (L = Je.settings) || void 0 === L ? void 0 : L.notification_email,
        setIsEmailBuilderOpen: le
      }))), (!Z && U || Ve) && h().createElement($O, {
        isOpen: Ve,
        setIsOpen: He,
        emailIndex: 1,
        setIsEmailBuilderOpen: le,
        setIsTemplateBuilder: ge,
        setIsCloseBuilder: pe,
        setIsTemplate: Y,
        setBuilderChanged: se,
        isTemplate: U,
        setEmailBody: X,
        emailData: {},
        isClose: Z,
        setIsClose: $,
        automationData: null === (V = Je.settings) || void 0 === V ? void 0 : V.notification_email,
        isEmailBuilderOpen: ie,
        setStartFromScratch: Ze
      }), h().createElement(IP, {
        refresh: we,
        setRefresh: Ee,
        isOpen: ve,
        isCloseBuilder: me,
        isEmailBuilderOpen: ie,
        isNewCampaign: !1,
        emailData: {},
        campaignData: {},
        selectedEmailIndex: 1,
        setEmailBody: X,
        setIsEmailBuilderOpen: le,
        isTemplate: U,
        setIsTemplate: Y,
        setIsClose: $,
        setIsCloseBuilder: function () {
          pe("none"), $e && (0, Rj.removeClassFromHtml)(["mrm-active-modal"]);
        },
        setCloseTemplateSelection: function (e) {
          "hide" === e && ($(!0), $e && (0, Rj.removeClassFromHtml)(["mrm-active-modal"]));
        },
        setIsReadonly: be,
        isReadonly: ye,
        mintPage: "automation",
        setBackRefresh: ne,
        backRefresh: te,
        isClose: Z,
        setBuilderChanged: se,
        builderChanged: ue,
        automationData: null === (H = Je.settings) || void 0 === H ? void 0 : H.notification_email,
        automationArray: nt,
        setMaybeSave: at,
        setNextButtonClicked: Ce,
        setActivateAutoSave: it,
        setUpdateClicked: ot,
        updateClicked: mt,
        selectedStep: Je,
        dynamicCoupons: Ue,
        startFromScratch: Qe,
        triggerName: null == nt ? void 0 : nt.trigger_name
      }));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function qj() {
  return React.createElement("svg", {
    width: "28",
    height: "22",
    fill: "none",
    viewBox: "0 0 28 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".8",
    d: "M25.684.94H7.987c-.725 0-1.316.59-1.316 1.314v1.134h-1.52c-.725 0-1.315.59-1.315 1.316v1.134h-1.52C1.59 5.838 1 6.428 1 7.154v12.59c0 .726.59 1.317 1.316 1.317h17.698c.726 0 1.316-.59 1.316-1.316V18.61h1.52c.725 0 1.316-.59 1.316-1.316v-1.133h1.518c.726 0 1.316-.59 1.316-1.316V2.254c0-.725-.59-1.315-1.316-1.315v0zm-12.48 12.51l7.313-6.318v12.633l-7.313-6.316zm-2.038.687L2.499 6.65h17.332l-8.665 7.487zm-9.352 5.63l-.002-.022V7.154l.002-.022 7.312 6.317-7.312 6.318zm.685.481l7.249-6.262 1.152.995a.405.405 0 00.531 0l1.152-.995 7.25 6.262H2.499zm20.854-2.953a.504.504 0 01-.503.503h-1.52V7.154c0-.726-.59-1.316-1.316-1.316H4.648V4.704c0-.278.226-.504.504-.504H22.85a.51.51 0 01.503.504v12.59h0zm2.834-2.449a.504.504 0 01-.503.504h-1.518V4.704c0-.726-.59-1.316-1.316-1.316H7.484V2.254c0-.277.226-.502.503-.502h17.697c.278 0 .504.225.504.502v12.592h0z"
  }));
}
