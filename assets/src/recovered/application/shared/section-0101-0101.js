// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function TG() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return IG(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (IG(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, IG(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, IG(d, "constructor", u), IG(u, "constructor", c), c.displayName = "GeneratorFunction", IG(u, a, "GeneratorFunction"), IG(d), IG(d, a, "Generator"), IG(d, r, function () {
    return this;
  }), IG(d, "toString", function () {
    return "[object Generator]";
  }), (TG = function () {
    return {
      w: o,
      m
    };
  })();
}

function IG(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  IG = function (e, t, n, r) {
    function o(t, n) {
      IG(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, IG(e, t, n, r);
}

function FG(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

const NG = function (e) {
  var t,
    n,
    r,
    a,
    o,
    i,
    c,
    u,
    s,
    d,
    m = e.handleAddCourse,
    p = (0, f.Zp)(),
    v = (0, y.useSelect)(function (e) {
      return e(T.default).getDashboardLoader();
    }, []),
    _ = (0, y.useSelect)(function (e) {
      return e(T.default).getDashboardOverview();
    }, []),
    w = (0, y.useDispatch)(T.default),
    E = (0, y.useSelect)(function (e) {
      return e(T.default).getDashboardFilter();
    }, []),
    S = "YYYY/MM/DD",
    R = UH(null == _ ? void 0 : _.currency, null == _ ? void 0 : _.currency_pos, (null == _ || null === (t = _.earning) || void 0 === t ? void 0 : t.total_earning) || "0"),
    x = UH(null == _ ? void 0 : _.currency, null == _ ? void 0 : _.currency_pos, (null == _ || null === (n = _.earning) || void 0 === n ? void 0 : n.refund) || "0"),
    C = UH(null == _ ? void 0 : _.currency, null == _ ? void 0 : _.currency_pos, (null == _ || null === (r = _.earning) || void 0 === r ? void 0 : r.net_income) || "0"),
    P = [{
      label: (0, b.__)("Income", "ohmylms"),
      tooltip: (0, b.__)("Total income in the past 30 days", "ohmylms"),
      value: R,
      progression_percent: Math.abs(Number(null == _ || null === (a = _.earning) || void 0 === a || null === (a = a.growth) || void 0 === a ? void 0 : a.earning)) + "%",
      progression_text: (0, b.__)("within last", "ohmylms"),
      progression_delay: (0, b.__)("30 days", "ohmylms"),
      progression_state: Number(null == _ || null === (o = _.earning) || void 0 === o || null === (o = o.growth) || void 0 === o ? void 0 : o.earning) > -1 ? "success" : "danger",
      card_class: "card-earning",
      iconColor: "var(--omlms-primary-color)"
    }, {
      label: (0, b.__)("Refund", "ohmylms"),
      tooltip: (0, b.__)("Total refund in the past 30 days", "ohmylms"),
      value: x || "0",
      progression_percent: Math.abs(Number(null == _ || null === (i = _.earning) || void 0 === i || null === (i = i.growth) || void 0 === i ? void 0 : i.refund)) + "%",
      progression_text: "within last",
      progression_delay: "30day",
      progression_state: Number(null == _ || null === (c = _.earning) || void 0 === c || null === (c = c.growth) || void 0 === c ? void 0 : c.refund) > 0 ? "danger" : "success",
      card_class: "card-refund",
      iconColor: "#ff4955"
    }, {
      label: (0, b.__)("Net Income", "ohmylms"),
      tooltip: (0, b.__)("Total net income in the past 30 days", "ohmylms"),
      value: C || "0",
      progression_percent: Math.abs(Number(null == _ || null === (u = _.earning) || void 0 === u || null === (u = u.growth) || void 0 === u ? void 0 : u.net)) + "%",
      progression_text: "within last",
      progression_delay: "10day",
      progression_state: Number(null == _ || null === (s = _.earning) || void 0 === s || null === (s = s.growth) || void 0 === s ? void 0 : s.net) > -1 ? "success" : "danger",
      card_class: "card-net-income"
    }],
    O = function () {
      var e,
        t = (e = TG().m(function e() {
          var t, n, r, a;
          return TG().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return t = "creator-lms/v1/dashboard?filter=".concat(null == E ? void 0 : E.type), "custom" !== (null == E ? void 0 : E.type) || null != E && E.startDate || null != E && E.endDate || (t = "creator-lms/v1/dashboard?filter=custom"), "custom" === (null == E ? void 0 : E.type) && null != E && E.startDate && null != E && E.endDate && (t = "creator-lms/v1/dashboard?filter=custom&start_date=".concat(sn()(null == E || null === (n = E.startDate) || void 0 === n ? void 0 : n.date, S).format("YYYY-MM-DD"), "&end_date=").concat(sn()(null == E || null === (r = E.endDate) || void 0 === r ? void 0 : r.date, S).format("YYYY-MM-DD"))), w.setDashboardLoader(!0), e.n = 1, l()({
                  path: t
                });
              case 1:
                a = e.v, w.setDashboardOverview(a), w.setDashboardAll(a), w.setDashboardLoader(!1);
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
              FG(o, r, a, i, l, "next", e);
            }
            function l(e) {
              FG(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
  return (0, g.useEffect)(function () {
    O();
  }, [E]), h().createElement(I.CardWP, {
    variant: "secondary",
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingX: 7.5,
    paddingY: 6
  }, h().createElement(I.FlexWP, {
    gap: 4,
    align: "stretch",
    className: "omlms-overview-cards-wrapper"
  }, h().createElement(I.FlexItemWP, {
    style: {
      flex: "9"
    },
    className: "omlms-overview-left-cards"
  }, h().createElement(I.FlexWP, {
    direction: "column",
    align: "space-between",
    justify: "space-between"
  }, h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 6
  }, h().createElement(I.FlexWP, {
    wrap: !0,
    gap: 4
  }, h().createElement(I.FlexWP, {
    align: "center",
    justify: "space-between",
    gap: 3
  }, h().createElement(I.HeadingWP, {
    level: 3,
    size: "16px"
  }, (0, b.__)("Earnings", "ohmylms")), h().createElement(D.A, {
    title: (0, b.__)("View Earnings Report", "ohmylms"),
    variant: "link",
    onClick: function () {
      p("/earnings-report");
    },
    icon: h().createElement(kf, null),
    iconPosition: "right"
  }, (0, b.__)("Earning Report"))), h().createElement(mG, {
    dashboardCardData: P,
    dataLoading: v
  })))), h().createElement(wG, {
    data: _,
    dataLoading: v
  }))), h().createElement(I.FlexItemWP, {
    style: {
      flex: "4"
    },
    className: "omlms-overview-right-cards"
  }, h().createElement(MG, {
    data: null == _ ? void 0 : _.top_course,
    totalCourses: null == _ ? void 0 : _.total_course,
    dataLoading: v,
    handleAddCourse: m
  }))), h().createElement(I.SpacerWP, {
    marginBottom: 4
  }), h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 6
  }, h().createElement(I.FlexWP, {
    align: "center",
    justify: "space-between",
    gap: 4
  }, h().createElement(I.HeadingWP, {
    level: 3,
    size: "16px"
  }, (0, b.__)("Recent Published Courses ", "ohmylms"), !v && h().createElement(I.TextWP, {
    as: "span",
    variant: "muted",
    size: "16px",
    weight: "400"
  }, "(", null == _ || null === (d = _.recent_courses) || void 0 === d ? void 0 : d.length, ")")), h().createElement(D.A, {
    variant: "primary",
    size: "md",
    onClick: function () {
      p("/courses");
    }
  }, (0, b.__)("View All Courses", "ohmylms"))), h().createElement(I.SpacerWP, {
    marginBottom: 4
  }), h().createElement(_G, {
    popularCourses: function (e) {
      return e.sort(function (e, t) {
        return (null == t ? void 0 : t.total_sales_count) - (null == e ? void 0 : e.total_sales_count);
      });
    }((null == _ ? void 0 : _.recent_courses) || []),
    dataLoading: v,
    currency: _.currency,
    currency_pos: _.currency_pos,
    handleAddCourse: m
  })))));
};

var DG = ["isOpen", "onClose", "onAction", "modalPosition", "cancelBtnText", "actionBtnText", "loading", "supportScorm", "jsonImportEnabled"];

function WG() {
  return WG = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, WG.apply(null, arguments);
}

function zG(e, t) {
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
      if ("string" == typeof e) return BG(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? BG(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function BG(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var LG = function (e) {
  var t = e.isOpen,
    n = e.onClose,
    r = e.onAction,
    a = (e.modalPosition, e.cancelBtnText),
    o = void 0 === a ? (0, b.__)("Cancel", "ohmylms") : a,
    i = e.actionBtnText,
    l = void 0 === i ? (0, b.__)("Import", "ohmylms") : i,
    c = e.loading,
    u = void 0 !== c && c,
    s = e.supportScorm,
    d = void 0 !== s && s,
    m = e.jsonImportEnabled,
    p = void 0 === m || m,
    f = function (e, t) {
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
    }(e, DG),
    v = zG((0, g.useState)(null), 2),
    y = v[0],
    _ = v[1],
    w = zG((0, g.useState)(""), 2),
    E = w[0],
    S = w[1],
    R = zG((0, g.useState)(!0), 2),
    x = R[0],
    C = R[1],
    P = zG((0, g.useState)(!1), 2),
    O = P[0],
    k = P[1],
    j = zG((0, g.useState)(!1), 2),
    A = j[0],
    M = j[1],
    T = zG((0, g.useState)(p ? "json" : "scorm"), 2),
    F = T[0],
    N = T[1];
  if (!t) return null;
  var D = function (e) {
      var t = e.target.files[0];
      if (!t) return C(!1), k(!1), S(""), void _(null);
      var n = !1;
      "json" === F ? n = "application/json" === t.type : "scorm" === F && (n = ["application/zip", "application/x-zip-compressed", "multipart/x-zip"].includes(t.type) || t.name.toLowerCase().endsWith(".zip")), n ? (S(t.name), C(!0), k(!0), _(t)) : (C(!1), k(!1), S(""), _(null));
    },
    W = function (e) {
      ("json" !== e || p) && (N(e), _(null), S(""), C(!0), k(!1));
    };
  return h().createElement(h().Fragment, null, t && h().createElement(I.ModalWP, WG({
    title: (0, b.__)("Course Import", "ohmylms"),
    onRequestClose: n,
    size: "medium"
  }, f), d && h().createElement(I.CardWP, {
    isBorderless: !0,
    style: {
      margin: "0 0 20px"
    }
  }, h().createElement(I.TextWP, {
    weight: "500",
    style: {
      marginBottom: "12px"
    }
  }, (0, b.__)("Select Import Type", "ohmylms")), h().createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, h().createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      opacity: p ? 1 : .45,
      cursor: p ? "pointer" : "not-allowed"
    }
  }, h().createElement("input", {
    type: "radio",
    value: "json",
    checked: "json" === F,
    disabled: !p,
    onChange: function () {
      return W("json");
    },
    style: {
      cursor: p ? "pointer" : "not-allowed"
    }
  }), h().createElement("span", null, (0, b.__)("Import from JSON (OhMyLMS Format)", "ohmylms"), !p && h().createElement("span", {
    style: {
      marginLeft: "6px",
      fontSize: "11px",
      background: "#6e42d3",
      color: "#fff",
      borderRadius: "3px",
      padding: "1px 6px",
      fontWeight: "600"
    }
  }, (0, b.__)("Pro", "ohmylms")))), h().createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer"
    }
  }, h().createElement("input", {
    type: "radio",
    value: "scorm",
    checked: "scorm" === F,
    onChange: function () {
      return W("scorm");
    },
    style: {
      cursor: "pointer"
    }
  }), h().createElement("span", null, (0, b.__)("Import from SCORM Package", "ohmylms"))))), h().createElement(I.CardWP, {
    isBorderless: !0,
    style: {
      margin: "0 0 20px"
    }
  }, h().createElement(I.FlexWP, {
    align: "center",
    justify: "center",
    direction: "column",
    gap: "4",
    onDrop: function (e) {
      e.preventDefault(), M(!1);
      var t = e.dataTransfer.files;
      if (t.length > 0) {
        var n = t[0];
        D({
          target: {
            files: [n]
          }
        });
      }
    },
    onDragOver: function (e) {
      e.preventDefault(), M(!0);
    },
    onDragLeave: function () {
      M(!1);
    },
    style: {
      border: A ? "2px dashed #6E42D3" : "2px dashed #e1e1e1",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: A ? "#f9f5ff" : "#f0f0f173",
      transition: "all 0.2s ease-in-out",
      minHeight: "120px"
    }
  }, h().createElement(I.FormFileUploadWP, {
    label: "json" === F ? (0, b.__)("Upload JSON file", "ohmylms") : (0, b.__)("Upload SCORM ZIP file", "ohmylms"),
    onChange: D,
    accept: "json" === F ? "application/json" : ".zip",
    style: {
      border: "1px solid transparent",
      backgroundColor: "#6e42d32b"
    }
  }), E && h().createElement(I.TextWP, {
    align: "center",
    style: {
      color: "#333"
    }
  }, (0, b.__)("Uploaded:", "ohmylms"), " ", h().createElement("strong", null, E)), !x && O && h().createElement(I.TextWP, {
    align: "center",
    style: {
      color: "red"
    }
  }, "❌ ", "json" === F ? (0, b.__)("Invalid file format. Please upload a valid JSON file.", "ohmylms") : (0, b.__)("Invalid file format. Please upload a valid ZIP file containing a SCORM package.", "ohmylms")), !O && h().createElement(I.TextWP, {
    align: "center",
    style: {
      fontSize: "14px",
      color: "#666"
    }
  }, "json" === F ? h().createElement(h().Fragment, null, (0, b.__)("Drag & drop a JSON file here or", "ohmylms"), h().createElement("br", null), (0, b.__)("use the upload button.", "ohmylms")) : h().createElement(h().Fragment, null, (0, b.__)("Drag & drop a SCORM ZIP package here or", "ohmylms"), h().createElement("br", null), (0, b.__)("use the upload button.", "ohmylms"), h().createElement("br", null), h().createElement("span", {
    style: {
      fontSize: "12px",
      color: "#999"
    }
  }, (0, b.__)("(SCORM 1.2 and SCORM 2004 supported)", "ohmylms")))))), h().createElement(I.FlexWP, {
    align: "center",
    justify: "end",
    gap: "2"
  }, h().createElement(I.ButtonWP, {
    onClick: n,
    variant: "secondary",
    disabled: u
  }, o), h().createElement(I.ButtonWP, {
    onClick: function () {
      return r(y, F);
    },
    disabled: !O || u,
    isBusy: u,
    variant: "primary"
  }, l))));
};

