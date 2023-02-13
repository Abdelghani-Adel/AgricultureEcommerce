import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import checkout from "../../../../data/checkout.json";
import OrderItem from "./OrderItem";
import OrderTotal from "./OrderTotal";

const OrderItemList = (props) => {
  const cartSlice = useSelector((state) => state.cart);
  const totalPrice = cartSlice.tempCheckoutCart
    ? cartSlice.tempCheckoutCart.totalPrice
    : cartSlice.totalPrice;
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
        {props.cartItems.items.map((item, i) => (
          <OrderItem key={item.Item_Id} item={item} />
        ))}
        <OrderTotal totalPrice={totalPrice} />
      </tbody>
    </table>
  );
};

export default withTranslation(OrderItemList);
