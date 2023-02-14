import { withTranslation } from "react-multi-lang";
import OrderItem from "./OrderItem";
import OrderTotal from "./OrderTotal";

const OrderItemList = (props) => {
  return (
    <table className="andro_responsive-table">
      <thead>
        <tr>
          <th>{props.t("Cart.Product")}</th>
          <th>{props.t("Cart.Quantity")}</th>
          <th>{props.t("Cart.Total")}</th>
        </tr>
      </thead>
      <tbody>
        {props.cartContent.items.map((item, i) => (
          <OrderItem key={item.Item_Id} item={item} />
        ))}
        <OrderTotal
          totalPrice={props.cartContent.totalPrice}
          currency={props.cartContent.currency && props.cartContent.currency.CurrBaseCode}
        />
      </tbody>
    </table>
  );
};

export default withTranslation(OrderItemList);
