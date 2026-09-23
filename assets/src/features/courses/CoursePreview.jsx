/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createCoursePreview(readRuntime) {
  return function CoursePreview(props) {
    const {
      $H,
      Br,
      Ge,
      I: Controls,
      QH,
      React,
      T: StoreModule,
      YH,
      ZH,
      b: I18n,
      f: Router,
      g: ReactHooks,
      sn,
      y: WordPressData
    } = readRuntime();
    var t,
      completedSteps = props.completedSteps,
      r = (props.onSave, (0, Router.g)().id),
      a = ((0, WordPressData.useDispatch)(StoreModule.default), (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourse();
      }, [r])),
      o = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourseChapters();
      }, [r]),
      i = (0, WordPressData.useSelect)(function (e) {
        return e("creator-lms/store").getCourseChaptersContent();
      }, [r]),
      l = function (e) {
        return (0, ReactHooks.useMemo)(function () {
          var t = ["text", "video", "audio"],
            n = 0,
            r = 0,
            a = 0,
            o = 0;
          return Object.values(e).forEach(function (e) {
            t.includes(null == e ? void 0 : e.type) ? n++ : "quiz" === (null == e ? void 0 : e.type) ? r++ : "assignment" === (null == e ? void 0 : e.type) ? a++ : "session" === e.type && o++;
          }), {
            lessons: n,
            quizzes: r,
            assignments: a,
            sessions: o
          };
        }, [e]);
      }(null == i ? void 0 : i.byId),
      lessons = l.lessons,
      quizzes = l.quizzes,
      assignments = l.assignments,
      sessions = l.sessions,
      m = QH((0, ReactHooks.useState)(!1), 2),
      p = (m[0], m[1], QH((0, ReactHooks.useState)(!1), 2)),
      v = (p[0], p[1], QH((0, ReactHooks.useState)(!1), 2));
    function h(e) {
      if (!e || !e.hour && !e.min && !e.sec) return (0, I18n.__)("Not Set", "ohmylms");
      var t = [];
      if (e.hour) {
        var n = (0, I18n.sprintf)((0, I18n._n)("%d hour", "%d hours", parseInt(e.hour)), parseInt(e.hour));
        t.push(n);
      }
      if (e.min) {
        var r = (0, I18n.sprintf)((0, I18n._n)("%d minute", "%d minutes", parseInt(e.min)), parseInt(e.min));
        t.push(r);
      }
      if (e.sec) {
        var a = (0, I18n.sprintf)((0, I18n._n)("%d second", "%d seconds", parseInt(e.sec)), parseInt(e.sec));
        t.push(a);
      }
      return t.join(", ");
    }
    v[0], v[1];
    var _ = (0, ReactHooks.useMemo)(function () {
        var e, t;
        return [{
          id: 0,
          label: (0, I18n.__)("Course Title", "ohmylms"),
          value: Ge(null !== (e = null == a ? void 0 : a.name) && void 0 !== e ? e : (0, I18n.__)("Not set", "ohmylms"))
        }, {
          id: 1,
          label: (0, I18n.__)("Categories", "ohmylms"),
          value: 0 === (null == a ? void 0 : a.categories.length) ? (0, I18n.__)("Not set", "ohmylms") : null == a ? void 0 : a.categories.map(function (e, t) {
            return Ge(e.name);
          }).join(", ")
        }, {
          id: 2,
          label: (0, I18n.__)("Chapters", "ohmylms"),
          value: null === (t = Object.values(null == o ? void 0 : o.byId)) || void 0 === t ? void 0 : t.length
        }, {
          id: 3,
          label: (0, I18n.__)("Lessons", "ohmylms"),
          value: lessons
        }].concat(function (e) {
          return function (e) {
            if (Array.isArray(e)) return $H(e);
          }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
          }(e) || ZH(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }(null != a && a.is_cohort ? [{
          id: 10,
          label: (0, I18n.__)("Sessions", "cretorlms"),
          value: sessions
        }] : []), [{
          id: 4,
          label: (0, I18n.__)("Quizzes", "ohmylms"),
          value: quizzes
        }, {
          id: 5,
          label: (0, I18n.__)("Assignments", "ohmylms"),
          value: assignments
        }, {
          id: 6,
          label: (0, I18n.__)("Pricing", "ohmylms"),
          value: "free" === (null == a ? void 0 : a.price_type) ? (0, I18n.__)("Free", "ohmylms") : null != a && a.sale_price ? <React.Fragment><YH currency={(null == a ? void 0 : a.currency) || "$"} currency_pos={(null == a ? void 0 : a.currency_pos) || "left"} price={Number(null == a ? void 0 : a.sale_price)} />{" "}<del><YH currency={(null == a ? void 0 : a.currency) || "$"} currency_pos={(null == a ? void 0 : a.currency_pos) || "left"} price={Number(null == a ? void 0 : a.regular_price)} del={!0} /></del></React.Fragment> : <YH currency={(null == a ? void 0 : a.currency) || "$"} currency_pos={(null == a ? void 0 : a.currency_pos) || "left"} price={Number(null == a ? void 0 : a.regular_price)} />
        }, {
          id: 7,
          label: (0, I18n.__)("Course Duration", "ohmylms"),
          value: h(null == a ? void 0 : a.duration)
        }, {
          id: 8,
          label: (0, I18n.__)("Level", "ohmylms"),
          value: <span style={{
            textTransform: "all" === (null == a ? void 0 : a.level) ? "inherit" : "capitalize"
          }}>{"all" === (null == a ? void 0 : a.level) ? (0, I18n.__)("All levels", "ohmylms") : null == a ? void 0 : a.level}</span>
        }, {
          id: 9,
          label: (0, I18n.__)("Slug", "ohmylms"),
          value: null == a ? void 0 : a.slug
        }]);
      }, [a, o, lessons, quizzes, assignments, sessions]),
      w = [{
        id: 0,
        label: (0, I18n.__)("Course title", "ohmylms"),
        completed: Boolean(null == a ? void 0 : a.name)
      }, {
        id: 1,
        label: (0, I18n.__)("Course description", "ohmylms"),
        completed: Boolean(null == a ? void 0 : a.description)
      }, {
        id: 2,
        label: (0, I18n.__)("Course Thumbnail", "ohmylms"),
        completed: Boolean(null == a ? void 0 : a.video_src) || Boolean(null == a ? void 0 : a.image_src)
      }, {
        id: 3,
        label: (0, I18n.__)("Course Content", "ohmylms"),
        completed: 0 !== lessons || 0 !== assignments || 0 !== quizzes
      }, {
        id: 4,
        label: (0, I18n.__)("Pricing", "ohmylms"),
        completed: null == completedSteps ? void 0 : completedSteps.includes(1)
      }];
    return <React.Fragment><Controls.ContainerWP><Controls.SpacerWP paddingY={6} marginBottom={0} className={"omlms-course-preview"}><Controls.CardWP variant={"secondary"} isBorderless={!0}><Controls.SpacerWP padding={10} marginBottom={0}><Controls.FlexWP gap={5} align={"flex-start"} className={"omlms-course-preview-wrapper"}><Controls.CardWP style={{
                  flex: "5"
                }} isBorderless={!0}><Controls.SpacerWP padding={5} marginBottom={0}><Controls.FlexWP gap={4} align={"center"} justify={"space-between"}><Controls.HeadingWP level={"3"}>{(0, I18n.__)("Review Course Summary", "ohmylms")}</Controls.HeadingWP><Controls.ButtonWP href={null == a ? void 0 : a.course_url} target={"_blank"} variant={"link"} style={{
                        gap: "5px",
                        textDecoration: "none"
                      }}><Br />{(0, I18n.__)("Preview", "ohmylms")}</Controls.ButtonWP></Controls.FlexWP><Controls.SpacerWP marginBottom={4} /><Controls.FlexWP gap={0} direction={"column"} className={"omlms-review-summery-list"}>{_.map(function (e, t) {
                        return <div key={null == e ? void 0 : e.id}><Controls.DividerWP marginStart={0} marginEnd={0} /><Controls.SpacerWP paddingY={3} marginBottom={0}><Controls.FlexWP gap={2} align={"center"} justify={"space-between"}><Controls.TextWP as={"span"} size={14}>{Ge(e.label)}</Controls.TextWP><Controls.TextWP as={"span"} size={14} style={{
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                maxWidth: "70%"
                              }}>{e.value}</Controls.TextWP></Controls.FlexWP></Controls.SpacerWP></div>;
                      })}</Controls.FlexWP></Controls.SpacerWP></Controls.CardWP><Controls.CardWP style={{
                  flex: "2"
                }} isBorderless={!0}><Controls.SpacerWP padding={5} marginBottom={0}><Controls.HeadingWP level={"3"}>{(0, I18n.__)("Publish Checklist", "ohmylms")}</Controls.HeadingWP>{w.filter(function (e) {
                      return e.completed;
                    }).length < w.length && <React.Fragment><Controls.SpacerWP marginBottom={4} /><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP marginBottom={0} padding={4}><Controls.FlexWP align={"flex-start"} gap={2} justify={"flex-start"}><Controls.FlexItemWP style={{
                              width: "18px",
                              position: "relative",
                              top: "1px"
                            }}><svg fill={"none"} width={"18"} height={"18"} viewBox={"0 0 12 12"} xmlns={"http://www.w3.org/2000/svg"}><path fill={"#7A8B9A"} fillRule={"evenodd"} d={"M11 6A5 5 0 111 6a5 5 0 0110 0zm-5-.5a.5.5 0 01.5.5v2.5a.5.5 0 11-1 0V6a.5.5 0 01.5-.5zm0-1a.5.5 0 100-1 .5.5 0 000 1z"} clipRule={"evenodd"} /></svg></Controls.FlexItemWP><Controls.FlexItemWP style={{
                              width: "calc(100% - 20px)"
                            }}>{w.filter(function (e) {
                                return e.completed;
                              }).length < w.length && <Controls.TextWP as={"p"} size={14}>{(0, I18n.__)("Your course needs attention. Please finish the following checklist before publishing:", "ohmylms")}</Controls.TextWP>}</Controls.FlexItemWP></Controls.FlexWP></Controls.SpacerWP></Controls.CardWP></React.Fragment>}<Controls.SpacerWP marginBottom={4} /><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP marginBottom={0} padding={4}><Controls.FlexWP gap={3} direction={"column"}>{w.map(function (e, t) {
                            return <Controls.FlexWP gap={2} align={"center"} justify={"flex-start"} key={e.id} className={" ".concat(e.completed ? "completed" : "")}><svg width={"19"} height={"19"} fill={"none"} viewBox={"0 0 19 19"} xmlns={"http://www.w3.org/2000/svg"}><rect width={"18"} height={"18"} x={".5"} y={".5"} fill={e.completed ? "green" : "#7A8B9A"} rx={"9"} /><path fill={"#fff"} fillRule={"evenodd"} d={"M15.502 5.63a.731.731 0 010 1.033l-6.279 6.28a2.194 2.194 0 01-3.103 0L3.498 10.32a.731.731 0 111.034-1.034l2.622 2.622a.731.731 0 001.035 0l6.279-6.279a.731.731 0 011.034 0z"} clipRule={"evenodd"} /></svg><span style={{
                                color: e.completed ? "green" : "#7A8B9A"
                              }}>{e.label}</span></Controls.FlexWP>;
                          })}</Controls.FlexWP></Controls.SpacerWP></Controls.CardWP>{"future" === (null == a ? void 0 : a.status) && <div className={"omlms-course-publish-status"}><p>{(0, I18n.__)("Your course is scheduled for publishing on ", "ohmylms")}<strong>{sn()(null == a || null === (t = a.post_date) || void 0 === t ? void 0 : t.date).format("MMMM D, YYYY [at] h:mm A")}</strong></p></div>}</Controls.SpacerWP></Controls.CardWP></Controls.FlexWP></Controls.SpacerWP></Controls.CardWP></Controls.SpacerWP></Controls.ContainerWP></React.Fragment>;
  };
}
