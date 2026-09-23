// Reconstructed Webpack factory 38093; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    AdvancedSelectWP: () => Ct,
    AlignmentControlWP: () => Be,
    AvatarWP: () => l.A,
    BadgeWP: () => wt.A,
    BreadcrumbWP: () => c.A,
    ButtonWP: () => u.A,
    CardWP: () => s.A,
    CheckboxWP: () => p,
    ColorPickerWP: () => g,
    ContainerWP: () => i,
    CopyToClipboard: () => kt.A,
    DatePickerWP: () => ge,
    DateRangePickerWP: () => rt,
    DividerWP: () => h.A,
    DropdownButtonWP: () => me,
    DropdownMenuWP: () => we,
    EmptyWP: () => w,
    FlexBlockWP: () => x,
    FlexItemWP: () => E.A,
    FlexWP: () => S.A,
    FormFileUploadWP: () => De,
    GridWP: () => it,
    HeadingWP: () => Ae.A,
    InfoCardWP: () => k,
    InputNumberWP: () => j.A,
    InputWP: () => A.A,
    ModalWP: () => M.A,
    NoticeWP: () => T.A,
    PopoverWP: () => I.A,
    ProOverlayWP: () => _t,
    ProgressBarWP: () => He,
    RadioGroupIconWP: () => L,
    RadioGroupWP: () => W,
    RadioWP: () => F.A,
    SearchControlWP: () => H,
    SearchSelectCardWP: () => je,
    SearchSelectWP: () => xe,
    SelectWP: () => G.A,
    SkeletonWP: () => U.A,
    SpacerWP: () => Me.A,
    SpinWP: () => q.A,
    SurfaceWP: () => ft,
    SwitchWP: () => Y.A,
    TableWP: () => Pt.A,
    TabsWP: () => Q.A,
    TagWP: () => Le.A,
    TextWP: () => Te.A,
    TextareaWP: () => Ot.A,
    TimePickerWP: () => $,
    TitleWP: () => J,
    TooltipWP: () => X.A,
    TreeWP: () => se
  });
  var r = n(41594),
    a = n(12470),
    o = function (e) {
      var t = e.isFullWidth,
        n = void 0 !== t && t,
        r = e.children;
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: "omlms-app-container ".concat(n ? "omlms-container-fullwidth" : "")
      }, r));
    };
  const i = (0, r.memo)(o);
  var l = n(53725),
    c = n(81381),
    u = n(94490),
    s = n(36032),
    d = n(2214);
  function m() {
    return m = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, m.apply(null, arguments);
  }
  const p = function (e) {
    return React.createElement(d.CheckboxControl, m({
      __nextHasNoMarginBottom: !0,
      className: "omlms-checkbox-control",
      style: {
        borderColor: "#C8D2E9",
        borderRadius: "4px"
      }
    }, e));
  };
  function f(e, t) {
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
        if ("string" == typeof e) return v(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function v(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  const g = function (e) {
    var t = e.defaultColor,
      n = void 0 === t ? "" : t,
      a = e.isShowResetBtn,
      o = void 0 !== a && a,
      i = e.initialColor,
      l = e.onChange,
      c = e.disableAlpha,
      s = void 0 !== c && c,
      m = e.showColorCode,
      p = void 0 !== m && m,
      v = e.disabled,
      g = f((0, r.useState)(i), 2),
      h = g[0],
      y = g[1],
      b = f((0, r.useState)(!1), 2),
      _ = b[0],
      w = b[1],
      E = (0, r.useRef)(null),
      S = function (e) {
        v || y(null == e ? void 0 : e.hex), l && l(e);
      };
    return (0, r.useEffect)(function () {
      var e = function (e) {
        E.current && !E.current.contains(e.target) && w(!1);
      };
      return _ ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e), function () {
        document.removeEventListener("mousedown", e);
      };
    }, [_]), (0, r.useEffect)(function () {
      i && y(i);
    }, [i]), React.createElement("div", {
      ref: E,
      style: {
        position: "relative",
        display: "flex",
        gap: "8px"
      }
    }, React.createElement("div", {
      "aria-pressed": _,
      "aria-label": "Toggle color picker",
      className: "omlms-color-indicator-button ".concat(_ ? "creatorlms-active" : ""),
      onClick: function () {
        w(function (e) {
          return !e;
        });
      },
      disabled: v
    }, React.createElement(d.ColorIndicator, {
      colorValue: h
    }), p && React.createElement("span", {
      className: "omlms-color-code"
    }, h)), o && React.createElement(u.A, {
      variant: "secondary",
      className: "omlms-color-reset",
      style: {
        padding: "4px 0"
      },
      onClick: function () {
        return S({
          hex: n
        });
      }
    }, React.createElement("svg", {
      width: "26",
      height: "25",
      fill: "none",
      viewBox: "0 0 26 25",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      stroke: "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M1 2.088v6.546h6.545M25 22.543v-6.545h-6.546"
    }), React.createElement("path", {
      stroke: "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M22.262 7.543a9.819 9.819 0 00-16.2-3.666L1 8.634m24 7.363l-5.062 4.757a9.82 9.82 0 01-16.2-3.666"
    }))), _ && React.createElement("div", {
      className: "omlms-color-picker-popover",
      style: {
        position: "absolute",
        zIndex: 1e3,
        top: "100%",
        right: 0,
        marginTop: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        background: "white",
        borderRadius: "4px"
      }
    }, React.createElement(d.ColorPicker, {
      color: h,
      onChangeComplete: S,
      disableAlpha: s
    })));
  };
  var h = n(50127),
    y = n(57677),
    b = ["icon", "title", "description", "actionComponent", "className", "titleLevel"];
  function _() {
    return _ = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, _.apply(null, arguments);
  }
  const w = function (e) {
    var t = e.icon,
      n = e.title,
      r = void 0 === n ? (0, a.__)("Nothing here yet", "ohmylms") : n,
      o = e.description,
      i = e.actionComponent,
      l = e.className,
      c = void 0 === l ? "" : l,
      u = e.titleLevel,
      s = void 0 === u ? "4" : u,
      m = function (e, t) {
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
      }(e, b);
    return React.createElement("div", _({
      className: "omlms-empty-state ".concat(c),
      role: "region",
      "aria-label": r || (0, a.__)("Empty state section", "ohmylms")
    }, m), t && React.createElement("div", {
      className: "omlms-empty-icon"
    }, React.createElement(y.A, {
      icon: t,
      size: 48
    })), r && React.createElement(d.__experimentalHeading, {
      className: "omlms-empty-title",
      level: s
    }, r), o && React.createElement("p", {
      className: "omlms-empty-description"
    }, o), i && React.createElement("div", {
      className: "omlms-empty-action"
    }, i));
  };
  var E = n(83154),
    S = n(4315),
    R = ["children"];
  const x = function (e) {
    var t = e.children,
      n = function (e, t) {
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
      }(e, R);
    return React.createElement(d.FlexBlock, n, t);
  };
  var C = ["className", "headerIcon", "headerTitle", "headerSubTitle"];
  function P() {
    return P = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, P.apply(null, arguments);
  }
  var O = function (e) {
    var t = e.className,
      n = void 0 === t ? "" : t,
      r = (e.headerIcon, e.headerTitle, e.headerSubTitle, function (e, t) {
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
      }(e, C));
    return React.createElement(React.Fragment, null, React.createElement(s.A, P({
      className: "omlms-info-card-wrapper ".concat(n)
    }, r)));
  };
  const k = (0, r.memo)(O);
  var j = n(55907),
    A = n(43052),
    M = n(24295),
    T = n(39706),
    I = n(22563),
    F = n(26701),
    N = ["options"];
  function D() {
    return D = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, D.apply(null, arguments);
  }
  const W = function (e) {
    var t = e.options,
      n = function (e, t) {
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
      }(e, N);
    return React.createElement(d.__experimentalToggleGroupControl, D({
      __nextHasNoMarginBottom: !0,
      __next40pxDefaultSize: !0
    }, n), t.map(function (e, t) {
      return React.createElement(d.__experimentalToggleGroupControlOption, {
        key: t,
        value: null == e ? void 0 : e.value,
        label: null == e ? void 0 : e.label,
        disabled: null == e ? void 0 : e.disabled
      });
    }));
  };
  var z = ["options"];
  function B() {
    return B = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, B.apply(null, arguments);
  }
  const L = function (e) {
    var t = e.options,
      n = void 0 === t ? [] : t,
      r = function (e, t) {
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
      }(e, z);
    return React.createElement(d.__experimentalToggleGroupControl, B({
      __nextHasNoMarginBottom: !0,
      __next40pxDefaultSize: !0
    }, r), null == n ? void 0 : n.map(function (e, t) {
      return React.createElement(d.__experimentalToggleGroupControlOptionIcon, {
        key: t,
        icon: null == e ? void 0 : e.icon,
        value: null == e ? void 0 : e.value,
        label: null == e ? void 0 : e.label
      });
    }));
  };
  function V() {
    return V = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, V.apply(null, arguments);
  }
  const H = function (e) {
    return React.createElement(d.SearchControl, V({
      __nextHasNoMarginBottom: !0
    }, e));
  };
  var G = n(54870),
    U = n(68119),
    q = n(69986),
    Y = n(25946),
    Q = n(12278),
    Z = ["children"];
  const $ = function (e) {
    e.children;
    var t = function (e, t) {
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
    }(e, Z);
    return React.createElement(d.TimePicker.TimeInput, t);
  };
  var K = ["children"];
  const J = function (e) {
    var t = e.children,
      n = function (e, t) {
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
      }(e, K);
    return React.createElement(d.__experimentalHeading, n, t);
  };
  var X = n(6425),
    ee = n(52485),
    te = n(66655);
  function ne(e) {
    return ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, ne(e);
  }
  function re(e) {
    return function (e) {
      if (Array.isArray(e)) return oe(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || ae(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function ae(e, t) {
    if (e) {
      if ("string" == typeof e) return oe(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? oe(e, t) : void 0;
    }
  }
  function oe(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function ie(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function le(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ie(Object(n), !0).forEach(function (t) {
        ce(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ie(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function ce(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != ne(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, "string");
          if ("object" != ne(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == ne(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  var ue = function (e) {
    var t = e.node,
      n = e.level,
      r = void 0 === n ? 0 : n,
      a = e.expandedKeys,
      o = e.toggleExpand,
      i = e.selectedKeys,
      l = e.onSelect,
      c = e.checkable,
      u = e.checkedKeys,
      s = e.onCheck,
      m = null == t ? void 0 : t.key,
      p = null == t ? void 0 : t.title,
      f = null == t ? void 0 : t.children,
      v = null == a ? void 0 : a.includes(m),
      g = null == i ? void 0 : i.includes(m),
      h = null == u ? void 0 : u.includes(m),
      y = Array.isArray(f) && f.length > 0;
    return React.createElement("div", {
      className: "omlms-tree-node",
      style: {
        "--level": r
      }
    }, React.createElement(S.A, {
      className: "omlms-tree-node-inner",
      align: "center",
      justify: "flex-start"
    }, y ? React.createElement(d.Button, {
      onClick: function () {
        return null == o ? void 0 : o(m);
      },
      icon: v ? ee.A : te.A,
      variant: "text",
      className: "omlms-tree-toggle"
    }) : React.createElement("span", {
      className: "omlms-tree-indent"
    }), c && React.createElement(d.CheckboxControl, {
      className: "omlms-tree-checkbox",
      checked: !!h,
      onChange: function (e) {
        return null == s ? void 0 : s(e, t);
      }
    }), React.createElement(d.Button, {
      variant: "text",
      className: "omlms-tree-title",
      onClick: function () {
        return null == l ? void 0 : l([m], {
          selected: !g,
          node: t
        });
      },
      style: le({
        textDecoration: "none",
        width: "100%"
      }, y ? {
        paddingLeft: 0
      } : {})
    }, null != p ? p : "(no title)")), y && v && React.createElement("div", {
      className: "omlms-tree-children"
    }, null == f ? void 0 : f.map(function (e) {
      return React.createElement(ue, {
        key: null == e ? void 0 : e.key,
        node: e,
        level: r + 1,
        expandedKeys: a,
        toggleExpand: o,
        selectedKeys: i,
        onSelect: l,
        checkable: c,
        checkedKeys: u,
        onCheck: s
      });
    })));
  };
  const se = function (e) {
    var t,
      n,
      a = e.treeData,
      o = void 0 === a ? [] : a,
      i = e.defaultExpandAll,
      l = void 0 === i || i,
      c = e.selectedKeys,
      u = void 0 === c ? [] : c,
      s = e.onSelect,
      d = void 0 === s ? function () {} : s,
      m = e.checkable,
      p = void 0 !== m && m,
      f = e.checkedKeys,
      v = void 0 === f ? [] : f,
      g = e.onCheck,
      h = void 0 === g ? function () {} : g,
      y = e.defaultExpandedKeys,
      b = void 0 === y ? [] : y,
      _ = function () {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).flatMap(function (e) {
          return [null == e ? void 0 : e.key].concat(re(Array.isArray(null == e ? void 0 : e.children) ? _(e.children) : []));
        });
      },
      w = (t = (0, r.useState)(l ? _(o) : b), n = 2, function (e) {
        if (Array.isArray(e)) return e;
      }(t) || function (e, t) {
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
      }(t, n) || ae(t, n) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }()),
      E = w[0],
      S = w[1],
      R = function (e) {
        S(function (t) {
          return null != t && t.includes(e) ? t.filter(function (t) {
            return t !== e;
          }) : [].concat(re(t), [e]);
        });
      };
    return React.createElement("div", {
      className: "omlms-tree"
    }, null == o ? void 0 : o.map(function (e) {
      return React.createElement(Me.A, {
        key: null == e ? void 0 : e.key,
        marginBottom: 0,
        paddingY: 2
      }, React.createElement(ue, {
        node: e,
        level: 0,
        expandedKeys: E,
        toggleExpand: R,
        selectedKeys: u,
        onSelect: d,
        checkable: p,
        checkedKeys: v,
        onCheck: h
      }));
    }));
  };
  var de = function (e) {
    var t = e.menuItems,
      n = void 0 === t ? [] : t,
      r = e.className,
      o = void 0 === r ? "" : r,
      i = e.buttonLabel,
      l = void 0 === i ? (0, a.__)("Actions", "ohmylms") : i,
      c = e.onClick,
      s = e.loading,
      m = void 0 !== s && s;
    return React.createElement(React.Fragment, null, React.createElement(S.A, {
      align: "center",
      gap: 0,
      justify: "flex-start",
      className: "omlms-dropdown-button ".concat(m ? "omlms-btn-disabled" : ""),
      style: {
        border: "1px solid var(--omlms-primary-color)",
        width: "fit-content",
        borderRadius: "4px"
      }
    }, React.createElement(u.A, {
      loading: m,
      onClick: c,
      variant: "primary"
    }, l), React.createElement(d.DropdownMenu, {
      className: "omlms-dropdown-button-menu ".concat(o),
      controls: n,
      icon: React.createElement(d.Icon, {
        icon: ee.A
      })
    })));
  };
  const me = (0, r.memo)(de);
  var pe = ["startOfWeek", "value", "currentDate"];
  function fe() {
    return fe = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, fe.apply(null, arguments);
  }
  var ve = function (e) {
    var t = e.startOfWeek,
      n = void 0 === t ? 1 : t,
      r = e.value,
      a = e.currentDate,
      o = function (e, t) {
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
      }(e, pe);
    return React.createElement(React.Fragment, null, React.createElement(d.DatePicker, fe({
      startOfWeek: n,
      currentDate: a || r
    }, o)));
  };
  const ge = (0, r.memo)(ve);
  var he = n(77558),
    ye = ["icon", "controls"];
  function be() {
    return be = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, be.apply(null, arguments);
  }
  var _e = function (e) {
    var t = e.icon,
      n = e.controls,
      r = function (e, t) {
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
      }(e, ye),
      a = (0, he.useIsPro)();
    return React.createElement("div", {
      onClick: function (e) {
        e.stopPropagation();
      }
    }, React.createElement(d.DropdownMenu, be({
      toggleProps: {
        onClick: function (e) {
          return e.stopPropagation();
        }
      },
      icon: t
    }, r), function (e) {
      var t = e.onClose;
      return React.createElement(React.Fragment, null, n.map(function (e, n) {
        return React.createElement(d.MenuItem, {
          key: "".concat(n, " - ").concat(null == e ? void 0 : e.value),
          onClick: function () {
            null != e && e.disabled || (null == e || e.onClick(), t());
          },
          icon: null == e ? void 0 : e.icon,
          "aria-disabled": (null == e ? void 0 : e.isPro) && !a,
          disabled: null == e ? void 0 : e.disabled,
          style: {
            cursor: null != e && e.disabled ? "not-allowed" : "pointer",
            opacity: null != e && e.disabled ? .5 : 1,
            pointerEvents: null != e && e.disabled ? "none" : "auto"
          }
        }, null == e ? void 0 : e.title);
      }));
    }));
  };
  const we = (0, r.memo)(_e);
  var Ee = n(11541);
  function Se() {
    return Se = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, Se.apply(null, arguments);
  }
  var Re = function (e) {
    return React.createElement(React.Fragment, null, React.createElement(Ee.A, Se({
      className: "omlms-search-select ".concat(e.customClass)
    }, e)));
  };
  const xe = (0, r.memo)(Re);
  var Ce = n(79476),
    Pe = ["title", "description", "tooltip", "label", "options", "onChange", "className", "value"];
  function Oe() {
    return Oe = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, Oe.apply(null, arguments);
  }
  var ke = function (e) {
    var t = e.title,
      n = e.description,
      r = e.tooltip,
      o = e.label,
      i = void 0 === o ? (0, a.__)("Type to search", "ohmylms") : o,
      l = e.options,
      c = void 0 === l ? [] : l,
      u = e.onChange,
      s = void 0 === u ? function () {
        return console.error("No onChange function provided");
      } : u,
      d = e.className,
      m = void 0 === d ? "" : d,
      p = e.value,
      f = void 0 === p ? "" : p,
      v = function (e, t) {
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
      }(e, Pe);
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: "omlms-search-select-card ".concat(m)
    }, React.createElement("div", {
      className: "omlms-search-select-info"
    }, t && React.createElement(S.A, {
      gap: "small",
      align: "center"
    }, React.createElement("h3", {
      className: "omlms-search-select-title"
    }, t), r && React.createElement(X.A, {
      title: r,
      className: "omlms-tooltip"
    }, React.createElement("span", {
      className: "omlms-tooltip-icon"
    }, React.createElement(React.Fragment, null, React.createElement(Ce.A, null))))), n && React.createElement("p", {
      className: "omlms-search-select-description"
    }, n)), React.createElement(xe, Oe({
      label: i,
      options: c,
      onChange: s,
      value: f
    }, v))));
  };
  const je = (0, r.memo)(ke);
  var Ae = n(66718),
    Me = n(99166),
    Te = n(71847),
    Ie = ["label"];
  function Fe() {
    return Fe = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, Fe.apply(null, arguments);
  }
  var Ne = function (e) {
    var t = e.label,
      n = function (e, t) {
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
      }(e, Ie);
    return React.createElement(React.Fragment, null, React.createElement(d.FormFileUpload, Fe({
      __next40pxDefaultSize: !0
    }, n), t));
  };
  const De = (0, r.memo)(Ne),
    We = wp.blockEditor;
  var ze = function (e) {
    return React.createElement(React.Fragment, null, React.createElement(We.AlignmentControl, e));
  };
  const Be = (0, r.memo)(ze);
  var Le = n(27268),
    Ve = function (e) {
      return React.createElement(React.Fragment, null, React.createElement(d.ProgressBar, e));
    };
  const He = (0, r.memo)(Ve);
  var Ge = n(91386),
    Ue = n(74353),
    qe = n.n(Ue),
    Ye = n(37872),
    Qe = n.n(Ye);
  function Ze(e, t) {
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
        if ("string" == typeof e) return $e(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $e(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function $e(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  qe().extend(Qe());
  const Ke = function (e) {
    var t = e.onSelect,
      n = e.initialStartDate,
      o = e.initialEndDate,
      i = Ze((0, Ge.useState)(n), 2),
      l = i[0],
      c = i[1],
      m = Ze((0, Ge.useState)(o), 2),
      p = m[0],
      f = m[1],
      v = Ze((0, Ge.useState)(null), 2),
      g = v[0],
      h = v[1];
    return (0, r.useEffect)(function () {
      var e = document.querySelector(".components-datetime__date");
      if (e) {
        var t = function (e) {
            var t,
              n = e.getAttribute("data-date");
            if (n) return qe()(n);
            var r = e.querySelector("button") || e,
              a = r.getAttribute("data-date") || r.getAttribute("value");
            if (a) return qe()(a);
            var o,
              i = null === (t = e.textContent) || void 0 === t ? void 0 : t.trim();
            if (i && /^\d{1,2}$/.test(i) && (null === (o = document.querySelector(".components-datetime__date__month-year")) || void 0 === o ? void 0 : o.textContent)) {
              qe()();
              var l,
                c = parseInt(i, 10),
                u = e.closest("table");
              if (u && (null === (l = u.previousElementSibling) || void 0 === l ? void 0 : l.querySelector(".components-datetime__date__month-year"))) {
                var s = qe()(),
                  d = (s.month(), s.year(), qe()().date(c));
                return document.querySelector(".components-datetime__date__prev"), document.querySelector(".components-datetime__date__next"), d;
              }
            }
            var m = e.getAttribute("aria-label");
            if (m) {
              var p = m.match(/\d+/g);
              if (p && p.length >= 2) {
                var f = parseInt(p[0], 10),
                  v = p.find(function (e) {
                    return parseInt(e, 10) > 1900;
                  });
                if (f && v) {
                  var g = qe()().month();
                  return qe()().year(parseInt(v, 10)).month(g).date(f);
                }
              }
            }
            return null;
          },
          n = function () {
            document.querySelectorAll(".components-datetime__date__day").forEach(function (e) {
              var n = t(e);
              if (!n || !n.isValid()) {
                var r,
                  a = null === (r = e.textContent) || void 0 === r ? void 0 : r.trim();
                if (a && /^\d{1,2}$/.test(a)) {
                  var o = parseInt(a, 10);
                  if (e.closest(".components-datetime__date")) {
                    var i,
                      c = l || p || qe()();
                    n = c.date(o);
                    var u = c.startOf("month"),
                      s = c.endOf("month");
                    o < 15 && null !== (i = e.closest("tr")) && void 0 !== i && null !== (i = i.querySelector(".components-datetime__date__day")) && void 0 !== i && null !== (i = i.textContent) && void 0 !== i && i.includes("1") ? n = u.subtract(1, "month").date(o) : o > 15 && e.closest("tr:last-child") && (n = s.add(1, "month").date(o));
                  }
                }
              }
              if (n && n.isValid()) {
                e.classList.remove("is-selected", "has-endpoint", "is-hover-range");
                var d = function (e, t) {
                  return qe()(e).isSame(t, "day");
                };
                if (l && d(n, l) && e.classList.add("has-endpoint"), p && d(n, p) && e.classList.add("has-endpoint"), l && p && qe()(n).isAfter(l, "day") && qe()(n).isBefore(p, "day") && e.classList.add("is-selected"), l && !p && g && !d(g, l)) {
                  var m = Ze(qe()(g).isAfter(l) ? [l, g] : [g, l], 2),
                    f = m[0],
                    v = m[1];
                  qe()(n).isBetween(f, v, "day", "[]") && e.classList.add("is-hover-range");
                }
              }
            });
          },
          r = function () {
            document.querySelectorAll(".components-datetime__date__day").forEach(function (e) {
              var n = t(e);
              if (!n || !n.isValid()) {
                var r,
                  a = null === (r = e.textContent) || void 0 === r ? void 0 : r.trim();
                if (a && /^\d{1,2}$/.test(a)) {
                  var o,
                    i = parseInt(a, 10),
                    c = l || p || qe()();
                  n = c.date(i);
                  var u = c.startOf("month"),
                    s = c.endOf("month");
                  i < 15 && null !== (o = e.closest("tr")) && void 0 !== o && null !== (o = o.querySelector(".components-datetime__date__day")) && void 0 !== o && null !== (o = o.textContent) && void 0 !== o && o.includes("1") ? n = u.subtract(1, "month").date(i) : i > 15 && e.closest("tr:last-child") && (n = s.add(1, "month").date(i));
                }
              }
              n && n.isValid() && (e.addEventListener("mouseenter", function () {
                h(n.toDate());
              }), e.addEventListener("mouseleave", function () {
                h(null);
              }));
            });
          };
        n(), r();
        var a = new MutationObserver(function () {
          n(), r();
        });
        return a.observe(e, {
          childList: !0,
          subtree: !0
        }), function () {
          a.disconnect();
        };
      }
    }, [l, p, g]), React.createElement(s.A, {
      isBorderless: !0,
      padding: "16px"
    }, React.createElement(d.DatePicker, {
      currentDate: l,
      onChange: function (e) {
        !l || l && p ? (c(e), f(null)) : l && !p && (qe()(e).isBefore(qe()(l)) ? t({
          startDate: e,
          endDate: l
        }) : t({
          startDate: l,
          endDate: e
        }));
      }
    }), React.createElement(Me.A, {
      marginTop: 4,
      marginBottom: 0
    }, React.createElement(u.A, {
      isSecondary: !0,
      onClick: function () {
        return t({
          startDate: null,
          endDate: null
        });
      }
    }, (0, a.__)("Clear", "ohmylms"))));
  };
  function Je(e, t) {
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
        if ("string" == typeof e) return Xe(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xe(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Xe(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  const et = function (e) {
    var t = e.initialStartDate,
      n = e.initialEndDate,
      r = e.onChange,
      o = Je((0, Ge.useState)(!1), 2),
      i = o[0],
      l = o[1],
      c = Je((0, Ge.useState)(t), 2),
      s = c[0],
      m = c[1],
      p = Je((0, Ge.useState)(n), 2),
      f = p[0],
      v = p[1];
    (0, Ge.useEffect)(function () {
      m(t), v(n);
    }, [t, n]);
    var g = function (e) {
      var t,
        n,
        a = qe()();
      switch (e) {
        case "today":
          t = a.format("YYYY-MM-DD"), n = a.format("YYYY-MM-DD");
          break;
        case "this_week":
          t = a.startOf("week").format("YYYY-MM-DD"), n = a.endOf("week").format("YYYY-MM-DD");
          break;
        case "last_7_days":
          t = a.subtract(6, "days").format("YYYY-MM-DD"), n = a.format("YYYY-MM-DD");
          break;
        case "this_month":
          t = a.startOf("month").format("YYYY-MM-DD"), n = a.endOf("month").format("YYYY-MM-DD");
      }
      m(t), v(n), r([t, n]);
    };
    return React.createElement(S.A, {
      align: "center",
      justify: "flex-start",
      gap: 0
    }, React.createElement(u.A, {
      className: "omlms-date-range-input",
      onClick: function () {
        return l(!i);
      }
    }, s && f ? "".concat(qe()(s).format("DD/MM/YYYY"), " - ").concat(qe()(f).format("DD/MM/YYYY")) : (0, a.__)("Select Date Range", "ohmylms")), React.createElement(d.DropdownMenu, {
      icon: "calendar-alt",
      label: (0, a.__)("Select a Preset", "ohmylms"),
      controls: [{
        title: (0, a.__)("Today", "ohmylms"),
        onClick: function () {
          return g("today");
        }
      }, {
        title: (0, a.__)("This Week", "ohmylms"),
        onClick: function () {
          return g("this_week");
        }
      }, {
        title: (0, a.__)("Last 7 Days", "ohmylms"),
        onClick: function () {
          return g("last_7_days");
        }
      }, {
        title: (0, a.__)("This Month", "ohmylms"),
        onClick: function () {
          return g("this_month");
        }
      }, {
        title: (0, a.__)("Custom", "ohmylms"),
        onClick: function () {
          return l(!0);
        }
      }]
    }), i && React.createElement(d.Popover, {
      position: "bottom",
      onClose: function () {
        return l(!1);
      }
    }, React.createElement(Ke, {
      initialStartDate: s,
      initialEndDate: f,
      onSelect: function (e) {
        var t = e.startDate,
          n = e.endDate;
        if (!t || !n) return l(!1), void r([null, null]);
        var a = qe()(t).format("YYYY-MM-DD"),
          o = qe()(n).format("YYYY-MM-DD");
        m(a), v(o), a && o && l(!1), r([a, o]);
      }
    })));
  };
  function tt(e, t) {
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
        if ("string" == typeof e) return nt(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? nt(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function nt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  const rt = function (e) {
    var t = e.onChange,
      n = e.initialStartDate,
      r = e.initialEndDate,
      a = tt((0, Ge.useState)(n), 2),
      o = a[0],
      i = a[1],
      l = tt((0, Ge.useState)(r), 2),
      c = l[0],
      u = l[1];
    return (0, Ge.useEffect)(function () {
      i(n), u(r);
    }, [n, r]), React.createElement(et, {
      initialStartDate: o,
      initialEndDate: c,
      onChange: function (e) {
        var n = tt(e, 2),
          r = n[0],
          a = n[1];
        i(r), u(a), t && t(e);
      }
    });
  };
  var at = ["children"],
    ot = function (e) {
      var t = e.children,
        n = function (e, t) {
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
        }(e, at);
      return React.createElement(React.Fragment, null, React.createElement(d.__experimentalGrid, n, t));
    };
  const it = (0, r.memo)(ot);
  function lt(e) {
    return lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, lt(e);
  }
  var ct = ["children", "fullHeight", "minHeight", "style"];
  function ut() {
    return ut = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, ut.apply(null, arguments);
  }
  function st(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function dt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? st(Object(n), !0).forEach(function (t) {
        mt(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function mt(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != lt(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, "string");
          if ("object" != lt(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == lt(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  var pt = function (e) {
    var t = e.children,
      n = e.fullHeight,
      r = e.minHeight,
      a = e.style,
      o = function (e, t) {
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
      }(e, ct),
      i = dt(dt(dt({}, n ? {
        minHeight: "100%"
      } : {}), r ? {
        minHeight: r
      } : {}), a);
    return React.createElement(React.Fragment, null, React.createElement(d.__experimentalSurface, ut({}, o, {
      style: i
    }), t));
  };
  const ft = (0, r.memo)(pt);
  function vt(e) {
    return vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, vt(e);
  }
  function gt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function ht(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? gt(Object(n), !0).forEach(function (t) {
        yt(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gt(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function yt(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != vt(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, "string");
          if ("object" != vt(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == vt(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  var bt = function (e) {
    var t = e.title,
      n = (void 0 === e.upgradeUrl && he.pricingPageLink, e.height),
      r = e.top;
    return (0, he.useIsPro)() ? null : React.createElement(React.Fragment, null, React.createElement(S.A, {
      align: "center",
      justify: "center",
      direction: "column",
      gap: 4,
      className: "omlms-pro-overlay",
      style: ht(ht({}, n ? {
        height: n
      } : {}), r ? {
        top: r
      } : {})
    }, React.createElement(Ae.A, {
      style: {
        width: "620px",
        margin: "0 auto",
        textAlign: "center"
      },
      level: 3
    }, t), React.createElement(u.A, {
      variant: "primary",
      rel: "noreferrer",
      href: he.pricingPageLink,
      target: "_blank"
    }, React.createElement(S.A, {
      gap: 2
    }, React.createElement(Te.A, {
      as: "span",
      size: "14",
      color: "#FFFFFF"
    }, (0, a.__)("Upgrade to Pro", "ohmylms"))))));
  };
  const _t = (0, r.memo)(bt);
  var wt = n(58273),
    Et = n(46005),
    St = ["className"];
  function Rt() {
    return Rt = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, Rt.apply(null, arguments);
  }
  var xt = function (e) {
    var t = e.className,
      n = void 0 === t ? "" : t,
      r = function (e, t) {
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
      }(e, St);
    return React.createElement(React.Fragment, null, React.createElement(Et.Ay, Rt({
      className: "omlms-advanced-select omlms-search-select auto-height ".concat(n)
    }, r)));
  };
  const Ct = (0, r.memo)(xt);
  var Pt = n(65),
    Ot = n(15468),
    kt = n(21186);
});
