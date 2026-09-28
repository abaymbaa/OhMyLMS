/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCourseSlug(readRuntime) {
  return function CourseSlug(props) {
    const { I: Controls, Mz, React, b: I18n, g: ReactHooks } = readRuntime();
    var slug = props.slug,
      handleSlugChange = props.handleSlugChange,
      r = (function (e, t) {
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
              if ('string' == typeof e) return Mz(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Mz(e, t)
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
      })((0, ReactHooks.useState)(''), 2),
      a = r[0],
      o = r[1];
    return (
      <React.Fragment>
        <Controls.FlexWP justify={'space-between'} align={'flex-start'}>
          <Controls.FlexItemWP
            style={{
              flex: '5',
            }}
          >
            <Controls.HeadingWP level={4}>{(0, I18n.__)('Slug', 'ohmylms')}</Controls.HeadingWP>
            <Controls.SpacerWP marginBottom={1} />
            <Controls.TextWP>
              {(0, I18n.__)(
                'The slug is all lowercase and contains only letters, numbers, and hyphens.',
                'ohmylms',
              )}
            </Controls.TextWP>
          </Controls.FlexItemWP>
          <Controls.FlexItemWP
            style={{
              flex: '3',
            }}
          >
            <Controls.InputWP
              className={'omlms-course-settings-slug-input'}
              defaultValue={slug}
              onChange={function (e) {
                !(function (e) {
                  (e.trim() ? o('') : o((0, I18n.__)('Course slug cannot be empty', 'ohmylms')),
                    handleSlugChange(e));
                })(e.replace(/[^a-zA-Z0-9-]/g, ''));
              }}
              placeholder={(0, I18n.__)('Enter course slug', 'ohmylms')}
              status={a ? 'error' : ''}
              maxLength={200}
              onKeyDown={function (e) {
                ' ' === e.key && e.preventDefault();
              }}
            />
            {a && (
              <div
                className={'omlms-input-error'}
                style={{
                  color: 'red',
                  fontSize: '12px',
                  marginTop: '4px',
                }}
              >
                {a}
              </div>
            )}
          </Controls.FlexItemWP>
        </Controls.FlexWP>
      </React.Fragment>
    );
  };
}
