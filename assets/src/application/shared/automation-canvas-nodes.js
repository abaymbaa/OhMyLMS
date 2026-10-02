// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function QI(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function ZI() {
  var e = (0, g.useRef)(),
    t = function (e, t) {
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
          if ("string" == typeof e) return QI(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? QI(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    n = t[0],
    r = t[1],
    a = (0, y.useSelect)(function (e) {
      return {
        inserterPopover: e(Lf).getInserterPopover()
      };
    }, []).inserterPopover,
    o = (0, y.useDispatch)(Lf).setInserterPopover,
    i = (0, g.useCallback)(function (e) {
      r(!1);
    }, []);
  return a ? React.createElement(React.Fragment, null, React.createElement(q.Popover, {
    className: "mintmrm-automaiton__block-popover",
    ref: e,
    anchor: {
      getBoundingClientRect: function () {
        return a.anchor.getBoundingClientRect();
      }
    },
    onClose: function () {
      n || o(void 0);
    }
  }, React.createElement(YI, {
    onInsert: i
  }))) : null;
}

function $I() {
  return $I = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $I.apply(null, arguments);
}

function KI(e) {
  var t = e.onClick,
    n = e.previousStepId,
    r = e.condition,
    a = e.logicalStepId,
    o = (0, p.createContext)(q.__unstableUseCompositeState),
    i = (0, g.useContext)(o);
  return React.createElement(q.__unstableCompositeItem, $I({}, i(), {
    role: "treeitem",
    className: "mintmrm-automation__add-step-button",
    focusable: !0,
    "data-previous-step-id": n,
    "data-condition-type": r,
    "data-condition-step-id": a,
    onClick: function (e) {
      e.stopPropagation();
      var n = e.target.closest("button");
      t(n);
    }
  }), React.createElement($h, null));
}

const JI = (0, p.memo)(function (e) {
  var t = e.previousStepId,
    n = (0, y.dispatch)(Lf).setInserterPopover;
  return React.createElement("div", {
    className: "mintmrm-automation-step__separator"
  }, React.createElement(KI, {
    onClick: function (e) {
      return n({
        anchor: e,
        type: "steps"
      });
    },
    previousStepId: t
  }));
});

function XI(e) {
  return e.icon;
}

function eF() {
  return React.createElement("svg", {
    width: "14",
    height: "15",
    fill: "none",
    viewBox: "0 0 14 15",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "#A4A8B5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M7.09 6.34a1.061 1.061 0 00-.193 0 2.578 2.578 0 01-2.49-2.583c0-1.43 1.154-2.59 2.59-2.59A2.587 2.587 0 017.09 6.34zM4.176 9.368c-1.412.945-1.412 2.485 0 3.425 1.604 1.073 4.235 1.073 5.84 0 1.41-.945 1.41-2.486 0-3.425-1.6-1.067-4.23-1.067-5.84 0z"
  }));
}

function tF() {
  return tF = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tF.apply(null, arguments);
}

const nF = (0, p.memo)(function (e) {
    var t,
      n = e.step,
      r = e.isSelected,
      a = e.stepIndex,
      o = e.condition,
      i = e.conditionIndex,
      l = (0, y.useSelect)(function (e) {
        return {
          stepType: e(Lf).getStepType(n.key),
          error: e(Lf).getStepError(n.id),
          showAnalyticsStat: e(Lf).getAnalyticsStat()
        };
      }, [n]),
      c = l.stepType,
      u = (l.error, l.showAnalyticsStat),
      s = (0, p.createContext)(q.__unstableUseCompositeState),
      d = (0, g.useContext)(s),
      m = (0, y.useRegistry)().batch,
      f = (0, y.useDispatch)(Lf),
      v = f.openSidebar,
      h = f.selectStep,
      _ = f.deleteStep,
      w = f.setMaybeSave,
      E = f.deleteConditionalStep;
    t = null != o && null != i ? "step-".concat(a, "-").concat(o, "-").concat(i) : "step-".concat(a);
    var S = null != c ? c : function (e) {
        var t = "trigger" === e.type;
        return {
          title: t ? (0, b.__)("Unknown trigger", "mrm") : (0, b.__)("Unknown step", "mrm"),
          subtitle: function () {
            return t ? (0, b.__)("Trigger type not registered", "mrm") : (0, b.__)("Step type not registered", "mrm");
          },
          description: t ? (0, b.__)("Unknown trigger", "mrm") : (0, b.__)("Unknown step", "mrm"),
          group: "trigger" === e.type ? "trigger" : "actions",
          key: e.key,
          foreground: "#8c8f94",
          background: "#dcdcde",
          edit: function () {
            return null;
          },
          icon: function () {
            return XI;
          }
        };
      }(n),
      R = "Not set up yet." == S.subtitle(n) ? "" : "subtitle-changed";
    return React.createElement("div", {
      className: "mintmrm-automation__add-step-wrapper step-type-".concat(n.type)
    }, React.createElement("div", {
      className: "step-btn-wrapper"
    }, React.createElement(q.__unstableCompositeItem, tF({}, d(), {
      role: "treeitem",
      className: Vr()({
        "mintmrm-automation__editor-step": !0,
        "is-selected-step": r,
        "is-unknown-step": !c
      }),
      id: t,
      key: n.id,
      focusable: !0,
      onClick: function () {
        v(Hf), m(function () {
          v(Hf), h(n, a, o, i);
        });
      }
    }), React.createElement("div", {
      className: "mintmrm-automation__editor-step-icon"
    }, React.createElement("span", {
      className: "".concat(S.key, " icon")
    }, S.icon())), React.createElement("div", {
      className: "step-title-area"
    }, React.createElement("label", {
      htmlFor: t,
      className: "mintmrm-automation__editor-step-title"
    }, "trigger" !== n.type ? S.title : (0, b._x)("Trigger", "noun", "mrm")), React.createElement("div", {
      className: "mintmrm-automation__editor-step-subtitle ".concat(R)
    }, "trigger" !== n.type ? S.subtitle(n) : S.title), "trigger" == n.type && React.createElement("div", {
      className: "mintmrm-automation__editor-step-trigger-subtitle ".concat(R)
    }, S.subtitle(n))), u && React.createElement("div", {
      className: "step-stats"
    }, React.createElement("span", {
      className: "single-stats user"
    }, React.createElement(eF, null), null == n ? void 0 : n.enterance), React.createElement("span", {
      className: "single-stats converion-rate"
    }, !0 === isNaN((null == n ? void 0 : n.completed) / (null == n ? void 0 : n.enterance) * 100) ? 0 : ((null == n ? void 0 : n.completed) / (null == n ? void 0 : n.enterance) * 100).toPrecision(3), "%"))), React.createElement("div", {
      className: "mintmrm-automation__editor-step-delete",
      title: "Delete",
      onClick: function () {
        return function (e, t, n) {
          null != t && null != n ? E(e, t, n) : _(e), w(!1);
        }(a, o, i);
      }
    }, React.createElement(Xh.A, null))));
  }),
  rF = (0, p.memo)(function (e) {
    var t = e.previousStepId,
      n = e.condition,
      r = e.logicalStepId,
      a = (0, y.dispatch)(Lf).setInserterPopover;
    return React.createElement("div", {
      className: "mintmrm-automation-step__separator"
    }, React.createElement(KI, {
      onClick: function (e) {
        return a({
          anchor: e,
          type: "condition"
        });
      },
      previousStepId: t,
      condition: n,
      logicalStepId: r
    }));
  }),
  aF = (0, p.memo)(function () {
    return React.createElement("div", {
      className: "no-seperator"
    });
  }),
  oF = (0, p.memo)(function (e) {
    var t = e.stepIndex,
      n = e.step,
      r = (0, y.useSelect)(function (e) {
        return {
          automationData: e(Lf).getAutomationData(),
          selectedStep: e(Lf).getSelectedStep(),
          dataLoader: e(Lf).getDataLoader(),
          updateClicked: e(Lf).getUpdateClicked()
        };
      }, []),
      a = (r.automationData, r.selectedStep);
    return r.dataLoader, r.updateClicked, React.createElement("div", {
      className: "logical-decision-box"
    }, React.createElement("span", {
      className: "logical-text logical-no-text"
    }, (0, b.__)("No", "mrm")), React.createElement("span", {
      className: "logical-text logical-yes-text"
    }, (0, b.__)("Yes", "mrm")), React.createElement("div", {
      className: "single-decision decision-no"
    }, React.createElement(rF, {
      previousStepId: t,
      condition: "no"
    }), n.node_data.no.length > 0 && n.node_data.no.map(function (e, n) {
      return React.createElement(g.Fragment, {
        key: e.step_id
      }, React.createElement(nF, {
        step: e,
        stepIndex: t,
        isSelected: a && e.step_id === a.step_id,
        condition: "no",
        conditionIndex: n
      }), "stopAutomation" === e.key ? React.createElement(aF, null) : React.createElement(rF, {
        previousStepId: t,
        condition: "no",
        logicalStepId: n
      }));
    })), React.createElement("div", {
      className: "single-decision decision-yes"
    }, React.createElement(rF, {
      previousStepId: t,
      condition: "yes"
    }), n.node_data.yes.length > 0 && n.node_data.yes.map(function (e, n) {
      return React.createElement(g.Fragment, {
        key: e.step_id
      }, React.createElement(nF, {
        step: e,
        stepIndex: t,
        isSelected: a && e.step_id === a.step_id,
        condition: "yes",
        conditionIndex: n
      }), "stopAutomation" === e.key ? React.createElement(aF, null) : React.createElement(rF, {
        previousStepId: t,
        condition: "yes",
        logicalStepId: n
      }));
    })));
  });

function iF() {
  return React.createElement("svg", {
    width: "16",
    height: "13",
    fill: "none",
    viewBox: "0 0 16 13",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M12.662 13a.595.595 0 01-.435-.193.686.686 0 01-.18-.467V6.5c0-.175.065-.343.18-.467a.595.595 0 01.435-.193c.163 0 .32.07.435.193.116.124.18.292.18.467v5.84a.686.686 0 01-.18.467.595.595 0 01-.435.194z"
  }), React.createElement("path", {
    fill: "#2D3149",
    d: "M15.384 10.08h-5.44a.595.595 0 01-.436-.193.686.686 0 01-.18-.467c0-.175.065-.343.18-.467a.595.595 0 01.435-.193h5.441c.163 0 .32.07.435.193.116.124.18.292.18.467a.686.686 0 01-.18.467.595.595 0 01-.435.194zM13.44 1.32H.615a.595.595 0 01-.435-.193A.686.686 0 010 .66C0 .485.065.317.18.193A.595.595 0 01.615 0H13.44c.163 0 .32.07.435.193.115.124.18.292.18.467a.686.686 0 01-.18.467.595.595 0 01-.435.194z"
  }), React.createElement("path", {
    fill: "#2D3149",
    d: "M13.44 1.32H.615a.595.595 0 01-.435-.193A.686.686 0 010 .66C0 .485.065.317.18.193A.595.595 0 01.615 0H13.44c.163 0 .32.07.435.193.115.124.18.292.18.467a.686.686 0 01-.18.467.595.595 0 01-.435.194zm0 3.337H.615a.595.595 0 01-.435-.194.686.686 0 01-.18-.467c0-.175.065-.343.18-.467a.595.595 0 01.435-.193H13.44c.163 0 .32.07.435.193.115.124.18.292.18.467a.686.686 0 01-.18.467.595.595 0 01-.435.194zM7.222 7.995H.615A.595.595 0 01.18 7.8.686.686 0 010 7.334c0-.175.065-.343.18-.467a.595.595 0 01.435-.193h6.607c.163 0 .32.07.435.193.115.124.18.292.18.467a.686.686 0 01-.18.467.595.595 0 01-.435.194zm0 3.34H.615a.595.595 0 01-.435-.194.686.686 0 01-.18-.467c0-.175.065-.343.18-.467a.595.595 0 01.435-.193h6.607c.163 0 .32.07.435.193.115.124.18.292.18.467a.686.686 0 01-.18.467.595.595 0 01-.435.194z"
  }));
}

