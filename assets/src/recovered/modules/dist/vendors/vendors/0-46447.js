// Reconstructed Webpack factory 46447; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  function r(e) {
    return e + .5 | 0;
  }
  n.d(t, {
    Q1: () => I
  });
  const a = (e, t, n) => Math.max(Math.min(e, n), t);
  function i(e) {
    return a(r(2.55 * e), 0, 255);
  }
  function o(e) {
    return a(r(255 * e), 0, 255);
  }
  function s(e) {
    return a(r(e / 2.55) / 100, 0, 1);
  }
  function l(e) {
    return a(r(100 * e), 0, 100);
  }
  const c = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15
    },
    u = [..."0123456789ABCDEF"],
    d = e => u[15 & e],
    p = e => u[(240 & e) >> 4] + u[15 & e],
    f = e => (240 & e) >> 4 == (15 & e);
  const h = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function _(e, t, n) {
    const r = t * Math.min(n, 1 - n),
      a = (t, a = (t + e / 30) % 12) => n - r * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return [a(0), a(8), a(4)];
  }
  function m(e, t, n) {
    const r = (r, a = (r + e / 60) % 6) => n - n * t * Math.max(Math.min(a, 4 - a, 1), 0);
    return [r(5), r(3), r(1)];
  }
  function A(e, t, n) {
    const r = _(e, 1, .5);
    let a;
    for (t + n > 1 && (a = 1 / (t + n), t *= a, n *= a), a = 0; a < 3; a++) r[a] *= 1 - t - n, r[a] += t;
    return r;
  }
  function g(e) {
    const t = e.r / 255,
      n = e.g / 255,
      r = e.b / 255,
      a = Math.max(t, n, r),
      i = Math.min(t, n, r),
      o = (a + i) / 2;
    let s, l, c;
    return a !== i && (c = a - i, l = o > .5 ? c / (2 - a - i) : c / (a + i), s = function (e, t, n, r, a) {
      return e === a ? (t - n) / r + (t < n ? 6 : 0) : t === a ? (n - e) / r + 2 : (e - t) / r + 4;
    }(t, n, r, c, a), s = 60 * s + .5), [0 | s, l || 0, o];
  }
  function y(e, t, n, r) {
    return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, r)).map(o);
  }
  function v(e, t, n) {
    return y(_, e, t, n);
  }
  function E(e) {
    return (e % 360 + 360) % 360;
  }
  const b = {
      x: "dark",
      Z: "light",
      Y: "re",
      X: "blu",
      W: "gr",
      V: "medium",
      U: "slate",
      A: "ee",
      T: "ol",
      S: "or",
      B: "ra",
      C: "lateg",
      D: "ights",
      R: "in",
      Q: "turquois",
      E: "hi",
      P: "ro",
      O: "al",
      N: "le",
      M: "de",
      L: "yello",
      F: "en",
      K: "ch",
      G: "arks",
      H: "ea",
      I: "ightg",
      J: "wh"
    },
    w = {
      OiceXe: "f0f8ff",
      antiquewEte: "faebd7",
      aqua: "ffff",
      aquamarRe: "7fffd4",
      azuY: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "0",
      blanKedOmond: "ffebcd",
      Xe: "ff",
      XeviTet: "8a2be2",
      bPwn: "a52a2a",
      burlywood: "deb887",
      caMtXe: "5f9ea0",
      KartYuse: "7fff00",
      KocTate: "d2691e",
      cSO: "ff7f50",
      cSnflowerXe: "6495ed",
      cSnsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "ffff",
      xXe: "8b",
      xcyan: "8b8b",
      xgTMnPd: "b8860b",
      xWay: "a9a9a9",
      xgYF: "6400",
      xgYy: "a9a9a9",
      xkhaki: "bdb76b",
      xmagFta: "8b008b",
      xTivegYF: "556b2f",
      xSange: "ff8c00",
      xScEd: "9932cc",
      xYd: "8b0000",
      xsOmon: "e9967a",
      xsHgYF: "8fbc8f",
      xUXe: "483d8b",
      xUWay: "2f4f4f",
      xUgYy: "2f4f4f",
      xQe: "ced1",
      xviTet: "9400d3",
      dAppRk: "ff1493",
      dApskyXe: "bfff",
      dimWay: "696969",
      dimgYy: "696969",
      dodgerXe: "1e90ff",
      fiYbrick: "b22222",
      flSOwEte: "fffaf0",
      foYstWAn: "228b22",
      fuKsia: "ff00ff",
      gaRsbSo: "dcdcdc",
      ghostwEte: "f8f8ff",
      gTd: "ffd700",
      gTMnPd: "daa520",
      Way: "808080",
      gYF: "8000",
      gYFLw: "adff2f",
      gYy: "808080",
      honeyMw: "f0fff0",
      hotpRk: "ff69b4",
      RdianYd: "cd5c5c",
      Rdigo: "4b0082",
      ivSy: "fffff0",
      khaki: "f0e68c",
      lavFMr: "e6e6fa",
      lavFMrXsh: "fff0f5",
      lawngYF: "7cfc00",
      NmoncEffon: "fffacd",
      ZXe: "add8e6",
      ZcSO: "f08080",
      Zcyan: "e0ffff",
      ZgTMnPdLw: "fafad2",
      ZWay: "d3d3d3",
      ZgYF: "90ee90",
      ZgYy: "d3d3d3",
      ZpRk: "ffb6c1",
      ZsOmon: "ffa07a",
      ZsHgYF: "20b2aa",
      ZskyXe: "87cefa",
      ZUWay: "778899",
      ZUgYy: "778899",
      ZstAlXe: "b0c4de",
      ZLw: "ffffe0",
      lime: "ff00",
      limegYF: "32cd32",
      lRF: "faf0e6",
      magFta: "ff00ff",
      maPon: "800000",
      VaquamarRe: "66cdaa",
      VXe: "cd",
      VScEd: "ba55d3",
      VpurpN: "9370db",
      VsHgYF: "3cb371",
      VUXe: "7b68ee",
      VsprRggYF: "fa9a",
      VQe: "48d1cc",
      VviTetYd: "c71585",
      midnightXe: "191970",
      mRtcYam: "f5fffa",
      mistyPse: "ffe4e1",
      moccasR: "ffe4b5",
      navajowEte: "ffdead",
      navy: "80",
      Tdlace: "fdf5e6",
      Tive: "808000",
      TivedBb: "6b8e23",
      Sange: "ffa500",
      SangeYd: "ff4500",
      ScEd: "da70d6",
      pOegTMnPd: "eee8aa",
      pOegYF: "98fb98",
      pOeQe: "afeeee",
      pOeviTetYd: "db7093",
      papayawEp: "ffefd5",
      pHKpuff: "ffdab9",
      peru: "cd853f",
      pRk: "ffc0cb",
      plum: "dda0dd",
      powMrXe: "b0e0e6",
      purpN: "800080",
      YbeccapurpN: "663399",
      Yd: "ff0000",
      Psybrown: "bc8f8f",
      PyOXe: "4169e1",
      saddNbPwn: "8b4513",
      sOmon: "fa8072",
      sandybPwn: "f4a460",
      sHgYF: "2e8b57",
      sHshell: "fff5ee",
      siFna: "a0522d",
      silver: "c0c0c0",
      skyXe: "87ceeb",
      UXe: "6a5acd",
      UWay: "708090",
      UgYy: "708090",
      snow: "fffafa",
      sprRggYF: "ff7f",
      stAlXe: "4682b4",
      tan: "d2b48c",
      teO: "8080",
      tEstN: "d8bfd8",
      tomato: "ff6347",
      Qe: "40e0d0",
      viTet: "ee82ee",
      JHt: "f5deb3",
      wEte: "ffffff",
      wEtesmoke: "f5f5f5",
      Lw: "ffff00",
      LwgYF: "9acd32"
    };
  let C;
  const O = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
    M = e => e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055,
    S = e => e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4);
  function T(e, t, n) {
    if (e) {
      let r = g(e);
      r[t] = Math.max(0, Math.min(r[t] + r[t] * n, 0 === t ? 360 : 1)), r = v(r), e.r = r[0], e.g = r[1], e.b = r[2];
    }
  }
  function k(e, t) {
    return e ? Object.assign(t || {}, e) : e;
  }
  function x(e) {
    var t = {
      r: 0,
      g: 0,
      b: 0,
      a: 255
    };
    return Array.isArray(e) ? e.length >= 3 && (t = {
      r: e[0],
      g: e[1],
      b: e[2],
      a: 255
    }, e.length > 3 && (t.a = o(e[3]))) : (t = k(e, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    })).a = o(t.a), t;
  }
  function D(e) {
    return "r" === e.charAt(0) ? function (e) {
      const t = O.exec(e);
      let n,
        r,
        o,
        s = 255;
      if (t) {
        if (t[7] !== n) {
          const e = +t[7];
          s = t[8] ? i(e) : a(255 * e, 0, 255);
        }
        return n = +t[1], r = +t[3], o = +t[5], n = 255 & (t[2] ? i(n) : a(n, 0, 255)), r = 255 & (t[4] ? i(r) : a(r, 0, 255)), o = 255 & (t[6] ? i(o) : a(o, 0, 255)), {
          r: n,
          g: r,
          b: o,
          a: s
        };
      }
    }(e) : function (e) {
      const t = h.exec(e);
      let n,
        r = 255;
      if (!t) return;
      t[5] !== n && (r = t[6] ? i(+t[5]) : o(+t[5]));
      const a = E(+t[2]),
        s = +t[3] / 100,
        l = +t[4] / 100;
      return n = "hwb" === t[1] ? function (e, t, n) {
        return y(A, e, t, n);
      }(a, s, l) : "hsv" === t[1] ? function (e, t, n) {
        return y(m, e, t, n);
      }(a, s, l) : v(a, s, l), {
        r: n[0],
        g: n[1],
        b: n[2],
        a: r
      };
    }(e);
  }
  class I {
    constructor(e) {
      if (e instanceof I) return e;
      const t = typeof e;
      let n;
      var r, a, i;
      "object" === t ? n = x(e) : "string" === t && (i = (r = e).length, "#" === r[0] && (4 === i || 5 === i ? a = {
        r: 255 & 17 * c[r[1]],
        g: 255 & 17 * c[r[2]],
        b: 255 & 17 * c[r[3]],
        a: 5 === i ? 17 * c[r[4]] : 255
      } : 7 !== i && 9 !== i || (a = {
        r: c[r[1]] << 4 | c[r[2]],
        g: c[r[3]] << 4 | c[r[4]],
        b: c[r[5]] << 4 | c[r[6]],
        a: 9 === i ? c[r[7]] << 4 | c[r[8]] : 255
      })), n = a || function (e) {
        C || (C = function () {
          const e = {},
            t = Object.keys(w),
            n = Object.keys(b);
          let r, a, i, o, s;
          for (r = 0; r < t.length; r++) {
            for (o = s = t[r], a = 0; a < n.length; a++) i = n[a], s = s.replace(i, b[i]);
            i = parseInt(w[o], 16), e[s] = [i >> 16 & 255, i >> 8 & 255, 255 & i];
          }
          return e;
        }(), C.transparent = [0, 0, 0, 0]);
        const t = C[e.toLowerCase()];
        return t && {
          r: t[0],
          g: t[1],
          b: t[2],
          a: 4 === t.length ? t[3] : 255
        };
      }(e) || D(e)), this._rgb = n, this._valid = !!n;
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var e = k(this._rgb);
      return e && (e.a = s(e.a)), e;
    }
    set rgb(e) {
      this._rgb = x(e);
    }
    rgbString() {
      return this._valid ? (e = this._rgb) && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${s(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`) : void 0;
      var e;
    }
    hexString() {
      return this._valid ? (e = this._rgb, t = (e => f(e.r) && f(e.g) && f(e.b) && f(e.a))(e) ? d : p, e ? "#" + t(e.r) + t(e.g) + t(e.b) + ((e, t) => e < 255 ? t(e) : "")(e.a, t) : void 0) : void 0;
      var e, t;
    }
    hslString() {
      return this._valid ? function (e) {
        if (!e) return;
        const t = g(e),
          n = t[0],
          r = l(t[1]),
          a = l(t[2]);
        return e.a < 255 ? `hsla(${n}, ${r}%, ${a}%, ${s(e.a)})` : `hsl(${n}, ${r}%, ${a}%)`;
      }(this._rgb) : void 0;
    }
    mix(e, t) {
      if (e) {
        const n = this.rgb,
          r = e.rgb;
        let a;
        const i = t === a ? .5 : t,
          o = 2 * i - 1,
          s = n.a - r.a,
          l = ((o * s === -1 ? o : (o + s) / (1 + o * s)) + 1) / 2;
        a = 1 - l, n.r = 255 & l * n.r + a * r.r + .5, n.g = 255 & l * n.g + a * r.g + .5, n.b = 255 & l * n.b + a * r.b + .5, n.a = i * n.a + (1 - i) * r.a, this.rgb = n;
      }
      return this;
    }
    interpolate(e, t) {
      return e && (this._rgb = function (e, t, n) {
        const r = S(s(e.r)),
          a = S(s(e.g)),
          i = S(s(e.b));
        return {
          r: o(M(r + n * (S(s(t.r)) - r))),
          g: o(M(a + n * (S(s(t.g)) - a))),
          b: o(M(i + n * (S(s(t.b)) - i))),
          a: e.a + n * (t.a - e.a)
        };
      }(this._rgb, e._rgb, t)), this;
    }
    clone() {
      return new I(this.rgb);
    }
    alpha(e) {
      return this._rgb.a = o(e), this;
    }
    clearer(e) {
      return this._rgb.a *= 1 - e, this;
    }
    greyscale() {
      const e = this._rgb,
        t = r(.3 * e.r + .59 * e.g + .11 * e.b);
      return e.r = e.g = e.b = t, this;
    }
    opaquer(e) {
      return this._rgb.a *= 1 + e, this;
    }
    negate() {
      const e = this._rgb;
      return e.r = 255 - e.r, e.g = 255 - e.g, e.b = 255 - e.b, this;
    }
    lighten(e) {
      return T(this._rgb, 2, e), this;
    }
    darken(e) {
      return T(this._rgb, 2, -e), this;
    }
    saturate(e) {
      return T(this._rgb, 1, e), this;
    }
    desaturate(e) {
      return T(this._rgb, 1, -e), this;
    }
    rotate(e) {
      return function (e, t) {
        var n = g(e);
        n[0] = E(n[0] + t), n = v(n), e.r = n[0], e.g = n[1], e.b = n[2];
      }(this._rgb, e), this;
    }
  }
});
