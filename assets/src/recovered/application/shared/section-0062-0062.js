// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Mj,
  Tj = {
    key: "sendMail",
    group: "actions",
    type: "action",
    package: "free",
    category: "mailmint",
    title: (0, b._x)("Send An Email", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: null === (Sj = window) || void 0 === Sj || null === (Sj = Sj.MRM_Vars) || void 0 === Sj || null === (Sj = Sj.mint_trans) || void 0 === Sj ? void 0 : Sj.ActionDescription,
    subtitle: function (e) {
      var t, n, r;
      return "" === (null === (t = e.settings) || void 0 === t || null === (t = t.message_data) || void 0 === t ? void 0 : t.subject) ? null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet : null === (r = e.settings) || void 0 === r || null === (r = r.message_data) || void 0 === r ? void 0 : r.subject;
    },
    icon: function () {
      return React.createElement("svg", {
        width: "23",
        height: "22",
        fill: "none",
        viewBox: "0 0 23 22",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".2",
        d: "M3.423 17.667h7.269c.214 0 .42-.088.571-.244a.847.847 0 00.237-.59.847.847 0 00-.237-.589.795.795 0 00-.571-.244H3.423a.795.795 0 01-.571-.244.847.847 0 01-.237-.589V6.783l6.938 4.409a2.123 2.123 0 002.278 0l6.938-4.409v2.55c0 .222.085.434.236.59a.795.795 0 00.571.244c.214 0 .42-.088.571-.244a.847.847 0 00.237-.59V3.5a2.54 2.54 0 00-.71-1.768A2.386 2.386 0 0017.961 1H3.423c-.643 0-1.259.263-1.713.732A2.541 2.541 0 001 3.5v11.667c0 .663.255 1.299.71 1.768.454.469 1.07.732 1.713.732zm0-15h14.538c.214 0 .42.088.571.244a.847.847 0 01.237.589v1.333l-7.786 4.942a.56.56 0 01-.582 0L2.615 4.833V3.5c0-.221.085-.433.237-.59a.795.795 0 01.571-.243zm14.767 9.408l-4.846 5a.837.837 0 00-.235.592v2.5c0 .221.085.433.237.59a.795.795 0 00.571.243h2.423a.788.788 0 00.573-.241l4.846-5a.834.834 0 00.24-.592.856.856 0 00-.24-.592l-2.422-2.5a.807.807 0 00-.574-.246.786.786 0 00-.573.246zm-2.181 7.259h-1.284v-1.325l4.038-4.167 1.284 1.325-4.038 4.167z"
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
        G,
        U,
        Y,
        Q,
        Z,
        $,
        K,
        J,
        X,
        ee = kj((0, g.useState)(!0), 2),
        te = ee[0],
        ne = ee[1],
        re = kj((0, g.useState)(!0), 2),
        ae = re[0],
        oe = re[1],
        ie = kj((0, g.useState)({}), 2),
        le = ie[0],
        ce = ie[1],
        ue = kj((0, g.useState)(!0), 2),
        se = ue[0],
        de = ue[1],
        me = kj((0, g.useState)(), 2),
        pe = me[0],
        fe = (me[1], kj((0, g.useState)(!1), 2)),
        ve = fe[0],
        ge = fe[1],
        he = kj((0, g.useState)(!1), 2),
        ye = he[0],
        be = he[1],
        _e = kj((0, g.useState)("none"), 2),
        we = _e[0],
        Ee = _e[1],
        Se = kj((0, g.useState)(!0), 2),
        Re = Se[0],
        xe = Se[1],
        Ce = kj((0, g.useState)(!1), 2),
        Pe = Ce[0],
        Oe = Ce[1],
        ke = kj((0, g.useState)(!0), 2),
        je = ke[0],
        Ae = ke[1],
        Me = kj((0, g.useState)(""), 2),
        Te = (Me[0], Me[1]),
        Ie = kj((0, g.useState)(!1), 2),
        Fe = (Ie[0], Ie[1]),
        Ne = kj((0, g.useState)(!0), 2),
        De = Ne[0],
        We = Ne[1],
        ze = kj((0, g.useState)(!0), 2),
        Be = ze[0],
        Le = ze[1],
        Ve = (0, g.useRef)(null),
        He = (0, g.useRef)(null),
        Ge = kj((0, g.useState)(!1), 2),
        Ue = Ge[0],
        qe = Ge[1],
        Ye = kj((0, g.useState)([]), 2),
        Qe = Ye[0],
        Ze = Ye[1],
        $e = kj((0, g.useState)(!1), 2),
        Ke = $e[0],
        Je = $e[1],
        Xe = -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome"),
        et = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            automationData: e(Lf).getAutomationData(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        tt = et.selectedStep,
        nt = et.selectedStepIndex,
        rt = et.selectedStepCondition,
        at = et.selectedLogicalStepIndex,
        ot = (et.errors, et.automationData);
      et.ctaProModal, (0, g.useEffect)(function () {
        var e,
          t = null === (e = function (e) {
            return function (e) {
              if (Array.isArray(e)) return Aj(e);
            }(e) || function (e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || jj(e) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }(null == ot ? void 0 : ot.steps)) || void 0 === e ? void 0 : e.filter(function (e) {
            return "createCoupon" === (null == e ? void 0 : e.key);
          });
        if (!(0, A.isEmpty)(t)) {
          var n = {};
          t.forEach(function (e) {
            var t;
            n["mint_wc_dynamic_coupon id=".concat(null == e ? void 0 : e.step_id)] = (null == e || null === (t = e.settings) || void 0 === t || null === (t = t.wc_create_coupon_settings) || void 0 === t || null === (t = t.general_settings) || void 0 === t ? void 0 : t.title) || (null == e ? void 0 : e.step_id);
          }), n.label = "WC Coupons", Ze(n);
        }
      }, []);
      var it = (0, y.useDispatch)(Lf),
        lt = it.setMaybeSave,
        ct = it.setUpdateClicked,
        ut = it.setActivateAutoSave,
        st = it.closeSidebar,
        dt = it.setCtaProModal,
        mt = (0, f.Zp)(),
        pt = null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.is_mailmint_pro_license_active,
        ft = (0, y.useSelect)(function (e) {
          return {
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            isShowAiModal: e(Lf).getOpenAIModal(),
            selectedStep: e(Lf).getSelectedStep(),
            updateClicked: e(Lf).getUpdateClicked()
          };
        }, []),
        vt = (ft.isShowAiModal, ft.updateClicked),
        gt = function () {
          var e = Oj(xj().m(function e() {
            return xj().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  ne(!0), oe(!1), qe(!0), Xe && (0, Rj.addClassToHtml)(["mrm-active-modal"]);
                case 1:
                  return e.a(2);
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
        ht = function () {
          var e = Oj(xj().m(function e() {
            return xj().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  oe(!1), ge(!0), xe(!0), Ee(!we), ne(!1), Xe && (0, Rj.addClassToHtml)(["mrm-active-modal"]);
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
        Ue || ve || !De ? (e.style.position = "relative", e.style.zIndex = "0", Xe && (0, Rj.addClassToHtml)(["mrm-active-modal"])) : (e.style.position = "sticky", e.style.zIndex = "1", Xe && (0, Rj.removeClassFromHtml)(["mrm-active-modal"]));
      }, [Ue, ve, De]);
      var yt = function () {
        var e = Oj(xj().m(function e() {
          return xj().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                (0, y.dispatch)(Lf).updateStepArgs(nt, rt, at, "message_data", "body", le.email_body), (0, y.dispatch)(Lf).updateStepArgs(nt, rt, at, "message_data", "json_body", le.json_data);
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
        pe && mt("/id=".concat(pe));
      }, [pe]), (0, g.useEffect)(function () {
        yt().then();
      }, [le]);
      var bt = h().createElement(pP.default, null),
        _t = function (e, t, n, r) {
          var a, o;
          pt ? ((0, y.dispatch)(Lf).setOpenAIModal(!0, t, n, r), Te(n)) : (st(), dt(!0, bt, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.UnlockWithPremium, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.GetProVersionMsg, Ey.CampaignOpenAILink, "openai"));
        };
      return h().createElement(h().Fragment, null, h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings send-email"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(fP, null), null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.SendAnEmail), h().createElement("p", {
        className: "sort-description"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.SendAnEmailDescription)), h().createElement("div", {
        className: "form-group single-settings subject transactional-email"
      }, h().createElement("label", {
        htmlFor: "email-subject"
      }, h().createElement("input", {
        type: "checkbox",
        id: "mark-transactional",
        checked: (null === (r = tt.settings) || void 0 === r || null === (r = r.message_data) || void 0 === r ? void 0 : r.make_transactional) || !1,
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(nt, rt, at, "message_data", "make_transactional", e.target.checked);
        }
      }), null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.MarkThisEmailAsTransactional, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.MarkThisEmailAsTransactionalTooltip)))), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings sender-email"
      }, h().createElement("label", {
        htmlFor: "email-sender-email"
      }, " ", null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.SenderEmail, " "), h().createElement(q.TextControl, {
        id: "email-sender-email",
        type: "email",
        placeholder: null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.EnterSenderEmail,
        value: null !== (c = null === (u = tt.settings) || void 0 === u || null === (u = u.message_data) || void 0 === u ? void 0 : u.sender_email) && void 0 !== c ? c : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(nt, rt, at, "message_data", "sender_email", e);
        }
      })), h().createElement("div", {
        className: "form-group single-settings sender-name"
      }, h().createElement("label", {
        htmlFor: "email-sender-name"
      }, " ", null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s || null === (s = s.mint_trans) || void 0 === s ? void 0 : s.SenderName, " "), h().createElement(q.TextControl, {
        id: "email-sender-name",
        type: "text",
        placeholder: null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.EnterSenderName,
        value: null !== (m = null === (p = tt.settings) || void 0 === p || null === (p = p.message_data) || void 0 === p ? void 0 : p.sender_name) && void 0 !== m ? m : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(nt, rt, at, "message_data", "sender_name", e);
        }
      })), h().createElement("div", {
        className: "form-group single-settings sender-email"
      }, h().createElement("label", {
        htmlFor: "email-sender-email"
      }, " ", null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v || null === (v = v.mint_trans) || void 0 === v ? void 0 : v.ReplyEmail, " "), h().createElement(q.TextControl, {
        id: "email-sender-email",
        type: "email",
        placeholder: null === (_ = window) || void 0 === _ || null === (_ = _.MRM_Vars) || void 0 === _ || null === (_ = _.mint_trans) || void 0 === _ ? void 0 : _.EnterReplyEmail,
        value: null !== (w = null === (E = tt.settings) || void 0 === E || null === (E = E.message_data) || void 0 === E ? void 0 : E.reply_email) && void 0 !== w ? w : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(nt, rt, at, "message_data", "reply_email", e);
        }
      })), h().createElement("div", {
        className: "form-group single-settings sender-name"
      }, h().createElement("label", {
        htmlFor: "email-sender-name"
      }, " ", null === (S = window) || void 0 === S || null === (S = S.MRM_Vars) || void 0 === S || null === (S = S.mint_trans) || void 0 === S ? void 0 : S.ReplyName, " "), h().createElement(q.TextControl, {
        id: "email-sender-name",
        type: "text",
        placeholder: null === (R = window) || void 0 === R || null === (R = R.MRM_Vars) || void 0 === R || null === (R = R.mint_trans) || void 0 === R ? void 0 : R.EnterReplyName,
        value: null !== (x = null === (C = tt.settings) || void 0 === C || null === (C = C.message_data) || void 0 === C ? void 0 : C.reply_name) && void 0 !== x ? x : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(nt, rt, at, "message_data", "reply_name", e);
        }
      })), h().createElement("div", {
        className: "form-group single-settings subject"
      }, h().createElement("label", {
        htmlFor: "email-subject"
      }, null === (P = window) || void 0 === P || null === (P = P.MRM_Vars) || void 0 === P || null === (P = P.mint_trans) || void 0 === P ? void 0 : P.EmailSubjectLine, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (O = window) || void 0 === O || null === (O = O.MRM_Vars) || void 0 === O || null === (O = O.mint_trans) || void 0 === O ? void 0 : O.SubjectLineTooltip))), h().createElement("div", {
        className: "pos-relative"
      }, h().createElement(q.TextareaControl, {
        id: "email-subject",
        maxLength: 201,
        placeholder: "Be Specific and concise to spark interest",
        value: null !== (k = null === (j = tt.settings) || void 0 === j || null === (j = j.message_data) || void 0 === j ? void 0 : j.subject) && void 0 !== k ? k : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(nt, rt, at, "message_data", "subject", e);
        },
        ref: Ve
      }), h().createElement("div", {
        className: "pos-relative"
      }, h().createElement(Ej, {
        inputRef: Ve,
        inputValue: null === (M = tt.settings) || void 0 === M || null === (M = M.message_data) || void 0 === M ? void 0 : M.subject,
        setInputValue: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(nt, rt, at, "message_data", "subject", e);
        },
        tooltip: null === (T = window) || void 0 === T || null === (T = T.MRM_Vars) || void 0 === T || null === (T = T.mint_trans) || void 0 === T ? void 0 : T.personalizeTooltip,
        triggerName: null == ot ? void 0 : ot.trigger_name,
        contentType: "subject",
        dynamicCoupons: Qe
      })), h().createElement("span", {
        className: "open-ai-icon",
        onClick: function (e) {
          var t;
          return _t(0, "subject", null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.mint_trans.GenerateEmailSubjectLinesUsingAI, "subject");
        }
      }, h().createElement(pP.default, null), h().createElement("p", {
        className: "personalized-tooltip"
      }, (0, b.__)("OpenAI", "mrm")))), (null === (I = tt.settings) || void 0 === I || null === (I = I.message_data) || void 0 === I ? void 0 : I.subject.length) > 190 && h().createElement("span", {
        className: "hints"
      }, null === (F = window) || void 0 === F || null === (F = F.MRM_Vars) || void 0 === F || null === (F = F.mint_trans) || void 0 === F ? void 0 : F.EmailSubStringLimit)), h().createElement("div", {
        className: "form-group single-settings subject"
      }, h().createElement("label", {
        htmlFor: "email-subject"
      }, null === (N = window) || void 0 === N || null === (N = N.MRM_Vars) || void 0 === N || null === (N = N.mint_trans) || void 0 === N ? void 0 : N.EmailPreviewText, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (D = window) || void 0 === D || null === (D = D.MRM_Vars) || void 0 === D || null === (D = D.mint_trans) || void 0 === D ? void 0 : D.EmailPreviewTooltip))), h().createElement("div", {
        className: "pos-relative"
      }, h().createElement(q.TextareaControl, {
        id: "email_preview_text",
        maxLength: 201,
        placeholder: null === (W = window) || void 0 === W || null === (W = W.MRM_Vars) || void 0 === W || null === (W = W.mint_trans) || void 0 === W ? void 0 : W.EmailPreviewTextDemo,
        value: null !== (z = null === (B = tt.settings) || void 0 === B || null === (B = B.message_data) || void 0 === B ? void 0 : B.email_preview_text) && void 0 !== z ? z : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(nt, rt, at, "message_data", "email_preview_text", e);
        },
        ref: He
      }), h().createElement("div", {
        className: "pos-relative"
      }, h().createElement(Ej, {
        inputRef: He,
        inputValue: null === (L = tt.settings) || void 0 === L || null === (L = L.message_data) || void 0 === L ? void 0 : L.email_preview_text,
        setInputValue: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(nt, rt, at, "message_data", "email_preview_text", e);
        },
        tooltip: null === (V = window) || void 0 === V || null === (V = V.MRM_Vars) || void 0 === V || null === (V = V.mint_trans) || void 0 === V ? void 0 : V.personalizeTooltip,
        triggerName: null == ot ? void 0 : ot.trigger_name,
        contentType: "preview",
        dynamicCoupons: Qe
      })), h().createElement("span", {
        className: "open-ai-icon",
        onClick: function (e) {
          var t;
          return _t(0, "preview", null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.mint_trans.GenerateEmailPreviewTextUsingAI, "preview");
        }
      }, h().createElement(pP.default, null), h().createElement("p", {
        className: "personalized-tooltip"
      }, (0, b.__)("OpenAI", "mrm")))), (null === (H = tt.settings) || void 0 === H || null === (H = H.message_data) || void 0 === H || null === (H = H.email_preview_text) || void 0 === H ? void 0 : H.length) > 190 && h().createElement("span", {
        className: "hints"
      }, null === (G = window) || void 0 === G || null === (G = G.MRM_Vars) || void 0 === G || null === (G = G.mint_trans) || void 0 === G ? void 0 : G.EmailPreviewStringLimit)), h().createElement("div", {
        className: "form-group single-settings preview-design"
      }, h().createElement("label", {
        htmlFor: ""
      }, " ", null === (U = window) || void 0 === U || null === (U = U.MRM_Vars) || void 0 === U || null === (U = U.mint_trans) || void 0 === U ? void 0 : U.Design, " "), h().createElement("div", {
        className: "add-template-section"
      }, null !== (Y = tt.settings) && void 0 !== Y && null !== (Y = Y.message_data) && void 0 !== Y && Y.json_body ? h().createElement("div", {
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
          Le(!0), We(!De);
        }
      }, null === (Q = window) || void 0 === Q || null === (Q = Q.MRM_Vars) || void 0 === Q || null === (Q = Q.mint_trans) || void 0 === Q ? void 0 : Q.PreviewTest)), h().createElement("div", {
        className: "image-wrapper",
        style: {
          backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMTU2IDE2OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWFzayBpZD0iYSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgd2lkdGg9IjE1NiIgaGVpZ2h0PSIxNjkiIHg9IjAiIHk9IjAiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSIxNTQuNTQ1IiBoZWlnaHQ9IjE2Ny42MSIgeD0iLjc3MyIgeT0iLjUwNCIgZmlsbD0iIzJEMzE0OSIgcng9IjYiLz48L21hc2s+PGcgbWFzaz0idXJsKCNhKSI+PHJlY3Qgd2lkdGg9IjE1NCIgaGVpZ2h0PSIxNjYiIHg9IjEuMDg2IiB5PSIxLjUiIGZpbGw9IiNFOEU5RUIiIHN0cm9rZT0iI0U0RTZFQiIgcng9IjUuNSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNCAxMmgxMjh2MTQ0SDE0eiIvPjxyZWN0IHdpZHRoPSIxMDUiIGhlaWdodD0iNCIgeD0iMjYiIHk9IjY4IiBmaWxsPSIjRThFOUVCIiByeD0iMiIvPjxyZWN0IHdpZHRoPSIxMDUiIGhlaWdodD0iNCIgeD0iMjYiIHk9IjgwIiBmaWxsPSIjRThFOUVCIiByeD0iMiIvPjxyZWN0IHdpZHRoPSI3MyIgaGVpZ2h0PSI0IiB4PSIyNiIgeT0iOTIiIGZpbGw9IiNFOEU5RUIiIHJ4PSIyIi8+PHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjMxIiB4PSI0MyIgeT0iMjQiIGZpbGw9IiMwMkM0RkIiIHJ4PSI0Ii8+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjM2IiB4PSIyNiIgeT0iMTA4IiBmaWxsPSIjRThFOUVCIiByeD0iNCIvPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0IiB4PSI4MiIgeT0iMTA4IiBmaWxsPSIjNTczQkZGIiByeD0iMiIvPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0IiB4PSI4MiIgeT0iMTE5IiBmaWxsPSIjRThFOUVCIiByeD0iMiIvPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0IiB4PSI4MiIgeT0iMTMwIiBmaWxsPSIjRThFOUVCIiByeD0iMiIvPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0IiB4PSI4MiIgeT0iMTQxIiBmaWxsPSIjRThFOUVCIiByeD0iMiIvPjwvZz48bWFzayBpZD0iYiIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgd2lkdGg9IjcwIiBoZWlnaHQ9IjMxIiB4PSI0MyIgeT0iMjQiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSI3MCIgaGVpZ2h0PSIzMSIgeD0iNDMiIHk9IjI0IiBmaWxsPSIjMDJDNEZCIiByeD0iNCIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2IpIj48Y2lyY2xlIGN4PSI1OC41IiBjeT0iNDYuNSIgcj0iMTcuNSIgZmlsbD0iIzMwRDFGRiIvPjxjaXJjbGUgY3g9Ijg0LjUiIGN5PSI0OS41IiByPSIxMy41IiBmaWxsPSIjMDBCQkYwIi8+PC9nPjwvc3ZnPg==")'
        }
      }))), h().createElement("span", {
        className: "edit-mode",
        onClick: ht
      }, h().createElement(mP, null), null === (Z = window) || void 0 === Z || null === (Z = Z.MRM_Vars) || void 0 === Z || null === (Z = Z.mint_trans) || void 0 === Z ? void 0 : Z.EditTemplate)) : h().createElement("div", {
        className: "add-template",
        onClick: gt
      }, h().createElement(gP, null), h().createElement("span", {
        className: "design-mode"
      }, null === ($ = window) || void 0 === $ || null === ($ = $.MRM_Vars) || void 0 === $ || null === ($ = $.mint_trans) || void 0 === $ ? void 0 : $.DesignYourEmail, h().createElement(sP, null)))))), h().createElement(AP, {
        isOpenPreview: Be,
        isClosePreview: De,
        setIsClosePreview: We,
        campaignStatus: "draft",
        isCloseBuilder: we,
        setIsCloseBuilder: Ee,
        emailType: "automation",
        automationData: null == tt || null === (K = tt.settings) || void 0 === K ? void 0 : K.message_data,
        setIsEmailBuilderOpen: ge
      }))), (!ae && te || Ue) && h().createElement($O, {
        isOpen: Ue,
        setIsOpen: qe,
        emailIndex: 1,
        setIsEmailBuilderOpen: ge,
        setIsTemplateBuilder: xe,
        setIsCloseBuilder: Ee,
        setIsTemplate: ne,
        setBuilderChanged: be,
        isTemplate: te,
        setEmailBody: ce,
        emailData: {},
        isClose: ae,
        setIsClose: oe,
        automationData: null === (J = tt.settings) || void 0 === J ? void 0 : J.message_data,
        isEmailBuilderOpen: ve,
        setStartFromScratch: Je
      }), h().createElement(IP, {
        refresh: je,
        setRefresh: Ae,
        isOpen: Re,
        isCloseBuilder: we,
        isEmailBuilderOpen: ve,
        isNewCampaign: !1,
        emailData: {},
        campaignData: {},
        selectedEmailIndex: 1,
        setEmailBody: ce,
        setIsEmailBuilderOpen: ge,
        isTemplate: te,
        setIsTemplate: ne,
        setIsClose: oe,
        setIsCloseBuilder: function () {
          Ee("none"), Xe && (0, Rj.removeClassFromHtml)(["mrm-active-modal"]);
        },
        setCloseTemplateSelection: function (e) {
          "hide" === e && (oe(!0), Xe && (0, Rj.removeClassFromHtml)(["mrm-active-modal"]));
        },
        setIsReadonly: Oe,
        isReadonly: Pe,
        mintPage: "automation",
        setBackRefresh: de,
        backRefresh: se,
        isClose: ae,
        setBuilderChanged: be,
        builderChanged: ye,
        automationData: null === (X = tt.settings) || void 0 === X ? void 0 : X.message_data,
        automationArray: ot,
        setMaybeSave: lt,
        setNextButtonClicked: Fe,
        setActivateAutoSave: ut,
        setUpdateClicked: ct,
        updateClicked: vt,
        selectedStep: tt,
        dynamicCoupons: Qe,
        startFromScratch: Ke,
        triggerName: null == ot ? void 0 : ot.trigger_name
      }));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function Ij() {
  return React.createElement("svg", {
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("mask", {
    id: "a",
    style: {
      masktype: "luminance"
    },
    width: "20",
    height: "20",
    x: "0",
    y: "0",
    maskUnits: "userSpaceOnUse"
  }, React.createElement("path", {
    fill: "#fff",
    stroke: "#fff",
    strokeWidth: "1.333",
    d: "M19.333 19.333V.667H.667v18.666h18.666z"
  })), React.createElement("g", {
    stroke: "#2D3149",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.6",
    mask: "url(#a)"
  }, React.createElement("path", {
    d: "M19.219 10.82v4.492a3.906 3.906 0 01-3.907 3.907H4.688A3.906 3.906 0 01.78 15.312v-6.6a3.906 3.906 0 013.906-3.906h3.125"
  }), React.createElement("path", {
    d: "M3.906 10.117l3.725 2.833a3.906 3.906 0 004.738 0l1.303-.997m5.547-7.031a4.14 4.14 0 11-8.282 0 4.14 4.14 0 018.282 0z"
  }), React.createElement("path", {
    d: "M15.078 6.133V3.71h-.781"
  })));
}

function Fj() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Nj(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Nj(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Nj(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Nj(d, "constructor", u), Nj(u, "constructor", c), c.displayName = "GeneratorFunction", Nj(u, a, "GeneratorFunction"), Nj(d), Nj(d, a, "Generator"), Nj(d, r, function () {
    return this;
  }), Nj(d, "toString", function () {
    return "[object Generator]";
  }), (Fj = function () {
    return {
      w: o,
      m
    };
  })();
}

function Nj(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Nj = function (e, t, n, r) {
    function o(t, n) {
      Nj(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Nj(e, t, n, r);
}

function Dj(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Wj(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Dj(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Dj(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
