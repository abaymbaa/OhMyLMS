// Reconstructed Webpack factory 98472; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.useTextmenuContentTypes = void 0;
  var r = n(83574);
  t.useTextmenuContentTypes = function (e) {
    return (0, r.useEditorState)({
      editor: e,
      selector: function (e) {
        return [{
          type: "category",
          label: "Hierarchy",
          id: "hierarchy"
        }, {
          icon: "Pilcrow",
          onClick: function () {
            return e.editor.chain().focus().lift("taskItem").liftListItem("listItem").setParagraph().run();
          },
          id: "paragraph",
          disabled: function () {
            return !e.editor.can().setParagraph();
          },
          isActive: function () {
            return e.editor.isActive("paragraph") && !e.editor.isActive("orderedList") && !e.editor.isActive("bulletList") && !e.editor.isActive("taskList");
          },
          label: "Paragraph",
          type: "option"
        }, {
          icon: "Heading1",
          onClick: function () {
            return e.editor.chain().focus().lift("taskItem").liftListItem("listItem").setHeading({
              level: 1
            }).run();
          },
          id: "heading1",
          disabled: function () {
            return !e.editor.can().setHeading({
              level: 1
            });
          },
          isActive: function () {
            return e.editor.isActive("heading", {
              level: 1
            });
          },
          label: "Heading 1",
          type: "option"
        }, {
          icon: "Heading2",
          onClick: function () {
            return e.editor.chain().focus().lift("taskItem").liftListItem("listItem").setHeading({
              level: 2
            }).run();
          },
          id: "heading2",
          disabled: function () {
            return !e.editor.can().setHeading({
              level: 2
            });
          },
          isActive: function () {
            return e.editor.isActive("heading", {
              level: 2
            });
          },
          label: "Heading 2",
          type: "option"
        }, {
          icon: "Heading3",
          onClick: function () {
            return e.editor.chain().focus().lift("taskItem").liftListItem("listItem").setHeading({
              level: 3
            }).run();
          },
          id: "heading3",
          disabled: function () {
            return !e.editor.can().setHeading({
              level: 3
            });
          },
          isActive: function () {
            return e.editor.isActive("heading", {
              level: 3
            });
          },
          label: "Heading 3",
          type: "option"
        }, {
          type: "category",
          label: "Lists",
          id: "lists"
        }, {
          icon: "List",
          onClick: function () {
            return e.editor.chain().focus().toggleBulletList().run();
          },
          id: "bulletList",
          disabled: function () {
            return !e.editor.can().toggleBulletList();
          },
          isActive: function () {
            return e.editor.isActive("bulletList");
          },
          label: "Bullet list",
          type: "option"
        }, {
          icon: "ListOrdered",
          onClick: function () {
            return e.editor.chain().focus().toggleOrderedList().run();
          },
          id: "orderedList",
          disabled: function () {
            return !e.editor.can().toggleOrderedList();
          },
          isActive: function () {
            return e.editor.isActive("orderedList");
          },
          label: "Numbered list",
          type: "option"
        }, {
          icon: "ListTodo",
          onClick: function () {
            return e.editor.chain().focus().toggleTaskList().run();
          },
          id: "todoList",
          disabled: function () {
            return !e.editor.can().toggleTaskList();
          },
          isActive: function () {
            return e.editor.isActive("taskList");
          },
          label: "Todo list",
          type: "option"
        }];
      }
    });
  };
});
