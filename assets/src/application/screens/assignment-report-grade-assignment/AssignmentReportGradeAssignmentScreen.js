// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var fK = function () {
  HG("ohmylms", "assessments");
  var e = (0, y.useDispatch)(T.default),
    t = mK((0, g.useState)([]), 2),
    n = t[0],
    r = t[1],
    a = mK((0, g.useState)({}), 2),
    o = a[0],
    i = a[1],
    c = mK((0, g.useState)(!0), 2),
    u = c[0],
    s = c[1],
    d = ((0, f.Zp)(), (0, f.g)()),
    m = d.id,
    p = d.assignmentId,
    v = mK((0, g.useState)((null == n ? void 0 : n.score) || 0), 2),
    h = v[0],
    _ = v[1],
    w = mK((0, g.useState)((null == n ? void 0 : n.note) || ""), 2),
    E = w[0],
    S = w[1],
    R = (0, z.A)(),
    x = R.openNotificationWithIcon,
    C = R.contextHolder,
    P = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    O = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []);
  (0, g.useEffect)(function () {
    var e = function () {
      var e = dK(cK().m(function e() {
        var t, n, a;
        return cK().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, s(!0), e.n = 1, l()({
                path: "/ohmylms/v1/assignment/".concat(m, "/report/").concat(p),
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
              r(null == (t = n) ? void 0 : t.report[0]), i(null == t ? void 0 : t.additional_data), e.n = 4;
              break;
            case 3:
              e.p = 3, a = e.v, console.error(a);
            case 4:
              return e.p = 4, s(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[0, 3, 4, 5]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
    e();
  }, []), (0, g.useEffect)(function () {
    !u && P && x(O, P);
  }, [P]);
  var k = function () {
      var t = dK(cK().m(function t() {
        var a, c, u, d;
        return cK().w(function (t) {
          for (;;) switch (t.p = t.n) {
            case 0:
              return t.p = 0, c = [{
                id: null == n || null === (a = n.submissions[0]) || void 0 === a ? void 0 : a.id,
                score: Number(h),
                note: E,
                status: (null == o ? void 0 : o.pass_marks) <= h ? "passed" : "failed"
              }], t.n = 1, l()({
                path: "/ohmylms/v1/assignment/".concat(m, "/report/").concat(p),
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(c)
              });
            case 1:
              u = t.v, r(null == u ? void 0 : u.report[0]), i(null == u ? void 0 : u.additional_data), e.showNotification((0, b.__)("Grade Upgraded Successfully", "ohmylms"), "success"), t.n = 3;
              break;
            case 2:
              t.p = 2, d = t.v, console.error(d), e.showNotification((0, b.__)("Something went wrong", "ohmylms"), "error");
            case 3:
              return t.p = 3, s(!1), t.f(3);
            case 4:
              return t.a(2);
          }
        }, t, null, [[0, 2, 3, 4]]);
      }));
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    j = (null == n ? void 0 : n.submissions) || [];
  return (0, g.useEffect)(function () {
    var e, t, r;
    (null == n || null === (e = n.submissions) || void 0 === e ? void 0 : e.length) > 0 && (_(null == n || null === (t = n.submissions[0]) || void 0 === t ? void 0 : t.score), S(null == n || null === (r = n.submissions[0]) || void 0 === r ? void 0 : r.note));
  }, [n]), React.createElement(React.Fragment, null, C, React.createElement(I.ContainerWP, null, React.createElement(I.SpacerWP, {
    marginY: 5
  }, React.createElement(lK, {
    data: n,
    submissions: j,
    handleUpgradeGrade: k
  }), React.createElement(I.SpacerWP, {
    marginTop: 8
  }, u ? React.createElement(I.SkeletonWP, {
    active: !0,
    rows: 10
  }) : React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    gap: 8,
    justify: "space-between",
    align: "start",
    style: {
      height: "100%"
    }
  }, React.createElement(I.FlexItemWP, {
    flex: 5
  }, React.createElement(I.FlexWP, {
    direction: "column",
    size: "middle",
    style: {
      height: "100%"
    },
    items: "flex-start"
  }, n.submissions.map(function (e) {
    return React.createElement(rK, {
      key: e.id,
      additionData: o,
      submission: e
    });
  }))), React.createElement(I.FlexItemWP, {
    flex: 3
  }, React.createElement(X$, {
    student: n,
    additionData: o,
    setScore: _,
    setNote: S,
    note: E,
    score: h
  }))))))));
};
