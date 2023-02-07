import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import checkout from "../../../../data/checkout.json";
import OrderItem from "./OrderItem";
import OrderTotal from "./OrderTotal";

const OrderItemList = (props) => {
  const cartSlice = useSelector((state) => state.cart);
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
        {cartSlice.items.map((item, i) => (
          <OrderItem key={item.id} item={item} />
        ))}
        <OrderTotal />
      </tbody>
    </table>
  );
};

export default withTranslation(OrderItemList);
