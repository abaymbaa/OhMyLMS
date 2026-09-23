// Reconstructed Webpack factory 13971; arguments retain original semantics.
((e, t, n) => {
  n.d(t, {
    $Z: () => f,
    hG: () => T
  });
  var o = n(41594),
    s = n(75206),
    r = n(90277);
  function i(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var a,
    c = {
      exports: {}
    },
    d = {};
  c.exports = function () {
    if (a) return d;
    a = 1;
    var e = o,
      t = "function" == typeof Object.is ? Object.is : function (e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
      },
      n = e.useState,
      s = e.useEffect,
      r = e.useLayoutEffect,
      i = e.useDebugValue;
    function c(e) {
      var n = e.getSnapshot;
      e = e.value;
      try {
        var o = n();
        return !t(e, o);
      } catch (e) {
        return !0;
      }
    }
    var l = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
      return t();
    } : function (e, t) {
      var o = t(),
        a = n({
          inst: {
            value: o,
            getSnapshot: t
          }
        }),
        d = a[0].inst,
        l = a[1];
      return r(function () {
        d.value = o, d.getSnapshot = t, c(d) && l({
          inst: d
        });
      }, [e, o, t]), s(function () {
        return c(d) && l({
          inst: d
        }), e(function () {
          c(d) && l({
            inst: d
          });
        });
      }, [e]), i(o), o;
    };
    return d.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : l, d;
  }();
  var l = c.exports;
  const u = (...e) => t => {
      e.forEach(e => {
        "function" == typeof e ? e(t) : e && (e.current = t);
      });
    },
    h = ({
      contentComponent: e
    }) => {
      const t = l.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getServerSnapshot);
      return o.createElement(o.Fragment, null, Object.values(t));
    };
  class p extends o.Component {
    constructor(e) {
      var t;
      super(e), this.editorContentRef = o.createRef(), this.initialized = !1, this.state = {
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
                [n]: s.createPortal(o.reactElement, o.element, n)
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
      return o.createElement(o.Fragment, null, o.createElement("div", {
        ref: u(t, this.editorContentRef),
        ...n
      }), (null == e ? void 0 : e.contentComponent) && o.createElement(h, {
        contentComponent: e.contentComponent
      }));
    }
  }
  const m = (0, o.forwardRef)((e, t) => {
      const n = o.useMemo(() => Math.floor(4294967295 * Math.random()).toString(), [e.editor]);
      return o.createElement(p, {
        key: n,
        innerRef: t,
        ...e
      });
    }),
    f = o.memo(m);
  var g,
    b = i(function e(t, n) {
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
    y = {
      exports: {}
    },
    v = {};
  y.exports = function () {
    if (g) return v;
    g = 1;
    var e = o,
      t = l,
      n = "function" == typeof Object.is ? Object.is : function (e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
      },
      s = t.useSyncExternalStore,
      r = e.useRef,
      i = e.useEffect,
      a = e.useMemo,
      c = e.useDebugValue;
    return v.useSyncExternalStoreWithSelector = function (e, t, o, d, l) {
      var u = r(null);
      if (null === u.current) {
        var h = {
          hasValue: !1,
          value: null
        };
        u.current = h;
      } else h = u.current;
      u = a(function () {
        function e(e) {
          if (!i) {
            if (i = !0, s = e, e = d(e), void 0 !== l && h.hasValue) {
              var t = h.value;
              if (l(t, e)) return r = t;
            }
            return r = e;
          }
          if (t = r, n(s, e)) return t;
          var o = d(e);
          return void 0 !== l && l(t, o) ? t : (s = e, r = o);
        }
        var s,
          r,
          i = !1,
          a = void 0 === o ? null : o;
        return [function () {
          return e(t());
        }, null === a ? void 0 : function () {
          return e(a());
        }];
      }, [t, o, d, l]);
      var p = s(e, u[0], u[1]);
      return i(function () {
        h.hasValue = !0, h.value = p;
      }, [p]), c(p), p;
    }, v;
  }();
  var w = y.exports;
  const k = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;
  class M {
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
  const S = "undefined" == typeof window,
    x = S || Boolean("undefined" != typeof window && window.next);
  class C {
    constructor(e) {
      this.editor = null, this.subscriptions = new Set(), this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = e, this.subscriptions = new Set(), this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this);
    }
    setEditor(e) {
      this.editor = e, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach(e => e());
    }
    getInitialEditor() {
      return void 0 === this.options.current.immediatelyRender ? S || x ? null : this.createEditor() : (this.options.current.immediatelyRender, this.options.current.immediatelyRender ? this.createEditor() : null);
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
      return new r.KE(e);
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
      return () => (this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && 0 === e.length ? C.compareOptions(this.options.current, this.editor.options) || this.editor.setOptions({
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
  function T(e = {}, t = []) {
    const n = (0, o.useRef)(e);
    n.current = e;
    const [s] = (0, o.useState)(() => new C(n)),
      r = l.useSyncExternalStore(s.subscribe, s.getEditor, s.getServerSnapshot);
    return (0, o.useDebugValue)(r), (0, o.useEffect)(s.onRender(t)), function (e) {
      var t;
      const [n] = (0, o.useState)(() => new M(e.editor)),
        s = w.useSyncExternalStoreWithSelector(n.subscribe, n.getSnapshot, n.getServerSnapshot, e.selector, null !== (t = e.equalityFn) && void 0 !== t ? t : b);
      k(() => n.watch(e.editor), [e.editor, n]), (0, o.useDebugValue)(s);
    }({
      editor: r,
      selector: ({
        transactionNumber: t
      }) => !1 === e.shouldRerenderOnTransaction ? null : e.immediatelyRender && 0 === t ? 0 : t + 1
    }), r;
  }
  (0, o.createContext)({
    editor: null
  }).Consumer;
  const E = (0, o.createContext)({
    onDragStart: void 0
  });
  o.forwardRef((e, t) => {
    const {
        onDragStart: n
      } = (0, o.useContext)(E),
      s = e.as || "div";
    return o.createElement(s, {
      ...e,
      ref: t,
      "data-node-view-wrapper": "",
      onDragStart: n,
      style: {
        whiteSpace: "normal",
        ...e.style
      }
    });
  }), r.Yv;
});
