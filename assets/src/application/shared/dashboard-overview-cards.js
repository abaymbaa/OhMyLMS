// Reconstructed application fragment. Assembled in manifest order within factory 1841.
const _G = function (e) {
    var t = e.popularCourses,
      n = e.dataLoading,
      r = e.currency,
      a = e.currency_pos,
      o = e.handleAddCourse,
      i = ((0, y.useSelect)(function (e) {
        return e(T.default).selectCourses();
      }, []), function (e, t) {
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
            if ("string" == typeof e) return bG(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bG(e, t) : void 0;
          }
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((0, g.useState)(null), 2)),
      l = i[0],
      c = i[1],
      u = (0, f.Zp)(),
      s = [{
        title: "Course Details",
        dataIndex: "courseDetails",
        key: "courseDetails",
        width: "380px",
        render: function (e, t) {
          var n = l === t.id;
          return h().createElement(yG, {
            course: t,
            isHover: n
          });
        }
      }, {
        title: "Date",
        dataIndex: "date",
        key: "date",
        render: function (e) {
          return h().createElement(I.BadgeWP, {
            variant: "secondary",
            isBorderLess: !0
          }, sn()(e).format("MMMM DD, YYYY") || "-");
        }
      }, {
        title: h().createElement(h().Fragment, null, (0, b.__)("Students ", "ohmylms"), h().createElement(I.TextWP, {
          as: "em",
          size: "12",
          variant: "muted"
        }, (0, b.__)("last 30 days", "ohmylms"))),
        dataIndex: "total_enrollment",
        key: "total_enrollment",
        render: function (e, t) {
          return h().createElement(h().Fragment, null, n && h().createElement(I.SkeletonWP, {
            paragraph: {
              rows: 1
            },
            active: !0
          }), h().createElement(I.BadgeWP, {
            variant: "secondary",
            isBorderLess: !0
          }, h().createElement(v.Link, {
            to: "/courses/".concat(null == t ? void 0 : t.id, "/students")
          }, (null == t ? void 0 : t.total_enrolled_students) || 0, " ")));
        }
      }, {
        title: h().createElement(h().Fragment, null, (0, b.__)("Total Sales ", "ohmylms"), h().createElement(I.TextWP, {
          as: "em",
          size: "12",
          variant: "muted"
        }, (0, b.__)("last 30 days", "ohmylms"))),
        dataIndex: "total_sale",
        key: "total_sale",
        render: function (e, t) {
          return h().createElement(h().Fragment, null, n && h().createElement(I.SkeletonWP, {
            paragraph: {
              rows: 1
            },
            active: !0
          }), h().createElement(I.FlexWP, {
            justify: "flex-start",
            align: "center",
            gap: 3
          }, h().createElement(I.BadgeWP, {
            variant: "secondary",
            isBorderLess: !0
          }, (null == t ? void 0 : t.total_sales_count) || 0), h().createElement("span", {
            className: "sales-increase ".concat(Number(null == t ? void 0 : t.sales_growth_rate) < 0 ? "decrease" : ""),
            style: {
              fontSize: "12px",
              color: "#33A646"
            }
          }, h().createElement("svg", {
            width: "12",
            height: "12",
            fill: "none",
            viewBox: "0 0 12 14",
            xmlns: "http://www.w3.org/2000/svg"
          }, h().createElement("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M1 6l5-5 5 5"
          }), h().createElement("path", {
            stroke: "#33A646",
            strokeLinecap: "round",
            strokeWidth: "2",
            d: "M6 13V1"
          })), " ", Math.abs(null == t ? void 0 : t.sales_growth_rate), "%")));
        }
      }, {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: function (e, t) {
          return "free" !== (null == t ? void 0 : t.price) ? h().createElement(I.BadgeWP, {
            variant: "secondary",
            isBorderLess: !0
          }, h().createElement(YH, {
            currency: r || "$",
            currency_pos: a || "left",
            price: Number((null == t ? void 0 : t.price) || "0")
          })) : h().createElement(I.BadgeWP, {
            variant: "secondary",
            isBorderLess: !0
          }, (0, b.__)("Free", "ohmylms"));
        }
      }, {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: function (e, t) {
          return h().createElement(I.DropdownMenuWP, {
            controls: [{
              title: (0, b.__)("View", "ohmylms"),
              onClick: function () {
                return window.open(null == t ? void 0 : t.url, "_blank");
              },
              icon: h().createElement(Br, null)
            }, {
              title: (0, b.__)("Edit", "ohmylms"),
              onClick: function () {
                return u("/course-edit/".concat(null == t ? void 0 : t.id));
              },
              icon: h().createElement("span", null, h().createElement(pG.A, null))
            }],
            icon: h().createElement(q.Icon, {
              icon: Ne.A
            })
          });
        }
      }];
    return h().createElement(h().Fragment, null, h().createElement(sN.A, {
      rowKey: "id",
      columns: s,
      dataSource: t || [],
      pagination: !1,
      loading: n,
      scroll: {
        x: "max-content"
      },
      onRowMouseEnter: function (e) {
        return c(null == e ? void 0 : e.id);
      },
      onRowMouseLeave: function () {
        return c(null);
      },
      locale: {
        emptyText: h().createElement(uf, {
          icon: h().createElement(df, null),
          title: (0, b.__)("No courses yet!", "ohmylms"),
          description: (0, b.__)("Start building your first course and it’ll show up here as soon as you hit publish.", "ohmylms"),
          ctaText: (0, b.__)("Add Course", "ohmylms"),
          ctaHandler: o
        })
      }
    }));
  },
  wG = function (e) {
    var t,
      n,
      r,
      a,
      o,
      i,
      l = e.data,
      c = e.dataLoading,
      u = (0, f.Zp)(),
      s = true;
    return h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 4
    }, h().createElement(I.FlexWP, {
      gap: 4,
      align: "stretch"
    }, h().createElement(I.FlexBlockWP, {
      className: "card-courses-sold"
    }, h().createElement(I.CardWP, {
      style: {
        height: "100%"
      },
      isBorderless: !0
    }, h().createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 4
    }, c ? h().createElement(I.SkeletonWP, {
      rows: 3,
      active: !0
    }) : h().createElement(h().Fragment, null, h().createElement(I.HeadingWP, {
      level: 3,
      size: "16px"
    }, h().createElement(I.FlexWP, {
      justify: "flex-start",
      align: "center",
      gap: 3
    }, (0, b.__)("Courses Sold ", "ohmylms"), h().createElement(I.TextWP, {
      as: "em",
      variant: "muted",
      size: "12"
    }, (0, b.__)("Last 30 days", "ohmylms")))), h().createElement(I.SpacerWP, {
      marginY: 4
    }, h().createElement(I.FlexWP, {
      align: "center",
      gap: 2,
      justify: "flex-start"
    }, h().createElement(I.TextWP, {
      as: "span",
      size: "14",
      variant: "muted"
    }, (0, b.__)("Total Sales", "ohmylms")), h().createElement(V.A, {
      text: "Total courses sold in the past 30 days",
      className: "ohmylms-tooltip",
      placement: "top"
    }, h().createElement(h().Fragment, null, h().createElement(Mt.A, null))), h().createElement(I.FlexItemWP, null, h().createElement(I.BadgeWP, {
      variant: 0 <= (null == l ? void 0 : l.sales_growth_rate) ? "success" : "danger",
      isBorderLess: !0
    }, 0 != (null == l ? void 0 : l.sales_growth_rate) && h().createElement("svg", {
      style: {
        transform: "rotate(".concat(0 < (null == l ? void 0 : l.sales_growth_rate) ? "0deg" : "180deg", ")")
      },
      width: "12",
      height: "14",
      fill: "none",
      viewBox: "0 0 12 14",
      xmlns: "http://www.w3.org/2000/svg"
    }, h().createElement("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M1 6l5-5 5 5"
    }), h().createElement("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M6 13V1"
    })), h().createElement("span", null, Math.abs(null == l ? void 0 : l.sales_growth_rate), "%"))))), h().createElement("span", {
      style: {
        fontSize: "48px",
        fontWeight: "500",
        display: "block",
        lineHeight: 1
      },
      className: "ohmylms-card-value"
    }, null == l ? void 0 : l.course_sold), h().createElement(I.SpacerWP, {
      marginBottom: 4
    }), h().createElement(I.ButtonWP, {
      variant: "secondary",
      onClick: function () {
        u("/orders");
      }
    }, (0, b.__)("Go to all orders", "ohmylms")))))), h().createElement(I.FlexBlockWP, {
      className: "card-students"
    }, h().createElement(I.CardWP, {
      style: {
        height: "100%"
      },
      isBorderless: !0
    }, h().createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 4
    }, c ? h().createElement(I.SkeletonWP, {
      rows: 3,
      active: !0
    }) : h().createElement(h().Fragment, null, h().createElement(I.HeadingWP, {
      level: 3,
      size: "16px"
    }, h().createElement(I.FlexWP, {
      justify: "flex-start",
      align: "center",
      gap: 3
    }, (0, b.__)("Students", "ohmylms"), h().createElement(I.TextWP, {
      as: "em",
      variant: "muted",
      size: "12"
    }, (0, b.__)("Last 30 days", "ohmylms")))), h().createElement(I.SpacerWP, {
      marginY: 4
    }, h().createElement(I.FlexWP, {
      align: "center",
      gap: 2,
      justify: "flex-start"
    }, h().createElement(I.TextWP, {
      as: "span",
      size: "14",
      variant: "muted"
    }, (0, b.__)("Enrollees", "ohmylms")), h().createElement(V.A, {
      text: "New Students in the past 30 days",
      className: "ohmylms-tooltip",
      placement: "top"
    }, h().createElement(h().Fragment, null, h().createElement(Mt.A, null))), h().createElement(I.FlexItemWP, null, h().createElement(I.BadgeWP, {
      variant: 0 <= (null == l ? void 0 : l.enrollment_growth_rate) ? "success" : "danger",
      isBorderLess: !0
    }, 0 != (null == l ? void 0 : l.enrollment_growth_rate) && h().createElement("svg", {
      style: {
        transform: "rotate(".concat(0 < (null == l ? void 0 : l.enrollment_growth_rate) ? "0deg" : "180deg", ")")
      },
      width: "12",
      height: "14",
      fill: "none",
      viewBox: "0 0 12 14",
      xmlns: "http://www.w3.org/2000/svg"
    }, h().createElement("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M1 6l5-5 5 5"
    }), h().createElement("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M6 13V1"
    })), h().createElement("span", null, Math.abs(null == l ? void 0 : l.enrollment_growth_rate), "%"))))), h().createElement("span", {
      style: {
        fontSize: "48px",
        fontWeight: "500",
        display: "block",
        lineHeight: 1
      },
      className: "ohmylms-card-value"
    }, null == l ? void 0 : l.total_enrollments), h().createElement(I.SpacerWP, {
      marginBottom: 4
    }), h().createElement(I.ButtonWP, {
      variant: "secondary",
      onClick: function () {
        u("/accounthub");
      }
    }, (0, b.__)("Go to all students", "ohmylms")))))), h().createElement(I.FlexBlockWP, null, ohmylms_params.is_communities_enabled ? h().createElement(I.CardWP, {
      style: {
        height: "100%"
      },
      isBorderless: !0
    }, h().createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 4
    }, h().createElement(I.FlexWP, {
      align: "center",
      gap: 2
    }, h().createElement(I.HeadingWP, {
      level: 3,
      size: "18px"
    }, (0, b.__)("Communities", "ohmylms"))), h().createElement(I.SpacerWP, {
      marginBottom: 4
    }), h().createElement(I.FlexWP, {
      justify: "space-between",
      align: "flex-end",
      marginBottom: 4,
      marginTop: 4,
      gap: 26
    }, h().createElement(I.FlexBlockWP, null, h().createElement(I.TextWP, {
      as: "span",
      size: "32",
      style: {
        fontWeight: 600
      }
    }, null !== (t = null == l || null === (n = l.communities) || void 0 === n ? void 0 : n.total) && void 0 !== t ? t : 0), h().createElement(I.TextWP, {
      as: "div",
      variant: "muted",
      size: "14"
    }, (null == l || null === (r = l.communities) || void 0 === r ? void 0 : r.total) <= "1" ? (0, b.__)("Space", "ohmylms") : (0, b.__)("Spaces", "ohmylms"))), h().createElement(I.FlexBlockWP, null, h().createElement(I.TextWP, {
      as: "span",
      size: "32",
      style: {
        fontWeight: 600
      }
    }, null !== (a = null == l || null === (o = l.communities) || void 0 === o ? void 0 : o.members) && void 0 !== a ? a : 0), h().createElement(I.TextWP, {
      as: "div",
      variant: "muted",
      size: "14"
    }, (null == l || null === (i = l.communities) || void 0 === i || i.members, (0, b.__)("Member", "ohmylms"))))), h().createElement(I.SpacerWP, {
      marginBottom: 8
    }), h().createElement(I.ButtonWP, {
      variant: "secondary",
      onClick: function () {
        var e;
        return window.open(null === (e = ohmylms_params) || void 0 === e || null === (e = e.community) || void 0 === e ? void 0 : e.communityPageUrl, "_blank");
      }
    }, (0, b.__)("Manage Communities", "ohmylms")))) : h().createElement(I.CardWP, {
      style: {
        height: "100%"
      },
      isBorderless: !0
    }, h().createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 4
    }, h().createElement(I.HeadingWP, {
      level: 3,
      size: "16px"
    }, (0, b.__)("What's New in LMS", "ohmylms")), h().createElement(I.SpacerWP, {
      marginBottom: 0
    }, h().createElement("p", null, (0, b.__)("Manual Student Enrollment — Admins can now enroll students directly from the Course Students tab with automatic email notifications.", "ohmylms")), h().createElement("p", null, (0, b.__)("Assignment & Quiz Submission Notifications — Admins and instructors receive email alerts when students submit work for review.", "ohmylms")), h().createElement("p", null, (0, b.__)("SCORM Support is now available in the free version — import SCORM courses without upgrading to Pro.", "ohmylms")))))))));
  };
