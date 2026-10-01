/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCommunityCourses(readRuntime) {
  return function CommunityCourses() {
    const {
      C9,
      E9,
      Ea: Card,
      I: Controls,
      R9,
      React,
      T: StoreModule,
      b: I18n,
      b9,
      g: ReactHooks,
      l,
      x9,
      y: WordPressData,
    } = readRuntime();
    var e = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectCommunity();
      }, []),
      setCommunity = (0, WordPressData.useDispatch)(StoreModule.default).setCommunity,
      n = C9((0, ReactHooks.useState)([]), 2),
      r = n[0],
      a = n[1],
      o = C9((0, ReactHooks.useState)(null), 2),
      i = o[0],
      c = o[1],
      u = C9((0, ReactHooks.useState)(!1), 2),
      s = u[0],
      d = u[1],
      m = function (n, r, a) {
        var o = R9({}, e);
        ((o[n] = a ? R9(R9({}, o[n]), {}, x9({}, a, r)) : r), setCommunity(o));
      },
      p = function (e) {
        return e && Array.isArray(e)
          ? e
              .filter(function (e) {
                return 'yes' !== (null == e ? void 0 : e.has_community);
              })
              .map(function (e) {
                return {
                  id: null == e ? void 0 : e.id,
                  name: null == e ? void 0 : e.name,
                  image_src: (null == e ? void 0 : e.image_src) || null,
                  date_created: (null == e ? void 0 : e.date_created) || {},
                };
              })
          : [];
      },
      f = (function () {
        var e = E9(
          b9().m(function e(t) {
            var n, r, o;
            return b9().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        d(!0),
                        (e.n = 1),
                        l()({
                          path: '/ohmylms/v1/courses?search='.concat(t, '&post_status=publish'),
                          method: 'GET',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        })
                      );
                    case 1:
                      if ((r = e.v)) {
                        e.n = 2;
                        break;
                      }
                      r = [];
                    case 2:
                      ((n = p(r)),
                        a(
                          n.map(function (e) {
                            return {
                              label: e.name,
                              value: e.id,
                            };
                          }),
                        ),
                        (e.n = 4));
                      break;
                    case 3:
                      ((e.p = 3), (o = e.v), console.error(o));
                    case 4:
                      return ((e.p = 4), d(!1), e.f(4));
                    case 5:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 3, 4, 5]],
            );
          }),
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      v = (function () {
        var e = E9(
          b9().m(function e(t) {
            var n, r, a;
            return b9().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        (e.n = 1),
                        l()({
                          path: '/ohmylms/v1/courses/'.concat(t),
                          method: 'GET',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        })
                      );
                    case 1:
                      ((n = e.v) &&
                        ((r = {
                          id: n.id,
                          name: n.name,
                        }),
                        c(r)),
                        (e.n = 3));
                      break;
                    case 2:
                      ((e.p = 2), (a = e.v), console.error('Error fetching course by ID:', a));
                    case 3:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 2]],
            );
          }),
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      h = (0, ReactHooks.useCallback)(
        function (e) {
          if (e) {
            var t = {
              id: e.value,
              name: e.label,
            };
            (c(t), m('parent_id', e.value));
          } else (c(null), m('parent_id', null));
        },
        [e],
      ),
      _ = (0, ReactHooks.useCallback)(function (e) {
        f(e);
      }, []);
    return (
      (0, ReactHooks.useEffect)(function () {
        f('');
      }, []),
      (0, ReactHooks.useEffect)(
        function () {
          null != e && e.parent_id && !i && v(e.parent_id);
        },
        [null == e ? void 0 : e.parent_id, i],
      ),
      (
        <Controls.SpacerWP marginTop={4}>
          <Card isBorderless={!0} variant={'secondary'}>
            <Controls.SpacerWP padding={6} margin={0}>
              <Controls.HeadingWP level={4}>{(0, I18n.__)('Course', 'ohmylms')}</Controls.HeadingWP>
              <Controls.SpacerWP />
              <Controls.AdvancedSelectWP
                isClearable={!0}
                closeMenuOnSelect={!0}
                value={
                  i
                    ? {
                        label: i.name,
                        value: i.id,
                      }
                    : null
                }
                options={r}
                onChange={h}
                isDisabled={s}
                onSearch={_}
                placeholder={(0, I18n.__)('Select a course...', 'ohmylms')}
              />
            </Controls.SpacerWP>
          </Card>
        </Controls.SpacerWP>
      )
    );
  };
}
