/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createLeaderboardSettings(readRuntime) {
  return function LeaderboardSettings() {
    const {
      I: Controls,
      L: Entitlements,
      React,
      T: StoreModule,
      _2,
      b: I18n,
      b2,
      g: ReactHooks,
      g2,
      h2,
      l,
      p2,
      y: WordPressData,
      z: Notifications
    } = readRuntime();
    var e = (0, Entitlements.useIsPro)(),
      t = (0, WordPressData.useDispatch)(StoreModule.default),
      n = _2((0, ReactHooks.useState)({
        enable: !1,
        rules: "completion_rate",
        threshold: "",
        students_number: ""
      }), 2),
      r = n[0],
      a = n[1],
      o = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      i = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      c = _2((0, ReactHooks.useState)(!1), 2),
      u = c[0],
      s = c[1],
      d = _2((0, ReactHooks.useState)(!1), 2),
      m = d[0],
      p = d[1],
      f = (0, Notifications.A)(),
      openNotificationWithIcon = f.openNotificationWithIcon,
      contextHolder = f.contextHolder,
      _ = function () {
        var t = b2(p2().m(function t() {
          var n, r;
          return p2().w(function (t) {
            for (;;) switch (t.p = t.n) {
              case 0:
                if (e) {
                  t.n = 1;
                  break;
                }
                return t.a(2);
              case 1:
                return t.p = 1, s(!0), t.n = 2, l()({
                  path: "creator-lms/v1/engagement/settings/leaderboard"
                });
              case 2:
                n = t.v, a(function (e) {
                  return g2(g2({}, e), n);
                }), t.n = 4;
                break;
              case 3:
                t.p = 3, r = t.v, console.error(r);
              case 4:
                return t.p = 4, s(!1), t.f(4);
              case 5:
                return t.a(2);
            }
          }, t, null, [[1, 3, 4, 5]]);
        }));
        return function () {
          return t.apply(this, arguments);
        };
      }();
    (0, ReactHooks.useEffect)(function () {
      var e = !0;
      return e && _(), function () {
        e = !1;
      };
    }, []), (0, ReactHooks.useEffect)(function () {
      !u && o && openNotificationWithIcon(i, o);
    }, [o]);
    var w = function () {
        var n = b2(p2().m(function n() {
          var a;
          return p2().w(function (n) {
            for (;;) switch (n.p = n.n) {
              case 0:
                if (e) {
                  n.n = 1;
                  break;
                }
                return n.a(2);
              case 1:
                if ("" !== r.students_number && null !== r.students_number) {
                  n.n = 2;
                  break;
                }
                return openNotificationWithIcon("error", (0, I18n.__)("The fields cannot be empty.", "ohmylms")), n.a(2);
              case 2:
                if ("fastest_time" === r.rules) {
                  n.n = 3;
                  break;
                }
                if ("" !== r.threshold && null !== r.threshold) {
                  n.n = 3;
                  break;
                }
                return openNotificationWithIcon("error", (0, I18n.__)("The fields cannot be empty.", "ohmylms")), n.a(2);
              case 3:
                return t.setLoadingSetting(!0), p(!0), n.p = 4, n.n = 5, l()({
                  path: "/creator-lms/v1/engagement/settings/leaderboard",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(r)
                });
              case 5:
                return a = n.v, openNotificationWithIcon("success", (0, I18n.__)("Settings saved successfully.", "ohmylms")), n.a(2, a);
              case 6:
                n.p = 6, n.v, p(!1), openNotificationWithIcon("error", (0, I18n.__)("Something went wrong.", "ohmylms"));
              case 7:
                return n.p = 7, t.setLoadingSetting(!1), p(!1), n.f(7);
              case 8:
                return n.a(2);
            }
          }, n, null, [[4, 6, 7, 8]]);
        }));
        return function () {
          return n.apply(this, arguments);
        };
      }(),
      E = function (t, n) {
        if (e) {
          var o = g2(g2({}, r), {}, h2({}, t, n));
          a(o);
        }
      },
      S = [{
        label: (0, I18n.__)("Course completion rate", "ohmylms"),
        value: "completion_rate"
      }, {
        label: (0, I18n.__)("Highest average quiz score", "ohmylms"),
        value: "highest_quiz"
      }, {
        label: (0, I18n.__)("Fastest completion time", "ohmylms"),
        value: "fastest_time"
      }];
    if (u) return <React.Fragment><Controls.CardWP isBorderless={!0}><Controls.SpacerWP marginTop={2.5} padding={6}><Controls.SkeletonWP active={!0} rows={15} /></Controls.SpacerWP></Controls.CardWP></React.Fragment>;
    var R = "fastest_time" !== r.rules && ("" === r.threshold || null === r.threshold || r.threshold < 0) || "" === r.students_number || null === r.students_number || r.students_number < 0;
    return <React.Fragment>{contextHolder}<Controls.ProOverlayWP title={(0, I18n.__)("Leaderboard is available in the OhMyLMS version. Upgrade to Pro today to unlock this and more powerful features.", "ohmylms")} /><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP padding={0} marginTop={2.5} marginBottom={0}><Controls.FlexWP justify={"flex-start"} align={"flex-start"} direction={"column"} gap={3}>{e && <React.Fragment><Controls.CardWP isBorderless={!0} padding={"24px"} fullWidth={!0}><Controls.FlexWP align={"flex-start"} justify={"flex-start"} gap={10} direction={"column"}><Controls.FlexItemWP fullWidth={!0}><Controls.FlexWP align={"flex-start"} justify={"space-between"}><Controls.FlexItemWP style={{
                        width: "50%"
                      }}><Controls.HeadingWP level={"4"}>{(0, I18n.__)("Rank students based on", "ohmylms")}</Controls.HeadingWP><Controls.SpacerWP marginBottom={1} /><Controls.TextWP>{(0, I18n.__)("Select a criterion to rank students.", "ohmylms")}</Controls.TextWP></Controls.FlexItemWP><Controls.FlexItemWP style={{
                        width: "40%"
                      }}><Controls.SelectWP placeholder={(0, I18n.__)("Select a criterion", "ohmylms")} onChange={function (t) {
                          if (e) {
                            var n = g2(g2({}, r), {}, {
                              rules: t
                            });
                            a(n);
                          }
                        }} value={r.rules} options={S} /></Controls.FlexItemWP></Controls.FlexWP></Controls.FlexItemWP>{"fastest_time" !== r.rules && <React.Fragment><Controls.FlexItemWP fullWidth={!0}><Controls.FlexWP align={"flex-start"} justify={"space-between"}><Controls.FlexItemWP style={{
                          width: "50%"
                        }}><Controls.HeadingWP level={"4"}>{(0, I18n.__)("Set the threshold for the leaderboard", "ohmylms")}</Controls.HeadingWP><Controls.SpacerWP marginBottom={1} /><Controls.TextWP>{(0, I18n.__)("Set the minimum threshold value required for students to be included in the leaderboard.", "ohmylms")}</Controls.TextWP></Controls.FlexItemWP><Controls.FlexItemWP style={{
                          width: "40%"
                        }}><Controls.InputNumberWP value={null == r ? void 0 : r.threshold} onChange={function (e) {
                            return E("threshold", e);
                          }} min={0} suffix={"completion_rate" === (null == r ? void 0 : r.rules) || "highest_quiz" === (null == r ? void 0 : r.rules) ? "%" : ""} /></Controls.FlexItemWP></Controls.FlexWP></Controls.FlexItemWP></React.Fragment>}</Controls.FlexWP></Controls.CardWP><Controls.CardWP isBorderless={!0} padding={"24px"} fullWidth={!0}><Controls.FlexWP align={"flex-start"} justify={"flex-start"} gap={4} direction={"column"}><Controls.FlexItemWP fullWidth={!0}><Controls.FlexWP align={"flex-start"} justify={"space-between"}><Controls.FlexItemWP style={{
                        width: "50%"
                      }}><Controls.HeadingWP level={"4"}>{(0, I18n.__)("Minimum Students Required", "ohmylms")}</Controls.HeadingWP><Controls.SpacerWP marginBottom={1} /><Controls.TextWP>{(0, I18n.__)("Set the minimum number of students required to display the leaderboard.", "ohmylms")}</Controls.TextWP></Controls.FlexItemWP><Controls.FlexItemWP style={{
                        width: "40%"
                      }}><Controls.InputNumberWP value={r.students_number} onChange={function (e) {
                          return E("students_number", e);
                        }} min={0} /></Controls.FlexItemWP></Controls.FlexWP></Controls.FlexItemWP></Controls.FlexWP></Controls.CardWP></React.Fragment>}</Controls.FlexWP></Controls.SpacerWP></Controls.CardWP><Controls.SpacerWP paddingTop={6} paddingBottom={25}><Controls.FlexWP justify={"flex-end"}><Controls.ButtonWP variant={"primary"} size={"md"} onClick={w} isBusy={m} disabled={R}>{(0, I18n.__)("Save", "ohmylms")}</Controls.ButtonWP></Controls.FlexWP></Controls.SpacerWP></React.Fragment>;
  };
}
