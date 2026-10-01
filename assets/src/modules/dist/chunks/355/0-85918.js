// Reconstructed Webpack factory 85918; arguments retain original semantics.
(function (e, t, n) {
  var l = this && this.__awaiter || function (e, t, n, l) {
      return new (n || (n = Promise))(function (a, i) {
        function o(e) {
          try {
            c(l.next(e));
          } catch (e) {
            i(e);
          }
        }
        function r(e) {
          try {
            c(l.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(o, r);
        }
        c((l = l.apply(e, t || [])).next());
      });
    },
    a = this && this.__generator || function (e, t) {
      var n,
        l,
        a,
        i = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: []
        },
        o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
      return o.next = r(0), o.throw = r(1), o.return = r(2), "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function r(r) {
        return function (c) {
          return function (r) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, r[0] && (i = 0)), i;) try {
              if (n = 1, l && (a = 2 & r[0] ? l.return : r[0] ? l.throw || ((a = l.return) && a.call(l), 0) : l.next) && !(a = a.call(l, r[1])).done) return a;
              switch (l = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                case 0:
                case 1:
                  a = r;
                  break;
                case 4:
                  return i.label++, {
                    value: r[1],
                    done: !1
                  };
                case 5:
                  i.label++, l = r[1], r = [0];
                  continue;
                case 7:
                  r = i.ops.pop(), i.trys.pop();
                  continue;
                default:
                  if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                    i = 0;
                    continue;
                  }
                  if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                    i.label = r[1];
                    break;
                  }
                  if (6 === r[0] && i.label < a[1]) {
                    i.label = a[1], a = r;
                    break;
                  }
                  if (a && i.label < a[2]) {
                    i.label = a[2], i.ops.push(r);
                    break;
                  }
                  a[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              r = t.call(e, i);
            } catch (e) {
              r = [6, e], l = 0;
            } finally {
              n = a = 0;
            }
            if (5 & r[0]) throw r[1];
            return {
              value: r[0] ? r[1] : void 0,
              done: !0
            };
          }([r, c]);
        };
      }
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.templateImport = void 0;
  var i = n(49050),
    o = n(11619);
  t.templateImport = function (e, t, n) {
    return l(void 0, void 0, void 0, function () {
      var l, r, c, u;
      return a(this, function (a) {
        switch (a.label) {
          case 0:
            return [4, new o.Uploader(function () {
              return Promise.resolve("");
            }, {
              accept: t,
              limit: 1
            }).chooseFile()];
          case 1:
            return l = a.sent()[0], r = new FileReader(), "mjml" !== e ? [3, 3] : [4, new Promise(function (e, t) {
              r.onload = function (n) {
                if (n.target) try {
                  var a = (0, i.MjmlToJson)(n.target.result);
                  e([l.name, a]);
                } catch (e) {
                  t();
                } else t();
              }, r.readAsText(l);
            })];
          case 2:
            return u = a.sent(), [3, 5];
          case 3:
            return [4, new Promise(function (e, t) {
              r.onload = function (n) {
                if (n.target) try {
                  var l = JSON.parse(n.target.result);
                  e(l);
                } catch (e) {
                  t();
                } else t();
              }, r.readAsText(l);
            })];
          case 4:
            u = a.sent(), a.label = 5;
          case 5:
            return n({
              subject: (c = u)[0],
              content: "mjml" === e ? c[1] : c.content,
              subTitle: "mjml" === e ? "" : c.subTitle
            }), [2];
        }
      });
    });
  };
});
