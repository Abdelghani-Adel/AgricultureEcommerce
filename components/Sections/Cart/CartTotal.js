import cart from "../../../data/cart.json";
import { withTranslation } from "react-multi-lang";
import Link from "next/Link";

const priceTotal = cart.reduce((totalPrice, item) => totalPrice + item.price * item.qty, 0);

const CartTotal = (props) => {
  return (
    <div className="col-lg-6">
      <div className="section-title">
        <h4 className="title">{props.t("Cart.CartTotal")}</h4>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Subtotal</th>
            <td>{new Intl.NumberFormat().format(priceTotal.toFixed(2))}$</td>
          </tr>
          <tr>
            <th>{props.t("Cart.Tax")}</th>
            <td>
              9.99$ <span className="small">(11%)</span>
            </td>
          </tr>
          <tr>
            <th>{props.t("Cart.Total")}</th>
            <td>
              <b>{new Intl.NumberFormat().format((priceTotal + 9.99).toFixed(2))}$</b>
            </td>
          </tr>
        </tbody>
      </table>
      <Link href="/checkout" className="andro_btn-custom primary btn-block">
        {props.t("Cart.CheckoutProceed")}
      </Link>
    </div>
  );
};

export default withTranslation(CartTotal);
