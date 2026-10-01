// Reconstructed Webpack factory 73716; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    wE: () => o
  });
  var r = n(24534),
    a = n(19735),
    i = n(40390);
  function o(e) {
    return (0, i.VF)(s("", null, null, null, [""], e = (0, i.c4)(e), 0, [0], e));
  }
  function s(e, t, n, r, o, d, p, f, h) {
    for (var _ = 0, m = 0, A = p, g = 0, y = 0, v = 0, E = 1, b = 1, w = 1, C = 0, O = "", M = o, S = d, T = r, k = O; b;) switch (v = C, C = (0, i.K2)()) {
      case 40:
        if (108 != v && 58 == (0, a.wN)(k, A - 1)) {
          -1 != (0, a.K5)(k += (0, a.HC)((0, i.Tb)(C), "&", "&\f"), "&\f") && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += (0, i.Tb)(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += (0, i.mw)(v);
        break;
      case 92:
        k += (0, i.Nc)((0, i.OW)() - 1, 7);
        continue;
      case 47:
        switch ((0, i.se)()) {
          case 42:
          case 47:
            (0, a.BC)(c((0, i.nf)((0, i.K2)(), (0, i.OW)()), t, n), h);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * E:
        f[_++] = (0, a.b2)(k) * w;
      case 125 * E:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            b = 0;
          case 59 + m:
            -1 == w && (k = (0, a.HC)(k, /\f/g, "")), y > 0 && (0, a.b2)(k) - A && (0, a.BC)(y > 32 ? u(k + ";", r, n, A - 1) : u((0, a.HC)(k, " ", "") + ";", r, n, A - 2), h);
            break;
          case 59:
            k += ";";
          default:
            if ((0, a.BC)(T = l(k, t, n, _, m, o, f, O, M = [], S = [], A), d), 123 === C) if (0 === m) s(k, t, T, T, M, d, A, f, S);else switch (99 === g && 110 === (0, a.wN)(k, 3) ? 100 : g) {
              case 100:
              case 108:
              case 109:
              case 115:
                s(e, T, T, r && (0, a.BC)(l(e, T, T, 0, 0, o, f, O, o, M = [], A), S), o, S, A, f, r ? M : S);
                break;
              default:
                s(k, T, T, T, [""], S, 0, f, S);
            }
        }
        _ = m = y = 0, E = w = 1, O = k = "", A = p;
        break;
      case 58:
        A = 1 + (0, a.b2)(k), y = v;
      default:
        if (E < 1) if (123 == C) --E;else if (125 == C && 0 == E++ && 125 == (0, i.YL)()) continue;
        switch (k += (0, a.HT)(C), C * E) {
          case 38:
            w = m > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            f[_++] = ((0, a.b2)(k) - 1) * w, w = 1;
            break;
          case 64:
            45 === (0, i.se)() && (k += (0, i.Tb)((0, i.K2)())), g = (0, i.se)(), m = A = (0, a.b2)(O = k += (0, i.Cv)((0, i.OW)())), C++;
            break;
          case 45:
            45 === v && 2 == (0, a.b2)(k) && (E = 0);
        }
    }
    return d;
  }
  function l(e, t, n, o, s, l, c, u, d, p, f) {
    for (var h = s - 1, _ = 0 === s ? l : [""], m = (0, a.FK)(_), A = 0, g = 0, y = 0; A < o; ++A) for (var v = 0, E = (0, a.c1)(e, h + 1, h = (0, a.tn)(g = c[A])), b = e; v < m; ++v) (b = (0, a.Bq)(g > 0 ? _[v] + " " + E : (0, a.HC)(E, /&\f/g, _[v]))) && (d[y++] = b);
    return (0, i.rH)(e, t, n, 0 === s ? r.XZ : u, d, p, f);
  }
  function c(e, t, n) {
    return (0, i.rH)(e, t, n, r.YK, (0, a.HT)((0, i.Tp)()), (0, a.c1)(e, 2, -2), 0);
  }
  function u(e, t, n, o) {
    return (0, i.rH)(e, t, n, r.LU, (0, a.c1)(e, 0, o), (0, a.c1)(e, o + 1, -1), o);
  }
});
