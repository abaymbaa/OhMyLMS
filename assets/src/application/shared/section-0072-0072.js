// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function bT() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 22 22"
  }, React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".2",
    d: "M1.004 10.766a.786.786 0 00.225.63l3.125 3.125a.781.781 0 001.105-1.105l-1.792-1.791H4.75a7.04 7.04 0 007.031-7.031V1.78a.781.781 0 00-1.562 0v2.813a5.475 5.475 0 01-5.469 5.468H3.667l1.792-1.79a.781.781 0 10-1.105-1.106l-3.125 3.125a.789.789 0 00-.225.475zM17.25 11.625h1.083l-1.792 1.791a.781.781 0 001.105 1.105l3.125-3.125a.79.79 0 00.229-.552c0-.2-.08-.404-.23-.553l-3.124-3.125a.781.781 0 10-1.105 1.105l1.792 1.791H17.25a5.446 5.446 0 01-3.76-1.498.781.781 0 10-1.075 1.135 7.002 7.002 0 004.835 1.926zM11 10.795a.781.781 0 00-.781.781v6.757l-1.792-1.791a.781.781 0 10-1.104 1.104c3.572 3.573 3.08 3.079 3.126 3.127a.789.789 0 00.628.223.79.79 0 00.475-.225l3.125-3.125a.781.781 0 10-1.104-1.105l-1.792 1.792v-6.757a.781.781 0 00-.781-.781z"
  }));
}

