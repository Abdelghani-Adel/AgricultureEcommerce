import { useEffect, useState, useCallback } from "react";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import { getAuthHeaders } from "../../../helper/auth";
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
  cart: {
    success: true,
    Message: "string",
    totalPrice: 0,
    Cart_Ref: "string",
    Cust_Id: 0,
    Cart_Id: 0,
    lang: "string",
    items: [
      {
        Quote_S_Id: 0,
        Item_Id: 0,
        Item_Name: "string",
        Qty: 0,
        UnitPrice: 0,
        Quote_Date: "string",
        UOM_Id: 0,
        UOM_Name: "string",
        Cart_Id: 0,
        Supp_Id: 0,
        lang: "string",
      },
    ],
  },
};

const CheckoutContent = (props) => {
  const [reqBody, setReqBody] = useState(initReqBody);
  const cartState = useSelector((state) => state.cart);

  useEffect(() => {
    setReqBody({ ...reqBody, cart: { ...cartState } });
  }, [cartState]);

  const inputChangeHandler = useCallback((e) => {
    setReqBody({ ...reqBody, addr: { ...reqBody.addr, [e.target.name]: e.target.value } });
  });

  const placeOrderHandler = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/UPSSalesOrder`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify(reqBody),
    });

    console.log(res);
  };

  return (
    <div className="section">
      <div className="container">
        <form method="post">
          <div className="row">
            <BillingAddress inputChangeHandler={inputChangeHandler} />
            <CheckoutDetails placeOrderHandler={placeOrderHandler} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default withTranslation(CheckoutContent);
