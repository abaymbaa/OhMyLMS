// Reconstructed Webpack factory 99418; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  function r(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function a(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != n) {
        var r,
          a,
          i,
          o,
          s = [],
          l = !0,
          c = !1;
        try {
          if (i = (n = n.call(e)).next, 0 === t) ;else for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
        } catch (e) {
          c = !0, a = e;
        } finally {
          try {
            if (!l && null != n.return && (o = n.return(), Object(o) !== o)) return;
          } finally {
            if (c) throw a;
          }
        }
        return s;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if ("string" == typeof e) return r(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  n.d(t, {
    A: () => ue
  });
  const i = Object.entries,
    o = Object.setPrototypeOf,
    s = Object.isFrozen,
    l = Object.getPrototypeOf,
    c = Object.getOwnPropertyDescriptor;
  let u = Object.freeze,
    d = Object.seal,
    p = Object.create,
    f = "undefined" != typeof Reflect && Reflect,
    h = f.apply,
    _ = f.construct;
  u || (u = function (e) {
    return e;
  }), d || (d = function (e) {
    return e;
  }), h || (h = function (e, t) {
    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
    return e.apply(t, r);
  }), _ || (_ = function (e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return new e(...n);
  });
  const m = N(Array.prototype.forEach),
    A = N(Array.prototype.lastIndexOf),
    g = N(Array.prototype.pop),
    y = N(Array.prototype.push),
    v = N(Array.prototype.splice),
    E = Array.isArray,
    b = N(String.prototype.toLowerCase),
    w = N(String.prototype.toString),
    C = N(String.prototype.match),
    O = N(String.prototype.replace),
    M = N(String.prototype.indexOf),
    S = N(String.prototype.trim),
    T = N(Number.prototype.toString),
    k = N(Boolean.prototype.toString),
    x = "undefined" == typeof BigInt ? null : N(BigInt.prototype.toString),
    D = "undefined" == typeof Symbol ? null : N(Symbol.prototype.toString),
    I = N(Object.prototype.hasOwnProperty),
    P = N(Object.prototype.toString),
    L = N(RegExp.prototype.test),
    R = (B = TypeError, function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return _(B, t);
    });
  var B;
  function N(e) {
    return function (t) {
      t instanceof RegExp && (t.lastIndex = 0);
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
      return h(e, t, r);
    };
  }
  function U(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
    if (o && o(e, null), !E(t)) return e;
    let r = t.length;
    for (; r--;) {
      let a = t[r];
      if ("string" == typeof a) {
        const e = n(a);
        e !== a && (s(t) || (t[r] = e), a = e);
      }
      e[a] = !0;
    }
    return e;
  }
  function F(e) {
    for (let t = 0; t < e.length; t++) I(e, t) || (e[t] = null);
    return e;
  }
  function j(e) {
    const t = p(null);
    for (const r of i(e)) {
      var n = a(r, 2);
      const i = n[0],
        o = n[1];
      I(e, i) && (E(o) ? t[i] = F(o) : o && "object" == typeof o && o.constructor === Object ? t[i] = j(o) : t[i] = o);
    }
    return t;
  }
  function H(e, t) {
    for (; null !== e;) {
      const n = c(e, t);
      if (n) {
        if (n.get) return N(n.get);
        if ("function" == typeof n.value) return N(n.value);
      }
      e = l(e);
    }
    return function () {
      return null;
    };
  }
  const W = u(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
    K = u(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
    V = u(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
    z = u(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
    Y = u(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
    Q = u(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
    G = u(["#text"]),
    $ = u(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]),
    q = u(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
    Z = u(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
    X = u(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    J = d(/{{[\w\W]*|^[\w\W]*}}/g),
    ee = d(/<%[\w\W]*|^[\w\W]*%>/g),
    te = d(/\${[\w\W]*/g),
    ne = d(/^data-[\-\w.\u00B7-\uFFFF]+$/),
    re = d(/^aria-[\-\w]+$/),
    ae = d(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    ie = d(/^(?:\w+script|data):/i),
    oe = d(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    se = d(/^html$/i),
    le = d(/^[a-z][.\w]*(-[.\w]+)+$/i),
    ce = function () {
      return "undefined" == typeof window ? null : window;
    };
  var ue = function e() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce();
    const n = t => e(t);
    if (n.version = "3.4.5", n.removed = [], !t || !t.document || 9 !== t.document.nodeType || !t.Element) return n.isSupported = !1, n;
    let r = t.document;
    const a = r,
      o = a.currentScript,
      s = t.DocumentFragment,
      l = t.HTMLTemplateElement,
      c = t.Node,
      d = t.Element,
      f = t.NodeFilter,
      h = t.NamedNodeMap,
      _ = void 0 === h ? t.NamedNodeMap || t.MozNamedAttrMap : h,
      B = t.HTMLFormElement,
      N = t.DOMParser,
      F = t.trustedTypes,
      ue = d.prototype,
      de = H(ue, "cloneNode"),
      pe = H(ue, "remove"),
      fe = H(ue, "nextSibling"),
      he = H(ue, "childNodes"),
      _e = H(ue, "parentNode"),
      me = c && c.prototype ? H(c.prototype, "nodeType") : null;
    if ("function" == typeof l) {
      const e = r.createElement("template");
      e.content && e.content.ownerDocument && (r = e.content.ownerDocument);
    }
    let Ae,
      ge = "";
    const ye = r,
      ve = ye.implementation,
      Ee = ye.createNodeIterator,
      be = ye.createDocumentFragment,
      we = ye.getElementsByTagName,
      Ce = a.importNode;
    let Oe = {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    };
    n.isSupported = "function" == typeof i && "function" == typeof _e && ve && void 0 !== ve.createHTMLDocument;
    const Me = J,
      Se = ee,
      Te = te,
      ke = ne,
      xe = re,
      De = ie,
      Ie = oe,
      Pe = le;
    let Le = ae,
      Re = null;
    const Be = U({}, [...W, ...K, ...V, ...Y, ...G]);
    let Ne = null;
    const Ue = U({}, [...$, ...q, ...Z, ...X]);
    let Fe = Object.seal(p(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1
        }
      })),
      je = null,
      He = null;
    const We = Object.seal(p(null, {
      tagCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      attributeCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      }
    }));
    let Ke = !0,
      Ve = !0,
      ze = !1,
      Ye = !0,
      Qe = !1,
      Ge = !0,
      $e = !1,
      qe = !1,
      Ze = !1,
      Xe = !1,
      Je = !1,
      et = !1,
      tt = !0,
      nt = !1;
    const rt = "user-content-";
    let at = !0,
      it = !1,
      ot = {},
      st = null;
    const lt = U({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let ct = null;
    const ut = U({}, ["audio", "video", "img", "source", "image", "track"]);
    let dt = null;
    const pt = U({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
      ft = "http://www.w3.org/1998/Math/MathML",
      ht = "http://www.w3.org/2000/svg",
      _t = "http://www.w3.org/1999/xhtml";
    let mt = _t,
      At = !1,
      gt = null;
    const yt = U({}, [ft, ht, _t], w);
    let vt = U({}, ["mi", "mo", "mn", "ms", "mtext"]),
      Et = U({}, ["annotation-xml"]);
    const bt = U({}, ["title", "style", "font", "a", "script"]);
    let wt = null;
    const Ct = ["application/xhtml+xml", "text/html"];
    let Ot = null,
      Mt = null;
    const St = r.createElement("form"),
      Tt = function (e) {
        return e instanceof RegExp || e instanceof Function;
      },
      kt = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (Mt && Mt === e) return;
        e && "object" == typeof e || (e = {}), e = j(e), wt = -1 === Ct.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE, Ot = "application/xhtml+xml" === wt ? w : b, Re = I(e, "ALLOWED_TAGS") && E(e.ALLOWED_TAGS) ? U({}, e.ALLOWED_TAGS, Ot) : Be, Ne = I(e, "ALLOWED_ATTR") && E(e.ALLOWED_ATTR) ? U({}, e.ALLOWED_ATTR, Ot) : Ue, gt = I(e, "ALLOWED_NAMESPACES") && E(e.ALLOWED_NAMESPACES) ? U({}, e.ALLOWED_NAMESPACES, w) : yt, dt = I(e, "ADD_URI_SAFE_ATTR") && E(e.ADD_URI_SAFE_ATTR) ? U(j(pt), e.ADD_URI_SAFE_ATTR, Ot) : pt, ct = I(e, "ADD_DATA_URI_TAGS") && E(e.ADD_DATA_URI_TAGS) ? U(j(ut), e.ADD_DATA_URI_TAGS, Ot) : ut, st = I(e, "FORBID_CONTENTS") && E(e.FORBID_CONTENTS) ? U({}, e.FORBID_CONTENTS, Ot) : lt, je = I(e, "FORBID_TAGS") && E(e.FORBID_TAGS) ? U({}, e.FORBID_TAGS, Ot) : j({}), He = I(e, "FORBID_ATTR") && E(e.FORBID_ATTR) ? U({}, e.FORBID_ATTR, Ot) : j({}), ot = !!I(e, "USE_PROFILES") && (e.USE_PROFILES && "object" == typeof e.USE_PROFILES ? j(e.USE_PROFILES) : e.USE_PROFILES), Ke = !1 !== e.ALLOW_ARIA_ATTR, Ve = !1 !== e.ALLOW_DATA_ATTR, ze = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ye = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, Qe = e.SAFE_FOR_TEMPLATES || !1, Ge = !1 !== e.SAFE_FOR_XML, $e = e.WHOLE_DOCUMENT || !1, Xe = e.RETURN_DOM || !1, Je = e.RETURN_DOM_FRAGMENT || !1, et = e.RETURN_TRUSTED_TYPE || !1, Ze = e.FORCE_BODY || !1, tt = !1 !== e.SANITIZE_DOM, nt = e.SANITIZE_NAMED_PROPS || !1, at = !1 !== e.KEEP_CONTENT, it = e.IN_PLACE || !1, Le = function (e) {
          try {
            return L(e, ""), !0;
          } catch (e) {
            return !1;
          }
        }(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : ae, mt = "string" == typeof e.NAMESPACE ? e.NAMESPACE : _t, vt = I(e, "MATHML_TEXT_INTEGRATION_POINTS") && e.MATHML_TEXT_INTEGRATION_POINTS && "object" == typeof e.MATHML_TEXT_INTEGRATION_POINTS ? j(e.MATHML_TEXT_INTEGRATION_POINTS) : U({}, ["mi", "mo", "mn", "ms", "mtext"]), Et = I(e, "HTML_INTEGRATION_POINTS") && e.HTML_INTEGRATION_POINTS && "object" == typeof e.HTML_INTEGRATION_POINTS ? j(e.HTML_INTEGRATION_POINTS) : U({}, ["annotation-xml"]);
        const t = I(e, "CUSTOM_ELEMENT_HANDLING") && e.CUSTOM_ELEMENT_HANDLING && "object" == typeof e.CUSTOM_ELEMENT_HANDLING ? j(e.CUSTOM_ELEMENT_HANDLING) : p(null);
        if (Fe = p(null), I(t, "tagNameCheck") && Tt(t.tagNameCheck) && (Fe.tagNameCheck = t.tagNameCheck), I(t, "attributeNameCheck") && Tt(t.attributeNameCheck) && (Fe.attributeNameCheck = t.attributeNameCheck), I(t, "allowCustomizedBuiltInElements") && "boolean" == typeof t.allowCustomizedBuiltInElements && (Fe.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), Qe && (Ve = !1), Je && (Xe = !0), ot && (Re = U({}, G), Ne = p(null), !0 === ot.html && (U(Re, W), U(Ne, $)), !0 === ot.svg && (U(Re, K), U(Ne, q), U(Ne, X)), !0 === ot.svgFilters && (U(Re, V), U(Ne, q), U(Ne, X)), !0 === ot.mathMl && (U(Re, Y), U(Ne, Z), U(Ne, X))), We.tagCheck = null, We.attributeCheck = null, I(e, "ADD_TAGS") && ("function" == typeof e.ADD_TAGS ? We.tagCheck = e.ADD_TAGS : E(e.ADD_TAGS) && (Re === Be && (Re = j(Re)), U(Re, e.ADD_TAGS, Ot))), I(e, "ADD_ATTR") && ("function" == typeof e.ADD_ATTR ? We.attributeCheck = e.ADD_ATTR : E(e.ADD_ATTR) && (Ne === Ue && (Ne = j(Ne)), U(Ne, e.ADD_ATTR, Ot))), I(e, "ADD_URI_SAFE_ATTR") && E(e.ADD_URI_SAFE_ATTR) && U(dt, e.ADD_URI_SAFE_ATTR, Ot), I(e, "FORBID_CONTENTS") && E(e.FORBID_CONTENTS) && (st === lt && (st = j(st)), U(st, e.FORBID_CONTENTS, Ot)), I(e, "ADD_FORBID_CONTENTS") && E(e.ADD_FORBID_CONTENTS) && (st === lt && (st = j(st)), U(st, e.ADD_FORBID_CONTENTS, Ot)), at && (Re["#text"] = !0), $e && U(Re, ["html", "head", "body"]), Re.table && (U(Re, ["tbody"]), delete je.tbody), e.TRUSTED_TYPES_POLICY) {
          if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw R('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
          if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw R('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
          Ae = e.TRUSTED_TYPES_POLICY, ge = Ae.createHTML("");
        } else void 0 === Ae && (Ae = function (e, t) {
          if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
          let n = null;
          const r = "data-tt-policy-suffix";
          t && t.hasAttribute(r) && (n = t.getAttribute(r));
          const a = "dompurify" + (n ? "#" + n : "");
          try {
            return e.createPolicy(a, {
              createHTML: e => e,
              createScriptURL: e => e
            });
          } catch (e) {
            return console.warn("TrustedTypes policy " + a + " could not be created."), null;
          }
        }(F, o)), null !== Ae && "string" == typeof ge && (ge = Ae.createHTML(""));
        u && u(e), Mt = e;
      },
      xt = U({}, [...K, ...V, ...z]),
      Dt = U({}, [...Y, ...Q]),
      It = function (e) {
        y(n.removed, {
          element: e
        });
        try {
          _e(e).removeChild(e);
        } catch (t) {
          pe(e);
        }
      },
      Pt = function (e, t) {
        try {
          y(n.removed, {
            attribute: t.getAttributeNode(e),
            from: t
          });
        } catch (e) {
          y(n.removed, {
            attribute: null,
            from: t
          });
        }
        if (t.removeAttribute(e), "is" === e) if (Xe || Je) try {
          It(t);
        } catch (e) {} else try {
          t.setAttribute(e, "");
        } catch (e) {}
      },
      Lt = function (e) {
        let t = null,
          n = null;
        if (Ze) e = "<remove></remove>" + e;else {
          const t = C(e, /^[\r\n\t ]+/);
          n = t && t[0];
        }
        "application/xhtml+xml" === wt && mt === _t && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
        const a = Ae ? Ae.createHTML(e) : e;
        if (mt === _t) try {
          t = new N().parseFromString(a, wt);
        } catch (e) {}
        if (!t || !t.documentElement) {
          t = ve.createDocument(mt, "template", null);
          try {
            t.documentElement.innerHTML = At ? ge : a;
          } catch (e) {}
        }
        const i = t.body || t.documentElement;
        return e && n && i.insertBefore(r.createTextNode(n), i.childNodes[0] || null), mt === _t ? we.call(t, $e ? "html" : "body")[0] : $e ? t.documentElement : i;
      },
      Rt = function (e) {
        return Ee.call(e.ownerDocument || e, e, f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION, null);
      },
      Bt = function (e) {
        e.normalize();
        const t = Ee.call(e.ownerDocument || e, e, f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION, null);
        let n = t.nextNode();
        for (; n;) {
          let e = n.data;
          m([Me, Se, Te], t => {
            e = O(e, t, " ");
          }), n.data = e, n = t.nextNode();
        }
      },
      Nt = function (e) {
        return e instanceof B && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof _) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes);
      },
      Ut = function (e) {
        if (!me || "object" != typeof e || null === e) return !1;
        try {
          return "number" == typeof me(e);
        } catch (e) {
          return !1;
        }
      };
    function Ft(e, t, r) {
      m(e, e => {
        e.call(n, t, r, Mt);
      });
    }
    const jt = function (e) {
        let t = null;
        if (Ft(Oe.beforeSanitizeElements, e, null), Nt(e)) return It(e), !0;
        const r = Ot(e.nodeName);
        if (Ft(Oe.uponSanitizeElement, e, {
          tagName: r,
          allowedTags: Re
        }), Ge && e.hasChildNodes() && !Ut(e.firstElementChild) && L(/<[/\w!]/g, e.innerHTML) && L(/<[/\w!]/g, e.textContent)) return It(e), !0;
        if (Ge && e.namespaceURI === _t && "style" === r && Ut(e.firstElementChild)) return It(e), !0;
        if (7 === e.nodeType) return It(e), !0;
        if (Ge && 8 === e.nodeType && L(/<[/\w]/g, e.data)) return It(e), !0;
        if (je[r] || !(We.tagCheck instanceof Function && We.tagCheck(r)) && !Re[r]) {
          if (!je[r] && Kt(r)) {
            if (Fe.tagNameCheck instanceof RegExp && L(Fe.tagNameCheck, r)) return !1;
            if (Fe.tagNameCheck instanceof Function && Fe.tagNameCheck(r)) return !1;
          }
          if (at && !st[r]) {
            const t = _e(e) || e.parentNode,
              n = he(e) || e.childNodes;
            if (n && t) for (let r = n.length - 1; r >= 0; --r) {
              const a = de(n[r], !0);
              t.insertBefore(a, fe(e));
            }
          }
          return It(e), !0;
        }
        return e instanceof d && !function (e) {
          let t = _e(e);
          t && t.tagName || (t = {
            namespaceURI: mt,
            tagName: "template"
          });
          const n = b(e.tagName),
            r = b(t.tagName);
          return !!gt[e.namespaceURI] && (e.namespaceURI === ht ? t.namespaceURI === _t ? "svg" === n : t.namespaceURI === ft ? "svg" === n && ("annotation-xml" === r || vt[r]) : Boolean(xt[n]) : e.namespaceURI === ft ? t.namespaceURI === _t ? "math" === n : t.namespaceURI === ht ? "math" === n && Et[r] : Boolean(Dt[n]) : e.namespaceURI === _t ? !(t.namespaceURI === ht && !Et[r]) && !(t.namespaceURI === ft && !vt[r]) && !Dt[n] && (bt[n] || !xt[n]) : !("application/xhtml+xml" !== wt || !gt[e.namespaceURI]));
        }(e) ? (It(e), !0) : "noscript" !== r && "noembed" !== r && "noframes" !== r || !L(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Qe && 3 === e.nodeType && (t = e.textContent, m([Me, Se, Te], e => {
          t = O(t, e, " ");
        }), e.textContent !== t && (y(n.removed, {
          element: e.cloneNode()
        }), e.textContent = t)), Ft(Oe.afterSanitizeElements, e, null), !1) : (It(e), !0);
      },
      Ht = function (e, t, n) {
        if (He[t]) return !1;
        if (tt && ("id" === t || "name" === t) && (n in r || n in St)) return !1;
        const a = Ne[t] || We.attributeCheck instanceof Function && We.attributeCheck(t, e);
        if (Ve && !He[t] && L(ke, t)) ;else if (Ke && L(xe, t)) ;else if (!a || He[t]) {
          if (!(Kt(e) && (Fe.tagNameCheck instanceof RegExp && L(Fe.tagNameCheck, e) || Fe.tagNameCheck instanceof Function && Fe.tagNameCheck(e)) && (Fe.attributeNameCheck instanceof RegExp && L(Fe.attributeNameCheck, t) || Fe.attributeNameCheck instanceof Function && Fe.attributeNameCheck(t, e)) || "is" === t && Fe.allowCustomizedBuiltInElements && (Fe.tagNameCheck instanceof RegExp && L(Fe.tagNameCheck, n) || Fe.tagNameCheck instanceof Function && Fe.tagNameCheck(n)))) return !1;
        } else if (dt[t]) ;else if (L(Le, O(n, Ie, ""))) ;else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== M(n, "data:") || !ct[e]) if (ze && !L(De, O(n, Ie, ""))) ;else if (n) return !1;
        return !0;
      },
      Wt = U({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]),
      Kt = function (e) {
        return !Wt[b(e)] && L(Pe, e);
      },
      Vt = function (e) {
        Ft(Oe.beforeSanitizeAttributes, e, null);
        const t = e.attributes;
        if (!t || Nt(e)) return;
        const r = {
          attrName: "",
          attrValue: "",
          keepAttr: !0,
          allowedAttributes: Ne,
          forceKeepAttr: void 0
        };
        let a = t.length;
        for (; a--;) {
          const i = t[a],
            o = i.name,
            s = i.namespaceURI,
            l = i.value,
            c = Ot(o),
            u = l;
          let d = "value" === o ? u : S(u);
          if (r.attrName = c, r.attrValue = d, r.keepAttr = !0, r.forceKeepAttr = void 0, Ft(Oe.uponSanitizeAttribute, e, r), d = r.attrValue, !nt || "id" !== c && "name" !== c || 0 === M(d, rt) || (Pt(o, e), d = rt + d), Ge && L(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d)) {
            Pt(o, e);
            continue;
          }
          if ("attributename" === c && C(d, "href")) {
            Pt(o, e);
            continue;
          }
          if (r.forceKeepAttr) continue;
          if (!r.keepAttr) {
            Pt(o, e);
            continue;
          }
          if (!Ye && L(/\/>/i, d)) {
            Pt(o, e);
            continue;
          }
          Qe && m([Me, Se, Te], e => {
            d = O(d, e, " ");
          });
          const p = Ot(e.nodeName);
          if (Ht(p, c, d)) {
            if (Ae && "object" == typeof F && "function" == typeof F.getAttributeType) if (s) ;else switch (F.getAttributeType(p, c)) {
              case "TrustedHTML":
                d = Ae.createHTML(d);
                break;
              case "TrustedScriptURL":
                d = Ae.createScriptURL(d);
            }
            if (d !== u) try {
              s ? e.setAttributeNS(s, o, d) : e.setAttribute(o, d), Nt(e) ? It(e) : g(n.removed);
            } catch (t) {
              Pt(o, e);
            }
          } else Pt(o, e);
        }
        Ft(Oe.afterSanitizeAttributes, e, null);
      },
      zt = function (e) {
        let t = null;
        const n = Rt(e);
        for (Ft(Oe.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) Ft(Oe.uponSanitizeShadowNode, t, null), jt(t), Vt(t), t.content instanceof s && zt(t.content);
        Ft(Oe.afterSanitizeShadowDOM, e, null);
      },
      Yt = function (e) {
        if (1 === e.nodeType && e.shadowRoot instanceof s) {
          const t = e.shadowRoot;
          Yt(t), zt(t);
        }
        const t = e.childNodes;
        if (!t) return;
        const n = [];
        m(t, e => {
          y(n, e);
        });
        for (const e of n) Yt(e);
      };
    return n.sanitize = function (e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = null,
        i = null,
        o = null,
        l = null;
      if (At = !e, At && (e = "\x3c!--\x3e"), "string" != typeof e && !Ut(e) && "string" != typeof (e = function (e) {
        switch (typeof e) {
          case "string":
            return e;
          case "number":
            return T(e);
          case "boolean":
            return k(e);
          case "bigint":
            return x ? x(e) : "0";
          case "symbol":
            return D ? D(e) : "Symbol()";
          case "undefined":
          default:
            return P(e);
          case "function":
          case "object":
            {
              if (null === e) return P(e);
              const t = e,
                n = H(t, "toString");
              if ("function" == typeof n) {
                const e = n(t);
                return "string" == typeof e ? e : P(e);
              }
              return P(e);
            }
        }
      }(e))) throw R("dirty is not a string, aborting");
      if (!n.isSupported) return e;
      if (qe || kt(t), n.removed = [], "string" == typeof e && (it = !1), it) {
        const t = e.nodeName;
        if ("string" == typeof t) {
          const e = Ot(t);
          if (!Re[e] || je[e]) throw R("root node is forbidden and cannot be sanitized in-place");
        }
        Yt(e);
      } else if (Ut(e)) r = Lt("\x3c!----\x3e"), i = r.ownerDocument.importNode(e, !0), 1 === i.nodeType && "BODY" === i.nodeName || "HTML" === i.nodeName ? r = i : r.appendChild(i), Yt(i);else {
        if (!Xe && !Qe && !$e && -1 === e.indexOf("<")) return Ae && et ? Ae.createHTML(e) : e;
        if (r = Lt(e), !r) return Xe ? null : et ? ge : "";
      }
      r && Ze && It(r.firstChild);
      const c = Rt(it ? e : r);
      for (; o = c.nextNode();) jt(o), Vt(o), o.content instanceof s && zt(o.content);
      if (it) return Qe && Bt(e), e;
      if (Xe) {
        if (Qe && Bt(r), Je) for (l = be.call(r.ownerDocument); r.firstChild;) l.appendChild(r.firstChild);else l = r;
        return (Ne.shadowroot || Ne.shadowrootmode) && (l = Ce.call(a, l, !0)), l;
      }
      let u = $e ? r.outerHTML : r.innerHTML;
      return $e && Re["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && L(se, r.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + u), Qe && m([Me, Se, Te], e => {
        u = O(u, e, " ");
      }), Ae && et ? Ae.createHTML(u) : u;
    }, n.setConfig = function () {
      kt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), qe = !0;
    }, n.clearConfig = function () {
      Mt = null, qe = !1;
    }, n.isValidAttribute = function (e, t, n) {
      Mt || kt({});
      const r = Ot(e),
        a = Ot(t);
      return Ht(r, a, n);
    }, n.addHook = function (e, t) {
      "function" == typeof t && y(Oe[e], t);
    }, n.removeHook = function (e, t) {
      if (void 0 !== t) {
        const n = A(Oe[e], t);
        return -1 === n ? void 0 : v(Oe[e], n, 1)[0];
      }
      return g(Oe[e]);
    }, n.removeHooks = function (e) {
      Oe[e] = [];
    }, n.removeAllHooks = function () {
      Oe = {
        afterSanitizeAttributes: [],
        afterSanitizeElements: [],
        afterSanitizeShadowDOM: [],
        beforeSanitizeAttributes: [],
        beforeSanitizeElements: [],
        beforeSanitizeShadowDOM: [],
        uponSanitizeAttribute: [],
        uponSanitizeElement: [],
        uponSanitizeShadowNode: []
      };
    }, n;
  }();
});
