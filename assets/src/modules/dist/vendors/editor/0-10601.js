// Reconstructed Webpack factory 10601; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248),
    s = n(56614),
    r = n(8812);
  function i(e, t, n, o, s, r) {
    let i = 0,
      a = !0,
      c = t.firstChild;
    const d = e.firstChild;
    for (let e = 0, n = 0; e < d.childCount; e += 1) {
      const {
        colspan: l,
        colwidth: u
      } = d.child(e).attrs;
      for (let e = 0; e < l; e += 1, n += 1) {
        const d = s === n ? r : u && u[e],
          l = d ? `${d}px` : "";
        i += d || o, d || (a = !1), c ? (c.style.width !== l && (c.style.width = l), c = c.nextSibling) : t.appendChild(document.createElement("col")).style.width = l;
      }
    }
    for (; c;) {
      const e = c.nextSibling;
      c.parentNode.removeChild(c), c = e;
    }
    a ? (n.style.width = `${i}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${i}px`);
  }
  class a {
    constructor(e, t) {
      this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), i(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
    }
    update(e) {
      return e.type === this.node.type && (this.node = e, i(e, this.colgroup, this.table, this.cellMinWidth), !0);
    }
    ignoreMutation(e) {
      return "attributes" === e.type && (e.target === this.table || this.colgroup.contains(e.target));
    }
  }
  function c(e, t, n, o) {
    let s = 0,
      r = !0;
    const i = [],
      a = e.firstChild;
    if (!a) return {};
    for (let e = 0, c = 0; e < a.childCount; e += 1) {
      const {
        colspan: d,
        colwidth: l
      } = a.child(e).attrs;
      for (let e = 0; e < d; e += 1, c += 1) {
        const a = n === c ? o : l && l[e],
          d = a ? `${a}px` : "";
        s += a || t, a || (r = !1), i.push(["col", d ? {
          style: `width: ${d}`
        } : {}]);
      }
    }
    const c = r ? `${s}px` : "",
      d = r ? "" : `${s}px`;
    return {
      colgroup: ["colgroup", {}, ...i],
      tableWidth: c,
      tableMinWidth: d
    };
  }
  function d(e, t) {
    return t ? e.createChecked(null, t) : e.createAndFill();
  }
  function l(e, t, n, o, s) {
    const r = function (e) {
        if (e.cached.tableNodeTypes) return e.cached.tableNodeTypes;
        const t = {};
        return Object.keys(e.nodes).forEach(n => {
          const o = e.nodes[n];
          o.spec.tableRole && (t[o.spec.tableRole] = o);
        }), e.cached.tableNodeTypes = t, t;
      }(e),
      i = [],
      a = [];
    for (let e = 0; e < n; e += 1) {
      const e = d(r.cell, s);
      if (e && a.push(e), o) {
        const e = d(r.header_cell, s);
        e && i.push(e);
      }
    }
    const c = [];
    for (let e = 0; e < t; e += 1) c.push(r.row.createChecked(null, o && 0 === e ? i : a));
    return r.table.createChecked(null, c);
  }
  const u = ({
      editor: e
    }) => {
      const {
        selection: t
      } = e.state;
      if (!(t instanceof r.CellSelection)) return !1;
      let n = 0;
      const s = o.findParentNodeClosestToPos(t.ranges[0].$from, e => "table" === e.type.name);
      return null == s || s.node.descendants(e => {
        if ("table" === e.type.name) return !1;
        ["tableCell", "tableHeader"].includes(e.type.name) && (n += 1);
      }), n === t.ranges.length && (e.commands.deleteTable(), !0);
    },
    h = o.Node.create({
      name: "table",
      addOptions: () => ({
        HTMLAttributes: {},
        resizable: !1,
        handleWidth: 5,
        cellMinWidth: 25,
        View: a,
        lastColumnResizable: !0,
        allowTableNodeSelection: !1
      }),
      content: "tableRow+",
      tableRole: "table",
      isolating: !0,
      group: "block",
      parseHTML: () => [{
        tag: "table"
      }],
      renderHTML({
        node: e,
        HTMLAttributes: t
      }) {
        const {
          colgroup: n,
          tableWidth: s,
          tableMinWidth: r
        } = c(e, this.options.cellMinWidth);
        return ["table", o.mergeAttributes(this.options.HTMLAttributes, t, {
          style: s ? `width: ${s}` : `min-width: ${r}`
        }), n, ["tbody", 0]];
      },
      addCommands: () => ({
        insertTable: ({
          rows: e = 3,
          cols: t = 3,
          withHeaderRow: n = !0
        } = {}) => ({
          tr: o,
          dispatch: r,
          editor: i
        }) => {
          const a = l(i.schema, e, t, n);
          if (r) {
            const e = o.selection.from + 1;
            o.replaceSelectionWith(a).scrollIntoView().setSelection(s.TextSelection.near(o.doc.resolve(e)));
          }
          return !0;
        },
        addColumnBefore: () => ({
          state: e,
          dispatch: t
        }) => r.addColumnBefore(e, t),
        addColumnAfter: () => ({
          state: e,
          dispatch: t
        }) => r.addColumnAfter(e, t),
        deleteColumn: () => ({
          state: e,
          dispatch: t
        }) => r.deleteColumn(e, t),
        addRowBefore: () => ({
          state: e,
          dispatch: t
        }) => r.addRowBefore(e, t),
        addRowAfter: () => ({
          state: e,
          dispatch: t
        }) => r.addRowAfter(e, t),
        deleteRow: () => ({
          state: e,
          dispatch: t
        }) => r.deleteRow(e, t),
        deleteTable: () => ({
          state: e,
          dispatch: t
        }) => r.deleteTable(e, t),
        mergeCells: () => ({
          state: e,
          dispatch: t
        }) => r.mergeCells(e, t),
        splitCell: () => ({
          state: e,
          dispatch: t
        }) => r.splitCell(e, t),
        toggleHeaderColumn: () => ({
          state: e,
          dispatch: t
        }) => r.toggleHeader("column")(e, t),
        toggleHeaderRow: () => ({
          state: e,
          dispatch: t
        }) => r.toggleHeader("row")(e, t),
        toggleHeaderCell: () => ({
          state: e,
          dispatch: t
        }) => r.toggleHeaderCell(e, t),
        mergeOrSplit: () => ({
          state: e,
          dispatch: t
        }) => !!r.mergeCells(e, t) || r.splitCell(e, t),
        setCellAttribute: (e, t) => ({
          state: n,
          dispatch: o
        }) => r.setCellAttr(e, t)(n, o),
        goToNextCell: () => ({
          state: e,
          dispatch: t
        }) => r.goToNextCell(1)(e, t),
        goToPreviousCell: () => ({
          state: e,
          dispatch: t
        }) => r.goToNextCell(-1)(e, t),
        fixTables: () => ({
          state: e,
          dispatch: t
        }) => (t && r.fixTables(e), !0),
        setCellSelection: e => ({
          tr: t,
          dispatch: n
        }) => {
          if (n) {
            const n = r.CellSelection.create(t.doc, e.anchorCell, e.headCell);
            t.setSelection(n);
          }
          return !0;
        }
      }),
      addKeyboardShortcuts() {
        return {
          Tab: () => !!this.editor.commands.goToNextCell() || !!this.editor.can().addRowAfter() && this.editor.chain().addRowAfter().goToNextCell().run(),
          "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
          Backspace: u,
          "Mod-Backspace": u,
          Delete: u,
          "Mod-Delete": u
        };
      },
      addProseMirrorPlugins() {
        return [...(this.options.resizable && this.editor.isEditable ? [r.columnResizing({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })] : []), r.tableEditing({
          allowTableNodeSelection: this.options.allowTableNodeSelection
        })];
      },
      extendNodeSchema(e) {
        const t = {
          name: e.name,
          options: e.options,
          storage: e.storage
        };
        return {
          tableRole: o.callOrReturn(o.getExtensionField(e, "tableRole", t))
        };
      }
    });
  t.Table = h, t.createColGroup = c, t.createTable = l, t.default = h;
});
