// Reconstructed Webpack factory 34243; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  var r = n(36553),
    a = n(77712),
    i = n(37820),
    o = ["ol", 0],
    s = ["ul", 0],
    l = ["li", 0],
    c = {
      attrs: {
        order: {
          default: 1,
          validate: "number"
        }
      },
      parseDOM: [{
        tag: "ol",
        getAttrs: function (e) {
          return {
            order: e.hasAttribute("start") ? +e.getAttribute("start") : 1
          };
        }
      }],
      toDOM: function (e) {
        return 1 == e.attrs.order ? o : ["ol", {
          start: e.attrs.order
        }, 0];
      }
    },
    u = {
      parseDOM: [{
        tag: "ul"
      }],
      toDOM: function () {
        return s;
      }
    },
    d = {
      parseDOM: [{
        tag: "li"
      }],
      toDOM: function () {
        return l;
      },
      defining: !0
    };
  function p(e, t) {
    var n = {};
    for (var r in e) n[r] = e[r];
    for (var a in t) n[a] = t[a];
    return n;
  }
  function f(e, t, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
      o = !1,
      s = t,
      l = t.$from.doc;
    if (t.depth >= 2 && t.$from.node(t.depth - 1).type.compatibleContent(n) && 0 == t.startIndex) {
      if (0 == t.$from.index(t.depth - 1)) return !1;
      var c = l.resolve(t.start - 2);
      s = new a.NodeRange(c, c, t.depth), t.endIndex < t.parent.childCount && (t = new a.NodeRange(t.$from, l.resolve(t.$to.end(t.depth)), t.depth)), o = !0;
    }
    var u = r.findWrapping(s, n, i, t);
    return !!u && (e && function (e, t, n, i, o) {
      for (var s = a.Fragment.empty, l = n.length - 1; l >= 0; l--) s = a.Fragment.from(n[l].type.create(n[l].attrs, s));
      e.step(new r.ReplaceAroundStep(t.start - (i ? 2 : 0), t.end, t.start, t.end, new a.Slice(s, 0, 0), n.length, !0));
      for (var c = 0, u = 0; u < n.length; u++) n[u].type == o && (c = u + 1);
      for (var d = n.length - c, p = t.start + n.length - (i ? 2 : 0), f = t.parent, h = t.startIndex, _ = t.endIndex, m = !0; h < _; h++, m = !1) !m && r.canSplit(e.doc, p, d) && (e.split(p, d), p += 2 * d), p += f.child(h).nodeSize;
    }(e, t, u, o, n), !0);
  }
  function h(e, t) {
    return function (n, o) {
      var s = n.selection,
        l = s.$from,
        c = s.$to,
        u = s.node;
      if (u && u.isBlock || l.depth < 2 || !l.sameParent(c)) return !1;
      var d = l.node(-1);
      if (d.type != e) return !1;
      if (0 == l.parent.content.size && l.node(-1).childCount == l.indexAfter(-1)) {
        if (3 == l.depth || l.node(-3).type != e || l.index(-2) != l.node(-2).childCount - 1) return !1;
        if (o) {
          for (var p = a.Fragment.empty, f = l.index(-1) ? 1 : l.index(-2) ? 2 : 3, h = l.depth - f; h >= l.depth - 3; h--) p = a.Fragment.from(l.node(h).copy(p));
          var _ = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3;
          p = p.append(a.Fragment.from(e.createAndFill()));
          var m = l.before(l.depth - (f - 1)),
            A = n.tr.replace(m, l.after(-_), new a.Slice(p, 4 - f, 0)),
            g = -1;
          A.doc.nodesBetween(m, A.doc.content.size, function (e, t) {
            if (g > -1) return !1;
            e.isTextblock && 0 == e.content.size && (g = t + 1);
          }), g > -1 && A.setSelection(i.Selection.near(A.doc.resolve(g))), o(A.scrollIntoView());
        }
        return !0;
      }
      var y = c.pos == l.end() ? d.contentMatchAt(0).defaultType : null,
        v = n.tr.delete(l.pos, c.pos),
        E = y ? [t ? {
          type: e,
          attrs: t
        } : null, {
          type: y
        }] : void 0;
      return !!r.canSplit(v.doc, l.pos, 2, E) && (o && o(v.split(l.pos, 2, E).scrollIntoView()), !0);
    };
  }
  t.addListNodes = function (e, t, n) {
    return e.append({
      ordered_list: p(c, {
        content: "list_item+",
        group: n
      }),
      bullet_list: p(u, {
        content: "list_item+",
        group: n
      }),
      list_item: p(d, {
        content: t
      })
    });
  }, t.bulletList = u, t.liftListItem = function (e) {
    return function (t, n) {
      var i = t.selection,
        o = i.$from,
        s = i.$to,
        l = o.blockRange(s, function (t) {
          return t.childCount > 0 && t.firstChild.type == e;
        });
      return !!l && (!n || (o.node(l.depth - 1).type == e ? function (e, t, n, i) {
        var o = e.tr,
          s = i.end,
          l = i.$to.end(i.depth);
        s < l && (o.step(new r.ReplaceAroundStep(s - 1, l, s, l, new a.Slice(a.Fragment.from(n.create(null, i.parent.copy())), 1, 0), 1, !0)), i = new a.NodeRange(o.doc.resolve(i.$from.pos), o.doc.resolve(l), i.depth));
        var c = r.liftTarget(i);
        if (null == c) return !1;
        o.lift(i, c);
        var u = o.doc.resolve(o.mapping.map(s, -1) - 1);
        return r.canJoin(o.doc, u.pos) && u.nodeBefore.type == u.nodeAfter.type && o.join(u.pos), t(o.scrollIntoView()), !0;
      }(t, n, e, l) : function (e, t, n) {
        for (var i = e.tr, o = n.parent, s = n.end, l = n.endIndex - 1, c = n.startIndex; l > c; l--) s -= o.child(l).nodeSize, i.delete(s - 1, s + 1);
        var u = i.doc.resolve(n.start),
          d = u.nodeAfter;
        if (i.mapping.map(n.end) != n.start + u.nodeAfter.nodeSize) return !1;
        var p = 0 == n.startIndex,
          f = n.endIndex == o.childCount,
          h = u.node(-1),
          _ = u.index(-1);
        if (!h.canReplace(_ + (p ? 0 : 1), _ + 1, d.content.append(f ? a.Fragment.empty : a.Fragment.from(o)))) return !1;
        var m = u.pos,
          A = m + d.nodeSize;
        return i.step(new r.ReplaceAroundStep(m - (p ? 1 : 0), A + (f ? 1 : 0), m + 1, A - 1, new a.Slice((p ? a.Fragment.empty : a.Fragment.from(o.copy(a.Fragment.empty))).append(f ? a.Fragment.empty : a.Fragment.from(o.copy(a.Fragment.empty))), p ? 0 : 1, f ? 0 : 1), p ? 0 : 1)), t(i.scrollIntoView()), !0;
      }(t, n, l)));
    };
  }, t.listItem = d, t.orderedList = c, t.sinkListItem = function (e) {
    return function (t, n) {
      var i = t.selection,
        o = i.$from,
        s = i.$to,
        l = o.blockRange(s, function (t) {
          return t.childCount > 0 && t.firstChild.type == e;
        });
      if (!l) return !1;
      var c = l.startIndex;
      if (0 == c) return !1;
      var u = l.parent,
        d = u.child(c - 1);
      if (d.type != e) return !1;
      if (n) {
        var p = d.lastChild && d.lastChild.type == u.type,
          f = a.Fragment.from(p ? e.create() : null),
          h = new a.Slice(a.Fragment.from(e.create(null, a.Fragment.from(u.type.create(null, f)))), p ? 3 : 1, 0),
          _ = l.start,
          m = l.end;
        n(t.tr.step(new r.ReplaceAroundStep(_ - (p ? 3 : 1), m, _, m, h, 1, !0)).scrollIntoView());
      }
      return !0;
    };
  }, t.splitListItem = h, t.splitListItemKeepMarks = function (e, t) {
    var n = h(e, t);
    return function (e, t) {
      return n(e, t && function (n) {
        var r = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
        r && n.ensureMarks(r), t(n);
      });
    };
  }, t.wrapInList = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return function (n, r) {
      var a = n.selection,
        i = a.$from,
        o = a.$to,
        s = i.blockRange(o);
      if (!s) return !1;
      var l = r ? n.tr : null;
      return !!f(l, s, e, t) && (r && r(l.scrollIntoView()), !0);
    };
  }, t.wrapRangeInList = f;
});
