import checkout from "../../../../data/checkout.json";

const priceTotal = checkout.reduce(
  (totalPrice, item) => totalPrice + item.price * item.qty,
  0
);

const OrderTotal = (props) => {
  return (
    <tr className="total">
      <td>
        <h6 className="mb-0">Grand Total</h6>
      </td>
      <td />
      <td>
        <strong>
          {new Intl.NumberFormat().format(priceTotal.toFixed(2))}$
        </strong>
      </td>
    </tr>
  );
};

export default OrderTotal;
