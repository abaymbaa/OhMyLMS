// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Yte = (null === (Ute = window.ohmylms_params) || void 0 === Ute ? void 0 : Ute.plugin_assets) + "images/",
  Qte = function (e) {
    var t = e.onTabChange,
      n = (e.onWizardSkip, function (e, t) {
        return function (e) {
          if (Array.isArray(e)) return e;
        }(e) || function (e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
            var r,
              a,
              o,
              i,
              l = [],
              c = !0,
              u = !1;
            try {
              if (o = (n = n.call(e)).next, 0 === t) {
                if (Object(n) !== n) return;
                c = !1;
              } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
            } catch (e) {
              u = !0, a = e;
            } finally {
              try {
                if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return;
              } finally {
                if (u) throw a;
              }
            }
            return l;
          }
        }(e, t) || function (e, t) {
          if (e) {
            if ("string" == typeof e) return qte(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qte(e, t) : void 0;
          }
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((0, g.useState)(!1), 2)),
      r = n[0],
      a = n[1],
      o = (0, y.useDispatch)(T.default),
      i = (0, y.useSelect)(function (e) {
        return e(T.default).getSetupWizardData();
      }, []);
    return React.createElement(React.Fragment, null, React.createElement(I.ContainerWP, null, React.createElement(I.SpacerWP, {
      marginBottom: 0,
      paddingY: 12
    }, React.createElement(I.FlexWP, {
      items: "center",
      justify: "center"
    }, React.createElement(Wte, null)), React.createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 19
    }, React.createElement(I.FlexWP, {
      direction: "column",
      items: "center",
      justify: "center",
      gap: 4
    }, React.createElement(I.HeadingWP, {
      as: "h1",
      align: "center",
      size: "24",
      weight: "600"
    }, "👋   ", (0, b.__)("Welcome to OhMyLMS!", "ohmylms")), React.createElement(I.TextWP, {
      as: "p",
      align: "center",
      size: "18",
      weight: "400",
      color: "#687784",
      style: {
        maxWidth: "500px",
        margin: "0 auto"
      }
    }, (0, b.__)("Let's personalize your journey so we can set everything up perfectly for you. 🎯", "ohmylms")))), React.createElement(I.SpacerWP, {
      align: "center",
      className: "ohmylms-setup-wizard-welcome-image-wrapper"
    }, React.createElement(I.FlexWP, {
      items: "center",
      justify: "center",
      className: "ohmylms-setup-wizard-welcome-image-flex"
    }, React.createElement("img", {
      src: Yte + "setup-wizard-img.webp",
      alt: (0, b.__)("Setup Wizard", "ohmylms"),
      style: {
        maxWidth: "460px",
        display: "block"
      }
    }))), React.createElement(I.FlexWP, {
      items: "center",
      justify: "center",
      gap: 3
    }, React.createElement(I.ButtonWP, {
      variant: "secondary",
      onClick: function () {
        a(!0);
      }
    }, React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none"
    }, React.createElement("path", {
      d: "M4 2.66661V13.3333C3.99997 13.4519 4.03158 13.5684 4.09159 13.6707C4.15159 13.773 4.23781 13.8575 4.34135 13.9154C4.44489 13.9733 4.562 14.0025 4.68059 14C4.79918 13.9975 4.91497 13.9634 5.016 13.9013L13.6827 8.56794C13.7797 8.5083 13.8599 8.42477 13.9155 8.32534C13.9711 8.2259 14.0003 8.11387 14.0003 7.99994C14.0003 7.88602 13.9711 7.77399 13.9155 7.67455C13.8599 7.57512 13.7797 7.49159 13.6827 7.43194L5.016 2.09861C4.91497 2.03645 4.79918 2.00238 4.68059 1.9999C4.562 1.99742 4.44489 2.02663 4.34135 2.08452C4.23781 2.1424 4.15159 2.22686 4.09159 2.32919C4.03158 2.43151 3.99997 2.54799 4 2.66661Z",
      fill: "#444D5E"
    })), React.createElement("span", {
      style: {
        marginLeft: "8px",
        color: "#444D5E"
      }
    }, (0, b.__)("Watch 60s overview", "ohmylms"))), React.createElement(I.ButtonWP, {
      variant: "primary",
      onClick: function () {
        t("wizard-level-selection");
      }
    }, (0, b.__)("Let's Start", "ohmylms"))), React.createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 10
    }, React.createElement(I.FlexWP, {
      align: "center",
      justify: "center",
      direction: "column",
      gap: 8
    }, React.createElement(I.CheckboxWP, {
      value: i.isOptEnabled,
      onChange: function (e) {
        o.setSetupWizardData({
          isOptEnabled: e
        });
      },
      label: (0, b.__)("Send me tips to build my OhMyLMS faster", "ohmylms"),
      checked: i.isOptEnabled,
      className: "ohmylms-setup-wizard-optin-checkbox"
    }), React.createElement(I.TextWP, {
      as: "p",
      align: "center",
      size: "12",
      weight: "400",
      color: "#687784"
    }, (0, b.__)("We'll only send helpful guidance. No promotions, no noise — unsubscribe anytime.", "ohmylms")))))), r && React.createElement(I.ModalWP, {
      isOpen: r,
      onRequestClose: function () {
        a(!1);
      },
      maxWidth: "900px",
      shouldCloseOnEsc: !0,
      shouldCloseOnClickOutside: !0,
      size: "fill",
      style: {
        maxWidth: "790px",
        background: "#FFFFFF"
      }
    }, React.createElement("div", {
      style: {
        width: "100%",
        aspectRatio: "16/9"
      }
    }, React.createElement("iframe", {
      width: "100%",
      height: "100%",
      src: "https://www.youtube.com/embed/ENT4kK88gNs?autoplay=1",
      title: "YouTube video player",
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: !0,
      style: {
        borderRadius: "8px"
      }
    }))));
  };

