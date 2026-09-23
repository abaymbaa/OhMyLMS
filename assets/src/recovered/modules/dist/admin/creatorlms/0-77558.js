// Reconstructed Webpack factory 77558; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    isPro: () => c,
    isProActive: () => u,
    pricingPageLink: () => s,
    useFeatureAccess: () => l,
    useIsPro: () => i
  });
  var r,
    a = n(37562),
    o = n(86169),
    i = function () {
      return (0, a.useSelect)(function (e) {
        var t,
          n = e(o.default).getLicenseInfo(),
          r = "active" === (null == n ? void 0 : n.status),
          a = (null === (t = window) || void 0 === t || null === (t = t.creator_lms_params) || void 0 === t ? void 0 : t.is_pro_active) || !1;
        return r || a;
      }, []);
    },
    l = function (e) {
      var t = i();
      return (0, a.useSelect)(function (n) {
        try {
          if (!t) return !1;
          var r = n(o.default).getLicenseInfo(),
            a = n(o.default).getPlanFeatures();
          if (!r || !a) return !1;
          var i = (null == r ? void 0 : r.plan) || "";
          return e && "string" == typeof e ? a[i] && a[i][e] || !1 : (console.warn("useFeatureAccess: Invalid featureKey provided"), !1);
        } catch (e) {
          return console.error("useFeatureAccess: Error checking feature access", e), !1;
        }
      }, [t, e]);
    },
    c = function () {
      var e;
      return (null === (e = window) || void 0 === e || null === (e = e.creator_lms_params) || void 0 === e ? void 0 : e.is_pro_active) || !1;
    },
    u = (null === (r = window) || void 0 === r || null === (r = r.creator_lms_params) || void 0 === r ? void 0 : r.is_pro_active) || !1,
    s = "https://getwpfunnels.com/creatorlms/#pricing";
});
