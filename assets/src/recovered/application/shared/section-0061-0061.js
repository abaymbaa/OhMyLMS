// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var wj = function (e) {
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
    y,
    _,
    w,
    E,
    S,
    R = e.inputRef,
    x = e.inputValue,
    C = e.setInputValue,
    P = (e.stateInfo, e.tooltip),
    O = void 0 === P ? null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.personalizeTooltip : P,
    k = e.triggerName,
    j = (e.contentType, e.campaignType),
    M = e.dynamicCoupons,
    T = bj((0, g.useState)(!1), 2),
    I = T[0],
    F = T[1],
    N = bj((0, g.useState)(""), 2),
    D = N[0],
    W = N[1],
    z = bj((0, g.useState)(!1), 2),
    B = z[0],
    L = z[1],
    V = bj((0, g.useState)(0), 2),
    H = V[0],
    G = V[1],
    U = (0, g.useRef)(null),
    q = null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n ? void 0 : n.is_wc_active,
    Y = null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r ? void 0 : r.is_mailmint_pro_license_active,
    Q = null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a ? void 0 : a.is_edd_active,
    Z = null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o ? void 0 : o.is_wcs_active,
    $ = null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i ? void 0 : i.is_wcw_active,
    K = null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l ? void 0 : l.is_wcm_active,
    J = null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c ? void 0 : c.is_learndash_active,
    X = null === (u = window) || void 0 === u || null === (u = u.MRM_Vars) || void 0 === u ? void 0 : u.is_fluent_booking_active;
  (0, wy.useOutsideAlerter)(U, F);
  var ee = function (e) {
      W(e), L(e !== D || !B);
    },
    te = function (e) {
      var t = x.substring(0, H) + e + x.substring(H);
      G(H + e.length), C(t), L(!1), F(!1);
    },
    ne = function (e) {
      G(e.target.selectionStart);
    };
  return (0, g.useEffect)(function () {
    return R.current && (R.current.addEventListener("click", ne), R.current.addEventListener("keydown", ne)), function () {
      R.current && (R.current.removeEventListener("click", ne), R.current.removeEventListener("keydown", ne));
    };
  }, [R]), (0, g.useEffect)(function () {}, [H]), React.createElement(React.Fragment, null, React.createElement("div", {
    className: "pos-relative mintmrm-merge-tag-wrapper",
    ref: U
  }, React.createElement(ek, {
    onClick: function () {
      return F(!I);
    },
    tooltip: O
  }), React.createElement(nk, {
    isOpen: I
  }, React.createElement("div", {
    className: "title"
  }, null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s || null === (s = s.mint_trans) || void 0 === s ? void 0 : s.Personalization), React.createElement(ak, {
    keyValue: "contact",
    isSubDropdownOpen: D,
    openSubDropdown: B,
    handleSubDropdown: ee,
    label: null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.Contact
  }, null == Qk ? void 0 : Qk.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), 0 !== (null === (m = window) || void 0 === m || null === (m = m.MRM_Vars) || void 0 === m || null === (m = m.contact_custom_fields) || void 0 === m ? void 0 : m.length) && React.createElement(ak, {
    keyValue: "custom",
    isSubDropdownOpen: D,
    openSubDropdown: B,
    handleSubDropdown: ee,
    label: null === (p = window) || void 0 === p || null === (p = p.MRM_Vars) || void 0 === p || null === (p = p.mint_trans) || void 0 === p ? void 0 : p.CustomFields
  }, (null === (f = window) || void 0 === f || null === (f = f.MRM_Vars) || void 0 === f ? void 0 : f.contact_custom_fields) && (null === (v = Object.keys(null === (h = window) || void 0 === h || null === (h = h.MRM_Vars) || void 0 === h ? void 0 : h.contact_custom_fields)) || void 0 === v ? void 0 : v.map(function (e) {
    var t;
    return React.createElement(ik, {
      key: e,
      handlePlaceholder: te,
      label: null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.contact_custom_fields[e],
      placeholder: "{{custom.".concat(e, "}}")
    });
  }))), React.createElement(ak, {
    keyValue: "business",
    isSubDropdownOpen: D,
    openSubDropdown: B,
    handleSubDropdown: ee,
    label: null === (y = window) || void 0 === y || null === (y = y.MRM_Vars) || void 0 === y || null === (y = y.mint_trans) || void 0 === y ? void 0 : y.Business
  }, null == Zk ? void 0 : Zk.map(function (e) {
    return React.createElement(ik, {
      key: null == e ? void 0 : e.placeholder,
      handlePlaceholder: te,
      label: null == e ? void 0 : e.label,
      placeholder: null == e ? void 0 : e.placeholder
    });
  })), React.createElement(ak, {
    keyValue: "user",
    isSubDropdownOpen: D,
    openSubDropdown: B,
    handleSubDropdown: ee,
    label: "WP User"
  }, null == aj ? void 0 : aj.map(function (e) {
    return React.createElement(ik, {
      key: null == e ? void 0 : e.placeholder,
      handlePlaceholder: te,
      label: null == e ? void 0 : e.label,
      placeholder: null == e ? void 0 : e.placeholder
    });
  })), ("wp_post_publish" === k || "sequence-automation" === j) && Y && React.createElement(ak, {
    keyValue: "post",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: null === (_ = window) || void 0 === _ || null === (_ = _.MRM_Vars) || void 0 === _ || null === (_ = _.mint_trans) || void 0 === _ ? void 0 : _.Post,
    openSubDropdown: B
  }, null == $k ? void 0 : $k.map(function (e) {
    return React.createElement(ik, {
      key: null == e ? void 0 : e.placeholder,
      handlePlaceholder: te,
      label: null == e ? void 0 : e.label,
      placeholder: null == e ? void 0 : e.placeholder
    });
  })), React.createElement(ak, {
    keyValue: "link",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: null === (w = window) || void 0 === w || null === (w = w.MRM_Vars) || void 0 === w || null === (w = w.mint_trans) || void 0 === w ? void 0 : w.Links,
    openSubDropdown: B
  }, null == Kk ? void 0 : Kk.map(function (e) {
    return React.createElement(ik, {
      key: null == e ? void 0 : e.placeholder,
      handlePlaceholder: te,
      label: null == e ? void 0 : e.label,
      placeholder: null == e ? void 0 : e.placeholder
    });
  })), React.createElement(ak, {
    keyValue: "site",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: null === (E = window) || void 0 === E || null === (E = E.MRM_Vars) || void 0 === E || null === (E = E.mint_trans) || void 0 === E ? void 0 : E.Website,
    openSubDropdown: B
  }, null == Jk ? void 0 : Jk.map(function (e) {
    return React.createElement(ik, {
      key: null == e ? void 0 : e.placeholder,
      handlePlaceholder: te,
      label: null == e ? void 0 : e.label,
      placeholder: null == e ? void 0 : e.placeholder
    });
  })), React.createElement(ak, {
    keyValue: "url",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: null === (S = window) || void 0 === S || null === (S = S.MRM_Vars) || void 0 === S || null === (S = S.mint_trans) || void 0 === S ? void 0 : S.URL,
    openSubDropdown: B
  }, Xk.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), (["wc_first_order", "wc_order_created", "wc_all_order_created", "wc_order_completed", "wc_order_status_changed", "wc_order_failed", "wc_review_received"].includes(k) || "sequence-automation" === j) && q && Y && React.createElement(React.Fragment, null, React.createElement(ak, {
    keyValue: "customer",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: "WC Customer",
    openSubDropdown: B
  }, ej.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), React.createElement(ak, {
    keyValue: "billing",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: "WC Billing",
    openSubDropdown: B
  }, tj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), React.createElement(ak, {
    keyValue: "shipping",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: "WC Shipping",
    openSubDropdown: B
  }, nj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), React.createElement(ak, {
    keyValue: "order_details",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: "WC Order",
    openSubDropdown: B
  }, rj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  }))), (["wc_abandoned_cart", "wc_abandoned_cart_lost", "wc_abandoned_cart_recovered"].includes(k) || "sequence-automation" === j) && q && Y && React.createElement(ak, {
    keyValue: "cart",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("Cart Abandonment", "mrm"),
    openSubDropdown: B
  }, oj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), (["edd_complete_purchase", "edd_update_payment_status", "edd_recurring_update_subscription", "edd_insert_user"].includes(k) || "sequence-automation" === j) && Q && Y && React.createElement(React.Fragment, null, React.createElement(ak, {
    keyValue: "edd_order",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("Order Details - EDD", "mrm"),
    openSubDropdown: B
  }, ij.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), React.createElement(ak, {
    keyValue: "edd_customer",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("Customer Details - EDD", "mrm"),
    openSubDropdown: B
  }, lj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), React.createElement(ak, {
    keyValue: "edd_billing",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("Billing Details - EDD", "mrm"),
    openSubDropdown: B
  }, cj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  }))), (["wcs_subscription_status_changed", "wcs_subscription_created", "wcs_subscription_trial_end", "wcs_subscription_before_renewal", "wcs_subscription_before_end"].includes(k) || "sequence-automation" === j) && Z && Y && React.createElement(ak, {
    keyValue: "wcs_subscription",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("WC Subscriptions", "mrm"),
    openSubDropdown: B
  }, uj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), !(0, A.isEmpty)(M) && React.createElement(ak, {
    keyValue: "wc_coupons",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("WC Coupons", "mrm"),
    openSubDropdown: B
  }, Object.entries(M).map(function (e) {
    var t = bj(e, 2),
      n = t[0],
      r = t[1];
    return "label" !== n && React.createElement(ik, {
      key: n,
      handlePlaceholder: te,
      label: r,
      placeholder: "{{coupon.".concat(n, "}}")
    });
  })), (["wc_price_dropped", "wc_review_received"].includes(k) || "sequence-automation" === j) && q && Y && React.createElement(ak, {
    keyValue: "product",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("Product", "mrm"),
    openSubDropdown: B
  }, sj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), (["wc_review_received"].includes(k) || "sequence-automation" === j) && q && Y && React.createElement(ak, {
    keyValue: "review",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("Review", "mrm"),
    openSubDropdown: B
  }, dj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), (["wcm_membership_created", "wcm_membership_status_changed"].includes(k) || "sequence-automation" === j) && K && Y && React.createElement(ak, {
    keyValue: "wcm_membership",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("WC Memberships", "mrm"),
    openSubDropdown: B
  }, mj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), (["wcw_user_adds_product"].includes(k) || "sequence-automation" === j) && $ && Y && React.createElement(ak, {
    keyValue: "wc_wishlist",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("WC Wishlists", "mrm"),
    openSubDropdown: B
  }, pj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), (["learndash_complete_course", "learndash_complete_lesson", "learndash_complete_topic", "learndash_completes_quiz", "learndash_enrolled_course", "learndash_enrolls_groups"].includes(k) || "sequence-automation" === j) && J && Y && React.createElement(ak, {
    keyValue: "ld",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("LearnDash LMS", "mrm"),
    openSubDropdown: B
  }, fj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), (["fluentbooking_new_booking", "fluentbooking_cancelled", "fluentbooking_completed", "fluentbooking_rescheduled"].includes(k) || "sequence-automation" === j) && X && Y && React.createElement(React.Fragment, null, React.createElement(ak, {
    keyValue: "fb_booking",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("Fluent Booking Data", "mrm"),
    openSubDropdown: B
  }, vj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), React.createElement(ak, {
    keyValue: "fb_guest",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("Fluent Booking Guest", "mrm"),
    openSubDropdown: B
  }, gj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), React.createElement(ak, {
    keyValue: "fb_event",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("Fluent Booking Event", "mrm"),
    openSubDropdown: B
  }, hj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  })), React.createElement(ak, {
    keyValue: "fb_host",
    isSubDropdownOpen: D,
    handleSubDropdown: ee,
    label: (0, b.__)("Fluent Booking Host", "mrm"),
    openSubDropdown: B
  }, yj.map(function (e) {
    return React.createElement(ik, {
      key: e.placeholder,
      handlePlaceholder: te,
      label: e.label,
      placeholder: e.placeholder
    });
  }))))));
};

const Ej = (0, g.memo)(wj);

var Sj,
  Rj = n(45807);

function xj() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Cj(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Cj(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Cj(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Cj(d, "constructor", u), Cj(u, "constructor", c), c.displayName = "GeneratorFunction", Cj(u, a, "GeneratorFunction"), Cj(d), Cj(d, a, "Generator"), Cj(d, r, function () {
    return this;
  }), Cj(d, "toString", function () {
    return "[object Generator]";
  }), (xj = function () {
    return {
      w: o,
      m
    };
  })();
}

function Cj(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Cj = function (e, t, n, r) {
    function o(t, n) {
      Cj(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Cj(e, t, n, r);
}

function Pj(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Oj(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Pj(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Pj(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function kj(e, t) {
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
  }(e, t) || jj(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function jj(e, t) {
  if (e) {
    if ("string" == typeof e) return Aj(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Aj(e, t) : void 0;
  }
}

function Aj(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
