// Reconstructed Webpack factory 20378; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    z: () => w
  });
  var r = n(77558);
  function a(e) {
    return e && "string" == typeof e ? e.replace(/^"(.*)"$/, "$1") : "";
  }
  function o(e) {
    for (var t = e.split("\n").map(function (e) {
        return e.trim();
      }).filter(Boolean), n = {
        name: "",
        description: "",
        thumbnail: "",
        chapters: []
      }, r = null, o = !1, i = 0, l = 1, c = 0; c < t.length; c++) {
      var u = t[c];
      if (u.toLowerCase().includes("course title:")) n.title = u.split(":").slice(1).join(":").replace(/^"|"$/g, "").trim(), n.title && (n.title = a(n.title));else if (u.toLowerCase().includes("title:")) n.title = u.split(":").slice(1).join(":").replace(/^"|"$/g, "").trim(), n.title && (n.title = a(n.title));else if (u.toLowerCase().startsWith("course description:")) n.description = u.split(":").slice(1).join(":").trim();else if (u.toLowerCase().startsWith("description:")) n.description = u.split(":").slice(1).join(":").trim();else if (u.toLowerCase().includes("here is the course outline")) o = !0;else {
        if (o && !n.title && u.startsWith("- **")) {
          var s = u.replace(/^-\s*\*\*/, "").replace(/\*\*$/, "").trim();
          if (!s.toLowerCase().includes("chapter") && !s.toLowerCase().includes("lesson")) {
            n.title = s;
            continue;
          }
        }
        if (n.description || !u.startsWith("- **Course Description**")) {
          if (u.startsWith("- **Course Thumbnail**")) n.thumbnail = "[image]";else if (u.toLowerCase().startsWith("- chapter") || u.match(/^- \*\*chapter/i)) {
            r && n.chapters.push(r), i++, l = 1;
            var d = u.replace(/^-\s*/, "").replace(/\*\*/g, "").trim();
            r = {
              id: "chapter-".concat(i),
              title: d,
              description: "",
              content: []
            };
          } else if (u.toLowerCase().startsWith("- conclusion") || u.match(/^- \*\*conclusion/i)) {
            r && n.chapters.push(r), i++, l = 1;
            var m = u.replace(/^-\s*/, "").replace(/\*\*/g, "").trim();
            r = {
              id: "chapter-".concat(i),
              title: m,
              description: "",
              content: []
            };
          } else if (r) if (!u.toLowerCase().includes("lesson") || u.toLowerCase().includes("quiz") || u.toLowerCase().includes("assignment")) {
            if (u.toLowerCase().includes("quiz")) {
              var p = u.replace(/^-\s*/, "").replace(/\*\*/g, "").trim();
              r.content.push({
                title: p,
                description: "",
                type: "quiz",
                order_number: l++
              });
            } else if (u.toLowerCase().includes("assignment")) {
              var f = u.replace(/^-\s*/, "").replace(/\*\*/g, "").trim();
              r.content.push({
                title: f,
                description: "",
                type: "assignment",
                order_number: l++
              });
            }
          } else {
            var v = u.replace(/^-\s*/, "").replace(/\*\*/g, "").trim();
            r.content.push({
              title: v,
              description: "",
              type: "text",
              order_number: l++
            });
          }
        } else n.description = u.split(":").slice(1).join(":").trim();
      }
    }
    return r && n.chapters.push(r), n;
  }
  var i = n(37562),
    l = n(86169);
  function c(e) {
    return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, c(e);
  }
  function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(n), !0).forEach(function (t) {
        d(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function d(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != c(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, "string");
          if ("object" != c(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == c(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  function m() {
    var e,
      t,
      n = "function" == typeof Symbol ? Symbol : {},
      r = n.iterator || "@@iterator",
      a = n.toStringTag || "@@toStringTag";
    function o(n, r, a, o) {
      var c = r && r.prototype instanceof l ? r : l,
        u = Object.create(c.prototype);
      return p(u, "_invoke", function (n, r, a) {
        var o,
          l,
          c,
          u = 0,
          s = a || [],
          d = !1,
          m = {
            p: 0,
            n: 0,
            v: e,
            a: p,
            f: p.bind(e, 4),
            d: function (t, n) {
              return o = t, l = 0, c = e, m.n = n, i;
            }
          };
        function p(n, r) {
          for (l = n, c = r, t = 0; !d && u && !a && t < s.length; t++) {
            var a,
              o = s[t],
              p = m.p,
              f = o[2];
            n > 3 ? (a = f === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, l = 0));
          }
          if (a || n > 1) return i;
          throw d = !0, r;
        }
        return function (a, s, f) {
          if (u > 1) throw TypeError("Generator is already running");
          for (d && 1 === s && p(s, f), l = s, c = f; (t = l < 2 ? e : c) || !d;) {
            o || (l ? l < 3 ? (l > 1 && (m.n = -1), p(l, c)) : m.n = c : m.v = c);
            try {
              if (u = 2, o) {
                if (l || (a = "next"), t = o[a]) {
                  if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  c = t.value, l < 2 && (l = 0);
                } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
                o = e;
              } else if ((t = (d = m.n < 0) ? c : n.call(r, m)) !== i) break;
            } catch (t) {
              o = e, l = 1, c = t;
            } finally {
              u = 1;
            }
          }
          return {
            value: t,
            done: d
          };
        };
      }(n, a, o), !0), u;
    }
    var i = {};
    function l() {}
    function c() {}
    function u() {}
    t = Object.getPrototypeOf;
    var s = [][r] ? t(t([][r]())) : (p(t = {}, r, function () {
        return this;
      }), t),
      d = u.prototype = l.prototype = Object.create(s);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, p(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
    }
    return c.prototype = u, p(d, "constructor", u), p(u, "constructor", c), c.displayName = "GeneratorFunction", p(u, a, "GeneratorFunction"), p(d), p(d, a, "Generator"), p(d, r, function () {
      return this;
    }), p(d, "toString", function () {
      return "[object Generator]";
    }), (m = function () {
      return {
        w: o,
        m: f
      };
    })();
  }
  function p(e, t, n, r) {
    var a = Object.defineProperty;
    try {
      a({}, "", {});
    } catch (e) {
      a = 0;
    }
    p = function (e, t, n, r) {
      function o(t, n) {
        p(e, t, function (e) {
          return this._invoke(t, n, e);
        });
      }
      t ? a ? a(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r
      }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, p(e, t, n, r);
  }
  function f(e, t, n, r, a, o, i) {
    try {
      var l = e[o](i),
        c = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(c) : Promise.resolve(c).then(r, a);
  }
  function v(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, a) {
        var o = e.apply(t, n);
        function i(e) {
          f(o, r, a, i, l, "next", e);
        }
        function l(e) {
          f(o, r, a, i, l, "throw", e);
        }
        i(void 0);
      });
    };
  }
  var g = "https://api.getwpfunnels.com",
    h = "my-secret-key-1",
    y = {
      course_outline: "You are an expert course creator. Based on the following course idea, generate exactly three items:\n1. A concise and compelling course title.\n2. A course description of 60-100 words.\n3. A course outline as a Markdown-formatted nested list with 5-8 chapters, each containing 2-5 lessons.\nStrictly follow this format and output ONLY between the tags:\n<course_outline>\nTitle: [Course Title]\nDescription: [Course Description - 60 to 100 words]\n- Chapter 1: Title\n  - Lesson 1.1: Lesson Title\n  - Lesson 1.2: Lesson Title\n- Chapter 2: Title\n  - Lesson 2.1: Lesson Title\n</course_outline>\nDo not include any text outside of <course_outline> tags. If any text appears before <course_outline> or after </course_outline>, regenerate the response.\nCourse Idea: {prompt}",
      lesson_content: "You are a professional instructional designer. Based on the instruction provided, generate concise and engaging lesson content.\nFormat the output using Markdown.\nDo not include any introduction or closing remarks.\nKeep the total length under 120 words.\nOnly return the content.\nWrap the entire output in <content> and </content> tags.\nIf the instruction is too broad (e.g., 'Full content for digital marketing'), identify a specific subtopic and focus on that instead.\nIf the prompt cannot be reasonably answered in under 120 words, summarize the key concepts briefly.\n\nNow, based on the instruction below, generate the lesson content:\nInstruction: {prompt}",
      chapter_content: "You are an experienced curriculum developer.Write a concise and informative paragraph summarizing what the chapter will teach and the value it brings to learners.\n\nFormat the output in valid Markdown. Provide one paragraph (80-100 words) describing the chapter's core content and its practical significance.\n\nDo not include any introductions, closing remarks, or phrases like 'this chapter will cover.' Only return the content.\n\nWrap the entire output in <content> and </content> tags.\nInstruction: {prompt}",
      course_description: "You are a skilled instructional designer. Write a compelling course description based on the following idea. The description should be 80-120 words, highlight the value of the course, and be engaging for prospective learners. Avoid generic phrases like 'this course will teach you' or 'in this course you will learn.' Respond only with the description, and wrap it inside <content> and </content> tags. Course Idea: {prompt}",
      course_title: "You are an expert course marketer. Based on the provided prompt, generate a powerful and engaging course title.\nKeep the title under 12 words.\nDo not use Markdown—return plain text only.\nWrap the output in <content> and </content> tags.\n\nExample:\nPrompt: Learn how to grow a TikTok following for your business\nOutput:\n<content>\nTikTok Growth Strategies for Business Success\n</content>\n\nPrompt: {prompt}",
      lesson_title: "You are an expert course designer. Based on the provided prompt, generate one clear and focused lesson title.\nKeep it concise and engaging. Return plain text only—do not use Markdown.\nWrap the output in <content> and </content> tags.\n\nExample:\nPrompt: Recording your first Instagram Reel\nOutput:\n<content>\nRecording Your First Instagram Reel\n</content>\n\nPrompt: {prompt}",
      chapter_title: "You are an expert course designer. Generate one clear and engaging chapter title based on the provided prompt.\nKeep the title under 10 words.\nReturn plain text only—no Markdown formatting.\nWrap the output in <content> and </content> tags.\n\nExample:\nPrompt: Creating a content calendar for YouTube\nOutput:\n<content>\nYouTube Content Calendar Basics\n</content>\n\nPrompt: {prompt}"
    },
    b = {
      course_outline: "You are an expert instructional designer and course creator. Your task is to **generate complete course content directly**, without asking the user for clarification, no matter how vague or broad the idea is.\nWhen given a course idea, always produce exactly three items in this strict format:\n1. A concise, compelling **course title**.\n2. A **course description** (60–100 words).\n3. A **course outline** as a Markdown-formatted nested list with **5–8 chapters**, each containing **2–5 lessons**.\n### Formatting Rules\n- Output must be wrapped **only** inside <course_outline> and </course_outline> tags.\n- Do not include any explanation, reasoning, or text outside these tags.\n- If the course idea is vague, make reasonable assumptions and generate a coherent course.\n- Keep lessons practical, progressive, and engaging.\n- Focus on **general-purpose content** unless the idea specifies a niche (e.g., AI, data science, business, etc.).",
      lesson_content: "You are a professional instructional designer. Based on the instruction provided, generate concise and engaging lesson content.\nFormat the output using Markdown.\nDo not include any introduction or closing remarks.\nKeep the total length under 120 words.\nOnly return the content.\nWrap the entire output in <content> and </content> tags.\nIf the instruction is too broad (e.g., 'Full content for digital marketing'), identify a specific subtopic and focus on that instead.\nIf the prompt cannot be reasonably answered in under 120 words, summarize the key concepts briefly.",
      chapter_content: "You are an experienced curriculum developer.Write a concise and informative paragraph summarizing what the chapter will teach and the value it brings to learners.\n\nFormat the output in valid Markdown. Provide one paragraph (80-100 words) describing the chapter's core content and its practical significance.\n\nDo not include any introductions, closing remarks, or phrases like 'this chapter will cover.' Only return the content.\n\nWrap the entire output in <content> and </content> tags.",
      course_description: "You are a skilled instructional designer. Write a compelling course description based on the following idea. The description should be 80-120 words, highlight the value of the course, and be engaging for prospective learners. Avoid generic phrases like 'this course will teach you' or 'in this course you will learn.' Respond only with the description, and wrap it inside <content> and </content> tags.",
      course_title: "You are an expert course marketer. Based on the provided prompt, generate a powerful and engaging course title.\nKeep the title under 12 words.\nDo not use Markdown—return plain text only.\nWrap the output in <content> and </content> tags.",
      lesson_title: "You are an expert course designer. Based on the provided prompt, generate one clear and focused lesson title.\nKeep it concise and engaging. Return plain text only—do not use Markdown.\nWrap the output in <content> and </content> tags.",
      chapter_title: "You are an expert course designer. Generate one clear and engaging chapter title based on the provided prompt.\nKeep the title under 10 words.\nReturn plain text only—no Markdown formatting.\nWrap the output in <content> and </content> tags."
    };
  function _(e, t) {
    var n = y[t];
    if (!n) throw new Error("Invalid contentType: ".concat(t));
    return n.replace("{prompt}", e);
  }
  function w() {
    var e = (0, i.useDispatch)(l.default),
      t = (0, r.useIsPro)(),
      n = (0, i.useSelect)(function (e) {
        return e(l.default).getLicenseInfo();
      }, []),
      a = (0, i.useSelect)(function (e) {
        return e(l.default).getAISettings();
      }, []),
      c = function () {
        var e = v(m().m(function e() {
          var t, r, a;
          return m().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return t = {
                  license_key: null == n ? void 0 : n.key
                }, e.p = 1, e.n = 2, fetch("/wp-json/creatorlms/v1/ai/settings/update-credits", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(t)
                });
              case 2:
                return r = e.v, e.n = 3, r.json();
              case 3:
                e.v, e.n = 5;
                break;
              case 4:
                e.p = 4, a = e.v, console.error("Error updating credits:", a);
              case 5:
                return e.a(2);
            }
          }, e, null, [[1, 4]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
      u = function () {
        var r = v(m().m(function r(i) {
          var l, u, d, p, f, v, y, w, E, S, R, x, C, P, O, k, j, A, M, T, I, F, N, D, W, z, B, L, V, H;
          return m().w(function (r) {
            for (;;) switch (r.p = r.n) {
              case 0:
                if (l = i.prompt, u = i.type, d = void 0 === u ? "text" : u, p = i.contentType, t) {
                  r.n = 1;
                  break;
                }
                throw new Error("Unauthorized Call!");
              case 1:
                if (l && "string" == typeof l) {
                  r.n = 2;
                  break;
                }
                throw new Error("Prompt is required and must be a string.");
              case 2:
                if ("text" === d || "image" === d) {
                  r.n = 3;
                  break;
                }
                throw new Error('Type must be either "text" or "image".');
              case 3:
                if (null == a || !a.self) {
                  r.n = 13;
                  break;
                }
                return r.p = 4, r.n = 5, fetch("".concat(g, "/generate"), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "x-api-key": h,
                    "ai-token": null == n ? void 0 : n.key,
                    "model-type": d
                  },
                  body: JSON.stringify(s({
                    prompt: l,
                    type: d
                  }, "text" === d ? {
                    contentType: p
                  } : {}))
                });
              case 5:
                return f = r.v, r.n = 6, c();
              case 6:
                if (f.ok && 200 === f.status) {
                  r.n = 8;
                  break;
                }
                return r.n = 7, f.text();
              case 7:
                throw v = r.v, new Error(v || "No result from the API.");
              case 8:
                return r.n = 9, f.json();
              case 9:
                if (y = r.v, "text" === d && e.setGlobalDataViaKey("ai_settings", s(s({}, a), {}, {
                  text_credit: Number(null == a ? void 0 : a.text_credit) - Number(null == y || null === (w = y.tokens) || void 0 === w ? void 0 : w.total_tokens)
                })), "image" === d && e.setGlobalDataViaKey("ai_settings", s(s({}, a), {}, {
                  image_count: Number(null == a ? void 0 : a.image_count) - (null == y || null === (E = y.result) || void 0 === E ? void 0 : E.length)
                })), S = null, "text" !== d) {
                  r.n = 11;
                  break;
                }
                return r.n = 10, o(null == y ? void 0 : y.result);
              case 10:
                S = r.v;
              case 11:
                return r.a(2, {
                  formattedResult: S,
                  result: null == y ? void 0 : y.result
                });
              case 12:
                throw r.p = 12, V = r.v, console.error("Error generating response:", V), V;
              case 13:
                if (null != a && a.model && null != a && a.api_key) {
                  r.n = 14;
                  break;
                }
                throw new Error("AI model or API key not configured.");
              case 14:
                if (R = "", x = {
                  "Content-Type": "application/json"
                }, C = {}, P = l, "text" === d && p && (P = _(l, p)), "openai" !== a.platform) {
                  r.n = 15;
                  break;
                }
                R = "text" === d ? "https://api.openai.com/v1/chat/completions" : "https://api.openai.com/v1/images/generations", x.Authorization = "Bearer ".concat(a.api_key), C = {
                  model: "text" === d ? a.model : a.image_model,
                  messages: [{
                    role: "system",
                    content: b[p] || "You are an expert course creator"
                  }, {
                    role: "user",
                    content: P
                  }],
                  max_tokens: parseInt(a.max_tokens) || 500,
                  temperature: parseFloat(a.temperature) || .7
                }, "image" === d && (C = {
                  model: a.image_model,
                  prompt: P,
                  n: parseInt(a.image_per_request) || 3,
                  size: "1024x1024"
                }), r.n = 18;
                break;
              case 15:
                if ("anthropic" !== a.platform) {
                  r.n = 16;
                  break;
                }
                "image" === d ? (R = "/wp-json/creatorlms/v1/claude/generate?api_key=" + encodeURIComponent(a.api_key) + "&type=image", C = {
                  model: a.image_model,
                  prompt: P,
                  max_tokens: parseInt(a.max_tokens) || 500,
                  temperature: parseFloat(a.temperature) || .7,
                  messages: [{
                    role: "user",
                    content: [{
                      type: "image",
                      source: {
                        type: "base64",
                        data: P,
                        media_type: "image/png"
                      }
                    }]
                  }]
                }) : (R = "/wp-json/creatorlms/v1/claude/generate?api_key=" + encodeURIComponent(a.api_key) + "&type=text", C = {
                  model: a.model,
                  max_tokens: parseInt(a.max_tokens) || 500,
                  temperature: parseFloat(a.temperature) || .7,
                  system: [{
                    type: "text",
                    text: b[p] || "You are an expert course creator"
                  }],
                  messages: [{
                    role: "user",
                    content: P
                  }]
                }), r.n = 18;
                break;
              case 16:
                if ("gemini" !== a.platform) {
                  r.n = 17;
                  break;
                }
                O = "text" === d ? a.model : a.image_model, R = "https://generativelanguage.googleapis.com/v1beta/models/".concat(O, ":generateContent?key=").concat(encodeURIComponent(a.api_key)), C = {
                  contents: [{
                    role: "user",
                    parts: [{
                      text: P
                    }]
                  }],
                  generationConfig: {
                    maxOutputTokens: parseInt(a.max_tokens) || 500,
                    temperature: parseFloat(a.temperature) || .7
                  }
                }, "text" === d ? C.systemInstruction = {
                  parts: [{
                    text: b[p] || "You are an expert course creator"
                  }]
                } : C.generationConfig.responseModalities = ["IMAGE"], r.n = 18;
                break;
              case 17:
                throw new Error("Unsupported AI model.");
              case 18:
                return r.p = 18, r.n = 19, fetch(R, {
                  method: "POST",
                  headers: x,
                  body: JSON.stringify(C)
                });
              case 19:
                if ((k = r.v).ok) {
                  r.n = 21;
                  break;
                }
                return r.n = 20, k.text();
              case 20:
                throw j = r.v, new Error(j || "No result from the external API.");
              case 21:
                return r.n = 22, k.json();
              case 22:
                if (A = r.v, M = null, "openai" !== a.platform) {
                  r.n = 24;
                  break;
                }
                if ("image" !== d) {
                  r.n = 23;
                  break;
                }
                return I = A.data.map(function (e) {
                  return e.url;
                }), r.a(2, {
                  result: I,
                  formattedResult: I
                });
              case 23:
                M = (null === (T = A.choices[0]) || void 0 === T || null === (T = T.message) || void 0 === T ? void 0 : T.content) || "", r.n = 28;
                break;
              case 24:
                if ("anthropic" !== a.platform) {
                  r.n = 26;
                  break;
                }
                if ("image" !== d) {
                  r.n = 25;
                  break;
                }
                return F = A.data.map(function (e) {
                  return e.url;
                }), r.a(2, {
                  result: F,
                  formattedResult: F
                });
              case 25:
                "text" === d && (M = null === (N = A.data.content[0]) || void 0 === N ? void 0 : N.text), r.n = 28;
                break;
              case 26:
                if ("gemini" !== a.platform) {
                  r.n = 28;
                  break;
                }
                if (z = (null == A || null === (D = A.candidates) || void 0 === D || null === (D = D[0]) || void 0 === D || null === (D = D.content) || void 0 === D ? void 0 : D.parts) || [], "image" !== d) {
                  r.n = 27;
                  break;
                }
                return B = z.filter(function (e) {
                  var t;
                  return null === (t = e.inlineData) || void 0 === t ? void 0 : t.data;
                }).map(function (e) {
                  return "data:".concat(e.inlineData.mimeType || "image/png", ";base64,").concat(e.inlineData.data);
                }), r.a(2, {
                  result: B,
                  formattedResult: B
                });
              case 27:
                M = (null === (W = z[0]) || void 0 === W ? void 0 : W.text) || "";
              case 28:
                return L = null, "text" === d && (L = o(M)), r.a(2, {
                  formattedResult: L,
                  result: M
                });
              case 29:
                return r.p = 29, H = r.v, r.a(2, {
                  error: !0,
                  message: H.message || "Error generating response"
                });
              case 30:
                return r.a(2);
            }
          }, r, null, [[18, 29], [4, 12]]);
        }));
        return function (e) {
          return r.apply(this, arguments);
        };
      }();
    return u;
  }
});
