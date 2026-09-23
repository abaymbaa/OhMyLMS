// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var H$ = function () {
  var e, t, n, r, a, o, i, c, u, s, d;
  HG("creator-lms", "quizzes");
  var m = L$((0, g.useState)([]), 2),
    p = m[0],
    h = m[1],
    y = L$((0, g.useState)(!0), 2),
    _ = y[0],
    w = y[1],
    E = (0, f.Zp)(),
    S = (0, f.g)(),
    R = S.id,
    x = S.quizId,
    C = function () {
      var e = B$(D$().m(function e() {
        var t, n;
        return D$().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, w(!0), e.n = 1, l()({
                path: "/creator-lms/v1/quiz/".concat(R, "/report/").concat(x),
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 1:
              if (t = e.v) {
                e.n = 2;
                break;
              }
              t = [];
            case 2:
              h(t), e.n = 4;
              break;
            case 3:
              e.p = 3, n = e.v, console.error(n);
            case 4:
              return e.p = 4, w(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[0, 3, 4, 5]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  (0, g.useEffect)(function () {
    C();
  }, []);
  var P,
    O,
    k = function () {
      var e = B$(D$().m(function e() {
        var t, n;
        return D$().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, e.n = 1, l()({
                path: "/creator-lms/v1/quiz/".concat(R, "/report/").concat(x),
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(p)
              });
            case 1:
              "success" === (null == (t = e.v) ? void 0 : t.status) && window.location.reload(), e.n = 3;
              break;
            case 2:
              e.p = 2, n = e.v, console.error(n);
            case 3:
              return e.a(2);
          }
        }, e, null, [[0, 2]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  return React.createElement(React.Fragment, null, React.createElement(I.ContainerWP, {
    className: "omlms-quiz-report-details"
  }, React.createElement(I.SpacerWP, {
    marginY: 5
  }, React.createElement(I.FlexWP, {
    gap: 3,
    align: "center",
    justify: "space-between"
  }, React.createElement(I.FlexItemWP, null, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.FlexWP, {
    justify: "center",
    align: "center",
    gap: 2
  }, React.createElement(I.SpacerWP, {
    padding: 2,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    justify: "center",
    align: "center",
    gap: 2
  }, React.createElement(v.Link, {
    to: "/quiz-edit/".concat(R)
  }, React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "center",
    gap: 1
  }, React.createElement(QZ, null), React.createElement(I.TextWP, {
    size: 15
  }, (0, b.__)("Quiz /", "ohmylms")))), React.createElement(v.Link, {
    to: "#",
    onClick: function () {
      E(-1);
    }
  }, React.createElement(I.TextWP, {
    size: 15
  }, (0, b.__)("Result /", "ohmylms"))), React.createElement(I.TextWP, {
    size: 15
  }, Ge(null == p || null === (e = p.student) || void 0 === e ? void 0 : e.name))))))), React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    gap: 4,
    justify: "flex-start"
  }, (null == p ? void 0 : p.end_date) && React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    gap: 2,
    justify: "center"
  }, React.createElement(r$, null), React.createElement("time", {
    style: {
      fontSize: "15px",
      color: "var(--wp-components-color-foreground)"
    }
  }, (0, b.__)("Date submitted", "ohmylms"), ": ", sn()(null == p ? void 0 : p.end_date).format("MMM D, YYYY h:mm A")))), (null == p || null === (t = p.report) || void 0 === t ? void 0 : t.status) && React.createElement(I.FlexItemWP, null, React.createElement(I.BadgeWP, {
    style: {
      textTransform: "capitalize"
    },
    isBorderLess: !0,
    variant: "in-review" === (null == p || null === (n = p.report) || void 0 === n ? void 0 : n.status) ? "warning" : "completed" === (null == p || null === (r = p.report) || void 0 === r ? void 0 : r.status) ? "success" : "danger"
  }, "in-review" === (null == p || null === (a = p.report) || void 0 === a ? void 0 : a.status) ? "Pending" : null == p || null === (o = p.report) || void 0 === o ? void 0 : o.status)))), React.createElement(I.ButtonWP, {
    onClick: k,
    variant: "primary"
  }, (0, b.__)("Upgrade Grade", "ohmylms"))), React.createElement(I.SpacerWP, {
    marginBottom: 10
  }), React.createElement("div", {
    className: "omlms-quiz-report-content-wrapper"
  }, _ ? React.createElement(I.SkeletonWP, {
    active: !0,
    rows: 10
  }) : React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    gap: 6,
    align: "flex-start",
    justify: "space-between"
  }, React.createElement(I.FlexBlockWP, {
    style: {
      flex: "5"
    }
  }, React.createElement(I$, {
    setData: h,
    data: null == p || null === (i = p.report) || void 0 === i ? void 0 : i.questions,
    fetchData: C
  })), React.createElement(I.FlexBlockWP, {
    style: {
      flex: "2"
    }
  }, React.createElement(N$, {
    data: {
      score: (null == p ? void 0 : p.score) || 0,
      correct: "".concat((P = null == p || null === (c = p.report) || void 0 === c ? void 0 : c.questions, O = 0, P && P.length ? (P.forEach(function (e) {
        "correct" === function (e) {
          var t,
            n = e.given_answer,
            r = e.questions,
            a = null == e || null === (t = e.settings) || void 0 === t ? void 0 : t.type;
          if ("true-false" === a || "short-text" === a || "long-text" === a || "fill-in-the-blank" === a || "statement" === a) return (null == e ? void 0 : e.achive_mark) > 0 ? "correct" : "incorrect";
          if ("reorder" === a) return R$(n, r) ? "correct" : "incorrect";
          if ("matching" === a) return j$(n) ? "correct" : "incorrect";
          if (!n || !Array.isArray(n)) return "incorrect";
          var o = r.filter(function (e) {
              return "1" === e.is_correct;
            }).map(function (e) {
              return e.id;
            }),
            i = n.every(function (e) {
              return o.includes(e);
            });
          return "single-choice" === e.settings.type ? i && 1 === n.length && o.includes(n[0]) ? "correct" : "incorrect" : "multiple-choice" === e.settings.type ? i && n.length === o.length ? "correct" : "incorrect" : "statement" === e.settings.type && i && n.length === o.length ? "correct" : "incorrect";
        }(e) && O++;
      }), O) : O), "/").concat(null == p ? void 0 : p.total_question),
      isPass: Number(null == p ? void 0 : p.score) >= Number(null == p ? void 0 : p.passing_mark),
      status: null == p || null === (u = p.report) || void 0 === u ? void 0 : u.status,
      student_name: Ge(null == p || null === (s = p.student) || void 0 === s ? void 0 : s.name),
      course_name: Ge(null == p || null === (d = p.course) || void 0 === d ? void 0 : d.name)
    }
  }))))))));
};
