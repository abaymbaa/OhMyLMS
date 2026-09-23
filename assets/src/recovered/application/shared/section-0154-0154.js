// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var o2 = function () {
    return React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M12 4L4 12M4 4L12 12",
      stroke: "#9CA3AF",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  },
  i2 = function () {
    return React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M13.3337 4L6.00033 11.3333L2.66699 8",
      stroke: "#6E42D3",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  },
  l2 = [{
    tier: "starter",
    label: "Starter",
    keys: ["small", "starter", "solo", "sololifetime", "soloannual", "solo_annual", "solo-annual", "starter-annual", "starter_annual", "starterannual", "solo_lifetime", "solo-lifetime", "starterlifetime", "starter_lifetime", "starter-lifetime", "smallannual"],
    totalTokens: 9e6,
    totalImages: 50,
    missingFeatures: [(0, b.__)("5 Sites License", "ohmylms"), (0, b.__)("Mail Mint Automation", "ohmylms"), (0, b.__)("Dynamic Segmentation", "ohmylms"), (0, b.__)("Email & Form Builder", "ohmylms"), (0, b.__)("WooCommerce Integration", "ohmylms"), (0, b.__)("Form Integrations", "ohmylms")]
  }, {
    tier: "pro",
    label: "Pro",
    keys: ["pro", "prolifetime", "pro-lifetime", "pro_lifetime", "pro-annual", "proannual", "pro_annual"],
    totalTokens: 9e6,
    totalImages: 50,
    missingFeatures: [(0, b.__)("10 Sites License", "ohmylms"), (0, b.__)("20M Token & 100 Image Credits", "ohmylms"), (0, b.__)("Content Protection", "ohmylms"), (0, b.__)("Cohort Courses", "ohmylms"), (0, b.__)("Live Classes (Zoom)", "ohmylms"), (0, b.__)("Mollie, Razorpay +3", "ohmylms")]
  }, {
    tier: "business",
    label: "Business",
    keys: ["medium", "growthlifetime", "growth_lifetime", "growth-lifetime", "growthannual", "growth-annual", "growth_annual", "medium_annual", "growth"],
    totalTokens: 2e7,
    totalImages: 100,
    missingFeatures: [(0, b.__)("50 Sites License", "ohmylms"), (0, b.__)("50M Token & 500 Image Credits", "ohmylms"), (0, b.__)("Community", "ohmylms"), (0, b.__)("White Label Support", "ohmylms"), (0, b.__)("Custom Certificate Design", "ohmylms"), (0, b.__)("Custom Branding", "ohmylms")]
  }, {
    tier: "agency",
    label: "Agency",
    keys: ["large", "businesslifetime", "business-lifetime", "business_lifetime", "largeannual", "businessannual", "business-annual", "business_annual", "business"],
    totalTokens: 5e7,
    totalImages: 500,
    missingFeatures: []
  }],
  c2 = function (e) {
    if (!e) return {};
    var t = e.toLowerCase();
    return l2.find(function (e) {
      return e.keys.includes(t);
    }) || l2[0];
  },
  u2 = function (e) {
    var t = Number(e);
    return isNaN(t) ? e : t >= 1e6 ? (t / 1e6).toFixed(t % 1e6 == 0 ? 0 : 1) + "M" : t >= 1e3 ? (t / 1e3).toFixed(t % 1e3 == 0 ? 0 : 1) + "K" : t.toString();
  },
  s2 = function () {
    var e = (0, y.useDispatch)(T.default),
      t = (0, y.useSelect)(function (e) {
        return e(T.default).getNotificationMessage();
      }, []),
      n = (0, y.useSelect)(function (e) {
        return e(T.default).getNotificationStatus();
      }, []),
      r = (0, y.useSelect)(function (e) {
        return e(T.default).getAppAllData();
      }, []),
      a = (0, z.A)(),
      o = a.openNotificationWithIcon,
      i = a.contextHolder,
      c = r2((0, g.useState)(!1), 2),
      u = c[0],
      s = c[1],
      d = r2((0, g.useState)(""), 2),
      m = d[0],
      p = d[1],
      f = r2((0, g.useState)(!1), 2),
      v = f[0],
      h = f[1],
      _ = r2((0, g.useState)(null), 2),
      w = (_[0], _[1]),
      E = r2((0, g.useState)(!1), 2),
      S = E[0],
      R = E[1],
      x = r2((0, g.useState)(!1), 2),
      C = (x[0], x[1]),
      P = r2((0, g.useState)(!0), 2),
      O = P[0],
      k = P[1],
      j = function () {
        var e = n2(X1().m(function e() {
          var t, n, r;
          return X1().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return e.p = 0, k(!0), e.n = 1, l()({
                  path: "/creator-lms/v1/license/status",
                  method: "GET"
                });
              case 1:
                null != (t = e.v) && t.success && null != t && t.data && (n = t.data, h(n.is_valid), p(n.license_key || ""), w(n), C(!0)), e.n = 3;
                break;
              case 2:
                e.p = 2, r = e.v, console.error("Failed to fetch license status:", r), C(!1);
              case 3:
                return e.p = 3, k(!1), e.f(3);
              case 4:
                return e.a(2);
            }
          }, e, null, [[0, 2, 3, 4]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
      A = function () {
        var e = n2(X1().m(function e() {
          var t, n, r;
          return X1().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return e.p = 0, e.n = 1, l()({
                  path: "/creatorlms/v1/community-license/status",
                  method: "GET"
                });
              case 1:
                null != (t = e.v) && t.success && null != t && t.data && (n = t.data, setIsCommunityLicenseActive(n.is_valid), setCommunityLicenseKey(n.license_key || ""), setCommunityLicenseData(n)), e.n = 3;
                break;
              case 2:
                e.p = 2, r = e.v, console.error("Failed to fetch community license status:", r);
              case 3:
                return e.a(2);
            }
          }, e, null, [[0, 2]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();
    (0, g.useEffect)(function () {
      var e = function () {
        var e = n2(X1().m(function e() {
          var t, n, r;
          return X1().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return e.p = 0, e.n = 1, l()({
                  path: "/wp/v2/plugins",
                  method: "GET"
                });
              case 1:
                t = e.v, n = t.find(function (e) {
                  return e.plugin && (e.plugin.includes("creatorlms-community") || e.plugin.includes("creator-community"));
                }), R(n && "active" === n.status), e.n = 3;
                break;
              case 2:
                e.p = 2, r = e.v, console.error("Error checking community status:", r);
              case 3:
                return e.a(2);
            }
          }, e, null, [[0, 2]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();
      e();
    }, []), (0, g.useEffect)(function () {
      var e = !0;
      return e && (j(), S && A()), function () {
        e = !1;
      };
    }, [S]);
    var M = function () {
        var t = n2(X1().m(function t() {
          var n, r, a;
          return X1().w(function (t) {
            for (;;) switch (t.p = t.n) {
              case 0:
                return t.p = 0, s(!0), t.n = 1, l()({
                  path: "/creator-lms/v1/license/activate/",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    license_key: m
                  })
                });
              case 1:
                null != (n = t.v) && n.success ? (h(!0), o("success", "License activated successfully."), e.setGlobalDataViaKey("license_info", null == n ? void 0 : n.data), window.location.reload()) : (h(!1), o("error", "Invalid license key.")), t.n = 3;
                break;
              case 2:
                t.p = 2, a = t.v, console.error(a), r = (null == a ? void 0 : a.message) || "An error occurred.", o("error", r);
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
      F = function () {
        var t = n2(X1().m(function t() {
          var n, r, a;
          return X1().w(function (t) {
            for (;;) switch (t.p = t.n) {
              case 0:
                return t.p = 0, s(!0), t.n = 1, l()({
                  path: "/creator-lms/v1/license/deactivate/",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                });
              case 1:
                null != (n = t.v) && n.success ? (h(!1), o("success", "License deactivated successfully."), e.setGlobalDataViaKey("license_info", null == n ? void 0 : n.data), window.location.reload()) : (h(!0), o("error", "Invalid license key.")), t.n = 3;
                break;
              case 2:
                t.p = 2, a = t.v, console.error(a), r = (null == a ? void 0 : a.message) || "An error occurred.", o("error", r);
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
      }();
    (0, g.useEffect)(function () {
      !u && t && o(n, t);
    }, [t]);
    var N,
      D = (null == r ? void 0 : r.license_info) || {},
      W = (null == r ? void 0 : r.ai_settings) || {},
      B = (null == D ? void 0 : D.plan) || "",
      L = c2(B),
      V = function (e) {
        var t = l2.findIndex(function (t) {
          return t.tier === e.tier;
        });
        return t < l2.length - 1 ? l2[t + 1] : null;
      }(L),
      H = (N = B) ? c2(N).label : "Starter",
      G = function (e) {
        if (!e) return "";
        var t = new Date(e);
        return isNaN(t.getTime()) ? e : t.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      }(null == D ? void 0 : D.end_date),
      U = Number(null == W ? void 0 : W.text_credit) || 0,
      q = Number(null == W ? void 0 : W.image_count) || 0,
      Y = L.totalTokens || 0,
      Q = L.totalImages || 0,
      Z = Math.max(Y - U, 0),
      $ = Y > 0 ? Math.min(Z / Y * 100, 100) : 0,
      K = m ? m.replace(/^(.*)(.{4})$/, function (e, t, n) {
        return t.replace(/./g, "X").replace(/(.{4})/g, "$1-").slice(0, -1) + "-" + n;
      }) : "",
      J = L.missingFeatures || [],
      X = 0 === J.length;
    return React.createElement(React.Fragment, null, i, React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary",
      className: "omlms-full-screen-height"
    }, React.createElement(I.SpacerWP, {
      padding: 4,
      marginTop: 0,
      marginBottom: 0
    }, O && React.createElement(React.Fragment, null, React.createElement(I.SkeletonWP, {
      active: !0,
      rows: 10,
      style: {
        position: "absolute",
        top: "17px",
        left: "15px",
        zIndex: 3,
        background: "#FFFFFF",
        height: "calc(100% - 32px)",
        padding: "24px",
        width: "calc(100% - 26px)",
        borderRadius: "8px"
      }
    })), React.createElement(I.HeadingWP, {
      level: "4",
      size: "20px",
      color: "#000D25",
      weight: "600"
    }, (0, b.__)("Manage License", "ohmylms")), React.createElement(I.CardWP, {
      padding: "0",
      margin: "10px 0 18px",
      isBorderless: !0,
      style: {
        border: "1px solid #6E42D3",
        borderRadius: "8px",
        overflow: "hidden"
      }
    }, React.createElement(I.SpacerWP, {
      padding: 4,
      marginTop: 0,
      marginBottom: 0
    }, React.createElement(I.FlexWP, {
      align: "center",
      justify: "space-between"
    }, React.createElement(I.FlexWP, {
      align: "center",
      justify: "flex-start",
      gap: 3
    }, React.createElement(I.TextWP, {
      size: "16px",
      color: "#000D25",
      weight: "600"
    }, (0, b.__)("License Key", "ohmylms")), v && React.createElement(I.BadgeWP, {
      variant: "success",
      isRounded: !0,
      style: {
        background: "#6E42D3",
        color: "#fff",
        border: "none",
        fontSize: "12px",
        padding: "4px 12px"
      }
    }, React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "11",
      height: "12",
      viewBox: "0 0 11 12",
      fill: "none"
    }, React.createElement("path", {
      d: "M1.05724 7.09971C0.952148 7.10007 0.849113 7.07089 0.760103 7.01557C0.671094 6.96026 0.599764 6.88107 0.554402 6.78721C0.509039 6.69335 0.491505 6.58867 0.503837 6.48534C0.51617 6.382 0.557862 6.28425 0.62407 6.20345L6.12199 0.594908C6.16323 0.547775 6.21943 0.515924 6.28136 0.504584C6.34329 0.493244 6.40728 0.503088 6.46282 0.532501C6.51836 0.561914 6.56214 0.609147 6.587 0.666448C6.61185 0.72375 6.61629 0.787714 6.59958 0.847842L5.53332 4.15798C5.50188 4.2413 5.49132 4.33092 5.50255 4.41917C5.51378 4.50741 5.54646 4.59164 5.59779 4.66463C5.64912 4.73762 5.71757 4.7972 5.79726 4.83824C5.87696 4.87929 5.96552 4.90058 6.05535 4.90029H9.94276C10.0479 4.89993 10.1509 4.92911 10.2399 4.98443C10.3289 5.03974 10.4002 5.11893 10.4456 5.21279C10.491 5.30665 10.5085 5.41133 10.4962 5.51466C10.4838 5.618 10.4421 5.71575 10.3759 5.79655L4.87801 11.4051C4.83677 11.4522 4.78057 11.4841 4.71864 11.4954C4.65671 11.5068 4.59272 11.4969 4.53718 11.4675C4.48164 11.4381 4.43786 11.3909 4.413 11.3336C4.38815 11.2762 4.38371 11.2123 4.40042 11.1522L5.46668 7.84202C5.49812 7.7587 5.50868 7.66908 5.49745 7.58083C5.48622 7.49259 5.45354 7.40836 5.40221 7.33537C5.35088 7.26238 5.28243 7.2028 5.20274 7.16176C5.12304 7.12071 5.03448 7.09942 4.94465 7.09971H1.05724Z",
      stroke: "white",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })), React.createElement("span", {
      style: {
        marginInlineStart: "6px"
      }
    }, H, " ", (0, b.__)("plan", "ohmylms")))), React.createElement(I.FlexWP, {
      align: "center",
      justify: "flex-end",
      gap: 3
    }, v && G && React.createElement(I.TextWP, {
      size: "12px",
      color: "#687784",
      style: {
        background: "#F4F5F7",
        padding: "4px 8px",
        borderRadius: "4px 8px"
      }
    }, (0, b.__)("Plan active till", "ohmylms"), " ", G), React.createElement(I.BadgeWP, {
      variant: v ? "success" : "danger",
      isRounded: !0,
      style: {
        fontSize: "12px",
        padding: "2px 12px",
        background: v ? "#33A646" : "#E53E3E",
        color: "#fff",
        border: "none"
      }
    }, v ? (0, b.__)("Active", "ohmylms") : (0, b.__)("Inactive", "ohmylms")))), React.createElement(I.TextWP, {
      size: "13px",
      color: "#6B7280",
      style: {
        marginTop: "2px"
      }
    }, (0, b.__)("Enter or manage your software license key", "ohmylms")), React.createElement(I.FlexWP, {
      align: "stretch",
      justify: "space-between",
      gap: 4,
      style: {
        marginTop: "28px"
      }
    }, React.createElement(I.FlexItemWP, {
      style: {
        flex: 1
      }
    }, React.createElement(I.InputWP, {
      value: v ? K : m,
      onChange: function (e) {
        return !v && p(e);
      },
      placeholder: "XXXX-XXXX-XXXX-AB3D",
      disabled: v,
      __nextHasNoMarginBottom: !0
    })), React.createElement(I.ButtonWP, {
      variant: "outline",
      onClick: function () {
        v ? F() : M();
      },
      isBusy: u,
      style: {
        height: "40px",
        borderColor: "#6E42D3",
        color: "#6E42D3",
        backgroundColor: "transparent"
      },
      disabled: u || !v && "" === m.trim()
    }, v ? (0, b.__)("Deactivate", "ohmylms") : (0, b.__)("Activate", "ohmylms"))))), v && React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
      padding: "0",
      margin: "0 0 24px",
      isBorderless: !0
    }, React.createElement(I.SpacerWP, {
      padding: 4,
      marginTop: 0,
      marginBottom: 0
    }, React.createElement(I.HeadingWP, {
      level: "4",
      size: "18px",
      color: "#000D25",
      weight: "600",
      style: {
        marginBottom: "26px"
      }
    }, (0, b.__)("Usage & Limits", "ohmylms")), React.createElement(I.FlexWP, {
      align: "center",
      justify: "space-between"
    }, React.createElement(I.FlexWP, {
      align: "center",
      justify: "flex-start",
      gap: 2
    }, React.createElement("span", {
      style: {
        background: "#F4F5F7",
        width: "29px",
        height: "29px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%"
      }
    }, React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "13",
      height: "11",
      viewBox: "0 0 13 11",
      fill: "none"
    }, React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.52454 1.2922C4.45632 1.00791 4.00201 1.0079 3.93379 1.2922L3.2121 4.29955C3.03302 5.04577 2.29449 5.57889 1.43983 5.57889H0.604167C0.270495 5.57889 0 5.33736 0 5.03941C0 4.74146 0.270495 4.49992 0.604167 4.49992H1.43983C1.72472 4.49992 1.97089 4.32221 2.03059 4.07347L2.75228 1.06613C3.0934 -0.355368 5.36493 -0.355381 5.70606 1.06612L7.55879 8.78661C7.62701 9.07092 8.08132 9.07091 8.14954 8.78661L8.87123 5.77927C9.05031 5.03304 9.78884 4.49992 10.6435 4.49992H11.4792C11.8128 4.49992 12.0833 4.74146 12.0833 5.03941C12.0833 5.33736 11.8128 5.57889 11.4792 5.57889H10.6435C10.3586 5.57889 10.1124 5.7566 10.0527 6.00534L9.33105 9.01269C8.98993 10.4342 6.7184 10.4342 6.37728 9.01269L4.52454 1.2922Z",
      fill: "#6E42D3"
    }))), React.createElement(I.TextWP, {
      size: "16px",
      color: "#687784",
      weight: "500"
    }, (0, b.__)("AI Credits", "ohmylms"))), React.createElement(I.TextWP, {
      as: "p",
      style: {
        minWidth: "300px"
      },
      align: "right",
      size: "14px",
      color: "#000D25",
      weight: "600"
    }, React.createElement("span", {
      style: {
        fontSize: "20px",
        fontWeight: 700
      }
    }, u2(U)), React.createElement("span", {
      style: {
        color: "#6A7282"
      }
    }, " / ", u2(Y), " ", (0, b.__)("Tokens", "ohmylms")), Q > 0 && React.createElement("span", {
      style: {
        color: "#6A7282"
      }
    }, " · ", q, " / ", Q, " ", (0, b.__)("Images", "ohmylms")))), React.createElement("div", {
      className: "omlms-license-progress-bar",
      style: {
        marginTop: "12px"
      }
    }, React.createElement("div", {
      className: "omlms-license-progress-bar__fill",
      style: {
        width: "".concat($, "%")
      }
    })))), !X && React.createElement(I.CardWP, {
      isBorderless: !0,
      padding: "24px"
    }, React.createElement(I.FlexWP, {
      align: "stretch",
      justify: "space-between",
      gap: 5,
      className: "omlms-license-plans"
    }, React.createElement(I.FlexItemWP, {
      style: {
        flex: 1
      }
    }, React.createElement(I.CardWP, {
      padding: "0",
      fullHeight: !0,
      isBorderless: !0
    }, React.createElement(I.HeadingWP, {
      level: "4",
      size: "22px",
      color: "#000D25",
      weight: "700",
      style: {
        lineHeight: "1.4"
      }
    }, (0, b.__)("Unlock more with Our Premium Plans", "ohmylms")), React.createElement(I.TextWP, {
      size: "14px",
      color: "#6B7280",
      style: {
        marginTop: "12px",
        lineHeight: "1.6"
      }
    }, (0, b.__)("Your current plan covers the basics. Premium plans give you more control, automation, and growth tools when you need them.", "ohmylms")))), React.createElement(I.FlexItemWP, {
      style: {
        flex: 1
      }
    }, React.createElement(I.CardWP, {
      padding: "0",
      fullHeight: !0,
      isBorderless: !0,
      style: {
        border: "2px solid #D1D5DC",
        borderRadius: "14px"
      }
    }, React.createElement(I.SpacerWP, {
      padding: 5,
      marginTop: 0,
      marginBottom: 0
    }, React.createElement(I.BadgeWP, {
      variant: "success",
      isRounded: !0,
      style: {
        fontSize: "11px",
        padding: "2px 10px",
        background: "#4A5565",
        color: "#FFFFFF",
        border: "none",
        position: "absolute",
        top: "-10px"
      }
    }, (0, b.__)("Your Current Plan", "ohmylms")), React.createElement(I.HeadingWP, {
      level: "4",
      size: "24px",
      color: "#101828",
      weight: "700"
    }, H, " ", (0, b.__)("Doesn't have", "ohmylms")), React.createElement("div", {
      className: "omlms-license-feature-list",
      style: {
        marginTop: "16px"
      }
    }, J.map(function (e, t) {
      return React.createElement(I.FlexWP, {
        key: t,
        align: "center",
        justify: "flex-start",
        gap: 2,
        style: {
          marginBottom: "10px"
        }
      }, React.createElement(o2, null), React.createElement(I.TextWP, {
        size: "14px",
        color: "#364153"
      }, e));
    })), React.createElement(I.TextWP, {
      size: "12px",
      color: "#687784",
      style: {
        marginTop: "16px",
        lineHeight: "1.6"
      }
    }, (0, b.__)("Your current plan includes the essentials. These features are available on higher plans.", "ohmylms"))))), React.createElement(I.FlexItemWP, {
      style: {
        flex: 1
      }
    }, React.createElement(I.CardWP, {
      padding: "0",
      fullHeight: !0,
      isBorderless: !0,
      style: {
        border: "2px solid #D1D5DC",
        borderRadius: "14px",
        position: "relative"
      }
    }, React.createElement(I.SpacerWP, {
      padding: 5,
      marginTop: 0,
      marginBottom: 0
    }, React.createElement(I.BadgeWP, {
      variant: "danger",
      isRounded: !0,
      style: {
        fontSize: "11px",
        padding: "2px 10px",
        background: "#6E42D3",
        color: "#fff",
        border: "none",
        position: "absolute",
        top: "-10px"
      }
    }, (0, b.__)("What you are missing", "ohmylms")), React.createElement(I.HeadingWP, {
      level: "4",
      size: "24px",
      color: "#101828",
      weight: "700"
    }, V ? V.label : (0, b.__)("Premium Plans", "ohmylms")), React.createElement("div", {
      className: "omlms-license-feature-list",
      style: {
        marginTop: "16px"
      }
    }, J.map(function (e, t) {
      return React.createElement(I.FlexWP, {
        key: t,
        align: "center",
        justify: "flex-start",
        gap: 2,
        style: {
          marginBottom: "10px"
        }
      }, React.createElement(i2, null), React.createElement(I.TextWP, {
        size: "14px",
        color: "#364153"
      }, e));
    })), React.createElement(I.ButtonWP, {
      variant: "primary",
      href: "https://creatorlms.net/pricing/",
      target: "_blank",
      style: {
        marginTop: "16px",
        width: "100%",
        justifyContent: "center"
      }
    }, V ? "".concat((0, b.__)("Upgrade to", "ohmylms"), " ").concat(V.label) : (0, b.__)("Check all Plans", "ohmylms")))))))))));
  };

const d2 = (0, g.memo)(s2);

function m2(e) {
  return m2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, m2(e);
}

function p2() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return f2(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (f2(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, f2(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, f2(d, "constructor", u), f2(u, "constructor", c), c.displayName = "GeneratorFunction", f2(u, a, "GeneratorFunction"), f2(d), f2(d, a, "Generator"), f2(d, r, function () {
    return this;
  }), f2(d, "toString", function () {
    return "[object Generator]";
  }), (p2 = function () {
    return {
      w: o,
      m
    };
  })();
}

function f2(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  f2 = function (e, t, n, r) {
    function o(t, n) {
      f2(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, f2(e, t, n, r);
}

function v2(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function g2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? v2(Object(n), !0).forEach(function (t) {
      h2(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v2(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function h2(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != m2(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != m2(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == m2(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function y2(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function b2(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        y2(o, r, a, i, l, "next", e);
      }
      function l(e) {
        y2(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function _2(e, t) {
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
      if ("string" == typeof e) return w2(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w2(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function w2(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
