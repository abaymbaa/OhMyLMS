// Reconstructed Webpack factory 86009; arguments retain original semantics.
((e, t, n) => {
  e = n.nmd(e);
  var r = n(34840),
    a = t && !t.nodeType && t,
    i = a && e && !e.nodeType && e,
    o = i && i.exports === a && r.process,
    s = function () {
      try {
        return i && i.require && i.require("util").types || o && o.binding && o.binding("util");
      } catch (e) {}
    }();
  e.exports = s;
});
