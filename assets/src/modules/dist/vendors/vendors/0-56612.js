// Reconstructed Webpack factory 56612; arguments retain original semantics.
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
    d = {};
  ((e, t) => {
    for (var n in t) i(e, n, {
      get: t[n],
      enumerable: !0
    });
  })(d, {
    Root: () => m,
    Slot: () => m,
    Slottable: () => v,
    createSlot: () => _,
    createSlottable: () => y
  }), e.exports = (r = d, u(i({}, "__esModule", {
    value: !0
  }), r));
  var p = ((e, t, n) => (n = null != e ? a(l(e)) : {}, u(e && e.__esModule ? n : i(n, "default", {
      value: e,
      enumerable: !0
    }), e)))(n(41594)),
    f = n(10207),
    h = n(74848);
  function _(e) {
    const t = A(e),
      n = p.forwardRef((e, n) => {
        const {
            children: r,
            ...a
          } = e,
          i = p.Children.toArray(r),
          o = i.find(E);
        if (o) {
          const e = o.props.children,
            r = i.map(t => t === o ? p.Children.count(e) > 1 ? p.Children.only(null) : p.isValidElement(e) ? e.props.children : null : t);
          return (0, h.jsx)(t, {
            ...a,
            ref: n,
            children: p.isValidElement(e) ? p.cloneElement(e, void 0, r) : null
          });
        }
        return (0, h.jsx)(t, {
          ...a,
          ref: n,
          children: r
        });
      });
    return n.displayName = `${e}.Slot`, n;
  }
  var m = _("Slot");
  function A(e) {
    const t = p.forwardRef((e, t) => {
      const {
        children: n,
        ...r
      } = e;
      if (p.isValidElement(n)) {
        const e = function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
          }(n),
          a = function (e, t) {
            const n = {
              ...t
            };
            for (const r in t) {
              const a = e[r],
                i = t[r];
              /^on[A-Z]/.test(r) ? a && i ? n[r] = (...e) => {
                const t = i(...e);
                return a(...e), t;
              } : a && (n[r] = a) : "style" === r ? n[r] = {
                ...a,
                ...i
              } : "className" === r && (n[r] = [a, i].filter(Boolean).join(" "));
            }
            return {
              ...e,
              ...n
            };
          }(r, n.props);
        return n.type !== p.Fragment && (a.ref = t ? (0, f.composeRefs)(t, e) : e), p.cloneElement(n, a);
      }
      return p.Children.count(n) > 1 ? p.Children.only(null) : null;
    });
    return t.displayName = `${e}.SlotClone`, t;
  }
  var g = Symbol("radix.slottable");
  function y(e) {
    const t = ({
      children: e
    }) => (0, h.jsx)(h.Fragment, {
      children: e
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = g, t;
  }
  var v = y("Slottable");
  function E(e) {
    return p.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === g;
  }
});