const lF = (0, g.memo)(iF);

function cF() {
  return React.createElement("svg", {
    width: "11",
    height: "13",
    fill: "none",
    viewBox: "0 0 11 13",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M9.78 3.545a.622.622 0 00-.432.173.581.581 0 00-.18.418v6.612a1.12 1.12 0 01-.386.779 1.2 1.2 0 01-.841.29H3.064a1.2 1.2 0 01-.842-.29 1.12 1.12 0 01-.387-.78v-6.61a.581.581 0 00-.178-.418.622.622 0 00-.865 0 .581.581 0 00-.179.418v6.612a2.28 2.28 0 00.745 1.615A2.44 2.44 0 003.064 13H7.94a2.44 2.44 0 001.706-.636 2.281 2.281 0 00.744-1.615V4.136a.581.581 0 00-.179-.418.622.622 0 00-.432-.173zm.609-1.772H7.944V.59a.581.581 0 00-.179-.418A.622.622 0 007.333 0H3.667a.622.622 0 00-.432.173.581.581 0 00-.18.418v1.182H.612a.622.622 0 00-.432.173.581.581 0 000 .835c.115.111.27.173.432.173h9.778a.622.622 0 00.432-.173.581.581 0 000-.835.622.622 0 00-.432-.173zm-6.111 0v-.591h2.444v.59H4.278z"
  }), React.createElement("path", {
    fill: "#2D3149",
    d: "M4.886 9.455V5.32a.581.581 0 00-.179-.417.622.622 0 00-.864 0 .581.581 0 00-.179.417v4.136a.58.58 0 00.179.418.622.622 0 00.864 0 .581.581 0 00.18-.418zm2.449 0V5.32a.581.581 0 00-.178-.417.622.622 0 00-.865 0 .581.581 0 00-.179.417v4.136a.58.58 0 00.18.418.622.622 0 00.864 0 .581.581 0 00.178-.418z"
  }));
}

