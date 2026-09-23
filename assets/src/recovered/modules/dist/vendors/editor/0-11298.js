// Reconstructed Webpack factory 11298; arguments retain original semantics.
((e, t) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  const n = Math.floor,
    o = 127,
    s = Number.MAX_SAFE_INTEGER,
    r = "undefined" != typeof TextEncoder ? new TextEncoder() : null,
    i = r ? e => r.encode(e) : e => {
      const t = unescape(encodeURIComponent(e)),
        n = t.length,
        o = new Uint8Array(n);
      for (let e = 0; e < n; e++) o[e] = t.codePointAt(e);
      return o;
    };
  let a = "undefined" == typeof TextDecoder ? null : new TextDecoder("utf-8", {
    fatal: !0,
    ignoreBOM: !0
  });
  a && 1 === a.decode(new Uint8Array()).length && (a = null);
  const c = (e, t) => {
      const n = e.cbuf.length;
      e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(2 * n), e.cpos = 0), e.cbuf[e.cpos++] = t;
    },
    d = (e, t) => {
      for (; t > o;) c(e, 128 | o & t), t = n(t / 128);
      c(e, o & t);
    },
    l = new Uint8Array(3e4),
    u = l.length / 3,
    h = r && r.encodeInto ? (e, t) => {
      if (t.length < u) {
        const n = r.encodeInto(t, l).written || 0;
        d(e, n);
        for (let t = 0; t < n; t++) c(e, l[t]);
      } else p(e, i(t));
    } : (e, t) => {
      const n = unescape(encodeURIComponent(t)),
        o = n.length;
      d(e, o);
      for (let t = 0; t < o; t++) c(e, n.codePointAt(t));
    },
    p = (e, t) => {
      d(e, t.byteLength), ((e, t) => {
        const n = e.cbuf.length,
          o = e.cpos,
          s = (r = n - o) < (i = t.length) ? r : i;
        var r, i;
        const a = t.length - s;
        e.cbuf.set(t.subarray(0, s), o), e.cpos += s, a > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(((e, t) => e > t ? e : t)(2 * n, a)), e.cbuf.set(t.subarray(s)), e.cpos = a);
      })(e, t);
    },
    m = e => new Error(e),
    f = m("Unexpected end of array"),
    g = m("Integer out of Range"),
    b = e => e.arr[e.pos++],
    y = e => {
      let t = 0,
        n = 1;
      const r = e.arr.length;
      for (; e.pos < r;) {
        const r = e.arr[e.pos++];
        if (t += (r & o) * n, n *= 128, r < 128) return t;
        if (t > s) throw g;
      }
      throw f;
    },
    v = a ? e => a.decode((e => ((e, t) => {
      const n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
      return e.pos += t, n;
    })(e, y(e)))(e)) : e => {
      let t = y(e);
      if (0 === t) return "";
      {
        let n = String.fromCodePoint(b(e));
        if (--t < 100) for (; t--;) n += String.fromCodePoint(b(e));else for (; t > 0;) {
          const o = t < 1e4 ? t : 1e4,
            s = e.arr.subarray(e.pos, e.pos + o);
          e.pos += o, n += String.fromCodePoint.apply(null, s), t -= o;
        }
        return decodeURIComponent(escape(n));
      }
    };
  var w, k;
  !function (e) {
    e[e.Token = 0] = "Token", e[e.PermissionDenied = 1] = "PermissionDenied", e[e.Authenticated = 2] = "Authenticated";
  }(w || (w = {})), t.WsReadyStates = void 0, (k = t.WsReadyStates || (t.WsReadyStates = {}))[k.Connecting = 0] = "Connecting", k[k.Open = 1] = "Open", k[k.Closing = 2] = "Closing", k[k.Closed = 3] = "Closed", t.ConnectionTimeout = {
    code: 4408,
    reason: "Connection Timeout"
  }, t.Forbidden = {
    code: 4403,
    reason: "Forbidden"
  }, t.MessageTooBig = {
    code: 1009,
    reason: "Message Too Big"
  }, t.ResetConnection = {
    code: 4205,
    reason: "Reset Connection"
  }, t.Unauthorized = {
    code: 4401,
    reason: "Unauthorized"
  }, t.awarenessStatesToArray = e => Array.from(e.entries()).map(([e, t]) => ({
    clientId: e,
    ...t
  })), t.readAuthMessage = (e, t, n) => {
    switch (y(e)) {
      case w.PermissionDenied:
        t(v(e));
        break;
      case w.Authenticated:
        n(v(e));
    }
  }, t.writeAuthenticated = (e, t) => {
    d(e, w.Authenticated), h(e, t);
  }, t.writeAuthentication = (e, t) => {
    d(e, w.Token), h(e, t);
  }, t.writePermissionDenied = (e, t) => {
    d(e, w.PermissionDenied), h(e, t);
  };
});
