// Reconstructed Webpack factory 28845; arguments retain original semantics.
(function (e, t, n) {
  var l,
    a = this && this.__assign || function () {
      return a = Object.assign || function (e) {
        for (var t, n = 1, l = arguments.length; n < l; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }, a.apply(this, arguments);
    },
    i = this && this.__createBinding || (Object.create ? function (e, t, n, l) {
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
    o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
      Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      });
    } : function (e, t) {
      e.default = t;
    }),
    r = this && this.__importStar || (l = function (e) {
      return l = Object.getOwnPropertyNames || function (e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
        return t;
      }, l(e);
    }, function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n = l(e), a = 0; a < n.length; a++) "default" !== n[a] && i(t, e, n[a]);
      return o(t, e), t;
    }),
    c = this && this.__awaiter || function (e, t, n, l) {
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
    u = this && this.__generator || function (e, t) {
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
    d = this && this.__spreadArray || function (e, t, n) {
      if (n || 2 === arguments.length) for (var l, a = 0, i = t.length; a < i; a++) !l && a in t || (l || (l = Array.prototype.slice.call(t, 0, a)), l[a] = t[a]);
      return e.concat(l || Array.prototype.slice.call(t));
    },
    s = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.EditorBlockData = function (e) {
    var t,
      n,
      l,
      i = e.values,
      o = e.setDataSource,
      r = (0, p.useRef)({}),
      c = (0, p.useMemo)(function () {
        var e = [],
          t = function (n) {
            g.CustomBlocksType.PRODUCT_BLOCK === (null == n ? void 0 : n.type) ? e.push(n) : (null == n ? void 0 : n.children) && n.children.forEach(function (e, n) {
              "advanced_wrapper" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, l) {
                "advanced_section" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, a) {
                  "advanced_column" === (null == e ? void 0 : e.type) && e.children.forEach(function (e, i) {
                    g.CustomBlocksType.PRODUCT_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "].children.[").concat(a, "].children.[").concat(i, "]"), t(e));
                  });
                }) : g.CustomBlocksType.PRODUCT_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "]"), t(e));
              }) : "advanced_section" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, l) {
                "advanced_column" === (null == e ? void 0 : e.type) && e.children.forEach(function (e, a) {
                  g.CustomBlocksType.PRODUCT_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "].children.[").concat(a, "]"), t(e));
                });
              }) : "wrapper" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, l) {
                "section" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, a) {
                  "advanced_column" === (null == e ? void 0 : e.type) && e.children.forEach(function (e, i) {
                    g.CustomBlocksType.PRODUCT_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "].children.[").concat(a, "].children.[").concat(i, "]"), t(e));
                  });
                }) : g.CustomBlocksType.PRODUCT_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "]"), t(e));
              }) : g.CustomBlocksType.PRODUCT_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "]"), t(e));
            });
          };
        return t(i.content), e;
      }, [i]);
    (0, p.useEffect)(function () {
      var e = !0,
        t = {};
      return e && c.forEach(function (e, n) {
        var l, i, u, s, m, f, p, b, _, y, E, w, k, C, x, N, T, P, R, S, B, O, F, M, A, L, z, D, I, j;
        if ((null == e ? void 0 : e.type) === g.CustomBlocksType.PRODUCT_BLOCK) {
          var W = null == e ? void 0 : e.index,
            H = r.current[n] || {};
          if (function (e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = {});
            var n = Object.keys(e);
            if (Object.keys(t), 0 === n.length) return !1;
            for (var l = 0, a = n; l < a.length; l++) {
              var i = a[l];
              if ("data" !== i && e[i] !== t[i]) return !1;
            }
            return !0;
          }(H, {
            contentFilter: null === (l = null == e ? void 0 : e.attributes) || void 0 === l ? void 0 : l.contentFilter,
            productCatId: null === (u = null === (i = null == e ? void 0 : e.data) || void 0 === i ? void 0 : i.value) || void 0 === u ? void 0 : u.productCatId,
            productId: null === (m = null === (s = null == e ? void 0 : e.data) || void 0 === s ? void 0 : s.value) || void 0 === m ? void 0 : m.productId,
            quantity: null === (p = null === (f = null == e ? void 0 : e.data) || void 0 === f ? void 0 : f.value) || void 0 === p ? void 0 : p.quantity,
            index: n
          })) {
            var V = null == H ? void 0 : H.index,
              q = String(c[V].index),
              U = (null == H ? void 0 : H.data) || {};
            return t[q] = a({}, U), void o(function (e) {
              var t;
              return a(a({}, e), {
                products: a(a({}, null == e ? void 0 : e.products), (t = {}, t[q] = d([], U, !0), t))
              });
            });
          }
          r.current[n] = {
            contentFilter: null === (b = null == e ? void 0 : e.attributes) || void 0 === b ? void 0 : b.contentFilter,
            productCatId: null === (y = null === (_ = null == e ? void 0 : e.data) || void 0 === _ ? void 0 : _.value) || void 0 === y ? void 0 : y.productCatId,
            productId: null === (w = null === (E = null == e ? void 0 : e.data) || void 0 === E ? void 0 : E.value) || void 0 === w ? void 0 : w.productId,
            quantity: null === (C = null === (k = null == e ? void 0 : e.data) || void 0 === k ? void 0 : k.value) || void 0 === C ? void 0 : C.quantity,
            index: n
          }, (null === (N = null === (x = null == e ? void 0 : e.data) || void 0 === x ? void 0 : x.value) || void 0 === N ? void 0 : N.productCatId) && "category_product" === (null === (T = null == e ? void 0 : e.attributes) || void 0 === T ? void 0 : T.contentFilter) ? "specific_product" !== (null === (P = null == e ? void 0 : e.attributes) || void 0 === P ? void 0 : P.contentFilter) ? v(null === (S = null === (R = null == e ? void 0 : e.data) || void 0 === R ? void 0 : R.value) || void 0 === S ? void 0 : S.productCatId, null === (O = null === (B = null == e ? void 0 : e.data) || void 0 === B ? void 0 : B.value) || void 0 === O ? void 0 : O.quantity).then(function (e) {
            t[W] = e, r.current[n].data = d([], e, !0), o(function (e) {
              return a(a({}, e), {
                products: a(a({}, e.products), t)
              });
            });
          }) : null != (null === (M = null === (F = null == e ? void 0 : e.data) || void 0 === F ? void 0 : F.value) || void 0 === M ? void 0 : M.productId) ? h(null === (L = null === (A = null == e ? void 0 : e.data) || void 0 === A ? void 0 : A.value) || void 0 === L ? void 0 : L.productId).then(function (e) {
            t[W] = [e], r.current[n].data = [e], o(function (e) {
              return a(a({}, e), {
                products: a(a({}, e.products), t)
              });
            });
          }) : (t[W] = [], r.current[n].data = [], o(function (e) {
            return a(a({}, e), {
              products: a(a({}, e.products), t)
            });
          })) : null != (null === (D = null === (z = null == e ? void 0 : e.data) || void 0 === z ? void 0 : z.value) || void 0 === D ? void 0 : D.productId) ? h(null === (j = null === (I = null == e ? void 0 : e.data) || void 0 === I ? void 0 : I.value) || void 0 === j ? void 0 : j.productId).then(function (e) {
            t[W] = [e], r.current[n].data = [e], o(function (e) {
              return a(a({}, e), {
                products: a(a({}, e.products), t)
              });
            });
          }) : (t[W] = [], r.current[n].data = [], o(function (e) {
            return a(a({}, e), {
              products: a(a({}, e.products), t)
            });
          }));
        }
      }), function () {
        e = !1;
      };
    }, [c]), (0, p.useEffect)(function () {
      var e = !0,
        t = {},
        n = {};
      return e && c.forEach(function (e) {
        var l, i, r;
        if ((null == e ? void 0 : e.type) === g.CustomBlocksType.PRODUCT_BLOCK) {
          var c = null == e ? void 0 : e.index;
          (null === (l = null == e ? void 0 : e.attributes) || void 0 === l ? void 0 : l.contentFilter) && (t[c] = null === (i = null == e ? void 0 : e.attributes) || void 0 === i ? void 0 : i.contentFilter, n[c] = null === (r = null == e ? void 0 : e.attributes) || void 0 === r ? void 0 : r.layoutType, o(function (e) {
            return a(a({}, e), {
              productsFilters: a({}, t),
              productsLayoutTypes: a({}, n)
            });
          }));
        }
      }), function () {
        e = !1;
      };
    }, [c]);
    var u = (0, p.useMemo)(function () {
      var e = [],
        t = function (n) {
          g.CustomBlocksType.POST_BLOCK === (null == n ? void 0 : n.type) ? e.push(n) : (null == n ? void 0 : n.children) && n.children.forEach(function (e, n) {
            "advanced_wrapper" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, l) {
              "advanced_section" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, a) {
                "advanced_column" === (null == e ? void 0 : e.type) && e.children.forEach(function (e, i) {
                  g.CustomBlocksType.POST_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "].children.[").concat(a, "].children.[").concat(i, "]"), t(e));
                });
              }) : g.CustomBlocksType.POST_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "]"), t(e));
            }) : "advanced_section" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, l) {
              "advanced_column" === (null == e ? void 0 : e.type) && e.children.forEach(function (e, a) {
                g.CustomBlocksType.POST_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "].children.[").concat(a, "]"), t(e));
              });
            }) : "wrapper" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, l) {
              "section" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, a) {
                "advanced_column" === (null == e ? void 0 : e.type) && e.children.forEach(function (e, i) {
                  g.CustomBlocksType.POST_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "].children.[").concat(a, "].children.[").concat(i, "]"), t(e));
                });
              }) : g.CustomBlocksType.POST_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "]"), t(e));
            }) : g.CustomBlocksType.POST_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "]"), t(e));
          });
        };
      return t(i.content), e;
    }, [i]);
    (0, p.useEffect)(function () {
      var e = !0,
        t = {};
      return e && u.forEach(function (e) {
        var n, l, i, r, c, u, d, s, m, p, v, h, E, w, k, C, x, N, T, P, R, S, B, O, F, M;
        if ((null == e ? void 0 : e.type) === g.CustomBlocksType.POST_BLOCK) {
          var A = null == e ? void 0 : e.index;
          (null === (l = null === (n = null == e ? void 0 : e.data) || void 0 === n ? void 0 : n.value) || void 0 === l ? void 0 : l.postCatId) && "category_post" == (null === (i = null == e ? void 0 : e.attributes) || void 0 === i ? void 0 : i.contentFilter) ? "single_grid" !== (null === (r = null == e ? void 0 : e.attributes) || void 0 === r ? void 0 : r.layoutType) ? b(null === (u = null === (c = null == e ? void 0 : e.data) || void 0 === c ? void 0 : c.value) || void 0 === u ? void 0 : u.postCatId, null === (d = null == e ? void 0 : e.attributes) || void 0 === d ? void 0 : d.postType).then(function (e) {
            t[A] = e, o(function (e) {
              return a(a({}, e), {
                posts: a(a({}, e.posts), t)
              });
            });
          }) : void 0 !== (null === (m = null === (s = null == e ? void 0 : e.data) || void 0 === s ? void 0 : s.value) || void 0 === m ? void 0 : m.postId) ? y(null === (v = null === (p = null == e ? void 0 : e.data) || void 0 === p ? void 0 : p.value) || void 0 === v ? void 0 : v.postId, null === (h = null == e ? void 0 : e.attributes) || void 0 === h ? void 0 : h.postType).then(function (e) {
            t[A] = (0, f.isEmpty)(e) ? e : [e], o(function (e) {
              return a(a({}, e), {
                posts: a(a({}, e.posts), t)
              });
            });
          }) : (t[A] = [], o(function (e) {
            return a(a({}, e), {
              posts: a(a({}, e.posts), t)
            });
          })) : (null === (w = null === (E = null == e ? void 0 : e.data) || void 0 === E ? void 0 : E.value) || void 0 === w ? void 0 : w.postId) && "specific_post" == (null === (k = null == e ? void 0 : e.attributes) || void 0 === k ? void 0 : k.contentFilter) || (null === (x = null === (C = null == e ? void 0 : e.data) || void 0 === C ? void 0 : C.value) || void 0 === x ? void 0 : x.postId) && "single_grid" == (null === (N = null == e ? void 0 : e.attributes) || void 0 === N ? void 0 : N.layoutType) ? void 0 !== (null === (P = null === (T = null == e ? void 0 : e.data) || void 0 === T ? void 0 : T.value) || void 0 === P ? void 0 : P.postId) ? y(null === (S = null === (R = null == e ? void 0 : e.data) || void 0 === R ? void 0 : R.value) || void 0 === S ? void 0 : S.postId, null === (B = null == e ? void 0 : e.attributes) || void 0 === B ? void 0 : B.postType).then(function (e) {
            t[A] = (0, f.isEmpty)(e) ? e : [e], o(function (e) {
              return a(a({}, e), {
                posts: a(a({}, e.posts), t)
              });
            });
          }) : (t[A] = [], o(function (e) {
            return a(a({}, e), {
              posts: a(a({}, e.posts), t)
            });
          })) : "recent_post" == (null === (O = null == e ? void 0 : e.attributes) || void 0 === O ? void 0 : O.contentFilter) && "single_grid" !== (null === (F = null == e ? void 0 : e.attributes) || void 0 === F ? void 0 : F.layoutType) ? _(null === (M = null == e ? void 0 : e.attributes) || void 0 === M ? void 0 : M.postType).then(function (e) {
            t[A] = e, o(function (e) {
              return a(a({}, e), {
                posts: a(a({}, e.posts), t)
              });
            });
          }) : (t[A] = [], o(function (e) {
            return a(a({}, e), {
              posts: a(a({}, e.posts), t)
            });
          }));
        }
      }), function () {
        e = !1;
      };
    }, [u]), (0, p.useEffect)(function () {
      var e = !0,
        t = {},
        n = {},
        l = {},
        i = {};
      return e && u.forEach(function (e) {
        var r, c, u, d;
        if ((null == e ? void 0 : e.type) === g.CustomBlocksType.POST_BLOCK) {
          var s = null == e ? void 0 : e.index;
          (null === (r = null == e ? void 0 : e.attributes) || void 0 === r ? void 0 : r.contentFilter) && (t[s] = null === (c = null == e ? void 0 : e.attributes) || void 0 === c ? void 0 : c.contentFilter, n[s] = null === (u = null == e ? void 0 : e.attributes) || void 0 === u ? void 0 : u.layoutType, l[s] = null === (d = null == e ? void 0 : e.attributes) || void 0 === d ? void 0 : d.showButton, o(function (e) {
            return a(a({}, e), {
              postsFilters: a({}, t),
              postLayoutTypes: a({}, n),
              postShowButton: a({}, l),
              postTitlePosition: a({}, i)
            });
          }));
        }
      }), function () {
        e = !1;
      };
    }, [u]);
    var s = (0, p.useMemo)(function () {
        var e = null,
          t = function (n) {
            (null == n ? void 0 : n.type) === g.CustomBlocksType.POST_BLOCK ? e = n : (null == n ? void 0 : n.children) && n.children.forEach(function (e) {
              t(e);
            });
          };
        return t(i.content), e;
      }, [i]),
      m = null === (t = null == s ? void 0 : s.attributes) || void 0 === t ? void 0 : t.postType;
    null === (n = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === n || n.is_wc_active, (0, p.useEffect)(function () {
      var e = !0;
      return e && o(function (e) {
        var t, n, l, i;
        return a(a({}, e), {
          post_filter: (null === (t = null == s ? void 0 : s.attributes) || void 0 === t ? void 0 : t.contentFilter) ? null === (n = null == s ? void 0 : s.attributes) || void 0 === n ? void 0 : n.contentFilter : "category_post",
          postTypeValue: (null === (l = null == s ? void 0 : s.attributes) || void 0 === l ? void 0 : l.postType) ? null === (i = null == s ? void 0 : s.attributes) || void 0 === i ? void 0 : i.postType : "post"
        });
      }), function () {
        e = !1;
      };
    }, [null === (l = null == s ? void 0 : s.attributes) || void 0 === l ? void 0 : l.contentFilter]), (0, p.useEffect)(function () {
      var e = !0;
      return e && (m ? E(m).then(function (e) {
        o(function (t) {
          return a(a({}, t), {
            categories: e
          });
        });
      }) : o(function (e) {
        return a(a({}, e), {
          categories: []
        });
      })), function () {
        e = !1;
      };
    }, [m]);
    var k = (0, p.useMemo)(function () {
      var e = [],
        t = function (n) {
          g.CustomBlocksType.CART_BLOCK === (null == n ? void 0 : n.type) ? e.push(n) : (null == n ? void 0 : n.children) && n.children.forEach(function (e, n) {
            "advanced_wrapper" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, l) {
              "advanced_section" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, a) {
                "advanced_column" === (null == e ? void 0 : e.type) && e.children.forEach(function (e, i) {
                  g.CustomBlocksType.CART_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "].children.[").concat(a, "].children.[").concat(i, "]"), t(e));
                });
              }) : g.CustomBlocksType.CART_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "]"), t(e));
            }) : "advanced_section" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, l) {
              "advanced_column" === (null == e ? void 0 : e.type) && e.children.forEach(function (e, a) {
                g.CustomBlocksType.CART_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "].children.[").concat(a, "]"), t(e));
              });
            }) : "wrapper" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, l) {
              "section" === (null == e ? void 0 : e.type) ? e.children.forEach(function (e, a) {
                "advanced_column" === (null == e ? void 0 : e.type) && e.children.forEach(function (e, i) {
                  g.CustomBlocksType.CART_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "].children.[").concat(a, "].children.[").concat(i, "]"), t(e));
                });
              }) : g.CustomBlocksType.CART_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "].children.[").concat(l, "]"), t(e));
            }) : g.CustomBlocksType.CART_BLOCK === (null == e ? void 0 : e.type) && (e.index = "content.children.[".concat(n, "]"), t(e));
          });
        };
      return t(i.content), e;
    }, [i]);
    return (0, p.useEffect)(function () {
      var e = !0,
        t = {};
      return e && k.forEach(function (e) {
        var n, l;
        if ((null == e ? void 0 : e.type) === g.CustomBlocksType.CART_BLOCK) {
          var i = null == e ? void 0 : e.index;
          w(null === (l = null === (n = null == e ? void 0 : e.data) || void 0 === n ? void 0 : n.value) || void 0 === l ? void 0 : l.quantity).then(function (e) {
            var n = null == e ? void 0 : e.data;
            t[i] = n, o(function (e) {
              return a(a({}, e), {
                cartItems: a(a({}, e.items), t)
              });
            });
          });
        }
      }), function () {
        e = !1;
      };
    }, [k]), (0, p.useEffect)(function () {
      var e = !0,
        t = {};
      return e && k.forEach(function (e) {
        var n, l;
        if ((null == e ? void 0 : e.type) === g.CustomBlocksType.CART_BLOCK) {
          var i = null == e ? void 0 : e.index;
          (null === (n = null == e ? void 0 : e.attributes) || void 0 === n ? void 0 : n.layoutType) && (t[i] = null === (l = null == e ? void 0 : e.attributes) || void 0 === l ? void 0 : l.layoutType, o(function (e) {
            return a(a({}, e), {
              cartLayoutType: a({}, t)
            });
          }));
        }
      }), function () {
        e = !1;
      };
    }, [k]), p.default.createElement(p.default.Fragment, null);
  };
  var m = s(n(12842)),
    f = n(2543),
    p = r(n(41594)),
    g = n(87381),
    v = function (e, t) {
      return c(void 0, void 0, void 0, function () {
        var n, l;
        return u(this, function (i) {
          switch (i.label) {
            case 0:
              return n = "mrm/v1/products/".concat(e, "?quantity=").concat(t), l = {
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              }, [4, (0, m.default)(a({
                path: n
              }, l))];
            case 1:
              return [2, i.sent()];
          }
        });
      });
    },
    h = function (e) {
      return c(void 0, void 0, void 0, function () {
        var t;
        return u(this, function (n) {
          switch (n.label) {
            case 0:
              return t = "mrm/v1/product/".concat(e), [4, (0, m.default)({
                path: t
              })];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    },
    b = function (e, t) {
      return c(void 0, void 0, void 0, function () {
        var n;
        return u(this, function (l) {
          switch (l.label) {
            case 0:
              return n = "mrm/v1/posts/".concat(t, "/").concat(e), [4, (0, m.default)({
                path: n
              })];
            case 1:
              return [2, l.sent()];
          }
        });
      });
    },
    _ = function (e) {
      return c(void 0, void 0, void 0, function () {
        var t;
        return u(this, function (n) {
          switch (n.label) {
            case 0:
              return t = "mrm/v1/posts/".concat(e, "/recent"), [4, (0, m.default)({
                path: t
              })];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    },
    y = function (e, t) {
      return c(void 0, void 0, void 0, function () {
        var n;
        return u(this, function (l) {
          switch (l.label) {
            case 0:
              return n = "mrm/v1/post/".concat(t, "/").concat(e), [4, (0, m.default)({
                path: n
              })];
            case 1:
              return [2, l.sent()];
          }
        });
      });
    },
    E = function (e) {
      return c(void 0, void 0, void 0, function () {
        var t;
        return u(this, function (n) {
          switch (n.label) {
            case 0:
              return t = "mrm/v1/".concat(e, "/categories"), [4, (0, m.default)({
                path: t
              })];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    },
    w = function (e) {
      return c(void 0, void 0, void 0, function () {
        var t;
        return u(this, function (n) {
          switch (n.label) {
            case 0:
              return t = "mrm/v1/products/rand?quantity=".concat(e), [4, (0, m.default)({
                path: t
              })];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    };
});
