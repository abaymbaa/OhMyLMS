// Reconstructed Webpack factory 76237; arguments retain original semantics.
((e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  for (var n = {
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
    }, r = {
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
    }, a = "undefined" != typeof navigator && /Mac/.test(navigator.platform), i = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), o = 0; o < 10; o++) n[48 + o] = n[96 + o] = String(o);
  for (o = 1; o <= 24; o++) n[o + 111] = "F" + o;
  for (o = 65; o <= 90; o++) n[o] = String.fromCharCode(o + 32), r[o] = String.fromCharCode(o);
  for (var s in n) r.hasOwnProperty(s) || (r[s] = n[s]);
  t.base = n, t.keyName = function (e) {
    var t = !(a && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || i && e.shiftKey && e.key && 1 == e.key.length || "Unidentified" == e.key) && e.key || (e.shiftKey ? r : n)[e.keyCode] || e.key || "Unidentified";
    return "Esc" == t && (t = "Escape"), "Del" == t && (t = "Delete"), "Left" == t && (t = "ArrowLeft"), "Up" == t && (t = "ArrowUp"), "Right" == t && (t = "ArrowRight"), "Down" == t && (t = "ArrowDown"), t;
  }, t.shift = r;
});
