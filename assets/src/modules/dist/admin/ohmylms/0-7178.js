// Reconstructed Webpack factory 7178; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r,
    a = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
      void 0 === r && (r = n);
      var a = Object.getOwnPropertyDescriptor(t, n);
      a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
        enumerable: !0,
        get: function () {
          return t[n];
        }
      }), Object.defineProperty(e, r, a);
    } : function (e, t, n, r) {
      void 0 === r && (r = n), e[r] = t[n];
    }),
    o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
      Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      });
    } : function (e, t) {
      e.default = t;
    }),
    i = this && this.__importStar || (r = function (e) {
      return r = Object.getOwnPropertyNames || function (e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
        return t;
      }, r(e);
    }, function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n = r(e), i = 0; i < n.length; i++) "default" !== n[i] && a(t, e, n[i]);
      return o(t, e), t;
    });
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ImageBlockWidth = void 0;
  var l = i(n(41594));
  t.ImageBlockWidth = (0, l.memo)(function (e) {
    var t = e.onChange,
      n = e.value,
      r = (0, l.useState)(n),
      a = r[0],
      o = r[1];
    (0, l.useEffect)(function () {
      o(n);
    }, [n]);
    var i = (0, l.useCallback)(function (e) {
      var n = parseInt(e.target.value);
      t(n), o(n);
    }, [t]);
    return l.default.createElement("div", {
      className: "flex items-center gap-2"
    }, l.default.createElement("input", {
      className: "h-2 bg-neutral-200 border-0 rounded appearance-none fill-neutral-300",
      type: "range",
      min: "25",
      max: "100",
      step: "25",
      onChange: i,
      value: a
    }), l.default.createElement("span", {
      className: "text-xs font-semibold text-neutral-500 select-none"
    }, n, "%"));
  }), t.ImageBlockWidth.displayName = "ImageBlockWidth";
});
