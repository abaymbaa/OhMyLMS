/*! For license information please see video-player.js.LICENSE.txt */
(() => {
  function e() {
    var n,
      o,
      r = "function" == typeof Symbol ? Symbol : {},
      i = r.iterator || "@@iterator",
      a = r.toStringTag || "@@toStringTag";
    function s(e, r, i, a) {
      var s = r && r.prototype instanceof c ? r : c,
        u = Object.create(s.prototype);
      return t(u, "_invoke", function (e, t, r) {
        var i,
          a,
          s,
          c = 0,
          u = r || [],
          d = !1,
          h = {
            p: 0,
            n: 0,
            v: n,
            a: f,
            f: f.bind(n, 4),
            d: function (e, t) {
              return i = e, a = 0, s = n, h.n = t, l;
            }
          };
        function f(e, t) {
          for (a = e, s = t, o = 0; !d && c && !r && o < u.length; o++) {
            var r,
              i = u[o],
              f = h.p,
              p = i[2];
            e > 3 ? (r = p === t) && (s = i[(a = i[4]) ? 5 : (a = 3, 3)], i[4] = i[5] = n) : i[0] <= f && ((r = e < 2 && f < i[1]) ? (a = 0, h.v = t, h.n = i[1]) : f < p && (r = e < 3 || i[0] > t || t > p) && (i[4] = e, i[5] = t, h.n = p, a = 0));
          }
          if (r || e > 1) return l;
          throw d = !0, t;
        }
        return function (r, u, p) {
          if (c > 1) throw TypeError("Generator is already running");
          for (d && 1 === u && f(u, p), a = u, s = p; (o = a < 2 ? n : s) || !d;) {
            i || (a ? a < 3 ? (a > 1 && (h.n = -1), f(a, s)) : h.n = s : h.v = s);
            try {
              if (c = 2, i) {
                if (a || (r = "next"), o = i[r]) {
                  if (!(o = o.call(i, s))) throw TypeError("iterator result is not an object");
                  if (!o.done) return o;
                  s = o.value, a < 2 && (a = 0);
                } else 1 === a && (o = i.return) && o.call(i), a < 2 && (s = TypeError("The iterator does not provide a '" + r + "' method"), a = 1);
                i = n;
              } else if ((o = (d = h.n < 0) ? s : e.call(t, h)) !== l) break;
            } catch (e) {
              i = n, a = 1, s = e;
            } finally {
              c = 1;
            }
          }
          return {
            value: o,
            done: d
          };
        };
      }(e, i, a), !0), u;
    }
    var l = {};
    function c() {}
    function u() {}
    function d() {}
    o = Object.getPrototypeOf;
    var h = [][i] ? o(o([][i]())) : (t(o = {}, i, function () {
        return this;
      }), o),
      f = d.prototype = c.prototype = Object.create(h);
    function p(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, t(e, a, "GeneratorFunction")), e.prototype = Object.create(f), e;
    }
    return u.prototype = d, t(f, "constructor", d), t(d, "constructor", u), u.displayName = "GeneratorFunction", t(d, a, "GeneratorFunction"), t(f), t(f, a, "Generator"), t(f, i, function () {
      return this;
    }), t(f, "toString", function () {
      return "[object Generator]";
    }), (e = function () {
      return {
        w: s,
        m: p
      };
    })();
  }
  function t(e, n, o, r) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    t = function (e, n, o, r) {
      function a(n, o) {
        t(e, n, function (e) {
          return this._invoke(n, o, e);
        });
      }
      n ? i ? i(e, n, {
        value: o,
        enumerable: !r,
        configurable: !r,
        writable: !r
      }) : e[n] = o : (a("next", 0), a("throw", 1), a("return", 2));
    }, t(e, n, o, r);
  }
  function n(e, t, n, o, r, i, a) {
    try {
      var s = e[i](a),
        l = s.value;
    } catch (e) {
      return void n(e);
    }
    s.done ? t(l) : Promise.resolve(l).then(o, r);
  }
  function o(e) {
    return function () {
      var t = this,
        o = arguments;
      return new Promise(function (r, i) {
        var a = e.apply(t, o);
        function s(e) {
          n(a, r, i, s, l, "next", e);
        }
        function l(e) {
          n(a, r, i, s, l, "throw", e);
        }
        s(void 0);
      });
    };
  }
  function r(e) {
    return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, r(e);
  }
  function i(e, t, n) {
    return t = c(t), function (e, t) {
      if (t && ("object" == r(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e);
    }(e, a() ? Reflect.construct(t, n || [], c(e).constructor) : t.apply(e, n));
  }
  function a() {
    try {
      var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {}
    return (a = function () {
      return !!e;
    })();
  }
  function s(e, t, n, o) {
    var r = l(c(1 & o ? e.prototype : e), t, n);
    return 2 & o && "function" == typeof r ? function (e) {
      return r.apply(n, e);
    } : r;
  }
  function l() {
    return l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, n) {
      var o = function (e, t) {
        for (; !{}.hasOwnProperty.call(e, t) && null !== (e = c(e)););
        return e;
      }(e, t);
      if (o) {
        var r = Object.getOwnPropertyDescriptor(o, t);
        return r.get ? r.get.call(arguments.length < 3 ? e : n) : r.value;
      }
    }, l.apply(null, arguments);
  }
  function c(e) {
    return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, c(e);
  }
  function u(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(e, "prototype", {
      writable: !1
    }), t && d(e, t);
  }
  function d(e, t) {
    return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, d(e, t);
  }
  function h(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function f(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, m(o.key), o);
    }
  }
  function p(e, t, n) {
    return t && f(e.prototype, t), n && f(e, n), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function m(e) {
    var t = function (e) {
      if ("object" != r(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != r(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == r(t) ? t : t + "";
  }
  !function (t) {
    "use strict";

    var n = function () {
        return p(function e(t, n) {
          h(this, e), this.container = t, this.config = n, this.player = null, this.isReady = !1, this.isPaused = !0;
        }, [{
          key: "init",
          value: function () {
            throw new Error("init() must be implemented by subclass");
          }
        }, {
          key: "play",
          value: function () {
            throw new Error("play() must be implemented by subclass");
          }
        }, {
          key: "pause",
          value: function () {
            throw new Error("pause() must be implemented by subclass");
          }
        }, {
          key: "setVolume",
          value: function (e) {
            throw new Error("setVolume() must be implemented by subclass");
          }
        }, {
          key: "setPlaybackRate",
          value: function (e) {
            throw new Error("setPlaybackRate() must be implemented by subclass");
          }
        }, {
          key: "getCurrentTime",
          value: function () {
            throw new Error("getCurrentTime() must be implemented by subclass");
          }
        }, {
          key: "getDuration",
          value: function () {
            throw new Error("getDuration() must be implemented by subclass");
          }
        }, {
          key: "seekTo",
          value: function (e) {
            throw new Error("seekTo() must be implemented by subclass");
          }
        }, {
          key: "destroy",
          value: function () {
            this.player && (this.player = null);
          }
        }]);
      }(),
      a = function (e) {
        function t(e, n) {
          var o;
          return h(this, t), (o = i(this, t, [e, n])).videoId = o.extractVideoId(n.url), o.hasPlayed = !1, o;
        }
        return u(t, e), p(t, [{
          key: "extractVideoId",
          value: function (e) {
            var t = e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
            return t && 11 === t[2].length ? t[2] : null;
          }
        }, {
          key: "init",
          value: function () {
            var e = this;
            return new Promise(function (t, n) {
              if (e.videoId) {
                if ("object" === r(window.YT) && "function" == typeof window.YT.Player) e.ready(t, n);else {
                  var o = window.onYouTubeIframeAPIReady;
                  if (window.onYouTubeIframeAPIReady = function () {
                    "function" == typeof o && o(), e.ready(t, n);
                  }, !document.getElementById("youtube-iframe-api")) {
                    var i = document.createElement("script");
                    i.id = "youtube-iframe-api", i.src = "https://www.youtube.com/iframe_api", i.async = !0;
                    var a = document.getElementsByTagName("script")[0];
                    a.parentNode.insertBefore(i, a);
                  }
                }
              } else n(new Error("Invalid YouTube URL"));
            });
          }
        }, {
          key: "ready",
          value: function (e, t) {
            var n = this,
              o = "youtube-".concat(Date.now()),
              r = document.createElement("div");
            r.id = o, this.container.innerHTML = "", this.container.appendChild(r);
            var i = {
              autoplay: this.config.autoplay ? 1 : 0,
              controls: 0,
              disablekb: 1,
              playsinline: 1,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
              enablejsapi: 1,
              origin: window.location.origin,
              cc_load_policy: 0,
              widget_referrer: window.location.href
            };
            this.config.loop && (i.loop = 1, i.playlist = this.videoId), this.player = new window.YT.Player(o, {
              videoId: this.videoId,
              playerVars: i,
              events: {
                onReady: function (t) {
                  return n.onPlayerReady(t, e);
                },
                onStateChange: function (e) {
                  return n.onPlayerStateChange(e);
                },
                onError: function (e) {
                  return n.onPlayerError(e, t);
                }
              }
            });
          }
        }, {
          key: "onPlayerReady",
          value: function (e, t) {
            var n = this,
              o = e.target;
            this.ytPlayer = o, this.isReady = !0, this.isPaused = !this.config.autoplay;
            var r = o.getIframe();
            r && (r.classList.add("player-ready"), r.style.pointerEvents = "auto", r.style.touchAction = "auto"), this.bufferingTimer = setInterval(function () {
              var e = o.getVideoLoadedFraction();
              e > 0 && n.config.onProgress && n.config.onProgress(e), 1 === e && clearInterval(n.bufferingTimer);
            }, 200), this.config.onReady && this.config.onReady(e), t(this);
          }
        }, {
          key: "play",
          value: function () {
            this.ytPlayer && this.isReady && (this.hasPlayed || (this.hasPlayed = !0), this.isPaused && (this.isPaused = !1, this.config.onPlay && this.config.onPlay()), this.ytPlayer.playVideo());
          }
        }, {
          key: "pause",
          value: function () {
            this.ytPlayer && this.isReady && (this.isPaused || (this.isPaused = !0, this.config.onPause && this.config.onPause()), this.ytPlayer.pauseVideo());
          }
        }, {
          key: "setVolume",
          value: function (e) {
            this.ytPlayer && this.isReady && this.ytPlayer.setVolume(100 * e);
          }
        }, {
          key: "setPlaybackRate",
          value: function (e) {
            this.ytPlayer && this.isReady && this.ytPlayer.setPlaybackRate(e);
          }
        }, {
          key: "getCurrentTime",
          value: function () {
            return this.ytPlayer && this.isReady ? this.ytPlayer.getCurrentTime() : 0;
          }
        }, {
          key: "getDuration",
          value: function () {
            return this.ytPlayer && this.isReady ? this.ytPlayer.getDuration() : 0;
          }
        }, {
          key: "seekTo",
          value: function (e) {
            this.ytPlayer && this.isReady && (this.isPaused && !this.hasPlayed && this.ytPlayer.mute(), this.ytPlayer.seekTo(e));
          }
        }, {
          key: "onPlayerStateChange",
          value: function (e) {
            if (this.ytPlayer) {
              switch (e.data) {
                case -1:
                  break;
                case 0:
                  this.isPaused = !0, this.config.onEnded && this.config.onEnded(), this.config.onPause && this.config.onPause();
                  break;
                case 1:
                  this.config.autoplay || !this.isPaused || this.hasPlayed ? (this.isPaused && (this.isPaused = !1, this.config.onPlay && this.config.onPlay()), this.hasPlayed || (this.hasPlayed = !0)) : this.pause();
                  break;
                case 2:
                  !this.config.muted && this.ytPlayer.isMuted() && this.ytPlayer.unMute(), this.isPaused || (this.isPaused = !0, this.config.onPause && this.config.onPause());
              }
              this.config.onStateChange && this.config.onStateChange(e);
            }
          }
        }, {
          key: "onPlayerError",
          value: function (e, t) {
            var n = e.data,
              o = {
                code: n,
                message: {
                  2: "Invalid parameter value",
                  5: "HTML5 player error",
                  100: "Video not found",
                  101: "Video not allowed in embedded players",
                  150: "Video not allowed in embedded players"
                }[n] || "Unknown error occurred"
              };
            console.error("YouTube player error:", o), t && t(o);
          }
        }, {
          key: "destroy",
          value: function () {
            this.bufferingTimer && clearInterval(this.bufferingTimer), this.player && this.player.destroy && this.player.destroy(), s(t, "destroy", this, 3)([]);
          }
        }]);
      }(n),
      l = function (t) {
        function n(e, t) {
          var o;
          return h(this, n), (o = i(this, n, [e, t])).videoId = o.extractVideoId(t.url), o.cachedCurrentTime = 0, o.cachedDuration = 0, o;
        }
        return u(n, t), p(n, [{
          key: "extractVideoId",
          value: function (e) {
            var t = e.match(/vimeo\.com\/(?:video\/)?(\d+)/);
            return t ? t[1] : null;
          }
        }, {
          key: "init",
          value: function () {
            var e = this;
            return new Promise(function (t, n) {
              if (e.videoId) {
                if ("undefined" == typeof Vimeo || void 0 === Vimeo.Player) {
                  var o = document.createElement("script");
                  o.src = "https://player.vimeo.com/api/player.js", o.onload = function () {
                    e.createPlayer(t, n);
                  }, o.onerror = n, document.head.appendChild(o);
                } else e.createPlayer(t, n);
              } else n(new Error("Invalid Vimeo URL"));
            });
          }
        }, {
          key: "createPlayer",
          value: function (t, n) {
            var r = this;
            try {
              var i = {
                  id: this.videoId,
                  autoplay: this.config.autoplay,
                  loop: this.config.loop,
                  controls: !1,
                  muted: this.config.muted,
                  title: !1,
                  byline: !1,
                  portrait: !1,
                  playsinline: !0,
                  badge: !1,
                  transparent: !1,
                  color: "ffffff"
                },
                a = document.createElement("div");
              this.container.appendChild(a), this.player = new Vimeo.Player(a, i), this.player.ready().then(o(e().m(function n() {
                return e().w(function (n) {
                  for (;;) switch (n.p = n.n) {
                    case 0:
                      return r.isReady = !0, n.p = 1, n.n = 2, r.player.getPaused();
                    case 2:
                      return r.isPaused = n.v, n.n = 3, r.player.getDuration();
                    case 3:
                      return r.cachedDuration = n.v, n.n = 4, r.player.getCurrentTime();
                    case 4:
                      r.cachedCurrentTime = n.v, n.n = 6;
                      break;
                    case 5:
                      n.p = 5, n.v, r.isPaused = !0;
                    case 6:
                      r.player.on("play", function () {
                        r.isPaused = !1, r.config.onPlay && r.config.onPlay();
                      }), r.player.on("pause", function () {
                        r.isPaused = !0, r.config.onPause && r.config.onPause();
                      }), r.player.on("ended", function () {
                        r.isPaused = !0, r.config.onEnded && r.config.onEnded();
                      }), r.player.on("timeupdate", function () {
                        var t = o(e().m(function t(n) {
                          return e().w(function (e) {
                            for (;;) switch (e.p = e.n) {
                              case 0:
                                return r.cachedCurrentTime = n.seconds, r.cachedDuration = n.duration, e.p = 1, e.n = 2, r.player.getPaused();
                              case 2:
                                r.isPaused = e.v, e.n = 4;
                                break;
                              case 3:
                                e.p = 3, e.v;
                              case 4:
                                return e.a(2);
                            }
                          }, t, null, [[1, 3]]);
                        }));
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      }()), r.config.onReady && r.config.onReady(), t(r);
                    case 7:
                      return n.a(2);
                  }
                }, n, null, [[1, 5]]);
              }))).catch(n);
            } catch (e) {
              n(e);
            }
          }
        }, {
          key: "play",
          value: function () {
            this.player && this.isReady && (this.isPaused = !1, this.player.play());
          }
        }, {
          key: "pause",
          value: function () {
            this.player && this.isReady && (this.isPaused = !0, this.player.pause());
          }
        }, {
          key: "setVolume",
          value: (l = o(e().m(function t(n) {
            return e().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!this.player || !this.isReady) {
                    e.n = 1;
                    break;
                  }
                  return e.n = 1, this.player.setVolume(n);
                case 1:
                  return e.a(2);
              }
            }, t, this);
          })), function (e) {
            return l.apply(this, arguments);
          })
        }, {
          key: "setPlaybackRate",
          value: (a = o(e().m(function t(n) {
            return e().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!this.player || !this.isReady) {
                    e.n = 1;
                    break;
                  }
                  return e.n = 1, this.player.setPlaybackRate(n);
                case 1:
                  return e.a(2);
              }
            }, t, this);
          })), function (e) {
            return a.apply(this, arguments);
          })
        }, {
          key: "getCurrentTime",
          value: function () {
            return this.isReady ? this.cachedCurrentTime : 0;
          }
        }, {
          key: "getDuration",
          value: function () {
            return this.isReady ? this.cachedDuration : 0;
          }
        }, {
          key: "seekTo",
          value: (r = o(e().m(function t(n) {
            var o, r;
            return e().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!this.player || !this.isReady) {
                    e.n = 2;
                    break;
                  }
                  return o = this.getDuration(), r = Math.max(0, Math.min(o, n)), e.n = 1, this.player.setCurrentTime(r);
                case 1:
                  this.cachedCurrentTime = r;
                case 2:
                  return e.a(2);
              }
            }, t, this);
          })), function (e) {
            return r.apply(this, arguments);
          })
        }, {
          key: "destroy",
          value: function () {
            this.player && this.player.destroy && this.player.destroy(), s(n, "destroy", this, 3)([]);
          }
        }]);
        var r, a, l;
      }(n),
      c = function (e) {
        function t(e, n) {
          var o;
          return h(this, t), (o = i(this, t, [e, n])).playPromise = null, o;
        }
        return u(t, e), p(t, [{
          key: "init",
          value: function () {
            var e = this;
            return new Promise(function (t, n) {
              try {
                var o = document.createElement("video");
                if (o.className = "omlms-html5-video", o.controls = e.config.showControls, o.autoplay = e.config.autoplay, o.loop = e.config.loop, o.muted = e.config.muted, o.playsInline = !0, o.preload = "metadata", e.config.url.startsWith(window.location.origin) || e.config.url.startsWith("/") || !e.config.url.startsWith("http") || (o.crossOrigin = "anonymous"), e.config.poster && (o.poster = e.config.poster), e.config.url.toLowerCase().includes(".mov")) o.src = e.config.url;else {
                  var r = document.createElement("source");
                  r.src = e.config.url, r.type = e.getMimeType(e.config.url), o.appendChild(r);
                }
                e.container.innerHTML = "", e.container.appendChild(o), e.player = o;
                var i = !1;
                o.addEventListener("loadedmetadata", function () {
                  i || (e.isReady = !0, e.isPaused = !e.config.autoplay, e.config.onReady && e.config.onReady(), i = !0, t(e));
                }), o.addEventListener("loadeddata", function () {
                  !i && o.readyState >= 2 && (e.isReady = !0, e.isPaused = !e.config.autoplay, e.config.onReady && e.config.onReady(), i = !0, t(e));
                }), o.addEventListener("play", function () {
                  e.isPaused = !1, e.config.onPlay && e.config.onPlay();
                }), o.addEventListener("pause", function () {
                  e.isPaused = !0, e.config.onPause && e.config.onPause();
                }), o.addEventListener("ended", function () {
                  e.isPaused = !0, e.config.onEnded && e.config.onEnded();
                }), o.addEventListener("timeupdate", function () {
                  e.config.onTimeUpdate && e.config.onTimeUpdate();
                }), o.addEventListener("durationchange", function () {
                  o.duration && o.duration > 0 && e.config.onReady && e.config.onReady();
                }), o.addEventListener("error", function (t) {
                  if (!i) {
                    var r = e.config.url.toLowerCase().includes(".mov"),
                      a = o.error ? o.error.message : "Unknown error";
                    r && (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? console.warn("MOV file error in Safari. The codec inside the MOV container may not be supported.") : console.error("MOV format is not supported in " + navigator.userAgent.split(" ").pop() + ". MOV files work best in Safari. Please convert to MP4 for universal browser support.")), i = !0, n(new Error("Failed to load video: " + a));
                  }
                }), setTimeout(function () {
                  i || (e.isReady = !0, e.isPaused = !e.config.autoplay, e.config.onReady && e.config.onReady(), i = !0, t(e));
                }, 2e3), o.load();
              } catch (e) {
                n(e);
              }
            });
          }
        }, {
          key: "getMimeType",
          value: function (e) {
            return {
              mp4: "video/mp4",
              webm: "video/webm",
              ogg: "video/ogg",
              ogv: "video/ogg",
              mov: "video/quicktime",
              m4v: "video/mp4",
              avi: "video/x-msvideo",
              flv: "video/x-flv",
              mkv: "video/x-matroska"
            }[e.split(".").pop().toLowerCase().split("?")[0]] || "video/mp4";
          }
        }, {
          key: "play",
          value: function () {
            var e = this;
            this.player && this.isReady && (this.playPromise = this.player.play(), void 0 !== this.playPromise && this.playPromise.then(function () {
              e.playPromise = null;
            }).catch(function (t) {
              e.playPromise = null, "AbortError" !== t.name && console.error("Play failed:", t);
            }));
          }
        }, {
          key: "pause",
          value: function () {
            var e = this;
            this.player && this.isReady && (null !== this.playPromise ? this.playPromise.then(function () {
              e.player.pause();
            }).catch(function () {
              e.player.pause();
            }) : this.player.pause());
          }
        }, {
          key: "setVolume",
          value: function (e) {
            this.player && this.isReady && (this.player.volume = e);
          }
        }, {
          key: "setPlaybackRate",
          value: function (e) {
            this.player && this.isReady && (this.player.playbackRate = e);
          }
        }, {
          key: "getCurrentTime",
          value: function () {
            if (this.player && this.isReady) {
              var e = this.player.currentTime;
              return e && isFinite(e) ? e : 0;
            }
            return 0;
          }
        }, {
          key: "getDuration",
          value: function () {
            if (this.player && this.isReady) {
              var e = this.player.duration;
              return e && isFinite(e) ? e : 0;
            }
            return 0;
          }
        }, {
          key: "seekTo",
          value: function (e) {
            this.player && this.isReady && (this.player.currentTime = e);
          }
        }, {
          key: "destroy",
          value: function () {
            this.player && (this.player.pause(), this.player.src = "", this.player.load(), this.player.remove()), s(t, "destroy", this, 3)([]);
          }
        }]);
      }(n),
      d = function () {
        return p(function e(n) {
          var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          h(this, e), this.element = t(n), this.options = t.extend({
            url: "",
            autoplay: !1,
            loop: !1,
            muted: !1,
            showControls: !1,
            customControls: !0,
            poster: null,
            onReady: null,
            onPlay: null,
            onPause: null,
            onEnded: null,
            onStateChange: null,
            logoUrl: ""
          }, o), this.platformHandler = null, this.controlsVisible = !0, this.volume = 1, this.playbackRate = 1, this.isFullscreen = !1, this.durationKnown = !1, this.hasEnded = !1, this.isMobile = this.detectMobile(), this.init();
        }, [{
          key: "detectMobile",
          value: function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform);
          }
        }, {
          key: "init",
          value: function () {
            this.detectPlatform(), this.createPlayerContainer(), this.addBrandingBlockers(), this.options.customControls && !this.options.showControls && (this.createCustomControls(), this.options.logoUrl || this.createBigPlayButton()), this.createLogoOverlay(), this.setupKeyboardControls(), this.initPlatformHandler();
          }
        }, {
          key: "createLogoOverlay",
          value: function () {
            if (this.options.logoUrl) {
              var e = t("<img />", {
                  src: this.options.logoUrl,
                  alt: "",
                  class: "omlms-player-logo"
                }).css({
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }),
                n = this;
              e.on("click touchend", function (t) {
                t.stopPropagation(), t.preventDefault(), n.play(), e.hide(), n.clickBlocker && n.clickBlocker.hide();
              }), this.element.append(e), this.logoOverlay = e;
            }
          }
        }, {
          key: "detectPlatform",
          value: function () {
            var e = this.options.url;
            e.includes("youtube.com") || e.includes("youtu.be") ? this.platform = "youtube" : e.includes("vimeo.com") ? this.platform = "vimeo" : this.platform = "html5";
          }
        }, {
          key: "createPlayerContainer",
          value: function () {
            this.playerContainer = t('<div class="omlms-video-player-container"></div>'), this.element.append(this.playerContainer);
            var e = this;
            this.playerContainer.on("click touchend", function (n) {
              t(n.target).closest(".omlms-custom-controls").length > 0 || ("touchend" === n.type && (n.preventDefault(), e.showControls()), e.platformHandler && (e.platformHandler.isPaused ? e.play() : e.pause()));
            });
          }
        }, {
          key: "addBrandingBlockers",
          value: function () {
            if ("youtube" === this.platform || "vimeo" === this.platform) {
              var e = t('\n                    <div class="omlms-video-interaction-blocker"></div>\n                    <div class="omlms-branding-blocker-top"></div>\n                    <div class="omlms-branding-blocker-bottom-right"></div>\n                ');
              this.element.append(e), this.brandingBlockers = e;
              var n = this;
              e.on("click touchend", function (e) {
                "touchend" === e.type && e.preventDefault(), n.platformHandler && n.platformHandler.isPaused ? n.play() : n.platformHandler && n.pause();
              });
            }
          }
        }, {
          key: "createBigPlayButton",
          value: function () {
            var e = this.isMobile ? 70 : 140,
              n = t('\n                <div class="omlms-big-play-button">\n                    <svg width="'.concat(e, '" height="').concat(e, '" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <circle class="play-button-circle" cx="50" cy="50" r="48" stroke-width="4"/>\n                        <path class="play-button-icon" d="M40 30L70 50L40 70V30Z"/>\n                    </svg>\n                </div>\n            '));
            if ("youtube" === this.platform && !this.isMobile) {
              var o = t('<div class="omlms-youtube-click-blocker"></div>');
              this.element.append(o), this.clickBlocker = o;
              var r = this;
              o.on("click touchend", function (e) {
                e.stopPropagation(), e.preventDefault(), r.platformHandler && r.platformHandler.isPaused && (r.play(), r.bigPlayButton && r.bigPlayButton.hide(), r.clickBlocker && r.clickBlocker.hide());
              });
            }
            this.element.append(n), this.bigPlayButton = n;
            var i = this;
            n.on("click touchend", function (e) {
              e.stopPropagation(), e.preventDefault(), i.play(), n.hide(), i.clickBlocker && i.clickBlocker.hide();
            });
          }
        }, {
          key: "createCustomControls",
          value: function () {
            var e = t('                <div class="omlms-custom-controls">\n                    <div class="omlms-controls-progress-container">\n                        <div class="omlms-progress-bar">\n                            <div class="omlms-progress-filled"></div>\n                            <div class="omlms-progress-handle"></div>\n                        </div>\n                        <div class="omlms-time-display">\n                            <span class="omlms-current-time">0:00</span>\n                            <span class="omlms-separator">/</span>\n                            <span class="omlms-duration">--:--</span>\n                        </div>\n                    </div>\n                    <div class="omlms-controls-bottom">\n                        <div class="omlms-controls-left">\n                            <button class="omlms-control-btn omlms-play-pause" aria-label="Play">\n                                <svg class="omlms-play-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                    <path d="M8 5v14l11-7z" fill="currentColor"/>\n                                </svg>\n                                <svg class="omlms-pause-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:none;">\n                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/>\n                                </svg>\n                            </button>\n                            <div class="omlms-volume-control">\n                                <button class="omlms-control-btn omlms-volume-btn" aria-label="Mute">\n                                    <svg class="omlms-volume-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" fill="currentColor"/>\n                                    </svg>\n                                    <svg class="omlms-mute-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:none;">\n                                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" fill="currentColor"/>\n                                    </svg>\n                                </button>\n                                <div class="omlms-volume-slider">\n                                    <div class="omlms-volume-track" role="slider" aria-label="Volume" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" tabindex="0">\n                                        <div class="omlms-volume-fill"></div>\n                                        <div class="omlms-volume-thumb"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="omlms-controls-right">\n                            <div class="omlms-speed-control">\n                                <button class="omlms-control-btn omlms-speed-btn" aria-label="Playback speed">\n                                    <span class="omlms-speed-text">1x</span>\n                                </button>\n                                <div class="omlms-speed-menu">\n                                    <button data-speed="0.5">0.5x</button>\n                                    <button data-speed="0.75">0.75x</button>\n                                    <button data-speed="1" class="active">1x</button>\n                                    <button data-speed="1.25">1.25x</button>\n                                    <button data-speed="1.5">1.5x</button>\n                                    <button data-speed="2">2x</button>\n                                </div>\n                            </div>\n                            <button class="omlms-control-btn omlms-fullscreen-btn" aria-label="Fullscreen">\n                                <svg class="omlms-fullscreen-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="currentColor"/>\n                                </svg>\n                                <svg class="omlms-exit-fullscreen-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:none;">\n                                    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" fill="currentColor"/>\n                                </svg>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            ');
            this.element.append(e), this.controls = e, this.updateVolumeFill(100), this.attachControlEvents();
          }
        }, {
          key: "attachControlEvents",
          value: function () {
            var n = this;
            this.controls.find(".omlms-play-pause").on("click touchend", function (e) {
              "touchend" === e.type && e.preventDefault(), n.platformHandler.isPaused ? n.play() : n.pause();
            }), this.controls.find(".omlms-volume-btn").on("click touchend", function (e) {
              "touchend" === e.type && e.preventDefault(), n.volume > 0 ? (n.previousVolume = n.volume, n.setVolume(0)) : n.setVolume(n.previousVolume || 1);
            });
            var r = this.controls.find(".omlms-volume-track"),
              i = !1,
              a = function (e) {
                var t,
                  o = r[0].getBoundingClientRect();
                if (e.type && -1 !== e.type.indexOf("touch")) {
                  var i = e.touches ? e.touches[0] : e.changedTouches ? e.changedTouches[0] : null;
                  if (!i) return;
                  t = i.clientX;
                } else t = e.clientX;
                var a = Math.max(0, Math.min(1, (t - o.left) / o.width));
                n.setVolume(a), n.updateVolumeFill(100 * a);
              };
            r.on("mousedown", function (e) {
              e.preventDefault(), i = !0, t(this).addClass("is-dragging"), a(e.originalEvent || e);
            }), r.on("touchstart", function (e) {
              e.preventDefault(), i = !0, t(this).addClass("is-dragging"), a(e.originalEvent || e);
            }), t(document).on("mousemove", function (e) {
              i && (e.preventDefault(), a(e.originalEvent || e));
            }), t(document).on("touchmove", function (e) {
              i && (e.preventDefault(), a(e.originalEvent || e));
            }), t(document).on("mouseup", function () {
              i && (i = !1, r.removeClass("is-dragging"));
            }), t(document).on("touchend touchcancel", function () {
              i && (i = !1, r.removeClass("is-dragging"));
            }), r.on("keydown", function (e) {
              switch (e.key) {
                case "ArrowRight":
                case "ArrowUp":
                  e.preventDefault(), n.setVolume(Math.min(1, n.volume + .05));
                  break;
                case "ArrowLeft":
                case "ArrowDown":
                  e.preventDefault(), n.setVolume(Math.max(0, n.volume - .05));
                  break;
                case "Home":
                  e.preventDefault(), n.setVolume(0);
                  break;
                case "End":
                  e.preventDefault(), n.setVolume(1);
              }
            }), this.controls.find(".omlms-speed-btn").on("click touchend", function (e) {
              "touchend" === e.type && e.preventDefault(), n.controls.find(".omlms-speed-menu").toggleClass("active");
            }), this.controls.find(".omlms-speed-menu button").on("click touchend", function (e) {
              e.stopPropagation(), "touchend" === e.type && e.preventDefault();
              var o = parseFloat(t(this).data("speed"));
              n.setPlaybackRate(o), n.controls.find(".omlms-speed-menu button").removeClass("active"), t(this).addClass("active"), n.controls.find(".omlms-speed-text").text(o + "x"), n.controls.find(".omlms-speed-menu").removeClass("active");
            });
            var s = !1,
              l = 0,
              c = null,
              u = 0,
              d = 0,
              h = 0,
              f = n.controls.find(".omlms-progress-bar"),
              p = f.find(".omlms-progress-filled")[0],
              m = f.find(".omlms-progress-handle")[0],
              y = n.controls.find(".omlms-current-time"),
              v = function (e) {
                var t;
                t = e.type && -1 !== e.type.indexOf("touch") ? (e.touches ? e.touches[0] : e.changedTouches[0]).clientX : e.pageX || e.clientX;
                var o = Math.max(0, Math.min(1, (t - d) / h));
                if (u > 0) {
                  var r = o * u;
                  c = r, function (e, t) {
                    var o = 100 * e + "%";
                    p.style.width = o, m.style.left = o, m.style.opacity = "1", m.style.transform = "translateY(-50%) translateX(-50%) scale(1.2)", y[0].textContent = n.formatTime(t);
                  }(o, r);
                  var i = Date.now();
                  i - l > 150 && (l = i, n.seekTo(r));
                }
              };
            f.on("mousedown", function () {
              var t = o(e().m(function t(o) {
                return e().w(function (e) {
                  for (;;) switch (e.n) {
                    case 0:
                      u = n.platformHandler.getDuration(), d = f.offset().left, h = f.width(), s = !0, f.addClass("is-seeking"), v(o), o.preventDefault();
                    case 1:
                      return e.a(2);
                  }
                }, t);
              }));
              return function (e) {
                return t.apply(this, arguments);
              };
            }()), f.on("touchstart", function () {
              var t = o(e().m(function t(o) {
                return e().w(function (e) {
                  for (;;) switch (e.n) {
                    case 0:
                      u = n.platformHandler.getDuration(), d = f.offset().left, h = f.width(), s = !0, f.addClass("is-seeking"), v(o.originalEvent), o.preventDefault();
                    case 1:
                      return e.a(2);
                  }
                }, t);
              }));
              return function (e) {
                return t.apply(this, arguments);
              };
            }()), document.addEventListener("mousemove", function (e) {
              s && (v(e), e.preventDefault(), e.stopPropagation());
            }), document.addEventListener("touchmove", function (e) {
              s && (v(e), e.preventDefault(), e.stopPropagation());
            }, {
              passive: !1
            });
            var g = function () {
              var t = o(e().m(function t() {
                return e().w(function (e) {
                  for (;;) switch (e.n) {
                    case 0:
                      if (!s) {
                        e.n = 2;
                        break;
                      }
                      if (s = !1, f.removeClass("is-seeking"), null === c) {
                        e.n = 2;
                        break;
                      }
                      return e.n = 1, n.seekTo(c);
                    case 1:
                      c = null;
                    case 2:
                      return e.a(2);
                  }
                }, t);
              }));
              return function () {
                return t.apply(this, arguments);
              };
            }();
            document.addEventListener("mouseup", g), document.addEventListener("touchend", g), document.addEventListener("touchcancel", g), f.on("click", function () {
              var t = o(e().m(function t(o) {
                return e().w(function (e) {
                  for (;;) switch (e.n) {
                    case 0:
                      if (s) {
                        e.n = 2;
                        break;
                      }
                      if (u = n.platformHandler.getDuration(), d = f.offset().left, h = f.width(), v(o), null === c) {
                        e.n = 2;
                        break;
                      }
                      return e.n = 1, n.seekTo(c);
                    case 1:
                      c = null;
                    case 2:
                      return e.a(2);
                  }
                }, t);
              }));
              return function (e) {
                return t.apply(this, arguments);
              };
            }()), this.controls.find(".omlms-fullscreen-btn").on("click touchend", function (e) {
              "touchend" === e.type && e.preventDefault(), n.toggleFullscreen();
            });
            var w,
              b = function () {
                n.platformHandler && !s && (n.platformHandler.isPaused && n.durationKnown || n.updateProgress()), requestAnimationFrame(b);
              };
            requestAnimationFrame(b);
            var k = function () {
              n.showControls(), clearTimeout(w), n.platformHandler.isPaused || (w = setTimeout(function () {
                n.hideControls();
              }, 3e3));
            };
            this.element.on("mousemove", k), this.element.on("touchstart", k), this.element.on("touchmove", k), this.element.on("pause", function () {
              n.showControls(), clearTimeout(w);
            });
          }
        }, {
          key: "setupKeyboardControls",
          value: function () {
            var e = this;
            this.element.attr("tabindex", "0"), this.element.on("keydown", function (n) {
              if (!t("input, textarea").is(":focus")) {
                var o = n.key,
                  r = n.keyCode || n.which;
                switch ((["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " ", "k", "K", "m", "M", "f", "F"].includes(o) || r >= 48 && r <= 57) && n.preventDefault(), o) {
                  case " ":
                  case "k":
                  case "K":
                    e.platformHandler && (e.platformHandler.isPaused ? e.play() : e.pause());
                    break;
                  case "ArrowUp":
                    e.adjustVolume(.1);
                    break;
                  case "ArrowDown":
                    e.adjustVolume(-.1);
                    break;
                  case "ArrowLeft":
                    e.seekRelative(-5);
                    break;
                  case "ArrowRight":
                    e.seekRelative(5);
                    break;
                  case "m":
                  case "M":
                    e.volume > 0 ? (e.previousVolume = e.volume, e.setVolume(0)) : e.setVolume(e.previousVolume || 1);
                    break;
                  case "f":
                  case "F":
                    e.toggleFullscreen();
                    break;
                  default:
                    if (r >= 48 && r <= 57) {
                      var i = r - 48;
                      e.seekToPercentage(10 * i);
                    }
                }
              }
            }), this.element.on("click", function () {
              t(this).focus();
            });
          }
        }, {
          key: "adjustVolume",
          value: function (e) {
            var t = this.volume,
              n = Math.max(0, Math.min(1, this.volume + e)),
              o = n - t;
            this.setVolume(n), this.showVolumeIndicator(n, o);
          }
        }, {
          key: "seekRelative",
          value: (s = o(e().m(function t(n) {
            var o,
              r,
              i,
              a = this;
            return e().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (this.platformHandler) {
                    e.n = 1;
                    break;
                  }
                  return e.a(2);
                case 1:
                  return o = this.platformHandler.getCurrentTime(), r = this.platformHandler.getDuration(), i = Math.max(0, Math.min(r, o + n)), e.n = 2, this.seekTo(i);
                case 2:
                  this.showSeekIndicator(n), setTimeout(function () {
                    return a.updateProgress();
                  }, 100);
                case 3:
                  return e.a(2);
              }
            }, t, this);
          })), function (e) {
            return s.apply(this, arguments);
          })
        }, {
          key: "seekToPercentage",
          value: (i = o(e().m(function t(n) {
            var o, r;
            return e().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (this.platformHandler) {
                    e.n = 1;
                    break;
                  }
                  return e.a(2);
                case 1:
                  return o = this.platformHandler.getDuration(), r = n / 100 * o, e.n = 2, this.seekTo(r);
                case 2:
                  return e.a(2);
              }
            }, t, this);
          })), function (e) {
            return i.apply(this, arguments);
          })
        }, {
          key: "showVolumeIndicator",
          value: function (e, n) {
            this.element.find(".omlms-volume-indicator").remove();
            var o = Math.round(100 * e),
              r = Math.abs(Math.round(100 * n)),
              i = t('\n                <div class="omlms-volume-indicator">\n                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        '.concat(0 === e ? '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" fill="white"/>' : '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" fill="white"/>', '\n                    </svg>\n                    <div class="omlms-volume-text">\n                        <span class="omlms-volume-current">').concat(o, '%</span>\n                        <span class="omlms-volume-delta">').concat(r, "%</span>\n                    </div>\n                </div>\n            "));
            this.element.append(i), setTimeout(function () {
              i.fadeOut(300, function () {
                t(this).remove();
              });
            }, 1e3);
          }
        }, {
          key: "showSeekIndicator",
          value: function (e) {
            this.element.find(".omlms-seek-indicator").remove();
            var n = Math.abs(e),
              o = e > 0 ? "".concat(n, "s >>") : "<< ".concat(n, "s"),
              r = t('\n                <div class="omlms-seek-indicator">\n                    '.concat(e > 0 ? '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z" fill="white"/>\n                    <path d="M12.5 8v4.7l3.6 2.1-.8 1.2-4.3-2.5V8h1.5z" fill="white"/>\n                </svg>' : '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M20 13c0 4.4-3.6 8-8 8s-8-3.6-8-8h2c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6V3l-5 5 5 5V9c4.4 0 8 3.6 8 8z" fill="white"/>\n                    <path d="M11 8v4.7l3.6 2.1-.8 1.2-4.3-2.5V8H11z" fill="white"/>\n                </svg>', "\n                    <span>").concat(o, "</span>\n                </div>\n            "));
            this.element.append(r), setTimeout(function () {
              r.fadeOut(300, function () {
                t(this).remove();
              });
            }, 800);
          }
        }, {
          key: "updateProgress",
          value: (r = o(e().m(function t() {
            var n, o, r, i, a;
            return e().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (this.platformHandler && this.controls) {
                    e.n = 1;
                    break;
                  }
                  return e.a(2);
                case 1:
                  n = this.platformHandler.getCurrentTime(), (o = this.platformHandler.getDuration()) && o > 0 && isFinite(o) ? (r = n, i = n / o * 100, this.hasEnded ? (r = o, i = 100) : (a = o - n, this.platformHandler.isPaused && a >= 0 && a < .3 && (r = o, i = 100)), this.controls.find(".omlms-current-time").text(this.formatTime(r)), this.controls.find(".omlms-progress-filled").css("width", i + "%"), this.controls.find(".omlms-progress-handle").css("left", i + "%"), this.controls.find(".omlms-duration").text(this.formatTime(o)), this.durationKnown = !0) : (this.controls.find(".omlms-current-time").text(this.formatTime(n || 0)), this.controls.find(".omlms-duration").text("00:00"));
                case 2:
                  return e.a(2);
              }
            }, t, this);
          })), function () {
            return r.apply(this, arguments);
          })
        }, {
          key: "formatTime",
          value: function (e) {
            e = Math.round(e);
            var t = Math.floor(e / 3600),
              n = Math.floor(e % 3600 / 60),
              o = Math.floor(e % 60);
            return t > 0 ? "".concat(t, ":").concat(n.toString().padStart(2, "0"), ":").concat(o.toString().padStart(2, "0")) : "".concat(n, ":").concat(o.toString().padStart(2, "0"));
          }
        }, {
          key: "initPlatformHandler",
          value: function () {
            var e = this,
              t = {
                url: this.options.url,
                autoplay: this.options.autoplay,
                loop: this.options.loop,
                muted: this.options.muted,
                showControls: this.options.showControls && !this.options.customControls,
                poster: this.options.poster,
                onReady: function () {
                  e.updateProgress(), e.options.onReady && e.options.onReady();
                },
                onPlay: function () {
                  e.updatePlayPauseButton(!1), e.bigPlayButton && e.bigPlayButton.hide(), e.logoOverlay && e.logoOverlay.hide(), e.options.onPlay && e.options.onPlay();
                },
                onPause: function () {
                  e.updatePlayPauseButton(!0), e.bigPlayButton && e.bigPlayButton.show(), e.logoOverlay && e.logoOverlay.show(), e.options.onPause && e.options.onPause();
                },
                onEnded: function () {
                  if (e.hasEnded = !0, e.controls) {
                    var t = e.platformHandler.getDuration();
                    "number" == typeof t && t > 0 ? (e.controls.find(".omlms-current-time").text(e.formatTime(t)), e.controls.find(".omlms-progress-filled").css("width", "100%")) : Promise.resolve(t).then(function (t) {
                      t && t > 0 && (e.controls.find(".omlms-current-time").text(e.formatTime(t)), e.controls.find(".omlms-progress-filled").css("width", "100%"));
                    });
                  }
                  e.options.onEnded && e.options.onEnded();
                },
                onStateChange: this.options.onStateChange
              };
            switch (this.platform) {
              case "youtube":
                this.platformHandler = new a(this.playerContainer[0], t);
                break;
              case "vimeo":
                this.platformHandler = new l(this.playerContainer[0], t);
                break;
              default:
                this.platformHandler = new c(this.playerContainer[0], t);
            }
            this.platformHandler.init().then(function () {
              e.bindNativeFullscreenEvents();
            }).catch(function (t) {
              e.handleError(t);
            });
          }
        }, {
          key: "bindNativeFullscreenEvents",
          value: function () {
            var e = this,
              t = this.platformHandler && this.platformHandler.player;
            t && "function" == typeof t.addEventListener && (t.addEventListener("webkitbeginfullscreen", function () {
              e.isFullscreen = !0, e.controls.find(".omlms-fullscreen-icon").hide(), e.controls.find(".omlms-exit-fullscreen-icon").show();
            }), t.addEventListener("webkitendfullscreen", function () {
              e.isFullscreen = !1, e.controls.find(".omlms-fullscreen-icon").show(), e.controls.find(".omlms-exit-fullscreen-icon").hide();
            }));
          }
        }, {
          key: "updatePlayPauseButton",
          value: function (e) {
            this.controls && (e ? (this.controls.find(".omlms-play-icon").show(), this.controls.find(".omlms-pause-icon").hide()) : (this.controls.find(".omlms-play-icon").hide(), this.controls.find(".omlms-pause-icon").show()));
          }
        }, {
          key: "play",
          value: function () {
            this.platformHandler && (this.hasEnded = !1, this.platformHandler.play());
          }
        }, {
          key: "pause",
          value: function () {
            this.platformHandler && this.platformHandler.pause();
          }
        }, {
          key: "setVolume",
          value: function (e) {
            this.volume = Math.max(0, Math.min(1, e)), this.platformHandler && this.platformHandler.setVolume(this.volume), this.controls && (this.updateVolumeFill(100 * this.volume), 0 === this.volume ? (this.controls.find(".omlms-volume-icon").hide(), this.controls.find(".omlms-mute-icon").show()) : (this.controls.find(".omlms-volume-icon").show(), this.controls.find(".omlms-mute-icon").hide()));
          }
        }, {
          key: "updateVolumeFill",
          value: function (e) {
            this.controls && (this.controls.find(".omlms-volume-fill").css("width", e + "%"), this.controls.find(".omlms-volume-thumb").css("left", e + "%"), this.controls.find(".omlms-volume-track").attr("aria-valuenow", Math.round(e)));
          }
        }, {
          key: "setPlaybackRate",
          value: function (e) {
            this.playbackRate = e, this.platformHandler && this.platformHandler.setPlaybackRate(e);
          }
        }, {
          key: "seekTo",
          value: (n = o(e().m(function t(n) {
            return e().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!this.platformHandler) {
                    e.n = 2;
                    break;
                  }
                  return this.hasEnded = !1, e.n = 1, this.platformHandler.seekTo(n);
                case 1:
                  return e.a(2, e.v);
                case 2:
                  return e.a(2);
              }
            }, t, this);
          })), function (e) {
            return n.apply(this, arguments);
          })
        }, {
          key: "toggleFullscreen",
          value: function () {
            var e = this.element[0],
              t = this.platformHandler && this.platformHandler.player;
            document.fullscreenEnabled || document.webkitFullscreenEnabled || e.requestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen || !t || "function" != typeof t.webkitEnterFullscreen ? this.isFullscreen ? (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), this.isFullscreen = !1, this.controls.find(".omlms-fullscreen-icon").show(), this.controls.find(".omlms-exit-fullscreen-icon").hide()) : (e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen && e.msRequestFullscreen(), this.isFullscreen = !0, this.controls.find(".omlms-fullscreen-icon").hide(), this.controls.find(".omlms-exit-fullscreen-icon").show()) : t.webkitEnterFullscreen();
          }
        }, {
          key: "showControls",
          value: function () {
            this.controls && (this.controls.removeClass("hidden"), this.controlsVisible = !0);
          }
        }, {
          key: "hideControls",
          value: function () {
            this.controls && (this.controls.addClass("hidden"), this.controlsVisible = !1);
          }
        }, {
          key: "handleError",
          value: function (e) {
            var n = "Unable to load video. Please try again later.";
            e.message && e.message.includes("MOV format not supported") && (n = "MOV video format is not supported by your browser. Please convert the video to MP4 format for better compatibility.");
            var o = t('\n                <div class="omlms-video-error">\n                    <p>'.concat(n, "</p>\n                </div>\n            "));
            this.element.append(o);
          }
        }, {
          key: "destroy",
          value: function () {
            this.platformHandler && this.platformHandler.destroy(), this.controls && this.controls.remove(), this.element.empty();
          }
        }]);
        var n, r, i, s;
      }();
    function f() {
      var e = t(".omlms-custom-video-player");
      0 !== e.length && e.each(function () {
        var e = t(this),
          n = e.data("video-url"),
          o = {
            url: n,
            autoplay: "true" === e.data("autoplay") || !0 === e.data("autoplay"),
            loop: "true" === e.data("loop") || !0 === e.data("loop"),
            muted: "true" === e.data("muted") || !0 === e.data("muted"),
            showControls: !1,
            customControls: !0,
            poster: e.data("poster") || null,
            logoUrl: e.data("logo-url") || ""
          };
        n && e.creatorLMSVideoPlayer(o);
      });
    }
    t.fn.creatorLMSVideoPlayer = function (e) {
      return this.each(function () {
        var n = t(this),
          o = n.data("creatorLMSVideoPlayer");
        return o || (o = new d(this, e), n.data("creatorLMSVideoPlayer", o)), o;
      });
    }, t(document).ready(function () {
      f();
    }), window.CreatorLMSVideoPlayer = d, window.initCreatorLMSVideoPlayers = f;
  }(jQuery);
})();
