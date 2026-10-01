// Reconstructed Webpack factory 27610; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  var r,
    a = Object.defineProperty,
    i = Object.getOwnPropertyDescriptor,
    o = Object.getOwnPropertyNames,
    s = Object.prototype.hasOwnProperty,
    l = {};
  ((e, t) => {
    for (var n in t) a(e, n, {
      get: t[n],
      enumerable: !0
    });
  })(l, {
    CellBookmark: () => N,
    CellSelection: () => B,
    ResizeState: () => tt,
    TableMap: () => _,
    TableView: () => Ze,
    __clipCells: () => Re,
    __insertCells: () => Ue,
    __pastedCells: () => Pe,
    addColSpan: () => L,
    addColumn: () => ie,
    addColumnAfter: () => se,
    addColumnBefore: () => oe,
    addRow: () => de,
    addRowAfter: () => fe,
    addRowBefore: () => pe,
    cellAround: () => w,
    cellNear: () => M,
    colCount: () => D,
    columnIsHeader: () => R,
    columnResizing: () => et,
    columnResizingPluginKey: () => Je,
    deleteCellSelection: () => Te,
    deleteColumn: () => ce,
    deleteRow: () => _e,
    deleteTable: () => Se,
    findCell: () => x,
    findCellPos: () => Z,
    findCellRange: () => q,
    findTable: () => $,
    fixTables: () => H,
    fixTablesKey: () => F,
    goToNextCell: () => Me,
    handlePaste: () => Ve,
    inSameTable: () => k,
    isInTable: () => C,
    mergeCells: () => Ae,
    moveCellForward: () => T,
    moveTableColumn: () => xe,
    moveTableRow: () => ke,
    nextCell: () => I,
    pointsAtCell: () => S,
    removeColSpan: () => P,
    removeColumn: () => le,
    removeRow: () => he,
    rowIsHeader: () => ue,
    selectedRect: () => ae,
    selectionCell: () => O,
    setCellAttr: () => ve,
    splitCell: () => ge,
    splitCellWithType: () => ye,
    tableEditing: () => st,
    tableEditingKey: () => b,
    tableNodeTypes: () => E,
    tableNodes: () => v,
    toggleHeader: () => be,
    toggleHeaderCell: () => Oe,
    toggleHeaderColumn: () => Ce,
    toggleHeaderRow: () => we,
    updateColumnsOnResize: () => Xe
  }), e.exports = (r = l, ((e, t, n, r) => {
    if (t && "object" == typeof t || "function" == typeof t) for (let n of o(t)) s.call(e, n) || undefined === n || a(e, n, {
      get: () => t[n],
      enumerable: !(r = i(t, n)) || r.enumerable
    });
    return e;
  })(a({}, "__esModule", {
    value: !0
  }), r));
  var c,
    u,
    d = n(37820),
    p = n(77712),
    f = n(37820),
    h = n(49454);
  if ("undefined" != typeof WeakMap) {
    let e = new WeakMap();
    c = t => e.get(t), u = (t, n) => (e.set(t, n), n);
  } else {
    const e = [],
      t = 10;
    let n = 0;
    c = t => {
      for (let n = 0; n < e.length; n += 2) if (e[n] == t) return e[n + 1];
    }, u = (r, a) => (n == t && (n = 0), e[n++] = r, e[n++] = a);
  }
  var _ = class {
    constructor(e, t, n, r) {
      this.width = e, this.height = t, this.map = n, this.problems = r;
    }
    findCell(e) {
      for (let t = 0; t < this.map.length; t++) {
        const n = this.map[t];
        if (n != e) continue;
        const r = t % this.width,
          a = t / this.width | 0;
        let i = r + 1,
          o = a + 1;
        for (let e = 1; i < this.width && this.map[t + e] == n; e++) i++;
        for (let e = 1; o < this.height && this.map[t + this.width * e] == n; e++) o++;
        return {
          left: r,
          top: a,
          right: i,
          bottom: o
        };
      }
      throw new RangeError(`No cell with offset ${e} found`);
    }
    colCount(e) {
      for (let t = 0; t < this.map.length; t++) if (this.map[t] == e) return t % this.width;
      throw new RangeError(`No cell with offset ${e} found`);
    }
    nextCell(e, t, n) {
      const {
        left: r,
        right: a,
        top: i,
        bottom: o
      } = this.findCell(e);
      return "horiz" == t ? (n < 0 ? 0 == r : a == this.width) ? null : this.map[i * this.width + (n < 0 ? r - 1 : a)] : (n < 0 ? 0 == i : o == this.height) ? null : this.map[r + this.width * (n < 0 ? i - 1 : o)];
    }
    rectBetween(e, t) {
      const {
          left: n,
          right: r,
          top: a,
          bottom: i
        } = this.findCell(e),
        {
          left: o,
          right: s,
          top: l,
          bottom: c
        } = this.findCell(t);
      return {
        left: Math.min(n, o),
        top: Math.min(a, l),
        right: Math.max(r, s),
        bottom: Math.max(i, c)
      };
    }
    cellsInRect(e) {
      const t = [],
        n = {};
      for (let r = e.top; r < e.bottom; r++) for (let a = e.left; a < e.right; a++) {
        const i = r * this.width + a,
          o = this.map[i];
        n[o] || (n[o] = !0, a == e.left && a && this.map[i - 1] == o || r == e.top && r && this.map[i - this.width] == o || t.push(o));
      }
      return t;
    }
    positionAt(e, t, n) {
      for (let r = 0, a = 0;; r++) {
        const i = a + n.child(r).nodeSize;
        if (r == e) {
          let n = t + e * this.width;
          const r = (e + 1) * this.width;
          for (; n < r && this.map[n] < a;) n++;
          return n == r ? i - 1 : this.map[n];
        }
        a = i;
      }
    }
    static get(e) {
      return c(e) || u(e, function (e) {
        if ("table" != e.type.spec.tableRole) throw new RangeError("Not a table node: " + e.type.name);
        const t = function (e) {
            let t = -1,
              n = !1;
            for (let r = 0; r < e.childCount; r++) {
              const a = e.child(r);
              let i = 0;
              if (n) for (let t = 0; t < r; t++) {
                const n = e.child(t);
                for (let e = 0; e < n.childCount; e++) {
                  const a = n.child(e);
                  t + a.attrs.rowspan > r && (i += a.attrs.colspan);
                }
              }
              for (let e = 0; e < a.childCount; e++) {
                const t = a.child(e);
                i += t.attrs.colspan, t.attrs.rowspan > 1 && (n = !0);
              }
              -1 == t ? t = i : t != i && (t = Math.max(t, i));
            }
            return t;
          }(e),
          n = e.childCount,
          r = [];
        let a = 0,
          i = null;
        const o = [];
        for (let e = 0, a = t * n; e < a; e++) r[e] = 0;
        for (let s = 0, l = 0; s < n; s++) {
          const c = e.child(s);
          l++;
          for (let e = 0;; e++) {
            for (; a < r.length && 0 != r[a];) a++;
            if (e == c.childCount) break;
            const u = c.child(e),
              {
                colspan: d,
                rowspan: p,
                colwidth: f
              } = u.attrs;
            for (let e = 0; e < p; e++) {
              if (e + s >= n) {
                (i || (i = [])).push({
                  type: "overlong_rowspan",
                  pos: l,
                  n: p - e
                });
                break;
              }
              const c = a + e * t;
              for (let e = 0; e < d; e++) {
                0 == r[c + e] ? r[c + e] = l : (i || (i = [])).push({
                  type: "collision",
                  row: s,
                  pos: l,
                  n: d - e
                });
                const n = f && f[e];
                if (n) {
                  const r = (c + e) % t * 2,
                    a = o[r];
                  null == a || a != n && 1 == o[r + 1] ? (o[r] = n, o[r + 1] = 1) : a == n && o[r + 1]++;
                }
              }
            }
            a += d, l += u.nodeSize;
          }
          const u = (s + 1) * t;
          let d = 0;
          for (; a < u;) 0 == r[a++] && d++;
          d && (i || (i = [])).push({
            type: "missing",
            row: s,
            n: d
          }), l++;
        }
        0 !== t && 0 !== n || (i || (i = [])).push({
          type: "zero_sized"
        });
        const s = new _(t, n, r, i);
        let l = !1;
        for (let e = 0; !l && e < o.length; e += 2) null != o[e] && o[e + 1] < n && (l = !0);
        return l && function (e, t, n) {
          e.problems || (e.problems = []);
          const r = {};
          for (let a = 0; a < e.map.length; a++) {
            const i = e.map[a];
            if (r[i]) continue;
            r[i] = !0;
            const o = n.nodeAt(i);
            if (!o) throw new RangeError(`No cell with offset ${i} found`);
            let s = null;
            const l = o.attrs;
            for (let n = 0; n < l.colspan; n++) {
              const r = t[(a + n) % e.width * 2];
              null == r || l.colwidth && l.colwidth[n] == r || ((s || (s = m(l)))[n] = r);
            }
            s && e.problems.unshift({
              type: "colwidth mismatch",
              pos: i,
              colwidth: s
            });
          }
        }(s, o, e), s;
      }(e));
    }
  };
  function m(e) {
    if (e.colwidth) return e.colwidth.slice();
    const t = [];
    for (let n = 0; n < e.colspan; n++) t.push(0);
    return t;
  }
  function A(e, t) {
    if ("string" == typeof e) return {};
    const n = e.getAttribute("data-colwidth"),
      r = n && /^\d+(,\d+)*$/.test(n) ? n.split(",").map(e => Number(e)) : null,
      a = Number(e.getAttribute("colspan") || 1),
      i = {
        colspan: a,
        rowspan: Number(e.getAttribute("rowspan") || 1),
        colwidth: r && r.length == a ? r : null
      };
    for (const n in t) {
      const r = t[n].getFromDOM,
        a = r && r(e);
      null != a && (i[n] = a);
    }
    return i;
  }
  function g(e, t) {
    const n = {};
    1 != e.attrs.colspan && (n.colspan = e.attrs.colspan), 1 != e.attrs.rowspan && (n.rowspan = e.attrs.rowspan), e.attrs.colwidth && (n["data-colwidth"] = e.attrs.colwidth.join(","));
    for (const r in t) {
      const a = t[r].setDOMAttr;
      a && a(e.attrs[r], n);
    }
    return n;
  }
  function y(e) {
    if (null !== e) {
      if (!Array.isArray(e)) throw new TypeError("colwidth must be null or an array");
      for (const t of e) if ("number" != typeof t) throw new TypeError("colwidth must be null or an array of numbers");
    }
  }
  function v(e) {
    const t = e.cellAttributes || {},
      n = {
        colspan: {
          default: 1,
          validate: "number"
        },
        rowspan: {
          default: 1,
          validate: "number"
        },
        colwidth: {
          default: null,
          validate: y
        }
      };
    for (const e in t) n[e] = {
      default: t[e].default,
      validate: t[e].validate
    };
    return {
      table: {
        content: "table_row+",
        tableRole: "table",
        isolating: !0,
        group: e.tableGroup,
        parseDOM: [{
          tag: "table"
        }],
        toDOM: () => ["table", ["tbody", 0]]
      },
      table_row: {
        content: "(table_cell | table_header)*",
        tableRole: "row",
        parseDOM: [{
          tag: "tr"
        }],
        toDOM: () => ["tr", 0]
      },
      table_cell: {
        content: e.cellContent,
        attrs: n,
        tableRole: "cell",
        isolating: !0,
        parseDOM: [{
          tag: "td",
          getAttrs: e => A(e, t)
        }],
        toDOM: e => ["td", g(e, t), 0]
      },
      table_header: {
        content: e.cellContent,
        attrs: n,
        tableRole: "header_cell",
        isolating: !0,
        parseDOM: [{
          tag: "th",
          getAttrs: e => A(e, t)
        }],
        toDOM: e => ["th", g(e, t), 0]
      }
    };
  }
  function E(e) {
    let t = e.cached.tableNodeTypes;
    if (!t) {
      t = e.cached.tableNodeTypes = {};
      for (const n in e.nodes) {
        const r = e.nodes[n],
          a = r.spec.tableRole;
        a && (t[a] = r);
      }
    }
    return t;
  }
  var b = new (n(37820).PluginKey)("selectingCells");
  function w(e) {
    for (let t = e.depth - 1; t > 0; t--) if ("row" == e.node(t).type.spec.tableRole) return e.node(0).resolve(e.before(t + 1));
    return null;
  }
  function C(e) {
    const t = e.selection.$head;
    for (let e = t.depth; e > 0; e--) if ("row" == t.node(e).type.spec.tableRole) return !0;
    return !1;
  }
  function O(e) {
    const t = e.selection;
    if ("$anchorCell" in t && t.$anchorCell) return t.$anchorCell.pos > t.$headCell.pos ? t.$anchorCell : t.$headCell;
    if ("node" in t && t.node && "cell" == t.node.type.spec.tableRole) return t.$anchor;
    const n = w(t.$head) || M(t.$head);
    if (n) return n;
    throw new RangeError(`No cell found around position ${t.head}`);
  }
  function M(e) {
    for (let t = e.nodeAfter, n = e.pos; t; t = t.firstChild, n++) {
      const r = t.type.spec.tableRole;
      if ("cell" == r || "header_cell" == r) return e.doc.resolve(n);
    }
    for (let t = e.nodeBefore, n = e.pos; t; t = t.lastChild, n--) {
      const r = t.type.spec.tableRole;
      if ("cell" == r || "header_cell" == r) return e.doc.resolve(n - t.nodeSize);
    }
  }
  function S(e) {
    return "row" == e.parent.type.spec.tableRole && !!e.nodeAfter;
  }
  function T(e) {
    return e.node(0).resolve(e.pos + e.nodeAfter.nodeSize);
  }
  function k(e, t) {
    return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
  }
  function x(e) {
    return _.get(e.node(-1)).findCell(e.pos - e.start(-1));
  }
  function D(e) {
    return _.get(e.node(-1)).colCount(e.pos - e.start(-1));
  }
  function I(e, t, n) {
    const r = e.node(-1),
      a = _.get(r),
      i = e.start(-1),
      o = a.nextCell(e.pos - i, t, n);
    return null == o ? null : e.node(0).resolve(i + o);
  }
  function P(e, t, n = 1) {
    const r = {
      ...e,
      colspan: e.colspan - n
    };
    return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(t, n), r.colwidth.some(e => e > 0) || (r.colwidth = null)), r;
  }
  function L(e, t, n = 1) {
    const r = {
      ...e,
      colspan: e.colspan + n
    };
    if (r.colwidth) {
      r.colwidth = r.colwidth.slice();
      for (let e = 0; e < n; e++) r.colwidth.splice(t, 0, 0);
    }
    return r;
  }
  function R(e, t, n) {
    const r = E(t.type.schema).header_cell;
    for (let a = 0; a < e.height; a++) if (t.nodeAt(e.map[n + a * e.width]).type != r) return !1;
    return !0;
  }
  var B = class e extends f.Selection {
    constructor(e, t = e) {
      const n = e.node(-1),
        r = _.get(n),
        a = e.start(-1),
        i = r.rectBetween(e.pos - a, t.pos - a),
        o = e.node(0),
        s = r.cellsInRect(i).filter(e => e != t.pos - a);
      s.unshift(t.pos - a);
      const l = s.map(e => {
        const t = n.nodeAt(e);
        if (!t) throw RangeError(`No cell with offset ${e} found`);
        const r = a + e + 1;
        return new f.SelectionRange(o.resolve(r), o.resolve(r + t.content.size));
      });
      super(l[0].$from, l[0].$to, l), this.$anchorCell = e, this.$headCell = t;
    }
    map(t, n) {
      const r = t.resolve(n.map(this.$anchorCell.pos)),
        a = t.resolve(n.map(this.$headCell.pos));
      if (S(r) && S(a) && k(r, a)) {
        const t = this.$anchorCell.node(-1) != r.node(-1);
        return t && this.isRowSelection() ? e.rowSelection(r, a) : t && this.isColSelection() ? e.colSelection(r, a) : new e(r, a);
      }
      return f.TextSelection.between(r, a);
    }
    content() {
      const e = this.$anchorCell.node(-1),
        t = _.get(e),
        n = this.$anchorCell.start(-1),
        r = t.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n),
        a = {},
        i = [];
      for (let n = r.top; n < r.bottom; n++) {
        const o = [];
        for (let i = n * t.width + r.left, s = r.left; s < r.right; s++, i++) {
          const n = t.map[i];
          if (a[n]) continue;
          a[n] = !0;
          const s = t.findCell(n);
          let l = e.nodeAt(n);
          if (!l) throw RangeError(`No cell with offset ${n} found`);
          const c = r.left - s.left,
            u = s.right - r.right;
          if (c > 0 || u > 0) {
            let e = l.attrs;
            if (c > 0 && (e = P(e, 0, c)), u > 0 && (e = P(e, e.colspan - u, u)), s.left < r.left) {
              if (l = l.type.createAndFill(e), !l) throw RangeError(`Could not create cell with attrs ${JSON.stringify(e)}`);
            } else l = l.type.create(e, l.content);
          }
          if (s.top < r.top || s.bottom > r.bottom) {
            const e = {
              ...l.attrs,
              rowspan: Math.min(s.bottom, r.bottom) - Math.max(s.top, r.top)
            };
            l = s.top < r.top ? l.type.createAndFill(e) : l.type.create(e, l.content);
          }
          o.push(l);
        }
        i.push(e.child(n).copy(p.Fragment.from(o)));
      }
      const o = this.isColSelection() && this.isRowSelection() ? e : i;
      return new p.Slice(p.Fragment.from(o), 1, 1);
    }
    replace(e, t = p.Slice.empty) {
      const n = e.steps.length,
        r = this.ranges;
      for (let a = 0; a < r.length; a++) {
        const {
            $from: i,
            $to: o
          } = r[a],
          s = e.mapping.slice(n);
        e.replace(s.map(i.pos), s.map(o.pos), a ? p.Slice.empty : t);
      }
      const a = f.Selection.findFrom(e.doc.resolve(e.mapping.slice(n).map(this.to)), -1);
      a && e.setSelection(a);
    }
    replaceWith(e, t) {
      this.replace(e, new p.Slice(p.Fragment.from(t), 0, 0));
    }
    forEachCell(e) {
      const t = this.$anchorCell.node(-1),
        n = _.get(t),
        r = this.$anchorCell.start(-1),
        a = n.cellsInRect(n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
      for (let n = 0; n < a.length; n++) e(t.nodeAt(a[n]), r + a[n]);
    }
    isColSelection() {
      const e = this.$anchorCell.index(-1),
        t = this.$headCell.index(-1);
      if (Math.min(e, t) > 0) return !1;
      const n = e + this.$anchorCell.nodeAfter.attrs.rowspan,
        r = t + this.$headCell.nodeAfter.attrs.rowspan;
      return Math.max(n, r) == this.$headCell.node(-1).childCount;
    }
    static colSelection(t, n = t) {
      const r = t.node(-1),
        a = _.get(r),
        i = t.start(-1),
        o = a.findCell(t.pos - i),
        s = a.findCell(n.pos - i),
        l = t.node(0);
      return o.top <= s.top ? (o.top > 0 && (t = l.resolve(i + a.map[o.left])), s.bottom < a.height && (n = l.resolve(i + a.map[a.width * (a.height - 1) + s.right - 1]))) : (s.top > 0 && (n = l.resolve(i + a.map[s.left])), o.bottom < a.height && (t = l.resolve(i + a.map[a.width * (a.height - 1) + o.right - 1]))), new e(t, n);
    }
    isRowSelection() {
      const e = this.$anchorCell.node(-1),
        t = _.get(e),
        n = this.$anchorCell.start(-1),
        r = t.colCount(this.$anchorCell.pos - n),
        a = t.colCount(this.$headCell.pos - n);
      if (Math.min(r, a) > 0) return !1;
      const i = r + this.$anchorCell.nodeAfter.attrs.colspan,
        o = a + this.$headCell.nodeAfter.attrs.colspan;
      return Math.max(i, o) == t.width;
    }
    eq(t) {
      return t instanceof e && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos;
    }
    static rowSelection(t, n = t) {
      const r = t.node(-1),
        a = _.get(r),
        i = t.start(-1),
        o = a.findCell(t.pos - i),
        s = a.findCell(n.pos - i),
        l = t.node(0);
      return o.left <= s.left ? (o.left > 0 && (t = l.resolve(i + a.map[o.top * a.width])), s.right < a.width && (n = l.resolve(i + a.map[a.width * (s.top + 1) - 1]))) : (s.left > 0 && (n = l.resolve(i + a.map[s.top * a.width])), o.right < a.width && (t = l.resolve(i + a.map[a.width * (o.top + 1) - 1]))), new e(t, n);
    }
    toJSON() {
      return {
        type: "cell",
        anchor: this.$anchorCell.pos,
        head: this.$headCell.pos
      };
    }
    static fromJSON(t, n) {
      return new e(t.resolve(n.anchor), t.resolve(n.head));
    }
    static create(t, n, r = n) {
      return new e(t.resolve(n), t.resolve(r));
    }
    getBookmark() {
      return new N(this.$anchorCell.pos, this.$headCell.pos);
    }
  };
  B.prototype.visible = !1, f.Selection.jsonID("cell", B);
  var N = class e {
    constructor(e, t) {
      this.anchor = e, this.head = t;
    }
    map(t) {
      return new e(t.map(this.anchor), t.map(this.head));
    }
    resolve(e) {
      const t = e.resolve(this.anchor),
        n = e.resolve(this.head);
      return "row" == t.parent.type.spec.tableRole && "row" == n.parent.type.spec.tableRole && t.index() < t.parent.childCount && n.index() < n.parent.childCount && k(t, n) ? new B(t, n) : f.Selection.near(n, 1);
    }
  };
  function U(e) {
    if (!(e.selection instanceof B)) return null;
    const t = [];
    return e.selection.forEachCell((e, n) => {
      t.push(h.Decoration.node(n, n + e.nodeSize, {
        class: "selectedCell"
      }));
    }), h.DecorationSet.create(e.doc, t);
  }
  var F = new (n(37820).PluginKey)("fix-tables");
  function j(e, t, n, r) {
    const a = e.childCount,
      i = t.childCount;
    e: for (let o = 0, s = 0; o < i; o++) {
      const i = t.child(o);
      for (let t = s, r = Math.min(a, o + 3); t < r; t++) if (e.child(t) == i) {
        s = t + 1, n += i.nodeSize;
        continue e;
      }
      r(i, n), s < a && e.child(s).sameMarkup(i) ? j(e.child(s), i, n + 1, r) : i.nodesBetween(0, i.content.size, r, n + 1), n += i.nodeSize;
    }
  }
  function H(e, t) {
    let n;
    const r = (t, r) => {
      "table" == t.type.spec.tableRole && (n = function (e, t, n, r) {
        const a = _.get(t);
        if (!a.problems) return r;
        r || (r = e.tr);
        const i = [];
        for (let e = 0; e < a.height; e++) i.push(0);
        for (let e = 0; e < a.problems.length; e++) {
          const o = a.problems[e];
          if ("collision" == o.type) {
            const e = t.nodeAt(o.pos);
            if (!e) continue;
            const a = e.attrs;
            for (let e = 0; e < a.rowspan; e++) i[o.row + e] += o.n;
            r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, P(a, a.colspan - o.n, o.n));
          } else if ("missing" == o.type) i[o.row] += o.n;else if ("overlong_rowspan" == o.type) {
            const e = t.nodeAt(o.pos);
            if (!e) continue;
            r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
              ...e.attrs,
              rowspan: e.attrs.rowspan - o.n
            });
          } else if ("colwidth mismatch" == o.type) {
            const e = t.nodeAt(o.pos);
            if (!e) continue;
            r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
              ...e.attrs,
              colwidth: o.colwidth
            });
          } else if ("zero_sized" == o.type) {
            const e = r.mapping.map(n);
            r.delete(e, e + t.nodeSize);
          }
        }
        let o, s;
        for (let e = 0; e < i.length; e++) i[e] && (null == o && (o = e), s = e);
        for (let l = 0, c = n + 1; l < a.height; l++) {
          const n = t.child(l),
            a = c + n.nodeSize,
            u = i[l];
          if (u > 0) {
            let t = "cell";
            n.firstChild && (t = n.firstChild.type.spec.tableRole);
            const i = [];
            for (let n = 0; n < u; n++) {
              const n = E(e.schema)[t].createAndFill();
              n && i.push(n);
            }
            const d = 0 != l && o != l - 1 || s != l ? a - 1 : c + 1;
            r.insert(r.mapping.map(d), i);
          }
          c = a;
        }
        return r.setMeta(F, {
          fixTables: !0
        });
      }(e, t, r, n));
    };
    return t ? t.doc != e.doc && j(t.doc, e.doc, 0, r) : e.doc.descendants(r), n;
  }
  var W = n(88136),
    K = n(77712),
    V = n(37820),
    z = n(77712),
    Y = n(37820);
  function Q(e) {
    const t = _.get(e),
      n = [],
      r = t.height,
      a = t.width;
    for (let i = 0; i < r; i++) {
      const r = [];
      for (let n = 0; n < a; n++) {
        const o = i * a + n,
          s = t.map[o];
        if (i > 0) {
          const e = o - a;
          if (s === t.map[e]) {
            r.push(null);
            continue;
          }
        }
        if (n > 0) {
          const e = o - 1;
          if (s === t.map[e]) {
            r.push(null);
            continue;
          }
        }
        r.push(e.nodeAt(s));
      }
      n.push(r);
    }
    return n;
  }
  function G(e, t) {
    const n = [],
      r = _.get(e),
      a = r.height,
      i = r.width;
    for (let o = 0; o < a; o++) {
      const a = e.child(o),
        s = [];
      for (let n = 0; n < i; n++) {
        const a = t[o][n];
        if (!a) continue;
        const i = r.map[o * r.width + n],
          l = e.nodeAt(i);
        if (!l) continue;
        const c = l.type.createChecked(a.attrs, a.content, a.marks);
        s.push(c);
      }
      const l = a.type.createChecked(a.attrs, s, a.marks);
      n.push(l);
    }
    return e.type.createChecked(e.attrs, n, e.marks);
  }
  function $(e) {
    return function (e, t) {
      for (let n = t.depth; n >= 0; n -= 1) {
        const r = t.node(n);
        if (e(r)) return {
          node: r,
          pos: 0 === n ? 0 : t.before(n),
          start: t.start(n),
          depth: n
        };
      }
      return null;
    }(e => "table" === e.type.spec.tableRole, e);
  }
  function q(e, t, n) {
    var r, a;
    if (null == t && null == n && e instanceof B) return [e.$anchorCell, e.$headCell];
    const i = null != (r = null != t ? t : n) ? r : e.anchor,
      o = null != (a = null != n ? n : t) ? a : e.head,
      s = e.$head.doc,
      l = Z(s, i),
      c = Z(s, o);
    return l && c && k(l, c) ? [l, c] : null;
  }
  function Z(e, t) {
    const n = e.resolve(t);
    return w(n) || M(n);
  }
  function X(e, t) {
    const n = $(t.$from);
    if (!n) return;
    const r = _.get(n.node);
    return e < 0 || e > r.width - 1 ? void 0 : r.cellsInRect({
      left: e,
      right: e + 1,
      top: 0,
      bottom: r.height
    }).map(e => {
      const t = n.node.nodeAt(e),
        r = e + n.start;
      return {
        pos: r,
        start: r + 1,
        node: t,
        depth: n.depth + 2
      };
    });
  }
  function J(e, t) {
    const n = $(t.$from);
    if (!n) return;
    const r = _.get(n.node);
    return e < 0 || e > r.height - 1 ? void 0 : r.cellsInRect({
      left: 0,
      right: r.width,
      top: e,
      bottom: e + 1
    }).map(e => {
      const t = n.node.nodeAt(e),
        r = e + n.start;
      return {
        pos: r,
        start: r + 1,
        node: t,
        depth: n.depth + 2
      };
    });
  }
  function ee(e, t, n = t) {
    let r = t,
      a = n;
    for (let n = t; n >= 0; n--) {
      const t = X(n, e.selection);
      t && t.forEach(e => {
        const t = e.node.attrs.colspan + n - 1;
        t >= r && (r = n), t > a && (a = t);
      });
    }
    for (let n = t; n <= a; n++) {
      const t = X(n, e.selection);
      t && t.forEach(e => {
        const t = e.node.attrs.colspan + n - 1;
        e.node.attrs.colspan > 1 && t > a && (a = t);
      });
    }
    const i = [];
    for (let t = r; t <= a; t++) {
      const n = X(t, e.selection);
      n && n.length > 0 && i.push(t);
    }
    r = i[0], a = i[i.length - 1];
    const o = X(r, e.selection),
      s = J(0, e.selection);
    if (!o || !s) return;
    const l = e.doc.resolve(o[o.length - 1].pos);
    let c;
    for (let t = a; t >= r; t--) {
      const n = X(t, e.selection);
      if (n && n.length > 0) {
        for (let e = s.length - 1; e >= 0; e--) if (s[e].pos === n[0].pos) {
          c = n[0];
          break;
        }
        if (c) break;
      }
    }
    return c ? {
      $anchor: l,
      $head: e.doc.resolve(c.pos),
      indexes: i
    } : void 0;
  }
  function te(e, t, n = t) {
    let r = t,
      a = n;
    for (let n = t; n >= 0; n--) {
      const t = J(n, e.selection);
      t && t.forEach(e => {
        const t = e.node.attrs.rowspan + n - 1;
        t >= r && (r = n), t > a && (a = t);
      });
    }
    for (let n = t; n <= a; n++) {
      const t = J(n, e.selection);
      t && t.forEach(e => {
        const t = e.node.attrs.rowspan + n - 1;
        e.node.attrs.rowspan > 1 && t > a && (a = t);
      });
    }
    const i = [];
    for (let t = r; t <= a; t++) {
      const n = J(t, e.selection);
      n && n.length > 0 && i.push(t);
    }
    r = i[0], a = i[i.length - 1];
    const o = J(r, e.selection),
      s = X(0, e.selection);
    if (!o || !s) return;
    const l = e.doc.resolve(o[o.length - 1].pos);
    let c;
    for (let t = a; t >= r; t--) {
      const n = J(t, e.selection);
      if (n && n.length > 0) {
        for (let e = s.length - 1; e >= 0; e--) if (s[e].pos === n[0].pos) {
          c = n[0];
          break;
        }
        if (c) break;
      }
    }
    return c ? {
      $anchor: l,
      $head: e.doc.resolve(c.pos),
      indexes: i
    } : void 0;
  }
  function ne(e, t, n, r) {
    const a = t[0] > n[0] ? -1 : 1,
      i = e.splice(t[0], t.length),
      o = i.length % 2 == 0 ? 1 : 0;
    let s;
    return s = -1 === r && 1 === a ? n[0] - 1 : 1 === r && -1 === a ? n[n.length - 1] - o + 1 : -1 === a ? n[0] : n[n.length - 1] - o, e.splice(s, 0, ...i), e;
  }
  function re(e) {
    return e[0].map((t, n) => e.map(e => e[n]));
  }
  function ae(e) {
    const t = e.selection,
      n = O(e),
      r = n.node(-1),
      a = n.start(-1),
      i = _.get(r);
    return {
      ...(t instanceof B ? i.rectBetween(t.$anchorCell.pos - a, t.$headCell.pos - a) : i.findCell(n.pos - a)),
      tableStart: a,
      map: i,
      table: r
    };
  }
  function ie(e, {
    map: t,
    tableStart: n,
    table: r
  }, a) {
    let i = a > 0 ? -1 : 0;
    R(t, r, a + i) && (i = 0 == a || a == t.width ? null : 0);
    for (let o = 0; o < t.height; o++) {
      const s = o * t.width + a;
      if (a > 0 && a < t.width && t.map[s - 1] == t.map[s]) {
        const i = t.map[s],
          l = r.nodeAt(i);
        e.setNodeMarkup(e.mapping.map(n + i), null, L(l.attrs, a - t.colCount(i))), o += l.attrs.rowspan - 1;
      } else {
        const l = null == i ? E(r.type.schema).cell : r.nodeAt(t.map[s + i]).type,
          c = t.positionAt(o, a, r);
        e.insert(e.mapping.map(n + c), l.createAndFill());
      }
    }
    return e;
  }
  function oe(e, t) {
    if (!C(e)) return !1;
    if (t) {
      const n = ae(e);
      t(ie(e.tr, n, n.left));
    }
    return !0;
  }
  function se(e, t) {
    if (!C(e)) return !1;
    if (t) {
      const n = ae(e);
      t(ie(e.tr, n, n.right));
    }
    return !0;
  }
  function le(e, {
    map: t,
    table: n,
    tableStart: r
  }, a) {
    const i = e.mapping.maps.length;
    for (let o = 0; o < t.height;) {
      const s = o * t.width + a,
        l = t.map[s],
        c = n.nodeAt(l),
        u = c.attrs;
      if (a > 0 && t.map[s - 1] == l || a < t.width - 1 && t.map[s + 1] == l) e.setNodeMarkup(e.mapping.slice(i).map(r + l), null, P(u, a - t.colCount(l)));else {
        const t = e.mapping.slice(i).map(r + l);
        e.delete(t, t + c.nodeSize);
      }
      o += u.rowspan;
    }
  }
  function ce(e, t) {
    if (!C(e)) return !1;
    if (t) {
      const n = ae(e),
        r = e.tr;
      if (0 == n.left && n.right == n.map.width) return !1;
      for (let e = n.right - 1; le(r, n, e), e != n.left; e--) {
        const e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
        if (!e) throw RangeError("No table found");
        n.table = e, n.map = _.get(e);
      }
      t(r);
    }
    return !0;
  }
  function ue(e, t, n) {
    var r;
    const a = E(t.type.schema).header_cell;
    for (let i = 0; i < e.width; i++) if ((null == (r = t.nodeAt(e.map[i + n * e.width])) ? void 0 : r.type) != a) return !1;
    return !0;
  }
  function de(e, {
    map: t,
    tableStart: n,
    table: r
  }, a) {
    var i;
    let o = n;
    for (let e = 0; e < a; e++) o += r.child(e).nodeSize;
    const s = [];
    let l = a > 0 ? -1 : 0;
    ue(t, r, a + l) && (l = 0 == a || a == t.height ? null : 0);
    for (let o = 0, c = t.width * a; o < t.width; o++, c++) if (a > 0 && a < t.height && t.map[c] == t.map[c - t.width]) {
      const a = t.map[c],
        i = r.nodeAt(a).attrs;
      e.setNodeMarkup(n + a, null, {
        ...i,
        rowspan: i.rowspan + 1
      }), o += i.colspan - 1;
    } else {
      const e = null == l ? E(r.type.schema).cell : null == (i = r.nodeAt(t.map[c + l * t.width])) ? void 0 : i.type,
        n = null == e ? void 0 : e.createAndFill();
      n && s.push(n);
    }
    return e.insert(o, E(r.type.schema).row.create(null, s)), e;
  }
  function pe(e, t) {
    if (!C(e)) return !1;
    if (t) {
      const n = ae(e);
      t(de(e.tr, n, n.top));
    }
    return !0;
  }
  function fe(e, t) {
    if (!C(e)) return !1;
    if (t) {
      const n = ae(e);
      t(de(e.tr, n, n.bottom));
    }
    return !0;
  }
  function he(e, {
    map: t,
    table: n,
    tableStart: r
  }, a) {
    let i = 0;
    for (let e = 0; e < a; e++) i += n.child(e).nodeSize;
    const o = i + n.child(a).nodeSize,
      s = e.mapping.maps.length;
    e.delete(i + r, o + r);
    const l = new Set();
    for (let i = 0, o = a * t.width; i < t.width; i++, o++) {
      const c = t.map[o];
      if (!l.has(c)) if (l.add(c), a > 0 && c == t.map[o - t.width]) {
        const t = n.nodeAt(c).attrs;
        e.setNodeMarkup(e.mapping.slice(s).map(c + r), null, {
          ...t,
          rowspan: t.rowspan - 1
        }), i += t.colspan - 1;
      } else if (a < t.height && c == t.map[o + t.width]) {
        const o = n.nodeAt(c),
          l = o.attrs,
          u = o.type.create({
            ...l,
            rowspan: o.attrs.rowspan - 1
          }, o.content),
          d = t.positionAt(a + 1, i, n);
        e.insert(e.mapping.slice(s).map(r + d), u), i += l.colspan - 1;
      }
    }
  }
  function _e(e, t) {
    if (!C(e)) return !1;
    if (t) {
      const n = ae(e),
        r = e.tr;
      if (0 == n.top && n.bottom == n.map.height) return !1;
      for (let e = n.bottom - 1; he(r, n, e), e != n.top; e--) {
        const e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
        if (!e) throw RangeError("No table found");
        n.table = e, n.map = _.get(n.table);
      }
      t(r);
    }
    return !0;
  }
  function me(e) {
    const t = e.content;
    return 1 == t.childCount && t.child(0).isTextblock && 0 == t.child(0).childCount;
  }
  function Ae(e, t) {
    const n = e.selection;
    if (!(n instanceof B) || n.$anchorCell.pos == n.$headCell.pos) return !1;
    const r = ae(e),
      {
        map: a
      } = r;
    if (function ({
      width: e,
      height: t,
      map: n
    }, r) {
      let a = r.top * e + r.left,
        i = a,
        o = (r.bottom - 1) * e + r.left,
        s = a + (r.right - r.left - 1);
      for (let t = r.top; t < r.bottom; t++) {
        if (r.left > 0 && n[i] == n[i - 1] || r.right < e && n[s] == n[s + 1]) return !0;
        i += e, s += e;
      }
      for (let i = r.left; i < r.right; i++) {
        if (r.top > 0 && n[a] == n[a - e] || r.bottom < t && n[o] == n[o + e]) return !0;
        a++, o++;
      }
      return !1;
    }(a, r)) return !1;
    if (t) {
      const n = e.tr,
        i = {};
      let o,
        s,
        l = z.Fragment.empty;
      for (let e = r.top; e < r.bottom; e++) for (let t = r.left; t < r.right; t++) {
        const c = a.map[e * a.width + t],
          u = r.table.nodeAt(c);
        if (!i[c] && u) if (i[c] = !0, null == o) o = c, s = u;else {
          me(u) || (l = l.append(u.content));
          const e = n.mapping.map(c + r.tableStart);
          n.delete(e, e + u.nodeSize);
        }
      }
      if (null == o || null == s) return !0;
      if (n.setNodeMarkup(o + r.tableStart, null, {
        ...L(s.attrs, s.attrs.colspan, r.right - r.left - s.attrs.colspan),
        rowspan: r.bottom - r.top
      }), l.size) {
        const e = o + 1 + s.content.size,
          t = me(s) ? o + 1 : e;
        n.replaceWith(t + r.tableStart, e + r.tableStart, l);
      }
      n.setSelection(new B(n.doc.resolve(o + r.tableStart))), t(n);
    }
    return !0;
  }
  function ge(e, t) {
    const n = E(e.schema);
    return ye(({
      node: e
    }) => n[e.type.spec.tableRole])(e, t);
  }
  function ye(e) {
    return (t, n) => {
      var r;
      const a = t.selection;
      let i, o;
      if (a instanceof B) {
        if (a.$anchorCell.pos != a.$headCell.pos) return !1;
        i = a.$anchorCell.nodeAfter, o = a.$anchorCell.pos;
      } else {
        if (i = function (e) {
          for (let t = e.depth; t > 0; t--) {
            const n = e.node(t).type.spec.tableRole;
            if ("cell" === n || "header_cell" === n) return e.node(t);
          }
          return null;
        }(a.$from), !i) return !1;
        o = null == (r = w(a.$from)) ? void 0 : r.pos;
      }
      if (null == i || null == o) return !1;
      if (1 == i.attrs.colspan && 1 == i.attrs.rowspan) return !1;
      if (n) {
        let r = i.attrs;
        const s = [],
          l = r.colwidth;
        r.rowspan > 1 && (r = {
          ...r,
          rowspan: 1
        }), r.colspan > 1 && (r = {
          ...r,
          colspan: 1
        });
        const c = ae(t),
          u = t.tr;
        for (let e = 0; e < c.right - c.left; e++) s.push(l ? {
          ...r,
          colwidth: l && l[e] ? [l[e]] : null
        } : r);
        let d;
        for (let t = c.top; t < c.bottom; t++) {
          let n = c.map.positionAt(t, c.left, c.table);
          t == c.top && (n += i.nodeSize);
          for (let r = c.left, a = 0; r < c.right; r++, a++) r == c.left && t == c.top || u.insert(d = u.mapping.map(n + c.tableStart, 1), e({
            node: i,
            row: t,
            col: r
          }).createAndFill(s[a]));
        }
        u.setNodeMarkup(o, e({
          node: i,
          row: c.top,
          col: c.left
        }), s[0]), a instanceof B && u.setSelection(new B(u.doc.resolve(a.$anchorCell.pos), d ? u.doc.resolve(d) : void 0)), n(u);
      }
      return !0;
    };
  }
  function ve(e, t) {
    return function (n, r) {
      if (!C(n)) return !1;
      const a = O(n);
      if (a.nodeAfter.attrs[e] === t) return !1;
      if (r) {
        const i = n.tr;
        n.selection instanceof B ? n.selection.forEachCell((n, r) => {
          n.attrs[e] !== t && i.setNodeMarkup(r, null, {
            ...n.attrs,
            [e]: t
          });
        }) : i.setNodeMarkup(a.pos, null, {
          ...a.nodeAfter.attrs,
          [e]: t
        }), r(i);
      }
      return !0;
    };
  }
  function Ee(e, t, n) {
    const r = t.map.cellsInRect({
      left: 0,
      top: 0,
      right: "row" == e ? t.map.width : 1,
      bottom: "column" == e ? t.map.height : 1
    });
    for (let e = 0; e < r.length; e++) {
      const a = t.table.nodeAt(r[e]);
      if (a && a.type !== n.header_cell) return !1;
    }
    return !0;
  }
  function be(e, t) {
    return (t = t || {
      useDeprecatedLogic: !1
    }).useDeprecatedLogic ? function (e) {
      return function (t, n) {
        if (!C(t)) return !1;
        if (n) {
          const r = E(t.schema),
            a = ae(t),
            i = t.tr,
            o = a.map.cellsInRect("column" == e ? {
              left: a.left,
              top: 0,
              right: a.right,
              bottom: a.map.height
            } : "row" == e ? {
              left: 0,
              top: a.top,
              right: a.map.width,
              bottom: a.bottom
            } : a),
            s = o.map(e => a.table.nodeAt(e));
          for (let e = 0; e < o.length; e++) s[e].type == r.header_cell && i.setNodeMarkup(a.tableStart + o[e], r.cell, s[e].attrs);
          if (0 == i.steps.length) for (let e = 0; e < o.length; e++) i.setNodeMarkup(a.tableStart + o[e], r.header_cell, s[e].attrs);
          n(i);
        }
        return !0;
      };
    }(e) : function (t, n) {
      if (!C(t)) return !1;
      if (n) {
        const r = E(t.schema),
          a = ae(t),
          i = t.tr,
          o = Ee("row", a, r),
          s = Ee("column", a, r),
          l = ("column" === e ? o : "row" === e && s) ? 1 : 0,
          c = "column" == e ? {
            left: 0,
            top: l,
            right: 1,
            bottom: a.map.height
          } : "row" == e ? {
            left: l,
            top: 0,
            right: a.map.width,
            bottom: 1
          } : a,
          u = "column" == e ? s ? r.cell : r.header_cell : "row" == e ? o ? r.cell : r.header_cell : r.cell;
        a.map.cellsInRect(c).forEach(e => {
          const t = e + a.tableStart,
            n = i.doc.nodeAt(t);
          n && i.setNodeMarkup(t, u, n.attrs);
        }), n(i);
      }
      return !0;
    };
  }
  var we = be("row", {
      useDeprecatedLogic: !0
    }),
    Ce = be("column", {
      useDeprecatedLogic: !0
    }),
    Oe = be("cell", {
      useDeprecatedLogic: !0
    });
  function Me(e) {
    return function (t, n) {
      if (!C(t)) return !1;
      const r = function (e, t) {
        if (t < 0) {
          const t = e.nodeBefore;
          if (t) return e.pos - t.nodeSize;
          for (let t = e.index(-1) - 1, n = e.before(); t >= 0; t--) {
            const r = e.node(-1).child(t),
              a = r.lastChild;
            if (a) return n - 1 - a.nodeSize;
            n -= r.nodeSize;
          }
        } else {
          if (e.index() < e.parent.childCount - 1) return e.pos + e.nodeAfter.nodeSize;
          const t = e.node(-1);
          for (let n = e.indexAfter(-1), r = e.after(); n < t.childCount; n++) {
            const e = t.child(n);
            if (e.childCount) return r + 1;
            r += e.nodeSize;
          }
        }
        return null;
      }(O(t), e);
      if (null == r) return !1;
      if (n) {
        const e = t.doc.resolve(r);
        n(t.tr.setSelection(Y.TextSelection.between(e, T(e))).scrollIntoView());
      }
      return !0;
    };
  }
  function Se(e, t) {
    const n = e.selection.$anchor;
    for (let r = n.depth; r > 0; r--) if ("table" == n.node(r).type.spec.tableRole) return t && t(e.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
    return !1;
  }
  function Te(e, t) {
    const n = e.selection;
    if (!(n instanceof B)) return !1;
    if (t) {
      const r = e.tr,
        a = E(e.schema).cell.createAndFill().content;
      n.forEachCell((e, t) => {
        e.content.eq(a) || r.replace(r.mapping.map(t + 1), r.mapping.map(t + e.nodeSize - 1), new z.Slice(a, 0, 0));
      }), r.docChanged && t(r);
    }
    return !0;
  }
  function ke(e) {
    return (t, n) => {
      const {
          from: r,
          to: a,
          select: i = !0,
          pos: o = t.selection.from
        } = e,
        s = t.tr;
      return !!function (e) {
        var t, n;
        const {
            tr: r,
            originIndex: a,
            targetIndex: i,
            select: o,
            pos: s
          } = e,
          l = $(r.doc.resolve(s));
        if (!l) return !1;
        const c = null == (t = te(r, a)) ? void 0 : t.indexes,
          u = null == (n = te(r, i)) ? void 0 : n.indexes;
        if (!c || !u) return !1;
        if (c.includes(i)) return !1;
        const d = function (e, t, n) {
          let r = Q(e);
          return r = ne(r, t, n, 0), G(e, r);
        }(l.node, c, u);
        if (r.replaceWith(l.pos, l.pos + l.node.nodeSize, d), !o) return !0;
        const p = _.get(d),
          f = l.start,
          h = i,
          m = p.positionAt(h, p.width - 1, d),
          A = r.doc.resolve(f + m),
          g = p.positionAt(h, 0, d),
          y = r.doc.resolve(f + g);
        return r.setSelection(B.rowSelection(A, y)), !0;
      }({
        tr: s,
        originIndex: r,
        targetIndex: a,
        select: i,
        pos: o
      }) && (null == n || n(s), !0);
    };
  }
  function xe(e) {
    return (t, n) => {
      const {
          from: r,
          to: a,
          select: i = !0,
          pos: o = t.selection.from
        } = e,
        s = t.tr;
      return !!function (e) {
        var t, n;
        const {
            tr: r,
            originIndex: a,
            targetIndex: i,
            select: o,
            pos: s
          } = e,
          l = $(r.doc.resolve(s));
        if (!l) return !1;
        const c = null == (t = ee(r, a)) ? void 0 : t.indexes,
          u = null == (n = ee(r, i)) ? void 0 : n.indexes;
        if (!c || !u) return !1;
        if (c.includes(i)) return !1;
        const d = function (e, t, n) {
          let r = re(Q(e));
          return r = ne(r, t, n, 0), r = re(r), G(e, r);
        }(l.node, c, u);
        if (r.replaceWith(l.pos, l.pos + l.node.nodeSize, d), !o) return !0;
        const p = _.get(d),
          f = l.start,
          h = i,
          m = p.positionAt(p.height - 1, h, d),
          A = r.doc.resolve(f + m),
          g = p.positionAt(0, h, d),
          y = r.doc.resolve(f + g);
        return r.setSelection(B.colSelection(A, y)), !0;
      }({
        tr: s,
        originIndex: r,
        targetIndex: a,
        select: i,
        pos: o
      }) && (null == n || n(s), !0);
    };
  }
  var De = n(77712),
    Ie = n(36553);
  function Pe(e) {
    if (!e.size) return null;
    let {
      content: t,
      openStart: n,
      openEnd: r
    } = e;
    for (; 1 == t.childCount && (n > 0 && r > 0 || "table" == t.child(0).type.spec.tableRole);) n--, r--, t = t.child(0).content;
    const a = t.child(0),
      i = a.type.spec.tableRole,
      o = a.type.schema,
      s = [];
    if ("row" == i) for (let e = 0; e < t.childCount; e++) {
      let a = t.child(e).content;
      const i = e ? 0 : Math.max(0, n - 1),
        l = e < t.childCount - 1 ? 0 : Math.max(0, r - 1);
      (i || l) && (a = Le(E(o).row, new De.Slice(a, i, l)).content), s.push(a);
    } else {
      if ("cell" != i && "header_cell" != i) return null;
      s.push(n || r ? Le(E(o).row, new De.Slice(t, n, r)).content : t);
    }
    return function (e, t) {
      const n = [];
      for (let e = 0; e < t.length; e++) {
        const r = t[e];
        for (let t = r.childCount - 1; t >= 0; t--) {
          const {
            rowspan: a,
            colspan: i
          } = r.child(t).attrs;
          for (let t = e; t < e + a; t++) n[t] = (n[t] || 0) + i;
        }
      }
      let r = 0;
      for (let e = 0; e < n.length; e++) r = Math.max(r, n[e]);
      for (let a = 0; a < n.length; a++) if (a >= t.length && t.push(De.Fragment.empty), n[a] < r) {
        const i = E(e).cell.createAndFill(),
          o = [];
        for (let e = n[a]; e < r; e++) o.push(i);
        t[a] = t[a].append(De.Fragment.from(o));
      }
      return {
        height: t.length,
        width: r,
        rows: t
      };
    }(o, s);
  }
  function Le(e, t) {
    const n = e.createAndFill();
    return new Ie.Transform(n).replace(0, n.content.size, t).doc;
  }
  function Re({
    width: e,
    height: t,
    rows: n
  }, r, a) {
    if (e != r) {
      const t = [],
        a = [];
      for (let e = 0; e < n.length; e++) {
        const i = n[e],
          o = [];
        for (let n = t[e] || 0, a = 0; n < r; a++) {
          let s = i.child(a % i.childCount);
          n + s.attrs.colspan > r && (s = s.type.createChecked(P(s.attrs, s.attrs.colspan, n + s.attrs.colspan - r), s.content)), o.push(s), n += s.attrs.colspan;
          for (let n = 1; n < s.attrs.rowspan; n++) t[e + n] = (t[e + n] || 0) + s.attrs.colspan;
        }
        a.push(De.Fragment.from(o));
      }
      n = a, e = r;
    }
    if (t != a) {
      const e = [];
      for (let r = 0, i = 0; r < a; r++, i++) {
        const o = [],
          s = n[i % t];
        for (let e = 0; e < s.childCount; e++) {
          let t = s.child(e);
          r + t.attrs.rowspan > a && (t = t.type.create({
            ...t.attrs,
            rowspan: Math.max(1, a - t.attrs.rowspan)
          }, t.content)), o.push(t);
        }
        e.push(De.Fragment.from(o));
      }
      n = e, t = a;
    }
    return {
      width: e,
      height: t,
      rows: n
    };
  }
  function Be(e, t, n, r, a, i, o, s) {
    if (0 == o || o == t.height) return !1;
    let l = !1;
    for (let c = a; c < i; c++) {
      const a = o * t.width + c,
        i = t.map[a];
      if (t.map[a - t.width] == i) {
        l = !0;
        const a = n.nodeAt(i),
          {
            top: u,
            left: d
          } = t.findCell(i);
        e.setNodeMarkup(e.mapping.slice(s).map(i + r), null, {
          ...a.attrs,
          rowspan: o - u
        }), e.insert(e.mapping.slice(s).map(t.positionAt(o, d, n)), a.type.createAndFill({
          ...a.attrs,
          rowspan: u + a.attrs.rowspan - o
        })), c += a.attrs.colspan - 1;
      }
    }
    return l;
  }
  function Ne(e, t, n, r, a, i, o, s) {
    if (0 == o || o == t.width) return !1;
    let l = !1;
    for (let c = a; c < i; c++) {
      const a = c * t.width + o,
        i = t.map[a];
      if (t.map[a - 1] == i) {
        l = !0;
        const a = n.nodeAt(i),
          u = t.colCount(i),
          d = e.mapping.slice(s).map(i + r);
        e.setNodeMarkup(d, null, P(a.attrs, o - u, a.attrs.colspan - (o - u))), e.insert(d + a.nodeSize, a.type.createAndFill(P(a.attrs, 0, o - u))), c += a.attrs.rowspan - 1;
      }
    }
    return l;
  }
  function Ue(e, t, n, r, a) {
    let i = n ? e.doc.nodeAt(n - 1) : e.doc;
    if (!i) throw new Error("No table found");
    let o = _.get(i);
    const {
        top: s,
        left: l
      } = r,
      c = l + a.width,
      u = s + a.height,
      d = e.tr;
    let p = 0;
    function f() {
      if (i = n ? d.doc.nodeAt(n - 1) : d.doc, !i) throw new Error("No table found");
      o = _.get(i), p = d.mapping.maps.length;
    }
    (function (e, t, n, r, a, i, o) {
      const s = E(e.doc.type.schema);
      let l, c;
      if (a > t.width) for (let i = 0, u = 0; i < t.height; i++) {
        const d = n.child(i);
        u += d.nodeSize;
        const p = [];
        let f;
        f = null == d.lastChild || d.lastChild.type == s.cell ? l || (l = s.cell.createAndFill()) : c || (c = s.header_cell.createAndFill());
        for (let e = t.width; e < a; e++) p.push(f);
        e.insert(e.mapping.slice(o).map(u - 1 + r), p);
      }
      if (i > t.height) {
        const u = [];
        for (let e = 0, r = (t.height - 1) * t.width; e < Math.max(t.width, a); e++) {
          const a = !(e >= t.width) && n.nodeAt(t.map[r + e]).type == s.header_cell;
          u.push(a ? c || (c = s.header_cell.createAndFill()) : l || (l = s.cell.createAndFill()));
        }
        const d = s.row.create(null, De.Fragment.from(u)),
          p = [];
        for (let e = t.height; e < i; e++) p.push(d);
        e.insert(e.mapping.slice(o).map(r + n.nodeSize - 2), p);
      }
      return !(!l && !c);
    })(d, o, i, n, c, u, p) && f(), Be(d, o, i, n, l, c, s, p) && f(), Be(d, o, i, n, l, c, u, p) && f(), Ne(d, o, i, n, s, u, l, p) && f(), Ne(d, o, i, n, s, u, c, p) && f();
    for (let e = s; e < u; e++) {
      const t = o.positionAt(e, l, i),
        r = o.positionAt(e, c, i);
      d.replace(d.mapping.slice(p).map(t + n), d.mapping.slice(p).map(r + n), new De.Slice(a.rows[e - s], 0, 0));
    }
    f(), d.setSelection(new B(d.doc.resolve(n + o.positionAt(s, l, i)), d.doc.resolve(n + o.positionAt(u - 1, c - 1, i)))), t(d);
  }
  var Fe = (0, W.keydownHandler)({
    ArrowLeft: He("horiz", -1),
    ArrowRight: He("horiz", 1),
    ArrowUp: He("vert", -1),
    ArrowDown: He("vert", 1),
    "Shift-ArrowLeft": We("horiz", -1),
    "Shift-ArrowRight": We("horiz", 1),
    "Shift-ArrowUp": We("vert", -1),
    "Shift-ArrowDown": We("vert", 1),
    Backspace: Te,
    "Mod-Backspace": Te,
    Delete: Te,
    "Mod-Delete": Te
  });
  function je(e, t, n) {
    return !n.eq(e.selection) && (t && t(e.tr.setSelection(n).scrollIntoView()), !0);
  }
  function He(e, t) {
    return (n, r, a) => {
      if (!a) return !1;
      const i = n.selection;
      if (i instanceof B) return je(n, r, V.Selection.near(i.$headCell, t));
      if ("horiz" != e && !i.empty) return !1;
      const o = Ye(a, e, t);
      if (null == o) return !1;
      if ("horiz" == e) return je(n, r, V.Selection.near(n.doc.resolve(i.head + t), t));
      {
        const a = n.doc.resolve(o),
          i = I(a, e, t);
        let s;
        return s = i ? V.Selection.near(i, 1) : t < 0 ? V.Selection.near(n.doc.resolve(a.before(-1)), -1) : V.Selection.near(n.doc.resolve(a.after(-1)), 1), je(n, r, s);
      }
    };
  }
  function We(e, t) {
    return (n, r, a) => {
      if (!a) return !1;
      const i = n.selection;
      let o;
      if (i instanceof B) o = i;else {
        const r = Ye(a, e, t);
        if (null == r) return !1;
        o = new B(n.doc.resolve(r));
      }
      const s = I(o.$headCell, e, t);
      return !!s && je(n, r, new B(o.$anchorCell, s));
    };
  }
  function Ke(e, t) {
    const n = w(e.state.doc.resolve(t));
    return !!n && (e.dispatch(e.state.tr.setSelection(new B(n))), !0);
  }
  function Ve(e, t, n) {
    if (!C(e.state)) return !1;
    let r = Pe(n);
    const a = e.state.selection;
    if (a instanceof B) {
      r || (r = {
        width: 1,
        height: 1,
        rows: [K.Fragment.from(Le(E(e.state.schema).cell, n))]
      });
      const t = a.$anchorCell.node(-1),
        i = a.$anchorCell.start(-1),
        o = _.get(t).rectBetween(a.$anchorCell.pos - i, a.$headCell.pos - i);
      return r = Re(r, o.right - o.left, o.bottom - o.top), Ue(e.state, e.dispatch, i, o, r), !0;
    }
    if (r) {
      const t = O(e.state),
        n = t.start(-1);
      return Ue(e.state, e.dispatch, n, _.get(t.node(-1)).findCell(t.pos - n), r), !0;
    }
    return !1;
  }
  function ze(e, t) {
    var n;
    if (t.ctrlKey || t.metaKey) return;
    const r = Qe(e, t.target);
    let a;
    if (t.shiftKey && e.state.selection instanceof B) i(e.state.selection.$anchorCell, t), t.preventDefault();else if (t.shiftKey && r && null != (a = w(e.state.selection.$anchor)) && (null == (n = Ge(e, t)) ? void 0 : n.pos) != a.pos) i(a, t), t.preventDefault();else if (!r) return;
    function i(t, n) {
      let r = Ge(e, n);
      const a = null == b.getState(e.state);
      if (!r || !k(t, r)) {
        if (!a) return;
        r = t;
      }
      const i = new B(t, r);
      if (a || !e.state.selection.eq(i)) {
        const n = e.state.tr.setSelection(i);
        a && n.setMeta(b, t.pos), e.dispatch(n);
      }
    }
    function o() {
      e.root.removeEventListener("mouseup", o), e.root.removeEventListener("dragstart", o), e.root.removeEventListener("mousemove", s), null != b.getState(e.state) && e.dispatch(e.state.tr.setMeta(b, -1));
    }
    function s(n) {
      const a = n,
        s = b.getState(e.state);
      let l;
      if (null != s) l = e.state.doc.resolve(s);else if (Qe(e, a.target) != r && (l = Ge(e, t), !l)) return o();
      l && i(l, a);
    }
    e.root.addEventListener("mouseup", o), e.root.addEventListener("dragstart", o), e.root.addEventListener("mousemove", s);
  }
  function Ye(e, t, n) {
    if (!(e.state.selection instanceof V.TextSelection)) return null;
    const {
      $head: r
    } = e.state.selection;
    for (let a = r.depth - 1; a >= 0; a--) {
      const i = r.node(a);
      if ((n < 0 ? r.index(a) : r.indexAfter(a)) != (n < 0 ? 0 : i.childCount)) return null;
      if ("cell" == i.type.spec.tableRole || "header_cell" == i.type.spec.tableRole) {
        const i = r.before(a),
          o = "vert" == t ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
        return e.endOfTextblock(o) ? i : null;
      }
    }
    return null;
  }
  function Qe(e, t) {
    for (; t && t != e.dom; t = t.parentNode) if ("TD" == t.nodeName || "TH" == t.nodeName) return t;
    return null;
  }
  function Ge(e, t) {
    const n = e.posAtCoords({
      left: t.clientX,
      top: t.clientY
    });
    return n && n ? w(e.state.doc.resolve(n.pos)) : null;
  }
  var $e = n(37820),
    qe = n(49454),
    Ze = class {
      constructor(e, t) {
        this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${t}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Xe(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
      }
      update(e) {
        return e.type == this.node.type && (this.node = e, Xe(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
      }
      ignoreMutation(e) {
        return "attributes" == e.type && (e.target == this.table || this.colgroup.contains(e.target));
      }
    };
  function Xe(e, t, n, r, a, i) {
    var o;
    let s = 0,
      l = !0,
      c = t.firstChild;
    const u = e.firstChild;
    if (u) {
      for (let e = 0, n = 0; e < u.childCount; e++) {
        const {
          colspan: o,
          colwidth: d
        } = u.child(e).attrs;
        for (let e = 0; e < o; e++, n++) {
          const o = a == n ? i : d && d[e],
            u = o ? o + "px" : "";
          if (s += o || r, o || (l = !1), c) c.style.width != u && (c.style.width = u), c = c.nextSibling;else {
            const e = document.createElement("col");
            e.style.width = u, t.appendChild(e);
          }
        }
      }
      for (; c;) {
        const e = c.nextSibling;
        null == (o = c.parentNode) || o.removeChild(c), c = e;
      }
      l ? (n.style.width = s + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = s + "px");
    }
  }
  var Je = new $e.PluginKey("tableColumnResizing");
  function et({
    handleWidth: e = 5,
    cellMinWidth: t = 25,
    defaultCellMinWidth: n = 100,
    View: r = Ze,
    lastColumnResizable: a = !0
  } = {}) {
    const i = new $e.Plugin({
      key: Je,
      state: {
        init(e, t) {
          var a, o;
          const s = null == (o = null == (a = i.spec) ? void 0 : a.props) ? void 0 : o.nodeViews,
            l = E(t.schema).table.name;
          return r && s && (s[l] = (e, t) => new r(e, n, t)), new tt(-1, !1);
        },
        apply: (e, t) => t.apply(e)
      },
      props: {
        attributes: e => {
          const t = Je.getState(e);
          return t && t.activeHandle > -1 ? {
            class: "resize-cursor"
          } : {};
        },
        handleDOMEvents: {
          mousemove: (t, n) => {
            !function (e, t, n, r) {
              if (!e.editable) return;
              const a = Je.getState(e.state);
              if (a && !a.dragging) {
                const i = function (e) {
                  for (; e && "TD" != e.nodeName && "TH" != e.nodeName;) e = e.classList && e.classList.contains("ProseMirror") ? null : e.parentNode;
                  return e;
                }(t.target);
                let o = -1;
                if (i) {
                  const {
                    left: r,
                    right: a
                  } = i.getBoundingClientRect();
                  t.clientX - r <= n ? o = nt(e, t, "left", n) : a - t.clientX <= n && (o = nt(e, t, "right", n));
                }
                if (o != a.activeHandle) {
                  if (!r && -1 !== o) {
                    const t = e.state.doc.resolve(o),
                      n = t.node(-1),
                      r = _.get(n),
                      a = t.start(-1);
                    if (r.colCount(t.pos - a) + t.nodeAfter.attrs.colspan - 1 == r.width - 1) return;
                  }
                  at(e, o);
                }
              }
            }(t, n, e, a);
          },
          mouseleave: e => {
            !function (e) {
              if (!e.editable) return;
              const t = Je.getState(e.state);
              t && t.activeHandle > -1 && !t.dragging && at(e, -1);
            }(e);
          },
          mousedown: (e, r) => {
            !function (e, t, n, r) {
              var a;
              if (!e.editable) return !1;
              const i = null != (a = e.dom.ownerDocument.defaultView) ? a : window,
                o = Je.getState(e.state);
              if (!o || -1 == o.activeHandle || o.dragging) return !1;
              const s = e.state.doc.nodeAt(o.activeHandle),
                l = function (e, t, {
                  colspan: n,
                  colwidth: r
                }) {
                  const a = r && r[r.length - 1];
                  if (a) return a;
                  const i = e.domAtPos(t);
                  let o = i.node.childNodes[i.offset].offsetWidth,
                    s = n;
                  if (r) for (let e = 0; e < n; e++) r[e] && (o -= r[e], s--);
                  return o / s;
                }(e, o.activeHandle, s.attrs);
              function c(t) {
                i.removeEventListener("mouseup", c), i.removeEventListener("mousemove", u);
                const r = Je.getState(e.state);
                (null == r ? void 0 : r.dragging) && (function (e, t, n) {
                  const r = e.state.doc.resolve(t),
                    a = r.node(-1),
                    i = _.get(a),
                    o = r.start(-1),
                    s = i.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1,
                    l = e.state.tr;
                  for (let e = 0; e < i.height; e++) {
                    const t = e * i.width + s;
                    if (e && i.map[t] == i.map[t - i.width]) continue;
                    const r = i.map[t],
                      c = a.nodeAt(r).attrs,
                      u = 1 == c.colspan ? 0 : s - i.colCount(r);
                    if (c.colwidth && c.colwidth[u] == n) continue;
                    const d = c.colwidth ? c.colwidth.slice() : ot(c.colspan);
                    d[u] = n, l.setNodeMarkup(o + r, null, {
                      ...c,
                      colwidth: d
                    });
                  }
                  l.docChanged && e.dispatch(l);
                }(e, r.activeHandle, rt(r.dragging, t, n)), e.dispatch(e.state.tr.setMeta(Je, {
                  setDragging: null
                })));
              }
              function u(t) {
                if (!t.which) return c(t);
                const a = Je.getState(e.state);
                if (a && a.dragging) {
                  const i = rt(a.dragging, t, n);
                  it(e, a.activeHandle, i, r);
                }
              }
              e.dispatch(e.state.tr.setMeta(Je, {
                setDragging: {
                  startX: t.clientX,
                  startWidth: l
                }
              })), it(e, o.activeHandle, l, r), i.addEventListener("mouseup", c), i.addEventListener("mousemove", u), t.preventDefault();
            }(e, r, t, n);
          }
        },
        decorations: e => {
          const t = Je.getState(e);
          if (t && t.activeHandle > -1) return function (e, t) {
            var n;
            const r = [],
              a = e.doc.resolve(t),
              i = a.node(-1);
            if (!i) return qe.DecorationSet.empty;
            const o = _.get(i),
              s = a.start(-1),
              l = o.colCount(a.pos - s) + a.nodeAfter.attrs.colspan - 1;
            for (let t = 0; t < o.height; t++) {
              const a = l + t * o.width;
              if (!(l != o.width - 1 && o.map[a] == o.map[a + 1] || 0 != t && o.map[a] == o.map[a - o.width])) {
                const t = o.map[a],
                  l = s + t + i.nodeAt(t).nodeSize - 1,
                  c = document.createElement("div");
                c.className = "column-resize-handle", (null == (n = Je.getState(e)) ? void 0 : n.dragging) && r.push(qe.Decoration.node(s + t, s + t + i.nodeAt(t).nodeSize, {
                  class: "column-resize-dragging"
                })), r.push(qe.Decoration.widget(l, c));
              }
            }
            return qe.DecorationSet.create(e.doc, r);
          }(e, t.activeHandle);
        },
        nodeViews: {}
      }
    });
    return i;
  }
  var tt = class e {
    constructor(e, t) {
      this.activeHandle = e, this.dragging = t;
    }
    apply(t) {
      const n = this,
        r = t.getMeta(Je);
      if (r && null != r.setHandle) return new e(r.setHandle, !1);
      if (r && void 0 !== r.setDragging) return new e(n.activeHandle, r.setDragging);
      if (n.activeHandle > -1 && t.docChanged) {
        let r = t.mapping.map(n.activeHandle, -1);
        return S(t.doc.resolve(r)) || (r = -1), new e(r, n.dragging);
      }
      return n;
    }
  };
  function nt(e, t, n, r) {
    const a = "right" == n ? -r : r,
      i = e.posAtCoords({
        left: t.clientX + a,
        top: t.clientY
      });
    if (!i) return -1;
    const {
        pos: o
      } = i,
      s = w(e.state.doc.resolve(o));
    if (!s) return -1;
    if ("right" == n) return s.pos;
    const l = _.get(s.node(-1)),
      c = s.start(-1),
      u = l.map.indexOf(s.pos - c);
    return u % l.width == 0 ? -1 : c + l.map[u - 1];
  }
  function rt(e, t, n) {
    const r = t.clientX - e.startX;
    return Math.max(n, e.startWidth + r);
  }
  function at(e, t) {
    e.dispatch(e.state.tr.setMeta(Je, {
      setHandle: t
    }));
  }
  function it(e, t, n, r) {
    const a = e.state.doc.resolve(t),
      i = a.node(-1),
      o = a.start(-1),
      s = _.get(i).colCount(a.pos - o) + a.nodeAfter.attrs.colspan - 1;
    let l = e.domAtPos(a.start(-1)).node;
    for (; l && "TABLE" != l.nodeName;) l = l.parentNode;
    l && Xe(i, l.firstChild, l, r, s, n);
  }
  function ot(e) {
    return Array(e).fill(0);
  }
  function st({
    allowTableNodeSelection: e = !1
  } = {}) {
    return new d.Plugin({
      key: b,
      state: {
        init: () => null,
        apply(e, t) {
          const n = e.getMeta(b);
          if (null != n) return -1 == n ? null : n;
          if (null == t || !e.docChanged) return t;
          const {
            deleted: r,
            pos: a
          } = e.mapping.mapResult(t);
          return r ? null : a;
        }
      },
      props: {
        decorations: U,
        handleDOMEvents: {
          mousedown: ze
        },
        createSelectionBetween: e => null != b.getState(e.state) ? e.state.selection : null,
        handleTripleClick: Ke,
        handleKeyDown: Fe,
        handlePaste: Ve
      },
      appendTransaction: (t, n, r) => function (e, t, n) {
        const r = (t || e).selection,
          a = (t || e).doc;
        let i, o;
        if (r instanceof f.NodeSelection && (o = r.node.type.spec.tableRole)) {
          if ("cell" == o || "header_cell" == o) i = B.create(a, r.from);else if ("row" == o) {
            const e = a.resolve(r.from + 1);
            i = B.rowSelection(e, e);
          } else if (!n) {
            const e = _.get(r.node),
              t = r.from + 1,
              n = t + e.map[e.width * e.height - 1];
            i = B.create(a, t + 1, n);
          }
        } else r instanceof f.TextSelection && function ({
          $from: e,
          $to: t
        }) {
          if (e.pos == t.pos || e.pos < t.pos - 6) return !1;
          let n = e.pos,
            r = t.pos,
            a = e.depth;
          for (; a >= 0 && !(e.after(a + 1) < e.end(a)); a--, n++);
          for (let e = t.depth; e >= 0 && !(t.before(e + 1) > t.start(e)); e--, r--);
          return n == r && /row|table/.test(e.node(a).type.spec.tableRole);
        }(r) ? i = f.TextSelection.create(a, r.from) : r instanceof f.TextSelection && function ({
          $from: e,
          $to: t
        }) {
          let n, r;
          for (let t = e.depth; t > 0; t--) {
            const r = e.node(t);
            if ("cell" === r.type.spec.tableRole || "header_cell" === r.type.spec.tableRole) {
              n = r;
              break;
            }
          }
          for (let e = t.depth; e > 0; e--) {
            const n = t.node(e);
            if ("cell" === n.type.spec.tableRole || "header_cell" === n.type.spec.tableRole) {
              r = n;
              break;
            }
          }
          return n !== r && 0 === t.parentOffset;
        }(r) && (i = f.TextSelection.create(a, r.$from.start(), r.$from.end()));
        return i && (t || (t = e.tr)).setSelection(i), t;
      }(r, H(r, n), e)
    });
  }
});
