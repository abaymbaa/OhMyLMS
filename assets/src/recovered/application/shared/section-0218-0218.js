// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Ine = function (e) {
  e.onTabChange, (0, y.useDispatch)(T.default);
  var t,
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getSetupWizardData();
    }, []),
    r = (0, f.Zp)();
  (0, g.useEffect)(function () {
    var e = function () {
      var e,
        t = (e = Ane().m(function e() {
          return Ane().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                Nte.Hi.completeStep(), Nte.Ft.emit("step_completed", {
                  stepId: "completion",
                  plugin: "ohmylms"
                }), Nte.Ft.emit("onboarding_completed", {
                  plugin: "ohmylms",
                  version: "1.1.16"
                });
              case 1:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Tne(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Tne(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    e();
  }, []), (0, g.useEffect)(function () {
    var e = document.createElement("style");
    return e.textContent = "\n            @keyframes confettiFall {\n                0% {\n                    transform: translateY(0) rotate(0deg);\n                    opacity: 1;\n                }\n                100% {\n                    transform: translateY(100vh) rotate(720deg);\n                    opacity: 0;\n                }\n            }\n        ", document.head.appendChild(e), function () {
      for (var e = ["#FF4955", "#6E42D3", "#42ACD3", "#FFD700", "#FF69B4", "#00CED1"], t = [], n = 0; n < 80; n++) {
        var r = document.createElement("div"),
          a = 10 * Math.random() + 5,
          o = 100 * Math.random(),
          i = 3 * Math.random() + 2,
          l = .5 * Math.random(),
          c = 360 * Math.random();
        r.style.position = "fixed", r.style.width = "".concat(a, "px"), r.style.height = "".concat(a, "px"), r.style.backgroundColor = e[Math.floor(Math.random() * e.length)], r.style.left = "".concat(o, "%"), r.style.top = "-10px", r.style.opacity = "0.8", r.style.borderRadius = Math.random() > .5 ? "50%" : "0", r.style.pointerEvents = "none", r.style.zIndex = "9999", r.style.transform = "rotate(".concat(c, "deg)"), r.style.animation = "confettiFall ".concat(i, "s linear ").concat(l, "s forwards"), document.body.appendChild(r), t.push(r);
      }
      setTimeout(function () {
        t.forEach(function (e) {
          return e.remove();
        });
      }, 5500);
    }(), function () {
      e.remove();
    };
  }, []);
  var a = function () {
      r("/dashboard");
    },
    o = function () {
      r("/courses?openAddCourseModal=true");
    },
    i = function () {
      var e,
        t = null == n || null === (e = n.imported_course_ids) || void 0 === e ? void 0 : e[0];
      r("/course-edit/".concat(t));
    },
    l = (null == n || null === (t = n.imported_course_ids) || void 0 === t ? void 0 : t.length) > 0,
    c = !0 === (null == n ? void 0 : n.migrate_courses),
    u = [{
      icon: React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none"
      }, React.createElement("path", {
        d: "M6.36563 4.77464C6.29553 4.72474 6.21306 4.69509 6.12724 4.68894C6.04142 4.6828 5.95556 4.70039 5.87907 4.73979C5.80258 4.7792 5.73842 4.8389 5.6936 4.91235C5.64879 4.9858 5.62505 5.07016 5.625 5.15621V9.84371C5.62505 9.92975 5.64879 10.0141 5.6936 10.0876C5.73842 10.161 5.80258 10.2207 5.87907 10.2601C5.95556 10.2995 6.04142 10.3171 6.12724 10.311C6.21306 10.3048 6.29553 10.2752 6.36563 10.2253L9.64688 7.88152C9.70764 7.83816 9.75717 7.78091 9.79134 7.71454C9.82552 7.64817 9.84335 7.5746 9.84335 7.49996C9.84335 7.42531 9.82552 7.35174 9.79134 7.28537C9.75717 7.219 9.70764 7.16175 9.64688 7.11839L6.36563 4.77464Z",
        fill: "#FF4955"
      }), React.createElement("path", {
        d: "M0 3.75C0 3.25272 0.197544 2.77581 0.549175 2.42417C0.900806 2.07254 1.37772 1.875 1.875 1.875H13.125C13.6223 1.875 14.0992 2.07254 14.4508 2.42417C14.8025 2.77581 15 3.25272 15 3.75V11.25C15 11.7473 14.8025 12.2242 14.4508 12.5758C14.0992 12.9275 13.6223 13.125 13.125 13.125H1.875C1.37772 13.125 0.900806 12.9275 0.549175 12.5758C0.197544 12.2242 0 11.7473 0 11.25V3.75ZM14.0625 3.75C14.0625 3.50136 13.9637 3.2629 13.7879 3.08709C13.6121 2.91127 13.3736 2.8125 13.125 2.8125H1.875C1.62636 2.8125 1.3879 2.91127 1.21209 3.08709C1.03627 3.2629 0.9375 3.50136 0.9375 3.75V11.25C0.9375 11.4986 1.03627 11.7371 1.21209 11.9129C1.3879 12.0887 1.62636 12.1875 1.875 12.1875H13.125C13.3736 12.1875 13.6121 12.0887 13.7879 11.9129C13.9637 11.7371 14.0625 11.4986 14.0625 11.25V3.75Z",
        fill: "#FF4955"
      })),
      label: (0, b.__)("Blog & Tutorials", "ohmylms"),
      url: "https://ohmylms.com/blog/"
    }, {
      icon: React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "19",
        viewBox: "0 0 19 19",
        fill: "none"
      }, React.createElement("path", {
        d: "M6.92578 4.94792C6.92578 4.26554 7.19686 3.61111 7.67937 3.12859C8.16189 2.64607 8.81632 2.375 9.4987 2.375C10.1811 2.375 10.8355 2.64607 11.318 3.12859C11.8005 3.61111 12.0716 4.26554 12.0716 4.94792C12.0716 5.6303 11.8005 6.28473 11.318 6.76724C10.8355 7.24976 10.1811 7.52083 9.4987 7.52083C8.81632 7.52083 8.16189 7.24976 7.67937 6.76724C7.19686 6.28473 6.92578 5.6303 6.92578 4.94792ZM3.95703 3.95833C3.32714 3.95833 2.72305 4.20856 2.27765 4.65395C1.83225 5.09935 1.58203 5.70344 1.58203 6.33333C1.58203 6.96322 1.83225 7.56731 2.27765 8.01271C2.72305 8.45811 3.32714 8.70833 3.95703 8.70833C4.58692 8.70833 5.19101 8.45811 5.63641 8.01271C6.08181 7.56731 6.33203 6.96322 6.33203 6.33333C6.33203 5.70344 6.08181 5.09935 5.63641 4.65395C5.19101 4.20856 4.58692 3.95833 3.95703 3.95833ZM15.0404 3.95833C14.4105 3.95833 13.8064 4.20856 13.361 4.65395C12.9156 5.09935 12.6654 5.70344 12.6654 6.33333C12.6654 6.96322 12.9156 7.56731 13.361 8.01271C13.8064 8.45811 14.4105 8.70833 15.0404 8.70833C15.6703 8.70833 16.2743 8.45811 16.7197 8.01271C17.1651 7.56731 17.4154 6.96322 17.4154 6.33333C17.4154 5.70344 17.1651 5.09935 16.7197 4.65395C16.2743 4.20856 15.6703 3.95833 15.0404 3.95833ZM7.32161 8.70833C6.95418 8.70833 6.60179 8.8543 6.34198 9.11411C6.08216 9.37393 5.9362 9.72632 5.9362 10.0938V13.0625C5.9362 14.0073 6.31153 14.9135 6.97963 15.5816C7.64773 16.2497 8.55386 16.625 9.4987 16.625C10.4435 16.625 11.3497 16.2497 12.0178 15.5816C12.6859 14.9135 13.0612 14.0073 13.0612 13.0625V10.0938C13.0612 9.72632 12.9152 9.37393 12.6554 9.11411C12.3956 8.8543 12.0432 8.70833 11.6758 8.70833H7.32161ZM5.23161 9.48258C5.17409 9.67733 5.14506 9.88106 5.14453 10.0938V13.0625C5.14388 13.7107 5.28822 14.3508 5.56698 14.936C5.84573 15.5212 6.25184 16.0366 6.75557 16.4445C6.29488 16.5973 5.80783 16.6543 5.32431 16.612C4.84079 16.5698 4.37101 16.4292 3.94378 16.1988C3.51656 15.9685 3.1409 15.6533 2.83987 15.2726C2.53884 14.8918 2.31878 14.4536 2.1932 13.9848L1.62953 11.8821C1.58235 11.7064 1.57026 11.5231 1.59395 11.3426C1.61763 11.1622 1.67663 10.9882 1.76757 10.8306C1.85851 10.673 1.97961 10.5348 2.12395 10.424C2.2683 10.3132 2.43306 10.2319 2.60882 10.1848L5.23161 9.48258ZM12.2418 16.4437C12.7453 16.036 13.1513 15.5208 13.4301 14.9359C13.7088 14.351 13.8533 13.7112 13.8529 13.0633V10.0945C13.8523 9.88026 13.8233 9.67601 13.7658 9.48179L16.3894 10.1848C16.7442 10.28 17.0466 10.5122 17.2303 10.8303C17.4139 11.1484 17.4637 11.5265 17.3687 11.8813L16.805 13.9848C16.6793 14.4536 16.4592 14.8919 16.1581 15.2726C15.8569 15.6533 15.4812 15.9684 15.0539 16.1987C14.6266 16.429 14.1567 16.5695 13.6732 16.6116C13.1896 16.6537 12.7025 16.5966 12.2418 16.4437Z",
        fill: "#6E42D3"
      })),
      label: (0, b.__)("Join community", "ohmylms"),
      url: "https://www.facebook.com/groups/814125387973883/"
    }, {
      icon: React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "19",
        viewBox: "0 0 19 19",
        fill: "none"
      }, React.createElement("g", {
        "clip-path": "url(#clip0_8549_7491)"
      }, React.createElement("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M4.61333 7.19229C5.56649 7.12737 6.43535 7.75675 6.58022 8.76771C6.66137 9.33415 6.72787 10.1448 6.72787 11.2812C6.72787 12.4181 6.66137 13.2288 6.58022 13.7952C6.42862 14.8536 5.48297 15.4937 4.47835 15.3564C3.54141 15.2281 2.61833 14.9732 2.02141 14.7871C1.3477 14.5774 0.783638 14.0402 0.615409 13.2945C0.468103 12.6335 0.394031 11.9584 0.394534 11.2812C0.394534 10.4547 0.505367 9.75808 0.615409 9.26844C0.763055 8.61333 1.21589 8.11973 1.77995 7.86679C1.80845 3.83562 5.26328 0.59375 9.4987 0.59375C13.7341 0.59375 17.1889 3.83562 17.2174 7.86679C17.7815 8.11973 18.2343 8.61333 18.382 9.26804C18.4924 9.75808 18.6029 10.4547 18.6029 11.2812C18.6029 12.1077 18.492 12.8044 18.382 13.2945C18.2225 14.0022 17.7067 14.5215 17.0789 14.7523C16.6601 16.1255 15.8281 17.0747 14.5377 17.6506C13.2591 18.2206 11.5721 18.4055 9.4987 18.4055C9.28874 18.4055 9.08737 18.3221 8.93891 18.1736C8.79044 18.0251 8.70703 17.8238 8.70703 17.6138C8.70703 17.4038 8.79044 17.2025 8.93891 17.054C9.08737 16.9055 9.28874 16.8221 9.4987 16.8221C11.5293 16.8221 12.9341 16.6321 13.8924 16.2046C14.407 15.975 14.8029 15.673 15.0997 15.2617C14.9082 15.2976 14.7147 15.3293 14.5194 15.3567C13.5144 15.4937 12.5688 14.8536 12.4176 13.7952C12.336 13.2288 12.2695 12.4177 12.2695 11.2816C12.2695 10.1448 12.336 9.33415 12.4172 8.76731C12.5621 7.75675 13.4309 7.12737 14.3845 7.19229C14.0072 5.03262 11.9754 3.36458 9.4987 3.36458C7.02197 3.36458 4.98976 5.03262 4.61333 7.19229ZM4.69249 8.77483C4.80135 8.76019 4.87537 8.78829 4.91891 8.81996C4.96008 8.84965 4.99966 8.90031 5.01272 8.99175C5.0812 9.47071 5.14453 10.205 5.14453 11.2812C5.14453 12.3579 5.0812 13.0918 5.01272 13.5707C4.99966 13.6622 4.95968 13.7133 4.91891 13.7429C4.87537 13.7746 4.80135 13.8023 4.69249 13.7877C3.88024 13.6768 3.05176 13.4496 2.49245 13.2755C2.30126 13.2161 2.19122 13.0843 2.15995 12.9465C2.0384 12.3998 1.97733 11.8413 1.97787 11.2812C1.97787 10.5941 2.0701 10.0158 2.15995 9.61637C2.19122 9.47862 2.30126 9.34681 2.49245 9.28704C3.05176 9.11287 3.88024 8.88606 4.69249 8.77483ZM14.0785 8.81996C14.0377 8.84965 13.9977 8.90031 13.9847 8.99175C13.9162 9.47071 13.8529 10.205 13.8529 11.2812C13.8529 12.3579 13.9162 13.0918 13.9847 13.5707C13.9977 13.6622 14.0377 13.7133 14.0785 13.7429C14.122 13.7746 14.1961 13.8023 14.3049 13.7877C15.1172 13.6768 15.9456 13.4496 16.5049 13.2755C16.6961 13.2161 16.8062 13.0843 16.8375 12.9465C16.9273 12.5467 17.0195 11.9688 17.0195 11.2812C17.02 10.7213 16.959 10.163 16.8375 9.61637C16.8062 9.47862 16.6961 9.34681 16.5049 9.28704C15.9456 9.11287 15.1172 8.88606 14.3049 8.77483C14.1961 8.76019 14.122 8.78829 14.0785 8.81996Z",
        fill: "#444444"
      })), React.createElement("defs", null, React.createElement("clipPath", {
        id: "clip0_8549_7491"
      }, React.createElement("rect", {
        width: "19",
        height: "19",
        fill: "white"
      })))),
      label: (0, b.__)("Support", "ohmylms"),
      url: "https://ohmylms.com/contact-us/"
    }, {
      icon: React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "17",
        height: "17",
        viewBox: "0 0 17 17",
        fill: "none"
      }, React.createElement("path", {
        d: "M4.72138 16.1273H12.2773C13.7502 16.1273 14.483 15.3802 14.483 13.9003V7.43996H9.33171C8.421 7.43996 7.99418 7.00586 7.99418 6.09514V0.872803H4.72138C3.25573 0.872803 2.51562 1.62687 2.51562 3.10709V13.9003C2.51562 15.3872 3.25573 16.1273 4.72138 16.1273ZM9.35327 6.4652H14.4047C14.3549 6.17346 14.1485 5.88871 13.8143 5.54021L9.88664 1.54886C9.55939 1.20734 9.26068 1.00091 8.96166 0.950821V6.08118C8.96166 6.33709 9.09705 6.4652 9.35327 6.4652ZM5.7602 10.5209C5.46846 10.5209 5.26204 10.3145 5.26204 10.037C5.26204 9.75925 5.46846 9.55312 5.75989 9.55312H11.2454C11.5302 9.55312 11.7509 9.75955 11.7509 10.0367C11.7509 10.3145 11.5302 10.5206 11.2457 10.5206L5.7602 10.5209ZM5.7602 13.2315C5.46846 13.2315 5.26204 13.0251 5.26204 12.7476C5.26204 12.4701 5.46846 12.2637 5.75989 12.2637H11.2454C11.5302 12.2637 11.7509 12.4701 11.7509 12.7476C11.7509 13.0251 11.5302 13.2315 11.2457 13.2315H5.7602Z",
        fill: "#42ACD3"
      })),
      label: (0, b.__)("Documentation", "ohmylms"),
      url: "https://ohmylms.com/docs/"
    }];
  return React.createElement(React.Fragment, null, React.createElement(I.ContainerWP, null, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingY: 12
  }, React.createElement(I.FlexWP, {
    items: "center",
    justify: "center"
  }, React.createElement(Wte, null)), React.createElement(I.FlexWP, {
    direction: "column",
    justify: "space-between",
    style: {
      minHeight: "84vh",
      gap: "80px"
    }
  }, React.createElement("div", null, React.createElement(I.SpacerWP, {
    marginBottom: 14,
    marginTop: 24
  }, React.createElement(I.FlexWP, {
    direction: "column",
    items: "center",
    justify: "center",
    gap: 4,
    style: {
      maxWidth: "680px",
      margin: "0 auto"
    }
  }, React.createElement(I.HeadingWP, {
    as: "h1",
    align: "center",
    size: "40",
    weight: "500"
  }, (0, b.__)("🎉 Setup Complete!")), React.createElement(I.TextWP, {
    as: "p",
    align: "center",
    size: "18",
    weight: "400",
    color: "#687784",
    style: {
      maxWidth: "600px",
      margin: "0 auto"
    }
  }, l ? (0, b.__)("We've completed the initial platform setup and added a sample course so you can explore how the course builder works.", "ohmylms") : c ? (0, b.__)("We've completed the initial platform setup and migrated your courses so you can continue where you left off.", "ohmylms") : (0, b.__)("Your OhMyLMS is ready. Let's build your first course 🚀", "ohmylms")))), React.createElement(I.FlexWP, {
    items: "center",
    justify: "center",
    gap: 3
  }, "beginner" === (null == n ? void 0 : n.level) && React.createElement(React.Fragment, null, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: a
  }, (0, b.__)("Go to Dashboard", "ohmylms")), l ? React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: i
  }, (0, b.__)("Edit Your Course", "ohmylms")) : React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: o
  }, (0, b.__)("Create Course", "ohmylms"))), "intermediate" === (null == n ? void 0 : n.level) && React.createElement(React.Fragment, null, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: a
  }, (0, b.__)("Explore dashboard", "ohmylms")), l ? React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: i
  }, (0, b.__)("Edit Your Course", "ohmylms")) : React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: o
  }, (0, b.__)("Create Course", "ohmylms"))), "experienced" === (null == n ? void 0 : n.level) && React.createElement(React.Fragment, null, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: a
  }, (0, b.__)("Explore dashboard", "ohmylms")), l && !c ? React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: i
  }, (0, b.__)("Edit Your Course", "ohmylms")) : c ? React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: function () {
      return r("/courses");
    }
  }, (0, b.__)("Go to My Courses", "ohmylms")) : React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: o
  }, (0, b.__)("Create Course", "ohmylms")))), React.createElement(I.TextWP, {
    as: "p",
    align: "center",
    size: "14",
    weight: "400",
    color: "#687784",
    style: {
      maxWidth: "500px",
      margin: "16px auto 0 auto"
    }
  }, l || c ? (0, b.__)("You can customize lessons, quizzes, and more in the course builder.", "ohmylms") : (0, b.__)("Start with a simple structure - you can add content later.", "ohmylms"))), React.createElement("div", null, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    style: {
      width: "932px",
      margin: "0 auto"
    }
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingY: 6,
    paddingX: 7.5
  }, React.createElement(I.TextWP, {
    as: "p",
    align: "center",
    size: "15",
    weight: "400",
    color: "#444D5E"
  }, (0, b.__)("📚 Need help or inspiration?", "ohmylms")), React.createElement(I.FlexWP, {
    style: {
      marginTop: "30px"
    },
    items: "center",
    justify: "space-between",
    gap: 3
  }, u.map(function (e, t) {
    return React.createElement(v.Link, {
      to: e.url,
      key: t,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        textDecoration: "none",
        flex: 1,
        marginLeft: 0 !== t ? "12px" : "0"
      }
    }, React.createElement(I.CardWP, {
      isBorderless: !0
    }, React.createElement(I.SpacerWP, {
      marginBottom: "0",
      padding: 2.5
    }, React.createElement(I.FlexWP, {
      items: "center",
      justify: "flex-start",
      gap: 4
    }, React.createElement("span", {
      style: {
        background: "#F4F5F7",
        padding: "8px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, e.icon), React.createElement(I.TextWP, {
      as: "p",
      size: "14",
      weight: "500",
      color: "#444D5E"
    }, e.label)))));
  })))), React.createElement("div", null, React.createElement(I.TextWP, {
    as: "p",
    align: "center",
    size: "14",
    weight: "400",
    color: "#687784",
    style: {
      maxWidth: "500px",
      margin: "24px auto 20px auto"
    }
  }, (0, b.__)("You can access all resources anytime from your dashboard.", "ohmylms")), React.createElement(I.FlexWP, {
    items: "center",
    justify: "center",
    style: {
      maxWidth: "500px",
      margin: "0 auto"
    },
    gap: 1
  }, React.createElement(I.TextWP, {
    as: "p",
    align: "center",
    size: "14",
    weight: "400",
    color: "#687784"
  }, (0, b.__)("Unlock more with OhMyLMS.", "ohmylms")), React.createElement(v.Link, {
    to: "https://ohmylms.com/ohmylms-features/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: "#6E42D3"
    }
  }, (0, b.__)("See Pro features", "ohmylms")))))))));
};

