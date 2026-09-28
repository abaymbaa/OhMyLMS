/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAiChapterList(readRuntime) {
  return function AiChapterList(props) {
    const {
      Eae,
      I: Controls,
      React,
      b: I18n,
      g: ReactHooks,
      wae: MemoAiChapterItem,
    } = readRuntime();
    var t = props.data,
      n = void 0 === t ? [] : t,
      r = props.onChapterActive,
      a = (function (e, t) {
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
              if ('string' == typeof e) return Eae(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Eae(e, t)
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
      })((0, ReactHooks.useState)(0), 2),
      o = a[0],
      i = a[1],
      l = function (e, t) {
        (r(e), i(t));
      };
    return (
      <React.Fragment>
        <Controls.CardWP
          fullHeight={!0}
          isBorderless={!0}
          variant={'secondary'}
          padding={'8px'}
          className={'omlms-ai-chapters-wrapper'}
          borderRadius={'0'}
          style={{
            overflow: 'auto',
            maxHeight: 'calc(100vh - 500px)',
          }}
        >
          <Controls.FlexWP align={'flex-start'} justify={'flex-start'} direction={'column'} gap={2}>
            <Controls.TextWP
              as={'p'}
              size={11}
              color={'#7A8B9A'}
              wight={500}
              style={{
                textTransform: 'uppercase',
                padding: '8px',
              }}
            >
              {(0, I18n.__)('Chapter names', 'ohmylms')}
            </Controls.TextWP>
            {null == n
              ? void 0
              : n.map(function (e, t) {
                  return (
                    <MemoAiChapterItem key={t} index={t} data={e} onClick={l} isActive={o === t} />
                  );
                })}
          </Controls.FlexWP>
        </Controls.CardWP>
      </React.Fragment>
    );
  };
}
