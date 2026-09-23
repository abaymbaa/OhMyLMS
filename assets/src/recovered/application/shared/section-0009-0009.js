// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var fo = function (e) {
  var t = e.checked,
    n = void 0 !== t && t,
    r = e.onChange,
    a = e.disabled,
    o = void 0 !== a && a,
    i = e.ariaLabel;
  return React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": n,
    "aria-label": i,
    disabled: o,
    onClick: function () {
      return !o && (null == r ? void 0 : r(!n));
    },
    className: ["omlms-rec-toggle", n ? "is-on" : "", o ? "is-disabled" : ""].filter(Boolean).join(" ")
  }, React.createElement("span", {
    className: "omlms-rec-toggle__knob"
  }));
};

const vo = (0, g.memo)(fo);

var go = function (e) {
  var t = e.size,
    n = void 0 === t ? 34 : t;
  return React.createElement("span", {
    className: "omlms-rec-spinner",
    style: {
      width: n,
      height: n
    },
    "aria-hidden": "true"
  });
};

const ho = (0, g.memo)(go);

function yo(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var bo = function (e) {
  var t = e.text,
    n = e.placement,
    r = void 0 === n ? "top" : n,
    a = e.children,
    o = function (e, t) {
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
          if ("string" == typeof e) return yo(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yo(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    i = o[0],
    l = o[1];
  return t ? React.createElement("span", {
    className: "omlms-rec-tooltip",
    onMouseEnter: function () {
      return l(!0);
    },
    onMouseLeave: function () {
      return l(!1);
    },
    onFocus: function () {
      return l(!0);
    },
    onBlur: function () {
      return l(!1);
    }
  }, a, i && React.createElement("span", {
    role: "tooltip",
    className: "omlms-rec-tooltip__bubble omlms-rec-tooltip__bubble--".concat(r)
  }, t)) : a;
};

const _o = (0, g.memo)(bo);

var wo = function (e) {
  var t = e.label,
    n = e.checked,
    r = e.onChange,
    a = e.disabled,
    o = void 0 !== a && a,
    i = e.tooltip;
  return React.createElement("div", {
    className: "omlms-rec-toggle-row"
  }, React.createElement("span", {
    className: "omlms-rec-toggle-row__label"
  }, t, i && React.createElement(_o, {
    text: i
  }, React.createElement(po, {
    name: "info",
    size: 15,
    className: "omlms-rec-toggle-row__info"
  }))), React.createElement(vo, {
    checked: n,
    onChange: r,
    disabled: o,
    ariaLabel: t
  }));
};

const Eo = (0, g.memo)(wo);

function So(e) {
  return So = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, So(e);
}

function Ro(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != So(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != So(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == So(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

var xo = "empty",
  Co = "attached",
  Po = "link",
  Oo = "upload",
  ko = "paid",
  jo = "free",
  Ao = "Zoom",
  Mo = "YouTube",
  To = "Vimeo",
  Io = "Drive",
  Fo = "Uploaded",
  No = Ro(Ro(Ro(Ro(Ro({}, Ao, {
    color: "#2D8CFF",
    background: "#e8f2ff"
  }), Mo, {
    color: "#e0102b",
    background: "#ffeaec"
  }), To, {
    color: "#0a8fc4",
    background: "#e5f6fd"
  }), Io, {
    color: "#1a9a52",
    background: "#e7f6ec"
  }), Fo, {
    color: "#5a5a68",
    background: "#eeeef2"
  }),
  Do = function (e) {
    var t = e.plan === ko;
    return React.createElement("div", {
      className: "omlms-rec-plan"
    }, React.createElement("span", {
      className: "omlms-rec-plan__dot ".concat(t ? "is-paid" : "is-free")
    }), React.createElement("span", null, t ? (0, b.__)("Detected: Zoom Pro — cloud recording available", "ohmylms") : (0, b.__)("Detected: Zoom Basic — local recording only", "ohmylms")));
  };

const Wo = (0, g.memo)(Do);

var zo = {
    info: "clock",
    success: "check",
    warning: "alert-triangle"
  },
  Bo = function (e) {
    var t = e.tone,
      n = void 0 === t ? "info" : t,
      r = e.icon,
      a = e.children;
    return React.createElement("div", {
      className: "omlms-rec-callout omlms-rec-callout--".concat(n)
    }, React.createElement(po, {
      name: r || zo[n],
      size: 17,
      className: "omlms-rec-callout__icon"
    }), React.createElement("div", {
      className: "omlms-rec-callout__body"
    }, a));
  };

const Lo = (0, g.memo)(Bo);

var Vo = function (e) {
  var t = e.autoRecord,
    n = void 0 !== t && t,
    r = e.onToggle,
    a = e.plan,
    o = void 0 === a ? jo : a,
    i = e.disabled,
    l = void 0 !== i && i,
    c = e.showLabel,
    u = void 0 === c || c,
    s = o === ko;
  return React.createElement("div", {
    className: "omlms-rec-settings"
  }, u && React.createElement("div", {
    className: "omlms-rec-settings__label"
  }, (0, b.__)("Recording", "ohmylms")), React.createElement(Eo, {
    label: (0, b.__)("Automatically record this session", "ohmylms"),
    checked: n,
    onChange: r,
    disabled: l,
    tooltip: (0, b.__)("When on, the session is recorded and the replay is added to this lesson automatically (Zoom Pro).", "ohmylms")
  }), React.createElement(Wo, {
    plan: o
  }), n && s && React.createElement(Lo, {
    tone: "success"
  }, (0, b.__)("Recording will be saved and added to the lesson automatically after the session ends.", "ohmylms")), n && !s && React.createElement(Lo, {
    tone: "warning"
  }, React.createElement("b", null, (0, b.__)("Auto-recording only starts when you join from the Zoom desktop app.", "ohmylms")), " ", (0, b.__)("Joining from a browser or mobile won't record. The file saves to your computer — you'll need to upload it to the lesson afterward.", "ohmylms")));
};

const Ho = (0, g.memo)(Vo);

var Go = function (e) {
  var t = e.children,
    n = e.tone,
    r = void 0 === n ? "neutral" : n,
    a = e.style;
  return React.createElement("span", {
    className: "omlms-rec-badge omlms-rec-badge--".concat(r),
    style: a
  }, t);
};

const Uo = (0, g.memo)(Go);

var qo = function (e) {
  var t = e.source;
  return React.createElement(Uo, {
    tone: "source",
    style: No[t] || No[Fo]
  }, t);
};

const Yo = (0, g.memo)(qo);

var Qo = function (e) {
  var t = e.source,
    n = void 0 === t ? Ao : t,
    r = e.title,
    a = e.duration,
    o = e.onReplace,
    i = e.onRemove;
  return React.createElement("div", {
    className: "omlms-rec-card"
  }, React.createElement("div", {
    className: "omlms-rec-card__thumb"
  }, React.createElement("span", {
    className: "omlms-rec-card__play"
  }, React.createElement(po, {
    name: "play",
    size: 18
  })), a && React.createElement("span", {
    className: "omlms-rec-card__time"
  }, a)), React.createElement("div", {
    className: "omlms-rec-card__info"
  }, React.createElement("div", {
    className: "omlms-rec-card__meta"
  }, React.createElement(Yo, {
    source: n
  }), React.createElement("span", {
    className: "omlms-rec-card__metatext"
  }, function (e) {
    switch (e) {
      case Ao:
        return (0, b.__)("Attached automatically from Zoom cloud", "ohmylms");
      case Fo:
        return (0, b.__)("Uploaded from your computer", "ohmylms");
      default:
        return (0, b.__)("Added via link", "ohmylms");
    }
  }(n))), React.createElement("div", {
    className: "omlms-rec-card__title",
    title: r
  }, r), React.createElement("div", {
    className: "omlms-rec-card__hint"
  }, (0, b.__)("This is the replay students watch in the lesson.", "ohmylms"))), React.createElement("div", {
    className: "omlms-rec-card__actions"
  }, React.createElement("button", {
    type: "button",
    className: "omlms-rec-btn omlms-rec-btn--ghost",
    onClick: o
  }, (0, b.__)("Replace", "ohmylms")), React.createElement("button", {
    type: "button",
    className: "omlms-rec-btn omlms-rec-btn--danger",
    onClick: i
  }, (0, b.__)("Remove", "ohmylms"))));
};

const Zo = (0, g.memo)(Qo);

var $o = function () {
  return React.createElement("div", {
    className: "omlms-rec-processing"
  }, React.createElement(ho, {
    size: 34
  }), React.createElement("div", null, React.createElement("div", {
    className: "omlms-rec-processing__title"
  }, (0, b.__)("Zoom cloud recording is processing…", "ohmylms")), React.createElement("div", {
    className: "omlms-rec-processing__text"
  }, (0, b.__)("Zoom is preparing the file. It'll attach here automatically — usually within a few minutes of the session ending. No action needed.", "ohmylms"))));
};

const Ko = (0, g.memo)($o);

var Jo = function (e) {
  var t = e.active,
    n = void 0 !== t && t,
    r = e.onClick,
    a = e.children;
  return React.createElement("button", {
    type: "button",
    role: "tab",
    "aria-selected": n,
    onClick: r,
    className: "omlms-rec-tab".concat(n ? " is-active" : "")
  }, a);
};

const Xo = (0, g.memo)(Jo);

var ei = function (e) {
  var t = e.value,
    n = void 0 === t ? "" : t,
    r = e.onChange,
    a = e.onSubmit,
    o = e.error;
  return React.createElement("div", {
    className: "omlms-rec-link"
  }, React.createElement("div", {
    className: "omlms-rec-link__row"
  }, React.createElement("div", {
    className: "omlms-rec-input".concat(o ? " has-error" : "")
  }, React.createElement(po, {
    name: "link",
    size: 17,
    className: "omlms-rec-input__icon"
  }), React.createElement("input", {
    type: "url",
    value: n,
    placeholder: (0, b.__)("Paste video URL — e.g. https://youtube.com/watch?v=…", "ohmylms"),
    onChange: function (e) {
      return null == r ? void 0 : r(e.target.value);
    },
    onKeyDown: function (e) {
      "Enter" === e.key && (null == a || a());
    }
  })), React.createElement("button", {
    type: "button",
    className: "omlms-rec-btn omlms-rec-btn--primary",
    onClick: a
  }, (0, b.__)("Add", "ohmylms"))), o ? React.createElement("div", {
    className: "omlms-rec-link__error"
  }, React.createElement(po, {
    name: "alert-circle",
    size: 15
  }), o) : React.createElement("div", {
    className: "omlms-rec-link__hint"
  }, (0, b.__)("Paste a YouTube, Vimeo link.", "ohmylms")));
};

const ti = (0, g.memo)(ei);

var ni = function (e) {
  var t = e.picking,
    n = void 0 !== t && t,
    r = e.onPick;
  return React.createElement("button", {
    type: "button",
    className: "omlms-rec-dropzone",
    onClick: r,
    disabled: n
  }, React.createElement("span", {
    className: "omlms-rec-dropzone__icon"
  }, React.createElement(po, {
    name: "upload",
    size: 22
  })), React.createElement("span", {
    className: "omlms-rec-dropzone__title"
  }, n ? (0, b.__)("Opening media library…", "ohmylms") : (0, b.__)("Choose from WordPress Media Library", "ohmylms")), React.createElement("span", {
    className: "omlms-rec-dropzone__hint"
  }, (0, b.__)("Select an existing video, or upload a new one.", "ohmylms")));
};

const ri = (0, g.memo)(ni);

var ai = function (e) {
  var t = e.tab,
    n = void 0 === t ? Po : t,
    r = e.onTab,
    a = e.showAutoBanner,
    o = void 0 !== a && a,
    i = e.link,
    l = e.onLink,
    c = e.onSubmitLink,
    u = e.linkError,
    s = e.upload,
    d = void 0 === s ? {} : s;
  return React.createElement("div", {
    className: "omlms-rec-add"
  }, o && React.createElement("div", {
    className: "omlms-rec-add__banner"
  }, React.createElement(Lo, {
    tone: "info"
  }, (0, b.__)("This session auto-records to Zoom cloud. The replay will attach here on its own after processing — you usually don't need this box. Use it only to add a different source.", "ohmylms"))), React.createElement("div", {
    className: "omlms-rec-add__body"
  }, React.createElement("div", {
    className: "omlms-rec-add__title"
  }, (0, b.__)("Add Recording", "ohmylms")), React.createElement("div", {
    className: "omlms-rec-add__sub"
  }, (0, b.__)("Attach the replay students will watch if they missed the live class.", "ohmylms")), React.createElement("div", {
    className: "omlms-rec-add__tabs",
    role: "tablist"
  }, React.createElement(Xo, {
    active: n === Po,
    onClick: function () {
      return null == r ? void 0 : r(Po);
    }
  }, (0, b.__)("Paste a link", "ohmylms")), React.createElement(Xo, {
    active: n === Oo,
    onClick: function () {
      return null == r ? void 0 : r(Oo);
    }
  }, (0, b.__)("Upload a file", "ohmylms"))), n === Po ? React.createElement(ti, {
    value: i,
    onChange: l,
    onSubmit: c,
    error: u
  }) : React.createElement(ri, d)));
};

const oi = (0, g.memo)(ai);

var ii = function (e) {
  var t = e.state,
    n = void 0 === t ? xo : t,
    r = e.sessionEnded,
    a = void 0 === r || r,
    o = e.showHeader,
    i = void 0 === o || o,
    l = e.attached,
    c = void 0 === l ? {} : l,
    u = e.addBox,
    s = void 0 === u ? {} : u;
  return React.createElement("div", {
    className: "omlms-rec-block"
  }, i && React.createElement("div", {
    className: "omlms-rec-block__head"
  }, React.createElement("span", {
    className: "omlms-rec-block__title"
  }, React.createElement(po, {
    name: "video",
    size: 20,
    className: "omlms-rec-block__icon"
  }), (0, b.__)("Session Recording", "ohmylms")), a && React.createElement(Uo, {
    tone: "neutral"
  }, (0, b.__)("Live session ended", "ohmylms"))), n === Co && React.createElement(Zo, c), "processing" === n && React.createElement(Ko, null), n === xo && React.createElement(oi, s));
};

const li = (0, g.memo)(ii);

function ci(e, t) {
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
      if ("string" == typeof e) return ui(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ui(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function ui(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

const si = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = e.plan,
    n = void 0 === t ? ko : t,
    r = e.title,
    a = void 0 === r ? "" : r,
    o = e.initialState,
    i = void 0 === o ? xo : o,
    l = e.initialAutoRecord,
    c = void 0 !== l && l,
    u = e.initialSource,
    s = e.duration,
    d = void 0 === s ? null : s,
    m = e.onAutoRecordChange,
    p = e.onAttach,
    f = e.onDetach,
    v = e.pickMedia,
    h = ci((0, g.useState)(c), 2),
    y = h[0],
    _ = h[1],
    w = ci((0, g.useState)(i), 2),
    E = w[0],
    S = w[1],
    R = ci((0, g.useState)(Po), 2),
    x = R[0],
    C = R[1],
    P = ci((0, g.useState)(""), 2),
    O = P[0],
    k = P[1],
    j = ci((0, g.useState)(""), 2),
    A = j[0],
    M = j[1],
    T = ci((0, g.useState)(!1), 2),
    I = T[0],
    F = T[1],
    N = ci((0, g.useState)(""), 2),
    D = N[0],
    W = N[1],
    z = ci((0, g.useState)(u || Ao), 2),
    B = z[0],
    L = z[1],
    V = ci((0, g.useState)(""), 2),
    H = V[0],
    G = V[1];
  (0, g.useEffect)(function () {
    i && i !== xo && S(i), u && L(u);
  }, [i, u]);
  var U = n === ko,
    q = (0, g.useCallback)(function (e) {
      _(e), null == m || m(e);
    }, [m]),
    Y = (0, g.useCallback)(function (e) {
      k(e), M("");
    }, []),
    Q = (0, g.useCallback)(function () {
      var e = O.trim();
      if (e) {
        var t = function (e) {
          var t = (e || "").toLowerCase();
          return /youtu\.?be|youtube\.com/.test(t) ? Mo : /vimeo\.com/.test(t) ? To : /drive\.google|docs\.google/.test(t) ? Io : null;
        }(e);
        t ? (L(t), G(a || (0, b.__)("Class replay", "ohmylms")), S(Co), k(""), M(""), null == p || p({
          source: t,
          url: e
        })) : M((0, b.__)("That doesn't look like a YouTube, Vimeo, or Google Drive link.", "ohmylms"));
      } else M((0, b.__)("Paste a link to continue.", "ohmylms"));
    }, [O, a, p]),
    Z = (0, g.useCallback)(function (e, t) {
      L(Fo), G(a || (0, b.__)("Class replay", "ohmylms")), W(e), F(!1), S(Co), null == p || p({
        source: Fo,
        url: t
      });
    }, [a, p]),
    $ = (0, g.useCallback)(function () {
      I || "function" != typeof v || (F(!0), Promise.resolve(v()).then(function (e) {
        e ? Z(e.fileName || (0, b.__)("Recording", "ohmylms"), e.url) : F(!1);
      }).catch(function () {
        return F(!1);
      }));
    }, [I, v, Z]),
    K = (0, g.useCallback)(function () {
      S(xo), C(Po), k(""), M("");
    }, []),
    J = (0, g.useCallback)(function () {
      K(), null == f || f();
    }, [K, f]);
  return {
    settingsProps: (0, g.useMemo)(function () {
      return {
        autoRecord: y,
        onToggle: q,
        plan: n
      };
    }, [y, q, n]),
    blockProps: (0, g.useMemo)(function () {
      return {
        state: E,
        sessionEnded: !0,
        attached: {
          source: B,
          title: H || a || (0, b.__)("Class replay", "ohmylms"),
          duration: B === Ao ? d || "58:12" : null,
          onReplace: K,
          onRemove: J
        },
        addBox: {
          tab: x,
          onTab: C,
          showAutoBanner: U && y,
          link: O,
          onLink: Y,
          onSubmitLink: Q,
          linkError: A,
          upload: {
            picking: I,
            fileName: D,
            onPick: $
          }
        }
      };
    }, [E, B, H, a, d, x, U, y, O, A, I, D, K, J, Y, Q, $]),
    recState: E,
    setRecState: S,
    autoRecord: y
  };
};

var di = function (e) {
  var t = e.variant,
    n = void 0 === t ? "primary" : t,
    r = e.onClick,
    a = e.disabled,
    o = void 0 !== a && a,
    i = e.type,
    l = void 0 === i ? "button" : i,
    c = e.icon,
    u = void 0 === c ? null : c,
    s = e.className,
    d = void 0 === s ? "" : s,
    m = e.children;
  return React.createElement("button", {
    type: l,
    onClick: r,
    disabled: o,
    className: "omlms-lcm-btn omlms-lcm-btn--".concat(n, " ").concat(d).trim()
  }, u, m);
};

const mi = (0, g.memo)(di);

var pi = function (e) {
  var t = e.icon,
    n = e.onClick,
    r = e.ariaLabel,
    a = e.size,
    o = void 0 === a ? 20 : a,
    i = e.disabled,
    l = void 0 !== i && i,
    c = e.className,
    u = void 0 === c ? "" : c;
  return React.createElement("button", {
    type: "button",
    className: "omlms-lcm-iconbtn ".concat(u).trim(),
    onClick: n,
    "aria-label": r,
    disabled: l
  }, React.createElement(po, {
    name: t,
    size: o
  }));
};

const fi = (0, g.memo)(pi);

var vi = function (e) {
  var t = e.title,
    n = e.onPreview,
    r = e.onSave,
    a = e.onClose,
    o = e.onTogglePanel,
    i = e.panelOpen,
    l = void 0 !== i && i,
    c = e.saving,
    u = void 0 !== c && c,
    s = e.saveDisabled,
    d = void 0 !== s && s,
    m = e.saveLabel;
  return React.createElement("div", {
    className: "omlms-lcm-topbar"
  }, React.createElement("div", {
    className: "omlms-lcm-topbar__title"
  }, t), React.createElement("div", {
    className: "omlms-lcm-topbar__actions"
  }, !l && React.createElement(mi, {
    variant: "text",
    className: "omlms-lcm-topbar__toggle",
    onClick: o,
    icon: React.createElement(po, {
      name: "settings",
      size: 17
    })
  }, (0, b.__)("Settings", "ohmylms")), React.createElement(mi, {
    variant: "text",
    className: "omlms-lcm-topbar__preview",
    onClick: n,
    icon: React.createElement(po, {
      name: "eye",
      size: 18
    })
  }, (0, b.__)("Preview", "ohmylms")), React.createElement(mi, {
    variant: "primary",
    onClick: r,
    disabled: d || u
  }, u ? (0, b.__)("Saving…", "ohmylms") : m), React.createElement(fi, {
    icon: "close",
    onClick: a,
    ariaLabel: (0, b.__)("Close", "ohmylms"),
    className: "omlms-lcm-topbar__close"
  })));
};

const gi = (0, g.memo)(vi);

var hi = function (e) {
  var t = e.value,
    n = e.onChange,
    r = e.placeholder,
    a = e.disabled,
    o = void 0 !== a && a,
    i = e.className,
    l = void 0 === i ? "" : i;
  return React.createElement("input", {
    className: "omlms-lcm-plain ".concat(l).trim(),
    value: null != t ? t : "",
    placeholder: r,
    disabled: o,
    onChange: function (e) {
      return null == n ? void 0 : n(e.target.value);
    }
  });
};

const yi = (0, g.memo)(hi);

var bi = function (e) {
  var t = e.value,
    n = e.onChange,
    r = e.disabled,
    a = void 0 !== r && r;
  return React.createElement(yi, {
    className: "omlms-lcm-title__topic",
    value: t,
    disabled: a,
    placeholder: (0, b.__)("Enter Meeting Topic", "ohmylms"),
    onChange: function (e) {
      return n("topic", e);
    }
  });
};

const _i = (0, g.memo)(bi);

function wi(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Ei = function (e) {
  var t = e.value,
    n = e.onChange,
    r = e.disabled,
    a = void 0 !== r && r,
    o = function (e, t) {
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
          if ("string" == typeof e) return wi(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? wi(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(t), 2),
    i = o[0];
  return o[1], React.createElement("div", {
    className: "omlms-lcm-agenda ".concat(a ? " is-disabled" : "")
  }, React.createElement(ne, {
    content: i || "",
    onContentChange: function (e) {
      return n("agenda", e);
    },
    placeholder: (0, b.__)("Enter meeting agenda…", "ohmylms"),
    autofocus: !1,
    editorFor: "lesson"
  }));
};

const Si = (0, g.memo)(Ei);

var Ri = function (e) {
  var t = e.topic,
    n = e.agenda,
    r = e.onChange,
    a = e.disabled,
    o = void 0 !== a && a;
  return e.cover, React.createElement("div", {
    className: "omlms-lcm-editor"
  }, React.createElement("div", {
    className: "omlms-lcm-editor__inner"
  }, React.createElement(_i, {
    value: t,
    onChange: r,
    disabled: o
  }), React.createElement(Si, {
    value: n,
    onChange: r,
    disabled: o
  })));
};

const xi = (0, g.memo)(Ri);

var Ci = function (e) {
  var t = e.children,
    n = e.required,
    r = void 0 !== n && n,
    a = e.tooltip;
  return React.createElement("div", {
    className: "omlms-lcm-label"
  }, React.createElement("span", null, t, r && React.createElement("span", {
    className: "omlms-lcm-label__req"
  }, "*")), a && React.createElement(_o, {
    text: a
  }, React.createElement(po, {
    name: "info",
    size: 15,
    className: "omlms-lcm-label__info"
  })));
};

const Pi = (0, g.memo)(Ci);

function Oi(e, t) {
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
      if ("string" == typeof e) return ki(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ki(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function ki(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var ji = function (e) {
  var t = e.value,
    n = e.onChange,
    r = e.options,
    a = void 0 === r ? [] : r,
    o = e.placeholder,
    i = e.searchable,
    l = void 0 !== i && i,
    c = e.disabled,
    u = void 0 !== c && c,
    s = Oi((0, g.useState)(!1), 2),
    d = s[0],
    m = s[1],
    p = Oi((0, g.useState)(""), 2),
    f = p[0],
    v = p[1],
    h = (0, g.useRef)(null);
  (0, g.useEffect)(function () {
    if (d) {
      var e = function (e) {
          h.current && !h.current.contains(e.target) && m(!1);
        },
        t = function (e) {
          return "Escape" === e.key && m(!1);
        };
      return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), function () {
        document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
      };
    }
  }, [d]);
  var y = a.find(function (e) {
      return e.value === t;
    }),
    _ = l && f ? a.filter(function (e) {
      return e.label.toLowerCase().includes(f.toLowerCase());
    }) : a;
  return React.createElement("div", {
    className: "omlms-lcm-select".concat(u ? " is-disabled" : "").concat(d ? " is-open" : ""),
    ref: h
  }, React.createElement("button", {
    type: "button",
    className: "omlms-lcm-select__control",
    disabled: u,
    onClick: function () {
      return m(function (e) {
        return !e;
      });
    }
  }, React.createElement("span", {
    className: y ? "" : "is-placeholder"
  }, y ? y.label : o || (0, b.__)("Select", "ohmylms")), React.createElement(po, {
    name: "chevron-down",
    size: 18
  })), d && React.createElement("div", {
    className: "omlms-lcm-select__menu"
  }, l && React.createElement("div", {
    className: "omlms-lcm-select__search"
  }, React.createElement(po, {
    name: "search",
    size: 15
  }), React.createElement("input", {
    autoFocus: !0,
    value: f,
    onChange: function (e) {
      return v(e.target.value);
    },
    placeholder: (0, b.__)("Search…", "ohmylms")
  })), React.createElement("ul", {
    className: "omlms-lcm-select__list"
  }, 0 === _.length && React.createElement("li", {
    className: "omlms-lcm-select__empty"
  }, (0, b.__)("No matches", "ohmylms")), _.map(function (e) {
    return React.createElement("li", {
      key: e.value
    }, React.createElement("button", {
      type: "button",
      className: "omlms-lcm-select__opt".concat(e.value === t ? " is-selected" : ""),
      onClick: function () {
        null == n || n(e.value), m(!1), v("");
      }
    }, e.label));
  }))));
};

const Ai = (0, g.memo)(ji);

var Mi = function (e) {
  var t = e.value,
    n = e.onChange,
    r = e.placeholder,
    a = e.disabled,
    o = void 0 !== a && a,
    i = e.className,
    l = void 0 === i ? "" : i;
  return React.createElement("input", {
    className: "omlms-lcm-input ".concat(l).trim(),
    type: "text",
    inputMode: "numeric",
    value: null != t ? t : "",
    placeholder: r,
    disabled: o,
    onChange: function (e) {
      return null == n ? void 0 : n(e.target.value.replace(/[^0-9]/g, ""));
    }
  });
};

const Ti = (0, g.memo)(Mi);

var Ii = [{
  value: 0,
  label: (0, b.__)("January", "ohmylms")
}, {
  value: 1,
  label: (0, b.__)("February", "ohmylms")
}, {
  value: 2,
  label: (0, b.__)("March", "ohmylms")
}, {
  value: 3,
  label: (0, b.__)("April", "ohmylms")
}, {
  value: 4,
  label: (0, b.__)("May", "ohmylms")
}, {
  value: 5,
  label: (0, b.__)("June", "ohmylms")
}, {
  value: 6,
  label: (0, b.__)("July", "ohmylms")
}, {
  value: 7,
  label: (0, b.__)("August", "ohmylms")
}, {
  value: 8,
  label: (0, b.__)("September", "ohmylms")
}, {
  value: 9,
  label: (0, b.__)("October", "ohmylms")
}, {
  value: 10,
  label: (0, b.__)("November", "ohmylms")
}, {
  value: 11,
  label: (0, b.__)("December", "ohmylms")
}];
