// Reconstructed Webpack factory 81381; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => i
  });
  var r = n(2214),
    a = n(57677),
    o = n(91386);
  const i = function (e) {
    var t = e.items,
      n = void 0 === t ? [] : t,
      i = e.separator,
      l = void 0 === i ? "/" : i;
    return React.createElement("nav", {
      className: "ohmylms-breadcrumb",
      "aria-label": "Breadcrumb"
    }, React.createElement("ol", {
      className: "ohmylms-breadcrumb-list"
    }, n.map(function (e, t) {
      var i = t === n.length - 1;
      return React.createElement(o.Fragment, {
        key: t
      }, React.createElement("li", {
        className: "ohmylms-breadcrumb-item"
      }, React.createElement(r.Tooltip, {
        text: e.title
      }, React.createElement("span", {
        className: "ohmylms-breadcrumb-link-wrapper"
      }, e.icon && React.createElement(a.A, {
        icon: e.icon,
        className: "ohmylms-breadcrumb-icon"
      }), e.href && !i ? React.createElement("a", {
        href: e.href,
        className: "ohmylms-breadcrumb-link"
      }, e.title) : React.createElement("span", {
        className: "ohmylms-breadcrumb-text",
        "aria-current": i ? "page" : void 0
      }, e.title)))), !i && React.createElement("li", {
        className: "ohmylms-breadcrumb-separator",
        "aria-hidden": "true"
      }, l));
    })));
  };
});
