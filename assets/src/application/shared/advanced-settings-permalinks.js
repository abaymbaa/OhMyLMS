// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var iJ = function (e) {
  var t,
    n,
    r,
    a,
    o,
    i,
    c,
    u,
    s = e.activeTab,
    d = e.handleSave,
    m = e.handleMigration,
    p = e.selectedCourses,
    f = e.isSaving,
    v = (0, y.useDispatch)(T.default),
    h = (0, y.useSelect)(function (e) {
      return e(T.default).getPermalinkSettings();
    }, []),
    _ = function (e, t) {
      var n;
      v.updatePermalinkSettings({
        ohmylms_permalink: {
          value: aJ(aJ({}, null == h || null === (n = h.ohmylms_permalink) || void 0 === n ? void 0 : n.value), {}, oJ({}, t, e))
        }
      });
    },
    w = function (e) {
      return String(e).toLowerCase().trim().replace(/[\s_]+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-");
    };
  return (0, g.useEffect)(function () {
    var e = function () {
      var e,
        t = (e = eJ().m(function e() {
          var t;
          return eJ().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return v.setLoadingSetting(!0), e.n = 1, l()({
                  path: "ohmylms/v1/settings/permalink"
                });
              case 1:
                t = e.v, v.setPermalinkSettings(t), v.setLoadingSetting(!1);
              case 2:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              nJ(o, r, a, i, l, "next", e);
            }
            function l(e) {
              nJ(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    e();
  }, []), React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    className: "ohmylms-full-screen-height"
  }, React.createElement(I.SpacerWP, {
    padding: 4,
    marginTop: 0,
    marginBottom: 0
  }, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    paddingY: 4,
    paddingX: 2,
    marginTop: 0,
    marginBottom: 4
  }, React.createElement(Pf, {
    title: (0, b.__)("Course Base", "ohmylms"),
    description: 'https://yoursite.com/<code style="background: #27BDFE4D; font-style: italic;">{'.concat(null == h || null === (t = h.ohmylms_permalink) || void 0 === t || null === (t = t.value) || void 0 === t ? void 0 : t.course_base, "}</code>/sample-course"),
    inputType: "text",
    value: (null == h || null === (n = h.ohmylms_permalink) || void 0 === n || null === (n = n.value) || void 0 === n ? void 0 : n.course_base) || "",
    onChange: function (e) {
      return _(w(e), "course_base");
    },
    isDescriptionHTML: !0
  }), React.createElement(I.SpacerWP, {
    paddingX: 4,
    paddingTop: 2,
    paddingBottom: 4,
    marginBottom: 0
  }, React.createElement(I.DividerWP, {
    color: "#EDF2FB"
  })), React.createElement(Pf, {
    title: (0, b.__)("Category Base", "ohmylms"),
    description: 'https://yoursite.com/courses/<code style="background: #27BDFE4D; font-style: italic;">{'.concat(null == h || null === (r = h.ohmylms_permalink) || void 0 === r || null === (r = r.value) || void 0 === r ? void 0 : r.category_base, "}</code>/sample-category/"),
    inputType: "text",
    value: (null == h || null === (a = h.ohmylms_permalink) || void 0 === a || null === (a = a.value) || void 0 === a ? void 0 : a.category_base) || "",
    onChange: function (e) {
      return _(w(e), "category_base");
    },
    isDescriptionHTML: !0
  }), React.createElement(I.SpacerWP, {
    paddingX: 4,
    paddingTop: 2,
    paddingBottom: 4,
    marginBottom: 0
  }, React.createElement(I.DividerWP, {
    color: "#EDF2FB"
  })), React.createElement(Pf, {
    title: (0, b.__)("Lesson Base", "ohmylms"),
    description: 'https://yoursite.com/courses/sample-course/<code style="background: #27BDFE4D; font-style: italic;">{'.concat(null == h || null === (o = h.ohmylms_permalink) || void 0 === o || null === (o = o.value) || void 0 === o ? void 0 : o.lesson_base, "}</code>/sample-lesson/"),
    inputType: "text",
    value: (null == h || null === (i = h.ohmylms_permalink) || void 0 === i || null === (i = i.value) || void 0 === i ? void 0 : i.lesson_base) || "",
    onChange: function (e) {
      return _(w(e), "lesson_base");
    },
    isDescriptionHTML: !0
  }), React.createElement(I.SpacerWP, {
    paddingX: 4,
    paddingTop: 2,
    paddingBottom: 4,
    marginBottom: 0
  }, React.createElement(I.DividerWP, {
    color: "#EDF2FB"
  })), React.createElement(Pf, {
    title: (0, b.__)("Quiz Base", "ohmylms"),
    description: ' https://yoursite.com/courses/sample-course/<code style="background: #27BDFE4D; font-style: italic;">{'.concat(null == h || null === (c = h.ohmylms_permalink) || void 0 === c || null === (c = c.value) || void 0 === c ? void 0 : c.quiz_base, "}</code>/sample-quiz/"),
    inputType: "text",
    value: (null == h || null === (u = h.ohmylms_permalink) || void 0 === u || null === (u = u.value) || void 0 === u ? void 0 : u.quiz_base) || "",
    onChange: function (e) {
      return _(w(e), "quiz_base");
    },
    isDescriptionHTML: !0
  }))), React.createElement(SK, {
    activeTab: s,
    handleSave: d,
    handleMigration: m,
    selectedCourses: p,
    isSaving: f
  }))));
};
const lJ = (0, g.memo)(iJ);
function cJ() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return uJ(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (uJ(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, uJ(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, uJ(d, "constructor", u), uJ(u, "constructor", c), c.displayName = "GeneratorFunction", uJ(u, a, "GeneratorFunction"), uJ(d), uJ(d, a, "Generator"), uJ(d, r, function () {
    return this;
  }), uJ(d, "toString", function () {
    return "[object Generator]";
  }), (cJ = function () {
    return {
      w: o,
      m
    };
  })();
}
function uJ(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  uJ = function (e, t, n, r) {
    function o(t, n) {
      uJ(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, uJ(e, t, n, r);
}
function sJ(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function dJ(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        sJ(o, r, a, i, l, "next", e);
      }
      function l(e) {
        sJ(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
function mJ(e, t) {
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
      if ("string" == typeof e) return pJ(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pJ(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function pJ(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var fJ = function (e) {
  var t = e.activeTab,
    n = e.handleSave,
    r = e.handleMigration,
    a = e.selectedCourses,
    o = e.isSaving,
    i = (0, y.useDispatch)(T.default),
    c = (0, z.A)(),
    u = c.openNotificationWithIcon,
    s = c.contextHolder,
    d = mJ((0, g.useState)(!1), 2),
    m = d[0],
    p = d[1],
    f = mJ((0, g.useState)(!1), 2),
    v = f[0],
    h = f[1];
  (0, g.useEffect)(function () {
    var e = function () {
      var e = dJ(cJ().m(function e() {
        var t, n;
        return cJ().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return i.setLoadingSetting(!0), e.p = 1, e.n = 2, l()({
                path: "ohmylms/v1/settings/advanced"
              });
            case 2:
              t = e.v, i.setAdvancedSettings(t), e.n = 4;
              break;
            case 3:
              e.p = 3, n = e.v, console.error(n);
            case 4:
              return e.p = 4, i.setLoadingSetting(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
    e();
  }, []);
  var _ = (0, g.useCallback)(dJ(cJ().m(function e() {
      var t, n, r, a, o, i, l;
      return cJ().w(function (e) {
        for (;;) switch (e.p = e.n) {
          case 0:
            return p(!0), e.p = 1, (r = new URLSearchParams()).append("action", "ohmylms_delete_transient_cache"), r.append("nonce", (null === (t = window.ohmylms_params) || void 0 === t ? void 0 : t.delete_cache_nonce) || ""), e.n = 2, fetch((null === (n = window.ohmylms_params) || void 0 === n ? void 0 : n.ajax_url) || "/wp-admin/admin-ajax.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              credentials: "same-origin",
              body: r.toString()
            });
          case 2:
            return a = e.v, e.n = 3, a.json();
          case 3:
            (o = e.v).success ? u("success", o.data.message) : u("error", (null === (i = o.data) || void 0 === i ? void 0 : i.message) || (0, b.__)("Failed to delete cache.", "ohmylms")), e.n = 5;
            break;
          case 4:
            e.p = 4, l = e.v, console.error(l), u("error", (0, b.__)("An error occurred. Please try again.", "ohmylms"));
          case 5:
            return e.p = 5, p(!1), e.f(5);
          case 6:
            return e.a(2);
        }
      }, e, null, [[1, 4, 5, 6]]);
    })), [u]),
    w = (0, g.useCallback)(dJ(cJ().m(function e() {
      var t, n;
      return cJ().w(function (e) {
        for (;;) switch (e.p = e.n) {
          case 0:
            return h(!0), e.p = 1, e.n = 2, l()({
              path: "/ohmylms/v1/restore-default-pages",
              method: "POST"
            });
          case 2:
            t = e.v, u("success", t.message), e.n = 4;
            break;
          case 3:
            e.p = 3, n = e.v, console.error(n), u("error", (0, b.__)("Failed to restore pages. Please try again.", "ohmylms"));
          case 4:
            return e.p = 4, h(!1), e.f(4);
          case 5:
            return e.a(2);
        }
      }, e, null, [[1, 3, 4, 5]]);
    })), [u]);
  return React.createElement(React.Fragment, null, s, React.createElement(Ea, {
    isBorderless: !0,
    variant: "secondary",
    className: "ohmylms-full-screen-height"
  }, React.createElement(I.SpacerWP, {
    padding: 4,
    marginTop: 0,
    marginBottom: 0
  }, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    marginTop: 0,
    marginBottom: 4
  }, React.createElement("div", null, React.createElement("h3", {
    style: {
      margin: "0px",
      fontSize: "16px",
      fontWeight: 600
    }
  }, (0, b.__)("Remove OhMyLMS Transient cache", "ohmylms")), React.createElement("p", {
    style: {
      marginTop: "8px",
      color: "#687784",
      fontSize: "14px"
    }
  }, (0, b.__)("Click the button below to delete all OhMyLMS transient cache. This can help resolve certain issues with cached data.", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "primary",
    danger: !0,
    onClick: _,
    loading: m,
    disabled: m
  }, m ? (0, b.__)("Deleting...", "ohmylms") : (0, b.__)("Delete Cache", "ohmylms"))), React.createElement("div", {
    style: {
      marginTop: "32px",
      paddingTop: "24px",
      borderTop: "1px solid #e0e0e0"
    }
  }, React.createElement("h3", {
    style: {
      margin: "0px",
      fontSize: "16px",
      fontWeight: 600
    }
  }, (0, b.__)("Restore Default Pages", "ohmylms")), React.createElement("p", {
    style: {
      marginTop: "8px",
      color: "#687784",
      fontSize: "14px"
    }
  }, (0, b.__)("Recreates any missing default pages (Course Archive, Checkout, Student Dashboard). Existing pages are never overwritten or duplicated.", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: w,
    loading: v,
    disabled: v
  }, v ? (0, b.__)("Restoring...", "ohmylms") : (0, b.__)("Restore Default Pages", "ohmylms"))))), React.createElement(SK, {
    activeTab: t,
    handleSave: n,
    handleMigration: r,
    selectedCourses: a,
    isSaving: o
  }))));
};
const vJ = (0, g.memo)(fJ);
var gJ = ["title", "description", "options", "defaultValue", "onChange", "radioType", "className", "headerFontSize", "spacerPadding", "gap"];
function hJ() {
  return hJ = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hJ.apply(null, arguments);
}
var yJ = function (e) {
  var t = e.title,
    n = e.description,
    r = e.options,
    a = void 0 === r ? [] : r,
    o = e.defaultValue,
    i = e.onChange,
    l = e.radioType,
    c = void 0 === l ? "default" : l,
    u = e.className,
    s = void 0 === u ? "" : u,
    d = e.headerFontSize,
    m = void 0 === d ? "18px" : d,
    p = e.spacerPadding,
    f = void 0 === p ? 4 : p,
    v = e.gap,
    g = void 0 === v ? 3 : v,
    h = function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = function (e, t) {
          if (null == e) return {};
          var n = {};
          for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
          return n;
        }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      }
      return a;
    }(e, gJ);
  return React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    padding: f,
    margin: 0
  }, React.createElement(I.FlexWP, {
    gap: g,
    justify: "space-between",
    className: "".concat(s)
  }, React.createElement(I.FlexItemWP, {
    className: "ohmylms-advanced-radio-card-info-wrapper"
  }, React.createElement("div", {
    className: "ohmylms-advanced-radio-card-info"
  }, t && React.createElement(React.Fragment, null, React.createElement(I.HeadingWP, {
    level: "4",
    color: "#000D25",
    size: m
  }, t), React.createElement(I.SpacerWP, {
    marginBottom: 2
  })), n && React.createElement(I.TextWP, {
    color: "#687784",
    size: "14px"
  }, n))), React.createElement(I.FlexItemWP, {
    className: "ohmylms-advanced-radio-card-wrapper"
  }, React.createElement(ls, hJ({
    options: a,
    defaultValue: o,
    onChange: i,
    className: "ohmylms-advanced-radio-card ".concat(c),
    radioType: c
  }, h))))));
};
const bJ = (0, g.memo)(yJ);
var _J = ["title", "isItProFeature", "level"],
  wJ = function (e) {
    true;
    var t = e.title,
      n = (e.isItProFeature, e.level),
      r = void 0 === n ? 4 : n;
    return function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = function (e, t) {
          if (null == e) return {};
          var n = {};
          for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
          return n;
        }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      }
    }(e, _J), React.createElement(React.Fragment, null, React.createElement(I.HeadingWP, {
      level: r
    }, t));
  };
const EJ = (0, g.memo)(wJ);
var SJ = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_1300_17333)"
  }, React.createElement("path", {
    fill: "#fff",
    stroke: "#fff",
    d: "M.6 5.4h4.8V.6a.6.6 0 011.2 0v4.8h4.8a.6.6 0 010 1.2H6.6v4.8a.6.6 0 01-1.2 0V6.6H.6a.6.6 0 010-1.2z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_1300_17333"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h12v12H0z",
    transform: "matrix(-1 0 0 1 12 0)"
  })))));
};
const RJ = (0, g.memo)(SJ);
function xJ(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var CJ = [{
    label: "Free Courses",
    value: "free"
  }, {
    label: "Paid Courses",
    value: "paid"
  }, {
    label: "Best Selling Courses",
    value: "best_selling"
  }, {
    label: "Top Rated Courses",
    value: "top_rated"
  }, {
    label: "Recent Courses",
    value: "recent"
  }, {
    label: "All Courses",
    value: "all"
  }],
  PJ = function (e) {
    var t = e.row,
      n = e.index,
      r = e.handleSelectRowDisplayCriteria,
      a = e.handleRowHeading,
      o = e.handleRemoveRow,
      i = e.length,
      l = function (e, t) {
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
            if ("string" == typeof e) return xJ(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xJ(e, t) : void 0;
          }
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((0, g.useState)(!1), 2),
      c = l[0],
      u = l[1];
    return React.createElement(React.Fragment, null, React.createElement(Ea, {
      isBorderless: !0,
      variant: "secondary"
    }, React.createElement(I.SpacerWP, {
      padding: 4,
      margin: 0,
      marginBottom: 4
    }, React.createElement(I.SpacerWP, {
      margin: 0,
      marginBottom: 4
    }, React.createElement(I.FlexWP, {
      justify: "space-between",
      align: "center",
      gap: 3
    }, React.createElement(I.FlexItemWP, null, React.createElement(EJ, {
      level: 5,
      title: (0, b.__)("Select  Course Display Criteria", "ohmylms")
    })), React.createElement(I.FlexItemWP, null, i > 1 && React.createElement(I.ButtonWP, {
      icon: React.createElement(We, null),
      variant: "text",
      onClick: function () {
        return u(!0);
      },
      className: "ohmylms-remove-row"
    }))), React.createElement(I.SpacerWP, {
      margin: 0,
      marginBottom: 2
    }), React.createElement(vn.A, {
      placeholder: (0, b.__)("Select Course Display Criteria", "ohmylms"),
      defaultValue: null == t ? void 0 : t.row_display_criteria,
      value: null == t ? void 0 : t.row_display_criteria,
      className: "ohmylms-global-settings-layout-config-select ohmylms-row-display-criteria",
      onChange: function (e) {
        return r(e, n);
      },
      suffixIcon: React.createElement(HU, null),
      getPopupContainer: function () {
        return document.getElementById("ohmylms-ant-group-dropdown-container");
      },
      options: CJ
    })), React.createElement(EJ, {
      level: 5,
      title: (0, b.__)("Row Heading", "ohmylms")
    }), React.createElement(I.SpacerWP, {
      margin: 0,
      marginBottom: 2
    }), React.createElement(I.InputWP, {
      placeholder: (0, b.__)("Enter Row Heading", "ohmylms"),
      className: "ohmylms-global-settings-row-heading",
      value: null == t ? void 0 : t.row_heading,
      onChange: function (e) {
        return a(e, n);
      },
      type: "text"
    }))), c && React.createElement(Ie, {
      title: (0, b.__)("Delete this row", "ohmylms"),
      description: (0, b.__)("Are you sure you want to delete this row", "ohmylms"),
      onClose: function () {
        return u(!1);
      },
      onDelete: function () {
        u(!1), o(n);
      },
      isOpen: c,
      isDelete: !0
    }));
  };
const OJ = (0, g.memo)(PJ);
function kJ(e) {
  return kJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, kJ(e);
}
function jJ(e) {
  return function (e) {
    if (Array.isArray(e)) return AJ(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return AJ(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? AJ(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function AJ(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function MJ(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function TJ(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? MJ(Object(n), !0).forEach(function (t) {
      IJ(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : MJ(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function IJ(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != kJ(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != kJ(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == kJ(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
