// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var FJ = [{
    label: (0, b.__)("Category", "ohmylms"),
    value: "category"
  }, {
    label: (0, b.__)("Tag", "ohmylms"),
    value: "tag"
  }, {
    label: (0, b.__)("Price Type", "ohmylms"),
    value: "price_type"
  }, {
    label: (0, b.__)("Difficulty Level", "ohmylms"),
    value: "difficulty_level"
  }],
  NJ = function () {
    var e,
      t,
      n,
      r,
      a,
      o,
      i,
      l,
      c = (0, y.useDispatch)(T.default),
      u = (0, y.useSelect)(function (e) {
        return e(T.default).getDesignSettings();
      }, []),
      s = (null == u || null === (e = u.ohmylms_archive_page_layout_style) || void 0 === e ? void 0 : e.value) || "grid-style1",
      d = (null == u || null === (t = u.ohmylms_columns_per_row) || void 0 === t ? void 0 : t.value) || "4",
      m = (null == u || null === (n = u.ohmylms_archive_page_search_is_enabled) || void 0 === n ? void 0 : n.value) || "no",
      p = (null == u || null === (r = u.ohmylms_archive_page_sorting_is_enabled) || void 0 === r ? void 0 : r.value) || "no",
      f = (null == u || null === (a = u.ohmylms_archive_page_filter_is_enabled) || void 0 === a ? void 0 : a.value) || "no",
      v = (null == u || null === (o = u.ohmylms_archive_page_filters) || void 0 === o ? void 0 : o.value) || [],
      g = (null == u || null === (i = u.ohmylms_archive_page_category_is_enabled) || void 0 === i ? void 0 : i.value) || "no",
      h = (null == u || null === (l = u.ohmylms_archive_page_row) || void 0 === l ? void 0 : l.value) || [],
      _ = function (e, t) {
        c.updateDesignSettings(IJ({}, t, {
          value: e ? "yes" : "no"
        }));
      },
      w = function (e, t) {
        c.updateDesignSettings({
          ohmylms_archive_page_row: {
            value: h.map(function (n, r) {
              return t === r ? TJ(TJ({}, n), {}, {
                row_display_criteria: e
              }) : n;
            })
          }
        });
      },
      E = function (e, t) {
        c.updateDesignSettings({
          ohmylms_archive_page_row: {
            value: h.map(function (n, r) {
              return t === r ? TJ(TJ({}, n), {}, {
                row_heading: e
              }) : n;
            })
          }
        });
      },
      S = function (e) {
        c.updateDesignSettings({
          ohmylms_archive_page_row: {
            value: h.filter(function (t, n) {
              return e !== n;
            })
          }
        });
      },
      R = function (e) {
        return {
          height: "63.623px",
          border: "2px solid ".concat(d == e ? "#6e42d3" : "#EBECED"),
          borderRadius: "2px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "8.157px 11.42px",
          cursor: "pointer",
          transition: "border-color 0.2s ease"
        };
      },
      x = {
        display: "flex",
        flexDirection: "column",
        gap: "8.157px",
        alignItems: "center"
      },
      C = {
        display: "flex",
        alignItems: "center",
        lineHeight: "0",
        gap: "3px"
      },
      P = function (e) {
        return {
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          fontSize: "12px",
          color: d === e ? "#000d25" : "#1f2328",
          lineHeight: "11.42px",
          textAlign: "center",
          margin: "0"
        };
      };
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: "ohmylms-course-list-layout-config"
    }, React.createElement(I.SpacerWP, {
      margin: 0,
      marginBottom: 2,
      padding: 2
    }, React.createElement(I.FlexWP, {
      direction: "column",
      justify: "space-between",
      align: "normal",
      gap: 4
    }, React.createElement(I.FlexItemWP, null, React.createElement(EJ, {
      title: (0, b.__)("Choose Course Column", "ohmylms")
    })), React.createElement(I.FlexItemWP, null, React.createElement("div", {
      style: {
        display: "grid",
        gap: "6px",
        alignItems: "center",
        gridTemplateColumns: "repeat(4, 1fr)"
      }
    }, [1, 2, 3, 4].map(function (e) {
      return React.createElement("div", {
        key: e,
        style: R(e),
        onClick: function () {
          return function (e) {
            c.updateDesignSettings({
              ohmylms_columns_per_row: {
                value: e
              }
            });
          }(e);
        }
      }, React.createElement("div", {
        style: x
      }, React.createElement("div", {
        style: C
      }, function (e) {
        for (var t = [], n = 1 === e ? "54.651px" : 2 === e ? "26.102px" : 3 === e ? "15.498px" : "10.604px", r = 0; r < e; r++) t.push(React.createElement("div", {
          key: r,
          style: {
            width: n,
            height: "26.102px",
            border: "2px solid ".concat(d === e ? "#000d25" : "#687784"),
            borderRadius: "3.263px"
          }
        }));
        return t;
      }(e)), React.createElement("p", {
        style: P(e)
      }, e)));
    }))))), ("grid-style1" === s || "grid-style2" === s) && React.createElement(React.Fragment, null, React.createElement(Kt, {
      title: (0, b.__)("Search", "ohmylms"),
      tooltip: (0, b.__)("Enable course search.", "ohmylms"),
      onChange: function (e) {
        return _(e, "ohmylms_archive_page_search_is_enabled");
      },
      isChecked: "yes" === m,
      showDivider: !1,
      headerFontSize: "16px",
      spacerPadding: 2,
      isDefaultStyle: !0
    }), React.createElement(I.SpacerWP, {
      marginBottom: 0,
      paddingY: 4,
      paddingX: 1.75
    }, React.createElement(Tt.A, {
      color: "#EDF2FB"
    })), React.createElement(Kt, {
      title: (0, b.__)("Sorting", "ohmylms"),
      tooltip: (0, b.__)("Enable course sorting.", "ohmylms"),
      onChange: function (e) {
        return _(e, "ohmylms_archive_page_sorting_is_enabled");
      },
      isChecked: "yes" === p,
      showDivider: !1,
      headerFontSize: "16px",
      spacerPadding: 2,
      isDefaultStyle: !0
    }), React.createElement(I.SpacerWP, {
      marginBottom: 0,
      paddingY: 4,
      paddingX: 1.75
    }, React.createElement(Tt.A, {
      color: "#EDF2FB"
    })), React.createElement(Kt, {
      title: (0, b.__)("Filter", "ohmylms"),
      tooltip: (0, b.__)("Filter enable or disable.", "ohmylms"),
      onChange: function (e) {
        return function (e) {
          e ? (c.updateDesignSettings({
            ohmylms_archive_page_filters: {
              value: ["keyword", "category", "tag", "price_type", "difficulty_level"]
            },
            ohmylms_archive_page_filter_is_enabled: {
              value: "yes"
            }
          }), 4 == d && c.updateDesignSettings({
            ohmylms_columns_per_row: {
              value: "3"
            }
          })) : c.updateDesignSettings({
            ohmylms_archive_page_filters: {
              value: []
            },
            ohmylms_archive_page_filter_is_enabled: {
              value: "no"
            }
          });
        }(e);
      },
      isChecked: "yes" === f,
      showDivider: !1,
      headerFontSize: "16px",
      spacerPadding: 2,
      isDefaultStyle: !0
    }), "yes" === f && React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary"
    }, React.createElement(I.SpacerWP, {
      padding: 4,
      marginTop: 2,
      marginBottom: 0
    }, React.createElement("div", {
      className: "ohmylms-global-settings-filter-options"
    }, React.createElement(EJ, {
      size: "14px",
      title: (0, b.__)("Choose Course Filter", "ohmylms")
    }), FJ.map(function (e, t) {
      return React.createElement(I.SpacerWP, {
        key: t,
        paddingY: 2,
        margin: 0,
        marginBottom: 0
      }, React.createElement(I.CheckboxWP, {
        key: t,
        label: e.label,
        value: e.value,
        checked: v.includes(e.value),
        onChange: function (t) {
          !function (e) {
            c.updateDesignSettings({
              ohmylms_archive_page_filters: {
                value: e
              }
            });
          }(t ? [].concat(jJ(v), [e.value]) : v.filter(function (t) {
            return t !== e.value;
          }));
        },
        disabled: null == e ? void 0 : e.disabled
      }));
    }))))), ("grid-style4" === s || "grid-style3" === s) && React.createElement(React.Fragment, null, React.createElement(Kt, {
      title: (0, b.__)("Category", "ohmylms"),
      tooltip: (0, b.__)("Enable course category.", "ohmylms"),
      onChange: function (e) {
        return _(e, "ohmylms_archive_page_category_is_enabled");
      },
      isChecked: "yes" === g,
      showDivider: !1,
      headerFontSize: "16px",
      spacerPadding: 2,
      isDefaultStyle: !0
    }), React.createElement(I.SpacerWP, {
      marginBottom: 0,
      paddingY: 4,
      paddingX: 1.75
    }, React.createElement(Tt.A, {
      color: "#EDF2FB"
    })), React.createElement(I.SpacerWP, {
      padding: 2,
      margin: 0,
      marginBottom: 0
    }, React.createElement(EJ, {
      size: "16px",
      title: (0, b.__)("Row Settings", "ohmylms")
    }), React.createElement(I.SpacerWP, {
      margin: 0,
      marginBottom: 0,
      marginTop: 3
    }, h.map(function (e, t) {
      return React.createElement(OJ, {
        key: t,
        length: h.length,
        index: t,
        row: e,
        handleSelectRowDisplayCriteria: w,
        handleRowHeading: E,
        handleRemoveRow: S
      });
    })), React.createElement(I.FlexWP, {
      justify: "flex-end"
    }, React.createElement(I.ButtonWP, {
      variant: "primary",
      icon: React.createElement(RJ, null),
      onClick: function () {
        c.updateDesignSettings({
          ohmylms_archive_page_row: {
            value: [].concat(jJ(h), [{
              row_display_criteria: "all",
              row_heading: ""
            }])
          }
        });
      }
    }, (0, b.__)("Add Row", "ohmylms")))))));
  };

