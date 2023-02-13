import { useCallback, useState, useEffect } from "react";
import { withTranslation } from "react-multi-lang";
import { useDispatch, useSelector } from "react-redux";
import { getAuthHeaders } from "../../../helper/auth";
import { cartActions } from "../../../redux/slices/cartSlice";
import BillingAddress from "./BillingDetails/BillingAddress";
import CheckoutDetails from "./CheckoutDetails/CheckoutDetails";

const initReqBody = {
  addr: {
    Country_Id: 0,
    City_Id: 0,
    Gover_Id: 0,
    District_Id: 0,
    streetAdd: "string",
    buildingNo: "string",
  },
};

const CheckoutContent = (props) => {
  const cartState = useSelector((state) => state.cart);
  const [cartContent, setCartContent] = useState();

  useEffect(() => {
    const newCartContent = cartState.tempCheckoutCart ? cartState.tempCheckoutCart : cartState;
    setCartContent(newCartContent);
  }, []);

  const [reqBody, setReqBody] = useState({ ...initReqBody, cart: { ...cartContent } });

  const inputChangeHandler = useCallback((e) => {
    setReqBody({ ...reqBody, addr: { ...reqBody.addr, [e.target.name]: e.target.value } });
  });

  const hydrateReqBodyWithAddress = useCallback((address) => {
    setReqBody({ ...reqBody, addr: address });
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
            {cartContent && <CheckoutDetails cartItems={cartContent} />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default withTranslation(CheckoutContent);
