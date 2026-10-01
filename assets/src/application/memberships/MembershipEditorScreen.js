// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var B8 = function (e) {
  var t = e.isOpen,
    n = e.setIsOpen,
    r = e.isFetch,
    a = e.setIsFetch,
    o = e.isLoading,
    i = true,
    l = ((0, y.useDispatch)(T.default), (0, y.useSelect)(function (e) {
      return e(T.default).selectMembershipPlanData();
    }, [])),
    c = (0, y.useDispatch)(T.default),
    u = c.addMembershipPlan,
    s = c.clearMembershipPlan,
    d = W8((0, g.useState)(!1), 2),
    m = d[0],
    p = d[1],
    f = W8((0, g.useState)("1"), 2),
    v = f[0],
    h = f[1],
    _ = W8((0, g.useState)({}), 2),
    w = _[0],
    E = _[1],
    S = W8((0, g.useState)(!1), 2),
    R = S[0],
    x = S[1],
    C = function (e) {
      var t,
        n = {};
      return null != e && null !== (t = e.name) && void 0 !== t && t.trim() || (n.name = (0, b.__)("Name is required.", "ohmylms")), parseFloat(null == e ? void 0 : e.regular_price) <= 0 && (n.price = (0, b.__)("Price must be greater than 0.", "ohmylms")), null != e && e.sale_price && parseFloat(null == e ? void 0 : e.sale_price) > parseFloat(null == e ? void 0 : e.regular_price) && (n.sale_price = (0, b.__)("Sale price cannot be greater than the subscription price.", "ohmylms")), E(n), 0 === Object.keys(n).length;
    },
    P = function () {
      n(!1), E({});
    },
    O = function () {
      var e,
        t = (e = F8().m(function e() {
          return F8().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                if ("1" !== v) {
                  e.n = 1;
                  break;
                }
                return C(l) && h("2"), e.a(2);
              case 1:
                if (m) {
                  e.n = 4;
                  break;
                }
                {
                  e.n = 2;
                  break;
                }
                return x(!0), e.a(2);
              case 2:
                return p(!0), e.n = 3, u(l, null == l ? void 0 : l.id);
              case 3:
                n(!1), a(!r), p(!1), E({});
              case 4:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              D8(o, r, a, i, l, "next", e);
            }
            function l(e) {
              D8(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
  (0, g.useEffect)(function () {
    return function () {
      s();
    };
  }, []), (0, g.useEffect)(function () {
    var e = !0;
    return e && C(l), function () {
      e = !1;
    };
  }, [l]);
  var k = [{
      label: React.createElement(I.TextWP, {
        as: "span",
        size: "16",
        weight: "500"
      }, (0, b.__)("Details", "ohmylms"), " "),
      key: "1",
      children: React.createElement(I.CardWP, {
        isBorderless: !0
      }, React.createElement(I.SpacerWP, {
        marginBottom: 0,
        padding: 3,
        marginTop: 4
      }, React.createElement(w8, {
        errors: w,
        setErrors: E,
        validate: C
      })))
    }, {
      label: React.createElement(I.TextWP, {
        as: "span",
        size: "16",
        weight: "500"
      }, (0, b.__)("Courses", "ohmylms"), " "),
      key: "2",
      children: React.createElement(I.CardWP, {
        isBorderless: !0
      }, React.createElement(I.SpacerWP, {
        marginBottom: 0,
        padding: 3,
        marginTop: 4
      }, React.createElement(I8, null)))
    }],
    j = (0, g.useMemo)(function () {
      return {
        width: "830px",
        background: "#F5F5F5"
      };
    }, []),
    A = Object.keys(w).length > 0;
  return React.createElement(React.Fragment, null, t && React.createElement(I.ModalWP, {
    title: (0, b.__)("Add Plan", "ohmylms"),
    style: j,
    onRequestClose: P,
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0,
    className: "ohmylms-full-height-modal",
    size: "fill"
  }, o ? React.createElement(I.SkeletonWP, {
    rows: 10
  }) : React.createElement(React.Fragment, null, React.createElement(I.TabsWP, {
    items: k,
    activekey: v,
    onChange: function (e) {
      return h(e);
    },
    className: "ohmylms-tab-has-custom-navigation"
  }), React.createElement(I.DividerWP, {
    marginStart: 4
  }), React.createElement(I.SpacerWP, {
    marginTop: 4
  }, React.createElement(I.FlexWP, {
    justify: "flex-end",
    align: "center",
    gap: 2
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: P,
    className: "ohmylms-membership-plan-cancel-button"
  }, (0, b.__)("Cancel", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: O,
    disabled: A,
    className: "ohmylms-membership-plan-save-button"
  }, "1" === v ? (0, b.__)("Next", "ohmylms") : (0, b.__)("Save", "ohmylms"))))), R && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: R,
    onClose: x
  }))));
};
