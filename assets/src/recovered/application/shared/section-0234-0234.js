// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Kae = function () {
  return React.createElement("svg", {
    width: "19",
    height: "19",
    fill: "none",
    viewBox: "0 0 19 19",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "18",
    height: "18",
    x: ".5",
    y: ".5",
    fill: "#FF4955",
    rx: "9"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M6.632 5.868a.542.542 0 00-.766.766L8.733 9.5l-2.867 2.867a.542.542 0 00.766.766l2.867-2.867 2.867 2.867a.542.542 0 00.766-.766L10.265 9.5l2.867-2.867a.542.542 0 00-.766-.766L9.499 8.735 6.632 5.868z"
  }));
};

const Jae = (0, g.memo)(Kae);

var Xae = function () {
  return React.createElement("svg", {
    width: "19",
    height: "19",
    fill: "none",
    viewBox: "0 0 19 19",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "18",
    height: "18",
    x: ".5",
    y: ".5",
    fill: "#33A646",
    rx: "9"
  }), React.createElement("path", {
    fill: "#fff",
    "fill-rule": "evenodd",
    d: "M15.503 5.63a.731.731 0 010 1.033l-6.279 6.28a2.194 2.194 0 01-3.102 0L3.499 10.32a.731.731 0 011.035-1.034l2.622 2.622a.731.731 0 001.034 0l6.28-6.279a.731.731 0 011.033 0z",
    "clip-rule": "evenodd"
  }));
};

const eoe = (0, g.memo)(Xae);

