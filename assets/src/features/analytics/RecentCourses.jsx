/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createRecentCourses(readRuntime) {
  return function RecentCourses(props) {
    const {
      Br,
      I: Controls,
      Ne,
      React,
      T: StoreModule,
      YH: Price,
      b: I18n,
      bG,
      df: EmptyIcon,
      f: Router,
      g: ReactHooks,
      pG,
      q,
      sN: TableModule,
      sn,
      uf: EmptyState,
      v,
      y: WordPressData,
      yG: CourseListItem,
    } = readRuntime();
    var t = props.popularCourses,
      n = props.dataLoading,
      r = props.currency,
      a = props.currency_pos,
      o = props.handleAddCourse,
      i =
        ((0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).selectCourses();
        }, []),
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
                if ('string' == typeof e) return bG(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? bG(e, t)
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
        })((0, ReactHooks.useState)(null), 2)),
      l = i[0],
      c = i[1],
      u = (0, Router.Zp)(),
      s = [
        {
          title: 'Course Details',
          dataIndex: 'courseDetails',
          key: 'courseDetails',
          width: '380px',
          render: function (e, t) {
            var n = l === t.id;
            return <CourseListItem course={t} isHover={n} />;
          },
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          render: function (e) {
            return (
              <Controls.BadgeWP variant={'secondary'} isBorderLess={!0}>
                {sn()(e).format('MMMM DD, YYYY') || '-'}
              </Controls.BadgeWP>
            );
          },
        },
        {
          title: (
            <React.Fragment>
              {(0, I18n.__)('Students ', 'ohmylms')}
              <Controls.TextWP as={'em'} size={'12'} variant={'muted'}>
                {(0, I18n.__)('last 30 days', 'ohmylms')}
              </Controls.TextWP>
            </React.Fragment>
          ),
          dataIndex: 'total_enrollment',
          key: 'total_enrollment',
          render: function (e, t) {
            return (
              <React.Fragment>
                {n && (
                  <Controls.SkeletonWP
                    paragraph={{
                      rows: 1,
                    }}
                    active={!0}
                  />
                )}
                <Controls.BadgeWP variant={'secondary'} isBorderLess={!0}>
                  <v.Link to={'/courses/'.concat(null == t ? void 0 : t.id, '/students')}>
                    {(null == t ? void 0 : t.total_enrolled_students) || 0}{' '}
                  </v.Link>
                </Controls.BadgeWP>
              </React.Fragment>
            );
          },
        },
        {
          title: (
            <React.Fragment>
              {(0, I18n.__)('Total Sales ', 'ohmylms')}
              <Controls.TextWP as={'em'} size={'12'} variant={'muted'}>
                {(0, I18n.__)('last 30 days', 'ohmylms')}
              </Controls.TextWP>
            </React.Fragment>
          ),
          dataIndex: 'total_sale',
          key: 'total_sale',
          render: function (e, t) {
            return (
              <React.Fragment>
                {n && (
                  <Controls.SkeletonWP
                    paragraph={{
                      rows: 1,
                    }}
                    active={!0}
                  />
                )}
                <Controls.FlexWP justify={'flex-start'} align={'center'} gap={3}>
                  <Controls.BadgeWP variant={'secondary'} isBorderLess={!0}>
                    {(null == t ? void 0 : t.total_sales_count) || 0}
                  </Controls.BadgeWP>
                  <span
                    className={'sales-increase '.concat(
                      Number(null == t ? void 0 : t.sales_growth_rate) < 0 ? 'decrease' : '',
                    )}
                    style={{
                      fontSize: '12px',
                      color: '#33A646',
                    }}
                  >
                    <svg
                      width={'12'}
                      height={'12'}
                      fill={'none'}
                      viewBox={'0 0 12 14'}
                      xmlns={'http://www.w3.org/2000/svg'}
                    >
                      <path
                        stroke={'currentColor'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                        strokeWidth={'2'}
                        d={'M1 6l5-5 5 5'}
                      />
                      <path
                        stroke={'#33A646'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                        d={'M6 13V1'}
                      />
                    </svg>
                    {' '}
                    {Math.abs(null == t ? void 0 : t.sales_growth_rate)}
                    {'%'}
                  </span>
                </Controls.FlexWP>
              </React.Fragment>
            );
          },
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          render: function (e, t) {
            return 'free' !== (null == t ? void 0 : t.price) ? (
              <Controls.BadgeWP variant={'secondary'} isBorderLess={!0}>
                <Price
                  currency={r || '$'}
                  currency_pos={a || 'left'}
                  price={Number((null == t ? void 0 : t.price) || '0')}
                />
              </Controls.BadgeWP>
            ) : (
              <Controls.BadgeWP variant={'secondary'} isBorderLess={!0}>
                {(0, I18n.__)('Free', 'ohmylms')}
              </Controls.BadgeWP>
            );
          },
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
          render: function (e, t) {
            return (
              <Controls.DropdownMenuWP
                controls={[
                  {
                    title: (0, I18n.__)('View', 'ohmylms'),
                    onClick: function () {
                      return window.open(null == t ? void 0 : t.url, '_blank');
                    },
                    icon: <Br />,
                  },
                  {
                    title: (0, I18n.__)('Edit', 'ohmylms'),
                    onClick: function () {
                      return u('/course-edit/'.concat(null == t ? void 0 : t.id));
                    },
                    icon: (
                      <span>
                        <pG.A />
                      </span>
                    ),
                  },
                ]}
                icon={<q.Icon icon={Ne.A} />}
              />
            );
          },
        },
      ];
    return (
      <React.Fragment>
        <TableModule.A
          rowKey={'id'}
          columns={s}
          dataSource={t || []}
          pagination={!1}
          loading={n}
          scroll={{
            x: 'max-content',
          }}
          onRowMouseEnter={function (e) {
            return c(null == e ? void 0 : e.id);
          }}
          onRowMouseLeave={function () {
            return c(null);
          }}
          locale={{
            emptyText: (
              <EmptyState
                icon={<EmptyIcon />}
                title={(0, I18n.__)('No courses yet!', 'ohmylms')}
                description={(0, I18n.__)(
                  'Start building your first course and it’ll show up here as soon as you hit publish.',
                  'ohmylms',
                )}
                ctaText={(0, I18n.__)('Add Course', 'ohmylms')}
                ctaHandler={o}
              />
            ),
          }}
        />
      </React.Fragment>
    );
  };
}
