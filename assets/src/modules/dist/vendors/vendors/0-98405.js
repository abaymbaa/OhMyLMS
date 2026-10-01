// Reconstructed Webpack factory 98405; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    AbsolutePosition: () => sn,
    AbstractConnector: () => lt,
    AbstractStruct: () => wa,
    AbstractType: () => Dr,
    Array: () => Xr,
    ContentAny: () => Pa,
    ContentBinary: () => Oa,
    ContentDeleted: () => Ma,
    ContentDoc: () => Ta,
    ContentEmbed: () => ka,
    ContentFormat: () => xa,
    ContentJSON: () => Da,
    ContentString: () => La,
    ContentType: () => Ka,
    Doc: () => wt,
    GC: () => Ca,
    ID: () => Gt,
    Item: () => $a,
    Map: () => ea,
    PermanentUserData: () => nn,
    RelativePosition: () => rn,
    Skip: () => Xa,
    Snapshot: () => hn,
    Text: () => ma,
    Transaction: () => Nn,
    UndoManager: () => $n,
    UpdateDecoderV1: () => Ot,
    UpdateDecoderV2: () => St,
    UpdateEncoderV1: () => kt,
    UpdateEncoderV2: () => Dt,
    XmlElement: () => ya,
    XmlFragment: () => ga,
    XmlHook: () => Ea,
    XmlText: () => ba,
    YArrayEvent: () => Zr,
    YEvent: () => Er,
    YMapEvent: () => Jr,
    YTextEvent: () => _a,
    YXmlEvent: () => va,
    applyUpdate: () => Bt,
    applyUpdateV2: () => Rt,
    cleanupYTextFormatting: () => pa,
    compareIDs: () => $t,
    compareRelativePositions: () => fn,
    convertUpdateFormatV1ToV2: () => gr,
    convertUpdateFormatV2ToV1: () => yr,
    createAbsolutePositionFromRelativePosition: () => pn,
    createDeleteSet: () => mt,
    createDeleteSetFromStructStore: () => At,
    createDocFromSnapshot: () => On,
    createID: () => qt,
    createRelativePositionFromJSON: () => on,
    createRelativePositionFromTypeIndex: () => cn,
    createSnapshot: () => vn,
    decodeRelativePosition: () => dn,
    decodeSnapshot: () => yn,
    decodeSnapshotV2: () => gn,
    decodeStateVector: () => jt,
    decodeUpdate: () => Jn,
    decodeUpdateV2: () => er,
    diffUpdate: () => ur,
    diffUpdateV2: () => cr,
    emptySnapshot: () => En,
    encodeRelativePosition: () => un,
    encodeSnapshot: () => An,
    encodeSnapshotV2: () => mn,
    encodeStateAsUpdate: () => Ut,
    encodeStateAsUpdateV2: () => Nt,
    encodeStateVector: () => Wt,
    encodeStateVectorFromUpdate: () => ar,
    encodeStateVectorFromUpdateV2: () => rr,
    equalDeleteSets: () => Et,
    equalSnapshots: () => _n,
    findIndexSS: () => Dn,
    findRootTypeKey: () => Jt,
    getItem: () => In,
    getItemCleanEnd: () => Rn,
    getItemCleanStart: () => Ln,
    getState: () => kn,
    getTypeChildren: () => kr,
    isDeleted: () => pt,
    isParentOf: () => en,
    iterateDeletedStructs: () => dt,
    logType: () => tn,
    logUpdate: () => Zn,
    logUpdateV2: () => Xn,
    mergeDeleteSets: () => ht,
    mergeUpdates: () => nr,
    mergeUpdatesV2: () => lr,
    obfuscateUpdate: () => mr,
    obfuscateUpdateV2: () => Ar,
    parseUpdateMeta: () => or,
    parseUpdateMetaV2: () => ir,
    readUpdate: () => Lt,
    readUpdateV2: () => Pt,
    relativePositionToJSON: () => an,
    snapshot: () => bn,
    snapshotContainsUpdate: () => Mn,
    transact: () => zn,
    tryGc: () => Kn,
    typeListToArraySnapshot: () => Lr,
    typeMapGetAllSnapshot: () => $r,
    typeMapGetSnapshot: () => Gr
  });
  const r = () => new Map(),
    a = e => {
      const t = r();
      return e.forEach((e, n) => {
        t.set(n, e);
      }), t;
    },
    i = (e, t, n) => {
      let r = e.get(t);
      return void 0 === r && e.set(t, r = n()), r;
    },
    o = () => new Set(),
    s = e => e[e.length - 1],
    l = (e, t) => {
      for (let n = 0; n < t.length; n++) e.push(t[n]);
    },
    c = Array.from,
    u = Array.isArray;
  class d {
    constructor() {
      this._observers = r();
    }
    on(e, t) {
      return i(this._observers, e, o).add(t), t;
    }
    once(e, t) {
      const n = (...r) => {
        this.off(e, n), t(...r);
      };
      this.on(e, n);
    }
    off(e, t) {
      const n = this._observers.get(e);
      void 0 !== n && (n.delete(t), 0 === n.size && this._observers.delete(e));
    }
    emit(e, t) {
      return c((this._observers.get(e) || r()).values()).forEach(e => e(...t));
    }
    destroy() {
      this._observers = r();
    }
  }
  const p = Math.floor,
    f = (Math.ceil, Math.abs),
    h = (Math.imul, Math.round, Math.log10, Math.log2, Math.log, Math.sqrt, (e, t) => e < t ? e : t),
    _ = (e, t) => e > t ? e : t,
    m = (Number.isNaN, Math.pow, Math.sign, e => 0 !== e ? e < 0 : 1 / e < 0),
    A = 64,
    g = 128,
    y = 127,
    v = Number.MAX_SAFE_INTEGER,
    E = (Number.MIN_SAFE_INTEGER, Number.isInteger || (e => "number" == typeof e && isFinite(e) && p(e) === e)),
    b = (Number.isNaN, Number.parseInt, String.fromCharCode),
    w = (String.fromCodePoint, b(65535), /^\s*/g),
    C = /([A-Z])/g,
    O = (e, t) => (e => e.replace(w, ""))(e.replace(C, e => `${t}${(e => e.toLowerCase())(e)}`)),
    M = "undefined" != typeof TextEncoder ? new TextEncoder() : null,
    S = M ? e => M.encode(e) : e => {
      const t = unescape(encodeURIComponent(e)),
        n = t.length,
        r = new Uint8Array(n);
      for (let e = 0; e < n; e++) r[e] = t.codePointAt(e);
      return r;
    };
  let T = "undefined" == typeof TextDecoder ? null : new TextDecoder("utf-8", {
    fatal: !0,
    ignoreBOM: !0
  });
  T && 1 === T.decode(new Uint8Array()).length && (T = null);
  class k {
    constructor() {
      this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
    }
  }
  const x = () => new k(),
    D = e => {
      const t = new Uint8Array((e => {
        let t = e.cpos;
        for (let n = 0; n < e.bufs.length; n++) t += e.bufs[n].length;
        return t;
      })(e));
      let n = 0;
      for (let r = 0; r < e.bufs.length; r++) {
        const a = e.bufs[r];
        t.set(a, n), n += a.length;
      }
      return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
    },
    I = (e, t) => {
      const n = e.cbuf.length;
      e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(2 * n), e.cpos = 0), e.cbuf[e.cpos++] = t;
    },
    P = I,
    L = (e, t) => {
      for (; t > y;) I(e, g | y & t), t = p(t / 128);
      I(e, y & t);
    },
    R = (e, t) => {
      const n = m(t);
      for (n && (t = -t), I(e, (t > 63 ? g : 0) | (n ? A : 0) | 63 & t), t = p(t / 64); t > 0;) I(e, (t > y ? g : 0) | y & t), t = p(t / 128);
    },
    B = new Uint8Array(3e4),
    N = B.length / 3,
    U = M && M.encodeInto ? (e, t) => {
      if (t.length < N) {
        const n = M.encodeInto(t, B).written || 0;
        L(e, n);
        for (let t = 0; t < n; t++) I(e, B[t]);
      } else j(e, S(t));
    } : (e, t) => {
      const n = unescape(encodeURIComponent(t)),
        r = n.length;
      L(e, r);
      for (let t = 0; t < r; t++) I(e, n.codePointAt(t));
    },
    F = (e, t) => {
      const n = e.cbuf.length,
        r = e.cpos,
        a = h(n - r, t.length),
        i = t.length - a;
      e.cbuf.set(t.subarray(0, a), r), e.cpos += a, i > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(_(2 * n, i)), e.cbuf.set(t.subarray(a)), e.cpos = i);
    },
    j = (e, t) => {
      L(e, t.byteLength), F(e, t);
    },
    H = (e, t) => {
      ((e, t) => {
        const n = e.cbuf.length;
        n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(2 * _(n, t)), e.cpos = 0);
      })(e, t);
      const n = new DataView(e.cbuf.buffer, e.cpos, t);
      return e.cpos += t, n;
    },
    W = new DataView(new ArrayBuffer(4)),
    K = (e, t) => {
      switch (typeof t) {
        case "string":
          I(e, 119), U(e, t);
          break;
        case "number":
          E(t) && f(t) <= 2147483647 ? (I(e, 125), R(e, t)) : (n = t, W.setFloat32(0, n), W.getFloat32(0) === n ? (I(e, 124), ((e, t) => {
            H(e, 4).setFloat32(0, t, !1);
          })(e, t)) : (I(e, 123), ((e, t) => {
            H(e, 8).setFloat64(0, t, !1);
          })(e, t)));
          break;
        case "bigint":
          I(e, 122), ((e, t) => {
            H(e, 8).setBigInt64(0, t, !1);
          })(e, t);
          break;
        case "object":
          if (null === t) I(e, 126);else if (u(t)) {
            I(e, 117), L(e, t.length);
            for (let n = 0; n < t.length; n++) K(e, t[n]);
          } else if (t instanceof Uint8Array) I(e, 116), j(e, t);else {
            I(e, 118);
            const n = Object.keys(t);
            L(e, n.length);
            for (let r = 0; r < n.length; r++) {
              const a = n[r];
              U(e, a), K(e, t[a]);
            }
          }
          break;
        case "boolean":
          I(e, t ? 120 : 121);
          break;
        default:
          I(e, 127);
      }
      var n;
    };
  class V extends k {
    constructor(e) {
      super(), this.w = e, this.s = null, this.count = 0;
    }
    write(e) {
      this.s === e ? this.count++ : (this.count > 0 && L(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
    }
  }
  const z = e => {
    e.count > 0 && (R(e.encoder, 1 === e.count ? e.s : -e.s), e.count > 1 && L(e.encoder, e.count - 2));
  };
  class Y {
    constructor() {
      this.encoder = new k(), this.s = 0, this.count = 0;
    }
    write(e) {
      this.s === e ? this.count++ : (z(this), this.count = 1, this.s = e);
    }
    toUint8Array() {
      return z(this), D(this.encoder);
    }
  }
  const Q = e => {
    if (e.count > 0) {
      const t = 2 * e.diff + (1 === e.count ? 0 : 1);
      R(e.encoder, t), e.count > 1 && L(e.encoder, e.count - 2);
    }
  };
  class G {
    constructor() {
      this.encoder = new k(), this.s = 0, this.count = 0, this.diff = 0;
    }
    write(e) {
      this.diff === e - this.s ? (this.s = e, this.count++) : (Q(this), this.count = 1, this.diff = e - this.s, this.s = e);
    }
    toUint8Array() {
      return Q(this), D(this.encoder);
    }
  }
  class $ {
    constructor() {
      this.sarr = [], this.s = "", this.lensE = new Y();
    }
    write(e) {
      this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
    }
    toUint8Array() {
      const e = new k();
      return this.sarr.push(this.s), this.s = "", U(e, this.sarr.join("")), F(e, this.lensE.toUint8Array()), D(e);
    }
  }
  const q = e => new Error(e),
    Z = () => {
      throw q("Method unimplemented");
    },
    X = () => {
      throw q("Unexpected case");
    },
    J = q("Unexpected end of array"),
    ee = q("Integer out of Range");
  class te {
    constructor(e) {
      this.arr = e, this.pos = 0;
    }
  }
  const ne = e => new te(e),
    re = e => e.pos !== e.arr.length,
    ae = e => ((e, t) => {
      const n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
      return e.pos += t, n;
    })(e, oe(e)),
    ie = e => e.arr[e.pos++],
    oe = e => {
      let t = 0,
        n = 1;
      const r = e.arr.length;
      for (; e.pos < r;) {
        const r = e.arr[e.pos++];
        if (t += (r & y) * n, n *= 128, r < g) return t;
        if (t > v) throw ee;
      }
      throw J;
    },
    se = e => {
      let t = e.arr[e.pos++],
        n = 63 & t,
        r = 64;
      const a = (t & A) > 0 ? -1 : 1;
      if (0 === (t & g)) return a * n;
      const i = e.arr.length;
      for (; e.pos < i;) {
        if (t = e.arr[e.pos++], n += (t & y) * r, r *= 128, t < g) return a * n;
        if (n > v) throw ee;
      }
      throw J;
    },
    le = T ? e => T.decode(ae(e)) : e => {
      let t = oe(e);
      if (0 === t) return "";
      {
        let n = String.fromCodePoint(ie(e));
        if (--t < 100) for (; t--;) n += String.fromCodePoint(ie(e));else for (; t > 0;) {
          const r = t < 1e4 ? t : 1e4,
            a = e.arr.subarray(e.pos, e.pos + r);
          e.pos += r, n += String.fromCodePoint.apply(null, a), t -= r;
        }
        return decodeURIComponent(escape(n));
      }
    },
    ce = (e, t) => {
      const n = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, t);
      return e.pos += t, n;
    },
    ue = [e => {}, e => null, se, e => ce(e, 4).getFloat32(0, !1), e => ce(e, 8).getFloat64(0, !1), e => ce(e, 8).getBigInt64(0, !1), e => !1, e => !0, le, e => {
      const t = oe(e),
        n = {};
      for (let r = 0; r < t; r++) n[le(e)] = de(e);
      return n;
    }, e => {
      const t = oe(e),
        n = [];
      for (let r = 0; r < t; r++) n.push(de(e));
      return n;
    }, ae],
    de = e => ue[127 - ie(e)](e);
  class pe extends te {
    constructor(e, t) {
      super(e), this.reader = t, this.s = null, this.count = 0;
    }
    read() {
      return 0 === this.count && (this.s = this.reader(this), re(this) ? this.count = oe(this) + 1 : this.count = -1), this.count--, this.s;
    }
  }
  class fe extends te {
    constructor(e) {
      super(e), this.s = 0, this.count = 0;
    }
    read() {
      if (0 === this.count) {
        this.s = se(this);
        const e = m(this.s);
        this.count = 1, e && (this.s = -this.s, this.count = oe(this) + 2);
      }
      return this.count--, this.s;
    }
  }
  class he extends te {
    constructor(e) {
      super(e), this.s = 0, this.count = 0, this.diff = 0;
    }
    read() {
      if (0 === this.count) {
        const e = se(this),
          t = 1 & e;
        this.diff = p(e / 2), this.count = 1, t && (this.count = oe(this) + 2);
      }
      return this.s += this.diff, this.count--, this.s;
    }
  }
  class _e {
    constructor(e) {
      this.decoder = new fe(e), this.str = le(this.decoder), this.spos = 0;
    }
    read() {
      const e = this.spos + this.decoder.read(),
        t = this.str.slice(this.spos, e);
      return this.spos = e, t;
    }
  }
  crypto.subtle;
  const me = crypto.getRandomValues.bind(crypto),
    Ae = (Math.random, () => me(new Uint32Array(1))[0]),
    ge = [1e7] + -1e3 + -4e3 + -8e3 + -1e11,
    ye = () => ge.replace(/[018]/g, e => (e ^ Ae() & 15 >> e / 4).toString(16)),
    ve = e => new Promise(e),
    Ee = (Promise.all.bind(Promise), e => void 0 === e ? null : e);
  let be = new class {
      constructor() {
        this.map = new Map();
      }
      setItem(e, t) {
        this.map.set(e, t);
      }
      getItem(e) {
        return this.map.get(e);
      }
    }(),
    we = !0;
  try {
    "undefined" != typeof localStorage && localStorage && (be = localStorage, we = !1);
  } catch (e) {}
  const Ce = be,
    Oe = (e, t, n = 0) => {
      try {
        for (; n < e.length; n++) e[n](...t);
      } finally {
        n < e.length && Oe(e, t, n + 1);
      }
    },
    Me = e => e,
    Se = "undefined" != typeof process && process.release && /node|io\.js/.test(process.release.name) && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0);
  let Te;
  "undefined" != typeof navigator && /Mac/.test(navigator.platform);
  const ke = [],
    xe = e => (() => {
      if (void 0 === Te) if (Se) {
        Te = r();
        const e = process.argv;
        let t = null;
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          "-" === r[0] ? (null !== t && Te.set(t, ""), t = r) : null !== t ? (Te.set(t, r), t = null) : ke.push(r);
        }
        null !== t && Te.set(t, "");
      } else "object" == typeof location ? (Te = r(), (location.search || "?").slice(1).split("&").forEach(e => {
        if (0 !== e.length) {
          const [t, n] = e.split("=");
          Te.set(`--${O(t, "-")}`, n), Te.set(`-${O(t, "-")}`, n);
        }
      })) : Te = r();
      return Te;
    })().has(e),
    De = e => Ee(Se ? process.env[e.toUpperCase().replaceAll("-", "_")] : Ce.getItem(e)),
    Ie = e => xe("--" + e) || null !== De(e);
  var Pe;
  Ie("production");
  const Le = Se && (Pe = process.env.FORCE_COLOR, ["true", "1", "2"].includes(Pe)) || !xe("--no-colors") && !Ie("no-color") && (!Se || process.stdout.isTTY) && (!Se || xe("--color") || null !== De("COLORTERM") || (De("TERM") || "").includes("color"));
  class Re {
    constructor(e, t) {
      this.left = e, this.right = t;
    }
  }
  const Be = (e, t) => new Re(e, t),
    Ne = "undefined" != typeof document ? document : {},
    Ue = ("undefined" != typeof DOMParser && new DOMParser(), e => ((e, t) => {
      const n = [];
      for (const [r, a] of e) n.push(t(a, r));
      return n;
    })(e, (e, t) => `${t}:${e};`).join("")),
    Fe = (Ne.ELEMENT_NODE, Ne.TEXT_NODE, Ne.CDATA_SECTION_NODE, Ne.COMMENT_NODE, Ne.DOCUMENT_NODE, Ne.DOCUMENT_TYPE_NODE, Ne.DOCUMENT_FRAGMENT_NODE, Symbol),
    je = Date.now,
    He = Fe(),
    We = Fe(),
    Ke = Fe(),
    Ve = Fe(),
    ze = Fe(),
    Ye = Fe(),
    Qe = Fe(),
    Ge = Fe(),
    $e = Fe();
  je();
  const qe = {
      [He]: Be("font-weight", "bold"),
      [We]: Be("font-weight", "normal"),
      [Ke]: Be("color", "blue"),
      [ze]: Be("color", "green"),
      [Ve]: Be("color", "grey"),
      [Ye]: Be("color", "red"),
      [Qe]: Be("color", "purple"),
      [Ge]: Be("color", "orange"),
      [$e]: Be("color", "black")
    },
    Ze = Le ? e => {
      1 === e.length && e[0]?.constructor === Function && (e = e[0]());
      const t = [],
        n = [],
        a = r();
      let i = [],
        o = 0;
      for (; o < e.length; o++) {
        const r = e[o],
          i = qe[r];
        if (void 0 !== i) a.set(i.left, i.right);else {
          if (void 0 === r) break;
          if (r.constructor !== String && r.constructor !== Number) break;
          {
            const e = Ue(a);
            o > 0 || e.length > 0 ? (t.push("%c" + r), n.push(e)) : t.push(r);
          }
        }
      }
      for (o > 0 && (i = n, i.unshift(t.join(""))); o < e.length; o++) {
        const t = e[o];
        t instanceof Symbol || i.push(t);
      }
      return i;
    } : e => {
      1 === e.length && e[0]?.constructor === Function && (e = e[0]());
      const t = [],
        n = [];
      let r = 0;
      for (; r < e.length; r++) {
        const n = e[r];
        if (void 0 === n) break;
        if (n.constructor === String || n.constructor === Number) t.push(n);else if (n.constructor === Object) break;
      }
      for (r > 0 && n.push(t.join("")); r < e.length; r++) {
        const t = e[r];
        t instanceof Symbol || n.push(t);
      }
      return n;
    },
    Xe = (...e) => {
      console.log(...Ze(e)), et.forEach(t => t.print(e));
    },
    Je = (...e) => {
      console.warn(...Ze(e)), e.unshift(Ge), et.forEach(t => t.print(e));
    },
    et = o(),
    tt = e => ({
      [Symbol.iterator]() {
        return this;
      },
      next: e
    }),
    nt = (e, t) => tt(() => {
      const {
        done: n,
        value: r
      } = e.next();
      return {
        done: n,
        value: n ? void 0 : t(r)
      };
    }),
    rt = Object.assign,
    at = Object.keys,
    it = (Object.values, e => at(e).length),
    ot = Object.freeze,
    st = e => {
      for (const t in e) {
        const n = e[t];
        "object" != typeof n && "function" != typeof n || st(e[t]);
      }
      return ot(e);
    };
  class lt extends d {
    constructor(e, t) {
      super(), this.doc = e, this.awareness = t;
    }
  }
  class ct {
    constructor(e, t) {
      this.clock = e, this.len = t;
    }
  }
  class ut {
    constructor() {
      this.clients = new Map();
    }
  }
  const dt = (e, t, n) => t.clients.forEach((t, r) => {
      const a = e.doc.store.clients.get(r);
      if (null != a) {
        const r = a[a.length - 1],
          i = r.id.clock + r.length;
        for (let r = 0, o = t[r]; r < t.length && o.clock < i; o = t[++r]) Bn(e, a, o.clock, o.len, n);
      }
    }),
    pt = (e, t) => {
      const n = e.clients.get(t.client);
      return void 0 !== n && null !== ((e, t) => {
        let n = 0,
          r = e.length - 1;
        for (; n <= r;) {
          const a = p((n + r) / 2),
            i = e[a],
            o = i.clock;
          if (o <= t) {
            if (t < o + i.len) return a;
            n = a + 1;
          } else r = a - 1;
        }
        return null;
      })(n, t.clock);
    },
    ft = e => {
      e.clients.forEach(e => {
        let t, n;
        for (e.sort((e, t) => e.clock - t.clock), t = 1, n = 1; t < e.length; t++) {
          const r = e[n - 1],
            a = e[t];
          r.clock + r.len >= a.clock ? r.len = _(r.len, a.clock + a.len - r.clock) : (n < t && (e[n] = a), n++);
        }
        e.length = n;
      });
    },
    ht = e => {
      const t = new ut();
      for (let n = 0; n < e.length; n++) e[n].clients.forEach((r, a) => {
        if (!t.clients.has(a)) {
          const i = r.slice();
          for (let t = n + 1; t < e.length; t++) l(i, e[t].clients.get(a) || []);
          t.clients.set(a, i);
        }
      });
      return ft(t), t;
    },
    _t = (e, t, n, r) => {
      i(e.clients, t, () => []).push(new ct(n, r));
    },
    mt = () => new ut(),
    At = e => {
      const t = mt();
      return e.clients.forEach((e, n) => {
        const r = [];
        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          if (n.deleted) {
            const a = n.id.clock;
            let i = n.length;
            if (t + 1 < e.length) for (let n = e[t + 1]; t + 1 < e.length && n.deleted; n = e[1 + ++t]) i += n.length;
            r.push(new ct(a, i));
          }
        }
        r.length > 0 && t.clients.set(n, r);
      }), t;
    },
    gt = (e, t) => {
      L(e.restEncoder, t.clients.size), c(t.clients.entries()).sort((e, t) => t[0] - e[0]).forEach(([t, n]) => {
        e.resetDsCurVal(), L(e.restEncoder, t);
        const r = n.length;
        L(e.restEncoder, r);
        for (let t = 0; t < r; t++) {
          const r = n[t];
          e.writeDsClock(r.clock), e.writeDsLen(r.len);
        }
      });
    },
    yt = e => {
      const t = new ut(),
        n = oe(e.restDecoder);
      for (let r = 0; r < n; r++) {
        e.resetDsCurVal();
        const n = oe(e.restDecoder),
          r = oe(e.restDecoder);
        if (r > 0) {
          const a = i(t.clients, n, () => []);
          for (let t = 0; t < r; t++) a.push(new ct(e.readDsClock(), e.readDsLen()));
        }
      }
      return t;
    },
    vt = (e, t, n) => {
      const r = new ut(),
        a = oe(e.restDecoder);
      for (let i = 0; i < a; i++) {
        e.resetDsCurVal();
        const a = oe(e.restDecoder),
          i = oe(e.restDecoder),
          o = n.clients.get(a) || [],
          s = kn(n, a);
        for (let n = 0; n < i; n++) {
          const n = e.readDsClock(),
            i = n + e.readDsLen();
          if (n < s) {
            s < i && _t(r, a, s, i - s);
            let e = Dn(o, n),
              l = o[e];
            for (!l.deleted && l.id.clock < n && (o.splice(e + 1, 0, Ya(t, l, n - l.id.clock)), e++); e < o.length && (l = o[e++], l.id.clock < i);) l.deleted || (i < l.id.clock + l.length && o.splice(e, 0, Ya(t, l, i - l.id.clock)), l.delete(t));
          } else _t(r, a, n, i - n);
        }
      }
      if (r.clients.size > 0) {
        const e = new Dt();
        return L(e.restEncoder, 0), gt(e, r), e.toUint8Array();
      }
      return null;
    },
    Et = (e, t) => {
      if (e.clients.size !== t.clients.size) return !1;
      for (const [n, r] of e.clients.entries()) {
        const e = t.clients.get(n);
        if (void 0 === e || r.length !== e.length) return !1;
        for (let t = 0; t < r.length; t++) {
          const n = r[t],
            a = e[t];
          if (n.clock !== a.clock || n.len !== a.len) return !1;
        }
      }
      return !0;
    },
    bt = Ae;
  class wt extends d {
    constructor({
      guid: e = ye(),
      collectionid: t = null,
      gc: n = !0,
      gcFilter: r = () => !0,
      meta: a = null,
      autoLoad: i = !1,
      shouldLoad: o = !0
    } = {}) {
      super(), this.gc = n, this.gcFilter = r, this.clientID = bt(), this.guid = e, this.collectionid = t, this.share = new Map(), this.store = new Sn(), this._transaction = null, this._transactionCleanups = [], this.subdocs = new Set(), this._item = null, this.shouldLoad = o, this.autoLoad = i, this.meta = a, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = ve(e => {
        this.on("load", () => {
          this.isLoaded = !0, e(this);
        });
      });
      const s = () => ve(e => {
        const t = n => {
          void 0 !== n && !0 !== n || (this.off("sync", t), e());
        };
        this.on("sync", t);
      });
      this.on("sync", e => {
        !1 === e && this.isSynced && (this.whenSynced = s()), this.isSynced = void 0 === e || !0 === e, this.isSynced && !this.isLoaded && this.emit("load", [this]);
      }), this.whenSynced = s();
    }
    load() {
      const e = this._item;
      null === e || this.shouldLoad || zn(e.parent.doc, e => {
        e.subdocsLoaded.add(this);
      }, null, !0), this.shouldLoad = !0;
    }
    getSubdocs() {
      return this.subdocs;
    }
    getSubdocGuids() {
      return new Set(c(this.subdocs).map(e => e.guid));
    }
    transact(e, t = null) {
      return zn(this, e, t);
    }
    get(e, t = Dr) {
      const n = i(this.share, e, () => {
          const e = new t();
          return e._integrate(this, null), e;
        }),
        r = n.constructor;
      if (t !== Dr && r !== t) {
        if (r === Dr) {
          const r = new t();
          r._map = n._map, n._map.forEach(e => {
            for (; null !== e; e = e.left) e.parent = r;
          }), r._start = n._start;
          for (let e = r._start; null !== e; e = e.right) e.parent = r;
          return r._length = n._length, this.share.set(e, r), r._integrate(this, null), r;
        }
        throw new Error(`Type with the name ${e} has already been defined with a different constructor`);
      }
      return n;
    }
    getArray(e = "") {
      return this.get(e, Xr);
    }
    getText(e = "") {
      return this.get(e, ma);
    }
    getMap(e = "") {
      return this.get(e, ea);
    }
    getXmlElement(e = "") {
      return this.get(e, ya);
    }
    getXmlFragment(e = "") {
      return this.get(e, ga);
    }
    toJSON() {
      const e = {};
      return this.share.forEach((t, n) => {
        e[n] = t.toJSON();
      }), e;
    }
    destroy() {
      this.isDestroyed = !0, c(this.subdocs).forEach(e => e.destroy());
      const e = this._item;
      if (null !== e) {
        this._item = null;
        const t = e.content;
        t.doc = new wt({
          guid: this.guid,
          ...t.opts,
          shouldLoad: !1
        }), t.doc._item = e, zn(e.parent.doc, n => {
          const r = t.doc;
          e.deleted || n.subdocsAdded.add(r), n.subdocsRemoved.add(this);
        }, null, !0);
      }
      this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
    }
  }
  class Ct {
    constructor(e) {
      this.restDecoder = e;
    }
    resetDsCurVal() {}
    readDsClock() {
      return oe(this.restDecoder);
    }
    readDsLen() {
      return oe(this.restDecoder);
    }
  }
  class Ot extends Ct {
    readLeftID() {
      return qt(oe(this.restDecoder), oe(this.restDecoder));
    }
    readRightID() {
      return qt(oe(this.restDecoder), oe(this.restDecoder));
    }
    readClient() {
      return oe(this.restDecoder);
    }
    readInfo() {
      return ie(this.restDecoder);
    }
    readString() {
      return le(this.restDecoder);
    }
    readParentInfo() {
      return 1 === oe(this.restDecoder);
    }
    readTypeRef() {
      return oe(this.restDecoder);
    }
    readLen() {
      return oe(this.restDecoder);
    }
    readAny() {
      return de(this.restDecoder);
    }
    readBuf() {
      return (e => {
        const t = (n = e.byteLength, new Uint8Array(n));
        var n;
        return t.set(e), t;
      })(ae(this.restDecoder));
    }
    readJSON() {
      return JSON.parse(le(this.restDecoder));
    }
    readKey() {
      return le(this.restDecoder);
    }
  }
  class Mt {
    constructor(e) {
      this.dsCurrVal = 0, this.restDecoder = e;
    }
    resetDsCurVal() {
      this.dsCurrVal = 0;
    }
    readDsClock() {
      return this.dsCurrVal += oe(this.restDecoder), this.dsCurrVal;
    }
    readDsLen() {
      const e = oe(this.restDecoder) + 1;
      return this.dsCurrVal += e, e;
    }
  }
  class St extends Mt {
    constructor(e) {
      super(e), this.keys = [], oe(e), this.keyClockDecoder = new he(ae(e)), this.clientDecoder = new fe(ae(e)), this.leftClockDecoder = new he(ae(e)), this.rightClockDecoder = new he(ae(e)), this.infoDecoder = new pe(ae(e), ie), this.stringDecoder = new _e(ae(e)), this.parentInfoDecoder = new pe(ae(e), ie), this.typeRefDecoder = new fe(ae(e)), this.lenDecoder = new fe(ae(e));
    }
    readLeftID() {
      return new Gt(this.clientDecoder.read(), this.leftClockDecoder.read());
    }
    readRightID() {
      return new Gt(this.clientDecoder.read(), this.rightClockDecoder.read());
    }
    readClient() {
      return this.clientDecoder.read();
    }
    readInfo() {
      return this.infoDecoder.read();
    }
    readString() {
      return this.stringDecoder.read();
    }
    readParentInfo() {
      return 1 === this.parentInfoDecoder.read();
    }
    readTypeRef() {
      return this.typeRefDecoder.read();
    }
    readLen() {
      return this.lenDecoder.read();
    }
    readAny() {
      return de(this.restDecoder);
    }
    readBuf() {
      return ae(this.restDecoder);
    }
    readJSON() {
      return de(this.restDecoder);
    }
    readKey() {
      const e = this.keyClockDecoder.read();
      if (e < this.keys.length) return this.keys[e];
      {
        const e = this.stringDecoder.read();
        return this.keys.push(e), e;
      }
    }
  }
  class Tt {
    constructor() {
      this.restEncoder = x();
    }
    toUint8Array() {
      return D(this.restEncoder);
    }
    resetDsCurVal() {}
    writeDsClock(e) {
      L(this.restEncoder, e);
    }
    writeDsLen(e) {
      L(this.restEncoder, e);
    }
  }
  class kt extends Tt {
    writeLeftID(e) {
      L(this.restEncoder, e.client), L(this.restEncoder, e.clock);
    }
    writeRightID(e) {
      L(this.restEncoder, e.client), L(this.restEncoder, e.clock);
    }
    writeClient(e) {
      L(this.restEncoder, e);
    }
    writeInfo(e) {
      P(this.restEncoder, e);
    }
    writeString(e) {
      U(this.restEncoder, e);
    }
    writeParentInfo(e) {
      L(this.restEncoder, e ? 1 : 0);
    }
    writeTypeRef(e) {
      L(this.restEncoder, e);
    }
    writeLen(e) {
      L(this.restEncoder, e);
    }
    writeAny(e) {
      K(this.restEncoder, e);
    }
    writeBuf(e) {
      j(this.restEncoder, e);
    }
    writeJSON(e) {
      U(this.restEncoder, JSON.stringify(e));
    }
    writeKey(e) {
      U(this.restEncoder, e);
    }
  }
  class xt {
    constructor() {
      this.restEncoder = x(), this.dsCurrVal = 0;
    }
    toUint8Array() {
      return D(this.restEncoder);
    }
    resetDsCurVal() {
      this.dsCurrVal = 0;
    }
    writeDsClock(e) {
      const t = e - this.dsCurrVal;
      this.dsCurrVal = e, L(this.restEncoder, t);
    }
    writeDsLen(e) {
      0 === e && X(), L(this.restEncoder, e - 1), this.dsCurrVal += e;
    }
  }
  class Dt extends xt {
    constructor() {
      super(), this.keyMap = new Map(), this.keyClock = 0, this.keyClockEncoder = new G(), this.clientEncoder = new Y(), this.leftClockEncoder = new G(), this.rightClockEncoder = new G(), this.infoEncoder = new V(P), this.stringEncoder = new $(), this.parentInfoEncoder = new V(P), this.typeRefEncoder = new Y(), this.lenEncoder = new Y();
    }
    toUint8Array() {
      const e = x();
      return L(e, 0), j(e, this.keyClockEncoder.toUint8Array()), j(e, this.clientEncoder.toUint8Array()), j(e, this.leftClockEncoder.toUint8Array()), j(e, this.rightClockEncoder.toUint8Array()), j(e, D(this.infoEncoder)), j(e, this.stringEncoder.toUint8Array()), j(e, D(this.parentInfoEncoder)), j(e, this.typeRefEncoder.toUint8Array()), j(e, this.lenEncoder.toUint8Array()), F(e, D(this.restEncoder)), D(e);
    }
    writeLeftID(e) {
      this.clientEncoder.write(e.client), this.leftClockEncoder.write(e.clock);
    }
    writeRightID(e) {
      this.clientEncoder.write(e.client), this.rightClockEncoder.write(e.clock);
    }
    writeClient(e) {
      this.clientEncoder.write(e);
    }
    writeInfo(e) {
      this.infoEncoder.write(e);
    }
    writeString(e) {
      this.stringEncoder.write(e);
    }
    writeParentInfo(e) {
      this.parentInfoEncoder.write(e ? 1 : 0);
    }
    writeTypeRef(e) {
      this.typeRefEncoder.write(e);
    }
    writeLen(e) {
      this.lenEncoder.write(e);
    }
    writeAny(e) {
      K(this.restEncoder, e);
    }
    writeBuf(e) {
      j(this.restEncoder, e);
    }
    writeJSON(e) {
      K(this.restEncoder, e);
    }
    writeKey(e) {
      const t = this.keyMap.get(e);
      void 0 === t ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(t);
    }
  }
  const It = (e, t, n) => {
      const r = new Map();
      n.forEach((e, n) => {
        kn(t, n) > e && r.set(n, e);
      }), Tn(t).forEach((e, t) => {
        n.has(t) || r.set(t, 0);
      }), L(e.restEncoder, r.size), c(r.entries()).sort((e, t) => t[0] - e[0]).forEach(([n, r]) => {
        ((e, t, n, r) => {
          r = _(r, t[0].id.clock);
          const a = Dn(t, r);
          L(e.restEncoder, t.length - a), e.writeClient(n), L(e.restEncoder, r);
          const i = t[a];
          i.write(e, r - i.id.clock);
          for (let n = a + 1; n < t.length; n++) t[n].write(e, 0);
        })(e, t.clients.get(n), n, r);
      });
    },
    Pt = (e, t, n, a = new St(e)) => zn(t, e => {
      e.local = !1;
      let t = !1;
      const n = e.doc,
        o = n.store,
        s = ((e, t) => {
          const n = r(),
            a = oe(e.restDecoder);
          for (let r = 0; r < a; r++) {
            const r = oe(e.restDecoder),
              a = new Array(r),
              i = e.readClient();
            let o = oe(e.restDecoder);
            n.set(i, {
              i: 0,
              refs: a
            });
            for (let n = 0; n < r; n++) {
              const r = e.readInfo();
              switch (31 & r) {
                case 0:
                  {
                    const t = e.readLen();
                    a[n] = new Ca(qt(i, o), t), o += t;
                    break;
                  }
                case 10:
                  {
                    const t = oe(e.restDecoder);
                    a[n] = new Xa(qt(i, o), t), o += t;
                    break;
                  }
                default:
                  {
                    const s = !(192 & r),
                      l = new $a(qt(i, o), null, (r & g) === g ? e.readLeftID() : null, null, (r & A) === A ? e.readRightID() : null, s ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null, !s || 32 & ~r ? null : e.readString(), qa(e, r));
                    a[n] = l, o += l.length;
                  }
              }
            }
          }
          return n;
        })(a, n),
        l = ((e, t, n) => {
          const r = [];
          let a = c(n.keys()).sort((e, t) => e - t);
          if (0 === a.length) return null;
          const o = () => {
            if (0 === a.length) return null;
            let e = n.get(a[a.length - 1]);
            for (; e.refs.length === e.i;) {
              if (a.pop(), !(a.length > 0)) return null;
              e = n.get(a[a.length - 1]);
            }
            return e;
          };
          let s = o();
          if (null === s) return null;
          const l = new Sn(),
            u = new Map(),
            d = (e, t) => {
              const n = u.get(e);
              (null == n || n > t) && u.set(e, t);
            };
          let p = s.refs[s.i++];
          const f = new Map(),
            h = () => {
              for (const e of r) {
                const t = e.id.client,
                  r = n.get(t);
                r ? (r.i--, l.clients.set(t, r.refs.slice(r.i)), n.delete(t), r.i = 0, r.refs = []) : l.clients.set(t, [e]), a = a.filter(e => e !== t);
              }
              r.length = 0;
            };
          for (;;) {
            if (p.constructor !== Xa) {
              const a = i(f, p.id.client, () => kn(t, p.id.client)) - p.id.clock;
              if (a < 0) r.push(p), d(p.id.client, p.id.clock - 1), h();else {
                const i = p.getMissing(e, t);
                if (null !== i) {
                  r.push(p);
                  const e = n.get(i) || {
                    refs: [],
                    i: 0
                  };
                  if (e.refs.length !== e.i) {
                    p = e.refs[e.i++];
                    continue;
                  }
                  d(i, kn(t, i)), h();
                } else (0 === a || a < p.length) && (p.integrate(e, a), f.set(p.id.client, p.id.clock + p.length));
              }
            }
            if (r.length > 0) p = r.pop();else if (null !== s && s.i < s.refs.length) p = s.refs[s.i++];else {
              if (s = o(), null === s) break;
              p = s.refs[s.i++];
            }
          }
          if (l.clients.size > 0) {
            const e = new Dt();
            return It(e, l, new Map()), L(e.restEncoder, 0), {
              missing: u,
              update: e.toUint8Array()
            };
          }
          return null;
        })(e, o, s),
        u = o.pendingStructs;
      if (u) {
        for (const [e, n] of u.missing) if (n < kn(o, e)) {
          t = !0;
          break;
        }
        if (l) {
          for (const [e, t] of l.missing) {
            const n = u.missing.get(e);
            (null == n || n > t) && u.missing.set(e, t);
          }
          u.update = lr([u.update, l.update]);
        }
      } else o.pendingStructs = l;
      const d = vt(a, e, o);
      if (o.pendingDs) {
        const t = new St(ne(o.pendingDs));
        oe(t.restDecoder);
        const n = vt(t, e, o);
        o.pendingDs = d && n ? lr([d, n]) : d || n;
      } else o.pendingDs = d;
      if (t) {
        const t = o.pendingStructs.update;
        o.pendingStructs = null, Rt(e.doc, t);
      }
    }, n, !1),
    Lt = (e, t, n) => Pt(e, t, n, new Ot(e)),
    Rt = (e, t, n, r = St) => {
      const a = ne(t);
      Pt(a, e, n, new r(a));
    },
    Bt = (e, t, n) => Rt(e, t, n, Ot),
    Nt = (e, t = new Uint8Array([0]), n = new Dt()) => {
      ((e, t, n = new Map()) => {
        It(e, t.store, n), gt(e, At(t.store));
      })(n, e, jt(t));
      const r = [n.toUint8Array()];
      if (e.store.pendingDs && r.push(e.store.pendingDs), e.store.pendingStructs && r.push(cr(e.store.pendingStructs.update, t)), r.length > 1) {
        if (n.constructor === kt) return nr(r.map((e, t) => 0 === t ? e : yr(e)));
        if (n.constructor === Dt) return lr(r);
      }
      return r[0];
    },
    Ut = (e, t) => Nt(e, t, new kt()),
    Ft = e => {
      const t = new Map(),
        n = oe(e.restDecoder);
      for (let r = 0; r < n; r++) {
        const n = oe(e.restDecoder),
          r = oe(e.restDecoder);
        t.set(n, r);
      }
      return t;
    },
    jt = e => Ft(new Ct(ne(e))),
    Ht = (e, t) => (L(e.restEncoder, t.size), c(t.entries()).sort((e, t) => t[0] - e[0]).forEach(([t, n]) => {
      L(e.restEncoder, t), L(e.restEncoder, n);
    }), e),
    Wt = e => ((e, t = new xt()) => (e instanceof Map ? Ht(t, e) : ((e, t) => {
      Ht(e, Tn(t.store));
    })(t, e), t.toUint8Array()))(e, new Tt());
  class Kt {
    constructor() {
      this.l = [];
    }
  }
  const Vt = () => new Kt(),
    zt = (e, t) => e.l.push(t),
    Yt = (e, t) => {
      const n = e.l,
        r = n.length;
      e.l = n.filter(e => t !== e), r === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
    },
    Qt = (e, t, n) => Oe(e.l, [t, n]);
  class Gt {
    constructor(e, t) {
      this.client = e, this.clock = t;
    }
  }
  const $t = (e, t) => e === t || null !== e && null !== t && e.client === t.client && e.clock === t.clock,
    qt = (e, t) => new Gt(e, t),
    Zt = (e, t) => {
      L(e, t.client), L(e, t.clock);
    },
    Xt = e => qt(oe(e), oe(e)),
    Jt = e => {
      for (const [t, n] of e.doc.share.entries()) if (n === e) return t;
      throw X();
    },
    en = (e, t) => {
      for (; null !== t;) {
        if (t.parent === e) return !0;
        t = t.parent._item;
      }
      return !1;
    },
    tn = e => {
      const t = [];
      let n = e._start;
      for (; n;) t.push(n), n = n.right;
      console.log("Children: ", t), console.log("Children content: ", t.filter(e => !e.deleted).map(e => e.content));
    };
  class nn {
    constructor(e, t = e.getMap("users")) {
      const n = new Map();
      this.yusers = t, this.doc = e, this.clients = new Map(), this.dss = n;
      const r = (e, t) => {
        const n = e.get("ds"),
          r = e.get("ids"),
          a = e => this.clients.set(e, t);
        n.observe(e => {
          e.changes.added.forEach(e => {
            e.content.getContent().forEach(e => {
              e instanceof Uint8Array && this.dss.set(t, ht([this.dss.get(t) || mt(), yt(new Ct(ne(e)))]));
            });
          });
        }), this.dss.set(t, ht(n.map(e => yt(new Ct(ne(e)))))), r.observe(e => e.changes.added.forEach(e => e.content.getContent().forEach(a))), r.forEach(a);
      };
      t.observe(e => {
        e.keysChanged.forEach(e => r(t.get(e), e));
      }), t.forEach(r);
    }
    setUserMapping(e, t, n, {
      filter: r = () => !0
    } = {}) {
      const a = this.yusers;
      let i = a.get(n);
      i || (i = new ea(), i.set("ids", new Xr()), i.set("ds", new Xr()), a.set(n, i)), i.get("ids").push([t]), a.observe(e => {
        setTimeout(() => {
          const e = a.get(n);
          if (e !== i) {
            i = e, this.clients.forEach((e, t) => {
              n === e && i.get("ids").push([t]);
            });
            const t = new Tt(),
              r = this.dss.get(n);
            r && (gt(t, r), i.get("ds").push([t.toUint8Array()]));
          }
        }, 0);
      }), e.on("afterTransaction", e => {
        setTimeout(() => {
          const t = i.get("ds"),
            n = e.deleteSet;
          if (e.local && n.clients.size > 0 && r(e, n)) {
            const e = new Tt();
            gt(e, n), t.push([e.toUint8Array()]);
          }
        });
      });
    }
    getUserByClientId(e) {
      return this.clients.get(e) || null;
    }
    getUserByDeletedId(e) {
      for (const [t, n] of this.dss.entries()) if (pt(n, e)) return t;
      return null;
    }
  }
  class rn {
    constructor(e, t, n, r = 0) {
      this.type = e, this.tname = t, this.item = n, this.assoc = r;
    }
  }
  const an = e => {
      const t = {};
      return e.type && (t.type = e.type), e.tname && (t.tname = e.tname), e.item && (t.item = e.item), null != e.assoc && (t.assoc = e.assoc), t;
    },
    on = e => new rn(null == e.type ? null : qt(e.type.client, e.type.clock), e.tname ?? null, null == e.item ? null : qt(e.item.client, e.item.clock), null == e.assoc ? 0 : e.assoc);
  class sn {
    constructor(e, t, n = 0) {
      this.type = e, this.index = t, this.assoc = n;
    }
  }
  const ln = (e, t, n) => {
      let r = null,
        a = null;
      return null === e._item ? a = Jt(e) : r = qt(e._item.id.client, e._item.id.clock), new rn(r, a, t, n);
    },
    cn = (e, t, n = 0) => {
      let r = e._start;
      if (n < 0) {
        if (0 === t) return ln(e, null, n);
        t--;
      }
      for (; null !== r;) {
        if (!r.deleted && r.countable) {
          if (r.length > t) return ln(e, qt(r.id.client, r.id.clock + t), n);
          t -= r.length;
        }
        if (null === r.right && n < 0) return ln(e, r.lastId, n);
        r = r.right;
      }
      return ln(e, null, n);
    },
    un = e => {
      const t = x();
      return ((e, t) => {
        const {
          type: n,
          tname: r,
          item: a,
          assoc: i
        } = t;
        if (null !== a) L(e, 0), Zt(e, a);else if (null !== r) P(e, 1), U(e, r);else {
          if (null === n) throw X();
          P(e, 2), Zt(e, n);
        }
        R(e, i);
      })(t, e), D(t);
    },
    dn = e => (e => {
      let t = null,
        n = null,
        r = null;
      switch (oe(e)) {
        case 0:
          r = Xt(e);
          break;
        case 1:
          n = le(e);
          break;
        case 2:
          t = Xt(e);
      }
      const a = re(e) ? se(e) : 0;
      return new rn(t, n, r, a);
    })(ne(e)),
    pn = (e, t, n = !0) => {
      const r = t.store,
        a = e.item,
        i = e.type,
        o = e.tname,
        s = e.assoc;
      let l = null,
        c = 0;
      if (null !== a) {
        if (kn(r, a.client) <= a.clock) return null;
        const e = n ? Va(r, a) : ((e, t) => {
            const n = In(e, t);
            return {
              item: n,
              diff: t.clock - n.id.clock
            };
          })(r, a),
          t = e.item;
        if (!(t instanceof $a)) return null;
        if (l = t.parent, null === l._item || !l._item.deleted) {
          c = t.deleted || !t.countable ? 0 : e.diff + (s >= 0 ? 0 : 1);
          let n = t.left;
          for (; null !== n;) !n.deleted && n.countable && (c += n.length), n = n.left;
        }
      } else {
        if (null !== o) l = t.get(o);else {
          if (null === i) throw X();
          {
            if (kn(r, i.client) <= i.clock) return null;
            const {
              item: e
            } = n ? Va(r, i) : {
              item: In(r, i)
            };
            if (!(e instanceof $a && e.content instanceof Ka)) return null;
            l = e.content.type;
          }
        }
        c = s >= 0 ? l._length : 0;
      }
      return ((e, t, n = 0) => new sn(e, t, n))(l, c, e.assoc);
    },
    fn = (e, t) => e === t || null !== e && null !== t && e.tname === t.tname && $t(e.item, t.item) && $t(e.type, t.type) && e.assoc === t.assoc;
  class hn {
    constructor(e, t) {
      this.ds = e, this.sv = t;
    }
  }
  const _n = (e, t) => {
      const n = e.ds.clients,
        r = t.ds.clients,
        a = e.sv,
        i = t.sv;
      if (a.size !== i.size || n.size !== r.size) return !1;
      for (const [e, t] of a.entries()) if (i.get(e) !== t) return !1;
      for (const [e, t] of n.entries()) {
        const n = r.get(e) || [];
        if (t.length !== n.length) return !1;
        for (let e = 0; e < t.length; e++) {
          const r = t[e],
            a = n[e];
          if (r.clock !== a.clock || r.len !== a.len) return !1;
        }
      }
      return !0;
    },
    mn = (e, t = new xt()) => (gt(t, e.ds), Ht(t, e.sv), t.toUint8Array()),
    An = e => mn(e, new Tt()),
    gn = (e, t = new Mt(ne(e))) => new hn(yt(t), Ft(t)),
    yn = e => gn(e, new Ct(ne(e))),
    vn = (e, t) => new hn(e, t),
    En = vn(mt(), new Map()),
    bn = e => vn(At(e.store), Tn(e.store)),
    wn = (e, t) => void 0 === t ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !pt(t.ds, e.id),
    Cn = (e, t) => {
      const n = i(e.meta, Cn, o),
        r = e.doc.store;
      n.has(t) || (t.sv.forEach((t, n) => {
        t < kn(r, n) && Ln(e, qt(n, t));
      }), dt(e, t.ds, e => {}), n.add(t));
    },
    On = (e, t, n = new wt()) => {
      if (e.gc) throw new Error("Garbage-collection must be disabled in `originDoc`!");
      const {
          sv: r,
          ds: a
        } = t,
        i = new Dt();
      return e.transact(t => {
        let n = 0;
        r.forEach(e => {
          e > 0 && n++;
        }), L(i.restEncoder, n);
        for (const [n, a] of r) {
          if (0 === a) continue;
          a < kn(e.store, n) && Ln(t, qt(n, a));
          const r = e.store.clients.get(n) || [],
            o = Dn(r, a - 1);
          L(i.restEncoder, o + 1), i.writeClient(n), L(i.restEncoder, 0);
          for (let e = 0; e <= o; e++) r[e].write(i, 0);
        }
        gt(i, a);
      }), Rt(n, i.toUint8Array(), "snapshot"), n;
    },
    Mn = (e, t) => ((e, t, n = St) => {
      const r = new n(ne(t)),
        a = new qn(r, !1);
      for (let t = a.curr; null !== t; t = a.next()) if ((e.sv.get(t.id.client) || 0) < t.id.clock + t.length) return !1;
      const i = ht([e.ds, yt(r)]);
      return Et(e.ds, i);
    })(e, t, Ot);
  class Sn {
    constructor() {
      this.clients = new Map(), this.pendingStructs = null, this.pendingDs = null;
    }
  }
  const Tn = e => {
      const t = new Map();
      return e.clients.forEach((e, n) => {
        const r = e[e.length - 1];
        t.set(n, r.id.clock + r.length);
      }), t;
    },
    kn = (e, t) => {
      const n = e.clients.get(t);
      if (void 0 === n) return 0;
      const r = n[n.length - 1];
      return r.id.clock + r.length;
    },
    xn = (e, t) => {
      let n = e.clients.get(t.id.client);
      if (void 0 === n) n = [], e.clients.set(t.id.client, n);else {
        const e = n[n.length - 1];
        if (e.id.clock + e.length !== t.id.clock) throw X();
      }
      n.push(t);
    },
    Dn = (e, t) => {
      let n = 0,
        r = e.length - 1,
        a = e[r],
        i = a.id.clock;
      if (i === t) return r;
      let o = p(t / (i + a.length - 1) * r);
      for (; n <= r;) {
        if (a = e[o], i = a.id.clock, i <= t) {
          if (t < i + a.length) return o;
          n = o + 1;
        } else r = o - 1;
        o = p((n + r) / 2);
      }
      throw X();
    },
    In = (e, t) => {
      const n = e.clients.get(t.client);
      return n[Dn(n, t.clock)];
    },
    Pn = (e, t, n) => {
      const r = Dn(t, n),
        a = t[r];
      return a.id.clock < n && a instanceof $a ? (t.splice(r + 1, 0, Ya(e, a, n - a.id.clock)), r + 1) : r;
    },
    Ln = (e, t) => {
      const n = e.doc.store.clients.get(t.client);
      return n[Pn(e, n, t.clock)];
    },
    Rn = (e, t, n) => {
      const r = t.clients.get(n.client),
        a = Dn(r, n.clock),
        i = r[a];
      return n.clock !== i.id.clock + i.length - 1 && i.constructor !== Ca && r.splice(a + 1, 0, Ya(e, i, n.clock - i.id.clock + 1)), i;
    },
    Bn = (e, t, n, r, a) => {
      if (0 === r) return;
      const i = n + r;
      let o,
        s = Pn(e, t, n);
      do {
        o = t[s++], i < o.id.clock + o.length && Pn(e, t, i), a(o);
      } while (s < t.length && t[s].id.clock < i);
    };
  class Nn {
    constructor(e, t, n) {
      this.doc = e, this.deleteSet = new ut(), this.beforeState = Tn(e.store), this.afterState = new Map(), this.changed = new Map(), this.changedParentTypes = new Map(), this._mergeStructs = [], this.origin = t, this.meta = new Map(), this.local = n, this.subdocsAdded = new Set(), this.subdocsRemoved = new Set(), this.subdocsLoaded = new Set(), this._needFormattingCleanup = !1;
    }
  }
  const Un = (e, t) => !(0 === t.deleteSet.clients.size && !((e, t) => {
      for (const [n, r] of e) if (t(r, n)) return !0;
      return !1;
    })(t.afterState, (e, n) => t.beforeState.get(n) !== e) || (ft(t.deleteSet), ((e, t) => {
      It(e, t.doc.store, t.beforeState);
    })(e, t), gt(e, t.deleteSet), 0)),
    Fn = (e, t, n) => {
      const r = t._item;
      (null === r || r.id.clock < (e.beforeState.get(r.id.client) || 0) && !r.deleted) && i(e.changed, t, o).add(n);
    },
    jn = (e, t) => {
      let n = e[t],
        r = e[t - 1],
        a = t;
      for (; a > 0 && r.deleted === n.deleted && r.constructor === n.constructor && r.mergeWith(n); n = r, r = e[--a - 1]) n instanceof $a && null !== n.parentSub && n.parent._map.get(n.parentSub) === n && n.parent._map.set(n.parentSub, r);
      const i = t - a;
      return i && e.splice(t + 1 - i, i), i;
    },
    Hn = (e, t, n) => {
      for (const [r, a] of e.clients.entries()) {
        const e = t.clients.get(r);
        for (let r = a.length - 1; r >= 0; r--) {
          const i = a[r],
            o = i.clock + i.len;
          for (let r = Dn(e, i.clock), a = e[r]; r < e.length && a.id.clock < o; a = e[++r]) {
            const a = e[r];
            if (i.clock + i.len <= a.id.clock) break;
            a instanceof $a && a.deleted && !a.keep && n(a) && a.gc(t, !1);
          }
        }
      }
    },
    Wn = (e, t) => {
      e.clients.forEach((e, n) => {
        const r = t.clients.get(n);
        for (let t = e.length - 1; t >= 0; t--) {
          const n = e[t];
          for (let e = h(r.length - 1, 1 + Dn(r, n.clock + n.len - 1)), t = r[e]; e > 0 && t.id.clock >= n.clock; t = r[e]) e -= 1 + jn(r, e);
        }
      });
    },
    Kn = (e, t, n) => {
      Hn(e, t, n), Wn(e, t);
    },
    Vn = (e, t) => {
      if (t < e.length) {
        const n = e[t],
          r = n.doc,
          a = r.store,
          i = n.deleteSet,
          o = n._mergeStructs;
        try {
          ft(i), n.afterState = Tn(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
          const e = [];
          n.changed.forEach((t, r) => e.push(() => {
            null !== r._item && r._item.deleted || r._callObserver(n, t);
          })), e.push(() => {
            n.changedParentTypes.forEach((e, t) => {
              t._dEH.l.length > 0 && (null === t._item || !t._item.deleted) && ((e = e.filter(e => null === e.target._item || !e.target._item.deleted)).forEach(e => {
                e.currentTarget = t, e._path = null;
              }), e.sort((e, t) => e.path.length - t.path.length), Qt(t._dEH, e, n));
            });
          }), e.push(() => r.emit("afterTransaction", [n, r])), Oe(e, []), n._needFormattingCleanup && fa(n);
        } finally {
          r.gc && Hn(i, a, r.gcFilter), Wn(i, a), n.afterState.forEach((e, t) => {
            const r = n.beforeState.get(t) || 0;
            if (r !== e) {
              const e = a.clients.get(t),
                n = _(Dn(e, r), 1);
              for (let t = e.length - 1; t >= n;) t -= 1 + jn(e, t);
            }
          });
          for (let e = o.length - 1; e >= 0; e--) {
            const {
                client: t,
                clock: n
              } = o[e].id,
              r = a.clients.get(t),
              i = Dn(r, n);
            i + 1 < r.length && jn(r, i + 1) > 1 || i > 0 && jn(r, i);
          }
          if (n.local || n.afterState.get(r.clientID) === n.beforeState.get(r.clientID) || (Xe(Ge, He, "[yjs] ", We, Ye, "Changed the client-id because another client seems to be using it."), r.clientID = bt()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
            const e = new kt();
            Un(e, n) && r.emit("update", [e.toUint8Array(), n.origin, r, n]);
          }
          if (r._observers.has("updateV2")) {
            const e = new Dt();
            Un(e, n) && r.emit("updateV2", [e.toUint8Array(), n.origin, r, n]);
          }
          const {
            subdocsAdded: s,
            subdocsLoaded: l,
            subdocsRemoved: c
          } = n;
          (s.size > 0 || c.size > 0 || l.size > 0) && (s.forEach(e => {
            e.clientID = r.clientID, null == e.collectionid && (e.collectionid = r.collectionid), r.subdocs.add(e);
          }), c.forEach(e => r.subdocs.delete(e)), r.emit("subdocs", [{
            loaded: l,
            added: s,
            removed: c
          }, r, n]), c.forEach(e => e.destroy())), e.length <= t + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, e])) : Vn(e, t + 1);
        }
      }
    },
    zn = (e, t, n = null, r = !0) => {
      const a = e._transactionCleanups;
      let i = !1,
        o = null;
      null === e._transaction && (i = !0, e._transaction = new Nn(e, n, r), a.push(e._transaction), 1 === a.length && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
      try {
        o = t(e._transaction);
      } finally {
        if (i) {
          const t = e._transaction === a[0];
          e._transaction = null, t && Vn(a, 0);
        }
      }
      return o;
    };
  class Yn {
    constructor(e, t) {
      this.insertions = t, this.deletions = e, this.meta = new Map();
    }
  }
  const Qn = (e, t, n) => {
      dt(e, n.deletions, n => {
        n instanceof $a && t.scope.some(t => t === e.doc || en(t, n)) && za(n, !1);
      });
    },
    Gn = (e, t, n) => {
      let r = null;
      const a = e.doc,
        i = e.scope;
      zn(a, n => {
        for (; t.length > 0 && null === e.currStackItem;) {
          const r = a.store,
            o = t.pop(),
            s = new Set(),
            l = [];
          let c = !1;
          dt(n, o.insertions, e => {
            if (e instanceof $a) {
              if (null !== e.redone) {
                let {
                  item: t,
                  diff: a
                } = Va(r, e.id);
                a > 0 && (t = Ln(n, qt(t.id.client, t.id.clock + a))), e = t;
              }
              !e.deleted && i.some(t => t === n.doc || en(t, e)) && l.push(e);
            }
          }), dt(n, o.deletions, e => {
            e instanceof $a && i.some(t => t === n.doc || en(t, e)) && !pt(o.insertions, e.id) && s.add(e);
          }), s.forEach(t => {
            c = null !== Ga(n, t, s, o.insertions, e.ignoreRemoteMapChanges, e) || c;
          });
          for (let t = l.length - 1; t >= 0; t--) {
            const r = l[t];
            e.deleteFilter(r) && (r.delete(n), c = !0);
          }
          e.currStackItem = c ? o : null;
        }
        n.changed.forEach((e, t) => {
          e.has(null) && t._searchMarker && (t._searchMarker.length = 0);
        }), r = n;
      }, e);
      const o = e.currStackItem;
      if (null != o) {
        const t = r.changedParentTypes;
        e.emit("stack-item-popped", [{
          stackItem: o,
          type: n,
          changedParentTypes: t,
          origin: e
        }, e]), e.currStackItem = null;
      }
      return o;
    };
  class $n extends d {
    constructor(e, {
      captureTimeout: t = 500,
      captureTransaction: n = e => !0,
      deleteFilter: r = () => !0,
      trackedOrigins: a = new Set([null]),
      ignoreRemoteMapChanges: i = !1,
      doc: o = u(e) ? e[0].doc : e instanceof wt ? e : e.doc
    } = {}) {
      super(), this.scope = [], this.doc = o, this.addToScope(e), this.deleteFilter = r, a.add(this), this.trackedOrigins = a, this.captureTransaction = n, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = i, this.captureTimeout = t, this.afterTransactionHandler = e => {
        if (!(this.captureTransaction(e) && this.scope.some(t => e.changedParentTypes.has(t) || t === this.doc) && (this.trackedOrigins.has(e.origin) || e.origin && this.trackedOrigins.has(e.origin.constructor)))) return;
        const t = this.undoing,
          n = this.redoing,
          r = t ? this.redoStack : this.undoStack;
        t ? this.stopCapturing() : n || this.clear(!1, !0);
        const a = new ut();
        e.afterState.forEach((t, n) => {
          const r = e.beforeState.get(n) || 0,
            i = t - r;
          i > 0 && _t(a, n, r, i);
        });
        const i = je();
        let o = !1;
        if (this.lastChange > 0 && i - this.lastChange < this.captureTimeout && r.length > 0 && !t && !n) {
          const t = r[r.length - 1];
          t.deletions = ht([t.deletions, e.deleteSet]), t.insertions = ht([t.insertions, a]);
        } else r.push(new Yn(e.deleteSet, a)), o = !0;
        t || n || (this.lastChange = i), dt(e, e.deleteSet, t => {
          t instanceof $a && this.scope.some(n => n === e.doc || en(n, t)) && za(t, !0);
        });
        const s = [{
          stackItem: r[r.length - 1],
          origin: e.origin,
          type: t ? "redo" : "undo",
          changedParentTypes: e.changedParentTypes
        }, this];
        o ? this.emit("stack-item-added", s) : this.emit("stack-item-updated", s);
      }, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
        this.destroy();
      });
    }
    addToScope(e) {
      const t = new Set(this.scope);
      (e = u(e) ? e : [e]).forEach(e => {
        t.has(e) || (t.add(e), (e instanceof Dr ? e.doc !== this.doc : e !== this.doc) && Je("[yjs#509] Not same Y.Doc"), this.scope.push(e));
      });
    }
    addTrackedOrigin(e) {
      this.trackedOrigins.add(e);
    }
    removeTrackedOrigin(e) {
      this.trackedOrigins.delete(e);
    }
    clear(e = !0, t = !0) {
      (e && this.canUndo() || t && this.canRedo()) && this.doc.transact(n => {
        e && (this.undoStack.forEach(e => Qn(n, this, e)), this.undoStack = []), t && (this.redoStack.forEach(e => Qn(n, this, e)), this.redoStack = []), this.emit("stack-cleared", [{
          undoStackCleared: e,
          redoStackCleared: t
        }]);
      });
    }
    stopCapturing() {
      this.lastChange = 0;
    }
    undo() {
      let e;
      this.undoing = !0;
      try {
        e = Gn(this, this.undoStack, "undo");
      } finally {
        this.undoing = !1;
      }
      return e;
    }
    redo() {
      let e;
      this.redoing = !0;
      try {
        e = Gn(this, this.redoStack, "redo");
      } finally {
        this.redoing = !1;
      }
      return e;
    }
    canUndo() {
      return this.undoStack.length > 0;
    }
    canRedo() {
      return this.redoStack.length > 0;
    }
    destroy() {
      this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy();
    }
  }
  class qn {
    constructor(e, t) {
      this.gen = function* (e) {
        const t = oe(e.restDecoder);
        for (let n = 0; n < t; n++) {
          const t = oe(e.restDecoder),
            n = e.readClient();
          let r = oe(e.restDecoder);
          for (let a = 0; a < t; a++) {
            const t = e.readInfo();
            if (10 === t) {
              const t = oe(e.restDecoder);
              yield new Xa(qt(n, r), t), r += t;
            } else if (31 & t) {
              const a = !(192 & t),
                i = new $a(qt(n, r), null, (t & g) === g ? e.readLeftID() : null, null, (t & A) === A ? e.readRightID() : null, a ? e.readParentInfo() ? e.readString() : e.readLeftID() : null, !a || 32 & ~t ? null : e.readString(), qa(e, t));
              yield i, r += i.length;
            } else {
              const t = e.readLen();
              yield new Ca(qt(n, r), t), r += t;
            }
          }
        }
      }(e), this.curr = null, this.done = !1, this.filterSkips = t, this.next();
    }
    next() {
      do {
        this.curr = this.gen.next().value || null;
      } while (this.filterSkips && null !== this.curr && this.curr.constructor === Xa);
      return this.curr;
    }
  }
  const Zn = e => Xn(e, Ot),
    Xn = (e, t = St) => {
      const n = [],
        r = new t(ne(e)),
        a = new qn(r, !1);
      for (let e = a.curr; null !== e; e = a.next()) n.push(e);
      Xe("Structs: ", n);
      const i = yt(r);
      Xe("DeleteSet: ", i);
    },
    Jn = e => er(e, Ot),
    er = (e, t = St) => {
      const n = [],
        r = new t(ne(e)),
        a = new qn(r, !1);
      for (let e = a.curr; null !== e; e = a.next()) n.push(e);
      return {
        structs: n,
        ds: yt(r)
      };
    };
  class tr {
    constructor(e) {
      this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
    }
  }
  const nr = e => lr(e, Ot, kt),
    rr = (e, t = xt, n = St) => {
      const r = new t(),
        a = new qn(new n(ne(e)), !1);
      let i = a.curr;
      if (null !== i) {
        let e = 0,
          t = i.id.client,
          n = 0 !== i.id.clock,
          o = n ? 0 : i.id.clock + i.length;
        for (; null !== i; i = a.next()) t !== i.id.client && (0 !== o && (e++, L(r.restEncoder, t), L(r.restEncoder, o)), t = i.id.client, o = 0, n = 0 !== i.id.clock), i.constructor === Xa && (n = !0), n || (o = i.id.clock + i.length);
        0 !== o && (e++, L(r.restEncoder, t), L(r.restEncoder, o));
        const s = x();
        return L(s, e), ((e, t) => {
          F(e, D(t));
        })(s, r.restEncoder), r.restEncoder = s, r.toUint8Array();
      }
      return L(r.restEncoder, 0), r.toUint8Array();
    },
    ar = e => rr(e, Tt, Ot),
    ir = (e, t = St) => {
      const n = new Map(),
        r = new Map(),
        a = new qn(new t(ne(e)), !1);
      let i = a.curr;
      if (null !== i) {
        let e = i.id.client,
          t = i.id.clock;
        for (n.set(e, t); null !== i; i = a.next()) e !== i.id.client && (r.set(e, t), n.set(i.id.client, i.id.clock), e = i.id.client), t = i.id.clock + i.length;
        r.set(e, t);
      }
      return {
        from: n,
        to: r
      };
    },
    or = e => ir(e, Ot),
    sr = (e, t) => {
      if (e.constructor === Ca) {
        const {
          client: n,
          clock: r
        } = e.id;
        return new Ca(qt(n, r + t), e.length - t);
      }
      if (e.constructor === Xa) {
        const {
          client: n,
          clock: r
        } = e.id;
        return new Xa(qt(n, r + t), e.length - t);
      }
      {
        const n = e,
          {
            client: r,
            clock: a
          } = n.id;
        return new $a(qt(r, a + t), null, qt(r, a + t - 1), null, n.rightOrigin, n.parent, n.parentSub, n.content.splice(t));
      }
    },
    lr = (e, t = St, n = Dt) => {
      if (1 === e.length) return e[0];
      const r = e.map(e => new t(ne(e)));
      let a = r.map(e => new qn(e, !0)),
        i = null;
      const o = new n(),
        s = new tr(o);
      for (; a = a.filter(e => null !== e.curr), a.sort((e, t) => {
        if (e.curr.id.client === t.curr.id.client) {
          const n = e.curr.id.clock - t.curr.id.clock;
          return 0 === n ? e.curr.constructor === t.curr.constructor ? 0 : e.curr.constructor === Xa ? 1 : -1 : n;
        }
        return t.curr.id.client - e.curr.id.client;
      }), 0 !== a.length;) {
        const e = a[0],
          t = e.curr.id.client;
        if (null !== i) {
          let n = e.curr,
            r = !1;
          for (; null !== n && n.id.clock + n.length <= i.struct.id.clock + i.struct.length && n.id.client >= i.struct.id.client;) n = e.next(), r = !0;
          if (null === n || n.id.client !== t || r && n.id.clock > i.struct.id.clock + i.struct.length) continue;
          if (t !== i.struct.id.client) pr(s, i.struct, i.offset), i = {
            struct: n,
            offset: 0
          }, e.next();else if (i.struct.id.clock + i.struct.length < n.id.clock) {
            if (i.struct.constructor === Xa) i.struct.length = n.id.clock + n.length - i.struct.id.clock;else {
              pr(s, i.struct, i.offset);
              const e = n.id.clock - i.struct.id.clock - i.struct.length;
              i = {
                struct: new Xa(qt(t, i.struct.id.clock + i.struct.length), e),
                offset: 0
              };
            }
          } else {
            const t = i.struct.id.clock + i.struct.length - n.id.clock;
            t > 0 && (i.struct.constructor === Xa ? i.struct.length -= t : n = sr(n, t)), i.struct.mergeWith(n) || (pr(s, i.struct, i.offset), i = {
              struct: n,
              offset: 0
            }, e.next());
          }
        } else i = {
          struct: e.curr,
          offset: 0
        }, e.next();
        for (let n = e.curr; null !== n && n.id.client === t && n.id.clock === i.struct.id.clock + i.struct.length && n.constructor !== Xa; n = e.next()) pr(s, i.struct, i.offset), i = {
          struct: n,
          offset: 0
        };
      }
      null !== i && (pr(s, i.struct, i.offset), i = null), fr(s);
      const l = r.map(e => yt(e)),
        c = ht(l);
      return gt(o, c), o.toUint8Array();
    },
    cr = (e, t, n = St, r = Dt) => {
      const a = jt(t),
        i = new r(),
        o = new tr(i),
        s = new n(ne(e)),
        l = new qn(s, !1);
      for (; l.curr;) {
        const e = l.curr,
          t = e.id.client,
          n = a.get(t) || 0;
        if (l.curr.constructor !== Xa) {
          if (e.id.clock + e.length > n) for (pr(o, e, _(n - e.id.clock, 0)), l.next(); l.curr && l.curr.id.client === t;) pr(o, l.curr, 0), l.next();else for (; l.curr && l.curr.id.client === t && l.curr.id.clock + l.curr.length <= n;) l.next();
        } else l.next();
      }
      fr(o);
      const c = yt(s);
      return gt(i, c), i.toUint8Array();
    },
    ur = (e, t) => cr(e, t, Ot, kt),
    dr = e => {
      e.written > 0 && (e.clientStructs.push({
        written: e.written,
        restEncoder: D(e.encoder.restEncoder)
      }), e.encoder.restEncoder = x(), e.written = 0);
    },
    pr = (e, t, n) => {
      e.written > 0 && e.currClient !== t.id.client && dr(e), 0 === e.written && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), L(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
    },
    fr = e => {
      dr(e);
      const t = e.encoder.restEncoder;
      L(t, e.clientStructs.length);
      for (let n = 0; n < e.clientStructs.length; n++) {
        const r = e.clientStructs[n];
        L(t, r.written), F(t, r.restEncoder);
      }
    },
    hr = (e, t, n, r) => {
      const a = new n(ne(e)),
        i = new qn(a, !1),
        o = new r(),
        s = new tr(o);
      for (let e = i.curr; null !== e; e = i.next()) pr(s, t(e), 0);
      fr(s);
      const l = yt(a);
      return gt(o, l), o.toUint8Array();
    },
    _r = ({
      formatting: e = !0,
      subdocs: t = !0,
      yxml: n = !0
    } = {}) => {
      let a = 0;
      const o = r(),
        s = r(),
        l = r(),
        c = r();
      return c.set(null, null), r => {
        switch (r.constructor) {
          case Ca:
          case Xa:
            return r;
          case $a:
            {
              const d = r,
                p = d.content;
              switch (p.constructor) {
                case Ma:
                  break;
                case Ka:
                  if (n) {
                    const e = p.type;
                    e instanceof ya && (e.nodeName = i(s, e.nodeName, () => "node-" + a)), e instanceof Ea && (e.hookName = i(s, e.hookName, () => "hook-" + a));
                  }
                  break;
                case Pa:
                  {
                    const e = p;
                    e.arr = e.arr.map(() => a);
                    break;
                  }
                case Oa:
                  p.content = new Uint8Array([a]);
                  break;
                case Ta:
                  {
                    const e = p;
                    t && (e.opts = {}, e.doc.guid = a + "");
                    break;
                  }
                case ka:
                  p.embed = {};
                  break;
                case xa:
                  {
                    const t = p;
                    e && (t.key = i(l, t.key, () => a + ""), t.value = i(c, t.value, () => ({
                      i: a
                    })));
                    break;
                  }
                case Da:
                  {
                    const e = p;
                    e.arr = e.arr.map(() => a);
                    break;
                  }
                case La:
                  {
                    const e = p;
                    e.str = (u = a % 10 + "", ((e, t) => {
                      const n = new Array(e);
                      for (let r = 0; r < e; r++) n[r] = t();
                      return n;
                    })(e.str.length, () => u).join(""));
                    break;
                  }
                default:
                  X();
              }
              return d.parentSub && (d.parentSub = i(o, d.parentSub, () => a + "")), a++, r;
            }
          default:
            X();
        }
        var u;
      };
    },
    mr = (e, t) => hr(e, _r(t), Ot, kt),
    Ar = (e, t) => hr(e, _r(t), St, Dt),
    gr = e => hr(e, Me, Ot, Dt),
    yr = e => hr(e, Me, St, kt),
    vr = "You must not compute changes after the event-handler fired.";
  class Er {
    constructor(e, t) {
      this.target = e, this.currentTarget = e, this.transaction = t, this._changes = null, this._keys = null, this._delta = null, this._path = null;
    }
    get path() {
      return this._path || (this._path = br(this.currentTarget, this.target));
    }
    deletes(e) {
      return pt(this.transaction.deleteSet, e.id);
    }
    get keys() {
      if (null === this._keys) {
        if (0 === this.transaction.doc._transactionCleanups.length) throw q(vr);
        const e = new Map(),
          t = this.target;
        this.transaction.changed.get(t).forEach(n => {
          if (null !== n) {
            const r = t._map.get(n);
            let a, i;
            if (this.adds(r)) {
              let e = r.left;
              for (; null !== e && this.adds(e);) e = e.left;
              if (this.deletes(r)) {
                if (null === e || !this.deletes(e)) return;
                a = "delete", i = s(e.content.getContent());
              } else null !== e && this.deletes(e) ? (a = "update", i = s(e.content.getContent())) : (a = "add", i = void 0);
            } else {
              if (!this.deletes(r)) return;
              a = "delete", i = s(r.content.getContent());
            }
            e.set(n, {
              action: a,
              oldValue: i
            });
          }
        }), this._keys = e;
      }
      return this._keys;
    }
    get delta() {
      return this.changes.delta;
    }
    adds(e) {
      return e.id.clock >= (this.transaction.beforeState.get(e.id.client) || 0);
    }
    get changes() {
      let e = this._changes;
      if (null === e) {
        if (0 === this.transaction.doc._transactionCleanups.length) throw q(vr);
        const t = this.target,
          n = o(),
          r = o(),
          a = [];
        if (e = {
          added: n,
          deleted: r,
          delta: a,
          keys: this.keys
        }, this.transaction.changed.get(t).has(null)) {
          let e = null;
          const i = () => {
            e && a.push(e);
          };
          for (let a = t._start; null !== a; a = a.right) a.deleted ? this.deletes(a) && !this.adds(a) && (null !== e && void 0 !== e.delete || (i(), e = {
            delete: 0
          }), e.delete += a.length, r.add(a)) : this.adds(a) ? (null !== e && void 0 !== e.insert || (i(), e = {
            insert: []
          }), e.insert = e.insert.concat(a.content.getContent()), n.add(a)) : (null !== e && void 0 !== e.retain || (i(), e = {
            retain: 0
          }), e.retain += a.length);
          null !== e && void 0 === e.retain && i();
        }
        this._changes = e;
      }
      return e;
    }
  }
  const br = (e, t) => {
      const n = [];
      for (; null !== t._item && t !== e;) {
        if (null !== t._item.parentSub) n.unshift(t._item.parentSub);else {
          let e = 0,
            r = t._item.parent._start;
          for (; r !== t._item && null !== r;) !r.deleted && r.countable && (e += r.length), r = r.right;
          n.unshift(e);
        }
        t = t._item.parent;
      }
      return n;
    },
    wr = () => {
      Je("Invalid access: Add Yjs type to a document before reading data.");
    };
  let Cr = 0;
  class Or {
    constructor(e, t) {
      e.marker = !0, this.p = e, this.index = t, this.timestamp = Cr++;
    }
  }
  const Mr = (e, t, n) => {
      e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = Cr++;
    },
    Sr = (e, t) => {
      if (null === e._start || 0 === t || null === e._searchMarker) return null;
      const n = 0 === e._searchMarker.length ? null : e._searchMarker.reduce((e, n) => f(t - e.index) < f(t - n.index) ? e : n);
      let r = e._start,
        a = 0;
      for (null !== n && (r = n.p, a = n.index, (e => {
        e.timestamp = Cr++;
      })(n)); null !== r.right && a < t;) {
        if (!r.deleted && r.countable) {
          if (t < a + r.length) break;
          a += r.length;
        }
        r = r.right;
      }
      for (; null !== r.left && a > t;) r = r.left, !r.deleted && r.countable && (a -= r.length);
      for (; null !== r.left && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock;) r = r.left, !r.deleted && r.countable && (a -= r.length);
      return null !== n && f(n.index - a) < r.parent.length / 80 ? (Mr(n, r, a), n) : ((e, t, n) => {
        if (e.length >= 80) {
          const r = e.reduce((e, t) => e.timestamp < t.timestamp ? e : t);
          return Mr(r, t, n), r;
        }
        {
          const r = new Or(t, n);
          return e.push(r), r;
        }
      })(e._searchMarker, r, a);
    },
    Tr = (e, t, n) => {
      for (let r = e.length - 1; r >= 0; r--) {
        const a = e[r];
        if (n > 0) {
          let t = a.p;
          for (t.marker = !1; t && (t.deleted || !t.countable);) t = t.left, t && !t.deleted && t.countable && (a.index -= t.length);
          if (null === t || !0 === t.marker) {
            e.splice(r, 1);
            continue;
          }
          a.p = t, t.marker = !0;
        }
        (t < a.index || n > 0 && t === a.index) && (a.index = _(t, a.index + n));
      }
    },
    kr = e => {
      e.doc ?? wr();
      let t = e._start;
      const n = [];
      for (; t;) n.push(t), t = t.right;
      return n;
    },
    xr = (e, t, n) => {
      const r = e,
        a = t.changedParentTypes;
      for (; i(a, e, () => []).push(n), null !== e._item;) e = e._item.parent;
      Qt(r._eH, n, t);
    };
  class Dr {
    constructor() {
      this._item = null, this._map = new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = Vt(), this._dEH = Vt(), this._searchMarker = null;
    }
    get parent() {
      return this._item ? this._item.parent : null;
    }
    _integrate(e, t) {
      this.doc = e, this._item = t;
    }
    _copy() {
      throw Z();
    }
    clone() {
      throw Z();
    }
    _write(e) {}
    get _first() {
      let e = this._start;
      for (; null !== e && e.deleted;) e = e.right;
      return e;
    }
    _callObserver(e, t) {
      !e.local && this._searchMarker && (this._searchMarker.length = 0);
    }
    observe(e) {
      zt(this._eH, e);
    }
    observeDeep(e) {
      zt(this._dEH, e);
    }
    unobserve(e) {
      Yt(this._eH, e);
    }
    unobserveDeep(e) {
      Yt(this._dEH, e);
    }
    toJSON() {}
  }
  const Ir = (e, t, n) => {
      e.doc ?? wr(), t < 0 && (t = e._length + t), n < 0 && (n = e._length + n);
      let r = n - t;
      const a = [];
      let i = e._start;
      for (; null !== i && r > 0;) {
        if (i.countable && !i.deleted) {
          const e = i.content.getContent();
          if (e.length <= t) t -= e.length;else {
            for (let n = t; n < e.length && r > 0; n++) a.push(e[n]), r--;
            t = 0;
          }
        }
        i = i.right;
      }
      return a;
    },
    Pr = e => {
      e.doc ?? wr();
      const t = [];
      let n = e._start;
      for (; null !== n;) {
        if (n.countable && !n.deleted) {
          const e = n.content.getContent();
          for (let n = 0; n < e.length; n++) t.push(e[n]);
        }
        n = n.right;
      }
      return t;
    },
    Lr = (e, t) => {
      const n = [];
      let r = e._start;
      for (; null !== r;) {
        if (r.countable && wn(r, t)) {
          const e = r.content.getContent();
          for (let t = 0; t < e.length; t++) n.push(e[t]);
        }
        r = r.right;
      }
      return n;
    },
    Rr = (e, t) => {
      let n = 0,
        r = e._start;
      for (e.doc ?? wr(); null !== r;) {
        if (r.countable && !r.deleted) {
          const a = r.content.getContent();
          for (let r = 0; r < a.length; r++) t(a[r], n++, e);
        }
        r = r.right;
      }
    },
    Br = (e, t) => {
      const n = [];
      return Rr(e, (r, a) => {
        n.push(t(r, a, e));
      }), n;
    },
    Nr = e => {
      let t = e._start,
        n = null,
        r = 0;
      return {
        [Symbol.iterator]() {
          return this;
        },
        next: () => {
          if (null === n) {
            for (; null !== t && t.deleted;) t = t.right;
            if (null === t) return {
              done: !0,
              value: void 0
            };
            n = t.content.getContent(), r = 0, t = t.right;
          }
          const e = n[r++];
          return n.length <= r && (n = null), {
            done: !1,
            value: e
          };
        }
      };
    },
    Ur = (e, t) => {
      e.doc ?? wr();
      const n = Sr(e, t);
      let r = e._start;
      for (null !== n && (r = n.p, t -= n.index); null !== r; r = r.right) if (!r.deleted && r.countable) {
        if (t < r.length) return r.content.getContent()[t];
        t -= r.length;
      }
    },
    Fr = (e, t, n, r) => {
      let a = n;
      const i = e.doc,
        o = i.clientID,
        s = i.store,
        l = null === n ? t._start : n.right;
      let c = [];
      const u = () => {
        c.length > 0 && (a = new $a(qt(o, kn(s, o)), a, a && a.lastId, l, l && l.id, t, null, new Pa(c)), a.integrate(e, 0), c = []);
      };
      r.forEach(n => {
        if (null === n) c.push(n);else switch (n.constructor) {
          case Number:
          case Object:
          case Boolean:
          case Array:
          case String:
            c.push(n);
            break;
          default:
            switch (u(), n.constructor) {
              case Uint8Array:
              case ArrayBuffer:
                a = new $a(qt(o, kn(s, o)), a, a && a.lastId, l, l && l.id, t, null, new Oa(new Uint8Array(n))), a.integrate(e, 0);
                break;
              case wt:
                a = new $a(qt(o, kn(s, o)), a, a && a.lastId, l, l && l.id, t, null, new Ta(n)), a.integrate(e, 0);
                break;
              default:
                if (!(n instanceof Dr)) throw new Error("Unexpected content type in insert operation");
                a = new $a(qt(o, kn(s, o)), a, a && a.lastId, l, l && l.id, t, null, new Ka(n)), a.integrate(e, 0);
            }
        }
      }), u();
    },
    jr = () => q("Length exceeded!"),
    Hr = (e, t, n, r) => {
      if (n > t._length) throw jr();
      if (0 === n) return t._searchMarker && Tr(t._searchMarker, n, r.length), Fr(e, t, null, r);
      const a = n,
        i = Sr(t, n);
      let o = t._start;
      for (null !== i && (o = i.p, 0 === (n -= i.index) && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); null !== o; o = o.right) if (!o.deleted && o.countable) {
        if (n <= o.length) {
          n < o.length && Ln(e, qt(o.id.client, o.id.clock + n));
          break;
        }
        n -= o.length;
      }
      return t._searchMarker && Tr(t._searchMarker, a, r.length), Fr(e, t, o, r);
    },
    Wr = (e, t, n, r) => {
      if (0 === r) return;
      const a = n,
        i = r,
        o = Sr(t, n);
      let s = t._start;
      for (null !== o && (s = o.p, n -= o.index); null !== s && n > 0; s = s.right) !s.deleted && s.countable && (n < s.length && Ln(e, qt(s.id.client, s.id.clock + n)), n -= s.length);
      for (; r > 0 && null !== s;) s.deleted || (r < s.length && Ln(e, qt(s.id.client, s.id.clock + r)), s.delete(e), r -= s.length), s = s.right;
      if (r > 0) throw jr();
      t._searchMarker && Tr(t._searchMarker, a, -i + r);
    },
    Kr = (e, t, n) => {
      const r = t._map.get(n);
      void 0 !== r && r.delete(e);
    },
    Vr = (e, t, n, r) => {
      const a = t._map.get(n) || null,
        i = e.doc,
        o = i.clientID;
      let s;
      if (null == r) s = new Pa([r]);else switch (r.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
        case Date:
        case BigInt:
          s = new Pa([r]);
          break;
        case Uint8Array:
          s = new Oa(r);
          break;
        case wt:
          s = new Ta(r);
          break;
        default:
          if (!(r instanceof Dr)) throw new Error("Unexpected content type");
          s = new Ka(r);
      }
      new $a(qt(o, kn(i.store, o)), a, a && a.lastId, null, null, t, n, s).integrate(e, 0);
    },
    zr = (e, t) => {
      e.doc ?? wr();
      const n = e._map.get(t);
      return void 0 === n || n.deleted ? void 0 : n.content.getContent()[n.length - 1];
    },
    Yr = e => {
      const t = {};
      return e.doc ?? wr(), e._map.forEach((e, n) => {
        e.deleted || (t[n] = e.content.getContent()[e.length - 1]);
      }), t;
    },
    Qr = (e, t) => {
      e.doc ?? wr();
      const n = e._map.get(t);
      return void 0 !== n && !n.deleted;
    },
    Gr = (e, t, n) => {
      let r = e._map.get(t) || null;
      for (; null !== r && (!n.sv.has(r.id.client) || r.id.clock >= (n.sv.get(r.id.client) || 0));) r = r.left;
      return null !== r && wn(r, n) ? r.content.getContent()[r.length - 1] : void 0;
    },
    $r = (e, t) => {
      const n = {};
      return e._map.forEach((e, r) => {
        let a = e;
        for (; null !== a && (!t.sv.has(a.id.client) || a.id.clock >= (t.sv.get(a.id.client) || 0));) a = a.left;
        null !== a && wn(a, t) && (n[r] = a.content.getContent()[a.length - 1]);
      }), n;
    },
    qr = e => {
      return e.doc ?? wr(), t = e._map.entries(), n = e => !e[1].deleted, tt(() => {
        let e;
        do {
          e = t.next();
        } while (!e.done && !n(e.value));
        return e;
      });
      var t, n;
    };
  class Zr extends Er {}
  class Xr extends Dr {
    constructor() {
      super(), this._prelimContent = [], this._searchMarker = [];
    }
    static from(e) {
      const t = new Xr();
      return t.push(e), t;
    }
    _integrate(e, t) {
      super._integrate(e, t), this.insert(0, this._prelimContent), this._prelimContent = null;
    }
    _copy() {
      return new Xr();
    }
    clone() {
      const e = new Xr();
      return e.insert(0, this.toArray().map(e => e instanceof Dr ? e.clone() : e)), e;
    }
    get length() {
      return this.doc ?? wr(), this._length;
    }
    _callObserver(e, t) {
      super._callObserver(e, t), xr(this, e, new Zr(this, e));
    }
    insert(e, t) {
      null !== this.doc ? zn(this.doc, n => {
        Hr(n, this, e, t);
      }) : this._prelimContent.splice(e, 0, ...t);
    }
    push(e) {
      null !== this.doc ? zn(this.doc, t => {
        ((e, t, n) => {
          let r = (t._searchMarker || []).reduce((e, t) => t.index > e.index ? t : e, {
            index: 0,
            p: t._start
          }).p;
          if (r) for (; r.right;) r = r.right;
          Fr(e, t, r, n);
        })(t, this, e);
      }) : this._prelimContent.push(...e);
    }
    unshift(e) {
      this.insert(0, e);
    }
    delete(e, t = 1) {
      null !== this.doc ? zn(this.doc, n => {
        Wr(n, this, e, t);
      }) : this._prelimContent.splice(e, t);
    }
    get(e) {
      return Ur(this, e);
    }
    toArray() {
      return Pr(this);
    }
    slice(e = 0, t = this.length) {
      return Ir(this, e, t);
    }
    toJSON() {
      return this.map(e => e instanceof Dr ? e.toJSON() : e);
    }
    map(e) {
      return Br(this, e);
    }
    forEach(e) {
      Rr(this, e);
    }
    [Symbol.iterator]() {
      return Nr(this);
    }
    _write(e) {
      e.writeTypeRef(Ba);
    }
  }
  class Jr extends Er {
    constructor(e, t, n) {
      super(e, t), this.keysChanged = n;
    }
  }
  class ea extends Dr {
    constructor(e) {
      super(), this._prelimContent = null, this._prelimContent = void 0 === e ? new Map() : new Map(e);
    }
    _integrate(e, t) {
      super._integrate(e, t), this._prelimContent.forEach((e, t) => {
        this.set(t, e);
      }), this._prelimContent = null;
    }
    _copy() {
      return new ea();
    }
    clone() {
      const e = new ea();
      return this.forEach((t, n) => {
        e.set(n, t instanceof Dr ? t.clone() : t);
      }), e;
    }
    _callObserver(e, t) {
      xr(this, e, new Jr(this, e, t));
    }
    toJSON() {
      this.doc ?? wr();
      const e = {};
      return this._map.forEach((t, n) => {
        if (!t.deleted) {
          const r = t.content.getContent()[t.length - 1];
          e[n] = r instanceof Dr ? r.toJSON() : r;
        }
      }), e;
    }
    get size() {
      return [...qr(this)].length;
    }
    keys() {
      return nt(qr(this), e => e[0]);
    }
    values() {
      return nt(qr(this), e => e[1].content.getContent()[e[1].length - 1]);
    }
    entries() {
      return nt(qr(this), e => [e[0], e[1].content.getContent()[e[1].length - 1]]);
    }
    forEach(e) {
      this.doc ?? wr(), this._map.forEach((t, n) => {
        t.deleted || e(t.content.getContent()[t.length - 1], n, this);
      });
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    delete(e) {
      null !== this.doc ? zn(this.doc, t => {
        Kr(t, this, e);
      }) : this._prelimContent.delete(e);
    }
    set(e, t) {
      return null !== this.doc ? zn(this.doc, n => {
        Vr(n, this, e, t);
      }) : this._prelimContent.set(e, t), t;
    }
    get(e) {
      return zr(this, e);
    }
    has(e) {
      return Qr(this, e);
    }
    clear() {
      null !== this.doc ? zn(this.doc, e => {
        this.forEach(function (t, n, r) {
          Kr(e, r, n);
        });
      }) : this._prelimContent.clear();
    }
    _write(e) {
      e.writeTypeRef(Na);
    }
  }
  const ta = (e, t) => e === t || "object" == typeof e && "object" == typeof t && e && t && ((e, t) => e === t || it(e) === it(t) && ((e, t) => {
    for (const n in e) if (!t(e[n], n)) return !1;
    return !0;
  })(e, (e, n) => (void 0 !== e || ((e, t) => Object.prototype.hasOwnProperty.call(e, t))(t, n)) && t[n] === e))(e, t);
  class na {
    constructor(e, t, n, r) {
      this.left = e, this.right = t, this.index = n, this.currentAttributes = r;
    }
    forward() {
      null === this.right && X(), this.right.content.constructor === xa ? this.right.deleted || oa(this.currentAttributes, this.right.content) : this.right.deleted || (this.index += this.right.length), this.left = this.right, this.right = this.right.right;
    }
  }
  const ra = (e, t, n) => {
      for (; null !== t.right && n > 0;) t.right.content.constructor === xa ? t.right.deleted || oa(t.currentAttributes, t.right.content) : t.right.deleted || (n < t.right.length && Ln(e, qt(t.right.id.client, t.right.id.clock + n)), t.index += t.right.length, n -= t.right.length), t.left = t.right, t.right = t.right.right;
      return t;
    },
    aa = (e, t, n, r) => {
      const a = new Map(),
        i = r ? Sr(t, n) : null;
      if (i) {
        const t = new na(i.p.left, i.p, i.index, a);
        return ra(e, t, n - i.index);
      }
      {
        const r = new na(null, t._start, 0, a);
        return ra(e, r, n);
      }
    },
    ia = (e, t, n, r) => {
      for (; null !== n.right && (!0 === n.right.deleted || n.right.content.constructor === xa && ta(r.get(n.right.content.key), n.right.content.value));) n.right.deleted || r.delete(n.right.content.key), n.forward();
      const a = e.doc,
        i = a.clientID;
      r.forEach((r, o) => {
        const s = n.left,
          l = n.right,
          c = new $a(qt(i, kn(a.store, i)), s, s && s.lastId, l, l && l.id, t, null, new xa(o, r));
        c.integrate(e, 0), n.right = c, n.forward();
      });
    },
    oa = (e, t) => {
      const {
        key: n,
        value: r
      } = t;
      null === r ? e.delete(n) : e.set(n, r);
    },
    sa = (e, t) => {
      for (; null !== e.right && (e.right.deleted || e.right.content.constructor === xa && ta(t[e.right.content.key] ?? null, e.right.content.value));) e.forward();
    },
    la = (e, t, n, r) => {
      const a = e.doc,
        i = a.clientID,
        o = new Map();
      for (const s in r) {
        const l = r[s],
          c = n.currentAttributes.get(s) ?? null;
        if (!ta(c, l)) {
          o.set(s, c);
          const {
            left: r,
            right: u
          } = n;
          n.right = new $a(qt(i, kn(a.store, i)), r, r && r.lastId, u, u && u.id, t, null, new xa(s, l)), n.right.integrate(e, 0), n.forward();
        }
      }
      return o;
    },
    ca = (e, t, n, r, a) => {
      n.currentAttributes.forEach((e, t) => {
        void 0 === a[t] && (a[t] = null);
      });
      const i = e.doc,
        o = i.clientID;
      sa(n, a);
      const s = la(e, t, n, a),
        l = r.constructor === String ? new La(r) : r instanceof Dr ? new Ka(r) : new ka(r);
      let {
        left: c,
        right: u,
        index: d
      } = n;
      t._searchMarker && Tr(t._searchMarker, n.index, l.getLength()), u = new $a(qt(o, kn(i.store, o)), c, c && c.lastId, u, u && u.id, t, null, l), u.integrate(e, 0), n.right = u, n.index = d, n.forward(), ia(e, t, n, s);
    },
    ua = (e, t, n, r, a) => {
      const i = e.doc,
        o = i.clientID;
      sa(n, a);
      const s = la(e, t, n, a);
      e: for (; null !== n.right && (r > 0 || s.size > 0 && (n.right.deleted || n.right.content.constructor === xa));) {
        if (!n.right.deleted) switch (n.right.content.constructor) {
          case xa:
            {
              const {
                  key: t,
                  value: i
                } = n.right.content,
                o = a[t];
              if (void 0 !== o) {
                if (ta(o, i)) s.delete(t);else {
                  if (0 === r) break e;
                  s.set(t, i);
                }
                n.right.delete(e);
              } else n.currentAttributes.set(t, i);
              break;
            }
          default:
            r < n.right.length && Ln(e, qt(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
        }
        n.forward();
      }
      if (r > 0) {
        let a = "";
        for (; r > 0; r--) a += "\n";
        n.right = new $a(qt(o, kn(i.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new La(a)), n.right.integrate(e, 0), n.forward();
      }
      ia(e, t, n, s);
    },
    da = (e, t, n, a, i) => {
      let o = t;
      const s = r();
      for (; o && (!o.countable || o.deleted);) {
        if (!o.deleted && o.content.constructor === xa) {
          const e = o.content;
          s.set(e.key, e);
        }
        o = o.right;
      }
      let l = 0,
        c = !1;
      for (; t !== o;) {
        if (n === t && (c = !0), !t.deleted) {
          const n = t.content;
          switch (n.constructor) {
            case xa:
              {
                const {
                    key: r,
                    value: o
                  } = n,
                  u = a.get(r) ?? null;
                s.get(r) === n && u !== o || (t.delete(e), l++, c || (i.get(r) ?? null) !== o || u === o || (null === u ? i.delete(r) : i.set(r, u))), c || t.deleted || oa(i, n);
                break;
              }
          }
        }
        t = t.right;
      }
      return l;
    },
    pa = e => {
      let t = 0;
      return zn(e.doc, n => {
        let i = e._start,
          o = e._start,
          s = r();
        const l = a(s);
        for (; o;) !1 === o.deleted && (o.content.constructor === xa ? oa(l, o.content) : (t += da(n, i, o, s, l), s = a(l), i = o)), o = o.right;
      }), t;
    },
    fa = e => {
      const t = new Set(),
        n = e.doc;
      for (const [r, a] of e.afterState.entries()) {
        const i = e.beforeState.get(r) || 0;
        a !== i && Bn(e, n.store.clients.get(r), i, a, e => {
          e.deleted || e.content.constructor !== xa || e.constructor === Ca || t.add(e.parent);
        });
      }
      zn(n, n => {
        dt(e, e.deleteSet, e => {
          if (e instanceof Ca || !e.parent._hasFormatting || t.has(e.parent)) return;
          const r = e.parent;
          e.content.constructor === xa ? t.add(r) : ((e, t) => {
            for (; t && t.right && (t.right.deleted || !t.right.countable);) t = t.right;
            const n = new Set();
            for (; t && (t.deleted || !t.countable);) {
              if (!t.deleted && t.content.constructor === xa) {
                const r = t.content.key;
                n.has(r) ? t.delete(e) : n.add(r);
              }
              t = t.left;
            }
          })(n, e);
        });
        for (const e of t) pa(e);
      });
    },
    ha = (e, t, n) => {
      const r = n,
        i = a(t.currentAttributes),
        o = t.right;
      for (; n > 0 && null !== t.right;) {
        if (!1 === t.right.deleted) switch (t.right.content.constructor) {
          case Ka:
          case ka:
          case La:
            n < t.right.length && Ln(e, qt(t.right.id.client, t.right.id.clock + n)), n -= t.right.length, t.right.delete(e);
        }
        t.forward();
      }
      o && da(e, o, t.right, i, t.currentAttributes);
      const s = (t.left || t.right).parent;
      return s._searchMarker && Tr(s._searchMarker, t.index, -r + n), t;
    };
  class _a extends Er {
    constructor(e, t, n) {
      super(e, t), this.childListChanged = !1, this.keysChanged = new Set(), n.forEach(e => {
        null === e ? this.childListChanged = !0 : this.keysChanged.add(e);
      });
    }
    get changes() {
      if (null === this._changes) {
        const e = {
          keys: this.keys,
          delta: this.delta,
          added: new Set(),
          deleted: new Set()
        };
        this._changes = e;
      }
      return this._changes;
    }
    get delta() {
      if (null === this._delta) {
        const e = this.target.doc,
          t = [];
        zn(e, e => {
          const n = new Map(),
            r = new Map();
          let a = this.target._start,
            i = null;
          const o = {};
          let s = "",
            l = 0,
            c = 0;
          const u = () => {
            if (null !== i) {
              let e = null;
              switch (i) {
                case "delete":
                  c > 0 && (e = {
                    delete: c
                  }), c = 0;
                  break;
                case "insert":
                  ("object" == typeof s || s.length > 0) && (e = {
                    insert: s
                  }, n.size > 0 && (e.attributes = {}, n.forEach((t, n) => {
                    null !== t && (e.attributes[n] = t);
                  }))), s = "";
                  break;
                case "retain":
                  l > 0 && (e = {
                    retain: l
                  }, (e => {
                    for (const t in e) return !1;
                    return !0;
                  })(o) || (e.attributes = rt({}, o))), l = 0;
              }
              e && t.push(e), i = null;
            }
          };
          for (; null !== a;) {
            switch (a.content.constructor) {
              case Ka:
              case ka:
                this.adds(a) ? this.deletes(a) || (u(), i = "insert", s = a.content.getContent()[0], u()) : this.deletes(a) ? ("delete" !== i && (u(), i = "delete"), c += 1) : a.deleted || ("retain" !== i && (u(), i = "retain"), l += 1);
                break;
              case La:
                this.adds(a) ? this.deletes(a) || ("insert" !== i && (u(), i = "insert"), s += a.content.str) : this.deletes(a) ? ("delete" !== i && (u(), i = "delete"), c += a.length) : a.deleted || ("retain" !== i && (u(), i = "retain"), l += a.length);
                break;
              case xa:
                {
                  const {
                    key: t,
                    value: s
                  } = a.content;
                  if (this.adds(a)) {
                    if (!this.deletes(a)) {
                      const l = n.get(t) ?? null;
                      ta(l, s) ? null !== s && a.delete(e) : ("retain" === i && u(), ta(s, r.get(t) ?? null) ? delete o[t] : o[t] = s);
                    }
                  } else if (this.deletes(a)) {
                    r.set(t, s);
                    const e = n.get(t) ?? null;
                    ta(e, s) || ("retain" === i && u(), o[t] = e);
                  } else if (!a.deleted) {
                    r.set(t, s);
                    const n = o[t];
                    void 0 !== n && (ta(n, s) ? null !== n && a.delete(e) : ("retain" === i && u(), null === s ? delete o[t] : o[t] = s));
                  }
                  a.deleted || ("insert" === i && u(), oa(n, a.content));
                  break;
                }
            }
            a = a.right;
          }
          for (u(); t.length > 0;) {
            const e = t[t.length - 1];
            if (void 0 === e.retain || void 0 !== e.attributes) break;
            t.pop();
          }
        }), this._delta = t;
      }
      return this._delta;
    }
  }
  class ma extends Dr {
    constructor(e) {
      super(), this._pending = void 0 !== e ? [() => this.insert(0, e)] : [], this._searchMarker = [], this._hasFormatting = !1;
    }
    get length() {
      return this.doc ?? wr(), this._length;
    }
    _integrate(e, t) {
      super._integrate(e, t);
      try {
        this._pending.forEach(e => e());
      } catch (e) {
        console.error(e);
      }
      this._pending = null;
    }
    _copy() {
      return new ma();
    }
    clone() {
      const e = new ma();
      return e.applyDelta(this.toDelta()), e;
    }
    _callObserver(e, t) {
      super._callObserver(e, t);
      const n = new _a(this, e, t);
      xr(this, e, n), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
    }
    toString() {
      this.doc ?? wr();
      let e = "",
        t = this._start;
      for (; null !== t;) !t.deleted && t.countable && t.content.constructor === La && (e += t.content.str), t = t.right;
      return e;
    }
    toJSON() {
      return this.toString();
    }
    applyDelta(e, {
      sanitize: t = !0
    } = {}) {
      null !== this.doc ? zn(this.doc, n => {
        const r = new na(null, this._start, 0, new Map());
        for (let a = 0; a < e.length; a++) {
          const i = e[a];
          if (void 0 !== i.insert) {
            const o = t || "string" != typeof i.insert || a !== e.length - 1 || null !== r.right || "\n" !== i.insert.slice(-1) ? i.insert : i.insert.slice(0, -1);
            ("string" != typeof o || o.length > 0) && ca(n, this, r, o, i.attributes || {});
          } else void 0 !== i.retain ? ua(n, this, r, i.retain, i.attributes || {}) : void 0 !== i.delete && ha(n, r, i.delete);
        }
      }) : this._pending.push(() => this.applyDelta(e));
    }
    toDelta(e, t, n) {
      this.doc ?? wr();
      const r = [],
        a = new Map(),
        i = this.doc;
      let o = "",
        s = this._start;
      function l() {
        if (o.length > 0) {
          const e = {};
          let t = !1;
          a.forEach((n, r) => {
            t = !0, e[r] = n;
          });
          const n = {
            insert: o
          };
          t && (n.attributes = e), r.push(n), o = "";
        }
      }
      const c = () => {
        for (; null !== s;) {
          if (wn(s, e) || void 0 !== t && wn(s, t)) switch (s.content.constructor) {
            case La:
              {
                const r = a.get("ychange");
                void 0 === e || wn(s, e) ? void 0 === t || wn(s, t) ? void 0 !== r && (l(), a.delete("ychange")) : void 0 !== r && r.user === s.id.client && "added" === r.type || (l(), a.set("ychange", n ? n("added", s.id) : {
                  type: "added"
                })) : void 0 !== r && r.user === s.id.client && "removed" === r.type || (l(), a.set("ychange", n ? n("removed", s.id) : {
                  type: "removed"
                })), o += s.content.str;
                break;
              }
            case Ka:
            case ka:
              {
                l();
                const e = {
                  insert: s.content.getContent()[0]
                };
                if (a.size > 0) {
                  const t = {};
                  e.attributes = t, a.forEach((e, n) => {
                    t[n] = e;
                  });
                }
                r.push(e);
                break;
              }
            case xa:
              wn(s, e) && (l(), oa(a, s.content));
          }
          s = s.right;
        }
        l();
      };
      return e || t ? zn(i, n => {
        e && Cn(n, e), t && Cn(n, t), c();
      }, "cleanup") : c(), r;
    }
    insert(e, t, n) {
      if (t.length <= 0) return;
      const r = this.doc;
      null !== r ? zn(r, r => {
        const a = aa(r, this, e, !n);
        n || (n = {}, a.currentAttributes.forEach((e, t) => {
          n[t] = e;
        })), ca(r, this, a, t, n);
      }) : this._pending.push(() => this.insert(e, t, n));
    }
    insertEmbed(e, t, n) {
      const r = this.doc;
      null !== r ? zn(r, r => {
        const a = aa(r, this, e, !n);
        ca(r, this, a, t, n || {});
      }) : this._pending.push(() => this.insertEmbed(e, t, n || {}));
    }
    delete(e, t) {
      if (0 === t) return;
      const n = this.doc;
      null !== n ? zn(n, n => {
        ha(n, aa(n, this, e, !0), t);
      }) : this._pending.push(() => this.delete(e, t));
    }
    format(e, t, n) {
      if (0 === t) return;
      const r = this.doc;
      null !== r ? zn(r, r => {
        const a = aa(r, this, e, !1);
        null !== a.right && ua(r, this, a, t, n);
      }) : this._pending.push(() => this.format(e, t, n));
    }
    removeAttribute(e) {
      null !== this.doc ? zn(this.doc, t => {
        Kr(t, this, e);
      }) : this._pending.push(() => this.removeAttribute(e));
    }
    setAttribute(e, t) {
      null !== this.doc ? zn(this.doc, n => {
        Vr(n, this, e, t);
      }) : this._pending.push(() => this.setAttribute(e, t));
    }
    getAttribute(e) {
      return zr(this, e);
    }
    getAttributes() {
      return Yr(this);
    }
    _write(e) {
      e.writeTypeRef(Ua);
    }
  }
  class Aa {
    constructor(e, t = () => !0) {
      this._filter = t, this._root = e, this._currentNode = e._start, this._firstCall = !0, e.doc ?? wr();
    }
    [Symbol.iterator]() {
      return this;
    }
    next() {
      let e = this._currentNode,
        t = e && e.content && e.content.type;
      if (null !== e && (!this._firstCall || e.deleted || !this._filter(t))) do {
        if (t = e.content.type, e.deleted || t.constructor !== ya && t.constructor !== ga || null === t._start) for (; null !== e;) {
          const t = e.next;
          if (null !== t) {
            e = t;
            break;
          }
          e = e.parent === this._root ? null : e.parent._item;
        } else e = t._start;
      } while (null !== e && (e.deleted || !this._filter(e.content.type)));
      return this._firstCall = !1, null === e ? {
        value: void 0,
        done: !0
      } : (this._currentNode = e, {
        value: e.content.type,
        done: !1
      });
    }
  }
  class ga extends Dr {
    constructor() {
      super(), this._prelimContent = [];
    }
    get firstChild() {
      const e = this._first;
      return e ? e.content.getContent()[0] : null;
    }
    _integrate(e, t) {
      super._integrate(e, t), this.insert(0, this._prelimContent), this._prelimContent = null;
    }
    _copy() {
      return new ga();
    }
    clone() {
      const e = new ga();
      return e.insert(0, this.toArray().map(e => e instanceof Dr ? e.clone() : e)), e;
    }
    get length() {
      return this.doc ?? wr(), null === this._prelimContent ? this._length : this._prelimContent.length;
    }
    createTreeWalker(e) {
      return new Aa(this, e);
    }
    querySelector(e) {
      e = e.toUpperCase();
      const t = new Aa(this, t => t.nodeName && t.nodeName.toUpperCase() === e).next();
      return t.done ? null : t.value;
    }
    querySelectorAll(e) {
      return e = e.toUpperCase(), c(new Aa(this, t => t.nodeName && t.nodeName.toUpperCase() === e));
    }
    _callObserver(e, t) {
      xr(this, e, new va(this, t, e));
    }
    toString() {
      return Br(this, e => e.toString()).join("");
    }
    toJSON() {
      return this.toString();
    }
    toDOM(e = document, t = {}, n) {
      const r = e.createDocumentFragment();
      return void 0 !== n && n._createAssociation(r, this), Rr(this, a => {
        r.insertBefore(a.toDOM(e, t, n), null);
      }), r;
    }
    insert(e, t) {
      null !== this.doc ? zn(this.doc, n => {
        Hr(n, this, e, t);
      }) : this._prelimContent.splice(e, 0, ...t);
    }
    insertAfter(e, t) {
      if (null !== this.doc) zn(this.doc, n => {
        const r = e && e instanceof Dr ? e._item : e;
        Fr(n, this, r, t);
      });else {
        const n = this._prelimContent,
          r = null === e ? 0 : n.findIndex(t => t === e) + 1;
        if (0 === r && null !== e) throw q("Reference item not found");
        n.splice(r, 0, ...t);
      }
    }
    delete(e, t = 1) {
      null !== this.doc ? zn(this.doc, n => {
        Wr(n, this, e, t);
      }) : this._prelimContent.splice(e, t);
    }
    toArray() {
      return Pr(this);
    }
    push(e) {
      this.insert(this.length, e);
    }
    unshift(e) {
      this.insert(0, e);
    }
    get(e) {
      return Ur(this, e);
    }
    slice(e = 0, t = this.length) {
      return Ir(this, e, t);
    }
    forEach(e) {
      Rr(this, e);
    }
    _write(e) {
      e.writeTypeRef(ja);
    }
  }
  class ya extends ga {
    constructor(e = "UNDEFINED") {
      super(), this.nodeName = e, this._prelimAttrs = new Map();
    }
    get nextSibling() {
      const e = this._item ? this._item.next : null;
      return e ? e.content.type : null;
    }
    get prevSibling() {
      const e = this._item ? this._item.prev : null;
      return e ? e.content.type : null;
    }
    _integrate(e, t) {
      super._integrate(e, t), this._prelimAttrs.forEach((e, t) => {
        this.setAttribute(t, e);
      }), this._prelimAttrs = null;
    }
    _copy() {
      return new ya(this.nodeName);
    }
    clone() {
      const e = new ya(this.nodeName);
      return ((e, t) => {
        for (const n in e) t(e[n], n);
      })(this.getAttributes(), (t, n) => {
        "string" == typeof t && e.setAttribute(n, t);
      }), e.insert(0, this.toArray().map(e => e instanceof Dr ? e.clone() : e)), e;
    }
    toString() {
      const e = this.getAttributes(),
        t = [],
        n = [];
      for (const t in e) n.push(t);
      n.sort();
      const r = n.length;
      for (let a = 0; a < r; a++) {
        const r = n[a];
        t.push(r + '="' + e[r] + '"');
      }
      const a = this.nodeName.toLocaleLowerCase();
      return `<${a}${t.length > 0 ? " " + t.join(" ") : ""}>${super.toString()}</${a}>`;
    }
    removeAttribute(e) {
      null !== this.doc ? zn(this.doc, t => {
        Kr(t, this, e);
      }) : this._prelimAttrs.delete(e);
    }
    setAttribute(e, t) {
      null !== this.doc ? zn(this.doc, n => {
        Vr(n, this, e, t);
      }) : this._prelimAttrs.set(e, t);
    }
    getAttribute(e) {
      return zr(this, e);
    }
    hasAttribute(e) {
      return Qr(this, e);
    }
    getAttributes(e) {
      return e ? $r(this, e) : Yr(this);
    }
    toDOM(e = document, t = {}, n) {
      const r = e.createElement(this.nodeName),
        a = this.getAttributes();
      for (const e in a) {
        const t = a[e];
        "string" == typeof t && r.setAttribute(e, t);
      }
      return Rr(this, a => {
        r.appendChild(a.toDOM(e, t, n));
      }), void 0 !== n && n._createAssociation(r, this), r;
    }
    _write(e) {
      e.writeTypeRef(Fa), e.writeKey(this.nodeName);
    }
  }
  class va extends Er {
    constructor(e, t, n) {
      super(e, n), this.childListChanged = !1, this.attributesChanged = new Set(), t.forEach(e => {
        null === e ? this.childListChanged = !0 : this.attributesChanged.add(e);
      });
    }
  }
  class Ea extends ea {
    constructor(e) {
      super(), this.hookName = e;
    }
    _copy() {
      return new Ea(this.hookName);
    }
    clone() {
      const e = new Ea(this.hookName);
      return this.forEach((t, n) => {
        e.set(n, t);
      }), e;
    }
    toDOM(e = document, t = {}, n) {
      const r = t[this.hookName];
      let a;
      return a = void 0 !== r ? r.createDom(this) : document.createElement(this.hookName), a.setAttribute("data-yjs-hook", this.hookName), void 0 !== n && n._createAssociation(a, this), a;
    }
    _write(e) {
      e.writeTypeRef(Ha), e.writeKey(this.hookName);
    }
  }
  class ba extends ma {
    get nextSibling() {
      const e = this._item ? this._item.next : null;
      return e ? e.content.type : null;
    }
    get prevSibling() {
      const e = this._item ? this._item.prev : null;
      return e ? e.content.type : null;
    }
    _copy() {
      return new ba();
    }
    clone() {
      const e = new ba();
      return e.applyDelta(this.toDelta()), e;
    }
    toDOM(e = document, t, n) {
      const r = e.createTextNode(this.toString());
      return void 0 !== n && n._createAssociation(r, this), r;
    }
    toString() {
      return this.toDelta().map(e => {
        const t = [];
        for (const n in e.attributes) {
          const r = [];
          for (const t in e.attributes[n]) r.push({
            key: t,
            value: e.attributes[n][t]
          });
          r.sort((e, t) => e.key < t.key ? -1 : 1), t.push({
            nodeName: n,
            attrs: r
          });
        }
        t.sort((e, t) => e.nodeName < t.nodeName ? -1 : 1);
        let n = "";
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          n += `<${r.nodeName}`;
          for (let e = 0; e < r.attrs.length; e++) {
            const t = r.attrs[e];
            n += ` ${t.key}="${t.value}"`;
          }
          n += ">";
        }
        n += e.insert;
        for (let e = t.length - 1; e >= 0; e--) n += `</${t[e].nodeName}>`;
        return n;
      }).join("");
    }
    toJSON() {
      return this.toString();
    }
    _write(e) {
      e.writeTypeRef(Wa);
    }
  }
  class wa {
    constructor(e, t) {
      this.id = e, this.length = t;
    }
    get deleted() {
      throw Z();
    }
    mergeWith(e) {
      return !1;
    }
    write(e, t, n) {
      throw Z();
    }
    integrate(e, t) {
      throw Z();
    }
  }
  class Ca extends wa {
    get deleted() {
      return !0;
    }
    delete() {}
    mergeWith(e) {
      return this.constructor === e.constructor && (this.length += e.length, !0);
    }
    integrate(e, t) {
      t > 0 && (this.id.clock += t, this.length -= t), xn(e.doc.store, this);
    }
    write(e, t) {
      e.writeInfo(0), e.writeLen(this.length - t);
    }
    getMissing(e, t) {
      return null;
    }
  }
  class Oa {
    constructor(e) {
      this.content = e;
    }
    getLength() {
      return 1;
    }
    getContent() {
      return [this.content];
    }
    isCountable() {
      return !0;
    }
    copy() {
      return new Oa(this.content);
    }
    splice(e) {
      throw Z();
    }
    mergeWith(e) {
      return !1;
    }
    integrate(e, t) {}
    delete(e) {}
    gc(e) {}
    write(e, t) {
      e.writeBuf(this.content);
    }
    getRef() {
      return 3;
    }
  }
  class Ma {
    constructor(e) {
      this.len = e;
    }
    getLength() {
      return this.len;
    }
    getContent() {
      return [];
    }
    isCountable() {
      return !1;
    }
    copy() {
      return new Ma(this.len);
    }
    splice(e) {
      const t = new Ma(this.len - e);
      return this.len = e, t;
    }
    mergeWith(e) {
      return this.len += e.len, !0;
    }
    integrate(e, t) {
      _t(e.deleteSet, t.id.client, t.id.clock, this.len), t.markDeleted();
    }
    delete(e) {}
    gc(e) {}
    write(e, t) {
      e.writeLen(this.len - t);
    }
    getRef() {
      return 1;
    }
  }
  const Sa = (e, t) => new wt({
    guid: e,
    ...t,
    shouldLoad: t.shouldLoad || t.autoLoad || !1
  });
  class Ta {
    constructor(e) {
      e._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = e;
      const t = {};
      this.opts = t, e.gc || (t.gc = !1), e.autoLoad && (t.autoLoad = !0), null !== e.meta && (t.meta = e.meta);
    }
    getLength() {
      return 1;
    }
    getContent() {
      return [this.doc];
    }
    isCountable() {
      return !0;
    }
    copy() {
      return new Ta(Sa(this.doc.guid, this.opts));
    }
    splice(e) {
      throw Z();
    }
    mergeWith(e) {
      return !1;
    }
    integrate(e, t) {
      this.doc._item = t, e.subdocsAdded.add(this.doc), this.doc.shouldLoad && e.subdocsLoaded.add(this.doc);
    }
    delete(e) {
      e.subdocsAdded.has(this.doc) ? e.subdocsAdded.delete(this.doc) : e.subdocsRemoved.add(this.doc);
    }
    gc(e) {}
    write(e, t) {
      e.writeString(this.doc.guid), e.writeAny(this.opts);
    }
    getRef() {
      return 9;
    }
  }
  class ka {
    constructor(e) {
      this.embed = e;
    }
    getLength() {
      return 1;
    }
    getContent() {
      return [this.embed];
    }
    isCountable() {
      return !0;
    }
    copy() {
      return new ka(this.embed);
    }
    splice(e) {
      throw Z();
    }
    mergeWith(e) {
      return !1;
    }
    integrate(e, t) {}
    delete(e) {}
    gc(e) {}
    write(e, t) {
      e.writeJSON(this.embed);
    }
    getRef() {
      return 5;
    }
  }
  class xa {
    constructor(e, t) {
      this.key = e, this.value = t;
    }
    getLength() {
      return 1;
    }
    getContent() {
      return [];
    }
    isCountable() {
      return !1;
    }
    copy() {
      return new xa(this.key, this.value);
    }
    splice(e) {
      throw Z();
    }
    mergeWith(e) {
      return !1;
    }
    integrate(e, t) {
      const n = t.parent;
      n._searchMarker = null, n._hasFormatting = !0;
    }
    delete(e) {}
    gc(e) {}
    write(e, t) {
      e.writeKey(this.key), e.writeJSON(this.value);
    }
    getRef() {
      return 6;
    }
  }
  class Da {
    constructor(e) {
      this.arr = e;
    }
    getLength() {
      return this.arr.length;
    }
    getContent() {
      return this.arr;
    }
    isCountable() {
      return !0;
    }
    copy() {
      return new Da(this.arr);
    }
    splice(e) {
      const t = new Da(this.arr.slice(e));
      return this.arr = this.arr.slice(0, e), t;
    }
    mergeWith(e) {
      return this.arr = this.arr.concat(e.arr), !0;
    }
    integrate(e, t) {}
    delete(e) {}
    gc(e) {}
    write(e, t) {
      const n = this.arr.length;
      e.writeLen(n - t);
      for (let r = t; r < n; r++) {
        const t = this.arr[r];
        e.writeString(void 0 === t ? "undefined" : JSON.stringify(t));
      }
    }
    getRef() {
      return 2;
    }
  }
  const Ia = "development" === De("node_env");
  class Pa {
    constructor(e) {
      this.arr = e, Ia && st(e);
    }
    getLength() {
      return this.arr.length;
    }
    getContent() {
      return this.arr;
    }
    isCountable() {
      return !0;
    }
    copy() {
      return new Pa(this.arr);
    }
    splice(e) {
      const t = new Pa(this.arr.slice(e));
      return this.arr = this.arr.slice(0, e), t;
    }
    mergeWith(e) {
      return this.arr = this.arr.concat(e.arr), !0;
    }
    integrate(e, t) {}
    delete(e) {}
    gc(e) {}
    write(e, t) {
      const n = this.arr.length;
      e.writeLen(n - t);
      for (let r = t; r < n; r++) {
        const t = this.arr[r];
        e.writeAny(t);
      }
    }
    getRef() {
      return 8;
    }
  }
  class La {
    constructor(e) {
      this.str = e;
    }
    getLength() {
      return this.str.length;
    }
    getContent() {
      return this.str.split("");
    }
    isCountable() {
      return !0;
    }
    copy() {
      return new La(this.str);
    }
    splice(e) {
      const t = new La(this.str.slice(e));
      this.str = this.str.slice(0, e);
      const n = this.str.charCodeAt(e - 1);
      return n >= 55296 && n <= 56319 && (this.str = this.str.slice(0, e - 1) + "�", t.str = "�" + t.str.slice(1)), t;
    }
    mergeWith(e) {
      return this.str += e.str, !0;
    }
    integrate(e, t) {}
    delete(e) {}
    gc(e) {}
    write(e, t) {
      e.writeString(0 === t ? this.str : this.str.slice(t));
    }
    getRef() {
      return 4;
    }
  }
  const Ra = [e => new Xr(), e => new ea(), e => new ma(), e => new ya(e.readKey()), e => new ga(), e => new Ea(e.readKey()), e => new ba()],
    Ba = 0,
    Na = 1,
    Ua = 2,
    Fa = 3,
    ja = 4,
    Ha = 5,
    Wa = 6;
  class Ka {
    constructor(e) {
      this.type = e;
    }
    getLength() {
      return 1;
    }
    getContent() {
      return [this.type];
    }
    isCountable() {
      return !0;
    }
    copy() {
      return new Ka(this.type._copy());
    }
    splice(e) {
      throw Z();
    }
    mergeWith(e) {
      return !1;
    }
    integrate(e, t) {
      this.type._integrate(e.doc, t);
    }
    delete(e) {
      let t = this.type._start;
      for (; null !== t;) t.deleted ? t.id.clock < (e.beforeState.get(t.id.client) || 0) && e._mergeStructs.push(t) : t.delete(e), t = t.right;
      this.type._map.forEach(t => {
        t.deleted ? t.id.clock < (e.beforeState.get(t.id.client) || 0) && e._mergeStructs.push(t) : t.delete(e);
      }), e.changed.delete(this.type);
    }
    gc(e) {
      let t = this.type._start;
      for (; null !== t;) t.gc(e, !0), t = t.right;
      this.type._start = null, this.type._map.forEach(t => {
        for (; null !== t;) t.gc(e, !0), t = t.left;
      }), this.type._map = new Map();
    }
    write(e, t) {
      this.type._write(e);
    }
    getRef() {
      return 7;
    }
  }
  const Va = (e, t) => {
      let n,
        r = t,
        a = 0;
      do {
        a > 0 && (r = qt(r.client, r.clock + a)), n = In(e, r), a = r.clock - n.id.clock, r = n.redone;
      } while (null !== r && n instanceof $a);
      return {
        item: n,
        diff: a
      };
    },
    za = (e, t) => {
      for (; null !== e && e.keep !== t;) e.keep = t, e = e.parent._item;
    },
    Ya = (e, t, n) => {
      const {
          client: r,
          clock: a
        } = t.id,
        i = new $a(qt(r, a + n), t, qt(r, a + n - 1), t.right, t.rightOrigin, t.parent, t.parentSub, t.content.splice(n));
      return t.deleted && i.markDeleted(), t.keep && (i.keep = !0), null !== t.redone && (i.redone = qt(t.redone.client, t.redone.clock + n)), t.right = i, null !== i.right && (i.right.left = i), e._mergeStructs.push(i), null !== i.parentSub && null === i.right && i.parent._map.set(i.parentSub, i), t.length = n, i;
    },
    Qa = (e, t) => ((e, t) => {
      for (let n = 0; n < e.length; n++) if (t(e[n])) return !0;
      return !1;
    })(e, e => pt(e.deletions, t)),
    Ga = (e, t, n, r, a, i) => {
      const o = e.doc,
        s = o.store,
        l = o.clientID,
        c = t.redone;
      if (null !== c) return Ln(e, c);
      let u,
        d = t.parent._item,
        p = null;
      if (null !== d && !0 === d.deleted) {
        if (null === d.redone && (!n.has(d) || null === Ga(e, d, n, r, a, i))) return null;
        for (; null !== d.redone;) d = Ln(e, d.redone);
      }
      const f = null === d ? t.parent : d.content.type;
      if (null === t.parentSub) {
        for (p = t.left, u = t; null !== p;) {
          let t = p;
          for (; null !== t && t.parent._item !== d;) t = null === t.redone ? null : Ln(e, t.redone);
          if (null !== t && t.parent._item === d) {
            p = t;
            break;
          }
          p = p.left;
        }
        for (; null !== u;) {
          let t = u;
          for (; null !== t && t.parent._item !== d;) t = null === t.redone ? null : Ln(e, t.redone);
          if (null !== t && t.parent._item === d) {
            u = t;
            break;
          }
          u = u.right;
        }
      } else if (u = null, t.right && !a) {
        for (p = t; null !== p && null !== p.right && (p.right.redone || pt(r, p.right.id) || Qa(i.undoStack, p.right.id) || Qa(i.redoStack, p.right.id));) for (p = p.right; p.redone;) p = Ln(e, p.redone);
        if (p && null !== p.right) return null;
      } else p = f._map.get(t.parentSub) || null;
      const h = kn(s, l),
        _ = qt(l, h),
        m = new $a(_, p, p && p.lastId, u, u && u.id, f, t.parentSub, t.content.copy());
      return t.redone = _, za(m, !0), m.integrate(e, 0), m;
    };
  class $a extends wa {
    constructor(e, t, n, r, a, i, o, s) {
      super(e, s.getLength()), this.origin = n, this.left = t, this.right = r, this.rightOrigin = a, this.parent = i, this.parentSub = o, this.redone = null, this.content = s, this.info = this.content.isCountable() ? 2 : 0;
    }
    set marker(e) {
      (8 & this.info) > 0 !== e && (this.info ^= 8);
    }
    get marker() {
      return (8 & this.info) > 0;
    }
    get keep() {
      return (1 & this.info) > 0;
    }
    set keep(e) {
      this.keep !== e && (this.info ^= 1);
    }
    get countable() {
      return (2 & this.info) > 0;
    }
    get deleted() {
      return (4 & this.info) > 0;
    }
    set deleted(e) {
      this.deleted !== e && (this.info ^= 4);
    }
    markDeleted() {
      this.info |= 4;
    }
    getMissing(e, t) {
      if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= kn(t, this.origin.client)) return this.origin.client;
      if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= kn(t, this.rightOrigin.client)) return this.rightOrigin.client;
      if (this.parent && this.parent.constructor === Gt && this.id.client !== this.parent.client && this.parent.clock >= kn(t, this.parent.client)) return this.parent.client;
      if (this.origin && (this.left = Rn(e, t, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = Ln(e, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === Ca || this.right && this.right.constructor === Ca) this.parent = null;else if (this.parent) {
        if (this.parent.constructor === Gt) {
          const e = In(t, this.parent);
          e.constructor === Ca ? this.parent = null : this.parent = e.content.type;
        }
      } else this.left && this.left.constructor === $a ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === $a && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
      return null;
    }
    integrate(e, t) {
      if (t > 0 && (this.id.clock += t, this.left = Rn(e, e.doc.store, qt(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(t), this.length -= t), this.parent) {
        if (!this.left && (!this.right || null !== this.right.left) || this.left && this.left.right !== this.right) {
          let t,
            n = this.left;
          if (null !== n) t = n.right;else if (null !== this.parentSub) for (t = this.parent._map.get(this.parentSub) || null; null !== t && null !== t.left;) t = t.left;else t = this.parent._start;
          const r = new Set(),
            a = new Set();
          for (; null !== t && t !== this.right;) {
            if (a.add(t), r.add(t), $t(this.origin, t.origin)) {
              if (t.id.client < this.id.client) n = t, r.clear();else if ($t(this.rightOrigin, t.rightOrigin)) break;
            } else {
              if (null === t.origin || !a.has(In(e.doc.store, t.origin))) break;
              r.has(In(e.doc.store, t.origin)) || (n = t, r.clear());
            }
            t = t.right;
          }
          this.left = n;
        }
        if (null !== this.left) {
          const e = this.left.right;
          this.right = e, this.left.right = this;
        } else {
          let e;
          if (null !== this.parentSub) for (e = this.parent._map.get(this.parentSub) || null; null !== e && null !== e.left;) e = e.left;else e = this.parent._start, this.parent._start = this;
          this.right = e;
        }
        null !== this.right ? this.right.left = this : null !== this.parentSub && (this.parent._map.set(this.parentSub, this), null !== this.left && this.left.delete(e)), null === this.parentSub && this.countable && !this.deleted && (this.parent._length += this.length), xn(e.doc.store, this), this.content.integrate(e, this), Fn(e, this.parent, this.parentSub), (null !== this.parent._item && this.parent._item.deleted || null !== this.parentSub && null !== this.right) && this.delete(e);
      } else new Ca(this.id, this.length).integrate(e, 0);
    }
    get next() {
      let e = this.right;
      for (; null !== e && e.deleted;) e = e.right;
      return e;
    }
    get prev() {
      let e = this.left;
      for (; null !== e && e.deleted;) e = e.left;
      return e;
    }
    get lastId() {
      return 1 === this.length ? this.id : qt(this.id.client, this.id.clock + this.length - 1);
    }
    mergeWith(e) {
      if (this.constructor === e.constructor && $t(e.origin, this.lastId) && this.right === e && $t(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && null === this.redone && null === e.redone && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
        const t = this.parent._searchMarker;
        return t && t.forEach(t => {
          t.p === e && (t.p = this, !this.deleted && this.countable && (t.index -= this.length));
        }), e.keep && (this.keep = !0), this.right = e.right, null !== this.right && (this.right.left = this), this.length += e.length, !0;
      }
      return !1;
    }
    delete(e) {
      if (!this.deleted) {
        const t = this.parent;
        this.countable && null === this.parentSub && (t._length -= this.length), this.markDeleted(), _t(e.deleteSet, this.id.client, this.id.clock, this.length), Fn(e, t, this.parentSub), this.content.delete(e);
      }
    }
    gc(e, t) {
      if (!this.deleted) throw X();
      this.content.gc(e), t ? ((e, t, n) => {
        const r = e.clients.get(t.id.client);
        r[Dn(r, t.id.clock)] = n;
      })(e, this, new Ca(this.id, this.length)) : this.content = new Ma(this.length);
    }
    write(e, t) {
      const n = t > 0 ? qt(this.id.client, this.id.clock + t - 1) : this.origin,
        r = this.rightOrigin,
        a = this.parentSub,
        i = 31 & this.content.getRef() | (null === n ? 0 : g) | (null === r ? 0 : A) | (null === a ? 0 : 32);
      if (e.writeInfo(i), null !== n && e.writeLeftID(n), null !== r && e.writeRightID(r), null === n && null === r) {
        const t = this.parent;
        if (void 0 !== t._item) {
          const n = t._item;
          if (null === n) {
            const n = Jt(t);
            e.writeParentInfo(!0), e.writeString(n);
          } else e.writeParentInfo(!1), e.writeLeftID(n.id);
        } else t.constructor === String ? (e.writeParentInfo(!0), e.writeString(t)) : t.constructor === Gt ? (e.writeParentInfo(!1), e.writeLeftID(t)) : X();
        null !== a && e.writeString(a);
      }
      this.content.write(e, t);
    }
  }
  const qa = (e, t) => Za[31 & t](e),
    Za = [() => {
      X();
    }, e => new Ma(e.readLen()), e => {
      const t = e.readLen(),
        n = [];
      for (let r = 0; r < t; r++) {
        const t = e.readString();
        "undefined" === t ? n.push(void 0) : n.push(JSON.parse(t));
      }
      return new Da(n);
    }, e => new Oa(e.readBuf()), e => new La(e.readString()), e => new ka(e.readJSON()), e => new xa(e.readKey(), e.readJSON()), e => new Ka(Ra[e.readTypeRef()](e)), e => {
      const t = e.readLen(),
        n = [];
      for (let r = 0; r < t; r++) n.push(e.readAny());
      return new Pa(n);
    }, e => new Ta(Sa(e.readString(), e.readAny())), () => {
      X();
    }];
  class Xa extends wa {
    get deleted() {
      return !0;
    }
    delete() {}
    mergeWith(e) {
      return this.constructor === e.constructor && (this.length += e.length, !0);
    }
    integrate(e, t) {
      X();
    }
    write(e, t) {
      e.writeInfo(10), L(e.restEncoder, this.length - t);
    }
    getMissing(e, t) {
      return null;
    }
  }
  const Ja = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    ei = "__ $YJS$ __";
  !0 === Ja[ei] && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438"), Ja[ei] = !0;
});
