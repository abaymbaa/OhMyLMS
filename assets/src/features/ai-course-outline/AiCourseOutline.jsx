/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAiCourseOutline(readRuntime) {
  return function AiCourseOutline(props) {
    const {
      I: Controls,
      Rae: MemoAiChapterList,
      React,
      bae: MemoAiLessonList,
      g: ReactHooks,
      xae,
    } = readRuntime();
    var t = props.data,
      n = (function (e, t) {
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
                  for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
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
              if ('string' == typeof e) return xae(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? xae(e, t)
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
      })((0, ReactHooks.useState)([]), 2),
      r = n[0],
      a = n[1];
    return (
      (0, ReactHooks.useEffect)(
        function () {
          var e;
          null != t &&
            t.length &&
            a(null == t || null === (e = t[0]) || void 0 === e ? void 0 : e.content);
        },
        [t],
      ),
      (
        <React.Fragment>
          <Controls.FlexWP align={'stretch'} className={'omlms-ai-course-content-wrapper'}>
            <Controls.FlexItemWP flex={3}>
              <MemoAiChapterList
                data={t}
                onChapterActive={function (e) {
                  a(null == e ? void 0 : e.content);
                }}
              />
            </Controls.FlexItemWP>
            <Controls.FlexItemWP flex={5}>
              <MemoAiLessonList data={r} />
            </Controls.FlexItemWP>
          </Controls.FlexWP>
        </React.Fragment>
      )
    );
  };
}
