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
    const cartContent = cartState.tempCheckoutCart ? cartState.tempCheckoutCart : cartState;
    setCartContent(cartContent);

    setReqBody((prev) => {
      return { ...prev, cart: { ...cartContent } };
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
    // console.log(data);
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
