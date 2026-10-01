// Reconstructed Webpack factory 29622; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = e => o.textInputRule({
      find: /--$/,
      replace: null != e ? e : "—"
    }),
    r = e => o.textInputRule({
      find: /\.\.\.$/,
      replace: null != e ? e : "…"
    }),
    i = e => o.textInputRule({
      find: /(?:^|[\s{[(<'"\u2018\u201C])(")$/,
      replace: null != e ? e : "“"
    }),
    a = e => o.textInputRule({
      find: /"$/,
      replace: null != e ? e : "”"
    }),
    c = e => o.textInputRule({
      find: /(?:^|[\s{[(<'"\u2018\u201C])(')$/,
      replace: null != e ? e : "‘"
    }),
    d = e => o.textInputRule({
      find: /'$/,
      replace: null != e ? e : "’"
    }),
    l = e => o.textInputRule({
      find: /<-$/,
      replace: null != e ? e : "←"
    }),
    u = e => o.textInputRule({
      find: /->$/,
      replace: null != e ? e : "→"
    }),
    h = e => o.textInputRule({
      find: /\(c\)$/,
      replace: null != e ? e : "©"
    }),
    p = e => o.textInputRule({
      find: /\(tm\)$/,
      replace: null != e ? e : "™"
    }),
    m = e => o.textInputRule({
      find: /\(sm\)$/,
      replace: null != e ? e : "℠"
    }),
    f = e => o.textInputRule({
      find: /\(r\)$/,
      replace: null != e ? e : "®"
    }),
    g = e => o.textInputRule({
      find: /(?:^|\s)(1\/2)\s$/,
      replace: null != e ? e : "½"
    }),
    b = e => o.textInputRule({
      find: /\+\/-$/,
      replace: null != e ? e : "±"
    }),
    y = e => o.textInputRule({
      find: /!=$/,
      replace: null != e ? e : "≠"
    }),
    v = e => o.textInputRule({
      find: /<<$/,
      replace: null != e ? e : "«"
    }),
    w = e => o.textInputRule({
      find: />>$/,
      replace: null != e ? e : "»"
    }),
    k = e => o.textInputRule({
      find: /\d+\s?([*x])\s?\d+$/,
      replace: null != e ? e : "×"
    }),
    M = e => o.textInputRule({
      find: /\^2$/,
      replace: null != e ? e : "²"
    }),
    S = e => o.textInputRule({
      find: /\^3$/,
      replace: null != e ? e : "³"
    }),
    x = e => o.textInputRule({
      find: /(?:^|\s)(1\/4)\s$/,
      replace: null != e ? e : "¼"
    }),
    C = e => o.textInputRule({
      find: /(?:^|\s)(3\/4)\s$/,
      replace: null != e ? e : "¾"
    }),
    T = o.Extension.create({
      name: "typography",
      addOptions: () => ({
        closeDoubleQuote: "”",
        closeSingleQuote: "’",
        copyright: "©",
        ellipsis: "…",
        emDash: "—",
        laquo: "«",
        leftArrow: "←",
        multiplication: "×",
        notEqual: "≠",
        oneHalf: "½",
        oneQuarter: "¼",
        openDoubleQuote: "“",
        openSingleQuote: "‘",
        plusMinus: "±",
        raquo: "»",
        registeredTrademark: "®",
        rightArrow: "→",
        servicemark: "℠",
        superscriptThree: "³",
        superscriptTwo: "²",
        threeQuarters: "¾",
        trademark: "™"
      }),
      addInputRules() {
        const e = [];
        return !1 !== this.options.emDash && e.push(s(this.options.emDash)), !1 !== this.options.ellipsis && e.push(r(this.options.ellipsis)), !1 !== this.options.openDoubleQuote && e.push(i(this.options.openDoubleQuote)), !1 !== this.options.closeDoubleQuote && e.push(a(this.options.closeDoubleQuote)), !1 !== this.options.openSingleQuote && e.push(c(this.options.openSingleQuote)), !1 !== this.options.closeSingleQuote && e.push(d(this.options.closeSingleQuote)), !1 !== this.options.leftArrow && e.push(l(this.options.leftArrow)), !1 !== this.options.rightArrow && e.push(u(this.options.rightArrow)), !1 !== this.options.copyright && e.push(h(this.options.copyright)), !1 !== this.options.trademark && e.push(p(this.options.trademark)), !1 !== this.options.servicemark && e.push(m(this.options.servicemark)), !1 !== this.options.registeredTrademark && e.push(f(this.options.registeredTrademark)), !1 !== this.options.oneHalf && e.push(g(this.options.oneHalf)), !1 !== this.options.plusMinus && e.push(b(this.options.plusMinus)), !1 !== this.options.notEqual && e.push(y(this.options.notEqual)), !1 !== this.options.laquo && e.push(v(this.options.laquo)), !1 !== this.options.raquo && e.push(w(this.options.raquo)), !1 !== this.options.multiplication && e.push(k(this.options.multiplication)), !1 !== this.options.superscriptTwo && e.push(M(this.options.superscriptTwo)), !1 !== this.options.superscriptThree && e.push(S(this.options.superscriptThree)), !1 !== this.options.oneQuarter && e.push(x(this.options.oneQuarter)), !1 !== this.options.threeQuarters && e.push(C(this.options.threeQuarters)), e;
      }
    });
  t.Typography = T, t.closeDoubleQuote = a, t.closeSingleQuote = d, t.copyright = h, t.default = T, t.ellipsis = r, t.emDash = s, t.laquo = v, t.leftArrow = l, t.multiplication = k, t.notEqual = y, t.oneHalf = g, t.oneQuarter = x, t.openDoubleQuote = i, t.openSingleQuote = c, t.plusMinus = b, t.raquo = w, t.registeredTrademark = f, t.rightArrow = u, t.servicemark = m, t.superscriptThree = S, t.superscriptTwo = M, t.threeQuarters = C, t.trademark = p;
});
