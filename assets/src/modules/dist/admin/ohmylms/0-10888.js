// Reconstructed Webpack factory 10888; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    default: () => i
  });
  var r = n(41594),
    a = n(84329),
    o = function (e) {
      var t = e.isOpen,
        n = e.setIsOpen,
        r = e.children,
        o = e.isTemplate,
        i = e.isClose,
        l = e.setIsClose;
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: "mintmrm-template-modal mintmrm-modal ".concat(t || o && !i ? "active" : "")
      }, React.createElement("div", {
        className: "template-modal-inner"
      }, React.createElement("div", {
        className: "cross-icon",
        onClick: function () {
          n(!1), l && l(!0);
        }
      }, React.createElement(a.A, null)), React.createElement("div", {
        className: "template-modal-overflow"
      }, r))));
    };
  const i = (0, r.memo)(o);
});
