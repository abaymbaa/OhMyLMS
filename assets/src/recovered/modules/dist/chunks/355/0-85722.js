// Reconstructed Webpack factory 85722; arguments retain original semantics.
(function (e, t, n) {
  var l,
    a = this && this.__createBinding || (Object.create ? function (e, t, n, l) {
      void 0 === l && (l = n);
      var a = Object.getOwnPropertyDescriptor(t, n);
      a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
        enumerable: !0,
        get: function () {
          return t[n];
        }
      }), Object.defineProperty(e, l, a);
    } : function (e, t, n, l) {
      void 0 === l && (l = n), e[l] = t[n];
    }),
    i = this && this.__setModuleDefault || (Object.create ? function (e, t) {
      Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      });
    } : function (e, t) {
      e.default = t;
    }),
    o = this && this.__importStar || (l = function (e) {
      return l = Object.getOwnPropertyNames || function (e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
        return t;
      }, l(e);
    }, function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n = l(e), o = 0; o < n.length; o++) "default" !== n[o] && a(t, e, n[o]);
      return i(t, e), t;
    }),
    r = this && this.__awaiter || function (e, t, n, l) {
      return new (n || (n = Promise))(function (a, i) {
        function o(e) {
          try {
            c(l.next(e));
          } catch (e) {
            i(e);
          }
        }
        function r(e) {
          try {
            c(l.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(o, r);
        }
        c((l = l.apply(e, t || [])).next());
      });
    },
    c = this && this.__generator || function (e, t) {
      var n,
        l,
        a,
        i = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: []
        },
        o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
      return o.next = r(0), o.throw = r(1), o.return = r(2), "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function r(r) {
        return function (c) {
          return function (r) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, r[0] && (i = 0)), i;) try {
              if (n = 1, l && (a = 2 & r[0] ? l.return : r[0] ? l.throw || ((a = l.return) && a.call(l), 0) : l.next) && !(a = a.call(l, r[1])).done) return a;
              switch (l = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                case 0:
                case 1:
                  a = r;
                  break;
                case 4:
                  return i.label++, {
                    value: r[1],
                    done: !1
                  };
                case 5:
                  i.label++, l = r[1], r = [0];
                  continue;
                case 7:
                  r = i.ops.pop(), i.trys.pop();
                  continue;
                default:
                  if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                    i = 0;
                    continue;
                  }
                  if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                    i.label = r[1];
                    break;
                  }
                  if (6 === r[0] && i.label < a[1]) {
                    i.label = a[1], a = r;
                    break;
                  }
                  if (a && i.label < a[2]) {
                    i.label = a[2], i.ops.push(r);
                    break;
                  }
                  a[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              r = t.call(e, i);
            } catch (e) {
              r = [6, e], l = 0;
            } finally {
              n = a = 0;
            }
            if (5 & r[0]) throw r[1];
            return {
              value: r[0] ? r[1] : void 0,
              done: !0
            };
          }([r, c]);
        };
      }
    },
    u = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Panel = function () {
    var e = this,
      t = (0, m.useFocusIdx)().focusIdx,
      n = (0, m.useEditorProps)().mergeTags,
      l = (0, g.useState)(null == n ? void 0 : n.productsFilters[t]),
      a = l[0],
      i = l[1],
      o = (0, g.useState)(null == n ? void 0 : n.productsLayoutTypes[t]),
      u = o[0],
      E = o[1],
      w = (0, g.useState)(!1),
      k = w[0],
      C = w[1],
      x = (0, g.useRef)(null),
      N = (0, g.useCallback)((0, p.debounce)(function (e) {
        if (e.length >= 3) {
          x.current = Date.now();
          var t = x.current;
          C(!0), (0, s.default)({
            path: "mrm/v1/products?term=".concat(e)
          }).then(function (e) {
            if (x.current === t) {
              var n = [];
              for (var l in e) e.hasOwnProperty(l) && n.push({
                value: l,
                label: e[l]
              });
              y = n, C(!1);
            }
          });
        }
      }, 500), []);
    return g.default.createElement(f.AttributesPanelWrapper, null, g.default.createElement(d.Collapse, {
      accordion: !0,
      defaultActiveKey: ["1"],
      style: {
        maxWidth: 1180
      }
    }, g.default.createElement(_.default, {
      layout: u,
      handleProductLayoutChange: function (e) {
        E(e);
      },
      handleFilterChange: function (t, n) {
        return r(e, void 0, void 0, function () {
          return c(this, function (e) {
            return i(t), [2];
          });
        });
      },
      selectedFilter: a,
      products: y,
      fetching: k,
      debouncedFetchUser: N
    }), g.default.createElement(b.default, {
      productLayoutType: u
    }), g.default.createElement(h.default, {
      layout: u
    }), g.default.createElement(v.default, null)));
  };
  var d = n(3270),
    s = u(n(12842)),
    m = n(58088),
    f = n(43203),
    p = n(2543),
    g = o(n(41594)),
    v = u(n(23358)),
    h = u(n(87408)),
    b = u(n(57308)),
    _ = u(n(87932)),
    y = [];
});