var EG = n(4315),
  SG = n(83154),
  RG = ["children", "position"];
function xG() {
  return xG = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xG.apply(null, arguments);
}
var CG = function (e) {
  var t = e.children,
    n = e.position,
    r = void 0 === n ? "start" : n,
    a = function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = function (e, t) {
          if (null == e) return {};
          var n = {};
          for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
          return n;
        }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      }
      return a;
    }(e, RG);
  return React.createElement(React.Fragment, null, React.createElement("figure", xG({}, a, {
    style: {
      margin: "0",
      display: "flex",
      maxWidth: "100%",
      alignItems: "center",
      justifyContent: r
    }
  }), t));
};
const PG = (0, g.memo)(CG);
function OG(e) {
  return OG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, OG(e);
}
function kG(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jG(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? kG(Object(n), !0).forEach(function (t) {
      AG(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kG(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function AG(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != OG(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != OG(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == OG(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
const MG = function (e) {
  var t,
    n = e.data,
    r = e.totalCourses,
    a = e.dataLoading,
    o = e.handleAddCourse,
    i = (0, f.Zp)(),
    l = (null === (t = window.ohmylms_params) || void 0 === t ? void 0 : t.plugin_assets) + "images",
    c = "".concat(l, "/dummy-thumbnail-image.svg"),
    u = {
      background: "#2A85FF",
      borderRadius: "2px",
      width: "10px",
      height: "10px",
      display: "inline-block",
      marginInlineEnd: "10px"
    };
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0,
    style: {
      height: "100%"
    }
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    margin: 0,
    marginBottom: 0,
    style: {
      height: "100%"
    }
  }, React.createElement(I.HeadingWP, {
    level: 3,
    size: "16px"
  }, (0, b.__)("Top Course Performance", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 3
  }), a ? React.createElement(_.A, {
    rows: 3,
    active: !0
  }) : React.createElement(React.Fragment, null, n ? React.createElement(React.Fragment, null, React.createElement(PG, null, React.createElement("img", {
    src: null != n && n.image_src ? null == n ? void 0 : n.image_src : c,
    alt: null == n ? void 0 : n.title,
    style: {
      width: "100%",
      height: "170px",
      objectFit: "cover"
    }
  })), React.createElement(I.SpacerWP, {
    marginBottom: 3
  }), React.createElement(I.TextWP, {
    as: "a",
    size: 16,
    href: null == n ? void 0 : n.url,
    target: "_blank",
    weight: "700"
  }, Ge(null == n ? void 0 : n.title) || "Untitled"), React.createElement(I.SpacerWP, {
    paddingTop: 1,
    paddingBottom: 1,
    marginBottom: 0
  }), React.createElement(EG.A, {
    align: "center",
    gap: 4,
    justify: "flex-start"
  }, React.createElement(SG.A, null, React.createElement(I.BadgeWP, {
    variant: "secondary",
    isBorderLess: !0
  }, (0, b.__)("Within last 30 days", "ohmylms"))), React.createElement(SG.A, null, React.createElement(EG.A, {
    justify: "flex-start",
    gap: 2
  }, React.createElement(I.TextWP, {
    as: "span",
    size: "12",
    weight: "700"
  }, null == n ? void 0 : n.ratings), React.createElement("svg", {
    width: "12",
    height: "12",
    fill: "none",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#FFC554",
    d: "M4.81.88a1.245 1.245 0 012.38 0l.596 1.782c.173.518.637.87 1.164.88l1.814.039c1.194.025 1.687 1.603.735 2.354l-1.446 1.14c-.42.331-.597.9-.444 1.424l.525 1.806c.346 1.189-.945 2.164-1.925 1.455l-1.49-1.078a1.22 1.22 0 00-1.439 0L3.791 11.76c-.98.71-2.271-.266-1.925-1.455l.525-1.806a1.34 1.34 0 00-.444-1.424L.5 5.935c-.952-.75-.459-2.329.735-2.354l1.814-.039a1.265 1.265 0 001.164-.88L4.81.88z"
  }))))), React.createElement(I.DividerWP, {
    marginStart: 4,
    marginEnd: 4
  }), React.createElement("div", {
    className: "top-course-analytics-stats"
  }, React.createElement(EG.A, {
    align: "center",
    gap: 3,
    justify: "space-between"
  }, React.createElement(SG.A, {
    style: {
      width: "calc(100% - 14px)"
    }
  }, React.createElement("span", {
    style: u
  }), React.createElement(I.TextWP, {
    as: "span",
    size: "14",
    weight: "700",
    variant: "muted"
  }, (0, b.__)("Ranking by Course Enrolled", "ohmylms"))), React.createElement(SG.A, {
    style: {
      width: "80px",
      textAlign: "right"
    }
  }, React.createElement(I.TextWP, {
    as: "span",
    size: "14"
  }, "1 of ", r))), React.createElement(I.SpacerWP, {
    paddingTop: 1,
    paddingBottom: 1,
    marginBottom: 0
  }), React.createElement(EG.A, {
    align: "center",
    gap: 3,
    justify: "space-between"
  }, React.createElement(SG.A, {
    style: {
      width: "calc(100% - 92px)"
    }
  }, React.createElement("span", {
    style: jG(jG({}, u), {}, {
      background: "#83BF6E"
    })
  }), React.createElement(I.TextWP, {
    as: "span",
    size: "14",
    weight: "700",
    variant: "muted"
  }, (0, b.__)("Total Students", "ohmylms"))), React.createElement(SG.A, {
    style: {
      width: "80px",
      textAlign: "right"
    }
  }, React.createElement(I.TextWP, {
    as: "span",
    size: "14"
  }, (null == n ? void 0 : n.total_students) || 0))), React.createElement(I.SpacerWP, {
    paddingTop: 1,
    paddingBottom: 1,
    marginBottom: 0
  }), React.createElement(EG.A, {
    align: "center",
    gap: 3,
    justify: "space-between"
  }, React.createElement(SG.A, {
    style: {
      width: "calc(100% - 92px)"
    }
  }, React.createElement("span", {
    style: jG(jG({}, u), {}, {
      background: "#27B0E7"
    })
  }), React.createElement(I.TextWP, {
    as: "span",
    size: "14",
    weight: "700",
    variant: "muted"
  }, (0, b.__)("Course Completion", "ohmylms"))), React.createElement(SG.A, {
    style: {
      width: "80px",
      textAlign: "right"
    }
  }, React.createElement(I.TextWP, {
    as: "span",
    size: "14"
  }, (null == n ? void 0 : n.total_completed) || 0)))), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    marginTop: 5
  }, React.createElement(I.ButtonWP, {
    variant: "primary",
    title: (0, b.__)("Go to course analytics", "ohmylms"),
    onClick: function () {
      i("/course/".concat(null == n ? void 0 : n.id, "/report"));
    }
  }, (0, b.__)("Go to course analytics", "ohmylms")))) : React.createElement(I.CardWP, {
    variant: "secondary",
    isBorderless: !0,
    style: {
      height: "calc(100% - 40px)"
    }
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 7.5,
    style: {
      height: "100%"
    }
  }, React.createElement(EG.A, {
    justify: "center",
    align: "center",
    gap: 6,
    direction: "column"
  }, React.createElement("div", {
    className: "icon"
  }, React.createElement("svg", {
    width: "145",
    height: "139",
    fill: "none",
    viewBox: "0 0 145 139",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#7A8B9A",
    fillOpacity: ".09",
    d: "M136.552 105.819c8.605-6.596 13.401-36.3-5.373-66.087C112.406 9.944 91.093-1.93 70.742.252 50.39 2.434 43.763 14.825 34.693 17.18c-9.07 2.354-23.613-1.057-27.986 14.575-4.372 15.631 10.817 27.752 7.97 35.2C11.827 74.4 8.734 68.03 2.56 78.638c-6.175 10.609-2.865 37.568 28.811 51.136 31.677 13.568 68.94 11.226 77.631-.886 8.691-12.112-3.013-17.194 3.515-19.976 6.528-2.783 15.429 3.502 24.034-3.094z"
  }), React.createElement("path", {
    stroke: "#000D25",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.366",
    d: "M20.47 30.456l12.22 1.233m86.981-1.233l-12.22 1.233M33.126 13.418l8.857 5.565m65.032-5.565l-8.857 5.565"
  }), React.createElement("path", {
    fill: "#000D25",
    d: "M33.97 52.523l31.848 12.768c3.085 1.237 4.628 1.855 6.248 1.855s3.164-.618 6.249-1.855l31.849-12.767c1.678-.673 2.517-1.01 2.517-1.588a.563.563 0 00-.04-.208c-.184-.461-1.01-.792-2.477-1.38L78.315 36.58c-3.085-1.237-4.63-1.856-6.25-1.856-1.619 0-3.162.618-6.247 1.855L33.969 49.347c-1.467.589-2.293.92-2.477 1.38a.554.554 0 00-.04.209c0 .578.84.915 2.517 1.587zm80.155 27.917L90.281 90c.807.552 2.706 1.859 3.846 2.665 1.425 1.009 2.598 1.15 5.365 0 2.213-.92 10.677-4.248 14.633-5.796V80.44z"
  }), React.createElement("path", {
    fill: "#000D25",
    d: "M72.066 67.146L64.74 85.414c-.898 2.158-1.527 3.673-2.227 4.686.597.235 2.07.804 3.184 1.208 1.394.504 3.456-.227 3.949-2.29.492-2.061 2.419-10.083 2.419-10.083v-11.79zm-6.248 48.724c3.085 1.237 4.628 1.855 6.248 1.855v-4.885c0 3.03-3.619 4.084-6.248 3.03z"
  }), React.createElement("path", {
    fill: "#000D25",
    d: "M72.066 117.725c1.62 0 3.164-.618 6.249-1.855-2.686 1.077-6.25 0-6.25-3.03v4.885z"
  }), React.createElement("path", {
    stroke: "#000D25",
    strokeLinecap: "round",
    strokeWidth: "1.214",
    d: "M65.818 115.87l-25.235-10.116c-5.122-2.053-7.683-3.08-9.129-5.221-1.446-2.14-1.446-4.904-1.446-10.433v-6.08m35.81 31.85c3.085 1.237 4.628 1.855 6.248 1.855m-6.248-1.855c2.63 1.054 6.248 0 6.248-3.03m0 4.885c1.62 0 3.164-.618 6.249-1.855m-6.25 1.855v-4.885m0 4.885v-4.885m0-45.694c-1.619 0-3.162-.618-6.247-1.855L33.969 52.523c-1.678-.672-2.517-1.009-2.517-1.588 0-.072.013-.141.04-.207m40.574 16.418L64.74 85.414c-1.505 3.62-2.258 5.43-3.848 6.1-1.59.67-3.407-.059-7.04-1.515l-26.07-10.451c-3.888-1.558-5.831-2.337-6.496-4.03-.666-1.694.226-3.592 2.01-7.388l7.866-16.745.329-.657m40.574 16.418c1.62 0 3.164-.618 6.249-1.855l31.849-12.767c1.678-.673 2.517-1.01 2.517-1.588a.563.563 0 00-.04-.208M72.066 67.146l7.326 18.268c1.505 3.62 2.258 5.431 3.848 6.1 1.59.67 3.407-.058 7.04-1.515l23.845-9.559m-42.06-13.294v45.694M31.493 50.728c.184-.461 1.01-.792 2.477-1.38L65.818 36.58c3.085-1.236 4.628-1.855 6.248-1.855s3.164.619 6.249 1.856l31.849 12.767c1.467.588 2.293.919 2.477 1.38M78.315 115.87l25.235-10.116c5.122-2.053 7.683-3.079 9.129-5.22 1.446-2.141 1.446-4.905 1.446-10.434v-9.66m-35.81 35.43c-2.686 1.077-6.25 0-6.25-3.03m42.06-32.4l2.225-.892c3.887-1.558 5.831-2.337 6.496-4.03.666-1.694-.226-3.591-2.009-7.387l-7.867-16.746-.329-.657"
  }), React.createElement("circle", {
    cx: "70.072",
    cy: "32.303",
    r: "16.303",
    fill: "var(--ohmylms-primary-color)"
  }), React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M69.93 19.119c-4.999 0-9.296 3.008-11.178 7.315a.567.567 0 11-1.039-.454c2.056-4.705 6.752-7.995 12.217-7.995a.567.567 0 110 1.134z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M70.918 23.066l2.293 4.86a.982.982 0 00.292.363.926.926 0 00.421.179l5.125.773a.93.93 0 01.47.224.996.996 0 01.288.45c.055.174.062.36.02.54a1.005 1.005 0 01-.253.47l-3.703 3.782a.997.997 0 00-.24.404 1.032 1.032 0 00-.032.474l.876 5.34c.03.182.01.37-.056.541a.987.987 0 01-.322.43.913.913 0 01-1 .075l-4.583-2.528a.916.916 0 00-.883 0l-4.584 2.527a.913.913 0 01-.998-.076.987.987 0 01-.32-.429 1.034 1.034 0 01-.057-.54l.874-5.34a1.033 1.033 0 00-.032-.474.998.998 0 00-.24-.404l-3.703-3.782a1.005 1.005 0 01-.254-.47 1.036 1.036 0 01.02-.54.995.995 0 01.288-.45.93.93 0 01.47-.224l5.126-.778a.928.928 0 00.42-.18.983.983 0 00.293-.363l2.293-4.859c.08-.163.201-.3.35-.395a.918.918 0 01.992.003c.15.096.27.234.349.397z"
  }), React.createElement("g", {
    filter: "url(#filter0_f_2323_915)"
  }, React.createElement("ellipse", {
    cx: "69.969",
    cy: "50.356",
    fill: "#6B6B6B",
    fillOpacity: ".39",
    rx: "14.783",
    ry: "3.168"
  })), React.createElement("defs", null, React.createElement("filter", {
    id: "filter0_f_2323_915",
    width: "63.054",
    height: "39.823",
    x: "38.442",
    y: "30.444",
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, React.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), React.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), React.createElement("feGaussianBlur", {
    result: "effect1_foregroundBlur_2323_915",
    stdDeviation: "8.372"
  }))))), React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, React.createElement(I.HeadingWP, {
    level: 6,
    size: "14px",
    align: "center"
  }, (0, b.__)("Your top course could be just one click away!", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 2
  }), React.createElement(I.TextWP, {
    variant: "muted",
    size: "12px",
    align: "center"
  }, (0, b.__)("Create a course that inspires, engages, and climbs to the top — we’ll spotlight your success right here.", "ohmylms")), 0 == r && React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    marginTop: 6
  }), React.createElement(I.FlexBlockWP, null, React.createElement(lf, {
    label: (0, b.__)("Add Course", "ohmylms"),
    onClick: o
  })))))))))));
};