const uF = (0, g.memo)(cF);

function sF() {
  return React.createElement("svg", {
    width: "18",
    height: "18",
    fill: "none",
    viewBox: "0 0 18 18"
  }, React.createElement("g", {
    fill: "#fff",
    clipPath: "url(#clip0_4095_10813)"
  }, React.createElement("path", {
    d: "M6.563 13.209v3.479a.563.563 0 001.015.332l2.035-2.768-3.05-1.043zM17.764.104a.563.563 0 00-.587-.04L.302 8.876A.564.564 0 00.38 9.908l4.692 1.603 9.99-8.542-7.73 9.314 7.862 2.687a.565.565 0 00.738-.45L17.994.647a.563.563 0 00-.23-.542z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_4095_10813"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h18v18H0z"
  }))));
}

const dF = (0, g.memo)(sF);

function mF() {
  return React.createElement("svg", {
    width: "14",
    height: "14",
    fill: "none",
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M1.001 1.333c.368 0 .667.299.667.667v.669A6.68 6.68 0 017 0a6.63 6.63 0 016.502 5.186.667.667 0 01-1.3.295A5.304 5.304 0 007 1.333 5.34 5.34 0 002.391 4h1.277a.667.667 0 110 1.333H1a.667.667 0 01-.667-.666V2c0-.368.298-.667.667-.667zm12 10.667a.667.667 0 01-.666-.667v-.684A6.616 6.616 0 017 13.333 6.63 6.63 0 01.5 8.147a.667.667 0 011.3-.295 5.303 5.303 0 005.201 4.147 5.294 5.294 0 004.606-2.666h-1.272a.667.667 0 110-1.334H13c.369 0 .667.299.667.667v2.667a.667.667 0 01-.667.666z"
  }));
}

