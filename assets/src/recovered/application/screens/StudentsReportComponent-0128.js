// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var UZ = function () {
  var e = (0, f.g)().id,
    t = (0, y.useDispatch)(T.default),
    n = function (e, t) {
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
          if ("string" == typeof e) return GZ(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? GZ(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!0), 2),
    r = n[0],
    a = n[1],
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getStudent();
    }, []);
  HG("creator-lms", "students");
  var i = (0, g.useCallback)(HZ(BZ().m(function n() {
    var r;
    return BZ().w(function (n) {
      for (;;) switch (n.p = n.n) {
        case 0:
          return a(!0), n.p = 1, n.n = 2, t.fetchSingleStudent(e);
        case 2:
          n.n = 4;
          break;
        case 3:
          n.p = 3, r = n.v, console.error("Error fetching student data:", r);
        case 4:
          return n.p = 4, a(!1), n.f(4);
        case 5:
          return n.a(2);
      }
    }, n, null, [[1, 3, 4, 5]]);
  })), [e]);
  return (0, g.useEffect)(function () {
    e && i();
  }, [e]), e ? ((0, f.Zp)(), h().createElement(I.SurfaceWP, null, h().createElement(I.ContainerWP, null, h().createElement(I.SpacerWP, {
    paddingY: 5
  }, h().createElement(I.FlexWP, {
    justify: "start",
    align: "center",
    gap: 3
  }, h().createElement(Nr, null), h().createElement(I.HeadingWP, {
    level: 2,
    size: 20
  }, (0, b.__)("Student Analytics", "ohmylms"))), h().createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, h().createElement(I.SpacerWP, {
    padding: 5,
    marginTop: 3
  }, h().createElement(I.ProOverlayWP, {
    title: (0, b.__)("Student analytics is available in the OhMyLMS version. Upgrade to Pro today to unlock this and more powerful features.", "ohmylms"),
    top: "0px",
    height: "100%"
  }), h().createElement(I.FlexWP, {
    direction: "column",
    gap: 4
  }, h().createElement(I.FlexWP, {
    justify: "space-between",
    align: "center",
    gap: 3
  }, h().createElement(I.FlexItemWP, {
    flex: 1
  }, h().createElement(I.HeadingWP, {
    level: 3,
    size: 16
  }, (0, b.__)("Journey Mapping", "ohmylms"))), h().createElement(I.FlexItemWP, null, h().createElement(I.FlexWP, {
    gap: 2,
    justify: "end",
    align: "center"
  }, h().createElement(I.BadgeWP, {
    isBorderLess: !0
  }, h().createElement(I.TextWP, {
    variant: "muted"
  }, (0, b.__)("Email:", "ohmylms")), h().createElement(I.TextWP, null, null == o ? void 0 : o.student_email)), (null == o ? void 0 : o.student_phone) && h().createElement(I.BadgeWP, {
    isBorderLess: !0
  }, h().createElement(I.TextWP, {
    variant: "muted"
  }, (0, b.__)("Phone:", "ohmylms")), h().createElement(I.TextWP, null, o.student_phone)), (null == o ? void 0 : o.student_whatsapp) && h().createElement(I.BadgeWP, {
    isBorderLess: !0
  }, h().createElement(I.TextWP, {
    variant: "muted"
  }, (0, b.__)("WhatsApp:", "ohmylms")), h().createElement(I.TextWP, null, o.student_whatsapp)), (null == o ? void 0 : o.student_timezone) && h().createElement(I.BadgeWP, {
    isBorderLess: !0
  }, h().createElement(I.TextWP, {
    variant: "muted"
  }, (0, b.__)("Timezone:", "ohmylms")), h().createElement(I.TextWP, null, o.student_timezone)), h().createElement(I.BadgeWP, {
    isBorderLess: !0
  }, h().createElement(I.TextWP, {
    variant: "muted"
  }, (0, b.__)("Reg. Date:", "ohmylms")), h().createElement(I.TextWP, null, sn()(null == o ? void 0 : o.enrollment_date).format("YYYY-MM-DD") || "-"))))), h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 6
  }, h().createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 4
  }, h().createElement(I.FlexWP, {
    align: "start",
    gap: 4,
    justify: "start"
  }, h().createElement(I.FlexItemWP, {
    isBlock: !0
  }, h().createElement(gU, {
    title: (0, b.__)("Enrolled Courses", "ohmylms"),
    cardNumber: (null == o ? void 0 : o.enrolled_courses) || "0",
    icon: h().createElement(zZ, null)
  })), h().createElement(I.FlexItemWP, {
    isBlock: !0
  }, h().createElement(gU, {
    title: (0, b.__)("In Progress Courses", "ohmylms"),
    cardNumber: (null == o ? void 0 : o.in_progress_courses) || "0",
    icon: h().createElement(DZ, null)
  })), h().createElement(I.FlexItemWP, {
    isBlock: !0
  }, h().createElement(gU, {
    title: (0, b.__)("Complete Courses", "ohmylms"),
    cardNumber: (null == o ? void 0 : o.completed_courses) || "0",
    icon: h().createElement(_U, null)
  })), h().createElement(I.FlexItemWP, {
    isBlock: !0
  }, h().createElement(gU, {
    title: (0, b.__)("Total Memberships", "ohmylms"),
    cardNumber: (null == o ? void 0 : o.total_membership) || "0",
    icon: h().createElement(FZ, null)
  }))))))), h().createElement(TZ, {
    studentData: o,
    loading: r
  })))))), h().createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingBottom: 5
  }))) : h().createElement(f.C5, {
    to: "/students"
  });
};
