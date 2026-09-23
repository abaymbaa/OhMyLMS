// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var YJ = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fill: "#A1A1AA",
    clipPath: "url(#clip0_1300_2650)"
  }, React.createElement("path", {
    d: "M5.25 8.063h-1.5C1.935 8.063.937 7.064.937 5.25v-1.5c0-1.815.998-2.813 2.813-2.813h1.5c1.815 0 2.813.998 2.813 2.813v1.5c0 1.815-.998 2.813-2.813 2.813zm-1.5-6c-1.185 0-1.688.502-1.688 1.687v1.5c0 1.185.503 1.688 1.688 1.688h1.5c1.185 0 1.688-.503 1.688-1.688v-1.5c0-1.185-.503-1.688-1.688-1.688h-1.5zm10.5 6h-1.5c-1.815 0-2.813-.998-2.813-2.813v-1.5c0-1.815.998-2.813 2.813-2.813h1.5c1.815 0 2.813.998 2.813 2.813v1.5c0 1.815-.998 2.813-2.813 2.813zm-1.5-6c-1.185 0-1.688.502-1.688 1.687v1.5c0 1.185.503 1.688 1.688 1.688h1.5c1.185 0 1.688-.503 1.688-1.688v-1.5c0-1.185-.503-1.688-1.688-1.688h-1.5zm1.5 15h-1.5c-1.815 0-2.813-.998-2.813-2.813v-1.5c0-1.815.998-2.813 2.813-2.813h1.5c1.815 0 2.813.998 2.813 2.813v1.5c0 1.815-.998 2.813-2.813 2.813zm-1.5-6c-1.185 0-1.688.502-1.688 1.687v1.5c0 1.185.503 1.688 1.688 1.688h1.5c1.185 0 1.688-.503 1.688-1.688v-1.5c0-1.185-.503-1.688-1.688-1.688h-1.5zm-7.5 6h-1.5c-1.815 0-2.813-.998-2.813-2.813v-1.5c0-1.815.998-2.813 2.813-2.813h1.5c1.815 0 2.813.998 2.813 2.813v1.5c0 1.815-.998 2.813-2.813 2.813zm-1.5-6c-1.185 0-1.688.502-1.688 1.687v1.5c0 1.185.503 1.688 1.688 1.688h1.5c1.185 0 1.688-.503 1.688-1.688v-1.5c0-1.185-.503-1.688-1.688-1.688h-1.5z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_1300_2650"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h18v18H0z"
  })))));
};

const QJ = (0, g.memo)(YJ);

var ZJ = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    d: "M15.175 11.79H4.515a.795.795 0 110-1.59h10.66a.796.796 0 010 1.59zm0-4.996H4.515a.795.795 0 110-1.59h10.66a.795.795 0 010 1.59zm0-4.988H4.515a.795.795 0 110-1.591h10.66a.795.795 0 010 1.59zm-14.079.331a1.068 1.068 0 100-2.137 1.068 1.068 0 000 2.137zm0 4.933a1.068 1.068 0 100-2.136 1.068 1.068 0 000 2.136zm0 4.93a1.068 1.068 0 100-2.137 1.068 1.068 0 000 2.137z"
  })));
};

const $J = (0, g.memo)(ZJ);

