// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var bee = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M17.1 0H.9C.36 0 0 .36 0 .9v11.7c0 .54.36.9.9.9h6.12c-.27.81-.81 1.89-1.89 2.7H4.5c-.54 0-.9.36-.9.9s.36.9.9.9h9c.54 0 .9-.36.9-.9s-.36-.9-.9-.9h-.63c-1.08-.72-1.62-1.89-1.89-2.7h6.12c.54 0 .9-.36.9-.9V.9c0-.54-.36-.9-.9-.9zM7.65 16.2c.72-.99 1.08-1.98 1.26-2.7h.36c.18.72.54 1.71 1.26 2.7H7.65zm8.55-4.5H1.8V1.8h14.4v9.9z"
  })));
};

const _ee = (0, g.memo)(bee);

var wee = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "14",
    height: "20",
    viewBox: "0 0 14 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: ".3",
    d: "M10.882 1H3.118C1.948 1 1 1.863 1 2.929V17.07C1 18.137 1.948 19 3.118 19h7.764c1.17 0 2.118-.863 2.118-1.929V2.93C13 1.863 12.052 1 10.882 1zm.706 16.071c0 .355-.316.643-.706.643H3.118c-.39 0-.706-.287-.706-.643V2.93c0-.355.316-.643.706-.643h.706c0 .355.316.643.705.643h4.942c.39 0 .706-.288.706-.643h.705c.39 0 .706.288.706.643v14.14z"
  })));
};

const Eee = (0, g.memo)(wee);

var See = function (e) {
  var t = e.title,
    n = e.handlePreview,
    r = e.handleSave,
    a = e.device;
  return React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    marginY: 3,
    padding: 3
  }, React.createElement(I.FlexWP, {
    justify: "space-between",
    align: "center",
    gap: "2"
  }, React.createElement(I.HeadingWP, {
    level: "3"
  }, t), React.createElement(I.FlexItemWP, null, React.createElement(I.FlexWP, {
    align: "center",
    justify: "start",
    gap: 4,
    className: "omlms-email-editor-responsieve-switcher"
  }, React.createElement(I.RadioGroupIconWP, {
    onChange: function (e) {
      return n(e);
    },
    value: a,
    options: [{
      label: (0, b.__)("Desktop", "ohmylms"),
      value: "desktop",
      icon: React.createElement(_ee, null)
    }, {
      label: (0, b.__)("Mobile", "ohmylms"),
      value: "mobile",
      icon: React.createElement(Eee, null)
    }]
  }), React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: r
  }, (0, b.__)("Save Changes", "ohmylms")))))));
};

const Ree = (0, g.memo)(See);
