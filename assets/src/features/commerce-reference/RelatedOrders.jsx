/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createRelatedOrders(readRuntime) {
  return function RelatedOrders(props) {
    const {
      Ge,
      I: Controls,
      OQ,
      React,
      VY,
      b: I18n
    } = readRuntime();
    var t = props.relatedOrders,
      n = void 0 === t ? [] : t;
    if (!Array.isArray(n) || 0 === n.length) return null;
    var r = [{
      title: (0, I18n.__)("Order #", "ohmylms"),
      key: "order_number",
      render: function (e, t) {
        var n = null;
        return t.relationship === (0, I18n.__)("Subscription", "ohmylms") ? n = "/wp-admin/admin.php?page=ohmylms#/subscription-edit/".concat(t.id) : t.relationship !== (0, I18n.__)("Renewal Order", "ohmylms") && t.relationship !== (0, I18n.__)("Parent", "ohmylms") || (n = "/wp-admin/admin.php?page=ohmylms#/order-edit/".concat(t.id)), n ? <a href={n} target={"_blank"} rel={"noopener noreferrer"}><Controls.TextWP as={"span"} color={"#000D25"} weight={500} size={14}>{"#"}{t.id}</Controls.TextWP></a> : <Controls.TextWP as={"span"} color={"#000D25"} weight={500} size={14}>{"#"}{t.id}</Controls.TextWP>;
      }
    }, {
      title: (0, I18n.__)("Relationship", "ohmylms"),
      key: "relationship",
      render: function (e, t) {
        return <Controls.TextWP as={"span"} color={"#7A8B9A"} weight={400} size={14}>{Ge(t.relationship)}</Controls.TextWP>;
      }
    }, {
      title: (0, I18n.__)("Date", "ohmylms"),
      key: "date",
      render: function (e, t) {
        return <Controls.TextWP as={"span"} color={"#7A8B9A"} weight={400} size={14}>{VY(e) || (0, I18n.__)("N/A", "ohmylms")}</Controls.TextWP>;
      }
    }, {
      title: (0, I18n.__)("Status", "ohmylms"),
      key: "status",
      render: function (e, t) {
        return <Controls.TextWP as={"span"} color={"#7A8B9A"} weight={400} size={14}>{t.status}</Controls.TextWP>;
      }
    }, {
      title: (0, I18n.__)("Total", "ohmylms"),
      key: "total",
      render: function (e, t) {
        return <Controls.TextWP as={"span"} color={"#000D25"} weight={500} size={14} dangerouslySetInnerHTML={{
          __html: OQ(t.total)
        }} />;
      }
    }];
    return <React.Fragment><Controls.HeadingWP level={4} size={18} weight={500} color={"#000D25"}>{(0, I18n.__)("Related Orders", "ohmylms")}</Controls.HeadingWP><Controls.SpacerWP marginBottom={4} /><Controls.CardWP isBorderless={!0}><Controls.SpacerWP paddingX={4} paddingY={5} marginBottom={0}><Controls.TableWP rowKey={"order_number"} columns={r} dataSource={n} className={"ohmylms-related-orders-table"} /></Controls.SpacerWP></Controls.CardWP></React.Fragment>;
  };
}