var KJ = function () {
  var e,
    t,
    n,
    r,
    a,
    o,
    i,
    l,
    c = (0, L.useIsPro)(),
    u = (0, y.useDispatch)(T.default),
    s = (0, y.useSelect)(function (e) {
      return e(T.default).getDesignSettings();
    }, []),
    d = (null == s || null === (e = s.creator_lms_archive_page_layout_style) || void 0 === e ? void 0 : e.value) || "grid-style1",
    m = (null == s || null === (t = s.creator_lms_archive_page_filter_is_enabled) || void 0 === t ? void 0 : t.value) || "no",
    p = (null == s || null === (n = s.creator_lms_archive_page_row) || void 0 === n ? void 0 : n.value) || [],
    f = (null == s || null === (r = s.creator_lms_columns_per_row) || void 0 === r ? void 0 : r.value) || "4",
    v = (0, g.useMemo)(function () {
      return [{
        label: "Grid",
        value: "grid",
        icon: QJ
      }, {
        label: "List",
        value: "list",
        icon: $J
      }];
    }, []),
    h = (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("Layout 1", "ohmylms"),
        value: "grid-style1"
      }, {
        label: (0, b.__)("Layout 2 ".concat(c ? "" : "(Pro)"), "ohmylms"),
        value: "grid-style2",
        className: "is-pro-feature",
        disabled: !c
      }, {
        label: (0, b.__)("Layout 3 ".concat(c ? "" : "(Pro)"), "ohmylms"),
        value: "grid-style3",
        className: "is-pro-feature",
        disabled: !c
      }, {
        label: (0, b.__)("Layout 4 ".concat(c ? "" : "(Pro)"), "ohmylms"),
        value: "grid-style4",
        className: "is-pro-feature",
        disabled: !c
      }];
    }, []);
  return React.createElement(React.Fragment, null, React.createElement(Ea, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    marginTop: 2.5,
    padding: 2,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    className: "omlms-course-list-settings",
    align: "start",
    gap: 10,
    wrap: "wrap",
    justify: "space-between"
  }, React.createElement(I.FlexBlockWP, {
    style: {
      maxWidth: "385px"
    },
    className: "omlms-course-list-layout-options"
  }, React.createElement(bJ, {
    title: (0, b.__)("Archive Page Layout", "ohmylms"),
    description: (0, b.__)("Select the layout style for displaying courses on the archive page.", "ohmylms"),
    options: v,
    value: null == s || null === (a = s.creator_lms_archive_page_layout) || void 0 === a ? void 0 : a.value,
    onChange: function (e) {
      u.updateDesignSettings({
        creator_lms_archive_page_layout: {
          value: e
        }
      });
    },
    radioType: "default",
    gap: 8
  })), React.createElement(I.FlexBlockWP, {
    style: {
      maxWidth: "545px"
    },
    className: "omlms-course-list-layout-select"
  }, "grid" === (null == s || null === (o = s.creator_lms_archive_page_layout) || void 0 === o ? void 0 : o.value) && React.createElement(React.Fragment, null, React.createElement(Nm, {
    title: (0, b.__)("Select Layout", "ohmylms"),
    description: (0, b.__)("Select which layout you'd like to have in the course archive page.", "ohmylms"),
    placeholder: (0, b.__)("Select Layout", "ohmylms"),
    data: h,
    notFoundMessage: (0, b.__)("Nothing Found", "ohmylms"),
    isMultiple: !1,
    onChange: function (e) {
      u.updateDesignSettings({
        creator_lms_archive_page_layout_style: {
          value: e
        }
      }), "grid-style1" === e || "grid-style2" === e ? (u.updateDesignSettings({
        creator_lms_archive_page_category_is_enabled: {
          value: "no"
        },
        creator_lms_archive_page_row: {
          value: []
        }
      }), "yes" === m && 4 == f && u.updateDesignSettings({
        creator_lms_columns_per_row: {
          value: "3"
        }
      })) : (u.updateDesignSettings({
        creator_lms_archive_page_search_is_enabled: {
          value: "no"
        },
        creator_lms_archive_page_sorting_is_enabled: {
          value: "no"
        },
        creator_lms_archive_page_filter_is_enabled: {
          value: "no"
        },
        creator_lms_archive_page_filters: {
          value: []
        }
      }), 0 === p.length && u.updateDesignSettings({
        creator_lms_archive_page_row: {
          value: [{
            row_display_criteria: "all",
            row_heading: "Untitled"
          }]
        }
      }));
    },
    value: d,
    staticSearch: !0,
    showSearch: !1,
    align: "center"
  })))), "grid" === (null == s || null === (i = s.creator_lms_archive_page_layout) || void 0 === i ? void 0 : i.value) && React.createElement(React.Fragment, null, React.createElement(qJ, null)), React.createElement(Pf, {
    title: (0, b.__)("Courses Per Page", "ohmylms"),
    description: (0, b.__)("Set how many courses to display per page on the archive page.", "ohmylms"),
    onChange: function (e) {
      if (c) {
        var t = e;
        u.updateDesignSettings({
          creator_lms_courses_per_page: {
            value: t
          }
        });
      } else u.setIsProModalOpen(!0);
    },
    value: null == s || null === (l = s.creator_lms_courses_per_page) || void 0 === l ? void 0 : l.value,
    inputType: "number",
    isItProFeature: !0,
    showProTag: !1,
    className: "omlms-archive-page-courses-per-page"
  }))));
};