const DJ = (0, g.memo)(NJ);

var WJ = function (e) {
  var t = e.layout,
    n = void 0 === t ? "grid-style1" : t,
    r = e.lastItem,
    a = void 0 !== r && r;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-dummy-card-wrapper ".concat(n)
  }, React.createElement("svg", {
    fill: "none",
    width: "79",
    height: "42",
    viewBox: "0 0 79 42",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#EFF1F7",
    stroke: "#EFF1F7",
    d: "M.5 6A5.5 5.5 0 016 .5h66.93a5.5 5.5 0 015.5 5.5v35.355H.5V6z"
  }), React.createElement("path", {
    fill: "#CDCFD5",
    d: "M47.977 26.193l-3.841-8.948c-.7-1.638-1.743-2.567-2.933-2.629-1.178-.06-2.319.758-3.19 2.323l-2.331 4.169c-.491.88-1.19 1.405-1.952 1.466-.773.074-1.546-.33-2.171-1.124l-.27-.342c-.872-1.088-1.951-1.614-3.056-1.504-1.104.11-2.049.868-2.675 2.103l-2.122 4.217a4.84 4.84 0 00.208 4.743 4.872 4.872 0 004.16 2.31H43.46a4.898 4.898 0 004.086-2.188 4.77 4.77 0 00.43-4.596z"
  }), React.createElement("path", {
    fill: "#E4E6EA",
    d: "M29.515 15.873a4.14 4.14 0 004.147-4.132 4.14 4.14 0 00-4.147-4.132 4.14 4.14 0 00-4.148 4.132 4.14 4.14 0 004.148 4.132z"
  })), React.createElement("div", {
    className: "ohmylms-dummy-card-content"
  }, "grid-style1" === n && React.createElement(React.Fragment, null, React.createElement("span", {
    className: "ohmylms-dummy-card-title"
  }), React.createElement("span", {
    className: "ohmylms-dummy-card-description"
  }), React.createElement("span", {
    className: "ohmylms-dummy-card-price"
  }, "$10.00"), React.createElement("span", {
    className: "ohmylms-dummy-card-button"
  }, React.createElement("span", {
    className: "ohmylms-dummy-card-button-text"
  }))), "grid-style2" === n && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-dummy-card-header"
  }, React.createElement("span", {
    className: "ohmylms-dummy-card-description"
  }), React.createElement("span", {
    className: "ohmylms-dummy-card-description"
  })), React.createElement("span", {
    className: "ohmylms-dummy-card-title"
  }), React.createElement("span", {
    className: "ohmylms-dummy-card-title last-child"
  }), React.createElement("span", {
    className: "ohmylms-dummy-card-description"
  })), "grid-style3" === n && React.createElement(React.Fragment, null, React.createElement("span", {
    className: "ohmylms-dummy-card-title"
  }), React.createElement("span", {
    className: "ohmylms-dummy-card-description"
  }), React.createElement("div", {
    className: "ohmylms-dummy-card-ratings"
  }, Array.from({
    length: 5
  }).map(function (e, t) {
    return React.createElement("svg", {
      key: t,
      fill: "none",
      width: "7",
      height: "6",
      viewBox: "0 0 7 6",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "#757C8E",
      d: "M6.326 2.335a.139.139 0 00-.111-.094l-1.767-.256L3.657.39c-.046-.093-.2-.093-.246 0l-.79 1.595-1.767.256a.138.138 0 00-.11.094.133.133 0 00.034.14l1.279 1.24-.302 1.755a.137.137 0 00.199.144l1.58-.828 1.58.828a.139.139 0 00.145-.01.136.136 0 00.054-.134l-.301-1.754L6.29 2.474a.135.135 0 00.036-.14z"
    }));
  })), React.createElement("span", {
    className: "ohmylms-dummy-card-price"
  }, "$10.00")), "grid-style3" === n && React.createElement(React.Fragment, null, React.createElement("span", {
    className: "ohmylms-dummy-card-title"
  }), React.createElement("span", {
    className: "ohmylms-dummy-card-description"
  }))), "grid-style4" === n && React.createElement("div", {
    className: "ohmylms-dummy-card-footer"
  }, React.createElement("span", {
    className: "ohmylms-dummy-card-description"
  }), React.createElement("span", {
    className: "ohmylms-dummy-card-description"
  }))), a && "grid-style3" === n && React.createElement("div", {
    className: "ohmylms-dummy-card-carrosole"
  }, React.createElement("svg", {
    fill: "none",
    width: "19",
    height: "18",
    viewBox: "0 0 19 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("ellipse", {
    cx: "9.034",
    cy: "9",
    fill: "#757C8E",
    rx: "9.034",
    ry: "9"
  }), React.createElement("path", {
    fill: "#fff",
    stroke: "#fff",
    strokeWidth: ".2",
    d: "M10.547 8.766l-2.738-2.67A.338.338 0 007.572 6a.338.338 0 00-.238.096l-.202.196a.323.323 0 000 .465L9.43 8.999l-2.3 2.244a.322.322 0 000 .465l.201.196A.338.338 0 007.57 12c.09 0 .175-.034.238-.096l2.74-2.672a.322.322 0 00.098-.233.322.322 0 00-.098-.233z"
  }))));
};

