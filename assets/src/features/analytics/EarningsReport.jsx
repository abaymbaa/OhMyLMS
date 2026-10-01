/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createEarningsReport(readRuntime) {
  return function EarningsReport() {
    const {
      $U,
      Aq,
      Fq,
      Ge,
      I: Controls,
      L: Entitlements,
      LU: EarningsChart,
      Mq,
      Nr: BackButton,
      Pq,
      React,
      Rq: TransactionHistory,
      Tq,
      ZU: AnalyticsDateFilter,
      _,
      b: I18n,
      dc,
      df: EmptyIcon,
      f: Router,
      g: ReactHooks,
      kq,
      l,
      lN,
      mG: EarningsSummaryCards,
      sn,
      uf: EmptyState,
      wq,
      xq,
    } = readRuntime();
    var e,
      t,
      n,
      r,
      a,
      o,
      i = Tq((0, ReactHooks.useState)(!0), 2),
      c = i[0],
      u = i[1],
      s = Tq((0, ReactHooks.useState)(!1), 2),
      d = s[0],
      m = s[1],
      p = Tq((0, ReactHooks.useState)(!1), 2),
      v = p[0],
      y = p[1],
      w = Tq((0, ReactHooks.useState)('last_30_days'), 2),
      E = w[0],
      S = w[1],
      R = Tq((0, ReactHooks.useState)({}), 2),
      x = R[0],
      C = R[1],
      P = Tq((0, ReactHooks.useState)({}), 2),
      O = P[0],
      k = P[1],
      j = Tq((0, ReactHooks.useState)([]), 2),
      A = j[0],
      M = j[1],
      T = Tq((0, ReactHooks.useState)(0), 2),
      F = T[0],
      N = T[1],
      D = Tq((0, ReactHooks.useState)('all'), 2),
      W = D[0],
      z = D[1],
      B = Tq((0, ReactHooks.useState)({}), 2),
      V = B[0],
      H = B[1],
      G = Tq((0, ReactHooks.useState)('30 days'), 2),
      U = G[0],
      q = G[1],
      Y = (0, Router.Zp)(),
      Q = true,
      Z = [
        {
          label: (0, I18n.__)('Income', 'ohmylms'),
          tooltip: (0, I18n.__)(
            'Total income '.concat(U ? 'within ' + U : 'of all time'),
            'ohmylms',
          ),
          value: (
            <Fq
              currency={V.currency || '$'}
              currency_pos={V.currency_pos || 'left'}
              price={Number((null == x ? void 0 : x.total_revenue) || '0')}
            />
          ),
          progression_percent:
            Math.abs(
              (null == x || null === (e = x.growth) || void 0 === e ? void 0 : e.total_revenue) ||
                0,
            ) + '%',
          progression_text: 'within last',
          progression_delay: '30day',
          progression_state:
            Number(
              null == x || null === (t = x.growth) || void 0 === t ? void 0 : t.total_revenue,
            ) > -1
              ? 'success'
              : 'danger',
          card_class: 'card-earning',
          iconColor: '#6e42d3',
        },
        {
          label: (0, I18n.__)('Refund', 'ohmylms'),
          tooltip: (0, I18n.__)(
            'Total refund '.concat(U ? 'within ' + U : 'of all time', '.'),
            'ohmylms',
          ),
          value: (
            <Fq
              currency={V.currency || '$'}
              currency_pos={V.currency_pos || 'left'}
              price={Number((null == x ? void 0 : x.total_refund) || '0')}
            />
          ),
          progression_percent:
            Math.abs(
              (null == x || null === (n = x.growth) || void 0 === n ? void 0 : n.total_refund) || 0,
            ) + '%',
          progression_text: 'within last',
          progression_delay: '30day',
          progression_state:
            Number(null == x || null === (r = x.growth) || void 0 === r ? void 0 : r.total_refund) >
            0
              ? 'danger'
              : 'success',
          card_class: 'card-refund',
          iconColor: '#ff4955',
        },
        {
          label: (0, I18n.__)('Net Income', 'ohmylms'),
          tooltip: (0, I18n.__)(
            'Total net income '.concat(U ? 'within ' + U : 'of all time', '.'),
            'ohmylms',
          ),
          value: (
            <Fq
              currency={V.currency || '$'}
              currency_pos={V.currency_pos || 'left'}
              price={Number((null == x ? void 0 : x.net_amount) || '0')}
            />
          ),
          progression_percent:
            Math.abs(
              (null == x || null === (a = x.growth) || void 0 === a ? void 0 : a.net_amount) || 0,
            ) + '%',
          progression_text: 'within last',
          progression_delay: '10day',
          progression_state:
            Number(null == x || null === (o = x.growth) || void 0 === o ? void 0 : o.net_amount) >
            -1
              ? 'success'
              : 'danger',
          card_class: 'card-net-income',
        },
      ],
      $ = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          render: function (e) {
            if (!e) return 'N/A';
            try {
              return (0, wq.format)('M d, Y', new Date(e));
            } catch (e) {
              return 'Invalid Date';
            }
          },
          sorter: function (e, t) {
            var n, r;
            return (
              sn()(
                null === (n = e['date_created-date']) || void 0 === n ? void 0 : n.date,
              ).valueOf() -
              sn()(
                null === (r = t['date_created-date']) || void 0 === r ? void 0 : r.date,
              ).valueOf()
            );
          },
          showSorterTooltip: {
            target: 'sorter-icon',
          },
        },
        {
          title: 'Order',
          dataIndex: 'order_id',
          key: 'order_id',
          render: function (e, t) {
            return (
              <span>
                {'#'}
                {null == t ? void 0 : t.order_id}
              </span>
            );
          },
          sorter: function (e, t) {
            return e.order_id - t.order_id;
          },
          showSorterTooltip: {
            target: 'sorter-icon',
          },
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
          className: 'ohmylms-transaction-history-type',
          render: function (e, t) {
            return <React.Fragment>{e || 'N/A'}</React.Fragment>;
          },
        },
        {
          title: 'Details',
          dataIndex: 'order_items',
          key: 'order_items',
          className: 'ohmylms-transaction-history-details',
          render: function (e, t) {
            var n;
            return (null === (n = t.order_items) || void 0 === n ? void 0 : n.length) > 0 ? (
              <React.Fragment>
                {t.order_items.map(function (e, t) {
                  return (
                    <span key={t}>{Ge(null == e ? void 0 : e.course_name) || 'Untitled'}</span>
                  );
                })}
              </React.Fragment>
            ) : (
              '-'
            );
          },
        },
        {
          title: 'Earnings',
          dataIndex: 'order_total',
          key: 'order_total',
          render: function (e, t) {
            return (
              <Fq
                currency={null == V ? void 0 : V.currency}
                currency_pos={null == V ? void 0 : V.currency_pos}
                price={Number(e)}
              />
            );
          },
          sorter: function (e, t) {
            return e.order_total - t.order_total;
          },
          showSorterTooltip: {
            target: 'sorter-icon',
          },
        },
      ],
      K = $.map(function (e) {
        return Aq(
          Aq({}, e),
          {},
          {
            render: function () {
              return <_.A active={!0} paragraph={!1} />;
            },
          },
        );
      }),
      J =
        ((0, I18n.__)('CSV', 'ohmylms'),
        (0, I18n.__)('PDF', 'ohmylms'),
        (0, ReactHooks.useCallback)(
          (function () {
            var e,
              t =
                ((e = Pq().m(function e(t) {
                  var n,
                    r,
                    a,
                    o,
                    i,
                    c,
                    u,
                    s,
                    d = arguments;
                  return Pq().w(
                    function (e) {
                      for (;;)
                        switch ((e.p = e.n)) {
                          case 0:
                            {
                              n = d.length > 1 && void 0 !== d[1] ? d[1] : 'last_30_days';
                              r = d.length > 2 && void 0 !== d[2] ? d[2] : '';
                              a = d.length > 3 && void 0 !== d[3] ? d[3] : 'all';
                              o = d.length > 4 && void 0 !== d[4] ? d[4] : 'date';
                              i = d.length > 5 && void 0 !== d[5] ? d[5] : 'DESC';
                              {
                                e.n = 1;
                                break;
                              }
                            }
                            return (
                              C(null === $U.$C || void 0 === $U.$C ? void 0 : $U.$C.earning_graph),
                              k(
                                null === $U.$C || void 0 === $U.$C
                                  ? void 0
                                  : $U.$C.order_by_country,
                              ),
                              M(null === $U.$C || void 0 === $U.$C ? void 0 : $U.$C.transactions),
                              N(
                                null === $U.$C || void 0 === $U.$C
                                  ? void 0
                                  : $U.$C.count_unchecked_orders,
                              ),
                              H({
                                currency:
                                  null === $U.$C || void 0 === $U.$C ? void 0 : $U.$C.currency,
                                currency_pos:
                                  null === $U.$C || void 0 === $U.$C ? void 0 : $U.$C.currency_pos,
                              }),
                              t(!1),
                              e.a(2)
                            );
                          case 1:
                            return (
                              t(!0),
                              (e.p = 2),
                              (c = {
                                filter: n,
                                data_type: a,
                                type: r,
                                order: o,
                                sort_by: i,
                              }),
                              xq(n) &&
                                ((c.filter = 'custom'),
                                (c.start_date = sn()(n[0]).format('YYYY-MM-DD')),
                                (c.end_date = sn()(n[1]).format('YYYY-MM-DD'))),
                              (e.n = 3),
                              l()({
                                path: (0, lN.addQueryArgs)('/ohmylms/v1/analytics/earnings', c),
                                method: 'GET',
                                headers: {
                                  'Content-Type': 'application/json',
                                },
                              })
                            );
                          case 3:
                            ((u = e.v),
                              'all' === a
                                ? (C(null == u ? void 0 : u.earning_graph),
                                  k(null == u ? void 0 : u.order_by_country),
                                  M(null == u ? void 0 : u.transactions),
                                  N(null == u ? void 0 : u.count_unchecked_orders),
                                  H({
                                    currency: null == u ? void 0 : u.currency,
                                    currency_pos: null == u ? void 0 : u.currency_pos,
                                  }))
                                : 'earning' === a
                                  ? C(null == u ? void 0 : u.earning_graph)
                                  : 'order' === a && M(null == u ? void 0 : u.transactions),
                              (e.n = 5));
                            break;
                          case 4:
                            ((e.p = 4), (s = e.v), console.error('Error fetching data:', s));
                          case 5:
                            return ((e.p = 5), t(!1), e.f(5));
                          case 6:
                            return e.a(2);
                        }
                    },
                    e,
                    null,
                    [[2, 4, 5, 6]],
                  );
                })),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (r, a) {
                    var o = e.apply(t, n);
                    function i(e) {
                      kq(o, r, a, i, l, 'next', e);
                    }
                    function l(e) {
                      kq(o, r, a, i, l, 'throw', e);
                    }
                    i(void 0);
                  });
                });
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          [],
        )),
      X =
        ((0, ReactHooks.useMemo)(function () {
          return [
            {
              value: 'all',
              label: (0, I18n.__)('All Times', 'ohmylms'),
            },
            {
              value: 'last_30_days',
              label: (0, I18n.__)('Last 30 days', 'ohmylms'),
            },
            {
              value: 'current_month',
              label: (0, I18n.__)('Current month', 'ohmylms'),
            },
            {
              value: 'previous_month',
              label: (0, I18n.__)('Previous month', 'ohmylms'),
            },
            {
              value: 'current_year',
              label: (0, I18n.__)('Current year', 'ohmylms'),
            },
            {
              value: 'last_12_months',
              label: (0, I18n.__)('Last 12 months', 'ohmylms'),
            },
          ];
        }, []),
        (0, ReactHooks.useMemo)(function () {
          return [
            {
              label: <span>{(0, I18n.__)('All', 'ohmylms')}</span>,
              value: 'all',
            },
            {
              label: <span>{(0, I18n.__)('Course', 'ohmylms')}</span>,
              value: 'course',
            },
            {
              label: <span>{(0, I18n.__)('Membership', 'ohmylms')}</span>,
              value: 'membership',
            },
          ];
        }, []));
    (0, ReactHooks.useEffect)(function () {
      var e = !0;
      return (
        e && J(u),
        function () {
          e = !1;
        }
      );
    }, []);
    var ee = {
      background: '#6e42d3',
      borderRadius: '2px',
      width: '10px',
      height: '10px',
      display: 'inline-block',
      marginInlineEnd: '15px',
    };
    return (
      <React.Fragment>
        <Controls.SurfaceWP>
          <Controls.ContainerWP>
            <Controls.SpacerWP paddingY={5}>
              <Controls.FlexWP gap={2} align={'center'} justify={'flex-start'}>
                <BackButton
                  onClick={function () {
                    Y('/dashboard');
                  }}
                />
                <Controls.HeadingWP level={'2'} size={20}>
                  {(0, I18n.__)('Earnings Report', 'ohmylms')}
                </Controls.HeadingWP>
              </Controls.FlexWP>
            </Controls.SpacerWP>
            <Controls.CardWP isBorderless={!0} variant={'secondary'}>
              <Controls.SpacerWP padding={7.5} marginBottom={0}>
                <Controls.FlexWP
                  gap={4}
                  align={'stretch'}
                  className={'ohmylms-earning-report-cards-wrapper'}
                >
                  <Controls.FlexItemWP
                    style={{
                      width: 'calc(67% - 8px)',
                    }}
                    className={'ohmylms-earning-report-left-card'}
                  >
                    <Controls.CardWP isBorderless={!0}>
                      <Controls.SpacerWP marginBottom={0} padding={6}>
                        <Controls.FlexWP gap={2} align={'center'} justify={'space-between'}>
                          <Controls.HeadingWP level={3}>
                            {(0, I18n.__)('Earnings', 'ohmylms')}
                          </Controls.HeadingWP>
                          <div className={'ohmylms-dashboard-filter'}>
                            <AnalyticsDateFilter
                              placeholder={(0, I18n.__)('Filter By Days', 'ohmylms')}
                              onChange={function (e) {
                                ('custom_range' !== e && J(m, e, '', 'earning'),
                                  q(
                                    'all' === e
                                      ? null
                                      : 'last_30_days' === e
                                        ? 'last 30 days'
                                        : 'current_month' === e
                                          ? 'current month'
                                          : 'previous_month' === e
                                            ? 'previous month'
                                            : 'current_year' === e
                                              ? 'current year'
                                              : 'last_12_months' === e
                                                ? 'last 12 months'
                                                : 'custom range',
                                  ));
                              }}
                              direction={'start'}
                              onRangeChange={function (e) {
                                J(m, e, '', 'earning');
                              }}
                            />
                          </div>
                        </Controls.FlexWP>
                        <Controls.SpacerWP marginBottom={4} />
                        <Controls.FlexWP gap={4} align={'stretch'}>
                          <EarningsSummaryCards
                            dashboardCardData={Z}
                            dataLoading={d || c}
                            withIn={U}
                          />
                        </Controls.FlexWP>
                      </Controls.SpacerWP>
                      <Controls.SpacerWP marginBottom={0} padding={6}>
                        {c ? (
                          <_.A
                            paragraph={{
                              rows: 3,
                            }}
                            active={!0}
                          />
                        ) : (
                          <React.Fragment>
                            <Controls.SpacerWP
                              marginBottom={4}
                              style={{
                                height: '330px',
                              }}
                            >
                              <EarningsChart
                                currency={null == V ? void 0 : V.currency}
                                currency_pos={null == V ? void 0 : V.currency_pos}
                                graphData={(null == x ? void 0 : x.graph_data) || {}}
                                filterTypeParam={{
                                  type: 'custom',
                                }}
                              />
                            </Controls.SpacerWP>
                            <Controls.FlexWP gap={5} align={'center'} justify={'center'}>
                              <Controls.FlexItemWP style={Mq({}, '--base-color', '#6e42d3')}>
                                <span style={ee} />
                                {(0, I18n.__)('Income', 'ohmylms')}
                              </Controls.FlexItemWP>
                              <Controls.FlexItemWP style={Mq({}, '--base-color', '#FF4955')}>
                                <span
                                  style={Aq(
                                    Aq({}, ee),
                                    {},
                                    {
                                      background: '#FF4955',
                                    },
                                  )}
                                />
                                {(0, I18n.__)('Refund', 'ohmylms')}
                              </Controls.FlexItemWP>
                              <Controls.FlexItemWP style={Mq({}, '--base-color', '#33A646')}>
                                <span
                                  style={Aq(
                                    Aq({}, ee),
                                    {},
                                    {
                                      background: '#33A646',
                                    },
                                  )}
                                />
                                {(0, I18n.__)('Net Income', 'ohmylms')}
                              </Controls.FlexItemWP>
                            </Controls.FlexWP>
                          </React.Fragment>
                        )}
                      </Controls.SpacerWP>
                    </Controls.CardWP>
                  </Controls.FlexItemWP>
                  <Controls.FlexItemWP
                    style={{
                      width: 'calc(33% - 8px)',
                    }}
                    className={'ohmylms-earning-report-right-card'}
                  >
                    <Controls.FlexWP align={'start'} justify={'start'} direction={'column'} gap={4}>
                      <Controls.FlexItemWP fullWidth={!0}>
                        <Controls.CardWP isBorderless={!0} fullWidth={!0} fullHeight={!0}>
                          <Controls.SpacerWP marginBottom={0} padding={6}>
                            <Controls.HeadingWP level={3} size={16}>
                              {(0, I18n.__)('Order report', 'ohmylms')}
                            </Controls.HeadingWP>
                            <Controls.SpacerWP marginBottom={5} marginTop={8}>
                              {c ? (
                                <_.A
                                  paragraph={{
                                    rows: 3,
                                  }}
                                  active={!0}
                                />
                              ) : (
                                <React.Fragment>
                                  <Controls.FlexWP gap={2} align={'center'} justify={'flex-start'}>
                                    <Controls.BadgeWP
                                      variant={'secondary'}
                                      isBorderLess={!0}
                                      isRounded={!0}
                                    >
                                      <svg
                                        width={'24'}
                                        height={'24'}
                                        fill={'none'}
                                        viewBox={'0 0 24 24'}
                                        xmlns={'http://www.w3.org/2000/svg'}
                                      >
                                        <path
                                          fill={'#83BF6E'}
                                          fillRule={'evenodd'}
                                          d={
                                            'M5.586 7l4.293-4.293a3 3 0 014.242 0L18.414 7h2.433a1 1 0 01.99 1.141l-1.469 10.283A3 3 0 0117.398 21H6.602a3 3 0 01-2.97-2.576L2.163 8.141A1 1 0 013.153 7h2.433zm5.707-2.879a1 1 0 011.414 0L15.586 7H8.414l2.879-2.879zM4.306 9l1.306 9.141a1 1 0 00.99.859h10.796a1 1 0 00.99-.859L19.694 9H4.306z'
                                          }
                                          clipRule={'evenodd'}
                                        />
                                        <path
                                          fill={'#83BF6E'}
                                          fillRule={'evenodd'}
                                          d={
                                            'M8 11a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm4 0a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm4 0a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z'
                                          }
                                          clipRule={'evenodd'}
                                        />
                                      </svg>
                                    </Controls.BadgeWP>
                                    {F > 0 ? (
                                      <p>
                                        {(0, I18n.__)('You have', 'ohmylms')}{' '}
                                        <strong>
                                          {' '}
                                          {F} {(0, I18n.__)('unchecked orders', 'ohmylms')}{' '}
                                        </strong>
                                        {' 👀'}
                                      </p>
                                    ) : (
                                      <p>{(0, I18n.__)('You have no new order', 'ohmylms')}</p>
                                    )}
                                  </Controls.FlexWP>
                                </React.Fragment>
                              )}
                            </Controls.SpacerWP>
                            <Controls.ButtonWP
                              variant={'secondary'}
                              onClick={function () {
                                Y('/orders');
                              }}
                            >
                              {(0, I18n.__)('Review Orders', 'ohmylms')}
                            </Controls.ButtonWP>
                          </Controls.SpacerWP>
                        </Controls.CardWP>
                      </Controls.FlexItemWP>
                      <Controls.FlexItemWP flex={'1'} fullWidth={!0}>
                        <Controls.CardWP isBorderless={!0} fullWidth={!0} fullHeight={!0}>
                          <Controls.SpacerWP marginBottom={0} padding={6}>
                            <Controls.HeadingWP level={3} size={16}>
                              {(0, I18n.__)('Earning from top countries', 'ohmylms')}
                            </Controls.HeadingWP>
                            {c ? (
                              <_.A
                                paragraph={{
                                  rows: 3,
                                }}
                                active={!0}
                              />
                            ) : (
                              <React.Fragment>
                                {Object.keys(O).length > 0 ? (
                                  <Controls.SpacerWP marginBottom={0} marginTop={6}>
                                    {Object.entries(O).map(function (e) {
                                      var t = Tq(e, 2),
                                        n = t[0],
                                        r = t[1];
                                      return (
                                        <Controls.SpacerWP key={n} marginBottom={4}>
                                          <Controls.FlexWP
                                            gap={2}
                                            align={'center'}
                                            justify={'space-between'}
                                          >
                                            <Controls.FlexBlockWP>
                                              <Controls.FlexWP
                                                gap={2}
                                                align={'center'}
                                                justify={'flex-start'}
                                              >
                                                <span className={'flag'}>
                                                  {React.createElement(dc, {
                                                    style: {
                                                      diplay: 'block',
                                                    },
                                                  })}
                                                </span>
                                                {n}
                                              </Controls.FlexWP>
                                            </Controls.FlexBlockWP>
                                            <Controls.FlexBlockWP
                                              style={{
                                                textAlign: 'right',
                                              }}
                                            >
                                              <Fq
                                                currency={null == V ? void 0 : V.currency}
                                                currency_pos={null == V ? void 0 : V.currency_pos}
                                                price={Number(r)}
                                              />
                                            </Controls.FlexBlockWP>
                                          </Controls.FlexWP>
                                        </Controls.SpacerWP>
                                      );
                                    })}
                                  </Controls.SpacerWP>
                                ) : (
                                  <React.Fragment>
                                    <EmptyState
                                      icon={<EmptyIcon />}
                                      title={(0, I18n.__)(
                                        'No global earnings to show yet!',
                                        'ohmylms',
                                      )}
                                      description={(0, I18n.__)(
                                        'As learners from around the world purchase your courses, their countries will show up here.',
                                        'ohmylms',
                                      )}
                                    />
                                  </React.Fragment>
                                )}
                              </React.Fragment>
                            )}
                          </Controls.SpacerWP>
                        </Controls.CardWP>
                      </Controls.FlexItemWP>
                    </Controls.FlexWP>
                  </Controls.FlexItemWP>
                </Controls.FlexWP>
                <Controls.SpacerWP marginBottom={4} />
                <Controls.CardWP isBorderless={!0}>
                  <Controls.SpacerWP marginBottom={0} padding={6}>
                    <TransactionHistory
                      handleTypeFilters={function (e) {
                        (S(e), J(y, e, W, 'order'));
                      }}
                      handleOrderTypeFilters={function (e) {
                        (z(e), J(y, E, e, 'order'));
                      }}
                      orderTypeOptions={X}
                      transactionLoading={v}
                      transactionData={A}
                      skeletonColumns={K}
                      columns={$}
                      dataLoading={c}
                      currencyData={V}
                    />
                  </Controls.SpacerWP>
                </Controls.CardWP>
              </Controls.SpacerWP>
            </Controls.CardWP>
          </Controls.ContainerWP>
          <Controls.SpacerWP marginBottom={0} paddingBottom={5} />
        </Controls.SurfaceWP>
      </React.Fragment>
    );
  };
}
