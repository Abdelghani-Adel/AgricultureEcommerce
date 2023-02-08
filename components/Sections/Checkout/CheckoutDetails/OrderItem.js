import Link from "next/Link";

const OrderItem = (props) => {
  const { item } = props;
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
        <strong>{(item.Qty * item.UnitPrice).toFixed(2)} $</strong>
      </td>
    </tr>
  );
};

export default OrderItem;
