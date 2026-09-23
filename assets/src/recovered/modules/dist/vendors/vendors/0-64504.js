// Reconstructed Webpack factory 64504; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    animateFill: () => ne,
    createSingleton: () => J,
    default: () => ue,
    delegate: () => te,
    followCursor: () => oe,
    hideAll: () => Z,
    inlinePositioning: () => se,
    roundArrow: () => i,
    sticky: () => le
  });
  var r = n(16607),
    a = n(2784),
    i = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',
    o = "tippy-content",
    s = "tippy-backdrop",
    l = "tippy-arrow",
    c = "tippy-svg-arrow",
    u = {
      passive: !0,
      capture: !0
    },
    d = function () {
      return document.body;
    };
  function p(e, t, n) {
    if (Array.isArray(e)) {
      var r = e[t];
      return null == r ? Array.isArray(n) ? n[t] : n : r;
    }
    return e;
  }
  function f(e, t) {
    var n = {}.toString.call(e);
    return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
  }
  function h(e, t) {
    return "function" == typeof e ? e.apply(void 0, t) : e;
  }
  function _(e, t) {
    return 0 === t ? e : function (r) {
      clearTimeout(n), n = setTimeout(function () {
        e(r);
      }, t);
    };
    var n;
  }
  function m(e, t) {
    var n = Object.assign({}, e);
    return t.forEach(function (e) {
      delete n[e];
    }), n;
  }
  function A(e) {
    return [].concat(e);
  }
  function g(e, t) {
    -1 === e.indexOf(t) && e.push(t);
  }
  function y(e) {
    return e.split("-")[0];
  }
  function v(e) {
    return [].slice.call(e);
  }
  function E(e) {
    return Object.keys(e).reduce(function (t, n) {
      return void 0 !== e[n] && (t[n] = e[n]), t;
    }, {});
  }
  function b() {
    return document.createElement("div");
  }
  function w(e) {
    return ["Element", "Fragment"].some(function (t) {
      return f(e, t);
    });
  }
  function C(e) {
    return f(e, "MouseEvent");
  }
  function O(e) {
    return !(!e || !e._tippy || e._tippy.reference !== e);
  }
  function M(e, t) {
    e.forEach(function (e) {
      e && (e.style.transitionDuration = t + "ms");
    });
  }
  function S(e, t) {
    e.forEach(function (e) {
      e && e.setAttribute("data-state", t);
    });
  }
  function T(e) {
    var t,
      n = A(e)[0];
    return null != n && null != (t = n.ownerDocument) && t.body ? n.ownerDocument : document;
  }
  function k(e, t, n) {
    var r = t + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
      e[r](t, n);
    });
  }
  function x(e, t) {
    for (var n = t; n;) {
      var r;
      if (e.contains(n)) return !0;
      n = null == n.getRootNode || null == (r = n.getRootNode()) ? void 0 : r.host;
    }
    return !1;
  }
  var D = {
      isTouch: !1
    },
    I = 0;
  function P() {
    D.isTouch || (D.isTouch = !0, window.performance && document.addEventListener("mousemove", L));
  }
  function L() {
    var e = performance.now();
    e - I < 20 && (D.isTouch = !1, document.removeEventListener("mousemove", L)), I = e;
  }
  function R() {
    var e = document.activeElement;
    if (O(e)) {
      var t = e._tippy;
      e.blur && !t.state.isVisible && e.blur();
    }
  }
  var B = !("undefined" == typeof window || "undefined" == typeof document || !window.msCrypto),
    N = Object.assign({
      appendTo: d,
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
    U = Object.keys(N);
  function F(e) {
    var t = (e.plugins || []).reduce(function (t, n) {
      var r,
        a = n.name,
        i = n.defaultValue;
      return a && (t[a] = void 0 !== e[a] ? e[a] : null != (r = N[a]) ? r : i), t;
    }, {});
    return Object.assign({}, e, t);
  }
  function j(e, t) {
    var n = Object.assign({}, t, {
      content: h(t.content, [e])
    }, t.ignoreAttributes ? {} : function (e, t) {
      return (t ? Object.keys(F(Object.assign({}, N, {
        plugins: t
      }))) : U).reduce(function (t, n) {
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
    return n.aria = Object.assign({}, N.aria, n.aria), n.aria = {
      expanded: "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
      content: "auto" === n.aria.content ? t.interactive ? null : "describedby" : n.aria.content
    }, n;
  }
  function H(e, t) {
    e.innerHTML = t;
  }
  function W(e) {
    var t = b();
    return !0 === e ? t.className = l : (t.className = c, w(e) ? t.appendChild(e) : H(t, e)), t;
  }
  function K(e, t) {
    w(t.content) ? (H(e, ""), e.appendChild(t.content)) : "function" != typeof t.content && (t.allowHTML ? H(e, t.content) : e.textContent = t.content);
  }
  function V(e) {
    var t = e.firstElementChild,
      n = v(t.children);
    return {
      box: t,
      content: n.find(function (e) {
        return e.classList.contains(o);
      }),
      arrow: n.find(function (e) {
        return e.classList.contains(l) || e.classList.contains(c);
      }),
      backdrop: n.find(function (e) {
        return e.classList.contains(s);
      })
    };
  }
  function z(e) {
    var t = b(),
      n = b();
    n.className = "tippy-box", n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
    var r = b();
    function a(n, r) {
      var a = V(t),
        i = a.box,
        o = a.content,
        s = a.arrow;
      r.theme ? i.setAttribute("data-theme", r.theme) : i.removeAttribute("data-theme"), "string" == typeof r.animation ? i.setAttribute("data-animation", r.animation) : i.removeAttribute("data-animation"), r.inertia ? i.setAttribute("data-inertia", "") : i.removeAttribute("data-inertia"), i.style.maxWidth = "number" == typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth, r.role ? i.setAttribute("role", r.role) : i.removeAttribute("role"), n.content === r.content && n.allowHTML === r.allowHTML || K(o, e.props), r.arrow ? s ? n.arrow !== r.arrow && (i.removeChild(s), i.appendChild(W(r.arrow))) : i.appendChild(W(r.arrow)) : s && i.removeChild(s);
    }
    return r.className = o, r.setAttribute("data-state", "hidden"), K(r, e.props), t.appendChild(n), n.appendChild(r), a(e.props, e.props), {
      popper: t,
      onUpdate: a
    };
  }
  z.$$tippy = !0;
  var Y = 1,
    Q = [],
    G = [];
  function $(e, t) {
    var n,
      r,
      i,
      o,
      s,
      l,
      c,
      f,
      m = j(e, Object.assign({}, N, F(E(t)))),
      w = !1,
      O = !1,
      I = !1,
      P = !1,
      L = [],
      R = _(ve, m.interactiveDebounce),
      U = Y++,
      H = (f = m.plugins).filter(function (e, t) {
        return f.indexOf(e) === t;
      }),
      W = {
        id: U,
        reference: e,
        popper: b(),
        popperInstance: null,
        props: m,
        state: {
          isEnabled: !0,
          isVisible: !1,
          isDestroyed: !1,
          isMounted: !1,
          isShown: !1
        },
        plugins: H,
        clearDelayTimeouts: function () {
          clearTimeout(n), clearTimeout(r), cancelAnimationFrame(i);
        },
        setProps: function (t) {
          if (!W.state.isDestroyed) {
            oe("onBeforeUpdate", [W, t]), ge();
            var n = W.props,
              r = j(e, Object.assign({}, n, E(t), {
                ignoreAttributes: !0
              }));
            W.props = r, Ae(), n.interactiveDebounce !== r.interactiveDebounce && (ce(), R = _(ve, r.interactiveDebounce)), n.triggerTarget && !r.triggerTarget ? A(n.triggerTarget).forEach(function (e) {
              e.removeAttribute("aria-expanded");
            }) : r.triggerTarget && e.removeAttribute("aria-expanded"), le(), ie(), $ && $(n, r), W.popperInstance && (Ce(), Me().forEach(function (e) {
              requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
            })), oe("onAfterUpdate", [W, t]);
          }
        },
        setContent: function (e) {
          W.setProps({
            content: e
          });
        },
        show: function () {
          var e = W.state.isVisible,
            t = W.state.isDestroyed,
            n = !W.state.isEnabled,
            r = D.isTouch && !W.props.touch,
            a = p(W.props.duration, 0, N.duration);
          if (!(e || t || n || r || te().hasAttribute("disabled") || (oe("onShow", [W], !1), !1 === W.props.onShow(W)))) {
            if (W.state.isVisible = !0, ee() && (z.style.visibility = "visible"), ie(), fe(), W.state.isMounted || (z.style.transition = "none"), ee()) {
              var i = re();
              M([i.box, i.content], 0);
            }
            var o, s, c;
            l = function () {
              var e;
              if (W.state.isVisible && !P) {
                if (P = !0, z.offsetHeight, z.style.transition = W.props.moveTransition, ee() && W.props.animation) {
                  var t = re(),
                    n = t.box,
                    r = t.content;
                  M([n, r], a), S([n, r], "visible");
                }
                se(), le(), g(G, W), null == (e = W.popperInstance) || e.forceUpdate(), oe("onMount", [W]), W.props.animation && ee() && function (e) {
                  _e(e, function () {
                    W.state.isShown = !0, oe("onShown", [W]);
                  });
                }(a);
              }
            }, s = W.props.appendTo, c = te(), (o = W.props.interactive && s === d || "parent" === s ? c.parentNode : h(s, [c])).contains(z) || o.appendChild(z), W.state.isMounted = !0, Ce();
          }
        },
        hide: function () {
          var e = !W.state.isVisible,
            t = W.state.isDestroyed,
            n = !W.state.isEnabled,
            r = p(W.props.duration, 1, N.duration);
          if (!(e || t || n) && (oe("onHide", [W], !1), !1 !== W.props.onHide(W))) {
            if (W.state.isVisible = !1, W.state.isShown = !1, P = !1, w = !1, ee() && (z.style.visibility = "hidden"), ce(), he(), ie(!0), ee()) {
              var a = re(),
                i = a.box,
                o = a.content;
              W.props.animation && (M([i, o], r), S([i, o], "hidden"));
            }
            se(), le(), W.props.animation ? ee() && function (e, t) {
              _e(e, function () {
                !W.state.isVisible && z.parentNode && z.parentNode.contains(z) && t();
              });
            }(r, W.unmount) : W.unmount();
          }
        },
        hideWithInteractivity: function (e) {
          ne().addEventListener("mousemove", R), g(Q, R), R(e);
        },
        enable: function () {
          W.state.isEnabled = !0;
        },
        disable: function () {
          W.hide(), W.state.isEnabled = !1;
        },
        unmount: function () {
          W.state.isVisible && W.hide(), W.state.isMounted && (Oe(), Me().forEach(function (e) {
            e._tippy.unmount();
          }), z.parentNode && z.parentNode.removeChild(z), G = G.filter(function (e) {
            return e !== W;
          }), W.state.isMounted = !1, oe("onHidden", [W]));
        },
        destroy: function () {
          W.state.isDestroyed || (W.clearDelayTimeouts(), W.unmount(), ge(), delete e._tippy, W.state.isDestroyed = !0, oe("onDestroy", [W]));
        }
      };
    if (!m.render) return W;
    var K = m.render(W),
      z = K.popper,
      $ = K.onUpdate;
    z.setAttribute("data-tippy-root", ""), z.id = "tippy-" + W.id, W.popper = z, e._tippy = W, z._tippy = W;
    var q = H.map(function (e) {
        return e.fn(W);
      }),
      Z = e.hasAttribute("aria-expanded");
    return Ae(), le(), ie(), oe("onCreate", [W]), m.showOnCreate && Se(), z.addEventListener("mouseenter", function () {
      W.props.interactive && W.state.isVisible && W.clearDelayTimeouts();
    }), z.addEventListener("mouseleave", function () {
      W.props.interactive && W.props.trigger.indexOf("mouseenter") >= 0 && ne().addEventListener("mousemove", R);
    }), W;
    function X() {
      var e = W.props.touch;
      return Array.isArray(e) ? e : [e, 0];
    }
    function J() {
      return "hold" === X()[0];
    }
    function ee() {
      var e;
      return !(null == (e = W.props.render) || !e.$$tippy);
    }
    function te() {
      return c || e;
    }
    function ne() {
      var e = te().parentNode;
      return e ? T(e) : document;
    }
    function re() {
      return V(z);
    }
    function ae(e) {
      return W.state.isMounted && !W.state.isVisible || D.isTouch || o && "focus" === o.type ? 0 : p(W.props.delay, e ? 0 : 1, N.delay);
    }
    function ie(e) {
      void 0 === e && (e = !1), z.style.pointerEvents = W.props.interactive && !e ? "" : "none", z.style.zIndex = "" + W.props.zIndex;
    }
    function oe(e, t, n) {
      var r;
      void 0 === n && (n = !0), q.forEach(function (n) {
        n[e] && n[e].apply(n, t);
      }), n && (r = W.props)[e].apply(r, t);
    }
    function se() {
      var t = W.props.aria;
      if (t.content) {
        var n = "aria-" + t.content,
          r = z.id;
        A(W.props.triggerTarget || e).forEach(function (e) {
          var t = e.getAttribute(n);
          if (W.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);else {
            var a = t && t.replace(r, "").trim();
            a ? e.setAttribute(n, a) : e.removeAttribute(n);
          }
        });
      }
    }
    function le() {
      !Z && W.props.aria.expanded && A(W.props.triggerTarget || e).forEach(function (e) {
        W.props.interactive ? e.setAttribute("aria-expanded", W.state.isVisible && e === te() ? "true" : "false") : e.removeAttribute("aria-expanded");
      });
    }
    function ce() {
      ne().removeEventListener("mousemove", R), Q = Q.filter(function (e) {
        return e !== R;
      });
    }
    function ue(t) {
      if (!D.isTouch || !I && "mousedown" !== t.type) {
        var n = t.composedPath && t.composedPath()[0] || t.target;
        if (!W.props.interactive || !x(z, n)) {
          if (A(W.props.triggerTarget || e).some(function (e) {
            return x(e, n);
          })) {
            if (D.isTouch) return;
            if (W.state.isVisible && W.props.trigger.indexOf("click") >= 0) return;
          } else oe("onClickOutside", [W, t]);
          !0 === W.props.hideOnClick && (W.clearDelayTimeouts(), W.hide(), O = !0, setTimeout(function () {
            O = !1;
          }), W.state.isMounted || he());
        }
      }
    }
    function de() {
      I = !0;
    }
    function pe() {
      I = !1;
    }
    function fe() {
      var e = ne();
      e.addEventListener("mousedown", ue, !0), e.addEventListener("touchend", ue, u), e.addEventListener("touchstart", pe, u), e.addEventListener("touchmove", de, u);
    }
    function he() {
      var e = ne();
      e.removeEventListener("mousedown", ue, !0), e.removeEventListener("touchend", ue, u), e.removeEventListener("touchstart", pe, u), e.removeEventListener("touchmove", de, u);
    }
    function _e(e, t) {
      var n = re().box;
      function r(e) {
        e.target === n && (k(n, "remove", r), t());
      }
      if (0 === e) return t();
      k(n, "remove", s), k(n, "add", r), s = r;
    }
    function me(t, n, r) {
      void 0 === r && (r = !1), A(W.props.triggerTarget || e).forEach(function (e) {
        e.addEventListener(t, n, r), L.push({
          node: e,
          eventType: t,
          handler: n,
          options: r
        });
      });
    }
    function Ae() {
      var e;
      J() && (me("touchstart", ye, {
        passive: !0
      }), me("touchend", Ee, {
        passive: !0
      })), (e = W.props.trigger, e.split(/\s+/).filter(Boolean)).forEach(function (e) {
        if ("manual" !== e) switch (me(e, ye), e) {
          case "mouseenter":
            me("mouseleave", Ee);
            break;
          case "focus":
            me(B ? "focusout" : "blur", be);
            break;
          case "focusin":
            me("focusout", be);
        }
      });
    }
    function ge() {
      L.forEach(function (e) {
        var t = e.node,
          n = e.eventType,
          r = e.handler,
          a = e.options;
        t.removeEventListener(n, r, a);
      }), L = [];
    }
    function ye(e) {
      var t,
        n = !1;
      if (W.state.isEnabled && !we(e) && !O) {
        var r = "focus" === (null == (t = o) ? void 0 : t.type);
        o = e, c = e.currentTarget, le(), !W.state.isVisible && C(e) && Q.forEach(function (t) {
          return t(e);
        }), "click" === e.type && (W.props.trigger.indexOf("mouseenter") < 0 || w) && !1 !== W.props.hideOnClick && W.state.isVisible ? n = !0 : Se(e), "click" === e.type && (w = !n), n && !r && Te(e);
      }
    }
    function ve(e) {
      var t = e.target,
        n = te().contains(t) || z.contains(t);
      if ("mousemove" !== e.type || !n) {
        var r = Me().concat(z).map(function (e) {
          var t,
            n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
          return n ? {
            popperRect: e.getBoundingClientRect(),
            popperState: n,
            props: m
          } : null;
        }).filter(Boolean);
        (function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return e.every(function (e) {
            var t = e.popperRect,
              a = e.popperState,
              i = e.props.interactiveBorder,
              o = y(a.placement),
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
        })(r, e) && (ce(), Te(e));
      }
    }
    function Ee(e) {
      we(e) || W.props.trigger.indexOf("click") >= 0 && w || (W.props.interactive ? W.hideWithInteractivity(e) : Te(e));
    }
    function be(e) {
      W.props.trigger.indexOf("focusin") < 0 && e.target !== te() || W.props.interactive && e.relatedTarget && z.contains(e.relatedTarget) || Te(e);
    }
    function we(e) {
      return !!D.isTouch && J() !== e.type.indexOf("touch") >= 0;
    }
    function Ce() {
      Oe();
      var t = W.props,
        n = t.popperOptions,
        r = t.placement,
        i = t.offset,
        o = t.getReferenceClientRect,
        s = t.moveTransition,
        c = ee() ? V(z).arrow : null,
        u = o ? {
          getBoundingClientRect: o,
          contextElement: o.contextElement || te()
        } : e,
        d = [{
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
            if (ee()) {
              var n = re().box;
              ["placement", "reference-hidden", "escaped"].forEach(function (e) {
                "placement" === e ? n.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? n.setAttribute("data-" + e, "") : n.removeAttribute("data-" + e);
              }), t.attributes.popper = {};
            }
          }
        }];
      ee() && c && d.push({
        name: "arrow",
        options: {
          element: c,
          padding: 3
        }
      }), d.push.apply(d, (null == n ? void 0 : n.modifiers) || []), W.popperInstance = (0, a.n4)(u, z, Object.assign({}, n, {
        placement: r,
        onFirstUpdate: l,
        modifiers: d
      }));
    }
    function Oe() {
      W.popperInstance && (W.popperInstance.destroy(), W.popperInstance = null);
    }
    function Me() {
      return v(z.querySelectorAll("[data-tippy-root]"));
    }
    function Se(e) {
      W.clearDelayTimeouts(), e && oe("onTrigger", [W, e]), fe();
      var t = ae(!0),
        r = X(),
        a = r[0],
        i = r[1];
      D.isTouch && "hold" === a && i && (t = i), t ? n = setTimeout(function () {
        W.show();
      }, t) : W.show();
    }
    function Te(e) {
      if (W.clearDelayTimeouts(), oe("onUntrigger", [W, e]), W.state.isVisible) {
        if (!(W.props.trigger.indexOf("mouseenter") >= 0 && W.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0 && w)) {
          var t = ae(!1);
          t ? r = setTimeout(function () {
            W.state.isVisible && W.hide();
          }, t) : i = requestAnimationFrame(function () {
            W.hide();
          });
        }
      } else he();
    }
  }
  function q(e, t) {
    void 0 === t && (t = {});
    var n = N.plugins.concat(t.plugins || []);
    document.addEventListener("touchstart", P, u), window.addEventListener("blur", R);
    var r,
      a = Object.assign({}, t, {
        plugins: n
      }),
      i = (r = e, w(r) ? [r] : function (e) {
        return f(e, "NodeList");
      }(r) ? v(r) : Array.isArray(r) ? r : v(document.querySelectorAll(r))).reduce(function (e, t) {
        var n = t && $(t, a);
        return n && e.push(n), e;
      }, []);
    return w(e) ? i[0] : i;
  }
  q.defaultProps = N, q.setDefaultProps = function (e) {
    Object.keys(e).forEach(function (t) {
      N[t] = e[t];
    });
  }, q.currentInput = D;
  var Z = function (e) {
      var t = void 0 === e ? {} : e,
        n = t.exclude,
        r = t.duration;
      G.forEach(function (e) {
        var t = !1;
        if (n && (t = O(n) ? e.reference === n : e.popper === n.popper), !t) {
          var a = e.props.duration;
          e.setProps({
            duration: r
          }), e.hide(), e.state.isDestroyed || e.setProps({
            duration: a
          });
        }
      });
    },
    X = Object.assign({}, r.A, {
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
    J = function (e, t) {
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
          return A(e.props.triggerTarget || e.reference);
        }).reduce(function (e, t) {
          return e.concat(t);
        }, []);
      }
      function d() {
        i = a.map(function (e) {
          return e.reference;
        });
      }
      function p(e) {
        a.forEach(function (t) {
          e ? t.enable() : t.disable();
        });
      }
      function f(e) {
        return a.map(function (t) {
          var n = t.setProps;
          return t.setProps = function (a) {
            n(a), t.reference === r && e.setProps(a);
          }, function () {
            t.setProps = n;
          };
        });
      }
      function h(e, t) {
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
      p(!1), d(), u();
      var _ = {
          fn: function () {
            return {
              onDestroy: function () {
                p(!0);
              },
              onHidden: function () {
                r = null;
              },
              onClickOutside: function (e) {
                e.props.showOnCreate && !c && (c = !0, r = null);
              },
              onShow: function (e) {
                e.props.showOnCreate && !c && (c = !0, h(e, i[0]));
              },
              onTrigger: function (e, t) {
                h(e, t.currentTarget);
              }
            };
          }
        },
        g = q(b(), Object.assign({}, m(t, ["overrides"]), {
          plugins: [_].concat(t.plugins || []),
          triggerTarget: o,
          popperOptions: Object.assign({}, t.popperOptions, {
            modifiers: [].concat((null == (n = t.popperOptions) ? void 0 : n.modifiers) || [], [X])
          })
        })),
        y = g.show;
      g.show = function (e) {
        if (y(), !r && null == e) return h(g, i[0]);
        if (!r || null != e) {
          if ("number" == typeof e) return i[e] && h(g, i[e]);
          if (a.indexOf(e) >= 0) {
            var t = e.reference;
            return h(g, t);
          }
          return i.indexOf(e) >= 0 ? h(g, e) : void 0;
        }
      }, g.showNext = function () {
        var e = i[0];
        if (!r) return g.show(0);
        var t = i.indexOf(r);
        g.show(i[t + 1] || e);
      }, g.showPrevious = function () {
        var e = i[i.length - 1];
        if (!r) return g.show(e);
        var t = i.indexOf(r),
          n = i[t - 1] || e;
        g.show(n);
      };
      var v = g.setProps;
      return g.setProps = function (e) {
        s = e.overrides || s, v(e);
      }, g.setInstances = function (e) {
        p(!0), l.forEach(function (e) {
          return e();
        }), a = e, p(!1), d(), u(), l = f(g), g.setProps({
          triggerTarget: o
        });
      }, l = f(g), g;
    },
    ee = {
      mouseover: "mouseenter",
      focusin: "focus",
      click: "click"
    };
  function te(e, t) {
    var n = [],
      r = [],
      a = !1,
      i = t.target,
      o = m(t, ["target"]),
      s = Object.assign({}, o, {
        trigger: "manual",
        touch: !1
      }),
      l = Object.assign({
        touch: N.touch
      }, o, {
        showOnCreate: !0
      }),
      c = q(e, s);
    function d(e) {
      if (e.target && !a) {
        var n = e.target.closest(i);
        if (n) {
          var o = n.getAttribute("data-tippy-trigger") || t.trigger || N.trigger;
          if (!n._tippy && !("touchstart" === e.type && "boolean" == typeof l.touch || "touchstart" !== e.type && o.indexOf(ee[e.type]) < 0)) {
            var s = q(n, l);
            s && (r = r.concat(s));
          }
        }
      }
    }
    function p(e, t, r, a) {
      void 0 === a && (a = !1), e.addEventListener(t, r, a), n.push({
        node: e,
        eventType: t,
        handler: r,
        options: a
      });
    }
    return A(c).forEach(function (e) {
      var t = e.destroy,
        i = e.enable,
        o = e.disable;
      e.destroy = function (e) {
        void 0 === e && (e = !0), e && r.forEach(function (e) {
          e.destroy();
        }), r = [], n.forEach(function (e) {
          var t = e.node,
            n = e.eventType,
            r = e.handler,
            a = e.options;
          t.removeEventListener(n, r, a);
        }), n = [], t();
      }, e.enable = function () {
        i(), r.forEach(function (e) {
          return e.enable();
        }), a = !1;
      }, e.disable = function () {
        o(), r.forEach(function (e) {
          return e.disable();
        }), a = !0;
      }, function (e) {
        var t = e.reference;
        p(t, "touchstart", d, u), p(t, "mouseover", d), p(t, "focusin", d), p(t, "click", d);
      }(e);
    }), c;
  }
  var ne = {
      name: "animateFill",
      defaultValue: !1,
      fn: function (e) {
        var t;
        if (null == (t = e.props.render) || !t.$$tippy) return {};
        var n = V(e.popper),
          r = n.box,
          a = n.content,
          i = e.props.animateFill ? function () {
            var e = b();
            return e.className = s, S([e], "hidden"), e;
          }() : null;
        return {
          onCreate: function () {
            i && (r.insertBefore(i, r.firstElementChild), r.setAttribute("data-animatefill", ""), r.style.overflow = "hidden", e.setProps({
              arrow: !1,
              animation: "shift-away"
            }));
          },
          onMount: function () {
            if (i) {
              var e = r.style.transitionDuration,
                t = Number(e.replace("ms", ""));
              a.style.transitionDelay = Math.round(t / 10) + "ms", i.style.transitionDuration = e, S([i], "visible");
            }
          },
          onShow: function () {
            i && (i.style.transitionDuration = "0ms");
          },
          onHide: function () {
            i && S([i], "hidden");
          }
        };
      }
    },
    re = {
      clientX: 0,
      clientY: 0
    },
    ae = [];
  function ie(e) {
    var t = e.clientX,
      n = e.clientY;
    re = {
      clientX: t,
      clientY: n
    };
  }
  var oe = {
      name: "followCursor",
      defaultValue: !1,
      fn: function (e) {
        var t = e.reference,
          n = T(e.props.triggerTarget || t),
          r = !1,
          a = !1,
          i = !0,
          o = e.props;
        function s() {
          return "initial" === e.props.followCursor && e.state.isVisible;
        }
        function l() {
          n.addEventListener("mousemove", d);
        }
        function c() {
          n.removeEventListener("mousemove", d);
        }
        function u() {
          r = !0, e.setProps({
            getReferenceClientRect: null
          }), r = !1;
        }
        function d(n) {
          var r = !n.target || t.contains(n.target),
            a = e.props.followCursor,
            i = n.clientX,
            o = n.clientY,
            s = t.getBoundingClientRect(),
            l = i - s.left,
            c = o - s.top;
          !r && e.props.interactive || e.setProps({
            getReferenceClientRect: function () {
              var e = t.getBoundingClientRect(),
                n = i,
                r = o;
              "initial" === a && (n = e.left + l, r = e.top + c);
              var s = "horizontal" === a ? e.top : r,
                u = "vertical" === a ? e.right : n,
                d = "horizontal" === a ? e.bottom : r,
                p = "vertical" === a ? e.left : n;
              return {
                width: u - p,
                height: d - s,
                top: s,
                right: u,
                bottom: d,
                left: p
              };
            }
          });
        }
        function p() {
          e.props.followCursor && (ae.push({
            instance: e,
            doc: n
          }), function (e) {
            e.addEventListener("mousemove", ie);
          }(n));
        }
        function f() {
          0 === (ae = ae.filter(function (t) {
            return t.instance !== e;
          })).filter(function (e) {
            return e.doc === n;
          }).length && function (e) {
            e.removeEventListener("mousemove", ie);
          }(n);
        }
        return {
          onCreate: p,
          onDestroy: f,
          onBeforeUpdate: function () {
            o = e.props;
          },
          onAfterUpdate: function (t, n) {
            var i = n.followCursor;
            r || void 0 !== i && o.followCursor !== i && (f(), i ? (p(), !e.state.isMounted || a || s() || l()) : (c(), u()));
          },
          onMount: function () {
            e.props.followCursor && !a && (i && (d(re), i = !1), s() || l());
          },
          onTrigger: function (e, t) {
            C(t) && (re = {
              clientX: t.clientX,
              clientY: t.clientY
            }), a = "focus" === t.type;
          },
          onHidden: function () {
            e.props.followCursor && (u(), c(), i = !0);
          }
        };
      }
    },
    se = {
      name: "inlinePositioning",
      defaultValue: !1,
      fn: function (e) {
        var t,
          n = e.reference,
          r = -1,
          a = !1,
          i = [],
          o = {
            name: "tippyInlinePositioning",
            enabled: !0,
            phase: "afterWrite",
            fn: function (a) {
              var o = a.state;
              e.props.inlinePositioning && (-1 !== i.indexOf(o.placement) && (i = []), t !== o.placement && -1 === i.indexOf(o.placement) && (i.push(o.placement), e.setProps({
                getReferenceClientRect: function () {
                  return function (e) {
                    return function (e, t, n, r) {
                      if (n.length < 2 || null === e) return t;
                      if (2 === n.length && r >= 0 && n[0].left > n[1].right) return n[r] || t;
                      switch (e) {
                        case "top":
                        case "bottom":
                          var a = n[0],
                            i = n[n.length - 1],
                            o = "top" === e,
                            s = a.top,
                            l = i.bottom,
                            c = o ? a.left : i.left,
                            u = o ? a.right : i.right;
                          return {
                            top: s,
                            bottom: l,
                            left: c,
                            right: u,
                            width: u - c,
                            height: l - s
                          };
                        case "left":
                        case "right":
                          var d = Math.min.apply(Math, n.map(function (e) {
                              return e.left;
                            })),
                            p = Math.max.apply(Math, n.map(function (e) {
                              return e.right;
                            })),
                            f = n.filter(function (t) {
                              return "left" === e ? t.left === d : t.right === p;
                            }),
                            h = f[0].top,
                            _ = f[f.length - 1].bottom;
                          return {
                            top: h,
                            bottom: _,
                            left: d,
                            right: p,
                            width: p - d,
                            height: _ - h
                          };
                        default:
                          return t;
                      }
                    }(y(e), n.getBoundingClientRect(), v(n.getClientRects()), r);
                  }(o.placement);
                }
              })), t = o.placement);
            }
          };
        function s() {
          var t;
          a || (t = function (e, t) {
            var n;
            return {
              popperOptions: Object.assign({}, e.popperOptions, {
                modifiers: [].concat(((null == (n = e.popperOptions) ? void 0 : n.modifiers) || []).filter(function (e) {
                  return e.name !== t.name;
                }), [t])
              })
            };
          }(e.props, o), a = !0, e.setProps(t), a = !1);
        }
        return {
          onCreate: s,
          onAfterUpdate: s,
          onTrigger: function (t, n) {
            if (C(n)) {
              var a = v(e.reference.getClientRects()),
                i = a.find(function (e) {
                  return e.left - 2 <= n.clientX && e.right + 2 >= n.clientX && e.top - 2 <= n.clientY && e.bottom + 2 >= n.clientY;
                }),
                o = a.indexOf(i);
              r = o > -1 ? o : r;
            }
          },
          onHidden: function () {
            r = -1;
          }
        };
      }
    },
    le = {
      name: "sticky",
      defaultValue: !1,
      fn: function (e) {
        var t = e.reference,
          n = e.popper;
        function r(t) {
          return !0 === e.props.sticky || e.props.sticky === t;
        }
        var a = null,
          i = null;
        function o() {
          var s = r("reference") ? (e.popperInstance ? e.popperInstance.state.elements.reference : t).getBoundingClientRect() : null,
            l = r("popper") ? n.getBoundingClientRect() : null;
          (s && ce(a, s) || l && ce(i, l)) && e.popperInstance && e.popperInstance.update(), a = s, i = l, e.state.isMounted && requestAnimationFrame(o);
        }
        return {
          onMount: function () {
            e.props.sticky && o();
          }
        };
      }
    };
  function ce(e, t) {
    return !e || !t || e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left;
  }
  q.setDefaultProps({
    render: z
  });
  const ue = q;
});
