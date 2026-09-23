// Reconstructed Webpack factory 68119; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => c
  });
  var r = n(91386),
    a = n(46942),
    o = n.n(a),
    i = ["active", "avatar", "title", "paragraph", "rows", "className"];
  function l() {
    return l = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, l.apply(null, arguments);
  }
  const c = (0, r.memo)(function (e) {
    var t = e.active,
      n = void 0 === t || t,
      r = e.avatar,
      a = void 0 !== r && r,
      c = e.title,
      u = void 0 === c || c,
      s = e.paragraph,
      d = void 0 === s || s,
      m = e.rows,
      p = void 0 === m ? 3 : m,
      f = e.className,
      v = void 0 === f ? "" : f,
      g = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
              if (-1 !== t.indexOf(r)) continue;
              n[r] = e[r];
            }
            return n;
          }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) n = o[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        }
        return a;
      }(e, i);
    return React.createElement("div", l({
      className: o()("omlms-skeleton", v, {
        "omlms-skeleton-active": n
      })
    }, g), a && React.createElement("div", {
      className: "omlms-skeleton-avatar"
    }), React.createElement("div", {
      className: "omlms-skeleton-content"
    }, u && React.createElement("div", {
      className: "omlms-skeleton-title"
    }), d && React.createElement("div", {
      className: "omlms-skeleton-paragraph"
    }, Array.from({
      length: p
    }).map(function (e, t) {
      return React.createElement("div", {
        key: t,
        className: "omlms-skeleton-line"
      });
    }))));
  });
});