const VG = (0, g.memo)(LG);

function HG(e, t) {
  var n = document.querySelector("#adminmenu");
  Array.from(n.getElementsByClassName("current")).forEach(function (e) {
    e.classList.remove("current");
  }), Array.from(n.querySelectorAll(".wp-has-current-submenu")).forEach(function (e) {
    e.classList.remove("wp-has-current-submenu"), e.classList.remove("wp-menu-open"), e.classList.remove("selected"), e.classList.add("wp-not-current-submenu"), e.classList.add("menu-top");
  });
  var r = "/" === t ? "admin.php?page=creator-lms" : "admin.php?page=creator-lms#/" + t,
    a = "/" === t ? 'li > a[href$="'.concat(r, '"], li > a[href*="').concat(r, '?"]') : 'li > a[href*="'.concat(r, '"]'),
    o = n.querySelectorAll(a);
  if (Array.from(o).forEach(function (e) {
    e.parentElement.classList.add("current");
  }), e) {
    var i = n.querySelector("#toplevel_page_creator-lms");
    i && (i.classList.remove("wp-not-current-submenu"), i.classList.add("wp-has-current-submenu"), i.classList.add("wp-menu-open"), i.classList.add("current"));
  }
  document.querySelector("#wpwrap").classList.remove("wp-responsive-open");
}