const zJ = (0, g.memo)(WJ);

var BJ = function (e) {
  var t = e.children,
    n = e.className,
    r = void 0 === n ? "" : n,
    a = e.device,
    o = void 0 === a ? "desktop" : a;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-layout-frame ".concat(o, " ").concat(r)
  }, React.createElement("div", {
    className: "ohmylms-frame-header"
  }, Array.from({
    length: 3
  }).map(function (e, t) {
    return React.createElement("svg", {
      key: t,
      fill: "none",
      width: "7",
      height: "7",
      viewBox: "0 0 7 7",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("circle", {
      cx: "3.5",
      cy: "3.5",
      r: "3.5",
      fill: "#D9D9D9"
    }));
  })), React.createElement("div", {
    className: "ohmylms-frame-contents-wrapper"
  }, t)), (0, wm.createPortal)(React.createElement("style", null, "\n.ohmylms-layout-frame {\n    border-radius: 8px;\n    border: 1px solid #EBECED;\n    background: #FFFFFF;\n    min-width: 400px;\n    min-height: 100px;\n}\n.ohmylms-layout-frame .ohmylms-frame-header {\n    border-radius: 10px 10px 0 0;\n    border-bottom: 1px solid #EBECED;\n    padding: 10px 17px;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.ohmylms-layout-frame .ohmylms-frame-contents-wrapper {\n    padding: 30px;\n    display: flex;\n    align-items: stretch;\n    gap: 10px;\n}\n\n@media screen and (max-width: 1499px) {\n    .ohmylms-layout-frame .ohmylms-frame-contents-wrapper {\n        padding: 20px;\n    }\n    .ohmylms-layout-frame {\n        min-width: 100%;\n    }\n\n\n}\n\n"), document.head));
};

