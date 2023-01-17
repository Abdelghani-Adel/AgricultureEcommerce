import BillingAddress from "./BillingAddress";
import OrderDetails from "./OrderDetails";

const CheckoutContent = (props) => {
  return (
    <div className="section">
      <div className="container">
        <form method="post">
          <div className="row">
            <div className="col-xl-7">
              <BillingAddress />
            </div>
            <div className="col-xl-5 checkout-billing">
              <OrderDetails />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutContent;
