/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createTransactionHistory(readRuntime) {
  return function TransactionHistory(props) {
    const {
      Eq,
      I: Controls,
      L: Entitlements,
      React,
      ZU: AnalyticsDateFilter,
      b: I18n,
      df: EmptyIcon,
      g: ReactHooks,
      sN: TableModule,
      uf: EmptyState,
      vn,
    } = readRuntime();
    true;
    var t = props.handleTypeFilters,
      n = props.handleOrderTypeFilters,
      r = props.orderTypeOptions,
      a = props.transactionLoading,
      o = props.transactionData,
      i = props.skeletonColumns,
      l = props.columns,
      c = props.dataLoading,
      u =
        (props.currencyData,
        (function (e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
              if (null != n) {
                var r,
                  a,
                  o,
                  i,
                  l = [],
                  c = !0,
                  u = !1;
                try {
                  if (((o = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    c = !1;
                  } else
                    for (
                      ;
                      !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t);
                      c = !0
                    );
                } catch (e) {
                  ((u = !0), (a = e));
                } finally {
                  try {
                    if (!c && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                  } finally {
                    if (u) throw a;
                  }
                }
                return l;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return Eq(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? Eq(e, t)
                      : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            })()
          );
        })((0, ReactHooks.useState)(!0), 2)),
      s =
        (u[0],
        u[1],
        o.reduce(function (e, t) {
          return e + t.order_total;
        }, 0),
        (0, ReactHooks.useCallback)(function (e) {
          'custom_range' !== e && t(e);
        }, []));
    return (
      <React.Fragment>
        <Controls.HeadingWP level={3} size={16}>
          {(0, I18n.__)('Transaction history', 'ohmylms')}
        </Controls.HeadingWP>
        <Controls.SpacerWP marginBottom={4} />
        <Controls.FlexWP gap={2} align={'center'} justify={'flex-start'}>
          <Controls.FlexItemWP>
            <AnalyticsDateFilter
              placeholder={(0, I18n.__)('Filter By Days', 'ohmylms')}
              onChange={s}
              onRangeChange={t}
            />
          </Controls.FlexItemWP>
          <Controls.FlexItemWP>
            <vn.A placeholder={'Order Type'} onChange={n} options={r} defaultValue={'all'} />
          </Controls.FlexItemWP>
        </Controls.FlexWP>
        <Controls.SpacerWP marginBottom={4} />
        <TableModule.A
          rowKey={'order_id'}
          columns={a || c ? i : l}
          dataSource={o}
          locale={{
            emptyText: (
              <EmptyState
                icon={<EmptyIcon />}
                title={(0, I18n.__)('Your transaction history is waiting to be filled!', 'ohmylms')}
                description={(0, I18n.__)(
                  'Your course sales and payment records will appear here once transactions occur.',
                  'ohmylms',
                )}
              />
            ),
          }}
        />
      </React.Fragment>
    );
  };
}
