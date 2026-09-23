// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var vU = function (e) {
  var t = e.title,
    n = void 0 === t ? "" : t,
    r = e.numberSize,
    a = void 0 === r ? 44 : r,
    o = e.cardNumber,
    i = void 0 === o ? "" : o,
    l = e.icon,
    c = e.children;
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: "start",
    direction: "column",
    gap: 2
  }, React.createElement(I.FlexWP, {
    justify: "start",
    align: "center",
    gap: 1
  }, l && React.createElement(I.FlexItemWP, {
    style: {
      minWidth: "40px",
      textAlign: "center"
    }
  }, React.createElement(I.BadgeWP, {
    isBorderLess: !0,
    isRounded: !0,
    width: "30px",
    height: "30px"
  }, l)), n && React.createElement(I.HeadingWP, {
    level: 4,
    size: 13,
    variant: "muted"
  }, n)), c || React.createElement(I.TextWP, {
    style: {
      marginLeft: "40px"
    },
    size: a
  }, i < 10 ? "0".concat(i) : i)));
};

const gU = (0, g.memo)(vU);

var hU = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "15",
    height: "14",
    fill: "none",
    viewBox: "0 0 15 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "var(--omlms-primary-color)",
    fillRule: "evenodd",
    d: "M.676 3.871a.917.917 0 000 1.66l1.313.62v3.6c0 .68.221 1.44.867 1.909.813.588 2.295 1.304 4.646 1.304 2.35 0 3.828-.721 4.646-1.304.645-.466.866-1.221.866-1.91V6.151l.918-.434v4.03a.459.459 0 10.918 0v-5.05a.918.918 0 00-.525-.83L9.074 1.39a3.673 3.673 0 00-3.14 0L.682 3.868l-.006.003zm2.231 5.876V6.58l3.021 1.432a3.672 3.672 0 003.14 0l3.02-1.432v3.167c0 .51-.164.928-.486 1.157-.665.48-1.956 1.139-4.104 1.139s-3.443-.654-4.104-1.139c-.32-.231-.487-.65-.487-1.157zM6.323 2.22a2.745 2.745 0 012.35 0l5.252 2.479-5.252 2.479a2.745 2.745 0 01-2.35 0L1.07 4.697 6.323 2.22z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "var(--omlms-primary-color)",
    d: "M.676 3.871l.043.09a.1.1 0 00.013-.006L.676 3.87zm-.527.83h.1-.1zm.527.83l.043-.09-.043.09zm1.313.62h.1a.1.1 0 00-.057-.09l-.043.09zm.867 5.509l-.059.08v.001l.059-.081zm9.292 0l.058.081-.058-.081zm.866-5.509l-.042-.09a.1.1 0 00-.058.09h.1zm.918-.434h.1a.1.1 0 00-.142-.09l.042.09zm.918-1.02h-.1.1zm-.525-.83l.043-.09-.043.09zM9.074 1.39l-.043.09.043-.09zm-3.14 0l.042.09-.042-.09zM.682 3.868l-.043-.09a.1.1 0 00-.013.006l.056.084zM2.907 6.58l.043-.09a.1.1 0 00-.143.09h.1zm3.021 1.432l-.043.09.043-.09zm1.57.353v.1-.1zm1.57-.353l.043.09-.043-.09zm3.02-1.432h.1a.1.1 0 00-.142-.09l.043.09zm-.486 4.324l-.058-.081.058.081zm-8.208 0l.06-.08h-.002l-.058.08zM6.323 2.22l.042.09-.042-.09zm2.35 0l-.043.09.043-.09zm5.252 2.479l.043.09a.1.1 0 000-.18l-.043.09zM8.673 7.177l-.042-.09.042.09zm-2.35 0l.043-.09-.043.09zM1.07 4.697l-.043-.09a.1.1 0 000 .181l.043-.09zm-.437-.916a1.017 1.017 0 00-.426.375l.169.107a.817.817 0 01.342-.301L.634 3.78zm-.426.375a1.017 1.017 0 00-.159.545h.2a.82.82 0 01.128-.438l-.17-.107zm-.159.545c0 .193.055.382.159.545l.169-.107a.817.817 0 01-.128-.438h-.2zm.159.545c.103.163.251.294.426.376l.085-.181a.817.817 0 01-.342-.302l-.17.107zm.426.376l1.313.62.085-.181-1.313-.62-.085.18zm1.255.529v3.6h.2v-3.6h-.2zm0 3.6c0 .699.227 1.496.908 1.99l.118-.162c-.61-.443-.826-1.166-.826-1.829h-.2zm.908 1.99c.83.6 2.332 1.323 4.705 1.323v-.2c-2.329 0-3.79-.71-4.588-1.285l-.117.162zm4.705 1.323c2.372 0 3.87-.728 4.704-1.323l-.117-.162c-.8.571-2.259 1.285-4.587 1.285v.2zm4.704-1.323c.681-.492.908-1.284.908-1.99h-.2c0 .67-.215 1.387-.825 1.828l.117.162zm.908-1.99v-3.6h-.2v3.6h.2zm-.057-3.51l.918-.434-.085-.18-.918.434.085.18zm.775-.524v4.03h.2v-4.03h-.2zm0 4.03c0 .149.06.29.164.396l.141-.142a.36.36 0 01-.105-.254h-.2zm.164.396a.56.56 0 00.395.163v-.2a.36.36 0 01-.254-.105l-.14.142zm.395.163a.56.56 0 00.396-.163L14.645 10a.36.36 0 01-.254.106v.2zm.396-.163a.56.56 0 00.163-.396h-.2a.359.359 0 01-.105.254l.142.142zm.163-.396v-5.05h-.2v5.05h.2zm0-5.05c0-.192-.054-.381-.157-.544l-.17.107c.084.13.128.283.128.438h.2zm-.157-.544a1.018 1.018 0 00-.425-.376l-.085.181c.14.066.258.171.34.302l.17-.107zm-.425-.376L9.116 1.298l-.085.181 5.252 2.48.085-.182zM9.116 1.298A3.773 3.773 0 007.504.936v.2c.528 0 1.05.117 1.527.343l.085-.18zM7.504.936c-.558 0-1.109.124-1.613.362l.085.181c.478-.226 1-.343 1.528-.343v-.2zm-1.613.362L.639 3.778l.085.18L5.976 1.48l-.085-.18zM.626 3.784l-.005.004.11.167.006-.004-.11-.167zm2.381 5.963V6.58h-.2v3.167h.2zM2.864 6.67l3.021 1.432.086-.18-3.02-1.433-.087.181zm3.021 1.433a3.773 3.773 0 001.613.362v-.2c-.528 0-1.05-.117-1.527-.343l-.086.18zm1.613.362c.558 0 1.109-.124 1.613-.362l-.086-.181a3.567 3.567 0 01-1.527.343v.2zm1.613-.363l3.02-1.432-.085-.18-3.02 1.432.085.18zm2.878-1.522v3.167h.2V6.58h-.2zm0 3.167c0 .492-.16.872-.445 1.076l.116.163c.357-.255.529-.71.529-1.239h-.2zm-.445 1.076c-.65.469-1.92 1.12-4.046 1.12v.2c2.17 0 3.482-.666 4.163-1.158l-.117-.162zm-4.046 1.12c-2.127 0-3.4-.647-4.045-1.12l-.118.162c.678.497 1.993 1.158 4.163 1.158v-.2zm-4.046-1.12c-.285-.206-.445-.589-.445-1.076h-.2c0 .526.173.982.528 1.238l.117-.162zM6.366 2.31c.354-.168.74-.255 1.132-.255v-.2c-.421 0-.837.094-1.218.274l.086.181zm1.132-.255c.392 0 .778.087 1.132.255l.086-.18a2.845 2.845 0 00-1.218-.275v.2zm1.133.255l5.251 2.48.086-.182-5.252-2.479-.085.181zm5.251 2.298l-5.251 2.48.085.18 5.252-2.479-.086-.18zM8.63 7.087c-.354.167-.74.254-1.132.254v.2c.421 0 .837-.094 1.218-.274l-.086-.18zm-1.132.254c-.392 0-.778-.087-1.132-.255l-.086.181c.38.18.797.274 1.218.274v-.2zm-1.133-.255L1.114 4.607l-.086.181L6.28 7.267l.085-.18zM1.114 4.788L6.366 2.31l-.086-.18-5.252 2.478.086.181z"
  })));
};

