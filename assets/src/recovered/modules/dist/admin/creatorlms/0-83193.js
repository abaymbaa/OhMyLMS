// Reconstructed Webpack factory 83193; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    default: () => f
  });
  var r = n(41594),
    a = n(12470),
    o = n(37562),
    i = n(86169),
    l = n(59670),
    c = n(77558),
    u = n(12842),
    s = n.n(u),
    d = n(38093);
  function m(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var p = function (e) {
    var t = e.isOpen,
      n = e.onClose;
    if (!t) return null;
    var u,
      p,
      f = (u = (0, r.useState)(!1), p = 2, function (e) {
        if (Array.isArray(e)) return e;
      }(u) || function (e, t) {
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
      }(u, p) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return m(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, t) : void 0;
        }
      }(u, p) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }()),
      v = f[0],
      g = f[1],
      h = (0, o.useDispatch)(i.default),
      y = (0, o.useSelect)(function (e) {
        return e(i.default).getProModalTitle();
      }, []),
      b = (0, o.useSelect)(function (e) {
        return e(i.default).getProModalContent();
      }, []),
      _ = (0, o.useSelect)(function (e) {
        return e(i.default).getProModalButtonText();
      }, []),
      w = (0, o.useSelect)(function (e) {
        return e(i.default).getProModalButtonAction();
      }, []),
      E = (0, r.useCallback)(function () {
        h.updateProModalTitle((0, a.__)("Upgrade to Pro", "ohmylms")), h.updateProModalContent((0, a.__)("This feature requires OhMyLMS. Please activate the Pro version with a valid license to unlock this feature.", "ohmylms")), h.updateProModalButtonText((0, a.__)("Upgrade Now", "ohmylms")), h.updateProModalButtonAction(null), n && "function" == typeof n && n(!1);
      }, []),
      S = (0, r.useCallback)(function () {
        var e = c.pricingPageLink;
        "activate-mail-mint" === w ? (g(!0), s()({
          path: "/creator-lms/v1/plugin-installer/install",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            slug: "mail-mint"
          })
        }).then(function (e) {
          if (null != e && e.success) return s()({
            path: "/creator-lms/v1/plugin-installer/activate",
            method: "POST",
            data: {
              slug: "mail-mint"
            }
          });
          throw new Error("Failed to install Mail Mint");
        }).then(function (e) {
          if (null == e || !e.success) throw new Error("Failed to activate Mail Mint");
          localStorage.getItem("clms_automation_for_what"), localStorage.getItem("clms_automation_content_id"), localStorage.getItem("clms_automation_content_name"), g(!1), E(), window.creator_lms_params.is_mailmint_active = !0, localStorage.setItem("omlms_automation_modal_open", !0), window.location.reload();
        }).catch(function (e) {
          console.error("Error:", e);
        })) : w ? (e = w, window.open(e, "_blank")) : window.open(e, "_blank");
      }, [w, E]);
    return React.createElement(React.Fragment, null, React.createElement(d.ModalWP, {
      shouldCloseOnEsc: !0,
      shouldCloseOnClickOutside: !0,
      onRequestClose: E,
      className: "omlms-pro-modal omlms-pro-modal-wrap",
      focusOnMount: !1
    }, React.createElement(l.A, null), React.createElement("div", {
      className: "omlms-pro-modal-content"
    }, React.createElement("h3", null, y), React.createElement("p", null, b)), "activate-mail-mint" !== w && _ && React.createElement(d.ButtonWP, {
      variant: "primary",
      onClick: S,
      isBusy: v
    }, _)));
  };
  const f = (0, r.memo)(p);
});
