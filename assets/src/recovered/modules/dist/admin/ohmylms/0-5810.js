// Reconstructed Webpack factory 5810; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.DropdownButton = t.DropdownCategoryTitle = void 0;
  var a = r(n(41594)),
    o = n(20131);
  t.DropdownCategoryTitle = function (e) {
    var t = e.children,
      n = e.className,
      r = void 0 === n ? "" : n;
    return a.default.createElement("div", {
      className: "text-[.65rem] font-semibold mb-1 uppercase text-neutral-500 dark:text-neutral-400 px-1.5 ".concat(r)
    }, t);
  }, t.DropdownButton = a.default.forwardRef(function (e, t) {
    var n = e.children,
      r = e.isActive,
      i = e.onClick,
      l = e.disabled,
      c = e.className,
      u = (0, o.cn)("flex items-center gap-2 p-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 text-left bg-transparent w-full rounded", !r && !l, "hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-200", r && !l && "bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200", l && "text-neutral-400 cursor-not-allowed dark:text-neutral-600", c);
    return a.default.createElement("button", {
      className: u,
      disabled: l,
      onClick: i,
      ref: t
    }, n);
  });
});
