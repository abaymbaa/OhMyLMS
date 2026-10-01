// Reconstructed Webpack factory 89552; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    z: () => c
  });
  var r = n(61396),
    a = n(42845),
    i = n(58903),
    o = n(1575);
  class s extends a.LN {
    constructor(e) {
      super(e, e);
    }
    map(e, t) {
      let n = e.resolve(t.map(this.head));
      return s.valid(n) ? new s(n) : a.LN.near(n);
    }
    content() {
      return i.Ji.empty;
    }
    eq(e) {
      return e instanceof s && e.head == this.head;
    }
    toJSON() {
      return {
        type: "gapcursor",
        pos: this.head
      };
    }
    static fromJSON(e, t) {
      if ("number" != typeof t.pos) throw new RangeError("Invalid input for GapCursor.fromJSON");
      return new s(e.resolve(t.pos));
    }
    getBookmark() {
      return new l(this.anchor);
    }
    static valid(e) {
      let t = e.parent;
      if (t.isTextblock || !function (e) {
        for (let t = e.depth; t >= 0; t--) {
          let n = e.index(t),
            r = e.node(t);
          if (0 != n) for (let e = r.child(n - 1);; e = e.lastChild) {
            if (0 == e.childCount && !e.inlineContent || e.isAtom || e.type.spec.isolating) return !0;
            if (e.inlineContent) return !1;
          } else if (r.type.spec.isolating) return !0;
        }
        return !0;
      }(e) || !function (e) {
        for (let t = e.depth; t >= 0; t--) {
          let n = e.indexAfter(t),
            r = e.node(t);
          if (n != r.childCount) for (let e = r.child(n);; e = e.firstChild) {
            if (0 == e.childCount && !e.inlineContent || e.isAtom || e.type.spec.isolating) return !0;
            if (e.inlineContent) return !1;
          } else if (r.type.spec.isolating) return !0;
        }
        return !0;
      }(e)) return !1;
      let n = t.type.spec.allowGapCursor;
      if (null != n) return n;
      let r = t.contentMatchAt(e.index()).defaultType;
      return r && r.isTextblock;
    }
    static findGapCursorFrom(e, t, n = !1) {
      e: for (;;) {
        if (!n && s.valid(e)) return e;
        let r = e.pos,
          i = null;
        for (let n = e.depth;; n--) {
          let a = e.node(n);
          if (t > 0 ? e.indexAfter(n) < a.childCount : e.index(n) > 0) {
            i = a.child(t > 0 ? e.indexAfter(n) : e.index(n) - 1);
            break;
          }
          if (0 == n) return null;
          r += t;
          let o = e.doc.resolve(r);
          if (s.valid(o)) return o;
        }
        for (;;) {
          let o = t > 0 ? i.firstChild : i.lastChild;
          if (!o) {
            if (i.isAtom && !i.isText && !a.nh.isSelectable(i)) {
              e = e.doc.resolve(r + i.nodeSize * t), n = !1;
              continue e;
            }
            break;
          }
          i = o, r += t;
          let l = e.doc.resolve(r);
          if (s.valid(l)) return l;
        }
        return null;
      }
    }
  }
  s.prototype.visible = !1, s.findFrom = s.findGapCursorFrom, a.LN.jsonID("gapcursor", s);
  class l {
    constructor(e) {
      this.pos = e;
    }
    map(e) {
      return new l(e.map(this.pos));
    }
    resolve(e) {
      let t = e.resolve(this.pos);
      return s.valid(t) ? new s(t) : a.LN.near(t);
    }
  }
  function c() {
    return new a.k_({
      props: {
        decorations: h,
        createSelectionBetween: (e, t, n) => t.pos == n.pos && s.valid(n) ? new s(n) : null,
        handleClick: p,
        handleKeyDown: u,
        handleDOMEvents: {
          beforeinput: f
        }
      }
    });
  }
  const u = (0, r.K)({
    ArrowLeft: d("horiz", -1),
    ArrowRight: d("horiz", 1),
    ArrowUp: d("vert", -1),
    ArrowDown: d("vert", 1)
  });
  function d(e, t) {
    const n = "vert" == e ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
    return function (e, r, i) {
      let o = e.selection,
        l = t > 0 ? o.$to : o.$from,
        c = o.empty;
      if (o instanceof a.U3) {
        if (!i.endOfTextblock(n) || 0 == l.depth) return !1;
        c = !1, l = e.doc.resolve(t > 0 ? l.after() : l.before());
      }
      let u = s.findGapCursorFrom(l, t, c);
      return !!u && (r && r(e.tr.setSelection(new s(u))), !0);
    };
  }
  function p(e, t, n) {
    if (!e || !e.editable) return !1;
    let r = e.state.doc.resolve(t);
    if (!s.valid(r)) return !1;
    let i = e.posAtCoords({
      left: n.clientX,
      top: n.clientY
    });
    return !(i && i.inside > -1 && a.nh.isSelectable(e.state.doc.nodeAt(i.inside)) || (e.dispatch(e.state.tr.setSelection(new s(r))), 0));
  }
  function f(e, t) {
    if ("insertCompositionText" != t.inputType || !(e.state.selection instanceof s)) return !1;
    let {
        $from: n
      } = e.state.selection,
      r = n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);
    if (!r) return !1;
    let o = i.FK.empty;
    for (let e = r.length - 1; e >= 0; e--) o = i.FK.from(r[e].createAndFill(null, o));
    let l = e.state.tr.replace(n.pos, n.pos, new i.Ji(o, 0, 0));
    return l.setSelection(a.U3.near(l.doc.resolve(n.pos + 1))), e.dispatch(l), !1;
  }
  function h(e) {
    if (!(e.selection instanceof s)) return null;
    let t = document.createElement("div");
    return t.className = "ProseMirror-gapcursor", o.zF.create(e.doc, [o.NZ.widget(e.selection.head, t, {
      key: "gapcursor"
    })]);
  }
});
