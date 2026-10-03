// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var RT = {
  key: "changeOrderStatus",
  group: "actions",
  type: "action",
  package: "pro",
  category: "mint-woocommerce",
  title: "Change Order Status",
  foreground: "#7F54B3",
  background: "#f7edf7",
  description: (0, b.__)("This action changes the WooCommerce order status.", "mrm"),
  subtitle: function (e) {
    var t, n, r, a;
    return null !== (t = e.settings) && void 0 !== t && null !== (t = t.status_settings) && void 0 !== t && t.status && 0 != (null === (n = e.settings) || void 0 === n || null === (n = n.status_settings) || void 0 === n ? void 0 : n.status) ? "New Order Status: " + (null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r ? void 0 : r.wc_order_statuses.find(function (t) {
      var n;
      return t.value == (null === (n = e.settings) || void 0 === n || null === (n = n.status_settings) || void 0 === n ? void 0 : n.status);
    })).label : null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.NotSetUpYet;
  },
  icon: ST,
  edit: function () {
    var e,
      t,
      n,
      r = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
        };
      }, []),
      a = r.selectedStep,
      o = r.selectedStepIndex,
      i = r.selectedStepCondition,
      l = r.selectedLogicalStepIndex;
    return r.errors, h().createElement(q.PanelBody, {
      opened: !0
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings order-status-changed"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(ST, null), "Change Order Status"), h().createElement("p", {
      className: "sort-description"
    }, "Please select the order status you want to change of this reference order.")), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: "",
      className: "inline-with-link"
    }, "New Order Status"), h().createElement(q.SelectControl, {
      options: null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.wc_order_statuses,
      value: null !== (t = null === (n = a.settings) || void 0 === n || null === (n = n.status_settings) || void 0 === n ? void 0 : n.status) && void 0 !== t ? t : "",
      onChange: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(o, i, l, "status_settings", "status", e);
      }
    })))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/woocommerce-automation/",
    showVideo: !0,
    videoLink: "https://www.youtube.com/embed/DyQ-SchB6Wc"
  }
};

