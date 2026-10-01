// Reconstructed Webpack factory 38262; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    $L: () => P,
    Ln: () => g,
    N0: () => D,
    Um: () => I,
    Wg: () => y,
    X9: () => c,
    dL: () => Q,
    jP: () => w,
    n9: () => k,
    oM: () => C,
    zy: () => T
  });
  var r = n(58903);
  const a = Math.pow(2, 16);
  function i(e, t) {
    return e + t * a;
  }
  function o(e) {
    return 65535 & e;
  }
  class s {
    constructor(e, t, n) {
      this.pos = e, this.delInfo = t, this.recover = n;
    }
    get deleted() {
      return (8 & this.delInfo) > 0;
    }
    get deletedBefore() {
      return (5 & this.delInfo) > 0;
    }
    get deletedAfter() {
      return (6 & this.delInfo) > 0;
    }
    get deletedAcross() {
      return (4 & this.delInfo) > 0;
    }
  }
  class l {
    constructor(e, t = !1) {
      if (this.ranges = e, this.inverted = t, !e.length && l.empty) return l.empty;
    }
    recover(e) {
      let t = 0,
        n = o(e);
      if (!this.inverted) for (let e = 0; e < n; e++) t += this.ranges[3 * e + 2] - this.ranges[3 * e + 1];
      return this.ranges[3 * n] + t + function (e) {
        return (e - (65535 & e)) / a;
      }(e);
    }
    mapResult(e, t = 1) {
      return this._map(e, t, !1);
    }
    map(e, t = 1) {
      return this._map(e, t, !0);
    }
    _map(e, t, n) {
      let r = 0,
        a = this.inverted ? 2 : 1,
        o = this.inverted ? 1 : 2;
      for (let l = 0; l < this.ranges.length; l += 3) {
        let c = this.ranges[l] - (this.inverted ? r : 0);
        if (c > e) break;
        let u = this.ranges[l + a],
          d = this.ranges[l + o],
          p = c + u;
        if (e <= p) {
          let a = c + r + ((u ? e == c ? -1 : e == p ? 1 : t : t) < 0 ? 0 : d);
          if (n) return a;
          let o = e == (t < 0 ? c : p) ? null : i(l / 3, e - c),
            f = e == c ? 2 : e == p ? 1 : 4;
          return (t < 0 ? e != c : e != p) && (f |= 8), new s(a, f, o);
        }
        r += d - u;
      }
      return n ? e + r : new s(e + r, 0, null);
    }
    touches(e, t) {
      let n = 0,
        r = o(t),
        a = this.inverted ? 2 : 1,
        i = this.inverted ? 1 : 2;
      for (let t = 0; t < this.ranges.length; t += 3) {
        let o = this.ranges[t] - (this.inverted ? n : 0);
        if (o > e) break;
        let s = this.ranges[t + a];
        if (e <= o + s && t == 3 * r) return !0;
        n += this.ranges[t + i] - s;
      }
      return !1;
    }
    forEach(e) {
      let t = this.inverted ? 2 : 1,
        n = this.inverted ? 1 : 2;
      for (let r = 0, a = 0; r < this.ranges.length; r += 3) {
        let i = this.ranges[r],
          o = i - (this.inverted ? a : 0),
          s = i + (this.inverted ? 0 : a),
          l = this.ranges[r + t],
          c = this.ranges[r + n];
        e(o, o + l, s, s + c), a += c - l;
      }
    }
    invert() {
      return new l(this.ranges, !this.inverted);
    }
    toString() {
      return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
    }
    static offset(e) {
      return 0 == e ? l.empty : new l(e < 0 ? [0, -e, 0] : [0, 0, e]);
    }
  }
  l.empty = new l([]);
  class c {
    constructor(e, t, n = 0, r = e ? e.length : 0) {
      this.mirror = t, this.from = n, this.to = r, this._maps = e || [], this.ownData = !(e || t);
    }
    get maps() {
      return this._maps;
    }
    slice(e = 0, t = this.maps.length) {
      return new c(this._maps, this.mirror, e, t);
    }
    appendMap(e, t) {
      this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), null != t && this.setMirror(this._maps.length - 1, t);
    }
    appendMapping(e) {
      for (let t = 0, n = this._maps.length; t < e._maps.length; t++) {
        let r = e.getMirror(t);
        this.appendMap(e._maps[t], null != r && r < t ? n + r : void 0);
      }
    }
    getMirror(e) {
      if (this.mirror) for (let t = 0; t < this.mirror.length; t++) if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)];
    }
    setMirror(e, t) {
      this.mirror || (this.mirror = []), this.mirror.push(e, t);
    }
    appendMappingInverted(e) {
      for (let t = e.maps.length - 1, n = this._maps.length + e._maps.length; t >= 0; t--) {
        let r = e.getMirror(t);
        this.appendMap(e._maps[t].invert(), null != r && r > t ? n - r - 1 : void 0);
      }
    }
    invert() {
      let e = new c();
      return e.appendMappingInverted(this), e;
    }
    map(e, t = 1) {
      if (this.mirror) return this._map(e, t, !0);
      for (let n = this.from; n < this.to; n++) e = this._maps[n].map(e, t);
      return e;
    }
    mapResult(e, t = 1) {
      return this._map(e, t, !1);
    }
    _map(e, t, n) {
      let r = 0;
      for (let n = this.from; n < this.to; n++) {
        let a = this._maps[n].mapResult(e, t);
        if (null != a.recover) {
          let t = this.getMirror(n);
          if (null != t && t > n && t < this.to) {
            n = t, e = this._maps[t].recover(a.recover);
            continue;
          }
        }
        r |= a.delInfo, e = a.pos;
      }
      return n ? e : new s(e, r, null);
    }
  }
  const u = Object.create(null);
  class d {
    getMap() {
      return l.empty;
    }
    merge(e) {
      return null;
    }
    static fromJSON(e, t) {
      if (!t || !t.stepType) throw new RangeError("Invalid input for Step.fromJSON");
      let n = u[t.stepType];
      if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
      return n.fromJSON(e, t);
    }
    static jsonID(e, t) {
      if (e in u) throw new RangeError("Duplicate use of step JSON ID " + e);
      return u[e] = t, t.prototype.jsonID = e, t;
    }
  }
  class p {
    constructor(e, t) {
      this.doc = e, this.failed = t;
    }
    static ok(e) {
      return new p(e, null);
    }
    static fail(e) {
      return new p(null, e);
    }
    static fromReplace(e, t, n, a) {
      try {
        return p.ok(e.replace(t, n, a));
      } catch (e) {
        if (e instanceof r.vI) return p.fail(e.message);
        throw e;
      }
    }
  }
  function f(e, t, n) {
    let a = [];
    for (let r = 0; r < e.childCount; r++) {
      let i = e.child(r);
      i.content.size && (i = i.copy(f(i.content, t, i))), i.isInline && (i = t(i, n, r)), a.push(i);
    }
    return r.FK.fromArray(a);
  }
  class h extends d {
    constructor(e, t, n) {
      super(), this.from = e, this.to = t, this.mark = n;
    }
    apply(e) {
      let t = e.slice(this.from, this.to),
        n = e.resolve(this.from),
        a = n.node(n.sharedDepth(this.to)),
        i = new r.Ji(f(t.content, (e, t) => e.isAtom && t.type.allowsMarkType(this.mark.type) ? e.mark(this.mark.addToSet(e.marks)) : e, a), t.openStart, t.openEnd);
      return p.fromReplace(e, this.from, this.to, i);
    }
    invert() {
      return new _(this.from, this.to, this.mark);
    }
    map(e) {
      let t = e.mapResult(this.from, 1),
        n = e.mapResult(this.to, -1);
      return t.deleted && n.deleted || t.pos >= n.pos ? null : new h(t.pos, n.pos, this.mark);
    }
    merge(e) {
      return e instanceof h && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new h(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
    }
    toJSON() {
      return {
        stepType: "addMark",
        mark: this.mark.toJSON(),
        from: this.from,
        to: this.to
      };
    }
    static fromJSON(e, t) {
      if ("number" != typeof t.from || "number" != typeof t.to) throw new RangeError("Invalid input for AddMarkStep.fromJSON");
      return new h(t.from, t.to, e.markFromJSON(t.mark));
    }
  }
  d.jsonID("addMark", h);
  class _ extends d {
    constructor(e, t, n) {
      super(), this.from = e, this.to = t, this.mark = n;
    }
    apply(e) {
      let t = e.slice(this.from, this.to),
        n = new r.Ji(f(t.content, e => e.mark(this.mark.removeFromSet(e.marks)), e), t.openStart, t.openEnd);
      return p.fromReplace(e, this.from, this.to, n);
    }
    invert() {
      return new h(this.from, this.to, this.mark);
    }
    map(e) {
      let t = e.mapResult(this.from, 1),
        n = e.mapResult(this.to, -1);
      return t.deleted && n.deleted || t.pos >= n.pos ? null : new _(t.pos, n.pos, this.mark);
    }
    merge(e) {
      return e instanceof _ && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new _(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
    }
    toJSON() {
      return {
        stepType: "removeMark",
        mark: this.mark.toJSON(),
        from: this.from,
        to: this.to
      };
    }
    static fromJSON(e, t) {
      if ("number" != typeof t.from || "number" != typeof t.to) throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
      return new _(t.from, t.to, e.markFromJSON(t.mark));
    }
  }
  d.jsonID("removeMark", _);
  class m extends d {
    constructor(e, t) {
      super(), this.pos = e, this.mark = t;
    }
    apply(e) {
      let t = e.nodeAt(this.pos);
      if (!t) return p.fail("No node at mark step's position");
      let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
      return p.fromReplace(e, this.pos, this.pos + 1, new r.Ji(r.FK.from(n), 0, t.isLeaf ? 0 : 1));
    }
    invert(e) {
      let t = e.nodeAt(this.pos);
      if (t) {
        let e = this.mark.addToSet(t.marks);
        if (e.length == t.marks.length) {
          for (let n = 0; n < t.marks.length; n++) if (!t.marks[n].isInSet(e)) return new m(this.pos, t.marks[n]);
          return new m(this.pos, this.mark);
        }
      }
      return new A(this.pos, this.mark);
    }
    map(e) {
      let t = e.mapResult(this.pos, 1);
      return t.deletedAfter ? null : new m(t.pos, this.mark);
    }
    toJSON() {
      return {
        stepType: "addNodeMark",
        pos: this.pos,
        mark: this.mark.toJSON()
      };
    }
    static fromJSON(e, t) {
      if ("number" != typeof t.pos) throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
      return new m(t.pos, e.markFromJSON(t.mark));
    }
  }
  d.jsonID("addNodeMark", m);
  class A extends d {
    constructor(e, t) {
      super(), this.pos = e, this.mark = t;
    }
    apply(e) {
      let t = e.nodeAt(this.pos);
      if (!t) return p.fail("No node at mark step's position");
      let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
      return p.fromReplace(e, this.pos, this.pos + 1, new r.Ji(r.FK.from(n), 0, t.isLeaf ? 0 : 1));
    }
    invert(e) {
      let t = e.nodeAt(this.pos);
      return t && this.mark.isInSet(t.marks) ? new m(this.pos, this.mark) : this;
    }
    map(e) {
      let t = e.mapResult(this.pos, 1);
      return t.deletedAfter ? null : new A(t.pos, this.mark);
    }
    toJSON() {
      return {
        stepType: "removeNodeMark",
        pos: this.pos,
        mark: this.mark.toJSON()
      };
    }
    static fromJSON(e, t) {
      if ("number" != typeof t.pos) throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
      return new A(t.pos, e.markFromJSON(t.mark));
    }
  }
  d.jsonID("removeNodeMark", A);
  class g extends d {
    constructor(e, t, n, r = !1) {
      super(), this.from = e, this.to = t, this.slice = n, this.structure = r;
    }
    apply(e) {
      return this.structure && v(e, this.from, this.to) ? p.fail("Structure replace would overwrite content") : p.fromReplace(e, this.from, this.to, this.slice);
    }
    getMap() {
      return new l([this.from, this.to - this.from, this.slice.size]);
    }
    invert(e) {
      return new g(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
    }
    map(e) {
      let t = e.mapResult(this.from, 1),
        n = e.mapResult(this.to, -1);
      return t.deletedAcross && n.deletedAcross ? null : new g(t.pos, Math.max(t.pos, n.pos), this.slice, this.structure);
    }
    merge(e) {
      if (!(e instanceof g) || e.structure || this.structure) return null;
      if (this.from + this.slice.size != e.from || this.slice.openEnd || e.slice.openStart) {
        if (e.to != this.from || this.slice.openStart || e.slice.openEnd) return null;
        {
          let t = this.slice.size + e.slice.size == 0 ? r.Ji.empty : new r.Ji(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
          return new g(e.from, this.to, t, this.structure);
        }
      }
      {
        let t = this.slice.size + e.slice.size == 0 ? r.Ji.empty : new r.Ji(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
        return new g(this.from, this.to + (e.to - e.from), t, this.structure);
      }
    }
    toJSON() {
      let e = {
        stepType: "replace",
        from: this.from,
        to: this.to
      };
      return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
    }
    static fromJSON(e, t) {
      if ("number" != typeof t.from || "number" != typeof t.to) throw new RangeError("Invalid input for ReplaceStep.fromJSON");
      return new g(t.from, t.to, r.Ji.fromJSON(e, t.slice), !!t.structure);
    }
  }
  d.jsonID("replace", g);
  class y extends d {
    constructor(e, t, n, r, a, i, o = !1) {
      super(), this.from = e, this.to = t, this.gapFrom = n, this.gapTo = r, this.slice = a, this.insert = i, this.structure = o;
    }
    apply(e) {
      if (this.structure && (v(e, this.from, this.gapFrom) || v(e, this.gapTo, this.to))) return p.fail("Structure gap-replace would overwrite content");
      let t = e.slice(this.gapFrom, this.gapTo);
      if (t.openStart || t.openEnd) return p.fail("Gap is not a flat range");
      let n = this.slice.insertAt(this.insert, t.content);
      return n ? p.fromReplace(e, this.from, this.to, n) : p.fail("Content does not fit in gap");
    }
    getMap() {
      return new l([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]);
    }
    invert(e) {
      let t = this.gapTo - this.gapFrom;
      return new y(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
    }
    map(e) {
      let t = e.mapResult(this.from, 1),
        n = e.mapResult(this.to, -1),
        r = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1),
        a = this.to == this.gapTo ? n.pos : e.map(this.gapTo, 1);
      return t.deletedAcross && n.deletedAcross || r < t.pos || a > n.pos ? null : new y(t.pos, n.pos, r, a, this.slice, this.insert, this.structure);
    }
    toJSON() {
      let e = {
        stepType: "replaceAround",
        from: this.from,
        to: this.to,
        gapFrom: this.gapFrom,
        gapTo: this.gapTo,
        insert: this.insert
      };
      return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
    }
    static fromJSON(e, t) {
      if ("number" != typeof t.from || "number" != typeof t.to || "number" != typeof t.gapFrom || "number" != typeof t.gapTo || "number" != typeof t.insert) throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
      return new y(t.from, t.to, t.gapFrom, t.gapTo, r.Ji.fromJSON(e, t.slice), t.insert, !!t.structure);
    }
  }
  function v(e, t, n) {
    let r = e.resolve(t),
      a = n - t,
      i = r.depth;
    for (; a > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount;) i--, a--;
    if (a > 0) {
      let e = r.node(i).maybeChild(r.indexAfter(i));
      for (; a > 0;) {
        if (!e || e.isLeaf) return !0;
        e = e.firstChild, a--;
      }
    }
    return !1;
  }
  function E(e, t, n, a = n.contentMatch, i = !0) {
    let o = e.doc.nodeAt(t),
      s = [],
      l = t + 1;
    for (let t = 0; t < o.childCount; t++) {
      let c = o.child(t),
        u = l + c.nodeSize,
        d = a.matchType(c.type);
      if (d) {
        a = d;
        for (let t = 0; t < c.marks.length; t++) n.allowsMarkType(c.marks[t].type) || e.step(new _(l, u, c.marks[t]));
        if (i && c.isText && "pre" != n.whitespace) {
          let e,
            t,
            a = /\r?\n|\r/g;
          for (; e = a.exec(c.text);) t || (t = new r.Ji(r.FK.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), s.push(new g(l + e.index, l + e.index + e[0].length, t));
        }
      } else s.push(new g(l, u, r.Ji.empty));
      l = u;
    }
    if (!a.validEnd) {
      let t = a.fillBefore(r.FK.empty, !0);
      e.replace(l, l, new r.Ji(t, 0, 0));
    }
    for (let t = s.length - 1; t >= 0; t--) e.step(s[t]);
  }
  function b(e, t, n) {
    return (0 == t || e.canReplace(t, e.childCount)) && (n == e.childCount || e.canReplace(0, n));
  }
  function w(e) {
    let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
    for (let n = e.depth;; --n) {
      let r = e.$from.node(n),
        a = e.$from.index(n),
        i = e.$to.indexAfter(n);
      if (n < e.depth && r.canReplace(a, i, t)) return n;
      if (0 == n || r.type.spec.isolating || !b(r, a, i)) break;
    }
    return null;
  }
  function C(e, t, n = null, r = e) {
    let a = function (e, t) {
        let {
            parent: n,
            startIndex: r,
            endIndex: a
          } = e,
          i = n.contentMatchAt(r).findWrapping(t);
        if (!i) return null;
        let o = i.length ? i[0] : t;
        return n.canReplaceWith(r, a, o) ? i : null;
      }(e, t),
      i = a && function (e, t) {
        let {
            parent: n,
            startIndex: r,
            endIndex: a
          } = e,
          i = n.child(r),
          o = t.contentMatch.findWrapping(i.type);
        if (!o) return null;
        let s = (o.length ? o[o.length - 1] : t).contentMatch;
        for (let e = r; s && e < a; e++) s = s.matchType(n.child(e).type);
        return s && s.validEnd ? o : null;
      }(r, t);
    return i ? a.map(O).concat({
      type: t,
      attrs: n
    }).concat(i.map(O)) : null;
  }
  function O(e) {
    return {
      type: e,
      attrs: null
    };
  }
  function M(e, t, n, r) {
    t.forEach((a, i) => {
      if (a.isText) {
        let o,
          s = /\r?\n|\r/g;
        for (; o = s.exec(a.text);) {
          let a = e.mapping.slice(r).map(n + 1 + i + o.index);
          e.replaceWith(a, a + 1, t.type.schema.linebreakReplacement.create());
        }
      }
    });
  }
  function S(e, t, n, r) {
    t.forEach((a, i) => {
      if (a.type == a.type.schema.linebreakReplacement) {
        let a = e.mapping.slice(r).map(n + 1 + i);
        e.replaceWith(a, a + 1, t.type.schema.text("\n"));
      }
    });
  }
  function T(e, t, n = 1, r) {
    let a = e.resolve(t),
      i = a.depth - n,
      o = r && r[r.length - 1] || a.parent;
    if (i < 0 || a.parent.type.spec.isolating || !a.parent.canReplace(a.index(), a.parent.childCount) || !o.type.validContent(a.parent.content.cutByIndex(a.index(), a.parent.childCount))) return !1;
    for (let e = a.depth - 1, t = n - 2; e > i; e--, t--) {
      let n = a.node(e),
        i = a.index(e);
      if (n.type.spec.isolating) return !1;
      let o = n.content.cutByIndex(i, n.childCount),
        s = r && r[t + 1];
      s && (o = o.replaceChild(0, s.type.create(s.attrs)));
      let l = r && r[t] || n;
      if (!n.canReplace(i + 1, n.childCount) || !l.type.validContent(o)) return !1;
    }
    let s = a.indexAfter(i),
      l = r && r[0];
    return a.node(i).canReplaceWith(s, s, l ? l.type : a.node(i + 1).type);
  }
  function k(e, t) {
    let n = e.resolve(t),
      r = n.index();
    return x(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
  }
  function x(e, t) {
    return !(!e || !t || e.isLeaf || !function (e, t) {
      t.content.size || e.type.compatibleContent(t.type);
      let n = e.contentMatchAt(e.childCount),
        {
          linebreakReplacement: r
        } = e.type.schema;
      for (let a = 0; a < t.childCount; a++) {
        let i = t.child(a),
          o = i.type == r ? e.type.schema.nodes.text : i.type;
        if (n = n.matchType(o), !n) return !1;
        if (!e.type.allowsMarks(i.marks)) return !1;
      }
      return n.validEnd;
    }(e, t));
  }
  function D(e, t, n = -1) {
    let r = e.resolve(t);
    for (let e = r.depth;; e--) {
      let a,
        i,
        o = r.index(e);
      if (e == r.depth ? (a = r.nodeBefore, i = r.nodeAfter) : n > 0 ? (a = r.node(e + 1), o++, i = r.node(e).maybeChild(o)) : (a = r.node(e).maybeChild(o - 1), i = r.node(e + 1)), a && !a.isTextblock && x(a, i) && r.node(e).canReplace(o, o + 1)) return t;
      if (0 == e) break;
      t = n < 0 ? r.before(e) : r.after(e);
    }
  }
  function I(e, t, n) {
    let r = e.resolve(t);
    if (!n.content.size) return t;
    let a = n.content;
    for (let e = 0; e < n.openStart; e++) a = a.firstChild.content;
    for (let e = 1; e <= (0 == n.openStart && n.size ? 2 : 1); e++) for (let t = r.depth; t >= 0; t--) {
      let n = t == r.depth ? 0 : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2 ? -1 : 1,
        i = r.index(t) + (n > 0 ? 1 : 0),
        o = r.node(t),
        s = !1;
      if (1 == e) s = o.canReplace(i, i, a);else {
        let e = o.contentMatchAt(i).findWrapping(a.firstChild.type);
        s = e && o.canReplaceWith(i, i, e[0]);
      }
      if (s) return 0 == n ? r.pos : n < 0 ? r.before(t + 1) : r.after(t + 1);
    }
    return null;
  }
  function P(e, t, n = t, a = r.Ji.empty) {
    if (t == n && !a.size) return null;
    let i = e.resolve(t),
      o = e.resolve(n);
    return L(i, o, a) ? new g(t, n, a) : new R(i, o, a).fit();
  }
  function L(e, t, n) {
    return !n.openStart && !n.openEnd && e.start() == t.start() && e.parent.canReplace(e.index(), t.index(), n.content);
  }
  d.jsonID("replaceAround", y);
  class R {
    constructor(e, t, n) {
      this.$from = e, this.$to = t, this.unplaced = n, this.frontier = [], this.placed = r.FK.empty;
      for (let t = 0; t <= e.depth; t++) {
        let n = e.node(t);
        this.frontier.push({
          type: n.type,
          match: n.contentMatchAt(e.indexAfter(t))
        });
      }
      for (let t = e.depth; t > 0; t--) this.placed = r.FK.from(e.node(t).copy(this.placed));
    }
    get depth() {
      return this.frontier.length - 1;
    }
    fit() {
      for (; this.unplaced.size;) {
        let e = this.findFittable();
        e ? this.placeNodes(e) : this.openMore() || this.dropNode();
      }
      let e = this.mustMoveInline(),
        t = this.placed.size - this.depth - this.$from.depth,
        n = this.$from,
        a = this.close(e < 0 ? this.$to : n.doc.resolve(e));
      if (!a) return null;
      let i = this.placed,
        o = n.depth,
        s = a.depth;
      for (; o && s && 1 == i.childCount;) i = i.firstChild.content, o--, s--;
      let l = new r.Ji(i, o, s);
      return e > -1 ? new y(n.pos, e, this.$to.pos, this.$to.end(), l, t) : l.size || n.pos != this.$to.pos ? new g(n.pos, a.pos, l) : null;
    }
    findFittable() {
      let e = this.unplaced.openStart;
      for (let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd; n < e; n++) {
        let a = t.firstChild;
        if (t.childCount > 1 && (r = 0), a.type.spec.isolating && r <= n) {
          e = n;
          break;
        }
        t = a.content;
      }
      for (let t = 1; t <= 2; t++) for (let n = 1 == t ? e : this.unplaced.openStart; n >= 0; n--) {
        let e,
          a = null;
        n ? (a = U(this.unplaced.content, n - 1).firstChild, e = a.content) : e = this.unplaced.content;
        let i = e.firstChild;
        for (let e = this.depth; e >= 0; e--) {
          let o,
            {
              type: s,
              match: l
            } = this.frontier[e],
            c = null;
          if (1 == t && (i ? l.matchType(i.type) || (c = l.fillBefore(r.FK.from(i), !1)) : a && s.compatibleContent(a.type))) return {
            sliceDepth: n,
            frontierDepth: e,
            parent: a,
            inject: c
          };
          if (2 == t && i && (o = l.findWrapping(i.type))) return {
            sliceDepth: n,
            frontierDepth: e,
            parent: a,
            wrap: o
          };
          if (a && l.matchType(a.type)) break;
        }
      }
    }
    openMore() {
      let {
          content: e,
          openStart: t,
          openEnd: n
        } = this.unplaced,
        a = U(e, t);
      return !(!a.childCount || a.firstChild.isLeaf || (this.unplaced = new r.Ji(e, t + 1, Math.max(n, a.size + t >= e.size - n ? t + 1 : 0)), 0));
    }
    dropNode() {
      let {
          content: e,
          openStart: t,
          openEnd: n
        } = this.unplaced,
        a = U(e, t);
      if (a.childCount <= 1 && t > 0) {
        let i = e.size - t <= t + a.size;
        this.unplaced = new r.Ji(B(e, t - 1, 1), t - 1, i ? t - 1 : n);
      } else this.unplaced = new r.Ji(B(e, t, 1), t, n);
    }
    placeNodes({
      sliceDepth: e,
      frontierDepth: t,
      parent: n,
      inject: a,
      wrap: i
    }) {
      for (; this.depth > t;) this.closeFrontierNode();
      if (i) for (let e = 0; e < i.length; e++) this.openFrontierNode(i[e]);
      let o = this.unplaced,
        s = n ? n.content : o.content,
        l = o.openStart - e,
        c = 0,
        u = [],
        {
          match: d,
          type: p
        } = this.frontier[t];
      if (a) {
        for (let e = 0; e < a.childCount; e++) u.push(a.child(e));
        d = d.matchFragment(a);
      }
      let f = s.size + e - (o.content.size - o.openEnd);
      for (; c < s.childCount;) {
        let e = s.child(c),
          t = d.matchType(e.type);
        if (!t) break;
        c++, (c > 1 || 0 == l || e.content.size) && (d = t, u.push(F(e.mark(p.allowedMarks(e.marks)), 1 == c ? l : 0, c == s.childCount ? f : -1)));
      }
      let h = c == s.childCount;
      h || (f = -1), this.placed = N(this.placed, t, r.FK.from(u)), this.frontier[t].match = d, h && f < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
      for (let e = 0, t = s; e < f; e++) {
        let e = t.lastChild;
        this.frontier.push({
          type: e.type,
          match: e.contentMatchAt(e.childCount)
        }), t = e.content;
      }
      this.unplaced = h ? 0 == e ? r.Ji.empty : new r.Ji(B(o.content, e - 1, 1), e - 1, f < 0 ? o.openEnd : e - 1) : new r.Ji(B(o.content, e, c), o.openStart, o.openEnd);
    }
    mustMoveInline() {
      if (!this.$to.parent.isTextblock) return -1;
      let e,
        t = this.frontier[this.depth];
      if (!t.type.isTextblock || !j(this.$to, this.$to.depth, t.type, t.match, !1) || this.$to.depth == this.depth && (e = this.findCloseLevel(this.$to)) && e.depth == this.depth) return -1;
      let {
          depth: n
        } = this.$to,
        r = this.$to.after(n);
      for (; n > 1 && r == this.$to.end(--n);) ++r;
      return r;
    }
    findCloseLevel(e) {
      e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
        let {
            match: n,
            type: r
          } = this.frontier[t],
          a = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)),
          i = j(e, t, r, n, a);
        if (i) {
          for (let n = t - 1; n >= 0; n--) {
            let {
                match: t,
                type: r
              } = this.frontier[n],
              a = j(e, n, r, t, !0);
            if (!a || a.childCount) continue e;
          }
          return {
            depth: t,
            fit: i,
            move: a ? e.doc.resolve(e.after(t + 1)) : e
          };
        }
      }
    }
    close(e) {
      let t = this.findCloseLevel(e);
      if (!t) return null;
      for (; this.depth > t.depth;) this.closeFrontierNode();
      t.fit.childCount && (this.placed = N(this.placed, t.depth, t.fit)), e = t.move;
      for (let n = t.depth + 1; n <= e.depth; n++) {
        let t = e.node(n),
          r = t.type.contentMatch.fillBefore(t.content, !0, e.index(n));
        this.openFrontierNode(t.type, t.attrs, r);
      }
      return e;
    }
    openFrontierNode(e, t = null, n) {
      let a = this.frontier[this.depth];
      a.match = a.match.matchType(e), this.placed = N(this.placed, this.depth, r.FK.from(e.create(t, n))), this.frontier.push({
        type: e,
        match: e.contentMatch
      });
    }
    closeFrontierNode() {
      let e = this.frontier.pop().match.fillBefore(r.FK.empty, !0);
      e.childCount && (this.placed = N(this.placed, this.frontier.length, e));
    }
  }
  function B(e, t, n) {
    return 0 == t ? e.cutByIndex(n, e.childCount) : e.replaceChild(0, e.firstChild.copy(B(e.firstChild.content, t - 1, n)));
  }
  function N(e, t, n) {
    return 0 == t ? e.append(n) : e.replaceChild(e.childCount - 1, e.lastChild.copy(N(e.lastChild.content, t - 1, n)));
  }
  function U(e, t) {
    for (let n = 0; n < t; n++) e = e.firstChild.content;
    return e;
  }
  function F(e, t, n) {
    if (t <= 0) return e;
    let a = e.content;
    return t > 1 && (a = a.replaceChild(0, F(a.firstChild, t - 1, 1 == a.childCount ? n - 1 : 0))), t > 0 && (a = e.type.contentMatch.fillBefore(a).append(a), n <= 0 && (a = a.append(e.type.contentMatch.matchFragment(a).fillBefore(r.FK.empty, !0)))), e.copy(a);
  }
  function j(e, t, n, r, a) {
    let i = e.node(t),
      o = a ? e.indexAfter(t) : e.index(t);
    if (o == i.childCount && !n.compatibleContent(i.type)) return null;
    let s = r.fillBefore(i.content, !0, o);
    return s && !function (e, t, n) {
      for (let r = n; r < t.childCount; r++) if (!e.allowsMarks(t.child(r).marks)) return !0;
      return !1;
    }(n, i.content, o) ? s : null;
  }
  function H(e) {
    return e.spec.defining || e.spec.definingForContent;
  }
  function W(e, t, n, a, i) {
    if (t < n) {
      let r = e.firstChild;
      e = e.replaceChild(0, r.copy(W(r.content, t + 1, n, a, r)));
    }
    if (t > a) {
      let t = i.contentMatchAt(0),
        n = t.fillBefore(e).append(e);
      e = n.append(t.matchFragment(n).fillBefore(r.FK.empty, !0));
    }
    return e;
  }
  function K(e, t) {
    let n = [];
    for (let r = Math.min(e.depth, t.depth); r >= 0; r--) {
      let a = e.start(r);
      if (a < e.pos - (e.depth - r) || t.end(r) > t.pos + (t.depth - r) || e.node(r).type.spec.isolating || t.node(r).type.spec.isolating) break;
      (a == t.start(r) || r == e.depth && r == t.depth && e.parent.inlineContent && t.parent.inlineContent && r && t.start(r - 1) == a - 1) && n.push(r);
    }
    return n;
  }
  class V extends d {
    constructor(e, t, n) {
      super(), this.pos = e, this.attr = t, this.value = n;
    }
    apply(e) {
      let t = e.nodeAt(this.pos);
      if (!t) return p.fail("No node at attribute step's position");
      let n = Object.create(null);
      for (let e in t.attrs) n[e] = t.attrs[e];
      n[this.attr] = this.value;
      let a = t.type.create(n, null, t.marks);
      return p.fromReplace(e, this.pos, this.pos + 1, new r.Ji(r.FK.from(a), 0, t.isLeaf ? 0 : 1));
    }
    getMap() {
      return l.empty;
    }
    invert(e) {
      return new V(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
    }
    map(e) {
      let t = e.mapResult(this.pos, 1);
      return t.deletedAfter ? null : new V(t.pos, this.attr, this.value);
    }
    toJSON() {
      return {
        stepType: "attr",
        pos: this.pos,
        attr: this.attr,
        value: this.value
      };
    }
    static fromJSON(e, t) {
      if ("number" != typeof t.pos || "string" != typeof t.attr) throw new RangeError("Invalid input for AttrStep.fromJSON");
      return new V(t.pos, t.attr, t.value);
    }
  }
  d.jsonID("attr", V);
  class z extends d {
    constructor(e, t) {
      super(), this.attr = e, this.value = t;
    }
    apply(e) {
      let t = Object.create(null);
      for (let n in e.attrs) t[n] = e.attrs[n];
      t[this.attr] = this.value;
      let n = e.type.create(t, e.content, e.marks);
      return p.ok(n);
    }
    getMap() {
      return l.empty;
    }
    invert(e) {
      return new z(this.attr, e.attrs[this.attr]);
    }
    map(e) {
      return this;
    }
    toJSON() {
      return {
        stepType: "docAttr",
        attr: this.attr,
        value: this.value
      };
    }
    static fromJSON(e, t) {
      if ("string" != typeof t.attr) throw new RangeError("Invalid input for DocAttrStep.fromJSON");
      return new z(t.attr, t.value);
    }
  }
  d.jsonID("docAttr", z);
  let Y = class extends Error {};
  Y = function e(t) {
    let n = Error.call(this, t);
    return n.__proto__ = e.prototype, n;
  }, (Y.prototype = Object.create(Error.prototype)).constructor = Y, Y.prototype.name = "TransformError";
  class Q {
    constructor(e) {
      this.doc = e, this.steps = [], this.docs = [], this.mapping = new c();
    }
    get before() {
      return this.docs.length ? this.docs[0] : this.doc;
    }
    step(e) {
      let t = this.maybeStep(e);
      if (t.failed) throw new Y(t.failed);
      return this;
    }
    maybeStep(e) {
      let t = e.apply(this.doc);
      return t.failed || this.addStep(e, t.doc), t;
    }
    get docChanged() {
      return this.steps.length > 0;
    }
    addStep(e, t) {
      this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
    }
    replace(e, t = e, n = r.Ji.empty) {
      let a = P(this.doc, e, t, n);
      return a && this.step(a), this;
    }
    replaceWith(e, t, n) {
      return this.replace(e, t, new r.Ji(r.FK.from(n), 0, 0));
    }
    delete(e, t) {
      return this.replace(e, t, r.Ji.empty);
    }
    insert(e, t) {
      return this.replaceWith(e, e, t);
    }
    replaceRange(e, t, n) {
      return function (e, t, n, a) {
        if (!a.size) return e.deleteRange(t, n);
        let i = e.doc.resolve(t),
          o = e.doc.resolve(n);
        if (L(i, o, a)) return e.step(new g(t, n, a));
        let s = K(i, e.doc.resolve(n));
        0 == s[s.length - 1] && s.pop();
        let l = -(i.depth + 1);
        s.unshift(l);
        for (let e = i.depth, t = i.pos - 1; e > 0; e--, t--) {
          let n = i.node(e).type.spec;
          if (n.defining || n.definingAsContext || n.isolating) break;
          s.indexOf(e) > -1 ? l = e : i.before(e) == t && s.splice(1, 0, -e);
        }
        let c = s.indexOf(l),
          u = [],
          d = a.openStart;
        for (let e = a.content, t = 0;; t++) {
          let n = e.firstChild;
          if (u.push(n), t == a.openStart) break;
          e = n.content;
        }
        for (let e = d - 1; e >= 0; e--) {
          let t = u[e],
            n = H(t.type);
          if (n && !t.sameMarkup(i.node(Math.abs(l) - 1))) d = e;else if (n || !t.type.isTextblock) break;
        }
        for (let t = a.openStart; t >= 0; t--) {
          let l = (t + d + 1) % (a.openStart + 1),
            p = u[l];
          if (p) for (let t = 0; t < s.length; t++) {
            let u = s[(t + c) % s.length],
              d = !0;
            u < 0 && (d = !1, u = -u);
            let f = i.node(u - 1),
              h = i.index(u - 1);
            if (f.canReplaceWith(h, h, p.type, p.marks)) return e.replace(i.before(u), d ? o.after(u) : n, new r.Ji(W(a.content, 0, a.openStart, l), l, a.openEnd));
          }
        }
        let p = e.steps.length;
        for (let r = s.length - 1; r >= 0 && (e.replace(t, n, a), !(e.steps.length > p)); r--) {
          let e = s[r];
          e < 0 || (t = i.before(e), n = o.after(e));
        }
      }(this, e, t, n), this;
    }
    replaceRangeWith(e, t, n) {
      return function (e, t, n, a) {
        if (!a.isInline && t == n && e.doc.resolve(t).parent.content.size) {
          let r = function (e, t, n) {
            let r = e.resolve(t);
            if (r.parent.canReplaceWith(r.index(), r.index(), n)) return t;
            if (0 == r.parentOffset) for (let e = r.depth - 1; e >= 0; e--) {
              let t = r.index(e);
              if (r.node(e).canReplaceWith(t, t, n)) return r.before(e + 1);
              if (t > 0) return null;
            }
            if (r.parentOffset == r.parent.content.size) for (let e = r.depth - 1; e >= 0; e--) {
              let t = r.indexAfter(e);
              if (r.node(e).canReplaceWith(t, t, n)) return r.after(e + 1);
              if (t < r.node(e).childCount) return null;
            }
            return null;
          }(e.doc, t, a.type);
          null != r && (t = n = r);
        }
        e.replaceRange(t, n, new r.Ji(r.FK.from(a), 0, 0));
      }(this, e, t, n), this;
    }
    deleteRange(e, t) {
      return function (e, t, n) {
        let r = e.doc.resolve(t),
          a = e.doc.resolve(n),
          i = K(r, a);
        for (let t = 0; t < i.length; t++) {
          let n = i[t],
            o = t == i.length - 1;
          if (o && 0 == n || r.node(n).type.contentMatch.validEnd) return e.delete(r.start(n), a.end(n));
          if (n > 0 && (o || r.node(n - 1).canReplace(r.index(n - 1), a.indexAfter(n - 1)))) return e.delete(r.before(n), a.after(n));
        }
        for (let i = 1; i <= r.depth && i <= a.depth; i++) if (t - r.start(i) == r.depth - i && n > r.end(i) && a.end(i) - n != a.depth - i && r.start(i - 1) == a.start(i - 1) && r.node(i - 1).canReplace(r.index(i - 1), a.index(i - 1))) return e.delete(r.before(i), n);
        e.delete(t, n);
      }(this, e, t), this;
    }
    lift(e, t) {
      return function (e, t, n) {
        let {
            $from: a,
            $to: i,
            depth: o
          } = t,
          s = a.before(o + 1),
          l = i.after(o + 1),
          c = s,
          u = l,
          d = r.FK.empty,
          p = 0;
        for (let e = o, t = !1; e > n; e--) t || a.index(e) > 0 ? (t = !0, d = r.FK.from(a.node(e).copy(d)), p++) : c--;
        let f = r.FK.empty,
          h = 0;
        for (let e = o, t = !1; e > n; e--) t || i.after(e + 1) < i.end(e) ? (t = !0, f = r.FK.from(i.node(e).copy(f)), h++) : u++;
        e.step(new y(c, u, s, l, new r.Ji(d.append(f), p, h), d.size - p, !0));
      }(this, e, t), this;
    }
    join(e, t = 1) {
      return function (e, t, n) {
        let a = null,
          {
            linebreakReplacement: i
          } = e.doc.type.schema,
          o = e.doc.resolve(t - n),
          s = o.node().type;
        if (i && s.inlineContent) {
          let e = "pre" == s.whitespace,
            t = !!s.contentMatch.matchType(i);
          e && !t ? a = !1 : !e && t && (a = !0);
        }
        let l = e.steps.length;
        if (!1 === a) {
          let r = e.doc.resolve(t + n);
          S(e, r.node(), r.before(), l);
        }
        s.inlineContent && E(e, t + n - 1, s, o.node().contentMatchAt(o.index()), null == a);
        let c = e.mapping.slice(l),
          u = c.map(t - n);
        if (e.step(new g(u, c.map(t + n, -1), r.Ji.empty, !0)), !0 === a) {
          let t = e.doc.resolve(u);
          M(e, t.node(), t.before(), e.steps.length);
        }
      }(this, e, t), this;
    }
    wrap(e, t) {
      return function (e, t, n) {
        let a = r.FK.empty;
        for (let e = n.length - 1; e >= 0; e--) {
          if (a.size) {
            let t = n[e].type.contentMatch.matchFragment(a);
            if (!t || !t.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
          }
          a = r.FK.from(n[e].type.create(n[e].attrs, a));
        }
        let i = t.start,
          o = t.end;
        e.step(new y(i, o, i, o, new r.Ji(a, 0, 0), n.length, !0));
      }(this, e, t), this;
    }
    setBlockType(e, t = e, n, a = null) {
      return function (e, t, n, a, i) {
        if (!a.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
        let o = e.steps.length;
        e.doc.nodesBetween(t, n, (t, n) => {
          let s = "function" == typeof i ? i(t) : i;
          if (t.isTextblock && !t.hasMarkup(a, s) && function (e, t, n) {
            let r = e.resolve(t),
              a = r.index();
            return r.parent.canReplaceWith(a, a + 1, n);
          }(e.doc, e.mapping.slice(o).map(n), a)) {
            let i = null;
            if (a.schema.linebreakReplacement) {
              let e = "pre" == a.whitespace,
                t = !!a.contentMatch.matchType(a.schema.linebreakReplacement);
              e && !t ? i = !1 : !e && t && (i = !0);
            }
            !1 === i && S(e, t, n, o), E(e, e.mapping.slice(o).map(n, 1), a, void 0, null === i);
            let l = e.mapping.slice(o),
              c = l.map(n, 1),
              u = l.map(n + t.nodeSize, 1);
            return e.step(new y(c, u, c + 1, u - 1, new r.Ji(r.FK.from(a.create(s, null, t.marks)), 0, 0), 1, !0)), !0 === i && M(e, t, n, o), !1;
          }
        });
      }(this, e, t, n, a), this;
    }
    setNodeMarkup(e, t, n = null, a) {
      return function (e, t, n, a, i) {
        let o = e.doc.nodeAt(t);
        if (!o) throw new RangeError("No node at given position");
        n || (n = o.type);
        let s = n.create(a, null, i || o.marks);
        if (o.isLeaf) return e.replaceWith(t, t + o.nodeSize, s);
        if (!n.validContent(o.content)) throw new RangeError("Invalid content for node type " + n.name);
        e.step(new y(t, t + o.nodeSize, t + 1, t + o.nodeSize - 1, new r.Ji(r.FK.from(s), 0, 0), 1, !0));
      }(this, e, t, n, a), this;
    }
    setNodeAttribute(e, t, n) {
      return this.step(new V(e, t, n)), this;
    }
    setDocAttribute(e, t) {
      return this.step(new z(e, t)), this;
    }
    addNodeMark(e, t) {
      return this.step(new m(e, t)), this;
    }
    removeNodeMark(e, t) {
      let n = this.doc.nodeAt(e);
      if (!n) throw new RangeError("No node at position " + e);
      if (t instanceof r.CU) t.isInSet(n.marks) && this.step(new A(e, t));else {
        let r,
          a = n.marks,
          i = [];
        for (; r = t.isInSet(a);) i.push(new A(e, r)), a = r.removeFromSet(a);
        for (let e = i.length - 1; e >= 0; e--) this.step(i[e]);
      }
      return this;
    }
    split(e, t = 1, n) {
      return function (e, t, n = 1, a) {
        let i = e.doc.resolve(t),
          o = r.FK.empty,
          s = r.FK.empty;
        for (let e = i.depth, t = i.depth - n, l = n - 1; e > t; e--, l--) {
          o = r.FK.from(i.node(e).copy(o));
          let t = a && a[l];
          s = r.FK.from(t ? t.type.create(t.attrs, s) : i.node(e).copy(s));
        }
        e.step(new g(t, t, new r.Ji(o.append(s), n, n), !0));
      }(this, e, t, n), this;
    }
    addMark(e, t, n) {
      return function (e, t, n, r) {
        let a,
          i,
          o = [],
          s = [];
        e.doc.nodesBetween(t, n, (e, l, c) => {
          if (!e.isInline) return;
          let u = e.marks;
          if (!r.isInSet(u) && c.type.allowsMarkType(r.type)) {
            let c = Math.max(l, t),
              d = Math.min(l + e.nodeSize, n),
              p = r.addToSet(u);
            for (let e = 0; e < u.length; e++) u[e].isInSet(p) || (a && a.to == c && a.mark.eq(u[e]) ? a.to = d : o.push(a = new _(c, d, u[e])));
            i && i.to == c ? i.to = d : s.push(i = new h(c, d, r));
          }
        }), o.forEach(t => e.step(t)), s.forEach(t => e.step(t));
      }(this, e, t, n), this;
    }
    removeMark(e, t, n) {
      return function (e, t, n, a) {
        let i = [],
          o = 0;
        e.doc.nodesBetween(t, n, (e, s) => {
          if (!e.isInline) return;
          o++;
          let l = null;
          if (a instanceof r.sX) {
            let t,
              n = e.marks;
            for (; t = a.isInSet(n);) (l || (l = [])).push(t), n = t.removeFromSet(n);
          } else a ? a.isInSet(e.marks) && (l = [a]) : l = e.marks;
          if (l && l.length) {
            let r = Math.min(s + e.nodeSize, n);
            for (let e = 0; e < l.length; e++) {
              let n,
                a = l[e];
              for (let e = 0; e < i.length; e++) {
                let t = i[e];
                t.step == o - 1 && a.eq(i[e].style) && (n = t);
              }
              n ? (n.to = r, n.step = o) : i.push({
                style: a,
                from: Math.max(s, t),
                to: r,
                step: o
              });
            }
          }
        }), i.forEach(t => e.step(new _(t.from, t.to, t.style)));
      }(this, e, t, n), this;
    }
    clearIncompatible(e, t, n) {
      return E(this, e, t, n), this;
    }
  }
});
