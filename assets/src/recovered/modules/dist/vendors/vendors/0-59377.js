// Reconstructed Webpack factory 59377; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  var r,
    a = Object.create,
    i = Object.defineProperty,
    o = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    l = Object.getPrototypeOf,
    c = Object.prototype.hasOwnProperty,
    u = (e, t, n, r) => {
      if (t && "object" == typeof t || "function" == typeof t) for (let a of s(t)) !c.call(e, a) && a !== n && i(e, a, {
        get: () => t[a],
        enumerable: !(r = o(t, a)) || r.enumerable
      });
      return e;
    },
    d = (e, t, n) => (n = null != e ? a(l(e)) : {}, u(!t && e && e.__esModule ? n : i(n, "default", {
      value: e,
      enumerable: !0
    }), e)),
    p = {};
  ((e, t) => {
    for (var n in t) i(e, n, {
      get: t[n],
      enumerable: !0
    });
  })(p, {
    CheckmarkIcon: () => Y,
    ErrorIcon: () => F,
    LoaderIcon: () => W,
    ToastBar: () => ne,
    ToastIcon: () => Z,
    Toaster: () => se,
    default: () => le,
    resolveValue: () => f,
    toast: () => T,
    useToaster: () => x,
    useToasterStore: () => M
  }), e.exports = (r = p, u(i({}, "__esModule", {
    value: !0
  }), r));
  var f = (e, t) => (e => "function" == typeof e)(e) ? e(t) : e,
    h = (() => {
      let e = 0;
      return () => (++e).toString();
    })(),
    _ = (() => {
      let e;
      return () => {
        if (void 0 === e && typeof window < "u") {
          let t = matchMedia("(prefers-reduced-motion: reduce)");
          e = !t || t.matches;
        }
        return e;
      };
    })(),
    m = n(41594),
    A = "default",
    g = (e, t) => {
      let {
        toastLimit: n
      } = e.settings;
      switch (t.type) {
        case 0:
          return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, n)
          };
        case 1:
          return {
            ...e,
            toasts: e.toasts.map(e => e.id === t.toast.id ? {
              ...e,
              ...t.toast
            } : e)
          };
        case 2:
          let {
            toast: r
          } = t;
          return g(e, {
            type: e.toasts.find(e => e.id === r.id) ? 1 : 0,
            toast: r
          });
        case 3:
          let {
            toastId: a
          } = t;
          return {
            ...e,
            toasts: e.toasts.map(e => e.id === a || void 0 === a ? {
              ...e,
              dismissed: !0,
              visible: !1
            } : e)
          };
        case 4:
          return void 0 === t.toastId ? {
            ...e,
            toasts: []
          } : {
            ...e,
            toasts: e.toasts.filter(e => e.id !== t.toastId)
          };
        case 5:
          return {
            ...e,
            pausedAt: t.time
          };
        case 6:
          let i = t.time - (e.pausedAt || 0);
          return {
            ...e,
            pausedAt: void 0,
            toasts: e.toasts.map(e => ({
              ...e,
              pauseDuration: e.pauseDuration + i
            }))
          };
      }
    },
    y = [],
    v = {
      toasts: [],
      pausedAt: void 0,
      settings: {
        toastLimit: 20
      }
    },
    E = {},
    b = (e, t = A) => {
      E[t] = g(E[t] || v, e), y.forEach(([e, n]) => {
        e === t && n(E[t]);
      });
    },
    w = e => Object.keys(E).forEach(t => b(e, t)),
    C = (e = A) => t => {
      b(t, e);
    },
    O = {
      blank: 4e3,
      error: 4e3,
      success: 2e3,
      loading: 1 / 0,
      custom: 4e3
    },
    M = (e = {}, t = A) => {
      let [n, r] = (0, m.useState)(E[t] || v),
        a = (0, m.useRef)(E[t]);
      (0, m.useEffect)(() => (a.current !== E[t] && r(E[t]), y.push([t, r]), () => {
        let e = y.findIndex(([e]) => e === t);
        e > -1 && y.splice(e, 1);
      }), [t]);
      let i = n.toasts.map(t => {
        var n, r, a;
        return {
          ...e,
          ...e[t.type],
          ...t,
          removeDelay: t.removeDelay || (null == (n = e[t.type]) ? void 0 : n.removeDelay) || (null == e ? void 0 : e.removeDelay),
          duration: t.duration || (null == (r = e[t.type]) ? void 0 : r.duration) || (null == e ? void 0 : e.duration) || O[t.type],
          style: {
            ...e.style,
            ...(null == (a = e[t.type]) ? void 0 : a.style),
            ...t.style
          }
        };
      });
      return {
        ...n,
        toasts: i
      };
    },
    S = e => (t, n) => {
      let r = ((e, t = "blank", n) => ({
        createdAt: Date.now(),
        visible: !0,
        dismissed: !1,
        type: t,
        ariaProps: {
          role: "status",
          "aria-live": "polite"
        },
        message: e,
        pauseDuration: 0,
        ...n,
        id: (null == n ? void 0 : n.id) || h()
      }))(t, e, n);
      return C(r.toasterId || (e => Object.keys(E).find(t => E[t].toasts.some(t => t.id === e)))(r.id))({
        type: 2,
        toast: r
      }), r.id;
    },
    T = (e, t) => S("blank")(e, t);
  T.error = S("error"), T.success = S("success"), T.loading = S("loading"), T.custom = S("custom"), T.dismiss = (e, t) => {
    let n = {
      type: 3,
      toastId: e
    };
    t ? C(t)(n) : w(n);
  }, T.dismissAll = e => T.dismiss(void 0, e), T.remove = (e, t) => {
    let n = {
      type: 4,
      toastId: e
    };
    t ? C(t)(n) : w(n);
  }, T.removeAll = e => T.remove(void 0, e), T.promise = (e, t, n) => {
    let r = T.loading(t.loading, {
      ...n,
      ...(null == n ? void 0 : n.loading)
    });
    return "function" == typeof e && (e = e()), e.then(e => {
      let a = t.success ? f(t.success, e) : void 0;
      return a ? T.success(a, {
        id: r,
        ...n,
        ...(null == n ? void 0 : n.success)
      }) : T.dismiss(r), e;
    }).catch(e => {
      let a = t.error ? f(t.error, e) : void 0;
      a ? T.error(a, {
        id: r,
        ...n,
        ...(null == n ? void 0 : n.error)
      }) : T.dismiss(r);
    }), e;
  };
  var k = n(41594),
    x = (e, t = "default") => {
      let {
          toasts: n,
          pausedAt: r
        } = M(e, t),
        a = (0, k.useRef)(new Map()).current,
        i = (0, k.useCallback)((e, t = 1e3) => {
          if (a.has(e)) return;
          let n = setTimeout(() => {
            a.delete(e), o({
              type: 4,
              toastId: e
            });
          }, t);
          a.set(e, n);
        }, []);
      (0, k.useEffect)(() => {
        if (r) return;
        let e = Date.now(),
          a = n.map(n => {
            if (n.duration === 1 / 0) return;
            let r = (n.duration || 0) + n.pauseDuration - (e - n.createdAt);
            if (!(r < 0)) return setTimeout(() => T.dismiss(n.id, t), r);
            n.visible && T.dismiss(n.id);
          });
        return () => {
          a.forEach(e => e && clearTimeout(e));
        };
      }, [n, r, t]);
      let o = (0, k.useCallback)(C(t), [t]),
        s = (0, k.useCallback)(() => {
          o({
            type: 5,
            time: Date.now()
          });
        }, [o]),
        l = (0, k.useCallback)((e, t) => {
          o({
            type: 1,
            toast: {
              id: e,
              height: t
            }
          });
        }, [o]),
        c = (0, k.useCallback)(() => {
          r && o({
            type: 6,
            time: Date.now()
          });
        }, [r, o]),
        u = (0, k.useCallback)((e, t) => {
          let {
              reverseOrder: r = !1,
              gutter: a = 8,
              defaultPosition: i
            } = t || {},
            o = n.filter(t => (t.position || i) === (e.position || i) && t.height),
            s = o.findIndex(t => t.id === e.id),
            l = o.filter((e, t) => t < s && e.visible).length;
          return o.filter(e => e.visible).slice(...(r ? [l + 1] : [0, l])).reduce((e, t) => e + (t.height || 0) + a, 0);
        }, [n]);
      return (0, k.useEffect)(() => {
        n.forEach(e => {
          if (e.dismissed) i(e.id, e.removeDelay);else {
            let t = a.get(e.id);
            t && (clearTimeout(t), a.delete(e.id));
          }
        });
      }, [n, i]), {
        toasts: n,
        handlers: {
          updateHeight: l,
          startPause: s,
          endPause: c,
          calculateOffset: u
        }
      };
    },
    D = d(n(41594)),
    I = n(35828),
    P = d(n(41594)),
    L = n(35828),
    R = n(35828),
    B = R.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    N = R.keyframes`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    U = R.keyframes`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    F = (0, R.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${N} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
    j = n(35828),
    H = j.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
    W = (0, j.styled)("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || "#e0e0e0"};
  border-right-color: ${e => e.primary || "#616161"};
  animation: ${H} 1s linear infinite;
`,
    K = n(35828),
    V = K.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
    z = K.keyframes`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
    Y = (0, K.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${z} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
    Q = (0, L.styled)("div")`
  position: absolute;
`,
    G = (0, L.styled)("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
    $ = L.keyframes`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    q = (0, L.styled)("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
    Z = ({
      toast: e
    }) => {
      let {
        icon: t,
        type: n,
        iconTheme: r
      } = e;
      return void 0 !== t ? "string" == typeof t ? P.createElement(q, null, t) : t : "blank" === n ? null : P.createElement(G, null, P.createElement(W, {
        ...r
      }), "loading" !== n && P.createElement(Q, null, "error" === n ? P.createElement(F, {
        ...r
      }) : P.createElement(Y, {
        ...r
      })));
    },
    X = e => `\n0% {transform: translate3d(0,${-200 * e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,
    J = e => `\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150 * e}%,-1px) scale(.6); opacity:0;}\n`,
    ee = (0, I.styled)("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
    te = (0, I.styled)("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
    ne = D.memo(({
      toast: e,
      position: t,
      style: n,
      children: r
    }) => {
      let a = e.height ? ((e, t) => {
          let n = e.includes("top") ? 1 : -1,
            [r, a] = _() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [X(n), J(n)];
          return {
            animation: t ? `${(0, I.keyframes)(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${(0, I.keyframes)(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
          };
        })(e.position || t || "top-center", e.visible) : {
          opacity: 0
        },
        i = D.createElement(Z, {
          toast: e
        }),
        o = D.createElement(te, {
          ...e.ariaProps
        }, f(e.message, e));
      return D.createElement(ee, {
        className: e.className,
        style: {
          ...a,
          ...n,
          ...e.style
        }
      }, "function" == typeof r ? r({
        icon: i,
        message: o
      }) : D.createElement(D.Fragment, null, i, o));
    }),
    re = n(35828),
    ae = d(n(41594));
  (0, re.setup)(ae.createElement);
  var ie = ({
      id: e,
      className: t,
      style: n,
      onHeightUpdate: r,
      children: a
    }) => {
      let i = ae.useCallback(t => {
        if (t) {
          let n = () => {
            let n = t.getBoundingClientRect().height;
            r(e, n);
          };
          n(), new MutationObserver(n).observe(t, {
            subtree: !0,
            childList: !0,
            characterData: !0
          });
        }
      }, [e, r]);
      return ae.createElement("div", {
        ref: i,
        className: t,
        style: n
      }, a);
    },
    oe = re.css`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
    se = ({
      reverseOrder: e,
      position: t = "top-center",
      toastOptions: n,
      gutter: r,
      children: a,
      toasterId: i,
      containerStyle: o,
      containerClassName: s
    }) => {
      let {
        toasts: l,
        handlers: c
      } = x(n, i);
      return ae.createElement("div", {
        "data-rht-toaster": i || "",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: 16,
          left: 16,
          right: 16,
          bottom: 16,
          pointerEvents: "none",
          ...o
        },
        className: s,
        onMouseEnter: c.startPause,
        onMouseLeave: c.endPause
      }, l.map(n => {
        let i = n.position || t,
          o = ((e, t) => {
            let n = e.includes("top"),
              r = n ? {
                top: 0
              } : {
                bottom: 0
              },
              a = e.includes("center") ? {
                justifyContent: "center"
              } : e.includes("right") ? {
                justifyContent: "flex-end"
              } : {};
            return {
              left: 0,
              right: 0,
              display: "flex",
              position: "absolute",
              transition: _() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
              transform: `translateY(${t * (n ? 1 : -1)}px)`,
              ...r,
              ...a
            };
          })(i, c.calculateOffset(n, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t
          }));
        return ae.createElement(ie, {
          id: n.id,
          key: n.id,
          onHeightUpdate: c.updateHeight,
          className: n.visible ? oe : "",
          style: o
        }, "custom" === n.type ? f(n.message, n) : a ? a(n) : ae.createElement(ne, {
          toast: n,
          position: i
        }));
      }));
    },
    le = T;
});
