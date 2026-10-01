// Reconstructed Webpack factory 81531; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248),
    s = n(54631),
    r = n(56614);
  const i = "[\0-   ᠎ -\u2029 　]",
    a = new RegExp(i),
    c = new RegExp(`${i}$`),
    d = new RegExp(i, "g");
  function l(e, t) {
    const n = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
    return t && t.forEach(e => {
      const t = "string" == typeof e ? e : e.scheme;
      t && n.push(t);
    }), !e || e.replace(d, "").match(new RegExp(`^(?:(?:${n.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`, "i"));
  }
  const u = o.Mark.create({
    name: "link",
    priority: 1e3,
    keepOnSplit: !1,
    exitable: !0,
    onCreate() {
      this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach(e => {
        "string" != typeof e ? s.registerCustomProtocol(e.scheme, e.optionalSlashes) : s.registerCustomProtocol(e);
      });
    },
    onDestroy() {
      s.reset();
    },
    inclusive() {
      return this.options.autolink;
    },
    addOptions: () => ({
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (e, t) => !!l(e, t.protocols),
      validate: e => !!e,
      shouldAutoLink: e => !!e
    }),
    addAttributes() {
      return {
        href: {
          default: null,
          parseHTML: e => e.getAttribute("href")
        },
        target: {
          default: this.options.HTMLAttributes.target
        },
        rel: {
          default: this.options.HTMLAttributes.rel
        },
        class: {
          default: this.options.HTMLAttributes.class
        }
      };
    },
    parseHTML() {
      return [{
        tag: "a[href]",
        getAttrs: e => {
          const t = e.getAttribute("href");
          return !(!t || !this.options.isAllowedUri(t, {
            defaultValidate: e => !!l(e, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          })) && null;
        }
      }];
    },
    renderHTML({
      HTMLAttributes: e
    }) {
      return this.options.isAllowedUri(e.href, {
        defaultValidate: e => !!l(e, this.options.protocols),
        protocols: this.options.protocols,
        defaultProtocol: this.options.defaultProtocol
      }) ? ["a", o.mergeAttributes(this.options.HTMLAttributes, e), 0] : ["a", o.mergeAttributes(this.options.HTMLAttributes, {
        ...e,
        href: ""
      }), 0];
    },
    addCommands() {
      return {
        setLink: e => ({
          chain: t
        }) => {
          const {
            href: n
          } = e;
          return !!this.options.isAllowedUri(n, {
            defaultValidate: e => !!l(e, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) && t().setMark(this.name, e).setMeta("preventAutolink", !0).run();
        },
        toggleLink: e => ({
          chain: t
        }) => {
          const {
            href: n
          } = e;
          return !!this.options.isAllowedUri(n, {
            defaultValidate: e => !!l(e, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) && t().toggleMark(this.name, e, {
            extendEmptyMarkRange: !0
          }).setMeta("preventAutolink", !0).run();
        },
        unsetLink: () => ({
          chain: e
        }) => e().unsetMark(this.name, {
          extendEmptyMarkRange: !0
        }).setMeta("preventAutolink", !0).run()
      };
    },
    addPasteRules() {
      return [o.markPasteRule({
        find: e => {
          const t = [];
          if (e) {
            const {
                protocols: n,
                defaultProtocol: o
              } = this.options,
              r = s.find(e).filter(e => e.isLink && this.options.isAllowedUri(e.value, {
                defaultValidate: e => !!l(e, n),
                protocols: n,
                defaultProtocol: o
              }));
            r.length && r.forEach(e => t.push({
              text: e.value,
              data: {
                href: e.href
              },
              index: e.start
            }));
          }
          return t;
        },
        type: this.type,
        getAttributes: e => {
          var t;
          return {
            href: null === (t = e.data) || void 0 === t ? void 0 : t.href
          };
        }
      })];
    },
    addProseMirrorPlugins() {
      const e = [],
        {
          protocols: t,
          defaultProtocol: n
        } = this.options;
      var i;
      return this.options.autolink && e.push((i = {
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: e => this.options.isAllowedUri(e, {
          defaultValidate: e => !!l(e, t),
          protocols: t,
          defaultProtocol: n
        }),
        shouldAutoLink: this.options.shouldAutoLink
      }, new r.Plugin({
        key: new r.PluginKey("autolink"),
        appendTransaction: (e, t, n) => {
          const r = e.some(e => e.docChanged) && !t.doc.eq(n.doc),
            d = e.some(e => e.getMeta("preventAutolink"));
          if (!r || d) return;
          const {
              tr: l
            } = n,
            u = o.combineTransactionSteps(t.doc, [...e]);
          return o.getChangedRanges(u).forEach(({
            newRange: e
          }) => {
            const t = o.findChildrenInRange(n.doc, e, e => e.isTextblock);
            let r, d;
            if (t.length > 1) r = t[0], d = n.doc.textBetween(r.pos, r.pos + r.node.nodeSize, void 0, " ");else if (t.length) {
              const o = n.doc.textBetween(e.from, e.to, " ", " ");
              if (!c.test(o)) return;
              r = t[0], d = n.doc.textBetween(r.pos, e.to, void 0, " ");
            }
            if (r && d) {
              const e = d.split(a).filter(Boolean);
              if (e.length <= 0) return !1;
              const t = e[e.length - 1],
                c = r.pos + d.lastIndexOf(t);
              if (!t) return !1;
              const h = s.tokenize(t).map(e => e.toObject(i.defaultProtocol));
              if (!(1 === (u = h).length ? u[0].isLink : 3 === u.length && u[1].isLink && ["()", "[]"].includes(u[0].value + u[2].value))) return !1;
              h.filter(e => e.isLink).map(e => ({
                ...e,
                from: c + e.start + 1,
                to: c + e.end + 1
              })).filter(e => !n.schema.marks.code || !n.doc.rangeHasMark(e.from, e.to, n.schema.marks.code)).filter(e => i.validate(e.value)).filter(e => i.shouldAutoLink(e.value)).forEach(e => {
                o.getMarksBetween(e.from, e.to, n.doc).some(e => e.mark.type === i.type) || l.addMark(e.from, e.to, i.type.create({
                  href: e.href
                }));
              });
            }
            var u;
          }), l.steps.length ? l : void 0;
        }
      }))), !0 === this.options.openOnClick && e.push(function (e) {
        return new r.Plugin({
          key: new r.PluginKey("handleClickLink"),
          props: {
            handleClick: (t, n, s) => {
              var r, i;
              if (0 !== s.button) return !1;
              if (!t.editable) return !1;
              let a = s.target;
              const c = [];
              for (; "DIV" !== a.nodeName;) c.push(a), a = a.parentNode;
              if (!c.find(e => "A" === e.nodeName)) return !1;
              const d = o.getAttributes(t.state, e.type.name),
                l = s.target,
                u = null !== (r = null == l ? void 0 : l.href) && void 0 !== r ? r : d.href,
                h = null !== (i = null == l ? void 0 : l.target) && void 0 !== i ? i : d.target;
              return !(!l || !u || (window.open(u, h), 0));
            }
          }
        });
      }({
        type: this.type
      })), this.options.linkOnPaste && e.push(function (e) {
        return new r.Plugin({
          key: new r.PluginKey("handlePasteLink"),
          props: {
            handlePaste: (t, n, o) => {
              const {
                  state: r
                } = t,
                {
                  selection: i
                } = r,
                {
                  empty: a
                } = i;
              if (a) return !1;
              let c = "";
              o.content.forEach(e => {
                c += e.textContent;
              });
              const d = s.find(c, {
                defaultProtocol: e.defaultProtocol
              }).find(e => e.isLink && e.value === c);
              return !(!c || !d) && e.editor.commands.setMark(e.type, {
                href: d.href
              });
            }
          }
        });
      }({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type
      })), e;
    }
  });
  t.Link = u, t.default = u, t.isAllowedUri = l, t.pasteRegex = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)/gi;
});
