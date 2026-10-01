// Reconstructed Webpack factory 88136; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  var r = n(76237),
    a = n(37820),
    i = "undefined" != typeof navigator && /Mac|iP(hone|[oa]d)/.test(navigator.platform),
    o = "undefined" != typeof navigator && /Win/.test(navigator.platform);
  function s(e) {
    var t,
      n,
      r,
      a,
      o = e.split(/-(?!$)/),
      s = o[o.length - 1];
    "Space" == s && (s = " ");
    for (var l = 0; l < o.length - 1; l++) {
      var c = o[l];
      if (/^(cmd|meta|m)$/i.test(c)) a = !0;else if (/^a(lt)?$/i.test(c)) t = !0;else if (/^(c|ctrl|control)$/i.test(c)) n = !0;else if (/^s(hift)?$/i.test(c)) r = !0;else {
        if (!/^mod$/i.test(c)) throw new Error("Unrecognized modifier name: " + c);
        i ? a = !0 : n = !0;
      }
    }
    return t && (s = "Alt-" + s), n && (s = "Ctrl-" + s), a && (s = "Meta-" + s), r && (s = "Shift-" + s), s;
  }
  function l(e, t) {
    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    return t.altKey && (e = "Alt-" + e), t.ctrlKey && (e = "Ctrl-" + e), t.metaKey && (e = "Meta-" + e), n && t.shiftKey && (e = "Shift-" + e), e;
  }
  function c(e) {
    var t = function (e) {
      var t = Object.create(null);
      for (var n in e) t[s(n)] = e[n];
      return t;
    }(e);
    return function (e, n) {
      var a,
        i = r.keyName(n),
        s = t[l(i, n)];
      if (s && s(e.state, e.dispatch, e)) return !0;
      if (1 == i.length && " " != i) {
        if (n.shiftKey) {
          var c = t[l(i, n, !1)];
          if (c && c(e.state, e.dispatch, e)) return !0;
        }
        if ((n.altKey || n.metaKey || n.ctrlKey) && !(o && n.ctrlKey && n.altKey) && (a = r.base[n.keyCode]) && a != i) {
          var u = t[l(a, n)];
          if (u && u(e.state, e.dispatch, e)) return !0;
        }
      }
      return !1;
    };
  }
  t.keydownHandler = c, t.keymap = function (e) {
    return new a.Plugin({
      props: {
        handleKeyDown: c(e)
      }
    });
  };
});
