// Reconstructed Webpack factory 50483; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => o,
    l: () => i
  });
  var r = n(24534),
    a = n(19735);
  function i(e, t) {
    for (var n = "", r = (0, a.FK)(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
    return n;
  }
  function o(e, t, n, o) {
    switch (e.type) {
      case r.IO:
        if (e.children.length) break;
      case r.yE:
      case r.LU:
        return e.return = e.return || e.value;
      case r.YK:
        return "";
      case r.Sv:
        return e.return = e.value + "{" + i(e.children, o) + "}";
      case r.XZ:
        e.value = e.props.join(",");
    }
    return (0, a.b2)(n = i(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
  }
});
