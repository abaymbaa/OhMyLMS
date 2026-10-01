/*! For license information please see video-progress-tracker.js.LICENSE.txt */
(() => {
  function t() {
    var a,
      s,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      i = r.toStringTag || "@@toStringTag";
    function o(t, r, n, i) {
      var o = r && r.prototype instanceof c ? r : c,
        l = Object.create(o.prototype);
      return e(l, "_invoke", function (t, e, r) {
        var n,
          i,
          o,
          c = 0,
          l = r || [],
          d = !1,
          f = {
            p: 0,
            n: 0,
            v: a,
            a: h,
            f: h.bind(a, 4),
            d: function (t, e) {
              return n = t, i = 0, o = a, f.n = e, u;
            }
          };
        function h(t, e) {
          for (i = t, o = e, s = 0; !d && c && !r && s < l.length; s++) {
            var r,
              n = l[s],
              h = f.p,
              p = n[2];
            t > 3 ? (r = p === e) && (o = n[(i = n[4]) ? 5 : (i = 3, 3)], n[4] = n[5] = a) : n[0] <= h && ((r = t < 2 && h < n[1]) ? (i = 0, f.v = e, f.n = n[1]) : h < p && (r = t < 3 || n[0] > e || e > p) && (n[4] = t, n[5] = e, f.n = p, i = 0));
          }
          if (r || t > 1) return u;
          throw d = !0, e;
        }
        return function (r, l, p) {
          if (c > 1) throw TypeError("Generator is already running");
          for (d && 1 === l && h(l, p), i = l, o = p; (s = i < 2 ? a : o) || !d;) {
            n || (i ? i < 3 ? (i > 1 && (f.n = -1), h(i, o)) : f.n = o : f.v = o);
            try {
              if (c = 2, n) {
                if (i || (r = "next"), s = n[r]) {
                  if (!(s = s.call(n, o))) throw TypeError("iterator result is not an object");
                  if (!s.done) return s;
                  o = s.value, i < 2 && (i = 0);
                } else 1 === i && (s = n.return) && s.call(n), i < 2 && (o = TypeError("The iterator does not provide a '" + r + "' method"), i = 1);
                n = a;
              } else if ((s = (d = f.n < 0) ? o : t.call(e, f)) !== u) break;
            } catch (t) {
              n = a, i = 1, o = t;
            } finally {
              c = 1;
            }
          }
          return {
            value: s,
            done: d
          };
        };
      }(t, n, i), !0), l;
    }
    var u = {};
    function c() {}
    function l() {}
    function d() {}
    s = Object.getPrototypeOf;
    var f = [][n] ? s(s([][n]())) : (e(s = {}, n, function () {
        return this;
      }), s),
      h = d.prototype = c.prototype = Object.create(f);
    function p(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, e(t, i, "GeneratorFunction")), t.prototype = Object.create(h), t;
    }
    return l.prototype = d, e(h, "constructor", d), e(d, "constructor", l), l.displayName = "GeneratorFunction", e(d, i, "GeneratorFunction"), e(h), e(h, i, "Generator"), e(h, n, function () {
      return this;
    }), e(h, "toString", function () {
      return "[object Generator]";
    }), (t = function () {
      return {
        w: o,
        m: p
      };
    })();
  }
  function e(t, a, s, r) {
    var n = Object.defineProperty;
    try {
      n({}, "", {});
    } catch (t) {
      n = 0;
    }
    e = function (t, a, s, r) {
      function i(a, s) {
        e(t, a, function (t) {
          return this._invoke(a, s, t);
        });
      }
      a ? n ? n(t, a, {
        value: s,
        enumerable: !r,
        configurable: !r,
        writable: !r
      }) : t[a] = s : (i("next", 0), i("throw", 1), i("return", 2));
    }, e(t, a, s, r);
  }
  function a(t, e, a, s, r, n, i) {
    try {
      var o = t[n](i),
        u = o.value;
    } catch (t) {
      return void a(t);
    }
    o.done ? e(u) : Promise.resolve(u).then(s, r);
  }
  function s(t) {
    return function () {
      var e = this,
        s = arguments;
      return new Promise(function (r, n) {
        var i = t.apply(e, s);
        function o(t) {
          a(i, r, n, o, u, "next", t);
        }
        function u(t) {
          a(i, r, n, o, u, "throw", t);
        }
        o(void 0);
      });
    };
  }
  !function (e) {
    "use strict";

    var a = {
      config: {
        saveInterval: 1e4,
        heartbeatInterval: 5e3,
        completionThreshold: 90,
        minWatchDuration: 1
      },
      state: {
        lessonId: 0,
        courseId: 0,
        totalDuration: 0,
        watchedSegments: [],
        lastPosition: 0,
        lastTrackedPosition: 0,
        isPlaying: !1,
        saveTimer: null,
        heartbeatTimer: null,
        player: null,
        playerType: null,
        hasInitialized: !1,
        resumePosition: 0,
        hasResumed: !1
      },
      init: function () {
        var t = this;
        this.isLessonPage() && ("undefined" != typeof ohmylms_frontend_params && ohmylms_frontend_params.video_completion_threshold && (this.config.completionThreshold = parseInt(ohmylms_frontend_params.video_completion_threshold, 10)), this.state.lessonId = this.getLessonId(), this.state.courseId = this.getCourseId(), this.state.lessonId && this.state.courseId && ohmylms_frontend_params.current_student_id && (this.detectAndInitializePlayer(), e(window).on("beforeunload", function () {
          return t.saveProgress();
        }), e(document).on("visibilitychange", function () {
          document.hidden && t.saveProgress();
        })));
      },
      detectAndInitializePlayer: function () {
        var t = e(".ohmylms-custom-video-player");
        if (t.length) this.initCustomPlayer(t[0]);else {
          var a = e('iframe[src*="youtube.com"], iframe[src*="youtu.be"]');
          if (a.length) this.initYouTubePlayer(a[0]);else {
            var s = e('iframe[src*="vimeo.com"]');
            if (s.length) this.initVimeoPlayer(s[0]);else {
              var r = e("video.the-video, .ohmylms-video-player video");
              r.length && this.initHTML5Player(r[0]);
            }
          }
        }
      },
      initCustomPlayer: function (a) {
        var r = this,
          n = e(a).attr("data-video-url");
        if (n) {
          var i = n.includes("youtube.com") || n.includes("youtu.be"),
            o = n.includes("vimeo.com"),
            u = setInterval(s(t().m(function s() {
              var n, c;
              return t().w(function (t) {
                for (;;) switch (t.n) {
                  case 0:
                    if (!((n = e(a).data("ohMyLMSVideoPlayer")) && n.platformHandler && n.platformHandler.isReady)) {
                      t.n = 4;
                      break;
                    }
                    if (c = 0, !o) {
                      t.n = 2;
                      break;
                    }
                    return t.n = 1, n.platformHandler.getDuration();
                  case 1:
                    c = t.v, t.n = 3;
                    break;
                  case 2:
                    c = n.platformHandler.getDuration();
                  case 3:
                    if (!(c > 0)) {
                      t.n = 4;
                      break;
                    }
                    return clearInterval(u), t.n = 4, r.initCustomPlayerTracking(n, i, o);
                  case 4:
                    return t.a(2);
                }
              }, s);
            })), 200);
          setTimeout(function () {
            clearInterval(u);
          }, 15e3);
        }
      },
      initCustomPlayerTracking: function (e, a, r) {
        var n = this;
        return s(t().m(function i() {
          var o, u, c, l, d, f;
          return t().w(function (i) {
            for (;;) switch (i.n) {
              case 0:
                if (n.state.player = e.platformHandler, n.state.playerInstance = e, !a) {
                  i.n = 1;
                  break;
                }
                n.state.playerType = "youtube", n.state.totalDuration = n.state.player.getDuration(), i.n = 4;
                break;
              case 1:
                if (!r) {
                  i.n = 3;
                  break;
                }
                return n.state.playerType = "vimeo", i.n = 2, n.state.player.getDuration();
              case 2:
                n.state.totalDuration = i.v, i.n = 4;
                break;
              case 3:
                n.state.playerType = "html5", n.state.totalDuration = n.state.player.getDuration();
              case 4:
                if (n.state.totalDuration && 0 !== n.state.totalDuration) {
                  i.n = 5;
                  break;
                }
                return i.a(2);
              case 5:
                return n.state.hasInitialized = !0, i.n = 6, n.loadProgress();
              case 6:
                o = i.v, u = 0, o && o.last_position > 1 && !o.is_completed && (u = o.last_position, setTimeout(function () {
                  if (e.controls) {
                    e.controls.find(".ohmylms-current-time").text(e.formatTime(u));
                    var t = u / n.state.totalDuration * 100;
                    e.controls.find(".ohmylms-progress-filled").css("width", t + "%"), e.controls.find(".ohmylms-progress-handle").css("left", t + "%");
                  }
                }, 100)), c = !1, l = e.options.onPlay, d = e.options.onPause, e.options.onPlay = s(t().m(function e() {
                  return t().w(function (t) {
                    for (;;) switch (t.n) {
                      case 0:
                        if (c || !(u > 0)) {
                          t.n = 3;
                          break;
                        }
                        return c = !0, t.n = 1, n.seekToPosition(u);
                      case 1:
                        return n.state.lastTrackedPosition = u, t.n = 2, new Promise(function (t) {
                          return setTimeout(t, 200);
                        });
                      case 2:
                        t.n = 5;
                        break;
                      case 3:
                        if (0 !== n.state.lastTrackedPosition) {
                          t.n = 5;
                          break;
                        }
                        return t.n = 4, n.getCurrentTime();
                      case 4:
                        n.state.lastTrackedPosition = t.v;
                      case 5:
                        n.state.isPlaying = !0, n.startTracking(), l && l();
                      case 6:
                        return t.a(2);
                    }
                  }, e);
                })), e.options.onPause = s(t().m(function e() {
                  var a;
                  return t().w(function (t) {
                    for (;;) switch (t.n) {
                      case 0:
                        return n.state.isPlaying = !1, t.n = 1, n.getCurrentTime();
                      case 1:
                        a = t.v, n.updateWatchedSegments(a), n.stopTracking(), n.saveProgress(), d && d();
                      case 2:
                        return t.a(2);
                    }
                  }, e);
                })), f = e.options.onEnded, e.options.onEnded = s(t().m(function e() {
                  var a;
                  return t().w(function (t) {
                    for (;;) switch (t.n) {
                      case 0:
                        return n.state.isPlaying = !1, t.n = 1, n.getCurrentTime();
                      case 1:
                        a = t.v, n.updateWatchedSegments(a), n.stopTracking(), n.saveProgress(), f && f();
                      case 2:
                        return t.a(2);
                    }
                  }, e);
                }));
              case 7:
                return i.a(2);
            }
          }, i);
        }))();
      },
      initYouTubePlayer: function (t) {
        var e = this;
        if (this.state.playerType = "youtube", "undefined" == typeof YT || void 0 === YT.Player) {
          var a = document.createElement("script");
          a.src = "https://www.youtube.com/iframe_api";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(a, s), window.onYouTubeIframeAPIReady = function () {
            e.setupYouTubePlayer(t);
          };
        } else this.setupYouTubePlayer(t);
      },
      setupYouTubePlayer: function (t) {
        var e = this;
        t.id || (t.id = "ohmylms-youtube-player-" + this.state.lessonId);
        var a = t.src;
        -1 === a.indexOf("enablejsapi=1") && (t.src = a + (-1 === a.indexOf("?") ? "?" : "&") + "enablejsapi=1"), this.state.player = new YT.Player(t.id, {
          events: {
            onReady: function (t) {
              return e.onYouTubeReady(t);
            },
            onStateChange: function (t) {
              return e.onYouTubeStateChange(t);
            }
          }
        });
      },
      onYouTubeReady: function (t) {
        var e = this;
        this.state.totalDuration = t.target.getDuration(), this.state.hasInitialized = !0, this.loadProgress().then(function (t) {
          t && t.last_position > 0 && !t.is_completed && (e.state.resumePosition = t.last_position, e.state.hasResumed = !1);
        });
      },
      onYouTubeStateChange: function (t) {
        t.data === YT.PlayerState.PLAYING ? (!this.state.hasResumed && this.state.resumePosition > 0 ? (this.seekToPosition(this.state.resumePosition), this.state.lastTrackedPosition = this.state.resumePosition, this.state.hasResumed = !0) : 0 === this.state.lastTrackedPosition && (this.state.lastTrackedPosition = t.target.getCurrentTime()), this.state.isPlaying = !0, this.startTracking()) : t.data !== YT.PlayerState.PAUSED && t.data !== YT.PlayerState.ENDED || (this.state.isPlaying = !1, this.updateWatchedSegments(t.target.getCurrentTime()), this.stopTracking(), this.saveProgress());
      },
      initVimeoPlayer: function (t) {
        var e = this;
        if (this.state.playerType = "vimeo", "undefined" == typeof Vimeo) {
          var a = document.createElement("script");
          a.src = "https://player.vimeo.com/api/player.js", a.onload = function () {
            e.setupVimeoPlayer(t);
          }, document.head.appendChild(a);
        } else this.setupVimeoPlayer(t);
      },
      setupVimeoPlayer: function (e) {
        var a = this;
        this.state.player = new Vimeo.Player(e), this.state.hasInitialized = !0, this.state.player.getDuration().then(function (t) {
          a.state.totalDuration = t, a.loadProgress().then(function (t) {
            t && t.last_position > 0 && !t.is_completed && (a.state.resumePosition = t.last_position, a.state.hasResumed = !1);
          });
        }), this.state.player.on("play", s(t().m(function e() {
          return t().w(function (t) {
            for (;;) switch (t.n) {
              case 0:
                if (a.state.hasResumed || !(a.state.resumePosition > 0)) {
                  t.n = 3;
                  break;
                }
                return t.n = 1, a.seekToPosition(a.state.resumePosition);
              case 1:
                return a.state.lastTrackedPosition = a.state.resumePosition, a.state.hasResumed = !0, t.n = 2, new Promise(function (t) {
                  return setTimeout(t, 200);
                });
              case 2:
                t.n = 5;
                break;
              case 3:
                if (0 !== a.state.lastTrackedPosition) {
                  t.n = 5;
                  break;
                }
                return t.n = 4, a.state.player.getCurrentTime();
              case 4:
                a.state.lastTrackedPosition = t.v;
              case 5:
                a.state.isPlaying = !0, a.startTracking();
              case 6:
                return t.a(2);
            }
          }, e);
        }))), this.state.player.on("pause", s(t().m(function e() {
          var s;
          return t().w(function (t) {
            for (;;) switch (t.n) {
              case 0:
                return a.state.isPlaying = !1, t.n = 1, a.state.player.getCurrentTime();
              case 1:
                s = t.v, a.updateWatchedSegments(s), a.stopTracking(), a.saveProgress();
              case 2:
                return t.a(2);
            }
          }, e);
        }))), this.state.player.on("ended", s(t().m(function e() {
          var s;
          return t().w(function (t) {
            for (;;) switch (t.n) {
              case 0:
                return a.state.isPlaying = !1, t.n = 1, a.state.player.getCurrentTime();
              case 1:
                s = t.v, a.updateWatchedSegments(s), a.stopTracking(), a.saveProgress();
              case 2:
                return t.a(2);
            }
          }, e);
        }))), this.state.player.on("timeupdate", function (t) {
          a.updateWatchedSegments(t.seconds);
        });
      },
      initHTML5Player: function (t) {
        var a = this;
        this.state.playerType = "html5", this.state.player = t, this.state.totalDuration = t.duration || 0, this.state.hasInitialized = !0, this.state.totalDuration ? this.loadProgress().then(function (t) {
          t && t.last_position > 0 && !t.is_completed && (a.state.resumePosition = t.last_position, a.state.hasResumed = !1);
        }) : e(t).on("loadedmetadata", function () {
          a.state.totalDuration = t.duration, a.loadProgress().then(function (t) {
            t && t.last_position > 0 && !t.is_completed && (a.state.resumePosition = t.last_position, a.state.hasResumed = !1);
          });
        }), e(t).on("play", function () {
          !a.state.hasResumed && a.state.resumePosition > 0 ? (a.seekToPosition(a.state.resumePosition), a.state.lastTrackedPosition = a.state.resumePosition, a.state.hasResumed = !0) : 0 === a.state.lastTrackedPosition && (a.state.lastTrackedPosition = t.currentTime), a.state.isPlaying = !0, a.startTracking();
        }), e(t).on("pause", function () {
          a.state.isPlaying = !1, a.stopTracking(), a.saveProgress();
        }), e(t).on("ended", function () {
          a.state.isPlaying = !1, a.stopTracking(), a.saveProgress();
        }), e(t).on("timeupdate", function () {
          a.updateWatchedSegments(t.currentTime);
        });
      },
      startTracking: function () {
        var t = this;
        this.state.saveTimer || (this.state.saveTimer = setInterval(function () {
          t.saveProgress();
        }, this.config.saveInterval)), this.state.heartbeatTimer || (this.state.heartbeatTimer = setInterval(function () {
          t.trackCurrentPosition();
        }, this.config.heartbeatInterval));
      },
      stopTracking: function () {
        this.state.saveTimer && (clearInterval(this.state.saveTimer), this.state.saveTimer = null), this.state.heartbeatTimer && (clearInterval(this.state.heartbeatTimer), this.state.heartbeatTimer = null);
      },
      trackCurrentPosition: function () {
        var t = this;
        this.state.isPlaying && this.getCurrentTime().then(function (e) {
          e > 0 && t.updateWatchedSegments(e);
        });
      },
      getCurrentTime: function () {
        var e = this;
        return s(t().m(function a() {
          return t().w(function (t) {
            for (;;) switch (t.n) {
              case 0:
                if ("youtube" !== e.state.playerType || !e.state.player) {
                  t.n = 1;
                  break;
                }
                return t.a(2, e.state.player.getCurrentTime());
              case 1:
                if ("vimeo" !== e.state.playerType || !e.state.player) {
                  t.n = 3;
                  break;
                }
                return t.n = 2, e.state.player.getCurrentTime();
              case 2:
                return t.a(2, t.v);
              case 3:
                if ("html5" !== e.state.playerType || !e.state.player) {
                  t.n = 5;
                  break;
                }
                if ("function" != typeof e.state.player.getCurrentTime) {
                  t.n = 4;
                  break;
                }
                return t.a(2, e.state.player.getCurrentTime());
              case 4:
                if ("number" != typeof e.state.player.currentTime) {
                  t.n = 5;
                  break;
                }
                return t.a(2, e.state.player.currentTime);
              case 5:
                return t.a(2, 0);
            }
          }, a);
        }))();
      },
      updateWatchedSegments: function (t) {
        if (!(t < this.config.minWatchDuration)) {
          if (this.state.lastPosition = t, this.state.lastTrackedPosition > 0 && this.state.isPlaying && Math.abs(t - this.state.lastTrackedPosition) <= this.config.heartbeatInterval / 1e3 + 1) {
            var e = Math.min(this.state.lastTrackedPosition, t),
              a = Math.max(this.state.lastTrackedPosition, t);
            if (a > e) {
              var s = {
                start: Math.floor(e),
                end: Math.ceil(a)
              };
              this.state.watchedSegments.push(s), this.state.watchedSegments = this.mergeSegments(this.state.watchedSegments);
            }
          }
          this.state.lastTrackedPosition = t;
        }
      },
      mergeSegments: function (t) {
        if (t.length <= 1) return t;
        t.sort(function (t, e) {
          return t.start - e.start;
        });
        for (var e = [t[0]], a = 1; a < t.length; a++) {
          var s = t[a],
            r = e[e.length - 1];
          s.start <= r.end + 1 ? r.end = Math.max(r.end, s.end) : e.push(s);
        }
        return e;
      },
      calculateWatchedDuration: function () {
        return this.state.watchedSegments.reduce(function (t, e) {
          return t + (e.end - e.start);
        }, 0);
      },
      loadProgress: function () {
        var t = this;
        return this.state.lessonId && "undefined" != typeof ohmylms_frontend_params && ohmylms_frontend_params.ajax_url ? new Promise(function (a, s) {
          e.ajax({
            url: ohmylms_frontend_params.ajax_url,
            type: "POST",
            data: {
              action: "ohmylms_get_video_progress",
              nonce: ohmylms_frontend_params.video_progress_nonce,
              lesson_id: t.state.lessonId
            },
            success: function (t) {
              if (t.success && t.data.progress) {
                var e = t.data.progress;
                a(e);
              } else a(null);
            },
            error: function (t, e, a) {
              s(a);
            }
          });
        }) : Promise.resolve(null);
      },
      saveProgress: function () {
        var t = this;
        if (this.state.hasInitialized && 0 !== this.state.totalDuration) {
          var a = this.calculateWatchedDuration();
          a < this.config.minWatchDuration || e.ajax({
            url: ohmylms_frontend_params.ajax_url,
            type: "POST",
            data: {
              action: "ohmylms_save_video_progress",
              nonce: ohmylms_frontend_params.video_progress_nonce,
              lesson_id: this.state.lessonId,
              course_id: this.state.courseId,
              watched_duration: a,
              total_duration: this.state.totalDuration,
              last_position: this.state.lastPosition
            },
            success: function (a) {
              a.success && a.data.progress && a.data.progress.is_completed && (e(document).trigger("ohmylms:video:completed", {
                lessonId: t.state.lessonId,
                courseId: t.state.courseId
              }), t.clearProgress());
            },
            error: function (t, e, a) {}
          });
        }
      },
      clearProgress: function () {
        var t = this;
        this.state.lessonId && "undefined" != typeof ohmylms_frontend_params && ohmylms_frontend_params.ajax_url && e.ajax({
          url: ohmylms_frontend_params.ajax_url,
          type: "POST",
          data: {
            action: "ohmylms_clear_video_progress",
            nonce: ohmylms_frontend_params.video_progress_nonce,
            lesson_id: this.state.lessonId
          },
          success: function (e) {
            e.success && (t.state.watchedSegments = [], t.state.lastPosition = 0, t.state.lastTrackedPosition = 0, t.state.resumePosition = 0);
          },
          error: function (t, e, a) {}
        });
      },
      seekToPosition: function (e) {
        var a = this;
        return s(t().m(function s() {
          var r, n;
          return t().w(function (t) {
            for (;;) switch (t.p = t.n) {
              case 0:
                if (t.p = 0, "youtube" !== a.state.playerType || !a.state.player) {
                  t.n = 1;
                  break;
                }
                "function" == typeof a.state.player.seekTo && a.state.player.seekTo(e, !0), t.n = 6;
                break;
              case 1:
                if ("vimeo" !== a.state.playerType || !a.state.player) {
                  t.n = 5;
                  break;
                }
                if ("function" != typeof a.state.player.setCurrentTime) {
                  t.n = 3;
                  break;
                }
                return t.n = 2, a.state.player.setCurrentTime(e);
              case 2:
                t.n = 4;
                break;
              case 3:
                if ("function" != typeof a.state.player.seekTo) {
                  t.n = 4;
                  break;
                }
                if (!(r = a.state.player.seekTo(e)) || "function" != typeof r.then) {
                  t.n = 4;
                  break;
                }
                return t.n = 4, r;
              case 4:
                t.n = 6;
                break;
              case 5:
                "html5" === a.state.playerType && a.state.player && ("function" == typeof a.state.player.seekTo ? a.state.player.seekTo(e) : void 0 !== a.state.player.currentTime && (a.state.player.currentTime = e));
              case 6:
                t.n = 8;
                break;
              case 7:
                t.p = 7, n = t.v, console.error("[VideoTracker] Seek error:", n);
              case 8:
                return t.a(2);
            }
          }, s, null, [[0, 7]]);
        }))();
      },
      isLessonPage: function () {
        return e("body").hasClass("single-lesson") || e("body").hasClass("single-ohmylms-lesson") || e(".ohmylms-lesson-content-body").length > 0;
      },
      getLessonId: function () {
        var t = e("[data-lesson-id]").attr("data-lesson-id");
        if (t) return parseInt(t);
        var a = e("body").attr("class"),
          s = a && a.match(/postid-(\d+)/);
        return s ? parseInt(s[1]) : "undefined" != typeof ohmylms_lesson_id ? parseInt(ohmylms_lesson_id) : 0;
      },
      getCourseId: function () {
        var t = e("[data-course-id]").attr("data-course-id");
        if (t) return parseInt(t);
        if ("undefined" != typeof ohmylms_course_id) return parseInt(ohmylms_course_id);
        var a = e(".ohmylms-course-link").attr("href");
        if (a) {
          var s = a.match(/post=(\d+)/);
          if (s) return parseInt(s[1]);
        }
        return 0;
      }
    };
    e(document).ready(function () {
      a.init();
    });
  }(jQuery);
})();
