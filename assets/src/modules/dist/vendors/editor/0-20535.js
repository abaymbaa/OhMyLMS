// Reconstructed Webpack factory 20535; arguments retain original semantics.
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
    getTextContent(e) {
      return o.getText(e, {
        textSerializers: o.getTextSerializersFromSchema(this.editor.schema)
      });
    }
    constructor({
      editor: e,
      element: t,
      view: n,
      tippyOptions: o = {},
      shouldShow: s
    }) {
      this.preventHide = !1, this.shouldShow = ({
        view: e,
        state: t
      }) => {
        const {
            selection: n
          } = t,
          {
            $anchor: o,
            empty: s
          } = n,
          r = 1 === o.depth,
          i = o.parent.isTextblock && !o.parent.type.spec.code && !o.parent.textContent && 0 === o.parent.childCount && !this.getTextContent(o.parent);
        return !!(e.hasFocus() && s && r && i && this.editor.isEditable);
      }, this.mousedownHandler = () => {
        this.preventHide = !0;
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
      }, this.editor = e, this.element = t, this.view = n, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, {
        capture: !0
      }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = o, this.element.remove(), this.element.style.visibility = "visible";
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
        placement: "right",
        hideOnClick: "toggle",
        ...this.tippyOptions
      }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
    }
    update(e, t) {
      var n, s, r;
      const {
          state: i
        } = e,
        {
          doc: a,
          selection: c
        } = i,
        {
          from: d,
          to: l
        } = c;
      t && t.doc.eq(a) && t.selection.eq(c) || (this.createTooltip(), (null === (n = this.shouldShow) || void 0 === n ? void 0 : n.call(this, {
        editor: this.editor,
        view: e,
        state: i,
        oldState: t
      })) ? (null === (s = this.tippy) || void 0 === s || s.setProps({
        getReferenceClientRect: (null === (r = this.tippyOptions) || void 0 === r ? void 0 : r.getReferenceClientRect) || (() => o.posToDOMRect(e, d, l))
      }), this.show()) : this.hide());
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
      }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
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
      name: "floatingMenu",
      addOptions: () => ({
        element: null,
        tippyOptions: {},
        pluginKey: "floatingMenu",
        shouldShow: null
      }),
      addProseMirrorPlugins() {
        return this.options.element ? [c({
          pluginKey: this.options.pluginKey,
          editor: this.editor,
          element: this.options.element,
          tippyOptions: this.options.tippyOptions,
          shouldShow: this.options.shouldShow
        })] : [];
      }
    });
  t.FloatingMenu = d, t.FloatingMenuPlugin = c, t.FloatingMenuView = a, t.default = d;
});
