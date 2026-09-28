/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCommunityList(readRuntime) {
  return function CommunityList() {
    const {
      B9,
      Br,
      D9,
      Ge,
      I: Controls,
      L9,
      Mt,
      N9: CommunityEditor,
      Ne,
      React,
      Rt,
      SB,
      T: StoreModule,
      V,
      _,
      b: I18n,
      df: EmptyIcon,
      g: ReactHooks,
      l,
      q,
      sN: TableModule,
      uf: EmptyState,
      y: WordPressData,
    } = readRuntime();
    var e = (0, WordPressData.useDispatch)(StoreModule.default),
      t = L9(
        (0, ReactHooks.useState)([
          {
            label: (0, I18n.__)('Total members', 'ohmylms'),
            value: '-',
            tooltip: '',
            progression_percent: '',
            progression_text: '',
            progression_delay: '',
            progression_state: '',
            card_class: '',
            iconColor: 'var(--omlms-primary-color)',
          },
          {
            label: (0, I18n.__)('Total posts', 'ohmylms'),
            value: '-',
            tooltip: '',
            progression_percent: '',
            progression_text: '',
            progression_delay: '',
            progression_state: '',
            card_class: '',
            iconColor: '#ff4955',
          },
          {
            label: (0, I18n.__)('Engagement rate', 'ohmylms'),
            value: '-',
            tooltip: '',
            progression_percent: '',
            progression_text: '',
            progression_delay: '',
            progression_state: '',
            card_class: '',
            iconColor: '',
          },
        ]),
        2,
      ),
      n = t[0],
      r = t[1],
      a = L9((0, ReactHooks.useState)(!0), 2),
      o = a[0],
      i = a[1],
      c = L9((0, ReactHooks.useState)(!1), 2),
      u = c[0],
      s = c[1],
      d = L9((0, ReactHooks.useState)(!1), 2),
      m = d[0],
      p = d[1],
      f = L9((0, ReactHooks.useState)(!1), 2),
      v = f[0],
      w = f[1],
      E = (0, ReactHooks.useCallback)(
        B9(
          D9().m(function t() {
            var n;
            return D9().w(
              function (t) {
                for (;;)
                  switch ((t.p = t.n)) {
                    case 0:
                      return (s(!0), (t.p = 1), (t.n = 2), e.fetchCommunities({}));
                    case 2:
                      t.n = 4;
                      break;
                    case 3:
                      ((t.p = 3), (n = t.v), console.error('Error in fetchData:', n));
                    case 4:
                      return ((t.p = 4), s(!1), t.f(4));
                    case 5:
                      return t.a(2);
                  }
              },
              t,
              null,
              [[1, 3, 4, 5]],
            );
          }),
        ),
        [e],
      ),
      S = (0, WordPressData.useSelect)(function (e) {
        try {
          var t, n;
          return (
            (null === (t = (n = e(StoreModule.default)).getCommunities) || void 0 === t
              ? void 0
              : t.call(n)) || []
          );
        } catch (e) {
          return [];
        }
      }, []),
      R = (function () {
        var t = B9(
          D9().m(function t(n) {
            var r, a;
            return D9().w(
              function (t) {
                for (;;)
                  switch ((t.p = t.n)) {
                    case 0:
                      if (!v && n) {
                        t.n = 1;
                        break;
                      }
                      return t.a(2);
                    case 1:
                      return (
                        (t.p = 1),
                        w(!0),
                        (t.n = 2),
                        l()({
                          path: '/creatorlms/v1/community/spaces/'.concat(n),
                          method: 'GET',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        })
                      );
                    case 2:
                      ((r = t.v), e.setCommunity(r), (t.n = 4));
                      break;
                    case 3:
                      ((t.p = 3), (a = t.v), console.error(a));
                    case 4:
                      return ((t.p = 4), w(!1), t.f(4));
                    case 5:
                      return t.a(2);
                  }
              },
              t,
              null,
              [[1, 3, 4, 5]],
            );
          }),
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      x = function (e) {
        (p(!0), R(null == e ? void 0 : e.id));
      },
      C = [
        {
          title: (0, I18n.__)('Space Name', 'ohmylms'),
          dataIndex: 'name',
          key: 'name',
          render: function (e, t) {
            var n;
            return (
              <React.Fragment>
                <Controls.FlexWP
                  align={'start'}
                  justify={'start'}
                  gap={4}
                  onClick={function () {
                    return x(t);
                  }}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  {null != t && t.image ? (
                    <Controls.AvatarWP shape={'square'} src={t.image} size={100} />
                  ) : (
                    <span>
                      <SB />
                    </span>
                  )}
                  <Controls.TextWP
                    as={'span'}
                    color={'#000d25'}
                    size={16}
                    numberOfLines={2}
                    truncate={!0}
                  >
                    {Ge(
                      null !== (n = null == t ? void 0 : t.name) && void 0 !== n
                        ? n
                        : null == t
                          ? void 0
                          : t.title,
                    )}
                  </Controls.TextWP>
                </Controls.FlexWP>
              </React.Fragment>
            );
          },
        },
        {
          title: (0, I18n.__)('Members', 'ohmylms'),
          dataIndex: 'members',
          key: 'members',
          render: function (e) {
            return <Controls.TextWP>{null != e ? e : '-'}</Controls.TextWP>;
          },
        },
        {
          title: (0, I18n.__)('Posts', 'ohmylms'),
          dataIndex: 'posts',
          key: 'posts',
          render: function (e) {
            return <Controls.TextWP>{null != e ? e : '-'}</Controls.TextWP>;
          },
        },
        {
          title: (0, I18n.__)('Engagement', 'ohmylms'),
          dataIndex: 'engagement',
          key: 'engagement',
          render: function (e) {
            return <Controls.TextWP>{null != e ? e : '-'}</Controls.TextWP>;
          },
        },
        {
          title: (0, I18n.__)('Last Activity', 'ohmylms'),
          dataIndex: 'last_activity',
          key: 'last_activity',
          render: function (e) {
            return <Controls.TextWP>{null != e ? e : '-'}</Controls.TextWP>;
          },
        },
        {
          title: (0, I18n.__)('Actions', 'ohmylms'),
          key: 'actions',
          render: function (e, t) {
            return (
              <Controls.DropdownMenuWP
                controls={[
                  {
                    title: (0, I18n.__)('View', 'ohmylms'),
                    onClick: function () {
                      return ((e = null == t ? void 0 : t.url), void window.open(e, '_blank'));
                      var e;
                    },
                    icon: <Br />,
                  },
                  {
                    title: (0, I18n.__)('Settings', 'ohmylms'),
                    onClick: function () {
                      return x(t);
                    },
                    icon: <Rt width={'16'} />,
                  },
                ]}
                icon={<q.Icon icon={Ne.A} />}
              />
            );
          },
        },
      ];
    return (
      (0, ReactHooks.useEffect)(function () {
        l()({
          path: '/creatorlms/v1/communities/analytics',
          method: 'GET',
        }).then(function (e) {
          var t, n, a, o, l, c;
          (r([
            {
              label: (0, I18n.__)('Total members', 'ohmylms'),
              tooltip: (0, I18n.__)('Total members in the community', 'ohmylms'),
              value:
                null !== (t = null === (n = e.members) || void 0 === n ? void 0 : n.total) &&
                void 0 !== t
                  ? t
                  : '-',
              progression_percent: '',
              progression_text: '',
              progression_delay: '',
              progression_state: 'success',
              card_class: 'card-earning',
              iconColor: 'var(--omlms-primary-color)',
            },
            {
              label: (0, I18n.__)('Total posts', 'ohmylms'),
              tooltip: (0, I18n.__)('Total posts in the community', 'ohmylms'),
              value:
                null !== (a = null === (o = e.posts) || void 0 === o ? void 0 : o.total) &&
                void 0 !== a
                  ? a
                  : '-',
              progression_percent: '',
              progression_text: '',
              progression_delay: '',
              progression_state: 'success',
              card_class: 'card-refund',
              iconColor: '#ff4955',
            },
            {
              label: (0, I18n.__)('Engagement rate', 'ohmylms'),
              tooltip: (0, I18n.__)('Engagement rate in the community', 'ohmylms'),
              value:
                null !== (l = null === (c = e.engagement) || void 0 === c ? void 0 : c.total) &&
                void 0 !== l
                  ? l
                  : '-',
              progression_percent: '',
              progression_text: '',
              progression_delay: '',
              progression_state: 'success',
              card_class: 'card-net-income',
              iconColor: '',
            },
          ]),
            i(!1));
        });
      }, []),
      (0, ReactHooks.useEffect)(function () {
        var e = !0;
        return (
          e && E(),
          function () {
            e = !1;
          }
        );
      }, []),
      (
        <React.Fragment>
          <Controls.CardWP isBorderless={!0}>
            <Controls.SpacerWP padding={5}>
              <Controls.CardWP variant={'secondary'} isBorderless={!0}>
                <Controls.SpacerWP marginBottom={0} paddingX={7.5} paddingY={6}>
                  <Controls.FlexWP
                    gap={4}
                    align={'stretch'}
                    className={'omlms-overview-cards-wrapper'}
                  >
                    <Controls.FlexItemWP
                      style={{
                        flex: '9',
                      }}
                      className={'omlms-overview-left-cards'}
                    >
                      <Controls.FlexWP
                        direction={'column'}
                        align={'space-between'}
                        justify={'space-between'}
                      >
                        <Controls.CardWP isBorderless={!0}>
                          <Controls.SpacerWP marginBottom={0} padding={6}>
                            <Controls.FlexWP wrap={!0} gap={4}>
                              {n.map(function (e, t) {
                                var n = (null == e ? void 0 : e.iconColor) || '#33A646';
                                return (
                                  <Controls.FlexBlockWP key={e.label + t}>
                                    <Controls.CardWP
                                      isBorderless={!0}
                                      variant={'secondary'}
                                      key={e.label}
                                    >
                                      <Controls.SpacerWP paddingX={4} paddingY={5} marginBottom={0}>
                                        {o ? (
                                          <_.A rows={3} active={!0} />
                                        ) : (
                                          <React.Fragment>
                                            <Controls.BadgeWP
                                              isBorderLess={!0}
                                              isRounded={!0}
                                              padding={'7px'}
                                            >
                                              <svg
                                                width={'13'}
                                                height={'12'}
                                                fill={'none'}
                                                viewBox={'0 0 13 12'}
                                                xmlns={'http://www.w3.org/2000/svg'}
                                              >
                                                <path
                                                  fill={n}
                                                  fillRule={'evenodd'}
                                                  d={
                                                    'M4.982 2.253c-.069-.285-.523-.285-.591 0L3.669 5.26c-.179.746-.917 1.28-1.772 1.28H1.06C.728 6.54.457 6.297.457 6c0-.298.27-.54.604-.54h.836c.285 0 .53-.177.59-.426l.722-3.007c.341-1.422 2.613-1.422 2.954 0l1.853 7.72c.068.284.522.284.59 0l.722-3.007c.18-.747.918-1.28 1.773-1.28h.835c.334 0 .604.242.604.54 0 .298-.27.54-.604.54h-.835c-.285 0-.532.177-.591.426l-.722 3.007c-.341 1.422-2.613 1.422-2.954 0l-1.852-7.72z'
                                                  }
                                                  clipRule={'evenodd'}
                                                />
                                              </svg>
                                            </Controls.BadgeWP>
                                            <Controls.SpacerWP marginBottom={5} />
                                            <Controls.FlexWP
                                              direction={'column'}
                                              gap={2}
                                              className={'content-area'}
                                            >
                                              <Controls.FlexWP
                                                align={'center'}
                                                gap={2}
                                                justify={'flex-start'}
                                              >
                                                <Controls.TextWP
                                                  as={'span'}
                                                  size={'14'}
                                                  variant={'muted'}
                                                >
                                                  {e.label}
                                                </Controls.TextWP>
                                                {e.tooltip && (
                                                  <V.A
                                                    text={e.tooltip}
                                                    className={'omlms-tooltip'}
                                                    placement={'top'}
                                                  >
                                                    <React.Fragment>
                                                      <Mt.A />
                                                    </React.Fragment>
                                                  </V.A>
                                                )}
                                              </Controls.FlexWP>
                                              <span
                                                style={{
                                                  fontSize: '36px',
                                                  fontWeight: '500',
                                                  lineHeight: 1,
                                                }}
                                              >
                                                {e.value}
                                              </span>
                                            </Controls.FlexWP>
                                          </React.Fragment>
                                        )}
                                      </Controls.SpacerWP>
                                    </Controls.CardWP>
                                  </Controls.FlexBlockWP>
                                );
                              })}
                            </Controls.FlexWP>
                          </Controls.SpacerWP>
                        </Controls.CardWP>
                      </Controls.FlexWP>
                    </Controls.FlexItemWP>
                  </Controls.FlexWP>
                </Controls.SpacerWP>
              </Controls.CardWP>
              <Controls.SpacerWP marginTop={6} marginBottom={0} />
              <Controls.CardWP variant={'secondary'} isBorderless={!0}>
                <Controls.SpacerWP marginBottom={0} paddingX={7.5} paddingY={6}>
                  <Controls.FlexWP direction={'column'} gap={4}>
                    <Controls.FlexItemWP>
                      <Controls.TextWP as={'h2'} size={'20'} weight={'700'}>
                        {(0, I18n.__)('Community Spaces', 'ohmylms')}
                      </Controls.TextWP>
                      <Controls.TextWP as={'div'} size={'14'} variant={'muted'}>
                        {(0, I18n.__)(
                          'Manage your course communities and track engagement',
                          'ohmylms',
                        )}
                      </Controls.TextWP>
                    </Controls.FlexItemWP>
                    <Controls.CardWP isBorderless={!0} padding={'24px'}>
                      <TableModule.A
                        columns={C}
                        dataSource={S}
                        loading={u}
                        rowKey={'id'}
                        style={{
                          marginTop: 0,
                        }}
                        locale={{
                          emptyText: (
                            <EmptyState
                              icon={<EmptyIcon />}
                              title={(0, I18n.__)('No community spaces yet!', 'ohmylms')}
                              description={(0, I18n.__)(
                                'Navigate to your course editor and create a community space.',
                                'ohmylms',
                              )}
                            />
                          ),
                        }}
                      />
                    </Controls.CardWP>
                  </Controls.FlexWP>
                </Controls.SpacerWP>
              </Controls.CardWP>
            </Controls.SpacerWP>
          </Controls.CardWP>
          {m && <CommunityEditor isOpen={m} setIsOpen={p} isLoading={v} onSuccess={E} />}
        </React.Fragment>
      )
    );
  };
}
