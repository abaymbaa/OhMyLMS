/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createDeleteLearningItem(readRuntime) {
  return function DeleteLearningItem(props) {
    const { Bn, I: Controls, Ie, Ln, React, Vn, b: I18n, g: ReactHooks, zn } = readRuntime();
    var label = props.label,
      n = void 0 === label ? (0, I18n.__)('Delete', 'ohmylms') : label,
      className = props.className,
      a = void 0 === className ? '' : className,
      onDelete = props.onDelete,
      onCancel = props.onCancel,
      onClick = props.onClick,
      alertTitle = props.alertTitle,
      u = void 0 === alertTitle ? (0, I18n.__)('Delete', 'ohmylms') : alertTitle,
      alertDescription = props.alertDescription,
      d =
        void 0 === alertDescription
          ? (0, I18n.__)('Are you sure you want to delete this?', 'ohmylms')
          : alertDescription,
      m = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (-1 !== t.indexOf(r)) continue;
                n[r] = e[r];
              }
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            ((n = o[r]),
              -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      })(props, Bn),
      p = (function (e, t) {
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
              if ('string' == typeof e) return Vn(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Vn(e, t)
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
      })((0, ReactHooks.useState)(!1), 2),
      f = p[0],
      v = p[1],
      y = (0, ReactHooks.useCallback)(
        function () {
          (v(!0), onClick && onClick());
        },
        [onClick],
      ),
      _ = (0, ReactHooks.useCallback)(
        function () {
          (v(!1), onDelete && onDelete());
        },
        [onDelete],
      ),
      w = (0, ReactHooks.useCallback)(
        function () {
          (v(!1), onCancel && onCancel());
        },
        [onCancel],
      );
    return (
      <React.Fragment>
        <Controls.ButtonWP
          {...Ln(
            {
              variant: 'text',
              title: n,
              className: 'ohmylms-outline-delete-button '.concat(a),
              icon: React.createElement(zn, null),
              onClick: y,
            },
            m,
          )}
        >
          {n}
        </Controls.ButtonWP>
        {f && (
          <Ie
            title={u}
            description={d}
            onClose={w}
            onDelete={_}
            isOpen={f}
            className={'ohmylms-outline-delete-alert'}
            isDelete={!0}
          />
        )}
      </React.Fragment>
    );
  };
}
