// Reconstructed Webpack factory 46762; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    $f: () => D,
    G2: () => y,
    I$: () => C,
    Im: () => P,
    Qv: () => l,
    Sd: () => A,
    Z1: () => O,
    _G: () => u,
    _e: () => f,
    bh: () => v,
    eB: () => c,
    eT: () => m,
    ec: () => I,
    hy: () => T,
    ic: () => o,
    iz: () => M,
    pC: () => b,
    yY: () => E,
    y_: () => L
  });
  var r = n(38262),
    a = n(58903),
    i = n(42845);
  const o = (e, t) => !e.selection.empty && (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
  function s(e, t) {
    let {
      $cursor: n
    } = e.selection;
    return !n || (t ? !t.endOfTextblock("backward", e) : n.parentOffset > 0) ? null : n;
  }
  const l = (e, t, n) => {
      let o = s(e, n);
      if (!o) return !1;
      let l = h(o);
      if (!l) {
        let n = o.blockRange(),
          a = n && (0, r.jP)(n);
        return null != a && (t && t(e.tr.lift(n, a).scrollIntoView()), !0);
      }
      let c = l.nodeBefore;
      if (k(e, l, t, -1)) return !0;
      if (0 == o.parent.content.size && (p(c, "end") || i.nh.isSelectable(c))) for (let n = o.depth;; n--) {
        let s = (0, r.$L)(e.doc, o.before(n), o.after(n), a.Ji.empty);
        if (s && s.slice.size < s.to - s.from) {
          if (t) {
            let n = e.tr.step(s);
            n.setSelection(p(c, "end") ? i.LN.findFrom(n.doc.resolve(n.mapping.map(l.pos, -1)), -1) : i.nh.create(n.doc, l.pos - c.nodeSize)), t(n.scrollIntoView());
          }
          return !0;
        }
        if (1 == n || o.node(n - 1).childCount > 1) break;
      }
      return !(!c.isAtom || l.depth != o.depth - 1 || (t && t(e.tr.delete(l.pos - c.nodeSize, l.pos).scrollIntoView()), 0));
    },
    c = (e, t, n) => {
      let r = s(e, n);
      if (!r) return !1;
      let a = h(r);
      return !!a && d(e, a, t);
    },
    u = (e, t, n) => {
      let r = _(e, n);
      if (!r) return !1;
      let a = g(r);
      return !!a && d(e, a, t);
    };
  function d(e, t, n) {
    let o = t.nodeBefore,
      s = t.pos - 1;
    for (; !o.isTextblock; s--) {
      if (o.type.spec.isolating) return !1;
      let e = o.lastChild;
      if (!e) return !1;
      o = e;
    }
    let l = t.nodeAfter,
      c = t.pos + 1;
    for (; !l.isTextblock; c++) {
      if (l.type.spec.isolating) return !1;
      let e = l.firstChild;
      if (!e) return !1;
      l = e;
    }
    let u = (0, r.$L)(e.doc, s, c, a.Ji.empty);
    if (!u || u.from != s || u instanceof r.Ln && u.slice.size >= c - s) return !1;
    if (n) {
      let t = e.tr.step(u);
      t.setSelection(i.U3.create(t.doc, s)), n(t.scrollIntoView());
    }
    return !0;
  }
  function p(e, t, n = !1) {
    for (let r = e; r; r = "start" == t ? r.firstChild : r.lastChild) {
      if (r.isTextblock) return !0;
      if (n && 1 != r.childCount) return !1;
    }
    return !1;
  }
  const f = (e, t, n) => {
    let {
        $head: r,
        empty: a
      } = e.selection,
      o = r;
    if (!a) return !1;
    if (r.parent.isTextblock) {
      if (n ? !n.endOfTextblock("backward", e) : r.parentOffset > 0) return !1;
      o = h(r);
    }
    let s = o && o.nodeBefore;
    return !(!s || !i.nh.isSelectable(s) || (t && t(e.tr.setSelection(i.nh.create(e.doc, o.pos - s.nodeSize)).scrollIntoView()), 0));
  };
  function h(e) {
    if (!e.parent.type.spec.isolating) for (let t = e.depth - 1; t >= 0; t--) {
      if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
      if (e.node(t).type.spec.isolating) break;
    }
    return null;
  }
  function _(e, t) {
    let {
      $cursor: n
    } = e.selection;
    return !n || (t ? !t.endOfTextblock("forward", e) : n.parentOffset < n.parent.content.size) ? null : n;
  }
  const m = (e, t, n) => {
      let o = _(e, n);
      if (!o) return !1;
      let s = g(o);
      if (!s) return !1;
      let l = s.nodeAfter;
      if (k(e, s, t, 1)) return !0;
      if (0 == o.parent.content.size && (p(l, "start") || i.nh.isSelectable(l))) {
        let n = (0, r.$L)(e.doc, o.before(), o.after(), a.Ji.empty);
        if (n && n.slice.size < n.to - n.from) {
          if (t) {
            let r = e.tr.step(n);
            r.setSelection(p(l, "start") ? i.LN.findFrom(r.doc.resolve(r.mapping.map(s.pos)), 1) : i.nh.create(r.doc, r.mapping.map(s.pos))), t(r.scrollIntoView());
          }
          return !0;
        }
      }
      return !(!l.isAtom || s.depth != o.depth - 1 || (t && t(e.tr.delete(s.pos, s.pos + l.nodeSize).scrollIntoView()), 0));
    },
    A = (e, t, n) => {
      let {
          $head: r,
          empty: a
        } = e.selection,
        o = r;
      if (!a) return !1;
      if (r.parent.isTextblock) {
        if (n ? !n.endOfTextblock("forward", e) : r.parentOffset < r.parent.content.size) return !1;
        o = g(r);
      }
      let s = o && o.nodeAfter;
      return !(!s || !i.nh.isSelectable(s) || (t && t(e.tr.setSelection(i.nh.create(e.doc, o.pos)).scrollIntoView()), 0));
    };
  function g(e) {
    if (!e.parent.type.spec.isolating) for (let t = e.depth - 1; t >= 0; t--) {
      let n = e.node(t);
      if (e.index(t) + 1 < n.childCount) return e.doc.resolve(e.after(t + 1));
      if (n.type.spec.isolating) break;
    }
    return null;
  }
  const y = (e, t) => {
      let n,
        a = e.selection,
        o = a instanceof i.nh;
      if (o) {
        if (a.node.isTextblock || !(0, r.n9)(e.doc, a.from)) return !1;
        n = a.from;
      } else if (n = (0, r.N0)(e.doc, a.from, -1), null == n) return !1;
      if (t) {
        let r = e.tr.join(n);
        o && r.setSelection(i.nh.create(r.doc, n - e.doc.resolve(n).nodeBefore.nodeSize)), t(r.scrollIntoView());
      }
      return !0;
    },
    v = (e, t) => {
      let n,
        a = e.selection;
      if (a instanceof i.nh) {
        if (a.node.isTextblock || !(0, r.n9)(e.doc, a.to)) return !1;
        n = a.to;
      } else if (n = (0, r.N0)(e.doc, a.to, 1), null == n) return !1;
      return t && t(e.tr.join(n).scrollIntoView()), !0;
    },
    E = (e, t) => {
      let {
          $from: n,
          $to: a
        } = e.selection,
        i = n.blockRange(a),
        o = i && (0, r.jP)(i);
      return null != o && (t && t(e.tr.lift(i, o).scrollIntoView()), !0);
    },
    b = (e, t) => {
      let {
        $head: n,
        $anchor: r
      } = e.selection;
      return !(!n.parent.type.spec.code || !n.sameParent(r) || (t && t(e.tr.insertText("\n").scrollIntoView()), 0));
    };
  function w(e) {
    for (let t = 0; t < e.edgeCount; t++) {
      let {
        type: n
      } = e.edge(t);
      if (n.isTextblock && !n.hasRequiredAttrs()) return n;
    }
    return null;
  }
  const C = (e, t) => {
      let {
        $head: n,
        $anchor: r
      } = e.selection;
      if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
      let a = n.node(-1),
        o = n.indexAfter(-1),
        s = w(a.contentMatchAt(o));
      if (!s || !a.canReplaceWith(o, o, s)) return !1;
      if (t) {
        let r = n.after(),
          a = e.tr.replaceWith(r, r, s.createAndFill());
        a.setSelection(i.LN.near(a.doc.resolve(r), 1)), t(a.scrollIntoView());
      }
      return !0;
    },
    O = (e, t) => {
      let n = e.selection,
        {
          $from: r,
          $to: a
        } = n;
      if (n instanceof i.i5 || r.parent.inlineContent || a.parent.inlineContent) return !1;
      let o = w(a.parent.contentMatchAt(a.indexAfter()));
      if (!o || !o.isTextblock) return !1;
      if (t) {
        let n = (!r.parentOffset && a.index() < a.parent.childCount ? r : a).pos,
          s = e.tr.insert(n, o.createAndFill());
        s.setSelection(i.U3.create(s.doc, n + 1)), t(s.scrollIntoView());
      }
      return !0;
    },
    M = (e, t) => {
      let {
        $cursor: n
      } = e.selection;
      if (!n || n.parent.content.size) return !1;
      if (n.depth > 1 && n.after() != n.end(-1)) {
        let a = n.before();
        if ((0, r.zy)(e.doc, a)) return t && t(e.tr.split(a).scrollIntoView()), !0;
      }
      let a = n.blockRange(),
        i = a && (0, r.jP)(a);
      return null != i && (t && t(e.tr.lift(a, i).scrollIntoView()), !0);
    };
  var S;
  const T = (e, t) => {
    let n,
      {
        $from: r,
        to: a
      } = e.selection,
      o = r.sharedDepth(a);
    return 0 != o && (n = r.before(o), t && t(e.tr.setSelection(i.nh.create(e.doc, n))), !0);
  };
  function k(e, t, n, o) {
    let s,
      l,
      c = t.nodeBefore,
      u = t.nodeAfter,
      d = c.type.spec.isolating || u.type.spec.isolating;
    if (!d && function (e, t, n) {
      let a = t.nodeBefore,
        i = t.nodeAfter,
        o = t.index();
      return !(!(a && i && a.type.compatibleContent(i.type)) || (!a.content.size && t.parent.canReplace(o - 1, o) ? (n && n(e.tr.delete(t.pos - a.nodeSize, t.pos).scrollIntoView()), 0) : !t.parent.canReplace(o, o + 1) || !i.isTextblock && !(0, r.n9)(e.doc, t.pos) || (n && n(e.tr.join(t.pos).scrollIntoView()), 0)));
    }(e, t, n)) return !0;
    let f = !d && t.parent.canReplace(t.index(), t.index() + 1);
    if (f && (s = (l = c.contentMatchAt(c.childCount)).findWrapping(u.type)) && l.matchType(s[0] || u.type).validEnd) {
      if (n) {
        let i = t.pos + u.nodeSize,
          o = a.FK.empty;
        for (let e = s.length - 1; e >= 0; e--) o = a.FK.from(s[e].create(null, o));
        o = a.FK.from(c.copy(o));
        let l = e.tr.step(new r.Wg(t.pos - 1, i, t.pos, i, new a.Ji(o, 1, 0), s.length, !0)),
          d = l.doc.resolve(i + 2 * s.length);
        d.nodeAfter && d.nodeAfter.type == c.type && (0, r.n9)(l.doc, d.pos) && l.join(d.pos), n(l.scrollIntoView());
      }
      return !0;
    }
    let h = u.type.spec.isolating || o > 0 && d ? null : i.LN.findFrom(t, 1),
      _ = h && h.$from.blockRange(h.$to),
      m = _ && (0, r.jP)(_);
    if (null != m && m >= t.depth) return n && n(e.tr.lift(_, m).scrollIntoView()), !0;
    if (f && p(u, "start", !0) && p(c, "end")) {
      let i = c,
        o = [];
      for (; o.push(i), !i.isTextblock;) i = i.lastChild;
      let s = u,
        l = 1;
      for (; !s.isTextblock; s = s.firstChild) l++;
      if (i.canReplace(i.childCount, i.childCount, s.content)) {
        if (n) {
          let i = a.FK.empty;
          for (let e = o.length - 1; e >= 0; e--) i = a.FK.from(o[e].copy(i));
          n(e.tr.step(new r.Wg(t.pos - o.length, t.pos + u.nodeSize, t.pos + l, t.pos + u.nodeSize - l, new a.Ji(i, o.length, 0), 0, !0)).scrollIntoView());
        }
        return !0;
      }
    }
    return !1;
  }
  function x(e) {
    return function (t, n) {
      let r = t.selection,
        a = e < 0 ? r.$from : r.$to,
        o = a.depth;
      for (; a.node(o).isInline;) {
        if (!o) return !1;
        o--;
      }
      return !!a.node(o).isTextblock && (n && n(t.tr.setSelection(i.U3.create(t.doc, e < 0 ? a.start(o) : a.end(o)))), !0);
    };
  }
  const D = x(-1),
    I = x(1);
  function P(e, t = null) {
    return function (n, a) {
      let {
          $from: i,
          $to: o
        } = n.selection,
        s = i.blockRange(o),
        l = s && (0, r.oM)(s, e, t);
      return !!l && (a && a(n.tr.wrap(s, l).scrollIntoView()), !0);
    };
  }
  function L(e, t = null) {
    return function (n, r) {
      let a = !1;
      for (let r = 0; r < n.selection.ranges.length && !a; r++) {
        let {
          $from: {
            pos: i
          },
          $to: {
            pos: o
          }
        } = n.selection.ranges[r];
        n.doc.nodesBetween(i, o, (r, i) => {
          if (a) return !1;
          if (r.isTextblock && !r.hasMarkup(e, t)) if (r.type == e) a = !0;else {
            let t = n.doc.resolve(i),
              r = t.index();
            a = t.parent.canReplaceWith(r, r + 1, e);
          }
        });
      }
      if (!a) return !1;
      if (r) {
        let a = n.tr;
        for (let r = 0; r < n.selection.ranges.length; r++) {
          let {
            $from: {
              pos: i
            },
            $to: {
              pos: o
            }
          } = n.selection.ranges[r];
          a.setBlockType(i, o, e, t);
        }
        r(a.scrollIntoView());
      }
      return !0;
    };
  }
  function R(...e) {
    return function (t, n, r) {
      for (let a = 0; a < e.length; a++) if (e[a](t, n, r)) return !0;
      return !1;
    };
  }
  let B = R(o, l, f),
    N = R(o, m, A);
  const U = {
      Enter: R(b, O, M, (e, t) => {
        let {
          $from: n,
          $to: a
        } = e.selection;
        if (e.selection instanceof i.nh && e.selection.node.isBlock) return !(!n.parentOffset || !(0, r.zy)(e.doc, n.pos) || (t && t(e.tr.split(n.pos).scrollIntoView()), 0));
        if (!n.depth) return !1;
        let o,
          s,
          l = [],
          c = !1,
          u = !1;
        for (let e = n.depth;; e--) {
          if (n.node(e).isBlock) {
            c = n.end(e) == n.pos + (n.depth - e), u = n.start(e) == n.pos - (n.depth - e), s = w(n.node(e - 1).contentMatchAt(n.indexAfter(e - 1)));
            let t = S;
            l.unshift(t || (c && s ? {
              type: s
            } : null)), o = e;
            break;
          }
          if (1 == e) return !1;
          l.unshift(null);
        }
        let d = e.tr;
        (e.selection instanceof i.U3 || e.selection instanceof i.i5) && d.deleteSelection();
        let p = d.mapping.map(n.pos),
          f = (0, r.zy)(d.doc, p, l.length, l);
        if (f || (l[0] = s ? {
          type: s
        } : null, f = (0, r.zy)(d.doc, p, l.length, l)), !f) return !1;
        if (d.split(p, l.length, l), !c && u && n.node(o).type != s) {
          let e = d.mapping.map(n.before(o)),
            t = d.doc.resolve(e);
          s && n.node(o - 1).canReplaceWith(t.index(), t.index() + 1, s) && d.setNodeMarkup(d.mapping.map(n.before(o)), s);
        }
        return t && t(d.scrollIntoView()), !0;
      }),
      "Mod-Enter": C,
      Backspace: B,
      "Mod-Backspace": B,
      "Shift-Backspace": B,
      Delete: N,
      "Mod-Delete": N,
      "Mod-a": (e, t) => (t && t(e.tr.setSelection(new i.i5(e.doc))), !0)
    },
    F = {
      "Ctrl-h": U.Backspace,
      "Alt-Backspace": U["Mod-Backspace"],
      "Ctrl-d": U.Delete,
      "Ctrl-Alt-Backspace": U["Mod-Delete"],
      "Alt-Delete": U["Mod-Delete"],
      "Alt-d": U["Mod-Delete"],
      "Ctrl-a": D,
      "Ctrl-e": I
    };
  for (let e in U) F[e] = U[e];
  "undefined" != typeof navigator ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : "undefined" != typeof os && os.platform && os.platform();
});
