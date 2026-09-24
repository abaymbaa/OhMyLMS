/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createBadgeList(readRuntime) {
  return function BadgeList() {
    const {
      Ge,
      I: Controls,
      Ie,
      Ne,
      React,
      T: StoreModule,
      We,
      b: I18n,
      d3,
      df,
      g: ReactHooks,
      i3: BadgeEditor,
      l,
      l3,
      lf,
      pG,
      q,
      s3,
      uf,
      y: WordPressData,
      z: Notifications
    } = readRuntime();
    var e = d3((0, ReactHooks.useState)([]), 2),
      t = e[0],
      n = e[1],
      r = d3((0, ReactHooks.useState)(!1), 2),
      a = r[0],
      o = r[1],
      i = d3((0, ReactHooks.useState)(!1), 2),
      c = i[0],
      u = i[1],
      s = d3((0, ReactHooks.useState)(null), 2),
      d = s[0],
      m = s[1],
      p = d3((0, ReactHooks.useState)(null), 2),
      f = p[0],
      v = p[1],
      h = d3((0, ReactHooks.useState)(!1), 2),
      _ = h[0],
      w = h[1],
      E = (0, Notifications.A)(),
      openNotificationWithIcon = E.openNotificationWithIcon,
      contextHolder = E.contextHolder,
      x = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      C = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      P = d3((0, ReactHooks.useState)(null), 2),
      O = P[0],
      k = P[1],
      j = [{
        title: (0, I18n.__)("Badge Name", "ohmylms"),
        dataIndex: "name",
        key: "name",
        sorter: !0,
        width: "90%",
        render: function (e, t) {
          return <Controls.FlexWP gap={4} align={"start"} justify={"start"}><Controls.AvatarWP shape={"square"} src={t.image} size={80} /><Controls.FlexItemWP><Controls.TextWP as={"span"} color={"#000d25"} size={16} numberOfLines={2} truncate={!0} onClick={function () {
                return A(t);
              }} style={{
                cursor: "pointer"
              }}>{Ge(t.name)}</Controls.TextWP>{O === (null == t ? void 0 : t.slug) && <Controls.ButtonWP onClick={function () {
                return A(t);
              }} label={(0, I18n.__)("Edit", "ohmylms")} variant={"text"} style={{
                height: "26px"
              }}><pG.A /></Controls.ButtonWP>}</Controls.FlexItemWP></Controls.FlexWP>;
        }
      }, {
        title: "Action",
        dataIndex: "action",
        key: "action",
        width: null,
        render: function (e, t) {
          return <Controls.DropdownMenuWP controls={[{
            title: (0, I18n.__)("Edit", "ohmylms"),
            onClick: function () {
              return A(t);
            },
            icon: <span><pG.A /></span>
          }, {
            title: (0, I18n.__)("Delete", "ohmylms"),
            onClick: function () {
              return M(null == t ? void 0 : t.slug);
            },
            icon: <We />
          }]} icon={<q.Icon icon={Ne.A} />} />;
        }
      }],
      A = function (e) {
        m(e), u(!0);
      },
      M = function (e) {
        w(!0), v(e);
      },
      F = function () {
        var e = s3(l3().m(function e() {
          var n, r, a;
          return l3().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return e.p = 0, o(!0), n = t.filter(function (e) {
                  return e.slug !== f;
                }), e.n = 1, l()({
                  path: "/creator-lms/v1/engagement/badges",
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(n)
                });
              case 1:
                null != (r = e.v) && r.success && (N(), w(!1), openNotificationWithIcon("success", (0, I18n.__)("Badge deleted successfully!", "ohmylms"))), e.n = 3;
                break;
              case 2:
                e.p = 2, a = e.v, console.error("Error deleting badge:", a);
              case 3:
                return e.p = 3, o(!1), e.f(3);
              case 4:
                return e.a(2);
            }
          }, e, null, [[0, 2, 3, 4]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
      N = function () {
        var e = s3(l3().m(function e() {
          var t, r;
          return l3().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return e.p = 0, o(!0), e.n = 1, l()({
                  path: "creator-lms/v1/engagement/badges"
                });
              case 1:
                t = e.v, n(t), e.n = 3;
                break;
              case 2:
                e.p = 2, r = e.v, console.error(r);
              case 3:
                return e.p = 3, o(!1), e.f(3);
              case 4:
                return e.a(2);
            }
          }, e, null, [[0, 2, 3, 4]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();
    return (0, ReactHooks.useEffect)(function () {
      var e = !0;
      return e && N(), function () {
        e = !1;
      };
    }, []), (0, ReactHooks.useEffect)(function () {
      !a && x && openNotificationWithIcon(C, x);
    }, [x]), (0, ReactHooks.useEffect)(function () {
      c || (m(null), v(null));
    }, [c]), <React.Fragment>{contextHolder}<Controls.CardWP isBorderless={!0} fullWidth={!0}><Controls.SpacerWP padding={5}><Controls.SpacerWP marginBottom={4}><Controls.FlexWP gap={3} justify={"flex-end"}>{React.createElement(lf, {
                label: (0, I18n.__)("Add Badge", "ohmylms"),
                onClick: function () {
                  return u(!0);
                }
              })}</Controls.FlexWP></Controls.SpacerWP><Controls.TableWP rowKey={"id"} columns={j} dataSource={t || []} loading={a} scroll={{
            x: "max-content"
          }} onMouseEnterOnRow={function (e) {
            return k(null == e ? void 0 : e.slug);
          }} onMouseLeaveOnRow={function () {
            return k(null);
          }} locale={{
            emptyText: React.createElement(uf, {
              icon: React.createElement(df, null),
              title: (0, I18n.__)("No badge yet!", "ohmylms"),
              description: (0, I18n.__)("Start building your first badge and it'll show up here as soon as you hit publish.", "ohmylms")
            })
          }} /></Controls.SpacerWP></Controls.CardWP>{c && <BadgeEditor data={d} isOpen={c} onClose={u} badgeList={t} setItems={n} fetchData={N} />}{_ && <Ie title={(0, I18n.__)("Delete Badge", "ohmylms")} description={(0, I18n.__)("Are you sure you want to delete this badge?", "ohmylms")} onClose={function () {
        w(!1);
      }} onDelete={F} isOpen={_} isDelete={!0} />}</React.Fragment>;
  };
}
