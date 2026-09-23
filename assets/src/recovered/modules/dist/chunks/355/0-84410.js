// Reconstructed Webpack factory 84410; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => c
  });
  var l = n(49050),
    a = n(41594),
    i = n.n(a),
    o = l.components.Column,
    r = l.components.Section;
  const c = function (e) {
    var t = e.items,
      n = void 0 === t ? [] : t,
      l = e.totalPrice,
      a = e.attributes;
    return i().createElement(r, {
      padding: "0px"
    }, i().createElement(o, {
      "vertical-align": "top",
      direction: "ltr"
    }, i().createElement("mj-table", null, i().createElement("thead", null, i().createElement("tr", null, i().createElement("th", {
      className: "td",
      scope: "col",
      style: {
        fontSize: "".concat(a["table-header-size"]),
        fontFamily: "".concat(a["table-header-family"]),
        fontWeight: "".concat(a["table-header-weight"]),
        lineHeight: "".concat(a["table-header-height"]),
        textAlign: "left",
        color: "".concat(a["table-header-color"]),
        border: "1px solid #e5e5e5",
        verticalAlign: "middle",
        padding: "12px",
        minWidth: "55px"
      }
    }, "Product"), i().createElement("th", {
      className: "td",
      scope: "col",
      style: {
        fontSize: "".concat(a["table-header-size"]),
        fontFamily: "".concat(a["table-header-family"]),
        fontWeight: "".concat(a["table-header-weight"]),
        lineHeight: "".concat(a["table-header-height"]),
        textAlign: "left",
        color: "".concat(a["table-header-color"]),
        border: "1px solid #e5e5e5",
        verticalAlign: "middle",
        padding: "12px",
        minWidth: "55px"
      }
    }, "Quantity"), i().createElement("th", {
      className: "td",
      scope: "col",
      style: {
        fontSize: "".concat(a["table-header-size"]),
        fontFamily: "".concat(a["table-header-family"]),
        fontWeight: "".concat(a["table-header-weight"]),
        lineHeight: "".concat(a["table-header-height"]),
        textAlign: "left",
        color: "".concat(a["table-header-color"]),
        border: "1px solid #e5e5e5",
        verticalAlign: "middle",
        padding: "12px",
        minWidth: "55px"
      }
    }, "Price"))), i().createElement("tbody", {
      className: "mint-cart-grid-block"
    }, n.map(function (e, t) {
      return i().createElement("tr", {
        className: "mint-cart-grid-item",
        key: null == e ? void 0 : e.title
      }, i().createElement("td", {
        className: "td mint-cart-grid-title",
        style: {
          textAlign: "left",
          color: "".concat(a.pncolor),
          border: "1px solid #e5e5e5",
          verticalAlign: "middle",
          padding: "".concat(a["td-padding"]),
          fontFamily: "".concat(a["p-font-family"]),
          fontSize: "".concat(a["p-font-size"]),
          lineHeight: "".concat(a["p-line-height"]),
          fontWeight: "".concat(a["p-font-weight"])
        }
      }, i().createElement("img", {
        style: {
          width: "".concat(a["table-image-width"]),
          height: "".concat(a["table-image-height"]),
          padding: "".concat(a["td-image-padding"]),
          border: "none",
          fontSize: "14px",
          fontWeight: "bold",
          textDecoration: "none",
          textTransform: "capitalize",
          verticalAlign: "middle",
          marginRight: "10px",
          maxWidth: "100%"
        },
        src: null == e ? void 0 : e.thumbnail[0],
        alt: null == e ? void 0 : e.title
      }), i().createElement("span", {
        style: {
          marginTop: "10px",
          display: "inline-block",
          width: "70%"
        }
      }, null == e ? void 0 : e.title)), i().createElement("td", {
        className: "td mint-cart-grid-quantity",
        style: {
          textAlign: "center",
          color: "".concat(a["pr-quantity"]),
          border: "1px solid #e5e5e5",
          verticalAlign: "middle",
          padding: "".concat(a["td-padding"]),
          fontFamily: "".concat(a["pr-quantity-font-family"]),
          fontSize: "".concat(a["pr-quantity-font-size"]),
          lineHeight: "".concat(a["pr-quantity-line-height"]),
          fontWeight: "".concat(a["pr-quantity-font-weight"])
        }
      }, "1"), i().createElement("td", {
        className: "td mint-cart-grid-price",
        style: {
          textAlign: "left",
          fontSize: "".concat(a["table-price-font-size"]),
          fontWeight: "".concat(a["table-price-weight"]),
          fontFamily: "".concat(a["table-price-family"]),
          lineHeight: "".concat(a["table-price-height"]),
          color: "".concat(a.prcolor),
          border: "1px solid #e5e5e5",
          verticalAlign: "middle",
          padding: "".concat(a["td-padding"])
        }
      }, null == e ? void 0 : e.price_html));
    })), i().createElement("tfoot", {
      className: "mint-cart-grid-footer"
    }, i().createElement("tr", null, i().createElement("th", {
      className: "td",
      scope: "row",
      colSpan: "2",
      style: {
        fontSize: "".concat(a["table-footer-size"]),
        fontFamily: "".concat(a["table-footer-family"]),
        fontWeight: "".concat(a["table-footer-weight"]),
        lineHeight: "".concat(a["table-footer-height"]),
        textAlign: "left",
        color: "".concat(a["table-footer-color"]),
        border: "1px solid #e5e5e5",
        verticalAlign: "middle",
        padding: "12px"
      }
    }, "Total:"), i().createElement("td", {
      className: "td mint-cart-grid-total-price",
      style: {
        fontSize: "".concat(a["table-footer-size"]),
        fontFamily: "".concat(a["table-footer-family"]),
        fontWeight: "".concat(a["table-footer-weight"]),
        lineHeight: "".concat(a["table-footer-height"]),
        textAlign: "left",
        color: "".concat(a["table-footer-color"]),
        border: "1px solid #e5e5e5",
        verticalAlign: "middle",
        padding: "12px"
      }
    }, l))))));
  };
});
