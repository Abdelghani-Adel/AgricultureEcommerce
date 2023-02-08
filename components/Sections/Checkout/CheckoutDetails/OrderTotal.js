import { useSelector } from "react-redux";

const OrderTotal = (props) => {
  const cartState = useSelector((state) => state.cart);
  return (
    <tr className="total">
      <td>
        <h6 className="mb-0">Grand Total</h6>
      </td>
      <td />
      <td>
        <strong>{cartState.totalPrice.toFixed(2)} $</strong>
      </td>
    </tr>
  );
};

export default OrderTotal;