const yU = (0, g.memo)(hU);

var bU = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "13",
    height: "14",
    fill: "none",
    viewBox: "0 0 13 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "var(--omlms-primary-color)",
    fillRule: "evenodd",
    d: "M5.152.496a2.078 2.078 0 012.695 0l.05.042a2.08 2.08 0 001.181.49l.064.005a2.078 2.078 0 011.906 1.905l.005.064c.035.436.206.85.49 1.183l.041.048a2.078 2.078 0 010 2.695l-.041.05a2.077 2.077 0 00-.49 1.182l-.005.063a2.078 2.078 0 01-1.085 1.664v3.42a.693.693 0 01-.892.663L6.5 13.2l-2.571.771a.693.693 0 01-.892-.663v-3.42a2.078 2.078 0 01-1.085-1.664l-.005-.063a2.078 2.078 0 00-.49-1.183l-.042-.049a2.078 2.078 0 010-2.695l.042-.048c.283-.333.455-.747.49-1.183l.005-.064a2.078 2.078 0 011.905-1.905l.064-.005c.436-.035.85-.207 1.183-.49l.048-.042zM6.95 1.551l.049.041a3.463 3.463 0 001.97.816l.064.005a.693.693 0 01.635.636l.005.063c.058.727.344 1.416.817 1.971l.041.049c.22.259.22.64 0 .898l-.041.049a3.462 3.462 0 00-.817 1.97l-.005.064a.693.693 0 01-.635.635l-.064.005a3.463 3.463 0 00-1.97.817l-.049.041a.693.693 0 01-.898 0L6 9.57a3.463 3.463 0 00-1.97-.817l-.063-.005a.693.693 0 01-.636-.635l-.005-.064a3.463 3.463 0 00-.816-1.97l-.042-.049a.693.693 0 010-.898l.042-.049a3.463 3.463 0 00.816-1.97l.005-.064a.693.693 0 01.636-.636l.063-.005A3.463 3.463 0 006 1.592l.05-.041a.691.691 0 01.898 0zm-2.527 8.686v2.14l1.68-.505c.26-.078.536-.078.796 0l1.68.504v-2.139a2.08 2.08 0 00-.682.387l-.049.041a2.078 2.078 0 01-2.695 0l-.048-.041a2.08 2.08 0 00-.682-.387z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "var(--omlms-primary-color)",
    fillRule: "evenodd",
    d: "M6.501 6.274a.693.693 0 100-1.385.693.693 0 000 1.385zm0 1.385a2.078 2.078 0 100-4.155 2.078 2.078 0 000 4.155z",
    clipRule: "evenodd"
  })));
};

