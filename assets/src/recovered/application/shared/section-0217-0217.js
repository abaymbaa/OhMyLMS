// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function Sne(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Sne = function (e, t, n, r) {
    function o(t, n) {
      Sne(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Sne(e, t, n, r);
}

function Rne(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function xne(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Rne(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Rne(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function Cne(e) {
  return function (e) {
    if (Array.isArray(e)) return One(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || Pne(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Pne(e, t) {
  if (e) {
    if ("string" == typeof e) return One(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? One(e, t) : void 0;
  }
}

function One(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var kne = function (e) {
  var t,
    n,
    r,
    a,
    o = e.onTabChange,
    i = e.onWizardSkip,
    l = (0, y.useDispatch)(T.default),
    c = (0, y.useSelect)(function (e) {
      return e(T.default).getSetupWizardData();
    }, []),
    u = (0, y.useSelect)(function (e) {
      return e(T.default).getCurrencySettings();
    }, []),
    s = (0, y.useSelect)(function (e) {
      return e(T.default).getDesignSettings();
    }, []),
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
      }(e, t) || Pne(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    p = d[0],
    f = d[1],
    v = [].concat(Cne(null !== (t = window) && void 0 !== t && null !== (t = t.creator_lms_params) && void 0 !== t && t.is_tutor_lms_active ? [{
      label: (0, b.__)("Tutor LMS", "ohmylms"),
      value: "tutorLMS"
    }] : []), Cne(null !== (n = window) && void 0 !== n && null !== (n = n.creator_lms_params) && void 0 !== n && n.is_learndash_lms_active ? [{
      label: (0, b.__)("LearnDash", "ohmylms"),
      value: "learnDash"
    }] : []), Cne(null !== (r = window) && void 0 !== r && null !== (r = r.creator_lms_params) && void 0 !== r && r.is_learnpress_active ? [{
      label: (0, b.__)("LearnPress", "ohmylms"),
      value: "learnPress"
    }] : []), Cne(null !== (a = window) && void 0 !== a && null !== (a = a.creator_lms_params) && void 0 !== a && a.is_masterstudy_active ? [{
      label: (0, b.__)("MasterStudy LMS", "ohmylms"),
      value: "masterStudy"
    }] : [])),
    h = v.length > 0,
    _ = function () {
      var e = xne(Ene().m(function e() {
        var t, n, r;
        return Ene().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (c.certificate) {
                e.n = 1;
                break;
              }
              return e.a(2, null);
            case 1:
              if (e.p = 1, t = hB.find(function (e) {
                return e.id === c.certificate;
              })) {
                e.n = 2;
                break;
              }
              return e.a(2, null);
            case 2:
              return e.n = 3, m({
                path: "/creator-lms/v1/certificates/",
                method: "POST",
                data: {
                  name: "Certificate Template ".concat(c.certificate),
                  status: "publish",
                  contents: t.contents,
                  template_thumbnail: t.image_src
                }
              });
            case 3:
              return n = e.v, e.a(2, (null == n ? void 0 : n.id) || null);
            case 4:
              return e.p = 4, r = e.v, console.error("Error creating certificate:", r), e.a(2, null);
          }
        }, e, null, [[1, 4]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    w = function () {
      var e = xne(Ene().m(function e() {
        var t, n, r, a, o, i, d, m, p, f, v, g, h, y, b, w;
        return Ene().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, e.n = 1, _();
            case 1:
              return y = e.v, b = {
                optin: {
                  creatorlms_allow_tracking: null != c && c.isOptEnabled ? "yes" : "no"
                },
                language: null !== (t = c.language) && void 0 !== t ? t : "en_US",
                certificate: c.certificate,
                certificate_id: y,
                niche: c.niche ? [c.niche] : [],
                level: c.level,
                design: {
                  creator_lms_archive_page_layout: null !== (n = c.archive_page_layout) && void 0 !== n ? n : null === (r = s.creator_lms_archive_page_layout) || void 0 === r ? void 0 : r.value,
                  creator_lms_columns_per_row: c.courses_per_row || (null === (a = s.creator_lms_columns_per_row) || void 0 === a ? void 0 : a.value) || 4,
                  creator_lms_courses_per_page: c.courses_per_page || (null === (o = s.creator_lms_courses_per_page) || void 0 === o ? void 0 : o.value) || 10
                },
                currency: {
                  creator_lms_currency: null !== (i = c.currency) && void 0 !== i ? i : null == u || null === (d = u.creator_lms_currency) || void 0 === d ? void 0 : d.value,
                  creator_lms_currency_pos: (null == u || null === (m = u.creator_lms_currency_pos) || void 0 === m ? void 0 : m.value) || "left",
                  creator_lms_price_thousand_sep: (null == u || null === (p = u.creator_lms_price_thousand_sep) || void 0 === p ? void 0 : p.value) || ",",
                  creator_lms_price_decimal_sep: (null == u || null === (f = u.creator_lms_price_decimal_sep) || void 0 === f ? void 0 : f.value) || ".",
                  creator_lms_price_num_decimals: (null == u || null === (v = u.creator_lms_price_num_decimals) || void 0 === v ? void 0 : v.value) || "2"
                },
                contact: {
                  email: null != c && c.isOptEnabled ? null === (g = window.creator_lms_params) || void 0 === g ? void 0 : g.admin_email : "",
                  name: null != c && c.isOptEnabled ? null === (h = window.creator_lms_params) || void 0 === h ? void 0 : h.admin_name : ""
                },
                wizard_data: c
              }, e.n = 2, l.saveSetup(b);
            case 2:
              return e.n = 3, S(null == c ? void 0 : c.niche);
            case 3:
              y && l.setSetupWizardData({
                certificate_id: y
              }), e.n = 5;
              break;
            case 4:
              e.p = 4, w = e.v, console.error("Error saving setup wizard data:", w);
            case 5:
              return e.a(2);
          }
        }, e, null, [[0, 4]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    E = function () {
      "beginner" === (null == c ? void 0 : c.level) ? o("wizard-preferences") : "intermediate" === (null == c ? void 0 : c.level) ? o("wizard-completion") : null != c && c.migrate_courses ? (h && 1 === v.length && l.setSetupWizardData({
        selectedPlatform: v[0].value,
        skipPlatformSelection: !0
      }), o("wizard-creation")) : o("wizard-completion");
    },
    S = function () {
      var e = xne(Ene().m(function e(t) {
        var n, r, a, o;
        return Ene().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (t && "others" !== t && une[t]) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, r = une[t].data, e.n = 2, m({
                path: "/creator-lms/v1/setup-wizard/import-course",
                method: "POST",
                data: r,
                headers: {
                  nonce: window.creator_lms_params.setup_wizard_nonce
                }
              });
            case 2:
              null != (a = e.v) && null !== (n = a.course_ids) && void 0 !== n && n.length && l.setSetupWizardData({
                imported_course_ids: a.course_ids
              }), e.n = 4;
              break;
            case 3:
              e.p = 3, o = e.v, console.error("Error importing sample course:", o);
            case 4:
              return e.a(2);
          }
        }, e, null, [[1, 3]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    R = function () {
      var e = xne(Ene().m(function e() {
        return Ene().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!p) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              if ("intermediate" !== (null == c ? void 0 : c.level) && ("experienced" !== (null == c ? void 0 : c.level) || null != c && c.migrate_courses && h)) {
                e.n = 3;
                break;
              }
              return f(!0), e.n = 2, w();
            case 2:
              f(!1);
            case 3:
              E();
            case 4:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    x = function () {
      var e = xne(Ene().m(function e() {
        var t, n, r, a, o, i, d, m, p, f, v, g, h, y, b, w;
        return Ene().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, e.n = 1, _();
            case 1:
              return y = e.v, b = {
                optin: {
                  creatorlms_allow_tracking: null != c && c.isOptEnabled ? "yes" : "no"
                },
                language: null !== (t = c.language) && void 0 !== t ? t : "en_US",
                certificate: c.certificate,
                certificate_id: y,
                level: c.level,
                design: {
                  creator_lms_archive_page_layout: null !== (n = c.archive_page_layout) && void 0 !== n ? n : null === (r = s.creator_lms_archive_page_layout) || void 0 === r ? void 0 : r.value,
                  creator_lms_columns_per_row: c.courses_per_row || (null === (a = s.creator_lms_columns_per_row) || void 0 === a ? void 0 : a.value) || 4,
                  creator_lms_courses_per_page: c.courses_per_page || (null === (o = s.creator_lms_courses_per_page) || void 0 === o ? void 0 : o.value) || 10
                },
                currency: {
                  creator_lms_currency: null !== (i = c.currency) && void 0 !== i ? i : null == u || null === (d = u.creator_lms_currency) || void 0 === d ? void 0 : d.value,
                  creator_lms_currency_pos: (null == u || null === (m = u.creator_lms_currency_pos) || void 0 === m ? void 0 : m.value) || "left",
                  creator_lms_price_thousand_sep: (null == u || null === (p = u.creator_lms_price_thousand_sep) || void 0 === p ? void 0 : p.value) || ",",
                  creator_lms_price_decimal_sep: (null == u || null === (f = u.creator_lms_price_decimal_sep) || void 0 === f ? void 0 : f.value) || ".",
                  creator_lms_price_num_decimals: (null == u || null === (v = u.creator_lms_price_num_decimals) || void 0 === v ? void 0 : v.value) || "2"
                },
                contact: {
                  email: null != c && c.isOptEnabled ? null === (g = window.creator_lms_params) || void 0 === g ? void 0 : g.admin_email : "",
                  name: null != c && c.isOptEnabled ? null === (h = window.creator_lms_params) || void 0 === h ? void 0 : h.admin_name : ""
                },
                wizard_data: c
              }, e.n = 2, l.saveSetup(b);
            case 2:
              y && l.setSetupWizardData({
                certificate_id: y
              }), e.n = 4;
              break;
            case 3:
              e.p = 3, w = e.v, console.error("Error saving setup wizard data:", w);
            case 4:
              return e.a(2);
          }
        }, e, null, [[0, 3]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    C = [{
      label: (0, b.__)("Digital Marketing & Growth", "ohmylms"),
      value: "digital-marketing-growth"
    }, {
      label: (0, b.__)("Tech Skills", "ohmylms"),
      value: "tech-skills"
    }, {
      label: (0, b.__)("Creator Economy", "ohmylms"),
      value: "creator-economy"
    }, {
      label: (0, b.__)("Others", "ohmylms"),
      value: "others"
    }],
    P = [{
      label: h ? (0, b.__)("Yes, migrate my content", "ohmylms") : (0, b.__)("Yes, import a course", "ohmylms"),
      id: !0
    }, {
      label: (0, b.__)("No, start fresh", "ohmylms"),
      id: !1
    }];
  return React.createElement(React.Fragment, null, React.createElement(Gte, {
    level: null == c ? void 0 : c.level,
    currentStep: "experienced" == (null == c ? void 0 : c.level) || "intermediate" == (null == c ? void 0 : c.level) ? 1 : 0,
    isShowIndicator: !0,
    onSkip: function () {
      return null == i ? void 0 : i("niche");
    }
  }), React.createElement(I.ContainerWP, null, React.createElement("div", {
    className: "omlms-setup-wizard-level-selection-wrapper omlms-setup-wizard-card-wrapper"
  }, React.createElement("div", {
    className: "omlms-setup-wizard__container"
  }, React.createElement("div", {
    className: "omlms-setup-wizard__header"
  }, React.createElement(I.HeadingWP, {
    as: "h2",
    color: "#000d25",
    size: "24",
    align: "center",
    weight: "600"
  }, (0, b.__)("Your journey starts here!", "ohmylms")), React.createElement(I.TextWP, {
    as: "p",
    size: "18",
    color: "#687784",
    align: "center",
    weight: "400",
    style: {
      maxWidth: "400px",
      margin: "auto"
    }
  }, (0, b.__)("Tell us what you want to achieve first. We'll guide you step by step", "ohmylms"))), React.createElement(I.FlexWP, {
    direction: "column",
    gap: 6,
    style: {
      minWidth: "780px"
    }
  }, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    gap: 3,
    direction: "column"
  }, React.createElement(X0.A, {
    as: "h3",
    size: "18",
    color: "#000D25",
    weight: "600"
  }, (0, b.__)("What's your course niche?", "ohmylms")), React.createElement(wne.A, {
    selected: (null == c ? void 0 : c.niche) || "",
    onChange: function (e) {
      return l.setSetupWizardData({
        niche: e
      });
    },
    options: C,
    className: "omlms-setup-wizard-niche-options"
  }), React.createElement(I.TextWP, {
    as: "p",
    size: "12",
    weight: "400",
    color: "#687784"
  }, (0, b.__)("Don't overthink it - you can change this anytime.", "ohmylms"))))), "experienced" == (null == c ? void 0 : c.level) && h && React.createElement(I.CardWP, {
    isBorderless: !0,
    style: {
      width: "768px"
    }
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    gap: 3,
    direction: "column"
  }, React.createElement(X0.A, {
    as: "h3",
    size: "18",
    color: "#000D25",
    weight: "600"
  }, function () {
    if (h) {
      var e,
        t = v.map(function (e) {
          return e.label;
        });
      return e = 1 === t.length ? t[0] : 2 === t.length ? t.join(" or ") : t.slice(0, -1).join(", ") + ", or " + t[t.length - 1], (0, b.__)("Do you want to migrate your courses from ".concat(e, "?"), "ohmylms");
    }
    return (0, b.__)("Do you want to import a course?", "ohmylms");
  }()), React.createElement(I.FlexWP, {
    flexWrap: "wrap",
    gap: 3,
    align: "start",
    justify: "start"
  }, P.map(function (e, t) {
    return React.createElement(_ne, {
      key: t,
      checked: e.id === (null == c ? void 0 : c.migrate_courses),
      onChange: function () {
        return l.setSetupWizardData({
          migrate_courses: e.id
        });
      },
      label: e.label,
      id: e.id
    });
  })), React.createElement(I.TextWP, {
    as: "p",
    size: "12",
    weight: "400",
    color: void 0 === c.migrate_courses ? "#687784" : "#6E42D3"
  }, c.migrate_courses ? (0, b.__)("Nothing will be imported without your approval.", "ohmylms") : !1 === c.migrate_courses ? h ? (0, b.__)("You can always migrate later if you change your mind.", "ohmylms") : (0, b.__)("You can always import later if you change your mind.", "ohmylms") : (0, b.__)("This is completely optional — you can start fresh if you like.", "ohmylms")))))))), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    marginTop: 6
  }, React.createElement(I.FlexWP, {
    items: "center",
    justify: "between",
    gap: 4,
    style: {
      maxWidth: "846px",
      justifyContent: "space-between",
      margin: "0 auto"
    }
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: function () {
      "beginner" === (null == c ? void 0 : c.level) ? o("wizard-level-selection") : o("wizard-preferences");
    }
  }, (0, b.__)("Back", "ohmylms")), React.createElement(I.FlexWP, {
    items: "center",
    justify: "end",
    gap: 6
  }, React.createElement(I.ButtonWP, {
    variant: "tertiary",
    onClick: function () {
      l.setSetupWizardData({
        niche: null
      }), x(), E();
    },
    disabled: p
  }, (0, b.__)("Skip this step", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: R,
    isBusy: p
  }, (0, b.__)("Continue", "ohmylms")))))));
};

const jne = (0, g.memo)(kne);

function Ane() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Mne(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Mne(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Mne(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Mne(d, "constructor", u), Mne(u, "constructor", c), c.displayName = "GeneratorFunction", Mne(u, a, "GeneratorFunction"), Mne(d), Mne(d, a, "Generator"), Mne(d, r, function () {
    return this;
  }), Mne(d, "toString", function () {
    return "[object Generator]";
  }), (Ane = function () {
    return {
      w: o,
      m
    };
  })();
}

function Mne(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Mne = function (e, t, n, r) {
    function o(t, n) {
      Mne(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Mne(e, t, n, r);
}

function Tne(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
