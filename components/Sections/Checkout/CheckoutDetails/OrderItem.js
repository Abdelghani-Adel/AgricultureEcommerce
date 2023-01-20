import Link from "next/Link";

const OrderItem = (props) => {
  const { item } = props;
  return (
    <tr>
      <td data-title="Product">
        <div className="andro_cart-product-wrapper">
          <div className="andro_cart-product-body">
            <h6>
              <Link href="#">{item.productname}</Link>
            </h6>

            <p>{item.qty} Kilos</p>
          </div>
        </div>
      </td>
      <td data-title="Quantity">x{item.qty}</td>
      <td data-title="Total">
        <strong>
          {new Intl.NumberFormat().format((item.qty * item.price).toFixed(2))}$
        </strong>
      </td>
    </tr>
  );
};

export default OrderItem;
