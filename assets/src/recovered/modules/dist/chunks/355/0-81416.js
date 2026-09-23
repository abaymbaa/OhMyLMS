// Reconstructed Webpack factory 81416; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => c
  });
  var l = n(41594),
    a = n.n(l),
    i = n(44254),
    o = (n(12470), n(20892));
  function r(e) {
    var t,
      n,
      l = e.confirmModal,
      r = e.onCancelConfirm,
      c = e.onCloseConfirm,
      u = e.header,
      d = e.label,
      s = e.showProgressBar,
      m = void 0 !== s && s,
      f = e.percentage,
      p = e.disableBothButtons,
      g = void 0 !== p && p;
    return (0, o.A)(r), a().createElement(a().Fragment, null, a().createElement("div", {
      className: l ? "test-email-modal mintmrm-delete-alert-wrapper show-modal" : "test-email-modal mintmrm-delete-alert-wrapper"
    }, a().createElement("div", {
      className: "mintmrm-delete-confirmation"
    }, a().createElement("div", {
      className: "delete-confirmation-header"
    }, a().createElement("h3", null, u), a().createElement("div", {
      className: "cross-icon",
      onClick: r
    }, a().createElement(i.A, null))), a().createElement("div", {
      className: "delete-confirmation-body"
    }, a().createElement("div", {
      className: "form-group"
    }, a().createElement("p", null, d))), a().createElement("ul", {
      className: "mintmrm-delete-confirm-btn"
    }, m && a().createElement("li", {
      className: "show-progressbar"
    }, a().createElement("div", {
      className: "progress-bar"
    }, a().createElement("div", {
      className: "unsubscribers-percentage",
      style: {
        width: "".concat(4 > f ? 4 : f, "%")
      }
    }, 100 > f && a().createElement("span", {
      className: "mintmrm-loader",
      style: {
        left: "".concat(Math.max(2, f - 9), "%")
      }
    })), a().createElement("span", {
      className: "percentage"
    }, f, "%"))), a().createElement("li", {
      className: "cancel"
    }, a().createElement("button", {
      className: "mintmrm-btn outline",
      onClick: function () {
        return r();
      },
      disabled: g
    }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.mint_trans.Cancel)), a().createElement("li", null, a().createElement("button", {
      className: "mintmrm-btn",
      onClick: function () {
        return c();
      },
      disabled: g
    }, " ", null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n ? void 0 : n.mint_trans.Yes, " "))))));
  }
  const c = (0, l.memo)(r);
});
