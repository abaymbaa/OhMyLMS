// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Hre = function () {
  var e = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    n = Bre((0, g.useState)(!1), 2),
    r = n[0],
    a = n[1],
    o = Bre((0, g.useState)(null), 2),
    i = o[0],
    c = o[1],
    u = Bre((0, g.useState)([]), 2),
    s = u[0],
    d = u[1],
    m = Bre((0, g.useState)(!1), 2),
    p = m[0],
    f = m[1],
    h = Bre((0, g.useState)(!1), 2),
    _ = h[0],
    w = h[1],
    E = Bre((0, g.useState)(""), 2),
    S = E[0],
    R = E[1],
    x = Bre((0, g.useState)([]), 2),
    C = x[0],
    P = x[1],
    O = Bre((0, g.useState)([]), 2),
    k = O[0],
    j = (O[1], Bre((0, g.useState)(!1), 2)),
    A = j[0],
    M = j[1],
    F = Bre((0, g.useState)(null), 2),
    N = F[0],
    D = F[1],
    W = Bre((0, g.useState)(1), 2),
    B = W[0],
    L = W[1],
    V = Bre((0, g.useState)(0), 2),
    H = V[0],
    G = V[1],
    U = Bre((0, g.useState)(!1), 2),
    Y = U[0],
    Q = U[1],
    Z = (0, z.A)(),
    $ = Z.openNotificationWithIcon,
    K = Z.contextHolder,
    J = (0, g.useCallback)(function (e, t) {
      var n = e.target.checked;
      d(function (e) {
        return n ? [].concat(zre(e), [t]) : e.filter(function (e) {
          return e !== t;
        });
      });
    }, []),
    X = (0, g.useCallback)(function (e) {
      var t = e.target.checked;
      d(t ? C.map(function (e) {
        return e.id;
      }) : []);
    }, [C]),
    ee = (0, g.useMemo)(function () {
      return [{
        title: (0, b.__)("Name", "ohmylms"),
        key: "title",
        dataIndex: "title",
        width: "20%",
        render: function (e, t) {
          return React.createElement(v.Link, {
            to: "#",
            onClick: function () {
              return ae(t);
            },
            className: "omlms-coupon-title"
          }, Ge(e) || "N/A");
        }
      }, {
        title: (0, b.__)("Status", "ohmylms"),
        key: "status",
        dataIndex: "status",
        width: "10%",
        render: function (e, t) {
          return React.createElement(I.SwitchWP, {
            checked: "publish" === e,
            onChange: function (e) {
              return le(Dre(Dre({}, t), {}, {
                status: e ? "publish" : "draft"
              }));
            }
          });
        }
      }, {
        title: (0, b.__)("Code", "ohmylms"),
        key: "code",
        dataIndex: "code",
        width: "15%",
        render: function (e) {
          return React.createElement(I.SpacerWP, {
            marginBottom: 0,
            className: "omlms-coupon-code"
          }, React.createElement(I.TagWP, {
            style: Wre(Wre({
              fontSize: "12px",
              color: "#6E42D3",
              fontWeight: 500,
              lineHeight: "1.2",
              padding: "6px 12px 5px",
              backgroundColor: "#F4F5F7"
            }, "color", "#000D25"), "borderRadius", "50px")
          }, e || "N/A", React.createElement(I.CopyToClipboard, {
            textToCopy: e
          })));
        }
      }, {
        title: (0, b.__)("Amount", "ohmylms"),
        key: "amount",
        dataIndex: "amount",
        width: "10%",
        render: function (e, t) {
          return "percent" === t.discount_type ? "".concat(Math.round(e), "%") : void 0 !== e ? OQ(e, !0) : "N/A";
        }
      }, {
        title: (0, b.__)("Uses/Limit", "ohmylms"),
        key: "uses_limit",
        width: "10%",
        render: function (e, t) {
          var n = void 0 !== t.usage_count ? t.usage_count : "0",
            r = t.usage_limit || (0, b.__)("∞", "ohmylms");
          return "".concat(n, "/").concat(r);
        }
      }, {
        title: (0, b.__)("Start Date", "ohmylms"),
        key: "date_start",
        dataIndex: "date_start",
        width: "10%",
        render: function (e) {
          return aN()(e.date).format("MMMM DD, YYYY h:mm a") || (0, b.__)("Never", "ohmylms");
        }
      }, {
        title: (0, b.__)("End Date", "ohmylms"),
        key: "date_expires",
        dataIndex: "date_expires",
        width: "10%",
        render: function (e) {
          return aN()(e.date).format("MMMM DD, YYYY h:mm a") || (0, b.__)("Never", "ohmylms");
        }
      }, {
        title: (0, b.__)("Actions", "ohmylms"),
        key: "actions",
        width: "10%",
        render: function (e, t) {
          return React.createElement(React.Fragment, null, React.createElement(I.DropdownMenuWP, {
            controls: [{
              title: (0, b.__)("Edit", "ohmylms"),
              onClick: function () {
                return ae(t);
              },
              icon: React.createElement("span", null, React.createElement(pG.A, null))
            }, {
              title: (0, b.__)("Delete", "ohmylms"),
              onClick: function () {
                return ne(null == t ? void 0 : t.id);
              },
              icon: React.createElement("span", null, React.createElement(We, null))
            }],
            icon: React.createElement(q.Icon, {
              icon: Ne.A
            })
          }));
        }
      }];
    }, [C, s, J, X, ae, ne]),
    te = (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("Delete", "ohmylms"),
        value: "delete",
        action: function () {
          a(!0);
        }
      }];
    }, []),
    ne = (0, g.useCallback)(function (e) {
      a(!0), c(e);
    }, []),
    re = (0, g.useCallback)(function () {
      a(!1);
    }, []),
    ae = (0, g.useCallback)(function (e) {
      D(e), f(!0);
    }, []),
    oe = function () {
      var e = Fre(Mre().m(function e(t) {
        var n, r, a;
        return Mre().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, e.n = 1, l()({
                path: "/creator-lms/v1/courses?search=".concat(t),
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 1:
              return n = e.v, r = n.map(function (e) {
                return {
                  value: null == e ? void 0 : e.id,
                  label: null == e ? void 0 : e.name
                };
              }), e.a(2, r);
            case 2:
              e.p = 2, a = e.v, console.error(a);
            case 3:
              return e.a(2);
          }
        }, e, null, [[0, 2]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    ie = function () {
      var e = Fre(Mre().m(function e(t) {
        var n, r, a, o;
        return Mre().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, n = "/cx-ecommerce/v1/coupons", null != t && t.id && (n = "/cx-ecommerce/v1/coupons/".concat(t.id)), e.n = 1, l()({
                path: (0, lN.addQueryArgs)(n),
                method: null != t && t.id ? "PUT" : "POST",
                data: t
              });
            case 1:
              r = e.v, a = C.map(function (e) {
                return (null == e ? void 0 : e.id) === (null == r ? void 0 : r.id) ? r : e;
              }), P(a), $("success", (0, b.__)("Coupon ".concat(null != t && t.id ? "updated" : "created", " successfully."), "ohmylms")), f(!1), D(null), 1 === B ? ce() : L(1), e.n = 3;
              break;
            case 2:
              e.p = 2, o = e.v, console.error(o), "creator_lms_rest_coupon_code_already_exists" === (null == o ? void 0 : o.code) ? $("error", null == o ? void 0 : o.message) : $("error", (0, b.__)("Something went wrong!", "ohmylms"));
            case 3:
              return e.a(2);
          }
        }, e, null, [[0, 2]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    le = function () {
      var e = Fre(Mre().m(function e(t) {
        var n, r, a, o;
        return Mre().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, n = "/cx-ecommerce/v1/coupons/".concat(t.id, "/status"), e.n = 1, l()({
                path: (0, lN.addQueryArgs)(n),
                method: "PUT",
                data: {
                  status: (null == t ? void 0 : t.status) || "draft"
                },
                status: (null == t ? void 0 : t.status) || "draft"
              });
            case 1:
              r = e.v, a = C.map(function (e) {
                return (null == e ? void 0 : e.id) === (null == r ? void 0 : r.id) ? r : e;
              }), P(a), $("success", (0, b.__)("Coupon ".concat("publish" === (null == t ? void 0 : t.status) ? "enabled" : "disabled", " successfully."), "ohmylms")), e.n = 3;
              break;
            case 2:
              e.p = 2, o = e.v, console.error(o), $("error", (0, b.__)("Something went wrong!", "ohmylms"));
            case 3:
              return e.a(2);
          }
        }, e, null, [[0, 2]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    ce = function () {
      var e = Fre(Mre().m(function e(t) {
        var n, r, a, o, i;
        return Mre().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, M(!0), n = {
                offset: 5 * (B - 1),
                page: B,
                per_page: 6,
                search: S
              }, e.n = 1, l()({
                path: (0, lN.addQueryArgs)("/cx-ecommerce/v1/coupons", n),
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                },
                parse: !1
              });
            case 1:
              return r = e.v, a = r.headers.get("X-WP-Total"), e.n = 2, r.json();
            case 2:
              o = e.v, P(o), G(a), e.n = 4;
              break;
            case 3:
              e.p = 3, i = e.v, console.error(i);
            case 4:
              return e.p = 4, M(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[0, 3, 4, 5]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    ue = function () {
      var e = Fre(Mre().m(function e() {
        var t, n, r, o;
        return Mre().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (!Y) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, Q(!0), t = [], t = i ? [i] : zre(s), e.n = 2, l()({
                path: "cx-ecommerce/v1/coupons/",
                method: "DELETE",
                data: {
                  ids: t
                }
              });
            case 2:
              null != (n = e.v) && n.deleted && ($("success", (0, b.__)("Deleted Successfully", "ohmylms")), r = C.filter(function (e) {
                return !t.includes(null == e ? void 0 : e.id);
              }), P(r)), e.n = 4;
              break;
            case 3:
              e.p = 3, o = e.v, console.error(o), $("error", (0, b.__)("Something went wrong!", "ohmylms"));
            case 4:
              return e.p = 4, Q(!1), a(!1), c(null), d([]), 1 === B ? ce() : L(1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && ce(S), function () {
      e = !1;
    };
  }, [S, B]), (0, g.useEffect)(function () {
    !A && e && $(t, e);
  }, [e]), React.createElement(React.Fragment, null, K, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    margin: 0,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    justify: "space-between",
    align: "center",
    gap: "4"
  }, React.createElement(I.FlexItemWP, null, s.length > 0 ? React.createElement(hN, {
    items: s,
    setItems: d,
    bulksActions: te,
    spacerMarginBottom: 0
  }) : React.createElement(aY, {
    handleSearch: function (e) {
      R(e), L(1);
    },
    searchPlaceholder: (0, b.__)("Search coupon", "ohmylms"),
    showFilterByDays: !1,
    showFilterByPriceType: !1,
    showFilterByCategory: !1,
    showFilterByStatus: !1,
    spacerMarginBottom: 0
  })), React.createElement(I.FlexItemWP, null, React.createElement(I.ButtonWP, {
    variant: "primary",
    icon: React.createElement(nf, null),
    onClick: function () {
      f(!0);
    }
  }, (0, b.__)("Create Coupon", "ohmylms")))), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), A ? React.createElement(React.Fragment, null, React.createElement(I.SkeletonWP, {
    active: !0,
    rows: 5
  })) : React.createElement(React.Fragment, null, React.createElement(I.TableWP, {
    columns: ee,
    dataSource: C,
    rowKey: "id",
    rowSelection: {
      selectedRowKeys: s,
      onChange: function (e) {
        return d(e);
      }
    },
    loading: A,
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No Coupons Found!", "ohmylms"),
        description: S ? (0, b.__)("Try a different search term.", "ohmylms") : (0, b.__)("Create your first coupon to see it listed here.", "ohmylms")
      })
    }
  }), !A && Number(H) > 6 && React.createElement(fN, {
    total: Number(H),
    currentPage: B,
    onPageChange: L,
    perPage: 6
  })))), r && React.createElement(Ie, {
    title: s.length > 1 ? (0, b.__)("Delete Coupons", "ohmylms") : (0, b.__)("Delete Coupon", "ohmylms"),
    description: s.length > 1 ? (0, b.__)("After deleting these coupons, they will be moved to the trash.", "ohmylms") : (0, b.__)("After deleting this coupon, it will be moved to the trash.", "ohmylms"),
    onClose: re,
    onDelete: ue,
    isOpen: r,
    isDelete: !0,
    isLoading: Y
  }), p && React.createElement(jre, {
    isOpen: p,
    setIsOpen: f,
    isFetch: _,
    setIsFetch: w,
    fetchCourses: oe,
    courses: k,
    setCoupons: P,
    createCoupon: ie,
    data: N,
    setSelectedData: D
  }));
};

const Gre = (0, g.memo)(Hre);
