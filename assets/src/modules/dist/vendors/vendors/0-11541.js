// Reconstructed Webpack factory 11541; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => f
  });
  var r = n(58168),
    a = n(41594),
    i = n(8546),
    o = n(52836),
    s = n(64467),
    l = n(89379),
    c = n(80296),
    u = n(80045),
    d = n(15777),
    p = ["defaultOptions", "cacheOptions", "loadOptions", "options", "isLoading", "onInputChange", "filterOption"];
  n(75206), n(27003);
  var f = (0, a.forwardRef)(function (e, t) {
    var n = function (e) {
        var t = e.defaultOptions,
          n = void 0 !== t && t,
          r = e.cacheOptions,
          i = void 0 !== r && r,
          o = e.loadOptions;
        e.options;
        var f = e.isLoading,
          h = void 0 !== f && f,
          _ = e.onInputChange,
          m = e.filterOption,
          A = void 0 === m ? null : m,
          g = (0, u.A)(e, p),
          y = g.inputValue,
          v = (0, a.useRef)(void 0),
          E = (0, a.useRef)(!1),
          b = (0, a.useState)(Array.isArray(n) ? n : void 0),
          w = (0, c.A)(b, 2),
          C = w[0],
          O = w[1],
          M = (0, a.useState)(void 0 !== y ? y : ""),
          S = (0, c.A)(M, 2),
          T = S[0],
          k = S[1],
          x = (0, a.useState)(!0 === n),
          D = (0, c.A)(x, 2),
          I = D[0],
          P = D[1],
          L = (0, a.useState)(void 0),
          R = (0, c.A)(L, 2),
          B = R[0],
          N = R[1],
          U = (0, a.useState)([]),
          F = (0, c.A)(U, 2),
          j = F[0],
          H = F[1],
          W = (0, a.useState)(!1),
          K = (0, c.A)(W, 2),
          V = K[0],
          z = K[1],
          Y = (0, a.useState)({}),
          Q = (0, c.A)(Y, 2),
          G = Q[0],
          $ = Q[1],
          q = (0, a.useState)(void 0),
          Z = (0, c.A)(q, 2),
          X = Z[0],
          J = Z[1],
          ee = (0, a.useState)(void 0),
          te = (0, c.A)(ee, 2),
          ne = te[0],
          re = te[1];
        i !== ne && ($({}), re(i)), n !== X && (O(Array.isArray(n) ? n : void 0), J(n)), (0, a.useEffect)(function () {
          return E.current = !0, function () {
            E.current = !1;
          };
        }, []);
        var ae = (0, a.useCallback)(function (e, t) {
          if (!o) return t();
          var n = o(e, t);
          n && "function" == typeof n.then && n.then(t, function () {
            return t();
          });
        }, [o]);
        (0, a.useEffect)(function () {
          !0 === n && ae(T, function (e) {
            E.current && (O(e || []), P(!!v.current));
          });
        }, []);
        var ie = (0, a.useCallback)(function (e, t) {
            var n = (0, d.L)(e, t, _);
            if (!n) return v.current = void 0, k(""), N(""), H([]), P(!1), void z(!1);
            if (i && G[n]) k(n), N(n), H(G[n]), P(!1), z(!1);else {
              var r = v.current = {};
              k(n), P(!0), z(!B), ae(n, function (e) {
                E && r === v.current && (v.current = void 0, P(!1), N(n), H(e || []), z(!1), $(e ? (0, l.A)((0, l.A)({}, G), {}, (0, s.A)({}, n, e)) : G));
              });
            }
          }, [i, ae, B, G, _]),
          oe = V ? [] : T && B ? j : C || [];
        return (0, l.A)((0, l.A)({}, g), {}, {
          options: oe,
          isLoading: I || h,
          onInputChange: ie,
          filterOption: A
        });
      }(e),
      f = (0, o.u)(n);
    return a.createElement(i.S, (0, r.A)({
      ref: t
    }, f));
  });
});
