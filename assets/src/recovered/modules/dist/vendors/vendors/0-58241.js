// Reconstructed Webpack factory 58241; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    hideOthers: () => u,
    inertOthers: () => d,
    supportsInert: () => p,
    suppressOthers: () => f
  });
  var r = function (e) {
      return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
    },
    a = new WeakMap(),
    i = new WeakMap(),
    o = {},
    s = 0,
    l = function (e) {
      return e && (e.host || l(e.parentNode));
    },
    c = function (e, t, n, r) {
      var c = function (e, t) {
        return t.map(function (t) {
          if (e.contains(t)) return t;
          var n = l(t);
          return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
        }).filter(function (e) {
          return Boolean(e);
        });
      }(t, Array.isArray(e) ? e : [e]);
      o[n] || (o[n] = new WeakMap());
      var u = o[n],
        d = [],
        p = new Set(),
        f = new Set(c),
        h = function (e) {
          e && !p.has(e) && (p.add(e), h(e.parentNode));
        };
      c.forEach(h);
      var _ = function (e) {
        e && !f.has(e) && Array.prototype.forEach.call(e.children, function (e) {
          if (p.has(e)) _(e);else try {
            var t = e.getAttribute(r),
              o = null !== t && "false" !== t,
              s = (a.get(e) || 0) + 1,
              l = (u.get(e) || 0) + 1;
            a.set(e, s), u.set(e, l), d.push(e), 1 === s && o && i.set(e, !0), 1 === l && e.setAttribute(n, "true"), o || e.setAttribute(r, "true");
          } catch (t) {
            console.error("aria-hidden: cannot operate on ", e, t);
          }
        });
      };
      return _(t), p.clear(), s++, function () {
        d.forEach(function (e) {
          var t = a.get(e) - 1,
            o = u.get(e) - 1;
          a.set(e, t), u.set(e, o), t || (i.has(e) || e.removeAttribute(r), i.delete(e)), o || e.removeAttribute(n);
        }), --s || (a = new WeakMap(), a = new WeakMap(), i = new WeakMap(), o = {});
      };
    },
    u = function (e, t, n) {
      void 0 === n && (n = "data-aria-hidden");
      var a = Array.from(Array.isArray(e) ? e : [e]),
        i = t || r(e);
      return i ? (a.push.apply(a, Array.from(i.querySelectorAll("[aria-live], script"))), c(a, i, n, "aria-hidden")) : function () {
        return null;
      };
    },
    d = function (e, t, n) {
      void 0 === n && (n = "data-inert-ed");
      var a = t || r(e);
      return a ? c(e, a, n, "inert") : function () {
        return null;
      };
    },
    p = function () {
      return "undefined" != typeof HTMLElement && HTMLElement.prototype.hasOwnProperty("inert");
    },
    f = function (e, t, n) {
      return void 0 === n && (n = "data-suppressed"), (p() ? d : u)(e, t, n);
    };
});
