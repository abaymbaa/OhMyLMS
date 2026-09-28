/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createEmailEditor(readRuntime) {
  return function EmailEditor() {
    const {
      Bee,
      Dee,
      Ea,
      Fee: MemoEmailFields,
      Hee,
      I: Controls,
      Oee: MemoEmailPreview,
      React,
      Ree: MemoEmailEditorHeader,
      T: StoreModule,
      Vee,
      b: I18n,
      g: ReactHooks,
      y: WordPressData,
      z: Notifications
    } = readRuntime();
    var e,
      t = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getEmail();
      }, []),
      n = (0, WordPressData.useDispatch)(StoreModule.default),
      r = n.updateSingleEmail,
      a = n.updateEmail,
      o = Hee((0, ReactHooks.useState)("desktop"), 2),
      i = o[0],
      l = o[1],
      c = (0, Notifications.A)(),
      u = c.openNotificationWithIcon,
      s = c.contextHolder,
      d = Hee((0, ReactHooks.useState)((null == t ? void 0 : t.additional_content) || ""), 2),
      m = d[0],
      p = d[1],
      f = Hee((0, ReactHooks.useState)((null == t ? void 0 : t.footer_text) || ""), 2),
      v = f[0],
      h = f[1],
      _ = Hee((0, ReactHooks.useState)((null == t ? void 0 : t.course_suggestion_text) || ""), 2),
      w = _[0],
      E = _[1],
      S = function () {
        var e,
          n = (e = Dee().m(function e() {
            var n, o, i;
            return Dee().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  return e.p = 0, e.n = 1, a({
                    additional_content: m,
                    footer_text: v,
                    course_suggestion_text: w
                  });
                case 1:
                  return o = Bee(Bee({}, t), {}, {
                    additional_content: m,
                    footer_text: v,
                    course_suggestion_text: w
                  }), e.n = 2, r(null == t || null === (n = t.basic) || void 0 === n ? void 0 : n.id, o);
                case 2:
                  u("success", "Saved successfully"), e.n = 4;
                  break;
                case 3:
                  e.p = 3, i = e.v, console.error(i), u("error", "Failed to save! Please try again.");
                case 4:
                  return e.a(2);
              }
            }, e, null, [[0, 3]]);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                Vee(o, r, a, i, l, "next", e);
              }
              function l(e) {
                Vee(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function () {
          return n.apply(this, arguments);
        };
      }();
    return <React.Fragment>{s}<MemoEmailEditorHeader title={(null == t || null === (e = t.basic) || void 0 === e ? void 0 : e.title) || (0, I18n.__)("Email Editor", "ohmylms")} handlePreview={function (e) {
        l(e);
      }} handleTestEmail={function () {
        console.warn("Test Email");
      }} handleSave={S} device={i} /><Ea isBorderless={!0} variant={"secondary"}><Controls.SpacerWP padding={5} gap={3}><Controls.FlexWP align={"stretch"} justify={"between"} gap={"3"}><Controls.FlexItemWP style={{
              flex: 3
            }}><MemoEmailPreview selected={i} content={m} footerText={v} courseSuggestionText={w} /></Controls.FlexItemWP><Controls.FlexItemWP style={{
              flex: 1
            }}><MemoEmailFields setAdditionalContent={p} setFooterContent={h} setCourseSuggestionText={E} /></Controls.FlexItemWP></Controls.FlexWP></Controls.SpacerWP></Ea></React.Fragment>;
  };
}
