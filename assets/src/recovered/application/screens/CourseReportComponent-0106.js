// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var bq = function () {
  var e,
    t,
    n,
    r,
    a,
    o,
    i,
    c,
    u,
    s,
    d,
    m,
    p,
    v,
    h,
    _,
    w,
    E,
    S,
    R,
    x = (0, f.g)().id;
  x || f.C5, HG("creator-lms", "course"), (0, y.useDispatch)(T.default);
  var C = hq((0, g.useState)({}), 2),
    P = C[0],
    O = C[1],
    k = ((0, y.useSelect)(function (e) {
      return e(T.default).getDashboardFilter();
    }, []), hq((0, g.useState)(!0), 2)),
    j = k[0],
    A = k[1],
    M = hq((0, g.useState)(""), 2),
    F = M[0],
    N = (M[1], hq((0, g.useState)("all"), 2)),
    D = N[0],
    W = (N[1], hq((0, g.useState)("all"), 2)),
    z = W[0],
    B = (W[1], (0, f.Zp)(), (0, g.useCallback)(gq(pq().m(function e() {
      var t,
        n,
        r,
        a,
        o,
        i = arguments;
      return pq().w(function (e) {
        for (;;) switch (e.p = e.n) {
          case 0:
            return t = i.length > 0 && void 0 !== i[0] ? i[0] : "date", n = i.length > 1 && void 0 !== i[1] ? i[1] : "DESC", A(!0), e.p = 1, r = {
              sort_by: n,
              filter: D,
              search: F || "",
              order: t,
              completion_type: z
            }, e.n = 2, l()({
              path: (0, lN.addQueryArgs)("/creator-lms/v1/analytics/course/".concat(x), r),
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            });
          case 2:
            a = e.v, O(a), e.n = 4;
            break;
          case 3:
            e.p = 3, o = e.v, console.error("Error fetching data:", o);
          case 4:
            return e.p = 4, A(!1), e.f(4);
          case 5:
            return e.a(2);
        }
      }, e, null, [[1, 3, 4, 5]]);
    })), [x, D, F, z]));
  (0, g.useEffect)(function () {
    var e = !0;
    return e && B(), function () {
      e = !1;
    };
  }, [D, F, x, z]);
  var L = {
    background: "#6e42d3",
    borderRadius: "2px",
    width: "10px",
    height: "10px",
    display: "inline-block",
    marginInlineEnd: "15px"
  };
  return React.createElement(I.SurfaceWP, null, React.createElement(I.ContainerWP, null, React.createElement(I.SpacerWP, {
    paddingY: 6
  }, React.createElement(I.FlexWP, {
    gap: 4,
    justify: "flex-start"
  }, React.createElement(Nr, null), React.createElement(I.HeadingWP, {
    level: 2,
    size: 20
  }, (0, b.__)("Course Analytics", "ohmylms"), "   ", !j && React.createElement("small", null, "(", Ge(null == P ? void 0 : P.title), ")")))), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    marginBottom: 0
  }, React.createElement(I.HeadingWP, {
    level: 3,
    size: 16
  }, (0, b.__)("Journey Mapping", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 3
  }), React.createElement(I.FlexWP, {
    wrap: !0,
    gap: 5,
    align: "stretch",
    justify: "space-between",
    className: "omlms-course-journey-card-wrapper"
  }, React.createElement(I.FlexItemWP, {
    style: {
      width: "calc(41% - 11px)"
    },
    className: "omlms-course-journey-left-card"
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    fullHeight: !0
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 6
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 5,
    marginBottom: 0
  }, j ? React.createElement(I.SkeletonWP, {
    paragraph: {
      rows: 3
    },
    active: !0
  }) : React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    gap: 4
  }, React.createElement(I.FlexBlockWP, null, React.createElement(gU, {
    title: (0, b.__)("Total Students", "ohmylms"),
    cardNumber: (null == P || null === (e = P.content_data) || void 0 === e ? void 0 : e.total_enrollment) || 0,
    icon: React.createElement(yU, null)
  })), React.createElement(I.FlexBlockWP, null, React.createElement(gU, {
    title: (0, b.__)("Course Completion", "ohmylms"),
    cardNumber: (null == P || null === (t = P.content_data) || void 0 === t ? void 0 : t.completed_students) || 0,
    icon: React.createElement(_U, null)
  }))), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement(I.FlexWP, {
    gap: 4
  }, React.createElement(I.FlexBlockWP, null, React.createElement(gU, {
    title: (0, b.__)("Students In Progress", "ohmylms"),
    cardNumber: (null == P || null === (n = P.content_data) || void 0 === n ? void 0 : n.in_progress_students) || 0,
    icon: React.createElement(EU, null)
  })), React.createElement(I.FlexBlockWP, null, React.createElement(gU, {
    title: (0, b.__)("Ratings", "ohmylms"),
    cardNumber: (null == P || null === (r = P.content_data) || void 0 === r ? void 0 : r.ratings) || 0,
    icon: React.createElement(RU, null)
  })))))), React.createElement(I.SpacerWP, {
    marginBottom: 5
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 5,
    marginBottom: 0
  }, j ? React.createElement(I.SkeletonWP, {
    paragraph: {
      rows: 3
    },
    active: !0
  }) : React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    gap: 4
  }, React.createElement(I.FlexBlockWP, null, React.createElement(gU, {
    title: (0, b.__)("Chapters", "ohmylms"),
    cardNumber: (null == P || null === (a = P.content_data) || void 0 === a ? void 0 : a.chapters) || 0,
    icon: React.createElement(CU, null)
  })), React.createElement(I.FlexBlockWP, null, React.createElement(gU, {
    title: (0, b.__)("Lessons", "ohmylms"),
    cardNumber: (null == P || null === (o = P.content_data) || void 0 === o ? void 0 : o.lessons) || 0,
    icon: React.createElement(OU, null)
  }))), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement(I.FlexWP, {
    gap: 4
  }, React.createElement(I.FlexBlockWP, null, React.createElement(gU, {
    title: (0, b.__)("Quizzes", "ohmylms"),
    cardNumber: (null == P || null === (i = P.content_data) || void 0 === i ? void 0 : i.quizzes) || 0,
    icon: React.createElement(MU, null)
  })), React.createElement(I.FlexBlockWP, null, React.createElement(gU, {
    title: (0, b.__)("Assignments", "ohmylms"),
    cardNumber: (null == P || null === (c = P.content_data) || void 0 === c ? void 0 : c.assignments) || 0,
    icon: React.createElement(jU, null)
  }))))))))), React.createElement(I.FlexItemWP, {
    style: {
      width: "calc(59% - 11px)"
    },
    className: "omlms-course-journey-right-card"
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    fullHeight: !0,
    fullWidth: !0
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(I.HeadingWP, {
    level: 3,
    size: 16
  }, (0, b.__)("Earnings", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 5
  }), j ? React.createElement(I.SkeletonWP, {
    paragraph: {
      rows: 3
    },
    active: !0
  }) : React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 4
  }, React.createElement(I.FlexWP, {
    gap: 4
  }, React.createElement(gU, {
    title: (0, b.__)("Income", "ohmylms"),
    icon: React.createElement(React.Fragment, null, React.createElement(IU, {
      iconColor: "#6e42d3"
    })),
    children: React.createElement("span", {
      className: "course-report-card-value",
      style: {
        fontSize: "30px",
        marginLeft: "40px"
      }
    }, React.createElement(YH, {
      currency: null == P || null === (u = P.earning) || void 0 === u ? void 0 : u.currency,
      currency_pos: null == P || null === (s = P.earning) || void 0 === s ? void 0 : s.currency_pos,
      price: Number(null == P || null === (d = P.earning) || void 0 === d ? void 0 : d.total_earning)
    }))
  }), React.createElement(gU, {
    className: "omlms-refund",
    title: (0, b.__)("Refund", "ohmylms"),
    icon: React.createElement(React.Fragment, null, React.createElement(IU, {
      iconColor: "#ff4955"
    })),
    children: React.createElement("span", {
      className: "course-report-card-value",
      style: {
        fontSize: "30px",
        marginLeft: "40px"
      }
    }, React.createElement(YH, {
      currency: null == P || null === (m = P.earning) || void 0 === m ? void 0 : m.currency,
      currency_pos: null == P || null === (p = P.earning) || void 0 === p ? void 0 : p.currency_pos,
      price: Number(null == P || null === (v = P.earning) || void 0 === v ? void 0 : v.total_refund)
    }))
  }), React.createElement(gU, {
    className: "omlms-net-income",
    title: (0, b.__)("Net Income", "ohmylms"),
    icon: React.createElement(React.Fragment, null, React.createElement(IU, {
      iconColor: "#33A646"
    })),
    children: React.createElement("span", {
      className: "course-report-card-value",
      style: {
        fontSize: "30px",
        marginLeft: "40px"
      }
    }, React.createElement(YH, {
      currency: null == P || null === (h = P.earning) || void 0 === h ? void 0 : h.currency,
      currency_pos: null == P || null === (_ = P.earning) || void 0 === _ ? void 0 : _.currency_pos,
      price: Number(null == P || null === (w = P.earning) || void 0 === w ? void 0 : w.net_amount)
    }))
  })))), React.createElement(I.SpacerWP, {
    marginBottom: 5
  }), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    className: "omlms-course-report-chart"
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    style: {
      height: "320px"
    }
  }, React.createElement(LU, {
    currency: null == P || null === (E = P.earning) || void 0 === E ? void 0 : E.currency,
    currency_pos: null == P || null === (S = P.earning) || void 0 === S ? void 0 : S.currency_pos,
    graphData: (null == P || null === (R = P.earning) || void 0 === R ? void 0 : R.graph_data) || {},
    filterTypeParam: {
      type: "custom"
    }
  })), React.createElement(I.SpacerWP, {
    marginBottom: 5
  }), React.createElement(I.FlexWP, {
    gap: 5,
    align: "center",
    justify: "center"
  }, React.createElement(I.FlexItemWP, {
    style: mq({}, "--base-color", "#6e42d3")
  }, React.createElement("span", {
    style: L
  }), (0, b.__)("Income", "ohmylms")), React.createElement(I.FlexItemWP, {
    style: mq({}, "--base-color", "#FF4955")
  }, React.createElement("span", {
    style: dq(dq({}, L), {}, {
      background: "#FF4955"
    })
  }), (0, b.__)("Refund", "ohmylms")), React.createElement(I.FlexItemWP, {
    style: mq({}, "--base-color", "#33A646")
  }, React.createElement("span", {
    style: dq(dq({}, L), {}, {
      background: "#33A646"
    })
  }), (0, b.__)("Net Income", "ohmylms"))))))))), React.createElement(I.SpacerWP, {
    marginBottom: 5
  }), React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(cq, {
    students: null == P ? void 0 : P.students
  })))))), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingBottom: 5
  }));
};
