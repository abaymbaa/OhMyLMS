// Reconstructed Webpack factory 93552; arguments retain original semantics.
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
    }),
    l = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ContentTypePicker = void 0;
  var c = l(n(41594)),
    u = n(94608),
    s = n(41594),
    d = i(n(45399)),
    m = n(16286),
    p = n(45486),
    f = n(49041);
  t.ContentTypePicker = function (e) {
    var t = e.options,
      n = (0, s.useMemo)(function () {
        return t.find(function (e) {
          return "option" === e.type && e.isActive();
        });
      }, [t]);
    return c.default.createElement(d.Root, null, c.default.createElement(d.Trigger, {
      asChild: !0
    }, c.default.createElement(m.Toolbar.Button, {
      active: "paragraph" !== (null == n ? void 0 : n.id) && !!(null == n ? void 0 : n.type)
    }, c.default.createElement(u.Icon, {
      name: "option" === (null == n ? void 0 : n.type) && n.icon || "Pilcrow"
    }), c.default.createElement(u.Icon, {
      name: "ChevronDown",
      className: "w-2 h-2"
    }))), c.default.createElement(d.Content, {
      asChild: !0
    }, c.default.createElement(p.Surface, {
      className: "flex flex-col gap-1 px-2 py-4 omlms-toolbar-dropdown omlms-tiptap-content-type"
    }, t.map(function (e) {
      return function (e) {
        return "option" === e.type;
      }(e) ? c.default.createElement(f.DropdownButton, {
        key: e.id,
        onClick: e.onClick,
        isActive: e.isActive(),
        className: "".concat(e.isActive() ? "omlms-toolbar-dropdown-item-active" : "")
      }, c.default.createElement(u.Icon, {
        name: e.icon,
        className: "w-4 h-4 mr-1"
      }), e.label) : function (e) {
        return "category" === e.type;
      }(e) ? c.default.createElement("div", {
        className: "mt-2 first:mt-0 omlms-tiptap-content-type-category",
        key: e.id
      }, c.default.createElement(f.DropdownCategoryTitle, {
        key: e.id
      }, e.label)) : void 0;
    }))));
  };
});
