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
  const [reqBody, setReqBody] = useState();
  const [cartContent, setCartContent] = useState();

  useEffect(() => {
    const newCartContent = cartState.tempCheckoutCart ? cartState.tempCheckoutCart : cartState;
    console.log(newCartContent);
    setCartContent(newCartContent);

    setReqBody({ ...initReqBody, cart: { ...newCartContent } });
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
    console.log(reqBody);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/UPSSalesOrder`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify(reqBody),
    });

    const data = await res.json();
    console.log(data);
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