const _U = (0, g.memo)(bU);

var wU = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "14",
    height: "15",
    fill: "none",
    viewBox: "0 0 14 15",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "var(--omlms-primary-color)",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.3",
    d: "M13.058 6.788a5.726 5.726 0 10-9.984 3.83m4.258-7.266v3.436h2.695"
  }), React.createElement("path", {
    fill: "var(--omlms-primary-color)",
    fillRule: "evenodd",
    d: "M10.316 8.408c-.283 0-.513.244-.513.544 0 .3.23.544.513.544h1.327l-2.866 3.04-1.327-1.407a.985.985 0 00-1.45 0l-2.716 2.88a.57.57 0 000 .77c.2.212.525.212.726 0l2.715-2.88 1.327 1.406a.985.985 0 001.45 0l2.866-3.04v1.408c0 .3.23.544.513.544.284 0 .513-.244.513-.544v-2.72c0-.301-.23-.545-.513-.545h-2.565z",
    clipRule: "evenodd"
  })));
};

const EU = (0, g.memo)(wU);

var SU = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "11",
    height: "12",
    fill: "none",
    viewBox: "0 0 11 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "var(--omlms-primary-color)",
    fillRule: "evenodd",
    d: "M6.033 3.5L5.5 1.97 4.968 3.5a2.253 2.253 0 01-2.082 1.513l-1.622.033 1.293.98a2.253 2.253 0 01.795 2.447l-.47 1.553L4.213 9.1a2.253 2.253 0 012.574 0l1.331.927-.47-1.553a2.253 2.253 0 01.796-2.447l1.292-.98-1.621-.033A2.253 2.253 0 016.033 3.5zm.531-1.9C6.214.59 4.787.59 4.436 1.6l-.532 1.53c-.155.445-.57.747-1.041.756L1.24 3.92C.173 3.942-.267 5.3.584 5.944l1.292.98c.376.285.534.773.398 1.224L1.804 9.7c-.31 1.023.845 1.861 1.722 1.251l1.33-.926c.388-.27.9-.27 1.288 0l1.33.926c.878.61 2.032-.229 1.722-1.25l-.47-1.553c-.136-.451.023-.94.398-1.224l1.293-.98c.85-.645.41-2.002-.658-2.024l-1.621-.033a1.126 1.126 0 01-1.041-.756L6.564 1.6z",
    clipRule: "evenodd"
  })));
};

