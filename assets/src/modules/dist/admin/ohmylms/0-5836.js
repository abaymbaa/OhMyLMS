// Reconstructed Webpack factory 5836; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    $: () => r
  });
  var r = function (e) {
    var t, n, r, a, o, i;
    if (null == e || null === (t = e.settings) || void 0 === t || !t.type) return {
      isValid: !0,
      errors: {}
    };
    var l = !0,
      c = {};
    if (!e || 0 === Object.keys(e).length) return {
      isValid: !1,
      errors: {}
    };
    null !== (n = e.name) && void 0 !== n && n.trim() || (l = !1, c.name = !0), function (e) {
      return !isNaN(e) && !isNaN(parseFloat(e));
    }(null == e || null === (r = e.settings) || void 0 === r || null === (r = r.score) || void 0 === r ? void 0 : r.value) || (l = !1, c.score = !0);
    if (e.settings.type === 'fill-in-the-blank' && /\{([^{}<>]*\S[^{}<>]*)\}/u.test(e.name || '')) {
      return { isValid: l, errors: c };
    }
    var u = (null == e ? void 0 : e.questions) || [];
    if (["multiple-choice", "single-choice", "true-false", "fill-in-the-blank"].includes(null == e || null === (a = e.settings) || void 0 === a ? void 0 : a.type)) {
      u.some(function (e) {
        return null == e ? void 0 : e.is_correct;
      }) || (l = !1, c.not_select = !0);
      var s = u.map(function (e, t) {
        var n;
        return null != e && null !== (n = e.answer) && void 0 !== n && n.trim() ? null : t;
      }).filter(function (e) {
        return null !== e;
      });
      s.length > 0 && (l = !1, c.answers_empty = s);
    } else ["reorder", "matching"].includes(null == e || null === (o = e.settings) || void 0 === o ? void 0 : o.type) ? u.some(function (e) {
      var t;
      return null == e || null === (t = e.answer) || void 0 === t ? void 0 : t.trim();
    }) || (l = !1, c.answers_empty = !0) : "matching" === (null == e || null === (i = e.settings) || void 0 === i ? void 0 : i.type) && (u.some(function (e) {
      var t;
      return null == e || null === (t = e.matching_data) || void 0 === t || null === (t = t.label) || void 0 === t ? void 0 : t.trim();
    }) || (l = !1, c.answers_empty = !0));
    return {
      isValid: l,
      errors: c
    };
  };
});
