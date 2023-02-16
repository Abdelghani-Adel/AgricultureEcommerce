import { useCallback, useEffect, useState } from "react";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import { getAuthHeaders } from "../../../helper/auth";
import BillingAddress from "./BillingDetails/BillingAddress";
import CheckoutDetails from "./CheckoutDetails/CheckoutDetails";

const CheckoutContent = (props) => {
  const cartState = useSelector((state) => state.cart);
  const [reqBody, setReqBody] = useState();
  const [cartContent, setCartContent] = useState();

  useEffect(() => {
    let cart = {
      success: cartState.success,
      Message: cartState.Message,
      totalPrice: cartState.totalPrice,
      Cart_Ref: cartState.Cart_Ref,
      Cust_Id: cartState.Cust_Id,
      Cart_Id: cartState.Cart_Id,
      lang: "ar",
      currency: cartState.currency,
      items: [],
    };

    if (cartState.tempCheckoutCart) {
      cart = {
        ...cart,
        Cart_Id: 0,
        totalPrice: cartState.tempCheckoutCart.totalPrice,
        items: [...cartState.tempCheckoutCart.items],
      };
    } else {
      cart = {
        ...cart,
        totalPrice: cartState.checkedCartItemsTotalPrice,
        items: [...cartState.checkedCartItems],
      };
    }

    // const cartContent = cartState.tempCheckoutCart ? cartState.tempCheckoutCart : cartState;

    setCartContent(cart);
    setReqBody((prev) => {
      return { ...prev, cart: { ...cart } };
    });
  }, []);

  const inputChangeHandler = useCallback((e) => {
    setReqBody((prev) => {
      return { ...prev, addr: { ...prev.addr, [e.target.name]: e.target.value } };
    });
  });

  const hydrateReqBodyWithAddress = useCallback((address) => {
    setReqBody((prev) => {
      return { ...prev, addr: { ...address } };
    });
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/UPSSalesOrder`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify(reqBody),
    });

    const data = await res.json();
  };

  return (
    <div className="section">
      <div className="container">
        <form method="post" onSubmit={submitHandler}>
          <div className="row">
            <BillingAddress
              inputChangeHandler={inputChangeHandler}
              hydrateReqBodyWithAddress={hydrateReqBodyWithAddress}
            />
            {cartContent && <CheckoutDetails cartContent={cartContent} />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default withTranslation(CheckoutContent);
