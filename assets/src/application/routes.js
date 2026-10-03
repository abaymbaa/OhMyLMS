// Reconstructed application fragment. Assembled in manifest order within factory 1841.
const ioe = [{
    path: "/",
    element: fU
  }, {
    path: "/dashboard",
    element: fU
  }, {
    path: "/courses",
    element: function () {
      HG("ohmylms", "courses");
      var e = (0, z.A)(),
        t = e.openNotificationWithIcon,
        n = e.contextHolder,
        r = (0, y.useSelect)(function (e) {
          return e(T.default).getNotificationMessage();
        }, []),
        a = (0, y.useSelect)(function (e) {
          return e(T.default).getNotificationStatus();
        }, []),
        o = function (e, t) {
          return function (e) {
            if (Array.isArray(e)) return e;
          }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (o = (n = n.call(e)).next, 0 === t) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
              } catch (e) {
                u = !0, a = e;
              } finally {
                try {
                  if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          }(e, t) || function (e, t) {
            if (e) {
              if ("string" == typeof e) return hY(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hY(e, t) : void 0;
            }
          }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }((0, g.useState)(!0), 2),
        i = o[0];
      return o[1], (0, g.useEffect)(function () {
        !i && r && t(a, r);
      }, [r]), React.createElement(React.Fragment, null, n, React.createElement(gY, null));
    }
  }, {
    path: "/course/:id/report",
    element: _q
  }, {
    path: "/courses/:id/students",
    element: yee
  }, {
    path: "/course-edit/:id/:step?/:subStep?",
    element: function () {
      HG("ohmylms", "courses");
      var e = (0, f.g)().id;
      return (0, g.useEffect)(function () {
        var e = document.createElement("style");
        return e.innerHTML = "#wpfooter { display: none !important; }", e.setAttribute("data-course-editor-hide-wpfooter", "true"), document.head.appendChild(e), function () {
          document.head.removeChild(e);
        };
      }, []), h().createElement(dG, {
        courseId: e
      });
    },
    fallback: React.createElement(dG, {
      enableSpin: !0
    })
  }, {
    path: "/course-edit/ai-suggestion/:id",
    element: function () {
      HG("ohmylms", "courses");
      var e = (0, f.g)().id;
      return (0, g.useEffect)(function () {
        return document.title = "Preview AI Suggested Course || OhMyLMS - Wordpress", function () {
          document.title = "OhMyLMS - Wordpress";
        };
      }, [e]), h().createElement(dG, {
        courseId: e
      });
    }
  }, {
    path: "/categories",
    element: function () {
      HG("ohmylms", "categories");
      var e = (0, y.useDispatch)(T.default),
        t = (0, z.A)(),
        n = t.openNotificationWithIcon,
        r = t.contextHolder,
        a = IY((0, g.useState)([]), 2),
        o = a[0],
        i = a[1],
        c = IY((0, g.useState)(!0), 2),
        u = c[0],
        s = c[1],
        d = IY((0, g.useState)(""), 2),
        m = d[0],
        p = d[1],
        f = IY((0, g.useState)(!1), 2),
        v = f[0],
        h = f[1],
        _ = IY((0, g.useState)(!1), 2),
        w = _[0],
        E = _[1],
        S = IY((0, g.useState)(null), 2),
        R = S[0],
        x = S[1],
        C = IY((0, g.useState)(null), 2),
        P = C[0],
        O = C[1],
        k = IY((0, g.useState)(!1), 2),
        j = k[0],
        A = k[1],
        M = IY((0, g.useState)(!1), 2),
        F = M[0],
        N = M[1],
        D = IY((0, g.useState)([]), 2),
        W = D[0],
        B = D[1],
        L = IY((0, g.useState)(null), 2),
        V = (L[0], L[1]),
        H = (0, g.useCallback)(TY(PY().m(function t() {
          var r, a;
          return PY().w(function (t) {
            for (;;) switch (t.p = t.n) {
              case 0:
                return s(!0), t.p = 1, t.n = 2, l()({
                  path: "/ohmylms/v1/categories"
                });
              case 2:
                r = t.v, i(r || []), a = (r || []).map(function (e) {
                  return jY(jY({}, e), {}, {
                    id: e.term_id
                  });
                }), e.setGlobalDataViaKey("categories", a), t.n = 4;
                break;
              case 3:
                t.p = 3, t.v, n("error", (0, b.__)("Failed to load categories", "ohmylms"));
              case 4:
                return t.p = 4, s(!1), t.f(4);
              case 5:
                return t.a(2);
            }
          }, t, null, [[1, 3, 4, 5]]);
        })), []);
      (0, g.useEffect)(function () {
        H();
      }, [H]);
      var G = (0, g.useCallback)(function (e) {
          p(e);
        }, []),
        U = (0, g.useCallback)(function () {
          x(null), h(!0);
        }, []),
        Y = (0, g.useCallback)(function (e) {
          x(e), h(!0);
        }, []),
        Q = (0, g.useCallback)(function (e) {
          O(e), E(!0);
        }, []),
        Z = function () {
          var e = TY(PY().m(function e(t) {
            var r;
            return PY().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if (A(!0), e.p = 1, !R) {
                    e.n = 3;
                    break;
                  }
                  return e.n = 2, l()({
                    path: "/ohmylms/v1/categories/".concat(R.term_id),
                    method: "PUT",
                    data: {
                      name: t.name,
                      parent: t.parent || 0
                    }
                  });
                case 2:
                  e.v, n("success", (0, b.__)("Category updated successfully", "ohmylms")), e.n = 5;
                  break;
                case 3:
                  return e.n = 4, l()({
                    path: "/ohmylms/v1/categories",
                    method: "POST",
                    data: {
                      name: t.name,
                      parent: t.parent || 0
                    }
                  });
                case 4:
                  n("success", (0, b.__)("Category created successfully", "ohmylms"));
                case 5:
                  h(!1), x(null), H(), e.n = 7;
                  break;
                case 6:
                  e.p = 6, r = e.v, n("error", r.message || (0, b.__)("Failed to save category", "ohmylms"));
                case 7:
                  return e.p = 7, A(!1), e.f(7);
                case 8:
                  return e.a(2);
              }
            }, e, null, [[1, 6, 7, 8]]);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
        $ = function () {
          var e = TY(PY().m(function e() {
            var t;
            return PY().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if (P || 0 !== W.length) {
                    e.n = 1;
                    break;
                  }
                  return e.a(2);
                case 1:
                  if (!F) {
                    e.n = 2;
                    break;
                  }
                  return e.a(2);
                case 2:
                  if (N(!0), e.p = 3, !P) {
                    e.n = 5;
                    break;
                  }
                  return e.n = 4, l()({
                    path: "/ohmylms/v1/categories/".concat(P.term_id),
                    method: "DELETE"
                  });
                case 4:
                  n("success", (0, b.__)("Category deleted successfully", "ohmylms")), e.n = 7;
                  break;
                case 5:
                  return e.n = 6, l()({
                    path: "/ohmylms/v1/categories/bulk",
                    method: "DELETE",
                    data: {
                      ids: W
                    },
                    headers: {
                      "Content-Type": "application/json"
                    }
                  });
                case 6:
                  n("success", (0, b.__)("Categories deleted successfully", "ohmylms")), B([]);
                case 7:
                  E(!1), O(null), H(), e.n = 9;
                  break;
                case 8:
                  e.p = 8, t = e.v, n("error", t.message || (0, b.__)("Failed to delete category", "ohmylms"));
                case 9:
                  return e.p = 9, N(!1), e.f(9);
                case 10:
                  return e.a(2);
              }
            }, e, null, [[3, 8, 9, 10]]);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
        K = (0, g.useMemo)(function () {
          return o.filter(function (e) {
            var t;
            return null == e || null === (t = e.name) || void 0 === t ? void 0 : t.toLowerCase().includes(m.toLowerCase());
          });
        }, [o, m]),
        J = (0, g.useMemo)(function () {
          return {
            selectedRowKeys: W,
            onChange: B
          };
        }, [W]),
        X = (0, g.useMemo)(function () {
          return {
            label: (0, b.__)("Add Category", "ohmylms"),
            onClick: U
          };
        }, [U]),
        ee = (0, g.useMemo)(function () {
          return [{
            label: (0, b.__)("Delete", "ohmylms"),
            value: "delete",
            action: function () {
              E(!0);
            }
          }];
        }, []),
        te = [{
          title: (0, b.__)("ID", "ohmylms"),
          dataIndex: "term_id",
          key: "term_id",
          width: "80px",
          render: function (e) {
            return React.createElement(I.BadgeWP, {
              variant: "secondary",
              isBorderLess: !0
            }, e);
          }
        }, {
          title: (0, b.__)("Name", "ohmylms"),
          dataIndex: "name",
          key: "name",
          render: function (e, t) {
            var n;
            return React.createElement("div", null, React.createElement("span", {
              style: {
                fontWeight: 500
              }
            }, e), t.parent > 0 && React.createElement("div", {
              style: {
                fontSize: "12px",
                color: "#666",
                marginTop: "4px"
              }
            }, (0, b.__)("Parent: ", "ohmylms"), (null === (n = o.find(function (e) {
              return e.term_id === t.parent;
            })) || void 0 === n ? void 0 : n.name) || "—"));
          }
        }, {
          title: (0, b.__)("No. of Courses", "ohmylms"),
          dataIndex: "count",
          key: "count",
          width: "150px",
          render: function (e, t) {
            var n;
            return e && 0 !== e ? React.createElement(I.TooltipWP, {
              text: React.createElement("div", {
                style: {
                  maxWidth: "300px"
                }
              }, React.createElement("div", {
                style: {
                  fontWeight: "bold",
                  marginBottom: "8px"
                }
              }, (0, b.__)("Courses:", "ohmylms")), null === (n = t.courses) || void 0 === n ? void 0 : n.map(function (e) {
                return React.createElement("div", {
                  key: e.id,
                  style: {
                    padding: "4px 0"
                  }
                }, "• ", Ge(e.title));
              })),
              position: "top"
            }, React.createElement(I.BadgeWP, {
              variant: "secondary",
              isBorderLess: !0
            }, e)) : React.createElement(I.BadgeWP, {
              variant: "secondary",
              isBorderLess: !0
            }, "0");
          }
        }, {
          title: (0, b.__)("Actions", "ohmylms"),
          dataIndex: "action",
          key: "action",
          width: "100px",
          render: function (e, t) {
            return React.createElement(I.DropdownMenuWP, {
              controls: [{
                title: (0, b.__)("Edit", "ohmylms"),
                onClick: function () {
                  return Y(t);
                },
                icon: React.createElement("span", null, React.createElement(pG.A, null))
              }, {
                title: (0, b.__)("Delete", "ohmylms"),
                onClick: function () {
                  return Q(t);
                },
                icon: React.createElement(We, null)
              }],
              icon: React.createElement(q.Icon, {
                icon: Ne.A
              })
            });
          }
        }];
      return React.createElement(React.Fragment, null, r, React.createElement(I.ContainerWP, null, React.createElement(YG, {
        title: (0, b.__)("Categories", "ohmylms"),
        showAddButton: !0,
        addButtonConfig: X
      }), React.createElement(Ea, {
        isBorderless: !0,
        minHeight: "calc(100vh - 200px)"
      }, React.createElement(I.SpacerWP, {
        padding: 5
      }, W.length > 0 ? React.createElement(hN, {
        items: W,
        setItems: B,
        bulksActions: ee
      }) : React.createElement(aY, {
        handleSearch: G,
        showFilterByDays: !1,
        showFilterByStatus: !1,
        showFilterByCategory: !1,
        showTotalItemsCount: !1,
        searchPlaceholder: (0, b.__)("Search categories...", "ohmylms")
      }), React.createElement(sN.A, {
        rowKey: "term_id",
        columns: te,
        dataSource: K || [],
        rowSelection: J,
        pagination: !1,
        loading: u,
        scroll: {
          x: "max-content"
        },
        onRowMouseEnter: function (e) {
          return V(null == e ? void 0 : e.term_id);
        },
        onRowMouseLeave: function () {
          return V(null);
        },
        locale: {
          emptyText: React.createElement(uf, {
            icon: React.createElement(df, null),
            title: (0, b.__)("No categories yet!", "ohmylms"),
            description: (0, b.__)("Create your first category and it will show up here.", "ohmylms"),
            ctaText: (0, b.__)("Add Category", "ohmylms"),
            ctaHandler: U
          })
        }
      })))), v && React.createElement(xY, {
        isOpen: v,
        onClose: function () {
          h(!1), x(null);
        },
        onSubmit: Z,
        title: R ? (0, b.__)("Edit Category", "ohmylms") : (0, b.__)("Add Category", "ohmylms"),
        type: "category",
        initialData: R,
        categories: o,
        isSubmitting: j
      }), w && React.createElement(Ie, {
        isOpen: w,
        onClose: function () {
          E(!1), O(null);
        },
        onDelete: $,
        title: (0, b.__)("Delete Category", "ohmylms"),
        description: (null == P ? void 0 : P.count) > 0 ? (0, b.__)("This category is assigned to courses. Deleting it will remove the category from those courses. Are you sure you want to continue?", "ohmylms") : W.length > 0 ? (0, b.__)("Are you sure you want to delete the selected categories?", "ohmylms") : (0, b.__)("Are you sure you want to delete this category?", "ohmylms"),
        actionBtnText: (0, b.__)("Delete", "ohmylms"),
        loading: F,
        isDelete: !0
      }));
    }
  }, {
    path: "/tags",
    element: function () {
      HG("ohmylms", "tags");
      var e = (0, z.A)(),
        t = e.openNotificationWithIcon,
        n = e.contextHolder,
        r = BY((0, g.useState)([]), 2),
        a = r[0],
        o = r[1],
        i = BY((0, g.useState)(!0), 2),
        c = i[0],
        u = i[1],
        s = BY((0, g.useState)(""), 2),
        d = s[0],
        m = s[1],
        p = BY((0, g.useState)(!1), 2),
        f = p[0],
        v = p[1],
        h = BY((0, g.useState)(!1), 2),
        y = h[0],
        _ = h[1],
        w = BY((0, g.useState)(null), 2),
        E = w[0],
        S = w[1],
        R = BY((0, g.useState)(null), 2),
        x = R[0],
        C = R[1],
        P = BY((0, g.useState)(!1), 2),
        O = P[0],
        k = P[1],
        j = BY((0, g.useState)(!1), 2),
        A = j[0],
        M = j[1],
        T = BY((0, g.useState)([]), 2),
        F = T[0],
        N = T[1],
        D = BY((0, g.useState)(null), 2),
        W = (D[0], D[1]),
        B = (0, g.useCallback)(zY(NY().m(function e() {
          var n;
          return NY().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return u(!0), e.p = 1, e.n = 2, l()({
                  path: "/ohmylms/v1/tags"
                });
              case 2:
                n = e.v, o(n || []), e.n = 4;
                break;
              case 3:
                e.p = 3, e.v, t("error", (0, b.__)("Failed to load tags", "ohmylms"));
              case 4:
                return e.p = 4, u(!1), e.f(4);
              case 5:
                return e.a(2);
            }
          }, e, null, [[1, 3, 4, 5]]);
        })), []);
      (0, g.useEffect)(function () {
        B();
      }, [B]);
      var L = (0, g.useCallback)(function (e) {
          m(e);
        }, []),
        V = (0, g.useCallback)(function () {
          S(null), v(!0);
        }, []),
        H = (0, g.useCallback)(function (e) {
          S(e), v(!0);
        }, []),
        G = (0, g.useCallback)(function (e) {
          C(e), _(!0);
        }, []),
        U = function () {
          var e = zY(NY().m(function e(n) {
            var r;
            return NY().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if (k(!0), e.p = 1, !E) {
                    e.n = 3;
                    break;
                  }
                  return e.n = 2, l()({
                    path: "/ohmylms/v1/tags/".concat(E.term_id),
                    method: "PUT",
                    data: {
                      name: n.name
                    }
                  });
                case 2:
                  t("success", (0, b.__)("Tag updated successfully", "ohmylms")), e.n = 5;
                  break;
                case 3:
                  return e.n = 4, l()({
                    path: "/ohmylms/v1/tags",
                    method: "POST",
                    data: {
                      name: n.name
                    }
                  });
                case 4:
                  t("success", (0, b.__)("Tag created successfully", "ohmylms"));
                case 5:
                  v(!1), S(null), B(), e.n = 7;
                  break;
                case 6:
                  e.p = 6, r = e.v, t("error", r.message || (0, b.__)("Failed to save tag", "ohmylms"));
                case 7:
                  return e.p = 7, k(!1), e.f(7);
                case 8:
                  return e.a(2);
              }
            }, e, null, [[1, 6, 7, 8]]);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
        Y = function () {
          var e = zY(NY().m(function e() {
            var n;
            return NY().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if (x || 0 !== F.length) {
                    e.n = 1;
                    break;
                  }
                  return e.a(2);
                case 1:
                  if (!A) {
                    e.n = 2;
                    break;
                  }
                  return e.a(2);
                case 2:
                  if (M(!0), e.p = 3, !x) {
                    e.n = 5;
                    break;
                  }
                  return e.n = 4, l()({
                    path: "/ohmylms/v1/tags/".concat(x.term_id),
                    method: "DELETE"
                  });
                case 4:
                  t("success", (0, b.__)("Tag deleted successfully", "ohmylms")), e.n = 7;
                  break;
                case 5:
                  return e.n = 6, l()({
                    path: "/ohmylms/v1/tags/bulk",
                    method: "DELETE",
                    data: {
                      ids: F
                    },
                    headers: {
                      "Content-Type": "application/json"
                    }
                  });
                case 6:
                  t("success", (0, b.__)("Tags deleted successfully", "ohmylms")), N([]);
                case 7:
                  _(!1), C(null), B(), e.n = 9;
                  break;
                case 8:
                  e.p = 8, n = e.v, t("error", n.message || (0, b.__)("Failed to delete tag", "ohmylms"));
                case 9:
                  return e.p = 9, M(!1), e.f(9);
                case 10:
                  return e.a(2);
              }
            }, e, null, [[3, 8, 9, 10]]);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
        Q = (0, g.useMemo)(function () {
          return a.filter(function (e) {
            var t;
            return null == e || null === (t = e.name) || void 0 === t ? void 0 : t.toLowerCase().includes(d.toLowerCase());
          });
        }, [a, d]),
        Z = (0, g.useMemo)(function () {
          return {
            selectedRowKeys: F,
            onChange: N
          };
        }, [F]),
        $ = (0, g.useMemo)(function () {
          return {
            label: (0, b.__)("Add Tag", "ohmylms"),
            onClick: V
          };
        }, [V]),
        K = (0, g.useMemo)(function () {
          return [{
            label: (0, b.__)("Delete", "ohmylms"),
            value: "delete",
            action: function () {
              _(!0);
            }
          }];
        }, []),
        J = [{
          title: (0, b.__)("ID", "ohmylms"),
          dataIndex: "term_id",
          key: "term_id",
          width: "80px",
          render: function (e) {
            return React.createElement(I.BadgeWP, {
              variant: "secondary",
              isBorderLess: !0
            }, e);
          }
        }, {
          title: (0, b.__)("Name", "ohmylms"),
          dataIndex: "name",
          key: "name",
          render: function (e) {
            return React.createElement("span", {
              style: {
                fontWeight: 500
              }
            }, e);
          }
        }, {
          title: (0, b.__)("No. of Courses", "ohmylms"),
          dataIndex: "count",
          key: "count",
          width: "150px",
          render: function (e, t) {
            var n;
            return e && 0 !== e ? React.createElement(I.TooltipWP, {
              text: React.createElement("div", {
                style: {
                  maxWidth: "300px"
                }
              }, React.createElement("div", {
                style: {
                  fontWeight: "bold",
                  marginBottom: "8px"
                }
              }, (0, b.__)("Courses:", "ohmylms")), null === (n = t.courses) || void 0 === n ? void 0 : n.map(function (e) {
                return React.createElement("div", {
                  key: e.id,
                  style: {
                    padding: "4px 0"
                  }
                }, "• ", Ge(e.title));
              })),
              position: "top"
            }, React.createElement(I.BadgeWP, {
              variant: "secondary",
              isBorderLess: !0
            }, e)) : React.createElement(I.BadgeWP, {
              variant: "secondary",
              isBorderLess: !0
            }, "0");
          }
        }, {
          title: (0, b.__)("Actions", "ohmylms"),
          dataIndex: "action",
          key: "action",
          width: "100px",
          render: function (e, t) {
            return React.createElement(I.DropdownMenuWP, {
              controls: [{
                title: (0, b.__)("Edit", "ohmylms"),
                onClick: function () {
                  return H(t);
                },
                icon: React.createElement("span", null, React.createElement(pG.A, null))
              }, {
                title: (0, b.__)("Delete", "ohmylms"),
                onClick: function () {
                  return G(t);
                },
                icon: React.createElement(We, null)
              }],
              icon: React.createElement(q.Icon, {
                icon: Ne.A
              })
            });
          }
        }];
      return React.createElement(React.Fragment, null, n, React.createElement(I.ContainerWP, null, React.createElement(YG, {
        title: (0, b.__)("Tags", "ohmylms"),
        showAddButton: !0,
        addButtonConfig: $
      }), React.createElement(Ea, {
        isBorderless: !0,
        minHeight: "calc(100vh - 200px)"
      }, React.createElement(I.SpacerWP, {
        padding: 5
      }, F.length > 0 ? React.createElement(hN, {
        items: F,
        setItems: N,
        bulksActions: K
      }) : React.createElement(aY, {
        handleSearch: L,
        showFilterByDays: !1,
        showFilterByStatus: !1,
        showFilterByCategory: !1,
        showTotalItemsCount: !1,
        searchPlaceholder: (0, b.__)("Search tags...", "ohmylms")
      }), React.createElement(sN.A, {
        rowKey: "term_id",
        columns: J,
        dataSource: Q || [],
        rowSelection: Z,
        pagination: !1,
        loading: c,
        scroll: {
          x: "max-content"
        },
        onRowMouseEnter: function (e) {
          return W(null == e ? void 0 : e.term_id);
        },
        onRowMouseLeave: function () {
          return W(null);
        },
        locale: {
          emptyText: React.createElement(uf, {
            icon: React.createElement(df, null),
            title: (0, b.__)("No tags yet!", "ohmylms"),
            description: (0, b.__)("Create your first tag and it will show up here.", "ohmylms"),
            ctaText: (0, b.__)("Add Tag", "ohmylms"),
            ctaHandler: V
          })
        }
      })))), f && React.createElement(xY, {
        isOpen: f,
        onClose: function () {
          v(!1), S(null);
        },
        onSubmit: U,
        title: E ? (0, b.__)("Edit Tag", "ohmylms") : (0, b.__)("Add Tag", "ohmylms"),
        type: "tag",
        initialData: E,
        isSubmitting: O
      }), y && React.createElement(Ie, {
        isOpen: y,
        onClose: function () {
          _(!1), C(null);
        },
        onDelete: Y,
        title: (0, b.__)("Delete Tag", "ohmylms"),
        description: (null == x ? void 0 : x.count) > 0 ? (0, b.__)("This tag is assigned to courses. Deleting it will remove the tag from those courses. Are you sure you want to continue?", "ohmylms") : F.length > 0 ? (0, b.__)("Are you sure you want to delete the selected tags?", "ohmylms") : (0, b.__)("Are you sure you want to delete this tag?", "ohmylms"),
        actionBtnText: (0, b.__)("Delete", "ohmylms"),
        loading: A,
        isDelete: !0
      }));
    }
  }, {
    path: "/orders",
    element: KY
  }, {
    path: "/orders/:page",
    element: KY
  }, {
    path: "/subscriptions",
    element: UQ
  }, {
    path: "/subscriptions/:page",
    element: UQ
  }, {
    path: "/subscription-edit/:id",
    element: cZ
  }, {
    path: "/order-edit/:id",
    element: function () {
      HG("ohmylms", "orders");
      var e = (0, f.g)().id;
      return React.createElement(FQ, {
        id: e
      });
    }
  }, {
    path: "/quizzes",
    element: function () {
      return HG("ohmylms", "quizzes"), React.createElement(React.Fragment, null, React.createElement(EZ, null));
    }
  }, {
    path: "/sessions",
    element: function () {
      return HG("ohmylms", "sessions"), React.createElement(React.Fragment, null, React.createElement(OZ, null));
    }
  }, {
    path: "/lesson-edit/:id",
    element: function () {
      HG("ohmylms", "lessons");
      var e = (0, f.g)().id,
        t = (0, y.useDispatch)(T.default).setSelectedLessonId;
      return (0, g.useEffect)(function () {
        t(e);
      }, [e]), React.createElement(Xr, {
        id: e
      });
    }
  }, {
    path: "/quiz-edit/:id",
    element: AZ
  }, {
    path: "/students/:id/report",
    element: qZ
  }, {
    path: "/quiz-report/:id",
    element: t$
  }, {
    path: "/quiz-report/:id/grade-quiz/:quizId",
    element: G$
  }, {
    path: "/assignment-report/:id",
    element: K$
  }, {
    path: "/assignment-report/:id/grade-assignment/:assignmentId",
    element: vK
  }, {
    path: "/earnings-report",
    element: zq
  }, {
    path: "/integrations",
    element: q7
  }, {
    path: "/settings/:tab/:subTab?/:subPanel?",
    element: M6
  }, {
    path: "/memberships",
    element: J8
  }, {
    path: "/accounthub",
    element: s9
  }, {
    path: "/communities",
    element: q9
  }, {
    path: "/emails",
    element: P4
  }, {
    path: "/emails/:id",
    element: Qee
  }, {
    path: "/webhooks",
    element: o4
  }, {
    path: "/certificates",
    element: yte
  }, {
    path: "/certificate-edit/:id",
    element: Rte
  }, {
    path: "/assignments",
    element: function () {
      return HG("ohmylms", "assignments"), React.createElement(React.Fragment, null, React.createElement(Fte, null));
    }
  }, {
    path: "/assignment-edit/:id",
    element: function () {
      HG("ohmylms", "assignments");
      var e = (0, f.g)().id,
        t = (0, y.useDispatch)(T.default).setSelectedAssignmentId;
      return (0, g.useEffect)(function () {
        t(e);
      }, [e]), h().createElement(h().Fragment, null, h().createElement(Ja, {
        id: e
      }));
    }
  }, {
    path: "/setup-wizard/:tab?",
    element: wre
  }, {
    path: "/coupons",
    element: qre
  }, {
    path: "/ai-course-outline-gen",
    element: Qae
  }, {
    path: "/gamification/:tab",
    element: C5
  }],
  loe = function (e) {
    var t,
      n,
      r = e.children,
      a = (0, g.useRef)(null),
      o = (0, f.zy)(),
      i = ["/courses", "/course-create", "/course-edit", "/lesson-create", "/lesson-edit", "/quiz-report", "/quiz-edit", "/assignment-edit", "/assignment-report", "/certificate-edit", "/setup-wizard", "/automation-canvas"].some(function (e) {
        return o.pathname.startsWith(e);
      });
    return React.createElement(React.Fragment, null, i ? React.createElement(React.Fragment, null, React.createElement("div", {
      className: "app-container no-layout ".concat(null === (t = o.pathname) || void 0 === t ? void 0 : t.split("/")[1])
    }, React.createElement("div", {
      className: "app-content"
    }, r))) : React.createElement(React.Fragment, null, React.createElement("div", {
      className: "ohmylms-layout ohmylms-dashboard-layout ".concat(null === (n = o.pathname) || void 0 === n ? void 0 : n.split("/")[1])
    }, React.createElement("div", {
      ref: a,
      id: "ohmylms-layout-content",
      className: "ohmylms-layout-content"
    }, React.createElement("div", {
      className: "ohmylms-content ohmylms-container-header-fullwidth"
    }, r)))));
  };
