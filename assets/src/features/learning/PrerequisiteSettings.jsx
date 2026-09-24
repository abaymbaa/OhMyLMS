/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createPrerequisiteSettings(readRuntime) {
  return function PrerequisiteSettings(props) {
    const {
      Ge,
      I: Controls,
      Kt,
      React,
      an,
      b: I18n,
      g: ReactHooks,
      nn,
      on,
      tn
    } = readRuntime();
    var title = props.title,
      tooltip = props.tooltip,
      onChange = props.onChange,
      isChecked = props.isChecked,
      o = (props.childTitle, props.childPlaceholder, props.childNotFoundMessage, props.isMultiple, props.onSearch),
      onChildChange = props.onChildChange,
      defaultValue = props.defaultValue,
      showDivider = props.showDivider,
      u = void 0 === showDivider || showDivider,
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
            if ("string" == typeof e) return on(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? on(e, t) : void 0;
          }
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((0, ReactHooks.useState)((0, I18n.__)("Please enter 3 or more characters...", "ohmylms")), 2),
      d = s[0],
      m = s[1],
      p = function () {
        var e,
          t = (e = nn().m(function e(t) {
            var n, r, a, i;
            return nn().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!(t.length >= 3)) {
                    e.n = 4;
                    break;
                  }
                  return e.n = 1, o(t);
                case 1:
                  if (0 !== (null == (r = e.v) || null === (n = r.data) || void 0 === n ? void 0 : n.length)) {
                    e.n = 2;
                    break;
                  }
                  return m((0, I18n.__)("No Content Found! Try to search another one", "ohmylms")), e.a(2, []);
                case 2:
                  return m((0, I18n.__)("Please enter 3 or more characters...", "ohmylms")), i = null == r || null === (a = r.data) || void 0 === a ? void 0 : a.map(function (e) {
                    return {
                      label: Ge(null == e ? void 0 : e.label),
                      value: null == e ? void 0 : e.value
                    };
                  }), e.a(2, i || []);
                case 3:
                  e.n = 5;
                  break;
                case 4:
                  return e.a(2, []);
                case 5:
                  return e.a(2);
              }
            }, e);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                an(o, r, a, i, l, "next", e);
              }
              function l(e) {
                an(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function (e) {
          return t.apply(this, arguments);
        };
      }();
    return <React.Fragment><Kt title={title} tooltip={tooltip} customClass={"omlms-lesson-settings-prerequisites-button"} onChange={onChange} isChecked={isChecked} showDivider={u} conditionalChild={<React.Fragment><Controls.SpacerWP marginBottom={3} /><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP marginBottom={0} padding={4}>{React.createElement(tn, {
              description: (0, I18n.__)("Members can access this content if they have completed all of the following content:", "ohmylms"),
              spacerMarginBottom: 0,
              value: defaultValue,
              onChange: function (e) {
                onChildChange(e);
              },
              cacheOptions: !0,
              loadOptions: p,
              noOptionsMessage: function () {
                return d;
              },
              closeMenuOnSelect: !1,
              padding: 0,
              direction: "column",
              gap: 1,
              flexItemWidth: "100%"
            })}</Controls.SpacerWP></Controls.CardWP></React.Fragment>} /></React.Fragment>;
  };
}