const RU = (0, g.memo)(SU);

var xU = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "11",
    height: "14",
    fill: "none",
    viewBox: "0 0 11 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "var(--omlms-primary-color)",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2",
    d: "M.7 11.5A1.5 1.5 0 012.2 10h8.1"
  }), React.createElement("path", {
    stroke: "var(--omlms-primary-color)",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2",
    d: "M2.2 1h8.1v12H2.2a1.5 1.5 0 01-1.5-1.5v-9A1.5 1.5 0 012.2 1z"
  })));
};

const CU = (0, g.memo)(xU);

var PU = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "16",
    height: "14",
    fill: "none",
    viewBox: "0 0 16 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "var(--omlms-primary-color)",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2",
    d: "M1.125 1.5h3.667a2.444 2.444 0 012.444 2.444V12.5a1.834 1.834 0 00-1.833-1.833H1.125V1.5zM5.25 6.313H3.187m.688-2.063h-.688"
  }), React.createElement("path", {
    stroke: "var(--omlms-primary-color)",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2",
    d: "M9.069 10.667A1.833 1.833 0 007.235 12.5V3.944A2.444 2.444 0 019.68 1.5h3.667v6.111m1.528.764l-2.836 2.75-1.289-1.25"
  })));
};

const OU = (0, g.memo)(PU);

var kU = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "15",
    fill: "none",
    viewBox: "0 0 15 13",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "var(--omlms-primary-color)",
    stroke: "var(--omlms-primary-color)",
    strokeWidth: ".2",
    d: "M7.86 11.183H4.067c.156-.261.245-.587.245-.894V2.988c0-.646.508-1.17 1.132-1.17h5.109c.623 0 1.13.524 1.13 1.17v2.686c0 .226.178.409.396.409a.402.402 0 00.394-.409V2.988c0-1.096-.861-1.988-1.92-1.988h-5.11c-1.06 0-1.92.892-1.92 1.988v4.09H2.92C1.861 7.079 1 7.972 1 9.069v1.22c0 .937.734 1.7 1.64 1.71l.014.002H7.86a.402.402 0 00.394-.408.402.402 0 00-.394-.41zm-6.07-.896v-1.22c0-.646.507-1.171 1.131-1.171h.601v2.391c0 .494-.39.895-.868.895-.477 0-.865-.401-.865-.895z"
  }), React.createElement("path", {
    fill: "var(--omlms-primary-color)",
    stroke: "var(--omlms-primary-color)",
    strokeWidth: ".2",
    d: "M10.142 4.265H5.86a.402.402 0 00-.395.409c0 .225.177.408.395.408h4.282a.402.402 0 00.395-.408.402.402 0 00-.395-.409zm0 1.826H5.86a.402.402 0 00-.395.409c0 .225.177.408.395.408h4.282a.402.402 0 00.395-.408.402.402 0 00-.395-.409zM8 7.917H5.86a.402.402 0 00-.395.409c0 .225.177.408.395.408H8a.402.402 0 00.396-.408A.402.402 0 008 7.917z"
  }), React.createElement("path", {
    fill: "var(--omlms-primary-color)",
    d: "M13.713 7.072a1.168 1.168 0 00-1.689 0L9.322 9.867a.711.711 0 00-.188.38l-.149.906a.721.721 0 00.19.614.669.669 0 00.594.197l.876-.154a.665.665 0 00.367-.196l2.701-2.794a1.267 1.267 0 000-1.748zm-3.233 3.939l-.69.12.116-.713 1.848-1.911.573.593-1.848 1.91zm2.675-2.769l-.27.28-.574-.593.27-.28a.396.396 0 01.574 0 .43.43 0 010 .593z"
  }), React.createElement("path", {
    stroke: "var(--omlms-primary-color)",
    strokeWidth: ".2",
    d: "M13.713 7.072s0 0 0 0zm0 0a1.168 1.168 0 00-1.689 0L9.322 9.867a.711.711 0 00-.188.38l-.149.906a.721.721 0 00.19.614.669.669 0 00.594.197l.876-.154a.665.665 0 00.367-.196l2.701-2.794a1.267 1.267 0 000-1.748zm-3.233 3.939l-.69.12.116-.713 1.848-1.911.573.593-1.848 1.91zm2.675-2.769l-.27.28-.574-.593.27-.28a.396.396 0 01.574 0 .43.43 0 010 .593z"
  })));
};

