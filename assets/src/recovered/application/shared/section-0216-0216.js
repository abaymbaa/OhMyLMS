// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function sne() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return dne(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (dne(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, dne(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, dne(d, "constructor", u), dne(u, "constructor", c), c.displayName = "GeneratorFunction", dne(u, a, "GeneratorFunction"), dne(d), dne(d, a, "Generator"), dne(d, r, function () {
    return this;
  }), dne(d, "toString", function () {
    return "[object Generator]";
  }), (sne = function () {
    return {
      w: o,
      m
    };
  })();
}

function dne(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  dne = function (e, t, n, r) {
    function o(t, n) {
      dne(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, dne(e, t, n, r);
}

function mne(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function pne(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        mne(o, r, a, i, l, "next", e);
      }
      function l(e) {
        mne(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function fne(e, t) {
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
      if ("string" == typeof e) return vne(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vne(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function vne(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var gne = function (e) {
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
    p,
    f = e.onTabChange,
    v = e.onWizardSkip,
    h = (0, y.useDispatch)(T.default),
    _ = (0, y.useSelect)(function (e) {
      return e(T.default).getSetupWizardData();
    }, []),
    w = (0, y.useSelect)(function (e) {
      return e(T.default).getCurrencySettings();
    }, []),
    E = (0, y.useSelect)(function (e) {
      return e(T.default).getDesignSettings();
    }, []),
    S = fne((0, g.useState)(!1), 2),
    R = S[0],
    x = S[1],
    C = function () {
      var e = pne(sne().m(function e() {
        var t, n, r;
        return sne().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (_.certificate) {
                e.n = 1;
                break;
              }
              return e.a(2, null);
            case 1:
              if (e.p = 1, t = hB.find(function (e) {
                return e.id === _.certificate;
              })) {
                e.n = 2;
                break;
              }
              return e.a(2, null);
            case 2:
              return e.n = 3, m({
                path: "/ohmylms/v1/certificates/",
                method: "POST",
                data: {
                  name: "Certificate Template ".concat(_.certificate),
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
    P = function () {
      var e = pne(sne().m(function e(t) {
        var n, r, a, o;
        return sne().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (t && "others" !== t && une[t]) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, r = une[t].data, e.n = 2, m({
                path: "/ohmylms/v1/setup-wizard/import-course",
                method: "POST",
                data: r,
                headers: {
                  nonce: window.ohmylms_params.setup_wizard_nonce
                }
              });
            case 2:
              null != (a = e.v) && null !== (n = a.course_ids) && void 0 !== n && n.length && h.setSetupWizardData({
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
    O = function () {
      var e = pne(sne().m(function e() {
        var t, n, r, a, o, i, l, c, u, s, d, m;
        return sne().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, e.n = 1, C();
            case 1:
              return s = e.v, d = {
                optin: {
                  ohmylms_allow_tracking: null != _ && _.isOptEnabled ? "yes" : "no"
                },
                language: null !== (t = _.language) && void 0 !== t ? t : "en_US",
                certificate: _.certificate,
                certificate_id: s,
                niche: _.niche ? [_.niche] : [],
                level: _.level,
                currency: {
                  ohmylms_currency: null !== (n = _.currency) && void 0 !== n ? n : null == w || null === (r = w.ohmylms_currency) || void 0 === r ? void 0 : r.value,
                  ohmylms_currency_pos: (null == w || null === (a = w.ohmylms_currency_pos) || void 0 === a ? void 0 : a.value) || "left",
                  ohmylms_price_thousand_sep: (null == w || null === (o = w.ohmylms_price_thousand_sep) || void 0 === o ? void 0 : o.value) || ",",
                  ohmylms_price_decimal_sep: (null == w || null === (i = w.ohmylms_price_decimal_sep) || void 0 === i ? void 0 : i.value) || ".",
                  ohmylms_price_num_decimals: (null == w || null === (l = w.ohmylms_price_num_decimals) || void 0 === l ? void 0 : l.value) || "2"
                },
                contact: {
                  email: null != _ && _.isOptEnabled ? null === (c = window.ohmylms_params) || void 0 === c ? void 0 : c.admin_email : "",
                  name: null != _ && _.isOptEnabled ? null === (u = window.ohmylms_params) || void 0 === u ? void 0 : u.admin_name : ""
                },
                wizard_data: _
              }, e.n = 2, h.saveSetup(d);
            case 2:
              return e.n = 3, P(null == _ ? void 0 : _.niche);
            case 3:
              s && h.setSetupWizardData({
                certificate_id: s
              }), e.n = 5;
              break;
            case 4:
              e.p = 4, m = e.v, console.error("Error saving setup wizard data:", m);
            case 5:
              return e.a(2);
          }
        }, e, null, [[0, 4]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    k = function () {
      var e = pne(sne().m(function e() {
        var t, n, r, a;
        return sne().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, r = {
                optin: {
                  ohmylms_allow_tracking: null != _ && _.isOptEnabled ? "yes" : "no"
                },
                niche: _.niche ? [_.niche] : [],
                level: _.level,
                contact: {
                  email: null != _ && _.isOptEnabled ? null === (t = window.ohmylms_params) || void 0 === t ? void 0 : t.admin_email : "",
                  name: null != _ && _.isOptEnabled ? null === (n = window.ohmylms_params) || void 0 === n ? void 0 : n.admin_name : ""
                },
                wizard_data: _
              }, e.n = 1, h.saveSetup(r);
            case 1:
              return e.n = 2, P(null == _ ? void 0 : _.niche);
            case 2:
              e.n = 4;
              break;
            case 3:
              e.p = 3, a = e.v, console.error("Error saving setup wizard data:", a);
            case 4:
              return e.a(2);
          }
        }, e, null, [[0, 3]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    j = function () {
      var e = pne(sne().m(function e() {
        return sne().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!R) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              if ("beginner" !== _.level) {
                e.n = 3;
                break;
              }
              return x(!0), e.n = 2, O();
            case 2:
              x(!1);
            case 3:
              F();
            case 4:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    A = function () {
      var e = pne(sne().m(function e() {
        return sne().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              return e.n = 1, h.setSetupWizardData({
                currency: void 0,
                language: void 0,
                archive_page_layout: void 0,
                courses_per_row: void 0,
                courses_per_page: void 0,
                certificate_enabled: void 0,
                certificate: void 0
              });
            case 1:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    M = function () {
      var e = pne(sne().m(function e() {
        return sne().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              return e.n = 1, A();
            case 1:
              "beginner" === _.level && k(), F();
            case 2:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    F = function () {
      "beginner" === (null == _ ? void 0 : _.level) ? f("wizard-completion") : f("wizard-niche");
    },
    N = [{
      label: (0, b.__)("English (United States)", "ohmylms"),
      value: "en_US"
    }, {
      label: (0, b.__)("Spanish (Spain)", "ohmylms"),
      value: "es_ES"
    }, {
      label: (0, b.__)("French (France)", "ohmylms"),
      value: "fr_FR"
    }, {
      label: (0, b.__)("German (Germany)", "ohmylms"),
      value: "de_DE"
    }, {
      label: (0, b.__)("Italian (Italy)", "ohmylms"),
      value: "it_IT"
    }, {
      label: (0, b.__)("Portuguese (Brazil)", "ohmylms"),
      value: "pt_BR"
    }, {
      label: (0, b.__)("Dutch (Netherlands)", "ohmylms"),
      value: "nl_NL"
    }, {
      label: (0, b.__)("Russian (Russia)", "ohmylms"),
      value: "ru_RU"
    }, {
      label: (0, b.__)("Chinese (Simplified)", "ohmylms"),
      value: "zh_CN"
    }, {
      label: (0, b.__)("Japanese (Japan)", "ohmylms"),
      value: "ja"
    }, {
      label: (0, b.__)("Korean (Korea)", "ohmylms"),
      value: "ko_KR"
    }, {
      label: (0, b.__)("Arabic (Saudi Arabia)", "ohmylms"),
      value: "ar"
    }, {
      label: (0, b.__)("Hindi (India)", "ohmylms"),
      value: "hi_IN"
    }, {
      label: (0, b.__)("Bengali (Bangladesh)", "ohmylms"),
      value: "bn_BD"
    }, {
      label: (0, b.__)("Turkish (Turkey)", "ohmylms"),
      value: "tr_TR"
    }],
    D = function () {
      var e = pne(sne().m(function e(t) {
        var n, r, a, o;
        return sne().w(function (e) {
          for (;;) if (0 === e.n) return r = Object.entries(null == w || null === (n = w.ohmylms_currency) || void 0 === n ? void 0 : n.options).map(function (e) {
            var t = fne(e, 2),
              n = t[0];
            return {
              label: t[1],
              value: n
            };
          }), a = r.filter(function (e) {
            return e.label.toLowerCase().includes(t.toLowerCase());
          }), o = a.map(function (e) {
            return {
              label: React.createElement("span", {
                dangerouslySetInnerHTML: {
                  __html: e.label
                }
              }),
              value: e.value
            };
          }), e.a(2, o);
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
  return (0, g.useEffect)(function () {
    var e;
    null != _ && _.archive_page_layout || h.setSetupWizardData({
      archive_page_layout: (null === (e = E.ohmylms_archive_page_layout) || void 0 === e ? void 0 : e.value) || "grid"
    });
  }, []), React.createElement(React.Fragment, null, React.createElement(Gte, {
    level: null == _ ? void 0 : _.level,
    currentStep: "experienced" == (null == _ ? void 0 : _.level) || "intermediate" == (null == _ ? void 0 : _.level) ? 0 : 1,
    isShowIndicator: !0,
    onSkip: function () {
      return null == v ? void 0 : v("preferences");
    }
  }), React.createElement(I.ContainerWP, null, React.createElement("div", {
    className: "ohmylms-setup-wizard-level-selection-wrapper ohmylms-setup-wizard-card-wrapper ohmylms-preference-screen-wrapper"
  }, React.createElement("div", {
    className: "ohmylms-setup-wizard__container",
    style: {
      gap: "0"
    }
  }, React.createElement("div", {
    className: "ohmylms-setup-wizard__header"
  }, React.createElement(I.HeadingWP, {
    as: "h2",
    color: "#000d25",
    size: "24",
    align: "center",
    weight: "600"
  }, (0, b.__)("Let's set your preferences", "ohmylms")), React.createElement(I.TextWP, {
    as: "p",
    size: "18",
    color: "#687784",
    align: "center",
    weight: "400",
    style: {
      maxWidth: "400px",
      margin: "auto"
    }
  }, (0, b.__)("Choose what works best for your region. We'll take care of the rest.", "ohmylms"))), React.createElement(I.CardWP, {
    isBorderless: !0,
    style: {
      width: "788px",
      margin: "56px auto 0 auto"
    }
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    direction: "column",
    gap: 6
  }, React.createElement(I.FlexWP, {
    gap: 8,
    align: "center",
    justify: "space-between"
  }, React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, React.createElement(I.FlexWP, {
    align: "center",
    gap: "1",
    justify: "flex-start"
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Language", "ohmylms"))), React.createElement(I.SpacerWP, {
    marginBottom: 1
  })), React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, React.createElement(I.SearchSelectWP, {
    placeholder: (0, b.__)("Select Language", "ohmylms"),
    onChange: function (e) {
      h.setSetupWizardData({
        language: e.value
      });
    },
    value: [N.find(function (e) {
      return e.value === ((null == _ ? void 0 : _.language) || "en_US");
    }) || N[0]],
    defaultOptions: N,
    isClearable: !1,
    isSearchable: !0,
    isMulti: !1
  }))), React.createElement(I.FlexWP, {
    gap: 8,
    align: "center",
    justify: "space-between"
  }, React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, React.createElement(I.FlexWP, {
    align: "center",
    gap: "1",
    justify: "flex-start"
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Currency Symbol", "ohmylms"))), React.createElement(I.SpacerWP, {
    marginBottom: 1
  })), React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, React.createElement(I.SearchSelectWP, {
    placeholder: (0, b.__)("Type to Select Currency", "ohmylms"),
    onChange: function (e) {
      h.setSetupWizardData({
        currency: e.value
      });
    },
    value: [{
      label: React.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: null !== (t = null == w || null === (n = w.ohmylms_currency) || void 0 === n ? void 0 : n.options[null == _ ? void 0 : _.currency]) && void 0 !== t ? t : null == w || null === (r = w.ohmylms_currency) || void 0 === r ? void 0 : r.options[null == w || null === (a = w.ohmylms_currency) || void 0 === a ? void 0 : a.value]
        }
      }),
      value: null !== (o = null == _ ? void 0 : _.currency) && void 0 !== o ? o : null == w || null === (i = w.ohmylms_currency) || void 0 === i ? void 0 : i.value
    }],
    defaultOptions: (p = null == w || null === (l = w.ohmylms_currency) || void 0 === l ? void 0 : l.options, p ? Object.entries(p).map(function (e) {
      var t = fne(e, 2),
        n = t[0],
        r = t[1];
      return {
        label: React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: r
          }
        }),
        value: n
      };
    }) : []),
    loadOptions: D,
    isClearable: !1,
    isSearchable: !0,
    isMulti: !1
  })))))), "beginner" !== _.level && React.createElement(I.CardWP, {
    isBorderless: !0,
    style: {
      width: "788px",
      margin: "24px auto 0 auto"
    }
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    direction: "column",
    gap: 6
  }, React.createElement(I.FlexWP, {
    gap: 8,
    align: "center",
    justify: "space-between"
  }, React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, React.createElement(I.FlexWP, {
    align: "center",
    gap: "1",
    justify: "flex-start"
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Archive Page Layout", "ohmylms"))), React.createElement(I.SpacerWP, {
    marginBottom: 1
  })), React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, React.createElement(I.FlexWP, {
    align: "flex-end",
    justify: "flex-end"
  }, React.createElement(I.RadioGroupWP, {
    onChange: function (e) {
      h.setSetupWizardData({
        archive_page_layout: e
      });
    },
    value: null !== (c = null == _ ? void 0 : _.archive_page_layout) && void 0 !== c ? c : null === (u = E.ohmylms_archive_page_layout) || void 0 === u ? void 0 : u.value,
    options: [{
      value: "grid",
      label: (0, b.__)("Grid View", "ohmylms")
    }, {
      value: "list",
      label: (0, b.__)("List View", "ohmylms")
    }],
    isBlock: !1
  })))), "list" !== (null == _ ? void 0 : _.archive_page_layout) && React.createElement(React.Fragment, null, React.createElement(cne, {
    onChange: function (e) {
      h.setSetupWizardData({
        courses_per_row: e
      });
    },
    defaultValue: null !== (s = null == _ ? void 0 : _.courses_per_row) && void 0 !== s ? s : null === (d = E.ohmylms_columns_per_row) || void 0 === d ? void 0 : d.value
  }))))), React.createElement(I.CardWP, {
    isBorderless: !0,
    style: {
      width: "788px",
      margin: "24px auto 0 auto"
    }
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    direction: "column",
    gap: 6
  }, React.createElement(I.FlexWP, {
    gap: 8,
    align: "center",
    justify: "space-between"
  }, React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, React.createElement(I.FlexWP, {
    align: "center",
    gap: "1",
    justify: "flex-start"
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Enable certificate", "ohmylms"))), React.createElement(I.SpacerWP, {
    marginBottom: 1
  })), React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, React.createElement(I.FlexWP, {
    align: "flex-end",
    justify: "flex-end"
  }, React.createElement(I.SwitchWP, {
    checked: "yes" === (null == _ ? void 0 : _.certificate_enabled),
    onChange: function (e) {
      var t = {
        certificate_enabled: e ? "yes" : "no"
      };
      e && !_.certificate && (t.certificate = hB[0].id), h.setSetupWizardData(t);
    }
  })))), "yes" === (null == _ ? void 0 : _.certificate_enabled) && React.createElement(ine, null)))))), React.createElement(I.SpacerWP, {
    marginBottom: 4,
    marginTop: 6,
    paddingY: 4
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
      "beginner" === (null == _ ? void 0 : _.level) ? f("wizard-niche") : f("wizard-level-selection");
    },
    disabled: R
  }, (0, b.__)("Back", "ohmylms")), React.createElement(I.FlexWP, {
    items: "center",
    justify: "end",
    gap: 6
  }, React.createElement(I.ButtonWP, {
    variant: "tertiary",
    onClick: M,
    disabled: R
  }, (0, b.__)("Skip this step", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: j,
    isBusy: R
  }, (0, b.__)("Continue", "ohmylms")))))));
};

const hne = (0, g.memo)(gne);

function yne() {
  return React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "calc(50% - 0.5px)",
      transform: "translate(-50%, -50%)",
      width: "16px",
      height: "16px"
    }
  }, React.createElement("svg", {
    style: {
      display: "block",
      width: "100%",
      height: "100%"
    },
    viewBox: "0 0 16 16",
    fill: "none"
  }, React.createElement("path", {
    d: "M4 0.5H12C13.933 0.5 15.5 2.067 15.5 4V12C15.5 13.933 13.933 15.5 12 15.5H4C2.067 15.5 0.5 13.933 0.5 12V4C0.5 2.067 2.067 0.5 4 0.5Z",
    fill: "white"
  }), React.createElement("path", {
    d: "M4 0.5H12C13.933 0.5 15.5 2.067 15.5 4V12C15.5 13.933 13.933 15.5 12 15.5H4C2.067 15.5 0.5 13.933 0.5 12V4C0.5 2.067 2.067 0.5 4 0.5Z",
    stroke: "#6E42D3"
  }), React.createElement("path", {
    d: "M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z",
    fill: "#6E42D3"
  }), React.createElement("mask", {
    id: "mask0_3024_2110",
    style: {
      maskType: "alpha"
    },
    maskUnits: "userSpaceOnUse",
    x: "2",
    y: "3",
    width: "12",
    height: "10"
  }, React.createElement("path", {
    d: "M13 4L6 11L3 8",
    stroke: "white",
    strokeWidth: "1.5"
  })), React.createElement("g", {
    mask: "url(#mask0_3024_2110)"
  }, React.createElement("rect", {
    x: "1",
    y: "3",
    width: "14",
    height: "10",
    fill: "white"
  }))));
}

function bne(e) {
  var t = e.checked,
    n = e.onChange,
    r = (e.id, {
      position: "absolute",
      inset: 0,
      border: t ? "1px solid #6e42d3" : "1px solid #7a8b9a",
      borderRadius: "4px",
      pointerEvents: "none"
    }),
    a = {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "16px",
      height: "16px",
      backgroundColor: t ? "#6e42d3" : "transparent",
      borderRadius: "4px"
    };
  return React.createElement("div", {
    className: "ohmylms-checkbox",
    style: {
      position: "relative",
      width: "16px",
      height: "16px",
      backgroundColor: "white",
      borderRadius: "4px",
      flexShrink: 0,
      cursor: "pointer"
    },
    role: "checkbox",
    "aria-checked": t,
    tabIndex: 0,
    onKeyPress: function (e) {
      "Enter" !== e.key && " " !== e.key || n();
    }
  }, React.createElement("div", {
    style: r,
    "aria-hidden": "true"
  }), React.createElement("div", {
    style: a
  }), t && React.createElement(yne, null));
}

function _ne(e) {
  var t = e.checked,
    n = e.onChange,
    r = e.label,
    a = e.id,
    o = {
      position: "absolute",
      inset: 0,
      border: t ? "1px solid #6e42d3" : "1px solid rgba(200, 210, 233, 0.5)",
      borderRadius: "8px",
      pointerEvents: "none"
    },
    i = {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      color: t ? "#000d25" : "#444d5e",
      margin: 0,
      userSelect: "none"
    };
  return React.createElement("div", {
    className: "ohmylms-checkbox-option",
    style: {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: "8px 9px",
      borderRadius: "8px",
      flexShrink: 0,
      position: "relative",
      cursor: "pointer"
    },
    onClick: n,
    role: "checkbox",
    "aria-checked": t,
    tabIndex: 0,
    onKeyPress: function (e) {
      "Enter" !== e.key && " " !== e.key || (e.preventDefault(), n());
    }
  }, React.createElement("div", {
    style: o,
    "aria-hidden": "true"
  }), React.createElement("div", {
    style: {
      borderRadius: "16px",
      flexShrink: 0,
      width: "100%",
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      padding: "8px"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, React.createElement(bne, {
    checked: t,
    id: a
  }), React.createElement("p", {
    style: i
  }, r)))));
}

var wne = n(26701);

function Ene() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Sne(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Sne(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Sne(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Sne(d, "constructor", u), Sne(u, "constructor", c), c.displayName = "GeneratorFunction", Sne(u, a, "GeneratorFunction"), Sne(d), Sne(d, a, "Generator"), Sne(d, r, function () {
    return this;
  }), Sne(d, "toString", function () {
    return "[object Generator]";
  }), (Ene = function () {
    return {
      w: o,
      m
    };
  })();
}