null !== (BM = window) && void 0 !== BM && null !== (BM = BM.MRM_Vars) && void 0 !== BM && BM.is_wc_active && uT.push({
  action: "WooCommerce",
  values: [{
    name: "First Order Date",
    param: "first_order_date",
    relation: ["WooCommerce", "first_order_date"],
    conditions: [{
      condition_label: "before",
      condition_value: "before",
      actionType: "date_time"
    }, {
      condition_label: "after",
      condition_value: "after",
      actionType: "date_time"
    }, {
      condition_label: "in the date",
      condition_value: "in_the_date",
      actionType: "date_time"
    }]
  }, {
    name: "Last Order Date",
    param: "last_order_date",
    relation: ["WooCommerce", "last_order_date"],
    conditions: [{
      condition_label: "before",
      condition_value: "before",
      actionType: "date_time"
    }, {
      condition_label: "after",
      condition_value: "after",
      actionType: "date_time"
    }, {
      condition_label: "in the date",
      condition_value: "in_the_date",
      actionType: "date_time"
    }]
  }, {
    name: "Purchased Products",
    param: "purchased_products",
    relation: ["WooCommerce", "purchased_products"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "woocommerce_product"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "woocommerce_product"
    }]
  }, {
    name: "Purchased Categories",
    param: "purchased_categories",
    relation: ["WooCommerce", "purchased_categories"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "woocommerce_product"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "woocommerce_product"
    }]
  }, {
    name: "Purchased Tags",
    param: "purchased_tags",
    relation: ["WooCommerce", "purchased_tags"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "woocommerce_product"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "woocommerce_product"
    }]
  }, {
    name: "Used Coupons",
    param: "used_coupons",
    relation: ["WooCommerce", "used_coupons"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "woocommerce_product"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "woocommerce_product"
    }]
  }, {
    name: "Total Order Count",
    param: "total_order_count",
    relation: ["WooCommerce", "total_order_count"],
    conditions: [{
      condition_label: "greater than",
      condition_value: "greater_than",
      actionType: "input_number"
    }, {
      condition_label: "less than",
      condition_value: "less_than",
      actionType: "input_number"
    }, {
      condition_label: "equal",
      condition_value: "equal",
      actionType: "input_number"
    }, {
      condition_label: "does not equal",
      condition_value: "does_not_equal",
      actionType: "input_number"
    }]
  }, {
    name: "Total Order value",
    param: "total_order_value",
    relation: ["WooCommerce", "total_order_value"],
    conditions: [{
      condition_label: "greater than",
      condition_value: "greater_than",
      actionType: "input_number"
    }, {
      condition_label: "less than",
      condition_value: "less_than",
      actionType: "input_number"
    }, {
      condition_label: "equal",
      condition_value: "equal",
      actionType: "input_number"
    }, {
      condition_label: "does not equal",
      condition_value: "does_not_equal",
      actionType: "input_number"
    }]
  }, {
    name: "Average Order value",
    param: "average_order_value",
    relation: ["WooCommerce", "average_order_value"],
    conditions: [{
      condition_label: "greater than",
      condition_value: "greater_than",
      actionType: "input_number"
    }, {
      condition_label: "less than",
      condition_value: "less_than",
      actionType: "input_number"
    }, {
      condition_label: "equal",
      condition_value: "equal",
      actionType: "input_number"
    }, {
      condition_label: "does not equal",
      condition_value: "does_not_equal",
      actionType: "input_number"
    }]
  }, {
    name: "Is A Customer",
    param: "is_a_customer",
    relation: ["WooCommerce", "is_a_customer"],
    conditions: [{
      condition_label: "equal",
      condition_value: "equal",
      actionType: "input_select"
    }]
  }]
}, {
  action: "WC Current Order",
  values: [{
    name: "Current Order Total Value",
    param: "current_order_total_value",
    relation: ["WC Current Order", "current_order_total_value"],
    conditions: [{
      condition_label: "greater than",
      condition_value: "greater_than",
      actionType: "input_number"
    }, {
      condition_label: "less than",
      condition_value: "less_than",
      actionType: "input_number"
    }, {
      condition_label: "equal",
      condition_value: "equal",
      actionType: "input_number"
    }, {
      condition_label: "does not equal",
      condition_value: "does_not_equal",
      actionType: "input_number"
    }]
  }, {
    name: "Products in Current Order",
    param: "products_in_current_order",
    relation: ["WC Current Order", "products_in_current_order"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "woocommerce_product"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "woocommerce_product"
    }]
  }, {
    name: "Purchased from Categories",
    param: "purchased_from_categories",
    relation: ["WC Current Order", "purchased_from_categories"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "woocommerce_product"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "woocommerce_product"
    }]
  }, {
    name: "Order Status",
    param: "current_order_status",
    relation: ["WC Current Order", "current_order_status"],
    conditions: [{
      condition_label: "is",
      condition_value: "equal",
      actionType: "input_select"
    }, {
      condition_label: "is not",
      condition_value: "does_not_equal",
      actionType: "input_select"
    }]
  }]
}), null !== (LM = window) && void 0 !== LM && null !== (LM = LM.MRM_Vars) && void 0 !== LM && LM.is_edd_active && uT.push({
  action: "Easy Digital Downloads",
  values: [{
    name: "First Order Date",
    param: "edd_first_order_date",
    relation: ["Easy Digital Downloads", "edd_first_order_date"],
    conditions: [{
      condition_label: "before",
      condition_value: "before",
      actionType: "date_time"
    }, {
      condition_label: "after",
      condition_value: "after",
      actionType: "date_time"
    }, {
      condition_label: "in the date",
      condition_value: "in_the_date",
      actionType: "date_time"
    }]
  }, {
    name: "Last Order Date",
    param: "edd_last_order_date",
    relation: ["Easy Digital Downloads", "edd_last_order_date"],
    conditions: [{
      condition_label: "before",
      condition_value: "before",
      actionType: "date_time"
    }, {
      condition_label: "after",
      condition_value: "after",
      actionType: "date_time"
    }, {
      condition_label: "in the date",
      condition_value: "in_the_date",
      actionType: "date_time"
    }]
  }, {
    name: "Purchased Products",
    param: "edd_purchased_products",
    relation: ["Easy Digital Downloads", "edd_purchased_products"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "edd_product"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "edd_product"
    }]
  }, {
    name: "Purchased Categories",
    param: "edd_purchased_categories",
    relation: ["Easy Digital Downloads", "edd_purchased_categories"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "edd_product"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "edd_product"
    }]
  }, {
    name: "Purchased Tags",
    param: "edd_purchased_tags",
    relation: ["Easy Digital Downloads", "edd_purchased_tags"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "edd_product"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "edd_product"
    }]
  }, {
    name: "Total Order Count",
    param: "edd_total_order_count",
    relation: ["Easy Digital Downloads", "edd_total_order_count"],
    conditions: [{
      condition_label: "greater than",
      condition_value: "greater_than",
      actionType: "input_number"
    }, {
      condition_label: "less than",
      condition_value: "less_than",
      actionType: "input_number"
    }, {
      condition_label: "equal",
      condition_value: "equal",
      actionType: "input_number"
    }, {
      condition_label: "does not equal",
      condition_value: "does_not_equal",
      actionType: "input_number"
    }]
  }, {
    name: "Total Order value",
    param: "edd_total_order_value",
    relation: ["Easy Digital Downloads", "edd_total_order_value"],
    conditions: [{
      condition_label: "greater than",
      condition_value: "greater_than",
      actionType: "input_number"
    }, {
      condition_label: "less than",
      condition_value: "less_than",
      actionType: "input_number"
    }, {
      condition_label: "equal",
      condition_value: "equal",
      actionType: "input_number"
    }, {
      condition_label: "does not equal",
      condition_value: "does_not_equal",
      actionType: "input_number"
    }]
  }, {
    name: "Is A Customer",
    param: "edd_is_a_customer",
    relation: ["Easy Digital Downloads", "edd_is_a_customer"],
    conditions: [{
      condition_label: "yes",
      condition_value: "yes",
      actionType: "boolean_conditional_node"
    }, {
      condition_label: "no",
      condition_value: "no",
      actionType: "boolean_conditional_node"
    }]
  }]
}), null !== (VM = window) && void 0 !== VM && null !== (VM = VM.MRM_Vars) && void 0 !== VM && VM.is_wcs_active && uT.push({
  action: "WC Subscriptions",
  values: [{
    name: "Subscription Status",
    param: "subscription_status",
    relation: ["WC Subscriptions", "subscription_status"],
    conditions: [{
      condition_label: "is",
      condition_value: "equal",
      actionType: "input_select"
    }, {
      condition_label: "is not",
      condition_value: "does_not_equal",
      actionType: "input_select"
    }]
  }, {
    name: "Subscription Total",
    param: "subscription_total",
    relation: ["WC Subscriptions", "subscription_total"],
    conditions: [{
      condition_label: "greater than",
      condition_value: "greater_than",
      actionType: "input_number"
    }, {
      condition_label: "less than",
      condition_value: "less_than",
      actionType: "input_number"
    }, {
      condition_label: "equal",
      condition_value: "equal",
      actionType: "input_number"
    }, {
      condition_label: "does not equal",
      condition_value: "does_not_equal",
      actionType: "input_number"
    }]
  }, {
    name: "Parent Order Status",
    param: "parent_order_status",
    relation: ["WC Subscriptions", "parent_order_status"],
    conditions: [{
      condition_label: "is",
      condition_value: "equal",
      actionType: "input_select"
    }, {
      condition_label: "is not",
      condition_value: "does_not_equal",
      actionType: "input_select"
    }]
  }, {
    name: "Subscription Items",
    param: "subscription_items",
    relation: ["WC Subscriptions", "subscription_items"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "woocommerce_product"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "woocommerce_product"
    }]
  }]
}), null !== (HM = window) && void 0 !== HM && null !== (HM = HM.MRM_Vars) && void 0 !== HM && HM.is_wcm_active && uT.push({
  action: "WC Membership",
  values: [{
    name: "Membership Has Status",
    param: "has_status",
    relation: ["WC Membership", "has_status"],
    conditions: [{
      condition_label: "is",
      condition_value: "equal",
      actionType: "input_select"
    }, {
      condition_label: "is not",
      condition_value: "does_not_equal",
      actionType: "input_select"
    }]
  }, {
    name: "Membership Has Active Plans",
    param: "has_active_plans",
    relation: ["WC Membership", "has_active_plans"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "woocommerce_product"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "woocommerce_product"
    }]
  }]
}), null !== (GM = window) && void 0 !== GM && null !== (GM = GM.MRM_Vars) && void 0 !== GM && GM.is_wcw_active && uT.push({
  action: "WC Wishlist",
  values: [{
    name: "WC Wishlists Items",
    param: "wishlist_items",
    relation: ["WC Wishlist", "wishlist_items"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "woocommerce_product"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "woocommerce_product"
    }]
  }, {
    name: "WC Wishlists Item categories",
    param: "wishlist_item_categories",
    relation: ["WC Wishlist", "wishlist_item_categories"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "woocommerce_product"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "woocommerce_product"
    }]
  }]
}), null !== (UM = window) && void 0 !== UM && null !== (UM = UM.MRM_Vars) && void 0 !== UM && UM.is_learndash_active && uT.push({
  action: "LearnDash",
  values: [{
    name: "Quiz Score",
    param: "quiz_score",
    relation: ["LearnDash", "quiz_score"],
    conditions: [{
      condition_label: "equal",
      condition_value: "equal",
      actionType: "input_number"
    }, {
      condition_label: "does not equal",
      condition_value: "does_not_equal",
      actionType: "input_number"
    }, {
      condition_label: "less than",
      condition_value: "less_than",
      actionType: "input_number"
    }, {
      condition_label: "greater than",
      condition_value: "greater_than",
      actionType: "input_number"
    }]
  }, {
    name: "Enrollment Courses",
    param: "enrollment_courses",
    relation: ["LearnDash", "enrollment_courses"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "lms_courses"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "lms_courses"
    }, {
      condition_label: "includes all of",
      condition_value: "includes_all_of",
      actionType: "lms_courses"
    }, {
      condition_label: "includes none of (match all)",
      condition_value: "includes_none_of",
      actionType: "lms_courses"
    }]
  }, {
    name: "Course Completed",
    param: "course_completed",
    relation: ["LearnDash", "course_completed"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "lms_courses"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "lms_courses"
    }]
  }, {
    name: "Enrollment Groups",
    param: "enrollment_groups",
    relation: ["LearnDash", "enrollment_groups"],
    conditions: [{
      condition_label: "included in",
      condition_value: "included_in",
      actionType: "lms_courses"
    }, {
      condition_label: "not included in",
      condition_value: "not_included_in",
      actionType: "lms_courses"
    }, {
      condition_label: "includes all of",
      condition_value: "includes_all_of",
      actionType: "lms_courses"
    }, {
      condition_label: "includes none of (match all)",
      condition_value: "includes_none_of",
      actionType: "lms_courses"
    }]
  }, {
    name: "Last Enrollment Date",
    param: "last_enrollment_date",
    relation: ["LearnDash", "last_enrollment_date"],
    conditions: [{
      condition_label: "before",
      condition_value: "before",
      actionType: "date_time"
    }, {
      condition_label: "after",
      condition_value: "after",
      actionType: "date_time"
    }, {
      condition_label: "in the date",
      condition_value: "in_the_date",
      actionType: "date_time"
    }]
  }, {
    name: "First Enrollment Date",
    param: "first_enrollment_date",
    relation: ["LearnDash", "first_enrollment_date"],
    conditions: [{
      condition_label: "before",
      condition_value: "before",
      actionType: "date_time"
    }, {
      condition_label: "after",
      condition_value: "after",
      actionType: "date_time"
    }, {
      condition_label: "in the date",
      condition_value: "in_the_date",
      actionType: "date_time"
    }]
  }]
});