const JJ = (0, g.memo)(KJ);

function XJ(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var eX = function (e) {
  var t,
    n = function (e) {
      return function (e) {
        if (Array.isArray(e)) return XJ(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return XJ(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? XJ(e, t) : void 0;
        }
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }(["level", "review", "students", "available_seat", "membership", "certificate", "progress_bar", "duration", "total_lesson", "resources", "leaderboard", "author", "category", "tag"].flatMap(function (t) {
      var n,
        r,
        a,
        o,
        i,
        l = null == e ? void 0 : e[t];
      if (!l) return [];
      var c = {
        available_seat: (0, b.__)("Available Seats", "ohmylms"),
        total_lesson: (0, b.__)("Total Lessons", "ohmylms"),
        category: (0, b.__)("Categories", "ohmylms"),
        tag: (0, b.__)("Tags", "ohmylms")
      };
      return {
        key: null !== (n = l.key) && void 0 !== n ? n : t,
        title: null !== (r = l.title) && void 0 !== r ? r : (0, b.__)(null !== (a = c[t]) && void 0 !== a ? a : t.replace(/_/g, " ").replace(/\b\w/g, function (e) {
          return e.toUpperCase();
        }), "creator-lms"),
        tooltip: null !== (o = l.tooltip) && void 0 !== o ? o : (0, b.__)("Enable or disable the ".concat(t.replace(/_/g, " "), " feature."), "ohmylms"),
        isChecked: null !== (i = l.isChecked) && void 0 !== i && i,
        onChange: function (t, n) {
          var r, a;
          return null !== (r = null !== (a = l.onChange) && void 0 !== a ? a : e.handleChange(t, n)) && void 0 !== r ? r : function () {};
        }
      };
    })),
    r = (0, g.useMemo)(function () {
      return n.length;
    }, [n]);
  return React.createElement(React.Fragment, null, React.createElement(Ea, {
    className: "".concat(null !== (t = null == e ? void 0 : e.className) && void 0 !== t ? t : ""),
    isBorderless: !0,
    padding: "8px"
  }, n.map(function (e, t) {
    return React.createElement(React.Fragment, {
      key: (null == e ? void 0 : e.key) || t
    }, 0 !== t && t !== r ? React.createElement(I.SpacerWP, {
      marginBottom: 0,
      paddingY: 2,
      paddingX: 4
    }, React.createElement(I.DividerWP, {
      color: "#EDF2FB"
    })) : null, React.createElement(Kt, {
      key: (null == e ? void 0 : e.key) || t,
      title: null == e ? void 0 : e.title,
      onChange: function (t) {
        return null == e ? void 0 : e.onChange(t, null == e ? void 0 : e.key);
      },
      isChecked: null == e ? void 0 : e.isChecked,
      isItProFeature: !0,
      isDefaultStyle: !0,
      headerFontSize: "16px"
    }));
  })));
};

const tX = (0, g.memo)(eX);

var nX = function () {
  return React.createElement(React.Fragment, null, React.createElement("span", {
    className: "omlms-dummy-level"
  }, React.createElement("svg", {
    fill: "none",
    width: "12",
    height: "9",
    viewBox: "0 0 12 9",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    stroke: "#A1A1AA",
    d: "M6.767 8.336H5.242V2.392h1.525v5.944zm-4.734 0H.508V4.602h1.525v3.734z"
  }), React.createElement("path", {
    fill: "#DDDDE6",
    d: "M9.477 8.836V-.002H12v8.838H9.477z"
  })), "Intermediate"));
};

const rX = (0, g.memo)(nX);

var aX = function () {
  return React.createElement(React.Fragment, null, React.createElement("span", {
    className: "omlms-dummy-review"
  }, React.createElement("svg", {
    fill: "none",
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    d: "M9.93 3.704a1.368 1.368 0 00-.486-.698 1.296 1.296 0 00-.792-.26H6.83L6.278.965a1.388 1.388 0 00-.488-.7 1.316 1.316 0 00-1.585 0c-.23.174-.401.419-.488.7l-.553 1.78H1.343c-.284 0-.56.093-.789.265-.23.172-.4.415-.488.693a1.433 1.433 0 00-.001.857c.087.279.257.522.486.695l1.482 1.119-.563 1.802a1.41 1.41 0 00-.004.863c.09.28.263.523.497.693a1.296 1.296 0 001.584-.009l1.45-1.102 1.451 1.101a1.316 1.316 0 001.583.008 1.39 1.39 0 00.492-.694c.089-.279.09-.58.002-.86l-.563-1.802 1.483-1.12c.232-.17.404-.413.491-.692a1.41 1.41 0 00-.006-.86zm-.977.857L7.226 5.864a.444.444 0 00-.15.48l.656 2.097a.545.545 0 01-.188.59.5.5 0 01-.602-.002L5.244 7.737a.408.408 0 00-.493 0L3.052 9.03a.5.5 0 01-.604.005.545.545 0 01-.188-.593l.659-2.096a.444.444 0 00-.15-.48L1.04 4.56a.545.545 0 01.002-.854.5.5 0 01.3-.1h2.125a.408.408 0 00.246-.083.43.43 0 00.151-.216l.646-2.08a.528.528 0 01.186-.265.5.5 0 01.602 0 .528.528 0 01.185.265l.646 2.08a.43.43 0 00.152.216.408.408 0 00.245.082h2.126a.5.5 0 01.3.101.545.545 0 01.002.854h-.002z"
  })), "Ratings"));
};

const oX = (0, g.memo)(aX);

var iX = function () {
  return React.createElement(React.Fragment, null, React.createElement("span", {
    className: "omlms-dummy-students"
  }, React.createElement("svg", {
    fill: "none",
    width: "9",
    height: "10",
    viewBox: "0 0 9 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    d: "M4.543 4.872c.47 0 .93-.143 1.32-.41.39-.268.695-.649.875-1.094.18-.445.227-.935.135-1.407a2.456 2.456 0 00-.65-1.248A2.358 2.358 0 005.007.047a2.321 2.321 0 00-1.373.138 2.39 2.39 0 00-1.066.898 2.48 2.48 0 00.296 3.074 2.35 2.35 0 001.68.715zm0-4.103c.322 0 .636.098.903.281.268.183.476.444.599.748.123.305.155.64.092.963a1.68 1.68 0 01-.444.853 1.613 1.613 0 01-.833.457 1.588 1.588 0 01-.939-.095 1.635 1.635 0 01-.73-.614 1.697 1.697 0 01.203-2.104 1.607 1.607 0 011.15-.489zm4.235 6.96l-.065-.15a3.073 3.073 0 00-1.08-1.39 2.958 2.958 0 00-1.65-.548H3.107a2.958 2.958 0 00-1.65.547 3.072 3.072 0 00-1.081 1.39l-.07.16A1.744 1.744 0 00.43 9.339c.12.201.29.367.49.482.2.116.426.177.656.179h5.929a1.33 1.33 0 00.658-.18 1.38 1.38 0 00.492-.483 1.743 1.743 0 00.123-1.609zm-.75 1.188a.617.617 0 01-.522.313h-5.93a.612.612 0 01-.518-.31.939.939 0 01-.064-.872l.07-.16c.161-.425.442-.791.805-1.054.364-.263.794-.41 1.239-.424h2.874c.445.014.876.162 1.24.425.363.263.643.63.805 1.054l.064.15a.956.956 0 01-.064.878z"
  })), "Students"));
};

