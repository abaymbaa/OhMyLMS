/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCourseCohortSettings(readRuntime) {
  return function CourseCohortSettings() {
    const {
      I: Controls,
      React,
      T: StoreModule,
      gH,
      pH,
      vH,
      wH,
      y: WordPressData,
      yH,
    } = readRuntime();
    var e = (0, WordPressData.useDispatch)(StoreModule.default),
      t = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourse();
      }, []),
      n =
        Array.isArray(null == t ? void 0 : t.cohort) && t.cohort.length > 0
          ? t.cohort
          : [
              {
                start_date: '',
                end_date: '',
                enrollment_deadline: '',
                has_capacity: !1,
                capacity: '',
              },
            ],
      r = n[0],
      a = (null == r ? void 0 : r.start_date) || '',
      o = (null == r ? void 0 : r.end_date) || '',
      i = (null == r ? void 0 : r.enrollment_deadline) || '',
      l = (null == r ? void 0 : r.has_capacity) || !1,
      c = (null == r ? void 0 : r.capacity) || '';
    return (
      <React.Fragment>
        <Controls.SpacerWP marginBottom={0} paddingY={6}>
          {React.createElement(pH, {
            onChange: function (a, o) {
              var i = wH(
                wH({}, r),
                {},
                {
                  end_date: o,
                  start_date: a,
                },
              );
              e.setCourse(
                wH(
                  wH({}, t),
                  {},
                  {
                    cohort: [i].concat(yH(n.slice(1))),
                  },
                ),
              );
            },
            startDate: a,
            endDate: o,
          })}
          <Controls.SpacerWP marginBottom={6} />
          <Controls.CardWP isBorderless={!0}>
            <Controls.SpacerWP marginBottom={0} padding={5}>
              {React.createElement(vH, {
                date: i,
                onChange: function (a) {
                  var o = wH(
                    wH({}, r),
                    {},
                    {
                      enrollment_deadline: a,
                    },
                  );
                  e.setCourse(
                    wH(
                      wH({}, t),
                      {},
                      {
                        cohort: [o].concat(yH(n.slice(1))),
                      },
                    ),
                  );
                },
                startDate: a,
              })}
            </Controls.SpacerWP>
          </Controls.CardWP>
          <Controls.SpacerWP marginBottom={6} />
          <Controls.CardWP isBorderless={!0}>
            <Controls.SpacerWP marginBottom={0} padding={5}>
              {React.createElement(gH, {
                onEnable: function (a) {
                  var o = wH(
                    wH({}, r),
                    {},
                    {
                      has_capacity: a,
                    },
                  );
                  e.setCourse(
                    wH(
                      wH({}, t),
                      {},
                      {
                        cohort: [o].concat(yH(n.slice(1))),
                      },
                    ),
                  );
                },
                onChange: function (a) {
                  var o = wH(
                    wH({}, r),
                    {},
                    {
                      capacity: isNaN(a) ? 0 : a,
                    },
                  );
                  e.setCourse(
                    wH(
                      wH({}, t),
                      {},
                      {
                        cohort: [o].concat(yH(n.slice(1))),
                      },
                    ),
                  );
                },
                capacity: c,
                hasCapacity: l,
              })}
            </Controls.SpacerWP>
          </Controls.CardWP>
        </Controls.SpacerWP>
      </React.Fragment>
    );
  };
}
