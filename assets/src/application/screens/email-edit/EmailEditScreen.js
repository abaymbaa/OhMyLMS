// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Yee = function () {
  var e = (0, f.g)().id,
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getEmail();
    }, []),
    n = (0, f.Zp)();
  return (0, g.useEffect)(function () {
    var r;
    Boolean(t) && (null == t || null === (r = t.basic) || void 0 === r ? void 0 : r.id) === e || n("/settings/emails-settings");
  }, [e, t, n]), React.createElement(Ea, null, React.createElement(I.SpacerWP, {
    padding: 5
  }, React.createElement(I.FlexWP, {
    justify: "start",
    align: "center",
    gap: "2"
  }, React.createElement(I.TextWP, {
    variant: "muted",
    size: "16"
  }, React.createElement(v.Link, {
    to: "/settings/emails-settings",
    style: {
      boxShadow: "none",
      textDecoration: "none",
      color: "inherit"
    }
  }, React.createElement(I.FlexWP, {
    gap: 4,
    justify: "flex-start"
  }, React.createElement(Nr, null), React.createElement(I.HeadingWP, {
    level: 2,
    size: 20
  }, function (e) {
    return e.split("_").map(function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    }).join(" ");
  }(e) || (0, b.__)("Email Editor", "ohmylms")))))), React.createElement(I.DividerWP, {
    marginStart: 4
  }), React.createElement(qee, null)));
};
