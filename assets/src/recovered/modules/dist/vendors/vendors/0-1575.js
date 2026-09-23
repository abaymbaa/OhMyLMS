// Reconstructed Webpack factory 1575; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    Lz: () => pn,
    NZ: () => Ut,
    zF: () => Ht
  });
  var r = n(42845),
    a = n(58903),
    i = n(38262);
  const o = function (e) {
      for (var t = 0;; t++) if (!(e = e.previousSibling)) return t;
    },
    s = function (e) {
      let t = e.assignedSlot || e.parentNode;
      return t && 11 == t.nodeType ? t.host : t;
    };
  let l = null;
  const c = function (e, t, n) {
      let r = l || (l = document.createRange());
      return r.setEnd(e, null == n ? e.nodeValue.length : n), r.setStart(e, t || 0), r;
    },
    u = function (e, t, n, r) {
      return n && (p(e, t, n, r, -1) || p(e, t, n, r, 1));
    },
    d = /^(img|br|input|textarea|hr)$/i;
  function p(e, t, n, r, a) {
    for (var i;;) {
      if (e == n && t == r) return !0;
      if (t == (a < 0 ? 0 : f(e))) {
        let n = e.parentNode;
        if (!n || 1 != n.nodeType || h(e) || d.test(e.nodeName) || "false" == e.contentEditable) return !1;
        t = o(e) + (a < 0 ? 0 : 1), e = n;
      } else {
        if (1 != e.nodeType) return !1;
        {
          let n = e.childNodes[t + (a < 0 ? -1 : 0)];
          if (1 == n.nodeType && "false" == n.contentEditable) {
            if (!(null === (i = n.pmViewDesc) || void 0 === i ? void 0 : i.ignoreForSelection)) return !1;
            t += a;
          } else e = n, t = a < 0 ? f(e) : 0;
        }
      }
    }
  }
  function f(e) {
    return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
  }
  function h(e) {
    let t;
    for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
    return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
  }
  const _ = function (e) {
    return e.focusNode && u(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset);
  };
  function m(e, t) {
    let n = document.createEvent("Event");
    return n.initEvent("keydown", !0, !0), n.keyCode = e, n.key = n.code = t, n;
  }
  const A = "undefined" != typeof navigator ? navigator : null,
    g = "undefined" != typeof document ? document : null,
    y = A && A.userAgent || "",
    v = /Edge\/(\d+)/.exec(y),
    E = /MSIE \d/.exec(y),
    b = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(y),
    w = !!(E || b || v),
    C = E ? document.documentMode : b ? +b[1] : v ? +v[1] : 0,
    O = !w && /gecko\/(\d+)/i.test(y);
  O && (/Firefox\/(\d+)/.exec(y) || [0, 0])[1];
  const M = !w && /Chrome\/(\d+)/.exec(y),
    S = !!M,
    T = M ? +M[1] : 0,
    k = !w && !!A && /Apple Computer/.test(A.vendor),
    x = k && (/Mobile\/\w+/.test(y) || !!A && A.maxTouchPoints > 2),
    D = x || !!A && /Mac/.test(A.platform),
    I = !!A && /Win/.test(A.platform),
    P = /Android \d/.test(y),
    L = !!g && "webkitFontSmoothing" in g.documentElement.style,
    R = L ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
  function B(e) {
    let t = e.defaultView && e.defaultView.visualViewport;
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
  function N(e, t) {
    return "number" == typeof e ? e : e[t];
  }
  function U(e) {
    let t = e.getBoundingClientRect(),
      n = t.width / e.offsetWidth || 1,
      r = t.height / e.offsetHeight || 1;
    return {
      left: t.left,
      right: t.left + e.clientWidth * n,
      top: t.top,
      bottom: t.top + e.clientHeight * r
    };
  }
  function F(e, t, n) {
    let r = e.someProp("scrollThreshold") || 0,
      a = e.someProp("scrollMargin") || 5,
      i = e.dom.ownerDocument;
    for (let o = n || e.dom; o;) {
      if (1 != o.nodeType) {
        o = s(o);
        continue;
      }
      let e = o,
        n = e == i.body,
        l = n ? B(i) : U(e),
        c = 0,
        u = 0;
      if (t.top < l.top + N(r, "top") ? u = -(l.top - t.top + N(a, "top")) : t.bottom > l.bottom - N(r, "bottom") && (u = t.bottom - t.top > l.bottom - l.top ? t.top + N(a, "top") - l.top : t.bottom - l.bottom + N(a, "bottom")), t.left < l.left + N(r, "left") ? c = -(l.left - t.left + N(a, "left")) : t.right > l.right - N(r, "right") && (c = t.right - l.right + N(a, "right")), c || u) if (n) i.defaultView.scrollBy(c, u);else {
        let n = e.scrollLeft,
          r = e.scrollTop;
        u && (e.scrollTop += u), c && (e.scrollLeft += c);
        let a = e.scrollLeft - n,
          i = e.scrollTop - r;
        t = {
          left: t.left - a,
          top: t.top - i,
          right: t.right - a,
          bottom: t.bottom - i
        };
      }
      let d = n ? "fixed" : getComputedStyle(o).position;
      if (/^(fixed|sticky)$/.test(d)) break;
      o = "absolute" == d ? o.offsetParent : s(o);
    }
  }
  function j(e) {
    let t = [],
      n = e.ownerDocument;
    for (let r = e; r && (t.push({
      dom: r,
      top: r.scrollTop,
      left: r.scrollLeft
    }), e != n); r = s(r));
    return t;
  }
  function H(e, t) {
    for (let n = 0; n < e.length; n++) {
      let {
        dom: r,
        top: a,
        left: i
      } = e[n];
      r.scrollTop != a + t && (r.scrollTop = a + t), r.scrollLeft != i && (r.scrollLeft = i);
    }
  }
  let W = null;
  function K(e, t) {
    let n,
      r,
      a,
      i,
      o = 2e8,
      s = 0,
      l = t.top,
      u = t.top;
    for (let d = e.firstChild, p = 0; d; d = d.nextSibling, p++) {
      let e;
      if (1 == d.nodeType) e = d.getClientRects();else {
        if (3 != d.nodeType) continue;
        e = c(d).getClientRects();
      }
      for (let c = 0; c < e.length; c++) {
        let f = e[c];
        if (f.top <= l && f.bottom >= u) {
          l = Math.max(f.bottom, l), u = Math.min(f.top, u);
          let e = f.left > t.left ? f.left - t.left : f.right < t.left ? t.left - f.right : 0;
          if (e < o) {
            n = d, o = e, r = e && 3 == n.nodeType ? {
              left: f.right < t.left ? f.right : f.left,
              top: t.top
            } : t, 1 == d.nodeType && e && (s = p + (t.left >= (f.left + f.right) / 2 ? 1 : 0));
            continue;
          }
        } else f.top > t.top && !a && f.left <= t.left && f.right >= t.left && (a = d, i = {
          left: Math.max(f.left, Math.min(f.right, t.left)),
          top: f.top
        });
        !n && (t.left >= f.right && t.top >= f.top || t.left >= f.left && t.top >= f.bottom) && (s = p + 1);
      }
    }
    return !n && a && (n = a, r = i, o = 0), n && 3 == n.nodeType ? function (e, t) {
      let n = e.nodeValue.length,
        r = document.createRange();
      for (let a = 0; a < n; a++) {
        r.setEnd(e, a + 1), r.setStart(e, a);
        let n = G(r, 1);
        if (n.top != n.bottom && V(t, n)) return {
          node: e,
          offset: a + (t.left >= (n.left + n.right) / 2 ? 1 : 0)
        };
      }
      return {
        node: e,
        offset: 0
      };
    }(n, r) : !n || o && 1 == n.nodeType ? {
      node: e,
      offset: s
    } : K(n, r);
  }
  function V(e, t) {
    return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1;
  }
  function z(e, t, n) {
    let r = e.childNodes.length;
    if (r && n.top < n.bottom) for (let a = Math.max(0, Math.min(r - 1, Math.floor(r * (t.top - n.top) / (n.bottom - n.top)) - 2)), i = a;;) {
      let n = e.childNodes[i];
      if (1 == n.nodeType) {
        let e = n.getClientRects();
        for (let r = 0; r < e.length; r++) {
          let a = e[r];
          if (V(t, a)) return z(n, t, a);
        }
      }
      if ((i = (i + 1) % r) == a) break;
    }
    return e;
  }
  function Y(e, t) {
    let n,
      r = e.dom.ownerDocument,
      a = 0,
      i = function (e, t, n) {
        if (e.caretPositionFromPoint) try {
          let r = e.caretPositionFromPoint(t, n);
          if (r) return {
            node: r.offsetNode,
            offset: Math.min(f(r.offsetNode), r.offset)
          };
        } catch (e) {}
        if (e.caretRangeFromPoint) {
          let r = e.caretRangeFromPoint(t, n);
          if (r) return {
            node: r.startContainer,
            offset: Math.min(f(r.startContainer), r.startOffset)
          };
        }
      }(r, t.left, t.top);
    i && ({
      node: n,
      offset: a
    } = i);
    let o,
      l = (e.root.elementFromPoint ? e.root : r).elementFromPoint(t.left, t.top);
    if (!l || !e.dom.contains(1 != l.nodeType ? l.parentNode : l)) {
      let n = e.dom.getBoundingClientRect();
      if (!V(t, n)) return null;
      if (l = z(e.dom, t, n), !l) return null;
    }
    if (k) for (let e = l; n && e; e = s(e)) e.draggable && (n = void 0);
    if (l = function (e, t) {
      let n = e.parentNode;
      return n && /^li$/i.test(n.nodeName) && t.left < e.getBoundingClientRect().left ? n : e;
    }(l, t), n) {
      if (O && 1 == n.nodeType && (a = Math.min(a, n.childNodes.length), a < n.childNodes.length)) {
        let e,
          r = n.childNodes[a];
        "IMG" == r.nodeName && (e = r.getBoundingClientRect()).right <= t.left && e.bottom > t.top && a++;
      }
      let r;
      L && a && 1 == n.nodeType && 1 == (r = n.childNodes[a - 1]).nodeType && "false" == r.contentEditable && r.getBoundingClientRect().top >= t.top && a--, n == e.dom && a == n.childNodes.length - 1 && 1 == n.lastChild.nodeType && t.top > n.lastChild.getBoundingClientRect().bottom ? o = e.state.doc.content.size : 0 != a && 1 == n.nodeType && "BR" == n.childNodes[a - 1].nodeName || (o = function (e, t, n, r) {
        let a = -1;
        for (let n = t, i = !1; n != e.dom;) {
          let t,
            o = e.docView.nearestDesc(n, !0);
          if (!o) return null;
          if (1 == o.dom.nodeType && (o.node.isBlock && o.parent || !o.contentDOM) && ((t = o.dom.getBoundingClientRect()).width || t.height) && (o.node.isBlock && o.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(o.dom.nodeName) && (!i && t.left > r.left || t.top > r.top ? a = o.posBefore : (!i && t.right < r.left || t.bottom < r.top) && (a = o.posAfter), i = !0), !o.contentDOM && a < 0 && !o.node.isText)) return (o.node.isBlock ? r.top < (t.top + t.bottom) / 2 : r.left < (t.left + t.right) / 2) ? o.posBefore : o.posAfter;
          n = o.dom.parentNode;
        }
        return a > -1 ? a : e.docView.posFromDOM(t, n, -1);
      }(e, n, a, t));
    }
    null == o && (o = function (e, t, n) {
      let {
          node: r,
          offset: a
        } = K(t, n),
        i = -1;
      if (1 == r.nodeType && !r.firstChild) {
        let e = r.getBoundingClientRect();
        i = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
      }
      return e.docView.posFromDOM(r, a, i);
    }(e, l, t));
    let c = e.docView.nearestDesc(l, !0);
    return {
      pos: o,
      inside: c ? c.posAtStart - c.border : -1
    };
  }
  function Q(e) {
    return e.top < e.bottom || e.left < e.right;
  }
  function G(e, t) {
    let n = e.getClientRects();
    if (n.length) {
      let e = n[t < 0 ? 0 : n.length - 1];
      if (Q(e)) return e;
    }
    return Array.prototype.find.call(n, Q) || e.getBoundingClientRect();
  }
  const $ = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
  function q(e, t, n) {
    let {
        node: r,
        offset: a,
        atom: i
      } = e.docView.domFromPos(t, n < 0 ? -1 : 1),
      o = L || O;
    if (3 == r.nodeType) {
      if (!o || !$.test(r.nodeValue) && (n < 0 ? a : a != r.nodeValue.length)) {
        let e = a,
          t = a,
          i = n < 0 ? 1 : -1;
        return n < 0 && !a ? (t++, i = -1) : n >= 0 && a == r.nodeValue.length ? (e--, i = 1) : n < 0 ? e-- : t++, Z(G(c(r, e, t), i), i < 0);
      }
      {
        let e = G(c(r, a, a), n);
        if (O && a && /\s/.test(r.nodeValue[a - 1]) && a < r.nodeValue.length) {
          let t = G(c(r, a - 1, a - 1), -1);
          if (t.top == e.top) {
            let n = G(c(r, a, a + 1), -1);
            if (n.top != e.top) return Z(n, n.left < t.left);
          }
        }
        return e;
      }
    }
    if (!e.state.doc.resolve(t - (i || 0)).parent.inlineContent) {
      if (null == i && a && (n < 0 || a == f(r))) {
        let e = r.childNodes[a - 1];
        if (1 == e.nodeType) return X(e.getBoundingClientRect(), !1);
      }
      if (null == i && a < f(r)) {
        let e = r.childNodes[a];
        if (1 == e.nodeType) return X(e.getBoundingClientRect(), !0);
      }
      return X(r.getBoundingClientRect(), n >= 0);
    }
    if (null == i && a && (n < 0 || a == f(r))) {
      let e = r.childNodes[a - 1],
        t = 3 == e.nodeType ? c(e, f(e) - (o ? 0 : 1)) : 1 != e.nodeType || "BR" == e.nodeName && e.nextSibling ? null : e;
      if (t) return Z(G(t, 1), !1);
    }
    if (null == i && a < f(r)) {
      let e = r.childNodes[a];
      for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords;) e = e.nextSibling;
      let t = e ? 3 == e.nodeType ? c(e, 0, o ? 0 : 1) : 1 == e.nodeType ? e : null : null;
      if (t) return Z(G(t, -1), !0);
    }
    return Z(G(3 == r.nodeType ? c(r) : r, -n), n >= 0);
  }
  function Z(e, t) {
    if (0 == e.width) return e;
    let n = t ? e.left : e.right;
    return {
      top: e.top,
      bottom: e.bottom,
      left: n,
      right: n
    };
  }
  function X(e, t) {
    if (0 == e.height) return e;
    let n = t ? e.top : e.bottom;
    return {
      top: n,
      bottom: n,
      left: e.left,
      right: e.right
    };
  }
  function J(e, t, n) {
    let r = e.state,
      a = e.root.activeElement;
    r != t && e.updateState(t), a != e.dom && e.focus();
    try {
      return n();
    } finally {
      r != t && e.updateState(r), a != e.dom && a && a.focus();
    }
  }
  const ee = /[\u0590-\u08ac]/;
  let te = null,
    ne = null,
    re = !1;
  class ae {
    constructor(e, t, n, r) {
      this.parent = e, this.children = t, this.dom = n, this.contentDOM = r, this.dirty = 0, n.pmViewDesc = this;
    }
    matchesWidget(e) {
      return !1;
    }
    matchesMark(e) {
      return !1;
    }
    matchesNode(e, t, n) {
      return !1;
    }
    matchesHack(e) {
      return !1;
    }
    parseRule() {
      return null;
    }
    stopEvent(e) {
      return !1;
    }
    get size() {
      let e = 0;
      for (let t = 0; t < this.children.length; t++) e += this.children[t].size;
      return e;
    }
    get border() {
      return 0;
    }
    destroy() {
      this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
      for (let e = 0; e < this.children.length; e++) this.children[e].destroy();
    }
    posBeforeChild(e) {
      for (let t = 0, n = this.posAtStart;; t++) {
        let r = this.children[t];
        if (r == e) return n;
        n += r.size;
      }
    }
    get posBefore() {
      return this.parent.posBeforeChild(this);
    }
    get posAtStart() {
      return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
    }
    get posAfter() {
      return this.posBefore + this.size;
    }
    get posAtEnd() {
      return this.posAtStart + this.size - 2 * this.border;
    }
    localPosFromDOM(e, t, n) {
      if (this.contentDOM && this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)) {
        if (n < 0) {
          let n, r;
          if (e == this.contentDOM) n = e.childNodes[t - 1];else {
            for (; e.parentNode != this.contentDOM;) e = e.parentNode;
            n = e.previousSibling;
          }
          for (; n && (!(r = n.pmViewDesc) || r.parent != this);) n = n.previousSibling;
          return n ? this.posBeforeChild(r) + r.size : this.posAtStart;
        }
        {
          let n, r;
          if (e == this.contentDOM) n = e.childNodes[t];else {
            for (; e.parentNode != this.contentDOM;) e = e.parentNode;
            n = e.nextSibling;
          }
          for (; n && (!(r = n.pmViewDesc) || r.parent != this);) n = n.nextSibling;
          return n ? this.posBeforeChild(r) : this.posAtEnd;
        }
      }
      let r;
      if (e == this.dom && this.contentDOM) r = t > o(this.contentDOM);else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) r = 2 & e.compareDocumentPosition(this.contentDOM);else if (this.dom.firstChild) {
        if (0 == t) for (let t = e;; t = t.parentNode) {
          if (t == this.dom) {
            r = !1;
            break;
          }
          if (t.previousSibling) break;
        }
        if (null == r && t == e.childNodes.length) for (let t = e;; t = t.parentNode) {
          if (t == this.dom) {
            r = !0;
            break;
          }
          if (t.nextSibling) break;
        }
      }
      return (null == r ? n > 0 : r) ? this.posAtEnd : this.posAtStart;
    }
    nearestDesc(e, t = !1) {
      for (let n = !0, r = e; r; r = r.parentNode) {
        let a,
          i = this.getDesc(r);
        if (i && (!t || i.node)) {
          if (!n || !(a = i.nodeDOM) || (1 == a.nodeType ? a.contains(1 == e.nodeType ? e : e.parentNode) : a == e)) return i;
          n = !1;
        }
      }
    }
    getDesc(e) {
      let t = e.pmViewDesc;
      for (let e = t; e; e = e.parent) if (e == this) return t;
    }
    posFromDOM(e, t, n) {
      for (let r = e; r; r = r.parentNode) {
        let a = this.getDesc(r);
        if (a) return a.localPosFromDOM(e, t, n);
      }
      return -1;
    }
    descAt(e) {
      for (let t = 0, n = 0; t < this.children.length; t++) {
        let r = this.children[t],
          a = n + r.size;
        if (n == e && a != n) {
          for (; !r.border && r.children.length;) for (let e = 0; e < r.children.length; e++) {
            let t = r.children[e];
            if (t.size) {
              r = t;
              break;
            }
          }
          return r;
        }
        if (e < a) return r.descAt(e - n - r.border);
        n = a;
      }
    }
    domFromPos(e, t) {
      if (!this.contentDOM) return {
        node: this.dom,
        offset: 0,
        atom: e + 1
      };
      let n = 0,
        r = 0;
      for (let t = 0; n < this.children.length; n++) {
        let a = this.children[n],
          i = t + a.size;
        if (i > e || a instanceof de) {
          r = e - t;
          break;
        }
        t = i;
      }
      if (r) return this.children[n].domFromPos(r - this.children[n].border, t);
      for (let e; n && !(e = this.children[n - 1]).size && e instanceof ie && e.side >= 0; n--);
      if (t <= 0) {
        let e,
          r = !0;
        for (; e = n ? this.children[n - 1] : null, e && e.dom.parentNode != this.contentDOM; n--, r = !1);
        return e && t && r && !e.border && !e.domAtom ? e.domFromPos(e.size, t) : {
          node: this.contentDOM,
          offset: e ? o(e.dom) + 1 : 0
        };
      }
      {
        let e,
          r = !0;
        for (; e = n < this.children.length ? this.children[n] : null, e && e.dom.parentNode != this.contentDOM; n++, r = !1);
        return e && r && !e.border && !e.domAtom ? e.domFromPos(0, t) : {
          node: this.contentDOM,
          offset: e ? o(e.dom) : this.contentDOM.childNodes.length
        };
      }
    }
    parseRange(e, t, n = 0) {
      if (0 == this.children.length) return {
        node: this.contentDOM,
        from: e,
        to: t,
        fromOffset: 0,
        toOffset: this.contentDOM.childNodes.length
      };
      let r = -1,
        a = -1;
      for (let i = n, s = 0;; s++) {
        let n = this.children[s],
          l = i + n.size;
        if (-1 == r && e <= l) {
          let a = i + n.border;
          if (e >= a && t <= l - n.border && n.node && n.contentDOM && this.contentDOM.contains(n.contentDOM)) return n.parseRange(e, t, a);
          e = i;
          for (let t = s; t > 0; t--) {
            let n = this.children[t - 1];
            if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(1)) {
              r = o(n.dom) + 1;
              break;
            }
            e -= n.size;
          }
          -1 == r && (r = 0);
        }
        if (r > -1 && (l > t || s == this.children.length - 1)) {
          t = l;
          for (let e = s + 1; e < this.children.length; e++) {
            let n = this.children[e];
            if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(-1)) {
              a = o(n.dom);
              break;
            }
            t += n.size;
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
    emptyChildAt(e) {
      if (this.border || !this.contentDOM || !this.children.length) return !1;
      let t = this.children[e < 0 ? 0 : this.children.length - 1];
      return 0 == t.size || t.emptyChildAt(e);
    }
    domAfterPos(e) {
      let {
        node: t,
        offset: n
      } = this.domFromPos(e, 0);
      if (1 != t.nodeType || n == t.childNodes.length) throw new RangeError("No node after pos " + e);
      return t.childNodes[n];
    }
    setSelection(e, t, n, r = !1) {
      let a = Math.min(e, t),
        i = Math.max(e, t);
      for (let o = 0, s = 0; o < this.children.length; o++) {
        let l = this.children[o],
          c = s + l.size;
        if (a > s && i < c) return l.setSelection(e - s - l.border, t - s - l.border, n, r);
        s = c;
      }
      let s = this.domFromPos(e, e ? -1 : 1),
        l = t == e ? s : this.domFromPos(t, t ? -1 : 1),
        c = n.root.getSelection(),
        d = n.domSelectionRange(),
        p = !1;
      if ((O || k) && e == t) {
        let {
          node: e,
          offset: t
        } = s;
        if (3 == e.nodeType) {
          if (p = !(!t || "\n" != e.nodeValue[t - 1]), p && t == e.nodeValue.length) for (let t, n = e; n; n = n.parentNode) {
            if (t = n.nextSibling) {
              "BR" == t.nodeName && (s = l = {
                node: t.parentNode,
                offset: o(t) + 1
              });
              break;
            }
            let e = n.pmViewDesc;
            if (e && e.node && e.node.isBlock) break;
          }
        } else {
          let n = e.childNodes[t - 1];
          p = n && ("BR" == n.nodeName || "false" == n.contentEditable);
        }
      }
      if (O && d.focusNode && d.focusNode != l.node && 1 == d.focusNode.nodeType) {
        let e = d.focusNode.childNodes[d.focusOffset];
        e && "false" == e.contentEditable && (r = !0);
      }
      if (!(r || p && k) && u(s.node, s.offset, d.anchorNode, d.anchorOffset) && u(l.node, l.offset, d.focusNode, d.focusOffset)) return;
      let f = !1;
      if ((c.extend || e == t) && (!p || !O)) {
        c.collapse(s.node, s.offset);
        try {
          e != t && c.extend(l.node, l.offset), f = !0;
        } catch (e) {}
      }
      if (!f) {
        if (e > t) {
          let e = s;
          s = l, l = e;
        }
        let n = document.createRange();
        n.setEnd(l.node, l.offset), n.setStart(s.node, s.offset), c.removeAllRanges(), c.addRange(n);
      }
    }
    ignoreMutation(e) {
      return !this.contentDOM && "selection" != e.type;
    }
    get contentLost() {
      return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
    }
    markDirty(e, t) {
      for (let n = 0, r = 0; r < this.children.length; r++) {
        let a = this.children[r],
          i = n + a.size;
        if (n == i ? e <= i && t >= n : e < i && t > n) {
          let r = n + a.border,
            o = i - a.border;
          if (e >= r && t <= o) return this.dirty = e == n || t == i ? 2 : 1, void (e != r || t != o || !a.contentLost && a.dom.parentNode == this.contentDOM ? a.markDirty(e - r, t - r) : a.dirty = 3);
          a.dirty = a.dom != a.contentDOM || a.dom.parentNode != this.contentDOM || a.children.length ? 3 : 2;
        }
        n = i;
      }
      this.dirty = 2;
    }
    markParentsDirty() {
      let e = 1;
      for (let t = this.parent; t; t = t.parent, e++) {
        let n = 1 == e ? 2 : 1;
        t.dirty < n && (t.dirty = n);
      }
    }
    get domAtom() {
      return !1;
    }
    get ignoreForCoords() {
      return !1;
    }
    get ignoreForSelection() {
      return !1;
    }
    isText(e) {
      return !1;
    }
  }
  class ie extends ae {
    constructor(e, t, n, r) {
      let a,
        i = t.type.toDOM;
      if ("function" == typeof i && (i = i(n, () => a ? a.parent ? a.parent.posBeforeChild(a) : void 0 : r)), !t.type.spec.raw) {
        if (1 != i.nodeType) {
          let e = document.createElement("span");
          e.appendChild(i), i = e;
        }
        i.contentEditable = "false", i.classList.add("ProseMirror-widget");
      }
      super(e, [], i, null), this.widget = t, this.widget = t, a = this;
    }
    matchesWidget(e) {
      return 0 == this.dirty && e.type.eq(this.widget.type);
    }
    parseRule() {
      return {
        ignore: !0
      };
    }
    stopEvent(e) {
      let t = this.widget.spec.stopEvent;
      return !!t && t(e);
    }
    ignoreMutation(e) {
      return "selection" != e.type || this.widget.spec.ignoreSelection;
    }
    destroy() {
      this.widget.type.destroy(this.dom), super.destroy();
    }
    get domAtom() {
      return !0;
    }
    get ignoreForSelection() {
      return !!this.widget.type.spec.relaxedSide;
    }
    get side() {
      return this.widget.type.side;
    }
  }
  class oe extends ae {
    constructor(e, t, n, r) {
      super(e, [], t, null), this.textDOM = n, this.text = r;
    }
    get size() {
      return this.text.length;
    }
    localPosFromDOM(e, t) {
      return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
    }
    domFromPos(e) {
      return {
        node: this.textDOM,
        offset: e
      };
    }
    ignoreMutation(e) {
      return "characterData" === e.type && e.target.nodeValue == e.oldValue;
    }
  }
  class se extends ae {
    constructor(e, t, n, r, a) {
      super(e, [], n, r), this.mark = t, this.spec = a;
    }
    static create(e, t, n, r) {
      let i = r.nodeViews[t.type.name],
        o = i && i(t, r, n);
      return o && o.dom || (o = a.ZF.renderSpec(document, t.type.spec.toDOM(t, n), null, t.attrs)), new se(e, t, o.dom, o.contentDOM || o.dom, o);
    }
    parseRule() {
      return 3 & this.dirty || this.mark.type.spec.reparseInView ? null : {
        mark: this.mark.type.name,
        attrs: this.mark.attrs,
        contentElement: this.contentDOM
      };
    }
    matchesMark(e) {
      return 3 != this.dirty && this.mark.eq(e);
    }
    markDirty(e, t) {
      if (super.markDirty(e, t), 0 != this.dirty) {
        let e = this.parent;
        for (; !e.node;) e = e.parent;
        e.dirty < this.dirty && (e.dirty = this.dirty), this.dirty = 0;
      }
    }
    slice(e, t, n) {
      let r = se.create(this.parent, this.mark, !0, n),
        a = this.children,
        i = this.size;
      t < i && (a = Ce(a, t, i, n)), e > 0 && (a = Ce(a, 0, e, n));
      for (let e = 0; e < a.length; e++) a[e].parent = r;
      return r.children = a, r;
    }
    ignoreMutation(e) {
      return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
    }
    destroy() {
      this.spec.destroy && this.spec.destroy(), super.destroy();
    }
  }
  class le extends ae {
    constructor(e, t, n, r, a, i, o, s, l) {
      super(e, [], a, i), this.node = t, this.outerDeco = n, this.innerDeco = r, this.nodeDOM = o;
    }
    static create(e, t, n, r, i, o) {
      let s,
        l = i.nodeViews[t.type.name],
        c = l && l(t, i, () => s ? s.parent ? s.parent.posBeforeChild(s) : void 0 : o, n, r),
        u = c && c.dom,
        d = c && c.contentDOM;
      if (t.isText) {
        if (u) {
          if (3 != u.nodeType) throw new RangeError("Text must be rendered as a DOM text node");
        } else u = document.createTextNode(t.text);
      } else if (!u) {
        let e = a.ZF.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs);
        ({
          dom: u,
          contentDOM: d
        } = e);
      }
      d || t.isText || "BR" == u.nodeName || (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0));
      let p = u;
      return u = ye(u, n, t), c ? s = new pe(e, t, n, r, u, d || null, p, c, i, o + 1) : t.isText ? new ue(e, t, n, r, u, p, i) : new le(e, t, n, r, u, d || null, p, i, o + 1);
    }
    parseRule() {
      if (this.node.type.spec.reparseInView) return null;
      let e = {
        node: this.node.type.name,
        attrs: this.node.attrs
      };
      if ("pre" == this.node.type.whitespace && (e.preserveWhitespace = "full"), this.contentDOM) {
        if (this.contentLost) {
          for (let t = this.children.length - 1; t >= 0; t--) {
            let n = this.children[t];
            if (this.dom.contains(n.dom.parentNode)) {
              e.contentElement = n.dom.parentNode;
              break;
            }
          }
          e.contentElement || (e.getContent = () => a.FK.empty);
        } else e.contentElement = this.contentDOM;
      } else e.getContent = () => this.node.content;
      return e;
    }
    matchesNode(e, t, n) {
      return 0 == this.dirty && e.eq(this.node) && ve(t, this.outerDeco) && n.eq(this.innerDeco);
    }
    get size() {
      return this.node.nodeSize;
    }
    get border() {
      return this.node.isLeaf ? 0 : 1;
    }
    updateChildren(e, t) {
      let n = this.node.inlineContent,
        r = t,
        i = e.composing ? this.localCompositionInfo(e, t) : null,
        o = i && i.pos > -1 ? i : null,
        s = i && i.pos < 0,
        l = new be(this, o && o.node, e);
      !function (e, t, n, r) {
        let a = t.locals(e),
          i = 0;
        if (0 == a.length) {
          for (let n = 0; n < e.childCount; n++) {
            let o = e.child(n);
            r(o, a, t.forChild(i, o), n), i += o.nodeSize;
          }
          return;
        }
        let o = 0,
          s = [],
          l = null;
        for (let c = 0;;) {
          let u, d, p, f;
          for (; o < a.length && a[o].to == i;) {
            let e = a[o++];
            e.widget && (u ? (d || (d = [u])).push(e) : u = e);
          }
          if (u) if (d) {
            d.sort(we);
            for (let e = 0; e < d.length; e++) n(d[e], c, !!l);
          } else n(u, c, !!l);
          if (l) f = -1, p = l, l = null;else {
            if (!(c < e.childCount)) break;
            f = c, p = e.child(c++);
          }
          for (let e = 0; e < s.length; e++) s[e].to <= i && s.splice(e--, 1);
          for (; o < a.length && a[o].from <= i && a[o].to > i;) s.push(a[o++]);
          let h = i + p.nodeSize;
          if (p.isText) {
            let e = h;
            o < a.length && a[o].from < e && (e = a[o].from);
            for (let t = 0; t < s.length; t++) s[t].to < e && (e = s[t].to);
            e < h && (l = p.cut(e - i), p = p.cut(0, e - i), h = e, f = -1);
          } else for (; o < a.length && a[o].to < h;) o++;
          r(p, p.isInline && !p.isLeaf ? s.filter(e => !e.inline) : s.slice(), t.forChild(i, p), f), i = h;
        }
      }(this.node, this.innerDeco, (t, i, o) => {
        t.spec.marks ? l.syncToMarks(t.spec.marks, n, e) : t.type.side >= 0 && !o && l.syncToMarks(i == this.node.childCount ? a.CU.none : this.node.child(i).marks, n, e), l.placeWidget(t, e, r);
      }, (t, a, o, c) => {
        let u;
        l.syncToMarks(t.marks, n, e), l.findNodeMatch(t, a, o, c) || s && e.state.selection.from > r && e.state.selection.to < r + t.nodeSize && (u = l.findIndexWithChild(i.node)) > -1 && l.updateNodeAt(t, a, o, u, e) || l.updateNextNode(t, a, o, e, c, r) || l.addNode(t, a, o, e, r), r += t.nodeSize;
      }), l.syncToMarks([], n, e), this.node.isTextblock && l.addTextblockHacks(), l.destroyRest(), (l.changed || 2 == this.dirty) && (o && this.protectLocalComposition(e, o), fe(this.contentDOM, this.children, e), x && function (e) {
        if ("UL" == e.nodeName || "OL" == e.nodeName) {
          let t = e.style.cssText;
          e.style.cssText = t + "; list-style: square !important", window.getComputedStyle(e).listStyle, e.style.cssText = t;
        }
      }(this.dom));
    }
    localCompositionInfo(e, t) {
      let {
        from: n,
        to: a
      } = e.state.selection;
      if (!(e.state.selection instanceof r.U3) || n < t || a > t + this.node.content.size) return null;
      let i = e.input.compositionNode;
      if (!i || !this.dom.contains(i.parentNode)) return null;
      if (this.node.inlineContent) {
        let e = i.nodeValue,
          r = function (e, t, n, r) {
            for (let a = 0, i = 0; a < e.childCount && i <= r;) {
              let o = e.child(a++),
                s = i;
              if (i += o.nodeSize, !o.isText) continue;
              let l = o.text;
              for (; a < e.childCount;) {
                let t = e.child(a++);
                if (i += t.nodeSize, !t.isText) break;
                l += t.text;
              }
              if (i >= n) {
                if (i >= r && l.slice(r - t.length - s, r - s) == t) return r - t.length;
                let e = s < r ? l.lastIndexOf(t, r - s - 1) : -1;
                if (e >= 0 && e + t.length + s >= n) return s + e;
                if (n == r && l.length >= r + t.length - s && l.slice(r - s, r - s + t.length) == t) return r;
              }
            }
            return -1;
          }(this.node.content, e, n - t, a - t);
        return r < 0 ? null : {
          node: i,
          pos: r,
          text: e
        };
      }
      return {
        node: i,
        pos: -1,
        text: ""
      };
    }
    protectLocalComposition(e, {
      node: t,
      pos: n,
      text: r
    }) {
      if (this.getDesc(t)) return;
      let a = t;
      for (; a.parentNode != this.contentDOM; a = a.parentNode) {
        for (; a.previousSibling;) a.parentNode.removeChild(a.previousSibling);
        for (; a.nextSibling;) a.parentNode.removeChild(a.nextSibling);
        a.pmViewDesc && (a.pmViewDesc = void 0);
      }
      let i = new oe(this, a, t, r);
      e.input.compositionNodes.push(i), this.children = Ce(this.children, n, n + r.length, e, i);
    }
    update(e, t, n, r) {
      return !(3 == this.dirty || !e.sameMarkup(this.node) || (this.updateInner(e, t, n, r), 0));
    }
    updateInner(e, t, n, r) {
      this.updateOuterDeco(t), this.node = e, this.innerDeco = n, this.contentDOM && this.updateChildren(r, this.posAtStart), this.dirty = 0;
    }
    updateOuterDeco(e) {
      if (ve(e, this.outerDeco)) return;
      let t = 1 != this.nodeDOM.nodeType,
        n = this.dom;
      this.dom = Ae(this.dom, this.nodeDOM, me(this.outerDeco, this.node, t), me(e, this.node, t)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
    }
    selectNode() {
      1 == this.nodeDOM.nodeType && (this.nodeDOM.classList.add("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || (this.nodeDOM.draggable = !0));
    }
    deselectNode() {
      1 == this.nodeDOM.nodeType && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || this.nodeDOM.removeAttribute("draggable"));
    }
    get domAtom() {
      return this.node.isAtom;
    }
  }
  function ce(e, t, n, r, a) {
    ye(r, t, e);
    let i = new le(void 0, e, t, n, r, r, r, a, 0);
    return i.contentDOM && i.updateChildren(a, 0), i;
  }
  class ue extends le {
    constructor(e, t, n, r, a, i, o) {
      super(e, t, n, r, a, null, i, o, 0);
    }
    parseRule() {
      let e = this.nodeDOM.parentNode;
      for (; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
      return {
        skip: e || !0
      };
    }
    update(e, t, n, r) {
      return !(3 == this.dirty || 0 != this.dirty && !this.inParent() || !e.sameMarkup(this.node) || (this.updateOuterDeco(t), 0 == this.dirty && e.text == this.node.text || e.text == this.nodeDOM.nodeValue || (this.nodeDOM.nodeValue = e.text, r.trackWrites == this.nodeDOM && (r.trackWrites = null)), this.node = e, this.dirty = 0, 0));
    }
    inParent() {
      let e = this.parent.contentDOM;
      for (let t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
      return !1;
    }
    domFromPos(e) {
      return {
        node: this.nodeDOM,
        offset: e
      };
    }
    localPosFromDOM(e, t, n) {
      return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, n);
    }
    ignoreMutation(e) {
      return "characterData" != e.type && "selection" != e.type;
    }
    slice(e, t, n) {
      let r = this.node.cut(e, t),
        a = document.createTextNode(r.text);
      return new ue(this.parent, r, this.outerDeco, this.innerDeco, a, a, n);
    }
    markDirty(e, t) {
      super.markDirty(e, t), this.dom == this.nodeDOM || 0 != e && t != this.nodeDOM.nodeValue.length || (this.dirty = 3);
    }
    get domAtom() {
      return !1;
    }
    isText(e) {
      return this.node.text == e;
    }
  }
  class de extends ae {
    parseRule() {
      return {
        ignore: !0
      };
    }
    matchesHack(e) {
      return 0 == this.dirty && this.dom.nodeName == e;
    }
    get domAtom() {
      return !0;
    }
    get ignoreForCoords() {
      return "IMG" == this.dom.nodeName;
    }
  }
  class pe extends le {
    constructor(e, t, n, r, a, i, o, s, l, c) {
      super(e, t, n, r, a, i, o, l, c), this.spec = s;
    }
    update(e, t, n, r) {
      if (3 == this.dirty) return !1;
      if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
        let a = this.spec.update(e, t, n);
        return a && this.updateInner(e, t, n, r), a;
      }
      return !(!this.contentDOM && !e.isLeaf) && super.update(e, t, n, r);
    }
    selectNode() {
      this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
    }
    deselectNode() {
      this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
    }
    setSelection(e, t, n, r) {
      this.spec.setSelection ? this.spec.setSelection(e, t, n.root) : super.setSelection(e, t, n, r);
    }
    destroy() {
      this.spec.destroy && this.spec.destroy(), super.destroy();
    }
    stopEvent(e) {
      return !!this.spec.stopEvent && this.spec.stopEvent(e);
    }
    ignoreMutation(e) {
      return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
    }
  }
  function fe(e, t, n) {
    let r = e.firstChild,
      a = !1;
    for (let i = 0; i < t.length; i++) {
      let o = t[i],
        s = o.dom;
      if (s.parentNode == e) {
        for (; s != r;) r = Ee(r), a = !0;
        r = r.nextSibling;
      } else a = !0, e.insertBefore(s, r);
      if (o instanceof se) {
        let t = r ? r.previousSibling : e.lastChild;
        fe(o.contentDOM, o.children, n), r = t ? t.nextSibling : e.firstChild;
      }
    }
    for (; r;) r = Ee(r), a = !0;
    a && n.trackWrites == e && (n.trackWrites = null);
  }
  const he = function (e) {
    e && (this.nodeName = e);
  };
  he.prototype = Object.create(null);
  const _e = [new he()];
  function me(e, t, n) {
    if (0 == e.length) return _e;
    let r = n ? _e[0] : new he(),
      a = [r];
    for (let i = 0; i < e.length; i++) {
      let o = e[i].type.attrs;
      if (o) {
        o.nodeName && a.push(r = new he(o.nodeName));
        for (let e in o) {
          let i = o[e];
          null != i && (n && 1 == a.length && a.push(r = new he(t.isInline ? "span" : "div")), "class" == e ? r.class = (r.class ? r.class + " " : "") + i : "style" == e ? r.style = (r.style ? r.style + ";" : "") + i : "nodeName" != e && (r[e] = i));
        }
      }
    }
    return a;
  }
  function Ae(e, t, n, r) {
    if (n == _e && r == _e) return t;
    let a = t;
    for (let t = 0; t < r.length; t++) {
      let i = r[t],
        o = n[t];
      if (t) {
        let t;
        o && o.nodeName == i.nodeName && a != e && (t = a.parentNode) && t.nodeName.toLowerCase() == i.nodeName || (t = document.createElement(i.nodeName), t.pmIsDeco = !0, t.appendChild(a), o = _e[0]), a = t;
      }
      ge(a, o || _e[0], i);
    }
    return a;
  }
  function ge(e, t, n) {
    for (let r in t) "class" == r || "style" == r || "nodeName" == r || r in n || e.removeAttribute(r);
    for (let r in n) "class" != r && "style" != r && "nodeName" != r && n[r] != t[r] && e.setAttribute(r, n[r]);
    if (t.class != n.class) {
      let r = t.class ? t.class.split(" ").filter(Boolean) : [],
        a = n.class ? n.class.split(" ").filter(Boolean) : [];
      for (let t = 0; t < r.length; t++) -1 == a.indexOf(r[t]) && e.classList.remove(r[t]);
      for (let t = 0; t < a.length; t++) -1 == r.indexOf(a[t]) && e.classList.add(a[t]);
      0 == e.classList.length && e.removeAttribute("class");
    }
    if (t.style != n.style) {
      if (t.style) {
        let n,
          r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
        for (; n = r.exec(t.style);) e.style.removeProperty(n[1]);
      }
      n.style && (e.style.cssText += n.style);
    }
  }
  function ye(e, t, n) {
    return Ae(e, e, _e, me(t, n, 1 != e.nodeType));
  }
  function ve(e, t) {
    if (e.length != t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!e[n].type.eq(t[n].type)) return !1;
    return !0;
  }
  function Ee(e) {
    let t = e.nextSibling;
    return e.parentNode.removeChild(e), t;
  }
  class be {
    constructor(e, t, n) {
      this.lock = t, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = function (e, t) {
        let n = t,
          r = n.children.length,
          a = e.childCount,
          i = new Map(),
          o = [];
        e: for (; a > 0;) {
          let s;
          for (;;) if (r) {
            let e = n.children[r - 1];
            if (!(e instanceof se)) {
              s = e, r--;
              break;
            }
            n = e, r = e.children.length;
          } else {
            if (n == t) break e;
            r = n.parent.children.indexOf(n), n = n.parent;
          }
          let l = s.node;
          if (l) {
            if (l != e.child(a - 1)) break;
            --a, i.set(s, a), o.push(s);
          }
        }
        return {
          index: a,
          matched: i,
          matches: o.reverse()
        };
      }(e.node.content, e);
    }
    destroyBetween(e, t) {
      if (e != t) {
        for (let n = e; n < t; n++) this.top.children[n].destroy();
        this.top.children.splice(e, t - e), this.changed = !0;
      }
    }
    destroyRest() {
      this.destroyBetween(this.index, this.top.children.length);
    }
    syncToMarks(e, t, n) {
      let r = 0,
        a = this.stack.length >> 1,
        i = Math.min(a, e.length);
      for (; r < i && (r == a - 1 ? this.top : this.stack[r + 1 << 1]).matchesMark(e[r]) && !1 !== e[r].type.spec.spanning;) r++;
      for (; r < a;) this.destroyRest(), this.top.dirty = 0, this.index = this.stack.pop(), this.top = this.stack.pop(), a--;
      for (; a < e.length;) {
        this.stack.push(this.top, this.index + 1);
        let r = -1;
        for (let t = this.index; t < Math.min(this.index + 3, this.top.children.length); t++) {
          let n = this.top.children[t];
          if (n.matchesMark(e[a]) && !this.isLocked(n.dom)) {
            r = t;
            break;
          }
        }
        if (r > -1) r > this.index && (this.changed = !0, this.destroyBetween(this.index, r)), this.top = this.top.children[this.index];else {
          let r = se.create(this.top, e[a], t, n);
          this.top.children.splice(this.index, 0, r), this.top = r, this.changed = !0;
        }
        this.index = 0, a++;
      }
    }
    findNodeMatch(e, t, n, r) {
      let a,
        i = -1;
      if (r >= this.preMatch.index && (a = this.preMatch.matches[r - this.preMatch.index]).parent == this.top && a.matchesNode(e, t, n)) i = this.top.children.indexOf(a, this.index);else for (let r = this.index, a = Math.min(this.top.children.length, r + 5); r < a; r++) {
        let a = this.top.children[r];
        if (a.matchesNode(e, t, n) && !this.preMatch.matched.has(a)) {
          i = r;
          break;
        }
      }
      return !(i < 0 || (this.destroyBetween(this.index, i), this.index++, 0));
    }
    updateNodeAt(e, t, n, r, a) {
      let i = this.top.children[r];
      return 3 == i.dirty && i.dom == i.contentDOM && (i.dirty = 2), !!i.update(e, t, n, a) && (this.destroyBetween(this.index, r), this.index++, !0);
    }
    findIndexWithChild(e) {
      for (;;) {
        let t = e.parentNode;
        if (!t) return -1;
        if (t == this.top.contentDOM) {
          let t = e.pmViewDesc;
          if (t) for (let e = this.index; e < this.top.children.length; e++) if (this.top.children[e] == t) return e;
          return -1;
        }
        e = t;
      }
    }
    updateNextNode(e, t, n, r, a, i) {
      for (let o = this.index; o < this.top.children.length; o++) {
        let s = this.top.children[o];
        if (s instanceof le) {
          let l = this.preMatch.matched.get(s);
          if (null != l && l != a) return !1;
          let c,
            u = s.dom,
            d = this.isLocked(u) && !(e.isText && s.node && s.node.isText && s.nodeDOM.nodeValue == e.text && 3 != s.dirty && ve(t, s.outerDeco));
          if (!d && s.update(e, t, n, r)) return this.destroyBetween(this.index, o), s.dom != u && (this.changed = !0), this.index++, !0;
          if (!d && (c = this.recreateWrapper(s, e, t, n, r, i))) return this.destroyBetween(this.index, o), this.top.children[this.index] = c, c.contentDOM && (c.dirty = 2, c.updateChildren(r, i + 1), c.dirty = 0), this.changed = !0, this.index++, !0;
          break;
        }
      }
      return !1;
    }
    recreateWrapper(e, t, n, r, a, i) {
      if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !ve(n, e.outerDeco) || !r.eq(e.innerDeco)) return null;
      let o = le.create(this.top, t, n, r, a, i);
      if (o.contentDOM) {
        o.children = e.children, e.children = [];
        for (let e of o.children) e.parent = o;
      }
      return e.destroy(), o;
    }
    addNode(e, t, n, r, a) {
      let i = le.create(this.top, e, t, n, r, a);
      i.contentDOM && i.updateChildren(r, a + 1), this.top.children.splice(this.index++, 0, i), this.changed = !0;
    }
    placeWidget(e, t, n) {
      let r = this.index < this.top.children.length ? this.top.children[this.index] : null;
      if (!r || !r.matchesWidget(e) || e != r.widget && r.widget.type.toDOM.parentNode) {
        let r = new ie(this.top, e, t, n);
        this.top.children.splice(this.index++, 0, r), this.changed = !0;
      } else this.index++;
    }
    addTextblockHacks() {
      let e = this.top.children[this.index - 1],
        t = this.top;
      for (; e instanceof se;) t = e, e = t.children[t.children.length - 1];
      (!e || !(e instanceof ue) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((k || S) && e && "false" == e.dom.contentEditable && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
    }
    addHackNode(e, t) {
      if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;else {
        let n = document.createElement(e);
        "IMG" == e && (n.className = "ProseMirror-separator", n.alt = ""), "BR" == e && (n.className = "ProseMirror-trailingBreak");
        let r = new de(this.top, [], n, null);
        t != this.top ? t.children.push(r) : t.children.splice(this.index++, 0, r), this.changed = !0;
      }
    }
    isLocked(e) {
      return this.lock && (e == this.lock || 1 == e.nodeType && e.contains(this.lock.parentNode));
    }
  }
  function we(e, t) {
    return e.type.side - t.type.side;
  }
  function Ce(e, t, n, r, a) {
    let i = [];
    for (let o = 0, s = 0; o < e.length; o++) {
      let l = e[o],
        c = s,
        u = s += l.size;
      c >= n || u <= t ? i.push(l) : (c < t && i.push(l.slice(0, t - c, r)), a && (i.push(a), a = void 0), u > n && i.push(l.slice(n - c, l.size, r)));
    }
    return i;
  }
  function Oe(e, t = null) {
    let n = e.domSelectionRange(),
      a = e.state.doc;
    if (!n.focusNode) return null;
    let i = e.docView.nearestDesc(n.focusNode),
      s = i && 0 == i.size,
      l = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
    if (l < 0) return null;
    let c,
      u,
      d = a.resolve(l);
    if (_(n)) {
      for (c = l; i && !i.node;) i = i.parent;
      let e = i.node;
      if (i && e.isAtom && r.nh.isSelectable(e) && i.parent && (!e.isInline || !function (e, t, n) {
        for (let r = 0 == t, a = t == f(e); r || a;) {
          if (e == n) return !0;
          let t = o(e);
          if (!(e = e.parentNode)) return !1;
          r = r && 0 == t, a = a && t == f(e);
        }
      }(n.focusNode, n.focusOffset, i.dom))) {
        let e = i.posBefore;
        u = new r.nh(l == e ? d : a.resolve(e));
      }
    } else {
      if (n instanceof e.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
        let t = l,
          r = l;
        for (let a = 0; a < n.rangeCount; a++) {
          let i = n.getRangeAt(a);
          t = Math.min(t, e.docView.posFromDOM(i.startContainer, i.startOffset, 1)), r = Math.max(r, e.docView.posFromDOM(i.endContainer, i.endOffset, -1));
        }
        if (t < 0) return null;
        [c, l] = r == e.state.selection.anchor ? [r, t] : [t, r], d = a.resolve(l);
      } else c = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
      if (c < 0) return null;
    }
    let p = a.resolve(c);
    return u || (u = Le(e, p, d, "pointer" == t || e.state.selection.head < d.pos && !s ? 1 : -1)), u;
  }
  function Me(e) {
    return e.editable ? e.hasFocus() : Be(e) && document.activeElement && document.activeElement.contains(e.dom);
  }
  function Se(e, t = !1) {
    let n = e.state.selection;
    if (Ie(e, n), Me(e)) {
      if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && S) {
        let t = e.domSelectionRange(),
          n = e.domObserver.currentSelection;
        if (t.anchorNode && n.anchorNode && u(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset)) return e.input.mouseDown.delayedSelectionSync = !0, void e.domObserver.setCurSelection();
      }
      if (e.domObserver.disconnectSelection(), e.cursorWrapper) !function (e) {
        let t = e.domSelection();
        if (!t) return;
        let n = e.cursorWrapper.dom,
          r = "IMG" == n.nodeName;
        r ? t.collapse(n.parentNode, o(n) + 1) : t.collapse(n, 0), !r && !e.state.selection.visible && w && C <= 11 && (n.disabled = !0, n.disabled = !1);
      }(e);else {
        let a,
          i,
          {
            anchor: o,
            head: s
          } = n;
        !Te || n instanceof r.U3 || (n.$from.parent.inlineContent || (a = ke(e, n.from)), n.empty || n.$from.parent.inlineContent || (i = ke(e, n.to))), e.docView.setSelection(o, s, e, t), Te && (a && De(a), i && De(i)), n.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && function (e) {
          let t = e.dom.ownerDocument;
          t.removeEventListener("selectionchange", e.input.hideSelectionGuard);
          let n = e.domSelectionRange(),
            r = n.anchorNode,
            a = n.anchorOffset;
          t.addEventListener("selectionchange", e.input.hideSelectionGuard = () => {
            n.anchorNode == r && n.anchorOffset == a || (t.removeEventListener("selectionchange", e.input.hideSelectionGuard), setTimeout(() => {
              Me(e) && !e.state.selection.visible || e.dom.classList.remove("ProseMirror-hideselection");
            }, 20));
          });
        }(e));
      }
      e.domObserver.setCurSelection(), e.domObserver.connectSelection();
    }
  }
  const Te = k || S && T < 63;
  function ke(e, t) {
    let {
        node: n,
        offset: r
      } = e.docView.domFromPos(t, 0),
      a = r < n.childNodes.length ? n.childNodes[r] : null,
      i = r ? n.childNodes[r - 1] : null;
    if (k && a && "false" == a.contentEditable) return xe(a);
    if (!(a && "false" != a.contentEditable || i && "false" != i.contentEditable)) {
      if (a) return xe(a);
      if (i) return xe(i);
    }
  }
  function xe(e) {
    return e.contentEditable = "true", k && e.draggable && (e.draggable = !1, e.wasDraggable = !0), e;
  }
  function De(e) {
    e.contentEditable = "false", e.wasDraggable && (e.draggable = !0, e.wasDraggable = null);
  }
  function Ie(e, t) {
    if (t instanceof r.nh) {
      let n = e.docView.descAt(t.from);
      n != e.lastSelectedViewDesc && (Pe(e), n && n.selectNode(), e.lastSelectedViewDesc = n);
    } else Pe(e);
  }
  function Pe(e) {
    e.lastSelectedViewDesc && (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), e.lastSelectedViewDesc = void 0);
  }
  function Le(e, t, n, a) {
    return e.someProp("createSelectionBetween", r => r(e, t, n)) || r.U3.between(t, n, a);
  }
  function Re(e) {
    return !(e.editable && !e.hasFocus()) && Be(e);
  }
  function Be(e) {
    let t = e.domSelectionRange();
    if (!t.anchorNode) return !1;
    try {
      return e.dom.contains(3 == t.anchorNode.nodeType ? t.anchorNode.parentNode : t.anchorNode) && (e.editable || e.dom.contains(3 == t.focusNode.nodeType ? t.focusNode.parentNode : t.focusNode));
    } catch (e) {
      return !1;
    }
  }
  function Ne(e, t) {
    let {
        $anchor: n,
        $head: a
      } = e.selection,
      i = t > 0 ? n.max(a) : n.min(a),
      o = i.parent.inlineContent ? i.depth ? e.doc.resolve(t > 0 ? i.after() : i.before()) : null : i;
    return o && r.LN.findFrom(o, t);
  }
  function Ue(e, t) {
    return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
  }
  function Fe(e, t, n) {
    let a = e.state.selection;
    if (!(a instanceof r.U3)) {
      if (a instanceof r.nh && a.node.isInline) return Ue(e, new r.U3(t > 0 ? a.$to : a.$from));
      {
        let n = Ne(e.state, t);
        return !!n && Ue(e, n);
      }
    }
    if (n.indexOf("s") > -1) {
      let {
          $head: n
        } = a,
        i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
      if (!i || i.isText || !i.isLeaf) return !1;
      let o = e.state.doc.resolve(n.pos + i.nodeSize * (t < 0 ? -1 : 1));
      return Ue(e, new r.U3(a.$anchor, o));
    }
    if (!a.empty) return !1;
    if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
      let n = Ne(e.state, t);
      return !!(n && n instanceof r.nh) && Ue(e, n);
    }
    if (!(D && n.indexOf("m") > -1)) {
      let n,
        i = a.$head,
        o = i.textOffset ? null : t < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText) return !1;
      let s = t < 0 ? i.pos - o.nodeSize : i.pos;
      return !!(o.isAtom || (n = e.docView.descAt(s)) && !n.contentDOM) && (r.nh.isSelectable(o) ? Ue(e, new r.nh(t < 0 ? e.state.doc.resolve(i.pos - o.nodeSize) : i)) : !!L && Ue(e, new r.U3(e.state.doc.resolve(t < 0 ? s : s + o.nodeSize))));
    }
  }
  function je(e) {
    return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
  }
  function He(e, t) {
    let n = e.pmViewDesc;
    return n && 0 == n.size && (t < 0 || e.nextSibling || "BR" != e.nodeName);
  }
  function We(e, t) {
    return t < 0 ? function (e) {
      let t = e.domSelectionRange(),
        n = t.focusNode,
        r = t.focusOffset;
      if (!n) return;
      let a,
        i,
        s = !1;
      for (O && 1 == n.nodeType && r < je(n) && He(n.childNodes[r], -1) && (s = !0);;) if (r > 0) {
        if (1 != n.nodeType) break;
        {
          let e = n.childNodes[r - 1];
          if (He(e, -1)) a = n, i = --r;else {
            if (3 != e.nodeType) break;
            n = e, r = n.nodeValue.length;
          }
        }
      } else {
        if (Ke(n)) break;
        {
          let t = n.previousSibling;
          for (; t && He(t, -1);) a = n.parentNode, i = o(t), t = t.previousSibling;
          if (t) n = t, r = je(n);else {
            if (n = n.parentNode, n == e.dom) break;
            r = 0;
          }
        }
      }
      s ? Ve(e, n, r) : a && Ve(e, a, i);
    }(e) : function (e) {
      let t = e.domSelectionRange(),
        n = t.focusNode,
        r = t.focusOffset;
      if (!n) return;
      let a,
        i,
        s = je(n);
      for (;;) if (r < s) {
        if (1 != n.nodeType) break;
        if (!He(n.childNodes[r], 1)) break;
        a = n, i = ++r;
      } else {
        if (Ke(n)) break;
        {
          let t = n.nextSibling;
          for (; t && He(t, 1);) a = t.parentNode, i = o(t) + 1, t = t.nextSibling;
          if (t) n = t, r = 0, s = je(n);else {
            if (n = n.parentNode, n == e.dom) break;
            r = s = 0;
          }
        }
      }
      a && Ve(e, a, i);
    }(e);
  }
  function Ke(e) {
    let t = e.pmViewDesc;
    return t && t.node && t.node.isBlock;
  }
  function Ve(e, t, n) {
    if (3 != t.nodeType) {
      let e, r;
      (r = function (e, t) {
        for (; e && t == e.childNodes.length && !h(e);) t = o(e) + 1, e = e.parentNode;
        for (; e && t < e.childNodes.length;) {
          let n = e.childNodes[t];
          if (3 == n.nodeType) return n;
          if (1 == n.nodeType && "false" == n.contentEditable) break;
          e = n, t = 0;
        }
      }(t, n)) ? (t = r, n = 0) : (e = function (e, t) {
        for (; e && !t && !h(e);) t = o(e), e = e.parentNode;
        for (; e && t;) {
          let n = e.childNodes[t - 1];
          if (3 == n.nodeType) return n;
          if (1 == n.nodeType && "false" == n.contentEditable) break;
          t = (e = n).childNodes.length;
        }
      }(t, n)) && (t = e, n = e.nodeValue.length);
    }
    let r = e.domSelection();
    if (!r) return;
    if (_(r)) {
      let e = document.createRange();
      e.setEnd(t, n), e.setStart(t, n), r.removeAllRanges(), r.addRange(e);
    } else r.extend && r.extend(t, n);
    e.domObserver.setCurSelection();
    let {
      state: a
    } = e;
    setTimeout(() => {
      e.state == a && Se(e);
    }, 50);
  }
  function ze(e, t) {
    let n = e.state.doc.resolve(t);
    if (!S && !I && n.parent.inlineContent) {
      let r = e.coordsAtPos(t);
      if (t > n.start()) {
        let n = e.coordsAtPos(t - 1),
          a = (n.top + n.bottom) / 2;
        if (a > r.top && a < r.bottom && Math.abs(n.left - r.left) > 1) return n.left < r.left ? "ltr" : "rtl";
      }
      if (t < n.end()) {
        let n = e.coordsAtPos(t + 1),
          a = (n.top + n.bottom) / 2;
        if (a > r.top && a < r.bottom && Math.abs(n.left - r.left) > 1) return n.left > r.left ? "ltr" : "rtl";
      }
    }
    return "rtl" == getComputedStyle(e.dom).direction ? "rtl" : "ltr";
  }
  function Ye(e, t, n) {
    let a = e.state.selection;
    if (a instanceof r.U3 && !a.empty || n.indexOf("s") > -1) return !1;
    if (D && n.indexOf("m") > -1) return !1;
    let {
      $from: i,
      $to: o
    } = a;
    if (!i.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
      let n = Ne(e.state, t);
      if (n && n instanceof r.nh) return Ue(e, n);
    }
    if (!i.parent.inlineContent) {
      let n = t < 0 ? i : o,
        s = a instanceof r.i5 ? r.LN.near(n, t) : r.LN.findFrom(n, t);
      return !!s && Ue(e, s);
    }
    return !1;
  }
  function Qe(e, t) {
    if (!(e.state.selection instanceof r.U3)) return !0;
    let {
      $head: n,
      $anchor: a,
      empty: i
    } = e.state.selection;
    if (!n.sameParent(a)) return !0;
    if (!i) return !1;
    if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
    let o = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
    if (o && !o.isText) {
      let r = e.state.tr;
      return t < 0 ? r.delete(n.pos - o.nodeSize, n.pos) : r.delete(n.pos, n.pos + o.nodeSize), e.dispatch(r), !0;
    }
    return !1;
  }
  function Ge(e, t, n) {
    e.domObserver.stop(), t.contentEditable = n, e.domObserver.start();
  }
  function $e(e, t) {
    e.someProp("transformCopied", n => {
      t = n(t, e);
    });
    let n = [],
      {
        content: r,
        openStart: i,
        openEnd: o
      } = t;
    for (; i > 1 && o > 1 && 1 == r.childCount && 1 == r.firstChild.childCount;) {
      i--, o--;
      let e = r.firstChild;
      n.push(e.type.name, e.attrs != e.type.defaultAttrs ? e.attrs : null), r = e.content;
    }
    let s = e.someProp("clipboardSerializer") || a.ZF.fromSchema(e.state.schema),
      l = it(),
      c = l.createElement("div");
    c.appendChild(s.serializeFragment(r, {
      document: l
    }));
    let u,
      d = c.firstChild,
      p = 0;
    for (; d && 1 == d.nodeType && (u = rt[d.nodeName.toLowerCase()]);) {
      for (let e = u.length - 1; e >= 0; e--) {
        let t = l.createElement(u[e]);
        for (; c.firstChild;) t.appendChild(c.firstChild);
        c.appendChild(t), p++;
      }
      d = c.firstChild;
    }
    return d && 1 == d.nodeType && d.setAttribute("data-pm-slice", `${i} ${o}${p ? ` -${p}` : ""} ${JSON.stringify(n)}`), {
      dom: c,
      text: e.someProp("clipboardTextSerializer", n => n(t, e)) || t.content.textBetween(0, t.content.size, "\n\n"),
      slice: t
    };
  }
  function qe(e, t, n, r, i) {
    let o,
      s,
      l = i.parent.type.spec.code;
    if (!n && !t) return null;
    let c = !!t && (r || l || !n);
    if (c) {
      if (e.someProp("transformPastedText", n => {
        t = n(t, l || r, e);
      }), l) return s = new a.Ji(a.FK.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))), 0, 0), e.someProp("transformPasted", t => {
        s = t(s, e, !0);
      }), s;
      let n = e.someProp("clipboardTextParser", n => n(t, i, r, e));
      if (n) s = n;else {
        let n = i.marks(),
          {
            schema: r
          } = e.state,
          s = a.ZF.fromSchema(r);
        o = document.createElement("div"), t.split(/(?:\r\n?|\n)+/).forEach(e => {
          let t = o.appendChild(document.createElement("p"));
          e && t.appendChild(s.serializeNode(r.text(e, n)));
        });
      }
    } else e.someProp("transformPastedHTML", t => {
      n = t(n, e);
    }), o = function (e) {
      let t = /^(\s*<meta [^>]*>)*/.exec(e);
      t && (e = e.slice(t[0].length));
      let n,
        r = it().createElement("div"),
        a = /<([a-z][^>\s]+)/i.exec(e);
      if ((n = a && rt[a[1].toLowerCase()]) && (e = n.map(e => "<" + e + ">").join("") + e + n.map(e => "</" + e + ">").reverse().join("")), r.innerHTML = function (e) {
        let t = window.trustedTypes;
        return t ? (ot || (ot = t.defaultPolicy || t.createPolicy("ProseMirrorClipboard", {
          createHTML: e => e
        })), ot.createHTML(e)) : e;
      }(e), n) for (let e = 0; e < n.length; e++) r = r.querySelector(n[e]) || r;
      return r;
    }(n), L && function (e) {
      let t = e.querySelectorAll(S ? "span:not([class]):not([style])" : "span.Apple-converted-space");
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        1 == r.childNodes.length && " " == r.textContent && r.parentNode && r.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), r);
      }
    }(o);
    let u = o && o.querySelector("[data-pm-slice]"),
      d = u && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(u.getAttribute("data-pm-slice") || "");
    if (d && d[3]) for (let e = +d[3]; e > 0; e--) {
      let e = o.firstChild;
      for (; e && 1 != e.nodeType;) e = e.nextSibling;
      if (!e) break;
      o = e;
    }
    if (!s) {
      let t = e.someProp("clipboardParser") || e.someProp("domParser") || a.S4.fromSchema(e.state.schema);
      s = t.parseSlice(o, {
        preserveWhitespace: !(!c && !d),
        context: i,
        ruleFromNode: e => "BR" != e.nodeName || e.nextSibling || !e.parentNode || Ze.test(e.parentNode.nodeName) ? null : {
          ignore: !0
        }
      });
    }
    if (d) s = function (e, t) {
      if (!e.size) return e;
      let n,
        r = e.content.firstChild.type.schema;
      try {
        n = JSON.parse(t);
      } catch (t) {
        return e;
      }
      let {
        content: i,
        openStart: o,
        openEnd: s
      } = e;
      for (let e = n.length - 2; e >= 0; e -= 2) {
        let t = r.nodes[n[e]];
        if (!t || t.hasRequiredAttrs()) break;
        i = a.FK.from(t.create(n[e + 1], i)), o++, s++;
      }
      return new a.Ji(i, o, s);
    }(nt(s, +d[1], +d[2]), d[4]);else if (s = a.Ji.maxOpen(function (e, t) {
      if (e.childCount < 2) return e;
      for (let n = t.depth; n >= 0; n--) {
        let r,
          i = t.node(n).contentMatchAt(t.index(n)),
          o = [];
        if (e.forEach(e => {
          if (!o) return;
          let t,
            n = i.findWrapping(e.type);
          if (!n) return o = null;
          if (t = o.length && r.length && Je(n, r, e, o[o.length - 1], 0)) o[o.length - 1] = t;else {
            o.length && (o[o.length - 1] = et(o[o.length - 1], r.length));
            let t = Xe(e, n);
            o.push(t), i = i.matchType(t.type), r = n;
          }
        }), o) return a.FK.from(o);
      }
      return e;
    }(s.content, i), !0), s.openStart || s.openEnd) {
      let e = 0,
        t = 0;
      for (let t = s.content.firstChild; e < s.openStart && !t.type.spec.isolating; e++, t = t.firstChild);
      for (let e = s.content.lastChild; t < s.openEnd && !e.type.spec.isolating; t++, e = e.lastChild);
      s = nt(s, e, t);
    }
    return e.someProp("transformPasted", t => {
      s = t(s, e, c);
    }), s;
  }
  const Ze = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
  function Xe(e, t, n = 0) {
    for (let r = t.length - 1; r >= n; r--) e = t[r].create(null, a.FK.from(e));
    return e;
  }
  function Je(e, t, n, r, i) {
    if (i < e.length && i < t.length && e[i] == t[i]) {
      let o = Je(e, t, n, r.lastChild, i + 1);
      if (o) return r.copy(r.content.replaceChild(r.childCount - 1, o));
      if (r.contentMatchAt(r.childCount).matchType(i == e.length - 1 ? n.type : e[i + 1])) return r.copy(r.content.append(a.FK.from(Xe(n, e, i + 1))));
    }
  }
  function et(e, t) {
    if (0 == t) return e;
    let n = e.content.replaceChild(e.childCount - 1, et(e.lastChild, t - 1)),
      r = e.contentMatchAt(e.childCount).fillBefore(a.FK.empty, !0);
    return e.copy(n.append(r));
  }
  function tt(e, t, n, r, i, o) {
    let s = t < 0 ? e.firstChild : e.lastChild,
      l = s.content;
    return e.childCount > 1 && (o = 0), i < r - 1 && (l = tt(l, t, n, r, i + 1, o)), i >= n && (l = t < 0 ? s.contentMatchAt(0).fillBefore(l, o <= i).append(l) : l.append(s.contentMatchAt(s.childCount).fillBefore(a.FK.empty, !0))), e.replaceChild(t < 0 ? 0 : e.childCount - 1, s.copy(l));
  }
  function nt(e, t, n) {
    return t < e.openStart && (e = new a.Ji(tt(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd)), n < e.openEnd && (e = new a.Ji(tt(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)), e;
  }
  const rt = {
    thead: ["table"],
    tbody: ["table"],
    tfoot: ["table"],
    caption: ["table"],
    colgroup: ["table"],
    col: ["table", "colgroup"],
    tr: ["table", "tbody"],
    td: ["table", "tbody", "tr"],
    th: ["table", "tbody", "tr"]
  };
  let at = null;
  function it() {
    return at || (at = document.implementation.createHTMLDocument("title"));
  }
  let ot = null;
  const st = {},
    lt = {},
    ct = {
      touchstart: !0,
      touchmove: !0
    };
  class ut {
    constructor() {
      this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
        time: 0,
        x: 0,
        y: 0,
        type: "",
        button: 0
      }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null;
    }
  }
  function dt(e, t) {
    e.input.lastSelectionOrigin = t, e.input.lastSelectionTime = Date.now();
  }
  function pt(e) {
    e.someProp("handleDOMEvents", t => {
      for (let n in t) e.input.eventHandlers[n] || e.dom.addEventListener(n, e.input.eventHandlers[n] = t => ft(e, t));
    });
  }
  function ft(e, t) {
    return e.someProp("handleDOMEvents", n => {
      let r = n[t.type];
      return !!r && (r(e, t) || t.defaultPrevented);
    });
  }
  function ht(e, t) {
    if (!t.bubbles) return !0;
    if (t.defaultPrevented) return !1;
    for (let n = t.target; n != e.dom; n = n.parentNode) if (!n || 11 == n.nodeType || n.pmViewDesc && n.pmViewDesc.stopEvent(t)) return !1;
    return !0;
  }
  function _t(e) {
    return {
      left: e.clientX,
      top: e.clientY
    };
  }
  function mt(e, t, n, r, a) {
    if (-1 == r) return !1;
    let i = e.state.doc.resolve(r);
    for (let r = i.depth + 1; r > 0; r--) if (e.someProp(t, t => r > i.depth ? t(e, n, i.nodeAfter, i.before(r), a, !0) : t(e, n, i.node(r), i.before(r), a, !1))) return !0;
    return !1;
  }
  function At(e, t, n) {
    if (e.focused || e.focus(), e.state.selection.eq(t)) return;
    let r = e.state.tr.setSelection(t);
    "pointer" == n && r.setMeta("pointer", !0), e.dispatch(r);
  }
  function gt(e, t, n, r) {
    return mt(e, "handleDoubleClickOn", t, n, r) || e.someProp("handleDoubleClick", n => n(e, t, r));
  }
  function yt(e, t, n, a) {
    return mt(e, "handleTripleClickOn", t, n, a) || e.someProp("handleTripleClick", n => n(e, t, a)) || function (e, t, n) {
      if (0 != n.button) return !1;
      let a = e.state.doc;
      if (-1 == t) return !!a.inlineContent && (At(e, r.U3.create(a, 0, a.content.size), "pointer"), !0);
      let i = a.resolve(t);
      for (let t = i.depth + 1; t > 0; t--) {
        let n = t > i.depth ? i.nodeAfter : i.node(t),
          o = i.before(t);
        if (n.inlineContent) At(e, r.U3.create(a, o + 1, o + 1 + n.content.size), "pointer");else {
          if (!r.nh.isSelectable(n)) continue;
          At(e, r.nh.create(a, o), "pointer");
        }
        return !0;
      }
    }(e, n, a);
  }
  function vt(e) {
    return St(e);
  }
  lt.keydown = (e, t) => {
    let n = t;
    if (e.input.shiftKey = 16 == n.keyCode || n.shiftKey, !wt(e, n) && (e.input.lastKeyCode = n.keyCode, e.input.lastKeyCodeTime = Date.now(), !P || !S || 13 != n.keyCode)) if (229 != n.keyCode && e.domObserver.forceFlush(), !x || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey) e.someProp("handleKeyDown", t => t(e, n)) || function (e, t) {
      let n = t.keyCode,
        r = function (e) {
          let t = "";
          return e.ctrlKey && (t += "c"), e.metaKey && (t += "m"), e.altKey && (t += "a"), e.shiftKey && (t += "s"), t;
        }(t);
      if (8 == n || D && 72 == n && "c" == r) return Qe(e, -1) || We(e, -1);
      if (46 == n && !t.shiftKey || D && 68 == n && "c" == r) return Qe(e, 1) || We(e, 1);
      if (13 == n || 27 == n) return !0;
      if (37 == n || D && 66 == n && "c" == r) {
        let t = 37 == n ? "ltr" == ze(e, e.state.selection.from) ? -1 : 1 : -1;
        return Fe(e, t, r) || We(e, t);
      }
      if (39 == n || D && 70 == n && "c" == r) {
        let t = 39 == n ? "ltr" == ze(e, e.state.selection.from) ? 1 : -1 : 1;
        return Fe(e, t, r) || We(e, t);
      }
      return 38 == n || D && 80 == n && "c" == r ? Ye(e, -1, r) || We(e, -1) : 40 == n || D && 78 == n && "c" == r ? function (e) {
        if (!k || e.state.selection.$head.parentOffset > 0) return !1;
        let {
          focusNode: t,
          focusOffset: n
        } = e.domSelectionRange();
        if (t && 1 == t.nodeType && 0 == n && t.firstChild && "false" == t.firstChild.contentEditable) {
          let n = t.firstChild;
          Ge(e, n, "true"), setTimeout(() => Ge(e, n, "false"), 20);
        }
        return !1;
      }(e) || Ye(e, 1, r) || We(e, 1) : r == (D ? "m" : "c") && (66 == n || 73 == n || 89 == n || 90 == n);
    }(e, n) ? n.preventDefault() : dt(e, "key");else {
      let t = Date.now();
      e.input.lastIOSEnter = t, e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        e.input.lastIOSEnter == t && (e.someProp("handleKeyDown", t => t(e, m(13, "Enter"))), e.input.lastIOSEnter = 0);
      }, 200);
    }
  }, lt.keyup = (e, t) => {
    16 == t.keyCode && (e.input.shiftKey = !1);
  }, lt.keypress = (e, t) => {
    let n = t;
    if (wt(e, n) || !n.charCode || n.ctrlKey && !n.altKey || D && n.metaKey) return;
    if (e.someProp("handleKeyPress", t => t(e, n))) return void n.preventDefault();
    let a = e.state.selection;
    if (!(a instanceof r.U3 && a.$from.sameParent(a.$to))) {
      let t = String.fromCharCode(n.charCode),
        r = () => e.state.tr.insertText(t).scrollIntoView();
      /[\r\n]/.test(t) || e.someProp("handleTextInput", n => n(e, a.$from.pos, a.$to.pos, t, r)) || e.dispatch(r()), n.preventDefault();
    }
  };
  const Et = D ? "metaKey" : "ctrlKey";
  st.mousedown = (e, t) => {
    let n = t;
    e.input.shiftKey = n.shiftKey;
    let r = vt(e),
      a = Date.now(),
      i = "singleClick";
    a - e.input.lastClick.time < 500 && function (e, t) {
      let n = t.x - e.clientX,
        r = t.y - e.clientY;
      return n * n + r * r < 100;
    }(n, e.input.lastClick) && !n[Et] && e.input.lastClick.button == n.button && ("singleClick" == e.input.lastClick.type ? i = "doubleClick" : "doubleClick" == e.input.lastClick.type && (i = "tripleClick")), e.input.lastClick = {
      time: a,
      x: n.clientX,
      y: n.clientY,
      type: i,
      button: n.button
    };
    let o = e.posAtCoords(_t(n));
    o && ("singleClick" == i ? (e.input.mouseDown && e.input.mouseDown.done(), e.input.mouseDown = new bt(e, o, n, !!r)) : ("doubleClick" == i ? gt : yt)(e, o.pos, o.inside, n) ? n.preventDefault() : dt(e, "pointer"));
  };
  class bt {
    constructor(e, t, n, a) {
      let i, o;
      if (this.view = e, this.pos = t, this.event = n, this.flushed = a, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!n[Et], this.allowDefault = n.shiftKey, t.inside > -1) i = e.state.doc.nodeAt(t.inside), o = t.inside;else {
        let n = e.state.doc.resolve(t.pos);
        i = n.parent, o = n.depth ? n.before() : 0;
      }
      const s = a ? null : n.target,
        l = s ? e.docView.nearestDesc(s, !0) : null;
      this.target = l && 1 == l.nodeDOM.nodeType ? l.nodeDOM : null;
      let {
        selection: c
      } = e.state;
      (0 == n.button && i.type.spec.draggable && !1 !== i.type.spec.selectable || c instanceof r.nh && c.from <= o && c.to > o) && (this.mightDrag = {
        node: i,
        pos: o,
        addAttr: !(!this.target || this.target.draggable),
        setUneditable: !(!this.target || !O || this.target.hasAttribute("contentEditable"))
      }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
        this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
      }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), dt(e, "pointer");
    }
    done() {
      this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Se(this.view)), this.view.input.mouseDown = null;
    }
    up(e) {
      if (this.done(), !this.view.dom.contains(e.target)) return;
      let t = this.pos;
      this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(_t(e))), this.updateAllowDefault(e), this.allowDefault || !t ? dt(this.view, "pointer") : function (e, t, n, a, i) {
        return mt(e, "handleClickOn", t, n, a) || e.someProp("handleClick", n => n(e, t, a)) || (i ? function (e, t) {
          if (-1 == t) return !1;
          let n,
            a,
            i = e.state.selection;
          i instanceof r.nh && (n = i.node);
          let o = e.state.doc.resolve(t);
          for (let e = o.depth + 1; e > 0; e--) {
            let t = e > o.depth ? o.nodeAfter : o.node(e);
            if (r.nh.isSelectable(t)) {
              a = n && i.$from.depth > 0 && e >= i.$from.depth && o.before(i.$from.depth + 1) == i.$from.pos ? o.before(i.$from.depth) : o.before(e);
              break;
            }
          }
          return null != a && (At(e, r.nh.create(e.state.doc, a), "pointer"), !0);
        }(e, n) : function (e, t) {
          if (-1 == t) return !1;
          let n = e.state.doc.resolve(t),
            a = n.nodeAfter;
          return !!(a && a.isAtom && r.nh.isSelectable(a)) && (At(e, new r.nh(n), "pointer"), !0);
        }(e, n));
      }(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : 0 == e.button && (this.flushed || k && this.mightDrag && !this.mightDrag.node.isAtom || S && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (At(this.view, r.LN.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : dt(this.view, "pointer");
    }
    move(e) {
      this.updateAllowDefault(e), dt(this.view, "pointer"), 0 == e.buttons && this.done();
    }
    updateAllowDefault(e) {
      !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
    }
  }
  function wt(e, t) {
    return !!e.composing || !!(k && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500) && (e.input.compositionEndedAt = -2e8, !0);
  }
  st.touchstart = e => {
    e.input.lastTouch = Date.now(), vt(e), dt(e, "pointer");
  }, st.touchmove = e => {
    e.input.lastTouch = Date.now(), dt(e, "pointer");
  }, st.contextmenu = e => vt(e);
  const Ct = P ? 5e3 : -1;
  function Ot(e, t) {
    clearTimeout(e.input.composingTimeout), t > -1 && (e.input.composingTimeout = setTimeout(() => St(e), t));
  }
  function Mt(e) {
    for (e.composing && (e.input.composing = !1, e.input.compositionEndedAt = function () {
      let e = document.createEvent("Event");
      return e.initEvent("event", !0, !0), e.timeStamp;
    }()); e.input.compositionNodes.length > 0;) e.input.compositionNodes.pop().markParentsDirty();
  }
  function St(e, t = !1) {
    if (!(P && e.domObserver.flushingSoon >= 0)) {
      if (e.domObserver.forceFlush(), Mt(e), t || e.docView && e.docView.dirty) {
        let n = Oe(e),
          r = e.state.selection;
        return n && !n.eq(r) ? e.dispatch(e.state.tr.setSelection(n)) : !e.markCursor && !t || r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? e.updateState(e.state) : e.dispatch(e.state.tr.deleteSelection()), !0;
      }
      return !1;
    }
  }
  lt.compositionstart = lt.compositionupdate = e => {
    if (!e.composing) {
      e.domObserver.flush();
      let {
          state: t
        } = e,
        n = t.selection.$to;
      if (t.selection instanceof r.U3 && (t.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some(e => !1 === e.type.spec.inclusive))) e.markCursor = e.state.storedMarks || n.marks(), St(e, !0), e.markCursor = null;else if (St(e, !t.selection.empty), O && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
        let t = e.domSelectionRange();
        for (let n = t.focusNode, r = t.focusOffset; n && 1 == n.nodeType && 0 != r;) {
          let t = r < 0 ? n.lastChild : n.childNodes[r - 1];
          if (!t) break;
          if (3 == t.nodeType) {
            let n = e.domSelection();
            n && n.collapse(t, t.nodeValue.length);
            break;
          }
          n = t, r = -1;
        }
      }
      e.input.composing = !0;
    }
    Ot(e, Ct);
  }, lt.compositionend = (e, t) => {
    e.composing && (e.input.composing = !1, e.input.compositionEndedAt = t.timeStamp, e.input.compositionPendingChanges = e.domObserver.pendingRecords().length ? e.input.compositionID : 0, e.input.compositionNode = null, e.input.compositionPendingChanges && Promise.resolve().then(() => e.domObserver.flush()), e.input.compositionID++, Ot(e, 20));
  };
  const Tt = w && C < 15 || x && R < 604;
  function kt(e, t, n, r, i) {
    let o = qe(e, t, n, r, e.state.selection.$from);
    if (e.someProp("handlePaste", t => t(e, i, o || a.Ji.empty))) return !0;
    if (!o) return !1;
    let s = function (e) {
        return 0 == e.openStart && 0 == e.openEnd && 1 == e.content.childCount ? e.content.firstChild : null;
      }(o),
      l = s ? e.state.tr.replaceSelectionWith(s, r) : e.state.tr.replaceSelection(o);
    return e.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
  }
  function xt(e) {
    let t = e.getData("text/plain") || e.getData("Text");
    if (t) return t;
    let n = e.getData("text/uri-list");
    return n ? n.replace(/\r?\n/g, " ") : "";
  }
  st.copy = lt.cut = (e, t) => {
    let n = t,
      r = e.state.selection,
      a = "cut" == n.type;
    if (r.empty) return;
    let i = Tt ? null : n.clipboardData,
      o = r.content(),
      {
        dom: s,
        text: l
      } = $e(e, o);
    i ? (n.preventDefault(), i.clearData(), i.setData("text/html", s.innerHTML), i.setData("text/plain", l)) : function (e, t) {
      if (!e.dom.parentNode) return;
      let n = e.dom.parentNode.appendChild(document.createElement("div"));
      n.appendChild(t), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
      let r = getSelection(),
        a = document.createRange();
      a.selectNodeContents(t), e.dom.blur(), r.removeAllRanges(), r.addRange(a), setTimeout(() => {
        n.parentNode && n.parentNode.removeChild(n), e.focus();
      }, 50);
    }(e, s), a && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
  }, lt.paste = (e, t) => {
    let n = t;
    if (e.composing && !P) return;
    let r = Tt ? null : n.clipboardData,
      a = e.input.shiftKey && 45 != e.input.lastKeyCode;
    r && kt(e, xt(r), r.getData("text/html"), a, n) ? n.preventDefault() : function (e, t) {
      if (!e.dom.parentNode) return;
      let n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code,
        r = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
      n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
      let a = e.input.shiftKey && 45 != e.input.lastKeyCode;
      setTimeout(() => {
        e.focus(), r.parentNode && r.parentNode.removeChild(r), n ? kt(e, r.value, null, a, t) : kt(e, r.textContent, r.innerHTML, a, t);
      }, 50);
    }(e, n);
  };
  class Dt {
    constructor(e, t, n) {
      this.slice = e, this.move = t, this.node = n;
    }
  }
  const It = D ? "altKey" : "ctrlKey";
  function Pt(e, t) {
    let n = e.someProp("dragCopies", e => !e(t));
    return null != n ? n : !t[It];
  }
  st.dragstart = (e, t) => {
    let n = t,
      a = e.input.mouseDown;
    if (a && a.done(), !n.dataTransfer) return;
    let i,
      o = e.state.selection,
      s = o.empty ? null : e.posAtCoords(_t(n));
    if (s && s.pos >= o.from && s.pos <= (o instanceof r.nh ? o.to - 1 : o.to)) ;else if (a && a.mightDrag) i = r.nh.create(e.state.doc, a.mightDrag.pos);else if (n.target && 1 == n.target.nodeType) {
      let t = e.docView.nearestDesc(n.target, !0);
      t && t.node.type.spec.draggable && t != e.docView && (i = r.nh.create(e.state.doc, t.posBefore));
    }
    let l = (i || e.state.selection).content(),
      {
        dom: c,
        text: u,
        slice: d
      } = $e(e, l);
    (!n.dataTransfer.files.length || !S || T > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(Tt ? "Text" : "text/html", c.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Tt || n.dataTransfer.setData("text/plain", u), e.dragging = new Dt(d, Pt(e, n), i);
  }, st.dragend = e => {
    let t = e.dragging;
    window.setTimeout(() => {
      e.dragging == t && (e.dragging = null);
    }, 50);
  }, lt.dragover = lt.dragenter = (e, t) => t.preventDefault(), lt.drop = (e, t) => {
    let n = t,
      o = e.dragging;
    if (e.dragging = null, !n.dataTransfer) return;
    let s = e.posAtCoords(_t(n));
    if (!s) return;
    let l = e.state.doc.resolve(s.pos),
      c = o && o.slice;
    c ? e.someProp("transformPasted", t => {
      c = t(c, e, !1);
    }) : c = qe(e, xt(n.dataTransfer), Tt ? null : n.dataTransfer.getData("text/html"), !1, l);
    let u = !(!o || !Pt(e, n));
    if (e.someProp("handleDrop", t => t(e, n, c || a.Ji.empty, u))) return void n.preventDefault();
    if (!c) return;
    n.preventDefault();
    let d = c ? (0, i.Um)(e.state.doc, l.pos, c) : l.pos;
    null == d && (d = l.pos);
    let p = e.state.tr;
    if (u) {
      let {
        node: e
      } = o;
      e ? e.replace(p) : p.deleteSelection();
    }
    let f = p.mapping.map(d),
      h = 0 == c.openStart && 0 == c.openEnd && 1 == c.content.childCount,
      _ = p.doc;
    if (h ? p.replaceRangeWith(f, f, c.content.firstChild) : p.replaceRange(f, f, c), p.doc.eq(_)) return;
    let m = p.doc.resolve(f);
    if (h && r.nh.isSelectable(c.content.firstChild) && m.nodeAfter && m.nodeAfter.sameMarkup(c.content.firstChild)) p.setSelection(new r.nh(m));else {
      let t = p.mapping.map(d);
      p.mapping.maps[p.mapping.maps.length - 1].forEach((e, n, r, a) => t = a), p.setSelection(Le(e, m, p.doc.resolve(t)));
    }
    e.focus(), e.dispatch(p.setMeta("uiEvent", "drop"));
  }, st.focus = e => {
    e.input.lastFocus = Date.now(), e.focused || (e.domObserver.stop(), e.dom.classList.add("ProseMirror-focused"), e.domObserver.start(), e.focused = !0, setTimeout(() => {
      e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.domSelectionRange()) && Se(e);
    }, 20));
  }, st.blur = (e, t) => {
    let n = t;
    e.focused && (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), n.relatedTarget && e.dom.contains(n.relatedTarget) && e.domObserver.currentSelection.clear(), e.focused = !1);
  }, st.beforeinput = (e, t) => {
    if (S && P && "deleteContentBackward" == t.inputType) {
      e.domObserver.flushSoon();
      let {
        domChangeCount: t
      } = e.input;
      setTimeout(() => {
        if (e.input.domChangeCount != t) return;
        if (e.dom.blur(), e.focus(), e.someProp("handleKeyDown", t => t(e, m(8, "Backspace")))) return;
        let {
          $cursor: n
        } = e.state.selection;
        n && n.pos > 0 && e.dispatch(e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView());
      }, 50);
    }
  };
  for (let e in lt) st[e] = lt[e];
  function Lt(e, t) {
    if (e == t) return !0;
    for (let n in e) if (e[n] !== t[n]) return !1;
    for (let n in t) if (!(n in e)) return !1;
    return !0;
  }
  class Rt {
    constructor(e, t) {
      this.toDOM = e, this.spec = t || jt, this.side = this.spec.side || 0;
    }
    map(e, t, n, r) {
      let {
        pos: a,
        deleted: i
      } = e.mapResult(t.from + r, this.side < 0 ? -1 : 1);
      return i ? null : new Ut(a - n, a - n, this);
    }
    valid() {
      return !0;
    }
    eq(e) {
      return this == e || e instanceof Rt && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Lt(this.spec, e.spec));
    }
    destroy(e) {
      this.spec.destroy && this.spec.destroy(e);
    }
  }
  class Bt {
    constructor(e, t) {
      this.attrs = e, this.spec = t || jt;
    }
    map(e, t, n, r) {
      let a = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n,
        i = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
      return a >= i ? null : new Ut(a, i, this);
    }
    valid(e, t) {
      return t.from < t.to;
    }
    eq(e) {
      return this == e || e instanceof Bt && Lt(this.attrs, e.attrs) && Lt(this.spec, e.spec);
    }
    static is(e) {
      return e.type instanceof Bt;
    }
    destroy() {}
  }
  class Nt {
    constructor(e, t) {
      this.attrs = e, this.spec = t || jt;
    }
    map(e, t, n, r) {
      let a = e.mapResult(t.from + r, 1);
      if (a.deleted) return null;
      let i = e.mapResult(t.to + r, -1);
      return i.deleted || i.pos <= a.pos ? null : new Ut(a.pos - n, i.pos - n, this);
    }
    valid(e, t) {
      let n,
        {
          index: r,
          offset: a
        } = e.content.findIndex(t.from);
      return a == t.from && !(n = e.child(r)).isText && a + n.nodeSize == t.to;
    }
    eq(e) {
      return this == e || e instanceof Nt && Lt(this.attrs, e.attrs) && Lt(this.spec, e.spec);
    }
    destroy() {}
  }
  class Ut {
    constructor(e, t, n) {
      this.from = e, this.to = t, this.type = n;
    }
    copy(e, t) {
      return new Ut(e, t, this.type);
    }
    eq(e, t = 0) {
      return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
    }
    map(e, t, n) {
      return this.type.map(e, this, t, n);
    }
    static widget(e, t, n) {
      return new Ut(e, e, new Rt(t, n));
    }
    static inline(e, t, n, r) {
      return new Ut(e, t, new Bt(n, r));
    }
    static node(e, t, n, r) {
      return new Ut(e, t, new Nt(n, r));
    }
    get spec() {
      return this.type.spec;
    }
    get inline() {
      return this.type instanceof Bt;
    }
    get widget() {
      return this.type instanceof Rt;
    }
  }
  const Ft = [],
    jt = {};
  class Ht {
    constructor(e, t) {
      this.local = e.length ? e : Ft, this.children = t.length ? t : Ft;
    }
    static create(e, t) {
      return t.length ? Qt(t, e, 0, jt) : Wt;
    }
    find(e, t, n) {
      let r = [];
      return this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, r, 0, n), r;
    }
    findInner(e, t, n, r, a) {
      for (let i = 0; i < this.local.length; i++) {
        let o = this.local[i];
        o.from <= t && o.to >= e && (!a || a(o.spec)) && n.push(o.copy(o.from + r, o.to + r));
      }
      for (let i = 0; i < this.children.length; i += 3) if (this.children[i] < t && this.children[i + 1] > e) {
        let o = this.children[i] + 1;
        this.children[i + 2].findInner(e - o, t - o, n, r + o, a);
      }
    }
    map(e, t, n) {
      return this == Wt || 0 == e.maps.length ? this : this.mapInner(e, t, 0, 0, n || jt);
    }
    mapInner(e, t, n, r, a) {
      let i;
      for (let o = 0; o < this.local.length; o++) {
        let s = this.local[o].map(e, n, r);
        s && s.type.valid(t, s) ? (i || (i = [])).push(s) : a.onRemove && a.onRemove(this.local[o].spec);
      }
      return this.children.length ? function (e, t, n, r, a, i, o) {
        let s = e.slice();
        for (let e = 0, t = i; e < n.maps.length; e++) {
          let r = 0;
          n.maps[e].forEach((e, n, a, i) => {
            let o = i - a - (n - e);
            for (let a = 0; a < s.length; a += 3) {
              let i = s[a + 1];
              if (i < 0 || e > i + t - r) continue;
              let l = s[a] + t - r;
              n >= l ? s[a + 1] = e <= l ? -2 : -1 : e >= t && o && (s[a] += o, s[a + 1] += o);
            }
            r += o;
          }), t = n.maps[e].map(t, -1);
        }
        let l = !1;
        for (let t = 0; t < s.length; t += 3) if (s[t + 1] < 0) {
          if (-2 == s[t + 1]) {
            l = !0, s[t + 1] = -1;
            continue;
          }
          let c = n.map(e[t] + i),
            u = c - a;
          if (u < 0 || u >= r.content.size) {
            l = !0;
            continue;
          }
          let d = n.map(e[t + 1] + i, -1) - a,
            {
              index: p,
              offset: f
            } = r.content.findIndex(u),
            h = r.maybeChild(p);
          if (h && f == u && f + h.nodeSize == d) {
            let r = s[t + 2].mapInner(n, h, c + 1, e[t] + i + 1, o);
            r != Wt ? (s[t] = u, s[t + 1] = d, s[t + 2] = r) : (s[t + 1] = -2, l = !0);
          } else l = !0;
        }
        if (l) {
          let l = function (e, t, n, r, a, i, o) {
              function s(e, t) {
                for (let i = 0; i < e.local.length; i++) {
                  let s = e.local[i].map(r, a, t);
                  s ? n.push(s) : o.onRemove && o.onRemove(e.local[i].spec);
                }
                for (let n = 0; n < e.children.length; n += 3) s(e.children[n + 2], e.children[n] + t + 1);
              }
              for (let n = 0; n < e.length; n += 3) -1 == e[n + 1] && s(e[n + 2], t[n] + i + 1);
              return n;
            }(s, e, t, n, a, i, o),
            c = Qt(l, r, 0, o);
          t = c.local;
          for (let e = 0; e < s.length; e += 3) s[e + 1] < 0 && (s.splice(e, 3), e -= 3);
          for (let e = 0, t = 0; e < c.children.length; e += 3) {
            let n = c.children[e];
            for (; t < s.length && s[t] < n;) t += 3;
            s.splice(t, 0, c.children[e], c.children[e + 1], c.children[e + 2]);
          }
        }
        return new Ht(t.sort(Gt), s);
      }(this.children, i || [], e, t, n, r, a) : i ? new Ht(i.sort(Gt), Ft) : Wt;
    }
    add(e, t) {
      return t.length ? this == Wt ? Ht.create(e, t) : this.addInner(e, t, 0) : this;
    }
    addInner(e, t, n) {
      let r,
        a = 0;
      e.forEach((e, i) => {
        let o,
          s = i + n;
        if (o = zt(t, e, s)) {
          for (r || (r = this.children.slice()); a < r.length && r[a] < i;) a += 3;
          r[a] == i ? r[a + 2] = r[a + 2].addInner(e, o, s + 1) : r.splice(a, 0, i, i + e.nodeSize, Qt(o, e, s + 1, jt)), a += 3;
        }
      });
      let i = Vt(a ? Yt(t) : t, -n);
      for (let t = 0; t < i.length; t++) i[t].type.valid(e, i[t]) || i.splice(t--, 1);
      return new Ht(i.length ? this.local.concat(i).sort(Gt) : this.local, r || this.children);
    }
    remove(e) {
      return 0 == e.length || this == Wt ? this : this.removeInner(e, 0);
    }
    removeInner(e, t) {
      let n = this.children,
        r = this.local;
      for (let r = 0; r < n.length; r += 3) {
        let a,
          i = n[r] + t,
          o = n[r + 1] + t;
        for (let t, n = 0; n < e.length; n++) (t = e[n]) && t.from > i && t.to < o && (e[n] = null, (a || (a = [])).push(t));
        if (!a) continue;
        n == this.children && (n = this.children.slice());
        let s = n[r + 2].removeInner(a, i + 1);
        s != Wt ? n[r + 2] = s : (n.splice(r, 3), r -= 3);
      }
      if (r.length) for (let n, a = 0; a < e.length; a++) if (n = e[a]) for (let e = 0; e < r.length; e++) r[e].eq(n, t) && (r == this.local && (r = this.local.slice()), r.splice(e--, 1));
      return n == this.children && r == this.local ? this : r.length || n.length ? new Ht(r, n) : Wt;
    }
    forChild(e, t) {
      if (this == Wt) return this;
      if (t.isLeaf) return Ht.empty;
      let n, r;
      for (let t = 0; t < this.children.length; t += 3) if (this.children[t] >= e) {
        this.children[t] == e && (n = this.children[t + 2]);
        break;
      }
      let a = e + 1,
        i = a + t.content.size;
      for (let e = 0; e < this.local.length; e++) {
        let t = this.local[e];
        if (t.from < i && t.to > a && t.type instanceof Bt) {
          let e = Math.max(a, t.from) - a,
            n = Math.min(i, t.to) - a;
          e < n && (r || (r = [])).push(t.copy(e, n));
        }
      }
      if (r) {
        let e = new Ht(r.sort(Gt), Ft);
        return n ? new Kt([e, n]) : e;
      }
      return n || Wt;
    }
    eq(e) {
      if (this == e) return !0;
      if (!(e instanceof Ht) || this.local.length != e.local.length || this.children.length != e.children.length) return !1;
      for (let t = 0; t < this.local.length; t++) if (!this.local[t].eq(e.local[t])) return !1;
      for (let t = 0; t < this.children.length; t += 3) if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2])) return !1;
      return !0;
    }
    locals(e) {
      return $t(this.localsInner(e));
    }
    localsInner(e) {
      if (this == Wt) return Ft;
      if (e.inlineContent || !this.local.some(Bt.is)) return this.local;
      let t = [];
      for (let e = 0; e < this.local.length; e++) this.local[e].type instanceof Bt || t.push(this.local[e]);
      return t;
    }
    forEachSet(e) {
      e(this);
    }
  }
  Ht.empty = new Ht([], []), Ht.removeOverlap = $t;
  const Wt = Ht.empty;
  class Kt {
    constructor(e) {
      this.members = e;
    }
    map(e, t) {
      const n = this.members.map(n => n.map(e, t, jt));
      return Kt.from(n);
    }
    forChild(e, t) {
      if (t.isLeaf) return Ht.empty;
      let n = [];
      for (let r = 0; r < this.members.length; r++) {
        let a = this.members[r].forChild(e, t);
        a != Wt && (a instanceof Kt ? n = n.concat(a.members) : n.push(a));
      }
      return Kt.from(n);
    }
    eq(e) {
      if (!(e instanceof Kt) || e.members.length != this.members.length) return !1;
      for (let t = 0; t < this.members.length; t++) if (!this.members[t].eq(e.members[t])) return !1;
      return !0;
    }
    locals(e) {
      let t,
        n = !0;
      for (let r = 0; r < this.members.length; r++) {
        let a = this.members[r].localsInner(e);
        if (a.length) if (t) {
          n && (t = t.slice(), n = !1);
          for (let e = 0; e < a.length; e++) t.push(a[e]);
        } else t = a;
      }
      return t ? $t(n ? t : t.sort(Gt)) : Ft;
    }
    static from(e) {
      switch (e.length) {
        case 0:
          return Wt;
        case 1:
          return e[0];
        default:
          return new Kt(e.every(e => e instanceof Ht) ? e : e.reduce((e, t) => e.concat(t instanceof Ht ? t : t.members), []));
      }
    }
    forEachSet(e) {
      for (let t = 0; t < this.members.length; t++) this.members[t].forEachSet(e);
    }
  }
  function Vt(e, t) {
    if (!t || !e.length) return e;
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let a = e[r];
      n.push(new Ut(a.from + t, a.to + t, a.type));
    }
    return n;
  }
  function zt(e, t, n) {
    if (t.isLeaf) return null;
    let r = n + t.nodeSize,
      a = null;
    for (let t, i = 0; i < e.length; i++) (t = e[i]) && t.from > n && t.to < r && ((a || (a = [])).push(t), e[i] = null);
    return a;
  }
  function Yt(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) null != e[n] && t.push(e[n]);
    return t;
  }
  function Qt(e, t, n, r) {
    let a = [],
      i = !1;
    t.forEach((t, o) => {
      let s = zt(e, t, o + n);
      if (s) {
        i = !0;
        let e = Qt(s, t, n + o + 1, r);
        e != Wt && a.push(o, o + t.nodeSize, e);
      }
    });
    let o = Vt(i ? Yt(e) : e, -n).sort(Gt);
    for (let e = 0; e < o.length; e++) o[e].type.valid(t, o[e]) || (r.onRemove && r.onRemove(o[e].spec), o.splice(e--, 1));
    return o.length || a.length ? new Ht(o, a) : Wt;
  }
  function Gt(e, t) {
    return e.from - t.from || e.to - t.to;
  }
  function $t(e) {
    let t = e;
    for (let n = 0; n < t.length - 1; n++) {
      let r = t[n];
      if (r.from != r.to) for (let a = n + 1; a < t.length; a++) {
        let i = t[a];
        if (i.from != r.from) {
          i.from < r.to && (t == e && (t = e.slice()), t[n] = r.copy(r.from, i.from), qt(t, a, r.copy(i.from, r.to)));
          break;
        }
        i.to != r.to && (t == e && (t = e.slice()), t[a] = i.copy(i.from, r.to), qt(t, a + 1, i.copy(r.to, i.to)));
      }
    }
    return t;
  }
  function qt(e, t, n) {
    for (; t < e.length && Gt(n, e[t]) > 0;) t++;
    e.splice(t, 0, n);
  }
  function Zt(e) {
    let t = [];
    return e.someProp("decorations", n => {
      let r = n(e.state);
      r && r != Wt && t.push(r);
    }), e.cursorWrapper && t.push(Ht.create(e.state.doc, [e.cursorWrapper.deco])), Kt.from(t);
  }
  const Xt = {
      childList: !0,
      characterData: !0,
      characterDataOldValue: !0,
      attributes: !0,
      attributeOldValue: !0,
      subtree: !0
    },
    Jt = w && C <= 11;
  class en {
    constructor() {
      this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
    }
    set(e) {
      this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
    }
    clear() {
      this.anchorNode = this.focusNode = null;
    }
    eq(e) {
      return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
    }
  }
  class tn {
    constructor(e, t) {
      this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new en(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver(e => {
        for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
        w && C <= 11 && e.some(e => "childList" == e.type && e.removedNodes.length || "characterData" == e.type && e.oldValue.length > e.target.nodeValue.length) ? this.flushSoon() : this.flush();
      }), Jt && (this.onCharData = e => {
        this.queue.push({
          target: e.target,
          type: "characterData",
          oldValue: e.prevValue
        }), this.flushSoon();
      }), this.onSelectionChange = this.onSelectionChange.bind(this);
    }
    flushSoon() {
      this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
        this.flushingSoon = -1, this.flush();
      }, 20));
    }
    forceFlush() {
      this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
    }
    start() {
      this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Xt)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
    }
    stop() {
      if (this.observer) {
        let e = this.observer.takeRecords();
        if (e.length) {
          for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
          window.setTimeout(() => this.flush(), 20);
        }
        this.observer.disconnect();
      }
      this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
    }
    connectSelection() {
      this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
    }
    disconnectSelection() {
      this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
    }
    suppressSelectionUpdates() {
      this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
    }
    onSelectionChange() {
      if (Re(this.view)) {
        if (this.suppressingSelectionUpdates) return Se(this.view);
        if (w && C <= 11 && !this.view.state.selection.empty) {
          let e = this.view.domSelectionRange();
          if (e.focusNode && u(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon();
        }
        this.flush();
      }
    }
    setCurSelection() {
      this.currentSelection.set(this.view.domSelectionRange());
    }
    ignoreSelectionChange(e) {
      if (!e.focusNode) return !0;
      let t,
        n = new Set();
      for (let t = e.focusNode; t; t = s(t)) n.add(t);
      for (let r = e.anchorNode; r; r = s(r)) if (n.has(r)) {
        t = r;
        break;
      }
      let r = t && this.view.docView.nearestDesc(t);
      return r && r.ignoreMutation({
        type: "selection",
        target: 3 == t.nodeType ? t.parentNode : t
      }) ? (this.setCurSelection(), !0) : void 0;
    }
    pendingRecords() {
      if (this.observer) for (let e of this.observer.takeRecords()) this.queue.push(e);
      return this.queue;
    }
    flush() {
      let {
        view: e
      } = this;
      if (!e.docView || this.flushingSoon > -1) return;
      let t = this.pendingRecords();
      t.length && (this.queue = []);
      let n = e.domSelectionRange(),
        a = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && Re(e) && !this.ignoreSelectionChange(n),
        i = -1,
        o = -1,
        s = !1,
        l = [];
      if (e.editable) for (let e = 0; e < t.length; e++) {
        let n = this.registerMutation(t[e], l);
        n && (i = i < 0 ? n.from : Math.min(n.from, i), o = o < 0 ? n.to : Math.max(n.to, o), n.typeOver && (s = !0));
      }
      if (O && l.length) {
        let t = l.filter(e => "BR" == e.nodeName);
        if (2 == t.length) {
          let [e, n] = t;
          e.parentNode && e.parentNode.parentNode == n.parentNode ? n.remove() : e.remove();
        } else {
          let {
            focusNode: n
          } = this.currentSelection;
          for (let r of t) {
            let t = r.parentNode;
            !t || "LI" != t.nodeName || n && on(e, n) == t || r.remove();
          }
        }
      }
      let c = null;
      i < 0 && a && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && _(n) && (c = Oe(e)) && c.eq(r.LN.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Se(e), this.currentSelection.set(n), e.scrollToSelection()) : (i > -1 || a) && (i > -1 && (e.docView.markDirty(i, o), function (e) {
        if (!nn.has(e) && (nn.set(e, null), -1 !== ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(e.dom).whiteSpace))) {
          if (e.requiresGeckoHackNode = O, rn) return;
          console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), rn = !0;
        }
      }(e)), this.handleDOMChange(i, o, s, l), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || Se(e), this.currentSelection.set(n));
    }
    registerMutation(e, t) {
      if (t.indexOf(e.target) > -1) return null;
      let n = this.view.docView.nearestDesc(e.target);
      if ("attributes" == e.type && (n == this.view.docView || "contenteditable" == e.attributeName || "style" == e.attributeName && !e.oldValue && !e.target.getAttribute("style"))) return null;
      if (!n || n.ignoreMutation(e)) return null;
      if ("childList" == e.type) {
        for (let n = 0; n < e.addedNodes.length; n++) {
          let r = e.addedNodes[n];
          t.push(r), 3 == r.nodeType && (this.lastChangedTextNode = r);
        }
        if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target)) return {
          from: n.posBefore,
          to: n.posAfter
        };
        let r = e.previousSibling,
          a = e.nextSibling;
        if (w && C <= 11 && e.addedNodes.length) for (let t = 0; t < e.addedNodes.length; t++) {
          let {
            previousSibling: n,
            nextSibling: i
          } = e.addedNodes[t];
          (!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) && (r = n), (!i || Array.prototype.indexOf.call(e.addedNodes, i) < 0) && (a = i);
        }
        let i = r && r.parentNode == e.target ? o(r) + 1 : 0,
          s = n.localPosFromDOM(e.target, i, -1),
          l = a && a.parentNode == e.target ? o(a) : e.target.childNodes.length;
        return {
          from: s,
          to: n.localPosFromDOM(e.target, l, 1)
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
  }
  let nn = new WeakMap(),
    rn = !1;
  function an(e, t) {
    let n = t.startContainer,
      r = t.startOffset,
      a = t.endContainer,
      i = t.endOffset,
      o = e.domAtPos(e.state.selection.anchor);
    return u(o.node, o.offset, a, i) && ([n, r, a, i] = [a, i, n, r]), {
      anchorNode: n,
      anchorOffset: r,
      focusNode: a,
      focusOffset: i
    };
  }
  function on(e, t) {
    for (let n = t.parentNode; n && n != e.dom; n = n.parentNode) {
      let t = e.docView.nearestDesc(n, !0);
      if (t && t.node.isBlock) return n;
    }
    return null;
  }
  function sn(e) {
    let t = e.pmViewDesc;
    if (t) return t.parseRule();
    if ("BR" == e.nodeName && e.parentNode) {
      if (k && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
        let e = document.createElement("div");
        return e.appendChild(document.createElement("li")), {
          skip: e
        };
      }
      if (e.parentNode.lastChild == e || k && /^(tr|table)$/i.test(e.parentNode.nodeName)) return {
        ignore: !0
      };
    } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder")) return {
      ignore: !0
    };
    return null;
  }
  const ln = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
  function cn(e, t, n) {
    return Math.max(n.anchor, n.head) > t.content.size ? null : Le(e, t.resolve(n.anchor), t.resolve(n.head));
  }
  function un(e, t, n) {
    let r = e.depth,
      a = t ? e.end() : e.pos;
    for (; r > 0 && (t || e.indexAfter(r) == e.node(r).childCount);) r--, a++, t = !1;
    if (n) {
      let t = e.node(r).maybeChild(e.indexAfter(r));
      for (; t && !t.isLeaf;) t = t.firstChild, a++;
    }
    return a;
  }
  function dn(e) {
    if (2 != e.length) return !1;
    let t = e.charCodeAt(0),
      n = e.charCodeAt(1);
    return t >= 56320 && t <= 57343 && n >= 55296 && n <= 56319;
  }
  class pn {
    constructor(e, t) {
      this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new ut(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(An), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : "function" == typeof e ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = _n(this), hn(this), this.nodeViews = mn(this), this.docView = ce(this.state.doc, fn(this), Zt(this), this.dom, this), this.domObserver = new tn(this, (e, t, n, i) => function (e, t, n, i, o) {
        let s = e.input.compositionPendingChanges || (e.composing ? e.input.compositionID : 0);
        if (e.input.compositionPendingChanges = 0, t < 0) {
          let t = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null,
            n = Oe(e, t);
          if (n && !e.state.selection.eq(n)) {
            if (S && P && 13 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime && e.someProp("handleKeyDown", t => t(e, m(13, "Enter")))) return;
            let r = e.state.tr.setSelection(n);
            "pointer" == t ? r.setMeta("pointer", !0) : "key" == t && r.scrollIntoView(), s && r.setMeta("composition", s), e.dispatch(r);
          }
          return;
        }
        let l = e.state.doc.resolve(t),
          c = l.sharedDepth(n);
        t = l.before(c + 1), n = e.state.doc.resolve(n).after(c + 1);
        let u,
          d,
          p = e.state.selection,
          f = function (e, t, n) {
            let r,
              {
                node: i,
                fromOffset: o,
                toOffset: s,
                from: l,
                to: c
              } = e.docView.parseRange(t, n),
              u = e.domSelectionRange(),
              d = u.anchorNode;
            if (d && e.dom.contains(1 == d.nodeType ? d : d.parentNode) && (r = [{
              node: d,
              offset: u.anchorOffset
            }], _(u) || r.push({
              node: u.focusNode,
              offset: u.focusOffset
            })), S && 8 === e.input.lastKeyCode) for (let e = s; e > o; e--) {
              let t = i.childNodes[e - 1],
                n = t.pmViewDesc;
              if ("BR" == t.nodeName && !n) {
                s = e;
                break;
              }
              if (!n || n.size) break;
            }
            let p = e.state.doc,
              f = e.someProp("domParser") || a.S4.fromSchema(e.state.schema),
              h = p.resolve(l),
              m = null,
              A = f.parse(i, {
                topNode: h.parent,
                topMatch: h.parent.contentMatchAt(h.index()),
                topOpen: !0,
                from: o,
                to: s,
                preserveWhitespace: "pre" != h.parent.type.whitespace || "full",
                findPositions: r,
                ruleFromNode: sn,
                context: h
              });
            if (r && null != r[0].pos) {
              let e = r[0].pos,
                t = r[1] && r[1].pos;
              null == t && (t = e), m = {
                anchor: e + l,
                head: t + l
              };
            }
            return {
              doc: A,
              sel: m,
              from: l,
              to: c
            };
          }(e, t, n),
          h = e.state.doc,
          A = h.slice(f.from, f.to);
        8 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime ? (u = e.state.selection.to, d = "end") : (u = e.state.selection.from, d = "start"), e.input.lastKeyCode = null;
        let g = function (e, t, n, r, a) {
          let i = e.findDiffStart(t, n);
          if (null == i) return null;
          let {
            a: o,
            b: s
          } = e.findDiffEnd(t, n + e.size, n + t.size);
          if ("end" == a && (r -= o + Math.max(0, i - Math.min(o, s)) - i), o < i && e.size < t.size) {
            let e = r <= i && r >= o ? i - r : 0;
            i -= e, i && i < t.size && dn(t.textBetween(i - 1, i + 1)) && (i += e ? 1 : -1), s = i + (s - o), o = i;
          } else if (s < i) {
            let t = r <= i && r >= s ? i - r : 0;
            i -= t, i && i < e.size && dn(e.textBetween(i - 1, i + 1)) && (i += t ? 1 : -1), o = i + (o - s), s = i;
          }
          return {
            start: i,
            endA: o,
            endB: s
          };
        }(A.content, f.doc.content, f.from, u, d);
        if (g && e.input.domChangeCount++, (x && e.input.lastIOSEnter > Date.now() - 225 || P) && o.some(e => 1 == e.nodeType && !ln.test(e.nodeName)) && (!g || g.endA >= g.endB) && e.someProp("handleKeyDown", t => t(e, m(13, "Enter")))) return void (e.input.lastIOSEnter = 0);
        if (!g) {
          if (!(i && p instanceof r.U3 && !p.empty && p.$head.sameParent(p.$anchor)) || e.composing || f.sel && f.sel.anchor != f.sel.head) {
            if (f.sel) {
              let t = cn(e, e.state.doc, f.sel);
              if (t && !t.eq(e.state.selection)) {
                let n = e.state.tr.setSelection(t);
                s && n.setMeta("composition", s), e.dispatch(n);
              }
            }
            return;
          }
          g = {
            start: p.from,
            endA: p.to,
            endB: p.to
          };
        }
        e.state.selection.from < e.state.selection.to && g.start == g.endB && e.state.selection instanceof r.U3 && (g.start > e.state.selection.from && g.start <= e.state.selection.from + 2 && e.state.selection.from >= f.from ? g.start = e.state.selection.from : g.endA < e.state.selection.to && g.endA >= e.state.selection.to - 2 && e.state.selection.to <= f.to && (g.endB += e.state.selection.to - g.endA, g.endA = e.state.selection.to)), w && C <= 11 && g.endB == g.start + 1 && g.endA == g.start && g.start > f.from && "  " == f.doc.textBetween(g.start - f.from - 1, g.start - f.from + 1) && (g.start--, g.endA--, g.endB--);
        let y,
          v = f.doc.resolveNoCache(g.start - f.from),
          E = f.doc.resolveNoCache(g.endB - f.from),
          b = h.resolve(g.start),
          O = v.sameParent(E) && v.parent.inlineContent && b.end() >= g.endA;
        if ((x && e.input.lastIOSEnter > Date.now() - 225 && (!O || o.some(e => "DIV" == e.nodeName || "P" == e.nodeName)) || !O && v.pos < f.doc.content.size && (!v.sameParent(E) || !v.parent.inlineContent) && !/\S/.test(f.doc.textBetween(v.pos, E.pos, "", "")) && (y = r.LN.findFrom(f.doc.resolve(v.pos + 1), 1, !0)) && y.head > v.pos) && e.someProp("handleKeyDown", t => t(e, m(13, "Enter")))) return void (e.input.lastIOSEnter = 0);
        if (e.state.selection.anchor > g.start && function (e, t, n, r, a) {
          if (n - t <= a.pos - r.pos || un(r, !0, !1) < a.pos) return !1;
          let i = e.resolve(t);
          if (!r.parent.isTextblock) {
            let e = i.nodeAfter;
            return null != e && n == t + e.nodeSize;
          }
          if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock) return !1;
          let o = e.resolve(un(i, !0, !0));
          return !(!o.parent.isTextblock || o.pos > n || un(o, !0, !1) < n) && r.parent.content.cut(r.parentOffset).eq(o.parent.content);
        }(h, g.start, g.endA, v, E) && e.someProp("handleKeyDown", t => t(e, m(8, "Backspace")))) return void (P && S && e.domObserver.suppressSelectionUpdates());
        S && g.endB == g.start && (e.input.lastChromeDelete = Date.now()), P && !O && v.start() != E.start() && 0 == E.parentOffset && v.depth == E.depth && f.sel && f.sel.anchor == f.sel.head && f.sel.head == g.endA && (g.endB -= 2, E = f.doc.resolveNoCache(g.endB - f.from), setTimeout(() => {
          e.someProp("handleKeyDown", function (t) {
            return t(e, m(13, "Enter"));
          });
        }, 20));
        let M,
          T = g.start,
          k = g.endA,
          D = t => {
            let n = t || e.state.tr.replace(T, k, f.doc.slice(g.start - f.from, g.endB - f.from));
            if (f.sel) {
              let t = cn(e, n.doc, f.sel);
              t && !(S && e.composing && t.empty && (g.start != g.endB || e.input.lastChromeDelete < Date.now() - 100) && (t.head == T || t.head == n.mapping.map(k) - 1) || w && t.empty && t.head == T) && n.setSelection(t);
            }
            return s && n.setMeta("composition", s), n.scrollIntoView();
          };
        if (O) {
          if (v.pos == E.pos) {
            w && C <= 11 && 0 == v.parentOffset && (e.domObserver.suppressSelectionUpdates(), setTimeout(() => Se(e), 20));
            let t = D(e.state.tr.delete(T, k)),
              n = h.resolve(g.start).marksAcross(h.resolve(g.endA));
            n && t.ensureMarks(n), e.dispatch(t);
          } else if (g.endA == g.endB && (M = function (e, t) {
            let n,
              r,
              i,
              o = e.firstChild.marks,
              s = t.firstChild.marks,
              l = o,
              c = s;
            for (let e = 0; e < s.length; e++) l = s[e].removeFromSet(l);
            for (let e = 0; e < o.length; e++) c = o[e].removeFromSet(c);
            if (1 == l.length && 0 == c.length) r = l[0], n = "add", i = e => e.mark(r.addToSet(e.marks));else {
              if (0 != l.length || 1 != c.length) return null;
              r = c[0], n = "remove", i = e => e.mark(r.removeFromSet(e.marks));
            }
            let u = [];
            for (let e = 0; e < t.childCount; e++) u.push(i(t.child(e)));
            if (a.FK.from(u).eq(e)) return {
              mark: r,
              type: n
            };
          }(v.parent.content.cut(v.parentOffset, E.parentOffset), b.parent.content.cut(b.parentOffset, g.endA - b.start())))) {
            let t = D(e.state.tr);
            "add" == M.type ? t.addMark(T, k, M.mark) : t.removeMark(T, k, M.mark), e.dispatch(t);
          } else if (v.parent.child(v.index()).isText && v.index() == E.index() - (E.textOffset ? 0 : 1)) {
            let t = v.parent.textBetween(v.parentOffset, E.parentOffset),
              n = () => D(e.state.tr.insertText(t, T, k));
            e.someProp("handleTextInput", r => r(e, T, k, t, n)) || e.dispatch(n());
          }
        } else e.dispatch(D());
      }(this, e, t, n, i)), this.domObserver.start(), function (e) {
        for (let t in st) {
          let n = st[t];
          e.dom.addEventListener(t, e.input.eventHandlers[t] = t => {
            !ht(e, t) || ft(e, t) || !e.editable && t.type in lt || n(e, t);
          }, ct[t] ? {
            passive: !0
          } : void 0);
        }
        k && e.dom.addEventListener("input", () => null), pt(e);
      }(this), this.updatePluginViews();
    }
    get composing() {
      return this.input.composing;
    }
    get props() {
      if (this._props.state != this.state) {
        let e = this._props;
        this._props = {};
        for (let t in e) this._props[t] = e[t];
        this._props.state = this.state;
      }
      return this._props;
    }
    update(e) {
      e.handleDOMEvents != this._props.handleDOMEvents && pt(this);
      let t = this._props;
      this._props = e, e.plugins && (e.plugins.forEach(An), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
    }
    setProps(e) {
      let t = {};
      for (let e in this._props) t[e] = this._props[e];
      t.state = this.state;
      for (let n in e) t[n] = e[n];
      this.update(t);
    }
    updateState(e) {
      this.updateStateInner(e, this._props);
    }
    updateStateInner(e, t) {
      var n;
      let r = this.state,
        a = !1,
        i = !1;
      e.storedMarks && this.composing && (Mt(this), i = !0), this.state = e;
      let s = r.plugins != e.plugins || this._props.plugins != t.plugins;
      if (s || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
        let e = mn(this);
        (function (e, t) {
          let n = 0,
            r = 0;
          for (let r in e) {
            if (e[r] != t[r]) return !0;
            n++;
          }
          for (let e in t) r++;
          return n != r;
        })(e, this.nodeViews) && (this.nodeViews = e, a = !0);
      }
      (s || t.handleDOMEvents != this._props.handleDOMEvents) && pt(this), this.editable = _n(this), hn(this);
      let l = Zt(this),
        c = fn(this),
        d = r.plugins == e.plugins || r.doc.eq(e.doc) ? e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve" : "reset",
        p = a || !this.docView.matchesNode(e.doc, c, l);
      !p && e.selection.eq(r.selection) || (i = !0);
      let _ = "preserve" == d && i && null == this.dom.style.overflowAnchor && function (e) {
        let t,
          n,
          r = e.dom.getBoundingClientRect(),
          a = Math.max(0, r.top);
        for (let i = (r.left + r.right) / 2, o = a + 1; o < Math.min(innerHeight, r.bottom); o += 5) {
          let r = e.root.elementFromPoint(i, o);
          if (!r || r == e.dom || !e.dom.contains(r)) continue;
          let s = r.getBoundingClientRect();
          if (s.top >= a - 20) {
            t = r, n = s.top;
            break;
          }
        }
        return {
          refDOM: t,
          refTop: n,
          stack: j(e.dom)
        };
      }(this);
      if (i) {
        this.domObserver.stop();
        let t = p && (w || S) && !this.composing && !r.selection.empty && !e.selection.empty && function (e, t) {
          let n = Math.min(e.$anchor.sharedDepth(e.head), t.$anchor.sharedDepth(t.head));
          return e.$anchor.start(n) != t.$anchor.start(n);
        }(r.selection, e.selection);
        if (p) {
          let n = S ? this.trackWrites = this.domSelectionRange().focusNode : null;
          this.composing && (this.input.compositionNode = function (e) {
            let t = e.domSelectionRange();
            if (!t.focusNode) return null;
            let n = function (e, t) {
                for (;;) {
                  if (3 == e.nodeType && t) return e;
                  if (1 == e.nodeType && t > 0) {
                    if ("false" == e.contentEditable) return null;
                    t = f(e = e.childNodes[t - 1]);
                  } else {
                    if (!e.parentNode || h(e)) return null;
                    t = o(e), e = e.parentNode;
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
                    if (!e.parentNode || h(e)) return null;
                    t = o(e) + 1, e = e.parentNode;
                  }
                }
              }(t.focusNode, t.focusOffset);
            if (n && r && n != r) {
              let t = r.pmViewDesc,
                a = e.domObserver.lastChangedTextNode;
              if (n == a || r == a) return a;
              if (!t || !t.isText(r.nodeValue)) return r;
              if (e.input.compositionNode == r) {
                let e = n.pmViewDesc;
                if (e && e.isText(n.nodeValue)) return r;
              }
            }
            return n || r;
          }(this)), !a && this.docView.update(e.doc, c, l, this) || (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = ce(e.doc, c, l, this.dom, this)), n && !this.trackWrites && (t = !0);
        }
        t || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && function (e) {
          let t = e.docView.domFromPos(e.state.selection.anchor, 0),
            n = e.domSelectionRange();
          return u(t.node, t.offset, n.anchorNode, n.anchorOffset);
        }(this)) ? Se(this, t) : (Ie(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
      }
      this.updatePluginViews(r), (null === (n = this.dragging) || void 0 === n ? void 0 : n.node) && !r.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, r), "reset" == d ? this.dom.scrollTop = 0 : "to selection" == d ? this.scrollToSelection() : _ && function ({
        refDOM: e,
        refTop: t,
        stack: n
      }) {
        let r = e ? e.getBoundingClientRect().top : 0;
        H(n, 0 == r ? 0 : r - t);
      }(_);
    }
    scrollToSelection() {
      let e = this.domSelectionRange().focusNode;
      if (e && this.dom.contains(1 == e.nodeType ? e : e.parentNode)) if (this.someProp("handleScrollToSelection", e => e(this))) ;else if (this.state.selection instanceof r.nh) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        1 == t.nodeType && F(this, t.getBoundingClientRect(), e);
      } else F(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
    destroyPluginViews() {
      let e;
      for (; e = this.pluginViews.pop();) e.destroy && e.destroy();
    }
    updatePluginViews(e) {
      if (e && e.plugins == this.state.plugins && this.directPlugins == this.prevDirectPlugins) for (let t = 0; t < this.pluginViews.length; t++) {
        let n = this.pluginViews[t];
        n.update && n.update(this, e);
      } else {
        this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
        for (let e = 0; e < this.directPlugins.length; e++) {
          let t = this.directPlugins[e];
          t.spec.view && this.pluginViews.push(t.spec.view(this));
        }
        for (let e = 0; e < this.state.plugins.length; e++) {
          let t = this.state.plugins[e];
          t.spec.view && this.pluginViews.push(t.spec.view(this));
        }
      }
    }
    updateDraggedNode(e, t) {
      let n = e.node,
        a = -1;
      if (this.state.doc.nodeAt(n.from) == n.node) a = n.from;else {
        let e = n.from + (this.state.doc.content.size - t.doc.content.size);
        (e > 0 && this.state.doc.nodeAt(e)) == n.node && (a = e);
      }
      this.dragging = new Dt(e.slice, e.move, a < 0 ? void 0 : r.nh.create(this.state.doc, a));
    }
    someProp(e, t) {
      let n,
        r = this._props && this._props[e];
      if (null != r && (n = t ? t(r) : r)) return n;
      for (let r = 0; r < this.directPlugins.length; r++) {
        let a = this.directPlugins[r].props[e];
        if (null != a && (n = t ? t(a) : a)) return n;
      }
      let a = this.state.plugins;
      if (a) for (let r = 0; r < a.length; r++) {
        let i = a[r].props[e];
        if (null != i && (n = t ? t(i) : i)) return n;
      }
    }
    hasFocus() {
      if (w) {
        let e = this.root.activeElement;
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
    focus() {
      this.domObserver.stop(), this.editable && function (e) {
        if (e.setActive) return e.setActive();
        if (W) return e.focus(W);
        let t = j(e);
        e.focus(null == W ? {
          get preventScroll() {
            return W = {
              preventScroll: !0
            }, !0;
          }
        } : void 0), W || (W = !1, H(t, 0));
      }(this.dom), Se(this), this.domObserver.start();
    }
    get root() {
      let e = this._root;
      if (null == e) for (let e = this.dom.parentNode; e; e = e.parentNode) if (9 == e.nodeType || 11 == e.nodeType && e.host) return e.getSelection || (Object.getPrototypeOf(e).getSelection = () => e.ownerDocument.getSelection()), this._root = e;
      return e || document;
    }
    updateRoot() {
      this._root = null;
    }
    posAtCoords(e) {
      return Y(this, e);
    }
    coordsAtPos(e, t = 1) {
      return q(this, e, t);
    }
    domAtPos(e, t = 0) {
      return this.docView.domFromPos(e, t);
    }
    nodeDOM(e) {
      let t = this.docView.descAt(e);
      return t ? t.nodeDOM : null;
    }
    posAtDOM(e, t, n = -1) {
      let r = this.docView.posFromDOM(e, t, n);
      if (null == r) throw new RangeError("DOM position not inside the editor");
      return r;
    }
    endOfTextblock(e, t) {
      return function (e, t, n) {
        return te == t && ne == n ? re : (te = t, ne = n, re = "up" == n || "down" == n ? function (e, t, n) {
          let r = t.selection,
            a = "up" == n ? r.$from : r.$to;
          return J(e, t, () => {
            let {
              node: t
            } = e.docView.domFromPos(a.pos, "up" == n ? -1 : 1);
            for (;;) {
              let n = e.docView.nearestDesc(t, !0);
              if (!n) break;
              if (n.node.isBlock) {
                t = n.contentDOM || n.dom;
                break;
              }
              t = n.dom.parentNode;
            }
            let r = q(e, a.pos, 1);
            for (let e = t.firstChild; e; e = e.nextSibling) {
              let t;
              if (1 == e.nodeType) t = e.getClientRects();else {
                if (3 != e.nodeType) continue;
                t = c(e, 0, e.nodeValue.length).getClientRects();
              }
              for (let e = 0; e < t.length; e++) {
                let a = t[e];
                if (a.bottom > a.top + 1 && ("up" == n ? r.top - a.top > 2 * (a.bottom - r.top) : a.bottom - r.bottom > 2 * (r.bottom - a.top))) return !1;
              }
            }
            return !0;
          });
        }(e, t, n) : function (e, t, n) {
          let {
            $head: r
          } = t.selection;
          if (!r.parent.isTextblock) return !1;
          let a = r.parentOffset,
            i = !a,
            o = a == r.parent.content.size,
            s = e.domSelection();
          return s ? ee.test(r.parent.textContent) && s.modify ? J(e, t, () => {
            let {
                focusNode: t,
                focusOffset: a,
                anchorNode: i,
                anchorOffset: o
              } = e.domSelectionRange(),
              l = s.caretBidiLevel;
            s.modify("move", n, "character");
            let c = r.depth ? e.docView.domAfterPos(r.before()) : e.dom,
              {
                focusNode: u,
                focusOffset: d
              } = e.domSelectionRange(),
              p = u && !c.contains(1 == u.nodeType ? u : u.parentNode) || t == u && a == d;
            try {
              s.collapse(i, o), t && (t != i || a != o) && s.extend && s.extend(t, a);
            } catch (e) {}
            return null != l && (s.caretBidiLevel = l), p;
          }) : "left" == n || "backward" == n ? i : o : r.pos == r.start() || r.pos == r.end();
        }(e, t, n));
      }(this, t || this.state, e);
    }
    pasteHTML(e, t) {
      return kt(this, "", e, !1, t || new ClipboardEvent("paste"));
    }
    pasteText(e, t) {
      return kt(this, e, null, !0, t || new ClipboardEvent("paste"));
    }
    serializeForClipboard(e) {
      return $e(this, e);
    }
    destroy() {
      this.docView && (function (e) {
        e.domObserver.stop();
        for (let t in e.input.eventHandlers) e.dom.removeEventListener(t, e.input.eventHandlers[t]);
        clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout);
      }(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Zt(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, l = null);
    }
    get isDestroyed() {
      return null == this.docView;
    }
    dispatchEvent(e) {
      return function (e, t) {
        ft(e, t) || !st[t.type] || !e.editable && t.type in lt || st[t.type](e, t);
      }(this, e);
    }
    domSelectionRange() {
      let e = this.domSelection();
      return e ? k && 11 === this.root.nodeType && function (e) {
        let t = e.activeElement;
        for (; t && t.shadowRoot;) t = t.shadowRoot.activeElement;
        return t;
      }(this.dom.ownerDocument) == this.dom && function (e, t) {
        if (t.getComposedRanges) {
          let n = t.getComposedRanges(e.root)[0];
          if (n) return an(e, n);
        }
        let n;
        function r(e) {
          e.preventDefault(), e.stopImmediatePropagation(), n = e.getTargetRanges()[0];
        }
        return e.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), e.dom.removeEventListener("beforeinput", r, !0), n ? an(e, n) : null;
      }(this, e) || e : {
        focusNode: null,
        focusOffset: 0,
        anchorNode: null,
        anchorOffset: 0
      };
    }
    domSelection() {
      return this.root.getSelection();
    }
  }
  function fn(e) {
    let t = Object.create(null);
    return t.class = "ProseMirror", t.contenteditable = String(e.editable), e.someProp("attributes", n => {
      if ("function" == typeof n && (n = n(e.state)), n) for (let e in n) "class" == e ? t.class += " " + n[e] : "style" == e ? t.style = (t.style ? t.style + ";" : "") + n[e] : t[e] || "contenteditable" == e || "nodeName" == e || (t[e] = String(n[e]));
    }), t.translate || (t.translate = "no"), [Ut.node(0, e.state.doc.content.size, t)];
  }
  function hn(e) {
    if (e.markCursor) {
      let t = document.createElement("img");
      t.className = "ProseMirror-separator", t.setAttribute("mark-placeholder", "true"), t.setAttribute("alt", ""), e.cursorWrapper = {
        dom: t,
        deco: Ut.widget(e.state.selection.from, t, {
          raw: !0,
          marks: e.markCursor
        })
      };
    } else e.cursorWrapper = null;
  }
  function _n(e) {
    return !e.someProp("editable", t => !1 === t(e.state));
  }
  function mn(e) {
    let t = Object.create(null);
    function n(e) {
      for (let n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
    }
    return e.someProp("nodeViews", n), e.someProp("markViews", n), t;
  }
  function An(e) {
    if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component");
  }
  pn.prototype.dispatch = function (e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  };
});
