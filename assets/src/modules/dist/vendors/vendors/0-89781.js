// Reconstructed Webpack factory 89781; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    b6: () => E,
    ZS: () => C,
    tN: () => w
  });
  var r = 200,
    a = function () {};
  a.prototype.append = function (e) {
    return e.length ? (e = a.from(e), !this.length && e || e.length < r && this.leafAppend(e) || this.length < r && e.leafPrepend(this) || this.appendInner(e)) : this;
  }, a.prototype.prepend = function (e) {
    return e.length ? a.from(e).append(this) : this;
  }, a.prototype.appendInner = function (e) {
    return new o(this, e);
  }, a.prototype.slice = function (e, t) {
    return void 0 === e && (e = 0), void 0 === t && (t = this.length), e >= t ? a.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
  }, a.prototype.get = function (e) {
    if (!(e < 0 || e >= this.length)) return this.getInner(e);
  }, a.prototype.forEach = function (e, t, n) {
    void 0 === t && (t = 0), void 0 === n && (n = this.length), t <= n ? this.forEachInner(e, t, n, 0) : this.forEachInvertedInner(e, t, n, 0);
  }, a.prototype.map = function (e, t, n) {
    void 0 === t && (t = 0), void 0 === n && (n = this.length);
    var r = [];
    return this.forEach(function (t, n) {
      return r.push(e(t, n));
    }, t, n), r;
  }, a.from = function (e) {
    return e instanceof a ? e : e && e.length ? new i(e) : a.empty;
  };
  var i = function (e) {
    function t(t) {
      e.call(this), this.values = t;
    }
    e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
    var n = {
      length: {
        configurable: !0
      },
      depth: {
        configurable: !0
      }
    };
    return t.prototype.flatten = function () {
      return this.values;
    }, t.prototype.sliceInner = function (e, n) {
      return 0 == e && n == this.length ? this : new t(this.values.slice(e, n));
    }, t.prototype.getInner = function (e) {
      return this.values[e];
    }, t.prototype.forEachInner = function (e, t, n, r) {
      for (var a = t; a < n; a++) if (!1 === e(this.values[a], r + a)) return !1;
    }, t.prototype.forEachInvertedInner = function (e, t, n, r) {
      for (var a = t - 1; a >= n; a--) if (!1 === e(this.values[a], r + a)) return !1;
    }, t.prototype.leafAppend = function (e) {
      if (this.length + e.length <= r) return new t(this.values.concat(e.flatten()));
    }, t.prototype.leafPrepend = function (e) {
      if (this.length + e.length <= r) return new t(e.flatten().concat(this.values));
    }, n.length.get = function () {
      return this.values.length;
    }, n.depth.get = function () {
      return 0;
    }, Object.defineProperties(t.prototype, n), t;
  }(a);
  a.empty = new i([]);
  var o = function (e) {
    function t(t, n) {
      e.call(this), this.left = t, this.right = n, this.length = t.length + n.length, this.depth = Math.max(t.depth, n.depth) + 1;
    }
    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.flatten = function () {
      return this.left.flatten().concat(this.right.flatten());
    }, t.prototype.getInner = function (e) {
      return e < this.left.length ? this.left.get(e) : this.right.get(e - this.left.length);
    }, t.prototype.forEachInner = function (e, t, n, r) {
      var a = this.left.length;
      return !(t < a && !1 === this.left.forEachInner(e, t, Math.min(n, a), r)) && !(n > a && !1 === this.right.forEachInner(e, Math.max(t - a, 0), Math.min(this.length, n) - a, r + a)) && void 0;
    }, t.prototype.forEachInvertedInner = function (e, t, n, r) {
      var a = this.left.length;
      return !(t > a && !1 === this.right.forEachInvertedInner(e, t - a, Math.max(n, a) - a, r + a)) && !(n < a && !1 === this.left.forEachInvertedInner(e, Math.min(t, a), n, r)) && void 0;
    }, t.prototype.sliceInner = function (e, t) {
      if (0 == e && t == this.length) return this;
      var n = this.left.length;
      return t <= n ? this.left.slice(e, t) : e >= n ? this.right.slice(e - n, t - n) : this.left.slice(e, n).append(this.right.slice(0, t - n));
    }, t.prototype.leafAppend = function (e) {
      var n = this.right.leafAppend(e);
      if (n) return new t(this.left, n);
    }, t.prototype.leafPrepend = function (e) {
      var n = this.left.leafPrepend(e);
      if (n) return new t(n, this.right);
    }, t.prototype.appendInner = function (e) {
      return this.left.depth >= Math.max(this.right.depth, e.depth) + 1 ? new t(this.left, new t(this.right, e)) : new t(this, e);
    }, t;
  }(a);
  const s = a;
  var l = n(38262),
    c = n(42845);
  class u {
    constructor(e, t) {
      this.items = e, this.eventCount = t;
    }
    popEvent(e, t) {
      if (0 == this.eventCount) return null;
      let n,
        r,
        a = this.items.length;
      for (;; a--) if (this.items.get(a - 1).selection) {
        --a;
        break;
      }
      t && (n = this.remapping(a, this.items.length), r = n.maps.length);
      let i,
        o,
        s = e.tr,
        l = [],
        c = [];
      return this.items.forEach((e, t) => {
        if (!e.step) return n || (n = this.remapping(a, t + 1), r = n.maps.length), r--, void c.push(e);
        if (n) {
          c.push(new d(e.map));
          let t,
            a = e.step.map(n.slice(r));
          a && s.maybeStep(a).doc && (t = s.mapping.maps[s.mapping.maps.length - 1], l.push(new d(t, void 0, void 0, l.length + c.length))), r--, t && n.appendMap(t, r);
        } else s.maybeStep(e.step);
        return e.selection ? (i = n ? e.selection.map(n.slice(r)) : e.selection, o = new u(this.items.slice(0, a).append(c.reverse().concat(l)), this.eventCount - 1), !1) : void 0;
      }, this.items.length, 0), {
        remaining: o,
        transform: s,
        selection: i
      };
    }
    addTransform(e, t, n, r) {
      let a = [],
        i = this.eventCount,
        o = this.items,
        s = !r && o.length ? o.get(o.length - 1) : null;
      for (let n = 0; n < e.steps.length; n++) {
        let l,
          c = e.steps[n].invert(e.docs[n]),
          u = new d(e.mapping.maps[n], c, t);
        (l = s && s.merge(u)) && (u = l, n ? a.pop() : o = o.slice(0, o.length - 1)), a.push(u), t && (i++, t = void 0), r || (s = u);
      }
      let l = i - n.depth;
      return l > f && (o = function (e, t) {
        let n;
        return e.forEach((e, r) => {
          if (e.selection && 0 == t--) return n = r, !1;
        }), e.slice(n);
      }(o, l), i -= l), new u(o.append(a), i);
    }
    remapping(e, t) {
      let n = new l.X9();
      return this.items.forEach((t, r) => {
        let a = null != t.mirrorOffset && r - t.mirrorOffset >= e ? n.maps.length - t.mirrorOffset : void 0;
        n.appendMap(t.map, a);
      }, e, t), n;
    }
    addMaps(e) {
      return 0 == this.eventCount ? this : new u(this.items.append(e.map(e => new d(e))), this.eventCount);
    }
    rebased(e, t) {
      if (!this.eventCount) return this;
      let n = [],
        r = Math.max(0, this.items.length - t),
        a = e.mapping,
        i = e.steps.length,
        o = this.eventCount;
      this.items.forEach(e => {
        e.selection && o--;
      }, r);
      let s = t;
      this.items.forEach(t => {
        let r = a.getMirror(--s);
        if (null == r) return;
        i = Math.min(i, r);
        let l = a.maps[r];
        if (t.step) {
          let i = e.steps[r].invert(e.docs[r]),
            c = t.selection && t.selection.map(a.slice(s + 1, r));
          c && o++, n.push(new d(l, i, c));
        } else n.push(new d(l));
      }, r);
      let l = [];
      for (let e = t; e < i; e++) l.push(new d(a.maps[e]));
      let c = this.items.slice(0, r).append(l).append(n),
        p = new u(c, o);
      return p.emptyItemCount() > 500 && (p = p.compress(this.items.length - n.length)), p;
    }
    emptyItemCount() {
      let e = 0;
      return this.items.forEach(t => {
        t.step || e++;
      }), e;
    }
    compress(e = this.items.length) {
      let t = this.remapping(0, e),
        n = t.maps.length,
        r = [],
        a = 0;
      return this.items.forEach((i, o) => {
        if (o >= e) r.push(i), i.selection && a++;else if (i.step) {
          let e = i.step.map(t.slice(n)),
            o = e && e.getMap();
          if (n--, o && t.appendMap(o, n), e) {
            let s = i.selection && i.selection.map(t.slice(n));
            s && a++;
            let l,
              c = new d(o.invert(), e, s),
              u = r.length - 1;
            (l = r.length && r[u].merge(c)) ? r[u] = l : r.push(c);
          }
        } else i.map && n--;
      }, this.items.length, 0), new u(s.from(r.reverse()), a);
    }
  }
  u.empty = new u(s.empty, 0);
  class d {
    constructor(e, t, n, r) {
      this.map = e, this.step = t, this.selection = n, this.mirrorOffset = r;
    }
    merge(e) {
      if (this.step && e.step && !e.selection) {
        let t = e.step.merge(this.step);
        if (t) return new d(t.getMap().invert(), t, this.selection);
      }
    }
  }
  class p {
    constructor(e, t, n, r, a) {
      this.done = e, this.undone = t, this.prevRanges = n, this.prevTime = r, this.prevComposition = a;
    }
  }
  const f = 20;
  function h(e) {
    let t = [];
    for (let n = e.length - 1; n >= 0 && 0 == t.length; n--) e[n].forEach((e, n, r, a) => t.push(r, a));
    return t;
  }
  function _(e, t) {
    if (!e) return null;
    let n = [];
    for (let r = 0; r < e.length; r += 2) {
      let a = t.map(e[r], 1),
        i = t.map(e[r + 1], -1);
      a <= i && n.push(a, i);
    }
    return n;
  }
  let m = !1,
    A = null;
  function g(e) {
    let t = e.plugins;
    if (A != t) {
      m = !1, A = t;
      for (let e = 0; e < t.length; e++) if (t[e].spec.historyPreserveItems) {
        m = !0;
        break;
      }
    }
    return m;
  }
  const y = new c.hs("history"),
    v = new c.hs("closeHistory");
  function E(e = {}) {
    return e = {
      depth: e.depth || 100,
      newGroupDelay: e.newGroupDelay || 500
    }, new c.k_({
      key: y,
      state: {
        init: () => new p(u.empty, u.empty, null, 0, -1),
        apply: (t, n, r) => function (e, t, n, r) {
          let a,
            i = n.getMeta(y);
          if (i) return i.historyState;
          n.getMeta(v) && (e = new p(e.done, e.undone, null, 0, -1));
          let o = n.getMeta("appendedTransaction");
          if (0 == n.steps.length) return e;
          if (o && o.getMeta(y)) return o.getMeta(y).redo ? new p(e.done.addTransform(n, void 0, r, g(t)), e.undone, h(n.mapping.maps), e.prevTime, e.prevComposition) : new p(e.done, e.undone.addTransform(n, void 0, r, g(t)), null, e.prevTime, e.prevComposition);
          if (!1 === n.getMeta("addToHistory") || o && !1 === o.getMeta("addToHistory")) return (a = n.getMeta("rebased")) ? new p(e.done.rebased(n, a), e.undone.rebased(n, a), _(e.prevRanges, n.mapping), e.prevTime, e.prevComposition) : new p(e.done.addMaps(n.mapping.maps), e.undone.addMaps(n.mapping.maps), _(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
          {
            let a = n.getMeta("composition"),
              i = 0 == e.prevTime || !o && e.prevComposition != a && (e.prevTime < (n.time || 0) - r.newGroupDelay || !function (e, t) {
                if (!t) return !1;
                if (!e.docChanged) return !0;
                let n = !1;
                return e.mapping.maps[0].forEach((e, r) => {
                  for (let a = 0; a < t.length; a += 2) e <= t[a + 1] && r >= t[a] && (n = !0);
                }), n;
              }(n, e.prevRanges)),
              s = o ? _(e.prevRanges, n.mapping) : h(n.mapping.maps);
            return new p(e.done.addTransform(n, i ? t.selection.getBookmark() : void 0, r, g(t)), u.empty, s, n.time, null == a ? e.prevComposition : a);
          }
        }(n, r, t, e)
      },
      config: e,
      props: {
        handleDOMEvents: {
          beforeinput(e, t) {
            let n = t.inputType,
              r = "historyUndo" == n ? w : "historyRedo" == n ? C : null;
            return !!r && (t.preventDefault(), r(e.state, e.dispatch));
          }
        }
      }
    });
  }
  function b(e, t) {
    return (n, r) => {
      let a = y.getState(n);
      if (!a || 0 == (e ? a.undone : a.done).eventCount) return !1;
      if (r) {
        let i = function (e, t, n) {
          let r = g(t),
            a = y.get(t).spec.config,
            i = (n ? e.undone : e.done).popEvent(t, r);
          if (!i) return null;
          let o = i.selection.resolve(i.transform.doc),
            s = (n ? e.done : e.undone).addTransform(i.transform, t.selection.getBookmark(), a, r),
            l = new p(n ? s : i.remaining, n ? i.remaining : s, null, 0, -1);
          return i.transform.setSelection(o).setMeta(y, {
            redo: n,
            historyState: l
          });
        }(a, n, e);
        i && r(t ? i.scrollIntoView() : i);
      }
      return !0;
    };
  }
  const w = b(!1, !0),
    C = b(!0, !0);
  b(!1, !1), b(!0, !1);
});
