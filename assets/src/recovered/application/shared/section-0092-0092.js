// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var tL = function (e) {
  var t,
    n = (0, L.useIsPro)(),
    r = e.selected,
    a = e.setShowEditor,
    o = e.setSelected,
    i = e.showCertificateEditor,
    c = (0, y.useDispatch)(T.default),
    u = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    s = (0, y.useSelect)(function (e) {
      return e(T.default).selectCertificates();
    }, []),
    d = XB((0, g.useState)([]), 2),
    m = d[0],
    p = d[1],
    f = XB((0, g.useState)(!1), 2),
    v = f[0],
    h = f[1],
    _ = XB((0, g.useState)(!1), 2),
    w = _[0],
    E = _[1],
    S = XB((0, g.useState)(0), 2),
    R = S[0],
    x = S[1],
    C = function () {
      p(hB), setTimeout(function () {
        h(!1);
      }, 300);
    },
    P = (0, g.useCallback)(ZB(qB().m(function e() {
      var t;
      return qB().w(function (e) {
        for (;;) switch (e.p = e.n) {
          case 0:
            return e.p = 0, h(!0), e.n = 1, c.fetchCertificates();
          case 1:
            e.n = 3;
            break;
          case 2:
            e.p = 2, t = e.v, console.error(t);
          case 3:
            return e.p = 3, h(!1), e.f(3);
          case 4:
            return e.a(2);
        }
      }, e, null, [[0, 2, 3, 4]]);
    })), [c]),
    O = function () {
      var e = ZB(qB().m(function e() {
        var t, n;
        return qB().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (h(!0), "templates" !== r) {
                e.n = 1;
                break;
              }
              C(), e.n = 5;
              break;
            case 1:
              return e.p = 1, e.n = 2, c.fetchCertificates();
            case 2:
              t = e.v, p(t), e.n = 4;
              break;
            case 3:
              e.p = 3, n = e.v, console.error(n);
            case 4:
              return e.p = 4, h(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    k = function () {
      var e = ZB(qB().m(function e(t) {
        var r, i, d, m, p;
        return qB().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (n || !(3 <= s.length)) {
                e.n = 1;
                break;
              }
              return c.setIsProModalOpen(!0), c.updateProModalContent((0, b.__)("This feature requires OhMyLMS. Please activate the Pro version with a valid license to unlock this feature", "ohmylms")), e.a(2);
            case 1:
              return e.p = 1, h(!0), i = {
                name: "Untitled",
                status: "publish",
                contents: (null == t ? void 0 : t.contents) || {},
                html_contents: CB(null == t || null === (r = t.contents) || void 0 === r ? void 0 : r.elements)
              }, e.n = 2, l()({
                path: "/creator-lms/v1/certificates",
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(i)
              });
            case 2:
              null != (d = e.v) && d.id && (c.setCourse(KB(KB({}, u), {}, {
                certificate_id: d.id,
                certificate: {}
              })), c.setCertificate(d), a(!0), o("custom"), (m = document.querySelector(".omlms-course-settings-modal-wrap")) && (m.style.display = "block"), E(!1)), e.n = 4;
              break;
            case 3:
              e.p = 3, p = e.v, console.error(p);
            case 4:
              return e.p = 4, h(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    j = function () {
      var e = ZB(qB().m(function e(t) {
        var n;
        return qB().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if ("templates" !== r) {
                e.n = 2;
                break;
              }
              return e.n = 1, k(t);
            case 1:
              e.n = 3;
              break;
            case 2:
              c.setCourse(KB(KB({}, u), {}, {
                certificate_id: null == t ? void 0 : t.id,
                certificate: {}
              }));
            case 3:
              E(!1), (n = document.querySelector(".omlms-course-settings-modal-wrap")) && (n.style.display = "block");
            case 4:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
  return (0, g.useEffect)(function () {
    O();
  }, [r, i]), (0, g.useEffect)(function () {
    P();
  }, []), React.createElement(React.Fragment, null, React.createElement("div", {
    className: "omlms-course-certificate-templates ".concat(v ? "omlms-loading" : "", " ").concat(0 === m.length ? "omlms-no-templates" : "")
  }, v ? React.createElement(React.Fragment, null, React.createElement(I.SkeletonWP, {
    className: "omlms-skeleton",
    active: !0,
    rows: 6
  })) : React.createElement(React.Fragment, null, m.length > 0 ? React.createElement(I.FlexWP, {
    gap: 5,
    align: "stretch",
    justify: "flex-start",
    wrap: !0,
    className: "omlms-certificate-templates-list"
  }, null === (t = m.filter(function (e) {
    return null == e ? void 0 : e.image_src;
  })) || void 0 === t ? void 0 : t.map(function (e, t) {
    var n, i;
    return React.createElement(I.CardWP, {
      className: "omlms-template-item ".concat(R === (null == e ? void 0 : e.id) ? "omlms-template-item-selected" : ""),
      key: t,
      style: {
        width: "calc(100% / 4 - 15px)",
        border: "2px solid transparent",
        borderColor: (null == e ? void 0 : e.id) == (null == u ? void 0 : u.certificate_id) || (null == e ? void 0 : e.id) == (null == u || null === (n = u.certificate) || void 0 === n ? void 0 : n.id) ? "var(--omlms-primary-color)" : "transparent"
      }
    }, ((null == e ? void 0 : e.id) == (null == u ? void 0 : u.certificate_id) || (null == e ? void 0 : e.id) == (null == u || null === (i = u.certificate) || void 0 === i ? void 0 : i.id)) && React.createElement("span", {
      className: "template-selected-indicator",
      style: {
        position: "absolute",
        top: "-1px",
        right: "-1px",
        width: "32px",
        height: "32px",
        borderRadius: "0 7px",
        backgroundColor: "var(--omlms-primary-color)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "2"
      }
    }, React.createElement("svg", {
      width: "15",
      height: "12",
      fill: "none",
      viewBox: "0 0 11 8",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "#fff",
      d: "M10.02 1.097a.786.786 0 00-1.112 0L3.905 6.101 1.68 3.877A.786.786 0 10.57 4.99l2.78 2.78a.784.784 0 001.112 0l5.56-5.56a.786.786 0 000-1.112z"
    }))), React.createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 4,
      style: {
        height: "100%",
        display: "flex",
        flexFlow: "colomn",
        alignItems: "center",
        justifyContent: "center"
      }
    }, React.createElement(DB, {
      item: e,
      tab: r,
      setShowEditor: a,
      setSelected: o,
      setShowPreview: E,
      setSelectedId: x
    })));
  })) : React.createElement(I.CardWP, null, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 5
  }, React.createElement(I.FlexWP, {
    gap: 4,
    direction: "column",
    justify: "center",
    align: "center"
  }, React.createElement(bB, null), React.createElement(I.TextWP, {
    as: "span",
    variant: "muted",
    size: 14
  }, (0, b.__)("No templates found.", "ohmylms"))))))), w && React.createElement(GB, {
    isOpen: w,
    onClose: function () {
      return E(!1);
    },
    items: m,
    selectedId: R,
    handleSelect: j,
    isLoading: v
  }));
};

const nL = (0, g.memo)(tL);

var rL,
  aL = (null === (rL = window.creator_lms_params) || void 0 === rL ? void 0 : rL.plugin_assets) + "packages/";

function oL() {
  return new Promise(function (e, t) {
    if (aL) {
      if (window.html2pdf) e(window.html2pdf);else {
        var n = document.querySelector('script[src="'.concat(aL, 'html2pdf.bundle.min.js"]'));
        if (n) return n.addEventListener("load", function () {
          return e(window.html2pdf);
        }), void n.addEventListener("error", function () {
          return t(new Error("Failed to load html2pdf script."));
        });
        var r = document.createElement("script");
        r.src = "".concat(aL, "html2pdf.bundle.min.js"), r.async = !0, r.onload = function () {
          window.html2pdf ? e(window.html2pdf) : t(new Error("html2pdf failed to initialize after script execution."));
        }, r.onerror = function () {
          t(new Error("Failed to load script from ".concat(r.src, ".")));
        }, document.head.appendChild(r);
      }
    } else t(new Error("The 'dir' variable is undefined. Ensure 'window.creator_lms_params.plugin_assets' is set correctly."));
  });
}

function iL() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return lL(u, "_invoke", function (n, r, a) {
      var o,
        l,
        c,
        u = 0,
        s = a || [],
        d = !1,
        m = {
          p: 0,
          n: 0,
          v: e,
          a: p,
          f: p.bind(e, 4),
          d: function (t, n) {
            return o = t, l = 0, c = e, m.n = n, i;
          }
        };
      function p(n, r) {
        for (l = n, c = r, t = 0; !d && u && !a && t < s.length; t++) {
          var a,
            o = s[t],
            p = m.p,
            f = o[2];
          n > 3 ? (a = f === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, l = 0));
        }
        if (a || n > 1) return i;
        throw d = !0, r;
      }
      return function (a, s, f) {
        if (u > 1) throw TypeError("Generator is already running");
        for (d && 1 === s && p(s, f), l = s, c = f; (t = l < 2 ? e : c) || !d;) {
          o || (l ? l < 3 ? (l > 1 && (m.n = -1), p(l, c)) : m.n = c : m.v = c);
          try {
            if (u = 2, o) {
              if (l || (a = "next"), t = o[a]) {
                if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                c = t.value, l < 2 && (l = 0);
              } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
              o = e;
            } else if ((t = (d = m.n < 0) ? c : n.call(r, m)) !== i) break;
          } catch (t) {
            o = e, l = 1, c = t;
          } finally {
            u = 1;
          }
        }
        return {
          value: t,
          done: d
        };
      };
    }(n, a, o), !0), u;
  }
  var i = {};
  function l() {}
  function c() {}
  function u() {}
  t = Object.getPrototypeOf;
  var s = [][r] ? t(t([][r]())) : (lL(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, lL(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, lL(d, "constructor", u), lL(u, "constructor", c), c.displayName = "GeneratorFunction", lL(u, a, "GeneratorFunction"), lL(d), lL(d, a, "Generator"), lL(d, r, function () {
    return this;
  }), lL(d, "toString", function () {
    return "[object Generator]";
  }), (iL = function () {
    return {
      w: o,
      m
    };
  })();
}

function lL(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  lL = function (e, t, n, r) {
    function o(t, n) {
      lL(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, lL(e, t, n, r);
}

function cL(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function uL(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        cL(o, r, a, i, l, "next", e);
      }
      function l(e) {
        cL(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

var sL = function () {
    var e = uL(iL().m(function e(t) {
      return iL().w(function (e) {
        for (;;) if (0 === e.n) return e.a(2, new Promise(function (e, n) {
          var r = {
            type: "jpeg",
            quality: 1,
            html2canvas: {
              scale: 2,
              useCORS: !0,
              scrollX: 0,
              scrollY: 0,
              x: (0, pz.V)() ? -182 : 0,
              width: 976,
              height: t.scrollHeight
            }
          };
          oL().then(function (a) {
            a().from(t).set(r).outputImg().then(function (t) {
              if (t instanceof HTMLImageElement) {
                var r = t.src;
                if (r.startsWith("data:image/jpeg;base64,")) {
                  for (var a = atob(r.split(",")[1]), o = new Uint8Array(a.length), i = 0; i < a.length; i++) o[i] = a.charCodeAt(i);
                  var l = new Blob([o], {
                    type: "image/jpeg"
                  });
                  e(l);
                } else n(new Error("Invalid image data URL"));
              } else n(new Error("Invalid output: Expected an HTMLImageElement"));
            }).catch(function (e) {
              n(e);
            });
          }).catch(function (e) {
            n(e);
          });
        }));
      }, e);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(),
  dL = function () {
    var e = uL(iL().m(function e(t) {
      var n, r;
      return iL().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            return (n = new FormData()).append("file", t, "certificate-image.jpg"), e.n = 1, l()({
              path: "/wp/v2/media",
              method: "POST",
              headers: {
                "Content-Disposition": 'attachment; filename="certificate-image.jpg"'
              },
              body: n
            });
          case 1:
            if ((r = e.v) && r.id && r.source_url) {
              e.n = 2;
              break;
            }
            throw new Error("Failed to upload image to media library");
          case 2:
            return e.a(2, {
              attachment_id: r.id,
              attachment_url: r.source_url
            });
        }
      }, e);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(),
  mL = function () {
    var e = uL(iL().m(function e(t) {
      var n;
      return iL().w(function (e) {
        for (;;) switch (e.p = e.n) {
          case 0:
            return e.p = 0, e.n = 1, l()({
              path: "/wp/v2/media/".concat(t),
              method: "DELETE",
              data: {
                force: !0
              }
            });
          case 1:
            e.n = 3;
            break;
          case 2:
            throw e.p = 2, n = e.v, console.error("Error deleting media:", n), n;
          case 3:
            return e.a(2);
        }
      }, e, null, [[0, 2]]);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }();

function pL() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return fL(u, "_invoke", function (n, r, a) {
      var o,
        l,
        c,
        u = 0,
        s = a || [],
        d = !1,
        m = {
          p: 0,
          n: 0,
          v: e,
          a: p,
          f: p.bind(e, 4),
          d: function (t, n) {
            return o = t, l = 0, c = e, m.n = n, i;
          }
        };
      function p(n, r) {
        for (l = n, c = r, t = 0; !d && u && !a && t < s.length; t++) {
          var a,
            o = s[t],
            p = m.p,
            f = o[2];
          n > 3 ? (a = f === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, l = 0));
        }
        if (a || n > 1) return i;
        throw d = !0, r;
      }
      return function (a, s, f) {
        if (u > 1) throw TypeError("Generator is already running");
        for (d && 1 === s && p(s, f), l = s, c = f; (t = l < 2 ? e : c) || !d;) {
          o || (l ? l < 3 ? (l > 1 && (m.n = -1), p(l, c)) : m.n = c : m.v = c);
          try {
            if (u = 2, o) {
              if (l || (a = "next"), t = o[a]) {
                if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                c = t.value, l < 2 && (l = 0);
              } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
              o = e;
            } else if ((t = (d = m.n < 0) ? c : n.call(r, m)) !== i) break;
          } catch (t) {
            o = e, l = 1, c = t;
          } finally {
            u = 1;
          }
        }
        return {
          value: t,
          done: d
        };
      };
    }(n, a, o), !0), u;
  }
  var i = {};
  function l() {}
  function c() {}
  function u() {}
  t = Object.getPrototypeOf;
  var s = [][r] ? t(t([][r]())) : (fL(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, fL(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, fL(d, "constructor", u), fL(u, "constructor", c), c.displayName = "GeneratorFunction", fL(u, a, "GeneratorFunction"), fL(d), fL(d, a, "Generator"), fL(d, r, function () {
    return this;
  }), fL(d, "toString", function () {
    return "[object Generator]";
  }), (pL = function () {
    return {
      w: o,
      m
    };
  })();
}

function fL(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  fL = function (e, t, n, r) {
    function o(t, n) {
      fL(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, fL(e, t, n, r);
}

function vL(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function gL(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        vL(o, r, a, i, l, "next", e);
      }
      function l(e) {
        vL(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function hL(e, t) {
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
      if ("string" == typeof e) return yL(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yL(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function yL(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var bL = function (e) {
  e.saveAsPDF, e.isLoading;
  var t = e.elementRef,
    n = e.onClose,
    r = e.setShowCoursesModal,
    a = e.componentFrom,
    o = (0, f.Zp)(),
    i = (0, y.useDispatch)(T.default),
    l = (0, y.useSelect)(function (e) {
      return e(T.default).selectCertificate();
    }, []),
    c = hL((0, g.useState)(!1), 2),
    u = c[0],
    s = c[1],
    d = hL((0, g.useState)((null == l ? void 0 : l.name) || "Untitled Template"), 2),
    m = d[0],
    p = d[1],
    v = hL((0, g.useState)(!1), 2),
    _ = v[0],
    w = v[1],
    E = hL((0, g.useState)(!1), 2),
    S = E[0],
    R = E[1],
    x = hL((0, g.useState)(""), 2),
    C = x[0],
    P = x[1],
    O = hL((0, g.useState)(!1), 2),
    k = O[0],
    j = O[1],
    A = function () {
      s(!1), i.updateContent({
        name: m
      });
    },
    M = function () {
      var e = gL(pL().m(function e() {
        var n,
          r,
          a,
          o = arguments;
        return pL().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return n = o.length > 0 && void 0 !== o[0] && o[0], e.p = 1, w(!0), e.n = 2, F();
            case 2:
              return null != (r = e.v) && r.attachment_id && (l.thumbnail_id = null == r ? void 0 : r.attachment_id), e.n = 3, t.current.innerHTML;
            case 3:
              return l.html_contents = e.v, e.n = 4, i.updateCertificate(null == l ? void 0 : l.id, l, n);
            case 4:
              e.n = 6;
              break;
            case 5:
              e.p = 5, a = e.v, console.error(a);
            case 6:
              return e.p = 6, w(!1), e.f(6);
            case 7:
              return e.a(2);
          }
        }, e, null, [[1, 5, 6, 7]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    F = function () {
      var e = gL(pL().m(function e() {
        var n, r, a, o;
        return pL().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, j(!0), e.n = 1, sL(t.current);
            case 1:
              if (r = e.v, 0 === (null == l ? void 0 : l.thumbnail_id)) {
                e.n = 4;
                break;
              }
              return e.n = 2, mL(null == l ? void 0 : l.thumbnail_id);
            case 2:
              return e.n = 3, dL(r);
            case 3:
              a = e.v, e.n = 6;
              break;
            case 4:
              return e.n = 5, dL(r);
            case 5:
              a = e.v;
            case 6:
              if (null === (n = a) || void 0 === n || !n.attachment_id) {
                e.n = 7;
                break;
              }
              return i.updateContent({
                thumbnail_id: a.attachment_id
              }), e.a(2, a);
            case 7:
              e.n = 9;
              break;
            case 8:
              e.p = 8, o = e.v, console.error(o);
            case 9:
              return e.p = 9, j(!1), e.f(9);
            case 10:
              return e.a(2);
          }
        }, e, null, [[0, 8, 9, 10]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    N = function () {
      var e = gL(pL().m(function e() {
        var n, r, a, o;
        return pL().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return R(!0), e.p = 1, e.n = 2, F();
            case 2:
              return null != (r = e.v) && r.attachment_id && (l.thumbnail_id = null == r ? void 0 : r.attachment_id), e.n = 3, null == t || null === (n = t.current) || void 0 === n ? void 0 : n.innerHTML;
            case 3:
              if (a = e.v) {
                e.n = 4;
                break;
              }
              a = C;
            case 4:
              return l.html_contents = a, e.n = 5, i.updateCertificate(null == l ? void 0 : l.id, l, !0);
            case 5:
              e.n = 7;
              break;
            case 6:
              e.p = 6, o = e.v, console.error(o);
            case 7:
              return e.p = 7, R(!1), e.f(7);
            case 8:
              return e.a(2);
          }
        }, e, null, [[1, 6, 7, 8]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    D = function (e) {
      (_ || S) && (e.preventDefault(), e.returnValue = ""), n && (e.preventDefault(), e.returnValue = "", n());
    },
    W = function (e) {
      e.preventDefault(), _ || S || n && (window.history.pushState(null, null, window.location.href), n());
    },
    z = function (e) {
      e.preventDefault(), _ || S || (window.history.pushState(null, null, window.location.href), n());
    };
  return (0, g.useEffect)(function () {
    N();
  }, []), (0, g.useEffect)(function () {
    return n && window.addEventListener("popstate", z), function () {
      window.removeEventListener("popstate", z);
    };
  }, [n]), (0, g.useEffect)(function () {
    return _ || S ? (window.addEventListener("beforeunload", D), window.history.pushState(null, null, window.location.href), window.addEventListener("popstate", W)) : (window.removeEventListener("beforeunload", D), window.removeEventListener("popstate", W)), function () {
      window.removeEventListener("beforeunload", D), window.removeEventListener("popstate", W);
    };
  }, [_, S]), (0, g.useEffect)(function () {
    var e;
    P(null == t || null === (e = t.current) || void 0 === e ? void 0 : e.innerHTML);
  }, [t.current]), h().createElement(h().Fragment, null, h().createElement(I.CardWP, {
    style: {
      borderRadius: 0,
      width: "100%"
    }
  }, h().createElement(I.SpacerWP, {
    padding: 4
  }, h().createElement(I.FlexWP, null, h().createElement(I.FlexItemWP, {
    isBlock: !0
  }, h().createElement(I.FlexWP, {
    justify: "start",
    align: "center",
    gap: 2
  }, h().createElement(Nr, {
    onClick: function () {
      n ? n() : o("/certificates");
    },
    disabled: k || _ || S
  }), h().createElement(I.FlexWP, {
    style: {
      gap: "10px"
    },
    align: "center",
    justify: "start"
  }, u ? h().createElement(I.InputWP, {
    value: Ge(m),
    onChange: function (e) {
      return p(e);
    },
    onPressEnter: A,
    onBlur: A,
    autoFocus: !0
  }) : h().createElement(h().Fragment, null, h().createElement("span", {
    title: Ge(m)
  }, Ge(m)), h().createElement(I.ButtonWP, {
    variant: "tertiary",
    icon: h().createElement(Re, null),
    onClick: u ? A : function () {
      s(!0);
    }
  }))))), h().createElement(I.FlexItemWP, null, h().createElement(I.FlexWP, {
    gap: 3
  }, "course-editor" !== a && h().createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: function () {
      r(!0);
    }
  }, (0, b.__)("Courses", "ohmylms")), h().createElement(I.ButtonWP, {
    variant: "primary",
    loading: _,
    onClick: function () {
      return M(!1);
    }
  }, (0, b.__)("Update", "ohmylms"))))))));
};

const _L = (0, g.memo)(bL);

function wL(e) {
  return wL = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, wL(e);
}

var EL = ["label", "value", "color", "onValueChange", "onColorChange", "placeholder", "presets", "isItProFeature"];

function SL() {
  return SL = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, SL.apply(null, arguments);
}

function RL(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function xL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? RL(Object(n), !0).forEach(function (t) {
      CL(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : RL(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function CL(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != wL(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != wL(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == wL(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function PL(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
