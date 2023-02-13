const OrderTotal = (props) => {
  return (
    <tr className="total">
      <td>
        <h6 className="mb-0">Grand Total</h6>
      </td>
      <td />
      <td>
        <strong>{props.totalPrice.toFixed(2)} $</strong>
      </td>
    </tr>
  );
};

export default OrderTotal;
