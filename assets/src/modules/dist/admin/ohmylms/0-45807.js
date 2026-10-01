// Reconstructed Webpack factory 45807; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  function r(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  n.r(t), n.d(t, {
    addClassToHtml: () => a,
    destroyFullScreenMode: () => c,
    initializeFullScreen: () => l,
    removeClassFromHtml: () => o,
    toggleWPMenu: () => i
  });
  var a = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = document.querySelector("html");
      t && e.forEach(function (e) {
        t.classList.add(e);
      });
    },
    o = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = document.querySelector("html");
      t && e.forEach(function (e) {
        t.classList.remove(e);
      });
    },
    i = function (e, t) {
      t && t(!e);
      var n,
        i = document.querySelector("html"),
        l = "mintmrm-full-screen-builder";
      (n = null == i ? void 0 : i.classList, function (e) {
        if (Array.isArray(e)) return r(e);
      }(n) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(n) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return r(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
        }
      }(n) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }()).includes(l) ? o([l]) : a([l]);
    },
    l = function () {
      a(["mintmrm-full-screen-builder"]);
    },
    c = function () {
      o(["mintmrm-full-screen-builder"]);
    };
});
