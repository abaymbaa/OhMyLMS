// Reconstructed Webpack factory 36553; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  function r(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return r = function (e) {
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
        return a(e, arguments, c(this).constructor);
      }
      return n.prototype = Object.create(e.prototype, {
        constructor: {
          value: n,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), o(n, e);
    }, r(e);
  }
  function a(e, t, n) {
    return a = l() ? Reflect.construct.bind() : function (e, t, n) {
      var r = [null];
      r.push.apply(r, t);
      var a = new (Function.bind.apply(e, r))();
      return n && o(a, n.prototype), a;
    }, a.apply(null, arguments);
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
    }), t && o(e, t);
  }
  function o(e, t) {
    return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, o(e, t);
  }
  function s(e) {
    var t = l();
    return function () {
      var n,
        r = c(e);
      if (t) {
        var a = c(this).constructor;
        n = Reflect.construct(r, arguments, a);
      } else n = r.apply(this, arguments);
      return function (e, t) {
        if (t && ("object" === u(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }(e);
      }(this, n);
    };
  }
  function l() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }
  function c(e) {
    return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, c(e);
  }
  function u(e) {
    return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, u(e);
  }
  function d(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function p(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, h(r.key), r);
    }
  }
  function f(e, t, n) {
    return t && p(e.prototype, t), n && p(e, n), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function h(e) {
    var t = function (e) {
      if ("object" !== u(e) || null === e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" !== u(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" === u(t) ? t : String(t);
  }
  var _ = n(77712),
    m = Math.pow(2, 16);
  function A(e, t) {
    return e + t * m;
  }
  function g(e) {
    return 65535 & e;
  }
  var y = function () {
      function e(t, n, r) {
        d(this, e), this.pos = t, this.delInfo = n, this.recover = r;
      }
      return f(e, [{
        key: "deleted",
        get: function () {
          return (8 & this.delInfo) > 0;
        }
      }, {
        key: "deletedBefore",
        get: function () {
          return (5 & this.delInfo) > 0;
        }
      }, {
        key: "deletedAfter",
        get: function () {
          return (6 & this.delInfo) > 0;
        }
      }, {
        key: "deletedAcross",
        get: function () {
          return (4 & this.delInfo) > 0;
        }
      }]), e;
    }(),
    v = function () {
      function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (d(this, e), this.ranges = t, this.inverted = n, !t.length && e.empty) return e.empty;
      }
      return f(e, [{
        key: "recover",
        value: function (e) {
          var t = 0,
            n = g(e);
          if (!this.inverted) for (var r = 0; r < n; r++) t += this.ranges[3 * r + 2] - this.ranges[3 * r + 1];
          return this.ranges[3 * n] + t + function (e) {
            return (e - (65535 & e)) / m;
          }(e);
        }
      }, {
        key: "mapResult",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return this._map(e, t, !1);
        }
      }, {
        key: "map",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return this._map(e, t, !0);
        }
      }, {
        key: "_map",
        value: function (e, t, n) {
          for (var r = 0, a = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2, o = 0; o < this.ranges.length; o += 3) {
            var s = this.ranges[o] - (this.inverted ? r : 0);
            if (s > e) break;
            var l = this.ranges[o + a],
              c = this.ranges[o + i],
              u = s + l;
            if (e <= u) {
              var d = s + r + ((l ? e == s ? -1 : e == u ? 1 : t : t) < 0 ? 0 : c);
              if (n) return d;
              var p = e == (t < 0 ? s : u) ? null : A(o / 3, e - s),
                f = e == s ? 2 : e == u ? 1 : 4;
              return (t < 0 ? e != s : e != u) && (f |= 8), new y(d, f, p);
            }
            r += c - l;
          }
          return n ? e + r : new y(e + r, 0, null);
        }
      }, {
        key: "touches",
        value: function (e, t) {
          for (var n = 0, r = g(t), a = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2, o = 0; o < this.ranges.length; o += 3) {
            var s = this.ranges[o] - (this.inverted ? n : 0);
            if (s > e) break;
            var l = this.ranges[o + a];
            if (e <= s + l && o == 3 * r) return !0;
            n += this.ranges[o + i] - l;
          }
          return !1;
        }
      }, {
        key: "forEach",
        value: function (e) {
          for (var t = this.inverted ? 2 : 1, n = this.inverted ? 1 : 2, r = 0, a = 0; r < this.ranges.length; r += 3) {
            var i = this.ranges[r],
              o = i - (this.inverted ? a : 0),
              s = i + (this.inverted ? 0 : a),
              l = this.ranges[r + t],
              c = this.ranges[r + n];
            e(o, o + l, s, s + c), a += c - l;
          }
        }
      }, {
        key: "invert",
        value: function () {
          return new e(this.ranges, !this.inverted);
        }
      }, {
        key: "toString",
        value: function () {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
      }], [{
        key: "offset",
        value: function (t) {
          return 0 == t ? e.empty : new e(t < 0 ? [0, -t, 0] : [0, 0, t]);
        }
      }]), e;
    }();
  v.empty = new v([]);
  var E = function () {
      function e(t, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t ? t.length : 0;
        d(this, e), this.mirror = n, this.from = r, this.to = a, this._maps = t || [], this.ownData = !(t || n);
      }
      return f(e, [{
        key: "maps",
        get: function () {
          return this._maps;
        }
      }, {
        key: "slice",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.maps.length;
          return new e(this._maps, this.mirror, t, n);
        }
      }, {
        key: "appendMap",
        value: function (e, t) {
          this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), null != t && this.setMirror(this._maps.length - 1, t);
        }
      }, {
        key: "appendMapping",
        value: function (e) {
          for (var t = 0, n = this._maps.length; t < e._maps.length; t++) {
            var r = e.getMirror(t);
            this.appendMap(e._maps[t], null != r && r < t ? n + r : void 0);
          }
        }
      }, {
        key: "getMirror",
        value: function (e) {
          if (this.mirror) for (var t = 0; t < this.mirror.length; t++) if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)];
        }
      }, {
        key: "setMirror",
        value: function (e, t) {
          this.mirror || (this.mirror = []), this.mirror.push(e, t);
        }
      }, {
        key: "appendMappingInverted",
        value: function (e) {
          for (var t = e.maps.length - 1, n = this._maps.length + e._maps.length; t >= 0; t--) {
            var r = e.getMirror(t);
            this.appendMap(e._maps[t].invert(), null != r && r > t ? n - r - 1 : void 0);
          }
        }
      }, {
        key: "invert",
        value: function () {
          var t = new e();
          return t.appendMappingInverted(this), t;
        }
      }, {
        key: "map",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          if (this.mirror) return this._map(e, t, !0);
          for (var n = this.from; n < this.to; n++) e = this._maps[n].map(e, t);
          return e;
        }
      }, {
        key: "mapResult",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return this._map(e, t, !1);
        }
      }, {
        key: "_map",
        value: function (e, t, n) {
          for (var r = 0, a = this.from; a < this.to; a++) {
            var i = this._maps[a].mapResult(e, t);
            if (null != i.recover) {
              var o = this.getMirror(a);
              if (null != o && o > a && o < this.to) {
                a = o, e = this._maps[o].recover(i.recover);
                continue;
              }
            }
            r |= i.delInfo, e = i.pos;
          }
          return n ? e : new y(e, r, null);
        }
      }]), e;
    }(),
    b = Object.create(null),
    w = function () {
      function e() {
        d(this, e);
      }
      return f(e, [{
        key: "getMap",
        value: function () {
          return v.empty;
        }
      }, {
        key: "merge",
        value: function (e) {
          return null;
        }
      }], [{
        key: "fromJSON",
        value: function (e, t) {
          if (!t || !t.stepType) throw new RangeError("Invalid input for Step.fromJSON");
          var n = b[t.stepType];
          if (!n) throw new RangeError("No step type ".concat(t.stepType, " defined"));
          return n.fromJSON(e, t);
        }
      }, {
        key: "jsonID",
        value: function (e, t) {
          if (e in b) throw new RangeError("Duplicate use of step JSON ID " + e);
          return b[e] = t, t.prototype.jsonID = e, t;
        }
      }]), e;
    }(),
    C = function () {
      function e(t, n) {
        d(this, e), this.doc = t, this.failed = n;
      }
      return f(e, null, [{
        key: "ok",
        value: function (t) {
          return new e(t, null);
        }
      }, {
        key: "fail",
        value: function (t) {
          return new e(null, t);
        }
      }, {
        key: "fromReplace",
        value: function (t, n, r, a) {
          try {
            return e.ok(t.replace(n, r, a));
          } catch (t) {
            if (t instanceof _.ReplaceError) return e.fail(t.message);
            throw t;
          }
        }
      }]), e;
    }();
  function O(e, t, n) {
    for (var r = [], a = 0; a < e.childCount; a++) {
      var i = e.child(a);
      i.content.size && (i = i.copy(O(i.content, t, i))), i.isInline && (i = t(i, n, a)), r.push(i);
    }
    return _.Fragment.fromArray(r);
  }
  var M = function (e) {
    i(n, e);
    var t = s(n);
    function n(e, r, a) {
      var i;
      return d(this, n), (i = t.call(this)).from = e, i.to = r, i.mark = a, i;
    }
    return f(n, [{
      key: "apply",
      value: function (e) {
        var t = this,
          n = e.slice(this.from, this.to),
          r = e.resolve(this.from),
          a = r.node(r.sharedDepth(this.to)),
          i = new _.Slice(O(n.content, function (e, n) {
            return e.isAtom && n.type.allowsMarkType(t.mark.type) ? e.mark(t.mark.addToSet(e.marks)) : e;
          }, a), n.openStart, n.openEnd);
        return C.fromReplace(e, this.from, this.to, i);
      }
    }, {
      key: "invert",
      value: function () {
        return new S(this.from, this.to, this.mark);
      }
    }, {
      key: "map",
      value: function (e) {
        var t = e.mapResult(this.from, 1),
          r = e.mapResult(this.to, -1);
        return t.deleted && r.deleted || t.pos >= r.pos ? null : new n(t.pos, r.pos, this.mark);
      }
    }, {
      key: "merge",
      value: function (e) {
        return e instanceof n && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new n(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
      }
    }, {
      key: "toJSON",
      value: function () {
        return {
          stepType: "addMark",
          mark: this.mark.toJSON(),
          from: this.from,
          to: this.to
        };
      }
    }], [{
      key: "fromJSON",
      value: function (e, t) {
        if ("number" != typeof t.from || "number" != typeof t.to) throw new RangeError("Invalid input for AddMarkStep.fromJSON");
        return new n(t.from, t.to, e.markFromJSON(t.mark));
      }
    }]), n;
  }(w);
  w.jsonID("addMark", M);
  var S = function (e) {
    i(n, e);
    var t = s(n);
    function n(e, r, a) {
      var i;
      return d(this, n), (i = t.call(this)).from = e, i.to = r, i.mark = a, i;
    }
    return f(n, [{
      key: "apply",
      value: function (e) {
        var t = this,
          n = e.slice(this.from, this.to),
          r = new _.Slice(O(n.content, function (e) {
            return e.mark(t.mark.removeFromSet(e.marks));
          }, e), n.openStart, n.openEnd);
        return C.fromReplace(e, this.from, this.to, r);
      }
    }, {
      key: "invert",
      value: function () {
        return new M(this.from, this.to, this.mark);
      }
    }, {
      key: "map",
      value: function (e) {
        var t = e.mapResult(this.from, 1),
          r = e.mapResult(this.to, -1);
        return t.deleted && r.deleted || t.pos >= r.pos ? null : new n(t.pos, r.pos, this.mark);
      }
    }, {
      key: "merge",
      value: function (e) {
        return e instanceof n && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new n(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
      }
    }, {
      key: "toJSON",
      value: function () {
        return {
          stepType: "removeMark",
          mark: this.mark.toJSON(),
          from: this.from,
          to: this.to
        };
      }
    }], [{
      key: "fromJSON",
      value: function (e, t) {
        if ("number" != typeof t.from || "number" != typeof t.to) throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
        return new n(t.from, t.to, e.markFromJSON(t.mark));
      }
    }]), n;
  }(w);
  w.jsonID("removeMark", S);
  var T = function (e) {
    i(n, e);
    var t = s(n);
    function n(e, r) {
      var a;
      return d(this, n), (a = t.call(this)).pos = e, a.mark = r, a;
    }
    return f(n, [{
      key: "apply",
      value: function (e) {
        var t = e.nodeAt(this.pos);
        if (!t) return C.fail("No node at mark step's position");
        var n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
        return C.fromReplace(e, this.pos, this.pos + 1, new _.Slice(_.Fragment.from(n), 0, t.isLeaf ? 0 : 1));
      }
    }, {
      key: "invert",
      value: function (e) {
        var t = e.nodeAt(this.pos);
        if (t) {
          var r = this.mark.addToSet(t.marks);
          if (r.length == t.marks.length) {
            for (var a = 0; a < t.marks.length; a++) if (!t.marks[a].isInSet(r)) return new n(this.pos, t.marks[a]);
            return new n(this.pos, this.mark);
          }
        }
        return new k(this.pos, this.mark);
      }
    }, {
      key: "map",
      value: function (e) {
        var t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new n(t.pos, this.mark);
      }
    }, {
      key: "toJSON",
      value: function () {
        return {
          stepType: "addNodeMark",
          pos: this.pos,
          mark: this.mark.toJSON()
        };
      }
    }], [{
      key: "fromJSON",
      value: function (e, t) {
        if ("number" != typeof t.pos) throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
        return new n(t.pos, e.markFromJSON(t.mark));
      }
    }]), n;
  }(w);
  w.jsonID("addNodeMark", T);
  var k = function (e) {
    i(n, e);
    var t = s(n);
    function n(e, r) {
      var a;
      return d(this, n), (a = t.call(this)).pos = e, a.mark = r, a;
    }
    return f(n, [{
      key: "apply",
      value: function (e) {
        var t = e.nodeAt(this.pos);
        if (!t) return C.fail("No node at mark step's position");
        var n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
        return C.fromReplace(e, this.pos, this.pos + 1, new _.Slice(_.Fragment.from(n), 0, t.isLeaf ? 0 : 1));
      }
    }, {
      key: "invert",
      value: function (e) {
        var t = e.nodeAt(this.pos);
        return t && this.mark.isInSet(t.marks) ? new T(this.pos, this.mark) : this;
      }
    }, {
      key: "map",
      value: function (e) {
        var t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new n(t.pos, this.mark);
      }
    }, {
      key: "toJSON",
      value: function () {
        return {
          stepType: "removeNodeMark",
          pos: this.pos,
          mark: this.mark.toJSON()
        };
      }
    }], [{
      key: "fromJSON",
      value: function (e, t) {
        if ("number" != typeof t.pos) throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
        return new n(t.pos, e.markFromJSON(t.mark));
      }
    }]), n;
  }(w);
  w.jsonID("removeNodeMark", k);
  var x = function (e) {
    i(n, e);
    var t = s(n);
    function n(e, r, a) {
      var i,
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      return d(this, n), (i = t.call(this)).from = e, i.to = r, i.slice = a, i.structure = o, i;
    }
    return f(n, [{
      key: "apply",
      value: function (e) {
        return this.structure && I(e, this.from, this.to) ? C.fail("Structure replace would overwrite content") : C.fromReplace(e, this.from, this.to, this.slice);
      }
    }, {
      key: "getMap",
      value: function () {
        return new v([this.from, this.to - this.from, this.slice.size]);
      }
    }, {
      key: "invert",
      value: function (e) {
        return new n(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
      }
    }, {
      key: "map",
      value: function (e) {
        var t = e.mapResult(this.from, 1),
          r = e.mapResult(this.to, -1);
        return t.deletedAcross && r.deletedAcross ? null : new n(t.pos, Math.max(t.pos, r.pos), this.slice, this.structure);
      }
    }, {
      key: "merge",
      value: function (e) {
        if (!(e instanceof n) || e.structure || this.structure) return null;
        if (this.from + this.slice.size != e.from || this.slice.openEnd || e.slice.openStart) {
          if (e.to != this.from || this.slice.openStart || e.slice.openEnd) return null;
          var t = this.slice.size + e.slice.size == 0 ? _.Slice.empty : new _.Slice(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
          return new n(e.from, this.to, t, this.structure);
        }
        var r = this.slice.size + e.slice.size == 0 ? _.Slice.empty : new _.Slice(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
        return new n(this.from, this.to + (e.to - e.from), r, this.structure);
      }
    }, {
      key: "toJSON",
      value: function () {
        var e = {
          stepType: "replace",
          from: this.from,
          to: this.to
        };
        return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
      }
    }], [{
      key: "fromJSON",
      value: function (e, t) {
        if ("number" != typeof t.from || "number" != typeof t.to) throw new RangeError("Invalid input for ReplaceStep.fromJSON");
        return new n(t.from, t.to, _.Slice.fromJSON(e, t.slice), !!t.structure);
      }
    }]), n;
  }(w);
  w.jsonID("replace", x);
  var D = function (e) {
    i(n, e);
    var t = s(n);
    function n(e, r, a, i, o, s) {
      var l,
        c = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return d(this, n), (l = t.call(this)).from = e, l.to = r, l.gapFrom = a, l.gapTo = i, l.slice = o, l.insert = s, l.structure = c, l;
    }
    return f(n, [{
      key: "apply",
      value: function (e) {
        if (this.structure && (I(e, this.from, this.gapFrom) || I(e, this.gapTo, this.to))) return C.fail("Structure gap-replace would overwrite content");
        var t = e.slice(this.gapFrom, this.gapTo);
        if (t.openStart || t.openEnd) return C.fail("Gap is not a flat range");
        var n = this.slice.insertAt(this.insert, t.content);
        return n ? C.fromReplace(e, this.from, this.to, n) : C.fail("Content does not fit in gap");
      }
    }, {
      key: "getMap",
      value: function () {
        return new v([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]);
      }
    }, {
      key: "invert",
      value: function (e) {
        var t = this.gapTo - this.gapFrom;
        return new n(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
      }
    }, {
      key: "map",
      value: function (e) {
        var t = e.mapResult(this.from, 1),
          r = e.mapResult(this.to, -1),
          a = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1),
          i = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
        return t.deletedAcross && r.deletedAcross || a < t.pos || i > r.pos ? null : new n(t.pos, r.pos, a, i, this.slice, this.insert, this.structure);
      }
    }, {
      key: "toJSON",
      value: function () {
        var e = {
          stepType: "replaceAround",
          from: this.from,
          to: this.to,
          gapFrom: this.gapFrom,
          gapTo: this.gapTo,
          insert: this.insert
        };
        return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
      }
    }], [{
      key: "fromJSON",
      value: function (e, t) {
        if ("number" != typeof t.from || "number" != typeof t.to || "number" != typeof t.gapFrom || "number" != typeof t.gapTo || "number" != typeof t.insert) throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
        return new n(t.from, t.to, t.gapFrom, t.gapTo, _.Slice.fromJSON(e, t.slice), t.insert, !!t.structure);
      }
    }]), n;
  }(w);
  function I(e, t, n) {
    for (var r = e.resolve(t), a = n - t, i = r.depth; a > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount;) i--, a--;
    if (a > 0) for (var o = r.node(i).maybeChild(r.indexAfter(i)); a > 0;) {
      if (!o || o.isLeaf) return !0;
      o = o.firstChild, a--;
    }
    return !1;
  }
  function P(e, t, n) {
    for (var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n.contentMatch, a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], i = e.doc.nodeAt(t), o = [], s = t + 1, l = 0; l < i.childCount; l++) {
      var c = i.child(l),
        u = s + c.nodeSize,
        d = r.matchType(c.type);
      if (d) {
        r = d;
        for (var p = 0; p < c.marks.length; p++) n.allowsMarkType(c.marks[p].type) || e.step(new S(s, u, c.marks[p]));
        if (a && c.isText && "pre" != n.whitespace) for (var f = void 0, h = /\r?\n|\r/g, m = void 0; f = h.exec(c.text);) m || (m = new _.Slice(_.Fragment.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), o.push(new x(s + f.index, s + f.index + f[0].length, m));
      } else o.push(new x(s, u, _.Slice.empty));
      s = u;
    }
    if (!r.validEnd) {
      var A = r.fillBefore(_.Fragment.empty, !0);
      e.replace(s, s, new _.Slice(A, 0, 0));
    }
    for (var g = o.length - 1; g >= 0; g--) e.step(o[g]);
  }
  function L(e, t, n) {
    return (0 == t || e.canReplace(t, e.childCount)) && (n == e.childCount || e.canReplace(0, n));
  }
  function R(e) {
    return {
      type: e,
      attrs: null
    };
  }
  function B(e, t, n, r) {
    t.forEach(function (a, i) {
      if (a.isText) for (var o, s = /\r?\n|\r/g; o = s.exec(a.text);) {
        var l = e.mapping.slice(r).map(n + 1 + i + o.index);
        e.replaceWith(l, l + 1, t.type.schema.linebreakReplacement.create());
      }
    });
  }
  function N(e, t, n, r) {
    t.forEach(function (a, i) {
      if (a.type == a.type.schema.linebreakReplacement) {
        var o = e.mapping.slice(r).map(n + 1 + i);
        e.replaceWith(o, o + 1, t.type.schema.text("\n"));
      }
    });
  }
  function U(e, t) {
    return !(!e || !t || e.isLeaf || !function (e, t) {
      t.content.size || e.type.compatibleContent(t.type);
      for (var n = e.contentMatchAt(e.childCount), r = e.type.schema.linebreakReplacement, a = 0; a < t.childCount; a++) {
        var i = t.child(a),
          o = i.type == r ? e.type.schema.nodes.text : i.type;
        if (!(n = n.matchType(o))) return !1;
        if (!e.type.allowsMarks(i.marks)) return !1;
      }
      return n.validEnd;
    }(e, t));
  }
  function F(e, t, n) {
    var r = e.resolve(t);
    if (r.parent.canReplaceWith(r.index(), r.index(), n)) return t;
    if (0 == r.parentOffset) for (var a = r.depth - 1; a >= 0; a--) {
      var i = r.index(a);
      if (r.node(a).canReplaceWith(i, i, n)) return r.before(a + 1);
      if (i > 0) return null;
    }
    if (r.parentOffset == r.parent.content.size) for (var o = r.depth - 1; o >= 0; o--) {
      var s = r.indexAfter(o);
      if (r.node(o).canReplaceWith(s, s, n)) return r.after(o + 1);
      if (s < r.node(o).childCount) return null;
    }
    return null;
  }
  function j(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.Slice.empty;
    if (t == n && !r.size) return null;
    var a = e.resolve(t),
      i = e.resolve(n);
    return H(a, i, r) ? new x(t, n, r) : new W(a, i, r).fit();
  }
  function H(e, t, n) {
    return !n.openStart && !n.openEnd && e.start() == t.start() && e.parent.canReplace(e.index(), t.index(), n.content);
  }
  w.jsonID("replaceAround", D);
  var W = function () {
    function e(t, n, r) {
      d(this, e), this.$from = t, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = _.Fragment.empty;
      for (var a = 0; a <= t.depth; a++) {
        var i = t.node(a);
        this.frontier.push({
          type: i.type,
          match: i.contentMatchAt(t.indexAfter(a))
        });
      }
      for (var o = t.depth; o > 0; o--) this.placed = _.Fragment.from(t.node(o).copy(this.placed));
    }
    return f(e, [{
      key: "depth",
      get: function () {
        return this.frontier.length - 1;
      }
    }, {
      key: "fit",
      value: function () {
        for (; this.unplaced.size;) {
          var e = this.findFittable();
          e ? this.placeNodes(e) : this.openMore() || this.dropNode();
        }
        var t = this.mustMoveInline(),
          n = this.placed.size - this.depth - this.$from.depth,
          r = this.$from,
          a = this.close(t < 0 ? this.$to : r.doc.resolve(t));
        if (!a) return null;
        for (var i = this.placed, o = r.depth, s = a.depth; o && s && 1 == i.childCount;) i = i.firstChild.content, o--, s--;
        var l = new _.Slice(i, o, s);
        return t > -1 ? new D(r.pos, t, this.$to.pos, this.$to.end(), l, n) : l.size || r.pos != this.$to.pos ? new x(r.pos, a.pos, l) : null;
      }
    }, {
      key: "findFittable",
      value: function () {
        for (var e = this.unplaced.openStart, t = this.unplaced.content, n = 0, r = this.unplaced.openEnd; n < e; n++) {
          var a = t.firstChild;
          if (t.childCount > 1 && (r = 0), a.type.spec.isolating && r <= n) {
            e = n;
            break;
          }
          t = a.content;
        }
        for (var i = 1; i <= 2; i++) for (var o = 1 == i ? e : this.unplaced.openStart; o >= 0; o--) for (var s = null, l = (o ? (s = z(this.unplaced.content, o - 1).firstChild).content : this.unplaced.content).firstChild, c = this.depth; c >= 0; c--) {
          var u = this.frontier[c],
            d = u.type,
            p = u.match,
            f = void 0,
            h = null;
          if (1 == i && (l ? p.matchType(l.type) || (h = p.fillBefore(_.Fragment.from(l), !1)) : s && d.compatibleContent(s.type))) return {
            sliceDepth: o,
            frontierDepth: c,
            parent: s,
            inject: h
          };
          if (2 == i && l && (f = p.findWrapping(l.type))) return {
            sliceDepth: o,
            frontierDepth: c,
            parent: s,
            wrap: f
          };
          if (s && p.matchType(s.type)) break;
        }
      }
    }, {
      key: "openMore",
      value: function () {
        var e = this.unplaced,
          t = e.content,
          n = e.openStart,
          r = e.openEnd,
          a = z(t, n);
        return !(!a.childCount || a.firstChild.isLeaf || (this.unplaced = new _.Slice(t, n + 1, Math.max(r, a.size + n >= t.size - r ? n + 1 : 0)), 0));
      }
    }, {
      key: "dropNode",
      value: function () {
        var e = this.unplaced,
          t = e.content,
          n = e.openStart,
          r = e.openEnd,
          a = z(t, n);
        if (a.childCount <= 1 && n > 0) {
          var i = t.size - n <= n + a.size;
          this.unplaced = new _.Slice(K(t, n - 1, 1), n - 1, i ? n - 1 : r);
        } else this.unplaced = new _.Slice(K(t, n, 1), n, r);
      }
    }, {
      key: "placeNodes",
      value: function (e) {
        for (var t = e.sliceDepth, n = e.frontierDepth, r = e.parent, a = e.inject, i = e.wrap; this.depth > n;) this.closeFrontierNode();
        if (i) for (var o = 0; o < i.length; o++) this.openFrontierNode(i[o]);
        var s = this.unplaced,
          l = r ? r.content : s.content,
          c = s.openStart - t,
          u = 0,
          d = [],
          p = this.frontier[n],
          f = p.match,
          h = p.type;
        if (a) {
          for (var m = 0; m < a.childCount; m++) d.push(a.child(m));
          f = f.matchFragment(a);
        }
        for (var A = l.size + t - (s.content.size - s.openEnd); u < l.childCount;) {
          var g = l.child(u),
            y = f.matchType(g.type);
          if (!y) break;
          (++u > 1 || 0 == c || g.content.size) && (f = y, d.push(Y(g.mark(h.allowedMarks(g.marks)), 1 == u ? c : 0, u == l.childCount ? A : -1)));
        }
        var v = u == l.childCount;
        v || (A = -1), this.placed = V(this.placed, n, _.Fragment.from(d)), this.frontier[n].match = f, v && A < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
        for (var E = 0, b = l; E < A; E++) {
          var w = b.lastChild;
          this.frontier.push({
            type: w.type,
            match: w.contentMatchAt(w.childCount)
          }), b = w.content;
        }
        this.unplaced = v ? 0 == t ? _.Slice.empty : new _.Slice(K(s.content, t - 1, 1), t - 1, A < 0 ? s.openEnd : t - 1) : new _.Slice(K(s.content, t, u), s.openStart, s.openEnd);
      }
    }, {
      key: "mustMoveInline",
      value: function () {
        if (!this.$to.parent.isTextblock) return -1;
        var e,
          t = this.frontier[this.depth];
        if (!t.type.isTextblock || !Q(this.$to, this.$to.depth, t.type, t.match, !1) || this.$to.depth == this.depth && (e = this.findCloseLevel(this.$to)) && e.depth == this.depth) return -1;
        for (var n = this.$to.depth, r = this.$to.after(n); n > 1 && r == this.$to.end(--n);) ++r;
        return r;
      }
    }, {
      key: "findCloseLevel",
      value: function (e) {
        e: for (var t = Math.min(this.depth, e.depth); t >= 0; t--) {
          var n = this.frontier[t],
            r = n.match,
            a = n.type,
            i = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)),
            o = Q(e, t, a, r, i);
          if (o) {
            for (var s = t - 1; s >= 0; s--) {
              var l = this.frontier[s],
                c = l.match,
                u = Q(e, s, l.type, c, !0);
              if (!u || u.childCount) continue e;
            }
            return {
              depth: t,
              fit: o,
              move: i ? e.doc.resolve(e.after(t + 1)) : e
            };
          }
        }
      }
    }, {
      key: "close",
      value: function (e) {
        var t = this.findCloseLevel(e);
        if (!t) return null;
        for (; this.depth > t.depth;) this.closeFrontierNode();
        t.fit.childCount && (this.placed = V(this.placed, t.depth, t.fit)), e = t.move;
        for (var n = t.depth + 1; n <= e.depth; n++) {
          var r = e.node(n),
            a = r.type.contentMatch.fillBefore(r.content, !0, e.index(n));
          this.openFrontierNode(r.type, r.attrs, a);
        }
        return e;
      }
    }, {
      key: "openFrontierNode",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = this.frontier[this.depth];
        r.match = r.match.matchType(e), this.placed = V(this.placed, this.depth, _.Fragment.from(e.create(t, n))), this.frontier.push({
          type: e,
          match: e.contentMatch
        });
      }
    }, {
      key: "closeFrontierNode",
      value: function () {
        var e = this.frontier.pop().match.fillBefore(_.Fragment.empty, !0);
        e.childCount && (this.placed = V(this.placed, this.frontier.length, e));
      }
    }]), e;
  }();
  function K(e, t, n) {
    return 0 == t ? e.cutByIndex(n, e.childCount) : e.replaceChild(0, e.firstChild.copy(K(e.firstChild.content, t - 1, n)));
  }
  function V(e, t, n) {
    return 0 == t ? e.append(n) : e.replaceChild(e.childCount - 1, e.lastChild.copy(V(e.lastChild.content, t - 1, n)));
  }
  function z(e, t) {
    for (var n = 0; n < t; n++) e = e.firstChild.content;
    return e;
  }
  function Y(e, t, n) {
    if (t <= 0) return e;
    var r = e.content;
    return t > 1 && (r = r.replaceChild(0, Y(r.firstChild, t - 1, 1 == r.childCount ? n - 1 : 0))), t > 0 && (r = e.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(e.type.contentMatch.matchFragment(r).fillBefore(_.Fragment.empty, !0)))), e.copy(r);
  }
  function Q(e, t, n, r, a) {
    var i = e.node(t),
      o = a ? e.indexAfter(t) : e.index(t);
    if (o == i.childCount && !n.compatibleContent(i.type)) return null;
    var s = r.fillBefore(i.content, !0, o);
    return s && !function (e, t, n) {
      for (var r = n; r < t.childCount; r++) if (!e.allowsMarks(t.child(r).marks)) return !0;
      return !1;
    }(n, i.content, o) ? s : null;
  }
  function G(e) {
    return e.spec.defining || e.spec.definingForContent;
  }
  function $(e, t, n, r, a) {
    if (t < n) {
      var i = e.firstChild;
      e = e.replaceChild(0, i.copy($(i.content, t + 1, n, r, i)));
    }
    if (t > r) {
      var o = a.contentMatchAt(0),
        s = o.fillBefore(e).append(e);
      e = s.append(o.matchFragment(s).fillBefore(_.Fragment.empty, !0));
    }
    return e;
  }
  function q(e, t) {
    for (var n = [], r = Math.min(e.depth, t.depth); r >= 0; r--) {
      var a = e.start(r);
      if (a < e.pos - (e.depth - r) || t.end(r) > t.pos + (t.depth - r) || e.node(r).type.spec.isolating || t.node(r).type.spec.isolating) break;
      (a == t.start(r) || r == e.depth && r == t.depth && e.parent.inlineContent && t.parent.inlineContent && r && t.start(r - 1) == a - 1) && n.push(r);
    }
    return n;
  }
  var Z = function (e) {
    i(n, e);
    var t = s(n);
    function n(e, r, a) {
      var i;
      return d(this, n), (i = t.call(this)).pos = e, i.attr = r, i.value = a, i;
    }
    return f(n, [{
      key: "apply",
      value: function (e) {
        var t = e.nodeAt(this.pos);
        if (!t) return C.fail("No node at attribute step's position");
        var n = Object.create(null);
        for (var r in t.attrs) n[r] = t.attrs[r];
        n[this.attr] = this.value;
        var a = t.type.create(n, null, t.marks);
        return C.fromReplace(e, this.pos, this.pos + 1, new _.Slice(_.Fragment.from(a), 0, t.isLeaf ? 0 : 1));
      }
    }, {
      key: "getMap",
      value: function () {
        return v.empty;
      }
    }, {
      key: "invert",
      value: function (e) {
        return new n(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
      }
    }, {
      key: "map",
      value: function (e) {
        var t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new n(t.pos, this.attr, this.value);
      }
    }, {
      key: "toJSON",
      value: function () {
        return {
          stepType: "attr",
          pos: this.pos,
          attr: this.attr,
          value: this.value
        };
      }
    }], [{
      key: "fromJSON",
      value: function (e, t) {
        if ("number" != typeof t.pos || "string" != typeof t.attr) throw new RangeError("Invalid input for AttrStep.fromJSON");
        return new n(t.pos, t.attr, t.value);
      }
    }]), n;
  }(w);
  w.jsonID("attr", Z);
  var X = function (e) {
    i(n, e);
    var t = s(n);
    function n(e, r) {
      var a;
      return d(this, n), (a = t.call(this)).attr = e, a.value = r, a;
    }
    return f(n, [{
      key: "apply",
      value: function (e) {
        var t = Object.create(null);
        for (var n in e.attrs) t[n] = e.attrs[n];
        t[this.attr] = this.value;
        var r = e.type.create(t, e.content, e.marks);
        return C.ok(r);
      }
    }, {
      key: "getMap",
      value: function () {
        return v.empty;
      }
    }, {
      key: "invert",
      value: function (e) {
        return new n(this.attr, e.attrs[this.attr]);
      }
    }, {
      key: "map",
      value: function (e) {
        return this;
      }
    }, {
      key: "toJSON",
      value: function () {
        return {
          stepType: "docAttr",
          attr: this.attr,
          value: this.value
        };
      }
    }], [{
      key: "fromJSON",
      value: function (e, t) {
        if ("string" != typeof t.attr) throw new RangeError("Invalid input for DocAttrStep.fromJSON");
        return new n(t.attr, t.value);
      }
    }]), n;
  }(w);
  w.jsonID("docAttr", X), t.TransformError = function (e) {
    i(n, e);
    var t = s(n);
    function n() {
      return d(this, n), t.apply(this, arguments);
    }
    return f(n);
  }(r(Error)), t.TransformError = function e(t) {
    var n = Error.call(this, t);
    return n.__proto__ = e.prototype, n;
  }, t.TransformError.prototype = Object.create(Error.prototype), t.TransformError.prototype.constructor = t.TransformError, t.TransformError.prototype.name = "TransformError";
  var J = function () {
    function e(t) {
      d(this, e), this.doc = t, this.steps = [], this.docs = [], this.mapping = new E();
    }
    return f(e, [{
      key: "before",
      get: function () {
        return this.docs.length ? this.docs[0] : this.doc;
      }
    }, {
      key: "step",
      value: function (e) {
        var n = this.maybeStep(e);
        if (n.failed) throw new t.TransformError(n.failed);
        return this;
      }
    }, {
      key: "maybeStep",
      value: function (e) {
        var t = e.apply(this.doc);
        return t.failed || this.addStep(e, t.doc), t;
      }
    }, {
      key: "docChanged",
      get: function () {
        return this.steps.length > 0;
      }
    }, {
      key: "addStep",
      value: function (e, t) {
        this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
      }
    }, {
      key: "replace",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.Slice.empty,
          r = j(this.doc, e, t, n);
        return r && this.step(r), this;
      }
    }, {
      key: "replaceWith",
      value: function (e, t, n) {
        return this.replace(e, t, new _.Slice(_.Fragment.from(n), 0, 0));
      }
    }, {
      key: "delete",
      value: function (e, t) {
        return this.replace(e, t, _.Slice.empty);
      }
    }, {
      key: "insert",
      value: function (e, t) {
        return this.replaceWith(e, e, t);
      }
    }, {
      key: "replaceRange",
      value: function (e, t, n) {
        return function (e, t, n, r) {
          if (!r.size) return e.deleteRange(t, n);
          var a = e.doc.resolve(t),
            i = e.doc.resolve(n);
          if (H(a, i, r)) return e.step(new x(t, n, r));
          var o = q(a, e.doc.resolve(n));
          0 == o[o.length - 1] && o.pop();
          var s = -(a.depth + 1);
          o.unshift(s);
          for (var l = a.depth, c = a.pos - 1; l > 0; l--, c--) {
            var u = a.node(l).type.spec;
            if (u.defining || u.definingAsContext || u.isolating) break;
            o.indexOf(l) > -1 ? s = l : a.before(l) == c && o.splice(1, 0, -l);
          }
          for (var d = o.indexOf(s), p = [], f = r.openStart, h = r.content, m = 0;; m++) {
            var A = h.firstChild;
            if (p.push(A), m == r.openStart) break;
            h = A.content;
          }
          for (var g = f - 1; g >= 0; g--) {
            var y = p[g],
              v = G(y.type);
            if (v && !y.sameMarkup(a.node(Math.abs(s) - 1))) f = g;else if (v || !y.type.isTextblock) break;
          }
          for (var E = r.openStart; E >= 0; E--) {
            var b = (E + f + 1) % (r.openStart + 1),
              w = p[b];
            if (w) for (var C = 0; C < o.length; C++) {
              var O = o[(C + d) % o.length],
                M = !0;
              O < 0 && (M = !1, O = -O);
              var S = a.node(O - 1),
                T = a.index(O - 1);
              if (S.canReplaceWith(T, T, w.type, w.marks)) return e.replace(a.before(O), M ? i.after(O) : n, new _.Slice($(r.content, 0, r.openStart, b), b, r.openEnd));
            }
          }
          for (var k = e.steps.length, D = o.length - 1; D >= 0 && (e.replace(t, n, r), !(e.steps.length > k)); D--) {
            var I = o[D];
            I < 0 || (t = a.before(I), n = i.after(I));
          }
        }(this, e, t, n), this;
      }
    }, {
      key: "replaceRangeWith",
      value: function (e, t, n) {
        return function (e, t, n, r) {
          if (!r.isInline && t == n && e.doc.resolve(t).parent.content.size) {
            var a = F(e.doc, t, r.type);
            null != a && (t = n = a);
          }
          e.replaceRange(t, n, new _.Slice(_.Fragment.from(r), 0, 0));
        }(this, e, t, n), this;
      }
    }, {
      key: "deleteRange",
      value: function (e, t) {
        return function (e, t, n) {
          for (var r = e.doc.resolve(t), a = e.doc.resolve(n), i = q(r, a), o = 0; o < i.length; o++) {
            var s = i[o],
              l = o == i.length - 1;
            if (l && 0 == s || r.node(s).type.contentMatch.validEnd) return e.delete(r.start(s), a.end(s));
            if (s > 0 && (l || r.node(s - 1).canReplace(r.index(s - 1), a.indexAfter(s - 1)))) return e.delete(r.before(s), a.after(s));
          }
          for (var c = 1; c <= r.depth && c <= a.depth; c++) if (t - r.start(c) == r.depth - c && n > r.end(c) && a.end(c) - n != a.depth - c && r.start(c - 1) == a.start(c - 1) && r.node(c - 1).canReplace(r.index(c - 1), a.index(c - 1))) return e.delete(r.before(c), n);
          e.delete(t, n);
        }(this, e, t), this;
      }
    }, {
      key: "lift",
      value: function (e, t) {
        return function (e, t, n) {
          for (var r = t.$from, a = t.$to, i = t.depth, o = r.before(i + 1), s = a.after(i + 1), l = o, c = s, u = _.Fragment.empty, d = 0, p = i, f = !1; p > n; p--) f || r.index(p) > 0 ? (f = !0, u = _.Fragment.from(r.node(p).copy(u)), d++) : l--;
          for (var h = _.Fragment.empty, m = 0, A = i, g = !1; A > n; A--) g || a.after(A + 1) < a.end(A) ? (g = !0, h = _.Fragment.from(a.node(A).copy(h)), m++) : c++;
          e.step(new D(l, c, o, s, new _.Slice(u.append(h), d, m), u.size - d, !0));
        }(this, e, t), this;
      }
    }, {
      key: "join",
      value: function (e) {
        return function (e, t, n) {
          var r = null,
            a = e.doc.type.schema.linebreakReplacement,
            i = e.doc.resolve(t - n),
            o = i.node().type;
          if (a && o.inlineContent) {
            var s = "pre" == o.whitespace,
              l = !!o.contentMatch.matchType(a);
            s && !l ? r = !1 : !s && l && (r = !0);
          }
          var c = e.steps.length;
          if (!1 === r) {
            var u = e.doc.resolve(t + n);
            N(e, u.node(), u.before(), c);
          }
          o.inlineContent && P(e, t + n - 1, o, i.node().contentMatchAt(i.index()), null == r);
          var d = e.mapping.slice(c),
            p = d.map(t - n);
          if (e.step(new x(p, d.map(t + n, -1), _.Slice.empty, !0)), !0 === r) {
            var f = e.doc.resolve(p);
            B(e, f.node(), f.before(), e.steps.length);
          }
        }(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), this;
      }
    }, {
      key: "wrap",
      value: function (e, t) {
        return function (e, t, n) {
          for (var r = _.Fragment.empty, a = n.length - 1; a >= 0; a--) {
            if (r.size) {
              var i = n[a].type.contentMatch.matchFragment(r);
              if (!i || !i.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
            }
            r = _.Fragment.from(n[a].type.create(n[a].attrs, r));
          }
          var o = t.start,
            s = t.end;
          e.step(new D(o, s, o, s, new _.Slice(r, 0, 0), n.length, !0));
        }(this, e, t), this;
      }
    }, {
      key: "setBlockType",
      value: function (e) {
        return function (e, t, n, r, a) {
          if (!r.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
          var i = e.steps.length;
          e.doc.nodesBetween(t, n, function (t, n) {
            var o = "function" == typeof a ? a(t) : a;
            if (t.isTextblock && !t.hasMarkup(r, o) && function (e, t, n) {
              var r = e.resolve(t),
                a = r.index();
              return r.parent.canReplaceWith(a, a + 1, n);
            }(e.doc, e.mapping.slice(i).map(n), r)) {
              var s = null;
              if (r.schema.linebreakReplacement) {
                var l = "pre" == r.whitespace,
                  c = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
                l && !c ? s = !1 : !l && c && (s = !0);
              }
              !1 === s && N(e, t, n, i), P(e, e.mapping.slice(i).map(n, 1), r, void 0, null === s);
              var u = e.mapping.slice(i),
                d = u.map(n, 1),
                p = u.map(n + t.nodeSize, 1);
              return e.step(new D(d, p, d + 1, p - 1, new _.Slice(_.Fragment.from(r.create(o, null, t.marks)), 0, 0), 1, !0)), !0 === s && B(e, t, n, i), !1;
            }
          });
        }(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null), this;
      }
    }, {
      key: "setNodeMarkup",
      value: function (e, t) {
        return function (e, t, n, r, a) {
          var i = e.doc.nodeAt(t);
          if (!i) throw new RangeError("No node at given position");
          n || (n = i.type);
          var o = n.create(r, null, a || i.marks);
          if (i.isLeaf) return e.replaceWith(t, t + i.nodeSize, o);
          if (!n.validContent(i.content)) throw new RangeError("Invalid content for node type " + n.name);
          e.step(new D(t, t + i.nodeSize, t + 1, t + i.nodeSize - 1, new _.Slice(_.Fragment.from(o), 0, 0), 1, !0));
        }(this, e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, arguments.length > 3 ? arguments[3] : void 0), this;
      }
    }, {
      key: "setNodeAttribute",
      value: function (e, t, n) {
        return this.step(new Z(e, t, n)), this;
      }
    }, {
      key: "setDocAttribute",
      value: function (e, t) {
        return this.step(new X(e, t)), this;
      }
    }, {
      key: "addNodeMark",
      value: function (e, t) {
        return this.step(new T(e, t)), this;
      }
    }, {
      key: "removeNodeMark",
      value: function (e, t) {
        var n = this.doc.nodeAt(e);
        if (!n) throw new RangeError("No node at position " + e);
        if (t instanceof _.Mark) t.isInSet(n.marks) && this.step(new k(e, t));else {
          for (var r, a = n.marks, i = []; r = t.isInSet(a);) i.push(new k(e, r)), a = r.removeFromSet(a);
          for (var o = i.length - 1; o >= 0; o--) this.step(i[o]);
        }
        return this;
      }
    }, {
      key: "split",
      value: function (e) {
        return function (e, t) {
          for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, r = arguments.length > 3 ? arguments[3] : void 0, a = e.doc.resolve(t), i = _.Fragment.empty, o = _.Fragment.empty, s = a.depth, l = a.depth - n, c = n - 1; s > l; s--, c--) {
            i = _.Fragment.from(a.node(s).copy(i));
            var u = r && r[c];
            o = _.Fragment.from(u ? u.type.create(u.attrs, o) : a.node(s).copy(o));
          }
          e.step(new x(t, t, new _.Slice(i.append(o), n, n), !0));
        }(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 ? arguments[2] : void 0), this;
      }
    }, {
      key: "addMark",
      value: function (e, t, n) {
        return function (e, t, n, r) {
          var a,
            i,
            o = [],
            s = [];
          e.doc.nodesBetween(t, n, function (e, l, c) {
            if (e.isInline) {
              var u = e.marks;
              if (!r.isInSet(u) && c.type.allowsMarkType(r.type)) {
                for (var d = Math.max(l, t), p = Math.min(l + e.nodeSize, n), f = r.addToSet(u), h = 0; h < u.length; h++) u[h].isInSet(f) || (a && a.to == d && a.mark.eq(u[h]) ? a.to = p : o.push(a = new S(d, p, u[h])));
                i && i.to == d ? i.to = p : s.push(i = new M(d, p, r));
              }
            }
          }), o.forEach(function (t) {
            return e.step(t);
          }), s.forEach(function (t) {
            return e.step(t);
          });
        }(this, e, t, n), this;
      }
    }, {
      key: "removeMark",
      value: function (e, t, n) {
        return function (e, t, n, r) {
          var a = [],
            i = 0;
          e.doc.nodesBetween(t, n, function (e, o) {
            if (e.isInline) {
              i++;
              var s = null;
              if (r instanceof _.MarkType) for (var l, c = e.marks; l = r.isInSet(c);) (s || (s = [])).push(l), c = l.removeFromSet(c);else r ? r.isInSet(e.marks) && (s = [r]) : s = e.marks;
              if (s && s.length) for (var u = Math.min(o + e.nodeSize, n), d = 0; d < s.length; d++) {
                for (var p = s[d], f = void 0, h = 0; h < a.length; h++) {
                  var m = a[h];
                  m.step == i - 1 && p.eq(a[h].style) && (f = m);
                }
                f ? (f.to = u, f.step = i) : a.push({
                  style: p,
                  from: Math.max(o, t),
                  to: u,
                  step: i
                });
              }
            }
          }), a.forEach(function (t) {
            return e.step(new S(t.from, t.to, t.style));
          });
        }(this, e, t, n), this;
      }
    }, {
      key: "clearIncompatible",
      value: function (e, t, n) {
        return P(this, e, t, n), this;
      }
    }]), e;
  }();
  t.AddMarkStep = M, t.AddNodeMarkStep = T, t.AttrStep = Z, t.DocAttrStep = X, t.MapResult = y, t.Mapping = E, t.RemoveMarkStep = S, t.RemoveNodeMarkStep = k, t.ReplaceAroundStep = D, t.ReplaceStep = x, t.Step = w, t.StepMap = v, t.StepResult = C, t.Transform = J, t.canJoin = function (e, t) {
    var n = e.resolve(t),
      r = n.index();
    return U(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
  }, t.canSplit = function (e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
      r = arguments.length > 3 ? arguments[3] : void 0,
      a = e.resolve(t),
      i = a.depth - n,
      o = r && r[r.length - 1] || a.parent;
    if (i < 0 || a.parent.type.spec.isolating || !a.parent.canReplace(a.index(), a.parent.childCount) || !o.type.validContent(a.parent.content.cutByIndex(a.index(), a.parent.childCount))) return !1;
    for (var s = a.depth - 1, l = n - 2; s > i; s--, l--) {
      var c = a.node(s),
        u = a.index(s);
      if (c.type.spec.isolating) return !1;
      var d = c.content.cutByIndex(u, c.childCount),
        p = r && r[l + 1];
      p && (d = d.replaceChild(0, p.type.create(p.attrs)));
      var f = r && r[l] || c;
      if (!c.canReplace(u + 1, c.childCount) || !f.type.validContent(d)) return !1;
    }
    var h = a.indexAfter(i),
      _ = r && r[0];
    return a.node(i).canReplaceWith(h, h, _ ? _.type : a.node(i + 1).type);
  }, t.dropPoint = function (e, t, n) {
    var r = e.resolve(t);
    if (!n.content.size) return t;
    for (var a = n.content, i = 0; i < n.openStart; i++) a = a.firstChild.content;
    for (var o = 1; o <= (0 == n.openStart && n.size ? 2 : 1); o++) for (var s = r.depth; s >= 0; s--) {
      var l = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1,
        c = r.index(s) + (l > 0 ? 1 : 0),
        u = r.node(s),
        d = !1;
      if (1 == o) d = u.canReplace(c, c, a);else {
        var p = u.contentMatchAt(c).findWrapping(a.firstChild.type);
        d = p && u.canReplaceWith(c, c, p[0]);
      }
      if (d) return 0 == l ? r.pos : l < 0 ? r.before(s + 1) : r.after(s + 1);
    }
    return null;
  }, t.findWrapping = function (e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e,
      a = function (e, t) {
        var n = e.parent,
          r = e.startIndex,
          a = e.endIndex,
          i = n.contentMatchAt(r).findWrapping(t);
        if (!i) return null;
        var o = i.length ? i[0] : t;
        return n.canReplaceWith(r, a, o) ? i : null;
      }(e, t),
      i = a && function (e, t) {
        var n = e.parent,
          r = e.startIndex,
          a = e.endIndex,
          i = n.child(r),
          o = t.contentMatch.findWrapping(i.type);
        if (!o) return null;
        for (var s = (o.length ? o[o.length - 1] : t).contentMatch, l = r; s && l < a; l++) s = s.matchType(n.child(l).type);
        return s && s.validEnd ? o : null;
      }(r, t);
    return i ? a.map(R).concat({
      type: t,
      attrs: n
    }).concat(i.map(R)) : null;
  }, t.insertPoint = F, t.joinPoint = function (e, t) {
    for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1, r = e.resolve(t), a = r.depth;; a--) {
      var i = void 0,
        o = void 0,
        s = r.index(a);
      if (a == r.depth ? (i = r.nodeBefore, o = r.nodeAfter) : n > 0 ? (i = r.node(a + 1), s++, o = r.node(a).maybeChild(s)) : (i = r.node(a).maybeChild(s - 1), o = r.node(a + 1)), i && !i.isTextblock && U(i, o) && r.node(a).canReplace(s, s + 1)) return t;
      if (0 == a) break;
      t = n < 0 ? r.before(a) : r.after(a);
    }
  }, t.liftTarget = function (e) {
    for (var t = e.parent.content.cutByIndex(e.startIndex, e.endIndex), n = e.depth;; --n) {
      var r = e.$from.node(n),
        a = e.$from.index(n),
        i = e.$to.indexAfter(n);
      if (n < e.depth && r.canReplace(a, i, t)) return n;
      if (0 == n || r.type.spec.isolating || !L(r, a, i)) break;
    }
    return null;
  }, t.replaceStep = j;
});
