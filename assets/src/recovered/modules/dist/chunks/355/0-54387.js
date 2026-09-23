// Reconstructed Webpack factory 54387; arguments retain original semantics.
(function (e, t, n) {
  var l,
    a,
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
    c = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Panel = function () {
    var e = (0, s.useFocusIdx)().focusIdx,
      t = (0, s.useEditorProps)(),
      n = t.mergeTags,
      l = t.setSelectedPostType,
      a = (u.Collapse.Item, (0, p.useState)(null == n ? void 0 : n.postsFilters[e])),
      i = a[0],
      o = a[1],
      r = (0, p.useState)(null == n ? void 0 : n.postLayoutTypes[e]),
      c = r[0],
      y = r[1],
      E = (0, p.useState)(null == n ? void 0 : n.postTitlePosition[e]),
      w = (E[0], E[1]),
      k = (0, p.useState)(null == n ? void 0 : n.postShowButton[e]),
      C = k[0],
      x = k[1],
      N = (0, p.useState)(!1),
      T = N[0],
      P = N[1],
      R = (0, p.useRef)(null),
      S = (0, p.useState)([]),
      B = S[0],
      O = S[1],
      F = (0, p.useCallback)((0, f.debounce)(function (e) {
        if (e.length >= 3) {
          R.current = Date.now();
          var t = R.current;
          P(!0), O([]), (0, d.default)({
            path: "mrm/v1/posts/post?term=".concat(e)
          }).then(function (e) {
            R.current === t && (_ = e, P(!1));
          });
        }
      }, 500), [B, null == n ? void 0 : n.postTypeValue]);
    return p.default.createElement(m.AttributesPanelWrapper, null, p.default.createElement(u.Collapse, {
      accordion: !0,
      defaultActiveKey: ["1"],
      style: {
        maxWidth: 1180
      }
    }, p.default.createElement(v.default, {
      layout: c,
      handlePostLayoutChange: function (e) {
        y(e);
      },
      handleFilterChange: function (e) {
        o(e);
      },
      selectedFilter: i,
      posts: _,
      fetching: T,
      debouncedFetchPost: F,
      handlePostTypeSelection: function (e) {
        l(e);
      },
      selectedPostType: null == n ? void 0 : n.postTypeValue,
      postShowButton: C,
      setPostShowButton: x,
      mergeTags: n,
      handlePostTitlePosition: function (e) {
        w(e);
      }
    }), p.default.createElement(h.default, {
      layout: c
    }), p.default.createElement(g.default, {
      layout: c,
      postShowButton: C
    }), p.default.createElement(b.default, {
      postShowButton: C
    })));
  };
  var u = n(3270),
    d = c(n(12842)),
    s = n(58088),
    m = n(43203),
    f = n(2543),
    p = r(n(41594)),
    g = c(n(35277)),
    v = c(n(34065)),
    h = c(n(55513)),
    b = c(n(6037)),
    _ = (null === (a = window.MRM_Vars) || void 0 === a || a.post_types, []);
});