const jU = (0, g.memo)(kU);

var AU = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "18",
    height: "14",
    fill: "none",
    viewBox: "0 0 18 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "var(--omlms-primary-color)",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.3",
    d: "M9.294 10.533L11.06 12.3l5.89-5.89M12.83 7a5.89 5.89 0 10-5.891 5.89"
  }), React.createElement("path", {
    stroke: "var(--omlms-primary-color)",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.3",
    d: "M5.225 5.233a1.767 1.767 0 013.434.589C8.66 7 6.892 7.589 6.892 7.589m.047 2.356h.01"
  })));
};

const MU = (0, g.memo)(AU);

var TU = function (e) {
  var t = e.iconColor;
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "13",
    height: "12",
    fill: "none",
    viewBox: "0 0 13 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: t,
    fillRule: "evenodd",
    d: "M4.983 2.253c-.068-.284-.522-.284-.59 0L3.67 5.26c-.18.746-.918 1.28-1.773 1.28h-.835C.729 6.54.458 6.298.458 6c0-.298.271-.54.605-.54h.835c.285 0 .531-.177.591-.426l.722-3.007c.34-1.422 2.612-1.422 2.954 0l1.852 7.72c.069.285.523.285.591 0L9.33 6.74c.179-.746.917-1.28 1.772-1.28h.836c.333 0 .604.242.604.54 0 .298-.27.54-.604.54h-.836c-.285 0-.531.177-.59.426L9.79 9.973c-.342 1.422-2.613 1.422-2.954 0l-1.853-7.72z",
    clipRule: "evenodd"
  })));
};

const IU = (0, g.memo)(TU);