const lX = (0, g.memo)(iX);

var cX = function () {
  return React.createElement(React.Fragment, null, React.createElement("span", {
    className: "omlms-dummy-available-seat"
  }, React.createElement("svg", {
    fill: "none",
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_5086_4408)"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    d: "M9.585 4.583c0-.919-.748-1.666-1.667-1.666v-.834A2.086 2.086 0 005.835 0H4.168a2.086 2.086 0 00-2.083 2.083v.834c-.92 0-1.667.747-1.667 1.666v2.105c.012.68.568 1.229 1.25 1.229h2.917v1.25H2.918a.417.417 0 100 .833h4.167a.417.417 0 100-.833H5.418v-1.25h2.917c.682 0 1.238-.55 1.25-1.229V4.583zm-.834 0v.905a1.243 1.243 0 00-.416-.071h-.417V3.75c.46 0 .833.374.833.833zm-5.833-2.5c0-.689.56-1.25 1.25-1.25h1.667c.689 0 1.25.561 1.25 1.25v3.334H2.918V2.083zM2.085 3.75v1.667h-.417c-.146 0-.286.025-.417.071v-.905c0-.46.374-.833.834-.833zm6.25 3.333H1.668a.417.417 0 010-.833h6.667a.417.417 0 010 .833z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_5086_4408"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h10v10H0z"
  })))), "Seats"));
};

