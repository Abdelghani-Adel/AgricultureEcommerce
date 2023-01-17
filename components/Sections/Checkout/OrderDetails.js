import { Fragment } from "react";
import checkout from "../../../data/checkout.json";
import Link from "next/link";
import { withTranslation } from "react-multi-lang";

const priceTotal = checkout.reduce((totalPrice, item) => totalPrice + item.price * item.qty, 0);

const OrderDetails = (props) => {
  return (
    <Fragment>
      <table className="andro_responsive-table">
        <thead>
          <tr>
            <th>{props.t("Cart.Product")}</th>
            <th>{props.t("Cart.Quantity")}</th>
            <th>{props.t("Cart.Total")}</th>
          </tr>
        </thead>
        <tbody>
          {checkout.map((item, i) => (
            <tr key={i}>
              <td data-title="Product">
                <div className="andro_cart-product-wrapper">
                  <div className="andro_cart-product-body">
                    <h6>
                      {" "}
                      <Link href="#">{item.productname}</Link>{" "}
                    </h6>

                    <p>{item.qty} Kilos</p>
                  </div>
                </div>
              </td>
              <td data-title="Quantity">x{item.qty}</td>
              <td data-title="Total">
                {" "}
                <strong>
                  {new Intl.NumberFormat().format((item.qty * item.price).toFixed(2))}$
                </strong>{" "}
              </td>
            </tr>
          ))}
          <tr className="total">
            <td>
              <h6 className="mb-0">Grand Total</h6>
            </td>
            <td />
            <td>
              {" "}
              <strong>{new Intl.NumberFormat().format(priceTotal.toFixed(2))}$</strong>{" "}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="form-group">
        <label>{props.t("Checkout.Card")}</label>
        <input
          type="text"
          className="form-control"
          name="master-number"
          placeholder={props.t("Checkout.Card")}
        />
      </div>
      <div className="form-group">
        <label>{props.t("Checkout.FullName")}</label>
        <input
          type="text"
          className="form-control"
          name="master-name"
          placeholder={props.t("Checkout.FullName")}
        />
      </div>
      <div className="row">
        <div className="col-xl-6 form-group">
          <label>{props.t("Checkout.Expiry")}</label>
          <input
            type="text"
            className="form-control"
            name="master-expiry"
            placeholder={props.t("Checkout.Expiry")}
          />
        </div>
        <div className="col-xl-6 form-group">
          <label>CVV*</label>
          <input type="number" className="form-control" name="master-cvv" placeholder="CVV" />
        </div>
      </div>
      <p className="small">
        Your personal data will be used to process your order, support your experience throughout
        this website, and for other purposes described in our{" "}
        <Link className="btn-link" href="#">
          privacy policy.
        </Link>{" "}
      </p>
      <button type="submit" className="andro_btn-custom primary btn-block">
        {props.t("Checkout.PlaceOrder")}
      </button>
    </Fragment>
  );
};

export default withTranslation(OrderDetails);
