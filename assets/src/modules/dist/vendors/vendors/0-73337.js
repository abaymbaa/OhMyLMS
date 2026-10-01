// Reconstructed Webpack factory 73337; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => i
  });
  var r = n(42845),
    a = n(38262);
  function i(e = {}) {
    return new r.k_({
      view: t => new o(t, e)
    });
  }
  class o {
    constructor(e, t) {
      var n;
      this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = null !== (n = t.width) && void 0 !== n ? n : 1, this.color = !1 === t.color ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map(t => {
        let n = e => {
          this[t](e);
        };
        return e.dom.addEventListener(t, n), {
          name: t,
          handler: n
        };
      });
    }
    destroy() {
      this.handlers.forEach(({
        name: e,
        handler: t
      }) => this.editorView.dom.removeEventListener(e, t));
    }
    update(e, t) {
      null != this.cursorPos && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
    }
    setCursor(e) {
      e != this.cursorPos && (this.cursorPos = e, null == e ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
    }
    updateOverlay() {
      let e,
        t = this.editorView.state.doc.resolve(this.cursorPos),
        n = !t.parent.inlineContent,
        r = this.editorView.dom,
        a = r.getBoundingClientRect(),
        i = a.width / r.offsetWidth,
        o = a.height / r.offsetHeight;
      if (n) {
        let n = t.nodeBefore,
          r = t.nodeAfter;
        if (n || r) {
          let t = this.editorView.nodeDOM(this.cursorPos - (n ? n.nodeSize : 0));
          if (t) {
            let a = t.getBoundingClientRect(),
              i = n ? a.bottom : a.top;
            n && r && (i = (i + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
            let s = this.width / 2 * o;
            e = {
              left: a.left,
              right: a.right,
              top: i - s,
              bottom: i + s
            };
          }
        }
      }
      if (!e) {
        let t = this.editorView.coordsAtPos(this.cursorPos),
          n = this.width / 2 * i;
        e = {
          left: t.left - n,
          right: t.left + n,
          top: t.top,
          bottom: t.bottom
        };
      }
      let s,
        l,
        c = this.editorView.dom.offsetParent;
      if (this.element || (this.element = c.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n), !c || c == document.body && "static" == getComputedStyle(c).position) s = -pageXOffset, l = -pageYOffset;else {
        let e = c.getBoundingClientRect(),
          t = e.width / c.offsetWidth,
          n = e.height / c.offsetHeight;
        s = e.left - c.scrollLeft * t, l = e.top - c.scrollTop * n;
      }
      this.element.style.left = (e.left - s) / i + "px", this.element.style.top = (e.top - l) / o + "px", this.element.style.width = (e.right - e.left) / i + "px", this.element.style.height = (e.bottom - e.top) / o + "px";
    }
    scheduleRemoval(e) {
      clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
    }
    dragover(e) {
      if (!this.editorView.editable) return;
      let t = this.editorView.posAtCoords({
          left: e.clientX,
          top: e.clientY
        }),
        n = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside),
        r = n && n.type.spec.disableDropCursor,
        i = "function" == typeof r ? r(this.editorView, t, e) : r;
      if (t && !i) {
        let e = t.pos;
        if (this.editorView.dragging && this.editorView.dragging.slice) {
          let t = (0, a.Um)(this.editorView.state.doc, e, this.editorView.dragging.slice);
          null != t && (e = t);
        }
        this.setCursor(e), this.scheduleRemoval(5e3);
      }
    }
    dragend() {
      this.scheduleRemoval(20);
    }
    drop() {
      this.scheduleRemoval(20);
    }
    dragleave(e) {
      this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
    }
  }
});
