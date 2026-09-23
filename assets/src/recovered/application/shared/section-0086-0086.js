// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var sW = function (e) {
  var t = e.integrationFor,
    n = e.contentId,
    r = e.onEdit,
    a = e.onDelete,
    o = e.availableCRMs,
    i = e.onAddNew,
    c = e.handleClose,
    u = e.loading,
    s = lW((0, g.useState)([]), 2),
    d = s[0],
    m = s[1],
    p = lW((0, g.useState)(!1), 2),
    f = p[0],
    v = p[1],
    h = lW((0, g.useState)(!1), 2),
    y = h[0],
    _ = h[1],
    w = lW((0, g.useState)(null), 2),
    E = w[0],
    S = w[1];
  (0, g.useEffect)(function () {
    n && o.length > 0 && R();
  }, [n, o]);
  var R = function () {
      var e = iW(JD().m(function e() {
        var r, a, i, c, u, s;
        return JD().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              v(!0), e.p = 1, r = [], a = aW(o), e.p = 2, c = JD().m(function e() {
                var a, o, c, u, s;
                return JD().w(function (e) {
                  for (;;) switch (e.p = e.n) {
                    case 0:
                      return a = i.value, e.p = 1, e.n = 2, l()({
                        path: "/creatorlms/v1/".concat(a.value, "/triggers")
                      });
                    case 2:
                      null != (o = e.v) && o.success && null != o && o.data && (c = {
                        course: ["creator_lms_course_completed", "creator_lms_manual_student_enrollment", "creator_lms_student_unenrolled"],
                        lesson: ["creator_lms_lesson_completed"],
                        quiz: ["creator_lms_quiz_submission", "creator_lms_quiz_completed"],
                        assignment: ["creator_lms_after_assignment_submitted"]
                      }[t] || [], u = o.data.filter(function (e) {
                        var r = "multiple" === e.trigger_event || c.includes(e.trigger_event),
                          a = e.content_type === t,
                          o = parseInt(e.content_id) === parseInt(n);
                        return r && a && o;
                      }).map(function (e) {
                        return nW(nW({}, e), {}, {
                          crm_type: a.value,
                          crm_label: a.label
                        });
                      }), r.push.apply(r, eW(u))), e.n = 4;
                      break;
                    case 3:
                      e.p = 3, s = e.v, console.error("Error fetching ".concat(a.value, " triggers:"), s);
                    case 4:
                      return e.a(2);
                  }
                }, e, null, [[1, 3]]);
              }), a.s();
            case 3:
              if ((i = a.n()).done) {
                e.n = 5;
                break;
              }
              return e.d(KD(c()), 4);
            case 4:
              e.n = 3;
              break;
            case 5:
              e.n = 7;
              break;
            case 6:
              e.p = 6, u = e.v, a.e(u);
            case 7:
              return e.p = 7, a.f(), e.f(7);
            case 8:
              m(r), e.n = 10;
              break;
            case 9:
              e.p = 9, s = e.v, console.error("Error fetching integrations:", s);
            case 10:
              return e.p = 10, v(!1), e.f(10);
            case 11:
              return e.a(2);
          }
        }, e, null, [[2, 6, 7, 8], [1, 9, 10, 11]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    x = function () {
      var e = iW(JD().m(function e(t) {
        return JD().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              S(t), _(!0);
            case 1:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    C = function () {
      var e = iW(JD().m(function e() {
        return JD().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (E) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.n = 2, a(E.id, E.crm_type);
            case 2:
              _(!1), S(null), R();
            case 3:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  return u || f ? React.createElement("div", {
    className: "omlms-integration-modal"
  }, React.createElement("div", {
    className: "omlms-integration-modal__header"
  }, React.createElement("div", {
    className: "omlms-integration-modal__header-left"
  }, React.createElement("h2", {
    className: "omlms-integration-modal__title"
  }, (0, b.__)("Integrations", "ohmylms"))), React.createElement(I.ButtonWP, {
    icon: React.createElement(q.Icon, {
      icon: uN.A
    }),
    variant: "tertiary",
    onClick: c,
    className: "omlms-integration-modal__close-btn"
  })), React.createElement("div", {
    className: "omlms-integration-modal__content"
  }, React.createElement(I.SkeletonWP, {
    active: !0,
    title: !1,
    rows: 8
  }))) : React.createElement("div", {
    className: "omlms-integration-modal"
  }, React.createElement("div", {
    className: "omlms-integration-modal__header"
  }, React.createElement("div", {
    className: "omlms-integration-modal__header-left"
  }, React.createElement("h2", {
    className: "omlms-integration-modal__title"
  }, (0, b.__)("Integrations", "ohmylms"))), React.createElement("div", {
    className: "omlms-integration-modal__header-right"
  }, React.createElement(I.ButtonWP, {
    icon: React.createElement(nf, null),
    variant: "primary",
    onClick: function () {
      return i();
    },
    disabled: 0 === o.length
  }, (0, b.__)("Add Integration", "ohmylms")), React.createElement(I.ButtonWP, {
    icon: React.createElement(q.Icon, {
      icon: uN.A
    }),
    variant: "tertiary",
    onClick: c
  }))), React.createElement("div", {
    className: "omlms-integration-modal__content"
  }, 0 === o.length ? React.createElement(I.CardWP, {
    variant: "secondary",
    isBorderless: !0,
    padding: "24px"
  }, React.createElement(uf, {
    icon: React.createElement(df, null),
    title: (0, b.__)("No CRM Connected", "ohmylms"),
    description: (0, b.__)("Please connect to a CRM integration (like WP Fusion) before setting up course integrations.", "ohmylms"),
    ctaText: (0, b.__)("Go to Integrations", "ohmylms"),
    ctaHandler: function () {
      window.location.href = "/wp-admin/admin.php?page=creator-lms#/integrations";
    }
  })) : 0 === d.length ? React.createElement(I.CardWP, {
    variant: "secondary",
    isBorderless: !0,
    padding: "24px"
  }, React.createElement(uf, {
    icon: React.createElement(df, null),
    title: (0, b.__)("No Integrations Yet", "ohmylms"),
    description: (0, b.__)("Create your first integration to automatically sync student progress with your CRM.", "ohmylms"),
    ctaText: (0, b.__)("Add Integration", "ohmylms"),
    ctaHandler: function () {
      return i();
    }
  })) : React.createElement(I.CardWP, {
    variant: "secondary",
    isBorderless: !0,
    padding: "24px"
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    padding: "20px",
    margin: "0"
  }, React.createElement("table", {
    className: "omlms-integration-list-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, (0, b.__)("Name", "ohmylms")), React.createElement("th", null, (0, b.__)("CRM", "ohmylms")), React.createElement("th", null, (0, b.__)("Action", "ohmylms")), React.createElement("th", null, (0, b.__)("Status", "ohmylms")), React.createElement("th", null, (0, b.__)("Actions", "ohmylms")))), React.createElement("tbody", null, d.map(function (e) {
    return React.createElement("tr", {
      key: e.id
    }, React.createElement("td", null, React.createElement("strong", null, e.name)), React.createElement("td", null, React.createElement(I.BadgeWP, {
      padding: "0",
      variant: "primary"
    }, e.crm_label)), React.createElement("td", null, (t = e.action_type, React.createElement(I.BadgeWP, {
      padding: "0",
      variant: "info"
    }, function (e) {
      return {
        add_tag: (0, b.__)("Add Tag", "ohmylms"),
        remove_tag: (0, b.__)("Remove Tag", "ohmylms"),
        update_fields: (0, b.__)("Update Fields", "ohmylms"),
        apply_tags: (0, b.__)("Apply Tags", "ohmylms"),
        remove_tags: (0, b.__)("Remove Tags", "ohmylms")
      }[e] || e.replace(/_/g, " ").replace(/\b\w/g, function (e) {
        return e.toUpperCase();
      });
    }(t)))), React.createElement("td", null, (a = "active" === (n = e.status) ? "success" : "secondary", React.createElement(I.BadgeWP, {
      variant: a
    }, n))), React.createElement("td", null, React.createElement(I.DropdownMenuWP, {
      controls: [{
        title: (0, b.__)("Edit", "ohmylms"),
        onClick: function () {
          return r(e);
        },
        icon: React.createElement("span", null, React.createElement(Re, null))
      }, {
        title: (0, b.__)("Delete", "ohmylms"),
        onClick: function () {
          return x(e);
        },
        icon: React.createElement(We, null)
      }],
      icon: React.createElement(q.Icon, {
        icon: Ne.A
      })
    })));
    var t, n, a;
  })))))), y && React.createElement(Ie, {
    title: (0, b.__)("Delete Integration", "ohmylms"),
    description: (0, b.__)("Are you sure you want to delete this integration?", "ohmylms"),
    onClose: function () {
      _(!1), S(null);
    },
    onDelete: C,
    isOpen: y,
    isDelete: !0
  }));
};

const dW = (0, g.memo)(sW);

function mW(e) {
  return mW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, mW(e);
}

function pW(e) {
  return function (e) {
    if (Array.isArray(e)) return SW(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || EW(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function fW(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function vW(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? fW(Object(n), !0).forEach(function (t) {
      gW(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fW(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function gW(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != mW(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != mW(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == mW(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function hW() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return yW(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (yW(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, yW(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, yW(d, "constructor", u), yW(u, "constructor", c), c.displayName = "GeneratorFunction", yW(u, a, "GeneratorFunction"), yW(d), yW(d, a, "Generator"), yW(d, r, function () {
    return this;
  }), yW(d, "toString", function () {
    return "[object Generator]";
  }), (hW = function () {
    return {
      w: o,
      m
    };
  })();
}

function yW(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  yW = function (e, t, n, r) {
    function o(t, n) {
      yW(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, yW(e, t, n, r);
}

function bW(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function _W(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        bW(o, r, a, i, l, "next", e);
      }
      function l(e) {
        bW(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function wW(e, t) {
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
  }(e, t) || EW(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function EW(e, t) {
  if (e) {
    if ("string" == typeof e) return SW(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? SW(e, t) : void 0;
  }
}

function SW(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