const Zte = (0, g.memo)(Qte);

function $te(e, t) {
  return function (e) {
    if (Array.isArray(e)) return e;
  }(e) || function (e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
      var r,
        a,
        o,
        i,
        l = [],
        c = !0,
        u = !1;
      try {
        if (o = (n = n.call(e)).next, 0 === t) {
          if (Object(n) !== n) return;
          c = !1;
        } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
      } catch (e) {
        u = !0, a = e;
      } finally {
        try {
          if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return;
        } finally {
          if (u) throw a;
        }
      }
      return l;
    }
  }(e, t) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return Kte(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Kte(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Kte(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Jte = function (e) {
    var t = e.icon,
      n = e.title,
      r = e.description,
      a = e.isSelected,
      o = e.onClick,
      i = $te((0, g.useState)(!1), 2),
      l = i[0],
      c = i[1];
    return h().createElement("div", {
      className: "ohmylms-setup-wizard__card",
      style: {
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "8px 9px",
        width: "264px",
        boxShadow: "0px 2px 3px 0px rgba(147, 130, 171, 0.05), 0px 4px 5px 0px rgba(85, 85, 85, 0.04), 0px 4px 5px 0px rgba(85, 85, 85, 0.03), 0px 16px 16px 0px rgba(85, 85, 85, 0.02)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        border: a ? "1px solid #6e42d3" : "1px solid transparent",
        position: "relative",
        transform: l && !a ? "translateY(-2px)" : "none"
      },
      onClick: o,
      onMouseEnter: function () {
        return c(!0);
      },
      onMouseLeave: function () {
        return c(!1);
      },
      role: "button",
      tabIndex: 0,
      onKeyPress: function (e) {
        "Enter" !== e.key && " " !== e.key || o();
      }
    }, h().createElement("div", {
      className: "ohmylms-setup-wizard__card-inner",
      style: {
        borderRadius: "16px",
        width: "100%"
      }
    }, h().createElement("div", {
      className: "ohmylms-setup-wizard__card-content",
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "8px",
        width: "100%"
      }
    }, h().createElement("div", {
      className: "ohmylms-setup-wizard__info",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "112px",
        alignItems: "flex-start",
        width: "220px"
      }
    }, h().createElement("div", {
      className: "ohmylms-setup-wizard__icon-wrapper",
      style: {
        backgroundColor: "#f4f5f7",
        width: "29px",
        height: "29px",
        borderRadius: "29px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "7.25px"
      }
    }, t), h().createElement("div", {
      className: "ohmylms-setup-wizard__text-content",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "flex-start",
        width: "100%"
      }
    }, h().createElement("h3", {
      className: "ohmylms-setup-wizard__title",
      style: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "1.3",
        color: "#000d25",
        margin: 0,
        width: "100%",
        whiteSpace: "pre-wrap"
      }
    }, n), r && h().createElement("div", {
      className: "ohmylms-setup-wizard__caption",
      style: {
        display: "flex",
        alignItems: "center",
        width: "100%"
      }
    }, h().createElement("p", {
      className: "ohmylms-setup-wizard__description",
      style: {
        fontFamily: "DM Sans, sans-serif",
        fontWeight: 500,
        fontSize: "13px",
        lineHeight: "16px",
        color: "#687784",
        letterSpacing: "-0.13px",
        margin: 0,
        width: "220px",
        whiteSpace: "pre-wrap"
      }
    }, r)))))), a && h().createElement("div", {
      className: "ohmylms-setup-wizard__check",
      style: {
        position: "absolute",
        height: "16px",
        width: "16px",
        left: "88.64%",
        top: "calc(50% - 48px)"
      }
    }, h().createElement("svg", {
      style: {
        display: "block",
        width: "100%",
        height: "100%"
      },
      fill: "none",
      preserveAspectRatio: "none",
      viewBox: "0 0 16 16"
    }, h().createElement("rect", {
      fill: "#6E42D3",
      height: "14",
      rx: "7",
      stroke: "#6E42D3",
      strokeWidth: "2",
      width: "14",
      x: "1",
      y: "1"
    }), h().createElement("path", {
      d: "M10.7113 5.06584L6.44327 9.33378L4.48718 7.37764C4.19258 7.08304 3.71485 7.08299 3.4202 7.37759C3.12556 7.67223 3.12556 8.14991 3.4202 8.44456L5.90976 10.9342C6.05124 11.0757 6.24313 11.1552 6.44322 11.1552H6.44327C6.64335 11.1552 6.83524 11.0757 6.97673 10.9343L11.7782 6.13286C12.0729 5.83821 12.0729 5.36053 11.7782 5.06589C11.4836 4.77124 11.0059 4.77119 10.7113 5.06584Z",
      fill: "white"
    }))));
  },
  Xte = function () {
    return h().createElement("div", {
      className: "ohmylms-setup-wizard__svg-icon"
    }, h().createElement("svg", {
      style: {
        display: "block"
      },
      width: "29",
      height: "29",
      viewBox: "0 0 29 29",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h().createElement("rect", {
      width: "29",
      height: "29",
      rx: "14.5",
      fill: "#F4F5F7"
    }), h().createElement("g", {
      clipPath: "url(#clip0_3024_1944)"
    }, h().createElement("path", {
      d: "M19.3386 16.4418C18.7392 16.8062 18.0507 16.9978 17.3493 16.9956C16.7616 16.9909 16.1806 16.8707 15.6393 16.6418C15.2221 17.2308 14.9988 17.9351 15.0005 18.6568V20.5C15.0007 20.5685 14.9867 20.6363 14.9595 20.6993C14.9324 20.7622 14.8926 20.8189 14.8426 20.8658C14.7926 20.9126 14.7335 20.9488 14.6689 20.9718C14.6044 20.9949 14.5358 21.0045 14.4674 21C14.3389 20.9888 14.2193 20.9294 14.1327 20.8338C14.0462 20.7382 13.9989 20.6133 14.0005 20.4843V19.7068L11.5868 17.2931C11.2279 17.4269 10.8485 17.497 10.4655 17.5C9.9383 17.5013 9.42095 17.3571 8.97051 17.0831C7.60864 16.2556 6.87551 14.3512 7.01739 11.9868C7.02453 11.8645 7.07634 11.7491 7.16298 11.6624C7.24962 11.5758 7.36506 11.524 7.48739 11.5168C9.85176 11.3775 11.7561 12.1081 12.5811 13.47C12.9053 14.0038 13.0468 14.6286 12.9843 15.25C12.9804 15.2981 12.9626 15.3441 12.9332 15.3824C12.9037 15.4206 12.8638 15.4495 12.8182 15.4656C12.7727 15.4817 12.7234 15.4842 12.6765 15.4729C12.6295 15.4616 12.5869 15.4369 12.5536 15.4018L11.3536 14.1456C11.2591 14.0558 11.1332 14.0064 11.0028 14.0081C10.8725 14.0098 10.7479 14.0623 10.6557 14.1545C10.5635 14.2467 10.511 14.3713 10.5093 14.5017C10.5076 14.6321 10.557 14.7579 10.6468 14.8525L14.0143 18.3056C14.018 18.2568 14.0224 18.2081 14.0274 18.16C14.1367 17.2329 14.5458 16.367 15.1924 15.6937L18.3543 12.3525C18.4481 12.2587 18.5008 12.1316 18.5009 11.9989C18.5009 11.8663 18.4483 11.7391 18.3546 11.6453C18.2608 11.5514 18.1337 11.4987 18.001 11.4987C17.8684 11.4986 17.7412 11.5512 17.6474 11.645L14.5849 14.8837C14.5542 14.9162 14.5154 14.9398 14.4725 14.9522C14.4296 14.9647 14.3842 14.9653 14.341 14.9542C14.2977 14.9431 14.2582 14.9207 14.2266 14.8891C14.195 14.8576 14.1724 14.8182 14.1611 14.775C13.8649 13.6825 13.9955 12.595 14.5611 11.6612C15.6774 9.81871 18.2749 8.83246 21.5099 9.02246C21.6322 9.0296 21.7476 9.08141 21.8343 9.16805C21.9209 9.2547 21.9727 9.37014 21.9799 9.49246C22.1674 12.7281 21.1811 15.3256 19.3386 16.4418Z",
      fill: "#0CAE32"
    })), h().createElement("defs", null, h().createElement("clipPath", {
      id: "clip0_3024_1944"
    }, h().createElement("rect", {
      width: "16",
      height: "16",
      fill: "white",
      transform: "translate(6.5 6.5)"
    })))));
  },
  ene = function () {
    return h().createElement("div", {
      className: "ohmylms-setup-wizard__svg-icon"
    }, h().createElement("svg", {
      style: {
        display: "block"
      },
      width: "29",
      height: "29",
      viewBox: "0 0 29 29",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h().createElement("rect", {
      width: "29",
      height: "29",
      rx: "14.5",
      fill: "#F4F5F7"
    }), h().createElement("path", {
      d: "M15.0986 6.82483C15.0986 6.66736 15.0361 6.51633 14.9247 6.40498C14.8134 6.29363 14.6624 6.23108 14.5049 6.23108C14.3474 6.23108 14.1964 6.29363 14.085 6.40498C13.9737 6.51633 13.9111 6.66736 13.9111 6.82483V7.9965C13.9111 8.15397 13.9737 8.30499 14.085 8.41634C14.1964 8.52769 14.3474 8.59025 14.5049 8.59025C14.6624 8.59025 14.8134 8.52769 14.9247 8.41634C15.0361 8.30499 15.0986 8.15397 15.0986 7.9965V6.82483ZM19.1448 13.1502C18.9799 12.5087 18.6803 11.9096 18.2661 11.3927C17.8554 10.8722 17.3404 10.4435 16.754 10.134C16.1691 9.82698 15.5283 9.64119 14.8698 9.58775C14.2096 9.53814 13.5462 9.62713 12.9223 9.849C12.295 10.0677 11.7206 10.4157 11.2361 10.8702C10.7568 11.3172 10.3719 11.8555 10.104 12.4536C9.8422 13.0608 9.71008 13.7161 9.71609 14.3773C9.69774 15.1411 9.86116 15.8983 10.1929 16.5865C10.5246 17.2747 11.0151 17.8742 11.624 18.3357L11.9011 18.5969C12.1386 18.8423 12.1386 18.8423 12.1307 19.3886V19.6419C12.1211 19.8171 12.1481 19.9923 12.2098 20.1565C12.2653 20.3322 12.3634 20.493 12.4948 20.6236C12.555 20.6853 12.621 20.7407 12.6928 20.7898V21.5815C12.6797 21.7251 12.6952 21.8698 12.7384 22.0074C12.7816 22.1449 12.8515 22.2726 12.9443 22.3829C13.037 22.4933 13.1506 22.5843 13.2787 22.6505C13.4067 22.7168 13.5466 22.757 13.6903 22.769H15.2736C15.5644 22.7448 15.8336 22.6061 16.0222 22.3834C16.2107 22.1607 16.3031 21.8723 16.279 21.5815V20.7898C16.3505 20.7413 16.4168 20.6856 16.4769 20.6236C16.6012 20.4922 16.6962 20.3354 16.754 20.1644C16.8147 19.9972 16.8416 19.8196 16.8332 19.6419V19.349C16.8332 18.9136 16.8332 18.9136 17.0786 18.6365L17.3794 18.3594C18.3944 17.57 19.0572 16.4123 19.224 15.1373C19.3406 14.477 19.3136 13.7992 19.1448 13.1502ZM15.1311 21.5657H13.8803V21.0669H15.1311V21.5657ZM14.5057 13.2057C14.2474 13.2057 13.9997 13.3083 13.8171 13.4909C13.6345 13.6735 13.5319 13.9212 13.5319 14.1794C13.5319 14.3894 13.4485 14.5907 13.3001 14.7392C13.1516 14.8877 12.9502 14.9711 12.7403 14.9711C12.5303 14.9711 12.3289 14.8877 12.1805 14.7392C12.032 14.5907 11.9486 14.3894 11.9486 14.1794C11.9465 13.843 12.0112 13.5096 12.139 13.1984C12.2667 12.8872 12.455 12.6045 12.6929 12.3666C12.9307 12.1287 13.2135 11.9405 13.5246 11.8127C13.8358 11.6849 14.1693 11.6202 14.5057 11.6223C14.7156 11.6223 14.917 11.7057 15.0655 11.8542C15.2139 12.0027 15.2973 12.204 15.2973 12.414C15.2973 12.624 15.2139 12.8253 15.0655 12.9738C14.917 13.1223 14.7156 13.2057 14.5057 13.2057ZM21.7573 15.1848H20.3086C20.1511 15.1848 20.0001 15.1223 19.8887 15.0109C19.7774 14.8996 19.7148 14.7486 19.7148 14.5911C19.7148 14.4336 19.7774 14.2826 19.8887 14.1712C20.0001 14.0599 20.1511 13.9973 20.3086 13.9973H21.7573C21.9148 13.9973 22.0658 14.0599 22.1772 14.1712C22.2885 14.2826 22.3511 14.4336 22.3511 14.5911C22.3511 14.7486 22.2885 14.8996 22.1772 15.0109C22.0658 15.1223 21.9148 15.1848 21.7573 15.1848ZM18.844 10.4269C18.766 10.4273 18.6887 10.4121 18.6166 10.3822C18.5446 10.3522 18.4792 10.3083 18.4244 10.2527C18.3132 10.1414 18.2508 9.99051 18.2508 9.83316C18.2508 9.67582 18.3132 9.52491 18.4244 9.41358L19.4536 8.38441C19.5661 8.27953 19.715 8.22243 19.8688 8.22515C20.0227 8.22786 20.1694 8.29018 20.2782 8.39896C20.387 8.50775 20.4493 8.65451 20.452 8.80833C20.4547 8.96215 20.3976 9.11102 20.2928 9.22358L19.2636 10.2527C19.209 10.3086 19.1437 10.3529 19.0716 10.3828C18.9995 10.4127 18.9221 10.4277 18.844 10.4269ZM20.6648 20.2752C20.5083 20.2711 20.3588 20.209 20.2453 20.1011L19.2161 19.0719C19.1465 19.003 19.0951 18.9179 19.0664 18.8242C19.0377 18.7306 19.0326 18.6313 19.0516 18.5352C19.0705 18.4392 19.113 18.3493 19.1751 18.2735C19.2372 18.1978 19.3171 18.1387 19.4077 18.1013C19.5163 18.0555 19.6362 18.0436 19.7518 18.067C19.8673 18.0905 19.9731 18.1482 20.0553 18.2327L21.0844 19.2619C21.1404 19.3165 21.185 19.3817 21.2154 19.4538C21.2458 19.5259 21.2614 19.6033 21.2614 19.6815C21.2614 19.7597 21.2458 19.8371 21.2154 19.9092C21.185 19.9813 21.1404 20.0465 21.0844 20.1011C20.9732 20.2125 20.8223 20.2751 20.6648 20.2752ZM10.1753 10.4269C10.0178 10.4268 9.86692 10.3641 9.75568 10.2527L8.72651 9.22358C8.61523 9.11125 8.55313 8.95931 8.55387 8.8012C8.55462 8.64308 8.61814 8.49173 8.73047 8.38045C8.8428 8.26917 8.99473 8.20707 9.15285 8.20782C9.31097 8.20856 9.46231 8.27208 9.57359 8.38441L10.5948 9.41358C10.6778 9.49661 10.7342 9.60236 10.7571 9.71747C10.78 9.83258 10.7682 9.95188 10.7233 10.0603C10.6784 10.1687 10.6024 10.2614 10.5049 10.3267C10.4073 10.3919 10.2926 10.4268 10.1753 10.4269ZM8.36234 20.2752C8.28407 20.2775 8.20621 20.2632 8.13388 20.2331C8.06156 20.2031 7.99642 20.1581 7.94276 20.1011C7.83157 19.9898 7.76912 19.8388 7.76912 19.6815C7.76912 19.5242 7.83157 19.3732 7.94276 19.2619L8.97193 18.2327C9.08448 18.1279 9.23335 18.0708 9.38717 18.0735C9.541 18.0762 9.68776 18.1385 9.79654 18.2473C9.90533 18.3561 9.96764 18.5028 9.97036 18.6567C9.97307 18.8105 9.91597 18.9594 9.81109 19.0719L8.78984 20.109C8.67312 20.2159 8.52061 20.2752 8.36234 20.2752ZM8.69484 15.1848H7.24609C7.08862 15.1848 6.9376 15.1223 6.82625 15.0109C6.7149 14.8996 6.65234 14.7486 6.65234 14.5911C6.65234 14.4336 6.7149 14.2826 6.82625 14.1712C6.9376 14.0599 7.08862 13.9973 7.24609 13.9973H8.69484C8.85232 13.9973 9.00334 14.0599 9.11469 14.1712C9.22604 14.2826 9.28859 14.4336 9.28859 14.5911C9.28859 14.7486 9.22604 14.8996 9.11469 15.0109C9.00334 15.1223 8.85232 15.1848 8.69484 15.1848Z",
      fill: "#FFB423"
    })));
  },
  tne = function () {
    return h().createElement("div", {
      className: "ohmylms-setup-wizard__svg-icon"
    }, h().createElement("svg", {
      style: {
        display: "block"
      },
      width: "29",
      height: "29",
      viewBox: "0 0 29 29",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h().createElement("rect", {
      width: "29",
      height: "29",
      rx: "14.5",
      fill: "#F4F5F7"
    }), h().createElement("path", {
      d: "M21.5805 16.5352L21.7494 14.878C21.8395 13.9934 21.8981 13.4097 21.8517 13.0414H21.8693C22.6314 13.0414 23.25 12.3886 23.25 11.5836C23.25 10.7786 22.6314 10.125 21.8684 10.125C21.1054 10.125 20.4867 10.7778 20.4867 11.5836C20.4867 11.9476 20.6136 12.281 20.8228 12.5365C20.5226 12.7316 20.1297 13.1446 19.5382 13.7659C19.0832 14.2445 18.8558 14.4834 18.602 14.521C18.461 14.5411 18.3172 14.5198 18.1881 14.4598C17.9536 14.3513 17.797 14.0555 17.4846 13.4631L15.8361 10.3438C15.6436 9.97888 15.4817 9.6735 15.3356 9.42763C15.9333 9.10563 16.3419 8.45025 16.3419 7.69513C16.3419 6.61975 15.5176 5.75 14.5 5.75C13.4824 5.75 12.6581 6.62063 12.6581 7.69425C12.6581 8.45025 13.0668 9.10563 13.6644 9.42675C13.5182 9.6735 13.3572 9.97888 13.1639 10.3438L11.5163 13.464C11.203 14.0555 11.0464 14.3512 10.8119 14.4606C10.6828 14.5207 10.539 14.542 10.398 14.5219C10.1442 14.4843 9.91675 14.2445 9.46175 13.7659C8.87025 13.1446 8.47738 12.7316 8.17725 12.5365C8.38725 12.281 8.51325 11.9476 8.51325 11.5828C8.51325 10.7786 7.89375 10.125 7.13075 10.125C6.3695 10.125 5.75 10.7778 5.75 11.5836C5.75 12.3886 6.36863 13.0414 7.13162 13.0414H7.14825C7.101 13.4089 7.1605 13.9934 7.25062 14.878L7.4195 16.5352C7.51312 17.4549 7.591 18.3299 7.68725 19.1182H21.3127C21.409 18.3307 21.4869 17.4549 21.5805 16.5352ZM13.4981 23.25H15.5019C18.1138 23.25 19.4201 23.25 20.2916 22.4275C20.6714 22.067 20.9129 21.4195 21.0861 20.576H7.91388C8.08713 21.4195 8.32775 22.067 8.70837 22.4266C9.57987 23.25 10.8862 23.25 13.4981 23.25Z",
      fill: "#9B5DFF"
    })));
  };

function nne() {
  var e,
    t = (0, y.useDispatch)(T.default),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getSetupWizardData();
    }, []),
    r = $te((0, g.useState)(null !== (e = null == n ? void 0 : n.level) && void 0 !== e ? e : "beginner"), 2),
    a = r[0],
    o = r[1],
    i = [{
      id: "beginner",
      icon: h().createElement(Xte, null),
      title: (0, b.__)("Beginner", "ohmylms"),
      description: (0, b.__)("I'm totally new to online course creation", "ohmylms")
    }, {
      id: "intermediate",
      icon: h().createElement(ene, null),
      title: (0, b.__)("Intermediate", "ohmylms"),
      description: (0, b.__)("I have some experience and content ready", "ohmylms")
    }, {
      id: "experienced",
      icon: h().createElement(tne, null),
      title: (0, b.__)("Experienced", "ohmylms"),
      description: (0, b.__)("Scaling an existing course business", "ohmylms")
    }];
  return h().createElement("div", {
    className: "ohmylms-setup-wizard-level-selection-wrapper ohmylms-setup-wizard-card-wrapper"
  }, h().createElement("div", {
    className: "ohmylms-setup-wizard__container"
  }, h().createElement("div", {
    className: "ohmylms-setup-wizard__header"
  }, h().createElement(I.HeadingWP, {
    as: "h2",
    color: "#000d25",
    size: "24",
    align: "center",
    weight: "600"
  }, (0, b.__)("Where are you in your course-creation journey?", "ohmylms")), h().createElement(I.TextWP, {
    as: "p",
    size: "18",
    color: "#687784",
    align: "center",
    weight: "400",
    style: {
      maxWidth: "400px",
      margin: "auto"
    }
  }, (0, b.__)("No matter where you're starting, we'll guide you step by step.", "ohmylms"))), h().createElement("div", {
    className: "ohmylms-setup-wizard__cards-container",
    style: {
      display: "flex",
      gap: "16px",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, i.map(function (e) {
    return h().createElement(Jte, {
      key: e.id,
      icon: e.icon,
      title: e.title,
      description: e.description,
      isSelected: a === e.id,
      onClick: function () {
        return function (e) {
          o(e), t.setSetupWizardData({
            level: e
          });
        }(e.id);
      }
    });
  }))));
}

var rne = function (e) {
  var t = e.onTabChange,
    n = e.onWizardSkip,
    r = ((0, y.useDispatch)(T.default), (0, y.useSelect)(function (e) {
      return e(T.default).getSetupWizardData();
    }, []));
  return React.createElement(React.Fragment, null, React.createElement(Gte, {
    isShowIndicator: !1,
    onSkip: function () {
      return null == n ? void 0 : n("level-selection");
    }
  }), React.createElement(I.ContainerWP, null, React.createElement(nne, null), React.createElement(I.SpacerWP, {
    marginBottom: 0,
    marginTop: 6
  }, React.createElement(I.FlexWP, {
    items: "center",
    justify: "between",
    gap: 4,
    style: {
      maxWidth: "884px",
      justifyContent: "space-between",
      margin: "0 auto"
    }
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: function () {
      t("wizard-welcome");
    }
  }, (0, b.__)("Back", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: function () {
      "beginner" === (null == r ? void 0 : r.level) ? t("wizard-niche") : t("wizard-preferences");
    }
  }, (0, b.__)("Continue", "ohmylms"))))));
};

const ane = (0, g.memo)(rne);

var one = function () {
  var e = (0, y.useDispatch)(T.default),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getSetupWizardData();
    }, []);
  return React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    marginBottom: "0",
    className: "ohmylms-setup-wizard-preference-certificates-wrapper"
  }, React.createElement(I.FlexWP, {
    align: "stretch",
    justify: "space-between",
    gap: 4
  }, hB.slice(0, 3).map(function (n) {
    return React.createElement("div", {
      key: n.id,
      className: "cert-card ".concat(t.certificate === n.id ? "active" : ""),
      onClick: function () {
        return t = n.id, void e.setSetupWizardData({
          certificate: t
        });
        var t;
      }
    }, React.createElement("img", {
      src: n.image_src,
      alt: "Certificate"
    }), t.certificate === n.id && React.createElement("div", {
      className: "cert-check"
    }, React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "19",
      height: "19",
      viewBox: "0 0 19 19",
      fill: "none"
    }, React.createElement("rect", {
      x: "1",
      y: "1",
      width: "16.4186",
      height: "16.4186",
      rx: "8.2093",
      fill: "#6E42D3",
      stroke: "#6E42D3",
      strokeWidth: "2"
    }), React.createElement("path", {
      d: "M12.3312 5.83151L7.41802 10.7446L5.16624 8.49277C4.82711 8.15364 4.27717 8.15358 3.93798 8.49271C3.5988 8.83189 3.5988 9.38178 3.93798 9.72097L6.80386 12.587C6.96674 12.7498 7.18763 12.8414 7.41797 12.8414H7.41802C7.64835 12.8414 7.86925 12.7498 8.03212 12.587L13.5594 7.05983C13.8986 6.72064 13.8986 6.17075 13.5594 5.83157C13.2203 5.49238 12.6704 5.49232 12.3312 5.83151Z",
      fill: "white"
    }))));
  })), React.createElement(I.TextWP, {
    as: "p",
    size: "14",
    weight: "400",
    color: "#687784",
    style: {
      marginTop: "10px"
    }
  }, (0, b.__)("Pick any template for now — you can switch templates later from Course Settings.", "ohmylms"))));
};

const ine = (0, g.memo)(one);

function lne(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