const uX = (0, g.memo)(cX);

var sX = function () {
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "omlms-dummy-course-content"
  }, React.createElement("span", {
    className: "omlms-dummy-content-title medium"
  }), Array.from({
    length: 3
  }).map(function (e, t) {
    return React.createElement("span", {
      key: t,
      className: "crlmls-dummy-content-text",
      style: {
        width: 2 === t ? "80%" : "100%"
      }
    });
  }), React.createElement("span", {
    className: "omlms-dummy-content-title small"
  }), Array.from({
    length: 4
  }).map(function (e, t) {
    return React.createElement("span", {
      key: t,
      className: "crlmls-dummy-content-text",
      style: {
        width: 1 === t ? "80%" : 3 === t ? "90%" : "60%"
      }
    });
  }), React.createElement("span", {
    className: "omlms-dummy-content-title extra-small"
  }), Array.from({
    length: 4
  }).map(function (e, t) {
    return React.createElement("span", {
      key: t,
      className: "crlmls-dummy-content-text",
      style: {
        width: 3 === t ? "60%" : "100%"
      }
    });
  })));
};

const dX = (0, g.memo)(sX);

var mX = function () {
  return React.createElement(React.Fragment, null, React.createElement(Ea, {
    className: "omlms-dummy-pricing"
  }, React.createElement("span", {
    className: "omlms-dummy-price"
  }, "$0.99"), React.createElement("span", {
    className: "omlms-dummy-content-title extra-small"
  }), React.createElement("div", {
    className: "omlms-dummy-button"
  }, React.createElement("span", {
    className: "omlms-dummy-button-text"
  }), React.createElement("span", {
    className: "omlms-dummy-button-text"
  }))));
};

const pX = (0, g.memo)(mX);

var fX = function () {
  return React.createElement(React.Fragment, null, React.createElement(Ea, {
    className: "omlms-dummy-membership"
  }, React.createElement("div", {
    className: "omlms-dummy-sidebar-header"
  }, React.createElement("svg", {
    fill: "none",
    width: "18",
    height: "13",
    viewBox: "0 0 18 13",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    d: "M17.98 5.025l-1.7 7.434a.695.695 0 01-.691.54H2.352a.695.695 0 01-.69-.54L.015 5.026a.677.677 0 01.249-.684.695.695 0 01.732-.075L5.032 6.2 8.376.347A.687.687 0 018.977 0a.696.696 0 01.602.347l3.344 5.861 4.062-1.95a.697.697 0 01.748.065.685.685 0 01.247.702z"
  })), "Membership"), React.createElement("div", {
    className: "omlms-dummy-sidebar-content"
  }, React.createElement("span", {
    className: "crlmls-dummy-content-text",
    style: {
      width: "56px"
    }
  }), React.createElement("span", {
    className: "crlmls-dummy-content-text",
    style: {
      width: "97px"
    }
  }))));
};

const vX = (0, g.memo)(fX);

