// Reconstructed Webpack factory 40390; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    C: () => d,
    Cv: () => M,
    G1: () => s,
    K2: () => h,
    Nc: () => w,
    OW: () => m,
    Sh: () => g,
    Tb: () => E,
    Tp: () => p,
    VF: () => v,
    YL: () => f,
    c4: () => y,
    di: () => A,
    mw: () => b,
    nf: () => O,
    rH: () => u,
    se: () => _
  });
  var r = n(19735),
    a = 1,
    i = 1,
    o = 0,
    s = 0,
    l = 0,
    c = "";
  function u(e, t, n, r, o, s, l) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: s,
      line: a,
      column: i,
      length: l,
      return: ""
    };
  }
  function d(e, t) {
    return (0, r.kp)(u("", null, null, "", null, null, 0), e, {
      length: -e.length
    }, t);
  }
  function p() {
    return l;
  }
  function f() {
    return l = s > 0 ? (0, r.wN)(c, --s) : 0, i--, 10 === l && (i = 1, a--), l;
  }
  function h() {
    return l = s < o ? (0, r.wN)(c, s++) : 0, i++, 10 === l && (i = 1, a++), l;
  }
  function _() {
    return (0, r.wN)(c, s);
  }
  function m() {
    return s;
  }
  function A(e, t) {
    return (0, r.c1)(c, e, t);
  }
  function g(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function y(e) {
    return a = i = 1, o = (0, r.b2)(c = e), s = 0, [];
  }
  function v(e) {
    return c = "", e;
  }
  function E(e) {
    return (0, r.Bq)(A(s - 1, C(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
  }
  function b(e) {
    for (; (l = _()) && l < 33;) h();
    return g(e) > 2 || g(l) > 3 ? "" : " ";
  }
  function w(e, t) {
    for (; --t && h() && !(l < 48 || l > 102 || l > 57 && l < 65 || l > 70 && l < 97););
    return A(e, m() + (t < 6 && 32 == _() && 32 == h()));
  }
  function C(e) {
    for (; h();) switch (l) {
      case e:
        return s;
      case 34:
      case 39:
        34 !== e && 39 !== e && C(l);
        break;
      case 40:
        41 === e && C(e);
        break;
      case 92:
        h();
    }
    return s;
  }
  function O(e, t) {
    for (; h() && e + l !== 57 && (e + l !== 84 || 47 !== _()););
    return "/*" + A(t, s - 1) + "*" + (0, r.HT)(47 === e ? e : h());
  }
  function M(e) {
    for (; !g(_());) h();
    return A(e, s);
  }
});
