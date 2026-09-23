// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var e$ = function () {
  HG("creator-lms", "quizzes");
  var e = JZ((0, g.useState)(""), 2),
    t = e[0],
    n = e[1],
    r = JZ((0, g.useState)(1), 2),
    a = r[0],
    o = r[1],
    i = JZ((0, g.useState)([]), 2),
    c = i[0],
    u = i[1],
    s = JZ((0, g.useState)(!0), 2),
    d = s[0],
    m = s[1],
    p = JZ((0, g.useState)(10), 1)[0],
    h = (0, f.Zp)(),
    y = JZ((0, g.useState)(0), 2),
    _ = y[0],
    w = y[1],
    E = JZ((0, g.useState)(0), 2),
    S = (E[0], E[1]),
    R = (0, f.g)().id;
  (0, g.useEffect)(function () {
    var e = function () {
      var e,
        t = (e = ZZ().m(function e() {
          var t, n, r;
          return ZZ().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return e.p = 0, m(!0), e.n = 1, l()({
                  path: "/creator-lms/v1/quiz/".concat(R, "/report"),
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json"
                  }
                });
              case 1:
                if (n = e.v) {
                  e.n = 2;
                  break;
                }
                n = [];
              case 2:
                u((null == (t = n) ? void 0 : t.report) || []), w(Number(null == t ? void 0 : t.passing_mark) || 0), S(Number(null == t ? void 0 : t.question_total_marks) || 0), e.n = 4;
                break;
              case 3:
                e.p = 3, r = e.v, console.error(r);
              case 4:
                return e.p = 4, m(!1), e.f(4);
              case 5:
                return e.a(2);
            }
          }, e, null, [[0, 3, 4, 5]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              KZ(o, r, a, i, l, "next", e);
            }
            function l(e) {
              KZ(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    e();
  }, [R]);
  var x = (0, g.useCallback)(function (e) {
      o(e);
    }, []),
    C = c.filter(function (e) {
      return Object.values(e).some(function (e) {
        return String(e).toLowerCase().includes(t);
      });
    }),
    P = [{
      title: "Name",
      dataIndex: "student_name",
      key: "student_name"
    }, {
      title: "Email",
      dataIndex: "student_email",
      key: "student_email"
    }, {
      title: "Date Submitted",
      dataIndex: "end_date",
      key: "end_date",
      render: function (e) {
        return sn()(e).format("MMM D, YYYY h:mm A");
      }
    }, {
      title: "Score",
      dataIndex: "score",
      key: "score",
      render: function (e, t) {
        return React.createElement(React.Fragment, null, t.total_marks);
      }
    }, {
      title: "Result",
      dataIndex: "result",
      key: "result",
      render: function (e, t) {
        var n = Number(null == t ? void 0 : t.total_marks) >= Number(_);
        return React.createElement(I.BadgeWP, {
          variant: "in-review" === (null == t ? void 0 : t.status) ? "warning" : n ? "success" : "danger"
        }, "in-review" === (null == t ? void 0 : t.status) ? (0, b.__)("Pending", "ohmylms") : n ? (0, b.__)("Pass", "ohmylms") : (0, b.__)("Fail", "ohmylms"));
      }
    }, {
      title: "",
      key: "action",
      render: function (e, t) {
        return React.createElement(I.ButtonWP, {
          variant: "primary",
          onClick: function () {
            return e = null == t ? void 0 : t.quiz_attempt_id, void h("grade-quiz/".concat(e));
            var e;
          }
        }, (0, b.__)("Grade Quiz", "ohmylms"));
      }
    }];
  return React.createElement(I.ContainerWP, null, React.createElement(I.SpacerWP, {
    marginY: 5
  }, React.createElement("div", null, React.createElement(I.FlexWP, {
    align: "center",
    justify: "space-between",
    gap: 2
  }, React.createElement(I.CardWP, {
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
    to: "/quizzes"
  }, React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "center",
    gap: 1
  }, React.createElement(QZ, null), (0, b.__)("Quiz /", "ohmylms"))), React.createElement(I.TextWP, {
    as: "span"
  }, (0, b.__)("Result", "ohmylms")))))), React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 2,
    marginBottom: 0
  }, React.createElement(Cm, {
    placeholder: (0, b.__)("Search Submission", "ohmylms"),
    onChange: function (e) {
      n(e.toLowerCase());
    }
  })))), React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 5,
    marginTop: 4
  }, React.createElement(sN.A, {
    columns: P,
    rowKey: "quiz_attempt_id",
    dataSource: C.slice((a - 1) * p, a * p),
    loading: d,
    pagination: !1,
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No submission yet!", "ohmylms")
      })
    }
  }), C.length > p && React.createElement(fN, {
    total: C.length,
    currentPage: a,
    onPageChange: x,
    perPage: p
  }))))));
};
