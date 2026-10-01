// Reconstructed Webpack factory 35828; arguments retain original semantics.
((e, t) => {
  let n = {
      data: ""
    },
    r = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
      innerHTML: " ",
      id: "_goober"
    })).firstChild : e || n,
    a = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    i = /\/\*[^]*?\*\/|  +/g,
    o = /\n+/g,
    s = (e, t) => {
      let n = "",
        r = "",
        a = "";
      for (let i in e) {
        let o = e[i];
        "@" == i[0] ? "i" == i[1] ? n = i + " " + o + ";" : r += "f" == i[1] ? s(o, i) : i + "{" + s(o, "k" == i[1] ? "" : t) + "}" : "object" == typeof o ? r += s(o, t ? t.replace(/([^,])+/g, e => i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : i) : null != o && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(), a += s.p ? s.p(i, o) : i + ":" + o + ";");
      }
      return n + (t && a ? t + "{" + a + "}" : a) + r;
    },
    l = {},
    c = e => {
      if ("object" == typeof e) {
        let t = "";
        for (let n in e) t += n + c(e[n]);
        return t;
      }
      return e;
    },
    u = (e, t, n, r, u) => {
      let d = c(e),
        p = l[d] || (l[d] = (e => {
          let t = 0,
            n = 11;
          for (; t < e.length;) n = 101 * n + e.charCodeAt(t++) >>> 0;
          return "go" + n;
        })(d));
      if (!l[p]) {
        let t = d !== e ? e : (e => {
          let t,
            n,
            r = [{}];
          for (; t = a.exec(e.replace(i, ""));) t[4] ? r.shift() : t[3] ? (n = t[3].replace(o, " ").trim(), r.unshift(r[0][n] = r[0][n] || {})) : r[0][t[1]] = t[2].replace(o, " ").trim();
          return r[0];
        })(e);
        l[p] = s(u ? {
          ["@keyframes " + p]: t
        } : t, n ? "" : "." + p);
      }
      let f = n && l.g ? l.g : null;
      return n && (l.g = l[p]), ((e, t, n, r) => {
        r ? t.data = t.data.replace(r, e) : -1 === t.data.indexOf(e) && (t.data = n ? e + t.data : t.data + e);
      })(l[p], t, r, f), p;
    };
  function d(e) {
    let t = this || {},
      n = e.call ? e(t.p) : e;
    return u(n.unshift ? n.raw ? ((e, t, n) => e.reduce((e, r, a) => {
      let i = t[a];
      if (i && i.call) {
        let e = i(n),
          t = e && e.props && e.props.className || /^go/.test(e) && e;
        i = t ? "." + t : e && "object" == typeof e ? e.props ? "" : s(e, "") : !1 === e ? "" : e;
      }
      return e + r + (null == i ? "" : i);
    }, ""))(n, [].slice.call(arguments, 1), t.p) : n.reduce((e, n) => Object.assign(e, n && n.call ? n(t.p) : n), {}) : n, r(t.target), t.g, t.o, t.k);
  }
  let p,
    f,
    h,
    _ = d.bind({
      g: 1
    }),
    m = d.bind({
      k: 1
    });
  t.css = d, t.extractCss = e => {
    let t = r(e),
      n = t.data;
    return t.data = "", n;
  }, t.glob = _, t.keyframes = m, t.setup = function (e, t, n, r) {
    s.p = t, p = e, f = n, h = r;
  }, t.styled = function (e, t) {
    let n = this || {};
    return function () {
      let r = arguments;
      function a(i, o) {
        let s = Object.assign({}, i),
          l = s.className || a.className;
        n.p = Object.assign({
          theme: f && f()
        }, s), n.o = / *go\d+/.test(l), s.className = d.apply(n, r) + (l ? " " + l : ""), t && (s.ref = o);
        let c = e;
        return e[0] && (c = s.as || e, delete s.as), h && c[0] && h(s), p(c, s);
      }
      return t ? t(a) : a;
    };
  };
});