function FU(e) {
  return function (e) {
    if (Array.isArray(e)) return zU(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || WU(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function NU(e) {
  return NU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, NU(e);
}

function DU(e, t) {
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
  }(e, t) || WU(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function WU(e, t) {
  if (e) {
    if ("string" == typeof e) return zU(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zU(e, t) : void 0;
  }
}

function zU(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var BU = (0, g.lazy)(function () {
  return Promise.all([n.e(552), n.e(96), n.e(655)]).then(n.bind(n, 4655));
});

const LU = function (e) {
  var t,
    n,
    r,
    a,
    o,
    i,
    l,
    c,
    u,
    s,
    d,
    m = e.graphData,
    p = e.currency,
    f = e.currency_pos,
    v = e.filterTypeParam,
    h = (0, y.useSelect)(function (e) {
      return e(T.default).getDashboardLoader();
    }, []),
    w = null != v ? v : (0, y.useSelect)(function (e) {
      return e(T.default).getDashboardFilter();
    }, []),
    E = DU((0, g.useState)({}), 2),
    S = E[0],
    R = E[1],
    x = DU((0, g.useState)(null), 2),
    C = (x[0], x[1]);
  function P(e) {
    return /^\d{4}$/.test(e) ? "YYYY" : /^\d{4}-\d{2}$/.test(e) ? "YYYY-MM" : /^\d{4}-\d{2}-\d{2}$/.test(e) ? "YYYY-MM-DD" : "Invalid format";
  }
  var O = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    k = function (e, t, n) {
      n.labels.push(e), n.values.push(t);
    },
    j = function (e, t, n, r, a) {
      a[e] = a[e] || {
        earning: 0,
        refund: 0,
        net: 0
      }, a[e].earning += t, a[e].refund += n, a[e].net += r;
    },
    A = function (e, t, n) {
      if ("YYYY-MM" === t) {
        var r = DU(e.split("-"), 2),
          a = r[0],
          o = r[1];
        return "yearly" === n ? "".concat(O[parseInt(o, 10) - 1]) : "".concat(O[parseInt(o, 10) - 1], " ").concat(a);
      }
      if ("YYYY-MM-DD" === t) {
        if ("monthly" === n) return parseInt(e.split("-")[2], 10);
        if ("custom" === n) {
          var i = DU(e.split("-"), 3),
            l = (i[0], i[1]),
            c = i[2];
          return "".concat(O[parseInt(l, 10) - 1], " ").concat(parseInt(c, 10));
        }
      }
      return "YYYY" === t ? e : null;
    };
  (0, g.useEffect)(function () {
    m && R(function (e, t) {
      var n = {
          labels: [],
          values: []
        },
        r = {
          labels: [],
          values: []
        },
        a = {
          labels: [],
          values: []
        };
      if ("object" !== NU(e) || Array.isArray(e) || null === e) return console.warn("Invalid input: Expected a non-empty object."), {
        revenue: n,
        refund: r,
        net_amount: a
      };
      switch (t) {
        case "yearly":
          C(null), function (e, t, n, r) {
            for (var a = 0, o = Object.entries(e); a < o.length; a++) {
              var i = DU(o[a], 2),
                l = i[0],
                c = i[1],
                u = P(l);
              if ("Invalid format" !== u) {
                var s = A(l, u, "yearly");
                if (s) {
                  var d = c.earning,
                    m = void 0 === d ? 0 : d,
                    p = c.refund,
                    f = void 0 === p ? 0 : p,
                    v = c.net,
                    g = void 0 === v ? 0 : v;
                  k(s, m, t), k(s, f, n), k(s, g, r);
                } else console.warn("Invalid label for key ".concat(l));
              } else console.warn("Invalid date format for key ".concat(l));
            }
          }(e, n, r, a);
          break;
        case "monthly":
          !function (e, t, n, r) {
            for (var a = {}, o = 0, i = Object.entries(e); o < i.length; o++) {
              var l = DU(i[o], 2),
                c = l[0],
                u = l[1],
                s = P(c);
              if ("Invalid format" !== s) {
                var d = A(c, s, "monthly");
                if (d) {
                  var m = parseInt(c.split("-")[1], 10) - 1;
                  if (C(O[m]), "object" !== NU(u) || Array.isArray(u) || null === u) console.warn("Invalid value for key ".concat(c, ": Expected an object."));else {
                    var p = u.earning,
                      f = void 0 === p ? 0 : p,
                      v = u.refund,
                      g = void 0 === v ? 0 : v,
                      h = u.net;
                    j(d, f, g, void 0 === h ? 0 : h, a);
                  }
                } else console.warn("Invalid label for key ".concat(c));
              } else console.warn("Invalid date format for key ".concat(c));
            }
            for (var y = 0, b = Object.entries(a); y < b.length; y++) {
              var _ = DU(b[y], 2),
                w = _[0],
                E = _[1],
                S = E.earning,
                R = E.refund,
                x = E.net;
              k(w, S, t), k(w, R, n), k(w, x, r);
            }
          }(e, n, r, a);
          break;
        case "custom":
          C(null), function (e, t, n, r) {
            for (var a = {}, o = 0, i = Object.entries(e); o < i.length; o++) {
              var l = DU(i[o], 2),
                c = l[0],
                u = l[1],
                s = P(c);
              if ("Invalid format" !== s) {
                var d = A(c, s, "custom");
                if (d) {
                  if ("object" !== NU(u) || Array.isArray(u) || null === u) console.warn("Invalid value for key ".concat(c, ": Expected an object."));else {
                    var m = u.earning,
                      p = void 0 === m ? 0 : m,
                      f = u.refund,
                      v = void 0 === f ? 0 : f,
                      g = u.net;
                    j(d, p, v, void 0 === g ? 0 : g, a);
                  }
                } else console.warn("Invalid label for key ".concat(c));
              } else console.warn("Invalid date format for key ".concat(c));
            }
            for (var h = 0, y = Object.keys(a); h < y.length; h++) {
              var b = y[h];
              k(b, a[b].earning, t), k(b, a[b].refund, n), k(b, a[b].net, r);
            }
          }(e, n, r, a);
          break;
        default:
          console.warn("Unsupported filter type: ".concat(t));
      }
      return {
        revenue: n,
        refund: r,
        net_amount: a
      };
    }(m, null == w ? void 0 : w.type));
  }, [m]);
  var M = {
      first: (0, b.__)("Income", "ohmylms"),
      second: (0, b.__)("Refund", "ohmylms"),
      third: (0, b.__)("Net Income", "ohmylms")
    },
    I = null != S && null !== (t = S.revenue) && void 0 !== t && t.values ? Math.max.apply(Math, FU(null == S || null === (n = S.revenue) || void 0 === n ? void 0 : n.values)) : 0,
    F = null != S && null !== (r = S.refund) && void 0 !== r && r.values ? Math.max.apply(Math, FU(null == S || null === (a = S.refund) || void 0 === a ? void 0 : a.values)) : 0,
    N = null != S && null !== (o = S.net_amount) && void 0 !== o && o.values ? Math.max.apply(Math, FU(null == S || null === (i = S.net_amount) || void 0 === i ? void 0 : i.values)) : 0,
    D = Math.max(I, F, N) + 10,
    W = Math.ceil(D / 5);
  return React.createElement(React.Fragment, null, h ? React.createElement(React.Fragment, null, React.createElement(_.A, {
    paragraph: {
      rows: 6
    },
    active: !0,
    style: {
      padding: "20px"
    }
  })) : React.createElement(React.Fragment, null, React.createElement(g.Suspense, {
    fallback: React.createElement("div", null, "Loading chart...")
  }, React.createElement(BU, {
    labels: (null == S || null === (l = S.refund) || void 0 === l ? void 0 : l.labels) || [],
    revenueData: (null == S || null === (c = S.revenue) || void 0 === c ? void 0 : c.values) || [],
    refundData: (null == S || null === (u = S.refund) || void 0 === u ? void 0 : u.values) || [],
    netAmountData: (null == S || null === (s = S.net_amount) || void 0 === s ? void 0 : s.values) || [],
    stepSize: W,
    maxStep: D + W,
    tooltipTitle: M,
    currency: p || (null === (d = window) || void 0 === d || null === (d = d.creator_lms_params) || void 0 === d ? void 0 : d.currency),
    currencyPos: f || "left"
  }))));
};

var VU = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "6",
    viewBox: "0 0 10 6",
    fill: "none"
  }, React.createElement("path", {
    d: "M1 1L5 5L9 1",
    stroke: "#7A8B9A",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

const HU = (0, g.memo)(VU);

var GU = function (e) {
  M().noConflict();
  var t = e.title,
    n = void 0 === t ? (0, b.__)("Send Reminder", "ohmylms") : t,
    r = (e.isOpen, e.handleCancel),
    a = e.handleOk,
    o = e.okText,
    i = void 0 === o ? (0, b.__)("Send", "ohmylms") : o,
    l = e.onEmailChange,
    c = e.isEmailDisabled,
    u = e.email,
    s = e.onSubjectChange,
    d = e.subject,
    m = (e.onEmailBodyChange, e.emailBody),
    p = void 0 === m ? "If you no longer wish to receive these emails, please update your Preferences or Unsubscribe here." : m,
    f = (e.className, e.loading);
  return (0, g.useEffect)(function () {
    var e,
      t = "rtl" === (null === (e = document.querySelector("html")) || void 0 === e ? void 0 : e.getAttribute("dir"));
    wp.editor.remove("new-message"), wp.editor.initialize("new-message", {
      tinymce: {
        plugins: "colorpicker compat3x lists tabfocus textcolor wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wptextpattern wpview link directionality",
        toolbar1: "bold italic underline strikethrough | bullist numlist | blockquote hr wp_more | alignleft aligncenter alignright | link unlink | ltr rtl | wp_adv",
        toolbar2: "formatselect alignjustify forecolor | fontsizeselect | fontselect |pastetext removeformat charmap | outdent indent | undo redo | wp_help",
        branding: !1
      },
      quicktags: !0,
      mediaButtons: !0,
      wpautop: !0,
      directionality: "".concat(t ? "rtl" : "ltr"),
      initialValue: p
    });
  }, []), React.createElement(React.Fragment, null, React.createElement(I.ModalWP, {
    title: n,
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0,
    onRequestClose: r
  }, React.createElement(I.TextWP, {
    as: "span",
    size: 14
  }, (0, b.__)("To:", "ohmylms")), React.createElement(I.InputWP, {
    onChange: function (e) {
      return l(e);
    },
    disabled: c,
    value: u,
    type: "email"
  }), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement(I.InputWP, {
    value: d,
    onChange: function (e) {
      return s(e);
    },
    placeholder: "Subject",
    type: "text"
  }), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement("textarea", {
    id: "new-message",
    placeholder: "Type something here...",
    defaultValue: p
  }), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement(I.FlexWP, {
    justify: "flex-end"
  }, React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: a,
    isBusy: f
  }, i))));
};

const UU = (0, g.memo)(GU);

function qU(e, t) {
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
      if ("string" == typeof e) return YU(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? YU(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function YU(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var QU = function (e) {
  var t = e.defaultValue,
    n = e.placeholder,
    r = e.onChange,
    a = e.direction,
    o = void 0 === a ? "end" : a,
    i = e.onRangeChange,
    l = qU((0, g.useState)(t), 2),
    c = l[0],
    u = l[1],
    s = qU((0, g.useState)({
      startDate: null,
      endDate: null
    }), 2),
    d = s[0],
    m = s[1],
    p = (0, g.useMemo)(function () {
      return [{
        value: "all",
        label: (0, b.__)("All Times", "ohmylms")
      }, {
        value: "last_30_days",
        label: (0, b.__)("Last 30 days", "ohmylms")
      }, {
        value: "current_month",
        label: (0, b.__)("Current month", "ohmylms")
      }, {
        value: "previous_month",
        label: (0, b.__)("Previous month", "ohmylms")
      }, {
        value: "current_year",
        label: (0, b.__)("Current year", "ohmylms")
      }, {
        value: "last_12_months",
        label: (0, b.__)("Last 12 months", "ohmylms")
      }, {
        value: "custom_range",
        label: (0, b.__)("Custom Range", "ohmylms")
      }];
    }, []),
    f = (0, g.useCallback)(function (e) {
      u(e), r && r(e);
    }, [r]),
    v = (0, g.useCallback)(function (e) {
      var t = qU(e, 2),
        n = t[0],
        r = t[1];
      m({
        startDate: n,
        endDate: r
      }), i && i(e);
    }, [r]);
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "center",
    gap: 2,
    direction: "start" === o ? "row-reverse" : "row"
  }, React.createElement(I.FlexItemWP, null, React.createElement(I.SelectWP, {
    value: null != c ? c : "",
    placeholder: n,
    onChange: f,
    options: p
  })), "custom_range" === c && React.createElement(I.FlexItemWP, {
    style: {
      border: "1px solid #c8d2e9",
      height: "40px"
    }
  }, React.createElement(I.DateRangePickerWP, {
    initialStartDate: d.startDate,
    initialEndDate: d.endDate,
    onChange: v
  }))));
};

const ZU = (0, g.memo)(QU);
