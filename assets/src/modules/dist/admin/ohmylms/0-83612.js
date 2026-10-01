// Reconstructed Webpack factory 83612; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    default: () => p
  });
  var r = n(41594);
  function a() {
    return React.createElement("svg", {
      width: "12",
      height: "18",
      fill: "none",
      viewBox: "0 0 12 18"
    }, React.createElement("path", {
      fill: "#7A8B9A",
      d: "M5.438 13.604a.646.646 0 01-.646-.647c0-.846.12-1.576.358-2.19.176-.464.46-.93.851-1.402.288-.344.804-.845 1.55-1.503.747-.659 1.232-1.183 1.456-1.574a2.53 2.53 0 00.335-1.282c0-.839-.328-1.574-.982-2.209-.654-.635-1.456-.952-2.407-.952-.918 0-1.685.288-2.299.863-.449.42-.786 1.013-1.01 1.779a1.121 1.121 0 01-1.209.796A1.122 1.122 0 01.49 3.854c.302-1.023.808-1.848 1.518-2.474C2.993.507 4.296.072 5.918.072c1.715 0 3.084.467 4.107 1.401 1.022.935 1.532 2.064 1.532 3.39 0 .766-.18 1.473-.539 2.118-.358.647-1.062 1.433-2.107 2.36-.702.622-1.161 1.082-1.377 1.377a3.05 3.05 0 00-.48 1.018c-.076.284-.129.702-.158 1.25a.652.652 0 01-.65.617h-.808v.001zM4.672 16.7a1.228 1.228 0 112.455 0 1.228 1.228 0 01-2.455 0z"
    }));
  }
  const o = (0, r.memo)(a);
  function i() {
    return React.createElement("svg", {
      width: "14",
      height: "15",
      fill: "none",
      viewBox: "0 0 14 15"
    }, React.createElement("path", {
      fill: "#7A8B9A",
      stroke: "#7A8B9A",
      strokeWidth: ".9",
      d: "M2.875 13.751c-.315 0-.624-.085-.895-.245a1.698 1.698 0 01-.855-1.476V2.722a1.698 1.698 0 01.855-1.477 1.757 1.757 0 011.767-.013l8.25 4.654a1.703 1.703 0 010 2.98l-8.25 4.655c-.266.15-.567.23-.872.23zm0-12a1.018 1.018 0 00-.87.491.955.955 0 00-.13.48v9.309a.955.955 0 00.483.829 1.014 1.014 0 001.02.008l8.25-4.655a.953.953 0 000-1.674l-8.25-4.654a1.026 1.026 0 00-.503-.134z"
    }));
  }
  const l = (0, r.memo)(i);
  var c = n(44254),
    u = n(61696);
  function s(e, t) {
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
        if ("string" == typeof e) return d(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function m(e) {
    var t,
      n,
      a,
      i,
      d,
      m = e.docLink,
      p = void 0 === m ? "https://getwpfunnels.com/docs/mail-mint/?utm_source=mm-help-doc-option&utm_medium=mm-help-doc&utm_campaign=mm-help-to-doc" : m,
      f = e.groupLink,
      v = void 0 === f ? "https://www.facebook.com/groups/wpfunnels" : f,
      g = e.youtubeLink,
      h = void 0 === g ? "https://www.youtube.com/@WPFunnels" : g,
      y = e.videoLink,
      b = void 0 === y ? "https://www.youtube.com/embed/xmvZ0hDY4J8" : y,
      _ = e.showVideo,
      w = void 0 !== _ && _,
      E = e.automationEditor,
      S = void 0 !== E && E,
      R = e.playLists,
      x = s((0, r.useState)(!1), 2),
      C = (x[0], x[1]),
      P = s((0, r.useState)(!1), 2),
      O = P[0],
      k = P[1],
      j = s((0, r.useState)(!1), 2),
      A = j[0],
      M = j[1],
      T = s((0, r.useState)(!1), 2),
      I = T[0],
      F = T[1],
      N = (0, r.useRef)(null),
      D = (0, r.useRef)(null),
      W = s((0, r.useState)(b), 2),
      z = W[0],
      B = W[1];
    return (0, u.useOutsideAlerter)(N, M), (0, u.useOutsideAlerter)(D, F), React.createElement(React.Fragment, null, React.createElement("div", {
      className: "help-resouce-wrapper"
    }, w && React.createElement("div", {
      className: "dropdown-playlist-wrapper",
      ref: D
    }, React.createElement("button", {
      onClick: function () {
        S ? F(!I) : (C(!0), k(!0), B("".concat(b, "?autoplay=1")));
      },
      className: "video-section"
    }, React.createElement(l, null), React.createElement("p", {
      className: "title"
    }, (null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.mint_trans.Video) || "Video")), S && React.createElement("ul", {
      className: "mintmrm-dropdown ".concat(I ? "show" : "")
    }, R.map(function (e, t) {
      return "Automation Overview" === e.title ? React.createElement("li", {
        key: t,
        onClick: function () {
          return t = e.videoLink, B(t), B("".concat(t, "?autoplay=1")), k(!0), void F(!1);
          var t;
        }
      }, React.createElement("a", null, e.title)) : React.createElement("li", {
        key: t,
        onClick: function () {
          return F(!1);
        }
      }, React.createElement("a", {
        target: "_blank",
        href: e.videoLink
      }, e.title));
    }))), React.createElement("div", {
      className: "dropdown-list-wrapper",
      ref: N
    }, React.createElement("div", {
      className: "help-dropdown-section",
      onClick: function () {
        M(!A);
      }
    }, React.createElement(o, null)), React.createElement("ul", {
      className: "mintmrm-dropdown ".concat(A ? "show" : "")
    }, React.createElement("li", {
      onClick: function () {
        return M(!1);
      }
    }, React.createElement("a", {
      target: "_blank",
      href: p
    }, (null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n ? void 0 : n.mint_trans.Documentation) || "Documentation")), React.createElement("li", {
      onClick: function () {
        return M(!1);
      }
    }, React.createElement("a", {
      target: "_blank",
      href: v
    }, (null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a ? void 0 : a.mint_trans.SocialGroup) || "Social Group")), React.createElement("li", {
      onClick: function () {
        return M(!1);
      }
    }, React.createElement("a", {
      target: "_blank",
      href: h
    }, (null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i ? void 0 : i.mint_trans.YoutubeVideo) || "Youtube Video"))))), O && React.createElement("div", {
      className: "iframe-modal"
    }, React.createElement("div", {
      className: "modal-content"
    }, React.createElement("button", {
      onClick: function () {
        C(!1), k(!1);
      },
      className: "cross-icon"
    }, React.createElement(c.A, null)), React.createElement("iframe", {
      className: "video-link",
      width: "560",
      height: "315",
      src: z,
      title: (null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d ? void 0 : d.mint_trans.YouTubeVideoPlayer) || "YouTube Video Player",
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowFullScreen: !0
    }))));
  }
  n(12470);
  const p = (0, r.memo)(m);
});
