// Reconstructed Webpack factory 57449; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  var r = n(36553),
    a = n(77712),
    i = n(37820),
    o = function (e, t) {
      return !e.selection.empty && (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
    };
  function s(e, t) {
    var n = e.selection.$cursor;
    return !n || (t ? !t.endOfTextblock("backward", e) : n.parentOffset > 0) ? null : n;
  }
  var l = function (e, t, n) {
    var o = s(e, n);
    if (!o) return !1;
    var l = p(o);
    if (!l) {
      var c = o.blockRange(),
        d = c && r.liftTarget(c);
      return null != d && (t && t(e.tr.lift(c, d).scrollIntoView()), !0);
    }
    var f = l.nodeBefore;
    if (O(e, l, t, -1)) return !0;
    if (0 == o.parent.content.size && (u(f, "end") || i.NodeSelection.isSelectable(f))) for (var h = o.depth;; h--) {
      var _ = r.replaceStep(e.doc, o.before(h), o.after(h), a.Slice.empty);
      if (_ && _.slice.size < _.to - _.from) {
        if (t) {
          var m = e.tr.step(_);
          m.setSelection(u(f, "end") ? i.Selection.findFrom(m.doc.resolve(m.mapping.map(l.pos, -1)), -1) : i.NodeSelection.create(m.doc, l.pos - f.nodeSize)), t(m.scrollIntoView());
        }
        return !0;
      }
      if (1 == h || o.node(h - 1).childCount > 1) break;
    }
    return !(!f.isAtom || l.depth != o.depth - 1 || (t && t(e.tr.delete(l.pos - f.nodeSize, l.pos).scrollIntoView()), 0));
  };
  function c(e, t, n) {
    for (var o = t.nodeBefore, s = t.pos - 1; !o.isTextblock; s--) {
      if (o.type.spec.isolating) return !1;
      var l = o.lastChild;
      if (!l) return !1;
      o = l;
    }
    for (var c = t.nodeAfter, u = t.pos + 1; !c.isTextblock; u++) {
      if (c.type.spec.isolating) return !1;
      var d = c.firstChild;
      if (!d) return !1;
      c = d;
    }
    var p = r.replaceStep(e.doc, s, u, a.Slice.empty);
    if (!p || p.from != s || p instanceof r.ReplaceStep && p.slice.size >= u - s) return !1;
    if (n) {
      var f = e.tr.step(p);
      f.setSelection(i.TextSelection.create(f.doc, s)), n(f.scrollIntoView());
    }
    return !0;
  }
  function u(e, t) {
    for (var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = e; r; r = "start" == t ? r.firstChild : r.lastChild) {
      if (r.isTextblock) return !0;
      if (n && 1 != r.childCount) return !1;
    }
    return !1;
  }
  var d = function (e, t, n) {
    var r = e.selection,
      a = r.$head,
      o = a;
    if (!r.empty) return !1;
    if (a.parent.isTextblock) {
      if (n ? !n.endOfTextblock("backward", e) : a.parentOffset > 0) return !1;
      o = p(a);
    }
    var s = o && o.nodeBefore;
    return !(!s || !i.NodeSelection.isSelectable(s) || (t && t(e.tr.setSelection(i.NodeSelection.create(e.doc, o.pos - s.nodeSize)).scrollIntoView()), 0));
  };
  function p(e) {
    if (!e.parent.type.spec.isolating) for (var t = e.depth - 1; t >= 0; t--) {
      if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
      if (e.node(t).type.spec.isolating) break;
    }
    return null;
  }
  function f(e, t) {
    var n = e.selection.$cursor;
    return !n || (t ? !t.endOfTextblock("forward", e) : n.parentOffset < n.parent.content.size) ? null : n;
  }
  var h = function (e, t, n) {
      var o = f(e, n);
      if (!o) return !1;
      var s = m(o);
      if (!s) return !1;
      var l = s.nodeAfter;
      if (O(e, s, t, 1)) return !0;
      if (0 == o.parent.content.size && (u(l, "start") || i.NodeSelection.isSelectable(l))) {
        var c = r.replaceStep(e.doc, o.before(), o.after(), a.Slice.empty);
        if (c && c.slice.size < c.to - c.from) {
          if (t) {
            var d = e.tr.step(c);
            d.setSelection(u(l, "start") ? i.Selection.findFrom(d.doc.resolve(d.mapping.map(s.pos)), 1) : i.NodeSelection.create(d.doc, d.mapping.map(s.pos))), t(d.scrollIntoView());
          }
          return !0;
        }
      }
      return !(!l.isAtom || s.depth != o.depth - 1 || (t && t(e.tr.delete(s.pos, s.pos + l.nodeSize).scrollIntoView()), 0));
    },
    _ = function (e, t, n) {
      var r = e.selection,
        a = r.$head,
        o = a;
      if (!r.empty) return !1;
      if (a.parent.isTextblock) {
        if (n ? !n.endOfTextblock("forward", e) : a.parentOffset < a.parent.content.size) return !1;
        o = m(a);
      }
      var s = o && o.nodeAfter;
      return !(!s || !i.NodeSelection.isSelectable(s) || (t && t(e.tr.setSelection(i.NodeSelection.create(e.doc, o.pos)).scrollIntoView()), 0));
    };
  function m(e) {
    if (!e.parent.type.spec.isolating) for (var t = e.depth - 1; t >= 0; t--) {
      var n = e.node(t);
      if (e.index(t) + 1 < n.childCount) return e.doc.resolve(e.after(t + 1));
      if (n.type.spec.isolating) break;
    }
    return null;
  }
  var A = function (e, t) {
    var n = e.selection,
      r = n.$head,
      a = n.$anchor;
    return !(!r.parent.type.spec.code || !r.sameParent(a) || (t && t(e.tr.insertText("\n").scrollIntoView()), 0));
  };
  function g(e) {
    for (var t = 0; t < e.edgeCount; t++) {
      var n = e.edge(t).type;
      if (n.isTextblock && !n.hasRequiredAttrs()) return n;
    }
    return null;
  }
  var y = function (e, t) {
      var n = e.selection,
        r = n.$head,
        a = n.$anchor;
      if (!r.parent.type.spec.code || !r.sameParent(a)) return !1;
      var o = r.node(-1),
        s = r.indexAfter(-1),
        l = g(o.contentMatchAt(s));
      if (!l || !o.canReplaceWith(s, s, l)) return !1;
      if (t) {
        var c = r.after(),
          u = e.tr.replaceWith(c, c, l.createAndFill());
        u.setSelection(i.Selection.near(u.doc.resolve(c), 1)), t(u.scrollIntoView());
      }
      return !0;
    },
    v = function (e, t) {
      var n = e.selection,
        r = n.$from,
        a = n.$to;
      if (n instanceof i.AllSelection || r.parent.inlineContent || a.parent.inlineContent) return !1;
      var o = g(a.parent.contentMatchAt(a.indexAfter()));
      if (!o || !o.isTextblock) return !1;
      if (t) {
        var s = (!r.parentOffset && a.index() < a.parent.childCount ? r : a).pos,
          l = e.tr.insert(s, o.createAndFill());
        l.setSelection(i.TextSelection.create(l.doc, s + 1)), t(l.scrollIntoView());
      }
      return !0;
    },
    E = function (e, t) {
      var n = e.selection.$cursor;
      if (!n || n.parent.content.size) return !1;
      if (n.depth > 1 && n.after() != n.end(-1)) {
        var a = n.before();
        if (r.canSplit(e.doc, a)) return t && t(e.tr.split(a).scrollIntoView()), !0;
      }
      var i = n.blockRange(),
        o = i && r.liftTarget(i);
      return null != o && (t && t(e.tr.lift(i, o).scrollIntoView()), !0);
    };
  function b(e) {
    return function (t, n) {
      var a = t.selection,
        o = a.$from,
        s = a.$to;
      if (t.selection instanceof i.NodeSelection && t.selection.node.isBlock) return !(!o.parentOffset || !r.canSplit(t.doc, o.pos) || (n && n(t.tr.split(o.pos).scrollIntoView()), 0));
      if (!o.depth) return !1;
      for (var l, c, u = [], d = !1, p = !1, f = o.depth;; f--) {
        if (o.node(f).isBlock) {
          d = o.end(f) == o.pos + (o.depth - f), p = o.start(f) == o.pos - (o.depth - f), c = g(o.node(f - 1).contentMatchAt(o.indexAfter(f - 1)));
          var h = e && e(s.parent, d, o);
          u.unshift(h || (d && c ? {
            type: c
          } : null)), l = f;
          break;
        }
        if (1 == f) return !1;
        u.unshift(null);
      }
      var _ = t.tr;
      (t.selection instanceof i.TextSelection || t.selection instanceof i.AllSelection) && _.deleteSelection();
      var m = _.mapping.map(o.pos),
        A = r.canSplit(_.doc, m, u.length, u);
      if (A || (u[0] = c ? {
        type: c
      } : null, A = r.canSplit(_.doc, m, u.length, u)), !A) return !1;
      if (_.split(m, u.length, u), !d && p && o.node(l).type != c) {
        var y = _.mapping.map(o.before(l)),
          v = _.doc.resolve(y);
        c && o.node(l - 1).canReplaceWith(v.index(), v.index() + 1, c) && _.setNodeMarkup(_.mapping.map(o.before(l)), c);
      }
      return n && n(_.scrollIntoView()), !0;
    };
  }
  var w = b(),
    C = function (e, t) {
      return t && t(e.tr.setSelection(new i.AllSelection(e.doc))), !0;
    };
  function O(e, t, n, o) {
    var s,
      l,
      c = t.nodeBefore,
      d = t.nodeAfter,
      p = c.type.spec.isolating || d.type.spec.isolating;
    if (!p && function (e, t, n) {
      var a = t.nodeBefore,
        i = t.nodeAfter,
        o = t.index();
      return !(!(a && i && a.type.compatibleContent(i.type)) || (!a.content.size && t.parent.canReplace(o - 1, o) ? (n && n(e.tr.delete(t.pos - a.nodeSize, t.pos).scrollIntoView()), 0) : !t.parent.canReplace(o, o + 1) || !i.isTextblock && !r.canJoin(e.doc, t.pos) || (n && n(e.tr.join(t.pos).scrollIntoView()), 0)));
    }(e, t, n)) return !0;
    var f = !p && t.parent.canReplace(t.index(), t.index() + 1);
    if (f && (s = (l = c.contentMatchAt(c.childCount)).findWrapping(d.type)) && l.matchType(s[0] || d.type).validEnd) {
      if (n) {
        for (var h = t.pos + d.nodeSize, _ = a.Fragment.empty, m = s.length - 1; m >= 0; m--) _ = a.Fragment.from(s[m].create(null, _));
        _ = a.Fragment.from(c.copy(_));
        var A = e.tr.step(new r.ReplaceAroundStep(t.pos - 1, h, t.pos, h, new a.Slice(_, 1, 0), s.length, !0)),
          g = A.doc.resolve(h + 2 * s.length);
        g.nodeAfter && g.nodeAfter.type == c.type && r.canJoin(A.doc, g.pos) && A.join(g.pos), n(A.scrollIntoView());
      }
      return !0;
    }
    var y = d.type.spec.isolating || o > 0 && p ? null : i.Selection.findFrom(t, 1),
      v = y && y.$from.blockRange(y.$to),
      E = v && r.liftTarget(v);
    if (null != E && E >= t.depth) return n && n(e.tr.lift(v, E).scrollIntoView()), !0;
    if (f && u(d, "start", !0) && u(c, "end")) {
      for (var b = c, w = []; w.push(b), !b.isTextblock;) b = b.lastChild;
      for (var C = d, O = 1; !C.isTextblock; C = C.firstChild) O++;
      if (b.canReplace(b.childCount, b.childCount, C.content)) {
        if (n) {
          for (var M = a.Fragment.empty, S = w.length - 1; S >= 0; S--) M = a.Fragment.from(w[S].copy(M));
          n(e.tr.step(new r.ReplaceAroundStep(t.pos - w.length, t.pos + d.nodeSize, t.pos + O, t.pos + d.nodeSize - O, new a.Slice(M, w.length, 0), 0, !0)).scrollIntoView());
        }
        return !0;
      }
    }
    return !1;
  }
  function M(e) {
    return function (t, n) {
      for (var r = t.selection, a = e < 0 ? r.$from : r.$to, o = a.depth; a.node(o).isInline;) {
        if (!o) return !1;
        o--;
      }
      return !!a.node(o).isTextblock && (n && n(t.tr.setSelection(i.TextSelection.create(t.doc, e < 0 ? a.start(o) : a.end(o)))), !0);
    };
  }
  var S = M(-1),
    T = M(1);
  function k() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function (e, n, r) {
      for (var a = 0; a < t.length; a++) if (t[a](e, n, r)) return !0;
      return !1;
    };
  }
  var x = k(o, l, d),
    D = k(o, h, _),
    I = {
      Enter: k(A, v, E, w),
      "Mod-Enter": y,
      Backspace: x,
      "Mod-Backspace": x,
      "Shift-Backspace": x,
      Delete: D,
      "Mod-Delete": D,
      "Mod-a": C
    },
    P = {
      "Ctrl-h": I.Backspace,
      "Alt-Backspace": I["Mod-Backspace"],
      "Ctrl-d": I.Delete,
      "Ctrl-Alt-Backspace": I["Mod-Delete"],
      "Alt-Delete": I["Mod-Delete"],
      "Alt-d": I["Mod-Delete"],
      "Ctrl-a": S,
      "Ctrl-e": T
    };
  for (var L in I) P[L] = I[L];
  var R = ("undefined" != typeof navigator ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : "undefined" != typeof os && os.platform && "darwin" == os.platform()) ? P : I;
  t.autoJoin = function (e, t) {
    var n = Array.isArray(t) ? function (e) {
      return t.indexOf(e.type.name) > -1;
    } : t;
    return function (t, a, i) {
      return e(t, a && function (e, t) {
        return function (n) {
          if (!n.isGeneric) return e(n);
          for (var a = [], i = 0; i < n.mapping.maps.length; i++) {
            for (var o = n.mapping.maps[i], s = 0; s < a.length; s++) a[s] = o.map(a[s]);
            o.forEach(function (e, t, n, r) {
              return a.push(n, r);
            });
          }
          for (var l = [], c = 0; c < a.length; c += 2) for (var u = a[c], d = a[c + 1], p = n.doc.resolve(u), f = p.sharedDepth(d), h = p.node(f), _ = p.indexAfter(f), m = p.after(f + 1); m <= d; ++_) {
            var A = h.maybeChild(_);
            if (!A) break;
            if (_ && -1 == l.indexOf(m)) {
              var g = h.child(_ - 1);
              g.type == A.type && t(g, A) && l.push(m);
            }
            m += A.nodeSize;
          }
          l.sort(function (e, t) {
            return e - t;
          });
          for (var y = l.length - 1; y >= 0; y--) r.canJoin(n.doc, l[y]) && n.join(l[y]);
          e(n);
        };
      }(a, n), i);
    };
  }, t.baseKeymap = R, t.chainCommands = k, t.createParagraphNear = v, t.deleteSelection = o, t.exitCode = y, t.joinBackward = l, t.joinDown = function (e, t) {
    var n,
      a = e.selection;
    if (a instanceof i.NodeSelection) {
      if (a.node.isTextblock || !r.canJoin(e.doc, a.to)) return !1;
      n = a.to;
    } else if (null == (n = r.joinPoint(e.doc, a.to, 1))) return !1;
    return t && t(e.tr.join(n).scrollIntoView()), !0;
  }, t.joinForward = h, t.joinTextblockBackward = function (e, t, n) {
    var r = s(e, n);
    if (!r) return !1;
    var a = p(r);
    return !!a && c(e, a, t);
  }, t.joinTextblockForward = function (e, t, n) {
    var r = f(e, n);
    if (!r) return !1;
    var a = m(r);
    return !!a && c(e, a, t);
  }, t.joinUp = function (e, t) {
    var n,
      a = e.selection,
      o = a instanceof i.NodeSelection;
    if (o) {
      if (a.node.isTextblock || !r.canJoin(e.doc, a.from)) return !1;
      n = a.from;
    } else if (null == (n = r.joinPoint(e.doc, a.from, -1))) return !1;
    if (t) {
      var s = e.tr.join(n);
      o && s.setSelection(i.NodeSelection.create(s.doc, n - e.doc.resolve(n).nodeBefore.nodeSize)), t(s.scrollIntoView());
    }
    return !0;
  }, t.lift = function (e, t) {
    var n = e.selection,
      a = n.$from,
      i = n.$to,
      o = a.blockRange(i),
      s = o && r.liftTarget(o);
    return null != s && (t && t(e.tr.lift(o, s).scrollIntoView()), !0);
  }, t.liftEmptyBlock = E, t.macBaseKeymap = P, t.newlineInCode = A, t.pcBaseKeymap = I, t.selectAll = C, t.selectNodeBackward = d, t.selectNodeForward = _, t.selectParentNode = function (e, t) {
    var n,
      r = e.selection,
      a = r.$from,
      o = r.to,
      s = a.sharedDepth(o);
    return 0 != s && (n = a.before(s), t && t(e.tr.setSelection(i.NodeSelection.create(e.doc, n))), !0);
  }, t.selectTextblockEnd = T, t.selectTextblockStart = S, t.setBlockType = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return function (n, r) {
      for (var a = !1, i = 0; i < n.selection.ranges.length && !a; i++) {
        var o = n.selection.ranges[i],
          s = o.$from.pos,
          l = o.$to.pos;
        n.doc.nodesBetween(s, l, function (r, i) {
          if (a) return !1;
          if (r.isTextblock && !r.hasMarkup(e, t)) if (r.type == e) a = !0;else {
            var o = n.doc.resolve(i),
              s = o.index();
            a = o.parent.canReplaceWith(s, s + 1, e);
          }
        });
      }
      if (!a) return !1;
      if (r) {
        for (var c = n.tr, u = 0; u < n.selection.ranges.length; u++) {
          var d = n.selection.ranges[u],
            p = d.$from.pos,
            f = d.$to.pos;
          c.setBlockType(p, f, e, t);
        }
        r(c.scrollIntoView());
      }
      return !0;
    };
  }, t.splitBlock = w, t.splitBlockAs = b, t.splitBlockKeepMarks = function (e, t) {
    return w(e, t && function (n) {
      var r = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
      r && n.ensureMarks(r), t(n);
    });
  }, t.toggleMark = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = !1 !== (n && n.removeWhenPresent),
      a = !1 !== (n && n.enterInlineAtoms),
      o = !(n && n.includeWhitespace);
    return function (n, s) {
      var l = n.selection,
        c = l.empty,
        u = l.$cursor,
        d = l.ranges;
      if (c && !u || !function (e, t, n, r) {
        for (var a, i = function () {
            var a = t[o],
              i = a.$from,
              s = a.$to,
              l = 0 == i.depth && e.inlineContent && e.type.allowsMarkType(n);
            if (e.nodesBetween(i.pos, s.pos, function (e, t) {
              if (l || !r && e.isAtom && e.isInline && t >= i.pos && t + e.nodeSize <= s.pos) return !1;
              l = e.inlineContent && e.type.allowsMarkType(n);
            }), l) return {
              v: !0
            };
          }, o = 0; o < t.length; o++) if (a = i()) return a.v;
        return !1;
      }(n.doc, d, e, a)) return !1;
      if (s) if (u) e.isInSet(n.storedMarks || u.marks()) ? s(n.tr.removeStoredMark(e)) : s(n.tr.addStoredMark(e.create(t)));else {
        var p,
          f = n.tr;
        a || (d = function (e) {
          for (var t = [], n = function () {
              var n = e[r],
                a = n.$from,
                o = n.$to;
              a.doc.nodesBetween(a.pos, o.pos, function (e, n) {
                if (e.isAtom && e.content.size && e.isInline && n >= a.pos && n + e.nodeSize <= o.pos) return n + 1 > a.pos && t.push(new i.SelectionRange(a, a.doc.resolve(n + 1))), a = a.doc.resolve(n + 1 + e.content.size), !1;
              }), a.pos < o.pos && t.push(new i.SelectionRange(a, o));
            }, r = 0; r < e.length; r++) n();
          return t;
        }(d)), p = r ? !d.some(function (t) {
          return n.doc.rangeHasMark(t.$from.pos, t.$to.pos, e);
        }) : !d.every(function (t) {
          var n = !1;
          return f.doc.nodesBetween(t.$from.pos, t.$to.pos, function (r, a, i) {
            if (n) return !1;
            n = !e.isInSet(r.marks) && !!i && i.type.allowsMarkType(e) && !(r.isText && /^\s*$/.test(r.textBetween(Math.max(0, t.$from.pos - a), Math.min(r.nodeSize, t.$to.pos - a))));
          }), !n;
        });
        for (var h = 0; h < d.length; h++) {
          var _ = d[h],
            m = _.$from,
            A = _.$to;
          if (p) {
            var g = m.pos,
              y = A.pos,
              v = m.nodeAfter,
              E = A.nodeBefore,
              b = o && v && v.isText ? /^\s*/.exec(v.text)[0].length : 0,
              w = o && E && E.isText ? /\s*$/.exec(E.text)[0].length : 0;
            g + b < y && (g += b, y -= w), f.addMark(g, y, e.create(t));
          } else f.removeMark(m.pos, A.pos, e);
        }
        s(f.scrollIntoView());
      }
      return !0;
    };
  }, t.wrapIn = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return function (n, a) {
      var i = n.selection,
        o = i.$from,
        s = i.$to,
        l = o.blockRange(s),
        c = l && r.findWrapping(l, e, t);
      return !!c && (a && a(n.tr.wrap(l, c).scrollIntoView()), !0);
    };
  };
});
