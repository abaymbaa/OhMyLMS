/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createCustomerProfile(readRuntime) {
  return function CustomerProfile(props) {
    const {
      I: Controls,
      React,
      b: I18n,
      g: ReactHooks,
      xQ
    } = readRuntime();
    var t = props.student_name,
      n = props.student_email,
      r = props.student_id,
      a = props.student_image,
      o = function (e, t) {
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
            if ("string" == typeof e) return xQ(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xQ(e, t) : void 0;
          }
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((0, ReactHooks.useState)(!0), 2),
      i = o[0],
      l = o[1];
    return <React.Fragment><Controls.FlexWP gap={2} justify={"space-between"} align={"center"}><Controls.HeadingWP level={4} size={18} weight={500} color={"#000D25"}>{(0, I18n.__)("Customer Profile", "ohmylms")}</Controls.HeadingWP><Controls.ButtonWP size={"small"} onClick={function () {
          return l(!i);
        }}><svg style={{
            transform: i ? "rotate(0deg)" : "rotate(180deg)"
          }} width={"12"} height={"6"} fill={"none"} viewBox={"0 0 12 6"} xmlns={"http://www.w3.org/2000/svg"}><path fill={"#000D25"} d={"M11.5 4.4L6 0 .5 4.4l.9 1.2L6 2l4.5 3.6 1-1.2z"} /></svg></Controls.ButtonWP></Controls.FlexWP>{i && <React.Fragment><Controls.SpacerWP marginTop={6} marginBottom={0} /><Controls.FlexWP gap={2} justify={"space-between"} align={"center"} className={"customer-profile-avater"}><Controls.FlexItemWP style={{
            width: "calc(100% - 128px)"
          }}><Controls.FlexWP gap={5} align={"center"} justify={"flex-start"}><Controls.AvatarWP src={a} size={48} shape={"circle"} /><Controls.FlexItemWP style={{
                width: "calc(100% - 68px)"
              }}><Controls.TextWP as={"p"} size={14} weight={600} color={"#000D25"} style={{
                  wordWrap: "break-word"
                }}>{t}</Controls.TextWP><Controls.ButtonWP href={"mailto:".concat(n)} variant={"link"} size={12} weight={500} color={"#7A8B9A"} style={{
                  textDecoration: "underline"
                }}>{n}</Controls.ButtonWP></Controls.FlexItemWP></Controls.FlexWP></Controls.FlexItemWP><Controls.FlexItemWP style={{
            textAlign: "center"
          }}><Controls.ButtonWP variant={"secondary"} style={{
              backgroundColor: "#fff"
            }} href={"/wp-admin/admin.php?page=creator-lms#/students/".concat(r, "/report")} rel={"noopener noreferrer"}>{(0, I18n.__)("View profile", "ohmylms")}</Controls.ButtonWP><br /></Controls.FlexItemWP></Controls.FlexWP></React.Fragment>}</React.Fragment>;
  };
}
