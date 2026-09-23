// Reconstructed Webpack factory 86840; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => m
  });
  var l = n(41594),
    a = n(84329),
    i = (n(58088), n(98845)),
    o = n(44098),
    r = n.n(o),
    c = n(49050);
  function u(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != n) {
        var l,
          a,
          i,
          o,
          r = [],
          c = !0,
          u = !1;
        try {
          if (i = (n = n.call(e)).next, 0 === t) {
            if (Object(n) !== n) return;
            c = !1;
          } else for (; !(c = (l = i.call(n)).done) && (r.push(l.value), r.length !== t); c = !0);
        } catch (e) {
          u = !0, a = e;
        } finally {
          try {
            if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return;
          } finally {
            if (u) throw a;
          }
        }
        return r;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if ("string" == typeof e) return d(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, l = Array(t); n < t; n++) l[n] = e[n];
    return l;
  }
  var s = function (e) {
    var t,
      n,
      o,
      d,
      s = e.onCancel,
      m = void 0 === s ? function () {
        return console.error("No Function Found For Cancel");
      } : s,
      f = e.isOpen,
      p = void 0 !== f && f,
      g = e.alertType,
      v = e.alertMessage,
      h = e.emailData,
      b = e.activeEditor,
      _ = e.classicEmailContent,
      y = e.dataSource,
      E = e.setTestMailMessage,
      w = e.setTestMailMessageColor,
      k = e.values,
      C = e.automationData,
      x = e.mintPage,
      N = u((0, l.useState)(null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.current_user_email), 2),
      T = N[0],
      P = N[1],
      R = u((0, l.useState)("automation" === x ? null == C ? void 0 : C.subject : null == h ? void 0 : h.email_subject), 2),
      S = R[0],
      B = R[1],
      O = u((0, l.useState)(!1), 2),
      F = O[0],
      M = O[1],
      A = (0, l.useCallback)(function () {
        var e;
        E(""), M(!0);
        var t = "advanced-builder" === b ? r()((0, c.JsonToMjml)({
            data: k.content,
            mode: "production",
            context: k.content,
            dataSource: y
          }), {
            validationLevel: "soft"
          }).html : _,
          n = {
            to: T,
            from: null != h && h.sender_email ? null == h ? void 0 : h.sender_email : null == C ? void 0 : C.sender_email,
            sender_name: null != h && h.sender_name ? null == h ? void 0 : h.sender_name : null == C ? void 0 : C.sender_name,
            reply: null != h && h.reply_email ? null == h ? void 0 : h.reply_email : null == C ? void 0 : C.reply_email,
            reply_name: null != h && h.reply_name ? null == h ? void 0 : h.reply_name : null == C ? void 0 : C.reply_name,
            subject: S,
            content: t,
            current_user: null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.current_userID,
            email_preview_text: null != h && h.email_preview_text ? null == h ? void 0 : h.email_preview_text : null == C ? void 0 : C.email_preview_text,
            editor_type: b
          };
        (0, i.sendTestEmail)(n).then(function (e) {
          E(e.message), M(!1), w(e.status);
          var t = setTimeout(function () {
            E("");
          }, 5e3);
          return function () {
            return clearTimeout(t);
          };
        });
      }, [b, _, y, h, i.sendTestEmail, T, S, k]);
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: "test-email-modal mintmrm-delete-alert-wrapper ".concat(p ? "show-modal" : "")
    }, React.createElement("div", {
      className: "mintmrm-delete-confirmation"
    }, React.createElement("div", {
      className: "delete-confirmation-header"
    }, React.createElement("h3", null, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.SendTestEmail), React.createElement("div", {
      className: "cross-icon",
      onClick: m
    }, React.createElement(a.A, null))), React.createElement("div", {
      className: "delete-confirmation-body"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      htmlFor: "test-subject-line",
      id: "test-subject-line",
      "aria-required": !0
    }, "Subject line", React.createElement("span", {
      className: "required-mark"
    }, "*")), React.createElement("input", {
      type: "text",
      name: "test-subject-line",
      placeholder: "Enter subject line",
      onChange: function (e) {
        B(e.target.value);
      },
      value: S
    })), React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      htmlFor: "test-email",
      id: "test-email",
      "aria-required": !0
    }, "Send a test to", React.createElement("span", {
      className: "required-mark"
    }, "*")), React.createElement("input", {
      type: "email",
      name: "test-email",
      placeholder: "Ex: freddie@mailmint.com, mannie@mailmint.com...",
      onChange: function (e) {
        P(e.target.value);
      },
      value: T
    }), React.createElement("span", null, "Use commas to separate multiple emails."))), React.createElement("ul", {
      className: "mintmrm-delete-confirm-btn"
    }, React.createElement("li", {
      className: "alert-message ".concat("error" === g ? "mintmrm-error" : "")
    }, React.createElement("p", null, v)), React.createElement("li", {
      className: "cancel"
    }, React.createElement("button", {
      className: "mintmrm-btn outline",
      onClick: function () {
        return m();
      }
    }, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.Cancel)), React.createElement("li", null, React.createElement("button", {
      className: "mintmrm-btn",
      onClick: function () {
        return A();
      },
      disabled: F
    }, null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.Send, F && React.createElement("span", {
      className: "mintmrm-loader"
    })))))));
  };
  const m = (0, l.memo)(s);
});
