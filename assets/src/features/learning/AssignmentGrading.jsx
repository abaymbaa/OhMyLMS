/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAssignmentGrading(readRuntime) {
  return function AssignmentGrading() {
    const {
      HG,
      I: Controls,
      React,
      T: StoreModule,
      X$: AssignmentGradeForm,
      b: I18n,
      cK,
      dK,
      f: Router,
      g: ReactHooks,
      l,
      lK: AssignmentResultHeader,
      mK,
      rK: AssignmentSubmission,
      y: WordPressData,
      z: Notifications,
    } = readRuntime();
    HG('ohmylms', 'assignments');
    var e = (0, WordPressData.useDispatch)(StoreModule.default),
      t = mK((0, ReactHooks.useState)([]), 2),
      n = t[0],
      r = t[1],
      a = mK((0, ReactHooks.useState)({}), 2),
      o = a[0],
      i = a[1],
      c = mK((0, ReactHooks.useState)(!0), 2),
      u = c[0],
      s = c[1],
      d = ((0, Router.Zp)(), (0, Router.g)()),
      m = d.id,
      assignmentId = d.assignmentId,
      v = mK((0, ReactHooks.useState)((null == n ? void 0 : n.score) || 0), 2),
      h = v[0],
      _ = v[1],
      w = mK((0, ReactHooks.useState)((null == n ? void 0 : n.note) || ''), 2),
      E = w[0],
      S = w[1],
      R = (0, Notifications.A)(),
      openNotificationWithIcon = R.openNotificationWithIcon,
      contextHolder = R.contextHolder,
      P = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      O = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []);
    ((0, ReactHooks.useEffect)(function () {
      var e = (function () {
        var e = dK(
          cK().m(function e() {
            var t, n, a;
            return cK().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        s(!0),
                        (e.n = 1),
                        l()({
                          path: '/ohmylms/v1/assignment/'
                            .concat(m, '/report/')
                            .concat(assignmentId),
                          method: 'GET',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        })
                      );
                    case 1:
                      if ((n = e.v)) {
                        e.n = 2;
                        break;
                      }
                      n = [];
                    case 2:
                      (r(null == (t = n) ? void 0 : t.report[0]),
                        i(null == t ? void 0 : t.additional_data),
                        (e.n = 4));
                      break;
                    case 3:
                      ((e.p = 3), (a = e.v), console.error(a));
                    case 4:
                      return ((e.p = 4), s(!1), e.f(4));
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
        return function () {
          return e.apply(this, arguments);
        };
      })();
      e();
    }, []),
      (0, ReactHooks.useEffect)(
        function () {
          !u && P && openNotificationWithIcon(O, P);
        },
        [P],
      ));
    var k = (function () {
        var t = dK(
          cK().m(function t() {
            var a, c, u, d;
            return cK().w(
              function (t) {
                for (;;)
                  switch ((t.p = t.n)) {
                    case 0:
                      return (
                        (t.p = 0),
                        (c = [
                          {
                            id:
                              null == n || null === (a = n.submissions[0]) || void 0 === a
                                ? void 0
                                : a.id,
                            score: Number(h),
                            note: E,
                            status: (null == o ? void 0 : o.pass_marks) <= h ? 'passed' : 'failed',
                          },
                        ]),
                        (t.n = 1),
                        l()({
                          path: '/ohmylms/v1/assignment/'
                            .concat(m, '/report/')
                            .concat(assignmentId),
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(c),
                        })
                      );
                    case 1:
                      ((u = t.v),
                        r(null == u ? void 0 : u.report[0]),
                        i(null == u ? void 0 : u.additional_data),
                        e.showNotification(
                          (0, I18n.__)('Grade Upgraded Successfully', 'ohmylms'),
                          'success',
                        ),
                        (t.n = 3));
                      break;
                    case 2:
                      ((t.p = 2),
                        (d = t.v),
                        console.error(d),
                        e.showNotification(
                          (0, I18n.__)('Something went wrong', 'ohmylms'),
                          'error',
                        ));
                    case 3:
                      return ((t.p = 3), s(!1), t.f(3));
                    case 4:
                      return t.a(2);
                  }
              },
              t,
              null,
              [[0, 2, 3, 4]],
            );
          }),
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      j = (null == n ? void 0 : n.submissions) || [];
    return (
      (0, ReactHooks.useEffect)(
        function () {
          var e, t, r;
          (null == n || null === (e = n.submissions) || void 0 === e ? void 0 : e.length) > 0 &&
            (_(null == n || null === (t = n.submissions[0]) || void 0 === t ? void 0 : t.score),
            S(null == n || null === (r = n.submissions[0]) || void 0 === r ? void 0 : r.note));
        },
        [n],
      ),
      (
        <React.Fragment>
          {contextHolder}
          <Controls.ContainerWP>
            <Controls.SpacerWP marginY={5}>
              <AssignmentResultHeader data={n} submissions={j} handleUpgradeGrade={k} />
              <Controls.SpacerWP marginTop={8}>
                {u ? (
                  <Controls.SkeletonWP active={!0} rows={10} />
                ) : (
                  <React.Fragment>
                    <Controls.FlexWP
                      gap={8}
                      justify={'space-between'}
                      align={'start'}
                      style={{
                        height: '100%',
                      }}
                    >
                      <Controls.FlexItemWP flex={5}>
                        <Controls.FlexWP
                          direction={'column'}
                          size={'middle'}
                          style={{
                            height: '100%',
                          }}
                          items={'flex-start'}
                        >
                          {n.submissions.map(function (e) {
                            return (
                              <AssignmentSubmission key={e.id} additionData={o} submission={e} />
                            );
                          })}
                        </Controls.FlexWP>
                      </Controls.FlexItemWP>
                      <Controls.FlexItemWP flex={3}>
                        <AssignmentGradeForm
                          student={n}
                          additionData={o}
                          setScore={_}
                          setNote={S}
                          note={E}
                          score={h}
                        />
                      </Controls.FlexItemWP>
                    </Controls.FlexWP>
                  </React.Fragment>
                )}
              </Controls.SpacerWP>
            </Controls.SpacerWP>
          </Controls.ContainerWP>
        </React.Fragment>
      )
    );
  };
}