var gX = function () {
  return React.createElement(React.Fragment, null, React.createElement(Ea, {
    className: "omlms-dummy-certificate"
  }, React.createElement("div", {
    className: "omlms-dummy-sidebar-header"
  }, React.createElement("svg", {
    fill: "none",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    d: "M14.784 3.857h2.835L14.14.379v2.835a.643.643 0 00.643.643z"
  }), React.createElement("path", {
    fill: "#A1A1AA",
    d: "M14.788 5.143a1.929 1.929 0 01-1.929-1.929V0H5.788a1.929 1.929 0 00-1.929 1.929v1.928a5.143 5.143 0 013.858 8.53v4.97c0 .22-.039.438-.116.643h8.473a1.929 1.929 0 001.928-1.929V5.143h-3.214zM8.359 4.5a.643.643 0 01.643-.643h1.929a.643.643 0 010 1.286H9.002A.643.643 0 018.36 4.5zm6.429 10.286H9.645a.643.643 0 110-1.286h5.143a.643.643 0 110 1.286zm0-3.215H10.93a.643.643 0 110-1.285h3.857a.643.643 0 110 1.285zm0-3.214H10.93a.643.643 0 010-1.286h3.857a.643.643 0 110 1.286z"
  }), React.createElement("path", {
    fill: "#A1A1AA",
    d: "M1.29 13.445v3.909a.643.643 0 00.398.591.643.643 0 00.7-.135l1.472-1.478 1.473 1.478a.643.643 0 00.99-.1.654.654 0 00.109-.356v-3.909a5.11 5.11 0 01-5.143 0zm2.567-.59a3.857 3.857 0 100-7.714 3.857 3.857 0 000 7.714z"
  })), "Certificate"), React.createElement("div", {
    className: "omlms-dummy-sidebar-content"
  }, React.createElement("span", {
    className: "crlmls-dummy-content-text",
    style: {
      width: "120px"
    }
  }), React.createElement("span", {
    className: "crlmls-dummy-content-text",
    style: {
      width: "80px"
    }
  }))));
};

const hX = (0, g.memo)(gX);

var yX = function () {
  return React.createElement(React.Fragment, null, React.createElement(Ea, {
    className: "omlms-dummy-progress"
  }, React.createElement("div", {
    className: "omlms-dummy-sidebar-header"
  }, React.createElement("span", null, "Progress"), React.createElement("span", null, "0%")), React.createElement("span", {
    className: "crlmls-dummy-content-text",
    style: {
      width: "126px"
    }
  })));
};

const bX = (0, g.memo)(yX);

var _X = function () {
  return React.createElement(React.Fragment, null, React.createElement("span", null, React.createElement("svg", {
    fill: "none",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    stroke: "#A1A1AA",
    strokeWidth: ".2",
    d: "M7.778 6.887L6.384 5.842v-2.13a.387.387 0 10-.775 0v2.323c0 .122.058.237.155.31l1.55 1.162a.385.385 0 00.542-.078.387.387 0 00-.078-.542z"
  }), React.createElement("path", {
    fill: "#A1A1AA",
    stroke: "#A1A1AA",
    strokeWidth: ".2",
    d: "M6 1C3.243 1 1 3.243 1 6s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 9.225A4.23 4.23 0 011.775 6 4.23 4.23 0 016 1.775 4.23 4.23 0 0110.225 6 4.23 4.23 0 016 10.225z"
  })), "2 ", (0, b.__)("Hours", "ohmylms")));
};

const wX = (0, g.memo)(_X);

