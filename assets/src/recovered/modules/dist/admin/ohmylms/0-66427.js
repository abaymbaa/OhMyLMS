// Reconstructed Webpack factory 66427; arguments retain original semantics.
((e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.GROUPS = void 0, t.GROUPS = [{
    name: "format",
    title: "Basic",
    commands: [{
      name: "heading1",
      label: "Heading 1",
      iconName: "Heading1",
      description: "High priority section title",
      aliases: ["h1"],
      action: function (e) {
        e.chain().focus().setHeading({
          level: 1
        }).run();
      }
    }, {
      name: "heading2",
      label: "Heading 2",
      iconName: "Heading2",
      description: "Medium priority section title",
      aliases: ["h2"],
      action: function (e) {
        e.chain().focus().setHeading({
          level: 2
        }).run();
      }
    }, {
      name: "heading3",
      label: "Heading 3",
      iconName: "Heading3",
      description: "Low priority section title",
      aliases: ["h3"],
      action: function (e) {
        e.chain().focus().setHeading({
          level: 3
        }).run();
      }
    }, {
      name: "text",
      label: "Text",
      iconName: "Text",
      description: "Text command",
      aliases: ["p"],
      action: function (e) {
        e.chain().focus().insertContent("<p></p>").run();
      }
    }, {
      name: "bulletList",
      label: "Bullet List",
      iconName: "List",
      description: "Unordered list of items",
      aliases: ["ul"],
      action: function (e) {
        e.chain().focus().toggleBulletList().run();
      }
    }, {
      name: "numberedList",
      label: "Numbered List",
      iconName: "ListOrdered",
      description: "Ordered list of items",
      aliases: ["ol"],
      action: function (e) {
        e.chain().focus().toggleOrderedList().run();
      }
    }, {
      name: "blockquote",
      label: "Blockquote",
      iconName: "Quote",
      description: "Element for quoting",
      action: function (e) {
        e.chain().focus().toggleWrap("blockquote").run();
      }
    }, {
      name: "horizontalRule",
      label: "Horizontal Rule",
      iconName: "Minus",
      description: "Insert a horizontal divider",
      aliases: ["hr"],
      action: function (e) {
        e.chain().focus().setHorizontalRule().run();
      }
    }, {
      name: "image",
      label: "Image",
      iconName: "Image",
      description: "Insert an image",
      aliases: ["img"],
      action: function (e) {
        e.chain().focus().setImageUpload().run();
      }
    }, {
      name: "customHTML",
      label: "Custom HTML",
      iconName: "Code",
      description: "Add custom HTML code with live preview",
      aliases: ["html", "code", "embed"],
      action: function (e) {
        e.chain().focus().insertCustomHTML("").run();
      }
    }]
  }, {
    name: "ai",
    title: "CLMS AI",
    commands: [{
      name: "ai-image",
      label: "Generate image with AI",
      iconName: "AiImage",
      description: "Generate image with Ai",
      action: function (e) {
        e.chain().focus().setAiImage().run();
      }
    }, {
      name: "ai-writer",
      label: "Write with AI",
      iconName: "AiWriter",
      description: "Write with AI",
      action: function (e) {
        e.chain().focus().setAIText().run();
      }
    }]
  }], t.default = t.GROUPS;
});
