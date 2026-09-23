// Reconstructed Webpack factory 74802; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(11298),
    s = n(98405),
    r = n(82060);
  function i(e) {
    if (e && e.__esModule) return e;
    var t = Object.create(null);
    return e && Object.keys(e).forEach(function (n) {
      if ("default" !== n) {
        var o = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(t, n, o.get ? o : {
          enumerable: !0,
          get: function () {
            return e[n];
          }
        });
      }
    }), t.default = e, Object.freeze(t);
  }
  var a = i(s);
  const c = () => new Map(),
    d = (e, t, n) => {
      let o = e.get(t);
      return void 0 === o && e.set(t, o = n()), o;
    },
    l = () => new Set(),
    u = Array.from,
    h = String.fromCharCode,
    p = /^\s*/g,
    m = /([A-Z])/g,
    f = (e, t) => (e => e.replace(p, ""))(e.replace(m, e => `${t}${(e => e.toLowerCase())(e)}`)),
    g = "undefined" != typeof TextEncoder ? new TextEncoder() : null,
    b = g ? e => g.encode(e) : e => {
      const t = unescape(encodeURIComponent(e)),
        n = t.length,
        o = new Uint8Array(n);
      for (let e = 0; e < n; e++) o[e] = t.codePointAt(e);
      return o;
    };
  let y = "undefined" == typeof TextDecoder ? null : new TextDecoder("utf-8", {
    fatal: !0,
    ignoreBOM: !0
  });
  y && 1 === y.decode(new Uint8Array()).length && (y = null);
  let v = new class {
      constructor() {
        this.map = new Map();
      }
      setItem(e, t) {
        this.map.set(e, t);
      }
      getItem(e) {
        return this.map.get(e);
      }
    }(),
    w = !0;
  try {
    "undefined" != typeof localStorage && localStorage && (v = localStorage, w = !1);
  } catch (e) {}
  const k = v,
    M = Object.keys,
    S = e => M(e).length,
    x = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    C = (e, t) => {
      if (null == e || null == t) return ((e, t) => e === t)(e, t);
      if (e.constructor !== t.constructor) return !1;
      if (e === t) return !0;
      switch (e.constructor) {
        case ArrayBuffer:
          e = new Uint8Array(e), t = new Uint8Array(t);
        case Uint8Array:
          if (e.byteLength !== t.byteLength) return !1;
          for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
          break;
        case Set:
          if (e.size !== t.size) return !1;
          for (const n of e) if (!t.has(n)) return !1;
          break;
        case Map:
          if (e.size !== t.size) return !1;
          for (const n of e.keys()) if (!t.has(n) || !C(e.get(n), t.get(n))) return !1;
          break;
        case Object:
          if (S(e) !== S(t)) return !1;
          for (const n in e) if (!x(e, n) || !C(e[n], t[n])) return !1;
          break;
        case Array:
          if (e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++) if (!C(e[n], t[n])) return !1;
          break;
        default:
          return !1;
      }
      return !0;
    },
    T = "undefined" != typeof process && process.release && /node|io\.js/.test(process.release.name) && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0),
    E = "undefined" != typeof window && "undefined" != typeof document && !T;
  let O;
  "undefined" != typeof navigator && /Mac/.test(navigator.platform);
  const A = e => (() => {
      if (void 0 === O) if (T) {
        O = c();
        const e = process.argv;
        let t = null;
        for (let n = 0; n < e.length; n++) {
          const o = e[n];
          "-" === o[0] ? (null !== t && O.set(t, ""), t = o) : null !== t && (O.set(t, o), t = null);
        }
        null !== t && O.set(t, "");
      } else "object" == typeof location ? (O = c(), (location.search || "?").slice(1).split("&").forEach(e => {
        if (0 !== e.length) {
          const [t, n] = e.split("=");
          O.set(`--${f(t, "-")}`, n), O.set(`-${f(t, "-")}`, n);
        }
      })) : O = c();
      return O;
    })().has(e),
    P = e => {
      return void 0 === (t = T ? process.env[e.toUpperCase()] : k.getItem(e)) ? null : t;
      var t;
    };
  A("--" + "production") || P("production");
  const L = T && (N = process.env.FORCE_COLOR, ["true", "1", "2"].includes(N));
  var N;
  !A("no-colors") && (!T || process.stdout.isTTY || L) && (!T || A("color") || L || null !== P("COLORTERM") || (P("TERM") || "").includes("color"));
  const R = Math.floor,
    I = 128,
    D = 127,
    H = Number.MAX_SAFE_INTEGER;
  class $ {
    constructor() {
      this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
    }
  }
  const j = () => new $(),
    _ = e => {
      let t = e.cpos;
      for (let n = 0; n < e.bufs.length; n++) t += e.bufs[n].length;
      return t;
    },
    B = e => {
      const t = new Uint8Array(_(e));
      let n = 0;
      for (let o = 0; o < e.bufs.length; o++) {
        const s = e.bufs[o];
        t.set(s, n), n += s.length;
      }
      return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
    },
    U = (e, t) => {
      const n = e.cbuf.length;
      e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(2 * n), e.cpos = 0), e.cbuf[e.cpos++] = t;
    },
    z = (e, t) => {
      for (; t > D;) U(e, I | D & t), t = R(t / 128);
      U(e, D & t);
    },
    V = new Uint8Array(3e4),
    F = V.length / 3,
    W = g && g.encodeInto ? (e, t) => {
      if (t.length < F) {
        const n = g.encodeInto(t, V).written || 0;
        z(e, n);
        for (let t = 0; t < n; t++) U(e, V[t]);
      } else K(e, b(t));
    } : (e, t) => {
      const n = unescape(encodeURIComponent(t)),
        o = n.length;
      z(e, o);
      for (let t = 0; t < o; t++) U(e, n.codePointAt(t));
    },
    K = (e, t) => {
      z(e, t.byteLength), ((e, t) => {
        const n = e.cbuf.length,
          o = e.cpos,
          s = (r = n - o) < (i = t.length) ? r : i;
        var r, i;
        const a = t.length - s;
        e.cbuf.set(t.subarray(0, s), o), e.cpos += s, a > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(((e, t) => e > t ? e : t)(2 * n, a)), e.cbuf.set(t.subarray(s)), e.cpos = a);
      })(e, t);
    },
    q = e => new Error(e),
    J = q("Unexpected end of array"),
    G = q("Integer out of Range");
  class Q {
    constructor(e) {
      this.arr = e, this.pos = 0;
    }
  }
  const Y = e => new Q(e),
    X = e => ((e, t) => {
      const n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
      return e.pos += t, n;
    })(e, ee(e)),
    Z = e => e.arr[e.pos++],
    ee = e => {
      let t = 0,
        n = 1;
      const o = e.arr.length;
      for (; e.pos < o;) {
        const o = e.arr[e.pos++];
        if (t += (o & D) * n, n *= 128, o < I) return t;
        if (t > H) throw G;
      }
      throw J;
    },
    te = y ? e => y.decode(X(e)) : e => {
      let t = ee(e);
      if (0 === t) return "";
      {
        let n = String.fromCodePoint(Z(e));
        if (--t < 100) for (; t--;) n += String.fromCodePoint(Z(e));else for (; t > 0;) {
          const o = t < 1e4 ? t : 1e4,
            s = e.arr.subarray(e.pos, e.pos + o);
          e.pos += o, n += String.fromCodePoint.apply(null, s), t -= o;
        }
        return decodeURIComponent(escape(n));
      }
    },
    ne = E ? e => {
      let t = "";
      for (let n = 0; n < e.byteLength; n++) t += h(e[n]);
      return btoa(t);
    } : e => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64"),
    oe = E ? e => {
      const t = atob(e),
        n = (o = t.length, new Uint8Array(o));
      var o;
      for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
      return n;
    } : e => {
      const t = Buffer.from(e, "base64");
      return ((e, t, n) => new Uint8Array(e, t, n))(t.buffer, t.byteOffset, t.byteLength);
    },
    se = new Map(),
    re = "undefined" == typeof BroadcastChannel ? class {
      constructor(e) {
        var t;
        this.room = e, this.onmessage = null, this._onChange = t => t.key === e && null !== this.onmessage && this.onmessage({
          data: oe(t.newValue || "")
        }), t = this._onChange, w || addEventListener("storage", t);
      }
      postMessage(e) {
        k.setItem(this.room, ne(new Uint8Array(e)));
      }
      close() {
        var e;
        e = this._onChange, w || removeEventListener("storage", e);
      }
    } : BroadcastChannel,
    ie = e => d(se, e, () => {
      const t = l(),
        n = new re(e);
      return n.onmessage = e => t.forEach(t => t(e.data, "broadcastchannel")), {
        bc: n,
        subs: t
      };
    }),
    ae = Date.now;
  class ce {
    constructor() {
      this._observers = c();
    }
    on(e, t) {
      d(this._observers, e, l).add(t);
    }
    once(e, t) {
      const n = (...o) => {
        this.off(e, n), t(...o);
      };
      this.on(e, n);
    }
    off(e, t) {
      const n = this._observers.get(e);
      void 0 !== n && (n.delete(t), 0 === n.size && this._observers.delete(e));
    }
    emit(e, t) {
      return u((this._observers.get(e) || c()).values()).forEach(e => e(...t));
    }
    destroy() {
      this._observers = c();
    }
  }
  class de extends ce {
    constructor(e) {
      super(), this.doc = e, this.clientID = e.clientID, this.states = new Map(), this.meta = new Map(), this._checkInterval = setInterval(() => {
        const e = ae();
        null !== this.getLocalState() && 15e3 <= e - this.meta.get(this.clientID).lastUpdated && this.setLocalState(this.getLocalState());
        const t = [];
        this.meta.forEach((n, o) => {
          o !== this.clientID && 3e4 <= e - n.lastUpdated && this.states.has(o) && t.push(o);
        }), t.length > 0 && le(this, t, "timeout");
      }, R(3e3)), e.on("destroy", () => {
        this.destroy();
      }), this.setLocalState({});
    }
    destroy() {
      this.emit("destroy", [this]), this.setLocalState(null), super.destroy(), clearInterval(this._checkInterval);
    }
    getLocalState() {
      return this.states.get(this.clientID) || null;
    }
    setLocalState(e) {
      const t = this.clientID,
        n = this.meta.get(t),
        o = void 0 === n ? 0 : n.clock + 1,
        s = this.states.get(t);
      null === e ? this.states.delete(t) : this.states.set(t, e), this.meta.set(t, {
        clock: o,
        lastUpdated: ae()
      });
      const r = [],
        i = [],
        a = [],
        c = [];
      null === e ? c.push(t) : null == s ? null != e && r.push(t) : (i.push(t), C(s, e) || a.push(t)), (r.length > 0 || a.length > 0 || c.length > 0) && this.emit("change", [{
        added: r,
        updated: a,
        removed: c
      }, "local"]), this.emit("update", [{
        added: r,
        updated: i,
        removed: c
      }, "local"]);
    }
    setLocalStateField(e, t) {
      const n = this.getLocalState();
      null !== n && this.setLocalState({
        ...n,
        [e]: t
      });
    }
    getStates() {
      return this.states;
    }
  }
  const le = (e, t, n) => {
      const o = [];
      for (let n = 0; n < t.length; n++) {
        const s = t[n];
        if (e.states.has(s)) {
          if (e.states.delete(s), s === e.clientID) {
            const t = e.meta.get(s);
            e.meta.set(s, {
              clock: t.clock + 1,
              lastUpdated: ae()
            });
          }
          o.push(s);
        }
      }
      o.length > 0 && (e.emit("change", [{
        added: [],
        updated: [],
        removed: o
      }, n]), e.emit("update", [{
        added: [],
        updated: [],
        removed: o
      }, n]));
    },
    ue = (e, t, n = e.states) => {
      const o = t.length,
        s = j();
      z(s, o);
      for (let r = 0; r < o; r++) {
        const o = t[r],
          i = n.get(o) || null,
          a = e.meta.get(o).clock;
        z(s, o), z(s, a), W(s, JSON.stringify(i));
      }
      return B(s);
    };
  class he {
    constructor() {
      this.callbacks = {};
    }
    on(e, t) {
      return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
    }
    emit(e, ...t) {
      const n = this.callbacks[e];
      return n && n.forEach(e => e.apply(this, t)), this;
    }
    off(e, t) {
      const n = this.callbacks[e];
      return n && (t ? this.callbacks[e] = n.filter(e => e !== t) : delete this.callbacks[e]), this;
    }
    removeAllListeners() {
      this.callbacks = {};
    }
  }
  var pe, me;
  t.MessageType = void 0, (pe = t.MessageType || (t.MessageType = {}))[pe.Sync = 0] = "Sync", pe[pe.Awareness = 1] = "Awareness", pe[pe.Auth = 2] = "Auth", pe[pe.QueryAwareness = 3] = "QueryAwareness", pe[pe.Stateless = 5] = "Stateless", pe[pe.CLOSE = 7] = "CLOSE", pe[pe.SyncStatus = 8] = "SyncStatus", t.WebSocketStatus = void 0, (me = t.WebSocketStatus || (t.WebSocketStatus = {})).Connecting = "connecting", me.Connected = "connected", me.Disconnected = "disconnected";
  class fe {
    constructor(e) {
      this.data = e, this.encoder = j(), this.decoder = Y(new Uint8Array(this.data));
    }
    peekVarString() {
      return (e => {
        const t = e.pos,
          n = te(e);
        return e.pos = t, n;
      })(this.decoder);
    }
    readVarUint() {
      return ee(this.decoder);
    }
    readVarString() {
      return te(this.decoder);
    }
    readVarUint8Array() {
      return X(this.decoder);
    }
    writeVarUint(e) {
      return z(this.encoder, e);
    }
    writeVarString(e) {
      return W(this.encoder, e);
    }
    writeVarUint8Array(e) {
      return K(this.encoder, e);
    }
    length() {
      return _(this.encoder);
    }
  }
  class ge extends he {
    constructor(e) {
      super(), this.messageQueue = [], this.configuration = {
        url: "",
        document: void 0,
        WebSocketPolyfill: void 0,
        parameters: {},
        connect: !0,
        broadcast: !0,
        forceSyncInterval: !1,
        messageReconnectTimeout: 3e4,
        delay: 1e3,
        initialDelay: 0,
        factor: 2,
        maxAttempts: 0,
        minDelay: 1e3,
        maxDelay: 3e4,
        jitter: !0,
        timeout: 0,
        onOpen: () => null,
        onConnect: () => null,
        onMessage: () => null,
        onOutgoingMessage: () => null,
        onStatus: () => null,
        onDisconnect: () => null,
        onClose: () => null,
        onDestroy: () => null,
        onAwarenessUpdate: () => null,
        onAwarenessChange: () => null,
        quiet: !1,
        providerMap: new Map()
      }, this.webSocket = null, this.webSocketHandlers = {}, this.shouldConnect = !0, this.status = t.WebSocketStatus.Disconnected, this.lastMessageReceived = 0, this.identifier = 0, this.intervals = {
        forceSync: null,
        connectionChecker: null
      }, this.connectionAttempt = null, this.receivedOnOpenPayload = void 0, this.receivedOnStatusPayload = void 0, this.closeTries = 0, this.setConfiguration(e), this.configuration.WebSocketPolyfill = e.WebSocketPolyfill ? e.WebSocketPolyfill : WebSocket, this.on("open", this.configuration.onOpen), this.on("open", this.onOpen.bind(this)), this.on("connect", this.configuration.onConnect), this.on("message", this.configuration.onMessage), this.on("outgoingMessage", this.configuration.onOutgoingMessage), this.on("status", this.configuration.onStatus), this.on("status", this.onStatus.bind(this)), this.on("disconnect", this.configuration.onDisconnect), this.on("close", this.configuration.onClose), this.on("destroy", this.configuration.onDestroy), this.on("awarenessUpdate", this.configuration.onAwarenessUpdate), this.on("awarenessChange", this.configuration.onAwarenessChange), this.on("close", this.onClose.bind(this)), this.on("message", this.onMessage.bind(this)), this.intervals.connectionChecker = setInterval(this.checkConnection.bind(this), this.configuration.messageReconnectTimeout / 10), void 0 !== e.connect && (this.shouldConnect = e.connect), this.shouldConnect && this.connect();
    }
    async onOpen(e) {
      this.receivedOnOpenPayload = e;
    }
    async onStatus(e) {
      this.receivedOnStatusPayload = e;
    }
    attach(e) {
      let n;
      return this.configuration.providerMap.set(e.configuration.name, e), this.status === t.WebSocketStatus.Disconnected && this.shouldConnect && (n = this.connect()), this.receivedOnOpenPayload && e.onOpen(this.receivedOnOpenPayload), this.receivedOnStatusPayload && e.onStatus(this.receivedOnStatusPayload), n;
    }
    detach(e) {
      this.configuration.providerMap.delete(e.configuration.name);
    }
    setConfiguration(e = {}) {
      this.configuration = {
        ...this.configuration,
        ...e
      };
    }
    async connect() {
      if (this.status === t.WebSocketStatus.Connected) return;
      this.cancelWebsocketRetry && (this.cancelWebsocketRetry(), this.cancelWebsocketRetry = void 0), this.receivedOnOpenPayload = void 0, this.receivedOnStatusPayload = void 0, this.shouldConnect = !0;
      const {
        retryPromise: e,
        cancelFunc: n
      } = (() => {
        let e = !1;
        return {
          retryPromise: r.retry(this.createWebSocketConnection.bind(this), {
            delay: this.configuration.delay,
            initialDelay: this.configuration.initialDelay,
            factor: this.configuration.factor,
            maxAttempts: this.configuration.maxAttempts,
            minDelay: this.configuration.minDelay,
            maxDelay: this.configuration.maxDelay,
            jitter: this.configuration.jitter,
            timeout: this.configuration.timeout,
            beforeAttempt: t => {
              this.shouldConnect && !e || t.abort();
            }
          }).catch(e => {
            if (e && "ATTEMPT_ABORTED" !== e.code) throw e;
          }),
          cancelFunc: () => {
            e = !0;
          }
        };
      })();
      return this.cancelWebsocketRetry = n, e;
    }
    attachWebSocketListeners(e, t) {
      const {
        identifier: n
      } = e;
      this.webSocketHandlers[n] = {
        message: e => this.emit("message", e),
        close: e => this.emit("close", {
          event: e
        }),
        open: e => this.emit("open", e),
        error: e => {
          t(e);
        }
      };
      const o = this.webSocketHandlers[e.identifier];
      Object.keys(o).forEach(t => {
        e.addEventListener(t, o[t]);
      });
    }
    cleanupWebSocket() {
      if (!this.webSocket) return;
      const {
          identifier: e
        } = this.webSocket,
        t = this.webSocketHandlers[e];
      Object.keys(t).forEach(n => {
        var o;
        null === (o = this.webSocket) || void 0 === o || o.removeEventListener(n, t[n]), delete this.webSocketHandlers[e];
      }), this.webSocket.close(), this.webSocket = null;
    }
    createWebSocketConnection() {
      return new Promise((e, n) => {
        this.webSocket && (this.messageQueue = [], this.cleanupWebSocket()), this.lastMessageReceived = 0, this.identifier += 1;
        const o = new this.configuration.WebSocketPolyfill(this.url);
        o.binaryType = "arraybuffer", o.identifier = this.identifier, this.attachWebSocketListeners(o, n), this.webSocket = o, this.status = t.WebSocketStatus.Connecting, this.emit("status", {
          status: t.WebSocketStatus.Connecting
        }), this.connectionAttempt = {
          resolve: e,
          reject: n
        };
      });
    }
    onMessage(e) {
      var t;
      this.resolveConnectionAttempt(), this.lastMessageReceived = ae();
      const n = new fe(e.data).peekVarString();
      null === (t = this.configuration.providerMap.get(n)) || void 0 === t || t.onMessage(e);
    }
    resolveConnectionAttempt() {
      this.connectionAttempt && (this.connectionAttempt.resolve(), this.connectionAttempt = null, this.status = t.WebSocketStatus.Connected, this.emit("status", {
        status: t.WebSocketStatus.Connected
      }), this.emit("connect"), this.messageQueue.forEach(e => this.send(e)), this.messageQueue = []);
    }
    stopConnectionAttempt() {
      this.connectionAttempt = null;
    }
    rejectConnectionAttempt() {
      var e;
      null === (e = this.connectionAttempt) || void 0 === e || e.reject(), this.connectionAttempt = null;
    }
    checkConnection() {
      var e;
      this.status === t.WebSocketStatus.Connected && this.lastMessageReceived && (this.configuration.messageReconnectTimeout >= ae() - this.lastMessageReceived || (this.closeTries += 1, this.closeTries > 2 ? (this.onClose({
        event: {
          code: 4408,
          reason: "forced"
        }
      }), this.closeTries = 0) : (null === (e = this.webSocket) || void 0 === e || e.close(), this.messageQueue = [])));
    }
    get serverUrl() {
      for (; "/" === this.configuration.url[this.configuration.url.length - 1];) return this.configuration.url.slice(0, this.configuration.url.length - 1);
      return this.configuration.url;
    }
    get url() {
      const e = (() => ((e, t) => {
        const n = [];
        for (const o in e) n.push(t(e[o], o));
        return n;
      })(this.configuration.parameters, (e, t) => `${encodeURIComponent(t)}=${encodeURIComponent(e)}`).join("&"))();
      return `${this.serverUrl}${0 === e.length ? "" : `?${e}`}`;
    }
    disconnect() {
      if (this.shouldConnect = !1, null !== this.webSocket) try {
        this.webSocket.close(), this.messageQueue = [];
      } catch {}
    }
    send(e) {
      var t;
      (null === (t = this.webSocket) || void 0 === t ? void 0 : t.readyState) === o.WsReadyStates.Open ? this.webSocket.send(e) : this.messageQueue.push(e);
    }
    onClose({
      event: e
    }) {
      this.closeTries = 0, this.cleanupWebSocket(), this.status === t.WebSocketStatus.Connected && (this.status = t.WebSocketStatus.Disconnected, this.emit("status", {
        status: t.WebSocketStatus.Disconnected
      }), this.emit("disconnect", {
        event: e
      })), e.code === o.Unauthorized.code && (e.reason === o.Unauthorized.reason ? console.warn("[HocuspocusProvider] An authentication token is required, but you didn’t send one. Try adding a `token` to your HocuspocusProvider configuration. Won’t try again.") : console.warn(`[HocuspocusProvider] Connection closed with status Unauthorized: ${e.reason}`), this.shouldConnect = !1), e.code !== o.Forbidden.code || this.configuration.quiet ? (e.code === o.MessageTooBig.code && (console.warn(`[HocuspocusProvider] Connection closed with status MessageTooBig: ${e.reason}`), this.shouldConnect = !1), this.connectionAttempt ? this.rejectConnectionAttempt() : this.shouldConnect && this.connect(), this.shouldConnect || this.status !== t.WebSocketStatus.Disconnected && (this.status = t.WebSocketStatus.Disconnected, this.emit("status", {
        status: t.WebSocketStatus.Disconnected
      }), this.emit("disconnect", {
        event: e
      }))) : console.warn("[HocuspocusProvider] The provided authentication token isn’t allowed to connect to this server. Will try again.");
    }
    destroy() {
      this.emit("destroy"), this.intervals.forceSync && clearInterval(this.intervals.forceSync), clearInterval(this.intervals.connectionChecker), this.stopConnectionAttempt(), this.disconnect(), this.removeAllListeners(), this.cleanupWebSocket();
    }
  }
  const be = (e, t, n) => {
      z(e, 1), K(e, a.encodeStateAsUpdate(t, n));
    },
    ye = (e, t, n) => {
      try {
        a.applyUpdate(t, X(e), n);
      } catch (e) {
        console.error("Caught error while handling a Yjs update", e);
      }
    },
    ve = ye;
  class we {
    constructor() {
      this.encoder = j();
    }
    get(e) {
      return e.encoder;
    }
    toUint8Array() {
      return B(this.encoder);
    }
  }
  class ke {
    constructor(e) {
      this.broadcasted = !1, this.message = e;
    }
    setBroadcasted(e) {
      return this.broadcasted = e, this;
    }
    apply(e, n) {
      const {
          message: o
        } = this,
        s = o.readVarUint(),
        r = o.length();
      switch (s) {
        case t.MessageType.Sync:
          this.applySyncMessage(e, n);
          break;
        case t.MessageType.Awareness:
          this.applyAwarenessMessage(e);
          break;
        case t.MessageType.Auth:
          this.applyAuthMessage(e);
          break;
        case t.MessageType.QueryAwareness:
          this.applyQueryAwarenessMessage(e);
          break;
        case t.MessageType.Stateless:
          e.receiveStateless(te(o.decoder));
          break;
        case t.MessageType.SyncStatus:
          this.applySyncStatusMessage(e, 1 === (e => {
            let t = e.arr[e.pos++],
              n = 63 & t,
              o = 64;
            const s = (64 & t) > 0 ? -1 : 1;
            if (0 === (t & I)) return s * n;
            const r = e.arr.length;
            for (; e.pos < r;) {
              if (t = e.arr[e.pos++], n += (t & D) * o, o *= 128, t < I) return s * n;
              if (n > H) throw G;
            }
            throw J;
          })(o.decoder));
          break;
        default:
          throw new Error(`Can’t apply message of unknown type: ${s}`);
      }
      o.length() > r + 1 && (this.broadcasted ? e.broadcast(we, {
        encoder: o.encoder
      }) : e.send(we, {
        encoder: o.encoder
      }));
    }
    applySyncMessage(e, n) {
      const {
        message: o
      } = this;
      o.writeVarUint(t.MessageType.Sync);
      const s = ((e, t, n, o) => {
        const s = ee(e);
        switch (s) {
          case 0:
            ((e, t, n) => {
              be(t, n, X(e));
            })(e, t, n);
            break;
          case 1:
            ye(e, n, o);
            break;
          case 2:
            ve(e, n, o);
            break;
          default:
            throw new Error("Unknown message type");
        }
        return s;
      })(o.decoder, o.encoder, e.document, e);
      n && 1 === s && (e.synced = !0);
    }
    applySyncStatusMessage(e, t) {
      t && e.decrementUnsyncedChanges();
    }
    applyAwarenessMessage(e) {
      if (!e.awareness) return;
      const {
        message: t
      } = this;
      ((e, t, n) => {
        const o = Y(t),
          s = ae(),
          r = [],
          i = [],
          a = [],
          c = [],
          d = ee(o);
        for (let t = 0; t < d; t++) {
          const t = ee(o);
          let n = ee(o);
          const d = JSON.parse(te(o)),
            l = e.meta.get(t),
            u = e.states.get(t),
            h = void 0 === l ? 0 : l.clock;
          (h < n || h === n && null === d && e.states.has(t)) && (null === d ? t === e.clientID && null != e.getLocalState() ? n++ : e.states.delete(t) : e.states.set(t, d), e.meta.set(t, {
            clock: n,
            lastUpdated: s
          }), void 0 === l && null !== d ? r.push(t) : void 0 !== l && null === d ? c.push(t) : null !== d && (C(d, u) || a.push(t), i.push(t)));
        }
        (r.length > 0 || a.length > 0 || c.length > 0) && e.emit("change", [{
          added: r,
          updated: a,
          removed: c
        }, n]), (r.length > 0 || i.length > 0 || c.length > 0) && e.emit("update", [{
          added: r,
          updated: i,
          removed: c
        }, n]);
      })(e.awareness, t.readVarUint8Array(), e);
    }
    applyAuthMessage(e) {
      const {
        message: t
      } = this;
      o.readAuthMessage(t.decoder, e.permissionDeniedHandler.bind(e), e.authenticatedHandler.bind(e));
    }
    applyQueryAwarenessMessage(e) {
      if (!e.awareness) return;
      const {
        message: n
      } = this;
      n.writeVarUint(t.MessageType.Awareness), n.writeVarUint8Array(ue(e.awareness, Array.from(e.awareness.getStates().keys())));
    }
  }
  class Me {
    constructor(e, t = {}) {
      this.message = new e(), this.encoder = this.message.get(t);
    }
    create() {
      return B(this.encoder);
    }
    send(e) {
      null == e || e.send(this.create());
    }
    broadcast(e) {
      ((e, t, n = null) => {
        const o = ie(e);
        o.bc.postMessage(t), o.subs.forEach(e => e(t, n));
      })(e, this.create());
    }
  }
  class Se extends we {
    constructor() {
      super(...arguments), this.type = t.MessageType.Auth, this.description = "Authentication";
    }
    get(e) {
      if (void 0 === e.token) throw new Error("The authentication message requires `token` as an argument.");
      return W(this.encoder, e.documentName), z(this.encoder, this.type), o.writeAuthentication(this.encoder, e.token), this.encoder;
    }
  }
  class xe extends we {
    constructor() {
      super(...arguments), this.type = t.MessageType.Awareness, this.description = "Awareness states update";
    }
    get(e) {
      if (void 0 === e.awareness) throw new Error("The awareness message requires awareness as an argument");
      if (void 0 === e.clients) throw new Error("The awareness message requires clients as an argument");
      let t;
      return W(this.encoder, e.documentName), z(this.encoder, this.type), t = void 0 === e.states ? ue(e.awareness, e.clients) : ue(e.awareness, e.clients, e.states), K(this.encoder, t), this.encoder;
    }
  }
  class Ce extends we {
    constructor() {
      super(...arguments), this.type = t.MessageType.CLOSE, this.description = "Ask the server to close the connection";
    }
    get(e) {
      return W(this.encoder, e.documentName), z(this.encoder, this.type), this.encoder;
    }
  }
  class Te extends we {
    constructor() {
      super(...arguments), this.type = t.MessageType.QueryAwareness, this.description = "Queries awareness states";
    }
    get(e) {
      return W(this.encoder, e.documentName), z(this.encoder, this.type), this.encoder;
    }
  }
  class Ee extends we {
    constructor() {
      super(...arguments), this.type = t.MessageType.Stateless, this.description = "A stateless message";
    }
    get(e) {
      var t;
      return W(this.encoder, e.documentName), z(this.encoder, this.type), W(this.encoder, null !== (t = e.payload) && void 0 !== t ? t : ""), this.encoder;
    }
  }
  class Oe extends we {
    constructor() {
      super(...arguments), this.type = t.MessageType.Sync, this.description = "First sync step";
    }
    get(e) {
      if (void 0 === e.document) throw new Error("The sync step one message requires document as an argument");
      return W(this.encoder, e.documentName), z(this.encoder, this.type), ((e, t) => {
        z(e, 0);
        const n = a.encodeStateVector(t);
        K(e, n);
      })(this.encoder, e.document), this.encoder;
    }
  }
  class Ae extends we {
    constructor() {
      super(...arguments), this.type = t.MessageType.Sync, this.description = "Second sync step";
    }
    get(e) {
      if (void 0 === e.document) throw new Error("The sync step two message requires document as an argument");
      return W(this.encoder, e.documentName), z(this.encoder, this.type), be(this.encoder, e.document), this.encoder;
    }
  }
  class Pe extends we {
    constructor() {
      super(...arguments), this.type = t.MessageType.Sync, this.description = "A document update";
    }
    get(e) {
      var t, n;
      return W(this.encoder, e.documentName), z(this.encoder, this.type), t = this.encoder, n = e.update, z(t, 2), K(t, n), this.encoder;
    }
  }
  class Le extends Error {
    constructor() {
      super(...arguments), this.code = 1001;
    }
  }
  class Ne extends he {
    constructor(e) {
      var n, s, r;
      super(), this.configuration = {
        name: "",
        document: void 0,
        awareness: void 0,
        token: null,
        parameters: {},
        broadcast: !0,
        forceSyncInterval: !1,
        onAuthenticated: () => null,
        onAuthenticationFailed: () => null,
        onOpen: () => null,
        onConnect: () => null,
        onMessage: () => null,
        onOutgoingMessage: () => null,
        onStatus: () => null,
        onSynced: () => null,
        onDisconnect: () => null,
        onClose: () => null,
        onDestroy: () => null,
        onAwarenessUpdate: () => null,
        onAwarenessChange: () => null,
        onStateless: () => null,
        quiet: !1,
        connect: !0,
        preserveConnection: !0
      }, this.subscribedToBroadcastChannel = !1, this.isSynced = !1, this.unsyncedChanges = 0, this.status = t.WebSocketStatus.Disconnected, this.isAuthenticated = !1, this.authorizedScope = void 0, this.mux = (() => {
        let e = !0;
        return (t, n) => {
          if (e) {
            e = !1;
            try {
              t();
            } finally {
              e = !0;
            }
          } else void 0 !== n && n();
        };
      })(), this.intervals = {
        forceSync: null
      }, this.isConnected = !0, this.boundDocumentUpdateHandler = this.documentUpdateHandler.bind(this), this.boundAwarenessUpdateHandler = this.awarenessUpdateHandler.bind(this), this.boundBroadcastChannelSubscriber = this.broadcastChannelSubscriber.bind(this), this.boundPageHide = this.pageHide.bind(this), this.boundOnOpen = this.onOpen.bind(this), this.boundOnClose = this.onClose.bind(this), this.boundOnStatus = this.onStatus.bind(this), this.forwardConnect = e => this.emit("connect", e), this.forwardOpen = e => this.emit("open", e), this.forwardClose = e => this.emit("close", e), this.forwardDisconnect = e => this.emit("disconnect", e), this.forwardDestroy = e => this.emit("destroy", e), this.setConfiguration(e), this.configuration.document = e.document ? e.document : new a.Doc(), this.configuration.awareness = void 0 !== e.awareness ? e.awareness : new de(this.document), this.on("open", this.configuration.onOpen), this.on("message", this.configuration.onMessage), this.on("outgoingMessage", this.configuration.onOutgoingMessage), this.on("synced", this.configuration.onSynced), this.on("destroy", this.configuration.onDestroy), this.on("awarenessUpdate", this.configuration.onAwarenessUpdate), this.on("awarenessChange", this.configuration.onAwarenessChange), this.on("stateless", this.configuration.onStateless), this.on("authenticated", this.configuration.onAuthenticated), this.on("authenticationFailed", this.configuration.onAuthenticationFailed), this.configuration.websocketProvider.on("connect", this.configuration.onConnect), this.configuration.websocketProvider.on("connect", this.forwardConnect), this.configuration.websocketProvider.on("open", this.boundOnOpen), this.configuration.websocketProvider.on("open", this.forwardOpen), this.configuration.websocketProvider.on("close", this.boundOnClose), this.configuration.websocketProvider.on("close", this.configuration.onClose), this.configuration.websocketProvider.on("close", this.forwardClose), this.configuration.websocketProvider.on("status", this.boundOnStatus), this.configuration.websocketProvider.on("disconnect", this.configuration.onDisconnect), this.configuration.websocketProvider.on("disconnect", this.forwardDisconnect), this.configuration.websocketProvider.on("destroy", this.configuration.onDestroy), this.configuration.websocketProvider.on("destroy", this.forwardDestroy), null === (n = this.awareness) || void 0 === n || n.on("update", () => {
        this.emit("awarenessUpdate", {
          states: o.awarenessStatesToArray(this.awareness.getStates())
        });
      }), null === (s = this.awareness) || void 0 === s || s.on("change", () => {
        this.emit("awarenessChange", {
          states: o.awarenessStatesToArray(this.awareness.getStates())
        });
      }), this.document.on("update", this.boundDocumentUpdateHandler), null === (r = this.awareness) || void 0 === r || r.on("update", this.boundAwarenessUpdateHandler), this.registerEventListeners(), this.configuration.forceSyncInterval && "number" == typeof this.configuration.forceSyncInterval && (this.intervals.forceSync = setInterval(this.forceSync.bind(this), this.configuration.forceSyncInterval)), this.configuration.websocketProvider.attach(this);
    }
    onStatus({
      status: e
    }) {
      this.status = e, this.configuration.onStatus({
        status: e
      }), this.emit("status", {
        status: e
      });
    }
    setConfiguration(e = {}) {
      if (!e.websocketProvider && e.url) {
        const t = e;
        this.configuration.websocketProvider = new ge({
          url: t.url,
          connect: t.connect,
          parameters: t.parameters
        });
      }
      this.configuration = {
        ...this.configuration,
        ...e
      };
    }
    get document() {
      return this.configuration.document;
    }
    get awareness() {
      return this.configuration.awareness;
    }
    get hasUnsyncedChanges() {
      return this.unsyncedChanges > 0;
    }
    resetUnsyncedChanges() {
      this.unsyncedChanges = 1, this.emit("unsyncedChanges", this.unsyncedChanges);
    }
    incrementUnsyncedChanges() {
      this.unsyncedChanges += 1, this.emit("unsyncedChanges", this.unsyncedChanges);
    }
    decrementUnsyncedChanges() {
      this.unsyncedChanges -= 1, 0 === this.unsyncedChanges && (this.synced = !0), this.emit("unsyncedChanges", this.unsyncedChanges);
    }
    forceSync() {
      this.resetUnsyncedChanges(), this.send(Oe, {
        document: this.document,
        documentName: this.configuration.name
      });
    }
    pageHide() {
      this.awareness && le(this.awareness, [this.document.clientID], "page hide");
    }
    registerEventListeners() {
      "undefined" != typeof window && "addEventListener" in window && window.addEventListener("pagehide", this.boundPageHide);
    }
    sendStateless(e) {
      this.send(Ee, {
        documentName: this.configuration.name,
        payload: e
      });
    }
    documentUpdateHandler(e, t) {
      t !== this && (this.incrementUnsyncedChanges(), this.send(Pe, {
        update: e,
        documentName: this.configuration.name
      }, !0));
    }
    awarenessUpdateHandler({
      added: e,
      updated: t,
      removed: n
    }, o) {
      const s = e.concat(t).concat(n);
      this.send(xe, {
        awareness: this.awareness,
        clients: s,
        documentName: this.configuration.name
      }, !0);
    }
    get synced() {
      return this.isSynced;
    }
    set synced(e) {
      this.isSynced !== e && (this.isSynced = e, this.emit("synced", {
        state: e
      }), this.emit("sync", {
        state: e
      }));
    }
    receiveStateless(e) {
      this.emit("stateless", {
        payload: e
      });
    }
    get isAuthenticationRequired() {
      return !!this.configuration.token && !this.isAuthenticated;
    }
    async connect() {
      return this.configuration.broadcast && this.subscribeToBroadcastChannel(), this.configuration.websocketProvider.shouldConnect = !0, this.configuration.websocketProvider.attach(this);
    }
    disconnect() {
      this.disconnectBroadcastChannel(), this.configuration.websocketProvider.detach(this), this.isConnected = !1, this.configuration.preserveConnection || this.configuration.websocketProvider.disconnect();
    }
    async onOpen(e) {
      let t;
      this.isAuthenticated = !1, this.isConnected = !0, this.emit("open", {
        event: e
      });
      try {
        t = await this.getToken();
      } catch (e) {
        return void this.permissionDeniedHandler(`Failed to get token: ${e}`);
      }
      this.isAuthenticationRequired && this.send(Se, {
        token: t,
        documentName: this.configuration.name
      }), this.startSync();
    }
    async getToken() {
      return "function" == typeof this.configuration.token ? await this.configuration.token() : this.configuration.token;
    }
    startSync() {
      this.resetUnsyncedChanges(), this.send(Oe, {
        document: this.document,
        documentName: this.configuration.name
      }), this.awareness && null !== this.awareness.getLocalState() && this.send(xe, {
        awareness: this.awareness,
        clients: [this.document.clientID],
        documentName: this.configuration.name
      });
    }
    send(e, t, n = !1) {
      if (!this.isConnected) return;
      n && this.mux(() => {
        this.broadcast(e, t);
      });
      const o = new Me(e, t);
      this.emit("outgoingMessage", {
        message: o.message
      }), o.send(this.configuration.websocketProvider);
    }
    onMessage(e) {
      const t = new fe(e.data),
        n = t.readVarString();
      t.writeVarString(n), this.emit("message", {
        event: e,
        message: new fe(e.data)
      }), new ke(t).apply(this, !0);
    }
    onClose(e) {
      this.isAuthenticated = !1, this.synced = !1, this.awareness && le(this.awareness, Array.from(this.awareness.getStates().keys()).filter(e => e !== this.document.clientID), this);
    }
    destroy() {
      this.emit("destroy"), this.intervals.forceSync && clearInterval(this.intervals.forceSync), this.awareness && (le(this.awareness, [this.document.clientID], "provider destroy"), this.awareness.off("update", this.boundAwarenessUpdateHandler), this.awareness.destroy()), this.document.off("update", this.boundDocumentUpdateHandler), this.removeAllListeners(), this.configuration.websocketProvider.off("connect", this.configuration.onConnect), this.configuration.websocketProvider.off("connect", this.forwardConnect), this.configuration.websocketProvider.off("open", this.boundOnOpen), this.configuration.websocketProvider.off("open", this.forwardOpen), this.configuration.websocketProvider.off("close", this.boundOnClose), this.configuration.websocketProvider.off("close", this.configuration.onClose), this.configuration.websocketProvider.off("close", this.forwardClose), this.configuration.websocketProvider.off("status", this.boundOnStatus), this.configuration.websocketProvider.off("disconnect", this.configuration.onDisconnect), this.configuration.websocketProvider.off("disconnect", this.forwardDisconnect), this.configuration.websocketProvider.off("destroy", this.configuration.onDestroy), this.configuration.websocketProvider.off("destroy", this.forwardDestroy), this.send(Ce, {
        documentName: this.configuration.name
      }), this.disconnect(), "undefined" != typeof window && "removeEventListener" in window && window.removeEventListener("pagehide", this.boundPageHide);
    }
    permissionDeniedHandler(e) {
      this.emit("authenticationFailed", {
        reason: e
      }), this.isAuthenticated = !1, this.disconnect(), this.status = t.WebSocketStatus.Disconnected;
    }
    authenticatedHandler(e) {
      this.isAuthenticated = !0, this.authorizedScope = e, this.emit("authenticated");
    }
    get broadcastChannel() {
      return `${this.configuration.name}`;
    }
    broadcastChannelSubscriber(e) {
      this.mux(() => {
        const t = new fe(e),
          n = t.readVarString();
        t.writeVarString(n), new ke(t).setBroadcasted(!0).apply(this, !1);
      });
    }
    subscribeToBroadcastChannel() {
      var e, t;
      this.subscribedToBroadcastChannel || (e = this.broadcastChannel, t = this.boundBroadcastChannelSubscriber, ie(e).subs.add(t), this.subscribedToBroadcastChannel = !0), this.mux(() => {
        this.broadcast(Oe, {
          document: this.document,
          documentName: this.configuration.name
        }), this.broadcast(Ae, {
          document: this.document,
          documentName: this.configuration.name
        }), this.broadcast(Te, {
          document: this.document,
          documentName: this.configuration.name
        }), this.awareness && this.broadcast(xe, {
          awareness: this.awareness,
          clients: [this.document.clientID],
          document: this.document,
          documentName: this.configuration.name
        });
      });
    }
    disconnectBroadcastChannel() {
      this.awareness && this.send(xe, {
        awareness: this.awareness,
        clients: [this.document.clientID],
        states: new Map(),
        documentName: this.configuration.name
      }, !0), this.subscribedToBroadcastChannel && (((e, t) => {
        const n = ie(e);
        n.subs.delete(t) && 0 === n.subs.size && (n.bc.close(), se.delete(e));
      })(this.broadcastChannel, this.boundBroadcastChannelSubscriber), this.subscribedToBroadcastChannel = !1);
    }
    broadcast(e, t) {
      this.configuration.broadcast && this.subscribedToBroadcastChannel && new Me(e, t).broadcast(this.broadcastChannel);
    }
    setAwarenessField(e, t) {
      if (!this.awareness) throw new Le(`Cannot set awareness field "${e}" to ${JSON.stringify(t)}. You have disabled Awareness for this provider by explicitly passing awareness: null in the provider configuration.`);
      this.awareness.setLocalStateField(e, t);
    }
  }
  const Re = crypto.getRandomValues.bind(crypto),
    Ie = [1e7] + -1e3 + -4e3 + -8e3 + -1e11,
    De = () => Ie.replace(/[018]/g, e => (e ^ Re(new Uint32Array(1))[0] & 15 >> e / 4).toString(16));
  class He extends ge {
    constructor(e) {
      var t;
      let n = null !== (t = e.baseUrl) && void 0 !== t ? t : `wss://${e.appId}.collab.tiptap.cloud`;
      e.shardKey && (n += n.includes("?") ? "&" : "?", n += `shard=${e.shardKey}`), super({
        ...e,
        url: n
      });
    }
  }
  const $e = {
      deleteContent: !1,
      deleteThread: !1
    },
    je = {
      types: ["unarchived"]
    },
    _e = {
      deleteComments: !1,
      force: !1
    };
  t.AwarenessError = Le, t.HocuspocusProvider = Ne, t.HocuspocusProviderWebsocket = ge, t.TiptapCollabProvider = class extends Ne {
    constructor(e) {
      e.websocketProvider || (e.websocketProvider = new He({
        appId: e.appId,
        baseUrl: e.baseUrl
      })), e.token || (e.token = "notoken"), super(e), this.tiptapCollabConfigurationPrefix = "__tiptapcollab__", e.user && (this.userData = new a.PermanentUserData(this.document, this.document.getMap("__tiptapcollab__users")), this.userData.setUserMapping(this.document, this.document.clientID, e.user));
    }
    createVersion(e) {
      return this.sendStateless(JSON.stringify({
        action: "version.create",
        name: e
      }));
    }
    revertToVersion(e) {
      return this.sendStateless(JSON.stringify({
        action: "document.revert",
        version: e
      }));
    }
    previewVersion(e) {
      return this.sendStateless(JSON.stringify({
        action: "version.preview",
        version: e
      }));
    }
    getVersions() {
      return this.configuration.document.getArray(`${this.tiptapCollabConfigurationPrefix}versions`).toArray();
    }
    watchVersions(e) {
      return this.configuration.document.getArray("__tiptapcollab__versions").observe(e);
    }
    unwatchVersions(e) {
      return this.configuration.document.getArray("__tiptapcollab__versions").unobserve(e);
    }
    isAutoVersioning() {
      return !!this.configuration.document.getMap(`${this.tiptapCollabConfigurationPrefix}config`).get("autoVersioning");
    }
    enableAutoVersioning() {
      return this.configuration.document.getMap(`${this.tiptapCollabConfigurationPrefix}config`).set("autoVersioning", 1);
    }
    disableAutoVersioning() {
      return this.configuration.document.getMap(`${this.tiptapCollabConfigurationPrefix}config`).set("autoVersioning", 0);
    }
    getYThreads() {
      return this.configuration.document.getArray(`${this.tiptapCollabConfigurationPrefix}threads`);
    }
    getThreads(e) {
      const {
          types: t
        } = {
          ...je,
          ...e
        },
        n = this.getYThreads().toJSON();
      return (null == t ? void 0 : t.includes("archived")) && (null == t ? void 0 : t.includes("unarchived")) ? n : n.filter(e => !(!(null == t ? void 0 : t.includes("archived")) || !e.deletedAt) || !(!(null == t ? void 0 : t.includes("unarchived")) || e.deletedAt));
    }
    getThreadIndex(e) {
      let t = null,
        n = 0;
      for (const o of this.getThreads({
        types: ["archived", "unarchived"]
      })) {
        if (o.id === e) {
          t = n;
          break;
        }
        n += 1;
      }
      return t;
    }
    getThread(e) {
      const t = this.getThreadIndex(e);
      return null === t ? null : this.getYThreads().get(t).toJSON();
    }
    getYThread(e) {
      const t = this.getThreadIndex(e);
      return null === t ? null : this.getYThreads().get(t);
    }
    createThread(e) {
      let t = {};
      return this.document.transact(() => {
        const n = new a.Map();
        n.set("id", De()), n.set("createdAt", new Date().toISOString()), n.set("comments", new a.Array()), n.set("deletedComments", new a.Array()), n.set("deletedAt", null), this.getYThreads().push([n]), t = this.updateThread(String(n.get("id")), e);
      }), t;
    }
    updateThread(e, t) {
      let n = {};
      return this.document.transact(() => {
        const o = this.getYThread(e);
        if (null === o) return null;
        o.set("updatedAt", new Date().toISOString()), t.data && o.set("data", t.data), (t.resolvedAt || null === t.resolvedAt) && o.set("resolvedAt", t.resolvedAt), n = o.toJSON();
      }), n;
    }
    deleteThread(e, t) {
      const {
          deleteComments: n,
          force: o
        } = {
          ..._e,
          ...t
        },
        s = this.getThreadIndex(e);
      if (null === s) return null;
      if (o) return void this.getYThreads().delete(s, 1);
      const r = this.getYThreads().get(s);
      return r.set("deletedAt", new Date().toISOString()), n && (r.set("comments", new a.Array()), r.set("deletedComments", new a.Array())), r.toJSON();
    }
    restoreThread(e) {
      const t = this.getThreadIndex(e);
      if (null === t) return null;
      const n = this.getYThreads().get(t);
      return n.set("deletedAt", null), n.toJSON();
    }
    getThreadComments(e, t) {
      var n, o, s;
      if (null === this.getThreadIndex(e)) return null;
      const r = t ? [...((null === (o = this.getThread(e)) || void 0 === o ? void 0 : o.comments) || []), ...((null === (s = this.getThread(e)) || void 0 === s ? void 0 : s.deletedComments) || [])].sort((e, t) => e.createdAt.localeCompare(t.createdAt)) : null === (n = this.getThread(e)) || void 0 === n ? void 0 : n.comments;
      return null != r ? r : [];
    }
    getThreadComment(e, t, n) {
      var o;
      if (null === this.getThreadIndex(e)) return null;
      const s = this.getThreadComments(e, n);
      return null !== (o = null == s ? void 0 : s.find(e => e.id === t)) && void 0 !== o ? o : null;
    }
    addComment(e, t) {
      let n = {};
      return this.document.transact(() => {
        const o = this.getYThread(e);
        if (null === o) return null;
        const s = new a.Map();
        s.set("id", De()), s.set("createdAt", new Date().toISOString()), o.get("comments").push([s]), this.updateComment(e, String(s.get("id")), t), n = o.toJSON();
      }), n;
    }
    updateComment(e, t, n) {
      let o = {};
      return this.document.transact(() => {
        const s = this.getYThread(e);
        if (null === s) return null;
        let r = null;
        for (const e of s.get("comments")) if (e.get("id") === t) {
          r = e;
          break;
        }
        if (null === r) return null;
        r.set("updatedAt", new Date().toISOString()), n.data && r.set("data", n.data), n.content && r.set("content", n.content), o = s.toJSON();
      }), o;
    }
    deleteComment(e, t, n) {
      const {
          deleteContent: o,
          deleteThread: s
        } = {
          ...$e,
          ...n
        },
        r = this.getYThread(e);
      if (null === r) return null;
      let i = 0;
      for (const e of r.get("comments")) {
        if (e.get("id") === t) break;
        i += 1;
      }
      if (0 === i && (s || this.configuration.deleteThreadOnFirstCommentDelete)) return void this.deleteThread(e);
      const c = r.get("comments").get(i),
        d = new a.Map();
      return d.set("id", c.get("id")), d.set("createdAt", c.get("createdAt")), d.set("updatedAt", new Date().toISOString()), d.set("deletedAt", new Date().toISOString()), d.set("data", c.get("data")), d.set("content", o ? null : c.get("content")), r.get("deletedComments") || r.set("deletedComments", new a.Array()), r.get("deletedComments").push([d]), r.get("comments").delete(i), r.toJSON();
    }
    watchThreads(e) {
      this.getYThreads().observeDeep(e);
    }
    unwatchThreads(e) {
      this.getYThreads().unobserveDeep(e);
    }
  }, t.TiptapCollabProviderWebsocket = He;
});
