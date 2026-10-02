// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var qI = function (e, t) {
    return t.filter(function (t) {
      var n, r;
      return null == t || !t.title || (null == t || null === (n = t.title) || void 0 === n || null === (n = n.toLowerCase()) || void 0 === n ? void 0 : n.includes(null == e || null === (r = e.trim()) || void 0 === r ? void 0 : r.toLowerCase()));
    });
  },
  YI = (0, p.forwardRef)(function (e, t) {
    e.onInsert;
    var n,
      r,
      a = GI((0, p.useState)("mailmint"), 2),
      o = a[0],
      i = a[1],
      l = (0, y.useSelect)(function (e) {
        return {
          steps: e(Lf).getSteps(),
          type: e(Lf).getInserterPopover().type,
          automationData: e(Lf).getAutomationData(),
          selectedStep: e(Lf).getSelectedStep(),
          inserterPopover: e(Lf).getInserterPopover(),
          emailConditions: e(Lf).getEmailConditions(),
          ctaProModalDisplay: e(Lf).getCtaProModalDisplay(),
          ctaProModalIcon: e(Lf).getCtaProModalIcon(),
          ctaProModalTitle: e(Lf).getCtaProModalTitle(),
          ctaProModalText: e(Lf).getCtaProModalText(),
          ctaProModalLink: e(Lf).getCtaProModalLink(),
          ctaProModalFeature: e(Lf).getCtaProModalFeature()
        };
      }, []),
      c = l.steps,
      u = l.type,
      s = l.automationData,
      d = (l.selectedStep, l.inserterPopover),
      m = (l.ctaProModalDisplay, l.ctaProModalIcon, l.ctaProModalTitle, l.ctaProModalText, l.ctaProModalLink, l.ctaProModalFeature, (0, y.useDispatch)(Lf)),
      f = m.setInserterPopover,
      v = m.selectStep,
      h = m.setAutomationTriggerName,
      _ = m.openSidebar,
      w = m.setMaybeSave,
      E = m.closeSidebar,
      S = m.setCtaProModal,
      R = m.setAutomationName,
      x = (0, y.useDispatch)(Lf),
      C = x.addStep,
      P = x.addLogicalStep,
      O = GI((0, p.useState)(null), 2),
      k = O[0],
      j = O[1],
      A = GI((0, p.useState)(""), 2),
      M = A[0],
      T = A[1],
      I = (0, p.useMemo)(function () {
        return "trigger" === u ? [{
          type: "trigger",
          title: (0, b._x)("Triggers", "automation steps", "mrm"),
          label: (0, b._x)("Triggers", "automation steps", "mrm"),
          items: c.filter(function (e) {
            return "triggers" === e.group;
          })
        }] : [{
          type: "actions",
          title: (0, b._x)("Actions", "automation steps", "mrm"),
          label: (0, b._x)("Actions", "automation steps", "mrm"),
          items: c.filter(function (e) {
            return "actions" === e.group;
          })
        }, {
          type: "logical",
          title: (0, b._x)("Logical", "automation steps", "mrm"),
          label: (0, b._x)("Logical", "automation steps", "mrm"),
          items: c.filter(function (e) {
            return "logical" === e.group;
          })
        }];
      }, [c, u]),
      F = (0, p.useCallback)(function (e) {
        j(e);
      }, [j]),
      N = (0, p.useRef)(),
      D = ["wc_order_created", "edd_complete_purchase", "wc_order_completed", "wc_abandoned_cart", "wc_review_received", "wc_price_dropped", "wcs_subscription_created", "wcs_subscription_trial_end", "wcw_user_adds_product"],
      W = (0, p.useMemo)(function () {
        return I.map(function (e) {
          return VI(VI({}, e), {}, {
            items: qI(M, e.items)
          });
        });
      }, [M, I]),
      z = null === (n = window.MRM_Vars) || void 0 === n ? void 0 : n.time_format,
      B = null === (r = window.MRM_Vars) || void 0 === r ? void 0 : r.gmt_offset,
      L = new Date(),
      V = new Date(L.getTime() + 60 * B * 60 * 1e3).toUTCString(),
      H = new Date(V).toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour12: "H:i" !== z,
        timeZone: "UTC"
      }),
      G = (0, p.useCallback)(function (e) {
        var t,
          n,
          r,
          a,
          o,
          i,
          l,
          c,
          m,
          p,
          g,
          y,
          x,
          O,
          k = {
            step_id: (Math.random() + 1).toString(36).substring(7),
            key: e.key,
            type: e.type,
            settings: {},
            next_step_id: {},
            popover_type: u
          };
        "logical" === e.type && "condition" === e.key && (k = {
          step_id: (Math.random() + 1).toString(36).substring(7),
          key: e.key,
          type: e.type,
          settings: {},
          popover_type: u,
          next_step_id: {},
          logical_next_step_id: {
            yes: "",
            no: ""
          },
          node_data: {
            yes: [],
            no: []
          }
        }), w(!1), "action" === e.type && "delay" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            delay_settings: {
              delay: 1,
              unit: "minutes"
            }
          })
        })), "action" === e.type && "specificTimeDelay" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            specific_delay_settings: {
              time: H
            }
          })
        })), "action" == e.type && "sendMail" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            message_data: {
              subject: (0, b.__)("Welcome email from mint", "mrm"),
              sender_email: null === (i = window.MRM_Vars) || void 0 === i || null === (i = i.email_settings) || void 0 === i ? void 0 : i.from_email,
              sender_name: null === (l = window.MRM_Vars) || void 0 === l || null === (l = l.email_settings) || void 0 === l ? void 0 : l.from_name,
              reply_name: null === (c = window.MRM_Vars) || void 0 === c || null === (c = c.email_settings) || void 0 === c ? void 0 : c.reply_name,
              reply_email: null === (m = window.MRM_Vars) || void 0 === m || null === (m = m.email_settings) || void 0 === m ? void 0 : m.reply_email,
              email_preview_text: "",
              body: "",
              json_body: "",
              make_transactional: !1
            }
          })
        })), "action" == e.type && "sendMailNotification" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            notification_email: {
              subject: (0, b.__)("Welcome email from mint", "mrm"),
              from_email: null === (p = window.MRM_Vars) || void 0 === p || null === (p = p.email_settings) || void 0 === p ? void 0 : p.from_email,
              from_name: null === (g = window.MRM_Vars) || void 0 === g || null === (g = g.email_settings) || void 0 === g ? void 0 : g.from_name,
              preview_text: "",
              body: "",
              json_body: "",
              recipients: []
            }
          })
        })), "action" == e.type && "addTag" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            tag_settings: {
              tags: []
            }
          })
        })), "action" == e.type && "removeTag" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            tag_settings: {
              tags: []
            }
          })
        })), "action" == e.type && "sequence" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            sequence_settings: {
              id: "",
              title: ""
            }
          })
        })), "trigger" == e.type && "wc_order_status_changed" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            status_settings: {
              status: ""
            }
          })
        })), "trigger" == e.type && "edd_update_payment_status" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            status_settings: {
              status: ""
            }
          })
        })), "trigger" == e.type && "edd_recurring_update_subscription" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            status_settings: {
              status: ""
            }
          })
        })), "trigger" == e.type && "mint_list_applied" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            list_applied: {
              group: [],
              type: "selected"
            }
          })
        })), "trigger" == e.type && "mint_list_removed" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            list_removed: {
              group: [],
              type: "selected"
            }
          })
        })), "trigger" == e.type && "mint_tag_applied" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            tag_applied: {
              group: [],
              type: "selected"
            }
          })
        })), "trigger" == e.type && "mint_tag_removed" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            tag_removed: {
              group: [],
              type: "selected"
            }
          })
        })), "trigger" == e.type && "mint_anniversary_reminder" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            anniversary: {
              attribute: {
                action: "",
                param: "",
                name: "",
                condition_label: "",
                condition_value: "",
                value: ""
              },
              time_to_check: null === (y = window) || void 0 === y || null === (y = y.MRM_Vars) || void 0 === y ? void 0 : y.local_time
            }
          })
        })), "trigger" == e.type && "tutor_enrol_status_change" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            status_settings: {
              status: ""
            }
          })
        })), "trigger" == e.type && "wp_post_publish" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            post_settings: {
              criteria: "any",
              lists: [],
              segments: [],
              tags: [],
              post_tags: [],
              post_categories: [],
              post_authors: [],
              post_types: [{
                label: "Posts",
                value: "post"
              }]
            }
          })
        })), "trigger" == e.type && "bricks_form_submit" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            bricks_form_settings: {
              form_id: "",
              mapping: [],
              status: "subscribed"
            }
          })
        })), "trigger" == e.type && "fluentform_submission_inserted" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            fluentform_settings: {
              form_id: "",
              mapping: [],
              status: "pending"
            }
          })
        })), "trigger" == e.type && "fluentbooking_new_booking" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            fluentbooking_settings: {
              calenders: ""
            }
          })
        })), "trigger" == e.type && "fluentbooking_cancelled" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            fluentbooking_settings: {
              calenders: ""
            }
          })
        })), "trigger" == e.type && "fluentbooking_completed" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            fluentbooking_settings: {
              calenders: ""
            }
          })
        })), "trigger" == e.type && "fluentbooking_rescheduled" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            fluentbooking_settings: {
              calenders: ""
            }
          })
        })), "trigger" == e.type && "gform_after_submission" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            gform_settings: {
              form_id: "",
              mapping: [],
              status: "pending"
            }
          })
        })), "trigger" == e.type && "jetform_after_submit" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            jetform_settings: {
              form_id: "",
              mapping: [],
              status: "pending"
            }
          })
        })), "trigger" == e.type && "wpcf7_submit" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            contact_form_settings: {
              form_id: "",
              mapping: [],
              status: "pending"
            }
          })
        })), "trigger" == e.type && "wpforms_submission_inserted" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            wpforms_settings: {
              form_id: "",
              mapping: [],
              status: "pending"
            }
          })
        })), "trigger" == e.type && "mint_clicks_a_link" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            link_click_settings: {
              campaign: [],
              urls: [],
              reactivate: !1
            }
          })
        })), "trigger" === e.type && D.includes(e.key) && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            product_settings: {
              option_type: "choose-all",
              products: [],
              category: []
            }
          })
        })), "trigger" === e.type && "wcs_subscription_status_changed" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            product_settings: {
              option_type: "choose-all",
              products: [],
              category: [],
              status_from: "wc-any",
              status_to: "wc-any"
            }
          })
        })), "trigger" !== e.type || "wcs_subscription_before_renewal" !== e.key && "wcs_subscription_before_end" !== e.key || (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            product_settings: {
              option_type: "choose-all",
              products: [],
              category: [],
              time_to_check: null === (x = window) || void 0 === x || null === (x = x.MRM_Vars) || void 0 === x ? void 0 : x.local_time,
              days_before: 7
            }
          })
        })), "trigger" === e.type && "wcm_membership_status_changed" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            membership_settings: {
              status_from: "any",
              status_to: "any",
              plans: []
            }
          })
        })), "action" == e.type && "createUser" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            contact_status_settings: {
              status: ""
            }
          })
        })), "action" == e.type && "addNoteAndActivity" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            note_and_activity_settings: {
              note_type: "",
              note_title: "",
              note_description: ""
            }
          })
        })), "action" == e.type && "changeContactStatus" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            change_contact_status_settings: {
              status: ""
            }
          })
        })), "action" == e.type && "createWordPressUser" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            create_wordpress_user_settings: {
              role: "",
              custom_pass: "",
              custom_username: "",
              notification_mail: !1,
              auto_pass: !0
            }
          })
        })), "action" == e.type && "updateWPUserMeta" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            update_settings: {
              meta_properties: [{
                metaKey: "",
                metaValue: ""
              }]
            }
          })
        })), "action" == e.type && "updateContactFields" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            update_contact_fields: {
              field_properties: [{
                key: "",
                value: ""
              }],
              is_blank: !0
            }
          })
        })), "action" == e.type && "changeUserRole" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            change_role_settings: {
              role: "",
              replace_user_role: !0
            }
          })
        })), "action" == e.type && "addList" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            list_settings: {
              lists: []
            }
          })
        })), "action" == e.type && "removeList" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            list_settings: {
              lists: []
            }
          })
        })), "action" == e.type && "webHookOutgoing" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            message_data: {
              method: "post",
              remote_url: "",
              data_format: "json",
              body_request: "raw",
              body_request_data: [{
                body_key: "",
                body_value: ""
              }],
              header_request: "no_header",
              header_request_data: [{
                header_key: "",
                header_value: ""
              }]
            }
          })
        })), "logical" == e.type && "condition" === e.key && (k = VI(VI({}, k), {}, {
          settings: {
            rules: {
              condition: [[{
                action: "",
                param: "",
                name: "",
                condition_label: "",
                condition_value: "",
                value: "",
                segmentValue: []
              }]]
            }
          }
        })), "action" == e.type && "twilioSendMessage" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            twilio_data: {
              phone_number: "{{contact.phone_number}}",
              message_body: "",
              method: "sms",
              from_number: null === (O = window.MRM_Vars) || void 0 === O || null === (O = O.twilio_settings) || void 0 === O ? void 0 : O.from_number
            }
          })
        })), "action" == e.type && "addOrderNote" === e.key && (k = VI(VI({}, k), {}, {
          settings: VI(VI({}, k.settings), {}, {
            order_note: {
              body: "",
              type: "private"
            }
          })
        }));
        var j,
          A = React.createElement(yI.A, null);
        "pro" !== e.package || null !== (t = window) && void 0 !== t && null !== (t = t.MRM_Vars) && void 0 !== t && t.is_mailmint_pro_license_active ? ("condition" === u ? P(k) : C(k), _(Hf), f(void 0)) : (E(), S(!0, A, null === (j = window) || void 0 === j || null === (j = j.MRM_Vars) || void 0 === j || null === (j = j.mint_trans) || void 0 === j ? void 0 : j.UnlockWithPremium, (0, b.__)("Get Instant Access To Exclusive Features With The Pro Version.", "mrm"), Ey.AutomationOpenAILink, ""), f(void 0));
        var M = null !== (n = null == s ? void 0 : s.steps) && void 0 !== n ? n : [],
          T = null == d || null === (r = d.anchor) || void 0 === r ? void 0 : r.getAttribute("data-previous-step-id"),
          I = null == d || null === (a = d.anchor) || void 0 === a ? void 0 : a.getAttribute("data-condition-type"),
          F = null == d || null === (o = d.anchor) || void 0 === o ? void 0 : o.getAttribute("data-condition-step-id");
        if ("" !== T) {
          var N = M[parseInt(T) + 1];
          if (v(N, parseInt(T) + 1), null !== I) {
            var W = M[parseInt(T)];
            if ("condition" === W.key) if (null === F) {
              var z = W.node_data[I][0];
              v(z, parseInt(T), I, 0);
            } else {
              var B = W.node_data[I][parseInt(F) + 1];
              v(B, parseInt(T), I, parseInt(F) + 1);
            }
          }
        } else if ("trigger" === e.type) {
          var L = M[0];
          v(L, 0);
        } else {
          var V = M[M.length - 1];
          v(V, M.length - 1);
        }
        "trigger" === e.type && (h(e.key), R(null == e ? void 0 : e.title));
      }, []),
      U = (0, p.useRef)(null),
      Y = GI((0, p.useState)(!1), 2),
      Q = Y[0],
      Z = Y[1],
      $ = GI((0, p.useState)(0), 2),
      K = $[0],
      J = $[1],
      X = function (e) {
        i(e);
        var t = U.current;
        J(t.scrollLeft);
      },
      ee = function () {
        var e = U.current,
          t = e.scrollLeft += 200;
        e.scrollLeft += 200, t >= 0 ? document.querySelector(".left-arrow-container").classList.add("active") : document.querySelector(".left-arrow-container").classList.remove("active"), e.clientWidth + e.scrollLeft + 200 >= e.scrollWidth ? document.querySelector(".right-arrow-container").classList.remove("active") : document.querySelector(".right-arrow-container").classList.add("active");
      },
      te = function () {
        var e = U.current,
          t = e.scrollLeft -= 200;
        e.scrollLeft -= 200, t > 0 ? document.querySelector(".left-arrow-container").classList.add("active") : document.querySelector(".left-arrow-container").classList.remove("active"), document.querySelector(".right-arrow-container").classList.add("active");
      };
    (0, g.useEffect)(function () {
      var e = U.current;
      if (e) {
        var t = e.clientWidth;
        e.scrollWidth - t > 0 && Z(!0);
      }
    }, [U, K]), (0, g.useEffect)(function () {
      var e = U.current;
      e && (e.scrollLeft = K, e.offsetWidth === e.scrollWidth - K && document.querySelector(".right-arrow-container").classList.remove("active"), K > 0 ? document.querySelector(".left-arrow-container").classList.add("active") : document.querySelector(".left-arrow-container").classList.remove("active"));
    }, [o]);
    var ne,
      re,
      ae,
      oe = function () {
        var e = U.current,
          t = e.offsetWidth,
          n = e.scrollWidth;
        e.scrollLeft > 0 ? document.querySelector(".left-arrow-container").classList.add("active") : document.querySelector(".left-arrow-container").classList.remove("active"), t === n - e.scrollLeft ? document.querySelector(".right-arrow-container").classList.remove("active") : document.querySelector(".right-arrow-container").classList.add("active");
      };
    function ie(e) {
      ae = !0, ne = e.pageX - U.current.offsetLeft, re = U.current.scrollLeft;
    }
    function le() {
      ae = !1;
    }
    function ce() {
      ae = !1;
    }
    function ue(e) {
      if (ae) {
        e.preventDefault();
        var t = e.pageX - U.current.offsetLeft - ne;
        U.current.scrollLeft = re - t;
      }
    }
    var se = {
        mailmint: 0,
        "mint-wordpress": 0,
        "mint-woocommerce": 0,
        "mint-woocommerce-subscription": 0,
        "mint-woocommerce-membership": 0,
        "mint-woocommerce-wishlist": 0,
        edd: 0,
        "mint-tutor-lms": 0,
        "mint-fluent-form": 0,
        "mint-fluent-booking": 0,
        "mint-wp-forms": 0,
        "mint-contact-form": 0,
        "mint-learndash": 0,
        "mint-memberpress": 0,
        "mint-gravity-form": 0,
        "mint-jet-form": 0,
        "mint-twilio": 0,
        "mint-send-data": 0,
        "mint-lifterlms": 0,
        "mint-bricks-form": 0
      },
      de = {
        mailmint: 0,
        "mint-wordpress": 0,
        "mint-woocommerce": 0,
        "mint-woocommerce-subscription": 0,
        "mint-woocommerce-membership": 0,
        "mint-woocommerce-wishlist": 0,
        edd: 0,
        "mint-tutor-lms": 0,
        "mint-fluent-form": 0,
        "mint-fluent-booking": 0,
        "mint-wp-forms": 0,
        "mint-contact-form": 0,
        "mint-learndash": 0,
        "mint-memberpress": 0,
        "mint-gravity-form": 0,
        "mint-jet-form": 0,
        "mint-twilio": 0,
        "mint-send-data": 0,
        "mint-lifterlms": 0,
        "mint-bricks-form": 0
      },
      me = (0, p.useMemo)(function () {
        var e = W.find(function (e) {
          return "actions" === (null == e ? void 0 : e.type);
        });
        return e && null != e && e.items && e.items.forEach(function (e) {
          se.hasOwnProperty(e.category) && se[e.category]++;
        }), se;
      }, []),
      pe = (0, p.useMemo)(function () {
        var e = W.find(function (e) {
          return "trigger" === (null == e ? void 0 : e.type);
        });
        return e && null != e && e.items && e.items.forEach(function (e) {
          de.hasOwnProperty(e.category) && de[e.category]++;
        }), de;
      }, []),
      fe = (0, p.useMemo)(function () {
        var e = [],
          t = [];
        return W[0].items.forEach(function (n) {
          if (!Object.keys(se).includes(n.category)) {
            var r = n.category,
              a = n.category_label || n.category;
            t.includes(r) || (t.push(r), e.push({
              category: r,
              category_label: a
            }));
          }
        }), e;
      }, []);
    return (0, g.useEffect)(function () {
      if (U.current) {
        var e = U.current.querySelector("li");
        if (e) {
          var t = e.getAttribute("data-trigger-type");
          t && i(t);
        }
      }
    }, []), React.createElement("div", {
      className: "block-editor-inserter__menu"
    }, React.createElement("div", {
      className: "block-editor-inserter__main-area"
    }, React.createElement("div", {
      className: "block-editor-inserter__content"
    }, React.createElement(q.SearchControl, {
      className: "block-editor-inserter__search",
      onChange: function (e) {
        k && j(null), T(e);
      },
      value: M,
      label: (0, b.__)("Search for automation steps", "mrm"),
      placeholder: (0, b.__)("Search", "mrm"),
      ref: N,
      __nextHasNoMarginBottom: !0
    }), React.createElement("div", {
      className: "block-editor-inserter__block-list"
    }, React.createElement(SI, null, W.map(function (e) {
      var t, n, r, a, i, l, c, s, m, p, f, v, g, h, y, b, _;
      return e.items.length > 0 && React.createElement("div", {
        key: e.type,
        className: "".concat("logical" == e.type && "condition" == u ? "" : e.type, "-group")
      }, React.createElement("div", {
        className: "block-editor-inserter__panel-content"
      }, React.createElement("div", {
        className: "scrollbar-tab-container"
      }, ("trigger" == e.type || "actions" == e.type) && React.createElement(React.Fragment, null, React.createElement("div", {
        className: "left-arrow-container"
      }, React.createElement("span", {
        className: "right-arrow-gradient left-arrow-gradient"
      }), React.createElement("div", {
        className: "left-arrow",
        onClick: te
      }, React.createElement(_I, null))), React.createElement("ul", {
        className: "trigger-tab-nav",
        ref: U,
        onScroll: oe,
        onMouseDown: ie,
        onMouseUp: le,
        onMouseLeave: ce,
        onMouseMove: ue
      }, ("trigger" == e.type && 0 != pe.mailmint || "actions" == e.type && 0 != me.mailmint) && React.createElement("li", {
        className: "mailmint" === o ? "active" : "",
        onClick: function () {
          return X("mailmint");
        },
        "data-trigger-type": "mailmint",
        "data-step-group": e.type
      }, "Mail Mint"), "trigger" !== e.type && "condition" !== (null == d ? void 0 : d.type) && React.createElement("li", {
        className: "logical" === o ? "active" : "",
        onClick: function () {
          return X("logical");
        },
        "data-trigger-type": "logical"
      }, "Condition"), ("trigger" == e.type && 0 != pe["mint-wordpress"] || 0 != me["mint-wordpress"]) && React.createElement("li", {
        className: "mint-wordpress" === o ? "active" : "",
        onClick: function () {
          return X("mint-wordpress");
        },
        "data-trigger-type": "mint-wordpress"
      }, "WordPress"), (null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.is_wc_active) && ("trigger" == e.type && 0 != pe["mint-woocommerce"] || 0 != me["mint-woocommerce"]) && React.createElement("li", {
        className: "mint-woocommerce" === o ? "active" : "",
        onClick: function () {
          return X("mint-woocommerce");
        },
        "data-trigger-type": "mint-woocommerce"
      }, "WooCommerce"), (null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n ? void 0 : n.is_wcs_active) && ("trigger" == e.type && 0 != pe["mint-woocommerce-subscription"] || 0 != me["mint-woocommerce-subscription"]) && React.createElement("li", {
        className: "mint-woocommerce-subscription" === o ? "active" : "",
        onClick: function () {
          return X("mint-woocommerce-subscription");
        },
        "data-trigger-type": "mint-woocommerce-subscription"
      }, "WooCommerce Subscriptions"), (null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r ? void 0 : r.is_wcm_active) && ("trigger" == e.type && 0 != pe["mint-woocommerce-membership"] || 0 != me["mint-woocommerce-membership"]) && React.createElement("li", {
        className: "mint-woocommerce-membership" === o ? "active" : "",
        onClick: function () {
          return X("mint-woocommerce-membership");
        },
        "data-trigger-type": "mint-woocommerce-membership"
      }, "WooCommerce Memberships"), (null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a ? void 0 : a.is_wcw_active) && ("trigger" == e.type && 0 != pe["mint-woocommerce-wishlist"] || 0 != me["mint-woocommerce-wishlist"]) && React.createElement("li", {
        className: "mint-woocommerce-wishlist" === o ? "active" : "",
        onClick: function () {
          return X("mint-woocommerce-wishlist");
        },
        "data-trigger-type": "mint-woocommerce-wishlist"
      }, "WooCommerce Wishlists"), (null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i ? void 0 : i.is_edd_active) && ("trigger" == e.type && 0 != pe.edd || 0 != me.edd) && React.createElement("li", {
        className: "edd" === o ? "active" : "",
        onClick: function () {
          return X("edd");
        },
        "data-trigger-type": "edd"
      }, "Easy Digital Downloads"), (null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l ? void 0 : l.is_tutor_active) && ("trigger" == e.type && 0 != pe["mint-tutor-lms"] || 0 != me["mint-tutor-lms"]) && React.createElement("li", {
        className: "mint-tutor-lms" === o ? "active" : "",
        onClick: function () {
          return X("mint-tutor-lms");
        },
        "data-trigger-type": "mint-tutor-lms"
      }, "Tutor LMS"), (null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c ? void 0 : c.is_gform_active) && ("trigger" == e.type && 0 != pe["mint-gravity-form"] || 0 != me["mint-gravity-form"]) && React.createElement("li", {
        className: "mint-gravity-form" === o ? "active" : "",
        onClick: function () {
          return X("mint-gravity-form");
        },
        "data-trigger-type": "mint-gravity-form"
      }, "Gravity Form"), (null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s ? void 0 : s.is_jetform_active) && ("trigger" == e.type && 0 != pe["mint-jet-form"] || 0 != me["mint-jet-form"]) && React.createElement("li", {
        className: "mint-jet-form" === o ? "active" : "",
        onClick: function () {
          return X("mint-jet-form");
        },
        "data-trigger-type": "mint-jet-form"
      }, "JetFormBuilder"), (null === (m = window) || void 0 === m || null === (m = m.MRM_Vars) || void 0 === m ? void 0 : m.is_fluentform_active) && ("trigger" == e.type && 0 != pe["mint-fluent-form"] || 0 != me["mint-fluent-form"]) && React.createElement("li", {
        className: "mint-fluent-form" === o ? "active" : "",
        onClick: function () {
          return X("mint-fluent-form");
        },
        "data-trigger-type": "mint-fluent-form"
      }, "Fluent Forms"), (null === (p = window) || void 0 === p || null === (p = p.MRM_Vars) || void 0 === p ? void 0 : p.is_fluent_booking_active) && ("trigger" == e.type && 0 != pe["mint-fluent-booking"] || 0 != me["mint-fluent-booking"]) && React.createElement("li", {
        className: "mint-fluent-booking" === o ? "active" : "",
        onClick: function () {
          return X("mint-fluent-booking");
        },
        "data-trigger-type": "mint-fluent-booking"
      }, "Fluent Booking"), (null === (f = window) || void 0 === f || null === (f = f.MRM_Vars) || void 0 === f ? void 0 : f.is_contact_form_active) && ("trigger" == e.type && 0 != pe["mint-contact-form"] || 0 != me["mint-contact-form"]) && React.createElement("li", {
        className: "mint-contact-form" === o ? "active" : "",
        onClick: function () {
          return X("mint-contact-form");
        },
        "data-trigger-type": "mint-contact-form"
      }, "Contact Form 7"), (null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v ? void 0 : v.is_bricks_active) && ("trigger" == e.type && 0 != pe["mint-bricks-form"] || 0 != me["mint-bricks-form"]) && React.createElement("li", {
        className: "mint-bricks-form" === o ? "active" : "",
        onClick: function () {
          return X("mint-bricks-form");
        },
        "data-trigger-type": "mint-bricks-form"
      }, "Bricks"), (null === (g = window) || void 0 === g || null === (g = g.MRM_Vars) || void 0 === g ? void 0 : g.is_learndash_active) && ("trigger" == e.type && 0 != pe["mint-learndash"] || 0 != me["mint-learndash"]) && React.createElement("li", {
        className: "mint-learndash" === o ? "active" : "",
        onClick: function () {
          return X("mint-learndash");
        },
        "data-trigger-type": "mint-learndash"
      }, "LearnDash"), (null === (h = window) || void 0 === h || null === (h = h.MRM_Vars) || void 0 === h ? void 0 : h.is_memberpress_active) && ("trigger" == e.type && 0 != pe["mint-memberpress"] || 0 != me["mint-memberpress"]) && React.createElement("li", {
        className: "mint-memberpress" === o ? "active" : "",
        onClick: function () {
          return X("mint-memberpress");
        },
        "data-trigger-type": "mint-memberpress"
      }, "MemberPress"), (null === (y = window) || void 0 === y || null === (y = y.MRM_Vars) || void 0 === y ? void 0 : y.is_wp_form_active) && ("trigger" == e.type && 0 != pe["mint-wp-forms"] || 0 != me["mint-wp-forms"]) && React.createElement("li", {
        className: "mint-wp-forms" === o ? "active" : "",
        onClick: function () {
          return X("mint-wp-forms");
        },
        "data-trigger-type": "mint-wp-forms"
      }, "WPForms"), (null === (b = window.MRM_Vars) || void 0 === b || null === (b = b.twilio_settings) || void 0 === b ? void 0 : b.is_integrated) && "actions" == e.type && 0 != me["mint-twilio"] && React.createElement("li", {
        className: "mint-twilio" === o ? "active" : "",
        onClick: function () {
          return X("mint-twilio");
        },
        "data-trigger-type": "mint-twilio"
      }, "Twilio"), "actions" == e.type && 0 != me["mint-send-data"] && React.createElement("li", {
        className: "mint-send-data" === o ? "active" : "",
        onClick: function () {
          return X("mint-send-data");
        },
        "data-trigger-type": "mint-send-data"
      }, "Send Data"), (null === (_ = window) || void 0 === _ || null === (_ = _.MRM_Vars) || void 0 === _ ? void 0 : _.is_lifterlms_active) && ("trigger" == e.type && 0 != pe["mint-lifterlms"] || 0 != me["mint-lifterlms"]) && React.createElement("li", {
        className: "mint-lifterlms" === o ? "active" : "",
        onClick: function () {
          return X("mint-lifterlms");
        },
        "data-trigger-type": "mint-lifterlms"
      }, "LifterLMS"), fe.map(function (e, t) {
        return React.createElement("li", {
          key: t,
          className: o === (null == e ? void 0 : e.category) ? "active" : "",
          onClick: function () {
            return X(null == e ? void 0 : e.category);
          },
          "data-trigger-type": null == e ? void 0 : e.category
        }, null == e ? void 0 : e.category_label);
      })), React.createElement("div", {
        className: "right-arrow-container ".concat(Q ? "active" : "")
      }, React.createElement("span", {
        className: "right-arrow-gradient"
      }), React.createElement("div", {
        className: "right-arrow  arrow-active}",
        onClick: ee
      }, React.createElement(EI, null))))), React.createElement(zI, {
        items: e.items,
        onHover: F,
        onSelect: function (e) {
          return G(e);
        },
        label: e.label,
        activeCategory: o,
        type: u
      })));
    }))))));
  });
