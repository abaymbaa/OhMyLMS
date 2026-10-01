// Reconstructed Webpack factory 83574; arguments retain original semantics.
((e, t, n) => {
  var o = n(27595),
    s = n(41594),
    r = n(75206),
    i = n(99248),
    a = n(20535);
  function c(e) {
    return e && "object" == typeof e && "default" in e ? e : {
      default: e
    };
  }
  var d = c(s),
    l = c(r);
  function u(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var h,
    p = {
      exports: {}
    },
    m = {};
  p.exports = function () {
    if (h) return m;
    h = 1;
    var e = d.default,
      t = "function" == typeof Object.is ? Object.is : function (e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
      },
      n = e.useState,
      o = e.useEffect,
      s = e.useLayoutEffect,
      r = e.useDebugValue;
    function i(e) {
      var n = e.getSnapshot;
      e = e.value;
      try {
        var o = n();
        return !t(e, o);
      } catch (e) {
        return !0;
      }
    }
    var a = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
      return t();
    } : function (e, t) {
      var a = t(),
        c = n({
          inst: {
            value: a,
            getSnapshot: t
          }
        }),
        d = c[0].inst,
        l = c[1];
      return s(function () {
        d.value = a, d.getSnapshot = t, i(d) && l({
          inst: d
        });
      }, [e, a, t]), o(function () {
        return i(d) && l({
          inst: d
        }), e(function () {
          i(d) && l({
            inst: d
          });
        });
      }, [e]), r(a), a;
    };
    return m.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : a, m;
  }();
  var f = p.exports;
  const g = (...e) => t => {
      e.forEach(e => {
        "function" == typeof e ? e(t) : e && (e.current = t);
      });
    },
    b = ({
      contentComponent: e
    }) => {
      const t = f.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getServerSnapshot);
      return d.default.createElement(d.default.Fragment, null, Object.values(t));
    };
  class y extends d.default.Component {
    constructor(e) {
      var t;
      super(e), this.editorContentRef = d.default.createRef(), this.initialized = !1, this.state = {
        hasContentComponentInitialized: Boolean(null === (t = e.editor) || void 0 === t ? void 0 : t.contentComponent)
      };
    }
    componentDidMount() {
      this.init();
    }
    componentDidUpdate() {
      this.init();
    }
    init() {
      const e = this.props.editor;
      if (e && !e.isDestroyed && e.options.element) {
        if (e.contentComponent) return;
        const t = this.editorContentRef.current;
        t.append(...e.options.element.childNodes), e.setOptions({
          element: t
        }), e.contentComponent = function () {
          const e = new Set();
          let t = {};
          return {
            subscribe: t => (e.add(t), () => {
              e.delete(t);
            }),
            getSnapshot: () => t,
            getServerSnapshot: () => t,
            setRenderer(n, o) {
              t = {
                ...t,
                [n]: l.default.createPortal(o.reactElement, o.element, n)
              }, e.forEach(e => e());
            },
            removeRenderer(n) {
              const o = {
                ...t
              };
              delete o[n], t = o, e.forEach(e => e());
            }
          };
        }(), this.state.hasContentComponentInitialized || (this.unsubscribeToContentComponent = e.contentComponent.subscribe(() => {
          this.setState(e => e.hasContentComponentInitialized ? e : {
            hasContentComponentInitialized: !0
          }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent();
        })), e.createNodeViews(), this.initialized = !0;
      }
    }
    componentWillUnmount() {
      const e = this.props.editor;
      if (!e) return;
      if (this.initialized = !1, e.isDestroyed || e.view.setProps({
        nodeViews: {}
      }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent(), e.contentComponent = null, !e.options.element.firstChild) return;
      const t = document.createElement("div");
      t.append(...e.options.element.childNodes), e.setOptions({
        element: t
      });
    }
    render() {
      const {
        editor: e,
        innerRef: t,
        ...n
      } = this.props;
      return d.default.createElement(d.default.Fragment, null, d.default.createElement("div", {
        ref: g(t, this.editorContentRef),
        ...n
      }), (null == e ? void 0 : e.contentComponent) && d.default.createElement(b, {
        contentComponent: e.contentComponent
      }));
    }
  }
  const v = s.forwardRef((e, t) => {
      const n = d.default.useMemo(() => Math.floor(4294967295 * Math.random()).toString(), [e.editor]);
      return d.default.createElement(y, {
        key: n,
        innerRef: t,
        ...e
      });
    }),
    w = d.default.memo(v);
  var k,
    M = u(function e(t, n) {
      if (t === n) return !0;
      if (t && n && "object" == typeof t && "object" == typeof n) {
        if (t.constructor !== n.constructor) return !1;
        var o, s, r;
        if (Array.isArray(t)) {
          if ((o = t.length) != n.length) return !1;
          for (s = o; 0 !== s--;) if (!e(t[s], n[s])) return !1;
          return !0;
        }
        if (t instanceof Map && n instanceof Map) {
          if (t.size !== n.size) return !1;
          for (s of t.entries()) if (!n.has(s[0])) return !1;
          for (s of t.entries()) if (!e(s[1], n.get(s[0]))) return !1;
          return !0;
        }
        if (t instanceof Set && n instanceof Set) {
          if (t.size !== n.size) return !1;
          for (s of t.entries()) if (!n.has(s[0])) return !1;
          return !0;
        }
        if (ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
          if ((o = t.length) != n.length) return !1;
          for (s = o; 0 !== s--;) if (t[s] !== n[s]) return !1;
          return !0;
        }
        if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
        if ((o = (r = Object.keys(t)).length) !== Object.keys(n).length) return !1;
        for (s = o; 0 !== s--;) if (!Object.prototype.hasOwnProperty.call(n, r[s])) return !1;
        for (s = o; 0 !== s--;) {
          var i = r[s];
          if (!("_owner" === i && t.$$typeof || e(t[i], n[i]))) return !1;
        }
        return !0;
      }
      return t != t && n != n;
    }),
    S = {
      exports: {}
    },
    x = {};
  S.exports = function () {
    if (k) return x;
    k = 1;
    var e = d.default,
      t = f,
      n = "function" == typeof Object.is ? Object.is : function (e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
      },
      o = t.useSyncExternalStore,
      s = e.useRef,
      r = e.useEffect,
      i = e.useMemo,
      a = e.useDebugValue;
    return x.useSyncExternalStoreWithSelector = function (e, t, c, d, l) {
      var u = s(null);
      if (null === u.current) {
        var h = {
          hasValue: !1,
          value: null
        };
        u.current = h;
      } else h = u.current;
      u = i(function () {
        function e(e) {
          if (!r) {
            if (r = !0, o = e, e = d(e), void 0 !== l && h.hasValue) {
              var t = h.value;
              if (l(t, e)) return s = t;
            }
            return s = e;
          }
          if (t = s, n(o, e)) return t;
          var i = d(e);
          return void 0 !== l && l(t, i) ? t : (o = e, s = i);
        }
        var o,
          s,
          r = !1,
          i = void 0 === c ? null : c;
        return [function () {
          return e(t());
        }, null === i ? void 0 : function () {
          return e(i());
        }];
      }, [t, c, d, l]);
      var p = o(e, u[0], u[1]);
      return r(function () {
        h.hasValue = !0, h.value = p;
      }, [p]), a(p), p;
    }, x;
  }();
  var C = S.exports;
  const T = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect;
  class E {
    constructor(e) {
      this.transactionNumber = 0, this.lastTransactionNumber = 0, this.subscribers = new Set(), this.editor = e, this.lastSnapshot = {
        editor: e,
        transactionNumber: 0
      }, this.getSnapshot = this.getSnapshot.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.watch = this.watch.bind(this), this.subscribe = this.subscribe.bind(this);
    }
    getSnapshot() {
      return this.transactionNumber === this.lastTransactionNumber || (this.lastTransactionNumber = this.transactionNumber, this.lastSnapshot = {
        editor: this.editor,
        transactionNumber: this.transactionNumber
      }), this.lastSnapshot;
    }
    getServerSnapshot() {
      return {
        editor: null,
        transactionNumber: 0
      };
    }
    subscribe(e) {
      return this.subscribers.add(e), () => {
        this.subscribers.delete(e);
      };
    }
    watch(e) {
      if (this.editor = e, this.editor) {
        const e = () => {
            this.transactionNumber += 1, this.subscribers.forEach(e => e());
          },
          t = this.editor;
        return t.on("transaction", e), () => {
          t.off("transaction", e);
        };
      }
    }
  }
  function O(e) {
    var t;
    const [n] = s.useState(() => new E(e.editor)),
      o = C.useSyncExternalStoreWithSelector(n.subscribe, n.getSnapshot, n.getServerSnapshot, e.selector, null !== (t = e.equalityFn) && void 0 !== t ? t : M);
    return T(() => n.watch(e.editor), [e.editor, n]), s.useDebugValue(o), o;
  }
  const A = "undefined" == typeof window,
    P = A || Boolean("undefined" != typeof window && window.next);
  class L {
    constructor(e) {
      this.editor = null, this.subscriptions = new Set(), this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = e, this.subscriptions = new Set(), this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this);
    }
    setEditor(e) {
      this.editor = e, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach(e => e());
    }
    getInitialEditor() {
      return void 0 === this.options.current.immediatelyRender ? A || P ? null : this.createEditor() : (this.options.current.immediatelyRender, this.options.current.immediatelyRender ? this.createEditor() : null);
    }
    createEditor() {
      const e = {
        ...this.options.current,
        onBeforeCreate: (...e) => {
          var t, n;
          return null === (n = (t = this.options.current).onBeforeCreate) || void 0 === n ? void 0 : n.call(t, ...e);
        },
        onBlur: (...e) => {
          var t, n;
          return null === (n = (t = this.options.current).onBlur) || void 0 === n ? void 0 : n.call(t, ...e);
        },
        onCreate: (...e) => {
          var t, n;
          return null === (n = (t = this.options.current).onCreate) || void 0 === n ? void 0 : n.call(t, ...e);
        },
        onDestroy: (...e) => {
          var t, n;
          return null === (n = (t = this.options.current).onDestroy) || void 0 === n ? void 0 : n.call(t, ...e);
        },
        onFocus: (...e) => {
          var t, n;
          return null === (n = (t = this.options.current).onFocus) || void 0 === n ? void 0 : n.call(t, ...e);
        },
        onSelectionUpdate: (...e) => {
          var t, n;
          return null === (n = (t = this.options.current).onSelectionUpdate) || void 0 === n ? void 0 : n.call(t, ...e);
        },
        onTransaction: (...e) => {
          var t, n;
          return null === (n = (t = this.options.current).onTransaction) || void 0 === n ? void 0 : n.call(t, ...e);
        },
        onUpdate: (...e) => {
          var t, n;
          return null === (n = (t = this.options.current).onUpdate) || void 0 === n ? void 0 : n.call(t, ...e);
        },
        onContentError: (...e) => {
          var t, n;
          return null === (n = (t = this.options.current).onContentError) || void 0 === n ? void 0 : n.call(t, ...e);
        },
        onDrop: (...e) => {
          var t, n;
          return null === (n = (t = this.options.current).onDrop) || void 0 === n ? void 0 : n.call(t, ...e);
        },
        onPaste: (...e) => {
          var t, n;
          return null === (n = (t = this.options.current).onPaste) || void 0 === n ? void 0 : n.call(t, ...e);
        }
      };
      return new i.Editor(e);
    }
    getEditor() {
      return this.editor;
    }
    getServerSnapshot() {
      return null;
    }
    subscribe(e) {
      return this.subscriptions.add(e), () => {
        this.subscriptions.delete(e);
      };
    }
    static compareOptions(e, t) {
      return Object.keys(e).every(n => !!["onCreate", "onBeforeCreate", "onDestroy", "onUpdate", "onTransaction", "onFocus", "onBlur", "onSelectionUpdate", "onContentError", "onDrop", "onPaste"].includes(n) || ("extensions" === n && e.extensions && t.extensions ? e.extensions.length === t.extensions.length && e.extensions.every((e, n) => {
        var o;
        return e === (null === (o = t.extensions) || void 0 === o ? void 0 : o[n]);
      }) : e[n] === t[n]));
    }
    onRender(e) {
      return () => (this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && 0 === e.length ? L.compareOptions(this.options.current, this.editor.options) || this.editor.setOptions({
        ...this.options.current,
        editable: this.editor.isEditable
      }) : this.refreshEditorInstance(e), () => {
        this.isComponentMounted = !1, this.scheduleDestroy();
      });
    }
    refreshEditorInstance(e) {
      if (this.editor && !this.editor.isDestroyed) {
        if (null === this.previousDeps) return void (this.previousDeps = e);
        if (this.previousDeps.length === e.length && this.previousDeps.every((t, n) => t === e[n])) return;
      }
      this.editor && !this.editor.isDestroyed && this.editor.destroy(), this.setEditor(this.createEditor()), this.previousDeps = e;
    }
    scheduleDestroy() {
      const e = this.instanceId,
        t = this.editor;
      this.scheduledDestructionTimeout = setTimeout(() => {
        this.isComponentMounted && this.instanceId === e ? t && t.setOptions(this.options.current) : t && !t.isDestroyed && (t.destroy(), this.instanceId === e && this.setEditor(null));
      }, 1);
    }
  }
  function N(e = {}, t = []) {
    const n = s.useRef(e);
    n.current = e;
    const [o] = s.useState(() => new L(n)),
      r = f.useSyncExternalStore(o.subscribe, o.getEditor, o.getServerSnapshot);
    return s.useDebugValue(r), s.useEffect(o.onRender(t)), O({
      editor: r,
      selector: ({
        transactionNumber: t
      }) => !1 === e.shouldRerenderOnTransaction ? null : e.immediatelyRender && 0 === t ? 0 : t + 1
    }), r;
  }
  const R = s.createContext({
      editor: null
    }),
    I = R.Consumer,
    D = () => s.useContext(R),
    H = s.createContext({
      onDragStart: void 0
    }),
    $ = () => s.useContext(H),
    j = d.default.forwardRef((e, t) => {
      const {
          onDragStart: n
        } = $(),
        o = e.as || "div";
      return d.default.createElement(o, {
        ...e,
        ref: t,
        "data-node-view-wrapper": "",
        onDragStart: n,
        style: {
          whiteSpace: "normal",
          ...e.style
        }
      });
    });
  function _(e) {
    return !("function" != typeof e || !e.prototype || !e.prototype.isReactComponent);
  }
  function B(e) {
    return !("object" != typeof e || !e.$$typeof || "Symbol(react.forward_ref)" !== e.$$typeof.toString() && "react.forward_ref" !== e.$$typeof.description);
  }
  class U {
    constructor(e, {
      editor: t,
      props: n = {},
      as: o = "div",
      className: s = ""
    }) {
      this.ref = null, this.id = Math.floor(4294967295 * Math.random()).toString(), this.component = e, this.editor = t, this.props = n, this.element = document.createElement(o), this.element.classList.add("react-renderer"), s && this.element.classList.add(...s.split(" ")), this.editor.isInitialized ? r.flushSync(() => {
        this.render();
      }) : queueMicrotask(() => {
        this.render();
      });
    }
    render() {
      var e;
      const t = this.component,
        n = this.props,
        o = this.editor,
        r = function () {
          try {
            if (s.version) return parseInt(s.version.split(".")[0], 10) >= 19;
          } catch {}
          return !1;
        }(),
        i = function (e) {
          if (_(e)) return !0;
          if (B(e)) return !0;
          if (function (e) {
            return !("object" != typeof e || !e.$$typeof || "Symbol(react.memo)" !== e.$$typeof.toString() && "react.memo" !== e.$$typeof.description);
          }(e)) {
            const t = e.type;
            if (t) return _(t) || B(t);
          }
          return !1;
        }(t),
        a = {
          ...n
        };
      !a.ref || r || i || delete a.ref, a.ref || !r && !i || (a.ref = e => {
        this.ref = e;
      }), this.reactElement = d.default.createElement(t, {
        ...a
      }), null === (e = null == o ? void 0 : o.contentComponent) || void 0 === e || e.setRenderer(this.id, this);
    }
    updateProps(e = {}) {
      this.props = {
        ...this.props,
        ...e
      }, this.render();
    }
    destroy() {
      var e;
      const t = this.editor;
      null === (e = null == t ? void 0 : t.contentComponent) || void 0 === e || e.removeRenderer(this.id);
    }
    updateAttributes(e) {
      Object.keys(e).forEach(t => {
        this.element.setAttribute(t, e[t]);
      });
    }
  }
  class z extends i.NodeView {
    constructor(e, t, n) {
      if (super(e, t, n), !this.node.isLeaf) {
        this.options.contentDOMElementTag ? this.contentDOMElement = document.createElement(this.options.contentDOMElementTag) : this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div"), this.contentDOMElement.dataset.nodeViewContentReact = "", this.contentDOMElement.dataset.nodeViewWrapper = "", this.contentDOMElement.style.whiteSpace = "inherit";
        const e = this.dom.querySelector("[data-node-view-content]");
        if (!e) return;
        e.appendChild(this.contentDOMElement);
      }
    }
    mount() {
      const e = {
        editor: this.editor,
        node: this.node,
        decorations: this.decorations,
        innerDecorations: this.innerDecorations,
        view: this.view,
        selected: !1,
        extension: this.extension,
        HTMLAttributes: this.HTMLAttributes,
        getPos: () => this.getPos(),
        updateAttributes: (e = {}) => this.updateAttributes(e),
        deleteNode: () => this.deleteNode(),
        ref: s.createRef()
      };
      if (!this.component.displayName) {
        const e = e => e.charAt(0).toUpperCase() + e.substring(1);
        this.component.displayName = e(this.extension.name);
      }
      const t = {
          onDragStart: this.onDragStart.bind(this),
          nodeViewContentRef: e => {
            e && this.contentDOMElement && e.firstChild !== this.contentDOMElement && (e.hasAttribute("data-node-view-wrapper") && e.removeAttribute("data-node-view-wrapper"), e.appendChild(this.contentDOMElement));
          }
        },
        n = this.component,
        o = s.memo(e => d.default.createElement(H.Provider, {
          value: t
        }, s.createElement(n, e)));
      o.displayName = "ReactNodeView";
      let r = this.node.isInline ? "span" : "div";
      this.options.as && (r = this.options.as);
      const {
        className: i = ""
      } = this.options;
      this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this), this.renderer = new U(o, {
        editor: this.editor,
        props: e,
        as: r,
        className: `node-${this.node.type.name} ${i}`.trim()
      }), this.editor.on("selectionUpdate", this.handleSelectionUpdate), this.updateElementAttributes();
    }
    get dom() {
      var e;
      if (this.renderer.element.firstElementChild && !(null === (e = this.renderer.element.firstElementChild) || void 0 === e ? void 0 : e.hasAttribute("data-node-view-wrapper"))) throw Error("Please use the NodeViewWrapper component for your node view.");
      return this.renderer.element;
    }
    get contentDOM() {
      return this.node.isLeaf ? null : this.contentDOMElement;
    }
    handleSelectionUpdate() {
      const {
          from: e,
          to: t
        } = this.editor.state.selection,
        n = this.getPos();
      if ("number" == typeof n) if (e <= n && t >= n + this.node.nodeSize) {
        if (this.renderer.props.selected) return;
        this.selectNode();
      } else {
        if (!this.renderer.props.selected) return;
        this.deselectNode();
      }
    }
    update(e, t, n) {
      const o = e => {
        this.renderer.updateProps(e), "function" == typeof this.options.attrs && this.updateElementAttributes();
      };
      if (e.type !== this.node.type) return !1;
      if ("function" == typeof this.options.update) {
        const s = this.node,
          r = this.decorations,
          i = this.innerDecorations;
        return this.node = e, this.decorations = t, this.innerDecorations = n, this.options.update({
          oldNode: s,
          oldDecorations: r,
          newNode: e,
          newDecorations: t,
          oldInnerDecorations: i,
          innerDecorations: n,
          updateProps: () => o({
            node: e,
            decorations: t,
            innerDecorations: n
          })
        });
      }
      return e === this.node && this.decorations === t && this.innerDecorations === n || (this.node = e, this.decorations = t, this.innerDecorations = n, o({
        node: e,
        decorations: t,
        innerDecorations: n
      })), !0;
    }
    selectNode() {
      this.renderer.updateProps({
        selected: !0
      }), this.renderer.element.classList.add("ProseMirror-selectednode");
    }
    deselectNode() {
      this.renderer.updateProps({
        selected: !1
      }), this.renderer.element.classList.remove("ProseMirror-selectednode");
    }
    destroy() {
      this.renderer.destroy(), this.editor.off("selectionUpdate", this.handleSelectionUpdate), this.contentDOMElement = null;
    }
    updateElementAttributes() {
      if (this.options.attrs) {
        let e = {};
        if ("function" == typeof this.options.attrs) {
          const t = this.editor.extensionManager.attributes,
            n = i.getRenderedAttributes(this.node, t);
          e = this.options.attrs({
            node: this.node,
            HTMLAttributes: n
          });
        } else e = this.options.attrs;
        this.renderer.updateAttributes(e);
      }
    }
  }
  t.BubbleMenu = e => {
    const [t, n] = s.useState(null),
      {
        editor: r
      } = D();
    return s.useEffect(() => {
      var n;
      if (!t) return;
      if ((null === (n = e.editor) || void 0 === n ? void 0 : n.isDestroyed) || (null == r ? void 0 : r.isDestroyed)) return;
      const {
          pluginKey: s = "bubbleMenu",
          editor: i,
          tippyOptions: a = {},
          updateDelay: c,
          shouldShow: d = null
        } = e,
        l = i || r;
      if (!l) return void console.warn("BubbleMenu component is not rendered inside of an editor component or does not have editor prop.");
      const u = o.BubbleMenuPlugin({
        updateDelay: c,
        editor: l,
        element: t,
        pluginKey: s,
        shouldShow: d,
        tippyOptions: a
      });
      return l.registerPlugin(u), () => {
        l.unregisterPlugin(s);
      };
    }, [e.editor, r, t]), d.default.createElement("div", {
      ref: n,
      className: e.className,
      style: {
        visibility: "hidden"
      }
    }, e.children);
  }, t.EditorConsumer = I, t.EditorContent = w, t.EditorContext = R, t.EditorProvider = function ({
    children: e,
    slotAfter: t,
    slotBefore: n,
    editorContainerProps: o = {},
    ...s
  }) {
    const r = N(s);
    return r ? d.default.createElement(R.Provider, {
      value: {
        editor: r
      }
    }, n, d.default.createElement(I, null, ({
      editor: e
    }) => d.default.createElement(w, {
      editor: e,
      ...o
    })), e, t) : null;
  }, t.FloatingMenu = e => {
    const [t, n] = s.useState(null),
      {
        editor: o
      } = D();
    return s.useEffect(() => {
      var n;
      if (!t) return;
      if ((null === (n = e.editor) || void 0 === n ? void 0 : n.isDestroyed) || (null == o ? void 0 : o.isDestroyed)) return;
      const {
          pluginKey: s = "floatingMenu",
          editor: r,
          tippyOptions: i = {},
          shouldShow: c = null
        } = e,
        d = r || o;
      if (!d) return void console.warn("FloatingMenu component is not rendered inside of an editor component or does not have editor prop.");
      const l = a.FloatingMenuPlugin({
        pluginKey: s,
        editor: d,
        element: t,
        tippyOptions: i,
        shouldShow: c
      });
      return d.registerPlugin(l), () => {
        d.unregisterPlugin(s);
      };
    }, [e.editor, o, t]), d.default.createElement("div", {
      ref: n,
      className: e.className,
      style: {
        visibility: "hidden"
      }
    }, e.children);
  }, t.NodeViewContent = e => {
    const t = e.as || "div",
      {
        nodeViewContentRef: n
      } = $();
    return d.default.createElement(t, {
      ...e,
      ref: n,
      "data-node-view-content": "",
      style: {
        whiteSpace: "pre-wrap",
        ...e.style
      }
    });
  }, t.NodeViewWrapper = j, t.PureEditorContent = y, t.ReactNodeView = z, t.ReactNodeViewContext = H, t.ReactNodeViewRenderer = function (e, t) {
    return n => n.editor.contentComponent ? new z(e, n, t) : {};
  }, t.ReactRenderer = U, t.useCurrentEditor = D, t.useEditor = N, t.useEditorState = O, t.useReactNodeView = $, Object.keys(i).forEach(function (e) {
    "default" === e || Object.prototype.hasOwnProperty.call(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: function () {
        return i[e];
      }
    });
  });
});
