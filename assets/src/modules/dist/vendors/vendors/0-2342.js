// Reconstructed Webpack factory 2342; arguments retain original semantics.
((e, t) => {
  "use strict";

  Object.defineProperty(t, Symbol.toStringTag, {
    value: "Module"
  });
  const n = e => {
      const t = o(e),
        {
          conflictingClassGroups: n,
          conflictingClassGroupModifiers: a
        } = e;
      return {
        getClassGroupId: e => {
          const n = e.split("-");
          return "" === n[0] && 1 !== n.length && n.shift(), r(n, t) || i(e);
        },
        getConflictingClassGroupIds: (e, t) => {
          const r = n[e] || [];
          return t && a[e] ? [...r, ...a[e]] : r;
        }
      };
    },
    r = (e, t) => {
      if (0 === e.length) return t.classGroupId;
      const n = e[0],
        a = t.nextPart.get(n),
        i = a ? r(e.slice(1), a) : void 0;
      if (i) return i;
      if (0 === t.validators.length) return;
      const o = e.join("-");
      return t.validators.find(({
        validator: e
      }) => e(o))?.classGroupId;
    },
    a = /^\[(.+)\]$/,
    i = e => {
      if (a.test(e)) {
        const t = a.exec(e)[1],
          n = t?.substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n;
      }
    },
    o = e => {
      const {
          theme: t,
          classGroups: n
        } = e,
        r = {
          nextPart: new Map(),
          validators: []
        };
      for (const e in n) s(n[e], r, e, t);
      return r;
    },
    s = (e, t, n, r) => {
      e.forEach(e => {
        if ("string" != typeof e) return "function" == typeof e ? c(e) ? void s(e(r), t, n, r) : void t.validators.push({
          validator: e,
          classGroupId: n
        }) : void Object.entries(e).forEach(([e, a]) => {
          s(a, l(t, e), n, r);
        });
        ("" === e ? t : l(t, e)).classGroupId = n;
      });
    },
    l = (e, t) => {
      let n = e;
      return t.split("-").forEach(e => {
        n.nextPart.has(e) || n.nextPart.set(e, {
          nextPart: new Map(),
          validators: []
        }), n = n.nextPart.get(e);
      }), n;
    },
    c = e => e.isThemeGetter,
    u = e => {
      if (e < 1) return {
        get: () => {},
        set: () => {}
      };
      let t = 0,
        n = new Map(),
        r = new Map();
      const a = (a, i) => {
        n.set(a, i), t++, t > e && (t = 0, r = n, n = new Map());
      };
      return {
        get(e) {
          let t = n.get(e);
          return void 0 !== t ? t : void 0 !== (t = r.get(e)) ? (a(e, t), t) : void 0;
        },
        set(e, t) {
          n.has(e) ? n.set(e, t) : a(e, t);
        }
      };
    },
    d = e => {
      const {
        prefix: t,
        experimentalParseClassName: n
      } = e;
      let r = e => {
        const t = [];
        let n,
          r = 0,
          a = 0,
          i = 0;
        for (let o = 0; o < e.length; o++) {
          let s = e[o];
          if (0 === r && 0 === a) {
            if (":" === s) {
              t.push(e.slice(i, o)), i = o + 1;
              continue;
            }
            if ("/" === s) {
              n = o;
              continue;
            }
          }
          "[" === s ? r++ : "]" === s ? r-- : "(" === s ? a++ : ")" === s && a--;
        }
        const o = 0 === t.length ? e : e.substring(i),
          s = p(o);
        return {
          modifiers: t,
          hasImportantModifier: s !== o,
          baseClassName: s,
          maybePostfixModifierPosition: n && n > i ? n - i : void 0
        };
      };
      if (t) {
        const e = t + ":",
          n = r;
        r = t => t.startsWith(e) ? n(t.substring(e.length)) : {
          isExternal: !0,
          modifiers: [],
          hasImportantModifier: !1,
          baseClassName: t,
          maybePostfixModifierPosition: void 0
        };
      }
      if (n) {
        const e = r;
        r = t => n({
          className: t,
          parseClassName: e
        });
      }
      return r;
    },
    p = e => e.endsWith("!") ? e.substring(0, e.length - 1) : e.startsWith("!") ? e.substring(1) : e,
    f = e => {
      const t = Object.fromEntries(e.orderSensitiveModifiers.map(e => [e, !0]));
      return e => {
        if (e.length <= 1) return e;
        const n = [];
        let r = [];
        return e.forEach(e => {
          "[" === e[0] || t[e] ? (n.push(...r.sort(), e), r = []) : r.push(e);
        }), n.push(...r.sort()), n;
      };
    },
    h = /\s+/;
  function _() {
    let e,
      t,
      n = 0,
      r = "";
    for (; n < arguments.length;) (e = arguments[n++]) && (t = m(e)) && (r && (r += " "), r += t);
    return r;
  }
  const m = e => {
    if ("string" == typeof e) return e;
    let t,
      n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = m(e[r])) && (n && (n += " "), n += t);
    return n;
  };
  function A(e, ...t) {
    let r,
      a,
      i,
      o = function (l) {
        const c = t.reduce((e, t) => t(e), e());
        return r = (e => ({
          cache: u(e.cacheSize),
          parseClassName: d(e),
          sortModifiers: f(e),
          ...n(e)
        }))(c), a = r.cache.get, i = r.cache.set, o = s, s(l);
      };
    function s(e) {
      const t = a(e);
      if (t) return t;
      const n = ((e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: a,
            sortModifiers: i
          } = t,
          o = [],
          s = e.trim().split(h);
        let l = "";
        for (let e = s.length - 1; e >= 0; e -= 1) {
          const t = s[e],
            {
              isExternal: c,
              modifiers: u,
              hasImportantModifier: d,
              baseClassName: p,
              maybePostfixModifierPosition: f
            } = n(t);
          if (c) {
            l = t + (l.length > 0 ? " " + l : l);
            continue;
          }
          let h = !!f,
            _ = r(h ? p.substring(0, f) : p);
          if (!_) {
            if (!h) {
              l = t + (l.length > 0 ? " " + l : l);
              continue;
            }
            if (_ = r(p), !_) {
              l = t + (l.length > 0 ? " " + l : l);
              continue;
            }
            h = !1;
          }
          const m = i(u).join(":"),
            A = d ? m + "!" : m,
            g = A + _;
          if (o.includes(g)) continue;
          o.push(g);
          const y = a(_, h);
          for (let e = 0; e < y.length; ++e) {
            const t = y[e];
            o.push(A + t);
          }
          l = t + (l.length > 0 ? " " + l : l);
        }
        return l;
      })(e, r);
      return i(e, n), n;
    }
    return function () {
      return o(_.apply(null, arguments));
    };
  }
  const g = e => {
      const t = t => t[e] || [];
      return t.isThemeGetter = !0, t;
    },
    y = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    v = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    E = /^\d+\/\d+$/,
    b = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    w = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    C = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    O = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    M = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    S = e => E.test(e),
    T = e => !!e && !Number.isNaN(Number(e)),
    k = e => !!e && Number.isInteger(Number(e)),
    x = e => e.endsWith("%") && T(e.slice(0, -1)),
    D = e => b.test(e),
    I = () => !0,
    P = e => w.test(e) && !C.test(e),
    L = () => !1,
    R = e => O.test(e),
    B = e => M.test(e),
    N = e => !F(e) && !z(e),
    U = e => X(e, ne, L),
    F = e => y.test(e),
    j = e => X(e, re, P),
    H = e => X(e, ae, T),
    W = e => X(e, ee, L),
    K = e => X(e, te, B),
    V = e => X(e, oe, R),
    z = e => v.test(e),
    Y = e => J(e, re),
    Q = e => J(e, ie),
    G = e => J(e, ee),
    $ = e => J(e, ne),
    q = e => J(e, te),
    Z = e => J(e, oe, !0),
    X = (e, t, n) => {
      const r = y.exec(e);
      return !!r && (r[1] ? t(r[1]) : n(r[2]));
    },
    J = (e, t, n = !1) => {
      const r = v.exec(e);
      return !!r && (r[1] ? t(r[1]) : n);
    },
    ee = e => "position" === e || "percentage" === e,
    te = e => "image" === e || "url" === e,
    ne = e => "length" === e || "size" === e || "bg-size" === e,
    re = e => "length" === e,
    ae = e => "number" === e,
    ie = e => "family-name" === e,
    oe = e => "shadow" === e,
    se = Object.defineProperty({
      __proto__: null,
      isAny: I,
      isAnyNonArbitrary: N,
      isArbitraryImage: K,
      isArbitraryLength: j,
      isArbitraryNumber: H,
      isArbitraryPosition: W,
      isArbitraryShadow: V,
      isArbitrarySize: U,
      isArbitraryValue: F,
      isArbitraryVariable: z,
      isArbitraryVariableFamilyName: Q,
      isArbitraryVariableImage: q,
      isArbitraryVariableLength: Y,
      isArbitraryVariablePosition: G,
      isArbitraryVariableShadow: Z,
      isArbitraryVariableSize: $,
      isFraction: S,
      isInteger: k,
      isNumber: T,
      isPercent: x,
      isTshirtSize: D
    }, Symbol.toStringTag, {
      value: "Module"
    }),
    le = () => {
      const e = g("color"),
        t = g("font"),
        n = g("text"),
        r = g("font-weight"),
        a = g("tracking"),
        i = g("leading"),
        o = g("breakpoint"),
        s = g("container"),
        l = g("spacing"),
        c = g("radius"),
        u = g("shadow"),
        d = g("inset-shadow"),
        p = g("text-shadow"),
        f = g("drop-shadow"),
        h = g("blur"),
        _ = g("perspective"),
        m = g("aspect"),
        A = g("ease"),
        y = g("animate"),
        v = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom", z, F],
        E = () => [z, F, l],
        b = () => [S, "full", "auto", ...E()],
        w = () => [k, "none", "subgrid", z, F],
        C = () => ["auto", {
          span: ["full", k, z, F]
        }, k, z, F],
        O = () => [k, "auto", z, F],
        M = () => ["auto", "min", "max", "fr", z, F],
        P = () => ["auto", ...E()],
        L = () => [S, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()],
        R = () => [e, z, F],
        B = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom", G, W, {
          position: [z, F]
        }],
        X = () => ["auto", "cover", "contain", $, U, {
          size: [z, F]
        }],
        J = () => [x, Y, j],
        ee = () => ["", "none", "full", c, z, F],
        te = () => ["", T, Y, j],
        ne = () => [T, x, G, W],
        re = () => ["", "none", h, z, F],
        ae = () => ["none", T, z, F],
        ie = () => ["none", T, z, F],
        oe = () => [T, z, F],
        se = () => [S, "full", ...E()];
      return {
        cacheSize: 500,
        theme: {
          animate: ["spin", "ping", "pulse", "bounce"],
          aspect: ["video"],
          blur: [D],
          breakpoint: [D],
          color: [I],
          container: [D],
          "drop-shadow": [D],
          ease: ["in", "out", "in-out"],
          font: [N],
          "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
          "inset-shadow": [D],
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
          perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
          radius: [D],
          shadow: [D],
          spacing: ["px", T],
          text: [D],
          "text-shadow": [D],
          tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
          aspect: [{
            aspect: ["auto", "square", S, F, z, m]
          }],
          container: ["container"],
          columns: [{
            columns: [T, F, z, s]
          }],
          "break-after": [{
            "break-after": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
          }],
          "break-before": [{
            "break-before": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
          }],
          "break-inside": [{
            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
          }],
          "box-decoration": [{
            "box-decoration": ["slice", "clone"]
          }],
          box: [{
            box: ["border", "content"]
          }],
          display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
          sr: ["sr-only", "not-sr-only"],
          float: [{
            float: ["right", "left", "none", "start", "end"]
          }],
          clear: [{
            clear: ["left", "right", "both", "none", "start", "end"]
          }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [{
            object: ["contain", "cover", "fill", "none", "scale-down"]
          }],
          "object-position": [{
            object: v()
          }],
          overflow: [{
            overflow: ["auto", "hidden", "clip", "visible", "scroll"]
          }],
          "overflow-x": [{
            "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"]
          }],
          "overflow-y": [{
            "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"]
          }],
          overscroll: [{
            overscroll: ["auto", "contain", "none"]
          }],
          "overscroll-x": [{
            "overscroll-x": ["auto", "contain", "none"]
          }],
          "overscroll-y": [{
            "overscroll-y": ["auto", "contain", "none"]
          }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{
            inset: b()
          }],
          "inset-x": [{
            "inset-x": b()
          }],
          "inset-y": [{
            "inset-y": b()
          }],
          start: [{
            start: b()
          }],
          end: [{
            end: b()
          }],
          top: [{
            top: b()
          }],
          right: [{
            right: b()
          }],
          bottom: [{
            bottom: b()
          }],
          left: [{
            left: b()
          }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{
            z: [k, "auto", z, F]
          }],
          basis: [{
            basis: [S, "full", "auto", s, ...E()]
          }],
          "flex-direction": [{
            flex: ["row", "row-reverse", "col", "col-reverse"]
          }],
          "flex-wrap": [{
            flex: ["nowrap", "wrap", "wrap-reverse"]
          }],
          flex: [{
            flex: [T, S, "auto", "initial", "none", F]
          }],
          grow: [{
            grow: ["", T, z, F]
          }],
          shrink: [{
            shrink: ["", T, z, F]
          }],
          order: [{
            order: [k, "first", "last", "none", z, F]
          }],
          "grid-cols": [{
            "grid-cols": w()
          }],
          "col-start-end": [{
            col: C()
          }],
          "col-start": [{
            "col-start": O()
          }],
          "col-end": [{
            "col-end": O()
          }],
          "grid-rows": [{
            "grid-rows": w()
          }],
          "row-start-end": [{
            row: C()
          }],
          "row-start": [{
            "row-start": O()
          }],
          "row-end": [{
            "row-end": O()
          }],
          "grid-flow": [{
            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
          }],
          "auto-cols": [{
            "auto-cols": M()
          }],
          "auto-rows": [{
            "auto-rows": M()
          }],
          gap: [{
            gap: E()
          }],
          "gap-x": [{
            "gap-x": E()
          }],
          "gap-y": [{
            "gap-y": E()
          }],
          "justify-content": [{
            justify: ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe", "normal"]
          }],
          "justify-items": [{
            "justify-items": ["start", "end", "center", "stretch", "center-safe", "end-safe", "normal"]
          }],
          "justify-self": [{
            "justify-self": ["auto", "start", "end", "center", "stretch", "center-safe", "end-safe"]
          }],
          "align-content": [{
            content: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
          }],
          "align-items": [{
            items: ["start", "end", "center", "stretch", "center-safe", "end-safe", {
              baseline: ["", "last"]
            }]
          }],
          "align-self": [{
            self: ["auto", "start", "end", "center", "stretch", "center-safe", "end-safe", {
              baseline: ["", "last"]
            }]
          }],
          "place-content": [{
            "place-content": ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
          }],
          "place-items": [{
            "place-items": ["start", "end", "center", "stretch", "center-safe", "end-safe", "baseline"]
          }],
          "place-self": [{
            "place-self": ["auto", "start", "end", "center", "stretch", "center-safe", "end-safe"]
          }],
          p: [{
            p: E()
          }],
          px: [{
            px: E()
          }],
          py: [{
            py: E()
          }],
          ps: [{
            ps: E()
          }],
          pe: [{
            pe: E()
          }],
          pt: [{
            pt: E()
          }],
          pr: [{
            pr: E()
          }],
          pb: [{
            pb: E()
          }],
          pl: [{
            pl: E()
          }],
          m: [{
            m: P()
          }],
          mx: [{
            mx: P()
          }],
          my: [{
            my: P()
          }],
          ms: [{
            ms: P()
          }],
          me: [{
            me: P()
          }],
          mt: [{
            mt: P()
          }],
          mr: [{
            mr: P()
          }],
          mb: [{
            mb: P()
          }],
          ml: [{
            ml: P()
          }],
          "space-x": [{
            "space-x": E()
          }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{
            "space-y": E()
          }],
          "space-y-reverse": ["space-y-reverse"],
          size: [{
            size: L()
          }],
          w: [{
            w: [s, "screen", ...L()]
          }],
          "min-w": [{
            "min-w": [s, "screen", "none", ...L()]
          }],
          "max-w": [{
            "max-w": [s, "screen", "none", "prose", {
              screen: [o]
            }, ...L()]
          }],
          h: [{
            h: ["screen", "lh", ...L()]
          }],
          "min-h": [{
            "min-h": ["screen", "lh", "none", ...L()]
          }],
          "max-h": [{
            "max-h": ["screen", "lh", ...L()]
          }],
          "font-size": [{
            text: ["base", n, Y, j]
          }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [{
            font: [r, z, H]
          }],
          "font-stretch": [{
            "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", x, F]
          }],
          "font-family": [{
            font: [Q, F, t]
          }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
          tracking: [{
            tracking: [a, z, F]
          }],
          "line-clamp": [{
            "line-clamp": [T, "none", z, H]
          }],
          leading: [{
            leading: [i, ...E()]
          }],
          "list-image": [{
            "list-image": ["none", z, F]
          }],
          "list-style-position": [{
            list: ["inside", "outside"]
          }],
          "list-style-type": [{
            list: ["disc", "decimal", "none", z, F]
          }],
          "text-alignment": [{
            text: ["left", "center", "right", "justify", "start", "end"]
          }],
          "placeholder-color": [{
            placeholder: R()
          }],
          "text-color": [{
            text: R()
          }],
          "text-decoration": ["underline", "overline", "line-through", "no-underline"],
          "text-decoration-style": [{
            decoration: ["solid", "dashed", "dotted", "double", "wavy"]
          }],
          "text-decoration-thickness": [{
            decoration: [T, "from-font", "auto", z, j]
          }],
          "text-decoration-color": [{
            decoration: R()
          }],
          "underline-offset": [{
            "underline-offset": [T, "auto", z, F]
          }],
          "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          "text-wrap": [{
            text: ["wrap", "nowrap", "balance", "pretty"]
          }],
          indent: [{
            indent: E()
          }],
          "vertical-align": [{
            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z, F]
          }],
          whitespace: [{
            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
          }],
          break: [{
            break: ["normal", "words", "all", "keep"]
          }],
          wrap: [{
            wrap: ["break-word", "anywhere", "normal"]
          }],
          hyphens: [{
            hyphens: ["none", "manual", "auto"]
          }],
          content: [{
            content: ["none", z, F]
          }],
          "bg-attachment": [{
            bg: ["fixed", "local", "scroll"]
          }],
          "bg-clip": [{
            "bg-clip": ["border", "padding", "content", "text"]
          }],
          "bg-origin": [{
            "bg-origin": ["border", "padding", "content"]
          }],
          "bg-position": [{
            bg: B()
          }],
          "bg-repeat": [{
            bg: ["no-repeat", {
              repeat: ["", "x", "y", "space", "round"]
            }]
          }],
          "bg-size": [{
            bg: X()
          }],
          "bg-image": [{
            bg: ["none", {
              linear: [{
                to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
              }, k, z, F],
              radial: ["", z, F],
              conic: [k, z, F]
            }, q, K]
          }],
          "bg-color": [{
            bg: R()
          }],
          "gradient-from-pos": [{
            from: J()
          }],
          "gradient-via-pos": [{
            via: J()
          }],
          "gradient-to-pos": [{
            to: J()
          }],
          "gradient-from": [{
            from: R()
          }],
          "gradient-via": [{
            via: R()
          }],
          "gradient-to": [{
            to: R()
          }],
          rounded: [{
            rounded: ee()
          }],
          "rounded-s": [{
            "rounded-s": ee()
          }],
          "rounded-e": [{
            "rounded-e": ee()
          }],
          "rounded-t": [{
            "rounded-t": ee()
          }],
          "rounded-r": [{
            "rounded-r": ee()
          }],
          "rounded-b": [{
            "rounded-b": ee()
          }],
          "rounded-l": [{
            "rounded-l": ee()
          }],
          "rounded-ss": [{
            "rounded-ss": ee()
          }],
          "rounded-se": [{
            "rounded-se": ee()
          }],
          "rounded-ee": [{
            "rounded-ee": ee()
          }],
          "rounded-es": [{
            "rounded-es": ee()
          }],
          "rounded-tl": [{
            "rounded-tl": ee()
          }],
          "rounded-tr": [{
            "rounded-tr": ee()
          }],
          "rounded-br": [{
            "rounded-br": ee()
          }],
          "rounded-bl": [{
            "rounded-bl": ee()
          }],
          "border-w": [{
            border: te()
          }],
          "border-w-x": [{
            "border-x": te()
          }],
          "border-w-y": [{
            "border-y": te()
          }],
          "border-w-s": [{
            "border-s": te()
          }],
          "border-w-e": [{
            "border-e": te()
          }],
          "border-w-t": [{
            "border-t": te()
          }],
          "border-w-r": [{
            "border-r": te()
          }],
          "border-w-b": [{
            "border-b": te()
          }],
          "border-w-l": [{
            "border-l": te()
          }],
          "divide-x": [{
            "divide-x": te()
          }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{
            "divide-y": te()
          }],
          "divide-y-reverse": ["divide-y-reverse"],
          "border-style": [{
            border: ["solid", "dashed", "dotted", "double", "hidden", "none"]
          }],
          "divide-style": [{
            divide: ["solid", "dashed", "dotted", "double", "hidden", "none"]
          }],
          "border-color": [{
            border: R()
          }],
          "border-color-x": [{
            "border-x": R()
          }],
          "border-color-y": [{
            "border-y": R()
          }],
          "border-color-s": [{
            "border-s": R()
          }],
          "border-color-e": [{
            "border-e": R()
          }],
          "border-color-t": [{
            "border-t": R()
          }],
          "border-color-r": [{
            "border-r": R()
          }],
          "border-color-b": [{
            "border-b": R()
          }],
          "border-color-l": [{
            "border-l": R()
          }],
          "divide-color": [{
            divide: R()
          }],
          "outline-style": [{
            outline: ["solid", "dashed", "dotted", "double", "none", "hidden"]
          }],
          "outline-offset": [{
            "outline-offset": [T, z, F]
          }],
          "outline-w": [{
            outline: ["", T, Y, j]
          }],
          "outline-color": [{
            outline: R()
          }],
          shadow: [{
            shadow: ["", "none", u, Z, V]
          }],
          "shadow-color": [{
            shadow: R()
          }],
          "inset-shadow": [{
            "inset-shadow": ["none", d, Z, V]
          }],
          "inset-shadow-color": [{
            "inset-shadow": R()
          }],
          "ring-w": [{
            ring: te()
          }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{
            ring: R()
          }],
          "ring-offset-w": [{
            "ring-offset": [T, j]
          }],
          "ring-offset-color": [{
            "ring-offset": R()
          }],
          "inset-ring-w": [{
            "inset-ring": te()
          }],
          "inset-ring-color": [{
            "inset-ring": R()
          }],
          "text-shadow": [{
            "text-shadow": ["none", p, Z, V]
          }],
          "text-shadow-color": [{
            "text-shadow": R()
          }],
          opacity: [{
            opacity: [T, z, F]
          }],
          "mix-blend": [{
            "mix-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-darker", "plus-lighter"]
          }],
          "bg-blend": [{
            "bg-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
          }],
          "mask-clip": [{
            "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
          }, "mask-no-clip"],
          "mask-composite": [{
            mask: ["add", "subtract", "intersect", "exclude"]
          }],
          "mask-image-linear-pos": [{
            "mask-linear": [T]
          }],
          "mask-image-linear-from-pos": [{
            "mask-linear-from": ne()
          }],
          "mask-image-linear-to-pos": [{
            "mask-linear-to": ne()
          }],
          "mask-image-linear-from-color": [{
            "mask-linear-from": R()
          }],
          "mask-image-linear-to-color": [{
            "mask-linear-to": R()
          }],
          "mask-image-t-from-pos": [{
            "mask-t-from": ne()
          }],
          "mask-image-t-to-pos": [{
            "mask-t-to": ne()
          }],
          "mask-image-t-from-color": [{
            "mask-t-from": R()
          }],
          "mask-image-t-to-color": [{
            "mask-t-to": R()
          }],
          "mask-image-r-from-pos": [{
            "mask-r-from": ne()
          }],
          "mask-image-r-to-pos": [{
            "mask-r-to": ne()
          }],
          "mask-image-r-from-color": [{
            "mask-r-from": R()
          }],
          "mask-image-r-to-color": [{
            "mask-r-to": R()
          }],
          "mask-image-b-from-pos": [{
            "mask-b-from": ne()
          }],
          "mask-image-b-to-pos": [{
            "mask-b-to": ne()
          }],
          "mask-image-b-from-color": [{
            "mask-b-from": R()
          }],
          "mask-image-b-to-color": [{
            "mask-b-to": R()
          }],
          "mask-image-l-from-pos": [{
            "mask-l-from": ne()
          }],
          "mask-image-l-to-pos": [{
            "mask-l-to": ne()
          }],
          "mask-image-l-from-color": [{
            "mask-l-from": R()
          }],
          "mask-image-l-to-color": [{
            "mask-l-to": R()
          }],
          "mask-image-x-from-pos": [{
            "mask-x-from": ne()
          }],
          "mask-image-x-to-pos": [{
            "mask-x-to": ne()
          }],
          "mask-image-x-from-color": [{
            "mask-x-from": R()
          }],
          "mask-image-x-to-color": [{
            "mask-x-to": R()
          }],
          "mask-image-y-from-pos": [{
            "mask-y-from": ne()
          }],
          "mask-image-y-to-pos": [{
            "mask-y-to": ne()
          }],
          "mask-image-y-from-color": [{
            "mask-y-from": R()
          }],
          "mask-image-y-to-color": [{
            "mask-y-to": R()
          }],
          "mask-image-radial": [{
            "mask-radial": [z, F]
          }],
          "mask-image-radial-from-pos": [{
            "mask-radial-from": ne()
          }],
          "mask-image-radial-to-pos": [{
            "mask-radial-to": ne()
          }],
          "mask-image-radial-from-color": [{
            "mask-radial-from": R()
          }],
          "mask-image-radial-to-color": [{
            "mask-radial-to": R()
          }],
          "mask-image-radial-shape": [{
            "mask-radial": ["circle", "ellipse"]
          }],
          "mask-image-radial-size": [{
            "mask-radial": [{
              closest: ["side", "corner"],
              farthest: ["side", "corner"]
            }]
          }],
          "mask-image-radial-pos": [{
            "mask-radial-at": ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
          }],
          "mask-image-conic-pos": [{
            "mask-conic": [T]
          }],
          "mask-image-conic-from-pos": [{
            "mask-conic-from": ne()
          }],
          "mask-image-conic-to-pos": [{
            "mask-conic-to": ne()
          }],
          "mask-image-conic-from-color": [{
            "mask-conic-from": R()
          }],
          "mask-image-conic-to-color": [{
            "mask-conic-to": R()
          }],
          "mask-mode": [{
            mask: ["alpha", "luminance", "match"]
          }],
          "mask-origin": [{
            "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
          }],
          "mask-position": [{
            mask: B()
          }],
          "mask-repeat": [{
            mask: ["no-repeat", {
              repeat: ["", "x", "y", "space", "round"]
            }]
          }],
          "mask-size": [{
            mask: X()
          }],
          "mask-type": [{
            "mask-type": ["alpha", "luminance"]
          }],
          "mask-image": [{
            mask: ["none", z, F]
          }],
          filter: [{
            filter: ["", "none", z, F]
          }],
          blur: [{
            blur: re()
          }],
          brightness: [{
            brightness: [T, z, F]
          }],
          contrast: [{
            contrast: [T, z, F]
          }],
          "drop-shadow": [{
            "drop-shadow": ["", "none", f, Z, V]
          }],
          "drop-shadow-color": [{
            "drop-shadow": R()
          }],
          grayscale: [{
            grayscale: ["", T, z, F]
          }],
          "hue-rotate": [{
            "hue-rotate": [T, z, F]
          }],
          invert: [{
            invert: ["", T, z, F]
          }],
          saturate: [{
            saturate: [T, z, F]
          }],
          sepia: [{
            sepia: ["", T, z, F]
          }],
          "backdrop-filter": [{
            "backdrop-filter": ["", "none", z, F]
          }],
          "backdrop-blur": [{
            "backdrop-blur": re()
          }],
          "backdrop-brightness": [{
            "backdrop-brightness": [T, z, F]
          }],
          "backdrop-contrast": [{
            "backdrop-contrast": [T, z, F]
          }],
          "backdrop-grayscale": [{
            "backdrop-grayscale": ["", T, z, F]
          }],
          "backdrop-hue-rotate": [{
            "backdrop-hue-rotate": [T, z, F]
          }],
          "backdrop-invert": [{
            "backdrop-invert": ["", T, z, F]
          }],
          "backdrop-opacity": [{
            "backdrop-opacity": [T, z, F]
          }],
          "backdrop-saturate": [{
            "backdrop-saturate": [T, z, F]
          }],
          "backdrop-sepia": [{
            "backdrop-sepia": ["", T, z, F]
          }],
          "border-collapse": [{
            border: ["collapse", "separate"]
          }],
          "border-spacing": [{
            "border-spacing": E()
          }],
          "border-spacing-x": [{
            "border-spacing-x": E()
          }],
          "border-spacing-y": [{
            "border-spacing-y": E()
          }],
          "table-layout": [{
            table: ["auto", "fixed"]
          }],
          caption: [{
            caption: ["top", "bottom"]
          }],
          transition: [{
            transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", z, F]
          }],
          "transition-behavior": [{
            transition: ["normal", "discrete"]
          }],
          duration: [{
            duration: [T, "initial", z, F]
          }],
          ease: [{
            ease: ["linear", "initial", A, z, F]
          }],
          delay: [{
            delay: [T, z, F]
          }],
          animate: [{
            animate: ["none", y, z, F]
          }],
          backface: [{
            backface: ["hidden", "visible"]
          }],
          perspective: [{
            perspective: [_, z, F]
          }],
          "perspective-origin": [{
            "perspective-origin": v()
          }],
          rotate: [{
            rotate: ae()
          }],
          "rotate-x": [{
            "rotate-x": ae()
          }],
          "rotate-y": [{
            "rotate-y": ae()
          }],
          "rotate-z": [{
            "rotate-z": ae()
          }],
          scale: [{
            scale: ie()
          }],
          "scale-x": [{
            "scale-x": ie()
          }],
          "scale-y": [{
            "scale-y": ie()
          }],
          "scale-z": [{
            "scale-z": ie()
          }],
          "scale-3d": ["scale-3d"],
          skew: [{
            skew: oe()
          }],
          "skew-x": [{
            "skew-x": oe()
          }],
          "skew-y": [{
            "skew-y": oe()
          }],
          transform: [{
            transform: [z, F, "", "none", "gpu", "cpu"]
          }],
          "transform-origin": [{
            origin: v()
          }],
          "transform-style": [{
            transform: ["3d", "flat"]
          }],
          translate: [{
            translate: se()
          }],
          "translate-x": [{
            "translate-x": se()
          }],
          "translate-y": [{
            "translate-y": se()
          }],
          "translate-z": [{
            "translate-z": se()
          }],
          "translate-none": ["translate-none"],
          accent: [{
            accent: R()
          }],
          appearance: [{
            appearance: ["none", "auto"]
          }],
          "caret-color": [{
            caret: R()
          }],
          "color-scheme": [{
            scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
          }],
          cursor: [{
            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z, F]
          }],
          "field-sizing": [{
            "field-sizing": ["fixed", "content"]
          }],
          "pointer-events": [{
            "pointer-events": ["auto", "none"]
          }],
          resize: [{
            resize: ["none", "", "y", "x"]
          }],
          "scroll-behavior": [{
            scroll: ["auto", "smooth"]
          }],
          "scroll-m": [{
            "scroll-m": E()
          }],
          "scroll-mx": [{
            "scroll-mx": E()
          }],
          "scroll-my": [{
            "scroll-my": E()
          }],
          "scroll-ms": [{
            "scroll-ms": E()
          }],
          "scroll-me": [{
            "scroll-me": E()
          }],
          "scroll-mt": [{
            "scroll-mt": E()
          }],
          "scroll-mr": [{
            "scroll-mr": E()
          }],
          "scroll-mb": [{
            "scroll-mb": E()
          }],
          "scroll-ml": [{
            "scroll-ml": E()
          }],
          "scroll-p": [{
            "scroll-p": E()
          }],
          "scroll-px": [{
            "scroll-px": E()
          }],
          "scroll-py": [{
            "scroll-py": E()
          }],
          "scroll-ps": [{
            "scroll-ps": E()
          }],
          "scroll-pe": [{
            "scroll-pe": E()
          }],
          "scroll-pt": [{
            "scroll-pt": E()
          }],
          "scroll-pr": [{
            "scroll-pr": E()
          }],
          "scroll-pb": [{
            "scroll-pb": E()
          }],
          "scroll-pl": [{
            "scroll-pl": E()
          }],
          "snap-align": [{
            snap: ["start", "end", "center", "align-none"]
          }],
          "snap-stop": [{
            snap: ["normal", "always"]
          }],
          "snap-type": [{
            snap: ["none", "x", "y", "both"]
          }],
          "snap-strictness": [{
            snap: ["mandatory", "proximity"]
          }],
          touch: [{
            touch: ["auto", "none", "manipulation"]
          }],
          "touch-x": [{
            "touch-pan": ["x", "left", "right"]
          }],
          "touch-y": [{
            "touch-pan": ["y", "up", "down"]
          }],
          "touch-pz": ["touch-pinch-zoom"],
          select: [{
            select: ["none", "text", "all", "auto"]
          }],
          "will-change": [{
            "will-change": ["auto", "scroll", "contents", "transform", z, F]
          }],
          fill: [{
            fill: ["none", ...R()]
          }],
          "stroke-w": [{
            stroke: [T, Y, j, H]
          }],
          stroke: [{
            stroke: ["none", ...R()]
          }],
          "forced-color-adjust": [{
            "forced-color-adjust": ["auto", "none"]
          }]
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          translate: ["translate-x", "translate-y", "translate-none"],
          "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
          "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
          "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
      };
    },
    ce = (e, {
      cacheSize: t,
      prefix: n,
      experimentalParseClassName: r,
      extend: a = {},
      override: i = {}
    }) => (ue(e, "cacheSize", t), ue(e, "prefix", n), ue(e, "experimentalParseClassName", r), de(e.theme, i.theme), de(e.classGroups, i.classGroups), de(e.conflictingClassGroups, i.conflictingClassGroups), de(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), ue(e, "orderSensitiveModifiers", i.orderSensitiveModifiers), pe(e.theme, a.theme), pe(e.classGroups, a.classGroups), pe(e.conflictingClassGroups, a.conflictingClassGroups), pe(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), fe(e, a, "orderSensitiveModifiers"), e),
    ue = (e, t, n) => {
      void 0 !== n && (e[t] = n);
    },
    de = (e, t) => {
      if (t) for (const n in t) ue(e, n, t[n]);
    },
    pe = (e, t) => {
      if (t) for (const n in t) fe(e, t, n);
    },
    fe = (e, t, n) => {
      const r = t[n];
      void 0 !== r && (e[n] = e[n] ? e[n].concat(r) : r);
    },
    he = A(le);
  t.createTailwindMerge = A, t.extendTailwindMerge = (e, ...t) => "function" == typeof e ? A(le, e, ...t) : A(() => ce(le(), e), ...t), t.fromTheme = g, t.getDefaultConfig = le, t.mergeConfigs = ce, t.twJoin = _, t.twMerge = he, t.validators = se;
});
