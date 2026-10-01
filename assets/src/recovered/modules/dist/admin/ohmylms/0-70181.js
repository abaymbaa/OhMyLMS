// Reconstructed Webpack factory 70181; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r = this && this.__assign || function () {
      return r = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }, r.apply(this, arguments);
    },
    a = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.SlashCommand = void 0;
  var o,
    i = n(99248),
    l = n(83574),
    c = a(n(58991)),
    u = n(56614),
    s = a(n(64504)),
    d = n(66427),
    m = n(82080),
    p = "slashCommand";
  t.SlashCommand = i.Extension.create({
    name: p,
    priority: 200,
    onCreate: function () {
      o = (0, s.default)("body", {
        interactive: !0,
        trigger: "manual",
        placement: "bottom-start",
        theme: "slash-command",
        maxWidth: "16rem",
        offset: [16, 8],
        popperOptions: {
          strategy: "fixed",
          modifiers: [{
            name: "flip",
            enabled: !1
          }]
        }
      });
    },
    addProseMirrorPlugins: function () {
      var e = this;
      return [(0, c.default)({
        editor: this.editor,
        char: "/",
        allowSpaces: !0,
        startOfLine: !0,
        pluginKey: new u.PluginKey(p),
        allow: function (t) {
          var n,
            r,
            a,
            o = t.state,
            i = t.range,
            l = o.doc.resolve(i.from),
            c = 1 === l.depth,
            u = "paragraph" === l.parent.type.name,
            s = "/" === (null === (n = l.parent.textContent) || void 0 === n ? void 0 : n.charAt(0)),
            d = e.editor.isActive("column"),
            m = null === (r = l.parent.textContent) || void 0 === r ? void 0 : r.substring(null === (a = l.parent.textContent) || void 0 === a ? void 0 : a.indexOf("/")),
            p = !(null == m ? void 0 : m.endsWith("  "));
          return (c && u && s || d && u && s) && p;
        },
        command: function (e) {
          var t,
            n,
            r,
            a = e.editor,
            o = e.props,
            i = a.view,
            l = a.state,
            c = i.state.selection,
            u = c.$head,
            s = c.$from,
            d = s.pos,
            m = (null == u ? void 0 : u.nodeBefore) ? d - (null !== (r = null === (t = u.nodeBefore.text) || void 0 === t ? void 0 : t.substring(null === (n = u.nodeBefore.text) || void 0 === n ? void 0 : n.indexOf("/")).length) && void 0 !== r ? r : 0) : s.start(),
            p = l.tr.deleteRange(m, d);
          i.dispatch(p), o.action(a), i.focus();
        },
        items: function (t) {
          var n,
            a,
            o,
            i = t.query;
          return (a = d.GROUPS, o = null === (n = null == e ? void 0 : e.options) || void 0 === n ? void 0 : n.commandsConfig, a.map(function (e) {
            return r(r({}, e), {
              commands: e.commands.filter(function (e) {
                return !o.hasOwnProperty(e.name) || !1 !== o[e.name];
              })
            });
          })).map(function (e) {
            return r(r({}, e), {
              commands: e.commands.filter(function (e) {
                var t = e.label.toLowerCase().trim(),
                  n = i.toLowerCase().trim();
                if (e.aliases) {
                  var r = e.aliases.map(function (e) {
                    return e.toLowerCase().trim();
                  });
                  return t.includes(n) || r.includes(n);
                }
                return t.includes(n);
              })
            });
          }).filter(function (e) {
            return e.commands.length > 0;
          }).map(function (e) {
            return r(r({}, e), {
              commands: e.commands.map(function (e) {
                return r(r({}, e), {
                  isEnabled: !0
                });
              })
            });
          });
        },
        render: function () {
          var e,
            t = null;
          return {
            onStart: function (n) {
              var r;
              e = new l.ReactRenderer(m.MenuList, {
                props: n,
                editor: n.editor
              });
              var a = n.editor.view,
                i = a.dom,
                c = function () {
                  if (!n.clientRect) return n.editor.storage[p].rect;
                  var t = n.clientRect();
                  if (!t) return n.editor.storage[p].rect;
                  var r = t.y;
                  if (t.top + e.element.offsetHeight + 40 > window.innerHeight) {
                    var a = t.top + e.element.offsetHeight - window.innerHeight + 40;
                    r = t.y - a;
                  }
                  return i.getBoundingClientRect().x, new DOMRect(t.x, r, t.width, t.height);
                };
              t = function () {
                null == o || o[0].setProps({
                  getReferenceClientRect: c
                });
              }, null === (r = a.dom.parentElement) || void 0 === r || r.addEventListener("scroll", t), null == o || o[0].setProps({
                getReferenceClientRect: c,
                appendTo: function () {
                  return document.body;
                },
                content: e.element
              }), null == o || o[0].show();
            },
            onUpdate: function (t) {
              var n;
              e.updateProps(t);
              var r = t.editor.view,
                a = (r.dom, function () {
                  if (!t.clientRect) return t.editor.storage[p].rect;
                  var e = t.clientRect();
                  return e ? new DOMRect(e.x, e.y, e.width, e.height) : t.editor.storage[p].rect;
                });
              null === (n = r.dom.parentElement) || void 0 === n || n.addEventListener("scroll", function () {
                null == o || o[0].setProps({
                  getReferenceClientRect: a
                });
              }), t.editor.storage[p].rect = t.clientRect ? a() : {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              }, null == o || o[0].setProps({
                getReferenceClientRect: a
              });
            },
            onKeyDown: function (t) {
              var n;
              return "Escape" === t.event.key ? (null == o || o[0].hide(), !0) : ((null == o ? void 0 : o[0].state.isShown) || null == o || o[0].show(), null === (n = null == e ? void 0 : e.ref) || void 0 === n ? void 0 : n.onKeyDown(t));
            },
            onExit: function (n) {
              var r;
              null == o || o[0].hide(), t && (null === (r = n.editor.view.dom.parentElement) || void 0 === r || r.removeEventListener("scroll", t)), e.destroy();
            }
          };
        }
      })];
    },
    addStorage: function () {
      return {
        rect: {
          width: 0,
          height: 0,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      };
    }
  }), t.default = t.SlashCommand;
});