var EX = function () {
  return React.createElement(React.Fragment, null, React.createElement("span", null, React.createElement("svg", {
    fill: "none",
    width: "12",
    height: "11",
    viewBox: "0 0 12 11",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    stroke: "#F4F5F7",
    strokeWidth: ".1",
    d: "M10.934 2.211h0l.987 5.96c.1.608-.056 1.23-.428 1.703l.039.03-.04-.03a1.897 1.897 0 01-1.492.743H5.806c-1.175 0-2.19-.895-2.408-2.132l-1.17-6.627-.025-.142-.068.127a1.716 1.716 0 00-.183.538L.966 8.34l.05.008-.05-.008c-.054.325.03.656.229.91.2.253.493.4.805.4h.5c.245 0 .45.213.45.483s-.205.484-.45.484H2c-.576 0-1.12-.27-1.492-.743A2.183 2.183 0 01.08 8.17l-.04-.006.04.006.986-5.959h0c.064-.387.245-.929.62-1.372C2.061.397 2.63.05 3.48.05h5.043c1.188 0 2.205.906 2.412 2.161zM10 9.65c.312 0 .605-.147.805-.4h0c.2-.253.283-.585.23-.91l-.05.008.05-.008-.987-5.959c-.13-.788-.77-1.364-1.526-1.364H3.478c-.146 0-.29.022-.426.063l-.042.013.007.044 1.266 7.168h0c.137.777.776 1.345 1.523 1.345H10zM5 3.683c-.245 0-.45-.213-.45-.483s.205-.483.45-.483h3.5c.246 0 .45.213.45.483s-.204.483-.45.483H5zm.366 2.133c-.246 0-.45-.213-.45-.483s.204-.483.45-.483h3.5c.245 0 .45.213.45.483s-.205.483-.45.483h-3.5zM9.7 7.466c0 .27-.205.484-.45.484h-3.5c-.246 0-.45-.213-.45-.484 0-.27.204-.483.45-.483h3.5c.245 0 .45.213.45.483z"
  })), "Lesson"));
};

const SX = (0, g.memo)(EX);

var RX = function () {
  return React.createElement(React.Fragment, null, React.createElement("span", null, React.createElement("svg", {
    fill: "none",
    width: "10",
    height: "11",
    viewBox: "0 0 10 11",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    fillRule: "evenodd",
    d: "M9.371 9.211a1.35 1.35 0 01-1.349 1.351H2.138a1.35 1.35 0 01-1.349-1.35V1.35A1.35 1.35 0 012.138 0h4.21c.228 0 .446.09.607.252L9.12 2.421c.16.16.251.38.251.607v6.183zm-.736 0V3.028a.123.123 0 00-.035-.087L6.435.773a.123.123 0 00-.087-.036h-4.21a.613.613 0 00-.613.614v7.86a.616.616 0 00.613.615h5.884a.613.613 0 00.613-.615z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#A1A1AA",
    fillRule: "evenodd",
    d: "M6.18.615a.368.368 0 11.735 0v1.719c0 .068.055.123.123.123h1.716a.368.368 0 010 .737H7.038a.859.859 0 01-.858-.86V.614zM3.122 4.917a.368.368 0 010-.737h3.923a.368.368 0 010 .737H3.122zm0 1.714a.368.368 0 010-.736h3.923a.368.368 0 010 .736H3.122zm0 1.719a.368.368 0 010-.737h2.207a.368.368 0 010 .737H3.122z",
    clipRule: "evenodd"
  })), "Resource"));
};

const xX = (0, g.memo)(RX);

var CX = function () {
  var e = (0, g.useCallback)(function () {
    return React.createElement("svg", {
      fill: "none",
      width: "25",
      height: "25",
      viewBox: "0 0 25 25",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "#BDBFC7",
      d: "M12.236 0C5.479 0 0 5.478 0 12.235S5.478 24.47 12.236 24.47c6.757 0 12.235-5.478 12.235-12.235S18.993 0 12.235 0zm0 3.658a4.047 4.047 0 110 8.095 4.047 4.047 0 010-8.095zm-.003 17.613a8.98 8.98 0 01-5.848-2.156 1.725 1.725 0 01-.605-1.311 4.081 4.081 0 014.102-4.08h4.709a4.076 4.076 0 014.094 4.08c0 .504-.22.983-.604 1.31a8.976 8.976 0 01-5.848 2.157z"
    }));
  });
  return React.createElement(React.Fragment, null, React.createElement(Ea, {
    className: "omlms-dummy-leaderboard"
  }, React.createElement("div", {
    className: "omlms-dummy-sidebar-header"
  }, React.createElement("span", null, "Leaderboard")), React.createElement("div", {
    className: "omlms-dummy-users"
  }, React.createElement(e, null), React.createElement("div", {
    className: "omlms-dummy-user-info"
  }, React.createElement("span", {
    className: "crlmls-dummy-content-text",
    style: {
      width: "54px"
    }
  }), React.createElement("span", {
    className: "crlmls-dummy-content-text",
    style: {
      width: "34px"
    }
  })))));
};

