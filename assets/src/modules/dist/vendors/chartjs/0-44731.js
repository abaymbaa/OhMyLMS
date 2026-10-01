// Reconstructed Webpack factory 44731; arguments retain original semantics.
((t, e, i) => {
  i.d(e, {
    N1: () => f
  });
  var s = i(41594),
    n = i(60068);
  const o = "label";
  function r(t, e) {
    "function" == typeof t ? t(e) : t && (t.current = e);
  }
  function a(t, e) {
    t.labels = e;
  }
  function h(t, e) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o;
    const s = [];
    t.datasets = e.map(e => {
      const n = t.datasets.find(t => t[i] === e[i]);
      return n && e.data && !s.includes(n) ? (s.push(n), Object.assign(n, e), n) : {
        ...e
      };
    });
  }
  function l(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
    const i = {
      labels: [],
      datasets: []
    };
    return a(i, t.labels), h(i, t.datasets, e), i;
  }
  function c(t, e) {
    const {
        height: i = 150,
        width: o = 300,
        redraw: c = !1,
        datasetIdKey: d,
        type: u,
        data: f,
        options: g,
        plugins: p = [],
        fallbackContent: x,
        updateMode: m,
        ...b
      } = t,
      _ = (0, s.useRef)(null),
      y = (0, s.useRef)(null),
      v = () => {
        _.current && (y.current = new n.t1(_.current, {
          type: u,
          data: l(f, d),
          options: g && {
            ...g
          },
          plugins: p
        }), r(e, y.current));
      },
      w = () => {
        r(e, null), y.current && (y.current.destroy(), y.current = null);
      };
    return (0, s.useEffect)(() => {
      !c && y.current && g && function (t, e) {
        const i = t.options;
        i && e && Object.assign(i, e);
      }(y.current, g);
    }, [c, g]), (0, s.useEffect)(() => {
      !c && y.current && a(y.current.config.data, f.labels);
    }, [c, f.labels]), (0, s.useEffect)(() => {
      !c && y.current && f.datasets && h(y.current.config.data, f.datasets, d);
    }, [c, f.datasets]), (0, s.useEffect)(() => {
      y.current && (c ? (w(), setTimeout(v)) : y.current.update(m));
    }, [c, g, f.labels, f.datasets, m]), (0, s.useEffect)(() => {
      y.current && (w(), setTimeout(v));
    }, [u]), (0, s.useEffect)(() => (v(), () => w()), []), s.createElement("canvas", {
      ref: _,
      role: "img",
      height: i,
      width: o,
      ...b
    }, x);
  }
  const d = (0, s.forwardRef)(c);
  function u(t, e) {
    return n.t1.register(e), (0, s.forwardRef)((e, i) => s.createElement(d, {
      ...e,
      ref: i,
      type: t
    }));
  }
  const f = u("line", n.ZT);
});
