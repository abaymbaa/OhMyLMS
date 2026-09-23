// Reconstructed Webpack factory 49050; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    AdvancedType: () => te,
    BasicType: () => ee,
    BlockManager: () => Sa,
    EMAIL_BLOCK_CLASS_NAME: () => re,
    ImageManager: () => ie,
    JsonToMjml: () => rr,
    MERGE_TAG_CLASS_NAME: () => ne,
    MjmlToJson: () => xa,
    Operator: () => Ur,
    OperatorSymbol: () => Fr,
    TemplateEngineManager: () => La,
    advancedBlocks: () => Ma,
    ancestorOf: () => Yr,
    components: () => Vr,
    createBlock: () => ae,
    createBlockDataByType: () => Pa,
    createCustomBlock: () => Br,
    getAdapterAttributesString: () => Ba,
    getChildIdx: () => Gr,
    getIndexByIdx: () => Jr,
    getNodeIdxClassName: () => $r,
    getNodeIdxFromClassName: () => Zr,
    getNodeTypeClassName: () => qr,
    getNodeTypeFromClassName: () => Xr,
    getPageIdx: () => Qr,
    getParenRelativeByType: () => oa,
    getParentByIdx: () => na,
    getParentByType: () => aa,
    getParentIdx: () => ea,
    getPreviewClassName: () => la,
    getSameParent: () => ia,
    getSiblingIdx: () => ra,
    getValidChildBlocks: () => sa,
    getValueByIdx: () => ta,
    isAdvancedBlock: () => Ra,
    isValidBlockData: () => Ta,
    mergeBlock: () => gr,
    parseReactBlockToBlockData: () => Ia,
    standardBlocks: () => Rr
  });
  var r,
    a,
    i,
    o,
    s,
    l,
    c,
    u,
    d,
    p,
    f,
    h,
    _,
    m,
    A,
    g,
    y,
    v,
    E,
    b,
    w,
    C,
    O,
    M,
    S,
    T,
    k,
    x,
    D,
    I,
    P,
    L,
    R,
    B,
    N,
    U,
    F = n(2543),
    j = n(41594),
    H = n.n(j),
    W = n(65848),
    K = n(44098),
    V = n.n(K),
    z = Object.defineProperty,
    Y = Object.defineProperties,
    Q = Object.getOwnPropertyDescriptors,
    G = Object.getOwnPropertySymbols,
    $ = Object.prototype.hasOwnProperty,
    q = Object.prototype.propertyIsEnumerable,
    Z = (e, t, n) => t in e ? z(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }) : e[t] = n,
    X = (e, t) => {
      for (var n in t || (t = {})) $.call(t, n) && Z(e, n, t[n]);
      if (G) for (var n of G(t)) q.call(t, n) && Z(e, n, t[n]);
      return e;
    },
    J = (e, t) => Y(e, Q(t)),
    ee = (e => (e.PAGE = "page", e.SECTION = "section", e.COLUMN = "column", e.GROUP = "group", e.TEXT = "text", e.IMAGE = "image", e.DIVIDER = "divider", e.SPACER = "spacer", e.BUTTON = "button", e.WRAPPER = "wrapper", e.RAW = "raw", e.ACCORDION = "accordion", e.ACCORDION_ELEMENT = "accordion-element", e.ACCORDION_TITLE = "accordion-title", e.ACCORDION_TEXT = "accordion-text", e.HERO = "hero", e.CAROUSEL = "carousel", e.NAVBAR = "navbar", e.SOCIAL = "social", e.TABLE = "table", e.FOOTER = "footer", e.TEMPLATE = "template", e))(ee || {}),
    te = (e => (e.TEXT = "advanced_text", e.IMAGE = "advanced_image", e.DIVIDER = "advanced_divider", e.SPACER = "advanced_spacer", e.BUTTON = "advanced_button", e.NAVBAR = "advanced_navbar", e.SOCIAL = "advanced_social", e.ACCORDION = "advanced_accordion", e.CAROUSEL = "advanced_carousel", e.FOOTER = "advanced_footer", e.WRAPPER = "advanced_wrapper", e.SECTION = "advanced_section", e.COLUMN = "advanced_column", e.GROUP = "advanced_group", e.HERO = "advanced_hero", e))(te || {});
  const ne = "easy-email-merge-tag-container",
    re = "email-block";
  function ae(e) {
    return X({}, e);
  }
  class ie {
    static add(e) {
      Object.keys(e).forEach(t => {
        this.map[t] && (this.overrideMap[t] = !0), this.map[t] = e[t];
      });
    }
    static get(e) {
      return this.map[e];
    }
    static getOverrideMap() {
      return this.overrideMap;
    }
  }
  ie.map = {}, ie.overrideMap = {};
  const oe = {
    IMAGE_01: "",
    IMAGE_02: (null == (r = null == window ? void 0 : window.MRM_Vars) ? void 0 : r.images_url) + "social-facebook.png",
    IMAGE_03: (null == (a = null == window ? void 0 : window.MRM_Vars) ? void 0 : a.images_url) + "social-instagram.png",
    IMAGE_04: (null == (i = null == window ? void 0 : window.MRM_Vars) ? void 0 : i.images_url) + "social-twitter.png",
    IMAGE_59: "",
    IMAGE_09: "",
    IMAGE_10: "",
    IMAGE_15: "",
    IMAGE_16: "",
    IMAGE_17: "",
    IMAGE_31: ""
  };
  function se(e) {
    return ie.get(e);
  }
  ie.add(oe);
  var le = {
      exports: {}
    },
    ce = {},
    ue = {
      exports: {}
    },
    de = {},
    pe = {};
  function fe(e) {
    this.__parent = e, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
  }
  function he(e, t) {
    this.__cache = [""], this.__indent_size = e.indent_size, this.__indent_string = e.indent_char, e.indent_with_tabs || (this.__indent_string = new Array(e.indent_size + 1).join(e.indent_char)), t = t || "", e.indent_level > 0 && (t = new Array(e.indent_level + 1).join(this.__indent_string)), this.__base_string = t, this.__base_string_length = t.length;
  }
  function _e(e, t) {
    this.__indent_cache = new he(e, t), this.raw = !1, this._end_with_newline = e.end_with_newline, this.indent_size = e.indent_size, this.wrap_line_length = e.wrap_line_length, this.indent_empty_lines = e.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new fe(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline();
  }
  fe.prototype.clone_empty = function () {
    var e = new fe(this.__parent);
    return e.set_indent(this.__indent_count, this.__alignment_count), e;
  }, fe.prototype.item = function (e) {
    return e < 0 ? this.__items[this.__items.length + e] : this.__items[e];
  }, fe.prototype.has_match = function (e) {
    for (var t = this.__items.length - 1; t >= 0; t--) if (this.__items[t].match(e)) return !0;
    return !1;
  }, fe.prototype.set_indent = function (e, t) {
    this.is_empty() && (this.__indent_count = e || 0, this.__alignment_count = t || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
  }, fe.prototype._set_wrap_point = function () {
    this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
  }, fe.prototype._should_wrap = function () {
    return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
  }, fe.prototype._allow_wrap = function () {
    if (this._should_wrap()) {
      this.__parent.add_new_line();
      var e = this.__parent.current_line;
      return e.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), e.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), e.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, " " === e.__items[0] && (e.__items.splice(0, 1), e.__character_count -= 1), !0;
    }
    return !1;
  }, fe.prototype.is_empty = function () {
    return 0 === this.__items.length;
  }, fe.prototype.last = function () {
    return this.is_empty() ? null : this.__items[this.__items.length - 1];
  }, fe.prototype.push = function (e) {
    this.__items.push(e);
    var t = e.lastIndexOf("\n");
    -1 !== t ? this.__character_count = e.length - t : this.__character_count += e.length;
  }, fe.prototype.pop = function () {
    var e = null;
    return this.is_empty() || (e = this.__items.pop(), this.__character_count -= e.length), e;
  }, fe.prototype._remove_indent = function () {
    this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size);
  }, fe.prototype._remove_wrap_indent = function () {
    this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
  }, fe.prototype.trim = function () {
    for (; " " === this.last();) this.__items.pop(), this.__character_count -= 1;
  }, fe.prototype.toString = function () {
    var e = "";
    return this.is_empty() ? this.__parent.indent_empty_lines && (e = this.__parent.get_indent_string(this.__indent_count)) : (e = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), e += this.__items.join("")), e;
  }, he.prototype.get_indent_size = function (e, t) {
    var n = this.__base_string_length;
    return t = t || 0, e < 0 && (n = 0), (n += e * this.__indent_size) + t;
  }, he.prototype.get_indent_string = function (e, t) {
    var n = this.__base_string;
    return t = t || 0, e < 0 && (e = 0, n = ""), t += e * this.__indent_size, this.__ensure_cache(t), n + this.__cache[t];
  }, he.prototype.__ensure_cache = function (e) {
    for (; e >= this.__cache.length;) this.__add_column();
  }, he.prototype.__add_column = function () {
    var e = this.__cache.length,
      t = 0,
      n = "";
    this.__indent_size && e >= this.__indent_size && (e -= (t = Math.floor(e / this.__indent_size)) * this.__indent_size, n = new Array(t + 1).join(this.__indent_string)), e && (n += new Array(e + 1).join(" ")), this.__cache.push(n);
  }, _e.prototype.__add_outputline = function () {
    this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
  }, _e.prototype.get_line_number = function () {
    return this.__lines.length;
  }, _e.prototype.get_indent_string = function (e, t) {
    return this.__indent_cache.get_indent_string(e, t);
  }, _e.prototype.get_indent_size = function (e, t) {
    return this.__indent_cache.get_indent_size(e, t);
  }, _e.prototype.is_empty = function () {
    return !this.previous_line && this.current_line.is_empty();
  }, _e.prototype.add_new_line = function (e) {
    return !(this.is_empty() || !e && this.just_added_newline() || (this.raw || this.__add_outputline(), 0));
  }, _e.prototype.get_code = function (e) {
    this.trim(!0);
    var t = this.current_line.pop();
    t && ("\n" === t[t.length - 1] && (t = t.replace(/\n+$/g, "")), this.current_line.push(t)), this._end_with_newline && this.__add_outputline();
    var n = this.__lines.join("\n");
    return "\n" !== e && (n = n.replace(/[\n]/g, e)), n;
  }, _e.prototype.set_wrap_point = function () {
    this.current_line._set_wrap_point();
  }, _e.prototype.set_indent = function (e, t) {
    return e = e || 0, t = t || 0, this.next_line.set_indent(e, t), this.__lines.length > 1 ? (this.current_line.set_indent(e, t), !0) : (this.current_line.set_indent(), !1);
  }, _e.prototype.add_raw_token = function (e) {
    for (var t = 0; t < e.newlines; t++) this.__add_outputline();
    this.current_line.set_indent(-1), this.current_line.push(e.whitespace_before), this.current_line.push(e.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1;
  }, _e.prototype.add_token = function (e) {
    this.__add_space_before_token(), this.current_line.push(e), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap();
  }, _e.prototype.__add_space_before_token = function () {
    this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
  }, _e.prototype.remove_indent = function (e) {
    for (var t = this.__lines.length; e < t;) this.__lines[e]._remove_indent(), e++;
    this.current_line._remove_wrap_indent();
  }, _e.prototype.trim = function (e) {
    for (e = void 0 !== e && e, this.current_line.trim(); e && this.__lines.length > 1 && this.current_line.is_empty();) this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
    this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
  }, _e.prototype.just_added_newline = function () {
    return this.current_line.is_empty();
  }, _e.prototype.just_added_blankline = function () {
    return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
  }, _e.prototype.ensure_empty_line_above = function (e, t) {
    for (var n = this.__lines.length - 2; n >= 0;) {
      var r = this.__lines[n];
      if (r.is_empty()) break;
      if (0 !== r.item(0).indexOf(e) && r.item(-1) !== t) {
        this.__lines.splice(n + 1, 0, new fe(this)), this.previous_line = this.__lines[this.__lines.length - 2];
        break;
      }
      n--;
    }
  }, pe.Output = _e;
  var me,
    Ae,
    ge,
    ye,
    ve = {
      Token: function (e, t, n, r) {
        this.type = e, this.text = t, this.comments_before = null, this.newlines = n || 0, this.whitespace_before = r || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null;
      }
    },
    Ee = {};
  ge = "(?:\\\\u[0-9a-fA-F]{4}|[\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a" + (Ae = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc") + "])", ye = "(?:\\\\u[0-9a-fA-F]{4}|[" + "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a" + Ae + "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f" + "])*", (me = Ee).identifier = new RegExp(ge + ye, "g"), me.identifierStart = new RegExp(ge), me.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a" + Ae + "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f])+"), me.newline = /[\n\r\u2028\u2029]/, me.lineBreak = new RegExp("\r\n|" + me.newline.source), me.allLineBreaks = new RegExp(me.lineBreak.source, "g");
  var be = {},
    we = {};
  function Ce(e, t) {
    this.raw_options = Oe(e, t), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", "\t" === this.indent_char), this.indent_with_tabs && (this.indent_char = "\t", 1 === this.indent_size && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
  }
  function Oe(e, t) {
    var n,
      r = {};
    for (n in e = Me(e)) n !== t && (r[n] = e[n]);
    if (t && e[t]) for (n in e[t]) r[n] = e[t][n];
    return r;
  }
  function Me(e) {
    var t,
      n = {};
    for (t in e) n[t.replace(/-/g, "_")] = e[t];
    return n;
  }
  Ce.prototype._get_array = function (e, t) {
    var n = this.raw_options[e],
      r = t || [];
    return "object" == typeof n ? null !== n && "function" == typeof n.concat && (r = n.concat()) : "string" == typeof n && (r = n.split(/[^a-zA-Z0-9_\/\-]+/)), r;
  }, Ce.prototype._get_boolean = function (e, t) {
    var n = this.raw_options[e];
    return void 0 === n ? !!t : !!n;
  }, Ce.prototype._get_characters = function (e, t) {
    var n = this.raw_options[e],
      r = t || "";
    return "string" == typeof n && (r = n.replace(/\\r/, "\r").replace(/\\n/, "\n").replace(/\\t/, "\t")), r;
  }, Ce.prototype._get_number = function (e, t) {
    var n = this.raw_options[e];
    t = parseInt(t, 10), isNaN(t) && (t = 0);
    var r = parseInt(n, 10);
    return isNaN(r) && (r = t), r;
  }, Ce.prototype._get_selection = function (e, t, n) {
    var r = this._get_selection_list(e, t, n);
    if (1 !== r.length) throw new Error("Invalid Option Value: The option '" + e + "' can only be one of the following values:\n" + t + "\nYou passed in: '" + this.raw_options[e] + "'");
    return r[0];
  }, Ce.prototype._get_selection_list = function (e, t, n) {
    if (!t || 0 === t.length) throw new Error("Selection list cannot be empty.");
    if (n = n || [t[0]], !this._is_valid_selection(n, t)) throw new Error("Invalid Default Value!");
    var r = this._get_array(e, n);
    if (!this._is_valid_selection(r, t)) throw new Error("Invalid Option Value: The option '" + e + "' can contain only the following values:\n" + t + "\nYou passed in: '" + this.raw_options[e] + "'");
    return r;
  }, Ce.prototype._is_valid_selection = function (e, t) {
    return e.length && t.length && !e.some(function (e) {
      return -1 === t.indexOf(e);
    });
  }, we.Options = Ce, we.normalizeOpts = Me, we.mergeOpts = Oe;
  var Se = we.Options,
    Te = ["before-newline", "after-newline", "preserve-newline"];
  function ke(e) {
    Se.call(this, e, "js");
    var t = this.raw_options.brace_style || null;
    "expand-strict" === t ? this.raw_options.brace_style = "expand" : "collapse-preserve-inline" === t ? this.raw_options.brace_style = "collapse,preserve-inline" : void 0 !== this.raw_options.braces_on_own_line && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
    var n = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_preserve_inline = !1, this.brace_style = "collapse";
    for (var r = 0; r < n.length; r++) "preserve-inline" === n[r] ? this.brace_preserve_inline = !0 : this.brace_style = n[r];
    this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", !0), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", Te), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = !0);
  }
  ke.prototype = new Se(), be.Options = ke;
  var xe = {},
    De = {},
    Ie = RegExp.prototype.hasOwnProperty("sticky");
  function Pe(e) {
    this.__input = e || "", this.__input_length = this.__input.length, this.__position = 0;
  }
  Pe.prototype.restart = function () {
    this.__position = 0;
  }, Pe.prototype.back = function () {
    this.__position > 0 && (this.__position -= 1);
  }, Pe.prototype.hasNext = function () {
    return this.__position < this.__input_length;
  }, Pe.prototype.next = function () {
    var e = null;
    return this.hasNext() && (e = this.__input.charAt(this.__position), this.__position += 1), e;
  }, Pe.prototype.peek = function (e) {
    var t = null;
    return e = e || 0, (e += this.__position) >= 0 && e < this.__input_length && (t = this.__input.charAt(e)), t;
  }, Pe.prototype.__match = function (e, t) {
    e.lastIndex = t;
    var n = e.exec(this.__input);
    return !n || Ie && e.sticky || n.index !== t && (n = null), n;
  }, Pe.prototype.test = function (e, t) {
    return t = t || 0, (t += this.__position) >= 0 && t < this.__input_length && !!this.__match(e, t);
  }, Pe.prototype.testChar = function (e, t) {
    var n = this.peek(t);
    return e.lastIndex = 0, null !== n && e.test(n);
  }, Pe.prototype.match = function (e) {
    var t = this.__match(e, this.__position);
    return t ? this.__position += t[0].length : t = null, t;
  }, Pe.prototype.read = function (e, t, n) {
    var r,
      a = "";
    return e && (r = this.match(e)) && (a += r[0]), !t || !r && e || (a += this.readUntil(t, n)), a;
  }, Pe.prototype.readUntil = function (e, t) {
    var n,
      r = this.__position;
    e.lastIndex = this.__position;
    var a = e.exec(this.__input);
    return a ? (r = a.index, t && (r += a[0].length)) : r = this.__input_length, n = this.__input.substring(this.__position, r), this.__position = r, n;
  }, Pe.prototype.readUntilAfter = function (e) {
    return this.readUntil(e, !0);
  }, Pe.prototype.get_regexp = function (e, t) {
    var n = null,
      r = "g";
    return t && Ie && (r = "y"), "string" == typeof e && "" !== e ? n = new RegExp(e, r) : e && (n = new RegExp(e.source, r)), n;
  }, Pe.prototype.get_literal_regexp = function (e) {
    return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
  }, Pe.prototype.peekUntilAfter = function (e) {
    var t = this.__position,
      n = this.readUntilAfter(e);
    return this.__position = t, n;
  }, Pe.prototype.lookBack = function (e) {
    var t = this.__position - 1;
    return t >= e.length && this.__input.substring(t - e.length, t).toLowerCase() === e;
  }, De.InputScanner = Pe;
  var Le = {},
    Re = {};
  function Be(e) {
    this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = e;
  }
  Be.prototype.restart = function () {
    this.__position = 0;
  }, Be.prototype.isEmpty = function () {
    return 0 === this.__tokens_length;
  }, Be.prototype.hasNext = function () {
    return this.__position < this.__tokens_length;
  }, Be.prototype.next = function () {
    var e = null;
    return this.hasNext() && (e = this.__tokens[this.__position], this.__position += 1), e;
  }, Be.prototype.peek = function (e) {
    var t = null;
    return e = e || 0, (e += this.__position) >= 0 && e < this.__tokens_length && (t = this.__tokens[e]), t;
  }, Be.prototype.add = function (e) {
    this.__parent_token && (e.parent = this.__parent_token), this.__tokens.push(e), this.__tokens_length += 1;
  }, Re.TokenStream = Be;
  var Ne = {},
    Ue = {};
  function Fe(e, t) {
    this._input = e, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, t && (this._starting_pattern = this._input.get_regexp(t._starting_pattern, !0), this._match_pattern = this._input.get_regexp(t._match_pattern, !0), this._until_pattern = this._input.get_regexp(t._until_pattern), this._until_after = t._until_after);
  }
  Fe.prototype.read = function () {
    var e = this._input.read(this._starting_pattern);
    return this._starting_pattern && !e || (e += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), e;
  }, Fe.prototype.read_match = function () {
    return this._input.match(this._match_pattern);
  }, Fe.prototype.until_after = function (e) {
    var t = this._create();
    return t._until_after = !0, t._until_pattern = this._input.get_regexp(e), t._update(), t;
  }, Fe.prototype.until = function (e) {
    var t = this._create();
    return t._until_after = !1, t._until_pattern = this._input.get_regexp(e), t._update(), t;
  }, Fe.prototype.starting_with = function (e) {
    var t = this._create();
    return t._starting_pattern = this._input.get_regexp(e, !0), t._update(), t;
  }, Fe.prototype.matching = function (e) {
    var t = this._create();
    return t._match_pattern = this._input.get_regexp(e, !0), t._update(), t;
  }, Fe.prototype._create = function () {
    return new Fe(this._input, this);
  }, Fe.prototype._update = function () {}, Ue.Pattern = Fe;
  var je = Ue.Pattern;
  function He(e, t) {
    je.call(this, e, t), t ? this._line_regexp = this._input.get_regexp(t._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = "";
  }
  He.prototype = new je(), He.prototype.__set_whitespace_patterns = function (e, t) {
    e += "\\t ", t += "\\n\\r", this._match_pattern = this._input.get_regexp("[" + e + t + "]+", !0), this._newline_regexp = this._input.get_regexp("\\r\\n|[" + t + "]");
  }, He.prototype.read = function () {
    this.newline_count = 0, this.whitespace_before_token = "";
    var e = this._input.read(this._match_pattern);
    if (" " === e) this.whitespace_before_token = " ";else if (e) {
      var t = this.__split(this._newline_regexp, e);
      this.newline_count = t.length - 1, this.whitespace_before_token = t[this.newline_count];
    }
    return e;
  }, He.prototype.matching = function (e, t) {
    var n = this._create();
    return n.__set_whitespace_patterns(e, t), n._update(), n;
  }, He.prototype._create = function () {
    return new He(this._input, this);
  }, He.prototype.__split = function (e, t) {
    e.lastIndex = 0;
    for (var n = 0, r = [], a = e.exec(t); a;) r.push(t.substring(n, a.index)), n = a.index + a[0].length, a = e.exec(t);
    return n < t.length ? r.push(t.substring(n, t.length)) : r.push(""), r;
  }, Ne.WhitespacePattern = He;
  var We = De.InputScanner,
    Ke = ve.Token,
    Ve = Re.TokenStream,
    ze = Ne.WhitespacePattern,
    Ye = {
      START: "TK_START",
      RAW: "TK_RAW",
      EOF: "TK_EOF"
    },
    Qe = function (e, t) {
      this._input = new We(e), this._options = t || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new ze(this._input);
    };
  Qe.prototype.tokenize = function () {
    var e;
    this._input.restart(), this.__tokens = new Ve(), this._reset();
    for (var t = new Ke(Ye.START, ""), n = null, r = [], a = new Ve(); t.type !== Ye.EOF;) {
      for (e = this._get_next_token(t, n); this._is_comment(e);) a.add(e), e = this._get_next_token(t, n);
      a.isEmpty() || (e.comments_before = a, a = new Ve()), e.parent = n, this._is_opening(e) ? (r.push(n), n = e) : n && this._is_closing(e, n) && (e.opened = n, n.closed = e, n = r.pop(), e.parent = n), e.previous = t, t.next = e, this.__tokens.add(e), t = e;
    }
    return this.__tokens;
  }, Qe.prototype._is_first_token = function () {
    return this.__tokens.isEmpty();
  }, Qe.prototype._reset = function () {}, Qe.prototype._get_next_token = function (e, t) {
    this._readWhitespace();
    var n = this._input.read(/.+/g);
    return n ? this._create_token(Ye.RAW, n) : this._create_token(Ye.EOF, "");
  }, Qe.prototype._is_comment = function (e) {
    return !1;
  }, Qe.prototype._is_opening = function (e) {
    return !1;
  }, Qe.prototype._is_closing = function (e, t) {
    return !1;
  }, Qe.prototype._create_token = function (e, t) {
    return new Ke(e, t, this._patterns.whitespace.newline_count, this._patterns.whitespace.whitespace_before_token);
  }, Qe.prototype._readWhitespace = function () {
    return this._patterns.whitespace.read();
  }, Le.Tokenizer = Qe, Le.TOKEN = Ye;
  var Ge = {};
  function $e(e, t) {
    e = "string" == typeof e ? e : e.source, t = "string" == typeof t ? t : t.source, this.__directives_block_pattern = new RegExp(e + / beautify( \w+[:]\w+)+ /.source + t, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(e + /\sbeautify\signore:end\s/.source + t, "g");
  }
  $e.prototype.get_directives = function (e) {
    if (!e.match(this.__directives_block_pattern)) return null;
    var t = {};
    this.__directive_pattern.lastIndex = 0;
    for (var n = this.__directive_pattern.exec(e); n;) t[n[1]] = n[2], n = this.__directive_pattern.exec(e);
    return t;
  }, $e.prototype.readIgnored = function (e) {
    return e.readUntilAfter(this.__directives_end_ignore_pattern);
  }, Ge.Directives = $e;
  var qe = {},
    Ze = Ue.Pattern,
    Xe = {
      django: !1,
      erb: !1,
      handlebars: !1,
      php: !1,
      smarty: !1
    };
  function Je(e, t) {
    Ze.call(this, e, t), this.__template_pattern = null, this._disabled = Object.assign({}, Xe), this._excluded = Object.assign({}, Xe), t && (this.__template_pattern = this._input.get_regexp(t.__template_pattern), this._excluded = Object.assign(this._excluded, t._excluded), this._disabled = Object.assign(this._disabled, t._disabled));
    var n = new Ze(e);
    this.__patterns = {
      handlebars_comment: n.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: n.starting_with(/{{{/).until_after(/}}}/),
      handlebars: n.starting_with(/{{/).until_after(/}}/),
      php: n.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: n.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      django: n.starting_with(/{%/).until_after(/%}/),
      django_value: n.starting_with(/{{/).until_after(/}}/),
      django_comment: n.starting_with(/{#/).until_after(/#}/),
      smarty: n.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: n.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: n.starting_with(/{literal}/).until_after(/{\/literal}/)
    };
  }
  Je.prototype = new Ze(), Je.prototype._create = function () {
    return new Je(this._input, this);
  }, Je.prototype._update = function () {
    this.__set_templated_pattern();
  }, Je.prototype.disable = function (e) {
    var t = this._create();
    return t._disabled[e] = !0, t._update(), t;
  }, Je.prototype.read_options = function (e) {
    var t = this._create();
    for (var n in Xe) t._disabled[n] = -1 === e.templating.indexOf(n);
    return t._update(), t;
  }, Je.prototype.exclude = function (e) {
    var t = this._create();
    return t._excluded[e] = !0, t._update(), t;
  }, Je.prototype.read = function () {
    var e = "";
    e = this._match_pattern ? this._input.read(this._starting_pattern) : this._input.read(this._starting_pattern, this.__template_pattern);
    for (var t = this._read_template(); t;) this._match_pattern ? t += this._input.read(this._match_pattern) : t += this._input.readUntil(this.__template_pattern), e += t, t = this._read_template();
    return this._until_after && (e += this._input.readUntilAfter(this._until_pattern)), e;
  }, Je.prototype.__set_templated_pattern = function () {
    var e = [];
    this._disabled.php || e.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || e.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || e.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (e.push(this.__patterns.django._starting_pattern.source), e.push(this.__patterns.django_value._starting_pattern.source), e.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || e.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && e.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + e.join("|") + ")");
  }, Je.prototype._read_template = function () {
    var e = "",
      t = this._input.peek();
    if ("<" === t) {
      var n = this._input.peek(1);
      this._disabled.php || this._excluded.php || "?" !== n || (e = e || this.__patterns.php.read()), this._disabled.erb || this._excluded.erb || "%" !== n || (e = e || this.__patterns.erb.read());
    } else "{" === t && (this._disabled.handlebars || this._excluded.handlebars || (e = (e = (e = e || this.__patterns.handlebars_comment.read()) || this.__patterns.handlebars_unescaped.read()) || this.__patterns.handlebars.read()), this._disabled.django || (this._excluded.django || this._excluded.handlebars || (e = e || this.__patterns.django_value.read()), this._excluded.django || (e = (e = e || this.__patterns.django_comment.read()) || this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (e = (e = (e = e || this.__patterns.smarty_comment.read()) || this.__patterns.smarty_literal.read()) || this.__patterns.smarty.read()));
    return e;
  }, qe.TemplatablePattern = Je;
  var et = De.InputScanner,
    tt = Le.Tokenizer,
    nt = Le.TOKEN,
    rt = Ge.Directives,
    at = Ee,
    it = Ue.Pattern,
    ot = qe.TemplatablePattern;
  function st(e, t) {
    return -1 !== t.indexOf(e);
  }
  var lt = {
      START_EXPR: "TK_START_EXPR",
      END_EXPR: "TK_END_EXPR",
      START_BLOCK: "TK_START_BLOCK",
      END_BLOCK: "TK_END_BLOCK",
      WORD: "TK_WORD",
      RESERVED: "TK_RESERVED",
      SEMICOLON: "TK_SEMICOLON",
      STRING: "TK_STRING",
      EQUALS: "TK_EQUALS",
      OPERATOR: "TK_OPERATOR",
      COMMA: "TK_COMMA",
      BLOCK_COMMENT: "TK_BLOCK_COMMENT",
      COMMENT: "TK_COMMENT",
      DOT: "TK_DOT",
      UNKNOWN: "TK_UNKNOWN",
      START: nt.START,
      RAW: nt.RAW,
      EOF: nt.EOF
    },
    ct = new rt(/\/\*/, /\*\//),
    ut = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/,
    dt = /[0-9]/,
    pt = /[^\d\.]/,
    ft = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "),
    ht = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
  ht = (ht = "\\?\\.(?!\\d) " + (ht = ht.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"))).replace(/ /g, "|");
  var _t,
    mt = new RegExp(ht),
    At = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","),
    gt = At.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]),
    yt = new RegExp("^(?:" + gt.join("|") + ")$"),
    vt = function (e, t) {
      tt.call(this, e, t), this._patterns.whitespace = this._patterns.whitespace.matching(/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source, /\u2028\u2029/.source);
      var n = new it(this._input),
        r = new ot(this._input).read_options(this._options);
      this.__patterns = {
        template: r,
        identifier: r.starting_with(at.identifier).matching(at.identifierMatch),
        number: n.matching(ut),
        punct: n.matching(mt),
        comment: n.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
        block_comment: n.starting_with(/\/\*/).until_after(/\*\//),
        html_comment_start: n.matching(/<!--/),
        html_comment_end: n.matching(/-->/),
        include: n.starting_with(/#include/).until_after(at.lineBreak),
        shebang: n.starting_with(/#!/).until_after(at.lineBreak),
        xml: n.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
        single_quote: r.until(/['\\\n\r\u2028\u2029]/),
        double_quote: r.until(/["\\\n\r\u2028\u2029]/),
        template_text: r.until(/[`\\$]/),
        template_expression: r.until(/[`}\\]/)
      };
    };
  (vt.prototype = new tt())._is_comment = function (e) {
    return e.type === lt.COMMENT || e.type === lt.BLOCK_COMMENT || e.type === lt.UNKNOWN;
  }, vt.prototype._is_opening = function (e) {
    return e.type === lt.START_BLOCK || e.type === lt.START_EXPR;
  }, vt.prototype._is_closing = function (e, t) {
    return (e.type === lt.END_BLOCK || e.type === lt.END_EXPR) && t && ("]" === e.text && "[" === t.text || ")" === e.text && "(" === t.text || "}" === e.text && "{" === t.text);
  }, vt.prototype._reset = function () {
    _t = !1;
  }, vt.prototype._get_next_token = function (e, t) {
    var n = null;
    this._readWhitespace();
    var r = this._input.peek();
    return null === r ? this._create_token(lt.EOF, "") : n = (n = (n = (n = (n = (n = (n = (n = (n = n || this._read_non_javascript(r)) || this._read_string(r)) || this._read_word(e)) || this._read_singles(r)) || this._read_comment(r)) || this._read_regexp(r, e)) || this._read_xml(r, e)) || this._read_punctuation()) || this._create_token(lt.UNKNOWN, this._input.next());
  }, vt.prototype._read_word = function (e) {
    var t;
    return "" !== (t = this.__patterns.identifier.read()) ? (t = t.replace(at.allLineBreaks, "\n"), e.type !== lt.DOT && (e.type !== lt.RESERVED || "set" !== e.text && "get" !== e.text) && yt.test(t) ? "in" !== t && "of" !== t || e.type !== lt.WORD && e.type !== lt.STRING ? this._create_token(lt.RESERVED, t) : this._create_token(lt.OPERATOR, t) : this._create_token(lt.WORD, t)) : "" !== (t = this.__patterns.number.read()) ? this._create_token(lt.WORD, t) : void 0;
  }, vt.prototype._read_singles = function (e) {
    var t = null;
    return "(" === e || "[" === e ? t = this._create_token(lt.START_EXPR, e) : ")" === e || "]" === e ? t = this._create_token(lt.END_EXPR, e) : "{" === e ? t = this._create_token(lt.START_BLOCK, e) : "}" === e ? t = this._create_token(lt.END_BLOCK, e) : ";" === e ? t = this._create_token(lt.SEMICOLON, e) : "." === e && pt.test(this._input.peek(1)) ? t = this._create_token(lt.DOT, e) : "," === e && (t = this._create_token(lt.COMMA, e)), t && this._input.next(), t;
  }, vt.prototype._read_punctuation = function () {
    var e = this.__patterns.punct.read();
    if ("" !== e) return "=" === e ? this._create_token(lt.EQUALS, e) : "?." === e ? this._create_token(lt.DOT, e) : this._create_token(lt.OPERATOR, e);
  }, vt.prototype._read_non_javascript = function (e) {
    var t = "";
    if ("#" === e) {
      if (this._is_first_token() && (t = this.__patterns.shebang.read())) return this._create_token(lt.UNKNOWN, t.trim() + "\n");
      if (t = this.__patterns.include.read()) return this._create_token(lt.UNKNOWN, t.trim() + "\n");
      e = this._input.next();
      var n = "#";
      if (this._input.hasNext() && this._input.testChar(dt)) {
        do {
          n += e = this._input.next();
        } while (this._input.hasNext() && "#" !== e && "=" !== e);
        return "#" === e || ("[" === this._input.peek() && "]" === this._input.peek(1) ? (n += "[]", this._input.next(), this._input.next()) : "{" === this._input.peek() && "}" === this._input.peek(1) && (n += "{}", this._input.next(), this._input.next())), this._create_token(lt.WORD, n);
      }
      this._input.back();
    } else if ("<" === e && this._is_first_token()) {
      if (t = this.__patterns.html_comment_start.read()) {
        for (; this._input.hasNext() && !this._input.testChar(at.newline);) t += this._input.next();
        return _t = !0, this._create_token(lt.COMMENT, t);
      }
    } else if (_t && "-" === e && (t = this.__patterns.html_comment_end.read())) return _t = !1, this._create_token(lt.COMMENT, t);
    return null;
  }, vt.prototype._read_comment = function (e) {
    var t = null;
    if ("/" === e) {
      var n = "";
      if ("*" === this._input.peek(1)) {
        n = this.__patterns.block_comment.read();
        var r = ct.get_directives(n);
        r && "start" === r.ignore && (n += ct.readIgnored(this._input)), n = n.replace(at.allLineBreaks, "\n"), (t = this._create_token(lt.BLOCK_COMMENT, n)).directives = r;
      } else "/" === this._input.peek(1) && (n = this.__patterns.comment.read(), t = this._create_token(lt.COMMENT, n));
    }
    return t;
  }, vt.prototype._read_string = function (e) {
    if ("`" === e || "'" === e || '"' === e) {
      var t = this._input.next();
      return this.has_char_escapes = !1, t += "`" === e ? this._read_string_recursive("`", !0, "${") : this._read_string_recursive(e), this.has_char_escapes && this._options.unescape_strings && (t = function (e) {
        for (var t = "", n = 0, r = new et(e), a = null; r.hasNext();) if ((a = r.match(/([\s]|[^\\]|\\\\)+/g)) && (t += a[0]), "\\" === r.peek()) {
          if (r.next(), "x" === r.peek()) a = r.match(/x([0-9A-Fa-f]{2})/g);else {
            if ("u" !== r.peek()) {
              t += "\\", r.hasNext() && (t += r.next());
              continue;
            }
            a = r.match(/u([0-9A-Fa-f]{4})/g);
          }
          if (!a) return e;
          if ((n = parseInt(a[1], 16)) > 126 && n <= 255 && 0 === a[0].indexOf("x")) return e;
          if (n >= 0 && n < 32) {
            t += "\\" + a[0];
            continue;
          }
          t += 34 === n || 39 === n || 92 === n ? "\\" + String.fromCharCode(n) : String.fromCharCode(n);
        }
        return t;
      }(t)), this._input.peek() === e && (t += this._input.next()), t = t.replace(at.allLineBreaks, "\n"), this._create_token(lt.STRING, t);
    }
    return null;
  }, vt.prototype._allow_regexp_or_xml = function (e) {
    return e.type === lt.RESERVED && st(e.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || e.type === lt.END_EXPR && ")" === e.text && e.opened.previous.type === lt.RESERVED && st(e.opened.previous.text, ["if", "while", "for"]) || st(e.type, [lt.COMMENT, lt.START_EXPR, lt.START_BLOCK, lt.START, lt.END_BLOCK, lt.OPERATOR, lt.EQUALS, lt.EOF, lt.SEMICOLON, lt.COMMA]);
  }, vt.prototype._read_regexp = function (e, t) {
    if ("/" === e && this._allow_regexp_or_xml(t)) {
      for (var n = this._input.next(), r = !1, a = !1; this._input.hasNext() && (r || a || this._input.peek() !== e) && !this._input.testChar(at.newline);) n += this._input.peek(), r ? r = !1 : (r = "\\" === this._input.peek(), "[" === this._input.peek() ? a = !0 : "]" === this._input.peek() && (a = !1)), this._input.next();
      return this._input.peek() === e && (n += this._input.next(), n += this._input.read(at.identifier)), this._create_token(lt.STRING, n);
    }
    return null;
  }, vt.prototype._read_xml = function (e, t) {
    if (this._options.e4x && "<" === e && this._allow_regexp_or_xml(t)) {
      var n = "",
        r = this.__patterns.xml.read_match();
      if (r) {
        for (var a = r[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), i = 0 === a.indexOf("{"), o = 0; r;) {
          var s = !!r[1],
            l = r[2];
          if (!(r[r.length - 1] || "![CDATA[" === l.slice(0, 8)) && (l === a || i && l.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (s ? --o : ++o), n += r[0], o <= 0) break;
          r = this.__patterns.xml.read_match();
        }
        return r || (n += this._input.match(/[\s\S]*/g)[0]), n = n.replace(at.allLineBreaks, "\n"), this._create_token(lt.STRING, n);
      }
    }
    return null;
  }, vt.prototype._read_string_recursive = function (e, t, n) {
    var r, a;
    "'" === e ? a = this.__patterns.single_quote : '"' === e ? a = this.__patterns.double_quote : "`" === e ? a = this.__patterns.template_text : "}" === e && (a = this.__patterns.template_expression);
    for (var i = a.read(), o = ""; this._input.hasNext();) {
      if ((o = this._input.next()) === e || !t && at.newline.test(o)) {
        this._input.back();
        break;
      }
      "\\" === o && this._input.hasNext() ? ("x" === (r = this._input.peek()) || "u" === r ? this.has_char_escapes = !0 : "\r" === r && "\n" === this._input.peek(1) && this._input.next(), o += this._input.next()) : n && ("${" === n && "$" === o && "{" === this._input.peek() && (o += this._input.next()), n === o && (o += "`" === e ? this._read_string_recursive("}", t, "`") : this._read_string_recursive("`", t, "${"), this._input.hasNext() && (o += this._input.next()))), i += o += a.read();
    }
    return i;
  }, xe.Tokenizer = vt, xe.TOKEN = lt, xe.positionable_operators = ft.slice(), xe.line_starters = At.slice();
  var Et = pe.Output,
    bt = ve.Token,
    wt = Ee,
    Ct = be.Options,
    Ot = xe.Tokenizer,
    Mt = xe.line_starters,
    St = xe.positionable_operators,
    Tt = xe.TOKEN;
  function kt(e, t) {
    return -1 !== t.indexOf(e);
  }
  function xt(e) {
    return e.replace(/^\s+/g, "");
  }
  function Dt(e, t) {
    return e && e.type === Tt.RESERVED && e.text === t;
  }
  function It(e, t) {
    return e && e.type === Tt.RESERVED && kt(e.text, t);
  }
  var Pt = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"],
    Lt = function (e) {
      for (var t = {}, n = 0; n < e.length; n++) t[e[n].replace(/-/g, "_")] = e[n];
      return t;
    }(["before-newline", "after-newline", "preserve-newline"]),
    Rt = [Lt.before_newline, Lt.preserve_newline],
    Bt = "BlockStatement",
    Nt = "Statement",
    Ut = "ObjectLiteral",
    Ft = "ArrayLiteral",
    jt = "ForInitializer",
    Ht = "Conditional",
    Wt = "Expression";
  function Kt(e, t) {
    t.multiline_frame || t.mode === jt || t.mode === Ht || e.remove_indent(t.start_line_index);
  }
  function Vt(e) {
    return e === Ft;
  }
  function zt(e) {
    return kt(e, [Wt, jt, Ht]);
  }
  function Yt(e, t) {
    t = t || {}, this._source_text = e || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new Ct(t);
  }
  Yt.prototype.create_flags = function (e, t) {
    var n = 0;
    return e && (n = e.indentation_level, !this._output.just_added_newline() && e.line_indent_level > n && (n = e.line_indent_level)), {
      mode: t,
      parent: e,
      last_token: e ? e.last_token : new bt(Tt.START_BLOCK, ""),
      last_word: e ? e.last_word : "",
      declaration_statement: !1,
      declaration_assignment: !1,
      multiline_frame: !1,
      inline_frame: !1,
      if_block: !1,
      else_block: !1,
      class_start_block: !1,
      do_block: !1,
      do_while: !1,
      import_block: !1,
      in_case_statement: !1,
      in_case: !1,
      case_body: !1,
      case_block: !1,
      indentation_level: n,
      alignment: 0,
      line_indent_level: e ? e.line_indent_level : n,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0
    };
  }, Yt.prototype._reset = function (e) {
    var t = e.match(/^[\t ]*/)[0];
    this._last_last_text = "", this._output = new Et(this._options, t), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(Bt);
    var n = new Ot(e, this._options);
    return this._tokens = n.tokenize(), e;
  }, Yt.prototype.beautify = function () {
    if (this._options.disabled) return this._source_text;
    var e = this._reset(this._source_text),
      t = this._options.eol;
    "auto" === this._options.eol && (t = "\n", e && wt.lineBreak.test(e || "") && (t = e.match(wt.lineBreak)[0]));
    for (var n = this._tokens.next(); n;) this.handle_token(n), this._last_last_text = this._flags.last_token.text, this._flags.last_token = n, n = this._tokens.next();
    return this._output.get_code(t);
  }, Yt.prototype.handle_token = function (e, t) {
    e.type === Tt.START_EXPR ? this.handle_start_expr(e) : e.type === Tt.END_EXPR ? this.handle_end_expr(e) : e.type === Tt.START_BLOCK ? this.handle_start_block(e) : e.type === Tt.END_BLOCK ? this.handle_end_block(e) : e.type === Tt.WORD || e.type === Tt.RESERVED ? this.handle_word(e) : e.type === Tt.SEMICOLON ? this.handle_semicolon(e) : e.type === Tt.STRING ? this.handle_string(e) : e.type === Tt.EQUALS ? this.handle_equals(e) : e.type === Tt.OPERATOR ? this.handle_operator(e) : e.type === Tt.COMMA ? this.handle_comma(e) : e.type === Tt.BLOCK_COMMENT ? this.handle_block_comment(e, t) : e.type === Tt.COMMENT ? this.handle_comment(e, t) : e.type === Tt.DOT ? this.handle_dot(e) : e.type === Tt.EOF ? this.handle_eof(e) : (e.type, Tt.UNKNOWN, this.handle_unknown(e, t));
  }, Yt.prototype.handle_whitespace_and_comments = function (e, t) {
    var n = e.newlines,
      r = this._options.keep_array_indentation && Vt(this._flags.mode);
    if (e.comments_before) for (var a = e.comments_before.next(); a;) this.handle_whitespace_and_comments(a, t), this.handle_token(a, t), a = e.comments_before.next();
    if (r) for (var i = 0; i < n; i += 1) this.print_newline(i > 0, t);else if (this._options.max_preserve_newlines && n > this._options.max_preserve_newlines && (n = this._options.max_preserve_newlines), this._options.preserve_newlines && n > 1) {
      this.print_newline(!1, t);
      for (var o = 1; o < n; o += 1) this.print_newline(!0, t);
    }
  };
  var Qt = ["async", "break", "continue", "return", "throw", "yield"];
  Yt.prototype.allow_wrap_or_preserved_newline = function (e, t) {
    if (t = void 0 !== t && t, !this._output.just_added_newline()) {
      var n = this._options.preserve_newlines && e.newlines || t;
      if (kt(this._flags.last_token.text, St) || kt(e.text, St)) {
        var r = kt(this._flags.last_token.text, St) && kt(this._options.operator_position, Rt) || kt(e.text, St);
        n = n && r;
      }
      if (n) this.print_newline(!1, !0);else if (this._options.wrap_line_length) {
        if (It(this._flags.last_token, Qt)) return;
        this._output.set_wrap_point();
      }
    }
  }, Yt.prototype.print_newline = function (e, t) {
    if (!t && ";" !== this._flags.last_token.text && "," !== this._flags.last_token.text && "=" !== this._flags.last_token.text && (this._flags.last_token.type !== Tt.OPERATOR || "--" === this._flags.last_token.text || "++" === this._flags.last_token.text)) for (var n = this._tokens.peek(); !(this._flags.mode !== Nt || this._flags.if_block && Dt(n, "else") || this._flags.do_block);) this.restore_mode();
    this._output.add_new_line(e) && (this._flags.multiline_frame = !0);
  }, Yt.prototype.print_token_line_indentation = function (e) {
    this._output.just_added_newline() && (this._options.keep_array_indentation && e.newlines && ("[" === e.text || Vt(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(e.whitespace_before), this._output.space_before_token = !1) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level));
  }, Yt.prototype.print_token = function (e) {
    if (this._output.raw) this._output.add_raw_token(e);else {
      if (this._options.comma_first && e.previous && e.previous.type === Tt.COMMA && this._output.just_added_newline() && "," === this._output.previous_line.last()) {
        var t = this._output.previous_line.pop();
        this._output.previous_line.is_empty() && (this._output.previous_line.push(t), this._output.trim(!0), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(e), this._output.add_token(","), this._output.space_before_token = !0;
      }
      this.print_token_line_indentation(e), this._output.non_breaking_space = !0, this._output.add_token(e.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = !0);
    }
  }, Yt.prototype.indent = function () {
    this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, Yt.prototype.deindent = function () {
    this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, Yt.prototype.set_mode = function (e) {
    this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, e), this._flags = this.create_flags(this._previous_flags, e), this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, Yt.prototype.restore_mode = function () {
    this._flag_store.length > 0 && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === Nt && Kt(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, Yt.prototype.start_of_object_property = function () {
    return this._flags.parent.mode === Ut && this._flags.mode === Nt && (":" === this._flags.last_token.text && 0 === this._flags.ternary_depth || It(this._flags.last_token, ["get", "set"]));
  }, Yt.prototype.start_of_statement = function (e) {
    var t = !1;
    return !!(t = (t = (t = (t = (t = (t = (t = t || It(this._flags.last_token, ["var", "let", "const"]) && e.type === Tt.WORD) || Dt(this._flags.last_token, "do")) || !(this._flags.parent.mode === Ut && this._flags.mode === Nt) && It(this._flags.last_token, Qt) && !e.newlines) || Dt(this._flags.last_token, "else") && !(Dt(e, "if") && !e.comments_before)) || this._flags.last_token.type === Tt.END_EXPR && (this._previous_flags.mode === jt || this._previous_flags.mode === Ht)) || this._flags.last_token.type === Tt.WORD && this._flags.mode === Bt && !this._flags.in_case && !("--" === e.text || "++" === e.text) && "function" !== this._last_last_text && e.type !== Tt.WORD && e.type !== Tt.RESERVED) || this._flags.mode === Ut && (":" === this._flags.last_token.text && 0 === this._flags.ternary_depth || It(this._flags.last_token, ["get", "set"]))) && (this.set_mode(Nt), this.indent(), this.handle_whitespace_and_comments(e, !0), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e, It(e, ["do", "for", "if", "while"])), !0);
  }, Yt.prototype.handle_start_expr = function (e) {
    this.start_of_statement(e) || this.handle_whitespace_and_comments(e);
    var t = Wt;
    if ("[" === e.text) {
      if (this._flags.last_token.type === Tt.WORD || ")" === this._flags.last_token.text) return It(this._flags.last_token, Mt) && (this._output.space_before_token = !0), this.print_token(e), this.set_mode(t), this.indent(), void (this._options.space_in_paren && (this._output.space_before_token = !0));
      t = Ft, Vt(this._flags.mode) && ("[" !== this._flags.last_token.text && ("," !== this._flags.last_token.text || "]" !== this._last_last_text && "}" !== this._last_last_text) || this._options.keep_array_indentation || this.print_newline()), kt(this._flags.last_token.type, [Tt.START_EXPR, Tt.END_EXPR, Tt.WORD, Tt.OPERATOR, Tt.DOT]) || (this._output.space_before_token = !0);
    } else {
      if (this._flags.last_token.type === Tt.RESERVED) "for" === this._flags.last_token.text ? (this._output.space_before_token = this._options.space_before_conditional, t = jt) : kt(this._flags.last_token.text, ["if", "while", "switch"]) ? (this._output.space_before_token = this._options.space_before_conditional, t = Ht) : kt(this._flags.last_word, ["await", "async"]) ? this._output.space_before_token = !0 : "import" === this._flags.last_token.text && "" === e.whitespace_before ? this._output.space_before_token = !1 : (kt(this._flags.last_token.text, Mt) || "catch" === this._flags.last_token.text) && (this._output.space_before_token = !0);else if (this._flags.last_token.type === Tt.EQUALS || this._flags.last_token.type === Tt.OPERATOR) this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e);else if (this._flags.last_token.type === Tt.WORD) {
        this._output.space_before_token = !1;
        var n = this._tokens.peek(-3);
        if (this._options.space_after_named_function && n) {
          var r = this._tokens.peek(-4);
          It(n, ["async", "function"]) || "*" === n.text && It(r, ["async", "function"]) ? this._output.space_before_token = !0 : this._flags.mode === Ut ? "{" !== n.text && "," !== n.text && ("*" !== n.text || "{" !== r.text && "," !== r.text) || (this._output.space_before_token = !0) : this._flags.parent && this._flags.parent.class_start_block && (this._output.space_before_token = !0);
        }
      } else this.allow_wrap_or_preserved_newline(e);
      (this._flags.last_token.type === Tt.RESERVED && ("function" === this._flags.last_word || "typeof" === this._flags.last_word) || "*" === this._flags.last_token.text && (kt(this._last_last_text, ["function", "yield"]) || this._flags.mode === Ut && kt(this._last_last_text, ["{", ","]))) && (this._output.space_before_token = this._options.space_after_anon_function);
    }
    ";" === this._flags.last_token.text || this._flags.last_token.type === Tt.START_BLOCK ? this.print_newline() : this._flags.last_token.type !== Tt.END_EXPR && this._flags.last_token.type !== Tt.START_EXPR && this._flags.last_token.type !== Tt.END_BLOCK && "." !== this._flags.last_token.text && this._flags.last_token.type !== Tt.COMMA || this.allow_wrap_or_preserved_newline(e, e.newlines), this.print_token(e), this.set_mode(t), this._options.space_in_paren && (this._output.space_before_token = !0), this.indent();
  }, Yt.prototype.handle_end_expr = function (e) {
    for (; this._flags.mode === Nt;) this.restore_mode();
    this.handle_whitespace_and_comments(e), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(e, "]" === e.text && Vt(this._flags.mode) && !this._options.keep_array_indentation), this._options.space_in_paren && (this._flags.last_token.type !== Tt.START_EXPR || this._options.space_in_empty_paren ? this._output.space_before_token = !0 : (this._output.trim(), this._output.space_before_token = !1)), this.deindent(), this.print_token(e), this.restore_mode(), Kt(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === Ht && (this._previous_flags.mode = Wt, this._flags.do_block = !1, this._flags.do_while = !1);
  }, Yt.prototype.handle_start_block = function (e) {
    this.handle_whitespace_and_comments(e);
    var t = this._tokens.peek(),
      n = this._tokens.peek(1);
    "switch" === this._flags.last_word && this._flags.last_token.type === Tt.END_EXPR ? (this.set_mode(Bt), this._flags.in_case_statement = !0) : this._flags.case_body ? this.set_mode(Bt) : n && (kt(n.text, [":", ","]) && kt(t.type, [Tt.STRING, Tt.WORD, Tt.RESERVED]) || kt(t.text, ["get", "set", "..."]) && kt(n.type, [Tt.WORD, Tt.RESERVED])) ? kt(this._last_last_text, ["class", "interface"]) && !kt(n.text, [":", ","]) ? this.set_mode(Bt) : this.set_mode(Ut) : this._flags.last_token.type === Tt.OPERATOR && "=>" === this._flags.last_token.text ? this.set_mode(Bt) : kt(this._flags.last_token.type, [Tt.EQUALS, Tt.START_EXPR, Tt.COMMA, Tt.OPERATOR]) || It(this._flags.last_token, ["return", "throw", "import", "default"]) ? this.set_mode(Ut) : this.set_mode(Bt), this._flags.last_token && It(this._flags.last_token.previous, ["class", "extends"]) && (this._flags.class_start_block = !0);
    var r = !t.comments_before && "}" === t.text,
      a = r && "function" === this._flags.last_word && this._flags.last_token.type === Tt.END_EXPR;
    if (this._options.brace_preserve_inline) {
      var i = 0,
        o = null;
      this._flags.inline_frame = !0;
      do {
        if (i += 1, (o = this._tokens.peek(i - 1)).newlines) {
          this._flags.inline_frame = !1;
          break;
        }
      } while (o.type !== Tt.EOF && (o.type !== Tt.END_BLOCK || o.opened !== e));
    }
    ("expand" === this._options.brace_style || "none" === this._options.brace_style && e.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== Tt.OPERATOR && (a || this._flags.last_token.type === Tt.EQUALS || It(this._flags.last_token, Pt) && "else" !== this._flags.last_token.text) ? this._output.space_before_token = !0 : this.print_newline(!1, !0) : (!Vt(this._previous_flags.mode) || this._flags.last_token.type !== Tt.START_EXPR && this._flags.last_token.type !== Tt.COMMA || ((this._flags.last_token.type === Tt.COMMA || this._options.space_in_paren) && (this._output.space_before_token = !0), (this._flags.last_token.type === Tt.COMMA || this._flags.last_token.type === Tt.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(e), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = !1)), this._flags.last_token.type !== Tt.OPERATOR && this._flags.last_token.type !== Tt.START_EXPR && (this._flags.last_token.type !== Tt.START_BLOCK || this._flags.inline_frame ? this._output.space_before_token = !0 : this.print_newline())), this.print_token(e), this.indent(), r || this._options.brace_preserve_inline && this._flags.inline_frame || this.print_newline();
  }, Yt.prototype.handle_end_block = function (e) {
    for (this.handle_whitespace_and_comments(e); this._flags.mode === Nt;) this.restore_mode();
    var t = this._flags.last_token.type === Tt.START_BLOCK;
    this._flags.inline_frame && !t ? this._output.space_before_token = !0 : "expand" === this._options.brace_style ? t || this.print_newline() : t || (Vt(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = !1, this.print_newline(), this._options.keep_array_indentation = !0) : this.print_newline()), this.restore_mode(), this.print_token(e);
  }, Yt.prototype.handle_word = function (e) {
    if (e.type === Tt.RESERVED && (kt(e.text, ["set", "get"]) && this._flags.mode !== Ut || "import" === e.text && kt(this._tokens.peek().text, ["(", "."]) || kt(e.text, ["as", "from"]) && !this._flags.import_block || this._flags.mode === Ut && ":" === this._tokens.peek().text) && (e.type = Tt.WORD), this.start_of_statement(e) ? It(this._flags.last_token, ["var", "let", "const"]) && e.type === Tt.WORD && (this._flags.declaration_statement = !0) : !e.newlines || zt(this._flags.mode) || this._flags.last_token.type === Tt.OPERATOR && "--" !== this._flags.last_token.text && "++" !== this._flags.last_token.text || this._flags.last_token.type === Tt.EQUALS || !this._options.preserve_newlines && It(this._flags.last_token, ["var", "let", "const", "set", "get"]) ? this.handle_whitespace_and_comments(e) : (this.handle_whitespace_and_comments(e), this.print_newline()), this._flags.do_block && !this._flags.do_while) {
      if (Dt(e, "while")) return this._output.space_before_token = !0, this.print_token(e), this._output.space_before_token = !0, void (this._flags.do_while = !0);
      this.print_newline(), this._flags.do_block = !1;
    }
    if (this._flags.if_block) if (!this._flags.else_block && Dt(e, "else")) this._flags.else_block = !0;else {
      for (; this._flags.mode === Nt;) this.restore_mode();
      this._flags.if_block = !1, this._flags.else_block = !1;
    }
    if (this._flags.in_case_statement && It(e, ["case", "default"])) return this.print_newline(), this._flags.case_block || !this._flags.case_body && !this._options.jslint_happy || this.deindent(), this._flags.case_body = !1, this.print_token(e), void (this._flags.in_case = !0);
    if (this._flags.last_token.type !== Tt.COMMA && this._flags.last_token.type !== Tt.START_EXPR && this._flags.last_token.type !== Tt.EQUALS && this._flags.last_token.type !== Tt.OPERATOR || this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e), Dt(e, "function")) return (kt(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !kt(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) && this._flags.last_token.type !== Tt.OPERATOR) && (this._output.just_added_blankline() || e.comments_before || (this.print_newline(), this.print_newline(!0))), this._flags.last_token.type === Tt.RESERVED || this._flags.last_token.type === Tt.WORD ? It(this._flags.last_token, ["get", "set", "new", "export"]) || It(this._flags.last_token, Qt) || Dt(this._flags.last_token, "default") && "export" === this._last_last_text || "declare" === this._flags.last_token.text ? this._output.space_before_token = !0 : this.print_newline() : this._flags.last_token.type === Tt.OPERATOR || "=" === this._flags.last_token.text ? this._output.space_before_token = !0 : (this._flags.multiline_frame || !zt(this._flags.mode) && !Vt(this._flags.mode)) && this.print_newline(), this.print_token(e), void (this._flags.last_word = e.text);
    var t = "NONE";
    this._flags.last_token.type === Tt.END_BLOCK ? this._previous_flags.inline_frame ? t = "SPACE" : It(e, ["else", "catch", "finally", "from"]) ? "expand" === this._options.brace_style || "end-expand" === this._options.brace_style || "none" === this._options.brace_style && e.newlines ? t = "NEWLINE" : (t = "SPACE", this._output.space_before_token = !0) : t = "NEWLINE" : this._flags.last_token.type === Tt.SEMICOLON && this._flags.mode === Bt ? t = "NEWLINE" : this._flags.last_token.type === Tt.SEMICOLON && zt(this._flags.mode) ? t = "SPACE" : this._flags.last_token.type === Tt.STRING ? t = "NEWLINE" : this._flags.last_token.type === Tt.RESERVED || this._flags.last_token.type === Tt.WORD || "*" === this._flags.last_token.text && (kt(this._last_last_text, ["function", "yield"]) || this._flags.mode === Ut && kt(this._last_last_text, ["{", ","])) ? t = "SPACE" : this._flags.last_token.type === Tt.START_BLOCK ? t = this._flags.inline_frame ? "SPACE" : "NEWLINE" : this._flags.last_token.type === Tt.END_EXPR && (this._output.space_before_token = !0, t = "NEWLINE"), It(e, Mt) && ")" !== this._flags.last_token.text && (t = this._flags.inline_frame || "else" === this._flags.last_token.text || "export" === this._flags.last_token.text ? "SPACE" : "NEWLINE"), It(e, ["else", "catch", "finally"]) ? (this._flags.last_token.type !== Tt.END_BLOCK || this._previous_flags.mode !== Bt || "expand" === this._options.brace_style || "end-expand" === this._options.brace_style || "none" === this._options.brace_style && e.newlines) && !this._flags.inline_frame ? this.print_newline() : (this._output.trim(!0), "}" !== this._output.current_line.last() && this.print_newline(), this._output.space_before_token = !0) : "NEWLINE" === t ? It(this._flags.last_token, Pt) || "declare" === this._flags.last_token.text && It(e, ["var", "let", "const"]) ? this._output.space_before_token = !0 : this._flags.last_token.type !== Tt.END_EXPR ? this._flags.last_token.type === Tt.START_EXPR && It(e, ["var", "let", "const"]) || ":" === this._flags.last_token.text || (Dt(e, "if") && Dt(e.previous, "else") ? this._output.space_before_token = !0 : this.print_newline()) : It(e, Mt) && ")" !== this._flags.last_token.text && this.print_newline() : this._flags.multiline_frame && Vt(this._flags.mode) && "," === this._flags.last_token.text && "}" === this._last_last_text ? this.print_newline() : "SPACE" === t && (this._output.space_before_token = !0), !e.previous || e.previous.type !== Tt.WORD && e.previous.type !== Tt.RESERVED || (this._output.space_before_token = !0), this.print_token(e), this._flags.last_word = e.text, e.type === Tt.RESERVED && ("do" === e.text ? this._flags.do_block = !0 : "if" === e.text ? this._flags.if_block = !0 : "import" === e.text ? this._flags.import_block = !0 : this._flags.import_block && Dt(e, "from") && (this._flags.import_block = !1));
  }, Yt.prototype.handle_semicolon = function (e) {
    this.start_of_statement(e) ? this._output.space_before_token = !1 : this.handle_whitespace_and_comments(e);
    for (var t = this._tokens.peek(); !(this._flags.mode !== Nt || this._flags.if_block && Dt(t, "else") || this._flags.do_block);) this.restore_mode();
    this._flags.import_block && (this._flags.import_block = !1), this.print_token(e);
  }, Yt.prototype.handle_string = function (e) {
    (!e.text.startsWith("`") || 0 !== e.newlines || "" !== e.whitespace_before || ")" !== e.previous.text && this._flags.last_token.type !== Tt.WORD) && (this.start_of_statement(e) ? this._output.space_before_token = !0 : (this.handle_whitespace_and_comments(e), this._flags.last_token.type === Tt.RESERVED || this._flags.last_token.type === Tt.WORD || this._flags.inline_frame ? this._output.space_before_token = !0 : this._flags.last_token.type === Tt.COMMA || this._flags.last_token.type === Tt.START_EXPR || this._flags.last_token.type === Tt.EQUALS || this._flags.last_token.type === Tt.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e) : !e.text.startsWith("`") || this._flags.last_token.type !== Tt.END_EXPR || "]" !== e.previous.text && ")" !== e.previous.text || 0 !== e.newlines ? this.print_newline() : this._output.space_before_token = !0)), this.print_token(e);
  }, Yt.prototype.handle_equals = function (e) {
    this.start_of_statement(e) || this.handle_whitespace_and_comments(e), this._flags.declaration_statement && (this._flags.declaration_assignment = !0), this._output.space_before_token = !0, this.print_token(e), this._output.space_before_token = !0;
  }, Yt.prototype.handle_comma = function (e) {
    this.handle_whitespace_and_comments(e, !0), this.print_token(e), this._output.space_before_token = !0, this._flags.declaration_statement ? (zt(this._flags.parent.mode) && (this._flags.declaration_assignment = !1), this._flags.declaration_assignment ? (this._flags.declaration_assignment = !1, this.print_newline(!1, !0)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(e)) : this._flags.mode === Ut || this._flags.mode === Nt && this._flags.parent.mode === Ut ? (this._flags.mode === Nt && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(e);
  }, Yt.prototype.handle_operator = function (e) {
    var t = "*" === e.text && (It(this._flags.last_token, ["function", "yield"]) || kt(this._flags.last_token.type, [Tt.START_BLOCK, Tt.COMMA, Tt.END_BLOCK, Tt.SEMICOLON])),
      n = kt(e.text, ["-", "+"]) && (kt(this._flags.last_token.type, [Tt.START_BLOCK, Tt.START_EXPR, Tt.EQUALS, Tt.OPERATOR]) || kt(this._flags.last_token.text, Mt) || "," === this._flags.last_token.text);
    if (this.start_of_statement(e)) ;else {
      var r = !t;
      this.handle_whitespace_and_comments(e, r);
    }
    if ("*" !== e.text || this._flags.last_token.type !== Tt.DOT) {
      if ("::" !== e.text) {
        if (this._flags.last_token.type === Tt.OPERATOR && kt(this._options.operator_position, Rt) && this.allow_wrap_or_preserved_newline(e), ":" === e.text && this._flags.in_case) return this.print_token(e), this._flags.in_case = !1, this._flags.case_body = !0, void (this._tokens.peek().type !== Tt.START_BLOCK ? (this.indent(), this.print_newline(), this._flags.case_block = !1) : (this._flags.case_block = !0, this._output.space_before_token = !0));
        var a = !0,
          i = !0,
          o = !1;
        if (":" === e.text ? 0 === this._flags.ternary_depth ? a = !1 : (this._flags.ternary_depth -= 1, o = !0) : "?" === e.text && (this._flags.ternary_depth += 1), !n && !t && this._options.preserve_newlines && kt(e.text, St)) {
          var s = ":" === e.text,
            l = s && o,
            c = s && !o;
          switch (this._options.operator_position) {
            case Lt.before_newline:
              return this._output.space_before_token = !c, this.print_token(e), s && !l || this.allow_wrap_or_preserved_newline(e), void (this._output.space_before_token = !0);
            case Lt.after_newline:
              return this._output.space_before_token = !0, !s || l ? this._tokens.peek().newlines ? this.print_newline(!1, !0) : this.allow_wrap_or_preserved_newline(e) : this._output.space_before_token = !1, this.print_token(e), void (this._output.space_before_token = !0);
            case Lt.preserve_newline:
              return c || this.allow_wrap_or_preserved_newline(e), a = !(this._output.just_added_newline() || c), this._output.space_before_token = a, this.print_token(e), void (this._output.space_before_token = !0);
          }
        }
        if (t) {
          this.allow_wrap_or_preserved_newline(e), a = !1;
          var u = this._tokens.peek();
          i = u && kt(u.type, [Tt.WORD, Tt.RESERVED]);
        } else if ("..." === e.text) this.allow_wrap_or_preserved_newline(e), a = this._flags.last_token.type === Tt.START_BLOCK, i = !1;else if (kt(e.text, ["--", "++", "!", "~"]) || n) {
          if (this._flags.last_token.type !== Tt.COMMA && this._flags.last_token.type !== Tt.START_EXPR || this.allow_wrap_or_preserved_newline(e), a = !1, i = !1, e.newlines && ("--" === e.text || "++" === e.text || "~" === e.text)) {
            var d = It(this._flags.last_token, Pt) && e.newlines;
            d && (this._previous_flags.if_block || this._previous_flags.else_block) && this.restore_mode(), this.print_newline(d, !0);
          }
          ";" === this._flags.last_token.text && zt(this._flags.mode) && (a = !0), this._flags.last_token.type === Tt.RESERVED ? a = !0 : this._flags.last_token.type === Tt.END_EXPR ? a = !("]" === this._flags.last_token.text && ("--" === e.text || "++" === e.text)) : this._flags.last_token.type === Tt.OPERATOR && (a = kt(e.text, ["--", "-", "++", "+"]) && kt(this._flags.last_token.text, ["--", "-", "++", "+"]), kt(e.text, ["+", "-"]) && kt(this._flags.last_token.text, ["--", "++"]) && (i = !0)), (this._flags.mode !== Bt || this._flags.inline_frame) && this._flags.mode !== Nt || "{" !== this._flags.last_token.text && ";" !== this._flags.last_token.text || this.print_newline();
        }
        this._output.space_before_token = this._output.space_before_token || a, this.print_token(e), this._output.space_before_token = i;
      } else this.print_token(e);
    } else this.print_token(e);
  }, Yt.prototype.handle_block_comment = function (e, t) {
    return this._output.raw ? (this._output.add_raw_token(e), void (e.directives && "end" === e.directives.preserve && (this._output.raw = this._options.test_output_raw))) : e.directives ? (this.print_newline(!1, t), this.print_token(e), "start" === e.directives.preserve && (this._output.raw = !0), void this.print_newline(!1, !0)) : wt.newline.test(e.text) || e.newlines ? void this.print_block_commment(e, t) : (this._output.space_before_token = !0, this.print_token(e), void (this._output.space_before_token = !0));
  }, Yt.prototype.print_block_commment = function (e, t) {
    var n,
      r = function (e) {
        for (var t = [], n = (e = e.replace(wt.allLineBreaks, "\n")).indexOf("\n"); -1 !== n;) t.push(e.substring(0, n)), n = (e = e.substring(n + 1)).indexOf("\n");
        return e.length && t.push(e), t;
      }(e.text),
      a = !1,
      i = !1,
      o = e.whitespace_before,
      s = o.length;
    if (this.print_newline(!1, t), this.print_token_line_indentation(e), this._output.add_token(r[0]), this.print_newline(!1, t), r.length > 1) {
      for (a = function (e) {
        for (var t = 0; t < e.length; t++) if ("*" !== e[t].trim().charAt(0)) return !1;
        return !0;
      }(r = r.slice(1)), i = function (e, t) {
        for (var n, r = 0, a = e.length; r < a; r++) if ((n = e[r]) && 0 !== n.indexOf(t)) return !1;
        return !0;
      }(r, o), a && (this._flags.alignment = 1), n = 0; n < r.length; n++) a ? (this.print_token_line_indentation(e), this._output.add_token(xt(r[n]))) : i && r[n] ? (this.print_token_line_indentation(e), this._output.add_token(r[n].substring(s))) : (this._output.current_line.set_indent(-1), this._output.add_token(r[n])), this.print_newline(!1, t);
      this._flags.alignment = 0;
    }
  }, Yt.prototype.handle_comment = function (e, t) {
    e.newlines ? this.print_newline(!1, t) : this._output.trim(!0), this._output.space_before_token = !0, this.print_token(e), this.print_newline(!1, t);
  }, Yt.prototype.handle_dot = function (e) {
    this.start_of_statement(e) || this.handle_whitespace_and_comments(e, !0), this._flags.last_token.text.match("^[0-9]+$") && (this._output.space_before_token = !0), It(this._flags.last_token, Pt) ? this._output.space_before_token = !1 : this.allow_wrap_or_preserved_newline(e, ")" === this._flags.last_token.text && this._options.break_chained_methods), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(e);
  }, Yt.prototype.handle_unknown = function (e, t) {
    this.print_token(e), "\n" === e.text[e.text.length - 1] && this.print_newline(!1, t);
  }, Yt.prototype.handle_eof = function (e) {
    for (; this._flags.mode === Nt;) this.restore_mode();
    this.handle_whitespace_and_comments(e);
  }, de.Beautifier = Yt;
  var Gt = de.Beautifier,
    $t = be.Options;
  ue.exports = function (e, t) {
    return new Gt(e, t).beautify();
  }, ue.exports.defaultOptions = function () {
    return new $t();
  };
  var qt = {
      exports: {}
    },
    Zt = {},
    Xt = {},
    Jt = we.Options;
  function en(e) {
    Jt.call(this, e, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", !0), this.newline_between_rules = this._get_boolean("newline_between_rules", !0);
    var t = this._get_boolean("space_around_selector_separator");
    this.space_around_combinator = this._get_boolean("space_around_combinator") || t;
    var n = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_style = "collapse";
    for (var r = 0; r < n.length; r++) "expand" !== n[r] ? this.brace_style = "collapse" : this.brace_style = n[r];
  }
  en.prototype = new Jt(), Xt.Options = en;
  var tn = Xt.Options,
    nn = pe.Output,
    rn = De.InputScanner,
    an = new (0, Ge.Directives)(/\/\*/, /\*\//),
    on = /\r\n|[\r\n]/,
    sn = /\r\n|[\r\n]/g,
    ln = /\s/,
    cn = /(?:\s|\n)+/g,
    un = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,
    dn = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
  function pn(e, t) {
    this._source_text = e || "", this._options = new tn(t), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
      "@page": !0,
      "@font-face": !0,
      "@keyframes": !0,
      "@media": !0,
      "@supports": !0,
      "@document": !0
    }, this.CONDITIONAL_GROUP_RULE = {
      "@media": !0,
      "@supports": !0,
      "@document": !0
    }, this.NON_SEMICOLON_NEWLINE_PROPERTY = ["grid-template-areas", "grid-template"];
  }
  pn.prototype.eatString = function (e) {
    var t = "";
    for (this._ch = this._input.next(); this._ch;) {
      if (t += this._ch, "\\" === this._ch) t += this._input.next();else if (-1 !== e.indexOf(this._ch) || "\n" === this._ch) break;
      this._ch = this._input.next();
    }
    return t;
  }, pn.prototype.eatWhitespace = function (e) {
    for (var t = ln.test(this._input.peek()), n = 0; ln.test(this._input.peek());) this._ch = this._input.next(), e && "\n" === this._ch && (0 === n || n < this._options.max_preserve_newlines) && (n++, this._output.add_new_line(!0));
    return t;
  }, pn.prototype.foundNestedPseudoClass = function () {
    for (var e = 0, t = 1, n = this._input.peek(t); n;) {
      if ("{" === n) return !0;
      if ("(" === n) e += 1;else if (")" === n) {
        if (0 === e) return !1;
        e -= 1;
      } else if (";" === n || "}" === n) return !1;
      t++, n = this._input.peek(t);
    }
    return !1;
  }, pn.prototype.print_string = function (e) {
    this._output.set_indent(this._indentLevel), this._output.non_breaking_space = !0, this._output.add_token(e);
  }, pn.prototype.preserveSingleSpace = function (e) {
    e && (this._output.space_before_token = !0);
  }, pn.prototype.indent = function () {
    this._indentLevel++;
  }, pn.prototype.outdent = function () {
    this._indentLevel > 0 && this._indentLevel--;
  }, pn.prototype.beautify = function () {
    if (this._options.disabled) return this._source_text;
    var e = this._source_text,
      t = this._options.eol;
    "auto" === t && (t = "\n", e && on.test(e || "") && (t = e.match(on)[0]));
    var n = (e = e.replace(sn, "\n")).match(/^[\t ]*/)[0];
    this._output = new nn(this._options, n), this._input = new rn(e), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
    for (var r, a, i = 0, o = !1, s = !1, l = !1, c = !1, u = !1, d = !1, p = this._ch, f = !1; r = "" !== this._input.read(cn), a = p, this._ch = this._input.next(), "\\" === this._ch && this._input.hasNext() && (this._ch += this._input.next()), p = this._ch, this._ch;) if ("/" === this._ch && "*" === this._input.peek()) {
      this._output.add_new_line(), this._input.back();
      var h = this._input.read(un),
        _ = an.get_directives(h);
      _ && "start" === _.ignore && (h += an.readIgnored(this._input)), this.print_string(h), this.eatWhitespace(!0), this._output.add_new_line();
    } else if ("/" === this._ch && "/" === this._input.peek()) this._output.space_before_token = !0, this._input.back(), this.print_string(this._input.read(dn)), this.eatWhitespace(!0);else if ("@" === this._ch || "$" === this._ch) {
      if (this.preserveSingleSpace(r), "{" === this._input.peek()) this.print_string(this._ch + this.eatString("}"));else {
        this.print_string(this._ch);
        var m = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
        m.match(/[ :]$/) && (m = this.eatString(": ").replace(/\s$/, ""), this.print_string(m), this._output.space_before_token = !0), "extend" === (m = m.replace(/\s$/, "")) ? c = !0 : "import" === m && (u = !0), m in this.NESTED_AT_RULE ? (this._nestedLevel += 1, m in this.CONDITIONAL_GROUP_RULE && (l = !0)) : o || 0 !== i || -1 === m.indexOf(":") || (s = !0, this.indent());
      }
    } else if ("#" === this._ch && "{" === this._input.peek()) this.preserveSingleSpace(r), this.print_string(this._ch + this.eatString("}"));else if ("{" === this._ch) s && (s = !1, this.outdent()), l ? (l = !1, o = this._indentLevel >= this._nestedLevel) : o = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && o && this._output.previous_line && "{" !== this._output.previous_line.item(-1) && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = !0, "expand" === this._options.brace_style ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : ("(" === a ? this._output.space_before_token = !1 : "," !== a && this.indent(), this.print_string(this._ch)), this.eatWhitespace(!0), this._output.add_new_line();else if ("}" === this._ch) this.outdent(), this._output.add_new_line(), "{" === a && this._output.trim(!0), u = !1, c = !1, s && (this.outdent(), s = !1), this.print_string(this._ch), o = !1, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(!0), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && "}" !== this._input.peek() && this._output.add_new_line(!0), ")" === this._input.peek() && (this._output.trim(!0), "expand" === this._options.brace_style && this._output.add_new_line(!0));else if (":" === this._ch) {
      for (var A = 0; A < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; A++) if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[A])) {
        f = !0;
        break;
      }
      !o && !l || this._input.lookBack("&") || this.foundNestedPseudoClass() || this._input.lookBack("(") || c || 0 !== i ? (this._input.lookBack(" ") && (this._output.space_before_token = !0), ":" === this._input.peek() ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":")) : (this.print_string(":"), s || (s = !0, this._output.space_before_token = !0, this.eatWhitespace(!0), this.indent()));
    } else if ('"' === this._ch || "'" === this._ch) {
      var g = '"' === a || "'" === a;
      this.preserveSingleSpace(g || r), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(!0);
    } else if (";" === this._ch) f = !1, 0 === i ? (s && (this.outdent(), s = !1), c = !1, u = !1, this.print_string(this._ch), this.eatWhitespace(!0), "/" !== this._input.peek() && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(!0), this._output.space_before_token = !0);else if ("(" === this._ch) {
      if (this._input.lookBack("url")) this.print_string(this._ch), this.eatWhitespace(), i++, this.indent(), this._ch = this._input.next(), ")" === this._ch || '"' === this._ch || "'" === this._ch ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), i && (i--, this.outdent()));else {
        var y = !1;
        this._input.lookBack("with") && (y = !0), this.preserveSingleSpace(r || y), this.print_string(this._ch), s && "$" === a && this._options.selector_separator_newline ? (this._output.add_new_line(), d = !0) : (this.eatWhitespace(), i++, this.indent());
      }
    } else if (")" === this._ch) i && (i--, this.outdent()), d && ";" === this._input.peek() && this._options.selector_separator_newline && (d = !1, this.outdent(), this._output.add_new_line()), this.print_string(this._ch);else if ("," === this._ch) this.print_string(this._ch), this.eatWhitespace(!0), !this._options.selector_separator_newline || s && !d || 0 !== i || u || c ? this._output.space_before_token = !0 : this._output.add_new_line();else if (">" !== this._ch && "+" !== this._ch && "~" !== this._ch || s || 0 !== i) {
      if ("]" === this._ch) this.print_string(this._ch);else if ("[" === this._ch) this.preserveSingleSpace(r), this.print_string(this._ch);else if ("=" === this._ch) this.eatWhitespace(), this.print_string("="), ln.test(this._ch) && (this._ch = "");else if ("!" !== this._ch || this._input.lookBack("\\")) {
        var v = '"' === a || "'" === a;
        this.preserveSingleSpace(v || r), this.print_string(this._ch), !this._output.just_added_newline() && "\n" === this._input.peek() && f && this._output.add_new_line();
      } else this._output.space_before_token = !0, this.print_string(this._ch);
    } else this._options.space_around_combinator ? (this._output.space_before_token = !0, this.print_string(this._ch), this._output.space_before_token = !0) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && ln.test(this._ch) && (this._ch = ""));
    return this._output.get_code(t);
  }, Zt.Beautifier = pn;
  var fn = Zt.Beautifier,
    hn = Xt.Options;
  qt.exports = function (e, t) {
    return new fn(e, t).beautify();
  }, qt.exports.defaultOptions = function () {
    return new hn();
  };
  var _n = {
      exports: {}
    },
    mn = {},
    An = {},
    gn = we.Options;
  function yn(e) {
    gn.call(this, e, "html"), 1 === this.templating.length && "auto" === this.templating[0] && (this.templating = ["django", "erb", "handlebars", "php"]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", !0), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", !0), this.indent_handlebars = this._get_boolean("indent_handlebars", !0), this.wrap_attributes = this._get_selection("wrap_attributes", ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]), this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size), this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]), this.inline = this._get_array("inline", ["a", "abbr", "area", "audio", "b", "bdi", "bdo", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "map", "mark", "math", "meter", "noscript", "object", "output", "progress", "q", "ruby", "s", "samp", "select", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "var", "video", "wbr", "text", "acronym", "big", "strike", "tt"]), this.void_elements = this._get_array("void_elements", ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr", "!doctype", "?xml", "basefont", "isindex"]), this.unformatted = this._get_array("unformatted", []), this.content_unformatted = this._get_array("content_unformatted", ["pre", "textarea"]), this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"), this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
  }
  yn.prototype = new gn(), An.Options = yn;
  var vn = {},
    En = Le.Tokenizer,
    bn = Le.TOKEN,
    wn = Ge.Directives,
    Cn = qe.TemplatablePattern,
    On = Ue.Pattern,
    Mn = {
      TAG_OPEN: "TK_TAG_OPEN",
      TAG_CLOSE: "TK_TAG_CLOSE",
      ATTRIBUTE: "TK_ATTRIBUTE",
      EQUALS: "TK_EQUALS",
      VALUE: "TK_VALUE",
      COMMENT: "TK_COMMENT",
      TEXT: "TK_TEXT",
      UNKNOWN: "TK_UNKNOWN",
      START: bn.START,
      RAW: bn.RAW,
      EOF: bn.EOF
    },
    Sn = new wn(/<\!--/, /-->/),
    Tn = function (e, t) {
      En.call(this, e, t), this._current_tag_name = "";
      var n = new Cn(this._input).read_options(this._options),
        r = new On(this._input);
      if (this.__patterns = {
        word: n.until(/[\n\r\t <]/),
        single_quote: n.until_after(/'/),
        double_quote: n.until_after(/"/),
        attribute: n.until(/[\n\r\t =>]|\/>/),
        element_name: n.until(/[\n\r\t >\/]/),
        handlebars_comment: r.starting_with(/{{!--/).until_after(/--}}/),
        handlebars: r.starting_with(/{{/).until_after(/}}/),
        handlebars_open: r.until(/[\n\r\t }]/),
        handlebars_raw_close: r.until(/}}/),
        comment: r.starting_with(/<!--/).until_after(/-->/),
        cdata: r.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
        conditional_comment: r.starting_with(/<!\[/).until_after(/]>/),
        processing: r.starting_with(/<\?/).until_after(/\?>/)
      }, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
        var a = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
        this.__patterns.unformatted_content_delimiter = r.matching(a).until_after(a);
      }
    };
  (Tn.prototype = new En())._is_comment = function (e) {
    return !1;
  }, Tn.prototype._is_opening = function (e) {
    return e.type === Mn.TAG_OPEN;
  }, Tn.prototype._is_closing = function (e, t) {
    return e.type === Mn.TAG_CLOSE && t && ((">" === e.text || "/>" === e.text) && "<" === t.text[0] || "}}" === e.text && "{" === t.text[0] && "{" === t.text[1]);
  }, Tn.prototype._reset = function () {
    this._current_tag_name = "";
  }, Tn.prototype._get_next_token = function (e, t) {
    var n = null;
    this._readWhitespace();
    var r = this._input.peek();
    return null === r ? this._create_token(Mn.EOF, "") : n = (n = (n = (n = (n = (n = (n = (n = (n = n || this._read_open_handlebars(r, t)) || this._read_attribute(r, e, t)) || this._read_close(r, t)) || this._read_raw_content(r, e, t)) || this._read_content_word(r)) || this._read_comment_or_cdata(r)) || this._read_processing(r)) || this._read_open(r, t)) || this._create_token(Mn.UNKNOWN, this._input.next());
  }, Tn.prototype._read_comment_or_cdata = function (e) {
    var t = null,
      n = null,
      r = null;
    return "<" === e && ("!" === this._input.peek(1) && ((n = this.__patterns.comment.read()) ? (r = Sn.get_directives(n)) && "start" === r.ignore && (n += Sn.readIgnored(this._input)) : n = this.__patterns.cdata.read()), n && ((t = this._create_token(Mn.COMMENT, n)).directives = r)), t;
  }, Tn.prototype._read_processing = function (e) {
    var t = null,
      n = null;
    if ("<" === e) {
      var r = this._input.peek(1);
      "!" !== r && "?" !== r || (n = (n = this.__patterns.conditional_comment.read()) || this.__patterns.processing.read()), n && ((t = this._create_token(Mn.COMMENT, n)).directives = null);
    }
    return t;
  }, Tn.prototype._read_open = function (e, t) {
    var n = null,
      r = null;
    return t || "<" === e && (n = this._input.next(), "/" === this._input.peek() && (n += this._input.next()), n += this.__patterns.element_name.read(), r = this._create_token(Mn.TAG_OPEN, n)), r;
  }, Tn.prototype._read_open_handlebars = function (e, t) {
    var n = null,
      r = null;
    return t || this._options.indent_handlebars && "{" === e && "{" === this._input.peek(1) && ("!" === this._input.peek(2) ? (n = (n = this.__patterns.handlebars_comment.read()) || this.__patterns.handlebars.read(), r = this._create_token(Mn.COMMENT, n)) : (n = this.__patterns.handlebars_open.read(), r = this._create_token(Mn.TAG_OPEN, n))), r;
  }, Tn.prototype._read_close = function (e, t) {
    var n = null,
      r = null;
    return t && ("<" === t.text[0] && (">" === e || "/" === e && ">" === this._input.peek(1)) ? (n = this._input.next(), "/" === e && (n += this._input.next()), r = this._create_token(Mn.TAG_CLOSE, n)) : "{" === t.text[0] && "}" === e && "}" === this._input.peek(1) && (this._input.next(), this._input.next(), r = this._create_token(Mn.TAG_CLOSE, "}}"))), r;
  }, Tn.prototype._read_attribute = function (e, t, n) {
    var r = null,
      a = "";
    if (n && "<" === n.text[0]) if ("=" === e) r = this._create_token(Mn.EQUALS, this._input.next());else if ('"' === e || "'" === e) {
      var i = this._input.next();
      i += '"' === e ? this.__patterns.double_quote.read() : this.__patterns.single_quote.read(), r = this._create_token(Mn.VALUE, i);
    } else (a = this.__patterns.attribute.read()) && (r = t.type === Mn.EQUALS ? this._create_token(Mn.VALUE, a) : this._create_token(Mn.ATTRIBUTE, a));
    return r;
  }, Tn.prototype._is_content_unformatted = function (e) {
    return -1 === this._options.void_elements.indexOf(e) && (-1 !== this._options.content_unformatted.indexOf(e) || -1 !== this._options.unformatted.indexOf(e));
  }, Tn.prototype._read_raw_content = function (e, t, n) {
    var r = "";
    if (n && "{" === n.text[0]) r = this.__patterns.handlebars_raw_close.read();else if (t.type === Mn.TAG_CLOSE && "<" === t.opened.text[0] && "/" !== t.text[0]) {
      var a = t.opened.text.substr(1).toLowerCase();
      if ("script" === a || "style" === a) {
        var i = this._read_comment_or_cdata(e);
        if (i) return i.type = Mn.TEXT, i;
        r = this._input.readUntil(new RegExp("</" + a + "[\\n\\r\\t ]*?>", "ig"));
      } else this._is_content_unformatted(a) && (r = this._input.readUntil(new RegExp("</" + a + "[\\n\\r\\t ]*?>", "ig")));
    }
    return r ? this._create_token(Mn.TEXT, r) : null;
  }, Tn.prototype._read_content_word = function (e) {
    var t = "";
    if (this._options.unformatted_content_delimiter && e === this._options.unformatted_content_delimiter[0] && (t = this.__patterns.unformatted_content_delimiter.read()), t || (t = this.__patterns.word.read()), t) return this._create_token(Mn.TEXT, t);
  }, vn.Tokenizer = Tn, vn.TOKEN = Mn;
  var kn = An.Options,
    xn = pe.Output,
    Dn = vn.Tokenizer,
    In = vn.TOKEN,
    Pn = /\r\n|[\r\n]/,
    Ln = /\r\n|[\r\n]/g,
    Rn = function (e, t) {
      this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = e.max_preserve_newlines, this.preserve_newlines = e.preserve_newlines, this._output = new xn(e, t);
    };
  Rn.prototype.current_line_has_match = function (e) {
    return this._output.current_line.has_match(e);
  }, Rn.prototype.set_space_before_token = function (e, t) {
    this._output.space_before_token = e, this._output.non_breaking_space = t;
  }, Rn.prototype.set_wrap_point = function () {
    this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
  }, Rn.prototype.add_raw_token = function (e) {
    this._output.add_raw_token(e);
  }, Rn.prototype.print_preserved_newlines = function (e) {
    var t = 0;
    e.type !== In.TEXT && e.previous.type !== In.TEXT && (t = e.newlines ? 1 : 0), this.preserve_newlines && (t = e.newlines < this.max_preserve_newlines + 1 ? e.newlines : this.max_preserve_newlines + 1);
    for (var n = 0; n < t; n++) this.print_newline(n > 0);
    return 0 !== t;
  }, Rn.prototype.traverse_whitespace = function (e) {
    return !(!e.whitespace_before && !e.newlines || (this.print_preserved_newlines(e) || (this._output.space_before_token = !0), 0));
  }, Rn.prototype.previous_token_wrapped = function () {
    return this._output.previous_token_wrapped;
  }, Rn.prototype.print_newline = function (e) {
    this._output.add_new_line(e);
  }, Rn.prototype.print_token = function (e) {
    e.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(e.text));
  }, Rn.prototype.indent = function () {
    this.indent_level++;
  }, Rn.prototype.get_full_indent = function (e) {
    return (e = this.indent_level + (e || 0)) < 1 ? "" : this._output.get_indent_string(e);
  };
  function Bn(e, t) {
    return -1 !== t.indexOf(e);
  }
  function Nn(e, t, n) {
    this.parent = e || null, this.tag = t ? t.tag_name : "", this.indent_level = n || 0, this.parser_token = t || null;
  }
  function Un(e) {
    this._printer = e, this._current_frame = null;
  }
  function Fn(e, t, n, r) {
    this._source_text = e || "", t = t || {}, this._js_beautify = n, this._css_beautify = r, this._tag_stack = null;
    var a = new kn(t, "html");
    this._options = a, this._is_wrap_attributes_force = "force" === this._options.wrap_attributes.substr(0, 5), this._is_wrap_attributes_force_expand_multiline = "force-expand-multiline" === this._options.wrap_attributes, this._is_wrap_attributes_force_aligned = "force-aligned" === this._options.wrap_attributes, this._is_wrap_attributes_aligned_multiple = "aligned-multiple" === this._options.wrap_attributes, this._is_wrap_attributes_preserve = "preserve" === this._options.wrap_attributes.substr(0, 8), this._is_wrap_attributes_preserve_aligned = "preserve-aligned" === this._options.wrap_attributes;
  }
  Un.prototype.get_parser_token = function () {
    return this._current_frame ? this._current_frame.parser_token : null;
  }, Un.prototype.record_tag = function (e) {
    var t = new Nn(this._current_frame, e, this._printer.indent_level);
    this._current_frame = t;
  }, Un.prototype._try_pop_frame = function (e) {
    var t = null;
    return e && (t = e.parser_token, this._printer.indent_level = e.indent_level, this._current_frame = e.parent), t;
  }, Un.prototype._get_frame = function (e, t) {
    for (var n = this._current_frame; n && -1 === e.indexOf(n.tag);) {
      if (t && -1 !== t.indexOf(n.tag)) {
        n = null;
        break;
      }
      n = n.parent;
    }
    return n;
  }, Un.prototype.try_pop = function (e, t) {
    var n = this._get_frame([e], t);
    return this._try_pop_frame(n);
  }, Un.prototype.indent_to_tag = function (e) {
    var t = this._get_frame(e);
    t && (this._printer.indent_level = t.indent_level);
  }, Fn.prototype.beautify = function () {
    if (this._options.disabled) return this._source_text;
    var e = this._source_text,
      t = this._options.eol;
    "auto" === this._options.eol && (t = "\n", e && Pn.test(e) && (t = e.match(Pn)[0]));
    var n = (e = e.replace(Ln, "\n")).match(/^[\t ]*/)[0],
      r = {
        text: "",
        type: ""
      },
      a = new jn(),
      i = new Rn(this._options, n),
      o = new Dn(e, this._options).tokenize();
    this._tag_stack = new Un(i);
    for (var s = null, l = o.next(); l.type !== In.EOF;) l.type === In.TAG_OPEN || l.type === In.COMMENT ? a = s = this._handle_tag_open(i, l, a, r) : l.type === In.ATTRIBUTE || l.type === In.EQUALS || l.type === In.VALUE || l.type === In.TEXT && !a.tag_complete ? s = this._handle_inside_tag(i, l, a, o) : l.type === In.TAG_CLOSE ? s = this._handle_tag_close(i, l, a) : l.type === In.TEXT ? s = this._handle_text(i, l, a) : i.add_raw_token(l), r = s, l = o.next();
    return i._output.get_code(t);
  }, Fn.prototype._handle_tag_close = function (e, t, n) {
    var r = {
      text: t.text,
      type: t.type
    };
    return e.alignment_size = 0, n.tag_complete = !0, e.set_space_before_token(t.newlines || "" !== t.whitespace_before, !0), n.is_unformatted ? e.add_raw_token(t) : ("<" === n.tag_start_char && (e.set_space_before_token("/" === t.text[0], !0), this._is_wrap_attributes_force_expand_multiline && n.has_wrapped_attrs && e.print_newline(!1)), e.print_token(t)), !n.indent_content || n.is_unformatted || n.is_content_unformatted || (e.indent(), n.indent_content = !1), n.is_inline_element || n.is_unformatted || n.is_content_unformatted || e.set_wrap_point(), r;
  }, Fn.prototype._handle_inside_tag = function (e, t, n, r) {
    var a = n.has_wrapped_attrs,
      i = {
        text: t.text,
        type: t.type
      };
    if (e.set_space_before_token(t.newlines || "" !== t.whitespace_before, !0), n.is_unformatted) e.add_raw_token(t);else if ("{" === n.tag_start_char && t.type === In.TEXT) e.print_preserved_newlines(t) ? (t.newlines = 0, e.add_raw_token(t)) : e.print_token(t);else {
      if (t.type === In.ATTRIBUTE ? (e.set_space_before_token(!0), n.attr_count += 1) : (t.type === In.EQUALS || t.type === In.VALUE && t.previous.type === In.EQUALS) && e.set_space_before_token(!1), t.type === In.ATTRIBUTE && "<" === n.tag_start_char && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (e.traverse_whitespace(t), a = a || 0 !== t.newlines), this._is_wrap_attributes_force)) {
        var o = n.attr_count > 1;
        if (this._is_wrap_attributes_force_expand_multiline && 1 === n.attr_count) {
          var s,
            l = !0,
            c = 0;
          do {
            if ((s = r.peek(c)).type === In.ATTRIBUTE) {
              l = !1;
              break;
            }
            c += 1;
          } while (c < 4 && s.type !== In.EOF && s.type !== In.TAG_CLOSE);
          o = !l;
        }
        o && (e.print_newline(!1), a = !0);
      }
      e.print_token(t), a = a || e.previous_token_wrapped(), n.has_wrapped_attrs = a;
    }
    return i;
  }, Fn.prototype._handle_text = function (e, t, n) {
    var r = {
      text: t.text,
      type: "TK_CONTENT"
    };
    return n.custom_beautifier_name ? this._print_custom_beatifier_text(e, t, n) : n.is_unformatted || n.is_content_unformatted ? e.add_raw_token(t) : (e.traverse_whitespace(t), e.print_token(t)), r;
  }, Fn.prototype._print_custom_beatifier_text = function (e, t, n) {
    var r = this;
    if ("" !== t.text) {
      var a,
        i = t.text,
        o = 1,
        s = "",
        l = "";
      "javascript" === n.custom_beautifier_name && "function" == typeof this._js_beautify ? a = this._js_beautify : "css" === n.custom_beautifier_name && "function" == typeof this._css_beautify ? a = this._css_beautify : "html" === n.custom_beautifier_name && (a = function (e, t) {
        return new Fn(e, t, r._js_beautify, r._css_beautify).beautify();
      }), "keep" === this._options.indent_scripts ? o = 0 : "separate" === this._options.indent_scripts && (o = -e.indent_level);
      var c = e.get_full_indent(o);
      if (i = i.replace(/\n[ \t]*$/, ""), "html" !== n.custom_beautifier_name && "<" === i[0] && i.match(/^(<!--|<!\[CDATA\[)/)) {
        var u = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(i);
        if (!u) return void e.add_raw_token(t);
        s = c + u[1] + "\n", i = u[4], u[5] && (l = c + u[5]), i = i.replace(/\n[ \t]*$/, ""), (u[2] || -1 !== u[3].indexOf("\n")) && (u = u[3].match(/[ \t]+$/)) && (t.whitespace_before = u[0]);
      }
      if (i) if (a) {
        var d = function () {
          this.eol = "\n";
        };
        d.prototype = this._options.raw_options, i = a(c + i, new d());
      } else {
        var p = t.whitespace_before;
        p && (i = i.replace(new RegExp("\n(" + p + ")?", "g"), "\n")), i = c + i.replace(/\n/g, "\n" + c);
      }
      s && (i = i ? s + i + "\n" + l : s + l), e.print_newline(!1), i && (t.text = i, t.whitespace_before = "", t.newlines = 0, e.add_raw_token(t), e.print_newline(!0));
    }
  }, Fn.prototype._handle_tag_open = function (e, t, n, r) {
    var a = this._get_tag_open_token(t);
    return !n.is_unformatted && !n.is_content_unformatted || n.is_empty_element || t.type !== In.TAG_OPEN || 0 !== t.text.indexOf("</") ? (e.traverse_whitespace(t), this._set_tag_position(e, t, a, n, r), a.is_inline_element || e.set_wrap_point(), e.print_token(t)) : (e.add_raw_token(t), a.start_tag_token = this._tag_stack.try_pop(a.tag_name)), (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (a.alignment_size = t.text.length + 1), a.tag_complete || a.is_unformatted || (e.alignment_size = a.alignment_size), a;
  };
  var jn = function (e, t) {
    if (this.parent = e || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = !1, this.is_unformatted = !1, this.is_content_unformatted = !1, this.is_empty_element = !1, this.is_start_tag = !1, this.is_end_tag = !1, this.indent_content = !1, this.multiline_content = !1, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = !1, this.alignment_size = 0, this.tag_complete = !1, this.tag_start_char = "", this.tag_check = "", t) {
      var n;
      this.tag_start_char = t.text[0], this.text = t.text, "<" === this.tag_start_char ? (n = t.text.match(/^<([^\s>]*)/), this.tag_check = n ? n[1] : "") : (n = t.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = n ? n[1] : "", (t.text.startsWith("{{#>") || t.text.startsWith("{{~#>")) && ">" === this.tag_check[0] && (">" === this.tag_check && null !== t.next ? this.tag_check = t.next.text.split(" ")[0] : this.tag_check = t.text.split(">")[1])), this.tag_check = this.tag_check.toLowerCase(), t.type === In.COMMENT && (this.tag_complete = !0), this.is_start_tag = "/" !== this.tag_check.charAt(0), this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || t.closed && "/>" === t.closed.text;
      var r = 2;
      "{" === this.tag_start_char && this.text.length >= 3 && "~" === this.text.charAt(2) && (r = 3), this.is_end_tag = this.is_end_tag || "{" === this.tag_start_char && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(r)));
    } else this.tag_complete = !0;
  };
  Fn.prototype._get_tag_open_token = function (e) {
    var t = new jn(this._tag_stack.get_parser_token(), e);
    return t.alignment_size = this._options.wrap_attributes_indent_size, t.is_end_tag = t.is_end_tag || Bn(t.tag_check, this._options.void_elements), t.is_empty_element = t.tag_complete || t.is_start_tag && t.is_end_tag, t.is_unformatted = !t.tag_complete && Bn(t.tag_check, this._options.unformatted), t.is_content_unformatted = !t.is_empty_element && Bn(t.tag_check, this._options.content_unformatted), t.is_inline_element = Bn(t.tag_name, this._options.inline) || t.tag_name.includes("-") || "{" === t.tag_start_char, t;
  }, Fn.prototype._set_tag_position = function (e, t, n, r, a) {
    if (n.is_empty_element || (n.is_end_tag ? n.start_tag_token = this._tag_stack.try_pop(n.tag_name) : (this._do_optional_end_element(n) && (n.is_inline_element || e.print_newline(!1)), this._tag_stack.record_tag(n), "script" !== n.tag_name && "style" !== n.tag_name || n.is_unformatted || n.is_content_unformatted || (n.custom_beautifier_name = function (e, t) {
      var n = null,
        r = null;
      return t.closed ? ("script" === e ? n = "text/javascript" : "style" === e && (n = "text/css"), n = function (e) {
        for (var t = null, n = e.next; n.type !== In.EOF && e.closed !== n;) {
          if (n.type === In.ATTRIBUTE && "type" === n.text) {
            n.next && n.next.type === In.EQUALS && n.next.next && n.next.next.type === In.VALUE && (t = n.next.next.text);
            break;
          }
          n = n.next;
        }
        return t;
      }(t) || n, n.search("text/css") > -1 ? r = "css" : n.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? r = "javascript" : n.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? r = "html" : n.search(/test\/null/) > -1 && (r = "null"), r) : null;
    }(n.tag_check, t)))), Bn(n.tag_check, this._options.extra_liners) && (e.print_newline(!1), e._output.just_added_blankline() || e.print_newline(!0)), n.is_empty_element) "{" === n.tag_start_char && "else" === n.tag_check && (this._tag_stack.indent_to_tag(["if", "unless", "each"]), n.indent_content = !0, e.current_line_has_match(/{{#if/) || e.print_newline(!1)), "!--" === n.tag_name && a.type === In.TAG_CLOSE && r.is_end_tag && -1 === n.text.indexOf("\n") || (n.is_inline_element || n.is_unformatted || e.print_newline(!1), this._calcluate_parent_multiline(e, n));else if (n.is_end_tag) {
      var i = !1;
      i = (i = n.start_tag_token && n.start_tag_token.multiline_content) || !n.is_inline_element && !(r.is_inline_element || r.is_unformatted) && !(a.type === In.TAG_CLOSE && n.start_tag_token === r) && "TK_CONTENT" !== a.type, (n.is_content_unformatted || n.is_unformatted) && (i = !1), i && e.print_newline(!1);
    } else n.indent_content = !n.custom_beautifier_name, "<" === n.tag_start_char && ("html" === n.tag_name ? n.indent_content = this._options.indent_inner_html : "head" === n.tag_name ? n.indent_content = this._options.indent_head_inner_html : "body" === n.tag_name && (n.indent_content = this._options.indent_body_inner_html)), n.is_inline_element || n.is_unformatted || "TK_CONTENT" === a.type && !n.is_content_unformatted || e.print_newline(!1), this._calcluate_parent_multiline(e, n);
  }, Fn.prototype._calcluate_parent_multiline = function (e, t) {
    !t.parent || !e._output.just_added_newline() || (t.is_inline_element || t.is_unformatted) && t.parent.is_inline_element || (t.parent.multiline_content = !0);
  };
  var Hn = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"],
    Wn = ["a", "audio", "del", "ins", "map", "noscript", "video"];
  Fn.prototype._do_optional_end_element = function (e) {
    var t = null;
    if (!e.is_empty_element && e.is_start_tag && e.parent) {
      if ("body" === e.tag_name) t = t || this._tag_stack.try_pop("head");else if ("li" === e.tag_name) t = t || this._tag_stack.try_pop("li", ["ol", "ul"]);else if ("dd" === e.tag_name || "dt" === e.tag_name) t = (t = t || this._tag_stack.try_pop("dt", ["dl"])) || this._tag_stack.try_pop("dd", ["dl"]);else if ("p" === e.parent.tag_name && -1 !== Hn.indexOf(e.tag_name)) {
        var n = e.parent.parent;
        n && -1 !== Wn.indexOf(n.tag_name) || (t = t || this._tag_stack.try_pop("p"));
      } else "rp" === e.tag_name || "rt" === e.tag_name ? t = (t = t || this._tag_stack.try_pop("rt", ["ruby", "rtc"])) || this._tag_stack.try_pop("rp", ["ruby", "rtc"]) : "optgroup" === e.tag_name ? t = t || this._tag_stack.try_pop("optgroup", ["select"]) : "option" === e.tag_name ? t = t || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]) : "colgroup" === e.tag_name ? t = t || this._tag_stack.try_pop("caption", ["table"]) : "thead" === e.tag_name ? t = (t = t || this._tag_stack.try_pop("caption", ["table"])) || this._tag_stack.try_pop("colgroup", ["table"]) : "tbody" === e.tag_name || "tfoot" === e.tag_name ? t = (t = (t = (t = t || this._tag_stack.try_pop("caption", ["table"])) || this._tag_stack.try_pop("colgroup", ["table"])) || this._tag_stack.try_pop("thead", ["table"])) || this._tag_stack.try_pop("tbody", ["table"]) : "tr" === e.tag_name ? t = (t = (t = t || this._tag_stack.try_pop("caption", ["table"])) || this._tag_stack.try_pop("colgroup", ["table"])) || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"]) : "th" !== e.tag_name && "td" !== e.tag_name || (t = (t = t || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"])) || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]));
      return e.parent = this._tag_stack.get_parser_token(), t;
    }
  }, mn.Beautifier = Fn;
  var Kn = mn.Beautifier,
    Vn = An.Options;
  _n.exports = function (e, t, n, r) {
    return new Kn(e, t, n, r).beautify();
  }, _n.exports.defaultOptions = function () {
    return new Vn();
  };
  var zn,
    Yn,
    Qn,
    Gn,
    $n,
    qn,
    Zn = ue.exports,
    Xn = qt.exports,
    Jn = _n.exports;
  function er(e, t, n, r) {
    return Jn(e, t, n = n || Zn, r = r || Xn);
  }
  er.defaultOptions = Jn.defaultOptions, ce.js = Zn, ce.css = Xn, ce.html = er, zn = le, (qn = ce).js_beautify = qn.js, qn.css_beautify = qn.css, qn.html_beautify = qn.html, zn.exports = (Qn = qn, Gn = qn, ($n = function (e, t) {
    return Yn.js_beautify(e, t);
  }).js = (Yn = qn).js_beautify, $n.css = Qn.css_beautify, $n.html = Gn.html_beautify, $n.js_beautify = Yn.js_beautify, $n.css_beautify = Qn.css_beautify, $n.html_beautify = Gn.html_beautify, $n);
  const tr = H().createContext({}),
    nr = e => H().createElement(tr.Provider, {
      value: e
    }, e.children);
  function rr(e) {
    const {
        data: t,
        beautify: n
      } = e,
      r = Sa.getBlockByType(t.type);
    if (!r) throw new Error(`Block ${t.type} not found`);
    const a = (0, F.unescape)((0, W.qV)(H().createElement(nr, {
      dataSource: e.dataSource,
      mode: e.mode,
      context: e.context
    }, r.render(e))));
    return n ? le.exports.html(a, {
      indent_size: 2
    }) : a;
  }
  const ar = () => (0, j.useContext)(tr),
    ir = e => {
      const {
          data: t
        } = e,
        {
          mode: n,
          context: r,
          dataSource: a
        } = ar(),
        i = Sa.getBlockByType(t.type);
      return i ? H().createElement(H().Fragment, null, i.render(J(X({}, e), {
        mode: n,
        context: r,
        dataSource: a
      }))) : null;
    };
  function or(e) {
    const {
      params: t,
      params: {
        data: n,
        idx: r,
        children: a,
        mode: i
      },
      tag: o,
      children: s
    } = e;
    "mj-text" === o && (t.data.data.value.content = s);
    const l = 0 === n.children.length && function (e) {
      var t, n, r, a, i, o, s, l;
      const {
        data: {
          type: c
        },
        mode: u
      } = e;
      if ("production" === u) return null;
      let d = null;
      return c === ee.PAGE ? d = (null == (n = null == (t = null == window ? void 0 : window.MRM_Vars) ? void 0 : t.mint_trans) ? void 0 : n.Drop_a_Wrapper_block_here) || "Drop a Wrapper block here" : c === ee.WRAPPER || c === te.WRAPPER ? d = (null == (a = null == (r = window.MRM_Vars) ? void 0 : r.mint_trans) ? void 0 : a.Drop_a_Section_block_here) || "Drop a Section block here" : c === ee.SECTION || c === ee.GROUP || c === te.SECTION || c === te.GROUP ? d = (null == (o = null == (i = window.MRM_Vars) ? void 0 : i.mint_trans) ? void 0 : o.Drop_a_Column_block_here) || "Drop a Column block here" : c !== ee.COLUMN && c !== te.COLUMN || (d = (null == (l = null == (s = null == window ? void 0 : window.MRM_Vars) ? void 0 : s.mint_trans) ? void 0 : l.Drop_a_content_block_here) || "Drop a content block here"), d ? `\n   <mj-text color="#666">\n    <div style="text-align: center">\n      <div>\n        <svg width="300" fill="currentColor" style="max-width: 100%;" viewBox="-20 -5 80 60">\n          <g>\n            <path d="M23.713 23.475h5.907c.21 0 .38.17.38.38v.073c0 .21-.17.38-.38.38h-5.907a.38.38 0 0 1-.38-.38v-.073c0-.21.17-.38.38-.38zm.037-2.917h9.167a.417.417 0 0 1 0 .834H23.75a.417.417 0 0 1 0-.834zm0-2.5h9.167a.417.417 0 0 1 0 .834H23.75a.417.417 0 0 1 0-.834zm-.037-3.333h5.907c.21 0 .38.17.38.38v.073c0 .21-.17.38-.38.38h-5.907a.38.38 0 0 1-.38-.38v-.073c0-.21.17-.38.38-.38zm.037-2.917h9.167a.417.417 0 0 1 0 .834H23.75a.417.417 0 0 1 0-.834zm0-2.916h9.167a.417.417 0 0 1 0 .833H23.75a.417.417 0 0 1 0-.833zm-3.592 8.75a.675.675 0 0 1 .675.691v6.142c0 .374-.3.679-.675.683h-6.15a.683.683 0 0 1-.675-.683v-6.142a.675.675 0 0 1 .675-.691h6.15zM20 24.308v-5.833h-5.833v5.833H20zm.158-15.833a.675.675 0 0 1 .675.692v6.141c0 .374-.3.68-.675.684h-6.15a.683.683 0 0 1-.675-.684V9.167a.675.675 0 0 1 .675-.692h6.15zM20 15.142V9.308h-5.833v5.834H20zM37.167 0A2.809 2.809 0 0 1 40 2.833V30.5a2.809 2.809 0 0 1-2.833 2.833h-3.834v3H32.5v-3h-23A2.808 2.808 0 0 1 6.667 30.5v-23H3.583v-.833h3.084V2.833A2.808 2.808 0 0 1 9.5 0h27.667zm2 30.5V2.833a2.025 2.025 0 0 0-2-2H9.5a2.025 2.025 0 0 0-2 2V30.5a2.025 2.025 0 0 0 2 2h27.667a2.025 2.025 0 0 0 2-2zM0 27.75h.833V31H0v-3.25zm0-13h.833V18H0v-3.25zm0 22.833V34.25h.833v3.25L0 37.583zM0 21.25h.833v3.25H0v-3.25zM2.583 40l.084-.833h3.166V40h-3.25zm27.917-.833c.376.006.748-.08 1.083-.25l.417.666a2.875 2.875 0 0 1-1.5.417h-1.833v-.833H30.5zm-8.333 0h3.25V40h-3.25v-.833zm-6.584 0h3.25V40h-3.25v-.833zm-6.5 0h3.25V40h-3.25v-.833zM0 9.5c.01-.5.154-.99.417-1.417l.666.417c-.17.305-.256.65-.25 1v2H0v-2z"></path>\n          </g>\n          <text x="-16" y="50" font-size="5px">${d}</text>\n        </svg>\n      </div>\n    </div>\n   </mj-text>\n  ` : null;
    }(t);
    let c = s || a;
    if ((!c || Array.isArray(c) && 0 === c.length) && 0 === n.children.length && (c = l), "testing" === i && "mj-image" === o) {
      let e = n.attributes.src;
      if ("" === e || /{{([\s\S]+?)}}/g.test(e) || /\*\|([^\|\*]+)\|\*/g.test(e)) {
        const e = (0, F.omit)(t, "data.attributes.src");
        return H().createElement(H().Fragment, null, `<${o} ${Ba(e)} src="${se("IMAGE_59")}">`, `</${o}>`);
      }
    }
    return H().createElement(H().Fragment, null, `<${o} ${Ba(t)}>`, c || n.children.map((e, n) => H().createElement(ir, J(X({
      key: n
    }, t), {
      idx: r ? Gr(r, n) : null,
      data: e
    }))), `</${o}>`);
  }
  const sr = ae({
      name: (null == (s = null == (o = null == window ? void 0 : window.MRM_Vars) ? void 0 : o.mint_trans) ? void 0 : s.Wrapper) || "Wrapper",
      type: ee.WRAPPER,
      create: e => {
        const t = {
          type: ee.WRAPPER,
          data: {
            value: {}
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: []
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [ee.PAGE],
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-wrapper"
      })
    }),
    lr = ae({
      get name() {
        return "Page";
      },
      type: ee.PAGE,
      create: e => {
        const t = {
          type: ee.PAGE,
          data: {
            value: {
              breakpoint: "480px",
              headAttributes: "",
              "font-size": "14px",
              "font-weight": "400",
              "line-height": "1.7",
              headStyles: [],
              fonts: [],
              responsive: !0,
              "font-family": "Arial",
              "text-color": "#000000"
            }
          },
          attributes: {
            "background-color": "#efeeea",
            width: "600px"
          },
          children: [sr.create()]
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [],
      render(e) {
        var t, n;
        const {
            data: r
          } = e,
          a = function (e) {
            const t = e.data.value;
            return `\n    <mj-html-attributes>\n      ${["content-background-color", "text-color", "font-family", "font-size", "line-height", "font-weight", "user-style", "responsive"].filter(e => void 0 !== t[e]).map(e => {
              const n = e,
                r = (0, F.isObject)(t[n]);
              return `<mj-html-attribute class="easy-email" multiple-attributes="${r}" attribute-name="${e}" ${r ? Object.keys(t[n]).map(e => {
                const r = t[n][e];
                return `${e}="${(0, F.isString)(r) ? r.replace(/"/gm, "") : r}"`;
              }).join(" ") : `${e}="${t[n]}"`}></mj-html-attribute>`;
            }).join("\n")}\n\n    </mj-html-attributes>\n  `;
          }(r),
          i = r.data.value,
          o = i.breakpoint ? `<mj-breakpoint width="${r.data.value.breakpoint}" />` : "",
          s = i.responsive ? "" : `<mj-raw>\n            <meta name="viewport" />\n           </mj-raw>\n           <mj-style inline="inline">.mjml-body { width: ${r.attributes.width || "600px"}; margin: 0px auto; }</mj-style>`,
          l = (null == (t = i.headStyles) ? void 0 : t.map(e => `<mj-style ${e.inline ? 'inline="inline"' : ""}>${e.content}</mj-style>`).join("\n")) || "",
          c = i["user-style"] ? `<mj-style ${i["user-style"].inline ? 'inline="inline"' : ""}>${i["user-style"].content}</mj-style>` : "",
          u = i.extraHeadContent ? `<mj-raw>${i.extraHeadContent}</mj-raw>` : "";
        return H().createElement(H().Fragment, null, `\n          <mjml>\n          <mj-head>\n              ${a}\n              ${s}\n              ${l}\n              ${c}\n              ${o}\n              ${u}\n              ${null == (n = i.fonts) ? void 0 : n.filter(Boolean).map(e => `<mj-font name="${e.name}" href="${e.href}" />`)}\n            <mj-attributes>\n              ${i.headAttributes}\n              ${i["font-family"] ? `<mj-all font-family="${i["font-family"].replace(/"/gm, "")}" />` : ""}\n              ${i["font-size"] ? `<mj-text font-size="${i["font-size"]}" />` : ""}\n              ${i["text-color"] ? `<mj-text color="${i["text-color"]}" />` : ""}\n        ${i["line-height"] ? `<mj-text line-height="${i["line-height"]}" />` : ""}\n        ${i["font-weight"] ? `<mj-text font-weight="${i["font-weight"]}" />` : ""}\n              ${i["content-background-color"] ? `<mj-wrapper background-color="${i["content-background-color"]}" />\n             <mj-section background-color="${i["content-background-color"]}" />\n            ` : ""}\n\n            </mj-attributes>\n          </mj-head>\n          <mj-body ${Ba(e)}>`, r.children.map((t, n) => H().createElement(ir, J(X({}, e), {
          idx: Gr("content", n),
          key: n,
          data: t
        }))), "</mj-body></mjml > ");
      }
    }),
    cr = ae({
      name: (null == (c = null == (l = null == window ? void 0 : window.MRM_Vars) ? void 0 : l.mint_trans) ? void 0 : c.Section) || "Section",
      type: ee.SECTION,
      create: e => {
        const t = {
          type: ee.SECTION,
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "20px 0px 20px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: []
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [ee.PAGE, ee.WRAPPER],
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-section"
      })
    }),
    ur = ae({
      name: (null == (d = null == (u = null == window ? void 0 : window.MRM_Vars) ? void 0 : u.mint_trans) ? void 0 : d.Column) || "Column",
      type: ee.COLUMN,
      create: e => {
        const t = {
          type: ee.COLUMN,
          data: {
            value: {}
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "0px 0px 0px 0px",
            border: "none",
            "vertical-align": "top"
          },
          children: []
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [ee.SECTION, ee.GROUP],
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-column"
      })
    }),
    dr = "rtl" === (null == (p = document.querySelector("html")) ? void 0 : p.getAttribute("dir")),
    pr = ae({
      name: (null == (h = null == (f = null == window ? void 0 : window.MRM_Vars) ? void 0 : f.mint_trans) ? void 0 : h.Text) || "Text",
      type: ee.TEXT,
      create: e => {
        var t, n;
        return gr({
          type: ee.TEXT,
          data: {
            value: {
              content: (null == (n = null == (t = null == window ? void 0 : window.MRM_Vars) ? void 0 : t.mint_trans) ? void 0 : n.text_block_content) || "Make it easy for everyone to compose emails!"
            }
          },
          attributes: {
            padding: "10px 25px 10px 25px",
            align: dr ? "right" : "left"
          },
          children: []
        }, e);
      },
      validParentType: [ee.COLUMN, ee.HERO, ee.FOOTER],
      render(e) {
        var t;
        const {
          data: n,
          idx: r,
          mode: a,
          dataSource: i
        } = e;
        let {
          content: o
        } = n.data.value;
        return r && void 0 !== (null == (t = null == i ? void 0 : i.suggestion) ? void 0 : t[r]) && (o = i.suggestion[r]), H().createElement(or, {
          params: e,
          tag: "mj-text"
        }, o);
      }
    }),
    fr = ae({
      name: (null == (m = null == (_ = null == window ? void 0 : window.MRM_Vars) ? void 0 : _.mint_trans) ? void 0 : m.Image) || "Image",
      type: ee.IMAGE,
      create: e => {
        const t = {
          type: ee.IMAGE,
          data: {
            value: {}
          },
          attributes: {
            align: "center",
            height: "auto",
            padding: "10px 25px 10px 25px",
            src: ""
          },
          children: []
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [ee.COLUMN, ee.HERO, ee.FOOTER],
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-image"
      })
    }),
    hr = ae({
      name: (null == (g = null == (A = null == window ? void 0 : window.MRM_Vars) ? void 0 : A.mint_trans) ? void 0 : g.Group) || "Group",
      type: ee.GROUP,
      create: e => {
        const t = {
          type: ee.GROUP,
          data: {
            value: {}
          },
          attributes: {
            "vertical-align": "top",
            direction: "ltr"
          },
          children: []
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [ee.SECTION],
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-group"
      })
    }),
    _r = ae({
      name: (null == (v = null == (y = null == window ? void 0 : window.MRM_Vars) ? void 0 : y.mint_trans) ? void 0 : v.Button) || "Button",
      type: ee.BUTTON,
      create: e => {
        var t, n;
        const r = {
          type: ee.BUTTON,
          data: {
            value: {
              content: (null == (n = null == (t = null == window ? void 0 : window.MRM_Vars) ? void 0 : t.mint_trans) ? void 0 : n.Button) || "Button"
            }
          },
          attributes: {
            align: "center",
            "font-family": "Arial",
            "background-color": "#414141",
            color: "#ffffff",
            "font-weight": "normal",
            "font-style": "normal",
            "border-radius": "3px",
            padding: "10px 25px 10px 25px",
            "inner-padding": "10px 25px 10px 25px",
            "font-size": "13px",
            "line-height": "1.2",
            target: "_blank",
            "vertical-align": "middle",
            border: "none",
            "text-align": "center",
            "letter-spacing": "normal",
            href: "#"
          },
          children: []
        };
        return (0, F.merge)(r, e);
      },
      validParentType: [ee.COLUMN, ee.HERO, ee.FOOTER],
      render(e) {
        const {
          data: t
        } = e;
        return H().createElement(or, {
          params: e,
          tag: "mj-button"
        }, t.data.value.content);
      }
    }),
    mr = ae({
      name: (null == (b = null == (E = null == window ? void 0 : window.MRM_Vars) ? void 0 : E.mint_trans) ? void 0 : b.Divider) || "Divider",
      type: ee.DIVIDER,
      create: e => {
        const t = {
          type: ee.DIVIDER,
          data: {
            value: {}
          },
          attributes: {
            align: "center",
            "border-width": "1px",
            "border-style": "solid",
            "border-color": "#C9CCCF",
            padding: "10px 0px 10px 0px"
          },
          children: []
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [ee.COLUMN, ee.HERO, ee.FOOTER],
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-divider"
      })
    }),
    Ar = ae({
      name: (null == (C = null == (w = null == window ? void 0 : window.MRM_Vars) ? void 0 : w.mint_trans) ? void 0 : C.Spacer) || "Spacer",
      type: ee.SPACER,
      create: e => {
        const t = {
          type: ee.SPACER,
          data: {
            value: {}
          },
          attributes: {
            height: "20px"
          },
          children: []
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [ee.COLUMN, ee.HERO, ee.FOOTER],
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-spacer"
      })
    });
  function gr(e, t) {
    return (0, F.mergeWith)(e, t, (e, t) => (0, F.isArray)(t) ? t : void 0);
  }
  const yr = ae({
      name: "Carousel",
      type: ee.CAROUSEL,
      create: e => gr({
        type: ee.CAROUSEL,
        data: {
          value: {
            images: [{
              src: se("IMAGE_15"),
              target: "_blank"
            }, {
              src: se("IMAGE_16"),
              target: "_blank"
            }, {
              src: se("IMAGE_17"),
              target: "_blank"
            }]
          }
        },
        attributes: {
          align: "center",
          "left-icon": "",
          "right-icon": "",
          "icon-width": "44px",
          thumbnails: "visible"
        },
        children: []
      }, e),
      validParentType: [ee.COLUMN],
      render(e) {
        const {
            data: t
          } = e,
          n = t.data.value.images.map(e => `\n      <mj-carousel-image ${Object.keys(e).filter(t => "content" !== t && "" !== e[t]).map(t => `${t}="${e[t]}"`).join(" ")} />\n      `).join("\n");
        return H().createElement(or, {
          params: e,
          tag: "mj-carousel"
        }, n);
      }
    }),
    vr = ae({
      name: (null == (M = null == (O = null == window ? void 0 : window.MRM_Vars) ? void 0 : O.mint_trans) ? void 0 : M.Hero) || "Hero",
      type: ee.HERO,
      create: e => gr({
        type: ee.HERO,
        data: {
          value: {}
        },
        attributes: {
          "background-color": "#ffffff",
          "background-position": "center center",
          mode: "fluid-height",
          padding: "100px 0px 100px 0px",
          "vertical-align": "top",
          "background-url": ""
        },
        children: [{
          type: "text",
          data: {
            value: {
              content: "Hero Text"
            }
          },
          attributes: {
            padding: "10px 25px 10px 25px",
            align: "center",
            color: "#000000",
            "font-size": "45px",
            "line-height": "45px"
          },
          children: []
        }, {
          type: "text",
          data: {
            value: {
              content: "Hero content"
            }
          },
          attributes: {
            align: "center",
            "background-color": "#414141",
            color: "#000000",
            "font-weight": "normal",
            "border-radius": "3px",
            padding: "10px 25px 10px 25px",
            "inner-padding": "10px 25px 10px 25px",
            "line-height": "1.5",
            target: "_blank",
            "vertical-align": "middle",
            border: "none",
            "text-align": "center",
            href: "#",
            "font-size": "14px"
          },
          children: []
        }, {
          type: "button",
          data: {
            value: {
              content: "Get Your Order Here!"
            }
          },
          attributes: {
            align: "center",
            "background-color": "#573BFF",
            color: "#ffffff",
            "font-size": "13px",
            "font-weight": "normal",
            "border-radius": "30px",
            padding: "10px 25px 10px 25px",
            "inner-padding": "10px 25px 10px 25px",
            "line-height": "120%",
            target: "_blank",
            "vertical-align": "middle",
            border: "none",
            "text-align": "center",
            href: "#"
          },
          children: []
        }]
      }, e),
      validParentType: [ee.PAGE, ee.WRAPPER],
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-hero"
      })
    }),
    Er = ae({
      name: (null == (T = null == (S = null == window ? void 0 : window.MRM_Vars) ? void 0 : S.mint_trans) ? void 0 : T.Navbar) || "Navbar",
      type: ee.NAVBAR,
      create: e => gr({
        type: ee.NAVBAR,
        data: {
          value: {
            links: [{
              href: "/gettings-started-onboard",
              content: "Getting started",
              color: "#1890ff",
              "font-size": "13px",
              target: "_blank",
              padding: "15px 10px"
            }, {
              href: "/try-it-live",
              content: "Try it live",
              color: "#1890ff",
              "font-size": "13px",
              target: "_blank",
              padding: "15px 10px"
            }, {
              href: "/templates",
              content: "Templates",
              color: "#1890ff",
              "font-size": "13px",
              target: "_blank",
              padding: "15px 10px"
            }, {
              href: "/components",
              content: "Components",
              color: "#1890ff",
              "font-size": "13px",
              target: "_blank",
              padding: "15px 10px"
            }]
          }
        },
        attributes: {
          align: "center"
        },
        children: []
      }, e),
      validParentType: [ee.COLUMN, ee.HERO, ee.FOOTER],
      render(e) {
        const {
            data: t
          } = e,
          n = t.data.value.links.map((e, t) => `\n          <mj-navbar-link ${Object.keys(e).filter(t => "content" !== t && "" !== e[t]).map(t => `${t}="${e[t]}"`).join(" ")}>${e.content}</mj-navbar-link>\n          `).join("\n");
        return H().createElement(or, {
          params: e,
          tag: "mj-navbar"
        }, n);
      }
    }),
    br = {
      "https://www.facebook.com/": "Facebook",
      "https://facebook.com/": "Facebook",
      "https://www.linkedin.com/": "LinkedIn",
      "https://linkedin.com/": "LinkedIn",
      "https://www.instagram.com/": "Instagram",
      "https://instagram.com/": "Instagram",
      "https://twitter.com/": "Twitter",
      "https://www.twitter.com/": "Twitter",
      "https://x.com/": "Twitter",
      "https://www.x.com/": "Twitter"
    },
    wr = e => {
      for (const t in br) if (e.startsWith(t)) return br[t];
      return "Social Media";
    },
    Cr = null == (x = null == (k = null == window ? void 0 : window.MRM_Vars) ? void 0 : k.business_social_settings) ? void 0 : x.socialMedia,
    Or = Cr && Cr.length > 0 ? Cr.map(e => ({
      href: e.url,
      target: "_blank",
      src: e.icon,
      content: wr(e.url)
    })) : [{
      href: "#",
      target: "_blank",
      src: se("IMAGE_02"),
      content: "Facebook"
    }, {
      href: "#",
      target: "_blank",
      src: se("IMAGE_03"),
      content: "Instagram"
    }, {
      href: "#",
      target: "_blank",
      src: se("IMAGE_04"),
      content: "Twitter"
    }],
    Mr = ae({
      name: (null == (I = null == (D = null == window ? void 0 : window.MRM_Vars) ? void 0 : D.mint_trans) ? void 0 : I.Social) || "Social",
      type: ee.SOCIAL,
      create: e => gr({
        type: ee.SOCIAL,
        data: {
          value: {
            elements: Or
          }
        },
        attributes: {
          align: "center",
          color: "#333333",
          mode: "horizontal",
          "font-size": "13px",
          "font-weight": "normal",
          "font-style": "normal",
          "font-family": "Arial",
          "border-radius": "3px",
          padding: "10px 25px 10px 25px",
          "inner-padding": "4px 4px 4px 4px",
          "line-height": "1.6",
          "text-padding": "4px 4px 4px 0px",
          "icon-padding": "0px",
          "icon-size": "20px"
        },
        children: []
      }, e),
      validParentType: [ee.COLUMN],
      render(e) {
        const {
            data: t
          } = e,
          n = t.data.value.elements.map(e => `\n          <mj-social-element ${Object.keys(e).filter(t => "content" !== t && "" !== e[t]).map(t => `${t}="${e[t]}"`).join(" ")}>${e.content}</mj-social-element>\n          `).join("\n");
        return H().createElement(or, {
          params: e,
          tag: "mj-social"
        }, n);
      }
    }),
    Sr = ae({
      name: (null == (L = null == (P = null == window ? void 0 : window.MRM_Vars) ? void 0 : P.mint_trans) ? void 0 : L.Raw) || "Raw",
      type: ee.RAW,
      create: e => {
        const t = {
          type: ee.RAW,
          data: {
            value: {
              content: "<% if (user) { %>"
            }
          },
          attributes: {},
          children: []
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [ee.PAGE, ee.WRAPPER, ee.SECTION, ee.GROUP, ee.COLUMN, ee.HERO, ee.FOOTER],
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-raw"
      }, e.data.data.value.content)
    }),
    Tr = ae({
      name: (null == (B = null == (R = null == window ? void 0 : window.MRM_Vars) ? void 0 : R.mint_trans) ? void 0 : B.Template) || "Template",
      type: ee.TEMPLATE,
      create: e => {
        const t = {
          type: ee.TEMPLATE,
          data: {
            value: {
              idx: ""
            }
          },
          attributes: {},
          children: []
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [],
      render(e) {
        const {
          data: t
        } = e;
        return H().createElement(H().Fragment, null, `\n          ${t.children.map(t => H().createElement(ir, J(X({}, e), {
          data: t
        })))}\n        `);
      }
    }),
    kr = ae({
      name: "Footer",
      type: ee.FOOTER,
      create: e => {
        var t, n, r, a, i, o, s, l, c, u;
        return gr({
          type: ee.FOOTER,
          data: {
            value: {}
          },
          attributes: {
            "background-color": "#ffffff",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "10px 0px 10px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_social",
            data: {
              value: {
                elements: [{
                  href: "#",
                  target: "_blank",
                  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEUAAAA7WZg7Wpg6WZg8WJdAU586Wpg6Wpc7WZg8WZk6WZg7WZg6WZg7WZY5WJc6Wpc7WJg7WZk7W5Y6WpU7WZj////m6vKdrMvO1eW2wdhUbaWEl7+El75sgrKpt9KRosV4jbhTbqXy9fiQocVsgrFHY58FMJF5AAAAFHRSTlMAv++AIBCfQJBQ39+wcHBg0M9wMJn76TsAAAEYSURBVDjLjdTZbsMgEEDRYcziPU2LCa3rNOny/79YnESaDAaZ+2gdgQEB8JR51SLUV42CfEagpcQhw5rWRnUpKoWliMrNcGjTVdxVNlu94yhNrrFRH6G/7ewSmVr8tPZOX8wD8vWeAopgp27uwNx1IhhN3jJ4TkFU25X4Fbl5npd4N3sO3QrPNgoDtAl4snEGTBkc+aH8ej+tOe/9F4Oa/+LnRHHYgcjBC4OYh4tlcXhx7oa+nXPXGJatGkGXwSPUZVBAUwYrUKVHCKIEdgAwlkAdoMICKOmu5iHd2HYPorxDswcHeDTmIX9Uno/Hu9DPs3tREEmKu7LnTKvMe8vDATbJKjGchFRyYKNizRjvbeiPGEzb1wZY/0BgYWSlhMOpAAAAAElFTkSuQmCC",
                  content: ""
                }, {
                  href: "#",
                  target: "_blank",
                  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAC5VBMVEUAAAD/nTr+hUetB8b/QnD+2haQANv/2hWTAdulBcuxCsL+ozb/tiuTAdr/0xv3HoieBNH/lT//wiSTANzSE6bqG5L+KXyXAtbGELGVAdfyKYbxKoaXANW/DLP/g0j/yyCPAN/TFKP/XGD/1xjHEK7eF5v+RG7/d1H/zh/+2BegBc61C77IEa7fGJz/RW7/dlH/nTv/vSjyHYuQAN2hBs61DL76IIT+nTv/vSn/3RWQANz/3BW4Dbm5DLv9VGT9bFb91xj/0hv9VWHWFaD/blb9i0T9xSD/0Ry9Drj92xT/jEX/yCCSAN3/2hj///+sCMT3H4f+IoH/sC/UFKT/Xl7/Zlr/fkz/tyuhBc6xCsG1C77ED7HMEqvzHYr7IIT/dlD/ozaeBNLnGpTrG5H/Mnf/wyOaAtW5DLvIEK7YFaHcFp7fGJv/TWj/jUP+O3L+KXylBsuoB8fADrXPEqfvHI7+blX+qTP+vif+yCD/8viSANr+RG3+zR2pB8juHI3+lT7+qTKWAdj+VmO9Dbi8DbjQE6jjGJjjGJekBsr/nTr/0xqRANz1qNneM6z+hkf/vij+2Rf4nM7cas3/uMnhbMnmbcXDKsLMLbvYMLL/hqf+dnD/i2T/b1X/1Bv78Pv/+PT94/L/5O/uw+6VAdj4qdb9rNH/ss3/ocbqbsLub7/ILL7xcLy/DrT/oZj+p5P/Knz/Z3r/aHP/VmP+VWP+lV//hkj+lj//ySD44fX+1en5xuXck+XppeL/zd3/5839ncrqfMj7j8PxfsP6gbzSL7f/jbL/fqv/nKn/2Kf/jqL/lJ//mpz3Opf/rZD7LYz/O4P+vm7/RG7+gWr/nVv+pFf/lj/z0vH/8OjstOfklt7/6dzOZdnDR9H1mtDqitDoe8v/0LvFHrr/rLD/yK//e63wVK3aJKf/oabtOJ/+X53oKJvrKZjzLJLzK5L+RIz/PHL/RW7+Q23/b1b+blT+jFP+qjP/zh0+TXPsAAAATnRSTlMA/v4QEJCPEO/v7+/v39+/sK+vn5+QkIB/b29fQEBAQCAgICDv7+/v7+/f39/f39/f39DPz8/Pz8/Pv7+wr6CgoJ+Qj4CAgH9wcG9vYGDagDuYAAADXUlEQVQ4y3WTZVxVQRDFVxS7u7u7uztHhQcGKooYpB3PQkVCeCid0p3SAtIpnXZ3d3x2du9euI84n/+/M3tmzhJlDVi9YFzbjUfaTO/cqz9pUs17D9c6euXA9m0bz1tu3bO/Q7fBjWPL1I/tOKgVIZCHkbx0pjG07wh9PUYeNaXkEUtGdlhfn+uhY27AyQhTiad1SyWsRafje3UsKGnGPfk7kZzWXALO3LRTIPn0unf6n7GeW8f13LyLkeJ0aXZ/yfR+ujcpeYGSNjaurrkuLmHOzjQRf2cfgRs60Vj3EPN8myKHOvk9FhO1Fp650PCsMfO0g3q6jZ5sektmKLuMJHpmAMjtwkNDQpycHB3t7VOTkBQ9qeUiDVksJd8AJH+RJgq7B/CEv7MXgpNOaDDPNPAtYYn4lvwevPQCP56oNSEDNbVvUM8fAEEs++dshSLTRv1YUqrWQ/ASs/cnK65paqNnXDRAPs2eIwR/Rm9kD+DM796HdDFSYZ4IumH2LEwU8NQH4DlOpyBvSGcyy8SIebojaKz7DSDwKyZSgNc7dTNHgDB+zbGkXTOBRLDw7Pc88GXX/CSHTD11BF1469qQk7uRTNDUrgIoMqx0gGDhmgGg0NdzQlDsJ1G7uLvZXXynB0BxrKEDBB1ipB0oDPQRzBX7SdqrMU8VBCNllwtAXs5IH8i2MAgBcOX9bEumbEHyaqJRPIIashhvCMJrlgUCfNCxCEWQt24G6XqKkSbVAFG4z/cAvsGBuMssvBGCNryf88m6fQJZA1BKN/8KqOQ5NHs4gvx39CaDTiNJE3nDa3ajmAIHh7xyligAQPxHAwgZfUsg08H7D5K0IT+FJpf4QIq5QI7H9qz6d3rfdSQrAB7Fs2vGCf0sSwYI1xHI7gi28jzHyJN3AO6/KI2KiiwuKnRzyw/GRHZiP4cQlKrVOWE6ksrKEPuJhtRyDHqy7BXpEkqe9pElQnICGlKtsbUSpuONaqrjPTyq3N1joiv538Tp/QiXKiX5PlmX+O/gZA9Sq3m2bDq/pooyOZXUqdUc7il0KYFtiZOdWhCpVCXvTKTkL77PnqSeNnT0rPU0qZ0+si9poGGLcZ/U8y9P9FtDtpSNbYgu6Sj1HLUcsaY0aGXX2e3VLrab3GXtQKKk/w+PIuw30x39AAAAAElFTkSuQmCC",
                  content: ""
                }, {
                  href: "#",
                  target: "_blank",
                  src: "data:image/png;base64,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",
                  content: ""
                }]
              }
            },
            attributes: {
              align: "center",
              color: "#333333",
              mode: "horizontal",
              "font-size": "13px",
              "font-weight": "normal",
              "font-style": "normal",
              "font-family": "Arial",
              "border-radius": "3px",
              padding: "15px 0px 15px 0px",
              "inner-padding": "0px 20px 0px 0px",
              "line-height": "1.6",
              "text-padding": "4px 4px 4px 0px",
              "icon-padding": "0px",
              "icon-size": "25px"
            },
            children: []
          }, {
            type: "advanced_divider",
            data: {
              value: {}
            },
            attributes: {
              align: "center",
              "border-width": "1px",
              "border-style": "solid",
              "border-color": "#D3CFD8",
              padding: "0px 24px 15px 24px"
            },
            children: []
          }, {
            type: "advanced_text",
            data: {
              value: {
                content: (null == (n = null == (t = null == window ? void 0 : window.MRM_Vars) ? void 0 : t.business_basic_settings) ? void 0 : n.business_name) ? null == (a = null == (r = null == window ? void 0 : window.MRM_Vars) ? void 0 : r.business_basic_settings) ? void 0 : a.business_name : "{{business.name}}"
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "center",
              "font-size": "16px",
              "line-height": "15px",
              "font-weight": "500"
            },
            children: []
          }, {
            type: "advanced_text",
            data: {
              value: {
                content: "© 2024 " + ((null == (o = null == (i = null == window ? void 0 : window.MRM_Vars) ? void 0 : i.business_basic_settings) ? void 0 : o.business_name) ? null == (l = null == (s = null == window ? void 0 : window.MRM_Vars) ? void 0 : s.business_basic_settings) ? void 0 : l.business_name : "{{business.name}}") + " " + ((null == (c = null == window ? void 0 : window.MRM_Vars) ? void 0 : c.address) ? null == (u = null == window ? void 0 : window.MRM_Vars) ? void 0 : u.address : "{{business.address}}")
              }
            },
            attributes: {
              padding: "12px 0px 12px 0px",
              align: "center",
              "font-size": "14px",
              "line-height": "20px",
              color: "#908A99"
            },
            children: []
          }, {
            type: "advanced_text",
            data: {
              value: {
                content: '<a href="{{link.preference}}" target="_blank" style="text-decoration: underline;"><font color="#0064ff">Update Preference</font></a> . <a href="{{link.unsubscribe}}" target="_blank" style="text-decoration: underline;"><font color="#0064ff">Unsubscribe</font></a>'
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "center",
              "font-size": "10px"
            },
            children: []
          }]
        }, e);
      },
      validParentType: [ee.PAGE, ee.WRAPPER],
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-hero"
      })
    }),
    xr = ae({
      name: "Accordion element",
      type: ee.ACCORDION_ELEMENT,
      create: e => {
        const t = {
          type: ee.ACCORDION_ELEMENT,
          data: {
            value: {}
          },
          attributes: {
            "icon-align": "middle",
            "icon-height": "32px",
            "icon-width": "32px",
            "icon-position": "right"
          },
          children: []
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [ee.ACCORDION],
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-accordion-element"
      })
    }),
    Dr = ae({
      name: "Accordion title",
      type: ee.ACCORDION_TITLE,
      create: e => {
        const t = {
          type: ee.ACCORDION_TITLE,
          data: {
            value: {
              content: "Why use an accordion?"
            }
          },
          attributes: {
            "font-size": "13px",
            padding: "16px 16px 16px 16px"
          },
          children: []
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [ee.ACCORDION],
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-accordion-title"
      }, e.data.data.value.content)
    }),
    Ir = ae({
      name: "Accordion text",
      type: ee.ACCORDION_TEXT,
      create: e => {
        const t = {
          type: ee.ACCORDION_TEXT,
          data: {
            value: {
              content: "Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way"
            }
          },
          attributes: {
            "font-size": "13px",
            padding: "16px 16px 16px 16px",
            "line-height": "1"
          },
          children: []
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [ee.ACCORDION],
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-accordion-text"
      }, e.data.data.value.content)
    }),
    Pr = ae({
      name: "Accordion",
      type: ee.ACCORDION,
      validParentType: [ee.COLUMN],
      create: e => gr({
        type: ee.ACCORDION,
        data: {
          value: {}
        },
        attributes: {
          "icon-height": "32px",
          "icon-width": "32px",
          "icon-align": "middle",
          "icon-position": "right",
          "icon-unwrapped-url": se("IMAGE_09"),
          "icon-wrapped-url": se("IMAGE_10"),
          padding: "10px 25px 10px 25px",
          border: "1px solid #d9d9d9"
        },
        children: [xr.create({
          children: [Dr.create({
            data: {
              value: {
                content: "Why use an accordion?"
              }
            }
          }), Ir.create({
            data: {
              value: {
                content: "Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way."
              }
            }
          })]
        }), xr.create({
          children: [Dr.create({
            data: {
              value: {
                content: "How it works"
              }
            }
          }), Ir.create({
            data: {
              value: {
                content: "Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once."
              }
            }
          })]
        })]
      }, e),
      render: e => H().createElement(or, {
        params: e,
        tag: "mj-accordion"
      })
    }),
    Lr = ae({
      name: (null == (U = null == (N = null == window ? void 0 : window.MRM_Vars) ? void 0 : N.mint_trans) ? void 0 : U.Table) || "Table",
      type: ee.TABLE,
      create: e => {
        const t = {
          type: ee.TABLE,
          data: {
            value: {
              content: ""
            }
          },
          attributes: {},
          children: []
        };
        return (0, F.merge)(t, e);
      },
      validParentType: [ee.COLUMN],
      render(e) {
        const {
          data: t
        } = e;
        return H().createElement(or, {
          params: e,
          tag: "mj-table"
        }, t.data.value.content);
      }
    }),
    Rr = {
      [ee.PAGE]: lr,
      [ee.SECTION]: cr,
      [ee.COLUMN]: ur,
      [ee.TEXT]: pr,
      [ee.IMAGE]: fr,
      [ee.GROUP]: hr,
      [ee.BUTTON]: _r,
      [ee.DIVIDER]: mr,
      [ee.WRAPPER]: sr,
      [ee.SPACER]: Ar,
      [ee.RAW]: Sr,
      [ee.CAROUSEL]: yr,
      [ee.HERO]: vr,
      [ee.NAVBAR]: Er,
      [ee.SOCIAL]: Mr,
      [ee.FOOTER]: kr,
      [ee.TEMPLATE]: Tr,
      [ee.ACCORDION]: Pr,
      [ee.ACCORDION_ELEMENT]: xr,
      [ee.ACCORDION_TITLE]: Dr,
      [ee.ACCORDION_TEXT]: Ir,
      [ee.TABLE]: Lr
    },
    Br = ae;
  function Nr(e) {
    const t = Object.values(Rr).find(t => t.type === e.baseType);
    if (!t) throw new Error(`Can not find ${e.baseType}`);
    return Br({
      name: t.name,
      type: e.type,
      validParentType: e.validParentType,
      create: n => {
        const r = J(X({}, t.create()), {
          type: e.type
        });
        return (0, F.merge)(r, n);
      },
      render: t => {
        const {
            data: n,
            idx: r,
            mode: a,
            context: i,
            dataSource: o
          } = t,
          {
            iteration: s,
            condition: l
          } = n.data.value,
          c = (t, r) => e.getContent({
            index: r,
            data: n,
            idx: t,
            mode: a,
            context: i,
            dataSource: o
          });
        let u = c(r, 0);
        return "testing" === a ? H().createElement(H().Fragment, null, H().createElement(H().Fragment, {
          key: "children"
        }, u), new Array(((null == s ? void 0 : s.mockQuantity) || 1) - 1).fill(!0).map((e, t) => H().createElement(H().Fragment, {
          key: t
        }, c(r, t + 1)))) : (l && l.enabled && (u = La.generateTagTemplate("condition")(l, u)), s && s.enabled && (u = La.generateTagTemplate("iteration")(s, u)), u);
      }
    });
  }
  var Ur = (e => (e.TRUTHY = "truthy", e.FALSY = "falsy", e.EQUAL = "==", e.NOT_EQUAL = "!=", e.GREATER = ">", e.GREATER_OR_EQUAL = ">=", e.LESS = "<", e.LESS_OR_EQUAL = "<=", e))(Ur || {}),
    Fr = (e => (e.AND = "and", e.OR = "or", e))(Fr || {});
  function jr({
    idx: e,
    value: t,
    type: n,
    attributes: r,
    children: a
  }) {
    const {
        mode: i
      } = ar(),
      o = Sa.getBlockByType(n);
    if (!o) throw new Error(`Can no find ${n}`);
    const s = (0, j.useMemo)(() => "string" == typeof a ? t ? ((0, F.set)(t, "content", a), t) : {
      content: a
    } : t, [a, t]);
    return H().createElement(H().Fragment, null, o.render({
      idx: e,
      mode: i,
      data: {
        type: o.type,
        data: {
          value: s
        },
        attributes: r,
        children: []
      },
      children: a
    }));
  }
  function Hr(e) {
    return H().createElement(jr, {
      attributes: (0, F.omit)(e, ["data", "children", "value"]),
      value: e.value,
      type: ee.SECTION
    }, e.children);
  }
  function Wr(e) {
    return H().createElement(jr, {
      attributes: (0, F.omit)(e, ["data", "children", "value"]),
      value: e.value,
      type: ee.COLUMN
    }, e.children);
  }
  function Kr(e) {
    return H().createElement(jr, {
      attributes: (0, F.omit)(e, ["data", "children", "value"]),
      value: e.value,
      type: ee.RAW
    }, e.children);
  }
  var Vr = Object.freeze(Object.defineProperty({
    __proto__: null,
    Page: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.PAGE
      }, e.children);
    },
    Section: Hr,
    Column: Wr,
    Text: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.TEXT
      }, e.children);
    },
    Image: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.IMAGE
      }, e.children);
    },
    Group: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.GROUP
      }, e.children);
    },
    Button: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.BUTTON
      }, e.children);
    },
    Divider: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.DIVIDER
      }, e.children);
    },
    Wrapper: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.WRAPPER
      }, e.children);
    },
    Spacer: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.SPACER
      }, e.children);
    },
    Raw: Kr,
    Accordion: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.ACCORDION
      }, e.children);
    },
    AccordionElement: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.ACCORDION_ELEMENT
      }, e.children);
    },
    AccordionTitle: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.ACCORDION_TITLE
      }, e.children);
    },
    AccordionText: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.ACCORDION_TEXT
      }, e.children);
    },
    Carousel: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.CAROUSEL
      }, e.children);
    },
    Hero: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.HERO
      }, e.children);
    },
    Navbar: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.NAVBAR
      }, e.children);
    },
    Social: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.SOCIAL
      }, e.children);
    },
    Table: function (e) {
      return H().createElement(jr, {
        attributes: (0, F.omit)(e, ["data", "children", "value"]),
        value: e.value,
        type: ee.TABLE
      }, e.children);
    },
    Template: function (e) {
      return e.children;
    },
    MjmlBlock: jr
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function zr(...e) {
    return e.filter(e => "string" == typeof e).join(" ");
  }
  function Yr(e, t) {
    const n = Sa.getAutoCompletePath(e, t);
    return n ? n.length + 1 : -1;
  }
  function Qr() {
    return "content";
  }
  function Gr(e, t) {
    return `${e}.children.[${t}]`;
  }
  function $r(e) {
    return `node-idx-${e}`;
  }
  function qr(e) {
    return `node-type-${e}`;
  }
  function Zr(e) {
    var t;
    return null == (t = Array.from(e).find(e => e.includes("node-idx-"))) ? void 0 : t.replace("node-idx-", "");
  }
  function Xr(e) {
    var t;
    return null == (t = Array.from((0, F.isString)(e) ? e.split(" ") : e).find(e => e.includes("node-type-"))) ? void 0 : t.replace("node-type-", "");
  }
  const Jr = e => {
      var t;
      return Number(null == (t = /\.\[(\d+)\]$/.exec(e)) ? void 0 : t[1]) || 0;
    },
    ea = e => {
      var t;
      if ("content" !== e) return null == (t = /(.*)\.children\.\[\d+\]$/.exec(e)) ? void 0 : t[1];
    },
    ta = (e, t) => (0, F.get)(e, t),
    na = (e, t) => (0, F.get)(e, ea(t) || ""),
    ra = (e, t) => e.replace(/\[(\d+)\]$/, (e, n) => Number(n) + t < 0 ? "[0]" : `[${Number(n) + t}]`),
    aa = (e, t, n) => {
      if (!t) return null;
      let r = ea(t);
      for (; r;) {
        const a = (0, F.get)(e, r);
        if (a && a.type === n) return a;
        r = ea(t);
      }
      return null;
    },
    ia = (e, t, n) => {
      let r = t;
      const a = Sa.getBlockByType(n);
      if (!a) return null;
      for (; r;) {
        const t = (0, F.get)(e, r);
        if (Yr(a.type, t.type) > 0) return {
          parent: t,
          parentIdx: r
        };
        r = ea(r);
      }
      return null;
    },
    oa = (e, t, n) => {
      let r = "",
        a = t;
      for (; a;) {
        const t = (0, F.get)(e, a);
        if (t && t.type === n) return {
          insertIndex: r ? Jr(r) : t.children.length - 1,
          parentIdx: a,
          parent: t
        };
        r = a, a = ea(a);
      }
      return null;
    },
    sa = e => Sa.getBlocks().filter(t => t.validParentType.includes(e));
  function la(e, t) {
    return zr("email-block", e && $r(e), qr(t));
  }
  function ca(e) {
    return Nr(J(X({}, e), {
      validParentType: [ee.PAGE, ee.WRAPPER, ee.COLUMN, ee.GROUP, ee.HERO, ee.FOOTER, te.WRAPPER, te.COLUMN, te.GROUP, te.HERO, te.FOOTER],
      getContent: t => {
        const {
            data: n,
            idx: r,
            mode: a,
            context: i,
            index: o
          } = t,
          s = "testing" === a ? zr(0 === o && r && la(r, n.type)) : "",
          l = J(X({}, n), {
            type: e.baseType,
            attributes: J(X({}, n.attributes), {
              "css-class": zr(n.attributes["css-class"], s)
            })
          }),
          c = Sa.getBlockByType(l.type);
        if (!c) throw new Error(`Can not find ${l.type}`);
        const u = null == c ? void 0 : c.render(J(X({}, t), {
            data: l,
            idx: r
          })),
          d = na({
            content: i
          }, r);
        return !d || d.type !== ee.PAGE && d.type !== ee.WRAPPER && d.type !== te.WRAPPER ? u : H().createElement(Hr, {
          padding: "0px",
          "text-align": "left"
        }, H().createElement(Wr, null, u));
      }
    }));
  }
  function ua(e) {
    return Nr(J(X({}, e), {
      getContent: t => {
        const {
            data: n,
            idx: r,
            mode: a,
            index: i
          } = t,
          {
            iteration: o
          } = n.data.value,
          s = J(X({}, n), {
            type: e.baseType
          });
        n.type === te.COLUMN && (null == o ? void 0 : o.enabled) && (n.attributes.width = n.attributes.width || "100%");
        const l = "testing" === a ? zr(0 === i && r && la(r, n.type)) : "";
        return H().createElement(ir, {
          idx: null,
          data: J(X({}, s), {
            attributes: J(X({}, s.attributes), {
              "css-class": zr(n.attributes["css-class"], l)
            })
          })
        }, s.children.map((e, n) => H().createElement(ir, J(X({
          key: n
        }, t), {
          data: e,
          idx: r ? Gr(r, n) : null
        }))));
      }
    }));
  }
  const da = ca({
      type: te.TEXT,
      baseType: ee.TEXT
    }),
    pa = ca({
      type: te.BUTTON,
      baseType: ee.BUTTON
    }),
    fa = ca({
      type: te.IMAGE,
      baseType: ee.IMAGE
    }),
    ha = ca({
      type: te.DIVIDER,
      baseType: ee.DIVIDER
    }),
    _a = ca({
      type: te.SPACER,
      baseType: ee.SPACER
    }),
    ma = ca({
      type: te.NAVBAR,
      baseType: ee.NAVBAR
    }),
    Aa = ca({
      type: te.ACCORDION,
      baseType: ee.ACCORDION
    }),
    ga = ca({
      type: te.CAROUSEL,
      baseType: ee.CAROUSEL
    }),
    ya = ca({
      type: te.SOCIAL,
      baseType: ee.SOCIAL
    }),
    va = ua({
      type: te.WRAPPER,
      baseType: ee.WRAPPER,
      validParentType: [ee.PAGE]
    }),
    Ea = ua({
      type: te.SECTION,
      baseType: ee.SECTION,
      validParentType: [ee.PAGE, ee.WRAPPER, te.WRAPPER]
    }),
    ba = ua({
      type: te.GROUP,
      baseType: ee.GROUP,
      validParentType: [ee.SECTION, te.SECTION]
    }),
    wa = ua({
      type: te.COLUMN,
      baseType: ee.COLUMN,
      validParentType: [ee.SECTION, te.SECTION, ee.GROUP, te.GROUP]
    }),
    Ca = ua({
      type: te.HERO,
      baseType: ee.HERO,
      validParentType: [ee.WRAPPER, te.WRAPPER, ee.PAGE]
    }),
    Oa = ua({
      type: te.FOOTER,
      baseType: ee.FOOTER,
      validParentType: [ee.WRAPPER, te.WRAPPER, ee.PAGE]
    }),
    Ma = {
      [te.TEXT]: da,
      [te.BUTTON]: pa,
      [te.IMAGE]: fa,
      [te.DIVIDER]: ha,
      [te.SPACER]: _a,
      [te.NAVBAR]: ma,
      [te.ACCORDION]: Aa,
      [te.CAROUSEL]: ga,
      [te.SOCIAL]: ya,
      [te.WRAPPER]: va,
      [te.SECTION]: Ea,
      [te.GROUP]: ba,
      [te.COLUMN]: wa,
      [te.HERO]: Ca,
      [te.FOOTER]: Oa
    };
  class Sa {
    static setAutoCompletePath() {
      const e = {},
        t = (e, n, r) => {
          const a = this.getBlockByType(e);
          if (!a) throw new Error(`Can you register ${e} block`);
          const i = [...r, e];
          return 0 === a.validParentType.length && n.push(i), a.validParentType.map(e => t(e, n, i));
        };
      return Object.values(this.blocksMap).forEach(n => {
        e[n.type] = [], t(n.type, e[n.type], []);
      }), e;
    }
    static getBlocks() {
      return Object.values(this.blocksMap);
    }
    static registerBlocks(e) {
      this.blocksMap = X(X({}, this.blocksMap), e), this.autoCompletePath = this.setAutoCompletePath();
    }
    static getBlockByType(e) {
      return this.blocksMap[e];
    }
    static getBlocksByType(e) {
      return e.map(e => Object.values(this.blocksMap).find(t => t.type === e));
    }
    static getAutoCompleteFullPath() {
      return 0 === Object.keys(this.autoCompletePath).length && (this.autoCompletePath = this.setAutoCompletePath()), this.autoCompletePath;
    }
    static getAutoCompletePath(e, t) {
      const n = this.getBlockByType(e);
      if (!n) throw new Error(`Can you register ${e} block`);
      if (n.validParentType.includes(t)) return [];
      const r = this.getAutoCompleteFullPath()[e].find(e => e.filter((e, t) => 0 !== t).includes(t));
      if (!r) return null;
      const a = r.findIndex(e => e === t);
      return r.slice(1, a);
    }
  }
  function Ta(e) {
    try {
      if (e.attributes && e.children && e.data && e.type && Sa.getBlockByType(e.type)) return !0;
    } catch (e) {}
    return !1;
  }
  Sa.blocksMap = X(X({}, Rr), Ma), Sa.autoCompletePath = {};
  const ka = new DOMParser();
  function xa(e) {
    if ((0, F.isString)(e)) return function (e) {
      const t = ka.parseFromString(e, "text/xml"),
        n = t.firstChild;
      if (!(t.firstChild instanceof Element)) throw new Error("Invalid content");
      if ("mjml" === n.tagName) {
        const {
          json: t
        } = V()(e, {
          validationLevel: "soft"
        });
        return xa(t);
      }
      const r = e => {
        var t;
        if ("parsererror" === e.tagName) throw new Error("Invalid content");
        const n = {};
        e.getAttributeNames().forEach(t => {
          n[t] = e.getAttribute(t);
        });
        const a = e.tagName.replace("mj-", "");
        if (!(Sa.getBlockByType(a) || e.parentElement && "mj-text" === e.parentElement.tagName)) throw new Error("Invalid content");
        const i = {
          type: a,
          attributes: n,
          data: {
            value: {
              content: null == (t = e.textContent) ? void 0 : t.trim()
            }
          },
          children: [...e.children].filter(e => e instanceof Element).map(r)
        };
        return a === ee.TEXT && (i.data.value.content = e.innerHTML, i.children = []), i;
      };
      return r(n);
    }(e);
    const t = e => {
      var n, r, a, i, o, s, l, c, u, d, p;
      const f = e.attributes;
      if ("mjml" === e.tagName) {
        const u = null == (n = e.children) ? void 0 : n.find(e => "mj-body" === e.tagName),
          d = null == (r = e.children) ? void 0 : r.find(e => "mj-head" === e.tagName),
          p = function (e) {
            var t;
            const n = null == (t = null == e ? void 0 : e.children) ? void 0 : t.filter(e => "mj-html-attributes" === e.tagName).map(e => e.children).flat().filter(e => e && "easy-email" === e.attributes.class).reduce((e, t) => {
              if (!t) return e;
              const n = t.attributes["attribute-name"],
                r = Boolean(t.attributes["multiple-attributes"]);
              return e[n] = r ? (0, F.pickBy)(J(X({}, t.attributes), {
                "attribute-name": void 0,
                "multiple-attributes": void 0,
                class: void 0
              }), F.identity) : t.attributes[n], e;
            }, {});
            return (0, F.pickBy)(n, F.identity);
          }(d),
          f = (null == (a = null == d ? void 0 : d.children) ? void 0 : a.filter(e => "mj-font" === e.tagName).map(e => ({
            name: e.attributes.name,
            href: e.attributes.href
          }))) || [],
          h = (null == (o = null == (i = null == d ? void 0 : d.children) ? void 0 : i.find(e => "mj-attributes" === e.tagName)) ? void 0 : o.children) || [],
          _ = null == (s = null == d ? void 0 : d.children) ? void 0 : s.filter(e => "mj-style" === e.tagName).map(e => ({
            content: e.content,
            inline: e.inline
          })),
          m = [...new Set(h.filter(e => {
            const t = "mj-all" === e.tagName && e.attributes["font-family"] === p["font-family"],
              n = "mj-text" === e.tagName && e.attributes.color === p["text-color"],
              r = ["mj-wrapper", "mj-section"].includes(e.tagName) && e.attributes["background-color"] === p["content-background-color"];
            return !t && !n && !r;
          }).map(e => `<${e.tagName} ${Object.keys(e.attributes).map(t => `${t}="${e.attributes[t]}"`).join(" ")} />`))].join("\n"),
          A = null == (l = null == d ? void 0 : d.children) ? void 0 : l.find(e => "mj-breakpoint" === e.tagName);
        return Sa.getBlockByType(ee.PAGE).create({
          attributes: u.attributes,
          children: null == (c = u.children) ? void 0 : c.map(t),
          data: {
            value: X({
              headAttributes: m,
              headStyles: _,
              fonts: f,
              breakpoint: null == A ? void 0 : A.attributes.breakpoint
            }, p)
          }
        });
      }
      {
        const n = e.tagName.replace("mj-", "").toLowerCase(),
          r = Sa.getBlockByType(n);
        if (!r) throw new Error(`${n} block no found `);
        const a = {
          type: r.type,
          attributes: f,
          data: {
            value: {}
          },
          children: []
        };
        e.content && (a.data.value.content = e.content), r.type === ee.CAROUSEL ? (a.data.value.images = (null == (u = e.children) ? void 0 : u.map(e => e.attributes)) || [], a.children = []) : r.type === ee.NAVBAR ? (a.data.value.links = (null == (d = e.children) ? void 0 : d.map(e => {
          const t = J(X({
            color: "#1890ff",
            "font-size": "13px",
            target: "_blank",
            padding: "15px 10px"
          }, e.attributes), {
            content: e.content
          });
          return Da(t, "padding"), t;
        })) || [], a.children = []) : r.type === ee.SOCIAL ? (a.data.value.elements = (null == (p = e.children) ? void 0 : p.map(e => J(X({}, e.attributes), {
          content: e.content
        }))) || [], a.children = []) : e.children && (a.children = e.children.map(t));
        const i = r.create(a);
        return Da(i.attributes, "padding"), Da(i.attributes, "inner-padding"), i;
      }
    };
    return t(e);
  }
  function Da(e, t) {
    const n = document.createElement("div");
    Object.keys(e).forEach(r => {
      var a;
      if (new RegExp(`^${t}`).test(r)) {
        const i = null == (a = new RegExp(`^${t}(.*)`).exec(r)) ? void 0 : a[0];
        i && (n.style[i] = e[r], delete e[r]);
      }
    });
    const r = [n.style.paddingTop, n.style.paddingRight, n.style.paddingBottom, n.style.paddingLeft].filter(Boolean).join(" ");
    r && (e[t] = r);
  }
  function Ia(e) {
    return JSON.parse((0, F.unescape)((0, W.qV)(e)));
  }
  function Pa(e, t) {
    const n = Sa.getBlockByType(e);
    if (n) return n.create(t);
    throw new Error(`No match \`${e}\` block`);
  }
  class La {
    static setTag(e) {
      this.tags[e.name] = e.templateGenerateFn;
    }
    static generateTagTemplate(e) {
      return this.tags[e];
    }
  }
  function Ra(e) {
    return Object.values(te).includes(e);
  }
  function Ba(e) {
    const {
        data: t,
        idx: n
      } = e,
      r = "testing" === e.mode,
      a = X({}, t.attributes),
      i = !!r && e.keepClassName;
    r && n && (a["css-class"] = zr(a["css-class"], re, $r(n), qr(t.type))), i && (a["css-class"] = zr(a["css-class"], qr(t.type)));
    let o = "";
    for (let e in a) {
      const t = a[e];
      if ((0, F.isString)(t) && t) {
        const n = " ";
        o += `${e}="${t.replace(/"/gm, "")}"` + n;
      }
    }
    return o;
  }
  La.tags = {
    iteration: function (e, t) {
      return H().createElement(H().Fragment, null, H().createElement(Kr, null, `\n        \x3c!-- htmlmin:ignore --\x3e\n        {% for ${e.itemName} in ${e.dataSource} ${e.limit ? `limit:${e.limit}` : ""} %}\n        \x3c!-- htmlmin:ignore --\x3e\n        `), t, H().createElement(Kr, null, " \x3c!-- htmlmin:ignore --\x3e{% endfor %}  \x3c!-- htmlmin:ignore --\x3e"));
    },
    condition: function (e, t) {
      const {
          symbol: n,
          groups: r
        } = e,
        a = e => e.operator === Ur.TRUTHY ? e.left : e.operator === Ur.FALSY ? e.left + " == nil" : e.left + " " + e.operator + " " + ((0, F.isNumber)(e.right) ? e.right : `"${e.right}"`),
        i = ((e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((e, t) => e + ((t &= 63) < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t > 62 ? "-" : "_"), ""))(5),
        o = r.map((e, t) => `con_${t}_${i}`),
        s = r.map((e, t) => `{% assign ${o[t]} = ${e.groups.map(a).join(` ${e.symbol} `)} %}`).join("\n"),
        l = o.join(` ${n} `);
      return H().createElement(H().Fragment, null, H().createElement(Kr, null, `\n        \x3c!-- htmlmin:ignore --\x3e\n        ${s}\n        {% if ${l} %}\n        \x3c!-- htmlmin:ignore --\x3e\n        `), t, H().createElement(Kr, null, "\n        \x3c!-- htmlmin:ignore --\x3e\n        {% endif %}\n        \x3c!-- htmlmin:ignore --\x3e\n        "));
    }
  };
});
