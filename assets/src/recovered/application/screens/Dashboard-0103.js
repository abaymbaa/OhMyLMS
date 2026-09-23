// Reconstructed application fragment. Assembled in manifest order within factory 1841.
const fU = function () {
  HG("ohmylms", "dashboard");
  var e = (0, y.useDispatch)(T.default),
    t = (0, z.A)(),
    n = t.openNotificationWithIcon,
    r = t.contextHolder,
    a = (0, L.useIsPro)(),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    l = mU((0, g.useState)(!1), 2),
    c = l[0],
    u = l[1],
    s = mU((0, g.useState)(!1), 2),
    d = s[0],
    m = s[1],
    p = mU((0, g.useState)(!1), 2),
    f = p[0],
    v = (p[1], mU((0, g.useState)(!1), 2)),
    h = v[0],
    _ = v[1],
    w = mU((0, g.useState)(!1), 2),
    E = w[0],
    S = w[1],
    R = (0, g.useRef)(null),
    x = mU((0, g.useState)(!1), 2),
    C = x[0],
    P = x[1],
    O = ((0, g.useCallback)(function () {
      a ? u(!0) : e.setIsProModalOpen(!0);
    }, [a]), function () {
      var t = dU(cU().m(function t(n) {
        var r, a;
        return cU().w(function (t) {
          for (;;) switch (t.p = t.n) {
            case 0:
              if (n) {
                t.n = 1;
                break;
              }
              return t.a(2);
            case 1:
              return t.p = 1, m(!0), t.n = 2, e.importCourse(n);
            case 2:
              null != (r = t.v) && r.success && u(!1), t.n = 4;
              break;
            case 3:
              t.p = 3, a = t.v, console.error("Error exporting course:", a);
            case 4:
              return t.p = 4, m(!1), t.f(4);
            case 5:
              return t.a(2);
          }
        }, t, null, [[1, 3, 4, 5]]);
      }));
      return function (e) {
        return t.apply(this, arguments);
      };
    }()),
    k = function () {
      var e = dU(cU().m(function e() {
        return cU().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              S(!0);
            case 1:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  return (0, g.useCallback)(function () {
    window.open(L.pricingPageLink, "_blank");
  }, []), (0, g.useEffect)(function () {
    o && n(i, o);
  }, [o]), (0, g.useEffect)(function () {
    var e = function (e) {
      R.current && !R.current.contains(e.target) && P(!1);
    };
    return C ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e), function () {
      document.removeEventListener("mousedown", e);
    };
  }, [C]), React.createElement(React.Fragment, null, r, React.createElement(I.SurfaceWP, null, React.createElement(I.ContainerWP, {
    isFullWidth: !0
  }, h && React.createElement(GG.A, {
    status: "error",
    isClosable: !0,
    onRemove: function () {
      return _(!1);
    }
  }, (0, b.__)("Error creating course. Please try again.", "ohmylms")), React.createElement(YG, {
    title: (0, b.__)("Overview", "ohmylms"),
    showAddButton: !1
  }, React.createElement(D.A, {
    variant: "primary",
    isBusy: f,
    onClick: k,
    icon: React.createElement(nf, null),
    iconPosition: "left"
  }, (0, b.__)("Add Course", "ohmylms"))), React.createElement(NG, {
    handleAddCourse: k
  }), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingBottom: 5
  }), c && React.createElement(React.Fragment, null, React.createElement(VG, {
    onClose: function () {
      u(!1), m(!1);
    },
    onAction: O,
    isOpen: c,
    cancelBtnText: (0, b.__)("Cancel", "ohmylms"),
    actionBtnText: (0, b.__)("Import", "ohmylms"),
    loading: d
  })), E && React.createElement(lU, {
    isOpen: E,
    onClose: function () {
      return S(!1);
    }
  }))));
};
