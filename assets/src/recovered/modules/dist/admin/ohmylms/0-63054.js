// Reconstructed Webpack factory 63054; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.selectTable = t.selectRow = t.selectColumn = t.findCellClosestToPos = t.findParentNodeClosestToPos = t.getCellsInTable = t.getCellsInRow = t.getCellsInColumn = t.isTableSelected = t.isRowSelected = t.isColumnSelected = t.isCellSelection = t.findTable = t.isRectSelected = void 0;
  var r = n(99248),
    a = n(8812);
  t.isRectSelected = function (e) {
    return function (t) {
      for (var n = a.TableMap.get(t.$anchorCell.node(-1)), r = t.$anchorCell.start(-1), o = n.cellsInRect(e), i = n.cellsInRect(n.rectBetween(t.$anchorCell.pos - r, t.$headCell.pos - r)), l = 0, c = o.length; l < c; l += 1) if (-1 === i.indexOf(o[l])) return !1;
      return !0;
    };
  }, t.findTable = function (e) {
    return (0, r.findParentNode)(function (e) {
      return e.type.spec.tableRole && "table" === e.type.spec.tableRole;
    })(e);
  }, t.isCellSelection = function (e) {
    return e instanceof a.CellSelection;
  }, t.isColumnSelected = function (e) {
    return function (n) {
      if ((0, t.isCellSelection)(n)) {
        var r = a.TableMap.get(n.$anchorCell.node(-1));
        return (0, t.isRectSelected)({
          left: e,
          right: e + 1,
          top: 0,
          bottom: r.height
        })(n);
      }
      return !1;
    };
  }, t.isRowSelected = function (e) {
    return function (n) {
      if ((0, t.isCellSelection)(n)) {
        var r = a.TableMap.get(n.$anchorCell.node(-1));
        return (0, t.isRectSelected)({
          left: 0,
          right: r.width,
          top: e,
          bottom: e + 1
        })(n);
      }
      return !1;
    };
  }, t.isTableSelected = function (e) {
    if ((0, t.isCellSelection)(e)) {
      var n = a.TableMap.get(e.$anchorCell.node(-1));
      return (0, t.isRectSelected)({
        left: 0,
        right: n.width,
        top: 0,
        bottom: n.height
      })(e);
    }
    return !1;
  }, t.getCellsInColumn = function (e) {
    return function (n) {
      var r = (0, t.findTable)(n);
      if (r) {
        var o = a.TableMap.get(r.node);
        return (Array.isArray(e) ? e : Array.from([e])).reduce(function (e, t) {
          if (t >= 0 && t <= o.width - 1) {
            var n = o.cellsInRect({
              left: t,
              right: t + 1,
              top: 0,
              bottom: o.height
            });
            return e.concat(n.map(function (e) {
              var t = r.node.nodeAt(e),
                n = e + r.start;
              return {
                pos: n,
                start: n + 1,
                node: t
              };
            }));
          }
          return e;
        }, []);
      }
      return null;
    };
  }, t.getCellsInRow = function (e) {
    return function (n) {
      var r = (0, t.findTable)(n);
      if (r) {
        var o = a.TableMap.get(r.node);
        return (Array.isArray(e) ? e : Array.from([e])).reduce(function (e, t) {
          if (t >= 0 && t <= o.height - 1) {
            var n = o.cellsInRect({
              left: 0,
              right: o.width,
              top: t,
              bottom: t + 1
            });
            return e.concat(n.map(function (e) {
              var t = r.node.nodeAt(e),
                n = e + r.start;
              return {
                pos: n,
                start: n + 1,
                node: t
              };
            }));
          }
          return e;
        }, []);
      }
      return null;
    };
  }, t.getCellsInTable = function (e) {
    var n = (0, t.findTable)(e);
    if (n) {
      var r = a.TableMap.get(n.node);
      return r.cellsInRect({
        left: 0,
        right: r.width,
        top: 0,
        bottom: r.height
      }).map(function (e) {
        var t = n.node.nodeAt(e),
          r = e + n.start;
        return {
          pos: r,
          start: r + 1,
          node: t
        };
      });
    }
    return null;
  }, t.findParentNodeClosestToPos = function (e, t) {
    for (var n = e.depth; n > 0; n -= 1) {
      var r = e.node(n);
      if (t(r)) return {
        pos: n > 0 ? e.before(n) : 0,
        start: e.start(n),
        depth: n,
        node: r
      };
    }
    return null;
  }, t.findCellClosestToPos = function (e) {
    return (0, t.findParentNodeClosestToPos)(e, function (e) {
      return e.type.spec.tableRole && /cell/i.test(e.type.spec.tableRole);
    });
  };
  var o = function (e) {
    return function (n) {
      return function (r) {
        var o = (0, t.findTable)(r.selection),
          i = "row" === e;
        if (o) {
          var l = a.TableMap.get(o.node);
          if (n >= 0 && n < (i ? l.height : l.width)) {
            var c = i ? 0 : n,
              u = i ? n : 0,
              s = i ? l.width : n + 1,
              d = i ? n + 1 : l.height,
              m = l.cellsInRect({
                left: c,
                top: u,
                right: i ? s : c + 1,
                bottom: i ? u + 1 : d
              }),
              p = d - u === 1 ? m : l.cellsInRect({
                left: i ? c : s - 1,
                top: i ? d - 1 : u,
                right: s,
                bottom: d
              }),
              f = o.start + m[0],
              v = o.start + p[p.length - 1],
              g = r.doc.resolve(f),
              h = r.doc.resolve(v);
            return r.setSelection(new a.CellSelection(h, g));
          }
        }
        return r;
      };
    };
  };
  t.selectColumn = o("column"), t.selectRow = o("row"), t.selectTable = function (e) {
    var n = (0, t.findTable)(e.selection);
    if (n) {
      var r = a.TableMap.get(n.node).map;
      if (r && r.length) {
        var o = n.start + r[0],
          i = n.start + r[r.length - 1],
          l = e.doc.resolve(o),
          c = e.doc.resolve(i);
        return e.setSelection(new a.CellSelection(c, l));
      }
    }
    return e;
  };
});
