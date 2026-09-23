// Reconstructed Webpack factory 45644; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getConnectionText = void 0;
  var r = n(74802);
  t.getConnectionText = function (e) {
    switch (e) {
      case r.WebSocketStatus.Connected:
        return "Connected";
      case r.WebSocketStatus.Connecting:
        return "Connecting...";
      case r.WebSocketStatus.Disconnected:
        return "Disconnected";
      default:
        return "Connecting...";
    }
  };
});
