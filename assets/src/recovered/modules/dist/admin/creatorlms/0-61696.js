// Reconstructed Webpack factory 61696; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    default: () => a,
    useAutomationTitleOutsideClick: () => l,
    useOutsideAlerter: () => o,
    useOutsideAlerterWithPortal: () => i
  });
  var r = n(41594);
  function a(e, t, n, r) {
    return function () {
      e || n.current && (t(!0), ["click", "touchstart"].forEach(function (e) {
        document.addEventListener("click", function (e) {
          var t = n.current,
            a = e.target;
          null != t && t.contains(a) || r(!1);
        });
      }));
    };
  }
  function o(e, t) {
    (0, r.useEffect)(function () {
      function n(n) {
        e.current && !e.current.contains(n.target) && t(!1);
      }
      return document.addEventListener("mousedown", n), function () {
        document.removeEventListener("mousedown", n);
      };
    }, [e]);
  }
  function i(e, t, n) {
    (0, r.useEffect)(function () {
      function r(r) {
        e.current && !e.current.contains(r.target) && n.current && !n.current.contains(r.target) && t(!1);
      }
      return document.addEventListener("mousedown", r), function () {
        document.removeEventListener("mousedown", r);
      };
    }, [e, n]);
  }
  function l(e, t) {
    (0, r.useEffect)(function () {
      function n(n) {
        e.current && !e.current.contains(n.target) && t(!0);
      }
      return document.addEventListener("mousedown", n), document.addEventListener("keypress", function (e) {
        "Enter" === e.key && t(!0);
      }), function () {
        document.removeEventListener("mousedown", n), document.removeEventListener("keypress", function (e) {
          "Enter" === e.key && n(e);
        });
      };
    }, [e]);
  }
});