const PX = (0, g.memo)(CX);

var OX = function () {
  var e = (0, g.useCallback)(function () {
    return React.createElement("svg", {
      fill: "none",
      width: "25",
      height: "25",
      viewBox: "0 0 25 25",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "#BDBFC7",
      d: "M12.236 0C5.479 0 0 5.478 0 12.235S5.478 24.47 12.236 24.47c6.757 0 12.235-5.478 12.235-12.235S18.993 0 12.235 0zm0 3.658a4.047 4.047 0 110 8.095 4.047 4.047 0 010-8.095zm-.003 17.613a8.98 8.98 0 01-5.848-2.156 1.725 1.725 0 01-.605-1.311 4.081 4.081 0 014.102-4.08h4.709a4.076 4.076 0 014.094 4.08c0 .504-.22.983-.604 1.31a8.976 8.976 0 01-5.848 2.157z"
    }));
  });
  return React.createElement(React.Fragment, null, React.createElement(Ea, {
    className: "omlms-dummy-author"
  }, React.createElement("div", {
    className: "omlms-dummy-users"
  }, React.createElement(e, null), React.createElement("div", {
    className: "omlms-dummy-user-info"
  }, React.createElement("span", {
    className: "crlmls-dummy-content-text",
    style: {
      width: "92px"
    }
  }), React.createElement("span", {
    className: "crlmls-dummy-content-text",
    style: {
      width: "60px"
    }
  })))));
};

const kX = (0, g.memo)(OX);

var jX = function () {
  return React.createElement(React.Fragment, null, React.createElement(Ea, {
    className: "omlms-dummy-category"
  }, React.createElement("div", {
    className: "omlms-dummy-sidebar-header"
  }, React.createElement("span", null, "Categories")), React.createElement("div", {
    className: "omlms-dummy-sidebar-content"
  }, React.createElement("span", {
    className: "crlmls-dummy-content-text",
    style: {
      width: "94px"
    }
  }), React.createElement("span", {
    className: "crlmls-dummy-content-text",
    style: {
      width: "69px"
    }
  }))));
};

const AX = (0, g.memo)(jX);

var MX = function () {
  return React.createElement(React.Fragment, null, React.createElement(Ea, {
    className: "omlms-dummy-tag"
  }, React.createElement("div", {
    className: "omlms-dummy-sidebar-header"
  }, React.createElement("span", null, "Tags")), React.createElement("div", {
    className: "omlms-dummy-tag-list"
  }, Array.from({
    length: 3
  }).map(function (e, t) {
    return React.createElement("span", {
      key: t,
      className: "crlmls-dummy-content-text"
    });
  }))));
};

const TX = (0, g.memo)(MX);

var IX = function () {
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "omlms-dummy-course-thumb"
  }, React.createElement("svg", {
    fill: "none",
    width: "80",
    height: "80",
    viewBox: "0 0 80 80",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#CDCFD5",
    d: "M78.457 58.175L66.434 30.163c-2.19-5.128-5.455-8.036-9.18-8.227-3.688-.192-7.26 2.372-9.988 7.27l-7.298 13.05c-1.537 2.755-3.726 4.4-6.108 4.592-2.42.23-4.84-1.033-6.799-3.52l-.845-1.072c-2.727-3.406-6.107-5.051-9.565-4.707-3.457.344-6.414 2.717-8.373 6.582L1.632 57.333c-2.381 4.784-2.15 10.332.653 14.848a15.253 15.253 0 0013.022 7.233h49.014c5.148 0 9.95-2.564 12.792-6.85 2.919-4.286 3.38-9.682 1.344-14.389z"
  }), React.createElement("path", {
    fill: "#E4E6EA",
    d: "M20.663 25.869c7.17 0 12.983-5.791 12.983-12.935C33.646 5.791 27.834 0 20.663 0 13.493 0 7.68 5.79 7.68 12.934c0 7.144 5.813 12.935 12.983 12.935z"
  }))));
};

const FX = (0, g.memo)(IX);
