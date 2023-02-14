import Link from "next/Link";
import { useSelector } from "react-redux";

const OrderItem = (props) => {
  const { item } = props;
  const cartState = useSelector((state) => state.cart);
  return (
    <tr>
      <td data-title="Product">
        <div className="andro_cart-product-wrapper">
          <div className="andro_cart-product-body">
            <h6>
              <Link href="#">{item.Item_Name}</Link>
            </h6>
          </div>
        </div>
      </td>
      <td data-title="Quantity">x {item.Qty}</td>
      <td data-title="Total">
        <strong>
          {(item.Qty * item.UnitPrice).toFixed(2)}{" "}
          {cartState.currency && cartState.currency.CurrBaseCode}
        </strong>
      </td>
    </tr>
  );
};

export default OrderItem;
