import cart from "../../../data/cart.json";
import { withTranslation } from "react-multi-lang";
import Link from "next/Link";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

const CartTotal = (props) => {
  const cartState = useSelector((state) => state.cart);
  const session = useSession();
  console.log(session);
  return (
    <div className="col-lg-6">
      <div className="section-title">
        <h4 className="title">{props.t("Cart.CartTotal")}</h4>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Subtotal</th>
            <td>
              {new Intl.NumberFormat().format(cartState.checkedCartItemsTotalPrice.toFixed(2))}{" "}
              {cartState.currency && cartState.currency.CurrBaseCode}
            </td>
          </tr>
          {/* <tr>
            <th>{props.t("Cart.Tax")}</th>
            <td>
              9.99$ <span className="small">(11%)</span>
            </td>
          </tr> */}
          <tr>
            <th>{props.t("Cart.Total")}</th>
            <td>
              <b>
                {new Intl.NumberFormat().format(cartState.checkedCartItemsTotalPrice.toFixed(2))}{" "}
                {cartState.currency && cartState.currency.CurrBaseCode}
              </b>
            </td>
          </tr>
        </tbody>
      </table>
      <Link
        href={session.status == "authenticated" ? "/checkout" : "/login"}
        className="andro_btn-custom primary btn-block"
      >
        {props.t("Cart.CheckoutProceed")}
      </Link>
    </div>
  );
};

export default withTranslation(CartTotal);