function xT() {
  return React.createElement("svg", {
    width: "23",
    height: "22",
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M9.59237 20.5283C9.38894 20.5287 9.18743 20.4889 8.99945 20.4112C8.81146 20.3334 8.64071 20.2193 8.49701 20.0753L6.83799 18.417C6.60408 18.1744 6.45371 17.8634 6.40877 17.5294C6.36383 17.1953 6.42666 16.8557 6.58812 16.5598C6.73855 16.2678 6.79229 15.9355 6.7416 15.6109C6.69091 15.2863 6.53841 14.9862 6.3061 14.7539C6.07379 14.5217 5.7737 14.3692 5.44912 14.3186C5.12455 14.268 4.79228 14.3218 4.50028 14.4723C4.20422 14.633 3.86467 14.6954 3.53081 14.6503C3.19695 14.6052 2.8861 14.4551 2.64326 14.2215L0.985134 12.5628C0.84124 12.419 0.727093 12.2482 0.649214 12.0603C0.571335 11.8723 0.53125 11.6708 0.53125 11.4674C0.53125 11.2639 0.571335 11.0625 0.649214 10.8745C0.727093 10.6865 0.84124 10.5158 0.985134 10.3719L10.3748 0.981584C10.6654 0.691341 11.0594 0.52832 11.4701 0.52832C11.8809 0.52832 12.2748 0.691341 12.5655 0.981584L14.2245 2.63983C14.4584 2.88248 14.6088 3.19345 14.6537 3.52748C14.6987 3.86151 14.6358 4.20117 14.4744 4.49702C14.324 4.78908 14.2702 5.12138 14.3209 5.44596C14.3716 5.77055 14.5241 6.07064 14.7564 6.30291C14.9887 6.53519 15.2888 6.68764 15.6134 6.73827C15.938 6.7889 16.2702 6.73508 16.5622 6.58458C16.8583 6.42395 17.1978 6.36166 17.5317 6.40673C17.8655 6.45181 18.1763 6.6019 18.4192 6.83531L20.0774 8.49404C20.2213 8.63787 20.3354 8.80864 20.4133 8.9966C20.4912 9.18456 20.5313 9.38602 20.5313 9.58948C20.5313 9.79294 20.4912 9.9944 20.4133 10.1824C20.3354 10.3703 20.2213 10.5411 20.0774 10.6849L10.6877 20.0753C10.544 20.2193 10.3733 20.3334 10.1853 20.4112C9.9973 20.4889 9.7958 20.5287 9.59237 20.5283ZM5.21266 12.97C5.70597 12.971 6.19077 13.0987 6.62059 13.3408C7.05041 13.5829 7.41085 13.9314 7.66735 14.3528C7.92386 14.7742 8.06785 15.2544 8.08551 15.7475C8.10317 16.2405 7.99391 16.7298 7.76821 17.1685C7.73778 17.2149 7.72229 17.2694 7.72384 17.3248C7.72538 17.3803 7.74389 17.4339 7.77685 17.4785L9.43587 19.1363C9.45641 19.1569 9.48081 19.1732 9.50766 19.1843C9.5345 19.1954 9.56328 19.2012 9.59234 19.2012C9.62141 19.2012 9.65018 19.1954 9.67703 19.1843C9.70388 19.1732 9.72828 19.1569 9.74882 19.1363L19.1385 9.74597C19.1591 9.72546 19.1754 9.70111 19.1865 9.67429C19.1976 9.64748 19.2034 9.61873 19.2034 9.5897C19.2034 9.56067 19.1976 9.53193 19.1865 9.50512C19.1754 9.4783 19.1591 9.45395 19.1385 9.43344L17.4804 7.77431C17.4359 7.74128 17.3824 7.7227 17.327 7.72107C17.2717 7.71944 17.2172 7.73484 17.1709 7.76519C16.6286 8.04463 16.0116 8.14453 15.4089 8.05047C14.8061 7.95642 14.2489 7.67327 13.8175 7.24189C13.3862 6.81051 13.1031 6.25323 13.009 5.65046C12.915 5.0477 13.0149 4.43064 13.2943 3.88835C13.3247 3.842 13.3402 3.78743 13.3387 3.73201C13.3371 3.67658 13.3186 3.62297 13.2856 3.57839L11.6266 1.92053C11.6061 1.89997 11.5817 1.88366 11.5548 1.87254C11.528 1.86141 11.4992 1.85569 11.4702 1.85569C11.4411 1.85569 11.4123 1.86141 11.3855 1.87254C11.3586 1.88366 11.3342 1.89997 11.3137 1.92053L1.92397 11.3109C1.90342 11.3314 1.88712 11.3557 1.876 11.3826C1.86487 11.4094 1.85915 11.4381 1.85915 11.4671C1.85915 11.4962 1.86487 11.5249 1.876 11.5517C1.88712 11.5786 1.90342 11.6029 1.92397 11.6234L3.5821 13.2825C3.62656 13.3156 3.68008 13.3342 3.73544 13.3358C3.7908 13.3374 3.84533 13.322 3.89165 13.2917C4.29997 13.0805 4.75295 12.9702 5.21266 12.97Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    d: "M10.5311 13.8491C10.3551 13.849 10.1862 13.779 10.0617 13.6545C9.9372 13.53 9.86723 13.3611 9.86719 13.1851V7.87299C9.86719 7.69689 9.93714 7.52799 10.0617 7.40347C10.1862 7.27894 10.3551 7.20898 10.5311 7.20898C10.7072 7.20898 10.8761 7.27894 11.0006 7.40347C11.1252 7.52799 11.1951 7.69689 11.1951 7.87299V13.1851C11.1951 13.3611 11.1251 13.53 11.0006 13.6545C10.8761 13.779 10.7072 13.849 10.5311 13.8491Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    d: "M8.0259 10.7883C8.51483 10.7883 8.91118 10.3919 8.91118 9.90292C8.91118 9.41396 8.51483 9.01758 8.0259 9.01758C7.53698 9.01758 7.14062 9.41396 7.14062 9.90292C7.14062 10.3919 7.53698 10.7883 8.0259 10.7883Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    d: "M13.0337 12.0402C13.5226 12.0402 13.919 11.6438 13.919 11.1549C13.919 10.6659 13.5226 10.2695 13.0337 10.2695C12.5448 10.2695 12.1484 10.6659 12.1484 11.1549C12.1484 11.6438 12.5448 12.0402 13.0337 12.0402Z",
    fill: "#2D3149"
  }));
}

