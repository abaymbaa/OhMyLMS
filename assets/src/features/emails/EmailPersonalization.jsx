/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createEmailPersonalization(readRuntime) {
  return function EmailPersonalization(props) {
    const {
      E4,
      I: Controls,
      L2,
      React,
      T: StoreModule,
      _4,
      b: I18n,
      b4,
      v4: MemoEmailButtonPosition,
      y: WordPressData,
      y4: MemoEmailSenderOptions,
      z: Notifications
    } = readRuntime();
    var t = props.isOpen,
      n = props.setIsOpen,
      r = (0, Notifications.A)(),
      a = r.openNotificationWithIcon,
      o = r.contextHolder,
      i = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectSettingsMap();
      }, []),
      l = (0, WordPressData.useDispatch)(StoreModule.default),
      c = l.updateEmailSettings,
      u = l.updateSettings,
      s = function () {
        n(!1);
      },
      d = function () {
        var e,
          t = (e = _4().m(function e() {
            var t;
            return _4().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  return e.p = 0, e.n = 1, c(i);
                case 1:
                  a("success", "Saved successfully."), e.n = 3;
                  break;
                case 2:
                  e.p = 2, t = e.v, console.error(t), a("error", "Failed to update. Please try again.");
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
                E4(o, r, a, i, l, "next", e);
              }
              function l(e) {
                E4(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function () {
          return t.apply(this, arguments);
        };
      }(),
      m = function (e, t, n) {
        u(e, function (e, t, n) {
          return (t = function (e) {
            var t = function (e) {
              if ("object" != b4(e) || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var n = t.call(e, "string");
                if ("object" != b4(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            }(e);
            return "symbol" == b4(t) ? t : t + "";
          }(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }({}, t, n));
      },
      p = [{
        title: (0, I18n.__)("Base color", "ohmylms"),
        description: (0, I18n.__)("The base color for email template.", "ohmylms"),
        isShowResetBtn: !0,
        defaultColor: "#6E42D3",
        initialColor: i.creator_lms_email_base_color,
        onChange: function (e) {
          m("creator_lms_email_base_color", "value", e);
        }
      }, {
        title: (0, I18n.__)("Background color", "ohmylms"),
        description: (0, I18n.__)("The background color for email template.", "ohmylms"),
        isShowResetBtn: !0,
        defaultColor: "#F4F5F7",
        initialColor: i.creator_lms_email_background_color,
        onChange: function (e) {
          m("creator_lms_email_background_color", "value", e);
        }
      }, {
        title: (0, I18n.__)("Body background color", "ohmylms"),
        description: (0, I18n.__)("The main body background color.", "ohmylms"),
        isShowResetBtn: !0,
        defaultColor: "#FFFFFF",
        initialColor: i.creator_lms_email_body_background_color,
        onChange: function (e) {
          m("creator_lms_email_body_background_color", "value", e);
        }
      }, {
        title: (0, I18n.__)("Body text color", "ohmylms"),
        description: (0, I18n.__)("The main body text color default.", "ohmylms"),
        isShowResetBtn: !0,
        defaultColor: "#1F2328",
        initialColor: i.creator_lms_email_body_text_color,
        onChange: function (e) {
          m("creator_lms_email_body_text_color", "value", e);
        }
      }, {
        title: (0, I18n.__)("Notification color", "ohmylms"),
        description: (0, I18n.__)("Color used for verification and notification banners on the site.", "ohmylms"),
        isShowResetBtn: !0,
        defaultColor: "#6E42D3",
        initialColor: i.omlms_notification_color,
        onChange: function (e) {
          m("omlms_notification_color", "value", e);
        }
      }];
    return <React.Fragment>{o}{t && <Controls.ModalWP title={(0, I18n.__)("Settings", "ohmylms")} onRequestClose={s} size={"large"}><Controls.FlexWP direction={"column"} gap={"4"}><L2 title={(0, I18n.__)("Branding", "ohmylms")} description={(0, I18n.__)("Add a logo and color theme to customize the look and feel of email notification your customers receive.", "ohmylms")} brandingImg={i.creator_lms_email_branding_image} handleRemove={function () {
            m("creator_lms_email_branding_image", "value", "");
          }} handleChange={function (e) {
            return m("creator_lms_email_branding_image", "value", e);
          }} colorsConfig={p} showDivider={!0} /><MemoEmailButtonPosition /><MemoEmailSenderOptions /></Controls.FlexWP><Controls.DividerWP marginStart={3} marginEnd={4} /><Controls.SpacerWP marginBottom={0}><Controls.FlexWP justify={"end"} gap={"2"}><Controls.ButtonWP variant={"secondary"} onClick={s}>{(0, I18n.__)("Cancel", "ohmylms")}</Controls.ButtonWP><Controls.ButtonWP variant={"primary"} onClick={d}>{(0, I18n.__)("Save", "ohmylms")}</Controls.ButtonWP></Controls.FlexWP></Controls.SpacerWP></Controls.ModalWP>}</React.Fragment>;
  };
}
