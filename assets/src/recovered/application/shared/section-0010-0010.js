// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function Fi(e, t) {
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
      if ("string" == typeof e) return Ni(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ni(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Ni(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Di = function (e) {
  var t = e.value,
    n = e.onChange,
    r = e.disabled,
    a = void 0 !== r && r,
    o = t ? sn()(t) : null,
    i = o && o.isValid(),
    l = Fi((0, g.useState)(i ? String(o.date()) : ""), 2),
    c = l[0],
    u = l[1],
    s = Fi((0, g.useState)(i ? String(o.year()) : ""), 2),
    d = s[0],
    m = s[1];
  (0, g.useEffect)(function () {
    var e = t ? sn()(t) : null;
    e && e.isValid() && (u(String(e.date())), m(String(e.year())));
  }, [t]);
  var p = function () {
      return i ? o : sn()().hour(9).minute(0).second(0);
    },
    f = function (e) {
      var t = sn()(),
        r = e.isBefore(t) ? t.second(0) : e;
      null == n || n(r.format("YYYY-MM-DDTHH:mm:ss"));
    };
  return React.createElement("div", {
    className: "omlms-lcm-datetime"
  }, React.createElement("input", {
    className: "omlms-lcm-input omlms-lcm-datetime__day",
    value: c,
    placeholder: "DD",
    maxLength: 2,
    inputMode: "numeric",
    disabled: a,
    onChange: function (e) {
      return u(e.target.value.replace(/[^0-9]/g, ""));
    },
    onBlur: function () {
      var e = parseInt(c, 10);
      if (isNaN(e)) u(i ? String(o.date()) : "");else {
        var t = Math.min(31, Math.max(1, e));
        u(String(t)), f(p().date(t));
      }
    }
  }), React.createElement("div", {
    className: "omlms-lcm-datetime__month"
  }, React.createElement(Ai, {
    value: i ? o.month() : void 0,
    onChange: function (e) {
      return f(p().month(e));
    },
    options: Ii,
    placeholder: (0, b.__)("Month", "ohmylms"),
    disabled: a
  })), React.createElement("input", {
    className: "omlms-lcm-input omlms-lcm-datetime__year",
    value: d,
    placeholder: "YYYY",
    maxLength: 4,
    inputMode: "numeric",
    disabled: a,
    onChange: function (e) {
      return m(e.target.value.replace(/[^0-9]/g, ""));
    },
    onBlur: function () {
      var e = parseInt(d, 10);
      isNaN(e) || 4 !== String(d).length ? m(i ? String(o.year()) : "") : (m(String(e)), f(p().year(e)));
    }
  }), React.createElement("input", {
    className: "omlms-lcm-input omlms-lcm-datetime__time",
    type: "time",
    value: i ? o.format("HH:mm") : "",
    disabled: a,
    onChange: function (e) {
      return n = (t = Fi((e.target.value || "").split(":"), 2))[0], r = t[1], a = parseInt(n, 10), o = parseInt(r, 10), void (isNaN(a) || isNaN(o) || f(p().hour(a).minute(o)));
      var t, n, r, a, o;
    }
  }));
};

const Wi = (0, g.memo)(Di);

var zi = function (e) {
  var t = e.value,
    n = e.onChange,
    r = e.type,
    a = void 0 === r ? "text" : r,
    o = e.placeholder,
    i = e.disabled,
    l = void 0 !== i && i,
    c = e.inputMode,
    u = e.prefix,
    s = void 0 === u ? null : u,
    d = e.suffix,
    m = void 0 === d ? null : d;
  return React.createElement("div", {
    className: "omlms-lcm-input"
  }, s, React.createElement("input", {
    type: a,
    value: null != t ? t : "",
    placeholder: o,
    disabled: l,
    inputMode: c,
    onChange: function (e) {
      return null == n ? void 0 : n(e.target.value);
    }
  }), m);
};

const Bi = (0, g.memo)(zi);

function Li(e, t) {
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
      if ("string" == typeof e) return Vi(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vi(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Vi(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Hi = function (e) {
  var t = e.value,
    n = e.onChange,
    r = e.disabled,
    a = void 0 !== r && r,
    o = Li((0, g.useState)(!!t), 2),
    i = o[0],
    l = o[1],
    c = Li((0, g.useState)(!1), 2),
    u = c[0],
    s = c[1];
  return React.createElement("div", {
    className: "omlms-lcm-password"
  }, React.createElement("div", {
    className: "omlms-rec-toggle-row"
  }, React.createElement("span", {
    className: "omlms-rec-toggle-row__label"
  }, (0, b.__)("Meeting Password", "ohmylms")), React.createElement(vo, {
    checked: i,
    onChange: function (e) {
      l(e), e || n("");
    },
    disabled: a,
    ariaLabel: (0, b.__)("Meeting Password", "ohmylms")
  })), i && React.createElement("div", {
    className: "omlms-lcm-password__input"
  }, React.createElement(Bi, {
    type: u ? "text" : "password",
    value: t,
    onChange: n,
    disabled: a,
    placeholder: (0, b.__)("Enter meeting password", "ohmylms"),
    suffix: React.createElement(fi, {
      icon: u ? "eye-off" : "eye",
      size: 17,
      onClick: function () {
        return s(function (e) {
          return !e;
        });
      },
      ariaLabel: (0, b.__)("Toggle password visibility", "ohmylms"),
      className: "omlms-lcm-password__eye"
    })
  })));
};

const Gi = (0, g.memo)(Hi);

function Ui(e) {
  return Ui = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ui(e);
}

function qi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function Yi(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Ui(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Ui(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Ui(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

const Qi = function () {
  return (0, g.useCallback)(function (e) {
    var t = e.type,
      n = void 0 === t ? "" : t,
      r = e.multiple,
      a = void 0 !== r && r,
      o = e.title,
      i = e.onSelect,
      l = e.onClose,
      c = "undefined" != typeof window ? window.wp : null;
    if (c && c.media) {
      var u = c.media(function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? qi(Object(n), !0).forEach(function (t) {
              Yi(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qi(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }
          return e;
        }({
          title: o || "Select or upload media",
          button: {
            text: "Use this media"
          },
          multiple: a
        }, n ? {
          library: {
            type: n
          }
        } : {})),
        s = !1;
      u.on("select", function () {
        s = !0;
        var e = u.state().get("selection").toJSON();
        null == i || i(a ? e : e[0]);
      }), u.on("close", function () {
        setTimeout(function () {
          s || null == l || l();
        }, 0);
      }), u.open();
    } else console.warn("wp.media is not available.");
  }, []);
};

var Zi = function (e) {
  var t = e.attachments,
    n = void 0 === t ? [] : t,
    r = e.onAddFiles,
    a = e.onRemove,
    o = e.disabled,
    i = void 0 !== o && o,
    l = Qi();
  return React.createElement("div", {
    className: "omlms-lcm-attach"
  }, n.length > 0 && React.createElement("ul", {
    className: "omlms-lcm-attach__list"
  }, n.map(function (e) {
    return React.createElement("li", {
      key: e.id,
      className: "omlms-lcm-attach__item"
    }, React.createElement(po, {
      name: "paperclip",
      size: 15
    }), React.createElement("span", {
      className: "omlms-lcm-attach__name",
      title: e.name
    }, e.name), e.size && React.createElement("span", {
      className: "omlms-lcm-attach__size"
    }, e.size), React.createElement(fi, {
      icon: "close",
      size: 15,
      onClick: function () {
        return null == a ? void 0 : a(e.id);
      },
      ariaLabel: (0, b.__)("Remove attachment", "ohmylms"),
      className: "omlms-lcm-attach__remove"
    }));
  })), React.createElement(mi, {
    variant: "ghost",
    onClick: function () {
      return l({
        multiple: !0,
        title: (0, b.__)("Select attachments", "ohmylms"),
        onSelect: function (e) {
          return null == r ? void 0 : r((e || []).map(function (e) {
            return {
              id: e.id,
              url: e.url,
              name: e.filename || e.name || e.title,
              size: e.filesizeHumanReadable
            };
          }));
        }
      });
    },
    disabled: i,
    icon: React.createElement(po, {
      name: "paperclip",
      size: 16
    })
  }, n.length ? (0, b.__)("Add more files", "ohmylms") : (0, b.__)("Add files", "ohmylms")));
};

const $i = (0, g.memo)(Zi);

function Ki(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Ji = function (e) {
  var t = e.title,
    n = e.badge,
    r = e.badgeTone,
    a = void 0 === r ? "neutral" : r,
    o = e.defaultOpen,
    i = void 0 === o || o,
    l = e.collapsible,
    c = void 0 === l || l,
    u = e.children,
    s = function (e, t) {
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
          if ("string" == typeof e) return Ki(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ki(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(i), 2),
    d = s[0],
    m = s[1];
  return React.createElement("div", {
    className: "omlms-lcm-group".concat(d ? " is-open" : "")
  }, React.createElement("button", {
    type: "button",
    className: "omlms-lcm-group__head",
    onClick: function () {
      return c && m(function (e) {
        return !e;
      });
    },
    disabled: !c,
    "aria-expanded": d
  }, React.createElement("span", {
    className: "omlms-lcm-group__titlewrap"
  }, React.createElement("span", {
    className: "omlms-lcm-group__title"
  }, t), n && React.createElement("span", {
    className: "omlms-lcm-group__badge omlms-lcm-group__badge--".concat(a)
  }, n)), c && React.createElement(po, {
    name: "chevron-down",
    size: 18,
    className: "omlms-lcm-group__chevron"
  })), d && React.createElement("div", {
    className: "omlms-lcm-group__body"
  }, u));
};

const Xi = (0, g.memo)(Ji);

function el() {
  return el = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, el.apply(null, arguments);
}

var tl = function (e) {
  var t = e.timezone,
    n = e.timezoneOptions,
    r = e.date,
    a = e.duration,
    o = e.password,
    i = e.toggles,
    l = void 0 === i ? {} : i,
    c = e.autoRecord,
    u = e.plan,
    s = e.recordingBlockProps,
    d = void 0 === s ? {} : s,
    m = e.showRecordingBlock,
    p = void 0 !== m && m,
    f = e.onChange,
    v = e.attachments,
    g = void 0 === v ? [] : v,
    h = e.onAddFiles,
    y = e.onRemoveFile,
    _ = e.onBack,
    w = e.disabled,
    E = void 0 !== w && w;
  return React.createElement("div", {
    className: "omlms-lcm-settings-panel"
  }, React.createElement("div", {
    className: "omlms-lcm-settings-panel__header"
  }, React.createElement(mi, {
    variant: "text",
    className: "omlms-lcm-settings-panel__back",
    onClick: _,
    icon: React.createElement(po, {
      name: "arrow-left",
      size: 17
    })
  }, (0, b.__)("Back to editor", "ohmylms"))), React.createElement(Xi, {
    title: (0, b.__)("Schedule", "ohmylms"),
    defaultOpen: !0
  }, React.createElement("div", {
    className: "omlms-lcm-field"
  }, React.createElement(Pi, {
    tooltip: (0, b.__)("The timezone the meeting time is scheduled in.", "ohmylms")
  }, (0, b.__)("Timezone", "ohmylms")), React.createElement(Ai, {
    value: t,
    onChange: function (e) {
      return f("timezone", e);
    },
    options: n,
    searchable: !0,
    placeholder: (0, b.__)("Select timezone", "ohmylms"),
    disabled: E
  })), React.createElement("div", {
    className: "omlms-lcm-field"
  }, React.createElement(Pi, {
    tooltip: (0, b.__)("When the live class starts.", "ohmylms")
  }, (0, b.__)("Date & Time", "ohmylms")), React.createElement(Wi, {
    value: r,
    onChange: function (e) {
      return f("date", e);
    },
    disabled: E
  })), React.createElement("div", {
    className: "omlms-lcm-field omlms-lcm-field--last"
  }, React.createElement(Pi, {
    tooltip: (0, b.__)("How long the meeting is scheduled to run.", "ohmylms")
  }, (0, b.__)("Meeting Duration (minutes)", "ohmylms")), React.createElement(Ti, {
    value: a,
    onChange: function (e) {
      return f("duration", e);
    },
    placeholder: (0, b.__)("e.g. 60", "ohmylms"),
    disabled: E
  }))), React.createElement(Xi, {
    title: (0, b.__)("In-meeting options", "ohmylms"),
    defaultOpen: !1
  }, React.createElement("div", {
    className: "omlms-lcm-toggles"
  }, React.createElement(Gi, {
    value: o,
    onChange: function (e) {
      return f("password", e);
    },
    disabled: E
  }), React.createElement(Eo, {
    label: (0, b.__)("Mute participants upon entry", "ohmylms"),
    checked: !!l.mute_upon_entry,
    onChange: function (e) {
      return f("mute_upon_entry", e);
    },
    disabled: E
  }), React.createElement(Eo, {
    label: (0, b.__)("Allow participants to join before host", "ohmylms"),
    checked: !!l.join_before_host,
    onChange: function (e) {
      return f("join_before_host", e);
    },
    disabled: E
  }), React.createElement(Eo, {
    label: (0, b.__)("Start video when the host joins the meeting", "ohmylms"),
    checked: !!l.host_video,
    onChange: function (e) {
      return f("host_video", e);
    },
    disabled: E
  }), React.createElement(Eo, {
    label: (0, b.__)("Start video when participants join the meeting", "ohmylms"),
    checked: !!l.participant_video,
    onChange: function (e) {
      return f("participant_video", e);
    },
    disabled: E
  }))), React.createElement(Xi, {
    title: (0, b.__)("Recording", "ohmylms"),
    badge: c ? (0, b.__)("ON", "ohmylms") : (0, b.__)("OFF", "ohmylms"),
    badgeTone: c ? "on" : "neutral",
    defaultOpen: !1
  }, React.createElement(Ho, {
    autoRecord: !!c,
    onToggle: function (e) {
      return f("auto_record", e);
    },
    plan: u,
    disabled: E,
    showLabel: !1
  })), React.createElement(Xi, {
    title: (0, b.__)("Session Recording", "ohmylms"),
    badge: p ? (0, b.__)("Session ended", "ohmylms") : void 0,
    defaultOpen: !1
  }, React.createElement(li, el({}, d, {
    showHeader: !1
  }))), React.createElement(Xi, {
    title: (0, b.__)("Attachments", "ohmylms"),
    defaultOpen: !1
  }, React.createElement($i, {
    attachments: g,
    onAddFiles: h,
    onRemove: y,
    disabled: E
  })));
};

const nl = (0, g.memo)(tl);

function rl() {
  return rl = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, rl.apply(null, arguments);
}

function al(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var ol = function (e) {
  var t = e.isOpen,
    n = e.loading,
    r = void 0 !== n && n,
    a = e.saving,
    o = void 0 !== a && a,
    i = e.onClose,
    l = e.onSave,
    c = e.onPreview,
    u = e.title,
    s = e.saveLabel,
    d = e.saveDisabled,
    m = void 0 !== d && d,
    p = e.editor,
    f = void 0 === p ? {} : p,
    v = e.settings,
    h = void 0 === v ? {} : v,
    y = e.SettingsPanel,
    b = void 0 === y ? nl : y,
    _ = function (e, t) {
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
          if ("string" == typeof e) return al(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? al(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    w = _[0],
    E = _[1];
  return (0, g.useEffect)(function () {
    if (t) {
      var e = function (e) {
        "Escape" !== e.key || o || null == i || i();
      };
      return document.addEventListener("keydown", e), function () {
        return document.removeEventListener("keydown", e);
      };
    }
  }, [t, o, i]), t ? React.createElement("div", {
    className: "omlms-lcm-overlay",
    onMouseDown: function (e) {
      e.target !== e.currentTarget || o || null == i || i();
    }
  }, React.createElement("div", {
    className: "omlms-lcm-modal".concat(w ? " is-panel-open" : ""),
    role: "dialog",
    "aria-modal": "true"
  }, React.createElement(gi, {
    title: u,
    onPreview: c,
    onSave: l,
    onClose: i,
    onTogglePanel: function () {
      return E(function (e) {
        return !e;
      });
    },
    panelOpen: w,
    saving: o,
    saveDisabled: m,
    saveLabel: s
  }), r ? React.createElement("div", {
    className: "omlms-lcm-loading"
  }, React.createElement(ho, {
    size: 40
  })) : React.createElement("div", {
    className: "omlms-lcm-body"
  }, React.createElement(xi, f), React.createElement(b, rl({}, h, {
    onBack: function () {
      return E(!1);
    }
  }))))) : null;
};

const il = (0, g.memo)(ol);

function ll() {
  return ll = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ll.apply(null, arguments);
}

var cl = function (e) {
  var t = e.timezone,
    n = e.timezoneOptions,
    r = e.date,
    a = e.duration,
    o = e.recordingBlockProps,
    i = void 0 === o ? {} : o,
    l = e.showRecordingBlock,
    c = void 0 !== l && l,
    u = e.onChange,
    s = e.attachments,
    d = void 0 === s ? [] : s,
    m = e.onAddFiles,
    p = e.onRemoveFile,
    f = e.onBack,
    v = e.disabled,
    g = void 0 !== v && v;
  return React.createElement("div", {
    className: "omlms-lcm-settings-panel"
  }, React.createElement("div", {
    className: "omlms-lcm-settings-panel__header"
  }, React.createElement(mi, {
    variant: "text",
    className: "omlms-lcm-settings-panel__back",
    onClick: f,
    icon: React.createElement(po, {
      name: "arrow-left",
      size: 17
    })
  }, (0, b.__)("Back to editor", "ohmylms"))), React.createElement(Xi, {
    title: (0, b.__)("Schedule", "ohmylms"),
    defaultOpen: !0
  }, React.createElement("div", {
    className: "omlms-lcm-field"
  }, React.createElement(Pi, {
    tooltip: (0, b.__)("The timezone the meeting time is scheduled in.", "ohmylms")
  }, (0, b.__)("Timezone", "ohmylms")), React.createElement(Ai, {
    value: t,
    onChange: function (e) {
      return u("timezone", e);
    },
    options: n,
    searchable: !0,
    placeholder: (0, b.__)("Select timezone", "ohmylms"),
    disabled: g
  })), React.createElement("div", {
    className: "omlms-lcm-field"
  }, React.createElement(Pi, {
    tooltip: (0, b.__)("When the live class starts.", "ohmylms")
  }, (0, b.__)("Start Date & Time", "ohmylms")), React.createElement(Wi, {
    value: r,
    onChange: function (e) {
      return u("date", e);
    },
    disabled: g
  })), React.createElement("div", {
    className: "omlms-lcm-field omlms-lcm-field--last"
  }, React.createElement(Pi, {
    tooltip: (0, b.__)("How long the meeting is scheduled to run. The end time is calculated from this.", "ohmylms")
  }, (0, b.__)("Meeting Duration (minutes)", "ohmylms")), React.createElement(Ti, {
    value: a,
    onChange: function (e) {
      return u("duration", e);
    },
    placeholder: (0, b.__)("e.g. 60", "ohmylms"),
    disabled: g
  }))), React.createElement(Xi, {
    title: (0, b.__)("Session Recording", "ohmylms"),
    badge: c ? (0, b.__)("Session ended", "ohmylms") : void 0,
    defaultOpen: !1
  }, React.createElement(li, ll({}, i, {
    showHeader: !1
  }))), React.createElement(Xi, {
    title: (0, b.__)("Attachments", "ohmylms"),
    defaultOpen: !1
  }, React.createElement($i, {
    attachments: d,
    onAddFiles: m,
    onRemove: p,
    disabled: g
  })));
};

const ul = (0, g.memo)(cl);

function sl() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return dl(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (dl(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, dl(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, dl(d, "constructor", u), dl(u, "constructor", c), c.displayName = "GeneratorFunction", dl(u, a, "GeneratorFunction"), dl(d), dl(d, a, "Generator"), dl(d, r, function () {
    return this;
  }), dl(d, "toString", function () {
    return "[object Generator]";
  }), (sl = function () {
    return {
      w: o,
      m
    };
  })();
}

function dl(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  dl = function (e, t, n, r) {
    function o(t, n) {
      dl(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, dl(e, t, n, r);
}

function ml(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function pl(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        ml(o, r, a, i, l, "next", e);
      }
      function l(e) {
        ml(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function fl(e, t) {
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
      if ("string" == typeof e) return vl(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vl(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function vl(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