var CT = [{
    value: "percent",
    label: "Percentage discount"
  }, {
    value: "fixed_cart",
    label: "Fixed cart discount"
  }, {
    value: "fixed_product",
    label: "Fixed product discount"
  }],
  PT = {
    title: "",
    prefix: "",
    type: "",
    amount: 0,
    is_free_shipping: !1,
    no_expiry_date: !0,
    expiry_date: null
  },
  OT = {
    minimum_spend: "",
    maximum_spend: "",
    individual_use: !1,
    exclude_sale: !1,
    restrict_contact_email: !1,
    products: [],
    exclude_products: [],
    categories: [],
    exclude_categories: [],
    allowed_emails: ""
  },
  kT = {
    limit_per_coupon: "",
    limit_per_user: ""
  };

function jT() {
  return React.createElement("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A7A8B3",
    d: "M13.839.688H5.536A1.48 1.48 0 004.063 2.16v1.901H2.16A1.48 1.48 0 00.687 5.537v8.303a1.48 1.48 0 001.474 1.473h8.303a1.48 1.48 0 001.473-1.473v-1.902h1.902a1.48 1.48 0 001.473-1.473V2.16A1.48 1.48 0 0013.84.687zm-3.027 13.15a.349.349 0 01-.348.35H2.16a.349.349 0 01-.349-.35V5.537a.349.349 0 01.35-.348h8.302a.349.349 0 01.348.348v8.303zm3.376-3.374a.349.349 0 01-.35.348h-1.9V5.537a1.48 1.48 0 00-1.474-1.473H5.187V2.16a.349.349 0 01.35-.349h8.302a.349.349 0 01.348.35v8.302z"
  }));
}

const AT = (0, g.memo)(jT);

