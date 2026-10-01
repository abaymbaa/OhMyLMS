// Reconstructed Webpack factory 77712; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  function r(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function a() {
    return a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, n) {
      var r = function (e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)););
        return e;
      }(e, t);
      if (r) {
        var a = Object.getOwnPropertyDescriptor(r, t);
        return a.get ? a.get.call(arguments.length < 3 ? e : n) : a.value;
      }
    }, a.apply(this, arguments);
  }
  function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(e, "prototype", {
      writable: !1
    }), t && u(e, t);
  }
  function o(e) {
    var t = c();
    return function () {
      var n,
        r = d(e);
      if (t) {
        var a = d(this).constructor;
        n = Reflect.construct(r, arguments, a);
      } else n = r.apply(this, arguments);
      return function (e, t) {
        if (t && ("object" === p(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }(e);
      }(this, n);
    };
  }
  function s(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return s = function (e) {
      if (null === e || !function (e) {
        try {
          return -1 !== Function.toString.call(e).indexOf("[native code]");
        } catch (t) {
          return "function" == typeof e;
        }
      }(e)) return e;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, n);
      }
      function n() {
        return l(e, arguments, d(this).constructor);
      }
      return n.prototype = Object.create(e.prototype, {
        constructor: {
          value: n,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), u(n, e);
    }, s(e);
  }
  function l(e, t, n) {
    return l = c() ? Reflect.construct.bind() : function (e, t, n) {
      var r = [null];
      r.push.apply(r, t);
      var a = new (Function.bind.apply(e, r))();
      return n && u(a, n.prototype), a;
    }, l.apply(null, arguments);
  }
  function c() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }
  function u(e, t) {
    return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, u(e, t);
  }
  function d(e) {
    return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, d(e);
  }
  function p(e) {
    return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, p(e);
  }
  function f(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function h(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, m(r.key), r);
    }
  }
  function _(e, t, n) {
    return t && h(e.prototype, t), n && h(e, n), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function m(e) {
    var t = function (e) {
      if ("object" !== p(e) || null === e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" !== p(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" === p(t) ? t : String(t);
  }
  var A = n(63717);
  function g(e, t, n) {
    for (var r = 0;; r++) {
      if (r == e.childCount || r == t.childCount) return e.childCount == t.childCount ? null : n;
      var a = e.child(r),
        i = t.child(r);
      if (a != i) {
        if (!a.sameMarkup(i)) return n;
        if (a.isText && a.text != i.text) {
          for (var o = 0; a.text[o] == i.text[o]; o++) n++;
          return n;
        }
        if (a.content.size || i.content.size) {
          var s = g(a.content, i.content, n + 1);
          if (null != s) return s;
        }
        n += a.nodeSize;
      } else n += a.nodeSize;
    }
  }
  function y(e, t, n, r) {
    for (var a = e.childCount, i = t.childCount;;) {
      if (0 == a || 0 == i) return a == i ? null : {
        a: n,
        b: r
      };
      var o = e.child(--a),
        s = t.child(--i),
        l = o.nodeSize;
      if (o != s) {
        if (!o.sameMarkup(s)) return {
          a: n,
          b: r
        };
        if (o.isText && o.text != s.text) {
          for (var c = 0, u = Math.min(o.text.length, s.text.length); c < u && o.text[o.text.length - c - 1] == s.text[s.text.length - c - 1];) c++, n--, r--;
          return {
            a: n,
            b: r
          };
        }
        if (o.content.size || s.content.size) {
          var d = y(o.content, s.content, n - 1, r - 1);
          if (d) return d;
        }
        n -= l, r -= l;
      } else n -= l, r -= l;
    }
  }
  var v = function () {
    function e(t, n) {
      if (f(this, e), this.content = t, this.size = n || 0, null == n) for (var r = 0; r < t.length; r++) this.size += t[r].nodeSize;
    }
    return _(e, [{
      key: "nodesBetween",
      value: function (e, t, n) {
        for (var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, a = arguments.length > 4 ? arguments[4] : void 0, i = 0, o = 0; o < t; i++) {
          var s = this.content[i],
            l = o + s.nodeSize;
          if (l > e && !1 !== n(s, r + o, a || null, i) && s.content.size) {
            var c = o + 1;
            s.nodesBetween(Math.max(0, e - c), Math.min(s.content.size, t - c), n, r + c);
          }
          o = l;
        }
      }
    }, {
      key: "descendants",
      value: function (e) {
        this.nodesBetween(0, this.size, e);
      }
    }, {
      key: "textBetween",
      value: function (e, t, n, r) {
        var a = "",
          i = !0;
        return this.nodesBetween(e, t, function (o, s) {
          var l = o.isText ? o.text.slice(Math.max(e, s) - s, t - s) : o.isLeaf ? r ? "function" == typeof r ? r(o) : r : o.type.spec.leafText ? o.type.spec.leafText(o) : "" : "";
          o.isBlock && (o.isLeaf && l || o.isTextblock) && n && (i ? i = !1 : a += n), a += l;
        }, 0), a;
      }
    }, {
      key: "append",
      value: function (t) {
        if (!t.size) return this;
        if (!this.size) return t;
        var n = this.lastChild,
          r = t.firstChild,
          a = this.content.slice(),
          i = 0;
        for (n.isText && n.sameMarkup(r) && (a[a.length - 1] = n.withText(n.text + r.text), i = 1); i < t.content.length; i++) a.push(t.content[i]);
        return new e(a, this.size + t.size);
      }
    }, {
      key: "cut",
      value: function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.size;
        if (0 == t && n == this.size) return this;
        var r = [],
          a = 0;
        if (n > t) for (var i = 0, o = 0; o < n; i++) {
          var s = this.content[i],
            l = o + s.nodeSize;
          l > t && ((o < t || l > n) && (s = s.isText ? s.cut(Math.max(0, t - o), Math.min(s.text.length, n - o)) : s.cut(Math.max(0, t - o - 1), Math.min(s.content.size, n - o - 1))), r.push(s), a += s.nodeSize), o = l;
        }
        return new e(r, a);
      }
    }, {
      key: "cutByIndex",
      value: function (t, n) {
        return t == n ? e.empty : 0 == t && n == this.content.length ? this : new e(this.content.slice(t, n));
      }
    }, {
      key: "replaceChild",
      value: function (t, n) {
        var r = this.content[t];
        if (r == n) return this;
        var a = this.content.slice(),
          i = this.size + n.nodeSize - r.nodeSize;
        return a[t] = n, new e(a, i);
      }
    }, {
      key: "addToStart",
      value: function (t) {
        return new e([t].concat(this.content), this.size + t.nodeSize);
      }
    }, {
      key: "addToEnd",
      value: function (t) {
        return new e(this.content.concat(t), this.size + t.nodeSize);
      }
    }, {
      key: "eq",
      value: function (e) {
        if (this.content.length != e.content.length) return !1;
        for (var t = 0; t < this.content.length; t++) if (!this.content[t].eq(e.content[t])) return !1;
        return !0;
      }
    }, {
      key: "firstChild",
      get: function () {
        return this.content.length ? this.content[0] : null;
      }
    }, {
      key: "lastChild",
      get: function () {
        return this.content.length ? this.content[this.content.length - 1] : null;
      }
    }, {
      key: "childCount",
      get: function () {
        return this.content.length;
      }
    }, {
      key: "child",
      value: function (e) {
        var t = this.content[e];
        if (!t) throw new RangeError("Index " + e + " out of range for " + this);
        return t;
      }
    }, {
      key: "maybeChild",
      value: function (e) {
        return this.content[e] || null;
      }
    }, {
      key: "forEach",
      value: function (e) {
        for (var t = 0, n = 0; t < this.content.length; t++) {
          var r = this.content[t];
          e(r, n, t), n += r.nodeSize;
        }
      }
    }, {
      key: "findDiffStart",
      value: function (e) {
        return g(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0);
      }
    }, {
      key: "findDiffEnd",
      value: function (e) {
        return y(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.size, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.size);
      }
    }, {
      key: "findIndex",
      value: function (e) {
        if (0 == e) return b(0, e);
        if (e == this.size) return b(this.content.length, e);
        if (e > this.size || e < 0) throw new RangeError("Position ".concat(e, " outside of fragment (").concat(this, ")"));
        for (var t = 0, n = 0;; t++) {
          var r = n + this.child(t).nodeSize;
          if (r >= e) return r == e ? b(t + 1, r) : b(t, n);
          n = r;
        }
      }
    }, {
      key: "toString",
      value: function () {
        return "<" + this.toStringInner() + ">";
      }
    }, {
      key: "toStringInner",
      value: function () {
        return this.content.join(", ");
      }
    }, {
      key: "toJSON",
      value: function () {
        return this.content.length ? this.content.map(function (e) {
          return e.toJSON();
        }) : null;
      }
    }], [{
      key: "fromJSON",
      value: function (t, n) {
        if (!n) return e.empty;
        if (!Array.isArray(n)) throw new RangeError("Invalid input for Fragment.fromJSON");
        return new e(n.map(t.nodeFromJSON));
      }
    }, {
      key: "fromArray",
      value: function (t) {
        if (!t.length) return e.empty;
        for (var n, r = 0, a = 0; a < t.length; a++) {
          var i = t[a];
          r += i.nodeSize, a && i.isText && t[a - 1].sameMarkup(i) ? (n || (n = t.slice(0, a)), n[n.length - 1] = i.withText(n[n.length - 1].text + i.text)) : n && n.push(i);
        }
        return new e(n || t, r);
      }
    }, {
      key: "from",
      value: function (t) {
        if (!t) return e.empty;
        if (t instanceof e) return t;
        if (Array.isArray(t)) return this.fromArray(t);
        if (t.attrs) return new e([t], t.nodeSize);
        throw new RangeError("Can not convert " + t + " to a Fragment" + (t.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
      }
    }]), e;
  }();
  v.empty = new v([], 0);
  var E = {
    index: 0,
    offset: 0
  };
  function b(e, t) {
    return E.index = e, E.offset = t, E;
  }
  function w(e, t) {
    if (e === t) return !0;
    if (!e || "object" != p(e) || !t || "object" != p(t)) return !1;
    var n = Array.isArray(e);
    if (Array.isArray(t) != n) return !1;
    if (n) {
      if (e.length != t.length) return !1;
      for (var r = 0; r < e.length; r++) if (!w(e[r], t[r])) return !1;
    } else {
      for (var a in e) if (!(a in t) || !w(e[a], t[a])) return !1;
      for (var i in t) if (!(i in e)) return !1;
    }
    return !0;
  }
  var C = function () {
    function e(t, n) {
      f(this, e), this.type = t, this.attrs = n;
    }
    return _(e, [{
      key: "addToSet",
      value: function (e) {
        for (var t, n = !1, r = 0; r < e.length; r++) {
          var a = e[r];
          if (this.eq(a)) return e;
          if (this.type.excludes(a.type)) t || (t = e.slice(0, r));else {
            if (a.type.excludes(this.type)) return e;
            !n && a.type.rank > this.type.rank && (t || (t = e.slice(0, r)), t.push(this), n = !0), t && t.push(a);
          }
        }
        return t || (t = e.slice()), n || t.push(this), t;
      }
    }, {
      key: "removeFromSet",
      value: function (e) {
        for (var t = 0; t < e.length; t++) if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
        return e;
      }
    }, {
      key: "isInSet",
      value: function (e) {
        for (var t = 0; t < e.length; t++) if (this.eq(e[t])) return !0;
        return !1;
      }
    }, {
      key: "eq",
      value: function (e) {
        return this == e || this.type == e.type && w(this.attrs, e.attrs);
      }
    }, {
      key: "toJSON",
      value: function () {
        var e = {
          type: this.type.name
        };
        for (var t in this.attrs) {
          e.attrs = this.attrs;
          break;
        }
        return e;
      }
    }], [{
      key: "fromJSON",
      value: function (e, t) {
        if (!t) throw new RangeError("Invalid input for Mark.fromJSON");
        var n = e.marks[t.type];
        if (!n) throw new RangeError("There is no mark type ".concat(t.type, " in this schema"));
        var r = n.create(t.attrs);
        return n.checkAttrs(r.attrs), r;
      }
    }, {
      key: "sameSet",
      value: function (e, t) {
        if (e == t) return !0;
        if (e.length != t.length) return !1;
        for (var n = 0; n < e.length; n++) if (!e[n].eq(t[n])) return !1;
        return !0;
      }
    }, {
      key: "setFrom",
      value: function (t) {
        if (!t || Array.isArray(t) && 0 == t.length) return e.none;
        if (t instanceof e) return [t];
        var n = t.slice();
        return n.sort(function (e, t) {
          return e.type.rank - t.type.rank;
        }), n;
      }
    }]), e;
  }();
  C.none = [];
  var O = function (e) {
      i(n, e);
      var t = o(n);
      function n() {
        return f(this, n), t.apply(this, arguments);
      }
      return _(n);
    }(s(Error)),
    M = function () {
      function e(t, n, r) {
        f(this, e), this.content = t, this.openStart = n, this.openEnd = r;
      }
      return _(e, [{
        key: "size",
        get: function () {
          return this.content.size - this.openStart - this.openEnd;
        }
      }, {
        key: "insertAt",
        value: function (t, n) {
          var r = T(this.content, t + this.openStart, n);
          return r && new e(r, this.openStart, this.openEnd);
        }
      }, {
        key: "removeBetween",
        value: function (t, n) {
          return new e(S(this.content, t + this.openStart, n + this.openStart), this.openStart, this.openEnd);
        }
      }, {
        key: "eq",
        value: function (e) {
          return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
        }
      }, {
        key: "toString",
        value: function () {
          return this.content + "(" + this.openStart + "," + this.openEnd + ")";
        }
      }, {
        key: "toJSON",
        value: function () {
          if (!this.content.size) return null;
          var e = {
            content: this.content.toJSON()
          };
          return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
        }
      }], [{
        key: "fromJSON",
        value: function (t, n) {
          if (!n) return e.empty;
          var r = n.openStart || 0,
            a = n.openEnd || 0;
          if ("number" != typeof r || "number" != typeof a) throw new RangeError("Invalid input for Slice.fromJSON");
          return new e(v.fromJSON(t, n.content), r, a);
        }
      }, {
        key: "maxOpen",
        value: function (t) {
          for (var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = 0, a = 0, i = t.firstChild; i && !i.isLeaf && (n || !i.type.spec.isolating); i = i.firstChild) r++;
          for (var o = t.lastChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.lastChild) a++;
          return new e(t, r, a);
        }
      }]), e;
    }();
  function S(e, t, n) {
    var r = e.findIndex(t),
      a = r.index,
      i = r.offset,
      o = e.maybeChild(a),
      s = e.findIndex(n),
      l = s.index,
      c = s.offset;
    if (i == t || o.isText) {
      if (c != n && !e.child(l).isText) throw new RangeError("Removing non-flat range");
      return e.cut(0, t).append(e.cut(n));
    }
    if (a != l) throw new RangeError("Removing non-flat range");
    return e.replaceChild(a, o.copy(S(o.content, t - i - 1, n - i - 1)));
  }
  function T(e, t, n, r) {
    var a = e.findIndex(t),
      i = a.index,
      o = a.offset,
      s = e.maybeChild(i);
    if (o == t || s.isText) return r && !r.canReplace(i, i, n) ? null : e.cut(0, t).append(n).append(e.cut(t));
    var l = T(s.content, t - o - 1, n, s);
    return l && e.replaceChild(i, s.copy(l));
  }
  function k(e, t, n) {
    if (n.openStart > e.depth) throw new O("Inserted content deeper than insertion position");
    if (e.depth - n.openStart != t.depth - n.openEnd) throw new O("Inconsistent open depths");
    return x(e, t, n, 0);
  }
  function x(e, t, n, r) {
    var a = e.index(r),
      i = e.node(r);
    if (a == t.index(r) && r < e.depth - n.openStart) {
      var o = x(e, t, n, r + 1);
      return i.copy(i.content.replaceChild(a, o));
    }
    if (n.content.size) {
      if (n.openStart || n.openEnd || e.depth != r || t.depth != r) {
        var s = function (e, t) {
          for (var n = t.depth - e.openStart, r = t.node(n).copy(e.content), a = n - 1; a >= 0; a--) r = t.node(a).copy(v.from(r));
          return {
            start: r.resolveNoCache(e.openStart + n),
            end: r.resolveNoCache(r.content.size - e.openEnd - n)
          };
        }(n, e);
        return R(i, B(e, s.start, s.end, t, r));
      }
      var l = e.parent,
        c = l.content;
      return R(l, c.cut(0, e.parentOffset).append(n.content).append(c.cut(t.parentOffset)));
    }
    return R(i, N(e, t, r));
  }
  function D(e, t) {
    if (!t.type.compatibleContent(e.type)) throw new O("Cannot join " + t.type.name + " onto " + e.type.name);
  }
  function I(e, t, n) {
    var r = e.node(n);
    return D(r, t.node(n)), r;
  }
  function P(e, t) {
    var n = t.length - 1;
    n >= 0 && e.isText && e.sameMarkup(t[n]) ? t[n] = e.withText(t[n].text + e.text) : t.push(e);
  }
  function L(e, t, n, r) {
    var a = (t || e).node(n),
      i = 0,
      o = t ? t.index(n) : a.childCount;
    e && (i = e.index(n), e.depth > n ? i++ : e.textOffset && (P(e.nodeAfter, r), i++));
    for (var s = i; s < o; s++) P(a.child(s), r);
    t && t.depth == n && t.textOffset && P(t.nodeBefore, r);
  }
  function R(e, t) {
    return e.type.checkContent(t), e.copy(t);
  }
  function B(e, t, n, r, a) {
    var i = e.depth > a && I(e, t, a + 1),
      o = r.depth > a && I(n, r, a + 1),
      s = [];
    return L(null, e, a, s), i && o && t.index(a) == n.index(a) ? (D(i, o), P(R(i, B(e, t, n, r, a + 1)), s)) : (i && P(R(i, N(e, t, a + 1)), s), L(t, n, a, s), o && P(R(o, N(n, r, a + 1)), s)), L(r, null, a, s), new v(s);
  }
  function N(e, t, n) {
    var r = [];
    return L(null, e, n, r), e.depth > n && P(R(I(e, t, n + 1), N(e, t, n + 1)), r), L(t, null, n, r), new v(r);
  }
  M.empty = new M(v.empty, 0, 0);
  var U = function () {
      function e(t, n, r) {
        f(this, e), this.pos = t, this.path = n, this.parentOffset = r, this.depth = n.length / 3 - 1;
      }
      return _(e, [{
        key: "resolveDepth",
        value: function (e) {
          return null == e ? this.depth : e < 0 ? this.depth + e : e;
        }
      }, {
        key: "parent",
        get: function () {
          return this.node(this.depth);
        }
      }, {
        key: "doc",
        get: function () {
          return this.node(0);
        }
      }, {
        key: "node",
        value: function (e) {
          return this.path[3 * this.resolveDepth(e)];
        }
      }, {
        key: "index",
        value: function (e) {
          return this.path[3 * this.resolveDepth(e) + 1];
        }
      }, {
        key: "indexAfter",
        value: function (e) {
          return e = this.resolveDepth(e), this.index(e) + (e != this.depth || this.textOffset ? 1 : 0);
        }
      }, {
        key: "start",
        value: function (e) {
          return 0 == (e = this.resolveDepth(e)) ? 0 : this.path[3 * e - 1] + 1;
        }
      }, {
        key: "end",
        value: function (e) {
          return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
        }
      }, {
        key: "before",
        value: function (e) {
          if (!(e = this.resolveDepth(e))) throw new RangeError("There is no position before the top-level node");
          return e == this.depth + 1 ? this.pos : this.path[3 * e - 1];
        }
      }, {
        key: "after",
        value: function (e) {
          if (!(e = this.resolveDepth(e))) throw new RangeError("There is no position after the top-level node");
          return e == this.depth + 1 ? this.pos : this.path[3 * e - 1] + this.path[3 * e].nodeSize;
        }
      }, {
        key: "textOffset",
        get: function () {
          return this.pos - this.path[this.path.length - 1];
        }
      }, {
        key: "nodeAfter",
        get: function () {
          var e = this.parent,
            t = this.index(this.depth);
          if (t == e.childCount) return null;
          var n = this.pos - this.path[this.path.length - 1],
            r = e.child(t);
          return n ? e.child(t).cut(n) : r;
        }
      }, {
        key: "nodeBefore",
        get: function () {
          var e = this.index(this.depth),
            t = this.pos - this.path[this.path.length - 1];
          return t ? this.parent.child(e).cut(0, t) : 0 == e ? null : this.parent.child(e - 1);
        }
      }, {
        key: "posAtIndex",
        value: function (e, t) {
          t = this.resolveDepth(t);
          for (var n = this.path[3 * t], r = 0 == t ? 0 : this.path[3 * t - 1] + 1, a = 0; a < e; a++) r += n.child(a).nodeSize;
          return r;
        }
      }, {
        key: "marks",
        value: function () {
          var e = this.parent,
            t = this.index();
          if (0 == e.content.size) return C.none;
          if (this.textOffset) return e.child(t).marks;
          var n = e.maybeChild(t - 1),
            r = e.maybeChild(t);
          if (!n) {
            var a = n;
            n = r, r = a;
          }
          for (var i = n.marks, o = 0; o < i.length; o++) !1 !== i[o].type.spec.inclusive || r && i[o].isInSet(r.marks) || (i = i[o--].removeFromSet(i));
          return i;
        }
      }, {
        key: "marksAcross",
        value: function (e) {
          var t = this.parent.maybeChild(this.index());
          if (!t || !t.isInline) return null;
          for (var n = t.marks, r = e.parent.maybeChild(e.index()), a = 0; a < n.length; a++) !1 !== n[a].type.spec.inclusive || r && n[a].isInSet(r.marks) || (n = n[a--].removeFromSet(n));
          return n;
        }
      }, {
        key: "sharedDepth",
        value: function (e) {
          for (var t = this.depth; t > 0; t--) if (this.start(t) <= e && this.end(t) >= e) return t;
          return 0;
        }
      }, {
        key: "blockRange",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this,
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (e.pos < this.pos) return e.blockRange(this);
          for (var n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--) if (e.pos <= this.end(n) && (!t || t(this.node(n)))) return new W(this, e, n);
          return null;
        }
      }, {
        key: "sameParent",
        value: function (e) {
          return this.pos - this.parentOffset == e.pos - e.parentOffset;
        }
      }, {
        key: "max",
        value: function (e) {
          return e.pos > this.pos ? e : this;
        }
      }, {
        key: "min",
        value: function (e) {
          return e.pos < this.pos ? e : this;
        }
      }, {
        key: "toString",
        value: function () {
          for (var e = "", t = 1; t <= this.depth; t++) e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
          return e + ":" + this.parentOffset;
        }
      }], [{
        key: "resolve",
        value: function (t, n) {
          if (!(n >= 0 && n <= t.content.size)) throw new RangeError("Position " + n + " out of range");
          for (var r = [], a = 0, i = n, o = t;;) {
            var s = o.content.findIndex(i),
              l = s.index,
              c = s.offset,
              u = i - c;
            if (r.push(o, l, a + c), !u) break;
            if ((o = o.child(l)).isText) break;
            i = u - 1, a += c + 1;
          }
          return new e(n, r, i);
        }
      }, {
        key: "resolveCached",
        value: function (t, n) {
          var r = H.get(t);
          if (r) for (var a = 0; a < r.elts.length; a++) {
            var i = r.elts[a];
            if (i.pos == n) return i;
          } else H.set(t, r = new F());
          var o = r.elts[r.i] = e.resolve(t, n);
          return r.i = (r.i + 1) % j, o;
        }
      }]), e;
    }(),
    F = _(function e() {
      f(this, e), this.elts = [], this.i = 0;
    }),
    j = 12,
    H = new WeakMap(),
    W = function () {
      function e(t, n, r) {
        f(this, e), this.$from = t, this.$to = n, this.depth = r;
      }
      return _(e, [{
        key: "start",
        get: function () {
          return this.$from.before(this.depth + 1);
        }
      }, {
        key: "end",
        get: function () {
          return this.$to.after(this.depth + 1);
        }
      }, {
        key: "parent",
        get: function () {
          return this.$from.node(this.depth);
        }
      }, {
        key: "startIndex",
        get: function () {
          return this.$from.index(this.depth);
        }
      }, {
        key: "endIndex",
        get: function () {
          return this.$to.indexAfter(this.depth);
        }
      }]), e;
    }(),
    K = Object.create(null),
    V = function () {
      function e(t, n, r) {
        var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : C.none;
        f(this, e), this.type = t, this.attrs = n, this.marks = a, this.content = r || v.empty;
      }
      return _(e, [{
        key: "children",
        get: function () {
          return this.content.content;
        }
      }, {
        key: "nodeSize",
        get: function () {
          return this.isLeaf ? 1 : 2 + this.content.size;
        }
      }, {
        key: "childCount",
        get: function () {
          return this.content.childCount;
        }
      }, {
        key: "child",
        value: function (e) {
          return this.content.child(e);
        }
      }, {
        key: "maybeChild",
        value: function (e) {
          return this.content.maybeChild(e);
        }
      }, {
        key: "forEach",
        value: function (e) {
          this.content.forEach(e);
        }
      }, {
        key: "nodesBetween",
        value: function (e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          this.content.nodesBetween(e, t, n, r, this);
        }
      }, {
        key: "descendants",
        value: function (e) {
          this.nodesBetween(0, this.content.size, e);
        }
      }, {
        key: "textContent",
        get: function () {
          return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
        }
      }, {
        key: "textBetween",
        value: function (e, t, n, r) {
          return this.content.textBetween(e, t, n, r);
        }
      }, {
        key: "firstChild",
        get: function () {
          return this.content.firstChild;
        }
      }, {
        key: "lastChild",
        get: function () {
          return this.content.lastChild;
        }
      }, {
        key: "eq",
        value: function (e) {
          return this == e || this.sameMarkup(e) && this.content.eq(e.content);
        }
      }, {
        key: "sameMarkup",
        value: function (e) {
          return this.hasMarkup(e.type, e.attrs, e.marks);
        }
      }, {
        key: "hasMarkup",
        value: function (e, t, n) {
          return this.type == e && w(this.attrs, t || e.defaultAttrs || K) && C.sameSet(this.marks, n || C.none);
        }
      }, {
        key: "copy",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return t == this.content ? this : new e(this.type, this.attrs, t, this.marks);
        }
      }, {
        key: "mark",
        value: function (t) {
          return t == this.marks ? this : new e(this.type, this.attrs, this.content, t);
        }
      }, {
        key: "cut",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.content.size;
          return 0 == e && t == this.content.size ? this : this.copy(this.content.cut(e, t));
        }
      }, {
        key: "slice",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.content.size,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (e == t) return M.empty;
          var r = this.resolve(e),
            a = this.resolve(t),
            i = n ? 0 : r.sharedDepth(t),
            o = r.start(i),
            s = r.node(i).content.cut(r.pos - o, a.pos - o);
          return new M(s, r.depth - i, a.depth - i);
        }
      }, {
        key: "replace",
        value: function (e, t, n) {
          return k(this.resolve(e), this.resolve(t), n);
        }
      }, {
        key: "nodeAt",
        value: function (e) {
          for (var t = this;;) {
            var n = t.content.findIndex(e),
              r = n.index,
              a = n.offset;
            if (!(t = t.maybeChild(r))) return null;
            if (a == e || t.isText) return t;
            e -= a + 1;
          }
        }
      }, {
        key: "childAfter",
        value: function (e) {
          var t = this.content.findIndex(e),
            n = t.index,
            r = t.offset;
          return {
            node: this.content.maybeChild(n),
            index: n,
            offset: r
          };
        }
      }, {
        key: "childBefore",
        value: function (e) {
          if (0 == e) return {
            node: null,
            index: 0,
            offset: 0
          };
          var t = this.content.findIndex(e),
            n = t.index,
            r = t.offset;
          if (r < e) return {
            node: this.content.child(n),
            index: n,
            offset: r
          };
          var a = this.content.child(n - 1);
          return {
            node: a,
            index: n - 1,
            offset: r - a.nodeSize
          };
        }
      }, {
        key: "resolve",
        value: function (e) {
          return U.resolveCached(this, e);
        }
      }, {
        key: "resolveNoCache",
        value: function (e) {
          return U.resolve(this, e);
        }
      }, {
        key: "rangeHasMark",
        value: function (e, t, n) {
          var r = !1;
          return t > e && this.nodesBetween(e, t, function (e) {
            return n.isInSet(e.marks) && (r = !0), !r;
          }), r;
        }
      }, {
        key: "isBlock",
        get: function () {
          return this.type.isBlock;
        }
      }, {
        key: "isTextblock",
        get: function () {
          return this.type.isTextblock;
        }
      }, {
        key: "inlineContent",
        get: function () {
          return this.type.inlineContent;
        }
      }, {
        key: "isInline",
        get: function () {
          return this.type.isInline;
        }
      }, {
        key: "isText",
        get: function () {
          return this.type.isText;
        }
      }, {
        key: "isLeaf",
        get: function () {
          return this.type.isLeaf;
        }
      }, {
        key: "isAtom",
        get: function () {
          return this.type.isAtom;
        }
      }, {
        key: "toString",
        value: function () {
          if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
          var e = this.type.name;
          return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Y(this.marks, e);
        }
      }, {
        key: "contentMatchAt",
        value: function (e) {
          var t = this.type.contentMatch.matchFragment(this.content, 0, e);
          if (!t) throw new Error("Called contentMatchAt on a node with invalid content");
          return t;
        }
      }, {
        key: "canReplace",
        value: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.empty,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : n.childCount,
            i = this.contentMatchAt(e).matchFragment(n, r, a),
            o = i && i.matchFragment(this.content, t);
          if (!o || !o.validEnd) return !1;
          for (var s = r; s < a; s++) if (!this.type.allowsMarks(n.child(s).marks)) return !1;
          return !0;
        }
      }, {
        key: "canReplaceWith",
        value: function (e, t, n, r) {
          if (r && !this.type.allowsMarks(r)) return !1;
          var a = this.contentMatchAt(e).matchType(n),
            i = a && a.matchFragment(this.content, t);
          return !!i && i.validEnd;
        }
      }, {
        key: "canAppend",
        value: function (e) {
          return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
        }
      }, {
        key: "check",
        value: function () {
          this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
          for (var e = C.none, t = 0; t < this.marks.length; t++) {
            var n = this.marks[t];
            n.type.checkAttrs(n.attrs), e = n.addToSet(e);
          }
          if (!C.sameSet(e, this.marks)) throw new RangeError("Invalid collection of marks for node ".concat(this.type.name, ": ").concat(this.marks.map(function (e) {
            return e.type.name;
          })));
          this.content.forEach(function (e) {
            return e.check();
          });
        }
      }, {
        key: "toJSON",
        value: function () {
          var e = {
            type: this.type.name
          };
          for (var t in this.attrs) {
            e.attrs = this.attrs;
            break;
          }
          return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map(function (e) {
            return e.toJSON();
          })), e;
        }
      }], [{
        key: "fromJSON",
        value: function (e, t) {
          if (!t) throw new RangeError("Invalid input for Node.fromJSON");
          var n = void 0;
          if (t.marks) {
            if (!Array.isArray(t.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
            n = t.marks.map(e.markFromJSON);
          }
          if ("text" == t.type) {
            if ("string" != typeof t.text) throw new RangeError("Invalid text node in JSON");
            return e.text(t.text, n);
          }
          var r = v.fromJSON(e, t.content),
            a = e.nodeType(t.type).create(t.attrs, r, n);
          return a.type.checkAttrs(a.attrs), a;
        }
      }]), e;
    }();
  V.prototype.text = void 0;
  var z = function (e) {
    i(n, e);
    var t = o(n);
    function n(e, r, a, i) {
      var o;
      if (f(this, n), o = t.call(this, e, r, null, i), !a) throw new RangeError("Empty text nodes are not allowed");
      return o.text = a, o;
    }
    return _(n, [{
      key: "toString",
      value: function () {
        return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Y(this.marks, JSON.stringify(this.text));
      }
    }, {
      key: "textContent",
      get: function () {
        return this.text;
      }
    }, {
      key: "textBetween",
      value: function (e, t) {
        return this.text.slice(e, t);
      }
    }, {
      key: "nodeSize",
      get: function () {
        return this.text.length;
      }
    }, {
      key: "mark",
      value: function (e) {
        return e == this.marks ? this : new n(this.type, this.attrs, this.text, e);
      }
    }, {
      key: "withText",
      value: function (e) {
        return e == this.text ? this : new n(this.type, this.attrs, e, this.marks);
      }
    }, {
      key: "cut",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.text.length;
        return 0 == e && t == this.text.length ? this : this.withText(this.text.slice(e, t));
      }
    }, {
      key: "eq",
      value: function (e) {
        return this.sameMarkup(e) && this.text == e.text;
      }
    }, {
      key: "toJSON",
      value: function () {
        var e = a(d(n.prototype), "toJSON", this).call(this);
        return e.text = this.text, e;
      }
    }]), n;
  }(V);
  function Y(e, t) {
    for (var n = e.length - 1; n >= 0; n--) t = e[n].type.name + "(" + t + ")";
    return t;
  }
  var Q = function () {
    function e(t) {
      f(this, e), this.validEnd = t, this.next = [], this.wrapCache = [];
    }
    return _(e, [{
      key: "matchType",
      value: function (e) {
        for (var t = 0; t < this.next.length; t++) if (this.next[t].type == e) return this.next[t].next;
        return null;
      }
    }, {
      key: "matchFragment",
      value: function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.childCount, r = this, a = t; r && a < n; a++) r = r.matchType(e.child(a).type);
        return r;
      }
    }, {
      key: "inlineContent",
      get: function () {
        return 0 != this.next.length && this.next[0].type.isInline;
      }
    }, {
      key: "defaultType",
      get: function () {
        for (var e = 0; e < this.next.length; e++) {
          var t = this.next[e].type;
          if (!t.isText && !t.hasRequiredAttrs()) return t;
        }
        return null;
      }
    }, {
      key: "compatible",
      value: function (e) {
        for (var t = 0; t < this.next.length; t++) for (var n = 0; n < e.next.length; n++) if (this.next[t].type == e.next[n].type) return !0;
        return !1;
      }
    }, {
      key: "fillBefore",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = [this];
        return function a(i, o) {
          var s = i.matchFragment(e, n);
          if (s && (!t || s.validEnd)) return v.from(o.map(function (e) {
            return e.createAndFill();
          }));
          for (var l = 0; l < i.next.length; l++) {
            var c = i.next[l],
              u = c.type,
              d = c.next;
            if (!u.isText && !u.hasRequiredAttrs() && -1 == r.indexOf(d)) {
              r.push(d);
              var p = a(d, o.concat(u));
              if (p) return p;
            }
          }
          return null;
        }(this, []);
      }
    }, {
      key: "findWrapping",
      value: function (e) {
        for (var t = 0; t < this.wrapCache.length; t += 2) if (this.wrapCache[t] == e) return this.wrapCache[t + 1];
        var n = this.computeWrapping(e);
        return this.wrapCache.push(e, n), n;
      }
    }, {
      key: "computeWrapping",
      value: function (e) {
        for (var t = Object.create(null), n = [{
            match: this,
            type: null,
            via: null
          }]; n.length;) {
          var r = n.shift(),
            a = r.match;
          if (a.matchType(e)) {
            for (var i = [], o = r; o.type; o = o.via) i.push(o.type);
            return i.reverse();
          }
          for (var s = 0; s < a.next.length; s++) {
            var l = a.next[s],
              c = l.type,
              u = l.next;
            c.isLeaf || c.hasRequiredAttrs() || c.name in t || r.type && !u.validEnd || (n.push({
              match: c.contentMatch,
              type: c,
              via: r
            }), t[c.name] = !0);
          }
        }
        return null;
      }
    }, {
      key: "edgeCount",
      get: function () {
        return this.next.length;
      }
    }, {
      key: "edge",
      value: function (e) {
        if (e >= this.next.length) throw new RangeError("There's no ".concat(e, "th edge in this content match"));
        return this.next[e];
      }
    }, {
      key: "toString",
      value: function () {
        var e = [];
        return function t(n) {
          e.push(n);
          for (var r = 0; r < n.next.length; r++) -1 == e.indexOf(n.next[r].next) && t(n.next[r].next);
        }(this), e.map(function (t, n) {
          for (var r = n + (t.validEnd ? "*" : " ") + " ", a = 0; a < t.next.length; a++) r += (a ? ", " : "") + t.next[a].type.name + "->" + e.indexOf(t.next[a].next);
          return r;
        }).join("\n");
      }
    }], [{
      key: "parse",
      value: function (t, n) {
        var r = new G(t, n);
        if (null == r.next) return e.empty;
        var a = $(r);
        r.next && r.err("Unexpected trailing text");
        var i = ne(function (e) {
          var t = [[]];
          return a(function e(t, i) {
            if ("choice" == t.type) return t.exprs.reduce(function (t, n) {
              return t.concat(e(n, i));
            }, []);
            if ("seq" != t.type) {
              if ("star" == t.type) {
                var o = n();
                return r(i, o), a(e(t.expr, o), o), [r(o)];
              }
              if ("plus" == t.type) {
                var s = n();
                return a(e(t.expr, i), s), a(e(t.expr, s), s), [r(s)];
              }
              if ("opt" == t.type) return [r(i)].concat(e(t.expr, i));
              if ("range" == t.type) {
                for (var l = i, c = 0; c < t.min; c++) {
                  var u = n();
                  a(e(t.expr, l), u), l = u;
                }
                if (-1 == t.max) a(e(t.expr, l), l);else for (var d = t.min; d < t.max; d++) {
                  var p = n();
                  r(l, p), a(e(t.expr, l), p), l = p;
                }
                return [r(l)];
              }
              if ("name" == t.type) return [r(i, void 0, t.value)];
              throw new Error("Unknown expr type");
            }
            for (var f = 0;; f++) {
              var h = e(t.exprs[f], i);
              if (f == t.exprs.length - 1) return h;
              a(h, i = n());
            }
          }(e, 0), n()), t;
          function n() {
            return t.push([]) - 1;
          }
          function r(e, n, r) {
            var a = {
              term: r,
              to: n
            };
            return t[e].push(a), a;
          }
          function a(e, t) {
            e.forEach(function (e) {
              return e.to = t;
            });
          }
        }(a));
        return function (e, t) {
          for (var n = 0, r = [e]; n < r.length; n++) {
            for (var a = r[n], i = !a.validEnd, o = [], s = 0; s < a.next.length; s++) {
              var l = a.next[s],
                c = l.type,
                u = l.next;
              o.push(c.name), !i || c.isText || c.hasRequiredAttrs() || (i = !1), -1 == r.indexOf(u) && r.push(u);
            }
            i && t.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
          }
        }(i, r), i;
      }
    }]), e;
  }();
  Q.empty = new Q(!0);
  var G = function () {
    function e(t, n) {
      f(this, e), this.string = t, this.nodeTypes = n, this.inline = null, this.pos = 0, this.tokens = t.split(/\s*(?=\b|\W|$)/), "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(), "" == this.tokens[0] && this.tokens.shift();
    }
    return _(e, [{
      key: "next",
      get: function () {
        return this.tokens[this.pos];
      }
    }, {
      key: "eat",
      value: function (e) {
        return this.next == e && (this.pos++ || !0);
      }
    }, {
      key: "err",
      value: function (e) {
        throw new SyntaxError(e + " (in content expression '" + this.string + "')");
      }
    }]), e;
  }();
  function $(e) {
    var t = [];
    do {
      t.push(q(e));
    } while (e.eat("|"));
    return 1 == t.length ? t[0] : {
      type: "choice",
      exprs: t
    };
  }
  function q(e) {
    var t = [];
    do {
      t.push(Z(e));
    } while (e.next && ")" != e.next && "|" != e.next);
    return 1 == t.length ? t[0] : {
      type: "seq",
      exprs: t
    };
  }
  function Z(e) {
    for (var t = function (e) {
      if (e.eat("(")) {
        var t = $(e);
        return e.eat(")") || e.err("Missing closing paren"), t;
      }
      if (!/\W/.test(e.next)) {
        var n = function (e, t) {
          var n = e.nodeTypes,
            r = n[t];
          if (r) return [r];
          var a = [];
          for (var i in n) {
            var o = n[i];
            o.isInGroup(t) && a.push(o);
          }
          return 0 == a.length && e.err("No node type or group '" + t + "' found"), a;
        }(e, e.next).map(function (t) {
          return null == e.inline ? e.inline = t.isInline : e.inline != t.isInline && e.err("Mixing inline and block content"), {
            type: "name",
            value: t
          };
        });
        return e.pos++, 1 == n.length ? n[0] : {
          type: "choice",
          exprs: n
        };
      }
      e.err("Unexpected token '" + e.next + "'");
    }(e);;) if (e.eat("+")) t = {
      type: "plus",
      expr: t
    };else if (e.eat("*")) t = {
      type: "star",
      expr: t
    };else if (e.eat("?")) t = {
      type: "opt",
      expr: t
    };else {
      if (!e.eat("{")) break;
      t = J(e, t);
    }
    return t;
  }
  function X(e) {
    /\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
    var t = Number(e.next);
    return e.pos++, t;
  }
  function J(e, t) {
    var n = X(e),
      r = n;
    return e.eat(",") && (r = "}" != e.next ? X(e) : -1), e.eat("}") || e.err("Unclosed braced range"), {
      type: "range",
      min: n,
      max: r,
      expr: t
    };
  }
  function ee(e, t) {
    return t - e;
  }
  function te(e, t) {
    var n = [];
    return function t(r) {
      var a = e[r];
      if (1 == a.length && !a[0].term) return t(a[0].to);
      n.push(r);
      for (var i = 0; i < a.length; i++) {
        var o = a[i],
          s = o.term,
          l = o.to;
        s || -1 != n.indexOf(l) || t(l);
      }
    }(t), n.sort(ee);
  }
  function ne(e) {
    var t = Object.create(null);
    return function n(r) {
      var a = [];
      r.forEach(function (t) {
        e[t].forEach(function (t) {
          var n = t.term,
            r = t.to;
          if (n) {
            for (var i, o = 0; o < a.length; o++) a[o][0] == n && (i = a[o][1]);
            te(e, r).forEach(function (e) {
              i || a.push([n, i = []]), -1 == i.indexOf(e) && i.push(e);
            });
          }
        });
      });
      for (var i = t[r.join(",")] = new Q(r.indexOf(e.length - 1) > -1), o = 0; o < a.length; o++) {
        var s = a[o][1].sort(ee);
        i.next.push({
          type: a[o][0],
          next: t[s.join(",")] || n(s)
        });
      }
      return i;
    }(te(e, 0));
  }
  function re(e) {
    var t = Object.create(null);
    for (var n in e) {
      var r = e[n];
      if (!r.hasDefault) return null;
      t[n] = r.default;
    }
    return t;
  }
  function ae(e, t) {
    var n = Object.create(null);
    for (var r in e) {
      var a = t && t[r];
      if (void 0 === a) {
        var i = e[r];
        if (!i.hasDefault) throw new RangeError("No value supplied for attribute " + r);
        a = i.default;
      }
      n[r] = a;
    }
    return n;
  }
  function ie(e, t, n, r) {
    for (var a in t) if (!(a in e)) throw new RangeError("Unsupported attribute ".concat(a, " for ").concat(n, " of type ").concat(a));
    for (var i in e) {
      var o = e[i];
      o.validate && o.validate(t[i]);
    }
  }
  function oe(e, t) {
    var n = Object.create(null);
    if (t) for (var r in t) n[r] = new le(e, r, t[r]);
    return n;
  }
  var se = function () {
      function e(t, n, r) {
        f(this, e), this.name = t, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = oe(t, r.attrs), this.defaultAttrs = re(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || "text" == t), this.isText = "text" == t;
      }
      return _(e, [{
        key: "isInline",
        get: function () {
          return !this.isBlock;
        }
      }, {
        key: "isTextblock",
        get: function () {
          return this.isBlock && this.inlineContent;
        }
      }, {
        key: "isLeaf",
        get: function () {
          return this.contentMatch == Q.empty;
        }
      }, {
        key: "isAtom",
        get: function () {
          return this.isLeaf || !!this.spec.atom;
        }
      }, {
        key: "isInGroup",
        value: function (e) {
          return this.groups.indexOf(e) > -1;
        }
      }, {
        key: "whitespace",
        get: function () {
          return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
        }
      }, {
        key: "hasRequiredAttrs",
        value: function () {
          for (var e in this.attrs) if (this.attrs[e].isRequired) return !0;
          return !1;
        }
      }, {
        key: "compatibleContent",
        value: function (e) {
          return this == e || this.contentMatch.compatible(e.contentMatch);
        }
      }, {
        key: "computeAttrs",
        value: function (e) {
          return !e && this.defaultAttrs ? this.defaultAttrs : ae(this.attrs, e);
        }
      }, {
        key: "create",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (this.isText) throw new Error("NodeType.create can't construct text nodes");
          return new V(this, this.computeAttrs(e), v.from(t), C.setFrom(n));
        }
      }, {
        key: "createChecked",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return t = v.from(t), this.checkContent(t), new V(this, this.computeAttrs(e), t, C.setFrom(n));
        }
      }, {
        key: "createAndFill",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (e = this.computeAttrs(e), (t = v.from(t)).size) {
            var r = this.contentMatch.fillBefore(t);
            if (!r) return null;
            t = r.append(t);
          }
          var a = this.contentMatch.matchFragment(t),
            i = a && a.fillBefore(v.empty, !0);
          return i ? new V(this, e, t.append(i), C.setFrom(n)) : null;
        }
      }, {
        key: "validContent",
        value: function (e) {
          var t = this.contentMatch.matchFragment(e);
          if (!t || !t.validEnd) return !1;
          for (var n = 0; n < e.childCount; n++) if (!this.allowsMarks(e.child(n).marks)) return !1;
          return !0;
        }
      }, {
        key: "checkContent",
        value: function (e) {
          if (!this.validContent(e)) throw new RangeError("Invalid content for node ".concat(this.name, ": ").concat(e.toString().slice(0, 50)));
        }
      }, {
        key: "checkAttrs",
        value: function (e) {
          ie(this.attrs, e, "node", this.name);
        }
      }, {
        key: "allowsMarkType",
        value: function (e) {
          return null == this.markSet || this.markSet.indexOf(e) > -1;
        }
      }, {
        key: "allowsMarks",
        value: function (e) {
          if (null == this.markSet) return !0;
          for (var t = 0; t < e.length; t++) if (!this.allowsMarkType(e[t].type)) return !1;
          return !0;
        }
      }, {
        key: "allowedMarks",
        value: function (e) {
          if (null == this.markSet) return e;
          for (var t, n = 0; n < e.length; n++) this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : t || (t = e.slice(0, n));
          return t ? t.length ? t : C.none : e;
        }
      }], [{
        key: "compile",
        value: function (t, n) {
          var r = Object.create(null);
          t.forEach(function (t, a) {
            return r[t] = new e(t, n, a);
          });
          var a = n.spec.topNode || "doc";
          if (!r[a]) throw new RangeError("Schema is missing its top node type ('" + a + "')");
          if (!r.text) throw new RangeError("Every schema needs a 'text' type");
          for (var i in r.text.attrs) throw new RangeError("The text node type should not have attributes");
          return r;
        }
      }]), e;
    }(),
    le = function () {
      function e(t, n, r) {
        f(this, e), this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = "string" == typeof r.validate ? function (e, t, n) {
          var r = n.split("|");
          return function (n) {
            var a = null === n ? "null" : p(n);
            if (r.indexOf(a) < 0) throw new RangeError("Expected value of type ".concat(r, " for attribute ").concat(t, " on type ").concat(e, ", got ").concat(a));
          };
        }(t, n, r.validate) : r.validate;
      }
      return _(e, [{
        key: "isRequired",
        get: function () {
          return !this.hasDefault;
        }
      }]), e;
    }(),
    ce = function () {
      function e(t, n, r, a) {
        f(this, e), this.name = t, this.rank = n, this.schema = r, this.spec = a, this.attrs = oe(t, a.attrs), this.excluded = null;
        var i = re(this.attrs);
        this.instance = i ? new C(this, i) : null;
      }
      return _(e, [{
        key: "create",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return !e && this.instance ? this.instance : new C(this, ae(this.attrs, e));
        }
      }, {
        key: "removeFromSet",
        value: function (e) {
          for (var t = 0; t < e.length; t++) e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
          return e;
        }
      }, {
        key: "isInSet",
        value: function (e) {
          for (var t = 0; t < e.length; t++) if (e[t].type == this) return e[t];
        }
      }, {
        key: "checkAttrs",
        value: function (e) {
          ie(this.attrs, e, "mark", this.name);
        }
      }, {
        key: "excludes",
        value: function (e) {
          return this.excluded.indexOf(e) > -1;
        }
      }], [{
        key: "compile",
        value: function (t, n) {
          var r = Object.create(null),
            a = 0;
          return t.forEach(function (t, i) {
            return r[t] = new e(t, a++, n, i);
          }), r;
        }
      }]), e;
    }(),
    ue = function () {
      function e(t) {
        var n = this;
        f(this, e), this.linebreakReplacement = null, this.cached = Object.create(null);
        var r = this.spec = {};
        for (var a in t) r[a] = t[a];
        r.nodes = A.from(t.nodes), r.marks = A.from(t.marks || {}), this.nodes = se.compile(this.spec.nodes, this), this.marks = ce.compile(this.spec.marks, this);
        var i = Object.create(null);
        for (var o in this.nodes) {
          if (o in this.marks) throw new RangeError(o + " can not be both a node and a mark");
          var s = this.nodes[o],
            l = s.spec.content || "",
            c = s.spec.marks;
          if (s.contentMatch = i[l] || (i[l] = Q.parse(l, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.spec.linebreakReplacement) {
            if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
            if (!s.isInline || !s.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
            this.linebreakReplacement = s;
          }
          s.markSet = "_" == c ? null : c ? de(this, c.split(" ")) : "" != c && s.inlineContent ? null : [];
        }
        for (var u in this.marks) {
          var d = this.marks[u],
            p = d.spec.excludes;
          d.excluded = null == p ? [d] : "" == p ? [] : de(this, p.split(" "));
        }
        this.nodeFromJSON = function (e) {
          return V.fromJSON(n, e);
        }, this.markFromJSON = function (e) {
          return C.fromJSON(n, e);
        }, this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null);
      }
      return _(e, [{
        key: "node",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0;
          if ("string" == typeof e) e = this.nodeType(e);else {
            if (!(e instanceof se)) throw new RangeError("Invalid node type: " + e);
            if (e.schema != this) throw new RangeError("Node type from different schema used (" + e.name + ")");
          }
          return e.createChecked(t, n, r);
        }
      }, {
        key: "text",
        value: function (e, t) {
          var n = this.nodes.text;
          return new z(n, n.defaultAttrs, e, C.setFrom(t));
        }
      }, {
        key: "mark",
        value: function (e, t) {
          return "string" == typeof e && (e = this.marks[e]), e.create(t);
        }
      }, {
        key: "nodeType",
        value: function (e) {
          var t = this.nodes[e];
          if (!t) throw new RangeError("Unknown node type: " + e);
          return t;
        }
      }]), e;
    }();
  function de(e, t) {
    for (var n = [], r = 0; r < t.length; r++) {
      var a = t[r],
        i = e.marks[a],
        o = i;
      if (i) n.push(i);else for (var s in e.marks) {
        var l = e.marks[s];
        ("_" == a || l.spec.group && l.spec.group.split(" ").indexOf(a) > -1) && n.push(o = l);
      }
      if (!o) throw new SyntaxError("Unknown mark type: '" + t[r] + "'");
    }
    return n;
  }
  var pe = function () {
      function e(t, n) {
        var r = this;
        f(this, e), this.schema = t, this.rules = n, this.tags = [], this.styles = [];
        var a = this.matchedStyles = [];
        n.forEach(function (e) {
          if (function (e) {
            return null != e.tag;
          }(e)) r.tags.push(e);else if (function (e) {
            return null != e.style;
          }(e)) {
            var t = /[^=]*/.exec(e.style)[0];
            a.indexOf(t) < 0 && a.push(t), r.styles.push(e);
          }
        }), this.normalizeLists = !this.tags.some(function (e) {
          if (!/^(ul|ol)\b/.test(e.tag) || !e.node) return !1;
          var n = t.nodes[e.node];
          return n.contentMatch.matchType(n);
        });
      }
      return _(e, [{
        key: "parse",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = new ge(this, t, !1);
          return n.addAll(e, C.none, t.from, t.to), n.finish();
        }
      }, {
        key: "parseSlice",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = new ge(this, t, !0);
          return n.addAll(e, C.none, t.from, t.to), M.maxOpen(n.finish());
        }
      }, {
        key: "matchTag",
        value: function (e, t, n) {
          for (var r = n ? this.tags.indexOf(n) + 1 : 0; r < this.tags.length; r++) {
            var a = this.tags[r];
            if (ye(e, a.tag) && (void 0 === a.namespace || e.namespaceURI == a.namespace) && (!a.context || t.matchesContext(a.context))) {
              if (a.getAttrs) {
                var i = a.getAttrs(e);
                if (!1 === i) continue;
                a.attrs = i || void 0;
              }
              return a;
            }
          }
        }
      }, {
        key: "matchStyle",
        value: function (e, t, n, r) {
          for (var a = r ? this.styles.indexOf(r) + 1 : 0; a < this.styles.length; a++) {
            var i = this.styles[a],
              o = i.style;
            if (!(0 != o.indexOf(e) || i.context && !n.matchesContext(i.context) || o.length > e.length && (61 != o.charCodeAt(e.length) || o.slice(e.length + 1) != t))) {
              if (i.getAttrs) {
                var s = i.getAttrs(t);
                if (!1 === s) continue;
                i.attrs = s || void 0;
              }
              return i;
            }
          }
        }
      }], [{
        key: "schemaRules",
        value: function (e) {
          var t = [];
          function n(e) {
            for (var n = null == e.priority ? 50 : e.priority, r = 0; r < t.length; r++) {
              var a = t[r];
              if ((null == a.priority ? 50 : a.priority) < n) break;
            }
            t.splice(r, 0, e);
          }
          var r = function (t) {
            var r = e.marks[t].spec.parseDOM;
            r && r.forEach(function (e) {
              n(e = ve(e)), e.mark || e.ignore || e.clearMark || (e.mark = t);
            });
          };
          for (var a in e.marks) r(a);
          var i = function (t) {
            var r = e.nodes[t].spec.parseDOM;
            r && r.forEach(function (e) {
              n(e = ve(e)), e.node || e.ignore || e.mark || (e.node = t);
            });
          };
          for (var o in e.nodes) i(o);
          return t;
        }
      }, {
        key: "fromSchema",
        value: function (t) {
          return t.cached.domParser || (t.cached.domParser = new e(t, e.schemaRules(t)));
        }
      }]), e;
    }(),
    fe = {
      address: !0,
      article: !0,
      aside: !0,
      blockquote: !0,
      canvas: !0,
      dd: !0,
      div: !0,
      dl: !0,
      fieldset: !0,
      figcaption: !0,
      figure: !0,
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
      li: !0,
      noscript: !0,
      ol: !0,
      output: !0,
      p: !0,
      pre: !0,
      section: !0,
      table: !0,
      tfoot: !0,
      ul: !0
    },
    he = {
      head: !0,
      noscript: !0,
      object: !0,
      script: !0,
      style: !0,
      title: !0
    },
    _e = {
      ol: !0,
      ul: !0
    };
  function me(e, t, n) {
    return null != t ? (t ? 1 : 0) | ("full" === t ? 2 : 0) : e && "pre" == e.whitespace ? 3 : -5 & n;
  }
  var Ae = function () {
      function e(t, n, r, a, i, o) {
        f(this, e), this.type = t, this.attrs = n, this.marks = r, this.solid = a, this.options = o, this.content = [], this.activeMarks = C.none, this.match = i || (4 & o ? null : t.contentMatch);
      }
      return _(e, [{
        key: "findWrapping",
        value: function (e) {
          if (!this.match) {
            if (!this.type) return [];
            var t = this.type.contentMatch.fillBefore(v.from(e));
            if (!t) {
              var n,
                r = this.type.contentMatch;
              return (n = r.findWrapping(e.type)) ? (this.match = r, n) : null;
            }
            this.match = this.type.contentMatch.matchFragment(t);
          }
          return this.match.findWrapping(e.type);
        }
      }, {
        key: "finish",
        value: function (e) {
          if (!(1 & this.options)) {
            var t,
              n = this.content[this.content.length - 1];
            if (n && n.isText && (t = /[ \t\r\n\u000c]+$/.exec(n.text))) {
              var r = n;
              n.text.length == t[0].length ? this.content.pop() : this.content[this.content.length - 1] = r.withText(r.text.slice(0, r.text.length - t[0].length));
            }
          }
          var a = v.from(this.content);
          return !e && this.match && (a = a.append(this.match.fillBefore(v.empty, !0))), this.type ? this.type.create(this.attrs, a, this.marks) : a;
        }
      }, {
        key: "inlineContext",
        value: function (e) {
          return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !fe.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
        }
      }]), e;
    }(),
    ge = function () {
      function e(t, n, r) {
        f(this, e), this.parser = t, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
        var a,
          i = n.topNode,
          o = me(null, n.preserveWhitespace, 0) | (r ? 4 : 0);
        a = i ? new Ae(i.type, i.attrs, C.none, !0, n.topMatch || i.type.contentMatch, o) : new Ae(r ? null : t.schema.topNodeType, null, C.none, !0, null, o), this.nodes = [a], this.find = n.findPositions, this.needsBlock = !1;
      }
      return _(e, [{
        key: "top",
        get: function () {
          return this.nodes[this.open];
        }
      }, {
        key: "addDOM",
        value: function (e, t) {
          3 == e.nodeType ? this.addTextNode(e, t) : 1 == e.nodeType && this.addElement(e, t);
        }
      }, {
        key: "addTextNode",
        value: function (e, t) {
          var n = e.nodeValue,
            r = this.top,
            a = 2 & r.options ? "full" : this.localPreserveWS || (1 & r.options) > 0;
          if ("full" === a || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(n)) {
            if (a) n = "full" !== a ? n.replace(/\r?\n|\r/g, " ") : n.replace(/\r\n?/g, "\n");else if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
              var i = r.content[r.content.length - 1],
                o = e.previousSibling;
              (!i || o && "BR" == o.nodeName || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (n = n.slice(1));
            }
            n && this.insertNode(this.parser.schema.text(n), t, !/\S/.test(n)), this.findInText(e);
          } else this.findInside(e);
        }
      }, {
        key: "addElement",
        value: function (e, t, n) {
          var r = this.localPreserveWS,
            a = this.top;
          ("PRE" == e.tagName || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
          var i,
            o = e.nodeName.toLowerCase();
          _e.hasOwnProperty(o) && this.parser.normalizeLists && function (e) {
            for (var t = e.firstChild, n = null; t; t = t.nextSibling) {
              var r = 1 == t.nodeType ? t.nodeName.toLowerCase() : null;
              r && _e.hasOwnProperty(r) && n ? (n.appendChild(t), t = n) : "li" == r ? n = t : r && (n = null);
            }
          }(e);
          var s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, n));
          e: if (s ? s.ignore : he.hasOwnProperty(o)) this.findInside(e), this.ignoreFallback(e, t);else if (!s || s.skip || s.closeParent) {
            s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
            var l,
              c = this.needsBlock;
            if (fe.hasOwnProperty(o)) a.content.length && a.content[0].isInline && this.open && (this.open--, a = this.top), l = !0, a.type || (this.needsBlock = !0);else if (!e.firstChild) {
              this.leafFallback(e, t);
              break e;
            }
            var u = s && s.skip ? t : this.readStyles(e, t);
            u && this.addAll(e, u), l && this.sync(a), this.needsBlock = c;
          } else {
            var d = this.readStyles(e, t);
            d && this.addElementByRule(e, s, d, !1 === s.consuming ? i : void 0);
          }
          this.localPreserveWS = r;
        }
      }, {
        key: "leafFallback",
        value: function (e, t) {
          "BR" == e.nodeName && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode("\n"), t);
        }
      }, {
        key: "ignoreFallback",
        value: function (e, t) {
          "BR" != e.nodeName || this.top.type && this.top.type.inlineContent || this.findPlace(this.parser.schema.text("-"), t, !0);
        }
      }, {
        key: "readStyles",
        value: function (e, t) {
          var n = this,
            r = e.style;
          if (r && r.length) for (var a = 0; a < this.parser.matchedStyles.length; a++) {
            var i = this.parser.matchedStyles[a],
              o = r.getPropertyValue(i);
            if (o) for (var s, l = function (e) {
                var r = n.parser.matchStyle(i, o, n, e);
                return r ? r.ignore ? {
                  v: null
                } : (t = r.clearMark ? t.filter(function (e) {
                  return !r.clearMark(e);
                }) : t.concat(n.parser.schema.marks[r.mark].create(r.attrs)), !1 !== r.consuming ? (c = e, 0) : void (c = e = r)) : (c = e, 0);
              }, c = void 0; 0 !== (s = l(c));) if (s) return s.v;
          }
          return t;
        }
      }, {
        key: "addElementByRule",
        value: function (e, t, n, r) {
          var a,
            i,
            o = this;
          if (t.node) {
            if ((i = this.parser.schema.nodes[t.node]).isLeaf) this.insertNode(i.create(t.attrs), n, "BR" == e.nodeName) || this.leafFallback(e, n);else {
              var s = this.enter(i, t.attrs || null, n, t.preserveWhitespace);
              s && (a = !0, n = s);
            }
          } else {
            var l = this.parser.schema.marks[t.mark];
            n = n.concat(l.create(t.attrs));
          }
          var c = this.top;
          if (i && i.isLeaf) this.findInside(e);else if (r) this.addElement(e, n, r);else if (t.getContent) this.findInside(e), t.getContent(e, this.parser.schema).forEach(function (e) {
            return o.insertNode(e, n, !1);
          });else {
            var u = e;
            "string" == typeof t.contentElement ? u = e.querySelector(t.contentElement) : "function" == typeof t.contentElement ? u = t.contentElement(e) : t.contentElement && (u = t.contentElement), this.findAround(e, u, !0), this.addAll(u, n), this.findAround(e, u, !1);
          }
          a && this.sync(c) && this.open--;
        }
      }, {
        key: "addAll",
        value: function (e, t, n, r) {
          for (var a = n || 0, i = n ? e.childNodes[n] : e.firstChild, o = null == r ? null : e.childNodes[r]; i != o; i = i.nextSibling, ++a) this.findAtPoint(e, a), this.addDOM(i, t);
          this.findAtPoint(e, a);
        }
      }, {
        key: "findPlace",
        value: function (e, t, n) {
          for (var r, a, i = this.open, o = 0; i >= 0; i--) {
            var s = this.nodes[i],
              l = s.findWrapping(e);
            if (l && (!r || r.length > l.length + o) && (r = l, a = s, !l.length)) break;
            if (s.solid) {
              if (n) break;
              o += 2;
            }
          }
          if (!r) return null;
          this.sync(a);
          for (var c = 0; c < r.length; c++) t = this.enterInner(r[c], null, t, !1);
          return t;
        }
      }, {
        key: "insertNode",
        value: function (e, t, n) {
          if (e.isInline && this.needsBlock && !this.top.type) {
            var a = this.textblockFromContext();
            a && (t = this.enterInner(a, null, t));
          }
          var i = this.findPlace(e, t, n);
          if (i) {
            this.closeExtra();
            var o = this.top;
            o.match && (o.match = o.match.matchType(e.type));
            var s,
              l = C.none,
              c = function (e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                  if (Array.isArray(e) || (n = function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return r(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
                    }
                  }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var a = 0,
                      i = function () {};
                    return {
                      s: i,
                      n: function () {
                        return a >= e.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: e[a++]
                        };
                      },
                      e: function (e) {
                        throw e;
                      },
                      f: i
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
              }(i.concat(e.marks));
            try {
              for (c.s(); !(s = c.n()).done;) {
                var u = s.value;
                (o.type ? o.type.allowsMarkType(u.type) : Ee(u.type, e.type)) && (l = u.addToSet(l));
              }
            } catch (e) {
              c.e(e);
            } finally {
              c.f();
            }
            return o.content.push(e.mark(l)), !0;
          }
          return !1;
        }
      }, {
        key: "enter",
        value: function (e, t, n, r) {
          var a = this.findPlace(e.create(t), n, !1);
          return a && (a = this.enterInner(e, t, n, !0, r)), a;
        }
      }, {
        key: "enterInner",
        value: function (e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = arguments.length > 4 ? arguments[4] : void 0;
          this.closeExtra();
          var i = this.top;
          i.match = i.match && i.match.matchType(e);
          var o = me(e, a, i.options);
          4 & i.options && 0 == i.content.length && (o |= 4);
          var s = C.none;
          return n = n.filter(function (t) {
            return !(i.type ? i.type.allowsMarkType(t.type) : Ee(t.type, e)) || (s = t.addToSet(s), !1);
          }), this.nodes.push(new Ae(e, t, s, r, null, o)), this.open++, n;
        }
      }, {
        key: "closeExtra",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = this.nodes.length - 1;
          if (t > this.open) {
            for (; t > this.open; t--) this.nodes[t - 1].content.push(this.nodes[t].finish(e));
            this.nodes.length = this.open + 1;
          }
        }
      }, {
        key: "finish",
        value: function () {
          return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!(!this.isOpen && !this.options.topOpen));
        }
      }, {
        key: "sync",
        value: function (e) {
          for (var t = this.open; t >= 0; t--) {
            if (this.nodes[t] == e) return this.open = t, !0;
            this.localPreserveWS && (this.nodes[t].options |= 1);
          }
          return !1;
        }
      }, {
        key: "currentPos",
        get: function () {
          this.closeExtra();
          for (var e = 0, t = this.open; t >= 0; t--) {
            for (var n = this.nodes[t].content, r = n.length - 1; r >= 0; r--) e += n[r].nodeSize;
            t && e++;
          }
          return e;
        }
      }, {
        key: "findAtPoint",
        value: function (e, t) {
          if (this.find) for (var n = 0; n < this.find.length; n++) this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos);
        }
      }, {
        key: "findInside",
        value: function (e) {
          if (this.find) for (var t = 0; t < this.find.length; t++) null == this.find[t].pos && 1 == e.nodeType && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
        }
      }, {
        key: "findAround",
        value: function (e, t, n) {
          if (e != t && this.find) for (var r = 0; r < this.find.length; r++) null == this.find[r].pos && 1 == e.nodeType && e.contains(this.find[r].node) && t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) && (this.find[r].pos = this.currentPos);
        }
      }, {
        key: "findInText",
        value: function (e) {
          if (this.find) for (var t = 0; t < this.find.length; t++) this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
        }
      }, {
        key: "matchesContext",
        value: function (e) {
          var t = this;
          if (e.indexOf("|") > -1) return e.split(/\s*\|\s*/).some(this.matchesContext, this);
          var n = e.split("/"),
            r = this.options.context,
            a = !(this.isOpen || r && r.parent.type != this.nodes[0].type),
            i = -(r ? r.depth + 1 : 0) + (a ? 0 : 1);
          return function e(o, s) {
            for (; o >= 0; o--) {
              var l = n[o];
              if ("" == l) {
                if (o == n.length - 1 || 0 == o) continue;
                for (; s >= i; s--) if (e(o - 1, s)) return !0;
                return !1;
              }
              var c = s > 0 || 0 == s && a ? t.nodes[s].type : r && s >= i ? r.node(s - i).type : null;
              if (!c || c.name != l && !c.isInGroup(l)) return !1;
              s--;
            }
            return !0;
          }(n.length - 1, this.open);
        }
      }, {
        key: "textblockFromContext",
        value: function () {
          var e = this.options.context;
          if (e) for (var t = e.depth; t >= 0; t--) {
            var n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
            if (n && n.isTextblock && n.defaultAttrs) return n;
          }
          for (var r in this.parser.schema.nodes) {
            var a = this.parser.schema.nodes[r];
            if (a.isTextblock && a.defaultAttrs) return a;
          }
        }
      }]), e;
    }();
  function ye(e, t) {
    return (e.matches || e.msMatchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector).call(e, t);
  }
  function ve(e) {
    var t = {};
    for (var n in e) t[n] = e[n];
    return t;
  }
  function Ee(e, t) {
    var n,
      r = t.schema.nodes,
      a = function () {
        var n = r[i];
        if (!n.allowsMarkType(e)) return 0;
        var a = [];
        return function e(n) {
          a.push(n);
          for (var r = 0; r < n.edgeCount; r++) {
            var i = n.edge(r),
              o = i.type,
              s = i.next;
            if (o == t) return !0;
            if (a.indexOf(s) < 0 && e(s)) return !0;
          }
        }(n.contentMatch) ? {
          v: !0
        } : void 0;
      };
    for (var i in r) if (0 !== (n = a()) && n) return n.v;
  }
  var be = function () {
    function e(t, n) {
      f(this, e), this.nodes = t, this.marks = n;
    }
    return _(e, [{
      key: "serializeFragment",
      value: function (e) {
        var t = this,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0;
        r || (r = Ce(n).createDocumentFragment());
        var a = r,
          i = [];
        return e.forEach(function (e) {
          if (i.length || e.marks.length) {
            for (var r = 0, o = 0; r < i.length && o < e.marks.length;) {
              var s = e.marks[o];
              if (t.marks[s.type.name]) {
                if (!s.eq(i[r][0]) || !1 === s.type.spec.spanning) break;
                r++, o++;
              } else o++;
            }
            for (; r < i.length;) a = i.pop()[1];
            for (; o < e.marks.length;) {
              var l = e.marks[o++],
                c = t.serializeMark(l, e.isInline, n);
              c && (i.push([l, a]), a.appendChild(c.dom), a = c.contentDOM || c.dom);
            }
          }
          a.appendChild(t.serializeNodeInner(e, n));
        }), r;
      }
    }, {
      key: "serializeNodeInner",
      value: function (e, t) {
        var n = Me(Ce(t), this.nodes[e.type.name](e), null, e.attrs),
          r = n.dom,
          a = n.contentDOM;
        if (a) {
          if (e.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
          this.serializeFragment(e.content, t, a);
        }
        return r;
      }
    }, {
      key: "serializeNode",
      value: function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = this.serializeNodeInner(e, t), r = e.marks.length - 1; r >= 0; r--) {
          var a = this.serializeMark(e.marks[r], e.isInline, t);
          a && ((a.contentDOM || a.dom).appendChild(n), n = a.dom);
        }
        return n;
      }
    }, {
      key: "serializeMark",
      value: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = this.marks[e.type.name];
        return r && Me(Ce(n), r(e, t), null, e.attrs);
      }
    }], [{
      key: "renderSpec",
      value: function (e, t) {
        return Me(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, arguments.length > 3 ? arguments[3] : void 0);
      }
    }, {
      key: "fromSchema",
      value: function (t) {
        return t.cached.domSerializer || (t.cached.domSerializer = new e(this.nodesFromSchema(t), this.marksFromSchema(t)));
      }
    }, {
      key: "nodesFromSchema",
      value: function (e) {
        var t = we(e.nodes);
        return t.text || (t.text = function (e) {
          return e.text;
        }), t;
      }
    }, {
      key: "marksFromSchema",
      value: function (e) {
        return we(e.marks);
      }
    }]), e;
  }();
  function we(e) {
    var t = {};
    for (var n in e) {
      var r = e[n].spec.toDOM;
      r && (t[n] = r);
    }
    return t;
  }
  function Ce(e) {
    return e.document || window.document;
  }
  var Oe = new WeakMap();
  function Me(e, t, n, r) {
    if ("string" == typeof t) return {
      dom: e.createTextNode(t)
    };
    if (null != t.nodeType) return {
      dom: t
    };
    if (t.dom && null != t.dom.nodeType) return t;
    var a,
      i = t[0];
    if ("string" != typeof i) throw new RangeError("Invalid array passed to renderSpec");
    if (r && (a = function (e) {
      var t = Oe.get(e);
      return void 0 === t && Oe.set(e, t = function (e) {
        var t = null;
        return function e(n) {
          if (n && "object" == p(n)) if (Array.isArray(n)) {
            if ("string" == typeof n[0]) t || (t = []), t.push(n);else for (var r = 0; r < n.length; r++) e(n[r]);
          } else for (var a in n) e(n[a]);
        }(e), t;
      }(e)), t;
    }(r)) && a.indexOf(t) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
    var o,
      s = i.indexOf(" ");
    s > 0 && (n = i.slice(0, s), i = i.slice(s + 1));
    var l = n ? e.createElementNS(n, i) : e.createElement(i),
      c = t[1],
      u = 1;
    if (c && "object" == p(c) && null == c.nodeType && !Array.isArray(c)) for (var d in u = 2, c) if (null != c[d]) {
      var f = d.indexOf(" ");
      f > 0 ? l.setAttributeNS(d.slice(0, f), d.slice(f + 1), c[d]) : "style" == d && l.style ? l.style.cssText = c[d] : l.setAttribute(d, c[d]);
    }
    for (var h = u; h < t.length; h++) {
      var _ = t[h];
      if (0 === _) {
        if (h < t.length - 1 || h > u) throw new RangeError("Content hole must be the only child of its parent node");
        return {
          dom: l,
          contentDOM: l
        };
      }
      var m = Me(e, _, n, r),
        A = m.dom,
        g = m.contentDOM;
      if (l.appendChild(A), g) {
        if (o) throw new RangeError("Multiple content holes");
        o = g;
      }
    }
    return {
      dom: l,
      contentDOM: o
    };
  }
  t.ContentMatch = Q, t.DOMParser = pe, t.DOMSerializer = be, t.Fragment = v, t.Mark = C, t.MarkType = ce, t.Node = V, t.NodeRange = W, t.NodeType = se, t.ReplaceError = O, t.ResolvedPos = U, t.Schema = ue, t.Slice = M;
});
