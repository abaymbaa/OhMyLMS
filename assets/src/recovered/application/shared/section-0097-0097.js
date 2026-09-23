// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function GH(e) {
  e.onSave, e.setActiveStep, e.activeStep;
  var t = (0, y.useDispatch)(T.default),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    r = (0, L.useFeatureAccess)("funnel"),
    a = LH((0, g.useState)([{
      label: (0, b.__)("Select type", "ohmylms"),
      value: ""
    }, {
      label: (0, b.__)("Upsell", "ohmylms"),
      value: "upsell"
    }, {
      label: (0, b.__)("Downsell", "ohmylms"),
      value: "downsell"
    }]), 1)[0],
    o = LH((0, g.useState)([{
      label: (0, b.__)("Select action", "ohmylms"),
      value: ""
    }, {
      label: (0, b.__)("Next Step", "ohmylms"),
      value: "next_step"
    }, {
      label: (0, b.__)("Final Thank You Page", "ohmylms"),
      value: "thank_you_page"
    }]), 1)[0],
    i = LH((0, g.useState)([{
      label: (0, b.__)("No discount", "ohmylms"),
      value: "no_discount",
      disabled: !r
    }, {
      label: (0, b.__)("Discount percentage", "ohmylms"),
      value: "percentage",
      disabled: !r
    }, {
      label: (0, b.__)("Discount amount", "ohmylms"),
      value: "amount",
      disabled: !r
    }]), 1)[0],
    c = LH((0, g.useState)([{
      label: (0, b.__)("Select offer type", "ohmylms"),
      value: ""
    }, {
      label: (0, b.__)("Course", "ohmylms"),
      value: "course"
    }, {
      label: (0, b.__)("Membership", "ohmylms"),
      value: "membership"
    }]), 1)[0],
    u = LH((0, g.useState)((null == n ? void 0 : n.funnel_steps) || []), 2),
    s = u[0],
    d = u[1],
    m = LH((0, g.useState)(null), 2),
    p = m[0],
    f = m[1];
  (0, g.useEffect)(function () {
    s.length > 0 && !p ? f(s[0].step_id) : 0 === s.length && f(null);
  }, [s, p]);
  var v = function () {
      var e = BH(DH().m(function e(t) {
        var n, r, a;
        return DH().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, e.n = 1, l()({
                path: "/creator-lms/v1/page/search?value=".concat(t),
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 1:
              return n = e.v, r = Object.entries(n || {}).map(function (e) {
                var t = LH(e, 2);
                return {
                  value: t[0],
                  label: t[1]
                };
              }), e.a(2, r);
            case 2:
              return e.p = 2, a = e.v, console.error("Error fetching pages:", a), e.a(2, []);
          }
        }, e, null, [[0, 2]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    _ = function () {
      var e = BH(DH().m(function e(t) {
        var n, r;
        return DH().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 4;
                break;
              }
              return e.n = 1, v(t || "");
            case 1:
              if (0 !== (n = e.v).length) {
                e.n = 2;
                break;
              }
              return e.a(2, []);
            case 2:
              return r = null == n ? void 0 : n.map(function (e) {
                return {
                  label: Ge(null == e ? void 0 : e.label),
                  value: null == e ? void 0 : e.value
                };
              }), e.a(2, r);
            case 3:
              e.n = 5;
              break;
            case 4:
              return e.a(2, []);
            case 5:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    w = function () {
      var e = BH(DH().m(function e(t) {
        var n, r, a;
        return DH().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, e.n = 1, l()({
                path: "/creator-lms/v1/courses?search=".concat(t),
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 1:
              return n = e.v, r = n.map(function (e) {
                return {
                  value: null == e ? void 0 : e.id,
                  label: null == e ? void 0 : e.name
                };
              }), e.a(2, r);
            case 2:
              return e.p = 2, a = e.v, console.error("Error fetching courses:", a), e.a(2, []);
          }
        }, e, null, [[0, 2]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    E = function () {
      var e = BH(DH().m(function e(t) {
        var n, r;
        return DH().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 4;
                break;
              }
              return e.n = 1, w(t);
            case 1:
              if (0 !== (n = e.v).length) {
                e.n = 2;
                break;
              }
              return e.a(2, []);
            case 2:
              return r = null == n ? void 0 : n.map(function (e) {
                return {
                  label: Ge(null == e ? void 0 : e.label),
                  value: null == e ? void 0 : e.value
                };
              }), e.a(2, r);
            case 3:
              e.n = 5;
              break;
            case 4:
              return e.a(2, []);
            case 5:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    S = function () {
      var e = BH(DH().m(function e(t) {
        var n, r, a;
        return DH().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, e.n = 1, l()({
                path: "/creator-lms/v1/membership?search=".concat(t),
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 1:
              return n = e.v, r = n.map(function (e) {
                return {
                  value: null == e ? void 0 : e.id,
                  label: null == e ? void 0 : e.name
                };
              }), e.a(2, r);
            case 2:
              return e.p = 2, a = e.v, console.error("Error fetching memberships:", a), e.a(2, []);
          }
        }, e, null, [[0, 2]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    R = function () {
      var e = BH(DH().m(function e(t) {
        var n, r;
        return DH().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 4;
                break;
              }
              return e.n = 1, S(t);
            case 1:
              if (0 !== (n = e.v).length) {
                e.n = 2;
                break;
              }
              return e.a(2, []);
            case 2:
              return r = null == n ? void 0 : n.map(function (e) {
                return {
                  label: Ge(null == e ? void 0 : e.label),
                  value: null == e ? void 0 : e.value
                };
              }), e.a(2, r);
            case 3:
              e.n = 5;
              break;
            case 4:
              return e.a(2, []);
            case 5:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    x = function () {
      return (0, b.__)("Please enter 3 or more characters...", "ohmylms");
    },
    C = function () {
      return (0, b.__)("Please enter 3 or more characters...", "ohmylms");
    },
    P = function () {
      return (0, b.__)("Please enter 3 or more characters...", "ohmylms");
    },
    O = function () {
      if (r) {
        var e = {
            step_id: "step_".concat(s.length + 1),
            step_type: "",
            offer_type: "",
            course_id: "",
            membership_id: "",
            discount_type: "no_discount",
            discount_value: "",
            offer_page_id: "",
            condition: {
              accepted: {
                action: ""
              },
              declined: {
                action: ""
              }
            }
          },
          t = [].concat(function (e) {
            return function (e) {
              if (Array.isArray(e)) return HH(e);
            }(e) || function (e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || VH(e) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }(s), [e]);
        d(t), j(t), f(e.step_id);
      }
    },
    k = function (e, t, n) {
      if (r) {
        var a = s.map(function (r) {
          return r.step_id === e ? FH(FH({}, r), {}, "acceptedAction" === t ? {
            condition: FH(FH({}, r.condition), {}, {
              accepted: {
                action: n
              }
            })
          } : "declinedAction" === t ? {
            condition: FH(FH({}, r.condition), {}, {
              declined: {
                action: n
              }
            })
          } : "course_id" === t ? NH(NH({}, t, (null == n ? void 0 : n.value) || n), "course_name", (null == n ? void 0 : n.label) || "") : "membership_id" === t ? NH(NH({}, t, (null == n ? void 0 : n.value) || n), "membership_name", (null == n ? void 0 : n.label) || "") : "offer_page_id" === t ? NH(NH({}, t, (null == n ? void 0 : n.value) || n), "page_name", (null == n ? void 0 : n.label) || "") : "offer_type" === t ? NH(NH(NH(NH(NH({}, t, n), "course_id", ""), "course_name", ""), "membership_id", ""), "membership_name", "") : NH({}, t, n)) : r;
        });
        d(a), j(a);
      }
    },
    j = function (e) {
      r && t.setCourse(FH(FH({}, n), {}, {
        funnel_steps: e
      }));
    },
    A = function () {
      return s.find(function (e) {
        return e.step_id === p;
      });
    };
  return h().createElement(I.ContainerWP, null, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingY: 10
  }, h().createElement(I.CardWP, {
    variant: "secondary",
    isBorderless: !0,
    minHeight: "calc(100vh - 200px)"
  }, h().createElement(I.SpacerWP, {
    padding: 10,
    marginBottom: 0
  }, h().createElement(I.FlexWP, {
    justify: "space-between",
    align: "center",
    style: {
      marginBottom: "24px"
    }
  }, h().createElement(I.FlexItemWP, null, h().createElement(I.HeadingWP, {
    level: 3,
    style: {
      margin: 0
    }
  }, (0, b.__)("One-Click Offer Settings", "ohmylms")), h().createElement(I.TextWP, {
    style: {
      color: "#666",
      margin: "4px 0 0 0",
      fontSize: "14px"
    }
  }, (0, b.__)("Configure your funnel sequence to show additional offers after checkout", "ohmylms")))), 0 === s.length ? h().createElement(I.CardWP, {
    variant: "outline",
    className: "funnel-empty-state",
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    padding: 8
  }, h().createElement(I.FlexWP, {
    direction: "column",
    align: "center",
    gap: 3
  }, h().createElement(I.FlexItemWP, null, h().createElement("div", {
    className: "funnel-empty-icon"
  }, h().createElement(df, null))), h().createElement(I.FlexItemWP, null, h().createElement(I.HeadingWP, {
    level: 4,
    style: {
      margin: 0,
      textAlign: "center"
    }
  }, (0, b.__)("No funnel steps yet!", "ohmylms"))), h().createElement(I.FlexItemWP, null, h().createElement(I.TextWP, {
    style: {
      color: "#666",
      textAlign: "center",
      margin: 0
    }
  }, (0, b.__)("Boost revenue with upsells and downsells after course purchase.", "ohmylms"))), h().createElement(I.FlexItemWP, null, h().createElement(I.ButtonWP, {
    variant: "primary",
    icon: h().createElement(q.Icon, {
      icon: $e.A,
      width: "24px",
      height: "24px"
    }),
    onClick: O,
    disabled: !r
  }, (0, b.__)("Add New Step", "ohmylms")))))) : h().createElement(I.FlexWP, {
    gap: 6,
    align: "flex-start"
  }, h().createElement(I.FlexItemWP, {
    style: {
      minWidth: "350px",
      maxWidth: "400px"
    }
  }, h().createElement(I.CardWP, {
    variant: "outline",
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    padding: 4
  }, h().createElement(I.HeadingWP, {
    level: 4,
    style: {
      margin: "0 0 16px 0"
    }
  }, (0, b.__)("Active Steps", "ohmylms"), " (", s.length, ")"), h().createElement(I.FlexWP, {
    direction: "column",
    gap: 2
  }, s.map(function (e, t) {
    var n = function (e, t) {
        var n,
          r = e.step_type ? (null === (n = a.find(function (t) {
            return t.value === e.step_type;
          })) || void 0 === n ? void 0 : n.label) || e.step_type : (0, b.__)("No step selected", "ohmylms"),
          o = (0, b.__)("No offer selected", "ohmylms");
        return "course" === e.offer_type && e.course_name ? o = e.course_name : "membership" === e.offer_type && e.membership_name && (o = e.membership_name), {
          stepNumber: t + 1,
          stepType: r,
          courseName: o
        };
      }(e, t),
      r = p === e.step_id;
    return h().createElement(I.FlexItemWP, {
      key: e.step_id
    }, h().createElement(I.CardWP, {
      variant: r ? "primary" : "outline",
      className: "funnel-step-summary ".concat(r ? "selected" : ""),
      style: {
        cursor: "pointer",
        transition: "all 0.2s ease"
      },
      onClick: function () {
        f(e.step_id);
      }
    }, h().createElement(I.SpacerWP, {
      padding: 3
    }, h().createElement(I.FlexWP, {
      direction: "column",
      gap: 1
    }, h().createElement(I.FlexWP, {
      justify: "space-between",
      align: "center"
    }, h().createElement(I.HeadingWP, {
      level: 6,
      style: {
        margin: 0,
        fontSize: "14px",
        fontWeight: "600"
      }
    }, (0, b.__)("Step", "ohmylms"), " ", n.stepNumber), s.length > 0 && h().createElement(I.ButtonWP, {
      variant: "text",
      size: "small",
      icon: h().createElement(We, null),
      onClick: function (t) {
        var n, r, a;
        t.stopPropagation(), n = e.step_id, r = s.filter(function (e) {
          return e.step_id !== n;
        }), a = r.map(function (e, t) {
          return FH(FH({}, e), {}, {
            step_id: "step_".concat(t + 1)
          });
        }), d(a), j(a), p === n && (a.length > 0 ? f(a[0].step_id) : f(null));
      },
      style: {
        minWidth: "auto",
        padding: "2px 4px",
        height: "20px",
        color: "#dc2626"
      }
    })), h().createElement(I.TextWP, {
      style: {
        margin: 0,
        fontSize: "12px",
        color: "#666",
        fontWeight: "500"
      }
    }, n.stepType), h().createElement(I.TextWP, {
      style: {
        margin: 0,
        fontSize: "11px",
        color: "#888",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, n.courseName)))));
  }), h().createElement(I.FlexItemWP, null, h().createElement(I.ButtonWP, {
    variant: "outline",
    icon: h().createElement(q.Icon, {
      icon: $e.A,
      width: "24px",
      height: "24px"
    }),
    onClick: O,
    style: {
      width: "100%",
      justifyContent: "center",
      padding: "12px",
      borderStyle: "dashed",
      color: "var(--wp-components-color-accent)",
      borderColor: "#C8D2E9"
    },
    disabled: !r
  }, (0, b.__)("Add New Step", "ohmylms"))))))), h().createElement(I.FlexItemWP, {
    flex: "1"
  }, p && A() ? h().createElement(I.CardWP, {
    variant: "outline",
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    padding: 4
  }, function (e, t) {
    var n = A(),
      l = s.findIndex(function (e) {
        return e.step_id === p;
      });
    return h().createElement(I.FlexWP, {
      direction: "column",
      gap: 4
    }, h().createElement(I.FlexItemWP, null, h().createElement(I.HeadingWP, {
      level: 4,
      style: {
        margin: 0
      }
    }, (0, b.__)("Step", "ohmylms"), " ", l + 1, " ", (0, b.__)("Settings", "ohmylms"))), h().createElement(I.CardWP, {
      isBorderless: !0,
      padding: "16px",
      variant: "secondary"
    }, h().createElement(I.FlexItemWP, null, h().createElement(I.FlexWP, {
      gap: 8,
      align: "flex-start"
    }, h().createElement(I.FlexItemWP, {
      flex: "2"
    }, h().createElement(I.HeadingWP, {
      level: 4
    }, (0, b.__)("Step Type", "ohmylms")), h().createElement(I.SpacerWP, {
      marginBottom: 1
    }), h().createElement(I.TextWP, null, (0, b.__)("Choose the type of offer for this funnel step.", "ohmylms"))), h().createElement(I.FlexItemWP, {
      flex: "2"
    }, h().createElement(I.SelectWP, {
      value: n.step_type,
      onChange: function (e) {
        return k(n.step_id, "step_type", e);
      },
      options: a,
      placeholder: (0, b.__)("Select type", "ohmylms"),
      disabled: !r
    })))), h().createElement(I.SpacerWP, {
      marginBottom: 4
    }), h().createElement(I.FlexItemWP, null, h().createElement(I.FlexWP, {
      gap: 8,
      align: "flex-start"
    }, h().createElement(I.FlexItemWP, {
      flex: "2"
    }, h().createElement(I.HeadingWP, {
      level: 4
    }, (0, b.__)("Offer Page", "ohmylms")), h().createElement(I.SpacerWP, {
      marginBottom: 1
    }), h().createElement(I.TextWP, null, (0, b.__)("Choose the page template for this offer.", "ohmylms"))), h().createElement(I.FlexItemWP, {
      flex: "2"
    }, h().createElement(Jt.A, {
      className: "omlms-single-select omlms-search-select auto-height",
      classNamePrefix: "omlms-react-select",
      placeholder: (0, b.__)("Type to search pages...", "ohmylms"),
      value: n.offer_page_id && n.page_name ? {
        value: n.offer_page_id,
        label: n.page_name
      } : null,
      onChange: function (e) {
        return k(n.step_id, "offer_page_id", e);
      },
      loadOptions: _,
      noOptionsMessage: C,
      isClearable: !0,
      key: "page-".concat(n.step_id),
      isDisabled: !r
    }))))), h().createElement(I.CardWP, {
      isBorderless: !0,
      padding: "16px",
      variant: "secondary"
    }, h().createElement(I.FlexItemWP, null, h().createElement(I.FlexWP, {
      gap: 8,
      align: "flex-start"
    }, h().createElement(I.FlexItemWP, {
      flex: "2"
    }, h().createElement(I.HeadingWP, {
      level: 4
    }, (0, b.__)("Offer Type", "ohmylms")), h().createElement(I.SpacerWP, {
      marginBottom: 1
    }), h().createElement(I.TextWP, null, (0, b.__)("Choose what type of product to offer.", "ohmylms"))), h().createElement(I.FlexItemWP, {
      flex: "2"
    }, h().createElement(I.SelectWP, {
      value: n.offer_type || "",
      onChange: function (e) {
        return k(n.step_id, "offer_type", e);
      },
      options: c,
      placeholder: (0, b.__)("Select offer type", "ohmylms"),
      disabled: !r
    })))), "course" === n.offer_type && h().createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 4
    }, h().createElement(I.FlexItemWP, null, h().createElement(I.FlexWP, {
      gap: 8,
      align: "flex-start"
    }, h().createElement(I.FlexItemWP, {
      flex: "2"
    }, h().createElement(I.HeadingWP, {
      level: 4
    }, (0, b.__)("Course", "ohmylms")), h().createElement(I.SpacerWP, {
      marginBottom: 1
    }), h().createElement(I.TextWP, null, (0, b.__)("Select the course to offer in this step.", "ohmylms"))), h().createElement(I.FlexItemWP, {
      flex: "2"
    }, h().createElement(Jt.A, {
      className: "omlms-single-select omlms-search-select auto-height",
      classNamePrefix: "omlms-react-select",
      placeholder: (0, b.__)("Type to search courses...", "ohmylms"),
      value: n.course_id && n.course_name ? {
        value: n.course_id,
        label: n.course_name
      } : null,
      onChange: function (e) {
        return k(n.step_id, "course_id", e);
      },
      loadOptions: E,
      noOptionsMessage: x,
      isClearable: !0,
      key: "course-".concat(n.step_id),
      disabled: !r
    }))))), "membership" === n.offer_type && h().createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 4
    }, h().createElement(I.FlexItemWP, null, h().createElement(I.FlexWP, {
      gap: 8,
      align: "flex-start"
    }, h().createElement(I.FlexItemWP, {
      flex: "2"
    }, h().createElement(I.HeadingWP, {
      level: 4
    }, (0, b.__)("Membership", "ohmylms")), h().createElement(I.SpacerWP, {
      marginBottom: 1
    }), h().createElement(I.TextWP, null, (0, b.__)("Select the membership plan to offer in this step.", "ohmylms"))), h().createElement(I.FlexItemWP, {
      flex: "2"
    }, h().createElement(Jt.A, {
      className: "omlms-single-select omlms-search-select auto-height",
      classNamePrefix: "omlms-react-select",
      placeholder: (0, b.__)("Type to search memberships...", "ohmylms"),
      value: n.membership_id && n.membership_name ? {
        value: n.membership_id,
        label: n.membership_name
      } : null,
      onChange: function (e) {
        return k(n.step_id, "membership_id", e);
      },
      loadOptions: R,
      noOptionsMessage: P,
      isClearable: !0,
      key: "membership-".concat(n.step_id),
      isDisabled: !r
    })))))), h().createElement(I.CardWP, {
      isBorderless: !0,
      padding: "16px",
      variant: "secondary",
      className: "omlms-funnel-discount-section"
    }, h().createElement(I.FlexItemWP, null, h().createElement(I.FlexWP, {
      gap: 1,
      align: "flex-start"
    }, h().createElement(I.FlexItemWP, {
      flex: "1"
    }, h().createElement(I.HeadingWP, {
      level: 4
    }, (0, b.__)("Discount", "ohmylms")), h().createElement(I.SpacerWP, {
      marginBottom: 1
    }), h().createElement(I.TextWP, null, (0, b.__)("Configure discount options for this offer.", "ohmylms"))), h().createElement(I.FlexItemWP, {
      flex: "2"
    }, h().createElement(I.FlexWP, {
      direction: "column",
      gap: 3
    }, h().createElement(I.RadioGroupWP, {
      options: i,
      value: n.discount_type || "no_discount",
      onChange: function (e) {
        return k(n.step_id, "discount_type", e);
      },
      isBlock: !0,
      optionType: "button",
      buttonStyle: "outline"
    }), ("percentage" === n.discount_type || "amount" === n.discount_type) && h().createElement(I.FlexWP, {
      justify: "flex-end",
      align: "center"
    }, h().createElement(I.FlexWP, {
      align: "center",
      gap: 1,
      style: {
        maxWidth: "120px"
      }
    }, h().createElement(I.FlexItemWP, {
      flex: "1"
    }, h().createElement(I.InputNumberWP, {
      value: n.discount_value || "",
      onChange: function (e) {
        return k(n.step_id, "discount_value", e);
      },
      placeholder: "0",
      min: 0,
      max: "percentage" === n.discount_type ? 100 : void 0,
      suffix: "percentage" === (null == n ? void 0 : n.discount_type) ? "%" : "",
      disabled: !r
    }))))))))), h().createElement(I.FlexItemWP, null, h().createElement(I.CardWP, {
      variant: "secondary",
      isBorderless: !0,
      className: "condition-settings"
    }, h().createElement(I.SpacerWP, {
      padding: 3
    }, h().createElement(I.FlexWP, {
      direction: "column",
      gap: 3
    }, h().createElement(I.FlexItemWP, null, h().createElement(I.HeadingWP, {
      level: 4
    }, (0, b.__)("Conditional Step Actions", "ohmylms"))), h().createElement(I.FlexItemWP, null, h().createElement(I.FlexWP, {
      gap: 4,
      wrap: !0
    }, h().createElement(I.FlexItemWP, {
      flex: "1"
    }, h().createElement(I.FlexWP, {
      direction: "column",
      gap: 1
    }, h().createElement(I.TextWP, null, (0, b.__)("When the Offer is Accepted", "ohmylms")), h().createElement(I.SelectWP, {
      value: (null === (e = n.condition) || void 0 === e || null === (e = e.accepted) || void 0 === e ? void 0 : e.action) || "",
      onChange: function (e) {
        return k(n.step_id, "acceptedAction", e);
      },
      options: o,
      placeholder: (0, b.__)("Select action", "ohmylms"),
      disabled: !r
    }))), h().createElement(I.FlexItemWP, {
      flex: "1"
    }, h().createElement(I.FlexWP, {
      direction: "column",
      gap: 1
    }, h().createElement(I.TextWP, null, (0, b.__)("When the Offer is Declined", "ohmylms")), h().createElement(I.SelectWP, {
      value: (null === (t = n.condition) || void 0 === t || null === (t = t.declined) || void 0 === t ? void 0 : t.action) || "",
      onChange: function (e) {
        return k(n.step_id, "declinedAction", e);
      },
      options: o,
      placeholder: (0, b.__)("Select action", "ohmylms"),
      disabled: !r
    }))))))))));
  }())) : h().createElement(I.CardWP, {
    variant: "outline",
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    padding: 8
  }, h().createElement(I.FlexWP, {
    direction: "column",
    align: "center",
    gap: 3
  }, h().createElement(I.FlexItemWP, null, h().createElement(I.HeadingWP, {
    level: 5,
    style: {
      margin: 0,
      textAlign: "center",
      color: "#666"
    }
  }, (0, b.__)("Select a step to edit", "ohmylms"))), h().createElement(I.FlexItemWP, null, h().createElement(I.TextWP, {
    style: {
      color: "#888",
      textAlign: "center",
      margin: 0
    }
  }, (0, b.__)("Choose a step from the left panel to configure its settings", "ohmylms"))))))))))));
}

var UH = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "$",
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "left",
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (0, g.useMemo)(function () {
      var a = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(n);
      return "right" === t ? React.createElement("span", {
        style: {
          display: "inline-flex",
          flexWrap: "wrap",
          textDecoration: r ? "line-through" : "none"
        }
      }, a, React.createElement("span", null, e)) : "right_space" === t ? React.createElement("span", {
        style: {
          display: "inline-flex",
          flexWrap: "wrap",
          gap: "6px",
          textDecoration: r ? "line-through" : "none"
        }
      }, a, React.createElement("span", null, e)) : "left_space" === t ? React.createElement("span", {
        style: {
          display: "inline-flex",
          flexWrap: "wrap",
          gap: "6px",
          textDecoration: r ? "line-through" : "none"
        }
      }, React.createElement("span", null, e), a) : React.createElement("span", {
        style: {
          display: "inline-flex",
          flexWrap: "wrap",
          textDecoration: r ? "line-through" : "none"
        }
      }, React.createElement("span", null, e), a);
    }, [e, t, n]);
  },
  qH = function (e) {
    var t = e.currency,
      n = e.currency_pos,
      r = e.price,
      a = e.del;
    return UH(t, n, r, void 0 !== a && a);
  };

const YH = (0, g.memo)(qH);

function QH(e, t) {
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
  }(e, t) || ZH(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function ZH(e, t) {
  if (e) {
    if ("string" == typeof e) return $H(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $H(e, t) : void 0;
  }
}

function $H(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
