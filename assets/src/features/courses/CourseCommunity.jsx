/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createCourseCommunity(readRuntime) {
  return function CourseCommunity(props) {
    const {
      I: Controls,
      If,
      Kt,
      Mf,
      Nf,
      React,
      Wf,
      b: I18n,
      g: ReactHooks,
      jf,
      kf,
      l
    } = readRuntime();
    var isCommunityEnabled = props.isCommunityEnabled,
      courseId = props.courseId,
      course = props.course,
      onToggleCommunity = props.onToggleCommunity,
      onUpdateCourse = props.onUpdateCourse,
      i = (0, ReactHooks.useRef)(!1),
      c = Wf((0, ReactHooks.useState)(""), 2),
      u = c[0],
      s = c[1],
      d = Wf((0, ReactHooks.useState)((null == course ? void 0 : course.space_title) || ""), 2),
      m = (d[0], d[1]),
      p = Wf((0, ReactHooks.useState)((null == course ? void 0 : course.space_description) || ""), 2),
      f = (p[0], p[1]),
      v = Wf((0, ReactHooks.useState)(""), 2),
      y = v[0],
      _ = v[1];
    return (0, ReactHooks.useEffect)(function () {
      var e = function () {
        var e,
          t = (e = Mf().m(function e() {
            var t, a;
            return Mf().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  return e.p = 0, e.n = 1, l()({
                    path: "/creatorlms/v1/communities/space/course/".concat(courseId),
                    method: "GET"
                  });
                case 1:
                  (t = e.v) && t.url ? (s(t.url), _("")) : _((0, I18n.__)("Community space not found for this course.", "ohmylms")), !t || null == t || !t.title || null != course && course.space_title || (m(null == t ? void 0 : t.title), onUpdateCourse && onUpdateCourse(Nf(Nf({}, course), {}, {
                    space_title: null == t ? void 0 : t.title
                  }))), !t || null == t || !t.description || null != course && course.space_description || (f(null == t ? void 0 : t.description), onUpdateCourse && onUpdateCourse(Nf(Nf({}, course), {}, {
                    space_description: null == t ? void 0 : t.description
                  }))), e.n = 3;
                  break;
                case 2:
                  e.p = 2, a = e.v, console.error("Error fetching community data:", a), _((0, I18n.__)("Unable to fetch community space. It may have been deleted or there was a network error.", "ohmylms"));
                case 3:
                  return e.a(2);
              }
            }, e, null, [[0, 2]]);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                If(o, r, a, i, l, "next", e);
              }
              function l(e) {
                If(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function () {
          return t.apply(this, arguments);
        };
      }();
      "yes" === isCommunityEnabled && (e(), i.current = !0);
    }, [isCommunityEnabled, courseId]), (0, ReactHooks.useEffect)(function () {
      void 0 !== (null == course ? void 0 : course.space_title) && m(course.space_title), void 0 !== (null == course ? void 0 : course.space_description) && f(course.space_description);
    }, [null == course ? void 0 : course.space_title, null == course ? void 0 : course.space_description]), <Controls.ContainerWP className={"omlms-community-settings"}><Controls.SpacerWP marginBottom={0} paddingY={10}><Controls.CardWP variant={"secondary"} isBorderless={!0}><Controls.SpacerWP padding={10} marginBottom={0}><h2 className={"title"}>{(0, I18n.__)("Community Settings", "ohmylms")}</h2><p className={"description"}>{(0, I18n.__)("Enable a discussion space for your students. Once enabled, a dedicated community will be created for this course.", "ohmylms")}</p><Controls.CardWP isBorderless={!0}><Controls.SpacerWP marginBottom={0} padding={3}><Controls.FlexWP gap={4} direction={"column"}><Kt title={(0, I18n.__)("Enable Community for this Course", "ohmylms")} description={(0, I18n.__)("Allow students to participate in course discussions.", "ohmylms")} isChecked={"yes" === isCommunityEnabled} onChange={function (e) {
                    onToggleCommunity && onToggleCommunity(e);
                  }} conditionalChild={<React.Fragment><Controls.SpacerWP marginBottom={4} /><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP marginBottom={0} marginTop={2} padding={1}><Controls.SpacerWP padding={4}><Controls.FlexWP gap={8} align={"flex-start"} justify={"space-between"}><Controls.FlexItemWP isBlock={!0}><Controls.HeadingWP level={"4"}>{(0, I18n.__)("Space URL", "ohmylms")}</Controls.HeadingWP><Controls.TextWP>{(0, I18n.__)("A unique URL to access the space.", "ohmylms")}</Controls.TextWP></Controls.FlexItemWP><Controls.FlexItemWP isBlock={!0} className={"omlms-coupon-generate omlms-community-generate"}><Controls.FlexWP gap={2}><Controls.FlexItemWP style={{
                                  position: "relative",
                                  width: "calc(100% - 40px)"
                                }}><Controls.InputWP type={"text"} value={u} readOnly={!0} /><Controls.ButtonWP className={"omlms-coupon-generate-btn omlms-community-generate-btn"} onClick={function () {
                                    return window.open(u, "_blank");
                                  }}>{React.createElement(kf, null)}</Controls.ButtonWP></Controls.FlexItemWP><jf.A textToCopy={u} /></Controls.FlexWP></Controls.FlexItemWP></Controls.FlexWP></Controls.SpacerWP></Controls.SpacerWP></Controls.CardWP></React.Fragment>} /></Controls.FlexWP></Controls.SpacerWP></Controls.CardWP></Controls.SpacerWP></Controls.CardWP></Controls.SpacerWP>{y && <Controls.NoticeWP status={"error"}>{y}</Controls.NoticeWP>}</Controls.ContainerWP>;
  };
}
