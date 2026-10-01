// Reconstructed Webpack factory 49215; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    Hi: () => c,
    nb: () => u,
    Ft: () => s
  });
  var r = Object.defineProperty,
    a = (e, t, n) => ((e, t, n) => t in e ? r(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }) : e[t] = n)(e, "symbol" != typeof t ? t + "" : t, n),
    i = class {
      async get(e) {
        const t = localStorage.getItem(e);
        return t ? JSON.parse(t) : null;
      }
      async set(e, t) {
        localStorage.setItem(e, JSON.stringify(t));
      }
      async remove(e) {
        localStorage.removeItem(e);
      }
    },
    o = class {
      constructor() {
        a(this, "status", "registered");
      }
      getStatus() {
        return this.status;
      }
      transitionTo(e) {
        this.status = e;
      }
    },
    s = new class {
      constructor() {
        a(this, "listeners", {});
      }
      on(e, t) {
        this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t);
      }
      off(e, t) {
        this.listeners[e] && (this.listeners[e] = this.listeners[e].filter(e => e !== t));
      }
      emit(e, t) {
        this.listeners[e] && this.listeners[e].forEach(e => e(t));
      }
    }(),
    l = class {
      static validate(e) {
        if (!e.plugin) throw new Error("[LinnoOnboarding] Plugin name is required.");
        if (!e.steps || 0 === e.steps.length) throw new Error("[LinnoOnboarding] At least one step is required.");
        if (!e.firstStrike) throw new Error("[LinnoOnboarding] First Strike configuration is mandatory.");
        if ("function" != typeof e.firstStrike.verify) throw new Error("[LinnoOnboarding] First Strike must provide a verify function.");
      }
    },
    c = new class {
      constructor(e) {
        a(this, "config"), a(this, "storage"), a(this, "lifecycle"), a(this, "currentStepIndex", 0), a(this, "completedSteps", new Set()), this.storage = e || new i(), this.lifecycle = new o();
      }
      async register(e) {
        l.validate(e), this.config = e, await this.restoreState(), this.lifecycle.transitionTo("registered"), s.emit("onboarding_registered", {
          plugin: e.plugin
        });
      }
      async start() {
        this.config ? "registered" === this.lifecycle.getStatus() && (this.lifecycle.transitionTo("started"), s.emit("onboarding_started", {
          plugin: this.config.plugin
        }), this.config.telemetry?.onSetupStarted && (await Promise.resolve(this.config.telemetry.onSetupStarted({
          plugin: this.config.plugin,
          version: this.config.version
        }))), await this.saveState()) : console.error("LinnoOnboarding: Cannot start before registration.");
      }
      getCurrentStep() {
        return this.config && this.config.steps && this.currentStepIndex < this.config.steps.length ? this.config.steps[this.currentStepIndex] : null;
      }
      async completeStep(e) {
        this.config.steps.find(t => t.id === e) && (this.completedSteps.add(e), s.emit("step_completed", {
          stepId: e,
          plugin: this.config.plugin
        }), this.currentStepIndex < this.config.steps.length - 1 ? (this.currentStepIndex++, this.lifecycle.transitionTo("step_in_progress"), s.emit("step_changed", {
          index: this.currentStepIndex
        })) : this.completedSteps.size >= this.config.steps.length && (this.lifecycle.transitionTo("onboarding_completed"), s.emit("onboarding_completed", {
          plugin: this.config.plugin
        }), this.config.telemetry?.onSetupCompleted && (await Promise.resolve(this.config.telemetry.onSetupCompleted({
          plugin: this.config.plugin,
          version: this.config.version
        }))), await this.verifyFirstStrike()), await this.saveState());
      }
      async verifyFirstStrike() {
        return !!(await this.config.firstStrike.verify()) && (this.lifecycle.transitionTo("first_strike_verified"), s.emit("first_strike_verified", {
          plugin: this.config.plugin
        }), this.config.telemetry?.onFirstStrikeCompleted && (await Promise.resolve(this.config.telemetry.onFirstStrikeCompleted({
          plugin: this.config.plugin,
          version: this.config.version
        }))), await this.saveState(), !0);
      }
      async saveState() {
        await this.storage.set(`linno_onboarding_${this.config.plugin}`, {
          status: this.lifecycle.getStatus(),
          currentStepIndex: this.currentStepIndex,
          completedSteps: Array.from(this.completedSteps)
        });
      }
      async restoreState() {
        const e = await this.storage.get(`linno_onboarding_${this.config.plugin}`);
        e && (this.currentStepIndex = e.currentStepIndex, this.completedSteps = new Set(e.completedSteps), this.lifecycle.transitionTo(e.status));
      }
      getStepContext() {
        return this.config ? {
          plugin: this.config.plugin,
          userId: 0,
          completeStep: () => {
            const e = this.getCurrentStep();
            e && this.completeStep(e.id);
          },
          skipStep: () => {
            const e = this.getCurrentStep();
            e && e.canSkip && (s.emit("step_skipped", {
              stepId: e.id
            }), this.completeStep(e.id));
          },
          goNext: () => {
            const e = this.getCurrentStep();
            e && e.onNext ? Promise.resolve(e.onNext(this.getStepContext())).then(t => {
              !1 !== t && this.completeStep(e.id);
            }) : e && this.completeStep(e.id);
          },
          goBack: () => {
            this.currentStepIndex > 0 && (this.currentStepIndex--, this.lifecycle.transitionTo("step_in_progress"), s.emit("step_changed", {
              index: this.currentStepIndex
            }));
          },
          emit: (e, t) => s.emit(e, t)
        } : {
          plugin: "",
          userId: 0,
          completeStep: () => {},
          skipStep: () => {},
          goNext: () => {},
          goBack: () => {},
          emit: () => {}
        };
      }
      getProgress() {
        return this.config ? {
          total: this.config.steps.length,
          current: this.currentStepIndex,
          percent: Math.round(this.completedSteps.size / this.config.steps.length * 100),
          steps: this.config.steps.map((e, t) => ({
            ...e,
            status: this.completedSteps.has(e.id) ? "completed" : t === this.currentStepIndex ? "current" : "pending"
          }))
        } : null;
      }
    }(),
    u = async e => {
      await c.register(e);
    };
});
