/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createEarningsChart(readRuntime) {
  return function EarningsChart(props) {
    const {
      BU,
      DU,
      FU,
      NU,
      React,
      T: StoreModule,
      _,
      b: I18n,
      g: ReactHooks,
      y: WordPressData,
    } = readRuntime();
    var t,
      n,
      r,
      a,
      o,
      i,
      l,
      c,
      u,
      s,
      d,
      m = props.graphData,
      p = props.currency,
      f = props.currency_pos,
      v = props.filterTypeParam,
      h = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getDashboardLoader();
      }, []),
      w =
        null != v
          ? v
          : (0, WordPressData.useSelect)(function (e) {
              return e(StoreModule.default).getDashboardFilter();
            }, []),
      E = DU((0, ReactHooks.useState)({}), 2),
      S = E[0],
      R = E[1],
      x = DU((0, ReactHooks.useState)(null), 2),
      C = (x[0], x[1]);
    function P(e) {
      return /^\d{4}$/.test(e)
        ? 'YYYY'
        : /^\d{4}-\d{2}$/.test(e)
          ? 'YYYY-MM'
          : /^\d{4}-\d{2}-\d{2}$/.test(e)
            ? 'YYYY-MM-DD'
            : 'Invalid format';
    }
    var O = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      k = function (e, t, n) {
        (n.labels.push(e), n.values.push(t));
      },
      j = function (e, t, n, r, a) {
        ((a[e] = a[e] || {
          earning: 0,
          refund: 0,
          net: 0,
        }),
          (a[e].earning += t),
          (a[e].refund += n),
          (a[e].net += r));
      },
      A = function (e, t, n) {
        if ('YYYY-MM' === t) {
          var r = DU(e.split('-'), 2),
            a = r[0],
            o = r[1];
          return 'yearly' === n
            ? ''.concat(O[parseInt(o, 10) - 1])
            : ''.concat(O[parseInt(o, 10) - 1], ' ').concat(a);
        }
        if ('YYYY-MM-DD' === t) {
          if ('monthly' === n) return parseInt(e.split('-')[2], 10);
          if ('custom' === n) {
            var i = DU(e.split('-'), 3),
              l = (i[0], i[1]),
              c = i[2];
            return ''.concat(O[parseInt(l, 10) - 1], ' ').concat(parseInt(c, 10));
          }
        }
        return 'YYYY' === t ? e : null;
      };
    (0, ReactHooks.useEffect)(
      function () {
        m &&
          R(
            (function (e, t) {
              var n = {
                  labels: [],
                  values: [],
                },
                r = {
                  labels: [],
                  values: [],
                },
                a = {
                  labels: [],
                  values: [],
                };
              if ('object' !== NU(e) || Array.isArray(e) || null === e)
                return (
                  console.warn('Invalid input: Expected a non-empty object.'),
                  {
                    revenue: n,
                    refund: r,
                    net_amount: a,
                  }
                );
              switch (t) {
                case 'yearly':
                  (C(null),
                    (function (e, t, n, r) {
                      for (var a = 0, o = Object.entries(e); a < o.length; a++) {
                        var i = DU(o[a], 2),
                          l = i[0],
                          c = i[1],
                          u = P(l);
                        if ('Invalid format' !== u) {
                          var s = A(l, u, 'yearly');
                          if (s) {
                            var d = c.earning,
                              m = void 0 === d ? 0 : d,
                              p = c.refund,
                              f = void 0 === p ? 0 : p,
                              v = c.net,
                              g = void 0 === v ? 0 : v;
                            (k(s, m, t), k(s, f, n), k(s, g, r));
                          } else console.warn('Invalid label for key '.concat(l));
                        } else console.warn('Invalid date format for key '.concat(l));
                      }
                    })(e, n, r, a));
                  break;
                case 'monthly':
                  !(function (e, t, n, r) {
                    for (var a = {}, o = 0, i = Object.entries(e); o < i.length; o++) {
                      var l = DU(i[o], 2),
                        c = l[0],
                        u = l[1],
                        s = P(c);
                      if ('Invalid format' !== s) {
                        var d = A(c, s, 'monthly');
                        if (d) {
                          var m = parseInt(c.split('-')[1], 10) - 1;
                          if ((C(O[m]), 'object' !== NU(u) || Array.isArray(u) || null === u))
                            console.warn(
                              'Invalid value for key '.concat(c, ': Expected an object.'),
                            );
                          else {
                            var p = u.earning,
                              f = void 0 === p ? 0 : p,
                              v = u.refund,
                              g = void 0 === v ? 0 : v,
                              h = u.net;
                            j(d, f, g, void 0 === h ? 0 : h, a);
                          }
                        } else console.warn('Invalid label for key '.concat(c));
                      } else console.warn('Invalid date format for key '.concat(c));
                    }
                    for (var y = 0, b = Object.entries(a); y < b.length; y++) {
                      var _ = DU(b[y], 2),
                        w = _[0],
                        E = _[1],
                        S = E.earning,
                        R = E.refund,
                        x = E.net;
                      (k(w, S, t), k(w, R, n), k(w, x, r));
                    }
                  })(e, n, r, a);
                  break;
                case 'custom':
                  (C(null),
                    (function (e, t, n, r) {
                      for (var a = {}, o = 0, i = Object.entries(e); o < i.length; o++) {
                        var l = DU(i[o], 2),
                          c = l[0],
                          u = l[1],
                          s = P(c);
                        if ('Invalid format' !== s) {
                          var d = A(c, s, 'custom');
                          if (d) {
                            if ('object' !== NU(u) || Array.isArray(u) || null === u)
                              console.warn(
                                'Invalid value for key '.concat(c, ': Expected an object.'),
                              );
                            else {
                              var m = u.earning,
                                p = void 0 === m ? 0 : m,
                                f = u.refund,
                                v = void 0 === f ? 0 : f,
                                g = u.net;
                              j(d, p, v, void 0 === g ? 0 : g, a);
                            }
                          } else console.warn('Invalid label for key '.concat(c));
                        } else console.warn('Invalid date format for key '.concat(c));
                      }
                      for (var h = 0, y = Object.keys(a); h < y.length; h++) {
                        var b = y[h];
                        (k(b, a[b].earning, t), k(b, a[b].refund, n), k(b, a[b].net, r));
                      }
                    })(e, n, r, a));
                  break;
                default:
                  console.warn('Unsupported filter type: '.concat(t));
              }
              return {
                revenue: n,
                refund: r,
                net_amount: a,
              };
            })(m, null == w ? void 0 : w.type),
          );
      },
      [m],
    );
    var M = {
        first: (0, I18n.__)('Income', 'ohmylms'),
        second: (0, I18n.__)('Refund', 'ohmylms'),
        third: (0, I18n.__)('Net Income', 'ohmylms'),
      },
      I =
        null != S && null !== (t = S.revenue) && void 0 !== t && t.values
          ? Math.max.apply(
              Math,
              FU(null == S || null === (n = S.revenue) || void 0 === n ? void 0 : n.values),
            )
          : 0,
      F =
        null != S && null !== (r = S.refund) && void 0 !== r && r.values
          ? Math.max.apply(
              Math,
              FU(null == S || null === (a = S.refund) || void 0 === a ? void 0 : a.values),
            )
          : 0,
      N =
        null != S && null !== (o = S.net_amount) && void 0 !== o && o.values
          ? Math.max.apply(
              Math,
              FU(null == S || null === (i = S.net_amount) || void 0 === i ? void 0 : i.values),
            )
          : 0,
      D = Math.max(I, F, N) + 10,
      W = Math.ceil(D / 5);
    return (
      <React.Fragment>
        {h ? (
          <React.Fragment>
            <_.A
              paragraph={{
                rows: 6,
              }}
              active={!0}
              style={{
                padding: '20px',
              }}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <ReactHooks.Suspense fallback={<div>{'Loading chart...'}</div>}>
              <BU
                labels={
                  (null == S || null === (l = S.refund) || void 0 === l ? void 0 : l.labels) || []
                }
                revenueData={
                  (null == S || null === (c = S.revenue) || void 0 === c ? void 0 : c.values) || []
                }
                refundData={
                  (null == S || null === (u = S.refund) || void 0 === u ? void 0 : u.values) || []
                }
                netAmountData={
                  (null == S || null === (s = S.net_amount) || void 0 === s ? void 0 : s.values) ||
                  []
                }
                stepSize={W}
                maxStep={D + W}
                tooltipTitle={M}
                currency={
                  p ||
                  (null === (d = window) ||
                  void 0 === d ||
                  null === (d = d.ohmylms_params) ||
                  void 0 === d
                    ? void 0
                    : d.currency)
                }
                currencyPos={f || 'left'}
              />
            </ReactHooks.Suspense>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };
}
