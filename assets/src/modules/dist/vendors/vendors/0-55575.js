// Reconstructed Webpack factory 55575; arguments retain original semantics.
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
      if (t && "object" == typeof t || "function" == typeof t) for (let a of s(t)) c.call(e, a) || a === n || i(e, a, {
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
    Presence: () => A,
    Root: () => y
  }), e.exports = (r = p, u(i({}, "__esModule", {
    value: !0
  }), r));
  var f = d(n(41594)),
    h = n(10207),
    _ = n(95696),
    m = d(n(41594)),
    A = e => {
      const {
          present: t,
          children: n
        } = e,
        r = function (e) {
          const [t, n] = f.useState(),
            r = f.useRef(null),
            a = f.useRef(e),
            i = f.useRef("none"),
            o = e ? "mounted" : "unmounted",
            [s, l] = function (e, t) {
              return m.useReducer((e, n) => t[e][n] ?? e, e);
            }(o, {
              mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
              },
              unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
              },
              unmounted: {
                MOUNT: "mounted"
              }
            });
          return f.useEffect(() => {
            const e = g(r.current);
            i.current = "mounted" === s ? e : "none";
          }, [s]), (0, _.useLayoutEffect)(() => {
            const t = r.current,
              n = a.current;
            if (n !== e) {
              const r = i.current,
                o = g(t);
              l(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
            }
          }, [e, l]), (0, _.useLayoutEffect)(() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                o = i => {
                  const o = g(r.current).includes(CSS.escape(i.animationName));
                  if (i.target === t && o && (l("ANIMATION_END"), !a.current)) {
                    const r = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r);
                    });
                  }
                },
                s = e => {
                  e.target === t && (i.current = g(r.current));
                };
              return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
                n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
              };
            }
            l("ANIMATION_END");
          }, [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(s),
            ref: f.useCallback(e => {
              r.current = e ? getComputedStyle(e) : null, n(e);
            }, [])
          };
        }(t),
        a = "function" == typeof n ? n({
          present: r.isPresent
        }) : f.Children.only(n),
        i = (0, h.useComposedRefs)(r.ref, function (e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
        }(a));
      return "function" == typeof n || r.isPresent ? f.cloneElement(a, {
        ref: i
      }) : null;
    };
  function g(e) {
    return e?.animationName || "none";
  }
  A.displayName = "Presence";
  var y = A;
});
