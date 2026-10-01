// Reconstructed Webpack factory 44788; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  function r(e) {
    return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, r(e);
  }
  function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, i(r.key), r);
    }
  }
  function i(e) {
    var t = function (e) {
      if ("object" !== r(e) || null === e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" !== r(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" === r(t) ? t : String(t);
  }
  var o = n(37820),
    s = n(36553),
    l = function () {
      function e(t, n) {
        var r,
          a = this;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.editorView = t, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = null !== (r = n.width) && void 0 !== r ? r : 1, this.color = !1 === n.color ? void 0 : n.color || "black", this.class = n.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map(function (e) {
          var n = function (t) {
            a[e](t);
          };
          return t.dom.addEventListener(e, n), {
            name: e,
            handler: n
          };
        });
      }
      var t, n;
      return t = e, (n = [{
        key: "destroy",
        value: function () {
          var e = this;
          this.handlers.forEach(function (t) {
            var n = t.name,
              r = t.handler;
            return e.editorView.dom.removeEventListener(n, r);
          });
        }
      }, {
        key: "update",
        value: function (e, t) {
          null != this.cursorPos && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
        }
      }, {
        key: "setCursor",
        value: function (e) {
          e != this.cursorPos && (this.cursorPos = e, null == e ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
        }
      }, {
        key: "updateOverlay",
        value: function () {
          var e,
            t = this.editorView.state.doc.resolve(this.cursorPos),
            n = !t.parent.inlineContent,
            r = this.editorView.dom,
            a = r.getBoundingClientRect(),
            i = a.width / r.offsetWidth,
            o = a.height / r.offsetHeight;
          if (n) {
            var s = t.nodeBefore,
              l = t.nodeAfter;
            if (s || l) {
              var c = this.editorView.nodeDOM(this.cursorPos - (s ? s.nodeSize : 0));
              if (c) {
                var u = c.getBoundingClientRect(),
                  d = s ? u.bottom : u.top;
                s && l && (d = (d + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
                var p = this.width / 2 * o;
                e = {
                  left: u.left,
                  right: u.right,
                  top: d - p,
                  bottom: d + p
                };
              }
            }
          }
          if (!e) {
            var f = this.editorView.coordsAtPos(this.cursorPos),
              h = this.width / 2 * i;
            e = {
              left: f.left - h,
              right: f.left + h,
              top: f.top,
              bottom: f.bottom
            };
          }
          var _,
            m,
            A = this.editorView.dom.offsetParent;
          if (this.element || (this.element = A.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n), !A || A == document.body && "static" == getComputedStyle(A).position) _ = -pageXOffset, m = -pageYOffset;else {
            var g = A.getBoundingClientRect(),
              y = g.width / A.offsetWidth,
              v = g.height / A.offsetHeight;
            _ = g.left - A.scrollLeft * y, m = g.top - A.scrollTop * v;
          }
          this.element.style.left = (e.left - _) / i + "px", this.element.style.top = (e.top - m) / o + "px", this.element.style.width = (e.right - e.left) / i + "px", this.element.style.height = (e.bottom - e.top) / o + "px";
        }
      }, {
        key: "scheduleRemoval",
        value: function (e) {
          var t = this;
          clearTimeout(this.timeout), this.timeout = setTimeout(function () {
            return t.setCursor(null);
          }, e);
        }
      }, {
        key: "dragover",
        value: function (e) {
          if (this.editorView.editable) {
            var t = this.editorView.posAtCoords({
                left: e.clientX,
                top: e.clientY
              }),
              n = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside),
              r = n && n.type.spec.disableDropCursor,
              a = "function" == typeof r ? r(this.editorView, t, e) : r;
            if (t && !a) {
              var i = t.pos;
              if (this.editorView.dragging && this.editorView.dragging.slice) {
                var o = s.dropPoint(this.editorView.state.doc, i, this.editorView.dragging.slice);
                null != o && (i = o);
              }
              this.setCursor(i), this.scheduleRemoval(5e3);
            }
          }
        }
      }, {
        key: "dragend",
        value: function () {
          this.scheduleRemoval(20);
        }
      }, {
        key: "drop",
        value: function () {
          this.scheduleRemoval(20);
        }
      }, {
        key: "dragleave",
        value: function (e) {
          this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
        }
      }]) && a(t.prototype, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
  t.dropCursor = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return new o.Plugin({
      view: function (t) {
        return new l(t, e);
      }
    });
  };
});
