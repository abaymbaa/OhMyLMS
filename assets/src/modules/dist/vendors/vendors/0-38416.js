// Reconstructed Webpack factory 38416; arguments retain original semantics.
(e => {
  function t(e) {
    return e instanceof Map ? e.clear = e.delete = e.set = function () {
      throw new Error("map is read-only");
    } : e instanceof Set && (e.add = e.clear = e.delete = function () {
      throw new Error("set is read-only");
    }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach(n => {
      const r = e[n],
        a = typeof r;
      "object" !== a && "function" !== a || Object.isFrozen(r) || t(r);
    }), e;
  }
  class n {
    constructor(e) {
      void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function r(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function a(e, ...t) {
    const n = Object.create(null);
    for (const t in e) n[t] = e[t];
    return t.forEach(function (e) {
      for (const t in e) n[t] = e[t];
    }), n;
  }
  const i = e => !!e.scope;
  class o {
    constructor(e, t) {
      this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this);
    }
    addText(e) {
      this.buffer += r(e);
    }
    openNode(e) {
      if (!i(e)) return;
      const t = ((e, {
        prefix: t
      }) => {
        if (e.startsWith("language:")) return e.replace("language:", "language-");
        if (e.includes(".")) {
          const n = e.split(".");
          return [`${t}${n.shift()}`, ...n.map((e, t) => `${e}${"_".repeat(t + 1)}`)].join(" ");
        }
        return `${t}${e}`;
      })(e.scope, {
        prefix: this.classPrefix
      });
      this.span(t);
    }
    closeNode(e) {
      i(e) && (this.buffer += "</span>");
    }
    value() {
      return this.buffer;
    }
    span(e) {
      this.buffer += `<span class="${e}">`;
    }
  }
  const s = (e = {}) => {
    const t = {
      children: []
    };
    return Object.assign(t, e), t;
  };
  class l {
    constructor() {
      this.rootNode = s(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(e) {
      this.top.children.push(e);
    }
    openNode(e) {
      const t = s({
        scope: e
      });
      this.add(t), this.stack.push(t);
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(););
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(e) {
      return this.constructor._walk(e, this.rootNode);
    }
    static _walk(e, t) {
      return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach(t => this._walk(e, t)), e.closeNode(t)), e;
    }
    static _collapse(e) {
      "string" != typeof e && e.children && (e.children.every(e => "string" == typeof e) ? e.children = [e.children.join("")] : e.children.forEach(e => {
        l._collapse(e);
      }));
    }
  }
  class c extends l {
    constructor(e) {
      super(), this.options = e;
    }
    addText(e) {
      "" !== e && this.add(e);
    }
    startScope(e) {
      this.openNode(e);
    }
    endScope() {
      this.closeNode();
    }
    __addSublanguage(e, t) {
      const n = e.root;
      t && (n.scope = `language:${t}`), this.add(n);
    }
    toHTML() {
      return new o(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function u(e) {
    return e ? "string" == typeof e ? e : e.source : null;
  }
  function d(e) {
    return h("(?=", e, ")");
  }
  function p(e) {
    return h("(?:", e, ")*");
  }
  function f(e) {
    return h("(?:", e, ")?");
  }
  function h(...e) {
    return e.map(e => u(e)).join("");
  }
  function _(...e) {
    const t = function (e) {
      const t = e[e.length - 1];
      return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
    }(e);
    return "(" + (t.capture ? "" : "?:") + e.map(e => u(e)).join("|") + ")";
  }
  function m(e) {
    return new RegExp(e.toString() + "|").exec("").length - 1;
  }
  const A = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function g(e, {
    joinWith: t
  }) {
    let n = 0;
    return e.map(e => {
      n += 1;
      const t = n;
      let r = u(e),
        a = "";
      for (; r.length > 0;) {
        const e = A.exec(r);
        if (!e) {
          a += r;
          break;
        }
        a += r.substring(0, e.index), r = r.substring(e.index + e[0].length), "\\" === e[0][0] && e[1] ? a += "\\" + String(Number(e[1]) + t) : (a += e[0], "(" === e[0] && n++);
      }
      return a;
    }).map(e => `(${e})`).join(t);
  }
  const y = "[a-zA-Z]\\w*",
    v = "[a-zA-Z_]\\w*",
    E = "\\b\\d+(\\.\\d+)?",
    b = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    w = "\\b(0b[01]+)",
    C = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    },
    O = {
      scope: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [C]
    },
    M = {
      scope: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [C]
    },
    S = function (e, t, n = {}) {
      const r = a({
        scope: "comment",
        begin: e,
        end: t,
        contains: []
      }, n);
      r.contains.push({
        scope: "doctag",
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: !0,
        relevance: 0
      });
      const i = _("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
      return r.contains.push({
        begin: h(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}")
      }), r;
    },
    T = S("//", "$"),
    k = S("/\\*", "\\*/"),
    x = S("#", "$"),
    D = {
      scope: "number",
      begin: E,
      relevance: 0
    },
    I = {
      scope: "number",
      begin: b,
      relevance: 0
    },
    P = {
      scope: "number",
      begin: w,
      relevance: 0
    },
    L = {
      scope: "regexp",
      begin: /\/(?=[^/\n]*\/)/,
      end: /\/[gimuy]*/,
      contains: [C, {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [C]
      }]
    },
    R = {
      scope: "title",
      begin: y,
      relevance: 0
    },
    B = {
      scope: "title",
      begin: v,
      relevance: 0
    },
    N = {
      begin: "\\.\\s*" + v,
      relevance: 0
    };
  var U = Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: O,
    BACKSLASH_ESCAPE: C,
    BINARY_NUMBER_MODE: P,
    BINARY_NUMBER_RE: w,
    COMMENT: S,
    C_BLOCK_COMMENT_MODE: k,
    C_LINE_COMMENT_MODE: T,
    C_NUMBER_MODE: I,
    C_NUMBER_RE: b,
    END_SAME_AS_BEGIN: function (e) {
      return Object.assign(e, {
        "on:begin": (e, t) => {
          t.data._beginMatch = e[1];
        },
        "on:end": (e, t) => {
          t.data._beginMatch !== e[1] && t.ignoreMatch();
        }
      });
    },
    HASH_COMMENT_MODE: x,
    IDENT_RE: y,
    MATCH_NOTHING_RE: /\b\B/,
    METHOD_GUARD: N,
    NUMBER_MODE: D,
    NUMBER_RE: E,
    PHRASAL_WORDS_MODE: {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    QUOTE_STRING_MODE: M,
    REGEXP_MODE: L,
    RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG: (e = {}) => {
      const t = /^#![ ]*\//;
      return e.binary && (e.begin = h(t, /.*\b/, e.binary, /\b.*/)), a({
        scope: "meta",
        begin: t,
        end: /$/,
        relevance: 0,
        "on:begin": (e, t) => {
          0 !== e.index && t.ignoreMatch();
        }
      }, e);
    },
    TITLE_MODE: R,
    UNDERSCORE_IDENT_RE: v,
    UNDERSCORE_TITLE_MODE: B
  });
  function F(e, t) {
    "." === e.input[e.index - 1] && t.ignoreMatch();
  }
  function j(e, t) {
    void 0 !== e.className && (e.scope = e.className, delete e.className);
  }
  function H(e, t) {
    t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = F, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0));
  }
  function W(e, t) {
    Array.isArray(e.illegal) && (e.illegal = _(...e.illegal));
  }
  function K(e, t) {
    if (e.match) {
      if (e.begin || e.end) throw new Error("begin & end are not supported with match");
      e.begin = e.match, delete e.match;
    }
  }
  function V(e, t) {
    void 0 === e.relevance && (e.relevance = 1);
  }
  const z = (e, t) => {
      if (!e.beforeMatch) return;
      if (e.starts) throw new Error("beforeMatch cannot be used with starts");
      const n = Object.assign({}, e);
      Object.keys(e).forEach(t => {
        delete e[t];
      }), e.keywords = n.keywords, e.begin = h(n.beforeMatch, d(n.begin)), e.starts = {
        relevance: 0,
        contains: [Object.assign(n, {
          endsParent: !0
        })]
      }, e.relevance = 0, delete n.beforeMatch;
    },
    Y = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];
  function Q(e, t, n = "keyword") {
    const r = Object.create(null);
    return "string" == typeof e ? a(n, e.split(" ")) : Array.isArray(e) ? a(n, e) : Object.keys(e).forEach(function (n) {
      Object.assign(r, Q(e[n], t, n));
    }), r;
    function a(e, n) {
      t && (n = n.map(e => e.toLowerCase())), n.forEach(function (t) {
        const n = t.split("|");
        r[n[0]] = [e, G(n[0], n[1])];
      });
    }
  }
  function G(e, t) {
    return t ? Number(t) : function (e) {
      return Y.includes(e.toLowerCase());
    }(e) ? 0 : 1;
  }
  const $ = {},
    q = e => {
      console.error(e);
    },
    Z = (e, ...t) => {
      console.log(`WARN: ${e}`, ...t);
    },
    X = (e, t) => {
      $[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), $[`${e}/${t}`] = !0);
    },
    J = new Error();
  function ee(e, t, {
    key: n
  }) {
    let r = 0;
    const a = e[n],
      i = {},
      o = {};
    for (let e = 1; e <= t.length; e++) o[e + r] = a[e], i[e + r] = !0, r += m(t[e - 1]);
    e[n] = o, e[n]._emit = i, e[n]._multi = !0;
  }
  function te(e) {
    !function (e) {
      e.scope && "object" == typeof e.scope && null !== e.scope && (e.beginScope = e.scope, delete e.scope);
    }(e), "string" == typeof e.beginScope && (e.beginScope = {
      _wrap: e.beginScope
    }), "string" == typeof e.endScope && (e.endScope = {
      _wrap: e.endScope
    }), function (e) {
      if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) throw q("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), J;
        if ("object" != typeof e.beginScope || null === e.beginScope) throw q("beginScope must be object"), J;
        ee(e, e.begin, {
          key: "beginScope"
        }), e.begin = g(e.begin, {
          joinWith: ""
        });
      }
    }(e), function (e) {
      if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) throw q("skip, excludeEnd, returnEnd not compatible with endScope: {}"), J;
        if ("object" != typeof e.endScope || null === e.endScope) throw q("endScope must be object"), J;
        ee(e, e.end, {
          key: "endScope"
        }), e.end = g(e.end, {
          joinWith: ""
        });
      }
    }(e);
  }
  function ne(e) {
    function t(t, n) {
      return new RegExp(u(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""));
    }
    class n {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      addRule(e, t) {
        t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += m(e) + 1;
      }
      compile() {
        0 === this.regexes.length && (this.exec = () => null);
        const e = this.regexes.map(e => e[1]);
        this.matcherRe = t(g(e, {
          joinWith: "|"
        }), !0), this.lastIndex = 0;
      }
      exec(e) {
        this.matcherRe.lastIndex = this.lastIndex;
        const t = this.matcherRe.exec(e);
        if (!t) return null;
        const n = t.findIndex((e, t) => t > 0 && void 0 !== e),
          r = this.matchIndexes[n];
        return t.splice(0, n), Object.assign(t, r);
      }
    }
    class r {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      getMatcher(e) {
        if (this.multiRegexes[e]) return this.multiRegexes[e];
        const t = new n();
        return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), this.multiRegexes[e] = t, t;
      }
      resumingScanAtSamePosition() {
        return 0 !== this.regexIndex;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      addRule(e, t) {
        this.rules.push([e, t]), "begin" === t.type && this.count++;
      }
      exec(e) {
        const t = this.getMatcher(this.regexIndex);
        t.lastIndex = this.lastIndex;
        let n = t.exec(e);
        if (this.resumingScanAtSamePosition()) if (n && n.index === this.lastIndex) ;else {
          const t = this.getMatcher(0);
          t.lastIndex = this.lastIndex + 1, n = t.exec(e);
        }
        return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n;
      }
    }
    if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return e.classNameAliases = a(e.classNameAliases || {}), function n(i, o) {
      const s = i;
      if (i.isCompiled) return s;
      [j, K, te, z].forEach(e => e(i, o)), e.compilerExtensions.forEach(e => e(i, o)), i.__beforeBegin = null, [H, W, V].forEach(e => e(i, o)), i.isCompiled = !0;
      let l = null;
      return "object" == typeof i.keywords && i.keywords.$pattern && (i.keywords = Object.assign({}, i.keywords), l = i.keywords.$pattern, delete i.keywords.$pattern), l = l || /\w+/, i.keywords && (i.keywords = Q(i.keywords, e.case_insensitive)), s.keywordPatternRe = t(l, !0), o && (i.begin || (i.begin = /\B|\b/), s.beginRe = t(s.begin), i.end || i.endsWithParent || (i.end = /\B|\b/), i.end && (s.endRe = t(s.end)), s.terminatorEnd = u(s.end) || "", i.endsWithParent && o.terminatorEnd && (s.terminatorEnd += (i.end ? "|" : "") + o.terminatorEnd)), i.illegal && (s.illegalRe = t(i.illegal)), i.contains || (i.contains = []), i.contains = [].concat(...i.contains.map(function (e) {
        return function (e) {
          return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function (t) {
            return a(e, {
              variants: null
            }, t);
          })), e.cachedVariants ? e.cachedVariants : re(e) ? a(e, {
            starts: e.starts ? a(e.starts) : null
          }) : Object.isFrozen(e) ? a(e) : e;
        }("self" === e ? i : e);
      })), i.contains.forEach(function (e) {
        n(e, s);
      }), i.starts && n(i.starts, o), s.matcher = function (e) {
        const t = new r();
        return e.contains.forEach(e => t.addRule(e.begin, {
          rule: e,
          type: "begin"
        })), e.terminatorEnd && t.addRule(e.terminatorEnd, {
          type: "end"
        }), e.illegal && t.addRule(e.illegal, {
          type: "illegal"
        }), t;
      }(s), s;
    }(e);
  }
  function re(e) {
    return !!e && (e.endsWithParent || re(e.starts));
  }
  class ae extends Error {
    constructor(e, t) {
      super(e), this.name = "HTMLInjectionError", this.html = t;
    }
  }
  const ie = r,
    oe = a,
    se = Symbol("nomatch"),
    le = function (e) {
      const r = Object.create(null),
        a = Object.create(null),
        i = [];
      let o = !0;
      const s = "Could not find the language '{}', did you forget to load/include a language module?",
        l = {
          disableAutodetect: !0,
          name: "Plain text",
          contains: []
        };
      let u = {
        ignoreUnescapedHTML: !1,
        throwUnescapedHTML: !1,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: "hljs-",
        cssSelector: "pre code",
        languages: null,
        __emitter: c
      };
      function m(e) {
        return u.noHighlightRe.test(e);
      }
      function A(e, t, n) {
        let r = "",
          a = "";
        "object" == typeof t ? (r = e, n = t.ignoreIllegals, a = t.language) : (X("10.7.0", "highlight(lang, code, ...args) has been deprecated."), X("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), a = e, r = t), void 0 === n && (n = !0);
        const i = {
          code: r,
          language: a
        };
        M("before:highlight", i);
        const o = i.result ? i.result : g(i.language, i.code, n);
        return o.code = i.code, M("after:highlight", o), o;
      }
      function g(e, t, a, i) {
        const l = Object.create(null);
        function c(e, t) {
          return e.keywords[t];
        }
        function d() {
          if (!S.keywords) return void k.addText(x);
          let e = 0;
          S.keywordPatternRe.lastIndex = 0;
          let t = S.keywordPatternRe.exec(x),
            n = "";
          for (; t;) {
            n += x.substring(e, t.index);
            const r = C.case_insensitive ? t[0].toLowerCase() : t[0],
              a = c(S, r);
            if (a) {
              const [e, i] = a;
              if (k.addText(n), n = "", l[r] = (l[r] || 0) + 1, l[r] <= 7 && (D += i), e.startsWith("_")) n += t[0];else {
                const n = C.classNameAliases[e] || e;
                f(t[0], n);
              }
            } else n += t[0];
            e = S.keywordPatternRe.lastIndex, t = S.keywordPatternRe.exec(x);
          }
          n += x.substring(e), k.addText(n);
        }
        function p() {
          null != S.subLanguage ? function () {
            if ("" === x) return;
            let e = null;
            if ("string" == typeof S.subLanguage) {
              if (!r[S.subLanguage]) return void k.addText(x);
              e = g(S.subLanguage, x, !0, T[S.subLanguage]), T[S.subLanguage] = e._top;
            } else e = y(x, S.subLanguage.length ? S.subLanguage : null);
            S.relevance > 0 && (D += e.relevance), k.__addSublanguage(e._emitter, e.language);
          }() : d(), x = "";
        }
        function f(e, t) {
          "" !== e && (k.startScope(t), k.addText(e), k.endScope());
        }
        function h(e, t) {
          let n = 1;
          const r = t.length - 1;
          for (; n <= r;) {
            if (!e._emit[n]) {
              n++;
              continue;
            }
            const r = C.classNameAliases[e[n]] || e[n],
              a = t[n];
            r ? f(a, r) : (x = a, d(), x = ""), n++;
          }
        }
        function _(e, t) {
          return e.scope && "string" == typeof e.scope && k.openNode(C.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (f(x, C.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), x = "") : e.beginScope._multi && (h(e.beginScope, t), x = "")), S = Object.create(e, {
            parent: {
              value: S
            }
          }), S;
        }
        function m(e, t, r) {
          let a = function (e, t) {
            const n = e && e.exec(t);
            return n && 0 === n.index;
          }(e.endRe, r);
          if (a) {
            if (e["on:end"]) {
              const r = new n(e);
              e["on:end"](t, r), r.isMatchIgnored && (a = !1);
            }
            if (a) {
              for (; e.endsParent && e.parent;) e = e.parent;
              return e;
            }
          }
          if (e.endsWithParent) return m(e.parent, t, r);
        }
        function A(e) {
          return 0 === S.matcher.regexIndex ? (x += e[0], 1) : (L = !0, 0);
        }
        function v(e) {
          const n = e[0],
            r = t.substring(e.index),
            a = m(S, e, r);
          if (!a) return se;
          const i = S;
          S.endScope && S.endScope._wrap ? (p(), f(n, S.endScope._wrap)) : S.endScope && S.endScope._multi ? (p(), h(S.endScope, e)) : i.skip ? x += n : (i.returnEnd || i.excludeEnd || (x += n), p(), i.excludeEnd && (x = n));
          do {
            S.scope && k.closeNode(), S.skip || S.subLanguage || (D += S.relevance), S = S.parent;
          } while (S !== a.parent);
          return a.starts && _(a.starts, e), i.returnEnd ? 0 : n.length;
        }
        let E = {};
        function b(r, i) {
          const s = i && i[0];
          if (x += r, null == s) return p(), 0;
          if ("begin" === E.type && "end" === i.type && E.index === i.index && "" === s) {
            if (x += t.slice(i.index, i.index + 1), !o) {
              const t = new Error(`0 width match regex (${e})`);
              throw t.languageName = e, t.badRule = E.rule, t;
            }
            return 1;
          }
          if (E = i, "begin" === i.type) return function (e) {
            const t = e[0],
              r = e.rule,
              a = new n(r),
              i = [r.__beforeBegin, r["on:begin"]];
            for (const n of i) if (n && (n(e, a), a.isMatchIgnored)) return A(t);
            return r.skip ? x += t : (r.excludeBegin && (x += t), p(), r.returnBegin || r.excludeBegin || (x = t)), _(r, e), r.returnBegin ? 0 : t.length;
          }(i);
          if ("illegal" === i.type && !a) {
            const e = new Error('Illegal lexeme "' + s + '" for mode "' + (S.scope || "<unnamed>") + '"');
            throw e.mode = S, e;
          }
          if ("end" === i.type) {
            const e = v(i);
            if (e !== se) return e;
          }
          if ("illegal" === i.type && "" === s) return x += "\n", 1;
          if (P > 1e5 && P > 3 * i.index) throw new Error("potential infinite loop, way more iterations than matches");
          return x += s, s.length;
        }
        const C = w(e);
        if (!C) throw q(s.replace("{}", e)), new Error('Unknown language: "' + e + '"');
        const O = ne(C);
        let M = "",
          S = i || O;
        const T = {},
          k = new u.__emitter(u);
        !function () {
          const e = [];
          for (let t = S; t !== C; t = t.parent) t.scope && e.unshift(t.scope);
          e.forEach(e => k.openNode(e));
        }();
        let x = "",
          D = 0,
          I = 0,
          P = 0,
          L = !1;
        try {
          if (C.__emitTokens) C.__emitTokens(t, k);else {
            for (S.matcher.considerAll();;) {
              P++, L ? L = !1 : S.matcher.considerAll(), S.matcher.lastIndex = I;
              const e = S.matcher.exec(t);
              if (!e) break;
              const n = b(t.substring(I, e.index), e);
              I = e.index + n;
            }
            b(t.substring(I));
          }
          return k.finalize(), M = k.toHTML(), {
            language: e,
            value: M,
            relevance: D,
            illegal: !1,
            _emitter: k,
            _top: S
          };
        } catch (n) {
          if (n.message && n.message.includes("Illegal")) return {
            language: e,
            value: ie(t),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: n.message,
              index: I,
              context: t.slice(I - 100, I + 100),
              mode: n.mode,
              resultSoFar: M
            },
            _emitter: k
          };
          if (o) return {
            language: e,
            value: ie(t),
            illegal: !1,
            relevance: 0,
            errorRaised: n,
            _emitter: k,
            _top: S
          };
          throw n;
        }
      }
      function y(e, t) {
        t = t || u.languages || Object.keys(r);
        const n = function (e) {
            const t = {
              value: ie(e),
              illegal: !1,
              relevance: 0,
              _top: l,
              _emitter: new u.__emitter(u)
            };
            return t._emitter.addText(e), t;
          }(e),
          a = t.filter(w).filter(O).map(t => g(t, e, !1));
        a.unshift(n);
        const i = a.sort((e, t) => {
            if (e.relevance !== t.relevance) return t.relevance - e.relevance;
            if (e.language && t.language) {
              if (w(e.language).supersetOf === t.language) return 1;
              if (w(t.language).supersetOf === e.language) return -1;
            }
            return 0;
          }),
          [o, s] = i,
          c = o;
        return c.secondBest = s, c;
      }
      function v(e) {
        let t = null;
        const n = function (e) {
          let t = e.className + " ";
          t += e.parentNode ? e.parentNode.className : "";
          const n = u.languageDetectRe.exec(t);
          if (n) {
            const t = w(n[1]);
            return t || (Z(s.replace("{}", n[1])), Z("Falling back to no-highlight mode for this block.", e)), t ? n[1] : "no-highlight";
          }
          return t.split(/\s+/).find(e => m(e) || w(e));
        }(e);
        if (m(n)) return;
        if (M("before:highlightElement", {
          el: e,
          language: n
        }), e.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", e);
        if (e.children.length > 0 && (u.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), u.throwUnescapedHTML)) throw new ae("One of your code blocks includes unescaped HTML.", e.innerHTML);
        t = e;
        const r = t.textContent,
          i = n ? A(r, {
            language: n,
            ignoreIllegals: !0
          }) : y(r);
        e.innerHTML = i.value, e.dataset.highlighted = "yes", function (e, t, n) {
          const r = t && a[t] || n;
          e.classList.add("hljs"), e.classList.add(`language-${r}`);
        }(e, n, i.language), e.result = {
          language: i.language,
          re: i.relevance,
          relevance: i.relevance
        }, i.secondBest && (e.secondBest = {
          language: i.secondBest.language,
          relevance: i.secondBest.relevance
        }), M("after:highlightElement", {
          el: e,
          result: i,
          text: r
        });
      }
      let E = !1;
      function b() {
        if ("loading" === document.readyState) return E || window.addEventListener("DOMContentLoaded", function () {
          b();
        }, !1), void (E = !0);
        document.querySelectorAll(u.cssSelector).forEach(v);
      }
      function w(e) {
        return e = (e || "").toLowerCase(), r[e] || r[a[e]];
      }
      function C(e, {
        languageName: t
      }) {
        "string" == typeof e && (e = [e]), e.forEach(e => {
          a[e.toLowerCase()] = t;
        });
      }
      function O(e) {
        const t = w(e);
        return t && !t.disableAutodetect;
      }
      function M(e, t) {
        const n = e;
        i.forEach(function (e) {
          e[n] && e[n](t);
        });
      }
      Object.assign(e, {
        highlight: A,
        highlightAuto: y,
        highlightAll: b,
        highlightElement: v,
        highlightBlock: function (e) {
          return X("10.7.0", "highlightBlock will be removed entirely in v12.0"), X("10.7.0", "Please use highlightElement now."), v(e);
        },
        configure: function (e) {
          u = oe(u, e);
        },
        initHighlighting: () => {
          b(), X("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
        },
        initHighlightingOnLoad: function () {
          b(), X("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
        },
        registerLanguage: function (t, n) {
          let a = null;
          try {
            a = n(e);
          } catch (e) {
            if (q("Language definition for '{}' could not be registered.".replace("{}", t)), !o) throw e;
            q(e), a = l;
          }
          a.name || (a.name = t), r[t] = a, a.rawDefinition = n.bind(null, e), a.aliases && C(a.aliases, {
            languageName: t
          });
        },
        unregisterLanguage: function (e) {
          delete r[e];
          for (const t of Object.keys(a)) a[t] === e && delete a[t];
        },
        listLanguages: function () {
          return Object.keys(r);
        },
        getLanguage: w,
        registerAliases: C,
        autoDetection: O,
        inherit: oe,
        addPlugin: function (e) {
          !function (e) {
            e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = t => {
              e["before:highlightBlock"](Object.assign({
                block: t.el
              }, t));
            }), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = t => {
              e["after:highlightBlock"](Object.assign({
                block: t.el
              }, t));
            });
          }(e), i.push(e);
        },
        removePlugin: function (e) {
          const t = i.indexOf(e);
          -1 !== t && i.splice(t, 1);
        }
      }), e.debugMode = function () {
        o = !1;
      }, e.safeMode = function () {
        o = !0;
      }, e.versionString = "11.11.1", e.regex = {
        concat: h,
        lookahead: d,
        either: _,
        optional: f,
        anyNumberOfTimes: p
      };
      for (const e in U) "object" == typeof U[e] && t(U[e]);
      return Object.assign(e, U), e;
    },
    ce = le({});
  ce.newInstance = () => le({}), e.exports = ce, ce.HighlightJS = ce, ce.default = ce;
});
