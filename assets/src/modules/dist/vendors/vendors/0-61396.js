// Reconstructed Webpack factory 61396; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    K: () => _,
    w: () => h
  });
  for (var r = {
      8: "Backspace",
      9: "Tab",
      10: "Enter",
      12: "NumLock",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      44: "PrintScreen",
      45: "Insert",
      46: "Delete",
      59: ";",
      61: "=",
      91: "Meta",
      92: "Meta",
      106: "*",
      107: "+",
      108: ",",
      109: "-",
      110: ".",
      111: "/",
      144: "NumLock",
      145: "ScrollLock",
      160: "Shift",
      161: "Shift",
      162: "Control",
      163: "Control",
      164: "Alt",
      165: "Alt",
      173: "-",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    }, a = {
      48: ")",
      49: "!",
      50: "@",
      51: "#",
      52: "$",
      53: "%",
      54: "^",
      55: "&",
      56: "*",
      57: "(",
      59: ":",
      61: "+",
      173: "_",
      186: ":",
      187: "+",
      188: "<",
      189: "_",
      190: ">",
      191: "?",
      192: "~",
      219: "{",
      220: "|",
      221: "}",
      222: '"'
    }, i = "undefined" != typeof navigator && /Mac/.test(navigator.platform), o = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), s = 0; s < 10; s++) r[48 + s] = r[96 + s] = String(s);
  for (s = 1; s <= 24; s++) r[s + 111] = "F" + s;
  for (s = 65; s <= 90; s++) r[s] = String.fromCharCode(s + 32), a[s] = String.fromCharCode(s);
  for (var l in r) a.hasOwnProperty(l) || (a[l] = r[l]);
  var c = n(42845);
  const u = "undefined" != typeof navigator && /Mac|iP(hone|[oa]d)/.test(navigator.platform),
    d = "undefined" != typeof navigator && /Win/.test(navigator.platform);
  function p(e) {
    let t,
      n,
      r,
      a,
      i = e.split(/-(?!$)/),
      o = i[i.length - 1];
    "Space" == o && (o = " ");
    for (let e = 0; e < i.length - 1; e++) {
      let o = i[e];
      if (/^(cmd|meta|m)$/i.test(o)) a = !0;else if (/^a(lt)?$/i.test(o)) t = !0;else if (/^(c|ctrl|control)$/i.test(o)) n = !0;else if (/^s(hift)?$/i.test(o)) r = !0;else {
        if (!/^mod$/i.test(o)) throw new Error("Unrecognized modifier name: " + o);
        u ? a = !0 : n = !0;
      }
    }
    return t && (o = "Alt-" + o), n && (o = "Ctrl-" + o), a && (o = "Meta-" + o), r && (o = "Shift-" + o), o;
  }
  function f(e, t, n = !0) {
    return t.altKey && (e = "Alt-" + e), t.ctrlKey && (e = "Ctrl-" + e), t.metaKey && (e = "Meta-" + e), n && t.shiftKey && (e = "Shift-" + e), e;
  }
  function h(e) {
    return new c.k_({
      props: {
        handleKeyDown: _(e)
      }
    });
  }
  function _(e) {
    let t = function (e) {
      let t = Object.create(null);
      for (let n in e) t[p(n)] = e[n];
      return t;
    }(e);
    return function (e, n) {
      let s,
        l = function (e) {
          var t = !(i && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || o && e.shiftKey && e.key && 1 == e.key.length || "Unidentified" == e.key) && e.key || (e.shiftKey ? a : r)[e.keyCode] || e.key || "Unidentified";
          return "Esc" == t && (t = "Escape"), "Del" == t && (t = "Delete"), "Left" == t && (t = "ArrowLeft"), "Up" == t && (t = "ArrowUp"), "Right" == t && (t = "ArrowRight"), "Down" == t && (t = "ArrowDown"), t;
        }(n),
        c = t[f(l, n)];
      if (c && c(e.state, e.dispatch, e)) return !0;
      if (1 == l.length && " " != l) {
        if (n.shiftKey) {
          let r = t[f(l, n, !1)];
          if (r && r(e.state, e.dispatch, e)) return !0;
        }
        if ((n.altKey || n.metaKey || n.ctrlKey) && !(d && n.ctrlKey && n.altKey) && (s = r[n.keyCode]) && s != l) {
          let r = t[f(s, n)];
          if (r && r(e.state, e.dispatch, e)) return !0;
        }
      }
      return !1;
    };
  }
});
