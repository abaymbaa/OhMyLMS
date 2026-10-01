// Reconstructed Webpack factory 13534; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => d
  });
  var l = n(49050);
  function a(e) {
    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, a(e);
  }
  function i(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t && (l = l.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, l);
    }
    return n;
  }
  function o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? i(Object(n), !0).forEach(function (t) {
        r(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function r(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != a(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, "string");
          if ("object" != a(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == a(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  var c = l.components.Column,
    u = l.components.Section;
  const d = function (e) {
    var t = e.attributes,
      n = {
        fontSize: t["font-size"] || "100%",
        fontWeight: "bold",
        lineHeight: "1.5",
        textAlign: "left",
        fontFamily: t["font-family"] || "Arial, sans-serif",
        color: t["table-head-color"] || "#000",
        verticalAlign: "middle",
        padding: t["inner-padding"] || "5px",
        minWidth: "55px",
        border: "".concat(t["border-width"] || "1px", " solid ").concat(t["border-color"] || "#e5e5e5")
      },
      l = {
        textAlign: "left",
        fontFamily: t["font-family"] || "Arial, sans-serif",
        color: t["table-text-color"] || "#000",
        fontSize: t["font-size"] || "100%",
        lineHeight: t["line-height"] || "1",
        fontWeight: t["font-weight"] || "normal",
        verticalAlign: "middle",
        padding: t["inner-padding"] || "5px",
        minWidth: "55px",
        border: "".concat(t["border-width"] || "1px", " solid ").concat(t["border-color"] || "#e5e5e5")
      };
    return React.createElement(React.Fragment, null, React.createElement(u, {
      padding: "0px"
    }, React.createElement(c, {
      "vertical-align": "top",
      padding: "0px",
      direction: "ltr"
    }, React.createElement("mj-table", {
      padding: t.padding
    }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
      style: n
    }, "Product"), React.createElement("th", {
      style: o(o({}, n), {}, {
        minWidth: "70px"
      })
    }, "Quantity"), React.createElement("th", {
      style: n
    }, "Price"))), React.createElement("tbody", {
      className: "mint-order-details-grid-block"
    }, React.createElement("tr", null, React.createElement("td", {
      className: "mint-order-details-item-name",
      style: l
    }, "My first Order"), React.createElement("td", {
      className: "mint-order-details-item-quantity",
      style: l
    }, "1"), React.createElement("td", {
      className: "mint-order-details-item-price",
      style: l
    }, "$ 45.00")), React.createElement("tr", null, React.createElement("td", {
      colSpan: "2",
      style: n
    }, "Subtotal"), React.createElement("td", {
      className: "mint-order-details-subtotal",
      style: l
    }, "$ 45.00")), React.createElement("tr", null, React.createElement("td", {
      colSpan: "2",
      style: n
    }, "Shipping"), React.createElement("td", {
      className: "mint-order-details-shipping",
      style: l
    }, "$ 4.00")), React.createElement("tr", null, React.createElement("td", {
      colSpan: "2",
      style: n
    }, "Tax"), React.createElement("td", {
      className: "mint-order-details-tax",
      style: l
    }, "$ 4.50")), React.createElement("tr", null, React.createElement("td", {
      colSpan: "2",
      style: n
    }, "Payment Method"), React.createElement("td", {
      className: "mint-order-details-payment-method",
      style: l
    }, "Paypal")), React.createElement("tr", null, React.createElement("td", {
      colSpan: "2",
      style: n
    }, "Total"), React.createElement("td", {
      className: "mint-order-details-total",
      style: l
    }, "$ 53.50")))))));
  };
});
