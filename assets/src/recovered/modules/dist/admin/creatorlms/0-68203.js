// Reconstructed Webpack factory 68203; arguments retain original semantics.
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
  }), t.FontSizePicker = void 0;
  var l = n(49041),
    c = n(94608),
    u = n(45486),
    s = n(16286),
    d = i(n(45399)),
    m = i(n(41594)),
    p = [{
      label: "Smaller",
      value: "12px"
    }, {
      label: "Small",
      value: "14px"
    }, {
      label: "Medium",
      value: ""
    }, {
      label: "Large",
      value: "18px"
    }, {
      label: "Extra Large",
      value: "24px"
    }];
  t.FontSizePicker = function (e) {
    var t = e.onChange,
      n = e.value,
      r = p.find(function (e) {
        return e.value === n;
      }),
      a = (null == r ? void 0 : r.label.split(" ")[0]) || "Medium",
      o = (0, m.useCallback)(function (e) {
        return function () {
          return t(e);
        };
      }, [t]);
    return m.default.createElement(d.Root, null, m.default.createElement(d.Trigger, {
      asChild: !0
    }, m.default.createElement(s.Toolbar.Button, {
      active: !!(null == r ? void 0 : r.value)
    }, a, m.default.createElement(c.Icon, {
      name: "ChevronDown",
      className: "w-2 h-2"
    }))), m.default.createElement(d.Content, {
      asChild: !0
    }, m.default.createElement(u.Surface, {
      className: "flex flex-col gap-1 px-2 py-4 omlms-toolbar-dropdown"
    }, p.map(function (e) {
      return m.default.createElement(l.DropdownButton, {
        isActive: n === e.value,
        onClick: o(e.value),
        key: "".concat(e.label, "_").concat(e.value),
        className: "".concat(n === e.value ? "omlms-toolbar-dropdown-item-active" : "")
      }, m.default.createElement("span", {
        style: {
          fontSize: e.value
        }
      }, e.label));
    }))));
  };
});
