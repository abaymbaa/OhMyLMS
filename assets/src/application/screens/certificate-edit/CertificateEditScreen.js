// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Ste = function () {
  HG("ohmylms", "certificates");
  var e = (0, f.g)().id,
    t = (0, y.useDispatch)(T.default),
    n = function (e, t) {
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
          if ("string" == typeof e) return Ete(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ete(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!0), 2),
    r = n[0],
    a = n[1],
    o = (0, f.Zp)(),
    i = (0, z.A)(),
    l = i.openNotificationWithIcon,
    c = i.contextHolder,
    u = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    s = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    d = function () {
      var n,
        r = (n = bte().m(function n() {
          var r, i;
          return bte().w(function (n) {
            for (;;) switch (n.p = n.n) {
              case 0:
                return n.p = 0, a(!0), n.n = 1, t.getCertificateById(e);
              case 1:
                r = n.v, a(!1), r || o("/certificates"), n.n = 3;
                break;
              case 2:
                n.p = 2, i = n.v, console.error(i);
              case 3:
                return n.a(2);
            }
          }, n, null, [[0, 2]]);
        }), function () {
          var e = this,
            t = arguments;
          return new Promise(function (r, a) {
            var o = n.apply(e, t);
            function i(e) {
              wte(o, r, a, i, l, "next", e);
            }
            function l(e) {
              wte(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return r.apply(this, arguments);
      };
    }();
  return (0, g.useEffect)(function () {
    e ? d() : o("/certificates");
  }, [e]), (0, g.useEffect)(function () {
    !r && u && l(s, u);
  }, [u]), React.createElement(React.Fragment, null, React.createElement("div", null, c, r ? React.createElement(_.A, {
    active: !0
  }) : React.createElement(uV, null)));
};