const pF = (0, g.memo)(mF);

function fF(e) {
  return function (e) {
    if (Array.isArray(e)) return hF(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || gF(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function vF(e, t) {
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
  }(e, t) || gF(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function gF(e, t) {
  if (e) {
    if ("string" == typeof e) return hF(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hF(e, t) : void 0;
  }
}

function hF(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

const yF = (0, p.memo)(function () {
  var e,
    t,
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
    m,
    f,
    v,
    _,
    w,
    E = null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.open_ai_key,
    S = vF((0, g.useState)(), 2),
    R = S[0],
    x = S[1],
    C = vF((0, g.useState)(), 2),
    P = (C[0], C[1]),
    O = vF((0, g.useState)(!1), 2),
    k = O[0],
    j = O[1],
    A = vF((0, g.useState)([]), 2),
    M = A[0],
    T = A[1],
    I = vF((0, g.useState)(), 2),
    F = I[0],
    N = I[1],
    D = vF((0, g.useState)(!1), 2),
    W = D[0],
    z = D[1],
    B = vF((0, g.useState)(!1), 2),
    L = B[0],
    V = B[1],
    H = (0, y.useSelect)(function (e) {
      return {
        selectedStepIndex: e(Lf).getSelectedStepIndex(),
        isShowAiModal: e(Lf).getOpenAIModal(),
        selectField: e(Lf).getOpenAIModalField(),
        selectedStep: e(Lf).getSelectedStep(),
        aiModalHeadingText: e(Lf).getOpenAIModalHeadingText(),
        promptType: e(Lf).getOpenAIModalPromptType(),
        selectedStepCondition: e(Lf).getSelectedStepCondition(),
        selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex()
      };
    }, []),
    G = H.selectedStepIndex,
    U = H.isShowAiModal,
    q = H.selectField,
    Y = (H.selectedStep, H.aiModalHeadingText),
    Q = H.promptType,
    Z = H.selectedStepCondition,
    $ = H.selectedLogicalStepIndex,
    K = (0, y.useDispatch)(Lf).setOpenAIModal,
    J = function (e) {
      switch (e) {
        case "general":
          j(!0);
          break;
        case "regenerate":
          z(!0);
          break;
        case "generate-more":
          V(!0);
      }
      var t = {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(null == E ? void 0 : E.secret_key)
        },
        n = {
          messages: [{
            role: "system",
            content: "subject" === Q ? "Give me subject lines about " + R : "Give me email preview text about " + R + " within 1 sentence."
          }],
          max_tokens: 1024,
          model: "gpt-3.5-turbo",
          temperature: .7,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0
        };
      fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: t,
        body: JSON.stringify(n)
      }).then(function (e) {
        return e.json();
      }).then(function (t) {
        if (t.error) N(t.error.message), j(!1), z(!1), V(!1);else {
          var n,
            r = t.choices[0].message.content.split("\n").filter(function (e) {
              return "" !== e.trim();
            });
          n = "generate-more" === e ? [].concat(fF(r), fF(M)) : r, T(n), j(!1), z(!1), V(!1), P(R);
        }
      }).catch(function (e) {
        return console.error(e);
      });
    };
  return (0, p.useEffect)(function () {
    document.querySelector(".interface-interface-skeleton__content").style.zIndex = U ? "1" : "0";
  }, [U]), h().createElement("div", {
    className: "mintmrm-template-modal mintmrm-openai-modal ".concat(U ? "active" : "")
  }, h().createElement("div", {
    className: "template-modal-inner"
  }, h().createElement("div", {
    className: "cross-icon",
    title: "Close",
    onClick: function () {
      return K(!1, ""), T([]), x(""), void N("");
    }
  }, h().createElement(Xh.A, null)), h().createElement("div", {
    className: "template-modal-overflow"
  }, h().createElement("div", {
    className: "template-modal-body ".concat(M.length > 0 ? "get-result" : "")
  }, M.length > 0 ? h().createElement(h().Fragment, null, h().createElement("div", {
    className: "openai-modal-header"
  }, h().createElement(pP.default, null), h().createElement("h4", null, Y))) : h().createElement(h().Fragment, null, h().createElement("div", {
    className: "welcome-title"
  }, h().createElement(pP.default, null), h().createElement("h2", {
    className: "title"
  }, Y))), h().createElement("div", {
    className: "openai-input-wrapper"
  }, h().createElement("div", {
    className: "pos-relative"
  }, !(null !== (t = window) && void 0 !== t && null !== (t = t.MRM_Vars) && void 0 !== t && t.is_mailmint_pro_license_active) && h().createElement("span", {
    className: "pro-tag-with-icon"
  }, h().createElement(sO, null)), null !== (n = window) && void 0 !== n && null !== (n = n.MRM_Vars) && void 0 !== n && n.is_mailmint_pro_license_active ? null != E && E.is_integrated ? h().createElement(h().Fragment, null, h().createElement("div", {
    className: "form-group"
  }, "body" !== Q && h().createElement("label", null, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r ? void 0 : r.mint_trans.WhatIsThisEmailAbout), h().createElement("div", {
    className: "pos-relative"
  }, h().createElement("input", {
    className: "openai-input",
    type: "text",
    value: R,
    placeholder: "e.g. 50% off for Christmas",
    onChange: function (e) {
      x(e.target.value);
    },
    onKeyDown: function (e) {
      return function (e) {
        "Enter" === e.key && J("general");
      }(e);
    }
  }), h().createElement("span", {
    className: "generate-button",
    onClick: function () {
      return J("general");
    }
  }, k ? h().createElement("span", {
    className: "dot-wrapper"
  }, h().createElement("span", {
    className: "dot-one"
  }), h().createElement("span", {
    className: "dot-two"
  }), h().createElement("span", {
    className: "dot-three"
  })) : h().createElement(dF, null))))) : h().createElement("a", {
    href: "admin.php?page=mrm-admin#/integrations",
    target: "_blank",
    className: "mintmrm-btn"
  }, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.ConnectOpenAI) : h().createElement(h().Fragment, null, h().createElement("div", {
    className: "pos-relative"
  }, h().createElement("input", {
    className: "openai-input disabled",
    type: "text",
    placeholder: "e.g. 50% off for Christmas",
    readOnly: !0
  }), h().createElement("span", {
    className: "generate-button disabled"
  }, h().createElement(dF, null))))), h().createElement("p", {
    className: F ? "error-message show" : "error-message"
  }, F)), M.length > 0 && h().createElement(h().Fragment, null, h().createElement("div", {
    className: "action-btns"
  }, W || L ? h().createElement("button", {
    type: "button",
    className: "regenerate disabled ".concat(W ? "regenerating" : "")
  }, h().createElement("p", {
    className: "btn-tooltip"
  }, (0, b.__)("Regenerate the following suggestions and update the results", "mrm")), h().createElement(pF, null), null === (o = window.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.Regenerate) : h().createElement("button", {
    type: "button",
    className: "regenerate",
    onClick: function () {
      return J("regenerate");
    }
  }, h().createElement("p", {
    className: "btn-tooltip"
  }, null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.RegenerateTooltip), h().createElement(pF, null), null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.Regenerate), W || L ? h().createElement("button", {
    type: "button",
    className: "disabled"
  }, h().createElement("p", {
    className: "btn-tooltip"
  }, null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.GenerateMoreTooltip), h().createElement(lF, null), L ? null === (u = window) || void 0 === u || null === (u = u.MRM_Vars) || void 0 === u || null === (u = u.mint_trans) || void 0 === u ? void 0 : u.Generating : null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s || null === (s = s.mint_trans) || void 0 === s ? void 0 : s.GenerateMore) : h().createElement("button", {
    type: "button",
    onClick: function () {
      return J("generate-more");
    }
  }, h().createElement("p", {
    className: "btn-tooltip"
  }, null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.GenerateMoreTooltip), h().createElement(lF, null), null === (m = window) || void 0 === m || null === (m = m.MRM_Vars) || void 0 === m || null === (m = m.mint_trans) || void 0 === m ? void 0 : m.GenerateMore), W || L ? h().createElement("button", {
    type: "button",
    className: "disabled"
  }, h().createElement("p", {
    className: "btn-tooltip"
  }, null === (f = window) || void 0 === f || null === (f = f.MRM_Vars) || void 0 === f || null === (f = f.mint_trans) || void 0 === f ? void 0 : f.ClearPromptTooltip), h().createElement(uF, null), null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v || null === (v = v.mint_trans) || void 0 === v ? void 0 : v.ClearAll) : h().createElement("button", {
    type: "button",
    onClick: function () {
      T([]), x(""), N("");
    }
  }, h().createElement("p", {
    className: "btn-tooltip"
  }, null === (_ = window) || void 0 === _ || null === (_ = _.MRM_Vars) || void 0 === _ || null === (_ = _.mint_trans) || void 0 === _ ? void 0 : _.ClearPromptTooltip), h().createElement(uF, null), null === (w = window) || void 0 === w || null === (w = w.MRM_Vars) || void 0 === w || null === (w = w.mint_trans) || void 0 === w ? void 0 : w.ClearAll)), h().createElement("ul", {
    className: "open-ai-results"
  }, M.map(function (e) {
    return h().createElement("li", {
      className: "single-result",
      key: e
    }, h().createElement("span", {
      className: "result-icon"
    }, h().createElement(pP.default, null)), h().createElement("span", {
      className: "result-text"
    }, e.replace(/^\d+\.\s+/, "")), h().createElement("span", {
      className: "use-this-btn",
      onClick: function (t) {
        !function (e, t, n) {
          t = t.replace(/^\d+\.\s/, ""), "subject" === n && (0, y.dispatch)(Lf).updateStepArgs(G, Z, $, "message_data", "subject", t), "preview" === n && (0, y.dispatch)(Lf).updateStepArgs(G, Z, $, "message_data", "email_preview_text", t), "twilio_message_body" === n && (0, y.dispatch)(Lf).updateStepArgs(G, Z, $, "twilio_data", "message_body", t), K(!1, ""), T([]), x("");
        }(0, e, q);
      }
    }, (0, b.__)("use", "mrm")));
  })))))));
});

var bF = [{
  title: "Automation Overview",
  videoLink: "https://www.youtube.com/embed/3uCibk4eg_k"
}, {
  title: "WooCommerce Playlist",
  videoLink: "https://www.youtube.com/playlist?list=PLvw5RepmoKUv59D8bXnupazBJQlPuqFSp"
}];

const _F = (0, p.memo)(function () {
    return React.createElement("svg", {
      width: "26",
      height: "26",
      fill: "none",
      viewBox: "0 0 26 26",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "#02C4FB",
      stroke: "#02C4FB",
      strokeWidth: ".8",
      d: "M24.63 12.002a17.953 17.953 0 01-4.14-2.845 54.986 54.986 0 001.414-7.33c.071-.576-.25-.762-.349-.805a.633.633 0 00-.759.252c-2.19 2.619-5.188 2.32-8.362 2.002-3.2-.32-6.5-.645-8.947 2.164a1.368 1.368 0 00-1.434-.462l-.055.015a1.367 1.367 0 00-.948 1.683L5.934 24.15a1.174 1.174 0 001.444.814l.427-.12h0a1.172 1.172 0 00.814-1.444l-1.512-5.413c2.202-2.832 5.272-2.532 8.52-2.208 3.243.324 6.594.659 9.055-2.285l.001-.002c.242-.3.342-.692.273-1.072a.588.588 0 00-.326-.42zM7.814 23.899a.369.369 0 01-.224.177l-.427.119a.373.373 0 01-.459-.259L1.821 6.461a.567.567 0 01.393-.698l.054-.015a.567.567 0 01.697.392l.044.156v0l2.501 8.95 2.339 8.37a.37.37 0 01-.035.284zm16.253-10.917c-2.189 2.619-5.188 2.32-8.361 2.002-3.162-.316-6.424-.642-8.862 2.062L4.658 9.227l-.825-2.955c2.202-2.832 5.272-2.525 8.522-2.2 3.085.308 6.271.627 8.694-1.884a53.576 53.576 0 01-1.332 6.761c-.08.288.01.596.233.794a19.1 19.1 0 004.23 2.933.598.598 0 01-.113.306z"
    }));
  }),
  wF = (0, p.memo)(function () {
    return React.createElement("svg", {
      width: "14",
      height: "2",
      fill: "none",
      viewBox: "0 0 14 2"
    }, React.createElement("path", {
      stroke: "#A7A8B3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M1 1h12"
    }));
  }),
  EF = (0, p.memo)(function () {
    return React.createElement("svg", {
      width: "14",
      height: "14",
      fill: "none",
      viewBox: "0 0 14 14"
    }, React.createElement("path", {
      stroke: "#A7A8B3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M7.008 1v12M1 7h12"
    }));
  });

var SF = n(83612),
  RF = n(48518);
