// Reconstructed Webpack factory 17190; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    default: () => O
  });
  var r,
    a,
    i,
    o,
    s = n(41594),
    l = n.n(s),
    c = n(47909),
    u = (n(58088), n(49050), n(75206), n(78307), {
      exports: {}
    });
  r = u, c.c, r.exports = function () {
    var e = navigator.userAgent,
      t = navigator.platform,
      n = /gecko\/\d/i.test(e),
      r = /MSIE \d/.test(e),
      a = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
      i = /Edge\/(\d+)/.exec(e),
      o = r || a || i,
      s = o && (r ? document.documentMode || 6 : +(i || a)[1]),
      l = !i && /WebKit\//.test(e),
      c = l && /Qt\/\d+\.\d+/.test(e),
      u = !i && /Chrome\/(\d+)/.exec(e),
      d = u && +u[1],
      p = /Opera\//.test(e),
      f = /Apple Computer/.test(navigator.vendor),
      h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
      _ = /PhantomJS/.test(e),
      m = f && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2),
      A = /Android/.test(e),
      g = m || A || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
      y = m || /Mac/.test(t),
      v = /\bCrOS\b/.test(e),
      E = /win/i.test(t),
      b = p && e.match(/Version\/(\d*\.\d*)/);
    b && (b = Number(b[1])), b && b >= 15 && (p = !1, l = !0);
    var w = y && (c || p && (null == b || b < 12.11)),
      C = n || o && s >= 9;
    function O(e) {
      return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
    }
    var M,
      S = function (e, t) {
        var n = e.className,
          r = O(t).exec(n);
        if (r) {
          var a = n.slice(r.index + r[0].length);
          e.className = n.slice(0, r.index) + (a ? r[1] + a : "");
        }
      };
    function T(e) {
      for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
      return e;
    }
    function k(e, t) {
      return T(e).appendChild(t);
    }
    function x(e, t, n, r) {
      var a = document.createElement(e);
      if (n && (a.className = n), r && (a.style.cssText = r), "string" == typeof t) a.appendChild(document.createTextNode(t));else if (t) for (var i = 0; i < t.length; ++i) a.appendChild(t[i]);
      return a;
    }
    function D(e, t, n, r) {
      var a = x(e, t, n, r);
      return a.setAttribute("role", "presentation"), a;
    }
    function I(e, t) {
      if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
      do {
        if (11 == t.nodeType && (t = t.host), t == e) return !0;
      } while (t = t.parentNode);
    }
    function P(e) {
      var t;
      try {
        t = e.activeElement;
      } catch (n) {
        t = e.body || null;
      }
      for (; t && t.shadowRoot && t.shadowRoot.activeElement;) t = t.shadowRoot.activeElement;
      return t;
    }
    function L(e, t) {
      var n = e.className;
      O(t).test(n) || (e.className += (n ? " " : "") + t);
    }
    function R(e, t) {
      for (var n = e.split(" "), r = 0; r < n.length; r++) n[r] && !O(n[r]).test(t) && (t += " " + n[r]);
      return t;
    }
    M = document.createRange ? function (e, t, n, r) {
      var a = document.createRange();
      return a.setEnd(r || e, n), a.setStart(e, t), a;
    } : function (e, t, n) {
      var r = document.body.createTextRange();
      try {
        r.moveToElementText(e.parentNode);
      } catch (e) {
        return r;
      }
      return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r;
    };
    var B = function (e) {
      e.select();
    };
    function N(e) {
      return e.display.wrapper.ownerDocument;
    }
    function U(e) {
      return N(e).defaultView;
    }
    function F(e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return function () {
        return e.apply(null, t);
      };
    }
    function j(e, t, n) {
      for (var r in t || (t = {}), e) !e.hasOwnProperty(r) || !1 === n && t.hasOwnProperty(r) || (t[r] = e[r]);
      return t;
    }
    function H(e, t, n, r, a) {
      null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
      for (var i = r || 0, o = a || 0;;) {
        var s = e.indexOf("\t", i);
        if (s < 0 || s >= t) return o + (t - i);
        o += s - i, o += n - o % n, i = s + 1;
      }
    }
    m ? B = function (e) {
      e.selectionStart = 0, e.selectionEnd = e.value.length;
    } : o && (B = function (e) {
      try {
        e.select();
      } catch (e) {}
    });
    var W = function () {
      this.id = null, this.f = null, this.time = 0, this.handler = F(this.onTimeout, this);
    };
    function K(e, t) {
      for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
      return -1;
    }
    W.prototype.onTimeout = function (e) {
      e.id = 0, e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
    }, W.prototype.set = function (e, t) {
      this.f = t;
      var n = +new Date() + e;
      (!this.id || n < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = n);
    };
    var V = {
        toString: function () {
          return "CodeMirror.Pass";
        }
      },
      z = {
        scroll: !1
      },
      Y = {
        origin: "*mouse"
      },
      Q = {
        origin: "+move"
      };
    function G(e, t, n) {
      for (var r = 0, a = 0;;) {
        var i = e.indexOf("\t", r);
        -1 == i && (i = e.length);
        var o = i - r;
        if (i == e.length || a + o >= t) return r + Math.min(o, t - a);
        if (a += i - r, r = i + 1, (a += n - a % n) >= t) return r;
      }
    }
    var $ = [""];
    function q(e) {
      for (; $.length <= e;) $.push(Z($) + " ");
      return $[e];
    }
    function Z(e) {
      return e[e.length - 1];
    }
    function X(e, t) {
      for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
      return n;
    }
    function J() {}
    function ee(e, t) {
      var n;
      return Object.create ? n = Object.create(e) : (J.prototype = e, n = new J()), t && j(t, n), n;
    }
    var te = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    function ne(e) {
      return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || te.test(e));
    }
    function re(e, t) {
      return t ? !!(t.source.indexOf("\\w") > -1 && ne(e)) || t.test(e) : ne(e);
    }
    function ae(e) {
      for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
      return !0;
    }
    var ie = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    function oe(e) {
      return e.charCodeAt(0) >= 768 && ie.test(e);
    }
    function se(e, t, n) {
      for (; (n < 0 ? t > 0 : t < e.length) && oe(e.charAt(t));) t += n;
      return t;
    }
    function le(e, t, n) {
      for (var r = t > n ? -1 : 1;;) {
        if (t == n) return t;
        var a = (t + n) / 2,
          i = r < 0 ? Math.ceil(a) : Math.floor(a);
        if (i == t) return e(i) ? t : n;
        e(i) ? n = i : t = i + r;
      }
    }
    var ce = null;
    function ue(e, t, n) {
      var r;
      ce = null;
      for (var a = 0; a < e.length; ++a) {
        var i = e[a];
        if (i.from < t && i.to > t) return a;
        i.to == t && (i.from != i.to && "before" == n ? r = a : ce = a), i.from == t && (i.from != i.to && "before" != n ? r = a : ce = a);
      }
      return null != r ? r : ce;
    }
    var de = function () {
      function e(e) {
        return e <= 247 ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(e) : 1424 <= e && e <= 1524 ? "R" : 1536 <= e && e <= 1785 ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(e - 1536) : 1774 <= e && e <= 2220 ? "r" : 8192 <= e && e <= 8203 ? "w" : 8204 == e ? "b" : "L";
      }
      var t = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
        n = /[stwN]/,
        r = /[LRr]/,
        a = /[Lb1n]/,
        i = /[1n]/;
      function o(e, t, n) {
        this.level = e, this.from = t, this.to = n;
      }
      return function (s, l) {
        var c = "ltr" == l ? "L" : "R";
        if (0 == s.length || "ltr" == l && !t.test(s)) return !1;
        for (var u = s.length, d = [], p = 0; p < u; ++p) d.push(e(s.charCodeAt(p)));
        for (var f = 0, h = c; f < u; ++f) {
          var _ = d[f];
          "m" == _ ? d[f] = h : h = _;
        }
        for (var m = 0, A = c; m < u; ++m) {
          var g = d[m];
          "1" == g && "r" == A ? d[m] = "n" : r.test(g) && (A = g, "r" == g && (d[m] = "R"));
        }
        for (var y = 1, v = d[0]; y < u - 1; ++y) {
          var E = d[y];
          "+" == E && "1" == v && "1" == d[y + 1] ? d[y] = "1" : "," != E || v != d[y + 1] || "1" != v && "n" != v || (d[y] = v), v = E;
        }
        for (var b = 0; b < u; ++b) {
          var w = d[b];
          if ("," == w) d[b] = "N";else if ("%" == w) {
            var C = void 0;
            for (C = b + 1; C < u && "%" == d[C]; ++C);
            for (var O = b && "!" == d[b - 1] || C < u && "1" == d[C] ? "1" : "N", M = b; M < C; ++M) d[M] = O;
            b = C - 1;
          }
        }
        for (var S = 0, T = c; S < u; ++S) {
          var k = d[S];
          "L" == T && "1" == k ? d[S] = "L" : r.test(k) && (T = k);
        }
        for (var x = 0; x < u; ++x) if (n.test(d[x])) {
          var D = void 0;
          for (D = x + 1; D < u && n.test(d[D]); ++D);
          for (var I = "L" == (x ? d[x - 1] : c), P = I == ("L" == (D < u ? d[D] : c)) ? I ? "L" : "R" : c, L = x; L < D; ++L) d[L] = P;
          x = D - 1;
        }
        for (var R, B = [], N = 0; N < u;) if (a.test(d[N])) {
          var U = N;
          for (++N; N < u && a.test(d[N]); ++N);
          B.push(new o(0, U, N));
        } else {
          var F = N,
            j = B.length,
            H = "rtl" == l ? 1 : 0;
          for (++N; N < u && "L" != d[N]; ++N);
          for (var W = F; W < N;) if (i.test(d[W])) {
            F < W && (B.splice(j, 0, new o(1, F, W)), j += H);
            var K = W;
            for (++W; W < N && i.test(d[W]); ++W);
            B.splice(j, 0, new o(2, K, W)), j += H, F = W;
          } else ++W;
          F < N && B.splice(j, 0, new o(1, F, N));
        }
        return "ltr" == l && (1 == B[0].level && (R = s.match(/^\s+/)) && (B[0].from = R[0].length, B.unshift(new o(0, 0, R[0].length))), 1 == Z(B).level && (R = s.match(/\s+$/)) && (Z(B).to -= R[0].length, B.push(new o(0, u - R[0].length, u)))), "rtl" == l ? B.reverse() : B;
      };
    }();
    function pe(e, t) {
      var n = e.order;
      return null == n && (n = e.order = de(e.text, t)), n;
    }
    var fe = [],
      he = function (e, t, n) {
        if (e.addEventListener) e.addEventListener(t, n, !1);else if (e.attachEvent) e.attachEvent("on" + t, n);else {
          var r = e._handlers || (e._handlers = {});
          r[t] = (r[t] || fe).concat(n);
        }
      };
    function _e(e, t) {
      return e._handlers && e._handlers[t] || fe;
    }
    function me(e, t, n) {
      if (e.removeEventListener) e.removeEventListener(t, n, !1);else if (e.detachEvent) e.detachEvent("on" + t, n);else {
        var r = e._handlers,
          a = r && r[t];
        if (a) {
          var i = K(a, n);
          i > -1 && (r[t] = a.slice(0, i).concat(a.slice(i + 1)));
        }
      }
    }
    function Ae(e, t) {
      var n = _e(e, t);
      if (n.length) for (var r = Array.prototype.slice.call(arguments, 2), a = 0; a < n.length; ++a) n[a].apply(null, r);
    }
    function ge(e, t, n) {
      return "string" == typeof t && (t = {
        type: t,
        preventDefault: function () {
          this.defaultPrevented = !0;
        }
      }), Ae(e, n || t.type, e, t), Ce(t) || t.codemirrorIgnore;
    }
    function ye(e) {
      var t = e._handlers && e._handlers.cursorActivity;
      if (t) for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) -1 == K(n, t[r]) && n.push(t[r]);
    }
    function ve(e, t) {
      return _e(e, t).length > 0;
    }
    function Ee(e) {
      e.prototype.on = function (e, t) {
        he(this, e, t);
      }, e.prototype.off = function (e, t) {
        me(this, e, t);
      };
    }
    function be(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    }
    function we(e) {
      e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
    }
    function Ce(e) {
      return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
    }
    function Oe(e) {
      be(e), we(e);
    }
    function Me(e) {
      return e.target || e.srcElement;
    }
    function Se(e) {
      var t = e.which;
      return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), y && e.ctrlKey && 1 == t && (t = 3), t;
    }
    var Te,
      ke,
      xe = function () {
        if (o && s < 9) return !1;
        var e = x("div");
        return "draggable" in e || "dragDrop" in e;
      }();
    function De(e) {
      if (null == Te) {
        var t = x("span", "​");
        k(e, x("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Te = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(o && s < 8));
      }
      var n = Te ? x("span", "​") : x("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
      return n.setAttribute("cm-text", ""), n;
    }
    function Ie(e) {
      if (null != ke) return ke;
      var t = k(e, document.createTextNode("AخA")),
        n = M(t, 0, 1).getBoundingClientRect(),
        r = M(t, 1, 2).getBoundingClientRect();
      return T(e), !(!n || n.left == n.right) && (ke = r.right - n.right < 3);
    }
    var Pe,
      Le = 3 != "\n\nb".split(/\n/).length ? function (e) {
        for (var t = 0, n = [], r = e.length; t <= r;) {
          var a = e.indexOf("\n", t);
          -1 == a && (a = e.length);
          var i = e.slice(t, "\r" == e.charAt(a - 1) ? a - 1 : a),
            o = i.indexOf("\r");
          -1 != o ? (n.push(i.slice(0, o)), t += o + 1) : (n.push(i), t = a + 1);
        }
        return n;
      } : function (e) {
        return e.split(/\r\n?|\n/);
      },
      Re = window.getSelection ? function (e) {
        try {
          return e.selectionStart != e.selectionEnd;
        } catch (e) {
          return !1;
        }
      } : function (e) {
        var t;
        try {
          t = e.ownerDocument.selection.createRange();
        } catch (e) {}
        return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t);
      },
      Be = "oncopy" in (Pe = x("div")) || (Pe.setAttribute("oncopy", "return;"), "function" == typeof Pe.oncopy),
      Ne = null;
    var Ue = {},
      Fe = {};
    function je(e, t) {
      arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Ue[e] = t;
    }
    function He(e) {
      if ("string" == typeof e && Fe.hasOwnProperty(e)) e = Fe[e];else if (e && "string" == typeof e.name && Fe.hasOwnProperty(e.name)) {
        var t = Fe[e.name];
        "string" == typeof t && (t = {
          name: t
        }), (e = ee(t, e)).name = t.name;
      } else {
        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return He("application/xml");
        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return He("application/json");
      }
      return "string" == typeof e ? {
        name: e
      } : e || {
        name: "null"
      };
    }
    function We(e, t) {
      t = He(t);
      var n = Ue[t.name];
      if (!n) return We(e, "text/plain");
      var r = n(e, t);
      if (Ke.hasOwnProperty(t.name)) {
        var a = Ke[t.name];
        for (var i in a) a.hasOwnProperty(i) && (r.hasOwnProperty(i) && (r["_" + i] = r[i]), r[i] = a[i]);
      }
      if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps) for (var o in t.modeProps) r[o] = t.modeProps[o];
      return r;
    }
    var Ke = {};
    function Ve(e, t) {
      j(t, Ke.hasOwnProperty(e) ? Ke[e] : Ke[e] = {});
    }
    function ze(e, t) {
      if (!0 === t) return t;
      if (e.copyState) return e.copyState(t);
      var n = {};
      for (var r in t) {
        var a = t[r];
        a instanceof Array && (a = a.concat([])), n[r] = a;
      }
      return n;
    }
    function Ye(e, t) {
      for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) t = n.state, e = n.mode;
      return n || {
        mode: e,
        state: t
      };
    }
    function Qe(e, t, n) {
      return !e.startState || e.startState(t, n);
    }
    var Ge = function (e, t, n) {
      this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n;
    };
    function $e(e, t) {
      if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
      for (var n = e; !n.lines;) for (var r = 0;; ++r) {
        var a = n.children[r],
          i = a.chunkSize();
        if (t < i) {
          n = a;
          break;
        }
        t -= i;
      }
      return n.lines[t];
    }
    function qe(e, t, n) {
      var r = [],
        a = t.line;
      return e.iter(t.line, n.line + 1, function (e) {
        var i = e.text;
        a == n.line && (i = i.slice(0, n.ch)), a == t.line && (i = i.slice(t.ch)), r.push(i), ++a;
      }), r;
    }
    function Ze(e, t, n) {
      var r = [];
      return e.iter(t, n, function (e) {
        r.push(e.text);
      }), r;
    }
    function Xe(e, t) {
      var n = t - e.height;
      if (n) for (var r = e; r; r = r.parent) r.height += n;
    }
    function Je(e) {
      if (null == e.parent) return null;
      for (var t = e.parent, n = K(t.lines, e), r = t.parent; r; t = r, r = r.parent) for (var a = 0; r.children[a] != t; ++a) n += r.children[a].chunkSize();
      return n + t.first;
    }
    function et(e, t) {
      var n = e.first;
      e: do {
        for (var r = 0; r < e.children.length; ++r) {
          var a = e.children[r],
            i = a.height;
          if (t < i) {
            e = a;
            continue e;
          }
          t -= i, n += a.chunkSize();
        }
        return n;
      } while (!e.lines);
      for (var o = 0; o < e.lines.length; ++o) {
        var s = e.lines[o].height;
        if (t < s) break;
        t -= s;
      }
      return n + o;
    }
    function tt(e, t) {
      return t >= e.first && t < e.first + e.size;
    }
    function nt(e, t) {
      return String(e.lineNumberFormatter(t + e.firstLineNumber));
    }
    function rt(e, t, n) {
      if (void 0 === n && (n = null), !(this instanceof rt)) return new rt(e, t, n);
      this.line = e, this.ch = t, this.sticky = n;
    }
    function at(e, t) {
      return e.line - t.line || e.ch - t.ch;
    }
    function it(e, t) {
      return e.sticky == t.sticky && 0 == at(e, t);
    }
    function ot(e) {
      return rt(e.line, e.ch);
    }
    function st(e, t) {
      return at(e, t) < 0 ? t : e;
    }
    function lt(e, t) {
      return at(e, t) < 0 ? e : t;
    }
    function ct(e, t) {
      return Math.max(e.first, Math.min(t, e.first + e.size - 1));
    }
    function ut(e, t) {
      if (t.line < e.first) return rt(e.first, 0);
      var n = e.first + e.size - 1;
      return t.line > n ? rt(n, $e(e, n).text.length) : function (e, t) {
        var n = e.ch;
        return null == n || n > t ? rt(e.line, t) : n < 0 ? rt(e.line, 0) : e;
      }(t, $e(e, t.line).text.length);
    }
    function dt(e, t) {
      for (var n = [], r = 0; r < t.length; r++) n[r] = ut(e, t[r]);
      return n;
    }
    Ge.prototype.eol = function () {
      return this.pos >= this.string.length;
    }, Ge.prototype.sol = function () {
      return this.pos == this.lineStart;
    }, Ge.prototype.peek = function () {
      return this.string.charAt(this.pos) || void 0;
    }, Ge.prototype.next = function () {
      if (this.pos < this.string.length) return this.string.charAt(this.pos++);
    }, Ge.prototype.eat = function (e) {
      var t = this.string.charAt(this.pos);
      if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t;
    }, Ge.prototype.eatWhile = function (e) {
      for (var t = this.pos; this.eat(e););
      return this.pos > t;
    }, Ge.prototype.eatSpace = function () {
      for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
      return this.pos > e;
    }, Ge.prototype.skipToEnd = function () {
      this.pos = this.string.length;
    }, Ge.prototype.skipTo = function (e) {
      var t = this.string.indexOf(e, this.pos);
      if (t > -1) return this.pos = t, !0;
    }, Ge.prototype.backUp = function (e) {
      this.pos -= e;
    }, Ge.prototype.column = function () {
      return this.lastColumnPos < this.start && (this.lastColumnValue = H(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? H(this.string, this.lineStart, this.tabSize) : 0);
    }, Ge.prototype.indentation = function () {
      return H(this.string, null, this.tabSize) - (this.lineStart ? H(this.string, this.lineStart, this.tabSize) : 0);
    }, Ge.prototype.match = function (e, t, n) {
      if ("string" != typeof e) {
        var r = this.string.slice(this.pos).match(e);
        return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r);
      }
      var a = function (e) {
        return n ? e.toLowerCase() : e;
      };
      if (a(this.string.substr(this.pos, e.length)) == a(e)) return !1 !== t && (this.pos += e.length), !0;
    }, Ge.prototype.current = function () {
      return this.string.slice(this.start, this.pos);
    }, Ge.prototype.hideFirstChars = function (e, t) {
      this.lineStart += e;
      try {
        return t();
      } finally {
        this.lineStart -= e;
      }
    }, Ge.prototype.lookAhead = function (e) {
      var t = this.lineOracle;
      return t && t.lookAhead(e);
    }, Ge.prototype.baseToken = function () {
      var e = this.lineOracle;
      return e && e.baseToken(this.pos);
    };
    var pt = function (e, t) {
        this.state = e, this.lookAhead = t;
      },
      ft = function (e, t, n, r) {
        this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1;
      };
    function ht(e, t, n, r) {
      var a = [e.state.modeGen],
        i = {};
      wt(e, t.text, e.doc.mode, n, function (e, t) {
        return a.push(e, t);
      }, i, r);
      for (var o = n.state, s = function (r) {
          n.baseTokens = a;
          var s = e.state.overlays[r],
            l = 1,
            c = 0;
          n.state = !0, wt(e, t.text, s.mode, n, function (e, t) {
            for (var n = l; c < e;) {
              var r = a[l];
              r > e && a.splice(l, 1, e, a[l + 1], r), l += 2, c = Math.min(e, r);
            }
            if (t) if (s.opaque) a.splice(n, l - n, e, "overlay " + t), l = n + 2;else for (; n < l; n += 2) {
              var i = a[n + 1];
              a[n + 1] = (i ? i + " " : "") + "overlay " + t;
            }
          }, i), n.state = o, n.baseTokens = null, n.baseTokenPos = 1;
        }, l = 0; l < e.state.overlays.length; ++l) s(l);
      return {
        styles: a,
        classes: i.bgClass || i.textClass ? i : null
      };
    }
    function _t(e, t, n) {
      if (!t.styles || t.styles[0] != e.state.modeGen) {
        var r = mt(e, Je(t)),
          a = t.text.length > e.options.maxHighlightLength && ze(e.doc.mode, r.state),
          i = ht(e, t, r);
        a && (r.state = a), t.stateAfter = r.save(!a), t.styles = i.styles, i.classes ? t.styleClasses = i.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
      }
      return t.styles;
    }
    function mt(e, t, n) {
      var r = e.doc,
        a = e.display;
      if (!r.mode.startState) return new ft(r, !0, t);
      var i = function (e, t, n) {
          for (var r, a, i = e.doc, o = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > o; --s) {
            if (s <= i.first) return i.first;
            var l = $e(i, s - 1),
              c = l.stateAfter;
            if (c && (!n || s + (c instanceof pt ? c.lookAhead : 0) <= i.modeFrontier)) return s;
            var u = H(l.text, null, e.options.tabSize);
            (null == a || r > u) && (a = s - 1, r = u);
          }
          return a;
        }(e, t, n),
        o = i > r.first && $e(r, i - 1).stateAfter,
        s = o ? ft.fromSaved(r, o, i) : new ft(r, Qe(r.mode), i);
      return r.iter(i, t, function (n) {
        At(e, n.text, s);
        var r = s.line;
        n.stateAfter = r == t - 1 || r % 5 == 0 || r >= a.viewFrom && r < a.viewTo ? s.save() : null, s.nextLine();
      }), n && (r.modeFrontier = s.line), s;
    }
    function At(e, t, n, r) {
      var a = e.doc.mode,
        i = new Ge(t, e.options.tabSize, n);
      for (i.start = i.pos = r || 0, "" == t && gt(a, n.state); !i.eol();) yt(a, i, n.state), i.start = i.pos;
    }
    function gt(e, t) {
      if (e.blankLine) return e.blankLine(t);
      if (e.innerMode) {
        var n = Ye(e, t);
        return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
      }
    }
    function yt(e, t, n, r) {
      for (var a = 0; a < 10; a++) {
        r && (r[0] = Ye(e, n).mode);
        var i = e.token(t, n);
        if (t.pos > t.start) return i;
      }
      throw new Error("Mode " + e.name + " failed to advance stream.");
    }
    ft.prototype.lookAhead = function (e) {
      var t = this.doc.getLine(this.line + e);
      return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
    }, ft.prototype.baseToken = function (e) {
      if (!this.baseTokens) return null;
      for (; this.baseTokens[this.baseTokenPos] <= e;) this.baseTokenPos += 2;
      var t = this.baseTokens[this.baseTokenPos + 1];
      return {
        type: t && t.replace(/( |^)overlay .*/, ""),
        size: this.baseTokens[this.baseTokenPos] - e
      };
    }, ft.prototype.nextLine = function () {
      this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
    }, ft.fromSaved = function (e, t, n) {
      return t instanceof pt ? new ft(e, ze(e.mode, t.state), n, t.lookAhead) : new ft(e, ze(e.mode, t), n);
    }, ft.prototype.save = function (e) {
      var t = !1 !== e ? ze(this.doc.mode, this.state) : this.state;
      return this.maxLookAhead > 0 ? new pt(t, this.maxLookAhead) : t;
    };
    var vt = function (e, t, n) {
      this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n;
    };
    function Et(e, t, n, r) {
      var a,
        i,
        o = e.doc,
        s = o.mode,
        l = $e(o, (t = ut(o, t)).line),
        c = mt(e, t.line, n),
        u = new Ge(l.text, e.options.tabSize, c);
      for (r && (i = []); (r || u.pos < t.ch) && !u.eol();) u.start = u.pos, a = yt(s, u, c.state), r && i.push(new vt(u, a, ze(o.mode, c.state)));
      return r ? i : new vt(u, a, c.state);
    }
    function bt(e, t) {
      if (e) for (;;) {
        var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
        if (!n) break;
        e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
        var r = n[1] ? "bgClass" : "textClass";
        null == t[r] ? t[r] = n[2] : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) || (t[r] += " " + n[2]);
      }
      return e;
    }
    function wt(e, t, n, r, a, i, o) {
      var s = n.flattenSpans;
      null == s && (s = e.options.flattenSpans);
      var l,
        c = 0,
        u = null,
        d = new Ge(t, e.options.tabSize, r),
        p = e.options.addModeClass && [null];
      for ("" == t && bt(gt(n, r.state), i); !d.eol();) {
        if (d.pos > e.options.maxHighlightLength ? (s = !1, o && At(e, t, r, d.pos), d.pos = t.length, l = null) : l = bt(yt(n, d, r.state, p), i), p) {
          var f = p[0].name;
          f && (l = "m-" + (l ? f + " " + l : f));
        }
        if (!s || u != l) {
          for (; c < d.start;) a(c = Math.min(d.start, c + 5e3), u);
          u = l;
        }
        d.start = d.pos;
      }
      for (; c < d.pos;) {
        var h = Math.min(d.pos, c + 5e3);
        a(h, u), c = h;
      }
    }
    var Ct = !1,
      Ot = !1;
    function Mt(e, t, n) {
      this.marker = e, this.from = t, this.to = n;
    }
    function St(e, t) {
      if (e) for (var n = 0; n < e.length; ++n) {
        var r = e[n];
        if (r.marker == t) return r;
      }
    }
    function Tt(e, t) {
      for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
      return n;
    }
    function kt(e, t) {
      if (t.full) return null;
      var n = tt(e, t.from.line) && $e(e, t.from.line).markedSpans,
        r = tt(e, t.to.line) && $e(e, t.to.line).markedSpans;
      if (!n && !r) return null;
      var a = t.from.ch,
        i = t.to.ch,
        o = 0 == at(t.from, t.to),
        s = function (e, t, n) {
          var r;
          if (e) for (var a = 0; a < e.length; ++a) {
            var i = e[a],
              o = i.marker;
            if (null == i.from || (o.inclusiveLeft ? i.from <= t : i.from < t) || i.from == t && "bookmark" == o.type && (!n || !i.marker.insertLeft)) {
              var s = null == i.to || (o.inclusiveRight ? i.to >= t : i.to > t);
              (r || (r = [])).push(new Mt(o, i.from, s ? null : i.to));
            }
          }
          return r;
        }(n, a, o),
        l = function (e, t, n) {
          var r;
          if (e) for (var a = 0; a < e.length; ++a) {
            var i = e[a],
              o = i.marker;
            if (null == i.to || (o.inclusiveRight ? i.to >= t : i.to > t) || i.from == t && "bookmark" == o.type && (!n || i.marker.insertLeft)) {
              var s = null == i.from || (o.inclusiveLeft ? i.from <= t : i.from < t);
              (r || (r = [])).push(new Mt(o, s ? null : i.from - t, null == i.to ? null : i.to - t));
            }
          }
          return r;
        }(r, i, o),
        c = 1 == t.text.length,
        u = Z(t.text).length + (c ? a : 0);
      if (s) for (var d = 0; d < s.length; ++d) {
        var p = s[d];
        if (null == p.to) {
          var f = St(l, p.marker);
          f ? c && (p.to = null == f.to ? null : f.to + u) : p.to = a;
        }
      }
      if (l) for (var h = 0; h < l.length; ++h) {
        var _ = l[h];
        null != _.to && (_.to += u), null == _.from ? St(s, _.marker) || (_.from = u, c && (s || (s = [])).push(_)) : (_.from += u, c && (s || (s = [])).push(_));
      }
      s && (s = xt(s)), l && l != s && (l = xt(l));
      var m = [s];
      if (!c) {
        var A,
          g = t.text.length - 2;
        if (g > 0 && s) for (var y = 0; y < s.length; ++y) null == s[y].to && (A || (A = [])).push(new Mt(s[y].marker, null, null));
        for (var v = 0; v < g; ++v) m.push(A);
        m.push(l);
      }
      return m;
    }
    function xt(e) {
      for (var t = 0; t < e.length; ++t) {
        var n = e[t];
        null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1);
      }
      return e.length ? e : null;
    }
    function Dt(e) {
      var t = e.markedSpans;
      if (t) {
        for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
        e.markedSpans = null;
      }
    }
    function It(e, t) {
      if (t) {
        for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
        e.markedSpans = t;
      }
    }
    function Pt(e) {
      return e.inclusiveLeft ? -1 : 0;
    }
    function Lt(e) {
      return e.inclusiveRight ? 1 : 0;
    }
    function Rt(e, t) {
      var n = e.lines.length - t.lines.length;
      if (0 != n) return n;
      var r = e.find(),
        a = t.find(),
        i = at(r.from, a.from) || Pt(e) - Pt(t);
      return i ? -i : at(r.to, a.to) || Lt(e) - Lt(t) || t.id - e.id;
    }
    function Bt(e, t) {
      var n,
        r = Ot && e.markedSpans;
      if (r) for (var a = void 0, i = 0; i < r.length; ++i) (a = r[i]).marker.collapsed && null == (t ? a.from : a.to) && (!n || Rt(n, a.marker) < 0) && (n = a.marker);
      return n;
    }
    function Nt(e) {
      return Bt(e, !0);
    }
    function Ut(e) {
      return Bt(e, !1);
    }
    function Ft(e, t) {
      var n,
        r = Ot && e.markedSpans;
      if (r) for (var a = 0; a < r.length; ++a) {
        var i = r[a];
        i.marker.collapsed && (null == i.from || i.from < t) && (null == i.to || i.to > t) && (!n || Rt(n, i.marker) < 0) && (n = i.marker);
      }
      return n;
    }
    function jt(e, t, n, r, a) {
      var i = $e(e, t),
        o = Ot && i.markedSpans;
      if (o) for (var s = 0; s < o.length; ++s) {
        var l = o[s];
        if (l.marker.collapsed) {
          var c = l.marker.find(0),
            u = at(c.from, n) || Pt(l.marker) - Pt(a),
            d = at(c.to, r) || Lt(l.marker) - Lt(a);
          if (!(u >= 0 && d <= 0 || u <= 0 && d >= 0) && (u <= 0 && (l.marker.inclusiveRight && a.inclusiveLeft ? at(c.to, n) >= 0 : at(c.to, n) > 0) || u >= 0 && (l.marker.inclusiveRight && a.inclusiveLeft ? at(c.from, r) <= 0 : at(c.from, r) < 0))) return !0;
        }
      }
    }
    function Ht(e) {
      for (var t; t = Nt(e);) e = t.find(-1, !0).line;
      return e;
    }
    function Wt(e, t) {
      var n = $e(e, t),
        r = Ht(n);
      return n == r ? t : Je(r);
    }
    function Kt(e, t) {
      if (t > e.lastLine()) return t;
      var n,
        r = $e(e, t);
      if (!Vt(e, r)) return t;
      for (; n = Ut(r);) r = n.find(1, !0).line;
      return Je(r) + 1;
    }
    function Vt(e, t) {
      var n = Ot && t.markedSpans;
      if (n) for (var r = void 0, a = 0; a < n.length; ++a) if ((r = n[a]).marker.collapsed) {
        if (null == r.from) return !0;
        if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && zt(e, t, r)) return !0;
      }
    }
    function zt(e, t, n) {
      if (null == n.to) {
        var r = n.marker.find(1, !0);
        return zt(e, r.line, St(r.line.markedSpans, n.marker));
      }
      if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
      for (var a = void 0, i = 0; i < t.markedSpans.length; ++i) if ((a = t.markedSpans[i]).marker.collapsed && !a.marker.widgetNode && a.from == n.to && (null == a.to || a.to != n.from) && (a.marker.inclusiveLeft || n.marker.inclusiveRight) && zt(e, t, a)) return !0;
    }
    function Yt(e) {
      for (var t = 0, n = (e = Ht(e)).parent, r = 0; r < n.lines.length; ++r) {
        var a = n.lines[r];
        if (a == e) break;
        t += a.height;
      }
      for (var i = n.parent; i; i = (n = i).parent) for (var o = 0; o < i.children.length; ++o) {
        var s = i.children[o];
        if (s == n) break;
        t += s.height;
      }
      return t;
    }
    function Qt(e) {
      if (0 == e.height) return 0;
      for (var t, n = e.text.length, r = e; t = Nt(r);) {
        var a = t.find(0, !0);
        r = a.from.line, n += a.from.ch - a.to.ch;
      }
      for (r = e; t = Ut(r);) {
        var i = t.find(0, !0);
        n -= r.text.length - i.from.ch, n += (r = i.to.line).text.length - i.to.ch;
      }
      return n;
    }
    function Gt(e) {
      var t = e.display,
        n = e.doc;
      t.maxLine = $e(n, n.first), t.maxLineLength = Qt(t.maxLine), t.maxLineChanged = !0, n.iter(function (e) {
        var n = Qt(e);
        n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e);
      });
    }
    var $t = function (e, t, n) {
      this.text = e, It(this, t), this.height = n ? n(this) : 1;
    };
    function qt(e) {
      e.parent = null, Dt(e);
    }
    $t.prototype.lineNo = function () {
      return Je(this);
    }, Ee($t);
    var Zt = {},
      Xt = {};
    function Jt(e, t) {
      if (!e || /^\s*$/.test(e)) return null;
      var n = t.addModeClass ? Xt : Zt;
      return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
    }
    function en(e, t) {
      var n = D("span", null, null, l ? "padding-right: .1px" : null),
        r = {
          pre: D("pre", [n], "CodeMirror-line"),
          content: n,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: e.getOption("lineWrapping")
        };
      t.measure = {};
      for (var a = 0; a <= (t.rest ? t.rest.length : 0); a++) {
        var i = a ? t.rest[a - 1] : t.line,
          o = void 0;
        r.pos = 0, r.addToken = nn, Ie(e.display.measure) && (o = pe(i, e.doc.direction)) && (r.addToken = rn(r.addToken, o)), r.map = [], on(i, r, _t(e, i, t != e.display.externalMeasured && Je(i))), i.styleClasses && (i.styleClasses.bgClass && (r.bgClass = R(i.styleClasses.bgClass, r.bgClass || "")), i.styleClasses.textClass && (r.textClass = R(i.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(De(e.display.measure))), 0 == a ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}));
      }
      if (l) {
        var s = r.content.lastChild;
        (/\bcm-tab\b/.test(s.className) || s.querySelector && s.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
      }
      return Ae(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = R(r.pre.className, r.textClass || "")), r;
    }
    function tn(e) {
      var t = x("span", "•", "cm-invalidchar");
      return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t;
    }
    function nn(e, t, n, r, a, i, l) {
      if (t) {
        var c,
          u = e.splitSpaces ? function (e, t) {
            if (e.length > 1 && !/  /.test(e)) return e;
            for (var n = t, r = "", a = 0; a < e.length; a++) {
              var i = e.charAt(a);
              " " != i || !n || a != e.length - 1 && 32 != e.charCodeAt(a + 1) || (i = " "), r += i, n = " " == i;
            }
            return r;
          }(t, e.trailingSpace) : t,
          d = e.cm.state.specialChars,
          p = !1;
        if (d.test(t)) {
          c = document.createDocumentFragment();
          for (var f = 0;;) {
            d.lastIndex = f;
            var h = d.exec(t),
              _ = h ? h.index - f : t.length - f;
            if (_) {
              var m = document.createTextNode(u.slice(f, f + _));
              o && s < 9 ? c.appendChild(x("span", [m])) : c.appendChild(m), e.map.push(e.pos, e.pos + _, m), e.col += _, e.pos += _;
            }
            if (!h) break;
            f += _ + 1;
            var A = void 0;
            if ("\t" == h[0]) {
              var g = e.cm.options.tabSize,
                y = g - e.col % g;
              (A = c.appendChild(x("span", q(y), "cm-tab"))).setAttribute("role", "presentation"), A.setAttribute("cm-text", "\t"), e.col += y;
            } else "\r" == h[0] || "\n" == h[0] ? ((A = c.appendChild(x("span", "\r" == h[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", h[0]), e.col += 1) : ((A = e.cm.options.specialCharPlaceholder(h[0])).setAttribute("cm-text", h[0]), o && s < 9 ? c.appendChild(x("span", [A])) : c.appendChild(A), e.col += 1);
            e.map.push(e.pos, e.pos + 1, A), e.pos++;
          }
        } else e.col += t.length, c = document.createTextNode(u), e.map.push(e.pos, e.pos + t.length, c), o && s < 9 && (p = !0), e.pos += t.length;
        if (e.trailingSpace = 32 == u.charCodeAt(t.length - 1), n || r || a || p || i || l) {
          var v = n || "";
          r && (v += r), a && (v += a);
          var E = x("span", [c], v, i);
          if (l) for (var b in l) l.hasOwnProperty(b) && "style" != b && "class" != b && E.setAttribute(b, l[b]);
          return e.content.appendChild(E);
        }
        e.content.appendChild(c);
      }
    }
    function rn(e, t) {
      return function (n, r, a, i, o, s, l) {
        a = a ? a + " cm-force-border" : "cm-force-border";
        for (var c = n.pos, u = c + r.length;;) {
          for (var d = void 0, p = 0; p < t.length && !((d = t[p]).to > c && d.from <= c); p++);
          if (d.to >= u) return e(n, r, a, i, o, s, l);
          e(n, r.slice(0, d.to - c), a, i, null, s, l), i = null, r = r.slice(d.to - c), c = d.to;
        }
      };
    }
    function an(e, t, n, r) {
      var a = !r && n.widgetNode;
      a && e.map.push(e.pos, e.pos + t, a), !r && e.cm.display.input.needsContentAttribute && (a || (a = e.content.appendChild(document.createElement("span"))), a.setAttribute("cm-marker", n.id)), a && (e.cm.display.input.setUneditable(a), e.content.appendChild(a)), e.pos += t, e.trailingSpace = !1;
    }
    function on(e, t, n) {
      var r = e.markedSpans,
        a = e.text,
        i = 0;
      if (r) for (var o, s, l, c, u, d, p, f = a.length, h = 0, _ = 1, m = "", A = 0;;) {
        if (A == h) {
          l = c = u = s = "", p = null, d = null, A = 1 / 0;
          for (var g = [], y = void 0, v = 0; v < r.length; ++v) {
            var E = r[v],
              b = E.marker;
            if ("bookmark" == b.type && E.from == h && b.widgetNode) g.push(b);else if (E.from <= h && (null == E.to || E.to > h || b.collapsed && E.to == h && E.from == h)) {
              if (null != E.to && E.to != h && A > E.to && (A = E.to, c = ""), b.className && (l += " " + b.className), b.css && (s = (s ? s + ";" : "") + b.css), b.startStyle && E.from == h && (u += " " + b.startStyle), b.endStyle && E.to == A && (y || (y = [])).push(b.endStyle, E.to), b.title && ((p || (p = {})).title = b.title), b.attributes) for (var w in b.attributes) (p || (p = {}))[w] = b.attributes[w];
              b.collapsed && (!d || Rt(d.marker, b) < 0) && (d = E);
            } else E.from > h && A > E.from && (A = E.from);
          }
          if (y) for (var C = 0; C < y.length; C += 2) y[C + 1] == A && (c += " " + y[C]);
          if (!d || d.from == h) for (var O = 0; O < g.length; ++O) an(t, 0, g[O]);
          if (d && (d.from || 0) == h) {
            if (an(t, (null == d.to ? f + 1 : d.to) - h, d.marker, null == d.from), null == d.to) return;
            d.to == h && (d = !1);
          }
        }
        if (h >= f) break;
        for (var M = Math.min(f, A);;) {
          if (m) {
            var S = h + m.length;
            if (!d) {
              var T = S > M ? m.slice(0, M - h) : m;
              t.addToken(t, T, o ? o + l : l, u, h + T.length == A ? c : "", s, p);
            }
            if (S >= M) {
              m = m.slice(M - h), h = M;
              break;
            }
            h = S, u = "";
          }
          m = a.slice(i, i = n[_++]), o = Jt(n[_++], t.cm.options);
        }
      } else for (var k = 1; k < n.length; k += 2) t.addToken(t, a.slice(i, i = n[k]), Jt(n[k + 1], t.cm.options));
    }
    function sn(e, t, n) {
      this.line = t, this.rest = function (e) {
        for (var t, n; t = Ut(e);) e = t.find(1, !0).line, (n || (n = [])).push(e);
        return n;
      }(t), this.size = this.rest ? Je(Z(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = Vt(e, t);
    }
    function ln(e, t, n) {
      for (var r, a = [], i = t; i < n; i = r) {
        var o = new sn(e.doc, $e(e.doc, i), i);
        r = i + o.size, a.push(o);
      }
      return a;
    }
    var cn = null;
    var un = null;
    function dn(e, t) {
      var n = _e(e, t);
      if (n.length) {
        var r,
          a = Array.prototype.slice.call(arguments, 2);
        cn ? r = cn.delayedCallbacks : un ? r = un : (r = un = [], setTimeout(pn, 0));
        for (var i = function (e) {
            r.push(function () {
              return n[e].apply(null, a);
            });
          }, o = 0; o < n.length; ++o) i(o);
      }
    }
    function pn() {
      var e = un;
      un = null;
      for (var t = 0; t < e.length; ++t) e[t]();
    }
    function fn(e, t, n, r) {
      for (var a = 0; a < t.changes.length; a++) {
        var i = t.changes[a];
        "text" == i ? mn(e, t) : "gutter" == i ? gn(e, t, n, r) : "class" == i ? An(e, t) : "widget" == i && yn(e, t, r);
      }
      t.changes = null;
    }
    function hn(e) {
      return e.node == e.text && (e.node = x("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), o && s < 8 && (e.node.style.zIndex = 2)), e.node;
    }
    function _n(e, t) {
      var n = e.display.externalMeasured;
      return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : en(e, t);
    }
    function mn(e, t) {
      var n = t.text.className,
        r = _n(e, t);
      t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, An(e, t)) : n && (t.text.className = n);
    }
    function An(e, t) {
      (function (e, t) {
        var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
        if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);else if (n) {
          var r = hn(t);
          t.background = r.insertBefore(x("div", null, n), r.firstChild), e.display.input.setUneditable(t.background);
        }
      })(e, t), t.line.wrapClass ? hn(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
      var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
      t.text.className = n || "";
    }
    function gn(e, t, n, r) {
      if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
        var a = hn(t);
        t.gutterBackground = x("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), a.insertBefore(t.gutterBackground, t.text);
      }
      var i = t.line.gutterMarkers;
      if (e.options.lineNumbers || i) {
        var o = hn(t),
          s = t.gutter = x("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
        if (s.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(s), o.insertBefore(s, t.text), t.line.gutterClass && (s.className += " " + t.line.gutterClass), !e.options.lineNumbers || i && i["CodeMirror-linenumbers"] || (t.lineNumber = s.appendChild(x("div", nt(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), i) for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
          var c = e.display.gutterSpecs[l].className,
            u = i.hasOwnProperty(c) && i[c];
          u && s.appendChild(x("div", [u], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[c] + "px; width: " + r.gutterWidth[c] + "px"));
        }
      }
    }
    function yn(e, t, n) {
      t.alignable && (t.alignable = null);
      for (var r = O("CodeMirror-linewidget"), a = t.node.firstChild, i = void 0; a; a = i) i = a.nextSibling, r.test(a.className) && t.node.removeChild(a);
      En(e, t, n);
    }
    function vn(e, t, n, r) {
      var a = _n(e, t);
      return t.text = t.node = a.pre, a.bgClass && (t.bgClass = a.bgClass), a.textClass && (t.textClass = a.textClass), An(e, t), gn(e, t, n, r), En(e, t, r), t.node;
    }
    function En(e, t, n) {
      if (bn(e, t.line, t, n, !0), t.rest) for (var r = 0; r < t.rest.length; r++) bn(e, t.rest[r], t, n, !1);
    }
    function bn(e, t, n, r, a) {
      if (t.widgets) for (var i = hn(n), o = 0, s = t.widgets; o < s.length; ++o) {
        var l = s[o],
          c = x("div", [l.node], "CodeMirror-linewidget" + (l.className ? " " + l.className : ""));
        l.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), wn(l, c, n, r), e.display.input.setUneditable(c), a && l.above ? i.insertBefore(c, n.gutter || n.text) : i.appendChild(c), dn(l, "redraw");
      }
    }
    function wn(e, t, n, r) {
      if (e.noHScroll) {
        (n.alignable || (n.alignable = [])).push(t);
        var a = r.wrapperWidth;
        t.style.left = r.fixedPos + "px", e.coverGutter || (a -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = a + "px";
      }
      e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
    }
    function Cn(e) {
      if (null != e.height) return e.height;
      var t = e.doc.cm;
      if (!t) return 0;
      if (!I(document.body, e.node)) {
        var n = "position: relative;";
        e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), k(t.display.measure, x("div", [e.node], null, n));
      }
      return e.height = e.node.parentNode.offsetHeight;
    }
    function On(e, t) {
      for (var n = Me(t); n != e.wrapper; n = n.parentNode) if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0;
    }
    function Mn(e) {
      return e.lineSpace.offsetTop;
    }
    function Sn(e) {
      return e.mover.offsetHeight - e.lineSpace.offsetHeight;
    }
    function Tn(e) {
      if (e.cachedPaddingH) return e.cachedPaddingH;
      var t = k(e.measure, x("pre", "x", "CodeMirror-line-like")),
        n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
        r = {
          left: parseInt(n.paddingLeft),
          right: parseInt(n.paddingRight)
        };
      return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
    }
    function kn(e) {
      return 50 - e.display.nativeBarWidth;
    }
    function xn(e) {
      return e.display.scroller.clientWidth - kn(e) - e.display.barWidth;
    }
    function Dn(e) {
      return e.display.scroller.clientHeight - kn(e) - e.display.barHeight;
    }
    function In(e, t, n) {
      if (e.line == t) return {
        map: e.measure.map,
        cache: e.measure.cache
      };
      if (e.rest) {
        for (var r = 0; r < e.rest.length; r++) if (e.rest[r] == t) return {
          map: e.measure.maps[r],
          cache: e.measure.caches[r]
        };
        for (var a = 0; a < e.rest.length; a++) if (Je(e.rest[a]) > n) return {
          map: e.measure.maps[a],
          cache: e.measure.caches[a],
          before: !0
        };
      }
    }
    function Pn(e, t, n, r) {
      return Bn(e, Rn(e, t), n, r);
    }
    function Ln(e, t) {
      if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[fr(e, t)];
      var n = e.display.externalMeasured;
      return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
    }
    function Rn(e, t) {
      var n = Je(t),
        r = Ln(e, n);
      r && !r.text ? r = null : r && r.changes && (fn(e, r, n, lr(e)), e.curOp.forceUpdate = !0), r || (r = function (e, t) {
        var n = Je(t = Ht(t)),
          r = e.display.externalMeasured = new sn(e.doc, t, n);
        r.lineN = n;
        var a = r.built = en(e, r);
        return r.text = a.pre, k(e.display.lineMeasure, a.pre), r;
      }(e, t));
      var a = In(r, t, n);
      return {
        line: t,
        view: r,
        rect: null,
        map: a.map,
        cache: a.cache,
        before: a.before,
        hasHeights: !1
      };
    }
    function Bn(e, t, n, r, a) {
      t.before && (n = -1);
      var i,
        l = n + (r || "");
      return t.cache.hasOwnProperty(l) ? i = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (function (e, t, n) {
        var r = e.options.lineWrapping,
          a = r && xn(e);
        if (!t.measure.heights || r && t.measure.width != a) {
          var i = t.measure.heights = [];
          if (r) {
            t.measure.width = a;
            for (var o = t.text.firstChild.getClientRects(), s = 0; s < o.length - 1; s++) {
              var l = o[s],
                c = o[s + 1];
              Math.abs(l.bottom - c.bottom) > 2 && i.push((l.bottom + c.top) / 2 - n.top);
            }
          }
          i.push(n.bottom - n.top);
        }
      }(e, t.view, t.rect), t.hasHeights = !0), (i = function (e, t, n, r) {
        var a,
          i = Fn(t.map, n, r),
          l = i.node,
          c = i.start,
          u = i.end,
          d = i.collapse;
        if (3 == l.nodeType) {
          for (var p = 0; p < 4; p++) {
            for (; c && oe(t.line.text.charAt(i.coverStart + c));) --c;
            for (; i.coverStart + u < i.coverEnd && oe(t.line.text.charAt(i.coverStart + u));) ++u;
            if ((a = o && s < 9 && 0 == c && u == i.coverEnd - i.coverStart ? l.parentNode.getBoundingClientRect() : jn(M(l, c, u).getClientRects(), r)).left || a.right || 0 == c) break;
            u = c, c -= 1, d = "right";
          }
          o && s < 11 && (a = function (e, t) {
            if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function (e) {
              if (null != Ne) return Ne;
              var t = k(e, x("span", "x")),
                n = t.getBoundingClientRect(),
                r = M(t, 0, 1).getBoundingClientRect();
              return Ne = Math.abs(n.left - r.left) > 1;
            }(e)) return t;
            var n = screen.logicalXDPI / screen.deviceXDPI,
              r = screen.logicalYDPI / screen.deviceYDPI;
            return {
              left: t.left * n,
              right: t.right * n,
              top: t.top * r,
              bottom: t.bottom * r
            };
          }(e.display.measure, a));
        } else {
          var f;
          c > 0 && (d = r = "right"), a = e.options.lineWrapping && (f = l.getClientRects()).length > 1 ? f["right" == r ? f.length - 1 : 0] : l.getBoundingClientRect();
        }
        if (o && s < 9 && !c && (!a || !a.left && !a.right)) {
          var h = l.parentNode.getClientRects()[0];
          a = h ? {
            left: h.left,
            right: h.left + sr(e.display),
            top: h.top,
            bottom: h.bottom
          } : Un;
        }
        for (var _ = a.top - t.rect.top, m = a.bottom - t.rect.top, A = (_ + m) / 2, g = t.view.measure.heights, y = 0; y < g.length - 1 && !(A < g[y]); y++);
        var v = y ? g[y - 1] : 0,
          E = g[y],
          b = {
            left: ("right" == d ? a.right : a.left) - t.rect.left,
            right: ("left" == d ? a.left : a.right) - t.rect.left,
            top: v,
            bottom: E
          };
        return a.left || a.right || (b.bogus = !0), e.options.singleCursorHeightPerLine || (b.rtop = _, b.rbottom = m), b;
      }(e, t, n, r)).bogus || (t.cache[l] = i)), {
        left: i.left,
        right: i.right,
        top: a ? i.rtop : i.top,
        bottom: a ? i.rbottom : i.bottom
      };
    }
    var Nn,
      Un = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
    function Fn(e, t, n) {
      for (var r, a, i, o, s, l, c = 0; c < e.length; c += 3) if (s = e[c], l = e[c + 1], t < s ? (a = 0, i = 1, o = "left") : t < l ? i = 1 + (a = t - s) : (c == e.length - 3 || t == l && e[c + 3] > t) && (a = (i = l - s) - 1, t >= l && (o = "right")), null != a) {
        if (r = e[c + 2], s == l && n == (r.insertLeft ? "left" : "right") && (o = n), "left" == n && 0 == a) for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft;) r = e[2 + (c -= 3)], o = "left";
        if ("right" == n && a == l - s) for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft;) r = e[(c += 3) + 2], o = "right";
        break;
      }
      return {
        node: r,
        start: a,
        end: i,
        collapse: o,
        coverStart: s,
        coverEnd: l
      };
    }
    function jn(e, t) {
      var n = Un;
      if ("left" == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);else for (var a = e.length - 1; a >= 0 && (n = e[a]).left == n.right; a--);
      return n;
    }
    function Hn(e) {
      if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
    }
    function Wn(e) {
      e.display.externalMeasure = null, T(e.display.lineMeasure);
      for (var t = 0; t < e.display.view.length; t++) Hn(e.display.view[t]);
    }
    function Kn(e) {
      Wn(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
    }
    function Vn(e) {
      return u && A ? -(e.body.getBoundingClientRect().left - parseInt(getComputedStyle(e.body).marginLeft)) : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft;
    }
    function zn(e) {
      return u && A ? -(e.body.getBoundingClientRect().top - parseInt(getComputedStyle(e.body).marginTop)) : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop;
    }
    function Yn(e) {
      var t = Ht(e).widgets,
        n = 0;
      if (t) for (var r = 0; r < t.length; ++r) t[r].above && (n += Cn(t[r]));
      return n;
    }
    function Qn(e, t, n, r, a) {
      if (!a) {
        var i = Yn(t);
        n.top += i, n.bottom += i;
      }
      if ("line" == r) return n;
      r || (r = "local");
      var o = Yt(t);
      if ("local" == r ? o += Mn(e.display) : o -= e.display.viewOffset, "page" == r || "window" == r) {
        var s = e.display.lineSpace.getBoundingClientRect();
        o += s.top + ("window" == r ? 0 : zn(N(e)));
        var l = s.left + ("window" == r ? 0 : Vn(N(e)));
        n.left += l, n.right += l;
      }
      return n.top += o, n.bottom += o, n;
    }
    function Gn(e, t, n) {
      if ("div" == n) return t;
      var r = t.left,
        a = t.top;
      if ("page" == n) r -= Vn(N(e)), a -= zn(N(e));else if ("local" == n || !n) {
        var i = e.display.sizer.getBoundingClientRect();
        r += i.left, a += i.top;
      }
      var o = e.display.lineSpace.getBoundingClientRect();
      return {
        left: r - o.left,
        top: a - o.top
      };
    }
    function $n(e, t, n, r, a) {
      return r || (r = $e(e.doc, t.line)), Qn(e, r, Pn(e, r, t.ch, a), n);
    }
    function qn(e, t, n, r, a, i) {
      function o(t, o) {
        var s = Bn(e, a, t, o ? "right" : "left", i);
        return o ? s.left = s.right : s.right = s.left, Qn(e, r, s, n);
      }
      r = r || $e(e.doc, t.line), a || (a = Rn(e, r));
      var s = pe(r, e.doc.direction),
        l = t.ch,
        c = t.sticky;
      if (l >= r.text.length ? (l = r.text.length, c = "before") : l <= 0 && (l = 0, c = "after"), !s) return o("before" == c ? l - 1 : l, "before" == c);
      function u(e, t, n) {
        return o(n ? e - 1 : e, 1 == s[t].level != n);
      }
      var d = ue(s, l, c),
        p = ce,
        f = u(l, d, "before" == c);
      return null != p && (f.other = u(l, p, "before" != c)), f;
    }
    function Zn(e, t) {
      var n = 0;
      t = ut(e.doc, t), e.options.lineWrapping || (n = sr(e.display) * t.ch);
      var r = $e(e.doc, t.line),
        a = Yt(r) + Mn(e.display);
      return {
        left: n,
        right: n,
        top: a,
        bottom: a + r.height
      };
    }
    function Xn(e, t, n, r, a) {
      var i = rt(e, t, n);
      return i.xRel = a, r && (i.outside = r), i;
    }
    function Jn(e, t, n) {
      var r = e.doc;
      if ((n += e.display.viewOffset) < 0) return Xn(r.first, 0, null, -1, -1);
      var a = et(r, n),
        i = r.first + r.size - 1;
      if (a > i) return Xn(r.first + r.size - 1, $e(r, i).text.length, null, 1, 1);
      t < 0 && (t = 0);
      for (var o = $e(r, a);;) {
        var s = rr(e, o, a, t, n),
          l = Ft(o, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
        if (!l) return s;
        var c = l.find(1);
        if (c.line == a) return c;
        o = $e(r, a = c.line);
      }
    }
    function er(e, t, n, r) {
      r -= Yn(t);
      var a = t.text.length,
        i = le(function (t) {
          return Bn(e, n, t - 1).bottom <= r;
        }, a, 0);
      return {
        begin: i,
        end: a = le(function (t) {
          return Bn(e, n, t).top > r;
        }, i, a)
      };
    }
    function tr(e, t, n, r) {
      return n || (n = Rn(e, t)), er(e, t, n, Qn(e, t, Bn(e, n, r), "line").top);
    }
    function nr(e, t, n, r) {
      return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
    }
    function rr(e, t, n, r, a) {
      a -= Yt(t);
      var i = Rn(e, t),
        o = Yn(t),
        s = 0,
        l = t.text.length,
        c = !0,
        u = pe(t, e.doc.direction);
      if (u) {
        var d = (e.options.lineWrapping ? ir : ar)(e, t, n, i, u, r, a);
        s = (c = 1 != d.level) ? d.from : d.to - 1, l = c ? d.to : d.from - 1;
      }
      var p,
        f,
        h = null,
        _ = null,
        m = le(function (t) {
          var n = Bn(e, i, t);
          return n.top += o, n.bottom += o, !!nr(n, r, a, !1) && (n.top <= a && n.left <= r && (h = t, _ = n), !0);
        }, s, l),
        A = !1;
      if (_) {
        var g = r - _.left < _.right - r,
          y = g == c;
        m = h + (y ? 0 : 1), f = y ? "after" : "before", p = g ? _.left : _.right;
      } else {
        c || m != l && m != s || m++, f = 0 == m ? "after" : m == t.text.length ? "before" : Bn(e, i, m - (c ? 1 : 0)).bottom + o <= a == c ? "after" : "before";
        var v = qn(e, rt(n, m, f), "line", t, i);
        p = v.left, A = a < v.top ? -1 : a >= v.bottom ? 1 : 0;
      }
      return Xn(n, m = se(t.text, m, 1), f, A, r - p);
    }
    function ar(e, t, n, r, a, i, o) {
      var s = le(function (s) {
          var l = a[s],
            c = 1 != l.level;
          return nr(qn(e, rt(n, c ? l.to : l.from, c ? "before" : "after"), "line", t, r), i, o, !0);
        }, 0, a.length - 1),
        l = a[s];
      if (s > 0) {
        var c = 1 != l.level,
          u = qn(e, rt(n, c ? l.from : l.to, c ? "after" : "before"), "line", t, r);
        nr(u, i, o, !0) && u.top > o && (l = a[s - 1]);
      }
      return l;
    }
    function ir(e, t, n, r, a, i, o) {
      var s = er(e, t, r, o),
        l = s.begin,
        c = s.end;
      /\s/.test(t.text.charAt(c - 1)) && c--;
      for (var u = null, d = null, p = 0; p < a.length; p++) {
        var f = a[p];
        if (!(f.from >= c || f.to <= l)) {
          var h = Bn(e, r, 1 != f.level ? Math.min(c, f.to) - 1 : Math.max(l, f.from)).right,
            _ = h < i ? i - h + 1e9 : h - i;
          (!u || d > _) && (u = f, d = _);
        }
      }
      return u || (u = a[a.length - 1]), u.from < l && (u = {
        from: l,
        to: u.to,
        level: u.level
      }), u.to > c && (u = {
        from: u.from,
        to: c,
        level: u.level
      }), u;
    }
    function or(e) {
      if (null != e.cachedTextHeight) return e.cachedTextHeight;
      if (null == Nn) {
        Nn = x("pre", null, "CodeMirror-line-like");
        for (var t = 0; t < 49; ++t) Nn.appendChild(document.createTextNode("x")), Nn.appendChild(x("br"));
        Nn.appendChild(document.createTextNode("x"));
      }
      k(e.measure, Nn);
      var n = Nn.offsetHeight / 50;
      return n > 3 && (e.cachedTextHeight = n), T(e.measure), n || 1;
    }
    function sr(e) {
      if (null != e.cachedCharWidth) return e.cachedCharWidth;
      var t = x("span", "xxxxxxxxxx"),
        n = x("pre", [t], "CodeMirror-line-like");
      k(e.measure, n);
      var r = t.getBoundingClientRect(),
        a = (r.right - r.left) / 10;
      return a > 2 && (e.cachedCharWidth = a), a || 10;
    }
    function lr(e) {
      for (var t = e.display, n = {}, r = {}, a = t.gutters.clientLeft, i = t.gutters.firstChild, o = 0; i; i = i.nextSibling, ++o) {
        var s = e.display.gutterSpecs[o].className;
        n[s] = i.offsetLeft + i.clientLeft + a, r[s] = i.clientWidth;
      }
      return {
        fixedPos: cr(t),
        gutterTotalWidth: t.gutters.offsetWidth,
        gutterLeft: n,
        gutterWidth: r,
        wrapperWidth: t.wrapper.clientWidth
      };
    }
    function cr(e) {
      return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
    }
    function ur(e) {
      var t = or(e.display),
        n = e.options.lineWrapping,
        r = n && Math.max(5, e.display.scroller.clientWidth / sr(e.display) - 3);
      return function (a) {
        if (Vt(e.doc, a)) return 0;
        var i = 0;
        if (a.widgets) for (var o = 0; o < a.widgets.length; o++) a.widgets[o].height && (i += a.widgets[o].height);
        return n ? i + (Math.ceil(a.text.length / r) || 1) * t : i + t;
      };
    }
    function dr(e) {
      var t = e.doc,
        n = ur(e);
      t.iter(function (e) {
        var t = n(e);
        t != e.height && Xe(e, t);
      });
    }
    function pr(e, t, n, r) {
      var a = e.display;
      if (!n && "true" == Me(t).getAttribute("cm-not-content")) return null;
      var i,
        o,
        s = a.lineSpace.getBoundingClientRect();
      try {
        i = t.clientX - s.left, o = t.clientY - s.top;
      } catch (e) {
        return null;
      }
      var l,
        c = Jn(e, i, o);
      if (r && c.xRel > 0 && (l = $e(e.doc, c.line).text).length == c.ch) {
        var u = H(l, l.length, e.options.tabSize) - l.length;
        c = rt(c.line, Math.max(0, Math.round((i - Tn(e.display).left) / sr(e.display)) - u));
      }
      return c;
    }
    function fr(e, t) {
      if (t >= e.display.viewTo) return null;
      if ((t -= e.display.viewFrom) < 0) return null;
      for (var n = e.display.view, r = 0; r < n.length; r++) if ((t -= n[r].size) < 0) return r;
    }
    function hr(e, t, n, r) {
      null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
      var a = e.display;
      if (r && n < a.viewTo && (null == a.updateLineNumbers || a.updateLineNumbers > t) && (a.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= a.viewTo) Ot && Wt(e.doc, t) < a.viewTo && mr(e);else if (n <= a.viewFrom) Ot && Kt(e.doc, n + r) > a.viewFrom ? mr(e) : (a.viewFrom += r, a.viewTo += r);else if (t <= a.viewFrom && n >= a.viewTo) mr(e);else if (t <= a.viewFrom) {
        var i = Ar(e, n, n + r, 1);
        i ? (a.view = a.view.slice(i.index), a.viewFrom = i.lineN, a.viewTo += r) : mr(e);
      } else if (n >= a.viewTo) {
        var o = Ar(e, t, t, -1);
        o ? (a.view = a.view.slice(0, o.index), a.viewTo = o.lineN) : mr(e);
      } else {
        var s = Ar(e, t, t, -1),
          l = Ar(e, n, n + r, 1);
        s && l ? (a.view = a.view.slice(0, s.index).concat(ln(e, s.lineN, l.lineN)).concat(a.view.slice(l.index)), a.viewTo += r) : mr(e);
      }
      var c = a.externalMeasured;
      c && (n < c.lineN ? c.lineN += r : t < c.lineN + c.size && (a.externalMeasured = null));
    }
    function _r(e, t, n) {
      e.curOp.viewChanged = !0;
      var r = e.display,
        a = e.display.externalMeasured;
      if (a && t >= a.lineN && t < a.lineN + a.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
        var i = r.view[fr(e, t)];
        if (null != i.node) {
          var o = i.changes || (i.changes = []);
          -1 == K(o, n) && o.push(n);
        }
      }
    }
    function mr(e) {
      e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
    }
    function Ar(e, t, n, r) {
      var a,
        i = fr(e, t),
        o = e.display.view;
      if (!Ot || n == e.doc.first + e.doc.size) return {
        index: i,
        lineN: n
      };
      for (var s = e.display.viewFrom, l = 0; l < i; l++) s += o[l].size;
      if (s != t) {
        if (r > 0) {
          if (i == o.length - 1) return null;
          a = s + o[i].size - t, i++;
        } else a = s - t;
        t += a, n += a;
      }
      for (; Wt(e.doc, n) != n;) {
        if (i == (r < 0 ? 0 : o.length - 1)) return null;
        n += r * o[i - (r < 0 ? 1 : 0)].size, i += r;
      }
      return {
        index: i,
        lineN: n
      };
    }
    function gr(e) {
      for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
        var a = t[r];
        a.hidden || a.node && !a.changes || ++n;
      }
      return n;
    }
    function yr(e) {
      e.display.input.showSelection(e.display.input.prepareSelection());
    }
    function vr(e, t) {
      void 0 === t && (t = !0);
      var n = e.doc,
        r = {},
        a = r.cursors = document.createDocumentFragment(),
        i = r.selection = document.createDocumentFragment(),
        o = e.options.$customCursor;
      o && (t = !0);
      for (var s = 0; s < n.sel.ranges.length; s++) if (t || s != n.sel.primIndex) {
        var l = n.sel.ranges[s];
        if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
          var c = l.empty();
          if (o) {
            var u = o(e, l);
            u && Er(e, u, a);
          } else (c || e.options.showCursorWhenSelecting) && Er(e, l.head, a);
          c || wr(e, l, i);
        }
      }
      return r;
    }
    function Er(e, t, n) {
      var r = qn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
        a = n.appendChild(x("div", " ", "CodeMirror-cursor"));
      if (a.style.left = r.left + "px", a.style.top = r.top + "px", a.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e.getWrapperElement().className)) {
        var i = $n(e, t, "div", null, null),
          o = i.right - i.left;
        a.style.width = (o > 0 ? o : e.defaultCharWidth()) + "px";
      }
      if (r.other) {
        var s = n.appendChild(x("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
        s.style.display = "", s.style.left = r.other.left + "px", s.style.top = r.other.top + "px", s.style.height = .85 * (r.other.bottom - r.other.top) + "px";
      }
    }
    function br(e, t) {
      return e.top - t.top || e.left - t.left;
    }
    function wr(e, t, n) {
      var r = e.display,
        a = e.doc,
        i = document.createDocumentFragment(),
        o = Tn(e.display),
        s = o.left,
        l = Math.max(r.sizerWidth, xn(e) - r.sizer.offsetLeft) - o.right,
        c = "ltr" == a.direction;
      function u(e, t, n, r) {
        t < 0 && (t = 0), t = Math.round(t), r = Math.round(r), i.appendChild(x("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? l - e : n) + "px;\n                             height: " + (r - t) + "px"));
      }
      function d(t, n, r) {
        var i,
          o,
          d = $e(a, t),
          p = d.text.length;
        function f(n, r) {
          return $n(e, rt(t, n), "div", d, r);
        }
        function h(t, n, r) {
          var a = tr(e, d, null, t),
            i = "ltr" == n == ("after" == r) ? "left" : "right";
          return f("after" == r ? a.begin : a.end - (/\s/.test(d.text.charAt(a.end - 1)) ? 2 : 1), i)[i];
        }
        var _ = pe(d, a.direction);
        return function (e, t, n, r) {
          if (!e) return r(t, n, "ltr", 0);
          for (var a = !1, i = 0; i < e.length; ++i) {
            var o = e[i];
            (o.from < n && o.to > t || t == n && o.to == t) && (r(Math.max(o.from, t), Math.min(o.to, n), 1 == o.level ? "rtl" : "ltr", i), a = !0);
          }
          a || r(t, n, "ltr");
        }(_, n || 0, null == r ? p : r, function (e, t, a, d) {
          var m = "ltr" == a,
            A = f(e, m ? "left" : "right"),
            g = f(t - 1, m ? "right" : "left"),
            y = null == n && 0 == e,
            v = null == r && t == p,
            E = 0 == d,
            b = !_ || d == _.length - 1;
          if (g.top - A.top <= 3) {
            var w = (c ? v : y) && b,
              C = (c ? y : v) && E ? s : (m ? A : g).left,
              O = w ? l : (m ? g : A).right;
            u(C, A.top, O - C, A.bottom);
          } else {
            var M, S, T, k;
            m ? (M = c && y && E ? s : A.left, S = c ? l : h(e, a, "before"), T = c ? s : h(t, a, "after"), k = c && v && b ? l : g.right) : (M = c ? h(e, a, "before") : s, S = !c && y && E ? l : A.right, T = !c && v && b ? s : g.left, k = c ? h(t, a, "after") : l), u(M, A.top, S - M, A.bottom), A.bottom < g.top && u(s, A.bottom, null, g.top), u(T, g.top, k - T, g.bottom);
          }
          (!i || br(A, i) < 0) && (i = A), br(g, i) < 0 && (i = g), (!o || br(A, o) < 0) && (o = A), br(g, o) < 0 && (o = g);
        }), {
          start: i,
          end: o
        };
      }
      var p = t.from(),
        f = t.to();
      if (p.line == f.line) d(p.line, p.ch, f.ch);else {
        var h = $e(a, p.line),
          _ = $e(a, f.line),
          m = Ht(h) == Ht(_),
          A = d(p.line, p.ch, m ? h.text.length + 1 : null).end,
          g = d(f.line, m ? 0 : null, f.ch).start;
        m && (A.top < g.top - 2 ? (u(A.right, A.top, null, A.bottom), u(s, g.top, g.left, g.bottom)) : u(A.right, A.top, g.left - A.right, A.bottom)), A.bottom < g.top && u(s, A.bottom, null, g.top);
      }
      n.appendChild(i);
    }
    function Cr(e) {
      if (e.state.focused) {
        var t = e.display;
        clearInterval(t.blinker);
        var n = !0;
        t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function () {
          e.hasFocus() || Tr(e), t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden";
        }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
      }
    }
    function Or(e) {
      e.hasFocus() || (e.display.input.focus(), e.state.focused || Sr(e));
    }
    function Mr(e) {
      e.state.delayingBlurEvent = !0, setTimeout(function () {
        e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && Tr(e));
      }, 100);
    }
    function Sr(e, t) {
      e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (Ae(e, "focus", e, t), e.state.focused = !0, L(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), l && setTimeout(function () {
        return e.display.input.reset(!0);
      }, 20)), e.display.input.receivedFocus()), Cr(e));
    }
    function Tr(e, t) {
      e.state.delayingBlurEvent || (e.state.focused && (Ae(e, "blur", e, t), e.state.focused = !1, S(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
        e.state.focused || (e.display.shift = !1);
      }, 150));
    }
    function kr(e) {
      for (var t = e.display, n = t.lineDiv.offsetTop, r = Math.max(0, t.scroller.getBoundingClientRect().top), a = t.lineDiv.getBoundingClientRect().top, i = 0, l = 0; l < t.view.length; l++) {
        var c = t.view[l],
          u = e.options.lineWrapping,
          d = void 0,
          p = 0;
        if (!c.hidden) {
          if (a += c.line.height, o && s < 8) {
            var f = c.node.offsetTop + c.node.offsetHeight;
            d = f - n, n = f;
          } else {
            var h = c.node.getBoundingClientRect();
            d = h.bottom - h.top, !u && c.text.firstChild && (p = c.text.firstChild.getBoundingClientRect().right - h.left - 1);
          }
          var _ = c.line.height - d;
          if ((_ > .005 || _ < -.005) && (a < r && (i -= _), Xe(c.line, d), xr(c.line), c.rest)) for (var m = 0; m < c.rest.length; m++) xr(c.rest[m]);
          if (p > e.display.sizerWidth) {
            var A = Math.ceil(p / sr(e.display));
            A > e.display.maxLineLength && (e.display.maxLineLength = A, e.display.maxLine = c.line, e.display.maxLineChanged = !0);
          }
        }
      }
      Math.abs(i) > 2 && (t.scroller.scrollTop += i);
    }
    function xr(e) {
      if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) {
        var n = e.widgets[t],
          r = n.node.parentNode;
        r && (n.height = r.offsetHeight);
      }
    }
    function Dr(e, t, n) {
      var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
      r = Math.floor(r - Mn(e));
      var a = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
        i = et(t, r),
        o = et(t, a);
      if (n && n.ensure) {
        var s = n.ensure.from.line,
          l = n.ensure.to.line;
        s < i ? (i = s, o = et(t, Yt($e(t, s)) + e.wrapper.clientHeight)) : Math.min(l, t.lastLine()) >= o && (i = et(t, Yt($e(t, l)) - e.wrapper.clientHeight), o = l);
      }
      return {
        from: i,
        to: Math.max(o, i + 1)
      };
    }
    function Ir(e, t) {
      var n = e.display,
        r = or(e.display);
      t.top < 0 && (t.top = 0);
      var a = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
        i = Dn(e),
        o = {};
      t.bottom - t.top > i && (t.bottom = t.top + i);
      var s = e.doc.height + Sn(n),
        l = t.top < r,
        c = t.bottom > s - r;
      if (t.top < a) o.scrollTop = l ? 0 : t.top;else if (t.bottom > a + i) {
        var u = Math.min(t.top, (c ? s : t.bottom) - i);
        u != a && (o.scrollTop = u);
      }
      var d = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
        p = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft - d,
        f = xn(e) - n.gutters.offsetWidth,
        h = t.right - t.left > f;
      return h && (t.right = t.left + f), t.left < 10 ? o.scrollLeft = 0 : t.left < p ? o.scrollLeft = Math.max(0, t.left + d - (h ? 0 : 10)) : t.right > f + p - 3 && (o.scrollLeft = t.right + (h ? 0 : 10) - f), o;
    }
    function Pr(e, t) {
      null != t && (Br(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t);
    }
    function Lr(e) {
      Br(e);
      var t = e.getCursor();
      e.curOp.scrollToPos = {
        from: t,
        to: t,
        margin: e.options.cursorScrollMargin
      };
    }
    function Rr(e, t, n) {
      null == t && null == n || Br(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n);
    }
    function Br(e) {
      var t = e.curOp.scrollToPos;
      t && (e.curOp.scrollToPos = null, Nr(e, Zn(e, t.from), Zn(e, t.to), t.margin));
    }
    function Nr(e, t, n, r) {
      var a = Ir(e, {
        left: Math.min(t.left, n.left),
        top: Math.min(t.top, n.top) - r,
        right: Math.max(t.right, n.right),
        bottom: Math.max(t.bottom, n.bottom) + r
      });
      Rr(e, a.scrollLeft, a.scrollTop);
    }
    function Ur(e, t) {
      Math.abs(e.doc.scrollTop - t) < 2 || (n || da(e, {
        top: t
      }), Fr(e, t, !0), n && da(e), oa(e, 100));
    }
    function Fr(e, t, n) {
      t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)), (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
    }
    function jr(e, t, n, r) {
      t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r || (e.doc.scrollLeft = t, ha(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
    }
    function Hr(e) {
      var t = e.display,
        n = t.gutters.offsetWidth,
        r = Math.round(e.doc.height + Sn(e.display));
      return {
        clientHeight: t.scroller.clientHeight,
        viewHeight: t.wrapper.clientHeight,
        scrollWidth: t.scroller.scrollWidth,
        clientWidth: t.scroller.clientWidth,
        viewWidth: t.wrapper.clientWidth,
        barLeft: e.options.fixedGutter ? n : 0,
        docHeight: r,
        scrollHeight: r + kn(e) + t.barHeight,
        nativeBarWidth: t.nativeBarWidth,
        gutterWidth: n
      };
    }
    var Wr = function (e, t, n) {
      this.cm = n;
      var r = this.vert = x("div", [x("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
        a = this.horiz = x("div", [x("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
      r.tabIndex = a.tabIndex = -1, e(r), e(a), he(r, "scroll", function () {
        r.clientHeight && t(r.scrollTop, "vertical");
      }), he(a, "scroll", function () {
        a.clientWidth && t(a.scrollLeft, "horizontal");
      }), this.checkedZeroWidth = !1, o && s < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
    };
    Wr.prototype.update = function (e) {
      var t = e.scrollWidth > e.clientWidth + 1,
        n = e.scrollHeight > e.clientHeight + 1,
        r = e.nativeBarWidth;
      if (n) {
        this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
        var a = e.viewHeight - (t ? r : 0);
        this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + a) + "px";
      } else this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";
      if (t) {
        this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
        var i = e.viewWidth - e.barLeft - (n ? r : 0);
        this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + i) + "px";
      } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
      return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
        right: n ? r : 0,
        bottom: t ? r : 0
      };
    }, Wr.prototype.setScrollLeft = function (e) {
      this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
    }, Wr.prototype.setScrollTop = function (e) {
      this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
    }, Wr.prototype.zeroWidthHack = function () {
      var e = y && !h ? "12px" : "18px";
      this.horiz.style.height = this.vert.style.width = e, this.horiz.style.visibility = this.vert.style.visibility = "hidden", this.disableHoriz = new W(), this.disableVert = new W();
    }, Wr.prototype.enableZeroWidthBar = function (e, t, n) {
      e.style.visibility = "", t.set(1e3, function r() {
        var a = e.getBoundingClientRect();
        ("vert" == n ? document.elementFromPoint(a.right - 1, (a.top + a.bottom) / 2) : document.elementFromPoint((a.right + a.left) / 2, a.bottom - 1)) != e ? e.style.visibility = "hidden" : t.set(1e3, r);
      });
    }, Wr.prototype.clear = function () {
      var e = this.horiz.parentNode;
      e.removeChild(this.horiz), e.removeChild(this.vert);
    };
    var Kr = function () {};
    function Vr(e, t) {
      t || (t = Hr(e));
      var n = e.display.barWidth,
        r = e.display.barHeight;
      zr(e, t);
      for (var a = 0; a < 4 && n != e.display.barWidth || r != e.display.barHeight; a++) n != e.display.barWidth && e.options.lineWrapping && kr(e), zr(e, Hr(e)), n = e.display.barWidth, r = e.display.barHeight;
    }
    function zr(e, t) {
      var n = e.display,
        r = n.scrollbars.update(t);
      n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = "";
    }
    Kr.prototype.update = function () {
      return {
        bottom: 0,
        right: 0
      };
    }, Kr.prototype.setScrollLeft = function () {}, Kr.prototype.setScrollTop = function () {}, Kr.prototype.clear = function () {};
    var Yr = {
      native: Wr,
      null: Kr
    };
    function Qr(e) {
      e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && S(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new Yr[e.options.scrollbarStyle](function (t) {
        e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), he(t, "mousedown", function () {
          e.state.focused && setTimeout(function () {
            return e.display.input.focus();
          }, 0);
        }), t.setAttribute("cm-not-content", "true");
      }, function (t, n) {
        "horizontal" == n ? jr(e, t) : Ur(e, t);
      }, e), e.display.scrollbars.addClass && L(e.display.wrapper, e.display.scrollbars.addClass);
    }
    var Gr = 0;
    function $r(e) {
      var t;
      e.curOp = {
        cm: e,
        viewChanged: !1,
        startHeight: e.doc.height,
        forceUpdate: !1,
        updateInput: 0,
        typing: !1,
        changeObjs: null,
        cursorActivityHandlers: null,
        cursorActivityCalled: 0,
        selectionChanged: !1,
        updateMaxLine: !1,
        scrollLeft: null,
        scrollTop: null,
        scrollToPos: null,
        focus: !1,
        id: ++Gr,
        markArrays: null
      }, t = e.curOp, cn ? cn.ops.push(t) : t.ownsGroup = cn = {
        ops: [t],
        delayedCallbacks: []
      };
    }
    function qr(e) {
      var t = e.curOp;
      t && function (e, t) {
        var n = e.ownsGroup;
        if (n) try {
          !function (e) {
            var t = e.delayedCallbacks,
              n = 0;
            do {
              for (; n < t.length; n++) t[n].call(null);
              for (var r = 0; r < e.ops.length; r++) {
                var a = e.ops[r];
                if (a.cursorActivityHandlers) for (; a.cursorActivityCalled < a.cursorActivityHandlers.length;) a.cursorActivityHandlers[a.cursorActivityCalled++].call(null, a.cm);
              }
            } while (n < t.length);
          }(n);
        } finally {
          cn = null, t(n);
        }
      }(t, function (e) {
        for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
        !function (e) {
          for (var t = e.ops, n = 0; n < t.length; n++) Zr(t[n]);
          for (var r = 0; r < t.length; r++) Xr(t[r]);
          for (var a = 0; a < t.length; a++) Jr(t[a]);
          for (var i = 0; i < t.length; i++) ea(t[i]);
          for (var o = 0; o < t.length; o++) ta(t[o]);
        }(e);
      });
    }
    function Zr(e) {
      var t = e.cm,
        n = t.display;
      (function (e) {
        var t = e.display;
        !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = kn(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = kn(e) + "px", t.scrollbarsClipped = !0);
      })(t), e.updateMaxLine && Gt(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new la(t, e.mustUpdate && {
        top: e.scrollTop,
        ensure: e.scrollToPos
      }, e.forceUpdate);
    }
    function Xr(e) {
      e.updatedDisplay = e.mustUpdate && ca(e.cm, e.update);
    }
    function Jr(e) {
      var t = e.cm,
        n = t.display;
      e.updatedDisplay && kr(t), e.barMeasure = Hr(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Pn(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + kn(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - xn(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection());
    }
    function ea(e) {
      var t = e.cm;
      null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && jr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
      var n = e.focus && e.focus == P(N(t));
      e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && Vr(t, e.barMeasure), e.updatedDisplay && fa(t, e.barMeasure), e.selectionChanged && Cr(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && Or(e.cm);
    }
    function ta(e) {
      var t = e.cm,
        n = t.display,
        r = t.doc;
      e.updatedDisplay && ua(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != e.scrollTop && Fr(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && jr(t, e.scrollLeft, !0, !0), e.scrollToPos && function (e, t) {
        if (!ge(e, "scrollCursorIntoView")) {
          var n = e.display,
            r = n.sizer.getBoundingClientRect(),
            a = null,
            i = n.wrapper.ownerDocument;
          if (t.top + r.top < 0 ? a = !0 : t.bottom + r.top > (i.defaultView.innerHeight || i.documentElement.clientHeight) && (a = !1), null != a && !_) {
            var o = x("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - Mn(e.display)) + "px;\n                         height: " + (t.bottom - t.top + kn(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
            e.display.lineSpace.appendChild(o), o.scrollIntoView(a), e.display.lineSpace.removeChild(o);
          }
        }
      }(t, function (e, t, n, r) {
        var a;
        null == r && (r = 0), e.options.lineWrapping || t != n || (n = "before" == t.sticky ? rt(t.line, t.ch + 1, "before") : t, t = t.ch ? rt(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t);
        for (var i = 0; i < 5; i++) {
          var o = !1,
            s = qn(e, t),
            l = n && n != t ? qn(e, n) : s,
            c = Ir(e, a = {
              left: Math.min(s.left, l.left),
              top: Math.min(s.top, l.top) - r,
              right: Math.max(s.left, l.left),
              bottom: Math.max(s.bottom, l.bottom) + r
            }),
            u = e.doc.scrollTop,
            d = e.doc.scrollLeft;
          if (null != c.scrollTop && (Ur(e, c.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (o = !0)), null != c.scrollLeft && (jr(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - d) > 1 && (o = !0)), !o) break;
        }
        return a;
      }(t, ut(r, e.scrollToPos.from), ut(r, e.scrollToPos.to), e.scrollToPos.margin));
      var a = e.maybeHiddenMarkers,
        i = e.maybeUnhiddenMarkers;
      if (a) for (var o = 0; o < a.length; ++o) a[o].lines.length || Ae(a[o], "hide");
      if (i) for (var s = 0; s < i.length; ++s) i[s].lines.length && Ae(i[s], "unhide");
      n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && Ae(t, "changes", t, e.changeObjs), e.update && e.update.finish();
    }
    function na(e, t) {
      if (e.curOp) return t();
      $r(e);
      try {
        return t();
      } finally {
        qr(e);
      }
    }
    function ra(e, t) {
      return function () {
        if (e.curOp) return t.apply(e, arguments);
        $r(e);
        try {
          return t.apply(e, arguments);
        } finally {
          qr(e);
        }
      };
    }
    function aa(e) {
      return function () {
        if (this.curOp) return e.apply(this, arguments);
        $r(this);
        try {
          return e.apply(this, arguments);
        } finally {
          qr(this);
        }
      };
    }
    function ia(e) {
      return function () {
        var t = this.cm;
        if (!t || t.curOp) return e.apply(this, arguments);
        $r(t);
        try {
          return e.apply(this, arguments);
        } finally {
          qr(t);
        }
      };
    }
    function oa(e, t) {
      e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, F(sa, e));
    }
    function sa(e) {
      var t = e.doc;
      if (!(t.highlightFrontier >= e.display.viewTo)) {
        var n = +new Date() + e.options.workTime,
          r = mt(e, t.highlightFrontier),
          a = [];
        t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (i) {
          if (r.line >= e.display.viewFrom) {
            var o = i.styles,
              s = i.text.length > e.options.maxHighlightLength ? ze(t.mode, r.state) : null,
              l = ht(e, i, r, !0);
            s && (r.state = s), i.styles = l.styles;
            var c = i.styleClasses,
              u = l.classes;
            u ? i.styleClasses = u : c && (i.styleClasses = null);
            for (var d = !o || o.length != i.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), p = 0; !d && p < o.length; ++p) d = o[p] != i.styles[p];
            d && a.push(r.line), i.stateAfter = r.save(), r.nextLine();
          } else i.text.length <= e.options.maxHighlightLength && At(e, i.text, r), i.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
          if (+new Date() > n) return oa(e, e.options.workDelay), !0;
        }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), a.length && na(e, function () {
          for (var t = 0; t < a.length; t++) _r(e, a[t], "text");
        });
      }
    }
    var la = function (e, t, n) {
      var r = e.display;
      this.viewport = t, this.visible = Dr(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = xn(e), this.force = n, this.dims = lr(e), this.events = [];
    };
    function ca(e, t) {
      var n = e.display,
        r = e.doc;
      if (t.editorIsHidden) return mr(e), !1;
      if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == gr(e)) return !1;
      _a(e) && (mr(e), t.dims = lr(e));
      var a = r.first + r.size,
        i = Math.max(t.visible.from - e.options.viewportMargin, r.first),
        o = Math.min(a, t.visible.to + e.options.viewportMargin);
      n.viewFrom < i && i - n.viewFrom < 20 && (i = Math.max(r.first, n.viewFrom)), n.viewTo > o && n.viewTo - o < 20 && (o = Math.min(a, n.viewTo)), Ot && (i = Wt(e.doc, i), o = Kt(e.doc, o));
      var s = i != n.viewFrom || o != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
      (function (e, t, n) {
        var r = e.display;
        0 == r.view.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = ln(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = ln(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(fr(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(ln(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, fr(e, n)))), r.viewTo = n;
      })(e, i, o), n.viewOffset = Yt($e(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
      var c = gr(e);
      if (!s && 0 == c && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;
      var u = function (e) {
        if (e.hasFocus()) return null;
        var t = P(N(e));
        if (!t || !I(e.display.lineDiv, t)) return null;
        var n = {
          activeElt: t
        };
        if (window.getSelection) {
          var r = U(e).getSelection();
          r.anchorNode && r.extend && I(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset);
        }
        return n;
      }(e);
      return c > 4 && (n.lineDiv.style.display = "none"), function (e, t, n) {
        var r = e.display,
          a = e.options.lineNumbers,
          i = r.lineDiv,
          o = i.firstChild;
        function s(t) {
          var n = t.nextSibling;
          return l && y && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n;
        }
        for (var c = r.view, u = r.viewFrom, d = 0; d < c.length; d++) {
          var p = c[d];
          if (p.hidden) ;else if (p.node && p.node.parentNode == i) {
            for (; o != p.node;) o = s(o);
            var f = a && null != t && t <= u && p.lineNumber;
            p.changes && (K(p.changes, "gutter") > -1 && (f = !1), fn(e, p, u, n)), f && (T(p.lineNumber), p.lineNumber.appendChild(document.createTextNode(nt(e.options, u)))), o = p.node.nextSibling;
          } else {
            var h = vn(e, p, u, n);
            i.insertBefore(h, o);
          }
          u += p.size;
        }
        for (; o;) o = s(o);
      }(e, n.updateLineNumbers, t.dims), c > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, function (e) {
        if (e && e.activeElt && e.activeElt != P(e.activeElt.ownerDocument) && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && I(document.body, e.anchorNode) && I(document.body, e.focusNode))) {
          var t = e.activeElt.ownerDocument,
            n = t.defaultView.getSelection(),
            r = t.createRange();
          r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), n.removeAllRanges(), n.addRange(r), n.extend(e.focusNode, e.focusOffset);
        }
      }(u), T(n.cursorDiv), T(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, s && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, oa(e, 400)), n.updateLineNumbers = null, !0;
    }
    function ua(e, t) {
      for (var n = t.viewport, r = !0;; r = !1) {
        if (r && e.options.lineWrapping && t.oldDisplayWidth != xn(e)) r && (t.visible = Dr(e.display, e.doc, n));else if (n && null != n.top && (n = {
          top: Math.min(e.doc.height + Sn(e.display) - Dn(e), n.top)
        }), t.visible = Dr(e.display, e.doc, n), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo) break;
        if (!ca(e, t)) break;
        kr(e);
        var a = Hr(e);
        yr(e), Vr(e, a), fa(e, a), t.force = !1;
      }
      t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
    }
    function da(e, t) {
      var n = new la(e, t);
      if (ca(e, n)) {
        kr(e), ua(e, n);
        var r = Hr(e);
        yr(e), Vr(e, r), fa(e, r), n.finish();
      }
    }
    function pa(e) {
      var t = e.gutters.offsetWidth;
      e.sizer.style.marginLeft = t + "px", dn(e, "gutterChanged", e);
    }
    function fa(e, t) {
      e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + kn(e) + "px";
    }
    function ha(e) {
      var t = e.display,
        n = t.view;
      if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
        for (var r = cr(t) - t.scroller.scrollLeft + e.doc.scrollLeft, a = t.gutters.offsetWidth, i = r + "px", o = 0; o < n.length; o++) if (!n[o].hidden) {
          e.options.fixedGutter && (n[o].gutter && (n[o].gutter.style.left = i), n[o].gutterBackground && (n[o].gutterBackground.style.left = i));
          var s = n[o].alignable;
          if (s) for (var l = 0; l < s.length; l++) s[l].style.left = i;
        }
        e.options.fixedGutter && (t.gutters.style.left = r + a + "px");
      }
    }
    function _a(e) {
      if (!e.options.lineNumbers) return !1;
      var t = e.doc,
        n = nt(e.options, t.first + t.size - 1),
        r = e.display;
      if (n.length != r.lineNumChars) {
        var a = r.measure.appendChild(x("div", [x("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
          i = a.firstChild.offsetWidth,
          o = a.offsetWidth - i;
        return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(i, r.lineGutter.offsetWidth - o) + 1, r.lineNumWidth = r.lineNumInnerWidth + o, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", pa(e.display), !0;
      }
      return !1;
    }
    function ma(e, t) {
      for (var n = [], r = !1, a = 0; a < e.length; a++) {
        var i = e[a],
          o = null;
        if ("string" != typeof i && (o = i.style, i = i.className), "CodeMirror-linenumbers" == i) {
          if (!t) continue;
          r = !0;
        }
        n.push({
          className: i,
          style: o
        });
      }
      return t && !r && n.push({
        className: "CodeMirror-linenumbers",
        style: null
      }), n;
    }
    function Aa(e) {
      var t = e.gutters,
        n = e.gutterSpecs;
      T(t), e.lineGutter = null;
      for (var r = 0; r < n.length; ++r) {
        var a = n[r],
          i = a.className,
          o = a.style,
          s = t.appendChild(x("div", null, "CodeMirror-gutter " + i));
        o && (s.style.cssText = o), "CodeMirror-linenumbers" == i && (e.lineGutter = s, s.style.width = (e.lineNumWidth || 1) + "px");
      }
      t.style.display = n.length ? "" : "none", pa(e);
    }
    function ga(e) {
      Aa(e.display), hr(e), ha(e);
    }
    function ya(e, t, r, a) {
      var i = this;
      this.input = r, i.scrollbarFiller = x("div", null, "CodeMirror-scrollbar-filler"), i.scrollbarFiller.setAttribute("cm-not-content", "true"), i.gutterFiller = x("div", null, "CodeMirror-gutter-filler"), i.gutterFiller.setAttribute("cm-not-content", "true"), i.lineDiv = D("div", null, "CodeMirror-code"), i.selectionDiv = x("div", null, null, "position: relative; z-index: 1"), i.cursorDiv = x("div", null, "CodeMirror-cursors"), i.measure = x("div", null, "CodeMirror-measure"), i.lineMeasure = x("div", null, "CodeMirror-measure"), i.lineSpace = D("div", [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv], null, "position: relative; outline: none");
      var c = D("div", [i.lineSpace], "CodeMirror-lines");
      i.mover = x("div", [c], null, "position: relative"), i.sizer = x("div", [i.mover], "CodeMirror-sizer"), i.sizerWidth = null, i.heightForcer = x("div", null, null, "position: absolute; height: 50px; width: 1px;"), i.gutters = x("div", null, "CodeMirror-gutters"), i.lineGutter = null, i.scroller = x("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"), i.scroller.setAttribute("tabIndex", "-1"), i.wrapper = x("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"), u && d >= 105 && (i.wrapper.style.clipPath = "inset(0px)"), i.wrapper.setAttribute("translate", "no"), o && s < 8 && (i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0), l || n && g || (i.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)), i.viewFrom = i.viewTo = t.first, i.reportedViewFrom = i.reportedViewTo = t.first, i.view = [], i.renderedView = null, i.externalMeasured = null, i.viewOffset = 0, i.lastWrapHeight = i.lastWrapWidth = 0, i.updateLineNumbers = null, i.nativeBarWidth = i.barHeight = i.barWidth = 0, i.scrollbarsClipped = !1, i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null, i.alignWidgets = !1, i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null, i.maxLine = null, i.maxLineLength = 0, i.maxLineChanged = !1, i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null, i.shift = !1, i.selForContextMenu = null, i.activeTouch = null, i.gutterSpecs = ma(a.gutters, a.lineNumbers), Aa(i), r.init(i);
    }
    la.prototype.signal = function (e, t) {
      ve(e, t) && this.events.push(arguments);
    }, la.prototype.finish = function () {
      for (var e = 0; e < this.events.length; e++) Ae.apply(null, this.events[e]);
    };
    var va = 0,
      Ea = null;
    function ba(e) {
      var t = e.wheelDeltaX,
        n = e.wheelDeltaY;
      return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), {
        x: t,
        y: n
      };
    }
    function wa(e) {
      var t = ba(e);
      return t.x *= Ea, t.y *= Ea, t;
    }
    function Ca(e, t) {
      u && 102 == d && (null == e.display.chromeScrollHack ? e.display.sizer.style.pointerEvents = "none" : clearTimeout(e.display.chromeScrollHack), e.display.chromeScrollHack = setTimeout(function () {
        e.display.chromeScrollHack = null, e.display.sizer.style.pointerEvents = "";
      }, 100));
      var r = ba(t),
        a = r.x,
        i = r.y,
        o = Ea;
      0 === t.deltaMode && (a = t.deltaX, i = t.deltaY, o = 1);
      var s = e.display,
        c = s.scroller,
        f = c.scrollWidth > c.clientWidth,
        h = c.scrollHeight > c.clientHeight;
      if (a && f || i && h) {
        if (i && y && l) e: for (var _ = t.target, m = s.view; _ != c; _ = _.parentNode) for (var A = 0; A < m.length; A++) if (m[A].node == _) {
          e.display.currentWheelTarget = _;
          break e;
        }
        if (a && !n && !p && null != o) return i && h && Ur(e, Math.max(0, c.scrollTop + i * o)), jr(e, Math.max(0, c.scrollLeft + a * o)), (!i || i && h) && be(t), void (s.wheelStartX = null);
        if (i && null != o) {
          var g = i * o,
            v = e.doc.scrollTop,
            E = v + s.wrapper.clientHeight;
          g < 0 ? v = Math.max(0, v + g - 50) : E = Math.min(e.doc.height, E + g + 50), da(e, {
            top: v,
            bottom: E
          });
        }
        va < 20 && 0 !== t.deltaMode && (null == s.wheelStartX ? (s.wheelStartX = c.scrollLeft, s.wheelStartY = c.scrollTop, s.wheelDX = a, s.wheelDY = i, setTimeout(function () {
          if (null != s.wheelStartX) {
            var e = c.scrollLeft - s.wheelStartX,
              t = c.scrollTop - s.wheelStartY,
              n = t && s.wheelDY && t / s.wheelDY || e && s.wheelDX && e / s.wheelDX;
            s.wheelStartX = s.wheelStartY = null, n && (Ea = (Ea * va + n) / (va + 1), ++va);
          }
        }, 200)) : (s.wheelDX += a, s.wheelDY += i));
      }
    }
    o ? Ea = -.53 : n ? Ea = 15 : u ? Ea = -.7 : f && (Ea = -1 / 3);
    var Oa = function (e, t) {
      this.ranges = e, this.primIndex = t;
    };
    Oa.prototype.primary = function () {
      return this.ranges[this.primIndex];
    }, Oa.prototype.equals = function (e) {
      if (e == this) return !0;
      if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
      for (var t = 0; t < this.ranges.length; t++) {
        var n = this.ranges[t],
          r = e.ranges[t];
        if (!it(n.anchor, r.anchor) || !it(n.head, r.head)) return !1;
      }
      return !0;
    }, Oa.prototype.deepCopy = function () {
      for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new Ma(ot(this.ranges[t].anchor), ot(this.ranges[t].head));
      return new Oa(e, this.primIndex);
    }, Oa.prototype.somethingSelected = function () {
      for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
      return !1;
    }, Oa.prototype.contains = function (e, t) {
      t || (t = e);
      for (var n = 0; n < this.ranges.length; n++) {
        var r = this.ranges[n];
        if (at(t, r.from()) >= 0 && at(e, r.to()) <= 0) return n;
      }
      return -1;
    };
    var Ma = function (e, t) {
      this.anchor = e, this.head = t;
    };
    function Sa(e, t, n) {
      var r = e && e.options.selectionsMayTouch,
        a = t[n];
      t.sort(function (e, t) {
        return at(e.from(), t.from());
      }), n = K(t, a);
      for (var i = 1; i < t.length; i++) {
        var o = t[i],
          s = t[i - 1],
          l = at(s.to(), o.from());
        if (r && !o.empty() ? l > 0 : l >= 0) {
          var c = lt(s.from(), o.from()),
            u = st(s.to(), o.to()),
            d = s.empty() ? o.from() == o.head : s.from() == s.head;
          i <= n && --n, t.splice(--i, 2, new Ma(d ? u : c, d ? c : u));
        }
      }
      return new Oa(t, n);
    }
    function Ta(e, t) {
      return new Oa([new Ma(e, t || e)], 0);
    }
    function ka(e) {
      return e.text ? rt(e.from.line + e.text.length - 1, Z(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to;
    }
    function xa(e, t) {
      if (at(e, t.from) < 0) return e;
      if (at(e, t.to) <= 0) return ka(t);
      var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
        r = e.ch;
      return e.line == t.to.line && (r += ka(t).ch - t.to.ch), rt(n, r);
    }
    function Da(e, t) {
      for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
        var a = e.sel.ranges[r];
        n.push(new Ma(xa(a.anchor, t), xa(a.head, t)));
      }
      return Sa(e.cm, n, e.sel.primIndex);
    }
    function Ia(e, t, n) {
      return e.line == t.line ? rt(n.line, e.ch - t.ch + n.ch) : rt(n.line + (e.line - t.line), e.ch);
    }
    function Pa(e) {
      e.doc.mode = We(e.options, e.doc.modeOption), La(e);
    }
    function La(e) {
      e.doc.iter(function (e) {
        e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
      }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, oa(e, 100), e.state.modeGen++, e.curOp && hr(e);
    }
    function Ra(e, t) {
      return 0 == t.from.ch && 0 == t.to.ch && "" == Z(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
    }
    function Ba(e, t, n, r) {
      function a(e) {
        return n ? n[e] : null;
      }
      function i(e, n, a) {
        (function (e, t, n, r) {
          e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Dt(e), It(e, n);
          var a = r ? r(e) : 1;
          a != e.height && Xe(e, a);
        })(e, n, a, r), dn(e, "change", e, t);
      }
      function o(e, t) {
        for (var n = [], i = e; i < t; ++i) n.push(new $t(c[i], a(i), r));
        return n;
      }
      var s = t.from,
        l = t.to,
        c = t.text,
        u = $e(e, s.line),
        d = $e(e, l.line),
        p = Z(c),
        f = a(c.length - 1),
        h = l.line - s.line;
      if (t.full) e.insert(0, o(0, c.length)), e.remove(c.length, e.size - c.length);else if (Ra(e, t)) {
        var _ = o(0, c.length - 1);
        i(d, d.text, f), h && e.remove(s.line, h), _.length && e.insert(s.line, _);
      } else if (u == d) {
        if (1 == c.length) i(u, u.text.slice(0, s.ch) + p + u.text.slice(l.ch), f);else {
          var m = o(1, c.length - 1);
          m.push(new $t(p + u.text.slice(l.ch), f, r)), i(u, u.text.slice(0, s.ch) + c[0], a(0)), e.insert(s.line + 1, m);
        }
      } else if (1 == c.length) i(u, u.text.slice(0, s.ch) + c[0] + d.text.slice(l.ch), a(0)), e.remove(s.line + 1, h);else {
        i(u, u.text.slice(0, s.ch) + c[0], a(0)), i(d, p + d.text.slice(l.ch), f);
        var A = o(1, c.length - 1);
        h > 1 && e.remove(s.line + 1, h - 1), e.insert(s.line + 1, A);
      }
      dn(e, "change", e, t);
    }
    function Na(e, t, n) {
      !function e(r, a, i) {
        if (r.linked) for (var o = 0; o < r.linked.length; ++o) {
          var s = r.linked[o];
          if (s.doc != a) {
            var l = i && s.sharedHist;
            n && !l || (t(s.doc, l), e(s.doc, r, l));
          }
        }
      }(e, null, !0);
    }
    function Ua(e, t) {
      if (t.cm) throw new Error("This document is already in use.");
      e.doc = t, t.cm = e, dr(e), Pa(e), Fa(e), e.options.direction = t.direction, e.options.lineWrapping || Gt(e), e.options.mode = t.modeOption, hr(e);
    }
    function Fa(e) {
      ("rtl" == e.doc.direction ? L : S)(e.display.lineDiv, "CodeMirror-rtl");
    }
    function ja(e) {
      this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1;
    }
    function Ha(e, t) {
      var n = {
        from: ot(t.from),
        to: ka(t),
        text: qe(e, t.from, t.to)
      };
      return Ya(e, n, t.from.line, t.to.line + 1), Na(e, function (e) {
        return Ya(e, n, t.from.line, t.to.line + 1);
      }, !0), n;
    }
    function Wa(e) {
      for (; e.length && Z(e).ranges;) e.pop();
    }
    function Ka(e, t, n, r) {
      var a = e.history;
      a.undone.length = 0;
      var i,
        o,
        s = +new Date();
      if ((a.lastOp == r || a.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && a.lastModTime > s - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (i = function (e, t) {
        return t ? (Wa(e.done), Z(e.done)) : e.done.length && !Z(e.done).ranges ? Z(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), Z(e.done)) : void 0;
      }(a, a.lastOp == r))) o = Z(i.changes), 0 == at(t.from, t.to) && 0 == at(t.from, o.to) ? o.to = ka(t) : i.changes.push(Ha(e, t));else {
        var l = Z(a.done);
        for (l && l.ranges || za(e.sel, a.done), i = {
          changes: [Ha(e, t)],
          generation: a.generation
        }, a.done.push(i); a.done.length > a.undoDepth;) a.done.shift(), a.done[0].ranges || a.done.shift();
      }
      a.done.push(n), a.generation = ++a.maxGeneration, a.lastModTime = a.lastSelTime = s, a.lastOp = a.lastSelOp = r, a.lastOrigin = a.lastSelOrigin = t.origin, o || Ae(e, "historyAdded");
    }
    function Va(e, t, n, r) {
      var a = e.history,
        i = r && r.origin;
      n == a.lastSelOp || i && a.lastSelOrigin == i && (a.lastModTime == a.lastSelTime && a.lastOrigin == i || function (e, t, n, r) {
        var a = t.charAt(0);
        return "*" == a || "+" == a && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
      }(e, i, Z(a.done), t)) ? a.done[a.done.length - 1] = t : za(t, a.done), a.lastSelTime = +new Date(), a.lastSelOrigin = i, a.lastSelOp = n, r && !1 !== r.clearRedo && Wa(a.undone);
    }
    function za(e, t) {
      var n = Z(t);
      n && n.ranges && n.equals(e) || t.push(e);
    }
    function Ya(e, t, n, r) {
      var a = t["spans_" + e.id],
        i = 0;
      e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
        n.markedSpans && ((a || (a = t["spans_" + e.id] = {}))[i] = n.markedSpans), ++i;
      });
    }
    function Qa(e) {
      if (!e) return null;
      for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
      return t ? t.length ? t : null : e;
    }
    function Ga(e, t) {
      var n = function (e, t) {
          var n = t["spans_" + e.id];
          if (!n) return null;
          for (var r = [], a = 0; a < t.text.length; ++a) r.push(Qa(n[a]));
          return r;
        }(e, t),
        r = kt(e, t);
      if (!n) return r;
      if (!r) return n;
      for (var a = 0; a < n.length; ++a) {
        var i = n[a],
          o = r[a];
        if (i && o) e: for (var s = 0; s < o.length; ++s) {
          for (var l = o[s], c = 0; c < i.length; ++c) if (i[c].marker == l.marker) continue e;
          i.push(l);
        } else o && (n[a] = o);
      }
      return n;
    }
    function $a(e, t, n) {
      for (var r = [], a = 0; a < e.length; ++a) {
        var i = e[a];
        if (i.ranges) r.push(n ? Oa.prototype.deepCopy.call(i) : i);else {
          var o = i.changes,
            s = [];
          r.push({
            changes: s
          });
          for (var l = 0; l < o.length; ++l) {
            var c = o[l],
              u = void 0;
            if (s.push({
              from: c.from,
              to: c.to,
              text: c.text
            }), t) for (var d in c) (u = d.match(/^spans_(\d+)$/)) && K(t, Number(u[1])) > -1 && (Z(s)[d] = c[d], delete c[d]);
          }
        }
      }
      return r;
    }
    function qa(e, t, n, r) {
      if (r) {
        var a = e.anchor;
        if (n) {
          var i = at(t, a) < 0;
          i != at(n, a) < 0 ? (a = t, t = n) : i != at(t, n) < 0 && (t = n);
        }
        return new Ma(a, t);
      }
      return new Ma(n || t, t);
    }
    function Za(e, t, n, r, a) {
      null == a && (a = e.cm && (e.cm.display.shift || e.extend)), ni(e, new Oa([qa(e.sel.primary(), t, n, a)], 0), r);
    }
    function Xa(e, t, n) {
      for (var r = [], a = e.cm && (e.cm.display.shift || e.extend), i = 0; i < e.sel.ranges.length; i++) r[i] = qa(e.sel.ranges[i], t[i], null, a);
      ni(e, Sa(e.cm, r, e.sel.primIndex), n);
    }
    function Ja(e, t, n, r) {
      var a = e.sel.ranges.slice(0);
      a[t] = n, ni(e, Sa(e.cm, a, e.sel.primIndex), r);
    }
    function ei(e, t, n, r) {
      ni(e, Ta(t, n), r);
    }
    function ti(e, t, n) {
      var r = e.history.done,
        a = Z(r);
      a && a.ranges ? (r[r.length - 1] = t, ri(e, t, n)) : ni(e, t, n);
    }
    function ni(e, t, n) {
      ri(e, t, n), Va(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
    }
    function ri(e, t, n) {
      (ve(e, "beforeSelectionChange") || e.cm && ve(e.cm, "beforeSelectionChange")) && (t = function (e, t, n) {
        var r = {
          ranges: t.ranges,
          update: function (t) {
            this.ranges = [];
            for (var n = 0; n < t.length; n++) this.ranges[n] = new Ma(ut(e, t[n].anchor), ut(e, t[n].head));
          },
          origin: n && n.origin
        };
        return Ae(e, "beforeSelectionChange", e, r), e.cm && Ae(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? Sa(e.cm, r.ranges, r.ranges.length - 1) : t;
      }(e, t, n));
      var r = n && n.bias || (at(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
      ai(e, oi(e, t, r, !0)), n && !1 === n.scroll || !e.cm || "nocursor" == e.cm.getOption("readOnly") || Lr(e.cm);
    }
    function ai(e, t) {
      t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, ye(e.cm)), dn(e, "cursorActivity", e));
    }
    function ii(e) {
      ai(e, oi(e, e.sel, null, !1));
    }
    function oi(e, t, n, r) {
      for (var a, i = 0; i < t.ranges.length; i++) {
        var o = t.ranges[i],
          s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[i],
          l = li(e, o.anchor, s && s.anchor, n, r),
          c = o.head == o.anchor ? l : li(e, o.head, s && s.head, n, r);
        (a || l != o.anchor || c != o.head) && (a || (a = t.ranges.slice(0, i)), a[i] = new Ma(l, c));
      }
      return a ? Sa(e.cm, a, t.primIndex) : t;
    }
    function si(e, t, n, r, a) {
      var i = $e(e, t.line);
      if (i.markedSpans) for (var o = 0; o < i.markedSpans.length; ++o) {
        var s = i.markedSpans[o],
          l = s.marker,
          c = "selectLeft" in l ? !l.selectLeft : l.inclusiveLeft,
          u = "selectRight" in l ? !l.selectRight : l.inclusiveRight;
        if ((null == s.from || (c ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (u ? s.to >= t.ch : s.to > t.ch))) {
          if (a && (Ae(l, "beforeCursorEnter"), l.explicitlyCleared)) {
            if (i.markedSpans) {
              --o;
              continue;
            }
            break;
          }
          if (!l.atomic) continue;
          if (n) {
            var d = l.find(r < 0 ? 1 : -1),
              p = void 0;
            if ((r < 0 ? u : c) && (d = ci(e, d, -r, d && d.line == t.line ? i : null)), d && d.line == t.line && (p = at(d, n)) && (r < 0 ? p < 0 : p > 0)) return si(e, d, t, r, a);
          }
          var f = l.find(r < 0 ? -1 : 1);
          return (r < 0 ? c : u) && (f = ci(e, f, r, f.line == t.line ? i : null)), f ? si(e, f, t, r, a) : null;
        }
      }
      return t;
    }
    function li(e, t, n, r, a) {
      var i = r || 1;
      return si(e, t, n, i, a) || !a && si(e, t, n, i, !0) || si(e, t, n, -i, a) || !a && si(e, t, n, -i, !0) || (e.cantEdit = !0, rt(e.first, 0));
    }
    function ci(e, t, n, r) {
      return n < 0 && 0 == t.ch ? t.line > e.first ? ut(e, rt(t.line - 1)) : null : n > 0 && t.ch == (r || $e(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? rt(t.line + 1, 0) : null : new rt(t.line, t.ch + n);
    }
    function ui(e) {
      e.setSelection(rt(e.firstLine(), 0), rt(e.lastLine()), z);
    }
    function di(e, t, n) {
      var r = {
        canceled: !1,
        from: t.from,
        to: t.to,
        text: t.text,
        origin: t.origin,
        cancel: function () {
          return r.canceled = !0;
        }
      };
      return n && (r.update = function (t, n, a, i) {
        t && (r.from = ut(e, t)), n && (r.to = ut(e, n)), a && (r.text = a), void 0 !== i && (r.origin = i);
      }), Ae(e, "beforeChange", e, r), e.cm && Ae(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : {
        from: r.from,
        to: r.to,
        text: r.text,
        origin: r.origin
      };
    }
    function pi(e, t, n) {
      if (e.cm) {
        if (!e.cm.curOp) return ra(e.cm, pi)(e, t, n);
        if (e.cm.state.suppressEdits) return;
      }
      if (!(ve(e, "beforeChange") || e.cm && ve(e.cm, "beforeChange")) || (t = di(e, t, !0))) {
        var r = Ct && !n && function (e, t, n) {
          var r = null;
          if (e.iter(t.line, n.line + 1, function (e) {
            if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
              var n = e.markedSpans[t].marker;
              !n.readOnly || r && -1 != K(r, n) || (r || (r = [])).push(n);
            }
          }), !r) return null;
          for (var a = [{
              from: t,
              to: n
            }], i = 0; i < r.length; ++i) for (var o = r[i], s = o.find(0), l = 0; l < a.length; ++l) {
            var c = a[l];
            if (!(at(c.to, s.from) < 0 || at(c.from, s.to) > 0)) {
              var u = [l, 1],
                d = at(c.from, s.from),
                p = at(c.to, s.to);
              (d < 0 || !o.inclusiveLeft && !d) && u.push({
                from: c.from,
                to: s.from
              }), (p > 0 || !o.inclusiveRight && !p) && u.push({
                from: s.to,
                to: c.to
              }), a.splice.apply(a, u), l += u.length - 3;
            }
          }
          return a;
        }(e, t.from, t.to);
        if (r) for (var a = r.length - 1; a >= 0; --a) fi(e, {
          from: r[a].from,
          to: r[a].to,
          text: a ? [""] : t.text,
          origin: t.origin
        });else fi(e, t);
      }
    }
    function fi(e, t) {
      if (1 != t.text.length || "" != t.text[0] || 0 != at(t.from, t.to)) {
        var n = Da(e, t);
        Ka(e, t, n, e.cm ? e.cm.curOp.id : NaN), mi(e, t, n, kt(e, t));
        var r = [];
        Na(e, function (e, n) {
          n || -1 != K(r, e.history) || (vi(e.history, t), r.push(e.history)), mi(e, t, null, kt(e, t));
        });
      }
    }
    function hi(e, t, n) {
      var r = e.cm && e.cm.state.suppressEdits;
      if (!r || n) {
        for (var a, i = e.history, o = e.sel, s = "undo" == t ? i.done : i.undone, l = "undo" == t ? i.undone : i.done, c = 0; c < s.length && (a = s[c], n ? !a.ranges || a.equals(e.sel) : a.ranges); c++);
        if (c != s.length) {
          for (i.lastOrigin = i.lastSelOrigin = null;;) {
            if (!(a = s.pop()).ranges) {
              if (r) return void s.push(a);
              break;
            }
            if (za(a, l), n && !a.equals(e.sel)) return void ni(e, a, {
              clearRedo: !1
            });
            o = a;
          }
          var u = [];
          za(o, l), l.push({
            changes: u,
            generation: i.generation
          }), i.generation = a.generation || ++i.maxGeneration;
          for (var d = ve(e, "beforeChange") || e.cm && ve(e.cm, "beforeChange"), p = function (n) {
              var r = a.changes[n];
              if (r.origin = t, d && !di(e, r, !1)) return s.length = 0, {};
              u.push(Ha(e, r));
              var i = n ? Da(e, r) : Z(s);
              mi(e, r, i, Ga(e, r)), !n && e.cm && e.cm.scrollIntoView({
                from: r.from,
                to: ka(r)
              });
              var o = [];
              Na(e, function (e, t) {
                t || -1 != K(o, e.history) || (vi(e.history, r), o.push(e.history)), mi(e, r, null, Ga(e, r));
              });
            }, f = a.changes.length - 1; f >= 0; --f) {
            var h = p(f);
            if (h) return h.v;
          }
        }
      }
    }
    function _i(e, t) {
      if (0 != t && (e.first += t, e.sel = new Oa(X(e.sel.ranges, function (e) {
        return new Ma(rt(e.anchor.line + t, e.anchor.ch), rt(e.head.line + t, e.head.ch));
      }), e.sel.primIndex), e.cm)) {
        hr(e.cm, e.first, e.first - t, t);
        for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) _r(e.cm, r, "gutter");
      }
    }
    function mi(e, t, n, r) {
      if (e.cm && !e.cm.curOp) return ra(e.cm, mi)(e, t, n, r);
      if (t.to.line < e.first) _i(e, t.text.length - 1 - (t.to.line - t.from.line));else if (!(t.from.line > e.lastLine())) {
        if (t.from.line < e.first) {
          var a = t.text.length - 1 - (e.first - t.from.line);
          _i(e, a), t = {
            from: rt(e.first, 0),
            to: rt(t.to.line + a, t.to.ch),
            text: [Z(t.text)],
            origin: t.origin
          };
        }
        var i = e.lastLine();
        t.to.line > i && (t = {
          from: t.from,
          to: rt(i, $e(e, i).text.length),
          text: [t.text[0]],
          origin: t.origin
        }), t.removed = qe(e, t.from, t.to), n || (n = Da(e, t)), e.cm ? function (e, t, n) {
          var r = e.doc,
            a = e.display,
            i = t.from,
            o = t.to,
            s = !1,
            l = i.line;
          e.options.lineWrapping || (l = Je(Ht($e(r, i.line))), r.iter(l, o.line + 1, function (e) {
            if (e == a.maxLine) return s = !0, !0;
          })), r.sel.contains(t.from, t.to) > -1 && ye(e), Ba(r, t, n, ur(e)), e.options.lineWrapping || (r.iter(l, i.line + t.text.length, function (e) {
            var t = Qt(e);
            t > a.maxLineLength && (a.maxLine = e, a.maxLineLength = t, a.maxLineChanged = !0, s = !1);
          }), s && (e.curOp.updateMaxLine = !0)), function (e, t) {
            if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
              for (var n = e.first, r = t - 1; r > n; r--) {
                var a = $e(e, r).stateAfter;
                if (a && (!(a instanceof pt) || r + a.lookAhead < t)) {
                  n = r + 1;
                  break;
                }
              }
              e.highlightFrontier = Math.min(e.highlightFrontier, n);
            }
          }(r, i.line), oa(e, 400);
          var c = t.text.length - (o.line - i.line) - 1;
          t.full ? hr(e) : i.line != o.line || 1 != t.text.length || Ra(e.doc, t) ? hr(e, i.line, o.line + 1, c) : _r(e, i.line, "text");
          var u = ve(e, "changes"),
            d = ve(e, "change");
          if (d || u) {
            var p = {
              from: i,
              to: o,
              text: t.text,
              removed: t.removed,
              origin: t.origin
            };
            d && dn(e, "change", e, p), u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(p);
          }
          e.display.selForContextMenu = null;
        }(e.cm, t, r) : Ba(e, t, r), ri(e, n, z), e.cantEdit && li(e, rt(e.firstLine(), 0)) && (e.cantEdit = !1);
      }
    }
    function Ai(e, t, n, r, a) {
      var i;
      r || (r = n), at(r, n) < 0 && (n = (i = [r, n])[0], r = i[1]), "string" == typeof t && (t = e.splitLines(t)), pi(e, {
        from: n,
        to: r,
        text: t,
        origin: a
      });
    }
    function gi(e, t, n, r) {
      n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0);
    }
    function yi(e, t, n, r) {
      for (var a = 0; a < e.length; ++a) {
        var i = e[a],
          o = !0;
        if (i.ranges) {
          i.copied || ((i = e[a] = i.deepCopy()).copied = !0);
          for (var s = 0; s < i.ranges.length; s++) gi(i.ranges[s].anchor, t, n, r), gi(i.ranges[s].head, t, n, r);
        } else {
          for (var l = 0; l < i.changes.length; ++l) {
            var c = i.changes[l];
            if (n < c.from.line) c.from = rt(c.from.line + r, c.from.ch), c.to = rt(c.to.line + r, c.to.ch);else if (t <= c.to.line) {
              o = !1;
              break;
            }
          }
          o || (e.splice(0, a + 1), a = 0);
        }
      }
    }
    function vi(e, t) {
      var n = t.from.line,
        r = t.to.line,
        a = t.text.length - (r - n) - 1;
      yi(e.done, n, r, a), yi(e.undone, n, r, a);
    }
    function Ei(e, t, n, r) {
      var a = t,
        i = t;
      return "number" == typeof t ? i = $e(e, ct(e, t)) : a = Je(t), null == a ? null : (r(i, a) && e.cm && _r(e.cm, a, n), i);
    }
    function bi(e) {
      this.lines = e, this.parent = null;
      for (var t = 0, n = 0; n < e.length; ++n) e[n].parent = this, t += e[n].height;
      this.height = t;
    }
    function wi(e) {
      this.children = e;
      for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
        var a = e[r];
        t += a.chunkSize(), n += a.height, a.parent = this;
      }
      this.size = t, this.height = n, this.parent = null;
    }
    Ma.prototype.from = function () {
      return lt(this.anchor, this.head);
    }, Ma.prototype.to = function () {
      return st(this.anchor, this.head);
    }, Ma.prototype.empty = function () {
      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
    }, bi.prototype = {
      chunkSize: function () {
        return this.lines.length;
      },
      removeInner: function (e, t) {
        for (var n = e, r = e + t; n < r; ++n) {
          var a = this.lines[n];
          this.height -= a.height, qt(a), dn(a, "delete");
        }
        this.lines.splice(e, t);
      },
      collapse: function (e) {
        e.push.apply(e, this.lines);
      },
      insertInner: function (e, t, n) {
        this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
        for (var r = 0; r < t.length; ++r) t[r].parent = this;
      },
      iterN: function (e, t, n) {
        for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
      }
    }, wi.prototype = {
      chunkSize: function () {
        return this.size;
      },
      removeInner: function (e, t) {
        this.size -= t;
        for (var n = 0; n < this.children.length; ++n) {
          var r = this.children[n],
            a = r.chunkSize();
          if (e < a) {
            var i = Math.min(t, a - e),
              o = r.height;
            if (r.removeInner(e, i), this.height -= o - r.height, a == i && (this.children.splice(n--, 1), r.parent = null), 0 == (t -= i)) break;
            e = 0;
          } else e -= a;
        }
        if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof bi))) {
          var s = [];
          this.collapse(s), this.children = [new bi(s)], this.children[0].parent = this;
        }
      },
      collapse: function (e) {
        for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e);
      },
      insertInner: function (e, t, n) {
        this.size += t.length, this.height += n;
        for (var r = 0; r < this.children.length; ++r) {
          var a = this.children[r],
            i = a.chunkSize();
          if (e <= i) {
            if (a.insertInner(e, t, n), a.lines && a.lines.length > 50) {
              for (var o = a.lines.length % 25 + 25, s = o; s < a.lines.length;) {
                var l = new bi(a.lines.slice(s, s += 25));
                a.height -= l.height, this.children.splice(++r, 0, l), l.parent = this;
              }
              a.lines = a.lines.slice(0, o), this.maybeSpill();
            }
            break;
          }
          e -= i;
        }
      },
      maybeSpill: function () {
        if (!(this.children.length <= 10)) {
          var e = this;
          do {
            var t = new wi(e.children.splice(e.children.length - 5, 5));
            if (e.parent) {
              e.size -= t.size, e.height -= t.height;
              var n = K(e.parent.children, e);
              e.parent.children.splice(n + 1, 0, t);
            } else {
              var r = new wi(e.children);
              r.parent = e, e.children = [r, t], e = r;
            }
            t.parent = e.parent;
          } while (e.children.length > 10);
          e.parent.maybeSpill();
        }
      },
      iterN: function (e, t, n) {
        for (var r = 0; r < this.children.length; ++r) {
          var a = this.children[r],
            i = a.chunkSize();
          if (e < i) {
            var o = Math.min(t, i - e);
            if (a.iterN(e, o, n)) return !0;
            if (0 == (t -= o)) break;
            e = 0;
          } else e -= i;
        }
      }
    };
    var Ci = function (e, t, n) {
      if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
      this.doc = e, this.node = t;
    };
    function Oi(e, t, n) {
      Yt(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Pr(e, n);
    }
    Ci.prototype.clear = function () {
      var e = this.doc.cm,
        t = this.line.widgets,
        n = this.line,
        r = Je(n);
      if (null != r && t) {
        for (var a = 0; a < t.length; ++a) t[a] == this && t.splice(a--, 1);
        t.length || (n.widgets = null);
        var i = Cn(this);
        Xe(n, Math.max(0, n.height - i)), e && (na(e, function () {
          Oi(e, n, -i), _r(e, r, "widget");
        }), dn(e, "lineWidgetCleared", e, this, r));
      }
    }, Ci.prototype.changed = function () {
      var e = this,
        t = this.height,
        n = this.doc.cm,
        r = this.line;
      this.height = null;
      var a = Cn(this) - t;
      a && (Vt(this.doc, r) || Xe(r, r.height + a), n && na(n, function () {
        n.curOp.forceUpdate = !0, Oi(n, r, a), dn(n, "lineWidgetChanged", n, e, Je(r));
      }));
    }, Ee(Ci);
    var Mi = 0,
      Si = function (e, t) {
        this.lines = [], this.type = t, this.doc = e, this.id = ++Mi;
      };
    function Ti(e, t, n, r, a) {
      if (r && r.shared) return function (e, t, n, r, a) {
        (r = j(r)).shared = !1;
        var i = [Ti(e, t, n, r, a)],
          o = i[0],
          s = r.widgetNode;
        return Na(e, function (e) {
          s && (r.widgetNode = s.cloneNode(!0)), i.push(Ti(e, ut(e, t), ut(e, n), r, a));
          for (var l = 0; l < e.linked.length; ++l) if (e.linked[l].isParent) return;
          o = Z(i);
        }), new ki(i, o);
      }(e, t, n, r, a);
      if (e.cm && !e.cm.curOp) return ra(e.cm, Ti)(e, t, n, r, a);
      var i = new Si(e, a),
        o = at(t, n);
      if (r && j(r, i, !1), o > 0 || 0 == o && !1 !== i.clearWhenEmpty) return i;
      if (i.replacedWith && (i.collapsed = !0, i.widgetNode = D("span", [i.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || i.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (i.widgetNode.insertLeft = !0)), i.collapsed) {
        if (jt(e, t.line, t, n, i) || t.line != n.line && jt(e, n.line, t, n, i)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
        Ot = !0;
      }
      i.addToHistory && Ka(e, {
        from: t,
        to: n,
        origin: "markText"
      }, e.sel, NaN);
      var s,
        l = t.line,
        c = e.cm;
      if (e.iter(l, n.line + 1, function (r) {
        c && i.collapsed && !c.options.lineWrapping && Ht(r) == c.display.maxLine && (s = !0), i.collapsed && l != t.line && Xe(r, 0), function (e, t, n) {
          var r = n && window.WeakSet && (n.markedSpans || (n.markedSpans = new WeakSet()));
          r && e.markedSpans && r.has(e.markedSpans) ? e.markedSpans.push(t) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], r && r.add(e.markedSpans)), t.marker.attachLine(e);
        }(r, new Mt(i, l == t.line ? t.ch : null, l == n.line ? n.ch : null), e.cm && e.cm.curOp), ++l;
      }), i.collapsed && e.iter(t.line, n.line + 1, function (t) {
        Vt(e, t) && Xe(t, 0);
      }), i.clearOnEnter && he(i, "beforeCursorEnter", function () {
        return i.clear();
      }), i.readOnly && (Ct = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), i.collapsed && (i.id = ++Mi, i.atomic = !0), c) {
        if (s && (c.curOp.updateMaxLine = !0), i.collapsed) hr(c, t.line, n.line + 1);else if (i.className || i.startStyle || i.endStyle || i.css || i.attributes || i.title) for (var u = t.line; u <= n.line; u++) _r(c, u, "text");
        i.atomic && ii(c.doc), dn(c, "markerAdded", c, i);
      }
      return i;
    }
    Si.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        var e = this.doc.cm,
          t = e && !e.curOp;
        if (t && $r(e), ve(this, "clear")) {
          var n = this.find();
          n && dn(this, "clear", n.from, n.to);
        }
        for (var r = null, a = null, i = 0; i < this.lines.length; ++i) {
          var o = this.lines[i],
            s = St(o.markedSpans, this);
          e && !this.collapsed ? _r(e, Je(o), "text") : e && (null != s.to && (a = Je(o)), null != s.from && (r = Je(o))), o.markedSpans = Tt(o.markedSpans, s), null == s.from && this.collapsed && !Vt(this.doc, o) && e && Xe(o, or(e.display));
        }
        if (e && this.collapsed && !e.options.lineWrapping) for (var l = 0; l < this.lines.length; ++l) {
          var c = Ht(this.lines[l]),
            u = Qt(c);
          u > e.display.maxLineLength && (e.display.maxLine = c, e.display.maxLineLength = u, e.display.maxLineChanged = !0);
        }
        null != r && e && this.collapsed && hr(e, r, a + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && ii(e.doc)), e && dn(e, "markerCleared", e, this, r, a), t && qr(e), this.parent && this.parent.clear();
      }
    }, Si.prototype.find = function (e, t) {
      var n, r;
      null == e && "bookmark" == this.type && (e = 1);
      for (var a = 0; a < this.lines.length; ++a) {
        var i = this.lines[a],
          o = St(i.markedSpans, this);
        if (null != o.from && (n = rt(t ? i : Je(i), o.from), -1 == e)) return n;
        if (null != o.to && (r = rt(t ? i : Je(i), o.to), 1 == e)) return r;
      }
      return n && {
        from: n,
        to: r
      };
    }, Si.prototype.changed = function () {
      var e = this,
        t = this.find(-1, !0),
        n = this,
        r = this.doc.cm;
      t && r && na(r, function () {
        var a = t.line,
          i = Je(t.line),
          o = Ln(r, i);
        if (o && (Hn(o), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !Vt(n.doc, a) && null != n.height) {
          var s = n.height;
          n.height = null;
          var l = Cn(n) - s;
          l && Xe(a, a.height + l);
        }
        dn(r, "markerChanged", r, e);
      });
    }, Si.prototype.attachLine = function (e) {
      if (!this.lines.length && this.doc.cm) {
        var t = this.doc.cm.curOp;
        t.maybeHiddenMarkers && -1 != K(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
      }
      this.lines.push(e);
    }, Si.prototype.detachLine = function (e) {
      if (this.lines.splice(K(this.lines, e), 1), !this.lines.length && this.doc.cm) {
        var t = this.doc.cm.curOp;
        (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
      }
    }, Ee(Si);
    var ki = function (e, t) {
      this.markers = e, this.primary = t;
      for (var n = 0; n < e.length; ++n) e[n].parent = this;
    };
    function xi(e) {
      return e.findMarks(rt(e.first, 0), e.clipPos(rt(e.lastLine())), function (e) {
        return e.parent;
      });
    }
    function Di(e) {
      for (var t = function (t) {
          var n = e[t],
            r = [n.primary.doc];
          Na(n.primary.doc, function (e) {
            return r.push(e);
          });
          for (var a = 0; a < n.markers.length; a++) {
            var i = n.markers[a];
            -1 == K(r, i.doc) && (i.parent = null, n.markers.splice(a--, 1));
          }
        }, n = 0; n < e.length; n++) t(n);
    }
    ki.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        this.explicitlyCleared = !0;
        for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
        dn(this, "clear");
      }
    }, ki.prototype.find = function (e, t) {
      return this.primary.find(e, t);
    }, Ee(ki);
    var Ii = 0,
      Pi = function (e, t, n, r, a) {
        if (!(this instanceof Pi)) return new Pi(e, t, n, r, a);
        null == n && (n = 0), wi.call(this, [new bi([new $t("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;
        var i = rt(n, 0);
        this.sel = Ta(i), this.history = new ja(null), this.id = ++Ii, this.modeOption = t, this.lineSep = r, this.direction = "rtl" == a ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Ba(this, {
          from: i,
          to: i,
          text: e
        }), ni(this, Ta(i), z);
      };
    Pi.prototype = ee(wi.prototype, {
      constructor: Pi,
      iter: function (e, t, n) {
        n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
      },
      insert: function (e, t) {
        for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
        this.insertInner(e - this.first, t, n);
      },
      remove: function (e, t) {
        this.removeInner(e - this.first, t);
      },
      getValue: function (e) {
        var t = Ze(this, this.first, this.first + this.size);
        return !1 === e ? t : t.join(e || this.lineSeparator());
      },
      setValue: ia(function (e) {
        var t = rt(this.first, 0),
          n = this.first + this.size - 1;
        pi(this, {
          from: t,
          to: rt(n, $e(this, n).text.length),
          text: this.splitLines(e),
          origin: "setValue",
          full: !0
        }, !0), this.cm && Rr(this.cm, 0, 0), ni(this, Ta(t), z);
      }),
      replaceRange: function (e, t, n, r) {
        Ai(this, e, t = ut(this, t), n = n ? ut(this, n) : t, r);
      },
      getRange: function (e, t, n) {
        var r = qe(this, ut(this, e), ut(this, t));
        return !1 === n ? r : "" === n ? r.join("") : r.join(n || this.lineSeparator());
      },
      getLine: function (e) {
        var t = this.getLineHandle(e);
        return t && t.text;
      },
      getLineHandle: function (e) {
        if (tt(this, e)) return $e(this, e);
      },
      getLineNumber: function (e) {
        return Je(e);
      },
      getLineHandleVisualStart: function (e) {
        return "number" == typeof e && (e = $e(this, e)), Ht(e);
      },
      lineCount: function () {
        return this.size;
      },
      firstLine: function () {
        return this.first;
      },
      lastLine: function () {
        return this.first + this.size - 1;
      },
      clipPos: function (e) {
        return ut(this, e);
      },
      getCursor: function (e) {
        var t = this.sel.primary();
        return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from();
      },
      listSelections: function () {
        return this.sel.ranges;
      },
      somethingSelected: function () {
        return this.sel.somethingSelected();
      },
      setCursor: ia(function (e, t, n) {
        ei(this, ut(this, "number" == typeof e ? rt(e, t || 0) : e), null, n);
      }),
      setSelection: ia(function (e, t, n) {
        ei(this, ut(this, e), ut(this, t || e), n);
      }),
      extendSelection: ia(function (e, t, n) {
        Za(this, ut(this, e), t && ut(this, t), n);
      }),
      extendSelections: ia(function (e, t) {
        Xa(this, dt(this, e), t);
      }),
      extendSelectionsBy: ia(function (e, t) {
        Xa(this, dt(this, X(this.sel.ranges, e)), t);
      }),
      setSelections: ia(function (e, t, n) {
        if (e.length) {
          for (var r = [], a = 0; a < e.length; a++) r[a] = new Ma(ut(this, e[a].anchor), ut(this, e[a].head || e[a].anchor));
          null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), ni(this, Sa(this.cm, r, t), n);
        }
      }),
      addSelection: ia(function (e, t, n) {
        var r = this.sel.ranges.slice(0);
        r.push(new Ma(ut(this, e), ut(this, t || e))), ni(this, Sa(this.cm, r, r.length - 1), n);
      }),
      getSelection: function (e) {
        for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
          var a = qe(this, n[r].from(), n[r].to());
          t = t ? t.concat(a) : a;
        }
        return !1 === e ? t : t.join(e || this.lineSeparator());
      },
      getSelections: function (e) {
        for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
          var a = qe(this, n[r].from(), n[r].to());
          !1 !== e && (a = a.join(e || this.lineSeparator())), t[r] = a;
        }
        return t;
      },
      replaceSelection: function (e, t, n) {
        for (var r = [], a = 0; a < this.sel.ranges.length; a++) r[a] = e;
        this.replaceSelections(r, t, n || "+input");
      },
      replaceSelections: ia(function (e, t, n) {
        for (var r = [], a = this.sel, i = 0; i < a.ranges.length; i++) {
          var o = a.ranges[i];
          r[i] = {
            from: o.from(),
            to: o.to(),
            text: this.splitLines(e[i]),
            origin: n
          };
        }
        for (var s = t && "end" != t && function (e, t, n) {
            for (var r = [], a = rt(e.first, 0), i = a, o = 0; o < t.length; o++) {
              var s = t[o],
                l = Ia(s.from, a, i),
                c = Ia(ka(s), a, i);
              if (a = s.to, i = c, "around" == n) {
                var u = e.sel.ranges[o],
                  d = at(u.head, u.anchor) < 0;
                r[o] = new Ma(d ? c : l, d ? l : c);
              } else r[o] = new Ma(l, l);
            }
            return new Oa(r, e.sel.primIndex);
          }(this, r, t), l = r.length - 1; l >= 0; l--) pi(this, r[l]);
        s ? ti(this, s) : this.cm && Lr(this.cm);
      }),
      undo: ia(function () {
        hi(this, "undo");
      }),
      redo: ia(function () {
        hi(this, "redo");
      }),
      undoSelection: ia(function () {
        hi(this, "undo", !0);
      }),
      redoSelection: ia(function () {
        hi(this, "redo", !0);
      }),
      setExtending: function (e) {
        this.extend = e;
      },
      getExtending: function () {
        return this.extend;
      },
      historySize: function () {
        for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
        for (var a = 0; a < e.undone.length; a++) e.undone[a].ranges || ++n;
        return {
          undo: t,
          redo: n
        };
      },
      clearHistory: function () {
        var e = this;
        this.history = new ja(this.history), Na(this, function (t) {
          return t.history = e.history;
        }, !0);
      },
      markClean: function () {
        this.cleanGeneration = this.changeGeneration(!0);
      },
      changeGeneration: function (e) {
        return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
      },
      isClean: function (e) {
        return this.history.generation == (e || this.cleanGeneration);
      },
      getHistory: function () {
        return {
          done: $a(this.history.done),
          undone: $a(this.history.undone)
        };
      },
      setHistory: function (e) {
        var t = this.history = new ja(this.history);
        t.done = $a(e.done.slice(0), null, !0), t.undone = $a(e.undone.slice(0), null, !0);
      },
      setGutterMarker: ia(function (e, t, n) {
        return Ei(this, e, "gutter", function (e) {
          var r = e.gutterMarkers || (e.gutterMarkers = {});
          return r[t] = n, !n && ae(r) && (e.gutterMarkers = null), !0;
        });
      }),
      clearGutter: ia(function (e) {
        var t = this;
        this.iter(function (n) {
          n.gutterMarkers && n.gutterMarkers[e] && Ei(t, n, "gutter", function () {
            return n.gutterMarkers[e] = null, ae(n.gutterMarkers) && (n.gutterMarkers = null), !0;
          });
        });
      }),
      lineInfo: function (e) {
        var t;
        if ("number" == typeof e) {
          if (!tt(this, e)) return null;
          if (t = e, !(e = $e(this, e))) return null;
        } else if (null == (t = Je(e))) return null;
        return {
          line: t,
          handle: e,
          text: e.text,
          gutterMarkers: e.gutterMarkers,
          textClass: e.textClass,
          bgClass: e.bgClass,
          wrapClass: e.wrapClass,
          widgets: e.widgets
        };
      },
      addLineClass: ia(function (e, t, n) {
        return Ei(this, e, "gutter" == t ? "gutter" : "class", function (e) {
          var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
          if (e[r]) {
            if (O(n).test(e[r])) return !1;
            e[r] += " " + n;
          } else e[r] = n;
          return !0;
        });
      }),
      removeLineClass: ia(function (e, t, n) {
        return Ei(this, e, "gutter" == t ? "gutter" : "class", function (e) {
          var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
            a = e[r];
          if (!a) return !1;
          if (null == n) e[r] = null;else {
            var i = a.match(O(n));
            if (!i) return !1;
            var o = i.index + i[0].length;
            e[r] = a.slice(0, i.index) + (i.index && o != a.length ? " " : "") + a.slice(o) || null;
          }
          return !0;
        });
      }),
      addLineWidget: ia(function (e, t, n) {
        return function (e, t, n, r) {
          var a = new Ci(e, n, r),
            i = e.cm;
          return i && a.noHScroll && (i.display.alignWidgets = !0), Ei(e, t, "widget", function (t) {
            var n = t.widgets || (t.widgets = []);
            if (null == a.insertAt ? n.push(a) : n.splice(Math.min(n.length, Math.max(0, a.insertAt)), 0, a), a.line = t, i && !Vt(e, t)) {
              var r = Yt(t) < e.scrollTop;
              Xe(t, t.height + Cn(a)), r && Pr(i, a.height), i.curOp.forceUpdate = !0;
            }
            return !0;
          }), i && dn(i, "lineWidgetAdded", i, a, "number" == typeof t ? t : Je(t)), a;
        }(this, e, t, n);
      }),
      removeLineWidget: function (e) {
        e.clear();
      },
      markText: function (e, t, n) {
        return Ti(this, ut(this, e), ut(this, t), n, n && n.type || "range");
      },
      setBookmark: function (e, t) {
        var n = {
          replacedWith: t && (null == t.nodeType ? t.widget : t),
          insertLeft: t && t.insertLeft,
          clearWhenEmpty: !1,
          shared: t && t.shared,
          handleMouseEvents: t && t.handleMouseEvents
        };
        return Ti(this, e = ut(this, e), e, n, "bookmark");
      },
      findMarksAt: function (e) {
        var t = [],
          n = $e(this, (e = ut(this, e)).line).markedSpans;
        if (n) for (var r = 0; r < n.length; ++r) {
          var a = n[r];
          (null == a.from || a.from <= e.ch) && (null == a.to || a.to >= e.ch) && t.push(a.marker.parent || a.marker);
        }
        return t;
      },
      findMarks: function (e, t, n) {
        e = ut(this, e), t = ut(this, t);
        var r = [],
          a = e.line;
        return this.iter(e.line, t.line + 1, function (i) {
          var o = i.markedSpans;
          if (o) for (var s = 0; s < o.length; s++) {
            var l = o[s];
            null != l.to && a == e.line && e.ch >= l.to || null == l.from && a != e.line || null != l.from && a == t.line && l.from >= t.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker);
          }
          ++a;
        }), r;
      },
      getAllMarks: function () {
        var e = [];
        return this.iter(function (t) {
          var n = t.markedSpans;
          if (n) for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker);
        }), e;
      },
      posFromIndex: function (e) {
        var t,
          n = this.first,
          r = this.lineSeparator().length;
        return this.iter(function (a) {
          var i = a.text.length + r;
          if (i > e) return t = e, !0;
          e -= i, ++n;
        }), ut(this, rt(n, t));
      },
      indexFromPos: function (e) {
        var t = (e = ut(this, e)).ch;
        if (e.line < this.first || e.ch < 0) return 0;
        var n = this.lineSeparator().length;
        return this.iter(this.first, e.line, function (e) {
          t += e.text.length + n;
        }), t;
      },
      copy: function (e) {
        var t = new Pi(Ze(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
        return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t;
      },
      linkedDoc: function (e) {
        e || (e = {});
        var t = this.first,
          n = this.first + this.size;
        null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
        var r = new Pi(Ze(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
        return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
          doc: r,
          sharedHist: e.sharedHist
        }), r.linked = [{
          doc: this,
          isParent: !0,
          sharedHist: e.sharedHist
        }], function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n],
              a = r.find(),
              i = e.clipPos(a.from),
              o = e.clipPos(a.to);
            if (at(i, o)) {
              var s = Ti(e, i, o, r.primary, r.primary.type);
              r.markers.push(s), s.parent = r;
            }
          }
        }(r, xi(this)), r;
      },
      unlinkDoc: function (e) {
        if (e instanceof xo && (e = e.doc), this.linked) for (var t = 0; t < this.linked.length; ++t) if (this.linked[t].doc == e) {
          this.linked.splice(t, 1), e.unlinkDoc(this), Di(xi(this));
          break;
        }
        if (e.history == this.history) {
          var n = [e.id];
          Na(e, function (e) {
            return n.push(e.id);
          }, !0), e.history = new ja(null), e.history.done = $a(this.history.done, n), e.history.undone = $a(this.history.undone, n);
        }
      },
      iterLinkedDocs: function (e) {
        Na(this, e);
      },
      getMode: function () {
        return this.mode;
      },
      getEditor: function () {
        return this.cm;
      },
      splitLines: function (e) {
        return this.lineSep ? e.split(this.lineSep) : Le(e);
      },
      lineSeparator: function () {
        return this.lineSep || "\n";
      },
      setDirection: ia(function (e) {
        var t;
        "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function (e) {
          return e.order = null;
        }), this.cm && na(t = this.cm, function () {
          Fa(t), hr(t);
        }));
      })
    }), Pi.prototype.eachLine = Pi.prototype.iter;
    var Li = 0;
    function Ri(e) {
      var t = this;
      if (Bi(t), !ge(t, e) && !On(t.display, e)) {
        be(e), o && (Li = +new Date());
        var n = pr(t, e, !0),
          r = e.dataTransfer.files;
        if (n && !t.isReadOnly()) if (r && r.length && window.FileReader && window.File) for (var a = r.length, i = Array(a), s = 0, l = function () {
            ++s == a && ra(t, function () {
              var e = {
                from: n = ut(t.doc, n),
                to: n,
                text: t.doc.splitLines(i.filter(function (e) {
                  return null != e;
                }).join(t.doc.lineSeparator())),
                origin: "paste"
              };
              pi(t.doc, e), ti(t.doc, Ta(ut(t.doc, n), ut(t.doc, ka(e))));
            })();
          }, c = function (e, n) {
            if (t.options.allowDropFileTypes && -1 == K(t.options.allowDropFileTypes, e.type)) l();else {
              var r = new FileReader();
              r.onerror = function () {
                return l();
              }, r.onload = function () {
                var e = r.result;
                /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (i[n] = e), l();
              }, r.readAsText(e);
            }
          }, u = 0; u < r.length; u++) c(r[u], u);else {
          if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout(function () {
            return t.display.input.focus();
          }, 20);
          try {
            var d = e.dataTransfer.getData("Text");
            if (d) {
              var p;
              if (t.state.draggingText && !t.state.draggingText.copy && (p = t.listSelections()), ri(t.doc, Ta(n, n)), p) for (var f = 0; f < p.length; ++f) Ai(t.doc, "", p[f].anchor, p[f].head, "drag");
              t.replaceSelection(d, "around", "paste"), t.display.input.focus();
            }
          } catch (e) {}
        }
      }
    }
    function Bi(e) {
      e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
    }
    function Ni(e) {
      if (document.getElementsByClassName) {
        for (var t = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < t.length; r++) {
          var a = t[r].CodeMirror;
          a && n.push(a);
        }
        n.length && n[0].operation(function () {
          for (var t = 0; t < n.length; t++) e(n[t]);
        });
      }
    }
    var Ui = !1;
    function Fi() {
      var e;
      Ui || (he(window, "resize", function () {
        null == e && (e = setTimeout(function () {
          e = null, Ni(ji);
        }, 100));
      }), he(window, "blur", function () {
        return Ni(Tr);
      }), Ui = !0);
    }
    function ji(e) {
      var t = e.display;
      t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize();
    }
    for (var Hi = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        224: "Mod",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
      }, Wi = 0; Wi < 10; Wi++) Hi[Wi + 48] = Hi[Wi + 96] = String(Wi);
    for (var Ki = 65; Ki <= 90; Ki++) Hi[Ki] = String.fromCharCode(Ki);
    for (var Vi = 1; Vi <= 12; Vi++) Hi[Vi + 111] = Hi[Vi + 63235] = "F" + Vi;
    var zi = {};
    function Yi(e) {
      var t,
        n,
        r,
        a,
        i = e.split(/-(?!$)/);
      e = i[i.length - 1];
      for (var o = 0; o < i.length - 1; o++) {
        var s = i[o];
        if (/^(cmd|meta|m)$/i.test(s)) a = !0;else if (/^a(lt)?$/i.test(s)) t = !0;else if (/^(c|ctrl|control)$/i.test(s)) n = !0;else {
          if (!/^s(hift)?$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
          r = !0;
        }
      }
      return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), a && (e = "Cmd-" + e), r && (e = "Shift-" + e), e;
    }
    function Qi(e) {
      var t = {};
      for (var n in e) if (e.hasOwnProperty(n)) {
        var r = e[n];
        if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
        if ("..." == r) {
          delete e[n];
          continue;
        }
        for (var a = X(n.split(" "), Yi), i = 0; i < a.length; i++) {
          var o = void 0,
            s = void 0;
          i == a.length - 1 ? (s = a.join(" "), o = r) : (s = a.slice(0, i + 1).join(" "), o = "...");
          var l = t[s];
          if (l) {
            if (l != o) throw new Error("Inconsistent bindings for " + s);
          } else t[s] = o;
        }
        delete e[n];
      }
      for (var c in t) e[c] = t[c];
      return e;
    }
    function Gi(e, t, n, r) {
      var a = (t = Xi(t)).call ? t.call(e, r) : t[e];
      if (!1 === a) return "nothing";
      if ("..." === a) return "multi";
      if (null != a && n(a)) return "handled";
      if (t.fallthrough) {
        if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Gi(e, t.fallthrough, n, r);
        for (var i = 0; i < t.fallthrough.length; i++) {
          var o = Gi(e, t.fallthrough[i], n, r);
          if (o) return o;
        }
      }
    }
    function $i(e) {
      var t = "string" == typeof e ? e : Hi[e.keyCode];
      return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
    }
    function qi(e, t, n) {
      var r = e;
      return t.altKey && "Alt" != r && (e = "Alt-" + e), (w ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e), (w ? t.ctrlKey : t.metaKey) && "Mod" != r && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e), e;
    }
    function Zi(e, t) {
      if (p && 34 == e.keyCode && e.char) return !1;
      var n = Hi[e.keyCode];
      return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), qi(n, e, t));
    }
    function Xi(e) {
      return "string" == typeof e ? zi[e] : e;
    }
    function Ji(e, t) {
      for (var n = e.doc.sel.ranges, r = [], a = 0; a < n.length; a++) {
        for (var i = t(n[a]); r.length && at(i.from, Z(r).to) <= 0;) {
          var o = r.pop();
          if (at(o.from, i.from) < 0) {
            i.from = o.from;
            break;
          }
        }
        r.push(i);
      }
      na(e, function () {
        for (var t = r.length - 1; t >= 0; t--) Ai(e.doc, "", r[t].from, r[t].to, "+delete");
        Lr(e);
      });
    }
    function eo(e, t, n) {
      var r = se(e.text, t + n, n);
      return r < 0 || r > e.text.length ? null : r;
    }
    function to(e, t, n) {
      var r = eo(e, t.ch, n);
      return null == r ? null : new rt(t.line, r, n < 0 ? "after" : "before");
    }
    function no(e, t, n, r, a) {
      if (e) {
        "rtl" == t.doc.direction && (a = -a);
        var i = pe(n, t.doc.direction);
        if (i) {
          var o,
            s = a < 0 ? Z(i) : i[0],
            l = a < 0 == (1 == s.level) ? "after" : "before";
          if (s.level > 0 || "rtl" == t.doc.direction) {
            var c = Rn(t, n);
            o = a < 0 ? n.text.length - 1 : 0;
            var u = Bn(t, c, o).top;
            o = le(function (e) {
              return Bn(t, c, e).top == u;
            }, a < 0 == (1 == s.level) ? s.from : s.to - 1, o), "before" == l && (o = eo(n, o, 1));
          } else o = a < 0 ? s.to : s.from;
          return new rt(r, o, l);
        }
      }
      return new rt(r, a < 0 ? n.text.length : 0, a < 0 ? "before" : "after");
    }
    zi.basic = {
      Left: "goCharLeft",
      Right: "goCharRight",
      Up: "goLineUp",
      Down: "goLineDown",
      End: "goLineEnd",
      Home: "goLineStartSmart",
      PageUp: "goPageUp",
      PageDown: "goPageDown",
      Delete: "delCharAfter",
      Backspace: "delCharBefore",
      "Shift-Backspace": "delCharBefore",
      Tab: "defaultTab",
      "Shift-Tab": "indentAuto",
      Enter: "newlineAndIndent",
      Insert: "toggleOverwrite",
      Esc: "singleSelection"
    }, zi.pcDefault = {
      "Ctrl-A": "selectAll",
      "Ctrl-D": "deleteLine",
      "Ctrl-Z": "undo",
      "Shift-Ctrl-Z": "redo",
      "Ctrl-Y": "redo",
      "Ctrl-Home": "goDocStart",
      "Ctrl-End": "goDocEnd",
      "Ctrl-Up": "goLineUp",
      "Ctrl-Down": "goLineDown",
      "Ctrl-Left": "goGroupLeft",
      "Ctrl-Right": "goGroupRight",
      "Alt-Left": "goLineStart",
      "Alt-Right": "goLineEnd",
      "Ctrl-Backspace": "delGroupBefore",
      "Ctrl-Delete": "delGroupAfter",
      "Ctrl-S": "save",
      "Ctrl-F": "find",
      "Ctrl-G": "findNext",
      "Shift-Ctrl-G": "findPrev",
      "Shift-Ctrl-F": "replace",
      "Shift-Ctrl-R": "replaceAll",
      "Ctrl-[": "indentLess",
      "Ctrl-]": "indentMore",
      "Ctrl-U": "undoSelection",
      "Shift-Ctrl-U": "redoSelection",
      "Alt-U": "redoSelection",
      fallthrough: "basic"
    }, zi.emacsy = {
      "Ctrl-F": "goCharRight",
      "Ctrl-B": "goCharLeft",
      "Ctrl-P": "goLineUp",
      "Ctrl-N": "goLineDown",
      "Ctrl-A": "goLineStart",
      "Ctrl-E": "goLineEnd",
      "Ctrl-V": "goPageDown",
      "Shift-Ctrl-V": "goPageUp",
      "Ctrl-D": "delCharAfter",
      "Ctrl-H": "delCharBefore",
      "Alt-Backspace": "delWordBefore",
      "Ctrl-K": "killLine",
      "Ctrl-T": "transposeChars",
      "Ctrl-O": "openLine"
    }, zi.macDefault = {
      "Cmd-A": "selectAll",
      "Cmd-D": "deleteLine",
      "Cmd-Z": "undo",
      "Shift-Cmd-Z": "redo",
      "Cmd-Y": "redo",
      "Cmd-Home": "goDocStart",
      "Cmd-Up": "goDocStart",
      "Cmd-End": "goDocEnd",
      "Cmd-Down": "goDocEnd",
      "Alt-Left": "goGroupLeft",
      "Alt-Right": "goGroupRight",
      "Cmd-Left": "goLineLeft",
      "Cmd-Right": "goLineRight",
      "Alt-Backspace": "delGroupBefore",
      "Ctrl-Alt-Backspace": "delGroupAfter",
      "Alt-Delete": "delGroupAfter",
      "Cmd-S": "save",
      "Cmd-F": "find",
      "Cmd-G": "findNext",
      "Shift-Cmd-G": "findPrev",
      "Cmd-Alt-F": "replace",
      "Shift-Cmd-Alt-F": "replaceAll",
      "Cmd-[": "indentLess",
      "Cmd-]": "indentMore",
      "Cmd-Backspace": "delWrappedLineLeft",
      "Cmd-Delete": "delWrappedLineRight",
      "Cmd-U": "undoSelection",
      "Shift-Cmd-U": "redoSelection",
      "Ctrl-Up": "goDocStart",
      "Ctrl-Down": "goDocEnd",
      fallthrough: ["basic", "emacsy"]
    }, zi.default = y ? zi.macDefault : zi.pcDefault;
    var ro = {
      selectAll: ui,
      singleSelection: function (e) {
        return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), z);
      },
      killLine: function (e) {
        return Ji(e, function (t) {
          if (t.empty()) {
            var n = $e(e.doc, t.head.line).text.length;
            return t.head.ch == n && t.head.line < e.lastLine() ? {
              from: t.head,
              to: rt(t.head.line + 1, 0)
            } : {
              from: t.head,
              to: rt(t.head.line, n)
            };
          }
          return {
            from: t.from(),
            to: t.to()
          };
        });
      },
      deleteLine: function (e) {
        return Ji(e, function (t) {
          return {
            from: rt(t.from().line, 0),
            to: ut(e.doc, rt(t.to().line + 1, 0))
          };
        });
      },
      delLineLeft: function (e) {
        return Ji(e, function (e) {
          return {
            from: rt(e.from().line, 0),
            to: e.from()
          };
        });
      },
      delWrappedLineLeft: function (e) {
        return Ji(e, function (t) {
          var n = e.charCoords(t.head, "div").top + 5;
          return {
            from: e.coordsChar({
              left: 0,
              top: n
            }, "div"),
            to: t.from()
          };
        });
      },
      delWrappedLineRight: function (e) {
        return Ji(e, function (t) {
          var n = e.charCoords(t.head, "div").top + 5,
            r = e.coordsChar({
              left: e.display.lineDiv.offsetWidth + 100,
              top: n
            }, "div");
          return {
            from: t.from(),
            to: r
          };
        });
      },
      undo: function (e) {
        return e.undo();
      },
      redo: function (e) {
        return e.redo();
      },
      undoSelection: function (e) {
        return e.undoSelection();
      },
      redoSelection: function (e) {
        return e.redoSelection();
      },
      goDocStart: function (e) {
        return e.extendSelection(rt(e.firstLine(), 0));
      },
      goDocEnd: function (e) {
        return e.extendSelection(rt(e.lastLine()));
      },
      goLineStart: function (e) {
        return e.extendSelectionsBy(function (t) {
          return ao(e, t.head.line);
        }, {
          origin: "+move",
          bias: 1
        });
      },
      goLineStartSmart: function (e) {
        return e.extendSelectionsBy(function (t) {
          return io(e, t.head);
        }, {
          origin: "+move",
          bias: 1
        });
      },
      goLineEnd: function (e) {
        return e.extendSelectionsBy(function (t) {
          return function (e, t) {
            var n = $e(e.doc, t),
              r = function (e) {
                for (var t; t = Ut(e);) e = t.find(1, !0).line;
                return e;
              }(n);
            return r != n && (t = Je(r)), no(!0, e, n, t, -1);
          }(e, t.head.line);
        }, {
          origin: "+move",
          bias: -1
        });
      },
      goLineRight: function (e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, "div").top + 5;
          return e.coordsChar({
            left: e.display.lineDiv.offsetWidth + 100,
            top: n
          }, "div");
        }, Q);
      },
      goLineLeft: function (e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, "div").top + 5;
          return e.coordsChar({
            left: 0,
            top: n
          }, "div");
        }, Q);
      },
      goLineLeftSmart: function (e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, "div").top + 5,
            r = e.coordsChar({
              left: 0,
              top: n
            }, "div");
          return r.ch < e.getLine(r.line).search(/\S/) ? io(e, t.head) : r;
        }, Q);
      },
      goLineUp: function (e) {
        return e.moveV(-1, "line");
      },
      goLineDown: function (e) {
        return e.moveV(1, "line");
      },
      goPageUp: function (e) {
        return e.moveV(-1, "page");
      },
      goPageDown: function (e) {
        return e.moveV(1, "page");
      },
      goCharLeft: function (e) {
        return e.moveH(-1, "char");
      },
      goCharRight: function (e) {
        return e.moveH(1, "char");
      },
      goColumnLeft: function (e) {
        return e.moveH(-1, "column");
      },
      goColumnRight: function (e) {
        return e.moveH(1, "column");
      },
      goWordLeft: function (e) {
        return e.moveH(-1, "word");
      },
      goGroupRight: function (e) {
        return e.moveH(1, "group");
      },
      goGroupLeft: function (e) {
        return e.moveH(-1, "group");
      },
      goWordRight: function (e) {
        return e.moveH(1, "word");
      },
      delCharBefore: function (e) {
        return e.deleteH(-1, "codepoint");
      },
      delCharAfter: function (e) {
        return e.deleteH(1, "char");
      },
      delWordBefore: function (e) {
        return e.deleteH(-1, "word");
      },
      delWordAfter: function (e) {
        return e.deleteH(1, "word");
      },
      delGroupBefore: function (e) {
        return e.deleteH(-1, "group");
      },
      delGroupAfter: function (e) {
        return e.deleteH(1, "group");
      },
      indentAuto: function (e) {
        return e.indentSelection("smart");
      },
      indentMore: function (e) {
        return e.indentSelection("add");
      },
      indentLess: function (e) {
        return e.indentSelection("subtract");
      },
      insertTab: function (e) {
        return e.replaceSelection("\t");
      },
      insertSoftTab: function (e) {
        for (var t = [], n = e.listSelections(), r = e.options.tabSize, a = 0; a < n.length; a++) {
          var i = n[a].from(),
            o = H(e.getLine(i.line), i.ch, r);
          t.push(q(r - o % r));
        }
        e.replaceSelections(t);
      },
      defaultTab: function (e) {
        e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
      },
      transposeChars: function (e) {
        return na(e, function () {
          for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) if (t[r].empty()) {
            var a = t[r].head,
              i = $e(e.doc, a.line).text;
            if (i) if (a.ch == i.length && (a = new rt(a.line, a.ch - 1)), a.ch > 0) a = new rt(a.line, a.ch + 1), e.replaceRange(i.charAt(a.ch - 1) + i.charAt(a.ch - 2), rt(a.line, a.ch - 2), a, "+transpose");else if (a.line > e.doc.first) {
              var o = $e(e.doc, a.line - 1).text;
              o && (a = new rt(a.line, 1), e.replaceRange(i.charAt(0) + e.doc.lineSeparator() + o.charAt(o.length - 1), rt(a.line - 1, o.length - 1), a, "+transpose"));
            }
            n.push(new Ma(a, a));
          }
          e.setSelections(n);
        });
      },
      newlineAndIndent: function (e) {
        return na(e, function () {
          for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
          t = e.listSelections();
          for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
          Lr(e);
        });
      },
      openLine: function (e) {
        return e.replaceSelection("\n", "start");
      },
      toggleOverwrite: function (e) {
        return e.toggleOverwrite();
      }
    };
    function ao(e, t) {
      var n = $e(e.doc, t),
        r = Ht(n);
      return r != n && (t = Je(r)), no(!0, e, r, t, 1);
    }
    function io(e, t) {
      var n = ao(e, t.line),
        r = $e(e.doc, n.line),
        a = pe(r, e.doc.direction);
      if (!a || 0 == a[0].level) {
        var i = Math.max(n.ch, r.text.search(/\S/)),
          o = t.line == n.line && t.ch <= i && t.ch;
        return rt(n.line, o ? 0 : i, n.sticky);
      }
      return n;
    }
    function oo(e, t, n) {
      if ("string" == typeof t && !(t = ro[t])) return !1;
      e.display.input.ensurePolled();
      var r = e.display.shift,
        a = !1;
      try {
        e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), a = t(e) != V;
      } finally {
        e.display.shift = r, e.state.suppressEdits = !1;
      }
      return a;
    }
    var so = new W();
    function lo(e, t, n, r) {
      var a = e.state.keySeq;
      if (a) {
        if ($i(t)) return "handled";
        if (/\'$/.test(t) ? e.state.keySeq = null : so.set(50, function () {
          e.state.keySeq == a && (e.state.keySeq = null, e.display.input.reset());
        }), co(e, a + " " + t, n, r)) return !0;
      }
      return co(e, t, n, r);
    }
    function co(e, t, n, r) {
      var a = function (e, t, n) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
          var a = Gi(t, e.state.keyMaps[r], n, e);
          if (a) return a;
        }
        return e.options.extraKeys && Gi(t, e.options.extraKeys, n, e) || Gi(t, e.options.keyMap, n, e);
      }(e, t, r);
      return "multi" == a && (e.state.keySeq = t), "handled" == a && dn(e, "keyHandled", e, t, n), "handled" != a && "multi" != a || (be(n), Cr(e)), !!a;
    }
    function uo(e, t) {
      var n = Zi(t, !0);
      return !!n && (t.shiftKey && !e.state.keySeq ? lo(e, "Shift-" + n, t, function (t) {
        return oo(e, t, !0);
      }) || lo(e, n, t, function (t) {
        if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return oo(e, t);
      }) : lo(e, n, t, function (t) {
        return oo(e, t);
      }));
    }
    var po = null;
    function fo(e) {
      var t = this;
      if (!(e.target && e.target != t.display.input.getField() || (t.curOp.focus = P(N(t)), ge(t, e)))) {
        o && s < 11 && 27 == e.keyCode && (e.returnValue = !1);
        var r = e.keyCode;
        t.display.shift = 16 == r || e.shiftKey;
        var a = uo(t, e);
        p && (po = a ? r : null, a || 88 != r || Be || !(y ? e.metaKey : e.ctrlKey) || t.replaceSelection("", null, "cut")), n && !y && !a && 46 == r && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), 18 != r || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || function (e) {
          var t = e.display.lineDiv;
          function n(e) {
            18 != e.keyCode && e.altKey || (S(t, "CodeMirror-crosshair"), me(document, "keyup", n), me(document, "mouseover", n));
          }
          L(t, "CodeMirror-crosshair"), he(document, "keyup", n), he(document, "mouseover", n);
        }(t);
      }
    }
    function ho(e) {
      16 == e.keyCode && (this.doc.sel.shift = !1), ge(this, e);
    }
    function _o(e) {
      var t = this;
      if (!(e.target && e.target != t.display.input.getField() || On(t.display, e) || ge(t, e) || e.ctrlKey && !e.altKey || y && e.metaKey)) {
        var n = e.keyCode,
          r = e.charCode;
        if (p && n == po) return po = null, void be(e);
        if (!p || e.which && !(e.which < 10) || !uo(t, e)) {
          var a = String.fromCharCode(null == r ? n : r);
          "\b" != a && (function (e, t, n) {
            return lo(e, "'" + n + "'", t, function (t) {
              return oo(e, t, !0);
            });
          }(t, e, a) || t.display.input.onKeyPress(e));
        }
      }
    }
    var mo,
      Ao,
      go = function (e, t, n) {
        this.time = e, this.pos = t, this.button = n;
      };
    function yo(e) {
      var t = this,
        n = t.display;
      if (!(ge(t, e) || n.activeTouch && n.input.supportsTouch())) if (n.input.ensurePolled(), n.shift = e.shiftKey, On(n, e)) l || (n.scroller.draggable = !1, setTimeout(function () {
        return n.scroller.draggable = !0;
      }, 100));else if (!bo(t, e)) {
        var r = pr(t, e),
          a = Se(e),
          i = r ? function (e, t) {
            var n = +new Date();
            return Ao && Ao.compare(n, e, t) ? (mo = Ao = null, "triple") : mo && mo.compare(n, e, t) ? (Ao = new go(n, e, t), mo = null, "double") : (mo = new go(n, e, t), Ao = null, "single");
          }(r, a) : "single";
        U(t).focus(), 1 == a && t.state.selectingText && t.state.selectingText(e), r && function (e, t, n, r, a) {
          var i = "Click";
          return "double" == r ? i = "Double" + i : "triple" == r && (i = "Triple" + i), lo(e, qi(i = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + i, a), a, function (t) {
            if ("string" == typeof t && (t = ro[t]), !t) return !1;
            var r = !1;
            try {
              e.isReadOnly() && (e.state.suppressEdits = !0), r = t(e, n) != V;
            } finally {
              e.state.suppressEdits = !1;
            }
            return r;
          });
        }(t, a, r, i, e) || (1 == a ? r ? function (e, t, n, r) {
          o ? setTimeout(F(Or, e), 0) : e.curOp.focus = P(N(e));
          var a,
            i = function (e, t, n) {
              var r = e.getOption("configureMouse"),
                a = r ? r(e, t, n) : {};
              if (null == a.unit) {
                var i = v ? n.shiftKey && n.metaKey : n.altKey;
                a.unit = i ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line";
              }
              return (null == a.extend || e.doc.extend) && (a.extend = e.doc.extend || n.shiftKey), null == a.addNew && (a.addNew = y ? n.metaKey : n.ctrlKey), null == a.moveOnDrag && (a.moveOnDrag = !(y ? n.altKey : n.ctrlKey)), a;
            }(e, n, r),
            c = e.doc.sel;
          e.options.dragDrop && xe && !e.isReadOnly() && "single" == n && (a = c.contains(t)) > -1 && (at((a = c.ranges[a]).from(), t) < 0 || t.xRel > 0) && (at(a.to(), t) > 0 || t.xRel < 0) ? function (e, t, n, r) {
            var a = e.display,
              i = !1,
              c = ra(e, function (t) {
                l && (a.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : Mr(e)), me(a.wrapper.ownerDocument, "mouseup", c), me(a.wrapper.ownerDocument, "mousemove", u), me(a.scroller, "dragstart", d), me(a.scroller, "drop", c), i || (be(t), r.addNew || Za(e.doc, n, null, null, r.extend), l && !f || o && 9 == s ? setTimeout(function () {
                  a.wrapper.ownerDocument.body.focus({
                    preventScroll: !0
                  }), a.input.focus();
                }, 20) : a.input.focus());
              }),
              u = function (e) {
                i = i || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
              },
              d = function () {
                return i = !0;
              };
            l && (a.scroller.draggable = !0), e.state.draggingText = c, c.copy = !r.moveOnDrag, he(a.wrapper.ownerDocument, "mouseup", c), he(a.wrapper.ownerDocument, "mousemove", u), he(a.scroller, "dragstart", d), he(a.scroller, "drop", c), e.state.delayingBlurEvent = !0, setTimeout(function () {
              return a.input.focus();
            }, 20), a.scroller.dragDrop && a.scroller.dragDrop();
          }(e, r, t, i) : function (e, t, n, r) {
            o && Mr(e);
            var a = e.display,
              i = e.doc;
            be(t);
            var s,
              l,
              c = i.sel,
              u = c.ranges;
            if (r.addNew && !r.extend ? (l = i.sel.contains(n), s = l > -1 ? u[l] : new Ma(n, n)) : (s = i.sel.primary(), l = i.sel.primIndex), "rectangle" == r.unit) r.addNew || (s = new Ma(n, n)), n = pr(e, t, !0, !0), l = -1;else {
              var d = vo(e, n, r.unit);
              s = r.extend ? qa(s, d.anchor, d.head, r.extend) : d;
            }
            r.addNew ? -1 == l ? (l = u.length, ni(i, Sa(e, u.concat([s]), l), {
              scroll: !1,
              origin: "*mouse"
            })) : u.length > 1 && u[l].empty() && "char" == r.unit && !r.extend ? (ni(i, Sa(e, u.slice(0, l).concat(u.slice(l + 1)), 0), {
              scroll: !1,
              origin: "*mouse"
            }), c = i.sel) : Ja(i, l, s, Y) : (l = 0, ni(i, new Oa([s], 0), Y), c = i.sel);
            var p = n;
            function f(t) {
              if (0 != at(p, t)) if (p = t, "rectangle" == r.unit) {
                for (var a = [], o = e.options.tabSize, u = H($e(i, n.line).text, n.ch, o), d = H($e(i, t.line).text, t.ch, o), f = Math.min(u, d), h = Math.max(u, d), _ = Math.min(n.line, t.line), m = Math.min(e.lastLine(), Math.max(n.line, t.line)); _ <= m; _++) {
                  var A = $e(i, _).text,
                    g = G(A, f, o);
                  f == h ? a.push(new Ma(rt(_, g), rt(_, g))) : A.length > g && a.push(new Ma(rt(_, g), rt(_, G(A, h, o))));
                }
                a.length || a.push(new Ma(n, n)), ni(i, Sa(e, c.ranges.slice(0, l).concat(a), l), {
                  origin: "*mouse",
                  scroll: !1
                }), e.scrollIntoView(t);
              } else {
                var y,
                  v = s,
                  E = vo(e, t, r.unit),
                  b = v.anchor;
                at(E.anchor, b) > 0 ? (y = E.head, b = lt(v.from(), E.anchor)) : (y = E.anchor, b = st(v.to(), E.head));
                var w = c.ranges.slice(0);
                w[l] = function (e, t) {
                  var n = t.anchor,
                    r = t.head,
                    a = $e(e.doc, n.line);
                  if (0 == at(n, r) && n.sticky == r.sticky) return t;
                  var i = pe(a);
                  if (!i) return t;
                  var o = ue(i, n.ch, n.sticky),
                    s = i[o];
                  if (s.from != n.ch && s.to != n.ch) return t;
                  var l,
                    c = o + (s.from == n.ch == (1 != s.level) ? 0 : 1);
                  if (0 == c || c == i.length) return t;
                  if (r.line != n.line) l = (r.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;else {
                    var u = ue(i, r.ch, r.sticky),
                      d = u - o || (r.ch - n.ch) * (1 == s.level ? -1 : 1);
                    l = u == c - 1 || u == c ? d < 0 : d > 0;
                  }
                  var p = i[c + (l ? -1 : 0)],
                    f = l == (1 == p.level),
                    h = f ? p.from : p.to,
                    _ = f ? "after" : "before";
                  return n.ch == h && n.sticky == _ ? t : new Ma(new rt(n.line, h, _), r);
                }(e, new Ma(ut(i, b), y)), ni(i, Sa(e, w, l), Y);
              }
            }
            var h = a.wrapper.getBoundingClientRect(),
              _ = 0;
            function m(t) {
              var n = ++_,
                o = pr(e, t, !0, "rectangle" == r.unit);
              if (o) if (0 != at(o, p)) {
                e.curOp.focus = P(N(e)), f(o);
                var s = Dr(a, i);
                (o.line >= s.to || o.line < s.from) && setTimeout(ra(e, function () {
                  _ == n && m(t);
                }), 150);
              } else {
                var l = t.clientY < h.top ? -20 : t.clientY > h.bottom ? 20 : 0;
                l && setTimeout(ra(e, function () {
                  _ == n && (a.scroller.scrollTop += l, m(t));
                }), 50);
              }
            }
            function A(t) {
              e.state.selectingText = !1, _ = 1 / 0, t && (be(t), a.input.focus()), me(a.wrapper.ownerDocument, "mousemove", g), me(a.wrapper.ownerDocument, "mouseup", y), i.history.lastSelOrigin = null;
            }
            var g = ra(e, function (e) {
                0 !== e.buttons && Se(e) ? m(e) : A(e);
              }),
              y = ra(e, A);
            e.state.selectingText = y, he(a.wrapper.ownerDocument, "mousemove", g), he(a.wrapper.ownerDocument, "mouseup", y);
          }(e, r, t, i);
        }(t, r, i, e) : Me(e) == n.scroller && be(e) : 2 == a ? (r && Za(t.doc, r), setTimeout(function () {
          return n.input.focus();
        }, 20)) : 3 == a && (C ? t.display.input.onContextMenu(e) : Mr(t)));
      }
    }
    function vo(e, t, n) {
      if ("char" == n) return new Ma(t, t);
      if ("word" == n) return e.findWordAt(t);
      if ("line" == n) return new Ma(rt(t.line, 0), ut(e.doc, rt(t.line + 1, 0)));
      var r = n(e, t);
      return new Ma(r.from, r.to);
    }
    function Eo(e, t, n, r) {
      var a, i;
      if (t.touches) a = t.touches[0].clientX, i = t.touches[0].clientY;else try {
        a = t.clientX, i = t.clientY;
      } catch (e) {
        return !1;
      }
      if (a >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
      r && be(t);
      var o = e.display,
        s = o.lineDiv.getBoundingClientRect();
      if (i > s.bottom || !ve(e, n)) return Ce(t);
      i -= s.top - o.viewOffset;
      for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
        var c = o.gutters.childNodes[l];
        if (c && c.getBoundingClientRect().right >= a) return Ae(e, n, e, et(e.doc, i), e.display.gutterSpecs[l].className, t), Ce(t);
      }
    }
    function bo(e, t) {
      return Eo(e, t, "gutterClick", !0);
    }
    function wo(e, t) {
      On(e.display, t) || function (e, t) {
        return !!ve(e, "gutterContextMenu") && Eo(e, t, "gutterContextMenu", !1);
      }(e, t) || ge(e, t, "contextmenu") || C || e.display.input.onContextMenu(t);
    }
    function Co(e) {
      e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Kn(e);
    }
    go.prototype.compare = function (e, t, n) {
      return this.time + 400 > e && 0 == at(t, this.pos) && n == this.button;
    };
    var Oo = {
        toString: function () {
          return "CodeMirror.Init";
        }
      },
      Mo = {},
      So = {};
    function To(e, t, n) {
      if (!t != !(n && n != Oo)) {
        var r = e.display.dragFunctions,
          a = t ? he : me;
        a(e.display.scroller, "dragstart", r.start), a(e.display.scroller, "dragenter", r.enter), a(e.display.scroller, "dragover", r.over), a(e.display.scroller, "dragleave", r.leave), a(e.display.scroller, "drop", r.drop);
      }
    }
    function ko(e) {
      e.options.lineWrapping ? (L(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (S(e.display.wrapper, "CodeMirror-wrap"), Gt(e)), dr(e), hr(e), Kn(e), setTimeout(function () {
        return Vr(e);
      }, 100);
    }
    function xo(e, t) {
      var n = this;
      if (!(this instanceof xo)) return new xo(e, t);
      this.options = t = t ? j(t) : {}, j(Mo, t, !1);
      var r = t.value;
      "string" == typeof r ? r = new Pi(r, t.mode, null, t.lineSeparator, t.direction) : t.mode && (r.modeOption = t.mode), this.doc = r;
      var a = new xo.inputStyles[t.inputStyle](this),
        i = this.display = new ya(e, r, a, t);
      for (var c in i.wrapper.CodeMirror = this, Co(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Qr(this), this.state = {
        keyMaps: [],
        overlays: [],
        modeGen: 0,
        overwrite: !1,
        delayingBlurEvent: !1,
        focused: !1,
        suppressEdits: !1,
        pasteIncoming: -1,
        cutIncoming: -1,
        selectingText: !1,
        draggingText: !1,
        highlight: new W(),
        keySeq: null,
        specialChars: null
      }, t.autofocus && !g && i.input.focus(), o && s < 11 && setTimeout(function () {
        return n.display.input.reset(!0);
      }, 20), function (e) {
        var t = e.display;
        he(t.scroller, "mousedown", ra(e, yo)), he(t.scroller, "dblclick", o && s < 11 ? ra(e, function (t) {
          if (!ge(e, t)) {
            var n = pr(e, t);
            if (n && !bo(e, t) && !On(e.display, t)) {
              be(t);
              var r = e.findWordAt(n);
              Za(e.doc, r.anchor, r.head);
            }
          }
        }) : function (t) {
          return ge(e, t) || be(t);
        }), he(t.scroller, "contextmenu", function (t) {
          return wo(e, t);
        }), he(t.input.getField(), "contextmenu", function (n) {
          t.scroller.contains(n.target) || wo(e, n);
        });
        var n,
          r = {
            end: 0
          };
        function a() {
          t.activeTouch && (n = setTimeout(function () {
            return t.activeTouch = null;
          }, 1e3), (r = t.activeTouch).end = +new Date());
        }
        function i(e) {
          if (1 != e.touches.length) return !1;
          var t = e.touches[0];
          return t.radiusX <= 1 && t.radiusY <= 1;
        }
        function l(e, t) {
          if (null == t.left) return !0;
          var n = t.left - e.left,
            r = t.top - e.top;
          return n * n + r * r > 400;
        }
        he(t.scroller, "touchstart", function (a) {
          if (!ge(e, a) && !i(a) && !bo(e, a)) {
            t.input.ensurePolled(), clearTimeout(n);
            var o = +new Date();
            t.activeTouch = {
              start: o,
              moved: !1,
              prev: o - r.end <= 300 ? r : null
            }, 1 == a.touches.length && (t.activeTouch.left = a.touches[0].pageX, t.activeTouch.top = a.touches[0].pageY);
          }
        }), he(t.scroller, "touchmove", function () {
          t.activeTouch && (t.activeTouch.moved = !0);
        }), he(t.scroller, "touchend", function (n) {
          var r = t.activeTouch;
          if (r && !On(t, n) && null != r.left && !r.moved && new Date() - r.start < 300) {
            var i,
              o = e.coordsChar(t.activeTouch, "page");
            i = !r.prev || l(r, r.prev) ? new Ma(o, o) : !r.prev.prev || l(r, r.prev.prev) ? e.findWordAt(o) : new Ma(rt(o.line, 0), ut(e.doc, rt(o.line + 1, 0))), e.setSelection(i.anchor, i.head), e.focus(), be(n);
          }
          a();
        }), he(t.scroller, "touchcancel", a), he(t.scroller, "scroll", function () {
          t.scroller.clientHeight && (Ur(e, t.scroller.scrollTop), jr(e, t.scroller.scrollLeft, !0), Ae(e, "scroll", e));
        }), he(t.scroller, "mousewheel", function (t) {
          return Ca(e, t);
        }), he(t.scroller, "DOMMouseScroll", function (t) {
          return Ca(e, t);
        }), he(t.wrapper, "scroll", function () {
          return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0;
        }), t.dragFunctions = {
          enter: function (t) {
            ge(e, t) || Oe(t);
          },
          over: function (t) {
            ge(e, t) || (function (e, t) {
              var n = pr(e, t);
              if (n) {
                var r = document.createDocumentFragment();
                Er(e, n, r), e.display.dragCursor || (e.display.dragCursor = x("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), k(e.display.dragCursor, r);
              }
            }(e, t), Oe(t));
          },
          start: function (t) {
            return function (e, t) {
              if (o && (!e.state.draggingText || +new Date() - Li < 100)) Oe(t);else if (!ge(e, t) && !On(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !f)) {
                var n = x("img", null, null, "position: fixed; left: 0; top: 0;");
                n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", p && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), p && n.parentNode.removeChild(n);
              }
            }(e, t);
          },
          drop: ra(e, Ri),
          leave: function (t) {
            ge(e, t) || Bi(e);
          }
        };
        var c = t.input.getField();
        he(c, "keyup", function (t) {
          return ho.call(e, t);
        }), he(c, "keydown", ra(e, fo)), he(c, "keypress", ra(e, _o)), he(c, "focus", function (t) {
          return Sr(e, t);
        }), he(c, "blur", function (t) {
          return Tr(e, t);
        });
      }(this), Fi(), $r(this), this.curOp.forceUpdate = !0, Ua(this, r), t.autofocus && !g || this.hasFocus() ? setTimeout(function () {
        n.hasFocus() && !n.state.focused && Sr(n);
      }, 20) : Tr(this), So) So.hasOwnProperty(c) && So[c](this, t[c], Oo);
      _a(this), t.finishInit && t.finishInit(this);
      for (var u = 0; u < Do.length; ++u) Do[u](this);
      qr(this), l && t.lineWrapping && "optimizelegibility" == getComputedStyle(i.lineDiv).textRendering && (i.lineDiv.style.textRendering = "auto");
    }
    xo.defaults = Mo, xo.optionHandlers = So;
    var Do = [];
    function Io(e, t, n, r) {
      var a,
        i = e.doc;
      null == n && (n = "add"), "smart" == n && (i.mode.indent ? a = mt(e, t).state : n = "prev");
      var o = e.options.tabSize,
        s = $e(i, t),
        l = H(s.text, null, o);
      s.stateAfter && (s.stateAfter = null);
      var c,
        u = s.text.match(/^\s*/)[0];
      if (r || /\S/.test(s.text)) {
        if ("smart" == n && ((c = i.mode.indent(a, s.text.slice(u.length), s.text)) == V || c > 150)) {
          if (!r) return;
          n = "prev";
        }
      } else c = 0, n = "not";
      "prev" == n ? c = t > i.first ? H($e(i, t - 1).text, null, o) : 0 : "add" == n ? c = l + e.options.indentUnit : "subtract" == n ? c = l - e.options.indentUnit : "number" == typeof n && (c = l + n), c = Math.max(0, c);
      var d = "",
        p = 0;
      if (e.options.indentWithTabs) for (var f = Math.floor(c / o); f; --f) p += o, d += "\t";
      if (p < c && (d += q(c - p)), d != u) return Ai(i, d, rt(t, 0), rt(t, u.length), "+input"), s.stateAfter = null, !0;
      for (var h = 0; h < i.sel.ranges.length; h++) {
        var _ = i.sel.ranges[h];
        if (_.head.line == t && _.head.ch < u.length) {
          var m = rt(t, u.length);
          Ja(i, h, new Ma(m, m));
          break;
        }
      }
    }
    xo.defineInitHook = function (e) {
      return Do.push(e);
    };
    var Po = null;
    function Lo(e) {
      Po = e;
    }
    function Ro(e, t, n, r, a) {
      var i = e.doc;
      e.display.shift = !1, r || (r = i.sel);
      var o = +new Date() - 200,
        s = "paste" == a || e.state.pasteIncoming > o,
        l = Le(t),
        c = null;
      if (s && r.ranges.length > 1) if (Po && Po.text.join("\n") == t) {
        if (r.ranges.length % Po.text.length == 0) {
          c = [];
          for (var u = 0; u < Po.text.length; u++) c.push(i.splitLines(Po.text[u]));
        }
      } else l.length == r.ranges.length && e.options.pasteLinesPerSelection && (c = X(l, function (e) {
        return [e];
      }));
      for (var d = e.curOp.updateInput, p = r.ranges.length - 1; p >= 0; p--) {
        var f = r.ranges[p],
          h = f.from(),
          _ = f.to();
        f.empty() && (n && n > 0 ? h = rt(h.line, h.ch - n) : e.state.overwrite && !s ? _ = rt(_.line, Math.min($e(i, _.line).text.length, _.ch + Z(l).length)) : s && Po && Po.lineWise && Po.text.join("\n") == l.join("\n") && (h = _ = rt(h.line, 0)));
        var m = {
          from: h,
          to: _,
          text: c ? c[p % c.length] : l,
          origin: a || (s ? "paste" : e.state.cutIncoming > o ? "cut" : "+input")
        };
        pi(e.doc, m), dn(e, "inputRead", e, m);
      }
      t && !s && No(e, t), Lr(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = d), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1;
    }
    function Bo(e, t) {
      var n = e.clipboardData && e.clipboardData.getData("Text");
      if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || !t.hasFocus() || na(t, function () {
        return Ro(t, n, 0, null, "paste");
      }), !0;
    }
    function No(e, t) {
      if (e.options.electricChars && e.options.smartIndent) for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
        var a = n.ranges[r];
        if (!(a.head.ch > 100 || r && n.ranges[r - 1].head.line == a.head.line)) {
          var i = e.getModeAt(a.head),
            o = !1;
          if (i.electricChars) {
            for (var s = 0; s < i.electricChars.length; s++) if (t.indexOf(i.electricChars.charAt(s)) > -1) {
              o = Io(e, a.head.line, "smart");
              break;
            }
          } else i.electricInput && i.electricInput.test($e(e.doc, a.head.line).text.slice(0, a.head.ch)) && (o = Io(e, a.head.line, "smart"));
          o && dn(e, "electricInput", e, a.head.line);
        }
      }
    }
    function Uo(e) {
      for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
        var a = e.doc.sel.ranges[r].head.line,
          i = {
            anchor: rt(a, 0),
            head: rt(a + 1, 0)
          };
        n.push(i), t.push(e.getRange(i.anchor, i.head));
      }
      return {
        text: t,
        ranges: n
      };
    }
    function Fo(e, t, n, r) {
      e.setAttribute("autocorrect", n ? "" : "off"), e.setAttribute("autocapitalize", r ? "" : "off"), e.setAttribute("spellcheck", !!t);
    }
    function jo() {
      var e = x("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),
        t = x("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
      return l ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), m && (e.style.border = "1px solid black"), Fo(e), t;
    }
    function Ho(e, t, n, r, a) {
      var i = t,
        o = n,
        s = $e(e, t.line),
        l = a && "rtl" == e.direction ? -n : n;
      function c(i) {
        var o, c;
        if ("codepoint" == r) {
          var u = s.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
          if (isNaN(u)) o = null;else {
            var d = n > 0 ? u >= 55296 && u < 56320 : u >= 56320 && u < 57343;
            o = new rt(t.line, Math.max(0, Math.min(s.text.length, t.ch + n * (d ? 2 : 1))), -n);
          }
        } else o = a ? function (e, t, n, r) {
          var a = pe(t, e.doc.direction);
          if (!a) return to(t, n, r);
          n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
          var i = ue(a, n.ch, n.sticky),
            o = a[i];
          if ("ltr" == e.doc.direction && o.level % 2 == 0 && (r > 0 ? o.to > n.ch : o.from < n.ch)) return to(t, n, r);
          var s,
            l = function (e, n) {
              return eo(t, e instanceof rt ? e.ch : e, n);
            },
            c = function (n) {
              return e.options.lineWrapping ? (s = s || Rn(e, t), tr(e, t, s, n)) : {
                begin: 0,
                end: t.text.length
              };
            },
            u = c("before" == n.sticky ? l(n, -1) : n.ch);
          if ("rtl" == e.doc.direction || 1 == o.level) {
            var d = 1 == o.level == r < 0,
              p = l(n, d ? 1 : -1);
            if (null != p && (d ? p <= o.to && p <= u.end : p >= o.from && p >= u.begin)) {
              var f = d ? "before" : "after";
              return new rt(n.line, p, f);
            }
          }
          var h = function (e, t, r) {
              for (var i = function (e, t) {
                return t ? new rt(n.line, l(e, 1), "before") : new rt(n.line, e, "after");
              }; e >= 0 && e < a.length; e += t) {
                var o = a[e],
                  s = t > 0 == (1 != o.level),
                  c = s ? r.begin : l(r.end, -1);
                if (o.from <= c && c < o.to) return i(c, s);
                if (c = s ? o.from : l(o.to, -1), r.begin <= c && c < r.end) return i(c, s);
              }
            },
            _ = h(i + r, r, u);
          if (_) return _;
          var m = r > 0 ? u.end : l(u.begin, -1);
          return null == m || r > 0 && m == t.text.length || !(_ = h(r > 0 ? 0 : a.length - 1, r, c(m))) ? null : _;
        }(e.cm, s, t, n) : to(s, t, n);
        if (null == o) {
          if (i || (c = t.line + l) < e.first || c >= e.first + e.size || (t = new rt(c, t.ch, t.sticky), !(s = $e(e, c)))) return !1;
          t = no(a, e.cm, s, t.line, l);
        } else t = o;
        return !0;
      }
      if ("char" == r || "codepoint" == r) c();else if ("column" == r) c(!0);else if ("word" == r || "group" == r) for (var u = null, d = "group" == r, p = e.cm && e.cm.getHelper(t, "wordChars"), f = !0; !(n < 0) || c(!f); f = !1) {
        var h = s.text.charAt(t.ch) || "\n",
          _ = re(h, p) ? "w" : d && "\n" == h ? "n" : !d || /\s/.test(h) ? null : "p";
        if (!d || f || _ || (_ = "s"), u && u != _) {
          n < 0 && (n = 1, c(), t.sticky = "after");
          break;
        }
        if (_ && (u = _), n > 0 && !c(!f)) break;
      }
      var m = li(e, t, i, o, !0);
      return it(i, m) && (m.hitSide = !0), m;
    }
    function Wo(e, t, n, r) {
      var a,
        i,
        o = e.doc,
        s = t.left;
      if ("page" == r) {
        var l = Math.min(e.display.wrapper.clientHeight, U(e).innerHeight || o(e).documentElement.clientHeight),
          c = Math.max(l - .5 * or(e.display), 3);
        a = (n > 0 ? t.bottom : t.top) + n * c;
      } else "line" == r && (a = n > 0 ? t.bottom + 3 : t.top - 3);
      for (; (i = Jn(e, s, a)).outside;) {
        if (n < 0 ? a <= 0 : a >= o.height) {
          i.hitSide = !0;
          break;
        }
        a += 5 * n;
      }
      return i;
    }
    var Ko = function (e) {
      this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new W(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
    };
    function Vo(e, t) {
      var n = Ln(e, t.line);
      if (!n || n.hidden) return null;
      var r = $e(e.doc, t.line),
        a = In(n, r, t.line),
        i = pe(r, e.doc.direction),
        o = "left";
      i && (o = ue(i, t.ch) % 2 ? "right" : "left");
      var s = Fn(a.map, t.ch, o);
      return s.offset = "right" == s.collapse ? s.end : s.start, s;
    }
    function zo(e, t) {
      return t && (e.bad = !0), e;
    }
    function Yo(e, t, n) {
      var r;
      if (t == e.display.lineDiv) {
        if (!(r = e.display.lineDiv.childNodes[n])) return zo(e.clipPos(rt(e.display.viewTo - 1)), !0);
        t = null, n = 0;
      } else for (r = t;; r = r.parentNode) {
        if (!r || r == e.display.lineDiv) return null;
        if (r.parentNode && r.parentNode == e.display.lineDiv) break;
      }
      for (var a = 0; a < e.display.view.length; a++) {
        var i = e.display.view[a];
        if (i.node == r) return Qo(i, t, n);
      }
    }
    function Qo(e, t, n) {
      var r = e.text.firstChild,
        a = !1;
      if (!t || !I(r, t)) return zo(rt(Je(e.line), 0), !0);
      if (t == r && (a = !0, t = r.childNodes[n], n = 0, !t)) {
        var i = e.rest ? Z(e.rest) : e.line;
        return zo(rt(Je(i), i.text.length), a);
      }
      var o = 3 == t.nodeType ? t : null,
        s = t;
      for (o || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (o = t.firstChild, n && (n = o.nodeValue.length)); s.parentNode != r;) s = s.parentNode;
      var l = e.measure,
        c = l.maps;
      function u(t, n, r) {
        for (var a = -1; a < (c ? c.length : 0); a++) for (var i = a < 0 ? l.map : c[a], o = 0; o < i.length; o += 3) {
          var s = i[o + 2];
          if (s == t || s == n) {
            var u = Je(a < 0 ? e.line : e.rest[a]),
              d = i[o] + r;
            return (r < 0 || s != t) && (d = i[o + (r ? 1 : 0)]), rt(u, d);
          }
        }
      }
      var d = u(o, s, n);
      if (d) return zo(d, a);
      for (var p = s.nextSibling, f = o ? o.nodeValue.length - n : 0; p; p = p.nextSibling) {
        if (d = u(p, p.firstChild, 0)) return zo(rt(d.line, d.ch - f), a);
        f += p.textContent.length;
      }
      for (var h = s.previousSibling, _ = n; h; h = h.previousSibling) {
        if (d = u(h, h.firstChild, -1)) return zo(rt(d.line, d.ch + _), a);
        _ += h.textContent.length;
      }
    }
    Ko.prototype.init = function (e) {
      var t = this,
        n = this,
        r = n.cm,
        a = n.div = e.lineDiv;
      function i(e) {
        for (var t = e.target; t; t = t.parentNode) {
          if (t == a) return !0;
          if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
        }
        return !1;
      }
      function o(e) {
        if (i(e) && !ge(r, e)) {
          if (r.somethingSelected()) Lo({
            lineWise: !1,
            text: r.getSelections()
          }), "cut" == e.type && r.replaceSelection("", null, "cut");else {
            if (!r.options.lineWiseCopyCut) return;
            var t = Uo(r);
            Lo({
              lineWise: !0,
              text: t.text
            }), "cut" == e.type && r.operation(function () {
              r.setSelections(t.ranges, 0, z), r.replaceSelection("", null, "cut");
            });
          }
          if (e.clipboardData) {
            e.clipboardData.clearData();
            var o = Po.text.join("\n");
            if (e.clipboardData.setData("Text", o), e.clipboardData.getData("Text") == o) return void e.preventDefault();
          }
          var s = jo(),
            l = s.firstChild;
          r.display.lineSpace.insertBefore(s, r.display.lineSpace.firstChild), l.value = Po.text.join("\n");
          var c = P(a.ownerDocument);
          B(l), setTimeout(function () {
            r.display.lineSpace.removeChild(s), c.focus(), c == a && n.showPrimarySelection();
          }, 50);
        }
      }
      a.contentEditable = !0, Fo(a, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize), he(a, "paste", function (e) {
        !i(e) || ge(r, e) || Bo(e, r) || s <= 11 && setTimeout(ra(r, function () {
          return t.updateFromDOM();
        }), 20);
      }), he(a, "compositionstart", function (e) {
        t.composing = {
          data: e.data,
          done: !1
        };
      }), he(a, "compositionupdate", function (e) {
        t.composing || (t.composing = {
          data: e.data,
          done: !1
        });
      }), he(a, "compositionend", function (e) {
        t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0);
      }), he(a, "touchstart", function () {
        return n.forceCompositionEnd();
      }), he(a, "input", function () {
        t.composing || t.readFromDOMSoon();
      }), he(a, "copy", o), he(a, "cut", o);
    }, Ko.prototype.screenReaderLabelChanged = function (e) {
      e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
    }, Ko.prototype.prepareSelection = function () {
      var e = vr(this.cm, !1);
      return e.focus = P(this.div.ownerDocument) == this.div, e;
    }, Ko.prototype.showSelection = function (e, t) {
      e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
    }, Ko.prototype.getSelection = function () {
      return this.cm.display.wrapper.ownerDocument.getSelection();
    }, Ko.prototype.showPrimarySelection = function () {
      var e = this.getSelection(),
        t = this.cm,
        r = t.doc.sel.primary(),
        a = r.from(),
        i = r.to();
      if (t.display.viewTo == t.display.viewFrom || a.line >= t.display.viewTo || i.line < t.display.viewFrom) e.removeAllRanges();else {
        var o = Yo(t, e.anchorNode, e.anchorOffset),
          s = Yo(t, e.focusNode, e.focusOffset);
        if (!o || o.bad || !s || s.bad || 0 != at(lt(o, s), a) || 0 != at(st(o, s), i)) {
          var l = t.display.view,
            c = a.line >= t.display.viewFrom && Vo(t, a) || {
              node: l[0].measure.map[2],
              offset: 0
            },
            u = i.line < t.display.viewTo && Vo(t, i);
          if (!u) {
            var d = l[l.length - 1].measure,
              p = d.maps ? d.maps[d.maps.length - 1] : d.map;
            u = {
              node: p[p.length - 1],
              offset: p[p.length - 2] - p[p.length - 3]
            };
          }
          if (c && u) {
            var f,
              h = e.rangeCount && e.getRangeAt(0);
            try {
              f = M(c.node, c.offset, u.offset, u.node);
            } catch (e) {}
            f && (!n && t.state.focused ? (e.collapse(c.node, c.offset), f.collapsed || (e.removeAllRanges(), e.addRange(f))) : (e.removeAllRanges(), e.addRange(f)), h && null == e.anchorNode ? e.addRange(h) : n && this.startGracePeriod()), this.rememberSelection();
          } else e.removeAllRanges();
        }
      }
    }, Ko.prototype.startGracePeriod = function () {
      var e = this;
      clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
        e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function () {
          return e.cm.curOp.selectionChanged = !0;
        });
      }, 20);
    }, Ko.prototype.showMultipleSelections = function (e) {
      k(this.cm.display.cursorDiv, e.cursors), k(this.cm.display.selectionDiv, e.selection);
    }, Ko.prototype.rememberSelection = function () {
      var e = this.getSelection();
      this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
    }, Ko.prototype.selectionInEditor = function () {
      var e = this.getSelection();
      if (!e.rangeCount) return !1;
      var t = e.getRangeAt(0).commonAncestorContainer;
      return I(this.div, t);
    }, Ko.prototype.focus = function () {
      "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() && P(this.div.ownerDocument) == this.div || this.showSelection(this.prepareSelection(), !0), this.div.focus());
    }, Ko.prototype.blur = function () {
      this.div.blur();
    }, Ko.prototype.getField = function () {
      return this.div;
    }, Ko.prototype.supportsTouch = function () {
      return !0;
    }, Ko.prototype.receivedFocus = function () {
      var e = this,
        t = this;
      this.selectionInEditor() ? setTimeout(function () {
        return e.pollSelection();
      }, 20) : na(this.cm, function () {
        return t.cm.curOp.selectionChanged = !0;
      }), this.polling.set(this.cm.options.pollInterval, function e() {
        t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e));
      });
    }, Ko.prototype.selectionChanged = function () {
      var e = this.getSelection();
      return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
    }, Ko.prototype.pollSelection = function () {
      if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
        var e = this.getSelection(),
          t = this.cm;
        if (A && u && this.cm.display.gutterSpecs.length && function (e) {
          for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
          return !1;
        }(e.anchorNode)) return this.cm.triggerOnKeyDown({
          type: "keydown",
          keyCode: 8,
          preventDefault: Math.abs
        }), this.blur(), void this.focus();
        if (!this.composing) {
          this.rememberSelection();
          var n = Yo(t, e.anchorNode, e.anchorOffset),
            r = Yo(t, e.focusNode, e.focusOffset);
          n && r && na(t, function () {
            ni(t.doc, Ta(n, r), z), (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
          });
        }
      }
    }, Ko.prototype.pollContent = function () {
      null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
      var e,
        t,
        n,
        r = this.cm,
        a = r.display,
        i = r.doc.sel.primary(),
        o = i.from(),
        s = i.to();
      if (0 == o.ch && o.line > r.firstLine() && (o = rt(o.line - 1, $e(r.doc, o.line - 1).length)), s.ch == $e(r.doc, s.line).text.length && s.line < r.lastLine() && (s = rt(s.line + 1, 0)), o.line < a.viewFrom || s.line > a.viewTo - 1) return !1;
      o.line == a.viewFrom || 0 == (e = fr(r, o.line)) ? (t = Je(a.view[0].line), n = a.view[0].node) : (t = Je(a.view[e].line), n = a.view[e - 1].node.nextSibling);
      var l,
        c,
        u = fr(r, s.line);
      if (u == a.view.length - 1 ? (l = a.viewTo - 1, c = a.lineDiv.lastChild) : (l = Je(a.view[u + 1].line) - 1, c = a.view[u + 1].node.previousSibling), !n) return !1;
      for (var d = r.doc.splitLines(function (e, t, n, r, a) {
          var i = "",
            o = !1,
            s = e.doc.lineSeparator(),
            l = !1;
          function c() {
            o && (i += s, l && (i += s), o = l = !1);
          }
          function u(e) {
            e && (c(), i += e);
          }
          function d(t) {
            if (1 == t.nodeType) {
              var n = t.getAttribute("cm-text");
              if (n) return void u(n);
              var i,
                p = t.getAttribute("cm-marker");
              if (p) {
                var f = e.findMarks(rt(r, 0), rt(a + 1, 0), (m = +p, function (e) {
                  return e.id == m;
                }));
                return void (f.length && (i = f[0].find(0)) && u(qe(e.doc, i.from, i.to).join(s)));
              }
              if ("false" == t.getAttribute("contenteditable")) return;
              var h = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
              if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
              h && c();
              for (var _ = 0; _ < t.childNodes.length; _++) d(t.childNodes[_]);
              /^(pre|p)$/i.test(t.nodeName) && (l = !0), h && (o = !0);
            } else 3 == t.nodeType && u(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
            var m;
          }
          for (; d(t), t != n;) t = t.nextSibling, l = !1;
          return i;
        }(r, n, c, t, l)), p = qe(r.doc, rt(t, 0), rt(l, $e(r.doc, l).text.length)); d.length > 1 && p.length > 1;) if (Z(d) == Z(p)) d.pop(), p.pop(), l--;else {
        if (d[0] != p[0]) break;
        d.shift(), p.shift(), t++;
      }
      for (var f = 0, h = 0, _ = d[0], m = p[0], A = Math.min(_.length, m.length); f < A && _.charCodeAt(f) == m.charCodeAt(f);) ++f;
      for (var g = Z(d), y = Z(p), v = Math.min(g.length - (1 == d.length ? f : 0), y.length - (1 == p.length ? f : 0)); h < v && g.charCodeAt(g.length - h - 1) == y.charCodeAt(y.length - h - 1);) ++h;
      if (1 == d.length && 1 == p.length && t == o.line) for (; f && f > o.ch && g.charCodeAt(g.length - h - 1) == y.charCodeAt(y.length - h - 1);) f--, h++;
      d[d.length - 1] = g.slice(0, g.length - h).replace(/^\u200b+/, ""), d[0] = d[0].slice(f).replace(/\u200b+$/, "");
      var E = rt(t, f),
        b = rt(l, p.length ? Z(p).length - h : 0);
      return d.length > 1 || d[0] || at(E, b) ? (Ai(r.doc, d, E, b, "+input"), !0) : void 0;
    }, Ko.prototype.ensurePolled = function () {
      this.forceCompositionEnd();
    }, Ko.prototype.reset = function () {
      this.forceCompositionEnd();
    }, Ko.prototype.forceCompositionEnd = function () {
      this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
    }, Ko.prototype.readFromDOMSoon = function () {
      var e = this;
      null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
        if (e.readDOMTimeout = null, e.composing) {
          if (!e.composing.done) return;
          e.composing = null;
        }
        e.updateFromDOM();
      }, 80));
    }, Ko.prototype.updateFromDOM = function () {
      var e = this;
      !this.cm.isReadOnly() && this.pollContent() || na(this.cm, function () {
        return hr(e.cm);
      });
    }, Ko.prototype.setUneditable = function (e) {
      e.contentEditable = "false";
    }, Ko.prototype.onKeyPress = function (e) {
      0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || ra(this.cm, Ro)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0));
    }, Ko.prototype.readOnlyChanged = function (e) {
      this.div.contentEditable = String("nocursor" != e);
    }, Ko.prototype.onContextMenu = function () {}, Ko.prototype.resetPosition = function () {}, Ko.prototype.needsContentAttribute = !0;
    var Go,
      $o,
      qo,
      Zo = function (e) {
        this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new W(), this.hasSelection = !1, this.composing = null, this.resetting = !1;
      };
    Zo.prototype.init = function (e) {
      var t = this,
        n = this,
        r = this.cm;
      this.createField(e);
      var a = this.textarea;
      function i(e) {
        if (!ge(r, e)) {
          if (r.somethingSelected()) Lo({
            lineWise: !1,
            text: r.getSelections()
          });else {
            if (!r.options.lineWiseCopyCut) return;
            var t = Uo(r);
            Lo({
              lineWise: !0,
              text: t.text
            }), "cut" == e.type ? r.setSelections(t.ranges, null, z) : (n.prevInput = "", a.value = t.text.join("\n"), B(a));
          }
          "cut" == e.type && (r.state.cutIncoming = +new Date());
        }
      }
      e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), m && (a.style.width = "0px"), he(a, "input", function () {
        o && s >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
      }), he(a, "paste", function (e) {
        ge(r, e) || Bo(e, r) || (r.state.pasteIncoming = +new Date(), n.fastPoll());
      }), he(a, "cut", i), he(a, "copy", i), he(e.scroller, "paste", function (t) {
        if (!On(e, t) && !ge(r, t)) {
          if (!a.dispatchEvent) return r.state.pasteIncoming = +new Date(), void n.focus();
          var i = new Event("paste");
          i.clipboardData = t.clipboardData, a.dispatchEvent(i);
        }
      }), he(e.lineSpace, "selectstart", function (t) {
        On(e, t) || be(t);
      }), he(a, "compositionstart", function () {
        var e = r.getCursor("from");
        n.composing && n.composing.range.clear(), n.composing = {
          start: e,
          range: r.markText(e, r.getCursor("to"), {
            className: "CodeMirror-composing"
          })
        };
      }), he(a, "compositionend", function () {
        n.composing && (n.poll(), n.composing.range.clear(), n.composing = null);
      });
    }, Zo.prototype.createField = function (e) {
      this.wrapper = jo(), this.textarea = this.wrapper.firstChild;
    }, Zo.prototype.screenReaderLabelChanged = function (e) {
      e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
    }, Zo.prototype.prepareSelection = function () {
      var e = this.cm,
        t = e.display,
        n = e.doc,
        r = vr(e);
      if (e.options.moveInputWithCursor) {
        var a = qn(e, n.sel.primary().head, "div"),
          i = t.wrapper.getBoundingClientRect(),
          o = t.lineDiv.getBoundingClientRect();
        r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, a.top + o.top - i.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, a.left + o.left - i.left));
      }
      return r;
    }, Zo.prototype.showSelection = function (e) {
      var t = this.cm.display;
      k(t.cursorDiv, e.cursors), k(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
    }, Zo.prototype.reset = function (e) {
      if (!(this.contextMenuPending || this.composing && e)) {
        var t = this.cm;
        if (this.resetting = !0, t.somethingSelected()) {
          this.prevInput = "";
          var n = t.getSelection();
          this.textarea.value = n, t.state.focused && B(this.textarea), o && s >= 9 && (this.hasSelection = n);
        } else e || (this.prevInput = this.textarea.value = "", o && s >= 9 && (this.hasSelection = null));
        this.resetting = !1;
      }
    }, Zo.prototype.getField = function () {
      return this.textarea;
    }, Zo.prototype.supportsTouch = function () {
      return !1;
    }, Zo.prototype.focus = function () {
      if ("nocursor" != this.cm.options.readOnly && (!g || P(this.textarea.ownerDocument) != this.textarea)) try {
        this.textarea.focus();
      } catch (e) {}
    }, Zo.prototype.blur = function () {
      this.textarea.blur();
    }, Zo.prototype.resetPosition = function () {
      this.wrapper.style.top = this.wrapper.style.left = 0;
    }, Zo.prototype.receivedFocus = function () {
      this.slowPoll();
    }, Zo.prototype.slowPoll = function () {
      var e = this;
      this.pollingFast || this.polling.set(this.cm.options.pollInterval, function () {
        e.poll(), e.cm.state.focused && e.slowPoll();
      });
    }, Zo.prototype.fastPoll = function () {
      var e = !1,
        t = this;
      t.pollingFast = !0, t.polling.set(20, function n() {
        t.poll() || e ? (t.pollingFast = !1, t.slowPoll()) : (e = !0, t.polling.set(60, n));
      });
    }, Zo.prototype.poll = function () {
      var e = this,
        t = this.cm,
        n = this.textarea,
        r = this.prevInput;
      if (this.contextMenuPending || this.resetting || !t.state.focused || Re(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
      var a = n.value;
      if (a == r && !t.somethingSelected()) return !1;
      if (o && s >= 9 && this.hasSelection === a || y && /[\uf700-\uf7ff]/.test(a)) return t.display.input.reset(), !1;
      if (t.doc.sel == t.display.selForContextMenu) {
        var i = a.charCodeAt(0);
        if (8203 != i || r || (r = "​"), 8666 == i) return this.reset(), this.cm.execCommand("undo");
      }
      for (var l = 0, c = Math.min(r.length, a.length); l < c && r.charCodeAt(l) == a.charCodeAt(l);) ++l;
      return na(t, function () {
        Ro(t, a.slice(l), r.length - l, null, e.composing ? "*compose" : null), a.length > 1e3 || a.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = a, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
          className: "CodeMirror-composing"
        }));
      }), !0;
    }, Zo.prototype.ensurePolled = function () {
      this.pollingFast && this.poll() && (this.pollingFast = !1);
    }, Zo.prototype.onKeyPress = function () {
      o && s >= 9 && (this.hasSelection = null), this.fastPoll();
    }, Zo.prototype.onContextMenu = function (e) {
      var t = this,
        n = t.cm,
        r = n.display,
        a = t.textarea;
      t.contextMenuPending && t.contextMenuPending();
      var i = pr(n, e),
        c = r.scroller.scrollTop;
      if (i && !p) {
        n.options.resetSelectionOnContextMenu && -1 == n.doc.sel.contains(i) && ra(n, ni)(n.doc, Ta(i), z);
        var u,
          d = a.style.cssText,
          f = t.wrapper.style.cssText,
          h = t.wrapper.offsetParent.getBoundingClientRect();
        if (t.wrapper.style.cssText = "position: static", a.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - h.top - 5) + "px; left: " + (e.clientX - h.left - 5) + "px;\n      z-index: 1000; background: " + (o ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", l && (u = a.ownerDocument.defaultView.scrollY), r.input.focus(), l && a.ownerDocument.defaultView.scrollTo(null, u), r.input.reset(), n.somethingSelected() || (a.value = t.prevInput = " "), t.contextMenuPending = A, r.selForContextMenu = n.doc.sel, clearTimeout(r.detectingSelectAll), o && s >= 9 && m(), C) {
          Oe(e);
          var _ = function () {
            me(window, "mouseup", _), setTimeout(A, 20);
          };
          he(window, "mouseup", _);
        } else setTimeout(A, 50);
      }
      function m() {
        if (null != a.selectionStart) {
          var e = n.somethingSelected(),
            i = "​" + (e ? a.value : "");
          a.value = "⇚", a.value = i, t.prevInput = e ? "" : "​", a.selectionStart = 1, a.selectionEnd = i.length, r.selForContextMenu = n.doc.sel;
        }
      }
      function A() {
        if (t.contextMenuPending == A && (t.contextMenuPending = !1, t.wrapper.style.cssText = f, a.style.cssText = d, o && s < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = c), null != a.selectionStart)) {
          (!o || o && s < 9) && m();
          var e = 0,
            i = function () {
              r.selForContextMenu == n.doc.sel && 0 == a.selectionStart && a.selectionEnd > 0 && "​" == t.prevInput ? ra(n, ui)(n) : e++ < 10 ? r.detectingSelectAll = setTimeout(i, 500) : (r.selForContextMenu = null, r.input.reset());
            };
          r.detectingSelectAll = setTimeout(i, 200);
        }
      }
    }, Zo.prototype.readOnlyChanged = function (e) {
      e || this.reset(), this.textarea.disabled = "nocursor" == e, this.textarea.readOnly = !!e;
    }, Zo.prototype.setUneditable = function () {}, Zo.prototype.needsContentAttribute = !1, function (e) {
      var t = e.optionHandlers;
      function n(n, r, a, i) {
        e.defaults[n] = r, a && (t[n] = i ? function (e, t, n) {
          n != Oo && a(e, t, n);
        } : a);
      }
      e.defineOption = n, e.Init = Oo, n("value", "", function (e, t) {
        return e.setValue(t);
      }, !0), n("mode", null, function (e, t) {
        e.doc.modeOption = t, Pa(e);
      }, !0), n("indentUnit", 2, Pa, !0), n("indentWithTabs", !1), n("smartIndent", !0), n("tabSize", 4, function (e) {
        La(e), Kn(e), hr(e);
      }, !0), n("lineSeparator", null, function (e, t) {
        if (e.doc.lineSep = t, t) {
          var n = [],
            r = e.doc.first;
          e.doc.iter(function (e) {
            for (var a = 0;;) {
              var i = e.text.indexOf(t, a);
              if (-1 == i) break;
              a = i + t.length, n.push(rt(r, i));
            }
            r++;
          });
          for (var a = n.length - 1; a >= 0; a--) Ai(e.doc, t, n[a], rt(n[a].line, n[a].ch + t.length));
        }
      }), n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function (e, t, n) {
        e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != Oo && e.refresh();
      }), n("specialCharPlaceholder", tn, function (e) {
        return e.refresh();
      }, !0), n("electricChars", !0), n("inputStyle", g ? "contenteditable" : "textarea", function () {
        throw new Error("inputStyle can not (yet) be changed in a running editor");
      }, !0), n("spellcheck", !1, function (e, t) {
        return e.getInputField().spellcheck = t;
      }, !0), n("autocorrect", !1, function (e, t) {
        return e.getInputField().autocorrect = t;
      }, !0), n("autocapitalize", !1, function (e, t) {
        return e.getInputField().autocapitalize = t;
      }, !0), n("rtlMoveVisually", !E), n("wholeLineUpdateBefore", !0), n("theme", "default", function (e) {
        Co(e), ga(e);
      }, !0), n("keyMap", "default", function (e, t, n) {
        var r = Xi(t),
          a = n != Oo && Xi(n);
        a && a.detach && a.detach(e, r), r.attach && r.attach(e, a || null);
      }), n("extraKeys", null), n("configureMouse", null), n("lineWrapping", !1, ko, !0), n("gutters", [], function (e, t) {
        e.display.gutterSpecs = ma(t, e.options.lineNumbers), ga(e);
      }, !0), n("fixedGutter", !0, function (e, t) {
        e.display.gutters.style.left = t ? cr(e.display) + "px" : "0", e.refresh();
      }, !0), n("coverGutterNextToScrollbar", !1, function (e) {
        return Vr(e);
      }, !0), n("scrollbarStyle", "native", function (e) {
        Qr(e), Vr(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
      }, !0), n("lineNumbers", !1, function (e, t) {
        e.display.gutterSpecs = ma(e.options.gutters, t), ga(e);
      }, !0), n("firstLineNumber", 1, ga, !0), n("lineNumberFormatter", function (e) {
        return e;
      }, ga, !0), n("showCursorWhenSelecting", !1, yr, !0), n("resetSelectionOnContextMenu", !0), n("lineWiseCopyCut", !0), n("pasteLinesPerSelection", !0), n("selectionsMayTouch", !1), n("readOnly", !1, function (e, t) {
        "nocursor" == t && (Tr(e), e.display.input.blur()), e.display.input.readOnlyChanged(t);
      }), n("screenReaderLabel", null, function (e, t) {
        t = "" === t ? null : t, e.display.input.screenReaderLabelChanged(t);
      }), n("disableInput", !1, function (e, t) {
        t || e.display.input.reset();
      }, !0), n("dragDrop", !0, To), n("allowDropFileTypes", null), n("cursorBlinkRate", 530), n("cursorScrollMargin", 0), n("cursorHeight", 1, yr, !0), n("singleCursorHeightPerLine", !0, yr, !0), n("workTime", 100), n("workDelay", 100), n("flattenSpans", !0, La, !0), n("addModeClass", !1, La, !0), n("pollInterval", 100), n("undoDepth", 200, function (e, t) {
        return e.doc.history.undoDepth = t;
      }), n("historyEventDelay", 1250), n("viewportMargin", 10, function (e) {
        return e.refresh();
      }, !0), n("maxHighlightLength", 1e4, La, !0), n("moveInputWithCursor", !0, function (e, t) {
        t || e.display.input.resetPosition();
      }), n("tabindex", null, function (e, t) {
        return e.display.input.getField().tabIndex = t || "";
      }), n("autofocus", null), n("direction", "ltr", function (e, t) {
        return e.doc.setDirection(t);
      }, !0), n("phrases", null);
    }(xo), $o = (Go = xo).optionHandlers, qo = Go.helpers = {}, Go.prototype = {
      constructor: Go,
      focus: function () {
        U(this).focus(), this.display.input.focus();
      },
      setOption: function (e, t) {
        var n = this.options,
          r = n[e];
        n[e] == t && "mode" != e || (n[e] = t, $o.hasOwnProperty(e) && ra(this, $o[e])(this, t, r), Ae(this, "optionChange", this, e));
      },
      getOption: function (e) {
        return this.options[e];
      },
      getDoc: function () {
        return this.doc;
      },
      addKeyMap: function (e, t) {
        this.state.keyMaps[t ? "push" : "unshift"](Xi(e));
      },
      removeKeyMap: function (e) {
        for (var t = this.state.keyMaps, n = 0; n < t.length; ++n) if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
      },
      addOverlay: aa(function (e, t) {
        var n = e.token ? e : Go.getMode(this.options, e);
        if (n.startState) throw new Error("Overlays may not be stateful.");
        (function (e, t, n) {
          for (var r = 0, a = n(t); r < e.length && n(e[r]) <= a;) r++;
          e.splice(r, 0, t);
        })(this.state.overlays, {
          mode: n,
          modeSpec: e,
          opaque: t && t.opaque,
          priority: t && t.priority || 0
        }, function (e) {
          return e.priority;
        }), this.state.modeGen++, hr(this);
      }),
      removeOverlay: aa(function (e) {
        for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
          var r = t[n].modeSpec;
          if (r == e || "string" == typeof e && r.name == e) return t.splice(n, 1), this.state.modeGen++, void hr(this);
        }
      }),
      indentLine: aa(function (e, t, n) {
        "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), tt(this.doc, e) && Io(this, e, t, n);
      }),
      indentSelection: aa(function (e) {
        for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
          var a = t[r];
          if (a.empty()) a.head.line > n && (Io(this, a.head.line, e, !0), n = a.head.line, r == this.doc.sel.primIndex && Lr(this));else {
            var i = a.from(),
              o = a.to(),
              s = Math.max(n, i.line);
            n = Math.min(this.lastLine(), o.line - (o.ch ? 0 : 1)) + 1;
            for (var l = s; l < n; ++l) Io(this, l, e);
            var c = this.doc.sel.ranges;
            0 == i.ch && t.length == c.length && c[r].from().ch > 0 && Ja(this.doc, r, new Ma(i, c[r].to()), z);
          }
        }
      }),
      getTokenAt: function (e, t) {
        return Et(this, e, t);
      },
      getLineTokens: function (e, t) {
        return Et(this, rt(e), t, !0);
      },
      getTokenTypeAt: function (e) {
        e = ut(this.doc, e);
        var t,
          n = _t(this, $e(this.doc, e.line)),
          r = 0,
          a = (n.length - 1) / 2,
          i = e.ch;
        if (0 == i) t = n[2];else for (;;) {
          var o = r + a >> 1;
          if ((o ? n[2 * o - 1] : 0) >= i) a = o;else {
            if (!(n[2 * o + 1] < i)) {
              t = n[2 * o + 2];
              break;
            }
            r = o + 1;
          }
        }
        var s = t ? t.indexOf("overlay ") : -1;
        return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1);
      },
      getModeAt: function (e) {
        var t = this.doc.mode;
        return t.innerMode ? Go.innerMode(t, this.getTokenAt(e).state).mode : t;
      },
      getHelper: function (e, t) {
        return this.getHelpers(e, t)[0];
      },
      getHelpers: function (e, t) {
        var n = [];
        if (!qo.hasOwnProperty(t)) return n;
        var r = qo[t],
          a = this.getModeAt(e);
        if ("string" == typeof a[t]) r[a[t]] && n.push(r[a[t]]);else if (a[t]) for (var i = 0; i < a[t].length; i++) {
          var o = r[a[t][i]];
          o && n.push(o);
        } else a.helperType && r[a.helperType] ? n.push(r[a.helperType]) : r[a.name] && n.push(r[a.name]);
        for (var s = 0; s < r._global.length; s++) {
          var l = r._global[s];
          l.pred(a, this) && -1 == K(n, l.val) && n.push(l.val);
        }
        return n;
      },
      getStateAfter: function (e, t) {
        var n = this.doc;
        return mt(this, (e = ct(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state;
      },
      cursorCoords: function (e, t) {
        var n = this.doc.sel.primary();
        return qn(this, null == e ? n.head : "object" == typeof e ? ut(this.doc, e) : e ? n.from() : n.to(), t || "page");
      },
      charCoords: function (e, t) {
        return $n(this, ut(this.doc, e), t || "page");
      },
      coordsChar: function (e, t) {
        return Jn(this, (e = Gn(this, e, t || "page")).left, e.top);
      },
      lineAtHeight: function (e, t) {
        return e = Gn(this, {
          top: e,
          left: 0
        }, t || "page").top, et(this.doc, e + this.display.viewOffset);
      },
      heightAtLine: function (e, t, n) {
        var r,
          a = !1;
        if ("number" == typeof e) {
          var i = this.doc.first + this.doc.size - 1;
          e < this.doc.first ? e = this.doc.first : e > i && (e = i, a = !0), r = $e(this.doc, e);
        } else r = e;
        return Qn(this, r, {
          top: 0,
          left: 0
        }, t || "page", n || a).top + (a ? this.doc.height - Yt(r) : 0);
      },
      defaultTextHeight: function () {
        return or(this.display);
      },
      defaultCharWidth: function () {
        return sr(this.display);
      },
      getViewport: function () {
        return {
          from: this.display.viewFrom,
          to: this.display.viewTo
        };
      },
      addWidget: function (e, t, n, r, a) {
        var i,
          o,
          s,
          l = this.display,
          c = (e = qn(this, ut(this.doc, e))).bottom,
          u = e.left;
        if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), l.sizer.appendChild(t), "over" == r) c = e.top;else if ("above" == r || "near" == r) {
          var d = Math.max(l.wrapper.clientHeight, this.doc.height),
            p = Math.max(l.sizer.clientWidth, l.lineSpace.clientWidth);
          ("above" == r || e.bottom + t.offsetHeight > d) && e.top > t.offsetHeight ? c = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= d && (c = e.bottom), u + t.offsetWidth > p && (u = p - t.offsetWidth);
        }
        t.style.top = c + "px", t.style.left = t.style.right = "", "right" == a ? (u = l.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == a ? u = 0 : "middle" == a && (u = (l.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = u + "px"), n && (i = this, o = {
          left: u,
          top: c,
          right: u + t.offsetWidth,
          bottom: c + t.offsetHeight
        }, null != (s = Ir(i, o)).scrollTop && Ur(i, s.scrollTop), null != s.scrollLeft && jr(i, s.scrollLeft));
      },
      triggerOnKeyDown: aa(fo),
      triggerOnKeyPress: aa(_o),
      triggerOnKeyUp: ho,
      triggerOnMouseDown: aa(yo),
      execCommand: function (e) {
        if (ro.hasOwnProperty(e)) return ro[e].call(null, this);
      },
      triggerElectric: aa(function (e) {
        No(this, e);
      }),
      findPosH: function (e, t, n, r) {
        var a = 1;
        t < 0 && (a = -1, t = -t);
        for (var i = ut(this.doc, e), o = 0; o < t && !(i = Ho(this.doc, i, a, n, r)).hitSide; ++o);
        return i;
      },
      moveH: aa(function (e, t) {
        var n = this;
        this.extendSelectionsBy(function (r) {
          return n.display.shift || n.doc.extend || r.empty() ? Ho(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to();
        }, Q);
      }),
      deleteH: aa(function (e, t) {
        var n = this.doc.sel,
          r = this.doc;
        n.somethingSelected() ? r.replaceSelection("", null, "+delete") : Ji(this, function (n) {
          var a = Ho(r, n.head, e, t, !1);
          return e < 0 ? {
            from: a,
            to: n.head
          } : {
            from: n.head,
            to: a
          };
        });
      }),
      findPosV: function (e, t, n, r) {
        var a = 1,
          i = r;
        t < 0 && (a = -1, t = -t);
        for (var o = ut(this.doc, e), s = 0; s < t; ++s) {
          var l = qn(this, o, "div");
          if (null == i ? i = l.left : l.left = i, (o = Wo(this, l, a, n)).hitSide) break;
        }
        return o;
      },
      moveV: aa(function (e, t) {
        var n = this,
          r = this.doc,
          a = [],
          i = !this.display.shift && !r.extend && r.sel.somethingSelected();
        if (r.extendSelectionsBy(function (o) {
          if (i) return e < 0 ? o.from() : o.to();
          var s = qn(n, o.head, "div");
          null != o.goalColumn && (s.left = o.goalColumn), a.push(s.left);
          var l = Wo(n, s, e, t);
          return "page" == t && o == r.sel.primary() && Pr(n, $n(n, l, "div").top - s.top), l;
        }, Q), a.length) for (var o = 0; o < r.sel.ranges.length; o++) r.sel.ranges[o].goalColumn = a[o];
      }),
      findWordAt: function (e) {
        var t = $e(this.doc, e.line).text,
          n = e.ch,
          r = e.ch;
        if (t) {
          var a = this.getHelper(e, "wordChars");
          "before" != e.sticky && r != t.length || !n ? ++r : --n;
          for (var i = t.charAt(n), o = re(i, a) ? function (e) {
              return re(e, a);
            } : /\s/.test(i) ? function (e) {
              return /\s/.test(e);
            } : function (e) {
              return !/\s/.test(e) && !re(e);
            }; n > 0 && o(t.charAt(n - 1));) --n;
          for (; r < t.length && o(t.charAt(r));) ++r;
        }
        return new Ma(rt(e.line, n), rt(e.line, r));
      },
      toggleOverwrite: function (e) {
        null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? L(this.display.cursorDiv, "CodeMirror-overwrite") : S(this.display.cursorDiv, "CodeMirror-overwrite"), Ae(this, "overwriteToggle", this, this.state.overwrite));
      },
      hasFocus: function () {
        return this.display.input.getField() == P(N(this));
      },
      isReadOnly: function () {
        return !(!this.options.readOnly && !this.doc.cantEdit);
      },
      scrollTo: aa(function (e, t) {
        Rr(this, e, t);
      }),
      getScrollInfo: function () {
        var e = this.display.scroller;
        return {
          left: e.scrollLeft,
          top: e.scrollTop,
          height: e.scrollHeight - kn(this) - this.display.barHeight,
          width: e.scrollWidth - kn(this) - this.display.barWidth,
          clientHeight: Dn(this),
          clientWidth: xn(this)
        };
      },
      scrollIntoView: aa(function (e, t) {
        null == e ? (e = {
          from: this.doc.sel.primary().head,
          to: null
        }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
          from: rt(e, 0),
          to: null
        } : null == e.from && (e = {
          from: e,
          to: null
        }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? function (e, t) {
          Br(e), e.curOp.scrollToPos = t;
        }(this, e) : Nr(this, e.from, e.to, e.margin);
      }),
      setSize: aa(function (e, t) {
        var n = this,
          r = function (e) {
            return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e;
          };
        null != e && (this.display.wrapper.style.width = r(e)), null != t && (this.display.wrapper.style.height = r(t)), this.options.lineWrapping && Wn(this);
        var a = this.display.viewFrom;
        this.doc.iter(a, this.display.viewTo, function (e) {
          if (e.widgets) for (var t = 0; t < e.widgets.length; t++) if (e.widgets[t].noHScroll) {
            _r(n, a, "widget");
            break;
          }
          ++a;
        }), this.curOp.forceUpdate = !0, Ae(this, "refresh", this);
      }),
      operation: function (e) {
        return na(this, e);
      },
      startOperation: function () {
        return $r(this);
      },
      endOperation: function () {
        return qr(this);
      },
      refresh: aa(function () {
        var e = this.display.cachedTextHeight;
        hr(this), this.curOp.forceUpdate = !0, Kn(this), Rr(this, this.doc.scrollLeft, this.doc.scrollTop), pa(this.display), (null == e || Math.abs(e - or(this.display)) > .5 || this.options.lineWrapping) && dr(this), Ae(this, "refresh", this);
      }),
      swapDoc: aa(function (e) {
        var t = this.doc;
        return t.cm = null, this.state.selectingText && this.state.selectingText(), Ua(this, e), Kn(this), this.display.input.reset(), Rr(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, dn(this, "swapDoc", this, t), t;
      }),
      phrase: function (e) {
        var t = this.options.phrases;
        return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
      },
      getInputField: function () {
        return this.display.input.getField();
      },
      getWrapperElement: function () {
        return this.display.wrapper;
      },
      getScrollerElement: function () {
        return this.display.scroller;
      },
      getGutterElement: function () {
        return this.display.gutters;
      }
    }, Ee(Go), Go.registerHelper = function (e, t, n) {
      qo.hasOwnProperty(e) || (qo[e] = Go[e] = {
        _global: []
      }), qo[e][t] = n;
    }, Go.registerGlobalHelper = function (e, t, n, r) {
      Go.registerHelper(e, t, r), qo[e]._global.push({
        pred: n,
        val: r
      });
    };
    var Xo = "iter insert remove copy getEditor constructor".split(" ");
    for (var Jo in Pi.prototype) Pi.prototype.hasOwnProperty(Jo) && K(Xo, Jo) < 0 && (xo.prototype[Jo] = function (e) {
      return function () {
        return e.apply(this.doc, arguments);
      };
    }(Pi.prototype[Jo]));
    return Ee(Pi), xo.inputStyles = {
      textarea: Zo,
      contenteditable: Ko
    }, xo.defineMode = function (e) {
      xo.defaults.mode || "null" == e || (xo.defaults.mode = e), je.apply(this, arguments);
    }, xo.defineMIME = function (e, t) {
      Fe[e] = t;
    }, xo.defineMode("null", function () {
      return {
        token: function (e) {
          return e.skipToEnd();
        }
      };
    }), xo.defineMIME("text/plain", "null"), xo.defineExtension = function (e, t) {
      xo.prototype[e] = t;
    }, xo.defineDocExtension = function (e, t) {
      Pi.prototype[e] = t;
    }, xo.fromTextArea = function (e, t) {
      if ((t = t ? j(t) : {}).value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
        var n = P(e.ownerDocument);
        t.autofocus = n == e || null != e.getAttribute("autofocus") && n == document.body;
      }
      function r() {
        e.value = s.getValue();
      }
      var a;
      if (e.form && (he(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
        var i = e.form;
        a = i.submit;
        try {
          var o = i.submit = function () {
            r(), i.submit = a, i.submit(), i.submit = o;
          };
        } catch (e) {}
      }
      t.finishInit = function (n) {
        n.save = r, n.getTextArea = function () {
          return e;
        }, n.toTextArea = function () {
          n.toTextArea = isNaN, r(), e.parentNode.removeChild(n.getWrapperElement()), e.style.display = "", e.form && (me(e.form, "submit", r), t.leaveSubmitMethodAlone || "function" != typeof e.form.submit || (e.form.submit = a));
        };
      }, e.style.display = "none";
      var s = xo(function (t) {
        return e.parentNode.insertBefore(t, e.nextSibling);
      }, t);
      return s;
    }, function (e) {
      e.off = me, e.on = he, e.wheelEventPixels = wa, e.Doc = Pi, e.splitLines = Le, e.countColumn = H, e.findColumn = G, e.isWordChar = ne, e.Pass = V, e.signal = Ae, e.Line = $t, e.changeEnd = ka, e.scrollbarModel = Yr, e.Pos = rt, e.cmpPos = at, e.modes = Ue, e.mimeModes = Fe, e.resolveMode = He, e.getMode = We, e.modeExtensions = Ke, e.extendMode = Ve, e.copyState = ze, e.startState = Qe, e.innerMode = Ye, e.commands = ro, e.keyMap = zi, e.keyName = Zi, e.isModifierKey = $i, e.lookupKey = Gi, e.normalizeKeyMap = Qi, e.StringStream = Ge, e.SharedTextMarker = ki, e.TextMarker = Si, e.LineWidget = Ci, e.e_preventDefault = be, e.e_stopPropagation = we, e.e_stop = Oe, e.addClass = L, e.contains = I, e.rmClass = S, e.keyNames = Hi;
    }(xo), xo.version = "5.65.10", xo;
  }(), i = {
    autoSelfClosers: {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      command: !0,
      embed: !0,
      frame: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
      menuitem: !0
    },
    implicitlyClosed: {
      dd: !0,
      li: !0,
      optgroup: !0,
      option: !0,
      p: !0,
      rp: !0,
      rt: !0,
      tbody: !0,
      td: !0,
      tfoot: !0,
      th: !0,
      tr: !0
    },
    contextGrabbers: {
      dd: {
        dd: !0,
        dt: !0
      },
      dt: {
        dd: !0,
        dt: !0
      },
      li: {
        li: !0
      },
      option: {
        option: !0,
        optgroup: !0
      },
      optgroup: {
        optgroup: !0
      },
      p: {
        address: !0,
        article: !0,
        aside: !0,
        blockquote: !0,
        dir: !0,
        div: !0,
        dl: !0,
        fieldset: !0,
        footer: !0,
        form: !0,
        h1: !0,
        h2: !0,
        h3: !0,
        h4: !0,
        h5: !0,
        h6: !0,
        header: !0,
        hgroup: !0,
        hr: !0,
        menu: !0,
        nav: !0,
        ol: !0,
        p: !0,
        pre: !0,
        section: !0,
        table: !0,
        ul: !0
      },
      rp: {
        rp: !0,
        rt: !0
      },
      rt: {
        rp: !0,
        rt: !0
      },
      tbody: {
        tbody: !0,
        tfoot: !0
      },
      td: {
        td: !0,
        th: !0
      },
      tfoot: {
        tbody: !0
      },
      th: {
        td: !0,
        th: !0
      },
      thead: {
        tbody: !0,
        tfoot: !0
      },
      tr: {
        tr: !0
      }
    },
    doNotIndent: {
      pre: !0
    },
    allowUnquoted: !0,
    allowMissing: !0,
    caseFold: !0
  }, o = {
    autoSelfClosers: {},
    implicitlyClosed: {},
    contextGrabbers: {},
    doNotIndent: {},
    allowUnquoted: !1,
    allowMissing: !1,
    allowMissingTagName: !1,
    caseFold: !1
  }, (a = u.exports).defineMode("xml", function (e, t) {
    var n,
      r,
      s = e.indentUnit,
      l = {},
      c = t.htmlMode ? i : o;
    for (var u in c) l[u] = c[u];
    for (var u in t) l[u] = t[u];
    function d(e, t) {
      function r(n) {
        return t.tokenize = n, n(e, t);
      }
      var a = e.next();
      return "<" == a ? e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? r(f("atom", "]]>")) : null : e.match("--") ? r(f("comment", "--\x3e")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), r(h(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = f("meta", "?>"), "meta") : (n = e.eat("/") ? "closeTag" : "openTag", t.tokenize = p, "tag bracket") : "&" == a ? (e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";")) ? "atom" : "error" : (e.eatWhile(/[^&<]/), null);
    }
    function p(e, t) {
      var r,
        a,
        i = e.next();
      if (">" == i || "/" == i && e.eat(">")) return t.tokenize = d, n = ">" == i ? "endTag" : "selfcloseTag", "tag bracket";
      if ("=" == i) return n = "equals", null;
      if ("<" == i) {
        t.tokenize = d, t.state = y, t.tagName = t.tagStart = null;
        var o = t.tokenize(e, t);
        return o ? o + " tag error" : "tag error";
      }
      return /[\'\"]/.test(i) ? (t.tokenize = (r = i, a = function (e, t) {
        for (; !e.eol();) if (e.next() == r) {
          t.tokenize = p;
          break;
        }
        return "string";
      }, a.isInAttribute = !0, a), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
    }
    function f(e, t) {
      return function (n, r) {
        for (; !n.eol();) {
          if (n.match(t)) {
            r.tokenize = d;
            break;
          }
          n.next();
        }
        return e;
      };
    }
    function h(e) {
      return function (t, n) {
        for (var r; null != (r = t.next());) {
          if ("<" == r) return n.tokenize = h(e + 1), n.tokenize(t, n);
          if (">" == r) {
            if (1 == e) {
              n.tokenize = d;
              break;
            }
            return n.tokenize = h(e - 1), n.tokenize(t, n);
          }
        }
        return "meta";
      };
    }
    function _(e) {
      return e && e.toLowerCase();
    }
    function m(e, t, n) {
      this.prev = e.context, this.tagName = t || "", this.indent = e.indented, this.startOfLine = n, (l.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0);
    }
    function A(e) {
      e.context && (e.context = e.context.prev);
    }
    function g(e, t) {
      for (var n;;) {
        if (!e.context) return;
        if (n = e.context.tagName, !l.contextGrabbers.hasOwnProperty(_(n)) || !l.contextGrabbers[_(n)].hasOwnProperty(_(t))) return;
        A(e);
      }
    }
    function y(e, t, n) {
      return "openTag" == e ? (n.tagStart = t.column(), v) : "closeTag" == e ? E : y;
    }
    function v(e, t, n) {
      return "word" == e ? (n.tagName = t.current(), r = "tag", C) : l.allowMissingTagName && "endTag" == e ? (r = "tag bracket", C(e, 0, n)) : (r = "error", v);
    }
    function E(e, t, n) {
      if ("word" == e) {
        var a = t.current();
        return n.context && n.context.tagName != a && l.implicitlyClosed.hasOwnProperty(_(n.context.tagName)) && A(n), n.context && n.context.tagName == a || !1 === l.matchClosing ? (r = "tag", b) : (r = "tag error", w);
      }
      return l.allowMissingTagName && "endTag" == e ? (r = "tag bracket", b(e, 0, n)) : (r = "error", w);
    }
    function b(e, t, n) {
      return "endTag" != e ? (r = "error", b) : (A(n), y);
    }
    function w(e, t, n) {
      return r = "error", b(e, 0, n);
    }
    function C(e, t, n) {
      if ("word" == e) return r = "attribute", O;
      if ("endTag" == e || "selfcloseTag" == e) {
        var a = n.tagName,
          i = n.tagStart;
        return n.tagName = n.tagStart = null, "selfcloseTag" == e || l.autoSelfClosers.hasOwnProperty(_(a)) ? g(n, a) : (g(n, a), n.context = new m(n, a, i == n.indented)), y;
      }
      return r = "error", C;
    }
    function O(e, t, n) {
      return "equals" == e ? M : (l.allowMissing || (r = "error"), C(e, 0, n));
    }
    function M(e, t, n) {
      return "string" == e ? S : "word" == e && l.allowUnquoted ? (r = "string", C) : (r = "error", C(e, 0, n));
    }
    function S(e, t, n) {
      return "string" == e ? S : C(e, 0, n);
    }
    return d.isInText = !0, {
      startState: function (e) {
        var t = {
          tokenize: d,
          state: y,
          indented: e || 0,
          tagName: null,
          tagStart: null,
          context: null
        };
        return null != e && (t.baseIndent = e), t;
      },
      token: function (e, t) {
        if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
        n = null;
        var a = t.tokenize(e, t);
        return (a || n) && "comment" != a && (r = null, t.state = t.state(n || a, e, t), r && (a = "error" == r ? a + " error" : r)), a;
      },
      indent: function (e, t, n) {
        var r = e.context;
        if (e.tokenize.isInAttribute) return e.tagStart == e.indented ? e.stringStartCol + 1 : e.indented + s;
        if (r && r.noIndent) return a.Pass;
        if (e.tokenize != p && e.tokenize != d) return n ? n.match(/^(\s*)/)[0].length : 0;
        if (e.tagName) return !1 !== l.multilineTagIndentPastTag ? e.tagStart + e.tagName.length + 2 : e.tagStart + s * (l.multilineTagIndentFactor || 1);
        if (l.alignCDATA && /<!\[CDATA\[/.test(t)) return 0;
        var i = t && /^<(\/)?([\w_:\.-]*)/.exec(t);
        if (i && i[1]) for (; r;) {
          if (r.tagName == i[2]) {
            r = r.prev;
            break;
          }
          if (!l.implicitlyClosed.hasOwnProperty(_(r.tagName))) break;
          r = r.prev;
        } else if (i) for (; r;) {
          var o = l.contextGrabbers[_(r.tagName)];
          if (!o || !o.hasOwnProperty(_(i[2]))) break;
          r = r.prev;
        }
        for (; r && r.prev && !r.startOfLine;) r = r.prev;
        return r ? r.indent + s : e.baseIndent || 0;
      },
      electricInput: /<\/[\s\w:]+>$/,
      blockCommentStart: "\x3c!--",
      blockCommentEnd: "--\x3e",
      configuration: l.htmlMode ? "html" : "xml",
      helperType: l.htmlMode ? "html" : "xml",
      skipAttribute: function (e) {
        e.state == M && (e.state = C);
      },
      xmlCurrentTag: function (e) {
        return e.tagName ? {
          name: e.tagName,
          close: "closeTag" == e.type
        } : null;
      },
      xmlCurrentContext: function (e) {
        for (var t = [], n = e.context; n; n = n.prev) t.push(n.tagName);
        return t.reverse();
      }
    };
  }), a.defineMIME("text/xml", "xml"), a.defineMIME("application/xml", "xml"), a.mimeModes.hasOwnProperty("text/html") || a.defineMIME("text/html", {
    name: "xml",
    htmlMode: !0
  });
  var d = {};
  function p() {
    return p = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, p.apply(this, arguments);
  }
  function f(e) {
    return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
  }
  var h,
    _ = (h = function (e, t) {
      return (h = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      })(e, t);
    }, function (e, t) {
      function n() {
        this.constructor = e;
      }
      h(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
    });
  Object.defineProperty(d, "__esModule", {
    value: !0
  }), d.UnControlled = b = d.Controlled = void 0;
  var m,
    A = l(),
    g = "undefined" == typeof navigator || !0 === c.c.PREVENT_CODEMIRROR_RENDER;
  g || (m = u.exports);
  var y = function () {
      function e() {}
      return e.equals = function (e, t) {
        var n = this,
          r = Object.keys,
          a = f(e),
          i = f(t);
        return e && t && "object" === a && a === i ? r(e).length === r(t).length && r(e).every(function (r) {
          return n.equals(e[r], t[r]);
        }) : e === t;
      }, e;
    }(),
    v = function () {
      function e(e, t) {
        this.editor = e, this.props = t;
      }
      return e.prototype.delegateCursor = function (e, t, n) {
        var r = this.editor.getDoc();
        n && this.editor.focus(), t ? r.setCursor(e) : r.setCursor(e, null, {
          scroll: !1
        });
      }, e.prototype.delegateScroll = function (e) {
        this.editor.scrollTo(e.x, e.y);
      }, e.prototype.delegateSelection = function (e, t) {
        this.editor.getDoc().setSelections(e), t && this.editor.focus();
      }, e.prototype.apply = function (e) {
        e && e.selection && e.selection.ranges && this.delegateSelection(e.selection.ranges, e.selection.focus || !1), e && e.cursor && this.delegateCursor(e.cursor, e.autoScroll || !1, this.editor.getOption("autofocus") || !1), e && e.scroll && this.delegateScroll(e.scroll);
      }, e.prototype.applyNext = function (e, t, n) {
        e && e.selection && e.selection.ranges && t && t.selection && t.selection.ranges && !y.equals(e.selection.ranges, t.selection.ranges) && this.delegateSelection(t.selection.ranges, t.selection.focus || !1), e && e.cursor && t && t.cursor && !y.equals(e.cursor, t.cursor) && this.delegateCursor(n.cursor || t.cursor, t.autoScroll || !1, t.autoCursor || !1), e && e.scroll && t && t.scroll && !y.equals(e.scroll, t.scroll) && this.delegateScroll(t.scroll);
      }, e.prototype.applyUserDefined = function (e, t) {
        t && t.cursor && this.delegateCursor(t.cursor, e.autoScroll || !1, this.editor.getOption("autofocus") || !1);
      }, e.prototype.wire = function (e) {
        var t = this;
        Object.keys(e || {}).filter(function (e) {
          return /^on/.test(e);
        }).forEach(function (e) {
          switch (e) {
            case "onBlur":
              t.editor.on("blur", function (e, n) {
                t.props.onBlur(t.editor, n);
              });
              break;
            case "onContextMenu":
              t.editor.on("contextmenu", function (e, n) {
                t.props.onContextMenu(t.editor, n);
              });
              break;
            case "onCopy":
              t.editor.on("copy", function (e, n) {
                t.props.onCopy(t.editor, n);
              });
              break;
            case "onCursor":
              t.editor.on("cursorActivity", function (e) {
                t.props.onCursor(t.editor, t.editor.getDoc().getCursor());
              });
              break;
            case "onCursorActivity":
              t.editor.on("cursorActivity", function (e) {
                t.props.onCursorActivity(t.editor);
              });
              break;
            case "onCut":
              t.editor.on("cut", function (e, n) {
                t.props.onCut(t.editor, n);
              });
              break;
            case "onDblClick":
              t.editor.on("dblclick", function (e, n) {
                t.props.onDblClick(t.editor, n);
              });
              break;
            case "onDragEnter":
              t.editor.on("dragenter", function (e, n) {
                t.props.onDragEnter(t.editor, n);
              });
              break;
            case "onDragLeave":
              t.editor.on("dragleave", function (e, n) {
                t.props.onDragLeave(t.editor, n);
              });
              break;
            case "onDragOver":
              t.editor.on("dragover", function (e, n) {
                t.props.onDragOver(t.editor, n);
              });
              break;
            case "onDragStart":
              t.editor.on("dragstart", function (e, n) {
                t.props.onDragStart(t.editor, n);
              });
              break;
            case "onDrop":
              t.editor.on("drop", function (e, n) {
                t.props.onDrop(t.editor, n);
              });
              break;
            case "onFocus":
              t.editor.on("focus", function (e, n) {
                t.props.onFocus(t.editor, n);
              });
              break;
            case "onGutterClick":
              t.editor.on("gutterClick", function (e, n, r, a) {
                t.props.onGutterClick(t.editor, n, r, a);
              });
              break;
            case "onInputRead":
              t.editor.on("inputRead", function (e, n) {
                t.props.onInputRead(t.editor, n);
              });
              break;
            case "onKeyDown":
              t.editor.on("keydown", function (e, n) {
                t.props.onKeyDown(t.editor, n);
              });
              break;
            case "onKeyHandled":
              t.editor.on("keyHandled", function (e, n, r) {
                t.props.onKeyHandled(t.editor, n, r);
              });
              break;
            case "onKeyPress":
              t.editor.on("keypress", function (e, n) {
                t.props.onKeyPress(t.editor, n);
              });
              break;
            case "onKeyUp":
              t.editor.on("keyup", function (e, n) {
                t.props.onKeyUp(t.editor, n);
              });
              break;
            case "onMouseDown":
              t.editor.on("mousedown", function (e, n) {
                t.props.onMouseDown(t.editor, n);
              });
              break;
            case "onPaste":
              t.editor.on("paste", function (e, n) {
                t.props.onPaste(t.editor, n);
              });
              break;
            case "onRenderLine":
              t.editor.on("renderLine", function (e, n, r) {
                t.props.onRenderLine(t.editor, n, r);
              });
              break;
            case "onScroll":
              t.editor.on("scroll", function (e) {
                t.props.onScroll(t.editor, t.editor.getScrollInfo());
              });
              break;
            case "onSelection":
              t.editor.on("beforeSelectionChange", function (e, n) {
                t.props.onSelection(t.editor, n);
              });
              break;
            case "onTouchStart":
              t.editor.on("touchstart", function (e, n) {
                t.props.onTouchStart(t.editor, n);
              });
              break;
            case "onUpdate":
              t.editor.on("update", function (e) {
                t.props.onUpdate(t.editor);
              });
              break;
            case "onViewportChange":
              t.editor.on("viewportChange", function (e, n, r) {
                t.props.onViewportChange(t.editor, n, r);
              });
          }
        });
      }, e;
    }(),
    E = function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return g || (n.applied = !1, n.appliedNext = !1, n.appliedUserDefined = !1, n.deferred = null, n.emulating = !1, n.hydrated = !1, n.initCb = function () {
          n.props.editorDidConfigure && n.props.editorDidConfigure(n.editor);
        }, n.mounted = !1), n;
      }
      return _(t, e), t.prototype.hydrate = function (e) {
        var t = this,
          n = e && e.options ? e.options : {},
          r = p({}, m.defaults, this.editor.options, n);
        Object.keys(r).some(function (e) {
          return t.editor.getOption(e) !== r[e];
        }) && Object.keys(r).forEach(function (e) {
          n.hasOwnProperty(e) && t.editor.getOption(e) !== r[e] && (t.editor.setOption(e, r[e]), t.mirror.setOption(e, r[e]));
        }), this.hydrated || (this.deferred ? this.resolveChange(e.value) : this.initChange(e.value || "")), this.hydrated = !0;
      }, t.prototype.initChange = function (e) {
        this.emulating = !0;
        var t = this.editor.getDoc(),
          n = t.lastLine(),
          r = t.getLine(t.lastLine()).length;
        t.replaceRange(e || "", {
          line: 0,
          ch: 0
        }, {
          line: n,
          ch: r
        }), this.mirror.setValue(e), t.clearHistory(), this.mirror.clearHistory(), this.emulating = !1;
      }, t.prototype.resolveChange = function (e) {
        this.emulating = !0;
        var t = this.editor.getDoc();
        if ("undo" === this.deferred.origin ? t.undo() : "redo" === this.deferred.origin ? t.redo() : t.replaceRange(this.deferred.text, this.deferred.from, this.deferred.to, this.deferred.origin), e && e !== t.getValue()) {
          var n = t.getCursor();
          t.setValue(e), t.setCursor(n);
        }
        this.emulating = !1, this.deferred = null;
      }, t.prototype.mirrorChange = function (e) {
        var t = this.editor.getDoc();
        return "undo" === e.origin ? (t.setHistory(this.mirror.getHistory()), this.mirror.undo()) : "redo" === e.origin ? (t.setHistory(this.mirror.getHistory()), this.mirror.redo()) : this.mirror.replaceRange(e.text, e.from, e.to, e.origin), this.mirror.getValue();
      }, t.prototype.componentDidMount = function () {
        var e = this;
        g || (this.props.defineMode && this.props.defineMode.name && this.props.defineMode.fn && m.defineMode(this.props.defineMode.name, this.props.defineMode.fn), this.editor = m(this.ref, this.props.options), this.shared = new v(this.editor, this.props), this.mirror = m(function () {}, this.props.options), this.editor.on("electricInput", function () {
          e.mirror.setHistory(e.editor.getDoc().getHistory());
        }), this.editor.on("cursorActivity", function () {
          e.mirror.setCursor(e.editor.getDoc().getCursor());
        }), this.editor.on("beforeChange", function (t, n) {
          if (!e.emulating) {
            n.cancel(), e.deferred = n;
            var r = e.mirrorChange(e.deferred);
            e.props.onBeforeChange && e.props.onBeforeChange(e.editor, e.deferred, r);
          }
        }), this.editor.on("change", function (t, n) {
          e.mounted && e.props.onChange && e.props.onChange(e.editor, n, e.editor.getValue());
        }), this.hydrate(this.props), this.shared.apply(this.props), this.applied = !0, this.mounted = !0, this.shared.wire(this.props), this.editor.getOption("autofocus") && this.editor.focus(), this.props.editorDidMount && this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb));
      }, t.prototype.componentDidUpdate = function (e) {
        if (!g) {
          var t = {
            cursor: null
          };
          this.props.value !== e.value && (this.hydrated = !1), this.props.autoCursor || void 0 === this.props.autoCursor || (t.cursor = this.editor.getDoc().getCursor()), this.hydrate(this.props), this.appliedNext || (this.shared.applyNext(e, this.props, t), this.appliedNext = !0), this.shared.applyUserDefined(e, t), this.appliedUserDefined = !0;
        }
      }, t.prototype.componentWillUnmount = function () {
        g || this.props.editorWillUnmount && this.props.editorWillUnmount(m);
      }, t.prototype.shouldComponentUpdate = function (e, t) {
        return !g;
      }, t.prototype.render = function () {
        var e = this;
        if (g) return null;
        var t = this.props.className ? "react-codemirror2 " + this.props.className : "react-codemirror2";
        return A.createElement("div", {
          className: t,
          ref: function (t) {
            return e.ref = t;
          }
        });
      }, t;
    }(A.Component),
    b = d.Controlled = E,
    w = function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return g || (n.applied = !1, n.appliedUserDefined = !1, n.continueChange = !1, n.detached = !1, n.hydrated = !1, n.initCb = function () {
          n.props.editorDidConfigure && n.props.editorDidConfigure(n.editor);
        }, n.mounted = !1, n.onBeforeChangeCb = function () {
          n.continueChange = !0;
        }), n;
      }
      return _(t, e), t.prototype.hydrate = function (e) {
        var t = this,
          n = e && e.options ? e.options : {},
          r = p({}, m.defaults, this.editor.options, n);
        if (Object.keys(r).some(function (e) {
          return t.editor.getOption(e) !== r[e];
        }) && Object.keys(r).forEach(function (e) {
          n.hasOwnProperty(e) && t.editor.getOption(e) !== r[e] && t.editor.setOption(e, r[e]);
        }), !this.hydrated) {
          var a = this.editor.getDoc(),
            i = a.lastLine(),
            o = a.getLine(a.lastLine()).length;
          a.replaceRange(e.value || "", {
            line: 0,
            ch: 0
          }, {
            line: i,
            ch: o
          });
        }
        this.hydrated = !0;
      }, t.prototype.componentDidMount = function () {
        var e = this;
        g || (this.detached = !0 === this.props.detach, this.props.defineMode && this.props.defineMode.name && this.props.defineMode.fn && m.defineMode(this.props.defineMode.name, this.props.defineMode.fn), this.editor = m(this.ref, this.props.options), this.shared = new v(this.editor, this.props), this.editor.on("beforeChange", function (t, n) {
          e.props.onBeforeChange && e.props.onBeforeChange(e.editor, n, e.editor.getValue(), e.onBeforeChangeCb);
        }), this.editor.on("change", function (t, n) {
          e.mounted && e.props.onChange && (e.props.onBeforeChange ? e.continueChange && e.props.onChange(e.editor, n, e.editor.getValue()) : e.props.onChange(e.editor, n, e.editor.getValue()));
        }), this.hydrate(this.props), this.shared.apply(this.props), this.applied = !0, this.mounted = !0, this.shared.wire(this.props), this.editor.getDoc().clearHistory(), this.props.editorDidMount && this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb));
      }, t.prototype.componentDidUpdate = function (e) {
        if (this.detached && !1 === this.props.detach && (this.detached = !1, e.editorDidAttach && e.editorDidAttach(this.editor)), this.detached || !0 !== this.props.detach || (this.detached = !0, e.editorDidDetach && e.editorDidDetach(this.editor)), !g && !this.detached) {
          var t = {
            cursor: null
          };
          this.props.value !== e.value && (this.hydrated = !1, this.applied = !1, this.appliedUserDefined = !1), e.autoCursor || void 0 === e.autoCursor || (t.cursor = this.editor.getDoc().getCursor()), this.hydrate(this.props), this.applied || (this.shared.apply(e), this.applied = !0), this.appliedUserDefined || (this.shared.applyUserDefined(e, t), this.appliedUserDefined = !0);
        }
      }, t.prototype.componentWillUnmount = function () {
        g || this.props.editorWillUnmount && this.props.editorWillUnmount(m);
      }, t.prototype.shouldComponentUpdate = function (e, t) {
        var n = !0;
        return g && (n = !1), this.detached && e.detach && (n = !1), n;
      }, t.prototype.render = function () {
        var e = this;
        if (g) return null;
        var t = this.props.className ? "react-codemirror2 " + this.props.className : "react-codemirror2";
        return A.createElement("div", {
          className: t,
          ref: function (t) {
            return e.ref = t;
          }
        });
      }, t;
    }(A.Component);
  d.UnControlled = w;
  var C = {
    container: "_container_13rz9_1"
  };
  function O(e) {
    const {
      value: t,
      onChange: n
    } = e;
    return l().createElement(b, {
      className: C.container,
      value: t,
      onBeforeChange: (e, t, r) => n(r),
      options: {
        mode: "xml",
        theme: "material",
        lineNumbers: !0,
        autofocus: !0,
        styleActiveLine: !0,
        smartIndent: !0,
        lineWrapping: !0,
        foldGutter: !0
      }
    });
  }
});
