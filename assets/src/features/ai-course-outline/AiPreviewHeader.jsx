/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAiPreviewHeader(readRuntime) {
  return function AiPreviewHeader(props) {
    const { I: Controls, Nr, React, dae, g: ReactHooks } = readRuntime();
    var t = props.onClose,
      n = props.onPaginationChange,
      r = props.showPagination,
      a = props.totalItems,
      o = props.isLoading,
      i = (function (e, t) {
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
              if ('string' == typeof e) return dae(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? dae(e, t)
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
      })((0, ReactHooks.useState)(a - 1), 2),
      l = i[0],
      c = i[1];
    return (
      <Controls.FlexWP
        justify={'space-between'}
        align={'center'}
        className={'omlms-ai-course-preview-modal-header'}
      >
        <Nr
          onClick={function () {
            t && 'function' == typeof t && t();
          }}
          iconOnly={!0}
          style={{
            background: 'transparent',
            padding: '12px',
            color: '#7A8B9A',
          }}
          disabled={o}
        />
        {r && (
          <Controls.FlexWP align={'center'} gap={3} justify={'center'}>
            {Array.from({
              length: a,
            }).map(function (e, t) {
              return (
                <Controls.ButtonWP
                  className={'omlms-ai-course-pagination-btn '.concat(l === t ? 'active' : '')}
                  onClick={function () {
                    return (function (e) {
                      (c(e), n && 'function' == typeof n && n(e));
                    })(t);
                  }}
                  disabled={o}
                >
                  {t + 1}
                </Controls.ButtonWP>
              );
            })}
          </Controls.FlexWP>
        )}
        {!r && (
          <div
            style={{
              flexGrow: 1,
            }}
          />
        )}
      </Controls.FlexWP>
    );
  };
}