const Fne = (0, g.memo)(Ine);

function Nne(e) {
  return Nne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Nne(e);
}

function Dne(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Nne(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Nne(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Nne(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function Wne() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return zne(u, "_invoke", function (n, r, a) {
      var o,
        l,
        c,
        u = 0,
        s = a || [],
        d = !1,
        m = {
          p: 0,
          n: 0,
          v: e,
          a: p,
          f: p.bind(e, 4),
          d: function (t, n) {
            return o = t, l = 0, c = e, m.n = n, i;
          }
        };
      function p(n, r) {
        for (l = n, c = r, t = 0; !d && u && !a && t < s.length; t++) {
          var a,
            o = s[t],
            p = m.p,
            f = o[2];
          n > 3 ? (a = f === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, l = 0));
        }
        if (a || n > 1) return i;
        throw d = !0, r;
      }
      return function (a, s, f) {
        if (u > 1) throw TypeError("Generator is already running");
        for (d && 1 === s && p(s, f), l = s, c = f; (t = l < 2 ? e : c) || !d;) {
          o || (l ? l < 3 ? (l > 1 && (m.n = -1), p(l, c)) : m.n = c : m.v = c);
          try {
            if (u = 2, o) {
              if (l || (a = "next"), t = o[a]) {
                if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                c = t.value, l < 2 && (l = 0);
              } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
              o = e;
            } else if ((t = (d = m.n < 0) ? c : n.call(r, m)) !== i) break;
          } catch (t) {
            o = e, l = 1, c = t;
          } finally {
            u = 1;
          }
        }
        return {
          value: t,
          done: d
        };
      };
    }(n, a, o), !0), u;
  }
  var i = {};
  function l() {}
  function c() {}
  function u() {}
  t = Object.getPrototypeOf;
  var s = [][r] ? t(t([][r]())) : (zne(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, zne(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, zne(d, "constructor", u), zne(u, "constructor", c), c.displayName = "GeneratorFunction", zne(u, a, "GeneratorFunction"), zne(d), zne(d, a, "Generator"), zne(d, r, function () {
    return this;
  }), zne(d, "toString", function () {
    return "[object Generator]";
  }), (Wne = function () {
    return {
      w: o,
      m
    };
  })();
}

function zne(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  zne = function (e, t, n, r) {
    function o(t, n) {
      zne(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, zne(e, t, n, r);
}

function Bne(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Lne(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Bne(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Bne(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function Vne(e, t) {
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
  }(e, t) || Hne(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Hne(e, t) {
  if (e) {
    if ("string" == typeof e) return Gne(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gne(e, t) : void 0;
  }
}

function Gne(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

n(26456);
