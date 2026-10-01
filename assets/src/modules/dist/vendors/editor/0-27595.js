// Reconstructed Webpack factory 27595; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248),
    s = n(56614);
  function r(e) {
    return e && "object" == typeof e && "default" in e ? e : {
      default: e
    };
  }
  var i = r(n(64504));
  class a {
    constructor({
      editor: e,
      element: t,
      view: n,
      tippyOptions: s = {},
      updateDelay: r = 250,
      shouldShow: i
    }) {
      this.preventHide = !1, this.shouldShow = ({
        view: e,
        state: t,
        from: n,
        to: s
      }) => {
        const {
            doc: r,
            selection: i
          } = t,
          {
            empty: a
          } = i,
          c = !r.textBetween(n, s).length && o.isTextSelection(t.selection),
          d = this.element.contains(document.activeElement);
        return !(!e.hasFocus() && !d || a || c || !this.editor.isEditable);
      }, this.mousedownHandler = () => {
        this.preventHide = !0;
      }, this.dragstartHandler = () => {
        this.hide();
      }, this.focusHandler = () => {
        setTimeout(() => this.update(this.editor.view));
      }, this.blurHandler = ({
        event: e
      }) => {
        var t;
        this.preventHide ? this.preventHide = !1 : (null == e ? void 0 : e.relatedTarget) && (null === (t = this.element.parentNode) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null == e ? void 0 : e.relatedTarget) !== this.editor.view.dom && this.hide();
      }, this.tippyBlurHandler = e => {
        this.blurHandler({
          event: e
        });
      }, this.handleDebouncedUpdate = (e, t) => {
        const n = !(null == t ? void 0 : t.selection.eq(e.state.selection)),
          o = !(null == t ? void 0 : t.doc.eq(e.state.doc));
        (n || o) && (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
          this.updateHandler(e, n, o, t);
        }, this.updateDelay));
      }, this.updateHandler = (e, t, n, s) => {
        var r, i, a;
        const {
            state: c,
            composing: d
          } = e,
          {
            selection: l
          } = c;
        if (d || !t && !n) return;
        this.createTooltip();
        const {
            ranges: u
          } = l,
          h = Math.min(...u.map(e => e.$from.pos)),
          p = Math.max(...u.map(e => e.$to.pos));
        (null === (r = this.shouldShow) || void 0 === r ? void 0 : r.call(this, {
          editor: this.editor,
          element: this.element,
          view: e,
          state: c,
          oldState: s,
          from: h,
          to: p
        })) ? (null === (i = this.tippy) || void 0 === i || i.setProps({
          getReferenceClientRect: (null === (a = this.tippyOptions) || void 0 === a ? void 0 : a.getReferenceClientRect) || (() => {
            if (o.isNodeSelection(c.selection)) {
              let t = e.nodeDOM(h);
              if (t) {
                const e = t.dataset.nodeViewWrapper ? t : t.querySelector("[data-node-view-wrapper]");
                if (e && (t = e.firstChild), t) return t.getBoundingClientRect();
              }
            }
            return o.posToDOMRect(e, h, p);
          })
        }), this.show()) : this.hide();
      }, this.editor = e, this.element = t, this.view = n, this.updateDelay = r, i && (this.shouldShow = i), this.element.addEventListener("mousedown", this.mousedownHandler, {
        capture: !0
      }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = s, this.element.remove(), this.element.style.visibility = "visible";
    }
    createTooltip() {
      const {
          element: e
        } = this.editor.options,
        t = !!e.parentElement;
      this.element.tabIndex = 0, !this.tippy && t && (this.tippy = i.default(e, {
        duration: 0,
        getReferenceClientRect: null,
        content: this.element,
        interactive: !0,
        trigger: "manual",
        placement: "top",
        hideOnClick: "toggle",
        ...this.tippyOptions
      }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
    }
    update(e, t) {
      const {
          state: n
        } = e,
        o = n.selection.from !== n.selection.to;
      if (this.updateDelay > 0 && o) return void this.handleDebouncedUpdate(e, t);
      const s = !(null == t ? void 0 : t.selection.eq(e.state.selection)),
        r = !(null == t ? void 0 : t.doc.eq(e.state.doc));
      this.updateHandler(e, s, r, t);
    }
    show() {
      var e;
      null === (e = this.tippy) || void 0 === e || e.show();
    }
    hide() {
      var e;
      null === (e = this.tippy) || void 0 === e || e.hide();
    }
    destroy() {
      var e, t;
      (null === (e = this.tippy) || void 0 === e ? void 0 : e.popper.firstChild) && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), null === (t = this.tippy) || void 0 === t || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, {
        capture: !0
      }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
    }
  }
  const c = e => new s.Plugin({
      key: "string" == typeof e.pluginKey ? new s.PluginKey(e.pluginKey) : e.pluginKey,
      view: t => new a({
        view: t,
        ...e
      })
    }),
    d = o.Extension.create({
      name: "bubbleMenu",
      addOptions: () => ({
        element: null,
        tippyOptions: {},
        pluginKey: "bubbleMenu",
        updateDelay: void 0,
        shouldShow: null
      }),
      addProseMirrorPlugins() {
        return this.options.element ? [c({
          pluginKey: this.options.pluginKey,
          editor: this.editor,
          element: this.options.element,
          tippyOptions: this.options.tippyOptions,
          updateDelay: this.options.updateDelay,
          shouldShow: this.options.shouldShow
        })] : [];
      }
    });
  t.BubbleMenu = d, t.BubbleMenuPlugin = c, t.BubbleMenuView = a, t.default = d;
});