function MT(e, t) {
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
      if ("string" == typeof e) return TT(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? TT(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function TT(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var IT = function (e) {
  var t,
    n,
    r,
    a,
    o,
    i,
    l,
    c,
    u,
    s,
    d,
    m,
    p,
    f,
    v,
    h,
    _,
    w = (0, y.useSelect)(function (e) {
      return {
        selectedStep: e(Lf).getSelectedStep(),
        selectedStepIndex: e(Lf).getSelectedStepIndex(),
        selectedStepCondition: e(Lf).getSelectedStepCondition(),
        selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
        errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
      };
    }, []),
    E = w.selectedStep,
    S = w.selectedStepIndex,
    R = w.selectedStepCondition,
    x = w.selectedLogicalStepIndex,
    C = (w.errors, null === (t = E.settings) || void 0 === t || null === (t = t.wc_create_coupon_settings) || void 0 === t ? void 0 : t.general_settings),
    P = MT((0, g.useState)(new Date()), 2),
    O = P[0],
    k = P[1],
    j = MT((0, g.useState)(!0), 2),
    A = j[0],
    M = j[1],
    T = MT((0, g.useState)("success"), 2),
    I = T[0],
    F = T[1],
    N = MT((0, g.useState)(!1), 2),
    D = N[0],
    W = N[1],
    z = MT((0, g.useState)(""), 2),
    B = z[0],
    L = z[1];
  (0, g.useEffect)(function () {
    C && M(null == C ? void 0 : C.no_expiry_date);
  }, []);
  var V = function (e, t) {
    var n,
      r = null === (n = E.settings) || void 0 === n || null === (n = n.wc_create_coupon_settings) || void 0 === n ? void 0 : n.general_settings;
    r[e] = t, (0, y.dispatch)(Lf).updateStepArgs(S, R, x, "wc_create_coupon_settings", "general_settings", r);
  };
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "mintmrm_coupon_general_tab"
  }, React.createElement("p", {
    className: "mintmrm_coupon_code_copy"
  }, (0, b.__)("")), React.createElement("div", {
    className: "mintmrm-coupon-copy-wrapper"
  }, React.createElement("p", null, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.UseThisCouponOnEmail, React.createElement("br", null), React.createElement("span", {
    className: "coupon-code-wrapper"
  }, React.createElement("code", null, "{{mint_wc_dynamic_coupon id=".concat(null == E ? void 0 : E.step_id, "}}")), React.createElement("span", {
    className: "copy-btn",
    onClick: function () {
      var e = document.createElement("textarea");
      e.value = "{{mint_wc_dynamic_coupon id=".concat(E.step_id, "}}"), e.style.position = "fixed", e.style.left = "-9999px", document.body.append(e), e.select(), document.execCommand("Copy"), F("success"), W(!0), L("Copied to pasteboard!"), Qh(!1, W);
    }
  }, React.createElement(AT, null))))), React.createElement("div", {
    className: "mintmrm_coupon_title_wrapper mintmrm_section_wrapper"
  }, React.createElement("p", null, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.CouponTitle, React.createElement("span", {
    className: "required-mark"
  }, "*"), React.createElement("span", {
    className: "mintmrm-tooltip"
  }, React.createElement(hy, null), React.createElement("p", null, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.CouponTitleTooltip))), React.createElement("input", {
    type: "text",
    name: "coupon_title",
    defaultValue: (null == C ? void 0 : C.title) || "",
    placeholder: null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.CouponTitle,
    onChange: function (e) {
      return V("title", e.target.value);
    }
  })), React.createElement("div", {
    className: "mintmrm_coupon_code_wrapper mintmrm_section_wrapper"
  }, React.createElement("p", null, null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.CouponCodePrefix, React.createElement("span", {
    className: "required-mark"
  }, "*"), React.createElement("span", {
    className: "mintmrm-tooltip"
  }, React.createElement(hy, null), React.createElement("p", null, null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.CouponCodePrefixTooltip))), React.createElement("input", {
    type: "text",
    name: "coupon_code",
    defaultValue: (null == C ? void 0 : C.prefix) || "",
    placeholder: null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.CouponCodePrefix,
    onChange: function (e) {
      return V("prefix", e.target.value);
    }
  })), React.createElement("div", {
    className: "mintmrm_discount_type_wrapper mintmrm_section_wrapper"
  }, React.createElement("p", null, null === (u = window) || void 0 === u || null === (u = u.MRM_Vars) || void 0 === u || null === (u = u.mint_trans) || void 0 === u ? void 0 : u.DiscountType, React.createElement("span", {
    className: "mintmrm-tooltip"
  }, React.createElement(hy, null), React.createElement("p", null, null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s || null === (s = s.mint_trans) || void 0 === s ? void 0 : s.DiscountTypeTooltip))), React.createElement(yg.Ay, {
    options: CT,
    value: null == C ? void 0 : C.type,
    onChange: function (e) {
      return V("type", e);
    }
  })), React.createElement("div", {
    className: "mintmrm_coupon_amount_wrapper mintmrm_section_wrapper"
  }, React.createElement("p", null, null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.CouponAmount, React.createElement("span", {
    className: "mintmrm-tooltip"
  }, React.createElement(hy, null), React.createElement("p", null, null === (m = window) || void 0 === m || null === (m = m.MRM_Vars) || void 0 === m || null === (m = m.mint_trans) || void 0 === m ? void 0 : m.CouponAmountTooltip))), React.createElement("input", {
    type: "number",
    name: "coupon_amount",
    defaultValue: (null == C ? void 0 : C.amount) || 0,
    min: 0,
    onChange: function (e) {
      return V("amount", e.target.value);
    },
    onKeyDown: function (e) {
      return ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
    }
  })), React.createElement("div", {
    className: "mintmrm_free_shipping_wrapper mintmrm_section_wrapper"
  }, React.createElement("label", null, React.createElement("input", {
    type: "checkbox",
    id: "freeShippingCheckbox",
    checked: (null == C ? void 0 : C.is_free_shipping) || !1,
    onClick: function (e) {
      return V("is_free_shipping", e.target.checked);
    }
  }), React.createElement("p", null, null === (p = window) || void 0 === p || null === (p = p.MRM_Vars) || void 0 === p || null === (p = p.mint_trans) || void 0 === p ? void 0 : p.AllowFreeShipping)), React.createElement("span", null, null === (f = window) || void 0 === f || null === (f = f.MRM_Vars) || void 0 === f || null === (f = f.mint_trans) || void 0 === f ? void 0 : f.AllowFreeShippingMsg)), React.createElement("hr", null), React.createElement("div", {
    className: "mintmrm_expire_date_wrapper mintmrm_section_wrapper"
  }, React.createElement("label", null, React.createElement("input", {
    type: "checkbox",
    id: "freeShippingCheckbox",
    checked: (null == C ? void 0 : C.has_expiry_date) || A,
    onClick: function (e) {
      return function (e) {
        var t = new Date().toLocaleDateString("en-US"),
          n = null == C ? void 0 : C.expiry_date;
        M(e.target.checked), V("no_expiry_date", e.target.checked), k(n || t), V("expiry_date", n || t);
      }(e);
    }
  }), React.createElement("p", null, null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v || null === (v = v.mint_trans) || void 0 === v ? void 0 : v.CouponExpiryDate, React.createElement("span", {
    className: "mintmrm-tooltip"
  }, React.createElement(hy, null), React.createElement("p", null, null === (h = window) || void 0 === h || null === (h = h.MRM_Vars) || void 0 === h || null === (h = h.mint_trans) || void 0 === h ? void 0 : h.CouponExpiryDateTooltip)))), React.createElement("span", null, null === (_ = window) || void 0 === _ || null === (_ = _.MRM_Vars) || void 0 === _ || null === (_ = _.mint_trans) || void 0 === _ ? void 0 : _.CouponExpiryDateMsg), !A && React.createElement(q.DateTimePicker, {
    currentDate: (null == C ? void 0 : C.expiry_date) || O,
    is12Hour: !0,
    __nextRemoveHelpButton: !0,
    __nextRemoveResetButton: !0,
    onChange: function (e) {
      return V("expiry_date", new Date(e).toLocaleDateString("en-US"));
    }
  })), D && React.createElement(oy, {
    setShowNotification: W,
    notificationType: I,
    setNotificationType: F,
    message: B
  })));
};

const FT = (0, g.memo)(IT);

function NT() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return DT(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (DT(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, DT(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, DT(d, "constructor", u), DT(u, "constructor", c), c.displayName = "GeneratorFunction", DT(u, a, "GeneratorFunction"), DT(d), DT(d, a, "Generator"), DT(d, r, function () {
    return this;
  }), DT(d, "toString", function () {
    return "[object Generator]";
  }), (NT = function () {
    return {
      w: o,
      m
    };
  })();
}

function DT(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  DT = function (e, t, n, r) {
    function o(t, n) {
      DT(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, DT(e, t, n, r);
}

function WT(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function zT(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var BT = function (e) {
  var t,
    n = e.title,
    r = e.tooltipMessage,
    a = e.placeholder,
    o = e.onChange,
    i = e.value,
    c = e.apiPath,
    u = e.notFoundMessage,
    s = e.isProduct,
    d = function (e, t) {
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
          if ("string" == typeof e) return zT(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zT(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.SearchPlaceholder), 2),
    m = d[0],
    p = d[1],
    f = function () {
      var e,
        t = (e = NT().m(function e(t) {
          var n, r, a;
          return NT().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                if (!(t.length >= 3)) {
                  e.n = 5;
                  break;
                }
                return e.n = 1, l()({
                  path: "".concat(c, "=").concat(t)
                });
              case 1:
                if (n = e.v, r = null == n ? void 0 : n.data, !(0, A.isEmpty)(r)) {
                  e.n = 2;
                  break;
                }
                return p(u), e.a(2, []);
              case 2:
                if (p(null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.SearchPlaceholder), !s) {
                  e.n = 3;
                  break;
                }
                return e.a(2, Object.keys(r).map(function (e) {
                  return {
                    value: e,
                    label: r[e]
                  };
                }));
              case 3:
                return e.a(2, r);
              case 4:
                e.n = 6;
                break;
              case 5:
                return e.a(2, []);
              case 6:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              WT(o, r, a, i, l, "next", e);
            }
            function l(e) {
              WT(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function (e) {
        return t.apply(this, arguments);
      };
    }();
  return React.createElement(React.Fragment, null, React.createElement("p", null, n, React.createElement("span", {
    className: "mintmrm-tooltip"
  }, React.createElement(hy, null), React.createElement("p", null, r))), React.createElement(Jt.A, {
    isMulti: !0,
    cacheOptions: !0,
    loadOptions: f,
    noOptionsMessage: function () {
      return m;
    },
    placeholder: a,
    onChange: o,
    value: i
  }));
};

const LT = (0, g.memo)(BT);
