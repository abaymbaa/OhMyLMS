// Reconstructed Webpack factory 3772; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    $B: () => s,
    Sd: () => i,
    T2: () => o
  });
  var r = n(38262),
    a = n(58903);
  function i(e, t = null) {
    return function (n, i) {
      let {
          $from: o,
          $to: s
        } = n.selection,
        l = o.blockRange(s);
      if (!l) return !1;
      let c = i ? n.tr : null;
      return !!function (e, t, n, i = null) {
        let o = !1,
          s = t,
          l = t.$from.doc;
        if (t.depth >= 2 && t.$from.node(t.depth - 1).type.compatibleContent(n) && 0 == t.startIndex) {
          if (0 == t.$from.index(t.depth - 1)) return !1;
          let e = l.resolve(t.start - 2);
          s = new a.u$(e, e, t.depth), t.endIndex < t.parent.childCount && (t = new a.u$(t.$from, l.resolve(t.$to.end(t.depth)), t.depth)), o = !0;
        }
        let c = (0, r.oM)(s, n, i, t);
        return !!c && (e && function (e, t, n, i, o) {
          let s = a.FK.empty;
          for (let e = n.length - 1; e >= 0; e--) s = a.FK.from(n[e].type.create(n[e].attrs, s));
          e.step(new r.Wg(t.start - (i ? 2 : 0), t.end, t.start, t.end, new a.Ji(s, 0, 0), n.length, !0));
          let l = 0;
          for (let e = 0; e < n.length; e++) n[e].type == o && (l = e + 1);
          let c = n.length - l,
            u = t.start + n.length - (i ? 2 : 0),
            d = t.parent;
          for (let n = t.startIndex, a = t.endIndex, i = !0; n < a; n++, i = !1) !i && (0, r.zy)(e.doc, u, c) && (e.split(u, c), u += 2 * c), u += d.child(n).nodeSize;
        }(e, t, c, o, n), !0);
      }(c, l, e, t) && (i && i(c.scrollIntoView()), !0);
    };
  }
  function o(e) {
    return function (t, n) {
      let {
          $from: i,
          $to: o
        } = t.selection,
        s = i.blockRange(o, t => t.childCount > 0 && t.firstChild.type == e);
      return !!s && (!n || (i.node(s.depth - 1).type == e ? function (e, t, n, i) {
        let o = e.tr,
          s = i.end,
          l = i.$to.end(i.depth);
        s < l && (o.step(new r.Wg(s - 1, l, s, l, new a.Ji(a.FK.from(n.create(null, i.parent.copy())), 1, 0), 1, !0)), i = new a.u$(o.doc.resolve(i.$from.pos), o.doc.resolve(l), i.depth));
        const c = (0, r.jP)(i);
        if (null == c) return !1;
        o.lift(i, c);
        let u = o.doc.resolve(o.mapping.map(s, -1) - 1);
        return (0, r.n9)(o.doc, u.pos) && u.nodeBefore.type == u.nodeAfter.type && o.join(u.pos), t(o.scrollIntoView()), !0;
      }(t, n, e, s) : function (e, t, n) {
        let i = e.tr,
          o = n.parent;
        for (let e = n.end, t = n.endIndex - 1, r = n.startIndex; t > r; t--) e -= o.child(t).nodeSize, i.delete(e - 1, e + 1);
        let s = i.doc.resolve(n.start),
          l = s.nodeAfter;
        if (i.mapping.map(n.end) != n.start + s.nodeAfter.nodeSize) return !1;
        let c = 0 == n.startIndex,
          u = n.endIndex == o.childCount,
          d = s.node(-1),
          p = s.index(-1);
        if (!d.canReplace(p + (c ? 0 : 1), p + 1, l.content.append(u ? a.FK.empty : a.FK.from(o)))) return !1;
        let f = s.pos,
          h = f + l.nodeSize;
        return i.step(new r.Wg(f - (c ? 1 : 0), h + (u ? 1 : 0), f + 1, h - 1, new a.Ji((c ? a.FK.empty : a.FK.from(o.copy(a.FK.empty))).append(u ? a.FK.empty : a.FK.from(o.copy(a.FK.empty))), c ? 0 : 1, u ? 0 : 1), c ? 0 : 1)), t(i.scrollIntoView()), !0;
      }(t, n, s)));
    };
  }
  function s(e) {
    return function (t, n) {
      let {
          $from: i,
          $to: o
        } = t.selection,
        s = i.blockRange(o, t => t.childCount > 0 && t.firstChild.type == e);
      if (!s) return !1;
      let l = s.startIndex;
      if (0 == l) return !1;
      let c = s.parent,
        u = c.child(l - 1);
      if (u.type != e) return !1;
      if (n) {
        let i = u.lastChild && u.lastChild.type == c.type,
          o = a.FK.from(i ? e.create() : null),
          l = new a.Ji(a.FK.from(e.create(null, a.FK.from(c.type.create(null, o)))), i ? 3 : 1, 0),
          d = s.start,
          p = s.end;
        n(t.tr.step(new r.Wg(d - (i ? 3 : 1), p, d, p, l, 1, !0)).scrollIntoView());
      }
      return !0;
    };
  }
});
