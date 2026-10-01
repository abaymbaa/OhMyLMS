// Reconstructed Webpack factory 58903; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  function r(e) {
    this.content = e;
  }
  n.d(t, {
    S4: () => X,
    ZF: () => le,
    FK: () => s,
    CU: () => d,
    sX: () => $,
    bP: () => D,
    u$: () => k,
    vI: () => p,
    Sj: () => q,
    Ji: () => f
  }), r.prototype = {
    constructor: r,
    find: function (e) {
      for (var t = 0; t < this.content.length; t += 2) if (this.content[t] === e) return t;
      return -1;
    },
    get: function (e) {
      var t = this.find(e);
      return -1 == t ? void 0 : this.content[t + 1];
    },
    update: function (e, t, n) {
      var a = n && n != e ? this.remove(n) : this,
        i = a.find(e),
        o = a.content.slice();
      return -1 == i ? o.push(n || e, t) : (o[i + 1] = t, n && (o[i] = n)), new r(o);
    },
    remove: function (e) {
      var t = this.find(e);
      if (-1 == t) return this;
      var n = this.content.slice();
      return n.splice(t, 2), new r(n);
    },
    addToStart: function (e, t) {
      return new r([e, t].concat(this.remove(e).content));
    },
    addToEnd: function (e, t) {
      var n = this.remove(e).content.slice();
      return n.push(e, t), new r(n);
    },
    addBefore: function (e, t, n) {
      var a = this.remove(t),
        i = a.content.slice(),
        o = a.find(e);
      return i.splice(-1 == o ? i.length : o, 0, t, n), new r(i);
    },
    forEach: function (e) {
      for (var t = 0; t < this.content.length; t += 2) e(this.content[t], this.content[t + 1]);
    },
    prepend: function (e) {
      return (e = r.from(e)).size ? new r(e.content.concat(this.subtract(e).content)) : this;
    },
    append: function (e) {
      return (e = r.from(e)).size ? new r(this.subtract(e).content.concat(e.content)) : this;
    },
    subtract: function (e) {
      var t = this;
      e = r.from(e);
      for (var n = 0; n < e.content.length; n += 2) t = t.remove(e.content[n]);
      return t;
    },
    toObject: function () {
      var e = {};
      return this.forEach(function (t, n) {
        e[t] = n;
      }), e;
    },
    get size() {
      return this.content.length >> 1;
    }
  }, r.from = function (e) {
    if (e instanceof r) return e;
    var t = [];
    if (e) for (var n in e) t.push(n, e[n]);
    return new r(t);
  };
  const a = r;
  function i(e, t, n) {
    for (let r = 0;; r++) {
      if (r == e.childCount || r == t.childCount) return e.childCount == t.childCount ? null : n;
      let a = e.child(r),
        o = t.child(r);
      if (a != o) {
        if (!a.sameMarkup(o)) return n;
        if (a.isText && a.text != o.text) {
          for (let e = 0; a.text[e] == o.text[e]; e++) n++;
          return n;
        }
        if (a.content.size || o.content.size) {
          let e = i(a.content, o.content, n + 1);
          if (null != e) return e;
        }
        n += a.nodeSize;
      } else n += a.nodeSize;
    }
  }
  function o(e, t, n, r) {
    for (let a = e.childCount, i = t.childCount;;) {
      if (0 == a || 0 == i) return a == i ? null : {
        a: n,
        b: r
      };
      let s = e.child(--a),
        l = t.child(--i),
        c = s.nodeSize;
      if (s != l) {
        if (!s.sameMarkup(l)) return {
          a: n,
          b: r
        };
        if (s.isText && s.text != l.text) {
          let e = 0,
            t = Math.min(s.text.length, l.text.length);
          for (; e < t && s.text[s.text.length - e - 1] == l.text[l.text.length - e - 1];) e++, n--, r--;
          return {
            a: n,
            b: r
          };
        }
        if (s.content.size || l.content.size) {
          let e = o(s.content, l.content, n - 1, r - 1);
          if (e) return e;
        }
        n -= c, r -= c;
      } else n -= c, r -= c;
    }
  }
  class s {
    constructor(e, t) {
      if (this.content = e, this.size = t || 0, null == t) for (let t = 0; t < e.length; t++) this.size += e[t].nodeSize;
    }
    nodesBetween(e, t, n, r = 0, a) {
      for (let i = 0, o = 0; o < t; i++) {
        let s = this.content[i],
          l = o + s.nodeSize;
        if (l > e && !1 !== n(s, r + o, a || null, i) && s.content.size) {
          let a = o + 1;
          s.nodesBetween(Math.max(0, e - a), Math.min(s.content.size, t - a), n, r + a);
        }
        o = l;
      }
    }
    descendants(e) {
      this.nodesBetween(0, this.size, e);
    }
    textBetween(e, t, n, r) {
      let a = "",
        i = !0;
      return this.nodesBetween(e, t, (o, s) => {
        let l = o.isText ? o.text.slice(Math.max(e, s) - s, t - s) : o.isLeaf ? r ? "function" == typeof r ? r(o) : r : o.type.spec.leafText ? o.type.spec.leafText(o) : "" : "";
        o.isBlock && (o.isLeaf && l || o.isTextblock) && n && (i ? i = !1 : a += n), a += l;
      }, 0), a;
    }
    append(e) {
      if (!e.size) return this;
      if (!this.size) return e;
      let t = this.lastChild,
        n = e.firstChild,
        r = this.content.slice(),
        a = 0;
      for (t.isText && t.sameMarkup(n) && (r[r.length - 1] = t.withText(t.text + n.text), a = 1); a < e.content.length; a++) r.push(e.content[a]);
      return new s(r, this.size + e.size);
    }
    cut(e, t = this.size) {
      if (0 == e && t == this.size) return this;
      let n = [],
        r = 0;
      if (t > e) for (let a = 0, i = 0; i < t; a++) {
        let o = this.content[a],
          s = i + o.nodeSize;
        s > e && ((i < e || s > t) && (o = o.isText ? o.cut(Math.max(0, e - i), Math.min(o.text.length, t - i)) : o.cut(Math.max(0, e - i - 1), Math.min(o.content.size, t - i - 1))), n.push(o), r += o.nodeSize), i = s;
      }
      return new s(n, r);
    }
    cutByIndex(e, t) {
      return e == t ? s.empty : 0 == e && t == this.content.length ? this : new s(this.content.slice(e, t));
    }
    replaceChild(e, t) {
      let n = this.content[e];
      if (n == t) return this;
      let r = this.content.slice(),
        a = this.size + t.nodeSize - n.nodeSize;
      return r[e] = t, new s(r, a);
    }
    addToStart(e) {
      return new s([e].concat(this.content), this.size + e.nodeSize);
    }
    addToEnd(e) {
      return new s(this.content.concat(e), this.size + e.nodeSize);
    }
    eq(e) {
      if (this.content.length != e.content.length) return !1;
      for (let t = 0; t < this.content.length; t++) if (!this.content[t].eq(e.content[t])) return !1;
      return !0;
    }
    get firstChild() {
      return this.content.length ? this.content[0] : null;
    }
    get lastChild() {
      return this.content.length ? this.content[this.content.length - 1] : null;
    }
    get childCount() {
      return this.content.length;
    }
    child(e) {
      let t = this.content[e];
      if (!t) throw new RangeError("Index " + e + " out of range for " + this);
      return t;
    }
    maybeChild(e) {
      return this.content[e] || null;
    }
    forEach(e) {
      for (let t = 0, n = 0; t < this.content.length; t++) {
        let r = this.content[t];
        e(r, n, t), n += r.nodeSize;
      }
    }
    findDiffStart(e, t = 0) {
      return i(this, e, t);
    }
    findDiffEnd(e, t = this.size, n = e.size) {
      return o(this, e, t, n);
    }
    findIndex(e) {
      if (0 == e) return c(0, e);
      if (e == this.size) return c(this.content.length, e);
      if (e > this.size || e < 0) throw new RangeError(`Position ${e} outside of fragment (${this})`);
      for (let t = 0, n = 0;; t++) {
        let r = n + this.child(t).nodeSize;
        if (r >= e) return r == e ? c(t + 1, r) : c(t, n);
        n = r;
      }
    }
    toString() {
      return "<" + this.toStringInner() + ">";
    }
    toStringInner() {
      return this.content.join(", ");
    }
    toJSON() {
      return this.content.length ? this.content.map(e => e.toJSON()) : null;
    }
    static fromJSON(e, t) {
      if (!t) return s.empty;
      if (!Array.isArray(t)) throw new RangeError("Invalid input for Fragment.fromJSON");
      return new s(t.map(e.nodeFromJSON));
    }
    static fromArray(e) {
      if (!e.length) return s.empty;
      let t,
        n = 0;
      for (let r = 0; r < e.length; r++) {
        let a = e[r];
        n += a.nodeSize, r && a.isText && e[r - 1].sameMarkup(a) ? (t || (t = e.slice(0, r)), t[t.length - 1] = a.withText(t[t.length - 1].text + a.text)) : t && t.push(a);
      }
      return new s(t || e, n);
    }
    static from(e) {
      if (!e) return s.empty;
      if (e instanceof s) return e;
      if (Array.isArray(e)) return this.fromArray(e);
      if (e.attrs) return new s([e], e.nodeSize);
      throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
    }
  }
  s.empty = new s([], 0);
  const l = {
    index: 0,
    offset: 0
  };
  function c(e, t) {
    return l.index = e, l.offset = t, l;
  }
  function u(e, t) {
    if (e === t) return !0;
    if (!e || "object" != typeof e || !t || "object" != typeof t) return !1;
    let n = Array.isArray(e);
    if (Array.isArray(t) != n) return !1;
    if (n) {
      if (e.length != t.length) return !1;
      for (let n = 0; n < e.length; n++) if (!u(e[n], t[n])) return !1;
    } else {
      for (let n in e) if (!(n in t) || !u(e[n], t[n])) return !1;
      for (let n in t) if (!(n in e)) return !1;
    }
    return !0;
  }
  class d {
    constructor(e, t) {
      this.type = e, this.attrs = t;
    }
    addToSet(e) {
      let t,
        n = !1;
      for (let r = 0; r < e.length; r++) {
        let a = e[r];
        if (this.eq(a)) return e;
        if (this.type.excludes(a.type)) t || (t = e.slice(0, r));else {
          if (a.type.excludes(this.type)) return e;
          !n && a.type.rank > this.type.rank && (t || (t = e.slice(0, r)), t.push(this), n = !0), t && t.push(a);
        }
      }
      return t || (t = e.slice()), n || t.push(this), t;
    }
    removeFromSet(e) {
      for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
      return e;
    }
    isInSet(e) {
      for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return !0;
      return !1;
    }
    eq(e) {
      return this == e || this.type == e.type && u(this.attrs, e.attrs);
    }
    toJSON() {
      let e = {
        type: this.type.name
      };
      for (let t in this.attrs) {
        e.attrs = this.attrs;
        break;
      }
      return e;
    }
    static fromJSON(e, t) {
      if (!t) throw new RangeError("Invalid input for Mark.fromJSON");
      let n = e.marks[t.type];
      if (!n) throw new RangeError(`There is no mark type ${t.type} in this schema`);
      let r = n.create(t.attrs);
      return n.checkAttrs(r.attrs), r;
    }
    static sameSet(e, t) {
      if (e == t) return !0;
      if (e.length != t.length) return !1;
      for (let n = 0; n < e.length; n++) if (!e[n].eq(t[n])) return !1;
      return !0;
    }
    static setFrom(e) {
      if (!e || Array.isArray(e) && 0 == e.length) return d.none;
      if (e instanceof d) return [e];
      let t = e.slice();
      return t.sort((e, t) => e.type.rank - t.type.rank), t;
    }
  }
  d.none = [];
  class p extends Error {}
  class f {
    constructor(e, t, n) {
      this.content = e, this.openStart = t, this.openEnd = n;
    }
    get size() {
      return this.content.size - this.openStart - this.openEnd;
    }
    insertAt(e, t) {
      let n = _(this.content, e + this.openStart, t);
      return n && new f(n, this.openStart, this.openEnd);
    }
    removeBetween(e, t) {
      return new f(h(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
    }
    eq(e) {
      return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
    }
    toString() {
      return this.content + "(" + this.openStart + "," + this.openEnd + ")";
    }
    toJSON() {
      if (!this.content.size) return null;
      let e = {
        content: this.content.toJSON()
      };
      return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
    }
    static fromJSON(e, t) {
      if (!t) return f.empty;
      let n = t.openStart || 0,
        r = t.openEnd || 0;
      if ("number" != typeof n || "number" != typeof r) throw new RangeError("Invalid input for Slice.fromJSON");
      return new f(s.fromJSON(e, t.content), n, r);
    }
    static maxOpen(e, t = !0) {
      let n = 0,
        r = 0;
      for (let r = e.firstChild; r && !r.isLeaf && (t || !r.type.spec.isolating); r = r.firstChild) n++;
      for (let n = e.lastChild; n && !n.isLeaf && (t || !n.type.spec.isolating); n = n.lastChild) r++;
      return new f(e, n, r);
    }
  }
  function h(e, t, n) {
    let {
        index: r,
        offset: a
      } = e.findIndex(t),
      i = e.maybeChild(r),
      {
        index: o,
        offset: s
      } = e.findIndex(n);
    if (a == t || i.isText) {
      if (s != n && !e.child(o).isText) throw new RangeError("Removing non-flat range");
      return e.cut(0, t).append(e.cut(n));
    }
    if (r != o) throw new RangeError("Removing non-flat range");
    return e.replaceChild(r, i.copy(h(i.content, t - a - 1, n - a - 1)));
  }
  function _(e, t, n, r) {
    let {
        index: a,
        offset: i
      } = e.findIndex(t),
      o = e.maybeChild(a);
    if (i == t || o.isText) return r && !r.canReplace(a, a, n) ? null : e.cut(0, t).append(n).append(e.cut(t));
    let s = _(o.content, t - i - 1, n, o);
    return s && e.replaceChild(a, o.copy(s));
  }
  function m(e, t, n) {
    if (n.openStart > e.depth) throw new p("Inserted content deeper than insertion position");
    if (e.depth - n.openStart != t.depth - n.openEnd) throw new p("Inconsistent open depths");
    return A(e, t, n, 0);
  }
  function A(e, t, n, r) {
    let a = e.index(r),
      i = e.node(r);
    if (a == t.index(r) && r < e.depth - n.openStart) {
      let o = A(e, t, n, r + 1);
      return i.copy(i.content.replaceChild(a, o));
    }
    if (n.content.size) {
      if (n.openStart || n.openEnd || e.depth != r || t.depth != r) {
        let {
          start: a,
          end: o
        } = function (e, t) {
          let n = t.depth - e.openStart,
            r = t.node(n).copy(e.content);
          for (let e = n - 1; e >= 0; e--) r = t.node(e).copy(s.from(r));
          return {
            start: r.resolveNoCache(e.openStart + n),
            end: r.resolveNoCache(r.content.size - e.openEnd - n)
          };
        }(n, e);
        return b(i, w(e, a, o, t, r));
      }
      {
        let r = e.parent,
          a = r.content;
        return b(r, a.cut(0, e.parentOffset).append(n.content).append(a.cut(t.parentOffset)));
      }
    }
    return b(i, C(e, t, r));
  }
  function g(e, t) {
    if (!t.type.compatibleContent(e.type)) throw new p("Cannot join " + t.type.name + " onto " + e.type.name);
  }
  function y(e, t, n) {
    let r = e.node(n);
    return g(r, t.node(n)), r;
  }
  function v(e, t) {
    let n = t.length - 1;
    n >= 0 && e.isText && e.sameMarkup(t[n]) ? t[n] = e.withText(t[n].text + e.text) : t.push(e);
  }
  function E(e, t, n, r) {
    let a = (t || e).node(n),
      i = 0,
      o = t ? t.index(n) : a.childCount;
    e && (i = e.index(n), e.depth > n ? i++ : e.textOffset && (v(e.nodeAfter, r), i++));
    for (let e = i; e < o; e++) v(a.child(e), r);
    t && t.depth == n && t.textOffset && v(t.nodeBefore, r);
  }
  function b(e, t) {
    return e.type.checkContent(t), e.copy(t);
  }
  function w(e, t, n, r, a) {
    let i = e.depth > a && y(e, t, a + 1),
      o = r.depth > a && y(n, r, a + 1),
      l = [];
    return E(null, e, a, l), i && o && t.index(a) == n.index(a) ? (g(i, o), v(b(i, w(e, t, n, r, a + 1)), l)) : (i && v(b(i, C(e, t, a + 1)), l), E(t, n, a, l), o && v(b(o, C(n, r, a + 1)), l)), E(r, null, a, l), new s(l);
  }
  function C(e, t, n) {
    let r = [];
    return E(null, e, n, r), e.depth > n && v(b(y(e, t, n + 1), C(e, t, n + 1)), r), E(t, null, n, r), new s(r);
  }
  f.empty = new f(s.empty, 0, 0);
  class O {
    constructor(e, t, n) {
      this.pos = e, this.path = t, this.parentOffset = n, this.depth = t.length / 3 - 1;
    }
    resolveDepth(e) {
      return null == e ? this.depth : e < 0 ? this.depth + e : e;
    }
    get parent() {
      return this.node(this.depth);
    }
    get doc() {
      return this.node(0);
    }
    node(e) {
      return this.path[3 * this.resolveDepth(e)];
    }
    index(e) {
      return this.path[3 * this.resolveDepth(e) + 1];
    }
    indexAfter(e) {
      return e = this.resolveDepth(e), this.index(e) + (e != this.depth || this.textOffset ? 1 : 0);
    }
    start(e) {
      return 0 == (e = this.resolveDepth(e)) ? 0 : this.path[3 * e - 1] + 1;
    }
    end(e) {
      return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
    }
    before(e) {
      if (!(e = this.resolveDepth(e))) throw new RangeError("There is no position before the top-level node");
      return e == this.depth + 1 ? this.pos : this.path[3 * e - 1];
    }
    after(e) {
      if (!(e = this.resolveDepth(e))) throw new RangeError("There is no position after the top-level node");
      return e == this.depth + 1 ? this.pos : this.path[3 * e - 1] + this.path[3 * e].nodeSize;
    }
    get textOffset() {
      return this.pos - this.path[this.path.length - 1];
    }
    get nodeAfter() {
      let e = this.parent,
        t = this.index(this.depth);
      if (t == e.childCount) return null;
      let n = this.pos - this.path[this.path.length - 1],
        r = e.child(t);
      return n ? e.child(t).cut(n) : r;
    }
    get nodeBefore() {
      let e = this.index(this.depth),
        t = this.pos - this.path[this.path.length - 1];
      return t ? this.parent.child(e).cut(0, t) : 0 == e ? null : this.parent.child(e - 1);
    }
    posAtIndex(e, t) {
      t = this.resolveDepth(t);
      let n = this.path[3 * t],
        r = 0 == t ? 0 : this.path[3 * t - 1] + 1;
      for (let t = 0; t < e; t++) r += n.child(t).nodeSize;
      return r;
    }
    marks() {
      let e = this.parent,
        t = this.index();
      if (0 == e.content.size) return d.none;
      if (this.textOffset) return e.child(t).marks;
      let n = e.maybeChild(t - 1),
        r = e.maybeChild(t);
      if (!n) {
        let e = n;
        n = r, r = e;
      }
      let a = n.marks;
      for (var i = 0; i < a.length; i++) !1 !== a[i].type.spec.inclusive || r && a[i].isInSet(r.marks) || (a = a[i--].removeFromSet(a));
      return a;
    }
    marksAcross(e) {
      let t = this.parent.maybeChild(this.index());
      if (!t || !t.isInline) return null;
      let n = t.marks,
        r = e.parent.maybeChild(e.index());
      for (var a = 0; a < n.length; a++) !1 !== n[a].type.spec.inclusive || r && n[a].isInSet(r.marks) || (n = n[a--].removeFromSet(n));
      return n;
    }
    sharedDepth(e) {
      for (let t = this.depth; t > 0; t--) if (this.start(t) <= e && this.end(t) >= e) return t;
      return 0;
    }
    blockRange(e = this, t) {
      if (e.pos < this.pos) return e.blockRange(this);
      for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--) if (e.pos <= this.end(n) && (!t || t(this.node(n)))) return new k(this, e, n);
      return null;
    }
    sameParent(e) {
      return this.pos - this.parentOffset == e.pos - e.parentOffset;
    }
    max(e) {
      return e.pos > this.pos ? e : this;
    }
    min(e) {
      return e.pos < this.pos ? e : this;
    }
    toString() {
      let e = "";
      for (let t = 1; t <= this.depth; t++) e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
      return e + ":" + this.parentOffset;
    }
    static resolve(e, t) {
      if (!(t >= 0 && t <= e.content.size)) throw new RangeError("Position " + t + " out of range");
      let n = [],
        r = 0,
        a = t;
      for (let t = e;;) {
        let {
            index: e,
            offset: i
          } = t.content.findIndex(a),
          o = a - i;
        if (n.push(t, e, r + i), !o) break;
        if (t = t.child(e), t.isText) break;
        a = o - 1, r += i + 1;
      }
      return new O(t, n, a);
    }
    static resolveCached(e, t) {
      let n = T.get(e);
      if (n) for (let e = 0; e < n.elts.length; e++) {
        let r = n.elts[e];
        if (r.pos == t) return r;
      } else T.set(e, n = new M());
      let r = n.elts[n.i] = O.resolve(e, t);
      return n.i = (n.i + 1) % S, r;
    }
  }
  class M {
    constructor() {
      this.elts = [], this.i = 0;
    }
  }
  const S = 12,
    T = new WeakMap();
  class k {
    constructor(e, t, n) {
      this.$from = e, this.$to = t, this.depth = n;
    }
    get start() {
      return this.$from.before(this.depth + 1);
    }
    get end() {
      return this.$to.after(this.depth + 1);
    }
    get parent() {
      return this.$from.node(this.depth);
    }
    get startIndex() {
      return this.$from.index(this.depth);
    }
    get endIndex() {
      return this.$to.indexAfter(this.depth);
    }
  }
  const x = Object.create(null);
  class D {
    constructor(e, t, n, r = d.none) {
      this.type = e, this.attrs = t, this.marks = r, this.content = n || s.empty;
    }
    get children() {
      return this.content.content;
    }
    get nodeSize() {
      return this.isLeaf ? 1 : 2 + this.content.size;
    }
    get childCount() {
      return this.content.childCount;
    }
    child(e) {
      return this.content.child(e);
    }
    maybeChild(e) {
      return this.content.maybeChild(e);
    }
    forEach(e) {
      this.content.forEach(e);
    }
    nodesBetween(e, t, n, r = 0) {
      this.content.nodesBetween(e, t, n, r, this);
    }
    descendants(e) {
      this.nodesBetween(0, this.content.size, e);
    }
    get textContent() {
      return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
    }
    textBetween(e, t, n, r) {
      return this.content.textBetween(e, t, n, r);
    }
    get firstChild() {
      return this.content.firstChild;
    }
    get lastChild() {
      return this.content.lastChild;
    }
    eq(e) {
      return this == e || this.sameMarkup(e) && this.content.eq(e.content);
    }
    sameMarkup(e) {
      return this.hasMarkup(e.type, e.attrs, e.marks);
    }
    hasMarkup(e, t, n) {
      return this.type == e && u(this.attrs, t || e.defaultAttrs || x) && d.sameSet(this.marks, n || d.none);
    }
    copy(e = null) {
      return e == this.content ? this : new D(this.type, this.attrs, e, this.marks);
    }
    mark(e) {
      return e == this.marks ? this : new D(this.type, this.attrs, this.content, e);
    }
    cut(e, t = this.content.size) {
      return 0 == e && t == this.content.size ? this : this.copy(this.content.cut(e, t));
    }
    slice(e, t = this.content.size, n = !1) {
      if (e == t) return f.empty;
      let r = this.resolve(e),
        a = this.resolve(t),
        i = n ? 0 : r.sharedDepth(t),
        o = r.start(i),
        s = r.node(i).content.cut(r.pos - o, a.pos - o);
      return new f(s, r.depth - i, a.depth - i);
    }
    replace(e, t, n) {
      return m(this.resolve(e), this.resolve(t), n);
    }
    nodeAt(e) {
      for (let t = this;;) {
        let {
          index: n,
          offset: r
        } = t.content.findIndex(e);
        if (t = t.maybeChild(n), !t) return null;
        if (r == e || t.isText) return t;
        e -= r + 1;
      }
    }
    childAfter(e) {
      let {
        index: t,
        offset: n
      } = this.content.findIndex(e);
      return {
        node: this.content.maybeChild(t),
        index: t,
        offset: n
      };
    }
    childBefore(e) {
      if (0 == e) return {
        node: null,
        index: 0,
        offset: 0
      };
      let {
        index: t,
        offset: n
      } = this.content.findIndex(e);
      if (n < e) return {
        node: this.content.child(t),
        index: t,
        offset: n
      };
      let r = this.content.child(t - 1);
      return {
        node: r,
        index: t - 1,
        offset: n - r.nodeSize
      };
    }
    resolve(e) {
      return O.resolveCached(this, e);
    }
    resolveNoCache(e) {
      return O.resolve(this, e);
    }
    rangeHasMark(e, t, n) {
      let r = !1;
      return t > e && this.nodesBetween(e, t, e => (n.isInSet(e.marks) && (r = !0), !r)), r;
    }
    get isBlock() {
      return this.type.isBlock;
    }
    get isTextblock() {
      return this.type.isTextblock;
    }
    get inlineContent() {
      return this.type.inlineContent;
    }
    get isInline() {
      return this.type.isInline;
    }
    get isText() {
      return this.type.isText;
    }
    get isLeaf() {
      return this.type.isLeaf;
    }
    get isAtom() {
      return this.type.isAtom;
    }
    toString() {
      if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
      let e = this.type.name;
      return this.content.size && (e += "(" + this.content.toStringInner() + ")"), P(this.marks, e);
    }
    contentMatchAt(e) {
      let t = this.type.contentMatch.matchFragment(this.content, 0, e);
      if (!t) throw new Error("Called contentMatchAt on a node with invalid content");
      return t;
    }
    canReplace(e, t, n = s.empty, r = 0, a = n.childCount) {
      let i = this.contentMatchAt(e).matchFragment(n, r, a),
        o = i && i.matchFragment(this.content, t);
      if (!o || !o.validEnd) return !1;
      for (let e = r; e < a; e++) if (!this.type.allowsMarks(n.child(e).marks)) return !1;
      return !0;
    }
    canReplaceWith(e, t, n, r) {
      if (r && !this.type.allowsMarks(r)) return !1;
      let a = this.contentMatchAt(e).matchType(n),
        i = a && a.matchFragment(this.content, t);
      return !!i && i.validEnd;
    }
    canAppend(e) {
      return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
    }
    check() {
      this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
      let e = d.none;
      for (let t = 0; t < this.marks.length; t++) {
        let n = this.marks[t];
        n.type.checkAttrs(n.attrs), e = n.addToSet(e);
      }
      if (!d.sameSet(e, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(e => e.type.name)}`);
      this.content.forEach(e => e.check());
    }
    toJSON() {
      let e = {
        type: this.type.name
      };
      for (let t in this.attrs) {
        e.attrs = this.attrs;
        break;
      }
      return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map(e => e.toJSON())), e;
    }
    static fromJSON(e, t) {
      if (!t) throw new RangeError("Invalid input for Node.fromJSON");
      let n;
      if (t.marks) {
        if (!Array.isArray(t.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
        n = t.marks.map(e.markFromJSON);
      }
      if ("text" == t.type) {
        if ("string" != typeof t.text) throw new RangeError("Invalid text node in JSON");
        return e.text(t.text, n);
      }
      let r = s.fromJSON(e, t.content),
        a = e.nodeType(t.type).create(t.attrs, r, n);
      return a.type.checkAttrs(a.attrs), a;
    }
  }
  D.prototype.text = void 0;
  class I extends D {
    constructor(e, t, n, r) {
      if (super(e, t, null, r), !n) throw new RangeError("Empty text nodes are not allowed");
      this.text = n;
    }
    toString() {
      return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : P(this.marks, JSON.stringify(this.text));
    }
    get textContent() {
      return this.text;
    }
    textBetween(e, t) {
      return this.text.slice(e, t);
    }
    get nodeSize() {
      return this.text.length;
    }
    mark(e) {
      return e == this.marks ? this : new I(this.type, this.attrs, this.text, e);
    }
    withText(e) {
      return e == this.text ? this : new I(this.type, this.attrs, e, this.marks);
    }
    cut(e = 0, t = this.text.length) {
      return 0 == e && t == this.text.length ? this : this.withText(this.text.slice(e, t));
    }
    eq(e) {
      return this.sameMarkup(e) && this.text == e.text;
    }
    toJSON() {
      let e = super.toJSON();
      return e.text = this.text, e;
    }
  }
  function P(e, t) {
    for (let n = e.length - 1; n >= 0; n--) t = e[n].type.name + "(" + t + ")";
    return t;
  }
  class L {
    constructor(e) {
      this.validEnd = e, this.next = [], this.wrapCache = [];
    }
    static parse(e, t) {
      let n = new R(e, t);
      if (null == n.next) return L.empty;
      let r = B(n);
      n.next && n.err("Unexpected trailing text");
      let a = function (e) {
        let t = Object.create(null);
        return function n(r) {
          let a = [];
          r.forEach(t => {
            e[t].forEach(({
              term: t,
              to: n
            }) => {
              if (!t) return;
              let r;
              for (let e = 0; e < a.length; e++) a[e][0] == t && (r = a[e][1]);
              W(e, n).forEach(e => {
                r || a.push([t, r = []]), -1 == r.indexOf(e) && r.push(e);
              });
            });
          });
          let i = t[r.join(",")] = new L(r.indexOf(e.length - 1) > -1);
          for (let e = 0; e < a.length; e++) {
            let r = a[e][1].sort(H);
            i.next.push({
              type: a[e][0],
              next: t[r.join(",")] || n(r)
            });
          }
          return i;
        }(W(e, 0));
      }(function (e) {
        let t = [[]];
        return a(function e(t, i) {
          if ("choice" == t.type) return t.exprs.reduce((t, n) => t.concat(e(n, i)), []);
          if ("seq" != t.type) {
            if ("star" == t.type) {
              let o = n();
              return r(i, o), a(e(t.expr, o), o), [r(o)];
            }
            if ("plus" == t.type) {
              let o = n();
              return a(e(t.expr, i), o), a(e(t.expr, o), o), [r(o)];
            }
            if ("opt" == t.type) return [r(i)].concat(e(t.expr, i));
            if ("range" == t.type) {
              let o = i;
              for (let r = 0; r < t.min; r++) {
                let r = n();
                a(e(t.expr, o), r), o = r;
              }
              if (-1 == t.max) a(e(t.expr, o), o);else for (let i = t.min; i < t.max; i++) {
                let i = n();
                r(o, i), a(e(t.expr, o), i), o = i;
              }
              return [r(o)];
            }
            if ("name" == t.type) return [r(i, void 0, t.value)];
            throw new Error("Unknown expr type");
          }
          for (let r = 0;; r++) {
            let o = e(t.exprs[r], i);
            if (r == t.exprs.length - 1) return o;
            a(o, i = n());
          }
        }(e, 0), n()), t;
        function n() {
          return t.push([]) - 1;
        }
        function r(e, n, r) {
          let a = {
            term: r,
            to: n
          };
          return t[e].push(a), a;
        }
        function a(e, t) {
          e.forEach(e => e.to = t);
        }
      }(r));
      return function (e, t) {
        for (let n = 0, r = [e]; n < r.length; n++) {
          let e = r[n],
            a = !e.validEnd,
            i = [];
          for (let t = 0; t < e.next.length; t++) {
            let {
              type: n,
              next: o
            } = e.next[t];
            i.push(n.name), !a || n.isText || n.hasRequiredAttrs() || (a = !1), -1 == r.indexOf(o) && r.push(o);
          }
          a && t.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
        }
      }(a, n), a;
    }
    matchType(e) {
      for (let t = 0; t < this.next.length; t++) if (this.next[t].type == e) return this.next[t].next;
      return null;
    }
    matchFragment(e, t = 0, n = e.childCount) {
      let r = this;
      for (let a = t; r && a < n; a++) r = r.matchType(e.child(a).type);
      return r;
    }
    get inlineContent() {
      return 0 != this.next.length && this.next[0].type.isInline;
    }
    get defaultType() {
      for (let e = 0; e < this.next.length; e++) {
        let {
          type: t
        } = this.next[e];
        if (!t.isText && !t.hasRequiredAttrs()) return t;
      }
      return null;
    }
    compatible(e) {
      for (let t = 0; t < this.next.length; t++) for (let n = 0; n < e.next.length; n++) if (this.next[t].type == e.next[n].type) return !0;
      return !1;
    }
    fillBefore(e, t = !1, n = 0) {
      let r = [this];
      return function a(i, o) {
        let l = i.matchFragment(e, n);
        if (l && (!t || l.validEnd)) return s.from(o.map(e => e.createAndFill()));
        for (let e = 0; e < i.next.length; e++) {
          let {
            type: t,
            next: n
          } = i.next[e];
          if (!t.isText && !t.hasRequiredAttrs() && -1 == r.indexOf(n)) {
            r.push(n);
            let e = a(n, o.concat(t));
            if (e) return e;
          }
        }
        return null;
      }(this, []);
    }
    findWrapping(e) {
      for (let t = 0; t < this.wrapCache.length; t += 2) if (this.wrapCache[t] == e) return this.wrapCache[t + 1];
      let t = this.computeWrapping(e);
      return this.wrapCache.push(e, t), t;
    }
    computeWrapping(e) {
      let t = Object.create(null),
        n = [{
          match: this,
          type: null,
          via: null
        }];
      for (; n.length;) {
        let r = n.shift(),
          a = r.match;
        if (a.matchType(e)) {
          let e = [];
          for (let t = r; t.type; t = t.via) e.push(t.type);
          return e.reverse();
        }
        for (let e = 0; e < a.next.length; e++) {
          let {
            type: i,
            next: o
          } = a.next[e];
          i.isLeaf || i.hasRequiredAttrs() || i.name in t || r.type && !o.validEnd || (n.push({
            match: i.contentMatch,
            type: i,
            via: r
          }), t[i.name] = !0);
        }
      }
      return null;
    }
    get edgeCount() {
      return this.next.length;
    }
    edge(e) {
      if (e >= this.next.length) throw new RangeError(`There's no ${e}th edge in this content match`);
      return this.next[e];
    }
    toString() {
      let e = [];
      return function t(n) {
        e.push(n);
        for (let r = 0; r < n.next.length; r++) -1 == e.indexOf(n.next[r].next) && t(n.next[r].next);
      }(this), e.map((t, n) => {
        let r = n + (t.validEnd ? "*" : " ") + " ";
        for (let n = 0; n < t.next.length; n++) r += (n ? ", " : "") + t.next[n].type.name + "->" + e.indexOf(t.next[n].next);
        return r;
      }).join("\n");
    }
  }
  L.empty = new L(!0);
  class R {
    constructor(e, t) {
      this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(), "" == this.tokens[0] && this.tokens.shift();
    }
    get next() {
      return this.tokens[this.pos];
    }
    eat(e) {
      return this.next == e && (this.pos++ || !0);
    }
    err(e) {
      throw new SyntaxError(e + " (in content expression '" + this.string + "')");
    }
  }
  function B(e) {
    let t = [];
    do {
      t.push(N(e));
    } while (e.eat("|"));
    return 1 == t.length ? t[0] : {
      type: "choice",
      exprs: t
    };
  }
  function N(e) {
    let t = [];
    do {
      t.push(U(e));
    } while (e.next && ")" != e.next && "|" != e.next);
    return 1 == t.length ? t[0] : {
      type: "seq",
      exprs: t
    };
  }
  function U(e) {
    let t = function (e) {
      if (e.eat("(")) {
        let t = B(e);
        return e.eat(")") || e.err("Missing closing paren"), t;
      }
      if (!/\W/.test(e.next)) {
        let t = function (e, t) {
          let n = e.nodeTypes,
            r = n[t];
          if (r) return [r];
          let a = [];
          for (let e in n) {
            let r = n[e];
            r.isInGroup(t) && a.push(r);
          }
          return 0 == a.length && e.err("No node type or group '" + t + "' found"), a;
        }(e, e.next).map(t => (null == e.inline ? e.inline = t.isInline : e.inline != t.isInline && e.err("Mixing inline and block content"), {
          type: "name",
          value: t
        }));
        return e.pos++, 1 == t.length ? t[0] : {
          type: "choice",
          exprs: t
        };
      }
      e.err("Unexpected token '" + e.next + "'");
    }(e);
    for (;;) if (e.eat("+")) t = {
      type: "plus",
      expr: t
    };else if (e.eat("*")) t = {
      type: "star",
      expr: t
    };else if (e.eat("?")) t = {
      type: "opt",
      expr: t
    };else {
      if (!e.eat("{")) break;
      t = j(e, t);
    }
    return t;
  }
  function F(e) {
    /\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
    let t = Number(e.next);
    return e.pos++, t;
  }
  function j(e, t) {
    let n = F(e),
      r = n;
    return e.eat(",") && (r = "}" != e.next ? F(e) : -1), e.eat("}") || e.err("Unclosed braced range"), {
      type: "range",
      min: n,
      max: r,
      expr: t
    };
  }
  function H(e, t) {
    return t - e;
  }
  function W(e, t) {
    let n = [];
    return function t(r) {
      let a = e[r];
      if (1 == a.length && !a[0].term) return t(a[0].to);
      n.push(r);
      for (let e = 0; e < a.length; e++) {
        let {
          term: r,
          to: i
        } = a[e];
        r || -1 != n.indexOf(i) || t(i);
      }
    }(t), n.sort(H);
  }
  function K(e) {
    let t = Object.create(null);
    for (let n in e) {
      let r = e[n];
      if (!r.hasDefault) return null;
      t[n] = r.default;
    }
    return t;
  }
  function V(e, t) {
    let n = Object.create(null);
    for (let r in e) {
      let a = t && t[r];
      if (void 0 === a) {
        let t = e[r];
        if (!t.hasDefault) throw new RangeError("No value supplied for attribute " + r);
        a = t.default;
      }
      n[r] = a;
    }
    return n;
  }
  function z(e, t, n, r) {
    for (let r in t) if (!(r in e)) throw new RangeError(`Unsupported attribute ${r} for ${n} of type ${r}`);
    for (let n in e) {
      let r = e[n];
      r.validate && r.validate(t[n]);
    }
  }
  function Y(e, t) {
    let n = Object.create(null);
    if (t) for (let r in t) n[r] = new G(e, r, t[r]);
    return n;
  }
  class Q {
    constructor(e, t, n) {
      this.name = e, this.schema = t, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = Y(e, n.attrs), this.defaultAttrs = K(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || "text" == e), this.isText = "text" == e;
    }
    get isInline() {
      return !this.isBlock;
    }
    get isTextblock() {
      return this.isBlock && this.inlineContent;
    }
    get isLeaf() {
      return this.contentMatch == L.empty;
    }
    get isAtom() {
      return this.isLeaf || !!this.spec.atom;
    }
    isInGroup(e) {
      return this.groups.indexOf(e) > -1;
    }
    get whitespace() {
      return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
    }
    hasRequiredAttrs() {
      for (let e in this.attrs) if (this.attrs[e].isRequired) return !0;
      return !1;
    }
    compatibleContent(e) {
      return this == e || this.contentMatch.compatible(e.contentMatch);
    }
    computeAttrs(e) {
      return !e && this.defaultAttrs ? this.defaultAttrs : V(this.attrs, e);
    }
    create(e = null, t, n) {
      if (this.isText) throw new Error("NodeType.create can't construct text nodes");
      return new D(this, this.computeAttrs(e), s.from(t), d.setFrom(n));
    }
    createChecked(e = null, t, n) {
      return t = s.from(t), this.checkContent(t), new D(this, this.computeAttrs(e), t, d.setFrom(n));
    }
    createAndFill(e = null, t, n) {
      if (e = this.computeAttrs(e), (t = s.from(t)).size) {
        let e = this.contentMatch.fillBefore(t);
        if (!e) return null;
        t = e.append(t);
      }
      let r = this.contentMatch.matchFragment(t),
        a = r && r.fillBefore(s.empty, !0);
      return a ? new D(this, e, t.append(a), d.setFrom(n)) : null;
    }
    validContent(e) {
      let t = this.contentMatch.matchFragment(e);
      if (!t || !t.validEnd) return !1;
      for (let t = 0; t < e.childCount; t++) if (!this.allowsMarks(e.child(t).marks)) return !1;
      return !0;
    }
    checkContent(e) {
      if (!this.validContent(e)) throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
    }
    checkAttrs(e) {
      z(this.attrs, e, "node", this.name);
    }
    allowsMarkType(e) {
      return null == this.markSet || this.markSet.indexOf(e) > -1;
    }
    allowsMarks(e) {
      if (null == this.markSet) return !0;
      for (let t = 0; t < e.length; t++) if (!this.allowsMarkType(e[t].type)) return !1;
      return !0;
    }
    allowedMarks(e) {
      if (null == this.markSet) return e;
      let t;
      for (let n = 0; n < e.length; n++) this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : t || (t = e.slice(0, n));
      return t ? t.length ? t : d.none : e;
    }
    static compile(e, t) {
      let n = Object.create(null);
      e.forEach((e, r) => n[e] = new Q(e, t, r));
      let r = t.spec.topNode || "doc";
      if (!n[r]) throw new RangeError("Schema is missing its top node type ('" + r + "')");
      if (!n.text) throw new RangeError("Every schema needs a 'text' type");
      for (let e in n.text.attrs) throw new RangeError("The text node type should not have attributes");
      return n;
    }
  }
  class G {
    constructor(e, t, n) {
      this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = "string" == typeof n.validate ? function (e, t, n) {
        let r = n.split("|");
        return n => {
          let a = null === n ? "null" : typeof n;
          if (r.indexOf(a) < 0) throw new RangeError(`Expected value of type ${r} for attribute ${t} on type ${e}, got ${a}`);
        };
      }(e, t, n.validate) : n.validate;
    }
    get isRequired() {
      return !this.hasDefault;
    }
  }
  class $ {
    constructor(e, t, n, r) {
      this.name = e, this.rank = t, this.schema = n, this.spec = r, this.attrs = Y(e, r.attrs), this.excluded = null;
      let a = K(this.attrs);
      this.instance = a ? new d(this, a) : null;
    }
    create(e = null) {
      return !e && this.instance ? this.instance : new d(this, V(this.attrs, e));
    }
    static compile(e, t) {
      let n = Object.create(null),
        r = 0;
      return e.forEach((e, a) => n[e] = new $(e, r++, t, a)), n;
    }
    removeFromSet(e) {
      for (var t = 0; t < e.length; t++) e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
      return e;
    }
    isInSet(e) {
      for (let t = 0; t < e.length; t++) if (e[t].type == this) return e[t];
    }
    checkAttrs(e) {
      z(this.attrs, e, "mark", this.name);
    }
    excludes(e) {
      return this.excluded.indexOf(e) > -1;
    }
  }
  class q {
    constructor(e) {
      this.linebreakReplacement = null, this.cached = Object.create(null);
      let t = this.spec = {};
      for (let n in e) t[n] = e[n];
      t.nodes = a.from(e.nodes), t.marks = a.from(e.marks || {}), this.nodes = Q.compile(this.spec.nodes, this), this.marks = $.compile(this.spec.marks, this);
      let n = Object.create(null);
      for (let e in this.nodes) {
        if (e in this.marks) throw new RangeError(e + " can not be both a node and a mark");
        let t = this.nodes[e],
          r = t.spec.content || "",
          a = t.spec.marks;
        if (t.contentMatch = n[r] || (n[r] = L.parse(r, this.nodes)), t.inlineContent = t.contentMatch.inlineContent, t.spec.linebreakReplacement) {
          if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
          if (!t.isInline || !t.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
          this.linebreakReplacement = t;
        }
        t.markSet = "_" == a ? null : a ? Z(this, a.split(" ")) : "" != a && t.inlineContent ? null : [];
      }
      for (let e in this.marks) {
        let t = this.marks[e],
          n = t.spec.excludes;
        t.excluded = null == n ? [t] : "" == n ? [] : Z(this, n.split(" "));
      }
      this.nodeFromJSON = e => D.fromJSON(this, e), this.markFromJSON = e => d.fromJSON(this, e), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null);
    }
    node(e, t = null, n, r) {
      if ("string" == typeof e) e = this.nodeType(e);else {
        if (!(e instanceof Q)) throw new RangeError("Invalid node type: " + e);
        if (e.schema != this) throw new RangeError("Node type from different schema used (" + e.name + ")");
      }
      return e.createChecked(t, n, r);
    }
    text(e, t) {
      let n = this.nodes.text;
      return new I(n, n.defaultAttrs, e, d.setFrom(t));
    }
    mark(e, t) {
      return "string" == typeof e && (e = this.marks[e]), e.create(t);
    }
    nodeType(e) {
      let t = this.nodes[e];
      if (!t) throw new RangeError("Unknown node type: " + e);
      return t;
    }
  }
  function Z(e, t) {
    let n = [];
    for (let r = 0; r < t.length; r++) {
      let a = t[r],
        i = e.marks[a],
        o = i;
      if (i) n.push(i);else for (let t in e.marks) {
        let r = e.marks[t];
        ("_" == a || r.spec.group && r.spec.group.split(" ").indexOf(a) > -1) && n.push(o = r);
      }
      if (!o) throw new SyntaxError("Unknown mark type: '" + t[r] + "'");
    }
    return n;
  }
  class X {
    constructor(e, t) {
      this.schema = e, this.rules = t, this.tags = [], this.styles = [];
      let n = this.matchedStyles = [];
      t.forEach(e => {
        if (function (e) {
          return null != e.tag;
        }(e)) this.tags.push(e);else if (function (e) {
          return null != e.style;
        }(e)) {
          let t = /[^=]*/.exec(e.style)[0];
          n.indexOf(t) < 0 && n.push(t), this.styles.push(e);
        }
      }), this.normalizeLists = !this.tags.some(t => {
        if (!/^(ul|ol)\b/.test(t.tag) || !t.node) return !1;
        let n = e.nodes[t.node];
        return n.contentMatch.matchType(n);
      });
    }
    parse(e, t = {}) {
      let n = new ae(this, t, !1);
      return n.addAll(e, d.none, t.from, t.to), n.finish();
    }
    parseSlice(e, t = {}) {
      let n = new ae(this, t, !0);
      return n.addAll(e, d.none, t.from, t.to), f.maxOpen(n.finish());
    }
    matchTag(e, t, n) {
      for (let r = n ? this.tags.indexOf(n) + 1 : 0; r < this.tags.length; r++) {
        let n = this.tags[r];
        if (ie(e, n.tag) && (void 0 === n.namespace || e.namespaceURI == n.namespace) && (!n.context || t.matchesContext(n.context))) {
          if (n.getAttrs) {
            let t = n.getAttrs(e);
            if (!1 === t) continue;
            n.attrs = t || void 0;
          }
          return n;
        }
      }
    }
    matchStyle(e, t, n, r) {
      for (let a = r ? this.styles.indexOf(r) + 1 : 0; a < this.styles.length; a++) {
        let r = this.styles[a],
          i = r.style;
        if (!(0 != i.indexOf(e) || r.context && !n.matchesContext(r.context) || i.length > e.length && (61 != i.charCodeAt(e.length) || i.slice(e.length + 1) != t))) {
          if (r.getAttrs) {
            let e = r.getAttrs(t);
            if (!1 === e) continue;
            r.attrs = e || void 0;
          }
          return r;
        }
      }
    }
    static schemaRules(e) {
      let t = [];
      function n(e) {
        let n = null == e.priority ? 50 : e.priority,
          r = 0;
        for (; r < t.length; r++) {
          let e = t[r];
          if ((null == e.priority ? 50 : e.priority) < n) break;
        }
        t.splice(r, 0, e);
      }
      for (let t in e.marks) {
        let r = e.marks[t].spec.parseDOM;
        r && r.forEach(e => {
          n(e = oe(e)), e.mark || e.ignore || e.clearMark || (e.mark = t);
        });
      }
      for (let t in e.nodes) {
        let r = e.nodes[t].spec.parseDOM;
        r && r.forEach(e => {
          n(e = oe(e)), e.node || e.ignore || e.mark || (e.node = t);
        });
      }
      return t;
    }
    static fromSchema(e) {
      return e.cached.domParser || (e.cached.domParser = new X(e, X.schemaRules(e)));
    }
  }
  const J = {
      address: !0,
      article: !0,
      aside: !0,
      blockquote: !0,
      canvas: !0,
      dd: !0,
      div: !0,
      dl: !0,
      fieldset: !0,
      figcaption: !0,
      figure: !0,
      footer: !0,
      form: !0,
      h1: !0,
      h2: !0,
      h3: !0,
      h4: !0,
      h5: !0,
      h6: !0,
      header: !0,
      hgroup: !0,
      hr: !0,
      li: !0,
      noscript: !0,
      ol: !0,
      output: !0,
      p: !0,
      pre: !0,
      section: !0,
      table: !0,
      tfoot: !0,
      ul: !0
    },
    ee = {
      head: !0,
      noscript: !0,
      object: !0,
      script: !0,
      style: !0,
      title: !0
    },
    te = {
      ol: !0,
      ul: !0
    };
  function ne(e, t, n) {
    return null != t ? (t ? 1 : 0) | ("full" === t ? 2 : 0) : e && "pre" == e.whitespace ? 3 : -5 & n;
  }
  class re {
    constructor(e, t, n, r, a, i) {
      this.type = e, this.attrs = t, this.marks = n, this.solid = r, this.options = i, this.content = [], this.activeMarks = d.none, this.match = a || (4 & i ? null : e.contentMatch);
    }
    findWrapping(e) {
      if (!this.match) {
        if (!this.type) return [];
        let t = this.type.contentMatch.fillBefore(s.from(e));
        if (!t) {
          let t,
            n = this.type.contentMatch;
          return (t = n.findWrapping(e.type)) ? (this.match = n, t) : null;
        }
        this.match = this.type.contentMatch.matchFragment(t);
      }
      return this.match.findWrapping(e.type);
    }
    finish(e) {
      if (!(1 & this.options)) {
        let e,
          t = this.content[this.content.length - 1];
        if (t && t.isText && (e = /[ \t\r\n\u000c]+$/.exec(t.text))) {
          let n = t;
          t.text.length == e[0].length ? this.content.pop() : this.content[this.content.length - 1] = n.withText(n.text.slice(0, n.text.length - e[0].length));
        }
      }
      let t = s.from(this.content);
      return !e && this.match && (t = t.append(this.match.fillBefore(s.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
    }
    inlineContext(e) {
      return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !J.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
    }
  }
  class ae {
    constructor(e, t, n) {
      this.parser = e, this.options = t, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
      let r,
        a = t.topNode,
        i = ne(null, t.preserveWhitespace, 0) | (n ? 4 : 0);
      r = a ? new re(a.type, a.attrs, d.none, !0, t.topMatch || a.type.contentMatch, i) : new re(n ? null : e.schema.topNodeType, null, d.none, !0, null, i), this.nodes = [r], this.find = t.findPositions, this.needsBlock = !1;
    }
    get top() {
      return this.nodes[this.open];
    }
    addDOM(e, t) {
      3 == e.nodeType ? this.addTextNode(e, t) : 1 == e.nodeType && this.addElement(e, t);
    }
    addTextNode(e, t) {
      let n = e.nodeValue,
        r = this.top,
        a = 2 & r.options ? "full" : this.localPreserveWS || (1 & r.options) > 0;
      if ("full" === a || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(n)) {
        if (a) n = "full" !== a ? n.replace(/\r?\n|\r/g, " ") : n.replace(/\r\n?/g, "\n");else if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
          let t = r.content[r.content.length - 1],
            a = e.previousSibling;
          (!t || a && "BR" == a.nodeName || t.isText && /[ \t\r\n\u000c]$/.test(t.text)) && (n = n.slice(1));
        }
        n && this.insertNode(this.parser.schema.text(n), t, !/\S/.test(n)), this.findInText(e);
      } else this.findInside(e);
    }
    addElement(e, t, n) {
      let r = this.localPreserveWS,
        a = this.top;
      ("PRE" == e.tagName || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
      let i,
        o = e.nodeName.toLowerCase();
      te.hasOwnProperty(o) && this.parser.normalizeLists && function (e) {
        for (let t = e.firstChild, n = null; t; t = t.nextSibling) {
          let e = 1 == t.nodeType ? t.nodeName.toLowerCase() : null;
          e && te.hasOwnProperty(e) && n ? (n.appendChild(t), t = n) : "li" == e ? n = t : e && (n = null);
        }
      }(e);
      let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, n));
      e: if (s ? s.ignore : ee.hasOwnProperty(o)) this.findInside(e), this.ignoreFallback(e, t);else if (!s || s.skip || s.closeParent) {
        s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
        let n,
          r = this.needsBlock;
        if (J.hasOwnProperty(o)) a.content.length && a.content[0].isInline && this.open && (this.open--, a = this.top), n = !0, a.type || (this.needsBlock = !0);else if (!e.firstChild) {
          this.leafFallback(e, t);
          break e;
        }
        let i = s && s.skip ? t : this.readStyles(e, t);
        i && this.addAll(e, i), n && this.sync(a), this.needsBlock = r;
      } else {
        let n = this.readStyles(e, t);
        n && this.addElementByRule(e, s, n, !1 === s.consuming ? i : void 0);
      }
      this.localPreserveWS = r;
    }
    leafFallback(e, t) {
      "BR" == e.nodeName && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode("\n"), t);
    }
    ignoreFallback(e, t) {
      "BR" != e.nodeName || this.top.type && this.top.type.inlineContent || this.findPlace(this.parser.schema.text("-"), t, !0);
    }
    readStyles(e, t) {
      let n = e.style;
      if (n && n.length) for (let e = 0; e < this.parser.matchedStyles.length; e++) {
        let r = this.parser.matchedStyles[e],
          a = n.getPropertyValue(r);
        if (a) for (let e;;) {
          let n = this.parser.matchStyle(r, a, this, e);
          if (!n) break;
          if (n.ignore) return null;
          if (t = n.clearMark ? t.filter(e => !n.clearMark(e)) : t.concat(this.parser.schema.marks[n.mark].create(n.attrs)), !1 !== n.consuming) break;
          e = n;
        }
      }
      return t;
    }
    addElementByRule(e, t, n, r) {
      let a, i;
      if (t.node) {
        if (i = this.parser.schema.nodes[t.node], i.isLeaf) this.insertNode(i.create(t.attrs), n, "BR" == e.nodeName) || this.leafFallback(e, n);else {
          let e = this.enter(i, t.attrs || null, n, t.preserveWhitespace);
          e && (a = !0, n = e);
        }
      } else {
        let e = this.parser.schema.marks[t.mark];
        n = n.concat(e.create(t.attrs));
      }
      let o = this.top;
      if (i && i.isLeaf) this.findInside(e);else if (r) this.addElement(e, n, r);else if (t.getContent) this.findInside(e), t.getContent(e, this.parser.schema).forEach(e => this.insertNode(e, n, !1));else {
        let r = e;
        "string" == typeof t.contentElement ? r = e.querySelector(t.contentElement) : "function" == typeof t.contentElement ? r = t.contentElement(e) : t.contentElement && (r = t.contentElement), this.findAround(e, r, !0), this.addAll(r, n), this.findAround(e, r, !1);
      }
      a && this.sync(o) && this.open--;
    }
    addAll(e, t, n, r) {
      let a = n || 0;
      for (let i = n ? e.childNodes[n] : e.firstChild, o = null == r ? null : e.childNodes[r]; i != o; i = i.nextSibling, ++a) this.findAtPoint(e, a), this.addDOM(i, t);
      this.findAtPoint(e, a);
    }
    findPlace(e, t, n) {
      let r, a;
      for (let t = this.open, i = 0; t >= 0; t--) {
        let o = this.nodes[t],
          s = o.findWrapping(e);
        if (s && (!r || r.length > s.length + i) && (r = s, a = o, !s.length)) break;
        if (o.solid) {
          if (n) break;
          i += 2;
        }
      }
      if (!r) return null;
      this.sync(a);
      for (let e = 0; e < r.length; e++) t = this.enterInner(r[e], null, t, !1);
      return t;
    }
    insertNode(e, t, n) {
      if (e.isInline && this.needsBlock && !this.top.type) {
        let e = this.textblockFromContext();
        e && (t = this.enterInner(e, null, t));
      }
      let r = this.findPlace(e, t, n);
      if (r) {
        this.closeExtra();
        let t = this.top;
        t.match && (t.match = t.match.matchType(e.type));
        let n = d.none;
        for (let a of r.concat(e.marks)) (t.type ? t.type.allowsMarkType(a.type) : se(a.type, e.type)) && (n = a.addToSet(n));
        return t.content.push(e.mark(n)), !0;
      }
      return !1;
    }
    enter(e, t, n, r) {
      let a = this.findPlace(e.create(t), n, !1);
      return a && (a = this.enterInner(e, t, n, !0, r)), a;
    }
    enterInner(e, t, n, r = !1, a) {
      this.closeExtra();
      let i = this.top;
      i.match = i.match && i.match.matchType(e);
      let o = ne(e, a, i.options);
      4 & i.options && 0 == i.content.length && (o |= 4);
      let s = d.none;
      return n = n.filter(t => !(i.type ? i.type.allowsMarkType(t.type) : se(t.type, e)) || (s = t.addToSet(s), !1)), this.nodes.push(new re(e, t, s, r, null, o)), this.open++, n;
    }
    closeExtra(e = !1) {
      let t = this.nodes.length - 1;
      if (t > this.open) {
        for (; t > this.open; t--) this.nodes[t - 1].content.push(this.nodes[t].finish(e));
        this.nodes.length = this.open + 1;
      }
    }
    finish() {
      return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!(!this.isOpen && !this.options.topOpen));
    }
    sync(e) {
      for (let t = this.open; t >= 0; t--) {
        if (this.nodes[t] == e) return this.open = t, !0;
        this.localPreserveWS && (this.nodes[t].options |= 1);
      }
      return !1;
    }
    get currentPos() {
      this.closeExtra();
      let e = 0;
      for (let t = this.open; t >= 0; t--) {
        let n = this.nodes[t].content;
        for (let t = n.length - 1; t >= 0; t--) e += n[t].nodeSize;
        t && e++;
      }
      return e;
    }
    findAtPoint(e, t) {
      if (this.find) for (let n = 0; n < this.find.length; n++) this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos);
    }
    findInside(e) {
      if (this.find) for (let t = 0; t < this.find.length; t++) null == this.find[t].pos && 1 == e.nodeType && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
    }
    findAround(e, t, n) {
      if (e != t && this.find) for (let r = 0; r < this.find.length; r++) null == this.find[r].pos && 1 == e.nodeType && e.contains(this.find[r].node) && t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) && (this.find[r].pos = this.currentPos);
    }
    findInText(e) {
      if (this.find) for (let t = 0; t < this.find.length; t++) this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
    }
    matchesContext(e) {
      if (e.indexOf("|") > -1) return e.split(/\s*\|\s*/).some(this.matchesContext, this);
      let t = e.split("/"),
        n = this.options.context,
        r = !(this.isOpen || n && n.parent.type != this.nodes[0].type),
        a = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
        i = (e, o) => {
          for (; e >= 0; e--) {
            let s = t[e];
            if ("" == s) {
              if (e == t.length - 1 || 0 == e) continue;
              for (; o >= a; o--) if (i(e - 1, o)) return !0;
              return !1;
            }
            {
              let e = o > 0 || 0 == o && r ? this.nodes[o].type : n && o >= a ? n.node(o - a).type : null;
              if (!e || e.name != s && !e.isInGroup(s)) return !1;
              o--;
            }
          }
          return !0;
        };
      return i(t.length - 1, this.open);
    }
    textblockFromContext() {
      let e = this.options.context;
      if (e) for (let t = e.depth; t >= 0; t--) {
        let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (n && n.isTextblock && n.defaultAttrs) return n;
      }
      for (let e in this.parser.schema.nodes) {
        let t = this.parser.schema.nodes[e];
        if (t.isTextblock && t.defaultAttrs) return t;
      }
    }
  }
  function ie(e, t) {
    return (e.matches || e.msMatchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector).call(e, t);
  }
  function oe(e) {
    let t = {};
    for (let n in e) t[n] = e[n];
    return t;
  }
  function se(e, t) {
    let n = t.schema.nodes;
    for (let r in n) {
      let a = n[r];
      if (!a.allowsMarkType(e)) continue;
      let i = [],
        o = e => {
          i.push(e);
          for (let n = 0; n < e.edgeCount; n++) {
            let {
              type: r,
              next: a
            } = e.edge(n);
            if (r == t) return !0;
            if (i.indexOf(a) < 0 && o(a)) return !0;
          }
        };
      if (o(a.contentMatch)) return !0;
    }
  }
  class le {
    constructor(e, t) {
      this.nodes = e, this.marks = t;
    }
    serializeFragment(e, t = {}, n) {
      n || (n = ue(t).createDocumentFragment());
      let r = n,
        a = [];
      return e.forEach(e => {
        if (a.length || e.marks.length) {
          let n = 0,
            i = 0;
          for (; n < a.length && i < e.marks.length;) {
            let t = e.marks[i];
            if (this.marks[t.type.name]) {
              if (!t.eq(a[n][0]) || !1 === t.type.spec.spanning) break;
              n++, i++;
            } else i++;
          }
          for (; n < a.length;) r = a.pop()[1];
          for (; i < e.marks.length;) {
            let n = e.marks[i++],
              o = this.serializeMark(n, e.isInline, t);
            o && (a.push([n, r]), r.appendChild(o.dom), r = o.contentDOM || o.dom);
          }
        }
        r.appendChild(this.serializeNodeInner(e, t));
      }), n;
    }
    serializeNodeInner(e, t) {
      let {
        dom: n,
        contentDOM: r
      } = pe(ue(t), this.nodes[e.type.name](e), null, e.attrs);
      if (r) {
        if (e.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
        this.serializeFragment(e.content, t, r);
      }
      return n;
    }
    serializeNode(e, t = {}) {
      let n = this.serializeNodeInner(e, t);
      for (let r = e.marks.length - 1; r >= 0; r--) {
        let a = this.serializeMark(e.marks[r], e.isInline, t);
        a && ((a.contentDOM || a.dom).appendChild(n), n = a.dom);
      }
      return n;
    }
    serializeMark(e, t, n = {}) {
      let r = this.marks[e.type.name];
      return r && pe(ue(n), r(e, t), null, e.attrs);
    }
    static renderSpec(e, t, n = null, r) {
      return pe(e, t, n, r);
    }
    static fromSchema(e) {
      return e.cached.domSerializer || (e.cached.domSerializer = new le(this.nodesFromSchema(e), this.marksFromSchema(e)));
    }
    static nodesFromSchema(e) {
      let t = ce(e.nodes);
      return t.text || (t.text = e => e.text), t;
    }
    static marksFromSchema(e) {
      return ce(e.marks);
    }
  }
  function ce(e) {
    let t = {};
    for (let n in e) {
      let r = e[n].spec.toDOM;
      r && (t[n] = r);
    }
    return t;
  }
  function ue(e) {
    return e.document || window.document;
  }
  const de = new WeakMap();
  function pe(e, t, n, r) {
    if ("string" == typeof t) return {
      dom: e.createTextNode(t)
    };
    if (null != t.nodeType) return {
      dom: t
    };
    if (t.dom && null != t.dom.nodeType) return t;
    let a,
      i = t[0];
    if ("string" != typeof i) throw new RangeError("Invalid array passed to renderSpec");
    if (r && (a = function (e) {
      let t = de.get(e);
      return void 0 === t && de.set(e, t = function (e) {
        let t = null;
        return function e(n) {
          if (n && "object" == typeof n) if (Array.isArray(n)) {
            if ("string" == typeof n[0]) t || (t = []), t.push(n);else for (let t = 0; t < n.length; t++) e(n[t]);
          } else for (let t in n) e(n[t]);
        }(e), t;
      }(e)), t;
    }(r)) && a.indexOf(t) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
    let o,
      s = i.indexOf(" ");
    s > 0 && (n = i.slice(0, s), i = i.slice(s + 1));
    let l = n ? e.createElementNS(n, i) : e.createElement(i),
      c = t[1],
      u = 1;
    if (c && "object" == typeof c && null == c.nodeType && !Array.isArray(c)) {
      u = 2;
      for (let e in c) if (null != c[e]) {
        let t = e.indexOf(" ");
        t > 0 ? l.setAttributeNS(e.slice(0, t), e.slice(t + 1), c[e]) : "style" == e && l.style ? l.style.cssText = c[e] : l.setAttribute(e, c[e]);
      }
    }
    for (let a = u; a < t.length; a++) {
      let i = t[a];
      if (0 === i) {
        if (a < t.length - 1 || a > u) throw new RangeError("Content hole must be the only child of its parent node");
        return {
          dom: l,
          contentDOM: l
        };
      }
      {
        let {
          dom: t,
          contentDOM: a
        } = pe(e, i, n, r);
        if (l.appendChild(t), a) {
          if (o) throw new RangeError("Multiple content holes");
          o = a;
        }
      }
    }
    return {
      dom: l,
      contentDOM: o
    };
  }
});
