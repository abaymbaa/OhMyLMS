// Reconstructed Webpack factory 42845; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    $t: () => w,
    LN: () => o,
    U3: () => u,
    hs: () => T,
    i5: () => h,
    k_: () => O,
    nh: () => p
  });
  var r = n(58903),
    a = n(38262);
  const i = Object.create(null);
  class o {
    constructor(e, t, n) {
      this.$anchor = e, this.$head = t, this.ranges = n || [new s(e.min(t), e.max(t))];
    }
    get anchor() {
      return this.$anchor.pos;
    }
    get head() {
      return this.$head.pos;
    }
    get from() {
      return this.$from.pos;
    }
    get to() {
      return this.$to.pos;
    }
    get $from() {
      return this.ranges[0].$from;
    }
    get $to() {
      return this.ranges[0].$to;
    }
    get empty() {
      let e = this.ranges;
      for (let t = 0; t < e.length; t++) if (e[t].$from.pos != e[t].$to.pos) return !1;
      return !0;
    }
    content() {
      return this.$from.doc.slice(this.from, this.to, !0);
    }
    replace(e, t = r.Ji.empty) {
      let n = t.content.lastChild,
        a = null;
      for (let e = 0; e < t.openEnd; e++) a = n, n = n.lastChild;
      let i = e.steps.length,
        o = this.ranges;
      for (let s = 0; s < o.length; s++) {
        let {
            $from: l,
            $to: c
          } = o[s],
          u = e.mapping.slice(i);
        e.replaceRange(u.map(l.pos), u.map(c.pos), s ? r.Ji.empty : t), 0 == s && A(e, i, (n ? n.isInline : a && a.isTextblock) ? -1 : 1);
      }
    }
    replaceWith(e, t) {
      let n = e.steps.length,
        r = this.ranges;
      for (let a = 0; a < r.length; a++) {
        let {
            $from: i,
            $to: o
          } = r[a],
          s = e.mapping.slice(n),
          l = s.map(i.pos),
          c = s.map(o.pos);
        a ? e.deleteRange(l, c) : (e.replaceRangeWith(l, c, t), A(e, n, t.isInline ? -1 : 1));
      }
    }
    static findFrom(e, t, n = !1) {
      let r = e.parent.inlineContent ? new u(e) : m(e.node(0), e.parent, e.pos, e.index(), t, n);
      if (r) return r;
      for (let r = e.depth - 1; r >= 0; r--) {
        let a = t < 0 ? m(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, n) : m(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, n);
        if (a) return a;
      }
      return null;
    }
    static near(e, t = 1) {
      return this.findFrom(e, t) || this.findFrom(e, -t) || new h(e.node(0));
    }
    static atStart(e) {
      return m(e, e, 0, 0, 1) || new h(e);
    }
    static atEnd(e) {
      return m(e, e, e.content.size, e.childCount, -1) || new h(e);
    }
    static fromJSON(e, t) {
      if (!t || !t.type) throw new RangeError("Invalid input for Selection.fromJSON");
      let n = i[t.type];
      if (!n) throw new RangeError(`No selection type ${t.type} defined`);
      return n.fromJSON(e, t);
    }
    static jsonID(e, t) {
      if (e in i) throw new RangeError("Duplicate use of selection JSON ID " + e);
      return i[e] = t, t.prototype.jsonID = e, t;
    }
    getBookmark() {
      return u.between(this.$anchor, this.$head).getBookmark();
    }
  }
  o.prototype.visible = !0;
  class s {
    constructor(e, t) {
      this.$from = e, this.$to = t;
    }
  }
  let l = !1;
  function c(e) {
    l || e.parent.inlineContent || (l = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + e.parent.type.name + ")"));
  }
  class u extends o {
    constructor(e, t = e) {
      c(e), c(t), super(e, t);
    }
    get $cursor() {
      return this.$anchor.pos == this.$head.pos ? this.$head : null;
    }
    map(e, t) {
      let n = e.resolve(t.map(this.head));
      if (!n.parent.inlineContent) return o.near(n);
      let r = e.resolve(t.map(this.anchor));
      return new u(r.parent.inlineContent ? r : n, n);
    }
    replace(e, t = r.Ji.empty) {
      if (super.replace(e, t), t == r.Ji.empty) {
        let t = this.$from.marksAcross(this.$to);
        t && e.ensureMarks(t);
      }
    }
    eq(e) {
      return e instanceof u && e.anchor == this.anchor && e.head == this.head;
    }
    getBookmark() {
      return new d(this.anchor, this.head);
    }
    toJSON() {
      return {
        type: "text",
        anchor: this.anchor,
        head: this.head
      };
    }
    static fromJSON(e, t) {
      if ("number" != typeof t.anchor || "number" != typeof t.head) throw new RangeError("Invalid input for TextSelection.fromJSON");
      return new u(e.resolve(t.anchor), e.resolve(t.head));
    }
    static create(e, t, n = t) {
      let r = e.resolve(t);
      return new this(r, n == t ? r : e.resolve(n));
    }
    static between(e, t, n) {
      let r = e.pos - t.pos;
      if (n && !r || (n = r >= 0 ? 1 : -1), !t.parent.inlineContent) {
        let e = o.findFrom(t, n, !0) || o.findFrom(t, -n, !0);
        if (!e) return o.near(t, n);
        t = e.$head;
      }
      return e.parent.inlineContent || (0 == r || (e = (o.findFrom(e, -n, !0) || o.findFrom(e, n, !0)).$anchor).pos < t.pos != r < 0) && (e = t), new u(e, t);
    }
  }
  o.jsonID("text", u);
  class d {
    constructor(e, t) {
      this.anchor = e, this.head = t;
    }
    map(e) {
      return new d(e.map(this.anchor), e.map(this.head));
    }
    resolve(e) {
      return u.between(e.resolve(this.anchor), e.resolve(this.head));
    }
  }
  class p extends o {
    constructor(e) {
      let t = e.nodeAfter,
        n = e.node(0).resolve(e.pos + t.nodeSize);
      super(e, n), this.node = t;
    }
    map(e, t) {
      let {
          deleted: n,
          pos: r
        } = t.mapResult(this.anchor),
        a = e.resolve(r);
      return n ? o.near(a) : new p(a);
    }
    content() {
      return new r.Ji(r.FK.from(this.node), 0, 0);
    }
    eq(e) {
      return e instanceof p && e.anchor == this.anchor;
    }
    toJSON() {
      return {
        type: "node",
        anchor: this.anchor
      };
    }
    getBookmark() {
      return new f(this.anchor);
    }
    static fromJSON(e, t) {
      if ("number" != typeof t.anchor) throw new RangeError("Invalid input for NodeSelection.fromJSON");
      return new p(e.resolve(t.anchor));
    }
    static create(e, t) {
      return new p(e.resolve(t));
    }
    static isSelectable(e) {
      return !e.isText && !1 !== e.type.spec.selectable;
    }
  }
  p.prototype.visible = !1, o.jsonID("node", p);
  class f {
    constructor(e) {
      this.anchor = e;
    }
    map(e) {
      let {
        deleted: t,
        pos: n
      } = e.mapResult(this.anchor);
      return t ? new d(n, n) : new f(n);
    }
    resolve(e) {
      let t = e.resolve(this.anchor),
        n = t.nodeAfter;
      return n && p.isSelectable(n) ? new p(t) : o.near(t);
    }
  }
  class h extends o {
    constructor(e) {
      super(e.resolve(0), e.resolve(e.content.size));
    }
    replace(e, t = r.Ji.empty) {
      if (t == r.Ji.empty) {
        e.delete(0, e.doc.content.size);
        let t = o.atStart(e.doc);
        t.eq(e.selection) || e.setSelection(t);
      } else super.replace(e, t);
    }
    toJSON() {
      return {
        type: "all"
      };
    }
    static fromJSON(e) {
      return new h(e);
    }
    map(e) {
      return new h(e);
    }
    eq(e) {
      return e instanceof h;
    }
    getBookmark() {
      return _;
    }
  }
  o.jsonID("all", h);
  const _ = {
    map() {
      return this;
    },
    resolve: e => new h(e)
  };
  function m(e, t, n, r, a, i = !1) {
    if (t.inlineContent) return u.create(e, n);
    for (let o = r - (a > 0 ? 0 : 1); a > 0 ? o < t.childCount : o >= 0; o += a) {
      let r = t.child(o);
      if (r.isAtom) {
        if (!i && p.isSelectable(r)) return p.create(e, n - (a < 0 ? r.nodeSize : 0));
      } else {
        let t = m(e, r, n + a, a < 0 ? r.childCount : 0, a, i);
        if (t) return t;
      }
      n += r.nodeSize * a;
    }
    return null;
  }
  function A(e, t, n) {
    let r = e.steps.length - 1;
    if (r < t) return;
    let i,
      s = e.steps[r];
    (s instanceof a.Ln || s instanceof a.Wg) && (e.mapping.maps[r].forEach((e, t, n, r) => {
      null == i && (i = r);
    }), e.setSelection(o.near(e.doc.resolve(i), n)));
  }
  class g extends a.dL {
    constructor(e) {
      super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
    }
    get selection() {
      return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
    }
    setSelection(e) {
      if (e.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
      return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = -3 & this.updated | 1, this.storedMarks = null, this;
    }
    get selectionSet() {
      return (1 & this.updated) > 0;
    }
    setStoredMarks(e) {
      return this.storedMarks = e, this.updated |= 2, this;
    }
    ensureMarks(e) {
      return r.CU.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
    }
    addStoredMark(e) {
      return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
    }
    removeStoredMark(e) {
      return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
    }
    get storedMarksSet() {
      return (2 & this.updated) > 0;
    }
    addStep(e, t) {
      super.addStep(e, t), this.updated = -3 & this.updated, this.storedMarks = null;
    }
    setTime(e) {
      return this.time = e, this;
    }
    replaceSelection(e) {
      return this.selection.replace(this, e), this;
    }
    replaceSelectionWith(e, t = !0) {
      let n = this.selection;
      return t && (e = e.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || r.CU.none))), n.replaceWith(this, e), this;
    }
    deleteSelection() {
      return this.selection.replace(this), this;
    }
    insertText(e, t, n) {
      let r = this.doc.type.schema;
      if (null == t) return e ? this.replaceSelectionWith(r.text(e), !0) : this.deleteSelection();
      {
        if (null == n && (n = t), n = null == n ? t : n, !e) return this.deleteRange(t, n);
        let a = this.storedMarks;
        if (!a) {
          let e = this.doc.resolve(t);
          a = n == t ? e.marks() : e.marksAcross(this.doc.resolve(n));
        }
        return this.replaceRangeWith(t, n, r.text(e, a)), this.selection.empty || this.setSelection(o.near(this.selection.$to)), this;
      }
    }
    setMeta(e, t) {
      return this.meta["string" == typeof e ? e : e.key] = t, this;
    }
    getMeta(e) {
      return this.meta["string" == typeof e ? e : e.key];
    }
    get isGeneric() {
      for (let e in this.meta) return !1;
      return !0;
    }
    scrollIntoView() {
      return this.updated |= 4, this;
    }
    get scrolledIntoView() {
      return (4 & this.updated) > 0;
    }
  }
  function y(e, t) {
    return t && e ? e.bind(t) : e;
  }
  class v {
    constructor(e, t, n) {
      this.name = e, this.init = y(t.init, n), this.apply = y(t.apply, n);
    }
  }
  const E = [new v("doc", {
    init: e => e.doc || e.schema.topNodeType.createAndFill(),
    apply: e => e.doc
  }), new v("selection", {
    init: (e, t) => e.selection || o.atStart(t.doc),
    apply: e => e.selection
  }), new v("storedMarks", {
    init: e => e.storedMarks || null,
    apply: (e, t, n, r) => r.selection.$cursor ? e.storedMarks : null
  }), new v("scrollToSelection", {
    init: () => 0,
    apply: (e, t) => e.scrolledIntoView ? t + 1 : t
  })];
  class b {
    constructor(e, t) {
      this.schema = e, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = E.slice(), t && t.forEach(e => {
        if (this.pluginsByKey[e.key]) throw new RangeError("Adding different instances of a keyed plugin (" + e.key + ")");
        this.plugins.push(e), this.pluginsByKey[e.key] = e, e.spec.state && this.fields.push(new v(e.key, e.spec.state, e));
      });
    }
  }
  class w {
    constructor(e) {
      this.config = e;
    }
    get schema() {
      return this.config.schema;
    }
    get plugins() {
      return this.config.plugins;
    }
    apply(e) {
      return this.applyTransaction(e).state;
    }
    filterTransaction(e, t = -1) {
      for (let n = 0; n < this.config.plugins.length; n++) if (n != t) {
        let t = this.config.plugins[n];
        if (t.spec.filterTransaction && !t.spec.filterTransaction.call(t, e, this)) return !1;
      }
      return !0;
    }
    applyTransaction(e) {
      if (!this.filterTransaction(e)) return {
        state: this,
        transactions: []
      };
      let t = [e],
        n = this.applyInner(e),
        r = null;
      for (;;) {
        let a = !1;
        for (let i = 0; i < this.config.plugins.length; i++) {
          let o = this.config.plugins[i];
          if (o.spec.appendTransaction) {
            let s = r ? r[i].n : 0,
              l = r ? r[i].state : this,
              c = s < t.length && o.spec.appendTransaction.call(o, s ? t.slice(s) : t, l, n);
            if (c && n.filterTransaction(c, i)) {
              if (c.setMeta("appendedTransaction", e), !r) {
                r = [];
                for (let e = 0; e < this.config.plugins.length; e++) r.push(e < i ? {
                  state: n,
                  n: t.length
                } : {
                  state: this,
                  n: 0
                });
              }
              t.push(c), n = n.applyInner(c), a = !0;
            }
            r && (r[i] = {
              state: n,
              n: t.length
            });
          }
        }
        if (!a) return {
          state: n,
          transactions: t
        };
      }
    }
    applyInner(e) {
      if (!e.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
      let t = new w(this.config),
        n = this.config.fields;
      for (let r = 0; r < n.length; r++) {
        let a = n[r];
        t[a.name] = a.apply(e, this[a.name], this, t);
      }
      return t;
    }
    get tr() {
      return new g(this);
    }
    static create(e) {
      let t = new b(e.doc ? e.doc.type.schema : e.schema, e.plugins),
        n = new w(t);
      for (let r = 0; r < t.fields.length; r++) n[t.fields[r].name] = t.fields[r].init(e, n);
      return n;
    }
    reconfigure(e) {
      let t = new b(this.schema, e.plugins),
        n = t.fields,
        r = new w(t);
      for (let t = 0; t < n.length; t++) {
        let a = n[t].name;
        r[a] = this.hasOwnProperty(a) ? this[a] : n[t].init(e, r);
      }
      return r;
    }
    toJSON(e) {
      let t = {
        doc: this.doc.toJSON(),
        selection: this.selection.toJSON()
      };
      if (this.storedMarks && (t.storedMarks = this.storedMarks.map(e => e.toJSON())), e && "object" == typeof e) for (let n in e) {
        if ("doc" == n || "selection" == n) throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let r = e[n],
          a = r.spec.state;
        a && a.toJSON && (t[n] = a.toJSON.call(r, this[r.key]));
      }
      return t;
    }
    static fromJSON(e, t, n) {
      if (!t) throw new RangeError("Invalid input for EditorState.fromJSON");
      if (!e.schema) throw new RangeError("Required config field 'schema' missing");
      let a = new b(e.schema, e.plugins),
        i = new w(a);
      return a.fields.forEach(a => {
        if ("doc" == a.name) i.doc = r.bP.fromJSON(e.schema, t.doc);else if ("selection" == a.name) i.selection = o.fromJSON(i.doc, t.selection);else if ("storedMarks" == a.name) t.storedMarks && (i.storedMarks = t.storedMarks.map(e.schema.markFromJSON));else {
          if (n) for (let r in n) {
            let o = n[r],
              s = o.spec.state;
            if (o.key == a.name && s && s.fromJSON && Object.prototype.hasOwnProperty.call(t, r)) return void (i[a.name] = s.fromJSON.call(o, e, t[r], i));
          }
          i[a.name] = a.init(e, i);
        }
      }), i;
    }
  }
  function C(e, t, n) {
    for (let r in e) {
      let a = e[r];
      a instanceof Function ? a = a.bind(t) : "handleDOMEvents" == r && (a = C(a, t, {})), n[r] = a;
    }
    return n;
  }
  class O {
    constructor(e) {
      this.spec = e, this.props = {}, e.props && C(e.props, this, this.props), this.key = e.key ? e.key.key : S("plugin");
    }
    getState(e) {
      return e[this.key];
    }
  }
  const M = Object.create(null);
  function S(e) {
    return e in M ? e + "$" + ++M[e] : (M[e] = 0, e + "$");
  }
  class T {
    constructor(e = "key") {
      this.key = S(e);
    }
    get(e) {
      return e.config.pluginsByKey[this.key];
    }
    getState(e) {
      return e[this.key];
    }
  }
});
