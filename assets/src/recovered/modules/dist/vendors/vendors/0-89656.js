// Reconstructed Webpack factory 89656; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  var r,
    a = Object.create,
    i = Object.defineProperty,
    o = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    l = Object.getPrototypeOf,
    c = Object.prototype.hasOwnProperty,
    u = (e, t, n, r) => {
      if (t && "object" == typeof t || "function" == typeof t) for (let a of s(t)) c.call(e, a) || a === n || i(e, a, {
        get: () => t[a],
        enumerable: !(r = o(t, a)) || r.enumerable
      });
      return e;
    },
    d = (e, t, n) => (n = null != e ? a(l(e)) : {}, u(!t && e && e.__esModule ? n : i(n, "default", {
      value: e,
      enumerable: !0
    }), e)),
    p = {};
  ((e, t) => {
    for (var n in t) i(e, n, {
      get: t[n],
      enumerable: !0
    });
  })(p, {
    createCollection: () => g,
    unstable_createCollection: () => T
  }), e.exports = (r = p, u(i({}, "__esModule", {
    value: !0
  }), r));
  var f = d(n(41594)),
    h = n(95791),
    _ = n(10207),
    m = n(56612),
    A = n(74848);
  function g(e) {
    const t = e + "CollectionProvider",
      [n, r] = (0, h.createContextScope)(t),
      [a, i] = n(t, {
        collectionRef: {
          current: null
        },
        itemMap: new Map()
      }),
      o = e => {
        const {
            scope: t,
            children: n
          } = e,
          r = f.default.useRef(null),
          i = f.default.useRef(new Map()).current;
        return (0, A.jsx)(a, {
          scope: t,
          itemMap: i,
          collectionRef: r,
          children: n
        });
      };
    o.displayName = t;
    const s = e + "CollectionSlot",
      l = (0, m.createSlot)(s),
      c = f.default.forwardRef((e, t) => {
        const {
            scope: n,
            children: r
          } = e,
          a = i(s, n),
          o = (0, _.useComposedRefs)(t, a.collectionRef);
        return (0, A.jsx)(l, {
          ref: o,
          children: r
        });
      });
    c.displayName = s;
    const u = e + "CollectionItemSlot",
      d = "data-radix-collection-item",
      p = (0, m.createSlot)(u),
      g = f.default.forwardRef((e, t) => {
        const {
            scope: n,
            children: r,
            ...a
          } = e,
          o = f.default.useRef(null),
          s = (0, _.useComposedRefs)(t, o),
          l = i(u, n);
        return f.default.useEffect(() => (l.itemMap.set(o, {
          ref: o,
          ...a
        }), () => {
          l.itemMap.delete(o);
        })), (0, A.jsx)(p, {
          [d]: "",
          ref: s,
          children: r
        });
      });
    return g.displayName = u, [{
      Provider: o,
      Slot: c,
      ItemSlot: g
    }, function (t) {
      const n = i(e + "CollectionConsumer", t);
      return f.default.useCallback(() => {
        const e = n.collectionRef.current;
        if (!e) return [];
        const t = Array.from(e.querySelectorAll(`[${d}]`));
        return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
      }, [n.collectionRef, n.itemMap]);
    }, r];
  }
  var y = d(n(41594)),
    v = n(95791),
    E = n(10207),
    b = n(56612),
    w = new WeakMap(),
    C = class e extends Map {
      #e;
      constructor(e) {
        super(e), this.#e = [...super.keys()], w.set(this, !0);
      }
      set(e, t) {
        return w.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
      }
      insert(e, t, n) {
        const r = this.has(t),
          a = this.#e.length,
          i = M(e);
        let o = i >= 0 ? i : a + i;
        const s = o < 0 || o >= a ? -1 : o;
        if (s === this.size || r && s === this.size - 1 || -1 === s) return this.set(t, n), this;
        const l = this.size + (r ? 0 : 1);
        i < 0 && o++;
        const c = [...this.#e];
        let u,
          d = !1;
        for (let e = o; e < l; e++) if (o === e) {
          let a = c[e];
          c[e] === t && (a = c[e + 1]), r && this.delete(t), u = this.get(a), this.set(t, n);
        } else {
          d || c[e - 1] !== t || (d = !0);
          const n = c[d ? e : e - 1],
            r = u;
          u = this.get(n), this.delete(n), this.set(n, r);
        }
        return this;
      }
      with(t, n, r) {
        const a = new e(this);
        return a.insert(t, n, r), a;
      }
      before(e) {
        const t = this.#e.indexOf(e) - 1;
        if (!(t < 0)) return this.entryAt(t);
      }
      setBefore(e, t, n) {
        const r = this.#e.indexOf(e);
        return -1 === r ? this : this.insert(r, t, n);
      }
      after(e) {
        let t = this.#e.indexOf(e);
        if (t = -1 === t || t === this.size - 1 ? -1 : t + 1, -1 !== t) return this.entryAt(t);
      }
      setAfter(e, t, n) {
        const r = this.#e.indexOf(e);
        return -1 === r ? this : this.insert(r + 1, t, n);
      }
      first() {
        return this.entryAt(0);
      }
      last() {
        return this.entryAt(-1);
      }
      clear() {
        return this.#e = [], super.clear();
      }
      delete(e) {
        const t = super.delete(e);
        return t && this.#e.splice(this.#e.indexOf(e), 1), t;
      }
      deleteAt(e) {
        const t = this.keyAt(e);
        return void 0 !== t && this.delete(t);
      }
      at(e) {
        const t = O(this.#e, e);
        if (void 0 !== t) return this.get(t);
      }
      entryAt(e) {
        const t = O(this.#e, e);
        if (void 0 !== t) return [t, this.get(t)];
      }
      indexOf(e) {
        return this.#e.indexOf(e);
      }
      keyAt(e) {
        return O(this.#e, e);
      }
      from(e, t) {
        const n = this.indexOf(e);
        if (-1 === n) return;
        let r = n + t;
        return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.at(r);
      }
      keyFrom(e, t) {
        const n = this.indexOf(e);
        if (-1 === n) return;
        let r = n + t;
        return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.keyAt(r);
      }
      find(e, t) {
        let n = 0;
        for (const r of this) {
          if (Reflect.apply(e, t, [r, n, this])) return r;
          n++;
        }
      }
      findIndex(e, t) {
        let n = 0;
        for (const r of this) {
          if (Reflect.apply(e, t, [r, n, this])) return n;
          n++;
        }
        return -1;
      }
      filter(t, n) {
        const r = [];
        let a = 0;
        for (const e of this) Reflect.apply(t, n, [e, a, this]) && r.push(e), a++;
        return new e(r);
      }
      map(t, n) {
        const r = [];
        let a = 0;
        for (const e of this) r.push([e[0], Reflect.apply(t, n, [e, a, this])]), a++;
        return new e(r);
      }
      reduce(...e) {
        const [t, n] = e;
        let r = 0,
          a = n ?? this.at(0);
        for (const n of this) a = 0 === r && 1 === e.length ? n : Reflect.apply(t, this, [a, n, r, this]), r++;
        return a;
      }
      reduceRight(...e) {
        const [t, n] = e;
        let r = n ?? this.at(-1);
        for (let n = this.size - 1; n >= 0; n--) {
          const a = this.at(n);
          r = n === this.size - 1 && 1 === e.length ? a : Reflect.apply(t, this, [r, a, n, this]);
        }
        return r;
      }
      toSorted(t) {
        const n = [...this.entries()].sort(t);
        return new e(n);
      }
      toReversed() {
        const t = new e();
        for (let e = this.size - 1; e >= 0; e--) {
          const n = this.keyAt(e),
            r = this.get(n);
          t.set(n, r);
        }
        return t;
      }
      toSpliced(...t) {
        const n = [...this.entries()];
        return n.splice(...t), new e(n);
      }
      slice(t, n) {
        const r = new e();
        let a = this.size - 1;
        if (void 0 === t) return r;
        t < 0 && (t += this.size), void 0 !== n && n > 0 && (a = n - 1);
        for (let e = t; e <= a; e++) {
          const t = this.keyAt(e),
            n = this.get(t);
          r.set(t, n);
        }
        return r;
      }
      every(e, t) {
        let n = 0;
        for (const r of this) {
          if (!Reflect.apply(e, t, [r, n, this])) return !1;
          n++;
        }
        return !0;
      }
      some(e, t) {
        let n = 0;
        for (const r of this) {
          if (Reflect.apply(e, t, [r, n, this])) return !0;
          n++;
        }
        return !1;
      }
    };
  function O(e, t) {
    if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
    const n = function (e, t) {
      const n = e.length,
        r = M(t),
        a = r >= 0 ? r : n + r;
      return a < 0 || a >= n ? -1 : a;
    }(e, t);
    return -1 === n ? void 0 : e[n];
  }
  function M(e) {
    return e != e || 0 === e ? 0 : Math.trunc(e);
  }
  var S = n(74848);
  function T(e) {
    const t = e + "CollectionProvider",
      [n, r] = (0, v.createContextScope)(t),
      [a, i] = n(t, {
        collectionElement: null,
        collectionRef: {
          current: null
        },
        collectionRefObject: {
          current: null
        },
        itemMap: new C(),
        setItemMap: () => {}
      }),
      o = ({
        state: e,
        ...t
      }) => e ? (0, S.jsx)(l, {
        ...t,
        state: e
      }) : (0, S.jsx)(s, {
        ...t
      });
    o.displayName = t;
    const s = e => {
      const t = m();
      return (0, S.jsx)(l, {
        ...e,
        state: t
      });
    };
    s.displayName = t + "Init";
    const l = e => {
      const {
          scope: t,
          children: n,
          state: r
        } = e,
        i = y.default.useRef(null),
        [o, s] = y.default.useState(null),
        l = (0, E.useComposedRefs)(i, s),
        [c, u] = r;
      return y.default.useEffect(() => {
        if (!o) return;
        const e = (t = () => {}, new MutationObserver(e => {
          for (const n of e) if ("childList" === n.type) return void t();
        }));
        var t;
        return e.observe(o, {
          childList: !0,
          subtree: !0
        }), () => {
          e.disconnect();
        };
      }, [o]), (0, S.jsx)(a, {
        scope: t,
        itemMap: c,
        setItemMap: u,
        collectionRef: l,
        collectionRefObject: i,
        collectionElement: o,
        children: n
      });
    };
    l.displayName = t + "Impl";
    const c = e + "CollectionSlot",
      u = (0, b.createSlot)(c),
      d = y.default.forwardRef((e, t) => {
        const {
            scope: n,
            children: r
          } = e,
          a = i(c, n),
          o = (0, E.useComposedRefs)(t, a.collectionRef);
        return (0, S.jsx)(u, {
          ref: o,
          children: r
        });
      });
    d.displayName = c;
    const p = e + "CollectionItemSlot",
      f = "data-radix-collection-item",
      h = (0, b.createSlot)(p),
      _ = y.default.forwardRef((e, t) => {
        const {
            scope: n,
            children: r,
            ...a
          } = e,
          o = y.default.useRef(null),
          [s, l] = y.default.useState(null),
          c = (0, E.useComposedRefs)(t, o, l),
          u = i(p, n),
          {
            setItemMap: d
          } = u,
          _ = y.default.useRef(a);
        (function (e, t) {
          if (e === t) return !0;
          if ("object" != typeof e || "object" != typeof t) return !1;
          if (null == e || null == t) return !1;
          const n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (const r of n) {
            if (!Object.prototype.hasOwnProperty.call(t, r)) return !1;
            if (e[r] !== t[r]) return !1;
          }
          return !0;
        })(_.current, a) || (_.current = a);
        const m = _.current;
        return y.default.useEffect(() => {
          const e = m;
          return d(t => s ? t.has(s) ? t.set(s, {
            ...e,
            element: s
          }).toSorted(k) : (t.set(s, {
            ...e,
            element: s
          }), t.toSorted(k)) : t), () => {
            d(e => s && e.has(s) ? (e.delete(s), new C(e)) : e);
          };
        }, [s, m, d]), (0, S.jsx)(h, {
          [f]: "",
          ref: c,
          children: r
        });
      });
    function m() {
      return y.default.useState(new C());
    }
    return _.displayName = p, [{
      Provider: o,
      Slot: d,
      ItemSlot: _
    }, {
      createCollectionScope: r,
      useCollection: function (t) {
        const {
          itemMap: n
        } = i(e + "CollectionConsumer", t);
        return n;
      },
      useInitCollection: m
    }];
  }
  function k(e, t) {
    return e[1].element && t[1].element ? function (e, t) {
      return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
    }(e[1].element, t[1].element) ? -1 : 1 : 0;
  }
});
