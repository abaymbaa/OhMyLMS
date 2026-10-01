// Reconstructed Webpack factory 37820; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  function r(e) {
    return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, r(e);
  }
  function a() {
    return a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
      var r = function (e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
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
    }), t && o(e, t);
  }
  function o(e, t) {
    return o = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    }, o(e, t);
  }
  function s(e) {
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
        a = l(e);
      if (t) {
        var i = l(this).constructor;
        n = Reflect.construct(a, arguments, i);
      } else n = a.apply(this, arguments);
      return function (e, t) {
        if (t && ("object" === r(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }(e);
      }(this, n);
    };
  }
  function l(e) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, l(e);
  }
  function c(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function u(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  function d(e, t, n) {
    return t && u(e.prototype, t), n && u(e, n), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var p = n(77712),
    f = n(36553),
    h = Object.create(null),
    _ = function () {
      function e(t, n, r) {
        c(this, e), this.$anchor = t, this.$head = n, this.ranges = r || [new m(t.min(n), t.max(n))];
      }
      return d(e, [{
        key: "anchor",
        get: function () {
          return this.$anchor.pos;
        }
      }, {
        key: "head",
        get: function () {
          return this.$head.pos;
        }
      }, {
        key: "from",
        get: function () {
          return this.$from.pos;
        }
      }, {
        key: "to",
        get: function () {
          return this.$to.pos;
        }
      }, {
        key: "$from",
        get: function () {
          return this.ranges[0].$from;
        }
      }, {
        key: "$to",
        get: function () {
          return this.ranges[0].$to;
        }
      }, {
        key: "empty",
        get: function () {
          for (var e = this.ranges, t = 0; t < e.length; t++) if (e[t].$from.pos != e[t].$to.pos) return !1;
          return !0;
        }
      }, {
        key: "content",
        value: function () {
          return this.$from.doc.slice(this.from, this.to, !0);
        }
      }, {
        key: "replace",
        value: function (e) {
          for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Slice.empty, n = t.content.lastChild, r = null, a = 0; a < t.openEnd; a++) r = n, n = n.lastChild;
          for (var i = e.steps.length, o = this.ranges, s = 0; s < o.length; s++) {
            var l = o[s],
              c = l.$from,
              u = l.$to,
              d = e.mapping.slice(i);
            e.replaceRange(d.map(c.pos), d.map(u.pos), s ? p.Slice.empty : t), 0 == s && M(e, i, (n ? n.isInline : r && r.isTextblock) ? -1 : 1);
          }
        }
      }, {
        key: "replaceWith",
        value: function (e, t) {
          for (var n = e.steps.length, r = this.ranges, a = 0; a < r.length; a++) {
            var i = r[a],
              o = i.$from,
              s = i.$to,
              l = e.mapping.slice(n),
              c = l.map(o.pos),
              u = l.map(s.pos);
            a ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), M(e, n, t.isInline ? -1 : 1));
          }
        }
      }, {
        key: "getBookmark",
        value: function () {
          return y.between(this.$anchor, this.$head).getBookmark();
        }
      }], [{
        key: "findFrom",
        value: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = e.parent.inlineContent ? new y(e) : O(e.node(0), e.parent, e.pos, e.index(), t, n);
          if (r) return r;
          for (var a = e.depth - 1; a >= 0; a--) {
            var i = t < 0 ? O(e.node(0), e.node(a), e.before(a + 1), e.index(a), t, n) : O(e.node(0), e.node(a), e.after(a + 1), e.index(a) + 1, t, n);
            if (i) return i;
          }
          return null;
        }
      }, {
        key: "near",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return this.findFrom(e, t) || this.findFrom(e, -t) || new w(e.node(0));
        }
      }, {
        key: "atStart",
        value: function (e) {
          return O(e, e, 0, 0, 1) || new w(e);
        }
      }, {
        key: "atEnd",
        value: function (e) {
          return O(e, e, e.content.size, e.childCount, -1) || new w(e);
        }
      }, {
        key: "fromJSON",
        value: function (e, t) {
          if (!t || !t.type) throw new RangeError("Invalid input for Selection.fromJSON");
          var n = h[t.type];
          if (!n) throw new RangeError("No selection type ".concat(t.type, " defined"));
          return n.fromJSON(e, t);
        }
      }, {
        key: "jsonID",
        value: function (e, t) {
          if (e in h) throw new RangeError("Duplicate use of selection JSON ID " + e);
          return h[e] = t, t.prototype.jsonID = e, t;
        }
      }]), e;
    }();
  _.prototype.visible = !0;
  var m = d(function e(t, n) {
      c(this, e), this.$from = t, this.$to = n;
    }),
    A = !1;
  function g(e) {
    A || e.parent.inlineContent || (A = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + e.parent.type.name + ")"));
  }
  var y = function (e) {
    i(n, e);
    var t = s(n);
    function n(e) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
      return c(this, n), g(e), g(r), t.call(this, e, r);
    }
    return d(n, [{
      key: "$cursor",
      get: function () {
        return this.$anchor.pos == this.$head.pos ? this.$head : null;
      }
    }, {
      key: "map",
      value: function (e, t) {
        var r = e.resolve(t.map(this.head));
        if (!r.parent.inlineContent) return _.near(r);
        var a = e.resolve(t.map(this.anchor));
        return new n(a.parent.inlineContent ? a : r, r);
      }
    }, {
      key: "replace",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Slice.empty;
        if (a(l(n.prototype), "replace", this).call(this, e, t), t == p.Slice.empty) {
          var r = this.$from.marksAcross(this.$to);
          r && e.ensureMarks(r);
        }
      }
    }, {
      key: "eq",
      value: function (e) {
        return e instanceof n && e.anchor == this.anchor && e.head == this.head;
      }
    }, {
      key: "getBookmark",
      value: function () {
        return new v(this.anchor, this.head);
      }
    }, {
      key: "toJSON",
      value: function () {
        return {
          type: "text",
          anchor: this.anchor,
          head: this.head
        };
      }
    }], [{
      key: "fromJSON",
      value: function (e, t) {
        if ("number" != typeof t.anchor || "number" != typeof t.head) throw new RangeError("Invalid input for TextSelection.fromJSON");
        return new n(e.resolve(t.anchor), e.resolve(t.head));
      }
    }, {
      key: "create",
      value: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
          r = e.resolve(t);
        return new this(r, n == t ? r : e.resolve(n));
      }
    }, {
      key: "between",
      value: function (e, t, r) {
        var a = e.pos - t.pos;
        if (r && !a || (r = a >= 0 ? 1 : -1), !t.parent.inlineContent) {
          var i = _.findFrom(t, r, !0) || _.findFrom(t, -r, !0);
          if (!i) return _.near(t, r);
          t = i.$head;
        }
        return e.parent.inlineContent || (0 == a || (e = (_.findFrom(e, -r, !0) || _.findFrom(e, r, !0)).$anchor).pos < t.pos != a < 0) && (e = t), new n(e, t);
      }
    }]), n;
  }(_);
  _.jsonID("text", y);
  var v = function () {
      function e(t, n) {
        c(this, e), this.anchor = t, this.head = n;
      }
      return d(e, [{
        key: "map",
        value: function (t) {
          return new e(t.map(this.anchor), t.map(this.head));
        }
      }, {
        key: "resolve",
        value: function (e) {
          return y.between(e.resolve(this.anchor), e.resolve(this.head));
        }
      }]), e;
    }(),
    E = function (e) {
      i(n, e);
      var t = s(n);
      function n(e) {
        var r;
        c(this, n);
        var a = e.nodeAfter,
          i = e.node(0).resolve(e.pos + a.nodeSize);
        return (r = t.call(this, e, i)).node = a, r;
      }
      return d(n, [{
        key: "map",
        value: function (e, t) {
          var r = t.mapResult(this.anchor),
            a = r.deleted,
            i = r.pos,
            o = e.resolve(i);
          return a ? _.near(o) : new n(o);
        }
      }, {
        key: "content",
        value: function () {
          return new p.Slice(p.Fragment.from(this.node), 0, 0);
        }
      }, {
        key: "eq",
        value: function (e) {
          return e instanceof n && e.anchor == this.anchor;
        }
      }, {
        key: "toJSON",
        value: function () {
          return {
            type: "node",
            anchor: this.anchor
          };
        }
      }, {
        key: "getBookmark",
        value: function () {
          return new b(this.anchor);
        }
      }], [{
        key: "fromJSON",
        value: function (e, t) {
          if ("number" != typeof t.anchor) throw new RangeError("Invalid input for NodeSelection.fromJSON");
          return new n(e.resolve(t.anchor));
        }
      }, {
        key: "create",
        value: function (e, t) {
          return new n(e.resolve(t));
        }
      }, {
        key: "isSelectable",
        value: function (e) {
          return !e.isText && !1 !== e.type.spec.selectable;
        }
      }]), n;
    }(_);
  E.prototype.visible = !1, _.jsonID("node", E);
  var b = function () {
      function e(t) {
        c(this, e), this.anchor = t;
      }
      return d(e, [{
        key: "map",
        value: function (t) {
          var n = t.mapResult(this.anchor),
            r = n.deleted,
            a = n.pos;
          return r ? new v(a, a) : new e(a);
        }
      }, {
        key: "resolve",
        value: function (e) {
          var t = e.resolve(this.anchor),
            n = t.nodeAfter;
          return n && E.isSelectable(n) ? new E(t) : _.near(t);
        }
      }]), e;
    }(),
    w = function (e) {
      i(n, e);
      var t = s(n);
      function n(e) {
        return c(this, n), t.call(this, e.resolve(0), e.resolve(e.content.size));
      }
      return d(n, [{
        key: "replace",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Slice.empty;
          if (t == p.Slice.empty) {
            e.delete(0, e.doc.content.size);
            var r = _.atStart(e.doc);
            r.eq(e.selection) || e.setSelection(r);
          } else a(l(n.prototype), "replace", this).call(this, e, t);
        }
      }, {
        key: "toJSON",
        value: function () {
          return {
            type: "all"
          };
        }
      }, {
        key: "map",
        value: function (e) {
          return new n(e);
        }
      }, {
        key: "eq",
        value: function (e) {
          return e instanceof n;
        }
      }, {
        key: "getBookmark",
        value: function () {
          return C;
        }
      }], [{
        key: "fromJSON",
        value: function (e) {
          return new n(e);
        }
      }]), n;
    }(_);
  _.jsonID("all", w);
  var C = {
    map: function () {
      return this;
    },
    resolve: function (e) {
      return new w(e);
    }
  };
  function O(e, t, n, r, a) {
    var i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
    if (t.inlineContent) return y.create(e, n);
    for (var o = r - (a > 0 ? 0 : 1); a > 0 ? o < t.childCount : o >= 0; o += a) {
      var s = t.child(o);
      if (s.isAtom) {
        if (!i && E.isSelectable(s)) return E.create(e, n - (a < 0 ? s.nodeSize : 0));
      } else {
        var l = O(e, s, n + a, a < 0 ? s.childCount : 0, a, i);
        if (l) return l;
      }
      n += s.nodeSize * a;
    }
    return null;
  }
  function M(e, t, n) {
    var r = e.steps.length - 1;
    if (!(r < t)) {
      var a,
        i = e.steps[r];
      (i instanceof f.ReplaceStep || i instanceof f.ReplaceAroundStep) && (e.mapping.maps[r].forEach(function (e, t, n, r) {
        null == a && (a = r);
      }), e.setSelection(_.near(e.doc.resolve(a), n)));
    }
  }
  var S = function (e) {
    i(n, e);
    var t = s(n);
    function n(e) {
      var r;
      return c(this, n), (r = t.call(this, e.doc)).curSelectionFor = 0, r.updated = 0, r.meta = Object.create(null), r.time = Date.now(), r.curSelection = e.selection, r.storedMarks = e.storedMarks, r;
    }
    return d(n, [{
      key: "selection",
      get: function () {
        return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
      }
    }, {
      key: "setSelection",
      value: function (e) {
        if (e.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
        return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = -3 & this.updated | 1, this.storedMarks = null, this;
      }
    }, {
      key: "selectionSet",
      get: function () {
        return (1 & this.updated) > 0;
      }
    }, {
      key: "setStoredMarks",
      value: function (e) {
        return this.storedMarks = e, this.updated |= 2, this;
      }
    }, {
      key: "ensureMarks",
      value: function (e) {
        return p.Mark.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
      }
    }, {
      key: "addStoredMark",
      value: function (e) {
        return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
      }
    }, {
      key: "removeStoredMark",
      value: function (e) {
        return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
      }
    }, {
      key: "storedMarksSet",
      get: function () {
        return (2 & this.updated) > 0;
      }
    }, {
      key: "addStep",
      value: function (e, t) {
        a(l(n.prototype), "addStep", this).call(this, e, t), this.updated = -3 & this.updated, this.storedMarks = null;
      }
    }, {
      key: "setTime",
      value: function (e) {
        return this.time = e, this;
      }
    }, {
      key: "replaceSelection",
      value: function (e) {
        return this.selection.replace(this, e), this;
      }
    }, {
      key: "replaceSelectionWith",
      value: function (e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = this.selection;
        return t && (e = e.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || p.Mark.none))), n.replaceWith(this, e), this;
      }
    }, {
      key: "deleteSelection",
      value: function () {
        return this.selection.replace(this), this;
      }
    }, {
      key: "insertText",
      value: function (e, t, n) {
        var r = this.doc.type.schema;
        if (null == t) return e ? this.replaceSelectionWith(r.text(e), !0) : this.deleteSelection();
        if (null == n && (n = t), n = null == n ? t : n, !e) return this.deleteRange(t, n);
        var a = this.storedMarks;
        if (!a) {
          var i = this.doc.resolve(t);
          a = n == t ? i.marks() : i.marksAcross(this.doc.resolve(n));
        }
        return this.replaceRangeWith(t, n, r.text(e, a)), this.selection.empty || this.setSelection(_.near(this.selection.$to)), this;
      }
    }, {
      key: "setMeta",
      value: function (e, t) {
        return this.meta["string" == typeof e ? e : e.key] = t, this;
      }
    }, {
      key: "getMeta",
      value: function (e) {
        return this.meta["string" == typeof e ? e : e.key];
      }
    }, {
      key: "isGeneric",
      get: function () {
        for (var e in this.meta) return !1;
        return !0;
      }
    }, {
      key: "scrollIntoView",
      value: function () {
        return this.updated |= 4, this;
      }
    }, {
      key: "scrolledIntoView",
      get: function () {
        return (4 & this.updated) > 0;
      }
    }]), n;
  }(f.Transform);
  function T(e, t) {
    return t && e ? e.bind(t) : e;
  }
  var k = d(function e(t, n, r) {
      c(this, e), this.name = t, this.init = T(n.init, r), this.apply = T(n.apply, r);
    }),
    x = [new k("doc", {
      init: function (e) {
        return e.doc || e.schema.topNodeType.createAndFill();
      },
      apply: function (e) {
        return e.doc;
      }
    }), new k("selection", {
      init: function (e, t) {
        return e.selection || _.atStart(t.doc);
      },
      apply: function (e) {
        return e.selection;
      }
    }), new k("storedMarks", {
      init: function (e) {
        return e.storedMarks || null;
      },
      apply: function (e, t, n, r) {
        return r.selection.$cursor ? e.storedMarks : null;
      }
    }), new k("scrollToSelection", {
      init: function () {
        return 0;
      },
      apply: function (e, t) {
        return e.scrolledIntoView ? t + 1 : t;
      }
    })],
    D = d(function e(t, n) {
      var r = this;
      c(this, e), this.schema = t, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = x.slice(), n && n.forEach(function (e) {
        if (r.pluginsByKey[e.key]) throw new RangeError("Adding different instances of a keyed plugin (" + e.key + ")");
        r.plugins.push(e), r.pluginsByKey[e.key] = e, e.spec.state && r.fields.push(new k(e.key, e.spec.state, e));
      });
    }),
    I = function () {
      function e(t) {
        c(this, e), this.config = t;
      }
      return d(e, [{
        key: "schema",
        get: function () {
          return this.config.schema;
        }
      }, {
        key: "plugins",
        get: function () {
          return this.config.plugins;
        }
      }, {
        key: "apply",
        value: function (e) {
          return this.applyTransaction(e).state;
        }
      }, {
        key: "filterTransaction",
        value: function (e) {
          for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, n = 0; n < this.config.plugins.length; n++) if (n != t) {
            var r = this.config.plugins[n];
            if (r.spec.filterTransaction && !r.spec.filterTransaction.call(r, e, this)) return !1;
          }
          return !0;
        }
      }, {
        key: "applyTransaction",
        value: function (e) {
          if (!this.filterTransaction(e)) return {
            state: this,
            transactions: []
          };
          for (var t = [e], n = this.applyInner(e), r = null;;) {
            for (var a = !1, i = 0; i < this.config.plugins.length; i++) {
              var o = this.config.plugins[i];
              if (o.spec.appendTransaction) {
                var s = r ? r[i].n : 0,
                  l = r ? r[i].state : this,
                  c = s < t.length && o.spec.appendTransaction.call(o, s ? t.slice(s) : t, l, n);
                if (c && n.filterTransaction(c, i)) {
                  if (c.setMeta("appendedTransaction", e), !r) {
                    r = [];
                    for (var u = 0; u < this.config.plugins.length; u++) r.push(u < i ? {
                      state: n,
                      n: t.length
                    } : {
                      state: this,
                      n: 0
                    });
                  }
                  t.push(c), n = n.applyInner(c), a = !0;
                }
                r && (r[i] = {
                  state: n,
                  n: t.length
                });
              }
            }
            if (!a) return {
              state: n,
              transactions: t
            };
          }
        }
      }, {
        key: "applyInner",
        value: function (t) {
          if (!t.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
          for (var n = new e(this.config), r = this.config.fields, a = 0; a < r.length; a++) {
            var i = r[a];
            n[i.name] = i.apply(t, this[i.name], this, n);
          }
          return n;
        }
      }, {
        key: "tr",
        get: function () {
          return new S(this);
        }
      }, {
        key: "reconfigure",
        value: function (t) {
          for (var n = new D(this.schema, t.plugins), r = n.fields, a = new e(n), i = 0; i < r.length; i++) {
            var o = r[i].name;
            a[o] = this.hasOwnProperty(o) ? this[o] : r[i].init(t, a);
          }
          return a;
        }
      }, {
        key: "toJSON",
        value: function (e) {
          var t = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON()
          };
          if (this.storedMarks && (t.storedMarks = this.storedMarks.map(function (e) {
            return e.toJSON();
          })), e && "object" == r(e)) for (var n in e) {
            if ("doc" == n || "selection" == n) throw new RangeError("The JSON fields `doc` and `selection` are reserved");
            var a = e[n],
              i = a.spec.state;
            i && i.toJSON && (t[n] = i.toJSON.call(a, this[a.key]));
          }
          return t;
        }
      }], [{
        key: "create",
        value: function (t) {
          for (var n = new D(t.doc ? t.doc.type.schema : t.schema, t.plugins), r = new e(n), a = 0; a < n.fields.length; a++) r[n.fields[a].name] = n.fields[a].init(t, r);
          return r;
        }
      }, {
        key: "fromJSON",
        value: function (t, n, r) {
          if (!n) throw new RangeError("Invalid input for EditorState.fromJSON");
          if (!t.schema) throw new RangeError("Required config field 'schema' missing");
          var a = new D(t.schema, t.plugins),
            i = new e(a);
          return a.fields.forEach(function (e) {
            if ("doc" == e.name) i.doc = p.Node.fromJSON(t.schema, n.doc);else if ("selection" == e.name) i.selection = _.fromJSON(i.doc, n.selection);else if ("storedMarks" == e.name) n.storedMarks && (i.storedMarks = n.storedMarks.map(t.schema.markFromJSON));else {
              if (r) for (var a in r) {
                var o = r[a],
                  s = o.spec.state;
                if (o.key == e.name && s && s.fromJSON && Object.prototype.hasOwnProperty.call(n, a)) return void (i[e.name] = s.fromJSON.call(o, t, n[a], i));
              }
              i[e.name] = e.init(t, i);
            }
          }), i;
        }
      }]), e;
    }();
  function P(e, t, n) {
    for (var r in e) {
      var a = e[r];
      a instanceof Function ? a = a.bind(t) : "handleDOMEvents" == r && (a = P(a, t, {})), n[r] = a;
    }
    return n;
  }
  var L = function () {
      function e(t) {
        c(this, e), this.spec = t, this.props = {}, t.props && P(t.props, this, this.props), this.key = t.key ? t.key.key : B("plugin");
      }
      return d(e, [{
        key: "getState",
        value: function (e) {
          return e[this.key];
        }
      }]), e;
    }(),
    R = Object.create(null);
  function B(e) {
    return e in R ? e + "$" + ++R[e] : (R[e] = 0, e + "$");
  }
  var N = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "key";
      c(this, e), this.key = B(t);
    }
    return d(e, [{
      key: "get",
      value: function (e) {
        return e.config.pluginsByKey[this.key];
      }
    }, {
      key: "getState",
      value: function (e) {
        return e[this.key];
      }
    }]), e;
  }();
  t.AllSelection = w, t.EditorState = I, t.NodeSelection = E, t.Plugin = L, t.PluginKey = N, t.Selection = _, t.SelectionRange = m, t.TextSelection = y, t.Transaction = S;
});
