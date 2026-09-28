/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createCertificateEditorHeader(readRuntime) {
  return function CertificateEditorHeader(props) {
    const {
      Ge,
      I: Controls,
      Nr,
      Re,
      React,
      T: StoreModule,
      b: I18n,
      dL,
      f: Router,
      g: ReactHooks,
      gL,
      hL,
      mL,
      pL,
      sL,
      y: WordPressData
    } = readRuntime();
    props.saveAsPDF, props.isLoading;
    var t = props.elementRef,
      n = props.onClose,
      r = props.setShowCoursesModal,
      a = props.componentFrom,
      o = (0, Router.Zp)(),
      i = (0, WordPressData.useDispatch)(StoreModule.default),
      l = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectCertificate();
      }, []),
      c = hL((0, ReactHooks.useState)(!1), 2),
      u = c[0],
      s = c[1],
      d = hL((0, ReactHooks.useState)((null == l ? void 0 : l.name) || "Untitled Template"), 2),
      m = d[0],
      p = d[1],
      v = hL((0, ReactHooks.useState)(!1), 2),
      _ = v[0],
      w = v[1],
      E = hL((0, ReactHooks.useState)(!1), 2),
      S = E[0],
      R = E[1],
      x = hL((0, ReactHooks.useState)(""), 2),
      C = x[0],
      P = x[1],
      O = hL((0, ReactHooks.useState)(!1), 2),
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
    return (0, ReactHooks.useEffect)(function () {
      N();
    }, []), (0, ReactHooks.useEffect)(function () {
      return n && window.addEventListener("popstate", z), function () {
        window.removeEventListener("popstate", z);
      };
    }, [n]), (0, ReactHooks.useEffect)(function () {
      return _ || S ? (window.addEventListener("beforeunload", D), window.history.pushState(null, null, window.location.href), window.addEventListener("popstate", W)) : (window.removeEventListener("beforeunload", D), window.removeEventListener("popstate", W)), function () {
        window.removeEventListener("beforeunload", D), window.removeEventListener("popstate", W);
      };
    }, [_, S]), (0, ReactHooks.useEffect)(function () {
      var e;
      P(null == t || null === (e = t.current) || void 0 === e ? void 0 : e.innerHTML);
    }, [t.current]), <React.Fragment><Controls.CardWP style={{
        borderRadius: 0,
        width: "100%"
      }}><Controls.SpacerWP padding={4}><Controls.FlexWP><Controls.FlexItemWP isBlock={!0}><Controls.FlexWP justify={"start"} align={"center"} gap={2}><Nr onClick={function () {
                  n ? n() : o("/certificates");
                }} disabled={k || _ || S} /><Controls.FlexWP style={{
                  gap: "10px"
                }} align={"center"} justify={"start"}>{u ? <Controls.InputWP value={Ge(m)} onChange={function (e) {
                    return p(e);
                  }} onPressEnter={A} onBlur={A} autoFocus={!0} /> : <React.Fragment><span title={Ge(m)}>{Ge(m)}</span><Controls.ButtonWP variant={"tertiary"} icon={<Re />} onClick={u ? A : function () {
                      s(!0);
                    }} /></React.Fragment>}</Controls.FlexWP></Controls.FlexWP></Controls.FlexItemWP><Controls.FlexItemWP><Controls.FlexWP gap={3}>{"course-editor" !== a && <Controls.ButtonWP variant={"secondary"} onClick={function () {
                  r(!0);
                }}>{(0, I18n.__)("Courses", "ohmylms")}</Controls.ButtonWP>}<Controls.ButtonWP variant={"primary"} loading={_} onClick={function () {
                  return M(!1);
                }}>{(0, I18n.__)("Update", "ohmylms")}</Controls.ButtonWP></Controls.FlexWP></Controls.FlexItemWP></Controls.FlexWP></Controls.SpacerWP></Controls.CardWP></React.Fragment>;
  };
}
