// Reconstructed Webpack factory 58991; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(56614),
    s = n(37392),
    r = n(99248);
  function i(e) {
    var t;
    const {
        char: n,
        allowSpaces: o,
        allowToIncludeChar: s,
        allowedPrefixes: i,
        startOfLine: a,
        $position: c
      } = e,
      d = o && !s,
      l = r.escapeForRegEx(n),
      u = new RegExp(`\\s${l}$`),
      h = a ? "^" : "",
      p = s ? "" : l,
      m = d ? new RegExp(`${h}${l}.*?(?=\\s${p}|$)`, "gm") : new RegExp(`${h}(?:^)?${l}[^\\s${p}]*`, "gm"),
      f = (null === (t = c.nodeBefore) || void 0 === t ? void 0 : t.isText) && c.nodeBefore.text;
    if (!f) return null;
    const g = c.pos - f.length,
      b = Array.from(f.matchAll(m)).pop();
    if (!b || void 0 === b.input || void 0 === b.index) return null;
    const y = b.input.slice(Math.max(0, b.index - 1), b.index),
      v = new RegExp(`^[${null == i ? void 0 : i.join("")}\0]?$`).test(y);
    if (null !== i && !v) return null;
    const w = g + b.index;
    let k = w + b[0].length;
    return d && u.test(f.slice(k - 1, k + 1)) && (b[0] += " ", k += 1), w < c.pos && k >= c.pos ? {
      range: {
        from: w,
        to: k
      },
      query: b[0].slice(n.length),
      text: b[0]
    } : null;
  }
  const a = new o.PluginKey("suggestion");
  function c({
    pluginKey: e = a,
    editor: t,
    char: n = "@",
    allowSpaces: r = !1,
    allowToIncludeChar: c = !1,
    allowedPrefixes: d = [" "],
    startOfLine: l = !1,
    decorationTag: u = "span",
    decorationClass: h = "suggestion",
    decorationContent: p = "",
    decorationEmptyClass: m = "is-empty",
    command: f = () => null,
    items: g = () => [],
    render: b = () => ({}),
    allow: y = () => !0,
    findSuggestionMatch: v = i
  }) {
    let w;
    const k = null == b ? void 0 : b(),
      M = new o.Plugin({
        key: e,
        view() {
          return {
            update: async (e, n) => {
              var o, s, r, i, a, c, d;
              const l = null === (o = this.key) || void 0 === o ? void 0 : o.getState(n),
                u = null === (s = this.key) || void 0 === s ? void 0 : s.getState(e.state),
                h = l.active && u.active && l.range.from !== u.range.from,
                p = !l.active && u.active,
                m = l.active && !u.active,
                b = !p && !m && l.query !== u.query,
                y = p || h && b,
                v = b || h,
                M = m || h && b;
              if (!y && !v && !M) return;
              const S = M && !y ? l : u,
                x = e.dom.querySelector(`[data-decoration-id="${S.decorationId}"]`);
              w = {
                editor: t,
                range: S.range,
                query: S.query,
                text: S.text,
                items: [],
                command: e => f({
                  editor: t,
                  range: S.range,
                  props: e
                }),
                decorationNode: x,
                clientRect: x ? () => {
                  var n;
                  const {
                      decorationId: o
                    } = null === (n = this.key) || void 0 === n ? void 0 : n.getState(t.state),
                    s = e.dom.querySelector(`[data-decoration-id="${o}"]`);
                  return (null == s ? void 0 : s.getBoundingClientRect()) || null;
                } : null
              }, y && (null === (r = null == k ? void 0 : k.onBeforeStart) || void 0 === r || r.call(k, w)), v && (null === (i = null == k ? void 0 : k.onBeforeUpdate) || void 0 === i || i.call(k, w)), (v || y) && (w.items = await g({
                editor: t,
                query: S.query
              })), M && (null === (a = null == k ? void 0 : k.onExit) || void 0 === a || a.call(k, w)), v && (null === (c = null == k ? void 0 : k.onUpdate) || void 0 === c || c.call(k, w)), y && (null === (d = null == k ? void 0 : k.onStart) || void 0 === d || d.call(k, w));
            },
            destroy: () => {
              var e;
              w && (null === (e = null == k ? void 0 : k.onExit) || void 0 === e || e.call(k, w));
            }
          };
        },
        state: {
          init: () => ({
            active: !1,
            range: {
              from: 0,
              to: 0
            },
            query: null,
            text: null,
            composing: !1
          }),
          apply(e, o, s, i) {
            const {
                isEditable: a
              } = t,
              {
                composing: u
              } = t.view,
              {
                selection: h
              } = e,
              {
                empty: p,
                from: m
              } = h,
              f = {
                ...o
              };
            if (f.composing = u, a && (p || t.view.composing)) {
              !(m < o.range.from || m > o.range.to) || u || o.composing || (f.active = !1);
              const e = v({
                  char: n,
                  allowSpaces: r,
                  allowToIncludeChar: c,
                  allowedPrefixes: d,
                  startOfLine: l,
                  $position: h.$from
                }),
                s = `id_${Math.floor(4294967295 * Math.random())}`;
              e && y({
                editor: t,
                state: i,
                range: e.range,
                isActive: o.active
              }) ? (f.active = !0, f.decorationId = o.decorationId ? o.decorationId : s, f.range = e.range, f.query = e.query, f.text = e.text) : f.active = !1;
            } else f.active = !1;
            return f.active || (f.decorationId = null, f.range = {
              from: 0,
              to: 0
            }, f.query = null, f.text = null), f;
          }
        },
        props: {
          handleKeyDown(e, t) {
            var n;
            const {
              active: o,
              range: s
            } = M.getState(e.state);
            return o && (null === (n = null == k ? void 0 : k.onKeyDown) || void 0 === n ? void 0 : n.call(k, {
              view: e,
              event: t,
              range: s
            })) || !1;
          },
          decorations(e) {
            const {
              active: t,
              range: n,
              decorationId: o,
              query: r
            } = M.getState(e);
            if (!t) return null;
            const i = !(null == r ? void 0 : r.length),
              a = [h];
            return i && a.push(m), s.DecorationSet.create(e.doc, [s.Decoration.inline(n.from, n.to, {
              nodeName: u,
              class: a.join(" "),
              "data-decoration-id": o,
              "data-decoration-content": p
            })]);
          }
        }
      });
    return M;
  }
  t.Suggestion = c, t.SuggestionPluginKey = a, t.default = c, t.findSuggestionMatch = i;
});
