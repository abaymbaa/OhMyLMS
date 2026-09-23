// Reconstructed Webpack factory 51893; arguments retain original semantics.
((e, t, r) => {
  r.d(t, {
    A: () => m
  });
  var n = function () {
      function e(e) {
        var t = this;
        this._insertTag = function (e) {
          var r;
          r = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, r), t.tags.push(e);
        }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
      }
      var t = e.prototype;
      return t.hydrate = function (e) {
        e.forEach(this._insertTag);
      }, t.insert = function (e) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function (e) {
          var t = document.createElement("style");
          return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
        }(this));
        var t = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var r = function (e) {
            if (e.sheet) return e.sheet;
            for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
          }(t);
          try {
            r.insertRule(e, r.cssRules.length);
          } catch (e) {}
        } else t.appendChild(document.createTextNode(e));
        this.ctr++;
      }, t.flush = function () {
        this.tags.forEach(function (e) {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
        }), this.tags = [], this.ctr = 0;
      }, e;
    }(),
    a = r(40390),
    s = r(19735),
    i = r(24534),
    o = r(50483),
    c = r(49503),
    l = r(73716),
    u = function (e, t, r) {
      for (var n = 0, s = 0; n = s, s = (0, a.se)(), 38 === n && 12 === s && (t[r] = 1), !(0, a.Sh)(s);) (0, a.K2)();
      return (0, a.di)(e, a.G1);
    },
    f = new WeakMap(),
    d = function (e) {
      if ("rule" === e.type && e.parent && !(e.length < 1)) {
        for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; "rule" !== r.type;) if (!(r = r.parent)) return;
        if ((1 !== e.props.length || 58 === t.charCodeAt(0) || f.get(r)) && !n) {
          f.set(e, !0);
          for (var i = [], o = function (e, t) {
              return (0, a.VF)(function (e, t) {
                var r = -1,
                  n = 44;
                do {
                  switch ((0, a.Sh)(n)) {
                    case 0:
                      38 === n && 12 === (0, a.se)() && (t[r] = 1), e[r] += u(a.G1 - 1, t, r);
                      break;
                    case 2:
                      e[r] += (0, a.Tb)(n);
                      break;
                    case 4:
                      if (44 === n) {
                        e[++r] = 58 === (0, a.se)() ? "&\f" : "", t[r] = e[r].length;
                        break;
                      }
                    default:
                      e[r] += (0, s.HT)(n);
                  }
                } while (n = (0, a.K2)());
                return e;
              }((0, a.c4)(e), t));
            }(t, i), c = r.props, l = 0, d = 0; l < o.length; l++) for (var h = 0; h < c.length; h++, d++) e.props[d] = i[l] ? o[l].replace(/&\f/g, c[h]) : c[h] + " " + o[l];
        }
      }
    },
    h = function (e) {
      if ("decl" === e.type) {
        var t = e.value;
        108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "");
      }
    };
  function p(e, t) {
    switch ((0, s.tW)(e, t)) {
      case 5103:
        return i.j + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return i.j + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return i.j + e + i.vd + e + i.MS + e + e;
      case 6828:
      case 4268:
        return i.j + e + i.MS + e + e;
      case 6165:
        return i.j + e + i.MS + "flex-" + e + e;
      case 5187:
        return i.j + e + (0, s.HC)(e, /(\w+).+(:[^]+)/, i.j + "box-$1$2" + i.MS + "flex-$1$2") + e;
      case 5443:
        return i.j + e + i.MS + "flex-item-" + (0, s.HC)(e, /flex-|-self/, "") + e;
      case 4675:
        return i.j + e + i.MS + "flex-line-pack" + (0, s.HC)(e, /align-content|flex-|-self/, "") + e;
      case 5548:
        return i.j + e + i.MS + (0, s.HC)(e, "shrink", "negative") + e;
      case 5292:
        return i.j + e + i.MS + (0, s.HC)(e, "basis", "preferred-size") + e;
      case 6060:
        return i.j + "box-" + (0, s.HC)(e, "-grow", "") + i.j + e + i.MS + (0, s.HC)(e, "grow", "positive") + e;
      case 4554:
        return i.j + (0, s.HC)(e, /([^-])(transform)/g, "$1" + i.j + "$2") + e;
      case 6187:
        return (0, s.HC)((0, s.HC)((0, s.HC)(e, /(zoom-|grab)/, i.j + "$1"), /(image-set)/, i.j + "$1"), e, "") + e;
      case 5495:
      case 3959:
        return (0, s.HC)(e, /(image-set\([^]*)/, i.j + "$1$`$1");
      case 4968:
        return (0, s.HC)((0, s.HC)(e, /(.+:)(flex-)?(.*)/, i.j + "box-pack:$3" + i.MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + i.j + e + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return (0, s.HC)(e, /(.+)-inline(.+)/, i.j + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if ((0, s.b2)(e) - 1 - t > 6) switch ((0, s.wN)(e, t + 1)) {
          case 109:
            if (45 !== (0, s.wN)(e, t + 4)) break;
          case 102:
            return (0, s.HC)(e, /(.+:)(.+)-([^]+)/, "$1" + i.j + "$2-$3$1" + i.vd + (108 == (0, s.wN)(e, t + 3) ? "$3" : "$2-$3")) + e;
          case 115:
            return ~(0, s.K5)(e, "stretch") ? p((0, s.HC)(e, "stretch", "fill-available"), t) + e : e;
        }
        break;
      case 4949:
        if (115 !== (0, s.wN)(e, t + 1)) break;
      case 6444:
        switch ((0, s.wN)(e, (0, s.b2)(e) - 3 - (~(0, s.K5)(e, "!important") && 10))) {
          case 107:
            return (0, s.HC)(e, ":", ":" + i.j) + e;
          case 101:
            return (0, s.HC)(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + i.j + (45 === (0, s.wN)(e, 14) ? "inline-" : "") + "box$3$1" + i.j + "$2$3$1" + i.MS + "$2box$3") + e;
        }
        break;
      case 5936:
        switch ((0, s.wN)(e, t + 11)) {
          case 114:
            return i.j + e + i.MS + (0, s.HC)(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return i.j + e + i.MS + (0, s.HC)(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return i.j + e + i.MS + (0, s.HC)(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return i.j + e + i.MS + e + e;
    }
    return e;
  }
  var v = [function (e, t, r, n) {
      if (e.length > -1 && !e.return) switch (e.type) {
        case i.LU:
          e.return = p(e.value, e.length);
          break;
        case i.Sv:
          return (0, o.l)([(0, a.C)(e, {
            value: (0, s.HC)(e.value, "@", "@" + i.j)
          })], n);
        case i.XZ:
          if (e.length) return (0, s.kg)(e.props, function (t) {
            switch ((0, s.YW)(t, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return (0, o.l)([(0, a.C)(e, {
                  props: [(0, s.HC)(t, /:(read-\w+)/, ":" + i.vd + "$1")]
                })], n);
              case "::placeholder":
                return (0, o.l)([(0, a.C)(e, {
                  props: [(0, s.HC)(t, /:(plac\w+)/, ":" + i.j + "input-$1")]
                }), (0, a.C)(e, {
                  props: [(0, s.HC)(t, /:(plac\w+)/, ":" + i.vd + "$1")]
                }), (0, a.C)(e, {
                  props: [(0, s.HC)(t, /:(plac\w+)/, i.MS + "input-$1")]
                })], n);
            }
            return "";
          });
      }
    }],
    m = function (e) {
      var t = e.key;
      if ("css" === t) {
        var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(r, function (e) {
          -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""));
        });
      }
      var a,
        s,
        i = e.stylisPlugins || v,
        u = {},
        f = [];
      a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function (e) {
        for (var t = e.getAttribute("data-emotion").split(" "), r = 1; r < t.length; r++) u[t[r]] = !0;
        f.push(e);
      });
      var p,
        m = [d, h],
        g = [o.A, (0, c.MY)(function (e) {
          p.insert(e);
        })],
        y = (0, c.r1)(m.concat(i, g));
      s = function (e, t, r, n) {
        var a;
        p = r, a = e ? e + "{" + t.styles + "}" : t.styles, (0, o.l)((0, l.wE)(a), y), n && (C.inserted[t.name] = !0);
      };
      var C = {
        key: t,
        sheet: new n({
          key: t,
          container: a,
          nonce: e.nonce,
          speedy: e.speedy,
          prepend: e.prepend,
          insertionPoint: e.insertionPoint
        }),
        nonce: e.nonce,
        inserted: u,
        registered: {},
        insert: s
      };
      return C.sheet.hydrate(f), C;
    };
});
