// Reconstructed Webpack factory 8546; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    S: () => me
  });
  var r = n(58168),
    a = n(89379),
    i = n(20816);
  function o(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (0, i.A)(r.key), r);
    }
  }
  var s = n(63662);
  function l(e) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, l(e);
  }
  function c() {
    try {
      var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {}
    return (c = function () {
      return !!e;
    })();
  }
  var u = n(82284),
    d = n(9417);
  var p = n(43145),
    f = n(27800);
  function h(e) {
    return function (e) {
      if (Array.isArray(e)) return (0, p.A)(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || (0, f.A)(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  var _ = n(41594),
    m = n(15777),
    A = n(11456),
    g = Number.isNaN || function (e) {
      return "number" == typeof e && e != e;
    };
  function y(e, t) {
    return e === t || !(!g(e) || !g(t));
  }
  function v(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++) if (!y(e[n], t[n])) return !1;
    return !0;
  }
  for (var E = n(80045), b = {
      name: "7pg0cj-a11yText",
      styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
    }, w = function (e) {
      return (0, A.Y)("span", (0, r.A)({
        css: b
      }, e));
    }, C = {
      guidance: function (e) {
        var t = e.isSearchable,
          n = e.isMulti,
          r = e.tabSelectsValue,
          a = e.context,
          i = e.isInitialFocus;
        switch (a) {
          case "menu":
            return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(r ? ", press Tab to select the option and exit the menu" : "", ".");
          case "input":
            return i ? "".concat(e["aria-label"] || "Select", " is focused ").concat(t ? ",type to refine list" : "", ", press Down to open the menu, ").concat(n ? " press left to focus selected values" : "") : "";
          case "value":
            return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
          default:
            return "";
        }
      },
      onChange: function (e) {
        var t = e.action,
          n = e.label,
          r = void 0 === n ? "" : n,
          a = e.labels,
          i = e.isDisabled;
        switch (t) {
          case "deselect-option":
          case "pop-value":
          case "remove-value":
            return "option ".concat(r, ", deselected.");
          case "clear":
            return "All selected options have been cleared.";
          case "initial-input-focus":
            return "option".concat(a.length > 1 ? "s" : "", " ").concat(a.join(","), ", selected.");
          case "select-option":
            return "option ".concat(r, i ? " is disabled. Select another option." : ", selected.");
          default:
            return "";
        }
      },
      onFocus: function (e) {
        var t = e.context,
          n = e.focused,
          r = e.options,
          a = e.label,
          i = void 0 === a ? "" : a,
          o = e.selectValue,
          s = e.isDisabled,
          l = e.isSelected,
          c = e.isAppleDevice,
          u = function (e, t) {
            return e && e.length ? "".concat(e.indexOf(t) + 1, " of ").concat(e.length) : "";
          };
        if ("value" === t && o) return "value ".concat(i, " focused, ").concat(u(o, n), ".");
        if ("menu" === t && c) {
          var d = s ? " disabled" : "",
            p = "".concat(l ? " selected" : "").concat(d);
          return "".concat(i).concat(p, ", ").concat(u(r, n), ".");
        }
        return "";
      },
      onFilter: function (e) {
        var t = e.inputValue,
          n = e.resultsMessage;
        return "".concat(n).concat(t ? " for search term " + t : "", ".");
      }
    }, O = function (e) {
      var t = e.ariaSelection,
        n = e.focusedOption,
        r = e.focusedValue,
        i = e.focusableOptions,
        o = e.isFocused,
        s = e.selectValue,
        l = e.selectProps,
        c = e.id,
        u = e.isAppleDevice,
        d = l.ariaLiveMessages,
        p = l.getOptionLabel,
        f = l.inputValue,
        h = l.isMulti,
        m = l.isOptionDisabled,
        g = l.isSearchable,
        y = l.menuIsOpen,
        v = l.options,
        E = l.screenReaderStatus,
        b = l.tabSelectsValue,
        O = l.isLoading,
        M = l["aria-label"],
        S = l["aria-live"],
        T = (0, _.useMemo)(function () {
          return (0, a.A)((0, a.A)({}, C), d || {});
        }, [d]),
        k = (0, _.useMemo)(function () {
          var e,
            n = "";
          if (t && T.onChange) {
            var r = t.option,
              i = t.options,
              o = t.removedValue,
              l = t.removedValues,
              c = t.value,
              u = o || r || (e = c, Array.isArray(e) ? null : e),
              d = u ? p(u) : "",
              f = i || l || void 0,
              h = f ? f.map(p) : [],
              _ = (0, a.A)({
                isDisabled: u && m(u, s),
                label: d,
                labels: h
              }, t);
            n = T.onChange(_);
          }
          return n;
        }, [t, T, m, s, p]),
        x = (0, _.useMemo)(function () {
          var e = "",
            t = n || r,
            a = !!(n && s && s.includes(n));
          if (t && T.onFocus) {
            var o = {
              focused: t,
              label: p(t),
              isDisabled: m(t, s),
              isSelected: a,
              options: i,
              context: t === n ? "menu" : "value",
              selectValue: s,
              isAppleDevice: u
            };
            e = T.onFocus(o);
          }
          return e;
        }, [n, r, p, m, T, i, s, u]),
        D = (0, _.useMemo)(function () {
          var e = "";
          if (y && v.length && !O && T.onFilter) {
            var t = E({
              count: i.length
            });
            e = T.onFilter({
              inputValue: f,
              resultsMessage: t
            });
          }
          return e;
        }, [i, f, y, T, v, E, O]),
        I = "initial-input-focus" === (null == t ? void 0 : t.action),
        P = (0, _.useMemo)(function () {
          var e = "";
          if (T.guidance) {
            var t = r ? "value" : y ? "menu" : "input";
            e = T.guidance({
              "aria-label": M,
              context: t,
              isDisabled: n && m(n, s),
              isMulti: h,
              isSearchable: g,
              tabSelectsValue: b,
              isInitialFocus: I
            });
          }
          return e;
        }, [M, n, r, h, m, g, y, T, s, b, I]),
        L = (0, A.Y)(_.Fragment, null, (0, A.Y)("span", {
          id: "aria-selection"
        }, k), (0, A.Y)("span", {
          id: "aria-focused"
        }, x), (0, A.Y)("span", {
          id: "aria-results"
        }, D), (0, A.Y)("span", {
          id: "aria-guidance"
        }, P));
      return (0, A.Y)(_.Fragment, null, (0, A.Y)(w, {
        id: c
      }, I && L), (0, A.Y)(w, {
        "aria-live": S,
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        role: "log"
      }, o && !I && L));
    }, M = [{
      base: "A",
      letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
    }, {
      base: "AA",
      letters: "Ꜳ"
    }, {
      base: "AE",
      letters: "ÆǼǢ"
    }, {
      base: "AO",
      letters: "Ꜵ"
    }, {
      base: "AU",
      letters: "Ꜷ"
    }, {
      base: "AV",
      letters: "ꜸꜺ"
    }, {
      base: "AY",
      letters: "Ꜽ"
    }, {
      base: "B",
      letters: "BⒷＢḂḄḆɃƂƁ"
    }, {
      base: "C",
      letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
    }, {
      base: "D",
      letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
    }, {
      base: "DZ",
      letters: "ǱǄ"
    }, {
      base: "Dz",
      letters: "ǲǅ"
    }, {
      base: "E",
      letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
    }, {
      base: "F",
      letters: "FⒻＦḞƑꝻ"
    }, {
      base: "G",
      letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
    }, {
      base: "H",
      letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
    }, {
      base: "I",
      letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
    }, {
      base: "J",
      letters: "JⒿＪĴɈ"
    }, {
      base: "K",
      letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
    }, {
      base: "L",
      letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
    }, {
      base: "LJ",
      letters: "Ǉ"
    }, {
      base: "Lj",
      letters: "ǈ"
    }, {
      base: "M",
      letters: "MⓂＭḾṀṂⱮƜ"
    }, {
      base: "N",
      letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
    }, {
      base: "NJ",
      letters: "Ǌ"
    }, {
      base: "Nj",
      letters: "ǋ"
    }, {
      base: "O",
      letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
    }, {
      base: "OI",
      letters: "Ƣ"
    }, {
      base: "OO",
      letters: "Ꝏ"
    }, {
      base: "OU",
      letters: "Ȣ"
    }, {
      base: "P",
      letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
    }, {
      base: "Q",
      letters: "QⓆＱꝖꝘɊ"
    }, {
      base: "R",
      letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
    }, {
      base: "S",
      letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
    }, {
      base: "T",
      letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
    }, {
      base: "TZ",
      letters: "Ꜩ"
    }, {
      base: "U",
      letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
    }, {
      base: "V",
      letters: "VⓋＶṼṾƲꝞɅ"
    }, {
      base: "VY",
      letters: "Ꝡ"
    }, {
      base: "W",
      letters: "WⓌＷẀẂŴẆẄẈⱲ"
    }, {
      base: "X",
      letters: "XⓍＸẊẌ"
    }, {
      base: "Y",
      letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
    }, {
      base: "Z",
      letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
    }, {
      base: "a",
      letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
    }, {
      base: "aa",
      letters: "ꜳ"
    }, {
      base: "ae",
      letters: "æǽǣ"
    }, {
      base: "ao",
      letters: "ꜵ"
    }, {
      base: "au",
      letters: "ꜷ"
    }, {
      base: "av",
      letters: "ꜹꜻ"
    }, {
      base: "ay",
      letters: "ꜽ"
    }, {
      base: "b",
      letters: "bⓑｂḃḅḇƀƃɓ"
    }, {
      base: "c",
      letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
    }, {
      base: "d",
      letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
    }, {
      base: "dz",
      letters: "ǳǆ"
    }, {
      base: "e",
      letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
    }, {
      base: "f",
      letters: "fⓕｆḟƒꝼ"
    }, {
      base: "g",
      letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
    }, {
      base: "h",
      letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
    }, {
      base: "hv",
      letters: "ƕ"
    }, {
      base: "i",
      letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
    }, {
      base: "j",
      letters: "jⓙｊĵǰɉ"
    }, {
      base: "k",
      letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
    }, {
      base: "l",
      letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
    }, {
      base: "lj",
      letters: "ǉ"
    }, {
      base: "m",
      letters: "mⓜｍḿṁṃɱɯ"
    }, {
      base: "n",
      letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
    }, {
      base: "nj",
      letters: "ǌ"
    }, {
      base: "o",
      letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
    }, {
      base: "oi",
      letters: "ƣ"
    }, {
      base: "ou",
      letters: "ȣ"
    }, {
      base: "oo",
      letters: "ꝏ"
    }, {
      base: "p",
      letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
    }, {
      base: "q",
      letters: "qⓠｑɋꝗꝙ"
    }, {
      base: "r",
      letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
    }, {
      base: "s",
      letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
    }, {
      base: "t",
      letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
    }, {
      base: "tz",
      letters: "ꜩ"
    }, {
      base: "u",
      letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
    }, {
      base: "v",
      letters: "vⓥｖṽṿʋꝟʌ"
    }, {
      base: "vy",
      letters: "ꝡ"
    }, {
      base: "w",
      letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
    }, {
      base: "x",
      letters: "xⓧｘẋẍ"
    }, {
      base: "y",
      letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
    }, {
      base: "z",
      letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
    }], S = new RegExp("[" + M.map(function (e) {
      return e.letters;
    }).join("") + "]", "g"), T = {}, k = 0; k < M.length; k++) for (var x = M[k], D = 0; D < x.letters.length; D++) T[x.letters[D]] = x.base;
  var I = function (e) {
      return e.replace(S, function (e) {
        return T[e];
      });
    },
    P = function (e, t) {
      void 0 === t && (t = v);
      var n = null;
      function r() {
        for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
        if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
        var i = e.apply(this, r);
        return n = {
          lastResult: i,
          lastArgs: r,
          lastThis: this
        }, i;
      }
      return r.clear = function () {
        n = null;
      }, r;
    }(I),
    L = function (e) {
      return e.replace(/^\s+|\s+$/g, "");
    },
    R = function (e) {
      return "".concat(e.label, " ").concat(e.value);
    },
    B = ["innerRef"];
  function N(e) {
    var t = e.innerRef,
      n = (0, E.A)(e, B),
      a = (0, m.r)(n, "onExited", "in", "enter", "exit", "appear");
    return (0, A.Y)("input", (0, r.A)({
      ref: t
    }, a, {
      css: (0, A.AH)({
        label: "dummyInput",
        background: 0,
        border: 0,
        caretColor: "transparent",
        fontSize: "inherit",
        gridArea: "1 / 1 / 2 / 3",
        outline: 0,
        padding: 0,
        width: 1,
        color: "transparent",
        left: -100,
        opacity: 0,
        position: "relative",
        transform: "scale(.01)"
      }, "", "")
    }));
  }
  var U = ["boxSizing", "height", "overflow", "paddingRight", "position"],
    F = {
      boxSizing: "border-box",
      overflow: "hidden",
      position: "relative",
      height: "100%"
    };
  function j(e) {
    e.cancelable && e.preventDefault();
  }
  function H(e) {
    e.stopPropagation();
  }
  function W() {
    var e = this.scrollTop,
      t = this.scrollHeight,
      n = e + this.offsetHeight;
    0 === e ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
  }
  function K() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
  }
  var V = !("undefined" == typeof window || !window.document || !window.document.createElement),
    z = 0,
    Y = {
      capture: !1,
      passive: !1
    },
    Q = function (e) {
      var t = e.target;
      return t.ownerDocument.activeElement && t.ownerDocument.activeElement.blur();
    },
    G = {
      name: "1kfdb0e",
      styles: "position:fixed;left:0;bottom:0;right:0;top:0"
    };
  function $(e) {
    var t = e.children,
      n = e.lockEnabled,
      r = e.captureEnabled,
      a = function (e) {
        var t = e.isEnabled,
          n = e.onBottomArrive,
          r = e.onBottomLeave,
          a = e.onTopArrive,
          i = e.onTopLeave,
          o = (0, _.useRef)(!1),
          s = (0, _.useRef)(!1),
          l = (0, _.useRef)(0),
          c = (0, _.useRef)(null),
          u = (0, _.useCallback)(function (e, t) {
            if (null !== c.current) {
              var l = c.current,
                u = l.scrollTop,
                d = l.scrollHeight,
                p = l.clientHeight,
                f = c.current,
                h = t > 0,
                _ = d - p - u,
                m = !1;
              _ > t && o.current && (r && r(e), o.current = !1), h && s.current && (i && i(e), s.current = !1), h && t > _ ? (n && !o.current && n(e), f.scrollTop = d, m = !0, o.current = !0) : !h && -t > u && (a && !s.current && a(e), f.scrollTop = 0, m = !0, s.current = !0), m && function (e) {
                e.cancelable && e.preventDefault(), e.stopPropagation();
              }(e);
            }
          }, [n, r, a, i]),
          d = (0, _.useCallback)(function (e) {
            u(e, e.deltaY);
          }, [u]),
          p = (0, _.useCallback)(function (e) {
            l.current = e.changedTouches[0].clientY;
          }, []),
          f = (0, _.useCallback)(function (e) {
            var t = l.current - e.changedTouches[0].clientY;
            u(e, t);
          }, [u]),
          h = (0, _.useCallback)(function (e) {
            if (e) {
              var t = !!m.s && {
                passive: !1
              };
              e.addEventListener("wheel", d, t), e.addEventListener("touchstart", p, t), e.addEventListener("touchmove", f, t);
            }
          }, [f, p, d]),
          A = (0, _.useCallback)(function (e) {
            e && (e.removeEventListener("wheel", d, !1), e.removeEventListener("touchstart", p, !1), e.removeEventListener("touchmove", f, !1));
          }, [f, p, d]);
        return (0, _.useEffect)(function () {
          if (t) {
            var e = c.current;
            return h(e), function () {
              A(e);
            };
          }
        }, [t, h, A]), function (e) {
          c.current = e;
        };
      }({
        isEnabled: void 0 === r || r,
        onBottomArrive: e.onBottomArrive,
        onBottomLeave: e.onBottomLeave,
        onTopArrive: e.onTopArrive,
        onTopLeave: e.onTopLeave
      }),
      i = function (e) {
        var t = e.isEnabled,
          n = e.accountForScrollbars,
          r = void 0 === n || n,
          a = (0, _.useRef)({}),
          i = (0, _.useRef)(null),
          o = (0, _.useCallback)(function (e) {
            if (V) {
              var t = document.body,
                n = t && t.style;
              if (r && U.forEach(function (e) {
                var t = n && n[e];
                a.current[e] = t;
              }), r && z < 1) {
                var i = parseInt(a.current.paddingRight, 10) || 0,
                  o = document.body ? document.body.clientWidth : 0,
                  s = window.innerWidth - o + i || 0;
                Object.keys(F).forEach(function (e) {
                  var t = F[e];
                  n && (n[e] = t);
                }), n && (n.paddingRight = "".concat(s, "px"));
              }
              t && K() && (t.addEventListener("touchmove", j, Y), e && (e.addEventListener("touchstart", W, Y), e.addEventListener("touchmove", H, Y))), z += 1;
            }
          }, [r]),
          s = (0, _.useCallback)(function (e) {
            if (V) {
              var t = document.body,
                n = t && t.style;
              z = Math.max(z - 1, 0), r && z < 1 && U.forEach(function (e) {
                var t = a.current[e];
                n && (n[e] = t);
              }), t && K() && (t.removeEventListener("touchmove", j, Y), e && (e.removeEventListener("touchstart", W, Y), e.removeEventListener("touchmove", H, Y)));
            }
          }, [r]);
        return (0, _.useEffect)(function () {
          if (t) {
            var e = i.current;
            return o(e), function () {
              s(e);
            };
          }
        }, [t, o, s]), function (e) {
          i.current = e;
        };
      }({
        isEnabled: n
      });
    return (0, A.Y)(_.Fragment, null, n && (0, A.Y)("div", {
      onClick: Q,
      css: G
    }), t(function (e) {
      a(e), i(e);
    }));
  }
  var q = {
      name: "1a0ro4n-requiredInput",
      styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
    },
    Z = function (e) {
      var t = e.name,
        n = e.onFocus;
      return (0, A.Y)("input", {
        required: !0,
        name: t,
        tabIndex: -1,
        "aria-hidden": "true",
        onFocus: n,
        css: q,
        value: "",
        onChange: function () {}
      });
    };
  function X(e) {
    var t;
    return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform);
  }
  function J() {
    return X(/^Mac/i);
  }
  var ee = {
      clearIndicator: m.a,
      container: m.b,
      control: m.d,
      dropdownIndicator: m.e,
      group: m.g,
      groupHeading: m.f,
      indicatorsContainer: m.i,
      indicatorSeparator: m.h,
      input: m.j,
      loadingIndicator: m.l,
      loadingMessage: m.k,
      menu: m.m,
      menuList: m.n,
      menuPortal: m.o,
      multiValue: m.p,
      multiValueLabel: m.q,
      multiValueRemove: m.t,
      noOptionsMessage: m.u,
      option: m.v,
      placeholder: m.w,
      singleValue: m.x,
      valueContainer: m.y
    },
    te = {
      borderRadius: 4,
      colors: {
        primary: "#2684FF",
        primary75: "#4C9AFF",
        primary50: "#B2D4FF",
        primary25: "#DEEBFF",
        danger: "#DE350B",
        dangerLight: "#FFBDAD",
        neutral0: "hsl(0, 0%, 100%)",
        neutral5: "hsl(0, 0%, 95%)",
        neutral10: "hsl(0, 0%, 90%)",
        neutral20: "hsl(0, 0%, 80%)",
        neutral30: "hsl(0, 0%, 70%)",
        neutral40: "hsl(0, 0%, 60%)",
        neutral50: "hsl(0, 0%, 50%)",
        neutral60: "hsl(0, 0%, 40%)",
        neutral70: "hsl(0, 0%, 30%)",
        neutral80: "hsl(0, 0%, 20%)",
        neutral90: "hsl(0, 0%, 10%)"
      },
      spacing: {
        baseUnit: 4,
        controlHeight: 38,
        menuGutter: 8
      }
    },
    ne = {
      "aria-live": "polite",
      backspaceRemovesValue: !0,
      blurInputOnSelect: (0, m.z)(),
      captureMenuScroll: !(0, m.z)(),
      classNames: {},
      closeMenuOnSelect: !0,
      closeMenuOnScroll: !1,
      components: {},
      controlShouldRenderValue: !0,
      escapeClearsValue: !1,
      filterOption: function (e, t) {
        if (e.data.__isNew__) return !0;
        var n = (0, a.A)({
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: R,
            trim: !0,
            matchFrom: "any"
          }, undefined),
          r = n.ignoreCase,
          i = n.ignoreAccents,
          o = n.stringify,
          s = n.trim,
          l = n.matchFrom,
          c = s ? L(t) : t,
          u = s ? L(o(e)) : o(e);
        return r && (c = c.toLowerCase(), u = u.toLowerCase()), i && (c = P(c), u = I(u)), "start" === l ? u.substr(0, c.length) === c : u.indexOf(c) > -1;
      },
      formatGroupLabel: function (e) {
        return e.label;
      },
      getOptionLabel: function (e) {
        return e.label;
      },
      getOptionValue: function (e) {
        return e.value;
      },
      isDisabled: !1,
      isLoading: !1,
      isMulti: !1,
      isRtl: !1,
      isSearchable: !0,
      isOptionDisabled: function (e) {
        return !!e.isDisabled;
      },
      loadingMessage: function () {
        return "Loading...";
      },
      maxMenuHeight: 300,
      minMenuHeight: 140,
      menuIsOpen: !1,
      menuPlacement: "bottom",
      menuPosition: "absolute",
      menuShouldBlockScroll: !1,
      menuShouldScrollIntoView: !(0, m.A)(),
      noOptionsMessage: function () {
        return "No options";
      },
      openMenuOnFocus: !1,
      openMenuOnClick: !0,
      options: [],
      pageSize: 5,
      placeholder: "Select...",
      screenReaderStatus: function (e) {
        var t = e.count;
        return "".concat(t, " result").concat(1 !== t ? "s" : "", " available");
      },
      styles: {},
      tabIndex: 0,
      tabSelectsValue: !0,
      unstyled: !1
    };
  function re(e, t, n, r) {
    return {
      type: "option",
      data: t,
      isDisabled: de(e, t, n),
      isSelected: pe(e, t, n),
      label: ce(e, t),
      value: ue(e, t),
      index: r
    };
  }
  function ae(e, t) {
    return e.options.map(function (n, r) {
      if ("options" in n) {
        var a = n.options.map(function (n, r) {
          return re(e, n, t, r);
        }).filter(function (t) {
          return se(e, t);
        });
        return a.length > 0 ? {
          type: "group",
          data: n,
          options: a,
          index: r
        } : void 0;
      }
      var i = re(e, n, t, r);
      return se(e, i) ? i : void 0;
    }).filter(m.K);
  }
  function ie(e) {
    return e.reduce(function (e, t) {
      return "group" === t.type ? e.push.apply(e, h(t.options.map(function (e) {
        return e.data;
      }))) : e.push(t.data), e;
    }, []);
  }
  function oe(e, t) {
    return e.reduce(function (e, n) {
      return "group" === n.type ? e.push.apply(e, h(n.options.map(function (e) {
        return {
          data: e.data,
          id: "".concat(t, "-").concat(n.index, "-").concat(e.index)
        };
      }))) : e.push({
        data: n.data,
        id: "".concat(t, "-").concat(n.index)
      }), e;
    }, []);
  }
  function se(e, t) {
    var n = e.inputValue,
      r = void 0 === n ? "" : n,
      a = t.data,
      i = t.isSelected,
      o = t.label,
      s = t.value;
    return (!he(e) || !i) && fe(e, {
      label: o,
      value: s,
      data: a
    }, r);
  }
  var le = function (e, t) {
      var n;
      return (null === (n = e.find(function (e) {
        return e.data === t;
      })) || void 0 === n ? void 0 : n.id) || null;
    },
    ce = function (e, t) {
      return e.getOptionLabel(t);
    },
    ue = function (e, t) {
      return e.getOptionValue(t);
    };
  function de(e, t, n) {
    return "function" == typeof e.isOptionDisabled && e.isOptionDisabled(t, n);
  }
  function pe(e, t, n) {
    if (n.indexOf(t) > -1) return !0;
    if ("function" == typeof e.isOptionSelected) return e.isOptionSelected(t, n);
    var r = ue(e, t);
    return n.some(function (t) {
      return ue(e, t) === r;
    });
  }
  function fe(e, t, n) {
    return !e.filterOption || e.filterOption(t, n);
  }
  var he = function (e) {
      var t = e.hideSelectedOptions,
        n = e.isMulti;
      return void 0 === t ? n : t;
    },
    _e = 1,
    me = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && (0, s.A)(e, t);
      }(f, e);
      var t,
        n,
        i,
        p = function (e) {
          var t = c();
          return function () {
            var n,
              r = l(e);
            if (t) {
              var a = l(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return function (e, t) {
              if (t && ("object" == (0, u.A)(t) || "function" == typeof t)) return t;
              if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
              return (0, d.A)(e);
            }(this, n);
          };
        }(f);
      function f(e) {
        var t;
        if (function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, f), (t = p.call(this, e)).state = {
          ariaSelection: null,
          focusedOption: null,
          focusedOptionId: null,
          focusableOptionsWithIds: [],
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          prevWasFocused: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
          instancePrefix: "",
          isAppleDevice: !1
        }, t.blockOptionHover = !1, t.isComposing = !1, t.commonProps = void 0, t.initialTouchX = 0, t.initialTouchY = 0, t.openAfterFocus = !1, t.scrollToFocusedOptionOnUpdate = !1, t.userIsDragging = void 0, t.controlRef = null, t.getControlRef = function (e) {
          t.controlRef = e;
        }, t.focusedOptionRef = null, t.getFocusedOptionRef = function (e) {
          t.focusedOptionRef = e;
        }, t.menuListRef = null, t.getMenuListRef = function (e) {
          t.menuListRef = e;
        }, t.inputRef = null, t.getInputRef = function (e) {
          t.inputRef = e;
        }, t.focus = t.focusInput, t.blur = t.blurInput, t.onChange = function (e, n) {
          var r = t.props,
            a = r.onChange,
            i = r.name;
          n.name = i, t.ariaOnChange(e, n), a(e, n);
        }, t.setValue = function (e, n, r) {
          var a = t.props,
            i = a.closeMenuOnSelect,
            o = a.isMulti,
            s = a.inputValue;
          t.onInputChange("", {
            action: "set-value",
            prevInputValue: s
          }), i && (t.setState({
            inputIsHiddenAfterUpdate: !o
          }), t.onMenuClose()), t.setState({
            clearFocusValueOnUpdate: !0
          }), t.onChange(e, {
            action: n,
            option: r
          });
        }, t.selectOption = function (e) {
          var n = t.props,
            r = n.blurInputOnSelect,
            a = n.isMulti,
            i = n.name,
            o = t.state.selectValue,
            s = a && t.isOptionSelected(e, o),
            l = t.isOptionDisabled(e, o);
          if (s) {
            var c = t.getOptionValue(e);
            t.setValue((0, m.B)(o.filter(function (e) {
              return t.getOptionValue(e) !== c;
            })), "deselect-option", e);
          } else {
            if (l) return void t.ariaOnChange((0, m.C)(e), {
              action: "select-option",
              option: e,
              name: i
            });
            a ? t.setValue((0, m.B)([].concat(h(o), [e])), "select-option", e) : t.setValue((0, m.C)(e), "select-option");
          }
          r && t.blurInput();
        }, t.removeValue = function (e) {
          var n = t.props.isMulti,
            r = t.state.selectValue,
            a = t.getOptionValue(e),
            i = r.filter(function (e) {
              return t.getOptionValue(e) !== a;
            }),
            o = (0, m.D)(n, i, i[0] || null);
          t.onChange(o, {
            action: "remove-value",
            removedValue: e
          }), t.focusInput();
        }, t.clearValue = function () {
          var e = t.state.selectValue;
          t.onChange((0, m.D)(t.props.isMulti, [], null), {
            action: "clear",
            removedValues: e
          });
        }, t.popValue = function () {
          var e = t.props.isMulti,
            n = t.state.selectValue,
            r = n[n.length - 1],
            a = n.slice(0, n.length - 1),
            i = (0, m.D)(e, a, a[0] || null);
          r && t.onChange(i, {
            action: "pop-value",
            removedValue: r
          });
        }, t.getFocusedOptionId = function (e) {
          return le(t.state.focusableOptionsWithIds, e);
        }, t.getFocusableOptionsWithIds = function () {
          return oe(ae(t.props, t.state.selectValue), t.getElementId("option"));
        }, t.getValue = function () {
          return t.state.selectValue;
        }, t.cx = function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          return m.E.apply(void 0, [t.props.classNamePrefix].concat(n));
        }, t.getOptionLabel = function (e) {
          return ce(t.props, e);
        }, t.getOptionValue = function (e) {
          return ue(t.props, e);
        }, t.getStyles = function (e, n) {
          var r = t.props.unstyled,
            a = ee[e](n, r);
          a.boxSizing = "border-box";
          var i = t.props.styles[e];
          return i ? i(a, n) : a;
        }, t.getClassNames = function (e, n) {
          var r, a;
          return null === (r = (a = t.props.classNames)[e]) || void 0 === r ? void 0 : r.call(a, n);
        }, t.getElementId = function (e) {
          return "".concat(t.state.instancePrefix, "-").concat(e);
        }, t.getComponents = function () {
          return (0, m.F)(t.props);
        }, t.buildCategorizedOptions = function () {
          return ae(t.props, t.state.selectValue);
        }, t.getCategorizedOptions = function () {
          return t.props.menuIsOpen ? t.buildCategorizedOptions() : [];
        }, t.buildFocusableOptions = function () {
          return ie(t.buildCategorizedOptions());
        }, t.getFocusableOptions = function () {
          return t.props.menuIsOpen ? t.buildFocusableOptions() : [];
        }, t.ariaOnChange = function (e, n) {
          t.setState({
            ariaSelection: (0, a.A)({
              value: e
            }, n)
          });
        }, t.onMenuMouseDown = function (e) {
          0 === e.button && (e.stopPropagation(), e.preventDefault(), t.focusInput());
        }, t.onMenuMouseMove = function (e) {
          t.blockOptionHover = !1;
        }, t.onControlMouseDown = function (e) {
          if (!e.defaultPrevented) {
            var n = t.props.openMenuOnClick;
            t.state.isFocused ? t.props.menuIsOpen ? "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && t.onMenuClose() : n && t.openMenu("first") : (n && (t.openAfterFocus = !0), t.focusInput()), "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && e.preventDefault();
          }
        }, t.onDropdownIndicatorMouseDown = function (e) {
          if (!(e && "mousedown" === e.type && 0 !== e.button || t.props.isDisabled)) {
            var n = t.props,
              r = n.isMulti,
              a = n.menuIsOpen;
            t.focusInput(), a ? (t.setState({
              inputIsHiddenAfterUpdate: !r
            }), t.onMenuClose()) : t.openMenu("first"), e.preventDefault();
          }
        }, t.onClearIndicatorMouseDown = function (e) {
          e && "mousedown" === e.type && 0 !== e.button || (t.clearValue(), e.preventDefault(), t.openAfterFocus = !1, "touchend" === e.type ? t.focusInput() : setTimeout(function () {
            return t.focusInput();
          }));
        }, t.onScroll = function (e) {
          "boolean" == typeof t.props.closeMenuOnScroll ? e.target instanceof HTMLElement && (0, m.G)(e.target) && t.props.onMenuClose() : "function" == typeof t.props.closeMenuOnScroll && t.props.closeMenuOnScroll(e) && t.props.onMenuClose();
        }, t.onCompositionStart = function () {
          t.isComposing = !0;
        }, t.onCompositionEnd = function () {
          t.isComposing = !1;
        }, t.onTouchStart = function (e) {
          var n = e.touches,
            r = n && n.item(0);
          r && (t.initialTouchX = r.clientX, t.initialTouchY = r.clientY, t.userIsDragging = !1);
        }, t.onTouchMove = function (e) {
          var n = e.touches,
            r = n && n.item(0);
          if (r) {
            var a = Math.abs(r.clientX - t.initialTouchX),
              i = Math.abs(r.clientY - t.initialTouchY);
            t.userIsDragging = a > 5 || i > 5;
          }
        }, t.onTouchEnd = function (e) {
          t.userIsDragging || (t.controlRef && !t.controlRef.contains(e.target) && t.menuListRef && !t.menuListRef.contains(e.target) && t.blurInput(), t.initialTouchX = 0, t.initialTouchY = 0);
        }, t.onControlTouchEnd = function (e) {
          t.userIsDragging || t.onControlMouseDown(e);
        }, t.onClearIndicatorTouchEnd = function (e) {
          t.userIsDragging || t.onClearIndicatorMouseDown(e);
        }, t.onDropdownIndicatorTouchEnd = function (e) {
          t.userIsDragging || t.onDropdownIndicatorMouseDown(e);
        }, t.handleInputChange = function (e) {
          var n = t.props.inputValue,
            r = e.currentTarget.value;
          t.setState({
            inputIsHiddenAfterUpdate: !1
          }), t.onInputChange(r, {
            action: "input-change",
            prevInputValue: n
          }), t.props.menuIsOpen || t.onMenuOpen();
        }, t.onInputFocus = function (e) {
          t.props.onFocus && t.props.onFocus(e), t.setState({
            inputIsHiddenAfterUpdate: !1,
            isFocused: !0
          }), (t.openAfterFocus || t.props.openMenuOnFocus) && t.openMenu("first"), t.openAfterFocus = !1;
        }, t.onInputBlur = function (e) {
          var n = t.props.inputValue;
          t.menuListRef && t.menuListRef.contains(document.activeElement) ? t.inputRef.focus() : (t.props.onBlur && t.props.onBlur(e), t.onInputChange("", {
            action: "input-blur",
            prevInputValue: n
          }), t.onMenuClose(), t.setState({
            focusedValue: null,
            isFocused: !1
          }));
        }, t.onOptionHover = function (e) {
          if (!t.blockOptionHover && t.state.focusedOption !== e) {
            var n = t.getFocusableOptions().indexOf(e);
            t.setState({
              focusedOption: e,
              focusedOptionId: n > -1 ? t.getFocusedOptionId(e) : null
            });
          }
        }, t.shouldHideSelectedOptions = function () {
          return he(t.props);
        }, t.onValueInputFocus = function (e) {
          e.preventDefault(), e.stopPropagation(), t.focus();
        }, t.onKeyDown = function (e) {
          var n = t.props,
            r = n.isMulti,
            a = n.backspaceRemovesValue,
            i = n.escapeClearsValue,
            o = n.inputValue,
            s = n.isClearable,
            l = n.isDisabled,
            c = n.menuIsOpen,
            u = n.onKeyDown,
            d = n.tabSelectsValue,
            p = n.openMenuOnFocus,
            f = t.state,
            h = f.focusedOption,
            _ = f.focusedValue,
            m = f.selectValue;
          if (!(l || "function" == typeof u && (u(e), e.defaultPrevented))) {
            switch (t.blockOptionHover = !0, e.key) {
              case "ArrowLeft":
                if (!r || o) return;
                t.focusValue("previous");
                break;
              case "ArrowRight":
                if (!r || o) return;
                t.focusValue("next");
                break;
              case "Delete":
              case "Backspace":
                if (o) return;
                if (_) t.removeValue(_);else {
                  if (!a) return;
                  r ? t.popValue() : s && t.clearValue();
                }
                break;
              case "Tab":
                if (t.isComposing) return;
                if (e.shiftKey || !c || !d || !h || p && t.isOptionSelected(h, m)) return;
                t.selectOption(h);
                break;
              case "Enter":
                if (229 === e.keyCode) break;
                if (c) {
                  if (!h) return;
                  if (t.isComposing) return;
                  t.selectOption(h);
                  break;
                }
                return;
              case "Escape":
                c ? (t.setState({
                  inputIsHiddenAfterUpdate: !1
                }), t.onInputChange("", {
                  action: "menu-close",
                  prevInputValue: o
                }), t.onMenuClose()) : s && i && t.clearValue();
                break;
              case " ":
                if (o) return;
                if (!c) {
                  t.openMenu("first");
                  break;
                }
                if (!h) return;
                t.selectOption(h);
                break;
              case "ArrowUp":
                c ? t.focusOption("up") : t.openMenu("last");
                break;
              case "ArrowDown":
                c ? t.focusOption("down") : t.openMenu("first");
                break;
              case "PageUp":
                if (!c) return;
                t.focusOption("pageup");
                break;
              case "PageDown":
                if (!c) return;
                t.focusOption("pagedown");
                break;
              case "Home":
                if (!c) return;
                t.focusOption("first");
                break;
              case "End":
                if (!c) return;
                t.focusOption("last");
                break;
              default:
                return;
            }
            e.preventDefault();
          }
        }, t.state.instancePrefix = "react-select-" + (t.props.instanceId || ++_e), t.state.selectValue = (0, m.H)(e.value), e.menuIsOpen && t.state.selectValue.length) {
          var n = t.getFocusableOptionsWithIds(),
            r = t.buildFocusableOptions(),
            i = r.indexOf(t.state.selectValue[0]);
          t.state.focusableOptionsWithIds = n, t.state.focusedOption = r[i], t.state.focusedOptionId = le(n, r[i]);
        }
        return t;
      }
      return t = f, n = [{
        key: "componentDidMount",
        value: function () {
          this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && (0, m.I)(this.menuListRef, this.focusedOptionRef), (J() || X(/^iPhone/i) || X(/^iPad/i) || J() && navigator.maxTouchPoints > 1) && this.setState({
            isAppleDevice: !0
          });
        }
      }, {
        key: "componentDidUpdate",
        value: function (e) {
          var t = this.props,
            n = t.isDisabled,
            r = t.menuIsOpen,
            a = this.state.isFocused;
          (a && !n && e.isDisabled || a && r && !e.menuIsOpen) && this.focusInput(), a && n && !e.isDisabled ? this.setState({
            isFocused: !1
          }, this.onMenuClose) : a || n || !e.isDisabled || this.inputRef !== document.activeElement || this.setState({
            isFocused: !0
          }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && ((0, m.I)(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
        }
      }, {
        key: "onMenuOpen",
        value: function () {
          this.props.onMenuOpen();
        }
      }, {
        key: "onMenuClose",
        value: function () {
          this.onInputChange("", {
            action: "menu-close",
            prevInputValue: this.props.inputValue
          }), this.props.onMenuClose();
        }
      }, {
        key: "onInputChange",
        value: function (e, t) {
          this.props.onInputChange(e, t);
        }
      }, {
        key: "focusInput",
        value: function () {
          this.inputRef && this.inputRef.focus();
        }
      }, {
        key: "blurInput",
        value: function () {
          this.inputRef && this.inputRef.blur();
        }
      }, {
        key: "openMenu",
        value: function (e) {
          var t = this,
            n = this.state,
            r = n.selectValue,
            a = n.isFocused,
            i = this.buildFocusableOptions(),
            o = "first" === e ? 0 : i.length - 1;
          if (!this.props.isMulti) {
            var s = i.indexOf(r[0]);
            s > -1 && (o = s);
          }
          this.scrollToFocusedOptionOnUpdate = !(a && this.menuListRef), this.setState({
            inputIsHiddenAfterUpdate: !1,
            focusedValue: null,
            focusedOption: i[o],
            focusedOptionId: this.getFocusedOptionId(i[o])
          }, function () {
            return t.onMenuOpen();
          });
        }
      }, {
        key: "focusValue",
        value: function (e) {
          var t = this.state,
            n = t.selectValue,
            r = t.focusedValue;
          if (this.props.isMulti) {
            this.setState({
              focusedOption: null
            });
            var a = n.indexOf(r);
            r || (a = -1);
            var i = n.length - 1,
              o = -1;
            if (n.length) {
              switch (e) {
                case "previous":
                  o = 0 === a ? 0 : -1 === a ? i : a - 1;
                  break;
                case "next":
                  a > -1 && a < i && (o = a + 1);
              }
              this.setState({
                inputIsHidden: -1 !== o,
                focusedValue: n[o]
              });
            }
          }
        }
      }, {
        key: "focusOption",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "first",
            t = this.props.pageSize,
            n = this.state.focusedOption,
            r = this.getFocusableOptions();
          if (r.length) {
            var a = 0,
              i = r.indexOf(n);
            n || (i = -1), "up" === e ? a = i > 0 ? i - 1 : r.length - 1 : "down" === e ? a = (i + 1) % r.length : "pageup" === e ? (a = i - t) < 0 && (a = 0) : "pagedown" === e ? (a = i + t) > r.length - 1 && (a = r.length - 1) : "last" === e && (a = r.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
              focusedOption: r[a],
              focusedValue: null,
              focusedOptionId: this.getFocusedOptionId(r[a])
            });
          }
        }
      }, {
        key: "getTheme",
        value: function () {
          return this.props.theme ? "function" == typeof this.props.theme ? this.props.theme(te) : (0, a.A)((0, a.A)({}, te), this.props.theme) : te;
        }
      }, {
        key: "getCommonProps",
        value: function () {
          var e = this.clearValue,
            t = this.cx,
            n = this.getStyles,
            r = this.getClassNames,
            a = this.getValue,
            i = this.selectOption,
            o = this.setValue,
            s = this.props,
            l = s.isMulti,
            c = s.isRtl,
            u = s.options;
          return {
            clearValue: e,
            cx: t,
            getStyles: n,
            getClassNames: r,
            getValue: a,
            hasValue: this.hasValue(),
            isMulti: l,
            isRtl: c,
            options: u,
            selectOption: i,
            selectProps: s,
            setValue: o,
            theme: this.getTheme()
          };
        }
      }, {
        key: "hasValue",
        value: function () {
          return this.state.selectValue.length > 0;
        }
      }, {
        key: "hasOptions",
        value: function () {
          return !!this.getFocusableOptions().length;
        }
      }, {
        key: "isClearable",
        value: function () {
          var e = this.props,
            t = e.isClearable,
            n = e.isMulti;
          return void 0 === t ? n : t;
        }
      }, {
        key: "isOptionDisabled",
        value: function (e, t) {
          return de(this.props, e, t);
        }
      }, {
        key: "isOptionSelected",
        value: function (e, t) {
          return pe(this.props, e, t);
        }
      }, {
        key: "filterOption",
        value: function (e, t) {
          return fe(this.props, e, t);
        }
      }, {
        key: "formatOptionLabel",
        value: function (e, t) {
          if ("function" == typeof this.props.formatOptionLabel) {
            var n = this.props.inputValue,
              r = this.state.selectValue;
            return this.props.formatOptionLabel(e, {
              context: t,
              inputValue: n,
              selectValue: r
            });
          }
          return this.getOptionLabel(e);
        }
      }, {
        key: "formatGroupLabel",
        value: function (e) {
          return this.props.formatGroupLabel(e);
        }
      }, {
        key: "startListeningComposition",
        value: function () {
          document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
        }
      }, {
        key: "stopListeningComposition",
        value: function () {
          document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
        }
      }, {
        key: "startListeningToTouch",
        value: function () {
          document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
        }
      }, {
        key: "stopListeningToTouch",
        value: function () {
          document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
        }
      }, {
        key: "renderInput",
        value: function () {
          var e = this.props,
            t = e.isDisabled,
            n = e.isSearchable,
            i = e.inputId,
            o = e.inputValue,
            s = e.tabIndex,
            l = e.form,
            c = e.menuIsOpen,
            u = e.required,
            d = this.getComponents().Input,
            p = this.state,
            f = p.inputIsHidden,
            h = p.ariaSelection,
            A = this.commonProps,
            g = i || this.getElementId("input"),
            y = (0, a.A)((0, a.A)((0, a.A)({
              "aria-autocomplete": "list",
              "aria-expanded": c,
              "aria-haspopup": !0,
              "aria-errormessage": this.props["aria-errormessage"],
              "aria-invalid": this.props["aria-invalid"],
              "aria-label": this.props["aria-label"],
              "aria-labelledby": this.props["aria-labelledby"],
              "aria-required": u,
              role: "combobox",
              "aria-activedescendant": this.state.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
            }, c && {
              "aria-controls": this.getElementId("listbox")
            }), !n && {
              "aria-readonly": !0
            }), this.hasValue() ? "initial-input-focus" === (null == h ? void 0 : h.action) && {
              "aria-describedby": this.getElementId("live-region")
            } : {
              "aria-describedby": this.getElementId("placeholder")
            });
          return n ? _.createElement(d, (0, r.A)({}, A, {
            autoCapitalize: "none",
            autoComplete: "off",
            autoCorrect: "off",
            id: g,
            innerRef: this.getInputRef,
            isDisabled: t,
            isHidden: f,
            onBlur: this.onInputBlur,
            onChange: this.handleInputChange,
            onFocus: this.onInputFocus,
            spellCheck: "false",
            tabIndex: s,
            form: l,
            type: "text",
            value: o
          }, y)) : _.createElement(N, (0, r.A)({
            id: g,
            innerRef: this.getInputRef,
            onBlur: this.onInputBlur,
            onChange: m.J,
            onFocus: this.onInputFocus,
            disabled: t,
            tabIndex: s,
            inputMode: "none",
            form: l,
            value: ""
          }, y));
        }
      }, {
        key: "renderPlaceholderOrValue",
        value: function () {
          var e = this,
            t = this.getComponents(),
            n = t.MultiValue,
            a = t.MultiValueContainer,
            i = t.MultiValueLabel,
            o = t.MultiValueRemove,
            s = t.SingleValue,
            l = t.Placeholder,
            c = this.commonProps,
            u = this.props,
            d = u.controlShouldRenderValue,
            p = u.isDisabled,
            f = u.isMulti,
            h = u.inputValue,
            m = u.placeholder,
            A = this.state,
            g = A.selectValue,
            y = A.focusedValue,
            v = A.isFocused;
          if (!this.hasValue() || !d) return h ? null : _.createElement(l, (0, r.A)({}, c, {
            key: "placeholder",
            isDisabled: p,
            isFocused: v,
            innerProps: {
              id: this.getElementId("placeholder")
            }
          }), m);
          if (f) return g.map(function (t, s) {
            var l = t === y,
              u = "".concat(e.getOptionLabel(t), "-").concat(e.getOptionValue(t));
            return _.createElement(n, (0, r.A)({}, c, {
              components: {
                Container: a,
                Label: i,
                Remove: o
              },
              isFocused: l,
              isDisabled: p,
              key: u,
              index: s,
              removeProps: {
                onClick: function () {
                  return e.removeValue(t);
                },
                onTouchEnd: function () {
                  return e.removeValue(t);
                },
                onMouseDown: function (e) {
                  e.preventDefault();
                }
              },
              data: t
            }), e.formatOptionLabel(t, "value"));
          });
          if (h) return null;
          var E = g[0];
          return _.createElement(s, (0, r.A)({}, c, {
            data: E,
            isDisabled: p
          }), this.formatOptionLabel(E, "value"));
        }
      }, {
        key: "renderClearIndicator",
        value: function () {
          var e = this.getComponents().ClearIndicator,
            t = this.commonProps,
            n = this.props,
            a = n.isDisabled,
            i = n.isLoading,
            o = this.state.isFocused;
          if (!this.isClearable() || !e || a || !this.hasValue() || i) return null;
          var s = {
            onMouseDown: this.onClearIndicatorMouseDown,
            onTouchEnd: this.onClearIndicatorTouchEnd,
            "aria-hidden": "true"
          };
          return _.createElement(e, (0, r.A)({}, t, {
            innerProps: s,
            isFocused: o
          }));
        }
      }, {
        key: "renderLoadingIndicator",
        value: function () {
          var e = this.getComponents().LoadingIndicator,
            t = this.commonProps,
            n = this.props,
            a = n.isDisabled,
            i = n.isLoading,
            o = this.state.isFocused;
          return e && i ? _.createElement(e, (0, r.A)({}, t, {
            innerProps: {
              "aria-hidden": "true"
            },
            isDisabled: a,
            isFocused: o
          })) : null;
        }
      }, {
        key: "renderIndicatorSeparator",
        value: function () {
          var e = this.getComponents(),
            t = e.DropdownIndicator,
            n = e.IndicatorSeparator;
          if (!t || !n) return null;
          var a = this.commonProps,
            i = this.props.isDisabled,
            o = this.state.isFocused;
          return _.createElement(n, (0, r.A)({}, a, {
            isDisabled: i,
            isFocused: o
          }));
        }
      }, {
        key: "renderDropdownIndicator",
        value: function () {
          var e = this.getComponents().DropdownIndicator;
          if (!e) return null;
          var t = this.commonProps,
            n = this.props.isDisabled,
            a = this.state.isFocused,
            i = {
              onMouseDown: this.onDropdownIndicatorMouseDown,
              onTouchEnd: this.onDropdownIndicatorTouchEnd,
              "aria-hidden": "true"
            };
          return _.createElement(e, (0, r.A)({}, t, {
            innerProps: i,
            isDisabled: n,
            isFocused: a
          }));
        }
      }, {
        key: "renderMenu",
        value: function () {
          var e = this,
            t = this.getComponents(),
            n = t.Group,
            a = t.GroupHeading,
            i = t.Menu,
            o = t.MenuList,
            s = t.MenuPortal,
            l = t.LoadingMessage,
            c = t.NoOptionsMessage,
            u = t.Option,
            d = this.commonProps,
            p = this.state.focusedOption,
            f = this.props,
            h = f.captureMenuScroll,
            A = f.inputValue,
            g = f.isLoading,
            y = f.loadingMessage,
            v = f.minMenuHeight,
            E = f.maxMenuHeight,
            b = f.menuIsOpen,
            w = f.menuPlacement,
            C = f.menuPosition,
            O = f.menuPortalTarget,
            M = f.menuShouldBlockScroll,
            S = f.menuShouldScrollIntoView,
            T = f.noOptionsMessage,
            k = f.onMenuScrollToTop,
            x = f.onMenuScrollToBottom;
          if (!b) return null;
          var D,
            I = function (t, n) {
              var a = t.type,
                i = t.data,
                o = t.isDisabled,
                s = t.isSelected,
                l = t.label,
                c = t.value,
                f = p === i,
                h = o ? void 0 : function () {
                  return e.onOptionHover(i);
                },
                m = o ? void 0 : function () {
                  return e.selectOption(i);
                },
                A = "".concat(e.getElementId("option"), "-").concat(n),
                g = {
                  id: A,
                  onClick: m,
                  onMouseMove: h,
                  onMouseOver: h,
                  tabIndex: -1,
                  role: "option",
                  "aria-selected": e.state.isAppleDevice ? void 0 : s
                };
              return _.createElement(u, (0, r.A)({}, d, {
                innerProps: g,
                data: i,
                isDisabled: o,
                isSelected: s,
                key: A,
                label: l,
                type: a,
                value: c,
                isFocused: f,
                innerRef: f ? e.getFocusedOptionRef : void 0
              }), e.formatOptionLabel(t.data, "menu"));
            };
          if (this.hasOptions()) D = this.getCategorizedOptions().map(function (t) {
            if ("group" === t.type) {
              var i = t.data,
                o = t.options,
                s = t.index,
                l = "".concat(e.getElementId("group"), "-").concat(s),
                c = "".concat(l, "-heading");
              return _.createElement(n, (0, r.A)({}, d, {
                key: l,
                data: i,
                options: o,
                Heading: a,
                headingProps: {
                  id: c,
                  data: t.data
                },
                label: e.formatGroupLabel(t.data)
              }), t.options.map(function (e) {
                return I(e, "".concat(s, "-").concat(e.index));
              }));
            }
            if ("option" === t.type) return I(t, "".concat(t.index));
          });else if (g) {
            var P = y({
              inputValue: A
            });
            if (null === P) return null;
            D = _.createElement(l, d, P);
          } else {
            var L = T({
              inputValue: A
            });
            if (null === L) return null;
            D = _.createElement(c, d, L);
          }
          var R = {
              minMenuHeight: v,
              maxMenuHeight: E,
              menuPlacement: w,
              menuPosition: C,
              menuShouldScrollIntoView: S
            },
            B = _.createElement(m.M, (0, r.A)({}, d, R), function (t) {
              var n = t.ref,
                a = t.placerProps,
                s = a.placement,
                l = a.maxHeight;
              return _.createElement(i, (0, r.A)({}, d, R, {
                innerRef: n,
                innerProps: {
                  onMouseDown: e.onMenuMouseDown,
                  onMouseMove: e.onMenuMouseMove
                },
                isLoading: g,
                placement: s
              }), _.createElement($, {
                captureEnabled: h,
                onTopArrive: k,
                onBottomArrive: x,
                lockEnabled: M
              }, function (t) {
                return _.createElement(o, (0, r.A)({}, d, {
                  innerRef: function (n) {
                    e.getMenuListRef(n), t(n);
                  },
                  innerProps: {
                    role: "listbox",
                    "aria-multiselectable": d.isMulti,
                    id: e.getElementId("listbox")
                  },
                  isLoading: g,
                  maxHeight: l,
                  focusedOption: p
                }), D);
              }));
            });
          return O || "fixed" === C ? _.createElement(s, (0, r.A)({}, d, {
            appendTo: O,
            controlElement: this.controlRef,
            menuPlacement: w,
            menuPosition: C
          }), B) : B;
        }
      }, {
        key: "renderFormField",
        value: function () {
          var e = this,
            t = this.props,
            n = t.delimiter,
            r = t.isDisabled,
            a = t.isMulti,
            i = t.name,
            o = t.required,
            s = this.state.selectValue;
          if (o && !this.hasValue() && !r) return _.createElement(Z, {
            name: i,
            onFocus: this.onValueInputFocus
          });
          if (i && !r) {
            if (a) {
              if (n) {
                var l = s.map(function (t) {
                  return e.getOptionValue(t);
                }).join(n);
                return _.createElement("input", {
                  name: i,
                  type: "hidden",
                  value: l
                });
              }
              var c = s.length > 0 ? s.map(function (t, n) {
                return _.createElement("input", {
                  key: "i-".concat(n),
                  name: i,
                  type: "hidden",
                  value: e.getOptionValue(t)
                });
              }) : _.createElement("input", {
                name: i,
                type: "hidden",
                value: ""
              });
              return _.createElement("div", null, c);
            }
            var u = s[0] ? this.getOptionValue(s[0]) : "";
            return _.createElement("input", {
              name: i,
              type: "hidden",
              value: u
            });
          }
        }
      }, {
        key: "renderLiveRegion",
        value: function () {
          var e = this.commonProps,
            t = this.state,
            n = t.ariaSelection,
            a = t.focusedOption,
            i = t.focusedValue,
            o = t.isFocused,
            s = t.selectValue,
            l = this.getFocusableOptions();
          return _.createElement(O, (0, r.A)({}, e, {
            id: this.getElementId("live-region"),
            ariaSelection: n,
            focusedOption: a,
            focusedValue: i,
            isFocused: o,
            selectValue: s,
            focusableOptions: l,
            isAppleDevice: this.state.isAppleDevice
          }));
        }
      }, {
        key: "render",
        value: function () {
          var e = this.getComponents(),
            t = e.Control,
            n = e.IndicatorsContainer,
            a = e.SelectContainer,
            i = e.ValueContainer,
            o = this.props,
            s = o.className,
            l = o.id,
            c = o.isDisabled,
            u = o.menuIsOpen,
            d = this.state.isFocused,
            p = this.commonProps = this.getCommonProps();
          return _.createElement(a, (0, r.A)({}, p, {
            className: s,
            innerProps: {
              id: l,
              onKeyDown: this.onKeyDown
            },
            isDisabled: c,
            isFocused: d
          }), this.renderLiveRegion(), _.createElement(t, (0, r.A)({}, p, {
            innerRef: this.getControlRef,
            innerProps: {
              onMouseDown: this.onControlMouseDown,
              onTouchEnd: this.onControlTouchEnd
            },
            isDisabled: c,
            isFocused: d,
            menuIsOpen: u
          }), _.createElement(i, (0, r.A)({}, p, {
            isDisabled: c
          }), this.renderPlaceholderOrValue(), this.renderInput()), _.createElement(n, (0, r.A)({}, p, {
            isDisabled: c
          }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
        }
      }], i = [{
        key: "getDerivedStateFromProps",
        value: function (e, t) {
          var n = t.prevProps,
            r = t.clearFocusValueOnUpdate,
            i = t.inputIsHiddenAfterUpdate,
            o = t.ariaSelection,
            s = t.isFocused,
            l = t.prevWasFocused,
            c = t.instancePrefix,
            u = e.options,
            d = e.value,
            p = e.menuIsOpen,
            f = e.inputValue,
            h = e.isMulti,
            _ = (0, m.H)(d),
            A = {};
          if (n && (d !== n.value || u !== n.options || p !== n.menuIsOpen || f !== n.inputValue)) {
            var g = p ? function (e, t) {
                return ie(ae(e, t));
              }(e, _) : [],
              y = p ? oe(ae(e, _), "".concat(c, "-option")) : [],
              v = r ? function (e, t) {
                var n = e.focusedValue,
                  r = e.selectValue.indexOf(n);
                if (r > -1) {
                  if (t.indexOf(n) > -1) return n;
                  if (r < t.length) return t[r];
                }
                return null;
              }(t, _) : null,
              E = function (e, t) {
                var n = e.focusedOption;
                return n && t.indexOf(n) > -1 ? n : t[0];
              }(t, g);
            A = {
              selectValue: _,
              focusedOption: E,
              focusedOptionId: le(y, E),
              focusableOptionsWithIds: y,
              focusedValue: v,
              clearFocusValueOnUpdate: !1
            };
          }
          var b = null != i && e !== n ? {
              inputIsHidden: i,
              inputIsHiddenAfterUpdate: void 0
            } : {},
            w = o,
            C = s && l;
          return s && !C && (w = {
            value: (0, m.D)(h, _, _[0] || null),
            options: _,
            action: "initial-input-focus"
          }, C = !l), "initial-input-focus" === (null == o ? void 0 : o.action) && (w = null), (0, a.A)((0, a.A)((0, a.A)({}, A), b), {}, {
            prevProps: e,
            ariaSelection: w,
            prevWasFocused: C
          });
        }
      }], n && o(t.prototype, n), i && o(t, i), Object.defineProperty(t, "prototype", {
        writable: !1
      }), f;
    }(_.Component);
  me.defaultProps = ne;
});
