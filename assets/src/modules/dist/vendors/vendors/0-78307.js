// Reconstructed Webpack factory 78307; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    D0: () => ie,
    lV: () => Q,
    Mt: () => re,
    mN: () => G,
    lN: () => $
  });
  var r = n(58168),
    a = n(98587),
    i = n(41594),
    o = n.n(i),
    s = ".".charCodeAt(0),
    l = /\\(\\)?/g,
    c = RegExp("[^.[\\]]+|\\[(?:([^\"'][^[]*)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))", "g"),
    u = {},
    d = /[.[\]]+/,
    p = function (e) {
      if (null == e || !e.length) return [];
      if ("string" != typeof e) throw new Error("toPath() expects a string");
      return null == u[e] && (e.endsWith("[]") ? u[e] = e.split(d).filter(Boolean) : u[e] = (n = [], (t = e).charCodeAt(0) === s && n.push(""), t.replace(c, function (e, t, r, a) {
        var i = e;
        r ? i = a.replace(l, "$1") : t && (i = t.trim()), n.push(i);
      }), n)), u[e];
      var t, n;
    },
    f = function (e, t) {
      for (var n = p(t), r = e, a = 0; a < n.length; a++) {
        var i = n[a];
        if (null == r || "object" != typeof r || Array.isArray(r) && isNaN(i)) return;
        r = r[i];
      }
      return r;
    };
  function h(e) {
    var t = function (e) {
      if ("object" != typeof e || null === e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != typeof n) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == typeof t ? t : String(t);
  }
  var _ = function e(t, n, i, o, s) {
      if (n >= i.length) return o;
      var l = i[n];
      if (isNaN(l)) {
        var c;
        if (null == t) {
          var u,
            d = e(void 0, n + 1, i, o, s);
          return void 0 === d ? void 0 : ((u = {})[l] = d, u);
        }
        if (Array.isArray(t)) throw new Error("Cannot set a non-numeric property on an array");
        var p = e(t[l], n + 1, i, o, s);
        if (void 0 === p) {
          var f = Object.keys(t).length;
          if (void 0 === t[l] && 0 === f) return;
          return void 0 !== t[l] && f <= 1 ? isNaN(i[n - 1]) || s ? void 0 : {} : (t[l], (0, a.A)(t, [l].map(h)));
        }
        return (0, r.A)({}, t, ((c = {})[l] = p, c));
      }
      var _ = Number(l);
      if (null == t) {
        var m = e(void 0, n + 1, i, o, s);
        if (void 0 === m) return;
        var A = [];
        return A[_] = m, A;
      }
      if (!Array.isArray(t)) throw new Error("Cannot set a numeric property on an object");
      var g = e(t[_], n + 1, i, o, s),
        y = [].concat(t);
      if (s && void 0 === g) {
        if (y.splice(_, 1), 0 === y.length) return;
      } else y[_] = g;
      return y;
    },
    m = function (e, t, n, r) {
      if (void 0 === r && (r = !1), null == e) throw new Error("Cannot call setIn() with " + String(e) + " state");
      if (null == t) throw new Error("Cannot call setIn() with " + String(t) + " key");
      return _(e, 0, p(t), n, r);
    },
    A = "FINAL_FORM/form-error",
    g = "FINAL_FORM/array-error";
  function y(e, t) {
    var n = e.errors,
      r = e.initialValues,
      a = e.lastSubmittedValues,
      i = e.submitErrors,
      o = e.submitFailed,
      s = e.submitSucceeded,
      l = e.submitting,
      c = e.values,
      u = t.active,
      d = t.blur,
      p = t.change,
      h = t.data,
      _ = t.focus,
      m = t.modified,
      A = t.modifiedSinceLastSubmit,
      y = t.name,
      v = t.touched,
      E = t.validating,
      b = t.visited,
      w = f(c, y),
      C = f(n, y);
    C && C[g] && (C = C[g]);
    var O = i && f(i, y),
      M = r && f(r, y),
      S = t.isEqual(M, w),
      T = !C && !O;
    return {
      active: u,
      blur: d,
      change: p,
      data: h,
      dirty: !S,
      dirtySinceLastSubmit: !(!a || t.isEqual(f(a, y), w)),
      error: C,
      focus: _,
      initial: M,
      invalid: !T,
      length: Array.isArray(w) ? w.length : void 0,
      modified: m,
      modifiedSinceLastSubmit: A,
      name: y,
      pristine: S,
      submitError: O,
      submitFailed: o,
      submitSucceeded: s,
      submitting: l,
      touched: v,
      valid: T,
      value: w,
      visited: b,
      validating: E
    };
  }
  var v = ["active", "data", "dirty", "dirtySinceLastSubmit", "error", "initial", "invalid", "length", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "value", "visited", "validating"],
    E = function (e, t) {
      if (e === t) return !0;
      if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (var a = Object.prototype.hasOwnProperty.bind(t), i = 0; i < n.length; i++) {
        var o = n[i];
        if (!a(o) || e[o] !== t[o]) return !1;
      }
      return !0;
    };
  function b(e, t, n, r, a, i) {
    var o = !1;
    return a.forEach(function (a) {
      r[a] && (e[a] = t[a], n && (~i.indexOf(a) ? E(t[a], n[a]) : t[a] === n[a]) || (o = !0));
    }), o;
  }
  var w = ["data"],
    C = function (e, t, n, r) {
      var a = {
        blur: e.blur,
        change: e.change,
        focus: e.focus,
        name: e.name
      };
      return b(a, e, t, n, v, w) || !t || r ? a : void 0;
    },
    O = ["active", "dirty", "dirtyFields", "dirtyFieldsSinceLastSubmit", "dirtySinceLastSubmit", "error", "errors", "hasSubmitErrors", "hasValidationErrors", "initialValues", "invalid", "modified", "modifiedSinceLastSubmit", "pristine", "submitting", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "touched", "valid", "validating", "values", "visited"],
    M = ["touched", "visited"];
  function S(e, t, n, r) {
    var a = {};
    return b(a, e, t, n, O, M) || !t || r ? a : void 0;
  }
  var T = function (e) {
      var t, n;
      return function () {
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
        return t && a.length === t.length && !a.some(function (e, n) {
          return !E(t[n], e);
        }) || (t = a, n = e.apply(void 0, a)), n;
      };
    },
    k = function (e) {
      return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then;
    },
    x = function (e, t) {
      return e === t;
    },
    D = function e(t) {
      return Object.keys(t).some(function (n) {
        var r = t[n];
        return !r || "object" != typeof r || r instanceof Error ? void 0 !== r : e(r);
      });
    };
  function I(e, t, n, r, a, i) {
    var o = a(n, r, t, i);
    return !!o && (e(o), !0);
  }
  function P(e, t, n, r, a) {
    var i = e.entries;
    Object.keys(i).forEach(function (e) {
      var o = i[Number(e)];
      if (o) {
        var s = o.subscription,
          l = o.subscriber,
          c = o.notified;
        I(l, s, t, n, r, a || !c) && (o.notified = !0);
      }
    });
  }
  var L = ["render", "children", "component"];
  function R(e, t, n) {
    var r = e.render,
      o = e.children,
      s = e.component,
      l = (0, a.A)(e, L);
    if (s) return i.createElement(s, Object.assign(t, l, {
      children: o,
      render: r
    }));
    if (r) return r(void 0 === o ? Object.assign(t, l) : Object.assign(t, l, {
      children: o
    }));
    if ("function" != typeof o) throw new Error("Must specify either a render prop, a render function as children, or a component prop to " + n);
    return o(Object.assign(t, l));
  }
  function B(e, t, n) {
    void 0 === n && (n = function (e, t) {
      return e === t;
    });
    var r = o().useRef(e);
    o().useEffect(function () {
      n(e, r.current) || (t(), r.current = e);
    });
  }
  var N = function (e, t) {
      if (e === t) return !0;
      if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (var a = Object.prototype.hasOwnProperty.bind(t), i = 0; i < n.length; i++) {
        var o = n[i];
        if (!a(o) || e[o] !== t[o]) return !1;
      }
      return !0;
    },
    U = function (e) {
      return !(!e || "function" != typeof e.stopPropagation);
    },
    F = i.createContext();
  function j(e) {
    var t = o().useRef(e);
    return o().useEffect(function () {
      t.current = e;
    }), t;
  }
  var H = function (e, t, n) {
      n.forEach(function (n) {
        Object.defineProperty(e, n, {
          get: function () {
            return t[n];
          },
          enumerable: !0
        });
      });
    },
    W = function (e, t) {
      return H(e, t, ["active", "dirty", "dirtyFields", "dirtySinceLastSubmit", "dirtyFieldsSinceLastSubmit", "error", "errors", "hasSubmitErrors", "hasValidationErrors", "initialValues", "invalid", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "values", "visited"]);
    },
    K = function (e, t) {
      return H(e, t, ["active", "data", "dirty", "dirtySinceLastSubmit", "error", "initial", "invalid", "length", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "visited"]);
    },
    V = ["debug", "decorators", "destroyOnUnregister", "form", "initialValues", "initialValuesEqual", "keepDirtyOnReinitialize", "mutators", "onSubmit", "subscription", "validate", "validateOnBlur"],
    z = {
      "final-form": "4.20.10",
      "react-final-form": "6.5.8"
    },
    Y = O.reduce(function (e, t) {
      return e[t] = !0, e;
    }, {});
  function Q(e) {
    var t,
      n,
      s = e.debug,
      l = e.decorators,
      c = void 0 === l ? [] : l,
      u = e.destroyOnUnregister,
      d = e.form,
      p = e.initialValues,
      h = e.initialValuesEqual,
      _ = e.keepDirtyOnReinitialize,
      v = e.mutators,
      b = e.onSubmit,
      w = e.subscription,
      O = void 0 === w ? Y : w,
      M = e.validate,
      L = e.validateOnBlur,
      H = (0, a.A)(e, V),
      K = {
        debug: s,
        destroyOnUnregister: u,
        initialValues: p,
        keepDirtyOnReinitialize: _,
        mutators: v,
        onSubmit: b,
        validate: M,
        validateOnBlur: L
      },
      Q = (t = function () {
        var e = d || function (e) {
          if (!e) throw new Error("No config specified");
          var t = e.debug,
            n = e.destroyOnUnregister,
            a = e.keepDirtyOnReinitialize,
            i = e.initialValues,
            o = e.mutators,
            s = e.onSubmit,
            l = e.validate,
            c = e.validateOnBlur;
          if (!s) throw new Error("No onSubmit function specified");
          var u = {
              subscribers: {
                index: 0,
                entries: {}
              },
              fieldSubscribers: {},
              fields: {},
              formState: {
                asyncErrors: {},
                dirtySinceLastSubmit: !1,
                modifiedSinceLastSubmit: !1,
                errors: {},
                initialValues: i && (0, r.A)({}, i),
                invalid: !1,
                pristine: !0,
                submitting: !1,
                submitFailed: !1,
                submitSucceeded: !1,
                resetWhileSubmitting: !1,
                valid: !0,
                validating: 0,
                values: i ? (0, r.A)({}, i) : {}
              },
              lastFormState: void 0
            },
            d = 0,
            p = !1,
            h = !1,
            _ = !1,
            v = 0,
            b = {},
            w = function (e, t, n) {
              var r = n(f(e.formState.values, t));
              e.formState.values = m(e.formState.values, t, r) || {};
            },
            O = function (e, t, n) {
              if (e.fields[t]) {
                var a, i;
                e.fields = (0, r.A)({}, e.fields, ((a = {})[n] = (0, r.A)({}, e.fields[t], {
                  name: n,
                  blur: function () {
                    return V.blur(n);
                  },
                  change: function (e) {
                    return V.change(n, e);
                  },
                  focus: function () {
                    return V.focus(n);
                  },
                  lastFieldState: void 0
                }), a)), delete e.fields[t], e.fieldSubscribers = (0, r.A)({}, e.fieldSubscribers, ((i = {})[n] = e.fieldSubscribers[t], i)), delete e.fieldSubscribers[t];
                var o = f(e.formState.values, t);
                e.formState.values = m(e.formState.values, t, void 0) || {}, e.formState.values = m(e.formState.values, n, o), delete e.lastFormState;
              }
            },
            M = function (e) {
              return function () {
                if (o) {
                  for (var t = {
                      formState: u.formState,
                      fields: u.fields,
                      fieldSubscribers: u.fieldSubscribers,
                      lastFormState: u.lastFormState
                    }, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                  var i = o[e](r, t, {
                    changeValue: w,
                    getIn: f,
                    renameField: O,
                    resetFieldState: V.resetFieldState,
                    setIn: m,
                    shallowEqual: E
                  });
                  return u.formState = t.formState, u.fields = t.fields, u.fieldSubscribers = t.fieldSubscribers, u.lastFormState = t.lastFormState, B(void 0, function () {
                    N(), W();
                  }), i;
                }
              };
            },
            L = o ? Object.keys(o).reduce(function (e, t) {
              return e[t] = M(t), e;
            }, {}) : {},
            R = function (e) {
              return Object.keys(e.validators).reduce(function (t, n) {
                var r = e.validators[Number(n)]();
                return r && t.push(r), t;
              }, []);
            },
            B = function (e, t) {
              if (p) return h = !0, void t();
              var n = u.fields,
                a = u.formState,
                i = (0, r.A)({}, n),
                o = Object.keys(i);
              if (l || o.some(function (e) {
                return R(i[e]).length;
              })) {
                var s = !1;
                if (e) {
                  var c = i[e];
                  if (c) {
                    var d = c.validateFields;
                    d && (s = !0, o = d.length ? d.concat(e) : [e]);
                  }
                }
                var _,
                  w = {},
                  C = {},
                  O = {},
                  M = [].concat(function (e) {
                    var t = [];
                    if (l) {
                      var n = l((0, r.A)({}, u.formState.values));
                      k(n) ? t.push(n.then(function (t) {
                        return e(t, !0);
                      })) : e(n, !1);
                    }
                    return t;
                  }(function (e, t) {
                    t ? C = e || {} : w = e || {};
                  }), o.reduce(function (e, t) {
                    return e.concat(function (e, t) {
                      var n,
                        r = [],
                        a = R(e);
                      return a.length && (a.forEach(function (a) {
                        var i = a(f(u.formState.values, e.name), u.formState.values, 0 === a.length || 3 === a.length ? y(u.formState, u.fields[e.name]) : void 0);
                        if (i && k(i)) {
                          e.validating = !0;
                          var o = i.then(function (n) {
                            u.fields[e.name] && (u.fields[e.name].validating = !1, t(n));
                          });
                          r.push(o);
                        } else n || (n = i);
                      }), t(n)), r;
                    }(n[t], function (e) {
                      O[t] = e;
                    }));
                  }, [])),
                  S = M.length > 0,
                  T = ++v,
                  x = Promise.all(M).then((_ = T, function (e) {
                    return delete b[_], e;
                  }));
                S && (b[T] = x);
                var D = function (e) {
                  var t = (0, r.A)({}, s ? a.errors : {}, w, e ? C : a.asyncErrors),
                    c = function (e) {
                      o.forEach(function (r) {
                        if (n[r]) {
                          var a = f(w, r),
                            o = f(t, r),
                            c = R(i[r]).length,
                            u = O[r];
                          e(r, c && u || l && a || (a || s ? void 0 : o));
                        }
                      });
                    };
                  c(function (e, n) {
                    t = m(t, e, n) || {};
                  }), c(function (e, n) {
                    if (n && n[g]) {
                      var r = f(t, e),
                        a = [].concat(r);
                      a[g] = n[g], t = m(t, e, a);
                    }
                  }), E(a.errors, t) || (a.errors = t), e && (a.asyncErrors = C), a.error = w[A];
                };
                if (S && (u.formState.validating++, t()), D(!1), t(), S) {
                  var I = function () {
                    u.formState.validating--, t(), 0 === u.formState.validating && u.lastFormState.validating && W();
                  };
                  x.then(function () {
                    v > T || D(!0);
                  }).then(I, I);
                }
              } else t();
            },
            N = function (e) {
              if (!d) {
                var t = u.fields,
                  n = u.fieldSubscribers,
                  a = u.formState,
                  i = (0, r.A)({}, t),
                  o = function (e) {
                    var t = i[e],
                      r = y(a, t),
                      o = t.lastFieldState;
                    t.lastFieldState = r;
                    var s = n[e];
                    s && P(s, r, o, C, void 0 === o);
                  };
                e ? o(e) : Object.keys(i).forEach(o);
              }
            },
            U = function () {
              Object.keys(u.fields).forEach(function (e) {
                u.fields[e].touched = !0;
              });
            },
            F = function () {
              var e = u.fields,
                t = u.formState,
                n = u.lastFormState,
                a = (0, r.A)({}, e),
                i = Object.keys(a),
                o = !1,
                s = i.reduce(function (e, n) {
                  return !a[n].isEqual(f(t.values, n), f(t.initialValues || {}, n)) && (o = !0, e[n] = !0), e;
                }, {}),
                l = i.reduce(function (e, n) {
                  var r = t.lastSubmittedValues || {};
                  return a[n].isEqual(f(t.values, n), f(r, n)) || (e[n] = !0), e;
                }, {});
              t.pristine = !o, t.dirtySinceLastSubmit = !(!t.lastSubmittedValues || !Object.values(l).some(function (e) {
                return e;
              })), t.modifiedSinceLastSubmit = !(!t.lastSubmittedValues || !Object.keys(a).some(function (e) {
                return a[e].modifiedSinceLastSubmit;
              })), t.valid = !(t.error || t.submitError || D(t.errors) || t.submitErrors && D(t.submitErrors));
              var c = function (e) {
                  var t = e.active,
                    n = e.dirtySinceLastSubmit,
                    r = e.modifiedSinceLastSubmit,
                    a = e.error,
                    i = e.errors,
                    o = e.initialValues,
                    s = e.pristine,
                    l = e.submitting,
                    c = e.submitFailed,
                    u = e.submitSucceeded,
                    d = e.submitError,
                    p = e.submitErrors,
                    f = e.valid,
                    h = e.validating,
                    _ = e.values;
                  return {
                    active: t,
                    dirty: !s,
                    dirtySinceLastSubmit: n,
                    modifiedSinceLastSubmit: r,
                    error: a,
                    errors: i,
                    hasSubmitErrors: !!(d || p && D(p)),
                    hasValidationErrors: !(!a && !D(i)),
                    invalid: !f,
                    initialValues: o,
                    pristine: s,
                    submitting: l,
                    submitFailed: c,
                    submitSucceeded: u,
                    submitError: d,
                    submitErrors: p,
                    valid: f,
                    validating: h > 0,
                    values: _
                  };
                }(t),
                d = i.reduce(function (e, t) {
                  return e.modified[t] = a[t].modified, e.touched[t] = a[t].touched, e.visited[t] = a[t].visited, e;
                }, {
                  modified: {},
                  touched: {},
                  visited: {}
                }),
                p = d.modified,
                h = d.touched,
                _ = d.visited;
              return c.dirtyFields = n && E(n.dirtyFields, s) ? n.dirtyFields : s, c.dirtyFieldsSinceLastSubmit = n && E(n.dirtyFieldsSinceLastSubmit, l) ? n.dirtyFieldsSinceLastSubmit : l, c.modified = n && E(n.modified, p) ? n.modified : p, c.touched = n && E(n.touched, h) ? n.touched : h, c.visited = n && E(n.visited, _) ? n.visited : _, n && E(n, c) ? n : c;
            },
            j = !1,
            H = !1,
            W = function e() {
              if (j) H = !0;else {
                if (j = !0, t && t(F(), Object.keys(u.fields).reduce(function (e, t) {
                  return e[t] = u.fields[t], e;
                }, {})), !(d || p && _)) {
                  var n = u.lastFormState,
                    r = F();
                  r !== n && (u.lastFormState = r, P(u.subscribers, r, n, S));
                }
                j = !1, H && (H = !1, e());
              }
            },
            K = function () {
              return Object.keys(u.fields).forEach(function (e) {
                return u.fields[e].modifiedSinceLastSubmit = !1;
              });
            };
          B(void 0, function () {
            W();
          });
          var V = {
            batch: function (e) {
              d++, e(), d--, N(), W();
            },
            blur: function (e) {
              var t = u.fields,
                n = u.formState,
                a = t[e];
              a && (delete n.active, t[e] = (0, r.A)({}, a, {
                active: !1,
                touched: !0
              }), c ? B(e, function () {
                N(), W();
              }) : (N(), W()));
            },
            change: function (e, t) {
              var n = u.fields,
                a = u.formState;
              if (f(a.values, e) !== t) {
                w(u, e, function () {
                  return t;
                });
                var i = n[e];
                i && (n[e] = (0, r.A)({}, i, {
                  modified: !0,
                  modifiedSinceLastSubmit: !!a.lastSubmittedValues
                })), c ? (N(), W()) : B(e, function () {
                  N(), W();
                });
              }
            },
            get destroyOnUnregister() {
              return !!n;
            },
            set destroyOnUnregister(e) {
              n = e;
            },
            focus: function (e) {
              var t = u.fields[e];
              t && !t.active && (u.formState.active = e, t.active = !0, t.visited = !0, N(), W());
            },
            mutators: L,
            getFieldState: function (e) {
              var t = u.fields[e];
              return t && t.lastFieldState;
            },
            getRegisteredFields: function () {
              return Object.keys(u.fields);
            },
            getState: function () {
              return F();
            },
            initialize: function (e) {
              var t = u.fields,
                n = u.formState,
                i = (0, r.A)({}, t),
                o = "function" == typeof e ? e(n.values) : e;
              a || (n.values = o);
              var s = a ? Object.keys(i).reduce(function (e, t) {
                return i[t].isEqual(f(n.values, t), f(n.initialValues || {}, t)) || (e[t] = f(n.values, t)), e;
              }, {}) : {};
              n.initialValues = o, n.values = o, Object.keys(s).forEach(function (e) {
                n.values = m(n.values, e, s[e]) || {};
              }), B(void 0, function () {
                N(), W();
              });
            },
            isValidationPaused: function () {
              return p;
            },
            pauseValidation: function (e) {
              void 0 === e && (e = !0), p = !0, _ = e;
            },
            registerField: function (e, t, r, a) {
              void 0 === r && (r = {}), u.fieldSubscribers[e] || (u.fieldSubscribers[e] = {
                index: 0,
                entries: {}
              });
              var i = u.fieldSubscribers[e].index++;
              u.fieldSubscribers[e].entries[i] = {
                subscriber: T(t),
                subscription: r,
                notified: !1
              };
              var o = u.fields[e] || {
                active: !1,
                afterSubmit: a && a.afterSubmit,
                beforeSubmit: a && a.beforeSubmit,
                data: a && a.data || {},
                isEqual: a && a.isEqual || x,
                lastFieldState: void 0,
                modified: !1,
                modifiedSinceLastSubmit: !1,
                name: e,
                touched: !1,
                valid: !0,
                validateFields: a && a.validateFields,
                validators: {},
                validating: !1,
                visited: !1
              };
              o.blur = o.blur || function () {
                return V.blur(e);
              }, o.change = o.change || function (t) {
                return V.change(e, t);
              }, o.focus = o.focus || function () {
                return V.focus(e);
              }, u.fields[e] = o;
              var s = !1,
                l = a && a.silent,
                c = function () {
                  l && u.fields[e] ? N(e) : (W(), N());
                };
              if (a) {
                s = !(!a.getValidator || !a.getValidator()), a.getValidator && (u.fields[e].validators[i] = a.getValidator);
                var d = void 0 === f(u.formState.values, e);
                void 0 === a.initialValue || !d && f(u.formState.values, e) !== f(u.formState.initialValues, e) || (u.formState.initialValues = m(u.formState.initialValues || {}, e, a.initialValue), u.formState.values = m(u.formState.values, e, a.initialValue), B(void 0, c)), void 0 !== a.defaultValue && void 0 === a.initialValue && void 0 === f(u.formState.initialValues, e) && d && (u.formState.values = m(u.formState.values, e, a.defaultValue));
              }
              return s ? B(void 0, c) : c(), function () {
                var t = !1;
                u.fields[e] && (t = !(!u.fields[e].validators[i] || !u.fields[e].validators[i]()), delete u.fields[e].validators[i]);
                var r = !!u.fieldSubscribers[e];
                r && delete u.fieldSubscribers[e].entries[i];
                var a = r && !Object.keys(u.fieldSubscribers[e].entries).length;
                a && (delete u.fieldSubscribers[e], delete u.fields[e], t && (u.formState.errors = m(u.formState.errors, e, void 0) || {}), n && (u.formState.values = m(u.formState.values, e, void 0, !0) || {})), l || (t ? B(void 0, function () {
                  W(), N();
                }) : a && W());
              };
            },
            reset: function (e) {
              void 0 === e && (e = u.formState.initialValues), u.formState.submitting && (u.formState.resetWhileSubmitting = !0), u.formState.submitFailed = !1, u.formState.submitSucceeded = !1, delete u.formState.submitError, delete u.formState.submitErrors, delete u.formState.lastSubmittedValues, V.initialize(e || {});
            },
            resetFieldState: function (e) {
              u.fields[e] = (0, r.A)({}, u.fields[e], {
                active: !1,
                lastFieldState: void 0,
                modified: !1,
                touched: !1,
                valid: !0,
                validating: !1,
                visited: !1
              }), B(void 0, function () {
                N(), W();
              });
            },
            restart: function (e) {
              void 0 === e && (e = u.formState.initialValues), V.batch(function () {
                for (var t in u.fields) V.resetFieldState(t), u.fields[t] = (0, r.A)({}, u.fields[t], {
                  active: !1,
                  lastFieldState: void 0,
                  modified: !1,
                  modifiedSinceLastSubmit: !1,
                  touched: !1,
                  valid: !0,
                  validating: !1,
                  visited: !1
                });
                V.reset(e);
              });
            },
            resumeValidation: function () {
              p = !1, _ = !1, h && B(void 0, function () {
                N(), W();
              }), h = !1;
            },
            setConfig: function (e, r) {
              switch (e) {
                case "debug":
                  t = r;
                  break;
                case "destroyOnUnregister":
                  n = r;
                  break;
                case "initialValues":
                  V.initialize(r);
                  break;
                case "keepDirtyOnReinitialize":
                  a = r;
                  break;
                case "mutators":
                  o = r, r ? (Object.keys(L).forEach(function (e) {
                    e in r || delete L[e];
                  }), Object.keys(r).forEach(function (e) {
                    L[e] = M(e);
                  })) : Object.keys(L).forEach(function (e) {
                    delete L[e];
                  });
                  break;
                case "onSubmit":
                  s = r;
                  break;
                case "validate":
                  l = r, B(void 0, function () {
                    N(), W();
                  });
                  break;
                case "validateOnBlur":
                  c = r;
                  break;
                default:
                  throw new Error("Unrecognised option " + e);
              }
            },
            submit: function () {
              var e = u.formState;
              if (!e.submitting) {
                if (delete e.submitErrors, delete e.submitError, e.lastSubmittedValues = (0, r.A)({}, e.values), u.formState.error || D(u.formState.errors)) return U(), K(), u.formState.submitFailed = !0, W(), void N();
                var t = Object.keys(b);
                if (t.length) Promise.all(t.map(function (e) {
                  return b[Number(e)];
                })).then(V.submit, console.error);else if (!Object.keys(u.fields).some(function (e) {
                  return u.fields[e].beforeSubmit && !1 === u.fields[e].beforeSubmit();
                })) {
                  var n,
                    a = !1,
                    i = function (t) {
                      e.submitting = !1;
                      var r = e.resetWhileSubmitting;
                      return r && (e.resetWhileSubmitting = !1), t && D(t) ? (e.submitFailed = !0, e.submitSucceeded = !1, e.submitErrors = t, e.submitError = t[A], U()) : (r || (e.submitFailed = !1, e.submitSucceeded = !0), Object.keys(u.fields).forEach(function (e) {
                        return u.fields[e].afterSubmit && u.fields[e].afterSubmit();
                      })), W(), N(), a = !0, n && n(t), t;
                    };
                  e.submitting = !0, e.submitFailed = !1, e.submitSucceeded = !1, e.lastSubmittedValues = (0, r.A)({}, e.values), K();
                  var o = s(e.values, V, i);
                  if (!a) {
                    if (o && k(o)) return W(), N(), o.then(i, function (e) {
                      throw i(), e;
                    });
                    if (s.length >= 3) return W(), N(), new Promise(function (e) {
                      n = e;
                    });
                    i(o);
                  }
                }
              }
            },
            subscribe: function (e, t) {
              if (!e) throw new Error("No callback given.");
              if (!t) throw new Error("No subscription provided. What values do you want to listen to?");
              var n = T(e),
                r = u.subscribers,
                a = r.index++;
              r.entries[a] = {
                subscriber: n,
                subscription: t,
                notified: !1
              };
              var i = F();
              return I(n, t, i, i, S, !0), function () {
                delete r.entries[a];
              };
            }
          };
          return V;
        }(K);
        return e.pauseValidation(), e;
      }, (n = o().useRef()).current || (n.current = t()), n.current),
      G = i.useState(function () {
        var e = {};
        return Q.subscribe(function (t) {
          e = t;
        }, O)(), e;
      }),
      $ = G[0],
      q = G[1],
      Z = j($);
    i.useEffect(function () {
      Q.isValidationPaused() && Q.resumeValidation();
      var e = [Q.subscribe(function (e) {
        N(e, Z.current) || q(e);
      }, O)].concat(c ? c.map(function (e) {
        return e(Q);
      }) : []);
      return function () {
        Q.pauseValidation(), e.reverse().forEach(function (e) {
          return e();
        });
      };
    }, c), B(s, function () {
      Q.setConfig("debug", s);
    }), B(u, function () {
      Q.destroyOnUnregister = !!u;
    }), B(_, function () {
      Q.setConfig("keepDirtyOnReinitialize", _);
    }), B(p, function () {
      Q.setConfig("initialValues", p);
    }, h || N), B(v, function () {
      Q.setConfig("mutators", v);
    }), B(b, function () {
      Q.setConfig("onSubmit", b);
    }), B(M, function () {
      Q.setConfig("validate", M);
    }), B(L, function () {
      Q.setConfig("validateOnBlur", L);
    });
    var X = {
      form: (0, r.A)({}, Q, {
        reset: function (e) {
          U(e) ? Q.reset() : Q.reset(e);
        }
      }),
      handleSubmit: function (e) {
        return e && ("function" == typeof e.preventDefault && e.preventDefault(), "function" == typeof e.stopPropagation && e.stopPropagation()), Q.submit();
      }
    };
    return W(X, $), i.createElement(F.Provider, {
      value: Q
    }, R((0, r.A)({}, H, {
      __versions: z
    }), X, "ReactFinalForm"));
  }
  function G(e) {
    var t = i.useContext(F);
    if (!t) throw new Error((e || "useForm") + " must be used inside of a <Form> component");
    return t;
  }
  function $(e) {
    var t = void 0 === e ? {} : e,
      n = t.onChange,
      r = t.subscription,
      a = void 0 === r ? Y : r,
      o = G("useFormState"),
      s = i.useRef(!0),
      l = i.useRef(n);
    l.current = n;
    var c = i.useState(function () {
        var e = {};
        return o.subscribe(function (t) {
          e = t;
        }, a)(), n && n(e), e;
      }),
      u = c[0],
      d = c[1];
    i.useEffect(function () {
      return o.subscribe(function (e) {
        s.current ? s.current = !1 : (d(e), l.current && l.current(e));
      }, a);
    }, []);
    var p = {};
    return W(p, u), p;
  }
  var q = "undefined" != typeof window && window.navigator && window.navigator.product && "ReactNative" === window.navigator.product,
    Z = function (e, t, n, r) {
      if (!r && e.nativeEvent && void 0 !== e.nativeEvent.text) return e.nativeEvent.text;
      if (r && e.nativeEvent) return e.nativeEvent.text;
      var a = e.target,
        i = a.type,
        o = a.value,
        s = a.checked;
      switch (i) {
        case "checkbox":
          if (void 0 !== n) {
            if (s) return Array.isArray(t) ? t.concat(n) : [n];
            if (!Array.isArray(t)) return t;
            var l = t.indexOf(n);
            return l < 0 ? t : t.slice(0, l).concat(t.slice(l + 1));
          }
          return !!s;
        case "select-multiple":
          return function (e) {
            var t = [];
            if (e) for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.selected && t.push(r.value);
            }
            return t;
          }(e.target.options);
        default:
          return o;
      }
    };
  function X(e) {
    var t = i.useRef(e);
    return i.useEffect(function () {
      t.current = e;
    }), i.useCallback(function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
      return t.current.apply(null, n);
    }, []);
  }
  var J = v.reduce(function (e, t) {
      return e[t] = !0, e;
    }, {}),
    ee = function (e, t) {
      return void 0 === e ? "" : e;
    },
    te = function (e, t) {
      return "" === e ? void 0 : e;
    },
    ne = function (e, t) {
      return e === t;
    };
  function re(e, t) {
    void 0 === t && (t = {});
    var n = t,
      r = n.afterSubmit,
      a = n.allowNull,
      o = n.component,
      s = n.data,
      l = n.defaultValue,
      c = n.format,
      u = void 0 === c ? ee : c,
      d = n.formatOnBlur,
      p = n.initialValue,
      f = n.multiple,
      h = n.parse,
      _ = void 0 === h ? te : h,
      m = n.subscription,
      A = void 0 === m ? J : m,
      g = n.type,
      y = n.validateFields,
      v = n.value,
      E = G("useField"),
      b = j(t),
      w = function (t, n) {
        return E.registerField(e, t, A, {
          afterSubmit: r,
          beforeSubmit: function () {
            var t = b.current,
              n = t.beforeSubmit,
              r = t.formatOnBlur,
              a = t.format,
              i = void 0 === a ? ee : a;
            if (r) {
              var o = E.getFieldState(e).value,
                s = i(o, e);
              s !== o && E.change(e, s);
            }
            return n && n();
          },
          data: s,
          defaultValue: l,
          getValidator: function () {
            return b.current.validate;
          },
          initialValue: p,
          isEqual: function (e, t) {
            return (b.current.isEqual || ne)(e, t);
          },
          silent: n,
          validateFields: y
        });
      },
      C = i.useRef(!0),
      O = i.useState(function () {
        var e = {},
          t = E.destroyOnUnregister;
        return E.destroyOnUnregister = !1, w(function (t) {
          e = t;
        }, !0)(), E.destroyOnUnregister = t, e;
      }),
      M = O[0],
      S = O[1];
    i.useEffect(function () {
      return w(function (e) {
        C.current ? C.current = !1 : S(e);
      }, !1);
    }, [e, s, l, p]);
    var T = {};
    K(T, M);
    var k = {
      name: e,
      get value() {
        var t = M.value;
        return d ? "input" === o && (t = ee(t)) : t = u(t, e), null !== t || a || (t = ""), "checkbox" === g || "radio" === g ? v : "select" === o && f ? t || [] : t;
      },
      get checked() {
        var t = M.value;
        return "checkbox" === g ? (t = u(t, e), void 0 === v ? !!t : !(!Array.isArray(t) || !~t.indexOf(v))) : "radio" === g ? u(t, e) === v : void 0;
      },
      onBlur: X(function (e) {
        if (M.blur(), d) {
          var t = E.getFieldState(M.name);
          M.change(u(t.value, M.name));
        }
      }),
      onChange: X(function (t) {
        var n = t && t.target ? Z(t, M.value, v, q) : t;
        M.change(_(n, e));
      }),
      onFocus: X(function (e) {
        return M.focus();
      })
    };
    return f && (k.multiple = f), void 0 !== g && (k.type = g), {
      input: k,
      meta: T
    };
  }
  var ae = ["afterSubmit", "allowNull", "beforeSubmit", "children", "component", "data", "defaultValue", "format", "formatOnBlur", "initialValue", "isEqual", "multiple", "name", "parse", "subscription", "type", "validate", "validateFields", "value"],
    ie = i.forwardRef(function (e, t) {
      var n = e.afterSubmit,
        o = e.allowNull,
        s = e.beforeSubmit,
        l = e.children,
        c = e.component,
        u = e.data,
        d = e.defaultValue,
        p = e.format,
        f = e.formatOnBlur,
        h = e.initialValue,
        _ = e.isEqual,
        m = e.multiple,
        A = e.name,
        g = e.parse,
        y = e.subscription,
        v = e.type,
        E = e.validate,
        b = e.validateFields,
        w = e.value,
        C = (0, a.A)(e, ae),
        O = re(A, {
          afterSubmit: n,
          allowNull: o,
          beforeSubmit: s,
          children: l,
          component: c,
          data: u,
          defaultValue: d,
          format: p,
          formatOnBlur: f,
          initialValue: h,
          isEqual: _,
          multiple: m,
          parse: g,
          subscription: y,
          type: v,
          validate: E,
          validateFields: b,
          value: w
        });
      if ("function" == typeof l) return l((0, r.A)({}, O, C));
      if ("string" == typeof c) return i.createElement(c, (0, r.A)({}, O.input, {
        children: l,
        ref: t
      }, C));
      if (!A) throw new Error("prop name cannot be undefined in <Field> component");
      return R((0, r.A)({
        children: l,
        component: c,
        ref: t
      }, C), O, "Field(" + A + ")");
    });
});
