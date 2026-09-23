// Reconstructed Webpack factory 11619; arguments retain original semantics.
(function (e, t, n) {
  var l = this && this.__assign || function () {
      return l = Object.assign || function (e) {
        for (var t, n = 1, l = arguments.length; n < l; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }, l.apply(this, arguments);
    },
    a = this && this.__awaiter || function (e, t, n, l) {
      return new (n || (n = Promise))(function (a, i) {
        function o(e) {
          try {
            c(l.next(e));
          } catch (e) {
            i(e);
          }
        }
        function r(e) {
          try {
            c(l.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(o, r);
        }
        c((l = l.apply(e, t || [])).next());
      });
    },
    i = this && this.__generator || function (e, t) {
      var n,
        l,
        a,
        i = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: []
        },
        o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
      return o.next = r(0), o.throw = r(1), o.return = r(2), "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function r(r) {
        return function (c) {
          return function (r) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, r[0] && (i = 0)), i;) try {
              if (n = 1, l && (a = 2 & r[0] ? l.return : r[0] ? l.throw || ((a = l.return) && a.call(l), 0) : l.next) && !(a = a.call(l, r[1])).done) return a;
              switch (l = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                case 0:
                case 1:
                  a = r;
                  break;
                case 4:
                  return i.label++, {
                    value: r[1],
                    done: !1
                  };
                case 5:
                  i.label++, l = r[1], r = [0];
                  continue;
                case 7:
                  r = i.ops.pop(), i.trys.pop();
                  continue;
                default:
                  if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                    i = 0;
                    continue;
                  }
                  if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                    i.label = r[1];
                    break;
                  }
                  if (6 === r[0] && i.label < a[1]) {
                    i.label = a[1], a = r;
                    break;
                  }
                  if (a && i.label < a[2]) {
                    i.label = a[2], i.ops.push(r);
                    break;
                  }
                  a[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              r = t.call(e, i);
            } catch (e) {
              r = [6, e], l = 0;
            } finally {
              n = a = 0;
            }
            if (5 & r[0]) throw r[1];
            return {
              value: r[0] ? r[1] : void 0,
              done: !0
            };
          }([r, c]);
        };
      }
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Uploader = void 0;
  var o = n(12470),
    r = n(2543),
    c = function () {
      function e(e, t) {
        this.handler = {
          start: [],
          progress: [],
          end: []
        }, this.options = l({
          limit: 1,
          autoUpload: !0
        }, t), this.uploadServer = e, this.el = this.createInput();
      }
      return e.prototype.createInput = function () {
        if ("undefined" == typeof document) return {};
        Array.from(document.querySelectorAll(".uploader-form-input")).forEach(function (e) {
          e && document.body.removeChild(e);
        });
        var e = document.createElement("input");
        return e.className = "uploader-form-input", e.type = "file", e.style.display = "block", e.style.opacity = "0", e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", e.style.overflow = "hidden", e.multiple = this.options.limit > 1, this.options.accept && (e.accept = this.options.accept), e;
      }, e.prototype.uploadFiles = function (e) {
        return a(this, void 0, void 0, function () {
          var t,
            n,
            l = this;
          return i(this, function (o) {
            switch (o.label) {
              case 0:
                return t = e.map(function (e) {
                  return {
                    file: e
                  };
                }), n = t.map(function (e) {
                  return {
                    url: "",
                    status: "pending",
                    idx: "uploader-".concat((0, r.uniqueId)())
                  };
                }), this.handler.start.map(function (e) {
                  return e(n);
                }), [4, u(t.map(function (e, t) {
                  return a(l, void 0, void 0, function () {
                    var l;
                    return i(this, function (a) {
                      switch (a.label) {
                        case 0:
                          return a.trys.push([0, 2, 3, 4]), [4, this.uploadFile(e)];
                        case 1:
                          return l = a.sent(), n[t].url = l, n[t].status = "done", [3, 4];
                        case 2:
                          return a.sent(), n[t].status = "error", [3, 4];
                        case 3:
                          return this.handler.progress.map(function (e) {
                            return e(n);
                          }), [7];
                        case 4:
                          return [2];
                      }
                    });
                  });
                }))];
              case 1:
                return o.sent(), this.handler.end.map(function (e) {
                  return e(n);
                }), [2];
            }
          });
        });
      }, e.prototype.uploadFile = function (e) {
        return a(this, void 0, void 0, function () {
          return i(this, function (t) {
            return [2, this.uploadServer(e.file)];
          });
        });
      }, e.prototype.checkFile = function (e) {
        var t = this.checkTypes(e);
        if (t) throw new Error(t);
        var n = this.checkSize(e);
        if (n) throw new Error(n);
      }, e.prototype.checkTypes = function (e) {
        var t = this.options.accept;
        if (t) {
          var n = "";
          -1 !== t.indexOf("image") ? n = "image" : -1 !== t.indexOf("video") && (n = "video");
          for (var l = 0, a = e; l < a.length; l++) if (0 !== a[l].type.indexOf(n)) return (0, o.__)("File types are not allowed for upload. Please choose a valid file format.", "mrm");
        }
        return null;
      }, e.prototype.checkSize = function (e) {
        for (var t = this.options, n = 0, l = e; n < l.length; n++) {
          var a = l[n];
          if (t.minSize && a.size < t.minSize) return (0, o.__)("Minimum file size is ".concat(t.minSize, "."), "mrm");
          if (t.maxSize && a.size > t.maxSize) return (0, o.__)("Maximum file size is ".concat(t.maxSize, "."), "mrm");
        }
        return null;
      }, e.prototype.chooseFile = function () {
        var e = this;
        return new Promise(function (t) {
          var n = e.el;
          document.body.appendChild(n), n.click(), n.onchange = function (l) {
            return a(e, void 0, void 0, function () {
              var e;
              return i(this, function (a) {
                return e = l.target.files || [], 0 === (e = Array.prototype.slice.call(e)).length || (this.checkFile(e), this.options.autoUpload && this.uploadFiles(e), n.onchange = null, n.parentNode && n.parentNode.removeChild(n), t(e)), [2];
              });
            });
          };
        });
      }, e.prototype.on = function (e, t) {
        this.handler[e].push(t);
      }, e.prototype.off = function (e, t) {
        var n = this.handler[e];
        this.handler[e] = n.filter(function (e) {
          return e !== t;
        });
      }, e;
    }();
  function u(e) {
    var t = this,
      n = [],
      l = 0;
    return new Promise(function (o) {
      e.forEach(function (r) {
        return a(t, void 0, void 0, function () {
          var t, a;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return i.trys.push([0, 2, 3, 4]), [4, r];
              case 1:
                return t = i.sent(), n.push(t), [3, 4];
              case 2:
                return a = i.sent(), n.push(a), [3, 4];
              case 3:
                return ++l === e.length && o(!0), [7];
              case 4:
                return [2];
            }
          });
        });
      });
    });
  }
  t.Uploader = c;
});
