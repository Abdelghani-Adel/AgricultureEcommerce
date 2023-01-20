import BillingAddress from "./BillingDetails/BillingAddress";
import CheckoutDetails from "./CheckoutDetails/CheckoutDetails";

const CheckoutContent = (props) => {
  return (
    <div className="section">
      <div className="container">
        <form method="post">
          <div className="row">
            <BillingAddress />
            <CheckoutDetails />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutContent;
