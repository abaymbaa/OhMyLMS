/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCertificatePreview(readRuntime) {
  return function CertificatePreview(props) {
    const {
      GL,
      I: Controls,
      React,
      T: StoreModule,
      UL,
      g: ReactHooks,
      y: WordPressData,
    } = readRuntime();
    var t,
      n = props.certificateRef,
      r = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectCertificate();
      }, []),
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
              if ('string' == typeof e) return UL(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? UL(e, t)
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
      })((0, ReactHooks.useState)(1), 2),
      o = a[0],
      i = a[1];
    return (
      (0, ReactHooks.useEffect)(
        function () {
          var e = function () {
            var e = null == n ? void 0 : n.current,
              t = null == e ? void 0 : e.parentElement;
            if (e && t) {
              var r = t.clientWidth / e.scrollWidth - 0.07;
              i(Math.min(1, r));
            }
          };
          return (
            e(),
            window.addEventListener('resize', e),
            function () {
              window.removeEventListener('resize', e);
            }
          );
        },
        [n],
      ),
      (
        <Controls.SpacerWP padding={4}>
          <Controls.FlexWP align={'center'} justify={'center'}>
            <div
              ref={n}
              style={{
                transform: 'scale('.concat(o, ')'),
                transformOrigin: 'top',
              }}
            >
              {(null == r || null === (t = r.contents) || void 0 === t ? void 0 : t.elements).map(
                function (e, t) {
                  return <React.Fragment key={t}>{GL(e, t.toString())}</React.Fragment>;
                },
              )}
            </div>
          </Controls.FlexWP>
        </Controls.SpacerWP>
      )
    );
  };
}