const LJ = (0, g.memo)(BJ);

var VJ = function () {
  var e,
    t,
    n,
    r,
    a,
    o,
    i,
    l = (0, y.useSelect)(function (e) {
      return e(T.default).getDesignSettings();
    }, []),
    c = (null == l || null === (e = l.ohmylms_archive_page_layout_style) || void 0 === e ? void 0 : e.value) || "grid-style1",
    u = (null == l || null === (t = l.ohmylms_columns_per_row) || void 0 === t ? void 0 : t.value) || "4",
    s = (null == l || null === (n = l.ohmylms_archive_page_search_is_enabled) || void 0 === n ? void 0 : n.value) || "no",
    d = (null == l || null === (r = l.ohmylms_archive_page_sorting_is_enabled) || void 0 === r ? void 0 : r.value) || "no",
    m = (null == l || null === (a = l.ohmylms_archive_page_filter_is_enabled) || void 0 === a ? void 0 : a.value) || "no",
    p = (null == l || null === (o = l.ohmylms_archive_page_category_is_enabled) || void 0 === o ? void 0 : o.value) || "no",
    f = (null == l || null === (i = l.ohmylms_archive_page_row) || void 0 === i ? void 0 : i.value) || [];
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "ohmylms-global-layout-preview"
  }, React.createElement(LJ, null, "yes" === m && ["grid-style1", "grid-style2"].includes(c) && React.createElement("div", {
    className: "ohmylms-frame-contents-sidebar"
  }, React.createElement("svg", {
    fill: "none",
    width: "42",
    height: "230",
    viewBox: "0 0 42 230",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#000D25",
    d: "M14.71 8V1h4.39v.86h-3.33v2.21h2.76v.85h-2.76V8h-1.06zm5.99-5.9a.72.72 0 01-.5-.18.638.638 0 01-.19-.47c0-.187.063-.34.19-.46.133-.127.3-.19.5-.19s.363.063.49.19c.133.12.2.273.2.46a.622.622 0 01-.2.47.684.684 0 01-.49.18zM20.17 8V3.04h1.06V8h-1.06zm2.459 0V.8h1.06V8h-1.06zm4.482 0c-.486 0-.873-.117-1.16-.35-.286-.24-.43-.663-.43-1.27V3.93h-.85v-.89h.85l.13-1.26h.93v1.26h1.4v.89h-1.4v2.45c0 .273.057.463.17.57.12.1.324.15.61.15h.57V8h-.82zm4.156.12a2.61 2.61 0 01-1.3-.32 2.358 2.358 0 01-.88-.91c-.213-.387-.32-.837-.32-1.35 0-.52.104-.977.31-1.37.214-.393.507-.7.88-.92.38-.22.82-.33 1.32-.33.487 0 .91.11 1.27.33.36.213.64.5.84.86a2.409 2.409 0 01.29 1.41c0 .073-.003.157-.01.25h-3.86c.034.48.19.847.47 1.1.287.247.617.37.99.37.3 0 .55-.067.75-.2.207-.14.36-.327.46-.56h1.06a2.24 2.24 0 01-.8 1.17c-.393.313-.883.47-1.47.47zm0-4.33a1.49 1.49 0 00-.94.32c-.273.207-.44.52-.5.94h2.8c-.02-.387-.156-.693-.41-.92-.253-.227-.57-.34-.95-.34zM34.787 8V3.04h.95l.09.94c.174-.327.413-.583.72-.77.314-.193.69-.29 1.13-.29v1.11h-.29c-.293 0-.556.05-.79.15-.227.093-.41.257-.55.49-.133.227-.2.543-.2.95V8h-1.06z"
  }), React.createElement("path", {
    fill: "#A1A1AA",
    fillRule: "evenodd",
    d: "M6.3 0c.249 0 .45.224.45.5V1h1.8c.249 0 .45.224.45.5s-.201.5-.45.5h-1.8v.5c0 .276-.201.5-.45.5s-.45-.224-.45-.5v-2c0-.276.201-.5.45-.5zM0 1.5c0-.276.201-.5.45-.5H4.5c.249 0 .45.224.45.5s-.201.5-.45.5H.45C.201 2 0 1.776 0 1.5zM2.7 3c.249 0 .45.224.45.5v2c0 .276-.201.5-.45.5s-.45-.224-.45-.5V5H.45C.201 5 0 4.776 0 4.5S.201 4 .45 4h1.8v-.5c0-.276.201-.5.45-.5zm1.35 1.5c0-.276.201-.5.45-.5h4.05c.249 0 .45.224.45.5s-.201.5-.45.5H4.5c-.249 0-.45-.224-.45-.5zM6.3 6c.249 0 .45.224.45.5V7h1.8c.249 0 .45.224.45.5s-.201.5-.45.5h-1.8v.5c0 .276-.201.5-.45.5s-.45-.224-.45-.5v-2c0-.276.201-.5.45-.5zM0 7.5c0-.276.201-.5.45-.5H4.5c.249 0 .45.224.45.5s-.201.5-.45.5H.45C.201 8 0 7.776 0 7.5z",
    clipRule: "evenodd"
  }), React.createElement("rect", {
    width: "23",
    height: "3",
    x: "18",
    y: "36",
    fill: "#E4E6EA",
    rx: "1.5"
  }), React.createElement("rect", {
    width: "11",
    height: "3",
    x: "18",
    y: "54",
    fill: "#E4E6EA",
    rx: "1.5"
  }), React.createElement("rect", {
    width: "23",
    height: "3",
    x: "18",
    y: "72",
    fill: "#E4E6EA",
    rx: "1.5"
  }), React.createElement("rect", {
    width: "11",
    height: "11",
    x: ".5",
    y: "32.5",
    stroke: "#DEDEE6",
    rx: "3.5"
  }), React.createElement("rect", {
    width: "11",
    height: "11",
    x: ".5",
    y: "50.5",
    stroke: "#DEDEE6",
    rx: "3.5"
  }), React.createElement("rect", {
    width: "11",
    height: "11",
    x: ".5",
    y: "68.5",
    stroke: "#DEDEE6",
    rx: "3.5"
  }), React.createElement("rect", {
    width: "42",
    height: "3",
    y: "19",
    fill: "#BDBFC7",
    rx: "1.5"
  }), React.createElement("rect", {
    width: "15",
    height: "3",
    x: "18",
    y: "111",
    fill: "#E4E6EA",
    rx: "1.5"
  }), React.createElement("rect", {
    width: "23",
    height: "3",
    x: "18",
    y: "129",
    fill: "#E4E6EA",
    rx: "1.5"
  }), React.createElement("rect", {
    width: "11",
    height: "3",
    x: "18",
    y: "147",
    fill: "#E4E6EA",
    rx: "1.5"
  }), React.createElement("rect", {
    width: "11",
    height: "11",
    x: ".5",
    y: "107.5",
    stroke: "#DEDEE6",
    rx: "3.5"
  }), React.createElement("rect", {
    width: "11",
    height: "11",
    x: ".5",
    y: "125.5",
    stroke: "#DEDEE6",
    rx: "3.5"
  }), React.createElement("rect", {
    width: "11",
    height: "11",
    x: ".5",
    y: "143.5",
    stroke: "#DEDEE6",
    rx: "3.5"
  }), React.createElement("rect", {
    width: "26",
    height: "3",
    y: "94",
    fill: "#BDBFC7",
    rx: "1.5"
  }), React.createElement("rect", {
    width: "15",
    height: "3",
    x: "18",
    y: "186",
    fill: "#E4E6EA",
    rx: "1.5"
  }), React.createElement("rect", {
    width: "23",
    height: "3",
    x: "18",
    y: "204",
    fill: "#E4E6EA",
    rx: "1.5"
  }), React.createElement("rect", {
    width: "8",
    height: "3",
    x: "18",
    y: "222",
    fill: "#E4E6EA",
    rx: "1.5"
  }), React.createElement("rect", {
    width: "11",
    height: "11",
    x: ".5",
    y: "182.5",
    stroke: "#DEDEE6",
    rx: "3.5"
  }), React.createElement("rect", {
    width: "11",
    height: "11",
    x: ".5",
    y: "200.5",
    stroke: "#DEDEE6",
    rx: "3.5"
  }), React.createElement("rect", {
    width: "11",
    height: "11",
    x: ".5",
    y: "218.5",
    stroke: "#DEDEE6",
    rx: "3.5"
  }), React.createElement("rect", {
    width: "26",
    height: "3",
    y: "169",
    fill: "#BDBFC7",
    rx: "1.5"
  }))), React.createElement("div", {
    className: "ohmylms-frame-contents-main"
  }, ["grid-style1", "grid-style2"].includes(c) && ("yes" === s || "yes" === d) && React.createElement("div", {
    className: "ohmylms-frame-contents-actions"
  }, "yes" === s && React.createElement("svg", {
    fill: "none",
    width: "77",
    height: "20",
    viewBox: "0 0 77 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "76",
    height: "19",
    x: ".5",
    y: ".5",
    stroke: "#E4E6EA",
    rx: "3.5"
  }), React.createElement("path", {
    fill: "#A1A1AA",
    stroke: "#A1A1AA",
    strokeWidth: ".4",
    d: "M15.867 13.23l-1.27-1.267a4.275 4.275 0 10-.633.634l1.266 1.27a.45.45 0 00.77-.319.45.45 0 00-.133-.318zM7.916 9.283a3.367 3.367 0 116.734 0 3.367 3.367 0 01-6.734 0z"
  })), "yes" === d && React.createElement("svg", {
    fill: "none",
    width: "79",
    height: "20",
    viewBox: "0 0 79 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "77.64",
    height: "19",
    x: ".5",
    y: ".5",
    stroke: "#E4E6EA",
    rx: "3.5"
  }), React.createElement("path", {
    fill: "#A1A1AA",
    d: "M63.107 8.75l2.56 3.091A.442.442 0 0066 12a.427.427 0 00.334-.159l2.56-3.09c.244-.295.041-.751-.334-.751h-5.12c-.375 0-.578.456-.333.75z"
  }), React.createElement("rect", {
    width: "29",
    height: "3",
    x: "8",
    y: "8",
    fill: "#E4E6EA",
    rx: "1.5"
  }))), ["grid-style4", "grid-style3"].includes(c) && "yes" === p && React.createElement("div", {
    className: "ohmylms-frame-contents-category"
  }, React.createElement("svg", {
    fill: "none",
    width: "350",
    height: "15",
    viewBox: "0 0 350 15",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "30",
    height: "4",
    x: "47",
    fill: "#BDBFC7",
    rx: "2"
  }), React.createElement("rect", {
    width: "20",
    height: "4",
    x: "87",
    fill: "#E4E6EA",
    rx: "2"
  }), React.createElement("rect", {
    width: "20",
    height: "4",
    x: "219",
    fill: "#E4E6EA",
    rx: "2"
  }), React.createElement("rect", {
    width: "26",
    height: "4",
    x: "117",
    fill: "#E4E6EA",
    rx: "2"
  }), React.createElement("rect", {
    width: "26",
    height: "4",
    x: "249",
    fill: "#E4E6EA",
    rx: "2"
  }), React.createElement("rect", {
    width: "18",
    height: "4",
    x: "153",
    fill: "#E4E6EA",
    rx: "2"
  }), React.createElement("rect", {
    width: "18",
    height: "4",
    x: "285",
    fill: "#E4E6EA",
    rx: "2"
  }), React.createElement("rect", {
    width: "28",
    height: "4",
    x: "181",
    fill: "#E4E6EA",
    rx: "2"
  }), React.createElement("path", {
    fill: "#E4E6EA",
    d: "M0 14h350v1H0z"
  }))), React.createElement("div", {
    className: "ohmylms-frame-contents-main-content"
  }, Array.from({
    length: ["grid-style1", "grid-style2"].includes(c) ? 2 : f.length
  }).map(function (e, t) {
    return React.createElement("div", {
      className: "ohmylms-frame-contents-row"
    }, "grid-style4" === c && React.createElement("div", {
      className: "ohmylms-frame-contents-row-header"
    }, React.createElement("span", {
      className: "ohmylms-dummy-card-title"
    }), React.createElement("svg", {
      fill: "none",
      width: "40",
      height: "19",
      viewBox: "0 0 40 19",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      stroke: "#E4E6EA",
      d: "M39.5 9.454c0 4.645-3.801 8.418-8.5 8.418s-8.5-3.773-8.5-8.418c0-4.646 3.801-8.419 8.5-8.419s8.5 3.774 8.5 8.419z"
    }), React.createElement("g", {
      clipPath: "url(#clip0_5070_962)"
    }, React.createElement("path", {
      fill: "#757C8E",
      stroke: "#757C8E",
      strokeWidth: ".4",
      d: "M32.667 9.685l-2.67 2.646a.327.327 0 01-.232.095.327.327 0 01-.232-.095l-.196-.195a.324.324 0 010-.46l2.242-2.222-2.245-2.224a.322.322 0 010-.46l.197-.195a.327.327 0 01.232-.095c.088 0 .17.034.232.095l2.672 2.648a.322.322 0 01.096.231c0 .088-.034.17-.096.231z"
    })), React.createElement("path", {
      stroke: "#E4E6EA",
      d: "M.5 9.453C.5 4.808 4.301 1.034 9 1.034s8.5 3.774 8.5 8.419c0 4.645-3.801 8.418-8.5 8.418S.5 14.098.5 9.453z"
    }), React.createElement("g", {
      clipPath: "url(#clip1_5070_962)"
    }, React.createElement("path", {
      fill: "#757C8E",
      stroke: "#757C8E",
      strokeWidth: ".4",
      d: "M7.332 9.221l2.67-2.646a.327.327 0 01.233-.095c.088 0 .17.034.232.095l.196.195a.324.324 0 010 .46L8.421 9.452l2.245 2.224a.322.322 0 010 .46l-.197.195a.328.328 0 01-.232.095.328.328 0 01-.232-.095L7.332 9.683a.322.322 0 01-.095-.23c0-.088.034-.17.095-.232z"
    })), React.createElement("defs", null, React.createElement("clipPath", {
      id: "clip0_5070_962"
    }, React.createElement("path", {
      fill: "#fff",
      d: "M0 0h6v5.946H0z",
      transform: "matrix(1 0 0 -1 28 12.426)"
    })), React.createElement("clipPath", {
      id: "clip1_5070_962"
    }, React.createElement("path", {
      fill: "#fff",
      d: "M0 0h6v5.946H0z",
      transform: "matrix(-1 0 0 1 12 6.48)"
    }))))), "grid-style3" === c && React.createElement("div", {
      className: "ohmylms-frame-contents-row-header"
    }, React.createElement("span", {
      className: "ohmylms-dummy-card-title"
    })), React.createElement("div", {
      className: "ohmylms-frame-contents-cards"
    }, Array.from({
      length: Number(u)
    }).map(function (e, t) {
      return React.createElement(zJ, {
        lastItem: t === Number(u) - 1,
        key: t,
        layout: c
      });
    })));
  }), ["grid-style1", "grid-style2"].includes(c) && React.createElement("div", {
    className: "ohmylms-frame-contents-load-more-button"
  }, React.createElement("span", {
    className: "ohmylms-dummy-card-button"
  }, React.createElement("span", {
    className: "ohmylms-dummy-card-button-text"
  }), React.createElement("span", {
    className: "ohmylms-dummy-card-button-text"
  }))))))));
};

