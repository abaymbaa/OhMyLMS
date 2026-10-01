/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createTagsPage(readRuntime) {
  return function TagsPage() {
    const {
      BY,
      Ea,
      Ge,
      HG,
      I: Controls,
      Ie,
      NY,
      Ne,
      React,
      We,
      YG,
      aY,
      b: I18n,
      df,
      g: ReactHooks,
      hN,
      l,
      pG,
      q,
      sN,
      uf,
      xY: TaxonomyModal,
      z: Notifications,
      zY,
    } = readRuntime();
    HG('ohmylms', 'tags');
    var e = (0, Notifications.A)(),
      t = e.openNotificationWithIcon,
      n = e.contextHolder,
      r = BY((0, ReactHooks.useState)([]), 2),
      a = r[0],
      o = r[1],
      i = BY((0, ReactHooks.useState)(!0), 2),
      c = i[0],
      u = i[1],
      s = BY((0, ReactHooks.useState)(''), 2),
      d = s[0],
      m = s[1],
      p = BY((0, ReactHooks.useState)(!1), 2),
      f = p[0],
      v = p[1],
      h = BY((0, ReactHooks.useState)(!1), 2),
      y = h[0],
      _ = h[1],
      w = BY((0, ReactHooks.useState)(null), 2),
      E = w[0],
      S = w[1],
      R = BY((0, ReactHooks.useState)(null), 2),
      x = R[0],
      C = R[1],
      P = BY((0, ReactHooks.useState)(!1), 2),
      O = P[0],
      k = P[1],
      j = BY((0, ReactHooks.useState)(!1), 2),
      A = j[0],
      M = j[1],
      T = BY((0, ReactHooks.useState)([]), 2),
      F = T[0],
      N = T[1],
      D = BY((0, ReactHooks.useState)(null), 2),
      W = (D[0], D[1]),
      B = (0, ReactHooks.useCallback)(
        zY(
          NY().m(function e() {
            var n;
            return NY().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        u(!0),
                        (e.p = 1),
                        (e.n = 2),
                        l()({
                          path: '/ohmylms/v1/tags',
                        })
                      );
                    case 2:
                      ((n = e.v), o(n || []), (e.n = 4));
                      break;
                    case 3:
                      ((e.p = 3), e.v, t('error', (0, I18n.__)('Failed to load tags', 'ohmylms')));
                    case 4:
                      return ((e.p = 4), u(!1), e.f(4));
                    case 5:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 3, 4, 5]],
            );
          }),
        ),
        [],
      );
    (0, ReactHooks.useEffect)(
      function () {
        B();
      },
      [B],
    );
    var L = (0, ReactHooks.useCallback)(function (e) {
        m(e);
      }, []),
      V = (0, ReactHooks.useCallback)(function () {
        (S(null), v(!0));
      }, []),
      H = (0, ReactHooks.useCallback)(function (e) {
        (S(e), v(!0));
      }, []),
      G = (0, ReactHooks.useCallback)(function (e) {
        (C(e), _(!0));
      }, []),
      U = (function () {
        var e = zY(
          NY().m(function e(n) {
            var r;
            return NY().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if ((k(!0), (e.p = 1), !E)) {
                        e.n = 3;
                        break;
                      }
                      return (
                        (e.n = 2),
                        l()({
                          path: '/ohmylms/v1/tags/'.concat(E.term_id),
                          method: 'PUT',
                          data: {
                            name: n.name,
                          },
                        })
                      );
                    case 2:
                      (t('success', (0, I18n.__)('Tag updated successfully', 'ohmylms')),
                        (e.n = 5));
                      break;
                    case 3:
                      return (
                        (e.n = 4),
                        l()({
                          path: '/ohmylms/v1/tags',
                          method: 'POST',
                          data: {
                            name: n.name,
                          },
                        })
                      );
                    case 4:
                      t('success', (0, I18n.__)('Tag created successfully', 'ohmylms'));
                    case 5:
                      (v(!1), S(null), B(), (e.n = 7));
                      break;
                    case 6:
                      ((e.p = 6),
                        (r = e.v),
                        t('error', r.message || (0, I18n.__)('Failed to save tag', 'ohmylms')));
                    case 7:
                      return ((e.p = 7), k(!1), e.f(7));
                    case 8:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 6, 7, 8]],
            );
          }),
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      Y = (function () {
        var e = zY(
          NY().m(function e() {
            var n;
            return NY().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (x || 0 !== F.length) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      if (!A) {
                        e.n = 2;
                        break;
                      }
                      return e.a(2);
                    case 2:
                      if ((M(!0), (e.p = 3), !x)) {
                        e.n = 5;
                        break;
                      }
                      return (
                        (e.n = 4),
                        l()({
                          path: '/ohmylms/v1/tags/'.concat(x.term_id),
                          method: 'DELETE',
                        })
                      );
                    case 4:
                      (t('success', (0, I18n.__)('Tag deleted successfully', 'ohmylms')),
                        (e.n = 7));
                      break;
                    case 5:
                      return (
                        (e.n = 6),
                        l()({
                          path: '/ohmylms/v1/tags/bulk',
                          method: 'DELETE',
                          data: {
                            ids: F,
                          },
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        })
                      );
                    case 6:
                      (t('success', (0, I18n.__)('Tags deleted successfully', 'ohmylms')), N([]));
                    case 7:
                      (_(!1), C(null), B(), (e.n = 9));
                      break;
                    case 8:
                      ((e.p = 8),
                        (n = e.v),
                        t('error', n.message || (0, I18n.__)('Failed to delete tag', 'ohmylms')));
                    case 9:
                      return ((e.p = 9), M(!1), e.f(9));
                    case 10:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[3, 8, 9, 10]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      Q = (0, ReactHooks.useMemo)(
        function () {
          return a.filter(function (e) {
            var t;
            return null == e || null === (t = e.name) || void 0 === t
              ? void 0
              : t.toLowerCase().includes(d.toLowerCase());
          });
        },
        [a, d],
      ),
      Z = (0, ReactHooks.useMemo)(
        function () {
          return {
            selectedRowKeys: F,
            onChange: N,
          };
        },
        [F],
      ),
      $ = (0, ReactHooks.useMemo)(
        function () {
          return {
            label: (0, I18n.__)('Add Tag', 'ohmylms'),
            onClick: V,
          };
        },
        [V],
      ),
      K = (0, ReactHooks.useMemo)(function () {
        return [
          {
            label: (0, I18n.__)('Delete', 'ohmylms'),
            value: 'delete',
            action: function () {
              _(!0);
            },
          },
        ];
      }, []),
      J = [
        {
          title: (0, I18n.__)('ID', 'ohmylms'),
          dataIndex: 'term_id',
          key: 'term_id',
          width: '80px',
          render: function (e) {
            return (
              <Controls.BadgeWP variant={'secondary'} isBorderLess={!0}>
                {e}
              </Controls.BadgeWP>
            );
          },
        },
        {
          title: (0, I18n.__)('Name', 'ohmylms'),
          dataIndex: 'name',
          key: 'name',
          render: function (e) {
            return (
              <span
                style={{
                  fontWeight: 500,
                }}
              >
                {e}
              </span>
            );
          },
        },
        {
          title: (0, I18n.__)('No. of Courses', 'ohmylms'),
          dataIndex: 'count',
          key: 'count',
          width: '150px',
          render: function (e, t) {
            var n;
            return e && 0 !== e ? (
              <Controls.TooltipWP
                text={
                  <div
                    style={{
                      maxWidth: '300px',
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 'bold',
                        marginBottom: '8px',
                      }}
                    >
                      {(0, I18n.__)('Courses:', 'ohmylms')}
                    </div>
                    {null === (n = t.courses) || void 0 === n
                      ? void 0
                      : n.map(function (e) {
                          return (
                            <div
                              key={e.id}
                              style={{
                                padding: '4px 0',
                              }}
                            >
                              {'• '}
                              {Ge(e.title)}
                            </div>
                          );
                        })}
                  </div>
                }
                position={'top'}
              >
                <Controls.BadgeWP variant={'secondary'} isBorderLess={!0}>
                  {e}
                </Controls.BadgeWP>
              </Controls.TooltipWP>
            ) : (
              <Controls.BadgeWP variant={'secondary'} isBorderLess={!0}>
                {'0'}
              </Controls.BadgeWP>
            );
          },
        },
        {
          title: (0, I18n.__)('Actions', 'ohmylms'),
          dataIndex: 'action',
          key: 'action',
          width: '100px',
          render: function (e, t) {
            return (
              <Controls.DropdownMenuWP
                controls={[
                  {
                    title: (0, I18n.__)('Edit', 'ohmylms'),
                    onClick: function () {
                      return H(t);
                    },
                    icon: (
                      <span>
                        <pG.A />
                      </span>
                    ),
                  },
                  {
                    title: (0, I18n.__)('Delete', 'ohmylms'),
                    onClick: function () {
                      return G(t);
                    },
                    icon: <We />,
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
        {n}
        <Controls.ContainerWP>
          <YG title={(0, I18n.__)('Tags', 'ohmylms')} showAddButton={!0} addButtonConfig={$} />
          <Ea isBorderless={!0} minHeight={'calc(100vh - 200px)'}>
            <Controls.SpacerWP padding={5}>
              {F.length > 0
                ? React.createElement(hN, {
                    items: F,
                    setItems: N,
                    bulksActions: K,
                  })
                : React.createElement(aY, {
                    handleSearch: L,
                    showFilterByDays: !1,
                    showFilterByStatus: !1,
                    showFilterByCategory: !1,
                    showTotalItemsCount: !1,
                    searchPlaceholder: (0, I18n.__)('Search tags...', 'ohmylms'),
                  })}
              <sN.A
                rowKey={'term_id'}
                columns={J}
                dataSource={Q || []}
                rowSelection={Z}
                pagination={!1}
                loading={c}
                scroll={{
                  x: 'max-content',
                }}
                onRowMouseEnter={function (e) {
                  return W(null == e ? void 0 : e.term_id);
                }}
                onRowMouseLeave={function () {
                  return W(null);
                }}
                locale={{
                  emptyText: React.createElement(uf, {
                    icon: React.createElement(df, null),
                    title: (0, I18n.__)('No tags yet!', 'ohmylms'),
                    description: (0, I18n.__)(
                      'Create your first tag and it will show up here.',
                      'ohmylms',
                    ),
                    ctaText: (0, I18n.__)('Add Tag', 'ohmylms'),
                    ctaHandler: V,
                  }),
                }}
              />
            </Controls.SpacerWP>
          </Ea>
        </Controls.ContainerWP>
        {f && (
          <TaxonomyModal
            isOpen={f}
            onClose={function () {
              (v(!1), S(null));
            }}
            onSubmit={U}
            title={E ? (0, I18n.__)('Edit Tag', 'ohmylms') : (0, I18n.__)('Add Tag', 'ohmylms')}
            type={'tag'}
            initialData={E}
            isSubmitting={O}
          />
        )}
        {y && (
          <Ie
            isOpen={y}
            onClose={function () {
              (_(!1), C(null));
            }}
            onDelete={Y}
            title={(0, I18n.__)('Delete Tag', 'ohmylms')}
            description={
              (null == x ? void 0 : x.count) > 0
                ? (0, I18n.__)(
                    'This tag is assigned to courses. Deleting it will remove the tag from those courses. Are you sure you want to continue?',
                    'ohmylms',
                  )
                : F.length > 0
                  ? (0, I18n.__)('Are you sure you want to delete the selected tags?', 'ohmylms')
                  : (0, I18n.__)('Are you sure you want to delete this tag?', 'ohmylms')
            }
            actionBtnText={(0, I18n.__)('Delete', 'ohmylms')}
            loading={A}
            isDelete={!0}
          />
        )}
      </React.Fragment>
    );
  };
}