var _T = {
  key: "condition",
  group: "logical",
  type: "logical",
  category: "logical",
  package: "pro",
  title: (0, b._x)("Check Condition", "noun", "mrm"),
  foreground: "#7F54B3",
  background: "#f7edf7",
  description: null === (cT = window) || void 0 === cT || null === (cT = cT.MRM_Vars) || void 0 === cT || null === (cT = cT.mint_trans) || void 0 === cT ? void 0 : cT.ContactMeetsIfElseConditions,
  subtitle: function (e) {
    var t;
    return null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.ContactMeetsIfElseConditions;
  },
  icon: function () {
    return React.createElement("svg", {
      width: "22",
      height: "22",
      fill: "none",
      viewBox: "0 0 22 22"
    }, React.createElement("path", {
      fill: "#2D3149",
      stroke: "#2D3149",
      strokeWidth: ".2",
      d: "M1.004 10.766a.786.786 0 00.225.63l3.125 3.125a.781.781 0 001.105-1.105l-1.792-1.791H4.75a7.04 7.04 0 007.031-7.031V1.78a.781.781 0 00-1.562 0v2.813a5.475 5.475 0 01-5.469 5.468H3.667l1.792-1.79a.781.781 0 10-1.105-1.106l-3.125 3.125a.789.789 0 00-.225.475zM17.25 11.625h1.083l-1.792 1.791a.781.781 0 001.105 1.105l3.125-3.125a.79.79 0 00.229-.552c0-.2-.08-.404-.23-.553l-3.124-3.125a.781.781 0 10-1.105 1.105l1.792 1.791H17.25a5.446 5.446 0 01-3.76-1.498.781.781 0 10-1.075 1.135 7.002 7.002 0 004.835 1.926zM11 10.795a.781.781 0 00-.781.781v6.757l-1.792-1.791a.781.781 0 10-1.104 1.104c3.572 3.573 3.08 3.079 3.126 3.127a.789.789 0 00.628.223.79.79 0 00.475-.225l3.125-3.125a.781.781 0 10-1.104-1.105l-1.792 1.792v-6.757a.781.781 0 00-.781-.781z"
    }));
  },
  edit: function () {
    var e,
      t,
      n = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id),
          emailConditions: e(Lf).getEmailConditions(),
          contactConditions: e(Lf).getContactConditions(),
          segmentConditions: e(Lf).getSegmentConditions()
        };
      }, []),
      r = n.selectedStep,
      a = n.selectedStepIndex,
      o = n.selectedStepCondition,
      i = n.selectedLogicalStepIndex,
      l = (n.errors, n.emailConditions),
      c = n.contactConditions,
      u = n.segmentConditions;
    return h().createElement(q.PanelBody, {
      opened: !0
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings logical"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(bT, null), (0, b.__)("If/Else", "mrm"))), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("div", {
      className: "conditional-setting-wrapper"
    }, (null === (e = r.settings) || void 0 === e || null === (e = e.rules) || void 0 === e ? void 0 : e.condition.length) > 0 && (null === (t = r.settings) || void 0 === t || null === (t = t.rules) || void 0 === t ? void 0 : t.condition.map(function (e, t) {
      var n;
      return h().createElement("div", {
        className: "rules-wrapper is-or-condition",
        key: t
      }, null == e ? void 0 : e.map(function (n, r) {
        return h().createElement(yT, {
          value: e,
          key: r,
          valueKey: t,
          item: n,
          index: r,
          emailConditions: l,
          contactConditions: c,
          segmentConditions: u
        });
      }), h().createElement(q.Button, {
        type: "button",
        className: "add-and-condition",
        onClick: function () {
          return function (e) {
            var t,
              n = null === (t = r.settings) || void 0 === t ? void 0 : t.rules.condition.map(function (e, t) {
                return e;
              });
            n[e].push({
              action: "",
              param: "",
              name: "",
              condition_label: "",
              condition_value: "",
              value: "",
              segmentValue: []
            }), (0, y.dispatch)(Lf).updateStepArgs(a, o, i, "rules", "condition", n);
          }(t);
        }
      }, h().createElement($h, null), " ", null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NewRule));
    })))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function wT() {
  return React.createElement("svg", {
    width: "23",
    height: "22",
    fill: "none",
    viewBox: "0 0 18 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D2D31",
    d: "M0 17.1a3.62 3.62 0 003.616 3.616h6.847a.745.745 0 100-1.49H3.616A2.128 2.128 0 011.49 17.1V4.182c0-1.172.953-2.125 2.125-2.125h10.047c1.172 0 2.126.953 2.126 2.125V13.9a.743.743 0 00.745.745.745.745 0 00.745-.745V4.182A3.62 3.62 0 0013.663.566H3.616A3.62 3.62 0 000 4.182V17.1z"
  }), React.createElement("path", {
    fill: "#2D2D31",
    d: "M12.947 9.896h-5.74a.745.745 0 100 1.49h5.74a.745.745 0 100-1.49zm0-3.588h-5.74a.745.745 0 100 1.49h5.74a.745.745 0 100-1.49zm0 7.176h-5.74a.745.745 0 100 1.49h5.74a.745.745 0 100-1.49zM4.35 6.308h-.007a.742.742 0 00-.741.745c0 .411.337.745.748.745a.745.745 0 100-1.49zm0 3.588h-.007a.742.742 0 00-.741.745c0 .411.337.745.748.745a.745.745 0 100-1.49zm0 3.588h-.007a.742.742 0 00-.741.746c0 .411.337.745.748.745a.745.745 0 100-1.49zm10.212 2.39a.74.74 0 00-.205.509v1.408h-1.409a.739.739 0 00-.507.205.742.742 0 00.507 1.285h1.409v1.408a.745.745 0 101.49 0V19.28h1.408a.745.745 0 100-1.49h-1.408v-1.408a.742.742 0 00-1.285-.508z"
  }));
}

