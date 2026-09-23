// Reconstructed Webpack factory 57309; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    C: () => o,
    f: () => s
  });
  var r = n(31635);
  function a(e) {
    return e;
  }
  function i(e, t) {
    void 0 === t && (t = a);
    var n = [],
      r = !1;
    return {
      read: function () {
        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (e) {
        var a = t(e, r);
        return n.push(a), function () {
          n = n.filter(function (e) {
            return e !== a;
          });
        };
      },
      assignSyncMedium: function (e) {
        for (r = !0; n.length;) {
          var t = n;
          n = [], t.forEach(e);
        }
        n = {
          push: function (t) {
            return e(t);
          },
          filter: function () {
            return n;
          }
        };
      },
      assignMedium: function (e) {
        r = !0;
        var t = [];
        if (n.length) {
          var a = n;
          n = [], a.forEach(e), t = n;
        }
        var i = function () {
            var n = t;
            t = [], n.forEach(e);
          },
          o = function () {
            return Promise.resolve().then(i);
          };
        o(), n = {
          push: function (e) {
            t.push(e), o();
          },
          filter: function (e) {
            return t = t.filter(e), n;
          }
        };
      }
    };
  }
  function o(e, t) {
    return void 0 === t && (t = a), i(e, t);
  }
  function s(e) {
    void 0 === e && (e = {});
    var t = i(null);
    return t.options = (0, r.Cl)({
      async: !0,
      ssr: !1
    }, e), t;
  }
});
