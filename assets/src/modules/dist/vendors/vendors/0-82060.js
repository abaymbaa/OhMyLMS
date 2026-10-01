// Reconstructed Webpack factory 82060; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  async function r(e) {
    return new Promise(t => setTimeout(t, e));
  }
  function a(e, t) {
    let n = t.delay;
    if (0 === n) return 0;
    if (t.factor && (n *= Math.pow(t.factor, e.attemptNum - 1), 0 !== t.maxDelay && (n = Math.min(n, t.maxDelay))), t.jitter) {
      const e = Math.ceil(t.minDelay),
        r = Math.floor(n);
      n = Math.floor(Math.random() * (r - e + 1)) + e;
    }
    return Math.round(n);
  }
  async function i(e, t) {
    const n = function (e) {
      return e || (e = {}), {
        delay: void 0 === e.delay ? 200 : e.delay,
        initialDelay: void 0 === e.initialDelay ? 0 : e.initialDelay,
        minDelay: void 0 === e.minDelay ? 0 : e.minDelay,
        maxDelay: void 0 === e.maxDelay ? 0 : e.maxDelay,
        factor: void 0 === e.factor ? 0 : e.factor,
        maxAttempts: void 0 === e.maxAttempts ? 3 : e.maxAttempts,
        timeout: void 0 === e.timeout ? 0 : e.timeout,
        jitter: !0 === e.jitter,
        initialJitter: !0 === e.initialJitter,
        handleError: void 0 === e.handleError ? null : e.handleError,
        handleTimeout: void 0 === e.handleTimeout ? null : e.handleTimeout,
        beforeAttempt: void 0 === e.beforeAttempt ? null : e.beforeAttempt,
        calculateDelay: void 0 === e.calculateDelay ? null : e.calculateDelay
      };
    }(t);
    for (const e of ["delay", "initialDelay", "minDelay", "maxDelay", "maxAttempts", "timeout"]) {
      const t = n[e];
      if (!Number.isInteger(t) || t < 0) throw new Error(`Value for ${e} must be an integer greater than or equal to 0`);
    }
    if (n.factor.constructor !== Number || n.factor < 0) throw new Error("Value for factor must be a number greater than or equal to 0");
    if (n.delay < n.minDelay) throw new Error(`delay cannot be less than minDelay (delay: ${n.delay}, minDelay: ${n.minDelay}`);
    const i = {
        attemptNum: 0,
        attemptsRemaining: n.maxAttempts ? n.maxAttempts : -1,
        aborted: !1,
        abort() {
          i.aborted = !0;
        }
      },
      o = n.calculateDelay || a,
      s = n.calculateDelay ? n.calculateDelay(i, n) : n.initialDelay;
    if (s && (await r(s)), i.attemptNum < 1 && n.initialJitter) {
      const e = o(i, n);
      e && (await r(e));
    }
    return async function t() {
      if (n.beforeAttempt && n.beforeAttempt(i, n), i.aborted) {
        const e = new Error("Attempt aborted");
        throw e.code = "ATTEMPT_ABORTED", e;
      }
      const a = async e => {
        if (n.handleError && (await n.handleError(e, i, n)), i.aborted || 0 === i.attemptsRemaining) throw e;
        i.attemptNum++;
        const a = o(i, n);
        return a && (await r(a)), t();
      };
      return i.attemptsRemaining > 0 && i.attemptsRemaining--, n.timeout ? new Promise((t, r) => {
        const o = setTimeout(() => {
          if (n.handleTimeout) try {
            t(n.handleTimeout(i, n));
          } catch (e) {
            r(e);
          } else {
            const e = new Error(`Retry timeout (attemptNum: ${i.attemptNum}, timeout: ${n.timeout})`);
            e.code = "ATTEMPT_TIMEOUT", r(e);
          }
        }, n.timeout);
        e(i, n).then(e => {
          clearTimeout(o), t(e);
        }).catch(e => {
          clearTimeout(o), a(e).then(t).catch(r);
        });
      }) : e(i, n).catch(a);
    }();
  }
  n.r(t), n.d(t, {
    defaultCalculateDelay: () => a,
    retry: () => i,
    sleep: () => r
  });
});
