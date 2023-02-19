import { useSession } from "next-auth/react";
import Link from "next/Link";
import { useEffect, useState } from "react";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";

const CartTotal = (props) => {
  const cartState = useSelector((state) => state.cart);
  const [buttonIsDisabled, setButtonIsDisabled] = useState();
  const session = useSession();

  useEffect(() => {
    if (cartState.checkedCartItems.length > 0) {
      setButtonIsDisabled(false);
    } else {
      setButtonIsDisabled(true);
    }
  }, [cartState]);
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
      <button className={`default_btn ${buttonIsDisabled ? "disabled" : ""}`}>
        <Link href={session.status == "authenticated" ? "/checkout" : "/login"}>
          {props.t("Cart.CheckoutProceed")}
        </Link>
      </button>
    </div>
  );
};

export default withTranslation(CartTotal);
