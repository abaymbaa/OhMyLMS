/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createCouponModal(readRuntime) {
  return function CouponModal(props) {
    const {
      Cre,
      Ge,
      I: Controls,
      Nm,
      Pf,
      Pre,
      React,
      Rre,
      Sre,
      b: I18n,
      g: ReactHooks,
      jf,
      sH
    } = readRuntime();
    var t = props.isOpen,
      n = props.setIsOpen,
      r = (props.isFetch, props.setIsFetch, props.fetchCourses, props.courses, props.setCoupons, props.createCoupon),
      a = props.data,
      o = props.setSelectedData,
      i = Pre((0, ReactHooks.useState)(!1), 2),
      l = i[0],
      c = i[1],
      u = Pre((0, ReactHooks.useState)((0, I18n.__)("Untitled", "ohmylms")), 2),
      s = u[0],
      d = u[1],
      m = Pre((0, ReactHooks.useState)(""), 2),
      p = m[0],
      f = m[1],
      v = Pre((0, ReactHooks.useState)("percent"), 2),
      h = v[0],
      y = v[1],
      _ = Pre((0, ReactHooks.useState)(5), 2),
      w = _[0],
      E = _[1],
      S = Pre((0, ReactHooks.useState)(1), 2),
      R = S[0],
      x = S[1],
      C = Pre((0, ReactHooks.useState)(1), 2),
      P = C[0],
      O = C[1],
      k = Pre((0, ReactHooks.useState)(""), 2),
      j = k[0],
      A = k[1],
      M = Pre((0, ReactHooks.useState)([]), 2),
      T = M[0],
      F = M[1],
      N = Pre((0, ReactHooks.useState)(new Date()), 2),
      D = N[0],
      W = N[1],
      z = Pre((0, ReactHooks.useState)(function () {
        var e = new Date();
        return e.setDate(e.getDate() + 1), e;
      }), 2),
      B = z[0],
      L = z[1],
      V = Pre((0, ReactHooks.useState)(!1), 2),
      H = V[0],
      G = V[1],
      U = Pre((0, ReactHooks.useState)((0, I18n.__)("Please enter 3 or more characters...", "ohmylms")), 2),
      q = (U[0], U[1], Pre((0, ReactHooks.useState)(!1), 2)),
      Y = q[0],
      Q = q[1];
    (0, ReactHooks.useEffect)(function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i = !0;
      return i && (e = "" !== s.trim(), t = parseFloat(w) > 0, n = parseInt(P, 10) > 0, r = parseInt(R, 10) > 0, a = new Date(B) > new Date(D), o = "selected_course" !== j || T.length > 0, Q(e && t && n && r && a && o)), function () {
        i = !1;
      };
    }, [s, w, P, D, B, R, j, T]);
    var Z = function () {
        n(!1), o(null);
      },
      $ = function () {
        var e = Math.random().toString(36).substring(2, 8).toUpperCase();
        return "".concat("SALE").concat(e);
      },
      K = Pre((0, ReactHooks.useState)(function () {
        return $();
      }), 2),
      J = K[0],
      X = K[1],
      ee = function () {
        var e,
          t = (e = Rre().m(function e() {
            var t, n, o, i, l, c;
            return Rre().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  return e.p = 0, G(!0), l = {
                    code: J,
                    title: s,
                    amount: w,
                    discount_type: h,
                    description: p,
                    date_expires: {
                      date: moment(B).format("YYYY-MM-DDTHH:mm:ss"),
                      timezone: null === (t = window) || void 0 === t || null === (t = t.ohmylms_params) || void 0 === t || null === (t = t.timezone) || void 0 === t ? void 0 : t.timezone_string,
                      timezone_type: null === (n = window) || void 0 === n || null === (n = n.ohmylms_params) || void 0 === n || null === (n = n.timezone) || void 0 === n ? void 0 : n.timezone_type
                    },
                    date_start: {
                      date: moment(D).format("YYYY-MM-DDTHH:mm:ss"),
                      timezone: null === (o = window) || void 0 === o || null === (o = o.ohmylms_params) || void 0 === o || null === (o = o.timezone) || void 0 === o ? void 0 : o.timezone_string,
                      timezone_type: null === (i = window) || void 0 === i || null === (i = i.ohmylms_params) || void 0 === i || null === (i = i.timezone) || void 0 === i ? void 0 : i.timezone_type
                    },
                    individual_use: "no",
                    exclude_sale_items: [],
                    course_id_type: j,
                    course_ids: T.map(function (e) {
                      return null == e ? void 0 : e.value;
                    }),
                    excluded_course_ids: [],
                    usage_limit: P,
                    usage_limit_per_user: R
                  }, null != a && a.id && (l.id = null == a ? void 0 : a.id), e.n = 1, r(l);
                case 1:
                  e.n = 3;
                  break;
                case 2:
                  e.p = 2, c = e.v, G(!1), console.error(c);
                case 3:
                  return e.p = 3, G(!1), e.f(3);
                case 4:
                  return e.a(2);
              }
            }, e, null, [[0, 2, 3, 4]]);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                Cre(o, r, a, i, l, "next", e);
              }
              function l(e) {
                Cre(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function () {
          return t.apply(this, arguments);
        };
      }(),
      te = (0, ReactHooks.useMemo)(function () {
        return [{
          label: "Percentage",
          value: "percent"
        }, {
          label: "Flat Rate",
          value: "flat-rate"
        }];
      }, []);
    (0, ReactHooks.useMemo)(function () {
      return [{
        label: "All Courses",
        value: "all"
      }, {
        label: "Specific Course",
        value: "selected_course"
      }];
    }, []), (0, ReactHooks.useEffect)(function () {
      var e, t;
      a && (d((null == a ? void 0 : a.title) || "Untitled"), X((null == a ? void 0 : a.code) || ""), f((null == a ? void 0 : a.description) || ""), y((null == a ? void 0 : a.discount_type) || "percent"), E((null == a ? void 0 : a.amount) || ""), x((null == a ? void 0 : a.usage_limit_per_user) || 1), O((null == a ? void 0 : a.usage_limit) || ""), null != a && a.course_id_type ? (A(null == a ? void 0 : a.course_id_type), F((null == a ? void 0 : a.course_ids) || [])) : (A("all"), F([])), null != a && a.date_expires && L(new Date(null == a || null === (e = a.date_expires) || void 0 === e ? void 0 : e.date)), null != a && a.date_start && W(new Date(null == a || null === (t = a.date_start) || void 0 === t ? void 0 : t.date)));
    }, [a]);
    var ne = isNaN(w) ? "0" : Number(w).toFixed(0);
    return <React.Fragment>{t && <Controls.ModalWP title={(0, I18n.__)(" Coupon Settings", "ohmylms")} onRequestClose={Z} shouldCloseOnEsc={!0} shouldCloseOnClickOutside={!0} size={"large"}><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP marginBottom={0} marginTop={2} padding={1}><Pf title={(0, I18n.__)("Coupon Title", "ohmylms")} description={(0, I18n.__)("An internal name to help you identify and manage this coupon.", "ohmylms")} inputType={"text"} value={Ge(s)} onChange={function (e) {
              return d(e);
            }} /><Controls.SpacerWP padding={4}><Controls.FlexWP gap={8} align={"flex-start"} justify={"space-between"}><Controls.FlexItemWP isBlock={!0}><Controls.HeadingWP level={"4"}>{(0, I18n.__)("Coupon Code", "ohmylms")}</Controls.HeadingWP><Controls.TextWP>{(0, I18n.__)("A unique code that customers can enter during checkout to receive a discount.", "ohmylms")}</Controls.TextWP></Controls.FlexItemWP><Controls.FlexItemWP isBlock={!0} className={"ohmylms-coupon-generate"}><Controls.FlexWP gap={2}><Controls.FlexItemWP style={{
                      position: "relative",
                      width: "calc(100% - 40px)"
                    }}><Controls.InputWP type={"text"} value={J} onChange={function (e) {
                        var t = e.replace(/[^a-zA-Z0-9-_]/g, "");
                        ("" === t || /[a-zA-Z]/.test(t)) && X(t);
                      }} /><Controls.ButtonWP className={"ohmylms-coupon-generate-btn ".concat(l && "is-generating")} onClick={function () {
                        c(!0), setTimeout(function () {
                          var e = $();
                          X(e), c(!1);
                        }, 800);
                      }}><Sre /></Controls.ButtonWP></Controls.FlexItemWP><jf.A textToCopy={J} /></Controls.FlexWP></Controls.FlexItemWP></Controls.FlexWP></Controls.SpacerWP><Pf title={(0, I18n.__)("Coupon Description", "ohmylms")} description={(0, I18n.__)("Explain the purpose or details of the coupon.", "ohmylms")} inputType={"textarea"} placeholder={(0, I18n.__)("Type here", "ohmylms")} value={Ge(p)} onChange={function (e) {
              return f(e);
            }} /></Controls.SpacerWP></Controls.CardWP><Controls.SpacerWP marginTop={5} /><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP marginBottom={0} padding={1}><Nm title={(0, I18n.__)("Discount Type", "ohmylms")} description={(0, I18n.__)("Choose whether the discount is a percentage of the price or a fixed amount.", "ohmylms")} onChange={function (e) {
              return y(e);
            }} value={h} data={te} staticSearch={!0} /><Pf title={(0, I18n.__)("Discount Value", "ohmylms")} description={(0, I18n.__)("Enter the value of the discount based on the selected discount type.", "ohmylms")} inputType={"number"} value={"percent" === h ? ne : w} onChange={function (e) {
              return E(e);
            }} suffix={"percent" === h ? "%" : ""} min={0} step={"percent" === h ? 1 : .01} max={"percent" === h ? 100 : null} onKeyDown={function (e) {
              "." !== e.key && "," !== e.key && "e" !== e.key || "percent" === h && e.preventDefault();
            }} /><Pf title={(0, I18n.__)("Usage Limit", "ohmylms")} description={(0, I18n.__)("Set how many times customers can use this coupon.", "ohmylms")} inputType={"number"} value={P} onChange={function (e) {
              return O(e);
            }} min={0} /><Pf title={(0, I18n.__)("Usage Limit per User", "ohmylms")} description={(0, I18n.__)("Set how many times an individual customer can use this coupon.", "ohmylms")} inputType={"number"} value={R} onChange={function (e) {
              return x(e);
            }} min={0} /></Controls.SpacerWP></Controls.CardWP><Controls.SpacerWP marginTop={5} /><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP marginBottom={0} padding={4}><Controls.FlexWP gap={8} align={"flex-start"} justify={"space-between"}><Controls.FlexItemWP isBlock={!0}><Controls.HeadingWP level={"4"}>{(0, I18n.__)("Start Date", "ohmylms")}</Controls.HeadingWP><Controls.SpacerWP marginBottom={1} /><Controls.TextWP>{(0, I18n.__)("The date from which the coupon becomes active and can be used.", "ohmylms")}</Controls.TextWP></Controls.FlexItemWP><Controls.FlexItemWP isBlock={!0} className={"coupon-datetime-picker"}><Controls.FlexWP justify={"flex-end"}>{React.createElement(sH, {
                    date: D,
                    onChange: function (e) {
                      !function (e) {
                        W(e);
                      }(e);
                    },
                    isInvalidDateCallback: function (e) {
                      var t = new Date();
                      return t.setHours(0, 0, 0, 0), new Date(e) < t;
                    },
                    placeholder: (0, I18n.__)("Select Start Date")
                  })}</Controls.FlexWP></Controls.FlexItemWP></Controls.FlexWP></Controls.SpacerWP></Controls.CardWP><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP marginTop={5} marginBottom={0} padding={4}><Controls.FlexWP gap={8} align={"flex-start"} justify={"space-between"}><Controls.FlexItemWP isBlock={!0}><Controls.HeadingWP level={"4"}>{(0, I18n.__)("Expire Date", "ohmylms")}</Controls.HeadingWP><Controls.SpacerWP marginBottom={1} /><Controls.TextWP>{(0, I18n.__)("Add an expiry date of this coupon. Keep this blank for keeping the coupon validity unlimited.", "ohmylms")}</Controls.TextWP></Controls.FlexItemWP><Controls.FlexItemWP isBlock={!0} className={"coupon-datetime-picker"}><Controls.FlexWP justify={"flex-end"}>{React.createElement(sH, {
                    date: B,
                    onChange: function (e) {
                      !function (e) {
                        L(e);
                      }(e);
                    },
                    isInvalidDateCallback: function (e) {
                      var t = new Date(D || new Date());
                      return t.setHours(0, 0, 0, 0), new Date(e) < t;
                    },
                    placeholder: (0, I18n.__)("Select Expire Date")
                  })}</Controls.FlexWP></Controls.FlexItemWP></Controls.FlexWP></Controls.SpacerWP></Controls.CardWP><Controls.SpacerWP marginTop={5}><Controls.FlexWP justify={"flex-end"} align={"center"} gap={2}><Controls.ButtonWP variant={"secondary"} onClick={Z}>{(0, I18n.__)("Cancel", "ohmylms")}</Controls.ButtonWP><Controls.ButtonWP variant={"primary"} onClick={ee} isBusy={H} disabled={!J || !Y || H}>{null != a && a.id ? (0, I18n.__)("Update", "ohmylms") : (0, I18n.__)("Create", "ohmylms")}</Controls.ButtonWP></Controls.FlexWP></Controls.SpacerWP></Controls.ModalWP>}</React.Fragment>;
  };
}
