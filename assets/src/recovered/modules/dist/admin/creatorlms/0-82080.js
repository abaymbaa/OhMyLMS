// Reconstructed Webpack factory 82080; arguments retain original semantics.
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
  }), t.MenuList = void 0;
  var l = i(n(41594)),
    c = n(45486),
    u = n(94608);
  t.MenuList = l.default.forwardRef(function (e, t) {
    var n = (0, l.useRef)(null),
      r = (0, l.useRef)(null),
      a = (0, l.useState)(0),
      o = a[0],
      i = a[1],
      s = (0, l.useState)(0),
      d = s[0],
      m = s[1];
    (0, l.useEffect)(function () {
      i(0), m(0);
    }, [e.items]);
    var p = (0, l.useCallback)(function (t, n) {
      var r = e.items[t].commands[n];
      e.command(r);
    }, [e]);
    l.default.useImperativeHandle(t, function () {
      return {
        onKeyDown: function (t) {
          var n,
            r = t.event;
          if ("ArrowDown" === r.key) {
            if (!e.items.length) return !1;
            var a = e.items[o].commands,
              l = d + 1,
              c = o;
            return a.length - 1 < l && (l = 0, c = o + 1), e.items.length - 1 < c && (c = 0), m(l), i(c), !0;
          }
          return "ArrowUp" === r.key ? !!e.items.length && (c = o, (l = d - 1) < 0 && (c = o - 1, l = (null === (n = e.items[c]) || void 0 === n ? void 0 : n.commands.length) - 1 || 0), c < 0 && (c = e.items.length - 1, l = e.items[c].commands.length - 1), m(l), i(c), !0) : !("Enter" !== r.key || !e.items.length || -1 === o || -1 === d || (p(o, d), 0));
        }
      };
    }), (0, l.useEffect)(function () {
      if (r.current && n.current) {
        var e = r.current.offsetTop,
          t = r.current.offsetHeight;
        n.current.scrollTop = e - t;
      }
    }, [d, o]);
    var f = (0, l.useCallback)(function (e, t) {
      return function () {
        p(e, t);
      };
    }, [p]);
    return e.items.length ? l.default.createElement(c.Surface, {
      ref: n,
      className: "omlms-command-list-wrapper overflow-auto"
    }, e.items.map(function (e, t) {
      return l.default.createElement(l.default.Fragment, {
        key: "".concat(e.title, "-wrapper")
      }, l.default.createElement("div", {
        className: "omlms-command-group-wrapper omlms-command-".concat(e.name)
      }, l.default.createElement("span", {
        className: "omlms-command-group-title"
      }, e.title), e.commands.map(function (e, n) {
        var a = o === t && d === n;
        return l.default.createElement(l.default.Fragment, {
          key: "".concat(e.label)
        }, l.default.createElement("button", {
          ref: o === t && d === n ? r : null,
          onClick: f(t, n),
          className: "".concat(a ? "creatorlms-active-command" : "", " omlms-command-btn")
        }, l.default.createElement(u.Icon, {
          name: e.iconName,
          className: "mr-1"
        }), l.default.createElement("span", {
          className: "omlms-command-label"
        }, e.label)));
      })));
    })) : null;
  }), t.MenuList.displayName = "MenuList", t.default = t.MenuList;
});