function toe(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var noe = function () {
  var e = function (e, t) {
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
          if ("string" == typeof e) return toe(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? toe(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)("annual"), 2),
    t = e[0],
    n = e[1],
    r = [{
      feature: (0, b.__)("Site License", "ohmylms"),
      description: (0, b.__)("Number of sites you can use the plugin on.", "ohmylms"),
      free: (0, b.__)("0", "ohmylms"),
      starter: (0, b.__)("1", "ohmylms"),
      growth: (0, b.__)("10", "ohmylms"),
      business: (0, b.__)("Unlimited", "ohmylms")
    }, {
      feature: (0, b.__)("AI Suite", "ohmylms"),
      description: (0, b.__)("AI credits for content and image generation.", "ohmylms"),
      free: (0, b.__)("No", "ohmylms"),
      starter: (0, b.__)("9M Token", "ohmylms"),
      growth: (0, b.__)("20M Token", "ohmylms"),
      business: (0, b.__)("35M Token", "ohmylms")
    }, {
      feature: (0, b.__)("Unlimited Courses, Lessons, Quizzes", "ohmylms"),
      description: (0, b.__)("Create as many courses, lessons, and quizzes as you want.", "ohmylms"),
      free: !0,
      starter: !0,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Interactive Quizzes", "ohmylms"),
      description: (0, b.__)("Create interactive quizzes for your courses.", "ohmylms"),
      free: !1,
      starter: !0,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Time Based Quizzes", "ohmylms"),
      description: (0, b.__)("Create time-based quizzes for your courses.", "ohmylms"),
      free: !1,
      starter: !0,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Question Layouts", "ohmylms"),
      description: (0, b.__)("Create question layouts for your quizzes.", "ohmylms"),
      free: !1,
      starter: !0,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Assignments", "ohmylms"),
      description: (0, b.__)("Create and manage assignments for your courses.", "ohmylms"),
      free: !1,
      starter: !0,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Unlimited Students", "ohmylms"),
      description: (0, b.__)("Enroll as many students as you want.", "ohmylms"),
      free: !0,
      starter: !0,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("OpenAI, Anthropic & Gemini Models for AI", "ohmylms"),
      description: (0, b.__)("Access to the latest AI models.", "ohmylms"),
      free: !1,
      starter: !0,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Gamification", "ohmylms"),
      description: (0, b.__)("Engage students with points, badges, and leaderboards.", "ohmylms"),
      free: !1,
      starter: !0,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Advanced Analytics & Reports", "ohmylms"),
      description: (0, b.__)("Get detailed insights into your courses and students.", "ohmylms"),
      free: !1,
      starter: !0,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Layout Options", "ohmylms"),
      description: (0, b.__)("Customize the layout.", "ohmylms"),
      free: !1,
      starter: !0,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Basic Analytics", "ohmylms"),
      description: (0, b.__)("Get basic insights into your courses and students.", "ohmylms"),
      free: !0,
      starter: !0,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Memberships & Subscription", "ohmylms"),
      description: (0, b.__)("Sell courses as part of a membership or subscription.", "ohmylms"),
      free: !1,
      starter: !0,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Unlimited Updates & Maintenance", "ohmylms"),
      description: (0, b.__)("Get the latest features and security updates.", "ohmylms"),
      free: !1,
      starter: !0,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Cohorts", "ohmylms"),
      description: (0, b.__)("Run cohort-based courses with a start and end date.", "ohmylms"),
      free: !1,
      starter: !1,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Live Classes", "ohmylms"),
      description: (0, b.__)("Run live classes with a start and end date.", "ohmylms"),
      free: !1,
      starter: !1,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("One Click Offer", "ohmylms"),
      description: (0, b.__)("Create one-click offers to increase your revenue.", "ohmylms"),
      free: !1,
      starter: !1,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Content Protection", "ohmylms"),
      description: (0, b.__)("Protect your course content from being copied.", "ohmylms"),
      free: !1,
      starter: !1,
      growth: !0,
      business: !0
    }, {
      feature: (0, b.__)("Community", "ohmylms"),
      description: (0, b.__)("Create a community around your courses.", "ohmylms"),
      free: !1,
      starter: !1,
      growth: !1,
      business: !0
    }],
    a = function (e) {
      return "boolean" == typeof e ? React.createElement("span", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }
      }, e ? React.createElement(eoe, null) : React.createElement(Jae, null)) : React.createElement("span", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }
      }, e);
    },
    o = [{
      title: React.createElement("div", {
        style: {
          height: "110px",
          display: "flex",
          alignItems: "flex-end"
        }
      }, (0, b.__)("Features", "ohmylms")),
      key: "feature",
      width: "24%",
      textAlign: "center",
      render: function (e, t) {
        return React.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }
        }, e);
      }
    }, {
      title: React.createElement("div", {
        style: {
          textAlign: "center",
          padding: "18px 10px",
          background: "#ffffff",
          borderRadius: "8px"
        }
      }, React.createElement(I.HeadingWP, {
        as: "h4",
        level: 4,
        size: "16px",
        weight: 500
      }, (0, b.__)("Free", "ohmylms")), React.createElement("div", {
        style: {
          margin: "45px 0"
        }
      }), React.createElement(I.ButtonWP, {
        variant: "secondary",
        disabled: !0
      }, (0, b.__)("Current Plan", "ohmylms"))),
      key: "free",
      width: "19%",
      textAlign: "center",
      render: a
    }, {
      title: React.createElement("div", {
        style: {
          textAlign: "center",
          padding: "18px 10px",
          background: "#ffffff",
          borderRadius: "8px"
        }
      }, React.createElement(I.HeadingWP, {
        as: "h4",
        level: 4,
        size: "16px",
        weight: 500
      }, (0, b.__)("Starter", "ohmylms")), React.createElement(I.HeadingWP, {
        as: "h3",
        level: 3,
        size: "22px",
        weight: 700,
        style: {
          margin: "5px 0px 10px"
        }
      }, "lifetime" === t ? React.createElement(React.Fragment, null, "$399.99", React.createElement("span", {
        style: {
          fontSize: "12px",
          fontWeight: "normal"
        }
      }, "/", (0, b.__)("one-time", "ohmylms"))) : React.createElement(React.Fragment, null, "$139.99", React.createElement("span", {
        style: {
          fontSize: "12px",
          fontWeight: "normal"
        }
      }, "/", (0, b.__)("year", "ohmylms")))), React.createElement(I.ButtonWP, {
        href: "lifetime" === t ? "https://useraccount.getwpfunnels.com/v2-creator-lms-starter-lifetime/steps/creator-lms-starter-checkout" : "https://useraccount.getwpfunnels.com/clms-starter-annual/steps/creator-lms-starter-checkout-2",
        target: "_blank",
        variant: "primary"
      }, (0, b.__)("Upgrade", "ohmylms"))),
      key: "starter",
      width: "19%",
      textAlign: "center",
      render: a
    }, {
      title: React.createElement("div", {
        style: {
          textAlign: "center",
          padding: "18px 10px",
          background: "#ffffff",
          borderRadius: "8px"
        }
      }, React.createElement(I.HeadingWP, {
        as: "h4",
        level: 4,
        size: "16px",
        weight: 500
      }, (0, b.__)("Growth", "ohmylms")), React.createElement(I.HeadingWP, {
        as: "h3",
        level: 3,
        size: "22px",
        weight: 700,
        style: {
          margin: "5px 0px 10px"
        }
      }, "lifetime" === t ? React.createElement(React.Fragment, null, "$799.99", React.createElement("span", {
        style: {
          fontSize: "12px",
          fontWeight: "normal"
        }
      }, "/", (0, b.__)("one-time", "ohmylms"))) : React.createElement(React.Fragment, null, "$239.99", React.createElement("span", {
        style: {
          fontSize: "12px",
          fontWeight: "normal"
        }
      }, "/", (0, b.__)("year", "ohmylms")))), React.createElement(I.ButtonWP, {
        href: "lifetime" === t ? "https://useraccount.getwpfunnels.com/v2-creator-lms-growth-lifetime/steps/creator-lms-growth-checkout" : "https://useraccount.getwpfunnels.com/clms-growth-annual/steps/creator-lms-growth-annual-checkout",
        target: "_blank",
        variant: "primary"
      }, (0, b.__)("Upgrade", "ohmylms"))),
      key: "growth",
      width: "19%",
      textAlign: "center",
      render: a
    }, {
      title: React.createElement("div", {
        style: {
          textAlign: "center",
          padding: "18px 10px",
          background: "#ffffff",
          borderRadius: "8px"
        }
      }, React.createElement(I.HeadingWP, {
        as: "h4",
        level: 4,
        size: "16px",
        weight: 500
      }, (0, b.__)("Business", "ohmylms")), React.createElement(I.HeadingWP, {
        as: "h3",
        level: 3,
        size: "22px",
        weight: 700,
        style: {
          margin: "5px 0px 10px"
        }
      }, "lifetime" === t ? React.createElement(React.Fragment, null, "$1,599.99", React.createElement("span", {
        style: {
          fontSize: "12px",
          fontWeight: "normal"
        }
      }, "/", (0, b.__)("one-time", "ohmylms"))) : React.createElement(React.Fragment, null, "$439.99", React.createElement("span", {
        style: {
          fontSize: "12px",
          fontWeight: "normal"
        }
      }, "/", (0, b.__)("year", "ohmylms")))), React.createElement(I.ButtonWP, {
        href: "lifetime" === t ? "https://useraccount.getwpfunnels.com/v2-creator-lms-business-lifetime/steps/creator-lms-business-checkout" : "https://useraccount.getwpfunnels.com/clms-business-annual/steps/creator-lms-business-annual-checkout",
        target: "_blank",
        variant: "primary"
      }, (0, b.__)("Upgrade", "ohmylms"))),
      key: "business",
      width: "19%",
      render: a
    }];
  return React.createElement("div", {
    className: "omlms-free-vs-pro-page"
  }, React.createElement(I.ContainerWP, null, React.createElement("div", {
    style: {
      background: "#533c89",
      color: "#fff",
      padding: "18px 24px",
      marginBottom: "24px",
      textAlign: "center",
      fontWeight: 500,
      fontSize: "22px",
      letterSpacing: "1px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
    }
  }, (0, b.__)("Upgrade to OhMyLMS today and get exclusive features", "ohmylms")), React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "18px",
      gap: "32px"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, React.createElement(I.ButtonWP, {
    variant: "annual" === t ? "primary" : "secondary",
    onClick: function () {
      return n("annual");
    },
    style: {
      minWidth: 120,
      fontWeight: 600,
      fontSize: "16px",
      borderRadius: "10px"
    }
  }, (0, b.__)("Annual", "ohmylms"))), React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, React.createElement(I.ButtonWP, {
    variant: "lifetime" === t ? "primary" : "secondary",
    onClick: function () {
      return n("lifetime");
    },
    style: {
      minWidth: 120,
      fontWeight: 600,
      fontSize: "16px",
      borderRadius: "10px"
    }
  }, (0, b.__)("Lifetime", "ohmylms")))), React.createElement(YG, {
    title: (0, b.__)("Free Vs Pro", "ohmylms"),
    showAddButton: !1
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    minHeight: "calc(100vh - 200px)"
  }, React.createElement(I.SpacerWP, {
    padding: 5
  }, React.createElement(I.TableWP, {
    columns: o,
    dataSource: r,
    rowKey: "feature",
    scroll: {
      x: "max-content"
    }
  })))));
};

const roe = (0, g.memo)(noe);
