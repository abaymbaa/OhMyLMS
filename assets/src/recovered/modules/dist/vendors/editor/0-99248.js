// Reconstructed Webpack factory 99248; arguments retain original semantics.
((e, t, n) => {
  var o = n(56614),
    s = n(37392),
    r = n(88470),
    i = n(61106),
    a = n(54175),
    c = n(16675),
    d = n(13637);
  function l(e) {
    const {
      state: t,
      transaction: n
    } = e;
    let {
        selection: o
      } = n,
      {
        doc: s
      } = n,
      {
        storedMarks: r
      } = n;
    return {
      ...t,
      apply: t.apply.bind(t),
      applyTransaction: t.applyTransaction.bind(t),
      plugins: t.plugins,
      schema: t.schema,
      reconfigure: t.reconfigure.bind(t),
      toJSON: t.toJSON.bind(t),
      get storedMarks() {
        return r;
      },
      get selection() {
        return o;
      },
      get doc() {
        return s;
      },
      get tr() {
        return o = n.selection, s = n.doc, r = n.storedMarks, n;
      }
    };
  }
  class u {
    constructor(e) {
      this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
    }
    get hasCustomState() {
      return !!this.customState;
    }
    get state() {
      return this.customState || this.editor.state;
    }
    get commands() {
      const {
          rawCommands: e,
          editor: t,
          state: n
        } = this,
        {
          view: o
        } = t,
        {
          tr: s
        } = n,
        r = this.buildProps(s);
      return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, (...e) => {
        const n = t(...e)(r);
        return s.getMeta("preventDispatch") || this.hasCustomState || o.dispatch(s), n;
      }]));
    }
    get chain() {
      return () => this.createChain();
    }
    get can() {
      return () => this.createCan();
    }
    createChain(e, t = !0) {
      const {
          rawCommands: n,
          editor: o,
          state: s
        } = this,
        {
          view: r
        } = o,
        i = [],
        a = !!e,
        c = e || s.tr,
        d = {
          ...Object.fromEntries(Object.entries(n).map(([e, n]) => [e, (...e) => {
            const o = this.buildProps(c, t),
              s = n(...e)(o);
            return i.push(s), d;
          }])),
          run: () => (a || !t || c.getMeta("preventDispatch") || this.hasCustomState || r.dispatch(c), i.every(e => !0 === e))
        };
      return d;
    }
    createCan(e) {
      const {
          rawCommands: t,
          state: n
        } = this,
        o = !1,
        s = e || n.tr,
        r = this.buildProps(s, o);
      return {
        ...Object.fromEntries(Object.entries(t).map(([e, t]) => [e, (...e) => t(...e)({
          ...r,
          dispatch: void 0
        })])),
        chain: () => this.createChain(s, o)
      };
    }
    buildProps(e, t = !0) {
      const {
          rawCommands: n,
          editor: o,
          state: s
        } = this,
        {
          view: r
        } = o,
        i = {
          tr: e,
          editor: o,
          view: r,
          state: l({
            state: s,
            transaction: e
          }),
          dispatch: t ? () => {} : void 0,
          chain: () => this.createChain(e, t),
          can: () => this.createCan(e),
          get commands() {
            return Object.fromEntries(Object.entries(n).map(([e, t]) => [e, (...e) => t(...e)(i)]));
          }
        };
      return i;
    }
  }
  class h {
    constructor() {
      this.callbacks = {};
    }
    on(e, t) {
      return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
    }
    emit(e, ...t) {
      const n = this.callbacks[e];
      return n && n.forEach(e => e.apply(this, t)), this;
    }
    off(e, t) {
      const n = this.callbacks[e];
      return n && (t ? this.callbacks[e] = n.filter(e => e !== t) : delete this.callbacks[e]), this;
    }
    once(e, t) {
      const n = (...o) => {
        this.off(e, n), t.apply(this, o);
      };
      return this.on(e, n);
    }
    removeAllListeners() {
      this.callbacks = {};
    }
  }
  function p(e, t, n) {
    return void 0 === e.config[t] && e.parent ? p(e.parent, t, n) : "function" == typeof e.config[t] ? e.config[t].bind({
      ...n,
      parent: e.parent ? p(e.parent, t, n) : null
    }) : e.config[t];
  }
  function m(e) {
    return {
      baseExtensions: e.filter(e => "extension" === e.type),
      nodeExtensions: e.filter(e => "node" === e.type),
      markExtensions: e.filter(e => "mark" === e.type)
    };
  }
  function f(e) {
    const t = [],
      {
        nodeExtensions: n,
        markExtensions: o
      } = m(e),
      s = [...n, ...o],
      r = {
        default: null,
        rendered: !0,
        renderHTML: null,
        parseHTML: null,
        keepOnSplit: !0,
        isRequired: !1
      };
    return e.forEach(e => {
      const n = p(e, "addGlobalAttributes", {
        name: e.name,
        options: e.options,
        storage: e.storage,
        extensions: s
      });
      n && n().forEach(e => {
        e.types.forEach(n => {
          Object.entries(e.attributes).forEach(([e, o]) => {
            t.push({
              type: n,
              name: e,
              attribute: {
                ...r,
                ...o
              }
            });
          });
        });
      });
    }), s.forEach(e => {
      const n = {
          name: e.name,
          options: e.options,
          storage: e.storage
        },
        o = p(e, "addAttributes", n);
      if (!o) return;
      const s = o();
      Object.entries(s).forEach(([n, o]) => {
        const s = {
          ...r,
          ...o
        };
        "function" == typeof (null == s ? void 0 : s.default) && (s.default = s.default()), (null == s ? void 0 : s.isRequired) && void 0 === (null == s ? void 0 : s.default) && delete s.default, t.push({
          type: e.name,
          name: n,
          attribute: s
        });
      });
    }), t;
  }
  function g(e, t) {
    if ("string" == typeof e) {
      if (!t.nodes[e]) throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);
      return t.nodes[e];
    }
    return e;
  }
  function b(...e) {
    return e.filter(e => !!e).reduce((e, t) => {
      const n = {
        ...e
      };
      return Object.entries(t).forEach(([e, t]) => {
        if (n[e]) {
          if ("class" === e) {
            const o = t ? String(t).split(" ") : [],
              s = n[e] ? n[e].split(" ") : [],
              r = o.filter(e => !s.includes(e));
            n[e] = [...s, ...r].join(" ");
          } else if ("style" === e) {
            const o = t ? t.split(";").map(e => e.trim()).filter(Boolean) : [],
              s = n[e] ? n[e].split(";").map(e => e.trim()).filter(Boolean) : [],
              r = new Map();
            s.forEach(e => {
              const [t, n] = e.split(":").map(e => e.trim());
              r.set(t, n);
            }), o.forEach(e => {
              const [t, n] = e.split(":").map(e => e.trim());
              r.set(t, n);
            }), n[e] = Array.from(r.entries()).map(([e, t]) => `${e}: ${t}`).join("; ");
          } else n[e] = t;
        } else n[e] = t;
      }), n;
    }, {});
  }
  function y(e, t) {
    return t.filter(t => t.type === e.type.name).filter(e => e.attribute.rendered).map(t => t.attribute.renderHTML ? t.attribute.renderHTML(e.attrs) || {} : {
      [t.name]: e.attrs[t.name]
    }).reduce((e, t) => b(e, t), {});
  }
  function v(e) {
    return "function" == typeof e;
  }
  function w(e, t = void 0, ...n) {
    return v(e) ? t ? e.bind(t)(...n) : e(...n) : e;
  }
  function k(e = {}) {
    return 0 === Object.keys(e).length && e.constructor === Object;
  }
  function M(e) {
    return "string" != typeof e ? e : e.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(e) : "true" === e || "false" !== e && e;
  }
  function S(e, t) {
    return "style" in e ? e : {
      ...e,
      getAttrs: n => {
        const o = e.getAttrs ? e.getAttrs(n) : e.attrs;
        if (!1 === o) return !1;
        const s = t.reduce((e, t) => {
          const o = t.attribute.parseHTML ? t.attribute.parseHTML(n) : M(n.getAttribute(t.name));
          return null == o ? e : {
            ...e,
            [t.name]: o
          };
        }, {});
        return {
          ...o,
          ...s
        };
      }
    };
  }
  function x(e) {
    return Object.fromEntries(Object.entries(e).filter(([e, t]) => ("attrs" !== e || !k(t)) && null != t));
  }
  function C(e, t) {
    var n;
    const o = f(e),
      {
        nodeExtensions: s,
        markExtensions: r
      } = m(e),
      a = null === (n = s.find(e => p(e, "topNode"))) || void 0 === n ? void 0 : n.name,
      c = Object.fromEntries(s.map(n => {
        const s = o.filter(e => e.type === n.name),
          r = {
            name: n.name,
            options: n.options,
            storage: n.storage,
            editor: t
          },
          i = x({
            ...e.reduce((e, t) => {
              const o = p(t, "extendNodeSchema", r);
              return {
                ...e,
                ...(o ? o(n) : {})
              };
            }, {}),
            content: w(p(n, "content", r)),
            marks: w(p(n, "marks", r)),
            group: w(p(n, "group", r)),
            inline: w(p(n, "inline", r)),
            atom: w(p(n, "atom", r)),
            selectable: w(p(n, "selectable", r)),
            draggable: w(p(n, "draggable", r)),
            code: w(p(n, "code", r)),
            whitespace: w(p(n, "whitespace", r)),
            linebreakReplacement: w(p(n, "linebreakReplacement", r)),
            defining: w(p(n, "defining", r)),
            isolating: w(p(n, "isolating", r)),
            attrs: Object.fromEntries(s.map(e => {
              var t;
              return [e.name, {
                default: null === (t = null == e ? void 0 : e.attribute) || void 0 === t ? void 0 : t.default
              }];
            }))
          }),
          a = w(p(n, "parseHTML", r));
        a && (i.parseDOM = a.map(e => S(e, s)));
        const c = p(n, "renderHTML", r);
        c && (i.toDOM = e => c({
          node: e,
          HTMLAttributes: y(e, s)
        }));
        const d = p(n, "renderText", r);
        return d && (i.toText = d), [n.name, i];
      })),
      d = Object.fromEntries(r.map(n => {
        const s = o.filter(e => e.type === n.name),
          r = {
            name: n.name,
            options: n.options,
            storage: n.storage,
            editor: t
          },
          i = x({
            ...e.reduce((e, t) => {
              const o = p(t, "extendMarkSchema", r);
              return {
                ...e,
                ...(o ? o(n) : {})
              };
            }, {}),
            inclusive: w(p(n, "inclusive", r)),
            excludes: w(p(n, "excludes", r)),
            group: w(p(n, "group", r)),
            spanning: w(p(n, "spanning", r)),
            code: w(p(n, "code", r)),
            attrs: Object.fromEntries(s.map(e => {
              var t;
              return [e.name, {
                default: null === (t = null == e ? void 0 : e.attribute) || void 0 === t ? void 0 : t.default
              }];
            }))
          }),
          a = w(p(n, "parseHTML", r));
        a && (i.parseDOM = a.map(e => S(e, s)));
        const c = p(n, "renderHTML", r);
        return c && (i.toDOM = e => c({
          mark: e,
          HTMLAttributes: y(e, s)
        })), [n.name, i];
      }));
    return new i.Schema({
      topNode: a,
      nodes: c,
      marks: d
    });
  }
  function T(e, t) {
    return t.nodes[e] || t.marks[e] || null;
  }
  function E(e, t) {
    return Array.isArray(t) ? t.some(t => ("string" == typeof t ? t : t.name) === e.name) : t;
  }
  function O(e, t) {
    const n = i.DOMSerializer.fromSchema(t).serializeFragment(e),
      o = document.implementation.createHTMLDocument().createElement("div");
    return o.appendChild(n), o.innerHTML;
  }
  const A = (e, t = 500) => {
    let n = "";
    const o = e.parentOffset;
    return e.parent.nodesBetween(Math.max(0, o - t), o, (e, t, s, r) => {
      var i, a;
      const c = (null === (a = (i = e.type.spec).toText) || void 0 === a ? void 0 : a.call(i, {
        node: e,
        pos: t,
        parent: s,
        index: r
      })) || e.textContent || "%leaf%";
      n += e.isAtom && !e.isText ? c : c.slice(0, Math.max(0, o - t));
    }), n;
  };
  function P(e) {
    return "[object RegExp]" === Object.prototype.toString.call(e);
  }
  class L {
    constructor(e) {
      this.find = e.find, this.handler = e.handler;
    }
  }
  function N(e) {
    var t;
    const {
        editor: n,
        from: o,
        to: s,
        text: r,
        rules: i,
        plugin: a
      } = e,
      {
        view: c
      } = n;
    if (c.composing) return !1;
    const d = c.state.doc.resolve(o);
    if (d.parent.type.spec.code || (null === (t = d.nodeBefore || d.nodeAfter) || void 0 === t ? void 0 : t.marks.find(e => e.type.spec.code))) return !1;
    let h = !1;
    const p = A(d) + r;
    return i.forEach(e => {
      if (h) return;
      const t = ((e, t) => {
        if (P(t)) return t.exec(e);
        const n = t(e);
        if (!n) return null;
        const o = [n.text];
        return o.index = n.index, o.input = e, o.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), o.push(n.replaceWith)), o;
      })(p, e.find);
      if (!t) return;
      const i = c.state.tr,
        d = l({
          state: c.state,
          transaction: i
        }),
        m = {
          from: o - (t[0].length - r.length),
          to: s
        },
        {
          commands: f,
          chain: g,
          can: b
        } = new u({
          editor: n,
          state: d
        });
      null !== e.handler({
        state: d,
        range: m,
        match: t,
        commands: f,
        chain: g,
        can: b
      }) && i.steps.length && (i.setMeta(a, {
        transform: i,
        from: o,
        to: s,
        text: r
      }), c.dispatch(i), h = !0);
    }), h;
  }
  function R(e) {
    const {
        editor: t,
        rules: n
      } = e,
      s = new o.Plugin({
        state: {
          init: () => null,
          apply(e, o, r) {
            const a = e.getMeta(s);
            if (a) return a;
            const c = e.getMeta("applyInputRules");
            return !!c && setTimeout(() => {
              let {
                text: e
              } = c;
              "string" == typeof e || (e = O(i.Fragment.from(e), r.schema));
              const {
                  from: o
                } = c,
                a = o + e.length;
              N({
                editor: t,
                from: o,
                to: a,
                text: e,
                rules: n,
                plugin: s
              });
            }), e.selectionSet || e.docChanged ? null : o;
          }
        },
        props: {
          handleTextInput: (e, o, r, i) => N({
            editor: t,
            from: o,
            to: r,
            text: i,
            rules: n,
            plugin: s
          }),
          handleDOMEvents: {
            compositionend: e => (setTimeout(() => {
              const {
                $cursor: o
              } = e.state.selection;
              o && N({
                editor: t,
                from: o.pos,
                to: o.pos,
                text: "",
                rules: n,
                plugin: s
              });
            }), !1)
          },
          handleKeyDown(e, o) {
            if ("Enter" !== o.key) return !1;
            const {
              $cursor: r
            } = e.state.selection;
            return !!r && N({
              editor: t,
              from: r.pos,
              to: r.pos,
              text: "\n",
              rules: n,
              plugin: s
            });
          }
        },
        isInputRules: !0
      });
    return s;
  }
  function I(e) {
    return "Object" === function (e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }(e) && e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype;
  }
  function D(e, t) {
    const n = {
      ...e
    };
    return I(e) && I(t) && Object.keys(t).forEach(o => {
      I(t[o]) && I(e[o]) ? n[o] = D(e[o], t[o]) : n[o] = t[o];
    }), n;
  }
  class H {
    constructor(e = {}) {
      this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
        name: this.name,
        defaultOptions: {}
      }, this.config = {
        ...this.config,
        ...e
      }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = w(p(this, "addOptions", {
        name: this.name
      }))), this.storage = w(p(this, "addStorage", {
        name: this.name,
        options: this.options
      })) || {};
    }
    static create(e = {}) {
      return new H(e);
    }
    configure(e = {}) {
      const t = this.extend({
        ...this.config,
        addOptions: () => D(this.options, e)
      });
      return t.name = this.name, t.parent = this.parent, t;
    }
    extend(e = {}) {
      const t = new H(e);
      return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = w(p(t, "addOptions", {
        name: t.name
      })), t.storage = w(p(t, "addStorage", {
        name: t.name,
        options: t.options
      })), t;
    }
    static handleExit({
      editor: e,
      mark: t
    }) {
      const {
          tr: n
        } = e.state,
        o = e.state.selection.$from;
      if (o.pos === o.end()) {
        const s = o.marks();
        if (!s.find(e => (null == e ? void 0 : e.type.name) === t.name)) return !1;
        const r = s.find(e => (null == e ? void 0 : e.type.name) === t.name);
        return r && n.removeStoredMark(r), n.insertText(" ", o.pos), e.view.dispatch(n), !0;
      }
      return !1;
    }
  }
  function $(e) {
    return "number" == typeof e;
  }
  class j {
    constructor(e) {
      this.find = e.find, this.handler = e.handler;
    }
  }
  let _ = null;
  function B(e) {
    const {
      editor: t,
      rules: n
    } = e;
    let s,
      r = null,
      a = !1,
      c = !1,
      d = "undefined" != typeof ClipboardEvent ? new ClipboardEvent("paste") : null;
    try {
      s = "undefined" != typeof DragEvent ? new DragEvent("drop") : null;
    } catch {
      s = null;
    }
    const h = ({
        state: e,
        from: n,
        to: o,
        rule: r,
        pasteEvt: i
      }) => {
        const a = e.tr,
          c = l({
            state: e,
            transaction: a
          });
        if (function (e) {
          const {
              editor: t,
              state: n,
              from: o,
              to: s,
              rule: r,
              pasteEvent: i,
              dropEvent: a
            } = e,
            {
              commands: c,
              chain: d,
              can: l
            } = new u({
              editor: t,
              state: n
            }),
            h = [];
          return n.doc.nodesBetween(o, s, (e, t) => {
            if (!e.isTextblock || e.type.spec.code) return;
            const u = Math.max(o, t),
              p = Math.min(s, t + e.content.size);
            ((e, t, n) => {
              if (P(t)) return [...e.matchAll(t)];
              const o = t(e, n);
              return o ? o.map(t => {
                const n = [t.text];
                return n.index = t.index, n.input = e, n.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), n.push(t.replaceWith)), n;
              }) : [];
            })(e.textBetween(u - t, p - t, void 0, "￼"), r.find, i).forEach(e => {
              if (void 0 === e.index) return;
              const t = u + e.index + 1,
                o = t + e[0].length,
                s = {
                  from: n.tr.mapping.map(t),
                  to: n.tr.mapping.map(o)
                },
                p = r.handler({
                  state: n,
                  range: s,
                  match: e,
                  commands: c,
                  chain: d,
                  can: l,
                  pasteEvent: i,
                  dropEvent: a
                });
              h.push(p);
            });
          }), h.every(e => null !== e);
        }({
          editor: t,
          state: c,
          from: Math.max(n - 1, 0),
          to: o.b - 1,
          rule: r,
          pasteEvent: i,
          dropEvent: s
        }) && a.steps.length) {
          try {
            s = "undefined" != typeof DragEvent ? new DragEvent("drop") : null;
          } catch {
            s = null;
          }
          return d = "undefined" != typeof ClipboardEvent ? new ClipboardEvent("paste") : null, a;
        }
      },
      p = n.map(e => new o.Plugin({
        view(e) {
          const n = n => {
              var o;
              r = (null === (o = e.dom.parentElement) || void 0 === o ? void 0 : o.contains(n.target)) ? e.dom.parentElement : null, r && (_ = t);
            },
            o = () => {
              _ && (_ = null);
            };
          return window.addEventListener("dragstart", n), window.addEventListener("dragend", o), {
            destroy() {
              window.removeEventListener("dragstart", n), window.removeEventListener("dragend", o);
            }
          };
        },
        props: {
          handleDOMEvents: {
            drop: (e, t) => {
              if (c = r === e.dom.parentElement, s = t, !c) {
                const e = _;
                (null == e ? void 0 : e.isEditable) && setTimeout(() => {
                  const t = e.state.selection;
                  t && e.commands.deleteRange({
                    from: t.from,
                    to: t.to
                  });
                }, 10);
              }
              return !1;
            },
            paste: (e, t) => {
              var n;
              const o = null === (n = t.clipboardData) || void 0 === n ? void 0 : n.getData("text/html");
              return d = t, a = !!(null == o ? void 0 : o.includes("data-pm-slice")), !1;
            }
          }
        },
        appendTransaction: (t, n, o) => {
          const s = t[0],
            r = "paste" === s.getMeta("uiEvent") && !a,
            l = "drop" === s.getMeta("uiEvent") && !c,
            u = s.getMeta("applyPasteRules"),
            p = !!u;
          if (!r && !l && !p) return;
          if (p) {
            let {
              text: t
            } = u;
            "string" == typeof t || (t = O(i.Fragment.from(t), o.schema));
            const {
                from: n
              } = u,
              s = n + t.length,
              r = (e => {
                var t;
                const n = new ClipboardEvent("paste", {
                  clipboardData: new DataTransfer()
                });
                return null === (t = n.clipboardData) || void 0 === t || t.setData("text/html", e), n;
              })(t);
            return h({
              rule: e,
              state: o,
              from: n,
              to: {
                b: s
              },
              pasteEvt: r
            });
          }
          const m = n.doc.content.findDiffStart(o.doc.content),
            f = n.doc.content.findDiffEnd(o.doc.content);
          return $(m) && f && m !== f.b ? h({
            rule: e,
            state: o,
            from: m,
            to: f,
            pasteEvt: d
          }) : void 0;
        }
      }));
    return p;
  }
  function U(e) {
    const t = e.filter((t, n) => e.indexOf(t) !== n);
    return Array.from(new Set(t));
  }
  class z {
    constructor(e, t) {
      this.splittableMarks = [], this.editor = t, this.extensions = z.resolve(e), this.schema = C(this.extensions, t), this.setupExtensions();
    }
    static resolve(e) {
      const t = z.sort(z.flatten(e)),
        n = U(t.map(e => e.name));
      return n.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${n.map(e => `'${e}'`).join(", ")}]. This can lead to issues.`), t;
    }
    static flatten(e) {
      return e.map(e => {
        const t = p(e, "addExtensions", {
          name: e.name,
          options: e.options,
          storage: e.storage
        });
        return t ? [e, ...this.flatten(t())] : e;
      }).flat(10);
    }
    static sort(e) {
      return e.sort((e, t) => {
        const n = p(e, "priority") || 100,
          o = p(t, "priority") || 100;
        return n > o ? -1 : n < o ? 1 : 0;
      });
    }
    get commands() {
      return this.extensions.reduce((e, t) => {
        const n = p(t, "addCommands", {
          name: t.name,
          options: t.options,
          storage: t.storage,
          editor: this.editor,
          type: T(t.name, this.schema)
        });
        return n ? {
          ...e,
          ...n()
        } : e;
      }, {});
    }
    get plugins() {
      const {
          editor: e
        } = this,
        t = z.sort([...this.extensions].reverse()),
        n = [],
        o = [],
        s = t.map(t => {
          const s = {
              name: t.name,
              options: t.options,
              storage: t.storage,
              editor: e,
              type: T(t.name, this.schema)
            },
            i = [],
            a = p(t, "addKeyboardShortcuts", s);
          let c = {};
          if ("mark" === t.type && p(t, "exitable", s) && (c.ArrowRight = () => H.handleExit({
            editor: e,
            mark: t
          })), a) {
            const t = Object.fromEntries(Object.entries(a()).map(([t, n]) => [t, () => n({
              editor: e
            })]));
            c = {
              ...c,
              ...t
            };
          }
          const d = r.keymap(c);
          i.push(d);
          const l = p(t, "addInputRules", s);
          E(t, e.options.enableInputRules) && l && n.push(...l());
          const u = p(t, "addPasteRules", s);
          E(t, e.options.enablePasteRules) && u && o.push(...u());
          const h = p(t, "addProseMirrorPlugins", s);
          if (h) {
            const e = h();
            i.push(...e);
          }
          return i;
        }).flat();
      return [R({
        editor: e,
        rules: n
      }), ...B({
        editor: e,
        rules: o
      }), ...s];
    }
    get attributes() {
      return f(this.extensions);
    }
    get nodeViews() {
      const {
          editor: e
        } = this,
        {
          nodeExtensions: t
        } = m(this.extensions);
      return Object.fromEntries(t.filter(e => !!p(e, "addNodeView")).map(t => {
        const n = this.attributes.filter(e => e.type === t.name),
          o = {
            name: t.name,
            options: t.options,
            storage: t.storage,
            editor: e,
            type: g(t.name, this.schema)
          },
          s = p(t, "addNodeView", o);
        return s ? [t.name, (o, r, i, a, c) => {
          const d = y(o, n);
          return s()({
            node: o,
            view: r,
            getPos: i,
            decorations: a,
            innerDecorations: c,
            editor: e,
            extension: t,
            HTMLAttributes: d
          });
        }] : [];
      }));
    }
    setupExtensions() {
      this.extensions.forEach(e => {
        var t;
        this.editor.extensionStorage[e.name] = e.storage;
        const n = {
          name: e.name,
          options: e.options,
          storage: e.storage,
          editor: this.editor,
          type: T(e.name, this.schema)
        };
        "mark" === e.type && (null === (t = w(p(e, "keepOnSplit", n))) || void 0 === t || t) && this.splittableMarks.push(e.name);
        const o = p(e, "onBeforeCreate", n),
          s = p(e, "onCreate", n),
          r = p(e, "onUpdate", n),
          i = p(e, "onSelectionUpdate", n),
          a = p(e, "onTransaction", n),
          c = p(e, "onFocus", n),
          d = p(e, "onBlur", n),
          l = p(e, "onDestroy", n);
        o && this.editor.on("beforeCreate", o), s && this.editor.on("create", s), r && this.editor.on("update", r), i && this.editor.on("selectionUpdate", i), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), d && this.editor.on("blur", d), l && this.editor.on("destroy", l);
      });
    }
  }
  class V {
    constructor(e = {}) {
      this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
        name: this.name,
        defaultOptions: {}
      }, this.config = {
        ...this.config,
        ...e
      }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = w(p(this, "addOptions", {
        name: this.name
      }))), this.storage = w(p(this, "addStorage", {
        name: this.name,
        options: this.options
      })) || {};
    }
    static create(e = {}) {
      return new V(e);
    }
    configure(e = {}) {
      const t = this.extend({
        ...this.config,
        addOptions: () => D(this.options, e)
      });
      return t.name = this.name, t.parent = this.parent, t;
    }
    extend(e = {}) {
      const t = new V({
        ...this.config,
        ...e
      });
      return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = w(p(t, "addOptions", {
        name: t.name
      })), t.storage = w(p(t, "addStorage", {
        name: t.name,
        options: t.options
      })), t;
    }
  }
  function F(e, t, n) {
    const {
        from: o,
        to: s
      } = t,
      {
        blockSeparator: r = "\n\n",
        textSerializers: i = {}
      } = n || {};
    let a = "";
    return e.nodesBetween(o, s, (e, n, c, d) => {
      var l;
      e.isBlock && n > o && (a += r);
      const u = null == i ? void 0 : i[e.type.name];
      if (u) return c && (a += u({
        node: e,
        pos: n,
        parent: c,
        index: d,
        range: t
      })), !1;
      e.isText && (a += null === (l = null == e ? void 0 : e.text) || void 0 === l ? void 0 : l.slice(Math.max(o, n) - n, s - n));
    }), a;
  }
  function W(e) {
    return Object.fromEntries(Object.entries(e.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
  }
  const K = V.create({
    name: "clipboardTextSerializer",
    addOptions: () => ({
      blockSeparator: void 0
    }),
    addProseMirrorPlugins() {
      return [new o.Plugin({
        key: new o.PluginKey("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const {
                editor: e
              } = this,
              {
                state: t,
                schema: n
              } = e,
              {
                doc: o,
                selection: s
              } = t,
              {
                ranges: r
              } = s,
              i = Math.min(...r.map(e => e.$from.pos)),
              a = Math.max(...r.map(e => e.$to.pos)),
              c = W(n);
            return F(o, {
              from: i,
              to: a
            }, {
              ...(void 0 !== this.options.blockSeparator ? {
                blockSeparator: this.options.blockSeparator
              } : {}),
              textSerializers: c
            });
          }
        }
      })];
    }
  });
  function q(e, t, n = {
    strict: !0
  }) {
    const o = Object.keys(t);
    return !o.length || o.every(o => n.strict ? t[o] === e[o] : P(t[o]) ? t[o].test(e[o]) : t[o] === e[o]);
  }
  function J(e, t, n = {}) {
    return e.find(e => e.type === t && q(Object.fromEntries(Object.keys(n).map(t => [t, e.attrs[t]])), n));
  }
  function G(e, t, n = {}) {
    return !!J(e, t, n);
  }
  function Q(e, t, n) {
    var o;
    if (!e || !t) return;
    let s = e.parent.childAfter(e.parentOffset);
    if (s.node && s.node.marks.some(e => e.type === t) || (s = e.parent.childBefore(e.parentOffset)), !s.node || !s.node.marks.some(e => e.type === t)) return;
    if (n = n || (null === (o = s.node.marks[0]) || void 0 === o ? void 0 : o.attrs), !J([...s.node.marks], t, n)) return;
    let r = s.index,
      i = e.start() + s.offset,
      a = r + 1,
      c = i + s.node.nodeSize;
    for (; r > 0 && G([...e.parent.child(r - 1).marks], t, n);) r -= 1, i -= e.parent.child(r).nodeSize;
    for (; a < e.parent.childCount && G([...e.parent.child(a).marks], t, n);) c += e.parent.child(a).nodeSize, a += 1;
    return {
      from: i,
      to: c
    };
  }
  function Y(e, t) {
    if ("string" == typeof e) {
      if (!t.marks[e]) throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);
      return t.marks[e];
    }
    return e;
  }
  function X(e) {
    return e instanceof o.TextSelection;
  }
  function Z(e = 0, t = 0, n = 0) {
    return Math.min(Math.max(e, t), n);
  }
  function ee(e, t = null) {
    if (!t) return null;
    const n = o.Selection.atStart(e),
      s = o.Selection.atEnd(e);
    if ("start" === t || !0 === t) return n;
    if ("end" === t) return s;
    const r = n.from,
      i = s.to;
    return "all" === t ? o.TextSelection.create(e, Z(0, r, i), Z(e.content.size, r, i)) : o.TextSelection.create(e, Z(t, r, i), Z(t, r, i));
  }
  function te() {
    return "Android" === navigator.platform || /android/i.test(navigator.userAgent);
  }
  function ne() {
    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
  }
  const oe = e => {
    const t = e.childNodes;
    for (let n = t.length - 1; n >= 0; n -= 1) {
      const o = t[n];
      3 === o.nodeType && o.nodeValue && /^(\n\s\s|\n)$/.test(o.nodeValue) ? e.removeChild(o) : 1 === o.nodeType && oe(o);
    }
    return e;
  };
  function se(e) {
    const t = `<body>${e}</body>`,
      n = new window.DOMParser().parseFromString(t, "text/html").body;
    return oe(n);
  }
  function re(e, t, n) {
    if (e instanceof i.Node || e instanceof i.Fragment) return e;
    n = {
      slice: !0,
      parseOptions: {},
      ...n
    };
    const o = "string" == typeof e;
    if ("object" == typeof e && null !== e) try {
      if (Array.isArray(e) && e.length > 0) return i.Fragment.fromArray(e.map(e => t.nodeFromJSON(e)));
      const o = t.nodeFromJSON(e);
      return n.errorOnInvalidContent && o.check(), o;
    } catch (o) {
      if (n.errorOnInvalidContent) throw new Error("[tiptap error]: Invalid JSON content", {
        cause: o
      });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", e, "Error:", o), re("", t, n);
    }
    if (o) {
      if (n.errorOnInvalidContent) {
        let o = !1,
          s = "";
        const r = new i.Schema({
          topNode: t.spec.topNode,
          marks: t.spec.marks,
          nodes: t.spec.nodes.append({
            __tiptap__private__unknown__catch__all__node: {
              content: "inline*",
              group: "block",
              parseDOM: [{
                tag: "*",
                getAttrs: e => (o = !0, s = "string" == typeof e ? e : e.outerHTML, null)
              }]
            }
          })
        });
        if (n.slice ? i.DOMParser.fromSchema(r).parseSlice(se(e), n.parseOptions) : i.DOMParser.fromSchema(r).parse(se(e), n.parseOptions), n.errorOnInvalidContent && o) throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${s}`)
        });
      }
      const o = i.DOMParser.fromSchema(t);
      return n.slice ? o.parseSlice(se(e), n.parseOptions).content : o.parse(se(e), n.parseOptions);
    }
    return re("", t, n);
  }
  function ie(e, t, n) {
    const s = e.steps.length - 1;
    if (s < t) return;
    const r = e.steps[s];
    if (!(r instanceof a.ReplaceStep || r instanceof a.ReplaceAroundStep)) return;
    const i = e.mapping.maps[s];
    let c = 0;
    i.forEach((e, t, n, o) => {
      0 === c && (c = o);
    }), e.setSelection(o.Selection.near(e.doc.resolve(c), n));
  }
  function ae() {
    return "undefined" != typeof navigator && /Mac/.test(navigator.platform);
  }
  function ce(e, t, n = {}) {
    const {
        from: o,
        to: s,
        empty: r
      } = e.selection,
      i = t ? g(t, e.schema) : null,
      a = [];
    e.doc.nodesBetween(o, s, (e, t) => {
      if (e.isText) return;
      const n = Math.max(o, t),
        r = Math.min(s, t + e.nodeSize);
      a.push({
        node: e,
        from: n,
        to: r
      });
    });
    const c = s - o,
      d = a.filter(e => !i || i.name === e.node.type.name).filter(e => q(e.node.attrs, n, {
        strict: !1
      }));
    return r ? !!d.length : d.reduce((e, t) => e + t.to - t.from, 0) >= c;
  }
  function de(e, t) {
    return t.nodes[e] ? "node" : t.marks[e] ? "mark" : null;
  }
  function le(e, t) {
    const n = "string" == typeof t ? [t] : t;
    return Object.keys(e).reduce((t, o) => (n.includes(o) || (t[o] = e[o]), t), {});
  }
  function ue(e, t, n = {}, o = {}) {
    return re(e, t, {
      slice: !1,
      parseOptions: n,
      errorOnInvalidContent: o.errorOnInvalidContent
    });
  }
  function he(e, t) {
    const n = Y(t, e.schema),
      {
        from: o,
        to: s,
        empty: r
      } = e.selection,
      i = [];
    r ? (e.storedMarks && i.push(...e.storedMarks), i.push(...e.selection.$head.marks())) : e.doc.nodesBetween(o, s, e => {
      i.push(...e.marks);
    });
    const a = i.find(e => e.type.name === n.name);
    return a ? {
      ...a.attrs
    } : {};
  }
  function pe(e) {
    for (let t = 0; t < e.edgeCount; t += 1) {
      const {
        type: n
      } = e.edge(t);
      if (n.isTextblock && !n.hasRequiredAttrs()) return n;
    }
    return null;
  }
  function me(e, t) {
    for (let n = e.depth; n > 0; n -= 1) {
      const o = e.node(n);
      if (t(o)) return {
        pos: n > 0 ? e.before(n) : 0,
        start: e.start(n),
        depth: n,
        node: o
      };
    }
  }
  function fe(e) {
    return t => me(t.$from, e);
  }
  function ge(e, t) {
    return C(z.resolve(e), t);
  }
  function be(e, t) {
    return F(e, {
      from: 0,
      to: e.content.size
    }, t);
  }
  function ye(e, t) {
    const n = g(t, e.schema),
      {
        from: o,
        to: s
      } = e.selection,
      r = [];
    e.doc.nodesBetween(o, s, e => {
      r.push(e);
    });
    const i = r.reverse().find(e => e.type.name === n.name);
    return i ? {
      ...i.attrs
    } : {};
  }
  function ve(e, t) {
    const n = de("string" == typeof t ? t : t.name, e.schema);
    return "node" === n ? ye(e, t) : "mark" === n ? he(e, t) : {};
  }
  function we(e, t = JSON.stringify) {
    const n = {};
    return e.filter(e => {
      const o = t(e);
      return !Object.prototype.hasOwnProperty.call(n, o) && (n[o] = !0);
    });
  }
  function ke(e, t, n) {
    const o = [];
    return e === t ? n.resolve(e).marks().forEach(t => {
      const s = Q(n.resolve(e), t.type);
      s && o.push({
        mark: t,
        ...s
      });
    }) : n.nodesBetween(e, t, (e, t) => {
      e && void 0 !== (null == e ? void 0 : e.nodeSize) && o.push(...e.marks.map(n => ({
        from: t,
        to: t + e.nodeSize,
        mark: n
      })));
    }), o;
  }
  function Me(e, t, n) {
    return Object.fromEntries(Object.entries(n).filter(([n]) => {
      const o = e.find(e => e.type === t && e.name === n);
      return !!o && o.attribute.keepOnSplit;
    }));
  }
  function Se(e, t, n = {}) {
    const {
        empty: o,
        ranges: s
      } = e.selection,
      r = t ? Y(t, e.schema) : null;
    if (o) return !!(e.storedMarks || e.selection.$from.marks()).filter(e => !r || r.name === e.type.name).find(e => q(e.attrs, n, {
      strict: !1
    }));
    let i = 0;
    const a = [];
    if (s.forEach(({
      $from: t,
      $to: n
    }) => {
      const o = t.pos,
        s = n.pos;
      e.doc.nodesBetween(o, s, (e, t) => {
        if (!e.isText && !e.marks.length) return;
        const n = Math.max(o, t),
          r = Math.min(s, t + e.nodeSize);
        i += r - n, a.push(...e.marks.map(e => ({
          mark: e,
          from: n,
          to: r
        })));
      });
    }), 0 === i) return !1;
    const c = a.filter(e => !r || r.name === e.mark.type.name).filter(e => q(e.mark.attrs, n, {
        strict: !1
      })).reduce((e, t) => e + t.to - t.from, 0),
      d = a.filter(e => !r || e.mark.type !== r && e.mark.type.excludes(r)).reduce((e, t) => e + t.to - t.from, 0);
    return (c > 0 ? c + d : c) >= i;
  }
  function xe(e, t, n = {}) {
    if (!t) return ce(e, null, n) || Se(e, null, n);
    const o = de(t, e.schema);
    return "node" === o ? ce(e, t, n) : "mark" === o && Se(e, t, n);
  }
  function Ce(e, t) {
    const {
        nodeExtensions: n
      } = m(t),
      o = n.find(t => t.name === e);
    if (!o) return !1;
    const s = w(p(o, "group", {
      name: o.name,
      options: o.options,
      storage: o.storage
    }));
    return "string" == typeof s && s.split(" ").includes("list");
  }
  function Te(e, {
    checkChildren: t = !0,
    ignoreWhitespace: n = !1
  } = {}) {
    var o;
    if (n) {
      if ("hardBreak" === e.type.name) return !0;
      if (e.isText) return /^\s*$/m.test(null !== (o = e.text) && void 0 !== o ? o : "");
    }
    if (e.isText) return !e.text;
    if (e.isAtom || e.isLeaf) return !1;
    if (0 === e.content.childCount) return !0;
    if (t) {
      let o = !0;
      return e.content.forEach(e => {
        !1 !== o && (Te(e, {
          ignoreWhitespace: n,
          checkChildren: t
        }) || (o = !1));
      }), o;
    }
    return !1;
  }
  function Ee({
    json: e,
    validMarks: t,
    validNodes: n,
    options: o,
    rewrittenContent: s = []
  }) {
    return e.marks && Array.isArray(e.marks) && (e.marks = e.marks.filter(e => {
      const n = "string" == typeof e ? e : e.type;
      return !!t.has(n) || (s.push({
        original: JSON.parse(JSON.stringify(e)),
        unsupported: n
      }), !1);
    })), e.content && Array.isArray(e.content) && (e.content = e.content.map(e => Ee({
      json: e,
      validMarks: t,
      validNodes: n,
      options: o,
      rewrittenContent: s
    }).json).filter(e => null != e)), e.type && !n.has(e.type) ? (s.push({
      original: JSON.parse(JSON.stringify(e)),
      unsupported: e.type
    }), e.content && Array.isArray(e.content) && !1 !== (null == o ? void 0 : o.fallbackToParagraph) ? (e.type = "paragraph", {
      json: e,
      rewrittenContent: s
    }) : {
      json: null,
      rewrittenContent: s
    }) : {
      json: e,
      rewrittenContent: s
    };
  }
  function Oe(e, t) {
    const n = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
    if (n) {
      const o = n.filter(e => null == t ? void 0 : t.includes(e.type.name));
      e.tr.ensureMarks(o);
    }
  }
  const Ae = (e, t) => {
      const n = fe(e => e.type === t)(e.selection);
      if (!n) return !0;
      const o = e.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
      if (void 0 === o) return !0;
      const s = e.doc.nodeAt(o);
      return n.node.type !== (null == s ? void 0 : s.type) || !a.canJoin(e.doc, n.pos) || (e.join(n.pos), !0);
    },
    Pe = (e, t) => {
      const n = fe(e => e.type === t)(e.selection);
      if (!n) return !0;
      const o = e.doc.resolve(n.start).after(n.depth);
      if (void 0 === o) return !0;
      const s = e.doc.nodeAt(o);
      return n.node.type !== (null == s ? void 0 : s.type) || !a.canJoin(e.doc, o) || (e.join(o), !0);
    };
  var Le = Object.freeze({
    __proto__: null,
    blur: () => ({
      editor: e,
      view: t
    }) => (requestAnimationFrame(() => {
      var n;
      e.isDestroyed || (t.dom.blur(), null === (n = null === window || void 0 === window ? void 0 : window.getSelection()) || void 0 === n || n.removeAllRanges());
    }), !0),
    clearContent: (e = !1) => ({
      commands: t
    }) => t.setContent("", e),
    clearNodes: () => ({
      state: e,
      tr: t,
      dispatch: n
    }) => {
      const {
          selection: o
        } = t,
        {
          ranges: s
        } = o;
      return !n || (s.forEach(({
        $from: n,
        $to: o
      }) => {
        e.doc.nodesBetween(n.pos, o.pos, (e, n) => {
          if (e.type.isText) return;
          const {
              doc: o,
              mapping: s
            } = t,
            r = o.resolve(s.map(n)),
            i = o.resolve(s.map(n + e.nodeSize)),
            c = r.blockRange(i);
          if (!c) return;
          const d = a.liftTarget(c);
          if (e.type.isTextblock) {
            const {
              defaultType: e
            } = r.parent.contentMatchAt(r.index());
            t.setNodeMarkup(c.start, e);
          }
          (d || 0 === d) && t.lift(c, d);
        });
      }), !0);
    },
    command: e => t => e(t),
    createParagraphNear: () => ({
      state: e,
      dispatch: t
    }) => c.createParagraphNear(e, t),
    cut: (e, t) => ({
      editor: n,
      tr: s
    }) => {
      const {
          state: r
        } = n,
        i = r.doc.slice(e.from, e.to);
      s.deleteRange(e.from, e.to);
      const a = s.mapping.map(t);
      return s.insert(a, i.content), s.setSelection(new o.TextSelection(s.doc.resolve(Math.max(a - 1, 0)))), !0;
    },
    deleteCurrentNode: () => ({
      tr: e,
      dispatch: t
    }) => {
      const {
          selection: n
        } = e,
        o = n.$anchor.node();
      if (o.content.size > 0) return !1;
      const s = e.selection.$anchor;
      for (let n = s.depth; n > 0; n -= 1) if (s.node(n).type === o.type) {
        if (t) {
          const t = s.before(n),
            o = s.after(n);
          e.delete(t, o).scrollIntoView();
        }
        return !0;
      }
      return !1;
    },
    deleteNode: e => ({
      tr: t,
      state: n,
      dispatch: o
    }) => {
      const s = g(e, n.schema),
        r = t.selection.$anchor;
      for (let e = r.depth; e > 0; e -= 1) if (r.node(e).type === s) {
        if (o) {
          const n = r.before(e),
            o = r.after(e);
          t.delete(n, o).scrollIntoView();
        }
        return !0;
      }
      return !1;
    },
    deleteRange: e => ({
      tr: t,
      dispatch: n
    }) => {
      const {
        from: o,
        to: s
      } = e;
      return n && t.delete(o, s), !0;
    },
    deleteSelection: () => ({
      state: e,
      dispatch: t
    }) => c.deleteSelection(e, t),
    enter: () => ({
      commands: e
    }) => e.keyboardShortcut("Enter"),
    exitCode: () => ({
      state: e,
      dispatch: t
    }) => c.exitCode(e, t),
    extendMarkRange: (e, t = {}) => ({
      tr: n,
      state: s,
      dispatch: r
    }) => {
      const i = Y(e, s.schema),
        {
          doc: a,
          selection: c
        } = n,
        {
          $from: d,
          from: l,
          to: u
        } = c;
      if (r) {
        const e = Q(d, i, t);
        if (e && e.from <= l && e.to >= u) {
          const t = o.TextSelection.create(a, e.from, e.to);
          n.setSelection(t);
        }
      }
      return !0;
    },
    first: e => t => {
      const n = "function" == typeof e ? e(t) : e;
      for (let e = 0; e < n.length; e += 1) if (n[e](t)) return !0;
      return !1;
    },
    focus: (e = null, t = {}) => ({
      editor: n,
      view: o,
      tr: s,
      dispatch: r
    }) => {
      t = {
        scrollIntoView: !0,
        ...t
      };
      const i = () => {
        (ne() || te()) && o.dom.focus(), requestAnimationFrame(() => {
          n.isDestroyed || (o.focus(), (null == t ? void 0 : t.scrollIntoView) && n.commands.scrollIntoView());
        });
      };
      if (o.hasFocus() && null === e || !1 === e) return !0;
      if (r && null === e && !X(n.state.selection)) return i(), !0;
      const a = ee(s.doc, e) || n.state.selection,
        c = n.state.selection.eq(a);
      return r && (c || s.setSelection(a), c && s.storedMarks && s.setStoredMarks(s.storedMarks), i()), !0;
    },
    forEach: (e, t) => n => e.every((e, o) => t(e, {
      ...n,
      index: o
    })),
    insertContent: (e, t) => ({
      tr: n,
      commands: o
    }) => o.insertContentAt({
      from: n.selection.from,
      to: n.selection.to
    }, e, t),
    insertContentAt: (e, t, n) => ({
      tr: o,
      dispatch: s,
      editor: r
    }) => {
      var a;
      if (s) {
        let s;
        const c = e => {
            r.emit("contentError", {
              editor: r,
              error: e,
              disableCollaboration: () => {
                r.storage.collaboration && (r.storage.collaboration.isDisabled = !0);
              }
            });
          },
          d = {
            preserveWhitespace: "full",
            ...(n = {
              parseOptions: r.options.parseOptions,
              updateSelection: !0,
              applyInputRules: !1,
              applyPasteRules: !1,
              ...n
            }).parseOptions
          };
        if (!n.errorOnInvalidContent && !r.options.enableContentCheck && r.options.emitContentError) try {
          re(t, r.schema, {
            parseOptions: d,
            errorOnInvalidContent: !0
          });
        } catch (e) {
          c(e);
        }
        try {
          s = re(t, r.schema, {
            parseOptions: d,
            errorOnInvalidContent: null !== (a = n.errorOnInvalidContent) && void 0 !== a ? a : r.options.enableContentCheck
          });
        } catch (e) {
          return c(e), !1;
        }
        let l,
          {
            from: u,
            to: h
          } = "number" == typeof e ? {
            from: e,
            to: e
          } : {
            from: e.from,
            to: e.to
          },
          p = !0,
          m = !0;
        if (("type" in s ? [s] : s).forEach(e => {
          e.check(), p = !!p && e.isText && 0 === e.marks.length, m = !!m && e.isBlock;
        }), u === h && m) {
          const {
            parent: e
          } = o.doc.resolve(u);
          e.isTextblock && !e.type.spec.code && !e.childCount && (u -= 1, h += 1);
        }
        if (p) {
          if (Array.isArray(t)) l = t.map(e => e.text || "").join("");else if (t instanceof i.Fragment) {
            let e = "";
            t.forEach(t => {
              t.text && (e += t.text);
            }), l = e;
          } else l = "object" == typeof t && t && t.text ? t.text : t;
          o.insertText(l, u, h);
        } else l = s, o.replaceWith(u, h, l);
        n.updateSelection && ie(o, o.steps.length - 1, -1), n.applyInputRules && o.setMeta("applyInputRules", {
          from: u,
          text: l
        }), n.applyPasteRules && o.setMeta("applyPasteRules", {
          from: u,
          text: l
        });
      }
      return !0;
    },
    joinBackward: () => ({
      state: e,
      dispatch: t
    }) => c.joinBackward(e, t),
    joinDown: () => ({
      state: e,
      dispatch: t
    }) => c.joinDown(e, t),
    joinForward: () => ({
      state: e,
      dispatch: t
    }) => c.joinForward(e, t),
    joinItemBackward: () => ({
      state: e,
      dispatch: t,
      tr: n
    }) => {
      try {
        const o = a.joinPoint(e.doc, e.selection.$from.pos, -1);
        return null != o && (n.join(o, 2), t && t(n), !0);
      } catch {
        return !1;
      }
    },
    joinItemForward: () => ({
      state: e,
      dispatch: t,
      tr: n
    }) => {
      try {
        const o = a.joinPoint(e.doc, e.selection.$from.pos, 1);
        return null != o && (n.join(o, 2), t && t(n), !0);
      } catch {
        return !1;
      }
    },
    joinTextblockBackward: () => ({
      state: e,
      dispatch: t
    }) => c.joinTextblockBackward(e, t),
    joinTextblockForward: () => ({
      state: e,
      dispatch: t
    }) => c.joinTextblockForward(e, t),
    joinUp: () => ({
      state: e,
      dispatch: t
    }) => c.joinUp(e, t),
    keyboardShortcut: e => ({
      editor: t,
      view: n,
      tr: o,
      dispatch: s
    }) => {
      const r = function (e) {
          const t = e.split(/-(?!$)/);
          let n,
            o,
            s,
            r,
            i = t[t.length - 1];
          "Space" === i && (i = " ");
          for (let e = 0; e < t.length - 1; e += 1) {
            const i = t[e];
            if (/^(cmd|meta|m)$/i.test(i)) r = !0;else if (/^a(lt)?$/i.test(i)) n = !0;else if (/^(c|ctrl|control)$/i.test(i)) o = !0;else if (/^s(hift)?$/i.test(i)) s = !0;else {
              if (!/^mod$/i.test(i)) throw new Error(`Unrecognized modifier name: ${i}`);
              ne() || ae() ? r = !0 : o = !0;
            }
          }
          return n && (i = `Alt-${i}`), o && (i = `Ctrl-${i}`), r && (i = `Meta-${i}`), s && (i = `Shift-${i}`), i;
        }(e).split(/-(?!$)/),
        i = r.find(e => !["Alt", "Ctrl", "Meta", "Shift"].includes(e)),
        a = new KeyboardEvent("keydown", {
          key: "Space" === i ? " " : i,
          altKey: r.includes("Alt"),
          ctrlKey: r.includes("Ctrl"),
          metaKey: r.includes("Meta"),
          shiftKey: r.includes("Shift"),
          bubbles: !0,
          cancelable: !0
        }),
        c = t.captureTransaction(() => {
          n.someProp("handleKeyDown", e => e(n, a));
        });
      return null == c || c.steps.forEach(e => {
        const t = e.map(o.mapping);
        t && s && o.maybeStep(t);
      }), !0;
    },
    lift: (e, t = {}) => ({
      state: n,
      dispatch: o
    }) => !!ce(n, g(e, n.schema), t) && c.lift(n, o),
    liftEmptyBlock: () => ({
      state: e,
      dispatch: t
    }) => c.liftEmptyBlock(e, t),
    liftListItem: e => ({
      state: t,
      dispatch: n
    }) => {
      const o = g(e, t.schema);
      return d.liftListItem(o)(t, n);
    },
    newlineInCode: () => ({
      state: e,
      dispatch: t
    }) => c.newlineInCode(e, t),
    resetAttributes: (e, t) => ({
      tr: n,
      state: o,
      dispatch: s
    }) => {
      let r = null,
        i = null;
      const a = de("string" == typeof e ? e : e.name, o.schema);
      return !!a && ("node" === a && (r = g(e, o.schema)), "mark" === a && (i = Y(e, o.schema)), s && n.selection.ranges.forEach(e => {
        o.doc.nodesBetween(e.$from.pos, e.$to.pos, (e, o) => {
          r && r === e.type && n.setNodeMarkup(o, void 0, le(e.attrs, t)), i && e.marks.length && e.marks.forEach(s => {
            i === s.type && n.addMark(o, o + e.nodeSize, i.create(le(s.attrs, t)));
          });
        });
      }), !0);
    },
    scrollIntoView: () => ({
      tr: e,
      dispatch: t
    }) => (t && e.scrollIntoView(), !0),
    selectAll: () => ({
      tr: e,
      dispatch: t
    }) => {
      if (t) {
        const t = new o.AllSelection(e.doc);
        e.setSelection(t);
      }
      return !0;
    },
    selectNodeBackward: () => ({
      state: e,
      dispatch: t
    }) => c.selectNodeBackward(e, t),
    selectNodeForward: () => ({
      state: e,
      dispatch: t
    }) => c.selectNodeForward(e, t),
    selectParentNode: () => ({
      state: e,
      dispatch: t
    }) => c.selectParentNode(e, t),
    selectTextblockEnd: () => ({
      state: e,
      dispatch: t
    }) => c.selectTextblockEnd(e, t),
    selectTextblockStart: () => ({
      state: e,
      dispatch: t
    }) => c.selectTextblockStart(e, t),
    setContent: (e, t = !1, n = {}, o = {}) => ({
      editor: s,
      tr: r,
      dispatch: i,
      commands: a
    }) => {
      var c, d;
      const {
        doc: l
      } = r;
      if ("full" !== n.preserveWhitespace) {
        const a = ue(e, s.schema, n, {
          errorOnInvalidContent: null !== (c = o.errorOnInvalidContent) && void 0 !== c ? c : s.options.enableContentCheck
        });
        return i && r.replaceWith(0, l.content.size, a).setMeta("preventUpdate", !t), !0;
      }
      return i && r.setMeta("preventUpdate", !t), a.insertContentAt({
        from: 0,
        to: l.content.size
      }, e, {
        parseOptions: n,
        errorOnInvalidContent: null !== (d = o.errorOnInvalidContent) && void 0 !== d ? d : s.options.enableContentCheck
      });
    },
    setMark: (e, t = {}) => ({
      tr: n,
      state: o,
      dispatch: s
    }) => {
      const {
          selection: r
        } = n,
        {
          empty: i,
          ranges: a
        } = r,
        c = Y(e, o.schema);
      if (s) if (i) {
        const e = he(o, c);
        n.addStoredMark(c.create({
          ...e,
          ...t
        }));
      } else a.forEach(e => {
        const s = e.$from.pos,
          r = e.$to.pos;
        o.doc.nodesBetween(s, r, (e, o) => {
          const i = Math.max(o, s),
            a = Math.min(o + e.nodeSize, r);
          e.marks.find(e => e.type === c) ? e.marks.forEach(e => {
            c === e.type && n.addMark(i, a, c.create({
              ...e.attrs,
              ...t
            }));
          }) : n.addMark(i, a, c.create(t));
        });
      });
      return function (e, t, n) {
        var o;
        const {
          selection: s
        } = t;
        let r = null;
        if (X(s) && (r = s.$cursor), r) {
          const t = null !== (o = e.storedMarks) && void 0 !== o ? o : r.marks();
          return !!n.isInSet(t) || !t.some(e => e.type.excludes(n));
        }
        const {
          ranges: i
        } = s;
        return i.some(({
          $from: t,
          $to: o
        }) => {
          let s = 0 === t.depth && e.doc.inlineContent && e.doc.type.allowsMarkType(n);
          return e.doc.nodesBetween(t.pos, o.pos, (e, t, o) => {
            if (s) return !1;
            if (e.isInline) {
              const t = !o || o.type.allowsMarkType(n),
                r = !!n.isInSet(e.marks) || !e.marks.some(e => e.type.excludes(n));
              s = t && r;
            }
            return !s;
          }), s;
        });
      }(o, n, c);
    },
    setMeta: (e, t) => ({
      tr: n
    }) => (n.setMeta(e, t), !0),
    setNode: (e, t = {}) => ({
      state: n,
      dispatch: o,
      chain: s
    }) => {
      const r = g(e, n.schema);
      let i;
      return n.selection.$anchor.sameParent(n.selection.$head) && (i = n.selection.$anchor.parent.attrs), r.isTextblock ? s().command(({
        commands: e
      }) => !!c.setBlockType(r, {
        ...i,
        ...t
      })(n) || e.clearNodes()).command(({
        state: e
      }) => c.setBlockType(r, {
        ...i,
        ...t
      })(e, o)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
    },
    setNodeSelection: e => ({
      tr: t,
      dispatch: n
    }) => {
      if (n) {
        const {
            doc: n
          } = t,
          s = Z(e, 0, n.content.size),
          r = o.NodeSelection.create(n, s);
        t.setSelection(r);
      }
      return !0;
    },
    setTextSelection: e => ({
      tr: t,
      dispatch: n
    }) => {
      if (n) {
        const {
            doc: n
          } = t,
          {
            from: s,
            to: r
          } = "number" == typeof e ? {
            from: e,
            to: e
          } : e,
          i = o.TextSelection.atStart(n).from,
          a = o.TextSelection.atEnd(n).to,
          c = Z(s, i, a),
          d = Z(r, i, a),
          l = o.TextSelection.create(n, c, d);
        t.setSelection(l);
      }
      return !0;
    },
    sinkListItem: e => ({
      state: t,
      dispatch: n
    }) => {
      const o = g(e, t.schema);
      return d.sinkListItem(o)(t, n);
    },
    splitBlock: ({
      keepMarks: e = !0
    } = {}) => ({
      tr: t,
      state: n,
      dispatch: s,
      editor: r
    }) => {
      const {
          selection: i,
          doc: c
        } = t,
        {
          $from: d,
          $to: l
        } = i,
        u = Me(r.extensionManager.attributes, d.node().type.name, d.node().attrs);
      if (i instanceof o.NodeSelection && i.node.isBlock) return !(!d.parentOffset || !a.canSplit(c, d.pos) || (s && (e && Oe(n, r.extensionManager.splittableMarks), t.split(d.pos).scrollIntoView()), 0));
      if (!d.parent.isBlock) return !1;
      const h = l.parentOffset === l.parent.content.size,
        p = 0 === d.depth ? void 0 : pe(d.node(-1).contentMatchAt(d.indexAfter(-1)));
      let m = h && p ? [{
          type: p,
          attrs: u
        }] : void 0,
        f = a.canSplit(t.doc, t.mapping.map(d.pos), 1, m);
      if (m || f || !a.canSplit(t.doc, t.mapping.map(d.pos), 1, p ? [{
        type: p
      }] : void 0) || (f = !0, m = p ? [{
        type: p,
        attrs: u
      }] : void 0), s) {
        if (f && (i instanceof o.TextSelection && t.deleteSelection(), t.split(t.mapping.map(d.pos), 1, m), p && !h && !d.parentOffset && d.parent.type !== p)) {
          const e = t.mapping.map(d.before()),
            n = t.doc.resolve(e);
          d.node(-1).canReplaceWith(n.index(), n.index() + 1, p) && t.setNodeMarkup(t.mapping.map(d.before()), p);
        }
        e && Oe(n, r.extensionManager.splittableMarks), t.scrollIntoView();
      }
      return f;
    },
    splitListItem: (e, t = {}) => ({
      tr: n,
      state: s,
      dispatch: r,
      editor: c
    }) => {
      var d;
      const l = g(e, s.schema),
        {
          $from: u,
          $to: h
        } = s.selection,
        p = s.selection.node;
      if (p && p.isBlock || u.depth < 2 || !u.sameParent(h)) return !1;
      const m = u.node(-1);
      if (m.type !== l) return !1;
      const f = c.extensionManager.attributes;
      if (0 === u.parent.content.size && u.node(-1).childCount === u.indexAfter(-1)) {
        if (2 === u.depth || u.node(-3).type !== l || u.index(-2) !== u.node(-2).childCount - 1) return !1;
        if (r) {
          let e = i.Fragment.empty;
          const s = u.index(-1) ? 1 : u.index(-2) ? 2 : 3;
          for (let t = u.depth - s; t >= u.depth - 3; t -= 1) e = i.Fragment.from(u.node(t).copy(e));
          const r = u.indexAfter(-1) < u.node(-2).childCount ? 1 : u.indexAfter(-2) < u.node(-3).childCount ? 2 : 3,
            a = {
              ...Me(f, u.node().type.name, u.node().attrs),
              ...t
            },
            c = (null === (d = l.contentMatch.defaultType) || void 0 === d ? void 0 : d.createAndFill(a)) || void 0;
          e = e.append(i.Fragment.from(l.createAndFill(null, c) || void 0));
          const h = u.before(u.depth - (s - 1));
          n.replace(h, u.after(-r), new i.Slice(e, 4 - s, 0));
          let p = -1;
          n.doc.nodesBetween(h, n.doc.content.size, (e, t) => {
            if (p > -1) return !1;
            e.isTextblock && 0 === e.content.size && (p = t + 1);
          }), p > -1 && n.setSelection(o.TextSelection.near(n.doc.resolve(p))), n.scrollIntoView();
        }
        return !0;
      }
      const b = h.pos === u.end() ? m.contentMatchAt(0).defaultType : null,
        y = {
          ...Me(f, m.type.name, m.attrs),
          ...t
        },
        v = {
          ...Me(f, u.node().type.name, u.node().attrs),
          ...t
        };
      n.delete(u.pos, h.pos);
      const w = b ? [{
        type: l,
        attrs: y
      }, {
        type: b,
        attrs: v
      }] : [{
        type: l,
        attrs: y
      }];
      if (!a.canSplit(n.doc, u.pos, 2)) return !1;
      if (r) {
        const {
            selection: e,
            storedMarks: t
          } = s,
          {
            splittableMarks: o
          } = c.extensionManager,
          i = t || e.$to.parentOffset && e.$from.marks();
        if (n.split(u.pos, 2, w).scrollIntoView(), !i || !r) return !0;
        const a = i.filter(e => o.includes(e.type.name));
        n.ensureMarks(a);
      }
      return !0;
    },
    toggleList: (e, t, n, o = {}) => ({
      editor: s,
      tr: r,
      state: i,
      dispatch: a,
      chain: c,
      commands: d,
      can: l
    }) => {
      const {
          extensions: u,
          splittableMarks: h
        } = s.extensionManager,
        p = g(e, i.schema),
        m = g(t, i.schema),
        {
          selection: f,
          storedMarks: b
        } = i,
        {
          $from: y,
          $to: v
        } = f,
        w = y.blockRange(v),
        k = b || f.$to.parentOffset && f.$from.marks();
      if (!w) return !1;
      const M = fe(e => Ce(e.type.name, u))(f);
      if (w.depth >= 1 && M && w.depth - M.depth <= 1) {
        if (M.node.type === p) return d.liftListItem(m);
        if (Ce(M.node.type.name, u) && p.validContent(M.node.content) && a) return c().command(() => (r.setNodeMarkup(M.pos, p), !0)).command(() => Ae(r, p)).command(() => Pe(r, p)).run();
      }
      return n && k && a ? c().command(() => {
        const e = l().wrapInList(p, o),
          t = k.filter(e => h.includes(e.type.name));
        return r.ensureMarks(t), !!e || d.clearNodes();
      }).wrapInList(p, o).command(() => Ae(r, p)).command(() => Pe(r, p)).run() : c().command(() => !!l().wrapInList(p, o) || d.clearNodes()).wrapInList(p, o).command(() => Ae(r, p)).command(() => Pe(r, p)).run();
    },
    toggleMark: (e, t = {}, n = {}) => ({
      state: o,
      commands: s
    }) => {
      const {
          extendEmptyMarkRange: r = !1
        } = n,
        i = Y(e, o.schema);
      return Se(o, i, t) ? s.unsetMark(i, {
        extendEmptyMarkRange: r
      }) : s.setMark(i, t);
    },
    toggleNode: (e, t, n = {}) => ({
      state: o,
      commands: s
    }) => {
      const r = g(e, o.schema),
        i = g(t, o.schema),
        a = ce(o, r, n);
      let c;
      return o.selection.$anchor.sameParent(o.selection.$head) && (c = o.selection.$anchor.parent.attrs), a ? s.setNode(i, c) : s.setNode(r, {
        ...c,
        ...n
      });
    },
    toggleWrap: (e, t = {}) => ({
      state: n,
      commands: o
    }) => {
      const s = g(e, n.schema);
      return ce(n, s, t) ? o.lift(s) : o.wrapIn(s, t);
    },
    undoInputRule: () => ({
      state: e,
      dispatch: t
    }) => {
      const n = e.plugins;
      for (let o = 0; o < n.length; o += 1) {
        const s = n[o];
        let r;
        if (s.spec.isInputRules && (r = s.getState(e))) {
          if (t) {
            const t = e.tr,
              n = r.transform;
            for (let e = n.steps.length - 1; e >= 0; e -= 1) t.step(n.steps[e].invert(n.docs[e]));
            if (r.text) {
              const n = t.doc.resolve(r.from).marks();
              t.replaceWith(r.from, r.to, e.schema.text(r.text, n));
            } else t.delete(r.from, r.to);
          }
          return !0;
        }
      }
      return !1;
    },
    unsetAllMarks: () => ({
      tr: e,
      dispatch: t
    }) => {
      const {
          selection: n
        } = e,
        {
          empty: o,
          ranges: s
        } = n;
      return o || t && s.forEach(t => {
        e.removeMark(t.$from.pos, t.$to.pos);
      }), !0;
    },
    unsetMark: (e, t = {}) => ({
      tr: n,
      state: o,
      dispatch: s
    }) => {
      var r;
      const {
          extendEmptyMarkRange: i = !1
        } = t,
        {
          selection: a
        } = n,
        c = Y(e, o.schema),
        {
          $from: d,
          empty: l,
          ranges: u
        } = a;
      if (!s) return !0;
      if (l && i) {
        let {
          from: e,
          to: t
        } = a;
        const o = null === (r = d.marks().find(e => e.type === c)) || void 0 === r ? void 0 : r.attrs,
          s = Q(d, c, o);
        s && (e = s.from, t = s.to), n.removeMark(e, t, c);
      } else u.forEach(e => {
        n.removeMark(e.$from.pos, e.$to.pos, c);
      });
      return n.removeStoredMark(c), !0;
    },
    updateAttributes: (e, t = {}) => ({
      tr: n,
      state: o,
      dispatch: s
    }) => {
      let r = null,
        i = null;
      const a = de("string" == typeof e ? e : e.name, o.schema);
      return !!a && ("node" === a && (r = g(e, o.schema)), "mark" === a && (i = Y(e, o.schema)), s && n.selection.ranges.forEach(e => {
        const s = e.$from.pos,
          a = e.$to.pos;
        let c, d, l, u;
        n.selection.empty ? o.doc.nodesBetween(s, a, (e, t) => {
          r && r === e.type && (l = Math.max(t, s), u = Math.min(t + e.nodeSize, a), c = t, d = e);
        }) : o.doc.nodesBetween(s, a, (e, o) => {
          o < s && r && r === e.type && (l = Math.max(o, s), u = Math.min(o + e.nodeSize, a), c = o, d = e), o >= s && o <= a && (r && r === e.type && n.setNodeMarkup(o, void 0, {
            ...e.attrs,
            ...t
          }), i && e.marks.length && e.marks.forEach(r => {
            if (i === r.type) {
              const c = Math.max(o, s),
                d = Math.min(o + e.nodeSize, a);
              n.addMark(c, d, i.create({
                ...r.attrs,
                ...t
              }));
            }
          }));
        }), d && (void 0 !== c && n.setNodeMarkup(c, void 0, {
          ...d.attrs,
          ...t
        }), i && d.marks.length && d.marks.forEach(e => {
          i === e.type && n.addMark(l, u, i.create({
            ...e.attrs,
            ...t
          }));
        }));
      }), !0);
    },
    wrapIn: (e, t = {}) => ({
      state: n,
      dispatch: o
    }) => {
      const s = g(e, n.schema);
      return c.wrapIn(s, t)(n, o);
    },
    wrapInList: (e, t = {}) => ({
      state: n,
      dispatch: o
    }) => {
      const s = g(e, n.schema);
      return d.wrapInList(s, t)(n, o);
    }
  });
  const Ne = V.create({
      name: "commands",
      addCommands: () => ({
        ...Le
      })
    }),
    Re = V.create({
      name: "drop",
      addProseMirrorPlugins() {
        return [new o.Plugin({
          key: new o.PluginKey("tiptapDrop"),
          props: {
            handleDrop: (e, t, n, o) => {
              this.editor.emit("drop", {
                editor: this.editor,
                event: t,
                slice: n,
                moved: o
              });
            }
          }
        })];
      }
    }),
    Ie = V.create({
      name: "editable",
      addProseMirrorPlugins() {
        return [new o.Plugin({
          key: new o.PluginKey("editable"),
          props: {
            editable: () => this.editor.options.editable
          }
        })];
      }
    }),
    De = new o.PluginKey("focusEvents"),
    He = V.create({
      name: "focusEvents",
      addProseMirrorPlugins() {
        const {
          editor: e
        } = this;
        return [new o.Plugin({
          key: De,
          props: {
            handleDOMEvents: {
              focus: (t, n) => {
                e.isFocused = !0;
                const o = e.state.tr.setMeta("focus", {
                  event: n
                }).setMeta("addToHistory", !1);
                return t.dispatch(o), !1;
              },
              blur: (t, n) => {
                e.isFocused = !1;
                const o = e.state.tr.setMeta("blur", {
                  event: n
                }).setMeta("addToHistory", !1);
                return t.dispatch(o), !1;
              }
            }
          }
        })];
      }
    }),
    $e = V.create({
      name: "keymap",
      addKeyboardShortcuts() {
        const e = () => this.editor.commands.first(({
            commands: e
          }) => [() => e.undoInputRule(), () => e.command(({
            tr: t
          }) => {
            const {
                selection: n,
                doc: s
              } = t,
              {
                empty: r,
                $anchor: i
              } = n,
              {
                pos: a,
                parent: c
              } = i,
              d = i.parent.isTextblock && a > 0 ? t.doc.resolve(a - 1) : i,
              l = d.parent.type.spec.isolating,
              u = i.pos - i.parentOffset,
              h = l && 1 === d.parent.childCount ? u === i.pos : o.Selection.atStart(s).from === a;
            return !(!r || !c.type.isTextblock || c.textContent.length || !h || h && "paragraph" === i.parent.type.name) && e.clearNodes();
          }), () => e.deleteSelection(), () => e.joinBackward(), () => e.selectNodeBackward()]),
          t = () => this.editor.commands.first(({
            commands: e
          }) => [() => e.deleteSelection(), () => e.deleteCurrentNode(), () => e.joinForward(), () => e.selectNodeForward()]),
          n = {
            Enter: () => this.editor.commands.first(({
              commands: e
            }) => [() => e.newlineInCode(), () => e.createParagraphNear(), () => e.liftEmptyBlock(), () => e.splitBlock()]),
            "Mod-Enter": () => this.editor.commands.exitCode(),
            Backspace: e,
            "Mod-Backspace": e,
            "Shift-Backspace": e,
            Delete: t,
            "Mod-Delete": t,
            "Mod-a": () => this.editor.commands.selectAll()
          },
          s = {
            ...n
          },
          r = {
            ...n,
            "Ctrl-h": e,
            "Alt-Backspace": e,
            "Ctrl-d": t,
            "Ctrl-Alt-Backspace": t,
            "Alt-Delete": t,
            "Alt-d": t,
            "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
            "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
          };
        return ne() || ae() ? r : s;
      },
      addProseMirrorPlugins() {
        return [new o.Plugin({
          key: new o.PluginKey("clearDocument"),
          appendTransaction: (e, t, n) => {
            if (e.some(e => e.getMeta("composition"))) return;
            const s = e.some(e => e.docChanged) && !t.doc.eq(n.doc),
              r = e.some(e => e.getMeta("preventClearDocument"));
            if (!s || r) return;
            const {
                empty: i,
                from: a,
                to: c
              } = t.selection,
              d = o.Selection.atStart(t.doc).from,
              h = o.Selection.atEnd(t.doc).to;
            if (i || a !== d || c !== h) return;
            if (!Te(n.doc)) return;
            const p = n.tr,
              m = l({
                state: n,
                transaction: p
              }),
              {
                commands: f
              } = new u({
                editor: this.editor,
                state: m
              });
            return f.clearNodes(), p.steps.length ? p : void 0;
          }
        })];
      }
    }),
    je = V.create({
      name: "paste",
      addProseMirrorPlugins() {
        return [new o.Plugin({
          key: new o.PluginKey("tiptapPaste"),
          props: {
            handlePaste: (e, t, n) => {
              this.editor.emit("paste", {
                editor: this.editor,
                event: t,
                slice: n
              });
            }
          }
        })];
      }
    }),
    _e = V.create({
      name: "tabindex",
      addProseMirrorPlugins() {
        return [new o.Plugin({
          key: new o.PluginKey("tabindex"),
          props: {
            attributes: () => this.editor.isEditable ? {
              tabindex: "0"
            } : {}
          }
        })];
      }
    });
  var Be = Object.freeze({
    __proto__: null,
    ClipboardTextSerializer: K,
    Commands: Ne,
    Drop: Re,
    Editable: Ie,
    FocusEvents: He,
    Keymap: $e,
    Paste: je,
    Tabindex: _e,
    focusEventsPluginKey: De
  });
  class Ue {
    get name() {
      return this.node.type.name;
    }
    constructor(e, t, n = !1, o = null) {
      this.currentNode = null, this.actualDepth = null, this.isBlock = n, this.resolvedPos = e, this.editor = t, this.currentNode = o;
    }
    get node() {
      return this.currentNode || this.resolvedPos.node();
    }
    get element() {
      return this.editor.view.domAtPos(this.pos).node;
    }
    get depth() {
      var e;
      return null !== (e = this.actualDepth) && void 0 !== e ? e : this.resolvedPos.depth;
    }
    get pos() {
      return this.resolvedPos.pos;
    }
    get content() {
      return this.node.content;
    }
    set content(e) {
      let t = this.from,
        n = this.to;
      if (this.isBlock) {
        if (0 === this.content.size) return void console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        t = this.from + 1, n = this.to - 1;
      }
      this.editor.commands.insertContentAt({
        from: t,
        to: n
      }, e);
    }
    get attributes() {
      return this.node.attrs;
    }
    get textContent() {
      return this.node.textContent;
    }
    get size() {
      return this.node.nodeSize;
    }
    get from() {
      return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
    }
    get range() {
      return {
        from: this.from,
        to: this.to
      };
    }
    get to() {
      return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
    }
    get parent() {
      if (0 === this.depth) return null;
      const e = this.resolvedPos.start(this.resolvedPos.depth - 1),
        t = this.resolvedPos.doc.resolve(e);
      return new Ue(t, this.editor);
    }
    get before() {
      let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
      return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new Ue(e, this.editor);
    }
    get after() {
      let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
      return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new Ue(e, this.editor);
    }
    get children() {
      const e = [];
      return this.node.content.forEach((t, n) => {
        const o = t.isBlock && !t.isTextblock,
          s = t.isAtom && !t.isText,
          r = this.pos + n + (s ? 0 : 1);
        if (r < 0 || r > this.resolvedPos.doc.nodeSize - 2) return;
        const i = this.resolvedPos.doc.resolve(r);
        if (!o && i.depth <= this.depth) return;
        const a = new Ue(i, this.editor, o, o ? t : null);
        o && (a.actualDepth = this.depth + 1), e.push(new Ue(i, this.editor, o, o ? t : null));
      }), e;
    }
    get firstChild() {
      return this.children[0] || null;
    }
    get lastChild() {
      const e = this.children;
      return e[e.length - 1] || null;
    }
    closest(e, t = {}) {
      let n = null,
        o = this.parent;
      for (; o && !n;) {
        if (o.node.type.name === e) if (Object.keys(t).length > 0) {
          const e = o.node.attrs,
            n = Object.keys(t);
          for (let o = 0; o < n.length; o += 1) {
            const s = n[o];
            if (e[s] !== t[s]) break;
          }
        } else n = o;
        o = o.parent;
      }
      return n;
    }
    querySelector(e, t = {}) {
      return this.querySelectorAll(e, t, !0)[0] || null;
    }
    querySelectorAll(e, t = {}, n = !1) {
      let o = [];
      if (!this.children || 0 === this.children.length) return o;
      const s = Object.keys(t);
      return this.children.forEach(r => {
        n && o.length > 0 || (r.node.type.name === e && s.every(e => t[e] === r.node.attrs[e]) && o.push(r), n && o.length > 0 || (o = o.concat(r.querySelectorAll(e, t, n))));
      }), o;
    }
    setAttribute(e) {
      const {
        tr: t
      } = this.editor.state;
      t.setNodeMarkup(this.from, void 0, {
        ...this.node.attrs,
        ...e
      }), this.editor.view.dispatch(t);
    }
  }
  function ze(e, t, n) {
    const o = document.querySelector(`style[data-tiptap-style${n ? `-${n}` : ""}]`);
    if (null !== o) return o;
    const s = document.createElement("style");
    return t && s.setAttribute("nonce", t), s.setAttribute("data-tiptap-style" + (n ? `-${n}` : ""), ""), s.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(s), s;
  }
  class Ve {
    constructor(e = {}) {
      this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
        name: this.name,
        defaultOptions: {}
      }, this.config = {
        ...this.config,
        ...e
      }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = w(p(this, "addOptions", {
        name: this.name
      }))), this.storage = w(p(this, "addStorage", {
        name: this.name,
        options: this.options
      })) || {};
    }
    static create(e = {}) {
      return new Ve(e);
    }
    configure(e = {}) {
      const t = this.extend({
        ...this.config,
        addOptions: () => D(this.options, e)
      });
      return t.name = this.name, t.parent = this.parent, t;
    }
    extend(e = {}) {
      const t = new Ve(e);
      return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = w(p(t, "addOptions", {
        name: t.name
      })), t.storage = w(p(t, "addStorage", {
        name: t.name,
        options: t.options
      })), t;
    }
  }
  t.CommandManager = u, t.Editor = class extends h {
    constructor(e = {}) {
      super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
        element: document.createElement("div"),
        content: "",
        injectCSS: !0,
        injectNonce: void 0,
        extensions: [],
        autofocus: !1,
        editable: !0,
        editorProps: {},
        parseOptions: {},
        coreExtensionOptions: {},
        enableInputRules: !0,
        enablePasteRules: !0,
        enableCoreExtensions: !0,
        enableContentCheck: !1,
        emitContentError: !1,
        onBeforeCreate: () => null,
        onCreate: () => null,
        onUpdate: () => null,
        onSelectionUpdate: () => null,
        onTransaction: () => null,
        onFocus: () => null,
        onBlur: () => null,
        onDestroy: () => null,
        onContentError: ({
          error: e
        }) => {
          throw e;
        },
        onPaste: () => null,
        onDrop: () => null
      }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", {
        editor: this
      }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({
        event: e,
        slice: t,
        moved: n
      }) => this.options.onDrop(e, t, n)), this.on("paste", ({
        event: e,
        slice: t
      }) => this.options.onPaste(e, t)), window.setTimeout(() => {
        this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", {
          editor: this
        }), this.isInitialized = !0);
      }, 0);
    }
    get storage() {
      return this.extensionStorage;
    }
    get commands() {
      return this.commandManager.commands;
    }
    chain() {
      return this.commandManager.chain();
    }
    can() {
      return this.commandManager.can();
    }
    injectCSS() {
      this.options.injectCSS && document && (this.css = ze('.ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: "liga" 0; /* the above doesn\'t seem to work in Edge */\n}\n\n.ProseMirror [contenteditable="false"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable="false"] [contenteditable="true"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n\n.tippy-box[data-animation=fade][data-state=hidden] {\n  opacity: 0\n}', this.options.injectNonce));
    }
    setOptions(e = {}) {
      this.options = {
        ...this.options,
        ...e
      }, this.view && this.state && !this.isDestroyed && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
    }
    setEditable(e, t = !0) {
      this.setOptions({
        editable: e
      }), t && this.emit("update", {
        editor: this,
        transaction: this.state.tr
      });
    }
    get isEditable() {
      return this.options.editable && this.view && this.view.editable;
    }
    get state() {
      return this.view.state;
    }
    registerPlugin(e, t) {
      const n = v(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e],
        o = this.state.reconfigure({
          plugins: n
        });
      return this.view.updateState(o), o;
    }
    unregisterPlugin(e) {
      if (this.isDestroyed) return;
      const t = this.state.plugins;
      let n = t;
      if ([].concat(e).forEach(e => {
        const t = "string" == typeof e ? `${e}$` : e.key;
        n = n.filter(e => !e.key.startsWith(t));
      }), t.length === n.length) return;
      const o = this.state.reconfigure({
        plugins: n
      });
      return this.view.updateState(o), o;
    }
    createExtensionManager() {
      var e, t;
      const n = [...(this.options.enableCoreExtensions ? [Ie, K.configure({
        blockSeparator: null === (t = null === (e = this.options.coreExtensionOptions) || void 0 === e ? void 0 : e.clipboardTextSerializer) || void 0 === t ? void 0 : t.blockSeparator
      }), Ne, He, $e, _e, Re, je].filter(e => "object" != typeof this.options.enableCoreExtensions || !1 !== this.options.enableCoreExtensions[e.name]) : []), ...this.options.extensions].filter(e => ["extension", "node", "mark"].includes(null == e ? void 0 : e.type));
      this.extensionManager = new z(n, this);
    }
    createCommandManager() {
      this.commandManager = new u({
        editor: this
      });
    }
    createSchema() {
      this.schema = this.extensionManager.schema;
    }
    createView() {
      var e;
      let t;
      try {
        t = ue(this.options.content, this.schema, this.options.parseOptions, {
          errorOnInvalidContent: this.options.enableContentCheck
        });
      } catch (e) {
        if (!(e instanceof Error && ["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(e.message))) throw e;
        this.emit("contentError", {
          editor: this,
          error: e,
          disableCollaboration: () => {
            this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter(e => "collaboration" !== e.name), this.createExtensionManager();
          }
        }), t = ue(this.options.content, this.schema, this.options.parseOptions, {
          errorOnInvalidContent: !1
        });
      }
      const n = ee(t, this.options.autofocus);
      this.view = new s.EditorView(this.options.element, {
        ...this.options.editorProps,
        attributes: {
          role: "textbox",
          ...(null === (e = this.options.editorProps) || void 0 === e ? void 0 : e.attributes)
        },
        dispatchTransaction: this.dispatchTransaction.bind(this),
        state: o.EditorState.create({
          doc: t,
          selection: n || void 0
        })
      });
      const r = this.state.reconfigure({
        plugins: this.extensionManager.plugins
      });
      this.view.updateState(r), this.createNodeViews(), this.prependClass(), this.view.dom.editor = this;
    }
    createNodeViews() {
      this.view.isDestroyed || this.view.setProps({
        nodeViews: this.extensionManager.nodeViews
      });
    }
    prependClass() {
      this.view.dom.className = `tiptap ${this.view.dom.className}`;
    }
    captureTransaction(e) {
      this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
      const t = this.capturedTransaction;
      return this.capturedTransaction = null, t;
    }
    dispatchTransaction(e) {
      if (this.view.isDestroyed) return;
      if (this.isCapturingTransaction) return this.capturedTransaction ? void e.steps.forEach(e => {
        var t;
        return null === (t = this.capturedTransaction) || void 0 === t ? void 0 : t.step(e);
      }) : void (this.capturedTransaction = e);
      const t = this.state.apply(e),
        n = !this.state.selection.eq(t.selection);
      this.emit("beforeTransaction", {
        editor: this,
        transaction: e,
        nextState: t
      }), this.view.updateState(t), this.emit("transaction", {
        editor: this,
        transaction: e
      }), n && this.emit("selectionUpdate", {
        editor: this,
        transaction: e
      });
      const o = e.getMeta("focus"),
        s = e.getMeta("blur");
      o && this.emit("focus", {
        editor: this,
        event: o.event,
        transaction: e
      }), s && this.emit("blur", {
        editor: this,
        event: s.event,
        transaction: e
      }), e.docChanged && !e.getMeta("preventUpdate") && this.emit("update", {
        editor: this,
        transaction: e
      });
    }
    getAttributes(e) {
      return ve(this.state, e);
    }
    isActive(e, t) {
      const n = "string" == typeof e ? e : null,
        o = "string" == typeof e ? t : e;
      return xe(this.state, n, o);
    }
    getJSON() {
      return this.state.doc.toJSON();
    }
    getHTML() {
      return O(this.state.doc.content, this.schema);
    }
    getText(e) {
      const {
        blockSeparator: t = "\n\n",
        textSerializers: n = {}
      } = e || {};
      return be(this.state.doc, {
        blockSeparator: t,
        textSerializers: {
          ...W(this.schema),
          ...n
        }
      });
    }
    get isEmpty() {
      return Te(this.state.doc);
    }
    getCharacterCount() {
      return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
    }
    destroy() {
      if (this.emit("destroy"), this.view) {
        const e = this.view.dom;
        e && e.editor && delete e.editor, this.view.destroy();
      }
      this.removeAllListeners();
    }
    get isDestroyed() {
      var e;
      return !(null === (e = this.view) || void 0 === e ? void 0 : e.docView);
    }
    $node(e, t) {
      var n;
      return (null === (n = this.$doc) || void 0 === n ? void 0 : n.querySelector(e, t)) || null;
    }
    $nodes(e, t) {
      var n;
      return (null === (n = this.$doc) || void 0 === n ? void 0 : n.querySelectorAll(e, t)) || null;
    }
    $pos(e) {
      const t = this.state.doc.resolve(e);
      return new Ue(t, this);
    }
    get $doc() {
      return this.$pos(0);
    }
  }, t.Extension = V, t.InputRule = L, t.Mark = H, t.Node = Ve, t.NodePos = Ue, t.NodeView = class {
    constructor(e, t, n) {
      this.isDragging = !1, this.component = e, this.editor = t.editor, this.options = {
        stopEvent: null,
        ignoreMutation: null,
        ...n
      }, this.extension = t.extension, this.node = t.node, this.decorations = t.decorations, this.innerDecorations = t.innerDecorations, this.view = t.view, this.HTMLAttributes = t.HTMLAttributes, this.getPos = t.getPos, this.mount();
    }
    mount() {}
    get dom() {
      return this.editor.view.dom;
    }
    get contentDOM() {
      return null;
    }
    onDragStart(e) {
      var t, n, s, r, i, a, c;
      const {
          view: d
        } = this.editor,
        l = e.target,
        u = 3 === l.nodeType ? null === (t = l.parentElement) || void 0 === t ? void 0 : t.closest("[data-drag-handle]") : l.closest("[data-drag-handle]");
      if (!this.dom || (null === (n = this.contentDOM) || void 0 === n ? void 0 : n.contains(l)) || !u) return;
      let h = 0,
        p = 0;
      if (this.dom !== u) {
        const t = this.dom.getBoundingClientRect(),
          n = u.getBoundingClientRect(),
          o = null !== (s = e.offsetX) && void 0 !== s ? s : null === (r = e.nativeEvent) || void 0 === r ? void 0 : r.offsetX,
          c = null !== (i = e.offsetY) && void 0 !== i ? i : null === (a = e.nativeEvent) || void 0 === a ? void 0 : a.offsetY;
        h = n.x - t.x + o, p = n.y - t.y + c;
      }
      const m = this.dom.cloneNode(!0);
      null === (c = e.dataTransfer) || void 0 === c || c.setDragImage(m, h, p);
      const f = this.getPos();
      if ("number" != typeof f) return;
      const g = o.NodeSelection.create(d.state.doc, f),
        b = d.state.tr.setSelection(g);
      d.dispatch(b);
    }
    stopEvent(e) {
      var t;
      if (!this.dom) return !1;
      if ("function" == typeof this.options.stopEvent) return this.options.stopEvent({
        event: e
      });
      const n = e.target;
      if (!this.dom.contains(n) || (null === (t = this.contentDOM) || void 0 === t ? void 0 : t.contains(n))) return !1;
      const s = e.type.startsWith("drag"),
        r = "drop" === e.type;
      if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(n.tagName) || n.isContentEditable) && !r && !s) return !0;
      const {
          isEditable: i
        } = this.editor,
        {
          isDragging: a
        } = this,
        c = !!this.node.type.spec.draggable,
        d = o.NodeSelection.isSelectable(this.node),
        l = "copy" === e.type,
        u = "paste" === e.type,
        h = "cut" === e.type,
        p = "mousedown" === e.type;
      if (!c && d && s && e.target === this.dom && e.preventDefault(), c && s && !a && e.target === this.dom) return e.preventDefault(), !1;
      if (c && i && !a && p) {
        const e = n.closest("[data-drag-handle]");
        e && (this.dom === e || this.dom.contains(e)) && (this.isDragging = !0, document.addEventListener("dragend", () => {
          this.isDragging = !1;
        }, {
          once: !0
        }), document.addEventListener("drop", () => {
          this.isDragging = !1;
        }, {
          once: !0
        }), document.addEventListener("mouseup", () => {
          this.isDragging = !1;
        }, {
          once: !0
        }));
      }
      return !(a || r || l || u || h || p && d);
    }
    ignoreMutation(e) {
      return !this.dom || !this.contentDOM || ("function" == typeof this.options.ignoreMutation ? this.options.ignoreMutation({
        mutation: e
      }) : !(!this.node.isLeaf && !this.node.isAtom) || "selection" !== e.type && !(this.dom.contains(e.target) && "childList" === e.type && (ne() || te()) && this.editor.isFocused && [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)].every(e => e.isContentEditable)) && (this.contentDOM === e.target && "attributes" === e.type || !this.contentDOM.contains(e.target)));
    }
    updateAttributes(e) {
      this.editor.commands.command(({
        tr: t
      }) => {
        const n = this.getPos();
        return "number" == typeof n && (t.setNodeMarkup(n, void 0, {
          ...this.node.attrs,
          ...e
        }), !0);
      });
    }
    deleteNode() {
      const e = this.getPos();
      if ("number" != typeof e) return;
      const t = e + this.node.nodeSize;
      this.editor.commands.deleteRange({
        from: e,
        to: t
      });
    }
  }, t.PasteRule = j, t.Tracker = class {
    constructor(e) {
      this.transaction = e, this.currentStep = this.transaction.steps.length;
    }
    map(e) {
      let t = !1;
      return {
        position: this.transaction.steps.slice(this.currentStep).reduce((e, n) => {
          const o = n.getMap().mapResult(e);
          return o.deleted && (t = !0), o.pos;
        }, e),
        deleted: t
      };
    }
  }, t.callOrReturn = w, t.canInsertNode = function (e, t) {
    const {
        selection: n
      } = e,
      {
        $from: s
      } = n;
    if (n instanceof o.NodeSelection) {
      const e = s.index();
      return s.parent.canReplaceWith(e, e + 1, t);
    }
    let r = s.depth;
    for (; r >= 0;) {
      const e = s.index(r);
      if (s.node(r).contentMatchAt(e).matchType(t)) return !0;
      r -= 1;
    }
    return !1;
  }, t.combineTransactionSteps = function (e, t) {
    const n = new a.Transform(e);
    return t.forEach(e => {
      e.steps.forEach(e => {
        n.step(e);
      });
    }), n;
  }, t.createChainableState = l, t.createDocument = ue, t.createNodeFromContent = re, t.createStyleTag = ze, t.defaultBlockAt = pe, t.deleteProps = le, t.elementFromString = se, t.escapeForRegEx = function (e) {
    return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  }, t.extensions = Be, t.findChildren = function (e, t) {
    const n = [];
    return e.descendants((e, o) => {
      t(e) && n.push({
        node: e,
        pos: o
      });
    }), n;
  }, t.findChildrenInRange = function (e, t, n) {
    const o = [];
    return e.nodesBetween(t.from, t.to, (e, t) => {
      n(e) && o.push({
        node: e,
        pos: t
      });
    }), o;
  }, t.findDuplicates = U, t.findParentNode = fe, t.findParentNodeClosestToPos = me, t.fromString = M, t.generateHTML = function (e, t) {
    const n = ge(t);
    return O(i.Node.fromJSON(n, e).content, n);
  }, t.generateJSON = function (e, t) {
    const n = ge(t),
      o = se(e);
    return i.DOMParser.fromSchema(n).parse(o).toJSON();
  }, t.generateText = function (e, t, n) {
    const {
        blockSeparator: o = "\n\n",
        textSerializers: s = {}
      } = n || {},
      r = ge(t);
    return be(i.Node.fromJSON(r, e), {
      blockSeparator: o,
      textSerializers: {
        ...W(r),
        ...s
      }
    });
  }, t.getAttributes = ve, t.getAttributesFromExtensions = f, t.getChangedRanges = function (e) {
    const {
        mapping: t,
        steps: n
      } = e,
      o = [];
    return t.maps.forEach((e, s) => {
      const r = [];
      if (e.ranges.length) e.forEach((e, t) => {
        r.push({
          from: e,
          to: t
        });
      });else {
        const {
          from: e,
          to: t
        } = n[s];
        if (void 0 === e || void 0 === t) return;
        r.push({
          from: e,
          to: t
        });
      }
      r.forEach(({
        from: e,
        to: n
      }) => {
        const r = t.slice(s).map(e, -1),
          i = t.slice(s).map(n),
          a = t.invert().map(r, -1),
          c = t.invert().map(i);
        o.push({
          oldRange: {
            from: a,
            to: c
          },
          newRange: {
            from: r,
            to: i
          }
        });
      });
    }), function (e) {
      const t = we(e);
      return 1 === t.length ? t : t.filter((e, n) => !t.filter((e, t) => t !== n).some(t => e.oldRange.from >= t.oldRange.from && e.oldRange.to <= t.oldRange.to && e.newRange.from >= t.newRange.from && e.newRange.to <= t.newRange.to));
    }(o);
  }, t.getDebugJSON = function e(t, n = 0) {
    const o = t.type === t.type.schema.topNodeType ? 0 : 1,
      s = n,
      r = s + t.nodeSize,
      i = t.marks.map(e => {
        const t = {
          type: e.type.name
        };
        return Object.keys(e.attrs).length && (t.attrs = {
          ...e.attrs
        }), t;
      }),
      a = {
        ...t.attrs
      },
      c = {
        type: t.type.name,
        from: s,
        to: r
      };
    return Object.keys(a).length && (c.attrs = a), i.length && (c.marks = i), t.content.childCount && (c.content = [], t.forEach((t, s) => {
      var r;
      null === (r = c.content) || void 0 === r || r.push(e(t, n + s + o));
    })), t.text && (c.text = t.text), c;
  }, t.getExtensionField = p, t.getHTMLFromFragment = O, t.getMarkAttributes = he, t.getMarkRange = Q, t.getMarkType = Y, t.getMarksBetween = ke, t.getNodeAtPosition = (e, t, n, o = 20) => {
    const s = e.doc.resolve(n);
    let r = o,
      i = null;
    for (; r > 0 && null === i;) {
      const e = s.node(r);
      (null == e ? void 0 : e.type.name) === t ? i = e : r -= 1;
    }
    return [i, r];
  }, t.getNodeAttributes = ye, t.getNodeType = g, t.getRenderedAttributes = y, t.getSchema = ge, t.getSchemaByResolvedExtensions = C, t.getSchemaTypeByName = T, t.getSchemaTypeNameByName = de, t.getSplittedAttributes = Me, t.getText = be, t.getTextBetween = F, t.getTextContentFromNodes = A, t.getTextSerializersFromSchema = W, t.injectExtensionAttributesToParseRule = S, t.inputRulesPlugin = R, t.isActive = xe, t.isAtEndOfNode = (e, t) => {
    const {
      $from: n,
      $to: o,
      $anchor: s
    } = e.selection;
    if (t) {
      const n = fe(e => e.type.name === t)(e.selection);
      if (!n) return !1;
      const o = e.doc.resolve(n.pos + 1);
      return s.pos + 1 === o.end();
    }
    return !(o.parentOffset < o.parent.nodeSize - 2 || n.pos !== o.pos);
  }, t.isAtStartOfNode = e => {
    const {
      $from: t,
      $to: n
    } = e.selection;
    return !(t.parentOffset > 0 || t.pos !== n.pos);
  }, t.isEmptyObject = k, t.isExtensionRulesEnabled = E, t.isFunction = v, t.isList = Ce, t.isMacOS = ae, t.isMarkActive = Se, t.isNodeActive = ce, t.isNodeEmpty = Te, t.isNodeSelection = function (e) {
    return e instanceof o.NodeSelection;
  }, t.isNumber = $, t.isPlainObject = I, t.isRegExp = P, t.isString = function (e) {
    return "string" == typeof e;
  }, t.isTextSelection = X, t.isiOS = ne, t.markInputRule = function (e) {
    return new L({
      find: e.find,
      handler: ({
        state: t,
        range: n,
        match: o
      }) => {
        const s = w(e.getAttributes, void 0, o);
        if (!1 === s || null === s) return null;
        const {
            tr: r
          } = t,
          i = o[o.length - 1],
          a = o[0];
        if (i) {
          const o = a.search(/\S/),
            c = n.from + a.indexOf(i),
            d = c + i.length;
          if (ke(n.from, n.to, t.doc).filter(t => t.mark.type.excluded.find(n => n === e.type && n !== t.mark.type)).filter(e => e.to > c).length) return null;
          d < n.to && r.delete(d, n.to), c > n.from && r.delete(n.from + o, c);
          const l = n.from + o + i.length;
          r.addMark(n.from + o, l, e.type.create(s || {})), r.removeStoredMark(e.type);
        }
      }
    });
  }, t.markPasteRule = function (e) {
    return new j({
      find: e.find,
      handler: ({
        state: t,
        range: n,
        match: o,
        pasteEvent: s
      }) => {
        const r = w(e.getAttributes, void 0, o, s);
        if (!1 === r || null === r) return null;
        const {
            tr: i
          } = t,
          a = o[o.length - 1],
          c = o[0];
        let d = n.to;
        if (a) {
          const o = c.search(/\S/),
            s = n.from + c.indexOf(a),
            l = s + a.length;
          if (ke(n.from, n.to, t.doc).filter(t => t.mark.type.excluded.find(n => n === e.type && n !== t.mark.type)).filter(e => e.to > s).length) return null;
          l < n.to && i.delete(l, n.to), s > n.from && i.delete(n.from + o, s), d = n.from + o + a.length, i.addMark(n.from + o, d, e.type.create(r || {})), i.removeStoredMark(e.type);
        }
      }
    });
  }, t.mergeAttributes = b, t.mergeDeep = D, t.minMax = Z, t.nodeInputRule = function (e) {
    return new L({
      find: e.find,
      handler: ({
        state: t,
        range: n,
        match: o
      }) => {
        const s = w(e.getAttributes, void 0, o) || {},
          {
            tr: r
          } = t,
          i = n.from;
        let a = n.to;
        const c = e.type.create(s);
        if (o[1]) {
          let e = i + o[0].lastIndexOf(o[1]);
          e > a ? e = a : a = e + o[1].length;
          const t = o[0][o[0].length - 1];
          r.insertText(t, i + o[0].length - 1), r.replaceWith(e, a, c);
        } else if (o[0]) {
          const t = e.type.isInline ? i : i - 1;
          r.insert(t, e.type.create(s)).delete(r.mapping.map(i), r.mapping.map(a));
        }
        r.scrollIntoView();
      }
    });
  }, t.nodePasteRule = function (e) {
    return new j({
      find: e.find,
      handler({
        match: t,
        chain: n,
        range: o,
        pasteEvent: s
      }) {
        const r = w(e.getAttributes, void 0, t, s),
          i = w(e.getContent, void 0, r);
        if (!1 === r || null === r) return null;
        const a = {
          type: e.type.name,
          attrs: r
        };
        i && (a.content = i), t.input && n().deleteRange(o).insertContentAt(o.from, a);
      }
    });
  }, t.objectIncludes = q, t.pasteRulesPlugin = B, t.posToDOMRect = function (e, t, n) {
    const o = e.state.doc.content.size,
      s = Z(t, 0, o),
      r = Z(n, 0, o),
      i = e.coordsAtPos(s),
      a = e.coordsAtPos(r, -1),
      c = Math.min(i.top, a.top),
      d = Math.max(i.bottom, a.bottom),
      l = Math.min(i.left, a.left),
      u = Math.max(i.right, a.right),
      h = {
        top: c,
        bottom: d,
        left: l,
        right: u,
        width: u - l,
        height: d - c,
        x: l,
        y: c
      };
    return {
      ...h,
      toJSON: () => h
    };
  }, t.removeDuplicates = we, t.resolveFocusPosition = ee, t.rewriteUnknownContent = function (e, t, n) {
    return Ee({
      json: e,
      validNodes: new Set(Object.keys(t.nodes)),
      validMarks: new Set(Object.keys(t.marks)),
      options: n
    });
  }, t.selectionToInsertionEnd = ie, t.splitExtensions = m, t.textInputRule = function (e) {
    return new L({
      find: e.find,
      handler: ({
        state: t,
        range: n,
        match: o
      }) => {
        let s = e.replace,
          r = n.from;
        const i = n.to;
        if (o[1]) {
          const e = o[0].lastIndexOf(o[1]);
          s += o[0].slice(e + o[1].length), r += e;
          const t = r - i;
          t > 0 && (s = o[0].slice(e - t, e) + s, r = i);
        }
        t.tr.insertText(s, r, i);
      }
    });
  }, t.textPasteRule = function (e) {
    return new j({
      find: e.find,
      handler: ({
        state: t,
        range: n,
        match: o
      }) => {
        let s = e.replace,
          r = n.from;
        const i = n.to;
        if (o[1]) {
          const e = o[0].lastIndexOf(o[1]);
          s += o[0].slice(e + o[1].length), r += e;
          const t = r - i;
          t > 0 && (s = o[0].slice(e - t, e) + s, r = i);
        }
        t.tr.insertText(s, r, i);
      }
    });
  }, t.textblockTypeInputRule = function (e) {
    return new L({
      find: e.find,
      handler: ({
        state: t,
        range: n,
        match: o
      }) => {
        const s = t.doc.resolve(n.from),
          r = w(e.getAttributes, void 0, o) || {};
        if (!s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), e.type)) return null;
        t.tr.delete(n.from, n.to).setBlockType(n.from, n.from, e.type, r);
      }
    });
  }, t.wrappingInputRule = function (e) {
    return new L({
      find: e.find,
      handler: ({
        state: t,
        range: n,
        match: o,
        chain: s
      }) => {
        const r = w(e.getAttributes, void 0, o) || {},
          i = t.tr.delete(n.from, n.to),
          c = i.doc.resolve(n.from).blockRange(),
          d = c && a.findWrapping(c, e.type, r);
        if (!d) return null;
        if (i.wrap(c, d), e.keepMarks && e.editor) {
          const {
              selection: n,
              storedMarks: o
            } = t,
            {
              splittableMarks: s
            } = e.editor.extensionManager,
            r = o || n.$to.parentOffset && n.$from.marks();
          if (r) {
            const e = r.filter(e => s.includes(e.type.name));
            i.ensureMarks(e);
          }
        }
        if (e.keepAttributes) {
          const t = "bulletList" === e.type.name || "orderedList" === e.type.name ? "listItem" : "taskList";
          s().updateAttributes(t, r).run();
        }
        const l = i.doc.resolve(n.from - 1).nodeBefore;
        l && l.type === e.type && a.canJoin(i.doc, n.from - 1) && (!e.joinPredicate || e.joinPredicate(o, l)) && i.join(n.from - 1);
      }
    });
  };
});
