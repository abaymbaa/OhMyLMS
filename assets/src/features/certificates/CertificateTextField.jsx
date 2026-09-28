/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createCertificateTextField(readRuntime) {
  return function CertificateTextField(props) {
    const {
      EL,
      I: Controls,
      L: Entitlements,
      Mt,
      PL,
      React,
      SL,
      b: I18n,
      g: ReactHooks,
      xL
    } = readRuntime();
    var t = (0, Entitlements.useIsPro)(),
      n = props.label,
      r = props.value,
      a = props.color,
      o = props.onValueChange,
      i = props.onColorChange,
      l = props.placeholder,
      c = (props.presets, props.isItProFeature),
      u = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
              if (-1 !== t.indexOf(r)) continue;
              n[r] = e[r];
            }
            return n;
          }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) n = o[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        }
        return a;
      }(props, EL),
      s = function (e, t) {
        return function (e) {
          if (Array.isArray(e)) return e;
        }(e) || function (e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
            var r,
              a,
              o,
              i,
              l = [],
              c = !0,
              u = !1;
            try {
              if (o = (n = n.call(e)).next, 0 === t) {
                if (Object(n) !== n) return;
                c = !1;
              } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
            } catch (e) {
              u = !0, a = e;
            } finally {
              try {
                if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return;
              } finally {
                if (u) throw a;
              }
            }
            return l;
          }
        }(e, t) || function (e, t) {
          if (e) {
            if ("string" == typeof e) return PL(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? PL(e, t) : void 0;
          }
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((0, ReactHooks.useState)(!1), 2);
    return s[0], s[1], <React.Fragment><Controls.FlexWP direction={"column"} gap={"2"}><Controls.HeadingWP level={4}><Controls.FlexWP gap={1} justify={"start"}>{n}{c && !t && <React.Fragment><Controls.TooltipWP title={(0, I18n.__)("Enable PRO plugin for access this feature.", "ohmylms")}><Mt.A /></Controls.TooltipWP></React.Fragment>}</Controls.FlexWP></Controls.HeadingWP><Controls.FlexWP justify={"flex-start"} gap={"2"}><Controls.FlexItemWP isBlock={!0}><Controls.InputWP {...SL({
              value: r,
              onChange: function (e) {
                return o(e);
              },
              type: "text",
              placeholder: l,
              style: xL(xL({}, null == u ? void 0 : u.style), {}, {
                width: "100%"
              }),
              disabled: c && !t
            }, u)} /></Controls.FlexItemWP><Controls.FlexItemWP><Controls.ColorPickerWP initialColor={a} onChange={function (e) {
              i(null == e ? void 0 : e.hex);
            }} disabled={c && !t} /></Controls.FlexItemWP></Controls.FlexWP></Controls.FlexWP></React.Fragment>;
  };
}
