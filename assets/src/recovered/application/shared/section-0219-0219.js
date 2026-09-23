// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Une = function (e) {
    var t = e.onTabChange,
      n = e.handleBack,
      r = (0, y.useDispatch)(T.default),
      a = (0, y.useSelect)(function (e) {
        return e(T.default).getSetupWizardData();
      }, []),
      o = (0, y.useSelect)(function (e) {
        return e(T.default).getCurrencySettings();
      }, []),
      i = (0, y.useSelect)(function (e) {
        return e(T.default).getDesignSettings();
      }, []),
      c = Vne((0, g.useState)([]), 2),
      u = c[0],
      s = c[1],
      d = Vne((0, g.useState)(!1), 2),
      m = d[0],
      p = d[1],
      f = Vne((0, g.useState)([]), 2),
      v = f[0],
      h = f[1],
      _ = Vne((0, g.useState)("selection"), 2),
      w = _[0],
      E = _[1],
      S = Vne((0, g.useState)(0), 2),
      R = S[0],
      x = S[1],
      C = Vne((0, g.useState)(-1), 2),
      P = (C[0], C[1]),
      O = (0, g.useMemo)(function () {
        var e,
          t,
          n = null == a ? void 0 : a.selectedPlatform,
          r = {
            label: n,
            icon: (null === (e = window.creator_lms_params) || void 0 === e ? void 0 : e.plugin_assets) + "images/creator-logo.svg"
          },
          o = (null === (t = window.creator_lms_params) || void 0 === t ? void 0 : t.plugin_assets) + "images/";
        return "tutorLMS" === n ? r = {
          label: "Tutor LMS",
          icon: o + "tutor_icon.svg"
        } : "learnDash" === n ? r = {
          label: "LearnDash",
          icon: o + "learndash_icon.svg"
        } : "learnPress" === n ? r = {
          label: "LearnPress",
          icon: o + "learnpress_icon.svg"
        } : "masterStudy" === n && (r = {
          label: "MasterStudy LMS",
          icon: o + "masterstudy_icon.svg"
        }), r;
      }, [null == a ? void 0 : a.selectedPlatform]);
    (0, g.useEffect)(function () {
      var e = function () {
        var e = Lne(Wne().m(function e() {
          var t, n;
          return Wne().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if (null != a && a.selectedPlatform) {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                return p(!0), e.p = 2, e.n = 3, l()({
                  path: "/creator-lms/v1/migrations/".concat(a.selectedPlatform, "/courses")
                });
              case 3:
                null != (t = e.v) && t.courses && (s(t.courses), h(t.courses.map(function (e) {
                  return e.id;
                }))), e.n = 5;
                break;
              case 4:
                e.p = 4, n = e.v, console.error("Failed to fetch courses", n);
              case 5:
                return e.p = 5, p(!1), e.f(5);
              case 6:
                return e.a(2);
            }
          }, e, null, [[2, 4, 5, 6]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();
      e();
    }, [null == a ? void 0 : a.selectedPlatform]);
    var k = function () {
        var e = Lne(Wne().m(function e() {
          var t, n, r;
          return Wne().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if (a.certificate) {
                  e.n = 1;
                  break;
                }
                return e.a(2, null);
              case 1:
                if (e.p = 1, t = hB.find(function (e) {
                  return e.id === a.certificate;
                })) {
                  e.n = 2;
                  break;
                }
                return e.a(2, null);
              case 2:
                return e.n = 3, l()({
                  path: "/creator-lms/v1/certificates/",
                  method: "POST",
                  data: {
                    name: "Certificate Template ".concat(a.certificate),
                    status: "publish",
                    contents: t.contents,
                    template_thumbnail: t.image_src
                  }
                });
              case 3:
                return n = e.v, e.a(2, (null == n ? void 0 : n.id) || null);
              case 4:
                return e.p = 4, r = e.v, console.error("Error creating certificate:", r), e.a(2, null);
            }
          }, e, null, [[1, 4]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
      j = function () {
        var e = Lne(Wne().m(function e(t) {
          var n, a, o, i;
          return Wne().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if (t && "others" !== t && une[t]) {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                return e.p = 1, a = une[t].data, e.n = 2, l()({
                  path: "/creator-lms/v1/setup-wizard/import-course",
                  method: "POST",
                  data: a,
                  headers: {
                    nonce: window.creator_lms_params.setup_wizard_nonce
                  }
                });
              case 2:
                null != (o = e.v) && null !== (n = o.course_ids) && void 0 !== n && n.length && r.setSetupWizardData({
                  imported_course_ids: o.course_ids
                }), e.n = 4;
                break;
              case 3:
                e.p = 3, i = e.v, console.error("Error importing sample course:", i);
              case 4:
                return e.a(2);
            }
          }, e, null, [[1, 3]]);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
      A = function () {
        var e = Lne(Wne().m(function e() {
          var t, n, l, c, u, s, d, m, p, f, v, g, h, y, b, _;
          return Wne().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return e.p = 0, e.n = 1, k();
              case 1:
                return y = e.v, b = {
                  optin: {
                    creatorlms_allow_tracking: null != a && a.isOptEnabled ? "yes" : "no"
                  },
                  language: null !== (t = a.language) && void 0 !== t ? t : "en_US",
                  certificate: a.certificate,
                  certificate_id: y,
                  niche: a.niche ? [a.niche] : [],
                  level: a.level,
                  design: {
                    creator_lms_archive_page_layout: null !== (n = a.archive_page_layout) && void 0 !== n ? n : null === (l = i.creator_lms_archive_page_layout) || void 0 === l ? void 0 : l.value,
                    creator_lms_columns_per_row: a.courses_per_row || (null === (c = i.creator_lms_columns_per_row) || void 0 === c ? void 0 : c.value) || 4,
                    creator_lms_courses_per_page: a.courses_per_page || (null === (u = i.creator_lms_courses_per_page) || void 0 === u ? void 0 : u.value) || 10
                  },
                  currency: {
                    creator_lms_currency: null !== (s = a.currency) && void 0 !== s ? s : null == o || null === (d = o.creator_lms_currency) || void 0 === d ? void 0 : d.value,
                    creator_lms_currency_pos: (null == o || null === (m = o.creator_lms_currency_pos) || void 0 === m ? void 0 : m.value) || "left",
                    creator_lms_price_thousand_sep: (null == o || null === (p = o.creator_lms_price_thousand_sep) || void 0 === p ? void 0 : p.value) || ",",
                    creator_lms_price_decimal_sep: (null == o || null === (f = o.creator_lms_price_decimal_sep) || void 0 === f ? void 0 : f.value) || ".",
                    creator_lms_price_num_decimals: (null == o || null === (v = o.creator_lms_price_num_decimals) || void 0 === v ? void 0 : v.value) || "2"
                  },
                  contact: {
                    email: null != a && a.isOptEnabled ? null === (g = window.creator_lms_params) || void 0 === g ? void 0 : g.admin_email : "",
                    name: null != a && a.isOptEnabled ? null === (h = window.creator_lms_params) || void 0 === h ? void 0 : h.admin_name : ""
                  },
                  wizard_data: a
                }, e.n = 2, r.saveSetup(b);
              case 2:
                return e.n = 3, j(null == a ? void 0 : a.niche);
              case 3:
                y && r.setSetupWizardData({
                  certificate_id: y
                }), e.n = 5;
                break;
              case 4:
                e.p = 4, _ = e.v, console.error("Error saving setup wizard data:", _);
              case 5:
                return e.a(2);
            }
          }, e, null, [[0, 4]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
      M = function () {
        var e = Lne(Wne().m(function e() {
          var n, r, o;
          return Wne().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return E("migrating"), e.n = 1, new Promise(function (e) {
                  return setTimeout(e, 800);
                });
              case 1:
                return x(1), e.n = 2, new Promise(function (e) {
                  return setTimeout(e, 800);
                });
              case 2:
                x(2), n = 0;
              case 3:
                if (!(n < v.length)) {
                  e.n = 9;
                  break;
                }
                return r = v[n], P(n), x(3 + n), e.p = 4, e.n = 5, l()({
                  path: "/creator-lms/v1/migrations/".concat(a.selectedPlatform),
                  method: "POST",
                  data: Dne({}, a.selectedPlatform, {
                    course_id: r
                  })
                });
              case 5:
                e.n = 7;
                break;
              case 6:
                e.p = 6, o = e.v, console.error("Failed to migrate course ".concat(r, ":"), o);
              case 7:
                return e.n = 8, new Promise(function (e) {
                  return setTimeout(e, 500);
                });
              case 8:
                n++, e.n = 3;
                break;
              case 9:
                return e.n = 10, A();
              case 10:
                return e.n = 11, new Promise(function (e) {
                  return setTimeout(e, 500);
                });
              case 11:
                t("wizard-completion");
              case 12:
                return e.a(2);
            }
          }, e, null, [[4, 6]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
      F = function () {
        var e = Lne(Wne().m(function e() {
          return Wne().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return t("wizard-completion"), e.n = 1, A();
              case 1:
                return e.a(2);
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
      N = u.length > 0 && v.length === u.length,
      D = "M10.5303 0.53033L3.53033 7.53033L0.53033 4.53033";
    return "selection" === w ? React.createElement(React.Fragment, null, React.createElement(Gte, {
      level: null == a ? void 0 : a.level,
      currentStep: "experienced" == (null == a ? void 0 : a.level) || "intermediate" == (null == a ? void 0 : a.level) ? 2 : 0,
      isShowIndicator: !0
    }), React.createElement(I.ContainerWP, null, React.createElement("div", {
      className: "omlms-setup-wizard-level-selection-wrapper omlms-setup-wizard-card-wrapper"
    }, React.createElement("div", {
      className: "omlms-setup-wizard__container"
    }, React.createElement("div", {
      className: "omlms-setup-wizard__header"
    }, React.createElement(I.HeadingWP, {
      as: "h2",
      color: "#000d25",
      size: "24",
      align: "center",
      weight: "600"
    }, (0, b.__)("Let’s Start Your Course Draft", "ohmylms")), React.createElement(I.TextWP, {
      as: "p",
      size: "18",
      color: "#687784",
      align: "center",
      weight: "400",
      style: {
        maxWidth: "500px",
        margin: "auto"
      }
    }, (0, b.__)("We've fetched your courses to help you build a draft. Nothing is live yet - you're in control.", "ohmylms"))), React.createElement(I.FlexWP, {
      direction: "column",
      gap: 6,
      items: "center",
      justify: "center",
      style: {
        width: "790px",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center"
      }
    }, React.createElement("div", {
      style: {
        background: "white",
        borderRadius: "8px",
        border: "1px solid rgba(200, 210, 233, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 9px",
        width: "100%",
        maxWidth: "614px"
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "8px"
      }
    }, React.createElement("img", {
      src: O.icon,
      alt: O.label,
      style: {
        width: "29px",
        height: "29px"
      }
    }), React.createElement(I.TextWP, {
      size: "18",
      weight: "600",
      color: "#000d25"
    }, O.label)), React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "8px"
      }
    }, React.createElement(I.TextWP, {
      size: "14",
      color: "#444d5e"
    }, (0, b.__)("Migrating from", "ohmylms")), React.createElement(I.TextWP, {
      size: "16",
      weight: "500",
      color: "#444d5e"
    }, O.label))), React.createElement("div", {
      style: {
        background: "white",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px 0px rgba(110, 66, 211, 0.14)",
        padding: "24px",
        width: "100%",
        maxWidth: "614px",
        boxSizing: "border-box"
      }
    }, React.createElement("div", {
      style: {
        background: "#f4f5f7",
        borderRadius: "2px",
        display: "flex",
        alignItems: "center",
        gap: "42px",
        height: "40px",
        padding: "16px 24px 16px 12px",
        boxSizing: "border-box"
      }
    }, React.createElement("div", {
      className: "omlms-setup-wizard-checkbox",
      onClick: function () {
        v.length === u.length ? h([]) : h(u.map(function (e) {
          return e.id;
        }));
      },
      style: {
        position: "relative",
        width: "16px",
        height: "16px",
        background: N ? "#6e42d3" : "white",
        border: "1px solid #6e42d3",
        borderRadius: "4px",
        flexShrink: 0,
        cursor: "pointer"
      }
    }, N && React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: "calc(50%)",
        transform: "translate(-50%, -50%)",
        width: "10px",
        height: "7px"
      }
    }, React.createElement("svg", {
      style: {
        display: "block",
        width: "100%",
        height: "100%"
      },
      fill: "none",
      preserveAspectRatio: "none",
      viewBox: "0 0 11.0607 8.59099"
    }, React.createElement("path", {
      d: D,
      stroke: "#FFF",
      strokeWidth: "1.5"
    })))), React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }
    }, React.createElement("span", {
      style: {
        background: "rgba(200, 210, 233, 0.5)",
        borderRadius: "20px",
        padding: "0 8px",
        fontSize: "12px",
        color: "#6e42d3",
        fontWeight: 600
      }
    }, v.length), React.createElement(I.TextWP, {
      size: "12",
      weight: "500",
      color: "#7a8b9a"
    }, (0, b.__)("Courses selected", "ohmylms")))), m ? React.createElement(I.FlexWP, {
      justify: "center",
      align: "center",
      style: {
        padding: "40px"
      }
    }, React.createElement(I.SpinWP, null)) : React.createElement("div", {
      style: {
        maxHeight: "400px",
        overflowY: "auto"
      }
    }, u.map(function (e, t) {
      var n = v.includes(e.id);
      return React.createElement("div", {
        key: e.id,
        style: {
          borderBottom: "0.5px solid rgba(200, 210, 233, 0.5)",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          gap: "30px"
        }
      }, React.createElement("div", {
        className: "omlms-setup-wizard-checkbox",
        onClick: function () {
          return t = e.id, void (v.includes(t) ? h(v.filter(function (e) {
            return e !== t;
          })) : h([].concat(function (e) {
            return function (e) {
              if (Array.isArray(e)) return Gne(e);
            }(e) || function (e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || Hne(e) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }(v), [t])));
          var t;
        },
        style: {
          position: "relative",
          width: "16px",
          height: "16px",
          background: n ? "#6e42d3" : "white",
          border: "1px solid #6e42d3",
          borderRadius: "4px",
          flexShrink: 0,
          cursor: "pointer"
        }
      }, n && React.createElement("div", {
        style: {
          position: "absolute",
          left: "50%",
          top: "calc(50%)",
          transform: "translate(-50%, -50%)",
          width: "10px",
          height: "7px"
        }
      }, React.createElement("svg", {
        style: {
          display: "block",
          width: "100%",
          height: "100%"
        },
        fill: "none",
        preserveAspectRatio: "none",
        viewBox: "0 0 11.0607 8.59099"
      }, React.createElement("path", {
        d: D,
        stroke: "white",
        strokeWidth: "1.5"
      })))), React.createElement("div", {
        style: {
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }
      }, React.createElement("div", {
        style: {
          width: "80px",
          height: "50px",
          background: "#e1e1e1",
          borderRadius: "4px",
          overflow: "hidden"
        }
      }, e.thumbnail && React.createElement("img", {
        src: e.thumbnail,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }
      })), React.createElement("div", null, React.createElement(I.TextWP, {
        size: "14",
        weight: "700",
        color: "#000d25"
      }, e.title || e.label))));
    }), 0 === u.length && !m && React.createElement("div", {
      style: {
        padding: "20px",
        textAlign: "center"
      }
    }, React.createElement(I.TextWP, null, (0, b.__)("No courses found to migrate.", "ohmylms")))))))), React.createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 6
    }, React.createElement(I.FlexWP, {
      items: "center",
      justify: "between",
      gap: 4,
      style: {
        maxWidth: "846px",
        justifyContent: "space-between",
        margin: "0 auto"
      }
    }, React.createElement(I.ButtonWP, {
      variant: "secondary",
      onClick: n
    }, (0, b.__)("Back", "ohmylms")), React.createElement(I.FlexWP, {
      items: "center",
      justify: "end",
      gap: 3
    }, 0 !== u.length || m ? React.createElement(I.ButtonWP, {
      variant: "primary",
      onClick: M,
      disabled: 0 === v.length || m
    }, (0, b.__)("Continue", "ohmylms")) : React.createElement(I.ButtonWP, {
      variant: "primary",
      onClick: F
    }, (0, b.__)("Skip", "ohmylms"))))))) : React.createElement(React.Fragment, null, React.createElement(Gte, {
      level: null == a ? void 0 : a.level,
      currentStep: "experienced" == (null == a ? void 0 : a.level) || "intermediate" == (null == a ? void 0 : a.level) ? 2 : 0,
      isShowIndicator: !0
    }), React.createElement(I.ContainerWP, null, React.createElement("div", {
      className: "omlms-setup-wizard__container"
    }, React.createElement("div", {
      className: "omlms-setup-wizard__header"
    }, React.createElement(I.HeadingWP, {
      as: "h2",
      color: "#000d25",
      size: "24",
      align: "center",
      weight: "600"
    }, (0, b.__)("🤝 Your Migration Assistant", "ohmylms")), React.createElement(I.TextWP, {
      as: "p",
      size: "18",
      color: "#687784",
      align: "center",
      weight: "400",
      style: {
        maxWidth: "400px",
        margin: "auto"
      }
    }, (0, b.__)("Your data is safe. We migrate with care.", "ohmylms"))), React.createElement(I.FlexWP, {
      direction: "column",
      gap: 6,
      items: "center",
      justify: "center",
      style: {
        alignItems: "center",
        justifyContent: "center"
      }
    }, React.createElement(I.CardWP, {
      isBorderless: !0,
      style: {
        width: "768px",
        padding: "32px"
      }
    }, React.createElement("div", {
      style: {
        background: "white",
        borderRadius: "8px",
        border: "1px solid rgba(200, 210, 233, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 9px",
        width: "100%",
        marginBottom: "20px"
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "8px"
      }
    }, React.createElement("img", {
      src: O.icon,
      alt: O.label,
      style: {
        width: "29px",
        height: "29px"
      }
    }), React.createElement(I.TextWP, {
      size: "18",
      weight: "600",
      color: "#000d25"
    }, O.label)), React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "8px"
      }
    }, React.createElement(I.TextWP, {
      size: "12",
      color: "#687784"
    }, (0, b.__)("Progress", "ohmylms")), React.createElement(I.TextWP, {
      size: "16",
      weight: "600",
      color: R >= 2 + v.length ? "#22C55E" : "#6e42d3"
    }, Math.min(R, 2 + v.length), "/", 2 + v.length))), React.createElement("div", {
      style: {
        height: "8px",
        background: "#F0F0F1",
        borderRadius: "4px",
        overflow: "hidden"
      }
    }, React.createElement("div", {
      style: {
        height: "100%",
        width: "".concat(Math.min(R, 2 + v.length) / (2 + v.length) * 100, "%"),
        background: "#22C55E",
        transition: "width 0.5s ease"
      }
    }))), React.createElement(I.CardWP, {
      isBorderless: !0,
      style: {
        width: "704px",
        padding: "32px",
        background: "#F6F7F9"
      }
    }, React.createElement(I.HeadingWP, {
      size: "18",
      weight: "600",
      style: {
        marginBottom: "20px"
      }
    }, (0, b.__)("Migration Checklist", "ohmylms")), React.createElement(I.FlexWP, {
      direction: "column",
      gap: 4
    }, React.createElement(qne, {
      title: (0, b.__)("Platform Connection", "ohmylms"),
      desc: (0, b.__)("Securely connecting to your account", "ohmylms"),
      status: R >= 1 ? "complete" : 0 === R ? "processing" : "pending"
    }), React.createElement(qne, {
      title: (0, b.__)("Content Found", "ohmylms"),
      desc: (0, b.__)("Found ".concat(v.length, " course").concat(1 !== v.length ? "s" : "", " to import"), "ohmylms"),
      status: R >= 2 ? "complete" : 1 === R ? "processing" : "pending"
    }), v.map(function (e, t) {
      var n = u.find(function (t) {
          return t.id === e;
        }),
        r = 3 + t,
        a = "pending";
      return R > r ? a = "complete" : R === r && (a = "processing"), React.createElement(qne, {
        key: e,
        title: (0, b.__)("Importing Course", "ohmylms"),
        desc: (null == n ? void 0 : n.title) || "Course ".concat(e),
        status: a
      });
    })))))));
  },
  qne = function (e) {
    var t,
      n = e.title,
      r = e.desc,
      a = e.status;
    return t = "complete" === a ? React.createElement("div", {
      style: {
        width: "32px",
        height: "32px",
        background: "#22C55E",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, React.createElement("svg", {
      width: "14",
      height: "10",
      viewBox: "0 0 14 10",
      fill: "none"
    }, React.createElement("path", {
      d: "M12.3333 1L5 8.33333L1.66667 5",
      stroke: "white",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))) : "processing" === a ? React.createElement("div", {
      style: {
        width: "32px",
        height: "32px",
        background: "#FFF7ED",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #F97316"
      }
    }, React.createElement("div", {
      className: "omlms-spinner",
      style: {
        width: "16px",
        height: "16px",
        border: "2px solid #F97316",
        borderTopColor: "transparent",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }
    }), React.createElement("style", null, "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }")) : React.createElement("div", {
      style: {
        width: "32px",
        height: "32px",
        background: "#E2E8F0",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }), React.createElement("div", {
      style: {
        background: "white",
        padding: "16px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        gap: "16px",
        alignItems: "center"
      }
    }, t, React.createElement(I.FlexWP, {
      direction: "column",
      gap: 2,
      items: "start"
    }, React.createElement(I.TextWP, {
      size: "16",
      weight: "600",
      color: "#000D25"
    }, n), React.createElement(I.TextWP, {
      size: "14",
      color: "#687784",
      style: {
        display: "block"
      }
    }, r))), "complete" === a && React.createElement(I.TextWP, {
      size: "12",
      color: "#22C55E",
      weight: "500"
    }, "✓ ", (0, b.__)("Complete", "ohmylms")), "processing" === a && React.createElement(I.TextWP, {
      size: "12",
      color: "#F97316",
      weight: "500"
    }, (0, b.__)("Processing...", "ohmylms")));
  };

const Yne = (0, g.memo)(Une);

function Qne(e, t) {
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
      if ("string" == typeof e) return Zne(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Zne(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Zne(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
