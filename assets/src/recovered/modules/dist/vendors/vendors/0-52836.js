// Reconstructed Webpack factory 52836; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    u: () => l
  });
  var r = n(89379),
    a = n(80296),
    i = n(80045),
    o = n(41594),
    s = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
  function l(e) {
    var t = e.defaultInputValue,
      n = void 0 === t ? "" : t,
      l = e.defaultMenuIsOpen,
      c = void 0 !== l && l,
      u = e.defaultValue,
      d = void 0 === u ? null : u,
      p = e.inputValue,
      f = e.menuIsOpen,
      h = e.onChange,
      _ = e.onInputChange,
      m = e.onMenuClose,
      A = e.onMenuOpen,
      g = e.value,
      y = (0, i.A)(e, s),
      v = (0, o.useState)(void 0 !== p ? p : n),
      E = (0, a.A)(v, 2),
      b = E[0],
      w = E[1],
      C = (0, o.useState)(void 0 !== f ? f : c),
      O = (0, a.A)(C, 2),
      M = O[0],
      S = O[1],
      T = (0, o.useState)(void 0 !== g ? g : d),
      k = (0, a.A)(T, 2),
      x = k[0],
      D = k[1],
      I = (0, o.useCallback)(function (e, t) {
        "function" == typeof h && h(e, t), D(e);
      }, [h]),
      P = (0, o.useCallback)(function (e, t) {
        var n;
        "function" == typeof _ && (n = _(e, t)), w(void 0 !== n ? n : e);
      }, [_]),
      L = (0, o.useCallback)(function () {
        "function" == typeof A && A(), S(!0);
      }, [A]),
      R = (0, o.useCallback)(function () {
        "function" == typeof m && m(), S(!1);
      }, [m]),
      B = void 0 !== p ? p : b,
      N = void 0 !== f ? f : M,
      U = void 0 !== g ? g : x;
    return (0, r.A)((0, r.A)({}, y), {}, {
      inputValue: B,
      menuIsOpen: N,
      onChange: I,
      onInputChange: P,
      onMenuClose: R,
      onMenuOpen: L,
      value: U
    });
  }
});