var ET = {
  key: "addOrderNote",
  group: "actions",
  type: "action",
  package: "pro",
  category: "mint-woocommerce",
  title: "Add Order Note",
  foreground: "#7F54B3",
  background: "#f7edf7",
  description: "Add Note to WooCommerce Order",
  subtitle: function (e) {
    return "Add Note to WooCommerce Order";
  },
  icon: wT,
  edit: function () {
    var e,
      t,
      n,
      r,
      a,
      o,
      i,
      l = (0, g.useRef)(null),
      c = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          automationData: e(Lf).getAutomationData(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
        };
      }, []),
      u = c.selectedStep,
      s = c.selectedStepIndex,
      d = c.selectedStepCondition,
      m = c.selectedLogicalStepIndex,
      p = (c.errors, c.automationData);
    return c.ctaProModal, h().createElement(h().Fragment, null, h().createElement(q.PanelBody, {
      opened: !0
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings add-order-note"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(wT, null), "Add Order Note"), h().createElement("p", {
      className: "sort-description"
    }, "You can add a special instruction or a special note for your order for the customer.")), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, h().createElement("div", {
      className: "form-group single-settings data-send-method"
    }, h().createElement("label", {
      htmlFor: "email-sender-email"
    }, "Order Note Type", h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, "Select Note Type for the reference Order."))), h().createElement(q.SelectControl, {
      label: "",
      value: null !== (e = null === (t = u.settings) || void 0 === t || null === (t = t.order_note) || void 0 === t ? void 0 : t.type) && void 0 !== e ? e : "private",
      options: [{
        label: "Private Note",
        value: "private"
      }, {
        label: "Note to Customer",
        value: "customer"
      }],
      onChange: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(s, d, m, "order_note", "type", e);
      }
    })), h().createElement("div", {
      className: "form-group single-settings note-body"
    }, h().createElement("label", {
      htmlFor: "message-body"
    }, "Order Note", h().createElement("span", {
      className: "required-mark"
    }, "*"), h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, "Type the note that you want to add to the reference order. You can also use smart tags"))), h().createElement("div", {
      className: "pos-relative"
    }, h().createElement(q.TextareaControl, {
      id: "message-body",
      maxLength: 201,
      placeholder: null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.EmailPreviewTextDemo,
      value: null !== (r = null === (a = u.settings) || void 0 === a || null === (a = a.order_note) || void 0 === a ? void 0 : a.body) && void 0 !== r ? r : "",
      onChange: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(s, d, m, "order_note", "body", e);
      },
      ref: l
    }), h().createElement("div", {
      className: "pos-relative"
    }, h().createElement(Ej, {
      inputRef: l,
      inputValue: null === (o = u.settings) || void 0 === o || null === (o = o.order_note) || void 0 === o ? void 0 : o.body,
      setInputValue: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(s, d, m, "order_note", "body", e);
      },
      tooltip: null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.personalizeTooltip,
      triggerName: null == p ? void 0 : p.trigger_name,
      contentType: "subject"
    }))))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function ST() {
  return React.createElement("svg", {
    width: "23",
    height: "22",
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_9991_1754)"
  }, React.createElement("path", {
    fill: "#000",
    d: "M4.167 5c0-.46.373-.833.833-.833h2.5a.833.833 0 110 1.666H5A.833.833 0 014.167 5zm5 2.5H5a.833.833 0 100 1.667h4.167a.833.833 0 100-1.667zm0 3.333H5A.833.833 0 105 12.5h4.167a.833.833 0 100-1.667zm10.782-6.952a.833.833 0 00-.782-.548h-2.501L15.78.85a.834.834 0 00-1.562 0l-.885 2.483h-2.5a.833.833 0 00-.539 1.469l1.98 1.612-.783 2.514a.835.835 0 001.258.943l2.257-1.51 2.295 1.494a.835.835 0 001.245-.96l-.815-2.483 1.971-1.606a.834.834 0 00.246-.924v-.001zm-1.616 12.786v.416A2.92 2.92 0 0115.417 20H2.916A2.92 2.92 0 010 17.083V4.167A4.171 4.171 0 014.167 0h6.666a.833.833 0 110 1.667H4.167a2.503 2.503 0 00-2.5 2.5v12.916a1.25 1.25 0 002.5 0v-.416c0-1.379 1.121-2.5 2.5-2.5h7.5v-2.5a.833.833 0 111.666 0v2.5c1.379 0 2.5 1.121 2.5 2.5zm-1.666 0a.834.834 0 00-.834-.834H6.667a.834.834 0 00-.834.834v.416c0 .447-.101.871-.281 1.25h9.865c.689 0 1.25-.56 1.25-1.25v-.416z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_9991_1754"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0z"
  }))));
}