const HJ = (0, g.memo)(VJ);

var GJ = ["isItProFeature"],
  UJ = function (e) {
    return e.isItProFeature, function (e, t) {
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
    }(e, GJ), React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
      variant: "secondary",
      isBorderless: !0,
      margin: "0 16px"
    }, React.createElement(I.SpacerWP, {
      padding: 4,
      margin: 0
    }, React.createElement(I.SpacerWP, {
      marginBottom: 5,
      margin: 0
    }, React.createElement(EJ, {
      title: (0, b.__)("Layout Settings", "ohmylms"),
      level: 4
    })), React.createElement(I.FlexWP, {
      className: "ohmylms-course-list-layout-config-wrapper",
      align: "start",
      gap: 6
    }, React.createElement(I.FlexItemWP, {
      style: {
        width: "".concat(60, "%"),
        minWidth: "370px"
      },
      className: "ohmylms-course-list-layout-config"
    }, React.createElement(Ea, {
      isBorderless: !0
    }, React.createElement(I.SpacerWP, {
      padding: 4,
      margin: 0,
      marginBottom: 0
    }, React.createElement(DJ, null)))), React.createElement(I.FlexItemWP, {
      style: {
        width: "".concat(60, "%")
      },
      className: "ohmylms-course-list-layout-preview"
    }, React.createElement(HJ, null))))));
  };

const qJ = (0, g.memo)(UJ);