var GG = n(39706),
  UG = n(99166),
  qG = function (e) {
    var t = e.title,
      n = void 0 === t ? (0, b.__)("All Courses", "ohmylms") : t,
      r = e.description,
      a = e.showAddButton,
      o = void 0 !== a && a,
      i = e.addButtonConfig,
      l = void 0 === i ? {
        label: (0, b.__)("Add Course", "ohmylms"),
        onClick: function () {}
      } : i,
      c = e.children,
      u = void 0 === c ? null : c,
      s = e.paddingY,
      d = void 0 === s ? 6.5 : s;
    return React.createElement(React.Fragment, null, React.createElement(UG.A, {
      paddingY: d,
      marginBottom: 0
    }, React.createElement(I.FlexWP, {
      align: "center",
      justify: "space-between"
    }, React.createElement(I.FlexItemWP, null, React.createElement(I.HeadingWP, {
      level: "1",
      color: "#000D25",
      size: "20px"
    }, n), r && React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
      marginBottom: 1
    }), React.createElement(I.TextWP, {
      size: "14px"
    }, r))), React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
      align: "center",
      justify: "end",
      gap: "2"
    }, u, o && React.createElement(lf, l))))));
  };

const YG = (0, g.memo)(qG);

var QG = n(24295),
  ZG = function () {
    return React.createElement("svg", {
      fill: "none",
      width: "52",
      height: "52",
      viewBox: "0 0 52 52",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("rect", {
      width: "52",
      height: "52",
      fill: "#fff",
      rx: "26"
    }), React.createElement("path", {
      fill: "#6E42D3",
      d: "M36.063 32.798a7.223 7.223 0 011.627 1.097c.483.433.893.916 1.23 1.449.337.532.602 1.11.793 1.733A6.51 6.51 0 0140 39h-1.75c0-.713-.137-1.386-.41-2.018a5.215 5.215 0 00-1.121-1.652 5.42 5.42 0 00-1.682-1.124A4.918 4.918 0 0033 33.8c-.73 0-1.408.135-2.037.406s-1.185.641-1.668 1.11a5.066 5.066 0 00-1.135 1.666A5.089 5.089 0 0027.75 39H26c0-.659.091-1.3.273-1.923.183-.623.447-1.2.793-1.733a7.251 7.251 0 012.872-2.546 5.157 5.157 0 01-1.6-1.828 5.156 5.156 0 01-.588-2.37c0-.713.137-1.386.41-2.018a5.215 5.215 0 011.121-1.652 5.464 5.464 0 011.668-1.124A4.894 4.894 0 0133 23.4a5.27 5.27 0 013.705 1.517 5.36 5.36 0 011.135 1.665 4.79 4.79 0 01.41 2.018c0 .849-.191 1.638-.574 2.37a5.108 5.108 0 01-1.614 1.828zM33 32.067c.483 0 .934-.09 1.353-.271.42-.18.794-.429 1.122-.745a3.24 3.24 0 00.752-1.097c.173-.415.264-.867.273-1.354 0-.479-.091-.925-.273-1.34a3.69 3.69 0 00-.752-1.111 3.272 3.272 0 00-1.108-.745 3.762 3.762 0 00-1.367-.27 3.4 3.4 0 00-1.354.27c-.419.18-.793.429-1.12.745a3.24 3.24 0 00-.753 1.097A3.666 3.666 0 0029.5 28.6c0 .478.091.925.273 1.34.183.416.433.786.752 1.111.32.325.689.573 1.108.745.42.171.875.262 1.367.27zm-7 1.083a9.553 9.553 0 00-.793 1.043c-.237.36-.447.749-.629 1.164a4.95 4.95 0 00-1.75-1.15 5.598 5.598 0 00-2.078-.407H15.5V16.467h-1.75v19.066h10.76a6.01 6.01 0 00-.315.853c-.082.29-.15.583-.205.88H12V14.734h3.5V13h5.25a7.31 7.31 0 012.31.366 6.96 6.96 0 012.065 1.097 6.815 6.815 0 012.05-1.097A7.367 7.367 0 0129.5 13h5.25v1.733h3.5V23.4a7.785 7.785 0 00-1.75-1.287v-5.646h-1.75v4.997a6.014 6.014 0 00-.875-.176 7.117 7.117 0 00-.875-.055v-6.5h-3.5c-.638 0-1.258.109-1.86.325a5.187 5.187 0 00-1.64.962v17.13zm-1.75-.176V16.02a5.32 5.32 0 00-1.64-.948 5.689 5.689 0 00-1.86-.339h-3.5v17.334h3.5a7.217 7.217 0 013.5.907z"
    }));
  },
  $G = function () {
    return React.createElement("svg", {
      fill: "none",
      width: "52",
      height: "52",
      viewBox: "0 0 52 52",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("rect", {
      width: "52",
      height: "52",
      fill: "#fff",
      rx: "26"
    }), React.createElement("path", {
      fill: "#6E42D3",
      d: "M12.593 15.694c0-.23.126-.507.466-.755s.847-.426 1.443-.426h22.996c.596 0 1.104.178 1.443.426.34.248.466.525.466.755v13.531c0 .23-.126.507-.466.756-.34.248-.847.426-1.443.426H14.502c-.596 0-1.104-.178-1.443-.426-.34-.249-.466-.525-.466-.756v-13.53zM11 29.225c0 .862.48 1.574 1.119 2.042.64.468 1.485.733 2.383.733h22.996c.898 0 1.743-.265 2.383-.733.64-.468 1.119-1.18 1.119-2.041V15.694c0-.862-.48-1.574-1.119-2.041-.64-.468-1.485-.733-2.383-.733H14.502c-.898 0-1.743.265-2.383.733-.64.467-1.119 1.18-1.119 2.041v13.531z"
    }), React.createElement("path", {
      fill: "#6E42D3",
      d: "M23.502 17.296c.223.02.439.09.631.205l6.272 3.624.006.004c.195.115.36.273.485.46l.05.083.045.086a1.487 1.487 0 01-.579 1.93l-6.27 3.721h-.001a1.486 1.486 0 01-2.257-1.42v-7.204a1.485 1.485 0 01.757-1.304l.088-.046c.21-.1.44-.15.674-.145l.1.006zm-.025 8.655l5.968-3.54-5.968-3.45v6.99zm14.635 9.344a.796.796 0 010 1.593H14.068a.796.796 0 010-1.593h24.044z"
    }), React.createElement("path", {
      fill: "#6E42D3",
      d: "M22.25 36.267a2.812 2.812 0 11-5.625 0 2.812 2.812 0 015.625 0z"
    }));
  },
  KG = function (e) {
    var t = e.setCourseType,
      n = (0, L.useFeatureAccess)("cohort");
    return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary",
      padding: "20px 64px 64px",
      fullHeight: !0
    }, React.createElement(I.FlexWP, {
      align: "flex-start",
      justify: "center",
      direction: "column",
      gap: 13
    }, React.createElement(I.HeadingWP, {
      level: 3,
      size: 30,
      weight: 600
    }, (0, b.__)("What type of course would you like to create?", "ohmylms")), React.createElement(I.FlexWP, {
      gap: 2.5
    }, React.createElement(I.ButtonWP, {
      onClick: function () {
        return t("self-paced");
      },
      className: "omlms-course-type-btn omlms-manual-course"
    }, React.createElement(I.FlexWP, {
      gap: 2,
      justify: "flex-start",
      align: "center"
    }, React.createElement(ZG, null), React.createElement(I.HeadingWP, {
      level: 4,
      size: 16
    }, (0, b.__)("Self-Paced Course", "ohmylms"))), React.createElement(I.SpacerWP, {
      marginBottom: 3
    }), React.createElement(I.TextWP, {
      as: "p",
      color: "#7A8B9A",
      size: 13,
      lineHeight: "1.7em"
    }, (0, b.__)("Students learn at their own pace with unlimited access to course materials.", "ohmylms"))), React.createElement(I.ButtonWP, {
      onClick: function () {
        return t("cohort-based");
      },
      className: "omlms-course-type-btn omlms-cohort-course",
      disabled: !n
    }, React.createElement(I.FlexWP, {
      gap: 2,
      justify: "flex-start",
      align: "center"
    }, React.createElement($G, null), React.createElement(I.HeadingWP, {
      level: 4,
      size: 16
    }, (0, b.__)("Cohort-Based Course", "ohmylms"))), React.createElement(I.SpacerWP, {
      marginBottom: 3
    }), React.createElement(I.TextWP, {
      as: "p",
      color: "#7A8B9A",
      size: 13,
      lineHeight: "1.7em"
    }, (0, b.__)("Scheduled, group-based learning with live sessions and community interaction.", "ohmylms")))))));
  };

const JG = (0, g.memo)(KG);

function XG(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
