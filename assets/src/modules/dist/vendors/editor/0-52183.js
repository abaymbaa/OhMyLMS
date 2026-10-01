// Reconstructed Webpack factory 52183; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(95006),
    s = n(99248),
    r = n(56614),
    i = n(37392);
  function a(e) {
    return e && "object" == typeof e && "default" in e ? e : {
      default: e
    };
  }
  var c = a(o);
  function d(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function l(e) {
    return e instanceof Map ? e.clear = e.delete = e.set = function () {
      throw new Error("map is read-only");
    } : e instanceof Set && (e.add = e.clear = e.delete = function () {
      throw new Error("set is read-only");
    }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach(t => {
      const n = e[t],
        o = typeof n;
      "object" !== o && "function" !== o || Object.isFrozen(n) || l(n);
    }), e;
  }
  class u {
    constructor(e) {
      void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function h(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function p(e, ...t) {
    const n = Object.create(null);
    for (const t in e) n[t] = e[t];
    return t.forEach(function (e) {
      for (const t in e) n[t] = e[t];
    }), n;
  }
  const m = e => !!e.scope;
  class f {
    constructor(e, t) {
      this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this);
    }
    addText(e) {
      this.buffer += h(e);
    }
    openNode(e) {
      if (!m(e)) return;
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
      m(e) && (this.buffer += "</span>");
    }
    value() {
      return this.buffer;
    }
    span(e) {
      this.buffer += `<span class="${e}">`;
    }
  }
  const g = (e = {}) => {
    const t = {
      children: []
    };
    return Object.assign(t, e), t;
  };
  class b {
    constructor() {
      this.rootNode = g(), this.stack = [this.rootNode];
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
      const t = g({
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
        b._collapse(e);
      }));
    }
  }
  class y extends b {
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
      return new f(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function v(e) {
    return e ? "string" == typeof e ? e : e.source : null;
  }
  function w(e) {
    return S("(?=", e, ")");
  }
  function k(e) {
    return S("(?:", e, ")*");
  }
  function M(e) {
    return S("(?:", e, ")?");
  }
  function S(...e) {
    return e.map(e => v(e)).join("");
  }
  function x(...e) {
    const t = function (e) {
      const t = e[e.length - 1];
      return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
    }(e);
    return "(" + (t.capture ? "" : "?:") + e.map(e => v(e)).join("|") + ")";
  }
  function C(e) {
    return new RegExp(e.toString() + "|").exec("").length - 1;
  }
  const T = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function E(e, {
    joinWith: t
  }) {
    let n = 0;
    return e.map(e => {
      n += 1;
      const t = n;
      let o = v(e),
        s = "";
      for (; o.length > 0;) {
        const e = T.exec(o);
        if (!e) {
          s += o;
          break;
        }
        s += o.substring(0, e.index), o = o.substring(e.index + e[0].length), "\\" === e[0][0] && e[1] ? s += "\\" + String(Number(e[1]) + t) : (s += e[0], "(" === e[0] && n++);
      }
      return s;
    }).map(e => `(${e})`).join(t);
  }
  const O = "[a-zA-Z]\\w*",
    A = "[a-zA-Z_]\\w*",
    P = "\\b\\d+(\\.\\d+)?",
    L = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    N = "\\b(0b[01]+)",
    R = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    },
    I = {
      scope: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [R]
    },
    D = {
      scope: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [R]
    },
    H = function (e, t, n = {}) {
      const o = p({
        scope: "comment",
        begin: e,
        end: t,
        contains: []
      }, n);
      o.contains.push({
        scope: "doctag",
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: !0,
        relevance: 0
      });
      const s = x("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
      return o.contains.push({
        begin: S(/[ ]+/, "(", s, /[.]?[:]?([.][ ]|[ ])/, "){3}")
      }), o;
    },
    $ = H("//", "$"),
    j = H("/\\*", "\\*/"),
    _ = H("#", "$"),
    B = {
      scope: "number",
      begin: P,
      relevance: 0
    },
    U = {
      scope: "number",
      begin: L,
      relevance: 0
    },
    z = {
      scope: "number",
      begin: N,
      relevance: 0
    },
    V = {
      scope: "regexp",
      begin: /\/(?=[^/\n]*\/)/,
      end: /\/[gimuy]*/,
      contains: [R, {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [R]
      }]
    },
    F = {
      scope: "title",
      begin: O,
      relevance: 0
    },
    W = {
      scope: "title",
      begin: A,
      relevance: 0
    },
    K = {
      begin: "\\.\\s*" + A,
      relevance: 0
    };
  var q = Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: I,
    BACKSLASH_ESCAPE: R,
    BINARY_NUMBER_MODE: z,
    BINARY_NUMBER_RE: N,
    COMMENT: H,
    C_BLOCK_COMMENT_MODE: j,
    C_LINE_COMMENT_MODE: $,
    C_NUMBER_MODE: U,
    C_NUMBER_RE: L,
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
    HASH_COMMENT_MODE: _,
    IDENT_RE: O,
    MATCH_NOTHING_RE: /\b\B/,
    METHOD_GUARD: K,
    NUMBER_MODE: B,
    NUMBER_RE: P,
    PHRASAL_WORDS_MODE: {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    QUOTE_STRING_MODE: D,
    REGEXP_MODE: V,
    RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG: (e = {}) => {
      const t = /^#![ ]*\//;
      return e.binary && (e.begin = S(t, /.*\b/, e.binary, /\b.*/)), p({
        scope: "meta",
        begin: t,
        end: /$/,
        relevance: 0,
        "on:begin": (e, t) => {
          0 !== e.index && t.ignoreMatch();
        }
      }, e);
    },
    TITLE_MODE: F,
    UNDERSCORE_IDENT_RE: A,
    UNDERSCORE_TITLE_MODE: W
  });
  function J(e, t) {
    "." === e.input[e.index - 1] && t.ignoreMatch();
  }
  function G(e, t) {
    void 0 !== e.className && (e.scope = e.className, delete e.className);
  }
  function Q(e, t) {
    t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = J, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0));
  }
  function Y(e, t) {
    Array.isArray(e.illegal) && (e.illegal = x(...e.illegal));
  }
  function X(e, t) {
    if (e.match) {
      if (e.begin || e.end) throw new Error("begin & end are not supported with match");
      e.begin = e.match, delete e.match;
    }
  }
  function Z(e, t) {
    void 0 === e.relevance && (e.relevance = 1);
  }
  const ee = (e, t) => {
      if (!e.beforeMatch) return;
      if (e.starts) throw new Error("beforeMatch cannot be used with starts");
      const n = Object.assign({}, e);
      Object.keys(e).forEach(t => {
        delete e[t];
      }), e.keywords = n.keywords, e.begin = S(n.beforeMatch, w(n.begin)), e.starts = {
        relevance: 0,
        contains: [Object.assign(n, {
          endsParent: !0
        })]
      }, e.relevance = 0, delete n.beforeMatch;
    },
    te = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];
  function ne(e, t, n = "keyword") {
    const o = Object.create(null);
    return "string" == typeof e ? s(n, e.split(" ")) : Array.isArray(e) ? s(n, e) : Object.keys(e).forEach(function (n) {
      Object.assign(o, ne(e[n], t, n));
    }), o;
    function s(e, n) {
      t && (n = n.map(e => e.toLowerCase())), n.forEach(function (t) {
        const n = t.split("|");
        o[n[0]] = [e, oe(n[0], n[1])];
      });
    }
  }
  function oe(e, t) {
    return t ? Number(t) : function (e) {
      return te.includes(e.toLowerCase());
    }(e) ? 0 : 1;
  }
  const se = {},
    re = e => {
      console.error(e);
    },
    ie = (e, ...t) => {
      console.log(`WARN: ${e}`, ...t);
    },
    ae = (e, t) => {
      se[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), se[`${e}/${t}`] = !0);
    },
    ce = new Error();
  function de(e, t, {
    key: n
  }) {
    let o = 0;
    const s = e[n],
      r = {},
      i = {};
    for (let e = 1; e <= t.length; e++) i[e + o] = s[e], r[e + o] = !0, o += C(t[e - 1]);
    e[n] = i, e[n]._emit = r, e[n]._multi = !0;
  }
  function le(e) {
    !function (e) {
      e.scope && "object" == typeof e.scope && null !== e.scope && (e.beginScope = e.scope, delete e.scope);
    }(e), "string" == typeof e.beginScope && (e.beginScope = {
      _wrap: e.beginScope
    }), "string" == typeof e.endScope && (e.endScope = {
      _wrap: e.endScope
    }), function (e) {
      if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) throw re("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), ce;
        if ("object" != typeof e.beginScope || null === e.beginScope) throw re("beginScope must be object"), ce;
        de(e, e.begin, {
          key: "beginScope"
        }), e.begin = E(e.begin, {
          joinWith: ""
        });
      }
    }(e), function (e) {
      if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) throw re("skip, excludeEnd, returnEnd not compatible with endScope: {}"), ce;
        if ("object" != typeof e.endScope || null === e.endScope) throw re("endScope must be object"), ce;
        de(e, e.end, {
          key: "endScope"
        }), e.end = E(e.end, {
          joinWith: ""
        });
      }
    }(e);
  }
  function ue(e) {
    function t(t, n) {
      return new RegExp(v(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""));
    }
    class n {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      addRule(e, t) {
        t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += C(e) + 1;
      }
      compile() {
        0 === this.regexes.length && (this.exec = () => null);
        const e = this.regexes.map(e => e[1]);
        this.matcherRe = t(E(e, {
          joinWith: "|"
        }), !0), this.lastIndex = 0;
      }
      exec(e) {
        this.matcherRe.lastIndex = this.lastIndex;
        const t = this.matcherRe.exec(e);
        if (!t) return null;
        const n = t.findIndex((e, t) => t > 0 && void 0 !== e),
          o = this.matchIndexes[n];
        return t.splice(0, n), Object.assign(t, o);
      }
    }
    class o {
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
    return e.classNameAliases = p(e.classNameAliases || {}), function n(s, r) {
      const i = s;
      if (s.isCompiled) return i;
      [G, X, le, ee].forEach(e => e(s, r)), e.compilerExtensions.forEach(e => e(s, r)), s.__beforeBegin = null, [Q, Y, Z].forEach(e => e(s, r)), s.isCompiled = !0;
      let a = null;
      return "object" == typeof s.keywords && s.keywords.$pattern && (s.keywords = Object.assign({}, s.keywords), a = s.keywords.$pattern, delete s.keywords.$pattern), a = a || /\w+/, s.keywords && (s.keywords = ne(s.keywords, e.case_insensitive)), i.keywordPatternRe = t(a, !0), r && (s.begin || (s.begin = /\B|\b/), i.beginRe = t(i.begin), s.end || s.endsWithParent || (s.end = /\B|\b/), s.end && (i.endRe = t(i.end)), i.terminatorEnd = v(i.end) || "", s.endsWithParent && r.terminatorEnd && (i.terminatorEnd += (s.end ? "|" : "") + r.terminatorEnd)), s.illegal && (i.illegalRe = t(s.illegal)), s.contains || (s.contains = []), s.contains = [].concat(...s.contains.map(function (e) {
        return function (e) {
          return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function (t) {
            return p(e, {
              variants: null
            }, t);
          })), e.cachedVariants ? e.cachedVariants : he(e) ? p(e, {
            starts: e.starts ? p(e.starts) : null
          }) : Object.isFrozen(e) ? p(e) : e;
        }("self" === e ? s : e);
      })), s.contains.forEach(function (e) {
        n(e, i);
      }), s.starts && n(s.starts, r), i.matcher = function (e) {
        const t = new o();
        return e.contains.forEach(e => t.addRule(e.begin, {
          rule: e,
          type: "begin"
        })), e.terminatorEnd && t.addRule(e.terminatorEnd, {
          type: "end"
        }), e.illegal && t.addRule(e.illegal, {
          type: "illegal"
        }), t;
      }(i), i;
    }(e);
  }
  function he(e) {
    return !!e && (e.endsWithParent || he(e.starts));
  }
  class pe extends Error {
    constructor(e, t) {
      super(e), this.name = "HTMLInjectionError", this.html = t;
    }
  }
  const me = h,
    fe = p,
    ge = Symbol("nomatch"),
    be = function (e) {
      const t = Object.create(null),
        n = Object.create(null),
        o = [];
      let s = !0;
      const r = "Could not find the language '{}', did you forget to load/include a language module?",
        i = {
          disableAutodetect: !0,
          name: "Plain text",
          contains: []
        };
      let a = {
        ignoreUnescapedHTML: !1,
        throwUnescapedHTML: !1,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: "hljs-",
        cssSelector: "pre code",
        languages: null,
        __emitter: y
      };
      function c(e) {
        return a.noHighlightRe.test(e);
      }
      function d(e, t, n) {
        let o = "",
          s = "";
        "object" == typeof t ? (o = e, n = t.ignoreIllegals, s = t.language) : (ae("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ae("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), s = e, o = t), void 0 === n && (n = !0);
        const r = {
          code: o,
          language: s
        };
        T("before:highlight", r);
        const i = r.result ? r.result : h(r.language, r.code, n);
        return i.code = r.code, T("after:highlight", i), i;
      }
      function h(e, n, o, i) {
        const c = Object.create(null);
        function d(e, t) {
          return e.keywords[t];
        }
        function l() {
          if (!E.keywords) return void A.addText(P);
          let e = 0;
          E.keywordPatternRe.lastIndex = 0;
          let t = E.keywordPatternRe.exec(P),
            n = "";
          for (; t;) {
            n += P.substring(e, t.index);
            const o = x.case_insensitive ? t[0].toLowerCase() : t[0],
              s = d(E, o);
            if (s) {
              const [e, r] = s;
              if (A.addText(n), n = "", c[o] = (c[o] || 0) + 1, c[o] <= 7 && (L += r), e.startsWith("_")) n += t[0];else {
                const n = x.classNameAliases[e] || e;
                f(t[0], n);
              }
            } else n += t[0];
            e = E.keywordPatternRe.lastIndex, t = E.keywordPatternRe.exec(P);
          }
          n += P.substring(e), A.addText(n);
        }
        function m() {
          null != E.subLanguage ? function () {
            if ("" === P) return;
            let e = null;
            if ("string" == typeof E.subLanguage) {
              if (!t[E.subLanguage]) return void A.addText(P);
              e = h(E.subLanguage, P, !0, O[E.subLanguage]), O[E.subLanguage] = e._top;
            } else e = p(P, E.subLanguage.length ? E.subLanguage : null);
            E.relevance > 0 && (L += e.relevance), A.__addSublanguage(e._emitter, e.language);
          }() : l(), P = "";
        }
        function f(e, t) {
          "" !== e && (A.startScope(t), A.addText(e), A.endScope());
        }
        function g(e, t) {
          let n = 1;
          const o = t.length - 1;
          for (; n <= o;) {
            if (!e._emit[n]) {
              n++;
              continue;
            }
            const o = x.classNameAliases[e[n]] || e[n],
              s = t[n];
            o ? f(s, o) : (P = s, l(), P = ""), n++;
          }
        }
        function y(e, t) {
          return e.scope && "string" == typeof e.scope && A.openNode(x.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (f(P, x.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), P = "") : e.beginScope._multi && (g(e.beginScope, t), P = "")), E = Object.create(e, {
            parent: {
              value: E
            }
          }), E;
        }
        function v(e, t, n) {
          let o = function (e, t) {
            const n = e && e.exec(t);
            return n && 0 === n.index;
          }(e.endRe, n);
          if (o) {
            if (e["on:end"]) {
              const n = new u(e);
              e["on:end"](t, n), n.isMatchIgnored && (o = !1);
            }
            if (o) {
              for (; e.endsParent && e.parent;) e = e.parent;
              return e;
            }
          }
          if (e.endsWithParent) return v(e.parent, t, n);
        }
        function w(e) {
          return 0 === E.matcher.regexIndex ? (P += e[0], 1) : (I = !0, 0);
        }
        function k(e) {
          const t = e[0],
            o = n.substring(e.index),
            s = v(E, e, o);
          if (!s) return ge;
          const r = E;
          E.endScope && E.endScope._wrap ? (m(), f(t, E.endScope._wrap)) : E.endScope && E.endScope._multi ? (m(), g(E.endScope, e)) : r.skip ? P += t : (r.returnEnd || r.excludeEnd || (P += t), m(), r.excludeEnd && (P = t));
          do {
            E.scope && A.closeNode(), E.skip || E.subLanguage || (L += E.relevance), E = E.parent;
          } while (E !== s.parent);
          return s.starts && y(s.starts, e), r.returnEnd ? 0 : t.length;
        }
        let M = {};
        function S(t, r) {
          const i = r && r[0];
          if (P += t, null == i) return m(), 0;
          if ("begin" === M.type && "end" === r.type && M.index === r.index && "" === i) {
            if (P += n.slice(r.index, r.index + 1), !s) {
              const t = new Error(`0 width match regex (${e})`);
              throw t.languageName = e, t.badRule = M.rule, t;
            }
            return 1;
          }
          if (M = r, "begin" === r.type) return function (e) {
            const t = e[0],
              n = e.rule,
              o = new u(n),
              s = [n.__beforeBegin, n["on:begin"]];
            for (const n of s) if (n && (n(e, o), o.isMatchIgnored)) return w(t);
            return n.skip ? P += t : (n.excludeBegin && (P += t), m(), n.returnBegin || n.excludeBegin || (P = t)), y(n, e), n.returnBegin ? 0 : t.length;
          }(r);
          if ("illegal" === r.type && !o) {
            const e = new Error('Illegal lexeme "' + i + '" for mode "' + (E.scope || "<unnamed>") + '"');
            throw e.mode = E, e;
          }
          if ("end" === r.type) {
            const e = k(r);
            if (e !== ge) return e;
          }
          if ("illegal" === r.type && "" === i) return 1;
          if (R > 1e5 && R > 3 * r.index) throw new Error("potential infinite loop, way more iterations than matches");
          return P += i, i.length;
        }
        const x = b(e);
        if (!x) throw re(r.replace("{}", e)), new Error('Unknown language: "' + e + '"');
        const C = ue(x);
        let T = "",
          E = i || C;
        const O = {},
          A = new a.__emitter(a);
        !function () {
          const e = [];
          for (let t = E; t !== x; t = t.parent) t.scope && e.unshift(t.scope);
          e.forEach(e => A.openNode(e));
        }();
        let P = "",
          L = 0,
          N = 0,
          R = 0,
          I = !1;
        try {
          if (x.__emitTokens) x.__emitTokens(n, A);else {
            for (E.matcher.considerAll();;) {
              R++, I ? I = !1 : E.matcher.considerAll(), E.matcher.lastIndex = N;
              const e = E.matcher.exec(n);
              if (!e) break;
              const t = S(n.substring(N, e.index), e);
              N = e.index + t;
            }
            S(n.substring(N));
          }
          return A.finalize(), T = A.toHTML(), {
            language: e,
            value: T,
            relevance: L,
            illegal: !1,
            _emitter: A,
            _top: E
          };
        } catch (t) {
          if (t.message && t.message.includes("Illegal")) return {
            language: e,
            value: me(n),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: t.message,
              index: N,
              context: n.slice(N - 100, N + 100),
              mode: t.mode,
              resultSoFar: T
            },
            _emitter: A
          };
          if (s) return {
            language: e,
            value: me(n),
            illegal: !1,
            relevance: 0,
            errorRaised: t,
            _emitter: A,
            _top: E
          };
          throw t;
        }
      }
      function p(e, n) {
        n = n || a.languages || Object.keys(t);
        const o = function (e) {
            const t = {
              value: me(e),
              illegal: !1,
              relevance: 0,
              _top: i,
              _emitter: new a.__emitter(a)
            };
            return t._emitter.addText(e), t;
          }(e),
          s = n.filter(b).filter(C).map(t => h(t, e, !1));
        s.unshift(o);
        const r = s.sort((e, t) => {
            if (e.relevance !== t.relevance) return t.relevance - e.relevance;
            if (e.language && t.language) {
              if (b(e.language).supersetOf === t.language) return 1;
              if (b(t.language).supersetOf === e.language) return -1;
            }
            return 0;
          }),
          [c, d] = r,
          l = c;
        return l.secondBest = d, l;
      }
      function m(e) {
        let t = null;
        const o = function (e) {
          let t = e.className + " ";
          t += e.parentNode ? e.parentNode.className : "";
          const n = a.languageDetectRe.exec(t);
          if (n) {
            const t = b(n[1]);
            return t || (ie(r.replace("{}", n[1])), ie("Falling back to no-highlight mode for this block.", e)), t ? n[1] : "no-highlight";
          }
          return t.split(/\s+/).find(e => c(e) || b(e));
        }(e);
        if (c(o)) return;
        if (T("before:highlightElement", {
          el: e,
          language: o
        }), e.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", e);
        if (e.children.length > 0 && (a.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), a.throwUnescapedHTML)) throw new pe("One of your code blocks includes unescaped HTML.", e.innerHTML);
        t = e;
        const s = t.textContent,
          i = o ? d(s, {
            language: o,
            ignoreIllegals: !0
          }) : p(s);
        e.innerHTML = i.value, e.dataset.highlighted = "yes", function (e, t, o) {
          const s = t && n[t] || o;
          e.classList.add("hljs"), e.classList.add(`language-${s}`);
        }(e, o, i.language), e.result = {
          language: i.language,
          re: i.relevance,
          relevance: i.relevance
        }, i.secondBest && (e.secondBest = {
          language: i.secondBest.language,
          relevance: i.secondBest.relevance
        }), T("after:highlightElement", {
          el: e,
          result: i,
          text: s
        });
      }
      let f = !1;
      function g() {
        "loading" !== document.readyState ? document.querySelectorAll(a.cssSelector).forEach(m) : f = !0;
      }
      function b(e) {
        return e = (e || "").toLowerCase(), t[e] || t[n[e]];
      }
      function v(e, {
        languageName: t
      }) {
        "string" == typeof e && (e = [e]), e.forEach(e => {
          n[e.toLowerCase()] = t;
        });
      }
      function C(e) {
        const t = b(e);
        return t && !t.disableAutodetect;
      }
      function T(e, t) {
        const n = e;
        o.forEach(function (e) {
          e[n] && e[n](t);
        });
      }
      "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", function () {
        f && g();
      }, !1), Object.assign(e, {
        highlight: d,
        highlightAuto: p,
        highlightAll: g,
        highlightElement: m,
        highlightBlock: function (e) {
          return ae("10.7.0", "highlightBlock will be removed entirely in v12.0"), ae("10.7.0", "Please use highlightElement now."), m(e);
        },
        configure: function (e) {
          a = fe(a, e);
        },
        initHighlighting: () => {
          g(), ae("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
        },
        initHighlightingOnLoad: function () {
          g(), ae("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
        },
        registerLanguage: function (n, o) {
          let r = null;
          try {
            r = o(e);
          } catch (e) {
            if (re("Language definition for '{}' could not be registered.".replace("{}", n)), !s) throw e;
            re(e), r = i;
          }
          r.name || (r.name = n), t[n] = r, r.rawDefinition = o.bind(null, e), r.aliases && v(r.aliases, {
            languageName: n
          });
        },
        unregisterLanguage: function (e) {
          delete t[e];
          for (const t of Object.keys(n)) n[t] === e && delete n[t];
        },
        listLanguages: function () {
          return Object.keys(t);
        },
        getLanguage: b,
        registerAliases: v,
        autoDetection: C,
        inherit: fe,
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
          }(e), o.push(e);
        },
        removePlugin: function (e) {
          const t = o.indexOf(e);
          -1 !== t && o.splice(t, 1);
        }
      }), e.debugMode = function () {
        s = !1;
      }, e.safeMode = function () {
        s = !0;
      }, e.versionString = "11.10.0", e.regex = {
        concat: S,
        lookahead: w,
        either: x,
        optional: M,
        anyNumberOfTimes: k
      };
      for (const e in q) "object" == typeof q[e] && l(q[e]);
      return Object.assign(e, q), e;
    },
    ye = be({});
  ye.newInstance = () => be({});
  var ve = ye;
  ye.HighlightJS = ye, ye.default = ye;
  var we = d(ve);
  function ke(e, t = []) {
    return e.map(e => {
      const n = [...t, ...(e.properties ? e.properties.className : [])];
      return e.children ? ke(e.children, n) : {
        text: e.value,
        classes: n
      };
    }).flat();
  }
  function Me(e) {
    return e.value || e.children || [];
  }
  function Se({
    doc: e,
    name: t,
    lowlight: n,
    defaultLanguage: o
  }) {
    const r = [];
    return s.findChildren(e, e => e.type.name === t).forEach(e => {
      var t;
      let s = e.pos + 1;
      const a = e.node.attrs.language || o,
        c = n.listLanguages();
      var d;
      ke(a && (c.includes(a) || (d = a, Boolean(we.getLanguage(d))) || (null === (t = n.registered) || void 0 === t ? void 0 : t.call(n, a))) ? Me(n.highlight(a, e.node.textContent)) : Me(n.highlightAuto(e.node.textContent))).forEach(e => {
        const t = s + e.text.length;
        if (e.classes.length) {
          const n = i.Decoration.inline(s, t, {
            class: e.classes.join(" ")
          });
          r.push(n);
        }
        s = t;
      });
    }), i.DecorationSet.create(e, r);
  }
  function xe({
    name: e,
    lowlight: t,
    defaultLanguage: n
  }) {
    if (!["highlight", "highlightAuto", "listLanguages"].every(e => "function" == typeof t[e])) throw Error("You should provide an instance of lowlight to use the code-block-lowlight extension");
    const o = new r.Plugin({
      key: new r.PluginKey("lowlight"),
      state: {
        init: (o, {
          doc: s
        }) => Se({
          doc: s,
          name: e,
          lowlight: t,
          defaultLanguage: n
        }),
        apply: (o, r, i, a) => {
          const c = i.selection.$head.parent.type.name,
            d = a.selection.$head.parent.type.name,
            l = s.findChildren(i.doc, t => t.type.name === e),
            u = s.findChildren(a.doc, t => t.type.name === e);
          return o.docChanged && ([c, d].includes(e) || u.length !== l.length || o.steps.some(e => void 0 !== e.from && void 0 !== e.to && l.some(t => t.pos >= e.from && t.pos + t.node.nodeSize <= e.to))) ? Se({
            doc: o.doc,
            name: e,
            lowlight: t,
            defaultLanguage: n
          }) : r.map(o.mapping, o.doc);
        }
      },
      props: {
        decorations: e => o.getState(e)
      }
    });
    return o;
  }
  const Ce = c.default.extend({
    addOptions() {
      var e;
      return {
        ...(null === (e = this.parent) || void 0 === e ? void 0 : e.call(this)),
        lowlight: {},
        languageClassPrefix: "language-",
        exitOnTripleEnter: !0,
        exitOnArrowDown: !0,
        defaultLanguage: null,
        HTMLAttributes: {}
      };
    },
    addProseMirrorPlugins() {
      var e;
      return [...((null === (e = this.parent) || void 0 === e ? void 0 : e.call(this)) || []), xe({
        name: this.name,
        lowlight: this.options.lowlight,
        defaultLanguage: this.options.defaultLanguage
      })];
    }
  });
  t.CodeBlockLowlight = Ce, t.default = Ce;
});
