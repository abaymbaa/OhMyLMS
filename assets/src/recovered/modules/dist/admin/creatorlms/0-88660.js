// Reconstructed Webpack factory 88660; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    V: () => o
  });
  var r = n(41594);
  function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function o() {
    var e = function () {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      },
      t = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return t = function () {
          return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/<\/?content>/gi, "");
        }(t), (t = (t = (t = (t = (t = e(t)).replace(/\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")).replace(/(?:^|[^*])\*([^*]+)\*/g, "$&<em>$1</em>").replace(/<em>.*<\/em>/g, "")).replace(/_(.*?)_/g, "<em>$1</em>")).replace(/`([^`]+)`/g, "<code>$1</code>");
      },
      n = (0, r.useCallback)(function () {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        try {
          var r,
            o = n.split("\n"),
            i = "",
            l = !1,
            c = null,
            u = !1,
            s = function (e, t) {
              var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return a(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
                  }
                }(e)) || t && e && "number" == typeof e.length) {
                  n && (e = n);
                  var r = 0,
                    o = function () {};
                  return {
                    s: o,
                    n: function () {
                      return r >= e.length ? {
                        done: !0
                      } : {
                        done: !1,
                        value: e[r++]
                      };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: o
                  };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var i,
                l = !0,
                c = !1;
              return {
                s: function () {
                  n = n.call(e);
                },
                n: function () {
                  var e = n.next();
                  return l = e.done, e;
                },
                e: function (e) {
                  c = !0, i = e;
                },
                f: function () {
                  try {
                    l || null == n.return || n.return();
                  } finally {
                    if (c) throw i;
                  }
                }
              };
            }(o);
          try {
            for (s.s(); !(r = s.n()).done;) {
              var d = r.value;
              if (null !== d && "string" == typeof d) {
                var m = d.trim();
                if (m.startsWith("```")) i += (u = !u) ? "<pre><code>" : "</code></pre>";else if (u) i += e(d) + "\n";else {
                  var p = m.match(/^(#{1,6})\s+(.*)/);
                  if (p) {
                    var f = p[1].length,
                      v = t(p[2]);
                    i += "<h".concat(f, ">").concat(v, "</h").concat(f, ">");
                  } else /^\d+\.\s+/.test(m) ? (l && "ol" === c || (l && (i += "</".concat(c, ">")), i += "<ol>", l = !0, c = "ol"), i += "<li>".concat(t(m.replace(/^\d+\.\s+/, "")), "</li>")) : /^[-*+]\s+/.test(m) ? (l && "ul" === c || (l && (i += "</".concat(c, ">")), i += "<ul>", l = !0, c = "ul"), i += "<li>".concat(t(m.replace(/^[-*+]\s+/, "")), "</li>")) : m && (l && (i += "</".concat(c, ">"), l = !1, c = null), i += "<p>".concat(t(m), "</p>"));
                }
              }
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }
          return l && (i += "</".concat(c, ">")), i;
        } catch (e) {
          return console.error("Markdown conversion error:", e), "";
        }
      }, []);
    return n;
  }
});
