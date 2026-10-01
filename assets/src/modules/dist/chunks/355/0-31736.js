// Reconstructed Webpack factory 31736; arguments retain original semantics.
(function (e, t, n) {
  var l,
    a,
    i,
    o,
    r,
    c,
    u,
    d,
    s,
    m,
    f,
    p,
    g,
    v,
    h,
    b = this && this.__assign || function () {
      return b = Object.assign || function (e) {
        for (var t, n = 1, l = arguments.length; n < l; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }, b.apply(this, arguments);
    },
    _ = this && this.__createBinding || (Object.create ? function (e, t, n, l) {
      void 0 === l && (l = n);
      var a = Object.getOwnPropertyDescriptor(t, n);
      a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
        enumerable: !0,
        get: function () {
          return t[n];
        }
      }), Object.defineProperty(e, l, a);
    } : function (e, t, n, l) {
      void 0 === l && (l = n), e[l] = t[n];
    }),
    y = this && this.__setModuleDefault || (Object.create ? function (e, t) {
      Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      });
    } : function (e, t) {
      e.default = t;
    }),
    E = this && this.__importStar || (l = function (e) {
      return l = Object.getOwnPropertyNames || function (e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
        return t;
      }, l(e);
    }, function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n = l(e), a = 0; a < n.length; a++) "default" !== n[a] && _(t, e, n[a]);
      return y(t, e), t;
    }),
    w = this && this.__awaiter || function (e, t, n, l) {
      return new (n || (n = Promise))(function (a, i) {
        function o(e) {
          try {
            c(l.next(e));
          } catch (e) {
            i(e);
          }
        }
        function r(e) {
          try {
            c(l.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(o, r);
        }
        c((l = l.apply(e, t || [])).next());
      });
    },
    k = this && this.__generator || function (e, t) {
      var n,
        l,
        a,
        i = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: []
        },
        o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
      return o.next = r(0), o.throw = r(1), o.return = r(2), "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function r(r) {
        return function (c) {
          return function (r) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, r[0] && (i = 0)), i;) try {
              if (n = 1, l && (a = 2 & r[0] ? l.return : r[0] ? l.throw || ((a = l.return) && a.call(l), 0) : l.next) && !(a = a.call(l, r[1])).done) return a;
              switch (l = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                case 0:
                case 1:
                  a = r;
                  break;
                case 4:
                  return i.label++, {
                    value: r[1],
                    done: !1
                  };
                case 5:
                  i.label++, l = r[1], r = [0];
                  continue;
                case 7:
                  r = i.ops.pop(), i.trys.pop();
                  continue;
                default:
                  if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                    i = 0;
                    continue;
                  }
                  if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                    i.label = r[1];
                    break;
                  }
                  if (6 === r[0] && i.label < a[1]) {
                    i.label = a[1], a = r;
                    break;
                  }
                  if (a && i.label < a[2]) {
                    i.label = a[2], i.ops.push(r);
                    break;
                  }
                  a[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              r = t.call(e, i);
            } catch (e) {
              r = [6, e], l = 0;
            } finally {
              n = a = 0;
            }
            if (5 & r[0]) throw r[1];
            return {
              value: r[0] ? r[1] : void 0,
              done: !0
            };
          }([r, c]);
        };
      }
    },
    C = this && this.__rest || function (e, t) {
      var n = {};
      for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var a = 0;
        for (l = Object.getOwnPropertySymbols(e); a < l.length; a++) t.indexOf(l[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, l[a]) && (n[l[a]] = e[l[a]]);
      }
      return n;
    },
    x = this && this.__spreadArray || function (e, t, n) {
      if (n || 2 === arguments.length) for (var l, a = 0, i = t.length; a < i; a++) !l && a in t || (l || (l = Array.prototype.slice.call(t, 0, a)), l[a] = t[a]);
      return e.concat(l || Array.prototype.slice.call(t));
    },
    N = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.options = void 0;
  var T = n(3270);
  n(28191);
  var P = n(12470),
    R = n(49050),
    S = n(58088),
    B = n(43203),
    O = N(n(50587)),
    F = n(2543),
    M = N(n(44098)),
    A = E(n(41594)),
    L = n(84976);
  n(69617), n(59683);
  var z = n(98845),
    D = N(n(81416)),
    I = n(61696);
  n(18985);
  var j = n(87381),
    W = n(28845);
  n(51329);
  var H = n(97391),
    V = n(85918),
    q = N(n(77032)),
    U = N(n(19337)),
    K = N(n(65284)),
    G = N(n(77234)),
    J = N(n(82673)),
    X = N(n(37350)),
    Q = N(n(29571)),
    Y = N(n(91348)),
    Z = N(n(92302)),
    $ = n(35874),
    ee = N(n(69180)),
    te = N(n(83612)),
    ne = N(n(60943)),
    le = N(n(89834)),
    ae = N(n(10888)),
    ie = N(n(86840)),
    oe = N(n(64761)),
    re = n(94286),
    ce = N(n(48518)),
    ue = N(n(16731)),
    de = n(45807),
    se = null === (a = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === a ? void 0 : a.is_wc_active,
    me = null === (i = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === i ? void 0 : i.is_mailmint_pro_license_active,
    fe = null === (o = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === o ? void 0 : o.is_edd_active,
    pe = null === (r = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === r ? void 0 : r.is_wcs_active,
    ge = null === (c = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === c ? void 0 : c.is_wcw_active,
    ve = null === (u = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === u ? void 0 : u.is_wcm_active,
    he = null === (d = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === d ? void 0 : d.is_learndash_active,
    be = null === (s = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === s ? void 0 : s.is_fluent_booking_active,
    _e = [];
  se ? (_e.push({
    type: me ? j.CustomBlocksType.PRODUCT_BLOCK : j.CustomBlocksType.PRO_PRODUCT_BLOCK,
    wcBlock: !0
  }, {
    type: me ? j.CustomBlocksType.POST_BLOCK : j.CustomBlocksType.PRO_POST_BLOCK
  }), _e.push({
    type: me ? j.CustomBlocksType.ORDER_DETAILS : j.CustomBlocksType.PRO_ORDER_DETAILS,
    wcBlock: !0
  }, {
    type: me ? j.CustomBlocksType.BILLING_ADDRESS : j.CustomBlocksType.PRO_BILLING_ADDRESS,
    wcBlock: !0
  }, {
    type: me ? j.CustomBlocksType.SHIPPING_ADDRESS : j.CustomBlocksType.PRO_SHIPPING_ADDRESS,
    wcBlock: !0
  }, {
    type: me ? j.CustomBlocksType.DOWNLOAD_ORDER_ITEM : j.CustomBlocksType.PRO_DOWNLOAD_ORDER_ITEM,
    wcBlock: !0
  }), me && "automation" === (null === (m = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === m ? void 0 : m.mint_page) && (null === (p = null === (f = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === f ? void 0 : f.cart_settings) || void 0 === p ? void 0 : p.enable) && _e.push({
    type: j.CustomBlocksType.CART_BLOCK,
    wcBlock: !0
  }), !me && "automation" === (null === (g = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === g ? void 0 : g.mint_page) && (null === (h = null === (v = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === v ? void 0 : v.cart_settings) || void 0 === h ? void 0 : h.enable) && _e.push({
    type: j.CustomBlocksType.PRO_CART_BLOCK,
    wcBlock: !0
  })) : _e.push({
    type: me ? j.CustomBlocksType.POST_BLOCK : j.CustomBlocksType.PRO_POST_BLOCK
  });
  var ye = [{
    label: "Content",
    active: !0,
    displayType: "blocks",
    blocks: x(x([], j.regularBlocks, !0), _e, !0)
  }, {
    label: "Layout",
    active: !0,
    displayType: "column",
    blocks: [{
      title: "1 column",
      payload: [[["25%", "25%", "25%", "25%"]]]
    }, {
      title: "2 columns",
      payload: [["50%", "50%"], ["33%", "67%"], ["67%", "33%"], ["25%", "75%"], ["75%", "25%"]]
    }, {
      title: "3 columns",
      payload: [["33.33%", "33.33%", "33.33%"], ["25%", "25%", "50%"], ["50%", "25%", "25%"]]
    }, {
      title: "4 columns",
      payload: [["25%", "25%", "25%", "25%"], ["20%", "20%", "30%", "30%"]]
    }]
  }];
  t.options = [{
    label: "Default Template",
    value: "default"
  }, {
    label: "New Order",
    value: "new_order"
  }, {
    label: "Cancelled Order",
    value: "cancelled_order"
  }, {
    label: "Failed Order",
    value: "failed_order"
  }, {
    label: "Order On Hold",
    value: "customer_on_hold_order"
  }, {
    label: "Processing Order",
    value: "customer_processing_order"
  }, {
    label: "Refunded Order",
    value: "customer_refunded_order"
  }, {
    label: "Completed Order",
    value: "customer_completed_order"
  }, {
    label: "Customer Invoice / Order Details",
    value: "customer_invoice"
  }, {
    label: "Customer Note",
    value: "customer_note"
  }, {
    label: "Reset Password",
    value: "customer_reset_password"
  }, {
    label: "New Account",
    value: "customer_new_account"
  }], t.default = (0, A.memo)(function (e) {
    var l,
      a,
      i,
      o,
      r,
      c,
      u,
      d,
      s,
      m,
      f,
      p,
      g = this,
      v = e.selectedEmailIndex,
      h = e.emailData,
      _ = e.selectedEmailData,
      y = e.setIsTemplate,
      N = e.setIsCloseBuilder,
      _e = e.mintPage,
      Ee = e.setEmailBody,
      we = e.automationData,
      ke = e.backRefresh,
      Ce = e.setBackRefresh,
      xe = e.setIsClose,
      Ne = e.builderChanged,
      Te = e.setMaybeSave,
      Pe = e.campaignData,
      Re = e.setIsEmailBuilderOpen,
      Se = e.setIsModalOpen,
      Be = e.emailTitle,
      Oe = e.templateId,
      Fe = e.wcEmailTemplateType,
      Me = void 0 === Fe ? "default" : Fe,
      Ae = e.dynamicCoupons,
      Le = e.startFromScratch,
      ze = e.triggerName,
      De = (0, A.useState)(!1),
      Ie = De[0],
      je = De[1],
      We = (0, A.useState)("edit"),
      He = We[0],
      Ve = We[1],
      qe = (0, A.useState)(null),
      Ue = qe[0],
      Ke = qe[1],
      Ge = (0, A.useState)(!1),
      Je = Ge[0],
      Xe = Ge[1],
      Qe = (0, A.useState)(!1),
      Ye = Qe[0],
      Ze = Qe[1],
      $e = (0, A.useState)(!1),
      et = $e[0],
      tt = $e[1],
      nt = (0, A.useState)(!1),
      lt = nt[0],
      at = nt[1],
      it = (0, A.useState)(""),
      ot = it[0],
      rt = it[1],
      ct = (0, A.useState)(""),
      ut = ct[0],
      dt = ct[1],
      st = (0, A.useState)(""),
      mt = st[0],
      ft = st[1],
      pt = (0, A.useState)(!1),
      gt = pt[0],
      vt = pt[1],
      ht = (0, A.useState)(!1),
      bt = ht[0],
      _t = ht[1],
      yt = (0, A.useState)("advanced-builder"),
      Et = yt[0],
      wt = yt[1],
      kt = (0, A.useState)(""),
      Ct = kt[0],
      xt = kt[1],
      Nt = (0, A.useState)(!1),
      Tt = Nt[0],
      Pt = Nt[1],
      Rt = (0, A.useState)(""),
      St = (Rt[0], Rt[1]),
      Bt = (0, A.useState)(Me || "default"),
      Ot = Bt[0],
      Ft = Bt[1],
      Mt = (0, A.useState)(!1),
      At = Mt[0],
      Lt = Mt[1],
      zt = (0, A.useState)(!1),
      Dt = zt[0],
      It = zt[1],
      jt = (0, A.useState)(""),
      Wt = jt[0],
      Ht = jt[1],
      Vt = (0, A.useState)(""),
      qt = Vt[0],
      Ut = Vt[1],
      Kt = (0, A.useState)("test-email"),
      Gt = (Kt[0], Kt[1]),
      Jt = (0, A.useState)(!1),
      Xt = Jt[0],
      Qt = Jt[1],
      Yt = (0, A.useState)(Me || {
        label: "Default Template",
        value: "default"
      }),
      Zt = Yt[0],
      $t = Yt[1],
      en = (0, A.useState)(!1),
      tn = en[0],
      nn = (en[1], (0, A.useState)(!1)),
      ln = nn[0],
      an = nn[1],
      on = (0, A.useState)({
        contact: {
          label: "Contact",
          email: "Email",
          first_name: null === (l = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === l ? void 0 : l.contact_general_fields.first_name,
          last_name: null === (a = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === a ? void 0 : a.contact_general_fields.last_name,
          status: "Status",
          company: null === (i = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === i ? void 0 : i.contact_general_fields.company,
          designation: null === (o = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === o ? void 0 : o.contact_general_fields.designation,
          address_line_1: null === (r = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === r ? void 0 : r.contact_general_fields.address_line_1,
          address_line_2: null === (c = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === c ? void 0 : c.contact_general_fields.address_line_2,
          city: "City",
          state: "State / Province",
          country: "Country",
          postal: "Postal / Zip",
          phone_number: "Phone Number",
          date_of_birth: "Date of Birth"
        },
        business: {
          label: "Business",
          name: "Name",
          address: "Formatted Address",
          address_line_1: "Address Line 1",
          address_line_2: "Address Line 2",
          city: "City",
          state: "State / Province",
          country: "Country",
          postal: "Postal / Zip",
          logo_url: "Logo URL",
          logo_image: "Logo Image",
          phone: "Phone Number"
        },
        user: {
          label: "WP User",
          email: "Email",
          id: "ID",
          username: "Username"
        },
        link: {
          label: "Links",
          subscribe: "Subscribe Link",
          unsubscribe: "Unsubscribe Link",
          preference: "Preference Link",
          subscribe_html: "Subscribe HTML",
          unsubscribe_html: "Unsubscribe HTML",
          preference_html: "Preference HTML"
        },
        site: {
          label: "Website",
          url: "URL",
          title: "Title"
        },
        url: {
          label: "URL",
          home: "Home URL",
          shop: "Shop URL",
          my_account: "My Account URL",
          checkout: "Checkout URL",
          reset_password: "Reset Password URL",
          payment: "Payment URL"
        },
        openProModal: !1
      }),
      rn = on[0],
      cn = on[1],
      un = ["wc_first_order", "wc_order_created", "wc_all_order_created", "wc_order_completed", "wc_order_status_changed", "wc_order_failed", "wc_review_received"],
      dn = ["wc_price_dropped", "wc_review_received"],
      sn = ["wc_review_received"],
      mn = ["wc_abandoned_cart", "wc_abandoned_cart_lost", "wc_abandoned_cart_recovered"],
      fn = ["edd_complete_purchase", "edd_update_payment_status", "edd_recurring_update_subscription", "edd_insert_user"],
      pn = ["wcs_subscription_status_changed", "wcs_subscription_created", "wcs_subscription_trial_end", "wcs_subscription_before_renewal", "wcs_subscription_before_end"],
      gn = ["wcm_membership_created", "wcm_membership_status_changed"],
      vn = ["wcw_user_adds_product"],
      hn = ["fluentbooking_new_booking", "fluentbooking_cancelled", "fluentbooking_completed", "fluentbooking_rescheduled"],
      bn = ["learndash_complete_course", "learndash_complete_lesson", "learndash_complete_topic", "learndash_completes_quiz", "learndash_enrolled_course", "learndash_enrolls_groups"],
      _n = (0, A.useState)(null),
      yn = _n[0],
      En = _n[1],
      wn = function (e) {
        Ft(e), Qt(!1);
      },
      kn = -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome");
    (0, A.useEffect)(function () {
      var e, t;
      if (!(0, F.isEmpty)(null === (e = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === e ? void 0 : e.contact_custom_fields)) {
        var n = b({}, null === (t = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === t ? void 0 : t.contact_custom_fields);
        n.label = "Custom";
        var l = b(b({}, rn), {
          custom: n
        });
        cn(l);
      }
    }, [null === (u = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === u ? void 0 : u.contact_custom_fields]);
    var Cn = (0, A.useState)(""),
      xn = Cn[0],
      Nn = Cn[1],
      Tn = (0, A.useState)(!1),
      Pn = Tn[0],
      Rn = Tn[1],
      Sn = (0, L.useLocation)();
    (0, A.useEffect)(function () {
      var e, n;
      if (se && me && (("automation" === _e || "automation" === Pe.type) && mn.includes(ze) || "templates" === _e || "sequence-automation" === _e) && (null === (n = null === (e = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === e ? void 0 : e.cart_settings) || void 0 === n ? void 0 : n.enable) && cn(function (e) {
        return b({
          cart: {
            label: "Cart Abandonment",
            billing_email: "Cart Billing Email",
            items: "Cart Items Table",
            recovery_url: "Cart Recovery URL",
            abandoned_date: "Cart Abandoned Date",
            total: "Cart Items Total",
            currency: "Cart Currency (Symbol)",
            billing_first_name: "Cart Billing First Name",
            billing_last_name: "Cart Billing Last Name",
            billing_address_1: "Cart Billing Address 1",
            billing_address_2: "Cart Billing Address 2",
            billing_company: "Cart Billing Company",
            billing_city: "Cart Billing City",
            billing_state: "Cart Billing State",
            billing_postcode: "Cart Billing Postcode",
            billing_country: "Cart Billing Country",
            billing_phone: "Cart Billing Phone",
            shipping_first_name: "Cart Shipping First Name",
            shipping_last_name: "Cart Shipping Last Name",
            shipping_address_1: "Cart Shipping Address 1",
            shipping_address_2: "Cart Shipping Address 2",
            shipping_company: "Cart Shipping Company",
            shipping_city: "Cart Shipping City",
            shipping_state: "Cart Shipping State",
            shipping_postcode: "Cart Shipping Postcode",
            shipping_country: "Cart Shipping Country",
            shipping_phone: "Cart Shipping Phone"
          }
        }, e);
      }), me && ("automation" === _e && "wp_post_publish" === ze || "sequence-automation" === _e || "templates" === _e) && cn(function (e) {
        return b({
          post: {
            label: "Post",
            title: "Title",
            date: "Date",
            author: "Author",
            excerpt: "Excerpt",
            image: "Image",
            image_url: "Image URL",
            link: "Link",
            link_with_title: "Link with Title",
            full_content: "Full Content",
            cats: "Categories"
          }
        }, e);
      }), se && me && ("wc-customize-email" === _e || "templates" === _e || ("automation" === _e || "automation" === Pe.type) && un.includes(ze) || "sequence-automation" === _e)) {
        cn(function (e) {
          return e.url.reset_password = "Reset Password", b({
            customer: {
              label: "WC Customer",
              name: "Display Name",
              first_name: "First Name",
              last_name: "Last Name",
              note: "Last Note"
            },
            billing: {
              label: "WC Billing",
              first_name: "First Name",
              last_name: "Last Name",
              company: "Company",
              address: "Formatted Address",
              address_1: "Address 1",
              address_2: "Address 2",
              city: "City",
              state: "State",
              postcode: "Postcode",
              country: "Country",
              email: "Email",
              phone: "Phone"
            },
            shipping: {
              label: "WC Shipping",
              first_name: "First Name",
              last_name: "Last Name",
              address: "Formatted Address",
              company: "Company",
              address_1: "Address 1",
              address_2: "Address 2",
              city: "City",
              state: "State",
              postcode: "Postcode",
              country: "Country",
              email: "Email",
              phone: "Phone",
              method: "Method"
            },
            order_details: {
              label: "WC Order",
              order_id: "Order ID",
              order_status: "Order Status",
              order_date: "Order Date",
              order_currency: "Order Currency",
              order_discount: "Order Discount",
              order_number: "Order Number",
              order_note: "Order Last Note",
              order_fully_refunded: "Order fully Refunded",
              order_partial_refund: "Order Partial Refund",
              order_received_url: "Order Received URL",
              order_shipping: "Order Shipping",
              order_subtotal: "Order Subtotal",
              order_total: "Order Total",
              order_tax: "Order Tax",
              payment_method: "Payment Method",
              items_count: "Items Count",
              ordered_items_table: "Ordered Items Table"
            }
          }, e);
        });
        var l = t.options.find(function (e) {
          return e.value === Me;
        });
        $t(l);
      }
      se && me && (("automation" === _e || "automation" === Pe.type) && dn.includes(ze) || "templates" === _e || "sequence-automation" === _e) && cn(function (e) {
        return b({
          product: {
            label: "Product",
            id: "ID",
            name: "Name",
            regular_price: "Regular Price",
            sale_price: "Sale Price",
            description: "Description",
            short_description: "Short Description",
            sku: "SKU",
            parent_sku: "Parent SKU",
            featured_image: "Featured Image",
            permalink: "Permalink",
            add_to_cart_url: "Add to Cart URL"
          }
        }, e);
      }), se && me && (("automation" === _e || "automation" === Pe.type) && sn.includes(ze) || "templates" === _e || "sequence-automation" === _e) && cn(function (e) {
        return b({
          review: {
            label: "Review",
            rating: "Rating",
            content: "Content"
          }
        }, e);
      }), fe && me && (("automation" === _e || "automation" === Pe.type) && fn.includes(ze) || "templates" === _e || "sequence-automation" === _e) && cn(function (e) {
        return b({
          edd: {
            label: (0, P.__)("Order Details - EDD", "mrm"),
            order_number: (0, P.__)("Order Number", "mrm"),
            order_status: (0, P.__)("Order Status", "mrm"),
            order_currency: (0, P.__)("Order Currency (Symbol)", "mrm"),
            order_total_amount: (0, P.__)("Order Total Amount", "mrm"),
            order_payment_method: (0, P.__)("Order Payment Method", "mrm"),
            order_date: (0, P.__)("Order Date", "mrm"),
            order_items_count: (0, P.__)("Order Items Count", "mrm"),
            order_address: (0, P.__)("Order Address", "mrm"),
            order_items_table: (0, P.__)("Order Items Table", "mrm"),
            order_download_lists: (0, P.__)("Order Download Lists", "mrm")
          },
          edd_customer: {
            label: (0, P.__)("Customer Details - EDD", "mrm"),
            first_name: (0, P.__)("First Name", "mrm"),
            last_name: (0, P.__)("Last Name", "mrm"),
            email: (0, P.__)("Email", "mrm"),
            total_order_count: (0, P.__)("Total Order Count", "mrm"),
            total_spent: (0, P.__)("Total Spent", "mrm"),
            first_order_date: (0, P.__)("First Order Date", "mrm"),
            last_order_date: (0, P.__)("Last Order Date", "mrm")
          },
          edd_billing: {
            label: (0, P.__)("Billing Details - EDD", "mrm"),
            address_line_1: (0, P.__)("Address Line 1", "mrm"),
            address_line_2: (0, P.__)("Address Line 2", "mrm"),
            city: (0, P.__)("City", "mrm"),
            postal: (0, P.__)("Zip / Postal Code", "mrm"),
            country: (0, P.__)("Country", "mrm"),
            region: (0, P.__)("Region", "mrm")
          }
        }, e);
      }), pe && me && (("automation" === _e || "automation" === Pe.type) && pn.includes(ze) || "templates" === _e || "sequence-automation" === _e) && cn(function (e) {
        return b({
          wc_subscription: {
            label: (0, P.__)("WC Subscriptions", "mrm"),
            id: (0, P.__)("ID", "mrm"),
            status: (0, P.__)("Status", "mrm"),
            product_name: (0, P.__)("Product Name", "mrm"),
            product_price: (0, P.__)("Product Price", "mrm"),
            start_date: (0, P.__)("Start Date", "mrm"),
            end_date: (0, P.__)("End Date", "mrm"),
            trial_end_date: (0, P.__)("Trial End Date", "mrm"),
            next_payment_date: (0, P.__)("Next Payment Date", "mrm"),
            last_payment_date: (0, P.__)("Last Payment Date", "mrm"),
            order_id: (0, P.__)("Associated Order ID", "mrm"),
            total: (0, P.__)("Total", "mrm"),
            payment_method: (0, P.__)("Payment Method", "mrm"),
            billing_address: (0, P.__)("Billing Address", "mrm"),
            billing_company: (0, P.__)("Billing Company", "mrm"),
            view_url: (0, P.__)("Subscription View Url", "mrm")
          }
        }, e);
      }), be && me && (("automation" === _e || "automation" === Pe.type) && hn.includes(ze) || "templates" === _e || "sequence-automation" === _e) && cn(function (e) {
        return b({
          fb_booking: {
            label: (0, P.__)("Fluent Booking Data", "mrm"),
            event_name: (0, P.__)("Event Name", "mrm"),
            description: (0, P.__)("Event Description", "mrm"),
            booking_title: (0, P.__)("Booking Title", "mrm"),
            additional_guests: (0, P.__)("Additional Guests", "mrm"),
            full_start_date_guest_timezone: (0, P.__)("Full Start Date Time (Guest Timezone)", "mrm"),
            full_start_date_host_timezone: (0, P.__)("Full Start Date Time (Host Timezone)", "mrm"),
            full_start_end_date_guest_timezone: (0, P.__)("Full Start & End Date Time (Guest Timezone)", "mrm"),
            full_start_end_date_host_timezone: (0, P.__)("Full Start & End Date Time (Host Timezone)", "mrm"),
            cancelation_url: (0, P.__)("Booking Cancellation URL", "mrm"),
            cancelation_reason: (0, P.__)("Booking Cancellation Reason", "mrm"),
            reschedule_url: (0, P.__)("Booking Reschedule URL", "mrm"),
            admin_booking_url: (0, P.__)("Booking Admin URL", "mrm"),
            booking_hash: (0, P.__)("Booking Hash", "mrm"),
            reschedule_reason: (0, P.__)("Booking Reschedule Reason", "mrm")
          },
          fb_guest: {
            label: (0, P.__)("Fluent Booking Guest", "mrm"),
            first_name: (0, P.__)("Guest First Name", "mrm"),
            last_name: (0, P.__)("Guest Last Name", "mrm"),
            email: (0, P.__)("Guest Email", "mrm"),
            note: (0, P.__)("Guest Note", "mrm"),
            phone: (0, P.__)("Guest Phone Number", "mrm"),
            timezone: (0, P.__)("Guest Timezone", "mrm")
          },
          fb_event: {
            label: (0, P.__)("Fluent Booking Event", "mrm"),
            event_id: (0, P.__)("Event ID", "mrm"),
            calendar_id: (0, P.__)("Calendar ID", "mrm"),
            event_title: (0, P.__)("Event Title", "mrm"),
            calendar_title: (0, P.__)("Calendar Title", "mrm"),
            calendar_description: (0, P.__)("Calendar Description", "mrm"),
            start_date_time: (0, P.__)("Event Date Time (UTC)", "mrm"),
            start_date_time_for_attendee: (0, P.__)("Event Date Time (attendee timezone)", "mrm"),
            start_date_time_for_host: (0, P.__)("Event Date Time (host timezone)", "mrm"),
            location_details_text: (0, P.__)("Event Location Details", "mrm")
          },
          fb_host: {
            label: (0, P.__)("Fluent Booking Host Data", "mrm"),
            name: (0, P.__)("Host Name", "mrm"),
            email: (0, P.__)("Host Email", "mrm"),
            timezone: (0, P.__)("Host Timezone", "mrm")
          }
        }, e);
      }), ve && me && (("automation" === _e || "automation" === Pe.type) && gn.includes(ze) || "templates" === _e || "sequence-automation" === _e) && cn(function (e) {
        return b({
          wc_membership: {
            label: (0, P.__)("WC Memberships", "mrm"),
            first_name: (0, P.__)("Member First Name", "mrm"),
            last_name: (0, P.__)("Member Last Name", "mrm"),
            end_date: (0, P.__)("Membership End Date", "mrm"),
            id: (0, P.__)("User Membership ID", "mrm"),
            plan_id: (0, P.__)("Membership Plan ID", "mrm"),
            plan_name: (0, P.__)("Membership Plan Name", "mrm"),
            start_date: (0, P.__)("Membership Start Date", "mrm"),
            status: (0, P.__)("Membership Status", "mrm"),
            renewal_url: (0, P.__)("Membership Renewal URL", "mrm")
          }
        }, e);
      }), he && me && (("automation" === _e || "automation" === Pe.type) && bn.includes(ze) || "templates" === _e || "sequence-automation" === _e) && cn(function (e) {
        return b({
          ld: {
            label: (0, P.__)("LearnDash LMS", "mrm"),
            candidate_name: (0, P.__)("Candidate Name", "mrm"),
            course_name: (0, P.__)("Course Name", "mrm"),
            lesson_name: (0, P.__)("Lesson Name", "mrm"),
            quiz_name: (0, P.__)("Quiz Name", "mrm"),
            quiz_percentage: (0, P.__)("Quiz Percentage", "mrm"),
            quiz_score: (0, P.__)("Quiz Score", "mrm"),
            topic_name: (0, P.__)("Topic Name", "mrm"),
            enrolled_courses: (0, P.__)("User's Enrolled Courses", "mrm"),
            quiz_highest_points: (0, P.__)("User's Highest Points in a Quiz", "mrm"),
            quiz_lowest_points: (0, P.__)("User's Lowest Points in a Quiz", "mrm"),
            user_groups: (0, P.__)("User's Groups", "mrm"),
            group_name: (0, P.__)("Group Name", "mrm"),
            group_leader_emails: (0, P.__)("Group Leader(s)'s Emails", "mrm"),
            group_leaders: (0, P.__)("Group Leader(s)'s Names", "mrm")
          }
        }, e);
      }), ge && me && (("automation" === _e || "automation" === Pe.type) && vn.includes(ze) || "templates" === _e || "sequence-automation" === _e) && cn(function (e) {
        return b({
          wc_wishlist: {
            label: (0, P.__)("WC WishLists", "mrm"),
            items_count: (0, P.__)("Wishlist Items Count", "mrm"),
            items: (0, P.__)("Wishlist Items", "mrm"),
            id: (0, P.__)("Wishlist ID", "mrm"),
            title: (0, P.__)("Wishlist Title", "mrm"),
            view_link: (0, P.__)("Wishlist View Link", "mrm")
          }
        }, e);
      });
    }, [se, me, _e, fe, ve, he, ge, be]), (0, A.useEffect)(function () {
      !(0, F.isEmpty)(Ae) && me && "automation" === _e && cn(function (e) {
        return b({
          dynamicCoupons: b({}, Ae)
        }, e);
      });
    }, [se, me, _e]);
    var Bn = (0, A.useState)(!1),
      On = Bn[0],
      Fn = Bn[1],
      Mn = (0, A.useState)(!1),
      An = Mn[0],
      Ln = Mn[1],
      zn = (0, A.useState)(""),
      Dn = zn[0],
      In = zn[1],
      jn = (0, A.useState)(!0),
      Wn = jn[0],
      Hn = jn[1],
      Vn = (0, A.useRef)(null);
    (0, I.useOutsideAlerter)(Vn, je);
    var qn = (0, A.useRef)(null);
    (0, I.useOutsideAlerter)(qn, vt);
    var Un = (0, L.useNavigate)(),
      Kn = (0, L.useParams)().id,
      Gn = (0, A.useMemo)(function () {
        return Ue ? (0, F.cloneDeep)(Ue) : "double-optin" === _e ? j.defaultDoubleOptinTemplate : j.defaultTemplate;
      }, [Ue, Dt, Le]);
    (0, A.useEffect)(function () {
      var e,
        t,
        n,
        l,
        a,
        i,
        o,
        r,
        c,
        u,
        d,
        s,
        m,
        f,
        p = !0;
      return p && ("" !== Ct && null !== Ct || xt("double-optin" === _e ? '<p>Hello,</p><p>You\'ve received this message because you subscribed to {{site_title}}. Please confirm your subscription to receive emails from us:</p><p>Click <a href="{{subscribe_link}}" data-wplink-url-error="true" data-mce-href="{{subscribe_link}}">here</a> to confirm your subscription.</p><p>If you received this email by mistake, simply delete it. You won\'t receive any more emails from us unless you confirm your subscription.</p><p>Thank you,</p><p>{{site_title}}</p>' : '<p>Dear {{contact.first_name}}, </p><p>I hope this email finds you well. I am writing to inform you about our business. I believe this information will be beneficial to you and your team. If you have any questions or require further clarification, please do not hesitate to reach out to me. I am more than happy to assist you. Thank you for your time and attention. </p><p>I look forward to hearing from you soon. </p><p>Best regards, </p><p>{{business.name}} <br/> <span style="font-size: 8pt;" data-mce-style="font-size: 8pt;">No longer be friends? {{link.unsubscribe_html|Unsubscribe}}</span></p>'), "campaign" == _e || "sequence-automation" == _e ? Jn().then(function (e) {
        var t = (e || {}).email_data || {},
          n = t.json_data,
          l = t.editor_type;
        if (void 0 === l || "advanced-builder" === l) Ke(n), wt("advanced-builder");else {
          var a = (n || {}).content;
          xt(a), Sl(a), wt(l);
        }
      }) : "templates" == _e || "double-optin" == _e || "wc-customize-email" == _e || "default" !== Me ? "classic-editor" === (null === (t = null === (e = h[0]) || void 0 === e ? void 0 : e.email_json) || void 0 === t ? void 0 : t.editor) ? (xt(null === (l = null === (n = h[0]) || void 0 === n ? void 0 : n.email_json) || void 0 === l ? void 0 : l.content), wt(null === (i = null === (a = h[0]) || void 0 === a ? void 0 : a.email_json) || void 0 === i ? void 0 : i.editor)) : (Ke(null === (o = h[0]) || void 0 === o ? void 0 : o.email_json), wt("advanced-builder")) : void 0 === (null === (r = null == we ? void 0 : we.json_body) || void 0 === r ? void 0 : r.editor) || "advanced-builder" === (null === (c = null == we ? void 0 : we.json_body) || void 0 === c ? void 0 : c.editor) ? (Ke(null == we ? void 0 : we.json_body), wt((null === (u = null == we ? void 0 : we.json_body) || void 0 === u ? void 0 : u.editor) ? null === (d = null == we ? void 0 : we.json_body) || void 0 === d ? void 0 : d.editor : "advanced-builder")) : (xt(null === (s = null == we ? void 0 : we.json_body) || void 0 === s ? void 0 : s.content), wt((null === (m = null == we ? void 0 : we.json_body) || void 0 === m ? void 0 : m.editor) ? null === (f = null == we ? void 0 : we.json_body) || void 0 === f ? void 0 : f.editor : "advanced-builder"))), ft(Be), function () {
        p = !1;
      };
    }, [Ne]), (0, A.useEffect)(function () {
      On && (setInterval(function () {
        cn(function (e) {
          return e.suggestion, C(e, ["suggestion"]);
        });
      }, 1e3), Fn(!1));
    }, [On]);
    var Jn = function () {
        return w(g, void 0, void 0, function () {
          var e;
          return k(this, function (t) {
            return e = void 0 !== (null == h ? void 0 : h.id) ? null == h ? void 0 : h.id : null == _ ? void 0 : _.id, [2, (0, z.getBuilderData)(Kn, v, e).then(function (e) {
              return e;
            })];
          });
        });
      },
      Xn = (0, A.useCallback)(function (e, t) {
        return w(g, void 0, void 0, function () {
          return k(this, function (t) {
            return Xe(!0), "advanced-builder" === Et ? (je(!1), Qn(e)) : Yn(), [2];
          });
        });
      }, [Et, Ct]),
      Qn = function (e) {
        var t = (0, M.default)((0, R.JsonToMjml)({
          data: e.content,
          mode: "production",
          context: e.content,
          dataSource: rn
        }), {
          beautify: !0,
          validationLevel: "soft"
        }).html;
        Ee({
          email_body: t,
          json_data: e
        }), Zn(e, t);
      },
      Yn = function () {
        var e = {
          content: Ct,
          editor: Et
        };
        Ee({
          email_body: Ct,
          json_data: e
        }), Zn(e, "");
      },
      Zn = function (e, t) {
        return w(g, void 0, void 0, function () {
          return k(this, function (n) {
            return "campaign" === _e || "sequence-automation" === _e ? function (e, t) {
              return w(g, void 0, void 0, function () {
                var n, l;
                return k(this, function (a) {
                  return n = Ct, "advanced-builder" === Et && (n = t), l = void 0 !== (null == h ? void 0 : h.id) ? null == h ? void 0 : h.id : "", [2, (0, z.saveBuilderData)(Kn, v, e, n, l, Et).then(function (e) {
                    return e;
                  })];
                });
              });
            }(e, t).then(function (e) {
              Xe(!1), Pt(!0);
            }) : "automation" === _e && (Xe(!1), Pt(!0), Te(!1)), T.Message.success("Data successfully saved!"), [2];
          });
        });
      },
      $n = function (e) {
        var t = (0, R.JsonToMjml)({
            data: e.content,
            mode: "production",
            context: e.content,
            dataSource: rn
          }),
          n = (0, M.default)(t, {}).html;
        (0, H.templateExport)(n, "html", "mail-mint-template.html");
      },
      el = function (e) {
        var t = (0, R.JsonToMjml)({
          data: e.content,
          mode: "production",
          context: e.content,
          dataSource: rn
        });
        (0, H.templateExport)(t, "mjml", "mail-mint-template.mjml");
      },
      tl = function (e) {
        In(e), Ln(!An);
      },
      nl = function (e) {
        var t = JSON.stringify(e, null, 2);
        (0, H.templateExport)(t, "json", "mail-mint-template.json");
      },
      ll = function (e) {
        return w(g, void 0, void 0, function () {
          var t, l, a, i, o, r, c;
          return k(this, function (u) {
            switch (u.label) {
              case 0:
                return [4, Promise.resolve().then(function () {
                  return E(n(50587));
                })];
              case 1:
                return t = u.sent().default, (l = document.createElement("div")).style.position = "absolute", l.style.left = "-9999px", a = (0, R.JsonToMjml)({
                  data: e.content,
                  mode: "production",
                  context: e.content,
                  dataSource: rn
                }), i = (0, M.default)(a, {}).html, l.innerHTML = i, document.body.appendChild(l), [4, new Promise(function (e) {
                  t(l, {
                    useCORS: !0
                  }).then(function (t) {
                    t.toBlob(function (t) {
                      t ? e(t) : (0, F.reject)(new Error((0, P.__)("Failed to generate the image blob.", "mrm")));
                    }, "png", .1);
                  });
                })];
              case 2:
                return o = u.sent(), r = URL.createObjectURL(o), (c = document.createElement("a")).href = r, c.download = "mail-mint-template.png", c.click(), URL.revokeObjectURL(r), [2];
            }
          });
        });
      },
      al = function (e) {
        return w(g, [e], void 0, function (e) {
          var t = e.restart;
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, (0, V.templateImport)("mjml", "text/mjml", t)];
              case 1:
                return e.sent(), [2];
            }
          });
        });
      },
      il = function (e) {
        return w(g, [e], void 0, function (e) {
          var t = e.restart;
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, (0, V.templateImport)("json", "application/json", t)];
              case 1:
                return e.sent(), [2];
            }
          });
        });
      },
      ol = function (e) {
        je(!0), e.target instanceof SVGElement && vt(function (e) {
          return e ? !e : e;
        });
      },
      rl = function () {
        tt(!0), Gt("test-email");
      },
      cl = (0, A.useCallback)(function () {
        tt(!1);
      }, []),
      ul = (0, A.useCallback)(function () {
        at(!1), Lt(!1);
      }, [lt]),
      dl = (0, A.useCallback)(function () {
        if (At) {
          if ("classic-editor" === Et) Sl("double-optin" === _e ? '<p>Hello,</p><p>You\'ve received this message because you subscribed to {{site_title}}. Please confirm your subscription to receive emails from us:</p><p>Click <a href="{{subscribe_link}}" data-wplink-url-error="true" data-mce-href="{{subscribe_link}}">here</a> to confirm your subscription.</p><p>If you received this email by mistake, simply delete it. You won\'t receive any more emails from us unless you confirm your subscription.</p><p>Thank you,</p><p>{{site_title}}</p>' : '<p>Dear {{contact.first_name}}, </p><p>I hope this email finds you well. I am writing to inform you about our business. I believe this information will be beneficial to you and your team. If you have any questions or require further clarification, please do not hesitate to reach out to me. I am more than happy to assist you. Thank you for your time and attention. </p><p>I look forward to hearing from you soon. </p><p>Best regards, </p><p>{{business.name}} <br/> <span style="font-size: 8pt;" data-mce-style="font-size: 8pt;">No longer be friends? {{link.unsubscribe_html|Unsubscribe}}</span></p>');else {
            var e = "double-optin" === _e ? j.defaultDoubleOptinTemplate : null === j.defaultEmailTemplate || void 0 === j.defaultEmailTemplate ? void 0 : j.defaultEmailTemplate.json_content;
            Ke(e);
          }
          at(!1), Lt(!1), It(function (e) {
            return !e;
          });
        } else "double-optin" == _e || "templates" == _e || "wc-customize-email" == _e || "default" !== Me ? Un(-1) : (Ce(!ke), N("none"), y(!1));
      }, [At]),
      sl = function (e) {
        return w(g, void 0, void 0, function () {
          var t, n, l, a, i;
          return k(this, function (o) {
            switch (o.label) {
              case 0:
                return _t(!0), t = "advanced-builder" === Et ? (0, M.default)((0, R.JsonToMjml)({
                  data: e.content,
                  mode: "production",
                  context: e.content,
                  dataSource: rn
                }), {
                  validationLevel: "soft"
                }).html : Ct, l = "advanced-builder" === Et ? "#VisualEditorEditMode" : "#classic-email-content", [4, (0, O.default)(document.querySelector(l)).then(function (e) {
                  n = e.toDataURL("image/png");
                })];
              case 1:
                return o.sent(), a = {
                  title: mt || "Untitled",
                  thumbnail: n,
                  html: t,
                  json_content: "advanced-builder" === Et ? e : {
                    content: Ct,
                    editor: Et
                  },
                  post_author: null === (i = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === i ? void 0 : i.current_userID,
                  editor: Et
                }, Oe ? (0, z.updateEmailTemplate)(a, Oe).then(function (e) {
                  "success" === (null == e ? void 0 : e.status) ? (vt(!1), je(!1), T.Message.success(null == e ? void 0 : e.message)) : T.Message.error(null == e ? void 0 : e.message), _t(!1), tt(!1);
                }) : (0, z.saveEmailTemplate)(a).then(function (e) {
                  "200" == (null == e ? void 0 : e.code) ? (vt(!1), je(!1), ft(""), T.Message.success(null == e ? void 0 : e.message)) : T.Message.error(null == e ? void 0 : e.message), _t(!1), tt(!1);
                }), [2];
            }
          });
        });
      },
      ml = (0, A.useCallback)(function () {
        return w(g, void 0, void 0, function () {
          return k(this, function (e) {
            return xe(!1), y(!0), "templates" !== _e && "double-optin" != _e && "wc-customize-email" != _e && "default" === Me || Se(!0), [2];
          });
        });
      }, [_e, xe, y, Se]),
      fl = function (e) {
        me || "wc-customize-email" != _e || "classic-editor" === e ? ("classic-editor" === e && Sl(Ct), wt(e)) : an(!0);
      },
      pl = (0, A.useRef)(null),
      gl = (0, A.useState)(!1),
      vl = gl[0],
      hl = gl[1];
    (0, I.useOutsideAlerter)(pl, hl);
    var bl = (0, A.useState)(0),
      _l = bl[0],
      yl = bl[1],
      El = function (e) {
        return w(g, void 0, void 0, function () {
          var t, n, l, a;
          return k(this, function (i) {
            return n = (t = Ct).substring(0, _l), l = t.substring(_l, t.length), a = n + e + l, yl(_l + e.length), xt(a), Rl.current && Rl.current.insertContent(e), [2];
          });
        });
      },
      wl = (0, A.useState)("none"),
      kl = wl[0],
      Cl = wl[1],
      xl = (0, A.useState)(),
      Nl = (xl[0], xl[1]),
      Tl = (0, A.useState)(""),
      Pl = (Tl[0], Tl[1]),
      Rl = (0, A.useRef)(null),
      Sl = function (e) {
        var t,
          n = "rtl" === (null === (t = document.querySelector("html")) || void 0 === t ? void 0 : t.getAttribute("dir"));
        setTimeout(function () {
          tinymce.remove("#classic-email-content"), tinymce.init({
            selector: "#classic-email-content",
            branding: !1,
            plugins: "colorpicker compat3x lists tabfocus textcolor wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wptextpattern wpview link directionality",
            toolbar1: "bold italic underline strikethrough | bullist numlist | blockquote hr wp_more | alignleft aligncenter alignright | link unlink | ltr rtl | wp_adv ",
            toolbar2: "formatselect alignjustify forecolor | fontsizeselect | fontselect |pastetext removeformat charmap | outdent indent | undo redo | wp_help ",
            wpautop: !0,
            quicktags: !0,
            mediaButtons: !0,
            directionality: "".concat(n ? "rtl" : "ltr"),
            height: "450px",
            convert_urls: !1,
            setup: function (t) {
              Rl.current = t, t.on("init", function (n) {
                t.setContent(e);
              }), t.on("change", function () {
                var e = t.getContent();
                xt(e);
              });
            }
          });
        }, 100);
      };
    (0, A.useEffect)(function () {
      Ln(!0);
    }, [Dn]), (0, A.useEffect)(function () {
      Ln(!1), In("");
    }, [Ie]);
    var Bl = (0, A.useCallback)(function (e) {
      return w(g, void 0, void 0, function () {
        return k(this, function (e) {
          return cn(b(b({}, rn), {
            openProModal: void 0
          })), an(!1), [2];
        });
      });
    }, [rn.openProModal]);
    (0, A.useEffect)(function () {
      Nn(""), Rn(!1);
    }, [vl]), (0, A.useEffect)(function () {
      Rn(!0);
    }, [xn]);
    var Ol = function (e) {
      Nn(e), Rn(!Pn);
    };
    (0, oe.default)(function (e) {
      Tt || (e.preventDefault(), e.returnValue = "");
    }), (0, A.useEffect)(function () {
      var e = document.getElementById("VisualEditorEditMode");
      "templates" === _e && e && (e.style.zIndex = "");
    }, []);
    var Fl = function (e) {
        if (Ve(e), "edit" === e) {
          var t = document.getElementById("VisualEditorEditMode"),
            n = document.getElementById("email_builder_desktop"),
            l = document.getElementById("email_builder_mobile");
          Sl(Ct), t && n && l && (t.style.display = "block", n.style.display = "none", l.style.display = "none", "templates" === _e && (t.style.zIndex = ""));
        } else "pc" === e ? (t = document.getElementById("VisualEditorEditMode"), n = document.getElementById("email_builder_desktop"), l = document.getElementById("email_builder_mobile"), t && n && l && (t.style.display = "none", n.style.display = "block", l.style.display = "none")) : (t = document.getElementById("VisualEditorEditMode"), l = document.getElementById("email_builder_mobile"), n = document.getElementById("email_builder_desktop"), t && n && l && (t.style.display = "none", l.style.display = "flex", n.style.display = "none"));
      },
      Ml = function (e, t) {
        return w(g, void 0, void 0, function () {
          var n, l, a, i, o, r, c, u, d, s;
          return k(this, function (m) {
            switch (m.label) {
              case 0:
                return Xe(!0), n = "advanced-builder" === Et ? (0, M.default)((0, R.JsonToMjml)({
                  data: e.content,
                  mode: "production",
                  context: e.content,
                  dataSource: rn
                }), {
                  validationLevel: "soft"
                }).html : Ct, "double-optin" !== _e ? [3, 1] : ((o = null === (c = null === (r = null == Sn ? void 0 : Sn.state) || void 0 === r ? void 0 : r.data) || void 0 === c ? void 0 : c.emailData).email_body = n, o.editor_type = Et, o.json_data = "advanced-builder" === Et ? {
                  content: null == e ? void 0 : e.content,
                  editor: Et
                } : {
                  content: Ct,
                  editor: Et
                }, l = {
                  optin: o
                }, (0, $.submitOptin)(l).then(function (e) {
                  !0 === e.success ? (T.Message.success(null == e ? void 0 : e.message), Pt(!0)) : T.Message.error(null == e ? void 0 : e.message);
                }).catch(function (e) {
                  console.error(e);
                }).finally(function () {
                  Xe(!1), t && Un(-1);
                }), [3, 3]);
              case 1:
                return i = "advanced-builder" === Et ? "#VisualEditorEditMode" : "#classic-email-content", [4, (0, O.default)(document.querySelector(i)).then(function (e) {
                  a = e.toDataURL("image/png");
                })];
              case 2:
                m.sent(), o = {
                  title: mt || "Untitled",
                  thumbnail: a,
                  html: n,
                  json_content: "advanced-builder" === Et ? e : {
                    content: Ct,
                    editor: Et
                  },
                  post_author: null === (u = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === u ? void 0 : u.current_userID,
                  editor: Et,
                  wooCommerce_email_type: Ot || "default"
                }, "wc-customize-email" === _e ? (o.wooCommerce_email_enable = null === (s = null === (d = null == Sn ? void 0 : Sn.state) || void 0 === d ? void 0 : d.data) || void 0 === s ? void 0 : s.wcEmailEnable, yn ? (0, z.updateEmailTemplate)(o, yn).then(function (e) {
                  "success" === (null == e ? void 0 : e.status) ? (vt(!1), je(!1), Pt(!0), T.Message.success(null == e ? void 0 : e.message)) : T.Message.error(null == e ? void 0 : e.message), _t(!1), Xe(!1);
                }).catch(function (e) {
                  console.error(e);
                }).finally(function () {
                  t && Un(-1);
                }) : (0, z.saveEmailTemplate)(o).then(function (e) {
                  var t;
                  200 == (null == e ? void 0 : e.code) ? (En(null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.id), vt(!1), je(!1), Pt(!0), T.Message.success(null == e ? void 0 : e.message)) : T.Message.error(null == e ? void 0 : e.message), _t(!1), Xe(!1);
                }).catch(function (e) {
                  console.error(e);
                }).finally(function () {
                  t && Un(-1);
                })) : (0, z.updateEmailTemplate)(o, Oe).then(function (e) {
                  "success" === (null == e ? void 0 : e.status) ? (vt(!1), je(!1), Pt(!0), T.Message.success(null == e ? void 0 : e.message)) : T.Message.error(null == e ? void 0 : e.message), _t(!1), Xe(!1);
                }).catch(function (e) {
                  console.error(e);
                }).finally(function () {
                  t && Un(-1);
                }), m.label = 3;
              case 3:
                return [2];
            }
          });
        });
      },
      Al = (0, A.useMemo)(function () {
        return [];
      }, [_e]);
    (0, A.useEffect)(function () {
      "classic-editor" === Et && Sl(Ct);
    }, [Et, tn]), (0, A.useEffect)(function () {
      var e, t, n, l, a, i;
      "wc-customize-email" !== _e || (null === (e = null == Sn ? void 0 : Sn.state.data) || void 0 === e ? void 0 : e.isExisting) ? En(null === (i = null === (a = null == Sn ? void 0 : Sn.state) || void 0 === a ? void 0 : a.data) || void 0 === i ? void 0 : i.templateId) : function (e) {
        if (Ft(e), "default" === e) Ke(j.defaultTemplate);else {
          var t = j.wcDefaultTemplates[e];
          Ke(t);
        }
      }(null === (l = null === (n = null === (t = null == Sn ? void 0 : Sn.state) || void 0 === t ? void 0 : t.data) || void 0 === n ? void 0 : n.template) || void 0 === l ? void 0 : l.wc_email_type);
    }, [_e]), (0, A.useEffect)(function () {
      kn || (0, de.initializeFullScreen)();
      var e = ["mintmrm-email-editor"];
      return (0, de.addClassToHtml)(e), function () {
        (0, de.removeClassFromHtml)(e), (0, de.destroyFullScreenMode)();
      };
    }, []);
    var Ll = (0, A.useRef)(null),
      zl = (0, A.useRef)(null);
    return (0, A.useEffect)(function () {
      var e,
        t,
        n,
        l,
        a,
        i,
        o,
        r = null === (e = document.querySelector("#VisualEditorEditMode")) || void 0 === e ? void 0 : e.shadowRoot,
        c = r && r.getElementById("easy-email-rich-text-bar"),
        u = document.getElementById("VisualEditorEditMode"),
        d = null,
        s = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return w(g, x([], e, !0), void 0, function (e) {
            var t, n, l, a, i, o;
            return void 0 === e && (e = !1), k(this, function (s) {
              switch (s.label) {
                case 0:
                  r = null === (i = document.querySelector("#VisualEditorEditMode")) || void 0 === i ? void 0 : i.shadowRoot, c = r && r.getElementById("easy-email-rich-text-bar"), u = document.getElementById("VisualEditorEditMode"), t = function (e) {
                    return new Promise(function (t) {
                      return setTimeout(t, e);
                    });
                  }, n = 0, s.label = 1;
                case 1:
                  return n < 2 ? c ? [3, 4] : [4, t(100)] : [3, 4];
                case 2:
                  s.sent(), r = null === (o = document.querySelector("#VisualEditorEditMode")) || void 0 === o ? void 0 : o.shadowRoot, c = r && r.getElementById("easy-email-rich-text-bar"), s.label = 3;
                case 3:
                  return n++, [3, 1];
                case 4:
                  return d && u && c ? (l = d.getBoundingClientRect(), a = u.getBoundingClientRect(), c.style.opacity = "1", c.style.transition = "opacity 0.3s ease-out", c.querySelector("#Tools div").style.flexWrap = "wrap", c.style.transition = e ? "top 0.3s ease-in-out, width 0.3s ease-in-out, left 0.3s ease-in-out" : "", c.style.left = "".concat(l.left + 144, "px"), l.top > a.top ? (c.style.top = "".concat(l.top - 160, "px"), c.style.display = "block") : l.bottom <= a.top ? c.style.display = "none" : (c.style.top = "".concat(a.top - 150, "px"), c.style.display = "block"), [2]) : [2];
              }
            });
          });
        },
        m = function (e) {
          var t,
            n,
            l = document.querySelector(".mrm-editor-header .header-right button.more-option"),
            a = document.querySelector(".mrm-editor-header");
          if (l && !l.contains(e.target) && a) {
            a.style.zIndex = "99", function () {
              var e,
                t = null === (e = document.querySelector("#VisualEditorEditMode")) || void 0 === e ? void 0 : e.shadowRoot,
                n = null == t ? void 0 : t.querySelector("#easy-email-extensions-InteractivePrompt-FocusTooltip"),
                l = null == n ? void 0 : n.previousElementSibling;
              l && "rich_text" === l.getAttribute("data-content_editable-type") && (d = l, s(!0));
            }(), f();
            var i = null === (n = null === (t = document.getElementById("VisualEditorEditMode")) || void 0 === t ? void 0 : t.shadowRoot) || void 0 === n ? void 0 : n.querySelector(".shadow-container.easy-email-sync-scroll");
            i.addEventListener("scroll", function () {
              return s(!1);
            }), i.addEventListener("resize", function () {
              return s(!1);
            });
          }
        },
        f = function () {
          var e,
            t = null === (e = document.querySelector("#VisualEditorEditMode")) || void 0 === e ? void 0 : e.shadowRoot;
          if (t) {
            var n = t.querySelectorAll(".toolbar-controls.mintmrm-toolbar-controls");
            n && n.forEach(function (e) {
              e.addEventListener("click", function () {
                var e,
                  t = null === (e = document.querySelector("#VisualEditorEditMode")) || void 0 === e ? void 0 : e.shadowRoot;
                if (t) {
                  var n = t.querySelector("#easy-email-rich-text-bar");
                  n && (n.style.display = "none");
                }
              });
            });
          }
        };
      return document.addEventListener("click", m), window.addEventListener("scroll", s), window.addEventListener("resize", s), document.addEventListener("load", m), t = document.querySelectorAll(".mrm-editor-header .mintmrm-tooltip"), n = document.querySelectorAll(".mrm-editor-header .header-center button"), l = document.querySelector(".mrm-editor-header"), a = document.querySelector(".mrm-editor-header .header-right button.more-option"), i = function () {
        c && (c.style.transition = "opacity 0.3s ease-out", c.style.opacity = "0"), l && (l.style.zIndex = "100");
      }, o = function () {
        a && x([], null == a ? void 0 : a.classList, !0).includes("show-option-list") || (c && (c.style.transition = "opacity 0.3s ease-in", c.style.opacity = "1"), l && (l.style.zIndex = "99"));
      }, t && t.forEach(function (e) {
        e.addEventListener("mouseenter", i), e.addEventListener("mouseleave", o);
      }), n && n.forEach(function (e) {
        e.addEventListener("mouseenter", i), e.addEventListener("mouseleave", o);
      }), a && a.addEventListener("click", i), function () {
        document.removeEventListener("click", m), window.removeEventListener("scroll", s), window.removeEventListener("resize", s), document.removeEventListener("load", m);
      };
    }, [Ll.current, zl.current]), A.default.createElement(A.default.Fragment, null, !Ue && ("automation" === _e ? "classic-editor" !== (null === (d = null == we ? void 0 : we.json_body) || void 0 === d ? void 0 : d.editor) : _ ? "classic-editor" !== (null === (s = null == _ ? void 0 : _.email_json) || void 0 === s ? void 0 : s.editor) && (null == _ ? void 0 : _.email_json) : "classic-editor" !== (null === (f = null === (m = h[v]) || void 0 === m ? void 0 : m.email_json) || void 0 === f ? void 0 : f.editor) && (null === (p = h[v]) || void 0 === p ? void 0 : p.email_json)) ? A.default.createElement("div", {
      className: "email-builder-loading"
    }, A.default.createElement("span", {
      className: "mintmrm-loader"
    })) : A.default.createElement("div", {
      className: "mrm-email-editor"
    }, A.default.createElement(S.EmailEditorProvider, {
      ref: Ll,
      data: Gn,
      height: "calc(100vh - 65px)",
      dashed: !1,
      autoComplete: !0,
      enabledLogic: !0,
      fontList: j.fontList,
      mergeTags: rn,
      setSelectedPostType: function (e) {
        cn(b(b({}, rn), {
          postTypeValue: e
        }));
      },
      onUploadImage: function () {
        return w(g, void 0, void 0, function () {
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, (0, z.getImageSrc)()];
              case 1:
                return [2, e.sent()];
            }
          });
        });
      },
      onSubmit: Xn,
      renderTextBlockSuggestion: function (e, t) {
        var n;
        St(null === (n = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === n ? void 0 : n.mint_trans.GenerateCompellingEmailCopiesUsingAI), Cl("block"), Nl(t), Pl("builder");
      }
    }, function (e, n) {
      var l,
        a,
        i,
        o,
        r,
        c,
        u,
        d,
        s,
        m,
        f,
        p,
        b,
        _,
        E,
        C,
        x,
        R,
        O,
        M,
        L,
        z,
        I,
        j,
        H,
        V,
        $,
        te,
        ne,
        oe,
        ge = e.values,
        Ee = n.submit,
        xe = n.restart;
      return A.default.createElement(A.default.Fragment, null, A.default.createElement(D.default, {
        header: Wt,
        label: qt,
        confirmModal: lt,
        onCancelConfirm: ul,
        onCloseConfirm: dl
      }), A.default.createElement("div", {
        className: "mintmrm-container",
        style: {
          display: kl
        }
      }), null == (null == rn ? void 0 : rn.openProModal) || 0 == (null == rn ? void 0 : rn.openProModal) ? A.default.createElement(A.default.Fragment, null) : A.default.createElement("div", {
        className: "mintmrm-container"
      }, A.default.createElement(ce.default, {
        emailBuilder: !0,
        onProShow: Bl,
        proLink: re.EmailBuilderOpenAILink
      })), ln && A.default.createElement("div", {
        className: "mintmrm-container"
      }, A.default.createElement(ce.default, {
        emailBuilder: !0,
        onProShow: Bl,
        proLink: re.EmailBuilderOpenAILink
      })), A.default.createElement(ie.default, {
        isOpen: et,
        onCancel: cl,
        alertType: ot,
        alertMessage: ut,
        emailData: h[v],
        activeEditor: Et,
        classicEmailContent: Ct,
        dataSource: rn,
        setTestMailMessage: dt,
        setTestMailMessageColor: rt,
        values: ge,
        automationData: we,
        mintPage: _e
      }), A.default.createElement(ae.default, {
        isOpen: Xt,
        setIsOpen: Qt
      }, A.default.createElement("div", {
        className: "wc-email-modal-wrapper"
      }, A.default.createElement("div", {
        className: "wc-email-modal-header"
      }, A.default.createElement("h2", null, null === (a = null === (l = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === l ? void 0 : l.mint_trans) || void 0 === a ? void 0 : a.SelectWooCommerceEvent)), A.default.createElement("div", {
        className: "wc-email-modal-template-name form-group"
      }, A.default.createElement("label", {
        htmlFor: "template-name"
      }, null === (o = null === (i = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === i ? void 0 : i.mint_trans) || void 0 === o ? void 0 : o.TemplateName), A.default.createElement("input", {
        type: "text",
        name: "template-name",
        id: "template-name",
        value: mt,
        onChange: function (e) {
          return ft(e.target.value);
        }
      })), A.default.createElement("div", {
        className: "wc-email-modal-body"
      }, null === t.options || void 0 === t.options ? void 0 : t.options.map(function (e, t) {
        return A.default.createElement("p", {
          key: t,
          className: "wc-email-modal-body-item ".concat((null == e ? void 0 : e.value) === Zt ? "selected" : ""),
          onClick: function () {
            return $t(null == e ? void 0 : e.value);
          }
        }, A.default.createElement("span", {
          className: "item-label"
        }, null == e ? void 0 : e.label), A.default.createElement("span", {
          className: "item-icon"
        }, A.default.createElement(le.default, null)));
      })), A.default.createElement("div", {
        className: "wc-email-modal-footer"
      }, A.default.createElement("button", {
        className: "mintmrm-btn outline",
        onClick: function () {
          return Qt(!1);
        }
      }, null === (c = null === (r = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === r ? void 0 : r.mint_trans) || void 0 === c ? void 0 : c.Cancel), A.default.createElement("button", {
        className: "mintmrm-btn",
        onClick: function () {
          return wn(Zt);
        }
      }, null === (d = null === (u = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === u ? void 0 : u.mint_trans) || void 0 === d ? void 0 : d.Save)))), A.default.createElement("div", {
        className: "mrm-editor-header",
        style: {
          background: "var(--color-bg-2)"
        },
        ref: zl
      }, A.default.createElement("div", {
        className: "header-left"
      }, A.default.createElement(T.Button, {
        className: "back-from-editor",
        title: "Back",
        onClick: function () {
          return function (e) {
            return w(g, void 0, void 0, function () {
              var t, n, l, a, i, o, r, c, u, d, s, m;
              return k(this, function (f) {
                return "campaign" == _e || "sequence-automation" == _e ? Kn && ((0, F.isEqual)(null == Gn ? void 0 : Gn.content, null == e ? void 0 : e.content) && (0, F.isEqual)(null == Gn ? void 0 : Gn.subTitle, null == e ? void 0 : e.subTitle) && (0, F.isEqual)(null == Gn ? void 0 : Gn.subject, null == e ? void 0 : e.subject) || Tt ? (Ce(!ke), N("none"), y(!1)) : (at(!0), Ht(null === (n = null === (t = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === t ? void 0 : t.mint_trans) || void 0 === n ? void 0 : n.ExitEmailBuilder), Ut(null === (a = null === (l = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === l ? void 0 : l.mint_trans) || void 0 === a ? void 0 : a.ExitBuilderMsg))) : "automation" == _e ? (0, F.isEqual)(null == Gn ? void 0 : Gn.content, null == e ? void 0 : e.content) && (0, F.isEqual)(null == Gn ? void 0 : Gn.subTitle, null == e ? void 0 : e.subTitle) && (0, F.isEqual)(null == Gn ? void 0 : Gn.subject, null == e ? void 0 : e.subject) || Tt ? (Te(!1), Ce(!ke), N("none"), y(!1)) : (at(!0), Ht(null === (o = null === (i = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === i ? void 0 : i.mint_trans) || void 0 === o ? void 0 : o.ExitEmailBuilder), Ut(null === (c = null === (r = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === r ? void 0 : r.mint_trans) || void 0 === c ? void 0 : c.ExitBuilderMsg)) : "templates" != _e && "double-optin" != _e && "wc-customize-email" != _e && "default" === Me || ((0, F.isEqual)(null == Gn ? void 0 : Gn.content, null == e ? void 0 : e.content) || Tt ? Un(-1) : (at(!0), Ht(null === (d = null === (u = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === u ? void 0 : u.mint_trans) || void 0 === d ? void 0 : d.ExitEmailBuilder), Ut(null === (m = null === (s = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === s ? void 0 : s.mint_trans) || void 0 === m ? void 0 : m.ExitBuilderMsg))), Re(!1), [2];
              });
            });
          }(ge);
        }
      }, A.default.createElement(J.default, null)), A.default.createElement("div", {
        className: "responsive-check"
      }, A.default.createElement(T.Button, {
        className: "edit-mode ".concat("edit" == He ? "active" : ""),
        title: "Edit Mode",
        onClick: function (e) {
          return Fl("edit");
        }
      }, A.default.createElement(X.default, null)), A.default.createElement(T.Button, {
        className: "desktop-mode ".concat("pc" == He ? "active" : ""),
        title: "Desktop View",
        onClick: function (e) {
          return Fl("pc");
        }
      }, A.default.createElement(G.default, null)), A.default.createElement(T.Button, {
        className: "mobile-mode ".concat("mobile" == He ? "active" : ""),
        title: "Mobile View",
        onClick: function (e) {
          return Fl("mobile");
        }
      }, A.default.createElement(Y.default, null)))), A.default.createElement("div", {
        className: "header-center"
      }, A.default.createElement("button", {
        type: "button",
        className: "editor-switcher-btn builder ".concat("advanced-builder" === Et ? "active" : "", " ").concat(me || "wc-customize-email" != _e ? "" : "pro-active"),
        onClick: function () {
          return fl("advanced-builder");
        }
      }, A.default.createElement(U.default, null), A.default.createElement("p", {
        className: "switcher-tooltip"
      }, (0, P.__)("Template - Visual Builder", "mrm"))), A.default.createElement("button", {
        type: "button",
        className: "editor-switcher-btn classic ".concat("classic-editor" === Et ? "active" : ""),
        onClick: function () {
          return fl("classic-editor");
        }
      }, A.default.createElement(K.default, null), A.default.createElement("p", {
        className: "switcher-tooltip"
      }, (0, P.__)("Template - Classic Editor", "mrm")))), "templates" === _e || "wc-customize-email" === _e || "default" !== Me ? A.default.createElement(A.default.Fragment, null, A.default.createElement("div", {
        className: "header-right ".concat(_e)
      }, "templates" === _e && A.default.createElement("div", {
        className: "select-template-type-wrapper"
      }, A.default.createElement("input", {
        type: "text",
        placeholder: "Enter template name",
        value: mt,
        onChange: function (e) {
          return ft(e.target.value);
        }
      })), A.default.createElement(T.Button, {
        className: Ie ? "more-option show-option-list" : "more-option",
        onClick: function (e) {
          return ol(e);
        },
        ref: Vn
      }, A.default.createElement(Z.default, null), A.default.createElement("ul", {
        className: "more-option-list"
      }, A.default.createElement("li", null, A.default.createElement(T.Button, {
        className: "has-sub-dropdown ".concat("export" === Dn && An ? "show" : ""),
        onClick: function () {
          return tl("export");
        }
      }, (0, P.__)("Export", "mrm")), "export" === Dn && An && A.default.createElement(A.default.Fragment, null, A.default.createElement(T.Button, {
        className: "group-item",
        onClick: function () {
          return el(ge);
        }
      }, (0, P.__)("Export MJML", "mrm")), A.default.createElement(T.Button, {
        className: "group-item",
        onClick: function () {
          return $n(ge);
        }
      }, (0, P.__)("Export HTML", "mrm")), A.default.createElement(T.Button, {
        className: "group-item",
        onClick: function () {
          return nl(ge);
        }
      }, (0, P.__)("Export JSON", "mrm")), A.default.createElement(T.Button, {
        className: "group-item",
        onClick: function () {
          return ll(ge);
        }
      }, (0, P.__)("Export Image", "mrm"))), A.default.createElement(T.Button, {
        className: "has-sub-dropdown ".concat("import" === Dn && An ? "show" : ""),
        onClick: function () {
          return tl("import");
        }
      }, (0, P.__)("Import", "mrm")), "import" === Dn && An && A.default.createElement(A.default.Fragment, null, A.default.createElement(T.Button, {
        className: "group-item",
        onClick: function () {
          return al({
            restart: xe
          });
        }
      }, (0, P.__)("From MJML", "mrm")), A.default.createElement(T.Button, {
        className: "group-item",
        onClick: function () {
          return il({
            restart: xe
          });
        }
      }, (0, P.__)("From JSON", "mrm"))), A.default.createElement(T.Button, {
        onClick: function () {
          return ml();
        }
      }, null === (m = null === (s = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === s ? void 0 : s.mint_trans) || void 0 === m ? void 0 : m.SwitchTemplate)))), A.default.createElement("span", {
        className: "mintmrm-tooltip"
      }, A.default.createElement(T.Button, {
        className: "mint-send-test-mail-button",
        onClick: function () {
          return rl();
        }
      }, A.default.createElement(ue.default, null), A.default.createElement("p", null, null === (p = null === (f = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === f ? void 0 : f.mint_trans) || void 0 === p ? void 0 : p.SendTestEmail))), A.default.createElement(ee.default, {
        multiOptions: Al,
        onClick: function () {
          return "templates" === _e || "wc-customize-email" == _e || "default" !== Me ? Ml(ge, !1) : Ee();
        },
        loading: Je,
        label: "wc-customize-email" == _e || "default" !== Me ? null === (_ = null === (b = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === b ? void 0 : b.mint_trans) || void 0 === _ ? void 0 : _.Publish : null === (C = null === (E = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === E ? void 0 : E.mint_trans) || void 0 === C ? void 0 : C.Save
      }), !kn && A.default.createElement("span", {
        className: "mintmrm-tooltip mint-wp-menu-toggle-tooltip"
      }, A.default.createElement(T.Button, {
        className: "mint-send-test-mail-button mint-wp-menu-toggle-btn",
        onClick: function () {
          return (0, de.toggleWPMenu)(Wn, Hn);
        }
      }, Wn ? A.default.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "27",
        height: "27",
        xmlns: "http://www.w3.org/2000/svg"
      }, A.default.createElement("path", {
        d: "M8.293 15H3.5a.5.5 0 110-1h6a.5.5 0 01.5.5v6a.5.5 0 11-1 0v-4.793l-5.146 5.147a.5.5 0 01-.708-.708L8.293 15zM9 8.293V3.5a.5.5 0 011 0v6a.5.5 0 01-.5.5h-6a.5.5 0 010-1h4.793L3.146 3.854a.5.5 0 11.708-.708L9 8.293zM15.707 9H20.5a.5.5 0 110 1h-6a.5.5 0 01-.5-.5v-6a.5.5 0 111 0v4.793l5.146-5.147a.5.5 0 01.708.708L15.707 9zm0 6l5.147 5.146a.5.5 0 01-.708.708L15 15.707v4.814a.5.5 0 11-1 0V14.5a.5.5 0 01.5-.5h6a.5.5 0 110 1h-4.793z"
      })) : A.default.createElement("svg", {
        width: "27",
        height: "27",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, A.default.createElement("path", {
        d: "M13 21.293l2.146-2.147a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L12 21.293V15.5a.5.5 0 111 0v5.793zM3.707 13l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L3.707 12H9.5a.5.5 0 110 1H3.707zm17.586-1l-2.147-2.146a.5.5 0 01.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L21.293 13H15.5a.5.5 0 110-1h5.793zM13 3.707V9.5a.5.5 0 11-1 0V3.707L9.854 5.854a.5.5 0 11-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L13 3.707z"
      })), A.default.createElement("p", null, "Toggle Editor ", A.default.createElement("br", null), " Screen Size"))))) : A.default.createElement(A.default.Fragment, null, A.default.createElement("div", {
        className: "header-right ".concat(_e)
      }, A.default.createElement(T.Button, {
        className: Ie ? "more-option show-option-list" : "more-option",
        onClick: function (e) {
          return ol(e);
        },
        ref: Vn
      }, A.default.createElement(Z.default, null), A.default.createElement("ul", {
        className: "more-option-list"
      }, A.default.createElement("li", null, A.default.createElement(T.Button, {
        className: "has-sub-dropdown ".concat("export" === Dn && An ? "show" : ""),
        onClick: function () {
          return tl("export");
        }
      }, (0, P.__)("Export", "mrm")), "export" === Dn && An && A.default.createElement(A.default.Fragment, null, A.default.createElement(T.Button, {
        className: "group-item",
        onClick: function () {
          return el(ge);
        }
      }, (0, P.__)("Export MJML", "mrm")), A.default.createElement(T.Button, {
        className: "group-item",
        onClick: function () {
          return $n(ge);
        }
      }, (0, P.__)("Export HTML", "mrm")), A.default.createElement(T.Button, {
        className: "group-item",
        onClick: function () {
          return nl(ge);
        }
      }, (0, P.__)("Export JSON", "mrm")), A.default.createElement(T.Button, {
        className: "group-item",
        onClick: function () {
          return ll(ge);
        }
      }, (0, P.__)("Export Image", "mrm"))), A.default.createElement(T.Button, {
        className: "has-sub-dropdown ".concat("import" === Dn && An ? "show" : ""),
        onClick: function () {
          return tl("import");
        }
      }, (0, P.__)("Import", "mrm")), "import" === Dn && An && A.default.createElement(A.default.Fragment, null, A.default.createElement(T.Button, {
        className: "group-item",
        onClick: function () {
          return al({
            restart: xe
          });
        }
      }, (0, P.__)("From MJML", "mrm")), A.default.createElement(T.Button, {
        className: "group-item",
        onClick: function () {
          return il({
            restart: xe
          });
        }
      }, (0, P.__)("From JSON", "mrm"))), "templates" !== _e && A.default.createElement(T.Button, {
        onClick: function () {
          return vt(!0);
        }
      }, (0, P.__)("Save as template", "mrm")), A.default.createElement(T.Button, {
        onClick: function () {
          return ml();
        }
      }, (0, P.__)("Choose Template", "mrm")))), A.default.createElement("div", {
        className: "save-template-btn ".concat(gt ? "active" : ""),
        ref: qn
      }, A.default.createElement("label", null, (0, P.__)("Save as template", "mrm")), A.default.createElement("input", {
        type: "text",
        placeholder: "Enter template name",
        value: mt,
        onChange: function (e) {
          return ft(e.target.value);
        }
      }), A.default.createElement("button", {
        className: "mintmrm-btn",
        disabled: !!bt,
        onClick: function () {
          return sl(ge);
        }
      }, (0, P.__)("Save", "mrm"), bt && A.default.createElement("span", {
        className: "mintmrm-loader"
      })))), "templates" === _e && (null === (x = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === x ? void 0 : x.is_customize_wc_email) && A.default.createElement(A.default.Fragment, null, A.default.createElement("select", {
        value: Ot,
        onChange: wn
      }, t.options.map(function (e) {
        return A.default.createElement("option", {
          key: e.value,
          value: e.value
        }, e.label);
      }))), "templates" === _e && A.default.createElement("input", {
        className: "template-name",
        type: "text",
        placeholder: "Enter template name",
        value: mt,
        onChange: function (e) {
          return ft(e.target.value);
        }
      }), A.default.createElement(T.Button, {
        onClick: function () {
          return rl();
        }
      }, (0, P.__)("Send Test Email", "mrm")), "templates" === _e || "double-optin" === _e ? A.default.createElement("button", {
        className: "arco-btn arco-btn-primary arco-btn-size-default arco-btn-shape-square save-btn",
        onClick: function () {
          return Ml(ge, !1);
        },
        disabled: !!Je
      }, (0, P.__)("Save", "mrm"), Je && A.default.createElement("span", {
        className: "mintmrm-loader"
      })) : A.default.createElement("button", {
        className: "arco-btn arco-btn-primary arco-btn-size-default arco-btn-shape-square save-btn",
        onClick: function () {
          return Ee();
        },
        disabled: !!Je
      }, (0, P.__)("Save", "mrm"), Je && A.default.createElement("span", {
        className: "mintmrm-loader"
      })), "templates" !== _e && A.default.createElement("button", {
        className: "arco-btn arco-btn-primary arco-btn-size-default arco-btn-shape-square next-btn",
        onClick: function () {
          return "double-optin" === _e ? Ml(ge, !0) : function (e) {
            Ze(!0), "templates" === _e ? sl(e) : "advanced-builder" === Et ? (je(!1), Qn(e)) : Yn();
            var t = setTimeout(function () {
              Ze(!1), Ce(!ke), N("none"), y(!1), Re(!1), Re(!1);
            }, 3e3);
            return function () {
              return clearTimeout(t);
            };
          }(ge);
        },
        disabled: !!Ye
      }, (0, P.__)("Next", "mrm"), Ye && A.default.createElement("span", {
        className: "mintmrm-loader"
      })), !kn && A.default.createElement("span", {
        className: "mintmrm-tooltip mint-wp-menu-toggle-tooltip"
      }, A.default.createElement(T.Button, {
        className: "mint-send-test-mail-button mint-wp-menu-toggle-btn",
        onClick: function () {
          return (0, de.toggleWPMenu)(Wn, Hn);
        }
      }, Wn ? A.default.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "27",
        height: "27",
        xmlns: "http://www.w3.org/2000/svg"
      }, A.default.createElement("path", {
        d: "M8.293 15H3.5a.5.5 0 110-1h6a.5.5 0 01.5.5v6a.5.5 0 11-1 0v-4.793l-5.146 5.147a.5.5 0 01-.708-.708L8.293 15zM9 8.293V3.5a.5.5 0 011 0v6a.5.5 0 01-.5.5h-6a.5.5 0 010-1h4.793L3.146 3.854a.5.5 0 11.708-.708L9 8.293zM15.707 9H20.5a.5.5 0 110 1h-6a.5.5 0 01-.5-.5v-6a.5.5 0 111 0v4.793l5.146-5.147a.5.5 0 01.708.708L15.707 9zm0 6l5.147 5.146a.5.5 0 01-.708.708L15 15.707v4.814a.5.5 0 11-1 0V14.5a.5.5 0 01.5-.5h6a.5.5 0 110 1h-4.793z"
      })) : A.default.createElement("svg", {
        width: "27",
        height: "27",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, A.default.createElement("path", {
        d: "M13 21.293l2.146-2.147a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L12 21.293V15.5a.5.5 0 111 0v5.793zM3.707 13l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L3.707 12H9.5a.5.5 0 110 1H3.707zm17.586-1l-2.147-2.146a.5.5 0 01.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L21.293 13H15.5a.5.5 0 110-1h5.793zM13 3.707V9.5a.5.5 0 11-1 0V3.707L9.854 5.854a.5.5 0 11-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L13 3.707z"
      })), A.default.createElement("p", null, "Toggle Editor ", A.default.createElement("br", null), " Screen Size")))))), "advanced-builder" === Et ? A.default.createElement(A.default.Fragment, null, A.default.createElement(W.EditorBlockData, {
        values: ge,
        setDataSource: cn,
        dataSource: rn
      }), A.default.createElement(B.StandardLayout, {
        compact: !1,
        showSourceCode: !1,
        categories: ye
      }, A.default.createElement(S.EditEmailPreview, null), A.default.createElement(S.DesktopEmailPreview, null), A.default.createElement(S.MobileEmailPreview, null), A.default.createElement(S.EmailEditor, null))) : A.default.createElement(A.default.Fragment, null, A.default.createElement("div", {
        className: "mintmrm-classic-editor"
      }, "edit" === He && A.default.createElement(A.default.Fragment, null, A.default.createElement("div", {
        className: "email-textarea edit-mode"
      }, A.default.createElement("div", {
        className: "textarea-header"
      }, A.default.createElement("h4", null, (0, P.__)("Classic Editor", "mrm")), A.default.createElement("div", {
        className: "pos-relative option-group",
        ref: pl
      }, A.default.createElement("button", {
        className: "more-option",
        onClick: function () {
          hl(function (e) {
            return !e;
          });
        }
      }, A.default.createElement("span", {
        className: "merge-tag-icon"
      }, A.default.createElement(Q.default, null), A.default.createElement("p", {
        className: "personalized-tooltip"
      }, null === (O = null === (R = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === R ? void 0 : R.mint_trans) || void 0 === O ? void 0 : O.personalizeTooltip))), A.default.createElement("div", {
        className: "openai-icon",
        onClick: function (e) {
          var t, n;
          return n = null === (t = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === t ? void 0 : t.mint_trans.GenerateCompellingEmailCopiesUsingAI, Pl("classic-editor"), Cl("block"), void St(n);
        }
      }, A.default.createElement(q.default, null), A.default.createElement("p", {
        className: "personalized-tooltip"
      }, (0, P.__)("OpenAI", "mrm"))), A.default.createElement("ul", {
        className: "mintmrm-dropdown merge-tag-wrapper ".concat(vl ? "show" : "")
      }, A.default.createElement("li", {
        className: "title"
      }, (0, P.__)("Personalization", "mrm")), me && ("automation" === _e && "wp_post_publish" === ze || "sequence-automation" === _e || "templates" === _e) && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("post" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("post");
        }
      }, (0, P.__)("Post", "mrm")), "post" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{post.title}}");
        }
      }, (0, P.__)("Title", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{post.date}}");
        }
      }, (0, P.__)("Date", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{post.author}}");
        }
      }, (0, P.__)("Author", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{post.excerpt}}");
        }
      }, (0, P.__)("Excerpt", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{post.image}}");
        }
      }, (0, P.__)("Image", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{post.image_url}}");
        }
      }, (0, P.__)("Image URL", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{post.link}}");
        }
      }, (0, P.__)("Link", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{post.link_with_title}}");
        }
      }, (0, P.__)("Link with Title", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{post.full_content}}");
        }
      }, (0, P.__)("Full Content", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{post.cats}}");
        }
      }, (0, P.__)("Categories", "mrm")))), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("contact" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("contact");
        }
      }, (0, P.__)("Contact", "mrm")), "contact" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.email}}");
        }
      }, null === (M = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === M ? void 0 : M.contact_general_fields.email), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.first_name}}");
        }
      }, null === (L = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === L ? void 0 : L.contact_general_fields.first_name), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.last_name}}");
        }
      }, null === (z = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === z ? void 0 : z.contact_general_fields.last_name), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.status}}");
        }
      }, "Status"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.company}}");
        }
      }, null === (I = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === I ? void 0 : I.contact_general_fields.company), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.designation}}");
        }
      }, null === (j = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === j ? void 0 : j.contact_general_fields.designation), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.address_1}}");
        }
      }, null === (H = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === H ? void 0 : H.contact_general_fields.address_line_1), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.address_2}}");
        }
      }, null === (V = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === V ? void 0 : V.contact_general_fields.address_line_2), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.city}}");
        }
      }, "City"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.state}}");
        }
      }, "State / Province"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.country}}");
        }
      }, "Country"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.postal}}");
        }
      }, "Postal / Zip"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.phone_number}}");
        }
      }, "Phone Number"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{contact.date_of_birth}}");
        }
      }, "Date of Birth")), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("business" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("business");
        }
      }, (0, P.__)("Business", "mrm")), "business" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{business.name}}");
        }
      }, (0, P.__)("Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{business.address}}");
        }
      }, (0, P.__)("Formatted Address", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{business.address_line_1}}");
        }
      }, (0, P.__)("Address Line 1", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{business.address_line_2}}");
        }
      }, (0, P.__)("Address Line 2", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{business.city}}");
        }
      }, (0, P.__)("City", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{business.state}}");
        }
      }, (0, P.__)("State / Province", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{business.country}}");
        }
      }, (0, P.__)("Country", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{business.postal}}");
        }
      }, (0, P.__)("Postal / ZIP", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{business.logo_url}}");
        }
      }, (0, P.__)("Logo URL", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{business.logo_image}}");
        }
      }, (0, P.__)("Logo Image", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{business.phone}}");
        }
      }, (0, P.__)("Phone Number", "mrm"))), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("link" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("link");
        }
      }, (0, P.__)("Links", "mrm")), "link" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{link.subscribe}}");
        }
      }, (0, P.__)("Subscribe Link", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{link.subscribe_html|Subscribe}}");
        }
      }, (0, P.__)("Subscribe HTML", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{link.unsubscribe}}");
        }
      }, (0, P.__)("Unsubscribe Link", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{link.unsubscribe_html|Unsubscribe}}");
        }
      }, (0, P.__)("Unsubscribe HTML", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{link.preference}}");
        }
      }, (0, P.__)("Preference Link", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{link.preference_html|Manage your preference}}");
        }
      }, (0, P.__)("Preference HTML", "mrm"))), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("site" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("site");
        }
      }, (0, P.__)("Website", "mrm")), "site" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{site.url}}");
        }
      }, (0, P.__)("URL", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{site.title}}");
        }
      }, (0, P.__)("Title", "mrm"))), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("url" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("url");
        }
      }, (0, P.__)("URL", "mrm")), "url" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{url.home}}");
        }
      }, (0, P.__)("Home URL", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{url.shop}}");
        }
      }, (0, P.__)("Shop URL", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{url.my_account}}");
        }
      }, (0, P.__)("My Account URL", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{url.checkout}}");
        }
      }, (0, P.__)("Checkout URL", "mrm")), ("wc-customize-email" === _e || "default" !== Me) && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{url.reset_password}}");
        }
      }, (0, P.__)("Reset Password", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{url.payment_url}}");
        }
      }, (0, P.__)("Payment URL", "mrm")))), !(0, F.isEmpty)(null === ($ = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === $ ? void 0 : $.contact_custom_fields) && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("custom" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("custom");
        }
      }, (0, P.__)("Custom", "mrm")), "custom" === xn && Pn && A.default.createElement(A.default.Fragment, null, Object.keys(null === (te = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === te ? void 0 : te.contact_custom_fields).map(function (e) {
        var t;
        return A.default.createElement("li", {
          key: e,
          className: "group-item",
          onClick: function () {
            return El("{{custom.".concat(e, "}}"));
          }
        }, null === (t = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === t ? void 0 : t.contact_custom_fields[e]);
      }))), !(0, F.isEmpty)(Ae) && me && "automation" === _e && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("coupons" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("coupons");
        }
      }, (0, P.__)("WC Coupons", "mrm")), "coupons" === xn && Pn && A.default.createElement(A.default.Fragment, null, Object.entries(Ae).map(function (e) {
        var t = e[0],
          n = e[1];
        return "label" !== t ? A.default.createElement("li", {
          className: "group-item",
          onClick: function () {
            return El("{{".concat(t, "}}"));
          }
        }, n) : null;
      }))), se && me && ("wc-customize-email" === _e || "templates" === _e || ("automation" === _e || "automation" === Pe.type) && un.includes(ze) || "sequence-automation" === _e) && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("customer" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("customer");
        }
      }, (0, P.__)("WC Customer", "mrm")), "customer" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{customer.name}}");
        }
      }, "Name"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{customer.first_name}}");
        }
      }, "First Name"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{customer.last_name}}");
        }
      }, "Last Name"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{customer.note}}");
        }
      }, "Note")), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("billing" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("billing");
        }
      }, (0, P.__)("WC Billing", "mrm")), "billing" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{billing.first_name}}");
        }
      }, "First Name"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{billing.last_name}}");
        }
      }, "Last Name"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{billing.company}}");
        }
      }, "Company"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{billing.address}}");
        }
      }, "Formatted Address"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{billing.address_1}}");
        }
      }, "Address 1"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{billing.address_2}}");
        }
      }, "Address 2"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{billing.city}}");
        }
      }, "City"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{billing.state}}");
        }
      }, "State"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{billing.postcode}}");
        }
      }, "Postcode"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{billing.country}}");
        }
      }, "Country"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{billing.email}}");
        }
      }, "Email"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{billing.phone}}");
        }
      }, "Phone")), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("shipping" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("shipping");
        }
      }, (0, P.__)("WC Shipping", "mrm")), "shipping" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{shipping.first_name}}");
        }
      }, "First Name"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{shipping.last_name}}");
        }
      }, "Last Name"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{shipping.company}}");
        }
      }, "Company"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{shipping.address}}");
        }
      }, "Formatted Address"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{shipping.address_1}}");
        }
      }, "Address 1"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{shipping.address_2}}");
        }
      }, "Address 2"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{shipping.city}}");
        }
      }, "City"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{shipping.state}}");
        }
      }, "State"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{shipping.postcode}}");
        }
      }, "Postcode"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{shipping.country}}");
        }
      }, "Country"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{shipping.email}}");
        }
      }, "Email"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{shipping.phone}}");
        }
      }, "Phone"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{shipping.method}}");
        }
      }, "Method")), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("order_details" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("order_details");
        }
      }, (0, P.__)("WC Order", "mrm")), "order_details" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.order_id}}");
        }
      }, "Order ID"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.order_status}}");
        }
      }, "Order Status"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.order_date}}");
        }
      }, "Order Date"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.currency}}");
        }
      }, "Order Currency"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.order_discount}}");
        }
      }, "Order Discount"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.order_number}}");
        }
      }, "Order Number"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.order_fully_refunded}}");
        }
      }, "Order Fully Refund"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.order_partial_refund}}");
        }
      }, "Order Partial Refund"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.order_received_url}}");
        }
      }, "Order Received URL"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.order_shipping}}");
        }
      }, "Order Shipping"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.order_subtotal}}");
        }
      }, "Order Subtotal"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.order_total}}");
        }
      }, "Order Total"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.order_tax}}");
        }
      }, "Order Tax"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.payment_method}}");
        }
      }, "Payment Method"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.items_count}}");
        }
      }, "Items Count"), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{order_details.ordered_items_table}}");
        }
      }, "Ordered Items Table"))), se && me && (("automation" === _e || "automation" === Pe.type) && mn.includes(ze) || "templates" === _e || "sequence-automation" === _e) && (null === (oe = null === (ne = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === ne ? void 0 : ne.cart_settings) || void 0 === oe ? void 0 : oe.enable) && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("carts" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("carts");
        }
      }, (0, P.__)("Cart Abandonment", "mrm")), "carts" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.items}}");
        }
      }, (0, P.__)("Cart Items Table", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.recovery_url}}");
        }
      }, (0, P.__)("Cart Recovery URL", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.billing_email}}");
        }
      }, (0, P.__)("Cart Billing Email", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.abandoned_date}}");
        }
      }, (0, P.__)("Cart Abandoned Date", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.total}}");
        }
      }, (0, P.__)("Cart Items Total", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.currency}}");
        }
      }, (0, P.__)("Cart Currency (Symbol)", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.billing_first_name}}");
        }
      }, (0, P.__)("Cart Billing First Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.billing_last_name}}");
        }
      }, (0, P.__)("Cart Billing Last Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.billing_address_1}}");
        }
      }, (0, P.__)("Cart Billing Address 1", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.billing_address_2}}");
        }
      }, (0, P.__)("Cart Billing Address 2", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.billing_company}}");
        }
      }, (0, P.__)("Cart Billing Company", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.billing_city}}");
        }
      }, (0, P.__)("Cart Billing City", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.billing_state}}");
        }
      }, (0, P.__)("Cart Billing State", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.billing_postcode}}");
        }
      }, (0, P.__)("Cart Billing Postcode", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.billing_country}}");
        }
      }, (0, P.__)("Cart Billing Country", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.billing_phone}}");
        }
      }, (0, P.__)("Cart Billing Phone", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.shipping_first_name}}");
        }
      }, (0, P.__)("Cart Shipping First Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.shipping_last_name}}");
        }
      }, (0, P.__)("Cart Shipping Last Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.shipping_address_1}}");
        }
      }, (0, P.__)("Cart Shipping Address 1", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.shipping_address_2}}");
        }
      }, (0, P.__)("Cart Shipping Address 2", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.shipping_company}}");
        }
      }, (0, P.__)("Cart Shipping Company", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.shipping_city}}");
        }
      }, (0, P.__)("Cart Shipping City", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.shipping_state}}");
        }
      }, (0, P.__)("Cart Shipping State", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.shipping_postcode}}");
        }
      }, (0, P.__)("Cart Shipping Postcode", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.shipping_country}}");
        }
      }, (0, P.__)("Cart Shipping Country", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{cart.shipping_phone}}");
        }
      }, (0, P.__)("Cart Shipping Phone", "mrm")))), pe && me && ("wc-customize-email" === _e || "templates" === _e || ("automation" === _e || "automation" === Pe.type) && pn.includes(ze) || "sequence-automation" === _e) && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("wcs" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("wcs");
        }
      }, (0, P.__)("WC Subscriptions", "mrm")), "wcs" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.id}}");
        }
      }, (0, P.__)("ID", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.status}}");
        }
      }, (0, P.__)("Status", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.product_name}}");
        }
      }, (0, P.__)("Product Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.product_price}}");
        }
      }, (0, P.__)("Product Price", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.start_date}}");
        }
      }, (0, P.__)("Start Date", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.end_date}}");
        }
      }, (0, P.__)("End Date", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.trial_end_date}}");
        }
      }, (0, P.__)("Trial End Date", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.next_payment_date}}");
        }
      }, (0, P.__)("Next Payment Date", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.last_payment_date}}");
        }
      }, (0, P.__)("Last Payment Date", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.order_id}}");
        }
      }, (0, P.__)("Associated Order ID", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.total}}");
        }
      }, (0, P.__)("Total", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.payment_method}}");
        }
      }, (0, P.__)("Payment Method", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.billing_address}}");
        }
      }, (0, P.__)("Billing Address", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.billing_company}}");
        }
      }, (0, P.__)("Billing Company", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_subscription.view_url}}");
        }
      }, (0, P.__)("Subscription View Url", "mrm")))), se && me && (("automation" === _e || "automation" === Pe.type) && dn.includes(ze) || "templates" === _e || "sequence-automation" === _e) && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("carts" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("carts");
        }
      }, (0, P.__)("Product", "mrm")), "carts" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{product.id}}");
        }
      }, (0, P.__)("ID", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{product.name}}");
        }
      }, (0, P.__)("Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{product.regular_price}}");
        }
      }, (0, P.__)("Regular Price", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{{{product.sale_price}}}}");
        }
      }, (0, P.__)("Sale Price", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{product.description}}");
        }
      }, (0, P.__)("Description", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{product.short_description}}");
        }
      }, (0, P.__)("Short Description", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{product.sku}}");
        }
      }, (0, P.__)("SKU", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{product.parent_sku}}");
        }
      }, (0, P.__)("Parent SKU", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{product.featured_image}}");
        }
      }, (0, P.__)("Featured Image", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{product.permalink}}");
        }
      }, (0, P.__)("Permalink", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{product.add_to_cart_url}}");
        }
      }, (0, P.__)("Add To Cart URL", "mrm")))), se && me && (("automation" === _e || "automation" === Pe.type) && sn.includes(ze) || "templates" === _e || "sequence-automation" === _e) && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("carts" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("carts");
        }
      }, (0, P.__)("Review", "mrm")), "carts" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{review.rating}}");
        }
      }, (0, P.__)("Rating", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{review.content}}");
        }
      }, (0, P.__)("Content", "mrm")))), pe && me && ("wc-customize-email" === _e || "templates" === _e || ("automation" === _e || "automation" === Pe.type) && vn.includes(ze) || "sequence-automation" === _e) && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("wcs" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("wc_wishlist");
        }
      }, (0, P.__)("WC Wishlists", "mrm")), "wc_wishlist" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_wishlist.items_count}}");
        }
      }, (0, P.__)("Items Count", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_wishlist.items}}");
        }
      }, (0, P.__)("Items", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_wishlist.id}}");
        }
      }, (0, P.__)("ID", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_wishlist.title}}");
        }
      }, (0, P.__)("Title", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_wishlist.view_link}}");
        }
      }, (0, P.__)("View Link", "mrm")))), be && me && ("fb-customize-email" === _e || "templates" === _e || ("automation" === _e || "automation" === Pe.type) && hn.includes(ze) || "sequence-automation" === _e) && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("fb_booking" === xn && Pn ? "show" : null),
        onClick: function () {
          return Ol("fb_booking");
        }
      }, (0, P.__)("Fluent Booking Data", "mrm")), "fb_booking" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.event_name}}");
        }
      }, (0, P.__)("Event Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.description}}");
        }
      }, (0, P.__)("Event Description", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.booking_title}}");
        }
      }, (0, P.__)("Booking Title", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.additional_guests}}");
        }
      }, (0, P.__)("Additional Guests", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.full_start_date_guest_timezone}}");
        }
      }, (0, P.__)("Full Start Date Time (Guest Timezone)", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.full_start_date_host_timezone}}");
        }
      }, (0, P.__)("Full Start Date Time (Host Timezone)", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.full_start_end_date_guest_timezone}}");
        }
      }, (0, P.__)("Full Start & End Date Time (Guest Timezone)", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.full_start_end_date_host_timezone}}");
        }
      }, (0, P.__)("Full Start & End Date Time (Host Timezone)", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.cancelation_url}}");
        }
      }, (0, P.__)("Booking Cancellation URL", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.cancelation_reason}}");
        }
      }, (0, P.__)("Booking Cancellation Reason", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.reschedule_url}}");
        }
      }, (0, P.__)("Booking Reschedule URL", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.admin_booking_url}}");
        }
      }, (0, P.__)("Booking Admin URL", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.booking_hash}}");
        }
      }, (0, P.__)("Booking Hash", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_booking.reschedule_reason}}");
        }
      }, (0, P.__)("Booking Reschedule Reason", "mrm"))), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("fb_guest" === xn && Pn ? "show" : null),
        onClick: function () {
          return Ol("fb_guest");
        }
      }, (0, P.__)("Fluent Booking Guest", "mrm")), "fb_guest" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_guest.first_name}}");
        }
      }, (0, P.__)("Guest First Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_guest.last_name}}");
        }
      }, (0, P.__)("Guest Last Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_guest.email}}");
        }
      }, (0, P.__)("Guest Email", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_guest.note}}");
        }
      }, (0, P.__)("Guest Note", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_guest.phone}}");
        }
      }, (0, P.__)("Guest Phone Number", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_guest.timezone}}");
        }
      }, (0, P.__)("Guest Timezone", "mrm"))), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("fb_event" === xn && Pn ? "show" : null),
        onClick: function () {
          return Ol("fb_event");
        }
      }, (0, P.__)("Fluent Booking Event", "mrm")), "fb_event" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_event.event_id}}");
        }
      }, (0, P.__)("Event ID", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_event.calendar_id}}");
        }
      }, (0, P.__)("Calendar ID", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_event.event_title}}");
        }
      }, (0, P.__)("Event Title", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_event.calendar_title}}");
        }
      }, (0, P.__)("Calendar Title", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_event.calendar_description}}");
        }
      }, (0, P.__)("Calendar Description", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_event.start_date_time}}");
        }
      }, (0, P.__)("Event Date Time (UTC)", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_event.start_date_time_for_attendee}}");
        }
      }, (0, P.__)("Event Date Time (attendee timezone)", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_event.start_date_time_for_host}}");
        }
      }, (0, P.__)("Event Date Time (host timezone)", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_event.location_details_text}}");
        }
      }, (0, P.__)("Event Location Details", "mrm"))), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("fb_host" === xn && Pn ? "show" : null),
        onClick: function () {
          return Ol("fb_host");
        }
      }, (0, P.__)("Fluent Booking Host Data", "mrm")), "fb_host" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_host.name}}");
        }
      }, (0, P.__)("Host Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_host.email}}");
        }
      }, (0, P.__)("Host Email", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{fb_host.timezone}}");
        }
      }, (0, P.__)("Host Timezone", "mrm")))), ve && me && ("wc-customize-email" === _e || "templates" === _e || ("automation" === _e || "automation" === Pe.type) && gn.includes(ze) || "sequence-automation" === _e) && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("wcm_membership" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("wcm_membership");
        }
      }, (0, P.__)("WC Memberships", "mrm")), "wcs" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_membership.id}}");
        }
      }, (0, P.__)("User Membership ID", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_membership.status}}");
        }
      }, (0, P.__)("Membership Status", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_membership.first_name}}");
        }
      }, (0, P.__)("Member First Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_membership.last_name}}");
        }
      }, (0, P.__)("Member Last Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_membership.start_date}}");
        }
      }, (0, P.__)("Membership Start Date", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_membership.end_date}}");
        }
      }, (0, P.__)("Membership End Date", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_membership.plan_id}}");
        }
      }, (0, P.__)("Membership Plan ID", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_membership.plan_name}}");
        }
      }, (0, P.__)("Membership Plan Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{wc_membership.renewal_url}}");
        }
      }, (0, P.__)("Membership Renewal URL", "mrm")))), he && me && ("ld-customize-email" === _e || "templates" === _e || ("automation" === _e || "automation" === Pe.type) && bn.includes(ze) || "sequence-automation" === _e) && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("ld" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("ld");
        }
      }, (0, P.__)("LearnDash LMS", "mrm")), "ld" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.candidate_name}}");
        }
      }, (0, P.__)("Candidate Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.course_name}}");
        }
      }, (0, P.__)("Course Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.lesson_name}}");
        }
      }, (0, P.__)("Lesson Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.quiz_name}}");
        }
      }, (0, P.__)("Quiz Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.quiz_percentage}}");
        }
      }, (0, P.__)("Quiz Percentage", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.quiz_score}}");
        }
      }, (0, P.__)("Quiz Score", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.topic_name}}");
        }
      }, (0, P.__)("Topic Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.enrolled_courses}}");
        }
      }, (0, P.__)("User's Enrolled Courses", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.quiz_highest_points}}");
        }
      }, (0, P.__)("User's Highest Points in a Quiz", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.quiz_lowest_points}}");
        }
      }, (0, P.__)("User's Lowest Points in a Quiz", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.user_groups}}");
        }
      }, (0, P.__)("User's Groups", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.group_name}}");
        }
      }, (0, P.__)("Group Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.group_leader_emails}}");
        }
      }, (0, P.__)("Group Leader(s)'s Emails", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{ld.group_leaders}}");
        }
      }, (0, P.__)("Group Leader(s)'s Names", "mrm")))), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("user" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("user");
        }
      }, (0, P.__)("WP User", "mrm")), "user" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{user.id}}");
        }
      }, (0, P.__)("User ID", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{user.username}}");
        }
      }, (0, P.__)("Username", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{user.email}}");
        }
      }, (0, P.__)("Email", "mrm"))), fe && me && (("automation" === _e || "automation" === Pe.type) && fn.includes(ze) || "templates" === _e || "sequence-automation" === _e) && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("edd_order" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("edd_order");
        }
      }, (0, P.__)("Order Details - EDD", "mrm")), "edd_order" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd.order_number}}");
        }
      }, (0, P.__)("Order Number", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd.order_status}}");
        }
      }, (0, P.__)("Order Status", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd.order_currency}}");
        }
      }, (0, P.__)("Order Currency (Symbol)", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd.order_total_amount}}");
        }
      }, (0, P.__)("Order Total Amount", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd.order_payment_method}}");
        }
      }, (0, P.__)("Order Payment Method", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd.order_date}}");
        }
      }, (0, P.__)("Order Date", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd.order_items_count}}");
        }
      }, (0, P.__)("Order Items Count", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd.order_address}}");
        }
      }, (0, P.__)("Order Address", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd.order_items_table}}");
        }
      }, (0, P.__)("Order Items Table", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd.order_download_lists}}");
        }
      }, (0, P.__)("Order Download Lists", "mrm"))), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("edd_customer" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("edd_customer");
        }
      }, (0, P.__)("Customer Details - EDD", "mrm")), "edd_customer" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd_customer.first_name}}");
        }
      }, (0, P.__)("First Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd_customer.last_name}}");
        }
      }, (0, P.__)("Last Name", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd_customer.email}}");
        }
      }, (0, P.__)("Email", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd_customer.total_order_count}}");
        }
      }, (0, P.__)("Total Order Count", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd_customer.total_spent}}");
        }
      }, (0, P.__)("Total Spent", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd_customer.first_order_date}}");
        }
      }, (0, P.__)("First Order Date", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd_customer.last_order_date}}");
        }
      }, (0, P.__)("Last Order Date", "mrm"))), A.default.createElement("li", {
        className: "has-sub-dropdown ".concat("edd_billing" === xn && Pn ? "show" : null, " "),
        onClick: function () {
          return Ol("edd_billing");
        }
      }, (0, P.__)("Billing Details - EDD", "mrm")), "edd_billing" === xn && Pn && A.default.createElement(A.default.Fragment, null, A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd_billing.address_line_1}}");
        }
      }, (0, P.__)("Address Line 1", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd_billing.address_line_2}}");
        }
      }, (0, P.__)("Address Line 2", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd_billing.city}}");
        }
      }, (0, P.__)("City", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd_billing.postal}}");
        }
      }, (0, P.__)("Zip / Postal Code", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd_billing.country}}");
        }
      }, (0, P.__)("Country", "mrm")), A.default.createElement("li", {
        className: "group-item",
        onClick: function () {
          return El("{{edd_billing.region}}");
        }
      }, (0, P.__)("Region", "mrm"))))))), A.default.createElement("textarea", {
        id: "classic-email-content",
        name: "classic-email-content",
        placeholder: "Write your email here",
        value: Ct,
        onChange: function (e) {
          return function (e) {
            xt(e.target.value), yl(e.target.selectionStart);
          }(e);
        },
        onClick: function (e) {
          return yl(e.target.selectionStart);
        }
      }))), "pc" === He && A.default.createElement("div", {
        className: "email-perview-mode desktop-mode"
      }, A.default.createElement("iframe", {
        srcDoc: Ct,
        style: {
          width: "100%",
          height: "100%"
        }
      })), "mobile" === He && A.default.createElement("div", {
        className: "email-perview-mode mobile-mode"
      }, A.default.createElement("div", {
        className: "classic-email-content"
      }, A.default.createElement("iframe", {
        srcDoc: Ct,
        style: {
          width: "100%",
          height: "100%"
        }
      }))))));
    }), A.default.createElement("div", {
      className: "mint-reset-builder"
    }, A.default.createElement("button", {
      onClick: function () {
        var e, t, n, l;
        at(!0), Lt(!0), Ht(null === (t = null === (e = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === e ? void 0 : e.mint_trans) || void 0 === t ? void 0 : t.ResetEmailBuilderHeader), Ut(null === (l = null === (n = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === n ? void 0 : n.mint_trans) || void 0 === l ? void 0 : l.ResetEmailBuilderMsg);
      }
    }, A.default.createElement("span", {
      className: "mintmrm-tooltip"
    }, A.default.createElement(ne.default, null), A.default.createElement("p", null, "Reset")))), A.default.createElement(te.default, {
      showVideo: "true",
      videoLink: "https://www.youtube.com/embed/FqKNzjVsmQE"
    })));
  });
});
