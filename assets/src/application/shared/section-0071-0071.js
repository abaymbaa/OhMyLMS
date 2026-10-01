// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function yT(e) {
  var t,
    n,
    r,
    a,
    o,
    i,
    l,
    c,
    u,
    s,
    d,
    m,
    p,
    f,
    v,
    _,
    w,
    E,
    S,
    R,
    x,
    C,
    P,
    O,
    k,
    j,
    A,
    M,
    T,
    I,
    F,
    N,
    D,
    W,
    z,
    B,
    L,
    V,
    H,
    G,
    U,
    Y,
    Q,
    Z,
    $,
    K,
    J,
    X = e.value,
    ee = e.valueKey,
    te = e.index,
    ne = vT((0, g.useState)(""), 2),
    re = ne[0],
    ae = ne[1],
    oe = (0, g.useRef)(null),
    ie = (0, g.useRef)(null),
    le = vT((0, g.useState)(!1), 2),
    ce = le[0],
    ue = le[1],
    se = vT((0, g.useState)(!1), 2),
    de = se[0],
    me = se[1],
    pe = (0, y.useSelect)(function (e) {
      return {
        automationData: e(Lf).getAutomationData(),
        selectedStep: e(Lf).getSelectedStep(),
        selectedStepIndex: e(Lf).getSelectedStepIndex(),
        selectedStepCondition: e(Lf).getSelectedStepCondition(),
        selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
        errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
      };
    }, []),
    fe = pe.automationData,
    ve = pe.selectedStep,
    ge = pe.selectedStepIndex,
    he = pe.selectedStepCondition,
    ye = pe.selectedLogicalStepIndex,
    be = (pe.errors, fe.trigger_name, (0, y.useDispatch)(Lf).setAtMostDate);
  var _e = uT,
    we = vT((0, g.useState)(""), 2),
    Ee = (we[0], we[1]),
    Se = vT((0, g.useState)(""), 2),
    Re = Se[0],
    xe = Se[1],
    Ce = vT((0, g.useState)([]), 2),
    Pe = Ce[0],
    Oe = Ce[1],
    ke = vT((0, g.useState)([]), 2),
    je = ke[0],
    Ae = ke[1],
    Me = vT((0, g.useState)(""), 2),
    Te = Me[0],
    Ie = Me[1],
    Fe = vT((0, g.useState)(""), 2),
    Ne = Fe[0],
    De = Fe[1];
  (0, g.useEffect)(function () {
    var e, t, n, r, a;
    Ee(null === (e = X[te]) || void 0 === e ? void 0 : e.name), xe(null === (t = X[te]) || void 0 === t ? void 0 : t.param), Ie(null === (n = X[te]) || void 0 === n ? void 0 : n.actionType), De(null === (r = X[te]) || void 0 === r ? void 0 : r.condition_value);
    var o = _e.find(function (e) {
        var t;
        return (null == e ? void 0 : e.action) === (null === (t = X[te]) || void 0 === t ? void 0 : t.action);
      }),
      i = null == o || null === (a = o.values) || void 0 === a ? void 0 : a.find(function (e) {
        var t;
        return (null == e ? void 0 : e.param) === (null === (t = X[te]) || void 0 === t ? void 0 : t.param);
      });
    if (i) {
      var l;
      Oe(null == i ? void 0 : i.conditions), Ae(null == i ? void 0 : i.options);
      var c = null == i || null === (l = i.conditions) || void 0 === l ? void 0 : l.find(function (e) {
        var t;
        return (null == e ? void 0 : e.condition_value) === (null === (t = X[te]) || void 0 === t ? void 0 : t.condition_value);
      });
      Ie(null == c ? void 0 : c.actionType), De(null == c ? void 0 : c.condition_value);
    }
  }, [X]), (0, g.useEffect)(function () {
    ae("");
  }, [ve]);
  var We = function (e, t) {
    var n,
      r,
      a,
      o = null === (n = ve.settings) || void 0 === n ? void 0 : n.rules.condition.map(function (e) {
        return e.map(function (e) {
          return e;
        });
      });
    if (e > -1 && t > -1 && (o[e].splice(t, 1), 0 == o[e].length && o.splice(e, 1), (0, y.dispatch)(Lf).updateStepArgs(ge, he, ye, "rules", "condition", o)), o[e].length > 0) {
      var i = function (e) {
          e = JSON.stringify(e);
          var t,
            n = [],
            r = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/,
            a = function (e) {
              var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (!t) {
                if (Array.isArray(e) || (t = gT(e))) {
                  t && (e = t);
                  var n = 0,
                    r = function () {};
                  return {
                    s: r,
                    n: function () {
                      return n >= e.length ? {
                        done: !0
                      } : {
                        done: !1,
                        value: e[n++]
                      };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: r
                  };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var a,
                o = !0,
                i = !1;
              return {
                s: function () {
                  t = t.call(e);
                },
                n: function () {
                  var e = t.next();
                  return o = e.done, e;
                },
                e: function (e) {
                  i = !0, a = e;
                },
                f: function () {
                  try {
                    o || null == t.return || t.return();
                  } finally {
                    if (i) throw a;
                  }
                }
              };
            }(JSON.parse(e)[0]);
          try {
            for (a.s(); !(t = a.n()).done;) {
              var o = t.value;
              if (r.test(o.value)) {
                var i = new Date(o.value),
                  l = i.toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                  }),
                  c = i.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: !1
                  }),
                  u = "".concat(l, " - ").concat(c);
                n.push(u);
              }
            }
          } catch (e) {
            a.e(e);
          } finally {
            a.f();
          }
          return n;
        }(o),
        l = function (e, t, n) {
          return (t = function (e) {
            var t = function (e) {
              if ("object" != sT(e) || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var n = t.call(e, "string");
                if ("object" != sT(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            }(e);
            return "symbol" == sT(t) ? t : t + "";
          }(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }({}, (a = {
          atmostDate: (r = i, new Date(Math.max.apply(null, r.map(function (e) {
            return new Date(e.replace(/-/g, "/")).getTime();
          }))).toLocaleString("en-US", {
            timeZone: "UTC",
            hour12: !1
          })),
          step_id: ve.step_id,
          key: ve.key
        }).step_id, a.atmostDate);
      be(l, ve.step_id);
    }
  };
  (0, wy.useOutsideAlerter)(oe, ue), (0, wy.useOutsideAlerter)(ie, me);
  var ze = (0, g.useRef)(null),
    Be = (0, g.useRef)(null),
    Le = (0, g.useRef)(null),
    Ve = (0, g.useRef)(null),
    He = (0, g.useRef)(null),
    Ge = (0, g.useRef)(null),
    Ue = vT((0, g.useState)(!1), 2),
    qe = Ue[0],
    Ye = Ue[1],
    Qe = vT((0, g.useState)(!1), 2),
    Ze = Qe[0],
    $e = Qe[1],
    Ke = vT((0, g.useState)(!1), 2),
    Je = Ke[0],
    Xe = Ke[1],
    et = vT((0, g.useState)(!1), 2),
    tt = et[0],
    nt = et[1],
    rt = vT((0, g.useState)(!1), 2),
    at = rt[0],
    ot = rt[1],
    it = vT((0, g.useState)(!1), 2),
    lt = (it[0], it[1]),
    ct = vT((0, g.useState)([]), 2),
    ut = ct[0],
    st = ct[1],
    dt = vT((0, g.useState)([]), 2),
    mt = (dt[0], dt[1]),
    pt = vT((0, g.useState)([]), 2),
    ft = (pt[0], pt[1]),
    vt = vT((0, g.useState)([]), 2),
    gt = (vt[0], vt[1]),
    ht = vT((0, g.useState)([]), 2),
    yt = (ht[0], ht[1]),
    bt = vT((0, g.useState)("Please enter 3 or more characters"), 2),
    _t = bt[0],
    wt = bt[1],
    Et = vT((0, g.useState)([]), 2),
    St = Et[0],
    Rt = Et[1],
    xt = vT((0, g.useState)([]), 2),
    Ct = xt[0],
    Pt = xt[1],
    Ot = vT((0, g.useState)([]), 2),
    kt = Ot[0],
    jt = Ot[1],
    At = vT((0, g.useState)([]), 2),
    Mt = At[0],
    Tt = At[1],
    It = vT((0, g.useState)([]), 2),
    Ft = It[0],
    Nt = It[1],
    Dt = vT((0, g.useState)([]), 2),
    Wt = Dt[0],
    zt = Dt[1],
    Bt = vT((0, g.useState)([]), 2),
    Lt = Bt[0],
    Vt = Bt[1],
    Ht = vT((0, g.useState)([]), 2),
    Gt = Ht[0],
    Ut = Ht[1],
    qt = vT((0, g.useState)([]), 2),
    Yt = qt[0],
    Qt = qt[1],
    Zt = vT((0, g.useState)([]), 2),
    $t = Zt[0],
    Kt = Zt[1],
    Jt = vT((0, g.useState)([]), 2),
    Xt = Jt[0],
    en = Jt[1],
    tn = vT((0, g.useState)([]), 2),
    nn = tn[0],
    rn = tn[1],
    an = vT((0, g.useState)([]), 2),
    on = an[0],
    ln = an[1];
  (0, g.useEffect)(function () {
    var e,
      t = null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.countries.map(function (e) {
        return {
          id: e.code,
          title: e.title
        };
      });
    en(t);
  }, [null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.countries]);
  var cn = vT((0, g.useState)([]), 2),
    un = cn[0],
    sn = cn[1],
    dn = vT((0, g.useState)(), 2),
    mn = dn[0],
    pn = dn[1];
  (0, wy.useOutsideAlerter)(ze, Ye), (0, wy.useOutsideAlerter)(Be, $e), (0, wy.useOutsideAlerter)(Le, Xe), (0, wy.useOutsideAlerter)(Ve, nt), (0, wy.useOutsideAlerter)(He, ot), (0, wy.useOutsideAlerter)(Ge, lt), (0, g.useEffect)(function () {
    "list" === Re && Cy().then(function (e) {
      Qt(null == e ? void 0 : e.data);
    }), "tag" === Re && Ny().then(function (e) {
      Kt(e.data);
    }), "wp_user_role" === Re && WA().then(function (e) {
      var t = e.map(function (e) {
        return {
          id: null == e ? void 0 : e.role,
          title: null == e ? void 0 : e.name
        };
      });
      sn(t);
    });
  }, [Re]);
  var fn = function (e, t) {
      var n;
      e.stopPropagation();
      var r = null === (n = ve.settings) || void 0 === n ? void 0 : n.rules.condition.map(function (e, t) {
          return e;
        }),
        a = ut.findIndex(function (e) {
          return e.id == t;
        }),
        o = r[ee][te].segmentValue.findIndex(function (e) {
          return e.id === t;
        });
      0 <= o && (st(ut.filter(function (e) {
        return e.id !== t;
      })), r[ee][te].segmentValue.splice(o, 1), (0, y.dispatch)(Lf).updateStepArgs(ge, he, ye, "rules", "condition", r)), 0 <= a && st(ut.filter(function (e) {
        return e.id != t;
      })), (0, y.dispatch)(Lf).updateStepArgs(ge, he, ye, "rules", "condition", r);
    },
    vn = function (e, t, n) {
      var r,
        a = null === (r = ve.settings) || void 0 === r ? void 0 : r.rules.condition.map(function (e, t) {
          return e;
        });
      a[t][n].value = e.target.value, (0, y.dispatch)(Lf).updateStepArgs(ge, he, ye, "rules", "condition", a);
    },
    gn = function (e) {
      return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, _t));
    },
    hn = function (e, t) {
      var n,
        r = null === (n = ve.settings) || void 0 === n ? void 0 : n.rules.condition.map(function (e, t) {
          return e;
        });
      r[ee][te].value = e, (0, y.dispatch)(Lf).updateStepArgs(ge, he, ye, "rules", "condition", r);
    },
    yn = function () {
      var e = fT(dT().m(function e(t) {
        return dT().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 1;
                break;
              }
              return wt((0, b.__)("loading...", "mrm")), e.n = 1, Tg(t, "wc").then(function (e) {
                e.success && (0 === e.products.length ? wt((0, b.__)("No product found", "mrm")) : (Nt(e.products), wt((0, b.__)("Please enter 3 or more characters", "mrm"))));
              });
            case 1:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    bn = function (e, t) {
      var n,
        r = null === (n = ve.settings) || void 0 === n ? void 0 : n.rules.condition.map(function (e, t) {
          return e;
        });
      r[ee][te].value = e, (0, y.dispatch)(Lf).updateStepArgs(ge, he, ye, "rules", "condition", r);
    },
    _n = function () {
      var e = fT(dT().m(function e(t) {
        return dT().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 1;
                break;
              }
              return wt((0, b.__)("Fetching options...", "mrm")), e.n = 1, Fg(t, "wc").then(function (e) {
                e.success && (0 === e.category.length ? wt((0, b.__)("No category found", "mrm")) : (zt(e.category), wt((0, b.__)("Please enter 3 or more characters", "mrm"))));
              });
            case 1:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    wn = function (e, t) {
      var n,
        r = null === (n = ve.settings) || void 0 === n ? void 0 : n.rules.condition.map(function (e, t) {
          return e;
        });
      r[ee][te].value = e, (0, y.dispatch)(Lf).updateStepArgs(ge, he, ye, "rules", "condition", r);
    },
    En = function () {
      var e = fT(dT().m(function e(t) {
        return dT().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 1;
                break;
              }
              return wt((0, b.__)("Fetching options...", "mrm")), e.n = 1, Dg(t, "wc").then(function (e) {
                e.success && (0 === e.tags.length ? wt((0, b.__)("No tag found", "mrm")) : (Vt(e.tags), wt((0, b.__)("Please enter 3 or more characters", "mrm"))));
              });
            case 1:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    Sn = function (e, t) {
      var n,
        r = null === (n = ve.settings) || void 0 === n ? void 0 : n.rules.condition.map(function (e, t) {
          return e;
        });
      r[ee][te].value = e, (0, y.dispatch)(Lf).updateStepArgs(ge, he, ye, "rules", "condition", r);
    },
    Rn = function () {
      var e = fT(dT().m(function e(t) {
        return dT().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 1;
                break;
              }
              return wt((0, b.__)("Fetching options...", "mrm")), e.n = 1, zg(t).then(function (e) {
                e.success && (0 === e.coupons.length ? wt((0, b.__)("No coupon found", "mrm")) : (Ut(e.coupons), wt((0, b.__)("Please enter 3 or more characters", "mrm"))));
              });
            case 1:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    xn = function () {
      var e = fT(dT().m(function e(t) {
        return dT().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 1;
                break;
              }
              return wt("loading..."), e.n = 1, Tg(t, "edd").then(function (e) {
                e.success && (0 === e.products.length ? wt("No product found") : (Rt(e.products), wt("Please enter 3 or more characters")));
              });
            case 1:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    Cn = function () {
      var e = fT(dT().m(function e(t) {
        return dT().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 1;
                break;
              }
              return wt((0, b.__)("Fetching options...", "mrm")), e.n = 1, Fg(t, "edd").then(function (e) {
                e.success && (0 === e.category.length ? wt((0, b.__)("No category found", "mrm")) : (Pt(e.category), wt((0, b.__)("Please enter 3 or more characters", "mrm"))));
              });
            case 1:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    Pn = function () {
      var e = fT(dT().m(function e(t) {
        return dT().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 1;
                break;
              }
              return wt((0, b.__)("Fetching options...", "mrm")), e.n = 1, Dg(t, "edd").then(function (e) {
                e.success && (0 === e.tags.length ? wt((0, b.__)("No tag found", "mrm")) : (jt(e.tags), wt((0, b.__)("Please enter 3 or more characters", "mrm"))));
              });
            case 1:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    On = function () {
      var e = fT(dT().m(function e(t) {
        return dT().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 1;
                break;
              }
              return wt((0, b.__)("Fetching options...", "mrm")), e.n = 1, getEddCoupons(t).then(function (e) {
                e.success && (0 === e.coupons.length ? wt((0, b.__)("No coupon found", "mrm")) : (Tt(e.coupons), wt((0, b.__)("Please enter 3 or more characters", "mrm"))));
              });
            case 1:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    kn = function () {
      var e = fT(dT().m(function e(t) {
        return dT().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 1;
                break;
              }
              return wt("loading..."), e.n = 1, Yg(t, "sfwd-courses").then(function (e) {
                e.success && (0 === (null == e ? void 0 : e.courses.length) ? wt("No course found") : (rn(null == e ? void 0 : e.courses), wt("Please enter 3 or more characters")));
              });
            case 1:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    jn = function () {
      var e = fT(dT().m(function e(t) {
        return dT().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (!(t.length >= 3)) {
                e.n = 1;
                break;
              }
              return wt("loading..."), e.n = 1, Zg(t, "groups").then(function (e) {
                null != e && e.success && (0 === (null == e ? void 0 : e.groups.length) ? wt("No group found") : (ln(null == e ? void 0 : e.groups), wt("Please enter 3 or more characters")));
              });
            case 1:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
  return h().createElement("div", {
    className: "single-rules",
    key: te
  }, h().createElement("div", {
    className: "rules-1 ".concat(1 == X.length ? "single-condition" : ""),
    ref: oe
  }, h().createElement("button", {
    onClick: function () {
      return t = null === (e = ve.settings) || void 0 === e ? void 0 : e.rules.condition.map(function (e, t) {
        return e;
      }), ue(!ce), void (0, y.dispatch)(Lf).updateStepArgs(ge, he, ye, "rules", "condition", t);
      var e, t;
    },
    type: "button",
    className: "drop-down-button ".concat(ce ? "show " : "").concat("" === X[te].name ? "" : "focus"),
    title: "" === X[te].name ? "Choose Criteria" : X[te].name
  }, "" === X[te].name ? "Choose Criteria" : X[te].name), h().createElement("ul", {
    className: ce ? "mintmrm-dropdown show" : "mintmrm-dropdown"
  }, _e.map(function (e, t) {
    var n;
    return h().createElement("li", {
      className: "single-column has-sub-dropdown ".concat(re === t ? "active" : ""),
      onClick: function () {
        return function (e) {
          ae(e);
        }(t);
      },
      key: t
    }, null == e ? void 0 : e.action, h().createElement("ul", {
      className: "mintmrm-dropdown ".concat(re === t ? "show" : "")
    }, null == e || null === (n = e.values) || void 0 === n ? void 0 : n.map(function (e) {
      return h().createElement("li", {
        className: "single-column",
        onClick: function () {
          return function (e) {
            var t,
              n,
              r = null == ve || null === (t = ve.settings) || void 0 === t || null === (t = t.rules) || void 0 === t || null === (t = t.condition) || void 0 === t ? void 0 : t.map(function (e, t) {
                return e;
              }),
              a = e[0],
              o = e[1],
              i = null == _e ? void 0 : _e.find(function (e) {
                return (null == e ? void 0 : e.action) === a;
              }),
              l = null == i || null === (n = i.values) || void 0 === n ? void 0 : n.find(function (e) {
                return (null == e ? void 0 : e.param) === o;
              });
            Oe(null == l ? void 0 : l.conditions), Ae(null == l ? void 0 : l.options), Ee(null == l ? void 0 : l.name), xe(null == l ? void 0 : l.param), Ie(""), De(""), r[ee][te].action = null == i ? void 0 : i.action, r[ee][te].name = null == l ? void 0 : l.name, r[ee][te].param = null == l ? void 0 : l.param, r[ee][te].condition_label = "", r[ee][te].condition_value = "", r[ee][te].segmentValue = [], r[ee][te].value = "", r[ee][te].action_type = "", ue(!1), (0, y.dispatch)(Lf).updateStepArgs(ge, he, ye, "rules", "condition", r);
          }(e.relation);
        },
        key: e.param
      }, e.name);
    })));
  }))), h().createElement("div", {
    className: "rules-is ".concat(1 == X.length ? "single-condition" : ""),
    ref: ie
  }, "" === X[te].action && 0 === (null == Pe ? void 0 : Pe.length) ? h().createElement("button", {
    className: "drop-down-button disabled",
    disabled: !0
  }) : h().createElement(h().Fragment, null, h().createElement("button", {
    onClick: function () {
      return t = null === (e = ve.settings) || void 0 === e ? void 0 : e.rules.condition.map(function (e, t) {
        return e;
      }), Ie(""), De(""), me(!de), void (0, y.dispatch)(Lf).updateStepArgs(ge, he, ye, "rules", "condition", t);
      var e, t;
    },
    type: "button",
    className: "drop-down-button ".concat(de ? "show " : "").concat("" === X[te].condition_label ? "" : "focus"),
    title: "" === X[te].condition_label ? "Condition" : X[te].condition_label
  }, "" === X[te].condition_label ? "Condition" : X[te].condition_label), h().createElement("ul", {
    className: de ? "mintmrm-dropdown show" : "mintmrm-dropdown"
  }, null == Pe ? void 0 : Pe.map(function (e) {
    return h().createElement("li", {
      onClick: function () {
        return t = e, r = null == ve || null === (n = ve.settings) || void 0 === n || null === (n = n.rules) || void 0 === n || null === (n = n.condition) || void 0 === n ? void 0 : n.map(function (e, t) {
          return e;
        }), Ie(null == t ? void 0 : t.actionType), De(null == t ? void 0 : t.condition_value), r[ee][te].condition_label = null == t ? void 0 : t.condition_label, r[ee][te].condition_value = null == t ? void 0 : t.condition_value, r[ee][te].action_type = null == t ? void 0 : t.actionType, me(!1), void (0, y.dispatch)(Lf).updateStepArgs(ge, he, ye, "rules", "condition", r);
        var t, n, r;
      },
      key: null == e ? void 0 : e.condition_value
    }, null == e ? void 0 : e.condition_label);
  })))), h().createElement("div", {
    className: "rules-2 ".concat(1 == X.length ? "single-condition" : "")
  }, Te ? h().createElement(h().Fragment, null, "date_time" === Te && h().createElement(oT, {
    valueKey: ee,
    index: te,
    value: X
  }), "segment_conditional_node" === Te && h().createElement(h().Fragment, null, "list" === Re && h().createElement(h().Fragment, null, h().createElement("div", {
    className: "form-group lists-dropdown",
    ref: ze
  }, h().createElement("button", {
    type: "button",
    className: "drop-down-button ".concat(0 != X[te].segmentValue ? "segment-list-tag-btn " : "", " ").concat(qe ? "show " : ""),
    onClick: function () {
      Ye(!qe);
    }
  }, 0 !== (null === (n = X[te].segmentValue) || void 0 === n ? void 0 : n.length) ? (null === (r = X[te].segmentValue) || void 0 === r ? void 0 : r.length) < 2 ? null === (a = X[te].segmentValue) || void 0 === a ? void 0 : a.map(function (e) {
    return h().createElement("span", {
      className: "single-list mintmrm-tag-list",
      key: e.id
    }, e.title, h().createElement("span", {
      className: "close-list",
      title: "Delete",
      onClick: function (t) {
        return fn(t, e.id);
      }
    }, h().createElement(Xh.A, null)));
  }) : h().createElement(h().Fragment, null, null === (o = X[te].segmentValue) || void 0 === o ? void 0 : o.slice(0, 1).map(function (e) {
    return h().createElement("span", {
      className: "single-list mintmrm-tag-list",
      key: e.id
    }, e.title, h().createElement("span", {
      className: "close-list",
      title: "Delete",
      onClick: function (t) {
        return fn(t, e.id);
      }
    }, h().createElement(Xh.A, null)));
  }), "+".concat(X[te].segmentValue.length - 1)) : "Select Lists"), h().createElement(eT, {
    isActive: qe,
    setIsActive: Ye,
    selected: X[te].segmentValue,
    setSelected: st,
    endpoint: "lists",
    items: Yt,
    allowMultiple: !0,
    allowNewCreate: !0,
    name: "list",
    title: "CHOOSE LIST",
    refresh: mn,
    setRefresh: pn,
    prefix: te,
    valueKey: ee,
    valueIndex: te
  }))), "tag" === Re && h().createElement(h().Fragment, null, h().createElement("div", {
    className: "form-group lists-dropdown",
    ref: Be
  }, h().createElement("button", {
    type: "button",
    className: "drop-down-button ".concat(0 != X[te].segmentValue ? "segment-list-tag-btn " : "", " ").concat(Ze ? "show" : ""),
    onClick: function () {
      $e(!Ze);
    }
  }, 0 !== (null === (i = X[te].segmentValue) || void 0 === i ? void 0 : i.length) ? (null === (l = X[te].segmentValue) || void 0 === l ? void 0 : l.length) < 2 ? null === (c = X[te].segmentValue) || void 0 === c ? void 0 : c.map(function (e) {
    return h().createElement("span", {
      className: "single-list mintmrm-tag-list",
      key: e.id
    }, e.title, h().createElement("span", {
      className: "close-list",
      title: "Delete",
      onClick: function (t) {
        return fn(t, e.id);
      }
    }, h().createElement(Xh.A, null)));
  }) : h().createElement(h().Fragment, null, null === (u = X[te].segmentValue) || void 0 === u ? void 0 : u.slice(0, 1).map(function (e) {
    return h().createElement("span", {
      className: "single-list mintmrm-tag-list",
      key: e.id
    }, e.title, h().createElement("span", {
      className: "close-list",
      title: "Delete",
      onClick: function (t) {
        return fn(t, e.id);
      }
    }, h().createElement(Xh.A, null)));
  }), "+".concat((null === (s = X[te]) || void 0 === s || null === (s = s.segmentValue) || void 0 === s ? void 0 : s.length) - 1)) : "Select Tags"), h().createElement(eT, {
    isActive: Ze,
    setIsActive: $e,
    selected: X[te].segmentValue,
    setSelected: mt,
    endpoint: "tags",
    items: $t,
    allowMultiple: !0,
    allowNewCreate: !0,
    name: "tag",
    title: "CHOOSE TAG",
    refresh: mn,
    setRefresh: pn,
    prefix: te,
    valueKey: ee,
    valueIndex: te
  }))), "country" === Re && h().createElement(h().Fragment, null, h().createElement("div", {
    className: "form-group lists-dropdown",
    ref: Le
  }, h().createElement("button", {
    type: "button",
    className: "drop-down-button ".concat(0 != X[te].segmentValue ? "segment-list-tag-btn " : "", " ").concat(Je ? "show" : ""),
    onClick: function () {
      Xe(!Je);
    }
  }, 0 !== (null === (d = X[te].segmentValue) || void 0 === d ? void 0 : d.length) ? (null === (m = X[te].segmentValue) || void 0 === m ? void 0 : m.length) < 2 ? null === (p = X[te].segmentValue) || void 0 === p ? void 0 : p.map(function (e) {
    return h().createElement("span", {
      className: "single-list mintmrm-tag-list",
      key: e.id
    }, e.title, h().createElement("span", {
      className: "close-list",
      title: "Delete",
      onClick: function (t) {
        return fn(t, e.id);
      }
    }, h().createElement(Xh.A, null)));
  }) : h().createElement(h().Fragment, null, null === (f = X[te].segmentValue) || void 0 === f ? void 0 : f.slice(0, 1).map(function (e) {
    return h().createElement("span", {
      className: "single-list mintmrm-tag-list",
      key: e.id
    }, e.title, h().createElement("span", {
      className: "close-list",
      title: "Delete",
      onClick: function (t) {
        return fn(t, e.id);
      }
    }, h().createElement(Xh.A, null)));
  }), "+".concat((null === (v = X[te]) || void 0 === v || null === (v = v.segmentValue) || void 0 === v ? void 0 : v.length) - 1)) : "Select Countries"), h().createElement(eT, {
    isActive: Je,
    setIsActive: Xe,
    selected: X[te].segmentValue,
    setSelected: ft,
    endpoint: "countries",
    items: Xt,
    allowMultiple: !0,
    allowNewCreate: !1,
    name: "country",
    title: "CHOOSE COUNTRY",
    refresh: mn,
    setRefresh: pn,
    prefix: te,
    valueKey: ee,
    valueIndex: te
  }))), "status" === Re && h().createElement(h().Fragment, null, h().createElement("div", {
    className: "form-group lists-dropdown",
    ref: Ve
  }, h().createElement("button", {
    type: "button",
    className: "drop-down-button ".concat(0 != X[te].segmentValue ? "segment-list-tag-btn " : "", " ").concat(tt ? "show" : ""),
    onClick: function () {
      nt(!tt);
    }
  }, 0 !== (null === (_ = X[te].segmentValue) || void 0 === _ ? void 0 : _.length) ? (null === (w = X[te].segmentValue) || void 0 === w ? void 0 : w.length) < 2 ? null === (E = X[te].segmentValue) || void 0 === E ? void 0 : E.map(function (e) {
    return h().createElement("span", {
      className: "single-list mintmrm-tag-list",
      key: e.id
    }, e.title, h().createElement("span", {
      className: "close-list",
      title: "Delete",
      onClick: function (t) {
        return fn(t, e.id);
      }
    }, h().createElement(Xh.A, null)));
  }) : h().createElement(h().Fragment, null, null === (S = X[te].segmentValue) || void 0 === S ? void 0 : S.slice(0, 1).map(function (e) {
    return h().createElement("span", {
      className: "single-list mintmrm-tag-list",
      key: e.id
    }, e.title, h().createElement("span", {
      className: "close-list",
      title: "Delete",
      onClick: function (t) {
        return fn(t, e.id);
      }
    }, h().createElement(Xh.A, null)));
  }), "+".concat((null === (R = X[te]) || void 0 === R || null === (R = R.segmentValue) || void 0 === R ? void 0 : R.length) - 1)) : "Select Status"), h().createElement(eT, {
    isActive: tt,
    setIsActive: nt,
    selected: X[te].segmentValue,
    setSelected: gt,
    endpoint: "status",
    items: [{
      id: 1,
      title: "Subscribed"
    }, {
      id: 2,
      title: "Unsubscribed"
    }, {
      id: 3,
      title: "Pending"
    }, {
      id: 4,
      title: "Bounced"
    }, {
      id: 5,
      title: "Complained"
    }],
    allowMultiple: !0,
    allowNewCreate: !1,
    name: "status",
    title: "CHOOSE STATUS",
    refresh: mn,
    setRefresh: pn,
    prefix: te,
    valueKey: ee,
    valueIndex: te
  }))), "wp_user_role" === Re && h().createElement(h().Fragment, null, h().createElement("div", {
    className: "form-group lists-dropdown",
    ref: He
  }, h().createElement("button", {
    type: "button",
    className: "drop-down-button ".concat(0 != X[te].segmentValue ? "segment-list-tag-btn " : "", " ").concat(at ? "show" : ""),
    onClick: function () {
      ot(!at);
    }
  }, 0 !== (null === (x = X[te].segmentValue) || void 0 === x ? void 0 : x.length) ? (null === (C = X[te].segmentValue) || void 0 === C ? void 0 : C.length) < 2 ? null === (P = X[te].segmentValue) || void 0 === P ? void 0 : P.map(function (e) {
    return h().createElement("span", {
      className: "single-list mintmrm-tag-list",
      key: e.id
    }, e.title, h().createElement("span", {
      className: "close-list",
      title: "Delete",
      onClick: function (t) {
        return fn(t, e.id);
      }
    }, h().createElement(Xh.A, null)));
  }) : h().createElement(h().Fragment, null, null === (O = X[te].segmentValue) || void 0 === O ? void 0 : O.slice(0, 1).map(function (e) {
    return h().createElement("span", {
      className: "single-list mintmrm-tag-list",
      key: e.id
    }, e.title, h().createElement("span", {
      className: "close-list",
      title: "Delete",
      onClick: function (t) {
        return fn(t, e.id);
      }
    }, h().createElement(Xh.A, null)));
  }), "+".concat((null === (k = X[te]) || void 0 === k || null === (k = k.segmentValue) || void 0 === k ? void 0 : k.length) - 1)) : "Select WP User Role"), h().createElement(eT, {
    isActive: at,
    setIsActive: ot,
    selected: X[te].segmentValue,
    setSelected: yt,
    endpoint: "wp_user_role",
    items: un,
    allowMultiple: !0,
    allowNewCreate: !1,
    name: "wp_user_role",
    title: "CHOOSE WP USER ROLE",
    refresh: mn,
    setRefresh: pn,
    prefix: te,
    valueKey: ee,
    valueIndex: te
  })))), "input_text" === Te && "is_empty" !== Ne && "is_not_empty" !== Ne && h().createElement(h().Fragment, null, h().createElement("input", {
    className: "input-value",
    type: "text",
    placeholder: "Enter a value",
    defaultValue: X[te].value,
    onChange: function (e) {
      return vn(e, ee, te);
    }
  })), "input_email" === Te && h().createElement(h().Fragment, null, h().createElement("input", {
    className: "input-value",
    type: "email",
    placeholder: "Enter a email",
    defaultValue: X[te].value,
    onChange: function (e) {
      return vn(e, ee, te);
    }
  })), "custom_field_select" === Te && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    value: X[te].value,
    onChange: function (e) {
      !function (e) {
        var t,
          n = null === (t = ve.settings) || void 0 === t ? void 0 : t.rules.condition.map(function (e, t) {
            return e;
          });
        n[ee][te].value = e, (0, y.dispatch)(Lf).updateStepArgs(ge, he, ye, "rules", "condition", n);
      }(e);
    },
    options: je,
    isMulti: "true",
    placeholder: null === (j = window) || void 0 === j || null === (j = j.MRM_Vars) || void 0 === j || null === (j = j.mint_trans) || void 0 === j ? void 0 : j.Search
  })), "input_number" === Te ? h().createElement("input", {
    type: "number",
    onKeyDown: function (e) {
      return ["e", "E"].includes(e.key) && e.preventDefault();
    },
    placeholder: "Enter a value",
    value: X[te].value,
    onChange: function (e) {
      return vn(e, ee, te);
    }
  }) : null, "input_select" === Te && h().createElement(h().Fragment, null, "gender" === Re && h().createElement(h().Fragment, null, h().createElement("select", {
    className: "input-value",
    defaultValue: X[te].value,
    onChange: function (e) {
      return vn(e, ee, te);
    }
  }, h().createElement("option", {
    value: ""
  }, "Select an option"), h().createElement("option", {
    value: "male"
  }, "Male"), h().createElement("option", {
    value: "female"
  }, "Female"), h().createElement("option", {
    value: "others"
  }, "Others"))), "is_a_customer" === Re && h().createElement(h().Fragment, null, h().createElement("select", {
    className: "input-value",
    defaultValue: X[te].value,
    onChange: function (e) {
      return vn(e, ee, te);
    }
  }, h().createElement("option", {
    value: ""
  }, "Select an option"), h().createElement("option", {
    value: "yes"
  }, "Yes"), h().createElement("option", {
    value: "no"
  }, "No"))), "current_order_status" === Re && h().createElement(h().Fragment, null, h().createElement("select", {
    className: "input-value",
    defaultValue: X[te].value,
    onChange: function (e) {
      return vn(e, ee, te);
    }
  }, null === (A = window) || void 0 === A || null === (A = A.MRM_Vars) || void 0 === A ? void 0 : A.wc_order_statuses.map(function (e, t) {
    return h().createElement("option", {
      key: t,
      value: e.value
    }, e.label);
  }))), "subscription_status" === Re && h().createElement("select", {
    className: "input-value",
    defaultValue: X[te].value,
    onChange: function (e) {
      return vn(e, ee, te);
    }
  }, null === (M = window) || void 0 === M || null === (M = M.MRM_Vars) || void 0 === M || null === (M = M.wcs_order_statuses) || void 0 === M ? void 0 : M.map(function (e, t) {
    return h().createElement("option", {
      key: t,
      value: e.value
    }, e.label);
  })), "parent_order_status" === Re && h().createElement("select", {
    className: "input-value",
    defaultValue: X[te].value,
    onChange: function (e) {
      return vn(e, ee, te);
    }
  }, null === (T = window) || void 0 === T || null === (T = T.MRM_Vars) || void 0 === T || null === (T = T.wcs_order_statuses) || void 0 === T ? void 0 : T.map(function (e, t) {
    return h().createElement("option", {
      key: t,
      value: e.value
    }, e.label);
  })), "has_status" === Re && h().createElement("select", {
    className: "input-value",
    defaultValue: X[te].value,
    onChange: function (e) {
      return vn(e, ee, te);
    }
  }, null === (I = window) || void 0 === I || null === (I = I.MRM_Vars) || void 0 === I || null === (I = I.wcm_plan_statuses) || void 0 === I ? void 0 : I.map(function (e, t) {
    return h().createElement("option", {
      key: t,
      value: e.value
    }, e.label);
  })), "payment_gateway" === Re && h().createElement(h().Fragment, null, h().createElement("select", {
    className: "input-value",
    defaultValue: X[te].value,
    onChange: function (e) {
      return vn(e, ee, te);
    }
  }, h().createElement("option", {
    value: "paypal"
  }, "Paypal"), h().createElement("option", {
    value: "stripe"
  }, "Stripe")))), "woocommerce_product" === Te && h().createElement(h().Fragment, null, "purchased_products" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      hn(e);
    },
    onInputChange: function (e) {
      yn(e);
    },
    options: Ft,
    isMulti: "true",
    placeholder: null === (F = window) || void 0 === F || null === (F = F.MRM_Vars) || void 0 === F || null === (F = F.mint_trans) || void 0 === F ? void 0 : F.Search,
    isSearchable: !0
  })), "subscription_items" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      hn(e);
    },
    onInputChange: function (e) {
      yn(e);
    },
    options: Ft,
    isMulti: "true",
    placeholder: null === (N = window) || void 0 === N || null === (N = N.MRM_Vars) || void 0 === N || null === (N = N.mint_trans) || void 0 === N ? void 0 : N.Search,
    isSearchable: !0
  })), "purchased_categories" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      bn(e);
    },
    onInputChange: function (e) {
      _n(e);
    },
    options: Wt,
    isMulti: "true",
    placeholder: null === (D = window) || void 0 === D || null === (D = D.MRM_Vars) || void 0 === D || null === (D = D.mint_trans) || void 0 === D ? void 0 : D.Search,
    isSearchable: !0
  })), "purchased_tags" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      wn(e);
    },
    onInputChange: function (e) {
      En(e);
    },
    options: Lt,
    isMulti: "true",
    placeholder: null === (W = window) || void 0 === W || null === (W = W.MRM_Vars) || void 0 === W || null === (W = W.mint_trans) || void 0 === W ? void 0 : W.Search,
    isSearchable: !0
  })), "used_coupons" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      Sn(e);
    },
    onInputChange: function (e) {
      Rn(e);
    },
    options: Gt,
    isMulti: "true",
    placeholder: null === (z = window) || void 0 === z || null === (z = z.MRM_Vars) || void 0 === z || null === (z = z.mint_trans) || void 0 === z ? void 0 : z.Search,
    isSearchable: !0
  })), "products_in_current_order" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      hn(e);
    },
    onInputChange: function (e) {
      yn(e);
    },
    options: Ft,
    isMulti: "true",
    placeholder: null === (B = window) || void 0 === B || null === (B = B.MRM_Vars) || void 0 === B || null === (B = B.mint_trans) || void 0 === B ? void 0 : B.Search,
    isSearchable: !0
  })), "purchased_from_categories" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      bn(e);
    },
    onInputChange: function (e) {
      _n(e);
    },
    options: Wt,
    isMulti: "true",
    placeholder: null === (L = window) || void 0 === L || null === (L = L.MRM_Vars) || void 0 === L || null === (L = L.mint_trans) || void 0 === L ? void 0 : L.Search,
    isSearchable: !0
  })), "has_active_plans" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      hn(e);
    },
    options: null === (V = window) || void 0 === V || null === (V = V.MRM_Vars) || void 0 === V ? void 0 : V.wcm_plans,
    isMulti: "true",
    placeholder: null === (H = window) || void 0 === H || null === (H = H.MRM_Vars) || void 0 === H || null === (H = H.mint_trans) || void 0 === H ? void 0 : H.Search,
    isSearchable: !0
  })), "wishlist_items" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      hn(e);
    },
    onInputChange: function (e) {
      yn(e);
    },
    options: Ft,
    isMulti: "true",
    placeholder: null === (G = window) || void 0 === G || null === (G = G.MRM_Vars) || void 0 === G || null === (G = G.mint_trans) || void 0 === G ? void 0 : G.Search,
    isSearchable: !0
  })), "wishlist_item_categories" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      bn(e);
    },
    onInputChange: function (e) {
      _n(e);
    },
    options: Wt,
    isMulti: "true",
    placeholder: null === (U = window) || void 0 === U || null === (U = U.MRM_Vars) || void 0 === U || null === (U = U.mint_trans) || void 0 === U ? void 0 : U.Search,
    isSearchable: !0
  }))), "edd_product" === Te && h().createElement(h().Fragment, null, "edd_purchased_products" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      hn(e);
    },
    onInputChange: function (e) {
      xn(e);
    },
    options: St,
    isMulti: "true",
    placeholder: null === (Y = window) || void 0 === Y || null === (Y = Y.MRM_Vars) || void 0 === Y || null === (Y = Y.mint_trans) || void 0 === Y ? void 0 : Y.Search,
    isSearchable: !0
  })), "edd_purchased_categories" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      bn(e);
    },
    onInputChange: function (e) {
      Cn(e);
    },
    options: Ct,
    isMulti: "true",
    placeholder: null === (Q = window) || void 0 === Q || null === (Q = Q.MRM_Vars) || void 0 === Q || null === (Q = Q.mint_trans) || void 0 === Q ? void 0 : Q.Search,
    isSearchable: !0
  })), "edd_purchased_tags" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      wn(e);
    },
    onInputChange: function (e) {
      Pn(e);
    },
    options: kt,
    isMulti: "true",
    placeholder: null === (Z = window) || void 0 === Z || null === (Z = Z.MRM_Vars) || void 0 === Z || null === (Z = Z.mint_trans) || void 0 === Z ? void 0 : Z.Search,
    isSearchable: !0
  })), "edd_used_coupons" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      Sn(e);
    },
    onInputChange: function (e) {
      On(e);
    },
    options: Mt,
    isMulti: "true",
    placeholder: null === ($ = window) || void 0 === $ || null === ($ = $.MRM_Vars) || void 0 === $ || null === ($ = $.mint_trans) || void 0 === $ ? void 0 : $.Search,
    isSearchable: !0
  }))), "lms_courses" === Te && h().createElement(h().Fragment, null, ("enrollment_courses" === Re || "course_completed" === Re) && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      hn(e);
    },
    onInputChange: function (e) {
      kn(e);
    },
    options: nn,
    isMulti: "true",
    placeholder: null === (K = window) || void 0 === K || null === (K = K.MRM_Vars) || void 0 === K || null === (K = K.mint_trans) || void 0 === K ? void 0 : K.Search,
    isSearchable: !0
  })), "enrollment_groups" === Re && h().createElement(h().Fragment, null, h().createElement(yg.Ay, {
    name: "select-two",
    components: {
      NoOptionsMessage: gn
    },
    value: X[te].value,
    onChange: function (e) {
      hn(e);
    },
    onInputChange: function (e) {
      jn(e);
    },
    options: on,
    isMulti: "true",
    placeholder: null === (J = window) || void 0 === J || null === (J = J.MRM_Vars) || void 0 === J || null === (J = J.mint_trans) || void 0 === J ? void 0 : J.Search,
    isSearchable: !0
  })))) : h().createElement("button", {
    className: "drop-down-button disabled",
    disabled: !0
  })), X.length > 1 && h().createElement(h().Fragment, null, h().createElement("div", {
    className: "rules-actions"
  }, h().createElement(q.Button, {
    type: "button",
    className: "delete-condition",
    onClick: function () {
      return We(ee, te);
    }
  }, h().createElement(cA, null))), h().createElement("div", {
    className: "condition-symbol"
  }, h().createElement("span", {
    className: "symbol-and"
  }, "&"))));
}
