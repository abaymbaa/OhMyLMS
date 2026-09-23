// Reconstructed Webpack factory 49454; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  function r(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != n) {
        var r,
          a,
          i,
          o,
          s = [],
          l = !0,
          c = !1;
        try {
          if (i = (n = n.call(e)).next, 0 === t) {
            if (Object(n) !== n) return;
            l = !1;
          } else for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
        } catch (e) {
          c = !0, a = e;
        } finally {
          try {
            if (!l && null != n.return && (o = n.return(), Object(o) !== o)) return;
          } finally {
            if (c) throw a;
          }
        }
        return s;
      }
    }(e, t) || i(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function a(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!n) {
      if (Array.isArray(e) || (n = i(e)) || t && e && "number" == typeof e.length) {
        n && (e = n);
        var r = 0,
          a = function () {};
        return {
          s: a,
          n: function () {
            return r >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[r++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: a
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      s = !0,
      l = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return s = e.done, e;
      },
      e: function (e) {
        l = !0, o = e;
      },
      f: function () {
        try {
          s || null == n.return || n.return();
        } finally {
          if (l) throw o;
        }
      }
    };
  }
  function i(e, t) {
    if (e) {
      if ("string" == typeof e) return o(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
    }
  }
  function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function s() {
    return s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, n) {
      var r = function (e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
        return e;
      }(e, t);
      if (r) {
        var a = Object.getOwnPropertyDescriptor(r, t);
        return a.get ? a.get.call(arguments.length < 3 ? e : n) : a.value;
      }
    }, s.apply(this, arguments);
  }
  function l(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(e, "prototype", {
      writable: !1
    }), t && c(e, t);
  }
  function c(e, t) {
    return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, c(e, t);
  }
  function u(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = p(e);
      if (t) {
        var a = p(this).constructor;
        n = Reflect.construct(r, arguments, a);
      } else n = r.apply(this, arguments);
      return function (e, t) {
        if (t && ("object" === f(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return d(e);
      }(this, n);
    };
  }
  function d(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function p(e) {
    return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, p(e);
  }
  function f(e) {
    return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, f(e);
  }
  function h(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function _(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, A(r.key), r);
    }
  }
  function m(e, t, n) {
    return t && _(e.prototype, t), n && _(e, n), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function A(e) {
    var t = function (e) {
      if ("object" !== f(e) || null === e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" !== f(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" === f(t) ? t : String(t);
  }
  var g = n(37820),
    y = n(77712),
    v = n(36553),
    E = function (e) {
      for (var t = 0;; t++) if (!(e = e.previousSibling)) return t;
    },
    b = function (e) {
      var t = e.assignedSlot || e.parentNode;
      return t && 11 == t.nodeType ? t.host : t;
    },
    w = null,
    C = function (e, t, n) {
      var r = w || (w = document.createRange());
      return r.setEnd(e, null == n ? e.nodeValue.length : n), r.setStart(e, t || 0), r;
    },
    O = function (e, t, n, r) {
      return n && (S(e, t, n, r, -1) || S(e, t, n, r, 1));
    },
    M = /^(img|br|input|textarea|hr)$/i;
  function S(e, t, n, r, a) {
    for (var i;;) {
      if (e == n && t == r) return !0;
      if (t == (a < 0 ? 0 : T(e))) {
        var o = e.parentNode;
        if (!o || 1 != o.nodeType || k(e) || M.test(e.nodeName) || "false" == e.contentEditable) return !1;
        t = E(e) + (a < 0 ? 0 : 1), e = o;
      } else {
        if (1 != e.nodeType) return !1;
        var s = e.childNodes[t + (a < 0 ? -1 : 0)];
        if (1 == s.nodeType && "false" == s.contentEditable) {
          if (!(null === (i = s.pmViewDesc) || void 0 === i ? void 0 : i.ignoreForSelection)) return !1;
          t += a;
        } else e = s, t = a < 0 ? T(e) : 0;
      }
    }
  }
  function T(e) {
    return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
  }
  function k(e) {
    for (var t, n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
    return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
  }
  var x = function (e) {
    return e.focusNode && O(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset);
  };
  function D(e, t) {
    var n = document.createEvent("Event");
    return n.initEvent("keydown", !0, !0), n.keyCode = e, n.key = n.code = t, n;
  }
  var I = "undefined" != typeof navigator ? navigator : null,
    P = "undefined" != typeof document ? document : null,
    L = I && I.userAgent || "",
    R = /Edge\/(\d+)/.exec(L),
    B = /MSIE \d/.exec(L),
    N = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(L),
    U = !!(B || N || R),
    F = B ? document.documentMode : N ? +N[1] : R ? +R[1] : 0,
    j = !U && /gecko\/(\d+)/i.test(L);
  j && (/Firefox\/(\d+)/.exec(L) || [0, 0])[1];
  var H = !U && /Chrome\/(\d+)/.exec(L),
    W = !!H,
    K = H ? +H[1] : 0,
    V = !U && !!I && /Apple Computer/.test(I.vendor),
    z = V && (/Mobile\/\w+/.test(L) || !!I && I.maxTouchPoints > 2),
    Y = z || !!I && /Mac/.test(I.platform),
    Q = !!I && /Win/.test(I.platform),
    G = /Android \d/.test(L),
    $ = !!P && "webkitFontSmoothing" in P.documentElement.style,
    q = $ ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
  function Z(e) {
    var t = e.defaultView && e.defaultView.visualViewport;
    return t ? {
      left: 0,
      right: t.width,
      top: 0,
      bottom: t.height
    } : {
      left: 0,
      right: e.documentElement.clientWidth,
      top: 0,
      bottom: e.documentElement.clientHeight
    };
  }
  function X(e, t) {
    return "number" == typeof e ? e : e[t];
  }
  function J(e) {
    var t = e.getBoundingClientRect(),
      n = t.width / e.offsetWidth || 1,
      r = t.height / e.offsetHeight || 1;
    return {
      left: t.left,
      right: t.left + e.clientWidth * n,
      top: t.top,
      bottom: t.top + e.clientHeight * r
    };
  }
  function ee(e, t, n) {
    for (var r = e.someProp("scrollThreshold") || 0, a = e.someProp("scrollMargin") || 5, i = e.dom.ownerDocument, o = n || e.dom; o;) if (1 == o.nodeType) {
      var s = o,
        l = s == i.body,
        c = l ? Z(i) : J(s),
        u = 0,
        d = 0;
      if (t.top < c.top + X(r, "top") ? d = -(c.top - t.top + X(a, "top")) : t.bottom > c.bottom - X(r, "bottom") && (d = t.bottom - t.top > c.bottom - c.top ? t.top + X(a, "top") - c.top : t.bottom - c.bottom + X(a, "bottom")), t.left < c.left + X(r, "left") ? u = -(c.left - t.left + X(a, "left")) : t.right > c.right - X(r, "right") && (u = t.right - c.right + X(a, "right")), u || d) if (l) i.defaultView.scrollBy(u, d);else {
        var p = s.scrollLeft,
          f = s.scrollTop;
        d && (s.scrollTop += d), u && (s.scrollLeft += u);
        var h = s.scrollLeft - p,
          _ = s.scrollTop - f;
        t = {
          left: t.left - h,
          top: t.top - _,
          right: t.right - h,
          bottom: t.bottom - _
        };
      }
      var m = l ? "fixed" : getComputedStyle(o).position;
      if (/^(fixed|sticky)$/.test(m)) break;
      o = "absolute" == m ? o.offsetParent : b(o);
    } else o = b(o);
  }
  function te(e) {
    for (var t = [], n = e.ownerDocument, r = e; r && (t.push({
      dom: r,
      top: r.scrollTop,
      left: r.scrollLeft
    }), e != n); r = b(r));
    return t;
  }
  function ne(e, t) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        a = r.dom,
        i = r.top,
        o = r.left;
      a.scrollTop != i + t && (a.scrollTop = i + t), a.scrollLeft != o && (a.scrollLeft = o);
    }
  }
  var re = null;
  function ae(e, t) {
    for (var n, r, a, i, o = 2e8, s = 0, l = t.top, c = t.top, u = e.firstChild, d = 0; u; u = u.nextSibling, d++) {
      var p = void 0;
      if (1 == u.nodeType) p = u.getClientRects();else {
        if (3 != u.nodeType) continue;
        p = C(u).getClientRects();
      }
      for (var f = 0; f < p.length; f++) {
        var h = p[f];
        if (h.top <= l && h.bottom >= c) {
          l = Math.max(h.bottom, l), c = Math.min(h.top, c);
          var _ = h.left > t.left ? h.left - t.left : h.right < t.left ? t.left - h.right : 0;
          if (_ < o) {
            n = u, o = _, r = _ && 3 == n.nodeType ? {
              left: h.right < t.left ? h.right : h.left,
              top: t.top
            } : t, 1 == u.nodeType && _ && (s = d + (t.left >= (h.left + h.right) / 2 ? 1 : 0));
            continue;
          }
        } else h.top > t.top && !a && h.left <= t.left && h.right >= t.left && (a = u, i = {
          left: Math.max(h.left, Math.min(h.right, t.left)),
          top: h.top
        });
        !n && (t.left >= h.right && t.top >= h.top || t.left >= h.left && t.top >= h.bottom) && (s = d + 1);
      }
    }
    return !n && a && (n = a, r = i, o = 0), n && 3 == n.nodeType ? function (e, t) {
      for (var n = e.nodeValue.length, r = document.createRange(), a = 0; a < n; a++) {
        r.setEnd(e, a + 1), r.setStart(e, a);
        var i = ce(r, 1);
        if (i.top != i.bottom && ie(t, i)) return {
          node: e,
          offset: a + (t.left >= (i.left + i.right) / 2 ? 1 : 0)
        };
      }
      return {
        node: e,
        offset: 0
      };
    }(n, r) : !n || o && 1 == n.nodeType ? {
      node: e,
      offset: s
    } : ae(n, r);
  }
  function ie(e, t) {
    return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1;
  }
  function oe(e, t, n) {
    var r = e.childNodes.length;
    if (r && n.top < n.bottom) for (var a = Math.max(0, Math.min(r - 1, Math.floor(r * (t.top - n.top) / (n.bottom - n.top)) - 2)), i = a;;) {
      var o = e.childNodes[i];
      if (1 == o.nodeType) for (var s = o.getClientRects(), l = 0; l < s.length; l++) {
        var c = s[l];
        if (ie(t, c)) return oe(o, t, c);
      }
      if ((i = (i + 1) % r) == a) break;
    }
    return e;
  }
  function se(e, t) {
    var n,
      r = e.dom.ownerDocument,
      a = 0,
      i = function (e, t, n) {
        if (e.caretPositionFromPoint) try {
          var r = e.caretPositionFromPoint(t, n);
          if (r) return {
            node: r.offsetNode,
            offset: Math.min(T(r.offsetNode), r.offset)
          };
        } catch (e) {}
        if (e.caretRangeFromPoint) {
          var a = e.caretRangeFromPoint(t, n);
          if (a) return {
            node: a.startContainer,
            offset: Math.min(T(a.startContainer), a.startOffset)
          };
        }
      }(r, t.left, t.top);
    i && (n = i.node, a = i.offset);
    var o,
      s = (e.root.elementFromPoint ? e.root : r).elementFromPoint(t.left, t.top);
    if (!s || !e.dom.contains(1 != s.nodeType ? s.parentNode : s)) {
      var l = e.dom.getBoundingClientRect();
      if (!ie(t, l)) return null;
      if (!(s = oe(e.dom, t, l))) return null;
    }
    if (V) for (var c = s; n && c; c = b(c)) c.draggable && (n = void 0);
    if (s = function (e, t) {
      var n = e.parentNode;
      return n && /^li$/i.test(n.nodeName) && t.left < e.getBoundingClientRect().left ? n : e;
    }(s, t), n) {
      if (j && 1 == n.nodeType && (a = Math.min(a, n.childNodes.length)) < n.childNodes.length) {
        var u,
          d = n.childNodes[a];
        "IMG" == d.nodeName && (u = d.getBoundingClientRect()).right <= t.left && u.bottom > t.top && a++;
      }
      var p;
      $ && a && 1 == n.nodeType && 1 == (p = n.childNodes[a - 1]).nodeType && "false" == p.contentEditable && p.getBoundingClientRect().top >= t.top && a--, n == e.dom && a == n.childNodes.length - 1 && 1 == n.lastChild.nodeType && t.top > n.lastChild.getBoundingClientRect().bottom ? o = e.state.doc.content.size : 0 != a && 1 == n.nodeType && "BR" == n.childNodes[a - 1].nodeName || (o = function (e, t, n, r) {
        for (var a = -1, i = t, o = !1; i != e.dom;) {
          var s = e.docView.nearestDesc(i, !0),
            l = void 0;
          if (!s) return null;
          if (1 == s.dom.nodeType && (s.node.isBlock && s.parent || !s.contentDOM) && ((l = s.dom.getBoundingClientRect()).width || l.height) && (s.node.isBlock && s.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(s.dom.nodeName) && (!o && l.left > r.left || l.top > r.top ? a = s.posBefore : (!o && l.right < r.left || l.bottom < r.top) && (a = s.posAfter), o = !0), !s.contentDOM && a < 0 && !s.node.isText)) return (s.node.isBlock ? r.top < (l.top + l.bottom) / 2 : r.left < (l.left + l.right) / 2) ? s.posBefore : s.posAfter;
          i = s.dom.parentNode;
        }
        return a > -1 ? a : e.docView.posFromDOM(t, n, -1);
      }(e, n, a, t));
    }
    null == o && (o = function (e, t, n) {
      var r = ae(t, n),
        a = r.node,
        i = r.offset,
        o = -1;
      if (1 == a.nodeType && !a.firstChild) {
        var s = a.getBoundingClientRect();
        o = s.left != s.right && n.left > (s.left + s.right) / 2 ? 1 : -1;
      }
      return e.docView.posFromDOM(a, i, o);
    }(e, s, t));
    var f = e.docView.nearestDesc(s, !0);
    return {
      pos: o,
      inside: f ? f.posAtStart - f.border : -1
    };
  }
  function le(e) {
    return e.top < e.bottom || e.left < e.right;
  }
  function ce(e, t) {
    var n = e.getClientRects();
    if (n.length) {
      var r = n[t < 0 ? 0 : n.length - 1];
      if (le(r)) return r;
    }
    return Array.prototype.find.call(n, le) || e.getBoundingClientRect();
  }
  var ue = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
  function de(e, t, n) {
    var r = e.docView.domFromPos(t, n < 0 ? -1 : 1),
      a = r.node,
      i = r.offset,
      o = r.atom,
      s = $ || j;
    if (3 == a.nodeType) {
      if (!s || !ue.test(a.nodeValue) && (n < 0 ? i : i != a.nodeValue.length)) {
        var l = i,
          c = i,
          u = n < 0 ? 1 : -1;
        return n < 0 && !i ? (c++, u = -1) : n >= 0 && i == a.nodeValue.length ? (l--, u = 1) : n < 0 ? l-- : c++, pe(ce(C(a, l, c), u), u < 0);
      }
      var d = ce(C(a, i, i), n);
      if (j && i && /\s/.test(a.nodeValue[i - 1]) && i < a.nodeValue.length) {
        var p = ce(C(a, i - 1, i - 1), -1);
        if (p.top == d.top) {
          var f = ce(C(a, i, i + 1), -1);
          if (f.top != d.top) return pe(f, f.left < p.left);
        }
      }
      return d;
    }
    if (!e.state.doc.resolve(t - (o || 0)).parent.inlineContent) {
      if (null == o && i && (n < 0 || i == T(a))) {
        var h = a.childNodes[i - 1];
        if (1 == h.nodeType) return fe(h.getBoundingClientRect(), !1);
      }
      if (null == o && i < T(a)) {
        var _ = a.childNodes[i];
        if (1 == _.nodeType) return fe(_.getBoundingClientRect(), !0);
      }
      return fe(a.getBoundingClientRect(), n >= 0);
    }
    if (null == o && i && (n < 0 || i == T(a))) {
      var m = a.childNodes[i - 1],
        A = 3 == m.nodeType ? C(m, T(m) - (s ? 0 : 1)) : 1 != m.nodeType || "BR" == m.nodeName && m.nextSibling ? null : m;
      if (A) return pe(ce(A, 1), !1);
    }
    if (null == o && i < T(a)) {
      for (var g = a.childNodes[i]; g.pmViewDesc && g.pmViewDesc.ignoreForCoords;) g = g.nextSibling;
      var y = g ? 3 == g.nodeType ? C(g, 0, s ? 0 : 1) : 1 == g.nodeType ? g : null : null;
      if (y) return pe(ce(y, -1), !0);
    }
    return pe(ce(3 == a.nodeType ? C(a) : a, -n), n >= 0);
  }
  function pe(e, t) {
    if (0 == e.width) return e;
    var n = t ? e.left : e.right;
    return {
      top: e.top,
      bottom: e.bottom,
      left: n,
      right: n
    };
  }
  function fe(e, t) {
    if (0 == e.height) return e;
    var n = t ? e.top : e.bottom;
    return {
      top: n,
      bottom: n,
      left: e.left,
      right: e.right
    };
  }
  function he(e, t, n) {
    var r = e.state,
      a = e.root.activeElement;
    r != t && e.updateState(t), a != e.dom && e.focus();
    try {
      return n();
    } finally {
      r != t && e.updateState(r), a != e.dom && a && a.focus();
    }
  }
  var _e = /[\u0590-\u08ac]/,
    me = null,
    Ae = null,
    ge = !1;
  var ye = function () {
      function e(t, n, r, a) {
        h(this, e), this.parent = t, this.children = n, this.dom = r, this.contentDOM = a, this.dirty = 0, r.pmViewDesc = this;
      }
      return m(e, [{
        key: "matchesWidget",
        value: function (e) {
          return !1;
        }
      }, {
        key: "matchesMark",
        value: function (e) {
          return !1;
        }
      }, {
        key: "matchesNode",
        value: function (e, t, n) {
          return !1;
        }
      }, {
        key: "matchesHack",
        value: function (e) {
          return !1;
        }
      }, {
        key: "parseRule",
        value: function () {
          return null;
        }
      }, {
        key: "stopEvent",
        value: function (e) {
          return !1;
        }
      }, {
        key: "size",
        get: function () {
          for (var e = 0, t = 0; t < this.children.length; t++) e += this.children[t].size;
          return e;
        }
      }, {
        key: "border",
        get: function () {
          return 0;
        }
      }, {
        key: "destroy",
        value: function () {
          this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
          for (var e = 0; e < this.children.length; e++) this.children[e].destroy();
        }
      }, {
        key: "posBeforeChild",
        value: function (e) {
          for (var t = 0, n = this.posAtStart;; t++) {
            var r = this.children[t];
            if (r == e) return n;
            n += r.size;
          }
        }
      }, {
        key: "posBefore",
        get: function () {
          return this.parent.posBeforeChild(this);
        }
      }, {
        key: "posAtStart",
        get: function () {
          return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
        }
      }, {
        key: "posAfter",
        get: function () {
          return this.posBefore + this.size;
        }
      }, {
        key: "posAtEnd",
        get: function () {
          return this.posAtStart + this.size - 2 * this.border;
        }
      }, {
        key: "localPosFromDOM",
        value: function (e, t, n) {
          if (this.contentDOM && this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)) {
            if (n < 0) {
              var r, a;
              if (e == this.contentDOM) r = e.childNodes[t - 1];else {
                for (; e.parentNode != this.contentDOM;) e = e.parentNode;
                r = e.previousSibling;
              }
              for (; r && (!(a = r.pmViewDesc) || a.parent != this);) r = r.previousSibling;
              return r ? this.posBeforeChild(a) + a.size : this.posAtStart;
            }
            var i, o;
            if (e == this.contentDOM) i = e.childNodes[t];else {
              for (; e.parentNode != this.contentDOM;) e = e.parentNode;
              i = e.nextSibling;
            }
            for (; i && (!(o = i.pmViewDesc) || o.parent != this);) i = i.nextSibling;
            return i ? this.posBeforeChild(o) : this.posAtEnd;
          }
          var s;
          if (e == this.dom && this.contentDOM) s = t > E(this.contentDOM);else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) s = 2 & e.compareDocumentPosition(this.contentDOM);else if (this.dom.firstChild) {
            if (0 == t) for (var l = e;; l = l.parentNode) {
              if (l == this.dom) {
                s = !1;
                break;
              }
              if (l.previousSibling) break;
            }
            if (null == s && t == e.childNodes.length) for (var c = e;; c = c.parentNode) {
              if (c == this.dom) {
                s = !0;
                break;
              }
              if (c.nextSibling) break;
            }
          }
          return (null == s ? n > 0 : s) ? this.posAtEnd : this.posAtStart;
        }
      }, {
        key: "nearestDesc",
        value: function (e) {
          for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = !0, r = e; r; r = r.parentNode) {
            var a = this.getDesc(r),
              i = void 0;
            if (a && (!t || a.node)) {
              if (!n || !(i = a.nodeDOM) || (1 == i.nodeType ? i.contains(1 == e.nodeType ? e : e.parentNode) : i == e)) return a;
              n = !1;
            }
          }
        }
      }, {
        key: "getDesc",
        value: function (e) {
          for (var t = e.pmViewDesc, n = t; n; n = n.parent) if (n == this) return t;
        }
      }, {
        key: "posFromDOM",
        value: function (e, t, n) {
          for (var r = e; r; r = r.parentNode) {
            var a = this.getDesc(r);
            if (a) return a.localPosFromDOM(e, t, n);
          }
          return -1;
        }
      }, {
        key: "descAt",
        value: function (e) {
          for (var t = 0, n = 0; t < this.children.length; t++) {
            var r = this.children[t],
              a = n + r.size;
            if (n == e && a != n) {
              for (; !r.border && r.children.length;) for (var i = 0; i < r.children.length; i++) {
                var o = r.children[i];
                if (o.size) {
                  r = o;
                  break;
                }
              }
              return r;
            }
            if (e < a) return r.descAt(e - n - r.border);
            n = a;
          }
        }
      }, {
        key: "domFromPos",
        value: function (e, t) {
          if (!this.contentDOM) return {
            node: this.dom,
            offset: 0,
            atom: e + 1
          };
          for (var n, r = 0, a = 0, i = 0; r < this.children.length; r++) {
            var o = this.children[r],
              s = i + o.size;
            if (s > e || o instanceof Me) {
              a = e - i;
              break;
            }
            i = s;
          }
          if (a) return this.children[r].domFromPos(a - this.children[r].border, t);
          for (; r && !(n = this.children[r - 1]).size && n instanceof ve && n.side >= 0; r--);
          if (t <= 0) {
            for (var l, c = !0; (l = r ? this.children[r - 1] : null) && l.dom.parentNode != this.contentDOM; r--, c = !1);
            return l && t && c && !l.border && !l.domAtom ? l.domFromPos(l.size, t) : {
              node: this.contentDOM,
              offset: l ? E(l.dom) + 1 : 0
            };
          }
          for (var u, d = !0; (u = r < this.children.length ? this.children[r] : null) && u.dom.parentNode != this.contentDOM; r++, d = !1);
          return u && d && !u.border && !u.domAtom ? u.domFromPos(0, t) : {
            node: this.contentDOM,
            offset: u ? E(u.dom) : this.contentDOM.childNodes.length
          };
        }
      }, {
        key: "parseRange",
        value: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          if (0 == this.children.length) return {
            node: this.contentDOM,
            from: e,
            to: t,
            fromOffset: 0,
            toOffset: this.contentDOM.childNodes.length
          };
          for (var r = -1, a = -1, i = n, o = 0;; o++) {
            var s = this.children[o],
              l = i + s.size;
            if (-1 == r && e <= l) {
              var c = i + s.border;
              if (e >= c && t <= l - s.border && s.node && s.contentDOM && this.contentDOM.contains(s.contentDOM)) return s.parseRange(e, t, c);
              e = i;
              for (var u = o; u > 0; u--) {
                var d = this.children[u - 1];
                if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(1)) {
                  r = E(d.dom) + 1;
                  break;
                }
                e -= d.size;
              }
              -1 == r && (r = 0);
            }
            if (r > -1 && (l > t || o == this.children.length - 1)) {
              t = l;
              for (var p = o + 1; p < this.children.length; p++) {
                var f = this.children[p];
                if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(-1)) {
                  a = E(f.dom);
                  break;
                }
                t += f.size;
              }
              -1 == a && (a = this.contentDOM.childNodes.length);
              break;
            }
            i = l;
          }
          return {
            node: this.contentDOM,
            from: e,
            to: t,
            fromOffset: r,
            toOffset: a
          };
        }
      }, {
        key: "emptyChildAt",
        value: function (e) {
          if (this.border || !this.contentDOM || !this.children.length) return !1;
          var t = this.children[e < 0 ? 0 : this.children.length - 1];
          return 0 == t.size || t.emptyChildAt(e);
        }
      }, {
        key: "domAfterPos",
        value: function (e) {
          var t = this.domFromPos(e, 0),
            n = t.node,
            r = t.offset;
          if (1 != n.nodeType || r == n.childNodes.length) throw new RangeError("No node after pos " + e);
          return n.childNodes[r];
        }
      }, {
        key: "setSelection",
        value: function (e, t, n) {
          for (var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a = Math.min(e, t), i = Math.max(e, t), o = 0, s = 0; o < this.children.length; o++) {
            var l = this.children[o],
              c = s + l.size;
            if (a > s && i < c) return l.setSelection(e - s - l.border, t - s - l.border, n, r);
            s = c;
          }
          var u = this.domFromPos(e, e ? -1 : 1),
            d = t == e ? u : this.domFromPos(t, t ? -1 : 1),
            p = n.root.getSelection(),
            f = n.domSelectionRange(),
            h = !1;
          if ((j || V) && e == t) {
            var _ = u,
              m = _.node,
              A = _.offset;
            if (3 == m.nodeType) {
              if ((h = !(!A || "\n" != m.nodeValue[A - 1])) && A == m.nodeValue.length) for (var g, y = m; y; y = y.parentNode) {
                if (g = y.nextSibling) {
                  "BR" == g.nodeName && (u = d = {
                    node: g.parentNode,
                    offset: E(g) + 1
                  });
                  break;
                }
                var v = y.pmViewDesc;
                if (v && v.node && v.node.isBlock) break;
              }
            } else {
              var b = m.childNodes[A - 1];
              h = b && ("BR" == b.nodeName || "false" == b.contentEditable);
            }
          }
          if (j && f.focusNode && f.focusNode != d.node && 1 == f.focusNode.nodeType) {
            var w = f.focusNode.childNodes[f.focusOffset];
            w && "false" == w.contentEditable && (r = !0);
          }
          if (r || h && V || !O(u.node, u.offset, f.anchorNode, f.anchorOffset) || !O(d.node, d.offset, f.focusNode, f.focusOffset)) {
            var C = !1;
            if ((p.extend || e == t) && (!h || !j)) {
              p.collapse(u.node, u.offset);
              try {
                e != t && p.extend(d.node, d.offset), C = !0;
              } catch (e) {}
            }
            if (!C) {
              if (e > t) {
                var M = u;
                u = d, d = M;
              }
              var S = document.createRange();
              S.setEnd(d.node, d.offset), S.setStart(u.node, u.offset), p.removeAllRanges(), p.addRange(S);
            }
          }
        }
      }, {
        key: "ignoreMutation",
        value: function (e) {
          return !this.contentDOM && "selection" != e.type;
        }
      }, {
        key: "contentLost",
        get: function () {
          return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
        }
      }, {
        key: "markDirty",
        value: function (e, t) {
          for (var n = 0, r = 0; r < this.children.length; r++) {
            var a = this.children[r],
              i = n + a.size;
            if (n == i ? e <= i && t >= n : e < i && t > n) {
              var o = n + a.border,
                s = i - a.border;
              if (e >= o && t <= s) return this.dirty = e == n || t == i ? 2 : 1, void (e != o || t != s || !a.contentLost && a.dom.parentNode == this.contentDOM ? a.markDirty(e - o, t - o) : a.dirty = 3);
              a.dirty = a.dom != a.contentDOM || a.dom.parentNode != this.contentDOM || a.children.length ? 3 : 2;
            }
            n = i;
          }
          this.dirty = 2;
        }
      }, {
        key: "markParentsDirty",
        value: function () {
          for (var e = 1, t = this.parent; t; t = t.parent, e++) {
            var n = 1 == e ? 2 : 1;
            t.dirty < n && (t.dirty = n);
          }
        }
      }, {
        key: "domAtom",
        get: function () {
          return !1;
        }
      }, {
        key: "ignoreForCoords",
        get: function () {
          return !1;
        }
      }, {
        key: "ignoreForSelection",
        get: function () {
          return !1;
        }
      }, {
        key: "isText",
        value: function (e) {
          return !1;
        }
      }]), e;
    }(),
    ve = function (e) {
      l(n, e);
      var t = u(n);
      function n(e, r, a, i) {
        var o;
        h(this, n);
        var s,
          l = r.type.toDOM;
        if ("function" == typeof l && (l = l(a, function () {
          return s ? s.parent ? s.parent.posBeforeChild(s) : void 0 : i;
        })), !r.type.spec.raw) {
          if (1 != l.nodeType) {
            var c = document.createElement("span");
            c.appendChild(l), l = c;
          }
          l.contentEditable = "false", l.classList.add("ProseMirror-widget");
        }
        return (o = t.call(this, e, [], l, null)).widget = r, o.widget = r, s = d(o), o;
      }
      return m(n, [{
        key: "matchesWidget",
        value: function (e) {
          return 0 == this.dirty && e.type.eq(this.widget.type);
        }
      }, {
        key: "parseRule",
        value: function () {
          return {
            ignore: !0
          };
        }
      }, {
        key: "stopEvent",
        value: function (e) {
          var t = this.widget.spec.stopEvent;
          return !!t && t(e);
        }
      }, {
        key: "ignoreMutation",
        value: function (e) {
          return "selection" != e.type || this.widget.spec.ignoreSelection;
        }
      }, {
        key: "destroy",
        value: function () {
          this.widget.type.destroy(this.dom), s(p(n.prototype), "destroy", this).call(this);
        }
      }, {
        key: "domAtom",
        get: function () {
          return !0;
        }
      }, {
        key: "ignoreForSelection",
        get: function () {
          return !!this.widget.type.spec.relaxedSide;
        }
      }, {
        key: "side",
        get: function () {
          return this.widget.type.side;
        }
      }]), n;
    }(ye),
    Ee = function (e) {
      l(n, e);
      var t = u(n);
      function n(e, r, a, i) {
        var o;
        return h(this, n), (o = t.call(this, e, [], r, null)).textDOM = a, o.text = i, o;
      }
      return m(n, [{
        key: "size",
        get: function () {
          return this.text.length;
        }
      }, {
        key: "localPosFromDOM",
        value: function (e, t) {
          return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
        }
      }, {
        key: "domFromPos",
        value: function (e) {
          return {
            node: this.textDOM,
            offset: e
          };
        }
      }, {
        key: "ignoreMutation",
        value: function (e) {
          return "characterData" === e.type && e.target.nodeValue == e.oldValue;
        }
      }]), n;
    }(ye),
    be = function (e) {
      l(n, e);
      var t = u(n);
      function n(e, r, a, i, o) {
        var s;
        return h(this, n), (s = t.call(this, e, [], a, i)).mark = r, s.spec = o, s;
      }
      return m(n, [{
        key: "parseRule",
        value: function () {
          return 3 & this.dirty || this.mark.type.spec.reparseInView ? null : {
            mark: this.mark.type.name,
            attrs: this.mark.attrs,
            contentElement: this.contentDOM
          };
        }
      }, {
        key: "matchesMark",
        value: function (e) {
          return 3 != this.dirty && this.mark.eq(e);
        }
      }, {
        key: "markDirty",
        value: function (e, t) {
          if (s(p(n.prototype), "markDirty", this).call(this, e, t), 0 != this.dirty) {
            for (var r = this.parent; !r.node;) r = r.parent;
            r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = 0;
          }
        }
      }, {
        key: "slice",
        value: function (e, t, r) {
          var a = n.create(this.parent, this.mark, !0, r),
            i = this.children,
            o = this.size;
          t < o && (i = Fe(i, t, o, r)), e > 0 && (i = Fe(i, 0, e, r));
          for (var s = 0; s < i.length; s++) i[s].parent = a;
          return a.children = i, a;
        }
      }, {
        key: "ignoreMutation",
        value: function (e) {
          return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : s(p(n.prototype), "ignoreMutation", this).call(this, e);
        }
      }, {
        key: "destroy",
        value: function () {
          this.spec.destroy && this.spec.destroy(), s(p(n.prototype), "destroy", this).call(this);
        }
      }], [{
        key: "create",
        value: function (e, t, r, a) {
          var i = a.nodeViews[t.type.name],
            o = i && i(t, a, r);
          return o && o.dom || (o = y.DOMSerializer.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new n(e, t, o.dom, o.contentDOM || o.dom, o);
        }
      }]), n;
    }(ye),
    we = function (e) {
      l(n, e);
      var t = u(n);
      function n(e, r, a, i, o, s, l, c, u) {
        var d;
        return h(this, n), (d = t.call(this, e, [], o, s)).node = r, d.outerDeco = a, d.innerDeco = i, d.nodeDOM = l, d;
      }
      return m(n, [{
        key: "parseRule",
        value: function () {
          var e = this;
          if (this.node.type.spec.reparseInView) return null;
          var t = {
            node: this.node.type.name,
            attrs: this.node.attrs
          };
          if ("pre" == this.node.type.whitespace && (t.preserveWhitespace = "full"), this.contentDOM) {
            if (this.contentLost) {
              for (var n = this.children.length - 1; n >= 0; n--) {
                var r = this.children[n];
                if (this.dom.contains(r.dom.parentNode)) {
                  t.contentElement = r.dom.parentNode;
                  break;
                }
              }
              t.contentElement || (t.getContent = function () {
                return y.Fragment.empty;
              });
            } else t.contentElement = this.contentDOM;
          } else t.getContent = function () {
            return e.node.content;
          };
          return t;
        }
      }, {
        key: "matchesNode",
        value: function (e, t, n) {
          return 0 == this.dirty && e.eq(this.node) && Re(t, this.outerDeco) && n.eq(this.innerDeco);
        }
      }, {
        key: "size",
        get: function () {
          return this.node.nodeSize;
        }
      }, {
        key: "border",
        get: function () {
          return this.node.isLeaf ? 0 : 1;
        }
      }, {
        key: "updateChildren",
        value: function (e, t) {
          var n = this,
            r = this.node.inlineContent,
            a = t,
            i = e.composing ? this.localCompositionInfo(e, t) : null,
            o = i && i.pos > -1 ? i : null,
            s = i && i.pos < 0,
            l = new Ne(this, o && o.node, e);
          !function (e, t, n, r) {
            var a = t.locals(e),
              i = 0;
            if (0 != a.length) for (var o = 0, s = [], l = null, c = 0;;) {
              for (var u = void 0, d = void 0; o < a.length && a[o].to == i;) {
                var p = a[o++];
                p.widget && (u ? (d || (d = [u])).push(p) : u = p);
              }
              if (u) if (d) {
                d.sort(Ue);
                for (var f = 0; f < d.length; f++) n(d[f], c, !!l);
              } else n(u, c, !!l);
              var h = void 0,
                _ = void 0;
              if (l) _ = -1, h = l, l = null;else {
                if (!(c < e.childCount)) break;
                _ = c, h = e.child(c++);
              }
              for (var m = 0; m < s.length; m++) s[m].to <= i && s.splice(m--, 1);
              for (; o < a.length && a[o].from <= i && a[o].to > i;) s.push(a[o++]);
              var A = i + h.nodeSize;
              if (h.isText) {
                var g = A;
                o < a.length && a[o].from < g && (g = a[o].from);
                for (var y = 0; y < s.length; y++) s[y].to < g && (g = s[y].to);
                g < A && (l = h.cut(g - i), h = h.cut(0, g - i), A = g, _ = -1);
              } else for (; o < a.length && a[o].to < A;) o++;
              r(h, h.isInline && !h.isLeaf ? s.filter(function (e) {
                return !e.inline;
              }) : s.slice(), t.forChild(i, h), _), i = A;
            } else for (var v = 0; v < e.childCount; v++) {
              var E = e.child(v);
              r(E, a, t.forChild(i, E), v), i += E.nodeSize;
            }
          }(this.node, this.innerDeco, function (t, i, o) {
            t.spec.marks ? l.syncToMarks(t.spec.marks, r, e) : t.type.side >= 0 && !o && l.syncToMarks(i == n.node.childCount ? y.Mark.none : n.node.child(i).marks, r, e), l.placeWidget(t, e, a);
          }, function (t, n, o, c) {
            var u;
            l.syncToMarks(t.marks, r, e), l.findNodeMatch(t, n, o, c) || s && e.state.selection.from > a && e.state.selection.to < a + t.nodeSize && (u = l.findIndexWithChild(i.node)) > -1 && l.updateNodeAt(t, n, o, u, e) || l.updateNextNode(t, n, o, e, c, a) || l.addNode(t, n, o, e, a), a += t.nodeSize;
          }), l.syncToMarks([], r, e), this.node.isTextblock && l.addTextblockHacks(), l.destroyRest(), (l.changed || 2 == this.dirty) && (o && this.protectLocalComposition(e, o), Te(this.contentDOM, this.children, e), z && function (e) {
            if ("UL" == e.nodeName || "OL" == e.nodeName) {
              var t = e.style.cssText;
              e.style.cssText = t + "; list-style: square !important", window.getComputedStyle(e).listStyle, e.style.cssText = t;
            }
          }(this.dom));
        }
      }, {
        key: "localCompositionInfo",
        value: function (e, t) {
          var n = e.state.selection,
            r = n.from,
            a = n.to;
          if (!(e.state.selection instanceof g.TextSelection) || r < t || a > t + this.node.content.size) return null;
          var i = e.input.compositionNode;
          if (!i || !this.dom.contains(i.parentNode)) return null;
          if (this.node.inlineContent) {
            var o = i.nodeValue,
              s = function (e, t, n, r) {
                for (var a = 0, i = 0; a < e.childCount && i <= r;) {
                  var o = e.child(a++),
                    s = i;
                  if (i += o.nodeSize, o.isText) {
                    for (var l = o.text; a < e.childCount;) {
                      var c = e.child(a++);
                      if (i += c.nodeSize, !c.isText) break;
                      l += c.text;
                    }
                    if (i >= n) {
                      if (i >= r && l.slice(r - t.length - s, r - s) == t) return r - t.length;
                      var u = s < r ? l.lastIndexOf(t, r - s - 1) : -1;
                      if (u >= 0 && u + t.length + s >= n) return s + u;
                      if (n == r && l.length >= r + t.length - s && l.slice(r - s, r - s + t.length) == t) return r;
                    }
                  }
                }
                return -1;
              }(this.node.content, o, r - t, a - t);
            return s < 0 ? null : {
              node: i,
              pos: s,
              text: o
            };
          }
          return {
            node: i,
            pos: -1,
            text: ""
          };
        }
      }, {
        key: "protectLocalComposition",
        value: function (e, t) {
          var n = t.node,
            r = t.pos,
            a = t.text;
          if (!this.getDesc(n)) {
            for (var i = n; i.parentNode != this.contentDOM; i = i.parentNode) {
              for (; i.previousSibling;) i.parentNode.removeChild(i.previousSibling);
              for (; i.nextSibling;) i.parentNode.removeChild(i.nextSibling);
              i.pmViewDesc && (i.pmViewDesc = void 0);
            }
            var o = new Ee(this, i, n, a);
            e.input.compositionNodes.push(o), this.children = Fe(this.children, r, r + a.length, e, o);
          }
        }
      }, {
        key: "update",
        value: function (e, t, n, r) {
          return !(3 == this.dirty || !e.sameMarkup(this.node) || (this.updateInner(e, t, n, r), 0));
        }
      }, {
        key: "updateInner",
        value: function (e, t, n, r) {
          this.updateOuterDeco(t), this.node = e, this.innerDeco = n, this.contentDOM && this.updateChildren(r, this.posAtStart), this.dirty = 0;
        }
      }, {
        key: "updateOuterDeco",
        value: function (e) {
          if (!Re(e, this.outerDeco)) {
            var t = 1 != this.nodeDOM.nodeType,
              n = this.dom;
            this.dom = Ie(this.dom, this.nodeDOM, De(this.outerDeco, this.node, t), De(e, this.node, t)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
          }
        }
      }, {
        key: "selectNode",
        value: function () {
          1 == this.nodeDOM.nodeType && (this.nodeDOM.classList.add("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || (this.nodeDOM.draggable = !0));
        }
      }, {
        key: "deselectNode",
        value: function () {
          1 == this.nodeDOM.nodeType && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || this.nodeDOM.removeAttribute("draggable"));
        }
      }, {
        key: "domAtom",
        get: function () {
          return this.node.isAtom;
        }
      }], [{
        key: "create",
        value: function (e, t, r, a, i, o) {
          var s,
            l = i.nodeViews[t.type.name],
            c = l && l(t, i, function () {
              return s ? s.parent ? s.parent.posBeforeChild(s) : void 0 : o;
            }, r, a),
            u = c && c.dom,
            d = c && c.contentDOM;
          if (t.isText) {
            if (u) {
              if (3 != u.nodeType) throw new RangeError("Text must be rendered as a DOM text node");
            } else u = document.createTextNode(t.text);
          } else if (!u) {
            var p = y.DOMSerializer.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs);
            u = p.dom, d = p.contentDOM;
          }
          d || t.isText || "BR" == u.nodeName || (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0));
          var f = u;
          return u = Le(u, r, t), c ? s = new Se(e, t, r, a, u, d || null, f, c, i, o + 1) : t.isText ? new Oe(e, t, r, a, u, f, i) : new n(e, t, r, a, u, d || null, f, i, o + 1);
        }
      }]), n;
    }(ye);
  function Ce(e, t, n, r, a) {
    Le(r, t, e);
    var i = new we(void 0, e, t, n, r, r, r, a, 0);
    return i.contentDOM && i.updateChildren(a, 0), i;
  }
  var Oe = function (e) {
      l(n, e);
      var t = u(n);
      function n(e, r, a, i, o, s, l) {
        return h(this, n), t.call(this, e, r, a, i, o, null, s, l, 0);
      }
      return m(n, [{
        key: "parseRule",
        value: function () {
          for (var e = this.nodeDOM.parentNode; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
          return {
            skip: e || !0
          };
        }
      }, {
        key: "update",
        value: function (e, t, n, r) {
          return !(3 == this.dirty || 0 != this.dirty && !this.inParent() || !e.sameMarkup(this.node) || (this.updateOuterDeco(t), 0 == this.dirty && e.text == this.node.text || e.text == this.nodeDOM.nodeValue || (this.nodeDOM.nodeValue = e.text, r.trackWrites == this.nodeDOM && (r.trackWrites = null)), this.node = e, this.dirty = 0, 0));
        }
      }, {
        key: "inParent",
        value: function () {
          for (var e = this.parent.contentDOM, t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
          return !1;
        }
      }, {
        key: "domFromPos",
        value: function (e) {
          return {
            node: this.nodeDOM,
            offset: e
          };
        }
      }, {
        key: "localPosFromDOM",
        value: function (e, t, r) {
          return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : s(p(n.prototype), "localPosFromDOM", this).call(this, e, t, r);
        }
      }, {
        key: "ignoreMutation",
        value: function (e) {
          return "characterData" != e.type && "selection" != e.type;
        }
      }, {
        key: "slice",
        value: function (e, t, r) {
          var a = this.node.cut(e, t),
            i = document.createTextNode(a.text);
          return new n(this.parent, a, this.outerDeco, this.innerDeco, i, i, r);
        }
      }, {
        key: "markDirty",
        value: function (e, t) {
          s(p(n.prototype), "markDirty", this).call(this, e, t), this.dom == this.nodeDOM || 0 != e && t != this.nodeDOM.nodeValue.length || (this.dirty = 3);
        }
      }, {
        key: "domAtom",
        get: function () {
          return !1;
        }
      }, {
        key: "isText",
        value: function (e) {
          return this.node.text == e;
        }
      }]), n;
    }(we),
    Me = function (e) {
      l(n, e);
      var t = u(n);
      function n() {
        return h(this, n), t.apply(this, arguments);
      }
      return m(n, [{
        key: "parseRule",
        value: function () {
          return {
            ignore: !0
          };
        }
      }, {
        key: "matchesHack",
        value: function (e) {
          return 0 == this.dirty && this.dom.nodeName == e;
        }
      }, {
        key: "domAtom",
        get: function () {
          return !0;
        }
      }, {
        key: "ignoreForCoords",
        get: function () {
          return "IMG" == this.dom.nodeName;
        }
      }]), n;
    }(ye),
    Se = function (e) {
      l(n, e);
      var t = u(n);
      function n(e, r, a, i, o, s, l, c, u, d) {
        var p;
        return h(this, n), (p = t.call(this, e, r, a, i, o, s, l, u, d)).spec = c, p;
      }
      return m(n, [{
        key: "update",
        value: function (e, t, r, a) {
          if (3 == this.dirty) return !1;
          if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
            var i = this.spec.update(e, t, r);
            return i && this.updateInner(e, t, r, a), i;
          }
          return !(!this.contentDOM && !e.isLeaf) && s(p(n.prototype), "update", this).call(this, e, t, r, a);
        }
      }, {
        key: "selectNode",
        value: function () {
          this.spec.selectNode ? this.spec.selectNode() : s(p(n.prototype), "selectNode", this).call(this);
        }
      }, {
        key: "deselectNode",
        value: function () {
          this.spec.deselectNode ? this.spec.deselectNode() : s(p(n.prototype), "deselectNode", this).call(this);
        }
      }, {
        key: "setSelection",
        value: function (e, t, r, a) {
          this.spec.setSelection ? this.spec.setSelection(e, t, r.root) : s(p(n.prototype), "setSelection", this).call(this, e, t, r, a);
        }
      }, {
        key: "destroy",
        value: function () {
          this.spec.destroy && this.spec.destroy(), s(p(n.prototype), "destroy", this).call(this);
        }
      }, {
        key: "stopEvent",
        value: function (e) {
          return !!this.spec.stopEvent && this.spec.stopEvent(e);
        }
      }, {
        key: "ignoreMutation",
        value: function (e) {
          return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : s(p(n.prototype), "ignoreMutation", this).call(this, e);
        }
      }]), n;
    }(we);
  function Te(e, t, n) {
    for (var r = e.firstChild, a = !1, i = 0; i < t.length; i++) {
      var o = t[i],
        s = o.dom;
      if (s.parentNode == e) {
        for (; s != r;) r = Be(r), a = !0;
        r = r.nextSibling;
      } else a = !0, e.insertBefore(s, r);
      if (o instanceof be) {
        var l = r ? r.previousSibling : e.lastChild;
        Te(o.contentDOM, o.children, n), r = l ? l.nextSibling : e.firstChild;
      }
    }
    for (; r;) r = Be(r), a = !0;
    a && n.trackWrites == e && (n.trackWrites = null);
  }
  var ke = function (e) {
    e && (this.nodeName = e);
  };
  ke.prototype = Object.create(null);
  var xe = [new ke()];
  function De(e, t, n) {
    if (0 == e.length) return xe;
    for (var r = n ? xe[0] : new ke(), a = [r], i = 0; i < e.length; i++) {
      var o = e[i].type.attrs;
      if (o) for (var s in o.nodeName && a.push(r = new ke(o.nodeName)), o) {
        var l = o[s];
        null != l && (n && 1 == a.length && a.push(r = new ke(t.isInline ? "span" : "div")), "class" == s ? r.class = (r.class ? r.class + " " : "") + l : "style" == s ? r.style = (r.style ? r.style + ";" : "") + l : "nodeName" != s && (r[s] = l));
      }
    }
    return a;
  }
  function Ie(e, t, n, r) {
    if (n == xe && r == xe) return t;
    for (var a = t, i = 0; i < r.length; i++) {
      var o = r[i],
        s = n[i];
      if (i) {
        var l = void 0;
        s && s.nodeName == o.nodeName && a != e && (l = a.parentNode) && l.nodeName.toLowerCase() == o.nodeName || ((l = document.createElement(o.nodeName)).pmIsDeco = !0, l.appendChild(a), s = xe[0]), a = l;
      }
      Pe(a, s || xe[0], o);
    }
    return a;
  }
  function Pe(e, t, n) {
    for (var r in t) "class" == r || "style" == r || "nodeName" == r || r in n || e.removeAttribute(r);
    for (var a in n) "class" != a && "style" != a && "nodeName" != a && n[a] != t[a] && e.setAttribute(a, n[a]);
    if (t.class != n.class) {
      for (var i = t.class ? t.class.split(" ").filter(Boolean) : [], o = n.class ? n.class.split(" ").filter(Boolean) : [], s = 0; s < i.length; s++) -1 == o.indexOf(i[s]) && e.classList.remove(i[s]);
      for (var l = 0; l < o.length; l++) -1 == i.indexOf(o[l]) && e.classList.add(o[l]);
      0 == e.classList.length && e.removeAttribute("class");
    }
    if (t.style != n.style) {
      if (t.style) for (var c, u = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g; c = u.exec(t.style);) e.style.removeProperty(c[1]);
      n.style && (e.style.cssText += n.style);
    }
  }
  function Le(e, t, n) {
    return Ie(e, e, xe, De(t, n, 1 != e.nodeType));
  }
  function Re(e, t) {
    if (e.length != t.length) return !1;
    for (var n = 0; n < e.length; n++) if (!e[n].type.eq(t[n].type)) return !1;
    return !0;
  }
  function Be(e) {
    var t = e.nextSibling;
    return e.parentNode.removeChild(e), t;
  }
  var Ne = function () {
    function e(t, n, r) {
      h(this, e), this.lock = n, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = t, this.preMatch = function (e, t) {
        var n = t,
          r = n.children.length,
          a = e.childCount,
          i = new Map(),
          o = [];
        e: for (; a > 0;) {
          for (var s = void 0;;) if (r) {
            var l = n.children[r - 1];
            if (!(l instanceof be)) {
              s = l, r--;
              break;
            }
            n = l, r = l.children.length;
          } else {
            if (n == t) break e;
            r = n.parent.children.indexOf(n), n = n.parent;
          }
          var c = s.node;
          if (c) {
            if (c != e.child(a - 1)) break;
            --a, i.set(s, a), o.push(s);
          }
        }
        return {
          index: a,
          matched: i,
          matches: o.reverse()
        };
      }(t.node.content, t);
    }
    return m(e, [{
      key: "destroyBetween",
      value: function (e, t) {
        if (e != t) {
          for (var n = e; n < t; n++) this.top.children[n].destroy();
          this.top.children.splice(e, t - e), this.changed = !0;
        }
      }
    }, {
      key: "destroyRest",
      value: function () {
        this.destroyBetween(this.index, this.top.children.length);
      }
    }, {
      key: "syncToMarks",
      value: function (e, t, n) {
        for (var r = 0, a = this.stack.length >> 1, i = Math.min(a, e.length); r < i && (r == a - 1 ? this.top : this.stack[r + 1 << 1]).matchesMark(e[r]) && !1 !== e[r].type.spec.spanning;) r++;
        for (; r < a;) this.destroyRest(), this.top.dirty = 0, this.index = this.stack.pop(), this.top = this.stack.pop(), a--;
        for (; a < e.length;) {
          this.stack.push(this.top, this.index + 1);
          for (var o = -1, s = this.index; s < Math.min(this.index + 3, this.top.children.length); s++) {
            var l = this.top.children[s];
            if (l.matchesMark(e[a]) && !this.isLocked(l.dom)) {
              o = s;
              break;
            }
          }
          if (o > -1) o > this.index && (this.changed = !0, this.destroyBetween(this.index, o)), this.top = this.top.children[this.index];else {
            var c = be.create(this.top, e[a], t, n);
            this.top.children.splice(this.index, 0, c), this.top = c, this.changed = !0;
          }
          this.index = 0, a++;
        }
      }
    }, {
      key: "findNodeMatch",
      value: function (e, t, n, r) {
        var a,
          i = -1;
        if (r >= this.preMatch.index && (a = this.preMatch.matches[r - this.preMatch.index]).parent == this.top && a.matchesNode(e, t, n)) i = this.top.children.indexOf(a, this.index);else for (var o = this.index, s = Math.min(this.top.children.length, o + 5); o < s; o++) {
          var l = this.top.children[o];
          if (l.matchesNode(e, t, n) && !this.preMatch.matched.has(l)) {
            i = o;
            break;
          }
        }
        return !(i < 0 || (this.destroyBetween(this.index, i), this.index++, 0));
      }
    }, {
      key: "updateNodeAt",
      value: function (e, t, n, r, a) {
        var i = this.top.children[r];
        return 3 == i.dirty && i.dom == i.contentDOM && (i.dirty = 2), !!i.update(e, t, n, a) && (this.destroyBetween(this.index, r), this.index++, !0);
      }
    }, {
      key: "findIndexWithChild",
      value: function (e) {
        for (;;) {
          var t = e.parentNode;
          if (!t) return -1;
          if (t == this.top.contentDOM) {
            var n = e.pmViewDesc;
            if (n) for (var r = this.index; r < this.top.children.length; r++) if (this.top.children[r] == n) return r;
            return -1;
          }
          e = t;
        }
      }
    }, {
      key: "updateNextNode",
      value: function (e, t, n, r, a, i) {
        for (var o = this.index; o < this.top.children.length; o++) {
          var s = this.top.children[o];
          if (s instanceof we) {
            var l = this.preMatch.matched.get(s);
            if (null != l && l != a) return !1;
            var c = s.dom,
              u = void 0,
              d = this.isLocked(c) && !(e.isText && s.node && s.node.isText && s.nodeDOM.nodeValue == e.text && 3 != s.dirty && Re(t, s.outerDeco));
            if (!d && s.update(e, t, n, r)) return this.destroyBetween(this.index, o), s.dom != c && (this.changed = !0), this.index++, !0;
            if (!d && (u = this.recreateWrapper(s, e, t, n, r, i))) return this.destroyBetween(this.index, o), this.top.children[this.index] = u, u.contentDOM && (u.dirty = 2, u.updateChildren(r, i + 1), u.dirty = 0), this.changed = !0, this.index++, !0;
            break;
          }
        }
        return !1;
      }
    }, {
      key: "recreateWrapper",
      value: function (e, t, n, r, i, o) {
        if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !Re(n, e.outerDeco) || !r.eq(e.innerDeco)) return null;
        var s = we.create(this.top, t, n, r, i, o);
        if (s.contentDOM) {
          s.children = e.children, e.children = [];
          var l,
            c = a(s.children);
          try {
            for (c.s(); !(l = c.n()).done;) l.value.parent = s;
          } catch (e) {
            c.e(e);
          } finally {
            c.f();
          }
        }
        return e.destroy(), s;
      }
    }, {
      key: "addNode",
      value: function (e, t, n, r, a) {
        var i = we.create(this.top, e, t, n, r, a);
        i.contentDOM && i.updateChildren(r, a + 1), this.top.children.splice(this.index++, 0, i), this.changed = !0;
      }
    }, {
      key: "placeWidget",
      value: function (e, t, n) {
        var r = this.index < this.top.children.length ? this.top.children[this.index] : null;
        if (!r || !r.matchesWidget(e) || e != r.widget && r.widget.type.toDOM.parentNode) {
          var a = new ve(this.top, e, t, n);
          this.top.children.splice(this.index++, 0, a), this.changed = !0;
        } else this.index++;
      }
    }, {
      key: "addTextblockHacks",
      value: function () {
        for (var e = this.top.children[this.index - 1], t = this.top; e instanceof be;) e = (t = e).children[t.children.length - 1];
        (!e || !(e instanceof Oe) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((V || W) && e && "false" == e.dom.contentEditable && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
      }
    }, {
      key: "addHackNode",
      value: function (e, t) {
        if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;else {
          var n = document.createElement(e);
          "IMG" == e && (n.className = "ProseMirror-separator", n.alt = ""), "BR" == e && (n.className = "ProseMirror-trailingBreak");
          var r = new Me(this.top, [], n, null);
          t != this.top ? t.children.push(r) : t.children.splice(this.index++, 0, r), this.changed = !0;
        }
      }
    }, {
      key: "isLocked",
      value: function (e) {
        return this.lock && (e == this.lock || 1 == e.nodeType && e.contains(this.lock.parentNode));
      }
    }]), e;
  }();
  function Ue(e, t) {
    return e.type.side - t.type.side;
  }
  function Fe(e, t, n, r, a) {
    for (var i = [], o = 0, s = 0; o < e.length; o++) {
      var l = e[o],
        c = s,
        u = s += l.size;
      c >= n || u <= t ? i.push(l) : (c < t && i.push(l.slice(0, t - c, r)), a && (i.push(a), a = void 0), u > n && i.push(l.slice(n - c, l.size, r)));
    }
    return i;
  }
  function je(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = e.domSelectionRange(),
      a = e.state.doc;
    if (!n.focusNode) return null;
    var i = e.docView.nearestDesc(n.focusNode),
      o = i && 0 == i.size,
      s = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
    if (s < 0) return null;
    var l,
      c,
      u = a.resolve(s);
    if (x(n)) {
      for (l = s; i && !i.node;) i = i.parent;
      var d = i.node;
      if (i && d.isAtom && g.NodeSelection.isSelectable(d) && i.parent && (!d.isInline || !function (e, t, n) {
        for (var r = 0 == t, a = t == T(e); r || a;) {
          if (e == n) return !0;
          var i = E(e);
          if (!(e = e.parentNode)) return !1;
          r = r && 0 == i, a = a && i == T(e);
        }
      }(n.focusNode, n.focusOffset, i.dom))) {
        var p = i.posBefore;
        c = new g.NodeSelection(s == p ? u : a.resolve(p));
      }
    } else {
      if (n instanceof e.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
        for (var f = s, h = s, _ = 0; _ < n.rangeCount; _++) {
          var m = n.getRangeAt(_);
          f = Math.min(f, e.docView.posFromDOM(m.startContainer, m.startOffset, 1)), h = Math.max(h, e.docView.posFromDOM(m.endContainer, m.endOffset, -1));
        }
        if (f < 0) return null;
        var A = r(h == e.state.selection.anchor ? [h, f] : [f, h], 2);
        l = A[0], s = A[1], u = a.resolve(s);
      } else l = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
      if (l < 0) return null;
    }
    var y = a.resolve(l);
    return c || (c = $e(e, y, u, "pointer" == t || e.state.selection.head < u.pos && !o ? 1 : -1)), c;
  }
  function He(e) {
    return e.editable ? e.hasFocus() : Ze(e) && document.activeElement && document.activeElement.contains(e.dom);
  }
  function We(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = e.state.selection;
    if (Qe(e, n), He(e)) {
      if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && W) {
        var r = e.domSelectionRange(),
          a = e.domObserver.currentSelection;
        if (r.anchorNode && a.anchorNode && O(r.anchorNode, r.anchorOffset, a.anchorNode, a.anchorOffset)) return e.input.mouseDown.delayedSelectionSync = !0, void e.domObserver.setCurSelection();
      }
      if (e.domObserver.disconnectSelection(), e.cursorWrapper) !function (e) {
        var t = e.domSelection();
        if (t) {
          var n = e.cursorWrapper.dom,
            r = "IMG" == n.nodeName;
          r ? t.collapse(n.parentNode, E(n) + 1) : t.collapse(n, 0), !r && !e.state.selection.visible && U && F <= 11 && (n.disabled = !0, n.disabled = !1);
        }
      }(e);else {
        var i,
          o,
          s = n.anchor,
          l = n.head;
        !Ke || n instanceof g.TextSelection || (n.$from.parent.inlineContent || (i = Ve(e, n.from)), n.empty || n.$from.parent.inlineContent || (o = Ve(e, n.to))), e.docView.setSelection(s, l, e, t), Ke && (i && Ye(i), o && Ye(o)), n.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && function (e) {
          var t = e.dom.ownerDocument;
          t.removeEventListener("selectionchange", e.input.hideSelectionGuard);
          var n = e.domSelectionRange(),
            r = n.anchorNode,
            a = n.anchorOffset;
          t.addEventListener("selectionchange", e.input.hideSelectionGuard = function () {
            n.anchorNode == r && n.anchorOffset == a || (t.removeEventListener("selectionchange", e.input.hideSelectionGuard), setTimeout(function () {
              He(e) && !e.state.selection.visible || e.dom.classList.remove("ProseMirror-hideselection");
            }, 20));
          });
        }(e));
      }
      e.domObserver.setCurSelection(), e.domObserver.connectSelection();
    }
  }
  var Ke = V || W && K < 63;
  function Ve(e, t) {
    var n = e.docView.domFromPos(t, 0),
      r = n.node,
      a = n.offset,
      i = a < r.childNodes.length ? r.childNodes[a] : null,
      o = a ? r.childNodes[a - 1] : null;
    if (V && i && "false" == i.contentEditable) return ze(i);
    if (!(i && "false" != i.contentEditable || o && "false" != o.contentEditable)) {
      if (i) return ze(i);
      if (o) return ze(o);
    }
  }
  function ze(e) {
    return e.contentEditable = "true", V && e.draggable && (e.draggable = !1, e.wasDraggable = !0), e;
  }
  function Ye(e) {
    e.contentEditable = "false", e.wasDraggable && (e.draggable = !0, e.wasDraggable = null);
  }
  function Qe(e, t) {
    if (t instanceof g.NodeSelection) {
      var n = e.docView.descAt(t.from);
      n != e.lastSelectedViewDesc && (Ge(e), n && n.selectNode(), e.lastSelectedViewDesc = n);
    } else Ge(e);
  }
  function Ge(e) {
    e.lastSelectedViewDesc && (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), e.lastSelectedViewDesc = void 0);
  }
  function $e(e, t, n, r) {
    return e.someProp("createSelectionBetween", function (r) {
      return r(e, t, n);
    }) || g.TextSelection.between(t, n, r);
  }
  function qe(e) {
    return !(e.editable && !e.hasFocus()) && Ze(e);
  }
  function Ze(e) {
    var t = e.domSelectionRange();
    if (!t.anchorNode) return !1;
    try {
      return e.dom.contains(3 == t.anchorNode.nodeType ? t.anchorNode.parentNode : t.anchorNode) && (e.editable || e.dom.contains(3 == t.focusNode.nodeType ? t.focusNode.parentNode : t.focusNode));
    } catch (e) {
      return !1;
    }
  }
  function Xe(e, t) {
    var n = e.selection,
      r = n.$anchor,
      a = n.$head,
      i = t > 0 ? r.max(a) : r.min(a),
      o = i.parent.inlineContent ? i.depth ? e.doc.resolve(t > 0 ? i.after() : i.before()) : null : i;
    return o && g.Selection.findFrom(o, t);
  }
  function Je(e, t) {
    return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
  }
  function et(e, t, n) {
    var r = e.state.selection;
    if (!(r instanceof g.TextSelection)) {
      if (r instanceof g.NodeSelection && r.node.isInline) return Je(e, new g.TextSelection(t > 0 ? r.$to : r.$from));
      var a = Xe(e.state, t);
      return !!a && Je(e, a);
    }
    if (n.indexOf("s") > -1) {
      var i = r.$head,
        o = i.textOffset ? null : t < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText || !o.isLeaf) return !1;
      var s = e.state.doc.resolve(i.pos + o.nodeSize * (t < 0 ? -1 : 1));
      return Je(e, new g.TextSelection(r.$anchor, s));
    }
    if (!r.empty) return !1;
    if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
      var l = Xe(e.state, t);
      return !!(l && l instanceof g.NodeSelection) && Je(e, l);
    }
    if (!(Y && n.indexOf("m") > -1)) {
      var c,
        u = r.$head,
        d = u.textOffset ? null : t < 0 ? u.nodeBefore : u.nodeAfter;
      if (!d || d.isText) return !1;
      var p = t < 0 ? u.pos - d.nodeSize : u.pos;
      return !!(d.isAtom || (c = e.docView.descAt(p)) && !c.contentDOM) && (g.NodeSelection.isSelectable(d) ? Je(e, new g.NodeSelection(t < 0 ? e.state.doc.resolve(u.pos - d.nodeSize) : u)) : !!$ && Je(e, new g.TextSelection(e.state.doc.resolve(t < 0 ? p : p + d.nodeSize))));
    }
  }
  function tt(e) {
    return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
  }
  function nt(e, t) {
    var n = e.pmViewDesc;
    return n && 0 == n.size && (t < 0 || e.nextSibling || "BR" != e.nodeName);
  }
  function rt(e, t) {
    return t < 0 ? function (e) {
      var t = e.domSelectionRange(),
        n = t.focusNode,
        r = t.focusOffset;
      if (n) {
        var a,
          i,
          o = !1;
        for (j && 1 == n.nodeType && r < tt(n) && nt(n.childNodes[r], -1) && (o = !0);;) if (r > 0) {
          if (1 != n.nodeType) break;
          var s = n.childNodes[r - 1];
          if (nt(s, -1)) a = n, i = --r;else {
            if (3 != s.nodeType) break;
            r = (n = s).nodeValue.length;
          }
        } else {
          if (at(n)) break;
          for (var l = n.previousSibling; l && nt(l, -1);) a = n.parentNode, i = E(l), l = l.previousSibling;
          if (l) r = tt(n = l);else {
            if ((n = n.parentNode) == e.dom) break;
            r = 0;
          }
        }
        o ? it(e, n, r) : a && it(e, a, i);
      }
    }(e) : function (e) {
      var t = e.domSelectionRange(),
        n = t.focusNode,
        r = t.focusOffset;
      if (n) {
        for (var a, i, o = tt(n);;) if (r < o) {
          if (1 != n.nodeType) break;
          if (!nt(n.childNodes[r], 1)) break;
          a = n, i = ++r;
        } else {
          if (at(n)) break;
          for (var s = n.nextSibling; s && nt(s, 1);) a = s.parentNode, i = E(s) + 1, s = s.nextSibling;
          if (s) r = 0, o = tt(n = s);else {
            if ((n = n.parentNode) == e.dom) break;
            r = o = 0;
          }
        }
        a && it(e, a, i);
      }
    }(e);
  }
  function at(e) {
    var t = e.pmViewDesc;
    return t && t.node && t.node.isBlock;
  }
  function it(e, t, n) {
    var r, a;
    3 != t.nodeType && ((a = function (e, t) {
      for (; e && t == e.childNodes.length && !k(e);) t = E(e) + 1, e = e.parentNode;
      for (; e && t < e.childNodes.length;) {
        var n = e.childNodes[t];
        if (3 == n.nodeType) return n;
        if (1 == n.nodeType && "false" == n.contentEditable) break;
        e = n, t = 0;
      }
    }(t, n)) ? (t = a, n = 0) : (r = function (e, t) {
      for (; e && !t && !k(e);) t = E(e), e = e.parentNode;
      for (; e && t;) {
        var n = e.childNodes[t - 1];
        if (3 == n.nodeType) return n;
        if (1 == n.nodeType && "false" == n.contentEditable) break;
        t = (e = n).childNodes.length;
      }
    }(t, n)) && (t = r, n = r.nodeValue.length));
    var i = e.domSelection();
    if (i) {
      if (x(i)) {
        var o = document.createRange();
        o.setEnd(t, n), o.setStart(t, n), i.removeAllRanges(), i.addRange(o);
      } else i.extend && i.extend(t, n);
      e.domObserver.setCurSelection();
      var s = e.state;
      setTimeout(function () {
        e.state == s && We(e);
      }, 50);
    }
  }
  function ot(e, t) {
    var n = e.state.doc.resolve(t);
    if (!W && !Q && n.parent.inlineContent) {
      var r = e.coordsAtPos(t);
      if (t > n.start()) {
        var a = e.coordsAtPos(t - 1),
          i = (a.top + a.bottom) / 2;
        if (i > r.top && i < r.bottom && Math.abs(a.left - r.left) > 1) return a.left < r.left ? "ltr" : "rtl";
      }
      if (t < n.end()) {
        var o = e.coordsAtPos(t + 1),
          s = (o.top + o.bottom) / 2;
        if (s > r.top && s < r.bottom && Math.abs(o.left - r.left) > 1) return o.left > r.left ? "ltr" : "rtl";
      }
    }
    return "rtl" == getComputedStyle(e.dom).direction ? "rtl" : "ltr";
  }
  function st(e, t, n) {
    var r = e.state.selection;
    if (r instanceof g.TextSelection && !r.empty || n.indexOf("s") > -1) return !1;
    if (Y && n.indexOf("m") > -1) return !1;
    var a = r.$from,
      i = r.$to;
    if (!a.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
      var o = Xe(e.state, t);
      if (o && o instanceof g.NodeSelection) return Je(e, o);
    }
    if (!a.parent.inlineContent) {
      var s = t < 0 ? a : i,
        l = r instanceof g.AllSelection ? g.Selection.near(s, t) : g.Selection.findFrom(s, t);
      return !!l && Je(e, l);
    }
    return !1;
  }
  function lt(e, t) {
    if (!(e.state.selection instanceof g.TextSelection)) return !0;
    var n = e.state.selection,
      r = n.$head,
      a = n.$anchor,
      i = n.empty;
    if (!r.sameParent(a)) return !0;
    if (!i) return !1;
    if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
    var o = !r.textOffset && (t < 0 ? r.nodeBefore : r.nodeAfter);
    if (o && !o.isText) {
      var s = e.state.tr;
      return t < 0 ? s.delete(r.pos - o.nodeSize, r.pos) : s.delete(r.pos, r.pos + o.nodeSize), e.dispatch(s), !0;
    }
    return !1;
  }
  function ct(e, t, n) {
    e.domObserver.stop(), t.contentEditable = n, e.domObserver.start();
  }
  function ut(e, t) {
    e.someProp("transformCopied", function (n) {
      t = n(t, e);
    });
    for (var n = [], r = t, a = r.content, i = r.openStart, o = r.openEnd; i > 1 && o > 1 && 1 == a.childCount && 1 == a.firstChild.childCount;) {
      i--, o--;
      var s = a.firstChild;
      n.push(s.type.name, s.attrs != s.type.defaultAttrs ? s.attrs : null), a = s.content;
    }
    var l = e.someProp("clipboardSerializer") || y.DOMSerializer.fromSchema(e.state.schema),
      c = vt(),
      u = c.createElement("div");
    u.appendChild(l.serializeFragment(a, {
      document: c
    }));
    for (var d, p = u.firstChild, f = 0; p && 1 == p.nodeType && (d = gt[p.nodeName.toLowerCase()]);) {
      for (var h = d.length - 1; h >= 0; h--) {
        for (var _ = c.createElement(d[h]); u.firstChild;) _.appendChild(u.firstChild);
        u.appendChild(_), f++;
      }
      p = u.firstChild;
    }
    return p && 1 == p.nodeType && p.setAttribute("data-pm-slice", "".concat(i, " ").concat(o).concat(f ? " -".concat(f) : "", " ").concat(JSON.stringify(n))), {
      dom: u,
      text: e.someProp("clipboardTextSerializer", function (n) {
        return n(t, e);
      }) || t.content.textBetween(0, t.content.size, "\n\n"),
      slice: t
    };
  }
  function dt(e, t, n, r, a) {
    var i,
      o,
      s = a.parent.type.spec.code;
    if (!n && !t) return null;
    var l = !!t && (r || s || !n);
    if (l) {
      if (e.someProp("transformPastedText", function (n) {
        t = n(t, s || r, e);
      }), s) return o = new y.Slice(y.Fragment.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))), 0, 0), e.someProp("transformPasted", function (t) {
        o = t(o, e, !0);
      }), o;
      var c = e.someProp("clipboardTextParser", function (n) {
        return n(t, a, r, e);
      });
      if (c) o = c;else {
        var u = a.marks(),
          d = e.state.schema,
          p = y.DOMSerializer.fromSchema(d);
        i = document.createElement("div"), t.split(/(?:\r\n?|\n)+/).forEach(function (e) {
          var t = i.appendChild(document.createElement("p"));
          e && t.appendChild(p.serializeNode(d.text(e, u)));
        });
      }
    } else e.someProp("transformPastedHTML", function (t) {
      n = t(n, e);
    }), i = function (e) {
      var t = /^(\s*<meta [^>]*>)*/.exec(e);
      t && (e = e.slice(t[0].length));
      var n,
        r = vt().createElement("div"),
        a = /<([a-z][^>\s]+)/i.exec(e);
      if ((n = a && gt[a[1].toLowerCase()]) && (e = n.map(function (e) {
        return "<" + e + ">";
      }).join("") + e + n.map(function (e) {
        return "</" + e + ">";
      }).reverse().join("")), r.innerHTML = function (e) {
        var t = window.trustedTypes;
        return t ? (Et || (Et = t.defaultPolicy || t.createPolicy("ProseMirrorClipboard", {
          createHTML: function (e) {
            return e;
          }
        })), Et.createHTML(e)) : e;
      }(e), n) for (var i = 0; i < n.length; i++) r = r.querySelector(n[i]) || r;
      return r;
    }(n), $ && function (e) {
      for (var t = e.querySelectorAll(W ? "span:not([class]):not([style])" : "span.Apple-converted-space"), n = 0; n < t.length; n++) {
        var r = t[n];
        1 == r.childNodes.length && " " == r.textContent && r.parentNode && r.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), r);
      }
    }(i);
    var f = i && i.querySelector("[data-pm-slice]"),
      h = f && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(f.getAttribute("data-pm-slice") || "");
    if (h && h[3]) for (var _ = +h[3]; _ > 0; _--) {
      for (var m = i.firstChild; m && 1 != m.nodeType;) m = m.nextSibling;
      if (!m) break;
      i = m;
    }
    if (!o) {
      var A = e.someProp("clipboardParser") || e.someProp("domParser") || y.DOMParser.fromSchema(e.state.schema);
      o = A.parseSlice(i, {
        preserveWhitespace: !(!l && !h),
        context: a,
        ruleFromNode: function (e) {
          return "BR" != e.nodeName || e.nextSibling || !e.parentNode || pt.test(e.parentNode.nodeName) ? null : {
            ignore: !0
          };
        }
      });
    }
    if (h) o = function (e, t) {
      if (!e.size) return e;
      var n,
        r = e.content.firstChild.type.schema;
      try {
        n = JSON.parse(t);
      } catch (t) {
        return e;
      }
      for (var a = e.content, i = e.openStart, o = e.openEnd, s = n.length - 2; s >= 0; s -= 2) {
        var l = r.nodes[n[s]];
        if (!l || l.hasRequiredAttrs()) break;
        a = y.Fragment.from(l.create(n[s + 1], a)), i++, o++;
      }
      return new y.Slice(a, i, o);
    }(At(o, +h[1], +h[2]), h[4]);else if (o = y.Slice.maxOpen(function (e, t) {
      if (e.childCount < 2) return e;
      for (var n, r = function () {
          var n,
            r = t.node(a).contentMatchAt(t.index(a)),
            i = [];
          if (e.forEach(function (e) {
            if (i) {
              var t,
                a = r.findWrapping(e.type);
              if (!a) return i = null;
              if (t = i.length && n.length && ht(a, n, e, i[i.length - 1], 0)) i[i.length - 1] = t;else {
                i.length && (i[i.length - 1] = _t(i[i.length - 1], n.length));
                var o = ft(e, a);
                i.push(o), r = r.matchType(o.type), n = a;
              }
            }
          }), i) return {
            v: y.Fragment.from(i)
          };
        }, a = t.depth; a >= 0; a--) if (n = r()) return n.v;
      return e;
    }(o.content, a), !0), o.openStart || o.openEnd) {
      for (var g = 0, v = 0, E = o.content.firstChild; g < o.openStart && !E.type.spec.isolating; g++, E = E.firstChild);
      for (var b = o.content.lastChild; v < o.openEnd && !b.type.spec.isolating; v++, b = b.lastChild);
      o = At(o, g, v);
    }
    return e.someProp("transformPasted", function (t) {
      o = t(o, e, l);
    }), o;
  }
  var pt = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
  function ft(e, t) {
    for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = t.length - 1; r >= n; r--) e = t[r].create(null, y.Fragment.from(e));
    return e;
  }
  function ht(e, t, n, r, a) {
    if (a < e.length && a < t.length && e[a] == t[a]) {
      var i = ht(e, t, n, r.lastChild, a + 1);
      if (i) return r.copy(r.content.replaceChild(r.childCount - 1, i));
      if (r.contentMatchAt(r.childCount).matchType(a == e.length - 1 ? n.type : e[a + 1])) return r.copy(r.content.append(y.Fragment.from(ft(n, e, a + 1))));
    }
  }
  function _t(e, t) {
    if (0 == t) return e;
    var n = e.content.replaceChild(e.childCount - 1, _t(e.lastChild, t - 1)),
      r = e.contentMatchAt(e.childCount).fillBefore(y.Fragment.empty, !0);
    return e.copy(n.append(r));
  }
  function mt(e, t, n, r, a, i) {
    var o = t < 0 ? e.firstChild : e.lastChild,
      s = o.content;
    return e.childCount > 1 && (i = 0), a < r - 1 && (s = mt(s, t, n, r, a + 1, i)), a >= n && (s = t < 0 ? o.contentMatchAt(0).fillBefore(s, i <= a).append(s) : s.append(o.contentMatchAt(o.childCount).fillBefore(y.Fragment.empty, !0))), e.replaceChild(t < 0 ? 0 : e.childCount - 1, o.copy(s));
  }
  function At(e, t, n) {
    return t < e.openStart && (e = new y.Slice(mt(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd)), n < e.openEnd && (e = new y.Slice(mt(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)), e;
  }
  var gt = {
      thead: ["table"],
      tbody: ["table"],
      tfoot: ["table"],
      caption: ["table"],
      colgroup: ["table"],
      col: ["table", "colgroup"],
      tr: ["table", "tbody"],
      td: ["table", "tbody", "tr"],
      th: ["table", "tbody", "tr"]
    },
    yt = null;
  function vt() {
    return yt || (yt = document.implementation.createHTMLDocument("title"));
  }
  var Et = null,
    bt = {},
    wt = {},
    Ct = {
      touchstart: !0,
      touchmove: !0
    },
    Ot = m(function e() {
      h(this, e), this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
        time: 0,
        x: 0,
        y: 0,
        type: "",
        button: 0
      }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null;
    });
  function Mt(e, t) {
    e.input.lastSelectionOrigin = t, e.input.lastSelectionTime = Date.now();
  }
  function St(e) {
    e.someProp("handleDOMEvents", function (t) {
      for (var n in t) e.input.eventHandlers[n] || e.dom.addEventListener(n, e.input.eventHandlers[n] = function (t) {
        return Tt(e, t);
      });
    });
  }
  function Tt(e, t) {
    return e.someProp("handleDOMEvents", function (n) {
      var r = n[t.type];
      return !!r && (r(e, t) || t.defaultPrevented);
    });
  }
  function kt(e) {
    return {
      left: e.clientX,
      top: e.clientY
    };
  }
  function xt(e, t, n, r, a) {
    if (-1 == r) return !1;
    for (var i, o = e.state.doc.resolve(r), s = function (r) {
        if (e.someProp(t, function (t) {
          return r > o.depth ? t(e, n, o.nodeAfter, o.before(r), a, !0) : t(e, n, o.node(r), o.before(r), a, !1);
        })) return {
          v: !0
        };
      }, l = o.depth + 1; l > 0; l--) if (i = s(l)) return i.v;
    return !1;
  }
  function Dt(e, t, n) {
    if (e.focused || e.focus(), !e.state.selection.eq(t)) {
      var r = e.state.tr.setSelection(t);
      "pointer" == n && r.setMeta("pointer", !0), e.dispatch(r);
    }
  }
  function It(e, t, n, r) {
    return xt(e, "handleDoubleClickOn", t, n, r) || e.someProp("handleDoubleClick", function (n) {
      return n(e, t, r);
    });
  }
  function Pt(e, t, n, r) {
    return xt(e, "handleTripleClickOn", t, n, r) || e.someProp("handleTripleClick", function (n) {
      return n(e, t, r);
    }) || function (e, t, n) {
      if (0 != n.button) return !1;
      var r = e.state.doc;
      if (-1 == t) return !!r.inlineContent && (Dt(e, g.TextSelection.create(r, 0, r.content.size), "pointer"), !0);
      for (var a = r.resolve(t), i = a.depth + 1; i > 0; i--) {
        var o = i > a.depth ? a.nodeAfter : a.node(i),
          s = a.before(i);
        if (o.inlineContent) Dt(e, g.TextSelection.create(r, s + 1, s + 1 + o.content.size), "pointer");else {
          if (!g.NodeSelection.isSelectable(o)) continue;
          Dt(e, g.NodeSelection.create(r, s), "pointer");
        }
        return !0;
      }
    }(e, n, r);
  }
  function Lt(e) {
    return Ht(e);
  }
  wt.keydown = function (e, t) {
    var n = t;
    if (e.input.shiftKey = 16 == n.keyCode || n.shiftKey, !Nt(e, n) && (e.input.lastKeyCode = n.keyCode, e.input.lastKeyCodeTime = Date.now(), !G || !W || 13 != n.keyCode)) if (229 != n.keyCode && e.domObserver.forceFlush(), !z || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey) e.someProp("handleKeyDown", function (t) {
      return t(e, n);
    }) || function (e, t) {
      var n = t.keyCode,
        r = function (e) {
          var t = "";
          return e.ctrlKey && (t += "c"), e.metaKey && (t += "m"), e.altKey && (t += "a"), e.shiftKey && (t += "s"), t;
        }(t);
      if (8 == n || Y && 72 == n && "c" == r) return lt(e, -1) || rt(e, -1);
      if (46 == n && !t.shiftKey || Y && 68 == n && "c" == r) return lt(e, 1) || rt(e, 1);
      if (13 == n || 27 == n) return !0;
      if (37 == n || Y && 66 == n && "c" == r) {
        var a = 37 == n ? "ltr" == ot(e, e.state.selection.from) ? -1 : 1 : -1;
        return et(e, a, r) || rt(e, a);
      }
      if (39 == n || Y && 70 == n && "c" == r) {
        var i = 39 == n ? "ltr" == ot(e, e.state.selection.from) ? 1 : -1 : 1;
        return et(e, i, r) || rt(e, i);
      }
      return 38 == n || Y && 80 == n && "c" == r ? st(e, -1, r) || rt(e, -1) : 40 == n || Y && 78 == n && "c" == r ? function (e) {
        if (!V || e.state.selection.$head.parentOffset > 0) return !1;
        var t = e.domSelectionRange(),
          n = t.focusNode,
          r = t.focusOffset;
        if (n && 1 == n.nodeType && 0 == r && n.firstChild && "false" == n.firstChild.contentEditable) {
          var a = n.firstChild;
          ct(e, a, "true"), setTimeout(function () {
            return ct(e, a, "false");
          }, 20);
        }
        return !1;
      }(e) || st(e, 1, r) || rt(e, 1) : r == (Y ? "m" : "c") && (66 == n || 73 == n || 89 == n || 90 == n);
    }(e, n) ? n.preventDefault() : Mt(e, "key");else {
      var r = Date.now();
      e.input.lastIOSEnter = r, e.input.lastIOSEnterFallbackTimeout = setTimeout(function () {
        e.input.lastIOSEnter == r && (e.someProp("handleKeyDown", function (t) {
          return t(e, D(13, "Enter"));
        }), e.input.lastIOSEnter = 0);
      }, 200);
    }
  }, wt.keyup = function (e, t) {
    16 == t.keyCode && (e.input.shiftKey = !1);
  }, wt.keypress = function (e, t) {
    var n = t;
    if (!(Nt(e, n) || !n.charCode || n.ctrlKey && !n.altKey || Y && n.metaKey)) if (e.someProp("handleKeyPress", function (t) {
      return t(e, n);
    })) n.preventDefault();else {
      var r = e.state.selection;
      if (!(r instanceof g.TextSelection && r.$from.sameParent(r.$to))) {
        var a = String.fromCharCode(n.charCode),
          i = function () {
            return e.state.tr.insertText(a).scrollIntoView();
          };
        /[\r\n]/.test(a) || e.someProp("handleTextInput", function (t) {
          return t(e, r.$from.pos, r.$to.pos, a, i);
        }) || e.dispatch(i()), n.preventDefault();
      }
    }
  };
  var Rt = Y ? "metaKey" : "ctrlKey";
  bt.mousedown = function (e, t) {
    var n = t;
    e.input.shiftKey = n.shiftKey;
    var r = Lt(e),
      a = Date.now(),
      i = "singleClick";
    a - e.input.lastClick.time < 500 && function (e, t) {
      var n = t.x - e.clientX,
        r = t.y - e.clientY;
      return n * n + r * r < 100;
    }(n, e.input.lastClick) && !n[Rt] && e.input.lastClick.button == n.button && ("singleClick" == e.input.lastClick.type ? i = "doubleClick" : "doubleClick" == e.input.lastClick.type && (i = "tripleClick")), e.input.lastClick = {
      time: a,
      x: n.clientX,
      y: n.clientY,
      type: i,
      button: n.button
    };
    var o = e.posAtCoords(kt(n));
    o && ("singleClick" == i ? (e.input.mouseDown && e.input.mouseDown.done(), e.input.mouseDown = new Bt(e, o, n, !!r)) : ("doubleClick" == i ? It : Pt)(e, o.pos, o.inside, n) ? n.preventDefault() : Mt(e, "pointer"));
  };
  var Bt = function () {
    function e(t, n, r, a) {
      var i,
        o,
        s = this;
      if (h(this, e), this.view = t, this.pos = n, this.event = r, this.flushed = a, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = t.state.doc, this.selectNode = !!r[Rt], this.allowDefault = r.shiftKey, n.inside > -1) i = t.state.doc.nodeAt(n.inside), o = n.inside;else {
        var l = t.state.doc.resolve(n.pos);
        i = l.parent, o = l.depth ? l.before() : 0;
      }
      var c = a ? null : r.target,
        u = c ? t.docView.nearestDesc(c, !0) : null;
      this.target = u && 1 == u.nodeDOM.nodeType ? u.nodeDOM : null;
      var d = t.state.selection;
      (0 == r.button && i.type.spec.draggable && !1 !== i.type.spec.selectable || d instanceof g.NodeSelection && d.from <= o && d.to > o) && (this.mightDrag = {
        node: i,
        pos: o,
        addAttr: !(!this.target || this.target.draggable),
        setUneditable: !(!this.target || !j || this.target.hasAttribute("contentEditable"))
      }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(function () {
        s.view.input.mouseDown == s && s.target.setAttribute("contentEditable", "false");
      }, 20), this.view.domObserver.start()), t.root.addEventListener("mouseup", this.up = this.up.bind(this)), t.root.addEventListener("mousemove", this.move = this.move.bind(this)), Mt(t, "pointer");
    }
    return m(e, [{
      key: "done",
      value: function () {
        var e = this;
        this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(function () {
          return We(e.view);
        }), this.view.input.mouseDown = null;
      }
    }, {
      key: "up",
      value: function (e) {
        if (this.done(), this.view.dom.contains(e.target)) {
          var t = this.pos;
          this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(kt(e))), this.updateAllowDefault(e), this.allowDefault || !t ? Mt(this.view, "pointer") : function (e, t, n, r, a) {
            return xt(e, "handleClickOn", t, n, r) || e.someProp("handleClick", function (n) {
              return n(e, t, r);
            }) || (a ? function (e, t) {
              if (-1 == t) return !1;
              var n,
                r,
                a = e.state.selection;
              a instanceof g.NodeSelection && (n = a.node);
              for (var i = e.state.doc.resolve(t), o = i.depth + 1; o > 0; o--) {
                var s = o > i.depth ? i.nodeAfter : i.node(o);
                if (g.NodeSelection.isSelectable(s)) {
                  r = n && a.$from.depth > 0 && o >= a.$from.depth && i.before(a.$from.depth + 1) == a.$from.pos ? i.before(a.$from.depth) : i.before(o);
                  break;
                }
              }
              return null != r && (Dt(e, g.NodeSelection.create(e.state.doc, r), "pointer"), !0);
            }(e, n) : function (e, t) {
              if (-1 == t) return !1;
              var n = e.state.doc.resolve(t),
                r = n.nodeAfter;
              return !!(r && r.isAtom && g.NodeSelection.isSelectable(r)) && (Dt(e, new g.NodeSelection(n), "pointer"), !0);
            }(e, n));
          }(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : 0 == e.button && (this.flushed || V && this.mightDrag && !this.mightDrag.node.isAtom || W && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Dt(this.view, g.Selection.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : Mt(this.view, "pointer");
        }
      }
    }, {
      key: "move",
      value: function (e) {
        this.updateAllowDefault(e), Mt(this.view, "pointer"), 0 == e.buttons && this.done();
      }
    }, {
      key: "updateAllowDefault",
      value: function (e) {
        !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
      }
    }]), e;
  }();
  function Nt(e, t) {
    return !!e.composing || !!(V && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500) && (e.input.compositionEndedAt = -2e8, !0);
  }
  bt.touchstart = function (e) {
    e.input.lastTouch = Date.now(), Lt(e), Mt(e, "pointer");
  }, bt.touchmove = function (e) {
    e.input.lastTouch = Date.now(), Mt(e, "pointer");
  }, bt.contextmenu = function (e) {
    return Lt(e);
  };
  var Ut = G ? 5e3 : -1;
  function Ft(e, t) {
    clearTimeout(e.input.composingTimeout), t > -1 && (e.input.composingTimeout = setTimeout(function () {
      return Ht(e);
    }, t));
  }
  function jt(e) {
    var t;
    for (e.composing && (e.input.composing = !1, e.input.compositionEndedAt = ((t = document.createEvent("Event")).initEvent("event", !0, !0), t.timeStamp)); e.input.compositionNodes.length > 0;) e.input.compositionNodes.pop().markParentsDirty();
  }
  function Ht(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!(G && e.domObserver.flushingSoon >= 0)) {
      if (e.domObserver.forceFlush(), jt(e), t || e.docView && e.docView.dirty) {
        var n = je(e),
          r = e.state.selection;
        return n && !n.eq(r) ? e.dispatch(e.state.tr.setSelection(n)) : !e.markCursor && !t || r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? e.updateState(e.state) : e.dispatch(e.state.tr.deleteSelection()), !0;
      }
      return !1;
    }
  }
  wt.compositionstart = wt.compositionupdate = function (e) {
    if (!e.composing) {
      e.domObserver.flush();
      var t = e.state,
        n = t.selection.$to;
      if (t.selection instanceof g.TextSelection && (t.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some(function (e) {
        return !1 === e.type.spec.inclusive;
      }))) e.markCursor = e.state.storedMarks || n.marks(), Ht(e, !0), e.markCursor = null;else if (Ht(e, !t.selection.empty), j && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) for (var r = e.domSelectionRange(), a = r.focusNode, i = r.focusOffset; a && 1 == a.nodeType && 0 != i;) {
        var o = i < 0 ? a.lastChild : a.childNodes[i - 1];
        if (!o) break;
        if (3 == o.nodeType) {
          var s = e.domSelection();
          s && s.collapse(o, o.nodeValue.length);
          break;
        }
        a = o, i = -1;
      }
      e.input.composing = !0;
    }
    Ft(e, Ut);
  }, wt.compositionend = function (e, t) {
    e.composing && (e.input.composing = !1, e.input.compositionEndedAt = t.timeStamp, e.input.compositionPendingChanges = e.domObserver.pendingRecords().length ? e.input.compositionID : 0, e.input.compositionNode = null, e.input.compositionPendingChanges && Promise.resolve().then(function () {
      return e.domObserver.flush();
    }), e.input.compositionID++, Ft(e, 20));
  };
  var Wt = U && F < 15 || z && q < 604;
  function Kt(e, t, n, r, a) {
    var i = dt(e, t, n, r, e.state.selection.$from);
    if (e.someProp("handlePaste", function (t) {
      return t(e, a, i || y.Slice.empty);
    })) return !0;
    if (!i) return !1;
    var o = function (e) {
        return 0 == e.openStart && 0 == e.openEnd && 1 == e.content.childCount ? e.content.firstChild : null;
      }(i),
      s = o ? e.state.tr.replaceSelectionWith(o, r) : e.state.tr.replaceSelection(i);
    return e.dispatch(s.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
  }
  function Vt(e) {
    var t = e.getData("text/plain") || e.getData("Text");
    if (t) return t;
    var n = e.getData("text/uri-list");
    return n ? n.replace(/\r?\n/g, " ") : "";
  }
  bt.copy = wt.cut = function (e, t) {
    var n = t,
      r = e.state.selection,
      a = "cut" == n.type;
    if (!r.empty) {
      var i = Wt ? null : n.clipboardData,
        o = ut(e, r.content()),
        s = o.dom,
        l = o.text;
      i ? (n.preventDefault(), i.clearData(), i.setData("text/html", s.innerHTML), i.setData("text/plain", l)) : function (e, t) {
        if (e.dom.parentNode) {
          var n = e.dom.parentNode.appendChild(document.createElement("div"));
          n.appendChild(t), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
          var r = getSelection(),
            a = document.createRange();
          a.selectNodeContents(t), e.dom.blur(), r.removeAllRanges(), r.addRange(a), setTimeout(function () {
            n.parentNode && n.parentNode.removeChild(n), e.focus();
          }, 50);
        }
      }(e, s), a && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
    }
  }, wt.paste = function (e, t) {
    var n = t;
    if (!e.composing || G) {
      var r = Wt ? null : n.clipboardData,
        a = e.input.shiftKey && 45 != e.input.lastKeyCode;
      r && Kt(e, Vt(r), r.getData("text/html"), a, n) ? n.preventDefault() : function (e, t) {
        if (e.dom.parentNode) {
          var n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code,
            r = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
          n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
          var a = e.input.shiftKey && 45 != e.input.lastKeyCode;
          setTimeout(function () {
            e.focus(), r.parentNode && r.parentNode.removeChild(r), n ? Kt(e, r.value, null, a, t) : Kt(e, r.textContent, r.innerHTML, a, t);
          }, 50);
        }
      }(e, n);
    }
  };
  var zt = m(function e(t, n, r) {
      h(this, e), this.slice = t, this.move = n, this.node = r;
    }),
    Yt = Y ? "altKey" : "ctrlKey";
  function Qt(e, t) {
    var n = e.someProp("dragCopies", function (e) {
      return !e(t);
    });
    return null != n ? n : !t[Yt];
  }
  for (var Gt in bt.dragstart = function (e, t) {
    var n = t,
      r = e.input.mouseDown;
    if (r && r.done(), n.dataTransfer) {
      var a,
        i = e.state.selection,
        o = i.empty ? null : e.posAtCoords(kt(n));
      if (o && o.pos >= i.from && o.pos <= (i instanceof g.NodeSelection ? i.to - 1 : i.to)) ;else if (r && r.mightDrag) a = g.NodeSelection.create(e.state.doc, r.mightDrag.pos);else if (n.target && 1 == n.target.nodeType) {
        var s = e.docView.nearestDesc(n.target, !0);
        s && s.node.type.spec.draggable && s != e.docView && (a = g.NodeSelection.create(e.state.doc, s.posBefore));
      }
      var l = ut(e, (a || e.state.selection).content()),
        c = l.dom,
        u = l.text,
        d = l.slice;
      (!n.dataTransfer.files.length || !W || K > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(Wt ? "Text" : "text/html", c.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Wt || n.dataTransfer.setData("text/plain", u), e.dragging = new zt(d, Qt(e, n), a);
    }
  }, bt.dragend = function (e) {
    var t = e.dragging;
    window.setTimeout(function () {
      e.dragging == t && (e.dragging = null);
    }, 50);
  }, wt.dragover = wt.dragenter = function (e, t) {
    return t.preventDefault();
  }, wt.drop = function (e, t) {
    var n = t,
      r = e.dragging;
    if (e.dragging = null, n.dataTransfer) {
      var a = e.posAtCoords(kt(n));
      if (a) {
        var i = e.state.doc.resolve(a.pos),
          o = r && r.slice;
        o ? e.someProp("transformPasted", function (t) {
          o = t(o, e, !1);
        }) : o = dt(e, Vt(n.dataTransfer), Wt ? null : n.dataTransfer.getData("text/html"), !1, i);
        var s = !(!r || !Qt(e, n));
        if (e.someProp("handleDrop", function (t) {
          return t(e, n, o || y.Slice.empty, s);
        })) n.preventDefault();else if (o) {
          n.preventDefault();
          var l = o ? v.dropPoint(e.state.doc, i.pos, o) : i.pos;
          null == l && (l = i.pos);
          var c = e.state.tr;
          if (s) {
            var u = r.node;
            u ? u.replace(c) : c.deleteSelection();
          }
          var d = c.mapping.map(l),
            p = 0 == o.openStart && 0 == o.openEnd && 1 == o.content.childCount,
            f = c.doc;
          if (p ? c.replaceRangeWith(d, d, o.content.firstChild) : c.replaceRange(d, d, o), !c.doc.eq(f)) {
            var h = c.doc.resolve(d);
            if (p && g.NodeSelection.isSelectable(o.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(o.content.firstChild)) c.setSelection(new g.NodeSelection(h));else {
              var _ = c.mapping.map(l);
              c.mapping.maps[c.mapping.maps.length - 1].forEach(function (e, t, n, r) {
                return _ = r;
              }), c.setSelection($e(e, h, c.doc.resolve(_)));
            }
            e.focus(), e.dispatch(c.setMeta("uiEvent", "drop"));
          }
        }
      }
    }
  }, bt.focus = function (e) {
    e.input.lastFocus = Date.now(), e.focused || (e.domObserver.stop(), e.dom.classList.add("ProseMirror-focused"), e.domObserver.start(), e.focused = !0, setTimeout(function () {
      e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.domSelectionRange()) && We(e);
    }, 20));
  }, bt.blur = function (e, t) {
    var n = t;
    e.focused && (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), n.relatedTarget && e.dom.contains(n.relatedTarget) && e.domObserver.currentSelection.clear(), e.focused = !1);
  }, bt.beforeinput = function (e, t) {
    if (W && G && "deleteContentBackward" == t.inputType) {
      e.domObserver.flushSoon();
      var n = e.input.domChangeCount;
      setTimeout(function () {
        if (e.input.domChangeCount == n && (e.dom.blur(), e.focus(), !e.someProp("handleKeyDown", function (t) {
          return t(e, D(8, "Backspace"));
        }))) {
          var t = e.state.selection.$cursor;
          t && t.pos > 0 && e.dispatch(e.state.tr.delete(t.pos - 1, t.pos).scrollIntoView());
        }
      }, 50);
    }
  }, wt) bt[Gt] = wt[Gt];
  function $t(e, t) {
    if (e == t) return !0;
    for (var n in e) if (e[n] !== t[n]) return !1;
    for (var r in t) if (!(r in e)) return !1;
    return !0;
  }
  var qt = function () {
      function e(t, n) {
        h(this, e), this.toDOM = t, this.spec = n || tn, this.side = this.spec.side || 0;
      }
      return m(e, [{
        key: "map",
        value: function (e, t, n, r) {
          var a = e.mapResult(t.from + r, this.side < 0 ? -1 : 1),
            i = a.pos;
          return a.deleted ? null : new Jt(i - n, i - n, this);
        }
      }, {
        key: "valid",
        value: function () {
          return !0;
        }
      }, {
        key: "eq",
        value: function (t) {
          return this == t || t instanceof e && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && $t(this.spec, t.spec));
        }
      }, {
        key: "destroy",
        value: function (e) {
          this.spec.destroy && this.spec.destroy(e);
        }
      }]), e;
    }(),
    Zt = function () {
      function e(t, n) {
        h(this, e), this.attrs = t, this.spec = n || tn;
      }
      return m(e, [{
        key: "map",
        value: function (e, t, n, r) {
          var a = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n,
            i = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
          return a >= i ? null : new Jt(a, i, this);
        }
      }, {
        key: "valid",
        value: function (e, t) {
          return t.from < t.to;
        }
      }, {
        key: "eq",
        value: function (t) {
          return this == t || t instanceof e && $t(this.attrs, t.attrs) && $t(this.spec, t.spec);
        }
      }, {
        key: "destroy",
        value: function () {}
      }], [{
        key: "is",
        value: function (t) {
          return t.type instanceof e;
        }
      }]), e;
    }(),
    Xt = function () {
      function e(t, n) {
        h(this, e), this.attrs = t, this.spec = n || tn;
      }
      return m(e, [{
        key: "map",
        value: function (e, t, n, r) {
          var a = e.mapResult(t.from + r, 1);
          if (a.deleted) return null;
          var i = e.mapResult(t.to + r, -1);
          return i.deleted || i.pos <= a.pos ? null : new Jt(a.pos - n, i.pos - n, this);
        }
      }, {
        key: "valid",
        value: function (e, t) {
          var n,
            r = e.content.findIndex(t.from),
            a = r.index,
            i = r.offset;
          return i == t.from && !(n = e.child(a)).isText && i + n.nodeSize == t.to;
        }
      }, {
        key: "eq",
        value: function (t) {
          return this == t || t instanceof e && $t(this.attrs, t.attrs) && $t(this.spec, t.spec);
        }
      }, {
        key: "destroy",
        value: function () {}
      }]), e;
    }(),
    Jt = function () {
      function e(t, n, r) {
        h(this, e), this.from = t, this.to = n, this.type = r;
      }
      return m(e, [{
        key: "copy",
        value: function (t, n) {
          return new e(t, n, this.type);
        }
      }, {
        key: "eq",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
        }
      }, {
        key: "map",
        value: function (e, t, n) {
          return this.type.map(e, this, t, n);
        }
      }, {
        key: "spec",
        get: function () {
          return this.type.spec;
        }
      }, {
        key: "inline",
        get: function () {
          return this.type instanceof Zt;
        }
      }, {
        key: "widget",
        get: function () {
          return this.type instanceof qt;
        }
      }], [{
        key: "widget",
        value: function (t, n, r) {
          return new e(t, t, new qt(n, r));
        }
      }, {
        key: "inline",
        value: function (t, n, r, a) {
          return new e(t, n, new Zt(r, a));
        }
      }, {
        key: "node",
        value: function (t, n, r, a) {
          return new e(t, n, new Xt(r, a));
        }
      }]), e;
    }(),
    en = [],
    tn = {},
    nn = function () {
      function e(t, n) {
        h(this, e), this.local = t.length ? t : en, this.children = n.length ? n : en;
      }
      return m(e, [{
        key: "find",
        value: function (e, t, n) {
          var r = [];
          return this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, r, 0, n), r;
        }
      }, {
        key: "findInner",
        value: function (e, t, n, r, a) {
          for (var i = 0; i < this.local.length; i++) {
            var o = this.local[i];
            o.from <= t && o.to >= e && (!a || a(o.spec)) && n.push(o.copy(o.from + r, o.to + r));
          }
          for (var s = 0; s < this.children.length; s += 3) if (this.children[s] < t && this.children[s + 1] > e) {
            var l = this.children[s] + 1;
            this.children[s + 2].findInner(e - l, t - l, n, r + l, a);
          }
        }
      }, {
        key: "map",
        value: function (e, t, n) {
          return this == rn || 0 == e.maps.length ? this : this.mapInner(e, t, 0, 0, n || tn);
        }
      }, {
        key: "mapInner",
        value: function (t, n, r, a, i) {
          for (var o, s = 0; s < this.local.length; s++) {
            var l = this.local[s].map(t, r, a);
            l && l.type.valid(n, l) ? (o || (o = [])).push(l) : i.onRemove && i.onRemove(this.local[s].spec);
          }
          return this.children.length ? on(this.children, o || [], t, n, r, a, i) : o ? new e(o.sort(dn), en) : rn;
        }
      }, {
        key: "add",
        value: function (t, n) {
          return n.length ? this == rn ? e.create(t, n) : this.addInner(t, n, 0) : this;
        }
      }, {
        key: "addInner",
        value: function (t, n, r) {
          var a,
            i = this,
            o = 0;
          t.forEach(function (e, t) {
            var s,
              l = t + r;
            if (s = ln(n, e, l)) {
              for (a || (a = i.children.slice()); o < a.length && a[o] < t;) o += 3;
              a[o] == t ? a[o + 2] = a[o + 2].addInner(e, s, l + 1) : a.splice(o, 0, t, t + e.nodeSize, un(s, e, l + 1, tn)), o += 3;
            }
          });
          for (var s = sn(o ? cn(n) : n, -r), l = 0; l < s.length; l++) s[l].type.valid(t, s[l]) || s.splice(l--, 1);
          return new e(s.length ? this.local.concat(s).sort(dn) : this.local, a || this.children);
        }
      }, {
        key: "remove",
        value: function (e) {
          return 0 == e.length || this == rn ? this : this.removeInner(e, 0);
        }
      }, {
        key: "removeInner",
        value: function (t, n) {
          for (var r = this.children, a = this.local, i = 0; i < r.length; i += 3) {
            for (var o, s = void 0, l = r[i] + n, c = r[i + 1] + n, u = 0; u < t.length; u++) (o = t[u]) && o.from > l && o.to < c && (t[u] = null, (s || (s = [])).push(o));
            if (s) {
              r == this.children && (r = this.children.slice());
              var d = r[i + 2].removeInner(s, l + 1);
              d != rn ? r[i + 2] = d : (r.splice(i, 3), i -= 3);
            }
          }
          if (a.length) for (var p, f = 0; f < t.length; f++) if (p = t[f]) for (var h = 0; h < a.length; h++) a[h].eq(p, n) && (a == this.local && (a = this.local.slice()), a.splice(h--, 1));
          return r == this.children && a == this.local ? this : a.length || r.length ? new e(a, r) : rn;
        }
      }, {
        key: "forChild",
        value: function (t, n) {
          if (this == rn) return this;
          if (n.isLeaf) return e.empty;
          for (var r, a, i = 0; i < this.children.length; i += 3) if (this.children[i] >= t) {
            this.children[i] == t && (r = this.children[i + 2]);
            break;
          }
          for (var o = t + 1, s = o + n.content.size, l = 0; l < this.local.length; l++) {
            var c = this.local[l];
            if (c.from < s && c.to > o && c.type instanceof Zt) {
              var u = Math.max(o, c.from) - o,
                d = Math.min(s, c.to) - o;
              u < d && (a || (a = [])).push(c.copy(u, d));
            }
          }
          if (a) {
            var p = new e(a.sort(dn), en);
            return r ? new an([p, r]) : p;
          }
          return r || rn;
        }
      }, {
        key: "eq",
        value: function (t) {
          if (this == t) return !0;
          if (!(t instanceof e) || this.local.length != t.local.length || this.children.length != t.children.length) return !1;
          for (var n = 0; n < this.local.length; n++) if (!this.local[n].eq(t.local[n])) return !1;
          for (var r = 0; r < this.children.length; r += 3) if (this.children[r] != t.children[r] || this.children[r + 1] != t.children[r + 1] || !this.children[r + 2].eq(t.children[r + 2])) return !1;
          return !0;
        }
      }, {
        key: "locals",
        value: function (e) {
          return pn(this.localsInner(e));
        }
      }, {
        key: "localsInner",
        value: function (e) {
          if (this == rn) return en;
          if (e.inlineContent || !this.local.some(Zt.is)) return this.local;
          for (var t = [], n = 0; n < this.local.length; n++) this.local[n].type instanceof Zt || t.push(this.local[n]);
          return t;
        }
      }, {
        key: "forEachSet",
        value: function (e) {
          e(this);
        }
      }], [{
        key: "create",
        value: function (e, t) {
          return t.length ? un(t, e, 0, tn) : rn;
        }
      }]), e;
    }();
  nn.empty = new nn([], []), nn.removeOverlap = pn;
  var rn = nn.empty,
    an = function () {
      function e(t) {
        h(this, e), this.members = t;
      }
      return m(e, [{
        key: "map",
        value: function (t, n) {
          var r = this.members.map(function (e) {
            return e.map(t, n, tn);
          });
          return e.from(r);
        }
      }, {
        key: "forChild",
        value: function (t, n) {
          if (n.isLeaf) return nn.empty;
          for (var r = [], a = 0; a < this.members.length; a++) {
            var i = this.members[a].forChild(t, n);
            i != rn && (i instanceof e ? r = r.concat(i.members) : r.push(i));
          }
          return e.from(r);
        }
      }, {
        key: "eq",
        value: function (t) {
          if (!(t instanceof e) || t.members.length != this.members.length) return !1;
          for (var n = 0; n < this.members.length; n++) if (!this.members[n].eq(t.members[n])) return !1;
          return !0;
        }
      }, {
        key: "locals",
        value: function (e) {
          for (var t, n = !0, r = 0; r < this.members.length; r++) {
            var a = this.members[r].localsInner(e);
            if (a.length) if (t) {
              n && (t = t.slice(), n = !1);
              for (var i = 0; i < a.length; i++) t.push(a[i]);
            } else t = a;
          }
          return t ? pn(n ? t : t.sort(dn)) : en;
        }
      }, {
        key: "forEachSet",
        value: function (e) {
          for (var t = 0; t < this.members.length; t++) this.members[t].forEachSet(e);
        }
      }], [{
        key: "from",
        value: function (t) {
          switch (t.length) {
            case 0:
              return rn;
            case 1:
              return t[0];
            default:
              return new e(t.every(function (e) {
                return e instanceof nn;
              }) ? t : t.reduce(function (e, t) {
                return e.concat(t instanceof nn ? t : t.members);
              }, []));
          }
        }
      }]), e;
    }();
  function on(e, t, n, r, a, i, o) {
    for (var s = e.slice(), l = function (e) {
        var t = 0;
        n.maps[c].forEach(function (n, r, a, i) {
          for (var o = i - a - (r - n), l = 0; l < s.length; l += 3) {
            var c = s[l + 1];
            if (!(c < 0 || n > c + e - t)) {
              var u = s[l] + e - t;
              r >= u ? s[l + 1] = n <= u ? -2 : -1 : n >= e && o && (s[l] += o, s[l + 1] += o);
            }
          }
          t += o;
        }), e = n.maps[c].map(e, -1), u = e;
      }, c = 0, u = i; c < n.maps.length; c++) l(u);
    for (var d = !1, p = 0; p < s.length; p += 3) if (s[p + 1] < 0) {
      if (-2 == s[p + 1]) {
        d = !0, s[p + 1] = -1;
        continue;
      }
      var f = n.map(e[p] + i),
        h = f - a;
      if (h < 0 || h >= r.content.size) {
        d = !0;
        continue;
      }
      var _ = n.map(e[p + 1] + i, -1) - a,
        m = r.content.findIndex(h),
        A = m.index,
        g = m.offset,
        y = r.maybeChild(A);
      if (y && g == h && g + y.nodeSize == _) {
        var v = s[p + 2].mapInner(n, y, f + 1, e[p] + i + 1, o);
        v != rn ? (s[p] = h, s[p + 1] = _, s[p + 2] = v) : (s[p + 1] = -2, d = !0);
      } else d = !0;
    }
    if (d) {
      var E = function (e, t, n, r, a, i, o) {
          function s(e, t) {
            for (var i = 0; i < e.local.length; i++) {
              var l = e.local[i].map(r, a, t);
              l ? n.push(l) : o.onRemove && o.onRemove(e.local[i].spec);
            }
            for (var c = 0; c < e.children.length; c += 3) s(e.children[c + 2], e.children[c] + t + 1);
          }
          for (var l = 0; l < e.length; l += 3) -1 == e[l + 1] && s(e[l + 2], t[l] + i + 1);
          return n;
        }(s, e, t, n, a, i, o),
        b = un(E, r, 0, o);
      t = b.local;
      for (var w = 0; w < s.length; w += 3) s[w + 1] < 0 && (s.splice(w, 3), w -= 3);
      for (var C = 0, O = 0; C < b.children.length; C += 3) {
        for (var M = b.children[C]; O < s.length && s[O] < M;) O += 3;
        s.splice(O, 0, b.children[C], b.children[C + 1], b.children[C + 2]);
      }
    }
    return new nn(t.sort(dn), s);
  }
  function sn(e, t) {
    if (!t || !e.length) return e;
    for (var n = [], r = 0; r < e.length; r++) {
      var a = e[r];
      n.push(new Jt(a.from + t, a.to + t, a.type));
    }
    return n;
  }
  function ln(e, t, n) {
    if (t.isLeaf) return null;
    for (var r, a = n + t.nodeSize, i = null, o = 0; o < e.length; o++) (r = e[o]) && r.from > n && r.to < a && ((i || (i = [])).push(r), e[o] = null);
    return i;
  }
  function cn(e) {
    for (var t = [], n = 0; n < e.length; n++) null != e[n] && t.push(e[n]);
    return t;
  }
  function un(e, t, n, r) {
    var a = [],
      i = !1;
    t.forEach(function (t, o) {
      var s = ln(e, t, o + n);
      if (s) {
        i = !0;
        var l = un(s, t, n + o + 1, r);
        l != rn && a.push(o, o + t.nodeSize, l);
      }
    });
    for (var o = sn(i ? cn(e) : e, -n).sort(dn), s = 0; s < o.length; s++) o[s].type.valid(t, o[s]) || (r.onRemove && r.onRemove(o[s].spec), o.splice(s--, 1));
    return o.length || a.length ? new nn(o, a) : rn;
  }
  function dn(e, t) {
    return e.from - t.from || e.to - t.to;
  }
  function pn(e) {
    for (var t = e, n = 0; n < t.length - 1; n++) {
      var r = t[n];
      if (r.from != r.to) for (var a = n + 1; a < t.length; a++) {
        var i = t[a];
        if (i.from != r.from) {
          i.from < r.to && (t == e && (t = e.slice()), t[n] = r.copy(r.from, i.from), fn(t, a, r.copy(i.from, r.to)));
          break;
        }
        i.to != r.to && (t == e && (t = e.slice()), t[a] = i.copy(i.from, r.to), fn(t, a + 1, i.copy(r.to, i.to)));
      }
    }
    return t;
  }
  function fn(e, t, n) {
    for (; t < e.length && dn(n, e[t]) > 0;) t++;
    e.splice(t, 0, n);
  }
  function hn(e) {
    var t = [];
    return e.someProp("decorations", function (n) {
      var r = n(e.state);
      r && r != rn && t.push(r);
    }), e.cursorWrapper && t.push(nn.create(e.state.doc, [e.cursorWrapper.deco])), an.from(t);
  }
  var _n = {
      childList: !0,
      characterData: !0,
      characterDataOldValue: !0,
      attributes: !0,
      attributeOldValue: !0,
      subtree: !0
    },
    mn = U && F <= 11,
    An = function () {
      function e() {
        h(this, e), this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
      }
      return m(e, [{
        key: "set",
        value: function (e) {
          this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
        }
      }, {
        key: "clear",
        value: function () {
          this.anchorNode = this.focusNode = null;
        }
      }, {
        key: "eq",
        value: function (e) {
          return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
        }
      }]), e;
    }(),
    gn = function () {
      function e(t, n) {
        var r = this;
        h(this, e), this.view = t, this.handleDOMChange = n, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new An(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver(function (e) {
          for (var t = 0; t < e.length; t++) r.queue.push(e[t]);
          U && F <= 11 && e.some(function (e) {
            return "childList" == e.type && e.removedNodes.length || "characterData" == e.type && e.oldValue.length > e.target.nodeValue.length;
          }) ? r.flushSoon() : r.flush();
        }), mn && (this.onCharData = function (e) {
          r.queue.push({
            target: e.target,
            type: "characterData",
            oldValue: e.prevValue
          }), r.flushSoon();
        }), this.onSelectionChange = this.onSelectionChange.bind(this);
      }
      return m(e, [{
        key: "flushSoon",
        value: function () {
          var e = this;
          this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(function () {
            e.flushingSoon = -1, e.flush();
          }, 20));
        }
      }, {
        key: "forceFlush",
        value: function () {
          this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
        }
      }, {
        key: "start",
        value: function () {
          this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, _n)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
        }
      }, {
        key: "stop",
        value: function () {
          var e = this;
          if (this.observer) {
            var t = this.observer.takeRecords();
            if (t.length) {
              for (var n = 0; n < t.length; n++) this.queue.push(t[n]);
              window.setTimeout(function () {
                return e.flush();
              }, 20);
            }
            this.observer.disconnect();
          }
          this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
        }
      }, {
        key: "connectSelection",
        value: function () {
          this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
        }
      }, {
        key: "disconnectSelection",
        value: function () {
          this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
        }
      }, {
        key: "suppressSelectionUpdates",
        value: function () {
          var e = this;
          this.suppressingSelectionUpdates = !0, setTimeout(function () {
            return e.suppressingSelectionUpdates = !1;
          }, 50);
        }
      }, {
        key: "onSelectionChange",
        value: function () {
          if (qe(this.view)) {
            if (this.suppressingSelectionUpdates) return We(this.view);
            if (U && F <= 11 && !this.view.state.selection.empty) {
              var e = this.view.domSelectionRange();
              if (e.focusNode && O(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon();
            }
            this.flush();
          }
        }
      }, {
        key: "setCurSelection",
        value: function () {
          this.currentSelection.set(this.view.domSelectionRange());
        }
      }, {
        key: "ignoreSelectionChange",
        value: function (e) {
          if (!e.focusNode) return !0;
          for (var t, n = new Set(), r = e.focusNode; r; r = b(r)) n.add(r);
          for (var a = e.anchorNode; a; a = b(a)) if (n.has(a)) {
            t = a;
            break;
          }
          var i = t && this.view.docView.nearestDesc(t);
          return i && i.ignoreMutation({
            type: "selection",
            target: 3 == t.nodeType ? t.parentNode : t
          }) ? (this.setCurSelection(), !0) : void 0;
        }
      }, {
        key: "pendingRecords",
        value: function () {
          if (this.observer) {
            var e,
              t = a(this.observer.takeRecords());
            try {
              for (t.s(); !(e = t.n()).done;) {
                var n = e.value;
                this.queue.push(n);
              }
            } catch (e) {
              t.e(e);
            } finally {
              t.f();
            }
          }
          return this.queue;
        }
      }, {
        key: "flush",
        value: function () {
          var e = this.view;
          if (e.docView && !(this.flushingSoon > -1)) {
            var t = this.pendingRecords();
            t.length && (this.queue = []);
            var n = e.domSelectionRange(),
              i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && qe(e) && !this.ignoreSelectionChange(n),
              o = -1,
              s = -1,
              l = !1,
              c = [];
            if (e.editable) for (var u = 0; u < t.length; u++) {
              var d = this.registerMutation(t[u], c);
              d && (o = o < 0 ? d.from : Math.min(d.from, o), s = s < 0 ? d.to : Math.max(d.to, s), d.typeOver && (l = !0));
            }
            if (j && c.length) {
              var p = c.filter(function (e) {
                return "BR" == e.nodeName;
              });
              if (2 == p.length) {
                var f = r(p, 2),
                  h = f[0],
                  _ = f[1];
                h.parentNode && h.parentNode.parentNode == _.parentNode ? _.remove() : h.remove();
              } else {
                var m,
                  A = this.currentSelection.focusNode,
                  y = a(p);
                try {
                  for (y.s(); !(m = y.n()).done;) {
                    var v = m.value,
                      E = v.parentNode;
                    !E || "LI" != E.nodeName || A && bn(e, A) == E || v.remove();
                  }
                } catch (e) {
                  y.e(e);
                } finally {
                  y.f();
                }
              }
            }
            var b = null;
            o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && x(n) && (b = je(e)) && b.eq(g.Selection.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, We(e), this.currentSelection.set(n), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), function (e) {
              if (!yn.has(e) && (yn.set(e, null), -1 !== ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(e.dom).whiteSpace))) {
                if (e.requiresGeckoHackNode = j, vn) return;
                console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), vn = !0;
              }
            }(e)), this.handleDOMChange(o, s, l, c), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || We(e), this.currentSelection.set(n));
          }
        }
      }, {
        key: "registerMutation",
        value: function (e, t) {
          if (t.indexOf(e.target) > -1) return null;
          var n = this.view.docView.nearestDesc(e.target);
          if ("attributes" == e.type && (n == this.view.docView || "contenteditable" == e.attributeName || "style" == e.attributeName && !e.oldValue && !e.target.getAttribute("style"))) return null;
          if (!n || n.ignoreMutation(e)) return null;
          if ("childList" == e.type) {
            for (var r = 0; r < e.addedNodes.length; r++) {
              var a = e.addedNodes[r];
              t.push(a), 3 == a.nodeType && (this.lastChangedTextNode = a);
            }
            if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target)) return {
              from: n.posBefore,
              to: n.posAfter
            };
            var i = e.previousSibling,
              o = e.nextSibling;
            if (U && F <= 11 && e.addedNodes.length) for (var s = 0; s < e.addedNodes.length; s++) {
              var l = e.addedNodes[s],
                c = l.previousSibling,
                u = l.nextSibling;
              (!c || Array.prototype.indexOf.call(e.addedNodes, c) < 0) && (i = c), (!u || Array.prototype.indexOf.call(e.addedNodes, u) < 0) && (o = u);
            }
            var d = i && i.parentNode == e.target ? E(i) + 1 : 0,
              p = n.localPosFromDOM(e.target, d, -1),
              f = o && o.parentNode == e.target ? E(o) : e.target.childNodes.length;
            return {
              from: p,
              to: n.localPosFromDOM(e.target, f, 1)
            };
          }
          return "attributes" == e.type ? {
            from: n.posAtStart - n.border,
            to: n.posAtEnd + n.border
          } : (this.lastChangedTextNode = e.target, {
            from: n.posAtStart,
            to: n.posAtEnd,
            typeOver: e.target.nodeValue == e.oldValue
          });
        }
      }]), e;
    }(),
    yn = new WeakMap(),
    vn = !1;
  function En(e, t) {
    var n = t.startContainer,
      r = t.startOffset,
      a = t.endContainer,
      i = t.endOffset,
      o = e.domAtPos(e.state.selection.anchor);
    if (O(o.node, o.offset, a, i)) {
      var s = [a, i, n, r];
      n = s[0], r = s[1], a = s[2], i = s[3];
    }
    return {
      anchorNode: n,
      anchorOffset: r,
      focusNode: a,
      focusOffset: i
    };
  }
  function bn(e, t) {
    for (var n = t.parentNode; n && n != e.dom; n = n.parentNode) {
      var r = e.docView.nearestDesc(n, !0);
      if (r && r.node.isBlock) return n;
    }
    return null;
  }
  function wn(e) {
    var t = e.pmViewDesc;
    if (t) return t.parseRule();
    if ("BR" == e.nodeName && e.parentNode) {
      if (V && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
        var n = document.createElement("div");
        return n.appendChild(document.createElement("li")), {
          skip: n
        };
      }
      if (e.parentNode.lastChild == e || V && /^(tr|table)$/i.test(e.parentNode.nodeName)) return {
        ignore: !0
      };
    } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder")) return {
      ignore: !0
    };
    return null;
  }
  var Cn = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
  function On(e, t, n) {
    return Math.max(n.anchor, n.head) > t.content.size ? null : $e(e, t.resolve(n.anchor), t.resolve(n.head));
  }
  function Mn(e, t, n) {
    for (var r = e.depth, a = t ? e.end() : e.pos; r > 0 && (t || e.indexAfter(r) == e.node(r).childCount);) r--, a++, t = !1;
    if (n) for (var i = e.node(r).maybeChild(e.indexAfter(r)); i && !i.isLeaf;) i = i.firstChild, a++;
    return a;
  }
  function Sn(e) {
    if (2 != e.length) return !1;
    var t = e.charCodeAt(0),
      n = e.charCodeAt(1);
    return t >= 56320 && t <= 57343 && n >= 55296 && n <= 56319;
  }
  var Tn = dt,
    kn = Ht,
    xn = function () {
      function e(t, n) {
        var r = this;
        h(this, e), this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Ot(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = n, this.state = n.state, this.directPlugins = n.plugins || [], this.directPlugins.forEach(Rn), this.dispatch = this.dispatch.bind(this), this.dom = t && t.mount || document.createElement("div"), t && (t.appendChild ? t.appendChild(this.dom) : "function" == typeof t ? t(this.dom) : t.mount && (this.mounted = !0)), this.editable = Pn(this), In(this), this.nodeViews = Ln(this), this.docView = Ce(this.state.doc, Dn(this), hn(this), this.dom, this), this.domObserver = new gn(this, function (e, t, n, a) {
          return function (e, t, n, r, a) {
            var i = e.input.compositionPendingChanges || (e.composing ? e.input.compositionID : 0);
            if (e.input.compositionPendingChanges = 0, t < 0) {
              var o = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null,
                s = je(e, o);
              if (s && !e.state.selection.eq(s)) {
                if (W && G && 13 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime && e.someProp("handleKeyDown", function (t) {
                  return t(e, D(13, "Enter"));
                })) return;
                var l = e.state.tr.setSelection(s);
                "pointer" == o ? l.setMeta("pointer", !0) : "key" == o && l.scrollIntoView(), i && l.setMeta("composition", i), e.dispatch(l);
              }
            } else {
              var c = e.state.doc.resolve(t),
                u = c.sharedDepth(n);
              t = c.before(u + 1), n = e.state.doc.resolve(n).after(u + 1);
              var d,
                p,
                f = e.state.selection,
                h = function (e, t, n) {
                  var r,
                    a = e.docView.parseRange(t, n),
                    i = a.node,
                    o = a.fromOffset,
                    s = a.toOffset,
                    l = a.from,
                    c = a.to,
                    u = e.domSelectionRange(),
                    d = u.anchorNode;
                  if (d && e.dom.contains(1 == d.nodeType ? d : d.parentNode) && (r = [{
                    node: d,
                    offset: u.anchorOffset
                  }], x(u) || r.push({
                    node: u.focusNode,
                    offset: u.focusOffset
                  })), W && 8 === e.input.lastKeyCode) for (var p = s; p > o; p--) {
                    var f = i.childNodes[p - 1],
                      h = f.pmViewDesc;
                    if ("BR" == f.nodeName && !h) {
                      s = p;
                      break;
                    }
                    if (!h || h.size) break;
                  }
                  var _ = e.state.doc,
                    m = e.someProp("domParser") || y.DOMParser.fromSchema(e.state.schema),
                    A = _.resolve(l),
                    g = null,
                    v = m.parse(i, {
                      topNode: A.parent,
                      topMatch: A.parent.contentMatchAt(A.index()),
                      topOpen: !0,
                      from: o,
                      to: s,
                      preserveWhitespace: "pre" != A.parent.type.whitespace || "full",
                      findPositions: r,
                      ruleFromNode: wn,
                      context: A
                    });
                  if (r && null != r[0].pos) {
                    var E = r[0].pos,
                      b = r[1] && r[1].pos;
                    null == b && (b = E), g = {
                      anchor: E + l,
                      head: b + l
                    };
                  }
                  return {
                    doc: v,
                    sel: g,
                    from: l,
                    to: c
                  };
                }(e, t, n),
                _ = e.state.doc,
                m = _.slice(h.from, h.to);
              8 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime ? (d = e.state.selection.to, p = "end") : (d = e.state.selection.from, p = "start"), e.input.lastKeyCode = null;
              var A = function (e, t, n, r, a) {
                var i = e.findDiffStart(t, n);
                if (null == i) return null;
                var o = e.findDiffEnd(t, n + e.size, n + t.size),
                  s = o.a,
                  l = o.b;
                if ("end" == a && (r -= s + Math.max(0, i - Math.min(s, l)) - i), s < i && e.size < t.size) {
                  var c = r <= i && r >= s ? i - r : 0;
                  (i -= c) && i < t.size && Sn(t.textBetween(i - 1, i + 1)) && (i += c ? 1 : -1), l = i + (l - s), s = i;
                } else if (l < i) {
                  var u = r <= i && r >= l ? i - r : 0;
                  (i -= u) && i < e.size && Sn(e.textBetween(i - 1, i + 1)) && (i += u ? 1 : -1), s = i + (s - l), l = i;
                }
                return {
                  start: i,
                  endA: s,
                  endB: l
                };
              }(m.content, h.doc.content, h.from, d, p);
              if (A && e.input.domChangeCount++, (z && e.input.lastIOSEnter > Date.now() - 225 || G) && a.some(function (e) {
                return 1 == e.nodeType && !Cn.test(e.nodeName);
              }) && (!A || A.endA >= A.endB) && e.someProp("handleKeyDown", function (t) {
                return t(e, D(13, "Enter"));
              })) e.input.lastIOSEnter = 0;else {
                if (!A) {
                  if (!(r && f instanceof g.TextSelection && !f.empty && f.$head.sameParent(f.$anchor)) || e.composing || h.sel && h.sel.anchor != h.sel.head) {
                    if (h.sel) {
                      var v = On(e, e.state.doc, h.sel);
                      if (v && !v.eq(e.state.selection)) {
                        var E = e.state.tr.setSelection(v);
                        i && E.setMeta("composition", i), e.dispatch(E);
                      }
                    }
                    return;
                  }
                  A = {
                    start: f.from,
                    endA: f.to,
                    endB: f.to
                  };
                }
                e.state.selection.from < e.state.selection.to && A.start == A.endB && e.state.selection instanceof g.TextSelection && (A.start > e.state.selection.from && A.start <= e.state.selection.from + 2 && e.state.selection.from >= h.from ? A.start = e.state.selection.from : A.endA < e.state.selection.to && A.endA >= e.state.selection.to - 2 && e.state.selection.to <= h.to && (A.endB += e.state.selection.to - A.endA, A.endA = e.state.selection.to)), U && F <= 11 && A.endB == A.start + 1 && A.endA == A.start && A.start > h.from && "  " == h.doc.textBetween(A.start - h.from - 1, A.start - h.from + 1) && (A.start--, A.endA--, A.endB--);
                var b,
                  w = h.doc.resolveNoCache(A.start - h.from),
                  C = h.doc.resolveNoCache(A.endB - h.from),
                  O = _.resolve(A.start),
                  M = w.sameParent(C) && w.parent.inlineContent && O.end() >= A.endA;
                if ((z && e.input.lastIOSEnter > Date.now() - 225 && (!M || a.some(function (e) {
                  return "DIV" == e.nodeName || "P" == e.nodeName;
                })) || !M && w.pos < h.doc.content.size && (!w.sameParent(C) || !w.parent.inlineContent) && !/\S/.test(h.doc.textBetween(w.pos, C.pos, "", "")) && (b = g.Selection.findFrom(h.doc.resolve(w.pos + 1), 1, !0)) && b.head > w.pos) && e.someProp("handleKeyDown", function (t) {
                  return t(e, D(13, "Enter"));
                })) e.input.lastIOSEnter = 0;else if (e.state.selection.anchor > A.start && function (e, t, n, r, a) {
                  if (n - t <= a.pos - r.pos || Mn(r, !0, !1) < a.pos) return !1;
                  var i = e.resolve(t);
                  if (!r.parent.isTextblock) {
                    var o = i.nodeAfter;
                    return null != o && n == t + o.nodeSize;
                  }
                  if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock) return !1;
                  var s = e.resolve(Mn(i, !0, !0));
                  return !(!s.parent.isTextblock || s.pos > n || Mn(s, !0, !1) < n) && r.parent.content.cut(r.parentOffset).eq(s.parent.content);
                }(_, A.start, A.endA, w, C) && e.someProp("handleKeyDown", function (t) {
                  return t(e, D(8, "Backspace"));
                })) G && W && e.domObserver.suppressSelectionUpdates();else {
                  W && A.endB == A.start && (e.input.lastChromeDelete = Date.now()), G && !M && w.start() != C.start() && 0 == C.parentOffset && w.depth == C.depth && h.sel && h.sel.anchor == h.sel.head && h.sel.head == A.endA && (A.endB -= 2, C = h.doc.resolveNoCache(A.endB - h.from), setTimeout(function () {
                    e.someProp("handleKeyDown", function (t) {
                      return t(e, D(13, "Enter"));
                    });
                  }, 20));
                  var S,
                    T = A.start,
                    k = A.endA,
                    I = function (t) {
                      var n = t || e.state.tr.replace(T, k, h.doc.slice(A.start - h.from, A.endB - h.from));
                      if (h.sel) {
                        var r = On(e, n.doc, h.sel);
                        r && !(W && e.composing && r.empty && (A.start != A.endB || e.input.lastChromeDelete < Date.now() - 100) && (r.head == T || r.head == n.mapping.map(k) - 1) || U && r.empty && r.head == T) && n.setSelection(r);
                      }
                      return i && n.setMeta("composition", i), n.scrollIntoView();
                    };
                  if (M) {
                    if (w.pos == C.pos) {
                      U && F <= 11 && 0 == w.parentOffset && (e.domObserver.suppressSelectionUpdates(), setTimeout(function () {
                        return We(e);
                      }, 20));
                      var P = I(e.state.tr.delete(T, k)),
                        L = _.resolve(A.start).marksAcross(_.resolve(A.endA));
                      L && P.ensureMarks(L), e.dispatch(P);
                    } else if (A.endA == A.endB && (S = function (e, t) {
                      for (var n, r, a, i = e.firstChild.marks, o = t.firstChild.marks, s = i, l = o, c = 0; c < o.length; c++) s = o[c].removeFromSet(s);
                      for (var u = 0; u < i.length; u++) l = i[u].removeFromSet(l);
                      if (1 == s.length && 0 == l.length) r = s[0], n = "add", a = function (e) {
                        return e.mark(r.addToSet(e.marks));
                      };else {
                        if (0 != s.length || 1 != l.length) return null;
                        r = l[0], n = "remove", a = function (e) {
                          return e.mark(r.removeFromSet(e.marks));
                        };
                      }
                      for (var d = [], p = 0; p < t.childCount; p++) d.push(a(t.child(p)));
                      if (y.Fragment.from(d).eq(e)) return {
                        mark: r,
                        type: n
                      };
                    }(w.parent.content.cut(w.parentOffset, C.parentOffset), O.parent.content.cut(O.parentOffset, A.endA - O.start())))) {
                      var R = I(e.state.tr);
                      "add" == S.type ? R.addMark(T, k, S.mark) : R.removeMark(T, k, S.mark), e.dispatch(R);
                    } else if (w.parent.child(w.index()).isText && w.index() == C.index() - (C.textOffset ? 0 : 1)) {
                      var B = w.parent.textBetween(w.parentOffset, C.parentOffset),
                        N = function () {
                          return I(e.state.tr.insertText(B, T, k));
                        };
                      e.someProp("handleTextInput", function (t) {
                        return t(e, T, k, B, N);
                      }) || e.dispatch(N());
                    }
                  } else e.dispatch(I());
                }
              }
            }
          }(r, e, t, n, a);
        }), this.domObserver.start(), function (e) {
          var t = function () {
            var t = bt[n];
            e.dom.addEventListener(n, e.input.eventHandlers[n] = function (n) {
              !function (e, t) {
                if (!t.bubbles) return !0;
                if (t.defaultPrevented) return !1;
                for (var n = t.target; n != e.dom; n = n.parentNode) if (!n || 11 == n.nodeType || n.pmViewDesc && n.pmViewDesc.stopEvent(t)) return !1;
                return !0;
              }(e, n) || Tt(e, n) || !e.editable && n.type in wt || t(e, n);
            }, Ct[n] ? {
              passive: !0
            } : void 0);
          };
          for (var n in bt) t();
          V && e.dom.addEventListener("input", function () {
            return null;
          }), St(e);
        }(this), this.updatePluginViews();
      }
      return m(e, [{
        key: "composing",
        get: function () {
          return this.input.composing;
        }
      }, {
        key: "props",
        get: function () {
          if (this._props.state != this.state) {
            var e = this._props;
            for (var t in this._props = {}, e) this._props[t] = e[t];
            this._props.state = this.state;
          }
          return this._props;
        }
      }, {
        key: "update",
        value: function (e) {
          e.handleDOMEvents != this._props.handleDOMEvents && St(this);
          var t = this._props;
          this._props = e, e.plugins && (e.plugins.forEach(Rn), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
        }
      }, {
        key: "setProps",
        value: function (e) {
          var t = {};
          for (var n in this._props) t[n] = this._props[n];
          for (var r in t.state = this.state, e) t[r] = e[r];
          this.update(t);
        }
      }, {
        key: "updateState",
        value: function (e) {
          this.updateStateInner(e, this._props);
        }
      }, {
        key: "updateStateInner",
        value: function (e, t) {
          var n,
            r = this.state,
            a = !1,
            i = !1;
          e.storedMarks && this.composing && (jt(this), i = !0), this.state = e;
          var o = r.plugins != e.plugins || this._props.plugins != t.plugins;
          if (o || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
            var s = Ln(this);
            (function (e, t) {
              var n = 0,
                r = 0;
              for (var a in e) {
                if (e[a] != t[a]) return !0;
                n++;
              }
              for (var i in t) r++;
              return n != r;
            })(s, this.nodeViews) && (this.nodeViews = s, a = !0);
          }
          (o || t.handleDOMEvents != this._props.handleDOMEvents) && St(this), this.editable = Pn(this), In(this);
          var l = hn(this),
            c = Dn(this),
            u = r.plugins == e.plugins || r.doc.eq(e.doc) ? e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve" : "reset",
            d = a || !this.docView.matchesNode(e.doc, c, l);
          !d && e.selection.eq(r.selection) || (i = !0);
          var p,
            f,
            h,
            _,
            m,
            A,
            g,
            y,
            v,
            b,
            w = "preserve" == u && i && null == this.dom.style.overflowAnchor && function (e) {
              for (var t, n, r = e.dom.getBoundingClientRect(), a = Math.max(0, r.top), i = (r.left + r.right) / 2, o = a + 1; o < Math.min(innerHeight, r.bottom); o += 5) {
                var s = e.root.elementFromPoint(i, o);
                if (s && s != e.dom && e.dom.contains(s)) {
                  var l = s.getBoundingClientRect();
                  if (l.top >= a - 20) {
                    t = s, n = l.top;
                    break;
                  }
                }
              }
              return {
                refDOM: t,
                refTop: n,
                stack: te(e.dom)
              };
            }(this);
          if (i) {
            this.domObserver.stop();
            var C = d && (U || W) && !this.composing && !r.selection.empty && !e.selection.empty && (_ = r.selection, m = e.selection, A = Math.min(_.$anchor.sharedDepth(_.head), m.$anchor.sharedDepth(m.head)), _.$anchor.start(A) != m.$anchor.start(A));
            if (d) {
              var M = W ? this.trackWrites = this.domSelectionRange().focusNode : null;
              this.composing && (this.input.compositionNode = function (e) {
                var t = e.domSelectionRange();
                if (!t.focusNode) return null;
                var n = function (e, t) {
                    for (;;) {
                      if (3 == e.nodeType && t) return e;
                      if (1 == e.nodeType && t > 0) {
                        if ("false" == e.contentEditable) return null;
                        t = T(e = e.childNodes[t - 1]);
                      } else {
                        if (!e.parentNode || k(e)) return null;
                        t = E(e), e = e.parentNode;
                      }
                    }
                  }(t.focusNode, t.focusOffset),
                  r = function (e, t) {
                    for (;;) {
                      if (3 == e.nodeType && t < e.nodeValue.length) return e;
                      if (1 == e.nodeType && t < e.childNodes.length) {
                        if ("false" == e.contentEditable) return null;
                        e = e.childNodes[t], t = 0;
                      } else {
                        if (!e.parentNode || k(e)) return null;
                        t = E(e) + 1, e = e.parentNode;
                      }
                    }
                  }(t.focusNode, t.focusOffset);
                if (n && r && n != r) {
                  var a = r.pmViewDesc,
                    i = e.domObserver.lastChangedTextNode;
                  if (n == i || r == i) return i;
                  if (!a || !a.isText(r.nodeValue)) return r;
                  if (e.input.compositionNode == r) {
                    var o = n.pmViewDesc;
                    if (o && o.isText(n.nodeValue)) return r;
                  }
                }
                return n || r;
              }(this)), !a && this.docView.update(e.doc, c, l, this) || (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = Ce(e.doc, c, l, this.dom, this)), M && !this.trackWrites && (C = !0);
            }
            C || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && (p = this, f = p.docView.domFromPos(p.state.selection.anchor, 0), h = p.domSelectionRange(), O(f.node, f.offset, h.anchorNode, h.anchorOffset))) ? We(this, C) : (Qe(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
          }
          this.updatePluginViews(r), (null === (n = this.dragging) || void 0 === n ? void 0 : n.node) && !r.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, r), "reset" == u ? this.dom.scrollTop = 0 : "to selection" == u ? this.scrollToSelection() : w && (y = (g = w).refDOM, v = g.refTop, ne(g.stack, 0 == (b = y ? y.getBoundingClientRect().top : 0) ? 0 : b - v));
        }
      }, {
        key: "scrollToSelection",
        value: function () {
          var e = this,
            t = this.domSelectionRange().focusNode;
          if (t && this.dom.contains(1 == t.nodeType ? t : t.parentNode)) if (this.someProp("handleScrollToSelection", function (t) {
            return t(e);
          })) ;else if (this.state.selection instanceof g.NodeSelection) {
            var n = this.docView.domAfterPos(this.state.selection.from);
            1 == n.nodeType && ee(this, n.getBoundingClientRect(), t);
          } else ee(this, this.coordsAtPos(this.state.selection.head, 1), t);
        }
      }, {
        key: "destroyPluginViews",
        value: function () {
          for (var e; e = this.pluginViews.pop();) e.destroy && e.destroy();
        }
      }, {
        key: "updatePluginViews",
        value: function (e) {
          if (e && e.plugins == this.state.plugins && this.directPlugins == this.prevDirectPlugins) for (var t = 0; t < this.pluginViews.length; t++) {
            var n = this.pluginViews[t];
            n.update && n.update(this, e);
          } else {
            this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
            for (var r = 0; r < this.directPlugins.length; r++) {
              var a = this.directPlugins[r];
              a.spec.view && this.pluginViews.push(a.spec.view(this));
            }
            for (var i = 0; i < this.state.plugins.length; i++) {
              var o = this.state.plugins[i];
              o.spec.view && this.pluginViews.push(o.spec.view(this));
            }
          }
        }
      }, {
        key: "updateDraggedNode",
        value: function (e, t) {
          var n = e.node,
            r = -1;
          if (this.state.doc.nodeAt(n.from) == n.node) r = n.from;else {
            var a = n.from + (this.state.doc.content.size - t.doc.content.size);
            (a > 0 && this.state.doc.nodeAt(a)) == n.node && (r = a);
          }
          this.dragging = new zt(e.slice, e.move, r < 0 ? void 0 : g.NodeSelection.create(this.state.doc, r));
        }
      }, {
        key: "someProp",
        value: function (e, t) {
          var n,
            r = this._props && this._props[e];
          if (null != r && (n = t ? t(r) : r)) return n;
          for (var a = 0; a < this.directPlugins.length; a++) {
            var i = this.directPlugins[a].props[e];
            if (null != i && (n = t ? t(i) : i)) return n;
          }
          var o = this.state.plugins;
          if (o) for (var s = 0; s < o.length; s++) {
            var l = o[s].props[e];
            if (null != l && (n = t ? t(l) : l)) return n;
          }
        }
      }, {
        key: "hasFocus",
        value: function () {
          if (U) {
            var e = this.root.activeElement;
            if (e == this.dom) return !0;
            if (!e || !this.dom.contains(e)) return !1;
            for (; e && this.dom != e && this.dom.contains(e);) {
              if ("false" == e.contentEditable) return !1;
              e = e.parentElement;
            }
            return !0;
          }
          return this.root.activeElement == this.dom;
        }
      }, {
        key: "focus",
        value: function () {
          this.domObserver.stop(), this.editable && function (e) {
            if (e.setActive) return e.setActive();
            if (re) return e.focus(re);
            var t = te(e);
            e.focus(null == re ? {
              get preventScroll() {
                return re = {
                  preventScroll: !0
                }, !0;
              }
            } : void 0), re || (re = !1, ne(t, 0));
          }(this.dom), We(this), this.domObserver.start();
        }
      }, {
        key: "root",
        get: function () {
          var e = this,
            t = this._root;
          if (null == t) for (var n, r = function (t) {
              if (9 == t.nodeType || 11 == t.nodeType && t.host) return t.getSelection || (Object.getPrototypeOf(t).getSelection = function () {
                return t.ownerDocument.getSelection();
              }), {
                v: e._root = t
              };
            }, a = this.dom.parentNode; a; a = a.parentNode) if (n = r(a)) return n.v;
          return t || document;
        }
      }, {
        key: "updateRoot",
        value: function () {
          this._root = null;
        }
      }, {
        key: "posAtCoords",
        value: function (e) {
          return se(this, e);
        }
      }, {
        key: "coordsAtPos",
        value: function (e) {
          return de(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        }
      }, {
        key: "domAtPos",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return this.docView.domFromPos(e, t);
        }
      }, {
        key: "nodeDOM",
        value: function (e) {
          var t = this.docView.descAt(e);
          return t ? t.nodeDOM : null;
        }
      }, {
        key: "posAtDOM",
        value: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
            r = this.docView.posFromDOM(e, t, n);
          if (null == r) throw new RangeError("DOM position not inside the editor");
          return r;
        }
      }, {
        key: "endOfTextblock",
        value: function (e, t) {
          return function (e, t, n) {
            return me == t && Ae == n ? ge : (me = t, Ae = n, ge = "up" == n || "down" == n ? function (e, t, n) {
              var r = t.selection,
                a = "up" == n ? r.$from : r.$to;
              return he(e, t, function () {
                for (var t = e.docView.domFromPos(a.pos, "up" == n ? -1 : 1).node;;) {
                  var r = e.docView.nearestDesc(t, !0);
                  if (!r) break;
                  if (r.node.isBlock) {
                    t = r.contentDOM || r.dom;
                    break;
                  }
                  t = r.dom.parentNode;
                }
                for (var i = de(e, a.pos, 1), o = t.firstChild; o; o = o.nextSibling) {
                  var s = void 0;
                  if (1 == o.nodeType) s = o.getClientRects();else {
                    if (3 != o.nodeType) continue;
                    s = C(o, 0, o.nodeValue.length).getClientRects();
                  }
                  for (var l = 0; l < s.length; l++) {
                    var c = s[l];
                    if (c.bottom > c.top + 1 && ("up" == n ? i.top - c.top > 2 * (c.bottom - i.top) : c.bottom - i.bottom > 2 * (i.bottom - c.top))) return !1;
                  }
                }
                return !0;
              });
            }(e, t, n) : function (e, t, n) {
              var r = t.selection.$head;
              if (!r.parent.isTextblock) return !1;
              var a = r.parentOffset,
                i = !a,
                o = a == r.parent.content.size,
                s = e.domSelection();
              return s ? _e.test(r.parent.textContent) && s.modify ? he(e, t, function () {
                var t = e.domSelectionRange(),
                  a = t.focusNode,
                  i = t.focusOffset,
                  o = t.anchorNode,
                  l = t.anchorOffset,
                  c = s.caretBidiLevel;
                s.modify("move", n, "character");
                var u = r.depth ? e.docView.domAfterPos(r.before()) : e.dom,
                  d = e.domSelectionRange(),
                  p = d.focusNode,
                  f = d.focusOffset,
                  h = p && !u.contains(1 == p.nodeType ? p : p.parentNode) || a == p && i == f;
                try {
                  s.collapse(o, l), a && (a != o || i != l) && s.extend && s.extend(a, i);
                } catch (e) {}
                return null != c && (s.caretBidiLevel = c), h;
              }) : "left" == n || "backward" == n ? i : o : r.pos == r.start() || r.pos == r.end();
            }(e, t, n));
          }(this, t || this.state, e);
        }
      }, {
        key: "pasteHTML",
        value: function (e, t) {
          return Kt(this, "", e, !1, t || new ClipboardEvent("paste"));
        }
      }, {
        key: "pasteText",
        value: function (e, t) {
          return Kt(this, e, null, !0, t || new ClipboardEvent("paste"));
        }
      }, {
        key: "serializeForClipboard",
        value: function (e) {
          return ut(this, e);
        }
      }, {
        key: "destroy",
        value: function () {
          this.docView && (function (e) {
            for (var t in e.domObserver.stop(), e.input.eventHandlers) e.dom.removeEventListener(t, e.input.eventHandlers[t]);
            clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout);
          }(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], hn(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, w = null);
        }
      }, {
        key: "isDestroyed",
        get: function () {
          return null == this.docView;
        }
      }, {
        key: "dispatchEvent",
        value: function (e) {
          return function (e, t) {
            Tt(e, t) || !bt[t.type] || !e.editable && t.type in wt || bt[t.type](e, t);
          }(this, e);
        }
      }, {
        key: "domSelectionRange",
        value: function () {
          var e = this.domSelection();
          return e ? V && 11 === this.root.nodeType && function (e) {
            for (var t = e.activeElement; t && t.shadowRoot;) t = t.shadowRoot.activeElement;
            return t;
          }(this.dom.ownerDocument) == this.dom && function (e, t) {
            if (t.getComposedRanges) {
              var n = t.getComposedRanges(e.root)[0];
              if (n) return En(e, n);
            }
            var r;
            function a(e) {
              e.preventDefault(), e.stopImmediatePropagation(), r = e.getTargetRanges()[0];
            }
            return e.dom.addEventListener("beforeinput", a, !0), document.execCommand("indent"), e.dom.removeEventListener("beforeinput", a, !0), r ? En(e, r) : null;
          }(this, e) || e : {
            focusNode: null,
            focusOffset: 0,
            anchorNode: null,
            anchorOffset: 0
          };
        }
      }, {
        key: "domSelection",
        value: function () {
          return this.root.getSelection();
        }
      }]), e;
    }();
  function Dn(e) {
    var t = Object.create(null);
    return t.class = "ProseMirror", t.contenteditable = String(e.editable), e.someProp("attributes", function (n) {
      if ("function" == typeof n && (n = n(e.state)), n) for (var r in n) "class" == r ? t.class += " " + n[r] : "style" == r ? t.style = (t.style ? t.style + ";" : "") + n[r] : t[r] || "contenteditable" == r || "nodeName" == r || (t[r] = String(n[r]));
    }), t.translate || (t.translate = "no"), [Jt.node(0, e.state.doc.content.size, t)];
  }
  function In(e) {
    if (e.markCursor) {
      var t = document.createElement("img");
      t.className = "ProseMirror-separator", t.setAttribute("mark-placeholder", "true"), t.setAttribute("alt", ""), e.cursorWrapper = {
        dom: t,
        deco: Jt.widget(e.state.selection.from, t, {
          raw: !0,
          marks: e.markCursor
        })
      };
    } else e.cursorWrapper = null;
  }
  function Pn(e) {
    return !e.someProp("editable", function (t) {
      return !1 === t(e.state);
    });
  }
  function Ln(e) {
    var t = Object.create(null);
    function n(e) {
      for (var n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
    }
    return e.someProp("nodeViews", n), e.someProp("markViews", n), t;
  }
  function Rn(e) {
    if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component");
  }
  xn.prototype.dispatch = function (e) {
    var t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }, t.Decoration = Jt, t.DecorationSet = nn, t.EditorView = xn, t.__endComposition = kn, t.__parseFromClipboard = Tn;
});
