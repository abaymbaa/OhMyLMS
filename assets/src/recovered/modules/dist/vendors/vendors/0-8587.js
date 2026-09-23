// Reconstructed Webpack factory 8587; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    default: () => ae,
    tippy: () => F,
    useSingleton: () => re
  });
  var r = n(2784),
    a = n(16607),
    i = {
      passive: !0,
      capture: !0
    },
    o = function () {
      return document.body;
    };
  function s(e, t, n) {
    if (Array.isArray(e)) {
      var r = e[t];
      return null == r ? Array.isArray(n) ? n[t] : n : r;
    }
    return e;
  }
  function l(e, t) {
    var n = {}.toString.call(e);
    return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
  }
  function c(e, t) {
    return "function" == typeof e ? e.apply(void 0, t) : e;
  }
  function u(e, t) {
    return 0 === t ? e : function (r) {
      clearTimeout(n), n = setTimeout(function () {
        e(r);
      }, t);
    };
    var n;
  }
  function d(e) {
    return [].concat(e);
  }
  function p(e, t) {
    -1 === e.indexOf(t) && e.push(t);
  }
  function f(e) {
    return [].slice.call(e);
  }
  function h(e) {
    return Object.keys(e).reduce(function (t, n) {
      return void 0 !== e[n] && (t[n] = e[n]), t;
    }, {});
  }
  function _() {
    return document.createElement("div");
  }
  function m(e) {
    return ["Element", "Fragment"].some(function (t) {
      return l(e, t);
    });
  }
  function A(e, t) {
    e.forEach(function (e) {
      e && (e.style.transitionDuration = t + "ms");
    });
  }
  function g(e, t) {
    e.forEach(function (e) {
      e && e.setAttribute("data-state", t);
    });
  }
  function y(e, t, n) {
    var r = t + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
      e[r](t, n);
    });
  }
  function v(e, t) {
    for (var n = t; n;) {
      var r;
      if (e.contains(n)) return !0;
      n = null == n.getRootNode || null == (r = n.getRootNode()) ? void 0 : r.host;
    }
    return !1;
  }
  var E = {
      isTouch: !1
    },
    b = 0;
  function w() {
    E.isTouch || (E.isTouch = !0, window.performance && document.addEventListener("mousemove", C));
  }
  function C() {
    var e = performance.now();
    e - b < 20 && (E.isTouch = !1, document.removeEventListener("mousemove", C)), b = e;
  }
  function O() {
    var e,
      t = document.activeElement;
    if ((e = t) && e._tippy && e._tippy.reference === e) {
      var n = t._tippy;
      t.blur && !n.state.isVisible && t.blur();
    }
  }
  var M = !("undefined" == typeof window || "undefined" == typeof document || !window.msCrypto),
    S = Object.assign({
      appendTo: o,
      aria: {
        content: "auto",
        expanded: "auto"
      },
      delay: 0,
      duration: [300, 250],
      getReferenceClientRect: null,
      hideOnClick: !0,
      ignoreAttributes: !1,
      interactive: !1,
      interactiveBorder: 2,
      interactiveDebounce: 0,
      moveTransition: "",
      offset: [0, 10],
      onAfterUpdate: function () {},
      onBeforeUpdate: function () {},
      onCreate: function () {},
      onDestroy: function () {},
      onHidden: function () {},
      onHide: function () {},
      onMount: function () {},
      onShow: function () {},
      onShown: function () {},
      onTrigger: function () {},
      onUntrigger: function () {},
      onClickOutside: function () {},
      placement: "top",
      plugins: [],
      popperOptions: {},
      render: null,
      showOnCreate: !1,
      touch: !0,
      trigger: "mouseenter focus",
      triggerTarget: null
    }, {
      animateFill: !1,
      followCursor: !1,
      inlinePositioning: !1,
      sticky: !1
    }, {
      allowHTML: !1,
      animation: "fade",
      arrow: !0,
      content: "",
      inertia: !1,
      maxWidth: 350,
      role: "tooltip",
      theme: "",
      zIndex: 9999
    }),
    T = Object.keys(S);
  function k(e) {
    var t = (e.plugins || []).reduce(function (t, n) {
      var r,
        a = n.name,
        i = n.defaultValue;
      return a && (t[a] = void 0 !== e[a] ? e[a] : null != (r = S[a]) ? r : i), t;
    }, {});
    return Object.assign({}, e, t);
  }
  function x(e, t) {
    var n = Object.assign({}, t, {
      content: c(t.content, [e])
    }, t.ignoreAttributes ? {} : function (e, t) {
      return (t ? Object.keys(k(Object.assign({}, S, {
        plugins: t
      }))) : T).reduce(function (t, n) {
        var r = (e.getAttribute("data-tippy-" + n) || "").trim();
        if (!r) return t;
        if ("content" === n) t[n] = r;else try {
          t[n] = JSON.parse(r);
        } catch (e) {
          t[n] = r;
        }
        return t;
      }, {});
    }(e, t.plugins));
    return n.aria = Object.assign({}, S.aria, n.aria), n.aria = {
      expanded: "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
      content: "auto" === n.aria.content ? t.interactive ? null : "describedby" : n.aria.content
    }, n;
  }
  function D(e) {
    var t = e.firstElementChild,
      n = f(t.children);
    return {
      box: t,
      content: n.find(function (e) {
        return e.classList.contains("tippy-content");
      }),
      arrow: n.find(function (e) {
        return e.classList.contains("tippy-arrow") || e.classList.contains("tippy-svg-arrow");
      }),
      backdrop: n.find(function (e) {
        return e.classList.contains("tippy-backdrop");
      })
    };
  }
  var I = 1,
    P = [],
    L = [];
  function R(e, t) {
    var n,
      a,
      m,
      b,
      w,
      C,
      O,
      T,
      R = x(e, Object.assign({}, S, k(h(t)))),
      B = !1,
      N = !1,
      U = !1,
      F = !1,
      j = [],
      H = u(ge, R.interactiveDebounce),
      W = I++,
      K = (T = R.plugins).filter(function (e, t) {
        return T.indexOf(e) === t;
      }),
      V = {
        id: W,
        reference: e,
        popper: _(),
        popperInstance: null,
        props: R,
        state: {
          isEnabled: !0,
          isVisible: !1,
          isDestroyed: !1,
          isMounted: !1,
          isShown: !1
        },
        plugins: K,
        clearDelayTimeouts: function () {
          clearTimeout(n), clearTimeout(a), cancelAnimationFrame(m);
        },
        setProps: function (t) {
          if (!V.state.isDestroyed) {
            ae("onBeforeUpdate", [V, t]), me();
            var n = V.props,
              r = x(e, Object.assign({}, n, h(t), {
                ignoreAttributes: !0
              }));
            V.props = r, _e(), n.interactiveDebounce !== r.interactiveDebounce && (se(), H = u(ge, r.interactiveDebounce)), n.triggerTarget && !r.triggerTarget ? d(n.triggerTarget).forEach(function (e) {
              e.removeAttribute("aria-expanded");
            }) : r.triggerTarget && e.removeAttribute("aria-expanded"), oe(), re(), Q && Q(n, r), V.popperInstance && (be(), Ce().forEach(function (e) {
              requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
            })), ae("onAfterUpdate", [V, t]);
          }
        },
        setContent: function (e) {
          V.setProps({
            content: e
          });
        },
        show: function () {
          var e = V.state.isVisible,
            t = V.state.isDestroyed,
            n = !V.state.isEnabled,
            r = E.isTouch && !V.props.touch,
            a = s(V.props.duration, 0, S.duration);
          if (!(e || t || n || r || J().hasAttribute("disabled") || (ae("onShow", [V], !1), !1 === V.props.onShow(V)))) {
            if (V.state.isVisible = !0, X() && (Y.style.visibility = "visible"), re(), de(), V.state.isMounted || (Y.style.transition = "none"), X()) {
              var i = te();
              A([i.box, i.content], 0);
            }
            var l, u, d;
            C = function () {
              var e;
              if (V.state.isVisible && !F) {
                if (F = !0, Y.offsetHeight, Y.style.transition = V.props.moveTransition, X() && V.props.animation) {
                  var t = te(),
                    n = t.box,
                    r = t.content;
                  A([n, r], a), g([n, r], "visible");
                }
                ie(), oe(), p(L, V), null == (e = V.popperInstance) || e.forceUpdate(), ae("onMount", [V]), V.props.animation && X() && function (e) {
                  fe(e, function () {
                    V.state.isShown = !0, ae("onShown", [V]);
                  });
                }(a);
              }
            }, u = V.props.appendTo, d = J(), (l = V.props.interactive && u === o || "parent" === u ? d.parentNode : c(u, [d])).contains(Y) || l.appendChild(Y), V.state.isMounted = !0, be();
          }
        },
        hide: function () {
          var e = !V.state.isVisible,
            t = V.state.isDestroyed,
            n = !V.state.isEnabled,
            r = s(V.props.duration, 1, S.duration);
          if (!(e || t || n) && (ae("onHide", [V], !1), !1 !== V.props.onHide(V))) {
            if (V.state.isVisible = !1, V.state.isShown = !1, F = !1, B = !1, X() && (Y.style.visibility = "hidden"), se(), pe(), re(!0), X()) {
              var a = te(),
                i = a.box,
                o = a.content;
              V.props.animation && (A([i, o], r), g([i, o], "hidden"));
            }
            ie(), oe(), V.props.animation ? X() && function (e, t) {
              fe(e, function () {
                !V.state.isVisible && Y.parentNode && Y.parentNode.contains(Y) && t();
              });
            }(r, V.unmount) : V.unmount();
          }
        },
        hideWithInteractivity: function (e) {
          ee().addEventListener("mousemove", H), p(P, H), H(e);
        },
        enable: function () {
          V.state.isEnabled = !0;
        },
        disable: function () {
          V.hide(), V.state.isEnabled = !1;
        },
        unmount: function () {
          V.state.isVisible && V.hide(), V.state.isMounted && (we(), Ce().forEach(function (e) {
            e._tippy.unmount();
          }), Y.parentNode && Y.parentNode.removeChild(Y), L = L.filter(function (e) {
            return e !== V;
          }), V.state.isMounted = !1, ae("onHidden", [V]));
        },
        destroy: function () {
          V.state.isDestroyed || (V.clearDelayTimeouts(), V.unmount(), me(), delete e._tippy, V.state.isDestroyed = !0, ae("onDestroy", [V]));
        }
      };
    if (!R.render) return V;
    var z = R.render(V),
      Y = z.popper,
      Q = z.onUpdate;
    Y.setAttribute("data-tippy-root", ""), Y.id = "tippy-" + V.id, V.popper = Y, e._tippy = V, Y._tippy = V;
    var G = K.map(function (e) {
        return e.fn(V);
      }),
      $ = e.hasAttribute("aria-expanded");
    return _e(), oe(), re(), ae("onCreate", [V]), R.showOnCreate && Oe(), Y.addEventListener("mouseenter", function () {
      V.props.interactive && V.state.isVisible && V.clearDelayTimeouts();
    }), Y.addEventListener("mouseleave", function () {
      V.props.interactive && V.props.trigger.indexOf("mouseenter") >= 0 && ee().addEventListener("mousemove", H);
    }), V;
    function q() {
      var e = V.props.touch;
      return Array.isArray(e) ? e : [e, 0];
    }
    function Z() {
      return "hold" === q()[0];
    }
    function X() {
      var e;
      return !(null == (e = V.props.render) || !e.$$tippy);
    }
    function J() {
      return O || e;
    }
    function ee() {
      var e,
        t,
        n = J().parentNode;
      return n ? null != (t = d(n)[0]) && null != (e = t.ownerDocument) && e.body ? t.ownerDocument : document : document;
    }
    function te() {
      return D(Y);
    }
    function ne(e) {
      return V.state.isMounted && !V.state.isVisible || E.isTouch || b && "focus" === b.type ? 0 : s(V.props.delay, e ? 0 : 1, S.delay);
    }
    function re(e) {
      void 0 === e && (e = !1), Y.style.pointerEvents = V.props.interactive && !e ? "" : "none", Y.style.zIndex = "" + V.props.zIndex;
    }
    function ae(e, t, n) {
      var r;
      void 0 === n && (n = !0), G.forEach(function (n) {
        n[e] && n[e].apply(n, t);
      }), n && (r = V.props)[e].apply(r, t);
    }
    function ie() {
      var t = V.props.aria;
      if (t.content) {
        var n = "aria-" + t.content,
          r = Y.id;
        d(V.props.triggerTarget || e).forEach(function (e) {
          var t = e.getAttribute(n);
          if (V.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);else {
            var a = t && t.replace(r, "").trim();
            a ? e.setAttribute(n, a) : e.removeAttribute(n);
          }
        });
      }
    }
    function oe() {
      !$ && V.props.aria.expanded && d(V.props.triggerTarget || e).forEach(function (e) {
        V.props.interactive ? e.setAttribute("aria-expanded", V.state.isVisible && e === J() ? "true" : "false") : e.removeAttribute("aria-expanded");
      });
    }
    function se() {
      ee().removeEventListener("mousemove", H), P = P.filter(function (e) {
        return e !== H;
      });
    }
    function le(t) {
      if (!E.isTouch || !U && "mousedown" !== t.type) {
        var n = t.composedPath && t.composedPath()[0] || t.target;
        if (!V.props.interactive || !v(Y, n)) {
          if (d(V.props.triggerTarget || e).some(function (e) {
            return v(e, n);
          })) {
            if (E.isTouch) return;
            if (V.state.isVisible && V.props.trigger.indexOf("click") >= 0) return;
          } else ae("onClickOutside", [V, t]);
          !0 === V.props.hideOnClick && (V.clearDelayTimeouts(), V.hide(), N = !0, setTimeout(function () {
            N = !1;
          }), V.state.isMounted || pe());
        }
      }
    }
    function ce() {
      U = !0;
    }
    function ue() {
      U = !1;
    }
    function de() {
      var e = ee();
      e.addEventListener("mousedown", le, !0), e.addEventListener("touchend", le, i), e.addEventListener("touchstart", ue, i), e.addEventListener("touchmove", ce, i);
    }
    function pe() {
      var e = ee();
      e.removeEventListener("mousedown", le, !0), e.removeEventListener("touchend", le, i), e.removeEventListener("touchstart", ue, i), e.removeEventListener("touchmove", ce, i);
    }
    function fe(e, t) {
      var n = te().box;
      function r(e) {
        e.target === n && (y(n, "remove", r), t());
      }
      if (0 === e) return t();
      y(n, "remove", w), y(n, "add", r), w = r;
    }
    function he(t, n, r) {
      void 0 === r && (r = !1), d(V.props.triggerTarget || e).forEach(function (e) {
        e.addEventListener(t, n, r), j.push({
          node: e,
          eventType: t,
          handler: n,
          options: r
        });
      });
    }
    function _e() {
      var e;
      Z() && (he("touchstart", Ae, {
        passive: !0
      }), he("touchend", ye, {
        passive: !0
      })), (e = V.props.trigger, e.split(/\s+/).filter(Boolean)).forEach(function (e) {
        if ("manual" !== e) switch (he(e, Ae), e) {
          case "mouseenter":
            he("mouseleave", ye);
            break;
          case "focus":
            he(M ? "focusout" : "blur", ve);
            break;
          case "focusin":
            he("focusout", ve);
        }
      });
    }
    function me() {
      j.forEach(function (e) {
        var t = e.node,
          n = e.eventType,
          r = e.handler,
          a = e.options;
        t.removeEventListener(n, r, a);
      }), j = [];
    }
    function Ae(e) {
      var t,
        n = !1;
      if (V.state.isEnabled && !Ee(e) && !N) {
        var r = "focus" === (null == (t = b) ? void 0 : t.type);
        b = e, O = e.currentTarget, oe(), !V.state.isVisible && l(e, "MouseEvent") && P.forEach(function (t) {
          return t(e);
        }), "click" === e.type && (V.props.trigger.indexOf("mouseenter") < 0 || B) && !1 !== V.props.hideOnClick && V.state.isVisible ? n = !0 : Oe(e), "click" === e.type && (B = !n), n && !r && Me(e);
      }
    }
    function ge(e) {
      var t = e.target,
        n = J().contains(t) || Y.contains(t);
      if ("mousemove" !== e.type || !n) {
        var r = Ce().concat(Y).map(function (e) {
          var t,
            n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
          return n ? {
            popperRect: e.getBoundingClientRect(),
            popperState: n,
            props: R
          } : null;
        }).filter(Boolean);
        (function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return e.every(function (e) {
            var t = e.popperRect,
              a = e.popperState,
              i = e.props.interactiveBorder,
              o = a.placement.split("-")[0],
              s = a.modifiersData.offset;
            if (!s) return !0;
            var l = "bottom" === o ? s.top.y : 0,
              c = "top" === o ? s.bottom.y : 0,
              u = "right" === o ? s.left.x : 0,
              d = "left" === o ? s.right.x : 0,
              p = t.top - r + l > i,
              f = r - t.bottom - c > i,
              h = t.left - n + u > i,
              _ = n - t.right - d > i;
            return p || f || h || _;
          });
        })(r, e) && (se(), Me(e));
      }
    }
    function ye(e) {
      Ee(e) || V.props.trigger.indexOf("click") >= 0 && B || (V.props.interactive ? V.hideWithInteractivity(e) : Me(e));
    }
    function ve(e) {
      V.props.trigger.indexOf("focusin") < 0 && e.target !== J() || V.props.interactive && e.relatedTarget && Y.contains(e.relatedTarget) || Me(e);
    }
    function Ee(e) {
      return !!E.isTouch && Z() !== e.type.indexOf("touch") >= 0;
    }
    function be() {
      we();
      var t = V.props,
        n = t.popperOptions,
        a = t.placement,
        i = t.offset,
        o = t.getReferenceClientRect,
        s = t.moveTransition,
        l = X() ? D(Y).arrow : null,
        c = o ? {
          getBoundingClientRect: o,
          contextElement: o.contextElement || J()
        } : e,
        u = [{
          name: "offset",
          options: {
            offset: i
          }
        }, {
          name: "preventOverflow",
          options: {
            padding: {
              top: 2,
              bottom: 2,
              left: 5,
              right: 5
            }
          }
        }, {
          name: "flip",
          options: {
            padding: 5
          }
        }, {
          name: "computeStyles",
          options: {
            adaptive: !s
          }
        }, {
          name: "$$tippy",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function (e) {
            var t = e.state;
            if (X()) {
              var n = te().box;
              ["placement", "reference-hidden", "escaped"].forEach(function (e) {
                "placement" === e ? n.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? n.setAttribute("data-" + e, "") : n.removeAttribute("data-" + e);
              }), t.attributes.popper = {};
            }
          }
        }];
      X() && l && u.push({
        name: "arrow",
        options: {
          element: l,
          padding: 3
        }
      }), u.push.apply(u, (null == n ? void 0 : n.modifiers) || []), V.popperInstance = (0, r.n4)(c, Y, Object.assign({}, n, {
        placement: a,
        onFirstUpdate: C,
        modifiers: u
      }));
    }
    function we() {
      V.popperInstance && (V.popperInstance.destroy(), V.popperInstance = null);
    }
    function Ce() {
      return f(Y.querySelectorAll("[data-tippy-root]"));
    }
    function Oe(e) {
      V.clearDelayTimeouts(), e && ae("onTrigger", [V, e]), de();
      var t = ne(!0),
        r = q(),
        a = r[0],
        i = r[1];
      E.isTouch && "hold" === a && i && (t = i), t ? n = setTimeout(function () {
        V.show();
      }, t) : V.show();
    }
    function Me(e) {
      if (V.clearDelayTimeouts(), ae("onUntrigger", [V, e]), V.state.isVisible) {
        if (!(V.props.trigger.indexOf("mouseenter") >= 0 && V.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0 && B)) {
          var t = ne(!1);
          t ? a = setTimeout(function () {
            V.state.isVisible && V.hide();
          }, t) : m = requestAnimationFrame(function () {
            V.hide();
          });
        }
      } else pe();
    }
  }
  function B(e, t) {
    void 0 === t && (t = {});
    var n = S.plugins.concat(t.plugins || []);
    document.addEventListener("touchstart", w, i), window.addEventListener("blur", O);
    var r,
      a = Object.assign({}, t, {
        plugins: n
      }),
      o = (r = e, m(r) ? [r] : function (e) {
        return l(e, "NodeList");
      }(r) ? f(r) : Array.isArray(r) ? r : f(document.querySelectorAll(r))).reduce(function (e, t) {
        var n = t && R(t, a);
        return n && e.push(n), e;
      }, []);
    return m(e) ? o[0] : o;
  }
  B.defaultProps = S, B.setDefaultProps = function (e) {
    Object.keys(e).forEach(function (t) {
      S[t] = e[t];
    });
  }, B.currentInput = E;
  var N = Object.assign({}, a.A, {
      effect: function (e) {
        var t = e.state,
          n = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0"
            },
            arrow: {
              position: "absolute"
            },
            reference: {}
          };
        Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
      }
    }),
    U = function (e, t) {
      var n;
      void 0 === t && (t = {});
      var r,
        a = e,
        i = [],
        o = [],
        s = t.overrides,
        l = [],
        c = !1;
      function u() {
        o = a.map(function (e) {
          return d(e.props.triggerTarget || e.reference);
        }).reduce(function (e, t) {
          return e.concat(t);
        }, []);
      }
      function p() {
        i = a.map(function (e) {
          return e.reference;
        });
      }
      function f(e) {
        a.forEach(function (t) {
          e ? t.enable() : t.disable();
        });
      }
      function h(e) {
        return a.map(function (t) {
          var n = t.setProps;
          return t.setProps = function (a) {
            n(a), t.reference === r && e.setProps(a);
          }, function () {
            t.setProps = n;
          };
        });
      }
      function m(e, t) {
        var n = o.indexOf(t);
        if (t !== r) {
          r = t;
          var l = (s || []).concat("content").reduce(function (e, t) {
            return e[t] = a[n].props[t], e;
          }, {});
          e.setProps(Object.assign({}, l, {
            getReferenceClientRect: "function" == typeof l.getReferenceClientRect ? l.getReferenceClientRect : function () {
              var e;
              return null == (e = i[n]) ? void 0 : e.getBoundingClientRect();
            }
          }));
        }
      }
      f(!1), p(), u();
      var A,
        g,
        y,
        v = {
          fn: function () {
            return {
              onDestroy: function () {
                f(!0);
              },
              onHidden: function () {
                r = null;
              },
              onClickOutside: function (e) {
                e.props.showOnCreate && !c && (c = !0, r = null);
              },
              onShow: function (e) {
                e.props.showOnCreate && !c && (c = !0, m(e, i[0]));
              },
              onTrigger: function (e, t) {
                m(e, t.currentTarget);
              }
            };
          }
        },
        E = B(_(), Object.assign({}, (A = t, g = ["overrides"], y = Object.assign({}, A), g.forEach(function (e) {
          delete y[e];
        }), y), {
          plugins: [v].concat(t.plugins || []),
          triggerTarget: o,
          popperOptions: Object.assign({}, t.popperOptions, {
            modifiers: [].concat((null == (n = t.popperOptions) ? void 0 : n.modifiers) || [], [N])
          })
        })),
        b = E.show;
      E.show = function (e) {
        if (b(), !r && null == e) return m(E, i[0]);
        if (!r || null != e) {
          if ("number" == typeof e) return i[e] && m(E, i[e]);
          if (a.indexOf(e) >= 0) {
            var t = e.reference;
            return m(E, t);
          }
          return i.indexOf(e) >= 0 ? m(E, e) : void 0;
        }
      }, E.showNext = function () {
        var e = i[0];
        if (!r) return E.show(0);
        var t = i.indexOf(r);
        E.show(i[t + 1] || e);
      }, E.showPrevious = function () {
        var e = i[i.length - 1];
        if (!r) return E.show(e);
        var t = i.indexOf(r),
          n = i[t - 1] || e;
        E.show(n);
      };
      var w = E.setProps;
      return E.setProps = function (e) {
        s = e.overrides || s, w(e);
      }, E.setInstances = function (e) {
        f(!0), l.forEach(function (e) {
          return e();
        }), a = e, f(!1), p(), u(), l = h(E), E.setProps({
          triggerTarget: o
        });
      }, l = h(E), E;
    };
  B.setDefaultProps({
    animation: !1
  });
  const F = B;
  var j = n(41594),
    H = n.n(j),
    W = n(75206);
  function K(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
    return a;
  }
  var V = "undefined" != typeof window && "undefined" != typeof document;
  function z(e, t) {
    e && ("function" == typeof e && e(t), {}.hasOwnProperty.call(e, "current") && (e.current = t));
  }
  function Y() {
    return V && document.createElement("div");
  }
  function Q(e, t) {
    if (e === t) return !0;
    if ("object" == typeof e && null != e && "object" == typeof t && null != t) {
      if (Object.keys(e).length !== Object.keys(t).length) return !1;
      for (var n in e) {
        if (!t.hasOwnProperty(n)) return !1;
        if (!Q(e[n], t[n])) return !1;
      }
      return !0;
    }
    return !1;
  }
  function G(e) {
    var t = [];
    return e.forEach(function (e) {
      t.find(function (t) {
        return Q(e, t);
      }) || t.push(e);
    }), t;
  }
  function $(e, t) {
    var n, r;
    return Object.assign({}, t, {
      popperOptions: Object.assign({}, e.popperOptions, t.popperOptions, {
        modifiers: G([].concat((null == (n = e.popperOptions) ? void 0 : n.modifiers) || [], (null == (r = t.popperOptions) ? void 0 : r.modifiers) || []))
      })
    });
  }
  var q = V ? j.useLayoutEffect : j.useEffect;
  function Z(e) {
    var t = (0, j.useRef)();
    return t.current || (t.current = "function" == typeof e ? e() : e), t.current;
  }
  function X(e, t, n) {
    n.split(/\s+/).forEach(function (n) {
      n && e.classList[t](n);
    });
  }
  var J = {
    name: "className",
    defaultValue: "",
    fn: function (e) {
      var t = e.popper.firstElementChild,
        n = function () {
          var t;
          return !!(null == (t = e.props.render) ? void 0 : t.$$tippy);
        };
      function r() {
        e.props.className && !n() || X(t, "add", e.props.className);
      }
      return {
        onCreate: r,
        onBeforeUpdate: function () {
          n() && X(t, "remove", e.props.className);
        },
        onAfterUpdate: r
      };
    }
  };
  function ee(e) {
    return function (t) {
      var n = t.children,
        r = t.content,
        a = t.visible,
        i = t.singleton,
        o = t.render,
        s = t.reference,
        l = t.disabled,
        c = void 0 !== l && l,
        u = t.ignoreAttributes,
        d = void 0 === u || u,
        p = (t.__source, t.__self, K(t, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"])),
        f = void 0 !== a,
        h = void 0 !== i,
        _ = (0, j.useState)(!1),
        m = _[0],
        A = _[1],
        g = (0, j.useState)({}),
        y = g[0],
        v = g[1],
        E = (0, j.useState)(),
        b = E[0],
        w = E[1],
        C = Z(function () {
          return {
            container: Y(),
            renders: 1
          };
        }),
        O = Object.assign({
          ignoreAttributes: d
        }, p, {
          content: C.container
        });
      f && (O.trigger = "manual", O.hideOnClick = !1), h && (c = !0);
      var M = O,
        S = O.plugins || [];
      o && (M = Object.assign({}, O, {
        plugins: h && null != i.data ? [].concat(S, [{
          fn: function () {
            return {
              onTrigger: function (e, t) {
                var n = i.data.children.find(function (e) {
                  return e.instance.reference === t.currentTarget;
                });
                e.state.$$activeSingletonInstance = n.instance, w(n.content);
              }
            };
          }
        }]) : S,
        render: function () {
          return {
            popper: C.container
          };
        }
      }));
      var T = [s].concat(n ? [n.type] : []);
      return q(function () {
        var t = s;
        s && s.hasOwnProperty("current") && (t = s.current);
        var n = e(t || C.ref || Y(), Object.assign({}, M, {
          plugins: [J].concat(O.plugins || [])
        }));
        return C.instance = n, c && n.disable(), a && n.show(), h && i.hook({
          instance: n,
          content: r,
          props: M,
          setSingletonContent: w
        }), A(!0), function () {
          n.destroy(), null == i || i.cleanup(n);
        };
      }, T), q(function () {
        var e;
        if (1 !== C.renders) {
          var t = C.instance;
          t.setProps($(t.props, M)), null == (e = t.popperInstance) || e.forceUpdate(), c ? t.disable() : t.enable(), f && (a ? t.show() : t.hide()), h && i.hook({
            instance: t,
            content: r,
            props: M,
            setSingletonContent: w
          });
        } else C.renders++;
      }), q(function () {
        var e;
        if (o) {
          var t = C.instance;
          t.setProps({
            popperOptions: Object.assign({}, t.props.popperOptions, {
              modifiers: [].concat(((null == (e = t.props.popperOptions) ? void 0 : e.modifiers) || []).filter(function (e) {
                return "$$tippyReact" !== e.name;
              }), [{
                name: "$$tippyReact",
                enabled: !0,
                phase: "beforeWrite",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t,
                    n = e.state,
                    r = null == (t = n.modifiersData) ? void 0 : t.hide;
                  y.placement === n.placement && y.referenceHidden === (null == r ? void 0 : r.isReferenceHidden) && y.escaped === (null == r ? void 0 : r.hasPopperEscaped) || v({
                    placement: n.placement,
                    referenceHidden: null == r ? void 0 : r.isReferenceHidden,
                    escaped: null == r ? void 0 : r.hasPopperEscaped
                  }), n.attributes.popper = {};
                }
              }])
            })
          });
        }
      }, [y.placement, y.referenceHidden, y.escaped].concat(T)), H().createElement(H().Fragment, null, n ? (0, j.cloneElement)(n, {
        ref: function (e) {
          C.ref = e, z(n.ref, e);
        }
      }) : null, m && (0, W.createPortal)(o ? o(function (e) {
        var t = {
          "data-placement": e.placement
        };
        return e.referenceHidden && (t["data-reference-hidden"] = ""), e.escaped && (t["data-escaped"] = ""), t;
      }(y), b, C.instance) : r, C.container));
    };
  }
  function te(e) {
    return function (t) {
      var n = void 0 === t ? {} : t,
        r = n.disabled,
        a = void 0 !== r && r,
        i = n.overrides,
        o = void 0 === i ? [] : i,
        s = (0, j.useState)(!1),
        l = s[0],
        c = s[1],
        u = Z({
          children: [],
          renders: 1
        });
      return q(function () {
        if (l) {
          var t = u.children,
            n = u.sourceData;
          if (n) {
            var r = e(t.map(function (e) {
              return e.instance;
            }), Object.assign({}, n.props, {
              popperOptions: n.instance.props.popperOptions,
              overrides: o,
              plugins: [J].concat(n.props.plugins || [])
            }));
            return u.instance = r, a && r.disable(), function () {
              r.destroy(), u.children = t.filter(function (e) {
                return !e.instance.state.isDestroyed;
              });
            };
          }
        } else c(!0);
      }, [l]), q(function () {
        if (l) if (1 !== u.renders) {
          var e = u.children,
            t = u.instance,
            n = u.sourceData;
          if (t && n) {
            var r = n.props,
              i = (r.content, K(r, ["content"]));
            t.setProps($(t.props, Object.assign({}, i, {
              overrides: o
            }))), t.setInstances(e.map(function (e) {
              return e.instance;
            })), a ? t.disable() : t.enable();
          }
        } else u.renders++;
      }), (0, j.useMemo)(function () {
        return [{
          data: u,
          hook: function (e) {
            u.sourceData = e, u.setSingletonContent = e.setSingletonContent;
          },
          cleanup: function () {
            u.sourceData = null;
          }
        }, {
          hook: function (e) {
            var t, n;
            u.children = u.children.filter(function (t) {
              var n = t.instance;
              return e.instance !== n;
            }), u.children.push(e), (null == (t = u.instance) ? void 0 : t.state.isMounted) && (null == (n = u.instance) ? void 0 : n.state.$$activeSingletonInstance) === e.instance && (null == u.setSingletonContent || u.setSingletonContent(e.content)), u.instance && !u.instance.state.isDestroyed && u.instance.setInstances(u.children.map(function (e) {
              return e.instance;
            }));
          },
          cleanup: function (e) {
            u.children = u.children.filter(function (t) {
              return t.instance !== e;
            }), u.instance && !u.instance.state.isDestroyed && u.instance.setInstances(u.children.map(function (e) {
              return e.instance;
            }));
          }
        }];
      }, []);
    };
  }
  var ne = function (e, t) {
      return (0, j.forwardRef)(function (n, r) {
        var a = n.children,
          i = K(n, ["children"]);
        return H().createElement(e, Object.assign({}, t, i), a ? (0, j.cloneElement)(a, {
          ref: function (e) {
            z(r, e), z(a.ref, e);
          }
        }) : null);
      });
    },
    re = te(U);
  const ae = ne(ee(F), {
    render: function () {
      return "";
    }
  });
});
